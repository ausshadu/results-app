"use client";

import Link from "next/link";
import { Card } from "flowbite-react";

export function CategoryCard({
  title,
  subtitle,
  participantsHref,
  resultsHref,
}: {
  title: string;
  subtitle?: string;
  participantsHref: string;
  resultsHref: string;
}) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <h3 className="text-lg font-semibold">{title}</h3>
      {subtitle ? (
        <p className="text-sm text-gray-600 dark:text-gray-400">{subtitle}</p>
      ) : null}
      <div className="flex items-center gap-2">
        <Link href={participantsHref} className="link">
          Participants
        </Link>
        <Link href={resultsHref} className="link">
          Results
        </Link>
      </div>
    </Card>
  );
}
