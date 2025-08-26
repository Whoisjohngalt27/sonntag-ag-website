import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import NavbarWithDropdown from '@/components/ui-blocks/navigation/navbar-with-dropdown';
import Footer from '@/components/footer';
import GoogleAnalytics from '@/components/google-analytics';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'SONNTAG AG - Unternehmensnachfolge & M&A Beratung Gießen',
    template: '%s | SONNTAG AG'
  },
  description: 'Führende M&A Beratung in Gießen. Wir sichern Lebenswerke durch anonyme Bieterverfahren und Wertoptimierung. 25+ Jahre Erfahrung in Unternehmensnachfolge.',
  keywords: [
    'M&A Beratung Gießen',
    'Unternehmensnachfolge',
    'Unternehmensverkauf',
    'Wertoptimierung',
    'Anonymes Bieterverfahren',
    'Mittelstand',
    'Hessen'
  ],
  authors: [{ name: 'SONNTAG AG' }],
  creator: 'SONNTAG AG',
  publisher: 'SONNTAG AG',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://sonntag-ag.de'),
  alternates: {
    canonical: '/',
    languages: {
      'de-DE': '/de',
      'en-US': '/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://sonntag-ag.de',
    title: 'SONNTAG AG - Unternehmensnachfolge & M&A Beratung Gießen',
    description: 'Führende M&A Beratung in Gießen. Wir sichern Lebenswerke durch anonyme Bieterverfahren und Wertoptimierung.',
    siteName: 'SONNTAG AG',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SONNTAG AG - M&A Beratung Gießen',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SONNTAG AG - Unternehmensnachfolge & M&A Beratung Gießen',
    description: 'Führende M&A Beratung in Gießen. Wir sichern Lebenswerke durch anonyme Bieterverfahren und Wertoptimierung.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1e3a8a" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <GoogleAnalytics />
        <NavbarWithDropdown />
        {children}
        <Footer />
      </body>
    </html>
  );
}
