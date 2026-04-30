import { Card } from "@/components/ui/card";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export function Services() {
  const services = [
    {
      tag: "Aquisição",
      title: "Previsibilidade de pacientes todos os dias",
      highlight: "Crescimento com controle e escala",
      description:
        "Estruturamos aquisição de pacientes com foco em consistência e previsibilidade, eliminando sazonalidade.",
      points: [
        "Geração contínua de demanda qualificada",
        "Otimização de custo por aquisição (CAC)",
        "Escala validada com performance real",
      ],
    },
    {
      tag: "Conversão",
      title: "Transforme atendimento em vendas",
      highlight: "Mais consultas sem aumentar tráfego",
      description:
        "Otimizamos o processo de atendimento para aumentar drasticamente a taxa de conversão de leads em consultas.",
      points: [
        "Scripts de atendimento de alta performance",
        "Redução de perdas no funil",
        "Aumento de comparecimento em consultas",
      ],
    },
    {
      tag: "Automação",
      title: "Operação inteligente e escalável",
      highlight: "Seu sistema trabalha por você",
      description:
        "Automatizamos follow-ups e qualificação de leads para manter sua operação fluindo 24/7.",
      points: [
        "Follow-up automático multicanal",
        "Integração com CRM e WhatsApp",
        "Qualificação inteligente de leads",
      ],
    },
  ];

  return (
    <section className="relative py-28 bg-gradient-to-b from-white via-neutral-50 to-white overflow-hidden">
      {/* background glow */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute -top-40 left-1/2 w-[600px] h-[600px] -translate-x-1/2 bg-[#e9d2a6] blur-[120px] rounded-full" />
      </div>

      <div className="relative container mx-auto px-6 max-w-6xl">
        {/* HEADER */}
        <div className="mb-20 text-center space-y-6">
          <span className="inline-flex items-center px-4 py-1 rounded-full bg-black/5 border border-black/10 text-[11px] tracking-[0.25em] uppercase font-semibold">
            Soluções Estratégicas
          </span>

          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-black leading-tight">
            Crescimento estruturado
            <span className="block text-neutral-400 italic font-serif">
              para clínicas modernas
            </span>
          </h2>

          <p className="text-neutral-500 max-w-2xl mx-auto text-lg">
            Criamos um ecossistema completo de aquisição, conversão e automação para gerar previsibilidade real de faturamento.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((s, i) => (
            <Card
              key={i}
              className="relative group p-8 rounded-[28px] border border-neutral-100 bg-white/70 backdrop-blur-xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* top accent line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#c5a87d] to-transparent opacity-0 group-hover:opacity-100 transition" />

              {/* header */}
              <div className="flex items-center justify-between mb-8">
                <span className="text-[11px] tracking-[0.2em] uppercase text-neutral-400 font-semibold">
                  {s.tag}
                </span>
                <div className="p-2 rounded-full bg-neutral-100 group-hover:bg-black group-hover:text-white transition">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* title */}
              <h3 className="text-xl font-semibold text-black mb-3">
                {s.title}
              </h3>

              <p className="text-sm font-medium text-[#b89a6a] mb-4">
                {s.highlight}
              </p>

              <p className="text-sm text-neutral-500 leading-relaxed mb-6">
                {s.description}
              </p>

              {/* points */}
              <ul className="space-y-3">
                {s.points.map((p, idx) => (
                  <li key={idx} className="flex gap-2 text-sm text-neutral-600">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-[#c5a87d]" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              {/* hover overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-b from-transparent to-black/5 pointer-events-none" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
