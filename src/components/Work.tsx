import ProjectCard from "@/components/ProjectCard";
import { moreProjects, projects } from "@/content/site";

export default function Work() {
  const featured = projects.filter((p) => p.images.length > 0);
  const rest = projects.filter((p) => p.images.length === 0);
  return (
    <section
      id="work"
      aria-labelledby="work-title"
      className="border-t border-rule py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <h2 id="work-title" className="heading text-3xl md:text-4xl">
          Selected work
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} featured />
          ))}
          {rest.map((p, i) => (
            <ProjectCard
              key={p.slug}
              project={p}
              // An odd last card spans the row instead of leaving a gap.
              featured={rest.length % 2 === 1 && i === rest.length - 1}
            />
          ))}
        </div>

        <h3 className="heading mt-20 text-2xl md:text-3xl">More projects</h3>
        <ul className="mt-6 border-t border-rule">
          {moreProjects.map((p) => (
            <li
              key={p.title}
              className="grid gap-x-8 gap-y-2 border-b border-rule py-5 md:grid-cols-[16rem_1fr]"
            >
              <div>
                <p className="heading text-lg">{p.title}</p>
                <p className="ui text-sm text-muted">{p.period}</p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-[1rem]">{p.description}</p>
                <ul className="flex flex-wrap gap-1.5" aria-label="Stack">
                  {p.stack.map((s) => (
                    <li key={s} className="chip">
                      {s}
                    </li>
                  ))}
                </ul>
                {p.github && (
                  <a
                    href={p.github}
                    className="link ui w-fit py-1 text-[0.95rem] font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub<span className="sr-only"> repository for {p.title}</span>
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
