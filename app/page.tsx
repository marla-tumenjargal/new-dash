'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { ArrowUpRight } from "lucide-react";
import ScrapbookMoment from './ScrapbookMoment';
import './home.css';

export default function HomePage() {
  const [showScrapbook, setShowScrapbook] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleScrapbookComplete = () => setShowScrapbook(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleProjectsClick = useCallback(() => window.location.href = '/projects', []);
  const handleCoursesClick = useCallback(() => window.location.href = '/courses', []);
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  if (showScrapbook) return <ScrapbookMoment onComplete={handleScrapbookComplete} />;

  return (
    <>
      {isHovering && (
        <div
          className="custom-cursor"
          style={{ left: mousePos.x + 10, top: mousePos.y - 10 }}
        >
          view &gt;
        </div>
      )}

      <div className="background-video-container">
        <video autoPlay loop muted playsInline className="background-video">
          <source src="/flowers.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="text-sm leading-relaxed space-y-4 pl-4 pt-10 font-footer max-w-[650px] mx-auto">

        <p className="hero-name">Hey, I'm Marla!</p>

        <p>
          I'm an undergraduate @ UC Berkeley studying computer science, passionate about all-things machine learning, software dev, and creative tech. 
          At the moment, I'm building Wisp and overseeing operations at Launchpad. 🚀 <a href=""></a>
          
        </p>
      
        <div>
          <p><strong>Experience:</strong></p>
          <ul className="list-disc list-inside space-y-1 ml-0">
          
            <li>building wisp (AI-powered creative discovery)</li>

            <li>
            machine learning engineer @ <a href="https://www.callaunchpad.org/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">
                Launchpad
              </a> 
            </li>

            <li>
             full-stack software developer @ <a href="https://berkeleytime.com/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">
                Berkeleytime
              </a> 
            </li>
            
  

            
          </ul>
        </div>

        <div>
        <p><strong>Previously:</strong></p>
        <ul className="list-disc list-inside space-y-1 ml-0">

            <li>
              <a href="https://mn.linkedin.com/company/educationusa-mongolia" target="_blank" rel="noopener noreferrer" className="hover-underline-link">
                data analytics intern @ U.S. Embassy in Mongolia &nbsp;<ArrowUpRight className="email-arrow" />
              </a>
            </li>
            
            <li>
              <a href="/projects" className="hover-underline-link">
                mobile development intern @ Yeti Education &nbsp;<ArrowUpRight className="email-arrow" />
              </a>
            </li>


            <li>
                  <a href="https://medium.com/@tumearla/researching-bcrypt-for-secure-password-storage-attacks-an-analysis-def2b1e95567" className="hover-underline-link">
                    researcher for bcrypt & secure password storage&nbsp;<ArrowUpRight className="email-arrow" />
                  </a>
            </li>
            
            <li>
              <a href="https://www.instagram.com/stembridge.inc/" target="_blank" rel="noopener noreferrer" className="hover-underline-link">
                founder @ stembridgeinc (scaling AI/CS education for 3k+ girls) &nbsp;<ArrowUpRight className="email-arrow" />
              </a>
            </li>

            <li>
              <a href="https://linkedin.com/company/mission-math-utah" target="_blank" rel="noopener noreferrer" className="hover-underline-link">
                president @ mmu (raising $17k for competition math) &nbsp;<ArrowUpRight className="email-arrow" />
              </a>
            </li>
        </ul>
        

        </div>
        <p className="text-xs font-light tracking-wide text-gray-500 mb-2">
          ⟢ formal resume available by request 
        </p>
      </div>
    </>
  );
}