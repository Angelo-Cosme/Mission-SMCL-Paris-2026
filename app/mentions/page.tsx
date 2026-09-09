import type { Metadata } from "next";
import EnteteDePage from "@/components/EnteteDePage";
import { CONTACTS, CREDITS } from "@/lib/contenu";

export const metadata: Metadata = {
  title: "Mentions et crédits",
  description:
    "Crédits photographiques, mentions relatives aux marques citées et traitement des données personnelles.",
};

export default function Mentions() {
  return (
    <>
      <EnteteDePage
        titre="Mentions et crédits photographiques"
        chapeau="Ce site est un support d'information et d'inscription pour la mission des communes du Bénin au Salon des Maires et des Collectivités Locales de Paris."
      />

      <section className="section">
        <div className="enveloppe mesure-large">
          <h2 className="titre-section">Photographies</h2>
          <p>
            Les images d&rsquo;illustration proviennent de Wikimedia Commons et sont réutilisées
            selon les termes de leurs licences respectives. Elles ont été redimensionnées et
            compressées pour le web, sans autre modification.
          </p>
          {/* <ul className="credit-liste">
            {CREDITS.map((credit) => (
              <li key={credit.fichier}>
                <strong>{credit.titre}</strong> — {credit.auteur}, licence {credit.licence}.{" "}
                <a href={credit.page} rel="noopener noreferrer" target="_blank">
                  Fiche sur Wikimedia Commons
                </a>
              </li>
            ))}
          </ul> */}

          <h2 className="titre-section" style={{ marginTop: "3rem" }}>
            Marques et logotypes
          </h2>
          <p>
            Les dénominations Association Nationale des Communes du Bénin, Salon des Maires et
            des Collectivités Locales, Association des Maires de France, Cités Unies France, AFD
            et DAECT sont citées à titre informatif. Aucun logotype de ces organisations
            n&rsquo;est reproduit sur ce site, et leur mention ne vaut pas endossement du présent
            support.
          </p>

          <h2 className="titre-section" style={{ marginTop: "3rem" }}>
            Données personnelles
          </h2>
          <p>
            Les informations transmises par la fiche d&rsquo;inscription, retournée par courriel
            ou saisie dans le formulaire en ligne, sont utilisées uniquement pour la préparation
            de la mission. Elles ne sont ni cédées ni vendues à des tiers. Pour exercer un droit
            d&rsquo;accès, de rectification ou de suppression, écrivez à{" "}
            <a href={`mailto:${CONTACTS.benin.courriel}`}>{CONTACTS.benin.courriel}</a>.
          </p>

          <h2 className="titre-section" style={{ marginTop: "3rem" }}>
            Dates et informations pratiques
          </h2>
          <p>
            Les dates et le contenu des séquences sont ceux communiqués par les organisateurs à
            la date de publication. Ils peuvent évoluer ; les communes inscrites sont informées
            de toute modification.
          </p>
        </div>
      </section>
    </>
  );
}
