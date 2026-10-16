import { lazy, Suspense, useEffect, useRef, useState, type ComponentType, type ReactNode } from "react";
import { FORCE_RENDER_EVENT } from "@/lib/cta";

type Loader = () => Promise<{ default: ComponentType }>;

type SectionDef = { key: string; loader: Loader; Component: ComponentType; minHeight: string };

function def(key: string, loader: Loader, minHeight: string): SectionDef {
  return { key, loader, Component: lazy(loader), minHeight };
}

/** Todas as seções abaixo da dobra: cada uma é um chunk separado, carregado só quando se aproxima da tela. */
const SECTIONS: SectionDef[] = [
  def("problema", () => import("@/components/home/ProblemBlock"), "180vh"),
  def("metodo", () => import("@/components/home/MethodBlock"), "170vh"),
  def("publico", () => import("@/components/home/AudienceSection"), "90vh"),
  def("depoimentos", () => import("@/components/TestimonialsSection"), "10vh"),
  def("mentor", () => import("@/components/home/MentorSection"), "90vh"),
  def("oferta", () => import("@/components/home/OfferBlock"), "150vh"),
  def("garantia", () => import("@/components/home/GuaranteeSection"), "70vh"),
  def("faq", () => import("@/components/home/FaqSection"), "80vh"),
  def("decisao", () => import("@/components/home/DecisionFooter"), "90vh"),
];

const REVEAL_TARGETS = "section > div, section > div > *, article, details, ul > li";

/**
 * Animação de entrada (fade + slide) só no desktop (>= 768px) e sem "reduzir movimento".
 * No mobile nada é animado: a main thread fica livre para rolagem e toques.
 */
function RevealScope({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root || typeof IntersectionObserver === "undefined") return;
    if (!window.matchMedia("(min-width: 768px)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const targets = root.querySelectorAll<HTMLElement>(REVEAL_TARGETS);
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
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="contents">
      {children}
    </div>
  );
}

/** Reserva a altura da seção (sem salto de layout) e só a monta quando está perto da viewport. */
function LazySection({ def: { Component, minHeight } }: { def: SectionDef }) {
  const placeholderRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (mounted) return;
    const show = () => setMounted(true);
    window.addEventListener(FORCE_RENDER_EVENT, show);
    let io: IntersectionObserver | undefined;
    if (typeof IntersectionObserver === "undefined") {
      show();
    } else if (placeholderRef.current) {
      io = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) show();
        },
        { rootMargin: "120px 0px" },
      );
      io.observe(placeholderRef.current);
    }
    return () => {
      window.removeEventListener(FORCE_RENDER_EVENT, show);
      io?.disconnect();
    };
  }, [mounted]);

  const placeholder = <div ref={placeholderRef} style={{ minHeight }} aria-hidden="true" />;
  if (!mounted) return placeholder;
  return (
    <Suspense fallback={<div style={{ minHeight }} aria-hidden="true" />}>
      <RevealScope>
        <Component />
      </RevealScope>
    </Suspense>
  );
}

export default function BelowFold() {
  // Aquece os chunks na primeira interação (rolagem/toque/tecla), sem competir com o carregamento inicial.
  useEffect(() => {
    const warm = () => SECTIONS.forEach((s) => void s.loader());
    const events = ["scroll", "pointerdown", "touchstart", "keydown"] as const;
    events.forEach((ev) => window.addEventListener(ev, warm, { once: true, passive: true }));
    return () => events.forEach((ev) => window.removeEventListener(ev, warm));
  }, []);

  return (
    <>
      {SECTIONS.map((s) => (
        <LazySection key={s.key} def={s} />
      ))}
    </>
  );
}
