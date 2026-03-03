import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import { LenisProvider } from './providers/LenisProvider';
import './index.css';
import { Analytics } from "@vercel/analytics/react"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <LenisProvider>
        <Analytics />
        <App />
      </LenisProvider>
    </BrowserRouter>
  </StrictMode>
);
