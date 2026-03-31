// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./ThemeContext"; 
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://portofolio-nathanael.vercel.app/'),
  title: 'Nathanael Eleazar | IT Portfolio',
  description: 'Undergraduate IT Student at Universitas Brawijaya. UI/UX Designer, Multimedia Enthusiast, and Web Developer.',
  openGraph: {
    title: 'Nathanael Eleazar | IT Portfolio',
    description: 'Explore the projects and experience of Nathanael Eleazar, an IT student specializing in web development and design.',
    url: 'https://portofolio-nathanael.vercel.app/',
    siteName: 'Nathanael Portfolio',
    images: [
      {
        url: '/foto-profil.jpg', 
        width: 800,
        height: 600,
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning 
    >
      <head>
        {/* Inline script to prevent FOUC by setting theme before body renders */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          {children}
          <Analytics /> 
        </ThemeProvider>
      </body>
    </html>
  );
}