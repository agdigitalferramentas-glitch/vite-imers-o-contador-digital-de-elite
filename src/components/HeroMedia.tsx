import { fallbackSrc, srcSet } from "@/lib/responsive";

/**
 * Foto do hero como <img> real (e não background CSS): pode receber `fetchpriority="high"`, nunca é lazy
 * e entrega a variante certa por tela (mobile 480–819w, desktop 1280–1920w).
 * É o candidato a LCP da página.
 */
export default function HeroMedia() {
  return (
    <picture className="hz-media">
      <source media="(min-width: 768px)" srcSet={srcSet("hero-desktop")} sizes="(min-width: 1200px) max(100vw, 1581px), 100vw" />
      <img
        src={fallbackSrc("hero-mobile")}
        srcSet={srcSet("hero-mobile")}
        sizes="100vw"
        width={819}
        height={893}
        alt="Anderson Maisse, fundador da AM Contabilidade, com mais de 4.000 alunos e 1.200 clientes"
        loading="eager"
        decoding="async"
        {...({ fetchpriority: "high" } as Record<string, string>)}
      />
    </picture>
  );
}
