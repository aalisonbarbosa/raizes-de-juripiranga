import Image from "next/image";
import { Card } from "@/components/ui/card";

interface ImageCardProps {
  image: string;
  title: string;
  description: string;
}

export default function ImageCard({
  image,
  title,
  description,
}: ImageCardProps) {
  return (
    <Card className="group overflow-hidden border-border/50 bg-card hover:shadow-lg transition-all duration-300 w-md">
      <div className="relative h-52 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="px-4 pb-4">
        <h3 className="font-poppins text-lg font-semibold text-foreground">
          {title}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </Card>
  );
}
