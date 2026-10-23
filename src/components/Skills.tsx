import Section from "@/components/Section";
import { education, skills } from "@/content/site";

export default function Skills() {
  return (
    <>
      <Section id="skills" title="Skills">
        <dl className="grid gap-x-10 gap-y-7 sm:grid-cols-[11rem_1fr]">
          {skills.map((s) => (
            <div key={s.group} className="contents">
              <dt className="heading text-lg">{s.group}</dt>
              <dd className="text-[1rem] max-sm:-mt-5">{s.items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </Section>
      <Section id="education" title="Education">
        <ul className="flex flex-col gap-4">
          {education.map((e) => (
            <li key={e.school}>
              <p className="heading text-xl">{e.school}</p>
              <p className="text-muted">{e.credential}</p>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
