import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/sections/Navbar';
import FooterSection from '@/components/sections/FooterSection';
import FadeContent from '@/components/effects/FadeContent';
import Script from 'next/script';

export const metadata: Metadata = {
  metadataBase: new URL('https://jean-charles-bernard.fr'),
  alternates: { canonical: '/stress-anxiete' },
  title: 'Hypnose contre le stress et l\'anxiété à Boussy-Saint-Antoine | Jean-Charles Bernard',
  description: 'Libérez-vous du stress chronique et de l\'anxiété grâce à l\'hypnose à Boussy-Saint-Antoine (91). Jean-Charles Bernard, hypnothérapeute certifié IFHE. 1h · 80€.',
  keywords: [
    'hypnose stress anxiété Boussy-Saint-Antoine',
    'hypnothérapeute anxiété 91',
    'hypnose stress Essonne',
    'hypnothérapeute stress Brunoy',
    'hypnose anxiété Yerres',
    'gestion stress hypnose Montgeron',
    'hypnose burn-out Essonne',
    'anxiété hypnose 91',
    'hypnose stress anxiété à distance',
  ],
  openGraph: {
    title: 'Hypnose contre le stress et l\'anxiété — Boussy-Saint-Antoine',
    description: 'Hypnothérapeute certifié IFHE · Stress, anxiété, burn-out · 80€ · Boussy-Saint-Antoine (91)',
    locale: 'fr_FR',
    type: 'website',
  },
};

const CALENDLY_URL = 'https://calendly.com/jeancharlesbernard3/seance-1h';

const testimonials = [
  {
    name: 'Asty Garcia',
    tag: 'Lâcher-prise',
    text: 'Après une 1ère séance qui m\'a libérée d\'un mal qui me rongeait depuis des décennies, j\'ai renouvelé foi, de lâcher-prise, respirer et mieux vivre. D\'une réelle aide.',
    initial: 'A',
    color: 'bg-indigo-600',
  },
  {
    name: 'Delphine RENARD',
    tag: 'Confiance en soi',
    text: 'Son accompagnement ultra efficace m\'a sortie de situations difficiles, m\'a permis de prendre confiance en moi, de grandir, d\'évoluer et m\'épanouir. Un grand merci.',
    initial: 'D',
    color: 'bg-violet-600',
  },
  {
    name: 'Sandra Luce',
    tag: 'Blocages',
    text: 'Grâce à lui j\'ai réussi à faire sauter des blocages, à nettoyer des fantômes du passé et surtout à avancer et aller au bout de mes rêves, car ils connaissent le chemin.',
    initial: 'S',
    color: 'bg-emerald-600',
  },
];

const faqs = [
  {
    q: 'L\'hypnose est-elle efficace contre le stress et l\'anxiété ?',
    a: 'Oui — l\'hypnose agit directement sur le système nerveux autonome, responsable des réponses de stress. En induisant un état de relaxation profonde, elle permet de reprogrammer les schémas d\'hypervigilance et les pensées automatiques anxieuses. Les effets sont souvent ressentis dès la 1ère séance.',
  },
  {
    q: 'Quelle différence entre le stress et l\'anxiété en hypnothérapie ?',
    a: 'Le stress est souvent une réponse à une situation externe identifiable (surcharge de travail, conflit). L\'anxiété est plus diffuse, parfois sans cause apparente. Jean-Charles adapte l\'approche selon votre profil : travail sur les déclencheurs pour le stress, sur les schémas de pensée pour l\'anxiété généralisée.',
  },
  {
    q: 'Combien de séances faut-il pour réduire le stress chronique ?',
    a: 'Beaucoup de patients observent une amélioration significative dès la 1ère séance. Pour un stress chronique ou une anxiété ancienne, un parcours de 2 à 3 séances espacées de quelques semaines donne les meilleurs résultats durables.',
  },
  {
    q: 'L\'hypnose peut-elle aider en cas de burn-out ?',
    a: 'Oui. L\'hypnose est particulièrement adaptée aux états d\'épuisement émotionnel car elle permet une récupération profonde du système nerveux. Elle aide à identifier les croyances limitantes à l\'origine du burn-out et à reconstruire une relation saine au travail et à soi.',
  },
  {
    q: 'Est-ce que je vais perdre le contrôle pendant la séance ?',
    a: 'Non — contrairement aux idées reçues, l\'hypnose n\'est pas un état de perte de contrôle. Vous restez pleinement conscient, vous entendez tout ce que dit Jean-Charles et vous pouvez sortir de cet état à tout moment. C\'est simplement un état de relaxation intense, similaire à la méditation profonde.',
  },
  {
    q: 'Peut-on faire la séance à distance ?',
    a: 'Oui. L\'hypnose repose sur la voix et sur la relation, pas sur la présence physique : le travail est le même à distance. Il vous faut simplement un endroit calme où vous ne serez pas dérangé, une connexion correcte et un casque ou des écouteurs. Beaucoup de personnes anxieuses se détendent même plus vite depuis leur propre environnement. Choisissez « Appel téléphonique » au moment de la réservation : Jean-Charles vous appelle sur WhatsApp à l\'heure convenue, en audio ou en visio.',
  },
];

const symptoms = [
  'Tensions chroniques et maux de tête',
  'Ruminations et pensées en boucle',
  'Troubles du sommeil liés au stress',
  'Sentiment permanent d\'être dépassé',
  'Irritabilité et sautes d\'humeur',
  'Anxiété sociale ou généralisée',
  'Attaques de panique',
  'Burn-out ou épuisement émotionnel',
];

const steps = [
  { num: '01', title: 'Évaluation', desc: 'Comprendre vos sources de stress, leur ancienneté, leur impact sur votre vie. Jean-Charles écoute sans jugement.' },
  { num: '02', title: 'Relaxation profonde', desc: 'Induction d\'un état de calme intense. Votre système nerveux sort du mode "alerte" et entre en mode "récupération".' },
  { num: '03', title: 'Reprogrammation', desc: 'Travail sur les schémas mentaux qui alimentent le stress. Remplacement des réponses automatiques anxieuses par des ressources internes.' },
  { num: '04', title: 'Ressources autonomes', desc: 'Techniques d\'auto-hypnose et d\'ancrage pour gérer les pics de stress seul, entre les séances.' },
];

export default function StressAnxietePage() {
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
                Libérez-vous du{' '}
                <span className="text-indigo-400">stress et de l'anxiété</span>{' '}
                par l'hypnose
              </h1>
              <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                Jean-Charles Bernard, hypnothérapeute certifié IFHE à Boussy-Saint-Antoine,
                vous aide à retrouver un calme durable. <strong className="text-white">1h · 80€ · Résultats dès la 1ère séance.</strong>
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
                  Ces symptômes que l'hypnose peut soulager
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
                  Pourquoi l'hypnose agit là où les autres méthodes échouent
                </h2>
                <p className="text-slate-500 max-w-2xl mx-auto">
                  Le stress chronique s'installe dans l'inconscient sous forme de réflexes automatiques.
                  Seule une approche qui accède à ce niveau peut les modifier durablement.
                </p>
              </div>
            </FadeContent>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: '🧠', title: 'Système nerveux', desc: 'L\'hypnose active le système nerveux parasympathique, l\'exact opposé de la réponse de stress. Le corps apprend à se calmer profondément.' },
                { icon: '🔄', title: 'Schémas inconscients', desc: 'Les pensées anxieuses sont des habitudes mentales. L\'hypnose les reprogramme à la source, sans effort conscient.' },
                { icon: '🛠️', title: 'Outils concrets', desc: 'Jean-Charles vous enseigne des techniques d\'auto-hypnose utilisables immédiatement en cas de pic de stress ou d\'angoisse.' },
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
                  La séance hypnose stress & anxiété (1h · 80€)
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
                  <strong>Séance à distance</strong> également possible : par téléphone ou en visio sur WhatsApp.
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
                  Ils ont retrouvé la sérénité
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
                        <div className="text-white/40 text-xs">{tag} · Google Maps</div>
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
                Prêt à retrouver la sérénité ?
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

      <Script id="schema-stress" type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Jean-Charles Bernard — Hypnothérapeute",
          "description": "Hypnose contre le stress et l'anxiété à Boussy-Saint-Antoine (91). Hypnothérapeute certifié IFHE, 15 ans d'expérience.",
          "url": "https://jean-charles-bernard.fr/stress-anxiete",
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
