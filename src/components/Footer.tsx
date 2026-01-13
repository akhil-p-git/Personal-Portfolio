export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-[#262626]">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#666]">
          <p>
            &copy; {currentYear} Akhil. All rights reserved.
          </p>

          <p>
            Built with Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
