// app/components/sections/ProjectsSection.tsx
import React from 'react';
import ScrollReveal from '../ScrollReveal';
import ProjectCard from '../ui/ProjectCard';
import { projectData } from '../../data/portfolio';

export default function ProjectsSection() {
  return (
    <div id="proyek" className="scroll-mt-28">
      <ScrollReveal>
        <h2 className="text-2xl font-black text-slate-950 dark:text-white mb-8">Proyek Unggulan</h2>
      </ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectData.map((project, i) => (
          <ScrollReveal key={i} delay={i * 100}>
            <ProjectCard project={project} />
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}