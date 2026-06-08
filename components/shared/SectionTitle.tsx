type SectionTitleProps = {
  badge: string;
  title: string;
  description?: string;
  divider?: boolean;
};

export default function SectionTitle({
  badge,
  title,
  description,
  divider,
}: SectionTitleProps) {
  return (
    <>
      {divider && <div className="my-16 h-px bg-zinc-200" />}
      <div className="mb-12 text-center">
        <span className="rounded-full bg-green-100 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-green-700">
          {badge}
        </span>
        <h2 className="mt-4 text-3xl font-bold text-zinc-800">{title}</h2>
        {description && (
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-zinc-600">
            {description}
          </p>
        )}
      </div>
    </>
  );
}
