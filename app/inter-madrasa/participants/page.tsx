import Link from "next/link";
import { promises as fs } from "fs";
import path from "path";

export const metadata = {
  title: "Inter Madrasa Participants",
  description:
    "Participants list for Inter Madrasa category in Quiz 2025.",
};

type ParticipantRow = {
  slNo: string;
  group: string;
  madrasaName: string;
  participant1: string;
  participant2: string;
  participant3: string;
};

function parseCSV(csv: string): ParticipantRow[] {
  const lines = csv
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter((l) => l.length > 0);

  if (lines.length === 0) return [];

  // Remove header
  const [, ...rows] = lines;

  const splitLine = (line: string): string[] => {
    // Basic CSV split for non-quoted data (sufficient for provided file)
    // If quotes are added later, replace with a quote-aware parser.
    return line.split(",").map((s) => s.trim());
  };

  return rows.map((line) => {
    const cols = splitLine(line);
    const [
      slNo = "",
      group = "",
      madrasaName = "",
      participant1 = "",
      participant2 = "",
      participant3 = "",
    ] = cols;

    return {
      slNo,
      group,
      madrasaName,
      participant1,
      participant2,
      participant3,
    };
  });
}

async function getParticipants(): Promise<ParticipantRow[]> {
  const csvPath = path.join(
    process.cwd(),
    "lib",
    "600MeeladResults",
    "Quiz2025",
    "madrasa_names.csv"
  );
  const content = await fs.readFile(csvPath, "utf-8");
  return parseCSV(content);
}

export default async function Page() {
  const participants = await getParticipants();

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6">
      <header className="card-surface p-5 text-center md:text-left">
        <h1 className="text-2xl font-bold text-zinc-900 md:text-3xl">
          Inter Madrasa — Participants
        </h1>
        <p className="mt-2 text-sm text-zinc-700">
          List of all participating Madrasas and their participants.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <Link
            href="/quiz-2025"
            className="cta inline-flex rounded-full px-4 py-2 text-sm font-medium"
          >
            ← Back to Categories
          </Link>
          <Link
            href="/inter-madrasa/results"
            className="cta inline-flex rounded-full px-4 py-2 text-sm font-medium"
          >
            View Results →
          </Link>
        </div>
      </header>

      <section className="card-surface p-5">
        <div className="mb-3 flex items-center justify-between gap-3">
          <h2 className="text-xl font-semibold text-zinc-900">
            Participants — Inter Madrasa
          </h2>
          <span className="text-xs text-zinc-500">
            Madrasas: {participants.length}
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border border-zinc-300 border-collapse">
            <thead className="text-zinc-600 bg-zinc-50">
              <tr className="border-b border-zinc-300 text-left">
                <th className="px-3 py-2 border border-zinc-300">Sl. No.</th>
                <th className="px-3 py-2 border border-zinc-300">Group</th>
                <th className="px-3 py-2 border border-zinc-300">
                  Madrasa Name
                </th>
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
              {participants.map((p, i) => (
                <tr
                  key={`${p.slNo}-${i}`}
                  className="odd:bg-white even:bg-zinc-50 align-top"
                >
                  <td className="px-3 py-2 border border-zinc-300 font-mono">
                    {p.slNo}
                  </td>
                  <td className="px-3 py-2 border border-zinc-300">{p.group}</td>
                  <td className="px-3 py-2 border border-zinc-300">
                    {p.madrasaName}
                  </td>
                  <td className="px-3 py-2 border border-zinc-300">
                    {p.participant1}
                  </td>
                  <td className="px-3 py-2 border border-zinc-300">
                    {p.participant2}
                  </td>
                  <td className="px-3 py-2 border border-zinc-300">
                    {p.participant3}
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
