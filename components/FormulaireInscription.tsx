"use client";

import { useState } from "react";
import { FICHE } from "@/lib/contenu";

const QUALITES = ["Maire", "Adjoint au maire", "Président d'intercommunalité"];
const MAX_DOMAINES = 2;

type Etat = "attente" | "envoi" | "envoye" | "erreur";

export default function FormulaireInscription() {
  const [etat, setEtat] = useState<Etat>("attente");
  const [message, setMessage] = useState("");
  const [domaines, setDomaines] = useState<string[]>([]);
  const [sequences, setSequences] = useState<string[]>([]);

  const basculer = (
    valeur: string,
    liste: string[],
    poser: (v: string[]) => void,
    maximum?: number,
  ) => {
    if (liste.includes(valeur)) {
      poser(liste.filter((v) => v !== valeur));
      return;
    }
    if (maximum && liste.length >= maximum) return;
    poser([...liste, valeur]);
  };

  async function soumettre(evenement: React.FormEvent<HTMLFormElement>) {
    evenement.preventDefault();
    setEtat("envoi");
    setMessage("");

    const formulaire = new FormData(evenement.currentTarget);
    const donnees: Record<string, string | string[]> = { domaines, sequences };

    formulaire.forEach((valeur, cle) => {
      if (typeof valeur === "string") donnees[cle] = valeur.trim();
    });

    try {
      const reponse = await fetch("/api/inscription", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(donnees),
      });
      const corps = await reponse.json().catch(() => ({}));

      if (!reponse.ok) {
        setEtat("erreur");
        setMessage(corps.erreur ?? "L'envoi a échoué. Merci de réessayer dans un instant.");
        return;
      }

      setEtat("envoye");
    } catch {
      setEtat("erreur");
      setMessage(
        "La connexion au serveur a échoué. Téléchargez la fiche et retournez-la par courriel.",
      );
    }
  }

  if (etat === "envoye") {
    return (
      <div className="formulaire-succes" role="status">
        <h3>Inscription transmise</h3>
        <p>
          Votre fiche est arrivée au secrétariat de la mission. Un accusé de réception vient
          d&rsquo;être envoyé à l&rsquo;adresse électronique que vous avez indiquée, et une réponse
          vous parviendra sous 48 heures.
        </p>
        <p>
          Pensez à compléter et signer le bulletin officiel de l&rsquo;ANCB : il reste la pièce
          formelle du dossier.
        </p>
        <div className="actions">
          <a className="bouton" href={FICHE.fichier} download>
            Télécharger la fiche (PDF)
          </a>
        </div>
      </div>
    );
  }

  return (
    <form className="formulaire" onSubmit={soumettre} noValidate={false}>
      <fieldset>
        <legend>1. Identification de la commune et de l&rsquo;élu participant</legend>

        <div className="champs-duo">
          <p className="champ">
            <label htmlFor="commune">Commune <span aria-hidden="true">*</span></label>
            <input id="commune" name="commune" type="text" required autoComplete="off" />
          </p>
          <p className="champ">
            <label htmlFor="departement">Département <span aria-hidden="true">*</span></label>
            <input id="departement" name="departement" type="text" required autoComplete="off" />
          </p>
        </div>

        <p className="champ">
          <label htmlFor="nom">
            Nom et prénom du maire ou du représentant <span aria-hidden="true">*</span>
          </label>
          <input id="nom" name="nom" type="text" required autoComplete="name" />
        </p>

        <fieldset className="champ-groupe">
          <legend>Qualité / fonction <span aria-hidden="true">*</span></legend>
          <div className="options">
            {QUALITES.map((qualite) => (
              <label className="option" key={qualite}>
                <input type="radio" name="qualite" value={qualite} required />
                <span>{qualite}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="champs-duo">
          <p className="champ">
            <label htmlFor="telephone">
              Téléphone mobile (WhatsApp) <span aria-hidden="true">*</span>
            </label>
            <input id="telephone" name="telephone" type="tel" required autoComplete="tel" />
          </p>
          <p className="champ">
            <label htmlFor="courriel">
              Adresse électronique officielle <span aria-hidden="true">*</span>
            </label>
            <input id="courriel" name="courriel" type="email" required autoComplete="email" />
          </p>
        </div>

        <p className="champ">
          <label htmlFor="focal">Nom et contact du focal technique (SE / DST)</label>
          <input id="focal" name="focal" type="text" autoComplete="off" />
        </p>
      </fieldset>

      <fieldset>
        <legend>2. État des lieux de la coopération décentralisée</legend>

        <fieldset className="champ-groupe">
          <legend>{FICHE.cooperation.question}</legend>
          <div className="options">
            {FICHE.cooperation.reponses.map((reponse) => (
              <label className="option" key={reponse}>
                <input type="radio" name="cooperation" value={reponse} />
                <span>{reponse}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <p className="champ">
          <label htmlFor="cooperationPrecision">{FICHE.cooperation.precision}</label>
          <textarea id="cooperationPrecision" name="cooperationPrecision" rows={2} />
        </p>
      </fieldset>

      <fieldset>
        <legend>3. Domaines prioritaires de recherche de partenaires</legend>
        <p className="aide">
          {FICHE.domaines.consigne}{" "}
          <b>
            {domaines.length} / {MAX_DOMAINES} sélectionné{domaines.length > 1 ? "s" : ""}
          </b>
        </p>
        <div className="options options-colonnes">
          {FICHE.domaines.liste.map((domaine) => {
            const coche = domaines.includes(domaine);
            return (
              <label
                className={`option${!coche && domaines.length >= MAX_DOMAINES ? " option-inactive" : ""}`}
                key={domaine}
              >
                <input
                  type="checkbox"
                  checked={coche}
                  disabled={!coche && domaines.length >= MAX_DOMAINES}
                  onChange={() => basculer(domaine, domaines, setDomaines, MAX_DOMAINES)}
                />
                <span>{domaine}</span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <fieldset>
        <legend>4. Fiche synthétique du projet phare présenté à Paris</legend>

        <p className="champ">
          <label htmlFor="projetTitre">Titre du projet prioritaire de la commune</label>
          <input id="projetTitre" name="projetTitre" type="text" />
        </p>
        <p className="champ">
          <label htmlFor="projetObjectif">Objectif principal et bénéficiaires attendus</label>
          <textarea id="projetObjectif" name="projetObjectif" rows={4} />
        </p>
        <p className="champ">
          <label htmlFor="projetBudget">Estimation du budget global du projet</label>
          <input id="projetBudget" name="projetBudget" type="text" />
        </p>
      </fieldset>

      <fieldset>
        <legend>5. Participation aux séquences officielles à Paris</legend>
        <div className="options">
          {FICHE.sequences.map((sequence) => {
            const libelle = `${sequence.fort} — ${sequence.texte}`;
            return (
              <label className="option" key={sequence.texte}>
                <input
                  type="checkbox"
                  checked={sequences.includes(libelle)}
                  onChange={() => basculer(libelle, sequences, setSequences)}
                />
                <span>
                  <strong>{sequence.fort}</strong> — {sequence.texte}
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <fieldset>
        <legend>6. Engagement</legend>
        <p className="aide">{FICHE.engagement}</p>

        <div className="champs-duo">
          <p className="champ">
            <label htmlFor="signataire">Nom du signataire</label>
            <input id="signataire" name="signataire" type="text" />
          </p>
          <p className="champ">
            <label htmlFor="faitA">Fait à</label>
            <input id="faitA" name="faitA" type="text" />
          </p>
        </div>

        <p className="champ">
          <label htmlFor="message">Message complémentaire</label>
          <textarea id="message" name="message" rows={3} />
        </p>

        <label className="option option-engagement">
          <input type="checkbox" name="engagement" value="oui" required />
          <span>
            Je confirme l&rsquo;intérêt officiel de ma commune à intégrer la délégation de
            l&rsquo;ANCB pour le SMCL Paris 2026 et j&rsquo;ai pris connaissance des frais de
            participation de {FICHE.frais.montant} {FICHE.frais.unite}.
          </span>
        </label>
      </fieldset>

      <p className="piege" aria-hidden="true">
        <label htmlFor="societe">Ne pas remplir</label>
        <input id="societe" name="societe" type="text" tabIndex={-1} autoComplete="off" />
      </p>

      {etat === "erreur" && (
        <p className="formulaire-erreur" role="alert">
          {message}{" "}
          <a href={FICHE.fichier} download>
            Télécharger la fiche PDF
          </a>{" "}
          et l&rsquo;envoyer à <a href={`mailto:${FICHE.retour.courriel}`}>{FICHE.retour.courriel}</a>.
        </p>
      )}

      <div className="actions">
        <button className="bouton" type="submit" disabled={etat === "envoi"}>
          {etat === "envoi" ? "Envoi en cours…" : "Envoyer mon inscription"}
        </button>
      </div>

      <p className="aide">
        Les champs marqués d&rsquo;un astérisque sont obligatoires. Les informations transmises
        servent uniquement à la préparation de la mission.
      </p>
    </form>
  );
}
