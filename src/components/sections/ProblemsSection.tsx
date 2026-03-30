'use client';
import SpotlightCard from '@/components/effects/SpotlightCard';
import FadeContent from '@/components/effects/FadeContent';
import { Activity, Coffee, User, AlertTriangle, RefreshCw, Users } from 'lucide-react';

const problems = [
  {
    icon: Activity,
    title: 'Stress & Anxiété',
    desc: 'Tensions chroniques, ruminations, sentiment d\'être dépassé par les événements.',
    color: 'rgba(99, 102, 241, 0.2)',
  },
  {
    icon: Coffee,
    title: 'Tabac & Addictions',
    desc: 'Arrêter de fumer, se libérer de comportements compulsifs et indésirables.',
    color: 'rgba(99, 102, 241, 0.2)',
  },
  {
    icon: User,
    title: 'Poids & Alimentation',
    desc: 'Mincir durablement en agissant sur les habitudes alimentaires inconscientes.',
    color: 'rgba(99, 102, 241, 0.2)',
  },
  {
    icon: AlertTriangle,
    title: 'Phobies & Peurs',
    desc: 'Peur de l\'avion, des araignées, des espaces clos, du regard des autres.',
    color: 'rgba(99, 102, 241, 0.2)',
  },
  {
    icon: RefreshCw,
    title: 'Schémas répétitifs',
    desc: 'Comportements ou pensées qui reviennent en boucle et que vous souhaitez changer.',
    color: 'rgba(99, 102, 241, 0.2)',
  },
  {
    icon: Users,
    title: 'Enfants & Adolescents',
    desc: 'Très réceptifs à l\'hypnose — imagination et sensibilité apportent des résultats rapides.',
    color: 'rgba(99, 102, 241, 0.2)',
  },
];

export default function ProblemsSection() {
  return (
    <section id="approche" className="py-24 bg-[#0f0c29] relative overflow-hidden">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle, #6366f1 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }} />

      <div className="relative max-w-7xl mx-auto px-6">
        <FadeContent>
          <div className="text-center mb-16">
            <span className="text-indigo-400 text-xs font-bold uppercase tracking-widest">Êtes-vous concerné ?</span>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
              Ces difficultés freinent votre vie
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
              Vous pouvez réduire votre stress, faire disparaître des schémas répétitifs,
              dire au revoir à la cigarette, mincir et éliminer vos peurs.
            </p>
          </div>
        </FadeContent>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((p, i) => (
            <FadeContent key={p.title} delay={i * 0.08}>
              <SpotlightCard
                spotlightColor={p.color}
                className="h-full p-6 rounded-2xl border border-white/8 bg-white/5 hover:border-indigo-500/40 transition-colors duration-300 cursor-default"
              >
                <div className="w-11 h-11 rounded-xl bg-indigo-500/20 flex items-center justify-center mb-4">
                  <p.icon size={20} className="text-indigo-300" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{p.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{p.desc}</p>
              </SpotlightCard>
            </FadeContent>
          ))}
        </div>
      </div>
    </section>
  );
}
