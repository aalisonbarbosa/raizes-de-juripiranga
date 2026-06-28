"use client";

import { GalleryImage } from "@/components/shared/GalleryImage";
import { ImageLightbox } from "@/components/shared/ImageLightbox";
import PageHero from "@/components/shared/PageHero";
import SectionTitle from "@/components/shared/SectionTitle";
import { useState } from "react";

const imagesHistoria = [
  {
    src: "/foto-historia1.png",
    alt: "Prefeitura Municipal de Juripiranga em seus primeiros anos",
  },
  {
    src: "/foto-historia2.jpeg",
    alt: "Vista da estrada de Serrinha, comunidade nordestina em 1971",
  },
  {
    src: "/foto-historia3.jpeg",
    alt: "Construção histórica típica da região de Juripiranga",
  },
  {
    src: "/foto-historia4.png",
    alt: "Registro histórico das primeiras ruas de Juripiranga",
  },
  {
    src: "/foto-historia5.png",
    alt: "Igreja de Nossa Senhora da Soledade nos primórdios da cidade",
  },
  { src: "/image1.png", alt: "Registro histórico de Juripiranga" },
  { src: "/image2.png", alt: "Registro histórico de Juripiranga" },
  { src: "/image3.png", alt: "Registro histórico de Juripiranga" },
  { src: "/image4.png", alt: "Registro histórico de Juripiranga" },
  { src: "/image5.png", alt: "Registro histórico de Juripiranga" },
  { src: "/image6.png", alt: "Registro histórico de Juripiranga" },
  { src: "/image7.png", alt: "Registro histórico de Juripiranga" },
  { src: "/image8.png", alt: "Registro histórico de Juripiranga" },
  { src: "/image9.png", alt: "Registro histórico de Juripiranga" },
];

export default function HistoriaPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <PageHero
        image="https://media.base44.com/images/public/6a034b4959d75d3db540cab9/d385757d5_generated_61000897.png"
        title="História de Juripiranga"
        subtitle="As origens e a formação de Juripiranga ao longo dos séculos"
      />
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div>
          <SectionTitle
            badge="História"
            title="As Raízes de Juripiranga"
            description="Fundada por volta de 1777, Juripiranga nasceu da fé, da terra e do
              trabalho das famílias pioneiras que moldaram sua identidade ao longo
              dos séculos."
          />
        </div>

        <div className="space-y-6 text-justify text-zinc-700">
          <p className="leading-8">
            O município de Juripiranga teve sua origem{" "}
            <strong>por volta de 1777</strong>, de acordo com o site oficial da
            prefeitura a <strong>família Braz Gomes Tavares</strong> e outros
            membros de sua família foram os primeiros a se estabelecerem; no
            entanto, o documentário "Raízes de Juripiranga" sugere que a{" "}
            <strong>família Machado</strong> foi a pioneira a chegar em uma
            localidade conhecida como <strong>Serrinha de Baixo</strong>,
            situada a aproximadamente 1 quilômetro da atual sede municipal.
            Pouco tempo depois, Francisco Félix e a família Chagas também
            passaram a residir na região.
          </p>
          <p className="leading-8">
            Nesse primeiro núcleo de povoamento foi construído um cruzeiro, em
            torno do qual eram realizadas as festividades religiosas da
            comunidade, tornando-se um importante ponto de encontro para os
            moradores da época.
          </p>
          <p className="leading-8">
            Alguns anos mais tarde, a <strong>família Ferreira</strong>,
            procedente do sertão, instalou-se na localidade onde atualmente se
            encontra a cidade de Juripiranga, denominada na época de{" "}
            <strong>Serrinha de Cima</strong>. Durante esse período, uma das
            filhas da família adoeceu gravemente. Diante da situação, seus
            familiares fizeram uma promessa: caso a jovem alcançasse a cura,
            seria construída uma capela e doado um patrimônio em homenagem a
            Nossa Senhora da Soledade.
          </p>
          <p className="leading-8">
            A graça foi alcançada e a promessa cumprida. A família Ferreira
            construiu a capela, doou uma extensa área de terras e ofertou jóias
            e adornos para o altar da santa, contribuindo significativamente
            para o desenvolvimento religioso e social da localidade.
          </p>
          <p className="leading-8">
            Além de sua contribuição religiosa, a família Ferreira também
            impulsionou a economia local ao manter, durante muitos anos, uma
            unidade de beneficiamento de algodão. Essa atividade atraiu
            trabalhadores e movimentou a economia do povoado, favorecendo seu
            crescimento. Entre os pioneiros que também participaram da formação
            da comunidade destacam-se Inácio Marinho, Augusto Guedes Monteiro,
            Vicente Farias, José Nogueira, família Machado, familia Souza e a
            família Maroja.
          </p>

          <h3 className="text-lg font-semibold text-zinc-800">
            Da Serrinha a Juripiranga
          </h3>
          <p className="leading-8">
            Na divisão administrativa do Brasil de 1911, a localidade fazia
            parte do município de Pilar. Essa condição permaneceu nas divisões
            territoriais de 1936, 1937, 1938 e no quinquênio de 1939 a 1943,
            quando ainda era conhecida pelo nome de Serrinha.
          </p>
          <p className="leading-8">
            Posteriormente, por meio da{" "}
            <strong>Lei nº 520, de 31 de janeiro de 1943</strong>, o distrito
            passou a ser oficialmente denominado Juripiranga. O nome tem origem
            indígena e significa <strong>"Ave que Canta"</strong>, uma
            referência à grande quantidade de pássaros que habitavam a região e
            que podiam ser ouvidos ao amanhecer e ao entardecer.
          </p>

          <h3 className="text-lg font-semibold text-zinc-800">
            Emancipação Política
          </h3>
          <p className="leading-8">
            A emancipação política de Juripiranga foi conquistada através da{" "}
            <strong>Lei nº 2.673, de 22 de dezembro de 1961</strong>. Sua
            instalação oficial ocorreu em <strong>4 de janeiro de 1962</strong>,
            quando o município foi desmembrado de Pilar, sendo constituído
            inicialmente por um único distrito: o da sede municipal. E de acordo
            com o documentário "Raízes de Juripiranga" o senhor{" "}
            <strong>Caio Correia</strong> preparou toda a documentação para a
            emancipação da cidade, mas por questões pessoais, o senhor{" "}
            <strong>Teonas da Cunha Cavalcante</strong> que foi eleito vereador
            no final da década de 58 para 59, emancipou a cidade e ficou como
            prefeito interino até o mês da eleição em Novembro, e em{" "}
            <strong>4 de Novembro de 1962</strong> ele tomou posse.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 my-12">
          {imagesHistoria.map((image, i) => (
            <GalleryImage
              key={i}
              src={image.src}
              alt={image.alt}
              onClick={() => {
                setSelectedIndex(i);
                setLightboxOpen(true);
              }}
            />
          ))}
        </div>
      </section>
      {lightboxOpen && (
        <ImageLightbox
          images={imagesHistoria}
          initialIndex={selectedIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
}
