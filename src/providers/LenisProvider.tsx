import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

export const LenisProvider = ({ children }: { children: React.ReactNode }) => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8,                // Longer duration = lighter, floatier feel
      easing: (t: number) => 1 - Math.pow(1 - t, 4), // Quartic ease-out for extra softness
      smoothWheel: true,
      wheelMultiplier: 0.8,         // Reduce wheel speed for a lighter sensation
      touchMultiplier: 1.5,         // Slightly boost touch for mobile responsiveness
      infinite: false,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};
