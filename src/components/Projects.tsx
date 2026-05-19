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
    title: "CollabCanvas",
    description:
      "Real-time collaborative design canvas with AI-assisted generation. Live cursors, presence indicators, and GPT-4o powered shape commands. Open in multiple tabs to see real-time sync.",
    tech: ["React", "Firebase", "Konva", "GPT-4o"],
    github: "https://github.com/akhil-p-git/CollabCanvas",
    demo: "https://collab-canvas-f20e2.web.app",
  },
  {
    id: 2,
    title: "MessageAI",
    description:
      "iOS messaging app with real-time chat, GPT-powered conversation summaries, action item extraction, decision tracking, and semantic search across message history.",
    tech: ["SwiftUI", "Firebase", "OpenAI"],
    github: "https://github.com/akhil-p-git/MessageAI",
  },
  {
    id: 3,
    title: "ClipForge",
    description:
      "Desktop video editor with screen/webcam capture, timeline editing, FFmpeg export, and Whisper-powered transcription. Built for streamers and content creators.",
    tech: ["Electron", "React", "FFmpeg", "Whisper"],
    github: "https://github.com/akhil-p-git/ClipForge",
  },
  {
    id: 4,
    title: "AI Command Center",
    description:
      "Admin dashboard for monitoring and managing AI agents, workflows, and conversations. Vector store management, n8n workflow integration, and live agent step visualization.",
    tech: ["FastAPI", "React", "LangGraph", "n8n"],
    github: "https://github.com/akhil-p-git/ai-command-center",
  },
  {
    id: 5,
    title: "RapidPhotoUpload",
    description:
      "Media platform with resumable chunked uploads, automated thumbnail/EXIF processing, WebSocket progress updates, and Cloudflare R2 or local storage options.",
    tech: ["Spring Boot", "React", "Cloudflare R2"],
    github: "https://github.com/akhil-p-git/RapidPhotoUpload",
  },
  {
    id: 6,
    title: "Varsity Tutors MVP",
    description:
      "Growth-focused education MVP with gamified social learning loops, agent-based personalization, voice room flows, and K-factor analytics for engagement experiments.",
    tech: ["Next.js 14", "TypeScript", "Tailwind"],
    github: "https://github.com/akhil-p-git/Varsity-Tutors",
    demo: "https://varsity-tutors-six.vercel.app/dashboard",
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
