import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/sections/Navbar';
import FooterSection from '@/components/sections/FooterSection';
import FadeContent from '@/components/effects/FadeContent';
import Script from 'next/script';

export const metadata: Metadata = {
  metadataBase: new URL('https://jean-charles-bernard.fr'),
  alternates: { canonical: '/arret-tabac' },
  title: 'Arrêter de fumer grâce à l\'hypnose à Boussy-Saint-Antoine | Jean-Charles Bernard',
  description: 'Jean-Charles Bernard, hypnothérapeute certifié IFHE à Boussy-Saint-Antoine (91), vous accompagne pour arrêter de fumer par hypnose. 1 séance · 70€ · Résultats durables.',
  keywords: [
    'hypnose arrêt tabac Boussy-Saint-Antoine',
    'arrêter de fumer hypnose 91',
    'hypnothérapeute tabac Essonne',
    'hypnose cigarette Boussy',
    'arrêt tabac hypnose Yerres',
    'hypnose tabac Brunoy',
    'sevrage tabac hypnose Montgeron',
    'hypnose arrêt tabac Essonne',
    'hypnose arrêt tabac à distance',
  ],
  openGraph: {
    title: 'Arrêter de fumer par hypnose — Boussy-Saint-Antoine',
    description: 'Hypnothérapeute certifié IFHE · Arrêt du tabac en 1 séance · 70€ · Boussy-Saint-Antoine (91)',
    locale: 'fr_FR',
    type: 'website',
  },
};

const CALENDLY_URL = 'https://calendly.com/jeancharlesbernard3/seance-1h';

const testimonials = [
  {
    name: 'Thomas Bonnet',
    tag: 'Stop tabac',
    text: 'Gros fumeur depuis plus de 20 ans et plusieurs tentatives d\'arrêt. Une séance avec Jean-Charles : plus d\'envie, un oubli total de la cigarette et ce depuis 2 ans. Merciiii !',
    initial: 'T',
    color: 'bg-indigo-600',
  },
  {
    name: 'Sha-Sha PEKOZ',
    tag: 'Stop tabac',
    text: 'Je fumais beaucoup et venais d\'apprendre que j\'attendais un bébé. En une séance tout était résolu et je n\'ai pas fumé une seule cigarette depuis.',
    initial: 'S',
    color: 'bg-emerald-600',
  },
  {
    name: 'Lorena Simoni',
    tag: 'Bien-être',
    text: 'Séance miraculeuse qui m\'a fait beaucoup de bien. Très bienveillant et à l\'écoute, sait nous mettre en confiance.',
    initial: 'L',
    color: 'bg-violet-600',
  },
];

const faqs = [
  {
    q: 'Est-ce que l\'hypnose marche vraiment pour arrêter de fumer ?',
    a: 'Oui — de nombreuses études cliniques montrent que l\'hypnose est l\'une des méthodes les plus efficaces pour le sevrage tabagique, avec des taux de réussite supérieurs aux patchs ou à la volonté seule. L\'hypnose agit directement sur les mécanismes inconscients qui entretiennent la dépendance, là où les méthodes de surface ne suffisent pas.',
  },
  {
    q: 'Combien de séances faut-il pour arrêter de fumer ?',
    a: 'Beaucoup de patients obtiennent des résultats dès la 1ère séance. Jean-Charles travaille en profondeur lors d\'un entretien préalable pour cerner votre rapport à la cigarette, puis adapte la séance à votre profil. Une 2ème séance de consolidation peut être proposée selon les cas.',
  },
  {
    q: 'Quel est le tarif d\'une séance d\'hypnose pour arrêter de fumer ?',
    a: 'La séance dure 1h et est facturée 70€. Elle inclut un entretien préalable pour comprendre votre motivation et votre historique tabagique, suivi de la séance d\'hypnose proprement dite. Aucun abonnement, aucune surprise.',
  },
  {
    q: 'L\'hypnose pour arrêter de fumer est-elle remboursée ?',
    a: 'Les séances d\'hypnothérapie ne sont pas remboursées par la Sécurité Sociale. Certaines mutuelles prennent en charge une partie des séances de médecines douces — renseignez-vous auprès de la vôtre.',
  },
  {
    q: 'Est-ce que je risque de rechuter après la séance ?',
    a: 'La rechute est possible, notamment en cas de stress intense. C\'est pourquoi Jean-Charles travaille non seulement sur l\'envie de fumer, mais aussi sur les déclencheurs émotionnels et les automatismes. En cas de besoin, une séance de soutien peut être organisée rapidement.',
  },
  {
    q: 'Peut-on faire la séance à distance ?',
    a: 'Oui. L\'hypnose repose sur la voix et sur la relation, pas sur la présence physique : le travail est le même à distance. Il vous faut simplement un endroit calme où vous ne serez pas dérangé, une connexion correcte et un casque ou des écouteurs. Le protocole d\'arrêt du tabac se déroule exactement de la même façon. Choisissez « Appel téléphonique » au moment de la réservation : Jean-Charles vous appelle sur WhatsApp à l\'heure convenue, en audio ou en visio.',
  },
];

const steps = [
  { num: '01', title: 'Entretien', desc: 'Comprendre votre rapport à la cigarette, vos tentatives passées, vos déclencheurs. Aucun jugement.' },
  { num: '02', title: 'Induction', desc: 'Vous entrez dans un état de relaxation profonde, naturel et confortable. Vous restez conscient à tout moment.' },
  { num: '03', title: 'Travail inconscient', desc: 'Jean-Charles reprogramme les associations négatives liées à la cigarette et renforce votre motivation profonde.' },
  { num: '04', title: 'Ancrage', desc: 'Une technique d\'ancrage vous donne un outil immédiat pour les moments de tentation après la séance.' },
];

export default function ArretTabacPage() {
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
                Arrêter de fumer grâce à{' '}
                <span className="text-indigo-400">l'hypnose</span>{' '}
                à Boussy-Saint-Antoine
              </h1>
              <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                Jean-Charles Bernard, hypnothérapeute certifié IFHE, vous accompagne pour
                vous libérer définitivement du tabac. <strong className="text-white">1 séance · 70€ · Résultats durables.</strong>
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

        {/* ── POURQUOI L'HYPNOSE ── */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <FadeContent>
              <div className="text-center mb-14">
                <span className="text-indigo-500 text-xs font-bold uppercase tracking-widest">La méthode</span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1E1B4B] mt-3 mb-4">
                  Pourquoi l'hypnose est si efficace contre le tabac
                </h2>
                <p className="text-slate-500 max-w-2xl mx-auto">
                  Fumer n'est pas qu'une dépendance physique. C'est un comportement ancré dans l'inconscient.
                  Les patchs et la volonté agissent en surface. L'hypnose va à la racine.
                </p>
              </div>
            </FadeContent>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: '🧠',
                  title: 'Action sur l\'inconscient',
                  desc: 'L\'hypnose modifie les associations inconscientes entre cigarette et plaisir, stress ou habitude. Là où les méthodes de surface échouent.',
                },
                {
                  icon: '⚡',
                  title: 'Résultats dès la 1ère séance',
                  desc: 'De nombreux patients sortent de la séance sans plus ressentir l\'envie de fumer. Pas de substitut, pas de manque progressif.',
                },
                {
                  icon: '🛡️',
                  title: 'Traitement des déclencheurs',
                  desc: 'Stress, café, alcool, ennui… Jean-Charles identifie et neutralise vos déclencheurs personnels pour prévenir la rechute.',
                },
              ].map(({ icon, title, desc }) => (
                <FadeContent key={title} delay={0.1}>
                  <div className="bg-slate-50 rounded-2xl p-7 border border-slate-100">
                    <div className="text-3xl mb-4">{icon}</div>
                    <h3 className="font-serif text-lg font-bold text-[#1E1B4B] mb-2">{title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </FadeContent>
              ))}
            </div>
          </div>
        </section>

        {/* ── LE PROTOCOLE ── */}
        <section className="py-20 bg-[#F8F7FF]">
          <div className="max-w-4xl mx-auto px-6">
            <FadeContent>
              <div className="text-center mb-14">
                <span className="text-indigo-500 text-xs font-bold uppercase tracking-widest">Déroulé</span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1E1B4B] mt-3 mb-4">
                  La séance d'hypnose arrêt tabac (1h · 70€)
                </h2>
              </div>
            </FadeContent>
            <div className="grid md:grid-cols-2 gap-6">
              {steps.map(({ num, title, desc }, i) => (
                <FadeContent key={num} delay={i * 0.1}>
                  <div className="flex gap-5 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
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
                  Séances du lundi au samedi, 9h–20h.<br />
                  <strong>Séance à distance</strong> également possible : par téléphone ou en visio sur WhatsApp.
                </p>
              </div>
            </FadeContent>
          </div>
        </section>

        {/* ── TEMOIGNAGES ── */}
        <section className="py-20 bg-[#0f0c29]">
          <div className="max-w-5xl mx-auto px-6">
            <FadeContent>
              <div className="text-center mb-12">
                <span className="text-indigo-400 text-xs font-bold uppercase tracking-widest">Témoignages</span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mt-3 mb-3">
                  Ils ont arrêté de fumer avec Jean-Charles
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
                Prêt à vous libérer du tabac ?
              </h2>
              <p className="text-indigo-200 text-lg mb-8">
                Réservez votre séance en ligne. 1h · 70€ · Au cabinet de Boussy-Saint-Antoine ou à distance.
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

      {/* Schema.org LocalBusiness structured data */}
      <Script id="schema-arret-tabac" type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Jean-Charles Bernard — Hypnothérapeute",
          "description": "Arrêt du tabac par hypnose à Boussy-Saint-Antoine (91). Hypnothérapeute certifié IFHE, 15 ans d'expérience.",
          "url": "https://jean-charles-bernard.fr/arret-tabac",
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
