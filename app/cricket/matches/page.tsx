import Link from "next/link";

export default function MatchesComingSoonPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="rounded-lg border bg-white dark:bg-gray-800 p-4 shadow">
        <h1 className="text-2xl font-bold md:text-3xl">Cricket Matches</h1>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          Coming soon. Schedule and results will be published here.
        </p>
        <div className="mt-2">
          <Link href="/cricket" className="link">
            ← Back to Cricket
          </Link>
        </div>
      </div>

      <div className="rounded-lg border bg-white dark:bg-gray-900 p-6 shadow text-center">
        <div className="text-3xl font-semibold mb-2">Coming Soon</div>
        <p className="text-gray-600 dark:text-gray-300">
          Please check back later for match fixtures and results.
        </p>
      </div>
    </div>
  );
}
