import { Round2Scores } from "@/lib/600MeeladResults/Models";

export function Round2GroupTable({
  title,
  data,
}: {
  title: string;
  data: Round2Scores[];
}) {
  const columns = [
    "Team Name",
    ...Array.from({ length: 15 }, (_, i) => `Q${i + 1}`),
    "TIE",
    "Total",
    "Remarks",
  ];

  return (
    <section className="card-surface p-5">
      <div className="mb-3 flex items-center justify-between gap-3">
        <h2 className="text-xl font-semibold text-zinc-900">{title}</h2>
        <span className="text-xs text-zinc-500">Teams: {data.length}</span>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm border border-zinc-200">
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
