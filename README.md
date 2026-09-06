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

## Brancher le formulaire Google

1. Créez le formulaire dans Google Forms avec les champs listés dans `lib/contenu.ts` (`CHAMPS_FORMULAIRE`).
2. Cliquez sur **Envoyer**, puis sur l'onglet **< >**, et copiez l'adresse contenue dans `src="…"` (elle finit par `?embedded=true`).
3. Renseignez-la dans `.env.local` :

   ```
   NEXT_PUBLIC_GOOGLE_FORM_URL=https://docs.google.com/forms/d/e/…/viewform?embedded=true
   ```

4. En production, déclarez la même variable dans les réglages de l'hébergeur (Vercel, Netlify, etc.), puis redéployez.

Tant que la variable est vide, la page `/inscription` affiche le mode d'emploi et la liste des champs recommandés à la place du formulaire. Aucune erreur, aucun écran blanc.

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
  inscription/          formulaire Google ou mode d'emploi
  mentions/             crédits photo, marques, données personnelles
  not-found.tsx
components/
  Entete, Pied, Rebours, Piliers, Illustration, EnteteDePage, AppelInscription
lib/contenu.ts          tout le contenu éditorial
public/img/             six photographies libres de droits
```

`Illustration` retrouve automatiquement la mention de licence d'une image à partir de son nom de fichier, via `CREDITS`. Ajouter une image demande donc trois choses : le fichier dans `public/img/`, une entrée dans `CREDITS`, et l'appel du composant.

## Déploiement

Toutes les pages sont statiques (`○ Static` au build). Vercel fonctionne sans configuration. Sur un autre hébergeur Node, `npm run build` puis `npm start`. Pour un export purement statique, ajoutez `output: "export"` dans `next.config.mjs` et `unoptimized: true` dans la clé `images` — les images ne seront alors plus optimisées à la volée.

## Images

Six photographies issues de Wikimedia Commons, sous licences CC0 et CC BY-SA 4.0. Les crédits apparaissent sous chaque image et sur `/mentions` : les conserver est une condition des licences.

Aucun logotype de l'ANCB, du Salon des Maires, de l'AMF ou de l'AFD n'est utilisé. Si vous obtenez une autorisation d'usage, ajoutez-les et adaptez le paragraphe correspondant de `/mentions`.

## À vérifier avant mise en ligne

- Les coordonnées du pied de page, reprises des plaquettes SAV+ (`CONTACTS` dans `lib/contenu.ts`).
- La date exacte et le lieu de la séance tripartite, encore à confirmer.
- Le chevauchement entre l'atelier international (18–20 nov.) et la journée de la coopération (20 nov.).
