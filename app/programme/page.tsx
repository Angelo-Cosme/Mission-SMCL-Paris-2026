import type { Metadata } from "next";
import Link from "next/link";
import EnteteDePage from "@/components/EnteteDePage";
import { SEQUENCES, TRIPARTITE } from "@/lib/contenu";

export const metadata: Metadata = {
  title: "Programme",
  description:
    "Le déroulé de la mission à Paris du 24 au 29 novembre 2026 : Salon des Maires et des Collectivités Locales du 24 au 26, et séance de travail tripartite avec l'Ambassade du Bénin et le ministère de l'Europe et des Affaires étrangères.",
};

export default function Programme() {
  return (
    <>
      <EnteteDePage titre="Paris : 24 au 29 novembre 2026" />

      <section className="section">
        <div className="enveloppe">
          <div className="chrono">
            {SEQUENCES.map((sequence) => (
              <div className="chrono-entree" key={sequence.date}>
                <div className="chrono-date">
                  {sequence.date}
                  <small>{sequence.etiquette}</small>
                </div>
                <div className="chrono-corps">
                  <h3>{sequence.titre}</h3>
                  <p>{sequence.chapeau}</p>
                  <ul>
                    {sequence.points.map((point) => (
                      <li key={point.texte}>
                        {point.fort && (
                          <>
                            <strong>{point.fort}</strong> —{" "}
                          </>
                        )}
                        {point.texte}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="actions">
            <Link className="bouton bouton-ligne" href="/accompagnement">
              La phase de préparation
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-claire" id="tripartite">
        <div className="enveloppe">
          <h2 className="titre-section">Séance de travail tripartite</h2>
          <p className="intro">
            Trois heures, en marge du salon, au ministère de l&rsquo;Europe et des Affaires
            étrangères ou à l&rsquo;Ambassade du Bénin en France.
          </p>

          <div className="encadre mesure-large">
            <h3>Autour de la table</h3>
            <p>
              Le bureau de l&rsquo;ANCB et les maires de la délégation ; l&rsquo;Ambassadeur du
              Bénin en France et ses conseillers diplomatiques ; le Directeur de la coopération
              décentralisée et les chargés de mission Afrique de la DAECT.
            </p>
          </div>

          <table className="horaire">
            <caption className="saut">Déroulé horaire de la séance tripartite</caption>
            <tbody>
              {TRIPARTITE.map((ligne) => (
                <tr key={ligne.heure}>
                  <th scope="row">{ligne.heure}</th>
                  <td>
                    {ligne.fort && (
                      <>
                        <strong>{ligne.fort}</strong>{" "}
                      </>
                    )}
                    {ligne.texte}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="encadre mesure-large">
            <h3>Ce que la séance produit</h3>
            <p>
              Un relevé de décisions conjoint fixant le cadre opérationnel 2026-2027, un guide
              pratique des cofinancements remis aux maires, et un guichet d&rsquo;orientation
              partenariale tenu conjointement par l&rsquo;Ambassade et le pôle coopération de
              l&rsquo;ANCB.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
