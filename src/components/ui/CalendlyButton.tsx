'use client';
import { useEffect } from 'react';
import { Calendar } from 'lucide-react';
import { buildCalendlyUrl, trackCalendlyOpen } from '@/lib/analytics';

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (opts: { url: string }) => void;
    };
  }
}

interface CalendlyButtonProps {
  className?: string;
  /**
   * Where on the page this button sits (e.g. "navbar", "hero", "contact_section").
   * Passed as utm_content to Calendly + as the GA4 event location so we can
   * see which CTA position drives bookings.
   */
  location?: string;
  children?: React.ReactNode;
}

export default function CalendlyButton({
  className,
  location = 'unknown',
  children,
}: CalendlyButtonProps) {
  useEffect(() => {
    if (document.getElementById('calendly-script')) return;
    const script = document.createElement('script');
    script.id = 'calendly-script';
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    document.head.appendChild(link);
  }, []);

  const openCalendly = () => {
    trackCalendlyOpen(location);
    window.Calendly?.initPopupWidget({ url: buildCalendlyUrl(location) });
  };

  return (
    <button onClick={openCalendly} className={className}>
      {children ?? (
        <>
          <Calendar size={16} />
          Réserver en ligne
        </>
      )}
    </button>
  );
}
