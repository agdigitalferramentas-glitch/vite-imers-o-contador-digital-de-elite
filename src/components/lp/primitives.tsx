import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export const CHECKOUT_URL = "#ingresso";

export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={cn("reveal", className)} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export const KIWIFY_URL = "https://pay.kiwify.com.br/3IfZBFB";
const TRACKED = /^(utm_[a-z_]+|src|sck)$/i;

/** Appends UTMs, src and sck from the current page URL to the checkout URL. */
export function buildCheckoutUrl(base: string, search: string) {
  const url = new URL(base);
  new URLSearchParams(search).forEach((v, k) => {
    if (TRACKED.test(k) && v) url.searchParams.set(k, v);
  });
  return url.toString();
}

export function CtaButton({ children, className, checkout = false }: { children: ReactNode; className?: string; checkout?: boolean }) {
  const [href, setHref] = useState(checkout ? KIWIFY_URL : CHECKOUT_URL);
  useEffect(() => {
    if (checkout) setHref(buildCheckoutUrl(KIWIFY_URL, window.location.search));
  }, [checkout]);
  return (
    <a
      href={href}
      className={cn(
        "animate-pulse-cta inline-flex w-full items-center justify-center rounded-full bg-cta px-6 py-4 text-center text-sm font-extrabold uppercase tracking-wide text-cta-foreground shadow-cta transition hover:brightness-110 sm:w-auto sm:px-10 sm:text-base",
        className,
      )}
    >
      {children}
    </a>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block -skew-x-6 bg-primary px-3 py-1 text-balance text-xs font-extrabold uppercase tracking-widest text-primary-foreground">
      {children}
    </span>
  );
}

export function Marquee({ variant = "red", className }: { variant?: "red" | "white"; className?: string }) {
  const items = Array.from({ length: 16 }, () => "Black Friday");
  const white = variant === "white";
  return (
    <div
      className={cn(
        "relative overflow-hidden border-y border-primary py-2",
        white ? "z-0 rotate-2 bg-paper" : "z-10 -rotate-2 bg-primary",
        className,
      )}
    >
      <div className={cn("flex w-max gap-8 whitespace-nowrap", white ? "animate-marquee-reverse" : "animate-marquee")}>
        {[...items, ...items].map((t, i) => (
          <span key={i} className={cn("font-display text-lg uppercase italic", white ? "text-primary" : "text-primary-foreground")}>
            {t} ✦
          </span>
        ))}
      </div>
    </div>
  );
}

export function MarqueeBand() {
  return (
    <div className="relative z-10 overflow-hidden bg-background py-5">
      <Marquee variant="white" />
      <Marquee variant="red" className="-mt-2" />
    </div>
  );
}
