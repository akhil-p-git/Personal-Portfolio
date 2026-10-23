export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="border-t border-rule py-16 md:py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-8 md:grid-cols-[12rem_1fr] md:gap-12">
        <h2
          id={`${id}-title`}
          className="heading text-3xl md:sticky md:top-24 md:self-start md:text-4xl"
        >
          {title}
        </h2>
        <div>{children}</div>
      </div>
    </section>
  );
}
