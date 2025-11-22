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

// Cor de destaque principal (Ouro/Areia solicitada)
const ACCENT_COLOR_PRIMARY = "#e9d2a6"; 
// Cor de destaque secundária (Verde, mantida para ícones de checklist)
const ACCENT_COLOR_SECONDARY = "#34d399"; 
const GOLD_GRADIENT = "from-[#e9d2a6] to-[#f0e2b6]";


// Funções utilitárias para o Path da Linha Pontilhada Curva
const generateWavyPath = (count) => {
  const points = count;
  let path = "M 0 50"; 
  const segmentWidth = 100 / (points - 1);
  const amplitude = 30; 

  for (let i = 0; i < points - 1; i++) {
    const startX = i * segmentWidth;
    const endX = (i + 1) * segmentWidth;
    
    const controlY1 = i % 2 === 0 ? 50 - amplitude : 50 + amplitude;
    const controlY2 = i % 2 === 0 ? 50 + amplitude : 50 - amplitude;

    path += ` C ${startX + segmentWidth / 2} ${controlY1}, ${endX - segmentWidth / 2} ${controlY2}, ${endX} 50`;
  }
  return path;
};

// Componente para a caixa de "Pedras no Caminho" (Rock Bottoms)
const RockBottomsBox = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      viewport={{ once: true }}
      className="relative p-6 rounded-xl bg-gray-800 border border-gray-700 shadow-2xl overflow-hidden cursor-pointer group hover:bg-gray-700 transition duration-300"
    >
      <div className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-15 transition duration-300" 
          style={{ backgroundImage: "url('https://placehold.co/400x400/1f2937/d1d5db?text=GOWE')" }}>
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <h4 className="text-xl md:text-2xl font-bold text-gray-50 mb-4 tracking-wider">
          REVELAMOS TODOS OS <br /> DESAFIOS DE CONVERSÃO
        </h4>
        <p className="text-sm text-gray-400 mb-6">
          Enviamos um relatório detalhado sobre todos os desafios de conversão e como superá-los.
        </p>
        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-700 group-hover:bg-gray-600 transition duration-300">
          <ArrowRight className="w-6 h-6 text-gray-200 group-hover:translate-x-1 transition duration-300" />
        </div>
      </div>
    </motion.div>
);


export function Services() {
  // Dados para a linha do tempo (Funil Wavy - Ajuste a ordem e cores aqui)
  const leadJourney = [
    { 
      icon: UserPlus, 
      title: "Lead Entrou", 
      subtitle: "Captação inicial", 
      color: "#3b82f6", // Azul
    },
    { 
      icon: Briefcase, 
      title: "Trabalho", 
      subtitle: "Qualificação ativa", 
      color: ACCENT_COLOR_SECONDARY, // Verde
    },
    { 
      icon: Calendar, 
      title: "Agendamento", 
      subtitle: "Reunião marcada", 
      color: "#f59e0b", // Amarelo/Laranja
    },
    { 
      icon: Clock, 
      title: "Em Conversa", 
      subtitle: "Segundo contato", 
      color: "#ef4444", // Vermelho
    },
    { 
      icon: DollarSign, 
      title: "Fechamento", 
      subtitle: "Conversão final", 
      color: ACCENT_COLOR_PRIMARY, // Ouro
    },
  ];

  const WAVY_PATH = generateWavyPath(leadJourney.length);

  return (
    <section
      id="jornada-qualificacao-dark"
      className="relative py-24 md:py-32 bg-gray-900 overflow-hidden font-sans text-gray-100 min-h-screen"
    >
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* --- CABEÇALHO SUPERIOR (Estilo Gowe) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            
            {/* Coluna 1: Título Principal e Posicionamento Estratégico */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="p-8 rounded-xl bg-gray-800 border border-gray-700 shadow-2xl relative overflow-hidden"
            >
                <div className="relative z-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-2 leading-tight tracking-tight">
                        Muito além de <span className={`text-transparent bg-clip-text bg-gradient-to-r ${GOLD_GRADIENT}`}>anúncios</span>.
                    </h1>
                    <p className="text-xl font-semibold mb-6 text-gray-300">
                        A Belmond estrutura sua operação de ponta a ponta.
                    </p>

                    {/* Destaque */}
                    <div className="p-4 rounded-lg border-l-4" style={{ borderColor: ACCENT_COLOR_PRIMARY, backgroundColor: 'rgba(15, 23, 42, 0.5)' }}>
                        <p className="font-bold text-gray-50">Conectamos marketing, vendas, tecnologia e design com foco total em performance.</p>
                    </div>
                    
                    {/* Serviço 1: Posicionamento Estratégico */}
                    <div className="mt-8">
                        <p className="text-2xl font-bold mb-2 text-gray-50" style={{ color: ACCENT_COLOR_PRIMARY }}>
                            Posicionamento Estratégico
                        </p>
                        <p className="text-md text-gray-400">
                            Diagnóstico do seu mercado, concorrência e diferenciais. Reposicionamos sua marca para gerar autoridade, atrair os leads certos e vender mais.
                        </p>
                        {/* Ícones de Canais - Replicando a ideia do código anterior */}
                        <div className="flex gap-3 mt-4 flex-wrap">
                            {[Camera, Play, Globe, Linkedin, Instagram].map((Icon, i) => (
                                <div key={i}
                                    className="w-10 h-10 bg-gray-700/50 rounded-lg flex items-center justify-center border border-gray-700/80" 
                                >
                                    <Icon className="w-5 h-5 text-gray-400" /> 
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        className="mt-10 px-8 py-4 rounded-lg font-semibold text-gray-900 transition duration-300 ease-in-out w-full hover:shadow-lg"
                        style={{ backgroundColor: ACCENT_COLOR_PRIMARY, boxShadow: `0 8px 15px ${ACCENT_COLOR_PRIMARY}60` }}
                    >
                        Fale com a Gowe
                    </button>
                </div>
            </motion.div>

            {/* Coluna 2: Placeholder da Tela / Sala */}
            <div className="lg:col-span-1 flex items-center justify-center">
                <div className="w-full h-full bg-gray-800 border border-gray-700 flex items-center justify-center rounded-xl shadow-inner min-h-[300px]">
                    <span className="text-4xl font-light text-gray-600">IMAGEM AQUI</span>
                </div>
            </div>

            {/* Coluna 3: Estruturação de Funil de Vendas e Desafios */}
            <div className="flex flex-col space-y-8">
                {/* Caixa de Estruturação de Funil de Vendas */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="p-6 rounded-xl bg-gray-800 border border-gray-700 shadow-2xl flex-1"
                >
                    <h4 className="text-lg font-bold text-gray-50 mb-3 border-b border-gray-700 pb-2" style={{ color: ACCENT_COLOR_PRIMARY }}>
                        Estruturação de Funil de Vendas
                    </h4>
                    <ul className="text-gray-400 space-y-3 text-sm">
                        <li className="flex items-start">
                            <CheckCircle className="flex-shrink-0 w-4 h-4 mr-2 mt-1" style={{ color: ACCENT_COLOR_SECONDARY }} />
                            <span>Montamos uma jornada completa de geração, qualificação e conversão de leads.</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle className="flex-shrink-0 w-4 h-4 mr-2 mt-1" style={{ color: ACCENT_COLOR_SECONDARY }} />
                            <span>Com lógica, previsibilidade e integração total com seu time comercial.</span>
                        </li>
                    </ul>
                </motion.div>

                {/* Caixa Desafios (Pedras no Caminho) */}
                <RockBottomsBox />
            </div>

        </div>

        {/* --- Título da Jornada --- */}
        <div className="text-center mb-16 md:mb-20 max-w-4xl mx-auto pt-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-4">
            Nossa Jornada de <span className={`text-transparent bg-clip-text bg-gradient-to-r ${GOLD_GRADIENT}`}>Performance</span>
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Acompanhamos cada etapa do processo da Gowe para garantir a máxima conversão dos seus resultados.
          </p>
        </div>

        {/* --- LINHA DO TEMPO (Dark Theme, 5 Passos Wavy) --- */}
        <div className="relative flex justify-between items-center w-full py-16 h-[22rem] mx-auto">
          
          {/* SVG para a Linha Curva Pontilhada */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-[100px]">
            <svg viewBox={`0 0 100 100`} preserveAspectRatio="none" className="w-full h-full">
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.5 }}
                viewport={{ once: true }}
                d={WAVY_PATH}
                stroke="#4b5563" 
                strokeWidth="2"
                strokeDasharray="0 8" 
                fill="none"
              />
            </svg>
          </div>

          {leadJourney.map((step, i) => {
            const isAbove = i % 2 === 0; 
            const horizontalPosition = `${(i / (leadJourney.length - 1)) * 100}%`;
            const Icon = step.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: isAbove ? 50 : -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 100, delay: i * 0.2 + 0.5 }}
                viewport={{ once: true, amount: 0.8 }}
                className={`absolute flex flex-col items-center w-36 transition-all duration-300`}
                style={{
                  left: horizontalPosition,
                  transform: 'translateX(-50%)', 
                  top: isAbove ? '15%' : '45%', 
                }}
              >
                
                {/* Bolinha de Conexão */}
                <div 
                    className={`w-4 h-4 rounded-full absolute z-40`}
                    style={{ 
                        backgroundColor: step.color, 
                        boxShadow: `0 0 12px ${step.color}99`,
                        top: isAbove ? '120px' : '-20px', 
                    }}
                />
                
                {/* Círculo Principal do Ícone */}
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center relative z-30 mb-2`}
                  style={{ 
                    backgroundColor: step.color,
                    boxShadow: `0 0 20px ${step.color}40`,
                  }}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Textos */}
                <div className="text-center mt-2">
                  <h4 className="text-md font-bold leading-tight text-gray-50">{step.title}</h4>
                  <p className="text-sm text-gray-400 mt-1">{step.subtitle}</p>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}