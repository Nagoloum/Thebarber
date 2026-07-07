import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="container-page grid gap-8 py-10 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="font-serif text-2xl font-semibold">{siteConfig.name}</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-zinc-600">
            Base technique initialisee pour un salon francais : reservation,
            back-office, notifications, SEO local et conformite RGPD/CNIL.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-zinc-950">Contact</p>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600">
            <li>{siteConfig.phone}</li>
            <li>{siteConfig.email}</li>
            <li>
              {siteConfig.address.street}, {siteConfig.address.postalCode}{" "}
              {siteConfig.address.city}
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-zinc-950">Legal</p>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600">
            <li>Mentions legales</li>
            <li>Politique de confidentialite</li>
            <li>Gestion des cookies</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
