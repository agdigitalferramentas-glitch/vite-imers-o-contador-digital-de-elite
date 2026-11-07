const ITENS = [
  { item: "CCD HUB (acesso por 6 meses)", preco: "R$ 3.997" },
  { item: "Mentoria Reforma Tributária Lucrativa", preco: "R$ 2.997" },
  { item: "CCD: Comunidade Contadores Digitais (1 ano)", preco: "R$ 2.497" },
  { item: "Pack Contador Estratégico IA", preco: "R$ 297" },
  { item: "Contador Digital de Elite", preco: "R$ 247" },
  { item: "Contabilidade Digital 360 + Guia de Processos", preco: "R$ 194" },
  { item: "CCD vitalício, sem renovação anual", preco: "Incluído", incluido: true },
  { item: "Todas as atualizações da Reforma Tributária", preco: "Incluído", incluido: true },
  { item: "Acesso vitalício a todos os cursos", preco: "Incluído", incluido: true },
];

/* SEÇÃO 05: Ancoragem (início) */
export default function ComboAncoragem() {
  return (
    <section id="secao-05-ancoragem" aria-labelledby="ancoragem-titulo" className="cb-section cb-ancoragem">
      <div className="cb-container">
        <h2 id="ancoragem-titulo">Se você comprasse tudo separado hoje</h2>
        <table className="cb-ancoragem-table">
          <thead>
            <tr>
              <th scope="col">Item</th>
              <th scope="col">Preço de venda separado</th>
            </tr>
          </thead>
          <tbody>
            {ITENS.map((i) => (
              <tr key={i.item} className={i.incluido ? "cb-incluido" : undefined}>
                <th scope="row">{i.item}</th>
                <td>{i.preco}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th scope="row">Total</th>
              <td>R$&nbsp;10.229</td>
            </tr>
          </tfoot>
        </table>
        <p className="cb-ancoragem-destaque">
          Você não vai pagar R$&nbsp;10.229. Na Black Friday, você leva tudo por <strong>R$&nbsp;2.597</strong>, com acesso vitalício. Ou seja: são <strong>mais de R$&nbsp;7.000 de desconto</strong> no valor total.
        </p>
      </div>
    </section>
  );
}
/* SEÇÃO 05: Ancoragem (fim) */
