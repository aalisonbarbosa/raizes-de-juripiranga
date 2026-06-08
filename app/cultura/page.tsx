import PageHero from "@/components/shared/PageHero";
import SectionTitle from "@/components/shared/SectionTitle";
import Image from "next/image";

const imagesCultura = [
  { src: "/foto-cultura1.png", alt: "Cultura de Juripiranga" },
  { src: "/foto-cultura2.png", alt: "Cultura de Juripiranga" },
  { src: "/foto-cultura3.png", alt: "Cultura de Juripiranga" },
  { src: "/festa-sao-sebastio.jpeg", alt: "Festa de São Sebastião" },
  { src: "/quadrilha-cultura.jpeg", alt: "Quadrilha junina de Juripiranga" },
];

export default function Cultura() {
  return (
    <div>
      <PageHero
        image="https://media.base44.com/images/public/6a034b4959d75d3db540cab9/b1f7bb98a_generated_0e4ada51.png"
        title="Cultura"
        subtitle="Tradições, festas e a identidade dos juripiranguenses"
      />

      <section className="mx-auto max-w-5xl px-6 py-16">
        <SectionTitle
          badge="Cultura"
          title="Cultura e Tradições de Juripiranga"
          description="As cidades são espaços vivos, formados por histórias, tradições e
            memórias compartilhadas que constroem a identidade de seus
            habitantes."
        />

        <div className="space-y-6 text-justify text-zinc-700">
          <p>
            As cidades são muito mais do que ruas, construções, atividades
            econômicas e problemas urbanos. Elas são espaços vivos, formados por
            histórias, tradições, memórias e experiências compartilhadas que
            ajudam a construir a <strong>identidade</strong> de seus habitantes.
            Nesse contexto, a <strong>cultura</strong> desempenha um papel
            fundamental. Além de fortalecer o{" "}
            <strong>sentimento de pertencimento</strong> da população, ela
            projeta a importância de uma cidade para além de seus limites
            geográficos.
          </p>
          <p>
            Quando afirmamos que a cultura ultrapassa as{" "}
            <strong>fronteiras físicas</strong> de uma cidade, significa que ela
            passa a ser reconhecida não apenas por seu território, mas também
            por suas <strong>tradições</strong>, <strong>festas</strong>,{" "}
            <strong>manifestações culturais</strong>, <strong>costumes</strong>{" "}
            e <strong>acontecimentos históricos</strong>. Muitas vezes, pessoas
            que nunca visitaram determinada cidade a conhecem justamente por
            seus <strong>eventos culturais</strong>, sua{" "}
            <strong>gastronomia típica</strong> ou suas{" "}
            <strong>celebrações tradicionais</strong>.
          </p>
          <p>
            Um exemplo desse fenômeno é a cidade de{" "}
            <strong>Campina Grande</strong>, amplamente reconhecida por realizar
            o tradicional <strong>"Maior São João do Mundo"</strong>. Sua fama
            ultrapassa os limites do estado e faz com que a cidade seja
            conhecida nacionalmente por sua cultura e suas festividades.
          </p>

          <h3 className="text-lg font-semibold text-zinc-800">
            A identidade cultural de Juripiranga
          </h3>
          <p>
            Da mesma forma, Juripiranga também possui uma identidade cultural
            marcante. O município é conhecido como a{" "}
            <strong>"Cidade do Chapéu de Palha"</strong> e por realizar uma das
            mais tradicionais festas de{" "}
            <strong>São Sebastião do Vale do Paraíba</strong>, além de promover
            importantes <strong>celebrações juninas</strong> que fazem parte da
            história e da cultura local.
          </p>
          <p>
            Ao longo do tempo, a cidade passou por diversas transformações
            urbanas e sociais. No entanto, suas tradições permanecem vivas e
            continuam sendo transmitidas entre gerações.
          </p>
          <p>
            <strong>O artesanato do chapéu de palha:</strong> Uma das
            manifestações culturais mais importantes de Juripiranga é a{" "}
            <strong>produção artesanal do chapéu de palha</strong>. Essa
            atividade teve início ainda nos primeiros anos do desenvolvimento da
            cidade, quando <strong>mulheres artesãs</strong> passaram a
            confeccionar os chapéus como forma de geração de renda para suas
            famílias. A tradição permanece viva até os dias atuais,
            especialmente na <strong>Rua Alagoas</strong>, onde muitos artesãos
            continuam produzindo os chapéus, principalmente durante o período
            das <strong>festividades juninas</strong>. Além de representar uma
            fonte de renda para diversas famílias, o artesanato tornou-se um{" "}
            <strong>símbolo da identidade cultural</strong> do município.
          </p>
          <p>
            <strong>A Festa de São Sebastião:</strong> Entre os principais
            eventos culturais e religiosos de Juripiranga destaca-se a
            tradicional <strong>Festa de São Sebastião</strong>, realizada
            anualmente no mês de <strong>fevereiro</strong>. Com duração de{" "}
            <strong>três dias</strong>, a celebração reúne manifestações de fé,
            devoção e espiritualidade, além de apresentações musicais e
            atividades culturais que valorizam as tradições locais. O evento
            atrai moradores e visitantes, tornando-se um dos momentos mais
            importantes do <strong>calendário cultural</strong> da cidade.
          </p>
          <p>
            <strong>O São João de Juripiranga:</strong> Outro destaque da
            cultura local é o <strong>São João de Juripiranga</strong>, uma das
            festas mais aguardadas pela população. Realizado no{" "}
            <strong>centro da cidade</strong>, o evento conta com{" "}
            <strong>apresentações musicais</strong>,{" "}
            <strong>quadrilhas juninas</strong> e uma grande variedade de{" "}
            <strong>comidas típicas</strong>. Muitas dessas iguarias são
            produzidas a partir dos alimentos cultivados pela{" "}
            <strong>agricultura familiar local</strong>, fortalecendo a relação
            entre cultura, tradição e economia. Mais do que uma celebração, o
            São João representa um importante momento de encontro entre
            moradores e visitantes, contribuindo para a preservação das{" "}
            <strong>tradições nordestinas</strong> e para o fortalecimento da
            identidade cultural do município.
          </p>
          <h3 className="text-lg font-semibold text-zinc-800">
            Cultura, memória e pertencimento
          </h3>
          <p>
            As manifestações culturais de Juripiranga demonstram que a
            identidade de uma cidade não é construída apenas por suas ruas,
            edifícios ou atividades econômicas. Ela também é formada pelas{" "}
            <strong>histórias</strong>, pelos <strong>costumes</strong> e pelas{" "}
            <strong>tradições</strong> que atravessam gerações.
          </p>
          <p>
            Ao preservar suas <strong>festas</strong>, seu{" "}
            <strong>artesanato</strong> e suas{" "}
            <strong>práticas culturais</strong>, Juripiranga mantém viva a{" "}
            <strong>memória de seu povo</strong> e fortalece o sentimento de
            pertencimento de sua população, projetando sua identidade muito além
            de suas fronteiras geográficas.
          </p>
        </div>
        <div className="columns-1 gap-3 md:columns-3 my-12 space-y-3">
          {imagesCultura.map((image, i) => (
            <div
              key={i}
              className="break-inside-avoid overflow-hidden aspect-video"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
