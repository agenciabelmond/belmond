import { Shield, MapPin, Sparkles } from "lucide-react";

export function ExclusivityBanner() {
  return (
    <section className="pt-8 pb-16 bg-black relative overflow-hidden">

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F4D27A]/10 border border-[#F4D27A] mb-6">
            <Shield className="w-4 h-4 text-[#F4D27A]" />
            <span className="text-sm font-medium text-white">Exclusividade Garantida</span>
          </div>

        <h2 className="text-4xl md:text-5xl font-serif mb-6 text-white">
        Trabalhamos com <span className="text-[#F4D27A]">contrato de exclusividade</span> por região e especialidade
        </h2>


          <p className="text-xl text-white/80 mb-8">
            Garantimos exclusividade por região e especialidade, evitando concorrência direta entre clínicas do mesmo segmento. 
            Cada estratégia é desenhada de forma personalizada para o seu mercado, especialidade e perfil de público.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">

            <div className="p-6 rounded-2xl bg-black border border-[#F4D27A] shadow-[0_4px_20px_rgba(244,210,122,0.35)]">
              <MapPin className="w-8 h-8 text-[#F4D27A] mb-4 mx-auto" />
              <h3 className="font-semibold mb-2 text-white">Exclusividade por Região e Especialidade </h3>
              <p className="text-sm text-white/70">Atendemos apenas uma clínica por região e especialidade</p>
            </div>

            <div className="p-6 rounded-2xl bg-black border border-[#F4D27A] shadow-[0_4px_20px_rgba(244,210,122,0.35)]">
              <Sparkles className="w-8 h-8 text-[#F4D27A] mb-4 mx-auto" />
              <h3 className="font-semibold mb-2 text-white">Estratégia Personalizada</h3>
              <p className="text-sm text-white/70">Planejamento exclusivo especialmente para sua unidade</p>
            </div>

            <div className="p-6 rounded-2xl bg-black border border-[#F4D27A] shadow-[0_4px_20px_rgba(244,210,122,0.35)]">
              <Shield className="w-8 h-8 text-[#F4D27A] mb-4 mx-auto" />
              <h3 className="font-semibold mb-2 text-white">Proteção Contratual</h3>
              <p className="text-sm text-white/70">Exclusividade assegurada para sua clínica na mesma especialidade*</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
