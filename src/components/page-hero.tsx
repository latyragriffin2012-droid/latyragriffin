export function PageHero({
  kicker,
  title,
  lede,
}: {
  kicker?: string;
  title: string;
  lede?: string;
}) {
  return (
    <div className="mx-auto max-w-6xl px-4 pt-10 pb-8 sm:px-6 sm:pt-14">
      {kicker ? (
        <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-gold-deep">
          {kicker}
        </p>
      ) : null}
      <h1 className="mt-2 font-display text-5xl leading-[0.95] italic sm:text-6xl">
        {title}
      </h1>
      {lede ? (
        <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft">
          {lede}
        </p>
      ) : null}
    </div>
  );
}
