import Link from "next/link";
import { FEMALE_JUNIOR } from "@/lib/600MeeladResults";
import { ResultTable } from "@/app/components/ResultTable";

export const metadata = {
  title: "Essay 2025 — Female • Junior",
  description:
    "Results list for Female • Junior category in Essay Competition 2025.",
};

export default function Page() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6">
      <header className="card-surface p-5 text-center md:text-left">
        <h1 className="text-2xl font-bold text-zinc-900 md:text-3xl">
          Female • Junior — Essay 2025
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

      <ResultTable results={FEMALE_JUNIOR} />
    </div>
  );
}
