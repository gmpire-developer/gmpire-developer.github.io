import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your full name.'),
  email: z.email('Enter a valid email address.'),
  message: z.string().min(20, 'Share at least 20 characters so we can help properly.'),
});

export const bookingSchema = z.object({
  date: z.string().min(1, 'Please choose a preferred date.'),
  time: z.string().min(1, 'Please choose a preferred time.'),
  guests: z.coerce.number().int().min(1, 'At least one guest is required.').max(4, 'Maximum four guests per consultation slot.'),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
export type BookingFormValues = z.infer<typeof bookingSchema>;
