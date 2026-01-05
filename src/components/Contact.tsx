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

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSubmitted(true);
    setIsSubmitting(false);
    setFormState({ name: "", email: "", message: "" });

    // Reset submitted state after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section
      id="contact"
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
            <span className="text-[#00ff00] glow">./contact</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot red"></div>
                <div className="terminal-dot yellow"></div>
                <div className="terminal-dot green"></div>
                <span className="text-[#888] text-xs ml-4">contact.sh</span>
              </div>
              <div className="terminal-body space-y-4">
                <div>
                  <span className="text-[#888]"># Let&apos;s connect!</span>
                </div>

                <div className="space-y-3 mt-6">
                  <div>
                    <span className="text-[#00ff00]">$ </span>
                    <span className="text-[#888]">echo $EMAIL</span>
                    <div className="text-[#00ffff] pl-4">
                      <a href="mailto:your.email@example.com">
                        your.email@example.com
                      </a>
                    </div>
                  </div>

                  <div>
                    <span className="text-[#00ff00]">$ </span>
                    <span className="text-[#888]">cat socials.txt</span>
                    <div className="pl-4 space-y-1 mt-2">
                      <div>
                        <span className="text-[#888]">github:</span>{" "}
                        <a
                          href="https://github.com/akhil-p-git"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          @akhil-p-git
                        </a>
                      </div>
                      <div>
                        <span className="text-[#888]">linkedin:</span>{" "}
                        <a
                          href="https://linkedin.com/in/yourprofile"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          /in/yourprofile
                        </a>
                      </div>
                      <div>
                        <span className="text-[#888]">twitter:</span>{" "}
                        <a
                          href="https://twitter.com/yourhandle"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          @yourhandle
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#1a1a1a]">
                  <span className="text-[#888] text-sm">
                    Open to opportunities and collaborations!
                  </span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot red"></div>
                <div className="terminal-dot yellow"></div>
                <div className="terminal-dot green"></div>
                <span className="text-[#888] text-xs ml-4">
                  send_message.sh
                </span>
              </div>
              <div className="terminal-body">
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="text-[#27c93f] text-xl mb-2">
                      Message sent successfully!
                    </div>
                    <div className="text-[#888]">
                      I&apos;ll get back to you soon.
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="text-[#888] text-sm">
                        <span className="text-[#00ff00]">$ </span>
                        enter name:
                      </label>
                      <input
                        type="text"
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        required
                        className="w-full bg-transparent border border-[#1a1a1a] p-2 mt-1 text-[#00ff00] focus:border-[#00ff00] focus:outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="text-[#888] text-sm">
                        <span className="text-[#00ff00]">$ </span>
                        enter email:
                      </label>
                      <input
                        type="email"
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        required
                        className="w-full bg-transparent border border-[#1a1a1a] p-2 mt-1 text-[#00ff00] focus:border-[#00ff00] focus:outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label className="text-[#888] text-sm">
                        <span className="text-[#00ff00]">$ </span>
                        enter message:
                      </label>
                      <textarea
                        value={formState.message}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            message: e.target.value,
                          })
                        }
                        required
                        rows={4}
                        className="w-full bg-transparent border border-[#1a1a1a] p-2 mt-1 text-[#00ff00] focus:border-[#00ff00] focus:outline-none transition-colors resize-none"
                        placeholder="Your message here..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="terminal-btn w-full disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-pulse">sending...</span>
                        </>
                      ) : (
                        "./send_message"
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
