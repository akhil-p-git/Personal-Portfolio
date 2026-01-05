"use client";

import { useEffect, useRef, useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  status: "completed" | "in-progress" | "planned";
}

const projects: Project[] = [
  {
    id: 1,
    title: "Personal Portfolio",
    description:
      "A terminal-themed portfolio website built with Next.js and TypeScript. Features include typing animations, CRT effects, and responsive design.",
    tech: ["Next.js", "TypeScript", "TailwindCSS"],
    github: "https://github.com/akhil-p-git/Personal-Portfolio",
    status: "in-progress",
  },
  {
    id: 2,
    title: "Project Alpha",
    description:
      "A full-stack web application with user authentication, real-time updates, and a modern UI. Built with best practices in mind.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "#",
    demo: "#",
    status: "completed",
  },
  {
    id: 3,
    title: "CLI Tool",
    description:
      "A command-line utility that automates repetitive tasks and improves developer productivity. Cross-platform compatible.",
    tech: ["Python", "Click", "Rich"],
    github: "#",
    status: "completed",
  },
  {
    id: 4,
    title: "Future Project",
    description:
      "An exciting project in the planning phase. Stay tuned for updates on this innovative solution.",
    tech: ["TBD"],
    status: "planned",
  },
];

const statusColors = {
  completed: "#27c93f",
  "in-progress": "#ffbd2e",
  planned: "#888",
};

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
      className="min-h-screen flex items-center py-20 px-4"
    >
      <div className="max-w-5xl mx-auto w-full">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-2xl md:text-3xl mb-8">
            <span className="text-[#00ffff]">{">"}</span>{" "}
            <span className="text-[#00ff00] glow">./projects</span>
          </h2>

          <div className="text-[#888] mb-6">
            <span className="text-[#00ff00]">$ </span>
            ls -la ~/projects
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="terminal-window group hover:border-[#00ff00]/50 transition-all duration-300"
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
              >
                <div className="terminal-header">
                  <div className="terminal-dot red"></div>
                  <div className="terminal-dot yellow"></div>
                  <div className="terminal-dot green"></div>
                  <span className="text-[#888] text-xs ml-4 flex-1">
                    {project.title.toLowerCase().replace(/\s/g, "-")}/
                  </span>
                  <span
                    className="text-xs"
                    style={{ color: statusColors[project.status] }}
                  >
                    [{project.status}]
                  </span>
                </div>
                <div className="terminal-body">
                  <div className="mb-4">
                    <span className="text-[#ffb000] text-lg group-hover:glow transition-all">
                      {project.title}
                    </span>
                  </div>

                  <p className="text-[#888] text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 border border-[#1a1a1a] text-[#00ffff]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4 border-t border-[#1a1a1a]">
                    {project.github && project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[#888] hover:text-[#00ff00] transition-colors"
                      >
                        [github]
                      </a>
                    )}
                    {project.demo && project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[#888] hover:text-[#00ff00] transition-colors"
                      >
                        [live demo]
                      </a>
                    )}
                    {(!project.github || project.github === "#") &&
                      (!project.demo || project.demo === "#") && (
                        <span className="text-sm text-[#888]">
                          [coming soon]
                        </span>
                      )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="https://github.com/akhil-p-git"
              target="_blank"
              rel="noopener noreferrer"
              className="terminal-btn inline-block"
            >
              ./view_all_repositories
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
