import { Check, Play, ShieldCheck } from "lucide-react";
import ResponsiveImg from "@/components/ResponsiveImg";
import { CtaButton, Eyebrow, Reveal } from "./primitives";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const steps = [
  ["01", "Novos serviços que geram caixa na carteira que você já tem", "Descubra oportunidades de novas receitas sem depender apenas de conquistar mais clientes."],
  ["02", "Marketing com o dinheiro que você já tem", "Aprenda a transformar receitas de novos serviços em estratégias para atrair clientes mais lucrativos."],
  ["03", "A proposta que fecha sem precisar pedir desconto", "Conheça um modelo de proposta que valoriza seus serviços e reduz a competição por preço."],
  ["04", "Processos que crescem sem virar incêndio", "Entenda como organizar sua operação com automação, inteligência artificial e processos que reduzem a dependência do dono."],
  ["05", "O segredo dos 40% de margem", "Conheça a estrutura utilizada por Anderson para construir uma operação contábil com 40% de margem líquida."],
];

export function Learn() {
  return (
    <section className="border-t px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl uppercase leading-tight sm:text-5xl">Uma noite para descobrir como faturar mais sem precisar trabalhar mais.</h2>
          <p className="mt-5 text-muted-foreground">Na Imersão Contador Digital de Elite, você vai conhecer 5 passos que podem mudar a maneira como seu escritório gera receita e funciona no dia a dia.</p>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map(([n, t, d], i) => (
            <Reveal key={n} delay={i * 80} className={i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}>
              <div className="group h-full rounded-2xl border bg-card p-6 transition hover:-translate-y-1 hover:border-primary">
                <span className="font-display text-4xl text-primary">{n}.</span>
                <h3 className="mt-3 text-lg font-extrabold">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 flex flex-col items-center gap-6 text-center">
          <p className="max-w-2xl font-bold">Conteúdo prático, baseado em processos aplicados em uma operação contábil real.</p>
          <CtaButton>Quero participar da imersão</CtaButton>
        </Reveal>
      </div>
    </section>
  );
}

export function Opportunity() {
  return (
    <section className="relative overflow-hidden bg-primary px-5 py-20 text-primary-foreground">
      <span className="font-display pointer-events-none absolute -right-10 top-4 select-none text-[9rem] uppercase italic leading-none opacity-10 sm:text-[14rem]">BLACK</span>
      <Reveal className="relative mx-auto max-w-3xl">
        <span className="inline-block -skew-x-6 bg-background px-3 py-1 text-xs font-extrabold uppercase tracking-widest text-foreground">Edição especial Black Friday</span>
        <h2 className="font-display mt-6 text-3xl uppercase leading-tight sm:text-5xl">Pensando em investir em algum treinamento do Anderson Maisse? Espere até 11 de novembro.</h2>
        <div className="mt-6 space-y-4 text-lg">
          <p>Estamos preparando uma condição especial de Black Friday para os contadores que querem dar o próximo passo na evolução dos seus escritórios.</p>
          <p className="font-extrabold">E ela será revelada durante a Imersão Contador Digital de Elite.</p>
          <p>Quais produtos estarão disponíveis? Quais serão os valores? Quais serão as condições especiais?</p>
          <p className="font-extrabold">Você vai descobrir tudo durante o evento.</p>
          <p>Mas atenção: você não está pagando para assistir a uma apresentação de vendas.</p>
          <p className="rounded-xl bg-background p-5 font-extrabold text-foreground">Por R$ 27, você terá acesso a uma imersão com conteúdo prático e, ainda, poderá conhecer em primeira mão a oferta especial de Black Friday.</p>
          <p>Aprenda com quem aplica. Conheça as oportunidades. E decida o que faz sentido para o seu escritório.</p>
        </div>
        <div className="mt-8"><CtaButton>Quero garantir meu acesso à Black Friday</CtaButton></div>
      </Reveal>
    </section>
  );
}

const testimonials = [
  { name: "Jobson Medeiros", img: "bf-depoimento-jobson", url: "https://youtu.be/7J-DIUGUpfQ", featured: true },
  { name: "Bruno Nascimento", img: "bf-depoimento-bruno", url: "https://youtu.be/iAezB6xcdm8" },
  { name: "Gilberto Cunha", img: "bf-depoimento-gilberto", url: "https://www.youtube.com/shorts/qiuZcIJwIXA" },
  { name: "Alesandro Damaceno", img: "bf-depoimento-alesandro", url: "https://youtu.be/STJVUHrbxhk" },
  { name: "André Ortelan", img: "bf-depoimento-andre", url: "https://youtu.be/q75kB_M_ci0" },
];

function VideoCard({ name, img, url, featured = false }: { name: string; img: string; url: string; featured?: boolean }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Assistir depoimento de ${name}`}
      className="group relative block aspect-video overflow-hidden rounded-2xl border bg-card text-left shadow-glow"
    >
      <ResponsiveImg
        name={img}
        alt={`Depoimento de ${name}`}
        width={1280}
        height={720}
        sizes={featured ? "(min-width: 768px) 768px, calc(100vw - 40px)" : "(min-width: 1024px) 270px, (min-width: 640px) 45vw, calc(100vw - 40px)"}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        style={{ objectPosition: "center 30%" }}
      />
      <span className="absolute inset-0 bg-gradient-to-t from-background via-background/35 to-background/25" />
      <span className="absolute left-0 top-0 h-1 w-16 bg-primary" />
      <span className="absolute left-0 top-0 h-16 w-1 bg-primary" />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="relative">
          <span className="absolute inset-0 rounded-full bg-primary opacity-50 blur-xl transition-opacity group-hover:opacity-90" />
          <span
            className={
              featured
                ? "relative flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-2xl transition-transform duration-300 group-hover:scale-110 md:h-20 md:w-20"
                : "relative flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-2xl transition-transform duration-300 group-hover:scale-110 md:h-14 md:w-14"
            }
          >
            <Play className={featured ? "ml-1 h-7 w-7 fill-current md:h-9 md:w-9" : "ml-0.5 h-5 w-5 fill-current md:h-6 md:w-6"} />
          </span>
        </span>
      </span>
      <span className="absolute inset-x-0 bottom-0 block p-4 md:p-5">
        <span className={`block font-extrabold leading-tight drop-shadow-lg ${featured ? "text-xl md:text-2xl" : "text-lg"}`}>{name}</span>
      </span>
    </a>
  );
}

export function Testimonials() {
  const featured = testimonials[0]!;
  const rest = testimonials.slice(1);
  return (
    <section className="bg-hero border-t px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl uppercase leading-tight sm:text-5xl">
            O que dizem os <span className="text-primary">meus alunos</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">Quem seguiu a metodologia, teve seus resultados transformados.</p>
        </Reveal>
        <Reveal delay={120} className="mx-auto mt-12 max-w-3xl">
          <VideoCard {...featured} featured />
        </Reveal>
        <Reveal delay={180} className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {rest.map((t) => (
            <VideoCard key={t.name} {...t} />
          ))}
        </Reveal>
        <Reveal delay={240}>
          <p className="mx-auto mt-14 max-w-2xl text-balance text-center text-xl font-bold md:text-2xl">
            Você pode ser o próximo a ter esses resultados. <span className="whitespace-nowrap text-primary">A questão é: você quer?</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function Authority() {
  const stats = ["+1.200 clientes atendidos", "40% de margem líquida", "+4.000 alunos"];
  return (
    <section className="px-5 py-20">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
        <Reveal className="relative order-2 mx-auto w-full max-w-sm md:order-1 md:max-w-none">
          <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-2xl border-2 border-primary" />
          <ResponsiveImg name="bf-maisse-bio" alt="Anderson Maisse" width={1299} height={1920} sizes="(min-width: 1152px) 552px, (min-width: 768px) 45vw, (min-width: 424px) 384px, calc(100vw - 40px)" className="relative w-full rounded-2xl object-cover" />
        </Reveal>
        <Reveal className="order-1 md:order-2">
          <h2 className="font-display text-3xl uppercase sm:text-5xl">Quem vai conduzir essa imersão?</h2>
          <p className="font-display mt-4 text-2xl uppercase text-primary">Anderson Maisse</p>
          <p className="mt-2 font-semibold">Fundador da AM Contabilidade Online e criador da metodologia Contabilidade Digital.</p>
          <p className="mt-4 text-muted-foreground">Anderson começou com 80 clientes em 2018 e construiu uma operação que hoje atende mais de 1.200 empresas, com faturamento próximo de R$ 5 milhões por ano.</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s} className="rounded-xl border bg-card p-4 text-center text-sm font-extrabold">{s}</div>
            ))}
          </div>
          <p className="mt-6 text-muted-foreground">Nesta imersão, ele vai compartilhar estratégias e processos utilizados no próprio escritório para gerar novas receitas, organizar a operação e aumentar a lucratividade.</p>
          <p className="mt-4 font-bold">Não é apenas teoria. É a experiência de quem construiu e opera um escritório contábil de verdade.</p>
        </Reveal>
      </div>
    </section>
  );
}

const included = [
  "Acesso à Imersão Contador Digital de Elite, Edição Black Friday.",
  "Conteúdo prático com os 5 passos para um escritório mais lucrativo.",
  "Acesso ao grupo exclusivo de WhatsApp do evento.",
  "Participação na apresentação da oferta especial de Black Friday.",
];

export function Ticket_() {
  return (
    <section className="bg-hero border-t px-5 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <Eyebrow>Vagas limitadas | Edição Black Friday</Eyebrow>
          <h2 className="font-display mt-6 text-3xl uppercase leading-tight sm:text-5xl">O próximo passo para transformar seu escritório pode começar com apenas R$ 27.</h2>
          <p className="mt-4 font-bold">11 de novembro, às 19h51 | Ao vivo pelo Zoom</p>
        </Reveal>
        <Reveal delay={100} className="mt-10">
          <div id="ingresso" className="scroll-mt-4 rounded-3xl border-2 border-cta bg-card p-6 text-left shadow-cta sm:p-10">
            <p className="text-center text-sm font-extrabold uppercase tracking-widest text-muted-foreground">Seu ingresso</p>
            <p className="font-display mt-2 text-center text-7xl text-cta sm:text-8xl">R$ 27</p>
            <p className="text-center text-balance text-sm italic text-muted-foreground">Pagamento único. <span className="whitespace-nowrap">Sem mensalidade.</span></p>
            <p className="mt-8 font-extrabold">O que está incluído:</p>
            <ul className="mt-4 space-y-3">
              {included.map((i) => (
                <li key={i} className="flex gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-cta" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-center font-extrabold text-primary">Valor especial para as primeiras 500 vagas.</p>
            <div className="mt-6 flex justify-center"><CtaButton checkout>Sim, quero garantir minha vaga por R$ 27</CtaButton></div>
            <p className="mt-6 text-center text-xs italic text-muted-foreground">Os produtos apresentados na oferta de Black Friday não estão incluídos no valor do ingresso. A compra de qualquer produto adicional é opcional.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Guarantee() {
  return (
    <section className="px-5 py-20">
      <Reveal className="mx-auto grid max-w-4xl gap-8 rounded-3xl border bg-card p-6 sm:p-10 md:grid-cols-[auto_1fr] md:items-center">
        <div className="mx-auto grid h-32 w-32 place-items-center rounded-full border-4 border-primary shadow-glow">
          <ShieldCheck className="h-16 w-16 text-primary" />
        </div>
        <div className="space-y-3 italic">
          <h3 className="font-display text-2xl uppercase not-italic sm:text-3xl">Garantia de satisfação: 100% do seu dinheiro de volta!</h3>
          <p className="font-bold">Participe da imersão. Aprenda os 5 passos. E só depois decida se valeu a pena.</p>
          <p className="text-muted-foreground">Estamos tão confiantes no valor do conteúdo que você vai receber que assumimos todo o risco.</p>
          <p className="text-muted-foreground">Se, após participar da Imersão Contador Digital de Elite, você sentir que o conteúdo não valeu o investimento, basta solicitar o reembolso em até 7 dias após o evento.</p>
          <p className="font-bold text-balance">Devolveremos 100% do valor pago pelo seu ingresso. <span className="whitespace-nowrap">Sem complicações.</span></p>
          <p className="text-muted-foreground">Você tem tudo para aprender e nada a perder!</p>
        </div>
      </Reveal>
    </section>
  );
}

const faqs = [
  ["A imersão é ao vivo?", "Sim. O evento acontece no dia 11 de novembro, às 19h51, com transmissão ao vivo pelo Zoom."],
  ["Vou aprender alguma coisa ou será só uma apresentação de ofertas?", "Você vai participar de uma imersão prática com 5 conteúdos sobre receitas, marketing, propostas, processos e lucratividade. A oferta de Black Friday será apresentada como uma oportunidade adicional."],
  ["Quais produtos estarão na Black Friday?", "Os produtos, valores e condições especiais serão revelados durante o evento."],
];

export function Faq() {
  return (
    <section className="border-t px-5 py-20">
      <Reveal className="mx-auto max-w-3xl">
        <h2 className="font-display text-center text-3xl uppercase sm:text-4xl">Dúvidas frequentes</h2>
        <Accordion type="single" collapsible className="mt-8 space-y-3">
          {faqs.map(([q, a], i) => (
            <AccordionItem key={q} value={`f${i}`} className="rounded-xl border bg-card px-5">
              <AccordionTrigger className="text-left font-bold hover:no-underline">{q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </section>
  );
}

export function FinalCall() {
  return (
    <section className="bg-hero overflow-hidden">
      <Reveal className="mx-auto max-w-3xl px-5 py-20 text-center">
        <p className="text-xl font-extrabold sm:text-2xl">Uma noite para aprender a construir um escritório mais lucrativo e ainda participar da apresentação de uma oferta especial de Black Friday.</p>
        <p className="mt-4 text-muted-foreground">Não fique de fora da Imersão Contador Digital de Elite, Edição Black Friday.</p>
        <div className="mt-8"><CtaButton>Quero minha vaga por R$ 27</CtaButton></div>
      </Reveal>
    </section>
  );
}
