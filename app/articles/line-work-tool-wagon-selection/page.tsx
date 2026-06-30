import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";

const SLUG = "line-work-tool-wagon-selection";
const SITE_URL = "https://sagyou-navi.com";

export const metadata: Metadata = {
  title:
    "ライン作業の工具置き台に使えるワゴンの選び方｜部品の仮置き・移動作業を効率化",
  description:
    "ライン作業やピッキング作業では、工具・部品・測定具・商品を作業場所の近くに仮置きできるワゴンがあると、移動時間や作業台上の散らかりを減らしやすくなります。工場内運搬や工具置き台に使えるツールワゴンの選び方と、TRUSCOバーディワゴンのサイズ・高さ・段数の選び方を解説します。",
  alternates: { canonical: `${SITE_URL}/articles/${SLUG}` },
  openGraph: {
    title:
      "ライン作業の工具置き台に使えるワゴンの選び方｜部品の仮置き・移動作業を効率化",
    description:
      "ライン作業やピッキング作業では、工具・部品・測定具・商品を作業場所の近くに仮置きできるワゴンがあると、移動時間や作業台上の散らかりを減らしやすくなります。",
    type: "article",
    images: [
      "/images/articles/line-work-tool-wagon-selection/line-work-tool-wagon-hero.jpg",
    ],
  },
};

const ARTICLE_IMG = "/images/articles/line-work-tool-wagon-selection";
const productImage = (id: string) => `/products/${id}.jpg`;

const UTM =
  "utm_source=sagyou-navi&utm_medium=referral&utm_campaign=line-work-tool-wagon";

function buildUrl(url: string, utm: string): string {
  if (!url) return url;
  const hashIndex = url.indexOf("#");
  const append = (base: string) =>
    `${base}${base.includes("?") ? "&" : "?"}${utm}`;
  if (hashIndex === -1) return append(url);
  return `${append(url.slice(0, hashIndex))}${url.slice(hashIndex)}`;
}

function CTA({ url, label }: { url: string; label: string }) {
  if (!url) return null;
  return (
    <a
      href={buildUrl(url, UTM)}
      target="_blank"
      rel="nofollow noopener noreferrer"
      className="my-4 block w-full rounded-lg bg-gray-900 px-6 py-4 text-center font-bold text-white transition-colors hover:bg-gray-700"
    >
      {label}
    </a>
  );
}

function ProductLink({ url, label }: { url: string; label: string }) {
  if (!url) return null;
  return (
    <a
      href={buildUrl(url, UTM)}
      target="_blank"
      rel="nofollow noopener noreferrer"
      className="m-1 inline-block rounded-md bg-gray-900 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-gray-700"
    >
      {label}
    </a>
  );
}

function H2({ children }: { children: ReactNode }) {
  return <h2 className={cls.h2}>{children}</h2>;
}

function H3({ children }: { children: ReactNode }) {
  return <h3 className={cls.h3}>{children}</h3>;
}

type YahooProduct = { id: string; name: string; url: string };

function YahooProductCard({ id, name, url }: YahooProduct) {
  return (
    <a
      href={buildUrl(url, UTM)}
      target="_blank"
      rel="nofollow noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white transition hover:shadow-md"
    >
      <div className="aspect-square w-full overflow-hidden bg-gray-50">
        <img
          src={productImage(id)}
          alt={name}
          loading="lazy"
          className="h-full w-full object-contain p-2 transition group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-3">
        <p className="flex-1 text-sm leading-snug text-gray-800">{name}</p>
        <span className="mt-2 inline-block rounded bg-gray-900 px-3 py-1 text-center text-sm font-semibold text-white">
          商品を見る
        </span>
      </div>
    </a>
  );
}

function YahooProductGrid({ items }: { items: YahooProduct[] }) {
  return (
    <div className="my-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
      {items.map((p) => (
        <YahooProductCard key={p.id} {...p} />
      ))}
    </div>
  );
}

type Wagon = {
  model: string;
  size: string;
  height: string;
  tier: string;
  color: string;
  use: string;
  url: string;
  imgId: string;
  group: "space" | "standard" | "large" | "h740" | "h880" | "color";
};

// 配置済み商品画像（/products/{imgId}.jpg）へのマッピング
const WAGONS: Wagon[] = [
  { model: "BDW-662-W", size: "600×400", height: "H600", tier: "2段", color: "ホワイト", use: "省スペースの工具置き台", group: "space", url: "https://item.rakuten.co.jp/crecote-shop/ta005287-bdw662w/", imgId: "bdw672yg" },
  { model: "BDW-662-YG", size: "600×400", height: "H600", tier: "2段", color: "ヤンググリーン", use: "省スペースの工具置き台", group: "space", url: "https://item.rakuten.co.jp/crecote-shop/ta005288-bdw662yg/", imgId: "bdw672yg" },
  { model: "BDW-672-W", size: "750×500", height: "H600", tier: "2段", color: "ホワイト", use: "標準的な部品仮置き", group: "standard", url: "https://item.rakuten.co.jp/crecote-shop/ta005289-bdw672w/", imgId: "bdw672yg" },
  { model: "BDW-672-YG", size: "750×500", height: "H600", tier: "2段", color: "ヤンググリーン", use: "標準的な部品仮置き", group: "standard", url: "https://item.rakuten.co.jp/crecote-shop/ta005290-bdw672yg/", imgId: "bdw672yg" },
  { model: "BDW-692-W", size: "900×600", height: "H600", tier: "2段", color: "ホワイト", use: "大型部品・箱物の仮置き", group: "large", url: "https://item.rakuten.co.jp/crecote-shop/ta005291-bdw692w/", imgId: "bdw773w" },
  { model: "BDW-692-YG", size: "900×600", height: "H600", tier: "2段", color: "ヤンググリーン", use: "大型部品・箱物の仮置き", group: "large", url: "https://item.rakuten.co.jp/crecote-shop/ta005292-bdw692yg/", imgId: "bdw773w" },
  { model: "BDW-763-W", size: "600×400", height: "H740", tier: "3段", color: "ホワイト", use: "一般作業台横の3段ワゴン", group: "h740", url: "https://item.rakuten.co.jp/crecote-shop/ta005293-bdw763w/", imgId: "bdw763yg" },
  { model: "BDW-773-W", size: "750×500", height: "H740", tier: "3段", color: "ホワイト", use: "一般作業台横の3段ワゴン", group: "h740", url: "https://item.rakuten.co.jp/crecote-shop/ta005295-bdw773w/", imgId: "bdw773w" },
  { model: "BDW-793-W", size: "900×600", height: "H740", tier: "3段", color: "ホワイト", use: "作業台横で大きめ部品も", group: "h740", url: "https://item.rakuten.co.jp/crecote-shop/ta005297-bdw793w/", imgId: "bdw773w" },
  { model: "BDW-963-W", size: "600×400", height: "H880", tier: "3段", color: "ホワイト", use: "立ち作業・ラインサイド", group: "h880", url: "https://item.rakuten.co.jp/crecote-shop/ta005306-bdw963w/", imgId: "bdw963w" },
  { model: "BDW-973-W", size: "750×500", height: "H880", tier: "3段", color: "ホワイト", use: "立ち作業・ラインサイド", group: "h880", url: "https://item.rakuten.co.jp/crecote-shop/ta005310-bdw973w/", imgId: "bdw973yg" },
  { model: "BDW-993-W", size: "900×600", height: "H880", tier: "3段", color: "ホワイト", use: "立ち作業・ラインサイド", group: "h880", url: "https://item.rakuten.co.jp/crecote-shop/ta005312-bdw993w/", imgId: "bdw993yg" },
  { model: "BDW-963-BKOR", size: "600×400", height: "H880", tier: "3段", color: "ブラック×オレンジ", use: "工程・部署別の色分け", group: "color", url: "https://item.rakuten.co.jp/crecote-shop/ta005300-bdw963bkor/", imgId: "bdw963bkbk" },
  { model: "BDW-963-RR", size: "600×400", height: "H880", tier: "3段", color: "レッド", use: "工程・部署別の色分け", group: "color", url: "https://item.rakuten.co.jp/crecote-shop/ta005305-bdw963rr/", imgId: "bdw963rbk" },
  { model: "BDW-963-OROR", size: "600×400", height: "H880", tier: "3段", color: "オレンジ", use: "工程・部署別の色分け", group: "color", url: "https://item.rakuten.co.jp/crecote-shop/ta005303-bdw963oror/", imgId: "bdw963oror" },
  { model: "BDW-963-WYG", size: "600×400", height: "H880", tier: "3段", color: "ホワイト×ヤンググリーン", use: "工程・部署別の色分け", group: "color", url: "https://item.rakuten.co.jp/crecote-shop/ta005308-bdw963wyg/", imgId: "bdw963wyg" },
];

const KARTIO: YahooProduct[] = [
  { id: "167468", name: "カルティオ ブラック MPK-780-BK", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/167468.html" },
  { id: "190479", name: "カルティオ ブルー MPK-780-B", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/190479.html" },
  { id: "190475", name: "カルティオ ブラック ストッパー付 MPK780BKSS", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/190475.html" },
  { id: "190476", name: "カルティオ オリーブ ストッパー付 MPK780ODSS", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/190476.html" },
];
const URL_DAISHA_LIST = "https://store.shopping.yahoo.co.jp/signcity-yshop/b1bfc8c2c2.html";

const KEIRYO: YahooProduct[] = [
  { id: "161973", name: "軽量作業台 TFAEL-1260（1200×600×740）", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/161973.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=" },
  { id: "160785", name: "軽量作業台 BE-1275（1200×750×740）", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/160785.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=" },
  { id: "161354", name: "軽量立ち作業台 上棚付 HAE-0960YURB W", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/161354.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=" },
  { id: "160909", name: "軽量作業台 AE-1200 YG（1200×750×740）", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/160909.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=" },
];
const URL_KEIRYO_LIST = "https://store.shopping.yahoo.co.jp/signcity-yshop/search.html?p=%E8%BB%BD%E9%87%8F%E4%BD%9C%E6%A5%AD%E5%8F%B0#CentSrchFilter1";

const CHURYO: YahooProduct[] = [
  { id: "161631", name: "中量作業台 GWP-1275 YG（1200×750×740）", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/161631.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=" },
  { id: "220888", name: "中荷重作業台800kg GWR-0945（900×450×740）", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/220888.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=" },
  { id: "221217", name: "中荷重作業台1200kg HW-1209（1200×900×740）", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/221217.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=" },
  { id: "161679", name: "中量作業台 回転台・バイス付 HW-1800VRS", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/161679.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=" },
];
const URL_CHURYO_LIST = "https://store.shopping.yahoo.co.jp/signcity-yshop/search.html?aq=&oq=&p=%E4%B8%AD%E9%87%8F%E4%BD%9C%E6%A5%AD%E5%8F%B0&storeid=signcity-yshop&sc_i=shopping-pc-web-result-storesg-h_srch-srchbtn-sgstfrom-result-storesch-h_srch-srchbox";

const URL_BUPPINDANA = "";
const URL_TRUSCO_LIST =
  "https://store.shopping.yahoo.co.jp/signcity-yshop/a5c8a5e9a5.html#sideNaviItems";

const FEATURED_WAGONS = ["BDW-672-W", "BDW-773-W", "BDW-963-W"] as const;

const faqs = [
  {
    q: "Q1. ライン作業の工具置き台にはどんなワゴンが向いていますか？",
    a: "工具・部品・測定具を作業者の近くに置ける、キャスター付きのツールワゴンが候補になります。小物工具が多い場合は皿型棚板、部品箱やコンテナを置く場合はフラット棚板が使いやすいです。",
  },
  {
    q: "Q2. バーディワゴンはどんな用途に使えますか？",
    a: "工場内の運搬作業、ピッキング作業、ライン作業での工具置き台、部品・商品の仮置きに使えます。棚板を皿型・フラット型の両面で使えるため、工具や小物、箱物を使い分けて置きやすいワゴンです。",
  },
  {
    q: "Q3. 2段と3段はどちらを選べばよいですか？",
    a: "シンプルに工具や部品箱を置くなら2段、工具・部品・消耗品・検品前後品を分けたいなら3段が向いています。ライン作業では、工程ごとに段を分けて使うと整理しやすくなります。",
  },
  {
    q: "Q4. 600×400、750×500、900×600はどう選べばよいですか？",
    a: "省スペースの作業台横なら600×400、標準的な工具・部品置きには750×500、大きめの部品箱や箱物を仮置きするなら900×600が候補になります。設置スペースと置く物の大きさを確認して選びましょう。",
  },
  {
    q: "Q5. ツールワゴンと台車は何が違いますか？",
    a: "ツールワゴンは工具・部品を段ごとに置き、作業場所の近くで使う補助台に向いています。台車は箱物や重量物をまとめて運ぶ用途に向いています。部品や工具を整理して仮置きしたい場合はワゴン、まとまった荷物を運びたい場合はカルティオなどの台車を検討します。",
  },
  {
    q: "Q6. 工具や部品を長期保管するならワゴンでよいですか？",
    a: "長期保管には物品棚や工具保管庫が向いています。ワゴンは、作業中の仮置きや工程間の移動に便利です。保管用と作業用で役割を分けると、現場の整理がしやすくなります。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "選び方ガイド", item: `${SITE_URL}/category/guide` },
    {
      "@type": "ListItem",
      position: 3,
      name: "ライン作業の工具置き台ワゴンの選び方",
      item: `${SITE_URL}/articles/${SLUG}`,
    },
  ],
};

function WagonProductCard({ w }: { w: Wagon }) {
  return (
    <a
      href={buildUrl(w.url, UTM)}
      target="_blank"
      rel="nofollow noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white transition hover:shadow-md"
    >
      <div className="aspect-square w-full overflow-hidden bg-gray-50">
        <img
          src={productImage(w.imgId)}
          alt={`TRUSCOバーディワゴン ${w.model}`}
          loading="lazy"
          className="h-full w-full object-contain p-2 transition group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-3">
        <p className="text-xs font-bold text-gray-500">{w.model}</p>
        <p className="mt-1 flex-1 text-sm leading-snug text-gray-800">
          {w.size}・{w.height}・{w.tier}・{w.color}
        </p>
        <span className="mt-2 inline-block rounded bg-gray-900 px-3 py-1 text-center text-sm font-semibold text-white">
          楽天で見る
        </span>
      </div>
    </a>
  );
}

function WagonProductGrid({ items }: { items: Wagon[] }) {
  return (
    <div className="my-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
      {items.map((w) => (
        <WagonProductCard key={w.model} w={w} />
      ))}
    </div>
  );
}

function UseCaseCard({
  title,
  desc,
  group,
}: {
  title: string;
  desc: string;
  group: Wagon["group"];
}) {
  const items = WAGONS.filter((w) => w.group === group);
  return (
    <div className="my-5 rounded-lg border border-gray-300 p-5">
      <p className="mb-2 text-lg font-bold tracking-wide text-gray-900">{title}</p>
      <p className={`${cls.body} mb-4`}>{desc}</p>
      <WagonProductGrid items={items} />
    </div>
  );
}

export default function Page() {
  const featured = WAGONS.filter((w) =>
    (FEATURED_WAGONS as readonly string[]).includes(w.model),
  );

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 py-10">
        <nav className="mb-4 text-sm text-gray-500">
          <Link href="/" className="hover:underline">
            ホーム
          </Link>
          <span className="mx-1">/</span>
          <span>選び方ガイド</span>
          <span className="mx-1">/</span>
          <span className="text-gray-700">
            ライン作業の工具置き台ワゴンの選び方
          </span>
        </nav>

        <span className="mb-3 inline-block rounded bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-800">
          選び方ガイド
        </span>

        <h1 className={cls.h1}>
          ライン作業の工具置き台に使えるワゴンの選び方｜部品の仮置き・移動作業を効率化
        </h1>

        <p className="mb-6 text-sm text-gray-500">
          公開日：2026年6月30日／約14分で読めます
        </p>

        <img
          src={`${ARTICLE_IMG}/line-work-tool-wagon-hero.jpg`}
          alt="ライン作業で工具置き台ワゴンを使うイメージ"
          className="my-6 w-full rounded-lg"
        />

        <div className="my-8 rounded-lg border border-gray-300 bg-gray-100 p-5">
          <p className="mb-2 font-bold tracking-wide text-gray-900">
            ライン作業の工具置き台ワゴンの選び方（要点）
          </p>
          <p className={cls.body.replace("mb-4 ", "")}>
            ライン作業の工具置き台に使うワゴンは、「置きたい工具・部品の量」「作業台との高さ」「移動頻度」「棚の段数」「キャスターの固定性」「部品の落下しにくさ」を確認して選びます。小物工具や部品を作業場所の近くに置きたい場合は、棚板を皿型・フラット型で使い分けられるキャスター付きツールワゴンが候補になります。
          </p>
        </div>

        <p className={cls.body}>
          ライン作業では、工具・部品・測定具・治具・消耗品を作業者の近くに置く必要があります。しかし、作業台の上に物を置きすぎると作業スペースが狭くなり、必要な物を探す時間も増えがちです。
        </p>
        <p className={cls.body}>
          かといって床に置くと、5S（整理・整頓・清掃・清潔・しつけ）や安全面、取り間違いの観点から避けたい場面が多くなります。こうしたとき、キャスター付きの工具置き台ワゴンを使うと、作業場所の近くに「仮置きスペース」を作りやすくなります。本記事では、ライン作業・ピッキング作業で使えるツールワゴンの選び方を整理し、TRUSCOバーディワゴンのサイズ・高さ・段数の選び方まで解説します。
        </p>

        <H2>ライン作業で工具置き台ワゴンが必要になる場面</H2>

        <img
          src={`${ARTICLE_IMG}/tool-wagon-beside-workbench.jpg`}
          alt="コンパクトワゴンを作業台横に置くイメージ"
          className="my-6 w-full rounded-lg"
        />

        <H3>工具を取りに行く移動時間を減らしたい</H3>
        <p className={cls.body}>
          よく使う工具が離れた工具棚にあると、取りに行く移動時間が積み重なります。工具や測定具をワゴンにまとめて作業者の近くに置けば、こうした移動を減らしやすくなります。
        </p>

        <H3>部品や商品を作業台に置きっぱなしにしたくない</H3>
        <img
          src={`${ARTICLE_IMG}/parts-temporary-storage-wagon.jpg`}
          alt="部品や商品の仮置きにワゴンを使うイメージ"
          className="my-6 w-full rounded-lg"
        />
        <p className={cls.body}>
          作業台に部品箱を直接置くと、作業スペースが圧迫されます。検品前・検品後、組立前・組立後の物を分けて置きたい現場では、段で分けられるワゴンが役立ちます。
        </p>

        <H3>ピッキング済み部品をラインへ運びたい</H3>

        <img
          src={`${ARTICLE_IMG}/picking-work-wagon.jpg`}
          alt="工場内ピッキングでワゴンを使うイメージ"
          className="my-6 w-full rounded-lg"
        />

        <p className={cls.body}>
          工場内の棚からラインまで部品を運ぶ用途にも使えます。小規模なピッキングや、ラインサイドへの部品供給に向いています。
        </p>

        <H2>台車・作業台・物品棚と工具置き台ワゴンの違い</H2>

        <img
          src={`${ARTICLE_IMG}/wagon-cart-workbench-comparison.jpg`}
          alt="台車・ワゴン・作業台の違いを示すイメージ"
          className="my-6 w-full rounded-lg"
        />

        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="p-3 text-left">種類</th>
                <th className="p-3 text-left">向いている用途</th>
                <th className="p-3 text-left">向いていない場面</th>
                <th className="p-3 text-left">主な導線</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["ツールワゴン", "工具・部品の仮置き、作業場所の近くでの補助台", "重量物をまとめて運ぶ、長期保管", "バーディワゴン"],
                ["運搬台車", "箱物・重量物をまとめて運ぶ", "段ごとの仕分け、作業台横での常設", "カルティオ・運搬台車"],
                ["作業台", "組立・検査・梱包など作業そのもの", "移動しながらの使用", "軽量・中量作業台"],
                ["物品棚", "工具・部品の長期保管", "移動・仮置き", "物品棚"],
              ].map((row) => (
                <tr key={row[0]} className="border-b border-gray-300">
                  <th className="bg-gray-100 p-3 text-left align-top font-bold">
                    {row[0]}
                  </th>
                  <td className="p-3 align-top">{row[1]}</td>
                  <td className="p-3 align-top">{row[2]}</td>
                  <td className="p-3 align-top">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <H3>まとまった荷物を運ぶならカルティオなどの台車</H3>
        <p className={cls.body}>
          段で仕分けるより、箱物や重量物をまとめて運びたい場合は運搬台車が向いています。
        </p>
        <YahooProductGrid items={KARTIO.slice(0, 2)} />
        <CTA url={URL_DAISHA_LIST} label="箱物や重量物の運搬にはカルティオ・運搬台車を確認する" />

        <H3>作業そのものを行うなら作業台</H3>
        <p className={cls.body}>
          組立・検査・梱包など、作業そのものを行う場所には作業台が向いています。
        </p>
        <YahooProductGrid items={KEIRYO.slice(0, 2)} />
        <CTA url={URL_KEIRYO_LIST} label="組立・検査・梱包作業には軽量作業台・中量作業台を確認する" />

        <H3>長期保管なら物品棚</H3>
        <p className={cls.body}>
          作業中の仮置きではなく、工具・部品を長期で保管するなら物品棚が向いています。
        </p>
        <CTA url={URL_BUPPINDANA} label="工具・部品の保管には物品棚も確認する" />

        <H2>ライン作業用ワゴンを選ぶ6つのポイント</H2>

        <img
          src={`${ARTICLE_IMG}/tool-wagon-size-comparison.jpg`}
          alt="工具ワゴンのサイズ・段数を比較するイメージ"
          className="my-6 w-full rounded-lg"
        />

        <H3>1. 間口・奥行は作業台横のスペースで選ぶ</H3>
        <div className="my-4 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="p-3 text-left">サイズ（間口×奥行）</th>
                <th className="p-3 text-left">目安の用途</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["600×400", "作業台横の省スペース。小物工具・少量部品の仮置き"],
                ["750×500", "標準サイズ。工具と部品箱をバランスよく"],
                ["900×600", "大きめの部品箱・箱物・コンテナの仮置き"],
              ].map((r) => (
                <tr key={r[0]} className="border-b border-gray-300">
                  <th className="bg-gray-100 p-3 text-left align-top font-bold">{r[0]}</th>
                  <td className="p-3 align-top">{r[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <H3>2. 高さは作業姿勢に合わせる</H3>
        <div className="my-4 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="p-3 text-left">高さ</th>
                <th className="p-3 text-left">目安の用途</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["H600", "低めで安定。座り作業や低い作業台横に"],
                ["H740", "一般的な作業台と高さを合わせやすい"],
                ["H880", "立ち作業・ラインサイドで手を伸ばしやすい高さ"],
              ].map((r) => (
                <tr key={r[0]} className="border-b border-gray-300">
                  <th className="bg-gray-100 p-3 text-left align-top font-bold">{r[0]}</th>
                  <td className="p-3 align-top">{r[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <H3>3. 段数は分けて置きたいものの数で選ぶ</H3>
        <div className="my-4 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="p-3 text-left">段数</th>
                <th className="p-3 text-left">目安の用途</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["2段", "工具と部品箱をシンプルに置きたい場合"],
                ["3段", "工具・部品・消耗品・検品前後品を分けたい場合"],
              ].map((r) => (
                <tr key={r[0]} className="border-b border-gray-300">
                  <th className="bg-gray-100 p-3 text-left align-top font-bold">{r[0]}</th>
                  <td className="p-3 align-top">{r[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <H3>4. 棚板は皿型とフラット型を使い分ける</H3>
        <p className={cls.body}>
          バーディワゴンの棚板は、皿型・フラット型を表裏両面で使えます。皿型は縁があり、小物工具や部品の落下を抑えたい場合に。フラット型は平らで、箱物やケースを置きたい場合に向いています。
        </p>

        <H3>5. キャスターのロック性を確認する</H3>
        <p className={cls.body}>
          作業中にワゴンが動くと困るため、キャスターの固定性は重要です。バーディワゴンは、車輪と車軸の両方をロックするダブルロック仕様のキャスターを採用しています。また、アングル支柱に突起を出して棚板を固定することで、縦横の揺れを軽減する構造です。
        </p>

        <H3>6. 色は工程・部署・用途で分ける</H3>
        <p className={cls.body}>
          ホワイト、ヤンググリーン、ブラック、オレンジ、レッド系など複数色があります。工程別・部署別・用途別に色分けすると、管理や取り違い防止に役立ちます。
        </p>

        <H2>用途別に選ぶTRUSCOバーディワゴン</H2>
        <UseCaseCard
          title="省スペースの工具置き台には 600×400・H600"
          desc="作業台横のわずかなスペースに置きやすいコンパクトサイズ。小物工具や少量部品の仮置きに。"
          group="space"
        />
        <UseCaseCard
          title="標準的な部品仮置きには 750×500・H600"
          desc="工具と部品箱をバランスよく置ける標準サイズ。迷ったらここから。"
          group="standard"
        />
        <UseCaseCard
          title="大型部品や箱物の仮置きには 900×600"
          desc="大きめの部品箱・箱物・コンテナを仮置きしたい場合に。"
          group="large"
        />
        <UseCaseCard
          title="一般作業台横の3段ワゴンには H740タイプ"
          desc="一般的な作業台と高さを合わせやすい3段タイプ。工具・部品・消耗品を分けて。"
          group="h740"
        />
        <UseCaseCard
          title="立ち作業・ラインサイドには H880タイプ"
          desc="立ち作業で手を伸ばしやすい高さ。ラインサイドの工具置き台に。"
          group="h880"
        />
        <UseCaseCard
          title="工程別・部署別に分けるならカラータイプ"
          desc="色で管理を分けたい現場に。H880・600×400・3段のカラーバリエーション。"
          group="color"
        />

        <H2>代表的なバーディワゴンを確認する</H2>
        <p className={cls.body}>
          ライン作業の工具置き台としてよく選ばれるサイズ・高さの組み合わせです。詳細仕様は各商品ページでご確認ください。
        </p>
        <WagonProductGrid items={featured} />

        <CTA url="https://item.rakuten.co.jp/crecote-shop/ta005289-bdw672w/" label="ライン作業の工具置き台に使えるバーディワゴンを確認する" />
        <CTA url="https://item.rakuten.co.jp/crecote-shop/ta005287-bdw662w/" label="作業台横に置きやすい600×400タイプを確認する" />
        <CTA url="https://item.rakuten.co.jp/crecote-shop/ta005291-bdw692w/" label="部品箱や治具を置きやすい750×500・900×600タイプを確認する" />

        <H2>TRUSCOバーディワゴン一覧比較表</H2>
        <p className={`${cls.bodySm} mb-4`}>
          ※サイズ・高さ・段数は型番からの整理です。最大積載量・均等積載量などの詳細は各商品ページでご確認ください（積載量は「棚1段あたりの均等積載」と「本体最大積載」で意味が異なります）。
        </p>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="p-3 text-left">画像</th>
                <th className="p-3 text-left">型番</th>
                <th className="p-3 text-left">サイズ</th>
                <th className="p-3 text-left">高さ</th>
                <th className="p-3 text-left">段数</th>
                <th className="p-3 text-left">色</th>
                <th className="p-3 text-left">向いている用途</th>
                <th className="p-3 text-left">リンク</th>
              </tr>
            </thead>
            <tbody>
              {WAGONS.map((w) => (
                <tr key={w.model} className="border-b border-gray-300">
                  <td className="p-2 align-top">
                    <img
                      src={productImage(w.imgId)}
                      alt={w.model}
                      loading="lazy"
                      className="h-16 w-16 rounded border border-gray-200 bg-gray-50 object-contain p-1"
                    />
                  </td>
                  <th className="whitespace-nowrap bg-gray-100 p-3 text-left align-top font-bold">
                    {w.model}
                  </th>
                  <td className="whitespace-nowrap p-3 align-top">{w.size}</td>
                  <td className="p-3 align-top">{w.height}</td>
                  <td className="p-3 align-top">{w.tier}</td>
                  <td className="p-3 align-top">{w.color}</td>
                  <td className="p-3 align-top">{w.use}</td>
                  <td className="p-3 align-top">
                    <ProductLink url={w.url} label="楽天で見る" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <H2>あわせて確認したい関連商品</H2>

        <H3>箱物や重量物の運搬にはカルティオ・運搬台車</H3>
        <p className={cls.body}>
          まとまった荷物の運搬には、静音タイプの台車「カルティオ」など運搬台車が向いています。
        </p>
        <YahooProductGrid items={KARTIO} />
        <CTA url={URL_DAISHA_LIST} label="運搬台車の一覧を確認する" />

        <H3>組立・検査・梱包には軽量作業台・中量作業台</H3>
        <p className={cls.body}>
          作業そのものを行う場所には作業台が向いています。荷重に応じて軽量・中量から選びます。
        </p>
        <p className="mb-2 mt-4 font-bold tracking-wide text-gray-900">軽量作業台</p>
        <YahooProductGrid items={KEIRYO} />
        <CTA url={URL_KEIRYO_LIST} label="軽量作業台の一覧を確認する" />
        <p className="mb-2 mt-4 font-bold tracking-wide text-gray-900">中量作業台</p>
        <YahooProductGrid items={CHURYO} />
        <CTA url={URL_CHURYO_LIST} label="中量作業台の一覧を確認する" />

        <H3>工具・部品の長期保管には物品棚</H3>
        <p className={cls.body}>
          長期保管には物品棚や工具保管庫が向いています。保管用と作業用で役割を分けると、現場の整理がしやすくなります。
        </p>
        <CTA url={URL_BUPPINDANA} label="工具・部品の保管には物品棚も確認する" />

        <H2>法人で導入する前に確認したいチェックリスト</H2>
        <ul className={`${cls.list} space-y-2`}>
          {[
            "置きたい工具や部品の量",
            "作業台横に置けるスペース",
            "作業姿勢に合う高さ（H600／H740／H880）",
            "2段で足りるか、3段が必要か",
            "棚板を皿型で使うか、フラット型で使うか",
            "ワゴンを移動させる頻度",
            "キャスター固定が必要か",
            "工程や部署で色分けするか",
            "台車や物品棚との役割分担",
            "最大積載量・均等積載量の確認",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="font-bold text-gray-900">☑</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <H2>まとめ｜ライン作業の工具置き台ワゴンは用途・サイズ・高さで選ぶ</H2>
        <ul className={cls.list}>
          <li>工具置き台には省スペースの600×400</li>
          <li>部品仮置きには750×500や900×600</li>
          <li>一般作業台横にはH740</li>
          <li>立ち作業にはH880</li>
          <li>工具や部品を分けたいなら3段</li>
          <li>まとまった荷物はカルティオなどの台車</li>
          <li>長期保管は物品棚</li>
        </ul>

        <CTA url="https://item.rakuten.co.jp/crecote-shop/ta005289-bdw672w/" label="ライン作業の工具置き台に使えるバーディワゴンを確認する" />
        <CTA url={URL_DAISHA_LIST} label="箱物や重量物の運搬にはカルティオ・運搬台車を確認する" />
        <CTA url={URL_BUPPINDANA} label="工具・部品の保管には物品棚も確認する" />
        <CTA url={URL_TRUSCO_LIST} label="現場や倉庫で必要な作業用品をまとめて確認する" />

        <H2>よくある質問（FAQ）</H2>
        <div className="my-6 space-y-6">
          {faqs.map((item) => (
            <div key={item.q}>
              <p className={cls.faqQ}>{item.q}</p>
              <p className={cls.body.replace("mb-4 ", "")}>{item.a}</p>
            </div>
          ))}
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      </main>
      <SiteFooter />
    </>
  );
}
