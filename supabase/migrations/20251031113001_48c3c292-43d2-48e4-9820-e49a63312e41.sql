-- Create enum for user roles
CREATE TYPE public.app_role AS ENUM ('superadmin', 'admin', 'user');

-- Create profiles table
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  role app_role NOT NULL DEFAULT 'user',
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'pending', 'rejected')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Create posts table
CREATE TABLE public.posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_by UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  section TEXT NOT NULL CHECK (section IN ('announcement', 'signal', 'update')),
  title TEXT NOT NULL,
  content_text TEXT,
  image_url TEXT,
  video_url TEXT,
  audio_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on posts
ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;

-- Create comments table
CREATE TABLE public.comments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id UUID REFERENCES public.posts(id) ON DELETE CASCADE NOT NULL,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  comment_text TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on comments
ALTER TABLE public.comments ENABLE ROW LEVEL SECURITY;

-- Create reactions table
CREATE TABLE public.reactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id UUID REFERENCES public.posts(id) ON DELETE CASCADE NOT NULL,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  reaction_type TEXT NOT NULL DEFAULT 'like',
  UNIQUE(post_id, user_id)
);

-- Enable RLS on reactions
ALTER TABLE public.reactions ENABLE ROW LEVEL SECURITY;

-- Create security definer functions to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.profiles
    WHERE id = _user_id
    AND role = _role
    AND status = 'active'
  )
$$;

CREATE OR REPLACE FUNCTION public.is_admin_or_superadmin(_user_id UUID)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.profiles
    WHERE id = _user_id
    AND role IN ('admin', 'superadmin')
    AND status = 'active'
  )
$$;

-- RLS Policies for profiles table
CREATE POLICY "Superadmin can do everything on profiles"
ON public.profiles
FOR ALL
USING (public.has_role(auth.uid(), 'superadmin'));

CREATE POLICY "Users can view their own profile"
ON public.profiles
FOR SELECT
USING (auth.uid() = id);

CREATE POLICY "Admins can view their own profile"
ON public.profiles
FOR SELECT
USING (public.has_role(auth.uid(), 'admin') AND auth.uid() = id);

-- RLS Policies for posts table
CREATE POLICY "Admins and superadmins can do everything on posts"
ON public.posts
FOR ALL
USING (public.is_admin_or_superadmin(auth.uid()));

CREATE POLICY "Users can view all posts"
ON public.posts
FOR SELECT
USING (true);

-- RLS Policies for comments table
CREATE POLICY "Admins and superadmins can do everything on comments"
ON public.comments
FOR ALL
USING (public.is_admin_or_superadmin(auth.uid()));

CREATE POLICY "Users can view all comments"
ON public.comments
FOR SELECT
USING (true);

CREATE POLICY "Users can insert their own comments"
ON public.comments
FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own comments"
ON public.comments
FOR UPDATE
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own comments"
ON public.comments
FOR DELETE
USING (auth.uid() = user_id);

-- RLS Policies for reactions table
CREATE POLICY "Admins and superadmins can do everything on reactions"
ON public.reactions
FOR ALL
USING (public.is_admin_or_superadmin(auth.uid()));

CREATE POLICY "Users can view all reactions"
ON public.reactions
FOR SELECT
USING (true);

CREATE POLICY "Users can insert their own reactions"
ON public.reactions
FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own reactions"
ON public.reactions
FOR UPDATE
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own reactions"
ON public.reactions
FOR DELETE
USING (auth.uid() = user_id);

-- Create storage bucket for media
INSERT INTO storage.buckets (id, name, public) VALUES ('media', 'media', true);

-- Storage policies for media bucket
CREATE POLICY "Admins and superadmins can upload media"
ON storage.objects
FOR INSERT
WITH CHECK (
  bucket_id = 'media' 
  AND public.is_admin_or_superadmin(auth.uid())
);

CREATE POLICY "Admins and superadmins can delete media"
ON storage.objects
FOR DELETE
USING (
  bucket_id = 'media' 
  AND public.is_admin_or_superadmin(auth.uid())
);

CREATE POLICY "Everyone can view media"
ON storage.objects
FOR SELECT
USING (bucket_id = 'media');

-- Trigger to create profile on user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE PLPGSQL
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, email, role, status)
  VALUES (
    NEW.id,
    NEW.email,
    'user',
    'active'
  );
  RETURN NEW;
END;
$$;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Enable realtime for posts table
ALTER PUBLICATION supabase_realtime ADD TABLE public.posts;