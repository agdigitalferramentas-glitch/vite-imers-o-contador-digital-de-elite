import { createFileRoute } from "@tanstack/react-router";
import LpIndex from "@/pages/LpIndex";

export const Route = createFileRoute("/")({
  component: LpIndex,
});
