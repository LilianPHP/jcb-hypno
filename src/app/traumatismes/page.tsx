import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/sections/Navbar';
import FooterSection from '@/components/sections/FooterSection';
import FadeContent from '@/components/effects/FadeContent';
import Script from 'next/script';

export const metadata: Metadata = {
  metadataBase: new URL('https://jean-charles-bernard.fr'),
  alternates: { canonical: '/traumatismes' },
  title: 'Hypnose et traumatismes à Boussy-Saint-Antoine | Jean-Charles Bernard',
  description: 'Choc émotionnel, accident, deuil, événement marquant : se libérer de l\'empreinte du passé à Boussy-Saint-Antoine (91). Spécialisation IFHE hypnose et traumatismes, et technique RITMO®. 1h · 80€.',
  keywords: [
    'hypnose traumatisme Boussy-Saint-Antoine',
    'RITMO Essonne',
    'hypnose choc émotionnel 91',
    'hypnose traumatisme Brunoy',
    'thérapie traumatisme Yerres',
    'RITMO EMDR Montgeron',
    'hypnose deuil Essonne',
    'hypnose passé douloureux 91',
    'hypnose traumatisme à distance',
  ],
  openGraph: {
    title: 'Hypnose et traumatismes — Boussy-Saint-Antoine',
    description: 'Spécialisation IFHE hypnose et traumatismes · Technique RITMO® · Choc, accident, deuil · 80€ · Boussy-Saint-Antoine (91)',
    locale: 'fr_FR',
    type: 'website',
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
    name: 'Asty Garcia',
    tag: 'Lâcher-prise · juil. 2025',
    text: 'Après une 1ère séance qui m\'a libérée d\'un mal qui me rongeait depuis des décennies, j\'ai renouvelé pour lâcher-prise, respirer et mieux vivre. D\'une réelle aide.',
    initial: 'A',
    color: 'bg-violet-600',
  },
  {
    name: 'Delphine RENARD',
    tag: 'Confiance en soi · Google Maps',
    text: 'Son accompagnement ultra efficace m\'a sortie de situations difficiles, m\'a permis de prendre confiance en moi, de grandir, d\'évoluer et m\'épanouir. Un grand merci.',
    initial: 'D',
    color: 'bg-emerald-600',
  },
];

const faqs = [
  {
    q: 'Quelle différence entre « hypnose et traumatismes » et le RITMO® ?',
    a: 'Ce sont deux outils distincts, pas deux noms pour la même chose. « Hypnose et traumatismes » est un protocole d\'hypnose dédié au trauma, pour lequel Jean-Charles est certifié IFHE depuis 2026. Le RITMO® — Retraitement de l\'Information Traumatique par les Mouvements Oculaires — est une technique de stimulations visuelles et corporelles alternées, dans la lignée de l\'EMDR, certifiée auprès de Lili Ruggieri en 2025. Jean-Charles détermine avec vous lequel convient à votre situation.',
  },
  {
    q: 'Devrai-je raconter en détail ce que j\'ai vécu ?',
    a: 'Non. C\'est souvent la première crainte, et la réponse est rassurante : le retraitement se fait au niveau où le souvenir est stocké, pas au niveau du récit. Vous n\'êtes jamais obligé de décrire la scène. Jean-Charles a besoin de savoir où vous en êtes, pas de vous faire tout revivre par le détail.',
  },
  {
    q: 'Un événement très ancien peut-il encore être traité ?',
    a: 'Oui. L\'ancienneté n\'est pas un obstacle : un souvenir qui déclenche encore des réactions vives aujourd\'hui est un souvenir resté « non digéré », quelle que soit sa date. C\'est précisément ce que le retraitement vient débloquer.',
  },
  {
    q: 'Combien de séances faut-il prévoir ?',
    a: 'Cela dépend de la nature de l\'événement et de son ancrage. Un choc unique et identifié demande souvent moins de séances qu\'un vécu répété ou installé sur des années. Jean-Charles vous donne une idée du parcours après le premier échange, sans jamais vous engager à l\'avance.',
  },
  {
    q: 'Vais-je être submergé pendant la séance ?',
    a: 'Le protocole commence toujours par une mise en sécurité : ancrage de ressources internes avant tout travail sur le souvenir. Vous restez conscient, vous gardez le contrôle et vous pouvez interrompre à tout moment. Le rythme est le vôtre.',
  },
  {
    q: 'Peut-on faire la séance à distance ?',
    a: 'Pour un travail sur un traumatisme, la question mérite d\'être posée au cas par cas : le RITMO® s\'appuie sur des stimulations visuelles et corporelles, dont la transposition à distance dépend de votre situation. Appelez Jean-Charles avant de réserver, il vous dira ce qui est adapté.',
  },
];

const symptoms = [
  'Souvenirs qui reviennent sans prévenir',
  'Cauchemars ou nuits agitées',
  'Sursauts, hypervigilance permanente',
  'Évitement de certains lieux ou situations',
  'Réactions émotionnelles disproportionnées',
  'Sensation de revivre la scène',
  'Engourdissement, sentiment d\'être « à côté »',
  'Culpabilité ou honte tenaces',
];

const steps = [
  { num: '01', title: 'Mise en sécurité', desc: 'Avant tout travail sur le souvenir : ancrage de ressources internes, pour que vous ayez de quoi tenir pendant la séance.' },
  { num: '02', title: 'Ciblage', desc: 'Identifier ce qui déclenche encore une réaction aujourd\'hui, et mesurer sa charge. Sans avoir à raconter la scène en détail.' },
  { num: '03', title: 'Le retraitement', desc: 'Selon ce qui convient à votre situation : le protocole d\'hypnose dédié au trauma, ou le RITMO®. Le souvenir perd sa charge émotionnelle.' },
  { num: '04', title: 'Vérification', desc: 'On revient sur le déclencheur pour mesurer ce qui a bougé, puis on ancre le nouvel état. Rien n\'est laissé ouvert en fin de séance.' },
];

export default function TraumatismesPage() {
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
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Se libérer d'un{' '}
                <span className="text-indigo-400">traumatisme</span>{' '}
                par l'hypnose
              </h1>
              <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                Choc émotionnel, accident, deuil, événement resté en travers :
                Jean-Charles Bernard, spécialisé en hypnose et traumatismes (IFHE 2026) et certifié RITMO®,
                travaille à Boussy-Saint-Antoine là où le souvenir s'est figé.{' '}
                <strong className="text-white">1h · 80€ · Sans avoir à tout raconter.</strong>
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
                  Quand le passé ne veut pas passer
                </h2>
              </div>
            </FadeContent>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {symptoms.map((s, i) => (
                <FadeContent key={s} delay={i * 0.06}>
                  <div className="flex items-start gap-3 bg-slate-50 border border-slate-100 rounded-xl p-4">
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
                  Retraiter le souvenir, pas le revivre
                </h2>
                <p className="text-slate-500 max-w-2xl mx-auto">
                  Un souvenir traumatique n'a jamais été rangé comme les autres : il reste vif,
                  au présent, prêt à se déclencher. Le travail thérapeutique vient terminer ce rangement resté en suspens.
                </p>
              </div>
            </FadeContent>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: '🧠', title: 'Un souvenir mal rangé', desc: 'Le cerveau n\'a pas pu « digérer » l\'événement sur le moment. Il reste stocké brut, avec ses images, ses sensations et sa charge intactes.' },
                { icon: '🔓', title: 'Relancer le traitement', desc: 'Le travail vient terminer ce que le cerveau n\'a pas pu faire sur le moment. Le souvenir se range enfin, et cesse de faire irruption.' },
                { icon: '🤐', title: 'Sans tout raconter', desc: 'Le travail se fait là où le souvenir est stocké, pas dans le récit. Vous n\'êtes jamais obligé de décrire ce que vous avez vécu.' },
              ].map(({ icon, title, desc }) => (
                <FadeContent key={title} delay={0.1}>
                  <div className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm">
                    <div className="text-3xl mb-4">{icon}</div>
                    <h3 className="font-serif text-lg font-bold text-[#1E1B4B] mb-2">{title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </FadeContent>
              ))}
            </div>
          </div>
        </section>

        {/* ── DEUX OUTILS DISTINCTS ── */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <FadeContent>
              <div className="text-center mb-12">
                <span className="text-indigo-500 text-xs font-bold uppercase tracking-widest">À ne pas confondre</span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1E1B4B] mt-3 mb-4">
                  Deux outils distincts, pas deux noms pour la même chose
                </h2>
                <p className="text-slate-500 max-w-2xl mx-auto">
                  Jean-Charles est formé aux deux. Ils ne se substituent pas l&apos;un à l&apos;autre :
                  il détermine avec vous celui qui convient à votre situation.
                </p>
              </div>
            </FadeContent>
            <div className="grid md:grid-cols-2 gap-6">
              <FadeContent delay={0.1}>
                <div className="h-full bg-indigo-50 border border-indigo-100 rounded-2xl p-7 flex flex-col">
                  <span className="self-start bg-indigo-600 text-white text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                    Spécialisation
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#1E1B4B] mb-3">Hypnose et traumatismes</h3>
                  <p className="text-slate-600 text-sm leading-relaxed flex-1">
                    Un protocole d&apos;hypnose conçu spécifiquement pour le trauma. Le travail passe par
                    l&apos;état hypnotique et par le langage, à un rythme ajusté à ce que vous pouvez traverser.
                  </p>
                  <p className="text-indigo-700 text-xs font-semibold mt-5 pt-4 border-t border-indigo-100">
                    Certifié IFHE — 2026
                  </p>
                </div>
              </FadeContent>
              <FadeContent delay={0.2}>
                <div className="h-full bg-emerald-50 border border-emerald-100 rounded-2xl p-7 flex flex-col">
                  <span className="self-start bg-emerald-600 text-white text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                    Technique
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#1E1B4B] mb-3">RITMO®</h3>
                  <p className="text-slate-600 text-sm leading-relaxed flex-1">
                    Retraitement de l&apos;Information Traumatique par les Mouvements Oculaires : des
                    stimulations visuelles et corporelles alternées, dans la lignée de l&apos;EMDR, qui
                    visent directement le souvenir resté figé.
                  </p>
                  <p className="text-emerald-700 text-xs font-semibold mt-5 pt-4 border-t border-emerald-100">
                    Certifié Lili Ruggieri — 2025
                  </p>
                </div>
              </FadeContent>
            </div>
          </div>
        </section>

        {/* ── PROTOCOLE ── */}
        <section className="py-20 bg-[#F8F7FF]">
          <div className="max-w-4xl mx-auto px-6">
            <FadeContent>
              <div className="text-center mb-14">
                <span className="text-indigo-500 text-xs font-bold uppercase tracking-widest">Déroulé</span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1E1B4B] mt-3">
                  La séance hypnose & traumatismes (1h · 80€)
                </h2>
              </div>
            </FadeContent>
            <div className="grid md:grid-cols-2 gap-6">
              {steps.map(({ num, title, desc }, i) => (
                <FadeContent key={num} delay={i * 0.1}>
                  <div className="flex gap-5 bg-slate-50 rounded-2xl p-6 border border-slate-100">
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
              <div className="mt-8 bg-indigo-50 border border-indigo-100 rounded-2xl p-6 flex gap-4 items-start">
                <svg className="text-indigo-500 flex-shrink-0 mt-0.5" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                <p className="text-indigo-800 text-sm leading-relaxed">
                  <strong>Cabinet à Boussy-Saint-Antoine</strong> — 4 Allée Les Marronniers, 91800.
                  Lun–Sam · 9h–20h.<br />
                  Pour un travail sur un traumatisme, <strong>appelez avant de réserver</strong> : Jean-Charles
                  vous dira si la séance à distance est adaptée à votre situation.
                </p>
              </div>
            </FadeContent>
            <FadeContent delay={0.35}>
              <div className="mt-4 bg-amber-50 border border-amber-100 rounded-2xl p-6 flex gap-4 items-start">
                <svg className="text-amber-500 flex-shrink-0 mt-0.5" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                <p className="text-amber-900 text-sm leading-relaxed">
                  L&apos;hypnose et le RITMO® sont des accompagnements complémentaires. Ils ne remplacent
                  ni un suivi psychologique ou psychiatrique, ni un traitement en cours, en particulier
                  en cas d&apos;état de stress post-traumatique diagnostiqué. Si vous êtes déjà suivi,
                  parlez-en à votre praticien.
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
                  Ils ont refermé la porte
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
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-4">
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
                <span className="text-indigo-500 text-xs font-bold uppercase tracking-widest">Questions fréquentes</span>
                <h2 className="font-serif text-3xl font-bold text-[#1E1B4B] mt-3">
                  Tout ce que vous voulez savoir
                </h2>
              </div>
            </FadeContent>
            <div className="space-y-4">
              {faqs.map(({ q, a }, i) => (
                <FadeContent key={i} delay={i * 0.08}>
                  <details className="group bg-slate-50 border border-slate-100 rounded-2xl p-6 cursor-pointer">
                    <summary className="font-semibold text-[#1E1B4B] text-base list-none flex justify-between items-center gap-4">
                      {q}
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
                Prêt à refermer la porte ?
              </h2>
              <p className="text-indigo-200 text-lg mb-8">
                Réservez votre séance. 1h · 80€ · Au cabinet de Boussy-Saint-Antoine.
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

      <Script id="schema-traumatismes" type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Jean-Charles Bernard — Hypnothérapeute",
          "description": "Accompagnement des traumatismes à Boussy-Saint-Antoine (91) : spécialisation IFHE hypnose et traumatismes (2026) et technique RITMO® (2025), deux approches distinctes.",
          "url": "https://jean-charles-bernard.fr/traumatismes",
          "telephone": "+33660811295",
          "email": "jeancharlesbernard3@gmail.com",
          "priceRange": "80€",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "4 Allée Les Marronniers",
            "addressLocality": "Boussy-Saint-Antoine",
            "postalCode": "91800",
            "addressCountry": "FR"
          },
          "openingHours": "Mo-Sa 09:00-20:00",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "39"
          }
        }
      `}</Script>
    </>
  );
}
