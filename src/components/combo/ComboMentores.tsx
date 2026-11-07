const MENTORES = [
  {
    id: "IMG-11",
    titulo: "Anderson Maisse — Estratégia e Contabilidade Digital",
    foto: "Anderson Maisse",
    texto:
      "Levou a AM Contabilidade Online de 80 para mais de 1.200 clientes entre 2018 e 2025. Hoje está entre os 2% maiores escritórios contábeis do Brasil, faturando perto de R$ 5 milhões por ano com 40% de margem líquida. Criador da metodologia Contabilidade Digital, já formou mais de 2.500 alunos e mentorou 300 contadores.",
  },
  {
    id: "IMG-12",
    titulo: "Alesandro Damaceno — Aplicação técnica da Reforma",
    foto: "Alesandro Damaceno",
    texto:
      "Contador pela UFGD e advogado, com mais de 16 anos em contabilidade digital. CEO da Contabiliza Mais Assessoria Contábil. Conduz a parte técnica da Reforma: IBS, CBS, IS, créditos, regimes e impacto por nicho.",
  },
];

/* SEÇÃO 08: Quem vai te guiar (início) */
export default function ComboMentores() {
  return (
    <section id="secao-08-mentores" aria-label="Quem vai te guiar" className="cb-section cb-mentores">
      <div className="cb-container">
        <ul className="cb-mentores-grid">
          {MENTORES.map((m) => (
            <li key={m.id}>
              <article className="cb-mentor">
                <div className="cb-mentor-media" role="img" aria-label={`Placeholder: foto de ${m.foto}`}>
                  <span className="cb-placeholder-label">[{m.id} | Foto: {m.foto} | 1:1 | 1000x1000]</span>
                </div>
                <div className="cb-mentor-body">
                  <h2>{m.titulo}</h2>
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
