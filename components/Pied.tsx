import Link from "next/link";
import { CONTACTS, MISSION } from "@/lib/contenu";

export default function Pied() {
  const { benin, france } = CONTACTS;

  return (
    <footer className="pied">
      <div className="enveloppe">
        <div className="pied-grille">
          <div>
            <h4>{MISSION.nom}</h4>
            <p>
              Une mission de coopération décentralisée conduite au bénéfice des communes du
              Bénin, autour du Salon des Maires et des Collectivités Locales de Paris.
            </p>
          </div>

          <div>
            <h4>{benin.titre}</h4>
            <ul>
              <li>{benin.adresse}</li>
              <li>{benin.boitePostale}</li>
              <li>
                <a href={`tel:${benin.telephoneLien}`}>{benin.telephone}</a>
              </li>
              <li>
                <a href={`mailto:${benin.courriel}`}>{benin.courriel}</a>
              </li>
            </ul>
          </div>

          <div>
            <h4>{france.titre}</h4>
            <ul>
              <li>
                <strong>{france.nom}</strong>
                <br />
                {france.role}
              </li>
              <li>{france.adresse}</li>
              <li>
                <a href={`tel:${france.telephoneLien}`}>{france.telephone}</a>
              </li>
              <li>
                <a href={`mailto:${france.courriel}`}>{france.courriel}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pied-bas">
          <span>Novembre 2026 · Paris</span>
          <span>
            <Link href="/mentions">Mentions et crédits photographiques</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
