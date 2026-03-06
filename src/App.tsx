import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Content } from './components/Content';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { SplashScreen } from './components/SplashScreen';
import { ScrollToTop } from './components/ScrollToTop';



// Super-charge Mobile PageSpeed by deferring heavy WebGL/ThreeJS chunks
const Canvas = lazy(() => import('@react-three/fiber').then(module => ({ default: module.Canvas })));
const Space = lazy(() => import('./components/Space').then(module => ({ default: module.Space as React.ComponentType<{ starCount?: number }> })));

function AppContent() {
  // Only show splash screen initially if on the home page
  const [loading, setLoading] = useState(window.location.pathname === '/');
  
  const location = useLocation();
  const is404 = location.pathname !== '/' && location.pathname !== '/contact';

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
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
              <Suspense fallback={null}>
                <Canvas dpr={[1, 1.5]} gl={{ powerPreference: "high-performance", antialias: false, alpha: false }}>
                  <Suspense fallback={null}>
                    <Space starCount={is404 ? 300 : 4000} />
                  </Suspense>
                </Canvas>
              </Suspense>
            </div>
            
            <Routes>
              <Route path="/" element={<Content />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;
