/**
 * Image de partage (src/app/opengraph-image.jpg).
 *
 * Le fichier à la racine s'applique aux pages qui n'ont pas de bloc `openGraph`.
 * Une page qui déclare son propre `openGraph` remplace celui du parent en entier
 * (fusion superficielle) et perd l'image : elle doit la redéclarer.
 */
export const OG_IMAGES = [
  {
    url: '/opengraph-image.jpg',
    width: 1200,
    height: 630,
    alt: 'Jean-Charles Bernard, hypnothérapeute certifié IFHE à Boussy-Saint-Antoine (91)',
  },
];
