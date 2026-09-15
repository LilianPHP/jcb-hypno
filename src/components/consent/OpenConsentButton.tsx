'use client';
import { OPEN_CONSENT_EVENT } from '@/components/consent/CookieConsent';

/** Rouvre le bandeau de consentement, pour modifier ou retirer son choix. */
export default function OpenConsentButton({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <button type="button" onClick={() => window.dispatchEvent(new Event(OPEN_CONSENT_EVENT))} className={className}>
      {children}
    </button>
  );
}
