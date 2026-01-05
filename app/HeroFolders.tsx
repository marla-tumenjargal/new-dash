'use client';

import React, { useCallback } from 'react';

interface HeroFoldersProps {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

interface FolderItem {
  id: string;
  title: string;
  originalImage: string;
  activeImage: string;
  route: string;
}

export default function HeroFolders({ onMouseEnter, onMouseLeave }: HeroFoldersProps) {
  const folders: FolderItem[] = [
    {
      id: 'courses',
      title: 'coursework folder',
      originalImage: '/coursework.png',
      activeImage: '/activecoursework.png',
      route: '/courses'
    },
    {
      id: 'projects',
      title: 'projects folder',
      originalImage: '/projectsfolder.png',
      activeImage: '/activeprojectsfolder.png',
      route: '/projects'
    },
    {
      id: 'writing',
      title: 'writing folder',
      originalImage: '/writingfolder.png',
      activeImage: '/activewritingfolder.png',
      route: '/writing'
    }
  ];

  const handleFolderClick = useCallback((route: string) => {
    window.location.href = route;
  }, []);

  return (
    <section className="hero-container mt-10">
      <div className="hero-row">
        <p>✿ </p>
        <p>&nbsp; view my work ↓</p>
      </div>

      <div className="hero-section">
        <div className="hero-images-container" style={{ justifyContent: 'flex-start', paddingLeft: 0 }}>
          {folders.map((folder) => (
            <div 
              key={folder.id}
              className="hero-image-wrapper" 
              onClick={() => handleFolderClick(folder.route)} 
              onMouseEnter={onMouseEnter} 
              onMouseLeave={onMouseLeave}
            >
              <img 
                src={folder.originalImage} 
                alt={folder.title} 
                className="hero-sample-image original-image" 
              />
              <img 
                src={folder.activeImage} 
                alt={`active ${folder.title}`} 
                className="hero-sample-image active-image" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}