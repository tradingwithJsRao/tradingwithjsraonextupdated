import Head from "next/head";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteMetadata } from "@/lib/siteMetadata";

/**
 * Refund & Cancellation Policy page.
 *
 * Many payment gateways require merchants to provide a dedicated refund or cancellation policy.
 * This page outlines our stance on refunds for digital services (signals, live sessions, etc.),
 * ensures compliance with PayPro/PayPak approval guidelines, and guides customers on how to
 * request assistance if they believe a charge was made in error. Keeping a clear policy builds
 * trust with customers and helps payment processors understand the nature of your offerings.
 */
export default function RefundPolicyPage() {
  const pageUrl = `${siteMetadata.siteUrl}/refund`;
  return (
    <div className="min-h-screen bg-background text-foreground p-6 md:p-10 max-w-5xl mx-auto">
      <Head>
        <title>Refund & Cancellation Policy – {siteMetadata.siteName}</title>
        <meta
          name="description"
          content="Read the refund and cancellation policy for TradingWithJSRao.com's digital trading services and education plans."
        />
        <link rel="canonical" href={pageUrl} />
        {/* OpenGraph metadata */}
        <meta property="og:title" content={`Refund & Cancellation Policy – ${siteMetadata.siteName}`} />
        <meta
          property="og:description"
          content="Understand how refunds and cancellations are handled for JS Rao's premium trading signals and sessions."
        />
        <meta property="og:url" content={pageUrl} />
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
      <h1 className="text-3xl font-bold mb-6">Refund & Cancellation Policy</h1>
      <p className="mb-4">
        This policy applies to all digital products and services offered by {siteMetadata.siteName}, including
        trading signals, live sessions, announcements, and discussion groups available via our portal at
        <a href="https://portal.tradingwithjsrao.com" className="text-primary hover:underline ml-1">portal.tradingwithjsrao.com</a>.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-3">1. Digital Services</h2>
      <p className="mb-4">
        Our offerings are delivered electronically. Once access to a subscription, membership or live session has
        been granted, we consider the service as fully rendered. Because of the intangible nature of digital
        products, we <strong>do not provide refunds</strong> or allow cancellations after activation.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-3">2. Billing Errors &amp; Disputes</h2>
      <p className="mb-4">
        If you believe that you have been charged in error, please contact us within 7 days of the transaction.
        We will review your request and determine if a credit or adjustment is warranted. You can open a ticket
        through our <Link href="/contact" className="text-primary hover:underline">Contact</Link> page or email us at
        the address provided there.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-3">3. Subscription Renewals</h2>
      <p className="mb-4">
        Subscriptions renew automatically based on the plan you selected. To avoid future charges, you must cancel
        your subscription before the next billing cycle. Cancellation of recurring payments is the user's
        responsibility, and refunds will not be issued for unused subscription periods.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-3">4. Exceptional Circumstances</h2>
      <p className="mb-4">
        We may consider a refund on a case‑by‑case basis under exceptional circumstances, such as duplicate
        payments or system errors. Such determinations are at our sole discretion.
      </p>

      <p className="mt-8">
        For further questions about this policy, please reach us via our
        <Link href="/contact" className="text-primary hover:underline mx-1">Contact page</Link>.
      </p>
      <p className="mt-2 text-sm opacity-70">Last Updated: {new Date().getFullYear()}</p>
    </div>
  );
}