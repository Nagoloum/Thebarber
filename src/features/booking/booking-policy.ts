import { addHours, differenceInHours, isBefore } from "date-fns";
import { bookingDefaults } from "@/lib/constants";

export function canBookSlot(slotStartsAt: Date, now = new Date()) {
  const earliestAllowed = addHours(now, bookingDefaults.minLeadTimeHours);
  return !isBefore(slotStartsAt, earliestAllowed);
}

export function canCancelAppointment(startsAt: Date, now = new Date()) {
  return differenceInHours(startsAt, now) >= bookingDefaults.cancellationLimitHours;
}

export function getSlotDurationMinutes() {
  return bookingDefaults.slotMinutes;
}

export function getSuggestedAlternativesCount() {
  return bookingDefaults.suggestedAlternatives;
}
