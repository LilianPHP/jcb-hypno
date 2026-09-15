'use client';
import SpotlightCard from '@/components/effects/SpotlightCard';
import FadeContent from '@/components/effects/FadeContent';
import { Cigarette, Brain, Utensils, Moon, AlertTriangle, RefreshCw, ShieldCheck, Users, ArrowRight } from 'lucide-react';

// Bloc unique des motifs de consultation : 8 cartes, chacune vers sa page dédiée.
// Grille de 4 — 4 + 4 en desktop, 2 × 4 en tablette : jamais de rangée incomplète.
// Même ordre que le menu et le footer.
const problems = [
  { icon: Cigarette, title: 'Tabac & Addictions', href: '/arret-tabac', desc: 'Arrêter de fumer, se libérer de comportements compulsifs et indésirables.' },
  { icon: Brain, title: 'Stress & Anxiété', href: '/stress-anxiete', desc: 'Tensions chroniques, ruminations, sentiment d\'être dépassé par les événements.' },
  { icon: Utensils, title: 'Poids & Alimentation', href: '/poids-alimentation', desc: 'Mincir durablement en agissant sur les habitudes alimentaires inconscientes.' },
  { icon: Moon, title: 'Sommeil & Insomnie', href: '/sommeil-insomnie', desc: 'Difficultés d\'endormissement, réveils nocturnes, mental qui tourne la nuit.' },
  { icon: AlertTriangle, title: 'Phobies & Peurs', href: '/phobies', desc: 'Peur de l\'avion, des araignées, des espaces clos, du regard des autres.' },
  { icon: RefreshCw, title: 'Schémas répétitifs', href: '/schemas-repetitifs', desc: 'Comportements ou pensées qui reviennent en boucle et que vous souhaitez changer.' },
  { icon: ShieldCheck, title: 'Traumatismes', href: '/traumatismes', desc: 'Choc émotionnel, accident, deuil, événement resté en travers.' },
  { icon: Users, title: 'Enfants & Adolescents', href: '/enfants-adolescents', desc: 'Très réceptifs à l\'hypnose — imagination et sensibilité apportent des résultats rapides.' },
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
              dire au revoir à la cigarette, mincir et éliminer vos peurs. Chaque motif a sa page
              dédiée, avec le déroulé de la séance et les réponses aux questions les plus posées.
            </p>
          </div>
        </FadeContent>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {problems.map((p, i) => (
            <FadeContent key={p.title} delay={i * 0.06}>
              <a href={p.href} className="group block h-full">
                <SpotlightCard
                  spotlightColor="rgba(99, 102, 241, 0.2)"
                  className="h-full flex flex-col p-6 rounded-2xl border border-white/8 bg-white/5 hover:border-indigo-500/40 transition-colors duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-indigo-500/20 flex items-center justify-center mb-4">
                    <p.icon size={20} className="text-indigo-300" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{p.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed flex-1">{p.desc}</p>
                  <span className="self-start mt-4 inline-flex items-center gap-1.5 text-indigo-300 text-sm font-semibold">
                    En savoir plus
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </SpotlightCard>
              </a>
            </FadeContent>
          ))}
        </div>
      </div>
    </section>
  );
}
