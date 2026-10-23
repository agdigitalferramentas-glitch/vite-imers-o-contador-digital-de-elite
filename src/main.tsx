import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LpIndex from "@/pages/LpIndex";
import "./styles.css";

// Só a home entra no bundle inicial; as demais páginas são baixadas quando acessadas.
const LpIndexB = lazy(() => import("@/pages/LpIndexB"));
const LpIndexC = lazy(() => import("@/pages/LpIndexC"));
const LpIndexD = lazy(() => import("@/pages/LpIndexD"));
const LpIndexE = lazy(() => import("@/pages/LpIndexE"));
const LpIndexF = lazy(() => import("@/pages/LpIndexF"));
const LpIndexG = lazy(() => import("@/pages/LpIndexG"));
const LpObrigado = lazy(() => import("@/pages/LpObrigado"));
const loadBf = () => import("@/pages/LpBf1126");
const LpBf1126B = lazy(() => import("@/pages/LpBf1126B"));
let LpBf1126: React.ComponentType = lazy(loadBf);

declare global {
  interface Window {
    /** Resolvida quando o CSS principal termina de carregar (definida no build, ver vite.config.ts). */
    __css?: Promise<void>;
  }
}

async function start() {
  // No build o CSS principal é carregado sem bloquear a pintura (o HTML estático usa o CSS crítico inline).
  // Montamos o React só depois dele chegar, para não renderizar a página sem estilos. Limite de 4 s por segurança.
  const preload = document.querySelector<HTMLLinkElement>('link[rel="preload"][as="style"]');
  // navegadores sem suporte a <link rel="preload" as="style"> aplicam o CSS direto como stylesheet
  if (preload && !preload.relList?.supports?.("preload")) preload.rel = "stylesheet";
  if (window.__css) {
    await Promise.race([window.__css, new Promise<void>((resolve) => setTimeout(resolve, 4000))]);
  }
  // rede de segurança: se o onload não rodou, garante que o CSS principal seja aplicado
  if (preload && preload.rel === "preload") preload.rel = "stylesheet";

  // /bf1126 tem primeira dobra estática no HTML: baixa a página antes de montar, para o React
  // não trocar esse HTML por um fallback vazio do Suspense (evita piscar e CLS).
  if (/^\/bf1126\/?$/.test(location.pathname)) {
    try {
      LpBf1126 = (await loadBf()).default;
    } catch {
      /* mantém o lazy como reserva */
    }
  }

  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <BrowserRouter>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<LpIndex />} />
            <Route path="/b" element={<LpIndexB />} />
            <Route path="/c" element={<LpIndexC />} />
            <Route path="/d" element={<LpIndexD />} />
            <Route path="/e" element={<LpIndexE />} />
            <Route path="/f" element={<LpIndexF />} />
            <Route path="/g" element={<LpIndexG />} />
            <Route path="/obrigado" element={<LpObrigado />} />
            <Route path="/bf1126" element={<LpBf1126 />} />
            <Route path="/bf1126-b" element={<LpBf1126B />} />
            <Route path="*" element={<LpIndex />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </React.StrictMode>,
  );
}

void start();
