"use client";

import { useEffect, useRef, useState } from "react";

interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  highlights: string[];
  tags: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Gauntlet AI",
    role: "AI Engineering Fellow",
    location: "Austin, TX",
    period: "Oct 2025 – Dec 2025",
    highlights: [
      "Selected for an intensive fellowship training engineers to design, build, and ship AI-first products end-to-end.",
      "Built and shipped a series of AI-first products — real-time collaboration, GPT-powered messaging, desktop video tooling, and growth experiments.",
      "Contributed to Chartsmith, Replicated's AI-powered Helm chart tool, across a TypeScript, Go, and Kubernetes codebase.",
    ],
    tags: ["React", "Next.js", "LangGraph", "n8n", "FastAPI", "OpenAI"],
  },
  {
    company: "Cathedral Plumbing",
    role: "Full Stack Developer",
    location: "Carrollton, TX",
    period: "Aug 2022 – May 2025",
    highlights: [
      "Built and maintained a responsive internal web portal with React and ASP.NET Core powering core business workflows.",
      "Shipped three mobile apps — MiTrade, MiDia, and MiDay — streamlining field operations for technicians.",
      "Expanded Jest unit and integration testing to catch regressions earlier and stabilize production releases.",
      "Tuned microservice performance by optimizing service-to-service communication and database access.",
    ],
    tags: ["React", "ASP.NET Core", "C#", "Jest", "Microservices"],
  },
  {
    company: "Risk and Safety Solutions",
    role: "Project Coordinator / Web Developer",
    location: "Davis, CA",
    period: "Oct 2020 – Apr 2022",
    highlights: [
      "Joined as a contract web developer building React features for an internal portal, then moved into full-time project coordination.",
      "Drove Agile delivery — sprint planning, progress tracking, and stakeholder communication across engineering teams.",
    ],
    tags: ["React", "CSS", "Agile"],
  },
  {
    company: "Orbees Inc",
    role: "Web Developer",
    location: "Fremont, CA",
    period: "Oct 2019 – Sep 2020",
    highlights: [
      "Built a timesheet and leave-management portal with HTML, JavaScript, and CSS.",
      "Supported bug fixes, QA testing, and production rollout activities.",
    ],
    tags: ["JavaScript", "HTML", "CSS"],
  },
];

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl font-bold text-white mb-12">Experience</h2>

          <div>
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={`relative border-l border-[#262626] pl-8 pb-12 last:pb-0 transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <span className="absolute left-0 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full bg-[#3b82f6] ring-4 ring-[#0a0a0a]" />

                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-white font-semibold text-lg">
                    {exp.role}
                  </h3>
                  <span className="text-[#666] text-sm font-mono">
                    {exp.period}
                  </span>
                </div>

                <p className="text-[#3b82f6] text-sm mt-1">
                  {exp.company}
                  <span className="text-[#666]"> · {exp.location}</span>
                </p>

                <ul className="mt-4 space-y-2">
                  {exp.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-2.5 text-[#a1a1a1] text-sm leading-relaxed"
                    >
                      <span className="text-[#3b82f6] select-none">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-[#1a1a1a] text-[#a1a1a1] rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
