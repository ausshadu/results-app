import Link from "next/link";

export const metadata = {
  title: "Quiz 2025 Categories",
  description: "Choose a category to view Quiz Results 2025.",
};

function CategoryCard({
  title,
  href,
  subtitle,
}: {
  title: string;
  href: string;
  subtitle?: string;
}) {
  return (
    <Link
      href={href}
      className="card-surface block w-full rounded-xl p-5 transition-transform hover:scale-[1.02] focus:scale-[1.02] focus:outline-none"
    >
      <div className="flex items-center justify-between gap-2">
        <div>
          <h3 className="text-lg font-semibold text-zinc-900">{title}</h3>
          {subtitle ? (
            <p className="mt-1 text-sm text-zinc-600">{subtitle}</p>
          ) : null}
        </div>
        <span className="cta inline-flex min-w-10 items-center justify-center rounded-full px-3 py-2 text-sm font-medium shadow-sm">
          View
        </span>
      </div>
    </Link>
  );
}
 
function DualCtaCard({
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
 

export default function Page() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6">
      <header className="card-surface p-5 text-center md:text-left">
        <h1 className="text-2xl font-bold text-zinc-900 md:text-3xl">
          Quiz Results 2025
        </h1>
        <p className="mt-2 text-sm text-zinc-700">
          Select a category to view the results list.
        </p>
        <div className="mt-3">
          <Link
            href="/"
            className="cta inline-flex rounded-full px-4 py-2 text-sm font-medium"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <DualCtaCard
          title="Inter Madrasa"
          subtitle="14 Madrasas • Channapatna / Mandya"
          participantsHref="/inter-madrasa/participants"
          resultsHref="/inter-madrasa/results"
        />
        <DualCtaCard
          title="Male • Combined"
          subtitle="Age 16 to 75"
          participantsHref="/male-combined/participants"
          resultsHref="/male-combined/results"
        />
        <DualCtaCard
          title="Female • Junior"
          subtitle="Age 16 to 35"
          participantsHref="/female-junior/participants"
          resultsHref="/female-junior/results"
        />
        <DualCtaCard
          title="Female • Senior"
          subtitle="Age 36 to 75"
          participantsHref="/female-senior/participants"
          resultsHref="/female-senior/results"
        />
      </section>
    </div>
  );
}
