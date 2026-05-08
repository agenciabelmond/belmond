"use client";

import { motion } from "framer-motion";
import {
  Users,
  Target,
  Trophy,
  BarChart3,
  Repeat,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    title: "Monitoramento Completo",
    description:
      "Acompanhamos cada interação da sua equipe para identificar oportunidades de melhoria e elevar a experiência do paciente.",
    icon: ShieldCheck,
  },
  {
    title: "Treinamento Estratégico",
    description:
      "Capacitamos secretárias e equipes comerciais para gerar confiança, conexão e taxas de conversão superiores.",
    icon: Users,
  },
  {
    title: "Programas de Fidelização",
    description:
      "Criamos estratégias de retenção que transformam pacientes satisfeitos em promotores ativos da sua clínica.",
    icon: Repeat,
  },
  {
    title: "Funil de Qualificação",
    description:
      "Estruturamos processos inteligentes para qualificar leads e aumentar a previsibilidade das conversões.",
    icon: Target,
  },
  {
    title: "Performance Orientada por Dados",
    description:
      "Acompanhamos métricas críticas para otimizar aquisição, atendimento e crescimento sustentável.",
    icon: BarChart3,
  },
  {
    title: "Crescimento Contínuo",
    description:
      "Realizamos análises recorrentes e ajustes estratégicos para manter sua clínica em evolução constante.",
    icon: Trophy,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

export default function MethodologySection() {
  return (
    <section
      id="metodo"
      className="relative -mt-10 md:-mt-16 overflow-hidden bg-[#050505] px-6 py-16 text-white"
    >
      {/* Glow background */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C6A75E]/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-10 max-w-4xl space-y-3 text-center"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.35em] text-[#C6A75E]">
            Metodologia Exclusiva
          </span>

          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            Conheça o <span className="italic font-light">PowerClinic</span>
          </h2>

          <p className="text-sm leading-relaxed text-zinc-400 md:text-base">
            Integramos aquisição, atendimento e conversão em um sistema
            estruturado que posiciona sua clínica como referência e gera
            crescimento previsível.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map(({ title, description, icon: Icon }, index) => (
            <motion.div
              key={title}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-500 hover:border-[#C6A75E]/40 hover:bg-white/[0.04]"
            >
              {/* hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#C6A75E]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C6A75E]/10 transition-transform duration-500 group-hover:scale-110">
                  <Icon className="h-5 w-5 text-[#C6A75E]" />
                </div>

                {/* Title */}
                <h3 className="mb-3 text-lg font-semibold text-white transition-colors group-hover:text-[#E7D3A1]">
                  {title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-zinc-400">
                  {description}
                </p>
              </div>

              {/* index */}
              <span className="absolute bottom-5 right-5 text-4xl font-light text-white/5 transition-all duration-500 group-hover:text-[#C6A75E]/10">
                {String(index + 1).padStart(2, "0")}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}