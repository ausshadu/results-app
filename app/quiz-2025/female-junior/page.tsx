import Link from "next/link";
import {
  Female_Juniors_Round1_GroupA,
  Female_Juniors_Round1_GroupB,
  Female_Juniors_Round2_GroupA,
  Female_Juniors_Round2_GroupB,
  Female_Juniors_Round3_Final,
} from "@/lib/600MeeladResults";
import { Round1Table, Round2Table } from "@/app/components";

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

      <section className="card-surface card-round1 p-5 text-center md:text-left">
        <h2 className="text-2xl font-bold text-zinc-900 md:text-3xl">
          Round 1 - Round Robin Style
        </h2>
      </section>

      <Round1Table title="Group - A" data={Female_Juniors_Round1_GroupA} />
      <Round1Table title="Group - B" data={Female_Juniors_Round1_GroupB} />

      <section className="card-surface card-round2 p-5 text-center md:text-left">
        <h2 className="text-2xl font-bold text-zinc-900 md:text-3xl">
          Round 2 - Buzzer Style
        </h2>
      </section>

      <Round2Table title="Group - A" data={Female_Juniors_Round2_GroupA} />
      <Round2Table title="Group - B" data={Female_Juniors_Round2_GroupB} />

      <section className="card-surface card-round3 p-5 text-center md:text-left">
        <h2 className="text-2xl font-bold text-zinc-900 md:text-3xl">
          Round 3 (FINAL ROUND) - Buzzer Style
        </h2>
      </section>

      <Round2Table
        title="Final Round — Teams"
        data={Female_Juniors_Round3_Final}
      />
    </div>
  );
}
