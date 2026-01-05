import { ArrowUpRight, Linkedin, Github } from "lucide-react"
import "./footer.css"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-inner">
                        <div className="footer-left">
                         talk [cupstacking, sodukus, philosophy/ai/society, etc] with me →
                        </div>
                        
                        <div className="footer-right">
                            <a 
                                href="marlatumenjargal@berkeley.edu" 
                                className="footer-email"
                            >
                                 marlatumenjargal@berkeley.edu
                                <ArrowUpRight className="email-arrow" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mobile-footer-menu">
                    <div className="mobile-footer-content">
                        <a 
                            href="https://linkedin.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="mobile-footer-link"
                        >
                            <Linkedin className="footer-icon" />
                            LinkedIn
                        </a>
                        <a 
                            href="https://github.com/marlatumenjargal" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="mobile-footer-link"
                        >
                            <Github className="footer-icon" />
                            Github
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}