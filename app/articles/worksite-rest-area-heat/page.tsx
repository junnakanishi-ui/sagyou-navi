import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";

const SLUG = "worksite-rest-area-heat";
const SITE_URL = "https://sagyou-navi.com";
const ARTICLE_IMG = "/images/articles";

export const metadata: Metadata = {
  title:
    "現場休憩所の暑さ対策｜屋外作業でそろえたい日よけ・工場扇・冷却用品｜作業用品ナビ",
  description:
    "現場休憩所の暑さ対策を、屋外作業向けに解説。日よけテント、工場扇、ポータブル電源、冷温庫、クーラーボックス、製氷機、アイススラリー、応急セットまで、建設現場・イベント・学校行事でそろえたい備品と運用ポイントを紹介します。",
  alternates: { canonical: `${SITE_URL}/articles/${SLUG}` },
  openGraph: {
    title:
      "現場休憩所の暑さ対策｜屋外作業でそろえたい日よけ・工場扇・冷却用品",
    description:
      "現場休憩所の暑さ対策を、屋外作業向けに解説。日よけテント、工場扇、ポータブル電源、冷温庫、クーラーボックス、製氷機、アイススラリー、応急セットまで紹介します。",
    type: "article",
    images: [`${ARTICLE_IMG}/worksite-rest-area-heat-prevention-hero.jpg`],
  },
};

const UTM = "utm_source=sagyou_navi";
const productImage = (id: string) => `/products/${id}.jpg`;

function buildUrl(url: string, utm: string = UTM): string {
  if (!url) return url;
  const hashIndex = url.indexOf("#");
  const append = (base: string) =>
    `${base}${base.includes("?") ? "&" : "?"}${utm}`;
  if (hashIndex === -1) return append(url);
  return `${append(url.slice(0, hashIndex))}${url.slice(hashIndex)}`;
}

const u = (url: string) => buildUrl(url);

const Y = (id: string, kind: "img" | "srch" = "img") =>
  kind === "img"
    ? `https://store.shopping.yahoo.co.jp/signcity-yshop/${id}.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=`
    : `https://store.shopping.yahoo.co.jp/signcity-yshop/${id}.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=`;

const URL_FAN_LIST =
  "https://store.shopping.yahoo.co.jp/signcity-yshop/search.html?p=%E5%B7%A5%E5%A0%B4%E6%89%87#CentSrchFilter1";
const URL_HEATSTROKE_ITEMS =
  "https://www.gc-select.com/pages/2026_prevent-heatstroke";

type Prod = {
  id: string;
  imgId?: string;
  name: string;
  use: string;
  url: string;
  btn?: string;
};

const FANS: Prod[] = [
  { id: "171964", name: "アクアシステム 無給油エアモーター式工場扇 スタンド大型（アルミハネ60cm）AFG-24NL", use: "広めの屋外休憩所・大型現場", url: Y("171964") },
  { id: "172321", name: "スイデン 工場扇 スタンド型 樹脂ハネ45cm 単相100V SF-45VS-1VP2", use: "標準的な仮設休憩所", url: Y("172321") },
  { id: "172314", name: "スイデン 工場扇 スタンドタイプMS 単相100V 樹脂ハネ45cm SF-45MS-1VP", use: "建設・工場・倉庫の休憩所", url: Y("172314") },
  { id: "171599", name: "TRUSCO 全閉式アルミハネ工場扇 ゼフィール スタンドタイプ TFZPA-45S", use: "現場休憩所・屋内外作業場", url: Y("171599") },
  { id: "171600", name: "TRUSCO 全閉式アルミハネ工場扇 ゼフィール トレー付キャスタータイプ TFZPA-45T", use: "移動や配置変更が多い現場", url: Y("171600") },
  { id: "203284", name: "TRUSCO 全閉式DCモーター工場扇 ジェネラルファン・ビッグ 105cm DF-105", use: "大型休憩所・広い作業場", url: Y("203284") },
  { id: "171595", name: "TRUSCO 全閉式アルミハネ工場扇 ゼフィール 卓上タイプ TFZPA-45A", use: "小規模休憩所・作業台周り", url: Y("171595") },
  { id: "203297", name: "TRUSCO 全閉式DCモーター工場扇 ジェネラルファン・ビッグ 60cm DF-60", use: "中〜大型の休憩所・作業場", url: Y("203297") },
  { id: "171601", name: "TRUSCO 全閉式アルミハネ工場扇 ゼフィール 壁掛けタイプ TFZPA-45W", use: "常設休憩所・壁面利用", url: Y("171601") },
  { id: "171594", name: "TRUSCO 全閉式アルミハネ工場扇 ゼフィール 本体 単相100V TFZPA-45", use: "設置形態を選んで使う本体", url: Y("171594") },
  { id: "172434", name: "TRUSCO 全閉式工場扇 ジェネラルファン 壁掛けタイプ アルミハネ ブラック TFBA-45W-BK", use: "常設休憩所・壁掛け（黒）", url: Y("172434") },
  { id: "171597", name: "TRUSCO 全閉式アルミハネ工場扇 ゼフィール ハンガータイプ（ブラック）TFZPA-45H-BK", use: "梁・フレームに吊るす常設向け", url: Y("171597") },
];

const POWER: Prod[] = [
  { id: "172196", name: "MEIHO ポータブルパワーステーション MPS1500", use: "中規模休憩所の電源補助", url: Y("172196", "srch") },
  { id: "172197", name: "MEIHO ポータブルパワーステーション MPS2000", use: "使用機器が多い現場", url: Y("172197", "srch") },
  { id: "172198", name: "MEIHO ポータブルパワーステーション MPS3000", use: "大容量を検討したい現場", url: Y("172198", "srch") },
];

const POWER_COMPARE: Prod[] = [
  { id: "172101", name: "IRIS 充電式ポータブル冷温庫 26L ホワイト IPDW-B3A-W", use: "飲料・保冷剤の冷温管理", url: Y("172101", "srch") },
  { id: "224302", name: "TRUSCO ポータブルトランス 30A 3kVA 降圧・昇圧兼用型 TPT-30BD", use: "電圧変換が必要な作業環境", url: Y("224302", "srch") },
  { id: "kps-0202", imgId: "kps-0202", name: "ポータブル電源 蓄電丸（リン酸鉄リチウム・防水防塵）", use: "防災・イベント用の予備電源", url: "https://item.rakuten.co.jp/crecote-shop/kps-0202/", btn: "楽天市場で見る" },
];

const TENTS: Prod[] = [
  { id: "172282", name: "KOK らくらくテント W3.55×D2.67×H2.80 天幕色 緑 RT-1.5X2-GN", use: "少人数の休憩所", url: Y("172282") },
  { id: "172284", name: "KOK らくらくテント W3.55×D2.67×H2.80 天幕色 白 RT-1.5X2-W", use: "少人数の休憩所（白）", url: Y("172284") },
  { id: "172286", name: "KOK らくらくテント W5.31×D3.55×H3.07 天幕色 青 RT-2X3-B", use: "標準的な現場休憩所", url: Y("172286") },
  { id: "172289", name: "KOK らくらくテント W5.31×D3.55×H3.07 天幕色 白 RT-2X3-W", use: "標準的な現場休憩所（白）", url: Y("172289") },
  { id: "172291", name: "KOK らくらくテント W7.07×D3.55×H3.07 天幕色 青 RT-2X4-B", use: "大人数・イベント会場", url: Y("172291") },
  { id: "172295", name: "KOK らくらくテント W7.07×D3.55×H3.07 天幕色 黄 RT-2X4-Y", use: "大人数・視認性重視（黄）", url: Y("172295") },
  { id: "172294", name: "KOK らくらくテント W7.07×D3.55×H3.07 天幕色 白 RT-2X4-W", use: "大人数・イベント会場（白）", url: Y("172294") },
];

const COOLERS: Prod[] = [
  { id: "203240", name: "PELICAN 50QT エリートクーラー グレー×グリーン 50Q-1-DKGRYEGRN", use: "大容量・堅牢なクーラーボックス", url: Y("203240") },
  { id: "203244", name: "SANKA ベリアスクーラー 17L ホワイト／グリーン VAC-17WH/GR", use: "中容量のクーラーボックス", url: Y("203244") },
  { id: "203247", name: "SANKA ベリアスクーラー 9L ホワイト／イエロー VAC-9WH/YE", use: "小容量・持ち運びやすい", url: Y("203247") },
  { id: "1179040110", name: "高速製氷機", use: "氷の補充が多い現場", url: "https://www.gc-select.com/products/1179040110", btn: "GREEN CROSS-selectで見る" },
  { id: "1179040193", name: "透き通った氷がつくれる高速製氷機「クリアアイスゴロン」", use: "透明な氷を作りたい用途", url: "https://www.gc-select.com/products/1179040193", btn: "GREEN CROSS-selectで見る" },
  { id: "6300092902", name: "高速製氷機（暑さ対策・アウトドア）", use: "屋外・イベントでの氷準備", url: "https://www.gc-select.com/products/6300092902", btn: "GREEN CROSS-selectで見る" },
  { id: "6300051841", name: "小型高速製氷機 家庭用 最短6分 コンパクト ブラック", use: "小規模休憩所・コンパクト設置", url: "https://www.gc-select.com/products/6300051841", btn: "GREEN CROSS-selectで見る" },
  { id: "6300051842", name: "小型高速製氷機 家庭用 最短6分 コンパクト シルバー", use: "小規模休憩所・コンパクト設置（銀）", url: "https://www.gc-select.com/products/6300051842", btn: "GREEN CROSS-selectで見る" },
  { id: "1179040221", name: "ICEPORT（製氷機付き冷蔵冷凍庫）", use: "冷蔵冷凍＋製氷をまとめたい現場", url: "https://www.gc-select.com/products/1179040221", btn: "GREEN CROSS-selectで見る" },
  { id: "1179040210", name: "アイススラリーメーカーセット", use: "休憩時の体内冷却の補助", url: "https://www.gc-select.com/products/1179040210", btn: "GREEN CROSS-selectで見る" },
];

const EMERGENCY: Prod[] = [
  { id: "1179038030", name: "熱中症応急アイテム（万が一の備え）※商品名・URL要確認", use: "体調不良時の初期対応備品", url: "https://www.gc-select.com/products/1179038030", btn: "GREEN CROSS-selectで見る" },
  { id: "1179070000", name: "熱中症対策キット 6点セット", use: "休憩所に備える応急セット", url: "https://www.gc-select.com/products/1179070000", btn: "GREEN CROSS-selectで見る" },
  { id: "1179071000", name: "熱中症応急セット 10点セット", use: "休憩所に備える応急セット", url: "https://www.gc-select.com/products/1179071000", btn: "GREEN CROSS-selectで見る" },
];

const PURPOSE_TABLE = [
  { goal: "日差しを避ける", cat: "らくらくテント・遮熱シート", role: "直射日光を避ける場所を作る", link: "らくらくテント（遮熱シートは補足）" },
  { goal: "空気を動かす", cat: "工場扇", role: "休憩所の空気を循環させる", link: "工場扇一覧" },
  { goal: "電源を確保する", cat: "ポータブルパワーステーション", role: "工場扇・冷温庫・照明などの電源補助", link: "MEIHO MPSシリーズ" },
  { goal: "冷たい飲料を保管する", cat: "クーラーボックス・冷温庫", role: "飲料・保冷剤を保管", link: "クーラーボックス、冷温庫" },
  { goal: "氷を準備する", cat: "高速製氷機・製氷機付き冷蔵冷凍庫", role: "氷・冷却用品を準備", link: "高速製氷機、ICEPORT" },
  { goal: "体を冷やす", cat: "アイススラリー・冷却用品", role: "休憩時の冷却補助", link: "アイススラリーメーカー" },
  { goal: "万が一に備える", cat: "応急セット", role: "体調不良時の初期対応備品", link: "熱中症応急セット" },
];

const SITE_TABLE = [
  { site: "建設現場", issue: "日差し、照り返し、電源不足", items: "テント、工場扇、ポータブル電源、クーラーボックス" },
  { site: "土木・道路工事", issue: "移動が多い、仮設休憩所", items: "テント、遮熱シート、冷温庫、応急セット" },
  { site: "イベント会場", issue: "スタッフ数が多い、来場者対応", items: "大型テント、工場扇、製氷機、アイススラリー" },
  { site: "学校行事", issue: "子ども・教職員・保護者対応", items: "テント、クーラーボックス、応急セット、冷却用品" },
  { site: "屋外倉庫・ヤード", issue: "荷捌き場が暑い", items: "工場扇、遮熱シート、冷温庫、ポータブル電源" },
];

const FAIL_TABLE = [
  { fail: "テントだけで十分と思う", problem: "テント内に熱がこもる", fix: "工場扇や風通しも考える" },
  { fail: "工場扇を置くが電源を考えていない", problem: "使いたい場所で動かせない", fix: "ポータブル電源や配線計画を確認" },
  { fail: "飲料だけ置いて氷・保冷剤がない", problem: "ぬるくなり補給しにくい", fix: "クーラーボックスや冷温庫を用意" },
  { fail: "休憩所が作業場所から遠い", problem: "休憩が後回しになる", fix: "作業動線上に設置する" },
  { fail: "誰が補充するか決めていない", problem: "水・氷・冷却用品が不足する", fix: "補充担当と頻度を決める" },
  { fail: "応急セットの場所がわからない", problem: "初期対応が遅れる", fix: "目立つ場所に設置し周知する" },
  { fail: "WBGTを確認していない", problem: "休憩判断が感覚頼りになる", fix: "暑さ指数や現場計測を確認する" },
];

const CHECKLIST = [
  { item: "設置場所", detail: "作業場所から近く、日陰を確保できるか" },
  { item: "日よけ", detail: "テント・遮熱シートを用意したか" },
  { item: "送風", detail: "工場扇の種類・台数・風向きを決めたか" },
  { item: "電源", detail: "電源の有無、延長コード、ポータブル電源を確認したか" },
  { item: "冷却用品", detail: "クーラーボックス、冷温庫、製氷機を確認したか" },
  { item: "飲料・塩分", detail: "水分・塩分補給の導線を整えたか" },
  { item: "応急対応", detail: "応急セット・連絡先・搬送先を周知したか" },
  { item: "補充担当", detail: "飲料・氷・冷却材の補充担当を決めたか" },
  { item: "WBGT確認", detail: "暑さ指数や現場計測を確認しているか" },
  { item: "点検頻度", detail: "朝・昼・午後・作業後の確認ルールがあるか" },
];

const FAQ_ITEMS = [
  {
    q: "現場休憩所の暑さ対策で最初にそろえるものは何ですか？",
    a: "まずは、日よけ、風を通すための工場扇、冷たい飲料や保冷剤を保管するクーラーボックス、体調不良時に備える応急セットを検討しましょう。あわせて、WBGT確認、休憩ルール、水分・塩分補給、報告体制も整えることが重要です。",
  },
  {
    q: "工場扇は休憩所に必要ですか？",
    a: "休憩所内に熱がこもりやすい場合や、テント下の空気を動かしたい場合は工場扇が候補になります。ただし、風向き、転倒防止、電源容量、雨風の影響を確認して設置してください。",
  },
  {
    q: "屋外休憩所でポータブル電源は必要ですか？",
    a: "近くに電源がない現場で、工場扇、冷温庫、照明、充電機器を使いたい場合はポータブル電源が役立つ場合があります。使用する機器の消費電力と使用時間を確認して選びましょう。",
  },
  {
    q: "テントだけで暑さ対策になりますか？",
    a: "テントは直射日光を避ける対策の一つですが、風通しが悪いと内部に熱がこもることがあります。工場扇、遮熱シート、冷たい飲料、休憩ルールと組み合わせて運用しましょう。",
  },
  {
    q: "クーラーボックスと冷温庫はどう使い分けますか？",
    a: "電源がない現場ではクーラーボックス、電源が確保できる休憩所では冷温庫が候補になります。人数、休憩回数、飲料や保冷剤の量、補充体制に合わせて選びます。",
  },
  {
    q: "熱中症応急セットは休憩所に必要ですか？",
    a: "体調不良時の初期対応に備える用品として、熱中症応急セットを休憩所に置くことは検討できます。ただし、応急セットだけでなく、報告先、連絡手順、医療機関への相談・搬送判断もあわせて周知しましょう。",
  },
];

const RELATED = [
  {
    href: "/articles/outdoor-work-heatstroke-measures",
    label: "外仕事の熱中症対策｜現場・イベント・屋外倉庫で使える暑さ対策グッズと実務チェックリスト",
  },
  {
    href: "/articles/warehouse-heatstroke-taisaku",
    label: "倉庫作業の熱中症対策｜工場扇・スポットクーラー・冷却ベストで現場を守る方法",
  },
  {
    href: "/articles/helmet-heatstroke-risk",
    label: "ヘルメット着用と熱中症リスク｜現場でできる対策と注意点",
  },
];

function CTA({ href, children }: { href: string; children: ReactNode }) {
  return (
    <div className="my-6">
      <a
        href={u(href)}
        target="_blank"
        rel="nofollow noopener noreferrer"
        className="block w-full rounded-lg bg-gray-900 px-6 py-4 text-center font-bold text-white transition-colors hover:bg-gray-700"
      >
        {children}
      </a>
    </div>
  );
}

function FinalCTA({ href, children }: { href: string; children: ReactNode }) {
  return (
    <div className="my-6">
      <a
        href={u(href)}
        target="_blank"
        rel="nofollow noopener noreferrer"
        className="block w-full rounded-lg bg-gray-900 px-6 py-6 text-center text-lg font-bold text-white shadow-lg transition-colors hover:bg-gray-700"
      >
        {children}
      </a>
    </div>
  );
}

function Caution({ children }: { children: ReactNode }) {
  return (
    <div className="my-6 rounded-lg border border-red-300 bg-red-50 p-5 text-red-900">
      <p className="mb-1 font-semibold">⚠️ ご確認ください</p>
      {children}
    </div>
  );
}

function ProductCard({ item }: { item: Prod }) {
  const imgId = item.imgId ?? item.id;
  return (
    <a
      href={u(item.url)}
      target="_blank"
      rel="nofollow noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-xl border-2 border-gray-200 bg-white shadow-sm transition hover:border-gray-400 hover:shadow-lg"
    >
      <div className="aspect-square w-full overflow-hidden bg-gray-50">
        <img
          src={productImage(imgId)}
          alt={item.name}
          loading="lazy"
          className="h-full w-full object-contain p-3 transition group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <p className="text-sm font-bold leading-snug text-gray-900">{item.name}</p>
        <p className="mt-2 flex-1 text-xs leading-relaxed text-gray-600">{item.use}</p>
        <span className="mt-3 inline-block rounded-lg bg-gray-900 px-4 py-2 text-center text-sm font-bold text-white">
          {item.btn ?? "商品ページを見る"}
        </span>
      </div>
    </a>
  );
}

function ProductGrid({ items }: { items: Prod[] }) {
  return (
    <div className="my-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
      {items.map((item) => (
        <ProductCard key={`${item.id}-${item.name}`} item={item} />
      ))}
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
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="my-6 w-full rounded-lg"
    />
  );
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function Page() {
  return (
    <>
      <SiteHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main className="mx-auto max-w-4xl px-4 py-10">
        <nav className="mb-4 text-sm text-gray-500">
          <Link href="/" className="hover:underline">
            ホーム
          </Link>
          <span className="mx-1">/</span>
          <span>選び方ガイド</span>
          <span className="mx-1">/</span>
          <span className="text-gray-700">現場休憩所の暑さ対策</span>
        </nav>

        <span className="mb-3 inline-block rounded bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-800">
          選び方ガイド
        </span>

        <h1 className={cls.h1}>
          現場休憩所の暑さ対策｜屋外作業でそろえたい日よけ・工場扇・冷却用品
        </h1>

        <p className="mb-6 text-sm text-gray-500">
          公開日：2026年7月6日／約14分で読めます
        </p>

        <div className="my-6 rounded-lg border border-gray-300 bg-gray-50 p-5 leading-relaxed">
          <p className={cls.body}>
            現場休憩所の暑さ対策では、まず「日差しを避ける」「風を通す」「体を冷やす」「水分・塩分補給をしやすくする」「体調不良時にすぐ対応できる」の5つを整えることが重要です。屋外作業の休憩所では、テントや遮熱シートで日よけを作り、工場扇で空気を動かし、クーラーボックス・冷温庫・製氷機・アイススラリーなどで冷たい飲料や冷却材を準備します。電源が取りにくい現場では、ポータブルパワーステーションも候補になります。ただし、休憩所や用品だけで熱中症を防げるわけではありません。WBGT確認、こまめな休憩、水分・塩分補給、作業時間の調整、体調不良時の報告体制とあわせて運用しましょう。
          </p>
        </div>

        <ArticleImg
          src={`${ARTICLE_IMG}/worksite-rest-area-heat-prevention-hero.jpg`}
          alt="屋外作業現場の休憩所でテントや工場扇を使う暑さ対策イメージ"
        />

        <CTA href={URL_HEATSTROKE_ITEMS}>
          現場休憩所の暑さ対策に必要な日よけ・送風・冷却用品をまとめて確認する
        </CTA>

        <H2>現場休憩所の暑さ対策は「日よけ・送風・冷却・補給・応急対応」で考える</H2>
        <H3>日差しを避ける場所を作る</H3>
        <p className={cls.body}>
          まずは直射日光を避けられる場所を作ります。テントや遮熱シートで日よけを確保し、照り返しの少ない場所を選ぶことが基本です。
        </p>
        <H3>風を通して熱がこもりにくい環境にする</H3>
        <p className={cls.body}>
          日よけだけでは内部に熱がこもることがあります。工場扇で空気を動かし、熱がこもりにくい環境を作ります。
        </p>
        <H3>冷たい飲料・氷・冷却用品を保管する</H3>
        <p className={cls.body}>
          クーラーボックス・冷温庫・製氷機・アイススラリーなどで、冷たい飲料や冷却材を準備しておきます。
        </p>
        <H3>体調不良時にすぐ対応できる備えを置く</H3>
        <p className={cls.body}>
          休憩所は、体調不良時の初期対応拠点にもなります。応急セットや連絡先を分かりやすい場所にまとめておきます。
        </p>
        <H3>WBGT確認と休憩ルールもセットで運用する</H3>
        <p className={cls.body}>
          用品をそろえるだけでなく、WBGT（暑さ指数）の確認や休憩ルールもセットで運用します。WBGTは気温だけでなく、湿度・日射・輻射などを取り入れた指標です。指標の詳細は環境省などの公的情報もご確認ください。
        </p>

        <Caution>
          <p className={cls.bodySm}>
            休憩所や用品は、熱中症対策の一つです。設置すれば熱中症を防げるわけではありません。WBGT確認、こまめな休憩、水分・塩分補給、作業時間の調整、体調不良時の報告体制とあわせて運用してください。職場の熱中症対策では、報告体制や対応手順をあらかじめ定め、関係作業者へ周知することが求められる場合があります。最新の要件は厚生労働省などの公的情報を必ずご確認ください。
          </p>
        </Caution>

        <H2>休憩所づくりで最初に確認したい5つの条件</H2>
        <H3>1. 休憩所の設置場所｜作業場所から近く、日差しを避けやすいか</H3>
        <p className={cls.body}>
          休憩所が作業場所から遠いと、休憩が後回しになりがちです。作業動線上で、日差しを避けやすい場所を選びます。
        </p>
        <H3>2. 電源の有無｜工場扇・冷温庫・製氷機を使えるか</H3>
        <p className={cls.body}>
          工場扇・冷温庫・製氷機などを使うには電源が必要です。電源が取りにくい場合は、ポータブル電源も検討します。
        </p>
        <H3>3. 人数｜何人が同時に休むか</H3>
        <p className={cls.body}>
          同時に休む人数によって、テントのサイズやクーラーボックスの容量、工場扇の台数が変わります。
        </p>
        <H3>4. 補充体制｜飲料・氷・保冷剤を誰が補充するか</H3>
        <p className={cls.body}>
          飲料・氷・保冷剤は消耗します。誰が・どのくらいの頻度で補充するかを決めておきます。
        </p>
        <H3>5. 緊急時対応｜応急セット・連絡先・搬送導線があるか</H3>
        <p className={cls.body}>
          体調不良時に備え、応急セット・連絡先・搬送導線をあらかじめ整えておきます。
        </p>

        <H2>現場休憩所に必要な暑さ対策用品リスト</H2>
        <div className="my-4 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border border-gray-200 px-3 py-2">目的</th>
                <th className="border border-gray-200 px-3 py-2">用品カテゴリ</th>
                <th className="border border-gray-200 px-3 py-2">主な役割</th>
                <th className="border border-gray-200 px-3 py-2">商品導線</th>
              </tr>
            </thead>
            <tbody>
              {PURPOSE_TABLE.map((row) => (
                <tr key={row.goal} className="even:bg-gray-50">
                  <td className="border border-gray-200 px-3 py-2 font-semibold">{row.goal}</td>
                  <td className="border border-gray-200 px-3 py-2">{row.cat}</td>
                  <td className="border border-gray-200 px-3 py-2">{row.role}</td>
                  <td className="border border-gray-200 px-3 py-2">{row.link}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <H2>工場扇は休憩所のどこに置く？スタンド・据え置き・壁掛けの使い分け</H2>
        <ArticleImg
          src={`${ARTICLE_IMG}/industrial-fan-rest-area-placement.jpg`}
          alt="現場休憩所に工場扇を設置して空気を動かすイメージ"
        />
        <H3>スタンドタイプは仮設休憩所や屋外テント横に置きやすい</H3>
        <p className={cls.body}>
          スタンドタイプは、仮設休憩所や屋外テントの横に置きやすく、設置場所を変えやすいのが利点です。
        </p>
        <H3>据え置き・キャスタータイプは移動やレイアウト変更に便利</H3>
        <p className={cls.body}>
          キャスター付きは移動しやすく、レイアウト変更が多い現場に便利です。
        </p>
        <H3>壁掛け・天井付けタイプは常設休憩所に向く</H3>
        <p className={cls.body}>
          壁掛けやハンガータイプは、常設の休憩所で床面を占有せずに設置できます。
        </p>
        <H3>大型タイプは広い休憩所・倉庫・ヤード向け</H3>
        <p className={cls.body}>
          大型のDCモーター工場扇は、広い休憩所や倉庫、ヤードの送風に向いています。
        </p>
        <H3>工場扇は換気・風向き・転倒防止・電源容量も確認する</H3>
        <p className={cls.body}>
          設置時は、換気、風向き、転倒防止、電源容量、雨風の影響も確認してください。メーカーの注意事項や社内ルールに沿って使用しましょう。
        </p>

        <ProductGrid items={FANS} />
        <CTA href={URL_FAN_LIST}>
          休憩所の送風・空気循環には、工場扇一覧を確認する
        </CTA>

        <H2>電源がない休憩所ではポータブルパワーステーションを検討する</H2>
        <ArticleImg
          src={`${ARTICLE_IMG}/portable-power-station-rest-area-cooler.jpg`}
          alt="ポータブル電源と冷温庫を現場休憩所で使うイメージ"
        />
        <H3>工場扇・冷温庫・照明・充電機器の電源補助に使いやすい</H3>
        <p className={cls.body}>
          ポータブル電源は、工場扇・冷温庫・照明・充電機器などの電源補助に使いやすい機器です。
        </p>
        <H3>イベント会場・仮設現場・屋外ヤードでは電源計画が重要</H3>
        <p className={cls.body}>
          電源が取りにくいイベント会場・仮設現場・屋外ヤードでは、あらかじめ電源計画を立てておくと運用がスムーズです。
        </p>
        <H3>使用機器の消費電力と使用時間を確認する</H3>
        <p className={cls.body}>
          使用する機器の消費電力と使用時間を確認し、容量に余裕のあるモデルを選びます。
        </p>
        <H3>冷温庫・蓄電池・ポータブルトランスとの違いも整理する</H3>
        <p className={cls.body}>
          冷温庫、蓄電池、ポータブルトランスは役割が異なります。用途に合わせて組み合わせを検討してください。
        </p>

        <ProductGrid items={POWER} />
        <p className="mt-4 font-semibold text-gray-900">比較で確認したい関連機器</p>
        <ProductGrid items={POWER_COMPARE} />
        <CTA href={Y("172196", "srch")}>
          電源が取りにくい現場には、MEIHOポータブルパワーステーションを確認する
        </CTA>

        <H2>日よけを作るなら、らくらくテント・遮熱シートを組み合わせる</H2>
        <ArticleImg
          src={`${ARTICLE_IMG}/worksite-shade-tent-heat-protection.jpg`}
          alt="屋外現場にらくらくテントで日よけ休憩所を作るイメージ"
        />
        <H3>テントは休憩所の基本になる</H3>
        <p className={cls.body}>
          テントは、直射日光を避ける休憩所の基本になります。設置しやすいらくらくテントは、現場やイベントで使いやすい選択肢です。
        </p>
        <H3>人数・現場面積に合わせてサイズを選ぶ</H3>
        <p className={cls.body}>
          同時に休む人数や設置スペースに合わせて、サイズを選びます。少人数なら小さめ、大人数やイベントなら大きめが候補です。
        </p>
        <H3>天幕カラー・設置スペース・固定方法も確認する</H3>
        <p className={cls.body}>
          天幕カラー、設置スペース、固定方法（風対策）も確認しておきます。屋外では風の影響に注意してください。
        </p>
        <H3>照り返しや壁面熱には遮熱シートも候補になる</H3>
        <p className={cls.body}>
          照り返しや壁面からの熱が気になる場所では、アルミ遮熱シートや遮光・遮熱メッシュシートなどの遮熱シートを組み合わせるのも候補です（遮熱シートの品番・在庫は別途ご確認ください）。
        </p>

        <ProductGrid items={TENTS} />
        <CTA href={Y("172286")}>
          屋外休憩所の日よけには、人数に合わせてらくらくテントを確認する
        </CTA>

        <H2>冷たい飲料・氷・保冷剤をどう管理する？</H2>
        <ArticleImg
          src={`${ARTICLE_IMG}/cooler-box-ice-machine-rest-area-supplies.jpg`}
          alt="クーラーボックスや製氷機と冷却用品を準備するイメージ"
        />
        <H3>人数と休憩回数に合わせてクーラーボックス容量を選ぶ</H3>
        <p className={cls.body}>
          人数や休憩回数に合わせて、クーラーボックスの容量を選びます。飲料や保冷剤の量も考慮します。
        </p>
        <H3>冷温庫は電源がある休憩所で使いやすい</H3>
        <p className={cls.body}>
          冷温庫は、電源が確保できる休憩所で飲料や保冷剤の管理に使いやすい機器です。
        </p>
        <H3>製氷機は氷の補充が多い現場で候補になる</H3>
        <p className={cls.body}>
          氷の補充が多い現場では、高速製氷機や製氷機付き冷蔵冷凍庫（ICEPORT）も候補になります。
        </p>
        <H3>アイススラリーは休憩時の冷却用品として検討できる</H3>
        <p className={cls.body}>
          アイススラリーは、休憩時の体内冷却の補助として検討できます。用途に合わせて準備しましょう。
        </p>

        <ProductGrid items={COOLERS} />
        <CTA href={URL_HEATSTROKE_ITEMS}>
          飲料・氷・保冷剤の管理には、クーラーボックス・冷温庫・製氷機を確認する
        </CTA>

        <H2>万が一に備える熱中症応急セットも休憩所に置く</H2>
        <ArticleImg
          src={`${ARTICLE_IMG}/heatstroke-emergency-kit-outdoor-work.jpg`}
          alt="現場休憩所に熱中症応急セットを備えるイメージ"
        />
        <H3>休憩所は体調不良時の初期対応拠点にもなる</H3>
        <p className={cls.body}>
          休憩所は、体調不良時の初期対応拠点にもなります。冷却材や応急用品をまとめて備えておくと安心です。
        </p>
        <H3>冷却材・応急用品・連絡先をまとめておく</H3>
        <p className={cls.body}>
          冷却材・応急用品・連絡先を一か所にまとめ、誰でもすぐ使える状態にしておきます。
        </p>
        <H3>建設会社・イベント会社・学校行事でも導入しやすい</H3>
        <p className={cls.body}>
          こうした応急セットは、建設会社・イベント会社・学校などの法人・団体でも備えとして導入しやすいアイテムです。
        </p>
        <H3>誰が使うか、どこに置くか、いつ補充するかを決める</H3>
        <p className={cls.body}>
          誰が使うか、どこに置くか、いつ補充・点検するかを決めておくと、いざというときに使いやすくなります。
        </p>

        <ProductGrid items={EMERGENCY} />

        <Caution>
          <p className={cls.bodySm}>
            熱中症応急セットは、体調不良時の初期対応に備える用品の一つです。これで必ず安全になるわけではありません。応急セットの備えに加え、報告先、連絡手順、医療機関への相談・搬送判断もあわせて周知してください。緊急時は119番や医療機関への連絡を優先し、体調が疑わしい場合は無理をさせないことが重要です。
          </p>
        </Caution>

        <CTA href={URL_HEATSTROKE_ITEMS}>
          万が一の備えとして、熱中症応急セットも休憩所に配置する
        </CTA>

        <H2>現場別・休憩所の暑さ対策セット例</H2>
        <div className="my-4 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border border-gray-200 px-3 py-2">現場</th>
                <th className="border border-gray-200 px-3 py-2">課題</th>
                <th className="border border-gray-200 px-3 py-2">優先したい備品</th>
              </tr>
            </thead>
            <tbody>
              {SITE_TABLE.map((row) => (
                <tr key={row.site} className="even:bg-gray-50">
                  <td className="border border-gray-200 px-3 py-2 font-semibold">{row.site}</td>
                  <td className="border border-gray-200 px-3 py-2">{row.issue}</td>
                  <td className="border border-gray-200 px-3 py-2">{row.items}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <H2>よくある失敗</H2>
        <div className="my-4 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border border-gray-200 px-3 py-2">失敗</th>
                <th className="border border-gray-200 px-3 py-2">起こりやすい問題</th>
                <th className="border border-gray-200 px-3 py-2">対策</th>
              </tr>
            </thead>
            <tbody>
              {FAIL_TABLE.map((row) => (
                <tr key={row.fail} className="even:bg-gray-50">
                  <td className="border border-gray-200 px-3 py-2 font-semibold">{row.fail}</td>
                  <td className="border border-gray-200 px-3 py-2">{row.problem}</td>
                  <td className="border border-gray-200 px-3 py-2">{row.fix}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <H2>チェックリスト</H2>
        <div className="my-4 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border border-gray-200 px-3 py-2">チェック項目</th>
                <th className="border border-gray-200 px-3 py-2">確認内容</th>
              </tr>
            </thead>
            <tbody>
              {CHECKLIST.map((row) => (
                <tr key={row.item} className="even:bg-gray-50">
                  <td className="border border-gray-200 px-3 py-2 font-semibold">{row.item}</td>
                  <td className="border border-gray-200 px-3 py-2">{row.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <H2>よくある質問</H2>
        <div className="mt-4 space-y-6">
          {FAQ_ITEMS.map((item) => (
            <div key={item.q}>
              <p className={cls.faqQ}>Q. {item.q}</p>
              <p className={cls.body}>A. {item.a}</p>
            </div>
          ))}
        </div>

        <H2>関連記事</H2>
        <ul className={cls.list}>
          {RELATED.map((r) => (
            <li key={r.href}>
              <Link href={r.href} className="text-gray-900 underline hover:no-underline">
                {r.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-12 rounded-lg border border-gray-300 bg-gray-50 p-6">
          <h2 className={cls.ctaH3}>
            現場休憩所の暑さ対策用品を、まとめて確認しましょう
          </h2>
          <p className={cls.body}>
            日よけ・送風・冷却・補給・応急対応は、それぞれが対策の一つです。WBGT確認・休憩・水分塩分補給・作業時間管理・体調不良時の報告体制とあわせて、現場に合わせて休憩所を整えてください。
          </p>
          <FinalCTA href={URL_HEATSTROKE_ITEMS}>
            現場休憩所の暑さ対策用品をまとめて確認するなら、熱中症対策アイテム一覧へ
          </FinalCTA>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
