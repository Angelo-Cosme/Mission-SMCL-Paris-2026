import type { Metadata } from "next";
import EnteteDePage from "@/components/EnteteDePage";
import FormulaireInscription from "@/components/FormulaireInscription";
import { CONTACTS, FICHE } from "@/lib/contenu";

export const metadata: Metadata = {
  title: "Inscription",
  description:
    "Inscrivez votre commune à la délégation de l'ANCB pour le Salon des Maires de Paris, novembre 2026 : formulaire en ligne ou bulletin officiel à télécharger et à retourner par courriel.",
};

export default function Inscription() {
  return (
    <>
      <EnteteDePage
        surtitre="Fiche d'inscription"
        titre="Inscrire votre commune à la délégation"
        chapeau="Le formulaire ci-dessous transmet directement votre inscription au secrétariat de la mission. Comptez une dizaine de minutes. Le bulletin officiel de l'ANCB reste téléchargeable au format PDF."
      />

      <section className="section">
        <div className="enveloppe">
          <div className="mesure-large">
            <div className="encadre">
              <h3>À préparer avant de commencer</h3>
              <p>
                Le nom et la fonction des participants, leurs coordonnées, la description des
                projets que la commune souhaite présenter à Paris, et la date d&rsquo;expiration
                des passeports. Ce dernier point conditionne le calendrier des démarches de visa.
              </p>
            </div>

            <FormulaireInscription />
          </div>
        </div>
      </section>

      <section className="section section-claire">
        <div className="enveloppe">
          <h2 className="titre-section">Le bulletin officiel de l&rsquo;ANCB</h2>
          <p className="intro">
            La pièce formelle du dossier. Elle se complète, se signe et se retourne par courriel,
            en complément ou à la place du formulaire en ligne.
          </p>

          <div className="telechargement">
            <div className="telechargement-texte">
              <p className="surtitre surtitre-sombre">{FICHE.organisme}</p>
              <h2>{FICHE.titre}</h2>
              <p>{FICHE.mission}</p>
              <div className="actions">
                <a className="bouton" href={FICHE.fichier} download>
                  Télécharger la fiche (PDF)
                </a>
                <a
                  className="bouton bouton-ligne"
                  href={`mailto:${FICHE.retour.courriel}?cc=${FICHE.retour.copie}&subject=${encodeURIComponent(
                    "Inscription SMCL Paris 2026 — commune de ",
                  )}`}
                >
                  Envoyer la fiche remplie
                </a>
              </div>
            </div>
            <ol className="telechargement-etapes">
              <li>Téléchargez le PDF et imprimez-le, ou complétez-le sur ordinateur.</li>
              <li>Renseignez les six rubriques, datez, signez et apposez le cachet de la commune.</li>
              <li>
                Retournez la fiche à <a href={`mailto:${FICHE.retour.courriel}`}>{FICHE.retour.courriel}</a>,
                avec copie à <a href={`mailto:${FICHE.retour.copie}`}>{FICHE.retour.copie}</a>.
              </li>
              <li>
                Date limite de retour au {FICHE.retour.destinataire} :{" "}
                <strong>{FICHE.retour.avant}</strong>.
              </li>
            </ol>
          </div>

          <h3 style={{ marginTop: "3rem" }}>Ce que contient la fiche</h3>
          <p className="intro">{FICHE.note}</p>

          <div className="fiche">
            <article className="fiche-bloc">
              <h3>
                <span className="fiche-num">1</span> Identification de la commune et de
                l&rsquo;élu participant
              </h3>
              <ul className="liste-champs">
                {FICHE.identification.map((champ) => (
                  <li key={champ}>{champ}</li>
                ))}
              </ul>
            </article>

            <article className="fiche-bloc">
              <h3>
                <span className="fiche-num">2</span> État des lieux de la coopération
                décentralisée
              </h3>
              <p>{FICHE.cooperation.question}</p>
              <ul className="choix">
                {FICHE.cooperation.reponses.map((reponse) => (
                  <li key={reponse}>{reponse}</li>
                ))}
              </ul>
              <p className="fiche-note">{FICHE.cooperation.precision}</p>
            </article>

            <article className="fiche-bloc">
              <h3>
                <span className="fiche-num">3</span> Domaines prioritaires de recherche de
                partenaires
              </h3>
              <p className="fiche-note">{FICHE.domaines.consigne}</p>
              <ul className="choix">
                {FICHE.domaines.liste.map((domaine) => (
                  <li key={domaine}>{domaine}</li>
                ))}
              </ul>
            </article>

            <article className="fiche-bloc">
              <h3>
                <span className="fiche-num">4</span> Fiche synthétique du projet phare présenté
                à Paris
              </h3>
              <ul className="liste-puces">
                {FICHE.projet.map((champ) => (
                  <li key={champ}>{champ}</li>
                ))}
              </ul>
            </article>

            <article className="fiche-bloc">
              <h3>
                <span className="fiche-num">5</span> Participation aux séquences officielles à
                Paris
              </h3>
              <ul className="liste-puces">
                {FICHE.sequences.map((sequence) => (
                  <li key={sequence.texte}>
                    <strong>{sequence.fort}</strong> — {sequence.texte}
                  </li>
                ))}
              </ul>
            </article>

            <article className="fiche-bloc">
              <h3>
                <span className="fiche-num">6</span> Frais de participation
              </h3>
              <p className="frais-montant">
                <b>{FICHE.frais.montant}</b> <span>{FICHE.frais.unite}</span>
              </p>
              <p>Ce montant comprend :</p>
              <ul className="liste-puces">
                {FICHE.frais.inclus.map((ligne) => (
                  <li key={ligne}>{ligne}</li>
                ))}
              </ul>
              <p className="fiche-note">{FICHE.frais.reglement}</p>
              <ul className="liste-puces">
                {FICHE.frais.echeancier.map((ligne) => (
                  <li key={ligne}>{ligne}</li>
                ))}
              </ul>
            </article>

            <article className="fiche-bloc">
              <h3>
                <span className="fiche-num">7</span> Engagement et validation
              </h3>
              <p>{FICHE.engagement}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="enveloppe">
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
            le <a href={`tel:${CONTACTS.benin.telephoneLien}`}>{CONTACTS.benin.telephone}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
