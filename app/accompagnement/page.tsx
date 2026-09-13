import type { Metadata } from "next";
import AppelInscription from "@/components/AppelInscription";
import EnteteDePage from "@/components/EnteteDePage";
import Illustration from "@/components/Illustration";
import { ACCOMPAGNEMENT, CALENDRIER } from "@/lib/contenu";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Accompagnement",
  description:
    "Accompagnement stratégique des 77 communes du Bénin vers le SMCL Paris 2026 : positionnement, objectifs, feuille de route d'août à novembre 2026 et points focaux de la séance tripartite.",
};

const { positionnement, objectifs, feuilleDeRoute, pointsFocaux } = ACCOMPAGNEMENT;

export default function Accompagnement() {
  return (
    <>
      <EnteteDePage
        surtitre="Accompagnement stratégique"
        titre={ACCOMPAGNEMENT.titre}
      />

      <section className="section">
        <div className="enveloppe">
          <h2 className="titre-section">{positionnement.titre}</h2>
          <p className="intro">{positionnement.texte}</p>

          <Link className="bouton" target="_blank" href="https://mediaproduct.fr/actus/salons-professionnels/le-salon-des-maires-smcl/">
              Découvrir le Salon
            </Link>

          <div className="encadre mesure-large">
            <h3>{objectifs.titre}</h3>
            <ul className="liste-puces">
              {objectifs.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-claire">
        <div className="enveloppe">
          <h2 className="titre-section">{feuilleDeRoute.titre}</h2>
          <p className="intro">{feuilleDeRoute.periode}</p>

          <div className="piliers">
            {feuilleDeRoute.phases.map((phase) => (
              <article className="pilier" key={phase.numero}>
                <p className="pilier-etiquette">
                  {phase.numero} · {phase.periode}
                </p>
                <h3>{phase.titre}</h3>
                <ul className="liste-puces">
                  {phase.points.map((point) => (
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
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="enveloppe">
          <h2 className="titre-section">{pointsFocaux.titre}</h2>
          <p className="intro">{pointsFocaux.chapeau}</p>
          <ol className="liste-numerotee mesure-large">
            {pointsFocaux.points.map((point) => (
              <li key={point.texte}>
                <strong>{point.fort}</strong> — {point.texte}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-claire">
        <div className="enveloppe">
          <h2 className="titre-section">Calendrier opérationnel</h2>
          <p className="intro">
            Les échéances qui suivent conditionnent la place de votre commune dans
            l&rsquo;agenda parisien.
          </p>
          <div className="chrono">
            {CALENDRIER.map((etape) => (
              <div className="chrono-entree" key={etape.date}>
                <div className="chrono-date">
                  {etape.date}
                  <small>{etape.etiquette}</small>
                </div>
                <div className="chrono-corps">
                  <h3>{etape.titre}</h3>
                  <p>{etape.texte}</p>
                  <p>
                    <strong>Livrable :</strong> {etape.livrable}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="enveloppe">
          <div className="duo">
            <div className="duo-texte">
              <h2 className="titre-section">Ce qui est recommandé à l&rsquo;ANCB</h2>
              <p>
                Trois orientations structurantes accompagnent la mission, au bénéfice de
                l&rsquo;ensemble des communes membres.
              </p>
              <p>
                <strong>Une commission permanente</strong> consacrée à la coopération
                décentralisée et à l&rsquo;attractivité, chargée du suivi technique des
                partenariats entre deux mandatures.
              </p>
              <p>
                <strong>Une approche par pôles territoriaux.</strong> Plutôt que 77 dossiers
                isolés, des projets mutualisés à l&rsquo;échelle intercommunale, qui atteignent
                les seuils de financement des bailleurs et pèsent davantage face à une
                collectivité française.
              </p>
              <p>
                <strong>Une inscription de la mission à l&rsquo;agenda prioritaire</strong> des
                maires, pour que la préparation ne soit pas absorbée par les urgences du
                quotidien communal.
              </p>
            </div>
            <Illustration
              fichier="ancb-benin.jpg"
              alt="Bâtiment de l'Assemblée nationale du Bénin"
            />
          </div>
        </div>
      </section>

      <AppelInscription
        titre="La préparation commence à l'inscription"
        texte="La fiche d'inscription recueille les informations nécessaires au diagnostic initial de votre commune. C'est la première pièce du dossier."
      />
    </>
  );
}
