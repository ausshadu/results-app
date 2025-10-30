import { Round1Scores } from "@/lib/600MeeladResults/Models";

export function Round1Table({
  title,
  data,
}: {
  title: string;
  data: Round1Scores[];
}) {
  const renderScore = (value: string | number | null | undefined) => {
    const parts = String(value ?? "")
      .trim()
      .split(/\s+/)
      .filter(Boolean);
    return (
      <span className="inline-flex items-center justify-center gap-1">
        {parts.map((p, idx) => (
          <span
            key={idx}
            className={Number(p) < 0 ? "text-red-600" : undefined}
          >
            {p}
          </span>
        ))}
      </span>
    );
  };

  return (
    <section className="card-surface p-5">
      <div className="mb-3 flex items-center justify-between gap-3">
        <h2 className="text-xl font-semibold text-zinc-900">{title}</h2>
        <span className="text-xs text-zinc-500">Teams: {data.length}</span>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm border border-zinc-300 border-collapse text-center">
          <thead className="text-zinc-600 bg-zinc-50">
            <tr className="border-b border-zinc-300">
              <th className="px-3 py-2 border border-zinc-300">Team Name</th>
              <th className="px-3 py-2 border border-zinc-300">Q1</th>
              <th className="px-3 py-2 border border-zinc-300">Q2</th>
              <th className="px-3 py-2 border border-zinc-300">Q3</th>
              <th className="px-3 py-2 border border-zinc-300">TIE</th>
              <th className="px-3 py-2 border border-zinc-300">Total</th>
              <th className="px-3 py-2 border border-zinc-300 text-nowrap">
                Remarks
              </th>
            </tr>
          </thead>
          <tbody className="text-zinc-800">
            {data.map((r, i) => (
              <tr
                key={`${r.team}-${i}`}
                className="odd:bg-white even:bg-zinc-50"
              >
                <td className="px-3 py-2 border border-zinc-300 font-mono">
                  {r.team}
                </td>
                <td className="px-3 py-2 border border-zinc-300 font-mono">
                  {renderScore(r.q1)}
                </td>
                <td className="px-3 py-2 border border-zinc-300 font-mono">
                  {renderScore(r.q2)}
                </td>
                <td className="px-3 py-2 border border-zinc-300 font-mono">
                  {renderScore(r.q3)}
                </td>
                <td className="px-3 py-2 border border-zinc-300 font-mono">
                  {renderScore(r.tie)}
                </td>
                <td className="px-3 py-2 border border-zinc-300 font-mono font-bold">
                  {renderScore(r.total)}
                </td>
                <td className="px-3 py-2 border border-zinc-300 text-nowrap">
                  {r.remarks}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
