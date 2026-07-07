"use client";

import { CalendarCheck, ChevronLeft, Clock, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/data/salon";
import { useBookingFlow } from "@/features/booking/hooks/use-booking-flow";

const stepLabels = {
  service: "Prestation",
  staff: "Coiffeur",
  slot: "Creneau",
  customer: "Coordonnees",
  summary: "Confirmation",
};

export function BookingCard() {
  const {
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
  } = useBookingFlow();

  return (
    <section className="rounded-lg border border-line bg-white p-4 shadow-sm md:p-6">
      <div className="flex flex-wrap items-center gap-2 border-b border-line pb-4">
        {steps.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => goToStep(item)}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
              item === step
                ? "bg-ink text-white"
                : "bg-muted text-zinc-700 hover:bg-zinc-200"
            }`}
          >
            {stepLabels[item]}
          </button>
        ))}
      </div>

      <div className="min-h-[430px] py-6">
        {step === "service" ? (
          <div className="grid gap-3">
            {services.map((service) => (
              <button
                key={service.id}
                type="button"
                onClick={() => {
                  updateDraft({ serviceId: service.id, staffId: undefined, startsAt: undefined });
                  goNext();
                }}
                className={`rounded-lg border p-4 text-left transition hover:border-ink ${
                  draft.serviceId === service.id
                    ? "border-ink bg-muted"
                    : "border-zinc-200 bg-white"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-extrabold uppercase text-ink">{service.name}</p>
                    <p className="mt-1 text-sm leading-6 text-zinc-700">
                      {service.description}
                    </p>
                  </div>
                  <div className="shrink-0 text-right text-sm font-extrabold text-ink">
                    <p>{service.priceCents / 100} EUR</p>
                    <p className="mt-1 flex items-center justify-end gap-1 text-xs font-semibold text-zinc-600">
                      <Clock className="size-3" aria-hidden="true" />
                      {service.durationMinutes} min
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        ) : null}

        {step === "staff" ? (
          <div className="grid gap-3">
            <button
              type="button"
              onClick={() => {
                updateDraft({ staffId: undefined, startsAt: undefined });
                goNext();
              }}
              className="rounded-lg border border-ink bg-ink p-4 text-left text-white transition hover:bg-zinc-800"
            >
              <p className="font-semibold">Premier disponible</p>
              <p className="mt-1 text-sm text-zinc-300">
                Le prochain creneau libre avec un coiffeur adapte.
              </p>
            </button>
            {eligibleStaff.map((staff) => (
              <button
                key={staff.id}
                type="button"
                onClick={() => {
                  updateDraft({ staffId: staff.id, startsAt: undefined });
                  goNext();
                }}
                className={`rounded-lg border p-4 text-left transition hover:border-ink ${
                  draft.staffId === staff.id
                    ? "border-ink bg-muted"
                    : "border-zinc-200 bg-white"
                }`}
              >
                <p className="flex items-center gap-2 font-extrabold uppercase text-ink">
                  <UserRound className="size-4" aria-hidden="true" />
                  {staff.name}
                </p>
                <p className="mt-1 text-sm text-zinc-700">{staff.role}</p>
              </button>
            ))}
          </div>
        ) : null}

        {step === "slot" ? (
          <div className="grid gap-3 sm:grid-cols-2">
            {availableSlots.map((slot) => (
              <button
                key={slot.id}
                type="button"
                onClick={() => {
                  updateDraft({ startsAt: slot.startsAt });
                  goNext();
                }}
                className={`rounded-lg border p-4 text-left text-sm transition hover:border-ink ${
                  draft.startsAt === slot.startsAt
                    ? "border-ink bg-muted"
                    : "border-zinc-200 bg-white"
                }`}
              >
                <CalendarCheck className="mb-3 size-5 text-ink" aria-hidden="true" />
                <span className="font-bold text-ink">{slot.label}</span>
              </button>
            ))}
          </div>
        ) : null}

        {step === "customer" ? (
          <CustomerStep
            onSubmit={(customer) => {
              updateDraft({ customer });
              goNext();
            }}
          />
        ) : null}

        {step === "summary" ? (
          <div className="rounded-lg border border-line bg-muted p-5">
            <p className="text-sm font-extrabold uppercase text-ink">
              Recapitulatif
            </p>
            <dl className="mt-4 grid gap-3 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-zinc-700">Prestation</dt>
                <dd className="font-bold text-ink">
                  {selectedService?.name ?? "A choisir"}
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-zinc-700">Creneau</dt>
                <dd className="font-bold text-ink">
                  {draft.startsAt
                    ? new Intl.DateTimeFormat("fr-FR", {
                        dateStyle: "full",
                        timeStyle: "short",
                      }).format(new Date(draft.startsAt))
                    : "A choisir"}
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-zinc-700">Client</dt>
                <dd className="font-bold text-ink">
                  {draft.customer
                    ? `${draft.customer.firstName} ${draft.customer.lastName}`
                    : "A renseigner"}
                </dd>
              </div>
            </dl>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button>Confirmer le rendez-vous</Button>
              <Button variant="outline" onClick={() => goToStep("customer")}>
                Modifier
              </Button>
              <Button variant="ghost" onClick={reset}>
                Recommencer
              </Button>
            </div>
          </div>
        ) : null}
      </div>

      {step !== "service" && step !== "summary" ? (
        <div className="border-t border-line pt-4">
          <Button variant="ghost" onClick={goBack}>
            <ChevronLeft className="size-4" aria-hidden="true" />
            Retour
          </Button>
        </div>
      ) : null}
    </section>
  );
}

function CustomerStep({
  onSubmit,
}: {
  onSubmit: (customer: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    marketingConsent: boolean;
  }) => void;
}) {
  return (
    <form
      className="grid gap-4"
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        onSubmit({
          firstName: String(formData.get("firstName") ?? ""),
          lastName: String(formData.get("lastName") ?? ""),
          email: String(formData.get("email") ?? ""),
          phone: String(formData.get("phone") ?? ""),
          marketingConsent: formData.get("marketingConsent") === "on",
        });
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Prenom" name="firstName" autoComplete="given-name" />
        <Field label="Nom" name="lastName" autoComplete="family-name" />
      </div>
      <Field label="Email" name="email" type="email" autoComplete="email" />
      <Field label="Telephone" name="phone" type="tel" autoComplete="tel" />
      <label className="flex gap-3 rounded-lg border border-line bg-white p-4 text-sm text-zinc-700">
        <input name="marketingConsent" type="checkbox" className="mt-1 size-4 accent-accent" />
        <span>
          J&apos;accepte de recevoir des offres commerciales. Les rappels de rendez-vous
          restent envoyes separement comme notifications transactionnelles.
        </span>
      </label>
      <Button type="submit" className="w-full sm:w-fit">
        Continuer
      </Button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <label className="grid gap-2 text-sm font-bold text-ink">
      {label}
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        required
        className="h-11 rounded-md border border-zinc-300 bg-white px-3 text-sm text-ink outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
      />
    </label>
  );
}
