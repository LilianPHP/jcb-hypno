'use client';
import FadeContent from '@/components/effects/FadeContent';
import { MessageSquare, Heart, Clock, Activity, Coffee, Sparkles, HeartHandshake } from 'lucide-react';

// 4 méthodes → grille de 4. 3 spécialisations → grille de 3.
// Les motifs de consultation sont dans ProblemsSection (bloc unique de 8).
// Chaque grille est complète : jamais de dernière rangée incomplète.

const methodes = [
  {
    icon: MessageSquare,
    title: 'Hypnose Ericksonienne',
    desc: 'Inspirée du psychiatre Milton Erickson, cette technique utilise l\'art du langage et une communication multi-niveaux pour accéder à l\'inconscient.',
  },
  {
    icon: Heart,
    title: 'Hypnose Humaniste',
    desc: 'Traite les troubles psychologiques et physiologiques par la Conscience. Elle cherche à réunifier la personne en elle-même, corps et esprit.',
  },
  {
    icon: Clock,
    title: 'Hypnose Classique',
    desc: 'L\'approche originelle, avec suggestions directes. Également pratiquée en hypnose de spectacle — une spécialité unique de Jean-Charles.',
  },
  {
    icon: Activity,
    title: 'PNL',
    desc: 'La Programmation Neuro-Linguistique agit sur les schémas de pensée et de comportement pour créer des changements durables et positifs.',
  },
];

const specialisations = [
  {
    icon: Coffee,
    title: 'Spécialisation Addictions',
    desc: 'Protocoles spécifiques pour l\'arrêt du tabac et la gestion des comportements addictifs.',
    certif: 'Certifié IFHE — 2025',
  },
  {
    icon: HeartHandshake,
    title: 'Spécialisation Traumatismes',
    desc: 'Protocole d\'hypnose dédié aux chocs émotionnels, deuils et événements marquants, sans avoir à tout raconter.',
    certif: 'Certifié IFHE — 2026',
  },
  {
    icon: Sparkles,
    title: 'RITMO®',
    desc: 'Retraitement de l\'Information Traumatique par les Mouvements Oculaires. Stimulations visuelles et corporelles, inspiré de l\'EMDR.',
    certif: 'Certifié Lili Ruggieri — 2025',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <FadeContent>
          <div className="text-center mb-14">
            <span className="text-emerald-600 text-xs font-bold uppercase tracking-widest">Méthodes & Séances</span>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-slate-900 mt-3 mb-4">
              Des approches qui ont fait leurs preuves
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
              Quatre méthodes d&apos;hypnose et trois spécialisations complémentaires,
              pour une prise en charge sur mesure de votre problématique.
            </p>
          </div>
        </FadeContent>

        {/* Les 4 méthodes — grille de 4 */}
        <FadeContent>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-slate-400 text-xs font-bold uppercase tracking-widest whitespace-nowrap">Les méthodes</span>
            <span className="h-px bg-slate-200 flex-1" />
          </div>
        </FadeContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {methodes.map((s, i) => (
            <FadeContent key={s.title} delay={i * 0.1}>
              <div className="group h-full bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all duration-300 flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-5 group-hover:bg-emerald-100 transition-colors">
                  <s.icon size={22} className="text-emerald-600" />
                </div>
                <h3 className="font-serif text-lg font-bold text-slate-900 mb-3">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed flex-1">{s.desc}</p>
                <div className="mt-5 pt-4 border-t border-slate-100">
                  <span className="inline-flex items-center gap-1.5 text-emerald-600 text-xs font-semibold bg-emerald-50 px-3 py-1 rounded-full">
                    <Clock size={11} />
                    1h · 80€
                  </span>
                </div>
              </div>
            </FadeContent>
          ))}
        </div>

        {/* Les 3 spécialisations — grille de 3 */}
        <FadeContent>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-slate-400 text-xs font-bold uppercase tracking-widest whitespace-nowrap">Spécialisations & techniques</span>
            <span className="h-px bg-slate-200 flex-1" />
          </div>
        </FadeContent>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {specialisations.map((s, i) => (
            <FadeContent key={s.title} delay={i * 0.1}>
              <div className="group h-full bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all duration-300 flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-5 group-hover:bg-emerald-100 transition-colors">
                  <s.icon size={22} className="text-emerald-600" />
                </div>
                <h3 className="font-serif text-lg font-bold text-slate-900 mb-3">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed flex-1">{s.desc}</p>
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-1.5 text-emerald-600 text-xs font-semibold bg-emerald-50 px-3 py-1 rounded-full">
                    <Clock size={11} />
                    1h · 80€
                  </span>
                  <span className="text-slate-400 text-xs font-medium text-right">{s.certif}</span>
                </div>
              </div>
            </FadeContent>
          ))}
        </div>
      </div>
    </section>
  );
}
