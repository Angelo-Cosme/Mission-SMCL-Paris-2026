/**
 * Contenu editorial du site.
 * Tout le texte modifiable est regroupe ici : les pages ne font que le mettre en forme.
 */

export const MISSION = {
  nom: "Mission SMCL",
  nomComplet: "Mission SMCL (Salon des Maires et des Collectivités Locales)",
  sousTitre: "Coopération décentralisée Bénin · France",
  lieuDate: "Paris, 24 au 29 novembre 2026",
  sigle: "SMCL",
  definition: "Salon des Maires et des Collectivités Locales",
  operateur: "FM Consulting",
  logo: "/img/logo-fm-consulting.png",
  dateOuvertureSalon: "2026-11-24T09:00:00+01:00",
};

export const CONTACTS = {
  benin: {
    titre: "Cabinet FM Consulting · Cotonou",
    adresse:
      "Îlot 153-154, Parcelle A – 1er arrondissement – Quartier Avlékété-Jonquet – Cotonou – Bénin",
    boitePostale: "03 BP 1672 Cotonou",
    telephone: "+229 01 97 50 69 64",
    telephoneLien: "+2290197506964",
    courriel: "cabinetfmconsulting25@gmail.com",
  },
  france: {
    titre: "Relais à Paris",
    nom: "Romain Da Costa",
    role: "Expert en développement territorial",
    adresse: "42, avenue de la République – 93110 Rosny-sous-Bois",
    telephone: "+33 6 63 96 76 47",
    telephoneLien: "+33663967647",
    courriel: "juandjikpesse@gmail.com",
  },
};

export const NAVIGATION = [
  { href: "/", libelle: "Accueil" },
  { href: "/programme", libelle: "Programme" },
  { href: "/accompagnement", libelle: "Accompagnement" },
  { href: "/financements", libelle: "Financements" },
];

export const RAIL = [
  { date: "24–26 nov.", libelle: "Salon des Maires, Paris Expo Porte de Versailles" },
  { date: "25, 26 ou 27 nov.", libelle: "Séance de travail tripartite ANCB · Ambassade · MEAE" },
  { date: "En marge", libelle: "Rendez-vous B2B avec les collectivités françaises" },
  { date: "24–29 nov.", libelle: "Rencontres AMF et Cités Unies France" },
];

export const CHIFFRES = [
  { valeur: "77", libelle: "communes du Bénin concernées" },
  { valeur: "+1000", libelle: "élus et décideurs présents au salon" },
  { valeur: "3 j", libelle: "de salon Porte de Versailles" },
  { valeur: "1 M€", libelle: "plafond indicatif d'un projet FICOL" },
];

export const PILIERS = [
  {
    titre: "Préparer",
    texte:
      "Diagnostic des besoins de la commune, rédaction des fiches-projets de coopération et constitution du dossier de partenariat présentable à un bailleur.",
  },
  {
    titre: "Ouvrir les portes",
    texte:
      "Mise en relation avec l'Association des Maires de France, Cités Unies France, les réseaux régionaux multi-acteurs, l'Ambassade du Bénin et la DAECT.",
  },
  {
    titre: "Faire aboutir",
    texte:
      "Rédaction des conventions de partenariat, montage des demandes de cofinancement FICOL et DAECT, puis suivi des dossiers en 2027.",
  },
];

/* ---------- Page Accompagnement ---------- */

export type Point = { fort?: string; texte: string };

export const ACCOMPAGNEMENT = {
  titre: "Cap sur le SMCL Paris 2026 et la coopération franco-béninoise",
  positionnement: {
    titre: "Positionnement et expertise",
    texte:
      "Le cabinet FM consulting met l’expertise institutionnelle, le réseau et la connaissance fine des rouages de la coopération décentralisée d’un ancien cadre dirigeant de la fonction publique territoriale française, au service des 77 communes du Bénin.",
  },
  objectifs: {
    titre: "Objectifs clés",
    points: [
      "Structurer et sécuriser des partenariats de coopération décentralisée pérennes et mutuellement bénéfiques.",
      "Maximiser la visibilité internationale des communes béninoises lors du Salon des Maires et des Collectivités Locales à Paris en novembre 2026.",
      "Mobiliser des financements et des ressources techniques auprès des bailleurs et des réseaux français.",
    ],
  },
  feuilleDeRoute: {
    titre: "Feuille de route de la mission",
    periode: "Août – novembre 2026",
    phases: [
      {
        numero: "Phase 1",
        periode: "Août – septembre 2026",
        titre: "Mobilisation et inscription",
        points: [
          { texte: "Restitution des besoins des communes béninoises après le renouvellement de l'ANCB." },
          { texte: "Lancement officiel de la délégation béninoise pour le SMCL 2026." },
          {
            texte:
              "Identification des thématiques prioritaires : transition écologique, développement économique local, services de base.",
          },
        ] as Point[],
      },
      {
        numero: "Phase 2",
        periode: "Septembre – octobre 2026",
        titre: "Préparation des rencontres clés",
        points: [
          {
            fort: "Association des Maires de France (AMF)",
            texte: "cadrage politique du rapprochement ANCB-AMF et entretien avec la présidence.",
          },
          {
            fort: "Cités Unies France (CUF)",
            texte: "organisation d'une session dédiée au groupe pays Bénin.",
          },
          {
            fort: "Séquence institutionnelle",
            texte:
              "coordination avec l'Ambassade du Bénin en France et la Délégation pour l'action extérieure des collectivités territoriales (DAECT) du MEAE.",
          },
        ] as Point[],
      },
      {
        numero: "Phase 3",
        periode: "Novembre 2026",
        titre: "Déploiement à Paris",
        points: [
          { texte: "Animation du stand et de l'espace ANCB au SMCL." },
          {
            texte:
              "Séance de travail tripartite : maires du Bénin, Ambassade du Bénin et Directeur de la coopération décentralisée (MEAE).",
          },
          {
            fort: "B2B et matchmaking",
            texte: "mises en relation ciblées avec des collectivités françaises souhaitant s'engager au Bénin.",
          },
        ] as Point[],
      },
    ],
  },
  pointsFocaux: {
    titre: "Points focaux de la séance de travail tripartite",
    chapeau: "Trois sujets structurent la demi-journée parisienne.",
    points: [
      {
        fort: "Diplomatie territoriale",
        texte:
          "alignement stratégique entre la politique étrangère béninoise et l'action extérieure des collectivités françaises.",
      },
      {
        fort: "Cofinancements",
        texte:
          "mobilisation du FICOL (Facility for Local Authorities) géré par l'AFD et des fonds d'appui de la DAECT.",
      },
      {
        fort: "Pérennisation",
        texte: "signature d'une feuille de route commune d'accompagnement technique après le SMCL.",
      },
    ] as Point[],
  },
};

/* ---------- Page Programme ---------- */

export type Sequence = {
  date: string;
  etiquette: string;
  titre: string;
  chapeau: string;
  points: Point[];
};

export const SEQUENCES: Sequence[] = [
  {
    date: "24 – 26 novembre",
    etiquette: "Porte de Versailles",
    titre: "Salon des Maires et des Collectivités Locales",
    chapeau:
      "Trois jours au contact des réalités de la gestion des communes et des territoires français, à Paris Expo Porte de Versailles.",
    points: [
      { texte: "Participation aux travaux, conférences et ateliers du Congrès des Maires." },
      { texte: "Visite du Salon des Maires." },
      { texte: "Rencontres avec les entreprises et les institutions." },
      { texte: "Rendez-vous avec les maires et les décideurs territoriaux." },
      {
        texte:
          "Temps d'échange avec le président de l'Association des Maires de France.",
      },
    ],
  },
  {
    date: "25, 26 ou 27 novembre",
    etiquette: "En marge du salon",
    titre: "Séance de travail tripartite",
    chapeau:
      "Une demi-journée au ministère de l'Europe et des Affaires étrangères ou à l'Ambassade du Bénin en France, dans le cadre de la mission des maires du Bénin à Paris.",
    points: [
      {
        fort: "Délégation béninoise",
        texte: "bureau de l'ANCB et maires des communes du Bénin.",
      },
      {
        fort: "Partie diplomatique",
        texte: "l'Ambassadeur du Bénin en France et ses conseillers diplomatiques.",
      },
      {
        fort: "Partie française",
        texte:
          "le Directeur de la coopération décentralisée, délégué pour l'action extérieure des collectivités territoriales (DAECT / MEAE), et les chargés de mission Afrique.",
      },
    ],
  },
];

export const TRIPARTITE = [
  {
    heure: "14h00 – 14h15",
    fort: "Ouverture institutionnelle.",
    texte:
      "Mot de l'Ambassadeur du Bénin sur le rôle du réseau diplomatique dans le développement local, orientations françaises pour la coopération territoriale avec le Bénin, puis priorités du mandat renouvelé de l'ANCB.",
  },
  {
    heure: "14h15 – 15h00",
    fort: "Bilan et alignement stratégique.",
    texte:
      "État des lieux des jumelages et conventions existants, puis mise en concordance du Programme d'action du gouvernement, des plans de développement communal et de la politique française d'aide au développement. Thématiques retenues : eau et assainissement, transition écologique, développement économique local, numérisation des services communaux.",
  },
  {
    heure: "15h00 – 16h00",
    fort: "Dispositifs de cofinancement.",
    texte:
      "Présentation des appels à projets généralistes et thématiques du MEAE, critères d'éligibilité et calendrier des guichets 2027, puis articulation avec le FICOL de l'AFD et les dispositifs européens.",
  },
  {
    heure: "16h00 – 16h45",
    fort: "Feuille de route et mise en réseau.",
    texte:
      "Stratégie de mise en relation après le salon avec Cités Unies France et l'AMF, création d'un comité de suivi technique tripartite, calendrier de dépôt des premières fiches-projets.",
  },
  {
    heure: "16h45 – 17h00",
    fort: "Clôture.",
    texte: "Allocutions finales et signature du compte rendu d'orientations.",
  },
  {
    heure: "17h00",
    texte: "Cocktail de mise en réseau et photographies officielles.",
  },
];

export const CALENDRIER = [
  {
    date: "Septembre 2026",
    etiquette: "En cours",
    titre: "Cartographie des besoins et cadrage technique",
    texte:
      "Recensement des intentions de coopération des communes inscrites, constitution du groupe de travail, premiers contacts avec l'AMF, Cités Unies France et le MEAE.",
    livrable: "Catalogue officiel des projets de coopération des communes béninoises.",
  },
  {
    date: "Octobre 2026",
    etiquette: "Verrouillage de l'agenda",
    titre: "Logistique et calage des rendez-vous",
    texte:
      "Organisation du déplacement, préparation des formalités de voyage, calage de l'agenda institutionnel parisien et confirmation de la session avec la DAECT et l'Ambassade.",
    livrable: "Planning nominatif des rendez-vous bilatéraux.",
  },
  {
    date: "Novembre 2026",
    etiquette: "Déploiement",
    titre: "La délégation à Paris",
    texte:
      "Trois jours de Salon des Maires, séance de travail tripartite au ministère de l'Europe et des Affaires étrangères et rendez-vous bilatéraux avec les collectivités françaises.",
    livrable: "Déclarations d'intention et accords d'engagement partenarial.",
  },
  {
    date: "Décembre 2026",
    etiquette: "Contractualisation",
    titre: "Bilan et dépôt des dossiers",
    texte:
      "Rédaction du relevé de décisions, montage préliminaire des dossiers de cofinancement et formalisation des conventions engagées à Paris.",
    livrable: "Feuille de route 2027 de la coopération décentralisée Bénin-France.",
  },
];

export const GUICHETS = [
  {
    titre: "FICOL — Agence Française de Développement",
    texte:
      "La Facilité de financement des collectivités territoriales françaises soutient des projets portés par une collectivité française avec sa partenaire du Sud. Les engagements se situent généralement entre 200 000 € et 1 million d'euros par projet.",
  },
  {
    titre: "Fonds d'appui de la DAECT",
    texte:
      "La Délégation pour l'action extérieure des collectivités territoriales, au ministère de l'Europe et des Affaires étrangères, cofinance chaque année des partenariats de coopération décentralisée par appels à projets généralistes et thématiques.",
  },
  {
    titre: "Dispositifs européens",
    texte:
      "Les initiatives Team Europe et Global Gateway ouvrent des financements aux partenariats binationaux, en particulier sur l'eau, l'énergie, le numérique et les infrastructures urbaines.",
  },
];

export const RESEAUX = [
  {
    titre: "Association des Maires de France",
    texte:
      "Le réseau de référence des élus français. Un rapprochement entre l'ANCB et l'AMF ouvre la porte aux jumelages et aux échanges entre associations faîtières.",
  },
  {
    titre: "Cités Unies France",
    texte:
      "Le réseau des collectivités françaises engagées à l'international anime un groupe pays Bénin, cadre naturel pour présenter les projets des communes.",
  },
  {
    titre: "Réseaux régionaux multi-acteurs",
    texte:
      "Présents dans chaque région française, ils fédèrent collectivités, associations et entreprises autour de la coopération internationale.",
  },
];

/* ---------- Fiche d'inscription (bulletin officiel ANCB) ---------- */

export const FICHE = {
  fichier: "/documents/fiche-inscription-smcl-paris-2026.pdf",
  organisme: "Association Nationale des Communes du Bénin (ANCB)",
  titre: "Bulletin officiel d'inscription et des intentions de coopération",
  mission:
    "Mission institutionnelle « Cap sur le SMCL Paris & Réseaux de Coopération Décentralisée » — Paris, novembre 2026",
  note:
    "Ce formulaire enregistre la participation de votre commune à la délégation officielle de l'ANCB pour le Salon des Maires et des Collectivités Locales 2026 à Paris, et recense vos priorités de développement local afin de structurer les rendez-vous B2B et la séance de travail avec le ministère de l'Europe et des Affaires étrangères et l'Ambassade du Bénin.",
  retour: {
    avant: "30 septembre 2026",
    destinataire: "Secrétariat permanent de l'ANCB",
    courriel: "contact@ancb.bj",
    copie: "cabinetfmconsulting25@gmail.com",
  },
  identification: [
    "Commune",
    "Département",
    "Nom et prénom du maire ou du représentant",
    "Qualité : maire, adjoint au maire ou président d'intercommunalité",
    "Téléphone mobile (WhatsApp)",
    "Adresse électronique officielle",
    "Nom et contact du focal technique (SG / DST)",
  ],
  cooperation: {
    question:
      "Avez-vous actuellement un partenariat de coopération décentralisée ou un jumelage actif ?",
    reponses: ["Oui", "Non, aucun partenariat actif", "Partenariat en cours de négociation"],
    precision: "Si oui ou en cours, préciser la ou les collectivités partenaires (nom, pays).",
  },
  domaines: {
    consigne: "Deux choix maximum, à défendre lors des rendez-vous B2B à Paris.",
    liste: [
      "Eau potable, assainissement et gestion des déchets",
      "Numérisation, énergie solaire et services urbains",
      "Développement économique local, agriculture et marchés",
      "Patrimoine, tourisme local et échanges culturels",
      "Santé communautaire, éducation et jeunesse",
      "Renforcement des capacités et formation des agents",
    ],
  },
  projet: [
    "Titre du projet prioritaire de la commune",
    "Objectif principal et bénéficiaires attendus",
    "Estimation du budget global du projet, si disponible",
  ],
  sequences: [
    {
      fort: "Présence aux travaux du congrès et au SMCL",
      texte: "rendez-vous B2B programmés.",
    },
    {
      fort: "Séance tripartite au MEAE",
      texte: "maires de l'ANCB, Ambassade du Bénin et DAECT du ministère des Affaires étrangères.",
    },
    {
      fort: "Rencontre officielle AMF et Cités Unies France",
      texte: "réseaux d'élus et groupe pays Bénin.",
    },
  ] as Point[],
  frais: {
    montant: "2 000 €",
    unite: "pour une délégation de 2 personnes",
    inclus: [
      "Entrée au congrès et participation aux travaux des maires et décideurs territoriaux.",
      "Visite de l'exposition SMCL.",
      "Participation à la réunion tripartite ANCB et élus béninois / MEAE / Ambassade du Bénin à Paris.",
      "Rencontre avec l'AMF.",
    ],
    reglement: "Règlement au Cabinet FM Consulting, par virement ou par chèque.",
    echeancier: [
      "50 % à l'inscription.",
      "Solde au plus tard le 30 octobre, après confirmation et validation des rendez-vous officiels.",
    ],
  },
  engagement:
    "Le maire confirme l'intérêt officiel de sa commune à intégrer la délégation officielle de l'ANCB pour le SMCL Paris 2026, et mandate l'ANCB et son cabinet-conseil pour organiser les rendez-vous institutionnels et partenariaux afférents. La fiche est datée, signée et revêtue du cachet de la commune.",
};

export type Credit = {
  fichier: string;
  titre: string;
  auteur: string;
  licence: string;
  page: string;
};

export const CREDITS: Credit[] = [
  {
    fichier: "cotonou-panorama.jpg",
    titre: "",
    auteur: "Adoscam",
    licence: "CC0",
    page: "https://commons.wikimedia.org/wiki/File:Vue_panoramique_du_quartier_Zongo_%C3%A0_Cotonou_au_B%C3%A9nin.jpg",
  },
  {
    fichier: "cotonou-cadjehoun.jpg",
    titre: "",
    auteur: "Adoscam",
    licence: "CC BY-SA 4.0",
    page: "https://commons.wikimedia.org/wiki/File:Vue_panoramique_quartier_cadj%C3%A9houn-Cotonou_au_B%C3%A9nin_1.jpg",
  },
  {
    fichier: "quai-orsay.jpg",
    titre: "",
    auteur: "Jebulon",
    licence: "CC0",
    page: "https://commons.wikimedia.org/wiki/File:Minist%C3%A8re_fran%C3%A7ais_des_Affaires_Etrang%C3%A8res_et_Europ%C3%A9ennes_Quai_d%27Orsay_Paris.jpg",
  },
  {
    fichier: "ancb-benin.jpg",
    titre: "",
    auteur: "Adoscam",
    licence: "CC BY-SA 4.0",
    page: "https://commons.wikimedia.org/wiki/File:Assembl%C3%A9e_Nationale_du_B%C3%A9nin.jpg",
  },
  {
    fichier: "port-cotonou.jpg",
    titre: "Port autonome de Cotonou vu de haut",
    auteur: "Fawaz.tairou",
    licence: "CC BY-SA 4.0",
    page: "https://commons.wikimedia.org/wiki/File:Port_autonome_de_Cotonou_vu_de_haut_(3).jpg",
  },
];
