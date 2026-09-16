import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/sections/Navbar';
import FooterSection from '@/components/sections/FooterSection';
import FadeContent from '@/components/effects/FadeContent';
import JsonLd from '@/components/seo/JsonLd';
import { serviceJsonLd, HORAIRES_COURT } from '@/lib/schema';
import { OG_IMAGES } from '@/lib/seo';
import photoBureau from '../../../public/images/photo_bureau.jpg';

export const metadata: Metadata = {
  metadataBase: new URL('https://jean-charles-bernard.fr'),
  alternates: { canonical: '/schemas-repetitifs' },
  title: "Hypnose et schémas répétitifs à Boussy-Saint-Antoine (91)",
  description: "Situations qui se répètent, pensées en boucle : sortir des schémas répétitifs par l'hypnose à Boussy-Saint-Antoine (91). Certifié IFHE. 1h, 80 €.",
  openGraph: {
    title: 'Hypnose et schémas répétitifs — Boussy-Saint-Antoine',
    description: 'Hypnothérapeute certifié IFHE · Comportements, pensées et situations qui se répètent · 80€ · Boussy-Saint-Antoine (91)',
    locale: 'fr_FR',
    type: 'website',
    images: OG_IMAGES,
  },
};

const CALENDLY_URL = 'https://calendly.com/jeancharlesbernard3/seance-1h';

const testimonials = [
  {
    name: 'Sandra Luce',
    tag: 'Blocages · Google Maps',
    text: 'Grâce à lui j\'ai réussi à faire sauter des blocages, à nettoyer des fantômes du passé et surtout à avancer et aller au bout de mes rêves, car ils connaissent le chemin.',
    initial: 'S',
    color: 'bg-indigo-600',
  },
  {
    name: 'Delphine RENARD',
    tag: 'Confiance en soi · Google Maps',
    text: 'Son accompagnement ultra efficace m\'a sortie de situations difficiles, m\'a permis de prendre confiance en moi, de grandir, d\'évoluer et m\'épanouir. Un grand merci.',
    initial: 'D',
    color: 'bg-violet-600',
  },
  {
    name: 'Asty Garcia',
    tag: 'Lâcher-prise · juil. 2025',
    text: 'Après une 1ère séance qui m\'a libérée d\'un mal qui me rongeait depuis des décennies, j\'ai renouvelé pour lâcher-prise, respirer et mieux vivre. D\'une réelle aide.',
    initial: 'A',
    color: 'bg-emerald-600',
  },
];

const faqs = [
  {
    q: 'Qu\'est-ce qu\'un schéma répétitif ?',
    a: 'C\'est un comportement, une pensée ou une réaction qui revient de façon automatique, souvent dans des situations semblables, et que vous n\'arrivez pas à changer malgré vos efforts : les mêmes relations qui échouent, le même blocage au même moment, la même réaction qui vous échappe.',
  },
  {
    q: 'Pourquoi est-ce que je répète alors que je m\'en rends compte ?',
    a: 'Parce que comprendre ne suffit pas à changer. Un schéma est une réponse apprise qui s\'exécute en automatique, plus vite que la décision consciente. C\'est pour cela que l\'hypnose, qui travaille à ce niveau, peut aider là où la volonté seule échoue.',
  },
  {
    q: 'Faut-il revenir en détail sur mon passé ?',
    a: 'Pas forcément. Comprendre d\'où vient un schéma est souvent utile, mais l\'objectif reste tourné vers le présent : ce qui se rejoue aujourd\'hui, et comment en sortir.',
  },
  {
    q: 'Combien de séances faut-il prévoir ?',
    a: 'Cela dépend de l\'ancienneté du schéma et du nombre de domaines qu\'il touche. Un blocage précis peut évoluer rapidement ; un schéma installé depuis longtemps demande en général un parcours. Jean-Charles vous en donne une idée après le premier échange.',
  },
  {
    q: 'L\'hypnose peut-elle remplacer une psychothérapie ?',
    a: 'Non, et ce n\'est pas son rôle. L\'hypnose est un accompagnement ciblé. Si un schéma s\'inscrit dans une souffrance psychique importante ou un trouble diagnostiqué, elle vient en complément d\'un suivi, jamais à sa place.',
  },
  {
    q: 'Peut-on faire la séance à distance ?',
    a: 'Oui. L\'hypnose repose sur la voix et sur la relation, pas sur la présence physique : le travail est le même à distance. Il vous faut simplement un endroit calme où vous ne serez pas dérangé, une connexion correcte et un casque ou des écouteurs. Le travail sur les schémas se mène aussi bien à distance. Choisissez « Appel téléphonique » au moment de la réservation : Jean-Charles vous appelle sur WhatsApp à l\'heure convenue, en audio ou en visio.',
  },
];

const symptoms = [
  'Les mêmes situations qui se répètent',
  'Pensées qui tournent en boucle',
  'Relations qui finissent toujours pareil',
  'Autosabotage au moment de réussir',
  'Réactions disproportionnées, toujours les mêmes',
  'Procrastination qui revient sans cesse',
  'Difficulté à dire non',
  'Sentiment de ne pas avancer',
];

const steps = [
  { num: '01', title: 'Repérer le schéma', desc: 'Mettre des mots sur ce qui se répète, dans quelles circonstances, et ce que cela vous coûte. Sans jugement.' },
  { num: '02', title: 'Remonter à la source', desc: 'Sous hypnose, identifier ce qui a installé la réponse automatique, et la fonction qu\'elle a pu avoir.' },
  { num: '03', title: 'Installer une autre réponse', desc: 'Remplacer l\'automatisme par une réaction choisie, au niveau où l\'ancien schéma s\'était ancré.' },
  { num: '04', title: 'Ancrer dans le quotidien', desc: 'Des repères pour reconnaître le schéma quand il se présente, et choisir d\'y répondre autrement.' },
];

export default function SchemasRepetitifsPage() {
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
                Boussy-Saint-Antoine · Essonne (91)
              </span>
              <h1 className="font-serif h1-local md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance mb-6">
                Sortir des{' '}
                <span className="text-indigo-400 whitespace-nowrap">schémas répétitifs</span>{' '}
                grâce à l'hypnose{' '}
                <span className="whitespace-nowrap">à Boussy-Saint-Antoine</span>
              </h1>
              <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                Comportements ou pensées qui reviennent en boucle, situations qui se répètent malgré vous : Jean-Charles Bernard, hypnothérapeute certifié IFHE à Boussy-Saint-Antoine, travaille sur ce qui les fait rejouer.{' '}
                <strong className="text-white">1h · 80€ · À votre rythme.</strong>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-4 rounded-full transition-colors text-base"
                >
                  Réserver ma séance — 80€
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

        {/* ── SYMPTÔMES ── */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <FadeContent>
              <div className="text-center mb-12">
                <span className="text-indigo-500 text-xs font-bold uppercase tracking-widest">Vous reconnaissez-vous ?</span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1E1B4B] mt-3 mb-4">
                  Ces boucles que l'hypnose peut défaire
                </h2>
              </div>
            </FadeContent>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {symptoms.map((s, i) => (
                <FadeContent key={s} delay={i * 0.06}>
                  <div className="h-full flex items-start gap-3 bg-slate-50 border border-slate-100 rounded-xl p-4">
                    <span className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span className="text-slate-700 text-sm leading-relaxed">{s}</span>
                  </div>
                </FadeContent>
              ))}
            </div>
          </div>
        </section>

        {/* ── POURQUOI ── */}
        <section className="py-20 bg-[#F8F7FF]">
          <div className="max-w-5xl mx-auto px-6">
            <FadeContent>
              <div className="text-center mb-14">
                <span className="text-indigo-500 text-xs font-bold uppercase tracking-widest">La méthode</span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1E1B4B] mt-3 mb-4">
                  Ce qu'on répète, on l'a appris
                </h2>
                <p className="text-slate-500 max-w-2xl mx-auto">
                  Un schéma répétitif n'est pas un défaut de volonté. C'est une réponse apprise, souvent il y a longtemps, qui continue de s'exécuter en automatique. On ne la change pas en se promettant de faire autrement.
                </p>
              </div>
            </FadeContent>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: '🔁', title: 'Un programme ancien', desc: 'Le schéma s\'est installé à un moment où il avait une fonction. Il se rejoue aujourd\'hui alors qu\'il ne sert plus.' },
                { icon: '🧠', title: 'Hors de portée de la volonté', desc: 'Savoir qu\'on répète ne suffit pas à arrêter. Le schéma s\'exécute avant que la décision consciente ait son mot à dire.' },
                { icon: '🌱', title: 'Une autre réponse', desc: 'L\'hypnose aide à repérer ce qui déclenche le schéma et à installer une réponse différente, au niveau où la première s\'était ancrée.' },
              ].map(({ icon, title, desc }) => (
                <FadeContent key={title} delay={0.1}>
                  <div className="h-full bg-white rounded-2xl p-7 border border-slate-100 shadow-sm">
                    <div className="text-3xl mb-4">{icon}</div>
                    <h3 className="font-serif text-lg font-bold text-[#1E1B4B] mb-2">{title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </FadeContent>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROTOCOLE ── */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <FadeContent>
              <div className="text-center mb-14">
                <span className="text-indigo-500 text-xs font-bold uppercase tracking-widest">Déroulé</span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1E1B4B] mt-3">
                  La séance schémas répétitifs (1h · 80€)
                </h2>
              </div>
            </FadeContent>
            <div className="grid md:grid-cols-2 gap-6">
              {steps.map(({ num, title, desc }, i) => (
                <FadeContent key={num} delay={i * 0.1}>
                  <div className="h-full flex gap-5 bg-slate-50 rounded-2xl p-6 border border-slate-100">
                    <div className="text-4xl font-bold text-indigo-200 font-serif leading-none flex-shrink-0">{num}</div>
                    <div>
                      <div className="font-semibold text-[#1E1B4B] mb-1">{title}</div>
                      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                </FadeContent>
              ))}
            </div>
            <FadeContent delay={0.3}>
              <div className="mt-8 bg-indigo-50 border border-indigo-100 rounded-2xl overflow-hidden flex flex-col sm:flex-row">
                <Image
                  src={photoBureau}
                  alt="Jean-Charles Bernard, hypnothérapeute, à son bureau devant ses diplômes de l'IFHE"
                  sizes="(min-width: 640px) 224px, 100vw"
                  className="w-full sm:w-56 shrink-0 h-56 sm:h-auto object-cover object-[35%_45%]"
                />
                <div className="p-6 flex gap-4 items-start">
                  <svg className="text-indigo-500 flex-shrink-0 mt-0.5" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                  <p className="text-indigo-800 text-sm leading-relaxed">
                    <strong>Cabinet à Boussy-Saint-Antoine</strong> — 4 Allée Les Marronniers, 91800.
                    {HORAIRES_COURT}.<br />
                    <strong>Séance à distance</strong> également possible : par téléphone ou en visio sur WhatsApp.
                  </p>
                </div>
              </div>
            </FadeContent>
            <FadeContent delay={0.35}>
              <div className="mt-4 bg-amber-50 border border-amber-100 rounded-2xl p-6 flex gap-4 items-start">
                <svg className="text-amber-500 flex-shrink-0 mt-0.5" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                <p className="text-amber-900 text-sm leading-relaxed">
                  L'hypnose est un accompagnement ciblé. Elle ne remplace ni une psychothérapie ni un suivi psychologique ou psychiatrique, en particulier en cas de trouble diagnostiqué. Si vous êtes déjà suivi, parlez-en à votre praticien.
                </p>
              </div>
            </FadeContent>
          </div>
        </section>

        {/* ── TÉMOIGNAGES ── */}
        <section className="py-20 bg-[#0f0c29]">
          <div className="max-w-5xl mx-auto px-6">
            <FadeContent>
              <div className="text-center mb-12">
                <span className="text-indigo-400 text-xs font-bold uppercase tracking-widest">Témoignages</span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mt-3 mb-3">
                  Ils ont avancé
                </h2>
                <div className="flex items-center justify-center gap-2 text-white/40 text-sm">
                  <div className="flex">{[...Array(5)].map((_, i) => <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#F59E0B"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>)}</div>
                  <span>5,0 · 39 avis Google</span>
                </div>
              </div>
            </FadeContent>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map(({ name, tag, text, initial, color }, i) => (
                <FadeContent key={name} delay={i * 0.1}>
                  <div className="h-full bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-4">
                    <div className="flex">{[...Array(5)].map((_, j) => <svg key={j} width="13" height="13" viewBox="0 0 24 24" fill="#F59E0B"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>)}</div>
                    <p className="text-white/70 text-sm leading-relaxed italic">&laquo;&nbsp;{text}&nbsp;&raquo;</p>
                    <div className="flex items-center gap-3 mt-auto">
                      <div className={`w-8 h-8 rounded-full ${color} flex items-center justify-center text-white text-xs font-bold`}>{initial}</div>
                      <div>
                        <div className="text-white text-sm font-medium">{name}</div>
                        <div className="text-white/40 text-xs">{tag}</div>
                      </div>
                    </div>
                  </div>
                </FadeContent>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <FadeContent>
              <div className="text-center mb-12">
                <span className="text-indigo-500 text-xs font-bold uppercase tracking-widest">FAQ</span>
                <h2 className="font-serif text-3xl font-bold text-[#1E1B4B] mt-3">
                  Vos questions sur l'hypnose et les schémas répétitifs
                </h2>
              </div>
            </FadeContent>
            <div className="space-y-4">
              {faqs.map(({ q, a }, i) => (
                <FadeContent key={i} delay={i * 0.08}>
                  <details className="group bg-slate-50 border border-slate-100 rounded-2xl p-6 cursor-pointer">
                    <summary className="list-none flex justify-between items-center gap-4">
                      {/* Un titre dans <summary> est valide : la question reste un H3. */}
                      <h3 className="font-sans font-semibold text-[#1E1B4B] text-base">{q}</h3>
                      <svg className="flex-shrink-0 transition-transform group-open:rotate-180" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
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
                Prêt à sortir de la boucle ?
              </h2>
              <p className="text-indigo-200 text-lg mb-8">
                Réservez votre séance. 1h · 80€ · Au cabinet de Boussy-Saint-Antoine ou à distance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-indigo-50 text-indigo-700 font-semibold px-8 py-4 rounded-full transition-colors text-base"
                >
                  Réserver en ligne — 80€
                </a>
                <a
                  href="tel:+33660811295"
                  className="bg-indigo-500 hover:bg-indigo-400 text-white border border-indigo-400 font-semibold px-8 py-4 rounded-full transition-colors text-base"
                >
                  06 60 81 12 95
                </a>
              </div>
              <p className="text-indigo-300 text-sm mt-6">
                ← <Link href="/" className="hover:text-white transition-colors">Retour au site principal</Link>
              </p>
            </FadeContent>
          </div>
        </section>

      </main>
      <FooterSection />

      <JsonLd data={serviceJsonLd('/schemas-repetitifs', "Hypnose pour sortir des schémas répétitifs à Boussy-Saint-Antoine (91). Hypnothérapeute certifié IFHE, 15 ans d'expérience.", faqs)} />
    </>
  );
}
