import type { MouseEvent } from "react";
import { CHECKOUT_URL, getCheckoutUrl } from "@/lib/checkout";
import { CTA_LABEL, FORCE_RENDER_EVENT } from "@/lib/cta";

/** Espera o elemento existir (as seções abaixo da dobra são montadas sob demanda). */
function waitForElement(id: string, timeout = 5000): Promise<HTMLElement | null> {
  return new Promise((resolve) => {
    const start = performance.now();
    const tick = () => {
      const el = document.getElementById(id);
      if (el) return resolve(el);
      if (performance.now() - start > timeout) return resolve(null);
      requestAnimationFrame(tick);
    };
    tick();
  });
}

export default function CtaButton({ label = CTA_LABEL, href = "#inscricao" }: { label?: string; href?: string }) {
  const resolvedHref = href === CHECKOUT_URL ? getCheckoutUrl(window.location.search) : href;

  const handleClick = async (e: MouseEvent<HTMLAnchorElement>) => {
    if (!href.startsWith("#")) {
      if (href === CHECKOUT_URL) e.currentTarget.href = getCheckoutUrl(window.location.search);
      return;
    }
    e.preventDefault();
    const id = href.slice(1);
    let el = document.getElementById(id);
    if (!el) {
      // a seção de destino ainda não foi montada: monta tudo e espera
      window.dispatchEvent(new Event(FORCE_RENDER_EVENT));
      el = await waitForElement(id);
    }
    if (!el) return;
    const target = el;
    const scrollTo = () => {
      const top = target.getBoundingClientRect().top + window.scrollY - 24;
      window.scrollTo({ top, behavior: "smooth" });
    };
    scrollTo();
    // Re-ajusta após imagens/layout assentarem
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
