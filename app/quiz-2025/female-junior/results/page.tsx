import Link from "next/link";
import { Round1Table, Round2Table } from "@/app/components";
import {
  Female_Juniors_Round1_GroupA,
  Female_Juniors_Round1_GroupB,
  Female_Juniors_Round2_GroupA,
  Female_Juniors_Round2_GroupB,
  Female_Juniors_Round3_Final,
} from "@/lib/600MeeladResults";

export const metadata = {
  title: "Female • Junior — Results",
  description: "Results page for Female • Junior (empty for now).",
};

export default function Page() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6">
      <header className="card-surface p-5 text-center md:text-left">
        <h1 className="text-2xl font-bold text-zinc-900 md:text-3xl">
          Female • Junior — Results
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
            href="/quiz-2025/female-junior/participants"
            className="cta participantCta inline-flex rounded-full px-4 py-2 text-sm font-medium"
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

      <Round1Table title="Group - A" data={Female_Juniors_Round1_GroupA} />
      <Round1Table title="Group - B" data={Female_Juniors_Round1_GroupB} />

      <section className="card-surface card-round2 p-5 text-center md:text-left">
        <h2 className="text-2xl font-bold text-zinc-900 md:text-3xl">
          ROUND 2 - ⚡️ Mixed Style (Buzzer + Individual) 👥
        </h2>
      </section>

      <Round2Table title="Group - A" data={Female_Juniors_Round2_GroupA} />
      <Round2Table title="Group - B" data={Female_Juniors_Round2_GroupB} />

      <section className="card-surface card-round3 p-5 text-center md:text-left">
        <h2 className="text-2xl font-bold text-zinc-900 md:text-3xl">
          FINAL ROUND - ⚡️ Buzzer style ⚡️
        </h2>
      </section>

      <Round2Table
        title="Final Round — Teams"
        data={Female_Juniors_Round3_Final}
      />
    </div>
  );
}
