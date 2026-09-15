import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/sections/Navbar';
import FooterSection from '@/components/sections/FooterSection';
import FadeContent from '@/components/effects/FadeContent';
import Script from 'next/script';

export const metadata: Metadata = {
  metadataBase: new URL('https://jean-charles-bernard.fr'),
  alternates: { canonical: '/enfants-adolescents' },
  title: 'Hypnose pour enfants et adolescents à Boussy-Saint-Antoine | Jean-Charles Bernard',
  description: 'Anxiété, peurs, confiance en soi, sommeil, stress des examens : l\'hypnose accompagne les enfants et les adolescents à Boussy-Saint-Antoine (91). Hypnothérapeute certifié IFHE. 1h · 80€.',
  keywords: [
    'hypnose enfant Boussy-Saint-Antoine',
    'hypnose adolescent Essonne',
    'hypnothérapeute enfant 91',
    'hypnose enfant anxiété Brunoy',
    'hypnose stress examens Yerres',
    'hypnose confiance en soi adolescent Montgeron',
    'hypnose enfants Essonne',
    'hypnose ado 91',
  ],
  openGraph: {
    title: 'Hypnose pour enfants et adolescents — Boussy-Saint-Antoine',
    description: 'Hypnothérapeute certifié IFHE · Anxiété, peurs, confiance en soi, stress des examens · 80€ · Boussy-Saint-Antoine (91)',
    locale: 'fr_FR',
    type: 'website',
  },
};

const CALENDLY_URL = 'https://calendly.com/jeancharlesbernard3/seance-1h';

const testimonials = [
  {
    name: 'Lorena Simoni',
    tag: 'Bien-être · nov. 2025',
    text: 'Séance miraculeuse qui m\'a fait beaucoup de bien. Très bienveillant et à l\'écoute, sait nous mettre en confiance.',
    initial: 'L',
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
    name: 'Sandra Luce',
    tag: 'Blocages · Google Maps',
    text: 'Grâce à lui j\'ai réussi à faire sauter des blocages, à nettoyer des fantômes du passé et surtout à avancer et aller au bout de mes rêves, car ils connaissent le chemin.',
    initial: 'S',
    color: 'bg-emerald-600',
  },
];

const faqs = [
  {
    q: 'À partir de quel âge un enfant peut-il être accompagné ?',
    a: 'Cela dépend de l\'enfant et de la difficulté. L\'hypnose s\'adapte à l\'âge, avec une approche différente pour un jeune enfant et pour un adolescent. Le plus simple est d\'appeler Jean-Charles pour en parler : il vous dira si l\'accompagnement est adapté.',
  },
  {
    q: 'L\'hypnose est-elle sans danger pour un enfant ?',
    a: 'Oui. L\'hypnose est un état naturel que les enfants traversent spontanément quand ils jouent ou rêvent. L\'enfant reste conscient et ne fait rien contre sa volonté. Elle ne remplace pas pour autant un avis médical en cas de trouble de santé.',
  },
  {
    q: 'Mon enfant ne veut pas venir. Que faire ?',
    a: 'Son accord compte : l\'hypnose ne fonctionne pas sous la contrainte. Présentez la séance simplement, comme un moment pour l\'aider avec ce qui le gêne, sans insister. Un adolescent, surtout, doit se sentir libre de son choix.',
  },
  {
    q: 'Combien de séances faut-il ?',
    a: 'Les enfants et les adolescents évoluent souvent plus vite que les adultes, et peu de séances suffisent fréquemment. Cela dépend bien sûr de la difficulté. Jean-Charles vous en donne une idée après le premier échange.',
  },
  {
    q: 'Mon adolescent est stressé par ses examens. L\'hypnose peut-elle l\'aider ?',
    a: 'Oui. L\'hypnose aide à gérer le trac, à retrouver de la concentration et à aborder l\'épreuve plus sereinement. Mieux vaut ne pas attendre la veille de l\'examen pour consulter.',
  },
  {
    q: 'Comment prendre rendez-vous pour un mineur ?',
    a: 'Appelez Jean-Charles avant de réserver en ligne : il échange avec vous sur la situation de votre enfant et vous explique comment se déroule la séance.',
  },
];

const symptoms = [
  'Anxiété et inquiétudes',
  'Stress des examens',
  'Manque de confiance en soi',
  'Peurs : le noir, la séparation, les animaux',
  'Troubles du sommeil, cauchemars',
  'Timidité, peur du regard des autres',
  'Rongement des ongles, tics',
  'Colères et émotions débordantes',
];

const steps = [
  { num: '01', title: 'Faire le point', desc: 'Comprendre la difficulté et son contexte, avec des mots adaptés à l\'âge de l\'enfant.' },
  { num: '02', title: 'Créer la confiance', desc: 'Prendre le temps de faire connaissance, pour que l\'enfant se sente en sécurité avant tout travail.' },
  { num: '03', title: 'Passer par l\'imaginaire', desc: 'Histoires, métaphores, visualisations : l\'hypnose emprunte le langage qui parle à l\'enfant.' },
  { num: '04', title: 'Des outils à emporter', desc: 'Une ressource simple à réutiliser seul : pour s\'endormir, avant un contrôle, face à une peur.' },
];

export default function EnfantsAdolescentsPage() {
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
                L'hypnose pour les{' '}
                <span className="text-indigo-400">enfants et les adolescents</span>{' '}
                <span className="whitespace-nowrap">à Boussy-Saint-Antoine</span>
              </h1>
              <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                Très réceptifs à l'hypnose, les enfants et les adolescents mobilisent leur imagination et leur sensibilité, souvent avec des résultats rapides. Jean-Charles Bernard, hypnothérapeute certifié IFHE à Boussy-Saint-Antoine, les accompagne dans un cadre bienveillant.{' '}
                <strong className="text-white">1h · 80€ · Sans pression.</strong>
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
                  Ces difficultés que l'hypnose peut accompagner
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
                  Pourquoi l'hypnose réussit si bien aux plus jeunes
                </h2>
                <p className="text-slate-500 max-w-2xl mx-auto">
                  Un enfant passe naturellement, plusieurs fois par jour, dans cet état d'absorption qu'est l'hypnose : quand il joue, quand il rêve, quand il se raconte une histoire. Pour lui, c'est un langage familier.
                </p>
              </div>
            </FadeContent>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: '🎨', title: 'L\'imagination comme outil', desc: 'Les enfants entrent facilement dans l\'imaginaire. L\'hypnose s\'appuie sur cette capacité pour faire évoluer une peur ou une émotion par la métaphore et le jeu.' },
                { icon: '🌱', title: 'Des réactions encore souples', desc: 'Chez l\'enfant et l\'adolescent, les réactions sont moins figées qu\'à l\'âge adulte. Elles évoluent souvent plus vite.' },
                { icon: '🤝', title: 'Un cadre sans pression', desc: 'Pas d\'effort, pas de performance : l\'enfant n\'a rien à réussir. Il est accueilli tel qu\'il est, dans un cadre rassurant.' },
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
                  La séance pour enfants et adolescents (1h · 80€)
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
              <div className="mt-8 bg-indigo-50 border border-indigo-100 rounded-2xl p-6 flex gap-4 items-start">
                <svg className="text-indigo-500 flex-shrink-0 mt-0.5" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                <p className="text-indigo-800 text-sm leading-relaxed">
                  <strong>Cabinet à Boussy-Saint-Antoine</strong> — 4 Allée Les Marronniers, 91800.
                  Lun–Sam · 9h–20h.<br />
                  Pour un enfant ou un adolescent, <strong>appelez avant de réserver</strong> : Jean-Charles vous expliquera comment se déroule la séance.
                </p>
              </div>
            </FadeContent>
            <FadeContent delay={0.35}>
              <div className="mt-4 bg-amber-50 border border-amber-100 rounded-2xl p-6 flex gap-4 items-start">
                <svg className="text-amber-500 flex-shrink-0 mt-0.5" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                <p className="text-amber-900 text-sm leading-relaxed">
                  L'hypnose est un accompagnement complémentaire. Elle ne remplace ni un avis médical, ni un suivi pédiatrique, psychologique ou orthophonique. En cas de trouble diagnostiqué, elle vient en complément, jamais à sa place.
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
                  Ce que ses patients disent de lui
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
                  Vos questions sur l'hypnose pour les enfants
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
                Envie d'en parler ?
              </h2>
              <p className="text-indigo-200 text-lg mb-8">
                Appelez Jean-Charles ou réservez une séance. 1h · 80€ · Au cabinet de Boussy-Saint-Antoine.
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

      <Script id="schema-enfants-adolescents" type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Jean-Charles Bernard — Hypnothérapeute",
          "description": "Hypnose pour les enfants et les adolescents à Boussy-Saint-Antoine (91). Hypnothérapeute certifié IFHE, 15 ans d'expérience.",
          "url": "https://jean-charles-bernard.fr/enfants-adolescents",
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
