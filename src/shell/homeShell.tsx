import { renderToStaticMarkup } from "react-dom/server";
import HomeLayout from "@/components/HomeLayout";
import { CTA_LABEL } from "@/lib/cta";

/**
 * HTML estático da home, injetado no index.html em tempo de build (plugin em vite.config.ts).
 * O CTA aqui é um link comum; o React o substitui pelo botão com a rolagem suave.
 */
export function renderHomeShell(): string {
  return renderToStaticMarkup(
    <HomeLayout
      cta={
        <a href="#inscricao" className="btn-cta">
          {CTA_LABEL}
        </a>
      }
      below={<div className="home-below" aria-hidden="true" />}
    />,
  );
}
