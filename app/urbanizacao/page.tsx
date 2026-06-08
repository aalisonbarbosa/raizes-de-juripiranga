import PageHero from "@/components/shared/PageHero";
import SectionTitle from "@/components/shared/SectionTitle";

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

export default function Urbanizacao() {
  return (
    <>
      <PageHero
        image="https://media.base44.com/images/public/6a034b4959d75d3db540cab9/0bc0ee394_generated_818f920f.png"
        title="Urbanização"
        subtitle="A estrutura urbana e a posição de Juripiranga na hierarquia urbana brasileira"
      />

      <section className="mx-auto max-w-5xl px-6 py-16">
        <SectionTitle
          badge="Urbanização"
          title="Características Urbanas de Juripiranga"
          description="Uma cidade pequena que surpreende ao apresentar dinâmicas urbanas típicas de centros maiores."
        />

        <div className="space-y-6 text-justify text-zinc-700">
          <p className="leading-8">
            Dentro da cidade existe uma área central que concentra grande parte
            das atividades econômicas e dos serviços. Essa região é conhecida
            como <strong>CBD (Central Business District)</strong> ou{" "}
            <strong>Distrito Central de Negócios</strong>.
          </p>

          <p className="leading-8">
            É nesse espaço que normalmente se encontram lojas, mercados, bancos,
            repartições públicas e diversos serviços, é lá onde a população
            compra, vende e consome. Por essa razão, o centro urbano tende a
            receber um fluxo maior de pessoas ao longo do dia. Essa área é o
            centro da cidade, conhecida na região como{" "}
            <strong>Avenida Brasil</strong>.
          </p>

          <p className="leading-8">
            À medida que nos afastamos dessa área central, surgem as chamadas{" "}
            <strong>franjas urbanas</strong>, que correspondem aos bairros mais
            periféricos da cidade. Nessas áreas geralmente há menor concentração
            de comércio e serviços, fazendo com que a movimentação de pessoas
            seja menos intensa quando comparada ao centro.
          </p>

          <h3 className="text-lg font-semibold text-zinc-800">
            Descentralização e Coesão Urbana
          </h3>

          <p className="leading-8">
            A cidade também apresenta o início de um processo chamado{" "}
            <strong>descentralização</strong>, esse processo ocorre quando
            algumas atividades e serviços deixam de ficar exclusivamente
            concentrados na área central e passam a se distribuir por outros
            bairros da cidade, essa característica é encontrada apenas em
            cidades grandes ou médias, mas Juripiranga surpreende ao apresentar
            essas características. Será algum sinal de que a cidade está
            crescendo? Aparentemente sim!
          </p>

          <p className="leading-8">
            Apesar dessa distribuição de atividades, o centro continua exercendo
            grande influência sobre a dinâmica urbana, concentrando os serviços
            mais importantes, o comércio mais diversificado e o maior fluxo de
            pessoas. Dessa forma, Juripiranga apresenta uma{" "}
            <strong>descentralização parcial</strong>, característica comum em
            cidades de pequeno porte, onde os bairros passam a possuir alguns
            serviços próprios, mas ainda dependem do centro para atividades mais
            especializadas.
          </p>

          <p>
            A cidade também vai apresentar uma área de <strong>coesão</strong>,
            que acontece quando várias atividades se concentram em um mesmo
            local da cidade. Um exemplo fácil de perceber é quando várias lojas
            que vendem produtos parecidos ficam na mesma rua ou no mesmo bairro.
            Mesmo sendo concorrentes, elas atraem mais consumidores porque as
            pessoas podem comparar preços, marcas e produtos em um único lugar.
          </p>
          <p>
            Além disso, quando muitas lojas e serviços estão próximos uns dos
            outros, é comum que as pessoas acabem comprando ou utilizando algo
            que não estava nos seus planos iniciais. Por isso, essas áreas
            costumam ter uma grande movimentação de pessoas e atividades
            econômicas.
          </p>

          <h3 className="text-lg font-semibold text-zinc-800">
            Segregação no Espaço Urbano
          </h3>

          <p>
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
          </p>
          <p>
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
          </p>
          <p>
            Esses processos ajudam a entender como o{" "}
            <strong>espaço urbano de Juripiranga</strong> é organizado.
          </p>
        </div>

        <SectionTitle
          divider
          badge="REGIC"
          title="Sua posição na hierarquia urbana brasileira"
        />

        <div className="space-y-6 text-justify text-zinc-700">
          <p className="leading-8">
            Toda cidade exerce algum nível de centralidade, ou seja, atrai
            pessoas de outras localidades para realizar determinadas atividades.
            Dependendo da quantidade e da complexidade dos serviços oferecidos,
            as cidades podem ser classificadas em diferentes níveis
            hierárquicos, como:
          </p>

          <h3 className="mb-6 font-semibold text-zinc-800">
            Níveis da hierarquia urbana
          </h3>

          <div className="grid gap-6 sm:grid-cols-2">
            {hierarquiaUrbana.map((item) => (
              <div
                key={item.nivel}
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
              </div>
            ))}
          </div>

          <p className="leading-8">
            Juripiranga enquadra-se na categoria de{" "}
            <strong>Centro Local</strong>, pois atende principalmente sua
            própria população, oferecendo serviços básicos e atividades
            comerciais essenciais para o dia a dia dos moradores.
          </p>

          <p className="leading-8">
            Dessa forma, na hierarquia urbana brasileira realizada pela{" "}
            <strong>REGIC (Regiões de Influência das Cidades)</strong>,
            Juripiranga é classificada como um <strong>Centro Local</strong>,
            tendo a cidade de <strong>João Pessoa</strong> como sua região
            imediata, ou seja, para serviços mais especializados, compras de
            maior porte ou atendimentos mais complexos a população se dirige
            para a Capital da Paraíba.
          </p>
        </div>
      </section>
    </>
  );
}
