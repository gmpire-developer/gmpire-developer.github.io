'use client';

import { useMemo, useState } from 'react';
import {
  bookingSchema,
  contactSchema,
  type BookingFormValues,
  type ContactFormValues,
} from '@/lib/validation';

const check = '✓';

export function ContactBookingPanels() {
  const [contact, setContact] = useState<ContactFormValues>({ name: '', email: '', message: '' });
  const [booking, setBooking] = useState<BookingFormValues>({ date: '', time: '', guests: 1 });

  const contactValidation = useMemo(() => contactSchema.safeParse(contact), [contact]);
  const bookingValidation = useMemo(() => bookingSchema.safeParse(booking), [booking]);

  const contactErrors = contactValidation.success ? {} : contactValidation.error.flatten().fieldErrors;
  const bookingErrors = bookingValidation.success ? {} : bookingValidation.error.flatten().fieldErrors;

  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <section className="rounded-2xl border border-maple-earth/60 bg-white p-5 dark:border-[#31443a] dark:bg-[#19201d]">
        <h2 className="mb-4 text-xl font-semibold text-maple-forest dark:text-maple-earth">Contact Concierge</h2>
        <div className="space-y-4">
          <Input label="Name" value={contact.name} valid={!contactErrors.name?.length && contact.name.length > 0} error={contactErrors.name?.[0]} onChange={(value) => setContact((prev) => ({ ...prev, name: value }))} />
          <Input label="Email" value={contact.email} valid={!contactErrors.email?.length && contact.email.length > 0} error={contactErrors.email?.[0]} onChange={(value) => setContact((prev) => ({ ...prev, email: value }))} />
          <label className="block text-sm font-medium">
            Message
            <textarea
              value={contact.message}
              onChange={(event) => setContact((prev) => ({ ...prev, message: event.target.value }))}
              className="mt-1 h-28 w-full rounded-xl border border-maple-earth/70 bg-maple-cream/45 px-3 py-2 text-sm outline-none ring-maple-moss focus:ring-2 dark:border-[#3d5348] dark:bg-[#111714]"
              placeholder="Tell us your sleep goals..."
            />
            <FieldHint valid={!contactErrors.message?.length && contact.message.length > 0} error={contactErrors.message?.[0]} />
          </label>
        </div>
      </section>

      <section id="booking" className="rounded-2xl border border-maple-earth/60 bg-white p-5 dark:border-[#31443a] dark:bg-[#19201d]">
        <h2 className="mb-4 text-xl font-semibold text-maple-forest dark:text-maple-earth">Showroom Consultation Appointment Booking</h2>
        <div className="space-y-4">
          <Input label="Preferred Date" type="date" value={booking.date} valid={!bookingErrors.date?.length && booking.date.length > 0} error={bookingErrors.date?.[0]} onChange={(value) => setBooking((prev) => ({ ...prev, date: value }))} />
          <Input label="Preferred Time" type="time" value={booking.time} valid={!bookingErrors.time?.length && booking.time.length > 0} error={bookingErrors.time?.[0]} onChange={(value) => setBooking((prev) => ({ ...prev, time: value }))} />
          <Input
            label="Guests"
            type="number"
            value={String(booking.guests)}
            valid={!bookingErrors.guests?.length}
            error={bookingErrors.guests?.[0]}
            onChange={(value) => setBooking((prev) => ({ ...prev, guests: Number(value) || 0 }))}
          />
        </div>
      </section>

      <section className="rounded-2xl border border-dashed border-maple-earth/70 bg-maple-cream/45 p-5 dark:border-[#3d5348] dark:bg-[#111714] lg:col-span-2">
        <h3 className="mb-2 text-lg font-semibold text-maple-forest dark:text-maple-earth">Ottawa Showroom Map</h3>
        <p className="mb-3 text-sm text-maple-charcoal/75 dark:text-[#f3eee2]/75">Interactive Google Map placeholder for 123 Maple Avenue, Ottawa, ON.</p>
        <div className="h-52 rounded-xl border border-maple-earth/70 bg-white/60 dark:border-[#3d5348] dark:bg-[#0f1412]" />
      </section>
    </div>
  );
}

function Input({
  label,
  value,
  onChange,
  valid,
  error,
  type = 'text',
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  valid: boolean;
  error?: string;
  type?: React.InputHTMLAttributes<HTMLInputElement>['type'];
}) {
  return (
    <label className="block text-sm font-medium">
      {label}
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-1 w-full rounded-xl border border-maple-earth/70 bg-maple-cream/45 px-3 py-2 text-sm outline-none ring-maple-moss focus:ring-2 dark:border-[#3d5348] dark:bg-[#111714]"
      />
      <FieldHint valid={valid} error={error} />
    </label>
  );
}

function FieldHint({ valid, error }: { valid: boolean; error?: string }) {
  if (error) {
    return <span className="mt-1 block text-xs font-medium text-rose-700 dark:text-rose-300">⚠ {error}</span>;
  }

  if (valid) {
    return <span className="mt-1 block text-xs font-medium text-emerald-700 dark:text-emerald-300">{check} Looks good</span>;
  }

  return null;
}
