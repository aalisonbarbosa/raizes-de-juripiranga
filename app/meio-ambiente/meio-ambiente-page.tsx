"use client";

import PageHero from "@/components/shared/PageHero";
import SectionTitle from "@/components/shared/SectionTitle";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function MeioAmbientePage() {
  return (
    <>
      <PageHero
        image="https://media.base44.com/images/public/6a034b4959d75d3db540cab9/0bc0ee394_generated_818f920f.png"
        title="Meio Ambiente de Juripiranga"
        subtitle="Gestão de resíduos, impactos ambientais e projetos sustentáveis do município"
      />

      <section className="mx-auto max-w-5xl px-6 py-16">
        <motion.div {...fadeUp}>
          <SectionTitle
            badge="Meio Ambiente"
            title="Problemas Socioambientais e Gestão dos Resíduos Sólidos"
            description="Conheça os desafios ambientais de Juripiranga e as iniciativas para um futuro mais sustentável."
          />
        </motion.div>

        <div className="space-y-6 text-justify text-zinc-700">
          <motion.h3
            {...fadeUp}
            className="text-lg font-semibold text-zinc-800"
          >
            O descarte de lixo como desafio socioambiental
          </motion.h3>

          <motion.p {...fadeUp} className="leading-8">
            Entre os principais problemas socioambientais enfrentados por
            Juripiranga está a questão do{" "}
            <strong>descarte de resíduos sólidos</strong>. Assim como ocorre em
            muitas cidades brasileiras, o manejo inadequado do lixo pode gerar
            impactos negativos para o meio ambiente e para a qualidade de vida
            da população.
          </motion.p>

          <motion.p {...fadeUp} className="leading-8">
            De acordo com o <strong>SINISA 2024</strong> cerca de{" "}
            <strong>94,7%</strong> da população do município é atendida pelo
            serviço de <strong>coleta de resíduos domiciliares</strong>.
            Entretanto, ainda existem moradores que não possuem acesso regular a
            esse serviço. Estima-se que aproximadamente{" "}
            <strong>549 habitantes</strong> não tenham seus resíduos recolhidos
            pela coleta municipal, essas pessoas utilizam outras formas de
            destino, como
            <strong> queima</strong>, <strong>aterro na propriedade</strong>, ou
            utilizam outras formas de descarte.
          </motion.p>

          <motion.p {...fadeUp} className="leading-8">
            Essa situação pode favorecer o descarte inadequado do lixo em
            terrenos baldios, áreas de vegetação, córregos e outros espaços
            impróprios. Como consequência, podem ocorrer problemas como a{" "}
            <strong>poluição ambiental</strong>, o{" "}
            <strong>entupimento de canais de drenagem</strong> e o aumento do
            risco de <strong>alagamentos</strong> durante períodos de chuvas
            intensas.
          </motion.p>

          <motion.h3
            {...fadeUp}
            className="text-lg font-semibold text-zinc-800"
          >
            Destino dos resíduos sólidos
          </motion.h3>

          <motion.p {...fadeUp} className="leading-8">
            Após a coleta, os resíduos são encaminhados para áreas destinadas ao
            seu armazenamento e tratamento, essas áreas correspondem aos{" "}
            <strong>aterros sanitários</strong>, o lixo permanece
            temporariamente disponível no local para a atuação de{" "}
            <strong>catadores</strong> que realizam a separação de materiais
            recicláveis. Posteriormente, é realizado o processo de{" "}
            <strong>aterramento dos resíduos</strong>.
          </motion.p>

          <motion.p {...fadeUp} className="leading-8">
            Em outras cidades da região, parte dos resíduos é destinada ao{" "}
            <strong>Aterro Sanitário Metropolitano de João Pessoa</strong>,
            conhecido como <strong>Eco Parque</strong>, que recebe resíduos da
            capital e de diversos municípios vizinhos.
          </motion.p>

          <motion.p {...fadeUp} className="leading-8">
            Embora os aterros sanitários sejam considerados uma alternativa mais
            adequada que os <strong>lixões</strong>, eles também apresentam
            desafios ambientais importantes.
          </motion.p>

          <div className="space-y-1">
            <motion.h3
              {...fadeUp}
              className="text-lg font-semibold text-zinc-800"
            >
              Impactos ambientais dos aterros sanitários
            </motion.h3>

            <motion.p {...fadeUp} className="leading-8">
              Entre os principais impactos associados aos aterros sanitários
              destacam-se:
            </motion.p>
          </div>

          <motion.ul {...fadeUp} className="list-disc ml-6">
            <li>
              A contaminação do solo e dos <strong>lençóis freáticos</strong>{" "}
              pelo <strong>chorume</strong>;
            </li>
            <li>
              A emissão de <strong>gás metano</strong>, um dos gases que
              contribuem para o agravamento do <strong>efeito estufa</strong>;
            </li>
            <li>
              A geração de <strong>odores</strong>;
            </li>
            <li>
              A proliferação de <strong>insetos</strong> e outros{" "}
              <strong>vetores de doenças</strong>;
            </li>
            <li>
              A redução gradual da <strong>vida útil do aterro</strong>.
            </li>
          </motion.ul>

          <motion.p {...fadeUp} className="leading-8">
            A diminuição da vida útil ocorre porque, à medida que o volume de
            resíduos aumenta, o espaço disponível para armazenamento se esgota.
            Quando isso acontece, torna-se necessário encerrar as atividades do
            aterro ou buscar novas áreas para destinação dos resíduos.
          </motion.p>

          <motion.h3
            {...fadeUp}
            className="text-lg font-semibold text-zinc-800"
          >
            Projeto de implantação de uma Usina de Resíduos Sólidos em
            Juripiranga
          </motion.h3>

          <motion.p {...fadeUp} className="leading-8">
            Com o objetivo de buscar soluções mais sustentáveis para a gestão
            dos resíduos, está em discussão a implantação de uma{" "}
            <strong>Usina de Resíduos Sólidos em Juripiranga</strong>.
          </motion.p>

          <motion.p {...fadeUp} className="leading-8">
            Recentemente, foi realizada uma{" "}
            <strong>reunião na Prefeitura Municipal</strong> reunindo prefeitos
            de municípios da Paraíba e também representantes de cidades do
            estado de Pernambuco. Durante o encontro, foi apresentado o projeto
            de instalação da usina e assinada uma{" "}
            <strong>carta de intenção</strong> pelos gestores participantes.
          </motion.p>

          <motion.p {...fadeUp} className="leading-8">
            A proposta prevê que a empresa responsável realize os procedimentos
            legais, a documentação necessária e posteriormente a implementação
            da estrutura no município.
          </motion.p>

          <motion.h3
            {...fadeUp}
            className="text-lg font-semibold text-zinc-800"
          >
            Como a usina funcionará?
          </motion.h3>

          <motion.p {...fadeUp} className="leading-8">
            A usina funcionará como uma unidade de{" "}
            <strong>aproveitamento energético dos resíduos sólidos</strong>. Em
            vez de destinar todo o lixo diretamente para aterros sanitários,
            parte dos resíduos poderá ser utilizada para a{" "}
            <strong>geração de energia</strong>.
          </motion.p>

          <motion.p {...fadeUp} className="leading-8">
            O processo permitirá reduzir a quantidade de lixo acumulada no meio
            ambiente e, ao mesmo tempo, produzir <strong>eletricidade</strong>{" "}
            para abastecimento da população. Dessa forma, materiais que antes
            seriam apenas descartados poderão ser aproveitados como{" "}
            <strong>fonte de energia</strong>, contribuindo para uma gestão mais
            eficiente dos resíduos urbanos.
          </motion.p>

          <div className="space-y-1">
            <motion.h3
              {...fadeUp}
              className="text-lg font-semibold text-zinc-800"
            >
              Benefícios esperados para a região
            </motion.h3>

            <motion.p {...fadeUp} className="leading-8">
              Entre os benefícios apontados para a implantação da usina
              destacam-se:
            </motion.p>
          </div>

          <motion.ul {...fadeUp} className="list-disc ml-6">
            <li>
              Maior aproveitamento dos resíduos produzidos pelos municípios;
            </li>
            <li>
              Redução da quantidade de lixo destinada aos{" "}
              <strong>aterros sanitários</strong>;
            </li>
            <li>
              Produção de <strong>energia</strong> a partir dos resíduos;
            </li>
            <li>
              Possível redução dos <strong>custos</strong> relacionados ao
              fornecimento de energia;
            </li>
            <li>
              Geração de <strong>receitas para o município</strong> por meio de
              tributos e repasses;
            </li>
            <li>
              Redução dos <strong>impactos ambientais</strong> causados pelo
              descarte inadequado de resíduos.
            </li>
          </motion.ul>

          <motion.h3
            {...fadeUp}
            className="text-lg font-semibold text-zinc-800"
          >
            Possíveis desafios e impactos negativos
          </motion.h3>

          <motion.p {...fadeUp} className="leading-8">
            Apesar das vantagens, a implantação de uma usina de resíduos sólidos
            também apresenta desafios...
          </motion.p>

          <motion.p {...fadeUp} className="leading-8">
            Por essa razão, é fundamental que a usina utilize{" "}
            <strong>sistemas modernos de controle ambiental</strong>, incluindo
            filtros e equipamentos de alta eficiência capazes de reduzir a
            emissão desses poluentes e garantir a segurança ambiental e da
            população.
          </motion.p>

          <motion.h3
            {...fadeUp}
            className="text-lg font-semibold text-zinc-800"
          >
            Sustentabilidade e futuro
          </motion.h3>

          <motion.p {...fadeUp} className="leading-8">
            A <strong>gestão adequada dos resíduos sólidos</strong> é um dos
            grandes desafios das cidades contemporâneas...
          </motion.p>

          <motion.p {...fadeUp} className="leading-8">
            Nesse contexto, a possível implantação da{" "}
            <strong>Usina de Resíduos Sólidos em Juripiranga</strong> surge como
            uma iniciativa que busca conciliar{" "}
            <strong>desenvolvimento econômico</strong>,{" "}
            <strong>inovação tecnológica</strong> e{" "}
            <strong>preservação ambiental</strong>, contribuindo para a
            construção de um futuro mais sustentável para o município e toda a
            região.
          </motion.p>
        </div>
      </section>
    </>
  );
}
