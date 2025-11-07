"use client";

import { Card } from "flowbite-react";
import Link from "next/link";

export default function Cricket() {
  return (
    <div className="flex flex-col gap-6">
      <Card>
        <h1 className="text-2xl font-bold md:text-3xl">Cricket 2025 Results</h1>
        <p className="text-sm">
          Results to be announced soon - <strong>In Sha&apos; Allah.</strong>{" "}
          Check back later.
        </p>
        <Link href="/" className="link">
          ← Back to Home
        </Link>
      </Card>
    </div>
  );
}
