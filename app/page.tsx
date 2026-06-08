"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  MapPin,
  TrendingUp,
  Music,
  TreePine,
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const sections = [
  {
    icon: BookOpen,
    title: "História",
    description:
      "Conheça as origens e a formação da cidade de Juripiranga ao longo dos séculos.",
    path: "/historia",
    delay: 0.1,
  },
  {
    icon: MapPin,
    title: "Geografia",
    description:
      "Dados geográficos, clima, relevo e posição no mapa da Paraíba.",
    path: "/geografia",
    delay: 0.2,
  },
  {
    icon: Building2,
    title: "Urbanização",
    description:
      "A estrutura urbana, o crescimento da cidade e sua posição na hierarquia urbana brasileira.",
    path: "/urbanizacao",
    delay: 0.6,
  },
  {
    icon: TrendingUp,
    title: "Economia",
    description:
      "A economia local, o comércio e as atividades produtivas da região.",
    path: "/economia",
    delay: 0.3,
  },
  {
    icon: TreePine,
    title: "Meio Ambiente",
    description:
      "Gestão de resíduos, impactos ambientais e projetos sustentáveis do município.",
    path: "/meio-ambiente",
    delay: 0.5,
  },
  {
    icon: Music,
    title: "Cultura",
    description:
      "Tradições, festas e a identidade cultural dos juripiranguenses.",
    path: "/cultura",
    delay: 0.4,
  },
];

export default function Home() {
  return (
    <div>
      <section className="relative h-[85vh] min-h-135 overflow-hidden">
        <img
          src="/home-hero.png"
          alt="Vista panorâmica de Juripiranga"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-tr from-black/70 via-black/50 to-transparent" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-poppins font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white mb-4 leading-tight">
              Juripiranga
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-semibold text-white/70 mt-2">
                Paraíba, Brasil
              </span>
            </h1>
            <p className="text-white/80 text-lg sm:text-xl max-w-2xl mb-8 leading-relaxed">
              Um estudo geográfico sobre a cidade, sua história, cultura,
              economia e paisagem — produzido para fins educativos.
            </p>
            <Link href="/historia">
              <Button
                size="lg"
                className="rounded-full px-8 gap-2 text-base bg-primary hover:bg-primary-hover"
              >
                Explorar o projeto <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-foreground mb-6">
              Sobre este projeto
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              Este site foi desenvolvido como parte de um trabalho acadêmico de
              Geografia, com o objetivo de apresentar aspectos geográficos,
              históricos, econômicos e culturais da cidade de Juripiranga,
              localizada na Zona da Mata do estado da Paraíba. O conteúdo aqui
              apresentado tem caráter exclusivamente educativo e informativo.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-foreground mb-4">
              Navegue pelo conteúdo
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Explore cada seção do nosso estudo sobre Juripiranga
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section) => (
              <motion.div
                key={section.path}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: section.delay }}
              >
                <Link href={section.path} className="block group">
                  <div className="bg-card rounded-xl border border-border p-7 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                    <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
                      <section.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h3 className="font-poppins font-semibold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                      {section.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {section.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-primary text-sm font-medium">
                      Acessar{" "}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
