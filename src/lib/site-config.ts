export const siteConfig = {
  name: "The Barber Studio",
  url: "https://thebarber.local",
  description:
    "Salon de coiffure et barbier en France avec reservation en ligne, rappels automatiques et espace client securise.",
  phone: "+33 1 23 45 67 89",
  email: "contact@thebarber.example",
  address: {
    street: "12 rue du Salon",
    postalCode: "75011",
    city: "Paris",
    country: "FR",
  },
  openingHours: [
    { day: "Lundi", hours: "Ferme" },
    { day: "Mardi - Vendredi", hours: "09:30 - 19:30" },
    { day: "Samedi", hours: "09:00 - 18:00" },
    { day: "Dimanche", hours: "Ferme" },
  ],
  timeZone: "Europe/Paris",
} as const;
