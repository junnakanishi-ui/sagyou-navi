"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useState, type ReactNode } from "react";

export type GalleryImage = {
  src: string;
  alt: string;
  caption?: string;
};

type Props = {
  images: GalleryImage[];
  className?: string;
  aspectClassName?: string;
  sizes?: string;
  objectFit?: "cover" | "contain";
  priorityIndexes?: number[];
};

export function ImageLightboxGallery({
  images,
  className = "grid gap-4 sm:grid-cols-2",
  aspectClassName = "aspect-[4/3]",
  sizes = "(max-width: 640px) 100vw, 420px",
  objectFit = "cover",
  priorityIndexes = [],
}: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const titleId = useId();

  const close = useCallback(() => setOpenIndex(null), []);
  const showPrev = useCallback(() => {
    setOpenIndex((current) => {
      if (current === null) return current;
      return (current - 1 + images.length) % images.length;
    });
  }, [images.length]);
  const showNext = useCallback(() => {
    setOpenIndex((current) => {
      if (current === null) return current;
      return (current + 1) % images.length;
    });
  }, [images.length]);

  useEffect(() => {
    if (openIndex === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [openIndex, close, showPrev, showNext]);

  const active = openIndex === null ? null : images[openIndex];

  return (
    <>
      <div className={className}>
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setOpenIndex(index)}
            className="group overflow-hidden rounded-2xl border border-gray-200 bg-white text-left shadow-sm transition hover:border-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
          >
            <span className={`relative block ${aspectClassName} bg-gray-50`}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={priorityIndexes.includes(index)}
                sizes={sizes}
                className={`${objectFit === "contain" ? "object-contain p-3" : "object-cover"} transition duration-300 group-hover:scale-[1.02]`}
              />
              <span className="absolute bottom-3 right-3 rounded-full bg-slate-900/80 px-3 py-1 text-xs font-bold text-white">
                拡大
              </span>
            </span>
            {image.caption ? (
              <span className="block p-3 text-[15px] leading-7 text-gray-900">
                {image.caption}
              </span>
            ) : null}
          </button>
        ))}
      </div>

      {active ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/85 p-4"
          onClick={close}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <p id={titleId} className="sr-only">
              {active.alt}
            </p>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white sm:aspect-video">
              <Image
                src={active.src}
                alt={active.alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
            <p className="mt-3 text-center text-sm font-medium text-white">
              {active.caption ?? active.alt}
            </p>
            <div className="mt-4 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={showPrev}
                className="inline-flex min-h-11 items-center justify-center rounded-xl bg-white px-4 text-sm font-bold text-slate-900"
              >
                前へ
              </button>
              <button
                type="button"
                onClick={close}
                className="inline-flex min-h-11 items-center justify-center rounded-xl bg-amber-500 px-4 text-sm font-bold text-slate-950"
              >
                閉じる
              </button>
              <button
                type="button"
                onClick={showNext}
                className="inline-flex min-h-11 items-center justify-center rounded-xl bg-white px-4 text-sm font-bold text-slate-900"
              >
                次へ
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export function ZoomableFigure({
  src,
  alt,
  caption,
  priority = false,
  aspectClassName = "aspect-video",
  objectFit = "cover",
}: {
  src: string;
  alt: string;
  caption?: ReactNode;
  priority?: boolean;
  aspectClassName?: string;
  objectFit?: "cover" | "contain";
}) {
  return (
    <figure className="my-8">
      <ImageLightboxGallery
        images={[{ src, alt, caption: typeof caption === "string" ? caption : undefined }]}
        className="grid grid-cols-1"
        aspectClassName={aspectClassName}
        sizes="(max-width: 1024px) 100vw, 850px"
        objectFit={objectFit}
        priorityIndexes={priority ? [0] : []}
      />
      {caption && typeof caption !== "string" ? (
        <figcaption className="mt-3 text-[15px] leading-7 text-gray-900">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
