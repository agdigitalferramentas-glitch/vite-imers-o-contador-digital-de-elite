import ResponsiveImg from "@/components/ResponsiveImg";

export default function MentorSection() {
  return (
    <>
      {/* SEÇÃO 8 — MENTOR */}
      <section className="navy-section px-6 py-14 md:py-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
          <div className="md:w-full">
            <ResponsiveImg name="anderson-maisse" alt="Anderson Maisse no palco durante palestra" width={1148} height={1365} sizes="(min-width: 1200px) 552px, (min-width: 768px) 45vw, calc(100vw - 48px)" className="home-image w-full object-cover" />
          </div>
          <div>
            <p className="section-label mb-4">MENTOR</p>
            <h2 className="text-2xl md:text-3xl lg:text-[2.35rem]">Quem vai <span className="gold-text">conduzir essa imersão</span></h2>
            <div className="mt-10 border-l-2 border-primary/40 pl-6 md:pl-8">
              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p><strong className="text-foreground">Anderson Maisse</strong> começou com 80 clientes em 2018. Hoje a AM Contabilidade Online atende mais de 1.200 empresas, está entre os 2% maiores escritórios do Brasil e fatura perto de R$ 5 milhões por ano, com 40% de margem.</p>
                <p>Criador da metodologia Contabilidade Digital: 4.000+ alunos, 300 mentorados e 2.000 profissionais em palestras.</p>
                <p>Sem teoria: ele mostra o que faz, como faz e por que funciona.</p>
              </div>
              <div className="mt-10 grid grid-cols-3 gap-3 border-t border-border pt-8 text-center">
                {[
                  { n: "1.200+", l: "clientes" },
                  { n: "40%", l: "de margem líquida" },
                  { n: "4.000+", l: "alunos" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="text-2xl font-extrabold text-accent-ink md:text-3xl">{s.n}</div>
                    <div className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <p className="mx-auto mt-8 max-w-4xl text-center text-lg text-muted-foreground">Agora, vamos ao acesso.</p>
      </section>
    </>
  );
}
