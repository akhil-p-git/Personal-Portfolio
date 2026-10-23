import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/content/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.title} | Akhil Pinnani`,
      description: project.summary,
      url: `/projects/${project.slug}`,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <article className="mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-8 md:pt-16">
      <Link href="/#work" className="link ui py-2 text-[0.95rem] font-medium">
        Back to selected work
      </Link>

      <header className="mt-8 max-w-3xl">
        <p className="ui text-sm text-muted">{project.period}</p>
        <h1 className="display mt-2 text-[clamp(3rem,10vw,6.5rem)]">
          {project.title}
        </h1>
        <p className="mt-6 text-xl">{project.summary}</p>
        <div className="ui mt-6 flex flex-wrap gap-3 font-medium">
          {project.demo && (
            <a
              href={project.demo}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          )}
        </div>
        {project.note && (
          <p className="ui mt-3 text-sm text-muted">{project.note}</p>
        )}
      </header>

      {project.images.length > 0 && (
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {project.images.map((img, i) => {
            // The first image and an odd trailing one span the row.
            const wide =
              i === 0 ||
              (i === project.images.length - 1 &&
                (project.images.length - 1) % 2 === 1);
            return (
              <figure
                key={img.src}
                className={wide ? "md:col-span-2" : undefined}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  sizes={
                    wide
                      ? "(min-width: 1152px) 1088px, 100vw"
                      : "(min-width: 1152px) 528px, (min-width: 768px) 50vw, 100vw"
                  }
                  priority={i === 0}
                  className="w-full rounded-sm border border-rule"
                />
                {img.caption && (
                  <figcaption className="ui mt-2 text-sm text-muted">
                    {img.caption}
                  </figcaption>
                )}
              </figure>
            );
          })}
        </div>
      )}

      <div className="mt-14 grid gap-10 md:grid-cols-[12rem_1fr] md:gap-12">
        <h2 className="heading text-2xl">The problem</h2>
        <p className="max-w-prose">{project.problem}</p>

        <h2 className="heading text-2xl">Overview</h2>
        <div className="flex max-w-prose flex-col gap-4">
          {project.overview.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        {project.details.map((d) => (
          <div key={d.heading} className="contents">
            <h2 className="heading text-2xl">{d.heading}</h2>
            <ul className="flex max-w-prose list-disc flex-col gap-3 pl-5 marker:text-muted">
              {d.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </div>
        ))}

        <h2 className="heading text-2xl">Stack</h2>
        <ul className="flex flex-wrap gap-1.5" aria-label="Stack">
          {project.stack.map((s) => (
            <li key={s} className="chip">
              {s}
            </li>
          ))}
        </ul>

        <h2 className="heading text-2xl">Status</h2>
        <p className="max-w-prose bg-hivis px-4 py-3 font-medium text-on-hivis">
          {project.status}
        </p>
      </div>

      <nav
        aria-label="Next project"
        className="mt-16 border-t border-rule pt-8"
      >
        <Link
          href={`/projects/${next.slug}`}
          className="heading link text-2xl"
        >
          Next project: {next.title}
        </Link>
      </nav>
    </article>
  );
}
