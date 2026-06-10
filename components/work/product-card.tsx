import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { buildUrl, productImg } from "@/lib/product-links";

export type ProductCardProps = {
  name: string;
  description?: string;
  imageId: string;
  links: {
    gcSelect?: string;
    rakuten?: string;
    yahoo?: string;
  };
  utmContent: string;
  note?: string;
};

const storeButtons = [
  {
    key: "gcSelect" as const,
    label: "公式ストアで見る（GCセレクト）",
    suffix: "_gc",
    className:
      "bg-store-gc-select hover:bg-store-gc-select-hover text-white",
  },
  {
    key: "rakuten" as const,
    label: "楽天市場で見る",
    suffix: "_rakuten",
    className:
      "bg-store-rakuten hover:bg-store-rakuten-hover text-accent-red-foreground",
  },
  {
    key: "yahoo" as const,
    label: "Yahoo!ショッピングで見る",
    suffix: "_yahoo",
    className:
      "bg-store-yahoo hover:bg-store-yahoo-hover text-white",
  },
];

export function ProductCard({
  name,
  description,
  imageId,
  links,
  utmContent,
  note,
}: ProductCardProps) {
  const activeButtons = storeButtons.filter((btn) => links[btn.key]);

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:shadow-md">
      <div className="relative h-56 bg-muted">
        <Image
          src={productImg(imageId)}
          alt={name}
          fill
          className="object-contain p-4"
          sizes="(max-width: 768px) 100vw, 400px"
        />
      </div>
      <div className="p-6">
        <h4 className="mb-2 text-lg font-bold text-foreground">{name}</h4>
        {description && (
          <p className="mb-5 text-base leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}
        <div className="flex flex-col gap-2">
          {activeButtons.map((btn) => {
            const url = links[btn.key];
            if (!url) return null;
            return (
              <a
                key={btn.key}
                href={buildUrl(url, `${utmContent}${btn.suffix}`)}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-center text-sm font-bold transition ${btn.className}`}
              >
                {btn.label}
                <ExternalLink className="h-4 w-4" aria-hidden />
              </a>
            );
          })}
        </div>
        {note && (
          <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
            {note}
          </p>
        )}
      </div>
    </div>
  );
}
