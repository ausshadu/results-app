import Link from "next/link";
import { CategoryCard } from "../components/CategoryCard";

export const metadata = {
  title: "Quiz 2025 Categories",
  description: "Choose a category to view Quiz Results 2025.",
};

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
        <CategoryCard
          title="Inter Madrasa"
          subtitle="14 Madrasas • Channapatna / Mandya"
          participantsHref="/quiz-2025/inter-madrasa/participants"
          resultsHref="/quiz-2025/inter-madrasa/results"
        />
        <CategoryCard
          title="Male • Combined"
          subtitle="Age 16 to 75"
          participantsHref="/quiz-2025/male-combined/participants"
          resultsHref="/quiz-2025/male-combined/results"
        />
        <CategoryCard
          title="Female • Junior"
          subtitle="Age 16 to 35"
          participantsHref="/quiz-2025/female-junior/participants"
          resultsHref="/quiz-2025/female-junior/results"
        />
        <CategoryCard
          title="Female • Senior"
          subtitle="Age 36 to 75"
          participantsHref="/quiz-2025/female-senior/participants"
          resultsHref="/quiz-2025/female-senior/results"
        />
      </section>
    </div>
  );
}
