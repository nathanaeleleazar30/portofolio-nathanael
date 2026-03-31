// app/components/ContactForm.tsx
'use client';
import React, { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        setStatus('success');
        setMessage("Pesan berhasil dikirim!");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
        setMessage(data.message || "Terjadi kesalahan, silakan coba lagi.");
      }
    } catch (error) {
      setStatus('error');
      setMessage("Gagal mengirim pesan. Periksa koneksi internet Anda.");
    }
  };

  return (
    <div className="bg-white dark:bg-slate-800/80 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-700/50 shadow-xl shadow-slate-200/40 dark:shadow-none transition-colors duration-300 relative">
      <h3 className="text-xl font-black text-slate-800 dark:text-white mb-6">Kirim Pesan</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input type="text" name="name" required placeholder="Nama Anda" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 transition-colors text-sm dark:text-white" />
        </div>
        <div>
          <input type="email" name="email" required placeholder="Email Anda" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 transition-colors text-sm dark:text-white" />
        </div>
        <div>
          <textarea name="message" required rows={4} placeholder="Pesan Anda" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 transition-colors text-sm dark:text-white resize-none"></textarea>
        </div>
        <button type="submit" disabled={status === 'loading'} className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl transition-colors disabled:opacity-70 disabled:cursor-not-allowed">
          {status === 'loading' ? 'Mengirim...' : 'Kirim Pesan'}
        </button>
        
        {status === 'success' && <p className="text-emerald-500 text-sm font-medium mt-3">{message}</p>}
        {status === 'error' && <p className="text-rose-500 text-sm font-medium mt-3">{message}</p>}
      </form>
    </div>
  );
}