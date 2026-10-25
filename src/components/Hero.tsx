import Image from "next/image";
import { profile } from "@/content/site";

export default function Hero() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pb-14 pt-12 sm:px-8 md:pb-20 md:pt-20">
        <div className="grid items-end gap-10 md:grid-cols-[1fr_15rem]">
          <div>
            <h1
              className="display rise text-[clamp(3.5rem,13vw,9.5rem)]"
              style={{ "--d": "0s" } as React.CSSProperties}
            >
              {profile.name}
            </h1>
            <p
              className="rise mt-6 max-w-[34ch] font-ui text-[clamp(1.5rem,3.4vw,2.25rem)] font-medium leading-tight"
              style={{ "--d": "0.12s" } as React.CSSProperties}
            >
              {profile.positioning}
            </p>
          </div>
          <Image
            src="/akhil.jpg"
            alt="Portrait of Akhil Pinnani"
            width={480}
            height={480}
            sizes="(min-width: 768px) 240px, 160px"
            priority
            className="rise size-40 rounded-sm border border-rule object-cover md:size-60"
            style={{ "--d": "0.24s" } as React.CSSProperties}
          />
        </div>

        <p
          className="rise mt-10 max-w-prose"
          style={{ "--d": "0.36s" } as React.CSSProperties}
        >
          {profile.summary}
        </p>

        <div
          className="rise mt-8 flex flex-wrap gap-3"
          style={{ "--d": "0.46s" } as React.CSSProperties}
        >
          <a href="#work" className="btn btn-primary">
            View work
          </a>
          <a href={`mailto:${profile.email}`} className="btn">
            Email me
          </a>
          <a href="#contact" className="btn">
            Contact
          </a>
        </div>
      </section>
    </>
  );
}
