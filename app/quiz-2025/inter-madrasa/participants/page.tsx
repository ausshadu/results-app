import Link from "next/link";
import { InterMadrasaParticipants } from "@/lib/600MeeladResults/Quiz2025/InterMadrasa";
import { Card } from "flowbite-react";

const metadata = {
  title: "Inter Madrasa Participants",
  description: "Participants list for Inter Madrasa category in Quiz 2025.",
};

export default function Page() {
  const participants = Object.values(InterMadrasaParticipants);

  return (
    <div className="flex flex-col gap-6">
      <Card>
        <h1 className="text-2xl font-bold md:text-3xl">
          Inter Madrasa — Participants
        </h1>
        <p className="text-sm">
          List of all participating Madrasas and their participants.
        </p>
        <div className="flex flex-wrap gap-2">
          <Link href="/quiz-2025" className="text-blue-600 hover:underline">
            ← Back to Categories
          </Link>
          <Link href="/quiz-2025/inter-madrasa/results" className="text-blue-600 hover:underline">
            View Results →
          </Link>
        </div>
      </Card>

      <Card>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl font-semibold">
            Participants — Inter Madrasa
          </h2>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Madrasas: {participants.length}
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 text-sm">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr className="text-left">
                <th className="px-3 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Sl. No.</th>
                <th className="px-3 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Group</th>
                <th className="px-3 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Madrasa Name</th>
                <th className="px-3 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Participant 1</th>
                <th className="px-3 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Participant 2</th>
                <th className="px-3 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Participant 3</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
              {participants.map((participant, index) => (
                <tr key={`${participant.name}-${index}`} className="align-top">
                  <td className="px-3 py-2 whitespace-nowrap font-mono text-gray-900 dark:text-gray-100">
                    {String(index + 1)}
                  </td>
                  <td className="px-3 py-2 text-gray-900 dark:text-gray-100">
                    {participant.group}
                  </td>
                  <td className="px-3 py-2 text-gray-900 dark:text-gray-100">
                    {participant.name}
                  </td>
                  <td className="px-3 py-2 text-gray-900 dark:text-gray-100">
                    {participant.participants[0]}
                  </td>
                  <td className="px-3 py-2 text-gray-900 dark:text-gray-100">
                    {participant.participants[1]}
                  </td>
                  <td className="px-3 py-2 text-gray-900 dark:text-gray-100">
                    {participant.participants[2]}
                  </td>
                </tr>
              ))}
              {participants.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-3 py-6 text-center text-gray-500 dark:text-gray-400">
                    No participants found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
