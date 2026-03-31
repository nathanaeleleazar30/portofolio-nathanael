// app/components/ui/SkillBar.tsx
import React from 'react';
import { Skill } from '../../../types/portfolio';

export default function SkillBar({ skill }: { skill: Skill }) {
  return (
    <div className="group">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-bold text-slate-700 dark:text-slate-300">
          {skill.icon} {skill.name}
        </span>
        <span className="text-sm font-black text-indigo-700 dark:text-indigo-400">
          {skill.level}
        </span>
      </div>
      <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2.5 overflow-hidden">
        <div 
          className="bg-gradient-to-r from-blue-600 to-purple-800 dark:from-blue-500 dark:to-purple-500 h-2.5 rounded-full transition-all duration-1000 scale-x-0 group-hover:scale-x-100 origin-left" 
          style={{ width: skill.level }}
        ></div>
      </div>
    </div>
  );
}