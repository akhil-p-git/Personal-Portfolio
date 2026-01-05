export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-[#1a1a1a]">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <div className="text-[#888]">
            <span className="text-[#00ff00]">$</span> echo &quot;
            <span className="text-[#00ffff]">
              Built with Next.js & caffeine
            </span>
            &quot;
          </div>

          <div className="text-[#888]">
            <span className="text-[#00ff00]">&copy;</span> {currentYear} Akhil.
            All rights reserved.
          </div>

          <div className="text-[#888]">
            <span className="text-[#00ff00]">[</span>
            <a
              href="https://github.com/akhil-p-git/Personal-Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00ff00] transition-colors"
            >
              source
            </a>
            <span className="text-[#00ff00]">]</span>
          </div>
        </div>

        <div className="mt-6 text-center">
          <pre className="text-[#1a1a1a] text-xs select-none">
            {`
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
            `}
          </pre>
        </div>
      </div>
    </footer>
  );
}
