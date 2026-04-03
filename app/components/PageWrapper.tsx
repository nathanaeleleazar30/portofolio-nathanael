'use client';

import { useState, createContext, useContext } from 'react';
import SplashScreen from './SplashScreen';

// Context to let child components know splash is done (for popup animations)
export const SplashDoneContext = createContext(false);
export const useSplashDone = () => useContext(SplashDoneContext);

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(true);
  const [splashDone, setSplashDone] = useState(false);

  const handleFinish = () => {
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
