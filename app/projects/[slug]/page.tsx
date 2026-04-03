// app/projects/[slug]/page.tsx
import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projectData } from '../../data/portfolio';
import PopupText from '../../components/ui/PopupText';

// Fungsi untuk membuat halaman ini dinamis berdasarkan URL
export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  // Mencari proyek yang slug-nya sama dengan URL
  const { slug } = await params;
  const project = projectData.find((p) => p.slug === slug);

  // Jika URL ngawur/proyek tidak ada, tampilkan halaman 404
  if (!project) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Tombol Kembali */}
        <Link href="/#proyek" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors mb-8">
          <span>←</span> Kembali ke Portofolio
        </Link>

        {/* Header Proyek */}
        <div className={`w-full h-48 md:h-64 rounded-3xl bg-gradient-to-br ${project.gradient} flex items-center justify-center p-8 text-center shadow-xl mb-12`}>
          <PopupText
            text={project.title}
            as="h1"
            className="text-4xl md:text-5xl font-black text-white tracking-tight drop-shadow-md"
            onScroll
          />
        </div>

        {/* Konten Case Study */}
        <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 md:p-12 shadow-xl dark:shadow-none border border-slate-100 dark:border-slate-800">
          <div className="mb-10">
            <PopupText text="Tech & Peran" as="span" className="text-sm font-black text-blue-600 uppercase tracking-widest" onScroll />
            <PopupText text={project.tech} as="p" className="text-lg font-medium text-slate-700 dark:text-slate-300 mt-2" onScroll baseDelay={100} />
          </div>

          {project.caseStudy ? (
            <div className="space-y-10">
              <section>
                <PopupText text="Latar Belakang" as="h2" className="text-2xl font-bold mb-4" onScroll />
                <PopupText text={project.caseStudy.background} as="p" className="text-slate-600 dark:text-slate-400 leading-relaxed" onScroll baseDelay={100} />
              </section>

              <section>
                <PopupText text="Tantangan" as="h2" className="text-2xl font-bold mb-4" onScroll />
                <PopupText text={project.caseStudy.challenge} as="p" className="text-slate-600 dark:text-slate-400 leading-relaxed" onScroll baseDelay={100} />
              </section>

              <section>
                <PopupText text="Solusi & Tindakan" as="h2" className="text-2xl font-bold mb-4" onScroll />
                <PopupText text={project.caseStudy.solution} as="p" className="text-slate-600 dark:text-slate-400 leading-relaxed" onScroll baseDelay={100} />
              </section>

              {project.caseStudy.results && (
                <section className="p-6 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl border border-emerald-100 dark:border-emerald-800/30">
                  <PopupText text="Hasil Akhir" as="h2" className="text-xl font-bold text-emerald-800 dark:text-emerald-400 mb-2" onScroll />
                  <PopupText text={project.caseStudy.results} as="p" className="text-emerald-700 dark:text-emerald-300 leading-relaxed" onScroll baseDelay={100} />
                </section>
              )}
            </div>
          ) : (
            <p className="text-center text-slate-500 italic py-10">Detail case study untuk proyek ini sedang dalam tahap penyusunan.</p>
          )}
        </div>

      </div>
    </div>
  );
}