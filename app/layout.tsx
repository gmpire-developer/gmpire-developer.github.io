import type { Metadata } from 'next';
import './globals.css';
import { defaultMetadata } from '@/lib/seo';
import { SiteHeader } from '@/components/layout/SiteHeader';

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-CA" className="dark">
      <body>
        <SiteHeader />
        <main>{children}</main>
      </body>
    </html>
  );
}
