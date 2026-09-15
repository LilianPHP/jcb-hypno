'use client';
import { useEffect, useState, useSyncExternalStore } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { GA4_MEASUREMENT_ID } from '@/lib/analytics';

/**
 * Consentement aux cookies de mesure d'audience (Google Analytics 4).
 *
 * Règle CNIL : aucun traceur non essentiel avant un choix explicite, et refuser
 * doit être aussi simple qu'accepter. GA4 n'est donc chargé qu'après
 * « Accepter » — pas de Consent Mode qui enverrait des requêtes sans cookies.
 *
 * Le choix est gardé 6 mois dans le navigateur, puis redemandé (durée
 * recommandée par la CNIL). Le lien « Gestion des cookies » du pied de page
 * rouvre le bandeau via l'évènement OPEN_CONSENT_EVENT.
 */

const STORAGE_KEY = 'jcb-consent';
const DUREE_MS = 1000 * 60 * 60 * 24 * 182;
export const OPEN_CONSENT_EVENT = 'jcb:open-consent';

type Choix = 'granted' | 'denied';

const CHANGE_EVENT = 'jcb:consent-change';

/** Valeur brute du stockage. `undefined` côté serveur : on ne sait pas encore. */
function lireBrut(): string | null {
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function sAbonner(onChange: () => void) {
  window.addEventListener('storage', onChange);
  window.addEventListener(CHANGE_EVENT, onChange);
  return () => {
    window.removeEventListener('storage', onChange);
    window.removeEventListener(CHANGE_EVENT, onChange);
  };
}

function interpreter(brut: string | null): Choix | null {
  if (!brut) return null;
  try {
    const { choix, date } = JSON.parse(brut) as { choix: Choix; date: number };
    if (Date.now() - date > DUREE_MS) return null;
    return choix === 'granted' || choix === 'denied' ? choix : null;
  } catch {
    return null;
  }
}

function enregistrerChoix(choix: Choix) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ choix, date: Date.now() }));
  } catch {
    // Stockage indisponible (navigation privée) : le bandeau reviendra à la prochaine visite.
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

/** Supprime les cookies _ga / _ga_* déposés par GA4, sur le domaine et ses parents. */
function supprimerCookiesGa() {
  const noms = document.cookie.split(';').map((c) => c.split('=')[0].trim()).filter((n) => n.startsWith('_ga'));
  const parties = location.hostname.split('.');
  const domaines = parties.map((_, i) => parties.slice(i).join('.')).filter((d) => d.includes('.'));
  for (const nom of noms) {
    document.cookie = `${nom}=; Max-Age=0; path=/`;
    for (const d of domaines) document.cookie = `${nom}=; Max-Age=0; path=/; domain=.${d}`;
  }
}

export default function CookieConsent() {
  const brut = useSyncExternalStore(sAbonner, lireBrut, () => undefined);
  const choix = brut === undefined ? null : interpreter(brut);
  const [rouvert, setRouvert] = useState(false);
  const ouvert = brut !== undefined && (choix === null || rouvert);

  useEffect(() => {
    const rouvrir = () => setRouvert(true);
    window.addEventListener(OPEN_CONSENT_EVENT, rouvrir);
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, rouvrir);
  }, []);

  const decider = (nouveau: Choix) => {
    const retrait = choix === 'granted' && nouveau === 'denied';
    setRouvert(false);
    enregistrerChoix(nouveau);
    if (retrait) {
      // GA4 est déjà chargé dans la page : on efface ses cookies et on recharge.
      supprimerCookiesGa();
      window.location.reload();
    }
  };

  return (
    <>
      {choix === 'granted' && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', '${GA4_MEASUREMENT_ID}', { cookie_expires: 34164000 });
            `}
          </Script>
        </>
      )}

      {ouvert && (
        <div
          role="dialog"
          aria-live="polite"
          aria-label="Gestion des cookies"
          className="fixed inset-x-0 bottom-0 z-[60] p-4 sm:p-6"
        >
          <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white shadow-2xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4">
            <p className="text-sm text-slate-600 leading-relaxed flex-1">
              Avec votre accord, ce site utilise Google Analytics pour mesurer sa fréquentation.
              Aucun cookie publicitaire.{' '}
              <Link href="/mentions-legales#cookies" className="text-indigo-600 underline underline-offset-2">
                En savoir plus
              </Link>
            </p>
            <div className="flex gap-3 flex-shrink-0">
              <button
                type="button"
                onClick={() => decider('denied')}
                className="flex-1 sm:flex-none rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
              >
                Refuser
              </button>
              <button
                type="button"
                onClick={() => decider('granted')}
                className="flex-1 sm:flex-none rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
              >
                Accepter
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
