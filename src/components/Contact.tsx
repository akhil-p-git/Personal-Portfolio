import { profile } from "@/content/site";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="border-t border-rule bg-surface py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <h2 id="contact-title" className="display text-[clamp(2.75rem,9vw,6.5rem)]">
          Let&rsquo;s talk.
        </h2>
        <p className="mt-6 max-w-prose">{profile.availability}</p>
        <p className="mt-8">
          <a
            href={`mailto:${profile.email}`}
            className="btn btn-primary text-base"
          >
            Email me
          </a>
        </p>
        <ul className="ui mt-8 flex flex-wrap gap-x-8 gap-y-2 font-medium">
          <li>
            <a href={`mailto:${profile.email}`} className="link py-1">
              {profile.email}
            </a>
          </li>
          <li>
            <a
              href={profile.linkedin}
              className="link py-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href={profile.github}
              className="link py-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
