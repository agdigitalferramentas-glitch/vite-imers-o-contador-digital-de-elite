import { renderToStaticMarkup } from "react-dom/server";
import { BfShellLayout } from "@/pages/LpBf1126";
import { BF_CTA_LABEL } from "@/components/lp/BfHero";

/**
 * HTML estático da primeira dobra da /bf1126, injetado em bf1126/index.html no build (vite.config.ts).
 * O CTA aqui é um link comum; o React o substitui pelo botão com rolagem até o card de oferta.
 */
export function renderBfShell(): string {
  return renderToStaticMarkup(
    <BfShellLayout
      cta={<a href="#ingresso" className="bfh-cta">{BF_CTA_LABEL}</a>}
      below={<div style={{ minHeight: "100vh" }} aria-hidden="true" />}
    />,
  );
}
