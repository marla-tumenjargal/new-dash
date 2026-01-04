'use client';

import React, { useState } from 'react';
import ScrapbookMoment from './ScrapbookMoment';

export default function HomePage() {
  const [showScrapbook, setShowScrapbook] = useState<boolean>(true);

  const handleScrapbookComplete = (): void => {
    setShowScrapbook(false);
  };

  if (showScrapbook) {
    return <ScrapbookMoment onComplete={handleScrapbookComplete} />;
  }

  // Navigate to main page after scrapbook
  return (
    <div className="min-h-screen bg-white">
      {/* Your main page content here */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Welcome</h1>
        <p className="text-lg text-gray-600">
          Your main content goes here...
        </p>
      </div>
    </div>
  );
}