import { CERTIFICATIONS } from '@/lib/certifications';

/**
 * Schema.org du site — source unique.
 *
 * L'accueil déclare l'entité (le cabinet, le praticien, le site) ; chaque page
 * de spécialité déclare un Service rattaché à ce cabinet par son @id. Un seul
 * cabinet, donc un seul LocalBusiness — pas neuf.
 *
 * Adresse, téléphone et horaires ne sont écrits qu'ici : recopiés sur neuf
 * pages, ils finissent par diverger.
 *
 * Pas d'aggregateRating : Google n'affiche pas d'étoiles pour les avis qu'une
 * entreprise publie sur elle-même, et le nombre d'avis affiché sur le site
 * n'est pas encore cohérent (38 ou 39).
 */

export const SITE_URL = 'https://jean-charles-bernard.fr';
const CABINET_ID = `${SITE_URL}/#cabinet`;
const PRATICIEN_ID = `${SITE_URL}/#jean-charles-bernard`;
const SITE_ID = `${SITE_URL}/#site`;
const NOM = 'Jean-Charles Bernard — Hypnothérapeute';
const PRIX = '80';
const PORTRAIT = `${SITE_URL}/images/jc-portrait.jpg`;

const adresse = {
  '@type': 'PostalAddress',
  streetAddress: '4 Allée Les Marronniers',
  postalCode: '91800',
  addressLocality: 'Boussy-Saint-Antoine',
  addressRegion: 'Essonne',
  addressCountry: 'FR',
};

const coordonnees = {
  telephone: '+33660811295',
  email: 'jeancharlesbernard3@gmail.com',
};

const horaires = {
  '@type': 'OpeningHoursSpecification',
  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  opens: '09:00',
  closes: '20:00',
};

/**
 * Le cabinet, tel que déclaré partout : entité de l'accueil et fournisseur des
 * pages de spécialité. Un seul objet, sinon le fournisseur perd des champs — le
 * test des résultats enrichis signalait priceRange et image manquants.
 */
const cabinet = {
  '@type': 'LocalBusiness',
  '@id': CABINET_ID,
  name: NOM,
  url: SITE_URL,
  image: PORTRAIT,
  ...coordonnees,
  priceRange: `${PRIX}€`,
  address: adresse,
  openingHoursSpecification: horaires,
};

/** Les 8 pages de spécialité, dans l'ordre du menu. */
export const SERVICES = [
  { path: '/arret-tabac', name: 'Hypnose pour arrêter de fumer' },
  { path: '/stress-anxiete', name: "Hypnose contre le stress et l'anxiété" },
  { path: '/poids-alimentation', name: "Hypnose pour le poids et l'alimentation" },
  { path: '/sommeil-insomnie', name: "Hypnose pour le sommeil et l'insomnie" },
  { path: '/phobies', name: 'Hypnose pour les phobies et les peurs' },
  { path: '/schemas-repetitifs', name: 'Hypnose pour sortir des schémas répétitifs' },
  { path: '/traumatismes', name: 'Hypnose et traumatismes' },
  { path: '/enfants-adolescents', name: 'Hypnose pour enfants et adolescents' },
] as const;

export type ServicePath = (typeof SERVICES)[number]['path'];

const offre = (url: string) => ({
  '@type': 'Offer',
  price: PRIX,
  priceCurrency: 'EUR',
  url,
});

/** Accueil : le cabinet, le praticien et le site, reliés entre eux par @id. */
export function homeJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        ...cabinet,
        description:
          "Jean-Charles Bernard, hypnothérapeute diplômé IFHE à Boussy-Saint-Antoine (91), en cabinet ou à distance. Hypnose ericksonienne, humaniste, RITMO®, PNL. 15 ans d'expérience.",
        founder: { '@id': PRATICIEN_ID },
        sameAs: ['https://www.pagesjaunes.fr/pros/55730097'],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: "Accompagnements par l'hypnose",
          itemListElement: SERVICES.map(({ path, name }) => ({
            ...offre(`${SITE_URL}${path}`),
            itemOffered: { '@type': 'Service', name, url: `${SITE_URL}${path}` },
          })),
        },
      },
      {
        '@type': 'Person',
        '@id': PRATICIEN_ID,
        name: 'Jean-Charles Bernard',
        jobTitle: 'Hypnothérapeute',
        image: PORTRAIT,
        worksFor: { '@id': CABINET_ID },
        knowsAbout: ['Hypnose ericksonienne', 'Hypnose humaniste', 'Hypnose classique', 'PNL', 'RITMO®'],
        hasCredential: CERTIFICATIONS.map((name) => ({
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'certification',
          name,
        })),
      },
      {
        '@type': 'WebSite',
        '@id': SITE_ID,
        url: SITE_URL,
        name: NOM,
        inLanguage: 'fr-FR',
        publisher: { '@id': CABINET_ID },
      },
    ],
  };
}

/**
 * Page de spécialité : un Service rattaché au cabinet. Le fournisseur reprend
 * le cabinet complet pour rester lisible seul — Google ne résout pas toujours
 * un @id d'une page à l'autre.
 */
export function serviceJsonLd(path: ServicePath, description: string) {
  const { name } = SERVICES.find((s) => s.path === path)!;
  const url = `${SITE_URL}${path}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name,
    description,
    url,
    serviceType: 'Hypnothérapie',
    provider: cabinet,
    offers: offre(url),
  };
}
