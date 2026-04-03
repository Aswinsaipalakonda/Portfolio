import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { LenisProvider } from './providers/LenisProvider';
import './index.css';
import { Analytics } from "@vercel/analytics/react"

import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <LenisProvider>
        <Analytics />
        <App />
      </LenisProvider>
    </HelmetProvider>
  </StrictMode>
);
