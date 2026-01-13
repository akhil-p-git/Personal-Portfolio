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
                Hello! I&apos;m Akhil, a software developer with a passion for
                building digital experiences. I enjoy creating things that live
                on the internet, whether that be websites, applications, or
                anything in between.
              </p>

              <p className="text-[#a1a1a1] leading-relaxed">
                My journey into programming started with curiosity about how
                things work. Since then, I&apos;ve had the privilege of working on
                various projects that have helped me grow as a developer.
              </p>

              <p className="text-[#a1a1a1] leading-relaxed">
                I focus on writing clean, efficient code and creating
                user-friendly interfaces. When I&apos;m not coding, you can find me
                exploring new technologies or contributing to open source.
              </p>
            </div>

            <div className="space-y-6">
              <div className="card">
                <h3 className="text-white font-medium mb-2">Location</h3>
                <p className="text-[#666]">Available Worldwide</p>
              </div>

              <div className="card">
                <h3 className="text-white font-medium mb-2">Status</h3>
                <p className="text-[#3b82f6]">Open to opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
