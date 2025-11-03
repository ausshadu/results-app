"use client";

import { Result } from "@/lib/600MeeladResults";
import Link from "next/link";
import { Fragment, useState } from "react";

export function EssayResultsTable({ results }: { results: Result[] }) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggle = (id: string) =>
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));

  const formatMarks = (v: string | number | undefined) =>
    v === undefined || v === null || v === "" ? "-" : v;

  return (
    <section className="card-surface p-5">
      <div className="mb-3 flex items-center justify-between gap-3">
        <h2 className="text-xl font-semibold text-zinc-900">Results</h2>
        <span className="text-xs text-zinc-500">
          Total: {results?.length ?? 0}
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm border border-zinc-300 border-collapse text-center">
          <thead className="text-zinc-600 bg-zinc-50">
            <tr className="border-b border-zinc-300">
              <th className="px-3 py-2 border border-zinc-300">Sl. No.</th>
              <th className="px-3 py-2 border border-zinc-300">Reg No</th>
              <th className="px-3 py-2 border border-zinc-300">Topic</th>
              <th className="px-3 py-2 border border-zinc-300">Name</th>
              <th className="px-3 py-2 border border-zinc-300">Marks</th>
              <th className="px-3 py-2 border border-zinc-300">View</th>
              <th className="px-3 py-2 border border-zinc-300">PDF</th>
              <th className="px-3 py-2 border border-zinc-300">Remarks</th>
            </tr>
          </thead>
          <tbody className="text-zinc-800">
            {results.map((r, idx) => (
              <Fragment key={r.reg_number}>
                <tr key={r.reg_number} className="odd:bg-white even:bg-zinc-50">
                  <td className="px-3 py-2 border border-zinc-300">
                    {idx + 1}
                  </td>
                  <td className="px-3 py-2 border border-zinc-300 font-mono text-[13px]">
                    {r.reg_number}
                  </td>
                  <td className="px-3 py-2 border border-zinc-300">
                    <div className="flex flex-col">
                      <span className="text-[13px] text-zinc-500 text-left">
                        Topic #{r.topic_number}
                      </span>
                      <span className="text-[13px] text-left">
                        {r.topic_text}
                      </span>
                    </div>
                  </td>
                  <td className="px-3 py-2 border border-zinc-300">
                    {r.full_name}
                  </td>
                  <td className="px-3 py-2 border border-zinc-300">
                    {formatMarks(r.total_marks)}
                  </td>
                  <td className="px-3 py-2 border border-zinc-300">
                    <button
                      type="button"
                      onClick={() => toggle(r.reg_number)}
                      className="cta participantCta inline-flex items-center rounded-full px-3 py-1 text-xs font-medium whitespace-nowrap"
                    >
                      {expanded[r.reg_number] ? "View less" : "View more"}
                    </button>
                  </td>
                  <td className="px-3 py-2 border border-zinc-300">
                    <Link
                      href={r.pdf_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta inline-flex items-center rounded-full px-3 py-1 text-xs font-medium whitespace-nowrap"
                    >
                      View PDF
                    </Link>
                  </td>
                  <td className="px-3 py-2 border border-zinc-300"></td>
                </tr>

                {expanded[r.reg_number] && (
                  <tr key={`${r.reg_number}-details`} className="bg-zinc-50">
                    <td
                      className="px-4 py-3 border border-zinc-300 text-left"
                      colSpan={8}
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                        <div className="flex items-center justify-between rounded border border-zinc-200 bg-zinc-50 px-3 py-2">
                          <span className="text-zinc-600">
                            Qur'an References
                          </span>
                          <span className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-800 px-2 py-0.5 text-xs font-semibold">
                            {formatMarks(r.quranic_references)} marks
                          </span>
                        </div>
                        <div className="flex items-center justify-between rounded border border-zinc-200 bg-zinc-50 px-3 py-2">
                          <span className="text-zinc-600">
                            Ahadees References
                          </span>
                          <span className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-800 px-2 py-0.5 text-xs font-semibold">
                            {formatMarks(r.ahdees_references)} marks
                          </span>
                        </div>
                        <div className="flex items-center justify-between rounded border border-zinc-200 bg-zinc-50 px-3 py-2">
                          <span className="text-zinc-600">
                            Naqliyath References
                          </span>
                          <span className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-800 px-2 py-0.5 text-xs font-semibold">
                            {formatMarks(r.naqliyath_references)} marks
                          </span>
                        </div>
                        <div className="flex items-center justify-between rounded border border-zinc-200 bg-zinc-50 px-3 py-2">
                          <span className="text-zinc-600">
                            Other References
                          </span>
                          <span className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-800 px-2 py-0.5 text-xs font-semibold">
                            {formatMarks(r.other_references)} marks
                          </span>
                        </div>
                        <div className="flex items-center justify-between rounded border border-zinc-200 bg-zinc-50 px-3 py-2">
                          <span className="text-zinc-600">Paragraph Marks</span>
                          <span className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-800 px-2 py-0.5 text-xs font-semibold">
                            {formatMarks(r.paragraph_marks)} marks
                          </span>
                        </div>
                        <div className="flex items-center justify-between rounded border border-zinc-200 bg-zinc-50 px-3 py-2">
                          <span className="text-zinc-600">
                            Good Handwriting
                          </span>
                          <span className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-800 px-2 py-0.5 text-xs font-semibold">
                            {formatMarks(r.handwriting_marks)} marks
                          </span>
                        </div>
                      </div>

                      <div className="mt-4 border-t pt-3 text-right">
                        <span className="text-sm text-zinc-500 mr-2">
                          Total:
                        </span>
                        <span className="text-2xl font-extrabold text-zinc-900">
                          {formatMarks(r.total_marks)}
                        </span>
                        <span className="ml-1 text-sm text-zinc-500">
                          marks
                        </span>
                      </div>
                    </td>
                  </tr>
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
