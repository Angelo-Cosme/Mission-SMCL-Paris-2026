import { NextResponse } from "next/server";
import { FICHE, MISSION } from "@/lib/contenu";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const DESTINATAIRE = process.env.MAIL_DESTINATAIRE ?? "rsb.dacosta@gmail.com";
const EXPEDITEUR = process.env.MAIL_EXPEDITEUR ?? "Mission SMCL <onboarding@resend.dev>";
const CLE = process.env.RESEND_API_KEY;

type Reponse = Record<string, string | string[]>;

const ETIQUETTES: Record<string, string> = {
  commune: "Commune",
  departement: "Département",
  nom: "Nom et prénom du maire ou du représentant",
  qualite: "Qualité / fonction",
  telephone: "Téléphone mobile (WhatsApp)",
  courriel: "Adresse électronique officielle",
  focal: "Focal technique (SG / DST)",
  cooperation: "Partenariat ou jumelage actif",
  cooperationPrecision: "Collectivités partenaires",
  domaines: "Domaines prioritaires",
  projetTitre: "Titre du projet prioritaire",
  projetObjectif: "Objectif principal et bénéficiaires",
  projetBudget: "Budget global estimé",
  sequences: "Séquences officielles confirmées",
  signataire: "Signataire",
  faitA: "Fait à",
  message: "Message complémentaire",
};

const ORDRE = Object.keys(ETIQUETTES);

const OBLIGATOIRES = ["commune", "departement", "nom", "qualite", "telephone", "courriel"];

function echappe(valeur: string) {
  return valeur
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function enTexte(reponse: Reponse) {
  return ORDRE.filter((cle) => reponse[cle] && reponse[cle].length)
    .map((cle) => {
      const valeur = reponse[cle];
      const rendu = Array.isArray(valeur) ? valeur.map((v) => `\n    – ${v}`).join("") : valeur;
      return `${ETIQUETTES[cle]} : ${rendu}`;
    })
    .join("\n\n");
}

function enHtml(reponse: Reponse) {
  const lignes = ORDRE.filter((cle) => reponse[cle] && reponse[cle].length)
    .map((cle) => {
      const valeur = reponse[cle];
      const rendu = Array.isArray(valeur)
        ? `<ul style="margin:0;padding-left:1.1rem">${valeur
            .map((v) => `<li>${echappe(v)}</li>`)
            .join("")}</ul>`
        : echappe(valeur).replace(/\n/g, "<br>");
      return `<tr>
        <th style="text-align:left;vertical-align:top;padding:10px 14px 10px 0;color:#1F3578;font-family:Arial,sans-serif;font-size:13px;width:220px;border-bottom:1px solid #D3E0E9">${ETIQUETTES[cle]}</th>
        <td style="vertical-align:top;padding:10px 0;color:#16223D;font-family:Arial,sans-serif;font-size:14px;border-bottom:1px solid #D3E0E9">${rendu}</td>
      </tr>`;
    })
    .join("");

  return `<div style="background:#FBFCFD;padding:24px">
    <div style="max-width:680px;margin:0 auto;background:#fff;border:1px solid #D3E0E9">
      <div style="background:#14224F;color:#fff;padding:22px 26px;font-family:Arial,sans-serif">
        <p style="margin:0 0 6px;font-size:11px;letter-spacing:.12em;color:#5FC0EC;text-transform:uppercase">Nouvelle inscription</p>
        <h1 style="margin:0;font-size:20px">${MISSION.nom} — ${echappe(String(reponse.commune ?? ""))}</h1>
        <p style="margin:8px 0 0;font-size:13px;color:#C3D3E9">${MISSION.lieuDate}</p>
      </div>
      <table style="width:100%;border-collapse:collapse;padding:26px" cellpadding="0" cellspacing="0">
        <tbody>${lignes}</tbody>
      </table>
      <p style="margin:0;padding:18px 26px;background:#EAF2F7;color:#55627A;font-family:Arial,sans-serif;font-size:12px">
        Formulaire transmis depuis le site de la mission. Répondez directement à ce message pour joindre la commune.
      </p>
    </div>
  </div>`;
}

function accuseHtml(reponse: Reponse) {
  return `<div style="background:#FBFCFD;padding:24px">
    <div style="max-width:620px;margin:0 auto;background:#fff;border:1px solid #D3E0E9;padding:26px;font-family:Arial,sans-serif;color:#16223D">
      <p style="margin:0 0 6px;font-size:11px;letter-spacing:.12em;color:#0090D8;text-transform:uppercase">${MISSION.nom}</p>
      <h1 style="margin:0 0 16px;font-size:20px">Votre inscription est bien enregistrée</h1>
      <p style="font-size:14px;line-height:1.6">
        Bonjour, nous accusons réception de l&rsquo;inscription de la commune de
        <strong>${echappe(String(reponse.commune ?? ""))}</strong> à la délégation de l&rsquo;ANCB
        pour le Salon des Maires et des Collectivités Locales, ${MISSION.lieuDate}.
      </p>
      <p style="font-size:14px;line-height:1.6">
        Le secrétariat de la mission revient vers vous sous 48 heures pour confirmer les séquences
        retenues et ouvrir la phase de cadrage du dossier. Vous pouvez d&rsquo;ici là compléter et
        signer le bulletin officiel de l&rsquo;ANCB, puis nous le retourner par courriel.
      </p>
      <p style="font-size:14px;line-height:1.6">
        Pour toute question : <a href="mailto:${DESTINATAIRE}" style="color:#1F3578">${DESTINATAIRE}</a>.
      </p>
      <p style="font-size:12px;color:#55627A;line-height:1.6;margin-top:22px">
        Ce message est un accusé de réception automatique.
      </p>
    </div>
  </div>`;
}

async function envoyer(charge: Record<string, unknown>) {
  const reponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${CLE}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(charge),
  });

  if (!reponse.ok) {
    const detail = await reponse.text();
    throw new Error(`Resend ${reponse.status} : ${detail}`);
  }
}

export async function POST(requete: Request) {
  let donnees: Reponse;

  try {
    donnees = (await requete.json()) as Reponse;
  } catch {
    return NextResponse.json({ erreur: "Requête illisible." }, { status: 400 });
  }

  // Piège à robots : ce champ est masqué dans le formulaire.
  if (typeof donnees.societe === "string" && donnees.societe.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const manquants = OBLIGATOIRES.filter(
    (cle) => typeof donnees[cle] !== "string" || (donnees[cle] as string).trim() === "",
  );

  if (manquants.length) {
    return NextResponse.json(
      { erreur: "Certains champs obligatoires ne sont pas renseignés.", manquants },
      { status: 422 },
    );
  }

  const courriel = String(donnees.courriel).trim();

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(courriel)) {
    return NextResponse.json({ erreur: "L'adresse électronique est invalide." }, { status: 422 });
  }

  if (!CLE) {
    return NextResponse.json(
      {
        erreur:
          "Le service d'envoi n'est pas configuré. Téléchargez la fiche et retournez-la par courriel.",
        replierSurPdf: true,
      },
      { status: 503 },
    );
  }

  try {
    await envoyer({
      from: EXPEDITEUR,
      to: [DESTINATAIRE],
      reply_to: courriel,
      subject: `Inscription SMCL Paris 2026 — commune de ${String(donnees.commune).trim()}`,
      text: enTexte(donnees),
      html: enHtml(donnees),
    });

    try {
      await envoyer({
        from: EXPEDITEUR,
        to: [courriel],
        reply_to: DESTINATAIRE,
        subject: `Inscription enregistrée — ${MISSION.nom}, ${MISSION.lieuDate}`,
        html: accuseHtml(donnees),
        text:
          `Nous accusons réception de l'inscription de la commune de ${String(donnees.commune).trim()} ` +
          `à la délégation de l'ANCB pour le Salon des Maires et des Collectivités Locales, ${MISSION.lieuDate}.\n\n` +
          `Le secrétariat revient vers vous sous 48 heures. Bulletin officiel à compléter et à signer : ${FICHE.fichier}\n\n` +
          `Pour toute question : ${DESTINATAIRE}`,
      });
    } catch (erreur) {
      // L'accusé de réception est secondaire : l'inscription est déjà partie.
      console.error("Accusé de réception non envoyé :", erreur);
    }

    return NextResponse.json({ ok: true });
  } catch (erreur) {
    console.error("Envoi de l'inscription impossible :", erreur);
    return NextResponse.json(
      {
        erreur:
          "L'envoi a échoué. Téléchargez la fiche et retournez-la par courriel, nous la traiterons de la même manière.",
        replierSurPdf: true,
      },
      { status: 502 },
    );
  }
}
