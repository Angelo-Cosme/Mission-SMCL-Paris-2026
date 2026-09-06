import type { Metadata } from "next";
import AppelInscription from "@/components/AppelInscription";
import EnteteDePage from "@/components/EnteteDePage";
import Illustration from "@/components/Illustration";
import Piliers from "@/components/Piliers";
import { GUICHETS, RESEAUX } from "@/lib/contenu";

export const metadata: Metadata = {
  title: "Financements",
  description:
    "FICOL de l'AFD, fonds d'appui de la DAECT, dispositifs européens : les guichets de cofinancement accessibles aux communes béninoises en partenariat avec des collectivités françaises.",
};

export default function Financements() {
  return (
    <>
      <EnteteDePage
        surtitre="Guichets et dispositifs"
        titre="Les leviers de financement accessibles à une commune béninoise"
        chapeau="Ces dispositifs financent des projets portés conjointement par une collectivité béninoise et un partenaire français ou européen. Le partenariat n'est pas un supplément : il conditionne l'éligibilité."
      />

      <section className="section">
        <div className="enveloppe">
          <Piliers piliers={GUICHETS} />
          <div className="encadre mesure-large">
            <h3>Le point commun de tous ces guichets</h3>
            <p>
              Aucun ne finance une intention. Ils financent un dossier : un diagnostic, un plan
              de financement où la commune apporte sa part, un calendrier, des indicateurs de
              résultat et une collectivité partenaire identifiée. C&rsquo;est précisément ce que
              la mission construit entre septembre et décembre.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-claire">
        <div className="enveloppe">
          <div className="duo">
            <Illustration
              fichier="port-cotonou.jpg"
              alt="Vue aérienne du port autonome de Cotonou"
              hauteur={1125}
            />
            <div className="duo-texte">
              <h2 className="titre-section">Les thématiques qui trouvent preneur</h2>
              <p>
                Les priorités béninoises et les orientations françaises se recoupent sur un petit
                nombre de sujets. Un projet situé dans cet espace commun se finance plus vite
                qu&rsquo;un projet isolé, même excellent.
              </p>
              <p>
                <strong>Eau potable et assainissement.</strong> Sujet historique de la
                coopération décentralisée, avec des dispositifs dédiés côté français.
              </p>
              <p>
                <strong>Transition écologique et gestion des déchets.</strong> Priorité affichée
                des appels à projets thématiques.
              </p>
              <p>
                <strong>Numérisation des services communaux.</strong> État civil, fiscalité
                locale, guichet unique : des projets de taille modeste, rapides à monter et
                lisibles pour un partenaire.
              </p>
              <p>
                <strong>Développement économique local et attractivité.</strong> Marchés,
                filières agricoles, tourisme culturel, valorisation du patrimoine.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="enveloppe">
          <h2 className="titre-section">Les réseaux qui font le lien</h2>
          <p className="intro mesure-large">
            Trois interlocuteurs français jouent un rôle pivot dans la mise en relation entre
            collectivités.
          </p>
          <Piliers piliers={RESEAUX} />
        </div>
      </section>

      <AppelInscription
        titre="Quels projets votre commune veut-elle financer ?"
        texte="Le formulaire d'inscription vous demande de les décrire. C'est à partir de là que se construit la fiche que vous présenterez à Paris."
      />
    </>
  );
}
