"use client";

import { useEffect, useRef, useState } from "react";

interface Skill {
  name: string;
  level: number;
  category: string;
}

const skills: Skill[] = [
  // Languages
  { name: "JavaScript", level: 90, category: "languages" },
  { name: "TypeScript", level: 85, category: "languages" },
  { name: "Python", level: 80, category: "languages" },
  { name: "HTML/CSS", level: 90, category: "languages" },

  // Frameworks
  { name: "React", level: 85, category: "frameworks" },
  { name: "Next.js", level: 80, category: "frameworks" },
  { name: "Node.js", level: 80, category: "frameworks" },
  { name: "TailwindCSS", level: 90, category: "frameworks" },

  // Tools
  { name: "Git", level: 85, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "Linux", level: 75, category: "tools" },
  { name: "VS Code", level: 90, category: "tools" },
];

const categories = ["languages", "frameworks", "tools"];

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("languages");
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

  const filteredSkills = skills.filter(
    (skill) => skill.category === activeCategory
  );

  return (
    <section
      id="skills"
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
            <span className="text-[#00ff00] glow">./skills</span>
          </h2>

          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-dot red"></div>
              <div className="terminal-dot yellow"></div>
              <div className="terminal-dot green"></div>
              <span className="text-[#888] text-xs ml-4">skills.json</span>
            </div>
            <div className="terminal-body">
              {/* Category tabs */}
              <div className="flex gap-4 mb-6 border-b border-[#1a1a1a] pb-4">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`text-sm transition-all ${
                      activeCategory === category
                        ? "text-[#00ff00] glow"
                        : "text-[#888] hover:text-[#00ffff]"
                    }`}
                  >
                    [{category}]
                  </button>
                ))}
              </div>

              {/* Skills list */}
              <div className="space-y-4">
                <div className="text-[#888] mb-4">
                  <span className="text-[#ff0040]">{"{"}</span>
                </div>

                {filteredSkills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="pl-4"
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[#00ffff]">
                        &quot;{skill.name}&quot;
                      </span>
                      <span className="text-[#888] text-sm">
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

                <div className="text-[#888] mt-4">
                  <span className="text-[#ff0040]">{"}"}</span>
                </div>
              </div>

              {/* Fun stats */}
              <div className="mt-8 pt-6 border-t border-[#1a1a1a] grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl text-[#00ff00] glow">500+</div>
                  <div className="text-[#888] text-xs">commits</div>
                </div>
                <div>
                  <div className="text-2xl text-[#00ff00] glow">10+</div>
                  <div className="text-[#888] text-xs">projects</div>
                </div>
                <div>
                  <div className="text-2xl text-[#00ff00] glow">∞</div>
                  <div className="text-[#888] text-xs">cups of coffee</div>
                </div>
                <div>
                  <div className="text-2xl text-[#00ff00] glow">24/7</div>
                  <div className="text-[#888] text-xs">curious</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
