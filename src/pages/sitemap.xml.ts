import type { GetServerSideProps } from 'next';

/**
 * Helper function to build the XML string.
 * This function is unchanged.
 */
function toXml(
  urls: { loc: string; lastmod?: string; priority?: number; changefreq?: string }[]
) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `<url>
  <loc>${u.loc}</loc>
  ${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ''}
  ${u.changefreq ? `<changefreq>${u.changefreq}</changefreq>` : ''}
  ${u.priority ? `<priority>${u.priority.toFixed(1)}</priority>` : ''}
</url>`
  )
  .join('\n')}
</urlset>`;
}

/**
 * This is the empty React component.
 * It won't be rendered because getServerSideProps will intercept
 * the request and send the XML response.
 */
const Sitemap = () => {};

/**
 * This is where all your logic goes.
 * We fetch data and build the sitemap here, on the server.
 */
export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const base = 'https://tradingwithjsrao.com';

  // 1) Core static pages
  const urls: { loc: string; lastmod?: string; priority?: number; changefreq?: string }[] = [
    { loc: `${base}`, changefreq: 'daily', priority: 1.0 },
    { loc: `${base}/about`, changefreq: 'monthly', priority: 0.6 },
    { loc: `${base}/contact`, changefreq: 'monthly', priority: 0.5 },
    { loc: `${base}/privacy`, changefreq: 'yearly', priority: 0.3 },
    { loc: `${base}/terms`, changefreq: 'yearly', priority: 0.3 },
    { loc: `${base}/disclaimer`, changefreq: 'yearly', priority: 0.3 },
    { loc: `${base}/blog`, changefreq: 'daily', priority: 0.8 },
  ];

  // 2) Add dynamic blog posts from Supabase
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (supabaseUrl && anon) {
      const endpoint =
        `${supabaseUrl}/rest/v1/blogs` +
        `?select=slug,updated_at,created_at,published` +
        `&published=eq.true`;

      const headers = { apikey: anon, Authorization: `Bearer ${anon}` };

      const r = await fetch(endpoint, { headers });

      // Add a check to make sure the fetch was successful
      if (!r.ok) {
        throw new Error(`Sitemap fetch failed: ${r.statusText}`);
      }

      const posts = (await r.json()) as Array<{
        slug?: string;
        updated_at?: string;
        created_at?: string;
      }>;

      // Add a check to prevent "not iterable" error if posts isn't an array
      if (Array.isArray(posts)) {
        for (const p of posts) {
          if (!p?.slug) continue;
          const lastmod = p.updated_at || p.created_at;
          urls.push({
            loc: `${base}/blog/${p.slug}`,
            lastmod: lastmod ? new Date(lastmod).toISOString() : undefined,
            changefreq: 'daily',
            priority: 0.7,
          });
        }
      } else {
        console.warn("Sitemap: Supabase query did not return an array.");
      }
    }
  } catch (e) {
    // Keep sitemap valid even if fetch fails
    console.warn('Sitemap fetch failed:', e);
  }

  // 3) Return XML + cache via Vercel CDN
  const xml = toXml(urls);
  res.setHeader('Content-Type', 'application/xml; charset=UTF-8');
  // cache for 1h, allow 10m stale while revalidating
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=600');
  
  // Send the XML response
  res.write(xml);
  res.end();

  // 4) Return empty props
  return {
    props: {},
  };
};

export default Sitemap;
