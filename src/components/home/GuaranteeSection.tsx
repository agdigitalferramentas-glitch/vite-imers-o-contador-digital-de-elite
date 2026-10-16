import ResponsiveImg from "@/components/ResponsiveImg";

export default function GuaranteeSection() {
  return (
    <section id="garantia" aria-labelledby="garantia-titulo" className="hero-bg px-6 py-10 md:py-24">
      <div className="guarantee-card mx-auto max-w-5xl">
        <div className="guarantee-body">
          <div className="guarantee-seal">
            <ResponsiveImg
              name="garantia-selo"
              alt="Selo de garantia de 7 dias"
              width={500}
              height={500}
              sizes="(min-width: 768px) 224px, 168px"
            />
          </div>
          <div className="guarantee-text">
            <h2 id="garantia-titulo">
              Garantia de Satisfação: <span className="gold-text">100% do seu dinheiro de volta!</span>
            </h2>
            <h3>Participe da imersão. Aprenda os 5 passos. E só depois decida se valeu a pena.</h3>
            <p>
              Estamos tão confiantes no valor do conteúdo que você vai receber que assumimos todo o risco. Se, após participar da Imersão Contador Digital de Elite, você sentir que o conteúdo não valeu o investimento, basta solicitar o reembolso em até 7 dias após o evento. Devolveremos 100% do valor pago pelo seu ingresso. Sem complicações.
            </p>
          </div>
        </div>
        <h4 className="guarantee-closing">Você tem tudo para aprender e nada a perder!</h4>
      </div>
    </section>
  );
}
