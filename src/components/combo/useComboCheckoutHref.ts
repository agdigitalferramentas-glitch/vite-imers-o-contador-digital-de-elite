import { useEffect, useState } from "react";
import { COMBO_CHECKOUT_URL, getCheckoutUrl } from "@/lib/checkout";

/** Link do checkout do combo com a atribuição de campanha (UTM, src, sck) da URL atual. */
export default function useComboCheckoutHref(): string {
  const [href, setHref] = useState(COMBO_CHECKOUT_URL);
  useEffect(() => {
    setHref(getCheckoutUrl(window.location.search, COMBO_CHECKOUT_URL));
  }, []);
  return href;
}
