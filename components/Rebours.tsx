"use client";

import { useEffect, useState } from "react";
import { MISSION } from "@/lib/contenu";

/** Nombre de jours restants avant l'ouverture du salon. */
export default function Rebours() {
  const [jours, setJours] = useState<number | null>(null);

  useEffect(() => {
    const cible = new Date(MISSION.dateOuvertureSalon).getTime();
    const restant = Math.ceil((cible - Date.now()) / 86_400_000);
    setJours(restant > 0 ? restant : 0);
  }, []);

  return (
    <p className="rebours">
      <b>{jours === null ? "—" : jours}</b>{" "}
      <span>jours avant l&rsquo;ouverture du Salon des Maires</span>
    </p>
  );
}
