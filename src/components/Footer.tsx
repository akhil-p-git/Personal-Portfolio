import { profile } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t border-rule">
      <div className="ui mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-8 text-sm text-muted sm:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name}.
        </p>
        <a href="#main" className="link">
          Back to top
        </a>
      </div>
    </footer>
  );
}
