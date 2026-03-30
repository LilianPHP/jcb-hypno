import type { Metadata } from "next";
import { Lora, Raleway } from "next/font/google";
import "./globals.css";

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
  title: "Jean-Charles Bernard — Hypnothérapeute | Hypnose Live Your Dreams",
  description:
    "Jean-Charles Bernard, hypnothérapeute diplômé IFHE à Paris 7ème et Boussy-Saint-Antoine. Hypnose Ericksonienne, Humaniste, RITMO®, PNL. 15 ans d'expérience. 70€/séance.",
  keywords: [
    "hypnothérapeute Paris 7",
    "hypnothérapeute Boussy-Saint-Antoine",
    "hypnose ericksonienne Paris",
    "RITMO Paris",
    "arrêter tabac hypnose Île-de-France",
    "hypnose enfants adolescents",
  ],
  openGraph: {
    title: "Jean-Charles Bernard — Hypnothérapeute",
    description:
      "15 ans d'expérience · Hypnose Ericksonienne, Humaniste, RITMO® · Paris & Boussy-Saint-Antoine · 70€/séance",
    locale: "fr_FR",
    type: "website",
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
      </body>
    </html>
  );
}
