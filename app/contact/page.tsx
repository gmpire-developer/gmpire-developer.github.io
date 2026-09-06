import type { Metadata } from 'next';
import { ContactBookingPanels } from '@/components/contact/ContactBookingPanels';

export const metadata: Metadata = {
  title: 'Contact & Showroom Booking Ottawa',
  description:
    "Connect with Maple's Leaf in Ottawa to inquire about premium beds and reserve a personalized showroom consultation.",
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return (
    <section className="space-y-5">
      <header className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-maple-moss">Local Ottawa Support</p>
        <h1 className="text-[clamp(1.7rem,7vw,2.8rem)] font-semibold text-maple-forest dark:text-maple-earth">Contact & Consultation Booking</h1>
      </header>
      <ContactBookingPanels />
    </section>
  );
}
