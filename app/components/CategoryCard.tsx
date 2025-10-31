import Link from "next/link";

export function CategoryCard({
  title,
  subtitle,
  participantsHref,
  resultsHref,
}: {
  title: string;
  subtitle?: string;
  participantsHref: string;
  resultsHref: string;
}) {
  return (
    <div className="card-surface block w-full rounded-xl p-5">
      <div className="flex items-center justify-between gap-2">
        <div>
          <h3 className="text-lg font-semibold text-zinc-900">{title}</h3>
          {subtitle ? (
            <p className="mt-1 text-sm text-zinc-600">{subtitle}</p>
          ) : null}
        </div>
        <div className="flex items-center gap-2">
          <Link
            href={participantsHref}
            className="cta inline-flex min-w-10 items-center justify-center rounded-full px-3 py-2 text-sm font-medium shadow-sm participantCta"
          >
            Participants
          </Link>
          <Link
            href={resultsHref}
            className="cta inline-flex min-w-10 items-center justify-center rounded-full px-3 py-2 text-sm font-medium shadow-sm"
          >
            Results
          </Link>
        </div>
      </div>
    </div>
  );
}
