import Head from "next/head";
import Link from "next/link";
import { siteMetadata } from "@/lib/siteMetadata";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground p-6 md:p-10 max-w-5xl mx-auto">
      <Head>
        {/* FIX was here: changed .title to .siteName */}
        <title>Terms & Conditions – {siteMetadata.siteName}</title>
        <meta
          name="description"
          content="Read the legal terms and conditions that govern use of TradingWithJSRao.com and its services."
        />
        <link rel="canonical" href={`${siteMetadata.siteUrl}/terms`} />

        {/* OpenGraph */}
        <meta property="og:title" content="Terms & Conditions" />
        <meta
          property="og:description"
          content="Legal terms for users of TradingWithJSRao.com."
        />
        <meta property="og:url" content={`${siteMetadata.siteUrl}/terms`} />
        <meta property="og:type" content="website" />
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
      <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>

      <p className="mb-4">
        Welcome to TradingWithJSRao.com. By accessing or using our website and
        services, you agree to the following Terms & Conditions. If you do not
        agree with any part, please discontinue use immediately.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-3">1. No Financial Advice</h2>
      <p className="mb-4">
        All content, signals, and analysis provided by TradingWithJSRao are for
        **educational and informational purposes only**. We are not registered
        financial advisors. Any trading decision you make is solely at your own
        risk.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-3">2. User Responsibilities</h2>
      <p className="mb-4">
        Users are responsible for securing their own accounts, ensuring correct
        information, and following all applicable laws in their jurisdiction.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-3">3. Payments & Refunds</h2>
      <p className="mb-4">
        Paid plans or services are non‑refundable once activated. By subscribing
        or purchasing access to our digital products, you acknowledge that
        there is no way to “return” digital content. Any disputes must be
        communicated to our support team. For full details on our policies,
        please review our
        <Link href="/refund" className="text-primary hover:underline ml-1">
          Refund & Cancellation Policy
        </Link>.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-3">4. Intellectual Property</h2>
      <p className="mb-4">
        All content, branding, signals, and materials on this website are the
        exclusive property of TradingWithJSRao and protected by copyright laws.
        Redistribution or resale is prohibited.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-3">5. Limitation of Liability</h2>
      <p className="mb-4">
        TradingWithJSRao is not liable for any losses, damage, or financial risk
        resulting from your actions or use of our services.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-3">6. Changes to Terms</h2>
      <p className="mb-4">
        We may update these Terms occasionally. Continued use of the website
        means you accept the updated Terms & Conditions.
      </p>

      <p className="mt-8">
        If you have any questions, contact us at{" "}
        <Link href="/contact" className="text-primary hover:underline">
          Contact Page
        </Link>
        .
      </p>

      <p className="mt-2 text-sm opacity-70">
        Last Updated: {new Date().getFullYear()}
      </p>
    </div>
  );
}
