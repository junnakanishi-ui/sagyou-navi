import Image from "next/image";
import type { ArticleTableProps, WithChildren } from "./types";

export function H2({ children }: WithChildren) {
  return (
    <h2 className="text-3xl font-black text-foreground">{children}</h2>
  );
}

export function H3({ children }: WithChildren) {
  return (
    <h3 className="mt-8 text-xl font-bold text-foreground">{children}</h3>
  );
}

export function ConclusionBox({ children }: WithChildren) {
  return (
    <div className="my-6 border-2 border-conclusion-border bg-conclusion-bg px-5 py-4 text-base leading-relaxed text-foreground">
      {children}
    </div>
  );
}

export function Lead({ children }: WithChildren) {
  return (
    <p className="text-lg leading-relaxed text-muted-foreground">{children}</p>
  );
}

export function LeadMuted({ children }: WithChildren) {
  return (
    <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
      {children}
    </p>
  );
}

export function GroupLabel({ children }: WithChildren) {
  return (
    <h3 className="mt-8 text-xl font-bold text-foreground">{children}</h3>
  );
}

export function Note({ children }: WithChildren) {
  return (
    <p className="mt-4 text-sm text-muted-foreground">{children}</p>
  );
}

export function ArticleTable({ head, rows, note }: ArticleTableProps) {
  return (
    <>
      <div className="mt-4 overflow-x-auto">
        <table className="min-w-[640px] w-full border-collapse text-left text-base">
          <thead>
            <tr className="bg-foreground text-brand">
              {head.map((h) => (
                <th key={h} className="px-4 py-3 font-bold">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            {rows.map((r, i) => (
              <tr key={i} className="border-b border-border bg-card">
                {r.map((c, j) => (
                  <td
                    key={j}
                    className={`px-4 py-3 ${j === 0 ? "font-bold text-foreground" : ""}`}
                  >
                    {c}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note && (
        <p className="mt-4 text-sm text-muted-foreground">{note}</p>
      )}
    </>
  );
}

export function ArticleFigure({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl bg-primary-light">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 1152px"
      />
    </figure>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 space-y-2 text-lg leading-relaxed text-muted-foreground">
      {items.map((t) => (
        <li key={t} className="flex gap-2">
          <span aria-hidden="true">☑️</span>
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

export function ArticleSection({ children }: WithChildren) {
  return <section className="mt-12">{children}</section>;
}
