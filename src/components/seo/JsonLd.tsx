/**
 * Données structurées JSON-LD, en balise <script> native rendue dans le HTML
 * serveur. Ne pas remplacer par next/script : il n'émet pas la balise côté
 * serveur, le JSON-LD n'existe alors que dans les données React et n'est injecté
 * qu'après exécution du JavaScript.
 * Voir node_modules/next/dist/docs/01-app/02-guides/json-ld.md
 */
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // `<` échappé : une chaîne du JSON ne peut pas fermer la balise script.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}
