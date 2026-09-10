import { MetadataRoute } from 'next';

const BASE_URL = 'https://jean-charles-bernard.fr';

/**
 * Une entrée par page réellement indexable.
 *
 * Pas d'URL à ancre (#approche, #rdv…) : Google ignore les fragments, ce ne
 * sont pas des pages distinctes. Les déclarer dilue le sitemap et peut faire
 * remonter des « pages en double ».
 *
 * `lastModified` est figé à la date de dernière modification réelle du
 * contenu, à mettre à jour quand la page change. Surtout pas `new Date()` :
 * toutes les pages se déclareraient modifiées à chaque déploiement, et Google
 * finit par ignorer un lastmod qui crie au loup.
 */
const pages: { path: string; lastModified: string; priority: number }[] = [
  { path: '', lastModified: '2026-09-10', priority: 1.0 },
  { path: '/arret-tabac', lastModified: '2026-09-09', priority: 0.9 },
  { path: '/stress-anxiete', lastModified: '2026-09-09', priority: 0.9 },
  { path: '/poids-alimentation', lastModified: '2026-09-09', priority: 0.9 },
  { path: '/sommeil-insomnie', lastModified: '2026-09-09', priority: 0.9 },
  { path: '/traumatismes', lastModified: '2026-09-10', priority: 0.9 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(({ path, lastModified, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(lastModified),
    changeFrequency: 'monthly',
    priority,
  }));
}
