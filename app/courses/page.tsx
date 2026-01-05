'use client';

import { useRouter } from 'next/navigation';
import "./courses.css";

export default function Courses() {
  const router = useRouter();

  const handleBackClick = () => {
    router.push('/');
  };

  return (
    <>
      <div className="background-video-container">
        <video autoPlay loop muted playsInline className="background-video">
          <source src="/flowers.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="courses-page">
        <div className="courses-container">
          <div className="courses-content">
            <div className="semester-section">
              <p className="coursework-title">coursework</p>

              <p className="semester-title">spring 2026</p>
              <ul className="courses-list">
                <li>cs70: discrete math & probability theory</li>
                <li>cs61b: data structures</li>
                <li>data c8: foundations of data science</li>
                <li>anthro 2ac: intro to archaeology</li>
              </ul>
            </div>

            <div className="semester-section">
              <p className="semester-title">fall 2025</p>
              <ul className="courses-list">
                <li>cs61a: structure and interpretation of computer programs</li>
                <li>math 54: linear algebra & differential equations</li>
                <li>data 94: computational thinking & social dynamics</li>
                <li>comparative literature r1b: surrealism, thresholds, windows</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}