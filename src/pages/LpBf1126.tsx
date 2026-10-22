import { lazy, Suspense, useEffect } from "react";
import BfHero, { BF_CTA_LABEL } from "@/components/lp/BfHero";
import { CtaButton } from "@/components/lp/primitives";
import "@/bf.css";

// Seções abaixo da dobra (marquees, depoimentos, FAQ com Radix…) fora do bundle inicial
const BfBelowFold = lazy(() => import("@/components/lp/BfBelowFold"));

const FAVICON_ID = "bf-favicon";

/** Mesma marcação do HTML estático da primeira dobra (src/shell/bfShell.tsx). */
export function BfShellLayout({ cta, below }: { cta: React.ReactNode; below: React.ReactNode }) {
  return (
    <div className="theme-bf">
      <main className="overflow-x-hidden">
        <BfHero cta={cta} />
        {below}
      </main>
    </div>
  );
}

export default function LpBf1126() {
  useEffect(() => {
    document.title = "Imersão Contador Digital de Elite | Edição Black Friday";

    // Favicon exclusivo desta LP (no HTML estático já vem no <head>; aqui cobre a navegação dentro da SPA)
    let favicon = document.getElementById(FAVICON_ID) as HTMLLinkElement | null;
    if (!favicon) {
      favicon = document.createElement("link");
      favicon.id = FAVICON_ID;
      favicon.rel = "icon";
      favicon.type = "image/png";
      document.head.appendChild(favicon);
    }
    favicon.href = "/favicon-bf.png";

    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const previousDescription = description?.content ?? null;
    description?.setAttribute(
      "content",
      "11 de novembro, às 19h51. Descubra por que alguns contadores faturam 10x mais com menos clientes. Ingresso: R$ 27.",
    );

    return () => {
      if (description && previousDescription !== null) description.content = previousDescription;
    };
  }, []);

  return (
    <BfShellLayout
      cta={<CtaButton unstyled className="bfh-cta">{BF_CTA_LABEL}</CtaButton>}
      below={
        // reserva altura enquanto o chunk chega: o rodapé não "sobe" para a primeira dobra
        <Suspense fallback={<div style={{ minHeight: "100vh" }} aria-hidden="true" />}>
          <BfBelowFold />
        </Suspense>
      }
    />
  );
}
