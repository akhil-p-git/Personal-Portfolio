import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/site";

export default function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  const cover = project.images[0];
  return (
    <article className={`card reveal ${featured ? "md:col-span-2" : ""}`}>
      {cover && (
        <div className="plate overflow-hidden border-b border-rule bg-paper">
          <Image
            src={cover.src}
            alt={cover.alt}
            width={cover.width}
            height={cover.height}
            sizes={
              featured
                ? "(min-width: 1152px) 1088px, 100vw"
                : "(min-width: 768px) 50vw, 100vw"
            }
            style={cover.focus ? { objectPosition: cover.focus } : undefined}
            className={`w-full object-cover object-top ${
              featured ? "aspect-[16/10] md:aspect-[2.2/1]" : "aspect-[16/10]"
            }`}
          />
        </div>
      )}
      <div
        className={`flex flex-1 flex-col gap-5 p-6 ${
          featured ? "md:grid md:grid-cols-2 md:gap-x-10" : ""
        }`}
      >
        <div className="flex flex-col gap-4">
          <div>
            <p className="ui text-sm text-muted">{project.period}</p>
            <h3 className="heading mt-1 text-2xl md:text-3xl">
              <Link href={`/projects/${project.slug}`} className="stretch">
                {project.title}
              </Link>
            </h3>
          </div>
          <p>{project.summary}</p>
          <p className="text-[0.95rem] text-muted">
            <strong className="ui font-semibold text-ink">Problem. </strong>
            {project.problem}
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-[0.95rem] text-muted">
            <strong className="ui font-semibold text-ink">Built. </strong>
            {project.built[0]}
          </p>
          <ul className="flex flex-wrap gap-1.5" aria-label="Stack">
            {project.stack.map((s) => (
              <li key={s} className="chip">
                {s}
              </li>
            ))}
          </ul>
          <div className="ui relative z-10 mt-auto flex flex-wrap items-center gap-x-5 gap-y-1 pt-2 text-[0.95rem] font-medium">
            {project.demo && (
              <a
                href={project.demo}
                className="link py-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live demo<span className="sr-only"> of {project.title}</span>
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                className="link py-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
                <span className="sr-only"> repository for {project.title}</span>
              </a>
            )}
            <Link
              href={`/projects/${project.slug}`}
              className="link py-1"
              aria-label={`Read the ${project.title} case study`}
            >
              Case study
            </Link>
          </div>
          {project.note && (
            <p className="ui text-sm text-muted">{project.note}</p>
          )}
        </div>
      </div>
    </article>
  );
}
