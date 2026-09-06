import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';
import { defaultMetadata } from '@/lib/seo';

export const metadata: Metadata = defaultMetadata;

const navItems = [
  { href: '/products', label: 'Products' },
  { href: '/contact', label: 'Book Consultation' },
  { href: '/admin/dashboard', label: 'Admin' },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-CA" className="dark">
      <body>
        <header className="sticky top-0 z-40 border-b border-maple-earth/50 bg-maple-cream/90 backdrop-blur dark:border-[#2f4138] dark:bg-[#121614]/95">
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-10">
            <Link href="/" className="text-sm font-semibold uppercase tracking-[0.2em] text-maple-forest dark:text-maple-earth">
              Maple&apos;s Leaf
            </Link>
            <nav className="flex items-center gap-3 text-sm">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="rounded-full px-3 py-1.5 text-maple-charcoal transition hover:bg-maple-earth/40 dark:text-[#f3eee2] dark:hover:bg-[#30443a]">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
