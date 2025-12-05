-- Drop dependent policies first
DROP POLICY IF EXISTS "Superadmin can do everything on profiles" ON public.profiles;
DROP POLICY IF EXISTS "Admins can view their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can view their own profile" ON public.profiles;

-- Drop existing insecure functions
DROP FUNCTION IF EXISTS public.has_role(uuid, app_role) CASCADE;
DROP FUNCTION IF EXISTS public.is_admin_or_superadmin(uuid) CASCADE;

-- Create user_roles table for secure role management
CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  created_at timestamp with time zone DEFAULT now(),
  UNIQUE (user_id, role)
);

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create sessions table for single-device authentication
CREATE TABLE public.user_sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  session_id text NOT NULL,
  device_info text,
  created_at timestamp with time zone DEFAULT now(),
  UNIQUE (user_id)
);

ALTER TABLE public.user_sessions ENABLE ROW LEVEL SECURITY;

-- Migrate existing roles from profiles to user_roles
INSERT INTO public.user_roles (user_id, role)
SELECT id, role FROM public.profiles
ON CONFLICT (user_id, role) DO NOTHING;

-- Remove role column from profiles (keeping status for approval workflow)
ALTER TABLE public.profiles DROP COLUMN IF EXISTS role;

-- Create hardened security definer function for role checking
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = pg_catalog, public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- Create hardened function for admin/superadmin check
CREATE OR REPLACE FUNCTION public.is_admin_or_superadmin(_user_id uuid)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = pg_catalog, public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role IN ('admin', 'superadmin')
  )
$$;

-- Create secure function for updating user roles (superadmin only)
CREATE OR REPLACE FUNCTION public.admin_update_user_role(
  target_user_id uuid,
  new_role app_role
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = pg_catalog, public
AS $$
BEGIN
  IF NOT public.has_role(auth.uid(), 'superadmin') THEN
    RAISE EXCEPTION 'Unauthorized: Only superadmins can update roles';
  END IF;
  
  DELETE FROM public.user_roles WHERE user_id = target_user_id;
  INSERT INTO public.user_roles (user_id, role)
  VALUES (target_user_id, new_role);
END;
$$;

-- Create secure function for updating user status (superadmin only)
CREATE OR REPLACE FUNCTION public.admin_update_user_status(
  target_user_id uuid,
  new_status text
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = pg_catalog, public
AS $$
BEGIN
  IF NOT public.has_role(auth.uid(), 'superadmin') THEN
    RAISE EXCEPTION 'Unauthorized: Only superadmins can update status';
  END IF;
  
  IF new_status NOT IN ('active', 'pending', 'rejected') THEN
    RAISE EXCEPTION 'Invalid status value';
  END IF;
  
  UPDATE public.profiles 
  SET status = new_status
  WHERE id = target_user_id;
END;
$$;

-- Create function for single-device authentication
CREATE OR REPLACE FUNCTION public.enforce_single_device_login()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = pg_catalog, public
AS $$
BEGIN
  INSERT INTO public.user_sessions (user_id, session_id, device_info)
  VALUES (NEW.user_id, NEW.id::text, NEW.user_agent)
  ON CONFLICT (user_id) 
  DO UPDATE SET 
    session_id = NEW.id::text,
    device_info = NEW.user_agent,
    created_at = now();
  
  RETURN NEW;
END;
$$;

-- Create trigger for single device enforcement on auth.sessions
CREATE TRIGGER enforce_single_device
  AFTER INSERT ON auth.sessions
  FOR EACH ROW
  EXECUTE FUNCTION public.enforce_single_device_login();

-- Update handle_new_user to use user_roles table
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = pg_catalog, public
AS $$
BEGIN
  INSERT INTO public.profiles (id, email, status)
  VALUES (NEW.id, NEW.email, 'active');
  
  INSERT INTO public.user_roles (user_id, role)
  VALUES (NEW.id, 'user');
  
  RETURN NEW;
END;
$$;

-- RLS Policies for user_roles
CREATE POLICY "Users can view their own roles"
ON public.user_roles FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Superadmins can view all roles"
ON public.user_roles FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'superadmin'));

CREATE POLICY "Only functions can modify roles"
ON public.user_roles FOR ALL
TO authenticated
USING (false)
WITH CHECK (false);

-- RLS Policies for user_sessions
CREATE POLICY "Users can view their own sessions"
ON public.user_sessions FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

-- Recreate profiles RLS policies
CREATE POLICY "Users can view their own profile"
ON public.profiles FOR SELECT
TO authenticated
USING (auth.uid() = id);

CREATE POLICY "Admins can view their own profile"
ON public.profiles FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin') AND auth.uid() = id);

CREATE POLICY "Superadmin can do everything on profiles"
ON public.profiles FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'superadmin'));

-- Make storage bucket private and add RLS policies
UPDATE storage.buckets SET public = false WHERE id = 'media';

-- Storage RLS policies
CREATE POLICY "Authenticated users can view media"
ON storage.objects FOR SELECT
TO authenticated
USING (bucket_id = 'media');

CREATE POLICY "Admins and superadmins can upload media"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (
  bucket_id = 'media' AND
  public.is_admin_or_superadmin(auth.uid())
);

CREATE POLICY "Admins and superadmins can update media"
ON storage.objects FOR UPDATE
TO authenticated
USING (
  bucket_id = 'media' AND
  public.is_admin_or_superadmin(auth.uid())
);

CREATE POLICY "Admins and superadmins can delete media"
ON storage.objects FOR DELETE
TO authenticated
USING (
  bucket_id = 'media' AND
  public.is_admin_or_superadmin(auth.uid())
);