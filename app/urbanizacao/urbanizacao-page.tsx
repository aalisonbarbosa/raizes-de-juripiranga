"use client";

import { GalleryImage } from "@/components/shared/GalleryImage";
import {
  ImageLightbox,
  LightboxImage,
} from "@/components/shared/ImageLightbox";
import PageHero from "@/components/shared/PageHero";
import SectionTitle from "@/components/shared/SectionTitle";
import { useState } from "react";
import { motion } from "framer-motion";

const imagesCentro = [
  { src: "/centro 8.jpg.jpeg", alt: "Centro de Juripiranga" },
  { src: "/imagem-centro1.jpeg", alt: "Centro de Juripiranga" },
  { src: "/imagem-centro2.jpeg", alt: "Centro de Juripiranga" },
  { src: "/imagem-centro4.jpeg", alt: "Centro de Juripiranga" },
  { src: "/imagem-centro5.jpeg", alt: "Centro de Juripiranga" },
  { src: "/imagem-centro6.jpeg", alt: "Centro de Juripiranga" },
];

const imagesAutoSegregacao = [
  { src: "/auto-segregacao1.jpeg", alt: "Auto-segregação em Juripiranga" },
  { src: "/auto-segregacao2.jpeg", alt: "Auto-segregação em Juripiranga" },
  { src: "/auto-segregacao3.jpeg", alt: "Auto-segregação em Juripiranga" },
];

const imagesSegregacaoInduzida = [
  {
    src: "/segregao-induzida1.jpeg",
    alt: "Segregação induzida em Juripiranga",
  },
  {
    src: "/segregao-induzida2.jpeg",
    alt: "Segregação induzida em Juripiranga",
  },
  {
    src: "/segregao-induzida4.jpeg",
    alt: "Segregação induzida em Juripiranga",
  },
];

const imagesMiniCoeso = [
  { src: "/mini-coeso1.jpeg", alt: "Coesão urbana em Juripiranga" },
  { src: "/mini-coeso2.jpeg", alt: "Coesão urbana em Juripiranga" },
  { src: "/mini-coeso3.jpeg", alt: "Coesão urbana em Juripiranga" },
];

const imagesDescentralizacao = [
  {
    src: "/image-descentralizacao1.jpeg",
    alt: "Prédio comercial moderno em Juripiranga com fachada de vidro, palmeiras e estabelecimentos comerciais",
  },
  {
    src: "/image-descentralizacao2.jpeg",
    alt: "Área em expansão urbana de Juripiranga com terrenos, novas construções e comércio às margens da rodovia",
  },
];

const hierarquiaUrbana = [
  {
    nivel: "01",
    titulo: "Centro Local",
    descricao:
      "Atende apenas sua própria população com serviços básicos do cotidiano, como pequeno comércio e serviços essenciais.",
    destaque: true,
  },
  {
    nivel: "02",
    titulo: "Centro de Zona",
    descricao:
      "Atende cidades vizinhas menores, oferecendo serviços um pouco mais especializados como hospitais regionais e comércio diversificado.",
    destaque: false,
  },
  {
    nivel: "03",
    titulo: "Centro Sub-regional",
    descricao:
      "Polariza uma região mais ampla, com serviços de saúde, educação e comércio de maior complexidade.",
    destaque: false,
  },
  {
    nivel: "04",
    titulo: "Capital Regional",
    descricao:
      "Exerce forte influência sobre estados ou regiões inteiras, concentrando universidades, hospitais especializados e grandes centros comerciais.",
    destaque: false,
  },
  {
    nivel: "05",
    titulo: "Metrópole",
    descricao:
      "Maior nível hierárquico, com influência nacional ou global. Concentra as funções mais complexas e especializadas do país.",
    destaque: false,
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function UrbanizacaoPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [currentImages, setCurrentImages] = useState<LightboxImage[]>([]);

  const openLightbox = (images: LightboxImage[], index: number) => {
    setCurrentImages(images);
    setSelectedIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <PageHero
        image="https://media.base44.com/images/public/6a034b4959d75d3db540cab9/0bc0ee394_generated_818f920f.png"
        title="Urbanização de Juripiranga"
        subtitle="A estrutura urbana e a posição de Juripiranga na hierarquia urbana brasileira"
      />

      <section className="mx-auto max-w-5xl px-6 py-16">
        <motion.div {...fadeUp}>
          <SectionTitle
            badge="Urbanização"
            title="Características Urbanas de Juripiranga"
            description="Uma cidade pequena que surpreende ao apresentar dinâmicas urbanas típicas de centros maiores."
          />
        </motion.div>

        <div className="space-y-6 text-justify text-zinc-700">
          <motion.p {...fadeUp} className="leading-8">
            Dentro da cidade existe uma área central que concentra grande parte
            das atividades econômicas e dos serviços. Essa região é conhecida
            como <strong>CBD (Central Business District)</strong> ou{" "}
            <strong>Distrito Central de Negócios</strong>.
          </motion.p>

          <motion.p {...fadeUp} className="leading-8">
            É nesse espaço que normalmente se encontram lojas, mercados, bancos,
            repartições públicas e diversos serviços, é lá onde a população
            compra, vende e consome. Por essa razão, o centro urbano tende a
            receber um fluxo maior de pessoas ao longo do dia. Essa área é o
            centro da cidade, conhecida na região como{" "}
            <strong>Avenida Brasil</strong>.
          </motion.p>

          <motion.p {...fadeUp} className="leading-8">
            À medida que nos afastamos dessa área central, surgem as chamadas{" "}
            <strong>franjas urbanas</strong>, que correspondem aos bairros mais
            periféricos da cidade. Nessas áreas geralmente há menor concentração
            de comércio e serviços, fazendo com que a movimentação de pessoas
            seja menos intensa quando comparada ao centro.
          </motion.p>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-3 my-12 space-y-3">
            {imagesCentro.map((image, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <GalleryImage
                  key={i}
                  src={image.src}
                  alt={image.alt}
                  onClick={() => openLightbox(imagesCentro, i)}
                />
              </motion.div>
            ))}
          </div>

          <motion.h3
            {...fadeUp}
            className="text-lg font-semibold text-zinc-800"
          >
            Descentralização e Coesão Urbana
          </motion.h3>

          <motion.p {...fadeUp} className="leading-8">
            A cidade também apresenta o início de um processo chamado{" "}
            <strong>descentralização</strong>, esse processo ocorre quando
            algumas atividades e serviços deixam de ficar exclusivamente
            concentrados na área central e passam a se distribuir por outros
            bairros da cidade, essa característica é encontrada apenas em
            cidades grandes ou médias, mas Juripiranga surpreende ao apresentar
            essas características. Será algum sinal de que a cidade está
            crescendo? Aparentemente sim!
          </motion.p>

          <motion.p {...fadeUp} className="leading-8">
            Apesar dessa distribuição de atividades, o centro continua exercendo
            grande influência sobre a dinâmica urbana, concentrando os serviços
            mais importantes, o comércio mais diversificado e o maior fluxo de
            pessoas. Dessa forma, Juripiranga apresenta uma{" "}
            <strong>descentralização parcial</strong>, característica comum em
            cidades de pequeno porte, onde os bairros passam a possuir alguns
            serviços próprios, mas ainda dependem do centro para atividades mais
            especializadas.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-12">
            {imagesDescentralizacao.map((image, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <GalleryImage
                  key={i}
                  src={image.src}
                  alt={image.alt}
                  onClick={() => openLightbox(imagesDescentralizacao, i)}
                />
              </motion.div>
            ))}
          </div>

          <motion.p {...fadeUp} className="leading-8">
            A cidade também vai apresentar uma área de <strong>coesão</strong>,
            que acontece quando várias atividades se concentram em um mesmo
            local da cidade. Um exemplo fácil de perceber é quando várias lojas
            que vendem produtos parecidos ficam na mesma rua ou no mesmo bairro.
            Mesmo sendo concorrentes, elas atraem mais consumidores porque as
            pessoas podem comparar preços, marcas e produtos em um único lugar.
          </motion.p>
          <motion.p {...fadeUp} className="leading-8">
            Além disso, quando muitas lojas e serviços estão próximos uns dos
            outros, é comum que as pessoas acabem comprando ou utilizando algo
            que não estava nos seus planos iniciais. Por isso, essas áreas
            costumam ter uma grande movimentação de pessoas e atividades
            econômicas.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-12">
            {imagesMiniCoeso.map((image, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <GalleryImage
                  src={image.src}
                  alt={image.alt}
                  onClick={() => openLightbox(imagesMiniCoeso, i)}
                />
              </motion.div>
            ))}
          </div>

          <motion.h3
            {...fadeUp}
            className="text-lg font-semibold text-zinc-800"
          >
            Segregação no Espaço Urbano
          </motion.h3>

          <motion.p {...fadeUp} className="leading-8">
            Ademais, ela também vai apresentar dois tipos de{" "}
            <strong>segregação</strong>:<strong> segregação induzida</strong>,
            que acontece quando as pessoas de <strong>menor renda</strong>{" "}
            acabam morando em áreas mais afastadas e com menos infraestrutura.
            Na maioria das vezes, isso não ocorre por escolha. Os altos preços
            dos imóveis e a falta de políticas públicas de habitação dificultam
            que essas famílias morem em áreas mais valorizadas da cidade. Como
            consequência, muitas pessoas vivem em bairros mais distantes dos
            centros urbanos, com menor acesso a serviços como transporte, saúde,
            educação e lazer.
          </motion.p>

          <div className="columns-1 gap-3 md:columns-3 my-12 space-y-3">
            {imagesSegregacaoInduzida.map((image, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <GalleryImage
                  key={i}
                  src={image.src}
                  alt={image.alt}
                  onClick={() => openLightbox(imagesSegregacaoInduzida, i)}
                />
              </motion.div>
            ))}
          </div>
          <motion.p {...fadeUp} className="leading-8">
            E a <strong>auto-segregação</strong>: que ocorre quando pessoas com{" "}
            <strong>maior poder aquisitivo</strong> escolhem morar em áreas mais
            exclusivas e afastadas do restante da cidade. Isso acontece, por
            exemplo, em <strong>condomínios fechados</strong>, loteamentos
            murados ou bairros de alto padrão. Geralmente, essas escolhas estão
            relacionadas à busca por segurança, tranquilidade, privacidade e
            melhor qualidade de vida. A auto-segregação também pode ocorrer
            quando as pessoas optam por morar em locais mais próximos da
            natureza ou mais afastados do movimento urbano, mesmo que não sejam
            condomínios fechados.
          </motion.p>

          <motion.p {...fadeUp} className="leading-8">
            Esses processos ajudam a entender como o{" "}
            <strong>espaço urbano de Juripiranga</strong> é organizado.
          </motion.p>

          <div className="columns-1 gap-3 md:columns-3 my-12 space-y-3">
            {imagesAutoSegregacao.map((image, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <GalleryImage
                  key={i}
                  src={image.src}
                  alt={image.alt}
                  onClick={() => openLightbox(imagesAutoSegregacao, i)}
                />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div {...fadeUp}>
          <SectionTitle
            divider
            badge="REGIC"
            title="Sua posição na hierarquia urbana brasileira"
          />
        </motion.div>

        <div className="space-y-6 text-justify text-zinc-700">
          <motion.p {...fadeUp} className="leading-8">
            Toda cidade exerce algum nível de centralidade, ou seja, atrai
            pessoas de outras localidades para realizar determinadas atividades.
            Dependendo da quantidade e da complexidade dos serviços oferecidos,
            as cidades podem ser classificadas em diferentes níveis
            hierárquicos, como:
          </motion.p>

          <motion.h3 {...fadeUp} className="mb-6 font-semibold text-zinc-800">
            Níveis da hierarquia urbana
          </motion.h3>

          <div className="grid gap-6 sm:grid-cols-2">
            {hierarquiaUrbana.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`rounded-2xl border p-6 shadow-sm ${
                  item.destaque
                    ? "border-green-200 bg-green-50"
                    : "border-zinc-200 bg-white"
                }`}
              >
                <div className="mb-1 text-xs font-bold uppercase tracking-wider text-green-700">
                  Nível {item.nivel}
                </div>
                <div className="mb-2 flex items-center gap-2">
                  <p
                    className={`text-lg font-bold ${item.destaque ? "text-green-800" : "text-zinc-800"}`}
                  >
                    {item.titulo}
                  </p>
                  {item.destaque && (
                    <span className="rounded-full bg-green-200 px-2 py-0.5 text-xs font-semibold text-green-800">
                      Juripiranga
                    </span>
                  )}
                </div>
                <p className="text-sm leading-7 text-zinc-600">
                  {item.descricao}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.p {...fadeUp} className="leading-8">
            Juripiranga enquadra-se na categoria de{" "}
            <strong>Centro Local</strong>, pois atende principalmente sua
            própria população, oferecendo serviços básicos e atividades
            comerciais essenciais para o dia a dia dos moradores.
          </motion.p>

          <motion.p {...fadeUp} className="leading-8">
            Dessa forma, na hierarquia urbana brasileira realizada pela{" "}
            <strong>REGIC (Regiões de Influência das Cidades)</strong>,
            Juripiranga é classificada como um <strong>Centro Local</strong>,
            tendo a cidade de <strong>João Pessoa</strong> como sua região
            imediata, ou seja, para serviços mais especializados, compras de
            maior porte ou atendimentos mais complexos a população se dirige
            para a Capital da Paraíba.
          </motion.p>
        </div>
      </section>
      {lightboxOpen && (
        <ImageLightbox
          images={currentImages}
          initialIndex={selectedIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
}
