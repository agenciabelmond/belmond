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
    number: "01",
    title: "Monitoramento Completo",
    description:
      "Acompanhamos cada interação da sua equipe para identificar oportunidades de melhoria e elevar a experiência do paciente.",
    icon: ShieldCheck,
    tags: ["Escuta ativa", "Feedbacks", "Relatórios"],
  },
  {
    number: "02",
    title: "Treinamento Estratégico",
    description:
      "Capacitamos secretárias e equipes comerciais para gerar confiança, conexão e taxas de conversão superiores.",
    icon: Users,
    tags: ["CRC", "Scripts", "Conversão"],
  },
  {
    number: "03",
    title: "Programas de Fidelização",
    description:
      "Criamos estratégias de retenção que transformam pacientes satisfeitos em promotores ativos da sua clínica.",
    icon: Repeat,
    tags: ["Retenção", "Indicações", "Engajamento"],
  },
  {
    number: "04",
    title: "Funil de Qualificação",
    description:
      "Estruturamos processos inteligentes para qualificar leads e aumentar a previsibilidade das conversões.",
    icon: Target,
    tags: ["Funis", "Landing Pages", "Anúncios"],
  },
  {
    number: "05",
    title: "Performance Orientada por Dados",
    description:
      "Acompanhamos métricas críticas para otimizar aquisição, atendimento e crescimento sustentável.",
    icon: BarChart3,
    tags: ["Métricas", "Dashboards", "Análise"],
  },
  {
    number: "06",
    title: "Crescimento Contínuo",
    description:
      "Realizamos análises recorrentes e ajustes estratégicos para manter sua clínica em evolução constante.",
    icon: Trophy,
    tags: ["Estratégia", "Ajustes", "Escala"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45 },
  },
};

function Divider({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-4 w-full">
      <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#E4C978]/60" />

      <span
        className="text-[10px] font-bold tracking-[0.35em] text-[#E4C978] uppercase"
        style={{ fontFamily: "'Lato', sans-serif" }}
      >
        {children}
      </span>

      <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#E4C978]/60" />
    </div>
  );
}

export default function MethodologySection() {
  return (
    <section
      id="metodo"
      className="relative -mt-4 md:-mt-8 overflow-hidden bg-[#080808] px-6 py-16 text-white"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E4C978]/5 blur-[130px]" />
        <div className="absolute bottom-0 left-1/2 h-[180px] w-[500px] -translate-x-1/2 bg-[#EED48F]/6 blur-[80px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-4xl space-y-4 text-center"
        >
          <Divider>Metodologia Exclusiva</Divider>

          <h2
            className="text-3xl font-black leading-none tracking-tight md:text-5xl"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            O MÉTODO <span className="text-[#E4C978]">POWERCLINIC</span>
          </h2>

          <p
            className="text-sm leading-relaxed text-zinc-400 md:text-base"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            Integramos aquisição, atendimento e conversão em um sistema
            estruturado que posiciona sua clínica como referência e gera{' '}
            <span className="font-semibold text-[#E4C978]">
              crescimento previsível.
            </span>
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map(({ number, title, description, icon: Icon, tags }) => (
            <motion.div
              key={title}
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.015 }}
              transition={{ duration: 0.35 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl p-[1px]"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#F8E7A1]/40 via-[#E4C978]/15 to-transparent opacity-80 transition-all duration-500 group-hover:opacity-100" />

              <div
                className="relative z-10 flex h-full flex-col rounded-2xl border border-white/5 bg-gradient-to-b from-[#131313] to-[#0A0A0A] p-5 backdrop-blur-xl"
                style={{
                  boxShadow:
                    '0 8px 40px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.04)',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#E4C978]/[0.07] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10 flex h-full flex-col">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl font-semibold text-[#F4DE93]/80">
                        {number}
                      </span>

                      <div className="h-px w-8 bg-gradient-to-r from-[#E4C978] to-transparent" />
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#E4C978]/20 bg-[#E4C978]/10 shadow-[0_0_20px_rgba(228,201,120,0.08)] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#E4C978]/15">
                      <Icon className="h-4 w-4 text-[#F8E7A1]" />
                    </div>
                  </div>

                  <h3 className="mb-3 text-base font-black tracking-[0.08em] text-white transition-colors group-hover:text-[#F8E7A1]">
                    {title.toUpperCase()}
                  </h3>

                  <div className="mb-4 h-px w-full bg-gradient-to-r from-[#E4C978]/30 via-[#E4C978]/10 to-transparent" />

                  <p className="mb-5 flex-1 text-sm leading-relaxed text-zinc-400 transition-colors group-hover:text-zinc-300">
                    {description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#E4C978]/15 bg-[#E4C978]/5 px-3 py-1 text-[11px] tracking-wide text-[#D8C27A]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}