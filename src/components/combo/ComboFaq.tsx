import { ChevronDown } from "lucide-react";

const FAQ = [
  {
    pergunta: "Já sou aluno de um dos produtos. Vale a pena?",
    resposta:
      "Sim. Você recebe todos os outros produtos, o CCD vitalício, o CCD HUB por 6 meses e as atualizações da Reforma. E as aulas que você já tinha passam a ser suas para sempre.",
  },
  {
    pergunta: "O que significa acesso vitalício?",
    resposta:
      "Você paga uma vez e nunca mais renova. Vale para todos os cursos e para o CCD inteiro: estações, novas estações, comunidade, encontros ao vivo e bônus de assinante. A única exceção é o CCD HUB, liberado por 6 meses.",
  },
  {
    pergunta: "Por quanto tempo uso o CCD HUB — Módulo RT?",
    resposta: "Por 6 meses a partir da compra.",
  },
  {
    pergunta: "Os encontros ao vivo estão incluídos?",
    resposta:
      "Sim. Na Mentoria, são 12 encontros, um por mês, com Hot Seat para tirar dúvidas, todos gravados. No CCD, são 2 encontros ao vivo por mês, para sempre.",
  },
  {
    pergunta: "Não tenho tempo para tantos cursos. Como começo?",
    resposta:
      "Você não precisa assistir tudo de uma vez. Comece pela frente mais urgente do seu escritório: processos, crescimento ou Reforma. Como o acesso é vitalício, o resto continua lá.",
  },
  {
    pergunta: "Serve para quem está começando?",
    resposta:
      "Sim. O CD360 e o Guia de Processos foram feitos para quem está montando o escritório, e a Mentoria não exige conhecimento avançado da Reforma.",
  },
  {
    pergunta: "Preciso ter escritório físico?",
    resposta:
      "Não. Os processos funcionam para escritórios físicos que querem migrar e para escritórios 100% digitais.",
  },
  {
    pergunta: "Como recebo o acesso?",
    resposta: "Logo após a confirmação do pagamento, você recebe o acesso por e-mail.",
  },
  {
    pergunta: "Como funciona a garantia?",
    resposta: "Você tem 7 dias para testar. Se não ficar satisfeito, devolvemos 100% do valor.",
  },
];

/* SEÇÃO 11: Perguntas frequentes (início) */
export default function ComboFaq() {
  return (
    <section id="secao-11-faq" aria-labelledby="faq-titulo" className="cb-section cb-faq">
      <div className="cb-container">
        <h2 id="faq-titulo">Perguntas Frequentes</h2>
        <div className="cb-faq-lista">
          {FAQ.map((item, i) => (
            <details key={item.pergunta} className="cb-faq-item" open={i === 0}>
              <summary>
                <h3>{item.pergunta}</h3>
                <ChevronDown aria-hidden="true" size={24} strokeWidth={2.25} />
              </summary>
              <p>{item.resposta}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
/* SEÇÃO 11: Perguntas frequentes (fim) */
