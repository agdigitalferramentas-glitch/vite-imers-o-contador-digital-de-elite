#!/usr/bin/env python3
"""Gera variantes WebP responsivas em src/assets/responsive/<nome>-<largura>.webp.

Uso: python3 scripts/optimize-images.py   (requer Pillow)

As imagens originais ficam em src/assets; as variantes são as usadas no
srcset da página inicial. Nunca amplia: só gera larguras menores ou iguais à original.
"""
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "src" / "assets"
OUT = SRC / "responsive"

# nome-de-saída: (arquivo de origem, larguras, qualidade)
JOBS = {
    "hero-desktop": ("hero-anderson.webp", [1280, 1920], 74),
    "hero-mobile": ("hero-anderson-mobile.webp", [480, 640, 819], 72),
    "logo": ("logo-contador-digital-elite-azul.webp", [360, 480, 720], 82),
    "perdendo-tempo": ("perdendo-tempo.webp", [320, 480, 600], 76),
    "quanto-vale-seu-tempo": ("quanto-vale-seu-tempo.webp", [400, 640, 800], 76),
    "anderson-maisse": ("anderson-maisse.webp", [480, 768, 1148], 72),
}
for slug in ("jobson", "bruno", "gilberto", "alessandro", "andre"):
    JOBS[f"depoimento-{slug}"] = (f"testimonials/{slug}.webp", [480, 800, 1280], 76)


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    total_in = total_out = 0
    for name, (src, widths, quality) in JOBS.items():
        im = Image.open(SRC / src)
        has_alpha = im.mode in ("RGBA", "LA") or "transparency" in im.info
        im = im.convert("RGBA" if has_alpha else "RGB")
        w, h = im.size
        for tw in widths:
            tw = min(tw, w)
            th = round(h * tw / w)
            r = im if (tw, th) == (w, h) else im.resize((tw, th), Image.LANCZOS)
            dest = OUT / f"{name}-{tw}.webp"
            r.save(dest, "WEBP", quality=quality, method=6)
            print(f"{dest.name:42s} {tw}x{th:<5d} {dest.stat().st_size / 1024:7.1f} KB")
            total_out += dest.stat().st_size
        total_in += (SRC / src).stat().st_size
    print(f"\noriginais: {total_in / 1024:.0f} KB | variantes geradas: {total_out / 1024:.0f} KB")


if __name__ == "__main__":
    main()
