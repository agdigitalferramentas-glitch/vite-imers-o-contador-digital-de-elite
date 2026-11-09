import { useEffect } from "react";
import ComboTopBar from "@/components/combo/ComboTopBar";
import ComboHero from "@/components/combo/ComboHero";
import ComboProblema from "@/components/combo/ComboProblema";
import ComboProdutos from "@/components/combo/ComboProdutos";
import ComboDiferenciais from "@/components/combo/ComboDiferenciais";
import ComboAncoragem from "@/components/combo/ComboAncoragem";
import ComboOferta from "@/components/combo/ComboOferta";
import ComboCheckoutCta from "@/components/combo/ComboCheckoutCta";
import ComboButton from "@/components/combo/ComboButton";
import ComboMarquee from "@/components/combo/ComboMarquee";
import ComboParaQuemE from "@/components/combo/ComboParaQuemE";
import ComboMentores from "@/components/combo/ComboMentores";
import ComboDepoimentos from "@/components/combo/ComboDepoimentos";
import ComboGarantia from "@/components/combo/ComboGarantia";
import ComboFaq from "@/components/combo/ComboFaq";
import ComboCtaFinal from "@/components/combo/ComboCtaFinal";
import "@/combo.css";

export default function LpCombo() {
  useEffect(() => {
    document.title = "Black Friday Anderson Maisse | O Combo Completo";
  }, []);

  return (
    <div className="theme-combo">
      <ComboTopBar />
      <main>
        <ComboHero
          cta={<ComboButton href="#oferta">QUERO O COMBO COMPLETO</ComboButton>}
        />
        <ComboMarquee />
        <ComboProblema />
        <ComboProdutos />
        <ComboDiferenciais />
        <ComboAncoragem />
        <ComboMarquee />
        <ComboOferta cta={<ComboCheckoutCta />} />
        <ComboParaQuemE />
        <ComboMentores />
        <ComboDepoimentos />
        <ComboGarantia />
        <ComboFaq />
        <ComboCtaFinal />
      </main>
    </div>
  );
}
