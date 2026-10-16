export type VideoSource =
  | { kind: "iframe"; url: string }
  | { kind: "file"; url: string };

const FILE_EXT = /\.(mp4|webm|mov|m4v|ogg)(\?.*)?$/i;

/** Identificador do vídeo do YouTube (watch, youtu.be, embed, shorts ou live), ou null. */
export function getYouTubeId(link: string): string | null {
  let url: URL;
  try {
    url = new URL(link.trim());
  } catch {
    return null;
  }
  const host = url.hostname.replace(/^www\./, "");
  if (host === "youtu.be") return url.pathname.slice(1).split("/")[0] || null;
  if (!(host.endsWith("youtube.com") || host.endsWith("youtube-nocookie.com"))) return null;
  if (url.pathname === "/watch") return url.searchParams.get("v") || null;
  const m = url.pathname.match(/^\/(?:embed|shorts|live|v)\/([^/?#]+)/);
  return m ? m[1] : null;
}

/** Miniatura gerada pelo próprio YouTube, usada quando não há imagem local. */
export function getYouTubeThumbnail(link: string): string | null {
  const id = getYouTubeId(link);
  return id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : null;
}

/** Converte o link de um depoimento na fonte usada pelo player (autoplay após o clique). */
export function getVideoSource(link: string): VideoSource | null {
  const raw = link.trim();
  if (!raw) return null;

  let url: URL;
  try {
    url = new URL(raw);
  } catch {
    return null;
  }

  const host = url.hostname.replace(/^www\./, "");

  if (host === "youtu.be" || host.endsWith("youtube.com") || host.endsWith("youtube-nocookie.com")) {
    let id = "";
    if (host === "youtu.be") id = url.pathname.slice(1).split("/")[0];
    else if (url.pathname === "/watch") id = url.searchParams.get("v") ?? "";
    else {
      const m = url.pathname.match(/^\/(?:embed|shorts|live|v)\/([^/?#]+)/);
      if (m) id = m[1];
    }
    if (!id) return null;
    return {
      kind: "iframe",
      url: `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`,
    };
  }

  if (host === "vimeo.com" || host === "player.vimeo.com") {
    const m = url.pathname.match(/(\d{6,})/);
    if (!m) return null;
    return { kind: "iframe", url: `https://player.vimeo.com/video/${m[1]}?autoplay=1&title=0&byline=0&portrait=0` };
  }

  if (FILE_EXT.test(url.pathname + url.search)) return { kind: "file", url: url.toString() };

  // Outras plataformas (Vturb, Panda, Wistia...): usa o link de incorporação como veio.
  return { kind: "iframe", url: url.toString() };
}
