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
