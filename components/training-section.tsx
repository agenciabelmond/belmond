"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "Como funciona o treinamento online para secretárias?",
    answer:
      "O treinamento da Belmond é realizado de forma totalmente online, com aulas práticas, scripts prontos, simulações de atendimento e acompanhamento semanal. O objetivo é padronizar a comunicação, aumentar a taxa de agendamentos e melhorar a experiência do paciente desde o primeiro contato.",
  },
  {
    question: "O que está incluído no monitoramento das secretárias?",
    answer:
      "Monitoramos diariamente o desempenho da equipe: tempo de resposta, taxa de conversão, follow-up, qualidade das mensagens e aderência aos scripts. Após a análise, entregamos relatatórios e orientações específicas para corrigir falhas e aprimorar o atendimento.",
  },
  {
    question: "Como funciona a integração da clínica com CRM?",
    answer:
      "Configuramos o CRM da clínica, criamos as etapas do funil, definimos alertas automáticos, organizamos fichas de pacientes e implementamos jornadas de follow-up. Isso garante controle dos leads, redução de perdas e aumento da taxa de fechamento.",
  },
  {
    question: "De que forma o tráfego pago ajuda a aumentar os agendamentos?",
    answer:
      "Criamos campanhas de tráfego pago altamente segmentadas no Facebook/Instagram e Google Ads, focadas em captar leads qualificados para a clínica. Analisamos diariamente os resultados e otimizamos as campanhas para garantir o menor custo por lead com o maior volume possível.",
  },

];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-black py-12 px-4 md:py-16">
      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <div className="mb-10 md:mb-12">
          <div className="mb-3 inline-block border-l-4 border-[#e9d2a6] pl-4">
            <span className="text-sm font-medium uppercase tracking-wider text-[#e9d2a6]">
              FAQ
            </span>
          </div>
         <h2 className="text-5xl md:text-5xl font-serif text-white">
          Perguntas Frequentes
        </h2>

          <p className="mt-3 text-lg leading-relaxed text-white/70">
            Encontre respostas sobre como funciona nosso treinamento, monitoramento e gestão de performance para clínicas.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="group border-b border-white/10 transition-colors hover:border-[#e9d2a6]"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="flex w-full items-start justify-between gap-4 py-4 text-left"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-semibold text-white md:text-xl">
                  {faq.question}
                </span>
                <Plus
                  className={`mt-1 h-6 w-6 flex-shrink-0 text-[#e9d2a6] transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "grid-rows-[1fr] pb-3 opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-pretty pr-8 leading-relaxed text-white/80">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}

        <div className="mt-10 flex justify-center">
          <div
            className="w-full max-w-3xl rounded-2xl bg-white p-6 md:p-8 
                      border border-[#e9d2a6]/30 
                      shadow-[0_0_35px_6px_rgba(233,210,166,0.45)]"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-black md:text-3xl">
                Ainda tem dúvidas?
              </h3>
              <p className="mt-3 text-black/70">
                Nossa equipe está pronta para ajudar você a transformar o atendimento e a performance da sua clínica.
              </p>

              <button
                className="
                  mt-6 rounded-full 
                  bg-[#e9d2a6] 
                  px-10 py-3 
                  font-semibold text-black 
                  transition-all
                  hover:bg-[#f0dcb4]
                  hover:shadow-[0_0_20px_4px_rgba(233,210,166,0.55)]
                  active:scale-[0.98]
                "
              >
                Fale com um especialista
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
