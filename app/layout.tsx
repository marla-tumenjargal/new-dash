'use client';

import { Analytics } from "@vercel/analytics/next"
import './globals.css';
import { Hanken_Grotesk } from 'next/font/google';

import Header from './components/Navigation';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { usePathname } from 'next/navigation';

const hankenGrotesk = Hanken_Grotesk({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-hanken-grotesk',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showNavigation, setShowNavigation] = useState(false);
  const [isFullWindow, setIsFullWindow] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const handleScrapbookComplete = () => {
      setShowNavigation(true);
    };
    window.addEventListener('scrapbook-complete', handleScrapbookComplete);

    const checkFullWindow = () => {
      setIsFullWindow(window.innerWidth >= 1440);
    };

    checkFullWindow();
    window.addEventListener('resize', checkFullWindow);

    return () => {
      window.removeEventListener('scrapbook-complete', handleScrapbookComplete);
      window.removeEventListener('resize', checkFullWindow);
    };
  }, []);

  const isWhiteBackgroundPage =
    pathname?.startsWith('/projects') || pathname?.startsWith('/writing') || pathname?.startsWith('/courses');


  return (
    <html lang="en" className={hankenGrotesk.variable}>
      <head>
        <link rel="icon" href="/header.png" type="image/png" />
        <link rel="shortcut icon" href="/header.png" type="image/png" />
        <link rel="apple-touch-icon" href="/header.png" />
      </head>
      <body
        className={`flex flex-col min-h-screen relative ${
          isWhiteBackgroundPage ? '!bg-white !text-black' : ''
        }`}
      >
        {showNavigation && isFullWindow && (
          <div className="fixed top-0 bottom-0 left-[calc(4vw+theme(spacing.1)+var(--nav-width,150px))] w-px bg-gray-300 z-10" />
        )}

        <div className="flex flex-grow min-h-0">
          {showNavigation && (
            <div className="flex flex-col h-full pt-19 pl-[5vw] pr-10">
              <Header />
            </div>
          )}

          <main className={`flex-1 px-6 py-24 ${showNavigation ? 'max-w-3xl' : 'max-w-none'}`}>
            {children}
          </main>
        </div>

        {showNavigation && <div className="pt-8"><Footer /></div>}
      </body>
    </html>
  );
}