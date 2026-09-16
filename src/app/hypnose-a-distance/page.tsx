import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/sections/Navbar';
import FooterSection from '@/components/sections/FooterSection';
import FadeContent from '@/components/effects/FadeContent';
import JsonLd from '@/components/seo/JsonLd';
import { distanceJsonLd, SERVICES } from '@/lib/schema';
import { OG_IMAGES } from '@/lib/seo';
import { CERTIFICATIONS } from '@/lib/certifications';
import portrait from '../../../public/images/jc-portrait.jpg';

const DESCRIPTION =
  "Séance d'hypnose à distance avec Jean-Charles Bernard, hypnothérapeute certifié IFHE : 1h, 80 €, en visio WhatsApp ou par téléphone. Comment ça marche.";

export const metadata: Metadata = {
  alternates: { canonical: '/hypnose-a-distance' },
  title: 'Hypnose à distance : séance en visio ou par téléphone',
  description: DESCRIPTION,
  openGraph: {
    title: 'Hypnose à distance — en visio ou par téléphone',
    description: "Hypnothérapeute certifié IFHE · Séance d'1h à 80 € · Visio WhatsApp ou téléphone · Où que vous soyez",
    locale: 'fr_FR',
    type: 'website',
    images: OG_IMAGES,
  },
};

const CALENDLY_URL = 'https://calendly.com/jeancharlesbernard3/seance-1h';

/** Les 3 étapes, dans l'ordre où le patient les vit. */
const etapes = [
  {
    num: '01',
    title: 'Avant la séance : réserver et recevoir l’appel',
    points: [
      'Vous réservez votre créneau en ligne et choisissez « Appel téléphonique ».',
      'Vous indiquez le numéro sur lequel vous joindre.',
      'À l’heure convenue, Jean-Charles vous appelle sur WhatsApp, en audio ou en visio, comme vous préférez.',
    ],
  },
  {
    num: '02',
    title: 'Pendant la séance : l’entretien, puis l’hypnose',
    points: [
      'La séance dure 1h, comme au cabinet.',
      'Elle commence par un entretien : votre demande, votre histoire, l’objectif que vous voulez atteindre.',
      'Vient ensuite la séance d’hypnose, adaptée à ce que vous avez partagé. Vous restez conscient et vous pouvez interrompre à tout moment.',
    ],
  },
  {
    num: '03',
    title: 'Après la séance',
    points: [
      'Le paiement se fait par virement bancaire ou par Wero.',
      'Si un second rendez-vous est utile, vous le réservez de la même façon, à distance ou au cabinet.',
    ],
  },
];

/** Trois conditions matérielles, pas une de plus. */
const equipement = [
  {
    titre: 'Un endroit calme',
    texte: "Une pièce où personne ne vous dérangera pendant l'heure qui vient, avec une porte que vous pouvez fermer. Prévenez votre entourage : c'est la seule vraie condition, et de loin la plus importante.",
  },
  {
    titre: 'Une connexion correcte',
    texte: "Un téléphone suffit, avec WhatsApp installé. La webcam n'est pas obligatoire : beaucoup de séances se font en audio, puisque vous gardez les yeux fermés la plus grande partie du temps.",
  },
  {
    titre: 'Un casque ou des écouteurs',
    texte: "La voix arrive plus nette et reste plus enveloppante qu'avec un haut-parleur. Des écouteurs filaires font très bien l'affaire, et évitent la batterie qui lâche en cours de séance.",
  },
];

/** Comparatif honnête : ce qui change, et ce qui ne change pas. */
const comparatif: { critere: string; cabinet: string; distance: string; identique: boolean }[] = [
  { critere: 'Durée de la séance', cabinet: '1h', distance: '1h', identique: true },
  { critere: 'Tarif', cabinet: '80 €', distance: '80 €', identique: true },
  { critere: 'Déroulé', cabinet: 'Entretien, puis hypnose', distance: 'Entretien, puis hypnose', identique: true },
  { critere: 'Méthodes utilisées', cabinet: 'Ericksonienne, humaniste, classique, PNL, RITMO®', distance: 'Les mêmes', identique: true },
  { critere: 'Lieu', cabinet: 'Boussy-Saint-Antoine (91)', distance: 'Où que vous soyez', identique: false },
  { critere: 'Moyen', cabinet: 'En face à face', distance: 'Visio WhatsApp ou téléphone', identique: false },
  { critere: 'À prévoir', cabinet: 'Le trajet et le stationnement', distance: 'Endroit calme, connexion, casque', identique: false },
  { critere: 'Réservation', cabinet: 'En ligne ou par téléphone', distance: 'En ligne, option « Appel téléphonique »', identique: false },
  { critere: 'Paiement', cabinet: 'Sur place', distance: 'Virement bancaire ou Wero', identique: false },
  { critere: 'Annulation', cabinet: 'Au moins 24h avant', distance: 'Au moins 24h avant', identique: true },
];

/** Les questions posées avant de réserver. Source unique : affichage + FAQPage. */
const faqs = [
  {
    q: "L'hypnose à distance fonctionne-t-elle vraiment ?",
    a: "Oui. L'hypnose repose sur la voix et sur la relation, pas sur la présence physique : le travail est le même à distance. Vous restez installé chez vous, dans un endroit que vous connaissez, ce qui aide souvent à se détendre plus vite. Comme au cabinet, l'hypnose ne remplace pas un avis ni un traitement médical.",
  },
  {
    q: 'Faut-il une webcam, ou le téléphone suffit-il ?',
    a: "Le téléphone suffit. La séance se déroule les yeux fermés : une fois l'entretien terminé, vous n'avez plus rien à regarder. Jean-Charles vous appelle sur WhatsApp, en audio ou en visio, selon ce que vous préférez. Certaines personnes préfèrent la visio pour l'entretien du début, puis coupent la caméra au moment de l'hypnose : c'est possible, il suffit de le dire.",
  },
  {
    q: "Peut-on faire une séance à distance depuis l'étranger ?",
    a: "Oui. Jean-Charles reçoit à distance où que vous soyez et s'adapte aux décalages horaires : le créneau est fixé ensemble, en fonction de votre fuseau. Les créneaux affichés à la réservation sont à l'heure de Paris ; si aucun ne vous convient, appelez ou écrivez, un horaire sur mesure est possible.",
  },
  {
    q: 'Comment se passe le paiement ?',
    a: "Le règlement se fait par virement bancaire ou par Wero, l'application de paiement entre particuliers proposée par les banques françaises. La séance à distance coûte 80 €, comme au cabinet, et il n'y a ni frais de dossier ni abonnement.",
  },
  {
    q: 'Puis-je commencer à distance et continuer au cabinet ?',
    a: "Oui, les deux formats coexistent et coûtent le même prix. Vous choisissez à chaque rendez-vous celui qui vous arrange, à distance ou au cabinet de Boussy-Saint-Antoine.",
  },
  {
    q: "L'hypnose à distance est-elle remboursée ?",
    a: "Les séances d'hypnothérapie ne sont pas remboursées par la Sécurité sociale, à distance comme au cabinet. Certaines mutuelles prennent en charge une partie des séances de médecines douces : renseignez-vous auprès de la vôtre.",
  },
];

const h2 = 'font-serif text-3xl md:text-4xl font-bold text-[#1E1B4B]';

export default function HypnoseADistancePage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section className="relative bg-[#0f0c29] pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.05]" style={{
            backgroundImage: 'radial-gradient(circle, #6366f1 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }} />
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <FadeContent>
              <span className="inline-block bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
                Où que vous soyez · Visio ou téléphone
              </span>
              <h1 className="font-serif h1-local md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance mb-6">
                Hypnose à distance :{' '}
                <span className="text-indigo-400">séance en visio</span>{' '}
                ou par téléphone
              </h1>
              <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                Jean-Charles Bernard, hypnothérapeute certifié IFHE, vous accompagne à distance
                avec le même déroulé qu&apos;au cabinet. <strong className="text-white">1h · 80 € · Depuis chez vous.</strong>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-4 rounded-full transition-colors text-base"
                >
                  Réserver une séance à distance — 80 €
                </a>
                <a
                  href="tel:+33660811295"
                  className="bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold px-8 py-4 rounded-full transition-colors text-base"
                >
                  06 60 81 12 95
                </a>
              </div>
              <div className="mt-8 flex items-center justify-center gap-3 text-white/40 text-sm">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  ))}
                </div>
                <span>5,0 · 39 avis Google vérifiés</span>
              </div>
            </FadeContent>
          </div>
        </section>

        {/* ── EFFICACITÉ ── */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <FadeContent>
              <span className="text-indigo-500 text-xs font-bold uppercase tracking-widest">La question que tout le monde pose</span>
              <h2 className={`${h2} mt-3 mb-6`}>
                L&apos;hypnose à distance est-elle aussi efficace qu&apos;au cabinet ?
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Oui, et la raison est simple : l&apos;hypnose repose sur la voix et sur la relation,
                pas sur la présence physique. Pendant la séance, vous avez les yeux fermés et vous
                suivez une voix. Que cette voix soit dans la pièce ou dans votre casque ne change
                rien au travail qui se fait.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Le protocole est identique. Jean-Charles utilise les mêmes méthodes qu&apos;au
                cabinet — hypnose ericksonienne, humaniste, classique, PNL et RITMO® — et le déroulé
                de la séance ne change pas : un entretien, puis l&apos;hypnose.
              </p>
              <p className="text-slate-600 leading-relaxed">
                À distance, vous restez chez vous, dans un endroit familier. Beaucoup de personnes
                se détendent plus vite dans leur propre salon que dans un cabinet qu&apos;elles
                découvrent. Il n&apos;y a ni trajet, ni salle d&apos;attente, ni horaire à caler
                autour d&apos;un déplacement.
              </p>
              <p className="text-slate-600 leading-relaxed mt-4">
                Ce qui fait la séance, c&apos;est d&apos;abord l&apos;entretien : comprendre ce qui vous
                amène, ce que vous avez déjà tenté, ce que vous voulez changer. Cette partie est
                exactement la même au téléphone qu&apos;en face à face. Vient ensuite l&apos;induction,
                puis le travail lui-même, guidé par la voix. À aucun moment le thérapeute n&apos;a
                besoin de vous toucher.
              </p>
              <p className="text-slate-600 leading-relaxed mt-4">
                La distance a aussi ses contraintes, et autant les dire. Il faut une heure
                vraiment protégée : pas d&apos;enfant qui entre dans la pièce, pas de réunion qui
                déborde, le téléphone en mode avion si vous utilisez l&apos;ordinateur. Une séance
                interrompue en plein milieu perd une partie de son effet. C&apos;est la seule
                différence qui compte vraiment avec le cabinet, où le cadre est posé pour vous.
              </p>
              <p className="text-slate-500 text-sm leading-relaxed mt-6 border-l-2 border-indigo-200 pl-4">
                L&apos;hypnothérapie ne remplace pas un avis ni un traitement médical. En cas de
                problème de santé, consultez d&apos;abord un médecin.
              </p>
            </FadeContent>
          </div>
        </section>

        {/* ── DÉROULÉ ── */}
        <section className="py-20 bg-[#F8F7FF]">
          <div className="max-w-5xl mx-auto px-6">
            <FadeContent>
              <div className="text-center mb-14">
                <span className="text-indigo-500 text-xs font-bold uppercase tracking-widest">Déroulé</span>
                <h2 className={`${h2} mt-3 mb-4`}>Comment se déroule une séance à distance</h2>
                <p className="text-slate-500 max-w-2xl mx-auto">
                  De la réservation au paiement, voici exactement ce qui se passe. Aucune
                  surprise : c&apos;est le même déroulé pour tous les motifs de consultation,
                  et il ne change pas d&apos;une séance à l&apos;autre.
                </p>
              </div>
            </FadeContent>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {etapes.map(({ num, title, points }, i) => (
                <FadeContent key={num} delay={i * 0.1}>
                  <div className="h-full bg-white rounded-2xl p-7 border border-slate-100 shadow-sm">
                    <div className="text-4xl font-bold text-indigo-200 font-serif leading-none mb-4">{num}</div>
                    <h3 className="font-serif text-lg font-bold text-[#1E1B4B] mb-4">{title}</h3>
                    <ul className="space-y-3">
                      {points.map((p) => (
                        <li key={p} className="flex gap-2.5 text-slate-500 text-sm leading-relaxed">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeContent>
              ))}
            </div>
          </div>
        </section>

        {/* ── ÉQUIPEMENT ── */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <FadeContent>
              <div className="text-center mb-14">
                <span className="text-emerald-600 text-xs font-bold uppercase tracking-widest">Matériel</span>
                <h2 className={`${h2} mt-3 mb-4`}>Ce qu&apos;il vous faut : 3 choses, pas plus</h2>
                <p className="text-slate-500 max-w-2xl mx-auto">
                  Pas de logiciel à installer, pas de compte à créer.
                </p>
              </div>
            </FadeContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {equipement.map(({ titre, texte }, i) => (
                <FadeContent key={titre} delay={i * 0.1}>
                  <div className="h-full bg-emerald-50/60 rounded-2xl p-7 border border-emerald-100">
                    <h3 className="font-serif text-lg font-bold text-[#1E1B4B] mb-3">{titre}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{texte}</p>
                  </div>
                </FadeContent>
              ))}
            </div>
          </div>
        </section>

        {/* ── COMPARATIF ── */}
        <section className="py-20 bg-[#F8F7FF]">
          <div className="max-w-4xl mx-auto px-6">
            <FadeContent>
              <div className="text-center mb-12">
                <span className="text-indigo-500 text-xs font-bold uppercase tracking-widest">Comparatif</span>
                <h2 className={`${h2} mt-3 mb-4`}>Au cabinet ou à distance : quelles différences ?</h2>
                <p className="text-slate-500 max-w-2xl mx-auto">
                  Le travail thérapeutique est identique. Seule l&apos;organisation change.
                </p>
              </div>
            </FadeContent>
            <FadeContent delay={0.1}>
              <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
                <table className="w-full text-xs sm:text-sm text-left">
                  <caption className="sr-only">
                    Comparaison entre une séance au cabinet de Boussy-Saint-Antoine et une séance à distance
                  </caption>
                  <thead>
                    <tr className="bg-slate-50 text-[#1E1B4B]">
                      <th scope="col" className="px-3 sm:px-5 py-3 font-semibold">&nbsp;</th>
                      <th scope="col" className="px-3 sm:px-5 py-3 font-semibold">Au cabinet</th>
                      <th scope="col" className="px-3 sm:px-5 py-3 font-semibold">À distance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparatif.map(({ critere, cabinet, distance, identique }) => (
                      <tr key={critere} className="border-t border-slate-100">
                        <th scope="row" className="px-3 sm:px-5 py-3 font-medium text-[#1E1B4B] align-top">{critere}</th>
                        <td className="px-3 sm:px-5 py-3 text-slate-500 align-top">{cabinet}</td>
                        <td className={`px-3 sm:px-5 py-3 align-top ${identique ? 'text-emerald-700 font-medium' : 'text-slate-500'}`}>
                          {distance}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeContent>
            <FadeContent delay={0.2}>
              <p className="text-slate-500 text-sm leading-relaxed mt-6 max-w-2xl mx-auto text-center">
                En vert, tout ce qui ne change pas : la durée, le prix, le déroulé, les méthodes et
                les conditions d&apos;annulation. Ce qui change relève de l&apos;organisation, pas de
                la thérapie.
              </p>
            </FadeContent>
          </div>
        </section>

        {/* ── MOTIFS ── */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <FadeContent>
              <div className="text-center mb-12">
                <span className="text-indigo-500 text-xs font-bold uppercase tracking-widest">Motifs</span>
                <h2 className={`${h2} mt-3 mb-4`}>Pour quels motifs l&apos;hypnose à distance convient</h2>
                <p className="text-slate-500 max-w-2xl mx-auto">
                  La grande majorité des accompagnements se mènent aussi bien à distance qu&apos;au
                  cabinet. Chaque page ci-dessous détaille le déroulé propre à son motif, le nombre
                  de séances à prévoir et les questions que les patients posent le plus souvent.
                </p>
              </div>
            </FadeContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SERVICES.map(({ path, name }, i) => (
                <FadeContent key={path} delay={i * 0.05}>
                  <Link
                    href={path}
                    className="flex items-center justify-between gap-4 bg-slate-50 hover:bg-indigo-50 border border-slate-100 hover:border-indigo-200 rounded-xl px-5 py-4 transition-colors group"
                  >
                    <span className="text-[#1E1B4B] text-sm font-medium">{name}</span>
                    <span className="text-indigo-400 group-hover:translate-x-0.5 transition-transform" aria-hidden="true">→</span>
                  </Link>
                </FadeContent>
              ))}
            </div>

            <FadeContent delay={0.2}>
              <div className="mt-10 bg-amber-50 border border-amber-100 rounded-2xl p-7">
                <h3 className="font-serif text-lg font-bold text-[#1E1B4B] mb-3">
                  Les situations où je conseille d&apos;appeler avant
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Deux cas méritent un échange téléphonique avant de réserver une séance à distance :
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-2.5 text-slate-600 text-sm leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                    <span>
                      <strong>Un traumatisme</strong> : Jean-Charles vous dira si la séance à distance
                      est adaptée à votre situation. <Link href="/traumatismes" className="text-indigo-600 underline underline-offset-2">Voir la page traumatismes</Link>.
                    </span>
                  </li>
                  <li className="flex gap-2.5 text-slate-600 text-sm leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                    <span>
                      <strong>Un enfant ou un adolescent</strong> : il vous expliquera comment se
                      déroule la séance avant de fixer un rendez-vous. <Link href="/enfants-adolescents" className="text-indigo-600 underline underline-offset-2">Voir la page enfants et adolescents</Link>.
                    </span>
                  </li>
                </ul>
              </div>
            </FadeContent>
          </div>
        </section>

        {/* ── TARIF ── */}
        <section className="py-20 bg-[#F8F7FF]">
          <div className="max-w-4xl mx-auto px-6">
            <FadeContent>
              <div className="text-center mb-12">
                <span className="text-emerald-600 text-xs font-bold uppercase tracking-widest">Tarif</span>
                <h2 className={`${h2} mt-3 mb-4`}>Tarif et réservation : 1h, 80 €</h2>
                <p className="text-slate-500 max-w-2xl mx-auto">
                  Un tarif unique, quel que soit le motif et quel que soit le format. Une séance à
                  distance coûte exactement le même prix qu&apos;une séance au cabinet : le travail
                  est le même, le temps aussi.
                </p>
              </div>
            </FadeContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FadeContent>
                <div className="h-full bg-white rounded-2xl p-7 border border-slate-100">
                  <h3 className="font-serif text-lg font-bold text-[#1E1B4B] mb-4">Ce que vous payez</h3>
                  <ul className="space-y-3 text-slate-600 text-sm leading-relaxed">
                    <li className="flex gap-2.5"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" /><span>80 € la séance d&apos;1h, le même tarif qu&apos;au cabinet.</span></li>
                    <li className="flex gap-2.5"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" /><span>Paiement par virement bancaire ou par Wero.</span></li>
                    <li className="flex gap-2.5"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" /><span>Sans abonnement : vous réservez séance par séance.</span></li>
                    <li className="flex gap-2.5"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" /><span>Annulation au moins 24h avant, sinon la séance reste due.</span></li>
                  </ul>
                </div>
              </FadeContent>
              <FadeContent delay={0.1}>
                <div className="h-full bg-white rounded-2xl p-7 border border-slate-100">
                  <h3 className="font-serif text-lg font-bold text-[#1E1B4B] mb-4">Comment réserver</h3>
                  <ul className="space-y-3 text-slate-600 text-sm leading-relaxed">
                    <li className="flex gap-2.5"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" /><span>En ligne, en choisissant l&apos;option « Appel téléphonique ».</span></li>
                    <li className="flex gap-2.5"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" /><span>Créneaux du lundi au samedi, de 9h à 20h (heure de Paris).</span></li>
                    <li className="flex gap-2.5"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" /><span>Depuis l&apos;étranger : Jean-Charles s&apos;adapte aux décalages horaires, le créneau se fixe ensemble.</span></li>
                    <li className="flex gap-2.5"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" /><span>Ou par téléphone au 06 60 81 12 95.</span></li>
                  </ul>
                </div>
              </FadeContent>
            </div>
          </div>
        </section>

        {/* ── AVEC QUI ── */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid lg:grid-cols-[280px_1fr] gap-10 items-center">
              <FadeContent>
                <div className="relative w-full max-w-[280px] mx-auto aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={portrait}
                    alt="Jean-Charles Bernard, hypnothérapeute certifié IFHE"
                    fill
                    sizes="(min-width: 1024px) 280px, 280px"
                    className="object-cover object-top"
                  />
                </div>
              </FadeContent>
              <FadeContent delay={0.1}>
                <span className="text-indigo-500 text-xs font-bold uppercase tracking-widest">Avec qui</span>
                <h2 className={`${h2} mt-3 mb-4`}>Jean-Charles Bernard, certifié IFHE</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Plus de 15 ans de pratique, formé à l&apos;Institut Français d&apos;Hypnose
                  Ericksonienne (IFHE). Il reçoit à son cabinet de Boussy-Saint-Antoine (91) et
                  accompagne à distance, par téléphone ou en visio sur WhatsApp.
                </p>
                <ul className="space-y-2">
                  {CERTIFICATIONS.map((cert) => (
                    <li key={cert} className="flex gap-2.5 text-slate-500 text-sm leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </FadeContent>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20 bg-[#F8F7FF]">
          <div className="max-w-3xl mx-auto px-6">
            <FadeContent>
              <div className="text-center mb-12">
                <span className="text-indigo-500 text-xs font-bold uppercase tracking-widest">FAQ</span>
                <h2 className={`${h2} mt-3`}>Questions fréquentes sur l&apos;hypnose à distance</h2>
              </div>
            </FadeContent>
            <div className="space-y-4">
              {faqs.map(({ q, a }, i) => (
                <FadeContent key={q} delay={i * 0.06}>
                  <details className="group bg-white border border-slate-100 rounded-2xl p-6 cursor-pointer">
                    {/* Un titre dans <summary> est valide : la question reste un H3. */}
                    <summary className="list-none flex justify-between items-center gap-4">
                      <h3 className="font-sans font-semibold text-[#1E1B4B] text-base">{q}</h3>
                      <svg className="flex-shrink-0 transition-transform group-open:rotate-180" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
                    </summary>
                    <p className="mt-4 text-slate-500 text-sm leading-relaxed">{a}</p>
                  </details>
                </FadeContent>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section className="py-20 bg-indigo-600">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <FadeContent>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
                Votre première séance, depuis chez vous
              </h2>
              <p className="text-indigo-200 text-lg mb-8">
                1h · 80 € · En visio WhatsApp ou par téléphone, où que vous soyez.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-indigo-50 text-indigo-700 font-semibold px-8 py-4 rounded-full transition-colors text-base"
                >
                  Réserver en ligne — 80 €
                </a>
                <a
                  href="tel:+33660811295"
                  className="bg-indigo-500 hover:bg-indigo-400 text-white font-semibold px-8 py-4 rounded-full transition-colors text-base border border-indigo-400"
                >
                  06 60 81 12 95
                </a>
              </div>
            </FadeContent>
          </div>
        </section>

      </main>
      <FooterSection />

      <JsonLd data={distanceJsonLd(DESCRIPTION, faqs)} />
    </>
  );
}
