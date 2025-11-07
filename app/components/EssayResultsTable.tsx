"use client";

import { Result } from "@/lib/600MeeladResults";
import { Fragment, useState } from "react";
import { Button, Badge, Card } from "flowbite-react";

export function EssayResultsTable({ results }: { results: Result[] }) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggle = (id: string) =>
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));

  const formatMarks = (v: string | number | undefined) =>
    v === undefined || v === null || v === "" ? "-" : v;

  return (
    <Card>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl font-semibold">Results</h2>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Total: {results?.length ?? 0}
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Sl. No.</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Reg No</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Topic</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Marks</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">View</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">PDF</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Remarks</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
            {results.map((r, idx) => (
              <Fragment key={r.reg_number}>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">{idx + 1}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900 dark:text-gray-100">{r.reg_number}</td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-500 dark:text-gray-400">Topic #{r.topic_number}</span>
                      <span>{r.topic_text}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">{r.full_name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">{formatMarks(r.total_marks)}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Button
                      color="light"
                      size="xs"
                      onClick={() => toggle(r.reg_number)}
                      pill
                    >
                      {expanded[r.reg_number] ? "View less" : "View more"}
                    </Button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Button
                      color="primary"
                      size="xs"
                      href={r.pdf_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      as="a"
                      pill
                    >
                      View PDF
                    </Button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap"></td>
                </tr>

                {expanded[r.reg_number] && (
                  <tr>
                    <td colSpan={8} className="px-6 py-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <Badge color="success" className="justify-between p-2">
                          Qur'an References: {formatMarks(r.quranic_references)} marks
                        </Badge>
                        <Badge color="success" className="justify-between p-2">
                          Ahadees References: {formatMarks(r.ahdees_references)} marks
                        </Badge>
                        <Badge color="success" className="justify-between p-2">
                          Naqliyath References: {formatMarks(r.naqliyath_references)} marks
                        </Badge>
                        <Badge color="success" className="justify-between p-2">
                          Other References: {formatMarks(r.other_references)} marks
                        </Badge>
                        <Badge color="success" className="justify-between p-2">
                          Paragraph Marks: {formatMarks(r.paragraph_marks)} marks
                        </Badge>
                        <Badge color="success" className="justify-between p-2">
                          Good Handwriting: {formatMarks(r.handwriting_marks)} marks
                        </Badge>
                      </div>
                      <div className="mt-4 flex justify-end">
                        <Badge color="info" size="xl" className="p-2">
                          Total: {formatMarks(r.total_marks)} marks
                        </Badge>
                      </div>
                    </td>
                  </tr>
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
