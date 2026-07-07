import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-ink text-white">
      <div className="container-page grid gap-8 py-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="heading-luxe text-2xl text-white">
            {siteConfig.name}
          </p>
          <p className="mt-3 max-w-md text-sm leading-6 text-zinc-300">
            Coupe, barbe, coloration et soins dans une atmosphere soignee.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Contact</p>
          <ul className="mt-3 space-y-2 text-sm text-zinc-300">
            <li>{siteConfig.phone}</li>
            <li>{siteConfig.email}</li>
            <li>
              {siteConfig.address.street}, {siteConfig.address.postalCode}{" "}
              {siteConfig.address.city}
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Informations</p>
          <ul className="mt-3 space-y-2 text-sm text-zinc-300">
            <li>Mentions legales</li>
            <li>Confidentialite</li>
            <li>Cookies</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
