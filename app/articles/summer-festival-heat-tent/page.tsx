import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";

// ============================================================================
// 作業用品ナビ 記事コンポーネント
// 狙いキーワード: 夏祭り 暑さ対策 テント
// ハウスルール: max-w-4xl / gray-900 / utm_source=sagyou_navi / 自己完結(共有libなし)
// 送客先(自社): Yahoo!店 サインシティ(signcity-yshop) / GREEN CROSS-select
// ----------------------------------------------------------------------------
// 【画像について】
//  ・商品サムネ … 保存済み {商品コード}.jpg を /products/ に配置。
//  ・アイキャッチ/イメージ画像 … /images/tent/eyecatch.webp・anchor.webp
// ============================================================================

const SLUG = "summer-festival-heat-tent";
const SITE_URL = "https://www.sagyou-navi.com";

export const metadata: Metadata = {
  title:
    "夏祭りの暑さ対策テントの選び方｜用途・サイズ別のおすすめと会場を涼しくするコツ",
  description:
    "夏祭り・地域イベントの暑さ対策の要となるテント（日除け）の選び方を、用途・サイズ別の比較表つきで解説。受付・屋台・休憩所・救護所に合うサイズの選び方、遮熱・風対策のポイント、さらに送風機・スポットクーラー・冷却ベスト・冷感グッズ・WBGT計まで、会場全体の熱中症対策を網羅しました。",
  alternates: { canonical: `${SITE_URL}/articles/${SLUG}` },
  openGraph: {
    title:
      "夏祭りの暑さ対策テントの選び方｜用途・サイズ別のおすすめと会場を涼しくするコツ",
    description:
      "夏祭り・地域イベントの暑さ対策テントの選び方を用途・サイズ別比較表つきで解説。送風機・スポットクーラー・冷却ベスト・WBGT計まで会場全体の熱中症対策を網羅。",
    type: "article",
    images: ["/images/tent/eyecatch.webp"],
  },
};

const UTM = "utm_source=sagyou_navi";
const IMG_BASE = "/images/tent/";
const PRODUCT_IMG = "/products/";

function withUtm(url: string): string {
  const sep = url.includes("?") ? "&" : "?";
  return url + sep + UTM; // Yahoo商品URLは末尾 &ea= のため &ea=&utm_source= の順で付与
}
function imgUrl(code: string): string {
  return PRODUCT_IMG + code + ".jpg";
}

type Cat = "T1" | "T2" | "TO" | "F" | "C" | "V" | "G" | "M" | "E";
type Store = "yahoo" | "gcselect";
type Product = { code: string; name: string; url: string; cat: Cat; tag: string; store: Store };

const PRODUCTS: Product[] = [
  { code: "289961", name: "超音波式ミストファンPRO MF-22", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/289961.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=", cat: "F", tag: "送風/ミスト", store: "yahoo" },
  { code: "289984", name: "SHOWA ミスト扇風機 ミストファンTN N26-108", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/289984.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=", cat: "F", tag: "送風/ミスト", store: "yahoo" },
  { code: "289883", name: "パーソナルクーリングボックス ど冷えもんBOX＋ジャクリポータブル電源セット DHEBOXJE3000BSET", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/289883.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=", cat: "C", tag: "冷却BOX/電源", store: "yahoo" },
  { code: "171959", name: "アクアシステム エア駆動式 工場扇ミストファン ACM-A", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/171959.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=", cat: "F", tag: "送風/ミスト", store: "yahoo" },
  { code: "172530", name: "シゲマツ 個人用冷却器 クーレット VTW-7K2T", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/172530.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=", cat: "V", tag: "冷却ベスト", store: "yahoo" },
  { code: "203270", name: "Suiden クーラーテント2.4m×2.4m SS-TNT-2424-C", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/203270.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=", cat: "T1", tag: "遮熱テント", store: "yahoo" },
  { code: "171964", name: "アクアシステム 無給油エアモーター式扇 スタンド大型 （アルミハネ60cm） AFG-24NL", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/171964.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=", cat: "F", tag: "送風/ミスト", store: "yahoo" },
  { code: "172321", name: "スイデン 扇（大型扇風機）スタンド型 樹脂ハネ45cm 単相100V SF-45VS-1VP2", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/172321.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=", cat: "F", tag: "送風/ミスト", store: "yahoo" },
  { code: "203171", name: "BURTLE 冷却ベスト アイスクラフト IC101S-35-XL ブラック", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/203171.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=", cat: "V", tag: "冷却ベスト", store: "yahoo" },
  { code: "172456", name: "保冷剤 760g THZ-760", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/172456.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=", cat: "G", tag: "冷感/給水", store: "yahoo" },
  { code: "290117", name: "長時間アルミパック 保冷剤用 クールベスト 単品 フリーサイズ TCV-BK", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/290117.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=", cat: "V", tag: "冷却ベスト", store: "yahoo" },
  { code: "172314", name: "スイデン 扇 スタンドタイプMS 単相100V 樹脂ハネ45cm SF-45MS-1VP", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/172314.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=", cat: "F", tag: "送風/ミスト", store: "yahoo" },
  { code: "172467", name: "スリーライク 注水式ベストBODYCOOL SMART-X（S） TL-WICB-BCS/BK-S", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/172467.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=", cat: "V", tag: "冷却ベスト", store: "yahoo" },
  { code: "203284", name: "全閉式DCモーター扇 ジェネラルファン・ビッグ 105cm DF-105", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/203284.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=", cat: "F", tag: "送風/ミスト", store: "yahoo" },
  { code: "289917", name: "KOK HEXEASY 熱中症クールテント 3×3M HEX-C-33", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/289917.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=", cat: "T1", tag: "遮熱テント", store: "yahoo" },
  { code: "203298", name: "全閉式DCモーター扇 ジェネラルファン・ビッグ 75cm DF-75", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/203298.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=", cat: "F", tag: "送風/ミスト", store: "yahoo" },
  { code: "171600", name: "全閉式アルミハネ扇 ゼフィール トレー付キャスタータイプ TFZPA-45T", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/171600.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=", cat: "F", tag: "送風/ミスト", store: "yahoo" },
  { code: "171599", name: "全閉式アルミハネ扇 ゼフィール スタンドタイプ TFZPA-45S", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/171599.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=", cat: "F", tag: "送風/ミスト", store: "yahoo" },
  { code: "172197", name: "MEIHO ポータブルパワーステーション MPS2000", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/172197.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=", cat: "C", tag: "冷却BOX/電源", store: "yahoo" },
  { code: "172401", name: "スイデン クーラーテント1.8m×1.8m SS-TNT-1818-C", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/172401.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=", cat: "T1", tag: "遮熱テント", store: "yahoo" },
  { code: "172079", name: "キャタピラー サーキュレーター 壁掛け・床置きタイプ HVD-9AC", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/172079.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=", cat: "F", tag: "送風/ミスト", store: "yahoo" },
  { code: "171602", name: "全閉式アルミハネ扇 ゼフィール キューブタイプ TFZPA-45Z", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/171602.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=", cat: "F", tag: "送風/ミスト", store: "yahoo" },
  { code: "1120650012", name: "時計付黒球式熱中症計　O-706", url: "https://www.gc-select.com/products/1120650012", cat: "M", tag: "計測器", store: "gcselect" },
  { code: "1120650013", name: "黒球式熱中症指数計　ＴＴ－５６２Ｎ", url: "https://www.gc-select.com/products/1120650013", cat: "M", tag: "計測器", store: "gcselect" },
  { code: "1120650006", name: "黒球型携帯熱中症計　SK-181GT", url: "https://www.gc-select.com/products/1120650006", cat: "M", tag: "計測器", store: "gcselect" },
  { code: "1179041000", name: "熱中症注意標識（防雨型温湿度計付）", url: "https://www.gc-select.com/products/1179041000", cat: "M", tag: "計測器", store: "gcselect" },
  { code: "1179070000", name: "熱中症対策キット（6点セット）", url: "https://www.gc-select.com/products/1179070000", cat: "E", tag: "救護/応急", store: "gcselect" },
  { code: "1179030661", name: "O.R.Sタブレット レモン１２TB　L-12", url: "https://www.gc-select.com/products/1179030661", cat: "G", tag: "冷感/給水", store: "gcselect" },
  { code: "1179071000", name: "熱中症応急セット（10点セット）", url: "https://www.gc-select.com/products/1179071000", cat: "E", tag: "救護/応急", store: "gcselect" },
  { code: "1179030605", name: "熱中飴　タブレット　ミックスＢＯＸ", url: "https://www.gc-select.com/products/1179030605", cat: "G", tag: "冷感/給水", store: "gcselect" },
  { code: "1179030665", name: "O.R.Sタブレット レモン２４TB　L-24", url: "https://www.gc-select.com/products/1179030665", cat: "G", tag: "冷感/給水", store: "gcselect" },
  { code: "2105030900", name: "熱中症注意計コーン（防雨型温湿度計付）", url: "https://www.gc-select.com/products/2105030900", cat: "M", tag: "計測器", store: "gcselect" },
  { code: "1179041005", name: "スリム標識　ＳＬＭ－０２", url: "https://www.gc-select.com/products/1179041005", cat: "M", tag: "計測器", store: "gcselect" },
  { code: "1179038030", name: "エマージェンシープール　ＥＧＰ－１７５５５", url: "https://www.gc-select.com/products/1179038030", cat: "E", tag: "救護/応急", store: "gcselect" },
  { code: "6300004370", name: "日よけテント", url: "https://www.gc-select.com/products/6300004370", cat: "T2", tag: "ワンタッチテント", store: "gcselect" },
  { code: "6300004720", name: "テント用遮光ネット", url: "https://www.gc-select.com/products/6300004720", cat: "TO", tag: "テント用品", store: "gcselect" },
  { code: "1153010302", name: "簡単テント用横幕", url: "https://www.gc-select.com/products/1153010302", cat: "TO", tag: "テント用品", store: "gcselect" },
  { code: "6300004624", name: "ワンタッチイベントテント　スチール２４２４　グリーン", url: "https://www.gc-select.com/products/6300004624", cat: "T2", tag: "ワンタッチテント", store: "gcselect" },
  { code: "6300004626", name: "ワンタッチイベントテント　スチール２４２４　ブルー×ホワイト", url: "https://www.gc-select.com/products/6300004626", cat: "T2", tag: "ワンタッチテント", store: "gcselect" },
  { code: "6300004656", name: "ワンタッチイベントテント　スチール３０６０　ホワイト", url: "https://www.gc-select.com/products/6300004656", cat: "T2", tag: "ワンタッチテント", store: "gcselect" },
  { code: "6300004655", name: "ワンタッチイベントテント　スチール３０４５　ブラック", url: "https://www.gc-select.com/products/6300004655", cat: "T2", tag: "ワンタッチテント", store: "gcselect" },
  { code: "6300004652", name: "ワンタッチイベントテント　スチール３０４５　イエロー", url: "https://www.gc-select.com/products/6300004652", cat: "T2", tag: "ワンタッチテント", store: "gcselect" },
];
const byCat = (...cs: Cat[]) => PRODUCTS.filter((p) => cs.includes(p.cat));

// ---- 送客CTA（依頼リンク） -------------------------------------------------
const CTA = {
  tent:    { label: "テントの一覧を見る",             url: "https://store.shopping.yahoo.co.jp/signcity-yshop/search.html?aq=&oq=&X=3&view=grid&storeid=signcity-yshop&strcid=a5c8a5e9a5&prom=1&p=%E3%83%86%E3%83%B3%E3%83%88&sc_i=shopping-pc-web-category-storesg-h_srch-srchbtn-sgstfrom-category-storeitm-h_srch-srchbox" },
  vest:    { label: "空調服・冷却ベストの一覧を見る", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/b6f5c4b4c9.html?sc_i=shopping-pc-web-category-storeitm-cat_nrw-slctc" },
  cooler:  { label: "スポットクーラーの一覧を見る",   url: "https://store.shopping.yahoo.co.jp/signcity-yshop/a5b9a5dda5.html?sc_i=shopping-pc-web-category-storeitm-cat_nrw-slctc" },
  fan:     { label: "工場扇・冷風機の一覧を見る",     url: "https://store.shopping.yahoo.co.jp/signcity-yshop/b9a9beecc0.html?sc_i=shopping-pc-web-category-storeitm-cat_nrw-slctc" },
  cool:    { label: "冷感グッズの一覧を見る",         url: "https://store.shopping.yahoo.co.jp/signcity-yshop/cee4b4d6a5.html?sc_i=shopping-pc-web-category-storeitm-cat_nrw-slctc" },
  measure: { label: "計測器（WBGT）の一覧を見る",     url: "https://store.shopping.yahoo.co.jp/signcity-yshop/b7d7c2acb4.html?sc_i=shopping-pc-web-category-storeitm-cat_nrw-slctc" },
};

// ---- 部品（自己完結・gray-900） -------------------------------------------
function StoreBadge({ store }: { store: Store }) {
  const gc = store === "gcselect";
  return (
    <span className={"rounded px-1.5 py-0.5 text-[10px] font-bold " + (gc ? "bg-emerald-100 text-emerald-800" : "bg-red-100 text-red-700")}>
      {gc ? "GC-select" : "Yahoo!店"}
    </span>
  );
}
function ProductCard({ p }: { p: Product }) {
  return (
    <a href={withUtm(p.url)} target="_blank" rel="noopener noreferrer sponsored"
       className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition-all hover:border-gray-900 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-gray-900">
      <div className="relative aspect-square w-full overflow-hidden bg-gray-50">
        <img src={imgUrl(p.code)} alt={p.name} loading="lazy"
             className="h-full w-full object-contain p-2 transition-transform duration-200 group-hover:scale-105" />
        <span className="absolute left-1.5 top-1.5"><StoreBadge store={p.store} /></span>
        <span className="absolute right-1.5 top-1.5 rounded bg-gray-900/85 px-1.5 py-0.5 text-[10px] font-bold text-white">{p.tag}</span>
      </div>
      <div className="flex flex-1 flex-col p-3">
        <h4 className="line-clamp-3 text-[13px] font-bold leading-snug text-gray-900">{p.name}</h4>
        <span className="mt-3 inline-flex items-center justify-center gap-1 rounded-lg bg-gray-900 px-3 py-2.5 text-sm font-bold text-white transition-colors group-hover:bg-gray-700">
          価格・在庫を見る<span aria-hidden>→</span>
        </span>
      </div>
    </a>
  );
}
function Grid({ items }: { items: Product[] }) {
  return (
    <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {items.map((p) => (<ProductCard key={p.code} p={p} />))}
    </div>
  );
}
function PrimaryCta({ label, url }: { label: string; url: string }) {
  return (
    <a href={withUtm(url)} target="_blank" rel="noopener noreferrer sponsored"
       className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gray-900 px-6 py-4 text-base font-bold text-white shadow-sm transition-colors hover:bg-gray-700 sm:w-auto">
      {label}<span aria-hidden className="text-lg">→</span>
    </a>
  );
}
function SubCta({ label, url }: { label: string; url: string }) {
  return (
    <a href={withUtm(url)} target="_blank" rel="noopener noreferrer sponsored"
       className="inline-flex items-center justify-center gap-1 rounded-md border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 transition-colors hover:border-gray-900 hover:bg-gray-50">
      {label}<span aria-hidden>›</span>
    </a>
  );
}
function HeatSection({ id, title, items, cta, children }: { id: string; title: string; items: Product[]; cta: { label: string; url: string }; children: ReactNode }) {
  return (
    <div className="mt-8">
      <h3 id={id} className="scroll-mt-24 text-lg font-bold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-700 sm:text-base">{children}</p>
      <Grid items={items} />
      <div className="mt-4"><SubCta label={cta.label} url={cta.url} /></div>
    </div>
  );
}
function SectionH2({ id, children }: { id: string; children: ReactNode }) {
  return (<h2 id={id} className="mt-14 scroll-mt-24 border-l-4 border-gray-900 pl-3 text-xl font-bold text-gray-900 sm:text-2xl">{children}</h2>);
}

const FAQ = [
  { q: "夏祭りのテントはどのサイズを選べばいいですか？", a: "用途で選ぶのが基本です。受付や小さな屋台なら1.8〜2.4m角、模擬店や運営本部なら3.0×4.5m前後、来場者の休憩所や大型の模擬店なら3.0×6.0mクラスが目安です。日陰にしたい人数・机やイスの数から必要な広さを見積もり、余裕を持ったサイズを選びましょう。" },
  { q: "テントは何張り用意すればよいですか？", a: "『屋台・模擬店の数＋受付＋運営本部＋休憩所＋救護所』で数えると漏れがありません。特に来場者が休める日陰(休憩所)と、体調不良者を対応する救護所のテントは別に確保しておくと安心です。" },
  { q: "屋外イベントで一番注意すべき点は？", a: "風対策(固定)です。ワンタッチテントは風であおられると転倒・飛散して事故につながります。必ず重り(ウェイト)やペグ・ロープで四隅を固定し、強風時は無理に使用しないでください。屋台など火気の近くでは難燃性の生地を選ぶことも大切です。" },
  { q: "テントの中を涼しくするには？", a: "遮熱タイプのテントで直射日光を防いだうえで、工場扇やミストファンで風の流れをつくると体感温度を下げられます。運営本部や救護所には、電源を確保してスポットクーラーを併用すると効果的です。" },
  { q: "スタッフや来場者の暑さ対策には何が必要ですか？", a: "動き回るスタッフには空調服や冷却ベスト、来場者・スタッフ共通で冷感グッズや水分・塩分補給(経口補水・塩タブレット)を用意します。あわせてWBGT計で危険度を把握し、こまめな休憩を呼びかけましょう。" },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
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
      name: "夏祭りの暑さ対策テントの選び方",
      item: `${SITE_URL}/articles/${SLUG}`,
    },
  ],
};

export default function SummerFestivalTentArticle() {
  const tentsShade = byCat("T1");
  const tentsStd = byCat("T2");
  const tentOpt = byCat("TO");
  return (
    <>
      <SiteHeader />
      <article className="mx-auto max-w-[850px] px-4 py-8 text-gray-900">
        <nav aria-label="パンくず" className="mb-4 text-xs text-gray-500">
          <Link href="/" className="hover:underline">
            作業用品ナビ
          </Link>
          {" ＞ "}
          <Link href="/articles" className="hover:underline">
            記事一覧
          </Link>
          {" ＞ "}
          <span>夏祭りテント</span>
        </nav>

        <header>
          <h1 className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl">
            夏祭りの暑さ対策テントの選び方｜用途・サイズ別のおすすめと会場を涼しくするコツ
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-gray-700">
            真夏の夏祭り・地域イベントで、来場者とスタッフを暑さから守る第一歩が
            <strong className="font-bold">テント（日除け）</strong>です。とはいえ、サイズやタイプが多く
            「受付にはどれ？」「休憩所は何m角？」と迷いがち。この記事では、
            <strong className="font-bold">用途・サイズ別の選び方を比較表つき</strong>でわかりやすく整理し、
            さらに送風機・スポットクーラー・冷却ベスト・冷感グッズ・WBGT計まで、会場全体の暑さ対策を網羅します。
          </p>
          <p className="mt-2 text-xs text-gray-400">最終更新：2026年8月</p>
        </header>

        <div className="mt-6 overflow-hidden rounded-xl border border-gray-200 bg-gray-100">
          <img src={IMG_BASE + "eyecatch.webp"} alt="夏祭りの暑さ対策テント（用途・サイズ別の選び方）" className="aspect-[16/9] w-full object-cover" />
        </div>

        <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-4">
          <p className="text-sm font-semibold text-gray-900">まずはテントの全ラインナップから探す</p>
          <div className="mt-3"><PrimaryCta label={CTA.tent.label} url={CTA.tent.url} /></div>
        </div>

        <nav className="mt-8 rounded-lg border border-gray-200 bg-white p-4">
          <p className="mb-2 text-sm font-bold text-gray-900">この記事でわかること</p>
          <ol className="list-decimal space-y-1 pl-5 text-sm text-gray-700">
            <li><a className="hover:underline" href="#why">夏祭りの暑さ対策はテント（日陰）が基本</a></li>
            <li><a className="hover:underline" href="#select">【用途・サイズ別】テントの選び方＜比較表＞</a></li>
            <li><a className="hover:underline" href="#points">テント選びで外せない5つのポイント</a></li>
            <li><a className="hover:underline" href="#cooling">会場をもっと涼しくする暑さ対策</a></li>
            <li><a className="hover:underline" href="#emergency">熱中症の備え（救護・応急）</a></li>
            <li><a className="hover:underline" href="#faq">よくある質問（FAQ）</a></li>
          </ol>
        </nav>

        {/* 1. なぜテント */}
        <SectionH2 id="why">夏祭りの暑さ対策は「テント（日陰）」が基本</SectionH2>
        <p className="mt-4 text-sm leading-relaxed text-gray-700 sm:text-base">
          炎天下で最も効果的な暑さ対策は、<strong className="font-bold">直射日光を遮って日陰をつくる</strong>ことです。
          夏祭りでは、屋台・模擬店の日除け、受付・運営本部、来場者の休憩所、そして体調不良者に対応する救護所まで、
          さまざまな場所でテントが活躍します。まずは会場の各エリアに必要なテントを洗い出し、
          用途に合うサイズ・タイプを選んでいきましょう。
        </p>

        {/* 2. 用途・サイズ別 + 比較表 */}
        <SectionH2 id="select">【用途・サイズ別】夏祭りテントの選び方</SectionH2>
        <p className="mt-4 text-sm leading-relaxed text-gray-700 sm:text-base">
          テントは「どこで・何人分の日陰に使うか」でサイズを、「炎天下でどれだけ涼しくしたいか」でタイプ（遮熱／標準）を選びます。
          まずは下の比較表で、用途に合うサイズの目安をつかんでください。
        </p>

        <div className="mt-6 overflow-x-auto rounded-lg border border-gray-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-900 text-white">
              <tr>
                <th className="px-3 py-2 font-semibold">サイズ目安</th>
                <th className="px-3 py-2 font-semibold">日陰の目安</th>
                <th className="px-3 py-2 font-semibold">タイプ</th>
                <th className="px-3 py-2 font-semibold">向く用途</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white text-gray-700">
              <tr><td className="px-3 py-2 font-bold">約1.8×1.8m</td><td className="px-3 py-2">小（数人）</td><td className="px-3 py-2">遮熱</td><td className="px-3 py-2">受付・小さな屋台</td></tr>
              <tr><td className="px-3 py-2 font-bold">約2.4×2.4m</td><td className="px-3 py-2">中</td><td className="px-3 py-2">遮熱／標準</td><td className="px-3 py-2">屋台・スタッフ休憩</td></tr>
              <tr><td className="px-3 py-2 font-bold">約3×3m</td><td className="px-3 py-2">中〜大</td><td className="px-3 py-2">遮熱</td><td className="px-3 py-2">炎天下の休憩所・救護所</td></tr>
              <tr><td className="px-3 py-2 font-bold">約3.0×4.5m</td><td className="px-3 py-2">大</td><td className="px-3 py-2">標準</td><td className="px-3 py-2">模擬店・運営本部</td></tr>
              <tr><td className="px-3 py-2 font-bold">約3.0×6.0m</td><td className="px-3 py-2">特大</td><td className="px-3 py-2">標準</td><td className="px-3 py-2">来場者の休憩所・大型模擬店</td></tr>
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-gray-500">※日陰の目安は机・イスの数や人数で変わります。余裕を持ったサイズ選びがおすすめです。</p>

        <h3 className="mt-8 text-lg font-bold text-gray-900">◆ 炎天下の休憩所・救護所に｜遮熱クーラーテント</h3>
        <p className="mt-2 text-sm leading-relaxed text-gray-700 sm:text-base">
          遮熱生地で日差しの熱を抑えるタイプ。来場者が長く滞在する休憩所や、体調不良者を涼しく休ませたい救護所に向きます。
        </p>
        <Grid items={tentsShade} />

        <h3 className="mt-8 text-lg font-bold text-gray-900">◆ 屋台・模擬店・受付・本部に｜ワンタッチイベントテント</h3>
        <p className="mt-2 text-sm leading-relaxed text-gray-700 sm:text-base">
          工具いらずでサッと設営できるワンタッチ式。カラー展開もあり、模擬店や受付・運営本部など会場の主役として使えます。
          用途に合わせてサイズ・色を選びましょう。
        </p>
        <Grid items={tentsStd} />

        <h3 className="mt-8 text-lg font-bold text-gray-900">◆ あると便利｜横幕・遮光ネット（オプション）</h3>
        <p className="mt-2 text-sm leading-relaxed text-gray-700 sm:text-base">
          横幕は日差しの角度に合わせて側面をカバーし、遮光ネットは日陰をさらに強化。西日対策や、風・視線の調整にも役立ちます。
        </p>
        <Grid items={tentOpt} />

        <div className="mt-6"><PrimaryCta label={CTA.tent.label} url={CTA.tent.url} /></div>

        {/* 3. 選び方ポイント */}
        <SectionH2 id="points">テント選びで外せない5つのポイント</SectionH2>

        <div className="mt-6 overflow-hidden rounded-xl border border-gray-200 bg-gray-100">
          <img src={IMG_BASE + "anchor.webp"} alt="ワンタッチテントの風対策（重り・ペグで固定）" className="aspect-[16/9] w-full object-cover" />
        </div>

        <div className="mt-6 space-y-3">
          <div className="rounded-lg border border-gray-200 bg-white p-4"><p className="text-sm font-bold text-gray-900">1. サイズ（用途と人数）</p><p className="mt-1 text-sm leading-relaxed text-gray-700">日陰にしたい人数・机やイスの数から必要な広さを逆算。迷ったらワンサイズ上が安心。</p></div>
          <div className="rounded-lg border border-gray-200 bg-white p-4"><p className="text-sm font-bold text-gray-900">2. 設営のしやすさ（ワンタッチ式）</p><p className="mt-1 text-sm leading-relaxed text-gray-700">短時間で少人数でも立てられるワンタッチ式が便利。撤収・収納のしやすさもチェック。</p></div>
          <div className="rounded-lg border border-gray-200 bg-white p-4"><p className="text-sm font-bold text-gray-900">3. 遮熱・UVカット</p><p className="mt-1 text-sm leading-relaxed text-gray-700">長く滞在する休憩所・救護所は、日差しの熱を抑える遮熱タイプが快適。</p></div>
          <div className="rounded-lg border border-gray-200 bg-white p-4"><p className="text-sm font-bold text-gray-900">4. 風対策（重り・固定）※安全の要</p><p className="mt-1 text-sm leading-relaxed text-gray-700">屋外は突風でテントが飛ぶ事故に要注意。重り・ペグ・ロープで四隅を必ず固定し、強風時は使用を控える。</p></div>
          <div className="rounded-lg border border-gray-200 bg-white p-4"><p className="text-sm font-bold text-gray-900">5. 火気への配慮（難燃）</p><p className="mt-1 text-sm leading-relaxed text-gray-700">調理を伴う屋台の近くでは、難燃性の生地や火気との距離確保を。主催者ルールも要確認。</p></div>
        </div>

        {/* 4. 会場を涼しく */}
        <SectionH2 id="cooling">テントだけじゃない｜会場をもっと涼しくする暑さ対策</SectionH2>
        <p className="mt-4 text-sm leading-relaxed text-gray-700 sm:text-base">
          日陰をつくったら、次は「風」「冷却」「個人装備」「危険度の把握」で暑さ対策を重ねます。会場の規模に合わせて組み合わせましょう。
        </p>

        <HeatSection id="fan" title="① テント内・待機列に風を｜送風機・ミストファン" items={byCat("F")} cta={CTA.fan}>
          風の流れをつくり、ミストの気化熱で体感温度を下げます。待機列・休憩所・屋台裏など、人が集まる場所に配置しましょう。屋外で電源が取りづらい場合はエア駆動式や充電式も選択肢です。
        </HeatSection>

        <HeatSection id="cooler" title="② 本部・救護所をしっかり冷やす｜スポットクーラー・電源" items={byCat("C")} cta={CTA.cooler}>
          涼しい空間が必要な運営本部や救護所には、スポットクーラーや保冷ボックスが有効。屋外で電源がない会場では、ポータブル電源とセットで用意すると安心です。
        </HeatSection>

        <HeatSection id="vest" title="③ 動き回るスタッフに｜空調服・冷却ベスト" items={byCat("V")} cta={CTA.vest}>
          設営・運営で動き回るスタッフには、空調服や保冷剤・注水式の冷却ベストが効果的。炎天下の作業負担をやわらげます。
        </HeatSection>

        <HeatSection id="cool" title="④ 来場者・スタッフの水分＆冷感｜冷感グッズ・給水" items={byCat("G")} cta={CTA.cool}>
          こまめな水分・塩分補給は熱中症予防の基本。経口補水のタブレットや塩飴、保冷剤などを配布・常備し、体を冷やせる工夫を用意しましょう。
        </HeatSection>

        <HeatSection id="measure" title="⑤ 危険度を見える化｜WBGT計・熱中症計" items={byCat("M")} cta={CTA.measure}>
          WBGT（暑さ指数）を計測・掲示すれば、開催中の危険度をスタッフ全員で共有できます。基準に応じて休憩や声かけ、プログラムの調整を行いましょう。
        </HeatSection>

        {/* 5. 救護 */}
        <SectionH2 id="emergency">熱中症の備え（救護・応急）</SectionH2>
        <p className="mt-4 text-sm leading-relaxed text-gray-700 sm:text-base">
          予防と同時に、体調不良者が出たときの初動を準備しておくことが大切です。応急キットや全身を冷やせる用品を救護所にまとめておきましょう。
        </p>
        <Grid items={byCat("E")} />

        <div className="mt-6 rounded-lg border-l-4 border-red-500 bg-red-50 p-4">
          <p className="text-sm font-bold text-red-800">いざというときは、迷わず119番へ</p>
          <p className="mt-1 text-sm leading-relaxed text-gray-700">
            意識がはっきりしない・自分で水が飲めない・呼びかけへの反応がおかしいときは、すぐに涼しい場所へ移して体を冷やし、
            ためらわず救急要請してください（判断に迷うときは救急相談#7119）。テントや冷却グッズは予防・対策の補助であり、
            体調異常時は応急処置と受診を最優先に。無理をさせない運営を心がけましょう。
          </p>
        </div>

        {/* 6. FAQ */}
        <SectionH2 id="faq">よくある質問（FAQ）</SectionH2>
        <div className="mt-4 space-y-3">
          {FAQ.map((f, i) => (
            <details key={i} className="group rounded-lg border border-gray-200 bg-white p-4">
              <summary className="cursor-pointer list-none text-sm font-bold text-gray-900 marker:hidden"><span className="mr-2 text-gray-500">Q.</span>{f.q}</summary>
              <p className="mt-2 text-sm leading-relaxed text-gray-700"><span className="mr-2 font-bold text-gray-500">A.</span>{f.a}</p>
            </details>
          ))}
        </div>

        {/* まとめ */}
        <SectionH2 id="summary">まとめ</SectionH2>
        <p className="mt-4 text-sm leading-relaxed text-gray-700 sm:text-base">
          夏祭りの暑さ対策は、<strong className="font-bold">用途に合ったテントで日陰をつくること</strong>から始まります。
          受付・屋台・休憩所・救護所とエリアごとに必要なサイズ・タイプを選び、風対策(固定)を徹底すれば安全性も高まります。
          そのうえで送風機・スポットクーラー・冷却ベスト・冷感グッズ・WBGT計を組み合わせれば、会場全体の熱中症リスクを下げられます。
          まずは用途に合うテントから、一覧でチェックしてみてください。
        </p>
        <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-5">
          <p className="text-base font-bold text-gray-900">夏祭りの暑さ対策をまとめて準備</p>
          <div className="mt-4"><PrimaryCta label={CTA.tent.label} url={CTA.tent.url} /></div>
          <div className="mt-4 flex flex-wrap gap-2">
            <SubCta label={CTA.fan.label} url={CTA.fan.url} />
            <SubCta label={CTA.cooler.label} url={CTA.cooler.url} />
            <SubCta label={CTA.vest.label} url={CTA.vest.url} />
            <SubCta label={CTA.cool.label} url={CTA.cool.url} />
            <SubCta label={CTA.measure.label} url={CTA.measure.url} />
          </div>
        </div>

        <p className="mt-6 text-xs leading-relaxed text-gray-400">
          ※製品の仕様・サイズ・耐風性能・遮熱性能は商品によって異なります。ご使用時は各製品の表示・注意事項に従ってください。
        </p>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      </article>
      <SiteFooter />
    </>
  );
}
