import Link from "next/link";
import { FEMALE_SENIOR } from "@/lib/600MeeladResults";
import { EssayResultsTable } from "@/app/components";

export const metadata = {
  title: "Essay 2025 — Female • Senior",
  description:
    "Results list for Female • Senior category in Essay Competition 2025.",
};

export default function Page() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6">
      <header className="card-surface p-5 text-center md:text-left">
        <h1 className="text-2xl font-bold text-zinc-900 md:text-3xl">
          Female • Senior — Essay 2025
        </h1>
        <p className="mt-2 text-sm text-zinc-700">
          Browse the results list. Click View PDF to open the scanned answer
          sheet.
        </p>
        <div className="mt-3">
          <Link
            href="/essay-2025"
            className="cta inline-flex rounded-full px-4 py-2 text-sm font-medium"
          >
            ← Back to Categories
          </Link>
        </div>
      </header>

      <EssayResultsTable results={FEMALE_SENIOR} />
    </div>
  );
}
