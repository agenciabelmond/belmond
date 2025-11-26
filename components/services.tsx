"use client";

import { motion } from "framer-motion";
import {
  UserPlus,
  Clock,
  Briefcase,
  Calendar,
  DollarSign,
  ArrowRight,
  CheckCircle,
  Camera,
  Play,
  Instagram,
  Linkedin,
  Globe,
} from "lucide-react";

// Cores principais
const ACCENT_COLOR_PRIMARY = "#e9d2a6";
const ACCENT_COLOR_SECONDARY = "#34d399";
const GOLD_GRADIENT = "from-[#e9d2a6] to-[#f0e2b6]";

const WAVY_PATH = "M0,50 Q25,20 50,50 T100,50";


// Path da linha ondulada
const generateWavyPath = (count) => {
  let path = "M 0 50";
  const segmentWidth = 100 / (count - 1);
  const amplitude = 30;

  for (let i = 0; i < count - 1; i++) {
    const startX = i * segmentWidth;
    const endX = (i + 1) * segmentWidth;

    const controlY1 = i % 2 === 0 ? 20 : 80;
    const controlY2 = i % 2 === 0 ? 80 : 20;

    path += ` C ${startX + segmentWidth / 2} ${controlY1}, ${
      endX - segmentWidth / 2
    } ${controlY2}, ${endX} 50`;
  }
  return path;
};

// Caixa Rock Bottoms
const RockBottomsBox = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: 0.8 }}
    viewport={{ once: true }}
    className="relative mt-10 p-6 rounded-xl bg-gray-900 border border-gray-700 shadow-2xl overflow-hidden cursor-pointer group hover:bg-gray-800 transition duration-300"
  >
    {/* Imagem removida */}

    <div className="relative z-10 text-center">
      <h4 className="text-xl md:text-2xl font-bold text-gray-50 mb-4 tracking-wider">
        ENTENDA COMO FUNCIONA <br /> O NOSSO TREINAMENTO
      </h4>

      <p className="text-sm text-gray-400 mb-6">
        Enviamos um relatório detalhado sobre todos os desafios de conversão e
        como superá-los.
      </p>

      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-700 group-hover:bg-gray-600 transition duration-300 mx-auto">
        <ArrowRight
          className="w-6 h-6 transition duration-300 group-hover:translate-x-1"
          style={{ color: "#e9d2a6" }}
        />
      </div>
    </div>
  </motion.div>

);

export function Services() {
  const leadJourney = [
    {
    title: "Lead entrou",
    subtitle: "Início do processo Belmonde",
    color: "#f59e0b",
    icon: () => <span>📥</span>,
    },
    {
    title: "Ligação",
    subtitle: "Primeiro contato",
    color: "#3b82f6",
    icon: () => <span>📞</span>,
    },
    {
    title: "Retrabalho ativo",
    subtitle: "Tentativas extras de conversão",
    color: "#8b5cf6",
    icon: () => <span>🔄</span>,
    },
    {
    title: "Agendamento",
    subtitle: "Organizamos o melhor horário",
    color: "#10b981",
    icon: () => <span>📅</span>,
    },
    {
    title: "Lembretes",
    subtitle: "Mantemos o lead quente",
    color: "#ef4444",
    icon: () => <span>⏰</span>,
    },
    {
    title: "Fechamento",
    subtitle: "Conversão para a Belmonde",
    color: "#eab308",
    icon: () => <span>🏁</span>,
    },
];

  const WAVY_PATH = generateWavyPath(leadJourney.length);

  return (
    <section
      id="jornada-qualificacao-dark"
      className="relative pt-10 md:pt-16 pb-0 bg-gray-900 font-sans text-gray-100 overflow-hidden"
    >
      {/* 🔥 PRIMEIRA PARTE COM BACKGROUND */}
      <div
        className="bg-cover bg-center bg-no-repeat pb-24 relative -mt-35"
        style={{
          backgroundImage: "url('/sua-imagem-de-fundo.jpg')",
          backgroundPosition: "center -80px"
        }}
      >

        {/* Overlay de sala (opcional) */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 pointer-events-none"
          style={{ backgroundImage: "url('/belmondia.png')" }}
        />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
       {/* COLUNA 1 */}
    {/* COLUNA 1 */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="p-6 rounded-xl bg-gray-900 border border-gray-700 shadow-2xl relative overflow-hidden mt-32 max-w-md"
        >
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2 leading-tight tracking-tight">
            Muito além de{" "}
            <span
              className={`text-transparent bg-clip-text bg-gradient-to-r ${GOLD_GRADIENT}`}
            >
              anúncios
            </span>
            .
          </h1>

          <p className="text-lg font-semibold mb-6 text-gray-300">
            A Belmond estrutura sua operação de ponta a ponta.
          </p>

          <div className="mt-6">
            <p
              className="text-xl font-bold mb-2"
              style={{ color: ACCENT_COLOR_PRIMARY }}
            >
              Posicionamento Estratégico
            </p>
            <p className="text-md text-gray-400">
              Diagnóstico do seu mercado, concorrência e diferenciais.
              Reposicionamos sua marca para gerar autoridade, atrair os
              leads certos e vender mais.
            </p>

            <div className="flex gap-3 mt-4 flex-wrap">
              {[Camera, Play, Globe, Linkedin, Instagram].map((Icon, i) => (
                <div
                  key={i}
                  className="w-9 h-9 bg-gray-700/50 rounded-lg flex items-center justify-center border border-gray-700/80"
                >
                  <Icon className="w-4 h-4 text-gray-400" />
                </div>
              ))}
            </div>
          </div>

          <button
            className="mt-8 px-6 py-3 rounded-lg font-semibold text-gray-900 w-full transition duration-300"
            style={{
              backgroundColor: ACCENT_COLOR_PRIMARY,
              boxShadow: `0 8px 15px ${ACCENT_COLOR_PRIMARY}60`,
            }}
          >
            Fale com Especialista
          </button>
        </motion.div>

            {/* COLUNA 2 */}
            <div className="flex flex-col space-y-8">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mt-30 p-6 rounded-xl bg-gray-900 border border-gray-700 shadow-2xl flex-1"
              >
                <h4
                  className="text-lg font-bold mb-3 border-b border-gray-700 pb-2"
                  style={{ color: ACCENT_COLOR_PRIMARY }}
                >
                  Estruturação de Funil de Vendas
                </h4>

                <ul className="text-gray-400 space-y-4 text-sm leading-relaxed">
                  <li className="flex items-start">
                    <CheckCircle
                      className="w-4 h-4 mr-2 mt-1"
                      style={{ color: ACCENT_COLOR_SECONDARY }}
                    />
                    Construímos um funil completo que mapeia toda a jornada do cliente — da
                    descoberta ao fechamento — garantindo mais previsibilidade e escalabilidade.
                  </li>

                  <li className="flex items-start">
                    <CheckCircle
                      className="w-4 h-4 mr-2 mt-1"
                      style={{ color: ACCENT_COLOR_SECONDARY }}
                    />
                    Definimos critérios de qualificação, fluxos de nutrição e pontos-chave de
                    conversão para transformar leads em oportunidades reais.
                  </li>

                  <li className="flex items-start">
                    <CheckCircle
                      className="w-4 h-4 mr-2 mt-1"
                      style={{ color: ACCENT_COLOR_SECONDARY }}
                    />
                    Integramos o funil ao seu time comercial para criar alinhamento,
                    processos claros e um fluxo contínuo de vendas.
                  </li>
                </ul>
              </motion.div>


              <RockBottomsBox />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
