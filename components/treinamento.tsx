"use client";

import { Crown, Users, Store } from "lucide-react";
import Link from "next/link";

const trainingPlans = [
  {
    icon: Users,
    name: "Treinamento Premium Belmond + Acompanhamento",
    price: "R$ 1.197",
    priceLabel: "pagamento único",
    ctaText: "Seguir para pagamento",
    ctaLink: "/api/checkout",
    accent: "#F0DFA8",
    accentDark: "#C6A75E",
    features: [
      "Conexão com 1 número",
      "3 horas de treinamento ao vivo",
      "Suporte especializado por 15 dias",
      "Acompanhamento do atendimento",
      "Scripts validados",
      "Materiais exclusivos",
    ],
  },
  {
    icon: Crown,
    name: "Treinamento Premium Belmond",
    price: "R$ 1.594",
    priceLabel: "pagamento único",
    ctaText: "Seguir para pagamento",
    ctaLink: "/api/checkout-acompanhamento",
    accent: "#C6A75E",
    accentDark: "#8F6B2E",
    highlighted: true,
    badge: "MAIS ESCOLHIDO",
    features: [
      "Conexão com 2 números",
      "3 horas de treinamento ao vivo",
      "Suporte especializado por 15 dias",
      "Acompanhamento do atendimento",
      "Scripts validados",
      "Materiais exclusivos",
    ],
  },
  {
    icon: Store,
    name: "Treinamento Premium Belmond + Google Meu Negócio",
    price: "R$ 2.197",
    priceLabel: "pagamento único",
    ctaText: "Seguir para pagamento",
    ctaLink: "/api/checkout-google",
    accent: "#8F6B2E",
    accentDark: "#6F5121",
    features: [
      "Conexão com 2 números",
      "3 horas de treinamento ao vivo",
      "Suporte especializado por 15 dias",
      "Acompanhamento do atendimento",
      "Scripts validados",
      "Materiais exclusivos",
      "Gerenciamento Google Meu Negócio",
      "Manual de manutenção Google Meu Negócio",
      "Avaliação completa Google Meu Negócio",
    ],
  },
];

export function PricingSection() {
  return (
    <section
      id="planos"
      className="relative overflow-hidden py-8 md:py-10 px-4 md:px-8 bg-[#080808]"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(ellipse_at_top_left,rgba(198,167,94,0.08),transparent_50%)]" />
        <div className="absolute right-0 bottom-0 h-full w-full bg-[radial-gradient(ellipse_at_bottom_right,rgba(143,107,46,0.08),transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-4xl font-semibold text-white mb-3 leading-snug">
            Treinamento Comercial para{" "}
            <span className="text-[#C6A75E]">
              Clínicas Odontológicas
            </span>
          </h2>

          <p className="text-zinc-400 text-sm max-w-xl mx-auto md:mb-4">
            Um treinamento completo, direto ao ponto e focado em resultados
            reais.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {trainingPlans.map((plan) => {
            const Icon = plan.icon;

            return (
              <div
                key={plan.name}
                className={`
                  relative
                  rounded-3xl
                  bg-white
                  flex
                  flex-col
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  ${
                    plan.highlighted
                      ? "scale-105 shadow-[0_20px_60px_rgba(198,167,94,0.25)] border-2"
                      : "border"
                  }
                `}
                style={{
                  borderColor: plan.accent,
                }}
              >
                {/* Top Accent */}
                <div
                  className="h-2 rounded-t-3xl"
                  style={{
                    backgroundColor: plan.accent,
                  }}
                />

                {/* Badge */}
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <div className="bg-[#8F6B2E] text-white text-[10px] font-bold tracking-[0.15em] px-4 py-1.5 rounded-full">
                      ★ {plan.badge}
                    </div>
                  </div>
                )}

                <div className="p-6 flex flex-col flex-1">
                  {/* Icon */}
                  <div className="flex justify-center mb-3">
                    <div
                      className="w-12 h-12 rounded-full border flex items-center justify-center"
                      style={{
                        borderColor: plan.accent,
                      }}
                    >
                      <Icon
                        size={20}
                        style={{
                          color: plan.accentDark,
                        }}
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-center text-base font-semibold text-[#111] leading-snug min-h-[44px]">
                    {plan.name}
                  </h3>

                  <div
                    className="h-px my-3"
                    style={{
                      backgroundColor: `${plan.accent}60`,
                    }}
                  />

                  {/* Price */}
                  <div className="text-center">
                    <div
                      className="text-4xl font-bold tracking-tight"
                      style={{
                        color: plan.accentDark,
                      }}
                    >
                      {plan.price}
                    </div>

                    <div className="text-xs text-zinc-500 mt-1">
                      {plan.priceLabel}
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="mt-4 space-y-2.5 flex-1">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2.5 text-sm text-zinc-700"
                      >
                        <div
                          className="w-4 h-4 rounded-full border flex items-center justify-center text-[9px] shrink-0"
                          style={{
                            borderColor: plan.accentDark,
                            color: plan.accentDark,
                          }}
                        >
                          ✓
                        </div>

                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Button */}
                  <Link
                    href={plan.ctaLink}
                    className="mt-5 block w-full text-center py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-[1.02]"
                    style={{
                      backgroundColor: plan.accentDark,
                      color: "#FFFFFF",
                    }}
                  >
                    {plan.ctaText}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}