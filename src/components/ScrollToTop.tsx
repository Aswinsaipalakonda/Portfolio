import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLenisContext } from '../providers/LenisProvider';

export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  const { lenis } = useLenisContext();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.slice(1));
        if (element) {
          if (lenis) {
            lenis.scrollTo(element, { lerp: 0.1 });
          } else {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 100);
    } else {
      const lockToTop = () => {
        if (lenis) {
          lenis.scrollTo(0, { immediate: true });
        }
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      };

      // Execute immediately 
      lockToTop();
      // Execute after rapid layout calculations
      setTimeout(lockToTop, 50);
      // Execute after mobile menu closing animations (Framer Motion ~300ms)
      setTimeout(lockToTop, 350);
      setTimeout(lockToTop, 600);
    }
  }, [pathname, hash, lenis]);

  return null;
};
