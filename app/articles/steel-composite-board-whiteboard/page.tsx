import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";

const SLUG = "steel-composite-board-whiteboard";
const SITE_URL = "https://sagyou-navi.com";

const IMAGES = {
  hero: "/images/articles/steel-composite-board-whiteboard-hero.jpg",
  comparison: "/images/articles/steel-board-aluminum-board-comparison.jpg",
  factoryWhiteboard: "/images/articles/factory-custom-whiteboard-steel-board.jpg",
  blackboardShop: "/images/articles/steel-composite-blackboard-shop.jpg",
  originalConsultation: "/images/articles/original-whiteboard-consultation.jpg",
} as const;

export const metadata: Metadata = {
  title:
    "ホワイトボードに使える板材の選び方｜スチール複合板とアルミ複合板の違いを解説｜作業用品ナビ",
  description:
    "ホワイトボードや黒板を作る板材を探している方へ、スチール複合板の特徴と選び方を解説します。マグネットが使える理由、CKホワイトボード・ブラックボード・グリーンボードの違い、アルミ複合板との使い分け、オリジナルホワイトボード制作の相談先まで紹介します。",
  alternates: { canonical: `${SITE_URL}/articles/${SLUG}` },
  openGraph: {
    title:
      "ホワイトボードに使える板材の選び方｜スチール複合板とアルミ複合板の違いを解説",
    description:
      "ホワイトボードや黒板を作る板材を探している方へ、スチール複合板の特徴と選び方を解説します。マグネットが使える理由、CKホワイトボード・ブラックボード・グリーンボードの違い、アルミ複合板との使い分け、オリジナルホワイトボード制作の相談先まで紹介します。",
    type: "article",
    images: [IMAGES.hero],
  },
};

/* ===== リンク生成（UTM付与・%25二重エンコード回避） ===== */
const YAHOO_BASE = "https://store.shopping.yahoo.co.jp/signcity-yshop/";
const UTM = {
  source: "sagyou_navi",
  medium: "referral",
  campaign: "steel_composite_board",
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

/* ===== 商品データ（IDは検証済み・名称は指定どおり。価格/在庫は公開前に要確認） ===== */
type Product = { id: string; name: string; store?: Store };

const WHITEBOARD_36: Product[] = [
  { id: "084873", name: "スチール複合板 3mm CKホワイトボード 板のみ 3×6（910×1820mm）白／片面アルミ CK-3-WALS 5枚" },
  { id: "084872", name: "スチール複合板 3mm CKホワイトボード 板のみ 3×6（910×1820mm）白／片面アルミ CK-3-WALS バラ" },
];

const WHITEBOARD_WIDE: Product[] = [
  { id: "059430", name: "スチール複合板 3mm CKホワイトボードWIDE 板のみ 4×8（1210×2420mm）白／シルバー CK-3W-WS バラ" },
];

const BLACKBOARD: Product[] = [
  { id: "059433", name: "スチール複合板 3mm CKブラックボード 黒板 板のみ 3×6（910×1820mm）ブラック／シルバー CK-3-BS 5枚" },
  { id: "059432", name: "スチール複合板 3mm CKブラックボード 黒板 板のみ 3×6（910×1820mm）ブラック／シルバー CK-3-BS バラ" },
];

const GREENBOARD: Product[] = [
  { id: "059435", name: "スチール複合板 3mm CKグリーンボード 黒板 板のみ 3×6（910×1820mm）グリーン／シルバー CK-3-GRS 5枚" },
  { id: "059434", name: "スチール複合板 3mm CKグリーンボード 黒板 板のみ 3×6（910×1820mm）グリーン／シルバー CK-3-GRS バラ" },
];

/* ===== 一覧/外部URL（エンコード済み・再エンコード禁止でそのまま定数化） ===== */
const LIST_URLS = {
  steelYahoo: `${YAHOO_BASE}a5b9a5c1a1.html#sideNaviItems`,
  steelOwnEC: "https://www.trade-sign.com/steelboard/",
  alumiOwnEC: "https://www.trade-sign.com/alumiboard/",
  originalWB: "https://www.trade-sign.com/main/original-whiteboard/products_kabekake.html",
};

/* ===== 共通パーツ（自己完結インライン定義） ===== */
function ArticleFigure({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) {
  return (
    <figure className="relative my-6 aspect-[16/9] overflow-hidden rounded-lg bg-gray-50">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 1152px"
        priority={priority}
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

function CategoryCard({
  img,
  alt,
  heading,
  text,
  href,
  utm,
  label,
}: {
  img: string;
  alt: string;
  heading: string;
  text: string;
  href: string;
  utm: string;
  label: string;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-100">
        <Image src={img} alt={alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 560px" />
      </div>
      <div className="p-5">
        <h3 className="mb-2 text-lg font-bold text-gray-900">{heading}</h3>
        <p className="mb-4 text-sm leading-relaxed text-gray-700">{text}</p>
        <a
          href={buildUrl(href, utm)}
          target="_blank"
          rel="nofollow sponsored noopener"
          className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-gray-700"
        >
          {label} →
        </a>
      </div>
    </div>
  );
}

/* ===== JSON-LD ===== */
const faqs = [
  {
    q: "スチール複合板とは何ですか？",
    a: "スチール複合板は、スチール面材と発泡樹脂芯材を組み合わせた複合板です。スチール面材を使っているため、マグネット対応のホワイトボードや黒板、掲示板の材料として使いやすく、面材を薄くすることで軽量化されています。",
  },
  {
    q: "スチール複合板とアルミ複合板の違いは何ですか？",
    a: "大きな違いはマグネット対応のしやすさです。スチール複合板はマグネットを使いたいホワイトボードや掲示板に向きます。一方、アルミ複合板は軽量で屋外看板や表示パネルに使われることが多く、基本的にマグネットは付きません。",
  },
  {
    q: "ホワイトボードを自作するならどの板材が向いていますか？",
    a: "マグネットを使いたい場合は、CKホワイトボードのようなスチール複合板が候補になります。無地で使うなら板材購入、罫線・ロゴ・予定表入りにしたい場合はオリジナルホワイトボード制作サービスも検討できます。",
  },
  {
    q: "スチール複合板は屋外でも使えますか？",
    a: "CKスチールボードは屋内設置用です。スチール製のため腐食（錆び）が起こることがあり、酸性・アルカリ性物質との接触は避ける必要があります。屋外看板や雨風に当たる場所ではアルミ複合板の方が向く場合があります。使用前に商品仕様・設置条件を確認してください。",
  },
  {
    q: "黒板を作る場合はどれを選べばよいですか？",
    a: "マーカーで書く黒板風の掲示にはCKブラックボード、チョークで書く黒板にはCKグリーンボードが候補になります。使用する筆記具（マーカーかチョークか）に合わせて選びましょう。",
  },
  {
    q: "自分で加工するのが不安な場合はどうすればよいですか？",
    a: "スチール複合板はアルミ複合板より硬く、カッターでの切断が難しい素材です。カット・穴あけ・罫線・印刷・壁掛け仕様などが必要な場合は、板材だけを購入するよりオリジナルホワイトボード制作サービスへ相談する方が安心です。",
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
      name: "ホワイトボードに使える板材の選び方",
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
          <span className="text-gray-700">ホワイトボードに使える板材の選び方</span>
        </nav>

        <span className="mb-3 inline-block rounded bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-800">
          比較
        </span>

        <h1 className="mb-4 text-2xl font-bold leading-snug text-gray-900 sm:text-3xl">
          ホワイトボードに使える板材の選び方｜スチール複合板とアルミ複合板の違いを解説
        </h1>

        <p className="mb-6 text-sm text-gray-500">公開日：2026年6月27日／約13分で読めます</p>

        <figure className="relative mb-6 aspect-[16/9] overflow-hidden rounded-lg bg-gray-50">
          <Image
            src={IMAGES.hero}
            alt="スチール複合板を使ったホワイトボード製作を検討するイメージ"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 1152px"
          />
        </figure>

        <p className="mb-4 leading-relaxed text-gray-800">
          工場の工程表、倉庫の出荷予定表、会議室のボード、店舗のメニュー黒板、教室の黒板——オリジナルのホワイトボードや黒板を作りたいとき、「どんな板材を選べばよいか」で迷う方は少なくありません。特に「マグネットで書類や予定表を貼りたいのに、アルミ複合板では磁石が付かなかった」という声はよく聞きます。この記事では、マグネットが使えるホワイトボード・黒板の材料として注目される<strong>スチール複合板</strong>の特徴と選び方を、アルミ複合板との違いとあわせて整理し、板材購入とオリジナル制作のどちらが向いているかまで解説します。
        </p>

        <div className="my-6 rounded-lg border-l-4 border-blue-500 bg-blue-50 p-5">
          <p className="leading-relaxed text-gray-800">
            ホワイトボードや黒板を作る板材を選ぶときは、マグネットを使うか、マーカーで書き消しするか、チョークを使うか、屋内・屋外のどちらで使うかを先に確認します。マグネット対応のホワイトボードや黒板を作りたい場合は、スチール面材を使ったスチール複合板が候補になります。一方、屋外看板や軽量パネル用途ではアルミ複合板が向いている場合があります。自作するなら板材を購入し、罫線入り・印刷入り・壁掛け仕様まで必要な場合はオリジナルホワイトボード制作サービスの利用も検討できます。
          </p>
        </div>

        <ArticleFigure
          src={IMAGES.comparison}
          alt="スチール複合板とアルミ複合板を比較するイメージ"
        />
        <p className="mb-4 leading-relaxed text-gray-800">
          まずは用途別に、検討しやすいスチール複合板のカテゴリから見ていきましょう。マーカーで書くならホワイトボード／ブラックボード、チョークで書くならグリーンボード、大きな掲示面ならWIDEタイプが目安です。
        </p>

        <div className="my-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <CategoryCard
            img={IMAGES.factoryWhiteboard}
            alt="工場でスチール複合板のホワイトボードを使うイメージ"
            heading="マグネット対応の板材ならCKホワイトボード 3×6"
            text="3×6サイズの白いスチール複合板です。工場・事務所・倉庫の予定表、作業指示ボード、掲示板のベース材として検討できます。板のみで購入でき、自社で加工・施工したい場合に向いています。"
            href={LIST_URLS.steelYahoo}
            utm={`${SLUG}_wb36cat`}
            label="CKホワイトボードを見る"
          />
          <CategoryCard
            img={IMAGES.factoryWhiteboard}
            alt="大型の壁面ホワイトボードのイメージ"
            heading="大きな壁面ホワイトボードには4×8 WIDEタイプ"
            text="会議室・学校・工場・倉庫などで大きな掲示面を作りたい場合は、4×8（1210×2420mm）のWIDEタイプも選択肢です。大型の予定表や工程管理ボードに向いています。"
            href={LIST_URLS.steelYahoo}
            utm={`${SLUG}_widecat`}
            label="CKホワイトボードWIDEを見る"
          />
          <CategoryCard
            img={IMAGES.blackboardShop}
            alt="店舗で使うブラックボードのイメージ"
            heading="店舗メニュー・掲示板に使いやすいブラックボード"
            text="黒い板面を活かして、飲食店メニュー、店舗掲示、施設案内、イベントボードなどに使いやすい板材です。マーカータイプの黒板として使う用途に向いています。"
            href={LIST_URLS.steelYahoo}
            utm={`${SLUG}_blackcat`}
            label="CKブラックボードを見る"
          />
          <CategoryCard
            img={IMAGES.blackboardShop}
            alt="チョーク用グリーンボードのイメージ"
            heading="チョーク用の黒板を作るならグリーンボード"
            text="学校・塾・教室・店舗・工場掲示など、チョークで書く黒板用途に使いやすい板材です。グリーン面を活かした掲示板や予定表にも使えます。"
            href={LIST_URLS.steelYahoo}
            utm={`${SLUG}_greencat`}
            label="CKグリーンボードを見る"
          />
          <CategoryCard
            img={IMAGES.comparison}
            alt="スチール複合板を一覧で比較するイメージ"
            heading="サイズ・色・仕様でスチール複合板をまとめて確認"
            text="ホワイト・ブラック・グリーン、3×6・4×8など、用途に合わせて比較できます。自社EC（サインシティ）は価格を抑えて購入できる場合があるため、Yahoo!ショッピングとあわせて確認すると選びやすくなります。"
            href={LIST_URLS.steelOwnEC}
            utm={`${SLUG}_tradesign_listcat`}
            label="スチール複合板一覧へ"
          />
          <CategoryCard
            img={IMAGES.originalConsultation}
            alt="オリジナルホワイトボード制作を相談するイメージ"
            heading="罫線・ロゴ・予定表入りならオリジナル制作も相談可能"
            text="板材だけでなく、工程表・予定表・月間スケジュール・点検表・マグネット対応掲示板などをオリジナルホワイトボードとして製作したい場合は、サインシティの制作サービスも利用できます。"
            href={LIST_URLS.originalWB}
            utm={`${SLUG}_tradesign_originalcat`}
            label="オリジナルホワイトボード制作を見る"
          />
        </div>

        <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-4 text-xl font-bold text-gray-900">
          ホワイトボードや黒板を作るなら、まず板材の用途を整理する
        </h2>
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">マグネットを使いたいならスチール系の板材を検討する</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          マグネットで書類・伝票・予定表を貼りたい場合は、面材に鉄（スチール）を使った板材が必要です。看板用途で広く使われるアルミ複合板は便利な素材ですが、アルミ面材のため基本的にマグネットは付きません。工場・倉庫・学校・店舗の掲示板でマグネットを使うなら、スチール面材のスチール複合板が候補になります。
        </p>
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">マーカーで書き消ししたいならホワイトボード仕様を選ぶ</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          作業予定・工程表・会議室ボード・点検表など、マーカーで書いて消す用途にはCKホワイトボード（白面）が向きます。市販のホワイトボード用マーカー・イレーサーを使い、ボード面を傷つけないようにします。なお、納品時は表面に保護フィルムが付いているので、使用時に剥がしてください（施工後は長時間放置せず早めに剥がします）。消去性を重視する場合は、ホーロー製ホワイトボードとは書き消し感が異なる場合があるため、サンプル確認や制作相談も検討するとよいでしょう。
        </p>
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">チョークや黒板風に使いたいならブラック・グリーンを選ぶ</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          マーカーで書く黒板風の掲示にはCKブラックボード、チョークで書く黒板にはCKグリーンボードが向きます。店舗メニュー・教室・施設案内・掲示板など、見た目や筆記具に合わせて選びましょう。
        </p>

        <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-4 text-xl font-bold text-gray-900">
          スチール複合板とは？マグネットが使える複合板
        </h2>
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">スチール複合板の基本構造</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          スチール複合板（福田金属箔粉工業のCKスチールボードなど）は、スチールを面材に使い、発泡ポリエチレン樹脂の芯材をサンドしたスチール樹脂複合板です。面材の厚みを極限まで薄くすることで軽量化されており、スチール面のためマグネットが使え、マーカーで書き消しもできます。ホワイトボード・ブラックボード・チョーク用グリーンボードがラインナップされ、いずれも屋内設置用です。
        </p>
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">スチール複合板が向いている用途</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          オリジナルホワイトボード、マグネット掲示板、工程管理ボード、店舗メニュー、教室用黒板、工場の作業指示ボード、倉庫の出荷予定表、施設の案内板など、屋内でマグネットや書き消しを使いたい掲示物に向いています。
        </p>

        <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-4 text-xl font-bold text-gray-900">
          スチール複合板とアルミ複合板の違い
        </h2>
        <p className="mb-2 text-sm text-gray-600">
          ※下表は一般的な傾向の目安です。屋外耐久・加工条件などは商品仕様・設置条件を必ず確認してください。
        </p>
        <div className="my-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border border-gray-200 px-3 py-2">比較項目</th>
                <th className="border border-gray-200 px-3 py-2">スチール複合板</th>
                <th className="border border-gray-200 px-3 py-2">アルミ複合板</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-3 py-2">主な面材</td>
                <td className="border border-gray-200 px-3 py-2">スチール</td>
                <td className="border border-gray-200 px-3 py-2">アルミ</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-3 py-2">マグネット使用</td>
                <td className="border border-gray-200 px-3 py-2">使えるものが多い</td>
                <td className="border border-gray-200 px-3 py-2">基本的に向かない</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2">ホワイトボード用途</td>
                <td className="border border-gray-200 px-3 py-2">向いている</td>
                <td className="border border-gray-200 px-3 py-2">通常は不向き</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-3 py-2">黒板用途</td>
                <td className="border border-gray-200 px-3 py-2">ブラック・グリーン仕様なら向く</td>
                <td className="border border-gray-200 px-3 py-2">通常は不向き</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2">看板用途</td>
                <td className="border border-gray-200 px-3 py-2">屋内掲示・ボード向き</td>
                <td className="border border-gray-200 px-3 py-2">屋外看板・パネル向き</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-3 py-2">重さ</td>
                <td className="border border-gray-200 px-3 py-2">アルミ複合板より重くなりやすい</td>
                <td className="border border-gray-200 px-3 py-2">軽量</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2">屋外耐久</td>
                <td className="border border-gray-200 px-3 py-2">屋内設置用（錆びに注意）</td>
                <td className="border border-gray-200 px-3 py-2">屋外看板で使われやすい</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-3 py-2">加工性</td>
                <td className="border border-gray-200 px-3 py-2">硬く、切断にはスチール対応の刃が必要</td>
                <td className="border border-gray-200 px-3 py-2">看板材として加工しやすい</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2">向いている人</td>
                <td className="border border-gray-200 px-3 py-2">マグネット・書き消し・黒板用途</td>
                <td className="border border-gray-200 px-3 py-2">屋外看板・表示パネル用途</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">マグネットを使うならスチール複合板</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          工場の掲示物、書類や伝票を貼る、マグネットシートを使う、予定表を貼り替える、ホワイトボードマーカーで書き消しする——こうした用途では、スチール面材のスチール複合板が向いています。
        </p>
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">屋外看板や軽量パネルならアルミ複合板</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          屋外看板・駐車場看板・壁面パネル・表示板など、軽量で扱いやすい板材を屋外で使いたい場合は、アルミ複合板の方が向くことがあります。マグネットや書き消しが不要な表示用途なら、アルミ複合板も検討しましょう。
        </p>
        <ListCTA
          href={LIST_URLS.alumiOwnEC}
          utm={`${SLUG}_tradesign_alumi`}
          heading="屋外看板・表示パネル用ならアルミ複合板も確認する"
          text="マグネットや書き消し用途ではなく、屋外看板や軽量パネルを作りたい場合は、アルミ複合板が向いていることもあります。"
          label="アルミ複合板一覧へ"
        />

        <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-4 text-xl font-bold text-gray-900">
          用途別｜どのスチール複合板を選ぶべきか
        </h2>
        <div className="my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border border-gray-200 px-3 py-2">用途</th>
                <th className="border border-gray-200 px-3 py-2">おすすめタイプ</th>
                <th className="border border-gray-200 px-3 py-2">理由</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-3 py-2">工場の工程表</td>
                <td className="border border-gray-200 px-3 py-2">CKホワイトボード</td>
                <td className="border border-gray-200 px-3 py-2">マーカー・マグネットを使いやすい</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-3 py-2">倉庫の出荷予定表</td>
                <td className="border border-gray-200 px-3 py-2">CKホワイトボードWIDE</td>
                <td className="border border-gray-200 px-3 py-2">大きく表示しやすい</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2">会議室の壁掛けボード</td>
                <td className="border border-gray-200 px-3 py-2">CKホワイトボード</td>
                <td className="border border-gray-200 px-3 py-2">予定やメモに使いやすい</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-3 py-2">飲食店メニュー</td>
                <td className="border border-gray-200 px-3 py-2">CKブラックボード</td>
                <td className="border border-gray-200 px-3 py-2">黒板風で見せやすい</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2">学習塾・教室</td>
                <td className="border border-gray-200 px-3 py-2">CKグリーンボード</td>
                <td className="border border-gray-200 px-3 py-2">チョーク用黒板として使いやすい</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-3 py-2">店舗の掲示板</td>
                <td className="border border-gray-200 px-3 py-2">CKブラック・グリーン</td>
                <td className="border border-gray-200 px-3 py-2">見た目に合わせて選びやすい</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2">屋外看板</td>
                <td className="border border-gray-200 px-3 py-2">アルミ複合板</td>
                <td className="border border-gray-200 px-3 py-2">軽量・屋外パネル用途に向く</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-4 text-xl font-bold text-gray-900">
          サインシティで購入できるスチール複合板
        </h2>

        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">
          CKホワイトボード 3×6｜工場・事務所のマグネット対応ボードに
        </h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          910×1820mm・厚み3mmの白いスチール複合板です。工場・倉庫・事務所の掲示板、作業予定表、点検表、マグネット掲示のベース材に向きます。必要な枚数に応じて、5枚セットとバラ（1枚）を使い分けられます。
        </p>
        <ProductGrid items={WHITEBOARD_36} />
        <ListCTA
          href={LIST_URLS.steelOwnEC}
          utm={`${SLUG}_tradesign_wb`}
          heading="CKホワイトボードを確認する"
          text="自社EC（サインシティ）は価格を抑えて購入できる場合があります。Yahoo!ショッピングとあわせて比較しましょう。"
          label="スチール複合板一覧へ（サインシティ）"
          strong
        />

        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">
          CKホワイトボードWIDE 4×8｜大型ホワイトボードを作りたい場合に
        </h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          1210×2420mmの大判サイズです。壁面ボード、大型工程表、学校・施設・工場の大型掲示など、3×6では小さい場合に検討します。なお、裏面のシルバー側はホワイトボード機能がありません。
        </p>
        <ProductGrid items={WHITEBOARD_WIDE} />

        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">
          CKブラックボード｜店舗メニュー・黒板風掲示に
        </h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          910×1820mm・厚み3mm、ブラック／シルバー仕様です。マーカーで書く黒板風の掲示として、飲食店メニュー・店舗掲示・施設案内・イベントボードに使いやすいタイプです。
        </p>
        <ProductGrid items={BLACKBOARD} />

        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">
          CKグリーンボード｜チョーク用黒板・教室用途に
        </h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          910×1820mm・厚み3mm、グリーン／シルバー仕様のチョーク用ボードです。学校・塾・教室・店舗・工場掲示など、チョークで書く黒板用途に向きます。
        </p>
        <ProductGrid items={GREENBOARD} />

        <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-4 text-xl font-bold text-gray-900">
          板材だけ買うか、オリジナルホワイトボード制作を依頼するか
        </h2>
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">板材のみ購入が向いているケース</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          自社でカット・穴あけ・施工ができる、枠や取り付け金具を別で用意できる、無地のホワイトボードとして使う、施工会社・看板会社が加工する——こうした場合は、板材のみの購入が向いています。
        </p>
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">オリジナルホワイトボード制作が向いているケース</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          月間予定表や工程表を印刷したい、会社ロゴや罫線を入れたい、壁掛け仕様で納品してほしい、サイズや仕様を相談したい、初めてで板材加工に不安がある——こうした場合は、オリジナルホワイトボード制作サービスへの相談が安心です。
        </p>
        <ListCTA
          href={LIST_URLS.originalWB}
          utm={`${SLUG}_tradesign_original`}
          heading="罫線・ロゴ・予定表入りのオリジナルホワイトボードを作る"
          text="板材だけでなく、月間予定表・工程管理表・点検表・会社ロゴ入りボードなどを作りたい場合は、サインシティのオリジナルホワイトボード制作サービスも利用できます。"
          label="オリジナルホワイトボード制作を見る"
          strong
        />

        <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-4 text-xl font-bold text-gray-900">
          スチール複合板選びでよくある失敗
        </h2>
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">マグネットを使いたいのにアルミ複合板を選んでしまう</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          アルミ複合板は看板用途には便利ですが、マグネット掲示には向きません。マグネットを使うなら、スチール面材のスチール複合板を選びましょう。
        </p>
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">ホワイトボードの消去性を確認せずに選ぶ</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          スチール複合板は、ホーロー製ホワイトボードとは書き消し感が異なる場合があります。消去性を重視するなら、サンプル確認や制作相談を行い、商品説明の注意書きを確認しましょう。
        </p>
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">サイズだけで選び、搬入経路を見落とす</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          3×6（910×1820mm）や4×8（1210×2420mm）は大判サイズです。搬入口・階段・エレベーター・車両を事前に確認しましょう。配送は個人宅不可・車上渡しなどの条件がある場合があるため、納品条件もあわせて確認します。
        </p>
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">屋外用途に使えると思い込む</h3>
        <div className="my-4 rounded-lg border-l-4 border-amber-500 bg-amber-50 p-5">
          <p className="text-sm leading-relaxed text-gray-800">
            CKスチールボードは屋内設置用です。スチール製のため腐食（錆び）が起こることがあり、酸性・アルカリ性物質との接触は避ける必要があります。屋外看板など雨・紫外線にさらされる用途では、アルミ複合板の方が向く場合があります。屋外で使う前に、商品仕様・端部処理・固定方法・耐久性を必ず確認してください。
          </p>
        </div>
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">自作できると思ったが加工が難しい</h3>
        <div className="my-4 rounded-lg border-l-4 border-amber-500 bg-amber-50 p-5">
          <p className="text-sm leading-relaxed text-gray-800">
            スチール複合板はアルミ複合板より材質が硬く、カッターでの切断が難しい素材です。アルミ複合板用の機械で同じようにカットすると刃が傷み、故障の原因になります。切断にはスチール（鉄）対応の刃が必要です。カット・穴あけ・枠付け・壁掛け・印刷・罫線が必要な場合は、オリジナルホワイトボード制作サービスへの相談も検討しましょう。
          </p>
        </div>

        <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-4 text-xl font-bold text-gray-900">
          まとめ｜マグネット対応のホワイトボード・黒板ならスチール複合板を検討する
        </h2>
        <p className="mb-4 leading-relaxed text-gray-800">
          マグネットを使いたいホワイトボードや黒板、掲示板を作るなら、スチール面材のスチール複合板が候補になります。マーカー用ならCKホワイトボード／ブラックボード、チョーク用ならCKグリーンボード、大型ならWIDEタイプが目安です。一方、屋外看板や軽量パネルにはアルミ複合板が向く場合があります。板材を買って自分で加工するか、罫線・印刷・壁掛けまで任せるオリジナル制作にするかは、加工体制と仕上がりの希望で選びましょう。屋内設置用・錆び・加工の硬さ・消去性・搬入経路は、購入前に必ず確認してください。
        </p>

        <div className="my-8 rounded-lg border border-gray-300 bg-gray-50 p-6">
          <h3 className="mb-2 text-lg font-bold text-gray-900">スチール複合板・関連板材をまとめて確認する</h3>
          <p className="mb-4 text-sm leading-relaxed text-gray-700">
            自社EC（サインシティ）は価格を抑えて購入できる場合があります。Yahoo!ショッピングとあわせて比較するのがおすすめです。
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={buildUrl(LIST_URLS.steelOwnEC, `${SLUG}_final_tradesign_steel`)}
              target="_blank"
              rel="nofollow sponsored noopener"
              className="inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-sm font-bold text-white transition hover:bg-gray-700"
            >
              サインシティのスチール複合板一覧へ →
            </a>
            <a
              href={buildUrl(LIST_URLS.steelYahoo, `${SLUG}_final_yahoo_steel`)}
              target="_blank"
              rel="nofollow sponsored noopener"
              className="inline-flex items-center rounded-md border border-gray-900 bg-white px-4 py-2 text-sm font-bold text-gray-900 transition hover:bg-gray-100"
            >
              Yahoo!のスチール複合板一覧へ →
            </a>
            <a
              href={buildUrl(LIST_URLS.alumiOwnEC, `${SLUG}_final_tradesign_alumi`)}
              target="_blank"
              rel="nofollow sponsored noopener"
              className="inline-flex items-center rounded-md border border-gray-900 bg-white px-4 py-2 text-sm font-bold text-gray-900 transition hover:bg-gray-100"
            >
              アルミ複合板一覧へ →
            </a>
            <a
              href={buildUrl(LIST_URLS.originalWB, `${SLUG}_final_tradesign_original`)}
              target="_blank"
              rel="nofollow sponsored noopener"
              className="inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-sm font-bold text-white transition hover:bg-gray-700"
            >
              オリジナルホワイトボード制作へ →
            </a>
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
            <Link href="/articles/sign-lighting-retrofit" className="text-gray-900 underline hover:no-underline">
              看板照明の後付け・選び方
            </Link>
          </li>
          <li>
            <Link href="/articles/flexible-container-bag-selection" className="text-gray-900 underline hover:no-underline">
              フレコンバッグの選び方｜排出口あり・なし、耐候性、用途別の使い分け
            </Link>
          </li>
        </ul>
      </main>
      <SiteFooter />
    </>
  );
}
