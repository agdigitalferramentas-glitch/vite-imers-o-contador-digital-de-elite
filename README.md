# Contador Digital de Elite — Landing Page

Stack: **React 18 + Vite 5 + Tailwind 4 + React Router DOM**. Sem Lovable Cloud, sem Cloudflare, sem TanStack.

## Desenvolvimento

```bash
npm install --legacy-peer-deps
npm run dev
```

## Build de produção

```bash
npm run build
```

Saída em `dist/` (estática).

## Deploy no Dokploy

1. Conecte este repositório no Dokploy.
2. Crie uma **Application** do tipo **Dockerfile**.
3. Dokploy detecta o `Dockerfile` automaticamente (Node 20 build → Nginx).
4. Porta exposta: `80`.
5. Habilite **Auto Deploy** na branch `main`.

Toda edição feita no Lovable → commit no GitHub → Dokploy faz build e deploy.

## Performance (Core Web Vitals)

Resumo das otimizações da página inicial (mobile-first):

- **LCP / primeira dobra:** o `<h1>`, o texto de apoio e o CTA são HTML estático gerado no build (plugin em `vite.config.ts`, a partir de `src/components/HeroSection.tsx`), com o CSS crítico inline (`src/critical.css`). O CSS principal carrega sem bloquear a renderização e o React só monta depois dele. A foto do hero é um `<img>` com `fetchpriority="high"`, nunca `lazy`.
- **Fontes:** Raleway, Epilogue e Roboto auto-hospedadas em `public/fonts` (WOFF2, subset latino, `font-display: swap`); só o Raleway recebe `preload`. Há fonte de reserva com métricas ajustadas para não deslocar o layout na troca.
- **CLS:** todas as imagens têm `width`/`height` (ou `aspect-ratio`) e as seções preguiçosas reservam altura.
- **JS / TBT:** só a home entra no bundle inicial; as demais páginas e todas as seções abaixo da dobra são `React.lazy`, montadas quando se aproximam da tela. Sem animações de entrada no mobile (< 768px).
- **Imagens:** variantes WebP responsivas (`srcset` + `sizes`) em `src/assets/responsive`, geradas por `python3 scripts/optimize-images.py` (requer Pillow). Para trocar uma foto, substitua o original em `src/assets` e rode o script.
- **Terceiros:** GTM e o pixel AGMetrics carregam só após a primeira interação (rolagem, toque, tecla ou mouse), com limite de segurança de 8 s após o `load` (ajuste `FALLBACK_MS` no fim do `index.html`; `0` = somente após interação). Em `/obrigado` carregam na hora, para não perder a conversão.
- **Servidor:** `deployhub-health-server.mjs` (usado pelo Dockerfile) serve `/assets/*` com cache de 1 ano (`immutable`), `index.html` com `no-cache` e comprime texto com Brotli/gzip.

Depoimentos em vídeo: edite `src/data/testimonials.ts` (nome, `slug` da miniatura e link do vídeo).

Para regerar as fontes: `npm pack @fontsource-variable/raleway @fontsource-variable/epilogue @fontsource/roboto`, extraia os pacotes e rode `python3 scripts/subset-fonts.py <pasta>` (requer `pip install fonttools brotli`).

