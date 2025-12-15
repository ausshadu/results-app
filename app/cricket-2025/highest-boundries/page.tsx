"use client";

import Link from "next/link";
import Image from "next/image";
import { Card } from "flowbite-react";
import { MAXIMUM_BOUNDRIES } from "@/lib/600MeeladResults/Cricket/stats";
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

type SortKey = "index" | "Team" | "Name" | "Six" | "Four";
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

export default function HighestBoundriesPage() {
  const baseRows = useMemo(
    () =>
      MAXIMUM_BOUNDRIES.map((r, i) => ({
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
            ? a.Team.name
            : sortKey === "Name"
              ? a.Name
              : sortKey === "Six"
                ? a.Six
                : a.Four;
      const bv =
        sortKey === "index"
          ? b.index
          : sortKey === "Team"
            ? b.Team.name
            : sortKey === "Name"
              ? b.Name
              : sortKey === "Six"
                ? b.Six
                : b.Four;

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
          Highest Boundries — Cricket 2025
        </h1>
        <p className="text-sm">Players with maximum sixes and fours.</p>
        <Link href="/cricket-2025" className="link">
          ← Back to Cricket 2025
        </Link>
      </Card>

      <Card>
        <div className="mb-3">
          <h2 className="text-xl font-semibold">Highest Boundries</h2>
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
                  label="Name"
                  onClick={() => toggleSort("Name")}
                  active={sortKey === "Name"}
                  dir={sortDir}
                />
                <SortHeader
                  label="Six"
                  onClick={() => toggleSort("Six")}
                  active={sortKey === "Six"}
                  dir={sortDir}
                />
                <SortHeader
                  label="Four"
                  onClick={() => toggleSort("Four")}
                  active={sortKey === "Four"}
                  dir={sortDir}
                />
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr
                  key={row.Name + row.Team.slug}
                  className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50/50 dark:hover:bg-gray-800/30"
                >
                  <td className="px-4 py-3 font-mono">{idx + 1}</td>
                  <td className="px-4 py-3">
                    <TeamCell team={row.Team} />
                  </td>
                  <td className="px-4 py-3">{row.Name}</td>
                  <td className="px-4 py-3 font-mono">{row.Six}</td>
                  <td className="px-4 py-3 font-mono">{row.Four}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
