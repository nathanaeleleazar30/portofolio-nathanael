// app/data/portfolio.ts

export const navLinks = [
  { name: 'Tentang', href: '#tentang' },
  { name: 'Pengalaman', href: '#pengalaman' },
  { name: 'Proyek', href: '#proyek' },
  { name: 'Kontak', href: '#kontak' },
];

export const hardSkills = [
  { name: 'UI/UX Design (Figma)', level: '90%', icon: '🎨' },
  { name: 'Multimedia & Broadcasting', level: '85%', icon: '🎥' },
  { name: 'Graphic Design (Photoshop)', level: '85%', icon: '🖼️' },
  { name: 'ReactJS, Next.js & Tailwind', level: '75%', icon: '💻' },
  { name: 'Java Programming (OOP)', level: '70%', icon: '☕' },
];

export const experienceData = [
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

export const projectData = [
  {
    title: 'VISTECH',
    tech: 'Relasi Strategis | IT Exposure',
    description: 'Inisiatif program kerja di bawah Departemen Hubungan Eksternal untuk memperkuat relasi institusi dan industri luar.',
    gradient: 'from-blue-600 to-indigo-700'
  },
  {
    title: 'Ramadhan Charity Connect',
    tech: 'Sosial | Manajemen Acara',
    description: 'Program sosial kolaboratif di bawah bendera HMPSTI untuk menjalin empati kemasyarakatan.',
    gradient: 'from-emerald-500 to-teal-600'
  },
  {
    title: 'Program Keolahragaan BEM',
    tech: 'Event Management | Leadership',
    description: 'Menginisiasi dan mengeksekusi berbagai wadah minat bakat olahraga bagi mahasiswa.',
    gradient: 'from-orange-500 to-rose-600'
  },
  {
    title: 'STIVOFEST 2026',
    tech: 'Festival Olahraga | Malang Raya',
    description: 'Menginisiasi event olahraga yang menjadi wadah kompetisi dan kolaborasi antar kampus di Malang Raya.',
    gradient: 'from-amber-600 to-amber-900'
  }
];

export const animationFadeUp = "transition-all duration-700 delay-100 group-hover:scale-105 group-hover:-translate-y-1 transform hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-indigo-900/20";