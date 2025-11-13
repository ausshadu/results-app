"use client";

import Link from "next/link";
import { FEMALE_JUNIOR, MALE_JUNIOR } from "@/lib/600MeeladResults";
import { EssayResultsTable } from "@/app/components";
import { Card } from "flowbite-react";

export default function Page() {
  const results = [
    ...FEMALE_JUNIOR.map((r) => ({ ...r, category: "Female" as const })),
    ...MALE_JUNIOR.map((r) => ({ ...r, category: "Male" as const })),
  ];

  return (
    <div className="flex flex-col gap-6">
      <Card>
        <h1 className="text-2xl font-bold md:text-3xl">Juniors — Essay 2025</h1>
        <p className="text-sm">
          Combined results list for Juniors (Male & Female). Click View PDF to
          open the scanned answer sheet.
        </p>
        <Link href="/essay-2025" className="link">
          ← Back to Categories
        </Link>
      </Card>

      <EssayResultsTable results={results} />
    </div>
  );
}
