import Link from "next/link";

export const metadata = {
  title: "Quiz 2025 — Coming Soon",
  description: "Quiz 2025 results will be published here soon.",
};

export default function Page() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6">
      <header className="card-surface p-6 text-center">
        <h1 className="text-2xl font-bold text-zinc-900 md:text-3xl">
          Quiz 2025 — Coming Soon
        </h1>
        <p className="mt-2 text-sm text-zinc-700">
          We&apos;re preparing the results. Please check back soon.
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <Link href="/" className="cta inline-flex rounded-full px-4 py-2 text-sm font-medium">
            ← Back to Home
          </Link>
          <Link href="/essay-2025" className="cta inline-flex rounded-full px-4 py-2 text-sm font-medium">
            View Essay 2025 Results
          </Link>
        </div>
      </header>
    </div>
  );
}
