'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface ScrapbookMomentProps {
  onComplete?: () => void;
}

const ScrapbookMoment: React.FC<ScrapbookMomentProps> = ({ onComplete }) => {
  const [showSignature, setShowSignature] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Show signature immediately
    const signatureTimer = setTimeout(() => {
      setShowSignature(true);
      
      // Start fade out after signature shows
      const fadeTimer = setTimeout(() => {
        setIsComplete(true);
        
        // Trigger navigation to appear
        window.dispatchEvent(new CustomEvent('scrapbook-complete'));
        
        // Complete after fade out finishes
        const completeTimer = setTimeout(() => {
          onComplete?.();
        }, 100); // Wait for fade transition to complete
        return () => clearTimeout(completeTimer);
      }, 1100); // Signature display duration - 0.8 seconds
      return () => clearTimeout(fadeTimer);
    }, 100); // Small delay before showing signature

    return () => clearTimeout(signatureTimer);
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 overflow-hidden transition-opacity duration-200 ease-out ${
        isComplete ? 'opacity-0' : 'opacity-100'
      }`}
      style={{
        backgroundColor: '#fafaf9'
      }}
    >
      {/* Logo/signature in center */}
      <div 
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500 ease-in-out flex items-center gap-4 ${
          showSignature ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ zIndex: 100 }}
      >
        <Image
          src="/signature3.png"
          alt="Logo"
          width={300}
          height={150}
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
};

export default ScrapbookMoment;