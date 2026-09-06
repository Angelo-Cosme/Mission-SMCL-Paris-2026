import type { Metadata } from "next";
import AppelInscription from "@/components/AppelInscription";
import EnteteDePage from "@/components/EnteteDePage";
import Illustration from "@/components/Illustration";
import Piliers from "@/components/Piliers";
import { CALENDRIER, PILIERS_DETAILLES } from "@/lib/contenu";

export const metadata: Metadata = {
  title: "Accompagnement",
  description:
    "Le dispositif d'accompagnement des communes béninoises : ingénierie de projet, diplomatie territoriale, suivi des cofinancements, et calendrier de septembre à décembre 2026.",
};

export default function Accompagnement() {
  return (
    <>
      <EnteteDePage
        surtitre="Septembre à décembre 2026"
        titre="Un accompagnement qui commence avant le départ et continue après le retour"
        chapeau="Le déplacement à Paris n'est que la partie visible. L'essentiel du travail se fait en amont, sur les dossiers, et en aval, sur les conventions."
      />

      <section className="section">
        <div className="enveloppe">
          <h2 className="titre-section">Trois piliers</h2>
          <Piliers piliers={PILIERS_DETAILLES} />
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
              fichier="assemblee-benin.jpg"
              alt="Bâtiment de l'Assemblée nationale du Bénin"
            />
          </div>
        </div>
      </section>

      <AppelInscription
        titre="La préparation commence à l'inscription"
        texte="Le formulaire recueille les informations nécessaires au diagnostic initial de votre commune. C'est la première pièce du dossier."
      />
    </>
  );
}
