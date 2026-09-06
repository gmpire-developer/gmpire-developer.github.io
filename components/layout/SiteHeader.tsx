'use client';

import Link from 'next/link';
import { useEffect, useId, useState } from 'react';

const navItems = [
  { href: '/products', label: 'Products' },
  { href: '/contact', label: 'Book Consultation' },
  { href: '/admin/dashboard', label: 'Admin' },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const mobileMenuId = useId();

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-maple-earth/50 bg-maple-cream/90 backdrop-blur dark:border-[#2f4138] dark:bg-[#121614]/95">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-10">
        <Link href="/" className="rounded-md text-sm font-semibold uppercase tracking-[0.2em] text-maple-forest transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-maple-moss dark:text-maple-earth">
          Maple&apos;s Leaf
        </Link>

        <nav className="hidden items-center gap-2 text-sm md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1.5 text-maple-charcoal transition hover:bg-maple-earth/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maple-moss dark:text-[#f3eee2] dark:hover:bg-[#30443a]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
          aria-controls={mobileMenuId}
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-maple-forest/20 text-maple-forest transition hover:bg-maple-earth/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maple-moss dark:border-maple-earth/40 dark:text-maple-earth dark:hover:bg-[#30443a] md:hidden"
        >
          <span className="sr-only">Toggle navigation menu</span>
          <span className="space-y-1.5">
            <span className="block h-0.5 w-5 rounded bg-current" />
            <span className="block h-0.5 w-5 rounded bg-current" />
            <span className="block h-0.5 w-5 rounded bg-current" />
          </span>
        </button>
      </div>

      <div className={`fixed inset-0 z-50 md:hidden ${menuOpen ? '' : 'pointer-events-none'}`}>
        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={() => setMenuOpen(false)}
          className={`absolute inset-0 bg-maple-charcoal/40 backdrop-blur-sm transition-opacity duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0'}`}
        />
        <nav
          id={mobileMenuId}
          className={`relative h-full w-[min(84vw,22rem)] border-r border-maple-earth/50 bg-maple-cream px-5 py-6 shadow-2xl transition-transform duration-300 ease-out dark:border-[#2f4138] dark:bg-[#121614] ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}
          aria-label="Mobile"
        >
          <div className="mb-6 flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-maple-moss">Menu</span>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="rounded-md px-2 py-1 text-sm text-maple-charcoal transition hover:bg-maple-earth/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maple-moss dark:text-[#f3eee2] dark:hover:bg-[#30443a]"
            >
              Close
            </button>
          </div>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-base font-medium text-maple-charcoal transition hover:bg-maple-earth/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maple-moss dark:text-[#f3eee2] dark:hover:bg-[#30443a]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
