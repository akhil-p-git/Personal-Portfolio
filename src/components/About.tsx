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
      className="py-24 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl font-bold text-white mb-12">
            About Me
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4">
              <p className="text-[#a1a1a1] leading-relaxed">
                Hello! I&apos;m Akhil — a full-stack developer with 5+ years of
                experience shipping web, mobile, and business applications
                across React, Next.js, ASP.NET Core, and Node.
              </p>

              <p className="text-[#a1a1a1] leading-relaxed">
                I recently completed an AI engineering fellowship at Gauntlet AI,
                where I built and shipped a series of AI-first products using
                Cursor, Claude Code, LangGraph, n8n, and modern full-stack tooling.
              </p>

              <p className="text-[#a1a1a1] leading-relaxed">
                I focus on clean architecture, fast iteration, and turning fuzzy
                ideas into things you can click and use. Outside of coding I&apos;m
                lifting, playing billiards, or tinkering with side-project games.
              </p>
            </div>

            <div className="space-y-6">
              <div className="card">
                <h3 className="text-white font-medium mb-2">Location</h3>
                <p className="text-[#666]">San Ramon, CA</p>
              </div>

              <div className="card">
                <h3 className="text-white font-medium mb-2">Status</h3>
                <p className="text-[#3b82f6]">Open to Full-Time Roles</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
