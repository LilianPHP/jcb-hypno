# Projet JCB Hypno — Fiche de transfert complète

> Dernière mise à jour : 2026-05-08  
> Créé par : Lilian (dev) avec Claude  
> Client : Jean-Charles Bernard, hypnothérapeute

---

## 🌐 Liens utiles

| Quoi | URL |
|------|-----|
| **Site en production** | https://jcb-hypno.vercel.app |
| **Domaine cible** | https://jean-charles-bernard.fr (DNS OVH à configurer) |
| **Dashboard Vercel** | https://vercel.com/lilianphps-projects/jcb-hypno |
| **Calendly JC** | https://calendly.com/jeancharlesbernard3/seance-1h |
| **Google Maps / Avis** | https://maps.app.goo.gl/... (38 avis, 5.0★) |
| **PagesJaunes** | https://www.pagesjaunes.fr/pros/55730097 |

---

## 📁 Structure du projet

```
/Users/ganetlilian/Desktop/jcb-hypno/
├── src/
│   ├── app/
│   │   ├── page.tsx          ← assemblage de toutes les sections
│   │   ├── layout.tsx        ← fonts Lora + Raleway, metadata SEO, lang="fr"
│   │   ├── globals.css       ← design tokens + CSS SpotlightCard
│   │   └── icon.svg
│   ├── components/
│   │   ├── effects/          ← composants React Bits portés manuellement
│   │   │   ├── BlurText.tsx
│   │   │   ├── CountUp.tsx
│   │   │   ├── FadeContent.tsx
│   │   │   ├── Magnet.tsx
│   │   │   ├── Silk.tsx       ← WebGL via @react-three/fiber (SSR disabled)
│   │   │   ├── SpotlightCard.tsx
│   │   │   └── TiltedCard.tsx
│   │   └── sections/
│   │       ├── Navbar.tsx
│   │       ├── HeroSection.tsx
│   │       ├── ProblemsSection.tsx
│   │       ├── ServicesSection.tsx
│   │       ├── TestimonialsSection.tsx
│   │       ├── AboutSection.tsx
│   │       ├── BookingSection.tsx  ← Calendly + PagesJaunes + contact
│   │       └── FooterSection.tsx
│   └── lib/utils.ts
└── public/
    └── images/
        ├── jc-portrait.jpg   ← photo hero
        ├── JC_Picure.png     ← photo about
        ├── photo_bureau.jpg
        ├── room1.jpg
        └── room2.png
```

---

## 🎨 Design System

| Token | Valeur |
|-------|--------|
| **Couleur primaire** | `#4F46E5` (indigo) |
| **Couleur accent** | `#059669` (sage green) |
| **Fond global** | `#F8F7FF` |
| **Texte** | `#1E1B4B` |
| **Font serif** | Lora (Google Fonts) → titres |
| **Font sans** | Raleway (Google Fonts) → corps |
| **Fond ProblemsSection** | `#0f0c29` (dark indigo) |

**SpotlightCard CSS** (dans `globals.css`) :
```css
.card-spotlight { position: relative; overflow: hidden; }
.card-spotlight::before {
  content: ''; position: absolute; inset: 0;
  background: radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
    var(--spotlight-color, rgba(99,102,241,0.15)), transparent 65%);
  opacity: 0; transition: opacity 0.3s ease; pointer-events: none;
  z-index: 0; border-radius: inherit;
}
.card-spotlight:hover::before { opacity: 1; }
.card-spotlight > * { position: relative; z-index: 1; }
```

---

## 📦 Dépendances clés

```json
"next": "16.2.1",
"react": "19",
"motion": "^12",          // framer-motion (motion/react)
"@react-three/fiber",      // WebGL pour Silk background
"three",
"lucide-react",
"tailwind-merge",
"clsx"
```

---

## 🗂️ Sections et leur contenu

### 1. Navbar
- Logo : "Jean-Charles Bernard" (une seule ligne)
- Liens : Mon approche · Séances · Avis · À propos
- Scroll-aware : transparent → blanc/95 + backdrop-blur
- CTA : 06 60 81 12 95 + bouton "Prendre RDV" → `#rdv`

### 2. HeroSection
- Background : composant `Silk` (WebGL, dynamic import SSR:false)
- Headline BlurText : *"Libérez votre potentiel par l'hypnose"*
- Badge : "HYPNOTHÉRAPEUTE CERTIFIÉ IFHE · BOUSSY-SAINT-ANTOINE & PARIS"
- Floating badge : "80€ · 1h"
- Google rating : 5.0 · 38 avis Google vérifiés
- Photo : `/images/jc-portrait.jpg`
- CTAs (Magnet) : "Réserver une séance" → `#rdv` | "Voir l'approche" → `#approche`

### 3. ProblemsSection — "Êtes-vous concerné ?"
- Background : `#0f0c29`
- Grille 3×2 de `SpotlightCard`
- 6 problèmes : Stress & Anxiété · Tabac & Addictions · Poids & Alimentation · Phobies & Peurs · Schémas répétitifs · Enfants & Adolescents

### 4. ServicesSection — "Méthodes & Séances"
- Background : `bg-slate-50`
- Grille 3×2 de cards light
- 6 méthodes : Ericksonienne · Humaniste · Classique · PNL · Addictions · RITMO®
- Tous à 1h · 80€

### 5. TestimonialsSection — "Témoignages"
- Stats CountUp : 15+ ans · 6 méthodes · 38 avis · 80€
- Google badge 5★
- 6 vrais avis Google en `TiltedCard` 3×2
- Lien "Voir tous" → Google Maps

### 6. AboutSection — "À propos"
- Photo : `/images/JC_Picure.png`
- Citation flottante : *"Permettez-vous de pousser la porte de votre inconscient."*
- Bio, 2 cabinets, certifications IFHE
- Bouton "Prendre RDV" → `#rdv`

### 7. BookingSection — "Réservez votre séance"
- ID : `id="rdv"`
- Colonne gauche (1/3) : infos contact + "Ce qui vous attend" + boutons
  - Téléphone : 06 60 81 12 95
  - Email : jeancharlesbernard3@gmail.com
  - Cabinets : Boussy-Saint-Antoine (91) · Paris
  - Horaires : Lun–Sam · 9h–20h
  - Bouton "Préférez-vous appeler ?" → `tel:+33660811295`
  - Bouton jaune "Réserver sur PagesJaunes" → https://www.pagesjaunes.fr/pros/55730097
- Colonne droite (2/3) : widget Calendly inline
  - URL : `https://calendly.com/jeancharlesbernard3/seance-1h`
  - Chargé via `next/script` strategy `lazyOnload`
  - Couleur primaire passée : `primary_color=4f46e5`
  - Hauteur widget : 700px

### 8. FooterSection
- Background : `bg-slate-950`
- 3 colonnes : Brand · Navigation · Contact
- Copyright + mentions légales

---

## 🚀 Déploiement

**Vercel** — compte : `lilianphp` / team : `lilianphps-projects`

```bash
# Depuis le dossier du projet
cd /Users/ganetlilian/Desktop/jcb-hypno

# Preview
npx vercel --yes

# Production
npx vercel --prod --yes
```

**DNS à configurer chez OVH** pour `jean-charles-bernard.fr` :

| Type | Sous-domaine | Cible |
|------|-------------|-------|
| `A` | `@` | `76.76.21.21` |
| `CNAME` | `www` | `cname.vercel-dns.com` |

---

## 📞 Contact client

| Info | Valeur |
|------|--------|
| Nom | Jean-Charles Bernard |
| Téléphone | 06 60 81 12 95 |
| Email | jeancharlesbernard3@gmail.com |
| Cabinet 1 | 4 Allée Les Marronniers, 91800 Boussy-Saint-Antoine |
| Cabinet 2 | 4 Cité Négrier, 75007 Paris (Métro La Tour Maubourg) |
| Horaires | Lun–Sam · 9h–20h |
| Tarif | 80€ / 1h |

---

## ⚠️ Points d'attention

1. **DNS OVH** — non encore configurés. Jean-Charles doit ajouter les enregistrements A + CNAME.
2. **Calendly** — URL réelle connectée. Si Jean-Charles change son lien, mettre à jour `CALENDLY_URL` dans `BookingSection.tsx`.
3. **Images** — toutes présentes dans `/public/images/`. Pas de CDN externe.
4. **Silk (WebGL)** — chargé en dynamic import SSR:false. Ne pas passer en SSR.
5. **@react-three/fiber** — utilise `require()` à l'intérieur du composant pour éviter les erreurs SSR.

---

## 🧰 Pour relancer le serveur de dev

```bash
cd /Users/ganetlilian/Desktop/jcb-hypno
npm run dev -- --port 3000
```

Le preview Claude est configuré dans `.claude/launch.json` du worktree scanner-financier.
