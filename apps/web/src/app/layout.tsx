import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MANTIS - Stop guessing, start talking',
  description: 'MANTIS is a premier mentee-expert marketplace. Book 1-on-1 live sessions with top-tier professionals and supercharge your career.',
  openGraph: {
    title: 'MANTIS - Expert Marketplace',
    description: 'Stop guessing, start talking. 1-on-1 expert sessions.',
    url: 'https://mantis.com',
    siteName: 'MANTIS Marketplace',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-zinc-950 text-zinc-50 antialiased selection:bg-indigo-500/30`}>
        {children}
      </body>
    </html>
  );
}
