export default function EnteteDePage({
  surtitre,
  titre,
  chapeau,
}: {
  surtitre?: string;
  titre: string;
  chapeau?: string;
}) {
  return (
    <section className="entete-page">
      <div className="enveloppe">
        {surtitre && <p className="surtitre">{surtitre}</p>}
        <h1>{titre}</h1>
        {chapeau && <p>{chapeau}</p>}
      </div>
    </section>
  );
}
