import { useEffect } from "react";
import heroBg from "@/assets/hero-bg.webp";
import heroBgMobile from "@/assets/hero-bg-mobile.webp";
import logoContadorDigitalElite from "@/assets/logo-contador-digital-elite.webp";

const WHATSAPP_URL = "https://chat.whatsapp.com/HsiQwgvlJJN6rNz4fe6J9b";

export default function Obrigado() {
  useEffect(() => {
    document.title = "Obrigado — Imersão Contador Digital de Elite";
  }, []);

  return (
    <main className="min-h-screen">
      <div className="gold-pulse w-full bg-[var(--gold)] py-2 text-center text-xs font-bold uppercase tracking-[0.2em] text-[var(--primary-foreground)]">
        Imersão online e ao vivo — 13 de junho
      </div>

      <section
        className="hero-section relative overflow-hidden bg-[var(--background)] px-6 pt-10 md:pt-24"
        style={{
          "--hero-bg-mobile": `url(${heroBgMobile})`,
          "--hero-bg-desktop": `url(${heroBg})`,
        } as Record<string, string>}
      >
        <div className="mx-auto w-full max-w-6xl">
          <div className="lg:w-1/2">
            <img src={logoContadorDigitalElite} alt="Imersão Contador Digital de Elite" className="mb-6 h-auto w-48 md:w-60" loading="eager" />

            <div className="mb-8">
              <div className="mb-2 flex items-center justify-between text-xs font-bold uppercase tracking-[0.2em] text-[var(--gold)]">
                <span>98% concluído</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-white/10" role="progressbar" aria-valuenow={98} aria-valuemin={0} aria-valuemax={100} aria-label="Progresso da inscrição">
                <div className="h-full rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--gold-soft)]" style={{ width: "98%" }} />
              </div>
            </div>

            <h1 className="text-balance text-2xl leading-[1.12] md:text-3xl lg:text-[2.35rem]">
              Sua inscrição está <span className="gold-text">quase confirmada…</span>
            </h1>

            <p className="mt-6 max-w-xl text-pretty text-sm leading-relaxed text-white/80 md:text-xl">
              Falta apenas um último passo para garantir seu acesso à Imersão <strong className="text-white">[CONTADOR DIGITAL DE ELITE]</strong>!
            </p>

            <p className="mt-6 max-w-xl text-pretty text-sm font-bold uppercase tracking-wide leading-relaxed text-white md:text-base">
              Para concluir sua confirmação, você precisa entrar no grupo exclusivo de participantes no WhatsApp.
            </p>

            <div className="mt-6 max-w-xl text-pretty text-sm leading-relaxed text-white/80 md:text-base">
              <p>É por lá que você vai receber:</p>
              <ul className="mt-4 space-y-2">
                {[
                  "o link oficial da aula ao vivo",
                  "os avisos importantes antes do evento",
                  "orientações para aproveitar a Imersão ao máximo",
                  "todos os materiais complementares",
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--gold)]" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-col items-start gap-4">
              <a href={WHATSAPP_URL} className="btn-gold">Entrar no grupo</a>
            </div>

            <div className="mt-8 rounded-xl border border-[var(--gold)]/40 bg-[var(--gold)]/5 p-5 pb-10 md:p-6">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--gold)]">⚠️ Importante</p>
              <p className="mt-3 text-sm leading-relaxed text-white/85 md:text-base">O acesso à sala onde a Imersão acontecerá será enviado exclusivamente pelo grupo.</p>
              <p className="mt-3 text-sm leading-relaxed text-white/85 md:text-base">Os participantes que não estiverem no grupo podem não conseguir acessar a aula ao vivo.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
