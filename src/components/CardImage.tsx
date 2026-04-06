import Image from "next/image";
import { MTGCardBackBase64 } from "../MTGCardBackBase64";

interface CardImageProps {
  src: string;
  alt: string;
  className: string;
}

export const CardImage = ({ src, alt, className }: CardImageProps) => {
  return (
    <Image
      src={src}
      placeholder={MTGCardBackBase64}
      height={350}
      width={250}
      alt={alt}
      className={className}
      unoptimized
      priority
    />
  );
};
