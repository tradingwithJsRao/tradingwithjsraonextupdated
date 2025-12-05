import Head from "next/head";
import Link from "next/link";
import { siteMetadata } from "@/lib/siteMetadata";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DisclaimerPage() {
  const pageUrl = `${siteMetadata.siteUrl}/disclaimer`;

  // Optional JSON-LD for a legal page
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Disclaimer",
    url: pageUrl,
    // FIX was here: changed .title to .siteName
    isPartOf: { "@type": "WebSite", name: siteMetadata.siteName, url: siteMetadata.siteUrl },
    inLanguage: "en",
  };

  return (
    <div className="min-h-screen bg-background text-foreground px-6 md:px-10 py-10 max-w-5xl mx-auto">
      <Head>
        {/* FIX was here: changed .title to .siteName */}
        <title>Disclaimer – {siteMetadata.siteName}</title>
        <meta
          name="description"
          content="Important risk and responsibility information for users of TradingWithJSRao.com, including no-financial-advice, market risk, accuracy, and affiliate disclosures."
        />
        <link rel="canonical" href={pageUrl} />
        {/* Open Graph / Twitter */}
        <meta property="og:type" content="website" />
        {/* FIX was here: changed .title to .siteName */}
        <meta property="og:title" content={`Disclaimer – ${siteMetadata.siteName}`} />
        <meta
          property="og:description"
          content="Important risk and responsibility information for users of TradingWithJSRao.com."
        />
        <meta property="og:url" content={pageUrl} />
        <meta
          property="og:image"
          content={`${siteMetadata.siteUrl}${
            siteMetadata.defaultImage.startsWith("/") ? siteMetadata.defaultImage : `/${siteMetadata.defaultImage}`
          }`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        {/* FIX was here: changed .title to .siteName */}
        <meta name="twitter:title" content={`Disclaimer – ${siteMetadata.siteName}`} />
        <meta
          name="twitter:description"
          content="Important risk and responsibility information for users of TradingWithJSRao.com."
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Disclaimer</h1>
      <p className="text-sm opacity-70 mb-8">Last Updated: {new Date().getFullYear()}</p>

      <div className="prose dark:prose-invert max-w-none">
        <p>
          The information provided on <strong>{siteMetadata.siteName}</strong> ({siteMetadata.siteUrl})—including
          articles, signals, charts, tools, and any educational materials—is intended <strong>solely for educational
          and informational purposes</strong>. We are <strong>not</strong> registered financial, investment, tax, or
          legal advisors. <strong>Nothing</strong> on this website constitutes financial advice, investment advice,
          trading advice, or any other advice.
        </p>

        <h2>No Financial Advice</h2>
        <p>
          Trading and investing in cryptocurrencies, forex, commodities, stocks, and derivatives involves{" "}
          <strong>substantial risk of loss</strong>. You are solely responsible for your decisions. Always do your own
          research (DYOR) and consult a qualified professional before making financial decisions.
        </p>

        <h2>Market Risk &amp; Performance</h2>
        <ul>
          <li>Past performance is <strong>not</strong> indicative of future results.</li>
          <li>Prices can be highly volatile; you may lose part or all of your capital.</li>
          <li>No strategy, signal, or analysis guarantees profit or success.</li>
        </ul>

        <h2>Accuracy &amp; Timeliness</h2>
        <p>
          While we strive for accuracy, we do not guarantee completeness, reliability, or timeliness of content. Market
          conditions, data sources, APIs, and third-party services may change without notice.
        </p>

        <h2>Signals, Tools &amp; Education</h2>
        <p>
          Any signals, indicators, tools, or tutorials are provided “as is” for learning purposes. Use them at your own
          risk. You are responsible for risk management, position sizing, and execution.
        </p>

        <h2>Affiliate &amp; External Links</h2>
        <p>
          We may include affiliate links and/or external resources. We may receive a commission if you purchase through
          those links. We do not control, endorse, or assume responsibility for external content, policies, or services.
        </p>

        <h2>Regulatory &amp; Regional Restrictions</h2>
        <p>
          Ensure that accessing this website and participating in trading activities is <strong>legal in your
          jurisdiction</strong>. You are responsible for complying with local laws and regulations.
        </p>

        <h2>Tax &amp; Legal Responsibility</h2>
        <p>
          You are responsible for understanding and fulfilling your tax obligations and any other legal requirements
          relevant to your activities.
        </p>

        <h2>No Client Relationship</h2>
        <p>
          Use of this website does not create a client, advisory, fiduciary, or professional relationship between you
          and {siteMetadata.siteName}.
        </p>

        <h2>Minors</h2>
        <p>
          This website is intended for users aged <strong>18+</strong>. If you are under the age of majority in your
          jurisdiction, do not use this website.
        </p>

        <h2>Changes</h2>
        <p>
          We may update this Disclaimer at any time. Continued use of the website means you accept the current version.
        </p>

        <h2>Contact</h2>
        <p>
          Questions? Reach us via the{" "}
          <Link href="/contact" className="text-primary hover:underline">
            Contact page
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
