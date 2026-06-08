import Image from "next/image";

type GalleryImageProps = {
  src: string;
  alt: string;
  onClick?: () => void;
};

export function GalleryImage({ src, alt, onClick }: GalleryImageProps) {
  return (
    <div
      className="group cursor-pointer break-inside-avoid overflow-hidden aspect-video"
      onClick={onClick}
    >
      <Image
        src={src}
        alt={alt}
        width={600}
        height={400}
        className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
      />
    </div>
  );
}
