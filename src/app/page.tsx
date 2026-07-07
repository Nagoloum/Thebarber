import Image from "next/image";
import { CalendarDays, MapPin, Phone, Star } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/data/salon";
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

      <section className="bg-white">
        <div className="container-page grid min-h-[calc(100vh-64px)] items-center gap-10 py-12 md:grid-cols-[0.95fr_1.05fr] md:py-10">
          <div>
            <p className="inline-flex rounded-full border border-line bg-muted px-3 py-1 text-xs font-extrabold uppercase text-zinc-700">
              Coiffure & barbier
            </p>
            <h1 className="heading-luxe mt-6 max-w-3xl text-5xl leading-[0.95] md:text-7xl">
              The Barber Studio
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-700">
              Coupes nettes, barbe precise, couleur lumineuse et soins profonds
              dans un salon calme, elegant et ponctuel.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/reserver">
                <CalendarDays className="size-4" aria-hidden="true" />
                Reserver un rendez-vous
              </ButtonLink>
              <ButtonLink href="#prestations" variant="outline">
                Voir les tarifs
              </ButtonLink>
            </div>
          </div>
          <div className="relative hidden min-h-[440px] overflow-hidden rounded-lg border border-line bg-muted shadow-[0_24px_60px_rgba(17,17,17,0.12)] md:block">
            <Image
              src="/images/salon-hero.png"
              alt="Interieur elegant d'un salon de coiffure et barbier"
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section id="prestations" className="border-t border-line bg-background py-20">
        <div className="container-page">
        <SectionHeading
          eyebrow="Prestations"
          title="Des services clairs, sans surprise"
          description="Choisissez votre prestation, le coiffeur qui vous convient, puis un creneau disponible."
        />
        <div className="mt-10">
          <ServiceGrid />
        </div>
        </div>
      </section>

      <section id="equipe" className="bg-white py-20">
        <div className="container-page">
        <SectionHeading
          eyebrow="Equipe"
          title="Une equipe attentive au detail"
          description="Barbe, coupe, couleur ou soin : chaque rendez-vous commence par un conseil simple et precis."
        />
        <div className="mt-10">
          <StaffRoster />
        </div>
        </div>
      </section>

      <section id="avis" className="border-y border-line bg-background py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Avis"
            title="Ce que les clients apprecient"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="rounded-lg border border-line bg-white p-5 shadow-sm"
              >
                <div className="flex gap-1 text-ink">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className="size-4 fill-current"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-6 text-zinc-700">
                  {testimonial.text}
                </p>
                <p className="mt-4 font-semibold text-zinc-950">
                  {testimonial.name}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="acces" className="container-page py-20">
        <div className="grid gap-8 rounded-lg border border-line bg-white p-6 shadow-sm md:grid-cols-[1fr_1fr] md:p-10">
          <div>
            <p className="text-sm font-extrabold uppercase text-zinc-600">
              Acces
            </p>
            <h2 className="heading-luxe mt-3 text-4xl">
              Nous trouver
            </h2>
            <p className="mt-4 flex gap-3 text-zinc-700">
              <MapPin className="mt-0.5 size-5 text-ink" aria-hidden="true" />
              <span>
                {siteConfig.address.street}, {siteConfig.address.postalCode}{" "}
                {siteConfig.address.city}
              </span>
            </p>
            <p className="mt-3 flex gap-3 text-zinc-700">
              <Phone className="mt-0.5 size-5 text-ink" aria-hidden="true" />
              <span>{siteConfig.phone}</span>
            </p>
          </div>
          <div className="grid gap-3 text-sm text-zinc-700">
            {siteConfig.openingHours.map((item) => (
              <div
                key={item.day}
                className="flex justify-between gap-4 border-b border-line pb-3"
              >
                <span>{item.day}</span>
                <span className="font-bold text-ink">{item.hours}</span>
              </div>
            ))}
            <ButtonLink href="/reserver" className="mt-3 w-full sm:w-fit">
              <CalendarDays className="size-4" aria-hidden="true" />
              Reserver maintenant
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
