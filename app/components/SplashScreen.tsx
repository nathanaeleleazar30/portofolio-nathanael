'use client';

import { useState, useEffect, useCallback } from 'react';

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
  const [count, setCount] = useState(90);
  const [phase, setPhase] = useState<'counting' | 'done' | 'exit'>('counting');

  const handleExit = useCallback(() => {
    setPhase('done');
    // Brief pause at 100, then slide/scale out
    setTimeout(() => {
      setPhase('exit');
      setTimeout(() => {
        onFinish();
      }, 900);
    }, 500);
  }, [onFinish]);

  useEffect(() => {
    if (count >= 100) {
      const timer = setTimeout(handleExit, 300);
      return () => clearTimeout(timer);
    }

    // Accelerate: slow at start, faster approaching 100
    const speed = count < 93 ? 140 : count < 96 ? 100 : count < 98 ? 60 : 40;
    const timer = setTimeout(() => setCount((c) => c + 1), speed);
    return () => clearTimeout(timer);
  }, [count, handleExit]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-all duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)]
        ${phase === 'exit' ? 'opacity-0 scale-[1.08]' : 'opacity-100 scale-100'}
      `}
      style={{ background: '#000000' }}
    >
      {/* Mesh gradient blobs — matching reference (purple/blue corners) */}
      <div
        className="absolute top-0 left-0 w-[60vw] h-[60vh] opacity-70"
        style={{
          background: 'radial-gradient(ellipse at 10% 10%, rgba(124,58,237,0.6) 0%, rgba(88,28,235,0.3) 40%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      <div
        className="absolute top-0 right-0 w-[55vw] h-[55vh] opacity-60"
        style={{
          background: 'radial-gradient(ellipse at 90% 15%, rgba(147,51,234,0.5) 0%, rgba(219,120,180,0.25) 35%, transparent 70%)',
          filter: 'blur(70px)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[40vw] h-[40vh] opacity-50"
        style={{
          background: 'radial-gradient(ellipse at 5% 95%, rgba(37,99,235,0.5) 0%, transparent 65%)',
          filter: 'blur(60px)',
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[45vw] h-[35vh] opacity-40"
        style={{
          background: 'radial-gradient(ellipse at 95% 90%, rgba(99,102,241,0.4) 0%, transparent 60%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Centered number — clean, bold, white, like reference */}
      <span
        className="relative text-white font-black text-[5rem] md:text-[7rem] tabular-nums leading-none tracking-tight select-none"
        style={{
          fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
        }}
      >
        {count}
      </span>
    </div>
  );
}
