import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/sections/Navbar';
import FooterSection from '@/components/sections/FooterSection';
import FadeContent from '@/components/effects/FadeContent';
import Script from 'next/script';

export const metadata: Metadata = {
  metadataBase: new URL('https://jean-charles-bernard.fr'),
  alternates: { canonical: '/sommeil-insomnie' },
  title: 'Hypnose pour le sommeil et l\'insomnie à Boussy-Saint-Antoine | Jean-Charles Bernard',
  description: 'Difficultés d\'endormissement, réveils nocturnes, mental qui tourne : retrouvez un sommeil réparateur grâce à l\'hypnose à Boussy-Saint-Antoine (91). Hypnothérapeute certifié IFHE. 1h · 70€.',
  keywords: [
    'hypnose sommeil Boussy-Saint-Antoine',
    'hypnose insomnie Essonne',
    'hypnothérapeute insomnie 91',
    'troubles du sommeil hypnose Brunoy',
    'réveils nocturnes hypnose Yerres',
    'hypnose endormissement Montgeron',
    'hypnose contre insomnie 91',
    'mieux dormir hypnose Essonne',
  ],
  openGraph: {
    title: 'Hypnose sommeil & insomnie — Boussy-Saint-Antoine',
    description: 'Hypnothérapeute certifié IFHE · Endormissement, réveils nocturnes, sommeil non réparateur · 70€ · Boussy-Saint-Antoine (91)',
    locale: 'fr_FR',
    type: 'website',
  },
};

const CALENDLY_URL = 'https://calendly.com/jeancharlesbernard3/seance-1h';

const testimonials = [
  {
    name: 'Asty Garcia',
    tag: 'Lâcher-prise · juil. 2025',
    text: 'Après une 1ère séance qui m\'a libérée d\'un mal qui me rongeait depuis des décennies, j\'ai renouvelé pour lâcher-prise, respirer et mieux vivre. D\'une réelle aide.',
    initial: 'A',
    color: 'bg-indigo-600',
  },
  {
    name: 'Lorena Simoni',
    tag: 'Bien-être · nov. 2025',
    text: 'Séance miraculeuse qui m\'a fait beaucoup de bien. Très bienveillant et à l\'écoute, sait nous mettre en confiance.',
    initial: 'L',
    color: 'bg-violet-600',
  },
  {
    name: 'Sandra Luce',
    tag: 'Blocages · Google Maps',
    text: 'Grâce à lui j\'ai réussi à faire sauter des blocages, à nettoyer des fantômes du passé et surtout à avancer et aller au bout de mes rêves, car ils connaissent le chemin.',
    initial: 'S',
    color: 'bg-emerald-600',
  },
];

const faqs = [
  {
    q: 'L\'hypnose est-elle efficace contre l\'insomnie ?',
    a: 'Oui, particulièrement sur l\'insomnie dite « psychophysiologique » — celle qu\'entretiennent le stress, les ruminations et la peur de ne pas dormir. L\'hypnose réapprend au système nerveux à basculer en mode récupération, ce que la volonté seule ne peut pas déclencher : on ne se force pas à dormir.',
  },
  {
    q: 'Je me réveille à 3h du matin sans raison. Est-ce que ça se traite ?',
    a: 'C\'est un motif de consultation très fréquent. Le réveil nocturne est souvent le signe d\'une charge mentale non traitée qui remonte quand les défenses conscientes tombent. L\'hypnose travaille sur ce qui alimente le réveil, et sur la capacité à se rendormir sans que le mental s\'emballe.',
  },
  {
    q: 'Combien de séances faut-il pour retrouver un sommeil normal ?',
    a: 'Beaucoup de personnes constatent une amélioration dès la première nuit suivant la séance. Pour une insomnie installée depuis des mois ou des années, un parcours de 2 à 3 séances permet d\'ancrer durablement le nouveau schéma de sommeil.',
  },
  {
    q: 'L\'hypnose peut-elle remplacer mes somnifères ?',
    a: 'L\'hypnose est un accompagnement, pas un substitut médicamenteux. Elle aide souvent à réduire le recours aux somnifères en traitant la cause du trouble — mais toute modification ou arrêt d\'un traitement doit être décidé avec votre médecin, jamais seul et jamais brutalement.',
  },
  {
    q: 'Vais-je m\'endormir pendant la séance ?',
    a: 'L\'état hypnotique n\'est pas le sommeil : vous restez conscient et vous entendez tout. Certaines personnes glissent malgré tout vers un assoupissement — ce n\'est pas un problème, le travail se poursuit. C\'est souvent bon signe chez quelqu\'un qui ne parvient plus à lâcher prise.',
  },
];

const symptoms = [
  'Difficulté à s\'endormir le soir',
  'Réveils nocturnes répétés',
  'Réveil trop tôt, sans se rendormir',
  'Mental qui tourne au moment du coucher',
  'Appréhension à l\'idée d\'aller se coucher',
  'Fatigue au réveil malgré les heures',
  'Sommeil léger et non réparateur',
  'Recours régulier aux somnifères',
];

const steps = [
  { num: '01', title: 'Comprendre le cycle', desc: 'Identifier ce qui entretient l\'insomnie : ruminations, stress, habitudes du soir, anticipation de la mauvaise nuit.' },
  { num: '02', title: 'Désamorcer l\'anticipation', desc: 'La peur de ne pas dormir est ce qui empêche de dormir. L\'hypnose casse cette boucle à la racine.' },
  { num: '03', title: 'Reconditionnement', desc: 'Réassocier le lit et le soir à la détente plutôt qu\'à la lutte. Le corps réapprend le signal de l\'endormissement.' },
  { num: '04', title: 'Auto-hypnose du soir', desc: 'Une technique courte à utiliser seul au coucher, pour retrouver l\'état propice au sommeil sans dépendre de la séance.' },
];

export default function SommeilInsomniePage() {
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
                Retrouvez un{' '}
                <span className="text-indigo-400">sommeil réparateur</span>{' '}
                grâce à l'hypnose
              </h1>
              <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                Endormissement difficile, réveils nocturnes, mental qui ne s'arrête jamais :
                Jean-Charles Bernard, hypnothérapeute certifié IFHE à Boussy-Saint-Antoine, agit sur ce qui vous tient éveillé.{' '}
                <strong className="text-white">1h · 70€ · Sans médicament.</strong>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-4 rounded-full transition-colors text-base"
                >
                  Réserver ma séance — 70€
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
                  Ces nuits que l'hypnose peut changer
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
                  On ne se force pas à dormir
                </h2>
                <p className="text-slate-500 max-w-2xl mx-auto">
                  C'est tout le problème de l'insomnie : plus on essaie, moins ça marche.
                  L'hypnose contourne la volonté et agit là où le sommeil se déclenche réellement.
                </p>
              </div>
            </FadeContent>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: '🌙', title: 'Système nerveux', desc: 'L\'endormissement demande une bascule vers le parasympathique. L\'hypnose provoque cette bascule directement, sans effort conscient.' },
                { icon: '🔁', title: 'La boucle anxieuse', desc: 'Mal dormir fait craindre la nuit suivante, et cette crainte empêche de dormir. L\'hypnose casse ce cercle qui s\'auto-entretient.' },
                { icon: '🛏️', title: 'Nouveau réflexe', desc: 'Le lit est devenu le lieu de la lutte. Le travail hypnotique le réassocie au relâchement et au sommeil.' },
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

        {/* ── PROTOCOLE ── */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <FadeContent>
              <div className="text-center mb-14">
                <span className="text-indigo-500 text-xs font-bold uppercase tracking-widest">Déroulé</span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1E1B4B] mt-3">
                  La séance sommeil & insomnie (1h · 70€)
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
                  Consultations également à <strong>Paris 7ème</strong> (4 Cité Négrier, Métro La Tour Maubourg).
                  Lun–Sam · 9h–20h.
                </p>
              </div>
            </FadeContent>
            <FadeContent delay={0.35}>
              <div className="mt-4 bg-amber-50 border border-amber-100 rounded-2xl p-6 flex gap-4 items-start">
                <svg className="text-amber-500 flex-shrink-0 mt-0.5" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                <p className="text-amber-900 text-sm leading-relaxed">
                  Certaines insomnies ont une cause médicale (apnée du sommeil, syndrome des jambes sans repos,
                  effet d&apos;un traitement). L&apos;hypnose ne remplace pas un avis médical, et tout traitement
                  en cours ne se modifie qu&apos;avec votre médecin.
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
                  Ils ont fait le premier pas
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
                    <p className="text-white/70 text-sm leading-relaxed italic">"{text}"</p>
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
                Prêt à retrouver vos nuits ?
              </h2>
              <p className="text-indigo-200 text-lg mb-8">
                Réservez votre séance. 1h · 70€ · Boussy-Saint-Antoine ou Paris.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-indigo-50 text-indigo-700 font-semibold px-8 py-4 rounded-full transition-colors text-base"
                >
                  Réserver en ligne — 70€
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

      <Script id="schema-sommeil" type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Jean-Charles Bernard — Hypnothérapeute",
          "description": "Hypnose pour le sommeil et l'insomnie à Boussy-Saint-Antoine (91). Hypnothérapeute certifié IFHE, 15 ans d'expérience.",
          "url": "https://jean-charles-bernard.fr/sommeil-insomnie",
          "telephone": "+33660811295",
          "email": "jeancharlesbernard3@gmail.com",
          "priceRange": "70€",
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
