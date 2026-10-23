import Section from "@/components/Section";
import { experience } from "@/content/site";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="border-l-2 border-ink">
        {experience.map((job) => (
          <li
            key={job.company}
            className="reveal relative pb-12 pl-8 last:pb-0"
          >
            <span
              aria-hidden="true"
              className="absolute -left-[0.4375rem] top-2 size-3 border-2 border-ink bg-hivis"
            />
            <h3 className="heading text-xl md:text-2xl">{job.role}</h3>
            <p className="ui mt-1 font-medium">{job.company}</p>
            <p className="ui text-sm text-muted">
              {job.period}, {job.location}
            </p>
            <ul className="mt-4 flex max-w-prose list-disc flex-col gap-2 pl-5 text-[1rem] marker:text-muted">
              {job.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
