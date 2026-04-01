'use client';
import { useEffect } from 'react';
import { Calendar } from 'lucide-react';

// ⚠️ Remplacer par le vrai lien Calendly de Jean-Charles
const CALENDLY_URL = 'https://calendly.com/jean-charles-bernard/seance-1h';

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (opts: { url: string }) => void;
    };
  }
}

export default function CalendlyButton({ className }: { className?: string }) {
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
    window.Calendly?.initPopupWidget({ url: CALENDLY_URL });
  };

  return (
    <button onClick={openCalendly} className={className}>
      <Calendar size={16} />
      Réserver en ligne
    </button>
  );
}
