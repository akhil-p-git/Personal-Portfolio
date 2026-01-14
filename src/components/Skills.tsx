"use client";

import { useEffect, useRef, useState } from "react";

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "HTML/CSS"],
  },
  {
    title: "Frameworks",
    skills: ["React", "Next.js", "Node.js", "Express.js", "TailwindCSS"],
  },
  {
    title: "Tools",
    skills: ["Git", "Docker", "Linux", "VS Code", "AWS"],
  },
  {
    title: "AI",
    skills: ["Claude", "Cursor", "n8n", "Langchain", "Tableau"],
  },
];

export default function Skills() {
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
      id="skills"
      ref={sectionRef}
      className="py-24 px-6 bg-[#111]"
    >
      <div className="max-w-4xl mx-auto">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl font-bold text-white mb-12">
            Skills
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div key={category.title} className="space-y-4">
                <h3 className="text-white font-medium text-lg">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, index) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 bg-[#1a1a1a] text-[#a1a1a1] text-sm rounded-md border border-[#262626] hover:border-[#3b82f6] hover:text-white transition-all duration-300 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                      }`}
                      style={{
                        transitionDelay: `${categoryIndex * 100 + index * 50}ms`,
                      }}
                    >
                      {skill}
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
