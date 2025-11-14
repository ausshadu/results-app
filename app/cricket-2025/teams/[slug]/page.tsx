import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getTeamBySlug, getTeams } from "@/lib/600MeeladResults/Cricket";

interface TeamPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const teams = getTeams();
  return teams.map((team) => ({
    slug: team.slug,
  }));
}

export default async function TeamPage({ params }: TeamPageProps) {
  const { slug } = await params;
  const team = getTeamBySlug(slug);

  if (!team) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Header Section */}
      <div className="rounded-lg bg-white dark:bg-gray-800 p-4 shadow border-0">
        <div className="mb-4">
          <Link href="/cricket-2025/teams" className="link">
            ← Back to Teams
          </Link>
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold md:text-5xl mb-2">{team.name}</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">{team.location}</p>
        </div>
      </div>

      {/* Jersey + Captain and Team Members */}
      <div className="grid grid-cols-12 gap-6">
        {/* Jersey + Captain Card - 4 columns */}
        <div className="col-span-12 lg:col-span-4">
          <div className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow h-full flex flex-col justify-center">
            <div className="flex flex-col items-center gap-6">
              {/* Jersey */}
              {team.jerseyImage && (
                <Image
                  src={team.jerseyImage}
                  alt={`${team.name} jersey`}
                  width={800}
                  height={800}
                  className="h-80 w-80 md:h-96 md:w-96 object-contain"
                />
              )}

              {/* Captain Info */}
              <div className="text-center w-full">
                <h2 className="text-lg font-semibold mb-2">Captain</h2>
                <p className="text-base font-medium text-gray-900 dark:text-gray-100">{team.captain}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Members - 8 columns */}
        <div className="col-span-12 lg:col-span-8">
          <div className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow">
            <h2 className="text-xl font-semibold mb-4">Team Members ({team.teamMembers.length})</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {team.teamMembers.map((member, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 bg-gray-50 dark:bg-gray-700 rounded-lg px-4 py-3"
                >
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400 min-w-[2rem]">
                    {idx + 1}.
                  </span>
                  <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    {member}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
