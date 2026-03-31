// types/portfolio.ts
import { ReactNode } from 'react';

export interface NavLink {
  name: string;
  href: string;
}

export interface Skill {
  name: string;
  level: string;
  icon: string | ReactNode;
}

export interface Experience {
  role: string;
  organization: string;
  time: string;
  description: string;
}

export interface Project {
  title: string;
  slug: string;
  tech: string;
  description: string;
  gradient: string;
}

export interface SocialLinkData {
  platform: string;
  username: string;
  href: string;
  icon: ReactNode;
  containerHoverClass: string;
  iconBgClass: string;
  iconTextHoverClass: string;
  subtextHoverClass: string;
}