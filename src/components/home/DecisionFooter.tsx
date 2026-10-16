import CtaButton from "@/components/CtaButton";

export default function DecisionFooter() {
  return (
    <>
      {/* SEÇÃO 12 — A DECISÃO */}
      <section className="navy-section px-6 py-14 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-label mb-4">A DECISÃO</p>
          <h2 className="text-2xl md:text-3xl lg:text-[2.35rem]">Duas opções. <span className="gold-text">Uma decisão.</span></h2>
          <div className="mt-10 space-y-6 text-left text-lg leading-relaxed text-muted-foreground">
            <p>Fechar esta página e seguir com as mesmas 14 horas, o mesmo faturamento travado e os mesmos clientes pedindo desconto.</p>
            <p>Ou investir <strong className="gold-text">R$ 27</strong> e, no dia 11 de novembro, ver o mapa completo: serviços que geram receita imediata, marketing que atrai os clientes certos, proposta que fecha sem desconto, processos que tiram você do operacional e estrutura que gera margem de verdade.</p>
            <p>E, se quiser implementar com suporte, ferramentas e uma comunidade de mais de 2.000 contadores, a CCD vai estar lá.</p>
            <p className="text-2xl text-foreground">O primeiro passo é este: <strong>uma noite, R$ 27.</strong> A escolha é sua.</p>
          </div>
          <div className="mt-10">
            <CtaButton label="QUERO ENTRAR NA IMERSÃO CONTADOR DIGITAL DE ELITE" />
          </div>
        </div>
      </section>

      {/* SEÇÃO 13 — RODAPÉ */}
      <footer className="border-t border-border px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
          <p className="text-sm text-muted-foreground" style={{ fontFamily: "var(--font-legal)" }}>© 2026 Anderson Maisse — Todos os direitos reservados</p>
          <div className="text-sm text-muted-foreground md:text-right" style={{ fontFamily: "var(--font-legal)" }}>
            <p>Transformamos conhecimento em negócios lucrativos.</p>
            <p>Venha ser um expert <a href="https://agwebi.com.br/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground underline-offset-2 transition-colors hover:text-foreground hover:underline">AGWEBi</a></p>
          </div>
        </div>
      </footer>
    </>
  );
}
