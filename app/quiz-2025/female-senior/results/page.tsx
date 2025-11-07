"use client";

import Link from "next/link";
import { Round1Table, Round2Table } from "@/app/components";
import {
  Female_Seniors_Round1_GroupA,
  Female_Seniors_Round2_GroupA,
  Female_Seniors_Round3_Final,
} from "@/lib/600MeeladResults";
import { Card, Button } from "flowbite-react";

export const metadata = {
  title: "Female • Senior — Results",
  description: "Results page for Female • Senior (empty for now).",
};

export default function Page() {
  return (
    <div className="flex flex-col gap-6">
      <Card>
        <h1 className="text-2xl font-bold md:text-3xl">
          Female • Senior — Results
        </h1>
        <p className="text-sm">
          This page has placeholder tables. Data will be added later.
        </p>
        <div className="flex flex-wrap gap-2">
          <Button color="light" as={Link} href="/quiz-2025" pill>
            ← Back to Categories
          </Button>
          <Button color="primary" as={Link} href="/quiz-2025/female-senior/participants" pill>
            View Participants →
          </Button>
        </div>
      </Card>

      <Card className="text-center md:text-left">
        <h2 className="text-2xl font-bold md:text-3xl">
          ROUND - 1 - ♻️ Round robin style ♻️
        </h2>
      </Card>

      <Round1Table title="Group - A" data={Female_Seniors_Round1_GroupA} />

      <Card className="text-center md:text-left">
        <h2 className="text-2xl font-bold md:text-3xl">
          ROUND 2 - ⚡️ Mixed Style (Buzzer + Individual) 👥
        </h2>
      </Card>

      <Round2Table title="Group - A" data={Female_Seniors_Round2_GroupA} />

      <Card className="text-center md:text-left">
        <h2 className="text-2xl font-bold md:text-3xl">
          FINAL ROUND - ⚡️ Buzzer style ⚡️
        </h2>
      </Card>

      <Round2Table title="Final Round — Teams" data={Female_Seniors_Round3_Final} />
    </div>
  );
}
