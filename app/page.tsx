// app/page.tsx
import React from 'react';
import Image from 'next/image';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageWrapper from './components/PageWrapper';

// Extracted Sections
import ProfileCard from './components/ui/ProfileCard';
import AboutSection from './components/sections/AboutSection';
import ExperienceSection from './components/sections/ExperienceSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ContactSection from './components/sections/ContactSection';
import TechToolsScroll from './components/sections/TechToolsScroll';

export default function Home() {
  return (
    <PageWrapper>
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 selection:bg-indigo-100 dark:selection:bg-indigo-900/50 selection:text-indigo-900 dark:selection:text-indigo-100 font-sans relative transition-colors duration-300">
      <div className="bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 dark:opacity-5 pointer-events-none absolute inset-0 z-0"></div>

      <Navbar />

      {/* === HEADER PANORAMA (FULL WIDTH) ==== */}
      <div className="w-full pt-[72px] relative z-10 bg-slate-900 overflow-hidden">
        <Image
          src="/header-bg.jpg"
          alt="Header Banner"
          width={1920}
          height={600}
          priority
          /* FIX: Memaksa gambar membentang 100% layar dari kiri ke kanan */
          className="w-full h-auto min-h-[30vh] object-cover object-top block opacity-90 dark:opacity-80 transition-opacity duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-50 dark:to-slate-950 pointer-events-none transition-colors duration-300"></div>
      </div>

      {/* === MAIN CONTENT CONTAINER ==== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pb-16 -mt-12 md:-mt-16 lg:-mt-24">
        <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl rounded-[2.5rem] shadow-2xl dark:shadow-none p-6 sm:p-10 lg:p-14 border border-white/60 dark:border-slate-800 transition-all duration-300">

          {/* === GRID UTAMA ==== */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-4 gap-x-12">

            {/* KOLOM KIRI: Profil */}
            <div className="lg:col-span-1">
              <div className="flex justify-center lg:justify-start lg:-mt-28 relative z-30">
                <ProfileCard />
              </div>
            </div>

            {/* KOLOM KANAN: Tentang Diri */}
            <div className="lg:col-span-2 lg:pt-4">
              <AboutSection />
            </div>

            {/* FULL WIDTH: Tech Stack (Lurus) */}
            <div className="lg:col-span-3 mt-6">
              <TechToolsScroll />
            </div>

            {/* KOLOM KIRI BAWAH: Kontak */}
            <div className="lg:col-span-1 space-y-14 mt-6">
              <ContactSection />
            </div>

            {/* KOLOM KANAN BAWAH: Pengalaman & Proyek */}
            <div className="lg:col-span-2 space-y-14 mt-6">
              <ExperienceSection />
              <ProjectsSection />
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
    </PageWrapper>
  );
}