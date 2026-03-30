'use client';
import TiltedCard from '@/components/effects/TiltedCard';
import FadeContent from '@/components/effects/FadeContent';
import CountUp from '@/components/effects/CountUp';
import { Star } from 'lucide-react';

const reviews = [
  {
    initial: 'T',
    name: 'Thomas Bonnet',
    detail: 'Stop tabac · Google Maps',
    text: '"Gros fumeur depuis plus de 20 ans et plusieurs tentatives d\'arrêt. Une séance avec Jean Charles : plus d\'envie, un oubli total de la cigarette et ce depuis 2 ans. Merciiiii !"',
    color: 'bg-indigo-600',
  },
  {
    initial: 'S',
    name: 'Sha-Sha PEKOZ',
    detail: 'Stop tabac · Google Maps',
    text: '"Ce fût magique ! Je fumais beaucoup et venais d\'apprendre que j\'attendais un bébé. En une séance tout était résolu et je n\'ai pas fumé une seule cigarette depuis."',
    color: 'bg-violet-600',
  },
  {
    initial: 'A',
    name: 'Asty Garcia',
    detail: 'Lâcher-prise · juil. 2025',
    text: '"Après une 1ère séance qui m\'a libérée d\'un mal qui me rongeait depuis des décennies, j\'ai renouvelé pour lâcher-prise, respirer et mieux vivre. D\'une réelle aide."',
    color: 'bg-indigo-500',
  },
  {
    initial: 'L',
    name: 'Lorena Simoni',
    detail: 'Bien-être · nov. 2025',
    text: '"Séance miraculeuse qui m\'a fait beaucoup de bien. Très bienveillant et à l\'écoute, sait nous mettre en confiance."',
    color: 'bg-emerald-600',
  },
  {
    initial: 'S',
    name: 'Sandra Luce',
    detail: 'Blocages · Google Maps',
    text: '"Grâce à lui j\'ai réussi à faire sauter des blocages, à nettoyer des fantômes du passé et surtout à avancer et aller au bout de mes rêves, car ils connaissent le chemin."',
    color: 'bg-teal-600',
  },
  {
    initial: 'D',
    name: 'Delphine RENARD',
    detail: 'Confiance en soi · Google Maps',
    text: '"Son accompagnement ultra efficace m\'a sortie de situations difficiles, m\'a permis de prendre confiance en moi, de grandir, d\'évoluer et m\'épanouir. Un grand merci."',
    color: 'bg-indigo-700',
  },
];

const stats = [
  { value: 15, suffix: '+', label: 'ans de pratique' },
  { value: 6, suffix: '', label: 'méthodes maîtrisées' },
  { value: 38, suffix: '', label: 'avis 5 étoiles' },
  { value: 70, suffix: '€', label: 'la séance de 1h' },
];

export default function TestimonialsSection() {
  return (
    <section id="temoignages" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <FadeContent>
          <div className="text-center mb-16">
            <span className="text-indigo-600 text-xs font-bold uppercase tracking-widest">Témoignages</span>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-slate-900 mt-3 mb-4">
              Ils ont franchi le pas
            </h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              Ce que disent les personnes accompagnées par Jean-Charles.
            </p>
            {/* Google badge */}
            <div className="inline-flex items-center gap-3 mt-6 bg-slate-50 border border-slate-200 rounded-full px-5 py-2.5">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} size={13} className="fill-amber-400 text-amber-400" />)}
              </div>
              <span className="font-bold text-slate-800 text-sm">5,0</span>
              <span className="text-slate-400 text-sm">· 38 avis</span>
              <a
                href="https://www.google.com/maps/place/Jean-charles+BERNARD+hypnotherapeute/@48.6979254,2.5383264,17z/data=!3m1!4b1!4m6!3m5!1s0x47e6090c5ea6e751:0x7466afd974632979!8m2!3d48.6979219!4d2.5409013!16s%2Fg%2F11j2zdm8ld?entry=ttu&g_ep=EgoyMDI2MDMyNC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 text-xs font-semibold hover:underline"
              >
                Voir tous
              </a>
            </div>
          </div>
        </FadeContent>

        {/* TiltedCard grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {reviews.map((r, i) => (
            <FadeContent key={r.name} delay={i * 0.08}>
              <TiltedCard captionText={r.name} rotateAmplitude={10} scaleOnHover={1.04} containerHeight="auto">
                <div className="w-full h-full bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col gap-4">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => <Star key={i} size={13} className="fill-amber-400 text-amber-400" />)}
                  </div>
                  <p className="font-serif italic text-slate-700 text-[0.9rem] leading-relaxed flex-1">{r.text}</p>
                  <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                    <div className={`w-9 h-9 rounded-full ${r.color} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}>
                      {r.initial}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800 text-sm">{r.name}</div>
                      <div className="text-slate-400 text-xs">{r.detail}</div>
                    </div>
                  </div>
                </div>
              </TiltedCard>
            </FadeContent>
          ))}
        </div>

        {/* Stats bar */}
        <FadeContent>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-slate-100 rounded-2xl overflow-hidden">
            {stats.map((s) => (
              <div key={s.label} className="bg-white text-center py-10 px-6">
                <div className="font-serif text-4xl font-bold text-indigo-600 mb-1">
                  <CountUp to={s.value} suffix={s.suffix} duration={2} />
                </div>
                <div className="text-slate-500 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </FadeContent>
      </div>
    </section>
  );
}
