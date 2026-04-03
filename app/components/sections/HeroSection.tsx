// app/components/sections/HeroSection.tsx
'use client';

import React from 'react';
import ProfileCard from '../ui/ProfileCard'; // <-- Import komponen kartu profil animasi kita

export default function HeroSection() {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-start lg:items-end -mt-20 md:-mt-32 mb-10 gap-6 lg:gap-0">
      
      {/* === Panggil KARTU PROFIL HOLOGRAFIK 3D ==== */}
      <ProfileCard />

      {/* Jika Anda punya konten lain di kolom kanan Hero, letakkan di sini */}

    </section>
  );
}