"use client";

import Link from "next/link";
import { Round1Table, Round2Table } from "@/app/components";
import {
  Female_Juniors_Round1_GroupA,
  Female_Juniors_Round1_GroupB,
  Female_Juniors_Round2_GroupA,
  Female_Juniors_Round2_GroupB,
  Female_Juniors_Round3_Final,
} from "@/lib/600MeeladResults";
import { Card } from "flowbite-react";

// const metadata = {
//   title: "Female • Junior — Results",
//   description: "Results page for Female • Junior (empty for now).",
// };

export default function Page() {
  return (
    <div className="flex flex-col gap-6">
      <Card>
        <h1 className="text-2xl font-bold md:text-3xl">
          Female • Junior — Results
        </h1>
        <p className="text-sm">
          This page has placeholder tables. Data will be added later.
        </p>
        <div className="flex flex-wrap gap-2">
          <Link href="/quiz-2025" className="link">
            ← Back to Categories
          </Link>
          <Link href="/quiz-2025/female-junior/participants" className="link">
            View Participants →
          </Link>
        </div>
      </Card>

      <Card className="text-center md:text-left">
        <h2 className="text-2xl font-bold md:text-3xl">
          ROUND - 1 - ♻️ Round robin style ♻️
        </h2>
      </Card>

      <Round1Table title="Group - A" data={Female_Juniors_Round1_GroupA} />
      <Round1Table title="Group - B" data={Female_Juniors_Round1_GroupB} />

      <Card className="text-center md:text-left">
        <h2 className="text-2xl font-bold md:text-3xl">
          ROUND 2 - ⚡️ Mixed Style (Buzzer + Individual) 👥
        </h2>
      </Card>

      <Round2Table title="Group - A" data={Female_Juniors_Round2_GroupA} />
      <Round2Table title="Group - B" data={Female_Juniors_Round2_GroupB} />

      <Card className="text-center md:text-left">
        <h2 className="text-2xl font-bold md:text-3xl">
          FINAL ROUND - ⚡️ Buzzer style ⚡️
        </h2>
      </Card>

      <Round2Table
        title="Final Round — Teams"
        data={Female_Juniors_Round3_Final}
      />
    </div>
  );
}
