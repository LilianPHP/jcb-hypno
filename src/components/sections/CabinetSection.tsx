'use client';
import FadeContent from '@/components/effects/FadeContent';
import { MapPin, Car, TrainFront } from 'lucide-react';

// 3 blocs → grille de 3 (1 colonne sous lg, jamais de rangée incomplète).
// Trajets relevés sur Google Maps le 2026-09-15 (voiture un mercredi à 10h,
// bus et marche depuis la gare de Boussy-Saint-Antoine).

const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Jean-Charles+Bernard+hypnoth%C3%A9rapeute+4+All%C3%A9e+Les+Marronniers+91800+Boussy-Saint-Antoine';

const acces = [
  {
    icon: MapPin,
    title: 'Adresse et horaires',
    lignes: [
      '4 Allée Les Marronniers',
      '91800 Boussy-Saint-Antoine',
      'Du lundi au samedi, de 9h à 20h',
    ],
  },
  {
    icon: Car,
    title: 'En voiture depuis Brunoy, Quincy-sous-Sénart ou Épinay-sous-Sénart',
    lignes: [
      'Comptez une dizaine de minutes selon la circulation : environ 4 km depuis Brunoy, 5 km depuis Quincy-sous-Sénart ou Épinay-sous-Sénart.',
      'Stationnement sur le parking résidentiel.',
    ],
  },
  {
    icon: TrainFront,
    title: 'En transports : RER D puis bus 4111',
    lignes: [
      "Descendez à la gare de Boussy-Saint-Antoine (RER D), puis prenez le bus 4111 direction Jean-Paul Sartre jusqu'à l'arrêt Charles de Gaulle (6 arrêts, environ 8 min). Le cabinet est ensuite à 5 min à pied.",
      'À pied depuis la gare, comptez environ 40 min (2,9 km).',
    ],
  },
];

export default function CabinetSection() {
  return (
    <section id="cabinet" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <FadeContent>
          <div className="text-center mb-14">
            <span className="text-emerald-600 text-xs font-bold uppercase tracking-widest">Le cabinet</span>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-slate-900 mt-3 mb-4">
              Le cabinet d&apos;hypnothérapie à Boussy-Saint-Antoine
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
              Jean-Charles vous reçoit dans son cabinet de Boussy-Saint-Antoine, dans l&apos;Essonne.
              Vous préférez ne pas vous déplacer ? Les séances sont aussi possibles à distance.
            </p>
          </div>
        </FadeContent>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {acces.map((a, i) => (
            <FadeContent key={a.title} delay={i * 0.1}>
              <div className="h-full bg-slate-50 rounded-2xl p-7 border border-slate-100 flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-5">
                  <a.icon size={22} className="text-emerald-600" />
                </div>
                <h3 className="font-serif text-lg font-bold text-slate-900 mb-3">{a.title}</h3>
                <div className="space-y-2 flex-1">
                  {a.lignes.map((l) => (
                    <p key={l} className="text-slate-600 text-sm leading-relaxed">{l}</p>
                  ))}
                </div>
              </div>
            </FadeContent>
          ))}
        </div>

        <FadeContent delay={0.3}>
          <div className="text-center mt-10">
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-semibold text-sm"
            >
              <MapPin size={15} />
              Ouvrir l&apos;itinéraire dans Google Maps
            </a>
          </div>
        </FadeContent>
      </div>
    </section>
  );
}
