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
    title: 'FinancePro Portfolio Tracker',
    tech: 'Laravel 11 | React | Inertia.js',
    slug: 'finance-pro',
    githubLink: 'https://github.com/nathanaeleleazar30/finance-pro',
    liveLink: 'https://finance-pro-production.up.railway.app/',
    description: 'Aplikasi full-stack modern untuk manajemen keuangan pribadi, visualisasi arus kas, pelacakan target finansial, dan pantauan pasar kripto secara real-time.',
    gradient: 'from-blue-600 to-violet-700',
    caseStudy: {
      background: 'Aplikasi ini dirancang sebagai platform all-in-one untuk membantu pengguna mengelola keuangan. Fiturnya mencakup pencatatan pemasukan/pengeluaran dinamis, manajemen portofolio investasi, hingga perhitungan proyeksi nilai masa depan menggunakan sistem bunga majemuk (compound interest).',
      challenge: 'Tantangan teknis terbesar adalah menghubungkan backend relasional secara mulus dengan frontend berbasis komponen, mengelola visualisasi data yang kompleks, serta menarik data pasar kripto secara real-time tanpa membuat server kewalahan (rate-limiting).',
      solution: 'Saya menggunakan arsitektur Laravel 11 dan React yang dijembatani oleh Inertia.js untuk pengalaman Single Page Application (SPA). Untuk visualisasi data kas dan alokasi portofolio, saya mengimplementasikan Recharts. Beban request API eksternal (CoinGecko) diatasi menggunakan sistem Laravel Cache. Sistem autentikasi diamankan dengan Laravel Breeze.',
      results: 'Menghasilkan aplikasi manajemen keuangan interaktif yang dilengkapi dengan Smart Dashboard, progress bar untuk target finansial, pantauan harga crypto live, serta fitur ekspor laporan keuangan ke format PDF menggunakan DomPDF.',
      gallery: [
        '/gallery/dashboard_financepro.png',
        '/gallery/loginpage_financepro.png'
      ]
    }
  },
  {
    title: 'Website Portofolio Pribadi',
    tech: 'Next.js 16 | TypeScript | Tailwind CSS',
    slug: 'website-portofolio',
    githubLink: 'https://github.com/nathanaeleleazar30/portofolio-nathanael',
    liveLink: 'https://nathanael-eleazar.vercel.app/',
    description: 'Website portofolio modern yang dibangun dari nol menggunakan Next.js 16, TypeScript, dan Tailwind CSS. Menampilkan profil, pengalaman organisasi, tech stack, serta detail proyek secara interaktif dengan desain responsif dan fitur dark mode.',
    gradient: 'from-violet-600 to-purple-800',
    caseStudy: {
      background: 'Sebagai mahasiswa Teknologi Informasi di Universitas Brawijaya, saya membutuhkan platform digital untuk menampilkan portofolio, skill, dan pengalaman organisasi secara profesional. Website ini dibangun sepenuhnya dari nol menggunakan teknologi modern agar bisa menjadi showcase kemampuan teknis sekaligus personal branding.',
      challenge: 'Tantangannya adalah membangun website yang tidak hanya informatif tetapi juga memiliki UI/UX yang premium — termasuk implementasi dark mode yang konsisten, animasi scroll reveal yang smooth, dynamic routing untuk halaman detail setiap proyek, serta memastikan performa dan responsivitas di berbagai perangkat.',
      solution: 'Saya menggunakan Next.js 16 App Router dengan TypeScript untuk type safety, Tailwind CSS untuk styling yang efisien, dan arsitektur komponen modular (ProfileCard, SectionCard, ScrollReveal, dll). Fitur-fitur utama meliputi: (1) Dark/Light Mode toggle dengan transisi halus, (2) Scroll Reveal Animation pada setiap section, (3) Dynamic Route /projects/[slug] untuk halaman case study setiap proyek, (4) Tech Stack Scroll marquee yang interaktif, (5) Layout grid responsif dengan glassmorphism card, (6) SEO-friendly dengan Next.js Image Optimization, dan (7) Deployment otomatis via Vercel dengan Git integration.',
      results: 'Website berhasil di-deploy dan berjalan dengan performa optimal. Seluruh halaman mendapat skor Lighthouse yang tinggi, desain responsif di semua ukuran layar, dan menjadi portofolio digital utama yang merepresentasikan kemampuan full-stack development saya.',
      gallery: [
        '/gallery/website_portofolio.png'
      ]
    },
  },
  {
    title: 'VISTECH',
    tech: 'Relasi Strategis | IT Exposure',
    slug: 'it-exposure',
    description: 'Inisiatif program kerja di bawah Departemen Hubungan Eksternal. Target dari BPI HMPSTI untuk VISTECH pertama ini harus bagus dan mengincar company besar (perusahaan swasta/instansi skala Jawa Timur) untuk persiapan magang mahasiswa semester 4.',
    gradient: 'from-blue-600 to-indigo-700',
    caseStudy: {
      background: 'VISTECH merupakan program kerja unggulan di bawah Departemen Hubungan Eksternal HMPSTI Universitas Brawijaya. Sebagai Kepala Departemen, saya bertanggung jawab merancang Grand Design dan menginisiasi program IT Exposure pertama yang bertujuan menjembatani mahasiswa dengan dunia industri teknologi.',
      challenge: 'Sebagai program perdana, tantangan utamanya adalah membangun kepercayaan perusahaan besar skala Jawa Timur untuk berkolaborasi dengan organisasi kemahasiswaan, serta menyusun format acara yang relevan dan menarik bagi kedua belah pihak.',
      solution: 'Saya membangun strategi komunikasi eksternal yang profesional, menyusun proposal kolaborasi yang matang, dan melakukan pendekatan langsung ke departemen HR dan CSR perusahaan swasta serta instansi pemerintah di Jawa Timur.',
      results: 'Berhasil menjalin kemitraan dengan beberapa perusahaan teknologi dan instansi skala Jawa Timur, serta membuka peluang magang bagi mahasiswa semester 4 PSTI UB.'
    },
  },
  {
    title: 'Ramadhan Charity Connect',
    tech: 'Sosial | Manajemen Acara',
    slug: 'ramadhan-charity-connect',
    description: 'Program sosial kolaboratif di bawah bendera HMPSTI untuk menjalin empati kemasyarakatan.',
    gradient: 'from-emerald-500 to-teal-600',
    caseStudy: {
      background: 'Ramadhan Charity Connect adalah program sosial yang diinisiasi oleh HMPSTI untuk menumbuhkan semangat berbagi dan empati sosial di kalangan mahasiswa pada bulan Ramadhan. Program ini dirancang sebagai wadah kontribusi nyata kepada masyarakat sekitar kampus Universitas Brawijaya.',
      challenge: 'Tantangan utamanya adalah mengkoordinasikan berbagai divisi dalam waktu yang terbatas di bulan Ramadhan, mengumpulkan donasi yang memadai dari seluruh angkatan, serta memastikan distribusi bantuan tepat sasaran ke komunitas yang membutuhkan.',
      solution: 'Saya membantu merancang sistem penggalangan dana yang transparan, membentuk tim distribusi yang efisien, dan menjalin kerja sama dengan RT/RW setempat untuk pemetaan penerima manfaat agar bantuan tersalurkan dengan tepat.',
      results: 'Program berhasil menyalurkan paket sembako dan santunan kepada puluhan keluarga di sekitar Malang, serta meningkatkan solidaritas dan kepedulian sosial antar mahasiswa PSTI.'
    },
  },
  {
    title: 'Program Keolahragaan BEM',
    tech: 'Event Management | Leadership',
    slug: 'program-keolahragaan-bem',
    description: 'Menginisiasi dan mengeksekusi berbagai wadah minat bakat olahraga bagi mahasiswa.',
    gradient: 'from-orange-500 to-rose-600',
    caseStudy: {
      background: 'Sebagai Dirjen Olahraga Kementerian SENORA di BEM Fakultas Vokasi Universitas Brawijaya, saya melihat tingginya minat olahraga mahasiswa yang belum terfasilitasi dengan maksimal.',
      challenge: 'Tantangan terbesarnya adalah menyatukan berbagai jadwal akademik mahasiswa yang padat dan mencari fasilitas olahraga yang memadai di sekitar area Malang dengan anggaran organisasi yang terbatas.',
      solution: 'Saya memimpin tim untuk melakukan pemetaan minat, menjalin kemitraan dengan penyedia fasilitas olahraga lokal, dan merancang jadwal latihan rutin yang fleksibel serta kompetisi internal.',
      results: 'Meningkatnya partisipasi mahasiswa dalam kegiatan non-akademik sebesar 40% dan terbentuknya 5 tim inti olahraga fakultas.'
    },
  },
  {
    title: 'STIVOFEST 2026',
    tech: 'Festival Olahraga | Malang Raya',
    slug: 'stivofest-2026',
    description: 'Menginisiasi event olahraga yang menjadi wadah kompetisi dan kolaborasi antar kampus di Malang Raya.',
    gradient: 'from-amber-600 to-amber-900',
    caseStudy: {
      background: 'STIVOFEST 2026 adalah festival olahraga antar kampus yang diinisiasi oleh Kementerian SENORA BEM Fakultas Vokasi UB. Event ini dirancang sebagai ajang kompetisi sekaligus sarana mempererat hubungan antar mahasiswa dari berbagai perguruan tinggi di wilayah Malang Raya.',
      challenge: 'Menyelenggarakan event berskala Malang Raya membutuhkan koordinasi masif lintas kampus, negosiasi venue yang mampu menampung peserta dari banyak institusi, serta pengelolaan anggaran yang ketat untuk memastikan event berjalan profesional.',
      solution: 'Saya memimpin perencanaan strategis dari awal, termasuk membentuk panitia lintas kampus, mengamankan sponsorship dari brand olahraga lokal, dan merancang sistem pertandingan yang adil serta efisien untuk berbagai cabang olahraga.',
      results: 'STIVOFEST 2026 berhasil diselenggarakan dengan partisipasi dari beberapa perguruan tinggi di Malang Raya, mempererat jejaring antar kampus, dan menjadi event olahraga tahunan perdana Fakultas Vokasi UB.'
    },
  },
];

export const animationFadeUp = "transition-all duration-700 delay-100 group-hover:scale-105 group-hover:-translate-y-1 transform hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-indigo-900/20";