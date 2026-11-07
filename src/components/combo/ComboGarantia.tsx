import ComboCheckoutCta from "./ComboCheckoutCta";

/* SEÇÃO 10: Garantia (início) */
export default function ComboGarantia() {
  return (
    <section id="secao-10-garantia" aria-labelledby="garantia-titulo" className="cb-section cb-garantia">
      <div className="cb-container">
        <div className="cb-garantia-card">
          <div className="cb-garantia-media" role="img" aria-label="Placeholder: selo de garantia">
            <span className="cb-placeholder-label">[IMG-16 | Selo de garantia de 7 dias | 1:1 | 600x600]</span>
          </div>
          <div className="cb-garantia-texto">
            <h2 id="garantia-titulo">7 dias de garantia. Risco zero.</h2>
            <p>
              Você tem 7 dias para entrar, abrir os cursos, testar o CCD HUB e ver se o combo faz sentido para o seu escritório. Se por qualquer motivo não for para você, peça o reembolso. Você recebe cada centavo de volta, sem burocracia e sem perguntas.
            </p>
          </div>
        </div>
        <div className="cb-section-cta">
          <ComboCheckoutCta />
        </div>
      </div>
    </section>
  );
}
/* SEÇÃO 10: Garantia (fim) */
