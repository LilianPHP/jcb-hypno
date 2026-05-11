'use client';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import { trackPhoneClick, trackExternalBookingClick } from '@/lib/analytics';

const links = [
  { label: 'Mon approche', href: '#approche' },
  { label: 'Séances & tarifs', href: '#services' },
  { label: 'Témoignages', href: '#temoignages' },
  { label: 'À propos', href: '#about' },
  { label: 'Prendre RDV', href: '#rdv' },
];

export default function FooterSection() {
  return (
    <footer className="bg-slate-950 text-white/60">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div>
              <div className="font-serif text-white text-lg font-bold">Jean-Charles Bernard</div>
              <div className="text-indigo-400 text-xs tracking-widest uppercase mt-0.5">Hypnose · Live Your Dreams</div>
            </div>
            <p className="text-sm leading-relaxed">
              Hypnothérapeute certifié IFHE depuis 2005. Accompagnement bienveillant et professionnel
              à Boussy-Saint-Antoine et Paris.
            </p>
            <div className="flex items-center gap-2 mt-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#F59E0B"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              ))}
              <span className="text-white/50 text-xs ml-1">5,0 · 38 avis</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Navigation</div>
            <ul className="space-y-2">
              {links.map(l => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm hover:text-indigo-400 transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Contact</div>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+33660811295"
                  onClick={() => trackPhoneClick('footer')}
                  className="flex items-center gap-2 text-sm hover:text-white transition-colors"
                >
                  <Phone size={13} className="text-indigo-400" />
                  06 60 81 12 95
                </a>
              </li>
              <li>
                <a
                  href="https://hypnose-liveyourdreams.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackExternalBookingClick('other', 'footer')}
                  className="flex items-center gap-2 text-sm hover:text-white transition-colors"
                >
                  <ExternalLink size={13} className="text-indigo-400" />
                  hypnose-liveyourdreams.fr
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <MapPin size={13} className="text-indigo-400 mt-0.5 flex-shrink-0" />
                <span>4 Allée Les Marronniers<br />91800 Boussy-Saint-Antoine</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <span>© {new Date().getFullYear()} Jean-Charles Bernard · Tous droits réservés</span>
          <a
            href="https://hypnose-liveyourdreams.fr"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackExternalBookingClick('other', 'footer_bottom')}
            className="hover:text-white/60 transition-colors"
          >
            hypnose-liveyourdreams.fr
          </a>
        </div>
      </div>
    </footer>
  );
}
