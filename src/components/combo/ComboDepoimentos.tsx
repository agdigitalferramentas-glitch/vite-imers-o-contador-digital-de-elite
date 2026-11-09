import { useState } from "react";
import { Play } from "lucide-react";
import ResponsiveImg from "@/components/ResponsiveImg";
import { getVideoSource } from "@/lib/video";

const VIDEOS = [
  { id: "IMG-13", n: 1, imagem: "combo-depoimento-1", link: "https://youtu.be/biOmM6Xckwk" },
  { id: "IMG-14", n: 2, imagem: "combo-depoimento-2", link: "https://youtu.be/wCztfgD3E_Q" },
  { id: "IMG-15", n: 3, imagem: "combo-depoimento-3", link: "https://youtu.be/bQ31i5TV3v0" },
];

/** Miniatura que vira o player do YouTube dentro da própria página ao clicar. */
function VideoCard({ n, imagem, link }: { n: number; imagem: string; link: string }) {
  const [playing, setPlaying] = useState(false);
  const source = getVideoSource(link);
  if (!source) return null;

  if (playing) {
    return (
      <div className="cb-video">
        <iframe
          src={source.url}
          title={`Depoimento ${n}`}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    );
  }

  return (
    <button type="button" className="cb-video cb-video-thumb" onClick={() => setPlaying(true)} aria-label={`Assistir depoimento ${n}`}>
      <ResponsiveImg
        name={imagem}
        alt={`Miniatura do depoimento ${n}`}
        width={1280}
        height={720}
        sizes="(min-width: 768px) 304px, calc(100vw - 32px)"
      />
      <span className="cb-video-play" aria-hidden="true">
        <Play size={28} fill="currentColor" />
      </span>
    </button>
  );
}

/* SEÇÃO 09: Depoimentos (início) */
export default function ComboDepoimentos() {
  return (
    <section id="secao-09-depoimentos" aria-labelledby="depoimentos-titulo" className="cb-section cb-depoimentos">
      <div className="cb-container">
        <h2 id="depoimentos-titulo">Quem aplicou o método, <span className="cb-destaque">cresceu.</span></h2>
        <ul className="cb-videos">
          {VIDEOS.map(({ id, ...v }) => (
            <li key={id}>
              <VideoCard {...v} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
/* SEÇÃO 09: Depoimentos (fim) */
