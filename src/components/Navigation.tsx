"use client";

import { useState, useEffect } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isMenuOpen
            ? "bg-[#0a0a0a] border-b border-[#262626]"
            : isScrolled
              ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#262626]"
              : ""
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a
              href="#home"
              onClick={() => setIsMenuOpen(false)}
              className="text-white font-semibold text-lg hover:text-[#3b82f6] transition-colors"
            >
              Akhil
            </a>

            <ul className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`text-sm transition-colors ${
                      activeSection === item.href.slice(1)
                        ? "text-white"
                        : "text-[#a1a1a1] hover:text-white"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <button
              type="button"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="md:hidden relative -mr-2 h-10 w-10"
            >
              <span
                className={`absolute left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-white transition-all duration-300 ${
                  isMenuOpen ? "top-[19px] rotate-45" : "top-[14px]"
                }`}
              />
              <span
                className={`absolute left-1/2 top-[19px] h-0.5 w-6 -translate-x-1/2 rounded-full bg-white transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-white transition-all duration-300 ${
                  isMenuOpen ? "top-[19px] -rotate-45" : "top-[24px]"
                }`}
              />
            </button>
          </div>

          <div
            id="mobile-menu"
            inert={isMenuOpen ? undefined : true}
            className={`md:hidden overflow-hidden transition-all duration-300 ${
              isMenuOpen ? "mt-4 max-h-80 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <ul className="flex flex-col gap-1 pb-2">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block rounded-lg px-3 py-2.5 text-sm transition-colors ${
                      activeSection === item.href.slice(1)
                        ? "bg-[#1a1a1a] text-white"
                        : "text-[#a1a1a1] hover:bg-[#111] hover:text-white"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      <div
        aria-hidden="true"
        onClick={() => setIsMenuOpen(false)}
        className={`md:hidden fixed inset-0 z-40 bg-[#0a0a0a]/60 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
    </>
  );
}
