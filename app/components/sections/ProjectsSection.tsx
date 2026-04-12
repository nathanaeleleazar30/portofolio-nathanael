// app/components/sections/ProjectsSection.tsx
import React from 'react';
import Link from 'next/link';
import ScrollReveal from '../ScrollReveal';
import PopupText from '../ui/PopupText';
import { projectData } from '../../data/portfolio';

export default function ProjectsSection() {
  return (
    <div id="proyek" className="scroll-mt-28">
      <ScrollReveal>
        <PopupText
          text="Proyek Unggulan"
          as="h2"
          className="text-2xl font-black text-slate-950 dark:text-white mb-8"
          onScroll
          wordDelay={80}
        />
      </ScrollReveal>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectData.map((project, i) => (
          <ScrollReveal key={i}>
            <Link href={`/projects/${project.slug}`} className="block group">
              <div className="bg-white dark:bg-slate-900/60 backdrop-blur-sm rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden hover:shadow-2xl dark:hover:shadow-indigo-500/10 transition-all duration-500 cursor-pointer transform hover:-translate-y-3 h-full flex flex-col">
                
                <div className={`h-48 bg-gradient-to-br ${project.gradient} relative flex items-center justify-center p-6 text-center overflow-hidden`}>
                  {/* Decorative blobs */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-black/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                  
                  <h3 className="text-white text-3xl font-black z-10 transition-transform duration-500 group-hover:scale-110 drop-shadow-lg">{project.title}</h3>
                </div>
                
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.split('|').map((t, idx) => (
                      <span key={idx} className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-lg border border-slate-200/50 dark:border-slate-700/50">
                        {t.trim()}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow">{project.description}</p>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center text-xs font-black text-blue-600 dark:text-blue-400 group/btn">
                      <span>BACA CASE STUDY</span>
                      <svg className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </div>
                    
                    {project.liveLink && (
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}