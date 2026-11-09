const ITENS = ["Black Friday Anderson Maisse | Combo Completo", "+R$ 7.000 OFF"];

function Star() {
  return (
    <svg className="cb-marquee-star" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M12 0C12.9 6.6 17.4 11.1 24 12 17.4 12.9 12.9 17.4 12 24 11.1 17.4 6.6 12.9 0 12 6.6 11.1 11.1 6.6 12 0Z" />
    </svg>
  );
}

/** Faixa em marquee (azul neon da identidade): os dois textos separados por estrelas de 4 pontas. */
export default function ComboMarquee() {
  return (
    <div className="cb-marquee">
      <span className="cb-sr">{ITENS.join(", ")}</span>
      <div className="cb-marquee-track" aria-hidden="true">
        {[0, 1].map((g) => (
          <div key={g} className="cb-marquee-group">
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i} className="cb-marquee-item">
                {ITENS.map((texto) => (
                  <span key={texto} className="cb-marquee-parte">
                    <span>{texto}</span>
                    <Star />
                  </span>
                ))}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
