// app/projects/[slug]/page.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-slate-100 dark:border-slate-800/50">
            <div>
              <PopupText text="Tech & Peran" as="span" className="text-sm font-black text-blue-600 uppercase tracking-widest" onScroll />
              <PopupText text={project.tech} as="p" className="text-lg font-medium text-slate-700 dark:text-slate-300 mt-2" onScroll baseDelay={100} />
            </div>

            <div className="flex flex-wrap gap-3">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition-all hover:shadow-lg hover:shadow-blue-500/25 active:scale-95"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-100 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-50"></span>
                  </span>
                  Live Demo
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold text-sm transition-all border border-slate-200 dark:border-slate-700 active:scale-95"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  Repository
                </a>
              )}
            </div>
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

              {/* Galeri Proyek */}
              {project.caseStudy.gallery && project.caseStudy.gallery.length > 0 && (
                <section>
                  <PopupText text="Galeri Proyek" as="h2" className="text-2xl font-bold mb-6" onScroll />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.caseStudy.gallery.map((img, idx) => (
                      <div key={idx} className="relative aspect-video rounded-2xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-800 group">
                        <Image
                          src={img}
                          alt={`${project.title} screenshot ${idx + 1}`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    ))}
                  </div>
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