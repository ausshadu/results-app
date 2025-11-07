"use client";

import Link from "next/link";
import { MALE_SENIOR } from "@/lib/600MeeladResults";
import { EssayResultsTable } from "@/app/components";
import { Card } from "flowbite-react";

const metadata = {
  title: "Essay 2025 — Male • Senior",
  description:
    "Results list for Male • Senior category in Essay Competition 2025.",
};

export default function Page() {
  return (
    <div className="flex flex-col gap-6">
      <Card>
        <h1 className="text-2xl font-bold md:text-3xl">
          Male • Senior — Essay 2025
        </h1>
        <p className="text-sm">
          Browse the results list. Click View PDF to open the scanned answer
          sheet.
        </p>
        <Link href="/essay-2025" className="link">
          ← Back to Categories
        </Link>
      </Card>

      <EssayResultsTable results={MALE_SENIOR} />
    </div>
  );
}
