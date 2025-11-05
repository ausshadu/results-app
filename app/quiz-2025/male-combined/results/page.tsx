import Link from "next/link";
import { Round1Table, Round2Table, WinnersGallery } from "@/app/components";
import {
  Male_Combined_Round1_GroupA,
  Male_Combined_Round1_GroupB,
  Male_Combined_Round2_GroupA,
  Male_Combined_Round2_GroupB,
  Male_Combined_Round3_Final,
  MaleCombinedParticipants,
} from "@/lib/600MeeladResults";
import firstPhoto from "@/lib/600MeeladResults/Quiz2025/photos/male_combined/first.webp";
import secondPhoto from "@/lib/600MeeladResults/Quiz2025/photos/male_combined/second.webp";
import thirdPhoto from "@/lib/600MeeladResults/Quiz2025/photos/male_combined/third.webp";

export const metadata = {
  title: "Male • Combined — Results",
  description: "Results page for Male • Combined (empty for now).",
};

export default function Page() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6">
      <header className="card-surface p-5 text-center md:text-left">
        <h1 className="text-2xl font-bold text-zinc-900 md:text-3xl">
          Male • Combined — Results
        </h1>
        <p className="mt-2 text-sm text-zinc-700">
          This page has placeholder tables. Data will be added later.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <Link
            href="/quiz-2025"
            className="cta inline-flex rounded-full px-4 py-2 text-sm font-medium"
          >
            ← Back to Categories
          </Link>
          <Link
            href="/quiz-2025/male-combined/participants"
            className="cta participantCta inline-flex rounded-full px-4 py-2 text-sm font-medium"
          >
            View Participants →
          </Link>
        </div>
      </header>

      <section className="card-surface card-round1 p-5 text-center md:text-left">
        <h2 className="text-2xl font-bold text-zinc-900 md:text-3xl">
          ROUND - 1 - ♻️ Round robin style ♻️
        </h2>
      </section>

      <Round1Table title="Group - A" data={Male_Combined_Round1_GroupA} />
      <Round1Table title="Group - B" data={Male_Combined_Round1_GroupB} />

      <section className="card-surface card-round2 p-5 text-center md:text-left">
        <h2 className="text-2xl font-bold text-zinc-900 md:text-3xl">
          ROUND 2 - ⚡️ Mixed Style (Buzzer + Individual) 👥
        </h2>
      </section>

      <Round2Table title="Group - A" data={Male_Combined_Round2_GroupA} />
      <Round2Table title="Group - B" data={Male_Combined_Round2_GroupB} />

      <section className="card-surface card-round3 p-5 text-center md:text-left">
        <h2 className="text-2xl font-bold text-zinc-900 md:text-3xl">
          FINAL ROUND - ⚡️ Buzzer style ⚡️
        </h2>
      </section>

      <Round2Table
        title="Final Round — Teams"
        data={Male_Combined_Round3_Final}
      />

      <WinnersGallery
        title="Winners — Male Combined Quiz 2025"
        items={[
          {
            src: firstPhoto,
            alt: "Winner — Male Combined",
            caption: MaleCombinedParticipants.B4.participants.join("\n"),
          },
          {
            src: secondPhoto,
            alt: "Second — Male Combined",
            caption: MaleCombinedParticipants.A2.participants.join("\n"),
          },
          {
            src: thirdPhoto,
            alt: "Third — Male Combined",
            caption: MaleCombinedParticipants.A4.participants.join("\n"),
          },
        ]}
      />
    </div>
  );
}
