// app/projects/[slug]/page.tsx
import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projectData } from '../../data/portfolio';

// 1. Tambahkan 'async' dan ubah tipe params menjadi Promise (Syarat Next.js 15)
export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  
  // 2. Gunakan 'await' untuk mengekstrak slug-nya
  const resolvedParams = await params;
  
  // 3. Sekarang baru kita cari datanya
  const project = projectData.find((p) => p.slug === resolvedParams.slug);

  // Jika proyek tidak ditemukan, arahkan ke halaman 404
  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans transition-colors duration-300">
      
      {/* Tombol Kembali */}
      <div className="max-w-4xl mx-auto px-6 pt-12 pb-6">
        <Link 
          href="/#proyek" 
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          Kembali ke Beranda
        </Link>
      </div>

      {/* Header Proyek */}
      <div className={`w-full py-20 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20 dark:bg-black/40"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">{project.title}</h1>
          <span className="px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-bold border border-white/30">
            {project.tech}
          </span>
        </div>
      </div>

      {/* Konten Case Study */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[2rem] shadow-xl dark:shadow-none border border-slate-100 dark:border-slate-800 -mt-24 relative z-20">
          
          <h2 className="text-2xl font-black mb-4">Ringkasan</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-10">
            {project.description}
          </p>

          <div className="h-px w-full bg-slate-200 dark:bg-slate-800 mb-10"></div>

          <h2 className="text-2xl font-black mb-4">Latar Belakang & Peran</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            Di sini Anda bisa menceritakan secara mendalam mengenai latar belakang proyek ini, masalah apa yang ingin dipecahkan, dan apa spesifik peran Anda sebagai mahasiswa TI di Universitas Brawijaya / pengurus BEM dalam menyukseskan hal ini.
          </p>

          <h2 className="text-2xl font-black mb-4">Tantangan & Solusi</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            Ceritakan rintangan yang dihadapi saat proses eksekusi, misalnya terkait manajemen waktu, komunikasi eksternal, atau teknis operasional, serta bagaimana Anda menyelesaikannya.
          </p>

          <div className="mt-12 p-6 bg-blue-50 dark:bg-slate-800/50 rounded-2xl border border-blue-100 dark:border-slate-700/50">
            <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">Pelajaran yang Didapat</h3>
            <p className="text-sm text-blue-600/80 dark:text-blue-200/80">
              Proyek ini sangat mengasah kemampuan komunikasi strategis dan pemecahan masalah secara nyata di lapangan.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}