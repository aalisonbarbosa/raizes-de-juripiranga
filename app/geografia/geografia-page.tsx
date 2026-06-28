"use client";

import PageHero from "@/components/shared/PageHero";
import SectionTitle from "@/components/shared/SectionTitle";
import Image from "next/image";
import { useState } from "react";
import { ImageLightbox } from "@/components/shared/ImageLightbox";

const imagesLocalizacao = [
  {
    src: "/mapa-juripiranga.jpeg",
    alt: "Mapa do município de Juripiranga com seus limites territoriais",
  },
  {
    src: "/mesorregioes-pb.jpeg",
    alt: "Mapa das mesorregiões do estado da Paraíba destacando a Mata Paraibana",
  },
];

export default function GeografiaPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <PageHero
        image="https://media.base44.com/images/public/6a034b4959d75d3db540cab9/0bc0ee394_generated_818f920f.png"
        title="Geografia de Juripiranga"
        subtitle="Dados geográficos e posição no mapa da Paraíba"
      />
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div>
          <SectionTitle
            badge="Geografia"
            title="Onde fica Juripiranga"
            description="Juripiranga está localizada na Mesorregião da Mata Paraibana e ocupa
              uma posição estratégica entre importantes municípios da região."
          />
        </div>

        <div className="space-y-6 text-justify text-zinc-700">
          <p className="leading-8">
            Juripiranga encontra-se situado na{" "}
            <strong>Mesorregião da Mata Paraibana</strong>. De acordo com o{" "}
            <strong>
              IBGE (Instituto Brasileiro de Geografia e Estatística)
            </strong>
            , no ano de <strong>2024</strong> sua população era estimada em{" "}
            <strong>10.259 habitantes</strong> com uma área territorial de
            aproximadamente <strong>79 km²</strong>, com uma densidade
            demográfica de <strong>127,21 hab/km²</strong>. De acordo com o
            Caravela, a população de Juripiranga no ano de <strong>2026</strong>{" "}
            é de <strong>10.300 habitantes</strong>. Ela fica a (
            <strong>12 km</strong>) de Itabaiana, Pilar (<strong>18 km</strong>
            ), São Miguel de Taipu (<strong>21 km</strong>), Pedras de Fogo (
            <strong>14 km</strong>) e Itambé-PE (<strong>14 km</strong>). Ela
            fica distante do município de <strong>João Pessoa</strong>, cerca de{" "}
            <strong>64 km</strong>, e de
            <strong>Recife-PE</strong> fica a <strong>107 km</strong>. Sua
            localização é marcada pela transição entre dois importantes
            ambientes naturais: a <strong>Mata Atlântica</strong> e o{" "}
            <strong>Agreste Paraibano</strong>.
          </p>

          <div className="flex flex-col lg:flex-row gap-4 justify-center items-center">
            {imagesLocalizacao.map((image, i) => (
              <div key={i} className="w-full lg:w-1/2">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={400}
                  onClick={() => {
                    setSelectedIndex(i);
                    setLightboxOpen(true);
                  }}
                  className="cursor-pointer"
                />
                <p className="mt-2 text-center text-xs text-zinc-500">
                  Elaboração cartográfica: Vitória Helen (2024)
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6 text-justify text-zinc-700 mt-16">
          <h3 className="text-lg font-semibold text-zinc-800">
            Características Naturais
          </h3>
          <p className="leading-8">
            O clima predominante em Juripiranga é considerado temperado, com o
            período de inverno geralmente ocorrendo entre os meses de{" "}
            <strong>maio e setembro</strong>.
          </p>
        </div>
      </section>
      {lightboxOpen && (
        <ImageLightbox
          images={imagesLocalizacao}
          initialIndex={selectedIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
}
