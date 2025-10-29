import { Round1Scores } from "@/lib/600MeeladResults/Models";

export function GroupTable({
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
