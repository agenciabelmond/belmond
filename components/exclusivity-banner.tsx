import { Shield, MapPin, Sparkles } from "lucide-react"

export function ExclusivityBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-accent/10 via-background to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Shield className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Exclusividade Garantida</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            Trabalhamos com <span className="text-accent">contrato de exclusividade</span> por região
          </h2>

          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Garantimos que você será o único cliente da sua região, sem concorrência direta. Cada estratégia é
            personalizada para o seu mercado e público-alvo.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="p-6 rounded-2xl bg-background/80 backdrop-blur border border-border">
              <MapPin className="w-8 h-8 text-accent mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Exclusividade Regional</h3>
              <p className="text-sm text-muted-foreground">Apenas uma clínica por região atendida</p>
            </div>

            <div className="p-6 rounded-2xl bg-background/80 backdrop-blur border border-border">
              <Sparkles className="w-8 h-8 text-accent mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Estratégia Personalizada</h3>
              <p className="text-sm text-muted-foreground">Planejamento único para seu mercado</p>
            </div>

            <div className="p-6 rounded-2xl bg-background/80 backdrop-blur border border-border">
              <Shield className="w-8 h-8 text-accent mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Proteção Contratual</h3>
              <p className="text-sm text-muted-foreground">Garantia de não concorrência direta</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
