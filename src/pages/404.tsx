import Head from 'next/head';
import Link from 'next/link';

/**
 * Custom 404 page shown when a user visits a non‑existent route.
 */
export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <Head>
        <title>Page Not Found – JS RAO</title>
        <meta
          name="description"
          content="404 – The page you are looking for could not be found. Return to the JS RAO homepage."
        />
        <meta name="robots" content="noindex, follow" />
      </Head>
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-gray-600">Oops! Page not found</p>
        <Link href="/" className="text-blue-500 underline hover:text-blue-700">
          Return to Home
          </Link>    </div>
    </div>
  );
}