import { useEffect } from "react";
import ComboLayout from "@/components/combo/ComboLayout";
import ComboProblema from "@/components/combo/ComboProblema";
import ComboProdutos from "@/components/combo/ComboProdutos";
import ComboDiferenciais from "@/components/combo/ComboDiferenciais";
import ComboAncoragem from "@/components/combo/ComboAncoragem";
import ComboOferta from "@/components/combo/ComboOferta";
import ComboCheckoutCta from "@/components/combo/ComboCheckoutCta";
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
    <ComboLayout>
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
    </ComboLayout>
  );
}
