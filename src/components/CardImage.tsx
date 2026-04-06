import Image from "next/image";
import { MTGCardBackBase64 } from "../MTGCardBackBase64";

interface CardImageProps {
  src: string;
  alt: string;
}

export const CardImage = ({ src, alt }: CardImageProps) => {
  return (
    <Image
      src={src}
      placeholder={MTGCardBackBase64}
      height={480}
      width={350}
      alt={alt}
      className="rounded-2xl"
      unoptimized
      priority
    />
  );
};
