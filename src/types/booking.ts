export type ServiceCategory = "coupe" | "barbe" | "coloration" | "soin";

export type SalonService = {
  id: string;
  name: string;
  category: ServiceCategory;
  description: string;
  durationMinutes: number;
  priceCents: number;
  staffIds: string[];
};

export type StaffMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  specialties: ServiceCategory[];
};

export type BookingStep = "service" | "staff" | "slot" | "customer" | "summary";

export type BookingDraft = {
  serviceId?: string;
  staffId?: string;
  startsAt?: string;
  customer?: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    marketingConsent: boolean;
  };
};

export type AvailabilitySlot = {
  id: string;
  startsAt: string;
  label: string;
  staffId: string;
};
