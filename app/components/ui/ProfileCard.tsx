// app/components/ui/ProfileCard.tsx
'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion';
import PopupText from './PopupText';
import Magnetic from './Magnetic';

export default function ProfileCard() {
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), springConfig);

  const glowX = useSpring(useTransform(mouseX, [-0.5, 0.5], [0, 100]), springConfig);
  const glowY = useSpring(useTransform(mouseY, [-0.5, 0.5], [0, 100]), springConfig);

  const bgPosition = useMotionTemplate`${glowX}% ${glowY}%`;

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = (event.clientX - left) / width - 0.5;
    const y = (event.clientY - top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="relative group cursor-pointer shrink-0 scroll-mt-28 perspective-1000"
    >
      <motion.div
        className="w-80 h-[28rem] rounded-[2.5rem] shadow-2xl dark:shadow-none transition-transform duration-500 relative border border-white/60 dark:border-slate-800 bg-white dark:bg-slate-900 group-hover:scale-105 active:scale-100"
        style={{ transformStyle: 'preserve-3d' }}
      >

        {/* === LAPISAN BACKGROUND === */}
        <motion.div
          style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(34, 211, 238, 0.5) 0%, rgba(52, 211, 153, 0.5) 25%, rgba(236, 72, 153, 0.5) 50%, rgba(147, 51, 234, 0.5) 75%, rgba(67, 56, 202, 0.5) 100%)',
            backgroundSize: '250% 250%',
            backgroundPosition: bgPosition,
          }}
          className="absolute inset-0 z-0 rounded-[2.4rem] opacity-10 group-hover:opacity-100 transition-opacity duration-700"
        />
        <div className="absolute inset-px rounded-[2.4rem] bg-white/95 dark:bg-slate-950/95 transition-colors duration-300 z-10"></div>
        <div className="absolute inset-0 z-10 opacity-10 rounded-[2.4rem] bg-[url('https://www.transparenttextures.com/patterns/grid.png')]"></div>

        {/* === 1. TEKS ATAS === */}
        <div className="absolute top-10 left-0 right-0 z-30 text-center pointer-events-none font-outfit" style={{ transform: "translateZ(50px)" }}>
          <PopupText
            text="Nathanael Eleazar"
            as="h1"
            className="text-3xl font-black text-slate-950 dark:text-white tracking-tight leading-tight transition-colors duration-500 group-hover:text-blue-900 dark:group-hover:text-white justify-center"
            baseDelay={100}
            wordDelay={120}
          />
          <PopupText
            text="Undergraduate IT Student"
            as="p"
            className="text-sm font-bold text-slate-700 dark:text-slate-300 mt-1 transition-colors duration-500 group-hover:text-blue-800 dark:group-hover:text-slate-100 justify-center"
            baseDelay={350}
            wordDelay={100}
          />
        </div>

        {/* === 2. FOTO PROFIL === */}
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none mt-6" style={{ transform: "translateZ(40px)" }}>
          <Image
            src="/foto-profil-isolated.png"
            alt="Nathanael"
            width={256}
            height={384}
            priority
            style={{ width: "auto" }} // <-- FIX 1: Memuaskan aspek rasio Next.js
            className="object-contain h-72 transition-all duration-700 filter brightness(110%) contrast(105%) group-hover:hue-rotate-[15deg] group-hover:brightness(115%) drop-shadow-[0_20px_20px_rgba(0,0,0,0.3)]"
          />
        </div>

        {/* === 3. PANEL GLASSMORPHISM === */}
        <div className="absolute bottom-0 left-0 right-0 p-5 z-40 bg-white/20 dark:bg-slate-950/30 backdrop-blur-xl border-t border-white/40 dark:border-slate-800/60 rounded-b-[2.4rem] flex items-center justify-between gap-4 transition-all duration-500 group-hover:border-white/60 shadow-[0_-10px_30px_rgba(0,0,0,0.1)]" style={{ transform: "translateZ(70px)" }}>

          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-700 overflow-hidden relative bg-white dark:bg-slate-800 shadow-md">
              <Image
                src="/foto-profil-isolated.png"
                alt="Avatar"
                fill
                sizes="40px" // <-- FIX 2: Memberi tahu Next.js ukuran pastinya
                className="object-cover"
              />
            </div>
            <div>
              <span className="block font-black text-sm text-slate-900 dark:text-white transition-colors duration-500 group-hover:text-blue-800 dark:group-hover:text-blue-300">
                @nthanaellll
              </span>
              <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                <span className="animate-pulse absolute inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                Online
              </span>
            </div>
          </div>

          <Magnetic>
            <a href="/CV_NATHANAEL.pdf" download className="px-5 py-3 bg-gradient-to-br from-indigo-600 to-blue-700 hover:from-indigo-700 hover:to-blue-800 text-white text-xs font-black rounded-2xl shadow-xl shadow-indigo-500/30 transition-all duration-300 flex items-center gap-2 transform active:scale-95 disabled:opacity-70">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
              CV
            </a>
          </Magnetic>

        </div>

      </motion.div>
    </motion.div>
  );
}