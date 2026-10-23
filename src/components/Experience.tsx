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
    company: "Soledad Data Solutions",
    role: "Full Stack AI Engineer & AI Instructor",
    location: "San Diego, CA (Remote)",
    period: "Jan 2026 – May 2026",
    highlights: [
      "Designed and delivered a hands-on AI engineering curriculum to about 20 practicing software engineers across two cohorts of about 10 weeks each, covering how to design, build, and ship AI-first and agentic applications.",
      "Led instruction on modern AI development workflows — LLM APIs, agent orchestration, automation, and prompt engineering — turning fast-moving practices into structured, repeatable lessons.",
      "Built Java full-stack applications, including a trading application that was sold commercially.",
    ],
    tags: ["Java", "LLM APIs", "Agents", "Automation", "Prompt Engineering"],
  },
  {
    company: "Gauntlet AI",
    role: "AI Engineering Fellow",
    location: "Austin, TX",
    period: "Oct 2025 – Dec 2025",
    highlights: [
      "Selected for an intensive fellowship training engineers to design, build, and ship AI-first products end-to-end.",
      "Built and shipped a series of AI-first products — real-time collaboration, GPT-powered messaging, desktop video tooling, and growth experiments.",
      "Engineered RapidPhotoUpload, a Spring Boot and React media platform with resumable chunked uploads, cutting bulk upload of 1,000 images from roughly 15–20 minutes to 2–3.",
      "Contributed to Chartsmith, Replicated's AI-powered Helm chart tool, across a TypeScript, Go, and Kubernetes codebase.",
    ],
    tags: ["React", "Next.js", "Spring Boot", "LangGraph", "n8n", "FastAPI", "OpenAI"],
  },
  {
    company: "Cathedral Plumbing",
    role: "Full Stack Developer (16-person team)",
    location: "Carrollton, TX",
    period: "Aug 2022 – May 2025",
    highlights: [
      "Built and maintained an internal web portal (React.js and ASP.NET Core on Microsoft Azure) used by 7 construction companies to run core operational workflows and day-to-day field operations.",
      "Designed and shipped three production mobile apps — MiTrade, MiDia, and MiDay — adopted by 3,000+ field technicians for access to job-critical tools and information.",
      "Expanded unit and integration test coverage with Jest, catching regressions earlier and improving release stability across production deployments on a two-week release cycle.",
      "Improved microservice response times, query times, and error rates by optimizing service-to-service communication and database interactions, with added monitoring and logging for faster troubleshooting.",
      "Supported the portal and mobile apps in production, working issues through ServiceNow tickets from triage to resolution.",
    ],
    tags: ["React", "ASP.NET Core", "C#", "Azure", "Jest", "Microservices", "ServiceNow"],
  },
  {
    company: "Risk and Safety Solutions",
    role: "Project Coordinator / Web Developer",
    location: "Davis, CA",
    period: "Oct 2020 – Apr 2022",
    highlights: [
      "Joined as a contract web developer building React.js and CSS features for an internal portal, then transitioned into a full-time project coordination role.",
      "Drove Agile delivery in Jira through sprint planning, progress tracking, blocker resolution, and stakeholder communication across engineering teams.",
    ],
    tags: ["React", "CSS", "Agile", "Jira"],
  },
  {
    company: "Orbees Business Solutions",
    role: "Frontend Developer",
    location: "Fremont, CA",
    period: "Jun 2019 – Oct 2020",
    highlights: [
      "Built an internal timesheet and leave-management portal, and maintained Orbees' internal applications and websites — HTML, JavaScript, CSS.",
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
