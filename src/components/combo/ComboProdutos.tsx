const PRODUTOS = [
  {
    nome: "1. Mentoria Reforma Tributária Lucrativa",
    resumo: "Transforme o que você sabe sobre IBS, CBS e IS em consultoria de alto valor, nicho por nicho.",
    itens: [
      "27 aulas práticas em 3 fases: Fundamentos Consultivos, Imersões por Nicho e Central do Cliente",
      "6 nichos com script de vendas, checklist técnico e caso prático: Saúde, Mercado Digital, Advogados, Prestadores de Serviço, Revendedores de Veículos e Comércio Varejista",
      "12 encontros ao vivo (um por mês) + Hot Seat mensal",
      "Grupo de WhatsApp exclusivo, planilhas de cálculo e modelos de apresentação por nicho",
      "Aulas prontas para liberar aos seus clientes sobre a Reforma",
      "Com Anderson Maisse (estratégia comercial) e Alesandro Damaceno (aplicação técnica)",
    ],
    valor: "R$\u00a02.997",
  },
  {
    nome: "2. CCD: Comunidade Contadores Digitais",
    resumo: "A metodologia para faturar mais, sair do operacional e construir um escritório lucrativo, previsível e escalável.",
    itens: [
      "17 Estações de Aceleração (Gestão de Equipes, Financeiro, Processos e mais)",
      "Os 5 pilares: Vendas High Ticket, Engenharia de Equipes, Fábrica de Processos, Escala Nacional e Inteligência Artificial",
      "Ferramentas prontas: scripts de vendas, modelos de contrato, guias de precificação, templates e automações",
      "Comunidade com mais de 2.000 contadores e 2 encontros ao vivo por mês, para sempre",
      "Estações de nicho bônus: Contabilidade Médica, Advogados, Psicólogos, Infoprodutores, Representante Comercial, Revenda de Veículos, Holding Patrimonial, Recuperação Tributária, Marcas e Patentes, Regularização de Obras, Tráfego Pago e Vendas pelo YouTube",
      "Mais de R$\u00a015 milhões em resultados gerados pelos membros em 2025",
    ],
    valor: "R$\u00a02.497 por ano",
  },
  {
    nome: "3. Contador Digital de Elite",
    resumo: "O mesmo sistema que levou um escritório de 80 para 1.200 clientes, aula por aula, no seu ritmo.",
    itens: [
      "Módulo 1, Aumento Imediato de Faturamento: os 8 a 10 serviços que sua carteira atual já precisa e ninguém ofereceu, sem captar um cliente novo",
      "Módulo 2, Marketing com o Dinheiro que Você Já Tem: o motor de demanda pago com a receita gerada no Módulo 1",
      "Módulo 3, A Proposta que Fecha sem Desconto: estrutura, sequência e apresentação de escopo prontas para usar",
      "Módulo 4, Processos, Contratos e IA na Operação: entrada do cliente, contrato e IA integrada ao onboarding",
    ],
    valor: "R$\u00a0247",
  },
  {
    nome: "4. Contabilidade Digital 360: o Guia Definitivo de Precificação e Processos",
    resumo: "O guia completo para escalar o escritório com lucro e previsibilidade.",
    itens: [
      "Módulo Contabilidade Digital: estrutura, prospecção, vendas, onboarding, atendimento, sucesso do cliente, equipe e ferramentas",
      "Módulo Precificação: os 3 estágios (sobrevivência, crescimento e rentabilidade)",
      "Módulo Processos: fiscal, DP, contábil, legalização, vendas, IRPF e onboarding",
      'Bônus: planilha de precificação, modelo de contrato da contabilidade digital, script de quebra de objeções para cobrar o adicional anual, mentoria gravada de quase 3h e aula "Monte sua contabilidade digital lucrativa em 4 semanas"',
    ],
    valor: "R$\u00a0147",
  },
  {
    nome: "5. Guia de Processos da Contabilidade Digital",
    resumo: "Um escritório até 3x mais eficiente com processos padronizados.",
    itens: [
      "9 aulas, cerca de 8h de conteúdo",
      "Fluxogramas, POPs e playbooks do fiscal (Anexo III, Comércio, Fator R), DP e contábil",
      "Fechamento fiscal, de folha e contábil na prática, inclusive em lote com rotina automática",
      "Processo de vendas, IRPF, gerenciamento de processos e entrada do cliente até o onboarding",
      "Bônus: mapas mentais, mini guias, fluxogramas e mentoria de quase 3h sobre processos, equipes e scripts de venda",
    ],
    valor: "R$\u00a047",
  },
  {
    nome: "6. Pack Contador Estratégico IA",
    resumo: "4 agentes de IA para sair de contador a consultor estratégico.",
    itens: [
      "Social Cont: cria posts, legendas e roteiros para redes sociais e atrai clientes qualificados",
      "Mara Salles: monta scripts de vendas e negociação para fechar e reajustar honorários",
      "Contuber: escreve roteiros de vídeo otimizados para o YouTube",
      "Analista de DRE: analisa a DRE do cliente e gera insights para sua consultoria",
      "Bônus: aula com Anderson Maisse sobre Serviços de Alto Valor",
    ],
    valor: "R$\u00a0297",
  },
];

/* SEÇÃO 03: Tudo o que você leva no combo (início) */
export default function ComboProdutos() {
  return (
    <section id="secao-03-produtos" aria-labelledby="produtos-titulo" className="cb-section cb-produtos">
      <div className="cb-container">
        <h2 id="produtos-titulo">6 produtos, o CCD HUB e acesso vitalício. Veja o que entra na sua conta.</h2>
        <ul className="cb-produtos-grid">
          {PRODUTOS.map((p, idx) => (
            <li key={p.nome}>
              <article className="cb-produto">
                <div className="cb-produto-media" role="img" aria-label={`Placeholder: imagem do produto ${p.nome.replace(/^\d+\.\s/, "")}`}>
                  <span className="cb-placeholder-label">
                    [IMG-{String(idx + 2).padStart(2, "0")} | Imagem do produto: {p.nome.replace(/^\d+\.\s/, "")} | 16:9 | 1280x720]
                  </span>
                </div>
                <h3>{p.nome}</h3>
                <p className="cb-produto-resumo">
                  <em>{p.resumo}</em>
                </p>
                <ul className="cb-produto-itens">
                  {p.itens.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
                <p className="cb-produto-valor">
                  <strong>Valor separado:</strong> {p.valor}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
/* SEÇÃO 03: Tudo o que você leva no combo (fim) */
