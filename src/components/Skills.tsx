"use client";

import { useEffect, useRef, useState } from "react";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiHtml5,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiGit,
  SiDocker,
  SiLinux,
  SiTerraform,
  SiAmazonwebservices,
  SiAnthropic,
  SiN8N,
  SiTableau,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { BsRobot, BsCursor } from "react-icons/bs";
import { IconType } from "react-icons";

interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Java", icon: FaJava, color: "#ED8B00" },
      { name: "HTML/CSS", icon: SiHtml5, color: "#E34F26" },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
      { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Docker/K8s", icon: SiDocker, color: "#2496ED" },
      { name: "Linux", icon: SiLinux, color: "#FCC624" },
      { name: "Terraform", icon: SiTerraform, color: "#844FBA" },
      { name: "AWS", icon: SiAmazonwebservices, color: "#FF9900" },
    ],
  },
  {
    title: "AI",
    skills: [
      { name: "Claude", icon: SiAnthropic, color: "#D4A27F" },
      { name: "Cursor", icon: BsCursor, color: "#00D1FF" },
      { name: "n8n", icon: SiN8N, color: "#EA4B71" },
      { name: "Langchain", icon: BsRobot, color: "#1C3C3C" },
      { name: "Tableau", icon: SiTableau, color: "#E97627" },
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div key={category.title} className="space-y-4">
                <h3 className="text-white font-medium text-lg border-b border-[#262626] pb-2">
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                      <div
                        key={skill.name}
                        className={`flex items-center gap-3 transition-all duration-300 ${
                          isVisible
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 -translate-x-4"
                        }`}
                        style={{
                          transitionDelay: `${categoryIndex * 100 + index * 75}ms`,
                        }}
                      >
                        <Icon
                          className="text-xl flex-shrink-0"
                          style={{ color: skill.color }}
                        />
                        <span className="text-[#a1a1a1] text-sm">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
