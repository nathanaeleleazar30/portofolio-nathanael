'use client'; 

import React from 'react';
import { useTheme } from './ThemeContext'; // Sesuaikan path jika berbeda

export default function Home() {
  // === MENGAMBIL STATE DARI CONTEXT ===
  const { isDark, toggleTheme } = useTheme();

  const hardSkills = [
    { name: 'UI/UX Design (Figma)', level: '90%', icon: '🎨' },
    { name: 'Multimedia & Broadcasting', level: '85%', icon: '🎥' },
    { name: 'Graphic Design (Photoshop)', level: '85%', icon: '🖼️' },
    { name: 'ReactJS, Next.js & Tailwind', level: '75%', icon: '💻' },
  ];

  const experienceData = [
    {
      role: 'Kepala Departemen Hubungan Eksternal',
      organization: 'HMPSTI Universitas Brawijaya',
      time: 'Jan 2026 - Sekarang',
      description: 'Membangun relasi strategis kampus dan merancang Grand Design departemen untuk VISTECH.'
    },
    {
      role: 'Dirjen Olahraga Kementrian SENORA',
      organization: 'BEM Fakultas Vokasi UB',
      time: 'Jan 2026 - Sekarang',
      description: 'Mengkoordinasikan minat dan bakat mahasiswa serta mengelola event keolahragaan massal.'
    }
  ];

  const projectData = [
    {
      title: 'VISTECH',
      tech: 'Relasi Strategis | IT Exposure',
      description: 'Inisiatif program kerja di bawah Departemen Hubungan Eksternal untuk memperkuat relasi institusi dan industri luar.',
      gradient: 'from-blue-600 to-indigo-700'
    },
    {
      title: 'Ramadhan Charity Connect',
      tech: 'Sosial | Manajemen Acara',
      description: 'Program sosial kolaboratif di bawah bendera HMPSTI untuk menjalin empati kemasyarakatan.',
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      title: 'Program Keolahragaan BEM',
      tech: 'Event Management | Leadership',
      description: 'Menginisiasi dan mengeksekusi berbagai wadah minat bakat olahraga bagi mahasiswa.',
      gradient: 'from-orange-500 to-rose-600'
    },
    {
      title: 'STIVOFEST 2026',
      tech: 'Festival Olahraga | Malang Raya',
      description: 'Menginisasi event olahraga yang menjadi wadah kompetisi dan kolaborasi antar kampus di Malang Raya.',
      gradient: 'from-amber-600 to-amber-900'
    }
  ];

  const animationFadeUp = "transition-all duration-700 delay-100 group-hover:scale-105 group-hover:-translate-y-1 transform hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-indigo-900/20";

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 selection:bg-indigo-100 dark:selection:bg-indigo-900/50 selection:text-indigo-900 dark:selection:text-indigo-100 font-sans relative transition-colors duration-300">
      <div className="bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 dark:opacity-5 pointer-events-none absolute inset-0 z-0"></div>

      {/* === NAVBAR MODERN ==== */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl border-b border-slate-100 dark:border-slate-800/50 shadow-sm transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center font-black text-white text-lg shadow-lg shadow-blue-500/20">N</div>
            <span className="text-xl font-extrabold tracking-tight text-slate-950 dark:text-white transition-colors duration-300">Nathanael</span>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-600 dark:text-slate-300">
              {['Tentang', 'Pengalaman', 'Proyek', 'Kontak'].map((link, i) => (
                <a key={i} href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors group relative">
                  {link}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>

            {/* === TOMBOL DARK MODE TOGLE (MENGGUNAKAN CONTEXT) === */}
            <button 
              onClick={toggleTheme} 
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300 hover:scale-105 active:scale-95"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* === HEADER PANORAMA ==== */}
      <div className="w-full pt-[72px] relative z-10 bg-slate-900 flex justify-center overflow-hidden">
        <img 
          src="/header-bg.jpg" 
          alt="Header Banner" 
          className="w-full h-auto max-h-[70vh] object-contain block opacity-90 dark:opacity-75 transition-opacity duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-50 dark:to-slate-950 pointer-events-none transition-colors duration-300"></div>
      </div>

      {/* === MAIN CONTENT CONTAINER ==== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 md:-mt-12 relative z-20 pb-16">
        <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl rounded-[2.5rem] shadow-2xl dark:shadow-none p-6 sm:p-10 lg:p-14 border border-white/60 dark:border-slate-800 transition-all duration-300 transform motion-safe:animate-fade-in-up">
          
          {/* === TOP SECTION: FOTO & CV ==== */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end -mt-20 md:-mt-32 mb-10 gap-6 lg:gap-0">
            
            <div className="relative group cursor-pointer shrink-0 transition-transform duration-500 hover:scale-105">
              <img
                src="/foto-profil.JPG" 
                alt="Foto Profil Nathanael"
                className="w-40 h-40 md:w-56 md:h-56 rounded-full border-[6px] md:border-[8px] border-white dark:border-slate-800 object-cover shadow-2xl dark:shadow-black/50 relative z-10 bg-slate-100 dark:bg-slate-800 transition-colors duration-300"
              />
              <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 z-20 flex h-6 w-6 md:h-8 md:w-8 items-center justify-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 md:h-6 md:w-6 bg-green-500 border-2 border-white dark:border-slate-800 transition-colors duration-300"></span>
              </div>
            </div>

            <div className="flex w-full lg:w-auto lg:pb-6">
              <a href="/CV_NATHANAEL.pdf" download className="w-full lg:w-auto px-8 py-3.5 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 hover:from-blue-700 hover:to-purple-900 text-white text-sm font-extrabold rounded-2xl shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-1.5 active:scale-95">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                Download CV
              </a>
            </div>
          </div>

          {/* === IDENTITAS UTAMA ==== */}
          <div className="border-b border-slate-100 dark:border-slate-800/60 pb-10 text-left transition-colors duration-300">
            <h1 className="text-4xl md:text-5xl font-black text-slate-950 dark:text-white tracking-tight leading-tight transition-colors duration-300">Nathanael Eleazar Handata</h1>
            <p className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-500 mt-2">
              Undergraduate Student of Information Technology
            </p>

            <div className="flex flex-wrap gap-3 mt-6 text-sm font-semibold">
              <span className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700/50 transition-colors duration-300">
                Domisili: Palembang
              </span>
              <span className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700/50 transition-colors duration-300">
                Universitas Brawijaya
              </span>
            </div>
          </div>

          {/* === MAIN CONTENT GRID ==== */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
            
            {/* === KOLOM KIRI === */}
            <div className="lg:col-span-1 space-y-10">
              
              {/* === CONTACT ME === */}
              <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 p-8 rounded-[2rem] shadow-2xl dark:shadow-none text-white relative overflow-hidden group border border-transparent dark:border-slate-800">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-bl-[4rem] transition-transform duration-500 group-hover:scale-125 pointer-events-none"></div>
                
                <h3 className="text-2xl font-black mb-4 flex items-center gap-3 relative z-10">
                  <div className="w-2 h-8 bg-blue-500 rounded-full"></div>
                  Mari Berkolaborasi!
                </h3>
                
                <p className="text-slate-300 text-sm mb-6 relative z-10 font-medium leading-relaxed">
                  Jangan ragu untuk menghubungi saya untuk diskusi seputar teknologi, desain, atau peluang kerja sama.
                </p>

                <div className="space-y-4 relative z-10">
                  <a href="https://wa.me/6283869991137" target="_blank" rel="noreferrer" className="flex items-center gap-4 bg-white/10 hover:bg-emerald-500 p-3.5 rounded-2xl transition-all duration-300 border border-white/5 hover:border-emerald-400 group/btn transform hover:-translate-y-1">
                    <div className="bg-emerald-500 group-hover/btn:bg-white text-white group-hover/btn:text-emerald-500 p-2 rounded-xl transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.766 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.393.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.098.824z"/></svg>
                    </div>
                    <div>
                      <span className="block font-bold text-sm text-white">WhatsApp</span>
                      <span className="block font-medium text-xs text-slate-300 group-hover/btn:text-emerald-100">+62 838-6999-1137</span>
                    </div>
                  </a>

                  <a href="https://www.linkedin.com/in/nathanael-eleazar/" target="_blank" rel="noreferrer" className="flex items-center gap-4 bg-white/10 hover:bg-[#0A66C2] p-3.5 rounded-2xl transition-all duration-300 border border-white/5 hover:border-[#0A66C2] group/btn transform hover:-translate-y-1">
                    <div className="bg-[#0A66C2] group-hover/btn:bg-white text-white group-hover/btn:text-[#0A66C2] p-2 rounded-xl transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </div>
                    <div>
                      <span className="block font-bold text-sm text-white">LinkedIn</span>
                      <span className="block font-medium text-xs text-slate-300 group-hover/btn:text-blue-100">Nathanael Eleazar</span>
                    </div>
                  </a>

                  <a href="https://instagram.com/nthanaellll" target="_blank" rel="noreferrer" className="flex items-center gap-4 bg-white/10 hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] p-3.5 rounded-2xl transition-all duration-300 border border-white/5 group/btn transform hover:-translate-y-1">
                    <div className="bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] group-hover/btn:bg-white text-white group-hover/btn:text-[#ee2a7b] p-2 rounded-xl transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    </div>
                    <div>
                      <span className="block font-bold text-sm text-white">Instagram</span>
                      <span className="block font-medium text-xs text-slate-300 group-hover/btn:text-pink-100">@nthanaellll</span>
                    </div>
                  </a>

                  <a href="mailto:nathanaeleleazar30@gmail.com" className="flex items-center gap-4 bg-white/10 hover:bg-rose-500 p-3.5 rounded-2xl transition-all duration-300 border border-white/5 hover:border-rose-400 group/btn transform hover:-translate-y-1">
                    <div className="bg-rose-500 group-hover/btn:bg-white text-white group-hover/btn:text-rose-500 p-2 rounded-xl transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    </div>
                    <div>
                      <span className="block font-bold text-sm text-white">Email</span>
                      <span className="block font-medium text-xs text-slate-300 group-hover/btn:text-rose-100">nathanaeleleazar30...</span>
                    </div>
                  </a>
                </div>
              </div>

              {/* === TECH & TOOLS === */}
              <div className="bg-white dark:bg-slate-800/80 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-700/50 shadow-xl shadow-slate-200/40 dark:shadow-none transition-colors duration-300">
                <h3 className="text-xl font-black text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                  Tech & Tools
                </h3>
                <div className="space-y-6">
                  {hardSkills.map((skill, index) => (
                    <div key={index} className="group">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{skill.icon} {skill.name}</span>
                        <span className="text-sm font-black text-indigo-700 dark:text-indigo-400">{skill.level}</span>
                      </div>
                      <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2.5 overflow-hidden border border-slate-200/50 dark:border-slate-600/50">
                        <div 
                          className="bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 dark:from-blue-500 dark:to-purple-500 h-2.5 rounded-full transition-all duration-1000 ease-out delay-300 transform scale-x-0 group-hover:scale-x-100 origin-left" 
                          style={{ width: skill.level }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* === KOLOM KANAN === */}
            <div className="lg:col-span-2 space-y-14">
              
              <div className="bg-white dark:bg-slate-800/80 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-700/50 shadow-sm hover:shadow-lg dark:hover:shadow-indigo-900/10 transition-all duration-500">
                <h2 className="text-2xl font-black text-slate-950 dark:text-white mb-6 flex items-center gap-3 transition-colors duration-300">
                  Tentang Diri
                </h2>
                <div className="text-slate-700 dark:text-slate-300 leading-relaxed text-justify text-sm space-y-5 font-medium transition-colors duration-300">
                  <p>
                    Halo! Perkenalkan, nama saya Nathanael Eleazar Handata, mahasiswa Semester 2 Program Studi Teknologi Informasi di Universitas Brawijaya. Saya memiliki minat yang besar di persimpangan antara teknologi, multimedia, dan desain antarmuka (UI/UX).
                  </p>
                  <p>
                    Selain antusias mengeksplorasi dunia web development seperti ReactJS dan Tailwind CSS, saya juga aktif berorganisasi. Saat ini, saya mengemban amanah sebagai Kepala Departemen Hubungan Eksternal di HMPSTI dan Dirjen Olahraga SENORA di BEM Fakultas Vokasi.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-black text-slate-950 dark:text-white mb-8 flex items-center gap-3 transition-colors duration-300">
                  Pengalaman Organisasi
                </h2>
                <div className="space-y-6 relative before:absolute before:inset-y-0 before:left-[18px] before:w-0.5 before:bg-gradient-to-b before:from-blue-600 before:to-slate-200 dark:before:to-slate-700 before:rounded-full">
                  {experienceData.map((exp, i) => (
                    <div key={i} className="relative pl-14 group">
                      <div className="absolute left-0 top-1 w-9 h-9 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 rounded-full border-4 border-white dark:border-slate-900 shadow-md flex items-center justify-center transition-transform group-hover:scale-110">
                        <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                      </div>
                      <div className={`bg-white dark:bg-slate-800/80 p-7 rounded-[2rem] border border-slate-100 dark:border-slate-700/50 shadow-sm ${animationFadeUp} transition-colors duration-300`}>
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2 gap-2">
                          <h4 className="font-black text-slate-950 dark:text-white text-xl tracking-tight leading-snug">{exp.role}</h4>
                          <span className="inline-block px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs font-black rounded-full w-fit">{exp.time}</span>
                        </div>
                        <p className="text-sm font-bold text-indigo-700 dark:text-indigo-400 mb-3">{exp.organization}</p>
                        <p className="text-slate-600 dark:text-slate-400 text-sm font-medium leading-relaxed">{exp.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-black text-slate-950 dark:text-white mb-8 flex items-center gap-3 transition-colors duration-300">
                  Proyek Unggulan
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {projectData.map((project, i) => (
                    <div key={i} className={`bg-white dark:bg-slate-800/80 rounded-[2rem] border border-slate-100 dark:border-slate-700/50 shadow-sm group overflow-hidden ${animationFadeUp} transition-colors duration-300`}>
                      <div className={`h-36 bg-gradient-to-br ${project.gradient} relative overflow-hidden flex items-center justify-center`}>
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                        <h3 className="text-white text-2xl font-extrabold relative z-10 drop-shadow-md tracking-tight text-center px-4">{project.title}</h3>
                      </div>
                      <div className="p-6">
                        <p className="text-xs font-bold text-indigo-700 dark:text-indigo-400 mb-2 uppercase tracking-wider">{project.tech}</p>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{project.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* === FOOTER PROFESSIONAL ==== */}
      <footer className="bg-slate-950 dark:bg-black text-white mt-10 pt-16 pb-12 border-t-8 border-indigo-700 dark:border-indigo-600 relative z-0 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-slate-800 pb-10 mb-8 relative z-10">
          <div className="col-span-1 md:col-span-2 relative z-10">
            <h5 className="text-xl font-black mb-4 flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center font-black text-white text-sm">N</div>
              Nathanael Eleazar
            </h5>
            <p className="text-slate-400 text-sm font-medium leading-relaxed max-w-md">Membangun inovasi melalui teknologi, desain antarmuka, dan kolaborasi strategis. Siap berkontribusi untuk masa depan digital.</p>
          </div>
          <div className="col-span-1 relative z-10">
            <h5 className="text-sm font-extrabold mb-4 uppercase text-slate-500 tracking-wider">Mari Terhubung</h5>
            <div className="space-y-3 text-slate-300 text-sm font-medium relative z-10">
              <a href="https://www.linkedin.com/in/nathanael-eleazar/" className="block hover:text-white transition-colors">LinkedIn Profile</a>
              <a href="mailto:nathanaeleleazar30@gmail.com" className="block hover:text-white transition-colors">Kirim Email</a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 text-center text-slate-500 text-xs font-semibold relative z-10">
          © 2026 Nathanael Eleazar Handata. Malang, Jawa Timur. Built with Next.js & Tailwind.
        </div>
      </footer>
    </div>
  );
}