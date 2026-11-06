import { useEffect } from "react";
import ComboHero from "@/components/combo/ComboHero";
import "@/combo.css";

export default function LpCombo() {
  useEffect(() => {
    document.title = "Black Friday Anderson Maisse | O Combo Completo";
  }, []);

  return (
    <div className="theme-combo">
      <main>
        <ComboHero
          cta={
            <div className="cb-cta-wrap">
              {/* href provisório: a copy não traz o link do CTA */}
              <a href="#secao-01-hero" className="cb-cta">QUERO O COMBO COMPLETO</a>
              <span className="cb-lacuna">[LACUNA: link de checkout do CTA]</span>
            </div>
          }
        />
      </main>
    </div>
  );
}
