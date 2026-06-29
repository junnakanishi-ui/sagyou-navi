import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";

const SLUG = "flexible-container-bag-selection";
const SITE_URL = "https://sagyou-navi.com";

const IMAGES = {
  hero: "/images/articles/flexible-container-bag-worksite-hero.jpg",
  outletComparison: "/images/articles/flexible-container-bag-outlet-comparison.jpg",
  weatherResistant: "/images/articles/weather-resistant-flexible-container-bag.jpg",
  handPallet: "/images/articles/flexible-container-bag-hand-pallet.jpg",
  workbenchCart: "/images/articles/flexible-container-bag-workbench-cart.jpg",
  procurementChecklist: "/images/articles/flexible-container-bag-procurement-checklist.jpg",
} as const;

export const metadata: Metadata = {
  title:
    "フレコンバッグの選び方｜排出口あり・なし、耐候性、用途別の使い分けを解説｜作業用品ナビ",
  description:
    "フレコンバッグの選び方を、排出口あり・なし、耐候性、用途別に解説します。大型土のう、ガラ袋、屋外保管、工場・倉庫の資材保管で失敗しないための確認ポイントと、ハンドパレット・運搬台車・作業台など関連用品の選び方も紹介します。",
  alternates: { canonical: `${SITE_URL}/articles/${SLUG}` },
  openGraph: {
    title:
      "フレコンバッグの選び方｜排出口あり・なし、耐候性、用途別の使い分けを解説",
    description:
      "フレコンバッグの選び方を、排出口あり・なし、耐候性、用途別に解説します。大型土のう、ガラ袋、屋外保管、工場・倉庫の資材保管で失敗しないための確認ポイントと、ハンドパレット・運搬台車・作業台など関連用品の選び方も紹介します。",
    type: "article",
    images: [IMAGES.hero],
  },
};

/* ===== リンク生成（UTM付与・%25二重エンコード回避） ===== */
const YAHOO_BASE = "https://store.shopping.yahoo.co.jp/signcity-yshop/";
const UTM = {
  source: "sagyou_navi",
  medium: "referral",
  campaign: "frecon_bag",
};

function buildUrl(base: string, utmContent: string) {
  const [path, fragment] = base.split("#");
  const sep = path.includes("?") ? "&" : "?";
  const query =
    `utm_source=${UTM.source}` +
    `&utm_medium=${UTM.medium}` +
    `&utm_campaign=${UTM.campaign}` +
    `&utm_content=${utmContent}`;
  return `${path}${sep}${query}${fragment ? "#" + fragment : ""}`;
}

type Store = "yahoo" | "gc" | "rakuten";
function storeUrl(store: Store, id: string) {
  switch (store) {
    case "gc":
      return `https://www.gc-select.com/products/${id}`;
    case "rakuten":
      return `https://item.rakuten.co.jp/signcity2024/${id}/`;
    default:
      return `${YAHOO_BASE}${id}.html`;
  }
}

/* ===== 商品データ（IDは検証済み・名称は仮置き＝公開前に各ストアで要確認） ===== */
type Product = { id: string; name: string; store?: Store };

const FRECON_NOEXIT: Product[] = [
  { id: "223182", name: "TRUSCO フレコンバッグ 排出口無し 10枚入り 1100φ×1100H TFG-002※名称仮" },
];
const FRECON_EXIT: Product[] = [
  { id: "223183", name: "TRUSCO フレコンバッグ 排出口有り 10枚入り 1100φ×1100H TFG-005※名称仮" },
];
const FRECON_WEATHER: Product[] = [
  { id: "225638", name: "TRUSCO 耐候性フレコンバッグ 排出口無し 1100φ×1050H TWFG-002A※名称仮" },
  { id: "225639", name: "TRUSCO 耐候性フレコンバッグ 排出口有り 1100φ×1050H TWFG-005A※名称仮" },
];

const HANDPALLET: Product[] = [
  { id: "168791", name: "TRUSCO ハンドパレットトラック 1.5t用 L1050×W550 軽量型 THPT15-105-55S※名称仮" },
  { id: "168790", name: "TRUSCO ハンドパレットトラック 1.5t用 L850×W520 軽量 THPT15-85-52S※名称仮" },
  { id: "168809", name: "TRUSCO ハンドパレットトラック PK付 2t L1150×W540 THP-20-511-PK※名称仮" },
  { id: "168827", name: "TRUSCO 電動ハンドパレットトラック E-TRA 1.2t用 L1070×W540 ET12-510SP※名称仮" },
];

const CART: Product[] = [
  { id: "167468", name: "TRUSCO 台車 カルティオ 新型 ブラック MPK-780-BK※名称仮" },
  { id: "190475", name: "TRUSCO 台車 カルティオ 新型 ブラック スチールストッパー付 MPK780BKSS※名称仮" },
  { id: "216713", name: "TRUSCO 樹脂台車 カルティオビッグ 折畳 900×600 ストッパー付 オリーブ MPK-906-OG-S※名称仮" },
  { id: "159750", name: "TRUSCO カルティオビッグ 固定ハンドルタイプ ブルー MPK-900-B※名称仮" },
];

const LIGHT_BENCH: Product[] = [
  { id: "161973", name: "TRUSCO 軽量作業台 TFAE型 1200×600×740 TFAEL-1260※名称仮" },
  { id: "160785", name: "TRUSCO 軽量作業台 基本タイプ ダークグレー 1200×750×740 BE-1275※名称仮" },
  { id: "161354", name: "TRUSCO 軽量立ち作業台 上棚付 ホワイト 900×600×1204 HAE-0960YURB W※名称仮" },
  { id: "160909", name: "TRUSCO 軽量作業台 基本タイプ ヤンググリーン 1200×750×740 AE-1200 YG※名称仮" },
  { id: "160767", name: "TRUSCO 軽量作業台 キャスター付 1200×750×806 BO-1275C75※名称仮" },
  { id: "173187", name: "TRUSCO 軽荷重作業台（300kg）AE型 900×450×H740 ホワイト AE-0945 W※名称仮" },
];

const MEDIUM_BENCH: Product[] = [
  { id: "161631", name: "TRUSCO 中量作業台 基本タイプ ヤンググリーン 1200×750×740 GWP-1275 YG※名称仮" },
  { id: "220888", name: "TRUSCO 中荷重作業台（800kg）GW型 900×450×H740 グリーン GWR-0945※名称仮" },
  { id: "221217", name: "TRUSCO 中荷重作業台（1200kg）HW型 1200×900×H740 グリーン HW-1209※名称仮" },
  { id: "161679", name: "TRUSCO 中量作業台 回転台付アンビルバイス付 グリーン 1800×750×740 HW-1800VRS※名称仮" },
  { id: "173342", name: "TRUSCO 中荷重作業台（500kg）AEW型 1500×900×H740 ダークグレー AEWP-1590※名称仮" },
  { id: "219000", name: "TRUSCO 中荷重作業台500kg CFW型 1800×750×H740 薄型2段引出付 ダークグレー CFWS-1875UDK2※名称仮" },
];

const SPECIAL_CART: Product[] = [
  { id: "160115", name: "TRUSCO 板物搬送台車 イタチ ITA-1※名称仮" },
  { id: "160110", name: "TRUSCO 樹脂製運搬車 グランカート サイレント サイドハンドル TPX-810※名称仮" },
  { id: "160111", name: "TRUSCO 樹脂製運搬車 グランカート サイレント サイドハンドル TPX-910※名称仮" },
  { id: "160109", name: "TRUSCO 樹脂製運搬車 グランカート サイレント サイドハンドル TPX-710※名称仮" },
];

/* ===== カテゴリ/一覧URL（エンコード済み・再エンコード禁止でそのまま定数化） ===== */
const LIST_URLS = {
  frecon: `${YAHOO_BASE}search.html?aq=&oq=&p=%E3%83%95%E3%83%AC%E3%82%B3%E3%83%B3%E3%83%90%E3%83%83%E3%82%B0&storeid=signcity-yshop&strcid=a5c8a5e9a5`,
  handpallet: `${YAHOO_BASE}search.html?aq=&oq=&p=%E3%83%8F%E3%83%B3%E3%83%89%E3%83%91%E3%83%AC%E3%83%83%E3%83%88&storeid=signcity-yshop`,
  cart: `${YAHOO_BASE}b1bfc8c2c2.html`,
  lightBench: `${YAHOO_BASE}search.html?p=%E8%BB%BD%E9%87%8F%E4%BD%9C%E6%A5%AD%E5%8F%B0#CentSrchFilter1`,
  mediumBench: `${YAHOO_BASE}search.html?aq=&oq=&p=%E4%B8%AD%E9%87%8F%E4%BD%9C%E6%A5%AD%E5%8F%B0&storeid=signcity-yshop`,
  grancart: `${YAHOO_BASE}search.html?p=%E3%82%B0%E3%83%A9%E3%83%B3%E3%82%AB%E3%83%BC%E3%83%88&view=grid`,
  trusco: `${YAHOO_BASE}a5c8a5e9a5.html#sideNaviItems`,
};

/* ===== 共通パーツ（自己完結インライン定義） ===== */
function ArticleFigure({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="relative my-6 aspect-[16/9] overflow-hidden rounded-lg bg-gray-50">
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

function ProductCard({ id, name, store = "yahoo" }: Product) {
  const s = (store ?? "yahoo") as Store;
  const href = buildUrl(storeUrl(s, id), `${SLUG}_${id}`);
  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow sponsored noopener"
      className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white transition hover:border-gray-400 hover:shadow-md"
    >
      <div className="relative aspect-square w-full overflow-hidden bg-gray-50">
        <Image
          src={`/products/${id}.jpg`}
          alt={name}
          fill
          className="object-contain p-2 transition group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 50vw, 250px"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <p className="text-sm font-bold leading-snug text-gray-900">{name}</p>
        <span className="mt-auto inline-flex w-fit items-center rounded bg-gray-900 px-3 py-1 text-xs font-bold text-white">
          Yahoo!ショッピングで見る →
        </span>
      </div>
    </a>
  );
}

function ProductGrid({ items }: { items: Product[] }) {
  return (
    <div className="my-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {items.map((p) => (
        <ProductCard key={p.id} {...p} />
      ))}
    </div>
  );
}

function ListCTA({
  href,
  utm,
  heading,
  text,
  label,
  strong = false,
}: {
  href: string;
  utm: string;
  heading: string;
  text: string;
  label: string;
  strong?: boolean;
}) {
  return (
    <div
      className={
        "my-6 rounded-lg border p-5 " +
        (strong ? "border-gray-900 bg-gray-50" : "border-gray-200 bg-gray-50")
      }
    >
      <h3 className="mb-2 text-lg font-bold text-gray-900">{heading}</h3>
      <p className="mb-4 text-sm leading-relaxed text-gray-700">{text}</p>
      <a
        href={buildUrl(href, utm)}
        target="_blank"
        rel="nofollow sponsored noopener"
        className={
          strong
            ? "inline-flex items-center gap-2 rounded-lg bg-gray-900 px-6 py-3 text-base font-bold text-white transition hover:bg-gray-700"
            : "inline-flex items-center gap-2 rounded-lg border border-gray-900 px-5 py-3 text-sm font-bold text-gray-900 transition hover:bg-gray-900 hover:text-white"
        }
      >
        {label} →
      </a>
    </div>
  );
}

/* ===== JSON-LD ===== */
const faqs = [
  {
    q: "フレコンバッグとは何ですか？",
    a: "フレコンバッグは、土砂・ガラ（コンクリート片など）・資材・粉粒体などを大量に入れて運搬・保管できる大型の袋です。フレキシブルコンテナバッグの略で、トンバッグ・トン袋・コンテナバッグ・大型土のうなどとも呼ばれます。多くは耐荷重1トンクラスで、上部の吊りベルトでクレーンやフォークリフトで吊り上げて運びます。",
  },
  {
    q: "排出口ありと排出口なしはどちらを選べばよいですか？",
    a: "中身を底から少しずつ出したい場合は排出口ありが向きます。ガラや大型土のうのように、入れたら基本的に上から出す・そのまま設置する用途では排出口なしが扱いやすいです。作業の出し方（上から/底から）を基準に選ぶのがおすすめです。",
  },
  {
    q: "耐候性フレコンバッグはどんな現場に向いていますか？",
    a: "屋外で日差し（紫外線）を受けながら一定期間仮置きする現場に向きます。UV剤入りで通常タイプより劣化しにくい設計ですが、劣化しないわけではないため、屋外保管時は袋の状態を定期的に確認してください。耐候の目安期間は製品により異なります。",
  },
  {
    q: "フレコンバッグは何を入れてもよいですか？",
    a: "製品ごとに耐荷重・適した内容物・使用条件が決まっています。鋭い突起物や想定外の重量物、有害物・粉じん・食品・特殊な内容物は、専用品や法令・処理ルール（産業廃棄物は廃棄物処理法など）の確認が必要です。必ず製品仕様と現場ルールを確認してください。",
  },
  {
    q: "フレコンバッグの運搬には何が必要ですか？",
    a: "クレーンやフォークリフトでの吊り上げのほか、パレットに載せて運ぶ場合はハンドパレットトラック、小分け資材や周辺用品の移動には運搬台車が役立ちます。吊り上げ時は耐荷重・吊りベルトの状態・周囲の安全を必ず確認してください。",
  },
  {
    q: "フレコンバッグと一緒にそろえると便利な用品はありますか？",
    a: "投入・仕分け・梱包作業を行う作業台、パレット運搬用のハンドパレット、構内移動用の運搬台車やグランカート、長尺材・板物用の専用台車などがあります。投入・保管・運搬・排出までの一連の作業を想定してそろえると効率的です。",
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
    { "@type": "ListItem", position: 2, name: "記事一覧", item: `${SITE_URL}/articles` },
    {
      "@type": "ListItem",
      position: 3,
      name: "フレコンバッグの選び方",
      item: `${SITE_URL}/articles/${SLUG}`,
    },
  ],
};

/* ===== ページ本体 ===== */
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

      <main className="mx-auto max-w-6xl px-4 py-8 md:px-6 text-gray-900">
        <nav className="mb-4 text-xs text-gray-500" aria-label="パンくず">
          <Link href="/" className="hover:underline">
            ホーム
          </Link>
          <span className="mx-1">/</span>
          <Link href="/articles" className="hover:underline">
            記事一覧
          </Link>
          <span className="mx-1">/</span>
          <span className="text-gray-700">フレコンバッグの選び方</span>
        </nav>

        <span className="mb-3 inline-block rounded bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-800">
          比較
        </span>

        <h1 className="mb-4 text-2xl font-bold leading-snug text-gray-900 sm:text-3xl">
          フレコンバッグの選び方｜排出口あり・なし、耐候性、用途別の使い分けを解説
        </h1>

        <p className="mb-6 text-sm text-gray-500">公開日：2026年6月27日／約13分で読めます</p>

        <figure className="relative mb-6 aspect-[16/9] overflow-hidden rounded-lg bg-gray-50">
          <Image
            src={IMAGES.hero}
            alt="建設現場で大型土のうとして使うフレコンバッグのイメージ"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 1152px"
          />
        </figure>

        <p className="mb-4 leading-relaxed text-gray-800">
          フレコンバッグ（フレキシブルコンテナバッグ）は、土砂・ガラ・資材などを大量に入れて運搬・保管できる大型の袋です。建設・解体・土木、工場、倉庫、農業・造園、産廃回収など幅広い現場で使われますが、いざ選ぶとなると「排出口はあり・なしどちらか」「屋外に置くなら耐候性は必要か」「何を入れてよいのか」で迷いがちです。この記事では、現場担当者・購買担当者が選定に使えるよう、排出口あり・なしの違い、耐候性の必要性、内容物別の選び方、そして投入・保管・運搬・排出まで含めた作業設計の考え方を整理します。
        </p>

        <div className="my-6 rounded-lg border-l-4 border-blue-500 bg-blue-50 p-5">
          <p className="leading-relaxed text-gray-800">
            フレコンバッグを選ぶときは、まず「中身を上から出すだけでよいか、底から排出したいか」「屋外で保管する期間があるか」「土砂・ガラ・資材・粉粒体など何を入れるか」を確認します。ガラや大型土のう用途では排出口なし、内容物を下から出したい場合は排出口あり、屋外仮置きや日差しを受ける現場では耐候性タイプが選択肢になります。あわせて、ハンドパレット・運搬台車・作業台など、投入・保管・運搬に必要な用品も確認しておくと作業しやすくなります。
          </p>
        </div>

        <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-4 text-xl font-bold text-gray-900">
          フレコンバッグとは？大型土のう・ガラ袋・資材保管に使う大型袋
        </h2>

        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">フレコンバッグの基本用途</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          フレコンバッグは、トンバッグ・トン袋・コンテナバッグ・大型土のうなどとも呼ばれ、多くは耐荷重1トンクラスです。上部の吊りベルトを使い、クレーンやフォークリフトで吊り上げて運びます。代表的な用途は、河川・崖などの仮設や土砂のせき止めに使う大型土のう、解体現場で出るコンクリート片などを入れるガラ袋、工場・倉庫での資材・粉粒体の保管などです。
        </p>

        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">フレコンバッグを選ぶ前に確認したいこと</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          選定でまず確認したいのは、(1)中身を上から出すか・底から排出するか（排出口あり/なし）、(2)屋外で保管する期間があるか（耐候性の要否）、(3)入れる物の種類・重さ・形状（突起物の有無）、(4)吊り上げ・運搬の方法、の4点です。これらが決まると、必要なタイプと関連用品が自然に絞り込めます。
        </p>

        <div className="my-6 rounded-lg border-l-4 border-amber-500 bg-amber-50 p-5">
          <p className="text-sm leading-relaxed text-gray-800">
            <strong className="text-amber-700">確認のお願い：</strong>
            フレコンバッグの耐荷重・適した内容物・吊り上げ方法・使用条件は製品ごとに異なります。必ず製品仕様と現場ルールを確認してください。鋭い突起物・想定外の重量物のほか、有害物・粉じん・食品・特殊な内容物は、専用品や法令・処理ルール（産業廃棄物は廃棄物処理法など）の確認が必要です。耐候性タイプでも劣化しないわけではないため、屋外保管時は袋の状態を定期的に確認してください。
          </p>
        </div>

        <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-4 text-xl font-bold text-gray-900">
          まず結論｜用途別に見るフレコンバッグの選び方
        </h2>
        <div className="my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border border-gray-200 px-3 py-2">用途・現場</th>
                <th className="border border-gray-200 px-3 py-2">向いているタイプ</th>
                <th className="border border-gray-200 px-3 py-2">確認ポイント</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-3 py-2">大型土のう（河川・崖の仮設、土砂せき止め）</td>
                <td className="border border-gray-200 px-3 py-2">排出口なし</td>
                <td className="border border-gray-200 px-3 py-2">耐荷重・設置の安定・屋外なら耐候性</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-3 py-2">解体現場のガラ袋</td>
                <td className="border border-gray-200 px-3 py-2">排出口なし</td>
                <td className="border border-gray-200 px-3 py-2">突起物による損傷・吊り上げ安全</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2">底から少しずつ排出したい資材・粉粒体</td>
                <td className="border border-gray-200 px-3 py-2">排出口あり</td>
                <td className="border border-gray-200 px-3 py-2">排出口径・内袋の要否・保管姿勢</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-3 py-2">屋外で一定期間 仮置きする</td>
                <td className="border border-gray-200 px-3 py-2">耐候性タイプ（排出口あり/なし）</td>
                <td className="border border-gray-200 px-3 py-2">耐候の目安期間・状態確認</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2">工場・倉庫での資材保管</td>
                <td className="border border-gray-200 px-3 py-2">用途に応じて選択</td>
                <td className="border border-gray-200 px-3 py-2">保管場所・運搬方法・作業台との併用</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-4 text-xl font-bold text-gray-900">
          排出口なしのフレコンバッグが向いている現場
        </h2>
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">ガラ袋・大型土のうとして使いやすい</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          排出口なしのタイプは、底に排出口がないぶん構造がシンプルで、入れたらそのまま設置する・上から取り出す用途に向きます。河川・崖の仮設や土砂せき止めの大型土のう、解体現場のガラ袋として使いやすいタイプです。TRUSCOのTFG-002（排出口無し・10枚入り・1100φ×1100H）は、耐荷重1トンクラス・ポリプロピレン製の代表的な大型土のう袋です（耐荷重・サイズは製品仕様で要確認）。
        </p>
        <ProductGrid items={FRECON_NOEXIT} />

        <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-4 text-xl font-bold text-gray-900">
          排出口ありのフレコンバッグが向いている現場
        </h2>
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">内容物を底から出したい場合に使いやすい</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          排出口ありのタイプは、底部の排出口から中身を少しずつ出せるため、資材や粉粒体を計量しながら使う・別容器へ移すといった作業に向きます。TRUSCOのTFG-005（排出口有り・10枚入り・1100φ×1100H）は、排出口径が約450mmで、耐荷重1トンクラスの大型土のう袋です（排出口径・耐荷重は製品仕様で要確認）。底から出す運用がある場合は、保管時の姿勢や排出口の縛り方もあわせて確認しましょう。
        </p>
        <ProductGrid items={FRECON_EXIT} />

        <ArticleFigure
          src={IMAGES.outletComparison}
          alt="排出口あり・なしのフレコンバッグの使い分けイメージ"
        />

        <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-4 text-xl font-bold text-gray-900">
          屋外保管・仮置きには耐候性フレコンバッグを検討する
        </h2>
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">通常タイプと耐候性タイプの違い</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          通常タイプは短期間の使用を想定したものが多く、屋外で長く日差し（紫外線）を受けると劣化が進みやすくなります。耐候性タイプはUV剤入りで、屋外で一定期間 仮置きする現場に向く設計です。TRUSCOのTWFG-002A（排出口無し）・TWFG-005A（排出口有り）は、UV剤入りの耐候性フレコンバッグで、TWFG-005Aは容量約1,350L・排出口径500mm・JIS Z1651準拠とされています（仕様は要確認）。ただし耐候性タイプでも劣化しないわけではないため、屋外保管時は袋の状態を定期的に確認してください。
        </p>
        <ArticleFigure
          src={IMAGES.weatherResistant}
          alt="屋外仮置き向けの耐候性フレコンバッグのイメージ"
        />
        <ProductGrid items={FRECON_WEATHER} />

        <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-4 text-xl font-bold text-gray-900">
          4種類のTRUSCOフレコンバッグ比較表
        </h2>
        <p className="mb-2 text-sm text-gray-600">
          ※下表は代表的な仕様の目安です。耐荷重・サイズ・排出口径・耐候性能は購入前に必ず製品仕様をご確認ください。
        </p>
        <div className="my-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border border-gray-200 px-3 py-2">型番</th>
                <th className="border border-gray-200 px-3 py-2">排出口</th>
                <th className="border border-gray-200 px-3 py-2">耐候性</th>
                <th className="border border-gray-200 px-3 py-2">サイズ（目安）</th>
                <th className="border border-gray-200 px-3 py-2">主な用途</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-3 py-2">TFG-002</td>
                <td className="border border-gray-200 px-3 py-2">なし</td>
                <td className="border border-gray-200 px-3 py-2">通常</td>
                <td className="border border-gray-200 px-3 py-2">1100φ×1100H</td>
                <td className="border border-gray-200 px-3 py-2">大型土のう・ガラ袋</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-3 py-2">TFG-005</td>
                <td className="border border-gray-200 px-3 py-2">あり（径約450mm）</td>
                <td className="border border-gray-200 px-3 py-2">通常</td>
                <td className="border border-gray-200 px-3 py-2">1100φ×1100H</td>
                <td className="border border-gray-200 px-3 py-2">底から排出したい資材・粉粒体</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2">TWFG-002A</td>
                <td className="border border-gray-200 px-3 py-2">なし</td>
                <td className="border border-gray-200 px-3 py-2">耐候性（UV剤入り）</td>
                <td className="border border-gray-200 px-3 py-2">1100φ×1050H</td>
                <td className="border border-gray-200 px-3 py-2">屋外仮置きの大型土のう・ガラ袋</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-3 py-2">TWFG-005A</td>
                <td className="border border-gray-200 px-3 py-2">あり（径約500mm）</td>
                <td className="border border-gray-200 px-3 py-2">耐候性（UV剤入り・JIS準拠）</td>
                <td className="border border-gray-200 px-3 py-2">1100φ×1050H</td>
                <td className="border border-gray-200 px-3 py-2">屋外仮置き＋底から排出</td>
              </tr>
            </tbody>
          </table>
        </div>
        <ListCTA
          href={LIST_URLS.frecon}
          utm={`${SLUG}_freconlist`}
          heading="用途に合うフレコンバッグを一覧から探す"
          text="排出口あり・なし、耐候性タイプ、サイズ違いなど、現場に合うフレコンバッグを一覧で確認できます。"
          label="フレコンバッグ一覧ページへ"
          strong
        />

        <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-4 text-xl font-bold text-gray-900">
          フレコンバッグを使う現場では運搬用品も一緒に確認する
        </h2>
        <p className="mb-4 leading-relaxed text-gray-800">
          フレコンバッグは「入れて終わり」ではなく、投入・保管・運搬・排出までの一連の流れで使います。袋だけでなく、運搬・作業の用品もあわせて確認しておくと、現場の作業がスムーズになります。
        </p>

        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">パレット運搬が多いならハンドパレット</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          フレコンバッグをパレットに載せて移動する場面が多い現場では、ハンドパレットトラックが役立ちます。積載質量（1.5t用・2t用など）、フォーク長さ・幅、手動か電動かを、扱う重量と通路幅に合わせて選びましょう。
        </p>
        <ArticleFigure
          src={IMAGES.handPallet}
          alt="フレコンバッグ運搬に使うハンドパレットトラックのイメージ"
        />
        <ProductGrid items={HANDPALLET} />
        <ListCTA
          href={LIST_URLS.handpallet}
          utm={`${SLUG}_handpalletlist`}
          heading="パレット運搬に使うハンドパレットを確認する"
          text="積載質量・フォークサイズ・手動/電動を、扱う重量と通路幅に合わせて選びましょう。"
          label="ハンドパレット一覧へ"
        />

        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">小分け資材や周辺用品の移動には運搬台車</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          小分けにした資材や工具、周辺用品の構内移動には、扱いやすい運搬台車が便利です。折りたたみ式やストッパー付き、静音タイプなど、保管スペースや床面・騒音条件に合わせて選べます。
        </p>
        <ProductGrid items={CART} />
        <ListCTA
          href={LIST_URLS.cart}
          utm={`${SLUG}_cartlist`}
          heading="構内移動に使う運搬台車を確認する"
          text="折りたたみ・ストッパー付き・静音など、保管スペースや使う場所に合わせて選びましょう。"
          label="運搬台車一覧へ"
        />

        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">投入・仕分け・梱包作業には作業台を整える</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          フレコンバッグへの投入前後の仕分けや梱包、計量などの作業には、安定した作業台があると効率的です。比較的軽い作業中心なら軽量作業台、重量物を扱うなら中量（中荷重）作業台が目安です。天板サイズ・高さ・耐荷重・キャスターの有無で選びます。
        </p>
        <ArticleFigure
          src={IMAGES.workbenchCart}
          alt="フレコンバッグ投入作業に使う作業台と運搬台車のイメージ"
        />
        <p className="mb-2 mt-4 font-semibold text-gray-900">軽量作業台（比較的軽い作業向け）</p>
        <ProductGrid items={LIGHT_BENCH} />
        <ListCTA
          href={LIST_URLS.lightBench}
          utm={`${SLUG}_lightbenchlist`}
          heading="軽作業向けの軽量作業台を確認する"
          text="天板サイズ・高さ・キャスターの有無を、作業内容に合わせて選びましょう。"
          label="軽量作業台一覧へ"
        />
        <p className="mb-2 mt-4 font-semibold text-gray-900">中量・中荷重作業台（重量物を扱う作業向け）</p>
        <ProductGrid items={MEDIUM_BENCH} />
        <ListCTA
          href={LIST_URLS.mediumBench}
          utm={`${SLUG}_mediumbenchlist`}
          heading="重量物作業向けの中量作業台を確認する"
          text="耐荷重（500〜1200kgなど）・天板サイズ・引出やバイスの有無で選びましょう。"
          label="中量作業台一覧へ"
        />

        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">長尺材・板物が多い現場では専用台車も検討する</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          長尺材や板物を扱う現場では、板物搬送に適した専用台車（イタチなど）が役立ちます。また、構内での重量物移動全般には、静音性に配慮した樹脂製運搬車グランカートも選択肢です。運ぶ物の形状・重さ・床面に合わせて選びましょう。
        </p>
        <ProductGrid items={SPECIAL_CART} />
        <ListCTA
          href={LIST_URLS.grancart}
          utm={`${SLUG}_grancartlist`}
          heading="重量物の構内運搬にグランカートを確認する"
          text="運ぶ物の形状・重さ・床面・静音性の必要度に合わせて選びましょう。"
          label="グランカート販売一覧へ"
        />

        <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-4 text-xl font-bold text-gray-900">
          用途別｜フレコンバッグと関連用品の組み合わせ
        </h2>
        <div className="my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border border-gray-200 px-3 py-2">現場</th>
                <th className="border border-gray-200 px-3 py-2">フレコンバッグ</th>
                <th className="border border-gray-200 px-3 py-2">あわせて検討したい用品</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-3 py-2">建設・土木</td>
                <td className="border border-gray-200 px-3 py-2">排出口なし／屋外仮置きは耐候性</td>
                <td className="border border-gray-200 px-3 py-2">ハンドパレット、運搬台車</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-3 py-2">解体現場</td>
                <td className="border border-gray-200 px-3 py-2">排出口なし（ガラ袋）</td>
                <td className="border border-gray-200 px-3 py-2">ハンドパレット、グランカート</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2">工場</td>
                <td className="border border-gray-200 px-3 py-2">排出口あり（底排出）</td>
                <td className="border border-gray-200 px-3 py-2">中量作業台、運搬台車</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-3 py-2">倉庫</td>
                <td className="border border-gray-200 px-3 py-2">用途に応じて選択</td>
                <td className="border border-gray-200 px-3 py-2">ハンドパレット、軽量作業台</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2">農業・造園</td>
                <td className="border border-gray-200 px-3 py-2">排出口あり／屋外は耐候性</td>
                <td className="border border-gray-200 px-3 py-2">運搬台車、作業台</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-3 py-2">資材置き場</td>
                <td className="border border-gray-200 px-3 py-2">耐候性タイプ</td>
                <td className="border border-gray-200 px-3 py-2">板物搬送台車、グランカート</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-4 text-xl font-bold text-gray-900">
          フレコンバッグ選びでよくある失敗
        </h2>
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">排出口あり・なしを用途で選ばない</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          底から出す運用がないのに排出口ありを選んだり、その逆だったりすると、現場で使いにくくなります。中身の出し方（上から/底から）を基準に選びましょう。
        </p>
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">屋外に置くのに耐候性を確認しない</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          屋外で長く仮置きするのに通常タイプを使うと、紫外線で劣化が進みやすくなります。屋外保管がある場合は耐候性タイプを検討し、置いた後も状態を定期確認しましょう。
        </p>
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">内容物の重さ・突起物を確認しない</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          耐荷重を超える重量物や、鋭い突起物のあるガラなどは、袋の破損につながります。耐荷重と内容物の相性、必要なら内袋の使用を確認してください。
        </p>
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">運搬方法を後回しにする</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          袋だけ用意して、運ぶ手段（ハンドパレット・台車・吊り上げ機材）を考えていないと、現場で詰まります。投入から排出までの動線を先に設計しましょう。
        </p>
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">吊り上げ時の安全確認を怠る</h3>
        <div className="my-4 rounded-lg border-l-4 border-amber-500 bg-amber-50 p-5">
          <p className="text-sm leading-relaxed text-gray-800">
            フレコンバッグを吊り上げて運ぶ際は、耐荷重・吊りベルトの状態・吊り角度・周囲の安全を必ず確認してください。劣化した袋やベルトの使用、定格を超える積載は事故につながります。クレーン・玉掛けなどの作業は、資格・作業ルール・関係法令に従って行ってください。
          </p>
        </div>

        <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-4 text-xl font-bold text-gray-900">
          法人購買向けチェックリスト
        </h2>
        <ArticleFigure
          src={IMAGES.procurementChecklist}
          alt="フレコンバッグ導入前の法人購買チェックリストのイメージ"
        />
        <ul className="my-4 list-disc space-y-2 pl-6 text-gray-800">
          <li>入れる内容物（土砂・ガラ・資材・粉粒体など）を整理した</li>
          <li>排出口あり・なしを用途で決めた</li>
          <li>屋外保管の有無と保管期間を確認し、耐候性の要否を決めた</li>
          <li>内袋の要否（粉体・水分を含むものなど）を確認した</li>
          <li>耐荷重と内容物の重さ・突起物の相性を確認した</li>
          <li>吊り上げ方法（クレーン/フォーク）と安全手順を確認した</li>
          <li>運搬方法（ハンドパレット・台車・グランカート）を決めた</li>
          <li>投入・仕分け・梱包に使う作業台を検討した</li>
          <li>必要枚数と保管・廃棄（産廃ルール含む）を確認した</li>
          <li>製品仕様・型番・使用条件を購入前に確認した</li>
        </ul>

        <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-4 text-xl font-bold text-gray-900">
          まとめ｜フレコンバッグは中身・排出方法・保管場所・運搬方法で選ぶ
        </h2>
        <p className="mb-4 leading-relaxed text-gray-800">
          フレコンバッグは、(1)何を入れるか、(2)上から出すか底から出すか（排出口あり/なし）、(3)屋外で保管するか（耐候性の要否）、(4)どう運ぶか、の4点で選ぶと失敗しにくくなります。あわせて、ハンドパレット・運搬台車・作業台・専用台車など、投入から排出までの作業用品も検討しておくと、現場全体の効率が上がります。耐荷重・内容物・吊り上げ方法・使用条件は、必ず製品仕様と現場ルール・関係法令を確認してください。
        </p>

        <div className="my-8 rounded-lg border border-gray-300 bg-gray-50 p-6">
          <h3 className="mb-3 text-lg font-bold text-gray-900">関連用品をまとめて確認する</h3>
          <div className="flex flex-wrap gap-3">
            <a href={buildUrl(LIST_URLS.frecon, `${SLUG}_final_frecon`)} target="_blank" rel="nofollow sponsored noopener" className="inline-flex items-center rounded-lg bg-gray-900 px-4 py-2 text-sm font-bold text-white transition hover:bg-gray-700">フレコンバッグ一覧へ →</a>
            <a href={buildUrl(LIST_URLS.handpallet, `${SLUG}_final_handpallet`)} target="_blank" rel="nofollow sponsored noopener" className="inline-flex items-center rounded-lg bg-gray-900 px-4 py-2 text-sm font-bold text-white transition hover:bg-gray-700">ハンドパレット一覧へ →</a>
            <a href={buildUrl(LIST_URLS.cart, `${SLUG}_final_cart`)} target="_blank" rel="nofollow sponsored noopener" className="inline-flex items-center rounded-lg bg-gray-900 px-4 py-2 text-sm font-bold text-white transition hover:bg-gray-700">運搬台車一覧へ →</a>
            <a href={buildUrl(LIST_URLS.lightBench, `${SLUG}_final_lightbench`)} target="_blank" rel="nofollow sponsored noopener" className="inline-flex items-center rounded-lg bg-gray-900 px-4 py-2 text-sm font-bold text-white transition hover:bg-gray-700">軽量作業台一覧へ →</a>
            <a href={buildUrl(LIST_URLS.mediumBench, `${SLUG}_final_mediumbench`)} target="_blank" rel="nofollow sponsored noopener" className="inline-flex items-center rounded-lg bg-gray-900 px-4 py-2 text-sm font-bold text-white transition hover:bg-gray-700">中量作業台一覧へ →</a>
            <a href={buildUrl(LIST_URLS.grancart, `${SLUG}_final_grancart`)} target="_blank" rel="nofollow sponsored noopener" className="inline-flex items-center rounded-lg bg-gray-900 px-4 py-2 text-sm font-bold text-white transition hover:bg-gray-700">グランカート販売一覧へ →</a>
            <a href={buildUrl(LIST_URLS.trusco, `${SLUG}_final_trusco`)} target="_blank" rel="nofollow sponsored noopener" className="inline-flex items-center rounded-lg border border-gray-900 bg-white px-4 py-2 text-sm font-bold text-gray-900 transition hover:bg-gray-100">トラスコ中山一覧へ →</a>
          </div>
        </div>

        <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-4 text-xl font-bold text-gray-900">
          よくある質問（FAQ）
        </h2>
        <div className="my-4 space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="rounded-lg border border-gray-200 p-4">
              <p className="mb-2 font-bold text-gray-900">Q{i + 1}. {f.q}</p>
              <p className="text-sm leading-relaxed text-gray-700">{f.a}</p>
            </div>
          ))}
        </div>

        <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-4 text-xl font-bold text-gray-900">
          関連記事
        </h2>
        <ul className="my-4 list-disc space-y-2 pl-6 text-gray-800">
          <li>
            <Link href="/articles/board-material-transport-cart" className="text-gray-900 underline hover:no-underline">
              板物・長尺材の運搬台車の選び方
            </Link>
          </li>
          <li>
            <Link href="/articles/spot-cooler-rest-area" className="text-gray-900 underline hover:no-underline">
              スポットクーラー・休憩所の暑さ対策（現場の環境改善）
            </Link>
          </li>
        </ul>
      </main>
      <SiteFooter />
    </>
  );
}
