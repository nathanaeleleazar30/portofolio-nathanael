// app/components/Navbar.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { useTheme } from '../ThemeContext';
import { navLinks } from '../data/portfolio';
import Magnetic from './ui/Magnetic';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-100 dark:border-slate-800/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Magnetic>
          <a href="#" className="flex items-center gap-2 cursor-pointer group">
            <Image
              src="/favicon.ico"
              alt="Logo"
              width={32}
              height={32}
              className="w-8 h-8 rounded-xl shadow-lg shadow-blue-500/20 object-contain transition-transform duration-500 group-hover:rotate-12"
            />
            <span className="text-xl font-extrabold tracking-tight text-slate-950 dark:text-white">Nathanael</span>
          </a>
        </Magnetic>
        
        <div className="flex items-center gap-4 md:gap-8">
          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-600 dark:text-slate-300">
            {navLinks.map((link, i) => (
              <Magnetic key={i}>
                <a href={link.href} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors group relative py-1">
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              </Magnetic>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Magnetic>
              <button 
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  toggleTheme();
                }} 
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 focus:outline-none"
                aria-label="Toggle Dark Mode"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={isDark ? "dark" : "light"}
                    initial={{ scale: 0.5, opacity: 0, rotate: -90 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    exit={{ scale: 0.5, opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.15 }}
                  >
                    {isDark ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
                    )}
                  </motion.div>
                </AnimatePresence>
              </button>
            </Magnetic>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 md:hidden rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <a 
                  key={i} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}