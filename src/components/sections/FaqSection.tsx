'use client';
import Link from 'next/link';
import FadeContent from '@/components/effects/FadeContent';
import { FAQ_ACCUEIL } from '@/lib/faq-accueil';
import { SERVICES } from '@/lib/schema';

export default function FaqSection() {
  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-6">
        <FadeContent>
          <div className="text-center mb-12">
            <span className="text-indigo-600 text-xs font-bold uppercase tracking-widest">FAQ</span>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-slate-900 mt-3">
              Questions fréquentes sur l&apos;hypnothérapie
            </h2>
          </div>
        </FadeContent>

        <div className="space-y-4">
          {FAQ_ACCUEIL.map(({ q, a, liensSpecialites }, i) => (
            <FadeContent key={q} delay={i * 0.06}>
              <details className="group bg-white border border-slate-100 rounded-2xl p-6 cursor-pointer">
                {/* Un titre dans <summary> est valide : la question reste un H3. */}
                <summary className="list-none flex justify-between items-center gap-4">
                  <h3 className="font-sans font-semibold text-[#1E1B4B] text-base">{q}</h3>
                  <svg className="flex-shrink-0 transition-transform group-open:rotate-180" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
                </summary>
                <p className="mt-4 text-slate-500 text-sm leading-relaxed">{a}</p>
                {liensSpecialites && (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {SERVICES.map(({ path, name }) => (
                      <li key={path}>
                        <Link
                          href={path}
                          className="inline-block text-xs font-medium text-indigo-700 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-full transition-colors"
                        >
                          {name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </details>
            </FadeContent>
          ))}
        </div>
      </div>
    </section>
  );
}
