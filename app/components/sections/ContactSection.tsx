// app/components/sections/ContactSection.tsx
import React from 'react';
import ScrollReveal from '../ScrollReveal';
import ContactForm from '../ContactForm';
import SocialLink from '../ui/SocialLink';
import PopupText from '../ui/PopupText';
import SkillBar from '../ui/SkillBar';
import { hardSkills } from '../../data/portfolio';
import { SocialLinkData } from '../../../types/portfolio';

const socialLinks: SocialLinkData[] = [
  {
    platform: 'WhatsApp',
    username: '+62 838-6999-1137',
    href: 'https://wa.me/6283869991137',
    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.766 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.393.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.098.824z"/></svg>,
    containerHoverClass: 'hover:bg-emerald-500 hover:border-emerald-400',
    iconBgClass: 'bg-emerald-500',
    iconTextHoverClass: 'group-hover/btn:text-emerald-500',
    subtextHoverClass: 'group-hover/btn:text-emerald-100'
  },
  {
    platform: 'LinkedIn',
    username: 'Nathanael Eleazar',
    href: 'https://www.linkedin.com/in/nathanael-eleazar/',
    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>,
    containerHoverClass: 'hover:bg-[#0A66C2] hover:border-[#0A66C2]',
    iconBgClass: 'bg-[#0A66C2]',
    iconTextHoverClass: 'group-hover/btn:text-[#0A66C2]',
    subtextHoverClass: 'group-hover/btn:text-blue-100'
  },
  {
    platform: 'Instagram',
    username: '@nthanaellll',
    href: 'https://instagram.com/nthanaellll',
    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>,
    containerHoverClass: 'hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7]',
    iconBgClass: 'bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]',
    iconTextHoverClass: 'group-hover/btn:text-[#ee2a7b]',
    subtextHoverClass: 'group-hover/btn:text-pink-100'
  },
  {
    platform: 'Email',
    username: 'nathanaeleleazar30...',
    href: 'mailto:nathanaeleleazar30@gmail.com',
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>,
    containerHoverClass: 'hover:bg-rose-500 hover:border-rose-400',
    iconBgClass: 'bg-rose-500',
    iconTextHoverClass: 'group-hover/btn:text-rose-500',
    subtextHoverClass: 'group-hover/btn:text-rose-100'
  }
];

export default function ContactSection() {
  return (
    <>
      <ScrollReveal>
        <div id="kontak" className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 p-8 rounded-[2rem] shadow-2xl dark:shadow-none text-white relative overflow-hidden group border border-transparent dark:border-slate-800 scroll-mt-28">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-bl-[4rem] transition-transform duration-500 group-hover:scale-125 pointer-events-none"></div>
          
          <h3 className="text-2xl font-black mb-4 flex items-center gap-3 relative z-10">
            <div className="w-2 h-8 bg-blue-500 rounded-full"></div>
            <PopupText
              text="Mari Berkolaborasi!"
              as="span"
              className=""
              onScroll
              wordDelay={80}
            />
          </h3>
          
          <PopupText
            text="Jangan ragu untuk menghubungi saya untuk diskusi seputar teknologi, desain, atau peluang kerja sama."
            className="text-slate-300 text-sm mb-6 relative z-10 font-medium leading-relaxed"
            onScroll
            baseDelay={200}
            wordDelay={30}
          />

          <div className="space-y-4 relative z-10">
            {socialLinks.map((link, idx) => (
              <SocialLink key={idx} {...link} />
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <ContactForm />
      </ScrollReveal>

    </>
  );
}