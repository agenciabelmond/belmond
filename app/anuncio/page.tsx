"use client";

import Script from "next/script";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      {/* Meta Pixel */}
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s){
            if(f.fbq)return;

            n=f.fbq=function(){
              n.callMethod
                ? n.callMethod.apply(n,arguments)
                : n.queue.push(arguments)
            };

            if(!f._fbq) f._fbq=n;

            n.push=n;
            n.loaded=true;
            n.version='2.0';
            n.queue=[];

            t=b.createElement(e);
            t.async=true;
            t.src=v;

            s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s);

          }(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');

          fbq('init', '2082969819016692');
          fbq('track', 'PageView');
        `}
      </Script>

      <main className="min-h-screen bg-black text-white flex flex-col selection:bg-yellow-500/20">
        {/* Header */}
        <header className="sticky top-0 z-20 w-full border-b border-zinc-900 bg-black/80 backdrop-blur-md">
          <div className="mx-auto flex max-w-7xl items-center justify-center px-6 py-5">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-belmond-BARrSRuUvIPN4xbQTXCUuSrY8fmTU2.png"
              alt="Belmond - Agência de Resultados"
              width={180}
              height={90}
              className="object-contain"
              priority
            />
          </div>
        </header>

        {/* Hero */}
        <section className="flex flex-1 items-center justify-center bg-gradient-to-b from-black to-zinc-950 px-6 py-20">
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  className="mx-auto max-w-4xl text-center"
>
  
<p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-[#d4af37] md:text-base"> O treinamento ideal para clínicas que querem evoluir. </p>
  <h1 className="mb-6 text-2xl font-bold leading-tight md:text-5xl">
  Clique no botão abaixo para prosseguir seu atendimento
</h1>

<p className="mx-auto max-w-2xl text-sm leading-relaxed text-zinc-400 md:text-lg">
  Um treinamento prático e direto para ajudar sua clínica a atrair mais
  pacientes, organizar processos e crescer com previsibilidade.
</p>

  <div className="mt-10">
    <a
      href="https://wa.me/+555391685956?text=Olá! Vim pelo site e gostaria de mais informações!"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        if (
          typeof window !== "undefined" &&
          (window as any).fbq
        ) {
          (window as any).fbq("track", "Contact");
        }
      }}
      className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#d4af37] to-[#c9a227] px-8 py-4 font-semibold text-black shadow-xl transition-all duration-300 hover:scale-105"
    >
      <FaWhatsapp className="h-5 w-5" />
      Falar com um especialista
    </a>
  </div>
</motion.div>
        </section>

        {/* Footer */}
        <footer className="border-t border-zinc-900 bg-black">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 md:flex-row">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-belmond-BARrSRuUvIPN4xbQTXCUuSrY8fmTU2.png"
              alt="Belmond"
              width={100}
              height={50}
              className="object-contain"
            />

            <p className="text-sm text-zinc-500">
              © {new Date().getFullYear()} Belmond. Todos os direitos reservados.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}