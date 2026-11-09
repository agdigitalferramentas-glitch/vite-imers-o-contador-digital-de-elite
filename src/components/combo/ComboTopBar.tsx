import useComboCheckoutHref from "./useComboCheckoutHref";

/* Faixa fixa no topo: promessa de desconto e botão para o checkout do combo. */
export default function ComboTopBar() {
  const href = useComboCheckoutHref();
  return (
    <div className="cb-topbar" role="region" aria-label="Oferta">
      <div className="cb-topbar-inner">
        <p>Aproveite +R$7000 de DESCONTO e acesso vitalício!</p>
        <a href={href} className="cb-topbar-cta">
          GARANTIR O COMBO
        </a>
      </div>
    </div>
  );
}
