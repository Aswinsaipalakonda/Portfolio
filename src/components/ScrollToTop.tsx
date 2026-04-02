import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLenisContext } from '../providers/LenisProvider';

export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  const { lenis } = useLenisContext();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        if (lenis) {
          lenis.scrollTo(element, { lerp: 0.1 });
        } else {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    }
  }, [pathname, hash, lenis]);

  return null;
};
