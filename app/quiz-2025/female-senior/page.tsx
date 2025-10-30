import Link from "next/link";
import {
  Female_Seniors_Round1_GroupA,
  Female_Seniors_Round2_GroupA,
  Female_Seniors_Round3_Final,
} from "@/lib/600MeeladResults";
import { GroupTable } from "@/app/components/GroupTable";
import { Round2GroupTable } from "@/app/components/Round2GroupTable";

export const metadata = {
  title: "Quiz 2025 — Female • Senior",
  description:
    "Results list for Female • Senior (Age 36 to 75) category in Quiz 2025.",
};

export default function Page() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6">
      <header className="card-surface p-5 text-center md:text-left">
        <h1 className="text-2xl font-bold text-zinc-900 md:text-3xl">
          Female • Senior — Quiz 2025
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

      <GroupTable title="Group - A" data={Female_Seniors_Round1_GroupA} />

      <section className="card-surface card-round2 p-5 text-center md:text-left">
        <h2 className="text-2xl font-bold text-zinc-900 md:text-3xl">
          Round 2 - Buzzer Style
        </h2>
      </section>

      <Round2GroupTable title="Group - A" data={Female_Seniors_Round2_GroupA} />

      <section className="card-surface card-round3 p-5 text-center md:text-left">
        <h2 className="text-2xl font-bold text-zinc-900 md:text-3xl">
          Round 3 (FINAL ROUND) - Buzzer Style
        </h2>
      </section>

      <Round2GroupTable
        title="Final Round — Teams"
        data={Female_Seniors_Round3_Final}
      />
    </div>
  );
}
