import Image from "next/image";
import { Base64PlaceholderImage } from "./Base64PlaceholderImage";

interface CardImageProps {
  src: string;
  alt: string;
  className: string;
}

export const CardImage = ({ src, alt, className }: CardImageProps) => {
  return (
    <Image
      src={src}
      placeholder={Base64PlaceholderImage}
      height={350}
      width={250}
      alt={alt}
      className={className}
      unoptimized
      priority
    />
  );
};
