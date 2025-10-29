import Link from "next/link";
import { QUIZ_FEMALE_JUNIOR } from "@/lib/data";
import { ResultTable } from "@/app/components/ResultTable";

export const metadata = {
  title: "Quiz 2025 — Female • Junior",
  description:
    "Results list for Female • Junior (Age 16 to 35) category in Quiz 2025.",
};

export default function Page() {

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6">
      <header className="card-surface p-5 text-center md:text-left">
        <h1 className="text-2xl font-bold text-zinc-900 md:text-3xl">
          Female • Junior — Quiz 2025
        </h1>
        <p className="mt-2 text-sm text-zinc-700">
          Browse the results list. Click View PDF to open the scanned answer
          sheet.
        </p>
        <div className="mt-3">
          <Link
            href="/quiz-2025"
            className="cta inline-flex rounded-full px-4 py-2 text-sm font-medium"
          >
            ← Back to Categories
          </Link>
        </div>
      </header>

      <ResultTable results={QUIZ_FEMALE_JUNIOR} />
    </div>
  );
}
