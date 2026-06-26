import type { Metadata } from "next";
import Image from "next/image";
import {
  ArticleLayout,
  ArticleContent,
  Breadcrumb,
  ArticleHeader,
  HeroImage,
  RelatedArticles,
  Disclaimer,
  FaqSection,
  type FaqItem,
  type RelatedArticle,
} from "@/components/article";

// =====================================================================
// 定数・ヘルパー
// =====================================================================
const SLUG = "outdoor-work-heat-clothing";
const ICE_EDGE_ID = "1124300805";

type Store = "gc" | "rakuten" | "yahoo";
const PRODUCT_IMAGE_EXT: Record<string, string> = {
  "1124801019": "png",
  "1124801022": "png",
  "1179040205": "png",
};
const gcImageUrl = (id: string) =>
  `/products/${id}.${PRODUCT_IMAGE_EXT[id] ?? "jpg"}`;
function storeUrl(id: string, store: Store): string {
  if (store === "gc") return `https://www.gc-select.com/products/${id}`;
  if (store === "rakuten")
    return `https://item.rakuten.co.jp/signcity2024/${id}/`;
  return `https://store.shopping.yahoo.co.jp/signcity-yshop/${id}.html`;
}
function buildUrl(base: string, utmContent: string): string {
  const [path, hash] = base.split("#");
  const sep = path.includes("?") ? "&" : "?";
  const utm = `utm_source=sagyou_navi&utm_medium=referral&utm_campaign=2026_heatstroke&utm_content=${utmContent}`;
  return `${path}${sep}${utm}${hash ? `#${hash}` : ""}`;
}
const productHref = (id: string, store: Store) =>
  buildUrl(storeUrl(id, store), `${SLUG}_${store}`);
const linkHref = (url: string, utm: string) => buildUrl(url, `${SLUG}_${utm}`);

const LIST = {
  inner:
    "https://store.shopping.yahoo.co.jp/signcity-yshop/search.html?aq=&oq=&p=%E7%86%B1%E4%B8%AD%E7%97%87+%E3%82%A4%E3%83%B3%E3%83%8A%E3%83%BC&storeid=signcity-yshop",
  insole:
    "https://store.shopping.yahoo.co.jp/signcity-yshop/search.html?aq=&oq=&p=%E3%82%A4%E3%83%B3%E3%82%BD%E3%83%BC%E3%83%AB&storeid=signcity-yshop",
  coolVest:
    "https://store.shopping.yahoo.co.jp/signcity-yshop/search.html?p=%E5%86%B7%E5%8D%B4%E3%83%99%E3%82%B9%E3%83%88#CentSrchFilter1",
  helmet:
    "https://store.shopping.yahoo.co.jp/signcity-yshop/search.html?aq=&oq=&p=%E3%83%98%E3%83%AB%E3%83%A1%E3%83%83%E3%83%88&storeid=signcity-yshop",
  preCooling: "https://www.gc-select.com/collections/2026-pre-cooling",
  heatItems:
    "https://store.shopping.yahoo.co.jp/signcity-yshop/eab32ec7ce6.html",
  trusco:
    "https://store.shopping.yahoo.co.jp/signcity-yshop/a5c8a5e9a5.html#sideNaviItems",
} as const;

// =====================================================================
// 商品データ
// =====================================================================
type Product = { id: string; name: string; store: Store; note?: string };

const INNER_LONG: Product[] = [
  {
    id: "171706",
    name: "バートル 長袖エアーフィット 4070-68 ミルスグレー",
    store: "yahoo",
    note: "長袖。直射日光・日焼け対策に",
  },
  {
    id: "172122",
    name: "おたふく BTパワーストレッチEVO ロングスリーブ クルーネック JW-726",
    store: "yahoo",
    note: "長袖・ストレッチ。動きやすさ重視",
  },
  {
    id: "172052",
    name: "リベルタ L/S クルーネック ホワイト FTW",
    store: "yahoo",
    note: "長袖・白系。熱を反射しやすい色",
  },
  {
    id: "172056",
    name: "リベルタ L/S クルーネック ブラック FTW",
    store: "yahoo",
    note: "長袖・黒系。汚れが目立ちにくい",
  },
];
const INNER_SHORT: Product[] = [
  {
    id: "171722",
    name: "バートル 半袖エアーフィット 4071-68 ミルスグレー",
    store: "yahoo",
    note: "半袖。空調服の下にも",
  },
  {
    id: "171713",
    name: "バートル 半袖エアーフィット 4071-29 ホワイト",
    store: "yahoo",
    note: "半袖・白。屋内・通気重視に",
  },
  {
    id: "172130",
    name: "おたふく BTパワーストレッチEVO ショートスリーブ クルーネック JW-728",
    store: "yahoo",
    note: "半袖・ストレッチ。アームカバーと併用に",
  },
];
const ARM_COVERS: Product[] = [
  {
    id: "172228",
    name: "ミエローブ 竹糸くんアームカバー 20 ブラック TK01-BK",
    store: "yahoo",
    note: "腕の日差し・汗対策に",
  },
  {
    id: "172238",
    name: "ミエローブ 竹糸くんアームカバー 40 グレー迷彩 TK06-GR",
    store: "yahoo",
    note: "迷彩柄。屋外作業になじむ",
  },
  {
    id: "172236",
    name: "ミエローブ 竹糸くんアームカバー 10 ホワイト TK05-WH",
    store: "yahoo",
    note: "白系。熱を反射しやすい",
  },
  {
    id: "172230",
    name: "ミエローブ 竹糸くんアームカバー 20 紺 TK01-NA",
    store: "yahoo",
    note: "落ち着いた紺。汚れが目立ちにくい",
  },
];
const TIGHTS: Product[] = [
  {
    id: "171764",
    name: "アタックベース 接触冷感ロングタイツ ブラック LL",
    store: "yahoo",
    note: "下半身の汗・ベタつき対策",
  },
  {
    id: "171768",
    name: "アタックベース 接触冷感ロングタイツ ブラック 4L",
    store: "yahoo",
    note: "大きいサイズ展開",
  },
  {
    id: "171770",
    name: "アタックベース 接触冷感ロングタイツ ブラック 5L",
    store: "yahoo",
    note: "ゆったりサイズも選べる",
  },
];
const INSOLES: Product[] = [
  {
    id: "172001",
    name: "TRUSCO シリカクリン 踏み抜き防止クールインソール M (23.5〜24.5cm)",
    store: "yahoo",
    note: "足元の蒸れ＋踏み抜き防止",
  },
  {
    id: "171999",
    name: "TRUSCO シリカクリン 踏み抜き防止クールインソール L (25.0〜26.0cm)",
    store: "yahoo",
    note: "吸湿・防滑。安全靴と併用",
  },
  {
    id: "172000",
    name: "TRUSCO シリカクリン 踏み抜き防止クールインソール LL (26.5〜28.0cm)",
    store: "yahoo",
    note: "大きいサイズ。立ち作業に",
  },
];
const COOL_VESTS: Product[] = [
  {
    id: "171779",
    name: "空調風神服 クールベスト The tough ブラック",
    store: "yahoo",
    note: "ファン付き。風で汗を気化",
  },
  {
    id: "171898",
    name: "バートル ACタクティカルベスト AC1154-35 ブラック",
    store: "yahoo",
    note: "空調ベスト本体（ファン・バッテリー別）",
  },
  {
    id: "171906",
    name: "バートル ACタクティカルベスト AC1154-60 アッシュグレー",
    store: "yahoo",
    note: "上半身の送風で体感を下げる",
  },
  {
    id: "203171",
    name: "BURTLE 冷却ベスト アイスクラフト IC101S ブラック",
    store: "yahoo",
    note: "保冷剤タイプ",
  },
  {
    id: "172464",
    name: "サンコー 冷蔵服3 ネイビー TKCV24FNV",
    store: "yahoo",
    note: "ペルチェ式の冷却ウェア",
  },
  {
    id: "172296",
    name: "サンコー ハーネス対応 冷蔵ベスト RZFHTVSBK",
    store: "yahoo",
    note: "ハーネス対応。高所作業に",
  },
  {
    id: "203375",
    name: "スリーライク 注水式冷却ベスト SMART-X グレー TL-WICB",
    store: "yahoo",
    note: "注水式。気化熱で冷却",
  },
  {
    id: "172034",
    name: "タジマ 清涼ファン 風雅パッド フルセット FP-AA37SEGYF",
    store: "yahoo",
    note: "背中のファンパッド",
  },
];
const HELMETS: Product[] = [
  {
    id: "158773",
    name: "TRUSCO ヘルメット 高通気タイプ ブルー DPM-1820B",
    store: "yahoo",
    note: "通気性重視タイプ",
  },
  {
    id: "158791",
    name: "TRUSCO ヘルメット 遮熱 涼帽 通気孔付 ホワイト TD-HB-FV-KP-W",
    store: "yahoo",
    note: "遮熱＋通気孔。白で熱を反射",
  },
  {
    id: "158777",
    name: "TRUSCO ヘルメット 超軽量 軽帽 通気孔付 フレッシュグリーン TD-AA17V-GN",
    store: "yahoo",
    note: "超軽量＋通気孔",
  },
  {
    id: "158783",
    name: "TRUSCO ヘルメット アメリカンタイプ ホワイト DPM-0169W",
    store: "yahoo",
    note: "つば付きで日差しを軽減",
  },
  {
    id: "1121983004",
    name: "GREEN CROSS-select ヘルメット（通気・遮熱タイプ）",
    store: "gc",
    note: "型番・仕様は商品ページで確認",
  },
  {
    id: "1121910324",
    name: "GREEN CROSS-select ヘルメット（通気タイプ）",
    store: "gc",
    note: "型番・仕様は商品ページで確認",
  },
  {
    id: "1121910323",
    name: "GREEN CROSS-select ヘルメット（通気タイプ）",
    store: "gc",
    note: "型番・仕様は商品ページで確認",
  },
  {
    id: "1121983007",
    name: "GREEN CROSS-select ヘルメット（遮熱タイプ）",
    store: "gc",
    note: "型番・仕様は商品ページで確認",
  },
];
const PRE_COOLING: Product[] = [
  {
    id: "1124801022",
    name: "アイスストロング IS-001",
    store: "gc",
    note: "作業前・休憩時の身体冷却に",
  },
  {
    id: "1179040205",
    name: "瞬間アイス",
    store: "gc",
    note: "叩いて冷やす瞬間冷却材",
  },
  {
    id: "1124801019",
    name: "くるっとクール",
    store: "gc",
    note: "首元などを手軽に冷やす",
  },
  {
    id: "1179036040",
    name: "冷感タオル 超大判サイズ スカイブルー",
    store: "gc",
    note: "濡らして使う大判冷感タオル",
  },
];

// =====================================================================
// 小コンポーネント
// =====================================================================
function ProductCard({ id, name, store, note }: Product) {
  const storeLabel =
    store === "gc"
      ? "GREEN CROSS-selectで見る"
      : store === "rakuten"
        ? "楽天で見る"
        : "Yahoo!ショッピングで見る";
  return (
    <a
      href={productHref(id, store)}
      target="_blank"
      rel="nofollow sponsored noopener"
      className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white transition hover:border-gray-400 hover:shadow-md"
    >
      <div className="relative aspect-square w-full overflow-hidden bg-gray-50">
        <Image
          src={gcImageUrl(id)}
          alt={name}
          fill
          className="object-contain p-2 transition group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 50vw, 250px"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <p className="text-sm font-bold leading-snug text-gray-900">{name}</p>
        {note ? (
          <p className="text-xs leading-relaxed text-gray-600">{note}</p>
        ) : null}
        <span className="mt-auto inline-flex w-fit items-center rounded bg-gray-900 px-3 py-1 text-xs font-bold text-white">
          {storeLabel} →
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
  label,
  utm,
  strong = false,
}: {
  href: string;
  label: string;
  utm: string;
  strong?: boolean;
}) {
  return (
    <a
      href={linkHref(href, utm)}
      target="_blank"
      rel="nofollow sponsored noopener"
      className={
        strong
          ? "my-3 inline-flex items-center gap-2 rounded-lg bg-gray-900 px-6 py-3 text-base font-bold text-white transition hover:bg-gray-700"
          : "my-3 inline-flex items-center gap-2 rounded-lg border border-gray-900 px-5 py-3 text-sm font-bold text-gray-900 transition hover:bg-gray-900 hover:text-white"
      }
    >
      {label} →
    </a>
  );
}
function IceEdgeCTA({ heading, button }: { heading: string; button: string }) {
  return (
    <div className="my-8 rounded-xl border border-gray-300 bg-gray-50 p-6">
      <p className="mb-3 text-base font-bold text-gray-900">{heading}</p>
      <a
        href={productHref(ICE_EDGE_ID, "gc")}
        target="_blank"
        rel="nofollow sponsored noopener"
        className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-gray-700"
      >
        {button} →
      </a>
    </div>
  );
}
function H2Summary({ children }: { children: React.ReactNode }) {
  return (
    <p className="my-3 rounded-md bg-gray-100 px-4 py-3 text-sm leading-relaxed text-gray-700">
      {children}
    </p>
  );
}

// =====================================================================
// メタデータ
// =====================================================================
export const metadata: Metadata = {
  title:
    "屋外作業の暑さ対策は服装から｜冷感インナー・UVカット・遮熱ウェアの選び方｜作業用品ナビ",
  description:
    "屋外作業の暑さ対策は、冷感インナー・UVカット・遮熱ウェア・冷却ベスト・ヘルメット・インソールなど、身につける用品を作業環境に合わせて選ぶことが大切です。工事現場・倉庫・警備・イベント設営などで使いやすい服装選びと法人導入のポイントを解説します。",
  alternates: {
    canonical:
      "https://sagyou-navi.com/articles/outdoor-work-heat-clothing",
  },
  openGraph: {
    title:
      "屋外作業の暑さ対策は服装から｜冷感インナー・UVカット・遮熱ウェアの選び方",
    description:
      "屋外作業の暑さ対策は、冷感インナー・UVカット・遮熱ウェア・冷却ベスト・ヘルメット・インソールなど、身につける用品を作業環境に合わせて選ぶことが大切です。",
    type: "article",
    images: ["/images/articles/outdoor-work-heat-clothing-hero.jpg"],
  },
};

// =====================================================================
// 構造化データ・FAQ
// =====================================================================
const FAQ: FaqItem[] = [
  {
    q: "屋外作業の暑さ対策では、まず何を見直すべきですか？",
    a: "まずは作業服の下に着るインナーを見直すのがおすすめです。汗を処理しやすい冷感インナーや、UVカット・遮熱機能を持つ長袖インナーは、屋外作業の暑さ対策の一つとして活用できます。あわせて、頭部・腕・足元・体幹の対策も確認しましょう。",
  },
  {
    q: "夏の屋外作業では半袖と長袖、どちらがよいですか？",
    a: "涼しさだけなら半袖が楽に感じる場合もありますが、屋外作業では日焼け・虫・擦れ・汚れを防ぐ観点から長袖インナーが向くこともあります。作業内容や現場ルールに合わせて、長袖インナー・半袖インナー・アームカバーを使い分けるとよいでしょう。",
  },
  {
    q: "冷感インナーを着れば熱中症を防げますか？",
    a: "冷感インナーや冷却用品は暑さ対策の補助であり、着用していれば熱中症を防げるという意味ではありません。WBGT確認、こまめな休憩、水分・塩分補給、作業時間の調整とあわせて活用することが重要です。",
  },
  {
    q: "屋外作業では冷却ベストも必要ですか？",
    a: "高温環境や長時間作業では、冷却ベストが役立つ場合があります。ただし、電源の有無、保冷剤の交換、ハーネス対応、作業姿勢への影響などを確認して選ぶ必要があります。冷感インナーと併用する場合も、動きにくくならないか確認しましょう。",
  },
  {
    q: "安全靴の中が暑い場合はどう対策できますか？",
    a: "安全靴の中は熱や湿気がこもりやすいため、クールインソールの活用が選択肢になります。踏み抜き防止機能付きのインソールであれば、暑さ対策だけでなく足元の安全面もあわせて確認できます。",
  },
  {
    q: "会社でまとめて暑さ対策用品を支給する場合の注意点は？",
    a: "サイズ展開、洗い替え枚数、作業内容、着用ルール、空調服や冷却ベストとの併用可否を確認します。現場によって必要な用品が異なるため、全員に同じものを一律支給するのではなく、屋外作業・倉庫作業・警備・イベント設営などに分けて検討するのがおすすめです。",
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "ホーム",
      item: "https://sagyou-navi.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "記事一覧",
      item: "https://sagyou-navi.com/articles",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "屋外作業の暑さ対策は服装から",
      item: "https://sagyou-navi.com/articles/outdoor-work-heat-clothing",
    },
  ],
};

const RELATED: RelatedArticle[] = [
  {
    href: "/articles/board-material-transport-cart",
    label:
      "板物の運搬に便利な台車とは？アルミ複合板・長尺材を安全に運ぶ選び方",
  },
  {
    href: "/articles/led-floodlight-selection",
    label: "LED投光器の選び方｜現場・倉庫の作業灯から看板照明まで",
  },
  {
    href: "/articles/kartio-big-offroad",
    label:
      "カルティオビッグ・オフロードとは？悪路・段差に強い大型樹脂台車の使いどころ",
  },
  {
    href: "/articles/safety-shoes-jis-jsaa",
    label:
      "安全靴・プロテクティブスニーカーの違い｜JIS T8101とJSAA規格の見方",
  },
];

// =====================================================================
// ページ本体
// =====================================================================
export default function Page() {
  return (
    <ArticleLayout faq={FAQ}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Breadcrumb current="屋外作業の暑さ対策は服装から" />
      <ArticleHeader
        category="compare"
        readingTime={14}
        title="屋外作業の暑さ対策は服装から"
        subtitle="冷感インナー・UVカット・遮熱ウェアの選び方"
      />
      <HeroImage
        src="/images/articles/outdoor-work-heat-clothing-hero.jpg"
        alt="屋外作業で冷感インナーや暑さ対策用品を身につける作業者のイメージ"
      />

      <ArticleContent>
        <p className="mb-4 leading-relaxed text-muted-foreground">
          上半身・腕・下半身・足元・頭部・体幹・作業前後まで、部位別に“身につける暑さ対策用品”を整理します。
        </p>

        <p className="mb-4 leading-relaxed">
          夏の屋外作業では、気温だけでなく、直射日光や照り返し、作業服内にこもる汗と蒸れ、ヘルメット内の熱、靴の中の不快感まで、さまざまな“暑さ”が重なります。暑さ対策は「空調服だけ」「冷却ベストだけ」と一点だけで考えるより、作業服の下から足元まで、服装全体で組み立てるのが効果的です。
        </p>
        <p className="mb-6 leading-relaxed">
          この記事では、屋外作業で使う“身につける暑さ対策用品”を、上半身（インナー）・腕（アームカバー）・下半身（ロングタイツ）・足元（インソール）・体幹（冷却ベスト）・頭部（ヘルメット）・作業前後（プレクーリング）の部位別に整理します。中心となるインナーには、遮熱・UVカット・接触冷感などをまとめて備えた冷感コンプレッションシャツ「ICE
          EDGE」も紹介します。
        </p>

        <div className="mb-6 rounded-md border-l-4 border-blue-500 bg-blue-50 p-4">
          <p className="mb-1 text-sm font-bold text-blue-900">まずは結論</p>
          <p className="text-sm leading-relaxed text-blue-900">
            屋外作業の暑さ対策では、まず作業服の下に着るインナー、直射日光を受けやすい腕・頭部、汗や蒸れがこもりやすい足元を見直すことが大切です。冷感インナー、UVカットインナー、冷却ベスト、通気性のあるヘルメット、クールインソールなどを作業内容に合わせて選ぶと、暑さ対策の一つとして活用できます。ただし、服装や冷却用品だけで熱中症を防げるわけではないため、WBGT確認、休憩、水分・塩分補給、作業時間の調整と併用することが重要です。
          </p>
        </div>

        <div className="mb-8 rounded-md border-l-4 border-amber-500 bg-amber-50 p-4">
          <p className="text-xs leading-relaxed text-amber-900">
            <strong>
              冷感インナーや冷却ベストなどの着用品は、暑さ対策の補助です。着用していれば熱中症を防げるという意味ではないため、WBGT確認・休憩・水分塩分補給・作業時間管理と併用することが重要です。
            </strong>{" "}
            持病のある方・服薬中の方・水分塩分制限のある方は主治医・産業医の指示を優先してください。なお、ICE
            EDGEの「最大-12℃」はJIS L
            1951にもとづく生地段階での試験結果であり、体感温度の低下を保証するものではありません。商品の仕様・価格・在庫は各商品ページの最新情報をご確認ください。
          </p>
        </div>

        <h2 className="mb-2 mt-10 border-l-4 border-gray-900 pl-3 text-xl font-bold">
          屋外作業の暑さ対策は「服装全体」で考える
        </h2>
        <H2Summary>
          暑さは上半身だけでなく、頭・腕・足元にもこもります。部位別に組み合わせると、現場に合った対策になります。
        </H2Summary>
        <h3 className="mb-2 mt-6 text-lg font-bold">
          暑さは上半身だけでなく、頭・腕・足元にもこもる
        </h3>
        <p className="mb-4 leading-relaxed">
          直射日光を受ける頭部、汗がこもる作業服の内側、日焼けしやすい腕、蒸れやすい靴の中、太もも・膝まわりの汗とベタつき——屋外作業の暑さは、身体のあちこちに同時に現れます。どこか一点だけを冷やしても、別の部位の不快感が残れば、作業効率や集中力に影響します。
        </p>
        <h3 className="mb-2 mt-6 text-lg font-bold">
          冷感インナーだけでなく、部位別に組み合わせる
        </h3>
        <p className="mb-4 leading-relaxed">
          そこで、インナー（汗処理・接触冷感・遮熱・UV）、アームカバー（腕の日差し・汗）、ロングタイツ（下半身の汗・ベタつき）、インソール（靴内の蒸れ・踏み抜き）、冷却ベスト（体幹の冷却）、ヘルメット（通気・遮熱）、プレクーリング用品（作業前・休憩時の冷却）を、作業内容に合わせて組み合わせます。次章から部位別に見ていきます。
        </p>

        <h2 className="mb-2 mt-10 border-l-4 border-gray-900 pl-3 text-xl font-bold">
          まず見直したいのは作業服の下に着る冷感インナー
        </h2>
        <H2Summary>
          暑さ対策の入口はインナー。汗処理・接触冷感・遮熱・UVを備えた専用インナーが、屋外作業では扱いやすくなります。
        </H2Summary>
        <h3 className="mb-2 mt-6 text-lg font-bold">
          屋外作業では綿Tシャツより専用インナーが向く場合がある
        </h3>
        <p className="mb-4 leading-relaxed">
          綿のTシャツは汗を吸う一方で乾きにくく、汗を含むと重くなって作業服の中で不快感が出ることがあります。冷感インナーやコンプレッションシャツは、汗を素早く処理し、身体に程よくフィットして動きやすいのが特徴です。作業内容に応じて長袖・半袖を使い分けます。
        </p>
        <h3 className="mb-2 mt-6 text-lg font-bold">
          長袖インナーはUVカット・肌の露出対策にも使える
        </h3>
        <p className="mb-4 leading-relaxed">
          「夏なのに長袖？」と思われがちですが、長袖は直射日光を肌に直接当てにくく、腕の擦れ・汚れ・虫・日焼けの対策にもなります。UVカット機能のあるインナーなら紫外線対策としても役立ちます。後述のICE
          EDGEは、商品ページで紫外線遮蔽率96%と紹介されています。
        </p>
        <h3 className="mb-2 mt-6 text-lg font-bold">
          ICE EDGEは遮熱・UV・冷感を備えた多機能インナー
        </h3>
        <p className="mb-3 leading-relaxed">
          ICE
          EDGE（アイスエッジ）は、商品ページで遮熱・UVカット・接触冷感・消臭・防虫・ストレッチといった機能が紹介されている冷感コンプレッションシャツです。商品ページによると、着用すると最大-12℃の遮熱効果が期待できると紹介されていますが、
          <strong>
            この-12℃はJIS L
            1951にもとづく生地段階での試験結果であり、実際の体感温度の低下を保証するものではありません
          </strong>
          。また、特許取得のパウダー「SPAORE」を配合し、体幹・重心の安定が期待でき、転倒やつまずき事故の減少に貢献できると紹介されていますが、効果には個人差があり、着用すれば必ず転倒を防げるというものではありません。色は黒、サイズはM/L/LL/3L展開で、法人支給にも選びやすい構成です。
        </p>
        <div className="mx-auto my-6 max-w-xs">
          <ProductCard
            id={ICE_EDGE_ID}
            name="ICE EDGE アイスエッジ 冷感コンプレッションシャツ（黒 / M・L・LL・3L）"
            store="gc"
            note="遮熱・UVカット・接触冷感・消臭・防虫・ストレッチ。屋外作業や工場・工事現場の暑さ対策インナーに"
          />
        </div>
        <IceEdgeCTA
          heading="屋外作業向けの冷感コンプレッションシャツを探す"
          button="ICE EDGE 冷感コンプレッションシャツを確認する"
        />

        <h2 className="mb-2 mt-10 border-l-4 border-gray-900 pl-3 text-xl font-bold">
          屋外作業向けインナーの選び方
        </h2>
        <H2Summary>
          長袖は日差し・露出対策、半袖は軽快さ。現場と作業内容で使い分け、法人支給はサイズと洗い替えを確認します。
        </H2Summary>
        <h3 className="mb-2 mt-6 text-lg font-bold">
          長袖インナーが向いている現場
        </h3>
        <p className="mb-3 leading-relaxed">
          建設・土木、草刈り、警備、イベント設営など、日差しが強く腕を露出しにくい作業では、長袖インナーが向きます。UV・遮熱機能で肌を守りつつ、汗を処理します。
        </p>
        <ProductGrid items={INNER_LONG} />
        <h3 className="mb-2 mt-6 text-lg font-bold">
          半袖インナーが向いている現場
        </h3>
        <p className="mb-3 leading-relaxed">
          袖まわりを軽くしたい、屋内・半屋外作業、空調服の下で腕まわりをすっきりさせたい場合は半袖が便利です。腕の日差し対策はアームカバーで別途補えます。
        </p>
        <ProductGrid items={INNER_SHORT} />
        <h3 className="mb-2 mt-6 text-lg font-bold">
          法人支給ではサイズ展開・洗い替え・着用感を確認する
        </h3>
        <p className="mb-3 leading-relaxed">
          M/L/LL/3Lなどのサイズ展開、1人あたりの洗い替え枚数、長袖が苦手な人向けの「半袖＋アームカバー」という選択肢も検討します。まず一部の現場で試してから広げる導入もおすすめです。
        </p>
        <ListCTA
          href={LIST.inner}
          label="冷感インナー・作業用インナーを一覧で確認する"
          utm="inner_list"
        />

        <h2 className="mb-2 mt-10 border-l-4 border-gray-900 pl-3 text-xl font-bold">
          腕の日差し・汗対策にはアームカバーも選択肢
        </h2>
        <H2Summary>
          半袖の軽快さを活かしつつ腕をカバー。脱着しやすく、休憩時の体温調整にも使えます。
        </H2Summary>
        <h3 className="mb-2 mt-6 text-lg font-bold">
          半袖インナーや半袖作業服と組み合わせやすい
        </h3>
        <p className="mb-3 leading-relaxed">
          半袖で動きやすさを確保しつつ、腕の日差し・汚れ・汗を抑えられます。脱着しやすいので、屋内外の移動や休憩時に調整しやすいのも利点です。
        </p>
        <h3 className="mb-2 mt-6 text-lg font-bold">色・長さ・素材で選ぶ</h3>
        <p className="mb-3 leading-relaxed">
          白系は熱を反射しやすく、濃色は汚れが目立ちにくいなど、現場に合わせて選べます。接触冷感タイプなら腕まわりの快適さも期待できます。
        </p>
        <ProductGrid items={ARM_COVERS} />

        <h2 className="mb-2 mt-10 border-l-4 border-gray-900 pl-3 text-xl font-bold">
          下半身の汗・ベタつきには冷感ロングタイツ
        </h2>
        <H2Summary>
          太もも・膝裏・腰まわりの汗と、作業ズボンのまとわりつき対策に。屈伸の多い作業で効きます。
        </H2Summary>
        <h3 className="mb-2 mt-6 text-lg font-bold">
          作業ズボンの下の汗対策に使える
        </h3>
        <p className="mb-3 leading-relaxed">
          屈伸や歩行の多い作業では、作業ズボンが肌にまとわりつき不快になりがちです。接触冷感のロングタイツは、汗とベタつきをやわらげ、ムレ感の軽減に役立ちます。
        </p>
        <h3 className="mb-2 mt-6 text-lg font-bold">
          サイズ展開を確認して選ぶ
        </h3>
        <p className="mb-3 leading-relaxed">
          体格に合うサイズを選ぶことで、ズレや締め付けによるストレスを抑えられます。大きいサイズ展開があるかも確認しましょう。
        </p>
        <ProductGrid items={TIGHTS} />

        <h2 className="mb-2 mt-10 border-l-4 border-gray-900 pl-3 text-xl font-bold">
          足元の暑さ・蒸れ対策にはクールインソール
        </h2>
        <H2Summary>
          安全靴の中は熱と湿気がこもりがち。踏み抜き防止を兼ねたインソールなら、暑さ対策と安全を同時に確認できます。
        </H2Summary>
        <h3 className="mb-2 mt-6 text-lg font-bold">
          安全靴の中は熱と湿気がこもりやすい
        </h3>
        <p className="mb-3 leading-relaxed">
          屋外作業では靴内が蒸れやすく、足元の不快感は集中力の低下にもつながります。安全靴は安全性が最優先のため通気性だけでは選びにくく、インソールで蒸れ対策を補うのが現実的です。
        </p>
        <h3 className="mb-2 mt-6 text-lg font-bold">サイズと安全機能で選ぶ</h3>
        <p className="mb-3 leading-relaxed">
          踏み抜き防止機能付きのクールインソールなら、蒸れ対策と足元の安全をあわせて確認できます。サイズを靴に合わせて選びましょう。
        </p>
        <ProductGrid items={INSOLES} />
        <ListCTA
          href={LIST.insole}
          label="安全靴に使えるインソールを一覧で確認する"
          utm="insole_list"
        />

        <h2 className="mb-2 mt-10 border-l-4 border-gray-900 pl-3 text-xl font-bold">
          体幹を冷やしたい現場では冷却ベストを検討する
        </h2>
        <H2Summary>
          インナーだけでは足りない高温・長時間作業に。ファン式・保冷剤式・ペルチェ式・注水式など方式の違いで選びます。
        </H2Summary>
        <h3 className="mb-2 mt-6 text-lg font-bold">
          高温環境・長時間作業では冷却ベストが役立つ場合がある
        </h3>
        <p className="mb-3 leading-relaxed">
          直射日光・高温・長時間の作業では、体幹部を冷やす冷却ベストが選択肢になります。ファン付き（送風）、保冷剤式、ペルチェ式（電気冷却）、注水式（気化熱）など方式が分かれ、それぞれ冷やし方と運用が異なります。
        </p>
        <h3 className="mb-2 mt-6 text-lg font-bold">
          ハーネス対応・作業姿勢・電源の有無を確認する
        </h3>
        <p className="mb-3 leading-relaxed">
          高所作業ではハーネス対応か、電源（バッテリー）の有無、保冷剤の交換頻度、作業姿勢の妨げにならないかを確認します。インナーと併用する場合は、動きにくくならないかもチェックしましょう。
        </p>
        <ProductGrid items={COOL_VESTS} />
        <div className="my-3 rounded-md border-l-4 border-amber-500 bg-amber-50 p-4">
          <p className="text-xs leading-relaxed text-amber-900">
            冷却ベストは暑さ対策の一つとして役立ちますが、着用していれば熱中症を防げるという意味ではありません。休憩・水分塩分補給・WBGT確認・作業時間管理と併用してください。
          </p>
        </div>
        <ListCTA
          href={LIST.coolVest}
          label="屋外作業向けの冷却ベストを一覧で確認する"
          utm="coolvest_list"
        />

        <h2 className="mb-2 mt-10 border-l-4 border-gray-900 pl-3 text-xl font-bold">
          頭部の暑さ対策には通気・遮熱タイプのヘルメットを確認する
        </h2>
        <H2Summary>
          ヘルメット内は熱がこもりがち。安全規格を前提に、通気・遮熱・軽量タイプを確認します。
        </H2Summary>
        <h3 className="mb-2 mt-6 text-lg font-bold">
          屋外作業では頭部の熱対策も重要
        </h3>
        <p className="mb-3 leading-relaxed">
          直射日光を受け続ける頭部は、ヘルメット内に熱がこもりやすい部位です。通気孔付き、遮熱タイプ、軽量タイプなどがありますが、まずは作業に必要な安全規格・使用条件を満たすことが前提です。暑さ対策だけでヘルメットを選ばないよう注意します。
        </p>
        <h3 className="mb-2 mt-6 text-lg font-bold">
          通気性・遮熱性・軽量性で選ぶ
        </h3>
        <p className="mb-3 leading-relaxed">
          通気孔で熱を逃がす、遮熱塗装や白系で日射を抑える、軽量で首・肩の負担を減らすなど、現場条件に合わせて選びます。
        </p>
        <ProductGrid items={HELMETS} />
        <ListCTA
          href={LIST.helmet}
          label="ヘルメット一覧へ"
          utm="helmet_list"
          strong
        />

        <h2 className="mb-2 mt-10 border-l-4 border-gray-900 pl-3 text-xl font-bold">
          作業前・休憩時にはプレクーリングアイテムも活用する
        </h2>
        <H2Summary>
          作業前や休憩中に身体を冷やす「プレクーリング」。首元・脇・手のひらなどを冷やし、休憩所の備品としても便利です。
        </H2Summary>
        <h3 className="mb-2 mt-6 text-lg font-bold">
          作業前に体を冷やしておく考え方
        </h3>
        <p className="mb-3 leading-relaxed">
          暑い環境では、作業を始める前や休憩中に身体を冷やしておく「プレクーリング」も取り入れられています。首元・脇・手のひら・体幹など、太い血管が通る部位を冷やすと効率よく冷やしやすいとされています。氷・冷却材・冷感タオルを使い分けましょう。
        </p>
        <h3 className="mb-2 mt-6 text-lg font-bold">
          休憩所に置きやすい冷却用品をそろえる
        </h3>
        <p className="mb-3 leading-relaxed">
          瞬間冷却材や大判の冷感タオルなどは、現場の休憩所にまとめて備えておくと使いやすく、複数人での共有にも向いています。
        </p>
        <ProductGrid items={PRE_COOLING} />
        <ListCTA
          href={LIST.preCooling}
          label="プレクーリングアイテム一覧へ"
          utm="precooling_list"
          strong
        />

        <h2 className="mb-2 mt-10 border-l-4 border-gray-900 pl-3 text-xl font-bold">
          屋外作業の服装・着用品を現場別に選ぶ早見表
        </h2>
        <H2Summary>
          現場ごとに優先すべき部位は違います。建設・警備・イベント・倉庫・農作業・看板施工で整理します。
        </H2Summary>
        <div className="my-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="border border-gray-300 px-3 py-2 text-left">
                  現場
                </th>
                <th className="border border-gray-300 px-3 py-2 text-left">
                  優先したい服装対策
                </th>
                <th className="border border-gray-300 px-3 py-2 text-left">
                  向いている商品カテゴリ
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-bold">
                  建設・土木
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  直射日光・汗・頭部の熱・足元の安全
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  ICE EDGE／冷却ベスト／遮熱ヘルメット／クールインソール
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-bold">
                  警備・誘導
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  長時間立ち仕事・日差し・腕の日焼け
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  冷感インナー／アームカバー／通気ヘルメット
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-bold">
                  イベント設営
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  短時間高負荷・汗・作業後の冷却
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  冷感インナー／冷却ベスト／プレクーリング
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-bold">
                  倉庫・物流
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  蒸れ・汗・足元の不快感
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  インナー／ロングタイツ／クールインソール
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-bold">
                  農作業・草刈り
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  日差し・虫・腕の露出・汗
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  長袖冷感インナー／アームカバー／防虫機能付きインナー
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-bold">
                  看板施工・屋外メンテ
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  高所・ヘルメット・直射日光・安全性
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  冷感インナー／ヘルメット／冷却ベスト／インソール
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="mb-2 mt-10 border-l-4 border-gray-900 pl-3 text-xl font-bold">
          法人で屋外作業の暑さ対策用品をそろえるときのチェックリスト
        </h2>
        <H2Summary>
          「現場の種類・部位別の対策・サイズと洗い替え・作業管理との併用」をまとめて確認します。
        </H2Summary>
        <ul className="mb-4 list-disc space-y-2 pl-5 leading-relaxed">
          <li>作業場所が屋外・半屋外・倉庫内のどれに近いか確認する</li>
          <li>直射日光を受ける時間帯を確認する</li>
          <li>作業者が長袖を着用できる作業内容か確認する</li>
          <li>空調服や冷却ベストとの併用可否を確認する</li>
          <li>ヘルメットの通気性・遮熱性・安全規格を確認する</li>
          <li>安全靴の中敷きや足元の蒸れ対策を確認する</li>
          <li>休憩所にプレクーリング用品を置けるか確認する</li>
          <li>サイズ展開と洗い替え枚数を確認する</li>
          <li>
            新人・高齢作業者・暑熱順化が不十分な作業者への配慮を行う
          </li>
          <li>
            服装対策だけでなく、WBGT確認・休憩・水分塩分補給と組み合わせる
          </li>
        </ul>

        <h2 className="mb-2 mt-10 border-l-4 border-gray-900 pl-3 text-xl font-bold">
          屋外作業の暑さ対策でよくある失敗
        </h2>
        <H2Summary>
          「インナーだけ」「半袖だけ」「頭・足元を後回し」「一律支給」。よくある5つを先回りで避けます。
        </H2Summary>
        <ul className="mb-4 list-disc space-y-2 pl-5 leading-relaxed">
          <li>
            <strong>冷感インナーだけで十分だと思ってしまう</strong>
            ：インナーは補助です。頭部・足元・休憩時の冷却も合わせて考えます。
          </li>
          <li>
            <strong>半袖だけで涼しさを優先してしまう</strong>
            ：日焼け・虫・擦れ・汚れのリスクがあります。長袖インナーやアームカバーと比較しましょう。
          </li>
          <li>
            <strong>ヘルメットの暑さ対策を忘れる</strong>
            ：頭部の蒸れ・直射日光は見落としがち。安全規格を前提に通気・遮熱タイプを検討します。
          </li>
          <li>
            <strong>足元の蒸れ対策を後回しにする</strong>
            ：安全靴内の蒸れは集中力低下の原因に。クールインソールで補えます。
          </li>
          <li>
            <strong>現場全員に同じ用品を一律支給してしまう</strong>
            ：屋外・倉庫・警備・イベントで必要な用品は異なります。サイズや着用感の個人差にも配慮します。
          </li>
        </ul>

        <h2 className="mb-2 mt-10 border-l-4 border-gray-900 pl-3 text-xl font-bold">
          まとめ｜屋外作業の暑さ対策は、服装と作業管理をセットで考える
        </h2>
        <p className="mb-4 leading-relaxed">
          屋外作業の暑さ対策は、まず作業服の下に着るインナーから見直し、腕・下半身・足元・体幹・頭部・作業前後の冷却まで、部位別に組み合わせるのが効果的です。ICE
          EDGEのような多機能の冷感コンプレッションシャツは、遮熱・UV・接触冷感・消臭・防虫などをまとめて確認できる選択肢の一つです。ただし、服装や着用品だけで熱中症を防げるわけではありません。WBGT確認・休憩・水分塩分補給・作業時間管理と必ず併用してください。
        </p>

        <div className="my-10 rounded-xl border border-gray-900 bg-gray-900 p-6 text-white">
          <p className="mb-2 text-lg font-bold">
            屋外作業・倉庫作業に必要な暑さ対策用品をまとめて確認する
          </p>
          <p className="mb-4 text-sm leading-relaxed text-gray-200">
            冷感インナー、アームカバー、ロングタイツ、クールインソール、冷却ベスト、ヘルメット、プレクーリング用品など、現場の暑さ対策に使える作業用品をまとめて確認できます。
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={linkHref(LIST.heatItems, "heatitems_list")}
              target="_blank"
              rel="nofollow sponsored noopener"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-base font-bold text-gray-900 transition hover:bg-gray-200"
            >
              熱中症対策アイテム一覧へ →
            </a>
            <a
              href={linkHref(LIST.trusco, "trusco_list")}
              target="_blank"
              rel="nofollow sponsored noopener"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white px-6 py-3 text-base font-bold text-white transition hover:bg-white hover:text-gray-900"
            >
              トラスコ中山一覧へ →
            </a>
          </div>
        </div>

        <FaqSection faq={FAQ} />
        <RelatedArticles items={RELATED} />
        <Disclaimer extra="冷感インナーや冷却用品は暑さ対策の補助であり、着用していれば熱中症を防げるという意味ではありません。体調に不安がある場合は医療機関・産業医にご相談ください。商品の仕様・価格・在庫・効果表示は各商品ページの最新情報をご確認ください。" />
      </ArticleContent>
    </ArticleLayout>
  );
}
