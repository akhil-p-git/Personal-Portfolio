"use client";

import { useEffect, useRef, useState } from "react";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Python", level: 80 },
      { name: "HTML/CSS", level: 90 },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "React", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "Node.js", level: 80 },
      { name: "TailwindCSS", level: 90 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", level: 85 },
      { name: "Docker", level: 70 },
      { name: "Linux", level: 75 },
      { name: "VS Code", level: 90 },
    ],
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

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category) => (
              <div key={category.title} className="space-y-6">
                <h3 className="text-white font-medium text-lg">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, index) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-[#a1a1a1] text-sm">
                          {skill.name}
                        </span>
                        <span className="text-[#666] text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-bar-fill"
                          style={{
                            width: isVisible ? `${skill.level}%` : "0%",
                            transitionDelay: `${index * 100}ms`,
                          }}
                        />
                      </div>
                    </div>
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
