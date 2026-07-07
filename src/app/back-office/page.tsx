import type { Metadata } from "next";
import { BackOfficePreview } from "@/features/dashboard/components/back-office-preview";

export const metadata: Metadata = {
  title: "Back-office",
  description:
    "Socle back-office pour planning, clients, prestations, notifications et reporting.",
};

export default function BackOfficePage() {
  return (
    <section className="container-page py-12 md:py-16">
      <div className="mb-8 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.1em] text-accent">
          Administration
        </p>
        <h1 className="mt-3 font-serif text-5xl font-semibold text-zinc-950">
          Back-office salon
        </h1>
        <p className="mt-4 text-lg leading-8 text-zinc-600">
          Cette page pose les modules principaux. La prochaine etape sera de
          brancher Prisma, la connexion securisee et les vues calendrier reelles.
        </p>
      </div>
      <BackOfficePreview />
    </section>
  );
}
