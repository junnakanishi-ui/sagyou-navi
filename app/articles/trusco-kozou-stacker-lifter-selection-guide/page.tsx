import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";

export const metadata: Metadata = {
  title:
    "コゾウスタッカーとは？コゾウリフターとの違い・選び方を徹底解説【トラスコ／2026年版】",
  description:
    "トラスコ中山のコゾウスタッカー（TPAH-L-1016）を徹底解説。よく似たコゾウリフターとの違い、フォーク式・テーブル式・手動・電動の選び方、荷重・揚高の見方を、全バリエーション比較表つきで整理しました。荷物の昇降・運搬を省力化したい現場担当者向けに、どこよりも選びやすくまとめています。ネット販売最安値帯へ挑戦中。",
  alternates: {
    canonical:
      "https://www.sagyou-navi.com/articles/trusco-kozou-stacker-lifter-selection-guide",
  },
  openGraph: {
    title:
      "コゾウスタッカーとは？コゾウリフターとの違い・選び方を徹底解説【トラスコ／2026年版】",
    description:
      "コゾウスタッカーとコゾウリフターの違い、フォーク式・テーブル式・手動・電動の選び方を全ラインアップ比較表つきで解説。",
    type: "article",
    images: ["/articles/kozou-stacker/hero.jpg"],
  },
};

// ==============================
// URL helper（Yahoo signcity-yshop）
// ==============================
const UTM = "utm_source=sagyou_navi";
function buildUrl(url: string, utm: string): string {
  if (!url) return url;
  const h = url.indexOf("#");
  const append = (b: string): string =>
    `${b}${b.includes("?") ? "&" : "?"}${utm}`;
  if (h === -1) return append(url);
  return `${append(url.slice(0, h))}${url.slice(h)}`;
}
// Yahoo商品（sc_i はExcel値を各商品ごとに採用。&ea= を維持）
const YB = (id: string, sc: string) =>
  buildUrl(
    `https://store.shopping.yahoo.co.jp/signcity-yshop/${id}.html?sc_i=${sc}&ea=`,
    UTM,
  );
// 生URL（一覧・検索）
const RAW = (u: string) => buildUrl(u, UTM);

type ProductRow = {
  id: string;
  img: string;
  model: string;
  tno: string;
  load: string;
  h: string;
  href: string;
};

// ==============================
// 記事内コンポーネント（自己完結）
// ==============================
function Mark({ children }: { children: ReactNode }) {
  return <mark className={cls.mark}>{children}</mark>;
}

function CategoryBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded bg-gray-900 px-2 py-1 text-xs font-bold text-white">
      {children}
    </span>
  );
}

function AnswerBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 rounded-r border-l-4 border-gray-900 bg-gray-50 p-5">
      <p className="mb-2 text-xs font-bold text-gray-900">結論（AIサマリ）</p>
      <div className="leading-relaxed text-gray-900">{children}</div>
    </div>
  );
}

function Caution({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-5 rounded border border-gray-400 bg-gray-100 p-4">
      <p className="mb-1 text-xs font-bold text-gray-900">選ぶ前のチェック</p>
      <div className="text-sm leading-relaxed text-gray-900">{children}</div>
    </div>
  );
}

function PriceBanner({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 rounded border-2 border-gray-900 bg-gray-900 p-4 text-center text-white">
      <div className="leading-relaxed">{children}</div>
    </div>
  );
}

function CardGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 grid grid-cols-2 gap-4 sm:grid-cols-3">{children}</div>
  );
}

function ShopButton({ href, label }: { href: string; label: string }) {
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="inline-block rounded bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-gray-700"
    >
      {label}
    </a>
  );
}

function ProductCard({
  img,
  name,
  badge,
  href,
  note,
}: {
  img: string;
  name: string;
  badge?: string;
  href: string;
  note?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="flex flex-col overflow-hidden rounded border border-gray-300 bg-white transition-shadow hover:shadow-md"
    >
      <div className="flex items-center justify-center bg-gray-50 p-2">
        <Image
          src={`/products/${img}`}
          alt={name}
          width={240}
          height={240}
          className="h-auto max-h-40 w-full object-contain"
        />
      </div>
      <div className="flex flex-1 flex-col p-3">
        {badge && (
          <div className="mb-1">
            <CategoryBadge>{badge}</CategoryBadge>
          </div>
        )}
        <p className="text-xs font-bold leading-snug text-gray-900">{name}</p>
        {note && <p className="mt-1 text-[11px] text-gray-800">{note}</p>}
        <span className="mt-2 text-xs text-gray-900 underline">
          商品ページを見る →
        </span>
      </div>
    </a>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return <th className={cls.th}>{children}</th>;
}
function Td({ children }: { children: React.ReactNode }) {
  return <td className={cls.td}>{children}</td>;
}

function ProductTableCell({
  img,
  model,
  href,
}: {
  img: string;
  model: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="group flex min-w-[14rem] items-start gap-3 rounded-lg p-1 transition hover:bg-gray-50"
    >
      <span className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-white">
        <Image
          src={`/products/${img}`}
          alt={`${model}の商品画像`}
          fill
          sizes="80px"
          className="object-contain p-1.5"
        />
      </span>
      <span className="pt-1 text-sm font-semibold text-gray-900 underline group-hover:no-underline">
        {model}
        <span className="mt-1 block text-xs font-medium text-gray-800 no-underline">
          商品ページを見る →
        </span>
      </span>
    </a>
  );
}

function ArticleImage({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <figure className="my-6">
      <Image
        src={src}
        alt={alt}
        width={1280}
        height={720}
        priority={priority}
        className="h-auto w-full rounded"
      />
      <figcaption className="mt-1 text-xs text-gray-800">{alt}</figcaption>
    </figure>
  );
}

function MainCta() {
  return (
    <div className="my-8 rounded border border-gray-900 bg-gray-50 p-5">
      <p className="mb-1 text-sm font-bold text-gray-900">
        ネット販売 最安値帯へ挑戦中！
      </p>
      <p className={`${cls.ctaH3} leading-tight`}>
        コゾウスタッカー（TPAH-L-1016）を見る
      </p>
      <p className="mb-3 text-sm leading-relaxed text-gray-900">
        フォーク幅を調整でき、
        <Mark>1000kg</Mark>
        の荷物を最大
        <Mark>1600mm</Mark>
        まで昇降。少しでもお安くご提供できるよう頑張っています。
      </p>
      <ShopButton href={CTA_STACKER} label="コゾウスタッカー 商品ページ →" />
    </div>
  );
}

function FinalCta() {
  return (
    <div className="my-10 rounded border-2 border-gray-900 bg-gray-50 p-6">
      <p className={`${cls.ctaH3} mb-2`}>
        荷物の昇降・運搬を、もっとラクに・安全に
      </p>
      <p className="mb-4 text-sm leading-relaxed text-gray-900">
        フォーク幅を調整できるコゾウスタッカーと、用途別に選べるコゾウリフター。
        現場に合った1台を、ネット販売最安値帯に挑戦する価格でご用意しています。
      </p>
      <div className="flex flex-wrap gap-2">
        <ShopButton href={CTA_STACKER} label="コゾウスタッカー" />
        <ShopButton href={CTA_LIFTER} label="コゾウリフター 一覧" />
      </div>
    </div>
  );
}

// ==============================
// CTA定数
// ==============================
const CTA_STACKER = RAW(
  "https://store.shopping.yahoo.co.jp/signcity-yshop/168631.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
);
const CTA_LIFTER = RAW(
  "https://store.shopping.yahoo.co.jp/signcity-yshop/search.html?p=%E3%82%B3%E3%82%BE%E3%82%A6%E3%83%AA%E3%83%95%E3%82%BF%E3%83%BC&view=grid",
);

// ==============================
// 商品データ
// ==============================
const STACKER: ProductRow[] = [
  {
    id: "168631",
    img: "168631.jpg",
    model: "TPAH-L-1016",
    tno: "453-8200",
    load: "1000",
    h: "85〜1600",
    href: YB("168631", "shopping-pc-web-result-storesch-rsltlst-img"),
  },
];
const FORK_M: ProductRow[] = [
  {
    id: "168613",
    img: "168613.jpg",
    model: "BEA-H200-9",
    tno: "115-8240",
    load: "200",
    h: "71〜900",
    href: YB("168613", "shopping-pc-web-result-storesch-rsltlst-img"),
  },
  {
    id: "212900",
    img: "212900.jpg",
    model: "BEA-H200-15",
    tno: "115-8239",
    load: "200",
    h: "",
    href: YB("212900", "shopping-pc-web-result-storesch-rsltlst-img"),
  },
  {
    id: "212899",
    img: "212899.jpg",
    model: "BEA-H200-12",
    tno: "115-8238",
    load: "200",
    h: "",
    href: YB("212899", "shopping-pc-web-result-storesch-rsltlst-img"),
  },
  {
    id: "212902",
    img: "212902.jpg",
    model: "BEA-H300-15B",
    tno: "112-1535",
    load: "300",
    h: "",
    href: YB("212902", "shopping-pc-web-result-storesch-rsltlst-img"),
  },
  {
    id: "168635",
    img: "168635.jpg",
    model: "BEA-H300-15-5H",
    tno: "115-8397",
    load: "300",
    h: "50〜1475",
    href: YB("168635", "shopping-pc-web-result-storesch-rsltlst-img"),
  },
  {
    id: "168618",
    img: "168618.jpg",
    model: "BEA-H300-12",
    tno: "115-8291",
    load: "300",
    h: "77〜1200",
    href: YB("168618", "shopping-pc-web-result-storesch-rsltlst-img"),
  },
  {
    id: "168624",
    img: "168624.jpg",
    model: "BEA-H300-12B",
    tno: "115-8345",
    load: "300",
    h: "112〜1235",
    href: YB("168624", "shopping-pc-web-result-storesch-rsltlst-img"),
  },
  {
    id: "168637",
    img: "168637.jpg",
    model: "BEA-H400-15W9",
    tno: "115-8387",
    load: "400",
    h: "",
    href: YB("168637", "shopping-pc-web-result-storesch-rsltlst-img"),
  },
  {
    id: "168614",
    img: "168614.jpg",
    model: "BEA-H400-12",
    tno: "115-8241",
    load: "400",
    h: "75〜1200",
    href: YB("168614", "shopping-pc-web-result-storesch-rsltlst-img"),
  },
  {
    id: "212904",
    img: "212904.jpg",
    model: "BEA-H400-15",
    tno: "115-8249",
    load: "400",
    h: "",
    href: YB("212904", "shopping-pc-web-result-storesch-rsltlst-img"),
  },
  {
    id: "212905",
    img: "212905.jpg",
    model: "BEA-H400-15B",
    tno: "110-1535",
    load: "400",
    h: "",
    href: YB("212905", "shopping-pc-web-result-storesch-rsltlst-img"),
  },
  {
    id: "168621",
    img: "168621.jpg",
    model: "BEA-H400-12B",
    tno: "115-8251",
    load: "400",
    h: "110〜1235",
    href: YB("168621", "shopping-pc-web-result-storesch-rsltlst-img"),
  },
  {
    id: "168627",
    img: "168627.jpg",
    model: "BEA-H400-9W",
    tno: "256-7170",
    load: "400",
    h: "",
    href: YB("168627", "shopping-pc-web-result-storesch-rsltlst-img"),
  },
  {
    id: "168636",
    img: "168636.jpg",
    model: "BEA-H500-15-5H",
    tno: "115-8398",
    load: "500",
    h: "50〜1470",
    href: YB("168636", "shopping-pc-web-result-storesch-rsltlst-img"),
  },
  {
    id: "168625",
    img: "168625.jpg",
    model: "BEA-H500-12B",
    tno: "115-8347",
    load: "500",
    h: "116〜1235",
    href: YB("168625", "shopping-pc-web-result-storesch-rsltlst-img"),
  },
  {
    id: "212911",
    img: "212911.jpg",
    model: "BEA-H600-12B",
    tno: "115-1235",
    load: "600",
    h: "",
    href: YB("212911", "shopping-pc-web-result-storesch-rsltlst-img"),
  },
  {
    id: "212910",
    img: "212910.jpg",
    model: "BEA-H600-12",
    tno: "115-8243",
    load: "600",
    h: "",
    href: YB("212910", "shopping-pc-web-result-storesch-rsltlst-img"),
  },
  {
    id: "212912",
    img: "212912.jpg",
    model: "BEA-H600-9",
    tno: "115-8245",
    load: "600",
    h: "",
    href: YB("212912", "shopping-pc-web-result-storesch-rsltlst-img"),
  },
  {
    id: "168622",
    img: "168622.jpg",
    model: "BEA-H600-15B",
    tno: "115-8257",
    load: "600",
    h: "115〜1535",
    href: YB("168622", "shopping-pc-web-result-storesch-rsltlst-img"),
  },
  {
    id: "168616",
    img: "168616.jpg",
    model: "BEA-H1000-14",
    tno: "115-8248",
    load: "1000",
    h: "",
    href: YB("168616", "shopping-pc-web-result-storesch-rsltlst-img"),
  },
  {
    id: "168633",
    img: "168633.jpg",
    model: "BEA-H500W-22ST",
    tno: "171-7608",
    load: "",
    h: "78〜2200",
    href: YB("168633", "shopping-pc-web-result-storesch-rsltlst-img"),
  },
];
const FORK_E: ProductRow[] = [
  {
    id: "212922",
    img: "212922.jpg",
    model: "BEN-D400W-22STW",
    tno: "659-2743",
    load: "400",
    h: "",
    href: YB("212922", "shopping-pc-web-result-storesch-rsltlst-img"),
  },
  {
    id: "168654",
    img: "168654.jpg",
    model: "BEN-D400-9W",
    tno: "256-7180",
    load: "400",
    h: "",
    href: YB("168654", "shopping-pc-web-result-storesch-rsltlst-img"),
  },
  {
    id: "212929",
    img: "212929.jpg",
    model: "BEN-D800-8W",
    tno: "256-7177",
    load: "800",
    h: "",
    href: YB("212929", "shopping-pc-web-result-storesch-rsltlst-img"),
  },
  {
    id: "168650",
    img: "168650.jpg",
    model: "BEN-D400-9B",
    tno: "337-3550",
    load: "",
    h: "110〜935",
    href: YB("168650", "shopping-pc-web-result-storesch-rsltlst-img"),
  },
  {
    id: "212921",
    img: "212921.jpg",
    model: "BEN-D400-15",
    tno: "337-3509",
    load: "",
    h: "",
    href: YB("212921", "shopping-pc-web-result-storesch-rsltlst-img"),
  },
  {
    id: "212926",
    img: "212926.jpg",
    model: "BEN-D600-9B",
    tno: "337-3584",
    load: "",
    h: "",
    href: YB("212926", "shopping-pc-web-result-storesch-rsltlst-img"),
  },
  {
    id: "168652",
    img: "168652.jpg",
    model: "BEN-D400-15B",
    tno: "337-3576",
    load: "",
    h: "110〜1535",
    href: YB("168652", "shopping-pc-web-result-storesch-rsltlst-img"),
  },
  {
    id: "168647",
    img: "168647.jpg",
    model: "BEN-D500W-28ST",
    tno: "337-3690",
    load: "",
    h: "78〜2800",
    href: YB("168647", "shopping-pc-web-result-storesch-rsltlst-img"),
  },
  {
    id: "168641",
    img: "168641.jpg",
    model: "BEN-D400-12",
    tno: "337-3495",
    load: "",
    h: "75〜1200",
    href: YB("168641", "shopping-pc-web-result-storesch-rsltlst-img"),
  },
  {
    id: "168649",
    img: "168649.jpg",
    model: "BEN-D500-15-5H",
    tno: "337-3657",
    load: "",
    h: "50〜1470",
    href: YB("168649", "shopping-pc-web-result-storesch-rsltlst-img"),
  },
  {
    id: "168644",
    img: "168644.jpg",
    model: "BEN-D200W-22ST",
    tno: "337-3665",
    load: "",
    h: "71〜2200",
    href: YB("168644", "shopping-pc-web-result-storesch-rsltlst-img"),
  },
  {
    id: "168661",
    img: "168661.jpg",
    model: "BEN-P150-12-5H",
    tno: "464-2317",
    load: "",
    h: "85〜1503",
    href: YB("168661", "shopping-pc-web-result-storesch-rsltlst-img"),
  },
];
const TABLE: ProductRow[] = [
  {
    id: "168662",
    img: "168662.jpg",
    model: "BEN-P200-9T",
    tno: "464-2431",
    load: "200",
    h: "85〜903",
    href: YB("168662", "shopping-pc-web-result-storesch-rsltlst-img"),
  },
  {
    id: "168667",
    img: "168667.jpg",
    model: "BEA-H200-15T",
    tno: "115-8401",
    load: "200",
    h: "85〜1503",
    href: YB("168667", "shopping-pc-web-result-storesch-rsltlst-title"),
  },
  {
    id: "168665",
    img: "168665.jpg",
    model: "BEA-H200-9T",
    tno: "115-8402",
    load: "200",
    h: "85〜903",
    href: YB("168665", "shopping-pc-web-result-storesch-rsltlst-img"),
  },
  {
    id: "168670",
    img: "168670.jpg",
    model: "BEA-H400-15T",
    tno: "115-8405",
    load: "400",
    h: "97〜1503",
    href: YB("168670", "shopping-pc-web-result-storesch-rsltlst-img"),
  },
];
const CAR: ProductRow[] = [
  {
    id: "168639",
    img: "168639.jpg",
    model: "BEA-H150-8C",
    tno: "256-7183",
    load: "150",
    h: "100〜820",
    href: YB("168639", "shopping-pc-web-result-storesch-rsltlst-img"),
  },
];

const FAQ = [
  {
    q: "コゾウスタッカーとは何ですか？",
    a: "コゾウスタッカーは、トラスコ中山（TRUSCO）が製造する移動式リフター（ハンドリフター）の一種で、フォークで荷物をすくい上げて昇降・運搬する省力機器です。今回ご紹介するTPAH-L-1016は足踏み油圧式で、1000kgの荷物を最大約1600mmの高さまで持ち上げられます。フォークの幅を325〜740mmの範囲で調整できるのが大きな特徴です。",
  },
  {
    q: "コゾウスタッカーとコゾウリフターの違いは何ですか？",
    a: "どちらもトラスコの移動式リフターで、フォークで荷物をすくって昇降・運搬する点は共通です。大きな違いは、コゾウスタッカー（TPAH-L型）が「フォーク幅を広い範囲で調整できる（スライドフォーク）」設計で、幅の異なる荷物やパレットにも対応しやすい点です。一方コゾウリフターは、フォーク式・テーブル式、手動・電動、荷重150〜1000kg、揚高〜2800mmまで多彩なバリエーションから用途に合わせて選べます。汎用的に幅違いの荷物を扱うならスタッカー、用途がはっきりしていて最適な1台を選びたいならリフター、という考え方が目安です。",
  },
  {
    q: "フォーク式とテーブル式はどちらを選べばよいですか？",
    a: "フォーク式は、2本のフォーク（爪）で荷物やパレットの下をすくい上げるタイプで、パレット・すのこ・脚のある台などに向きます。テーブル式は、平らな天板で荷物を持ち上げるタイプで、底が平らな箱や、作業台のように使いたい場合に向きます。テーブルが脱着式でフォークとしても使えるモデルもあります。",
  },
  {
    q: "手動（足踏み油圧式）と電動はどう選びますか？",
    a: "手動（足踏み油圧式）は、フットペダルを踏んで昇降させるタイプで、電源不要・低コスト・軽量が魅力です。使用頻度が低め、または電源が取りにくい場所に向きます。電動（バッテリー式）は、スイッチ操作で昇降でき、繰り返し作業や重い荷物、高い位置への昇降で作業者の負担を大きく減らせます。1日に何度も使う・高く上げる・重い、という現場ほど電動が有利です。",
  },
  {
    q: "荷重（積載能力）はどう選べばよいですか？",
    a: "実際に持ち上げる荷物の最大重量に対して、余裕を持った積載能力を選びます。荷重には150kg・200kg・300kg・400kg・500kg・600kg・800kg・1000kgなどがあり、ギリギリの能力ではなく、扱う荷物より一段上の能力を選ぶと安全で機器も長持ちします。荷重中心距離（フォーク根元から荷物の重心までの距離）によって実際の能力が変わる点にも注意してください。",
  },
  {
    q: "揚高（持ち上げられる高さ）はどう選びますか？",
    a: "荷物を載せたい棚やトラック荷台などの高さに合わせて、最大揚高（フォーク・テーブルが上がる高さ）を選びます。揚高は900mm前後の低いものから、1200mm・1500mm、さらに2200mm・2800mmといった高所対応まであります。天井の低い場所では全高（機器自体の高さ）も確認が必要です。",
  },
  {
    q: "フォーク幅を調整できると何が便利ですか？",
    a: "扱う荷物やパレットの幅がまちまちな現場では、フォーク幅を調整できると1台で幅広く対応できます。コゾウスタッカーはフォークスライド機構でフォークの外幅を325〜740mmの範囲で変えられるため、専用機を何台も用意しなくても、さまざまな荷物に合わせて使えます。",
  },
  {
    q: "車載用（車載式）とは何ですか？",
    a: "トラックやバンの荷台に積み込んで持ち運べるコンパクトなタイプです。配送先での積み下ろしや、現場を移動しながら使う作業に向きます。今回のラインアップにも車載用フォーク式（150kg）があります。",
  },
  {
    q: "幅広タイプはどんなときに選びますか？",
    a: "脚の内幅（フォークを支える脚の間隔）が広いタイプで、幅の広い荷物やパレットを安定して持ち上げたいときに選びます。大きめの荷物を扱う現場や、荷物の下に脚を潜り込ませたい場合に向きます。",
  },
  {
    q: "最大何kg・何mmまで対応できますか？",
    a: "今回のラインアップでは、荷重は最大1000kg、揚高は最大約2800mmまで対応するモデルがあります。用途に応じて、低く軽いものから高く重いものまで幅広く選べます。具体的な数値は各商品ページの仕様欄でご確認ください。",
  },
  {
    q: "設置や資格は必要ですか？",
    a: "コゾウスタッカー・コゾウリフターは手押しの移動式リフターで、フォークリフトのような運転資格は基本的に不要です（自走機能はなく人が押して移動します）。ただし安全な使用のため、取扱説明書に沿った点検・操作を行ってください。事業所での安全教育の実施も推奨されます。",
  },
  {
    q: "油圧式はメンテナンスが必要ですか？",
    a: "油圧式は作動油（タービン油など）を使用します。油漏れや作動不良がないか定期点検が必要です。電動のボールねじ式（ドライシリンダ）タイプは油圧を使わないため油漏れの心配がなく、周囲をクリーンに保ちたい現場に向きます。",
  },
  {
    q: "狭い通路でも使えますか？",
    a: "コゾウスタッカー・コゾウリフターはコンパクトで小回りが利くため、狭い通路や限られたスペースでの取り回しに向いています。ただし機種ごとに全長・全幅・旋回スペースが異なるため、通路幅や作業スペースを事前に確認してください。",
  },
  {
    q: "トラスコ製を選ぶメリットは？",
    a: "トラスコ中山は物流・現場機器の国内主要メーカーで、ラインアップの豊富さ、供給の安定性、補修部品の入手性に強みがあります。用途に合った型番を選びやすく、長く使い続けやすいのがメリットです。",
  },
  {
    q: "どこで買うのが安いですか？",
    a: "当店ではコゾウスタッカー・コゾウリフターをネット販売の最安値帯に挑戦して提供しています。豊富なバリエーションを取り揃えているので、用途に合った1台を選んで、まとめて手配できます。まずは商品ページ・一覧をご確認ください。",
  },
  {
    q: "配送はどうなりますか？",
    a: "大型・重量物のため、多くの場合「車上渡し（トラックの荷台上でのお渡し）」となり、荷降ろしはお客様側での対応が必要になることがあります。搬入経路（通路幅・段差）も事前にご確認ください。詳細は各商品ページの配送情報をご確認ください。",
  },
  {
    q: "どんな現場・業種で使われていますか？",
    a: "工場の生産ライン、倉庫・物流センターの入出荷、店舗のバックヤード、建設現場の資材揚重、農業や食品加工など、荷物の昇降・運搬がある幅広い現場で使われています。人力での持ち上げによる腰痛・ケガの防止にも役立ちます。",
  },
];

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 py-10">
        {/* パンくず */}
        <nav className={`${cls.meta} mb-4`} aria-label="パンくず">
          <Link href="/" className="hover:underline">
            ホーム
          </Link>
          <span className="mx-1">/</span>
          <Link href="/articles" className="hover:underline">
            記事一覧
          </Link>
          <span className="mx-1">/</span>
          <span>コゾウスタッカーとは？コゾウリフターとの違い・選び方</span>
        </nav>

        <div className="mb-3">
          <CategoryBadge>運搬・昇降機器</CategoryBadge>
        </div>

        <h1 className={cls.h1}>
          コゾウスタッカーとは？コゾウリフターとの違い・選び方を徹底解説【トラスコ／2026年版】
        </h1>
        <p className={`${cls.meta} mb-4`}>
          公開日：2026年7月31日 ／ 作業用品ナビ編集部
        </p>

        <ArticleImage
          src="/articles/kozou-stacker/hero.jpg"
          alt="工場でパレットを持ち上げるトラスコ コゾウスタッカー（足踏み油圧式）"
          priority
        />

        {/* AEO即答 */}
        <AnswerBox>
          <p className="mb-2">
            <strong>コゾウスタッカー</strong>
            は、トラスコ中山（TRUSCO）の
            <strong>移動式リフター</strong>
            の一種。フォークで荷物をすくい上げて昇降・運搬する省力機器です。
            主力モデル<strong>TPAH-L-1016</strong>は足踏み油圧式で、
            <Mark>1000kgを最大約1600mm</Mark>
            まで持ち上げられ、
            <Mark>フォーク幅を325〜740mmで調整できる</Mark>
            のが最大の特徴です。
          </p>
          <p className="mb-2">
            よく似た<strong>コゾウリフター</strong>との違いは、スタッカーが
            <strong>フォーク幅を広く調整できる汎用タイプ</strong>
            なのに対し、 リフターは
            <strong>
              フォーク式・テーブル式／手動・電動／荷重150〜1000kg
            </strong>
            など
            用途特化で選べる点。幅違いの荷物を1台で扱うならスタッカー、用途が明確なら最適なリフター、が目安です。
          </p>
          <p>
            この記事では、両者の違い、フォーク式・テーブル式・手動・電動の選び方、
            荷重・揚高の見方を、
            <strong>全バリエーション比較表</strong>
            つきで整理します。
          </p>
        </AnswerBox>

        <PriceBanner>
          <p className="mb-1 text-sm font-bold">ネット販売 最安値帯へ挑戦中！</p>
          <p className="text-xs">
            コゾウスタッカー＆コゾウリフターを豊富にご用意。少しでもお安くご提供できるよう頑張っています。
          </p>
        </PriceBanner>

        {/* 主役商品カード */}
        <h2 className={cls.h2}>まずはこれ｜コゾウスタッカー TPAH-L-1016</h2>
        <p className={cls.body}>
          フォーク幅を調整でき、
          <Mark>1000kg</Mark>を最大約
          <Mark>1600mm</Mark>
          まで昇降できる主力モデルです。
        </p>
        <CardGrid>
          <ProductCard
            img={STACKER[0].img}
            name={`コゾウスタッカー ${STACKER[0].model}`}
            badge="足踏み油圧式 1000kg"
            href={STACKER[0].href}
            note={`トラスコ品番 ${STACKER[0].tno}`}
          />
        </CardGrid>

        <MainCta />

        {/* H2: コゾウスタッカーとは */}
        <h2 className={cls.h2}>コゾウスタッカーとは｜特徴と用途</h2>
        <p className={cls.body}>
          コゾウスタッカーは、トラスコ中山の
          <strong>移動式リフター（ハンドリフター）</strong>
          の一種で、
          昇降するフォークで荷物をすくい上げ、持ち上げたまま押して運べる省力機器です。
          人力では持ち上げにくい重い荷物を、少ない力で安全に昇降・運搬できます。
        </p>
        <p className={cls.body}>
          主力モデル<strong>TPAH-L-1016</strong>の特徴は次のとおりです。
        </p>
        <ul className={cls.list}>
          <li>
            <Mark>フォーク幅を325〜740mmで調整可能</Mark>
            （スライドフォーク）。幅の違う荷物・パレットに1台で対応。
          </li>
          <li>
            <strong>足踏み油圧式</strong>
            で電源不要。フットペダルを踏んで昇降。
          </li>
          <li>
            <Mark>1000kg</Mark>を<Mark>最大約1600mm</Mark>まで昇降。
          </li>
          <li>
            前輪は固定キャスター、後輪は自在ストッパー付きキャスターで取り回しやすい。
          </li>
          <li>
            早送り機能をなくすことで、1回のポンプ操作を軽くした設計。
          </li>
        </ul>
        <p className={cls.body}>
          工場・倉庫・店舗バックヤード・建設現場など、
          <strong>荷物の昇降・運搬がある幅広い現場</strong>
          で活躍します。
          人力での持ち上げによる腰痛やケガの予防にも役立ちます。
        </p>

        {/* H2: リフターとの違い */}
        <h2 className={cls.h2}>コゾウスタッカーとコゾウリフターの違い</h2>
        <p className={cls.body}>
          両者はどちらもトラスコの移動式リフターで、
          <strong>フォークで荷物をすくって昇降・運搬する</strong>
          基本構造は共通です。 違いを整理すると次のようになります。
        </p>
        <div className="overflow-x-auto">
          <table className={`${cls.table} my-4`}>
            <thead>
              <tr>
                <Th>項目</Th>
                <Th>コゾウスタッカー</Th>
                <Th>コゾウリフター</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>フォーク幅</Td>
                <Td>
                  <Mark>325〜740mmで調整可</Mark>（スライド）
                </Td>
                <Td>モデルごとに固定（幅広タイプあり）</Td>
              </tr>
              <tr>
                <Td>バリエーション</Td>
                <Td>汎用の主力モデル中心</Td>
                <Td>
                  <strong>フォーク式・テーブル式／手動・電動など多彩</strong>
                </Td>
              </tr>
              <tr>
                <Td>荷重の幅</Td>
                <Td>
                  <Mark>1000kg</Mark>（主力）
                </Td>
                <Td>
                  <Mark>150〜1000kg</Mark>
                </Td>
              </tr>
              <tr>
                <Td>揚高の幅</Td>
                <Td>最大約1600mm</Td>
                <Td>
                  <Mark>最大約2800mm</Mark>
                </Td>
              </tr>
              <tr>
                <Td>向いている使い方</Td>
                <Td>
                  幅の違う荷物を<strong>1台で汎用的に</strong>
                </Td>
                <Td>
                  用途が明確で<strong>最適な1台を選びたい</strong>
                </Td>
              </tr>
            </tbody>
          </table>
        </div>
        <Caution>
          「フォーク幅を変えたい・いろいろな荷物に1台で対応したい」ならコゾウスタッカー。
          「テーブル式がいい・電動がいい・特定の荷重や高さに最適化したい」ならコゾウリフター、
          という選び方が分かりやすい目安です。
        </Caution>

        {/* H2: 選び方5軸 */}
        <h2 className={cls.h2}>失敗しない選び方｜5つのチェックポイント</h2>
        <div className="overflow-x-auto">
          <table className={`${cls.table} my-4`}>
            <thead>
              <tr>
                <Th>チェック</Th>
                <Th>選択肢</Th>
                <Th>選び方の目安</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>①フォーク式／テーブル式</Td>
                <Td>フォーク／テーブル</Td>
                <Td>
                  パレット・脚付き台＝フォーク、底が平らな荷物・作業台用途＝テーブル
                </Td>
              </tr>
              <tr>
                <Td>②手動／電動</Td>
                <Td>足踏み油圧／電動</Td>
                <Td>低頻度・低コスト＝手動、繰り返し・重い・高い＝電動</Td>
              </tr>
              <tr>
                <Td>③荷重</Td>
                <Td>
                  <Mark>150〜1000kg</Mark>
                </Td>
                <Td>扱う最大重量より一段上の能力を選ぶ</Td>
              </tr>
              <tr>
                <Td>④揚高</Td>
                <Td>
                  <Mark>〜約2800mm</Mark>
                </Td>
                <Td>
                  載せたい棚・荷台の高さに合わせる。天井が低い場所は全高も確認
                </Td>
              </tr>
              <tr>
                <Td>⑤特殊タイプ</Td>
                <Td>車載／幅広</Td>
                <Td>持ち運ぶ＝車載、幅広の荷物＝幅広タイプ</Td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* H2: 手動フォーク */}
        <h2 className={cls.h2}>
          コゾウリフター｜手動フォーク式（足踏み油圧式）
        </h2>
        <p className={cls.body}>
          電源不要でコストを抑えられる、もっとも定番のタイプです。
          荷重・揚高のバリエーションが豊富なので、扱う荷物に合わせて選べます。
        </p>
        <CardGrid>
          {FORK_M.map((p, i) => (
            <ProductCard
              key={i}
              img={p.img}
              name={`コゾウリフター ${p.model}`}
              badge={`手動 ${p.load ? p.load + "kg" : ""}`}
              href={p.href}
              note={`トラスコ品番 ${p.tno}`}
            />
          ))}
        </CardGrid>

        <MainCta />

        {/* H2: 電動フォーク */}
        <h2 className={cls.h2}>コゾウリフター｜電動フォーク式</h2>
        <p className={cls.body}>
          スイッチ操作で昇降でき、繰り返し作業や重い荷物・高所への昇降で作業者の負担を大きく減らせます。
          高所対応（〜2800mm）や幅広タイプもあります。
        </p>
        <CardGrid>
          {FORK_E.map((p, i) => (
            <ProductCard
              key={i}
              img={p.img}
              name={`コゾウリフター ${p.model}`}
              badge={`電動 ${p.load ? p.load + "kg" : ""}`}
              href={p.href}
              note={`トラスコ品番 ${p.tno}`}
            />
          ))}
        </CardGrid>

        {/* H2: テーブル式 */}
        <h2 className={cls.h2}>コゾウリフター｜テーブル式</h2>
        <p className={cls.body}>
          平らな天板で荷物を持ち上げるタイプ。底が平らな荷物や、作業台のように使いたい場合に向きます。
          テーブルが脱着式でフォークとしても使えるモデルもあります。
        </p>
        <CardGrid>
          {TABLE.map((p, i) => (
            <ProductCard
              key={i}
              img={p.img}
              name={`コゾウリフター ${p.model}`}
              badge={`テーブル式 ${p.load ? p.load + "kg" : ""}`}
              href={p.href}
              note={`トラスコ品番 ${p.tno}`}
            />
          ))}
        </CardGrid>

        {/* H2: 車載 */}
        <h2 className={cls.h2}>コゾウリフター｜車載用</h2>
        <p className={cls.body}>
          トラックやバンの荷台に積んで持ち運べるコンパクトタイプ。
          配送先での積み下ろしや、現場を移動しながらの作業に向きます。
        </p>
        <CardGrid>
          {CAR.map((p, i) => (
            <ProductCard
              key={i}
              img={p.img}
              name={`コゾウリフター ${p.model}`}
              badge={`車載用 ${p.load ? p.load + "kg" : ""}`}
              href={p.href}
              note={`トラスコ品番 ${p.tno}`}
            />
          ))}
        </CardGrid>

        {/* H2: 全比較表 */}
        <h2 className={cls.h2}>
          【全ラインアップ比較表】タイプ・荷重・揚高で選ぶ
        </h2>
        <p className={cls.body}>
          当店取扱いのコゾウスタッカー＆コゾウリフターを一覧にまとめました。
          タイプ・荷重・型番から、必要なモデルをお選びください（揚高など詳細は各商品ページでご確認ください）。
        </p>
        <div className="overflow-x-auto">
          <table className={`${cls.table} my-4`}>
            <thead>
              <tr>
                <Th>タイプ</Th>
                <Th>型番</Th>
                <Th>荷重</Th>
                <Th>トラスコ品番</Th>
                <Th>商品</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>スタッカー（手動）</Td>
                <Td>{STACKER[0].model}</Td>
                <Td>{STACKER[0].load}kg</Td>
                <Td>{STACKER[0].tno}</Td>
                <Td>
                  <ProductTableCell
                    img={STACKER[0].img}
                    model={STACKER[0].model}
                    href={STACKER[0].href}
                  />
                </Td>
              </tr>
              {FORK_M.map((p, i) => (
                <tr key={`fm${i}`}>
                  <Td>手動フォーク</Td>
                  <Td>{p.model}</Td>
                  <Td>{p.load ? p.load + "kg" : "—"}</Td>
                  <Td>{p.tno}</Td>
                  <Td>
                    <ProductTableCell
                      img={p.img}
                      model={p.model}
                      href={p.href}
                    />
                  </Td>
                </tr>
              ))}
              {FORK_E.map((p, i) => (
                <tr key={`fe${i}`}>
                  <Td>電動フォーク</Td>
                  <Td>{p.model}</Td>
                  <Td>{p.load ? p.load + "kg" : "—"}</Td>
                  <Td>{p.tno}</Td>
                  <Td>
                    <ProductTableCell
                      img={p.img}
                      model={p.model}
                      href={p.href}
                    />
                  </Td>
                </tr>
              ))}
              {TABLE.map((p, i) => (
                <tr key={`tb${i}`}>
                  <Td>テーブル式</Td>
                  <Td>{p.model}</Td>
                  <Td>{p.load ? p.load + "kg" : "—"}</Td>
                  <Td>{p.tno}</Td>
                  <Td>
                    <ProductTableCell
                      img={p.img}
                      model={p.model}
                      href={p.href}
                    />
                  </Td>
                </tr>
              ))}
              {CAR.map((p, i) => (
                <tr key={`car${i}`}>
                  <Td>車載用</Td>
                  <Td>{p.model}</Td>
                  <Td>{p.load ? p.load + "kg" : "—"}</Td>
                  <Td>{p.tno}</Td>
                  <Td>
                    <ProductTableCell
                      img={p.img}
                      model={p.model}
                      href={p.href}
                    />
                  </Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mb-4 text-xs text-gray-800">
          ※
          荷重中心距離・全高・フォーク寸法・揚高などの詳細仕様は各商品ページの仕様欄をご確認ください。
        </p>

        {/* H2: 使い方・安全 */}
        <h2 className={cls.h2}>安全に使うためのポイント</h2>
        <ul className={cls.list}>
          <li>
            扱う荷物の最大重量より、余裕を持った荷重能力のモデルを選ぶ。
          </li>
          <li>
            荷重中心距離（フォーク根元から重心までの距離）が離れると能力が下がる点に注意。
          </li>
          <li>
            持ち上げたまま急旋回・急発進をしない。段差はゆっくり越える。
          </li>
          <li>荷物は片寄せせず、中央に均等に載せる。</li>
          <li>使用前に油漏れ・キャスター・ペダルの動作を点検する。</li>
          <li>
            移動式リフターは手押し式で運転資格は基本不要だが、社内で安全教育を行う。
          </li>
        </ul>
        <Caution>
          フォークリフトのような自走機能はなく、人が押して移動させる機器です。
          具体的な操作方法・点検項目は必ず取扱説明書に従ってください。
        </Caution>

        {/* H2: FAQ */}
        <h2 className={cls.h2}>よくある質問（FAQ）</h2>
        <div className="space-y-4">
          {FAQ.map((item, idx) => (
            <div
              key={idx}
              className="rounded border border-gray-300 bg-white p-4"
            >
              <p className={cls.faqQ}>Q. {item.q}</p>
              <p className={cls.bodySm}>A. {item.a}</p>
            </div>
          ))}
        </div>

        {/* まとめ */}
        <h2 className={cls.h2}>まとめ｜まずは用途を決めて、最適な1台を</h2>
        <p className={cls.body}>
          コゾウスタッカーは、
          <strong>フォーク幅を調整できる汎用性</strong>
          が魅力の移動式リフター。
          幅の違う荷物を1台で扱いたいならまず候補になります。
          用途がはっきりしているなら、
          <strong>フォーク式・テーブル式／手動・電動／荷重・揚高</strong>
          で 最適なコゾウリフターを選びましょう。
        </p>
        <p className={cls.body}>
          当店ではネット販売の最安値帯に挑戦中です。
          まずはコゾウスタッカーの商品ページ、そしてコゾウリフター一覧から、
          現場に合った1台をお探しください。
        </p>

        <FinalCta />

        {/* JSON-LD */}
        <Script
          id="ld-article"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline:
                "コゾウスタッカーとは？コゾウリフターとの違い・選び方を徹底解説【トラスコ／2026年版】",
              datePublished: "2026-07-31",
              dateModified: "2026-07-31",
              author: { "@type": "Organization", name: "作業用品ナビ編集部" },
              publisher: {
                "@type": "Organization",
                name: "作業用品ナビ",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.sagyou-navi.com/logo.png",
                },
              },
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id":
                  "https://www.sagyou-navi.com/articles/trusco-kozou-stacker-lifter-selection-guide",
              },
              image: "https://www.sagyou-navi.com/articles/kozou-stacker/hero.jpg",
            }),
          }}
        />
        <Script
          id="ld-breadcrumb"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "ホーム",
                  item: "https://www.sagyou-navi.com/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "記事一覧",
                  item: "https://www.sagyou-navi.com/articles",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "コゾウスタッカーとは？コゾウリフターとの違い・選び方",
                  item: "https://www.sagyou-navi.com/articles/trusco-kozou-stacker-lifter-selection-guide",
                },
              ],
            }),
          }}
        />
        <Script
          id="ld-faq"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: FAQ.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />
      </main>
      <SiteFooter />
    </>
  );
}
