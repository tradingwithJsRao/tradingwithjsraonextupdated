import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

/**
 * Custom Document component.  
 *
 * We move any third‑party scripts into the `next/script` component with a
 * `lazyOnload` strategy. This ensures that external scripts (such as Google
 * AdSense) are fetched after the main content has finished rendering, which
 * prevents them from blocking the first paint.  
 */
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* The Google AdSense script is loaded lazily via next/script to avoid blocking rendering */}
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1577662195303747"
          strategy="lazyOnload"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Main />
        {/* `NextScript` must still be included to load the remainder of the Next.js framework */}
        <NextScript />
      </body>
    </Html>
  );
}
