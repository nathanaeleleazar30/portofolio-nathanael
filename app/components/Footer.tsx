// app/components/Footer.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import PopupText from './ui/PopupText';

export default function Footer() {
  return (
    <footer className="bg-slate-950 dark:bg-black text-white mt-10 pt-16 pb-12 border-t-8 border-indigo-700 dark:border-indigo-600 relative z-0 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-slate-800 pb-10 mb-8 relative z-10">
        <div className="col-span-1 md:col-span-2 relative z-10">
          <h5 className="text-xl font-black mb-4 flex items-center gap-2">
            <Image
              src="/favicon.ico"
              alt="Logo"
              width={24}
              height={24}
              className="w-6 h-6 rounded-lg object-contain"
            />
            <PopupText
              text="Nathanael Eleazar"
              as="span"
              className=""
              onScroll
              wordDelay={80}
            />
          </h5>
          <PopupText
            text="Membangun inovasi melalui teknologi, desain antarmuka, dan kolaborasi strategis. Siap berkontribusi untuk masa depan digital."
            className="text-slate-400 text-sm font-medium leading-relaxed max-w-md"
            onScroll
            baseDelay={150}
            wordDelay={30}
          />
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
  );
}