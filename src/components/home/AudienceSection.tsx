import { CheckCircle2 } from "lucide-react";

export default function AudienceSection() {
  return (
    <>
      {/* SEÇÃO 7 — PARA QUEM É */}
      <section className="bg-accent px-6 py-10 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-2xl md:text-3xl lg:text-[2.35rem]">Essa imersão é <span className="gold-text">para você se...</span></h2>
          <ul className="mt-10 space-y-5">
            {[
              "Perde clientes para escritórios de R$ 99/mês que entregam metade.",
              "Não sabe precificar os novos serviços da Reforma Tributária.",
              "Já ficou semanas cobrindo um funcionário que saiu, porque só ele sabia o processo.",
              "Nunca tirou 15 dias de férias sem o celular tocar.",
              "Vê colegas cobrando R$ 3.000 a R$ 5.000 por cliente e se pergunta o que fazem diferente.",
              "Sabe que está deixando receita na mesa, mas não sabe por onde começar.",
            ].map((t) => (
              <li key={t} className="card-dark flex gap-4 p-5 text-muted-foreground">
                <CheckCircle2 className="mt-1 shrink-0 text-accent-ink" size={20} />
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-lg text-muted-foreground">Se você se viu em uma dessas frases, essa imersão é para você. E quem conduz não é consultor de teoria: é um contador que vive isso todo dia.</p>
        </div>
      </section>
    </>
  );
}
