import type { CSSProperties } from "react";
import { fallbackSrc, srcSet } from "@/lib/responsive";

type Props = {
  /** Nome-base das variantes em src/assets/responsive (ex.: "perdendo-tempo"). */
  name: string;
  alt: string;
  /** Dimensões intrínsecas: reservam o espaço (aspect-ratio) antes do carregamento e evitam CLS. */
  width: number;
  height: number;
  /** Largura renderizada em cada faixa de tela; o navegador escolhe a menor variante suficiente. */
  sizes: string;
  className?: string;
  style?: CSSProperties;
  /** Imagem da primeira dobra: carrega já, com prioridade máxima. As demais são `lazy`. */
  priority?: boolean;
  /** Acima da dobra mas sem prioridade máxima (ex.: logo): `loading="eager"`. */
  eager?: boolean;
};

export default function ResponsiveImg({ name, alt, width, height, sizes, className, style, priority, eager }: Props) {
  // `fetchpriority` em minúsculas: o React 18 repassa o atributo ao DOM e ao HTML estático.
  const priorityAttrs = priority ? ({ fetchpriority: "high" } as Record<string, string>) : {};
  return (
    <img
      src={fallbackSrc(name)}
      srcSet={srcSet(name)}
      sizes={sizes}
      width={width}
      height={height}
      alt={alt}
      className={className}
      style={style}
      loading={priority || eager ? "eager" : "lazy"}
      decoding="async"
      {...priorityAttrs}
    />
  );
}
