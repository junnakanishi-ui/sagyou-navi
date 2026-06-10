export type Category = {
  slug: string;
  name: string;
  description: string;
  yahooUrl: string;
  featured: boolean;
};

export const CATEGORIES: Category[] = [
  {
    slug: "carts",
    name: "運搬台車",
    description:
      "カルティオをはじめ、耐荷重・静音・折りたたみで選ぶ現場の定番。",
    yahooUrl:
      "https://store.shopping.yahoo.co.jp/signcity-yshop/b1bfc8c2c2.html",
    featured: true,
  },
  {
    slug: "workbench",
    name: "作業台",
    description: "高さ・天板・耐荷重で選ぶ。軽量から重量用まで。",
    yahooUrl:
      "https://store.shopping.yahoo.co.jp/signcity-yshop/e2ea8bb6c2c.html",
    featured: true,
  },
  {
    slug: "toolbox",
    name: "工具箱",
    description: "スチール・樹脂・キャビネット型。持ち運びと収納力で選ぶ。",
    yahooUrl:
      "https://store.shopping.yahoo.co.jp/signcity-yshop/9129bf6abc8.html",
    featured: true,
  },
  {
    slug: "tool-wagon",
    name: "ツールワゴン",
    description: "工具を動かす収納。段数・耐荷重・引き出しの有無で選ぶ。",
    yahooUrl:
      "https://store.shopping.yahoo.co.jp/signcity-yshop/a5c4a1bca5.html",
    featured: true,
  },
  {
    slug: "protective-gear",
    name: "保護具",
    description: "ヘルメット・手袋・保護メガネ。現場の安全の基本装備。",
    yahooUrl:
      "https://store.shopping.yahoo.co.jp/signcity-yshop/caddb8eeb6.html",
    featured: true,
  },
  {
    slug: "ladders",
    name: "はしご・脚立",
    description: "天板高さ・最大使用質量・形状で選ぶ昇降用品。",
    yahooUrl:
      "https://store.shopping.yahoo.co.jp/signcity-yshop/a44aac2fb47.html",
    featured: true,
  },
  {
    slug: "safety",
    name: "安全用品",
    description: "標識・カラーコーン・区画整理。現場と倉庫の安全管理に。",
    yahooUrl:
      "https://store.shopping.yahoo.co.jp/signcity-yshop/b0c2c1b4cd.html",
    featured: true,
  },
  {
    slug: "power-tools",
    name: "電動・油圧・空圧工具",
    description: "ドリル・グラインダーから油圧・エア工具まで。",
    yahooUrl:
      "https://store.shopping.yahoo.co.jp/signcity-yshop/c5c5c6b0a1.html",
    featured: true,
  },
  {
    slug: "hardware",
    name: "ネジ・金物・建築資材",
    description: "",
    yahooUrl:
      "https://store.shopping.yahoo.co.jp/signcity-yshop/a5cda5b8a1.html",
    featured: false,
  },
  {
    slug: "shelving",
    name: "物品棚",
    description: "",
    yahooUrl:
      "https://store.shopping.yahoo.co.jp/signcity-yshop/caaac9cac3.html",
    featured: false,
  },
  {
    slug: "parts-case",
    name: "パーツケース",
    description: "",
    yahooUrl:
      "https://store.shopping.yahoo.co.jp/signcity-yshop/a5d1a1bca5.html",
    featured: false,
  },
  {
    slug: "display",
    name: "陳列機器",
    description: "",
    yahooUrl:
      "https://store.shopping.yahoo.co.jp/signcity-yshop/c4c4cef3b5.html",
    featured: false,
  },
  {
    slug: "containers",
    name: "コンテナ・パレット",
    description: "",
    yahooUrl:
      "https://store.shopping.yahoo.co.jp/signcity-yshop/a5b3a5f3a5.html",
    featured: false,
  },
  {
    slug: "flooring",
    name: "床材用品",
    description: "",
    yahooUrl:
      "https://store.shopping.yahoo.co.jp/signcity-yshop/daee2c2bbb0.html",
    featured: false,
  },
  {
    slug: "tape",
    name: "テープ用品",
    description: "",
    yahooUrl:
      "https://store.shopping.yahoo.co.jp/signcity-yshop/a6ba155c2ca.html",
    featured: false,
  },
  {
    slug: "tool-bags",
    name: "バックパック・ツールバッグ",
    description: "",
    yahooUrl:
      "https://store.shopping.yahoo.co.jp/signcity-yshop/505d32aac5a.html",
    featured: false,
  },
  {
    slug: "cutting-tools",
    name: "切削工具",
    description: "",
    yahooUrl:
      "https://store.shopping.yahoo.co.jp/signcity-yshop/c0dabaefb9.html",
    featured: false,
  },
  {
    slug: "material-handling",
    name: "荷役用品",
    description: "",
    yahooUrl:
      "https://store.shopping.yahoo.co.jp/signcity-yshop/b2d9ccf2cd.html",
    featured: false,
  },
  {
    slug: "magnets",
    name: "マグネット用品",
    description: "",
    yahooUrl:
      "https://store.shopping.yahoo.co.jp/signcity-yshop/aa255ea5bd0.html",
    featured: false,
  },
  {
    slug: "hand-tools",
    name: "手作業工具",
    description: "",
    yahooUrl:
      "https://store.shopping.yahoo.co.jp/signcity-yshop/bceabaeeb6.html",
    featured: false,
  },
  {
    slug: "construction-lighting",
    name: "工事・照明用品",
    description: "",
    yahooUrl:
      "https://store.shopping.yahoo.co.jp/signcity-yshop/b9a9bbf6a1.html",
    featured: false,
  },
  {
    slug: "hoses",
    name: "ホース・散水用品",
    description: "",
    yahooUrl:
      "https://store.shopping.yahoo.co.jp/signcity-yshop/a5d5aa5a2a5.html",
    featured: false,
  },
  {
    slug: "environment",
    name: "環境改善用品",
    description: "",
    yahooUrl:
      "https://store.shopping.yahoo.co.jp/signcity-yshop/b4c4b6adb2.html",
    featured: false,
  },
  {
    slug: "tooling-jigs",
    name: "ツーリング・治工具",
    description: "",
    yahooUrl:
      "https://store.shopping.yahoo.co.jp/signcity-yshop/a5524c1baca.html",
    featured: false,
  },
  {
    slug: "mold-supplies",
    name: "金型用品",
    description: "",
    yahooUrl:
      "https://store.shopping.yahoo.co.jp/signcity-yshop/b6e2b7bfcd.html",
    featured: false,
  },
];

export const FEATURED_CATEGORIES = CATEGORIES.filter((c) => c.featured);
export const COMPACT_CATEGORIES = CATEGORIES.filter((c) => !c.featured);

export function categoryImagePath(slug: string): string {
  return `/images/categories/${slug}.jpg`;
}
