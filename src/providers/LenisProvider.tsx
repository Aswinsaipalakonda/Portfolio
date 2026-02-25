import { useEffect, useRef } from "react";
import Lenis from "lenis";

export const LenisProvider = ({ children }: { children: React.ReactNode }) => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isReducedMotion) {
      return;
    }

    const lenis = new Lenis({
      lerp: 0.07, // Smoother and more fluid interpolation
      smoothWheel: true,
      wheelMultiplier: 1.2, // Slightly faster scroll so it doesn't feel "hard"
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    let rafId: number;

    function raf(time: number) {
      if (lenisRef.current === lenis) {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      }
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};
