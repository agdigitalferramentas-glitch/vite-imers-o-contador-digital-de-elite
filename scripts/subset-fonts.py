#!/usr/bin/env python3
"""Gera as fontes auto-hospedadas em public/fonts a partir dos pacotes Fontsource.

Uso:
  npm pack @fontsource-variable/raleway @fontsource-variable/epilogue @fontsource/roboto
  (extraia os .tgz) e rode:
  python3 scripts/subset-fonts.py <pasta-com-os-pacotes-extraídos>

Requer: pip install fonttools brotli
Mantém só Latin + pontuação usada em português e limita os eixos de peso ao que a página usa.
"""
import io
import sys
from pathlib import Path
from fontTools.ttLib import TTFont
from fontTools.varLib import instancer
from fontTools import subset

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "fonts"

UNICODES = (
    list(range(0x20, 0x7F))          # ASCII
    + list(range(0xA0, 0x100))       # Latin-1 (acentos do português, ÷ ×)
    + [0x131, 0x152, 0x153, 0x2013, 0x2014, 0x2018, 0x2019, 0x201C, 0x201D,
       0x2022, 0x2026, 0x20AC, 0x2122, 0x2190, 0x2192]
)

JOBS = [
    # (pacote extraído, arquivo, destino, limites do eixo wght ou None)
    ("fontsource-variable-raleway-*", "raleway-latin-wght-normal.woff2", "raleway-latin-var.woff2", (400, 800)),
    ("fontsource-variable-epilogue-*", "epilogue-latin-wght-normal.woff2", "epilogue-latin-var.woff2", (400, 600)),
    ("fontsource-roboto-*", "roboto-latin-400-normal.woff2", "roboto-latin-400.woff2", None),
]


def main(base: Path) -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    for pkg, name, dest, wght in JOBS:
        src = next(base.glob(f"{pkg}/package/files/{name}"))
        font = TTFont(src)
        if wght:
            font = instancer.instantiateVariableFont(font, {"wght": wght})
            buf = io.BytesIO()
            font.save(buf)  # recarrega para materializar as tabelas antes do subset
            buf.seek(0)
            font = TTFont(buf)
        opts = subset.Options()
        opts.flavor = "woff2"
        opts.layout_features = ["kern", "liga", "calt", "ccmp", "locl", "mark", "mkmk"]
        opts.notdef_outline = True
        opts.name_IDs = [1, 2]
        sub = subset.Subsetter(opts)
        sub.populate(unicodes=UNICODES)
        sub.subset(font)
        target = OUT / dest
        font.flavor = "woff2"
        font.save(target)
        hhea, upm = font["hhea"], font["head"].unitsPerEm
        print(f"{dest:28s} {src.stat().st_size/1024:5.1f} KB -> {target.stat().st_size/1024:5.1f} KB | upm {upm} asc {hhea.ascent} desc {hhea.descent} gap {hhea.lineGap}")


if __name__ == "__main__":
    main(Path(sys.argv[1]))
