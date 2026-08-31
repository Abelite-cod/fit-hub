import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://azfitness.example'),
  title: {
    default: 'AZ Fitness | Ile-Ife, Osun State Nigeria',
    template: '%s | AZ Fitness',
  },
  description:
    'AZ Fitness — a fitness empire in Ile-Ife, Osun State, Nigeria. Strength training, boxing, personal training, group classes, and nutrition guidance.',
  keywords: [
    'gym',
    'fitness',
    'ile-ife',
    'osun state',
    'nigeria',
    'boxing',
    'personal training',
    'weight loss',
    'strength training',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: 'https://azfitness.example',
    siteName: 'AZ Fitness',
    title: 'AZ Fitness | Ile-Ife, Osun State Nigeria',
    description:
      'A fitness empire in Ile-Ife, Osun State, Nigeria. Strength training, boxing, personal training, and more.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {/* Skip to main content — accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-az-green focus:text-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
