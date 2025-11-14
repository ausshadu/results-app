import Link from "next/link";
import Image from "next/image";
import { Card } from "flowbite-react";
import {
  matches,
  MatchType,
  Match,
} from "@/lib/600MeeladResults/Cricket/matches";
import { Team } from "@/lib/600MeeladResults/Cricket/teams";

function TeamCell({ team }: { team: Team }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative h-[120px] w-[120px] md:h-[200px] md:w-[200px]">
        {team.jerseyImage ? (
          <Image
            src={team.jerseyImage}
            alt={`${team.name} jersey`}
            fill
            sizes="(min-width: 768px) 200px, 120px"
            className="object-contain"
          />
        ) : (
          <div className="h-full w-full rounded bg-gray-200 dark:bg-gray-700" />
        )}
      </div>
      <Link href={`/cricket-2025/teams/${team.slug}`} className="link font-medium">
        {team.name}
      </Link>
    </div>
  );
}

function formatElectedTo(value: Match["electedTo"]) {
  if (value === "bat") return "Bat";
  if (value === "bowl") return "Bowl";
  return value;
}

function formatMatchType(type: MatchType) {
  switch (type) {
    case MatchType.QUALIFIER:
      return "Qualifier";
    case MatchType.QUARTER_FINAL:
      return "Quarter Final";
    case MatchType.SEMI_FINAL:
      return "Semi Final";
    case MatchType.SUPER_OVER:
      return "Super Over";
    case MatchType.FINAL:
      return "Final";
    default:
      return String(type);
  }
}

function formatMatchResult(m: Match) {
  return m.matchResult;
}

const MATCH_SECTIONS = [
  { type: MatchType.QUALIFIER, title: "Qualifier Matches" },
  { type: MatchType.QUARTER_FINAL, title: "Quarter Final Matches" },
  { type: MatchType.SEMI_FINAL, title: "Semi Final Matches" },
  { type: MatchType.SUPER_OVER, title: "Super Over Matches" },
  { type: MatchType.FINAL, title: "Final Matches" },
] as const;

export default function MatchesPage() {
  return (
    <div className="flex flex-col gap-6">
      <Card>
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold md:text-3xl">Cricket Matches</h1>
          <Link href="/cricket-2025" className="link">
            ← Back to Cricket
          </Link>
        </div>
      </Card>

      {matches.length === 0 ? (
        <Card>
          <div className="text-center py-10">
            <div className="text-3xl font-semibold mb-2">No Matches Yet</div>
            <p className="text-gray-600 dark:text-gray-300">
              Please check back later for match fixtures and results.
            </p>
          </div>
        </Card>
      ) : (
        MATCH_SECTIONS.map(({ type, title }) => {
          const rows = matches.filter((m) => m.matchType === type);
          if (rows.length === 0) return null;
          return (
            <Card key={type}>
              <div className="mb-3">
                <h2 className="text-xl font-semibold">{title}</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full text-center">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
                      <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider">
                        Match ID
                      </th>
                      <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider">
                        Team A
                      </th>
                      <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider">
                        VS
                      </th>
                      <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider">
                        Team B
                      </th>
                      <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider">
                        TOSS - Team Name
                      </th>
                      <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider">
                        ELECTED TO
                      </th>
                      <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider">
                        MATCH TYPE
                      </th>
                      <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider">
                        MATCH RESULT
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((m) => (
                      <tr
                        key={m.id}
                        className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50/50 dark:hover:bg-gray-800/30"
                      >
                        <td className="px-4 py-3 font-mono text-sm">{m.id}</td>
                        <td className="px-4 py-3">
                          <TeamCell team={m.teamA} />
                        </td>
                        <td className="px-4 py-3">VS</td>
                        <td className="px-4 py-3">
                          <TeamCell team={m.teamB} />
                        </td>
                        <td className="px-4 py-3">{m.tossWonBy.name}</td>
                        <td className="px-4 py-3">
                          {formatElectedTo(m.electedTo)}
                        </td>
                        <td className="px-4 py-3">
                          {formatMatchType(m.matchType)}
                        </td>
                        <td className="px-4 py-3">{formatMatchResult(m)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          );
        })
      )}
    </div>
  );
}
