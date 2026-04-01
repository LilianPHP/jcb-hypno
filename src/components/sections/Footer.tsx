import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0f0c29] text-white/70 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span className="font-serif text-lg font-bold text-white block">Jean-Charles Bernard</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Hypnothérapeute diplômé IFHE. 15 ans d'expérience au service de votre mieux-être,
              à Paris et Boussy-Saint-Antoine.
            </p>
            <p className="text-indigo-300 text-xs font-semibold italic mt-4 font-serif">
              "La clé de toute solution, c'est vous !"
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+33660811295"
                  className="flex items-center gap-2.5 text-sm hover:text-indigo-300 transition-colors cursor-pointer"
                >
                  <Phone size={14} className="text-indigo-400 flex-shrink-0" />
                  06 60 81 12 95
                </a>
              </li>
              <li>
                <a
                  href="mailto:jeancharlesbernard3@gmail.com"
                  className="flex items-start gap-2.5 text-sm hover:text-indigo-300 transition-colors cursor-pointer"
                >
                  <Mail size={14} className="text-indigo-400 flex-shrink-0 mt-0.5" />
                  jeancharlesbernard3@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.pagesjaunes.fr/pros/55730097#calendrier"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm hover:text-indigo-300 transition-colors cursor-pointer"
                >
                  <ExternalLink size={14} className="text-indigo-400 flex-shrink-0" />
                  Réservation en ligne
                </a>
              </li>
            </ul>
          </div>

          {/* Cabinets */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Cabinets</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="text-indigo-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-white/90 text-sm font-medium block">Paris 7ème</span>
                  <span className="text-white/50 text-xs">4 cité Négrier, 75007</span>
                  <span className="text-white/40 text-xs block">Métro L8 La Tour Maubourg</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="text-indigo-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-white/90 text-sm font-medium block">Boussy-Saint-Antoine</span>
                  <span className="text-white/50 text-xs">4 Allée les Marronniers, 91800</span>
                  <span className="text-white/40 text-xs block">RER D + Bus C</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/30">
          <span>© {year} Jean-Charles Bernard · SIRET Paris : 51265667900051</span>
          <span>Hypnose · PNL · RITMO® · Lundi – Samedi</span>
        </div>
      </div>
    </footer>
  );
}
