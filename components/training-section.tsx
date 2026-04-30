"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { 
    question: "Como funciona o treinamento online?", 
    answer: "O treinamento é 100% online com foco prático. Incluímos scripts prontos, simulações de atendimento e acompanhamento semanal para garantir que sua equipe converta mais pacientes." 
  },
  { 
    question: "O que está incluído no monitoramento?", 
    answer: "Analisamos diariamente indicadores como tempo de resposta e taxa de conversão. Você recebe relatórios detalhados com orientações para corrigir falhas imediatamente." 
  },
  { 
    question: "Como é feita a integração com o CRM?", 
    answer: "Nossa equipe configura todo o seu funil de vendas, cria alertas automáticos e organiza a jornada do paciente para que nenhum lead seja esquecido." 
  },
  { 
    question: "O tráfego pago garante agendamentos?", 
    answer: "O tráfego atrai leads qualificados. Combinado com nosso treinamento de secretárias, criamos o ecossistema perfeito para maximizar seus agendamentos reais." 
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Começa com a primeira aberta para dar volume

  return (
    <section className="bg-black py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Lado Esquerdo: Título e Call to Action */}
          <div className="lg:col-span-5">
            <div className="sticky top-10">
              <span className="text-[#e9d2a6] font-bold tracking-[0.2em] text-sm uppercase">FAQ</span>
              <h2 className="text-4xl md:text-5xl font-serif text-white mt-4 mb-6 leading-tight">
                Dúvidas <br /> Frequentes
              </h2>
              <p className="text-white/60 text-lg mb-8 max-w-sm">
                Tudo o que você precisa saber sobre como escalamos a operação da sua clínica.
              </p>
              
              <div className="hidden lg:block">
                <p className="text-white/40 text-sm mb-4 italic">Não encontrou sua resposta?</p>
                <button className="text-[#e9d2a6] font-semibold border-b border-[#e9d2a6] pb-1 hover:text-[#f3dfba] hover:border-[#f3dfba] transition-all">
                  Falar com um especialista →
                </button>
              </div>
            </div>
          </div>

          {/* Lado Direito: Acordeão */}
          <div className="lg:col-span-7 border-t border-white/10">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="border-b border-white/10">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between py-6 text-left group"
                  >
                    <span className={`text-lg md:text-xl font-medium transition-colors ${isOpen ? "text-[#e9d2a6]" : "text-white/80 group-hover:text-white"}`}>
                      {faq.question}
                    </span>
                    <div className={`ml-4 flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"}`}>
                      <Plus className="h-6 w-6 text-[#e9d2a6]" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 text-white/50 text-base leading-relaxed max-w-2xl">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
            
            {/* Botão para Mobile (aparece apenas em telas pequenas) */}
            <div className="lg:hidden mt-10 text-center">
                <button className="w-full bg-[#e9d2a6] py-4 rounded-xl font-bold text-black shadow-lg shadow-[#e9d2a6]/10">
                    Falar com um especialista
                </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}