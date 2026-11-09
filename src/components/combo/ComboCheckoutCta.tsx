import useComboCheckoutHref from "./useComboCheckoutHref";

/** CTA das seções: leva ao checkout do combo com a atribuição de campanha da URL atual. */
export default function ComboCheckoutCta() {
  const href = useComboCheckoutHref();
  return (
    <div className="cb-cta-wrap">
      <a href={href} className="cb-cta">
        QUERO O COMBO COMPLETO
      </a>
    </div>
  );
}
