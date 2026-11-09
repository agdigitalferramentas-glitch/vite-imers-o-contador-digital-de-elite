import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

/** Botão de ação em formato pílula, com seta em círculo. */
export default function ComboButton({ href, className = "cb-cta", children }: { href: string; className?: string; children: ReactNode }) {
  return (
    <a href={href} className={className}>
      {children}
      <span className="cb-cta-arrow" aria-hidden="true">
        <ArrowRight size={20} strokeWidth={2.5} />
      </span>
    </a>
  );
}
