import { CalendarDays, Scissors } from "lucide-react";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/button";

const navItems = [
  { href: "/#prestations", label: "Prestations" },
  { href: "/#equipe", label: "Equipe" },
  { href: "/#avis", label: "Avis" },
  { href: "/#acces", label: "Acces" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 font-extrabold uppercase text-ink">
          <span className="flex size-9 items-center justify-center rounded-md bg-ink text-white">
            <Scissors className="size-4" aria-hidden="true" />
          </span>
          <span>The Barber Studio</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-bold uppercase text-zinc-700 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-accent">
              {item.label}
            </a>
          ))}
        </nav>
        <ButtonLink href="/reserver" className="h-10 px-3 md:px-4">
          <CalendarDays className="size-4" aria-hidden="true" />
          <span className="hidden sm:inline">Reserver</span>
        </ButtonLink>
      </div>
    </header>
  );
}
