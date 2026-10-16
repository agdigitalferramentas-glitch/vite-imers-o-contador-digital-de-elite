import { useEffect } from "react";
import BelowFold from "@/components/BelowFold";
import CtaButton from "@/components/CtaButton";
import HomeLayout from "@/components/HomeLayout";

export default function Index() {
  useEffect(() => {
    document.title = "Imersão Contador Digital de Elite — Anderson Maisse | 11 de novembro";
  }, []);

  // Hero: HTML/CSS estático (também gerado no build). Resto da página: seções preguiçosas (BelowFold).
  return <HomeLayout cta={<CtaButton />} below={<BelowFold />} />;
}
