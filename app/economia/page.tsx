import PageHero from "@/components/shared/PageHero";
import SectionTitle from "@/components/shared/SectionTitle";
import { Landmark, ShoppingBag, Sprout, Factory } from "lucide-react";

const setores = [
  {
    icon: Landmark,
    percentual: "55,2% do PIB",
    titulo: "Administração Pública",
    descricao:
      "A Administração Pública representa aproximadamente 55,2% da economia municipal, englobando serviços oferecidos pela prefeitura, educação pública, saúde pública e demais atividades ligadas diretamente ao governo.",
    destaque: ["55,2%"],
  },
  {
    icon: ShoppingBag,
    percentual: "27,2% do PIB",
    titulo: "Serviços",
    descricao:
      "O setor de serviços corresponde a cerca de 27,2% da economia local, incluindo comércio, transporte, saúde privada, educação privada e diversas outras atividades que atendem à população.",
    destaque: ["27,2%"],
  },
  {
    icon: Sprout,
    percentual: "13,1% do PIB",
    titulo: "Agropecuária",
    descricao:
      "A agropecuária representa aproximadamente 13,1% do PIB municipal, reunindo produção agrícola, pecuária e agroindústrias. Destaca-se o cultivo da cana-de-açúcar, produzida pela Usina Central Olho D'Água do Grupo Tavares de Melo, em Camutanga-PE, utilizada na produção de açúcar e etanol.",
    destaque: [
      "13,1%",
      "cana-de-açúcar",
      "Usina Central Olho D'Água",
      "Grupo Tavares de Melo",
    ],
  },
  {
    icon: Factory,
    percentual: "4,5% do PIB",
    titulo: "Indústria",
    descricao:
      "O setor industrial corresponde a cerca de 4,5% da economia. Entre as indústrias locais estão: Pão Nosso (panificação), Clistal Uniformes (confecção), J A Nascimento (indústria e comércio), Atrium Ferragens e Panificadora Q Sabor.",
    destaque: [
      "4,5%",
      "Pão Nosso",
      "Clistal Uniformes",
      "J A Nascimento",
      "Atrium Ferragens",
      "Panificadora Q Sabor",
    ],
  },
];

function highlightText(text: string, destaques: string[]) {
  const regex = new RegExp(
    `(${destaques.map((d) => d.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
    "g",
  );
  const parts = text.split(regex);
  return parts.map((part, i) =>
    destaques.includes(part) ? <strong key={i}>{part}</strong> : part,
  );
}

export default function Economia() {
  return (
    <div>
      <PageHero
        image="https://media.base44.com/images/public/6a034b4959d75d3db540cab9/47485d0fe_generated_bafe988e.png"
        title="Economia e Comércio"
        subtitle="A atividade econômica e o dia a dia produtivo de Juripiranga"
      />

      <section className="mx-auto max-w-5xl px-6 py-16">
        <SectionTitle
          badge="Economia Local"
          title="Como Juripiranga cresceu"
          description=" A economia do município foi construída ao longo dos séculos através
            da agricultura, do comércio e do trabalho das famílias que ajudaram
            a formar a cidade."
        />

        <div className="space-y-6 text-justify text-zinc-700">
          <p className="leading-8">
            O crescimento de Juripiranga está diretamente ligado à ocupação do
            território por famílias que contribuíram para o desenvolvimento
            econômico e social da região. Entre elas destacam-se as famílias{" "}
            <strong>Nunes Machado</strong>, <strong>Ferreira</strong>,{" "}
            <strong>Souza</strong>, <strong>Marinho de Souza</strong>,{" "}
            <strong>Maroja</strong>, <strong>Machado de Andrade</strong>,{" "}
            <strong>Braz Gomes Tavares</strong> e <strong>Guedes</strong>.
          </p>

          <p className="leading-8">
            Os primeiros registros apontam que a{" "}
            <strong>família Nunes Machado</strong> se estabeleceu na localidade
            de <strong>Serrinha de Baixo</strong> por volta de{" "}
            <strong>1777</strong>. Posteriormente, a{" "}
            <strong>família Ferreira</strong>, oriunda do sertão, fixou-se em{" "}
            <strong>Serrinha de Cima</strong>, área onde atualmente se encontra
            o centro da cidade.
          </p>

          <p className="leading-8">
            A família Ferreira teve papel fundamental no desenvolvimento local
            ao introduzir a <strong>cultura do algodão</strong>. Durante muitos
            anos, a produção algodoeira foi uma das principais atividades
            econômicas da região, gerando empregos e movimentando a economia
            local. Com o passar do tempo, entretanto, a produção foi prejudicada
            pela praga do <strong>bicudo</strong>, que afetou significativamente
            os cultivos.
          </p>

          <p className="leading-8">
            Depois foram aparecendo alguns comércios, formas de trabalho como a{" "}
            <strong>confecção do chapéu de palha</strong>, onde eram mulheres
            que faziam, na época já tinha a <strong>usina olho d'água</strong> a
            qual empregava muita gente na época da safra, com isso Juripiranga
            foi crescendo.
          </p>

          <p className="leading-8">
            Juripiranga é um exemplo de cidade que se desenvolveu de forma{" "}
            <strong>espontânea</strong>. Isso significa que seu crescimento
            ocorreu naturalmente, sem um planejamento urbano prévio. As famílias
            foram se estabelecendo na região, atraídas pelas condições
            favoráveis para a agricultura e pela disponibilidade de recursos
            naturais.
          </p>

          <p className="leading-8">
            Diferentemente das <strong>cidades planejadas</strong>, onde a
            ocupação do espaço é organizada previamente, o desenvolvimento de
            Juripiranga ocorreu gradualmente, acompanhando as necessidades da
            população e as oportunidades econômicas existentes.
          </p>
        </div>

        <SectionTitle
          divider
          badge="Economia Local"
          title="Economia de Juripiranga e a Importância do Campo"
        />

        <div className="space-y-6 text-justify text-zinc-700">
          <p className="leading-8">
            Ainda hoje, o trabalho no campo é essencial para a economia de
            Juripiranga. No entanto, além das atividades agrícolas, o município
            também conta com outras formas de trabalho típicas de cidades
            pequenas, que juntas contribuem para a geração de riquezas e para o
            desenvolvimento local.
          </p>
          <p className="leading-8">
            Em Juripiranga, o <strong>PIB (Produto Interno Bruto)</strong> que
            representa a soma de todos os bens e serviços finais produzidos em
            uma região durante um determinado período, geralmente um ano, gira
            em torno de <strong>150,5 milhões de reais</strong>. Esse valor é
            produzido por quatro setores da economia:{" "}
            <strong>Administração Pública</strong>, <strong>Serviços</strong>,{" "}
            <strong>Agropecuária</strong> e <strong>Indústria</strong>.
          </p>
        </div>

        <div className="my-16 grid gap-6 sm:grid-cols-2">
          {setores.map((setor, i) => {
            const Icon = setor.icon;
            return (
              <div
                key={i}
                className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-green-100">
                  <Icon className="h-5 w-5 text-green-700" />
                </div>
                <div className="mb-1 text-xs font-bold uppercase tracking-wider text-green-700">
                  {setor.percentual}
                </div>
                <h3 className="mb-2 text-lg font-bold text-zinc-800">
                  {setor.titulo}
                </h3>
                <p className="text-sm leading-7 text-zinc-600">
                  {highlightText(setor.descricao, setor.destaque)}
                </p>
              </div>
            );
          })}
        </div>

        <SectionTitle
          divider
          badge="Desenvolvimento"
          title="A importância do campo para o desenvolvimento da cidade"
        />

        <div className="space-y-6 text-justify text-zinc-700">
          <p className="leading-8">
            A história de Juripiranga demonstra como o{" "}
            <strong>meio rural</strong> pode impulsionar o surgimento e o
            crescimento de núcleos urbanos. O desenvolvimento agrícola foi o
            principal responsável pela formação da cidade, gerando empregos,
            atraindo moradores e estimulando o surgimento do comércio e dos
            serviços.
          </p>
          <p className="leading-8">
            Além da agricultura, outros fatores contribuíram para seu
            crescimento, como a localização geográfica favorável e as
            características naturais do território. O relevo ondulado da região,
            por exemplo, favorece a formação de <strong>açudes e lagoas</strong>
            , recursos importantes para o abastecimento e para as atividades
            econômicas locais.
          </p>
          <p className="leading-8">
            Assim, a trajetória de Juripiranga evidencia a forte relação entre
            campo e cidade, mostrando como as atividades rurais foram
            fundamentais para a construção da identidade e do desenvolvimento do
            município.
          </p>
        </div>

        <SectionTitle
          divider
          badge="Geografia"
          title="A influência das características naturais"
        />

        <div className="space-y-6 text-justify text-zinc-700">
          <p className="leading-8">
            A razão pela qual o campo continua gerando trabalho e contribuindo
            para a economia local da cidade, é graças, principalmente, às{" "}
            <strong>características naturais</strong> da região, como o{" "}
            <strong>relevo</strong> e o <strong>tipo de solo</strong>.
          </p>
          <p className="leading-8">
            O relevo de Juripiranga é predominantemente{" "}
            <strong>ondulado</strong>. Em algumas áreas, essa característica
            dificulta a utilização de determinadas{" "}
            <strong>máquinas agrícolas modernas</strong>, especialmente nos
            canaviais. Como consequência, existe uma maior necessidade de{" "}
            <strong>mão de obra humana</strong>, o que contribui para a
            manutenção de empregos no campo.
          </p>
        </div>

        <SectionTitle
          divider
          badge="Agricultura"
          title="A Revolução Verde e a agricultura"
        />

        <div className="space-y-6 text-justify text-zinc-700">
          <p className="leading-8">
            As inovações trazidas pela <strong>Revolução Verde</strong> como{" "}
            <strong>máquinas agrícolas</strong>,{" "}
            <strong>fertilizantes químicos</strong>,{" "}
            <strong>defensivos agrícolas</strong> e{" "}
            <strong>sementes melhoradas</strong>, contribuíram para aumentar a
            produtividade agrícola, permitindo que os solos fossem melhor
            aproveitados tanto pela <strong>agricultura familiar</strong> quanto
            pelo cultivo da <strong>cana-de-açúcar</strong>.
          </p>

          <p className="leading-8">
            Embora nem todos os pequenos produtores tenham acesso às mesmas
            tecnologias utilizadas pelas grandes propriedades rurais, diversas
            ações contribuem para fortalecer a agricultura familiar no
            município.
          </p>

          <p className="leading-8">
            <strong>Incentivo à agricultura familiar:</strong> Entre as
            iniciativas voltadas para os agricultores locais está a distribuição
            de <strong>sementes de milho</strong> para produtores rurais do
            município. Essa ação busca aumentar a produção agrícola, fortalecer
            a renda das famílias e melhorar a qualidade de vida dos
            trabalhadores do campo.
          </p>

          <p className="leading-8">
            As sementes distribuídas são do tipo <strong>híbrido</strong>,
            produzidas a partir do cruzamento de diferentes linhagens de milho.
            Esse processo permite obter plantas com melhor desempenho, maior
            resistência e maior capacidade produtiva.
          </p>

          <p className="leading-8">
            Além disso, também são oferecidos os chamados{" "}
            <strong>cortes de terra</strong>, que consistem na disponibilização
            de <strong>tratores</strong> e outros equipamentos agrícolas para a
            preparação do solo. Esse apoio facilita o plantio e reduz os custos
            para os pequenos produtores.
          </p>
        </div>

        <SectionTitle
          divider
          badge="Comércio"
          title="A importância da feira livre para a economia da cidade"
        />

        <div className="space-y-6 text-justify text-zinc-700">
          <p className="leading-8">
            A <strong>agricultura familiar</strong> desempenha um papel
            fundamental no abastecimento da cidade. É ela que garante a
            diversidade de alimentos comercializados na{" "}
            <strong>feira livre de Juripiranga</strong>.
          </p>

          <p className="leading-8">
            A feira representa um importante espaço de{" "}
            <strong>circulação econômica</strong>, onde produtores rurais
            comercializam seus produtos, geram renda para suas famílias e
            movimentam a economia local. Além dos agricultores, a feira também
            beneficia feirantes, transportadores e trabalhadores envolvidos na
            organização e infraestrutura do evento.
          </p>
        </div>

        <SectionTitle
          divider
          badge="Agricultura Familiar"
          title="O que seria de nós sem a agricultura familiar, só restaria a não
            familiar"
        />

        <div className="space-y-6 text-justify text-zinc-700">
          <p className="leading-8">
            A <strong>agricultura familiar</strong> é caracterizada pela
            produção realizada em <strong>pequenas propriedades</strong>,
            geralmente utilizando mão de obra da própria família. Ela é
            responsável pela diversidade de alimentos consumidos pela população
            e possui forte importância social e econômica.
          </p>

          <p className="leading-8">
            Já a <strong>agricultura não familiar</strong>, também conhecida
            como <strong>agricultura empresarial</strong>, é desenvolvida em{" "}
            <strong>grandes propriedades rurais</strong> e tem como principal
            objetivo a produção em larga escala para comercialização e obtenção
            de lucro. Esse modelo utiliza maior quantidade de máquinas,
            tecnologia e mão de obra contratada. Um exemplo presente na região é
            o cultivo da <strong>cana-de-açúcar</strong>, proporcionada pela{" "}
            <strong>Usina Central Olho D'Água</strong>.
          </p>

          <p className="leading-8">
            Sem a agricultura familiar não teríamos uma diversidade de{" "}
            <strong>alimentos frescos</strong> e não teríamos{" "}
            <strong>emprego no campo</strong>, com isso, o sistema alimentar
            entraria em colapso, visto que a agricultura não familiar (
            <strong>agronegócio</strong>) é focada principalmente na exportação
            de <strong>commodities</strong> (como soja e milho).
          </p>

          <p className="leading-8">
            Em síntese, o campo continua sendo um dos{" "}
            <strong>pilares da economia de Juripiranga</strong>. Seja por meio
            da agricultura familiar ou das grandes produções agrícolas, as
            atividades rurais geram empregos, produzem alimentos, movimentam o
            comércio local e garantem renda para inúmeras famílias.
          </p>

          <p className="leading-8">
            A história e a economia do município demonstram que o
            desenvolvimento de Juripiranga está diretamente ligado ao{" "}
            <strong>campo</strong>, que continua exercendo um papel fundamental
            na construção da vida econômica e social da cidade.
          </p>
        </div>
      </section>
    </div>
  );
}
