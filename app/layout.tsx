'use client';

import './globals.css';
import { Hanken_Grotesk } from 'next/font/google';

import Header from './Navigation';
import Footer from './footer/page';
import HeroFolders from './HeroFolders';
import { useState, useEffect } from 'react';
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
  const [isHovering, setIsHovering] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const pathname = usePathname();

  useEffect(() => {
    const handleScrapbookComplete = () => {
      setShowNavigation(true);
    };
    window.addEventListener('scrapbook-complete', handleScrapbookComplete);

    const checkFullWindow = () => {
      setIsFullWindow(window.innerWidth >= 1440);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    checkFullWindow();
    window.addEventListener('resize', checkFullWindow);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scrapbook-complete', handleScrapbookComplete);
      window.removeEventListener('resize', checkFullWindow);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const isWhiteBackgroundPage =
    pathname?.startsWith('/projects') || pathname?.startsWith('/writing') || pathname?.startsWith('/courses');

  const isHomePage = pathname === '/';

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

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
        {isHovering && isHomePage && (
          <div
            className="custom-cursor"
            style={{ left: mousePos.x + 10, top: mousePos.y - 10 }}
          >
            view &gt;
          </div>
        )}

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

        {showNavigation && isHomePage && (
          <div className="w-full pl-[14vw]">
            <HeroFolders 
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </div>
        )}

        {showNavigation && <div className="pt-8"><Footer /></div>}
      </body>
    </html>
  );
}