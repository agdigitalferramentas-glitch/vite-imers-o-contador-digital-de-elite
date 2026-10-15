import { useEffect, useRef } from "react";
import { CHECKOUT_URL, getCheckoutUrl } from "@/lib/checkout";
import { CheckCircle2, Zap } from "lucide-react";
import heroAnderson from "@/assets/hero-anderson.webp";
import andersonMaisse from "@/assets/anderson-maisse.webp";
import perdendoTempo from "@/assets/perdendo-tempo.webp";
import quantoValeSeuTempo from "@/assets/quanto-vale-seu-tempo.webp";
import logoContadorDigitalElite from "@/assets/logo-contador-digital-elite-azul.webp";

const CTA_LABEL = "QUERO MINHA VAGA POR R$ 27";

function CtaButton({ label = CTA_LABEL, href = "#inscricao" }: { label?: string; href?: string }) {
  const resolvedHref = href === CHECKOUT_URL ? getCheckoutUrl(window.location.search) : href;
  const handleClick = (e: import("react").MouseEvent<HTMLAnchorElement>) => {
    if (!href.startsWith("#")) {
      if (href === CHECKOUT_URL) e.currentTarget.href = getCheckoutUrl(window.location.search);
      return;
    }
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    const scrollTo = () => {
      const top = el.getBoundingClientRect().top + window.scrollY - 24;
      window.scrollTo({ top, behavior: "smooth" });
    };
    scrollTo();
    // Re-ajusta após imagens/layout assentarem (lazy-load pode deslocar a página)
    window.setTimeout(scrollTo, 350);
    window.setTimeout(scrollTo, 800);
    if (history.replaceState) history.replaceState(null, "", href);
  };
  return (
    <a href={resolvedHref} onClick={handleClick} className="btn-cta">
      {label}
    </a>
  );
}

function Star() {
  return (
    <svg className="home-marquee-star" viewBox="0 0 24 24" width="12" height="12" fill="currentColor" aria-hidden="true">
      <path d="M12 0C12.9 6.6 17.4 11.1 24 12 17.4 12.9 12.9 17.4 12 24 11.1 17.4 6.6 12.9 0 12 6.6 11.1 11.1 6.6 12 0Z" />
    </svg>
  );
}

export default function Index() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    document.title = "Imersão Contador Digital de Elite — Anderson Maisse | 11 de novembro";
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
    <main ref={rootRef} className="theme-light min-h-screen bg-background text-foreground">
      <div className="home-marquee w-full bg-primary py-2 text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground">
        <span className="sr-only">IMERSÃO ONLINE E AO VIVO — 11 DE NOVEMBRO</span>
        <div className="home-marquee-track" aria-hidden="true">
          {[0, 1].map((g) => (
            <div key={g} className="home-marquee-group">
              {Array.from({ length: 6 }).map((_, i) => (
                <span key={i} className="home-marquee-item">
                  <span>IMERSÃO ONLINE E AO VIVO</span>
                  <Star />
                  <span>11 DE NOVEMBRO</span>
                  <Star />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* SEÇÃO 1 — HERO */}
      <section
        className="hero-section home-hero relative overflow-hidden bg-background px-6 pt-10 md:pt-14"
        style={{
          "--hero-bg-mobile": `url(${heroAnderson})`,
          "--hero-bg-desktop": `url(${heroAnderson})`,
        } as Record<string, string>}
      >
        <div className="mx-auto w-full max-w-6xl">
          <div className="min-[1200px]:w-1/2">
            <img src={logoContadorDigitalElite} alt="Imersão Contador Digital de Elite" className="mb-6 h-auto w-48 md:w-60" loading="eager" />
            <span className="mb-4 inline-block rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-accent-ink">
              EVENTO EXCLUSIVO PARA CONTADORES
            </span>
            <h1 className="text-balance text-2xl leading-[1.12] md:text-3xl lg:text-[2.35rem]">
              Por que alguns contadores faturam <span className="gold-text">10x mais</span> que você com menos clientes e menos horas?
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground md:text-xl">
              Dia 11/11, <strong className="text-foreground">às 19h51</strong>, Anderson Maisse mostra ao vivo como criar novos serviços na própria carteira, montar processos que rodam sem você e aumentar o lucro sem contratar.
            </p>

            <div className="mt-8 flex flex-col items-start gap-4">
              <CtaButton />
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2 — DOR */}
      <section className="px-6 py-10 md:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
          <div className="order-last md:order-first md:sticky md:top-24 md:self-start">
            <img src={perdendoTempo} alt="Contador exausto trabalhando à noite cercado de papelada" className="w-full rounded-lg object-cover home-image" loading="lazy" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-[2.35rem]">Você trabalha 14 horas por dia e ainda sente que está <span className="gold-text">ficando para trás?</span></h2>
            <div className="mt-10 space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>Faculdade, CRC, escritório aberto, clientes conquistados. E a conta ainda não fecha.</p>
              <p>O <strong className="text-foreground">faturamento cresce, o lucro não</strong>. Cada cliente novo traz mais trabalho, e no fim do mês fica a pergunta: <em className="gold-text">"pra onde foi o dinheiro?"</em></p>
              <ul className="navy-card space-y-3 border-l-4 p-6 md:p-8">
                {[
                  "Clientes que só ligam para reclamar de imposto ou pedir desconto.",
                  'Propostas enviadas com medo de "assustar".',
                  "Uma equipe que depende de você para tudo.",
                  "Zero tempo para estratégia.",
                ].map((t) => (<li key={t} className="text-muted-foreground">→ {t}</li>))}
              </ul>
              <p>Você virou <strong className="text-foreground">refém do operacional</strong>. Sabe que precisa mudar, só não sabe por onde começar.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3 — O PROBLEMA É O MODELO */}
      <section className="navy-section px-6 py-14 md:py-28">
        <div className="home-editorial navy-card mx-auto max-w-4xl px-6 py-10 md:px-14 md:py-14">
          <h2 className="text-2xl md:text-3xl lg:text-[2.35rem] text-foreground">Você não precisa de mais clientes. O problema é o <span className="gold-text">modelo.</span></h2>
          <div className="mt-10 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>Se você precisa de <em>mais clientes</em> toda vez que quer ganhar <em>mais dinheiro</em>, algo está quebrado.</p>
            <p>O modelo da faculdade foi feito para gerar volume, não lucro: vender obrigação acessória, competir por preço, aceitar qualquer cliente.</p>
            <p>Resultado: R$ 50 mil a R$ 100 mil por mês com margem apertada, equipe inchada e sem férias.</p>
            <p>Enquanto isso, contadores com <em>menos clientes que você</em> faturam 2x, 3x mais, com equipe menor e jornada de 6 a 8 horas.</p>
            <p className="text-xl">Não é talento nem sorte. É <strong className="gold-text">posicionamento, estrutura e visão estratégica.</strong></p>
            <p>Na dúvida se está no modelo errado? Faça o teste abaixo. Leva 10 segundos.</p>
          </div>
        </div>
      </section>

      {/* SEÇÃO 4 — QUANTO VALE A SUA HORA HOJE? */}
      <section className="px-6 py-10 md:py-24">
        <div className="mx-auto max-w-3xl">
          <img src={quantoValeSeuTempo} alt="Mãos segurando um relógio antigo com moedas de ouro" className="mb-8 w-full rounded-lg object-cover border border-primary/30" loading="lazy" />
          <h2 className="text-2xl md:text-3xl lg:text-[2.35rem]">Quanto vale a sua <span className="gold-text">hora hoje?</span></h2>
          <div className="mt-10 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <div className="navy-card card-dark p-8">
              <p className="text-muted-foreground"><strong className="text-foreground">Lucro líquido do mês ÷ horas trabalhadas</strong> = quanto você realmente ganha por hora.</p>
            </div>
            <p>Deu menos de <strong className="gold-text">R$ 50</strong>? Você ganha menos que um motorista de aplicativo, carregando o CNPJ de dezenas de empresas, o Fisco, a equipe e cliente no fim de semana.</p>
            <p>O contador que fatura 10x mais não trabalha mais horas. Ele cria serviços que o cliente valoriza, usa propostas que vendem sozinhas e processos que não dependem dele. Não precisa de 200 clientes pagando pouco, e sim de mais lucro com a base que já tem.</p>
            <p className="text-xl text-foreground">A boa notícia? <span className="gold-text">Você não precisa descobrir isso sozinho.</span></p>
          </div>
        </div>
      </section>

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

          <div className="mt-16 space-y-6">
            {[
              { step: "PASSO 1", title: "Novos serviços que geram caixa na carteira que você já tem.", body: "Dentro da sua carteira atual existem entre 8 e 10 serviços que seus clientes precisam, estão dispostos a pagar, e que ninguém nunca ofereceu para eles. Anderson vai te mostrar quais são esses serviços e como ativar essas receitas sem captar um único cliente novo. Resultado: dinheiro novo no caixa antes do mês acabar." },
              { step: "PASSO 2", title: "Marketing com dinheiro que você já tem", body: "Com o caixa do Passo 1, você monta um motor de aquisição constante sem apertar a operação." },
              { step: "PASSO 3", title: "A proposta que fecha sem pedir desconto", body: "O modelo de proposta que muda como o cliente lê o seu orçamento. Você sai com ele pronto para usar." },
              { step: "PASSO 4", title: "Processos que crescem sem virar incêndio", body: "O fluxo completo de entrada de cliente (automação, contrato, IA e onboarding) para tirar você do operacional." },
              { step: "PASSO 5", title: "O segredo dos 40% de margem", body: "Como separar clientes por perfil e equipe por nível: nada de profissional caro em cliente pequeno, nem júnior em cliente estratégico." },
            ].map((p) => (
              <article key={p.step} className="navy-card card-dark p-8 md:p-10">
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

      {/* SEÇÃO 8 — MENTOR */}
      <section className="navy-section px-6 py-14 md:py-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
          <div className="md:w-full">
            <img src={andersonMaisse} alt="Anderson Maisse no palco durante palestra" className="w-full rounded-lg object-cover" loading="lazy" />
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

      {/* SEÇÃO 9 — INVESTIMENTO */}
      <section className="hero-bg px-6 py-10 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="space-y-6 text-left text-lg leading-relaxed text-muted-foreground">
            <p>Contadores pagam de R$ 3.000 a R$ 10.000 em consultorias por <em>uma fração</em> desse conteúdo, ou perdem meses (e clientes) tentando sozinhos.</p>
            <p>Aqui é um evento ao vivo, prático e direto ao ponto.</p>
          </div>

          <div id="inscricao" className="navy-card card-dark home-price mx-auto mt-12 max-w-lg p-6 md:p-10 text-center scroll-mt-6">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">O INVESTIMENTO:</p>
            <p className="mt-4 text-xl text-muted-foreground line-through">De R$ 197</p>
            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-muted-foreground">por</p>
            <p className="mt-1 text-7xl font-extrabold text-accent-ink md:text-8xl">R$ 27</p>
            <p className="mt-3 text-sm text-muted-foreground">Pagamento único. Sem mensalidade.</p>
            <div className="mt-8">
              <CtaButton label="GARANTIR MINHA VAGA POR R$ 27" href={CHECKOUT_URL} />
            </div>
            <ul className="mt-8 space-y-3 text-left text-sm text-muted-foreground">
              {[
                "Grupo exclusivo no WhatsApp",
                "Conteúdo prático e aplicável",
                "Pagamento 100% seguro via Kiwify",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-accent-ink" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-10 text-muted-foreground">Menos do que você cobra por uma hora de serviço. Mas, antes de deixar para depois:</p>
        </div>
      </section>

      {/* SEÇÃO 10 — VAGAS LIMITADAS */}
      <section className="px-6 py-10 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="home-limited navy-card px-6 py-10 md:px-12">
            <p className="section-label mb-4">VAGAS LIMITADAS</p>
            <h2 className="text-2xl md:text-4xl">R$ 27 só para as primeiras <span className="gold-text">500 vagas</span>.</h2>
            <div className="mt-8 space-y-5 text-left text-lg leading-relaxed text-muted-foreground">
              <p>A imersão acontece em uma sala fechada no Zoom. Lotou, as inscrições encerram. Sem lista de espera.</p>
              <p>Inscritos recebem o link da transmissão no dia 11 de novembro.</p>
              <p>Se o botão abaixo ainda está ativo, ainda há vaga.</p>
            </div>
            <div className="mt-8">
              <CtaButton label="QUERO MINHA VAGA AGORA POR R$ 27" />
            </div>
          </div>
          <p className="mt-10 text-muted-foreground">Ficou alguma dúvida? As respostas estão logo abaixo.</p>
        </div>
      </section>

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

      {/* SEÇÃO 12 — A DECISÃO */}
      <section className="navy-section px-6 py-14 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-label mb-4">A DECISÃO</p>
          <h2 className="text-2xl md:text-3xl lg:text-[2.35rem]">Duas opções. <span className="gold-text">Uma decisão.</span></h2>
          <div className="mt-10 space-y-6 text-left text-lg leading-relaxed text-muted-foreground">
            <p>Fechar esta página e seguir com as mesmas 14 horas, o mesmo faturamento travado e os mesmos clientes pedindo desconto.</p>
            <p>Ou investir <strong className="gold-text">R$ 27</strong> e, no dia 11 de novembro, ver o mapa completo: serviços que geram receita imediata, marketing que atrai os clientes certos, proposta que fecha sem desconto, processos que tiram você do operacional e estrutura que gera margem de verdade.</p>
            <p>E, se quiser implementar com suporte, ferramentas e uma comunidade de mais de 2.000 contadores, a CCD vai estar lá.</p>
            <p className="text-2xl text-foreground">O primeiro passo é este: <strong>uma noite, R$ 27.</strong> A escolha é sua.</p>
          </div>
          <div className="mt-10">
            <CtaButton label="QUERO ENTRAR NA IMERSÃO CONTADOR DIGITAL DE ELITE" />
          </div>
        </div>
      </section>

      {/* SEÇÃO 13 — RODAPÉ */}
      <footer className="border-t border-border px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
          <p className="text-sm text-muted-foreground" style={{ fontFamily: "var(--font-legal)" }}>© 2026 Anderson Maisse — Todos os direitos reservados</p>
          <div className="text-sm text-muted-foreground md:text-right" style={{ fontFamily: "var(--font-legal)" }}>
            <p>Transformamos conhecimento em negócios lucrativos.</p>
            <p>Venha ser um expert <a href="https://agwebi.com.br/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground underline-offset-2 transition-colors hover:text-foreground hover:underline">AGWEBi</a></p>
          </div>
        </div>
      </footer>
    </main>
  );
}
