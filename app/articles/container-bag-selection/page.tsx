import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";

const SLUG = "container-bag-selection";
const SITE_URL = "https://sagyou-navi.com";
const ARTICLE_IMG = "/images/articles";

const IMG = {
  hero: `${ARTICLE_IMG}/container-bag-selection-hero.jpg`,
  capacity: `${ARTICLE_IMG}/container-bag-capacity-comparison.jpg`,
  discharge: `${ARTICLE_IMG}/container-bag-discharge-spout-comparison.jpg`,
  material: `${ARTICLE_IMG}/powder-pellet-container-bag-leak-prevention.jpg`,
  related: `${ARTICLE_IMG}/container-bag-hand-pallet-transport.jpg`,
  checklist: `${ARTICLE_IMG}/container-bag-procurement-checklist.jpg`,
};

export const metadata: Metadata = {
  title:
    "コンテナバッグの選び方｜容量・耐荷重・排出口あり/なし・水切り・漏れ防止タイプの違いを解説｜作業用品ナビ",
  description:
    "コンテナバッグの選び方を、容量・耐荷重・丸型/角型・排出口あり/なし・水切り・漏れ防止・耐候性・内袋入り・自立型・全開排出の違いから解説。土砂・粉体・廃棄物・枝葉など内容物別の最適タイプ、法人向け発注前チェックリスト、フレコン・ハンドパレット等の関連商品まで整理します。",
  alternates: { canonical: `${SITE_URL}/articles/${SLUG}` },
  openGraph: {
    title:
      "コンテナバッグの選び方｜容量・耐荷重・排出口あり/なし・水切り・漏れ防止タイプの違いを解説",
    description:
      "コンテナバッグの選び方を、容量・耐荷重・丸型/角型・排出口あり/なし・水切り・漏れ防止・耐候性・内袋入り・自立型・全開排出の違いから解説。土砂・粉体・廃棄物・枝葉など内容物別の最適タイプ、法人向け発注前チェックリスト、フレコン・ハンドパレット等の関連商品まで整理します。",
    type: "article",
    images: [IMG.hero],
  },
};

/* ============================================================
   URL ヘルパー（UTM は # の前に付与。既存エンコードは再エンコードしない）
   ============================================================ */
const UTM = "utm_source=sagyou_navi";

function buildUrl(url: string, utm: string) {
  if (!url) return url;
  const h = url.indexOf("#");
  const append = (b: string) => `${b}${b.includes("?") ? "&" : "?"}${utm}`;
  if (h === -1) return append(url);
  return `${append(url.slice(0, h))}${url.slice(h)}`;
}

const GC = (p: string) =>
  buildUrl(`https://www.gc-select.com/products/${p}`, UTM);
const SC_RES = "shopping-pc-web-result-storesch-rsltlst-img";
const SC_RES_TITLE = "shopping-pc-web-result-storesch-rsltlst-title";
const SC_CAT = "shopping-pc-web-category-storeitm-rsltlst-img";
const YBQ = (id: string, sc: string) =>
  buildUrl(
    `https://store.shopping.yahoo.co.jp/signcity-yshop/${id}.html?sc_i=${sc}&ea=`,
    UTM
  );
const YB = (id: string) =>
  buildUrl(`https://store.shopping.yahoo.co.jp/signcity-yshop/${id}.html`, UTM);

const LIST_BAG = buildUrl(
  "https://www.gc-select.com/pages/search-results-page?q=%E3%82%B3%E3%83%B3%E3%83%86%E3%83%8A",
  UTM
);
const LIST_HP_HL = buildUrl(
  "https://store.shopping.yahoo.co.jp/signcity-yshop/c8c2c1f7b5.html",
  UTM
);
const LIST_HLIFT = buildUrl(
  "https://store.shopping.yahoo.co.jp/signcity-yshop/search.html?p=%E3%83%8F%E3%83%B3%E3%83%89%E3%83%AA%E3%83%95%E3%82%BF%E3%83%BC#CentSrchFilter1",
  UTM
);
const LIST_DAISHA = buildUrl(
  "https://store.shopping.yahoo.co.jp/signcity-yshop/b1bfc8c2c2.html?sc_i=shopping-pc-web-category-storeitm-cat_nrw-slctc",
  UTM
);
const LIST_TRUSCO = buildUrl(
  "https://store.shopping.yahoo.co.jp/signcity-yshop/a5c8a5e9a5.html?sc_i=shopping-pc-web-category-storeitm-cat_nrw-slctp&prom=1&view=grid",
  UTM
);

type Item = { id: string; url: string; name: string };

const B100_OR: Item = {
  id: "6300052855",
  url: GC("6300052855"),
  name: "コンテナバッグ 丸型 100L オレンジ 耐荷重100kg 排出口無し（10枚）",
};
const B100_BL: Item = {
  id: "6300052854",
  url: GC("6300052854"),
  name: "コンテナバッグ 丸型 100L 青色 耐荷重100kg 排出口無し（10枚）",
};
const B180_JI: Item = {
  id: "6300052868",
  url: GC("6300052868"),
  name: "自立型コンテナバッグ 角型 180L 耐荷重400kg 排出口無し（10枚）",
};
const B200_Y: Item = {
  id: "6300052857",
  url: GC("6300052857"),
  name: "コンテナバッグ 丸型 200L 耐荷重1000kg 排出口あり（10枚）",
};
const B200_N: Item = {
  id: "6300052856",
  url: GC("6300052856"),
  name: "コンテナバッグ 丸型 200L 耐荷重1000kg 排出口無し（10枚）",
};
const B200_DRUM: Item = {
  id: "6300052859",
  url: GC("6300052859"),
  name: "ドラム缶用コンテナバッグ 丸型 漏れ防止 200L 耐荷重1000kg 排出口あり（10枚）",
};
const B200_LEAK: Item = {
  id: "6300052858",
  url: GC("6300052858"),
  name: "コンテナバッグ 丸型 漏れ防止 200L 耐荷重1000kg 排出口あり（10枚）",
};
const B300_Y: Item = {
  id: "6300052860",
  url: GC("6300052860"),
  name: "コンテナバッグ 丸型 300L 耐荷重1000kg 排出口あり（10枚）",
};
const B300_OPEN: Item = {
  id: "6300052861",
  url: GC("6300052861"),
  name: "小型全開排出コンテナバッグ 丸型 300L 耐荷重1000kg（10枚）",
};
const B350_Y: Item = {
  id: "6300052862",
  url: GC("6300052862"),
  name: "コンテナバッグ 丸型 350L 耐荷重1000kg 排出口あり（10枚）",
};
const B350_K: Item = {
  id: "6300052869",
  url: GC("6300052869"),
  name: "コンテナバッグ 角型 350L 耐荷重200kg 排出口無し（10枚）",
};
const B415_K: Item = {
  id: "6300052870",
  url: GC("6300052870"),
  name: "コンテナバッグ 角型 415L 耐荷重1000kg 排出口無し（10枚）",
};
const B450_LEAK: Item = {
  id: "6300052863",
  url: GC("6300052863"),
  name: "漏れ防止コンテナバッグ 丸型 450L 耐荷重1000kg 排出口あり（10枚）",
};
const B500_Y: Item = {
  id: "6300052865",
  url: GC("6300052865"),
  name: "コンテナバッグ 丸型 500L 耐荷重1000kg 排出口あり（10枚）",
};
const B500_N: Item = {
  id: "6300052864",
  url: GC("6300052864"),
  name: "コンテナバッグ 丸型 500L 耐荷重1000kg 排出口無し（10枚）",
};
const B620_OPEN: Item = {
  id: "6300052866",
  url: GC("6300052866"),
  name: "全開排出コンテナバッグ 丸型 620L 耐荷重1000kg（10枚）",
};
const B690_K: Item = {
  id: "6300052875",
  url: GC("6300052875"),
  name: "コンテナバッグ 角型 690L 耐荷重1000kg 排出口無し（10枚）",
};
const B800_K: Item = {
  id: "6300052876",
  url: GC("6300052876"),
  name: "コンテナバッグ 角型 800L 耐荷重1000kg 排出口無し（10枚）",
};
const B850_Y: Item = {
  id: "6300052872",
  url: GC("6300052872"),
  name: "コンテナバッグ 丸型 850L 耐荷重1000kg 排出口あり（10枚）",
};
const B850_INNER: Item = {
  id: "6300052873",
  url: GC("6300052873"),
  name: "コンテナバッグ 丸型 内袋入り 850L 耐荷重1000kg 排出口あり（10枚）",
};
const B850_LEAK: Item = {
  id: "6300052871",
  url: GC("6300052871"),
  name: "コンテナバッグ 丸型 漏れ防止 850L 耐荷重1000kg 排出口なし（10枚）",
};
const B1000_N: Item = {
  id: "6300052874",
  url: GC("6300052874"),
  name: "コンテナバッグ 丸型 1000L 耐荷重1000kg 排出口無し（10枚）",
};
const B1000_MIZU_Y: Item = {
  id: "6300052888",
  url: GC("6300052888"),
  name: "水切りコンテナバッグ 丸型 1000L 耐荷重1000kg 排出口あり（10枚）",
};
const B1000_MIZU_N: Item = {
  id: "6300052887",
  url: GC("6300052887"),
  name: "水切りコンテナバッグ 丸型 1000L 耐荷重1000kg 排出口無し（10枚）",
};
const B1000_TAIKOU: Item = {
  id: "6300052886",
  url: GC("6300052886"),
  name: "耐候性3年コンテナバッグ 丸型 1000L 耐荷重1000kg 排出口無し（10枚）",
};
const B1200_KAKUHEKI: Item = {
  id: "6300052899",
  url: GC("6300052899"),
  name: "隔壁形状保持コンテナバッグ 角型 1200L 耐荷重1000kg 排出口あり（10枚）",
};

const PC_CLEAR: Item = {
  id: "6300052912",
  url: GC("6300052912"),
  name: "透明パレットカバー 50枚セット",
};
const PC_RUBBER: Item = {
  id: "6300005498",
  url: GC("6300005498"),
  name: "パレットカバー ゴム付き 大",
};

const F_NO: Item = {
  id: "223182",
  url: YBQ("223182", SC_RES),
  name: "TRUSCO フレコンバッグ 排出口無し 10枚入り",
};
const F_YES: Item = {
  id: "223183",
  url: YBQ("223183", SC_RES),
  name: "TRUSCO フレコンバッグ 排出口有り 10枚入り",
};
const F_TAIKOU_NO: Item = {
  id: "225638",
  url: YBQ("225638", SC_RES),
  name: "TRUSCO 耐候性フレコンバッグ 排出口無し",
};
const F_TAIKOU_YES: Item = {
  id: "225639",
  url: YBQ("225639", SC_RES),
  name: "TRUSCO 耐候性フレコンバッグ 排出口有り",
};
const HP_1050: Item = {
  id: "168791",
  url: YBQ("168791", SC_RES_TITLE),
  name: "TRUSCO ハンドパレットトラック 1.5t L1050×W550mm",
};
const HP_850: Item = {
  id: "168790",
  url: YBQ("168790", SC_RES_TITLE),
  name: "TRUSCO ハンドパレットトラック 1.5t L850×W520mm",
};
const HP_2T: Item = {
  id: "168809",
  url: YBQ("168809", SC_RES_TITLE),
  name: "TRUSCO ハンドパレットトラック PK付 2t",
};
const HL_80: Item = {
  id: "168565",
  url: YB("168565"),
  name: "TRUSCO ハンドリフター 手動 80kg",
};
const HL_200: Item = {
  id: "168566",
  url: YB("168566"),
  name: "TRUSCO ハンドリフター 手動 200kg",
};
const HL_350: Item = {
  id: "168568",
  url: YB("168568"),
  name: "TRUSCO ハンドリフター 手動 350kg",
};
const DS_KARU: Item = {
  id: "167468",
  url: YBQ("167468", SC_CAT),
  name: "TRUSCO 業務用台車 カルティオ ブラック",
};
const DS_KARU_STOP: Item = {
  id: "190475",
  url: YBQ("190475", SC_CAT),
  name: "TRUSCO 業務用台車 カルティオ ブラック スチールストッパー付",
};
const DS_KARU_BIG: Item = {
  id: "216713",
  url: YBQ("216713", SC_CAT),
  name: "TRUSCO 樹脂台車 カルティオビッグ",
};

const BAGS_100: Item[] = [B100_OR, B100_BL];
const BAGS_180: Item[] = [B180_JI];
const BAGS_200: Item[] = [B200_Y, B200_N, B200_DRUM, B200_LEAK];
const BAGS_300_415: Item[] = [B300_Y, B300_OPEN, B350_Y, B350_K, B415_K];
const BAGS_450_620: Item[] = [B450_LEAK, B500_Y, B500_N, B620_OPEN];
const BAGS_690_850: Item[] = [B690_K, B800_K, B850_Y, B850_INNER, B850_LEAK];
const BAGS_1000_1200: Item[] = [
  B1000_N,
  B1000_MIZU_Y,
  B1000_MIZU_N,
  B1000_TAIKOU,
  B1200_KAKUHEKI,
];

const productImage = (id: string) => `/products/${id}.jpg`;

const FAQ_ITEMS = [
  {
    q: "コンテナバッグとフレコンバッグは違いますか？",
    a: "ほぼ同じ大型袋を指す呼び方で、明確な線引きはありません。メーカーや販売店で呼称が異なるため、名称ではなく容量・耐荷重・排出口・材質などの仕様で選ぶのが確実です。",
  },
  {
    q: "排出口ありと排出口なしはどちらを選べばよいですか？",
    a: "粉体・粒体・原料を下から出すなら排出口あり、土砂・枝葉・瓦礫・廃材の回収で反転・開封で出すなら排出口なしが使いやすいです。排出作業の動線でお選びください。",
  },
  {
    q: "1000Lタイプはどんな用途に向いていますか？",
    a: "大容量の土砂・粉体・廃棄物・原料の保管・運搬に向く汎用サイズです。水分を含むなら水切り、屋外保管なら耐候性など、内容物・環境に応じてタイプを選びます。入る量や重さは内容物の比重で変わるため、最大充填荷重を超えない範囲でお使いください。",
  },
  {
    q: "粉体が漏れにくいタイプはありますか？",
    a: "漏れ防止タイプや内袋入りタイプが候補です。粒度の細かい粉体は漏れ防止、原料・出荷用途は内袋入りが使いやすくなります。内容物との相性は商品ページで確認してください。",
  },
  {
    q: "屋外保管にはどのタイプが向いていますか？",
    a: "紫外線劣化に配慮した耐候性タイプが向きます。あわせてパレットカバー（透明/ゴム付き）で雨よけ・保護をすると保管環境を整えやすくなります。耐候年数はメーカー公表値・使用環境で変わります。",
  },
  {
    q: "ハンドパレットや台車も必要ですか？",
    a: "運搬頻度や重量によります。パレット上のバッグを横持ちするならハンドパレット、高さ合わせや積み下ろしにはハンドリフター、構内移動には運搬台車が運搬効率の向上に役立ちます。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "作業用品ナビ",
      item: `${SITE_URL}/`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "コンテナバッグの選び方",
      item: `${SITE_URL}/articles/${SLUG}`,
    },
  ],
};

function CTA({
  href,
  title,
  body,
  label,
}: {
  href: string;
  title: string;
  body: string;
  label: string;
}) {
  return (
    <div className="my-8 rounded-lg border border-gray-300 bg-gray-50 p-6">
      <p className={cls.ctaH3}>{title}</p>
      <p className={`mb-4 ${cls.bodySm}`}>{body}</p>
      <a
        href={href}
        target="_blank"
        rel="nofollow sponsored noopener"
        className="inline-block rounded-md bg-gray-900 px-6 py-3 font-bold text-white transition hover:bg-gray-700"
      >
        {label}
      </a>
    </div>
  );
}

function FinalCTA({
  href,
  title,
  body,
  label,
}: {
  href: string;
  title: string;
  body: string;
  label: string;
}) {
  return (
    <div className="my-10 rounded-xl border-2 border-gray-900 bg-gray-50 p-7 text-center">
      <p className="mb-2 text-lg font-bold tracking-wide text-gray-900 sm:text-xl">
        {title}
      </p>
      <p className={`mb-5 ${cls.bodySm}`}>{body}</p>
      <a
        href={href}
        target="_blank"
        rel="nofollow sponsored noopener"
        className="inline-block rounded-md bg-gray-900 px-8 py-4 text-lg font-bold text-white transition hover:bg-gray-700"
      >
        {label}
      </a>
    </div>
  );
}

function ProductLink({ href, name }: { href: string; name: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow sponsored noopener"
      className="block rounded-md bg-gray-900 px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-gray-700"
    >
      {name}
    </a>
  );
}

function ProductCard({ item }: { item: Item }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="nofollow sponsored noopener"
      className="group flex flex-col overflow-hidden rounded-xl border-2 border-gray-200 bg-white shadow-sm transition hover:border-gray-900 hover:shadow-lg"
    >
      <div className="aspect-square w-full overflow-hidden bg-gray-50">
        <img
          src={productImage(item.id)}
          alt={item.name}
          loading="lazy"
          className="h-full w-full object-contain p-3 transition group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-3 sm:p-4">
        <p className="flex-1 text-xs font-bold leading-snug text-gray-900 sm:text-sm">
          {item.name}
        </p>
        <span className="mt-3 inline-block rounded-lg bg-gray-900 px-3 py-2 text-center text-xs font-bold text-white sm:text-sm">
          商品ページを見る
        </span>
      </div>
    </a>
  );
}

function CardGrid({ items }: { items: Item[] }) {
  return (
    <div className="my-6 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
      {items.map((it) => (
        <ProductCard key={it.id} item={it} />
      ))}
    </div>
  );
}

function Caution({ children }: { children: ReactNode }) {
  return (
    <div className="my-6 rounded-md border border-red-300 bg-red-50 p-4">
      <p className="mb-1 font-bold text-red-700">⚠️ ご確認ください</p>
      <div className={cls.bodySm}>{children}</div>
    </div>
  );
}

function H2({ children }: { children: ReactNode }) {
  return <h2 className={cls.h2}>{children}</h2>;
}

function H3({ children }: { children: ReactNode }) {
  return <h3 className={cls.h3}>{children}</h3>;
}

function ArticleImg({ src, alt }: { src: string; alt: string }) {
  return (
    <img src={src} alt={alt} loading="lazy" className="my-6 w-full rounded-lg" />
  );
}

function Th({ children }: { children: ReactNode }) {
  return (
    <th className="border border-gray-300 bg-gray-100 px-3 py-2 text-left text-sm font-bold text-gray-900">
      {children}
    </th>
  );
}

function Td({ children }: { children: ReactNode }) {
  return (
    <td className="border border-gray-300 px-3 py-2 align-top text-sm text-gray-700">
      {children}
    </td>
  );
}

export default function Page() {
  return (
    <>
      <SiteHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <main className="mx-auto max-w-4xl px-4 py-10">
        <nav className="mb-4 text-sm text-gray-500" aria-label="パンくず">
          <Link href="/" className="hover:underline">
            ホーム
          </Link>
          <span className="mx-1">/</span>
          <span>選び方ガイド</span>
          <span className="mx-1">/</span>
          <span className="text-gray-700">コンテナバッグの選び方</span>
        </nav>

        <span className="mb-3 inline-block rounded bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-800">
          選び方ガイド
        </span>

        <h1 className={cls.h1}>
          コンテナバッグの選び方｜容量・耐荷重・排出口あり/なし・水切り・漏れ防止タイプの違いを解説
        </h1>

        <p className="mb-6 text-sm text-gray-500">
          公開日：2026年7月13日／約12分で読めます
        </p>

        <p className={cls.body}>
          コンテナバッグは、土砂・粉体・粒体・廃棄物・枝葉・瓦礫・原料などをまとめて保管・運搬するための大型袋です。ただし「どの内容物にも万能」な1種類があるわけではなく、容量・耐荷重・形状・排出口の有無・水切り/漏れ防止/耐候性などの仕様を、入れる内容物と排出方法に合わせて選ぶ必要があります。本記事では、法人担当者がそのまま社内共有できるよう、用途別・内容物別・容量別・排出方法別に選び方を整理します。
        </p>

        <ArticleImg
          src={IMG.hero}
          alt="現場でコンテナバッグに土砂や資材を積み込むイメージ"
        />

        <div className="mb-8 rounded-lg border border-gray-300 bg-gray-50 p-5">
          <p className="mb-2 font-bold text-gray-900">結論</p>
          <p className={`mb-2 ${cls.bodySm}`}>
            コンテナバッグを選ぶときは、容量・耐荷重・丸型/角型・排出口あり/なし・水切り/漏れ防止/耐候性などの仕様を、入れる内容物と排出方法に合わせて確認します。
          </p>
          <p className={cls.bodySm}>
            粉体や粒体を下から排出したい場合は排出口あり、枝葉・瓦礫・廃材の回収には排出口なし、屋外保管には耐候性タイプ、細かい粉体には漏れ防止や内袋入りタイプが候補です。あわせて、最大充填荷重を超えない・吊り上げたバッグの下に入らない・鋭利物での破損・ワンウェイタイプの再使用可否など、安全面の確認も欠かせません。
          </p>
        </div>

        <CTA
          href={LIST_BAG}
          title="コンテナバッグをお探しの方へ"
          body="容量100L〜1200L、排出口あり/なし、水切り・漏れ防止・耐候性・内袋入り・自立型・全開排出まで、用途に合わせて選べます。まずは一覧から確認いただけます（仕様・価格・在庫は商品ページでご確認ください）。"
          label="コンテナバッグ一覧を見る"
        />

        <H2>コンテナバッグとは？どんな用途で使う？</H2>
        <H3>土砂・粉体・粒体・廃棄物をまとめて保管・運搬する大型袋</H3>
        <p className={cls.body}>
          コンテナバッグは、袋単体で数百〜1000L超の内容物をまとめて扱える大型の運搬・保管袋です。フォークリフトやクレーンで吊り上げて移動できるものが多く、土のう袋では小さすぎる大量の土砂・廃材・原料の取り扱いに向きます。
        </p>
        <H3>土のう袋・ドラム缶・メッシュパレットとの違い</H3>
        <p className={cls.body}>
          土のう袋は小容量で使い捨て中心、ドラム缶は液体・粉体の密閉保管向き、メッシュパレットは通気・視認に優れる金属容器です。コンテナバッグは「大容量・柔軟・吊り上げ運搬」が特徴で、まとめ回収や一時保管に使いやすい選択肢です。
        </p>
        <H3>コンテナバッグとフレコンバッグの違い</H3>
        <p className={cls.body}>
          「コンテナバッグ」と「フレコンバッグ（フレキシブルコンテナ）」はほぼ同じ大型袋を指す呼び方で、明確な線引きはありません。メーカーや販売店によって呼称や仕様の呼び分けが異なるため、名称ではなく容量・耐荷重・排出口・材質などの仕様で選ぶのが確実です。
        </p>
        <H3>法人現場で使われやすい業種</H3>
        <p className={cls.body}>
          建設・土木、工場・倉庫の資材管理、廃棄物処理・リサイクル、農業法人・造園、粉体・粒体を扱う製造業など、大量の内容物をまとめて扱う現場で広く使われます。
        </p>

        <Caution>
          1種類のコンテナバッグがどの内容物にも万能に使えるわけではありません。内容物（土砂・粉体・粒体・廃材・水分を含むものなど）と排出方法に合わせてタイプを選んでください。仕様の適合は、必ず各商品ページとメーカー情報でご確認ください。
        </Caution>

        <H2>コンテナバッグを選ぶときの5つの基本</H2>
        <H3>容量で選ぶ</H3>
        <p className={cls.body}>
          100L程度の小型回収から1200Lの大容量まで幅があります。1回に扱う量・保管スペース・運搬手段に合わせて選びます。
        </p>
        <H3>耐荷重で選ぶ</H3>
        <p className={cls.body}>
          耐荷重は100kg・200kg・400kg・1000kgなど製品で異なります。内容物の重さに対して余裕を持った耐荷重を選び、表示された最大充填荷重を超えないようにします。
        </p>
        <H3>丸型・角型で選ぶ</H3>
        <p className={cls.body}>
          丸型は汎用性が高く扱いやすく、角型は隙間なく並べやすいため保管スペースを整えやすいのが特徴です。
        </p>
        <H3>排出口あり/なしで選ぶ</H3>
        <p className={cls.body}>
          下から中身を出したいなら排出口あり、廃材・枝葉・瓦礫の回収など反転・開封で出すなら排出口なしが使いやすくなります。
        </p>
        <H3>内容物に合わせた特殊タイプを選ぶ</H3>
        <p className={cls.body}>
          水分を含むものは水切り、細かい粉体は漏れ防止・内袋入り、屋外保管は耐候性など、内容物や環境に応じた特殊タイプを選びます。
        </p>

        <H2>容量別｜コンテナバッグの選び方</H2>
        <ArticleImg
          src={IMG.capacity}
          alt="容量の異なるコンテナバッグを比較するイメージ"
        />
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <caption className="mb-2 text-left text-sm font-bold text-gray-900">
              表：容量別コンテナバッグの選び方
            </caption>
            <thead>
              <tr>
                <Th>容量</Th>
                <Th>向いている用途</Th>
                <Th>商品タイプ例</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>100L</Td>
                <Td>小型回収・色分け・分別・少量資材</Td>
                <Td>100L オレンジ・青</Td>
              </tr>
              <tr>
                <Td>180L</Td>
                <Td>自立型・小規模現場・分別回収</Td>
                <Td>自立型 角型180L</Td>
              </tr>
              <tr>
                <Td>200L</Td>
                <Td>ドラム缶相当の回収・小型保管</Td>
                <Td>200L丸型・ドラム缶用</Td>
              </tr>
              <tr>
                <Td>300〜350L</Td>
                <Td>少量廃材・土砂・現場回収</Td>
                <Td>300L丸型・350L角型</Td>
              </tr>
              <tr>
                <Td>415〜500L</Td>
                <Td>中量回収・資材保管</Td>
                <Td>415L角型・500L丸型</Td>
              </tr>
              <tr>
                <Td>620〜850L</Td>
                <Td>工場・倉庫の原料保管</Td>
                <Td>全開排出・漏れ防止・内袋入り</Td>
              </tr>
              <tr>
                <Td>1000L</Td>
                <Td>汎用大容量・土砂・廃棄物・原料</Td>
                <Td>丸型1000L・水切り・耐候性</Td>
              </tr>
              <tr>
                <Td>1200L</Td>
                <Td>形状保持・大容量原料管理</Td>
                <Td>隔壁形状保持 角型1200L</Td>
              </tr>
            </tbody>
          </table>
        </div>

        <H3>100L・180L・200L｜小型回収・分別用</H3>
        <p className={cls.body}>
          分別・色分けや少量回収、ドラム缶相当の小型保管に。自立型は袋が自立するため、一人での投入作業がしやすくなります。
        </p>
        <CardGrid items={BAGS_100} />
        <CardGrid items={BAGS_180} />
        <CardGrid items={BAGS_200} />

        <H3>300L・350L・415L｜少量廃材・資材回収用</H3>
        <p className={cls.body}>
          少量の廃材・土砂の回収や資材保管に扱いやすい中間サイズです。角型350Lは耐荷重200kgのため、重量物には耐荷重の高いタイプを選びます。
        </p>
        <CardGrid items={BAGS_300_415} />

        <H3>450L・500L・620L｜中量回収・現場保管用</H3>
        <p className={cls.body}>
          中量の回収・現場での一時保管に。全開排出タイプは中身を一気に出したい作業に向きます。
        </p>
        <CardGrid items={BAGS_450_620} />

        <H3>690L・800L・850L｜工場・倉庫の原料保管用</H3>
        <p className={cls.body}>
          工場・倉庫の原料保管に。角型は保管効率が高く、内袋入り・漏れ防止は粉体・原料の管理に向きます。
        </p>
        <CardGrid items={BAGS_690_850} />

        <H3>1000L・1200L｜大容量の土砂・粉体・廃棄物用</H3>
        <p className={cls.body}>
          大容量の土砂・粉体・廃棄物・原料に。水切りは水分を含む回収物、耐候性は屋外保管、隔壁形状保持は膨らみを抑えたい原料管理に向きます。
        </p>
        <CardGrid items={BAGS_1000_1200} />

        <CTA
          href={LIST_BAG}
          title="容量から探す"
          body="扱う量・保管スペース・運搬方法に合わせて、100L〜1200Lから選べます。"
          label="コンテナバッグ一覧を見る"
        />

        <H2>排出口あり・排出口なしの違い</H2>
        <ArticleImg
          src={IMG.discharge}
          alt="排出口ありコンテナバッグから粉体を排出するイメージ"
        />
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <caption className="mb-2 text-left text-sm font-bold text-gray-900">
              表：排出口あり・なし・全開排出・内袋・漏れ防止の違い
            </caption>
            <thead>
              <tr>
                <Th>仕様</Th>
                <Th>向いている内容物</Th>
                <Th>メリット</Th>
                <Th>注意点</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>排出口あり</Td>
                <Td>粉体・粒体・原料・ペレット</Td>
                <Td>下から排出しやすい</Td>
                <Td>排出口の閉じ忘れに注意</Td>
              </tr>
              <tr>
                <Td>排出口なし</Td>
                <Td>土砂・枝葉・瓦礫・廃材</Td>
                <Td>構造がシンプルで回収向き</Td>
                <Td>排出は反転・開封が中心</Td>
              </tr>
              <tr>
                <Td>全開排出</Td>
                <Td>一気に出したい内容物</Td>
                <Td>排出作業が速い</Td>
                <Td>排出場所の確保が必要</Td>
              </tr>
              <tr>
                <Td>内袋入り</Td>
                <Td>粉体・細かい内容物</Td>
                <Td>漏れ対策に使いやすい</Td>
                <Td>内容物との相性確認</Td>
              </tr>
              <tr>
                <Td>漏れ防止</Td>
                <Td>粒度の細かい粉体</Td>
                <Td>粉漏れしにくい</Td>
                <Td>鋭利物には注意</Td>
              </tr>
            </tbody>
          </table>
        </div>
        <H3>排出口ありは粉体・粒体・原料の排出に便利</H3>
        <p className={cls.body}>
          底部の排出口から中身を出せるため、粉体・粒体・原料・ペレットを下から少しずつ、または一括で排出したい作業に向きます。
        </p>
        <H3>排出口なしは廃材・枝葉・瓦礫の回収に使いやすい</H3>
        <p className={cls.body}>
          構造がシンプルで、廃材・枝葉・瓦礫などの回収に使いやすいタイプです。排出は反転や開封が中心になります。
        </p>
        <H3>全開排出タイプは一気に出したい作業向け</H3>
        <p className={cls.body}>
          底が大きく開くため、中身を一気に排出したい作業に向きます。排出場所の確保が前提です。
        </p>
        <H3>排出口を選ぶときの失敗例</H3>
        <p className={cls.body}>
          「粉体なのに排出口なしを選び、反転作業で粉が舞う」「排出口の閉じ忘れで運搬中に漏れる」などが典型例です。内容物と排出作業の動線をイメージして選びます。
        </p>
        <div className="my-6 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          <ProductCard item={B850_Y} />
          <ProductCard item={B800_K} />
          <ProductCard item={B620_OPEN} />
          <ProductCard item={B300_OPEN} />
        </div>

        <H2>丸型・角型・自立型の違い</H2>
        <H3>丸型は汎用性が高く選びやすい</H3>
        <p className={cls.body}>
          最も一般的で、土砂・廃材・原料まで幅広く使えます。迷ったらまず丸型が選びやすい形状です。
        </p>
        <H3>角型は保管スペースを整えやすい</H3>
        <p className={cls.body}>
          四角い形状で隙間なく並べやすく、倉庫や現場の保管スペースを整えやすいのが利点です。
        </p>
        <H3>隔壁形状保持タイプは形を保ちたい原料管理に向く</H3>
        <p className={cls.body}>
          内部の隔壁で膨らみを抑え、形状を保ちやすいタイプです。積み重ねや形を整えたい原料管理に向きます。
        </p>
        <H3>自立型は小型回収や現場での投入作業に便利</H3>
        <p className={cls.body}>
          袋が自立するため、一人でも投入しやすく、小規模現場の分別回収に便利です。
        </p>
        <div className="my-6 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          <ProductCard item={B1000_N} />
          <ProductCard item={B800_K} />
          <ProductCard item={B1200_KAKUHEKI} />
          <ProductCard item={B180_JI} />
        </div>

        <H2>内容物別｜おすすめのコンテナバッグタイプ</H2>
        <ArticleImg
          src={IMG.material}
          alt="内容物別にコンテナバッグを使い分けるイメージ"
        />
        <H3>土・砂・石・瓦礫</H3>
        <p className={cls.body}>
          重量が出るため耐荷重1000kgクラスの丸型・角型が候補。回収中心なら排出口なしが扱いやすくなります。
        </p>
        <H3>枝葉・剪定ゴミ</H3>
        <p className={cls.body}>
          かさばる軽量物の回収には、排出口なしの丸型・角型が使いやすいです。造園・農業現場で活躍します。
        </p>
        <H3>粉体・粒体・樹脂ペレット</H3>
        <p className={cls.body}>
          下から出したい原料・ペレットは排出口あり。細かい粉体は漏れ防止・内袋入りを組み合わせます。
        </p>
        <H3>水分を含む内容物</H3>
        <p className={cls.body}>
          水分を含む回収物は、余分な水を抜ける水切りタイプが候補になります。
        </p>
        <H3>細かい粉体・漏れやすい内容物</H3>
        <p className={cls.body}>
          粒度の細かい粉体は、漏れ防止タイプや内袋入りタイプで粉漏れ対策をします。内容物との相性は商品ページで確認します。
        </p>
        <H3>屋外保管する資材</H3>
        <p className={cls.body}>
          屋外で一定期間保管するなら、紫外線劣化に配慮した耐候性タイプが候補です。あわせてパレットカバーで雨よけ・保護も検討できます。
        </p>

        <H2>特殊タイプのコンテナバッグを使い分ける</H2>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <caption className="mb-2 text-left text-sm font-bold text-gray-900">
              表：特殊タイプ別の使い分け
            </caption>
            <thead>
              <tr>
                <Th>タイプ</Th>
                <Th>向いている用途</Th>
                <Th>該当商品の例</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>水切り</Td>
                <Td>水分を含む内容物・排水したい回収物</Td>
                <Td>水切り1000L（排出口あり/なし）</Td>
              </tr>
              <tr>
                <Td>漏れ防止</Td>
                <Td>細かい粉体・粒体</Td>
                <Td>漏れ防止 850L・450L・200L</Td>
              </tr>
              <tr>
                <Td>内袋入り</Td>
                <Td>粉体・原料・出荷用</Td>
                <Td>内袋入り 850L</Td>
              </tr>
              <tr>
                <Td>耐候性3年</Td>
                <Td>屋外保管・土砂・枝葉・瓦礫</Td>
                <Td>耐候性3年 1000L</Td>
              </tr>
              <tr>
                <Td>隔壁形状保持</Td>
                <Td>膨らみを抑えたい原料管理</Td>
                <Td>角型1200L</Td>
              </tr>
              <tr>
                <Td>自立型</Td>
                <Td>少量投入・小規模作業</Td>
                <Td>自立型180L</Td>
              </tr>
              <tr>
                <Td>ドラム缶用</Td>
                <Td>ドラム缶相当の回収・保管</Td>
                <Td>ドラム缶用200L</Td>
              </tr>
              <tr>
                <Td>全開排出</Td>
                <Td>一括排出したい作業</Td>
                <Td>620L・300L</Td>
              </tr>
            </tbody>
          </table>
        </div>
        <H3>水切りコンテナバッグ</H3>
        <p className={cls.body}>
          水分を含む回収物から余分な水を抜きたい場面に。排出口あり/なしから排出方法で選びます。
        </p>
        <div className="my-4 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          <ProductCard item={B1000_MIZU_Y} />
          <ProductCard item={B1000_MIZU_N} />
        </div>
        <H3>漏れ防止コンテナバッグ</H3>
        <p className={cls.body}>
          粒度の細かい粉体の粉漏れ対策に。容量違いから選べます。
        </p>
        <div className="my-4 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          <ProductCard item={B850_LEAK} />
          <ProductCard item={B450_LEAK} />
          <ProductCard item={B200_LEAK} />
        </div>
        <H3>内袋入りコンテナバッグ</H3>
        <p className={cls.body}>
          内袋で粉体・原料の漏れや湿気対策をしたい出荷・保管用途に。
        </p>
        <div className="my-4 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          <ProductCard item={B850_INNER} />
        </div>
        <H3>耐候性3年コンテナバッグ</H3>
        <p className={cls.body}>
          屋外保管で紫外線劣化に配慮したいときの候補です（耐候年数はメーカー公表値・使用環境で変わります）。
        </p>
        <div className="my-4 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          <ProductCard item={B1000_TAIKOU} />
        </div>
        <H3>ドラム缶用コンテナバッグ</H3>
        <p className={cls.body}>
          ドラム缶相当の回収・保管に。漏れ防止・排出口ありで扱いやすいタイプです。
        </p>
        <div className="my-4 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          <ProductCard item={B200_DRUM} />
        </div>
        <H3>全開排出コンテナバッグ</H3>
        <p className={cls.body}>
          底が大きく開き、中身を一括で出したい作業に向きます。
        </p>
        <div className="my-4 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          <ProductCard item={B620_OPEN} />
          <ProductCard item={B300_OPEN} />
        </div>

        <H2>コンテナバッグを使うときの注意点</H2>
        <H3>最大充填荷重を超えない</H3>
        <p className={cls.body}>
          各製品に表示された最大充填荷重（耐荷重）を超えて使わないことが基本です。超過は破損・落下の重大リスクにつながります。
        </p>
        <H3>鋭利な物を入れる場合は破損に注意</H3>
        <p className={cls.body}>
          ガラス片・金属片・尖った瓦礫などは袋を傷つけ、破損の原因になります。鋭利物を扱う際は特に注意します。
        </p>
        <H3>吊り上げたバッグの下に入らない</H3>
        <p className={cls.body}>
          吊り上げ・移動中のバッグの下や近くに人が入らないよう、立入禁止範囲を徹底します。
        </p>
        <H3>ワンウェイタイプは再使用前提にしない</H3>
        <p className={cls.body}>
          一度きりの使用を想定したワンウェイタイプは、再使用を前提にしないでください。繰り返し使う場合は再使用可否を製品情報で確認します。
        </p>
        <H3>内容物・保管場所・運搬方法を事前に確認する</H3>
        <p className={cls.body}>
          内容物の重さ・性状、保管場所（屋内/屋外）、運搬方法（フォーク/クレーン）を事前に確認し、適合するタイプを選びます。
        </p>

        <Caution>
          安全上の重要事項です。各製品に表示された最大充填荷重を超えて使用しないでください。吊り上げ・移動中のバッグの下や周囲には絶対に入らないよう、立入禁止範囲を徹底してください。ガラス片・金属片など鋭利な物は袋を破損させる可能性があります。吊り具・吊り方・使用回数はメーカーの取扱説明と社内の安全基準に従ってください。
        </Caution>
        <Caution>
          ワンウェイ（使い切り）タイプは再使用を前提にしないでください。繰り返し使用できるかどうかは製品ごとに異なります。使用回数・再使用の可否・点検方法は、必ず各商品ページとメーカー情報でご確認ください。
        </Caution>

        <H2>コンテナバッグと一緒に確認したい関連商品</H2>
        <ArticleImg
          src={IMG.related}
          alt="コンテナバッグをハンドパレットで運搬するイメージ"
        />
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <caption className="mb-2 text-left text-sm font-bold text-gray-900">
              表：関連商品との組み合わせ
            </caption>
            <thead>
              <tr>
                <Th>関連商品</Th>
                <Th>組み合わせる理由</Th>
                <Th>主な場面</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>フレコンバッグ</Td>
                <Td>用途・呼称の比較検討に</Td>
                <Td>大型袋の選定</Td>
              </tr>
              <tr>
                <Td>ハンドパレット</Td>
                <Td>パレット上の運搬効率化</Td>
                <Td>倉庫・工場の横持ち</Td>
              </tr>
              <tr>
                <Td>ハンドリフター</Td>
                <Td>持ち上げ・積み下ろしの補助</Td>
                <Td>手作業の負担軽減</Td>
              </tr>
              <tr>
                <Td>運搬台車</Td>
                <Td>資材・バッグの構内運搬</Td>
                <Td>倉庫・現場の移動</Td>
              </tr>
              <tr>
                <Td>パレットカバー</Td>
                <Td>屋外保管の雨よけ・保護</Td>
                <Td>屋外・一時保管</Td>
              </tr>
            </tbody>
          </table>
        </div>

        <H3>フレコンバッグ</H3>
        <p className={cls.body}>
          呼称・仕様を比較検討したいときに。排出口あり/なし、耐候性タイプがあります。
        </p>
        <div className="my-4 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          <ProductCard item={F_NO} />
          <ProductCard item={F_YES} />
          <ProductCard item={F_TAIKOU_NO} />
          <ProductCard item={F_TAIKOU_YES} />
        </div>

        <H3>ハンドパレット</H3>
        <p className={cls.body}>
          パレットに載せたバッグや資材を、少人数で効率よく横持ちできます。
        </p>
        <div className="my-4 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          <ProductCard item={HP_1050} />
          <ProductCard item={HP_850} />
          <ProductCard item={HP_2T} />
        </div>
        <div className="my-4">
          <ProductLink href={LIST_HP_HL} name="ハンドパレット・ハンドリフター一覧を見る" />
        </div>

        <H3>ハンドリフター</H3>
        <p className={cls.body}>
          持ち上げ・積み下ろしの高さ合わせに。手作業の腰への負担軽減に役立ちます。
        </p>
        <div className="my-4 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          <ProductCard item={HL_80} />
          <ProductCard item={HL_200} />
          <ProductCard item={HL_350} />
        </div>
        <div className="my-4">
          <ProductLink href={LIST_HLIFT} name="ハンドリフター一覧を見る" />
        </div>

        <H3>運搬台車</H3>
        <p className={cls.body}>
          構内での資材・バッグの移動に。ストッパー付きや大型タイプがあります。
        </p>
        <div className="my-4 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          <ProductCard item={DS_KARU} />
          <ProductCard item={DS_KARU_STOP} />
          <ProductCard item={DS_KARU_BIG} />
        </div>
        <div className="my-4">
          <ProductLink href={LIST_DAISHA} name="運搬台車一覧を見る" />
        </div>

        <H3>パレットカバー・透明パレットカバー</H3>
        <p className={cls.body}>
          屋外・一時保管の雨よけ・保護に。透明タイプは中身の視認がしやすくなります。
        </p>
        <div className="my-4 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          <ProductCard item={PC_CLEAR} />
          <ProductCard item={PC_RUBBER} />
        </div>

        <H2>法人向け｜コンテナバッグ発注前チェックリスト</H2>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <caption className="mb-2 text-left text-sm font-bold text-gray-900">
              表：発注前チェックリスト
            </caption>
            <thead>
              <tr>
                <Th>区分</Th>
                <Th>確認項目</Th>
                <Th>確認</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>内容物</Td>
                <Td>土砂/粉体/粒体/廃材/枝葉/水分の有無・鋭利物の有無を確認</Td>
                <Td>□</Td>
              </tr>
              <tr>
                <Td>容量・耐荷重</Td>
                <Td>1回あたりの量と重さ、最大充填荷重に余裕があるか</Td>
                <Td>□</Td>
              </tr>
              <tr>
                <Td>排出方法</Td>
                <Td>排出口あり/なし/全開のどれが作業動線に合うか</Td>
                <Td>□</Td>
              </tr>
              <tr>
                <Td>保管・運搬</Td>
                <Td>屋内/屋外・保管期間・フォーク/クレーン・台車の要否</Td>
                <Td>□</Td>
              </tr>
              <tr>
                <Td>関連備品</Td>
                <Td>パレット・パレットカバー・ハンドパレット/リフター/台車の要否</Td>
                <Td>□</Td>
              </tr>
              <tr>
                <Td>安全</Td>
                <Td>吊り作業の立入禁止範囲・再使用可否・点検方法を周知</Td>
                <Td>□</Td>
              </tr>
            </tbody>
          </table>
        </div>
        <H3>内容物チェック</H3>
        <p className={cls.body}>
          何を・どれくらいの重さで・鋭利物や水分を含むかを最初に確認します。ここでタイプがほぼ決まります。
        </p>
        <H3>容量・耐荷重チェック</H3>
        <p className={cls.body}>
          1回あたりの量と重さに対して、容量と最大充填荷重に余裕があるかを確認します。
        </p>
        <H3>排出方法チェック</H3>
        <p className={cls.body}>
          下から出すのか、反転・開封で出すのか、一括排出かで排出口タイプを選びます。
        </p>
        <H3>保管・運搬チェック</H3>
        <p className={cls.body}>
          屋内/屋外、保管期間、運搬手段（フォーク/クレーン/台車）を確認します。屋外長期なら耐候性・カバーも検討します。
        </p>
        <H3>関連備品チェック</H3>
        <p className={cls.body}>
          運搬効率や保護のために、ハンドパレット・ハンドリフター・台車・パレットカバーの要否を確認します。
        </p>

        <H2>よくある質問</H2>
        <div className="space-y-5">
          {FAQ_ITEMS.map((item) => (
            <div key={item.q}>
              <h3 className={cls.faqQ}>Q. {item.q.replace(/^Q\.\s*/, "")}</h3>
              <p className={cls.body}>{item.a}</p>
            </div>
          ))}
        </div>

        <H2>まとめ｜コンテナバッグは「容量・排出口・内容物・運搬方法」で選ぶ</H2>
        <ArticleImg
          src={IMG.checklist}
          alt="法人担当者がコンテナバッグ発注前チェックリストを確認するイメージ"
        />
        <p className={cls.body}>
          コンテナバッグは、容量・耐荷重・形状・排出口の有無・特殊タイプ（水切り/漏れ防止/内袋入り/耐候性/自立型/全開排出）を、内容物と排出・運搬方法に合わせて選ぶのが基本です。1種類で万能に使えるものはありません。最大充填荷重を超えない、吊り荷の下に入らない、鋭利物の破損に注意、ワンウェイは再使用しない、といった安全面もあわせて確認し、必要に応じてハンドパレット・台車・パレットカバーなどの関連備品も揃えると運用が安定します。
        </p>

        <FinalCTA
          href={LIST_BAG}
          title="用途に合うコンテナバッグを探す"
          body="容量100L〜1200L、排出口あり/なし、水切り・漏れ防止・耐候性・内袋入り・自立型・全開排出まで。仕様・価格・在庫は商品ページでご確認ください。"
          label="コンテナバッグ一覧を見る"
        />
        <div className="mb-8 grid grid-cols-1 gap-2 sm:grid-cols-2">
          <ProductLink href={LIST_BAG} name="コンテナバッグ一覧へ" />
          <ProductLink href={LIST_TRUSCO} name="トラスコ中山商品一覧へ" />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
