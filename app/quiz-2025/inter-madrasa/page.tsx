import Link from "next/link";
import {
  Madrasa_Round1_GroupA,
  Madrasa_Round1_GroupB,
  Madrasa_Round2_GroupA,
  Madrasa_Round2_GroupB,
  Madrasa_Round3_Final,
} from "@/lib/600MeeladResults";
import { Round1Scores, Round2Scores } from "@/lib/600MeeladResults/Models";

export const metadata = {
  title: "Quiz 2025 — Inter Madrasa",
  description: "Results list for Inter Madrasa category in Quiz 2025.",
};

function GroupTable({
  title,
  data,
  bgClass = "",
}: {
  title: string;
  data: Round1Scores[];
  bgClass?: string;
}) {
  return (
    <section className={`card-surface p-5 ${bgClass}`}>
      <div className="mb-3 flex items-center justify-between gap-3">
        <h2 className="text-xl font-semibold text-zinc-900">{title}</h2>
        <span className="text-xs text-zinc-500">Teams: {data.length}</span>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="text-left text-zinc-600">
            <tr className="border-b border-zinc-200">
              <th className="py-2 pr-3">Team Name</th>
              <th className="py-2 pr-3">Q1</th>
              <th className="py-2 pr-3">Q2</th>
              <th className="py-2 pr-3">Q3</th>
              <th className="py-2 pr-3">TIE</th>
              <th className="py-2 pr-3">Total</th>
              <th className="py-2 pr-3">Remarks</th>
            </tr>
          </thead>
          <tbody className="text-zinc-800">
            {data.map((r, i) => (
              <tr key={`${r.team}-${i}`} className="border-b border-zinc-100">
                <td className="py-2 pr-3">{r.team}</td>
                <td className="py-2 pr-3">{r.q1}</td>
                <td className="py-2 pr-3">{r.q2}</td>
                <td className="py-2 pr-3">{r.q3}</td>
                <td className="py-2 pr-3">{r.tie}</td>
                <td className="py-2 pr-3">{r.total}</td>
                <td className="py-2 pr-3">{r.remarks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function Round2GroupTable({
  title,
  data,
  bgClass = "",
}: {
  title: string;
  data: Round2Scores[];
  bgClass?: string;
}) {
  const columns = [
    "Team Name",
    ...Array.from({ length: 15 }, (_, i) => `Q${i + 1}`),
    "TIE",
    "Total",
    "Remarks",
  ];

  return (
    <section className={`card-surface p-5 ${bgClass}`}>
      <div className="mb-3 flex items-center justify-between gap-3">
        <h2 className="text-xl font-semibold text-zinc-900">{title}</h2>
        <span className="text-xs text-zinc-500">Teams: {data.length}</span>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="text-left text-zinc-600">
            <tr className="border-b border-zinc-200">
              {columns.map((c) => (
                <th key={c} className="py-2 pr-3">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-zinc-800">
            {data.map((r, i) => (
              <tr key={`${r.team}-${i}`} className="border-b border-zinc-100">
                <td className="py-2 pr-3">{r.team}</td>
                <td className="py-2 pr-3">{r.q1}</td>
                <td className="py-2 pr-3">{r.q2}</td>
                <td className="py-2 pr-3">{r.q3}</td>
                <td className="py-2 pr-3">{r.q4}</td>
                <td className="py-2 pr-3">{r.q5}</td>
                <td className="py-2 pr-3">{r.q6}</td>
                <td className="py-2 pr-3">{r.q7}</td>
                <td className="py-2 pr-3">{r.q8}</td>
                <td className="py-2 pr-3">{r.q9}</td>
                <td className="py-2 pr-3">{r.q10}</td>
                <td className="py-2 pr-3">{r.q11}</td>
                <td className="py-2 pr-3">{r.q12}</td>
                <td className="py-2 pr-3">{r.q13}</td>
                <td className="py-2 pr-3">{r.q14}</td>
                <td className="py-2 pr-3">{r.q15}</td>
                <td className="py-2 pr-3">{r.tie}</td>
                <td className="py-2 pr-3">{r.total}</td>
                <td className="py-2 pr-3">{r.remarks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6">
      <header className="card-surface p-5 text-center md:text-left">
        <h1 className="text-2xl font-bold text-zinc-900 md:text-3xl">
          Inter Madrasa — Quiz 2025
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

      <GroupTable
        title="Group - A"
        data={Madrasa_Round1_GroupA}
        bgClass="card-round1"
      />
      <GroupTable
        title="Group - B"
        data={Madrasa_Round1_GroupB}
        bgClass="card-round1"
      />

      <section className="card-surface card-round2 p-5 text-center md:text-left">
        <h2 className="text-2xl font-bold text-zinc-900 md:text-3xl">
          Round 2 - Buzzer Style
        </h2>
      </section>

      <Round2GroupTable
        title="Group - A"
        data={Madrasa_Round2_GroupA}
        bgClass="card-round2"
      />
      <Round2GroupTable
        title="Group - B"
        data={Madrasa_Round2_GroupB}
        bgClass="card-round2"
      />

      <section className="card-surface card-round3 p-5 text-center md:text-left">
        <h2 className="text-2xl font-bold text-zinc-900 md:text-3xl">
          Round 3 (FINAL ROUND) - Buzzer Style
        </h2>
      </section>

      <Round2GroupTable
        title="Final Round — Teams"
        data={Madrasa_Round3_Final}
        bgClass="card-round3"
      />
    </div>
  );
}
