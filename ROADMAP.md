# Roadmap — Site Jean-Charles Bernard Hypnothérapeute
> Document de planification · Rédigé le 31 mars 2026 · Par Lilian & Claude

---

## 🎯 Situation actuelle

| Élément | État |
|---|---|
| Site actuel | hypnose-liveyourdreams.fr (vieux, mauvais SEO) |
| Nouveau site | ✅ En ligne sur jcb-hypno.vercel.app |
| GitHub | ✅ LilianPHP/jcb-hypno |
| Réservation | Pages Jaunes / ClicRDV |
| Google Business | ❓ À vérifier / optimiser |

---

## 1. 🌐 Nom de domaine

### Recommandation : `jean-charles-bernard.fr`

**Pourquoi ?**
- Son nom EST sa marque (recommandations bouche-à-oreille = recherche par nom)
- Google référence les praticiens par nom propre
- Court, mémorisable, professionnel
- Tous les domaines testés sont **disponibles**

**Alternatives validées (toutes dispo) :**
- `bernard-hypnose.fr` — si on veut "hypnose" dans le domaine
- `jcbernard-hypnotherapeute.fr` — si on veut le métier dans l'URL

**Où acheter** (Vercel ne supporte pas les .fr) :
- **OVH.com** → ~7€/an (français, fiable)
- **Gandi.net** → ~15€/an (premium, excellent support)
- **Ionos.fr** → ~1€/an la première année

**Actions :**
- [ ] Jean-Charles choisit le nom final
- [ ] Acheter le domaine sur OVH (~7€/an)
- [ ] Connecter à Vercel (je m'en occupe)
- [ ] Redirection 301 depuis l'ancien domaine (ne pas perdre le SEO existant)

---

## 2. 📅 Prise de rendez-vous

### Verdict sur Pages Jaunes

**Garder** Pages Jaunes comme source secondaire — ne jamais supprimer un lien qui existe depuis des années (= SEO et habitudes patients). Mais **ne plus en faire le lien principal** sur le site.

### Recommandation : Double système

#### Option A — Court terme (gratuit, rapide) : **Calendly**
- Calendrier embarqué directement dans le site (les patients ne quittent pas la page)
- Gratuit jusqu'à un type de RDV
- Jean-Charles synchronise avec son Google Calendar
- Confirmation automatique par email au patient
- **À mettre en place en 30 minutes**

#### Option B — Moyen terme (payant, puissant) : **Doctolib**
- ~129€/mois — cher mais justifié pour un praticien avec 2 cabinets
- Les patients cherchent DIRECTEMENT sur Doctolib
- Boost de crédibilité énorme (patients = "c'est sérieux")
- Rappels SMS automatiques = moins de no-shows
- Les hypnothérapeutes sont éligibles
- **À envisager si Jean-Charles veut scaler**

#### Option C — Très simple : **Formulaire de contact + téléphone**
- Pour les patients qui préfèrent le contact humain
- Jean-Charles rappelle et confirme lui-même
- Aucun coût, contrôle total

### Plan recommandé
1. **Maintenant** : Intégrer Calendly dans la section Contact du site
2. **Dans 3 mois** : Évaluer si Doctolib vaut l'investissement selon le volume de patients
3. **Toujours** : Garder le lien Pages Jaunes comme fallback

---

## 3. 🏗️ Architecture & CMS

### La question : rester sur Next.js ou passer sur WordPress ?

### Recommandation : **Rester sur Next.js + ajouter Sanity CMS**

**Pourquoi pas WordPress ?**
- WordPress = lent, vulnérable aux hackers, maintenance constante des plugins
- On perdrait le design et les animations déjà construits
- Hosting WordPress = 5-15€/mois vs 0€ sur Vercel actuellement

**Pourquoi pas Framer/Webflow ?**
- Refaire tout depuis zéro = temps + argent perdu
- Abonnement mensuel obligatoire

**Le plan optimal : Next.js + Sanity (gratuit)**

Sanity est un CMS headless qui donne à Jean-Charles un tableau de bord simple pour modifier :
- Ses textes et tarifs
- Ses horaires
- Ses photos
- Ses témoignages

Toi (Lilian) gardes le contrôle du code et du design. Jean-Charles peut modifier le contenu en autonomie sans te déranger.

**Qui modifie quoi :**

| Action | Qui | Comment |
|---|---|---|
| Changer un texte / tarif | Jean-Charles | Tableau de bord Sanity |
| Ajouter une photo | Jean-Charles | Tableau de bord Sanity |
| Changer le design / ajouter une section | Lilian | Claude + GitHub |
| Nouveau déploiement | Automatique | Dès que Lilian push sur GitHub |

---

## 4. 🔍 SEO — Plan d'action

### Priorité 1 — Google Business Profile (GRATUIT, IMPACT IMMÉDIAT)
- [ ] Revendiquer / optimiser la fiche Google de Jean-Charles
- [ ] Ajouter les 2 adresses (Paris 7e + Boussy)
- [ ] Uploader 10+ photos (cabinet, portrait)
- [ ] Activer la prise de RDV Google (gratuit, directement dans Maps)
- [ ] Répondre à tous les avis existants

### Priorité 2 — SEO technique du site (je m'en occupe)
- [ ] Ajouter Schema.org LocalBusiness (données structurées pour Google)
- [ ] Sitemap XML automatique
- [ ] Balises Open Graph pour le partage réseaux sociaux
- [ ] Images optimisées (WebP, lazy loading)
- [ ] Score Lighthouse > 90

### Priorité 3 — Contenu (moyen terme)
- [ ] Créer des pages séparées par service (Hypnose Ericksonienne, RITMO®, etc.)
- [ ] Page dédiée "Arrêter de fumer par l'hypnose"
- [ ] Page dédiée "Hypnose enfants et adolescents"
- [ ] Blog mensuel (1 article = 1 requête SEO ciblée)

### Mots-clés cibles par priorité

| Priorité | Mot-clé | Volume estimé |
|---|---|---|
| 🔴 Urgent | "hypnothérapeute Paris 7" | Fort |
| 🔴 Urgent | "hypnothérapeute Boussy-Saint-Antoine" | Moyen |
| 🟠 Moyen terme | "arrêter de fumer hypnose Paris" | Fort |
| 🟠 Moyen terme | "hypnose anxiété stress Paris" | Fort |
| 🟡 Long terme | "RITMO Paris" | Niche |
| 🟡 Long terme | "hypnose enfants Essonne" | Moyen |

---

## 5. 🗓️ Roadmap par phases

### Phase 1 — Fondations (Maintenant → 2 semaines)
- [ ] Choisir et acheter le domaine (.fr)
- [ ] Connecter le domaine à Vercel
- [ ] Intégrer Calendly dans le site
- [ ] Optimiser Google Business Profile
- [ ] Redirection 301 depuis l'ancien domaine

### Phase 2 — Contenu & CMS (2 semaines → 1 mois)
- [ ] Intégrer Sanity CMS
- [ ] Ajouter les vrais témoignages patients (avec accord)
- [ ] Ajouter Schema.org + données structurées
- [ ] Sitemap + robots.txt
- [ ] Photo portrait professionnel de Jean-Charles dans la section "À propos"

### Phase 3 — SEO & Croissance (1 → 3 mois)
- [ ] Pages de service individuelles
- [ ] Page "Arrêter de fumer"
- [ ] Évaluer Doctolib
- [ ] Premier article de blog
- [ ] Campagne de collecte d'avis Google

### Phase 4 — Optimisation (3 mois+)
- [ ] Score Lighthouse 95+
- [ ] A/B test des CTA ("Prendre RDV" vs "Réserver une séance")
- [ ] Éventuellement : version anglaise si patients expats (Paris 7e)

---

## 6. 💰 Budget estimé

| Poste | Coût | Fréquence |
|---|---|---|
| Domaine .fr (OVH) | ~7€ | /an |
| Hébergement Vercel | **0€** | /mois |
| Calendly (basique) | **0€** | /mois |
| Sanity CMS | **0€** | /mois |
| Google Business | **0€** | /mois |
| **Total minimum** | **~7€/an** | |
| Doctolib (optionnel) | 129€ | /mois |

---

## 7. ❓ Décisions en attente (Jean-Charles)

1. **Domaine** : `jean-charles-bernard.fr` ou autre ?
2. **Calendly vs Doctolib** : budget disponible pour Doctolib ?
3. **Édition du site** : Jean-Charles veut-il modifier lui-même le contenu ?
4. **Témoignages** : a-t-il l'accord écrit des patients pour les 4 avis affichés ?
5. **Photos** : a-t-il une photo portrait professionnelle pour la section "À propos" ?

---

*Document vivant — mis à jour à chaque session de travail*
