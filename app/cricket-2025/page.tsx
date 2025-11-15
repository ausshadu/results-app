"use client";

import { Card } from "flowbite-react";
import Link from "next/link";

export default function Cricket() {
  return (
    <div className="flex flex-col gap-6">
      <Card>
        <h1 className="text-2xl font-bold md:text-3xl">Cricket 2025</h1>
        <p className="text-sm">
          12 Teams • 5 cities • Nail biting tournament • 1 winner
        </p>
        <div className="flex flex-wrap gap-2">
          <Link href="/" className="link">
            ← Back to Home
          </Link>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-semibold">Teams</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            View all teams, jersey, location, and captain.
          </p>
          <div>
            <Link href="/cricket-2025/teams" className="link">
              View
            </Link>
          </div>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-semibold">Matches</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            View schedule and results.
          </p>
          <div>
            <Link href="/cricket-2025/matches" className="link">
              View
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
