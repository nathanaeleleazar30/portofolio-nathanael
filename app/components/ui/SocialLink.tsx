// app/components/ui/SocialLink.tsx
import React from 'react';
import { SocialLinkData } from '../../../types/portfolio';

export default function SocialLink({
  href,
  icon,
  platform,
  username,
  containerHoverClass,
  iconBgClass,
  iconTextHoverClass,
  subtextHoverClass
}: SocialLinkData) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={`flex items-center gap-4 bg-white/10 p-3.5 rounded-2xl transition-all duration-300 border border-white/5 group/btn transform hover:-translate-y-1 ${containerHoverClass}`}>
      <div className={`group-hover/btn:bg-white text-white p-2 rounded-xl transition-colors ${iconBgClass} ${iconTextHoverClass}`}>
        {icon}
      </div>
      <div>
        <span className="block font-bold text-sm text-white">{platform}</span>
        <span className={`block font-medium text-xs text-slate-300 ${subtextHoverClass}`}>{username}</span>
      </div>
    </a>
  );
}