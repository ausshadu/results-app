import { Round2Scores, FinalRoundScores } from "@/lib/600MeeladResults/Models";
import Image from "next/image";
import firstIcon from "@/lib/600MeeladResults/icons/first.png";
import secondIcon from "@/lib/600MeeladResults/icons/second.png";
import thirdIcon from "@/lib/600MeeladResults/icons/third.png";
import { Card } from "flowbite-react";

export function Round2Table({
  title,
  data,
}: {
  title: string;
  data: (Round2Scores | FinalRoundScores)[];
}) {
  const columns = [
    "Team Name",
    ...Array.from({ length: 15 }, (_, i) => `Q${i + 1}`),
    "TIE",
    "Total",
    "Remarks",
  ];

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
            className={Number(p) < 0 ? "text-red-600 dark:text-red-400" : ""}
          >
            {p}
          </span>
        ))}
      </span>
    );
  };

  const renderRemarks = (r: Round2Scores | FinalRoundScores) => {
    const rank = (r as FinalRoundScores).win_rank;
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

  return (
    <Card>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl font-semibold">{title}</h2>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Teams: {data.length}
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 text-sm">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              {columns.map((c) => (
                <th
                  key={c}
                  className={`px-3 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300 ${c === "Team Name" ? "text-left" : "text-center"}`}
                >
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
            {data.map((r, i) => (
              <tr key={`${r.team}-${i}`}>
                <td className="px-3 py-2 whitespace-nowrap font-mono text-gray-900 dark:text-gray-100">
                  {r.team}
                </td>
                <td className="px-3 py-2 whitespace-nowrap font-mono text-center text-gray-900 dark:text-gray-100">
                  {renderScore(r.q1)}
                </td>
                <td className="px-3 py-2 whitespace-nowrap font-mono text-center text-gray-900 dark:text-gray-100">
                  {renderScore(r.q2)}
                </td>
                <td className="px-3 py-2 whitespace-nowrap font-mono text-center text-gray-900 dark:text-gray-100">
                  {renderScore(r.q3)}
                </td>
                <td className="px-3 py-2 whitespace-nowrap font-mono text-center text-gray-900 dark:text-gray-100">
                  {renderScore(r.q4)}
                </td>
                <td className="px-3 py-2 whitespace-nowrap font-mono text-center text-gray-900 dark:text-gray-100">
                  {renderScore(r.q5)}
                </td>
                <td className="px-3 py-2 whitespace-nowrap font-mono text-center text-gray-900 dark:text-gray-100">
                  {renderScore(r.q6)}
                </td>
                <td className="px-3 py-2 whitespace-nowrap font-mono text-center text-gray-900 dark:text-gray-100">
                  {renderScore(r.q7)}
                </td>
                <td className="px-3 py-2 whitespace-nowrap font-mono text-center text-gray-900 dark:text-gray-100">
                  {renderScore(r.q8)}
                </td>
                <td className="px-3 py-2 whitespace-nowrap font-mono text-center text-gray-900 dark:text-gray-100">
                  {renderScore(r.q9)}
                </td>
                <td className="px-3 py-2 whitespace-nowrap font-mono text-center text-gray-900 dark:text-gray-100">
                  {renderScore(r.q10)}
                </td>
                <td className="px-3 py-2 whitespace-nowrap font-mono text-center text-gray-900 dark:text-gray-100">
                  {renderScore(r.q11)}
                </td>
                <td className="px-3 py-2 whitespace-nowrap font-mono text-center text-gray-900 dark:text-gray-100">
                  {renderScore(r.q12)}
                </td>
                <td className="px-3 py-2 whitespace-nowrap font-mono text-center text-gray-900 dark:text-gray-100">
                  {renderScore(r.q13)}
                </td>
                <td className="px-3 py-2 whitespace-nowrap font-mono text-center text-gray-900 dark:text-gray-100">
                  {renderScore(r.q14)}
                </td>
                <td className="px-3 py-2 whitespace-nowrap font-mono text-center text-gray-900 dark:text-gray-100">
                  {renderScore(r.q15)}
                </td>
                <td className="px-3 py-2 whitespace-nowrap font-mono text-center text-gray-900 dark:text-gray-100">
                  {renderScore(r.tie)}
                </td>
                <td className="px-3 py-2 whitespace-nowrap font-mono font-bold text-center text-gray-900 dark:text-gray-100">
                  {renderScore(r.total)}
                </td>
                <td className="p-0 text-center">{renderRemarks(r)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
