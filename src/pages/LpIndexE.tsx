import { useEffect, useRef } from "react";
import { BookOpen, CheckCircle2, User, Users, Zap } from "lucide-react";
import heroBg from "@/assets/hero-bg.webp";
import heroBgMobile from "@/assets/hero-bg-mobile.webp";
import andersonMaisse from "@/assets/anderson-maisse.webp";
import perdendoTempo from "@/assets/perdendo-tempo.webp";
import quantoValeSeuTempo from "@/assets/quanto-vale-seu-tempo.webp";
import logoContadorDigitalElite from "@/assets/logo-contador-digital-elite.webp";

const CTA_LABEL = "QUERO MINHA VAGA POR R$ 27";

function CtaButton({ label = CTA_LABEL, href = "#inscricao" }: { label?: string; href?: string }) {
  return (
    <a href={href} className="btn-gold">
      {label}
    </a>
  );
}

export default function IndexE() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    document.title = "Imersão Contador Digital de Elite — Anderson Maisse | 13 de junho";
    const root = rootRef.current;
    if (!root) return;
    if (typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    const targets = root.querySelectorAll<HTMLElement>(
      "section > div, section > div > *, article, details, ul > li"
    );
    targets.forEach((el, i) => {
      el.classList.add("reveal");
      el.style.transitionDelay = `${Math.min((i % 8) * 60, 420)}ms`;
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main ref={rootRef} className="min-h-screen">
      <div className="gold-pulse w-full bg-[var(--gold)] py-2 text-center text-xs font-bold uppercase tracking-[0.2em] text-[var(--primary-foreground)]">
        Imersão online e ao vivo — 13 de junho
      </div>

      {/* HERO */}
      <section
        className="hero-section relative overflow-hidden bg-[var(--background)] px-6 pt-10 md:pt-24"
        style={{
          "--hero-bg-mobile": `url(${heroBgMobile})`,
          "--hero-bg-desktop": `url(${heroBg})`,
        } as Record<string, string>}
      >
        <div className="mx-auto w-full max-w-6xl">
          <div className="lg:w-1/2">
            <img src={logoContadorDigitalElite} alt="Imersão Contador Digital de Elite" className="mb-6 h-auto w-48 md:w-60" loading="eager" />
            <span className="mb-4 inline-block rounded-full border border-[var(--gold)]/40 bg-[var(--gold)]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[var(--gold)]">
              Evento exclusivo para contadores
            </span>
            <h1 className="text-balance text-2xl leading-[1.12] md:text-3xl lg:text-[2.35rem]">
              Enquanto você trabalha 14 horas por dia, outros contadores faturam <span className="gold-text">10x mais</span> com menos clientes e menos funcionários.
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-sm leading-relaxed text-white/80 md:text-xl">
              Dia 13 de junho das 09 às 15 horas. 5 horas de evento. R$ 27. O método completo que separa contadores que faturam de contadores que lucram.
            </p>

            <p className="mt-8 text-sm font-bold uppercase tracking-[0.15em] text-[var(--gold)]">
              Evento online e ao vivo | 13 de junho | 09 às 15h
            </p>

            <div className="mt-5 flex flex-col items-start gap-4">
              <CtaButton />
              <div className="flex flex-row flex-wrap justify-start gap-x-4 gap-y-2 text-sm text-white/70 md:flex-col md:items-start md:gap-2 md:justify-start">
                <span className="flex items-center gap-2"><User size={16} className="shrink-0 text-[var(--gold)]" /> Anderson Maisse — Fundador da AM Contabilidade Online</span>
                <span className="flex items-center gap-2"><Users size={16} className="shrink-0 text-[var(--gold)]" /> 1200+ clientes</span>
                <span className="flex items-center gap-2"><BookOpen size={16} className="shrink-0 text-[var(--gold)]" /> +4000 alunos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2 */}
      <section className="px-6 py-10 md:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
          <div className="order-last md:order-first md:sticky md:top-24 md:self-start">
            <img src={perdendoTempo} alt="Contador exausto trabalhando à noite cercado de papelada" className="w-full rounded-xl object-cover shadow-2xl" loading="lazy" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-[2.35rem]">Você Trabalha 14 Horas Por Dia e Ainda Sente Que Está <span className="gold-text">Ficando Para Trás?</span></h2>
            <div className="mt-10 space-y-6 text-lg leading-relaxed text-white/85">
              <p>Você fez faculdade. Passou no CRC. Abriu seu escritório. Conquistou clientes.</p>
              <p className="italic text-white/70">Mas a conta não fecha do jeito que deveria.</p>
              <p>Seu <strong className="text-white">faturamento cresce</strong>, mas o <strong className="text-white">lucro não acompanha</strong>. Cada cliente novo traz mais trabalho, mais demanda, mais dor de cabeça — e no fim do mês, o extrato não reflete o esforço.</p>
              <ul className="space-y-3 border-l-2 border-[var(--gold)]/40 pl-6">
                {[
                  "Clientes que ligam só para reclamar de imposto ou pedir desconto.",
                  'Propostas enviadas com medo de "assustar" o preço.',
                  "Uma equipe que depende de você para cada decisão.",
                  "Zero tempo para pensar em estratégia, crescimento ou inovação.",
                ].map((t) => (<li key={t} className="text-white/85">→ {t}</li>))}
              </ul>
              <p>Você se formou para ser um profissional valorizado. <strong className="text-white">Mas virou refém do operacional.</strong></p>
              <p>E se você precisa de <em>mais clientes</em> toda vez que quer ganhar <em>mais dinheiro</em>, o problema não é esforço. <strong className="text-white">É o modelo.</strong></p>
              <p>Existem contadores com <em>menos clientes que você</em> faturando 2x, 3x mais. Com menos funcionários. Com mais margem. Trabalhando de 6 a 8 horas por dia.</p>
              <p>A diferença? <strong className="gold-text">Posicionamento, estrutura e visão estratégica.</strong></p>
              <p>Faça uma conta rápida: pegue seu lucro líquido do mês e divida pelas horas que você trabalhou. Se o resultado ficou abaixo de R$ 50 por hora, você ganha menos do que um motorista de aplicativo em cidade grande — com mais responsabilidade, mais estudo e mais risco.</p>
              <p>Essa conta dói. Mas ela mostra exatamente onde o problema mora.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3 — Método ao vivo */}
      <section className="hero-bg px-6 py-10 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl lg:text-[2.35rem]">Existe Um Método Para Sair Dessa Conta Que Não Fecha. E Você Vai <span className="gold-text">Conhecer Ele Ao Vivo.</span></h2>
          <p className="mt-4 text-lg font-bold uppercase tracking-[0.2em] text-[var(--gold)]">Imersão Contador Digital de Elite</p>
          <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-white/85">Uma tarde. Um sistema testado. Tudo que separa contadores que sobrevivem de contadores que lucram.</p>
          <div className="mt-10 space-y-5 text-left text-lg leading-relaxed text-white/85">
            <p>No dia <strong className="text-white">13 de junho</strong>, de 09 às 15h, Anderson Maisse vai abrir ao vivo o método que usou para transformar a AM Contabilidade de um escritório com 80 clientes em uma operação com mais de 1.200 clientes, faturamento próximo a R$ 5 milhões anuais e margem líquida de 40%.</p>
            <p>Mas o que vai mudar seu jogo não são os números dele.</p>
            <p className="text-xl">É o que você vai <em className="gold-text">aplicar na sua operação</em> a partir do dia seguinte.</p>
          </div>
        </div>
      </section>

      {/* SEÇÃO 4 — Passos */}
      <section className="px-6 py-10 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-label mb-4">O conteúdo</p>
            <h2 className="text-2xl md:text-3xl lg:text-[2.35rem]">O Que Você Vai Sair Dessa Imersão <span className="gold-text">Sabendo Fazer</span></h2>
          </div>

          <div className="mt-16 space-y-6">
            {[
              { step: "PASSO 1", title: "Aumento Imediato de Faturamento", body: "Dentro da sua carteira atual existem entre 8 e 10 serviços que seus clientes precisam, estão dispostos a pagar, e que ninguém nunca ofereceu para eles. Anderson vai te mostrar quais são e como ativar essas receitas sem captar um único cliente novo." },
              { step: "PASSO 2", title: "Marketing Com Dinheiro Que Agora Você Já Tem", body: "Com o caixa gerado no Passo 1, você investe em aquisição sem comprometer sua operação. Vai entender como montar um motor de demanda constante usando receita que antes não existia." },
              { step: "PASSO 3", title: "A Proposta Que Fecha Sem Desconto", body: 'Você vai conhecer o modelo de proposta comercial que muda a forma como o cliente lê seu orçamento. Estrutura, sequência, apresentação do escopo — tudo montado para o "sim" sem pechinchar. Sai da imersão com a ferramenta pronta.' },
              { step: "PASSO 4", title: "Processos, Contratos e IA na Operação", body: "O fluxo completo de entrada de cliente: automação, contrato, IA integrada ao onboarding — eliminando o trabalho repetitivo que trava o time e te prende no operacional." },
              { step: "PASSO 5", title: "O Segredo dos 40% de Margem", body: "A engrenagem exata de separação por perfil de cliente e nível de time que gera 40% de margem líquida. É o que os contadores mais lucrativos do país aplicam — enquanto a maioria trabalha o dobro para lucrar a metade." },
            ].map((p) => (
              <article key={p.step} className="card-dark p-8 md:p-10">
                <div className="flex flex-col gap-6 md:flex-row md:items-start">
                  <div className="shrink-0">
                    <div className="inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/30 bg-[var(--gold)]/10 px-4 py-2">
                      <Zap size={14} className="text-[var(--gold)]" />
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--gold)]">{p.step}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl">{p.title}</h3>
                    <p className="mt-4 leading-relaxed text-white/85">{p.body}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 5 — Para você se */}
      <section className="bg-[#00161F] px-6 py-10 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-2xl md:text-3xl lg:text-[2.35rem]">Essa Imersão É <span className="gold-text">Para Você Se…</span></h2>
          <ul className="mt-10 space-y-5">
            {[
              "Você perde clientes para escritórios que cobram R$ 99/mês e entregam metade do que você entrega.",
              "Você tem medo da Reforma Tributária porque não sabe como precificar os novos serviços que vai precisar oferecer.",
              "Seu melhor funcionário pediu demissão e você ficou semanas fazendo o trabalho dele — porque ninguém mais sabia como fazer.",
              "Você nunca tirou 15 dias de férias sem o celular tocar com problema de cliente.",
              'Você olha para contadores mais estruturados, que cobram R$ 3.000, R$ 5.000 por cliente, e pensa: "o que eles fazem de diferente?"',
              "Você sabe que está sentado em cima de receita que não captura — mas não sabe por onde começar a mudar.",
            ].map((t) => (
              <li key={t} className="card-dark flex gap-4 p-5 text-white/90">
                <CheckCircle2 className="mt-1 shrink-0 text-[var(--gold)]" size={20} />
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-lg text-white/85">Se você se viu em pelo menos uma dessas frases, essa imersão foi feita para você.</p>
          <p className="mt-4 text-lg text-white/75">E quem vai te guiar por essa transformação não é um consultor de teoria. É um contador que vive isso todos os dias.</p>
        </div>
      </section>

      {/* SEÇÃO 6 — Quem conduz */}
      <section className="px-6 py-10 md:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
          <div className="md:w-full">
            <img src={andersonMaisse} alt="Anderson Maisse no palco durante palestra" className="w-full rounded-2xl object-cover" loading="lazy" />
          </div>
          <div>
            <p className="section-label mb-4">Mentor</p>
            <h2 className="text-2xl md:text-3xl lg:text-[2.35rem]">Quem Vai <span className="gold-text">Conduzir Você Nessa Imersão</span></h2>
            <div className="mt-10 card-dark p-8 md:p-10">
              <div className="space-y-6 text-lg leading-relaxed text-white/85">
                <p><strong className="text-white">Anderson Maisse</strong> começou com 80 clientes em 2018. Hoje, a AM Contabilidade Online atende mais de 1.200 empresas e está entre os 2% maiores escritórios contábeis do Brasil — com faturamento anual próximo a R$ 5 milhões e margem líquida de 40%.</p>
                <p>Criador da metodologia Contabilidade Digital, já impactou mais de 2.500 alunos, 300 contadores mentorados e 2.000 profissionais em palestras pelo país.</p>
                <p>Anderson não ensina teoria. Ele mostra o que faz, como faz e por que funciona — com números, processos e estrutura.</p>
              </div>
              <div className="mt-10 grid grid-cols-3 gap-6 border-t border-white/10 pt-8 text-center">
                {[
                  { n: "1.200+", l: "Clientes" },
                  { n: "40%", l: "Margem líquida" },
                  { n: "2.500+", l: "Alunos" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="text-2xl font-extrabold text-[var(--gold)] md:text-3xl">{s.n}</div>
                    <div className="mt-1 text-xs uppercase tracking-[0.2em] text-white/60">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <p className="mx-auto mt-8 max-w-4xl text-center text-lg text-white/75">Agora que você conhece o método, o conteúdo e quem vai conduzir, vamos falar sobre o acesso.</p>
      </section>

      {/* SEÇÃO 7 — Pricing */}
      <section id="inscricao" className="hero-bg px-6 py-10 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-label mb-4">Investimento</p>
          <h2 className="text-2xl md:text-3xl lg:text-[2.35rem]">Uma Imersão Desse Nível, Por Um <span className="gold-text">Valor Que Não Faz Sentido Recusar</span></h2>
          <div className="mt-10 space-y-6 text-left text-lg leading-relaxed text-white/85">
            <p>Contadores pagam R$ 3.000 a R$ 10.000 em consultorias para aprender <em>uma fração</em> do que será apresentado nesta imersão.</p>
            <p>Outros investem meses tentando descobrir sozinhos o que funciona — errando, perdendo dinheiro e perdendo clientes no caminho.</p>
            <p>Você vai ter acesso a um evento ao vivo, com conteúdo prático, aplicável e direto ao ponto.</p>
          </div>

          <div className="card-dark mx-auto mt-12 max-w-lg p-10 text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-white/60">O investimento?</p>
            <p className="mt-4 text-xl text-white/60 line-through">De: R$ 197</p>
            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-white/70">por</p>
            <p className="mt-1 text-7xl font-extrabold text-[var(--gold)] md:text-8xl">R$ 27</p>
            <p className="mt-3 text-sm text-white/70">Uma única vez. Sem mensalidade. Sem taxa escondida.</p>
            <div className="mt-8">
              <CtaButton label="GARANTIR MINHA VAGA POR R$ 27" href="https://pay.kiwify.com.br/B3gAnG7" />
            </div>
          </div>

          <p className="mt-10 text-white/80">Por menos do que você cobra por uma hora de serviço, você vai ter acesso ao método que pode transformar o seu faturamento, a sua margem e a sua operação.</p>
        </div>
      </section>

      {/* SEÇÃO 8 — Escassez */}
      <section className="px-6 py-10 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="card-dark border-[var(--gold)]/40 p-10">
            <p className="section-label mb-4">Vagas limitadas</p>
            <h2 className="text-2xl md:text-4xl">O valor promocional de <span className="gold-text">R$ 27</span> tem limite. São <span className="gold-text">500 vagas</span> disponibilizadas.</h2>
            <ul className="mt-8 space-y-3 text-left text-sm text-white/85">
              {[
                "Evento online e ao vivo — 13 de junho",
                "Acesso ao grupo exclusivo de WhatsApp",
                "Conteúdo prático e implementável",
                "Pagamento 100% seguro via Kiwify",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[var(--gold)]" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 space-y-5 text-left text-lg leading-relaxed text-white/85">
              <p><strong className="text-white">Vagas limitadas: 500 lugares na sala do Zoom.</strong> Quando atingirmos a capacidade, as inscrições serão encerradas. Sem lista de espera.</p>
              <p>Se o botão abaixo ainda está ativo, sua vaga está disponível.</p>
            </div>
            <div className="mt-8">
              <CtaButton label="QUERO MINHA VAGA AGORA POR R$ 27" />
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 9 — FAQ */}
      <section className="bg-[#00161F] px-6 py-10 md:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="section-label mb-4 text-center">FAQ</p>
          <h2 className="text-center text-2xl md:text-3xl lg:text-[2.35rem]">Perguntas <span className="gold-text">Frequentes</span></h2>
          <div className="mt-12 space-y-4">
            {[
              { q: "Quando acontece a imersão?", a: "Dia 13 de junho, das 09 às 15h, ao vivo e online. O horário será divulgado no grupo exclusivo de WhatsApp logo após a sua inscrição." },
              { q: "Como vou receber o acesso?", a: "Após o pagamento, você será direcionado para o grupo exclusivo de WhatsApp. É nesse grupo que o link da transmissão ao vivo será compartilhado." },
              { q: "Vai ter gravação disponível?", a: "A proposta da imersão é experiência ao vivo. Porém se você quiser ter acesso a gravação, ela será disponibilizada no ato da compra do ingresso por R$ 97,00." },
              { q: "Eu sou recém-formado / ainda não tenho escritório. Serve para mim?", a: "Se você pretende ter um escritório lucrativo e bem posicionado, esse conteúdo vai te dar uma vantagem que a maioria dos contadores leva anos para construir. Então, sim." },
              { q: "Já fiz outros cursos e não tive resultado. Por que esse seria diferente?", a: "Porque isso não é um curso. É uma imersão ao vivo com um contador que aplica tudo no próprio escritório. Cada passo vem de uma operação real com 1.200 clientes e 40% de margem. Você não vai aprender conceitos — vai sair com processos prontos para usar no dia seguinte." },
              { q: "Meu escritório é pequeno, com menos de 30 clientes. Isso se aplica a mim?", a: "Esse é o melhor momento para aplicar. Quanto menor a base, mais rápido você implementa e vê resultado. Boa parte do método começa justamente com a carteira que você já tem — e 30 clientes são mais que suficientes para gerar receita nova no primeiro mês." },
              { q: "Isso funciona para contadores do Simples Nacional ou é só para Lucro Presumido/Real?", a: "Funciona para qualquer regime. Os serviços adicionais, o modelo de proposta e a estrutura de time se aplicam independente do porte ou do regime tributário do seu cliente." },
              { q: "O conteúdo é só teoria?", a: "Não. Tudo que será apresentado vem de um escritório real, com resultados reais. Você vai sair com processos, estruturas e modelos que pode aplicar no dia seguinte." },
              { q: "R$ 27 mesmo? Qual é a pegadinha?", a: "Nenhuma. O valor é acessível de propósito. O objetivo é colocar o máximo de contadores sérios dentro dessa imersão. Se o conteúdo for bom — e vai ser — a relação se constrói a partir dali." },
            ].map((f) => (
              <details key={f.q} className="card-dark group p-6 [&[open]>summary>span:last-child]:rotate-45">
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-lg font-bold text-white">
                  <span>{f.q}</span>
                  <span className="text-2xl text-[var(--gold)] transition-transform">+</span>
                </summary>
                <p className="mt-4 leading-relaxed text-white/80">{f.a}</p>
              </details>
            ))}
          </div>
          <p className="mt-12 text-center text-white/75">Perguntas respondidas. Dúvidas resolvidas. Agora, a decisão é só sua.</p>
        </div>
      </section>

      {/* SEÇÃO 10 — Fechamento */}
      <section className="hero-bg px-6 py-10 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-label mb-4">A decisão</p>
          <h2 className="text-2xl md:text-3xl lg:text-[2.35rem]">Duas Opções. <span className="gold-text">Uma Decisão</span></h2>
          <div className="mt-10 space-y-6 text-left text-lg leading-relaxed text-white/85">
            <p>Você pode fechar essa página e voltar para as mesmas 14 horas, o mesmo faturamento travado, os mesmos clientes que pedem desconto.</p>
            <p>Ou pode investir <strong className="gold-text">R$ 27</strong> e dedicar uma tarde para ver, com clareza, o caminho que os contadores mais lucrativos do Brasil já percorrem.</p>
            <p className="text-2xl text-white"><strong>A escolha é sua. E é agora.</strong></p>
          </div>
          <div className="mt-10">
            <CtaButton label="QUERO ENTRAR NA IMERSÃO CONTADOR DIGITAL DE ELITE" />
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
          <p className="text-sm text-white/50" style={{ fontFamily: "var(--font-legal)" }}>© 2026 Anderson Maisse — Todos os direitos reservados.</p>
          <div className="text-sm text-white/50 md:text-right" style={{ fontFamily: "var(--font-legal)" }}>
            <p>Transformamos conhecimento em negócios lucrativos.</p>
            <p>Desenvolvido por <a href="https://agwebi.com.br/" target="_blank" rel="noopener noreferrer" className="text-white/70 underline-offset-2 transition-colors hover:text-white hover:underline">AGWEBi</a></p>
          </div>
        </div>
      </footer>
    </main>
  );
}
