"use client";

import Link from "next/link";
import Image from "next/image";
import { Card } from "flowbite-react";
import { POINTS_TABLE } from "@/lib/600MeeladResults/Cricket/stats";
import type { Team } from "@/lib/600MeeladResults/Models";
import { useMemo, useState } from "react";

function TeamCell({ team }: { team: Team }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative h-[100px] w-[100px] md:h-[140px] md:w-[140px]">
        {team.jerseyImage ? (
          <Image
            src={team.jerseyImage}
            alt={`${team.name} jersey`}
            fill
            sizes="(min-width: 768px) 140px, 100px"
            className="object-contain"
          />
        ) : (
          <div className="h-full w-full rounded bg-gray-200 dark:bg-gray-700" />
        )}
      </div>
      <Link
        href={`/cricket-2025/teams/${team.slug}`}
        className="link font-medium"
      >
        {team.name}
      </Link>
    </div>
  );
}

type SortKey = "index" | "Team" | "played" | "win" | "lost" | "points" | "nrr";
type SortDir = "asc" | "desc";

function SortHeader({
  label,
  onClick,
  active,
  dir,
}: {
  label: string;
  onClick: () => void;
  active: boolean;
  dir: SortDir;
}) {
  return (
    <th
      className="px-4 py-3 text-xs font-semibold uppercase tracking-wider cursor-pointer select-none"
      onClick={onClick}
      title="Sort"
    >
      <span className="inline-flex items-center gap-1">
        {label}
        <span className="text-[10px] opacity-60">
          {active ? (dir === "asc" ? "▲" : "▼") : "↕"}
        </span>
      </span>
    </th>
  );
}

export default function PointsTablePage() {
  const baseRows = useMemo(
    () =>
      POINTS_TABLE.map((r, i) => ({
        ...r,
        index: i, // preserve original order
      })),
    [],
  );

  const [sortKey, setSortKey] = useState<SortKey>("index");
  const [sortDir, setSortDir] = useState<SortDir>("asc");

  function toggleSort(key: SortKey) {
    setSortKey((prevKey) => {
      if (prevKey === key) {
        setSortDir((prev) => (prev === "asc" ? "desc" : "asc"));
        return prevKey;
      }
      setSortDir("asc");
      return key;
    });
  }

  const rows = useMemo(() => {
    const copy = [...baseRows];
    copy.sort((a, b) => {
      const dirMul = sortDir === "asc" ? 1 : -1;
      const av =
        sortKey === "index"
          ? a.index
          : sortKey === "Team"
            ? a.team.name
            : sortKey === "played"
              ? a.played
              : sortKey === "win"
                ? a.win
                : sortKey === "lost"
                  ? a.lost
                  : sortKey === "points"
                    ? a.points
                    : a.nrr;
      const bv =
        sortKey === "index"
          ? b.index
          : sortKey === "Team"
            ? b.team.name
            : sortKey === "played"
              ? b.played
              : sortKey === "win"
                ? b.win
                : sortKey === "lost"
                  ? b.lost
                  : sortKey === "points"
                    ? b.points
                    : b.nrr;

      if (typeof av === "number" && typeof bv === "number")
        return (av - bv) * dirMul;
      return String(av).localeCompare(String(bv)) * dirMul;
    });
    return copy;
  }, [baseRows, sortKey, sortDir]);

  return (
    <div className="flex flex-col gap-6">
      <Card>
        <h1 className="text-2xl font-bold md:text-3xl">
          Points Table — Cricket 2025
        </h1>
        <p className="text-sm">
          Teams standings with matches played, wins, losses, points and NRR.
        </p>
        <Link href="/cricket-2025" className="link">
          ← Back to Cricket 2025
        </Link>
      </Card>

      <Card>
        <div className="mb-3">
          <h2 className="text-xl font-semibold">Points Table</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-center">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
                <SortHeader
                  label="Sl. No"
                  onClick={() => toggleSort("index")}
                  active={sortKey === "index"}
                  dir={sortDir}
                />
                <SortHeader
                  label="Team"
                  onClick={() => toggleSort("Team")}
                  active={sortKey === "Team"}
                  dir={sortDir}
                />
                <SortHeader
                  label="Played"
                  onClick={() => toggleSort("played")}
                  active={sortKey === "played"}
                  dir={sortDir}
                />
                <SortHeader
                  label="Win"
                  onClick={() => toggleSort("win")}
                  active={sortKey === "win"}
                  dir={sortDir}
                />
                <SortHeader
                  label="Lost"
                  onClick={() => toggleSort("lost")}
                  active={sortKey === "lost"}
                  dir={sortDir}
                />
                <SortHeader
                  label="Points"
                  onClick={() => toggleSort("points")}
                  active={sortKey === "points"}
                  dir={sortDir}
                />
                <SortHeader
                  label="NRR"
                  onClick={() => toggleSort("nrr")}
                  active={sortKey === "nrr"}
                  dir={sortDir}
                />
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr
                  key={row.team.slug + String(row.nrr)}
                  className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50/50 dark:hover:bg-gray-800/30"
                >
                  <td className="px-4 py-3 font-mono">{idx + 1}</td>
                  <td className="px-4 py-3">
                    <TeamCell team={row.team} />
                  </td>
                  <td className="px-4 py-3 font-mono">{row.played}</td>
                  <td className="px-4 py-3 font-mono">{row.win}</td>
                  <td className="px-4 py-3 font-mono">{row.lost}</td>
                  <td className="px-4 py-3 font-mono">{row.points}</td>
                  <td className="px-4 py-3 font-mono">{row.nrr}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
