import { Shield, MapPin, Sparkles } from "lucide-react";

export function ExclusivityBanner() {
  return (
    <section className="py-12 bg-[#080808] border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-full bg-[#F4D27A]/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">

            {/* Texto principal */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4D27A]/10 border border-[#F4D27A]/20 mb-4">
                <Shield className="w-3.5 h-3.5 text-[#F4D27A]" />
                <span className="text-[10px] uppercase tracking-widest font-bold text-[#F4D27A]">
                  Exclusividade
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
                Exclusividade na sua{" "}
                <span className="text-[#F4D27A]">região</span>
              </h2>

              <p className="text-zinc-400 text-sm md:text-base max-w-xl">
                Trabalhamos com contrato de exclusividade, garantindo que
                apenas uma clínica da sua região tenha acesso à nossa
                metodologia.
              </p>
            </div>

            {/* Divisor */}
            <div className="hidden md:block w-px h-24 bg-gradient-to-b from-transparent via-white/10 to-transparent" />

            {/* Cards */}
            <div className="flex-1 grid grid-cols-1 gap-4 w-full">

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#F4D27A]/30 transition-colors">
                <div className="mt-1 bg-[#F4D27A]/10 p-2 rounded-lg text-[#F4D27A]">
                  <MapPin className="w-5 h-5" />
                </div>

                <div>
                  <h3 className="text-white font-medium text-sm">
                    Uma clínica por região
                  </h3>
                  <p className="text-zinc-500 text-xs">
                    Sua exclusividade garantida em contrato.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#F4D27A]/30 transition-colors">
                <div className="mt-1 bg-[#F4D27A]/10 p-2 rounded-lg text-[#F4D27A]">
                  <Sparkles className="w-5 h-5" />
                </div>

                <div>
                  <h3 className="text-white font-medium text-sm">
                    Crescimento sob medida
                  </h3>
                  <p className="text-zinc-500 text-xs">
                    Estratégias pensadas para o momento da sua clínica.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}