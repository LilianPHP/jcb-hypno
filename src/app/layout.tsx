import type { Metadata } from "next";
import { Lora, Raleway } from "next/font/google";
import "./globals.css";
import CookieConsent from "@/components/consent/CookieConsent";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jean-charles-bernard.fr"),
  alternates: {
    canonical: "/",
  },
  title: "Jean-Charles Bernard, hypnothérapeute à Boussy-Saint-Antoine",
  description:
    "Hypnothérapeute certifié IFHE à Boussy-Saint-Antoine (91), au cabinet ou à distance : tabac, stress, sommeil, poids, phobies. Séance d'1h à 80 €.",
  openGraph: {
    title: "Jean-Charles Bernard — Hypnothérapeute",
    description:
      "15 ans d'expérience · Hypnose Ericksonienne, Humaniste, RITMO® · Boussy-Saint-Antoine (91) · Cabinet ou à distance · 80€/séance",
    locale: "fr_FR",
    type: "website",
  },
  verification: {
    google: "FTU9fIcghqrciasTsOGAy1Zfnl5wFDkiZ2o_7Eys1BE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${lora.variable} ${raleway.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F8F7FF] text-[#1E1B4B]">
        {children}

        {/* Consentement puis Google Analytics 4, chargé seulement après « Accepter ». */}
        <CookieConsent />
      </body>
    </html>
  );
}
