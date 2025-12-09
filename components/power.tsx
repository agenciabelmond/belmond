"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import { Instagram, Facebook } from "lucide-react";

export default function App() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <section className="pt-12 pb-20 px-6 bg-black relative overflow-hidden">


        {/* Quadriculado dourado suave */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(#e9d2a6 1px, transparent 1px),
              linear-gradient(90deg, #e9d2a6 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Conteúdo esquerdo */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <span
                  className="text-sm font-semibold tracking-wide uppercase"
                  style={{ color: "#e9d2a6" }}
                >
                  Marketing Digital de Excelência
                </span>
              </div>

              {/* Título Montserrat */}
            <h1
              className="text-2xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Impulsione os Resultados da Sua Clínica
            </h1>

              <p className="text-white text-lg mb-6 leading-relaxed">
                Na Belmond, ajudamos clínicas a crescer de forma consistente e lucrativa. Unimos criatividade, dados e estratégias inteligentes para atrair mais pacientes e aumentar seu faturamento.
              </p>

              <p className="text-white text-lg mb-6 leading-relaxed">
                Nossa abordagem combina design profissional, comunicação persuasiva e campanhas direcionadas, garantindo resultados reais e acelerando o sucesso da sua clínica.
              </p>

              {/* Ícones */}
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="w-12 h-12 rounded-lg bg-zinc-900 border flex items-center justify-center transition-all group"
                  style={{ borderColor: "#e9d2a6" }}
                >
                  <Instagram
                    className="w-5 h-5 group-hover:scale-110 transition-transform"
                    style={{ color: "#e9d2a6" }}
                  />
                </a>

                <a
                  href="#"
                  className="w-12 h-12 rounded-lg bg-zinc-900 border flex items-center justify-center transition-all group"
                  style={{ borderColor: "#e9d2a6" }}
                >
                  <Facebook
                    className="w-5 h-5 group-hover:scale-110 transition-transform"
                    style={{ color: "#e9d2a6" }}
                  />
                </a>
              </div>
            </motion.div>

            {/* Vídeo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div
                className="relative rounded-2xl overflow-hidden border"
                style={{
                  borderColor: "#e9d2a6",
                  boxShadow: "0 0 30px #e9d2a680",
                }}
              >
                <div className="aspect-video bg-black flex items-center justify-center">
                  <video
                    className="w-full h-full object-cover"
                    src="/videoplayback.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                  />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
