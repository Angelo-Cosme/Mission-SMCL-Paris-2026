import Image from "next/image";
import { CREDITS } from "@/lib/contenu";

/** Image d'illustration accompagnée de sa mention de licence. */
export default function Illustration({
  fichier,
  alt,
  largeur = 1500,
  hauteur = 1000,
  priorite = false,
}: {
  fichier: string;
  alt: string;
  largeur?: number;
  hauteur?: number;
  priorite?: boolean;
}) {
  const credit = CREDITS.find((c) => c.fichier === fichier);

  return (
    <figure className="figure">
      <Image
        src={`/img/${fichier}`}
        alt={alt}
        width={largeur}
        height={hauteur}
        priority={priorite}
        loading={priorite ? "eager" : "lazy"}
        sizes="(max-width: 860px) 100vw, 45vw"
      />

      {credit && (
        <figcaption>
          {credit.titre}. Photo {credit.auteur}, {credit.licence}.
        </figcaption>
      )}
    </figure>
  );
}