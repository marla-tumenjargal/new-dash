'use client';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import './projects.css';

export default function ProjectsPage() {
  const router = useRouter();
  const [currentImageIndex1, setCurrentImageIndex1] = useState(0);
  const images1 = ['/intellect.jpg', '/intellect2.jpg'];

  const handleBackClick = () => {
    router.push('/');
  };

  useEffect(() => {
    const interval1 = setInterval(() => {
      setCurrentImageIndex1((prevIndex) => (prevIndex + 1) % images1.length);
    }, 2000);
    return () => clearInterval(interval1);
  }, [images1.length]);

  return (
    <div className="projects-page">
      <div className="projects-main-container">
        
        {/* Second Project */}
        <div className="projects-item" style={{ marginBottom: '8rem' }}>
          <div className="projects-content">
            <div className="projects-header">
              <img src="/toby-logo.png" alt="Toby Logo" className="projects-logo" />
              <h2 className="projects-title">Toby</h2>
              <span className="projects-year">currently researching + proposal</span>
            </div>

            <div className="projects-main-content">
              <div className="projects-left-content">
                <p className="projects-description">
                  TOBY is the trust layer for e-commerce. With TOBY, make sustainable shopping decisions with confidence. 
                  toby is product intelligence for online shopping that helps consumers make informed purchasing decisions in an era of niche marketplaces, commoditized 
                  platforms, and deteriorating product quality.
                </p>
                <div style={{ marginTop: '1.5rem' }}>
                  <p className="projects-description" style={{ marginBottom: '1rem', fontWeight: '500' }}>
                    why toby?
                  </p>
                  <p className="projects-description" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
  1. Quality product analysis<br />
  2. Personalized shopping recommendations<br />
  3. Fit prediction<br />
  <br />
  we're entering an era where large platforms like Amazon and Shopify are increasingly commoditized, 
  charging more from sellers and users while product quality declines. customers face fit uncertainty, 
  high return rates, review pollution from bot-generated content, and decision paralysis from inadequate 
  filters. sellers compete on price rather than quality because it isn't easily measurable or discoverable.
</p>
                  <p className="projects-description" style={{ fontSize: '0.95rem', lineHeight: '1.6', marginTop: '1rem' }}>
                    toby implements a different approach: multi-modal recommendations based on (1) durability/quality prediction 
                    through material composition and manufacturing origin analysis, and (2) fit prediction using user measurements. 
                    unlike traditional AI assistants that parse star ratings and reviews—easily influenced by bots and marketing—toby 
                    focuses on objective, verifiable product attributes.
                  </p>
                </div>
              </div>

              <div className="projects-details-grid">
                <div className="projects-detail-section">
                  <h3 className="projects-detail-title">dimensions</h3>
                  <p className="projects-detail-content">
                    Width: sustainability API, ml/ai<br />
                    Height: e-commerce intelligence<br />
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="projects-image-container">
            <img
              src="/toby.png"
              alt="Toby Project"
              className="projects-image active"
            />
          </div>
        </div>

        {/* Third Project */}
        <div className="projects-item">
          <div className="projects-content">
            <div className="projects-header">
              <img src="/webo.png" alt="Webo Logo" className="projects-logo" />
              <h2 className="projects-title">Webo</h2>
              <span className="projects-year">2025</span>
            </div>

            <div className="projects-main-content">
              <div className="projects-left-contentf">
                <p className="projects-description">
                  a take-home project for YC-backed startup Orchids final interview. when given a URL, application uses a FastAPI + Playwright Chromium  + Anthropic's Claude 3.5 to reconstruct the website's HTML and content. 
                </p>
                <a 
                  href="https://github.com/marla-tumenjargal/orchids-ai-website-cloner" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="source-code-link"
                >
                  source code!
                </a>
              </div>

              <div className="projects-details-grid">
                <div className="projects-detail-section">
                  <h3 className="projects-detail-title">dimensions</h3>
                  <p className="projects-detail-content">
                    Width: Next.js + Typescript, Python <br />
                    Height: - <br />
                    Awards: Recruiting cycle for Webild, Orchids
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="projects-image-container">
            <img
              src="/sample.png"
              alt="Webo Project"
              className="projects-image active"
            />
          </div>
        </div>

        {/* First Project */}
        <div className="projects-item" style={{ marginBottom: '8rem' }}>
          <div className="projects-content">
            <div className="projects-header">
              <img src="/intellect-logo.jpg" alt="Intellect Logo" className="projects-logo" />
              <h2 className="projects-title">Intellect</h2>
              <span className="projects-year">2023 [closed]</span>
            </div>

            <div className="projects-main-content">
              <div className="projects-left-content">
                <p className="projects-description">
                  Intellect delivers AI-powered learning, anywhere. We connect students to AI-powered coursework and
                  lectures—all in one seamless platform. Built in collaboration for Mongolian national educators.
                </p>
              </div>

              <div className="projects-details-grid">
                <div className="projects-detail-section">
                  <h3 className="projects-detail-title">dimensions</h3>
                  <p className="projects-detail-content">
                    Width: iOS<br />
                    Height: 1k+ downloads<br />
                    Awards: 2022 Congressional App Challenge
                    ∙ Yeti Educational Academy (Ulaanbaatar)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="projects-image-container">
            {images1.map((image, index) => (
              <img
                key={index}
                src={image}
                alt="IntellectX Project"
                className={`projects-image ${index === currentImageIndex1 ? 'active' : ''}`}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}