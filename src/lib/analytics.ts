/**
 * Analytics — GA4 helper layer
 *
 * Exposes typed helpers around `window.gtag` so we can fire events from
 * client components without scattering `any` casts.
 *
 * Conventions :
 *   - Event names use snake_case (GA4 recommendation)
 *   - Each conversion event includes a `location` param (where on the page)
 *   - All helpers no-op safely if gtag isn't loaded (SSR, ad blockers, etc.)
 */

export const GA4_MEASUREMENT_ID = 'G-1SE7WNDP8J';

type GtagEventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (
      command: 'event' | 'config' | 'set' | 'js' | 'consent',
      action: string,
      params?: GtagEventParams,
    ) => void;
    dataLayer?: unknown[];
  }
}

/** Fire a custom GA4 event. Safe no-op if gtag isn't loaded. */
export function trackEvent(name: string, params: GtagEventParams = {}): void {
  if (typeof window === 'undefined') return;
  if (typeof window.gtag !== 'function') return;
  window.gtag('event', name, params);
}

/* -------------------------------------------------------------------------- */
/*                            Conversion events                               */
/* -------------------------------------------------------------------------- */

/** User opened the Calendly booking modal. */
export function trackCalendlyOpen(location: string): void {
  trackEvent('calendly_open', {
    location,
    event_category: 'booking',
  });
}

/** User clicked a tel: link to call. */
export function trackPhoneClick(location: string): void {
  trackEvent('phone_click', {
    location,
    event_category: 'contact',
  });
}

/** User clicked an external booking link (PagesJaunes, etc.). */
export function trackExternalBookingClick(
  destination: 'pagesjaunes' | 'doctolib' | 'other',
  location: string,
): void {
  trackEvent('external_booking_click', {
    destination,
    location,
    event_category: 'booking',
  });
}

/** User clicked a mailto: link. */
export function trackEmailClick(location: string): void {
  trackEvent('email_click', {
    location,
    event_category: 'contact',
  });
}

/* -------------------------------------------------------------------------- */
/*                              Calendly UTM                                  */
/* -------------------------------------------------------------------------- */

const CALENDLY_BASE_URL = 'https://calendly.com/jeancharlesbernard3/seance-1h';

/**
 * Build the Calendly URL with UTM params so we can see in Calendly's
 * dashboard which page/section drove each booking.
 *
 * `location` is the CTA position (e.g. "navbar", "hero", "contact_section").
 */
export function buildCalendlyUrl(location: string): string {
  const params = new URLSearchParams({
    utm_source: 'website',
    utm_medium: 'organic',
    utm_campaign: 'jcb_site',
    utm_content: location,
  });
  return `${CALENDLY_BASE_URL}?${params.toString()}`;
}
