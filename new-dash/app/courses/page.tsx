'use client';

import { useRouter } from 'next/navigation';
import "./courses.css";

export default function Courses() {
  const router = useRouter();

  const handleBackClick = () => {
    router.push('/');
  };

  return (
    <div className="courses-page">
      <div className="courses-container">
        <div className="courses-header">
          <div className="courses-row">
          </div>
          
        </div>
        
        <div className="courses-columns">
          {/* Column 1 */}
          <div className="courses-column">
            <div className="section">
              
              <p className="courses-name">spring 2026:</p>
              <ul>
                <li><strong>cs70</strong>: discrete math & probability theory</li>
                <li><strong>cs61b</strong>: data structures </li>
                <li><strong>anthro 2ac</strong>: intro to archaeology</li>
              </ul>

              <p className="courses-name">fall 2025:</p>
              <ul>
                <li><strong>cs61a</strong>: structure and interpretation of computer programs</li>
                <li><strong>math 54</strong>: linear algebra & differential equations </li>
                <li><strong>data 94</strong>: computational thinking & social dynamics (A)</li>
                <li><strong>comparative literature r1b</strong>: surrealism, thresholds, windows</li>
              </ul>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}