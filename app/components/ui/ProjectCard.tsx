// app/components/ui/ProjectCard.tsx
import React from 'react';
import { Project } from '../../../types/portfolio';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-white dark:bg-slate-800/80 rounded-[2rem] border border-slate-100 dark:border-slate-700/50 shadow-sm overflow-hidden group hover:shadow-xl dark:hover:shadow-indigo-900/20 transition-all duration-500 cursor-pointer transform hover:-translate-y-2">
      <div className={`h-36 bg-gradient-to-br ${project.gradient} relative flex items-center justify-center`}>
        <h3 className="text-white text-2xl font-extrabold z-10">{project.title}</h3>
      </div>
      <div className="p-6 relative">
        <p className="text-xs font-bold text-indigo-700 dark:text-indigo-400 mb-2">{project.tech}</p>
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">{project.description}</p>
        
        {/* === EFEK PANAH HOVER === */}
        <div className="flex items-center text-sm font-bold text-blue-600 dark:text-blue-400 opacity-0 transform -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
          Lihat Detail 
          <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>
    </div>
  );
}