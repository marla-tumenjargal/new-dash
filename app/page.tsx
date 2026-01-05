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
  const handleWritingClick = useCallback(() => window.location.href = '/writing', []);
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

        <p className="hero-name">Marla Tumenjargal</p>

        <p>
          hello hello i'm marla, i currently study computer science @ UC Berkeley 🧸!  i'm interested in computer vision +  machine learning in interdisciplinary fields, playful software, and ux design. 
          talk [cupstacking, philosophy/math, ai/society, pinterest-ing, etc] with me! <a href=""></a>
        </p>
      
        <div>
          <p><strong>what i'm up to:</strong></p>
          <ul className="list-disc list-inside space-y-1 ml-0">
          
            <li>taking <a
                href="/courses"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:no-underline"
              >
                these
              </a>{" "}
              courses :D
            </li>
  


            <li>
            building with creative ml & ai @ <a href="https://www.callaunchpad.org/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">
                launchpad
              </a> 
            </li>

            <li>
            jotting my thoughts <a href="/writing" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">
                here
              </a> 
            </li>
            
            
          </ul>
        </div>

        <div>
        <p><strong>previously:</strong></p>
        <ul className="list-disc list-inside space-y-1 ml-0">
        <li>
              <a href="https://medium.com/@tumearla/researching-bcrypt-for-secure-password-storage-attacks-an-analysis-def2b1e95567" className="hover-underline-link">
                researching bcrypt for secure password storage&nbsp;<ArrowUpRight className="email-arrow" />
              </a>
            </li>
        <li>
              <a href="https://mn.linkedin.com/company/educationusa-mongolia" target="_blank" rel="noopener noreferrer" className="hover-underline-link">
                prev @ U.S. Embassy in Mongolia &nbsp;<ArrowUpRight className="email-arrow" />
              </a>
            </li>
            
            <li>
              <a href="/projects" className="hover-underline-link">
                building full-stack iOS for nomadic learners @ IntellectX&nbsp;<ArrowUpRight className="email-arrow" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/mission-math-utah/" target="_blank" rel="noopener noreferrer" className="hover-underline-link">
                raising $17k for competition math @ Mission Math Utah&nbsp;<ArrowUpRight className="email-arrow" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/stembridge.inc/" target="_blank" rel="noopener noreferrer" className="hover-underline-link">
                scaling AI/CS education for 3k+ girls @ stembridgeinc&nbsp;<ArrowUpRight className="email-arrow" />
              </a>
            </li>
        </ul>
        

        </div>
        <p className="text-xs font-light tracking-wide text-gray-500 mb-2">
          ⟢ my tech stack includes React, Node.js, Swift, Java, MongoDB, Python
        </p>
      </div>

      {/* <section className="hero-container mt-10 pl-6">
        <div className="hero-row">
          <p>✿ </p>
          <p>&nbsp; view my work ↓</p>
        </div>

        <div className="hero-section">
          <div className="hero-images-container">
            <div className="hero-image-wrapper" onClick={handleCoursesClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <img src="/coursework.png" alt="writing folder" className="hero-sample-image original-image" />
              <img src="/activecoursework.png" alt="active writing folder" className="hero-sample-image active-image" />
            </div>

            <div className="hero-image-wrapper" onClick={handleProjectsClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <img src="/projectsfolder.png" alt="projects folder" className="hero-sample-image original-image" />
              <img src="/activeprojectsfolder.png" alt="active projects folder" className="hero-sample-image active-image" />
            </div>

            <div className="hero-image-wrapper" onClick={handleWritingClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <img src="/projectsfolder.png" alt="projects folder" className="hero-sample-image original-image" />
              <img src="/activeprojectsfolder.png" alt="active projects folder" className="hero-sample-image active-image" />
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}