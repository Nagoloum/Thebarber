# The Barber Studio

Base professionnelle pour un site de salon de coiffure en France : vitrine SEO,
reservation en ligne, back-office, PostgreSQL/Prisma, logique metier separee et
socle RGPD/CNIL.

## Getting Started

Installer les dependances :

```bash
npm install
```

Configurer l'environnement :

```bash
cp .env.example .env
```

Lancer le serveur :

```bash
npm run dev
```

Puis ouvrir [http://localhost:3000](http://localhost:3000).

## Architecture

- `src/components` : composants UI, layout et conformite reutilisables.
- `src/features` : domaines metier (`booking`, `salon`, `dashboard`).
- `src/data` : donnees de depart du salon pour prototypage.
- `src/lib` : configuration, utilitaires et client Prisma.
- `src/server` : actions serveur et logique backend.
- `prisma/schema.prisma` : modele relationnel PostgreSQL.

## Stack

- Next.js App Router, TypeScript, Tailwind CSS.
- PostgreSQL + Prisma.
- Auth.js/NextAuth pret a integrer avec Prisma.
- Prestataires recommandes France/UE : Brevo/Mailjet, OVH SMS/Octopush,
  Matomo/Plausible EU.

## Commandes utiles

```bash
npm run lint
npm run build
npm run db:generate
npm run db:migrate
npm run db:studio
```
