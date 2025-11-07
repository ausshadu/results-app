"use client";

import { Card } from "flowbite-react";
import Link from "next/link";

const metadata = {
  title: "Quiz 2025 Categories",
  description: "Choose a category to view Quiz Results 2025.",
};

function CategoryCard({
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
    <Card className="hover:shadow-lg transition-shadow">
      <h3 className="text-lg font-semibold">{title}</h3>
      {subtitle && <p className="text-sm">{subtitle}</p>}
      <div className="flex gap-2">
        <Link href={participantsHref} className="text-blue-600 hover:underline">
          Participants
        </Link>
        <Link href={resultsHref} className="text-blue-600 hover:underline">
          Results
        </Link>
      </div>
    </Card>
  );
}

export default function Page() {
  return (
    <div className="flex flex-col gap-6">
      <Card>
        <h1 className="text-2xl font-bold md:text-3xl">
          Quiz Results 2025
        </h1>
        <p className="text-sm">
          Select a category to view the results list.
        </p>
        <Link href="/" className="text-blue-600 hover:underline">
          ← Back to Home
        </Link>
      </Card>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
      </div>
    </div>
  );
}
