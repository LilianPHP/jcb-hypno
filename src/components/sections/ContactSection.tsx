'use client';
import FadeContent from '@/components/effects/FadeContent';
import Magnet from '@/components/effects/Magnet';
import { Phone, Mail, MapPin, Clock, ExternalLink, Calendar } from 'lucide-react';

const cabinets = [
  {
    city: 'Paris 7ème',
    address: '4 cité Négrier',
    postal: '75007 Paris',
    transport: 'Métro L8 La Tour Maubourg · RER C Champs-de-Mars',
    icon: '🗼',
    mapHref: 'https://maps.google.com/?q=4+cité+Négrier+75007+Paris',
  },
  {
    city: 'Boussy-Saint-Antoine',
    address: '4 Allée les Marronniers',
    postal: '91800 Boussy-Saint-Antoine',
    transport: 'RER D + Bus C',
    icon: '🌿',
    mapHref: 'https://maps.google.com/?q=4+Allée+les+Marronniers+91800+Boussy-Saint-Antoine',
  },
];

export default function ContactSection() {
  return (
    <section id="rdv" className="py-24 bg-[#4F46E5] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle at 20% 50%, #818CF8 0%, transparent 50%), radial-gradient(circle at 80% 20%, #059669 0%, transparent 40%)',
      }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        <FadeContent>
          <div className="text-center mb-16">
            <span className="text-indigo-200 text-xs font-bold uppercase tracking-widest">
              Prendre rendez-vous
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
              La clé de toute solution, c'est vous
            </h2>
            <p className="text-indigo-200 text-lg max-w-xl mx-auto leading-relaxed">
              Franchissez le pas. Une séance de 1h pour 70€, à Paris ou Boussy-Saint-Antoine,
              du lundi au samedi.
            </p>
          </div>
        </FadeContent>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — booking CTA */}
          <FadeContent>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 space-y-6">
              <div className="flex items-center gap-3 text-white/80">
                <Clock size={18} className="text-indigo-300" />
                <span className="font-medium">Lundi au Samedi · Séances de 1h</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Phone size={18} className="text-indigo-300" />
                <a
                  href="tel:+33660811295"
                  className="font-semibold text-white text-lg hover:text-indigo-200 transition-colors cursor-pointer"
                >
                  06 60 81 12 95
                </a>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Mail size={18} className="text-indigo-300" />
                <a
                  href="mailto:jeancharlesbernard3@gmail.com"
                  className="text-white hover:text-indigo-200 transition-colors cursor-pointer"
                >
                  jeancharlesbernard3@gmail.com
                </a>
              </div>

              <div className="pt-4 border-t border-white/20">
                <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full px-4 py-2 mb-6">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-emerald-300 text-sm font-semibold">70€ · la séance — tarif unique</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Magnet strength={30}>
                    <a
                      href="https://www.pagesjaunes.fr/pros/55730097#calendrier"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-white text-indigo-700 font-bold px-6 py-3.5 rounded-full hover:bg-indigo-50 transition-colors shadow-lg cursor-pointer w-full sm:w-auto"
                    >
                      <Calendar size={16} />
                      Réserver en ligne
                    </a>
                  </Magnet>
                  <a
                    href="tel:+33660811295"
                    className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white font-semibold px-6 py-3.5 rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm cursor-pointer"
                  >
                    <Phone size={16} />
                    Appeler
                  </a>
                </div>
              </div>
            </div>
          </FadeContent>

          {/* Right — cabinets */}
          <FadeContent delay={0.15}>
            <div className="space-y-5">
              {cabinets.map((c) => (
                <div
                  key={c.city}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-colors cursor-default"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                        <MapPin size={20} className="text-indigo-200" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-lg font-serif mb-1">{c.city}</h3>
                        <p className="text-indigo-200 text-sm">{c.address}</p>
                        <p className="text-indigo-200 text-sm">{c.postal}</p>
                        <p className="text-white/50 text-xs mt-2">{c.transport}</p>
                      </div>
                    </div>
                    <a
                      href={c.mapHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
                      aria-label={`Voir ${c.city} sur la carte`}
                    >
                      <ExternalLink size={14} className="text-indigo-300" />
                    </a>
                  </div>
                </div>
              ))}

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <p className="text-white/70 text-sm leading-relaxed italic font-serif">
                  "Le but de la première séance est de déterminer au mieux votre objectif.
                  Vous restez conscient de tout ce qui se passe. Votre participation
                  et votre motivation sont les clefs d'une réussite rapide !"
                </p>
                <p className="text-indigo-300 text-xs font-semibold mt-3">— Jean-Charles Bernard</p>
              </div>
            </div>
          </FadeContent>
        </div>
      </div>
    </section>
  );
}
