import { Authority, Faq, FinalCall, Guarantee, Learn, Opportunity, Testimonials, Ticket_ } from "./sections";
import { MarqueeBand } from "./primitives";

/** Tudo abaixo da primeira dobra da /bf1126-b: variante da /bf1126 com título próprio na segunda seção. */
export default function BfBelowFoldB() {
  return (
    <>
      <MarqueeBand />
      <Learn title="Veja como você vai faturar mais trabalhando menos aqui embaixo:" />
      <Opportunity />
      <Testimonials />
      <Authority />
      <MarqueeBand />
      <Ticket_ />
      <Guarantee />
      <Faq />
      <FinalCall />
      <MarqueeBand />
      <footer className="border-t border-border bg-black px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
          <p className="text-sm text-muted-foreground">© 2026 Anderson Maisse — Todos os direitos reservados</p>
          <div className="text-sm text-muted-foreground md:text-right">
            <p>Transformamos conhecimento em negócios lucrativos.</p>
            <p>Venha ser um expert <a href="https://agwebi.com.br/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground underline-offset-2 transition-colors hover:text-foreground hover:underline">AGWEBi</a></p>
          </div>
        </div>
      </footer>
    </>
  );
}
