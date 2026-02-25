import { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { AnimatePresence, motion } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Space } from './components/Space';
import { Content } from './components/Content';
import { SplashScreen } from './components/SplashScreen';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative min-h-screen bg-black w-full max-w-full overflow-x-clip">
      <AnimatePresence mode="wait">
        {loading ? (
          <SplashScreen key="splash" onComplete={() => setLoading(false)} />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Navbar />
            <div className="absolute inset-0 overflow-hidden">
              <Canvas>
                <Suspense fallback={null}>
                  <Space />
                </Suspense>
              </Canvas>
            </div>
            <Content />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;