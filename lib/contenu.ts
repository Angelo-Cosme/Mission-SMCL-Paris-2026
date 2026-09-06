/**
 * Contenu editorial du site.
 * Tout le texte modifiable est regroupe ici : les pages ne font que le mettre en forme.
 */

export const MISSION = {
  nom: "Mission SMCL Paris 2026",
  sousTitre: "Coopération décentralisée Bénin · France",
  dateOuvertureSalon: "2026-11-24T09:00:00+01:00",
};

export const CONTACTS = {
  benin: {
    titre: "Secrétariat au Bénin",
    adresse: "08 BP 0053, Cotonou",
    telephone: "+229 53 22 20 98",
    telephoneLien: "+22953222098",
    courriel: "contact@savplus.net",
  },
  france: {
    titre: "Relais en France",
    adresse: "38 rue Paul Lafargue, 93160 Noisy-le-Grand",
    telephone: "+33 1 48 15 36 67",
    telephoneLien: "+33148153667",
    courriel: "contact@savplusformation.fr",
  },
};

export const NAVIGATION = [
  { href: "/", libelle: "Accueil" },
  { href: "/programme", libelle: "Programme" },
  { href: "/accompagnement", libelle: "Accompagnement" },
  { href: "/financements", libelle: "Financements" },
];

export const RAIL = [
  { date: "18–20 nov.", libelle: "Atelier international, 25 heures de formation" },
  { date: "20 nov.", libelle: "Journée de la coopération et de la diaspora" },
  { date: "24–26 nov.", libelle: "Salon des Maires et des Collectivités Locales" },
  { date: "En marge", libelle: "Séance tripartite au Quai d'Orsay" },
];

export const CHIFFRES = [
  { valeur: "77", libelle: "communes du Bénin concernées" },
  { valeur: "+1000", libelle: "élus et décideurs présents au salon" },
  { valeur: "25 h", libelle: "de formation à l'ingénierie de coopération" },
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

export const PILIERS_DETAILLES = [
  {
    titre: "Ingénierie de projet",
    texte:
      "Diagnostic des besoins de la commune, élaboration des fiches de projets de coopération, constitution des dossiers de partenariat et chiffrage réaliste des contreparties locales.",
  },
  {
    titre: "Diplomatie et réseaux",
    texte:
      "Facilitation des accès auprès du MEAE, de l'Ambassade du Bénin à Paris, de l'Association des Maires de France, des conseils régionaux et départementaux français.",
  },
  {
    titre: "Suivi et pérennisation",
    texte:
      "Formalisation des conventions de partenariat, montage des requêtes de cofinancement FICOL et DAECT, suivi des dossiers après le salon.",
  },
];

export type Sequence = {
  date: string;
  etiquette: string;
  titre: string;
  chapeau: string;
  points: { fort?: string; texte: string }[];
};

export const SEQUENCES: Sequence[] = [
  {
    date: "18 – 20 novembre",
    etiquette: "Atelier international",
    titre: "Trois modules pour bâtir des ponts territoriaux",
    chapeau:
      "Vingt-cinq heures de formation destinées aux élus et aux cadres techniques, organisées autour de trois axes et six activités clés.",
    points: [
      {
        fort: "Montage de projet de coopération",
        texte:
          "cadre institutionnel et juridique, dispositifs légaux, acteurs clés, méthodes et outils de montage.",
      },
      {
        fort: "Mobilisation des financements internationaux",
        texte:
          "cartographie des bailleurs, appels à projets, fonds européens, gouvernance et suivi-évaluation des partenariats.",
      },
      {
        fort: "Marketing territorial et communication digitale",
        texte:
          "identifier et promouvoir les atouts économiques et sociaux de la commune, stratégies numériques au service de l'attractivité.",
      },
    ],
  },
  {
    date: "20 novembre",
    etiquette: "Journée de la coopération",
    titre: "Rencontres, réseautage et partenariats concrets",
    chapeau:
      "Une journée entière consacrée à la mise en relation entre les collectivités béninoises, les acteurs de la diaspora en France et les partenaires techniques et financiers. Plus de cent participants attendus.",
    points: [
      { texte: "Présentation des projets prioritaires portés par les communes en quête de partenaires." },
      { texte: "Rencontres avec les associations de la diaspora béninoise en France." },
      { texte: "Échanges bilatéraux structurés entre élus et techniciens." },
      {
        texte:
          "Table ronde avec les agences de développement, bailleurs bilatéraux et organisations multilatérales.",
      },
    ],
  },
  {
    date: "24 – 26 novembre",
    etiquette: "Salon des Maires",
    titre: "Trois jours au cœur du rendez-vous national des élus français",
    chapeau:
      "Le Salon des Maires et des Collectivités Locales réunit plus de mille élus et décideurs. La délégation y dispose d'un espace de représentation et d'un agenda de rendez-vous préparé en amont.",
    points: [
      { texte: "Espace dédié à la coopération décentralisée et aux partenariats internationaux." },
      { texte: "Rendez-vous bilatéraux avec des maires et décideurs territoriaux français." },
      { texte: "Accès aux conférences et forums thématiques du salon." },
      { texte: "Mise en avant des projets de coopération portés par les communes de la délégation." },
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
      "Atelier international, journée de la coopération, séance tripartite au Quai d'Orsay et trois jours de Salon des Maires.",
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

export const CHAMPS_FORMULAIRE = [
  "Commune ou collectivité",
  "Département",
  "Nom et prénom du participant",
  "Fonction exercée",
  "Adresse électronique",
  "Téléphone et WhatsApp",
  "Séquences souhaitées (atelier, journée de la coopération, salon)",
  "Nombre de personnes de la commune",
  "Thématiques prioritaires",
  "Projets à présenter à Paris",
  "Budget indicatif de chaque projet",
  "Partenariats ou jumelages existants",
  "Passeport en cours de validité et date d'expiration",
  "Besoin d'appui pour les démarches de visa",
  "Langue de travail souhaitée",
  "Personne référente pour le suivi du dossier",
];

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
    titre: "Vue panoramique du quartier Zongo à Cotonou au Bénin",
    auteur: "Adoscam",
    licence: "CC0",
    page: "https://commons.wikimedia.org/wiki/File:Vue_panoramique_du_quartier_Zongo_%C3%A0_Cotonou_au_B%C3%A9nin.jpg",
  },
  {
    fichier: "cotonou-cadjehoun.jpg",
    titre: "Vue panoramique du quartier Cadjéhoun à Cotonou au Bénin",
    auteur: "Adoscam",
    licence: "CC BY-SA 4.0",
    page: "https://commons.wikimedia.org/wiki/File:Vue_panoramique_quartier_cadj%C3%A9houn-Cotonou_au_B%C3%A9nin_1.jpg",
  },
  {
    fichier: "quai-orsay.jpg",
    titre: "Ministère français de l'Europe et des Affaires étrangères, quai d'Orsay",
    auteur: "Jebulon",
    licence: "CC0",
    page: "https://commons.wikimedia.org/wiki/File:Minist%C3%A8re_fran%C3%A7ais_des_Affaires_Etrang%C3%A8res_et_Europ%C3%A9ennes_Quai_d%27Orsay_Paris.jpg",
  },
  {
    fichier: "salon-stand.jpg",
    titre: "Stand d'exposition dans un salon professionnel (photo d'illustration)",
    auteur: "Silverije",
    licence: "CC BY-SA 4.0",
    page: "https://commons.wikimedia.org/wiki/File:MESAP_2017._-_%C5%A1tand_Turisti%C4%8Dke_zajednice_Me%C4%91imurske_%C5%BEupanije.jpg",
  },
  {
    fichier: "assemblee-benin.jpg",
    titre: "Assemblée nationale du Bénin",
    auteur: "Ksperentos",
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
