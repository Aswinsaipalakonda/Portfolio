import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Navbar } from './components/layout/Navbar';
import { SplashScreen } from './components/Shared/SplashScreen';
import { ScrollToTop } from './components/Shared/ScrollToTop';

// Code-split pages — each page loads only when navigated to (reduces initial ~381KB bundle)
const HomePage = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const CertificatesPage = lazy(() => import('./pages/CertificatesPage').then(m => ({ default: m.CertificatesPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then(m => ({ default: m.NotFoundPage as React.ComponentType })));

// Super-charge Mobile PageSpeed by deferring heavy WebGL/ThreeJS chunks
const Canvas = lazy(() => import('@react-three/fiber').then(module => ({ default: module.Canvas })));
const Space = lazy(() => import('./components/Shared/Space').then(module => ({ default: module.Space as React.ComponentType<{ starCount?: number }> })));

// Minimal loading fallback for page transitions
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-[#915EFF]/30 border-t-[#915EFF] rounded-full animate-spin" />
  </div>
);

function AppContent() {
  // Only show splash screen initially if on the home page
  const [loading, setLoading] = useState(window.location.pathname === '/');
  
  const location = useLocation();
  const is404 = location.pathname !== '/' && location.pathname !== '/contact' && location.pathname !== '/certificates' && location.pathname !== '/about';

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
                    <Space starCount={is404 ? 200 : (location.pathname === '/contact' ? 400 : (location.pathname === '/about' ? 600 : 1000))} />
                  </Suspense>
                </Canvas>
              </Suspense>
            </div>
            
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/certificates" element={<CertificatesPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
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
