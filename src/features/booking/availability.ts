import { addDays, format, setHours, setMinutes } from "date-fns";
import { fr } from "date-fns/locale";
import { services, staffMembers } from "@/data/salon";
import { canBookSlot, getSuggestedAlternativesCount } from "@/features/booking/booking-policy";
import type { AvailabilitySlot } from "@/types/booking";

const defaultHours = [9, 10, 11, 14, 15, 16, 17];

export function getEligibleStaff(serviceId?: string) {
  const service = services.find((item) => item.id === serviceId);

  if (!service) {
    return staffMembers;
  }

  return staffMembers.filter((staff) => service.staffIds.includes(staff.id));
}

export function generateAvailabilitySlots({
  serviceId,
  staffId,
  from = new Date(),
}: {
  serviceId?: string;
  staffId?: string;
  from?: Date;
}): AvailabilitySlot[] {
  const eligibleStaff = getEligibleStaff(serviceId);
  const selectedStaff = staffId
    ? eligibleStaff.filter((staff) => staff.id === staffId)
    : eligibleStaff;

  return Array.from({ length: 6 })
    .flatMap((_, dayIndex) => {
      const day = addDays(from, dayIndex + 1);

      return selectedStaff.flatMap((staff) =>
        defaultHours.map((hour) => {
          const startsAt = setMinutes(setHours(day, hour), hour === 9 ? 30 : 0);
          return {
            id: `${staff.id}-${startsAt.toISOString()}`,
            startsAt: startsAt.toISOString(),
            label: `${format(startsAt, "EEEE d MMMM", { locale: fr })} - ${format(
              startsAt,
              "HH:mm",
            )}`,
            staffId: staff.id,
          };
        }),
      );
    })
    .filter((slot) => canBookSlot(new Date(slot.startsAt)))
    .slice(0, getSuggestedAlternativesCount() * 4);
}
