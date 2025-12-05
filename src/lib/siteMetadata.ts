// src/lib/siteMetadata.ts
/**
 * Centralised site metadata configuration. All pages can import values from
 * this file to populate `<Head>` tags consistently. Having a single source
 * of truth makes it easier to update titles, descriptions and canonical
 * references across the project. See Next.js SEO guidelines for more
 * information on using the `Head` component to set titles and descriptions【739602246442254†L24-L53】.
 */

export const siteMetadata = {
  /**
   * The base URL of your website. Always include the protocol and no
   * trailing slash. This value is used when generating canonical URLs and
   * constructing absolute links. Using absolute URLs in canonical tags is
   * recommended by SEO best practices【407282748679364†L170-L187】.
   */
  siteUrl: 'https://tradingwithjsrao.com',

  // --- FIXES ADDED HERE ---
  /**
   * The name of the site. Used in page titles and metadata.
   * This fixes the error in disclaimer.tsx and terms.tsx
   */
  siteName: 'JS RAO',

  /**
   * A short, memorable title for the site.
   */
  title: 'Trading With JS Rao',
  // --- END OF FIXES ---

  /**
   * The default title for pages that don't specify their own. It should
   * succinctly describe your brand and include relevant keywords.
   */
  defaultTitle: 'JS RAO – Expert Crypto & Financial Trading Services',

  /**
   * A short description used as the default meta description for pages
   * without their own description. Descriptions can help improve click‑through
   * rates on search result pages even though they are not a direct ranking
   * factor【739602246442254†L45-L53】.
   */
  defaultDescription:
    'Professional trading guidance from JS RAO – a Chartered Accountant specialising in crypto, forex, commodities, stocks and indices.',

  /**
   * A default image used for Open Graph and Twitter cards. Social previews
   * appear when your links are shared. The image should be stored in the
   * public directory and be representative of your brand. You can generate
   * a custom image at build time if needed.
   */
  defaultImage: '/assets/hero-banner.png',

  /**
   * Social profile links. These values are used both in structured data and
   * optionally displayed on pages. Importing from the Footer ensures the
   * social links remain consistent across your site.
   */
  socialLinks: {
    facebook: 'https://www.facebook.com/share/1DJcVPdd5J/',
    instagram: 'https://www.instagram.com/jsraoaca?igsh=YzdrYWtrZ3g1Z2cw',
    youtube: 'https://youtube.com/@cryptowithjsrao?si=a8aTR3gbiDmdKkbE',
    telegram: 'https://t.me/JsRaoACCA',
    tiktok: 'https://www.tiktok.com/@js.rao5',
    whatsapp: 'https://whatsapp.com/channel/0029VactXmlId7nSPgwgTP21',
  },

  /**
   * Organisation schema used in structured data. Adding JSON‑LD
   * structured data helps search engines understand your business details
   *【44261447069844†L438-L476】. Update the values below to reflect your
   * organisation’s information. Social profiles are referenced via
   * `sameAs`.
   */
  organisationSchema: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'JS RAO',
    description:
      'JS RAO provides professional trading education and financial guidance across crypto, forex, commodities, stocks and indices.',
    url: 'https://tradingwithjsrao.com',
    logo: 'https://tradingwithjsrao.com/assets/hero-banner.png',
    email: 'mailto:raojs04@gmail.com',
    telephone: '',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'PK',
      addressRegion: 'Punjab',
      addressLocality: 'Ranjanpur',
    },
    sameAs: [
      'https://www.facebook.com/share/1DJcVPdd5J/',
      'https://www.instagram.com/jsraoaca?igsh=YzdrYWtrZ3g1Z2cw',
      'https://youtube.com/@cryptowithjsrao?si=a8aTR3gbiDmdKkbE',
      'https://t.me/JsRaoACCA',
      'https://www.tiktok.com/@js.rao5',
      'https://whatsapp.com/channel/0029VactXmlId7nSPgwgTP21',
    ],
  },
} as const;
