import { useEffect } from "react";
import ComboHero from "@/components/combo/ComboHero";
import ComboProblema from "@/components/combo/ComboProblema";
import ComboProdutos from "@/components/combo/ComboProdutos";
import ComboDiferenciais from "@/components/combo/ComboDiferenciais";
import ComboAncoragem from "@/components/combo/ComboAncoragem";
import "@/combo.css";

export default function LpCombo() {
  useEffect(() => {
    document.title = "Black Friday Anderson Maisse | O Combo Completo";
  }, []);

  return (
    <div className="theme-combo">
      <main>
        <ComboHero
          cta={<a href="#oferta" className="cb-cta">QUERO O COMBO COMPLETO</a>}
        />
        <ComboProblema />
        <ComboProdutos />
        <ComboDiferenciais />
        <ComboAncoragem />
      </main>
    </div>
  );
}
