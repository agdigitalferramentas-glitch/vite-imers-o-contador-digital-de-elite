import { renderToStaticMarkup } from "react-dom/server";
import ComboLayout from "@/components/combo/ComboLayout";

/**
 * HTML estático da primeira dobra da /combo (faixa do topo + hero), injetado em combo/index.html
 * no build (vite.config.ts). O React o substitui ao montar, com a mesma marcação.
 */
export function renderComboShell(): string {
  return renderToStaticMarkup(<ComboLayout />);
}
