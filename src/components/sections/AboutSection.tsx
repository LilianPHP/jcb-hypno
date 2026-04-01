'use client';
import FadeContent from '@/components/effects/FadeContent';
import { CheckCircle2, Quote } from 'lucide-react';

const certifications = [
  'Maître Praticien Hypnose Ericksonienne & PNL — IFHE (2005/2007)',
  'Praticien Hypnose Classique — IFHE (2014)',
  'Praticien Hypnose Humaniste & TSA — IFHE (2018)',
  'Spécialisation Hypnose et Addictions — IFHE (2025)',
  'Certifié RITMO® — Lili Ruggieri (2025)',
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — photo */}
          <FadeContent className="relative">
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Background blob */}
              <div className="absolute -inset-8 bg-indigo-100 rounded-3xl -rotate-3" />
              <div className="absolute -inset-8 bg-emerald-50 rounded-3xl rotate-2" />
              {/* Photo */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[3/4] bg-indigo-100">
                <img
                  src="/images/photo_bureau.jpg"
                  alt="Cabinet de Jean-Charles Bernard"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-transparent" />
              </div>
              {/* Quote badge */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-lg p-4 max-w-[220px]">
                <Quote size={16} className="text-indigo-400 mb-1" />
                <p className="text-slate-700 text-xs leading-relaxed font-medium italic">
                  "Permettez-vous de pousser la porte de votre inconscient."
                </p>
                <p className="text-indigo-600 text-xs font-bold mt-1">— Jean-Charles Bernard</p>
              </div>
            </div>
          </FadeContent>

          {/* Right — bio */}
          <FadeContent delay={0.2}>
            <span className="text-indigo-600 text-xs font-bold uppercase tracking-widest">À propos</span>
            <h2 className="font-serif text-4xl font-bold text-slate-900 mt-3 mb-6 leading-tight">
              Jean-Charles Bernard
            </h2>
            <p className="text-indigo-600 font-semibold mb-4">
              Hypnothérapeute diplômé IFHE · Paris & Boussy-Saint-Antoine
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Je pratique l'hypnose Ericksonienne et Humaniste depuis plus de 15 ans, formé à l'IFHE
              (Institut Français d'Hypnose Ericksonienne) fondé par Olivier Lockert et Patricia d'Angeli.
              L'hypnothérapeute vous accompagne sur le chemin qu'il a lui-même déjà parcouru.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Je reçois dans deux cabinets : à <strong>Boussy-Saint-Antoine</strong> (91)
              et à <strong>Paris</strong>. Les séances durent 1h pour 70€.
            </p>

            {/* Certifications */}
            <div className="space-y-3">
              {certifications.map((cert) => (
                <div key={cert} className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600 text-sm">{cert}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex gap-4">
              <a
                href="tel:+33660811295"
                className="flex items-center gap-2 bg-indigo-600 text-white font-semibold px-5 py-2.5 rounded-full hover:bg-indigo-700 transition-colors text-sm"
              >
                06 60 81 12 95
              </a>
              <a
                href="https://jean-charles-bernard.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-slate-200 text-slate-700 font-semibold px-5 py-2.5 rounded-full hover:border-indigo-300 transition-colors text-sm"
              >
                Site officiel
              </a>
            </div>
          </FadeContent>
        </div>
      </div>
    </section>
  );
}
