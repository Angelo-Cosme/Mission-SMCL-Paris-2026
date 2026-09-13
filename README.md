# Mission SMCL Paris 2026

Site d'information et d'inscription pour la mission des communes du Bénin au Salon des Maires et des Collectivités Locales de Paris, novembre 2026.

Next.js 15 (App Router), TypeScript, React 19. Aucune dépendance UI : le style tient dans une feuille CSS unique avec des variables de thème.

## Démarrer

```bash
npm install
cp .env.example .env.local
npm run dev
```

Le site tourne sur http://localhost:3000. Pour vérifier le rendu de production : `npm run build && npm start`.

## Brancher l'envoi des inscriptions par courriel

Le formulaire de `/inscription` poste vers la route `app/api/inscription/route.ts`, qui envoie
deux courriels via l'API HTTP de [Resend](https://resend.com) : le récapitulatif au secrétariat
de la mission, et un accusé de réception à la commune. Aucune dépendance npm supplémentaire.

1. Créez un compte Resend et **vérifiez le domaine** du site (Domains > Add Domain, puis les
   enregistrements DNS SPF/DKIM fournis).
2. Générez une clé API, puis renseignez `.env.local` :

   ```
   RESEND_API_KEY=re_…
   MAIL_DESTINATAIRE=juandjikpesse@gmail.com
   MAIL_EXPEDITEUR="Mission SMCL <inscription@votre-domaine.fr>"
   ```

3. En production, déclarez les trois mêmes variables dans les réglages de l'hébergeur
   (Vercel : Settings > Environment Variables), puis redéployez.

`MAIL_EXPEDITEUR` doit utiliser un domaine vérifié chez Resend. L'adresse de test
`onboarding@resend.dev` fonctionne sans domaine, mais n'écrit qu'au propriétaire du compte.

Tant que `RESEND_API_KEY` est vide, l'envoi renvoie une erreur explicite et le formulaire invite
à télécharger le bulletin PDF et à le retourner par courriel. Aucun écran blanc, aucune perte
d'inscription silencieuse.

Le destinataire, l'expéditeur et le contenu des courriels sont dans
`app/api/inscription/route.ts` ; les champs et les listes de choix viennent de `FICHE` dans
`lib/contenu.ts`.

## Modifier le contenu

Tout le texte éditorial est regroupé dans **`lib/contenu.ts`** : dates, séquences du programme, ordre du jour de la séance tripartite, calendrier opérationnel, guichets de financement, réseaux, contacts, champs du formulaire et crédits photographiques. Les pages ne font que mettre ces données en forme, donc une correction de contenu ne touche jamais au JSX.

Le compte à rebours de la page d'accueil se règle avec `MISSION.dateOuvertureSalon` dans ce même fichier.

Les couleurs, typographies et espacements sont dans le bloc `:root` en haut de `app/globals.css`. Les polices (Spectral et Karla) sont chargées par `next/font/google`, donc auto-hébergées : aucun appel réseau vers Google Fonts au chargement.

## Structure

```
app/
  layout.tsx            en-tête, pied de page, polices, métadonnées
  page.tsx              accueil
  programme/            les trois séquences + séance tripartite
  accompagnement/       trois piliers, calendrier, recommandations
  financements/         FICOL, DAECT, dispositifs européens, réseaux
  inscription/          formulaire en ligne + bulletin PDF
  api/inscription/      route d'envoi des inscriptions par courriel
  mentions/             crédits photo, marques, données personnelles
  not-found.tsx
components/
  Entete, Pied, Rebours, Piliers, Illustration, EnteteDePage, AppelInscription,
  FormulaireInscription
lib/contenu.ts          tout le contenu éditorial
public/img/             six photographies libres de droits
```

`Illustration` retrouve automatiquement la mention de licence d'une image à partir de son nom de fichier, via `CREDITS`. Ajouter une image demande donc trois choses : le fichier dans `public/img/`, une entrée dans `CREDITS`, et l'appel du composant.

## Déploiement

Toutes les pages sont statiques (`○ Static` au build). Vercel fonctionne sans configuration. Sur un autre hébergeur Node, `npm run build` puis `npm start`. Pour un export purement statique, ajoutez `output: "export"` dans `next.config.mjs` et `unoptimized: true` dans la clé `images` — les images ne seront alors plus optimisées à la volée.

## Images

Cinq photographies issues de Wikimedia Commons, sous licences CC0 et CC BY-SA 4.0. Les crédits apparaissent sous chaque image et sur `/mentions` : les conserver est une condition des licences.

Aucun logotype de l'ANCB, du Salon des Maires, de l'AMF ou de l'AFD n'est utilisé. Si vous obtenez une autorisation d'usage, ajoutez-les et adaptez le paragraphe correspondant de `/mentions`.

## À vérifier avant mise en ligne

- Les coordonnées du pied de page : Cabinet FM Consulting (Cotonou) et relais Paris (`CONTACTS` dans `lib/contenu.ts`).
- La date exacte et le lieu de la séance tripartite (25, 26 ou 27 novembre), encore à confirmer.
- La fiche d'inscription PDF (`public/documents/`) et l'adresse de retour indiquée sur le bulletin.
- La clé `RESEND_API_KEY` et le domaine d'envoi : sans eux, le formulaire en ligne n'envoie rien.
