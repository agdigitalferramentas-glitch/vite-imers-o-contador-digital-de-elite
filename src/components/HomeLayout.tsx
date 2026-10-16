import type { ReactNode } from "react";
import HeroSection from "@/components/HeroSection";

/** Estrutura da home: hero (estático) + restante da página. Compartilhada pelo app e pelo HTML gerado no build. */
export default function HomeLayout({ cta, below }: { cta: ReactNode; below: ReactNode }) {
  return (
    <main className="theme-light hz-main bg-background text-foreground">
      <HeroSection cta={cta} />
      {below}
    </main>
  );
}
