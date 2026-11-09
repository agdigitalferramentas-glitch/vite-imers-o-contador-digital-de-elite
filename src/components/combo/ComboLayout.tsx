import type { ReactNode } from "react";
import ComboTopBar from "./ComboTopBar";
import ComboHero from "./ComboHero";
import ComboButton from "./ComboButton";

/**
 * Moldura da /combo: faixa fixa do topo + primeira dobra (hero) + o resto da página (`children`).
 * Usada pela página (React) e pelo HTML estático gerado no build (src/shell/comboShell.tsx).
 */
export default function ComboLayout({ children }: { children?: ReactNode }) {
  return (
    <div className="theme-combo">
      <ComboTopBar />
      <main>
        <ComboHero cta={<ComboButton href="#oferta">QUERO O COMBO COMPLETO</ComboButton>} />
        {children}
      </main>
    </div>
  );
}
