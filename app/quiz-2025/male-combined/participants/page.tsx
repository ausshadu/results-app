import Link from "next/link";
import { MaleCombinedParticipants } from "@/lib/600MeeladResults/Quiz2025/MaleCombined";

export const metadata = {
  title: "Male • Combined — Participants",
  description: "Participants list for Male • Combined category in Quiz 2025.",
};

export default function Page() {
  const participants = Object.values(MaleCombinedParticipants);

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6">
      <header className="card-surface p-5 text-center md:text-left">
        <h1 className="text-2xl font-bold text-zinc-900 md:text-3xl">
          Male • Combined — Participants
        </h1>
        <p className="mt-2 text-sm text-zinc-700">
          List of all teams and their participants.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <Link
            href="/quiz-2025"
            className="cta inline-flex rounded-full px-4 py-2 text-sm font-medium"
          >
            ← Back to Categories
          </Link>
          <Link
            href="/quiz-2025/male-combined/results"
            className="cta inline-flex rounded-full px-4 py-2 text-sm font-medium"
          >
            View Results →
          </Link>
        </div>
      </header>

      <section className="card-surface p-5">
        <div className="mb-3 flex items-center justify-between gap-3">
          <h2 className="text-xl font-semibold text-zinc-900">
            Participants — Male • Combined
          </h2>
          <span className="text-xs text-zinc-500">
            Teams: {participants.length}
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border border-zinc-300 border-collapse">
            <thead className="text-zinc-600 bg-zinc-50">
              <tr className="border-b border-zinc-300 text-left">
                <th className="px-3 py-2 border border-zinc-300">Sl. No.</th>
                <th className="px-3 py-2 border border-zinc-300">Group</th>
                <th className="px-3 py-2 border border-zinc-300">Team Name</th>
                <th className="px-3 py-2 border border-zinc-300">
                  Participant 1
                </th>
                <th className="px-3 py-2 border border-zinc-300">
                  Participant 2
                </th>
                <th className="px-3 py-2 border border-zinc-300">
                  Participant 3
                </th>
              </tr>
            </thead>
            <tbody className="text-zinc-800">
              {participants.map((participant, index) => (
                <tr
                  key={`${participant.name}-${index}`}
                  className="odd:bg-white even:bg-zinc-50 align-top"
                >
                  <td className="px-3 py-2 border border-zinc-300 font-mono">
                    {String(index + 1)}
                  </td>
                  <td className="px-3 py-2 border border-zinc-300">
                    {participant.group}
                  </td>
                  <td className="px-3 py-2 border border-zinc-300">
                    {participant.name}
                  </td>
                  <td className="px-3 py-2 border border-zinc-300">
                    {participant.participants[0]}
                  </td>
                  <td className="px-3 py-2 border border-zinc-300">
                    {participant.participants[1]}
                  </td>
                  <td className="px-3 py-2 border border-zinc-300">
                    {participant.participants[2]}
                  </td>
                </tr>
              ))}
              {participants.length === 0 ? (
                <tr>
                  <td
                    colSpan={6}
                    className="px-3 py-6 text-center text-zinc-500"
                  >
                    No participants found.
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
