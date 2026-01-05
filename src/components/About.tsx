"use client";

import { useEffect, useRef, useState } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen flex items-center py-20 px-4"
    >
      <div className="max-w-4xl mx-auto w-full">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-2xl md:text-3xl mb-8">
            <span className="text-[#00ffff]">{">"}</span>{" "}
            <span className="text-[#00ff00] glow">./about_me</span>
          </h2>

          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-dot red"></div>
              <div className="terminal-dot yellow"></div>
              <div className="terminal-dot green"></div>
              <span className="text-[#888] text-xs ml-4">about.md</span>
            </div>
            <div className="terminal-body space-y-6">
              <div>
                <span className="text-[#ff0040]">## </span>
                <span className="text-[#ffb000]">Who am I?</span>
              </div>

              <p className="text-[#ccc] leading-relaxed">
                Hey there! I&apos;m <span className="text-[#00ff00]">Akhil</span>, a
                passionate software developer who loves turning ideas into
                reality through code. I enjoy building things that live on the
                internet, whether that be websites, applications, or anything in
                between.
              </p>

              <div>
                <span className="text-[#ff0040]">## </span>
                <span className="text-[#ffb000]">My Journey</span>
              </div>

              <p className="text-[#ccc] leading-relaxed">
                My journey into the world of programming started with curiosity
                and a desire to understand how things work. Since then, I&apos;ve
                been on a continuous path of learning, building, and improving.
                Every line of code is an opportunity to solve problems and
                create something meaningful.
              </p>

              <div>
                <span className="text-[#ff0040]">## </span>
                <span className="text-[#ffb000]">What drives me?</span>
              </div>

              <ul className="text-[#ccc] space-y-2">
                <li>
                  <span className="text-[#00ff00]">-</span> Building clean,
                  efficient, and scalable solutions
                </li>
                <li>
                  <span className="text-[#00ff00]">-</span> Learning new
                  technologies and frameworks
                </li>
                <li>
                  <span className="text-[#00ff00]">-</span> Collaborating with
                  others to create amazing products
                </li>
                <li>
                  <span className="text-[#00ff00]">-</span> Solving complex
                  problems with elegant code
                </li>
              </ul>

              <div className="pt-4 border-t border-[#1a1a1a]">
                <span className="text-[#888]">Current location:</span>{" "}
                <span className="text-[#00ffff]">Earth</span>
                <br />
                <span className="text-[#888]">Status:</span>{" "}
                <span className="text-[#27c93f]">Available for opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
