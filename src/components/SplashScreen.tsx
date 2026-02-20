import { useState, useEffect } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [counter, setCounter] = useState(0);
  const name = "Aswinsai";

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 1000);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  // Smooth progress value
  const smoothProgress = useSpring(0, {
    stiffness: 40,
    damping: 15
  });

  useEffect(() => {
    smoothProgress.set(counter);
  }, [counter, smoothProgress]);

  // Map progress (0-100) to Y coordinates (200 down to 0)
  const yPos = useTransform(smoothProgress, [0, 100], [200, 0]);
  const wave1Y = useTransform(smoothProgress, [0, 100], [185, -15]);
  const wave2Y = useTransform(smoothProgress, [0, 100], [190, -10]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        scale: 10,
        opacity: 0,
        transition: { 
          duration: 1.5, 
          ease: [0.7, 0, 0.3, 1] 
        } 
      }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a0a]"
    >
      <div className="relative flex flex-col items-center w-full max-w-4xl px-4">
        <div className="relative w-full aspect-[4/1]">
          <svg
            viewBox="0 0 800 200"
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <mask id="splashMask">
                <text
                  x="50%"
                  y="50%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  fontSize="120"
                  fontWeight="900"
                  letterSpacing="-0.05em"
                  fill="white"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {name}
                </text>
              </mask>
            </defs>

            {/* Background Base Text */}
            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              fontSize="120"
              fontWeight="900"
              letterSpacing="-0.05em"
              fill="#1a1a1a"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {name}
            </text>

            {/* Masked Liquid Group */}
            <g mask="url(#splashMask)">
              {/* Solid Fill */}
              <motion.rect
                x="0"
                style={{ y: yPos }}
                width="800"
                height="200"
                fill="white"
              />

              {/* Wave 1 */}
              <motion.path
                d="M 0 10 Q 100 0 200 10 Q 300 20 400 10 Q 500 0 600 10 Q 700 20 800 10 V 50 H 0 Z"
                fill="white"
                style={{ y: wave1Y }}
                animate={{ x: [0, -200, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />

              {/* Wave 2 */}
              <motion.path
                d="M 0 10 Q 100 20 200 10 Q 300 0 400 10 Q 500 20 600 10 Q 700 0 800 10 V 50 H 0 Z"
                fill="rgba(255,255,255,0.5)"
                style={{ y: wave2Y }}
                animate={{ x: [-200, 0, -200] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
            </g>
          </svg>

          {/* Counter info */}
          <div className="absolute bottom-[-1rem] right-4 flex items-baseline gap-2">
            <span className="text-[10px] text-gray-600 uppercase tracking-widest">loading</span>
            <span className="text-sm font-bold text-white tabular-nums">{counter}%</span>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none opacity-[0.05] contrast-150 mix-blend-soft-light" style={{ zIndex: -1 }}>
        <svg width="100%" height="100%">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>
    </motion.div>
  );
};
