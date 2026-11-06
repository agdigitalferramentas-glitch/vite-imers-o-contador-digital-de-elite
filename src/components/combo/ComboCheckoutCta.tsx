import { useEffect, useState } from "react";
import { COMBO_CHECKOUT_URL, getCheckoutUrl } from "@/lib/checkout";

/** CTA da oferta: checkout do combo com a atribuição de campanha (UTM, src, sck) da URL atual. */
export default function ComboCheckoutCta() {
  const [href, setHref] = useState(COMBO_CHECKOUT_URL);
  useEffect(() => {
    setHref(getCheckoutUrl(window.location.search, COMBO_CHECKOUT_URL));
  }, []);
  return (
    <div className="cb-cta-wrap">
      <a href={href} className="cb-cta">
        QUERO O COMBO COMPLETO
      </a>
    </div>
  );
}
