'use client';
import FadeContent from '@/components/effects/FadeContent';
import { MapPin, Video, ClipboardList, CalendarX } from 'lucide-react';

// 2 formules → grille de 2. 2 informations pratiques → grille de 2.
// Chaque grille est complète : jamais de dernière rangée incomplète.

const formules = [
  {
    icon: MapPin,
    title: 'Séance au cabinet : 1h, 80 €',
    desc: 'Au 4 Allée Les Marronniers, à Boussy-Saint-Antoine, du lundi au samedi de 9h à 20h.',
  },
  {
    icon: Video,
    title: 'Séance à distance : 1h, 80 €',
    desc: 'Par téléphone ou en visio sur WhatsApp. Il vous faut un endroit calme, une connexion correcte et un casque ou des écouteurs.',
  },
];

const infos = [
  {
    icon: ClipboardList,
    title: 'Ce que comprend la séance',
    desc: "Un entretien pour cerner votre demande et votre objectif, puis la séance d'hypnose, adaptée à ce que vous avez partagé. Le déroulé est le même quel que soit le motif de consultation.",
  },
  {
    icon: CalendarX,
    title: 'Annulation',
    desc: "Toute annulation doit être faite au moins 24h avant la séance, via Calendly ou par téléphone. Sans annulation, le montant de la séance reste dû.",
  },
];

export default function TarifsSection() {
  return (
    <section id="tarifs" className="py-24 bg-white border-y border-slate-100">
      <div className="max-w-5xl mx-auto px-6">
        <FadeContent>
          <div className="text-center mb-14">
            <span className="text-indigo-600 text-xs font-bold uppercase tracking-widest">Tarifs</span>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-slate-900 mt-3 mb-4">
              Tarif d&apos;une séance d&apos;hypnose à Boussy-Saint-Antoine
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
              Un seul tarif, quel que soit le motif de consultation : 80 € la séance d&apos;1h,
              au cabinet comme à distance, sans abonnement.
            </p>
          </div>
        </FadeContent>

        {/* Les 2 formules — grille de 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {formules.map((f, i) => (
            <FadeContent key={f.title} delay={i * 0.1}>
              <div className="h-full bg-indigo-50/60 rounded-2xl p-7 border border-indigo-100">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-5 shadow-sm">
                  <f.icon size={22} className="text-indigo-600" />
                </div>
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">{f.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </FadeContent>
          ))}
        </div>

        {/* Les 2 informations pratiques — grille de 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {infos.map((f, i) => (
            <FadeContent key={f.title} delay={0.2 + i * 0.1}>
              <div className="h-full bg-slate-50 rounded-2xl p-7 border border-slate-100">
                <div className="flex items-center gap-3 mb-3">
                  <f.icon size={18} className="text-emerald-600 flex-shrink-0" />
                  <h3 className="font-serif text-lg font-bold text-slate-900">{f.title}</h3>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </FadeContent>
          ))}
        </div>
      </div>
    </section>
  );
}
