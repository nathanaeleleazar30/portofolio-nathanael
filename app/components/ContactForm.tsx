// app/components/ContactForm.tsx
'use client';

import React, { useState } from 'react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // === KUNCI UTAMA: Amankan referensi form sebelum await ===
    const formElement = e.currentTarget; 
    const formData = new FormData(formElement);
    
    // GANTI TULISAN DI BAWAH INI DENGAN ACCESS KEY DARI EMAIL ANDA
    formData.append("access_key", "6c8b198f-389d-4a2d-9239-bbb796635e9e"); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        // === GUNAKAN variabel formElement yang sudah dikunci tadi ===
        formElement.reset(); 
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        alert("Terjadi kesalahan: " + data.message);
      }
    } catch (error) {
      console.error("Error submitting form", error);
      alert("Gagal mengirim pesan. Silakan cek koneksi internet Anda.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-800/80 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-700/50 shadow-sm transition-colors duration-300">
      <h3 className="text-xl font-black text-slate-800 dark:text-white mb-6 flex items-center gap-3">
        Kirim Pesan Langsung
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Nama Anda</label>
          <input 
            type="text" 
            name="name" 
            id="name" 
            required 
            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            placeholder="John Doe"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Email Anda</label>
          <input 
            type="email" 
            name="email" 
            id="email" 
            required 
            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            placeholder="john@example.com"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Pesan</label>
          <textarea 
            name="message" 
            id="message" 
            rows={4} 
            required 
            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 resize-none"
            placeholder="Halo Nathanael, saya ingin berdiskusi tentang..."
          ></textarea>
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full py-3.5 px-6 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold rounded-xl shadow-lg shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
        >
          {isSubmitting ? (
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
          ) : (
             "Kirim Pesan"
          )}
        </button>

        {isSuccess && (
          <div className="p-4 mt-4 text-sm font-bold text-emerald-800 bg-emerald-100 dark:bg-emerald-900/30 dark:text-emerald-400 rounded-xl border border-emerald-200 dark:border-emerald-800/50 flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            Pesan berhasil terkirim!
          </div>
        )}
      </form>
    </div>
  );
}