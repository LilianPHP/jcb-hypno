'use client';
import { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import Magnet from '@/components/effects/Magnet';
import { trackPhoneClick } from '@/lib/analytics';

const seances = [
  { label: 'Séances & tarifs', href: '/#services', desc: 'Déroulé, durée et prix' },
  { label: 'Arrêt du tabac', href: '/arret-tabac', desc: 'Arrêter de fumer par l’hypnose' },
  { label: 'Stress & anxiété', href: '/stress-anxiete', desc: 'Retrouver un calme durable' },
  { label: 'Poids & alimentation', href: '/poids-alimentation', desc: 'Grignotage et compulsions' },
  { label: 'Sommeil & insomnie', href: '/sommeil-insomnie', desc: 'Retrouver des nuits réparatrices' },
];

const linksBefore = [{ label: 'Mon approche', href: '/#approche' }];
const linksAfter = [
  { label: 'Avis', href: '/#temoignages' },
  { label: 'À propos', href: '/#about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const linkColor = scrolled ? 'text-slate-600' : 'text-white/80';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center leading-tight">
          <span className={`font-serif text-base font-bold transition-colors ${scrolled ? 'text-slate-900' : 'text-white'}`}>
            Jean-Charles Bernard
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {linksBefore.map(l => (
            <li key={l.href}>
              <a href={l.href} className={`text-sm font-medium transition-colors hover:text-indigo-500 ${linkColor}`}>
                {l.label}
              </a>
            </li>
          ))}

          {/* Séances dropdown */}
          <li className="relative group">
            <button
              className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-indigo-500 ${linkColor}`}
            >
              Séances
              <ChevronDown size={13} className="transition-transform group-hover:rotate-180" />
            </button>
            {/* invisible bridge so the pointer can travel to the panel */}
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 opacity-0 invisible translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0">
              <div className="w-72 bg-white rounded-2xl shadow-xl border border-slate-100 p-2">
                {seances.map(s => (
                  <a
                    key={s.href}
                    href={s.href}
                    className="block px-4 py-3 rounded-xl hover:bg-slate-50 transition-colors"
                  >
                    <div className="text-sm font-semibold text-slate-800">{s.label}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{s.desc}</div>
                  </a>
                ))}
              </div>
            </div>
          </li>

          {linksAfter.map(l => (
            <li key={l.href}>
              <a href={l.href} className={`text-sm font-medium transition-colors hover:text-indigo-500 ${linkColor}`}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+33660811295"
            onClick={() => trackPhoneClick('navbar')}
            className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${linkColor} hover:text-indigo-500`}
          >
            <Phone size={14} />
            06 60 81 12 95
          </a>
          <Magnet strength={25}>
            <a
              href="/#rdv"
              className="bg-indigo-600 text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-indigo-700 transition-colors"
            >
              Prendre RDV
            </a>
          </Magnet>
        </div>

        {/* Mobile burger */}
        <button
          className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-slate-700' : 'text-white'}`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 flex flex-col gap-4">
          {linksBefore.map(l => (
            <a key={l.href} href={l.href} className="text-slate-700 font-medium py-1" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}

          <div className="border-l-2 border-slate-100 pl-4 flex flex-col gap-3">
            <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">Séances</span>
            {seances.map(s => (
              <a key={s.href} href={s.href} className="text-slate-700 font-medium" onClick={() => setOpen(false)}>
                {s.label}
              </a>
            ))}
          </div>

          {linksAfter.map(l => (
            <a key={l.href} href={l.href} className="text-slate-700 font-medium py-1" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}

          <a
            href="/#rdv"
            className="bg-indigo-600 text-white text-center font-semibold px-4 py-2.5 rounded-full"
            onClick={() => setOpen(false)}
          >
            Prendre RDV
          </a>
        </div>
      )}
    </header>
  );
}
