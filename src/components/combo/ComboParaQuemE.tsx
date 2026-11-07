import { Check } from "lucide-react";

const PERFIS = [
  "Você já tem escritório e quer mais eficiência, menos custo operacional e mais lucro",
  "Você está montando o escritório agora e quer começar com processos, preço e posicionamento certos",
  "Você quer migrar para a contabilidade digital e atender clientes de qualquer lugar",
  "Você já estudou a Reforma Tributária e quer transformar isso em consultoria paga",
  "Você já comprou um dos produtos e quer o resto com acesso vitalício, pagando menos",
];

/* SEÇÃO 07: Para quem é (início) */
export default function ComboParaQuemE() {
  return (
    <section id="secao-07-para-quem-e" aria-labelledby="para-quem-titulo" className="cb-section cb-paraquem">
      <div className="cb-container">
        <h2 id="para-quem-titulo">Esse combo é para você se:</h2>
        <ul className="cb-perfis">
          {PERFIS.map((texto) => (
            <li key={texto}>
              <span className="cb-card-icon" aria-hidden="true">
                <Check size={24} strokeWidth={2.5} />
              </span>
              <p>{texto}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
/* SEÇÃO 07: Para quem é (fim) */
