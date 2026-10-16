#!/usr/bin/env python3
"""Recolore o selo de garantia mantendo o canal alfa (bordas suavizadas preservadas).

Uso: python3 scripts/recolor-seal.py <selo-original.webp> [#hex]
Gera src/assets/selo-garantia.webp (mestre 500x500); depois rode scripts/optimize-images.py.
"""
import sys
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
src = Path(sys.argv[1])
hex_color = (sys.argv[2] if len(sys.argv) > 2 else "#16345f").lstrip("#")
rgb = tuple(int(hex_color[i : i + 2], 16) for i in (0, 2, 4))

im = Image.open(src).convert("RGBA")
alpha = im.getchannel("A")
out = Image.new("RGBA", im.size, rgb + (0,))
out.putalpha(alpha)
dest = ROOT / "src" / "assets" / "selo-garantia.webp"
out.save(dest, "WEBP", lossless=True, method=6)
print(f"{dest.relative_to(ROOT)}  {out.size}  cor #{hex_color}  {dest.stat().st_size / 1024:.1f} KB")
