import Head from "next/head";
import { startTransition } from 'react';
import { siteMetadata } from "@/lib/siteMetadata";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        // Defer the redirect so it doesn't block the main thread. startTransition tells React
        // that the navigation is a non‑urgent state update, improving interaction responsiveness.
        startTransition(() => {
          router.replace("/admin/blog");
        });
      }
    };
    checkSession();
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { email, password } = formData;

    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      toast.error(error.message || "Unable to sign in");
      setLoading(false);
      return;
    }

    toast.success("Successfully logged in");
    // Use a React transition for navigation to prevent blocking the UI.
    startTransition(() => {
      router.push("/admin/blog");
    });
  };

  return (
    <>
      {/*
       * Admin pages should not be indexed by search engines. We include
       * noindex robots directives along with canonical and social metadata
       * for completeness. Even though canonical tags and Open Graph data
       * don't improve ranking for private pages, they ensure consistent
       * metadata if the URL is shared inadvertently. The meta description
       * clearly explains the purpose of the page【739602246442254†L24-L53】.
       */}
      <Head>
        <title>Admin Login – JS RAO</title>
        <meta
          name="description"
          content="Sign in as an admin to manage blog posts on JS RAO."
        />
        {/* Disallow indexing of the admin login page */}
        <meta name="robots" content="noindex, nofollow" />
        {/* Canonical URL for the admin login page */}
        <link
          rel="canonical"
          href={`${siteMetadata.siteUrl}/login`}
        />
        {/* Open Graph metadata */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Admin Login – JS RAO" />
        <meta
          property="og:description"
          content="Sign in as an admin to manage blog posts on JS RAO."
        />
        <meta property="og:url" content={`${siteMetadata.siteUrl}/login`} />
        <meta property="og:image" content={siteMetadata.defaultImage} />
        {/* Twitter card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Admin Login – JS RAO" />
        <meta
          name="twitter:description"
          content="Sign in as an admin to manage blog posts on JS RAO."
        />
        <meta name="twitter:image" content={siteMetadata.defaultImage} />
      </Head>

      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Admin Sign In</CardTitle>
            <CardDescription>Enter your credentials to access the admin dashboard.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                />
              </div>

              <Button type="submit" className="w-full" variant="premium" disabled={loading}>
                {loading ? "Signing In..." : "Sign In"}
              </Button>
            </form>

            <p className="mt-4 text-center text-sm text-muted-foreground">
              Not an admin? Return to&nbsp;
              <Link href="/" className="underline">Home</Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
