import { ProductCard } from "@/components/work/product-card";
import { STORE_LINKS } from "@/lib/product-links";
import type { ProductGridProps } from "./types";

export function ProductGrid({ items, cols = 2, slug }: ProductGridProps) {
  const gridClass =
    cols === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={`mt-6 grid gap-4 ${gridClass}`}>
      {items.map((p) => (
        <ProductCard
          key={p.id}
          name={p.name}
          imageId={p.id}
          links={{
            gcSelect: p.links?.gcSelect,
            rakuten: p.links?.rakuten,
            yahoo: p.links?.yahoo ?? `${STORE_LINKS.yahoo}${p.id}.html`,
          }}
          utmContent={`${slug}_${p.id}`}
          note={p.note}
        />
      ))}
    </div>
  );
}
