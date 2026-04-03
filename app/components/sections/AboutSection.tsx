// app/components/sections/AboutSection.tsx
'use client';

import React from 'react';
import ScrollReveal from '../ScrollReveal';
import PopupText from '../ui/PopupText';

export default function AboutSection() {
  return (
    <ScrollReveal>
      <div id="tentang" className="bg-white dark:bg-slate-800/80 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-700/50 shadow-sm transition-all duration-500 scroll-mt-28">
        <PopupText
          text="Tentang Diri"
          as="h2"
          className="text-2xl font-black text-slate-950 dark:text-white mb-6"
          baseDelay={0}
          wordDelay={80}
        />
        <div className="text-slate-700 dark:text-slate-300 text-justify text-sm space-y-5 font-medium">
          <PopupText
            text="Halo! Perkenalkan, nama saya Nathanael Eleazar Handata, mahasiswa Semester 2 Program Studi Teknologi Informasi di Universitas Brawijaya. Saya memiliki minat yang besar di persimpangan antara teknologi, multimedia, dan desain antarmuka (UI/UX)."
            baseDelay={200}
            wordDelay={30}
          />
          <PopupText
            text="Selain antusias mengeksplorasi dunia web development seperti ReactJS, Tailwind CSS, serta fundamental OOP dengan Java, saya juga aktif berorganisasi. Saat ini, saya mengemban amanah sebagai Kepala Departemen Hubungan Eksternal di HMPSTI dan Dirjen Olahraga SENORA di BEM Fakultas Vokasi. Keterlibatan ini sangat membantu saya dalam mengasah kepemimpinan, public speaking, dan komunikasi strategis."
            baseDelay={600}
            wordDelay={25}
          />
        </div>
      </div>
    </ScrollReveal>
  );
}