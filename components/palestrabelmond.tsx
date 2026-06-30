"use client";

import { useState } from "react";

export function Cadastro() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [loading, setLoading] = useState(false);

  const accent = "#C6A75E";

  function formatarTelefone(valor: string) {
    const numeros = valor.replace(/\D/g, "").slice(0, 11);

    if (numeros.length <= 2) return numeros;

    if (numeros.length <= 7) {
      return `(${numeros.slice(0, 2)}) ${numeros.slice(2)}`;
    }

    return `(${numeros.slice(0, 2)}) ${numeros.slice(
      2,
      7
    )}-${numeros.slice(7)}`;
  }

  async function handleSubmit(e?: React.FormEvent) {
    if (e) e.preventDefault();

    if (!nome.trim()) {
      alert("O campo Nome é obrigatório.");
      return;
    }

    const telefoneNumeros = telefone.replace(/\D/g, "");

    if (!telefoneNumeros) {
      alert("O campo WhatsApp é obrigatório.");
      return;
    }

    if (telefoneNumeros.length !== 11) {
      alert("Informe um WhatsApp válido com DDD + 9 dígitos.");
      return;
    }

    setLoading(true);

    try {
      const formData = new URLSearchParams();
      formData.append("nome", nome);
      formData.append("telefone", telefoneNumeros);

      await fetch(
        "https://script.google.com/macros/s/AKfycbzmLd2Y_KJSfB4aW3Vkkq6KUuHHd1tT0aeSKLkswZkG_UV-zmYH_7YRtnPLbfP85c4S/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      window.location.href =
        "https://pay.hotmart.com/V106378842K?off=xm16isk0&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGnxTAAGfGiOlXqcnl65ZM1BkpLV3KcvHT3HiicH9_PjAsIS9ktrq3OBmQOHEo_aem_kULVWn_bf2NsI43n8B2ENg&bid=1782821923307";
    } catch (e) {
      alert("Erro ao enviar os dados. Verifique o Apps Script.");
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="planos"
      className="relative overflow-hidden pt-8 md:pt-10 pb-16 md:pb-24 px-4 md:px-8 bg-[#080808]"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(ellipse_at_top_left,rgba(198,167,94,0.08),transparent_50%)]" />
        <div className="absolute right-0 bottom-0 h-full w-full bg-[radial-gradient(ellipse_at_bottom_right,rgba(143,107,46,0.08),transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold text-[#C6A75E] leading-tight">
            Palestra Método PowerClinic Presencial
          </h2>

          <p className="mt-6 text-xl md:text-2xl font-semibold text-white uppercase tracking-wide">
            CADASTRE-SE PARA GARANTIR A SUA VAGA
          </p>

          <div className="flex justify-center mt-5">
            <span className="animate-bounce text-[#C6A75E] text-6xl">
              ↓
            </span>
          </div>
        </div>

        <div className="max-w-md md:max-w-xl mx-auto">
          <div
            className="relative rounded-3xl bg-white flex flex-col border-2 shadow-[0_20px_60px_rgba(198,167,94,0.25)]"
            style={{ borderColor: accent }}
          >
            <div
              className="h-2 rounded-t-3xl"
              style={{ backgroundColor: accent }}
            />

            <form onSubmit={handleSubmit} className="p-6">
              <div
                className="h-px mb-6"
                style={{ backgroundColor: `${accent}60` }}
              />

              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Seu nome *"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none focus:border-[#C6A75E]"
                />

                <input
                  type="tel"
                  placeholder="WhatsApp (11) 91234-5678 *"
                  value={telefone}
                  onChange={(e) =>
                    setTelefone(formatarTelefone(e.target.value))
                  }
                  className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none focus:border-[#C6A75E]"
                  maxLength={15}
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-[#5F451C] via-[#8F6B2E] to-[#B08A44] transition hover:scale-[1.02] disabled:opacity-60"
                >
                  {loading ? "Enviando..." : "CONTINUAR INSCRIÇÃO"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}