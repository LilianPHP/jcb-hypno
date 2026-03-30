# Design System — Jean-Charles Bernard Hypnothérapeute
Version 1.0 · Mars 2026

---

## Philosophie

Le design doit inspirer **confiance, sérénité et professionnalisme**.
Pas de fantaisie, pas de couleurs agressives. L'utilisateur arrive souvent dans un état de vulnérabilité — le site doit le rassurer immédiatement.

---

## Couleurs

### Palette principale

| Token | Valeur | Usage |
|---|---|---|
| `--primary` | `#4F46E5` | Indigo — Boutons CTA, liens actifs, accents |
| `--primary-dk` | `#3730A3` | Indigo sombre — Hover boutons |
| `--primary-lt` | `#818CF8` | Indigo clair — Icônes sur fond sombre, badges |
| `--accent` | `#059669` | Vert sauge — Confiance, santé, validation |
| `--accent-lt` | `#D1FAE5` | Vert très clair — Fond icônes services |

### Neutres

| Token | Valeur | Usage |
|---|---|---|
| `--bg` | `#F8F7FF` | Fond global (lavande très clair) |
| `--bg-card` | `#FFFFFF` | Fond des cards |
| `--text` | `#1E1B4B` | Texte principal (indigo très sombre) |
| `--text-muted` | `#6B7280` | Texte secondaire, légendes |
| `--text-light` | `#9CA3AF` | Placeholders, notes de bas de page |
| `--border` | `#E5E7EB` | Bordures légères |

### Sections spéciales
- Section "Problèmes" : fond `#1E1B4B` (text-color) → crée un contraste fort, dramatise la douleur
- Section "Services" : fond `#F0FDF4` (vert très clair) → évoque la solution, la guérison
- Section CTA : fond `#4F46E5` (primary) → call-to-action fort

---

## Typographie

### Polices Google Fonts

```css
@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Raleway:wght@300;400;500;600;700&display=swap');
```

| Famille | Rôle | Caractère |
|---|---|---|
| **Lora** (serif) | Titres H1–H4, citations | Autorité, chaleur, profondeur |
| **Raleway** (sans-serif) | Corps, boutons, labels | Clarté, modernité, accessibilité |

### Échelle typographique

| Élément | Taille | Police | Poids |
|---|---|---|---|
| H1 | `clamp(2rem, 5vw, 3.25rem)` | Lora | 600 |
| H2 | `clamp(1.6rem, 3.5vw, 2.4rem)` | Lora | 500 |
| H3 | `1.25rem` | Lora | 600 |
| H4 | `1rem` | Lora | 600 |
| Corps | `1rem / 16px` | Raleway | 400 |
| Lead | `1.125rem` | Raleway | 400 |
| Eyebrow | `0.75rem` | Raleway | 700 + uppercase |
| Boutons | `0.9rem` | Raleway | 600 |

### Règles typographiques
- Line-height corps : `1.65`
- Line-height titres : `1.25`
- Longueur max de ligne : `62ch` pour les paragraphes lead
- Jamais sous `16px` pour le texte corps

---

## Espacement

```css
--radius:     14px;   /* Cards standard */
--radius-lg:  22px;   /* Grande cards, hero */
/* Arrondi maximal (50px) pour les boutons et badges pills */
```

| Niveau | Usage |
|---|---|
| `1rem` | Gap interne |
| `1.5rem` | Padding containers mobile |
| `2rem` | Padding cards |
| `3rem` | Gap entre sections mobiles |
| `5rem` | Gap entre sections desktop |

---

## Ombres

```css
--shadow-sm: 0 2px 8px rgba(79,70,229,.08);
--shadow-md: 0 8px 32px rgba(79,70,229,.12);
--shadow-lg: 0 20px 60px rgba(79,70,229,.15);
```

Les ombres sont colorées à l'indigo (pas au noir pur) pour rester dans la palette.

---

## Animations

| Règle | Valeur |
|---|---|
| Transition standard | `220ms ease` |
| Scroll reveal | `0.6s ease` (opacity + translateY 24px) |
| Compteurs stats | `1800ms` cubic-ease |
| Hover boutons | `translateY(-1px)` |
| Hover service cards | `translateY(-4px)` |

**Toujours respecter `prefers-reduced-motion`** — les animations sont désactivées si l'utilisateur le demande.

---

## Composants

### Boutons
- `.btn-primary` — Indigo plein, ombre colorée
- `.btn-ghost` — Transparent, bordure indigo, fill au hover
- `.btn-outline` — Sur fond coloré, semi-transparent blanc
- `.btn-white` — Sur fond indigo, blanc pur

### Navigation
- Pill flottante, backdrop-blur, offset `1rem` des bords
- Scroll → ombre renforcée via classe `.scrolled`

### Cards
- Coins `14px` standard, `22px` pour les grandes
- Bordure `1px` légère, ombre `--shadow-sm`
- Hover : `translateY(-4px)` + `--shadow-md`

---

## Breakpoints

| Nom | Largeur | Changements |
|---|---|---|
| Desktop | `>1024px` | Layouts à 2 colonnes |
| Tablet | `≤1024px` | Colonnes empilées, nav hamburger |
| Mobile | `≤640px` | 1 colonne, padding réduit, floating cards masquées |

---

## À faire / évolutions

- [ ] Ajouter une photo réelle de Jean-Charles (remplacer les silhouettes)
- [ ] Intégrer le logo / favicon
- [ ] Tester les couleurs en dark mode (actuellement désactivé)
- [ ] Ajouter un chatbot de prise de RDV
- [ ] Internationalisation EN si besoin
