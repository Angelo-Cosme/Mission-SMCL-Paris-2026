import type { Metadata } from "next";
import Entete from "@/components/Entete";
import Pied from "@/components/Pied";
import { MISSION } from "@/lib/contenu";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${MISSION.nom} — ${MISSION.lieuDate}`,
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
    <html lang="fr">
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
