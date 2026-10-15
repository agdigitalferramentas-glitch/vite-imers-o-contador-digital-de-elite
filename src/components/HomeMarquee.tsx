function Star() {
  return (
    <svg className="home-marquee-star" viewBox="0 0 24 24" width="12" height="12" fill="currentColor" aria-hidden="true">
      <path d="M12 0C12.9 6.6 17.4 11.1 24 12 17.4 12.9 12.9 17.4 12 24 11.1 17.4 6.6 12.9 0 12 6.6 11.1 11.1 6.6 12 0Z" />
    </svg>
  );
}

/** Faixa superior em marquee (estilos `.home-marquee*` em styles.css, sob `.theme-light`). */
export default function HomeMarquee() {
  return (
    <div className="home-marquee w-full bg-primary py-2 text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground">
      <span className="sr-only">IMERSÃO ONLINE E AO VIVO — 11 DE NOVEMBRO</span>
      <div className="home-marquee-track" aria-hidden="true">
        {[0, 1].map((g) => (
          <div key={g} className="home-marquee-group">
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i} className="home-marquee-item">
                <span>IMERSÃO ONLINE E AO VIVO</span>
                <Star />
                <span>11 DE NOVEMBRO</span>
                <Star />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
