import type { Metadata } from 'next';

const siteName = "Maple's Leaf";
const baseDescription =
  'Premium beds and mattresses in Ottawa, Canada. Explore luxury sleep collections, reserve showroom consultations, and get local inventory support.';

export const defaultMetadata: Metadata = {
  metadataBase: new URL('https://maplesleaf.ca'),
  title: {
    default: `${siteName} | Ottawa Luxury Beds & Mattresses`,
    template: `%s | ${siteName}`,
  },
  description: baseDescription,
  keywords: ['Ottawa mattresses', 'Ottawa beds', 'luxury mattress boutique', 'showroom consultation'],
  openGraph: {
    title: `${siteName} | Ottawa Luxury Beds & Mattresses`,
    description: baseDescription,
    type: 'website',
    locale: 'en_CA',
    siteName,
  },
  alternates: {
    canonical: '/',
  },
};
