"use client";

import Link from "next/link";

const trainingPlans = [
  {
    name: "Treinamento Premium Belmond",
    price: "R$ 1.594,00",
    priceLabel: "pagamento único",
    ctaText: "SEGUIR PARA PAGAMENTO",
    ctaLink: "/api/checkout-acompanhamento",
    accent: "#C6A75E",
    accentDark: "#8F6B2E",
  },
];

export function PricingSection() {
  return (
    <section
      id="planos"
      className="relative overflow-hidden pt-8 md:pt-10 pb-16 md:pb-24 px-4 md:px-8 bg-[#080808]"
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

        {/* Card único */}
        <div className="max-w-md md:max-w-xl mx-auto">
          {trainingPlans.map((plan) => (
            <div
              key={plan.name}
              className="
                relative
                rounded-3xl
                bg-white
                flex
                flex-col
                border-2
                shadow-[0_20px_60px_rgba(198,167,94,0.25)]
                transition-all
                duration-300
                hover:-translate-y-2
              "
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

              <div className="p-6 flex flex-col flex-1">
                {/* Title */}
                <h3
                  className="
                    text-center
                    text-2xl
                    md:text-[28px]
                    font-serif
                    font-semibold
                    tracking-tight
                    text-black
                  "
                >
                  {plan.name}
                </h3>

                <div
                  className="h-px my-4"
                  style={{
                    backgroundColor: `${plan.accent}60`,
                  }}
                />

                {/* Price */}
                <div className="text-center">
                  <div
                    className="text-5xl font-bold tracking-tight"
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

                {/* Button */}
                <Link
                  href={plan.ctaLink}
                  className="
                    mt-6
                    block
                    w-full
                    text-center
                    py-4
                    rounded-xl
                    font-semibold
                    text-sm
                    text-white
                    bg-gradient-to-r
                    from-[#5F451C]
                    via-[#8F6B2E]
                    to-[#B08A44]
                    shadow-lg
                    shadow-black/20
                    transition-all
                    duration-300
                    hover:scale-[1.02]
                    hover:shadow-xl
                  "
                >
                  {plan.ctaText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}