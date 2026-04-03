// app/components/sections/TechToolsScroll.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import ScrollReveal from '../ScrollReveal';
import PopupText from '../ui/PopupText';
import { hardSkills } from '../../data/portfolio';

export default function TechToolsScroll() {
    return (
        <ScrollReveal>
            <div className="w-full mt-14 mb-8">
                {/* Header Section */}
                <div className="flex justify-between items-end mb-6">
                    <PopupText
                        text="Tech Stack & Tools"
                        as="h2"
                        className="text-2xl font-black text-slate-950 dark:text-white"
                        onScroll
                        wordDelay={80}
                    />
                    <div className="flex items-center gap-2 text-slate-400">
                        <span className="text-[10px] font-black uppercase tracking-widest">Scroll</span>
                        <svg className="w-4 h-4 animate-bounce-x" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                    </div>
                </div>

                {/* KONTINER SCROLL 1 BARIS */}
                <div className="flex overflow-x-auto pb-6 gap-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-700 scrollbar-track-slate-100 dark:scrollbar-track-slate-900/50">

                    {hardSkills.map((skill, index) => (
                        <div
                            key={index}
                            className="flex-none flex items-center gap-4 w-64 snap-start p-3.5 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-100 dark:border-slate-800 shadow-sm hover:border-blue-500 dark:hover:border-blue-500/50 hover:shadow-md transition-all duration-300 group cursor-pointer"
                        >
                            {/* === LOGO TOOL === */}
                            <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center p-2.5 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800 group-hover:scale-110 transition-transform duration-300">
                                <Image
                                    src={skill.icon}
                                    alt={skill.name}
                                    width={32}
                                    height={32}
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            {/* Info Tool - Sisi Kanan */}
                            <div className="flex flex-col overflow-hidden text-left">
                                <h4 className="font-bold text-slate-900 dark:text-white text-sm truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {skill.name}
                                </h4>
                                <p className="text-[10px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500 truncate mt-0.5">
                                    {skill.level}
                                </p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </ScrollReveal>
    );
}