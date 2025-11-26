// Updated RevenueCycleSection component with text added beside the circle.
"use client";

import { useState, useEffect } from "react";
import { Handshake, MessageCircle, LineChart, Repeat } from "lucide-react";

const cycleSteps = [
  {
    id: "acquisition",
    label: "Captação",
    title: "Adquirir audiência qualificada",
    description:
      "Atraímos pessoas alinhadas ao seu negócio, aumentando a qualidade dos leads e reduzindo desperdício de mídia.",
    position: "top-0 left-1/2 -translate-x-1/2",
    icon: Handshake,
    angle: 0,
  },
  {
    id: "engagement",
    label: "Conexão",
    title: "Construir confiança e interesse",
    description:
      "Criamos jornadas de conteúdo que educam, nutrem e aproximam sua marca do público.",
    position: "top-1/2 right-0 -translate-y-1/2",
    icon: MessageCircle,
    angle: 90,
  },
  {
    id: "monetization",
    label: "Conversão",
    title: "Realizar mais vendas de maior qualidade",
    description:
      "Estruturamos ofertas e funis para transformar atenção em faturamento previsível.",
    position: "bottom-0 left-1/2 -translate-x-1/2",
    icon: LineChart,
    angle: 180,
  },
  {
    id: "retention",
    label: "Retenção",
    title: "Manutenção da base ativa",
    description:
      "Atuamos no pós-venda, fidelização e upsell para aumentar o valor de cada cliente.",
    position: "top-1/2 left-0 -translate-y-1/2",
    icon: Repeat,
    angle: 270,
  },
];

export default function RevenueCycleSection() {
  const [activeStep, setActiveStep] = useState<string | null>(null);
  const [autoIndex, setAutoIndex] = useState(0);

  useEffect(() => {
    // só roda o autoplay quando nenhum step está ativo (hover)
    if (!activeStep) {
      const interval = setInterval(() => {
        setAutoIndex((prev) => (prev + 1) % cycleSteps.length);
      }, 3000);
      return () => clearInterval(interval);
    }
    // se houver activeStep, limpa qualquer intervalo anterior
    return;
  }, [activeStep]);

  // índice atualmente ativo (override quando hover)
  const activeIndex = activeStep
    ? cycleSteps.findIndex((s) => s.id === activeStep)
    : autoIndex;

  // SVG: usamos viewBox 0 0 100 100 e r = 45 (pixels virtuais do viewBox)
  const radius = 45; // r em coord. do viewBox
  const circumference = 2 * Math.PI * radius;
  // progress queremos mostrar até o passo atual.
  // aqui eu escolhi mostrar 1/N por passo completo até o index atual (0 => 0, 1 => 1/4, ...)
  const progress = (activeIndex / cycleSteps.length) * circumference;
  const dashOffset = circumference - progress;

  return (
    <section className="bg-white py-20 text-slate-900">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 lg:flex-row lg:items-center">
        {/* ==================== LADO ESQUERDO — CÍRCULO ==================== */}
        <div className="flex w-full justify-center lg:w-1/2">
          <div className="relative w-full max-w-md">
            <div className="relative mx-auto aspect-square w-full rounded-full border-2 border-slate-200 shadow-lg transition-all duration-700 hover:scale-105 hover:border-[#e9d2a6] hover:shadow-xl">
              <div className="pointer-events-none absolute inset-4 animate-spin-slow rounded-full border border-dashed border-[#e9d2a6]/30" />
              <div className="pointer-events-none absolute inset-8 animate-spin-reverse rounded-full border border-dashed border-slate-300/40" />
              <div className="pointer-events-none absolute inset-12 animate-spin-slower rounded-full border-2 border-dotted border-[#e9d2a6]/20" />

              <div className="pointer-events-none absolute inset-0 animate-pulse-glow rounded-full bg-gradient-to-br from-[#e9d2a6]/5 via-transparent to-slate-500/5" />

              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="pointer-events-none absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 animate-orbit rounded-full shadow-sm"
                  style={{
                    backgroundColor: "#e9d2a6",
                    boxShadow: "0 0 4px rgba(233, 210, 166, 0.5)",
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: "4s",
                  }}
                />
              ))}

              {/* SVG com viewBox estável */}
              <svg
                className="pointer-events-none absolute inset-0 h-full w-full -rotate-90"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid meet"
                aria-hidden
              >
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#e9d2a6" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#e9d2a6" stopOpacity="0.3" />
                  </linearGradient>
                </defs>

                {/* background track (opcional) */}
                <circle
                  cx="50"
                  cy="50"
                  r={radius}
                  fill="none"
                  stroke="rgba(15,23,42,0.04)"
                  strokeWidth="3"
                />

                {/* progress stroke */}
                <circle
                  cx="50"
                  cy="50"
                  r={radius}
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="3"
                  strokeDasharray={circumference}
                  strokeDashoffset={dashOffset}
                  strokeLinecap="round"
                  className="transition-[stroke-dashoffset] duration-700 ease-in-out"
                />
              </svg>

              <div className="absolute left-1/2 top-1/2 z-10 flex w-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4 py-3 text-center text-white shadow-xl ring-2 ring-slate-700/50 sm:w-40">
                <p className="animate-pulse text-xs uppercase tracking-[0.12em] text-slate-400">Método</p>
                <p className="text-sm font-bold sm:text-base">PowerClinic</p>
                <div className="mt-1 flex gap-1">
                  {cycleSteps.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1 w-1 rounded-full transition-all duration-300 ${i === autoIndex ? "w-3" : "bg-slate-600"}`}
                      style={i === autoIndex ? { backgroundColor: "#e9d2a6" } : {}}
                    />
                  ))}
                </div>
              </div>

              {cycleSteps.map((step, index) => {
                const isActive = activeStep === step.id || (!activeStep && index === autoIndex);
                const Icon = step.icon;
                return (
                  <div
                    key={step.id}
                    className={`absolute ${step.position} flex max-w-[120px] cursor-pointer flex-col items-center text-center transition-all duration-500 sm:max-w-[140px]`}
                    style={{ animation: `fadeInScale 0.6s ease-out ${index * 0.15}s backwards` }}
                    onMouseEnter={() => setActiveStep(step.id)}
                    onMouseLeave={() => setActiveStep(null)}
                  >
                    {isActive && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div
                          className="h-16 w-16 animate-ping rounded-full sm:h-20 sm:w-20"
                          style={{ backgroundColor: "rgba(233, 210, 166, 0.3)" }}
                        />
                      </div>
                    )}

                    <div
                      className={`relative z-10 mb-2 flex h-10 w-10 items-center justify-center rounded-full shadow-lg transition-all duration-500 sm:h-12 sm:w-12 ${
                        isActive ? "scale-125 ring-4" : "scale-100 bg-gradient-to-br from-[#e9d2a6]/20 to-white hover:scale-110 hover:shadow-xl"
                      }`}
                      style={
                        isActive
                          ? {
                              background: "linear-gradient(to bottom right, #e9d2a6, #d4bb8a)",
                              boxShadow: "0 10px 25px rgba(233, 210, 166, 0.5)",
                              // ringColor não é uma propriedade inline suportada em CSS padrão;
                              // o efeito visual vem da classe "ring-4" combinada com tailwind.
                            }
                          : {}
                      }
                    >
                      <Icon
                        className={`h-5 w-5 transition-all duration-500 ${isActive ? "scale-110 text-white" : ""}`}
                        style={!isActive ? { color: "#e9d2a6" } : {}}
                      />
                    </div>

                    <p
                      className={`text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-500 ${isActive ? "scale-105" : "text-slate-500"}`}
                      style={isActive ? { color: "#e9d2a6" } : {}}
                    >
                      {step.label}
                    </p>

                    {isActive && (
                      <div
                        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-0.5 w-20 -translate-y-1/2 animate-pulse sm:w-28"
                        style={{
                          background: "linear-gradient(to right, rgba(233, 210, 166, 0.5), transparent)",
                          transform: `rotate(${step.angle + 180}deg)`,
                          transformOrigin: "left center",
                        }}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ==================== LADO DIREITO — TEXTO INSERIDO ==================== */}
        <div className="lg:w-1/2 flex flex-col gap-6">
          <h2 className="text-lg font-extrabold text-[#e9d2a6] leading-tight -mt-10">
            O MÉTODO QUE AUMENTA SEU FLUXO DE PACIENTES
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Enquanto uma agência executa ações gerais, nossa assessoria trabalha de forma estratégica, analisando dados, ajustando campanhas e otimizando cada etapa para gerar mais pacientes qualificados.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Aplicamos também técnicas de SEO para odontologia, garantindo que sua clínica seja encontrada por pessoas que já estão buscando tratamentos como implantes, ortodontia e harmonização. Assim, você não depende apenas de anúncios e conquista resultados mais consistentes.
          </p>
          <p className="text-slate-700 leading-relaxed font-semibold">
            Com uma assessoria especializada, sua clínica investe melhor, atrai mais pacientes e cresce de forma previsível.
          </p>
        </div>
      </div>
    </section>
  );
}
