import { CheckCircle2 } from "lucide-react";
import CtaButton from "@/components/CtaButton";
import { CHECKOUT_URL } from "@/lib/checkout";

export default function OfferBlock() {
  return (
    <>
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
    </>
  );
}
