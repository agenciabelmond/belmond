"use client";

import { PlanCard } from "@/components/plan-card";

const trainingPlan = {
  name: "Treinamento Premium Belmond",
  price: "R$1.197",
  priceLabel: "pagamento único",
  ctaText: "SEGUIR PARA PAGAMENTO",
  ctaLink: "/api/checkout",
  highlighted: true,
  badge: "EXCLUSIVO",
};

export function PricingSection() {
  return (
    <section
      id="planos"
      className="w-full py-8 md:py-12 px-4 md:px-8 relative overflow-hidden"
    >
      {/* BACKGROUND SEM FRAMER MOTION */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-24 left-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-24 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* HEADER SEM MOTION */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-medium mb-4 tracking-tight text-white">
            Treinamento Comercial para{" "}
            <span className="text-primary font-semibold">
              Clínicas Odontológicas
            </span>
          </h2>

          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Um treinamento completo, direto ao ponto e focado em resultados reais.
          </p>
        </div>

        {/* PLANO */}
  <div className="flex justify-center mt-6 md:mt-10">

          <PlanCard {...trainingPlan} />

        </div>
      </div>
    </section>
  );
}