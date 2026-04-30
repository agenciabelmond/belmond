"use client"

import { motion } from "framer-motion"
import { 
  Users, 
  Target, 
  Trophy, 
  BarChart3, 
  Repeat, 
  ShieldCheck 
} from "lucide-react"

const features = [
  {
    title: "Monitoramento Completo",
    description: "Acompanhamos os atendimentos da secretária na prática, analisando cada conversa para elevar o padrão da clínica.",
    icon: ShieldCheck,
  },
  {
    title: "Treinamento da Equipe",
    description: "Treinamos sua secretária e CRC para encantar o paciente e converter até 3x mais com técnicas avançadas.",
    icon: Users,
  },
  {
    title: "Programas de Indicação",
    description: "Estratégias de fidelização e retenção para garantir que seu paciente se torne um promotor da sua marca.",
    icon: Repeat,
  },
  {
    title: "Funil de Qualificação",
    description: "Estrutura completa para qualificar leads e maximizar conversões com abordagens personalizadas.",
    icon: Target,
  },
  {
    title: "Análise de Performance",
    description: "Métricas essenciais de captação e satisfação para otimizar resultados baseados em dados reais.",
    icon: BarChart3,
  },
  {
    title: "Acompanhamento Contínuo",
    description: "Suporte estratégico e revisões periódicas para garantir que o crescimento nunca estagne.",
    icon: Trophy,
  }
]

// Variantes para animação de entrada em cascata (stagger)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export function MethodologySection() {
  return (
    <section className="relative bg-[#050505] text-white py-24 px-6 overflow-hidden">
      
      {/* Detalhes de fundo (Glows sutis) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#C6A75E]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        
        {/* Header da Seção */}
        <div className="text-center mb-20 space-y-4">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#C6A75E] text-[10px] tracking-[0.4em] uppercase font-bold"
          >
            Metodologia Exclusiva
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif text-white tracking-tight"
          >
            Entenda o <span className="italic font-normal">PowerClinic</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/50 text-base md:text-lg max-w-3xl mx-auto leading-relaxed font-light"
          >
            Integramos captação, atendimento e conversão em um sistema que transforma sua clínica em uma 
            <span className="text-white font-medium"> máquina de agendamentos premium.</span>
          </motion.p>
        </div>

        {/* Grid de Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/10 overflow-hidden transition-all duration-500 hover:bg-white/[0.04] hover:border-[#C6A75E]/40"
            >
              {/* Efeito de brilho no hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#C6A75E]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-[#C6A75E]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <item.icon className="w-6 h-6 text-[#C6A75E]" />
                </div>
                
                <h3 className="text-xl font-medium mb-3 text-white group-hover:text-[#E7D3A1] transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-sm leading-relaxed text-white/40 group-hover:text-white/60 transition-colors">
                  {item.description}
                </p>
              </div>

              {/* Detalhe visual discreto no canto */}
              <div className="absolute bottom-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <div className="text-4xl font-serif italic text-white">{index + 1}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}