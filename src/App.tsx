import { useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Content } from './components/Content';
import { ContactPage } from './pages/ContactPage';
import { SplashScreen } from './components/SplashScreen';
import { ScrollToTop } from './components/ScrollToTop';

// Super-charge Mobile PageSpeed by deferring heavy WebGL/ThreeJS chunks
const Canvas = lazy(() => import('@react-three/fiber').then(module => ({ default: module.Canvas })));
const Space = lazy(() => import('./components/Space').then(module => ({ default: module.Space })));

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      <ScrollToTop />
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
              <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <Suspense fallback={null}>
                  <Canvas dpr={[1, 1.5]} gl={{ powerPreference: "high-performance", antialias: false, alpha: false }}>
                    <Suspense fallback={null}>
                      <Space />
                    </Suspense>
                  </Canvas>
                </Suspense>
              </div>
              
              <Routes>
                <Route path="/" element={<Content />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
