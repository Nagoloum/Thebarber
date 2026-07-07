import type { SalonService, StaffMember } from "@/types/booking";

export const services: SalonService[] = [
  {
    id: "coupe-signature",
    name: "Coupe signature",
    category: "coupe",
    description: "Diagnostic, shampoing, coupe aux ciseaux et coiffage.",
    durationMinutes: 45,
    priceCents: 4500,
    staffIds: ["marc", "ines", "lea"],
  },
  {
    id: "taille-barbe",
    name: "Taille de barbe",
    category: "barbe",
    description: "Contours precis, serviette chaude et soin apaisant.",
    durationMinutes: 30,
    priceCents: 2800,
    staffIds: ["marc", "ines"],
  },
  {
    id: "coloration-naturelle",
    name: "Coloration naturelle",
    category: "coloration",
    description: "Coloration personnalisee avec temps de diagnostic inclus.",
    durationMinutes: 90,
    priceCents: 7800,
    staffIds: ["ines", "lea"],
  },
  {
    id: "soin-profond",
    name: "Soin profond",
    category: "soin",
    description: "Soin reparateur, massage cuir chevelu et brushing.",
    durationMinutes: 60,
    priceCents: 5600,
    staffIds: ["lea", "ines"],
  },
];

export const staffMembers: StaffMember[] = [
  {
    id: "marc",
    name: "Marc",
    role: "Barbier senior",
    bio: "Specialiste des coupes courtes, degrades et tailles de barbe.",
    specialties: ["coupe", "barbe"],
  },
  {
    id: "ines",
    name: "Ines",
    role: "Coloriste",
    bio: "Experte coloration, gloss, corrections legeres et conseils routine.",
    specialties: ["coupe", "barbe", "coloration", "soin"],
  },
  {
    id: "lea",
    name: "Lea",
    role: "Coiffeuse styliste",
    bio: "Coupes longues, soins profonds et finitions naturelles.",
    specialties: ["coupe", "coloration", "soin"],
  },
];

export const testimonials = [
  {
    name: "Nadia B.",
    text: "Reservation tres simple sur mobile, rappel recu la veille et accueil impeccable.",
  },
  {
    name: "Thomas R.",
    text: "Planning clair, prestation ponctuelle, resultat propre. Exactement ce qu'il fallait.",
  },
  {
    name: "Camille D.",
    text: "J'ai retrouve mon historique de prestations et repris la meme formule en deux minutes.",
  },
];
