import { z } from "zod";

export const bookingCustomerSchema = z.object({
  firstName: z.string().trim().min(2, "Le prenom est requis."),
  lastName: z.string().trim().min(2, "Le nom est requis."),
  email: z.email("L'adresse email est invalide.").toLowerCase(),
  phone: z
    .string()
    .trim()
    .regex(/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/, {
      message: "Le numero doit etre un telephone francais valide.",
    }),
  marketingConsent: z.boolean().default(false),
});

export const bookingDraftSchema = z.object({
  serviceId: z.string().min(1),
  staffId: z.string().min(1),
  startsAt: z.iso.datetime(),
  customer: bookingCustomerSchema,
});

export type BookingCustomerInput = z.infer<typeof bookingCustomerSchema>;
export type BookingDraftInput = z.infer<typeof bookingDraftSchema>;
