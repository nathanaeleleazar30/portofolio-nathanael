'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function FloatingStatus() {
  return (
    <motion.div 
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="fixed bottom-8 right-8 z-[40] hidden md:block"
    >
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 p-3 px-4 rounded-2xl shadow-2xl flex items-center gap-3">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
        </span>
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-widest font-black text-slate-500 dark:text-slate-400 leading-none mb-1">Status</span>
          <span className="text-sm font-bold text-slate-900 dark:text-white leading-none">Open for Work</span>
        </div>
      </div>
    </motion.div>
  );
}
