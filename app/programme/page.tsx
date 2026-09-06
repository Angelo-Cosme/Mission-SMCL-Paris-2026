import type { Metadata } from "next";
import Link from "next/link";
import AppelInscription from "@/components/AppelInscription";
import EnteteDePage from "@/components/EnteteDePage";
import Illustration from "@/components/Illustration";
import { SEQUENCES, TRIPARTITE } from "@/lib/contenu";

export const metadata: Metadata = {
  title: "Programme",
  description:
    "Le déroulé de la mission à Paris : atelier international du 18 au 20 novembre, journée de la coopération le 20, Salon des Maires du 24 au 26, et séance de travail tripartite au Quai d'Orsay.",
};

export default function Programme() {
  return (
    <>
      <EnteteDePage
        surtitre="Paris · 18 au 26 novembre 2026"
        titre="Le programme, séquence par séquence"
        chapeau="Neuf jours répartis en trois temps distincts. Une commune peut s'inscrire à l'ensemble ou à une seule séquence, selon ses moyens et ses priorités."
      />

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
        </div>
      </section>

      <section className="section section-claire">
        <div className="enveloppe">
          <div className="duo">
            <Illustration
              fichier="salon-stand.jpg"
              alt="Stand d'exposition dans un salon professionnel"
              hauteur={1125}
            />
            <div className="duo-texte">
              <h2 className="titre-section">Ce qui se joue vraiment sur un stand</h2>
              <p>
                Un stand n&rsquo;attire pas les partenaires par sa seule présence. Ce qui
                déclenche une suite, c&rsquo;est un document lisible : une fiche de deux pages qui
                dit ce que la commune veut faire, combien cela coûte, ce qu&rsquo;elle apporte
                elle-même et ce qu&rsquo;elle attend du partenaire.
              </p>
              <p>
                Ces fiches sont produites en septembre et octobre, avant le départ. C&rsquo;est
                l&rsquo;objet de la phase de préparation.
              </p>
              <div className="actions">
                <Link className="bouton bouton-ligne" href="/accompagnement">
                  La phase de préparation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="tripartite">
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

      <AppelInscription
        titre="Choisir les séquences qui correspondent à votre commune"
        texte="Le formulaire d'inscription permet d'indiquer les séquences souhaitées, les thématiques prioritaires et les projets que vous voulez porter à Paris."
      />
    </>
  );
}
