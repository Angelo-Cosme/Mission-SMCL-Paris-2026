type Pilier = { titre: string; texte: string };

export default function Piliers({ piliers }: { piliers: Pilier[] }) {
  return (
    <div className="piliers">
      {piliers.map((pilier) => (
        <article className="pilier" key={pilier.titre}>
          <h3>{pilier.titre}</h3>
          <p>{pilier.texte}</p>
        </article>
      ))}
    </div>
  );
}
