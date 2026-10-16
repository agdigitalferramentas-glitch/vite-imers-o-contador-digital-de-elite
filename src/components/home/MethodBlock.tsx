import { Zap } from "lucide-react";

export default function MethodBlock() {
  return (
    <>
      {/* SEÇÃO 5 — APRESENTAÇÃO DA IMERSÃO */}
      <section className="navy-section px-6 py-14 md:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="section-label mb-4">IMERSÃO ONLINE E AO VIVO</p>
          <h2 className="text-2xl md:text-3xl lg:text-[2.35rem]">Existe um método para sair dessa conta. E você vai <span className="gold-text">conhecê-lo ao vivo.</span></h2>
          <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-muted-foreground">Uma noite. Um sistema testado. <em className="gold-text">Aplicável no dia seguinte.</em></p>
          <div className="mt-10 space-y-5 text-left text-lg leading-relaxed text-muted-foreground">
            <p><strong className="gold-text">Imersão Contador Digital de Elite</strong> — 11 de novembro, às 19h51.</p>
            <p>Anderson Maisse abre o método que levou a AM Contabilidade de 80 para mais de 1.200 clientes, com faturamento próximo de R$ 5 milhões por ano e 40% de margem líquida. O foco não são os números dele: é o que você <em className="gold-text">aplica na sua operação</em> no dia seguinte.</p>
          </div>
        </div>
      </section>

      {/* SEÇÃO 6 — O CONTEÚDO */}
      <section className="px-6 py-10 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-label mb-4">O CONTEÚDO</p>
            <h2 className="text-2xl md:text-3xl lg:text-[2.35rem]">O que você vai sair dessa imersão <span className="gold-text">sabendo fazer</span></h2>
          </div>

          <div className="home-steps mt-16 space-y-6">
            {[
              { step: "PASSO 1", title: "Novos serviços que geram caixa na carteira que você já tem.", body: "Dentro da sua carteira atual existem entre 8 e 10 serviços que seus clientes precisam, estão dispostos a pagar, e que ninguém nunca ofereceu para eles. Anderson vai te mostrar quais são esses serviços e como ativar essas receitas sem captar um único cliente novo. Resultado: dinheiro novo no caixa antes do mês acabar." },
              { step: "PASSO 2", title: "Marketing com dinheiro que você já tem", body: "Com o caixa do Passo 1, você monta um motor de aquisição constante sem apertar a operação." },
              { step: "PASSO 3", title: "A proposta que fecha sem pedir desconto", body: "O modelo de proposta que muda como o cliente lê o seu orçamento. Você sai com ele pronto para usar." },
              { step: "PASSO 4", title: "Processos que crescem sem virar incêndio", body: "O fluxo completo de entrada de cliente (automação, contrato, IA e onboarding) para tirar você do operacional." },
              { step: "PASSO 5", title: "O segredo dos 40% de margem", body: "Como separar clientes por perfil e equipe por nível: nada de profissional caro em cliente pequeno, nem júnior em cliente estratégico." },
            ].map((p) => (
              <article key={p.step} className="step-card navy-card card-dark relative overflow-hidden p-8 md:p-10">
                <div className="flex flex-col gap-6 md:flex-row md:items-start">
                  <div className="shrink-0">
                    <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
                      <Zap size={14} className="text-accent-ink" />
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-ink">{p.step}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl">{p.title}</h3>
                    <p className="mt-4 leading-relaxed text-muted-foreground">{p.body}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-12 text-center text-lg text-muted-foreground">Esse conteúdo faz sentido para o seu momento? Confira:</p>
        </div>
      </section>
    </>
  );
}
