// src/pages/privacy.tsx
import Head from "next/head";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

/**
 * Privacy Policy page explaining how user data is collected and used.
 */
export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>Privacy Policy – JS RAO</title>
        <meta
          name="description"
          content="Read JS RAO's privacy policy to understand how we collect, use and safeguard your personal information when you use our trading education services."
        />
        <meta name="robots" content="index, follow" />
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
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              JS Rao ("we," "our," or "us") is committed to protecting your privacy. This
              Privacy Policy explains how we collect, use, disclose and safeguard your
              information when you visit our website and use our services. Please read this
              policy carefully. If you do not agree with its terms, please do not access the
              site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may collect information about you in a variety of ways. The information we
              may collect includes:
            </p>
            <h3 className="text-xl font-semibold mb-3 mt-6">Personal Data</h3>
            <p className="text-muted-foreground leading-relaxed">
              Personally identifiable information, such as your name, email address and telephone
              number, that you voluntarily give to us when you register or participate in
              activities on the site, such as online chat and message boards.
            </p>
            <h3 className="text-xl font-semibold mb-3 mt-6">Derivative Data</h3>
            <p className="text-muted-foreground leading-relaxed">
              Information our servers automatically collect when you access the site, such as
              your IP address, browser type, operating system, access times and pages viewed
              before and after accessing the site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Use of Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Accurate information about you permits us to provide you with a smooth,
              efficient and customised experience. Specifically, we may use your information
              to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Create and manage your account</li>
              <li>Process transactions and send related information</li>
              <li>Email you regarding your account or orders</li>
              <li>Fulfil and manage purchases, orders, payments and other transactions</li>
              <li>Generate a personal profile about you for future visits</li>
              <li>Increase the efficiency and operation of the site</li>
              <li>Monitor and analyse usage and trends to improve your experience</li>
              <li>Notify you of updates to the site</li>
              <li>Perform other business activities as needed</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Disclosure of Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may share information we have collected about you in certain situations. Your
              information may be disclosed as follows:
            </p>
            <h3 className="text-xl font-semibold mb-3 mt-6">By Law or to Protect Rights</h3>
            <p className="text-muted-foreground leading-relaxed">
              If we believe the release of information about you is necessary to respond to legal
              processes, investigate or remedy potential violations of our policies, or protect the
              rights, property and safety of others, we may share your information as permitted or
              required by applicable law.
            </p>
            <h3 className="text-xl font-semibold mb-3 mt-6">Third-Party Service Providers</h3>
            <p className="text-muted-foreground leading-relaxed">
              We may share your information with third parties that perform services for us or on
              our behalf, including payment processing, data analysis, email delivery, hosting
              services, customer service and marketing assistance.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Security of Your Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use administrative, technical and physical security measures to help protect your
              personal information. While we have taken reasonable steps to secure the data you
              provide, no security measures are perfect or impenetrable, and no method of data
              transmission can be guaranteed against interception or misuse.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Cookies and Tracking Technologies</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may use cookies, web beacons, tracking pixels and other tracking technologies on
              the site to help customise the site and improve your experience. When you access the
              site, your personal information is not collected through the use of tracking
              technology. Most browsers accept cookies by default. You can remove or reject
              cookies, but this may affect the availability and functionality of the site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Depending on your location, you may have the following rights regarding your personal
              information:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>The right to access – You have the right to request copies of your personal data</li>
              <li>The right to rectification – You have the right to request that we correct any inaccurate information</li>
              <li>The right to erasure – You have the right to request that we delete your personal data in certain circumstances</li>
              <li>The right to restrict processing – You have the right to request that we restrict the processing of your data</li>
              <li>The right to object to processing – You have the right to object to our processing of your data</li>
              <li>The right to data portability – You have the right to request the transfer of your data to another organisation</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes to our
              practices or for other operational, legal or regulatory reasons. We will notify you
              of any changes by posting the new Privacy Policy on this page and updating the
              "Last updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions or comments about this Privacy Policy, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <p className="text-muted-foreground">Email: raojansher04@gmail.com</p>
             
              <p className="text-muted-foreground">
                Address: ranjanpur, punjab, Pakistan
              </p>
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}
