import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { profile } from "@/content/site";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#skills", label: "Skills" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="border-b border-rule bg-paper md:sticky md:top-0 md:z-40">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 px-4 py-2 sm:px-8">
        <Link
          href="/"
          className="heading text-xl"
          aria-label={`${profile.name}, home`}
        >
          {profile.name}
        </Link>
        <nav
          aria-label="Primary"
          className="ui order-last flex w-full gap-6 pb-1 text-[0.95rem] font-medium md:order-none md:w-auto md:pb-0"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="py-2 decoration-2 underline-offset-8 hover:underline"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
