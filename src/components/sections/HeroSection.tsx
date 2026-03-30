'use client';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import BlurText from '@/components/effects/BlurText';
import Magnet from '@/components/effects/Magnet';
import { ArrowRight, Star } from 'lucide-react';

const Silk = dynamic(() => import('@/components/effects/Silk'), { ssr: false });

export default function HeroSection() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0f0c29]">
      {/* Silk WebGL background */}
      <div className="absolute inset-0 opacity-80">
        <Silk color="#312e81" speed={3} scale={1.2} noiseIntensity={1.2} rotation={0.3} />
      </div>

      {/* Indigo gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/70 via-transparent to-indigo-900/40" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left — text */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-xs font-semibold text-indigo-200 tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Hypnothérapeute certifié IFHE · Boussy-Saint-Antoine & Paris
          </div>

          <BlurText
            text="Libérez votre potentiel par l'hypnose"
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
            delay={80}
            direction="bottom"
            stepDuration={0.5}
          />

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
            <span className="text-white/50 text-sm">· 38 avis Google vérifiés</span>
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
                <img
                  src="/images/jc-portrait.jpg"
                  alt="Jean-Charles Bernard, Hypnothérapeute"
                  className="w-full h-full object-cover object-top"
                  onError={() => setImgError(true)}
                />
              )}
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-xl px-4 py-3 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
              <span className="text-xs font-bold text-slate-800">70€ · 1h</span>
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
