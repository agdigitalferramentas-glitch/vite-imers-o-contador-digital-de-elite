import { readFile } from "node:fs/promises";
import { defineConfig, createServer, transformWithEsbuild, type Plugin, type ViteDevServer } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

/**
 * Otimizações de carregamento da primeira dobra (Core Web Vitals):
 *  1. insere o CSS crítico (src/critical.css) inline no <head>;
 *  2. renderiza a primeira dobra da home em HTML estático dentro do #root (src/shell/homeShell.tsx),
 *     para o título e o texto de apoio aparecerem antes de qualquer JavaScript;
 *  3. no build, carrega o CSS principal sem bloquear a renderização e só monta o React quando ele chega.
 */
function homeShell(): Plugin {
  let root = process.cwd();

  async function renderShell(server?: ViteDevServer): Promise<string> {
    let temp: ViteDevServer | undefined;
    const srv =
      server ??
      (temp = await createServer({
        root,
        configFile: false,
        logLevel: "silent",
        appType: "custom",
        server: { middlewareMode: true, hmr: false, watch: null },
        optimizeDeps: { noDiscovery: true },
        resolve: { alias: { "@": path.resolve(root, "src") } },
        plugins: [react()],
      }));
    try {
      const mod = await srv.ssrLoadModule("/src/shell/homeShell.tsx");
      const html: string = mod.renderHomeShell();
      return html.replace(/^<main /, "<main data-shell ");
    } finally {
      await temp?.close();
    }
  }

  return {
    name: "home-shell",
    configResolved(config) {
      root = config.root;
    },
    transformIndexHtml: {
      order: "pre",
      async handler(html, ctx) {
        const css = await readFile(path.resolve(root, "src/critical.css"), "utf8");
        const { code } = await transformWithEsbuild(css, "critical.css", { loader: "css", minify: true });
        const shell = await renderShell(ctx.server);
        return html
          .replace("<!-- CRITICAL_CSS -->", () => `<style>${code.trim()}</style>`)
          .replace("<!-- HOME_SHELL -->", () => shell);
      },
    },
  };
}

/** Build: CSS principal fora do caminho crítico (preload + troca para stylesheet no onload). */
function nonBlockingCss(): Plugin {
  return {
    name: "non-blocking-css",
    apply: "build",
    transformIndexHtml: {
      order: "post",
      handler(html) {
        let found = false;
        const out = html.replace(/<link rel="stylesheet"([^>]*?) href="([^"]+\.css)"([^>]*)>/g, (_m, a: string, href: string, b: string) => {
          found = true;
          const attrs = `${a}${b}`;
          return (
            `<link rel="preload" as="style"${attrs} href="${href}" ` +
            `onload="this.onload=null;this.rel='stylesheet';window.__cssDone&&window.__cssDone()" ` +
            `onerror="window.__cssDone&&window.__cssDone()">` +
            `<noscript><link rel="stylesheet"${attrs} href="${href}"></noscript>`
          );
        });
        if (!found) return html;
        // Promessa resolvida quando o CSS principal chega; src/main.tsx espera por ela antes de montar o React.
        return out.replace("<head>", `<head><script>window.__css=new Promise(function(r){window.__cssDone=r})</script>`);
      },
    },
  };
}

export default defineConfig({
  preview: {
    allowedHosts: true,
  },
  plugins: [react(), tailwindcss(), homeShell(), nonBlockingCss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // sem o polyfill de modulepreload (navegadores-alvo já suportam)
    modulePreload: { polyfill: false },
    rollupOptions: {
      output: {
        // React em um chunk próprio, com cache longo: só muda quando a versão do React mudar
        manualChunks: { "react-vendor": ["react", "react-dom"] },
      },
    },
  },
  server: {
    host: "::",
    port: 8080,
  },
});
