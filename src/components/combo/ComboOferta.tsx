import { Check, ShieldCheck } from "lucide-react";
import type { ReactNode } from "react";

const CHECKLIST = [
  "Reforma Tributária Lucrativa",
  "CCD: Comunidade Contadores Digitais",
  "Contador Digital de Elite",
  "Contabilidade Digital 360",
  "Guia de Processos da Contabilidade Digital",
  "Pack Contador Estratégico IA",
  "CCD HUB: Módulo RT liberado até DEZ/2027",
  "Todas as atualizações da Reforma Tributária",
  "Acesso vitalício a todos os cursos",
];

/* SEÇÃO 06: Oferta (início) */
export default function ComboOferta({ cta }: { cta: ReactNode }) {
  return (
    <section id="oferta" aria-labelledby="oferta-titulo" className="cb-section cb-oferta">
      <div className="cb-container">
        <div className="cb-oferta-card">
          <p className="cb-badge">OFERTA BLACK FRIDAY</p>
          <h2 id="oferta-titulo">Seu investimento hoje</h2>
          <p className="cb-oferta-preco">
            <span>
              De <s>R$&nbsp;10.229</s> por
            </span>
            <strong className="cb-destaque">12x de R$&nbsp;268,59</strong>
            <span>ou R$&nbsp;2.597 à vista</span>
          </p>
          <p className="cb-oferta-texto">
            Por esse valor, você leva 6 produtos completos com acesso vitalício, inclusive a comunidade, as lives, as gravações e tudo o que já foi criado no ecossistema de desenvolvimento para contadores do Anderson Maisse.
          </p>
          <ul className="cb-checklist">
            {CHECKLIST.map((item) => (
              <li key={item}>
                <Check aria-hidden="true" size={20} strokeWidth={2.5} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          {cta}
          <div className="cb-selo" role="img" aria-label="7 dias de garantia">
            <ShieldCheck aria-hidden="true" size={36} strokeWidth={1.75} />
            <span>7 dias de garantia</span>
          </div>
          <p className="cb-micro">Pagamento seguro · Acesso liberado logo após a confirmação do pagamento</p>
        </div>

        <div className="cb-comparacoes">
          <p>
            <span>Reforma Lucrativa sozinha: <b>R$&nbsp;2.997</b>.</span>
            <span>Combo completo: <b>R$&nbsp;2.597</b>.</span>
            <em>Você paga <b>R$&nbsp;400</b> a menos e leva todos os outros produtos junto.</em>
          </p>
          <p>
            <span>Todos os produtos separados: <b>R$&nbsp;10.229</b>.</span>
            <span>Combo completo: <b>R$&nbsp;2.597</b>.</span>
            <em>São mais de <b>R$&nbsp;7.000</b> de desconto, e você ainda leva tudo com acesso vitalício.</em>
          </p>
        </div>
      </div>
    </section>
  );
}
/* SEÇÃO 06: Oferta (fim) */
