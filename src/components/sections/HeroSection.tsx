'use client';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import BlurText from '@/components/effects/BlurText';
import Magnet from '@/components/effects/Magnet';
import { ArrowRight, Star } from 'lucide-react';
import portrait from '../../../public/images/jc-portrait.jpg';

const Silk = dynamic(() => import('@/components/effects/Silk'), { ssr: false });

export default function HeroSection() {
  const [imgError, setImgError] = useState(false);
  // Le fond WebGL (three.js) n'est chargé qu'une fois la page au repos : il ne
  // pèse plus sur le chargement ni sur l'interactivité. Rien pour
  // prefers-reduced-motion : le dégradé seul suffit.
  const [showSilk, setShowSilk] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const start = () => setShowSilk(true);
    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(start, { timeout: 3000 });
      return () => window.cancelIdleCallback(id);
    }
    const id = setTimeout(start, 1500);
    return () => clearTimeout(id);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0f0c29]">
      {/* Silk WebGL background */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${showSilk ? 'opacity-80' : 'opacity-0'}`}>
        {showSilk && <Silk color="#312e81" speed={3} scale={1.2} noiseIntensity={1.2} rotation={0.3} />}
      </div>

      {/* Indigo gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/70 via-transparent to-indigo-900/40" />


      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left — text */}
        <div className="space-y-8">
          {/* Un seul H1 : le badge porte le métier et la ville, le titre porte la promesse.
              Balises en span, seul contenu autorisé dans un titre. `font-sans` sur le badge :
              la base CSS passe tous les h1 en Lora, le badge doit rester en Raleway.
              `max-sm:leading-[1.65]` : même raison, le h1 impose line-height 1.25 ; au-dessus de sm,
              text-xs fixe déjà son interligne. */}
          <h1 className="flex flex-col gap-8">
            <span className="self-start font-sans max-sm:leading-[1.65] inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 font-semibold text-indigo-200 uppercase text-[11px] tracking-[0.03em] sm:text-xs sm:tracking-wider xl:text-[11px] xl:tracking-[0.02em] xl:whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
              Hypnothérapeute certifié IFHE · Boussy-Saint-Antoine (91) · Cabinet ou à distance
            </span>{' '}
            {/* espace ci-dessus : sépare le badge du titre dans le texte extrait ; invisible en flex */}
            <BlurText
              as="span"
              text="Libérez votre potentiel par l'hypnose"
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
              delay={80}
              direction="bottom"
              stepDuration={0.5}
            />
          </h1>

          <p className="text-white/70 text-lg leading-relaxed max-w-xl">
            En 15 ans de pratique, Jean-Charles Bernard a accompagné des centaines de personnes
            à se libérer du tabac, surmonter leurs peurs, retrouver confiance et réécrire leur histoire.
          </p>

          {/* Google rating */}
          <div className="flex items-center gap-3">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-amber-400 text-amber-400" />)}
            </div>
            <span className="text-white/90 text-sm font-semibold">5,0</span>
            <span className="text-white/50 text-sm">· 39 avis Google vérifiés</span>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Magnet strength={30}>
              <a
                href="#rdv"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3.5 rounded-full transition-colors shadow-lg shadow-indigo-900/40"
              >
                Prendre RDV
                <ArrowRight size={16} />
              </a>
            </Magnet>
            <a
              href="#approche"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3.5 rounded-full backdrop-blur-sm border border-white/20 transition-colors"
            >
              Découvrir l'approche
            </a>
          </div>
        </div>

        {/* Right — photo card */}
        <div className="hidden lg:flex justify-center">
          <div className="relative w-80 h-96">
            {/* Glow ring */}
            <div className="absolute -inset-4 bg-indigo-500/20 rounded-3xl blur-2xl" />
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
              {imgError ? (
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-800 to-indigo-950 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center text-4xl font-serif font-bold text-white/80">JC</div>
                </div>
              ) : (
                <Image
                  src={portrait}
                  alt="Jean-Charles Bernard, hypnothérapeute"
                  fill
                  sizes="320px"
                  loading="eager"
                  fetchPriority="high"
                  className="object-cover object-top"
                  onError={() => setImgError(true)}
                />
              )}
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-xl px-4 py-3 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
              <span className="text-xs font-bold text-slate-800">80€ · 1h</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span className="text-xs uppercase tracking-widest">Découvrir</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
