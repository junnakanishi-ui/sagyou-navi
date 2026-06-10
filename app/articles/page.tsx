import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  ChevronRight,
  Clock,
  FileText,
} from "lucide-react";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { ARTICLES, type Article } from "@/lib/articles";

export const metadata: Metadata = {
  title: "記事一覧｜作業用品の選び方・比較・使い方",
  description:
    "台車・運搬具・現場作業用品の選び方ガイド、比較記事、使い方・コツを一覧で掲載。工場・倉庫・建設現場の担当者向けに解説します。",
  openGraph: {
    title: "記事一覧｜作業用品の選び方・比較・使い方",
    description:
      "作業用品の選び方・違い・使い方を解説する記事一覧です。",
    type: "website",
  },
};

const categoryStyles: Record<
  Article["category"],
  { badge: string; filter: string }
> = {
  guide: {
    badge: "bg-category-guide-bg text-category-guide",
    filter: "bg-foreground text-brand",
  },
  compare: {
    badge: "bg-category-compare-bg text-category-compare",
    filter: "bg-foreground text-white",
  },
  howto: {
    badge: "bg-category-howto-bg text-accent-amber-foreground",
    filter: "bg-brand text-foreground",
  },
};

const categoryFilters: { key: "all" | Article["category"]; label: string }[] =
  [
    { key: "all", label: "すべて" },
    { key: "guide", label: "選び方ガイド" },
    { key: "compare", label: "比較・違い" },
    { key: "howto", label: "使い方・コツ" },
  ];

function formatDate(date: string): string {
  if (!date) return "";
  const [year, month, day] = date.split("-");
  return `${year}年${Number(month)}月${Number(day)}日`;
}

function sortArticles(articles: Article[]): Article[] {
  return [...articles].sort((a, b) => {
    if (a.available !== b.available) return a.available ? -1 : 1;
    if (a.date && b.date) return b.date.localeCompare(a.date);
    if (a.date) return -1;
    if (b.date) return 1;
    return 0;
  });
}

function ArticleListCard({ article }: { article: Article }) {
  const styles = categoryStyles[article.category];
  const isAvailable = article.available;

  const cardInner = (
    <>
      <div className="relative h-48 w-full overflow-hidden bg-primary-light">
        {article.thumbnail ? (
          <Image
            src={article.thumbnail}
            alt={article.shortTitle}
            fill
            className={`object-cover transition ${isAvailable ? "group-hover:scale-105" : ""}`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <BookOpen className="h-12 w-12 text-primary-muted" />
          </div>
        )}
        <div className="absolute left-3 top-3">
          <span
            className={`rounded-full px-3 py-1 text-xs font-bold ${styles.badge}`}
          >
            {article.categoryLabel}
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h2 className="mb-2 text-base font-bold leading-snug text-foreground group-hover:text-primary">
          {article.shortTitle}
        </h2>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
          {article.description}
        </p>
        <div className="flex items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
            {article.date && <span>{formatDate(article.date)}</span>}
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {article.readTime}で読める
            </span>
          </div>
          {isAvailable ? (
            <span className="flex shrink-0 items-center gap-1 text-xs font-bold text-primary">
              読む
              <ArrowRight className="h-3 w-3" />
            </span>
          ) : (
            <span className="shrink-0 text-xs font-bold text-muted-foreground">
              準備中
            </span>
          )}
        </div>
      </div>
    </>
  );

  if (!isAvailable) {
    return (
      <article className="flex flex-col overflow-hidden rounded-2xl border border-border bg-muted opacity-75">
        {cardInner}
      </article>
    );
  }

  return (
    <Link
      href={article.path}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      {cardInner}
    </Link>
  );
}

type PageProps = {
  searchParams: Promise<{ category?: string }>;
};

export default async function ArticlesIndexPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const activeCategory = params.category ?? "all";
  const isValidCategory = categoryFilters.some(
    (item) => item.key === activeCategory
  );
  const filterKey = isValidCategory ? activeCategory : "all";

  const filteredArticles =
    filterKey === "all"
      ? ARTICLES
      : ARTICLES.filter((article) => article.category === filterKey);

  const sortedArticles = sortArticles(filteredArticles);
  const availableCount = ARTICLES.filter((a) => a.available).length;

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />

      <main className="flex-1 bg-gradient-to-b from-primary-light/30 via-background to-background">
        <nav className="mx-auto max-w-6xl px-4 pt-8 pb-4 text-sm text-muted-foreground md:px-6">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-primary">
                トップ
              </Link>
            </li>
            <li>
              <ChevronRight className="inline h-4 w-4" />
            </li>
            <li className="text-foreground">記事一覧</li>
          </ol>
        </nav>

        <header className="mx-auto max-w-6xl px-4 pb-10 md:px-6">
          <p className="mb-3 text-sm font-bold uppercase tracking-wider text-primary">
            Articles
          </p>
          <h1 className="text-3xl font-black tracking-tight text-foreground md:text-4xl">
            作業用品ガイド・記事一覧
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
            台車・運搬具・現場作業用品の選び方、比較、使い方・メンテナンスを目的別に解説します。
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2">
              <FileText className="h-4 w-4 text-primary" />
              公開中{" "}
              <strong className="text-foreground">{availableCount}</strong> 件
            </span>
          </div>
        </header>

        <section className="mx-auto max-w-6xl px-4 pb-8 md:px-6">
          <div className="flex flex-wrap gap-2">
            {categoryFilters.map((item) => {
              const href =
                item.key === "all"
                  ? "/articles"
                  : `/articles?category=${item.key}`;
              const isActive = filterKey === item.key;
              const filterStyle =
                item.key !== "all"
                  ? categoryStyles[item.key].filter
                  : "bg-primary text-primary-foreground";
              return (
                <Link
                  key={item.key}
                  href={href}
                  className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                    isActive
                      ? `${filterStyle} shadow-sm`
                      : "border border-border bg-card text-muted-foreground hover:border-primary/30 hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-16 md:px-6">
          {sortedArticles.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {sortedArticles.map((article) => (
                <ArticleListCard key={article.slug} article={article} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-border bg-card/80 px-6 py-16 text-center">
              <BookOpen className="mx-auto mb-3 h-10 w-10 text-primary-muted" />
              <p className="text-sm text-muted-foreground">
                該当する記事はまだありません。
              </p>
              <Link
                href="/articles"
                className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-primary hover:underline"
              >
                すべての記事を見る
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          )}
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
