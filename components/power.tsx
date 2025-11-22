"use client";

import { motion } from "framer-motion";
import {
  Target, // Google ADS
  TrendingUp, // Meta Business
  Monitor, // Sites
  Palette, // Design
  Users, // Social Media
  Award, // SEO e Conteúdo
  Zap, // Treinamento (Novo)
  ArrowRight,
} from "lucide-react";

// Definição dos serviços atualizada
const services = [
  {
    icon: Target,
    title: "Google ADS",
    description:
      "Usamos palavras-chave estratégicas para capturar leads de alta intenção, garantindo pacientes mais qualificados desde o primeiro clique no Google.",
    isFeatured: true, // Mantemos a flag para o rótulo 'DESTAQUE'
  },
  {
    icon: TrendingUp,
    title: "Meta Business",
    description:
      "Criação e gestão de campanhas segmentadas no Facebook e Instagram, transformando o interesse social do seu público em agendamentos concretos.",
    isFeatured: false,
  },
  {
    icon: Monitor,
    title: "Sites",
    description:
      "Desenvolvimento de websites modernos, rápidos e otimizados que servem como a principal e mais eficiente plataforma de conversão da sua clínica.",
    isFeatured: false,
  },
  {
    icon: Palette,
    title: "Design",
    description:
      "Identidade visual e materiais gráficos profissionais que elevam a percepção de valor da sua marca, garantindo uma comunicação coesa e memorável.",
    isFeatured: false,
  },
  {
    icon: Users,
    title: "Social Media",
    description:
      "Planejamento e execução de conteúdo envolvente para construir comunidade e autoridade, mantendo sua clínica sempre relevante e na mente dos pacientes.",
    isFeatured: false,
  },

  {
    icon: Zap,
    title: "Treinamento",
    description:
      "Capacitação e qualificação de toda a equipe de atendimento (secretárias e vendedores), transformando o contato em mão de obra qualificada para maximizar conversões.",
    isFeatured: false,
  },
];

// Cor personalizada em Hex para ícones, CTA e Tag
const CUSTOM_ICON_COLOR = "#e9d2a6"; 

// Componente Card de Serviço
const ServiceCard = ({ icon: Icon, title, description, isFeatured, index }) => {
  // Cores: Todos iniciam ESCUROS e ficam CLAROS no hover
  const bgColor = "bg-gray-900 group-hover:bg-white";
  const textColor = "text-white group-hover:text-gray-900";
  const descColor = "text-gray-300 group-hover:text-gray-600";
  // Fundo do ícone
  const iconBg = "bg-gray-700 group-hover:bg-gray-100";
  // Borda suave
  const borderColor = "border-indigo-500/50 group-hover:border-gray-100";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.2 }}
      className="h-full group" // Adiciona 'group' para que os elementos internos reajam ao hover do pai
    >
      <div
        className={`
          p-8 md:p-10 rounded-xl shadow-2xl transition-all duration-300 
          hover:shadow-indigo-500/30 hover:-translate-y-2
          flex flex-col h-full border ${borderColor}
          ${bgColor}
        `}
      >
        {/* Ícone e Destaque */}
        <div className="flex items-center justify-between mb-4">
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${iconBg}`}
          >
            {/* Ícone com a cor personalizada */}
            <Icon 
              className={`w-6 h-6 transition-colors`} 
              style={{ color: CUSTOM_ICON_COLOR }} 
            />
          </div>
          {/* Tag de Destaque - Visível apenas para o Google ADS */}
          {isFeatured && (
            <div 
              className={`text-sm font-semibold transition-colors group-hover:text-gray-900`}
              style={{ color: CUSTOM_ICON_COLOR }}
            >
              DESTAQUE
            </div>
          )}
        </div>

        {/* Título do Serviço */}
        <h3 className={`text-2xl font-bold mb-3 mt-2 transition-colors duration-300 ${textColor}`}>
          {title}
        </h3>

        {/* Descrição */}
        <p className={`text-base flex-grow leading-relaxed transition-colors duration-300 ${descColor}`}>
          {description}
        </p>

        {/* CTA Secundário: Saiba mais (com cor personalizada no estado fixo) */}
        <button
          className={`mt-6 flex items-center text-sm font-semibold transition-colors duration-300 group-hover:text-gray-900`}
          style={{ color: CUSTOM_ICON_COLOR }}
        >
          Saiba mais
          <ArrowRight className={`ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1`} />
        </button>
      </div>
    </motion.div>
  );
};

export default function App() {
  return (
    <section
      id="solucoes"
      className="relative py-24 md:py-32 bg-gray-50 overflow-hidden min-h-screen font-sans"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header e CTA Principal */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20">
          
          {/* Título e Subtítulo */}
          <div className="max-w-4xl pr-0 md:pr-16">
            <h2 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight mb-4">
              Soluções que Impulsionam o Seu Negócio
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Desenvolvemos estratégias completas de marketing digital especialmente para clínicas odontológicas, combinando posicionamento, tráfego e conteúdo para aumentar sua autoridade e atrair pacientes qualificados de forma consistente.
            </p>
          </div>

          {/* CTA Principal: Get Started */}
          <motion.a
            href="#get-started"
            className="mt-8 md:mt-0 px-8 py-3 bg-emerald-500 text-white font-semibold text-lg rounded-full shadow-lg hover:bg-emerald-600 transition-colors transform hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Quero entender melhor
          </motion.a>
        </div>

        {/* Cartões de Serviço (Layout em Grade) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              isFeatured={service.isFeatured}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}