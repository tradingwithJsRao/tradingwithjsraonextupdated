import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Configure the image optimisation pipeline. Allow remote images from any
  // secure host. If your project uses a specific image CDN (e.g. Supabase
  // storage), narrow this down to the appropriate domain(s) to improve
  // security and caching. Enabling remotePatterns is necessary for
  // Next.js to automatically serve modern formats like WebP via
  // the `<Image>` component.
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  webpack: (config) => {
    // alias '@' -> src
    config.resolve.alias['@'] = path.resolve(process.cwd(), 'src');
    return config;
  },
};

export default nextConfig;
