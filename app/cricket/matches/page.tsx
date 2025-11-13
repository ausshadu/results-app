import Link from "next/link";
import { Card } from "flowbite-react";

export default function MatchesComingSoonPage() {
  return (
    <div className="flex flex-col gap-6">
      <Card>
        <h1 className="text-2xl font-bold md:text-3xl">Cricket Matches</h1>
        <p className="text-sm">
          Coming soon. Schedule and results will be published here.
        </p>
        <Link href="/cricket" className="link">
          ← Back to Cricket
        </Link>
      </Card>

      <Card className="text-center">
        <div className="text-3xl font-semibold mb-2">Coming Soon</div>
        <p className="text-gray-600 dark:text-gray-300">
          Please check back later for match fixtures and results.
        </p>
      </Card>
    </div>
  );
}
