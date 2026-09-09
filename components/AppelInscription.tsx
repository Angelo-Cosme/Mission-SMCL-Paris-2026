import Link from "next/link";

export default function AppelInscription({
  titre,
  texte,
}: {
  titre: string;
  texte: string;
}) {
  return (
    <section className="section section-bleue">
      <div className="enveloppe">
        <h2 className="titre-section">{titre}</h2>
        <p className="intro">{texte}</p>
        <div className="actions">
          <Link className="bouton" href="/inscription">
            Inscrire ma commune
          </Link>
        </div>
      </div>
    </section>
  );
}
