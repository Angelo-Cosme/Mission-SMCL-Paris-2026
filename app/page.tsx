import Image from "next/image";
import Link from "next/link";
import AppelInscription from "@/components/AppelInscription";
import Illustration from "@/components/Illustration";
import Piliers from "@/components/Piliers";
import Rebours from "@/components/Rebours";
import { CHIFFRES, MISSION, PILIERS, RAIL } from "@/lib/contenu";

export default function Accueil() {
  return (
    <>
      <section className="heros">
        <div className="heros-fond">
          <Image
            src="/img/cotonou-panorama.jpg"
            alt=""
            aria-hidden="true"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="enveloppe">
          <p className="surtitre">{MISSION.lieuDate}</p>
          <h1>{MISSION.nomComplet}</h1>
          <p className="heros-sous">{MISSION.sousTitre}</p>
          <div className="actions">
            <Link className="bouton" href="/inscription">
              Inscrire ma commune
            </Link>
            <Link className="bouton bouton-ligne" href="/programme">
              Voir le programme
            </Link>
          </div>
          <Rebours />
        </div>
      </section>

      <section className="rail">
        <div className="enveloppe">
          {RAIL.map((case_) => (
            <div className="rail-case" key={case_.date}>
              <b className="rail-date">{case_.date}</b>
              <span className="rail-libelle">{case_.libelle}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="enveloppe">
          <div className="duo">
            <div className="duo-texte">
              <h2 className="titre-section">
                Rendez-vous au SMCL
                {/* Pourquoi une commune béninoise a intérêt à être à Paris en novembre */}
              </h2>
              <p>
                Avec <strong>1 300 exposants </strong> et <strong>400 conférences et animations</strong>, le Salon des Maires et des
                collectivités Locales offrent des rendez-vous incontournables qui couvrent l’ensemble
                des enjeux des collectivités : <strong>construction et aménagement</strong>, <strong>transports et mobilité</strong>,
                <strong>environnement et cadre de vie</strong>, <strong>sécurité, prévention et protection</strong>, <strong>culture, loisirs et
                événements</strong>, <strong>énergie et climat</strong>, <strong>numérique et connectivité</strong>, <strong>santé</strong>, <strong>social</strong>, <strong>enfance et
                vivre ensemble</strong>, <strong>développement</strong>, <strong>attractivité et cohésion territoriales</strong>, <strong>sports et
                parasports</strong>, <strong>biodiversité</strong>. Un cadre unique pour s’inspirer, échanger et faire avancer les
                projets des territoires.
              </p>
              {/* <p>
                Encore faut-il arriver préparé. Un maire qui se présente avec une fiche-projet
                chiffrée, un cofinancement identifié et un interlocuteur français déjà rencontré
                repart avec une déclaration d&rsquo;intention. Un maire qui découvre le salon sur
                place repart avec des cartes de visite.
              </p> */}
              {/* <p>Cette mission existe pour que les communes béninoises soient dans le premier cas.</p> */}
            </div>
            <Illustration
              fichier="cotonou-cadjehoun.jpg"
              alt="Vue panoramique du quartier Cadjéhoun à Cotonou"
              hauteur={1125}
            />
          </div>
        </div>
      </section>

      <section className="section section-bleue">
        <div className="enveloppe">
          <h2 className="titre-section">Ce que représente le rendez-vous</h2>
          <p className="intro">
            Le Salon des Maires rassemble chaque année à Paris les élus et décideurs
            territoriaux de toute la France.
          </p>
          <div className="chiffres">
            {CHIFFRES.map((chiffre) => (
              <div className="chiffre" key={chiffre.libelle}>
                <b>{chiffre.valeur}</b>
                <span>{chiffre.libelle}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="enveloppe">
          <h2 className="titre-section">Trois piliers d&rsquo;accompagnement</h2>
          <p className="intro">
            La mission ne se limite pas au voyage. Elle commence en septembre et se poursuit
            après le retour.
          </p>
          <Piliers piliers={PILIERS} />
          <div className="actions">
            <Link className="bouton bouton-ligne" href="/accompagnement">
              Détail du dispositif et calendrier
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-claire">
        <div className="enveloppe">
          <div className="duo">
            <Illustration
              fichier="quai-orsay.jpg"
              alt="Le ministère français de l'Europe et des Affaires étrangères, quai d'Orsay à Paris"
              hauteur={973}
            />
            <div className="duo-texte">
              <h2 className="titre-section">Une séance de travail avec les
                acteurs de la coopération décentralisée</h2>
              <p>
                Le bureau de l’ANCB et les maires de la délégation ; l’Ambassadeur du Bénin
                en France et ses conseillers diplomatiques ; le Directeur de la coopération
                décentralisée et les chargés de mission Afrique de la DCTCIV.
              </p>
              <p>
                L&rsquo;objet est précis : aligner les priorités des plans de développement
                communal avec les guichets français de cofinancement, et fixer un calendrier de
                dépôt de dossiers pour 2027.
              </p>
              <div className="actions">
                <Link className="bouton bouton-ligne" href="/programme#tripartite">
                  Voir l&rsquo;ordre du jour
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AppelInscription
        titre="Les places de la délégation se calent en octobre"
        texte="L'agenda institutionnel parisien, les rendez-vous bilatéraux et les formalités de voyage se préparent maintenant. Une commune inscrite tardivement pourra assister au salon, mais pas figurer dans les rendez-vous programmés."
      />
    </>
  );
}
