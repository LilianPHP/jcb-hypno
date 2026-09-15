import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/sections/Navbar';
import FooterSection from '@/components/sections/FooterSection';
import FadeContent from '@/components/effects/FadeContent';
import Script from 'next/script';

export const metadata: Metadata = {
  metadataBase: new URL('https://jean-charles-bernard.fr'),
  alternates: { canonical: '/phobies' },
  title: 'Hypnose phobies et peurs à Boussy-Saint-Antoine | Jean-Charles Bernard',
  description: 'Peur de l\'avion, des araignées, des espaces clos, du regard des autres : se libérer d\'une phobie grâce à l\'hypnose à Boussy-Saint-Antoine (91). Hypnothérapeute certifié IFHE. 1h · 80€.',
  keywords: [
    'hypnose phobie Boussy-Saint-Antoine',
    'hypnose peur de l\'avion Essonne',
    'hypnose claustrophobie 91',
    'hypnose peur des araignées Brunoy',
    'hypnose phobie sociale Yerres',
    'hypnothérapeute phobie Montgeron',
    'hypnose peurs Essonne',
    'hypnose phobie à distance',
  ],
  openGraph: {
    title: 'Hypnose phobies et peurs — Boussy-Saint-Antoine',
    description: 'Hypnothérapeute certifié IFHE · Peur de l\'avion, espaces clos, regard des autres · 80€ · Boussy-Saint-Antoine (91)',
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
    q: 'L\'hypnose fonctionne-t-elle sur les phobies ?',
    a: 'Oui, c\'est l\'un des domaines où l\'hypnose est le plus utilisée. Une phobie est une réaction automatique de protection qui se déclenche trop fort : l\'hypnose agit au niveau où ce réflexe s\'est installé, là où le raisonnement seul ne suffit pas.',
  },
  {
    q: 'Vais-je devoir affronter ma peur pendant la séance ?',
    a: 'Non. Le travail se fait dans un état de calme et de sécurité. La situation redoutée peut être évoquée, mais toujours à un rythme que vous contrôlez, et vous n\'êtes jamais mis face à l\'objet réel de votre peur.',
  },
  {
    q: 'Combien de séances faut-il ?',
    a: 'Une peur précise se traite souvent en peu de séances. Une phobie installée depuis longtemps, ou qui touche plusieurs situations, demande en général un parcours un peu plus long. Jean-Charles vous en donne une idée après le premier échange.',
  },
  {
    q: 'J\'ai peur de perdre le contrôle sous hypnose. Est-ce un problème ?',
    a: 'C\'est une crainte fréquente, et compréhensible quand on vit avec une phobie. Vous restez conscient, vous entendez tout et vous pouvez interrompre à tout moment. L\'hypnose ne retire pas le contrôle : elle aide à le retrouver.',
  },
  {
    q: 'Je prends l\'avion bientôt. Est-il encore temps ?',
    a: 'Mieux vaut ne pas s\'y prendre à la dernière minute. Laisser un peu de temps entre la séance et le voyage permet d\'ancrer le travail, et de prévoir une seconde séance si nécessaire. Appelez Jean-Charles pour en parler.',
  },
  {
    q: 'Peut-on faire la séance à distance ?',
    a: 'Oui. L\'hypnose repose sur la voix et sur la relation, pas sur la présence physique : le travail est le même à distance. Il vous faut simplement un endroit calme où vous ne serez pas dérangé, une connexion correcte et un casque ou des écouteurs. Le travail sur la réaction de peur se mène aussi bien à distance. Choisissez « Appel téléphonique » au moment de la réservation : Jean-Charles vous appelle sur WhatsApp à l\'heure convenue, en audio ou en visio.',
  },
];

const symptoms = [
  'Peur de prendre l\'avion',
  'Peur des araignées ou des insectes',
  'Malaise dans les espaces clos',
  'Peur du regard des autres',
  'Peur de parler en public',
  'Évitement de certains lieux ou situations',
  'Panique face à l\'objet de la peur',
  'Anxiété d\'anticipation, des jours avant',
];

const steps = [
  { num: '01', title: 'Comprendre la peur', desc: 'Identifier ce qui déclenche la réaction, son intensité et depuis quand elle est là. Sans vous obliger à la raconter en détail.' },
  { num: '02', title: 'Mise en sécurité', desc: 'Installer un état de calme profond et une ressource de sécurité, avant tout travail sur la peur.' },
  { num: '03', title: 'Recalibrer la réaction', desc: 'Sous hypnose, la situation redoutée est abordée progressivement, jusqu\'à ce qu\'elle ne déclenche plus l\'alarme.' },
  { num: '04', title: 'Ancrage', desc: 'Une ressource à réactiver seul face à la situation réelle : l\'avion, l\'ascenseur, la prise de parole.' },
];

export default function PhobiesPage() {
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
                Se libérer d'une{' '}
                <span className="text-indigo-400">phobie</span>{' '}
                par l'hypnose{' '}
                <span className="whitespace-nowrap">à Boussy-Saint-Antoine</span>
              </h1>
              <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                Peur de l'avion, des araignées, des espaces clos, du regard des autres : Jean-Charles Bernard, hypnothérapeute certifié IFHE à Boussy-Saint-Antoine, agit sur la réaction de peur elle-même.{' '}
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
                  Ces peurs que l'hypnose peut apaiser
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
                  Une peur ne se raisonne pas
                </h2>
                <p className="text-slate-500 max-w-2xl mx-auto">
                  Vous savez que l'araignée est inoffensive, que l'avion est sûr. Rien n'y fait : la phobie ne vit pas dans la raison, mais dans un réflexe de protection. C'est à ce niveau que l'hypnose agit.
                </p>
              </div>
            </FadeContent>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: '🧠', title: 'Un réflexe, pas une idée', desc: 'La phobie est une alarme qui se déclenche trop fort et trop tôt. On ne la désactive pas en se raisonnant, mais en recalibrant la réaction.' },
                { icon: '🛡️', title: 'Sans être submergé', desc: 'Le travail se fait dans un état de calme profond. Vous abordez la situation redoutée en sécurité, à votre rythme.' },
                { icon: '🎯', title: 'Une réaction nouvelle', desc: 'L\'hypnose associe à la situation une réponse de calme, qui prend peu à peu la place de l\'ancienne alarme.' },
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
                  La séance phobies & peurs (1h · 80€)
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
                  Ce qu'en disent ceux qu'il a accompagnés
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
                  Vos questions sur l'hypnose et les phobies
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
                Prêt à dépasser votre peur ?
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

      <Script id="schema-phobies" type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Jean-Charles Bernard — Hypnothérapeute",
          "description": "Hypnose pour les phobies et les peurs à Boussy-Saint-Antoine (91). Hypnothérapeute certifié IFHE, 15 ans d'expérience.",
          "url": "https://jean-charles-bernard.fr/phobies",
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
