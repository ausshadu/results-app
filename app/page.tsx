"use client";

import Link from "next/link";
import Image from "next/image";

function EventCard({
  title,
  href,
  subtitle,
  className,
}: {
  title: string;
  href: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`card-surface ${
        className ?? ""
      } block w-full rounded-xl p-5 transition-transform hover:scale-[1.02] focus:scale-[1.02] focus:outline-none`}
    >
      <div className="flex items-center justify-between gap-2">
        <div>
          <h3 className="text-lg font-semibold text-zinc-900">{title}</h3>
          {subtitle ? (
            <p className="mt-1 text-sm text-zinc-600">{subtitle}</p>
          ) : null}
        </div>
        <span className="cta inline-flex min-w-10 items-center justify-center rounded-full px-3 py-2 text-sm font-medium shadow-sm">
          View
        </span>
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6">
      <div className="flex justify-center">
        <Image
          src="/bismillah_black.png"
          alt="Bismillah"
          width={400}
          height={120}
          priority
          className="h-auto w-[260px] sm:w-[320px] md:w-[400px]"
        />
      </div>
      <header className="card-surface p-5 text-center md:text-left">
        <h1 className="text-2xl font-bold text-zinc-900 md:text-3xl">
          Deeni Events Results 2025
        </h1>
        <p className="mt-2 text-sm text-zinc-700">
          Browse results for Quiz 2025 and Essay 2025.
        </p>
      </header>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <EventCard
          title="Quiz 2025"
          href="/quiz-2025"
          subtitle="Inter Madrasa • Male/Female • Junior/Senior"
          className="card-quiz"
        />
        <EventCard
          title="Essay 2025"
          href="/essay-2025"
          subtitle="Male/Female • Junior/Senior"
          className="card-essay"
        />
      </section>
    </div>
  );
}
