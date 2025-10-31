import Link from "next/link";
import { Round1Table, Round2Table } from "@/app/components";
import type { Round1Scores, Round2Scores } from "@/lib/600MeeladResults/Models";

export const metadata = {
  title: "Female • Senior — Results",
  description: "Results page for Female • Senior (empty for now).",
};

const emptyRound1: Round1Scores[] = [];
const emptyRound2: Round2Scores[] = [];

export default function Page() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6">
      <header className="card-surface p-5 text-center md:text-left">
        <h1 className="text-2xl font-bold text-zinc-900 md:text-3xl">
          Female • Senior — Results
        </h1>
        <p className="mt-2 text-sm text-zinc-700">
          This page has placeholder tables. Data will be added later.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <Link
            href="/quiz-2025"
            className="cta inline-flex rounded-full px-4 py-2 text-sm font-medium"
          >
            ← Back to Categories
          </Link>
          <Link
            href="/female-senior/participants"
            className="cta inline-flex rounded-full px-4 py-2 text-sm font-medium"
          >
            View Participants →
          </Link>
        </div>
      </header>

      <section className="card-surface card-round1 p-5 text-center md:text-left">
        <h2 className="text-2xl font-bold text-zinc-900 md:text-3xl">
          ROUND - 1 - ♻️ Round robin style ♻️
        </h2>
      </section>

      <Round1Table title="Group - A" data={emptyRound1} />
      <Round1Table title="Group - B" data={emptyRound1} />

      <section className="card-surface card-round2 p-5 text-center md:text-left">
        <h2 className="text-2xl font-bold text-zinc-900 md:text-3xl">
          ROUND 2 - ⚡️ Mixed Style (Buzzer + Individual) 👥
        </h2>
      </section>

      <Round2Table title="Group - A" data={emptyRound2} />
      <Round2Table title="Group - B" data={emptyRound2} />

      <section className="card-surface card-round3 p-5 text-center md:text-left">
        <h2 className="text-2xl font-bold text-zinc-900 md:text-3xl">
          FINAL ROUND - ⚡️ Buzzer style ⚡️
        </h2>
      </section>

      <Round2Table title="Final Round — Teams" data={emptyRound2} />
    </div>
  );
}
