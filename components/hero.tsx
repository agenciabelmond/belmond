"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image" // Import Image component from Next.js

// Cores de Destaque
// Primária: #e9d2a6 (Original, manteve-se para o toque de 'ouro/cobre')
// Secundária/Neon: #00f9ff (Adicionado para o toque futurista/dinâmico)
// Fundo: #0a0f18 (Preto mais profundo/azulado)

export function Hero() {
  return (
    // NOVO Fundo Principal: Cor mais profunda e futurista
    <div className="min-h-screen bg-[#0a0f18] text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0f18]/90 backdrop-blur-sm shadow-md py-4 px-8 flex justify-between items-center border-b border-[#00f9ff]/20"> {/* Borda ajustada para a cor neon */}
        <div className="flex items-center">
          <Image src="/belmond-logo.webp" alt="Logo" width={200} height={0} className="mr-3" />
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-white hover:text-[#e9d2a6] transition-colors font-medium">Início</a> {/* Hover para cor neon */}
          <a href="#" className="text-white hover:text-[#e9d2a6] transition-colors font-medium">Serviços</a>
          <a href="#" className="text-white hover:text-[#e9d2a6] transition-colors font-medium">Cases</a>
          <a href="#" className="text-white hover:text-[#e9d2a6] transition-colors font-medium">Sobre</a>
        </nav>
        <Button
          size="lg"
          // NOVO: Adicionado um brilho sutil ao botão do Header
          className="bg-[#e9d2a6] text-black hover:bg-[#e9d2a6]/90 text-md px-6 py-3 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all [box-shadow:0_0_15px_rgba(233,210,166,0.5)] hover:[box-shadow:0_0_20px_rgba(233,210,166,0.8)]"
        >
          Agendar reunião
        </Button>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
        {/* Background image overlay suave */}
        <div className="absolute inset-0 bg-[url('/bg-clinic-dark.jpg')] bg-cover bg-center opacity-3"></div> {/* Opacidade reduzida para fundo mais escuro */}

        {/* Gradient + blobs (usando a cor neon para os blobs) */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f18] via-[#0a0f18]/80 to-[#0a0f18]">
          <div className="absolute inset-0 opacity-40"> {/* Opacidade aumentada para os blobs */}
            {/* Blobs agora com cor neon sutil */}
            <div className="absolute top-0 -left-4 w-96 h-96 bg-[#00f9ff]/10 rounded-full mix-blend-screen filter blur-3xl animate-blob" />
            <div className="absolute top-0 -right-4 w-96 h-96 bg-[#e9d2a6]/8 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000" /> {/* Um blob com a cor original */}
            <div className="absolute -bottom-8 left-20 w-96 h-96 bg-[#00f9ff]/15 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000" />
          </div>
        </div>

        {/* Grid (usando a cor neon sutil para as linhas) */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,249,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,249,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

        <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 max-w-7xl">
          {/* Left Column: Text and CTAs */}
          <div className="flex-1 text-center md:text-left space-y-8 md:pr-8">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-white text-balance"
              // NOVO: Adicionado um brilho sutil ao texto
              style={{ textShadow: '0 0 5px rgba(255,255,255,0.7), 0 0 10px rgba(255,255,255,0.3)' }}
            >
              Potencialize o crescimento da sua clínica com o <span 
                className="text-[#e9d2a6]" // Cor alterada para neon
                // NOVO: Brilho intenso para a palavra de destaque
             style={{ textShadow: '0 0 8px rgba(233,210,166,0.8), 0 0 20px rgba(233,210,166,0.5)' }}
              >
                PowerClinic
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto md:mx-0 leading-relaxed">
              Desbloqueie todo o potencial da sua clínica com a Belmond. Nesta jornada, nós o guiaremos através das estratégias digitais, mostrando o poder do marketing online para impulsionar a sua clínica a novos patamares.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
              {/* CTA PRINCIPAL (Brilho Neon Verde para a Ação Principal) */}
              <Button
                size="lg"
                // NOVO: Adicionado brilho neon ao botão principal
                className="bg-[#e9d2a6] text-white hover:bg-[#e9d2a6]/90 text-lg px-8 py-5 font-semibold rounded-lg shadow-2xl shadow-[#e9d2a6]/30 transition-all hover:scale-105 
[box-shadow:0_0_15px_#e9d2a6,0_0_30px_#e9d2a6] 
hover:[box-shadow:0_0_20px_#e9d2a6,0_0_40px_#e9d2a6]"
              >
                Agendar reunião
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              {/* CTA SECUNDÁRIO (Borda com efeito 'Eletricidade' Neon) */}
              <Button
                variant="outline"
                size="lg"
                // NOVO: Borda com efeito neon
                className="text-white border border-[#00f9ff]/50 hover:border-[#00f9ff] hover:text-[#000000] bg-transparent text-lg px-8 py-5 font-semibold rounded-lg transition-all [box-shadow:0_0_5px_rgba(0,249,255,0.2)] hover:[box-shadow:0_0_10px_rgba(0,249,255,0.8)]"
              >
                Entender como funciona
              </Button>
            </div>
          </div>

          {/* Right Column: Single Large Image */}
          <div className="flex-1 flex justify-center items-center p-4 rounded-xl relative w-full mx-auto md:max-w-none md:mx-0">
            
            {/* Container da Imagem Única com Dimensões Aumentadas */}
            <div className="relative w-full max-w-2xl h-[450px] md:h-[550px] rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500 ease-in-out border border-[#00f9ff]/20"> {/* Borda sutil neon */}
              <Image 
                src="inicio.png" 
                alt="Imagem Principal de Capa" 
                layout="fill" 
                objectFit="cover" 
                className="rounded-xl" 
              />
            </div>

            {/* Overlay sutil neon */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00f9ff]/5 to-transparent pointer-events-none rounded-xl"></div>
            
          </div>
        </div>
      </section>
    </div>
  )
}