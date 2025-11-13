"use client";

import Link from "next/link";
import { FEMALE_SENIOR, MALE_SENIOR } from "@/lib/600MeeladResults";
import { EssayResultsTable } from "@/app/components";
import { Card } from "flowbite-react";

export default function Page() {
  const results = [
    ...FEMALE_SENIOR.map((r) => ({ ...r, category: "Female" as const })),
    ...MALE_SENIOR.map((r) => ({ ...r, category: "Male" as const })),
  ];

  return (
    <div className="flex flex-col gap-6">
      <Card>
        <h1 className="text-2xl font-bold md:text-3xl">Seniors — Essay 2025</h1>
        <p className="text-sm">
          Combined results list for Seniors (Male & Female). Click View PDF to open the scanned answer sheet.
        </p>
        <Link href="/essay-2025" className="link">
          ← Back to Categories
        </Link>
      </Card>

      <EssayResultsTable results={results} />
    </div>
  );
}
