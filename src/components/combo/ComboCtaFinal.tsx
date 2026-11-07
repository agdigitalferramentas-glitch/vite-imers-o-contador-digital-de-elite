import ComboCheckoutCta from "./ComboCheckoutCta";

/* SEÇÃO 12: CTA final (início) */
export default function ComboCtaFinal() {
  return (
    <section id="secao-12-cta-final" aria-labelledby="cta-final-titulo" className="cb-section cb-ctafinal">
      <div className="cb-container">
        <div className="cb-ctafinal-card">
          <p className="cb-badge">ÚLTIMA CHAMADA DA BLACK FRIDAY</p>
          <h2 id="cta-final-titulo">Uma compra. Todos os produtos. Para sempre.</h2>
          <div className="cb-ctafinal-texto">
            <p>
              No próximo ano, a Reforma vai separar o contador que cobra por guia emitida do contador que cobra por decisão tomada. Esse combo junta tudo o que você precisa para estar do lado certo: escritório organizado, operação digital e consultoria da Reforma.
            </p>
            <p>Uma única compra de R$&nbsp;2.597 libera tudo, com acesso vitalício.</p>
          </div>
          <ComboCheckoutCta />
          <p className="cb-micro">Garantia de 7 dias · Pagamento seguro · Parcelamento em até 12x</p>
        </div>
      </div>
    </section>
  );
}
/* SEÇÃO 12: CTA final (fim) */
