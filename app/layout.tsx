import type { Metadata } from "next";
import { Spectral, Karla } from "next/font/google";
import Entete from "@/components/Entete";
import Pied from "@/components/Pied";
import { MISSION } from "@/lib/contenu";
import "./globals.css";

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--police-titre",
  display: "swap",
});

const karla = Karla({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--police-texte",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: MISSION.nom,
    template: `%s — ${MISSION.nom}`,
  },
  description:
    "Mission des communes du Bénin au Salon des Maires et des Collectivités Locales de Paris, novembre 2026 : programme, accompagnement, financements et inscription.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: MISSION.nom,
    images: ["/img/cotonou-panorama.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${spectral.variable} ${karla.variable}`}>
      <body>
        <a className="saut" href="#contenu">
          Aller au contenu
        </a>
        <Entete />
        <main id="contenu">{children}</main>
        <Pied />
      </body>
    </html>
  );
}
