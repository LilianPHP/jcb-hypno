'use client';
import FadeContent from '@/components/effects/FadeContent';
import { MessageSquare, Heart, Clock, Activity, Coffee, Sparkles } from 'lucide-react';

const services = [
  {
    icon: MessageSquare,
    title: 'Hypnose Ericksonienne',
    desc: 'Inspirée du psychiatre Milton Erickson, cette technique utilise l\'art du langage et une communication multi-niveaux pour accéder à l\'inconscient.',
    badge: '1h · 70€',
  },
  {
    icon: Heart,
    title: 'Hypnose Humaniste',
    desc: 'Traite les troubles psychologiques et physiologiques par la Conscience. Elle cherche à réunifier la personne en elle-même, corps et esprit.',
    badge: '1h · 70€',
  },
  {
    icon: Clock,
    title: 'Hypnose Classique',
    desc: 'L\'approche originelle, avec suggestions directes. Également pratiquée en hypnose de spectacle — une spécialité unique de Jean-Charles.',
    badge: '1h · 70€',
  },
  {
    icon: Activity,
    title: 'PNL',
    desc: 'La Programmation Neuro-Linguistique agit sur les schémas de pensée et de comportement pour créer des changements durables et positifs.',
    badge: '1h · 70€',
  },
  {
    icon: Coffee,
    title: 'Spécialisation Addictions',
    desc: 'Protocoles spécifiques pour l\'arrêt du tabac et la gestion des comportements addictifs. Certifié IFHE en hypnose et addictions (2025).',
    badge: '1h · 70€',
  },
  {
    icon: Sparkles,
    title: 'RITMO®',
    desc: 'Retraitement de l\'Information Traumatique par les Mouvements Oculaires. Stimulations visuelles et corporelles, inspiré de l\'EMDR. Certifié Lili Ruggieri (2025).',
    badge: '1h · 70€',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <FadeContent>
          <div className="text-center mb-16">
            <span className="text-emerald-600 text-xs font-bold uppercase tracking-widest">Méthodes & Séances</span>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-slate-900 mt-3 mb-4">
              Des approches qui ont fait leurs preuves
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
              Jean-Charles maîtrise 6 méthodes complémentaires pour une prise en charge sur mesure
              de votre problématique spécifique.
            </p>
          </div>
        </FadeContent>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <FadeContent key={s.title} delay={i * 0.1}>
              <div className="group h-full bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all duration-300 flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-5 group-hover:bg-emerald-100 transition-colors">
                  <s.icon size={22} className="text-emerald-600" />
                </div>
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed flex-1">{s.desc}</p>
                <div className="mt-5 pt-4 border-t border-slate-100">
                  <span className="inline-flex items-center gap-1.5 text-emerald-600 text-xs font-semibold bg-emerald-50 px-3 py-1 rounded-full">
                    <Clock size={11} />
                    {s.badge}
                  </span>
                </div>
              </div>
            </FadeContent>
          ))}
        </div>
      </div>
    </section>
  );
}
