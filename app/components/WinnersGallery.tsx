"use client";

import { GalleryItem } from "@/lib/600MeeladResults/Models";
import Image from "next/image";
import { useState } from "react";
import { Card, Modal, ModalBody, ModalHeader } from "flowbite-react";
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

  return (
    <>
      <Card>
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Congratulations to the FIRST, SECOND and THIRD teams.
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {items.map((it, i) => (
            <div key={i} className="relative cursor-pointer" onClick={() => setOpenIndex(i)}>
              <div className="absolute left-2 top-2 z-10">
                <Image
                  src={i === 0 ? firstIcon : i === 1 ? secondIcon : thirdIcon}
                  alt={i === 0 ? "First place" : i === 1 ? "Second place" : "Third place"}
                  width={40}
                  height={40}
                />
              </div>
              <Image
                src={it.src}
                alt={it.alt}
                className="h-40 w-full rounded-lg object-contain hover:scale-105 transition-transform"
              />
              <p className="mt-2 text-sm font-medium text-center">{it.caption}</p>
            </div>
          ))}
        </div>
      </Card>

      {openIndex !== null && (
        <Modal show={true} onClose={() => setOpenIndex(null)} size="4xl">
          <ModalHeader>{items[openIndex].caption}</ModalHeader>
          <ModalBody>
            <Image
              src={items[openIndex].src}
              alt={items[openIndex].alt}
              className="w-full h-auto rounded-lg"
            />
            {items[openIndex].participants && items[openIndex].participants.length > 0 && (
              <p className="mt-4 text-sm whitespace-pre-wrap">
                {items[openIndex].participants!.join("\n")}
              </p>
            )}
          </ModalBody>
        </Modal>
      )}
    </>
  );
}
