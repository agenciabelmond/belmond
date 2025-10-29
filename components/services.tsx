'use client'
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"
import { motion } from "framer-motion"

export function Services() {
  const services = [
    {
      title: "Tráfego Pago Especializado",
      features: [
        "Campanhas no Google Ads e Meta Ads",
        "Segmentação geográfica precisa",
        "Otimização de custo por lead",
        "Remarketing estratégico",
        "Relatórios detalhados semanais",
      ],
    },
    {
      title: "Monitoramento de Atendimento",
      features: [
        "Análise de qualidade das ligações",
        "Treinamento da equipe de recepção",
        "Scripts de atendimento otimizados",
        "Métricas de conversão em tempo real",
        "Feedback contínuo para melhoria",
      ],
    },
  ]

  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Nossos Serviços
          </h2>
          <p className="text-xl text-primary/70 leading-relaxed">
            Tudo que sua clínica precisa para crescer de forma consistente e previsível
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="p-10 space-y-6 bg-white border-2 border-accent/20 hover:border-accent/40 hover:shadow-xl hover:scale-105 transition-all duration-300">
                <h3 className="text-2xl font-bold text-primary">{service.title}</h3>
                <ul className="space-y-4">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                    >
                      <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-accent" />
                      </div>
                      <span className="text-primary/80 leading-relaxed font-medium">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
