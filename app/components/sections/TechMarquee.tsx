// app/components/sections/TechMarquee.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { hardSkills } from '../../data/portfolio';

export default function TechMarquee() {
    // Kita duplikasi data 3x agar saat digeser, layarnya tidak pernah kosong
    const duplicatedSkills = [...hardSkills, ...hardSkills, ...hardSkills];

    return (
        <div className="w-full py-8 overflow-hidden bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border-y border-slate-200/50 dark:border-slate-800/50">
            <div className="relative flex overflow-x-hidden">

                {/* Kontainer Animasi dari Framer Motion */}
                <motion.div
                    className="flex whitespace-nowrap gap-8 items-center px-4"
                    animate={{
                        x: ['0%', '-33.333%'], // Bergeser persis sepertiga karena datanya ada 3 set
                    }}
                    transition={{
                        duration: 15, // Kecepatan geser. Makin besar angkanya makin lambat
                        ease: 'linear',
                        repeat: Infinity,
                    }}
                >
                    {duplicatedSkills.map((skill, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm hover:border-blue-500 dark:hover:border-blue-400 transition-colors group cursor-default"
                        >
                            <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                                {skill.icon}
                            </span>
                            <span className="text-sm font-bold text-slate-700 dark:text-slate-200">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </motion.div>

            </div>
        </div>
    );
}