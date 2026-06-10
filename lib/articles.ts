export type Article = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  category: "guide" | "compare" | "howto";
  categoryLabel: string;
  thumbnail: string;
  date: string;
  readTime: string;
  available: boolean;
  path: string;
};

export const ARTICLES: Article[] = [
  {
    slug: "carutio-cart-guide",
    title:
      "軽量樹脂台車カルティオの選び方｜サイズ・耐荷重・静音・ストッパーの違い",
    shortTitle: "カルティオ台車の選び方｜サイズ・耐荷重・静音の違い",
    description:
      "トラスコ中山の軽量樹脂台車「カルティオ」を、工場・倉庫・建設現場の担当者向けに解説。サイズ・耐荷重・静音キャスター・ストッパーなど、現場で迷いやすい選定ポイントを整理します。",
    category: "guide",
    categoryLabel: "選び方ガイド",
    thumbnail: "/images/articles/carutio-cart-guide-hero.jpg",
    date: "2026-06-10",
    readTime: "約10分",
    available: true,
    path: "/articles/carutio-cart-guide",
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((article) => article.slug === slug);
}

export function getAvailableArticles(): Article[] {
  return ARTICLES.filter((article) => article.available);
}
