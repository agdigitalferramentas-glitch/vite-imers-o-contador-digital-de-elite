import { useEffect } from "react";
import HomeMarquee from "@/components/HomeMarquee";
import heroAnderson from "@/assets/hero-anderson.webp";
import heroAndersonMobile from "@/assets/hero-anderson-mobile.webp";
import logoContadorDigitalElite from "@/assets/logo-contador-digital-elite-azul.webp";

const WHATSAPP_URL = "https://site.agsell.com.br/r/icde-1026-grupos";

export default function Obrigado() {
  useEffect(() => {
    document.title = "Obrigado — Imersão Contador Digital de Elite";

    // AGMetrics - Página de Obrigado
    // Dispara o evento de conversão quando a página carregar
    // (seguro mesmo se o pixel falhar ao carregar)
    const fireThankYou = () => {
      (window as any).AGMetrics?.track("thank_you_page", {
        page: window.location.pathname,
        referrer: document.referrer,
      });
    };

    if ((window as any).AGMetrics) {
      fireThankYou();
    } else {
      // Aguarda o pixel global carregar
      const interval = setInterval(() => {
        if ((window as any).AGMetrics) {
          fireThankYou();
          clearInterval(interval);
        }
      }, 200);
      const timeout = setTimeout(() => clearInterval(interval), 10000);
      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }
  }, []);

  return (
    <main className="theme-light min-h-screen bg-background text-foreground">
      <HomeMarquee />

      <section
        className="hero-section home-hero thanks-hero relative overflow-hidden bg-background px-6 pt-10 md:pt-14"
        style={{
          "--hero-bg-mobile": `url(${heroAndersonMobile})`,
          "--hero-bg-desktop": `url(${heroAnderson})`,
        } as Record<string, string>}
      >
        <div className="mx-auto w-full max-w-6xl">
          <div className="min-[1200px]:w-1/2">
            <img src={logoContadorDigitalElite} alt="Imersão Contador Digital de Elite" className="mb-6 h-auto w-48 md:w-60" loading="eager" />

            <div className="mb-8 max-w-lg">
              <div className="mb-2 flex items-center justify-between text-xs font-bold uppercase tracking-[0.2em] text-accent-ink">
                <span>98% concluído</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-border" role="progressbar" aria-valuenow={98} aria-valuemin={0} aria-valuemax={100} aria-label="Progresso da inscrição">
                <div className="h-full rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--gold-soft)]" style={{ width: "98%" }} />
              </div>
            </div>

            <h1 className="text-balance text-2xl leading-[1.12] md:text-3xl lg:text-[2.35rem]">
              Sua inscrição está <span className="gold-text">quase confirmada…</span>
            </h1>

            <p className="mt-6 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground md:text-xl">
              Falta apenas um último passo para garantir seu acesso à Imersão <strong className="text-foreground">[CONTADOR DIGITAL DE ELITE]</strong>!
            </p>

            <p className="mt-6 max-w-xl text-pretty text-sm font-bold uppercase tracking-wide leading-relaxed text-foreground md:text-base">
              Para concluir sua confirmação, você precisa entrar no grupo exclusivo de participantes no WhatsApp.
            </p>

            <div className="mt-6 flex flex-col items-start gap-4">
              <a href={WHATSAPP_URL} className="btn-cta">Entrar no grupo</a>
            </div>

            <div className="mt-8 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
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

            <div className="navy-card mt-8 p-6 md:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent-ink">⚠️ Importante</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">O acesso à sala onde a Imersão acontecerá será enviado exclusivamente pelo grupo.</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">Os participantes que não estiverem no grupo podem não conseguir acessar a aula ao vivo.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
