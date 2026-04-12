'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Mesh Gradients */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -top-[10%] -left-[10%] w-[70%] md:w-[40%] h-[40%] rounded-full bg-indigo-500/10 dark:bg-indigo-500/5 blur-[80px] md:blur-[120px] will-change-transform"
      />
      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 50, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[20%] -right-[5%] w-[60%] md:w-[35%] h-[35%] rounded-full bg-blue-500/10 dark:bg-blue-600/5 blur-[80px] md:blur-[120px] will-change-transform"
      />
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -50, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-[10%] left-[20%] w-[80%] md:w-[45%] h-[45%] rounded-full bg-violet-500/10 dark:bg-violet-600/5 blur-[80px] md:blur-[120px] will-change-transform"
      />
      
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] will-change-opacity"></div>
    </div>
  );
}
