import type { Metadata } from 'next';
import Navbar from '@/components/sections/Navbar';
import FooterSection from '@/components/sections/FooterSection';
import OpenConsentButton from '@/components/consent/OpenConsentButton';

export const metadata: Metadata = {
  alternates: { canonical: '/mentions-legales' },
  title: 'Mentions légales et confidentialité | Jean-Charles Bernard',
  description:
    "Mentions légales, données personnelles et cookies du site de Jean-Charles Bernard, hypnothérapeute à Boussy-Saint-Antoine (91).",
};

/**
 * ❓ MANQUANT — la section « Médiation de la consommation » reste à écrire : tout
 * professionnel vendant à des particuliers doit désigner un médiateur référencé
 * par la CECMC et afficher ses coordonnées (amende jusqu'à 3 000 €). À remettre
 * dès que Jean-Charles a adhéré, avec nom, adresse et site du médiateur.
 *
 * Les valeurs ci-dessous s'affichent en jaune tant qu'elles sont vides.
 */
const A_COMPLETER = {
  // Certificat d'inscription au répertoire SIRENE (INSEE), transmis le 16/09/2026.
  statut: 'Entrepreneur individuel',
  siret: '512 656 679 00044',
  conservationGa4: '2 mois', // durée réglée dans la propriété GA4 (Admin → Conservation des données)
};

function Valeur({ v }: { v: string }) {
  return v ? <>{v}</> : <mark className="bg-amber-100 text-amber-900 px-1 rounded">❓ À COMPLÉTER</mark>;
}

const h2 = 'font-serif text-2xl font-bold text-[#1E1B4B] mt-12 mb-4';
const h3 = 'font-sans font-semibold text-[#1E1B4B] mt-6 mb-2';
const p = 'text-slate-600 leading-relaxed mb-3';
const lien = 'text-indigo-600 underline underline-offset-2';

export default function MentionsLegalesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Bandeau sombre : la barre de navigation est transparente, en texte blanc, en haut de page. */}
        <section className="bg-[#0f0c29] pt-32 pb-14">
          <div className="max-w-3xl mx-auto px-6">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-3">Mentions légales et confidentialité</h1>
            <p className="text-white/50 text-sm">Dernière mise à jour : 16 septembre 2026.</p>
          </div>
        </section>
        <div className="bg-white pt-4 pb-20">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className={h2}>Éditeur du site</h2>
            <p className={p}>
              Jean-Charles Bernard, hypnothérapeute<br />
              Statut : <Valeur v={A_COMPLETER.statut} /><br />
              SIRET : <Valeur v={A_COMPLETER.siret} /><br />
              4 Allée Les Marronniers, 91800 Boussy-Saint-Antoine<br />
              Téléphone : <a href="tel:+33660811295" className={lien}>06 60 81 12 95</a><br />
              E-mail : <a href="mailto:jeancharlesbernard3@gmail.com" className={lien}>jeancharlesbernard3@gmail.com</a>
            </p>
            <p className={p}>Directeur de la publication : Jean-Charles Bernard.</p>

            <h2 className={h2}>Hébergement</h2>
            <p className={p}>
              Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis ·{' '}
              <a href="https://vercel.com" className={lien} target="_blank" rel="noopener noreferrer">vercel.com</a>
            </p>

            <h2 className={h2}>Conception du site</h2>
            <p className={p}>
              <a href="https://webmate.digital" className={lien} target="_blank" rel="noopener noreferrer">Webmate</a>
            </p>

            <h2 className={h2}>Avertissement</h2>
            <p className={p}>
              L&apos;hypnothérapie ne remplace pas un avis ou un traitement médical. En cas de problème de
              santé, consultez d&apos;abord un médecin.
            </p>

            <h2 className={h2}>Données personnelles</h2>
            <h3 className={h3}>Ce qui est collecté</h3>
            <p className={p}>
              Le site ne comporte pas de formulaire. Les informations que vous transmettez par téléphone,
              par e-mail ou lors d&apos;une réservation servent uniquement à organiser et suivre vos séances.
              Elles ne sont ni vendues ni cédées.
            </p>
            <h3 className={h3}>Réservation en ligne</h3>
            <p className={p}>
              La prise de rendez-vous passe par Calendly, qui traite les informations saisies et peut déposer
              ses propres cookies lorsque vous utilisez le module :{' '}
              <a href="https://calendly.com/privacy" className={lien} target="_blank" rel="noopener noreferrer">
                politique de confidentialité de Calendly
              </a>.
            </p>
            <h3 className={h3}>Vos droits</h3>
            <p className={p}>
              Vous pouvez demander l&apos;accès, la rectification ou la suppression de vos données, ou vous
              opposer à leur utilisation, en écrivant à{' '}
              <a href="mailto:jeancharlesbernard3@gmail.com" className={lien}>jeancharlesbernard3@gmail.com</a>.
              Vous pouvez aussi adresser une réclamation à la{' '}
              <a href="https://www.cnil.fr" className={lien} target="_blank" rel="noopener noreferrer">CNIL</a>.
            </p>

            <h2 id="cookies" className={`${h2} scroll-mt-28`}>Cookies</h2>
            <p className={p}>
              Avec votre accord uniquement, le site utilise Google Analytics 4 pour mesurer sa fréquentation
              (pages vues, clics sur le téléphone ou la réservation). Aucun cookie publicitaire n&apos;est
              utilisé. Sans accord, Google Analytics n&apos;est pas chargé.
            </p>
            <p className={p}>
              Les cookies Google Analytics (<code>_ga</code>, <code>_ga_*</code>) expirent au bout de 13 mois.
              Durée de conservation des données dans Google Analytics : <Valeur v={A_COMPLETER.conservationGa4} />.
              Votre choix est conservé 6 mois, puis vous sera redemandé.
            </p>
            <OpenConsentButton className="mt-2 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50 transition-colors">
              Modifier mon choix sur les cookies
            </OpenConsentButton>
          </div>
        </div>
      </main>
      <FooterSection />
    </>
  );
}
