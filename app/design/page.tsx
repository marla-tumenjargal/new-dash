'use client';
import { useRouter } from 'next/navigation';
import './design.css';

interface Poster {
  src: string;
  title: string;
  year: string;
  description: string;
  orientation: 'horizontal' | 'vertical';
}

const posters: Poster[] = [

  {
    src: '/design1.png',
    title: 'volume 01.',
    year: '2026',
    description:
      'first exploration of dimensionality. 2d objects have limited perspective, thus they only see points (represented by said red dot).',
    orientation: 'horizontal',
  },
  {
    src: '/design2.png',
    title: 'volume 03.',
    year: '2026',
    description:
      'THE ONLY WAY IS THROUGH.',
    orientation: 'horizontal',
  },
  {
    src: '/crossword.png',
    title: 'volume 02.',
    year: '2025',
    description:
      'my take on a crossword puzzle based from string theory',
    orientation: 'vertical',
  },
  {
    src: '/betteroff.png',
    title: 'volume 04.',
    year: '2025',
    description:'',
    orientation: 'vertical',
  },
  {
    src: '/design3.png',
    title: 'volume 05.',
    year: '2025',
    description:
      'THE FOURTH DIMENSION IS TIME.',
    orientation: 'horizontal',
  },
  {
    src: '/launchpad.png',
    title: 'launchpad product design.',
    year: '2026',
    description:
      'official fall 2026 design for launchpad, a creative ml & ai organization @ UC Berkeley.',
    orientation: 'vertical',
  },
  {
    src: '/intellect.jpg',
    title: 'intellect product design',
    year: '2024',
    description:
      'official wireframe of (founded) Intellect for Yeti Education @ US Embassy in Mongolia.',
    orientation: 'horizontal',
  },
  
];

export default function DesignPage() {
  const router = useRouter();

  const handleBackClick = () => {
    router.push('/');
  };

  const horizontals = posters.filter((p) => p.orientation === 'horizontal');
  const verticals = posters.filter((p) => p.orientation === 'vertical');

  return (
    <div className="design-page">
      <button className="design-back-button" onClick={handleBackClick}>
        ← back
      </button>

      <h1 className="design-page-title">UX & Product Designs</h1>

      <div className="design-main-container">
        <div className="design-column design-column-wide">
          {horizontals.map((poster) => (
            <div className="design-item" key={poster.src}>
              <div className="design-caption">
                <div className="design-caption-header">
                  <h2 className="design-title">{poster.title}</h2>
                  <span className="design-year">{poster.year}</span>
                </div>
                <p className="design-description">{poster.description}</p>
              </div>
              <div className="design-image-container">
                <img src={poster.src} alt={poster.title} className="design-image" />
              </div>
            </div>
          ))}
        </div>

        <div className="design-column design-column-narrow">
          {verticals.map((poster) => (
            <div className="design-item" key={poster.src}>
              <div className="design-caption">
                <div className="design-caption-header">
                  <h2 className="design-title">{poster.title}</h2>
                  <span className="design-year">{poster.year}</span>
                </div>
                <p className="design-description">{poster.description}</p>
              </div>
              <div className="design-image-container">
                <img src={poster.src} alt={poster.title} className="design-image" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}