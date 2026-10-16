import type { ReactNode } from "react";
import HomeMarquee from "@/components/HomeMarquee";
import HeroMedia from "@/components/HeroMedia";
import { fallbackSrc, srcSet } from "@/lib/responsive";

/**
 * Primeira dobra da home: HTML + CSS puros (src/critical.css), sem estado nem efeitos.
 * É renderizada em tempo de build para dentro do index.html (ver vite.config.ts), então o título e o
 * texto de apoio aparecem antes de qualquer JavaScript. O React depois monta exatamente a mesma marcação.
 */
export default function HeroSection({ cta }: { cta: ReactNode }) {
  return (
    <>
      <HomeMarquee />
      <section className="hz home-hero">
        <HeroMedia />
        <div className="hz-wrap">
          <div className="hz-col">
            <img
              className="hz-logo"
              src={fallbackSrc("logo")}
              srcSet={srcSet("logo")}
              sizes="(min-width: 768px) 240px, 192px"
              width={1231}
              height={404}
              alt="Imersão Contador Digital de Elite"
              loading="eager"
              decoding="async"
            />
            <span className="hz-badge">EVENTO EXCLUSIVO PARA CONTADORES</span>
            <h1 className="hz-title">
              Por que alguns contadores <span className="gold-text">faturam 10x mais</span> que você com menos clientes e <span className="gold-text">menos horas</span>?
            </h1>
            <p className="hz-lead">
              Dia 11/11, <strong>às 19h51</strong>, Anderson Maisse mostra ao vivo como criar novos serviços na própria carteira, montar processos que rodam sem você e aumentar o lucro sem contratar.
            </p>
            <div className="hz-cta">{cta}</div>
          </div>
        </div>
      </section>
    </>
  );
}
