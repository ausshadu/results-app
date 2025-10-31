"use client";

import Image, { StaticImageData } from "next/image";
import { useCallback, useEffect, useState } from "react";

type GalleryItem = {
  src: StaticImageData;
  alt: string;
  caption: string;
};

export default function WinnersGallery({ items }: { items: GalleryItem[] }) {
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
        <h2 className="text-xl font-semibold text-zinc-900">
          Winners — Inter Madrasa Quiz 2025
        </h2>
        <p className="mt-1 text-sm text-zinc-700">
          Congratulations to the Winner, 1st Runner-Up and 2nd Runner-Up teams.
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
                <Image
                  src={it.src}
                  alt={it.alt}
                  className="h-40 w-full rounded-lg object-cover transition-transform group-hover:scale-[1.02]"
                />
              </button>
              <div
                className="text-sm font-medium text-zinc-800"
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
          </div>
        </div>
      ) : null}
    </>
  );
}
