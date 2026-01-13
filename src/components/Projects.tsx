"use client";

import { useEffect, useRef, useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Precision Roof Measurement",
    description:
      "An AI-driven roof measurement and complexity mapping application. Upload satellite or aerial imagery to automatically detect roof boundaries, calculate precise measurements, and assess structural complexity.",
    tech: ["Next.js", "AI/ML", "Computer Vision"],
    github: "https://github.com/akhil-p-git/Precision-Roof-Measurement-and-Complexity-Mapping",
    demo: "https://precision-roof-measurement.vercel.app/",
  },
  {
    id: 2,
    title: "Varsity Tutors",
    description:
      "An AI-powered education platform connecting students, tutors, and parents. Features personalized tutor matching, real-time progress tracking, and gamified learning.",
    tech: ["React", "Node.js", "AI"],
    github: "https://github.com/akhil-p-git/Varsity-Tutors",
    demo: "https://varsity-tutors-six.vercel.app/dashboard",
  },
  {
    id: 3,
    title: "PharmaGen",
    description:
      "An AI-powered video generator tailored for pharmaceutical advertising. Create professional, compliant pharmaceutical ads with an intuitive interface.",
    tech: ["React", "AI", "Video Generation"],
    github: "https://github.com/akhil-p-git/omnigen",
    demo: "https://d1v5wy9q3smjkj.cloudfront.net/",
  },
  {
    id: 4,
    title: "Site Layout",
    description:
      "A mapping tool designed for builders and construction teams. Plot out areas on an interactive map, analyze terrain data, and view key site statistics.",
    tech: ["React", "Maps API", "GIS"],
    github: "https://github.com/akhil-p-git/SiteLayout",
    demo: "https://d2p18kimlqk1xr.cloudfront.net/",
  },
];

export default function Projects() {
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
    <section
      id="projects"
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
            Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="card group hover:border-[#3b82f6]/50"
              >
                <h3 className="text-white font-semibold text-xl mb-3">
                  {project.title}
                </h3>

                <p className="text-[#666] text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-[#1a1a1a] text-[#a1a1a1] rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 border-t border-[#262626]">
                  {project.github && project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#a1a1a1] hover:text-white transition-colors"
                    >
                      GitHub
                    </a>
                  )}
                  {project.demo && project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#a1a1a1] hover:text-white transition-colors"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="https://github.com/akhil-p-git"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-block"
            >
              View All Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
