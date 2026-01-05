"use client";

import { useState, useEffect } from "react";

const navItems = [
  { label: "home", href: "#home" },
  { label: "about", href: "#about" },
  { label: "skills", href: "#skills" },
  { label: "projects", href: "#projects" },
  { label: "contact", href: "#contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => item.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-[#1a1a1a]" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-[#00ff00] glow font-bold text-lg">
            ~/akhil
          </a>
          <ul className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`text-sm transition-all duration-200 ${
                    activeSection === item.href.slice(1)
                      ? "text-[#00ff00] glow"
                      : "text-[#888] hover:text-[#00ff00]"
                  }`}
                >
                  ./{item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="md:hidden text-[#00ff00]">
            <span className="text-xs">[menu]</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
