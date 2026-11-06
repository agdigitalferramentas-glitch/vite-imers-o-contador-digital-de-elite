function Media({ id, nome }: { id: string; nome: string }) {
  return (
    <div className="cb-exclusivo-media" role="img" aria-label={`Placeholder: imagem de ${nome}`}>
      <span className="cb-placeholder-label">[{id} | Imagem: {nome} | desktop 28:9 1680x540 · mobile 64:27 1200x506]</span>
    </div>
  );
}

/* SEÇÃO 04: Os 3 diferenciais exclusivos da Black Friday (início) */
export default function ComboDiferenciais() {
  return (
    <section id="secao-04-diferenciais" aria-labelledby="diferenciais-titulo" className="cb-section cb-diferenciais">
      <div className="cb-container">
        <h2 id="diferenciais-titulo">O que só quem compra o combo recebe.</h2>

        <article className="cb-exclusivo" aria-labelledby="exclusivo-1">
          <Media id="IMG-08" nome="CCD HUB — Módulo RT" />
          <div className="cb-exclusivo-body">
          <p className="cb-badge">Exclusivo 1</p>
          <h3 id="exclusivo-1">CCD HUB — Módulo RT (liberado por 6 meses)</h3>
          <div className="cb-exclusivo-cols">
            <p>
              Não é uma calculadora. O CCD HUB — Módulo RT transforma os dados de cada cliente em uma análise clara do impacto da Reforma Tributária. Você preenche as informações da empresa e a ferramenta faz as simulações, mostrando:
            </p>
            <ul>
              <li>Projeção das novas alíquotas e do impacto da Reforma no negócio</li>
              <li>Comparação entre Simples Nacional, Simples Híbrido, Lucro Presumido e Lucro Real</li>
              <li>Cenários para identificar o regime mais vantajoso</li>
              <li>Impacto dos novos impostos no preço de venda</li>
              <li>Análise dos preços de compra e dos créditos tributários</li>
              <li>Oportunidades para reduzir a carga tributária e proteger a margem do cliente</li>
            </ul>
          </div>
          <p>
            Na prática, você sai do campo da dúvida e chega na reunião com o empresário mostrando números, cenários e projeções reais. É isso que transforma o diagnóstico da Reforma em honorário de consultoria.
          </p>
          <p className="cb-callout">
            Separado, o CCD HUB custa R$&nbsp;3.997. No combo da Black Friday, você usa o Módulo RT por 6 meses a partir da compra, sem pagar nada a mais.
          </p>
          </div>
        </article>

        <article className="cb-exclusivo" aria-labelledby="exclusivo-2">
          <Media id="IMG-09" nome="CCD vitalício" />
          <div className="cb-exclusivo-body">
          <p className="cb-badge">Exclusivo 2</p>
          <h3 id="exclusivo-2">o CCD é seu para sempre</h3>
          <div className="cb-exclusivo-cols">
            <p>
              O CCD é vendido como assinatura: R$&nbsp;2.497 por ano. Em 5 anos, são R$&nbsp;12.485 só para continuar dentro. No combo, você nunca mais paga por ele.
            </p>
            <div>
              <p>E não é só a área de aulas. É o CCD inteiro, vitalício:</p>
              <ul>
                <li>As 17 Estações de Aceleração e todas as novas estações que forem lançadas</li>
                <li>A comunidade com mais de 2.000 contadores, ativa 24/7</li>
                <li>Os 2 encontros ao vivo por mês, todos os meses</li>
                <li>Todos os bônus de assinante: estações de nicho, mentorias gravadas, CCD Studio e o que mais entrar</li>
                <li>Scripts, contratos, guias de precificação, templates e automações, sempre atualizados</li>
              </ul>
            </div>
          </div>
          <p className="cb-callout">
            Enquanto outros contadores renovam a assinatura todo ano, você está dentro para sempre, pagando uma vez só.
          </p>
          <p>
            O mesmo vale para os outros cursos. O Contador Digital de Elite, o CD360 e o Guia de Processos dão 12 meses de acesso quando comprados separados. No combo, ficam na sua conta sem prazo.
          </p>
          </div>
        </article>

        <article className="cb-exclusivo" aria-labelledby="exclusivo-3">
          <Media id="IMG-10" nome="Atualizações da Reforma Tributária" />
          <div className="cb-exclusivo-body">
          <p className="cb-badge">Exclusivo 3</p>
          <h3 id="exclusivo-3">Todas as atualizações da Reforma Tributária</h3>
          <p>
            A transição vai até 2033 e as regras ainda vão mudar. Toda aula nova, ajuste de alíquota ou regulamentação que entrar na Mentoria Reforma Tributária Lucrativa entra na sua conta, sem custo extra.
          </p>
          </div>
        </article>
      </div>
    </section>
  );
}
/* SEÇÃO 04: Os 3 diferenciais exclusivos da Black Friday (fim) */
