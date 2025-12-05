import Head from "next/head";
import { siteMetadata } from '@/lib/siteMetadata';
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

/**
 * About page describing who JS RAO is and what the organisation offers.
 */
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>About Us – JS RAO | Financial & Trading Expert</title>
        <meta
          name="description"
          content="Learn about JS RAO, a Chartered Accountant and trading expert specialising in crypto, forex, commodities, stocks, and indices. Discover our mission, expertise and qualifications."
        />
        <link rel="canonical" href={`${siteMetadata.siteUrl}/about`} />
        {/* Open Graph metadata for social preview */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About Us – JS RAO | Financial & Trading Expert" />
        <meta
          property="og:description"
          content="Learn about JS RAO, a Chartered Accountant and trading expert specialising in crypto, forex, commodities, stocks, and indices. Discover our mission, expertise and qualifications."
        />
        <meta property="og:url" content={`${siteMetadata.siteUrl}/about`} />
        <meta
          property="og:image"
          content={`${siteMetadata.siteUrl}${siteMetadata.defaultImage.startsWith('/') ? siteMetadata.defaultImage : `/${siteMetadata.defaultImage}`}`}
        />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us – JS RAO | Financial & Trading Expert" />
        <meta
          name="twitter:description"
          content="Learn about JS RAO, a Chartered Accountant and trading expert specialising in crypto, forex, commodities, stocks, and indices."
        />
        <meta
          name="twitter:image"
          content={`${siteMetadata.siteUrl}${siteMetadata.defaultImage.startsWith('/') ? siteMetadata.defaultImage : `/${siteMetadata.defaultImage}`}`}
        />
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

      <main className="container mx-auto px-4 py-12">
        <article className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Us
          </h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
            <p className="text-muted-foreground leading-relaxed">
              JS Rao is a distinguished professional in the world of finance and trading, bringing years of
              expertise in navigating the complex landscapes of cryptocurrencies, forex, commodities, stocks,
              and indices. As a Chartered Accountant and CEO, JS Rao combines deep financial knowledge with
              practical trading experience to help individuals and businesses achieve their financial goals.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Expertise</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              With extensive experience in both traditional and modern financial markets, we specialise in:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Cryptocurrency trading and investment strategies</li>
              <li>Foreign exchange (Forex) market analysis</li>
              <li>Commodities and precious metals trading</li>
              <li>Stock market research and portfolio management</li>
              <li>Index trading and derivatives</li>
              <li>Professional accounting and financial advisory services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our mission is to empower traders and investors with the knowledge, tools and insights they
              need to make informed financial decisions. We are committed to providing high-quality educational
              content, professional guidance and reliable market analysis to help our clients succeed in today’s
              dynamic financial markets.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Professional Qualifications</h2>
            <p className="text-muted-foreground leading-relaxed">
              JS Rao holds prestigious qualifications including membership with ACCA (Association of Chartered
              Certified Accountants), ICAEW (Institute of Chartered Accountants in England and Wales) and CAT
              (Certified Accounting Technician). These credentials reflect our commitment to maintaining the
              highest professional standards in financial services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              Whether you’re a beginner looking to learn the basics of trading or an experienced trader seeking
              advanced strategies, we offer personalised solutions tailored to your needs. Our approach combines
              technical analysis, fundamental research and risk management principles to help you navigate the
              markets with confidence.
            </p>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}
