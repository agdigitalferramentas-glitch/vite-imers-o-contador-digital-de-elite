

export default function FaqSection() {
  return (
    <>
      {/* SEÇÃO 11 — PERGUNTAS FREQUENTES */}
      <section className="bg-accent px-6 py-10 md:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="section-label mb-4 text-center">FAQ</p>
          <h2 className="text-center text-2xl md:text-3xl lg:text-[2.35rem]">Perguntas <span className="gold-text">frequentes</span></h2>
          <div className="mt-12 space-y-4">
            {[
              { q: "Como recebo o acesso?", a: "Após o pagamento, você será direcionado para o grupo exclusivo de WhatsApp. É nesse grupo que o link da transmissão ao vivo será compartilhado." },
              { q: "Vai ter gravação?", a: "A proposta da imersão é experiência ao vivo. Porém se você quiser ter acesso a gravação, ela será disponibilizada no ato da compra do ingresso por R$ 97,00." },
              { q: "Sou recém-formado ou ainda não tenho escritório. Serve para mim?", a: "Se você pretende ter um escritório lucrativo e bem posicionado, esse conteúdo vai te dar uma vantagem que a maioria dos contadores leva anos para construir. Então, sim." },
              { q: "Já fiz outros cursos sem resultado. Por que este seria diferente?", a: "Porque isso não é um curso. É uma imersão ao vivo com um contador que aplica tudo no próprio escritório. Cada passo vem de uma operação real com 1.200 clientes e 40% de margem. Você não vai aprender conceitos — vai sair com processos prontos para usar no dia seguinte." },
              { q: "Tenho menos de 30 clientes. Serve para mim?", a: "Esse é o melhor momento para aplicar. Quanto menor a base, mais rápido você implementa e vê resultado. Boa parte do método começa justamente com a carteira que você já tem — e 30 clientes são mais que suficientes para gerar receita nova no primeiro mês." },
              { q: "Serve para Simples Nacional ou só para Lucro Presumido/Real?", a: "Funciona para qualquer regime. Os serviços adicionais, o modelo de proposta e a estrutura de time se aplicam independente do porte ou do regime tributário do seu cliente." },
              { q: "R$ 27 mesmo? Qual é a pegadinha?", a: "Nenhuma. O valor é acessível de propósito. O objetivo é colocar o máximo de contadores sérios dentro dessa imersão. Se o conteúdo for bom — e vai ser — a relação se constrói a partir dali." },
            ].map((f) => (
              <details key={f.q} className="card-dark group p-6 [&[open]>summary>span:last-child]:rotate-45">
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-lg font-bold text-foreground">
                  <span>{f.q}</span>
                  <span className="text-2xl text-accent-ink transition-transform">+</span>
                </summary>
                <p className="mt-4 leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
          <p className="mt-12 text-center text-muted-foreground">Dúvidas resolvidas. Agora é com você.</p>
        </div>
      </section>
    </>
  );
}
