'use client';

import { useState, createContext, useContext, useEffect } from 'react';
import SplashScreen from './SplashScreen';

// Variabel global agar splash screen hanya muncul sekali (saat load/refresh).
// Tidak akan kereset saat navigasi Next.js (misal bolak-balik ke study case).
let globalSplashFinished = false;

// Context to let child components know splash is done (for popup animations)
export const SplashDoneContext = createContext(false);
export const useSplashDone = () => useContext(SplashDoneContext);

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  // Jika globalSplashFinished sudah true, langsung jangan tampilkan splash screen
  const [showSplash, setShowSplash] = useState(!globalSplashFinished);
  const [splashDone, setSplashDone] = useState(globalSplashFinished);

  useEffect(() => {
    // Apabila komponen dimounting tapi splash sudah rekam selesai (navigasi balik), 
    // pastikan splashDone diset true.
    if (globalSplashFinished) {
      setSplashDone(true);
    }
  }, []);

  const handleFinish = () => {
    globalSplashFinished = true; // Tandai bahwa splash screen sudah berlalu
    setShowSplash(false);
    // Small delay before triggering text animations
    setTimeout(() => setSplashDone(true), 100);
  };

  return (
    <SplashDoneContext.Provider value={splashDone}>
      {showSplash && <SplashScreen onFinish={handleFinish} />}
      <div
        className={`transition-opacity duration-700 ${showSplash ? 'opacity-0' : 'opacity-100'}`}
      >
        {children}
      </div>
    </SplashDoneContext.Provider>
  );
}
