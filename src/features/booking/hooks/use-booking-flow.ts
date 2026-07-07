"use client";

import { useMemo, useState } from "react";
import { services } from "@/data/salon";
import { generateAvailabilitySlots, getEligibleStaff } from "@/features/booking/availability";
import type { BookingDraft, BookingStep } from "@/types/booking";

const steps: BookingStep[] = ["service", "staff", "slot", "customer", "summary"];

export function useBookingFlow(initialDraft: BookingDraft = {}) {
  const [draft, setDraft] = useState<BookingDraft>(initialDraft);
  const [step, setStep] = useState<BookingStep>("service");

  const selectedService = useMemo(
    () => services.find((service) => service.id === draft.serviceId),
    [draft.serviceId],
  );

  const eligibleStaff = useMemo(
    () => getEligibleStaff(draft.serviceId),
    [draft.serviceId],
  );

  const availableSlots = useMemo(
    () =>
      generateAvailabilitySlots({
        serviceId: draft.serviceId,
        staffId: draft.staffId,
      }),
    [draft.serviceId, draft.staffId],
  );

  function updateDraft(nextDraft: Partial<BookingDraft>) {
    setDraft((current) => ({ ...current, ...nextDraft }));
  }

  function goToStep(nextStep: BookingStep) {
    setStep(nextStep);
  }

  function goNext() {
    const currentIndex = steps.indexOf(step);
    setStep(steps[Math.min(currentIndex + 1, steps.length - 1)]);
  }

  function goBack() {
    const currentIndex = steps.indexOf(step);
    setStep(steps[Math.max(currentIndex - 1, 0)]);
  }

  function reset() {
    setDraft({});
    setStep("service");
  }

  return {
    availableSlots,
    draft,
    eligibleStaff,
    goBack,
    goNext,
    goToStep,
    reset,
    selectedService,
    step,
    steps,
    updateDraft,
  };
}
