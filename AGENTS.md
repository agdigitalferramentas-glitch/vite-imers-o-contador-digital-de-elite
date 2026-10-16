# Project rules
- Build checkout URLs through `src/lib/checkout.ts` on every sales page so campaign attribution follows one shared, tested policy.
- Keep the application a classic Vite React SPA with static Docker/Nginx deployment so it runs independently on the user's server.
- Scope homepage theme tokens and visual overrides under `.theme-light` in the shared stylesheet; only the homepage and `/obrigado` mount this wrapper so other sales variants retain their independent appearance.
- Performance (Core Web Vitals) da home: a primeira dobra é HTML + CSS puros (`src/critical.css`, `src/components/HeroSection.tsx`), renderizada no build para dentro do `index.html` por `vite.config.ts`; não mova esse hero para depender de estado, efeitos ou animações de JavaScript. `src/critical.css` é a fonte única do CSS crítico e dos tokens do tema (também é importado por `src/styles.css`).
- Seções abaixo da dobra ficam em `src/components/BelowFold.tsx` com `React.lazy`/`Suspense`; imagens usam `ResponsiveImg` (srcset/sizes, `width`/`height`, `loading="lazy"`); só a foto do hero tem `fetchpriority="high"`. Variantes de imagem são geradas por `scripts/optimize-images.py`.
- Sem animações de entrada no mobile (< 768px). GTM e o pixel AGMetrics são carregados só após a primeira interação (script no fim do `index.html`).

