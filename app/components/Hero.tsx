import Image from 'next/image';

export default function Hero() {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-start lg:items-end -mt-20 md:-mt-32 mb-10 gap-6 lg:gap-0">
      <div className="relative group cursor-pointer shrink-0 transition-transform duration-500 hover:scale-105">
        <Image src="/foto-profil.JPG" alt="Nathanael" width={256} height={256} priority className="w-40 h-40 md:w-56 md:h-56 rounded-full border-[6px] md:border-[8px] border-white dark:border-slate-800 object-cover shadow-2xl dark:shadow-black/50 relative z-10 bg-slate-100 dark:bg-slate-800" />
        <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 z-20 flex h-6 w-6 md:h-8 md:w-8 items-center justify-center">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 md:h-6 md:w-6 bg-green-500 border-2 border-white dark:border-slate-800"></span>
        </div>
      </div>
      <div className="flex w-full lg:w-auto lg:pb-6">
        <a href="/CV_NATHANAEL.pdf" download className="w-full lg:w-auto px-8 py-3.5 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white text-sm font-extrabold rounded-2xl shadow-xl transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-1.5 active:scale-95">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
          Download CV
        </a>
      </div>
    </section>
  );
}