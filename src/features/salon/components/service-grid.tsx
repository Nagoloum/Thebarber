import { Clock } from "lucide-react";
import { services } from "@/data/salon";

export function ServiceGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {services.map((service) => (
        <article
          key={service.id}
          className="rounded-lg border border-line bg-white p-5 shadow-sm"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-lg font-extrabold uppercase text-ink">
                {service.name}
              </p>
              <p className="mt-2 text-sm leading-6 text-zinc-700">
                {service.description}
              </p>
            </div>
            <p className="shrink-0 text-sm font-extrabold text-ink">
              {service.priceCents / 100} EUR
            </p>
          </div>
          <p className="mt-4 flex items-center gap-2 text-sm text-zinc-600">
            <Clock className="size-4" aria-hidden="true" />
            {service.durationMinutes} minutes
          </p>
        </article>
      ))}
    </div>
  );
}
