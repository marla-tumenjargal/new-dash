'use client';

import "./hero.css";
import { ArrowUpRight } from "lucide-react";
import { useRouter } from 'next/navigation';

export default function Hero() {
    const router = useRouter();

    const handleProjectsClick = () => {
        router.push('/projects');
    };

    const handleWritingClick = () => {
        router.push('/writing');
    };

    return (
        <>
            <div className="hero-container">
                <div className="hero-header">

                    <div className="hero-row">
                    <p className="hero-name">✿</p>
                    <p className="hero-location">salt lake city // san francisco</p>
                    </div>
                    
                    <p className="hero-name">Marla Tumenjargal</p>
                    <p className="hero-secondary">hi hi! i'm a developer and undergraduate @ uc berkeley studying computer science and (planned) minor in data science. interested in HCI, computer vision, and mitigating data bias with AI. </p>
                    <p></p>

                </div>
                
                <div className="hero-columns">
                    {/* Column 1 */}
                    <div className="hero-column">
                        <div className="section">
                            <p className="section-title">currently i'm:</p>
                            <ul style={{ fontSize: "1rem" }}>
                                <li>taking <strong>CS 61A (Structure & Interpretation of Computer Programs), Data 94 (Computational Thinking & Social Dynamics) </strong>, Math 54, and COMLIT R1B</li>
                                <li>building <strong>eikon</strong> (a whimsical, for-fun café game)</li>
                                <li> penning my <a href="/writing" className="underline">thoughts</a> on tech, design, and society</li>
                            </ul>
                        </div>

                        <div className="section">
                            <p className="section-title"><strong>previously, i was: </strong></p>
                            <ul>

                            <li>scaling AI/CS education for 3k+ girls @ <a href="https://www.instagram.com/stembridge.inc/" target="_blank" rel="noopener noreferrer" className="underline">stembridgeinc</a></li>
                                <li>
                                    <a
                                        href="https://drive.google.com/file/d/1w1xmkq_HoUAaS_-eGr8OWHLERXESeL-e/view"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="research-link"
                                        style={{ fontSize: "1rem" }}
                                    >
                                        researching bcrypt for secure password storage
                                        <br />
                                        <span>
                                            force attacks <ArrowUpRight className="research-arrow" />
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.congressionalappchallenge.us/22-ut04/"
                                        className="research-link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ fontSize: "1rem" }}
                                    >
                                        building iOS tools for nomadic learners @ <em>IntellectX</em>{' '}
                                        <ArrowUpRight className="research-arrow" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://educationusa.state.gov/centers/educationusa-mongolia"
                                        className="research-link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ fontSize: "1rem" }}
                                    >
                                        marketing intern to <em>35k+</em> @ U.S. Embassy in Mongolia's EducationUSA
                                        <ArrowUpRight className="research-arrow" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.linkedin.com/company/mission-math-utah/"
                                        className="research-link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ fontSize: "1rem" }}
                                    >
                                        raising $17k for competition math @ Mission Math Utah
                                        <ArrowUpRight className="research-arrow" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div className="hero-row">
                    <p className="hero-name">✿</p>
                    <p className="hero-header-2">view my work ↓</p>
                </div>


                <div className="hero-section">
                <div className="hero-images-container">
                    <div className="hero-image-wrapper" onClick={handleProjectsClick} style={{ cursor: 'pointer' }}>
                        <img src="/projectsfolder.jpg" alt="projects folder" className="hero-sample-image original-image" />
                        <img src="/activeprojectsfolder.jpg" alt="active projects folder" className="hero-sample-image active-image" />
                    </div>
                    <div className="hero-image-wrapper">
                        <img src="/uifolder.jpg" alt="UI folder" className="hero-sample-image original-image" />
                        <img src="/activeuifolder.jpg" alt="active UI folder" className="hero-sample-image active-image" />
                    </div>
                    <div className="hero-image-wrapper" onClick={handleWritingClick} style={{ cursor: 'pointer' }}>
                        <img src="/writingfolder.jpg" alt="writing folder" className="hero-sample-image original-image" />
                        <img src="/activewritingfolder.jpg" alt="active writing folder" className="hero-sample-image active-image" />
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}