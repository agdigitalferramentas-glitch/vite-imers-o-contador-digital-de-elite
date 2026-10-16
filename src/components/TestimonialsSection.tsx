import { useState } from "react";
import { TESTIMONIALS, type Testimonial } from "@/data/testimonials";
import { getVideoSource, getYouTubeThumbnail } from "@/lib/video";

const THUMBS = import.meta.glob<string>("../assets/testimonials/*.{jpg,jpeg,png,webp}", {
  eager: true,
  query: "?url",
  import: "default",
});

function thumbFor(slug: string): string | undefined {
  const hit = Object.entries(THUMBS).find(([path]) => path.split("/").pop()?.replace(/\.[^.]+$/, "") === slug);
  return hit?.[1];
}

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0])
    .join("")
    .toUpperCase();
}

function VideoCard({
  item,
  featured,
  active,
  onPlay,
}: {
  item: Testimonial;
  featured?: boolean;
  active: boolean;
  onPlay: () => void;
}) {
  const source = getVideoSource(item.video);
  const [thumbFailed, setThumbFailed] = useState(false);
  const thumb = thumbFor(item.slug) ?? (thumbFailed ? undefined : getYouTubeThumbnail(item.video) ?? undefined);
  if (!source) return null;

  return (
    <div className={`video-frame relative aspect-video overflow-hidden ${featured ? "video-frame-featured" : ""}`}>
      {active ? (
        source.kind === "file" ? (
          <video className="absolute inset-0 h-full w-full bg-black" src={source.url} controls autoPlay playsInline title={`Depoimento de ${item.name}`} />
        ) : (
          <iframe
            className="absolute inset-0 h-full w-full bg-black"
            src={source.url}
            title={`Depoimento de ${item.name}`}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        )
      ) : (
        <button type="button" onClick={onPlay} aria-label={`Reproduzir depoimento de ${item.name}`} className="video-play group absolute inset-0 h-full w-full overflow-hidden text-left">
          {thumb ? (
            <img src={thumb} alt={`Depoimento de ${item.name}`} loading="lazy" onError={() => setThumbFailed(true)} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" style={{ objectPosition: "center 30%" }} />
          ) : (
            <span className="absolute inset-0 grid place-items-center bg-[linear-gradient(145deg,hsl(216_62%_12%),hsl(216_52%_22%))] text-6xl font-extrabold tracking-tight text-white/10" aria-hidden="true">
              {initials(item.name)}
            </span>
          )}
          <span className="absolute inset-0 bg-gradient-to-t from-[hsl(216_70%_7%)] via-[hsl(216_70%_7%/0.35)] to-[hsl(216_70%_7%/0.25)]" />
          <span className="absolute left-0 top-0 h-1 w-16 bg-primary" />
          <span className="absolute left-0 top-0 h-16 w-1 bg-primary" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="relative">
              <span className="absolute inset-0 rounded-full bg-primary opacity-50 blur-xl transition-opacity group-hover:opacity-90" />
              <span className={`relative flex items-center justify-center rounded-full bg-primary text-primary-foreground shadow-2xl transition-transform duration-300 group-hover:scale-110 ${featured ? "h-16 w-16 md:h-20 md:w-20" : "h-12 w-12 md:h-14 md:w-14"}`}>
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={`ml-1 ${featured ? "h-7 w-7 md:h-9 md:w-9" : "h-5 w-5 md:h-6 md:w-6"}`}>
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </span>
          </span>
          <span className="absolute inset-x-0 bottom-0 block p-4 md:p-5">
            <span className={`block font-extrabold leading-tight text-white drop-shadow-lg ${featured ? "text-xl md:text-2xl" : "text-lg"}`}>{item.name}</span>
          </span>
        </button>
      )}
    </div>
  );
}

export default function TestimonialsSection() {
  const [active, setActive] = useState<string | null>(null);
  const visible = TESTIMONIALS.filter((t) => getVideoSource(t.video));
  if (visible.length === 0) return null;

  const [featured, ...rest] = visible;

  return (
    <section id="depoimentos" aria-labelledby="depoimentos-titulo" className="hero-bg px-6 py-10 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-label mb-4">Transformação</p>
          <h2 id="depoimentos-titulo" className="text-2xl md:text-3xl lg:text-[2.35rem]">
            O que dizem os <span className="gold-text">meus alunos</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Quem seguiu a metodologia, teve seus resultados transformados.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <VideoCard item={featured} featured active={active === featured.slug} onPlay={() => setActive(featured.slug)} />
        </div>

        {rest.length > 0 && (
          <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(15rem,1fr))]">
            {rest.map((t) => (
              <VideoCard key={t.slug} item={t} active={active === t.slug} onPlay={() => setActive(t.slug)} />
            ))}
          </div>
        )}

        <p className="mx-auto mt-14 max-w-2xl text-balance text-center text-xl font-bold text-foreground md:text-2xl">
          Você pode ser o próximo a ter esses resultados. <span className="gold-text whitespace-nowrap">A questão é: você quer?</span>
        </p>
      </div>
    </section>
  );
}
