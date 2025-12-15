"use client";

import { Result } from "@/lib/600MeeladResults";
import { useMemo, useState } from "react";
import { Card, TextInput } from "flowbite-react";
import Image from "next/image";

import firstIcon from "@/lib/600MeeladResults/icons/first.png";
import secondIcon from "@/lib/600MeeladResults/icons/second.png";
import thirdIcon from "@/lib/600MeeladResults/icons/third.png";

type Row = Result & { category?: "Male" | "Female" | string };
type SortKey =
  | "reg_number"
  | "full_name"
  | "total_marks"
  | "topic"
  | "category";
type SortState = { key: SortKey; dir: "asc" | "desc" };
type CompareVal = string | number;

function normalizeNumber(v: string | number | undefined | null): number | null {
  if (v === undefined || v === null || v === "") return null;
  const n = Number(v);
  return Number.isFinite(n) ? n : null;
}

type SortHeaderProps = {
  label: string;
  sortKey: SortKey;
  current: SortState;
  onToggle: (key: SortKey) => void;
  enabled?: boolean;
};

function SortHeader({
  label,
  sortKey,
  current,
  onToggle,
  enabled = true,
}: SortHeaderProps) {
  return (
    <button
      type="button"
      onClick={enabled ? () => onToggle(sortKey) : undefined}
      className={`flex items-center gap-1 ${enabled ? "hover:underline" : ""}`}
    >
      <span>{label}</span>
      {current.key === sortKey && (
        <span aria-hidden="true">{current.dir === "asc" ? "↑" : "↓"}</span>
      )}
    </button>
  );
}

const renderRemarks = (r: Result) => {
  const rank = (r as Result).win_rank;
  if (rank === 1) {
    return (
      <span className="inline-flex flex-col items-center gap-1">
        <Image src={firstIcon} alt="First" width={50} height={50} />
        <span className="text-xs font-bold">FIRST</span>
      </span>
    );
  }
  if (rank === 2) {
    return (
      <span className="inline-flex flex-col items-center gap-1">
        <Image src={secondIcon} alt="Second" width={50} height={50} />
        <span className="text-xs font-bold">SECOND</span>
      </span>
    );
  }
  if (rank === 3) {
    return (
      <span className="inline-flex flex-col items-center gap-1">
        <Image src={thirdIcon} alt="Third" width={50} height={50} />
        <span className="text-xs font-bold">THIRD</span>
      </span>
    );
  }
  return r.remarks;
};

export function EssayResultsTable({ results }: { results: Row[] }) {
  // Default sort by Reg No ascending
  const [sort, setSort] = useState<SortState>({
    key: "reg_number",
    dir: "asc",
  });
  const [query, setQuery] = useState<string>("");

  const showCategory = useMemo(
    () => (results ?? []).some((r: Row) => typeof r.category === "string"),
    [results],
  );

  const formatted = useMemo(() => {
    const data = [...(results ?? [])];

    const q = query.trim().toLowerCase();
    const filtered = q
      ? data.filter((r) => {
          const name = (r.full_name ?? "").toLowerCase();
          const topicText = (r.topic_text ?? "").toLowerCase();
          const topicNum = String(r.topic_number ?? "");
          return (
            name.includes(q) || topicText.includes(q) || topicNum.includes(q)
          );
        })
      : data;

    const getVal = (r: Row, key: SortKey): CompareVal => {
      switch (key) {
        case "reg_number":
          return r.reg_number ?? "";
        case "full_name":
          return r.full_name ?? "";
        case "total_marks": {
          const n = normalizeNumber(r.total_marks);
          return n === null ? Number.NEGATIVE_INFINITY : n;
        }
        case "category":
          return r.category ?? "";
        case "topic":
          return `${String(r.topic_number ?? "").padStart(3, "0")}|${
            r.topic_text ?? ""
          }`;
      }
    };

    const compare = (a: Row, b: Row) => {
      const dirFactor = sort.dir === "asc" ? 1 : -1;
      const va = getVal(a, sort.key);
      const vb = getVal(b, sort.key);
      if (typeof va === "number" && typeof vb === "number") {
        return (va - vb) * dirFactor;
      }
      return String(va).localeCompare(String(vb)) * dirFactor;
    };

    return filtered.sort(compare);
  }, [results, sort, query]);

  const toggleSort = (key: SortKey) => {
    setSort((prev) =>
      prev.key === key
        ? { key, dir: prev.dir === "asc" ? "desc" : "asc" }
        : { key, dir: "asc" },
    );
  };

  const formatMarks = (v: string | number | undefined) =>
    v === undefined || v === null || v === "" ? "-" : v;

  return (
    <Card>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl font-semibold">Results</h2>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Total: {formatted?.length ?? 0}
        </span>
      </div>

      <div className="mb-3">
        <TextInput
          placeholder="Search by name or topic..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">
                Sl. No.
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">
                <SortHeader
                  label="REG NO"
                  sortKey="reg_number"
                  current={sort}
                  onToggle={toggleSort}
                />
              </th>
              {showCategory && (
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">
                  <SortHeader
                    label="CATEGORY"
                    sortKey="category"
                    current={sort}
                    onToggle={toggleSort}
                  />
                </th>
              )}
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">
                <SortHeader
                  label="TOPIC"
                  sortKey="topic"
                  current={sort}
                  onToggle={toggleSort}
                />
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">
                <SortHeader
                  label="NAME"
                  sortKey="full_name"
                  current={sort}
                  onToggle={toggleSort}
                />
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">
                <SortHeader
                  label="MARKS"
                  sortKey="total_marks"
                  current={sort}
                  onToggle={toggleSort}
                />
              </th>
              {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">
                View Essay
              </th> */}
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">
                Remarks
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
            {formatted.map((r, idx) => (
              <tr key={r.reg_number}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                  {idx + 1}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900 dark:text-gray-100">
                  {r.reg_number}
                </td>
                {showCategory && (
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                    {r.category ?? "-"}
                  </td>
                )}
                <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Topic #{r.topic_number}
                    </span>
                    <span>{r.topic_text}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                  {r.full_name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap font-mono text-sm text-gray-900 dark:text-gray-100">
                  {formatMarks(r.total_marks)}
                </td>
                {/* <td className="px-6 py-4 whitespace-nowrap">
                  <Link
                    href={r.pdf_link}
                    className="link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View PDF
                  </Link>
                </td> */}
                <td className="p-0 text-center">{renderRemarks(r)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
