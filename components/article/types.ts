import type { ReactNode } from "react";

export interface ProductLinks {
  gcSelect?: string;
  rakuten?: string;
  yahoo?: string;
}

export interface ArticleProduct {
  id: string;
  name: string;
  note?: string;
  links?: ProductLinks;
}

export interface ProductGridProps {
  items: ArticleProduct[];
  cols?: 2 | 3;
  slug: string;
}

export interface ArticleTableProps {
  head: string[];
  rows: string[][];
  note?: string;
}

export interface WithChildren {
  children: ReactNode;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface CategoryLink {
  label: string;
  url: string;
  uc: string;
}

export interface RelatedArticle {
  href: string;
  label: string;
}
