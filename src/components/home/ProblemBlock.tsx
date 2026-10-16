import { TriangleAlert } from "lucide-react";
import ResponsiveImg from "@/components/ResponsiveImg";

export default function ProblemBlock() {
  return (
    <>
      {/* SEÇÃO 2 — DOR */}
      <section className="px-6 py-10 md:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
          <div className="order-last md:order-first md:sticky md:top-24 md:self-start">
            <ResponsiveImg name="perdendo-tempo" alt="Contador exausto trabalhando à noite cercado de papelada" width={600} height={600} sizes="(min-width: 1200px) 552px, (min-width: 768px) 45vw, calc(100vw - 48px)" className="w-full rounded-lg object-cover home-image" />
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
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-muted-foreground">
                    <TriangleAlert size={20} strokeWidth={2.25} className="mt-0.5 shrink-0 text-accent-ink" aria-hidden="true" />
                    <span>{t}</span>
                  </li>
                ))}
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
          <ResponsiveImg name="quanto-vale-seu-tempo" alt="Mãos segurando um relógio antigo com moedas de ouro" width={800} height={316} sizes="(min-width: 816px) 768px, calc(100vw - 48px)" className="home-image mb-10 w-full object-cover" />
          <h2 className="text-2xl md:text-3xl lg:text-[2.35rem]">Quanto vale a sua <span className="gold-text">hora hoje?</span></h2>
          <div className="mt-10 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <div className="navy-card card-dark p-8">
              <p className="text-muted-foreground"><strong className="text-foreground">Lucro líquido do mês ÷ horas trabalhadas</strong> = quanto você realmente ganha por hora.</p>
            </div>
            <p className="pain-callout">Deu menos de <strong className="pain-number">R$ 50</strong>?</p>
            <p>Você ganha menos que um motorista de aplicativo, carregando o CNPJ de dezenas de empresas, o Fisco, a equipe e cliente no fim de semana.</p>
            <p>O contador que fatura 10x mais não trabalha mais horas. Ele cria serviços que o cliente valoriza, usa propostas que vendem sozinhas e processos que não dependem dele. Não precisa de 200 clientes pagando pouco, e sim de mais lucro com a base que já tem.</p>
            <p className="text-xl text-foreground">A boa notícia? <span className="gold-text">Você não precisa descobrir isso sozinho.</span></p>
          </div>
        </div>
      </section>
    </>
  );
}
