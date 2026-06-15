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
    slug: "warehouse-heatstroke-taisaku",
    title:
      "倉庫作業の熱中症対策｜工場扇・スポットクーラー・冷却ベストで現場を守る方法",
    shortTitle: "倉庫作業の熱中症対策",
    description:
      "倉庫作業の熱中症対策を、WBGT測定・工場扇・スポットクーラー・冷却ベスト・休憩所整備・2025年義務化対応の観点で解説。ローディングドック・ピッキング・梱包・出荷などエリア別に、法人が準備すべき暑さ対策用品と運用チェックリストを整理します。",
    category: "guide",
    categoryLabel: "選び方ガイド",
    thumbnail: "/images/articles/warehouse-heatstroke-prevention-hero.jpg",
    date: "2026-06-12",
    readTime: "約13分",
    available: true,
    path: "/articles/warehouse-heatstroke-taisaku",
  },
  {
    slug: "kartio-big-offroad",
    title:
      "カルティオビッグ・オフロードとは？悪路・段差に強い大型樹脂台車の使いどころ",
    shortTitle: "カルティオビッグ オフロード",
    description:
      "カルティオビッグ オフロードは悪路・段差に強い大型樹脂台車。ただし均等荷重100kgで、通常のカルティオビッグ400kgとは役割が違います。標準カルティオとの違い、路面別・シチュエーション別の選び方、選定ミス防止まで実務解説。",
    category: "compare",
    categoryLabel: "比較・違い",
    thumbnail: "/images/articles/kartio-big-offroad-hero.jpg",
    date: "2026-06-12",
    readTime: "約10分",
    available: true,
    path: "/articles/kartio-big-offroad",
  },
  {
    slug: "kartio-load-capacity",
    title:
      "カルティオは何kgまで載せられる？均等荷重200kgの正しい意味と過積載のリスク",
    shortTitle: "カルティオの耐荷重",
    description:
      "カルティオの耐荷重は均等荷重200kg。その正しい読み方と、過積載だけでなく偏荷重・高積み・斜面使用といった見落としがちなリスクを実務解説。足りない場合のカルティオビッグ・weegoとの耐荷重比較、導入前チェックリスト付き。",
    category: "howto",
    categoryLabel: "使い方・コツ",
    thumbnail: "/images/articles/kartio-load-capacity-hero.jpg",
    date: "2026-06-12",
    readTime: "約9分",
    available: true,
    path: "/articles/kartio-load-capacity",
  },
  {
    slug: "trusco-hand-pallet-erabikata",
    title:
      "トラスコのハンドパレット（ハンドリフト）の選び方｜フォーク長・能力・低床の違い",
    shortTitle: "ハンドパレットの選び方",
    description:
      "ハンドパレットの選び方を、パレット寸法→フォーク長→能力(1t/1.5t/2t/3t)→低床式→手動/電動→ハンドリフターとの違いの順で実務解説。現場別早見表・選定ミス防止・導入前チェックリスト付き。",
    category: "guide",
    categoryLabel: "選び方ガイド",
    thumbnail: "/images/articles/trusco-hand-pallet-hero.jpg",
    date: "2026-06-12",
    readTime: "約11分",
    available: true,
    path: "/articles/trusco-hand-pallet-erabikata",
  },
  {
    slug: "safety-shoes-jis-jsaa",
    title:
      "安全靴・プロテクティブスニーカーの違い｜JIS T8101とJSAA規格の見方",
    shortTitle: "安全靴・プロスニーカーの違い",
    description:
      "安全靴(JIS T8101)とプロテクティブスニーカー(JSAA認定)の違いを、規格の見方・現場別早見表・法人導入チェックリストで整理。A種B種の違い、選定ミスの防ぎ方まで、現場で使える作業靴の選び方を解説します。",
    category: "compare",
    categoryLabel: "比較・違い",
    thumbnail: "/images/articles/safety-shoes-jis-jsaa-hero.jpg",
    date: "2026-06-12",
    readTime: "約10分",
    available: true,
    path: "/articles/safety-shoes-jis-jsaa",
  },
  {
    slug: "caritio-720-780-compare",
    title:
      "カルティオ MPK-720とMPK-780の違いは？新旧サイズ早見表で選ぶ軽量台車",
    shortTitle: "カルティオ MPK-720/780 の違い",
    description:
      "カルティオMPK-720とMPK-780の違いを新旧比較表で整理。サイズ・荷重は同じで本質は「軽さ」。用途別早見表・選び方表・導入前チェックリストで、現場に合う軽量台車の選定を支援します。",
    category: "compare",
    categoryLabel: "比較・違い",
    thumbnail: "/images/articles/kartio-mpk720-mpk780-hero.jpg",
    date: "2026-06-12",
    readTime: "約8分",
    available: true,
    path: "/articles/caritio-720-780-compare",
  },
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
