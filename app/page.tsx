// app/page.tsx
import React from 'react';
import Image from 'next/image';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Extracted Sections
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ExperienceSection from './components/sections/ExperienceSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ContactSection from './components/sections/ContactSection';
import SkillsSection from './components/sections/SkillsSection'; // <-- Import baru kita

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 selection:bg-indigo-100 dark:selection:bg-indigo-900/50 selection:text-indigo-900 dark:selection:text-indigo-100 font-sans relative transition-colors duration-300">
      <div className="bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 dark:opacity-5 pointer-events-none absolute inset-0 z-0"></div>

      <Navbar />

      {/* === HEADER PANORAMA ==== */}
      <div className="w-full pt-[72px] relative z-10 bg-slate-900 flex justify-center overflow-hidden">
        <Image 
          src="/header-bg.jpg" 
          alt="Header Banner" 
          width={1920}
          height={600}
          priority
          className="w-full h-auto max-h-[70vh] object-contain block opacity-90 dark:opacity-75 transition-opacity duration-300" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-50 dark:to-slate-950 pointer-events-none transition-colors duration-300"></div>
      </div>

      {/* === MAIN CONTENT CONTAINER ==== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 md:-mt-12 relative z-20 pb-16">
        <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl rounded-[2.5rem] shadow-2xl dark:shadow-none p-6 sm:p-10 lg:p-14 border border-white/60 dark:border-slate-800 transition-all duration-300">
          
          <HeroSection />

          {/* === MAIN GRID ==== */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
            
            {/* KOLOM KIRI */}
            <div className="lg:col-span-1 space-y-10">
              <ContactSection />
              <SkillsSection /> {/* <-- Komponen yang baru kita buat masuk ke sini */}
            </div>

            {/* KOLOM KANAN */}
            <div className="lg:col-span-2 space-y-14">
              <AboutSection />
              <ExperienceSection />
              <ProjectsSection />
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}