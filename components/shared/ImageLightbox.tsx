"use client";

import { useEffect, useCallback, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

export interface LightboxImage {
  src: string;
  alt: string;
}

interface ImageLightboxProps {
  images: LightboxImage[];
  initialIndex: number;
  onClose: () => void;
}

export function ImageLightbox({
  images,
  initialIndex,
  onClose,
}: ImageLightboxProps) {
  const [current, setCurrent] = useState(initialIndex);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, prev, next]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/25 cursor-pointer"
        aria-label="Fechar"
      >
        <X />
      </button>

      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            prev();
          }}
          className="absolute left-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/25 md:left-6 cursor-pointer"
          aria-label="Anterior"
        >
          <ArrowLeft />
        </button>
      )}

      <div
        className="relative mx-4 flex max-h-[85vh] max-w-5xl items-center justify-center transition-all duration-200 ease-out"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          key={current}
          src={images[current].src}
          alt={images[current].alt}
          width={1200}
          height={900}
          className="max-h-[85vh] w-auto max-w-full object-contain shadow-2xl"
          priority
        />
      </div>

      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            next();
          }}
          className="absolute right-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/25 md:right-6 cursor-pointer"
          aria-label="Próxima"
        >
          <ArrowRight />
        </button>
      )}

      {images.length > 1 && (
        <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                setCurrent(i);
              }}
              className={`h-1.5 rounded-full transition-all duration-200 ${
                i === current ? "w-5 bg-white" : "w-1.5 bg-white/40"
              }`}
              aria-label={`Ir para imagem ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
