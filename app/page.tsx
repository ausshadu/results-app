"use client";

import Image from "next/image";
import { Card } from "flowbite-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-center">
        <Image
          src="/bismillah_black.png"
          alt="Bismillah"
          width={0}
          height={0}
          style={{ width: 400, height: "auto" }}
          priority
          className="h-auto w-65 sm:w-80 md:w-100 dark:invert"
        />
      </div>
      <Card>
        <h1 className="text-2xl font-bold md:text-3xl">
          600th Meelad-e-Mehdi-e-Maoud (AHS) - Deeni Events 2025
        </h1>
        <p className="text-sm">Browse results for Quiz 2025 and Essay 2025.</p>
      </Card>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Card className="hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-semibold">Quiz 2025</h3>
          <p className="text-sm">Inter Madrasa • Male/Female • Junior/Senior</p>
          <Link href="/quiz-2025" className="link">
            View
          </Link>
        </Card>
        <Card className="hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-semibold">Essay 2025</h3>
          <p className="text-sm">Male/Female • Junior/Senior</p>
          <Link href="/essay-2025" className="link">
            View
          </Link>
        </Card>
        <Card className="hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-semibold">Cricket 2025</h3>
          <p className="text-sm">
            12 Teams • 5 cities • Nail biting tournament • 1 winner
          </p>
          <Link href="/cricket-2025" className="link">
            View
          </Link>
        </Card>
      </div>
    </div>
  );
}
