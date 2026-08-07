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
    "WBGTと作業時間の目安｜暑さ指数別の休憩時間早見表と現場の熱中症対策【2026年版】｜作業用品ナビ",
  description:
    "「WBGT 作業時間 目安」を知りたい方向けに、暑さ指数（WBGT）別の連続作業時間と休憩時間の目安を早見表で解説。厚生労働省マニュアル・JIS Z 8504に基づき、WBGT基準値を1℃超過で15分/時、2℃で30分/時、3℃で45分/時、それ以上は作業中止という考え方を、身体作業強度別のWBGT基準値表とあわせて整理。2025年6月施行の義務化対応と、作業時間を守りながら現場を冷やす具体策も紹介します。",
  alternates: {
    canonical:
      "https://www.sagyou-navi.com/articles/wbgt-work-rest-time-guideline",
  },
  openGraph: {
    title:
      "WBGTと作業時間の目安｜暑さ指数別の休憩時間早見表と現場の熱中症対策【2026年版】",
    description:
      "WBGT別の作業時間・休憩時間の目安を早見表で解説。作業強度別基準値、義務化対応、現場を冷やす対策まで。",
    type: "article",
    images: ["/articles/wbgt-work-time/hero.jpg"],
  },
};

// ==============================
// URL helper
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
const SC = "shopping-pc-web-category-storeitm-rsltlst-img";
const YB = (id: string) =>
  buildUrl(
    `https://store.shopping.yahoo.co.jp/signcity-yshop/${id}.html?sc_i=${SC}&ea=`,
    UTM,
  );
const RAW = (u: string) => buildUrl(u, UTM);

// ==============================
// 記事内コンポーネント
// ==============================
function CategoryBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block rounded bg-gray-900 px-2 py-1 text-xs font-bold text-white">
      {children}
    </span>
  );
}

function InfoNote({ children }: { children: ReactNode }) {
  return (
    <div className="my-5 rounded border border-gray-300 bg-gray-50 p-4">
      <p className="mb-1 text-xs font-bold text-gray-900">現場のポイント</p>
      <div className="text-sm leading-relaxed text-gray-900">{children}</div>
    </div>
  );
}

function CardGrid({ children }: { children: ReactNode }) {
  return (
    <div className="my-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  );
}

function ProductShopButton({ href }: { href: string; shop?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="inline-block rounded bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-gray-700"
    >
      Yahoo!で見る
    </a>
  );
}

function ShopLinks({ yahoo }: { yahoo?: string }) {
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {yahoo && <ProductShopButton href={yahoo} shop="yahoo" />}
    </div>
  );
}

function ProductCard({
  img,
  name,
  badge,
  maker,
  spec,
  yahoo,
}: {
  img: string;
  name: string;
  badge?: string;
  maker?: string;
  spec?: string;
  yahoo?: string;
}) {
  return (
    <div className="flex flex-col overflow-hidden rounded border border-gray-300 bg-white">
      <div className="flex items-center justify-center bg-gray-50 p-2">
        <Image
          src={`/products/${img}`}
          alt={name}
          width={280}
          height={280}
          className="h-auto max-h-48 w-full object-contain"
        />
      </div>
      <div className="flex flex-1 flex-col p-3">
        {badge && (
          <div className="mb-1">
            <CategoryBadge>{badge}</CategoryBadge>
          </div>
        )}
        <p className="mb-1 text-sm font-bold leading-snug text-gray-900">
          {name}
        </p>
        {maker && <p className={cls.meta}>メーカー：{maker}</p>}
        {spec && <p className={cls.meta}>仕様：{spec}</p>}
        <div className="mt-auto">
          <ShopLinks yahoo={yahoo} />
        </div>
      </div>
    </div>
  );
}

function Th({ children }: { children: ReactNode }) {
  return <th className={cls.th}>{children}</th>;
}
function Td({ children }: { children: ReactNode }) {
  return <td className={cls.td}>{children}</td>;
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
      <figcaption className={`mt-1 ${cls.meta}`}>{alt}</figcaption>
    </figure>
  );
}

function ConclusionBox({
  title,
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <div className="my-6 rounded-r border-l-4 border-gray-900 bg-gray-50 p-5">
      {title && (
        <p className="mb-2 text-xs font-bold text-gray-900">{title}</p>
      )}
      <div className="leading-relaxed text-gray-900">{children}</div>
    </div>
  );
}

function MedicalAlert({ children }: { children: ReactNode }) {
  return (
    <div className="my-5 rounded border border-red-300 bg-red-50 p-4">
      <p className="mb-1 text-xs font-bold text-red-900">ご注意（YMYL）</p>
      <div className="text-sm leading-relaxed text-gray-900">{children}</div>
    </div>
  );
}

function CtaBar({
  href,
  label,
  sub,
}: {
  href: string;
  label: string;
  sub?: string;
}) {
  return (
    <div className="my-6 rounded border border-gray-900 bg-gray-50 p-4">
      {sub && <p className="mb-1 text-xs font-bold text-gray-900">{sub}</p>}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="inline-block rounded bg-gray-900 px-5 py-2 text-sm font-bold text-white transition-colors hover:bg-gray-700"
      >
        {label}
      </a>
    </div>
  );
}

function FinalCta() {
  return (
    <div className="my-10 rounded border-2 border-gray-900 bg-gray-50 p-6">
      <p className="mb-2 text-lg font-bold text-gray-900">
        作業時間の管理と「冷やす対策」はセットで
      </p>
      <p className={`${cls.bodySm} mb-4`}>
        WBGTに応じて休憩を取るだけでなく、環境・身体を冷やす対策を組み合わせることで、
        安全に作業時間を確保できます。現場に合った対策アイテムをお選びください。
      </p>
      <div className="flex flex-wrap gap-2">
        <a
          href={CTA_SPOT}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="inline-block rounded bg-gray-900 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-gray-700"
        >
          スポットクーラー 一覧
        </a>
        <a
          href={CTA_KOUJOSEN}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="inline-block rounded bg-gray-900 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-gray-700"
        >
          工場扇 一覧
        </a>
        <a
          href={CTA_VEST}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="inline-block rounded bg-gray-900 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-gray-700"
        >
          冷却ベスト 一覧
        </a>
        <a
          href={CTA_KUCHOFUKU}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="inline-block rounded bg-gray-900 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-gray-700"
        >
          空調服 一覧
        </a>
      </div>
    </div>
  );
}

function Mark({ children }: { children: ReactNode }) {
  return <mark className={cls.mark}>{children}</mark>;
}

// ==============================
// CTA定数
// ==============================
const CTA_KUCHOFUKU = RAW(
  "https://store.shopping.yahoo.co.jp/signcity-yshop/search.html?p=%E7%A9%BA%E8%AA%BF%E6%9C%8D#CentSrchFilter1",
);
const CTA_VEST = RAW(
  "https://store.shopping.yahoo.co.jp/signcity-yshop/search.html?aq=&oq=&storeid=signcity-yshop&strcid=eab32ec7ce6&p=%E5%86%B7%E5%8D%B4%E3%83%99%E3%82%B9%E3%83%88&sc_i=shopping-pc-web-category-storesg-h_srch-srchbtn-sgstfrom-category-storeitm-h_srch-srchbox",
);
const CTA_INNER = RAW(
  "https://store.shopping.yahoo.co.jp/signcity-yshop/search.html?p=%E7%86%B1%E4%B8%AD%E7%97%87%E3%80%80%E3%82%A4%E3%83%B3%E3%83%8A%E3%83%BC&sc_i=shopping-pc-web-category-storesg-h_srch-srchbtn-sgstfrom-category-storeitm-h_srch-srchbox&strcid=eab32ec7ce6&view=grid",
);
const CTA_KOUJOSEN = RAW(
  "https://store.shopping.yahoo.co.jp/signcity-yshop/search.html?aq=&oq=&p=%E5%B7%A5%E5%A0%B4%E6%89%87&storeid=signcity-yshop&sc_i=shopping-pc-web-result-storesg-h_srch-srchbtn-sgstfrom-result-storesch-h_srch-srchbox",
);
const CTA_SPOT = RAW(
  "https://store.shopping.yahoo.co.jp/signcity-yshop/search.html?aq=&oq=&p=%E3%82%B9%E3%83%9D%E3%83%83%E3%83%88%E3%82%AF%E3%83%BC%E3%83%A9%E3%83%BC&storeid=signcity-yshop&sc_i=shopping-pc-web-result-storesg-h_srch-srchbtn-sgstfrom-result-storesch-h_srch-srchbox",
);

// ==============================
// 商品データ
// ==============================
const COOLER = [
  {
    img: "203231.jpg",
    name: "NICHIDO スポットクーラー SPC-25ACN",
    maker: "日動",
    spec: "単相100V",
    yahoo: YB("203231"),
  },
  {
    img: "290173.jpg",
    name: "TRUSCO スポットエアコン 単相100V 首振り無 TS25ECN-1",
    maker: "トラスコ",
    spec: "単相100V",
    yahoo: YB("290173"),
  },
  {
    img: "290171.jpg",
    name: "TRUSCO スポットエアコン 単相100V ドレンレス TS23ECN-1DL",
    maker: "トラスコ",
    spec: "単相100V/ドレンレス",
    yahoo: YB("290171"),
  },
  {
    img: "172490.jpg",
    name: "TRUSCO スポットエアコン 三相200V 首振り付 TS-28DW-3NDL",
    maker: "トラスコ",
    spec: "三相200V/強冷却",
    yahoo: YB("172490"),
  },
  {
    img: "203275.jpg",
    name: "Suiden スポットエアコン 1口 単相100V SS-25ELW-1T",
    maker: "スイデン",
    spec: "単相100V",
    yahoo: YB("203275"),
  },
  {
    img: "172108.jpg",
    name: "IRIS スポットクーラー 2.5kw ISAC-1201-B",
    maker: "アイリス",
    spec: "2.5kw",
    yahoo: YB("172108"),
  },
  {
    img: "289910.jpg",
    name: "NBCエンジニア スポットクーラー クールキャノンエコ・スリム GNE500",
    maker: "NBC",
    spec: "単相100V/スリム",
    yahoo: YB("289910"),
  },
];
const FAN = [
  {
    img: "172321.jpg",
    name: "スイデン 工場扇 スタンド型 樹脂ハネ45cm SF-45VS-1VP2",
    maker: "スイデン",
    spec: "スタンド/45cm",
    yahoo: YB("172321"),
  },
  {
    img: "172314.jpg",
    name: "スイデン 工場扇 スタンドMS 樹脂ハネ45cm SF-45MS-1VP",
    maker: "スイデン",
    spec: "スタンド/45cm",
    yahoo: YB("172314"),
  },
  {
    img: "203297.jpg",
    name: "TRUSCO 全閉式DCモーター工場扇 ジェネラルファン・ビッグ 60cm DF-60",
    maker: "トラスコ",
    spec: "DC/60cm",
    yahoo: YB("203297"),
  },
  {
    img: "171959.jpg",
    name: "アクアシステム エア駆動式工場扇ミストファン ACM-A",
    maker: "アクアシステム",
    spec: "エア駆動/ミスト",
    yahoo: YB("171959"),
  },
];
const MIST = [
  {
    img: "289961.jpg",
    name: "TRUSCO 超音波式ミストファンPRO MF-22",
    maker: "トラスコ",
    spec: "超音波式",
    yahoo: YB("289961"),
  },
  {
    img: "289984.jpg",
    name: "SHOWA ミスト扇風機 ミストファンTN N26-108",
    maker: "昭和",
    spec: "ミスト扇風機",
    yahoo: YB("289984"),
  },
  {
    img: "203261.jpg",
    name: "SHOWA ミスト付き扇風機 ミストワークファン N25-01",
    maker: "昭和",
    spec: "ミスト扇風機",
    yahoo: YB("203261"),
  },
];
const VEST = [
  {
    img: "203171.jpg",
    name: "BURTLE 冷却ベスト アイスクラフト IC101S-35-XL",
    maker: "バートル",
    spec: "保冷剤式",
    yahoo: YB("203171"),
  },
  {
    img: "171898.jpg",
    name: "バートル ACタクティカルベスト AC1154-35-M",
    maker: "バートル",
    spec: "空調ファン式",
    yahoo: YB("171898"),
  },
  {
    img: "172296.jpg",
    name: "サンコー ハーネス対応冷蔵ベスト RZFHTVSBK",
    maker: "サンコー",
    spec: "デュアル冷却",
    yahoo: YB("172296"),
  },
  {
    img: "172034.jpg",
    name: "タジマ 清涼ファン風雅パッド フルセット FP-AA37SEGYF",
    maker: "タジマ",
    spec: "ファンパッド",
    yahoo: YB("172034"),
  },
  {
    img: "290117.jpg",
    name: "TRUSCO 長時間アルミパック保冷剤用 クールベスト TCV-BK",
    maker: "トラスコ",
    spec: "保冷剤式",
    yahoo: YB("290117"),
  },
  {
    img: "172467.jpg",
    name: "スリーライク 注水式ベスト BODYCOOL SMART-X（S）",
    maker: "スリーライク",
    spec: "注水式/気化熱",
    yahoo: YB("172467"),
  },
];
const FRIDGE = [
  {
    img: "172520.jpg",
    name: "HiKOKI コードレス冷温庫 36L UL18DE(WMGZ)",
    maker: "ハイコーキ",
    spec: "36L/コードレス",
    yahoo: YB("172520"),
  },
  {
    img: "289883.jpg",
    name: "TRUSCO パーソナルクーリングボックス ど冷えもんBOX＋電源セット DHEBOXJE3000BSET",
    maker: "トラスコ",
    spec: "保冷+電源",
    yahoo: YB("289883"),
  },
];
const SHADE = [
  {
    img: "203270.jpg",
    name: "Suiden クーラーテント 2.4m×2.4m SS-TNT-2424-C",
    maker: "スイデン",
    spec: "2.4×2.4m",
    yahoo: YB("203270"),
  },
  {
    img: "203268.jpg",
    name: "Suiden クーラーテント 1.8m×2.7m SS-TNT-1827-C",
    maker: "スイデン",
    spec: "1.8×2.7m",
    yahoo: YB("203268"),
  },
  {
    img: "289917.jpg",
    name: "KOK HEXEASY 熱中症クールテント 3×3M HEX-C-33",
    maker: "KOK",
    spec: "3×3m",
    yahoo: YB("289917"),
  },
  {
    img: "172483.jpg",
    name: "TRUSCO 天然すだれ ナチュラル 幅176×高157cm TRBR-1715",
    maker: "トラスコ",
    spec: "すだれ",
    yahoo: YB("172483"),
  },
];
const FAQ = [
  {
    q: "WBGTが高いとき、作業時間と休憩はどう取ればよいですか？",
    a: "厚生労働省の職場における熱中症予防対策マニュアル（JIS Z 8504に基づく）では、熱に慣れた（暑熱順化した）作業者について、身体作業強度ごとのWBGT基準値を1℃程度超過しているときは1時間あたり15分以上、2℃程度超過で30分以上、3℃程度超過で45分以上の休憩を取り、それ以上超過している場合は作業中止が望ましいとされています。暑熱順化していない作業者は、さらに長い休憩が望ましいとされています。",
  },
  {
    q: "WBGTの基準値は作業の強度で変わるのですか？",
    a: "はい。身体作業強度（代謝率レベル）によってWBGT基準値が異なります。区分0（安静）は暑熱順化者で33、区分1（低代謝率＝楽な立ち作業など）は30、区分2（中程度＝継続的な手足の作業など）は28、区分3（高代謝率＝重い荷物運搬など）は25、区分4（極高代謝率＝激しい作業）は23が目安です（いずれも順化者。非順化者はこれより低い値）。強度が高い作業ほど、低いWBGTでも対策が必要になります。",
  },
  {
    q: "暑熱順化とは何ですか？作業時間にどう影響しますか？",
    a: "暑熱順化とは、体が暑さに慣れることです。一般に数日〜2週間ほどかけて汗をかきやすくなり、体温調節がうまくなります。順化していない人（シーズン初め、休み明け、新規作業者など）は同じWBGTでも熱中症になりやすいため、作業時間を短く・休憩を長くし、徐々に体を慣らす必要があります。義務化対応でも、順化期間中の配慮は重要なポイントです。",
  },
  {
    q: "そもそもWBGTとは何ですか？",
    a: "WBGT（湿球黒球温度、暑さ指数）は、気温だけでなく湿度と輻射熱（日射・地面や機械からの熱）を組み合わせて算出する、熱中症リスクの指標です。屋外（日射あり）はWBGT＝0.7×湿球温度＋0.2×黒球温度＋0.1×気温、屋内はWBGT＝0.7×湿球温度＋0.3×黒球温度で求めます。気温よりも実際の体感や熱ストレスに近い値が得られます。",
  },
  {
    q: "2025年6月の義務化で、作業時間に関して何が変わりましたか？",
    a: "2025年6月1日施行の改正労働安全衛生規則により、WBGT28℃以上または気温31℃以上の環境で、連続1時間以上または1日4時間を超えて行われることが見込まれる作業を対象に、事業者へ熱中症対策（体制整備・手順作成・関係者への周知）が義務付けられました。作業時間そのものの上限が一律に定められたわけではありませんが、WBGTに応じた休憩の確保が実務上ほぼ必須になっています。違反時は6か月以下の拘禁刑または50万円以下の罰金の対象となり得ます。",
  },
  {
    q: "WBGTはどう測ればよいですか？",
    a: "気温計ではWBGTは測れません。黒球で輻射熱を捉えられるWBGT計（黒球式熱中症指数計）で、作業場所ごとに実測するのが基本です。環境省の熱中症予防情報サイトで地域の予測値も確認できますが、現場は日射・機械熱で予測より高くなることが多いため、実測との併用が推奨されます。",
  },
  {
    q: "休憩の目安を守っていれば熱中症にならないですか？",
    a: "いいえ。WBGTと休憩の目安は判断の基準ですが、個人の体調・持病・睡眠不足・水分摂取状況によってリスクは変わります。目安を守りつつ、こまめな水分・塩分補給、体調確認、声かけ、身体を冷やす対策を併用することが重要です。少しでも異変を感じたら作業を離脱してください。",
  },
  {
    q: "作業時間を確保するために現場でできる対策は？",
    a: "環境を冷やす（スポットクーラー・工場扇・ミストファン・テント・すだれ）、身体を冷やす（空調服・冷却ベスト・保冷剤ベスト・注水式ベスト）、体を冷やす準備（冷温庫・保冷ボックスで飲料や保冷剤を冷やす）を組み合わせます。WBGTそのものを下げれば、同じ環境でも安全に作業できる時間を延ばせます。",
  },
  {
    q: "スポットクーラーと工場扇はどちらが効果的ですか？",
    a: "目的が異なります。スポットクーラーは冷風で局所的に気温を下げ、工場扇は風を送って汗の気化を促し体感温度を下げます。WBGTは気温・湿度・気流の総合指標なので、両方を併用すると効果的です。密閉した空間ではスポットクーラー、広い場所や風を通したい場所では工場扇が向きます。",
  },
  {
    q: "ミストファンは屋内でも使えますか？",
    a: "使えますが、湿度が上がりやすい点に注意が必要です。WBGTは湿度が高いと上昇するため、換気の悪い屋内で大量のミストを使うと逆効果になることがあります。屋外や風通しのよい場所、または超音波式などの細かいミストで湿度上昇を抑えるタイプが屋内向きです。",
  },
  {
    q: "冷却ベストにはどんな種類がありますか？",
    a: "主に、①空調ファン式（ファンで服内に風を送る）、②保冷剤式（凍らせた保冷剤を入れる）、③注水式（水を含ませ気化熱で冷やす）、④冷蔵・電動冷却式（ペルチェ等で冷やす）があります。作業環境や動きやすさ、持続時間で選びます。空調服と組み合わせるとより効果的です。",
  },
  {
    q: "空調服と冷却ベストは併用できますか？",
    a: "できます。空調服で全身に風を通しつつ、首元や体幹を保冷剤・冷却プレートで直接冷やすと、体感と深部体温の両方に働きかけられます。高温環境での長時間作業では、環境冷却（クーラー・扇風機）と身体冷却（空調服・ベスト）を重ねるのが効果的です。",
  },
  {
    q: "休憩場所はどう整えればよいですか？",
    a: "エアコンや扇風機で涼しくし、冷たい飲料・冷蔵庫・長いす・タオルなどを用意した休憩室・クールテントを設けます。日陰で発熱体から離れた場所を選び、WBGTを下げた休憩スペースを確保することで、体温の回復が早まり、次の作業に安全に戻れます。",
  },
  {
    q: "水分・塩分はどのくらい補給すればよいですか？",
    a: "のどの渇きを感じる前に、こまめに補給するのが基本です。大量に汗をかく作業では、水だけでなく塩分（経口補水液や塩分タブレットなど）も補います。作業前・作業中・休憩ごとの定期的な補給を習慣づけ、目安を現場で共有しておくと安全です。",
  },
  {
    q: "屋内・オフィスでもWBGT対策は必要ですか？",
    a: "必要な場合があります。空調が不十分な屋内や、機械・厨房などの熱源がある場所では、屋内でもWBGTが高くなります。実際に屋内での熱中症も多く発生しているため、屋内でもWBGTを実測し、基準を超えるなら作業時間・休憩・冷却対策を検討してください。",
  },
  {
    q: "どこで対策アイテムを揃えられますか？",
    a: "当店では、スポットクーラー・工場扇・ミストファン・空調服・冷却ベスト・冷温庫・クールテントなど、現場の熱中症対策アイテムを幅広く取り扱っています。環境を冷やすものと身体を冷やすものを組み合わせて、作業時間を安全に確保する体制づくりにお役立てください。",
  },
];

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-[850px] px-4 py-10">
        <nav className={`mb-4 text-xs ${cls.meta}`} aria-label="パンくず">
          <Link href="/" className="hover:underline">
            ホーム
          </Link>
          <span className="mx-1">/</span>
          <Link href="/articles" className="hover:underline">
            記事一覧
          </Link>
          <span className="mx-1">/</span>
          <span>WBGTと作業時間の目安</span>
        </nav>

        <div className="mb-3">
          <CategoryBadge>熱中症・暑さ対策</CategoryBadge>
        </div>

        <h1 className={cls.h1}>
          WBGTと作業時間の目安｜暑さ指数別の休憩時間早見表と現場の熱中症対策【2026年版】
        </h1>
        <p className={`mb-4 ${cls.meta}`}>
          公開日：2026年7月31日 ／ 作業用品ナビ編集部
        </p>

        <ArticleImage
          src="/articles/wbgt-work-time/hero.jpg"
          alt="建設現場でWBGT計を確認しながら休憩を取る作業員"
          priority
        />

        <ConclusionBox title="この記事の結論（先に要点）">
          <ul className="list-disc space-y-1 pl-5">
            <li>
              <Mark>WBGT基準値を1℃超過＝15分/時、2℃＝30分/時、3℃＝45分/時</Mark>
              の休憩が目安（順化者）。それ以上は作業中止が望ましい。
            </li>
            <li>
              <strong>WBGT基準値は作業強度で変わる</strong>
              （安静33／軽作業30／中程度28／重作業25／激しい23、順化者の目安）。
            </li>
            <li>
              <strong>暑熱順化していない人</strong>
              は、さらに休憩を長く・作業時間を短く。
            </li>
            <li>
              作業時間を確保するには
              <strong>
                環境を冷やす（クーラー・扇・ミスト・テント）＋身体を冷やす（空調服・冷却ベスト）
              </strong>
              が有効。
            </li>
          </ul>
        </ConclusionBox>

        <MedicalAlert>
          本記事は厚生労働省・環境省・JISの公表情報に基づく一般的な目安の解説であり、
          医学的・法的助言ではありません。実際の作業可否は、現場のWBGT実測・作業者の体調・
          産業医や安全衛生担当者の判断に従ってください。少しでも体調に異変を感じたら、
          すぐに作業を離脱し、身体を冷やしてください。
        </MedicalAlert>

        <h2 className={cls.h2}>まず備えたい「WBGTを下げる」対策アイテム</h2>
        <p className={cls.body}>
          作業時間を安全に確保する近道は、WBGTそのものを下げること。
          環境を冷やすスポットクーラー・工場扇・ミストファンが基本装備です。
        </p>
        <CardGrid>
          <ProductCard {...COOLER[3]} badge="スポットエアコン" />
          <ProductCard {...FAN[2]} badge="工場扇（DC）" />
          <ProductCard {...MIST[0]} badge="ミストファン" />
        </CardGrid>

        <CtaBar
          href={CTA_SPOT}
          label="スポットクーラー 一覧を見る →"
          sub="現場を涼しく、作業時間を確保"
        />

        <h2 className={cls.h2}>WBGT（暑さ指数）とは｜気温との違い</h2>
        <p className={cls.body}>
          WBGT（湿球黒球温度、暑さ指数）は、
          <strong>気温・湿度・輻射熱</strong>
          を組み合わせて算出する、熱中症リスクの指標です。気温だけでは分からない「湿度の高さ」や「日射・機械熱」を織り込むため、実際の体への熱ストレスに近い値が得られます。
        </p>
        <div className="overflow-x-auto">
          <table className={`${cls.table} my-4`}>
            <thead>
              <tr>
                <Th>環境</Th>
                <Th>計算式</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>屋外（日射あり）</Td>
                <Td>WBGT ＝ 0.7×湿球温度 ＋ 0.2×黒球温度 ＋ 0.1×気温</Td>
              </tr>
              <tr>
                <Td>屋内・日射なし</Td>
                <Td>WBGT ＝ 0.7×湿球温度 ＋ 0.3×黒球温度</Td>
              </tr>
            </tbody>
          </table>
        </div>
        <InfoNote>
          気温計ではWBGTは測れません。輻射熱を捉える
          <strong>黒球式のWBGT計</strong>
          で、作業場所ごとに実測するのが基本です。
        </InfoNote>

        <h2 className={cls.h2}>WBGTと作業時間・休憩の目安【早見表】</h2>
        <p className={cls.body}>
          もっとも知りたい「作業時間の目安」です。
          厚生労働省の職場における熱中症予防対策マニュアル（JIS Z 8504に基づく）では、暑熱順化した作業者について、
          <strong>その作業のWBGT基準値をどれだけ超えているか</strong>
          で1時間あたりの休憩時間の目安が示されています。
        </p>
        <div className="overflow-x-auto">
          <table className={`${cls.table} my-4`}>
            <thead>
              <tr>
                <Th>WBGT基準値の超過</Th>
                <Th>1時間あたりの休憩の目安</Th>
                <Th>作業の考え方</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>基準値以下</Td>
                <Td>通常の休憩</Td>
                <Td>通常作業（水分・塩分補給は継続）</Td>
              </tr>
              <tr>
                <Td>約1℃超過</Td>
                <Td>
                  <Mark>15分以上</Mark>
                </Td>
                <Td>連続作業時間を短めに</Td>
              </tr>
              <tr>
                <Td>約2℃超過</Td>
                <Td>
                  <Mark>30分以上</Mark>
                </Td>
                <Td>作業と休憩を細かく繰り返す</Td>
              </tr>
              <tr>
                <Td>約3℃超過</Td>
                <Td>
                  <Mark>45分以上</Mark>
                </Td>
                <Td>作業時間を大幅に短縮</Td>
              </tr>
              <tr>
                <Td>3℃超〜</Td>
                <Td>
                  <Mark>作業中止が望ましい</Mark>
                </Td>
                <Td>時間帯変更・中止を検討</Td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className={`mb-3 ${cls.meta}`}>
          出典：厚生労働省「職場における熱中症予防対策マニュアル」／JIS Z
          8504。暑熱順化者・特段の冷却対策を講じていない場合の目安。
        </p>
        <InfoNote>
          暑熱順化していない作業者（シーズン初め・休み明け・新規作業者など）は、上記よりも
          <strong>長い休憩・短い作業時間</strong>
          が望ましいとされています。また、なるべく1時間ごとに5〜10分程度の休憩を入れる、という一般的な目安もあります。
        </InfoNote>

        <h2 className={cls.h2}>作業強度で変わるWBGT基準値</h2>
        <p className={cls.body}>
          上の「超過」を判断するもとになるのが、
          <strong>作業強度別のWBGT基準値</strong>
          です。重い作業ほど体が発熱するため、低いWBGTでも対策が必要になります。
        </p>
        <div className="overflow-x-auto">
          <table className={`${cls.table} my-4`}>
            <thead>
              <tr>
                <Th>区分</Th>
                <Th>作業の例</Th>
                <Th>順化者</Th>
                <Th>非順化者</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>区分0（安静）</Td>
                <Td>安静・楽な座位</Td>
                <Td>33</Td>
                <Td>32</Td>
              </tr>
              <tr>
                <Td>区分1（低代謝率）</Td>
                <Td>軽い立ち作業・軽作業</Td>
                <Td>30</Td>
                <Td>29</Td>
              </tr>
              <tr>
                <Td>区分2（中程度）</Td>
                <Td>継続的な手足の作業</Td>
                <Td>28</Td>
                <Td>26</Td>
              </tr>
              <tr>
                <Td>区分3（高代謝率）</Td>
                <Td>重い荷物の運搬など</Td>
                <Td>25</Td>
                <Td>22</Td>
              </tr>
              <tr>
                <Td>区分4（極高代謝率）</Td>
                <Td>激しい全身作業</Td>
                <Td>23</Td>
                <Td>18</Td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className={`mb-3 ${cls.meta}`}>
          出典：JIS Z 8504／厚生労働省資料をもとに作成。数値は暑さ指数（WBGT）の基準値の目安。
        </p>
        <p className={cls.body}>
          たとえば重い荷物を運ぶ作業（区分3）は、順化者でもWBGT25で基準値。
          現場のWBGTが28なら「3℃超過＝45分以上の休憩」が目安、というように読み解きます。
        </p>

        <h2 className={cls.h2}>2025年6月の義務化と作業時間の関係</h2>
        <p className={cls.body}>
          2025年6月1日、改正労働安全衛生規則が施行され、職場の熱中症対策が
          <strong>罰則付きで義務化</strong>
          されました。対象は、
          <Mark>WBGT28℃以上または気温31℃以上</Mark>
          の環境で、
          <Mark>連続1時間以上または1日4時間を超えて</Mark>
          行われることが見込まれる作業です。
        </p>
        <p className={cls.body}>
          事業者には、①早期発見の体制整備、②重篤化を防ぐ手順の作成、③関係者への周知が義務付けられ、違反時は
          <strong>6か月以下の拘禁刑または50万円以下の罰金</strong>
          の対象となり得ます。作業時間そのものの上限が一律で定められたわけではありませんが、WBGTに応じた休憩と作業時間の管理が、実務上ほぼ必須になっています。
        </p>
        <MedicalAlert>
          義務の適用や具体的な対応は、事業場の状況によって異なります。
          所轄の労働基準監督署・社内の安全衛生担当・産業医にご確認のうえ、厚生労働省のガイドライン・リーフレットもあわせてご参照ください。
        </MedicalAlert>

        <h2 className={cls.h2}>
          対策①環境を冷やす｜スポットクーラー・工場扇・ミスト
        </h2>
        <p className={cls.body}>
          WBGTそのものを下げれば、同じ作業でも安全に確保できる時間が延びます。
          <strong>スポットクーラー</strong>
          で局所的に気温を下げ、
          <strong>工場扇</strong>
          で風を送って汗の気化を促し、
          <strong>ミストファン</strong>
          で気化熱を使って涼をとります。
        </p>

        <h3 className={cls.h3}>スポットクーラー・スポットエアコン</h3>
        <CardGrid>
          {COOLER.map((p, i) => (
            <ProductCard key={i} {...p} badge="冷風" />
          ))}
        </CardGrid>
        <CtaBar href={CTA_SPOT} label="スポットクーラー 一覧 →" />

        <h3 className={cls.h3}>工場扇・大型扇風機</h3>
        <CardGrid>
          {FAN.map((p, i) => (
            <ProductCard key={i} {...p} badge="送風" />
          ))}
        </CardGrid>
        <CtaBar href={CTA_KOUJOSEN} label="工場扇 一覧 →" />

        <h3 className={cls.h3}>ミストファン</h3>
        <CardGrid>
          {MIST.map((p, i) => (
            <ProductCard key={i} {...p} badge="ミスト" />
          ))}
        </CardGrid>
        <InfoNote>
          ミストは湿度を上げるため、換気の悪い屋内では使いすぎに注意。
          屋外や風通しのよい場所、または細かい超音波式が扱いやすいです。
        </InfoNote>

        <h2 className={cls.h2}>対策②身体を冷やす｜空調服・冷却ベスト</h2>
        <p className={cls.body}>
          屋外や環境冷却が難しい場所では、身につける冷却が主戦力です。
          <strong>空調ファン式</strong>
          で服内に風を通し、
          <strong>保冷剤式・注水式・冷蔵式のベスト</strong>
          で体幹や首元を直接冷やします。環境冷却と組み合わせると効果的です。
        </p>
        <CardGrid>
          {VEST.map((p, i) => (
            <ProductCard key={i} {...p} badge="身体冷却" />
          ))}
        </CardGrid>
        <CtaBar href={CTA_VEST} label="冷却ベスト 一覧 →" />
        <CtaBar href={CTA_KUCHOFUKU} label="空調服 一覧 →" />
        <CtaBar
          href={CTA_INNER}
          label="熱中症対策インナー 一覧 →"
          sub="肌に直接、汗冷え・涼感インナー"
        />

        <h2 className={cls.h2}>
          対策③休憩環境を整える｜冷温庫・テント・すだれ
        </h2>
        <p className={cls.body}>
          休憩の質は、体温の回復スピードを左右します。
          <strong>クールテントやすだれ</strong>
          で日射を遮った休憩スペースをつくり、
          <strong>冷温庫・保冷ボックス</strong>
          で冷たい飲料や保冷剤を用意しておくと、休憩時間を有効に使えます。
        </p>

        <h3 className={cls.h3}>冷温庫・保冷ボックス</h3>
        <CardGrid>
          {FRIDGE.map((p, i) => (
            <ProductCard key={i} {...p} badge="保冷" />
          ))}
        </CardGrid>

        <h3 className={cls.h3}>テント・すだれ（日射を遮る）</h3>
        <CardGrid>
          {SHADE.map((p, i) => (
            <ProductCard key={i} {...p} badge="日除け" />
          ))}
        </CardGrid>

        <h2 className={cls.h2}>作業時間を守るための運用ポイント</h2>
        <ul className={cls.list}>
          <li>作業前・作業中にWBGTを実測し、超過度合いから休憩時間を決める。</li>
          <li>暑い時間帯（正午前後）を避け、早朝・夕方に作業を組み替える。</li>
          <li>作業を複数人で分担し、連続作業時間を短くする。</li>
          <li>シーズン初め・休み明けは作業量を抑え、順化を進める。</li>
          <li>こまめな水分・塩分補給を習慣化し、声かけ・体調確認を行う。</li>
          <li>環境冷却と身体冷却を組み合わせ、WBGTと体感の両方を下げる。</li>
        </ul>
        <MedicalAlert>
          冷却機器を使っていても、休憩を削ってよいわけではありません。
          「大丈夫」という本人の申告だけで作業を継続させず、体調不良者は一人にせず、必要に応じて医療機関へ搬送してください。
        </MedicalAlert>

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

        <h2 className={cls.h2}>まとめ</h2>
        <ConclusionBox title="WBGTと作業時間の目安・要点まとめ">
          <ul className="list-disc space-y-1 pl-5">
            <li>
              休憩の目安は
              <Mark>1℃超過15分／2℃超過30分／3℃超過45分／それ以上は中止</Mark>
              （順化者・1時間あたり）。
            </li>
            <li>
              WBGT基準値は<strong>作業強度で変わる</strong>
              （重作業ほど低いWBGTで対策）。
            </li>
            <li>
              <strong>非順化者はより慎重に</strong>。シーズン初めは特に注意。
            </li>
            <li>
              作業時間の確保には
              <strong>環境冷却＋身体冷却＋休憩環境</strong>
              の3点セット。
            </li>
            <li>
              2025年6月から<strong>罰則付きで義務化</strong>
              。WBGT実測と休憩管理を。
            </li>
          </ul>
        </ConclusionBox>

        <FinalCta />

        <Script
          id="ld-article"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline:
                "WBGTと作業時間の目安｜暑さ指数別の休憩時間早見表と現場の熱中症対策【2026年版】",
              datePublished: "2026-07-31",
              dateModified: "2026-07-31",
              author: {
                "@type": "Organization",
                name: "作業用品ナビ編集部",
              },
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
                  "https://www.sagyou-navi.com/articles/wbgt-work-rest-time-guideline",
              },
              image:
                "https://www.sagyou-navi.com/articles/wbgt-work-time/hero.jpg",
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
                  name: "WBGTと作業時間の目安",
                  item: "https://www.sagyou-navi.com/articles/wbgt-work-rest-time-guideline",
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
