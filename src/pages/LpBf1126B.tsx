import { lazy, Suspense, useEffect } from "react";
import BfHero, { BfHeroCta } from "@/components/lp/BfHero";
import "@/bf.css";

// Seções abaixo da dobra em chunk separado (React.lazy), com o título da segunda seção próprio da /bf1126-b.
const BfBelowFoldB = lazy(() => import("@/components/lp/BfBelowFoldB"));

const FAVICON_ID = "bf-favicon";

export default function LpBf1126B() {
  useEffect(() => {
    document.title = "Imersão Contador Digital de Elite | Edição Black Friday";

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
    <div className="theme-bf">
      <main className="overflow-x-hidden">
        <BfHero cta={<BfHeroCta />} />
        <Suspense fallback={<div style={{ minHeight: "100vh" }} aria-hidden="true" />}>
          <BfBelowFoldB />
        </Suspense>
      </main>
    </div>
  );
}
