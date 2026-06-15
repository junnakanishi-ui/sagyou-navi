import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Clock, ExternalLink } from "lucide-react";
import { buildUrl, STORE_LINKS } from "@/lib/product-links";
import { H2 } from "./primitives";
import type {
  CategoryLink,
  FaqItem,
  RelatedArticle,
  WithChildren,
} from "./types";

export type { FaqItem, CategoryLink, RelatedArticle };

export { STORE_LINKS as YQ };

const CATEGORY_BADGE: Record<
  "guide" | "compare" | "howto",
  { label: string; className: string }
> = {
  guide: {
    label: "選び方ガイド",
    className: "bg-category-guide-bg text-category-guide",
  },
  compare: {
    label: "比較・違い",
    className: "bg-category-compare-bg text-category-compare",
  },
  howto: {
    label: "使い方・コツ",
    className: "bg-category-howto-bg text-accent-amber-foreground",
  },
};

export function Breadcrumb({ current }: { current: string }) {
  return (
    <div className="border-b border-border bg-card py-3">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <nav
          className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground"
          aria-label="パンくず"
        >
          <Link href="/" className="hover:text-primary">
            トップ
          </Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="/articles" className="hover:text-primary">
            記事一覧
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground">{current}</span>
        </nav>
      </div>
    </div>
  );
}

export function ArticleHeader({
  category,
  readingTime,
  title,
  subtitle,
}: {
  category: "guide" | "compare" | "howto";
  readingTime: number;
  title: string;
  subtitle: string;
}) {
  const badge = CATEGORY_BADGE[category];

  return (
    <section className="bg-card py-12">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-4 flex items-center gap-3">
          <span
            className={`rounded-full px-3 py-1 text-sm font-bold ${badge.className}`}
          >
            {badge.label}
          </span>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Clock className="h-3 w-3" />
            <span>約{readingTime}分で読める</span>
          </div>
        </div>
        <h1 className="text-3xl font-black leading-tight text-foreground sm:text-4xl">
          {title}
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">{subtitle}</p>
      </div>
    </section>
  );
}

export function HeroImage({ src, alt }: { src: string; alt: string }) {
  return (
    <section className="bg-card pb-10">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-primary-light">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 1152px"
          />
        </div>
      </div>
    </section>
  );
}

export function ArticleContent({ children }: WithChildren) {
  return (
    <article className="mx-auto max-w-6xl px-4 pb-16 md:px-6">
      {children}
    </article>
  );
}

export function buildFaqJsonLd(faq: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function FaqJsonLd({ faq }: { faq: FaqItem[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(buildFaqJsonLd(faq)),
      }}
    />
  );
}

export function FaqSection({ faq }: { faq: FaqItem[] }) {
  return (
    <section className="mt-12">
      <H2>よくある質問（FAQ）</H2>
      <div className="mt-6 space-y-3">
        {faq.map((f) => (
          <details
            key={f.q}
            className="group rounded-2xl border border-border bg-card"
          >
            <summary className="cursor-pointer list-none px-6 py-4 font-bold text-foreground marker:content-none [&::-webkit-details-marker]:hidden">
              <span className="flex items-center justify-between gap-4">
                {f.q}
                <ChevronRight className="h-5 w-5 shrink-0 text-muted-foreground transition group-open:rotate-90" />
              </span>
            </summary>
            <div className="border-t border-border px-6 py-4 text-base leading-relaxed text-muted-foreground">
              {f.a}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

export function ArticleCTA({
  title,
  description,
  buttonLabel,
  url,
  slug,
  utcSuffix = "cta",
}: {
  title: string;
  description?: string;
  buttonLabel: string;
  url: string;
  slug: string;
  utcSuffix?: string;
}) {
  return (
    <section className="mt-12 rounded-2xl bg-secondary p-8 text-secondary-foreground md:p-10">
      <h2 className="text-2xl font-black text-white">{title}</h2>
      {description && (
        <p className="mt-3 text-footer-muted">{description}</p>
      )}
      <a
        href={buildUrl(url, `${slug}_${utcSuffix}`)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-store-yahoo px-6 py-3 text-sm font-bold text-white transition hover:bg-store-yahoo-hover"
      >
        {buttonLabel}
        <ExternalLink className="h-4 w-4" aria-hidden />
      </a>
    </section>
  );
}

export function CategoryLinks({
  links,
  slug,
}: {
  links: CategoryLink[];
  slug: string;
}) {
  return (
    <div className="mt-10 flex flex-wrap gap-2">
      {links.map((c) => (
        <a
          key={c.uc}
          href={buildUrl(c.url, `${slug}_${c.uc}`)}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-border bg-card px-4 py-2 text-sm font-bold text-foreground transition hover:border-primary/30 hover:bg-primary-light"
        >
          {c.label}
        </a>
      ))}
    </div>
  );
}

export function RelatedArticles({ items }: { items: RelatedArticle[] }) {
  if (items.length === 0) return null;

  return (
    <>
      <section className="mt-12">
        <h2 className="text-2xl font-black text-foreground">関連記事</h2>
        <ul className="mt-4 space-y-2">
          {items.map((r) => (
            <li key={r.href}>
              <Link
                href={r.href}
                className="inline-flex items-center gap-1 font-bold text-primary hover:underline"
              >
                {r.label}
                <ChevronRight className="h-4 w-4" />
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <div className="mt-10 text-center">
        <Link
          href="/articles"
          className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-sm font-bold text-foreground transition hover:border-primary/30"
        >
          記事一覧に戻る
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
    </>
  );
}

export function Disclaimer({ extra }: { extra?: string }) {
  return (
    <p className="mt-12 border-t border-border pt-8 text-sm leading-relaxed text-muted-foreground">
      運営：
      <a
        href="https://trade-sign.jp/"
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold text-primary hover:underline"
      >
        株式会社トレード
      </a>
      （グリーンクロスグループ）｜本記事は一般的な情報提供を目的としたものです。
      {extra
        ? ` ${extra}`
        : " 価格・在庫・仕様は変動する場合があり、最新情報は各商品ページでご確認ください。"}
    </p>
  );
}
