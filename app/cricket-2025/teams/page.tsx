import Link from "next/link";
import Image from "next/image";
import { Card } from "flowbite-react";
import { getTeams } from "@/lib/600MeeladResults/Cricket";
import { Team } from "@/lib/600MeeladResults/Models";

export default function TeamsPage() {
  const teams: Team[] = getTeams();

  return (
    <div className="flex flex-col gap-6">
      <Card>
        <h1 className="text-2xl font-bold md:text-3xl">Teams — Cricket 2025</h1>
        <p className="text-sm">
          List of 12 teams with their jersey, location, and captain.
        </p>
        <Link href="/cricket-2025" className="link">
          ← Back to Cricket 2025
        </Link>
      </Card>

      <Card>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-300"
                >
                  Sl. No.
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-300"
                >
                  Jersey
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-300"
                >
                  Team Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-300"
                >
                  Location
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-300"
                >
                  Captain
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
              {teams.map((team, idx) => (
                <tr
                  key={team.slug}
                  className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                    {idx + 1}
                  </td>
                  <td className="px-6 py-4">
                    <Image
                      src={team.jerseyImage ?? "/next.svg"}
                      alt={`${team.name} jersey`}
                      width={100}
                      height={100}
                      className="h-16 w-16 md:h-[100px] md:w-[100px] object-contain rounded"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <Link
                      href={`/cricket-2025/teams/${team.slug}`}
                      className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                    >
                      {team.name}
                    </Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                    {team.location}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                    {team.captain}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
