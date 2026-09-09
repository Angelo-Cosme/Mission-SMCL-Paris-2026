"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MISSION, NAVIGATION } from "@/lib/contenu";

export default function Entete() {
  const chemin = usePathname();
  const [ouvert, setOuvert] = useState(false);

  useEffect(() => {
    setOuvert(false);
  }, [chemin]);

  const actif = (href: string) =>
    href === "/" ? chemin === "/" : chemin.startsWith(href);

  return (
    <header className="entete">
      <div className="enveloppe">
        <Link className="marque" href="/" aria-label={`${MISSION.nom} — accueil`}>
          <Image
            className="marque-logo"
            src={MISSION.logo}
            alt={MISSION.operateur}
            width={758}
            height={310}
            priority
          />
        </Link>

        <button
          className="bascule"
          aria-expanded={ouvert}
          aria-controls="nav"
          onClick={() => setOuvert((o) => !o)}
        >
          {ouvert ? "Fermer" : "Menu"}
        </button>

        <nav
          className={`nav${ouvert ? " ouvert" : ""}`}
          id="nav"
          aria-label="Navigation principale"
        >
          {NAVIGATION.map((lien) => (
            <Link
              key={lien.href}
              href={lien.href}
              aria-current={actif(lien.href) ? "page" : undefined}
            >
              {lien.libelle}
            </Link>
          ))}
          <Link
            className="bouton-nav"
            href="/inscription"
            aria-current={actif("/inscription") ? "page" : undefined}
          >
            S&rsquo;inscrire
          </Link>
        </nav>
      </div>
    </header>
  );
}
