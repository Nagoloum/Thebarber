import type { Metadata } from "next";
import { BookingCard } from "@/features/booking/components/booking-card";

export const metadata: Metadata = {
  title: "Reservation en ligne",
  description:
    "Choisissez une prestation, un coiffeur et un creneau pour reserver votre rendez-vous.",
};

export default function BookingPage() {
  return (
    <section className="container-page py-12 md:py-16">
      <div className="mb-8 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.1em] text-accent">
          Reservation
        </p>
        <h1 className="mt-3 font-serif text-5xl font-semibold text-zinc-950">
          Prendre rendez-vous
        </h1>
        <p className="mt-4 text-lg leading-8 text-zinc-600">
          Choisissez une prestation, un coiffeur et un creneau. Aucun compte
          n&apos;est necessaire.
        </p>
      </div>
      <BookingCard />
    </section>
  );
}
