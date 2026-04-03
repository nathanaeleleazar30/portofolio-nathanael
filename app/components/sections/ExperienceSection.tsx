// app/components/sections/ExperienceSection.tsx
import React from 'react';
import ScrollReveal from '../ScrollReveal';
import PopupText from '../ui/PopupText';
import { experienceData } from '../../data/portfolio';

export default function ExperienceSection() {
  return (
    <div id="pengalaman" className="scroll-mt-28">
      <ScrollReveal>
        <PopupText
          text="Pengalaman Organisasi"
          as="h2"
          className="text-2xl font-black text-slate-950 dark:text-white mb-8"
          onScroll
          wordDelay={80}
        />
      </ScrollReveal>
      <div className="space-y-6 relative before:absolute before:inset-y-0 before:left-[18px] before:w-0.5 before:bg-gradient-to-b before:from-blue-600 before:to-slate-200 dark:before:to-slate-700">
        {experienceData.map((exp, i) => (
          <ScrollReveal key={i} delay={i * 100}>
            <div className="relative pl-14 group">
              <div className="absolute left-0 top-1 w-9 h-9 bg-gradient-to-br from-blue-600 to-purple-800 rounded-full border-4 border-white dark:border-slate-900 shadow-md flex items-center justify-center transition-transform group-hover:scale-110">
                <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
              </div>
              <div className="bg-white dark:bg-slate-800/80 p-7 rounded-[2rem] border border-slate-100 dark:border-slate-700/50 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-indigo-900/20 cursor-default">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-black text-slate-950 dark:text-white text-xl">{exp.role}</h4>
                  <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs font-black rounded-full">{exp.time}</span>
                </div>
                <p className="text-sm font-bold text-indigo-700 dark:text-indigo-400 mb-3">{exp.organization}</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm">{exp.description}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}