"use client";

import { useState, useEffect } from "react";

const titles = [
  "Software Developer",
  "Problem Solver",
  "Code Enthusiast",
  "Tech Explorer",
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const timeout = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (text.length < currentTitle.length) {
          setText(currentTitle.slice(0, text.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (text.length > 0) {
          setText(text.slice(0, -1));
        } else {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, timeout);

    return () => clearTimeout(timer);
  }, [text, isDeleting, titleIndex]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 0, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 0, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div
        className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
          showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Terminal window */}
        <div className="terminal-window max-w-2xl mx-auto text-left mb-8">
          <div className="terminal-header">
            <div className="terminal-dot red"></div>
            <div className="terminal-dot yellow"></div>
            <div className="terminal-dot green"></div>
            <span className="text-[#888] text-xs ml-4">~/portfolio</span>
          </div>
          <div className="terminal-body space-y-2">
            <div>
              <span className="text-[#00ff00]">$ </span>
              <span className="text-[#888]">whoami</span>
            </div>
            <div className="text-[#00ffff]">akhil</div>
            <div className="mt-4">
              <span className="text-[#00ff00]">$ </span>
              <span className="text-[#888]">cat role.txt</span>
            </div>
            <div className="text-[#00ff00] glow text-xl md:text-2xl">
              {text}
              <span className="cursor"></span>
            </div>
            <div className="mt-4">
              <span className="text-[#00ff00]">$ </span>
              <span className="text-[#888]">cat status.txt</span>
            </div>
            <div className="text-[#ffb000]">
              Ready to build something amazing_
            </div>
          </div>
        </div>

        {/* ASCII Art Name */}
        <pre className="ascii-art hidden md:block mb-8">
{`
 █████╗ ██╗  ██╗██╗  ██╗██╗██╗
██╔══██╗██║ ██╔╝██║  ██║██║██║
███████║█████╔╝ ███████║██║██║
██╔══██║██╔═██╗ ██╔══██║██║██║
██║  ██║██║  ██╗██║  ██║██║███████╗
╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚══════╝
`}
        </pre>

        <p className="text-[#888] text-lg mb-8 max-w-xl mx-auto">
          Crafting digital experiences with clean code and creative solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#projects" className="terminal-btn">
            ./view_projects
          </a>
          <a href="#contact" className="terminal-btn">
            ./contact_me
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="text-[#888] text-xs animate-bounce">
            <span className="text-[#00ff00]">[</span> scroll down{" "}
            <span className="text-[#00ff00]">]</span>
          </div>
        </div>
      </div>
    </section>
  );
}
