// app/data/portfolio.ts
import { NavLink, Skill, Experience, Project } from '../../types/portfolio';

export const navLinks: NavLink[] = [
  { name: 'Tentang', href: '#tentang' },
  { name: 'Pengalaman', href: '#pengalaman' },
  { name: 'Proyek', href: '#proyek' },
  { name: 'Kontak', href: '#kontak' },
];

// Di dalam app/data/portfolio.ts

// app/data/portfolio.ts

export const hardSkills: Skill[] = [
  { name: 'HTML5', level: 'Language', icon: '/icons/html5.svg' },
  { name: 'CSS', level: 'Language', icon: '/icons/css.svg' },
  { name: 'JavaScript', level: 'Language', icon: '/icons/javascript.svg' },
  { name: 'TypeScript', level: 'Language', icon: '/icons/typescript.svg' },
  { name: 'React', level: 'Library', icon: '/icons/react.svg' },
  { name: 'Next.js', level: 'Framework', icon: '/icons/nextdotjs.svg' },
  { name: 'Tailwind CSS', level: 'Framework', icon: '/icons/tailwindcss.svg' },
  { name: 'Node.js', level: 'Runtime', icon: '/icons/nodedotjs.svg' },
  { name: 'MySQL', level: 'Database', icon: '/icons/mysql.svg' },
  { name: 'Git & GitHub', level: 'Repository', icon: '/icons/github.svg' },
  { name: 'Figma', level: 'Design App', icon: '/icons/figma.svg' },
  { name: 'Canva', level: 'Design App', icon: '/icons/canva.svg' },
];
export const experienceData: Experience[] = [
  {
    role: 'Kepala Departemen Hubungan Eksternal',
    organization: 'HMPSTI Universitas Brawijaya',
    time: 'Jan 2026 - Sekarang',
    description: 'Membangun relasi strategis kampus dan merancang Grand Design departemen untuk VISTECH.'
  },
  {
    role: 'Dirjen Olahraga Kementrian SENORA',
    organization: 'BEM Fakultas Vokasi UB',
    time: 'Jan 2026 - Sekarang',
    description: 'Mengkoordinasikan minat dan bakat mahasiswa serta mengelola event keolahragaan massal.'
  }
];

export const projectData: Project[] = [
  {
    title: 'VISTECH',
    tech: 'Relasi Strategis | IT Exposure',
    slug: 'it-exposure', // <-- Koma sudah ditambahkan di sini
    description: 'Inisiatif program kerja di bawah Departemen Hubungan Eksternal. Target dari BPI HMPSTI untuk VISTECH pertama ini harus bagus dan mengincar company besar (perusahaan swasta/instansi skala Jawa Timur) untuk persiapan magang mahasiswa semester 4.',
    gradient: 'from-blue-600 to-indigo-700'
  },
  {
    title: 'Ramadhan Charity Connect',
    tech: 'Sosial | Manajemen Acara',
    slug: 'ramadhan-charity-connect',
    description: 'Program sosial kolaboratif di bawah bendera HMPSTI untuk menjalin empati kemasyarakatan.',
    gradient: 'from-emerald-500 to-teal-600'
  },
  {
    title: 'Program Keolahragaan BEM',
    tech: 'Event Management | Leadership',
    slug: 'program-keolahragaan-bem',
    description: 'Menginisiasi dan mengeksekusi berbagai wadah minat bakat olahraga bagi mahasiswa.',
    gradient: 'from-orange-500 to-rose-600'
  },
  {
    title: 'STIVOFEST 2026',
    tech: 'Festival Olahraga | Malang Raya',
    slug: 'stivofest-2026',
    description: 'Menginisiasi event olahraga yang menjadi wadah kompetisi dan kolaborasi antar kampus di Malang Raya.',
    gradient: 'from-amber-600 to-amber-900'
  }
];

export const animationFadeUp = "transition-all duration-700 delay-100 group-hover:scale-105 group-hover:-translate-y-1 transform hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-indigo-900/20";