import { createFileRoute } from "@tanstack/react-router";
import LpObrigado from "@/pages/LpObrigado";

export const Route = createFileRoute("/obrigado")({
  component: LpObrigado,
});
