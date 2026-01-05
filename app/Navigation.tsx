"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { name: "bio", href: "/" },
];

const externalLinks = [
  { name: "linkedin", href: "https://www.linkedin.com/in/marla-tumenjargal/" },
  { name: "github", href: "https://github.com/marla-tumenjargal" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <div className="md:hidden flex justify-between items-center px-[4%] py-[2vh] bg-white">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col justify-center items-center w-6 h-6 space-y-1"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-black transition-transform duration-200 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`block w-5 h-0.5 bg-black transition-opacity duration-200 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-black transition-transform duration-200 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      <div className={`md:hidden fixed inset-0 z-50 bg-white transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center px-[4%] py-[2vh] border-b border-gray-100">
          <div className="text-sm font-medium text-black font-hk">marla</div>
          <button
            onClick={() => setIsOpen(false)}
            className="flex flex-col justify-center items-center w-6 h-6 space-y-1"
            aria-label="Close menu"
          >
            <span className="block w-5 h-0.5 bg-black rotate-45 translate-y-1.5" />
            <span className="block w-5 h-0.5 bg-black opacity-0" />
            <span className="block w-5 h-0.5 bg-black -rotate-45 -translate-y-1.5" />
          </button>
        </div>
        
        <div className="flex flex-col items-center justify-center h-full space-y-8 font-hk">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (pathname === "/" && item.name === "bio");
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`text-2xl font-medium transition-colors ${
                  isActive ? "text-black" : "text-gray-400"
                } hover:text-black`}
              >
                {item.name}
              </Link>
            );
          })}
          
          <div className="text-black text-xl">✿</div>
          
          {externalLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-medium text-gray-400 hover:text-black transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      <nav className="hidden md:flex md:flex-col md:items-center md:justify-center md:pt-[8vh] md:space-y-[1vh] md:px-[5%] font-hk">
        <div className="flex flex-col space-y-[1vh]">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (pathname === "/" && item.name === "bio");
            return (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center space-x-[0.5vw] transition-colors"
              >
                <div
                  className={`h-1 w-1 rounded-full ${
                    isActive ? "bg-black" : "bg-transparent"
                  }`}
                />
                <span
                  className={`text-sm font-medium relative transition-colors ${
                    isActive ? "text-black" : "text-gray-400"
                  } after:content-[''] after:absolute after:w-0 after:h-px after:bottom-0 after:left-0 after:bg-black after:transition-opacity after:duration-150 after:opacity-0 hover:after:w-full hover:after:opacity-100 hover:after:transition-all hover:after:duration-200`}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
        
        <div className="pt-[1.5vh] pb-[1.5vh] pr-[1vw] flex justify-center">
          <span className="text-sm font-medium text-black">✿</span>
        </div>
        
        <div className="flex flex-col space-y-[1vh]">
          {externalLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center space-x-[0.5vw] transition-colors"
            >
              <div className="h-2 w-2 rounded-full bg-transparent" />
              <span className="text-sm font-medium text-gray-400 hover:text-black transition-colors relative after:content-[''] after:absolute after:w-0 after:h-px after:bottom-0 after:left-0 after:bg-black after:transition-opacity after:duration-150 after:opacity-0 hover:after:w-full hover:after:opacity-100 hover:after:transition-all hover:after:duration-200">
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}