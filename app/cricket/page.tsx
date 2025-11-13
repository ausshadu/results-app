"use client";

import { Card, Button } from "flowbite-react";
import Link from "next/link";

export default function Cricket() {
  return (
    <div className="flex flex-col gap-6">
      <Card>
        <h1 className="text-2xl font-bold md:text-3xl">Cricket</h1>
        <p className="text-sm">Explore teams and matches.</p>
        <Link href="/" className="link">
          ← Back to Home
        </Link>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-semibold">Teams</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">View all teams, jersey, location, and captain.</p>
          <div>
            <Link href="/cricket/teams" className="link">
              Open Teams
            </Link>
          </div>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-semibold">Matches</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Schedule and results coming soon.</p>
          <div>
            <Link href="/cricket/matches" className="link">
              Coming Soon
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
