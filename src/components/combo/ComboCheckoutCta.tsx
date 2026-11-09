import ComboButton from "./ComboButton";
import useComboCheckoutHref from "./useComboCheckoutHref";

/** CTA das seções: leva ao checkout do combo com a atribuição de campanha da URL atual. */
export default function ComboCheckoutCta() {
  const href = useComboCheckoutHref();
  return (
    <div className="cb-cta-wrap">
      <ComboButton href={href}>QUERO O COMBO COMPLETO</ComboButton>
    </div>
  );
}
