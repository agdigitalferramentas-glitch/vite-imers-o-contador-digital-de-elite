/**
 * Variantes responsivas geradas por scripts/optimize-images.py (src/assets/responsive/<nome>-<largura>.webp).
 * Retorna o `srcset` ("url 480w, url 960w") e a maior variante, usada como `src` de reserva.
 */
const URLS = import.meta.glob<string>("../assets/responsive/*.webp", {
  eager: true,
  query: "?url",
  import: "default",
});

type Variant = { width: number; url: string };

const BY_NAME: Record<string, Variant[]> = {};
for (const [path, url] of Object.entries(URLS)) {
  const m = path.match(/\/([^/]+)-(\d+)\.webp$/);
  if (!m) continue;
  (BY_NAME[m[1]] ??= []).push({ width: Number(m[2]), url });
}
for (const list of Object.values(BY_NAME)) list.sort((a, b) => a.width - b.width);

export function hasResponsive(name: string): boolean {
  return Boolean(BY_NAME[name]?.length);
}

export function srcSet(name: string): string {
  return (BY_NAME[name] ?? []).map((v) => `${v.url} ${v.width}w`).join(", ");
}

/** Maior variante (src de reserva para navegadores sem suporte a srcset). */
export function fallbackSrc(name: string): string {
  const list = BY_NAME[name] ?? [];
  return list[list.length - 1]?.url ?? "";
}
