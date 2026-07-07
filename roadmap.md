# Roadmap The Barber Studio

Regle de suivi : une case est cochee uniquement quand l'etape est terminee techniquement et validee par le client.

## Etape 1 - Cadrage final

- [ ] Valider le nom commercial definitif du salon.
- [ ] Valider l'adresse, telephone, email et horaires.
- [ ] Valider les prestations, prix, durees et categories.
- [ ] Valider les membres de l'equipe et leurs specialites.
- [ ] Valider les photos finales du salon, de l'equipe et des realisations.
- [ ] Valider le parcours sans creation de compte pour la reservation.
- [ ] Decider si le paiement en ligne reste en phase 2.

## Etape 2 - Direction artistique

- [ ] Valider la palette principale.
- [ ] Valider la typographie titres et textes.
- [ ] Valider le style photo : premium, naturel, propre, salon reel.
- [ ] Finaliser les composants UI : boutons, cartes, formulaires, badges, messages.
- [ ] Ajuster les animations sur les boutons de validation.
- [ ] Verifier le rendu mobile, tablette et desktop.

## Etape 3 - Site vitrine public

- [ ] Finaliser la page d'accueil.
- [ ] Finaliser la section prestations et tarifs.
- [ ] Finaliser la section equipe.
- [ ] Finaliser la section avis clients.
- [ ] Finaliser la section acces et horaires.
- [ ] Ajouter une vraie carte ou un lien d'itineraire.
- [ ] Ajouter les pages legales visibles : mentions legales, confidentialite, cookies.
- [ ] Supprimer tout texte technique ou inutile pour un client final.

## Etape 4 - Reservation sans compte

- [ ] Connecter le formulaire de reservation a PostgreSQL.
- [ ] Enregistrer prestation, coiffeur, date, heure et coordonnees client.
- [ ] Gerer l'option premier disponible.
- [ ] Bloquer les doubles reservations.
- [ ] Appliquer le delai minimum de reservation.
- [ ] Appliquer le delai limite d'annulation.
- [ ] Afficher une vraie page de confirmation.
- [ ] Envoyer un email de confirmation.
- [ ] Generer un lien securise pour modifier ou annuler un rendez-vous.

## Etape 5 - Base de donnees et donnees salon

- [ ] Configurer PostgreSQL local.
- [ ] Configurer PostgreSQL production.
- [ ] Lancer les migrations Prisma.
- [ ] Ajouter un seed de donnees salon.
- [ ] Ajouter les horaires par coiffeur.
- [ ] Ajouter les pauses, conges et jours feries.
- [ ] Ajouter les contraintes de disponibilite.
- [ ] Ajouter les backups automatiques.

## Etape 6 - Back-office prive

- [ ] Creer une route d'administration non visible pour les clients.
- [ ] Ajouter une connexion reservee au personnel.
- [ ] Creer les roles admin, manager et staff.
- [ ] Afficher le planning du jour.
- [ ] Afficher le planning semaine par coiffeur.
- [ ] Creer un rendez-vous manuellement.
- [ ] Modifier ou annuler un rendez-vous.
- [ ] Bloquer un creneau.
- [ ] Gerer les prestations.
- [ ] Gerer les horaires et absences.
- [ ] Gerer les fiches clients.
- [ ] Journaliser les actions sensibles.

## Etape 7 - Notifications

- [ ] Choisir le fournisseur email France/UE.
- [ ] Configurer les emails transactionnels.
- [ ] Envoyer la confirmation de reservation.
- [ ] Envoyer la confirmation d'annulation.
- [ ] Configurer les rappels J-1.
- [ ] Choisir le fournisseur SMS France/UE.
- [ ] Activer les SMS seulement apres validation cout/usage.
- [ ] Separer les notifications de service et le marketing.

## Etape 8 - RGPD et legal France

- [ ] Rediger les mentions legales.
- [ ] Rediger la politique de confidentialite.
- [ ] Rediger la politique cookies.
- [ ] Mettre en place le consentement cookies complet.
- [ ] Ajouter la demande de suppression des donnees.
- [ ] Ajouter la demande d'export des donnees.
- [ ] Definir les durees de conservation.
- [ ] Documenter les sous-traitants : hebergement, email, SMS, analytics.
- [ ] Verifier la conformite CNIL avant production.

## Etape 9 - SEO local

- [ ] Configurer le vrai nom de domaine.
- [ ] Mettre a jour `sitemap.xml`.
- [ ] Mettre a jour `robots.txt`.
- [ ] Ajouter les donnees structurees `HairSalon`.
- [ ] Optimiser les titres et descriptions de pages.
- [ ] Optimiser les textes par prestation.
- [ ] Optimiser les images : poids, alt, formats.
- [ ] Preparer Google Business Profile.
- [ ] Ajouter une strategie d'avis clients.

## Etape 10 - Tests

- [ ] Tester le parcours reservation sur mobile.
- [ ] Tester le parcours reservation sur desktop.
- [ ] Tester les conflits de creneaux.
- [ ] Tester les emails.
- [ ] Tester les annulations.
- [ ] Tester les roles back-office.
- [ ] Tester les pages legales.
- [ ] Tester accessibilite clavier.
- [ ] Tester performance mobile.
- [ ] Corriger les erreurs lint, build et types.

## Etape 11 - Mise en production

- [ ] Choisir l'hebergement France/UE.
- [ ] Configurer les variables d'environnement production.
- [ ] Configurer le domaine.
- [ ] Configurer HTTPS.
- [ ] Deployer l'application.
- [ ] Executer les migrations production.
- [ ] Verifier les backups.
- [ ] Verifier les emails production.
- [ ] Verifier le monitoring erreurs.
- [ ] Faire la recette finale avec le salon.

## Etape 12 - Phase 2

- [ ] Paiement d'acompte en ligne.
- [ ] Programme fidelite.
- [ ] Codes promotionnels.
- [ ] Campagnes email marketing avec consentement.
- [ ] Campagnes SMS marketing avec consentement.
- [ ] Blog conseils coiffure.
- [ ] Galerie avant/apres avancee.
- [ ] Statistiques avancees.
