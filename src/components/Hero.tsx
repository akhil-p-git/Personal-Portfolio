"use client";

import { useState, useEffect } from "react";

const titles = [
  "AI Enthusiast",
  "Fullstack Developer",
  "Problem Solver",
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 100);
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
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div
        className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
          showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <p className="text-[#a1a1a1] mb-4">Hi, my name is</p>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          Akhil
        </h1>

        <div className="text-2xl md:text-4xl text-[#a1a1a1] mb-6 h-12">
          <span>{text}</span>
          <span className="inline-block w-[3px] h-8 md:h-10 bg-[#3b82f6] ml-1 animate-pulse align-middle" />
        </div>

        <p className="text-[#666] text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          I build things for fun that I&apos;m passionate about. I enjoy creating
          clean, efficient solutions to real problems and turning my ideas into
          reality with AI first development.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#projects" className="btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn-secondary">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
