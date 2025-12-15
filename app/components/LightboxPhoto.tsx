"use client";

import { useEffect, useState } from "react";
import type { StaticImageData } from "next/image";

type LightboxPhotoProps = {
  src: string | StaticImageData;
  alt: string;
  caption?: string;
};

export default function LightboxPhoto({
  src,
  alt,
  caption,
}: LightboxPhotoProps) {
  const [open, setOpen] = useState(false);
  const url = typeof src === "string" ? src : src.src;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <figure className="flex flex-col items-center">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="w-full overflow-hidden rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Open image in full screen"
        >
          <img
            src={url}
            alt={alt}
            className="w-full h-auto object-contain md:object-cover md:h-150 cursor-zoom-in"
          />
        </button>
        {caption ? (
          <figcaption className="mt-4 text-center text-lg md:text-2xl font-semibold">
            {caption}
          </figcaption>
        ) : null}
      </figure>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md md:backdrop-blur-lg flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative max-w-7xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-2 right-2 flex items-center gap-2">
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close full screen image"
                className="bg-white/90 hover:bg-white text-black rounded px-3 py-1 shadow"
              >
                ×
              </button>
            </div>

            <div
              className="flex items-center justify-center"
              style={{ height: "90vh" }}
            >
              <img
                src={url}
                alt={alt}
                className="max-h-[90vh] w-auto h-auto object-contain rounded shadow-lg"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
