'use client';
import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Magnet from '@/components/effects/Magnet';

const links = [
  { label: 'Mon approche', href: '#approche' },
  { label: 'Séances', href: '#services' },
  { label: 'Avis', href: '#temoignages' },
  { label: 'À propos', href: '#about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex flex-col leading-tight">
          <span className={`font-serif text-base font-bold transition-colors ${scrolled ? 'text-slate-900' : 'text-white'}`}>
            Jean-Charles Bernard
          </span>
          <span className={`text-[10px] tracking-widest uppercase transition-colors ${scrolled ? 'text-indigo-600' : 'text-indigo-300'}`}>
            Hypnothérapeute · Paris & Boussy
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-sm font-medium transition-colors hover:text-indigo-500 ${scrolled ? 'text-slate-600' : 'text-white/80'}`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+33660811295"
            className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${scrolled ? 'text-slate-600' : 'text-white/80'} hover:text-indigo-500`}
          >
            <Phone size={14} />
            06 60 81 12 95
          </a>
          <Magnet strength={25}>
            <a
              href="#rdv"
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
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="text-slate-700 font-medium py-1"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#rdv"
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
