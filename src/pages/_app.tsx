import type { AppProps } from 'next/app';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Poppins, Orbitron } from 'next/font/google';
import { useEffect } from 'react';

// Vercel monitoring: SpeedInsights and Analytics allow you to collect performance
// metrics and usage data. These components automatically inject the necessary
// scripts when rendered. They must be imported from "@vercel/..." as shown.
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

// Import global styles. Without this import, Tailwind classes and custom
// variables will not be included in the build. The file src/index.css
// defines our design system, base styles and utility classes.
import '@/index.css';

// Import Google fonts via next/font to avoid blocking the rendering pipeline.  
// The `variable` option exposes a CSS custom property that we can reference in our
// styles, and the fonts are automatically optimised and self‑hosted by Next.js.  
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});
const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-orbitron',
});

// Create a single QueryClient instance for the entire app
const queryClient = new QueryClient();

/**
 * Custom App component wraps all pages with providers used across the site.
 * In Next.js this file replaces the root-level App component used in React Router.
 */
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Vercel performance and analytics scripts */}
      <SpeedInsights />
      <Analytics />
      <QueryClientProvider client={queryClient}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TooltipProvider>
            {/*
              Wrap the entire application in a div containing the CSS variables for our
              custom fonts. This ensures the fonts are available to our Tailwind
              classes without loading blocking stylesheets.
            */}
            <div className={`${poppins.variable} ${orbitron.variable}`}>
              {/* Toast containers for notifications */}
              <Toaster />
              <Sonner />
              {/* Render the actual page component */}
              <Component {...pageProps} />
            </div>
          </TooltipProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;