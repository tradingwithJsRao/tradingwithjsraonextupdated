import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Qualifications from "@/components/Qualifications";
import About from "@/components/About";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import ScrollToTop from "@/components/ScrollToTop";
import ThemeToggle from "@/components/ThemeToggle";

import Head from 'next/head';
import { siteMetadata } from '@/lib/siteMetadata';

const Index = () => {
  const {
    siteUrl,
    defaultTitle,
    defaultDescription,
    defaultImage,
    organisationSchema,
  } = siteMetadata;
  return (
    <>
      {/*
        Set canonical, title and description for the homepage. According to
        Next.js SEO guidelines, using the Head component ensures search
        engines can read metadata and improves click‑through rates【739602246442254†L24-L53】.
      */}
      <Head>
        <title>{defaultTitle}</title>
        <meta name="description" content={defaultDescription} />
        <link rel="canonical" href={siteUrl} />
        {/* Open Graph tags for social sharing */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={defaultTitle} />
        <meta property="og:description" content={defaultDescription} />
        <meta property="og:url" content={siteUrl} />
        <meta
          property="og:image"
          content={`${siteUrl}${defaultImage.startsWith('/') ? defaultImage : `/${defaultImage}`}`}
        />
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={defaultTitle} />
        <meta name="twitter:description" content={defaultDescription} />
        <meta
          name="twitter:image"
          content={`${siteUrl}${defaultImage.startsWith('/') ? defaultImage : `/${defaultImage}`}`}
        />
        {/* Structured data for the organisation. Embedding JSON‑LD helps search
            engines understand your business details【44261447069844†L438-L476】. */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationSchema) }}
        />
      </Head>
      <div className="min-h-screen">
        <Hero />
        <Gallery />
        <Qualifications />
        <About />
        <Services />
        <Pricing />
        <Testimonials />
        <Blog />
        <Footer />
        <MobileNav />
        <ScrollToTop />
        <ThemeToggle />
        <div className="h-20 md:hidden" /> {/* Spacer for mobile nav */}
      </div>
    </>
  );
};

export default Index;
