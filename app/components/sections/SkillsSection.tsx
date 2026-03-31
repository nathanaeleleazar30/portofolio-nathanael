// app/components/sections/SkillsSection.tsx
'use client';

import React from 'react';
import ScrollReveal from '../ScrollReveal';
import { hardSkills } from '../../data/portfolio'; // Pastikan path import sesuai

export default function SkillsSection() {
  return (
    <ScrollReveal>
      <div className="bg-white dark:bg-slate-800/80 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-700/50 shadow-xl shadow-slate-200/40 dark:shadow-none transition-colors duration-300">
        <h3 className="text-xl font-black text-slate-800 dark:text-white mb-6 flex items-center gap-3">
          Tech & Tools
        </h3>
        
        {/* Desain Grid / Card Modern */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
          {hardSkills.map((skill, index) => (
            <div 
              key={index} 
              className="group relative p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700 hover:border-blue-500/50 dark:hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden"
            >
              {/* Efek Glow di latar belakang kartu saat di-hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-indigo-600/5 to-purple-600/0 group-hover:via-indigo-600/10 transition-colors duration-500"></div>
              
              <div className="relative z-10 flex items-center gap-4 mb-3">
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-xl border border-slate-100 dark:border-slate-700 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">{skill.name}</h4>
                  <span className="text-xs font-black text-blue-600 dark:text-blue-400">{skill.level}</span>
                </div>
              </div>

              <div className="relative z-10 w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 h-1.5 rounded-full transform origin-left transition-transform duration-1000 ease-out scale-x-0 group-hover:scale-x-100" 
                  style={{ width: skill.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}