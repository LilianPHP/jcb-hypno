'use client';
import { useEffect } from 'react';
import Script from 'next/script';
import FadeContent from '@/components/effects/FadeContent';
import Magnet from '@/components/effects/Magnet';
import { Phone, Mail, MapPin, Clock, Video } from 'lucide-react';

// ⚠️ Remplacer par l'URL Calendly de Jean-Charles une fois le compte créé
const CALENDLY_URL = 'https://calendly.com/jeancharlesbernard3/seance-1h';

const contacts = [
  { icon: Phone, label: 'Téléphone', value: '06 60 81 12 95', href: 'tel:+33660811295' },
  { icon: Mail, label: 'Email', value: 'jeancharlesbernard3@gmail.com', href: 'mailto:jeancharlesbernard3@gmail.com' },
  { icon: MapPin, label: 'Cabinets', value: 'Boussy-Saint-Antoine (91) · Paris', href: null },
  { icon: Video, label: 'À distance', value: 'Séance en visio, partout en France', href: null },
  { icon: Clock, label: 'Horaires', value: 'Lun–Sam · 9h–20h', href: null },
];

export default function BookingSection() {
  return (
    <section id="rdv" className="py-24 bg-[#0f0c29] relative overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'radial-gradient(circle, #6366f1 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }} />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <FadeContent>
          <div className="text-center mb-14">
            <span className="text-indigo-400 text-xs font-bold uppercase tracking-widest">Rendez-vous</span>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
              Réservez votre séance
            </h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              Choisissez un créneau directement en ligne. Première séance d'1h à 70€,
              au cabinet ou en visio.
            </p>
          </div>
        </FadeContent>

        <div className="grid lg:grid-cols-3 gap-10 items-start">
          {/* Left — contact info */}
          <FadeContent delay={0.1} className="space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-5">
              {contacts.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-indigo-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={16} className="text-indigo-300" />
                  </div>
                  <div>
                    <div className="text-white/40 text-xs mb-0.5">{label}</div>
                    {href ? (
                      <a href={href} className="text-white font-medium text-sm hover:text-indigo-300 transition-colors">
                        {value}
                      </a>
                    ) : (
                      <span className="text-white font-medium text-sm">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Reassurance block */}
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-5">
              <p className="text-emerald-300 text-sm font-semibold mb-2">Ce qui vous attend</p>
              <ul className="space-y-1.5 text-white/60 text-sm">
                {[
                  'Écoute sans jugement',
                  'Séance adaptée à votre objectif',
                  'Résultats dès la 1ère séance pour beaucoup',
                  'Confidentialité totale',
                ].map(item => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-emerald-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Phone CTA fallback */}
            <Magnet strength={20}>
              <a
                href="tel:+33660811295"
                className="flex items-center justify-center gap-2 w-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold px-5 py-3 rounded-full transition-colors text-sm"
              >
                <Phone size={15} />
                Préférez-vous appeler ?
              </a>
            </Magnet>

            {/* PagesJaunes CTA */}
            <a
              href="https://www.pagesjaunes.fr/pros/55730097"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-[#FFD600] hover:bg-[#FFC200] text-[#1a1a1a] font-semibold px-5 py-3 rounded-full transition-colors text-sm"
            >
              Réserver sur PagesJaunes
            </a>
          </FadeContent>

          {/* Right — Calendly widget (spans 2 cols) */}
          <FadeContent delay={0.15} className="lg:col-span-2">
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-white">
              <div
                className="calendly-inline-widget"
                data-url={`${CALENDLY_URL}?hide_landing_page_details=1&hide_gdpr_banner=1&primary_color=4f46e5`}
                style={{ minWidth: '320px', height: '700px' }}
              />
            </div>
            {/* Séance en visio */}
            <div className="mt-4 bg-indigo-500/10 border border-indigo-500/20 rounded-xl px-5 py-4 flex gap-3 items-start">
              <span className="text-indigo-300 mt-0.5 flex-shrink-0">
                <Video size={16} />
              </span>
              <p className="text-white/50 text-xs leading-relaxed">
                <span className="text-white/70 font-semibold">Séance en visio :</span> possible pour la plupart des
                accompagnements, où que vous soyez. Indiquez-le simplement{' '}
                <span className="text-white/70">au moment de la réservation</span> ou appelez Jean-Charles :
                il vous envoie le lien de connexion avant la séance.
              </p>
            </div>

            {/* Politique d'annulation */}
            <div className="mt-4 bg-white/5 border border-white/10 rounded-xl px-5 py-4 flex gap-3 items-start">
              <span className="text-amber-400 mt-0.5 flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
              </span>
              <p className="text-white/50 text-xs leading-relaxed">
                <span className="text-white/70 font-semibold">Politique d'annulation :</span> Toute annulation doit être effectuée{' '}
                <span className="text-white/70">au moins 24h avant</span> la séance via Calendly ou par téléphone.
                En l'absence d'annulation, <span className="text-white/70">le montant de la séance reste dû.</span>
              </p>
            </div>

            <p className="text-white/30 text-xs text-center mt-3">
              Vous n'avez pas de compte Calendly ?{' '}
              <a
                href={`mailto:jeancharlesbernard3@gmail.com?subject=Demande de rendez-vous&body=Bonjour Jean-Charles,%0A%0AJe souhaite prendre rendez-vous.%0AMon nom : %0AMon téléphone : %0AMa demande : `}
                className="text-indigo-400 hover:underline"
              >
                Envoyez un email
              </a>
            </p>
          </FadeContent>
        </div>
      </div>

      {/* Load Calendly widget script */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </section>
  );
}
