import type { ReactNode } from "react";

/* SEÇÃO 01: Hero (início) — HTML puro, sem estado nem efeitos (primeira dobra estática). */
export default function ComboHero({ cta }: { cta: ReactNode }) {
  return (
    <section id="secao-01-hero" aria-labelledby="hero-titulo" className="cb-section cb-hero">
      <div className="cb-container cb-hero-grid">
        <div className="cb-hero-content">
        <p className="cb-badge">BLACK FRIDAY ANDERSON MAISSE · O COMBO COMPLETO</p>
        <h1 id="hero-titulo">Todos os meus produtos para contadores em um só acesso. <span className="cb-destaque">Vitalício.</span> Pelo menor preço que já existiu.</h1>
        <p className="cb-lead">
          Reforma Tributária Lucrativa, CCD, Contador Digital de Elite, Contabilidade Digital 360, Guia de Processos e Pack Contador Estratégico IA. Mais o CCD HUB: Módulo RT, a ferramenta que simula o impacto da Reforma em cada cliente. Uma única compra, acesso vitalício e todas as atualizações da Reforma incluídas.
        </p>
        <p className="cb-price">
          De <s>R$&nbsp;10.229</s> por <strong>12x de R$&nbsp;268,59</strong> ou R$&nbsp;2.597 à vista
        </p>
        {cta}
        <p className="cb-micro">Garantia de 7 dias · Pagamento seguro · Parcelamento em até 12x</p>
        </div>
        <div className="cb-hero-media" role="img" aria-label="Placeholder: expert em destaque">
          <span className="cb-placeholder-label">[IMG-01 | Background do hero, expert em destaque à direita | desktop 1920x900 · mobile 4:5 1080x1350]</span>
        </div>
      </div>
    </section>
  );
}
/* SEÇÃO 01: Hero (fim) */
