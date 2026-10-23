import type { ReactNode } from "react";
import { Calendar, Ticket } from "lucide-react";
import ResponsiveImg from "@/components/ResponsiveImg";

/**
 * Primeira dobra da LP /bf1126 — HTML + CSS puros (estilos em src/bf-critical.css, sem Tailwind).
 * Renderizada no build para dentro de bf1126/index.html (vite.config.ts) e depois substituída
 * pelo React com a mesma marcação: nada aqui pode depender de estado, efeitos ou animações JS.
 */
export default function BfHero({ cta }: { cta: ReactNode }) {
  return (
    <section className="bfh">
      <div className="bfh-grid">
        <div className="bfh-copy">
          <ResponsiveImg
            name="bf-logo"
            alt="Imersão Contador Digital de Elite"
            width={1400}
            height={421}
            sizes="(min-width: 640px) 248px, 186px"
            className="bfh-logo"
            eager
          />
          <div className="bfh-eyebrow-wrap">
            <span className="bfh-eyebrow">Edição especial Black Friday</span>
          </div>
          <p className="bfh-kicker">EVENTO EXCLUSIVO PARA CONTADORES</p>
          <h1 className="bfh-title">
            Contador, a melhor <span className="bfh-red">Black Friday</span> da contabilidade está chegando!
          </h1>
          <p className="bfh-lead">Descubra como um seleto número de contadores faturam 10x mais com menos clientes e menos horas de trabalho.</p>
          <p className="bfh-sub">
            Garanta agora seu acesso à oferta exclusiva de Black Friday, que será revelada apenas durante o evento Imersão Contador Digital de Elite.
          </p>
          <div className="bfh-chips">
            <span className="bfh-chip">
              <Calendar className="bfh-icon" aria-hidden="true" />
              <span>11 de novembro, às 19h51 | Online e <span className="bfh-nowrap">ao vivo</span></span>
            </span>
            <span className="bfh-chip bfh-chip--hot">
              <Ticket className="bfh-icon" aria-hidden="true" /> INGRESSO: APENAS R$ 27
            </span>
          </div>
          <div className="bfh-cta-wrap">{cta}</div>
        </div>
        <div className="bfh-media">
          <div className="bfh-glow" aria-hidden="true" />
          <ResponsiveImg
            name="bf-maisse-hero"
            alt="Anderson Maisse"
            width={1279}
            height={1920}
            sizes="(min-width: 1152px) 488px, (min-width: 768px) 42vw, (min-width: 424px) 384px, calc(100vw - 40px)"
            className="bfh-photo"
            priority
          />
          <span className="bfh-stroke" aria-hidden="true">Black Friday</span>
        </div>
      </div>
    </section>
  );
}

/** CTA da primeira dobra: rola até o card de oferta (#ingresso). Sem dependências pesadas (fora do chunk do tailwind-merge). */
export function BfHeroCta() {
  return (
    <a
      href="#ingresso"
      className="bfh-cta"
      onClick={(e) => {
        e.preventDefault();
        const go = () => {
          const el = document.getElementById("ingresso");
          if (!el) return;
          const top = el.getBoundingClientRect().top + window.scrollY - Math.max(16, (window.innerHeight - el.offsetHeight) / 2);
          window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
        };
        go();
        setTimeout(go, 350);
        setTimeout(go, 800);
        history.replaceState(null, "", window.location.search + "#ingresso");
      }}
    >
      {BF_CTA_LABEL}
    </a>
  );
}

export const BF_CTA_LABEL = "Garantir minha vaga por R$ 27";
