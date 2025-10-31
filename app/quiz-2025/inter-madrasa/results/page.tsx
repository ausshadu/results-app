import Link from "next/link";
import {
  InterMadrasaParticipants,
  Madrasa_Round1_GroupA,
  Madrasa_Round1_GroupB,
  Madrasa_Round2_GroupA,
  Madrasa_Round2_GroupB,
  Madrasa_Round3_Final,
} from "@/lib/600MeeladResults";
import { Round1Table, Round2Table, WinnersGallery } from "@/app/components";
import firstPhoto from "@/lib/600MeeladResults/Quiz2025/photos/inter-madrasa/first.webp";
import secondPhoto from "@/lib/600MeeladResults/Quiz2025/photos/inter-madrasa/second.webp";
import thirdPhoto from "@/lib/600MeeladResults/Quiz2025/photos/inter-madrasa/third.jpeg";

export const metadata = {
  title: "Inter Madrasa Results",
  description:
    "Inter Madrasa — winners, runners-up and full results for Quiz 2025.",
};

export default function Page() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6">
      <header className="card-surface p-5 text-center md:text-left">
        <h1 className="text-2xl font-bold text-zinc-900 md:text-3xl">
          Inter Madrasa — Quiz 2025
        </h1>
        <p className="mt-2 text-sm text-zinc-700">
          Celebrating the champions of Inter Madrasa Quiz 2025. See winners
          below and browse full round-wise results. Click View PDF to open the
          scanned answer sheet.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <Link
            href="/quiz-2025"
            className="cta inline-flex rounded-full px-4 py-2 text-sm font-medium"
          >
            ← Back to Categories
          </Link>
          <Link
            href="/quiz-2025/inter-madrasa/participants"
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

      <Round1Table title="Group - A" data={Madrasa_Round1_GroupA} />
      <Round1Table title="Group - B" data={Madrasa_Round1_GroupB} />

      <section className="card-surface card-round2 p-5 text-center md:text-left">
        <h2 className="text-2xl font-bold text-zinc-900 md:text-3xl">
          ROUND 2 - ⚡️ Mixed Style (Buzzer + Individual) 👥
        </h2>
      </section>

      <Round2Table title="Group - A" data={Madrasa_Round2_GroupA} />
      <Round2Table title="Group - B" data={Madrasa_Round2_GroupB} />

      <section className="card-surface card-round3 p-5 text-center md:text-left">
        <h2 className="text-2xl font-bold text-zinc-900 md:text-3xl">
          FINAL ROUND - ⚡️ Buzzer style ⚡️
        </h2>
      </section>

      <Round2Table title="Final Round — Teams" data={Madrasa_Round3_Final} />

      <WinnersGallery
        items={[
          {
            src: firstPhoto,
            alt: "Winner — Inter Madrasa",
            caption: [
              "🏆 — 🥇 Winner",
              "",
              `Madrasa: ${InterMadrasaParticipants.B4.name}`,
              "",
              InterMadrasaParticipants.B4.participants[0],
              InterMadrasaParticipants.B4.participants[1],
              InterMadrasaParticipants.B4.participants[2],
            ].join("\n"),
          },
          {
            src: secondPhoto,
            alt: "1st Runner-Up — Inter Madrasa",
            caption: [
              "🏆 — 🥈 1st Runner-Up",
              "",
              `Madrasa: ${InterMadrasaParticipants.A3.name}`,
              "",
              InterMadrasaParticipants.A3.participants[0],
              InterMadrasaParticipants.A3.participants[1],
              InterMadrasaParticipants.A3.participants[2],
            ].join("\n"),
          },
          {
            src: thirdPhoto,
            alt: "2nd Runner-Up — Inter Madrasa",
            caption: [
              "🏆 — 🥉 2nd Runner-Up",
              "",
              `Madrasa: ${InterMadrasaParticipants.B5.name}`,
              "",
              InterMadrasaParticipants.B5.participants[0],
              InterMadrasaParticipants.B5.participants[1],
              InterMadrasaParticipants.B5.participants[2],
            ].join("\n"),
          },
        ]}
      />
    </div>
  );
}
