"use client";

import { useEffect, useRef, useState, FormEvent } from "react";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = `Portfolio message from ${formState.name}`;
    const body = `From: ${formState.name} <${formState.email}>\n\n${formState.message}`;
    const mailto = `mailto:akhilrvpinnani@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;

    setSubmitted(true);
    setIsSubmitting(false);
    setFormState({ name: "", email: "", message: "" });

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 px-6 bg-[#111]"
    >
      <div className="max-w-4xl mx-auto">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Get In Touch
          </h2>

          <p className="text-[#a1a1a1] mb-12 max-w-xl">
            I&apos;m currently open to new opportunities. Whether you have a
            question or just want to say hi, feel free to reach out!
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <h3 className="text-white font-medium mb-2">Email</h3>
                <a
                  href="mailto:akhilrvpinnani@gmail.com"
                  className="text-[#a1a1a1] hover:text-[#3b82f6] transition-colors"
                >
                  akhilrvpinnani@gmail.com
                </a>
              </div>

              <div>
                <h3 className="text-white font-medium mb-3">Socials</h3>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/akhil-p-git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#a1a1a1] hover:text-white transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/akhil-pinnani/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#a1a1a1] hover:text-white transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <div>
              {submitted ? (
                <div className="card text-center py-8">
                  <p className="text-[#3b82f6] font-medium">
                    Opening your mail client…
                  </p>
                  <p className="text-[#666] text-sm mt-2">
                    If nothing happened, email me directly at akhilrvpinnani@gmail.com
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      required
                      className="w-full"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      required
                      className="w-full"
                      placeholder="Your email"
                    />
                  </div>

                  <div>
                    <textarea
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      required
                      rows={4}
                      className="w-full resize-none"
                      placeholder="Your message"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
