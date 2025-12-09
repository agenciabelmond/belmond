import { Shield, MapPin, Sparkles } from "lucide-react";

export function ExclusivityBanner() {
  return (
    <section className="pt-8 pb-16 bg-black relative overflow-hidden">


      {/* Fundo com grid dourado (mesmo estilo do outro componente) */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(#e9d2a6 1px, transparent 1px),
            linear-gradient(90deg, #e9d2a6 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F4D27A]/10 border border-[#F4D27A] mb-6">
            <Shield className="w-4 h-4 text-[#F4D27A]" />
            <span className="text-sm font-medium text-white">Exclusividade Garantida</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Trabalhamos com <span className="text-[#F4D27A]">contrato de exclusividade</span> por região
          </h2>

          <p className="text-xl text-white/80 mb-8">
            Garantimos que você será o único cliente da sua região, sem concorrência direta.
            Cada estratégia é personalizada para o seu mercado e público-alvo.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">

            <div className="p-6 rounded-2xl bg-black border border-[#F4D27A] shadow-[0_4px_20px_rgba(244,210,122,0.35)]">
              <MapPin className="w-8 h-8 text-[#F4D27A] mb-4 mx-auto" />
              <h3 className="font-semibold mb-2 text-white">Exclusividade Regional</h3>
              <p className="text-sm text-white/70">Apenas uma clínica por região atendida</p>
            </div>

            <div className="p-6 rounded-2xl bg-black border border-[#F4D27A] shadow-[0_4px_20px_rgba(244,210,122,0.35)]">
              <Sparkles className="w-8 h-8 text-[#F4D27A] mb-4 mx-auto" />
              <h3 className="font-semibold mb-2 text-white">Estratégia Personalizada</h3>
              <p className="text-sm text-white/70">Planejamento único para seu mercado</p>
            </div>

            <div className="p-6 rounded-2xl bg-black border border-[#F4D27A] shadow-[0_4px_20px_rgba(244,210,122,0.35)]">
              <Shield className="w-8 h-8 text-[#F4D27A] mb-4 mx-auto" />
              <h3 className="font-semibold mb-2 text-white">Proteção Contratual</h3>
              <p className="text-sm text-white/70">Garantia de não concorrência direta</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
