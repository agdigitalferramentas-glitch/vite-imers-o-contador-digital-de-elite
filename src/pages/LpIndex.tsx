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
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!href.startsWith("#")) return;
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
    <a href={href} onClick={handleClick} className="btn-gold">
      {label}
    </a>
  );
}

export default function Index() {
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
              Descubra por que alguns contadores faturam <span className="gold-text">10x mais</span> que você com menos clientes e menos horas de trabalho.
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-sm leading-relaxed text-white/80 md:text-xl">
              No dia 13 de junho, <strong className="text-white">de 09 às 15 horas</strong>, Anderson Maisse vai te mostrar ao vivo o que esses profissionais fazem de diferente: como criam novos serviços dentro da própria carteira, estruturam processos que funcionam sem eles e aumentam o lucro do escritório — sem aumentar a equipe.
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
              <p>Seu <strong className="text-white">faturamento cresce</strong>, mas o <strong className="text-white">lucro não acompanha</strong>. Cada cliente novo traz mais trabalho, mais demanda, mais dor de cabeça…</p>
              <p>…e no fim do mês, quando você olha o extrato, fica a pergunta: <em className="gold-text">"pra onde foi o dinheiro?"</em></p>
              <p>Enquanto isso, sua rotina se repete:</p>
              <ul className="space-y-3 border-l-2 border-[var(--gold)]/40 pl-6">
                {[
                  "Clientes que ligam só para reclamar de imposto ou pedir desconto.",
                  'Propostas que você manda com medo de "assustar" o cliente.',
                  "Uma equipe que depende de você para cada decisão.",
                  "Zero tempo para pensar em estratégia, crescimento ou inovação.",
                ].map((t) => (<li key={t} className="text-white/85">→ {t}</li>))}
              </ul>
              <p>Você se formou para ser um profissional valorizado. <strong className="text-white">Mas virou refém do operacional.</strong></p>
              <p>E o pior: <strong className="text-white">você sabe que precisa mudar</strong>, mas não sabe por onde começar.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3 */}
      <section className="px-6 py-10 md:py-24">
        <div className="mx-auto max-w-3xl rounded-3xl bg-[#FDF8ED] p-8 md:p-14 shadow-2xl">
          <h2 className="text-2xl md:text-3xl lg:text-[2.35rem] text-[var(--background)]">O Problema Não É Falta de Cliente. O Problema É o <span className="gold-text">Modelo.</span></h2>
          <div className="mt-10 space-y-6 text-lg leading-relaxed text-[var(--background)]/85">
            <p>Vamos ser diretos.</p>
            <p>Se você precisa de <em>mais clientes</em> toda vez que quer ganhar <em>mais dinheiro</em>, algo está quebrado.</p>
            <p>Porque o modelo que você aprendeu na faculdade e que a maioria dos contadores segue foi construído para gerar volume, não lucro.</p>
            <p>Você aprendeu a vender obrigações acessórias. A competir por preço. A dizer "sim" para qualquer empresa que aparece, independente do porte, do perfil ou do quanto ela paga.</p>
            <p>O resultado?</p>
            <p>Um contador que fatura R$ 50 mil, R$ 80 mil, até R$ 100 mil por mês, mas que opera com margem apertada, equipe inchada e sem conseguir tirar férias.</p>
            <p>Agora olha para o outro lado.</p>
            <p>Existem contadores com <em>menos clientes que você</em> faturando 2x, 3x mais. Com menos funcionários. Com mais margem. Trabalhando de 6 a 8 horas por dia.</p>
            <p>A diferença não é talento. Não é sorte. Não é localização.</p>
            <p className="text-xl">A diferença é <strong className="gold-text">posicionamento, estrutura e visão estratégica.</strong></p>
            <p>E se você ainda não tem certeza de que está no modelo errado, faça o teste a seguir. Ele leva 10 segundos e diz mais sobre seu negócio do que qualquer relatório contábil.</p>
          </div>
        </div>
      </section>

      {/* SEÇÃO 4 */}
      <section className="px-6 py-10 md:py-24">
        <div className="mx-auto max-w-3xl">
          <img src={quantoValeSeuTempo} alt="Mãos segurando um relógio antigo com moedas de ouro" className="mb-8 w-full rounded-2xl object-cover border border-[#f0cb6d]" loading="lazy" />
          <h2 className="text-2xl md:text-3xl lg:text-[2.35rem]">Quanto Vale a Sua <span className="gold-text">Hora Hoje?</span></h2>
          <div className="mt-10 space-y-6 text-lg leading-relaxed text-white/85">
            <p>Faça essa conta rápida.</p>
            <div className="card-dark p-8">
              <p className="text-white/90">Pegue seu lucro líquido do mês. Divida pelas horas que você trabalhou. Esse número é o que você realmente ganha por hora de vida dedicada ao seu escritório.</p>
            </div>
            <p>Se o resultado ficou abaixo de <strong className="gold-text">R$ 50 por hora</strong>, pense nisso: você ganha menos do que um motorista de aplicativo em cidade grande. Com mais responsabilidade, mais estudo e mais risco. Você carrega CNPJ de dezenas de empresas nas costas, responde ao Fisco, gerencia equipe, atende cliente no fim de semana — e o retorno por hora é esse.</p>
            <p>Essa conta dói. Mas ela revela com precisão onde o problema mora.</p>
            <p>Porque o contador que fatura 10x mais não trabalha mais horas. Ele trabalha com mais inteligência. Cria serviços que o cliente enxerga valor. Monta propostas que vendem por ele. Estrutura processos que fazem a operação funcionar sem depender dele a cada passo.</p>
            <p>Ele não precisa de 200 clientes pagando pouco. Ele precisa de uma operação inteligente que gere mais lucro com a base que já tem.</p>
            <p>E ele sabe exatamente como montar isso.</p>
            <p className="text-xl text-white">A boa notícia? <span className="gold-text">Você não precisa descobrir sozinho.</span></p>
          </div>
        </div>
      </section>

      {/* SEÇÃO 5 */}
      <section className="hero-bg px-6 py-10 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="section-label mb-4">Imersão online e ao vivo</p>
          <h2 className="text-2xl md:text-3xl lg:text-[2.35rem]">Existe Um Método Para Sair Dessa Conta Que Não Fecha. E Você Vai <span className="gold-text">Conhecer Ele Ao Vivo.</span></h2>
          <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-white/85">Uma única tarde. Um sistema testado. Tudo que separa contadores que sobrevivem de contadores que lucram — <em className="gold-text">aplicável a partir do dia seguinte</em>.</p>
          <div className="mt-10 space-y-5 text-left text-lg leading-relaxed text-white/85">
            <p>Essa é a <strong className="gold-text">Imersão Contador Digital de Elite.</strong></p>
            <p>No dia <strong className="text-white">13 de junho</strong>, de <strong className="text-white">09 às 15h</strong>, Anderson Maisse vai abrir ao vivo o método que usou para transformar a AM Contabilidade de um escritório com 80 clientes em uma operação com mais de 1.200 clientes, faturamento próximo a R$ 5 milhões anuais e margem líquida de 40%.</p>
            <p>Mas o que vai mudar seu jogo não são os números dele.</p>
            <p className="text-xl">É o que você vai <em className="gold-text">aplicar na sua operação</em> a partir do dia seguinte.</p>
          </div>
        </div>
      </section>

      {/* SEÇÃO 6 — Passos */}
      <section className="px-6 py-10 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-label mb-4">O conteúdo</p>
            <h2 className="text-2xl md:text-3xl lg:text-[2.35rem]">O Que Você Vai Sair Dessa Imersão <span className="gold-text">Sabendo Fazer</span></h2>
          </div>

          <div className="mt-16 space-y-6">
            {[
              { step: "PASSO 1", title: "Aumento Imediato de Faturamento", sub: "Com os serviços que você já pode entregar, mas ainda não oferece.", body: "Dentro da sua carteira atual existem entre 8 e 10 serviços que seus clientes precisam, estão dispostos a pagar, e que ninguém nunca ofereceu para eles. Anderson vai te mostrar quais são esses serviços e como ativar essas receitas sem captar um único cliente novo. Resultado: dinheiro novo no caixa antes do mês acabar." },
              { step: "PASSO 2", title: "Marketing Com Dinheiro Que Agora Você Já Tem", sub: "Primeiro o caixa, depois o investimento.", body: "A maioria dos contadores não investe em marketing porque tira de um dinheiro que já está comprometido. Com o caixa gerado no Passo 1, essa equação muda. Você vai entender como montar um motor de aquisição que gera demanda constante sem comprometer sua operação." },
              { step: "PASSO 3", title: "A Proposta Que Fecha Sem Pedir Desconto", sub: "Marketing gera lead. Proposta fecha negócio.", body: 'Lead na porta sem proposta que converte é desperdício. Você vai conhecer o modelo de proposta comercial que muda a forma como o cliente lê o seu orçamento. Estrutura, sequência, apresentação do escopo — tudo montado para o cliente dizer "sim" sem pechinchar. E vai sair da imersão com a ferramenta pronta para usar.' },
              { step: "PASSO 4", title: "Processos, Contratos e IA na Sua Operação", sub: "Crescer sem virar refém do caos operacional.", body: "Quando você cresce sem processo, cada cliente novo vira um incêndio. Anderson vai te mostrar o fluxo completo de entrada de cliente, da automação ao contrato, da inteligência artificial integrada ao onboarding — eliminando o trabalho repetitivo que trava o seu time e te prende no operacional." },
              { step: "PASSO 5", title: "O Segredo dos 40% de Margem", sub: "O que separa contabilidade que fatura de contabilidade que lucra.", body: "Você não vai colocar um profissional caro para atender cliente pequeno. E não vai deixar um júnior cuidando de um cliente estratégico. Anderson vai abrir a engrenagem exata de separação por perfil de cliente e nível de time que gera 40% de margem líquida. É o que os contadores mais lucrativos do país aplicam — enquanto a maioria trabalha o dobro para lucrar a metade." },
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
                    <p className="mt-2 italic text-white/60">{p.sub}</p>
                    <p className="mt-4 leading-relaxed text-white/85">{p.body}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-12 text-center text-lg text-white/75">Agora, será que esse conteúdo faz sentido para o seu momento? Confere aqui:</p>
        </div>
      </section>

      {/* SEÇÃO 7 */}
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

      {/* SEÇÃO 8 */}
      <section className="px-6 py-10 md:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
          <div className="md:w-full">
            <img src={andersonMaisse} alt="Anderson Maisse no palco durante palestra" className="w-full rounded-2xl object-cover" loading="lazy" />
          </div>
          <div>
            <p className="section-label mb-4">Mentor</p>
            <h2 className="text-2xl md:text-3xl lg:text-[2.35rem]">Quem Vai <span className="gold-text">Conduzir Essa Imersão</span></h2>
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

      {/* SEÇÃO 9 — Pricing */}
      <section className="hero-bg px-6 py-10 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-label mb-4">Investimento</p>
          <h2 className="text-2xl md:text-3xl lg:text-[2.35rem]">Uma Imersão Desse Nível, Por Um <span className="gold-text">Valor Que Não Faz Sentido Recusar</span></h2>
          <div className="mt-10 space-y-6 text-left text-lg leading-relaxed text-white/85">
            <p>Contadores pagam R$ 3.000 a R$ 10.000 em consultorias para aprender <em>uma fração</em> do que será apresentado nesta imersão.</p>
            <p>Outros investem meses tentando descobrir sozinhos o que funciona — errando, perdendo dinheiro e perdendo clientes no caminho.</p>
            <p>Você vai ter acesso a um evento ao vivo, com conteúdo prático, aplicável e direto ao ponto.</p>
          </div>

          <div id="inscricao" className="card-dark mx-auto mt-12 max-w-lg p-10 text-center scroll-mt-6">
            <p className="text-sm uppercase tracking-[0.2em] text-white/60">O investimento?</p>
            <p className="mt-4 text-xl text-white/60 line-through">De: R$ 197</p>
            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-white/70">por</p>
            <p className="mt-1 text-7xl font-extrabold text-[var(--gold)] md:text-8xl">R$ 27</p>
            <p className="mt-3 text-sm text-white/70">Uma única vez. Sem mensalidade. Sem taxa escondida.</p>
            <div className="mt-8">
              <CtaButton label="GARANTIR MINHA VAGA POR R$ 27" href="https://pay.kiwify.com.br/B3gAnG7" />
            </div>
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
          </div>

          <p className="mt-10 text-white/80">Por menos do que você cobra por uma hora de serviço, você vai ter acesso ao método que pode transformar o seu faturamento, a sua margem e a sua operação.</p>
          <p className="mt-4 text-white/60">Mas tem um detalhe que você precisa saber antes de decidir "depois":</p>
        </div>
      </section>

      {/* SEÇÃO 10 — Escassez */}
      <section className="px-6 py-10 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="card-dark border-[var(--gold)]/40 p-10">
            <p className="section-label mb-4">Vagas limitadas</p>
            <h2 className="text-2xl md:text-4xl">O valor promocional de <span className="gold-text">R$ 27</span> tem limite. São <span className="gold-text">500 vagas</span> disponibilizadas.</h2>
            <div className="mt-8 space-y-5 text-left text-lg leading-relaxed text-white/85">
              <p>A imersão será em uma sala exclusiva no Zoom. Quando atingirmos a capacidade máxima, as inscrições serão encerradas. Sem lista de espera. Sem exceção.</p>
              <p>Quem estiver dentro, receberá o link da transmissão ao vivo no dia 13 de junho. Quem ficou de fora, ficou de fora.</p>
              <p>Se você está lendo isso e o botão abaixo ainda está ativo, sua vaga está disponível.</p>
            </div>
            <div className="mt-8">
              <CtaButton label="QUERO MINHA VAGA AGORA POR R$ 27" />
            </div>
          </div>
          <p className="mt-10 text-white/70">Ainda tem alguma dúvida? Antes de sair dessa página, leia as respostas abaixo. Provavelmente a sua pergunta já está aqui.</p>
        </div>
      </section>

      {/* SEÇÃO 11 — FAQ */}
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

      {/* SEÇÃO 12 — Fechamento */}
      <section className="hero-bg px-6 py-10 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-label mb-4">A decisão</p>
          <h2 className="text-2xl md:text-3xl lg:text-[2.35rem]">Duas Opções. <span className="gold-text">Uma Decisão</span></h2>
          <div className="mt-10 space-y-6 text-left text-lg leading-relaxed text-white/85">
            <p>Você pode fechar essa página e voltar para a mesma rotina. As mesmas 14 horas. O mesmo faturamento travado. Os mesmos clientes que pedem desconto. A mesma sensação de que deveria estar mais à frente.</p>
            <p>Ou você pode investir <strong className="gold-text">R$ 27</strong> e dedicar uma tarde do dia 13 de junho para ver, com clareza, o caminho que contadores mais lucrativos já percorrem.</p>
            <p>Na imersão, você vai enxergar o mapa completo: os serviços que geram receita imediata, o marketing que traz clientes certos, a proposta que fecha sem desconto, os processos que tiram você do operacional e a estrutura que gera margem de verdade.</p>
            <p>E quando você quiser percorrer esse caminho com suporte, ferramentas e uma comunidade de mais de 2.000 contadores ao lado, a CCD estará ali — pronto para te acompanhar na implementação.</p>
            <p>Mas o primeiro passo é esse. Uma imersão. Uma tarde. R$ 27.</p>
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
