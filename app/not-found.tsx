import Link from "next/link";
import EnteteDePage from "@/components/EnteteDePage";

export default function Introuvable() {
  return (
    <>
      <EnteteDePage
        titre="Cette page n'existe pas"
        chapeau="Le lien est peut-être ancien ou mal recopié."
      />
      <section className="section">
        <div className="enveloppe">
          <div className="actions">
            <Link className="bouton" href="/">
              Revenir à l&rsquo;accueil
            </Link>
            <Link className="bouton bouton-ligne" href="/programme">
              Voir le programme
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
