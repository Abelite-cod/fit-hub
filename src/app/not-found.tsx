import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '404 — Page Not Found',
};

export default function NotFound() {
  return (
    <div className="bg-az-black min-h-screen flex items-center justify-center section-padding">
      <div className="text-center">
        <p className="text-az-green font-black text-8xl mb-4">404</p>
        <h1 className="heading-lg text-az-offwhite mb-4">PAGE NOT FOUND.</h1>
        <p className="text-az-offwhite/60 mb-10 max-w-sm mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-az-green text-white text-sm font-semibold tracking-widest uppercase px-8 py-4 hover:bg-az-green-deep transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
