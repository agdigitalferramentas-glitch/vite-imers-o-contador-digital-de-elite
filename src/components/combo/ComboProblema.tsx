import { Building2, Globe2, Scale } from "lucide-react";

const PILARES = [
  { pilar: "Estrutura", resolve: "Processos padronizados, equipe produtiva, menos retrabalho", produtos: "Guia de Processos, Contabilidade Digital 360" },
  { pilar: "Crescimento", resolve: "Modelo digital, precificação, vendas e escala", produtos: "CCD, Contador Digital de Elite, Pack Contador Estratégico IA" },
  { pilar: "Reforma Tributária", resolve: "Consultoria de alto valor em IBS, CBS e IS, nicho por nicho", produtos: "Mentoria Reforma Tributária Lucrativa + CCD HUB: Módulo RT" },
];

const NECESSIDADES = [
  { Icon: Building2, texto: "Um escritório organizado, que roda sem você apagar incêndio todo dia." },
  { Icon: Globe2, texto: "Uma operação digital, que atende cliente de qualquer cidade e cobra honorário justo." },
  { Icon: Scale, texto: "E domínio da Reforma Tributária, que vai mudar o preço, a margem e o regime de mais de 1,5 milhão de empresas até 2033." },
];

/* SEÇÃO 02: Problema (início) */
export default function ComboProblema() {
  return (
    <section id="secao-02-problema" aria-labelledby="problema-titulo" className="cb-section cb-problema">
      <div className="cb-container">
        <h2 id="problema-titulo">O contador que vai crescer nos próximos anos precisa de três coisas ao mesmo tempo.</h2>
        <ul className="cb-cards">
          {NECESSIDADES.map(({ Icon, texto }) => (
            <li key={texto} className="cb-card">
              <span className="cb-card-icon" aria-hidden="true">
                <Icon size={28} strokeWidth={1.75} />
              </span>
              <p>{texto}</p>
            </li>
          ))}
        </ul>
        <div className="cb-prose">
          <p>
            A maioria dos contadores tenta resolver uma coisa de cada vez. Compra um curso de processos, depois um de precificação, depois corre atrás da Reforma. Gasta mais, demora mais e nunca junta as peças.
          </p>
          <p className="cb-callout">
            Nesta Black Friday, você leva as três frentes de uma vez. Com o mesmo método que levou a AM Contabilidade Online de 80 para mais de 1.200 clientes.
          </p>
        </div>
        <h3 className="cb-subtitle">Os 3 pilares do combo:</h3>
        <table className="cb-table">
          <thead>
            <tr>
              <th scope="col">Pilar</th>
              <th scope="col">O que resolve</th>
              <th scope="col">Produtos</th>
            </tr>
          </thead>
          <tbody>
            {PILARES.map((p) => (
              <tr key={p.pilar}>
                <th scope="row">{p.pilar}</th>
                <td data-label="O que resolve">{p.resolve}</td>
                <td data-label="Produtos">{p.produtos}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
/* SEÇÃO 02: Problema (fim) */
