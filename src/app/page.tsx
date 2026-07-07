import { ArrowRight, BellRing, CalendarDays, MapPin, ShieldCheck } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { BackOfficePreview } from "@/features/dashboard/components/back-office-preview";
import { BookingCard } from "@/features/booking/components/booking-card";
import { ServiceGrid } from "@/features/salon/components/service-grid";
import { StaffRoster } from "@/features/salon/components/staff-roster";
import { siteConfig } from "@/lib/site-config";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HairSalon",
            name: siteConfig.name,
            url: siteConfig.url,
            telephone: siteConfig.phone,
            email: siteConfig.email,
            address: {
              "@type": "PostalAddress",
              streetAddress: siteConfig.address.street,
              postalCode: siteConfig.address.postalCode,
              addressLocality: siteConfig.address.city,
              addressCountry: siteConfig.address.country,
            },
          }),
        }}
      />

      <section className="bg-zinc-950 text-white">
        <div className="container-page grid min-h-[calc(100vh-64px)] items-center gap-10 py-12 md:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="inline-flex rounded-full border border-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-stone-200">
              Reservation salon France
            </p>
            <h1 className="mt-6 max-w-3xl font-serif text-5xl font-semibold leading-[0.95] md:text-7xl">
              The Barber Studio
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              Une base professionnelle pour un salon de coiffure : vitrine SEO,
              parcours de rendez-vous mobile, back-office, notifications et
              conformite RGPD/CNIL pensee des le depart.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/reserver">
                <CalendarDays className="size-4" aria-hidden="true" />
                Reserver un rendez-vous
              </ButtonLink>
              <ButtonLink href="/back-office" variant="outline">
                Voir le back-office
                <ArrowRight className="size-4" aria-hidden="true" />
              </ButtonLink>
            </div>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/8 p-5 shadow-2xl">
            <div className="aspect-[4/5] rounded-md bg-[linear-gradient(135deg,#f8efe2,#9c6b4a_45%,#191716)] p-5">
              <div className="flex h-full flex-col justify-between rounded-md border border-white/25 p-5">
                <p className="text-sm uppercase tracking-[0.12em] text-white/80">
                  Coupe, barbe, soin
                </p>
                <div>
                  <p className="font-serif text-4xl font-semibold">09:30</p>
                  <p className="mt-2 text-sm text-white/80">
                    Premier creneau disponible demain avec Marc.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="prestations" className="container-page py-20">
        <SectionHeading
          eyebrow="Catalogue"
          title="Prestations et tarifs structures"
          description="Les prestations sont separees en donnees reutilisables, avec prix, duree, categorie et coiffeurs compatibles."
        />
        <div className="mt-10">
          <ServiceGrid />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeading
              eyebrow="Reservation"
              title="Parcours clair, logique separee"
              description="Le composant ci-dessous utilise un hook dedie et des fonctions metier pour preparer la future connexion base de donnees."
            />
            <div className="mt-8 grid gap-4 text-sm text-zinc-700">
              <p className="flex gap-3">
                <BellRing className="mt-0.5 size-5 text-accent" aria-hidden="true" />
                Emails et SMS transactionnels separes des campagnes marketing.
              </p>
              <p className="flex gap-3">
                <ShieldCheck className="mt-0.5 size-5 text-accent" aria-hidden="true" />
                Delais de reservation et d&apos;annulation parametrables.
              </p>
              <p className="flex gap-3">
                <MapPin className="mt-0.5 size-5 text-accent" aria-hidden="true" />
                Fuseau horaire fixe : {siteConfig.timeZone}.
              </p>
            </div>
          </div>
          <BookingCard />
        </div>
      </section>

      <section id="equipe" className="container-page py-20">
        <SectionHeading
          eyebrow="Equipe"
          title="Coiffeurs et competences"
          description="Chaque coiffeur est rattache aux prestations qu'il peut realiser pour eviter les rendez-vous impossibles."
        />
        <div className="mt-10">
          <StaffRoster />
        </div>
      </section>

      <section id="conformite" className="bg-muted py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="France / RGPD"
            title="Conformite integree au produit"
            description="Le projet privilegie des prestataires UE/France, un consentement cookies explicite, la minimisation des donnees et un journal des actions sensibles."
          />
          <BackOfficePreview />
        </div>
      </section>
    </>
  );
}
