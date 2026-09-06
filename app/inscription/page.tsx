import type { Metadata } from "next";
import EnteteDePage from "@/components/EnteteDePage";
import { CHAMPS_FORMULAIRE, CONTACTS } from "@/lib/contenu";

export const metadata: Metadata = {
  title: "Inscription",
  description:
    "Formulaire d'inscription des communes béninoises à la délégation du Salon des Maires de Paris, novembre 2026.",
};

const URL_FORMULAIRE = process.env.NEXT_PUBLIC_GOOGLE_FORM_URL;

export default function Inscription() {
  return (
    <>
      <EnteteDePage
        surtitre="Formulaire de participation"
        titre="Inscrire votre commune à la délégation"
        chapeau="Le formulaire ci-dessous recueille les informations nécessaires à la préparation de votre dossier. Comptez une quinzaine de minutes. Vous pouvez le remplir en plusieurs fois si vous êtes connecté à un compte Google."
      />

      <section className="section">
        <div className="enveloppe">
          <div className="encadre mesure-large">
            <h3>À préparer avant de commencer</h3>
            <p>
              Le nom et la fonction des participants, leurs coordonnées, la description des
              projets que la commune souhaite présenter à Paris, et la date d&rsquo;expiration
              des passeports. Ce dernier point conditionne le calendrier des démarches de visa.
            </p>
          </div>

          {URL_FORMULAIRE ? (
            <div className="cadre-formulaire">
              <iframe
                src={URL_FORMULAIRE}
                title="Formulaire d'inscription à la mission SMCL Paris 2026"
                loading="lazy"
              />
            </div>
          ) : (
            <div className="vide">
              <h3>Le formulaire n&rsquo;est pas encore relié</h3>
              <p>
                Renseignez la variable d&rsquo;environnement{" "}
                <code>NEXT_PUBLIC_GOOGLE_FORM_URL</code> pour afficher le formulaire à cet
                emplacement.
              </p>
              <ol>
                <li>
                  Dans Google Forms, ouvrez le formulaire et cliquez sur <strong>Envoyer</strong>.
                </li>
                <li>
                  Choisissez l&rsquo;onglet <strong>&lt; &gt;</strong> et copiez
                  l&rsquo;adresse contenue dans <code>src=&quot;…&quot;</code>. Elle se termine
                  par <code>?embedded=true</code>.
                </li>
                <li>
                  Copiez <code>.env.example</code> en <code>.env.local</code>, collez
                  l&rsquo;adresse après le signe égal, puis relancez le serveur. En production,
                  déclarez la même variable dans les réglages de votre hébergeur.
                </li>
              </ol>

              <p style={{ marginTop: "1.4rem" }}>
                <strong>Champs recommandés pour ce formulaire :</strong>
              </p>
              <ul className="liste-champs">
                {CHAMPS_FORMULAIRE.map((champ) => (
                  <li key={champ}>{champ}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="encadre mesure-large">
            <h3>Après l&rsquo;envoi</h3>
            <p>
              Le secrétariat de la mission revient vers la commune sous 48 heures pour confirmer
              la réception, préciser les séquences retenues et ouvrir la phase de cadrage du
              dossier. Les inscriptions reçues après le calage de l&rsquo;agenda parisien, fin
              octobre, ne pourront plus donner lieu à des rendez-vous bilatéraux programmés.
            </p>
          </div>

          <p style={{ marginTop: "2rem", color: "var(--gris)" }}>
            Une question avant de vous inscrire ? Écrivez à{" "}
            <a href={`mailto:${CONTACTS.benin.courriel}`}>{CONTACTS.benin.courriel}</a> ou appelez
            le{" "}
            <a href={`tel:${CONTACTS.benin.telephoneLien}`}>{CONTACTS.benin.telephone}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
