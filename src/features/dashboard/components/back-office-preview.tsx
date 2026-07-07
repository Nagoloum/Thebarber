import { BarChart3, CalendarRange, ShieldCheck, UsersRound } from "lucide-react";

const modules = [
  {
    icon: CalendarRange,
    title: "Planning temps reel",
    text: "Vue jour/semaine, deplacement de rendez-vous, blocage de pauses et conges.",
  },
  {
    icon: UsersRound,
    title: "Clients et preferences",
    text: "Fiches clients, historique, notes internes et dedoublonnage email + telephone.",
  },
  {
    icon: BarChart3,
    title: "Reporting salon",
    text: "Indicateurs RDV, annulations, chiffre d'affaires et exports CSV/PDF.",
  },
  {
    icon: ShieldCheck,
    title: "Audit et RGPD",
    text: "Journal des actions sensibles, consentements, demandes d'effacement et minimisation.",
  },
];

export function BackOfficePreview() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {modules.map((module) => {
        const Icon = module.icon;
        return (
          <article
            key={module.title}
            className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"
          >
            <Icon className="size-5 text-accent" aria-hidden="true" />
            <p className="mt-4 font-semibold text-zinc-950">{module.title}</p>
            <p className="mt-2 text-sm leading-6 text-zinc-600">{module.text}</p>
          </article>
        );
      })}
    </div>
  );
}
