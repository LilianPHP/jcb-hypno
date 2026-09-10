'use client';
import FadeContent from '@/components/effects/FadeContent';
import { MessageSquare, Heart, Clock, Activity, Coffee, Sparkles, Cigarette, Brain, Utensils, Moon, ShieldCheck, HeartHandshake, ArrowRight } from 'lucide-react';

const motifs = [
  {
    icon: Cigarette,
    title: 'Arrêt du tabac',
    desc: 'Se libérer définitivement de la cigarette, sans substitut ni prise de poids.',
    href: '/arret-tabac',
  },
  {
    icon: Brain,
    title: 'Stress & anxiété',
    desc: 'Apaiser un mental qui ne s\'arrête jamais et retrouver un calme durable.',
    href: '/stress-anxiete',
  },
  {
    icon: Utensils,
    title: 'Poids & alimentation',
    desc: 'Sortir du grignotage et des compulsions, sans régime ni privation.',
    href: '/poids-alimentation',
  },
  {
    icon: Moon,
    title: 'Sommeil & insomnie',
    desc: 'Retrouver l\'endormissement et des nuits enfin réparatrices.',
    href: '/sommeil-insomnie',
  },
  {
    icon: ShieldCheck,
    title: 'Traumatismes',
    desc: 'Apaiser un choc, un deuil ou un passé qui pèse encore, grâce au RITMO®.',
    href: '/traumatismes',
  },
];

const services = [
  {
    icon: MessageSquare,
    title: 'Hypnose Ericksonienne',
    desc: 'Inspirée du psychiatre Milton Erickson, cette technique utilise l\'art du langage et une communication multi-niveaux pour accéder à l\'inconscient.',
    badge: '1h · 80€',
  },
  {
    icon: Heart,
    title: 'Hypnose Humaniste',
    desc: 'Traite les troubles psychologiques et physiologiques par la Conscience. Elle cherche à réunifier la personne en elle-même, corps et esprit.',
    badge: '1h · 80€',
  },
  {
    icon: Clock,
    title: 'Hypnose Classique',
    desc: 'L\'approche originelle, avec suggestions directes. Également pratiquée en hypnose de spectacle — une spécialité unique de Jean-Charles.',
    badge: '1h · 80€',
  },
  {
    icon: Activity,
    title: 'PNL',
    desc: 'La Programmation Neuro-Linguistique agit sur les schémas de pensée et de comportement pour créer des changements durables et positifs.',
    badge: '1h · 80€',
  },
  {
    icon: Coffee,
    title: 'Spécialisation Addictions',
    desc: 'Protocoles spécifiques pour l\'arrêt du tabac et la gestion des comportements addictifs. Certifié IFHE en hypnose et addictions (2025).',
    badge: '1h · 80€',
  },
  {
    icon: HeartHandshake,
    title: 'Spécialisation Traumatismes',
    desc: 'Protocole d\'hypnose dédié aux chocs émotionnels, deuils et événements marquants, sans avoir à tout raconter. Certifié IFHE en hypnose et traumatismes (2026).',
    badge: '1h · 80€',
  },
  {
    icon: Sparkles,
    title: 'RITMO®',
    desc: 'Retraitement de l\'Information Traumatique par les Mouvements Oculaires. Stimulations visuelles et corporelles, inspiré de l\'EMDR. Certifié Lili Ruggieri (2025).',
    badge: '1h · 80€',
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
              Jean-Charles maîtrise 7 méthodes et spécialisations complémentaires pour une prise en charge sur mesure
              de votre problématique spécifique.
            </p>
          </div>
        </FadeContent>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:[&>*:last-child]:col-start-2">
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

        {/* Motifs de consultation */}
        <div className="mt-20">
          <FadeContent>
            <div className="text-center mb-10">
              <span className="text-indigo-600 text-xs font-bold uppercase tracking-widest">Motifs de consultation</span>
              <h3 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mt-3 mb-4">
                Pour quoi consulter&nbsp;?
              </h3>
              <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
                Les cinq demandes les plus fréquentes au cabinet. Chacune a sa page dédiée,
                avec le déroulé de la séance et les réponses aux questions les plus posées.
              </p>
            </div>
          </FadeContent>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {motifs.map((m, i) => (
              <FadeContent key={m.href} delay={i * 0.1}>
                <a
                  href={m.href}
                  className="group h-full bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all duration-300 flex flex-col"
                >
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center mb-5 group-hover:bg-indigo-100 transition-colors">
                    <m.icon size={22} className="text-indigo-600" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-slate-900 mb-2">{m.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed flex-1">{m.desc}</p>
                  <span className="mt-5 pt-4 border-t border-slate-100 inline-flex items-center gap-1.5 text-indigo-600 text-sm font-semibold">
                    En savoir plus
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              </FadeContent>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
