import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { siteMetadata } from '@/lib/siteMetadata';
import { Button } from "@/components/ui/button";
import Footer from '@/components/Footer';

/**
 * Type definition for a blog summary. We fetch only the fields needed to
 * render the listing. Additional fields can be added if necessary.
 */
interface BlogSummary {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  cover_image: string | null;
  created_at: string;
}

interface BlogIndexProps {
  blogs: BlogSummary[];
}

/**
 * Fetch a list of published blog posts at build time. Pre-rendering the
 * blog index ensures search engines can crawl the list of posts and
 * improves performance【723943315381423†L522-L525】.
 */
export const getStaticProps: GetStaticProps<BlogIndexProps> = async () => {
  const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  let blogs: BlogSummary[] = [];
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    console.warn('Supabase environment variables are missing');
    return { props: { blogs }, revalidate: 60 };
  }
  try {
    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/blogs?published=eq.true&select=id,title,slug,excerpt,cover_image,created_at&order=created_at.desc`,
      {
        headers: {
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        },
      },
    );
    blogs = (await response.json()) as BlogSummary[];
  } catch (error) {
    console.error('Error fetching blog list', error);
  }
  return { props: { blogs }, revalidate: 60 };
};

/**
 * Blog index page listing all published blog posts. Each card links to
 * its respective blog detail page. The page includes SEO metadata and
 * canonical links for better discoverability【739602246442254†L24-L53】.
 */
export default function BlogIndex({ blogs }: BlogIndexProps) {
  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>Blog – JS RAO</title>
        <meta
          name="description"
          content="Browse the latest trading insights, tips and education from JS RAO. Read our blog posts on crypto, forex, stocks and more."
        />
        <link rel="canonical" href={`${siteMetadata.siteUrl}/blog`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Blog – JS RAO" />
        <meta
          property="og:description"
          content="Browse the latest trading insights, tips and education from JS RAO. Read our blog posts on crypto, forex, stocks and more."
        />
        <meta property="og:url" content={`${siteMetadata.siteUrl}/blog`} />
        <meta property="og:image" content={siteMetadata.defaultImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog – JS RAO" />
        <meta
          name="twitter:description"
          content="Browse the latest trading insights, tips and education from JS RAO. Read our blog posts on crypto, forex, stocks and more."
        />
        <meta name="twitter:image" content={siteMetadata.defaultImage} />
      </Head>
       <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>
      </header>
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold gradient-text">Blog</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-12">
        {blogs.length === 0 ? (
          <p className="text-muted-foreground">No blog posts found. Please check back later.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => {
              const dateStr = new Date(blog.created_at).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              });
              return (
                <div key={blog.id} className="bg-card rounded-lg overflow-hidden shadow-sm border">
                  {blog.cover_image && (
                    <div className="h-48 overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={blog.cover_image}
                        alt={blog.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-4 space-y-2">
                    <h2 className="text-xl font-semibold">
                      <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                    </h2>
                    <div className="text-sm text-muted-foreground flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" /> {dateStr}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="h-4 w-4" /> JS RAO
                      </span>
                    </div>
                    {blog.excerpt && <p className="text-sm text-muted-foreground line-clamp-3">{blog.excerpt}</p>}
                    <Link href={`/blog/${blog.slug}`} className="text-primary hover:underline text-sm font-medium">
                      Read more →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
