"use server";

import { addMinutes } from "date-fns";
import { bookingDraftSchema } from "@/features/booking/schemas";
import { prisma } from "@/lib/db";

export async function createAppointment(input: unknown) {
  const parsed = bookingDraftSchema.safeParse(input);

  if (!parsed.success) {
    return {
      ok: false,
      message: "Les informations du rendez-vous sont invalides.",
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  const service = await prisma.service.findUnique({
    where: { id: parsed.data.serviceId },
  });

  if (!service) {
    return {
      ok: false,
      message: "La prestation selectionnee n'existe pas.",
    };
  }

  const startsAt = new Date(parsed.data.startsAt);
  const endsAt = addMinutes(startsAt, service.durationMinutes + service.bufferMinutes);

  const conflictingAppointment = await prisma.appointment.findFirst({
    where: {
      staffId: parsed.data.staffId,
      status: { in: ["PENDING", "CONFIRMED"] },
      startsAt: { lt: endsAt },
      endsAt: { gt: startsAt },
    },
  });

  if (conflictingAppointment) {
    return {
      ok: false,
      message: "Ce creneau vient d'etre reserve. Choisissez un autre horaire.",
    };
  }

  const appointment = await prisma.appointment.create({
    data: {
      serviceId: parsed.data.serviceId,
      staffId: parsed.data.staffId,
      startsAt,
      endsAt,
      guestFirstName: parsed.data.customer.firstName,
      guestLastName: parsed.data.customer.lastName,
      guestEmail: parsed.data.customer.email,
      guestPhone: parsed.data.customer.phone,
      status: "CONFIRMED",
    },
  });

  return {
    ok: true,
    appointmentId: appointment.id,
  };
}
