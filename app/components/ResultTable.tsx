import { Result } from "@/lib/data";
import Link from "next/link";

export function ResultTable({ results }: { results: Result[] }) {
  return (
    <section className="card-surface p-5">
      <div className="mb-3 flex items-center justify-between gap-3">
        <h2 className="text-xl font-semibold text-zinc-900">Results</h2>
        <span className="text-xs text-zinc-500">
          Total: {results?.length ?? 0}
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="text-left text-zinc-600">
            <tr className="border-b border-zinc-200">
              <th className="py-2 pr-3">Reg No</th>
              <th className="py-2 pr-3">Topic</th>
              <th className="py-2 pr-3">Name</th>
              <th className="py-2 pr-3">Marks</th>
              <th className="py-2 pr-3">PDF</th>
            </tr>
          </thead>
          <tbody className="text-zinc-800">
            {results.map((r) => (
              <tr key={r.reg_number} className="border-b border-zinc-100">
                <td className="py-2 pr-3 font-mono text-[13px]">
                  {r.reg_number}
                </td>
                <td className="py-2 pr-3">
                  <div className="flex flex-col">
                    <span className="text-[13px] text-zinc-500">
                      Topic #{r.topic_number}
                    </span>
                    <span className="text-[13px]">{r.topic_text}</span>
                  </div>
                </td>
                <td className="py-2 pr-3">{r.full_name}</td>
                <td className="py-2 pr-3">{r.total_marks}</td>
                <td className="py-2 pr-3">
                  <Link
                    href={r.pdf_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta inline-flex items-center rounded-full px-3 py-1 text-xs font-medium"
                  >
                    View PDF
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
