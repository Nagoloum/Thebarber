import { CalendarDays, Scissors } from "lucide-react";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/button";

const navItems = [
  { href: "/#prestations", label: "Prestations" },
  { href: "/#equipe", label: "Equipe" },
  { href: "/#conformite", label: "Conformite" },
  { href: "/back-office", label: "Back-office" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/70 bg-stone-50/92 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 font-semibold text-zinc-950">
          <span className="flex size-9 items-center justify-center rounded-md bg-zinc-950 text-white">
            <Scissors className="size-4" aria-hidden="true" />
          </span>
          <span>The Barber Studio</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-zinc-700 md:flex">
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
