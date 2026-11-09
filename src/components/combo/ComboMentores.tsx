import ResponsiveImg from "@/components/ResponsiveImg";

const MENTORES = [
  {
    id: "IMG-11",
    imagem: "combo-mentor-anderson",
    nome: "Anderson Maisse",
    funcao: "Estratégia e Contabilidade Digital",
    foto: "Anderson Maisse",
    texto:
      "Levou a AM Contabilidade Online de 80 para mais de 1.200 clientes entre 2018 e 2025. Hoje está entre os 2% maiores escritórios contábeis do Brasil, faturando perto de R$ 5 milhões por ano com 40% de margem líquida. Criador da metodologia Contabilidade Digital, já formou mais de 2.500 alunos e mentorou 300 contadores.",
  },
  {
    id: "IMG-12",
    imagem: "combo-mentor-alesandro",
    nome: "Alesandro Damaceno",
    funcao: "Aplicação técnica da Reforma",
    foto: "Alesandro Damaceno",
    texto:
      "Contador pela UFGD e advogado, com mais de 16 anos em contabilidade digital. CEO da Contabiliza Mais Assessoria Contábil. Conduz a parte técnica da Reforma: IBS, CBS, IS, créditos, regimes e impacto por nicho.",
  },
];

/* SEÇÃO 08: Quem vai te guiar (início) */
export default function ComboMentores() {
  return (
    <section id="secao-08-mentores" aria-labelledby="mentores-titulo" className="cb-section cb-mentores">
      <div className="cb-container">
        <h2 id="mentores-titulo">Quem vai te guiar</h2>
        <ul className="cb-mentores-grid">
          {MENTORES.map((m) => (
            <li key={m.id}>
              <article className="cb-mentor">
                <div className="cb-mentor-media cb-mentor-media-img">
                  <ResponsiveImg
                    name={m.imagem}
                    alt={`Retrato de ${m.foto}`}
                    width={842}
                    height={1264}
                    sizes="(min-width: 768px) 468px, calc(100vw - 32px)"
                  />
                </div>
                <div className="cb-mentor-body">
                  <h3>
                    <span className="cb-mentor-nome">{m.nome}</span>
                    <span className="cb-sr">, </span>
                    <span className="cb-mentor-funcao">{m.funcao}</span>
                  </h3>
                  <p>{m.texto}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
/* SEÇÃO 08: Quem vai te guiar (fim) */
