import Link from "next/link";
import Image from "next/image";
import { Card } from "flowbite-react";
import { matches } from "@/lib/600MeeladResults/Cricket/matches";
import youngGemsPhoto from "@/lib/600MeeladResults/Cricket/photos/TeamYoungGems.jpg";
import tigersPhoto from "@/lib/600MeeladResults/Cricket/photos/TeamTigers.jpg";
import ocPhoto from "@/lib/600MeeladResults/Cricket/photos/TeamOrganizingCommittee.jpg";
import LightboxPhoto from "@/app/components/LightboxPhoto";
import { Match, MatchType, Team } from "@/lib/600MeeladResults/Models";

function TeamCell({ team }: { team: Team }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative h-30 w-30 md:h-50 md:w-50">
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
      <Link
        href={`/cricket-2025/teams/${team.slug}`}
        className="link font-medium"
      >
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

function parseYouTubeTimeToSeconds(t: string) {
  // Supports formats like "1704s", "5m12s", "1h2m3s" or "1704"
  if (!t) return 0;
  if (/^\d+$/.test(t)) return parseInt(t, 10);
  const match = t.match(/(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
  if (!match) return 0;
  const hours = match[1] ? parseInt(match[1], 10) : 0;
  const minutes = match[2] ? parseInt(match[2], 10) : 0;
  const seconds = match[3] ? parseInt(match[3], 10) : 0;
  return hours * 3600 + minutes * 60 + seconds;
}

function getYouTubeEmbedUrl(link: string) {
  try {
    const url = new URL(link);
    const v = url.searchParams.get("v");
    if (!v) return link;
    const t = url.searchParams.get("t") || "";
    const start = parseYouTubeTimeToSeconds(t);
    const startQuery = start > 0 ? `?start=${start}` : "";
    return `https://www.youtube.com/embed/${v}${startQuery}`;
  } catch {
    return link;
  }
}

const MATCH_SECTIONS = [
  { type: MatchType.QUALIFIER, title: "Qualifier Matches" },
  { type: MatchType.QUARTER_FINAL, title: "Quarter Final Matches" },
  { type: MatchType.SEMI_FINAL, title: "Semi Final Matches" },
  { type: MatchType.SUPER_OVER, title: "Super Over Match" },
  { type: MatchType.FINAL, title: "Final" },
] as const;

export default function MatchesPage() {
  return (
    <div className="flex flex-col gap-6">
      <Card>
        <h1 className="text-2xl font-bold md:text-3xl">
          Matches — Cricket 2025
        </h1>
        <p className="text-sm">
          Matches fixtures and results for Cricket 2025 tournament.
        </p>
        <Link href="/cricket-2025" className="link">
          ← Back to Cricket 2025
        </Link>
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
                      <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider">
                        WATCH
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
                        <td className="px-4 py-3">
                          {m.youtubeLink ? (
                            <div className="mx-auto w-45 h-[101px] md:w-60 md:h-[135px] rounded overflow-hidden shadow">
                              <iframe
                                src={getYouTubeEmbedUrl(m.youtubeLink)}
                                title={`Watch match ${m.id}`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className="w-full h-full"
                              />
                            </div>
                          ) : (
                            <span className="text-gray-400">—</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          );
        })
      )}
      <Card>
        <div className="mb-3">
          <h2 className="text-2xl md:text-3xl font-bold">Photos</h2>
        </div>
      </Card>
      <div className="grid grid-cols-12 gap-6">
        <Card className="col-span-12">
          <div className="mb-2">
            <h3 className="text-xl md:text-2xl font-bold">RUNNERS</h3>
          </div>
          <LightboxPhoto
            src={youngGemsPhoto}
            alt="Runners — YOUNG GEMS CC"
            caption="YOUNG GEMS CC"
          />
        </Card>
        <Card className="col-span-12">
          <div className="mb-2">
            <h3 className="text-xl md:text-2xl font-bold">WINNERS</h3>
          </div>
          <LightboxPhoto
            src={tigersPhoto}
            alt="Winners — TIGERS CC"
            caption="TIGERS CC"
          />
        </Card>
        <Card className="col-span-12">
          <div className="mb-2">
            <h3 className="text-xl md:text-2xl font-bold">
              Organizing Committee
            </h3>
          </div>
          <LightboxPhoto
            src={ocPhoto}
            alt="Organizing Committee"
            caption="Mahdavia Julus Committee, Daira, Channapatna."
          />
        </Card>
      </div>
    </div>
  );
}
