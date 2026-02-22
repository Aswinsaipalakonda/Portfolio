import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

export const LenisProvider = ({ children }: { children: React.ReactNode }) => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,                // Shorter duration = snappier, more responsive feel
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential ease out for responsive curve
      smoothWheel: true,
      wheelMultiplier: 1,           // Normal wheel speed so users don't have to crank the scroll wheel
      touchMultiplier: 2,           // Boost touch for mobile responsiveness
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
