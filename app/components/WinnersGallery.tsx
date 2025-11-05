"use client";

import { GalleryItem } from "@/lib/600MeeladResults/Models";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import firstIcon from "@/lib/600MeeladResults/icons/first.png";
import secondIcon from "@/lib/600MeeladResults/icons/second.png";
import thirdIcon from "@/lib/600MeeladResults/icons/third.png";

export default function WinnersGallery({
  items,
  title,
}: {
  items: GalleryItem[];
  title?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [close]);

  return (
    <>
      <section className="card-surface p-5">
        <h2 className="text-xl font-semibold text-zinc-900">{title}</h2>
        <p className="mt-1 text-sm text-zinc-700">
          Congratulations to the FIRST, SECOND and THIRD teams.
        </p>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {items.map((it, i) => (
            <figure key={i} className="flex flex-col gap-2">
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                className="group relative cursor-zoom-in"
                aria-label={`Open ${it.caption} photo`}
              >
                <div className="absolute left-2 top-2 z-10">
                  <Image
                    src={i === 0 ? firstIcon : i === 1 ? secondIcon : thirdIcon}
                    alt={
                      i === 0
                        ? "First place"
                        : i === 1
                        ? "Second place"
                        : "Third place"
                    }
                    width={40}
                    height={40}
                    className="drop-shadow-2xl"
                  />
                </div>
                <Image
                  src={it.src}
                  alt={it.alt}
                  className="h-40 w-full rounded-lg object-contain transition-transform group-hover:scale-[1.02]"
                />
              </button>
              <div
                className="text-sm font-medium text-zinc-800 text-center"
                style={{ whiteSpace: "pre-wrap" }}
              >
                {it.caption}
              </div>
            </figure>
          ))}
        </div>
      </section>

      {openIndex !== null ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-h-[95vh] w-full max-w-[95vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              aria-label="Close"
              onClick={close}
              className="absolute -top-10 right-0 rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-zinc-900 shadow hover:bg-white"
            >
              Close ✕
            </button>
            <Image
              src={items[openIndex].src}
              alt={items[openIndex].alt}
              className="mx-auto h-auto w-auto max-h-[85vh] max-w-[95vw] rounded-lg object-contain"
              priority
            />
            <div
              className="mt-2 text-center text-sm text-white/90"
              style={{ whiteSpace: "pre-wrap" }}
            >
              {items[openIndex].caption}
            </div>
            {items[openIndex].participants &&
            items[openIndex].participants.length > 0 ? (
              <div
                className="mt-1 text-center text-xs text-white/90"
                style={{ whiteSpace: "pre-wrap" }}
              >
                {items[openIndex].participants!.join("\n")}
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}
