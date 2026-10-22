import { useEffect } from "react";
import { Authority, Faq, FinalCall, Guarantee, Hero, Learn, Opportunity, Testimonials, Ticket_ } from "@/components/lp/sections";
import { MarqueeBand } from "@/components/lp/primitives";
import "@/bf.css";

const FONT_ID = "bf-fonts";
const FAVICON_ID = "bf-favicon";

export default function LpBf1126() {
  useEffect(() => {
    document.title = "Imersão Contador Digital de Elite | Edição Black Friday";

    // Fontes Anton + Manrope carregadas apenas nesta página
    if (!document.getElementById(FONT_ID)) {
      const preconnect = document.createElement("link");
      preconnect.rel = "preconnect";
      preconnect.href = "https://fonts.googleapis.com";
      preconnect.id = `${FONT_ID}-pre`;
      const fonts = document.createElement("link");
      fonts.id = FONT_ID;
      fonts.rel = "stylesheet";
      fonts.href = "https://fonts.googleapis.com/css2?family=Anton&family=Manrope:wght@400;600;700;800&display=swap";
      document.head.append(preconnect, fonts);
    }

    // Favicon exclusivo desta LP (não altera o favicon global do index.html)
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
    <div className="theme-bf bg-background text-foreground min-h-screen">
      <main className="overflow-x-hidden">
        <Hero />
        <MarqueeBand />
        <Learn />
        <Opportunity />
        <Testimonials />
        <Authority />
        <Ticket_ />
        <Guarantee />
        <Faq />
        <FinalCall />
      </main>
    </div>
  );
}
