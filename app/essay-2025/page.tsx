"use client";

import { Card } from "flowbite-react";
import Link from "next/link";

// const metadata = {
//   title: "Essay 2025 Categories",
//   description: "Choose a category to view Essay Results 2025.",
// };

function CategoryCard({
  title,
  href,
  subtitle,
}: {
  title: string;
  href: string;
  subtitle?: string;
}) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <h3 className="text-lg font-semibold">{title}</h3>
      {subtitle && <p className="text-sm">{subtitle}</p>}
      <Link href={href} className="link">
        View
      </Link>
    </Card>
  );
}

export default function Page() {
  return (
    <div className="flex flex-col gap-6">
      <Card>
        <h1 className="text-2xl font-bold md:text-3xl">Essay Results 2025</h1>
        <p className="text-sm">Select a category to view the results list.</p>
        <Link href="/" className="link">
          ← Back to Home
        </Link>
      </Card>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <CategoryCard
          title="Juniors"
          href="/essay-2025/juniors"
          subtitle="Male & Female • Age 13 to 18"
        />
        <CategoryCard
          title="Seniors"
          href="/essay-2025/seniors"
          subtitle="Male & Female • Age 19 to 30"
        />
        {/* <CategoryCard
          title="Female • Junior"
          href="/essay-2025/female-junior"
          subtitle="Age 13 to 18"
        />
        <CategoryCard
          title="Female • Senior"
          href="/essay-2025/female-senior"
          subtitle="Age 19 to 30"
        />
        <CategoryCard
          title="Male • Junior"
          href="/essay-2025/male-junior"
          subtitle="Age 13 to 18"
        />
        <CategoryCard
          title="Male • Senior"
          href="/essay-2025/male-senior"
          subtitle="Age 19 to 30"
        /> */}
      </div>
    </div>
  );
}
