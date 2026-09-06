import Link from "next/link";
import { CONTACTS, MISSION } from "@/lib/contenu";

export default function Pied() {
  const blocs = [CONTACTS.benin, CONTACTS.france];

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
            <p>
              <Link href="/inscription">Inscrire ma commune</Link>
            </p>
          </div>

          {blocs.map((bloc) => (
            <div key={bloc.titre}>
              <h4>{bloc.titre}</h4>
              <ul>
                <li>{bloc.adresse}</li>
                <li>
                  <a href={`tel:${bloc.telephoneLien}`}>{bloc.telephone}</a>
                </li>
                <li>
                  <a href={`mailto:${bloc.courriel}`}>{bloc.courriel}</a>
                </li>
              </ul>
            </div>
          ))}
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
