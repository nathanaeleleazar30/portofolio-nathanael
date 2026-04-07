// app/components/Navbar.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { useTheme } from '../ThemeContext';
import { navLinks } from '../data/portfolio';

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl border-b border-slate-100 dark:border-slate-800/50 shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/favicon.ico"
            alt="Logo"
            width={32}
            height={32}
            className="w-8 h-8 rounded-xl shadow-lg shadow-blue-500/20 object-contain"
          />
          <span className="text-xl font-extrabold tracking-tight text-slate-950 dark:text-white transition-colors duration-300">Nathanael</span>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-600 dark:text-slate-300">
            {navLinks.map((link, i) => (
              <a key={i} href={link.href} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors group relative">
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          <button 
            type="button"
            onClick={(e) => {
              e.preventDefault();
              toggleTheme();
            }} 
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
            aria-label="Toggle Dark Mode"
          >
            {isDark ? (
              <svg className="w-5 h-5 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
            ) : (
              <svg className="w-5 h-5 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}