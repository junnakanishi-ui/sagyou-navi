import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";

// ============================================================================
// 作業用品ナビ 記事
// 狙いキーワード: パイププロテクター / 駐車場 安全対策アイテム / 駐車場柱ガード
// ハウスルール: max-w-4xl / gray-900 カラー / utm_source=sagyou_navi / 自己完結（共有libなし）
// 送客先: trade-sign.com（サインシティ）
// ----------------------------------------------------------------------------
// 画像は trade-sign.com の商品画像を直リンク（/images/goods/{code}/{code}_main_1.jpg）。
// next/image を使う場合は next.config の remotePatterns に www.trade-sign.com を追加。
// 本ページは設定不要の <img> を使用。
// ============================================================================

const SLUG = "pipe-protector-parking-column-guard";
const SITE_URL = "https://www.sagyou-navi.com";
const HERO = "/images/articles/pipe-protector-parking-column-guard/hero.jpg";

export const metadata: Metadata = {
  title:
    "パイププロテクターとは？駐車場の柱ガード・安全対策アイテムを徹底解説【サイズ選び・設置方法】",
  description:
    "パイププロテクター（柱ガード）の役割・サイズの選び方（Φ60.5〜Φ120）・設置方法を解説。駐車場の柱と車両を守る安全対策アイテムから、駐車禁止看板・車止めシール・EV充電案内まで必要なグッズを網羅しました。",
  alternates: { canonical: `${SITE_URL}/articles/${SLUG}` },
  openGraph: {
    title:
      "パイププロテクターとは？駐車場の柱ガード・安全対策アイテムを徹底解説",
    description:
      "パイププロテクター（柱ガード）の役割・サイズの選び方（Φ60.5〜Φ120）・設置方法を解説。駐車場の安全対策アイテムを網羅。",
    type: "article",
    images: [HERO],
  },
};

// ---- 送客リンクユーティリティ ----------------------------------------------
const UTM = "utm_source=sagyou_navi";
const SHOP = "https://www.trade-sign.com";

/** 商品ページURL（末尾に utm を付与） */
function shopUrl(path: string): string {
  const sep = path.includes("?") ? "&" : "?";
  return `${path}${sep}${UTM}`;
}
/** 商品画像URL（サインシティの商品画像パターン） */
function imgUrl(code: string): string {
  return `${SHOP}/images/goods/${code}/${code}_main_1.jpg`;
}

// ---- 商品データ（Excel「取得結果.xlsx」より） ------------------------------
type Product = { code: string; name: string; note: string; url: string };

const PIPE_PROTECTORS: (Product & { gaikei: string; weight: string; price: string })[] = [
  {
    code: "038100",
    name: "パイププロテクター Φ60.5用（G-PP-02）",
    gaikei: "外径 Φ60.5mm",
    weight: "約300g",
    price: "税込 6,000円前後",
    note: "細めの支柱・単管（Φ60.5）に。軽量で1人でも設置しやすい定番サイズ。",
    url: "https://www.trade-sign.com/koujiyouhin/038100.html",
  },
  {
    code: "038099",
    name: "パイププロテクター Φ76.3用（G-PP-03）",
    gaikei: "外径 Φ76.3mm",
    weight: "約350g",
    price: "税込 6,500円前後",
    note: "中間径の柱に対応。駐車場・工場の鉄骨柱で最も使われるサイズ帯。",
    url: "https://www.trade-sign.com/koujiyouhin/038099.html",
  },
  {
    code: "038098",
    name: "パイププロテクター Φ114.3用（G-PP-04）",
    gaikei: "外径 Φ114.3mm",
    weight: "約550g",
    price: "税込 1万円前後",
    note: "太めの構造柱に。立体駐車場やビルの主要柱の保護に適します。",
    url: "https://www.trade-sign.com/koujiyouhin/038098.html",
  },
  {
    code: "038097",
    name: "パイププロテクター Φ120用（G-PP-05）",
    gaikei: "外径 Φ120mm",
    weight: "約560g",
    price: "税込 1.1万円前後",
    note: "シリーズ最大径。大型車両が通る施設・物流倉庫の柱保護に。",
    url: "https://www.trade-sign.com/koujiyouhin/038097.html",
  },
];

const SIGNS: Product[] = [
  { code: "021858", name: "サインキューブ「駐車禁止」片面 イエロー（874-011A）", note: "水を入れて自立する樹脂ブロック看板。無断駐車の抑止に。", url: "https://www.trade-sign.com/koujiyouhin/021858.html" },
  { code: "021532", name: "サインキューブ「駐車禁止」片面 グレー（874-011AGY）", note: "景観に馴染むグレー。マンション・店舗向け。", url: "https://www.trade-sign.com/koujiyouhin/021532.html" },
  { code: "021509", name: "サインキューブ「身障者専用駐車場」片面 グレー（874-181AGY）", note: "思いやり駐車スペースの明示に。バリアフリー対応。", url: "https://www.trade-sign.com/koujiyouhin/021509.html" },
  { code: "021921", name: "サインシックBタイプ（865-822）", note: "スタイリッシュな薄型スタンド。注意喚起表示の定番。", url: "https://www.trade-sign.com/koujiyouhin/021921.html" },
];

const BARRICADES: Product[] = [
  { code: "025722", name: "アーチスタンド イエロー", note: "出入口の一時封鎖や区画分けに。視認性の高い黄色。", url: "https://www.trade-sign.com/koujiyouhin/025722.html" },
  { code: "025723", name: "アーチスタンド ホワイト", note: "景観重視の白。連結して簡易バリケードにも。", url: "https://www.trade-sign.com/koujiyouhin/025723.html" },
  { code: "163024", name: "チェーンスタンド用ステッカー「関係者以外立入禁止」（TRUSCO TCSS-008）", note: "チェーンスタンドに貼るだけ。立入抑制を強化。", url: "https://www.trade-sign.com/trusco/163024.html" },
  { code: "189336", name: "ブリリアントサイン Type-B「進入禁止」両面 ブラック", note: "高級感のある両面表示。逆走・誤進入の防止に。", url: "https://www.trade-sign.com/stand/189336.html" },
  { code: "188981", name: "ミニスタンド「駐輪禁止」片面", note: "省スペースの卓上〜足元サイズ。駐輪トラブル対策に。", url: "https://www.trade-sign.com/stand/188981.html" },
  { code: "171521", name: "チャオBM ブラック「駐輪場」", note: "駐輪スペースの明示に。おしゃれな黒フレーム。", url: "https://www.trade-sign.com/stand/171521.html" },
];

const STICKERS: Product[] = [
  { code: "G006563", name: "車止めシール「契約者専用」H75×W300 屋外強粘着アルミ", note: "車止めブロックに貼るだけ。区画の用途を明示。", url: "https://www.trade-sign.com/original/G006563.html" },
  { code: "G007270", name: "車止めシール「お客様駐車場」", note: "来客用スペースの明示に。強粘着で屋外耐候。", url: "https://www.trade-sign.com/original/G007270.html" },
  { code: "G007273", name: "車止めシール「契約者駐車場」", note: "月極・契約区画の識別に。", url: "https://www.trade-sign.com/original/G007273.html" },
  { code: "G007271", name: "車止めシール「営業車専用」", note: "社用区画の用途分けに。", url: "https://www.trade-sign.com/original/G007271.html" },
  { code: "G007276", name: "車止めシール「社用車用」", note: "社員・社用車エリアの明示に。", url: "https://www.trade-sign.com/original/G007276.html" },
  { code: "G007274", name: "車止めシール「搬入用」", note: "荷捌き・搬入スペースの確保に。", url: "https://www.trade-sign.com/original/G007274.html" },
];

const GUIDES: Product[] = [
  { code: "197412", name: "折りたたみ看板 大（450×900）白 片面「空きあり」高輝度反射", note: "満空案内に。折りたためて収納も簡単。", url: "https://www.trade-sign.com/original/197412.html" },
  { code: "197411", name: "折りたたみ看板 大（450×900）白 片面「満車」高輝度反射", note: "満車時の誘導・入場抑制に。", url: "https://www.trade-sign.com/original/197411.html" },
  { code: "197933", name: "折りたたみ看板 大（450×900）白 両面「臨時駐車場」高輝度反射", note: "イベント・繁忙期の臨時区画に。両面表示。", url: "https://www.trade-sign.com/original/197933.html" },
  { code: "197414", name: "折りたたみ看板 大（450×900）白 片面「優先駐車場」高輝度反射", note: "優先スペースの明示に。", url: "https://www.trade-sign.com/original/197414.html" },
  { code: "197346", name: "折りたたみ看板 大（450×900）黄 片面「お客様専用駐車場」高輝度反射", note: "視認性の高い黄色ベース。来客誘導に。", url: "https://www.trade-sign.com/original/197346.html" },
  { code: "197951", name: "折りたたみ看板 大（450×900）白 両面「入口矢印」高輝度反射", note: "入口・順路の誘導に。夜間も反射で視認。", url: "https://www.trade-sign.com/original/197951.html" },
  { code: "197936", name: "折りたたみ看板 大（450×900）白 両面「進入禁止」高輝度反射", note: "逆走・誤進入の抑止に。", url: "https://www.trade-sign.com/original/197936.html" },
  { code: "197962", name: "折りたたみ看板 小（450×450）白 両面「進入禁止」高輝度反射", note: "省スペースの小型サイズ。狭小地に。", url: "https://www.trade-sign.com/original/197962.html" },
  { code: "189105", name: "ミニスタンド「駐車場契約者様募集中」両面", note: "空き区画の募集告知に。集客用途。", url: "https://www.trade-sign.com/stand/189105.html" },
];

const EV_FLOOR: Product[] = [
  { code: "G002140", name: "【EV QUICK】プレートタイプ", note: "EV充電スポットの案内看板。スタンダードなプレート。", url: "https://www.trade-sign.com/floorsign/G002140.html" },
  { code: "G002044", name: "【EV QUICK】路面シート", note: "路面に貼るEV充電区画の明示に。", url: "https://www.trade-sign.com/floorsign/G002044.html" },
  { code: "G002146", name: "【EV QUICK】ポールタイプ", note: "遠目でも視認できるポール型のEV案内。", url: "https://www.trade-sign.com/floorsign/G002146.html" },
  { code: "G004726", name: "【EV・PHV QUICK】ポールタイプ", note: "EV/PHV両対応の充電スポット案内ポール。", url: "https://www.trade-sign.com/floorsign/G004726.html" },
  { code: "188715", name: "タートイズ ブラック 路面表示「契約」", note: "踏んでも壊れにくい路面表示。区画の識別に。", url: "https://www.trade-sign.com/floorsign/188715.html" },
  { code: "G004748", name: "アルミ複合板 反射プレート看板（規格サイズ）", note: "オリジナル文言で作れる反射プレート。掲示全般に。", url: "https://www.trade-sign.com/wallsign/G004748.html" },
];

// ---- CTA 定義 --------------------------------------------------------------
const CTA_MAIN = {
  label: "パイププロテクター 一覧を見る",
  url: "https://www.trade-sign.com/search/?q=%E3%83%91%E3%82%A4%E3%83%97%E3%83%97%E3%83%AD%E3%83%86%E3%82%AF%E3%82%BF%E3%83%BC",
};
const CTA_SUBS = [
  { label: "駐車禁止看板 一覧", url: "https://www.trade-sign.com/parkingsign/27/" },
  { label: "EV自動車看板 一覧", url: "https://www.trade-sign.com/parkingsign/30/" },
  { label: "お客様駐車場看板 一覧", url: "https://www.trade-sign.com/parkingsign/10/" },
  { label: "駐車場看板 一覧（総合）", url: "https://www.trade-sign.com/parkingsign/" },
];

// ---- 部品コンポーネント（自己完結） ----------------------------------------

/** 主役CTAボタン（目立つアクセントカラー） */
function PrimaryCta({ label, url }: { label: string; url: string }) {
  return (
    <a
      href={shopUrl(url)}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-orange-600 px-6 py-4 text-base font-bold text-white shadow-sm transition-colors hover:bg-orange-700 sm:w-auto"
    >
      {label}
      <span aria-hidden className="text-lg">
        →
      </span>
    </a>
  );
}

/** サブCTA（控えめ） */
function SubCta({ label, url }: { label: string; url: string }) {
  return (
    <a
      href={shopUrl(url)}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="inline-flex items-center justify-center gap-1 rounded-md border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 transition-colors hover:border-gray-900 hover:bg-gray-50"
    >
      {label}
      <span aria-hidden>›</span>
    </a>
  );
}

/** 商品カード（サムネ付き） */
function ProductCard({ p }: { p: Product }) {
  return (
    <a
      href={shopUrl(p.url)}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white transition-shadow hover:shadow-md"
    >
      <div className="aspect-square w-full overflow-hidden bg-gray-50">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imgUrl(p.code)}
          alt={p.name}
          loading="lazy"
          className="h-full w-full object-contain p-2 transition-transform duration-200 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-3">
        <h4 className="text-sm font-bold leading-snug text-gray-900">{p.name}</h4>
        <p className="mt-1 flex-1 text-xs leading-relaxed text-gray-600">{p.note}</p>
        <span className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-orange-600 group-hover:underline">
          商品ページを見る →
        </span>
      </div>
    </a>
  );
}

/** 主役（パイププロテクター）専用の大きめカード */
function ProtectorCard({
  p,
}: {
  p: Product & { gaikei: string; weight: string; price: string };
}) {
  return (
    <a
      href={shopUrl(p.url)}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="group flex flex-col overflow-hidden rounded-xl border-2 border-gray-200 bg-white transition-all hover:border-orange-500 hover:shadow-lg"
    >
      <div className="aspect-square w-full overflow-hidden bg-gray-50">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imgUrl(p.code)}
          alt={p.name}
          loading="lazy"
          className="h-full w-full object-contain p-3 transition-transform duration-200 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-base font-bold leading-snug text-gray-900">{p.name}</h3>
        <dl className="mt-3 grid grid-cols-2 gap-x-3 gap-y-1.5 text-xs text-gray-700">
          <div className="flex flex-col">
            <dt className="text-[11px] text-gray-500">適合外径</dt>
            <dd className="font-bold text-gray-900">{p.gaikei}</dd>
          </div>
          <div className="flex flex-col">
            <dt className="text-[11px] text-gray-500">重量</dt>
            <dd className="font-bold text-gray-900">{p.weight}</dd>
          </div>
          <div className="col-span-2 flex flex-col">
            <dt className="text-[11px] text-gray-500">価格の目安</dt>
            <dd className="font-bold text-gray-900">{p.price}</dd>
          </div>
        </dl>
        <p className="mt-3 flex-1 text-xs leading-relaxed text-gray-600">{p.note}</p>
        <span className="mt-3 inline-flex items-center justify-center rounded-md bg-gray-900 px-3 py-2 text-sm font-bold text-white transition-colors group-hover:bg-orange-600">
          価格・在庫を見る →
        </span>
      </div>
    </a>
  );
}

/** 見出し（H2） */
function SectionH2({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2
      id={id}
      className="mt-14 scroll-mt-24 border-l-4 border-orange-600 pl-3 text-xl font-bold text-gray-900 sm:text-2xl"
    >
      {children}
    </h2>
  );
}

// ---- FAQ データ（構造化データにも使用） ------------------------------------
const FAQ = [
  {
    q: "パイププロテクターのサイズはどう選べばいいですか？",
    a: "保護したい柱・支柱・単管の「外径（Φ）」に合わせて選びます。本シリーズはΦ60.5・Φ76.3・Φ114.3・Φ120の4サイズを用意しています。柱にメジャーを一周させて外周を測り、外周÷3.14で外径を割り出すと確実です。既存の鋼管・単管であれば規格外径から判断できます。",
  },
  {
    q: "屋外の駐車場でも使えますか？劣化しませんか？",
    a: "本体は軟質ポリエチレン樹脂製で、屋内外どちらでも使用できます。紫外線や雨に長期間さらされる環境では、色あせや経年劣化は避けられないため、定期的な点検・交換を前提にご検討ください。",
  },
  {
    q: "柱ガード（パイププロテクター）は車のキズ防止にもなりますか？",
    a: "柱と車両の間に緩衝材が入ることで、接触時の衝撃をやわらげます。柱側のコンクリート欠けや鉄骨の傷はもちろん、車両側のバンパー・ドアのキズを軽減する効果が期待できます。ただし高速度での衝突を完全に防ぐものではなく、あくまで低速接触時の緩衝・注意喚起が主目的です。",
  },
  {
    q: "四角い柱（角柱）にも取り付けられますか？",
    a: "パイププロテクターは丸パイプ・円柱向けの筒状形状です。角柱にはコーナーガードや面で覆うクッション材が適しています。柱の断面形状に合わせて製品を選び分けてください。",
  },
  {
    q: "無断駐車や逆走を防ぐには何を置けばよいですか？",
    a: "「駐車禁止」「進入禁止」のサインキューブや折りたたみ看板、車止めシールでの用途明示、出入口のアーチスタンドやチェーンスタンドの併用が効果的です。柱ガードと合わせて、区画表示・注意喚起・物理的な抑止を重ねることで駐車場全体の安全性が高まります。",
  },
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
    { "@type": "ListItem", position: 1, name: "ホーム", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "記事一覧", item: `${SITE_URL}/articles` },
    {
      "@type": "ListItem",
      position: 3,
      name: "パイププロテクターとは？駐車場の柱ガード",
      item: `${SITE_URL}/articles/${SLUG}`,
    },
  ],
};

// ============================================================================
// 記事本体
// ============================================================================
export default function Page() {
  return (
    <>
      <SiteHeader />
      <article className="mx-auto max-w-4xl px-4 py-8 text-gray-900">
        {/* パンくず */}
        <nav aria-label="パンくず" className="mb-4 text-xs text-gray-500">
          <Link href="/" className="hover:underline">
            作業用品ナビ
          </Link>
          {" ＞ "}
          <Link href="/articles" className="hover:underline">
            記事一覧
          </Link>
          {" ＞ "}
          <span>パイププロテクター</span>
        </nav>

        {/* タイトル */}
        <header>
          <h1 className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl">
            パイププロテクターとは？駐車場の柱ガード・安全対策アイテムを徹底解説
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-gray-600">
            駐車場の柱への「ぶつけた」「ぶつけられた」を減らすカギが、柱と車両の衝撃をやわらげる
            <strong className="font-bold text-gray-900">パイププロテクター（柱ガード）</strong>
            です。この記事では、パイププロテクターの役割・サイズの選び方・設置のポイントを分かりやすく整理し、
            あわせて駐車場の安全対策に必要なアイテムを一通り網羅しました。
          </p>
          <p className="mt-2 text-xs text-gray-400">最終更新：2026年8月</p>
        </header>

        {/* 冒頭CTA */}
        <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-4">
          <p className="text-sm font-semibold text-gray-900">
            お急ぎの方はこちら（サイズ豊富にラインナップ）
          </p>
          <div className="mt-3">
            <PrimaryCta label={CTA_MAIN.label} url={CTA_MAIN.url} />
          </div>
        </div>

        {/* 目次 */}
        <nav className="mt-8 rounded-lg border border-gray-200 bg-white p-4">
          <p className="mb-2 text-sm font-bold text-gray-900">この記事でわかること</p>
          <ol className="list-decimal space-y-1 pl-5 text-sm text-gray-700">
            <li>
              <a className="hover:text-orange-600 hover:underline" href="#what">
                パイププロテクターとは（役割・2つのタイプ）
              </a>
            </li>
            <li>
              <a className="hover:text-orange-600 hover:underline" href="#why">
                なぜ駐車場に柱ガードが必要なのか
              </a>
            </li>
            <li>
              <a className="hover:text-orange-600 hover:underline" href="#select">
                サイズ・材質の選び方＜商品一覧＞
              </a>
            </li>
            <li>
              <a className="hover:text-orange-600 hover:underline" href="#install">
                設置方法と使うときの注意点
              </a>
            </li>
            <li>
              <a className="hover:text-orange-600 hover:underline" href="#items">
                駐車場の安全対策アイテム総まとめ
              </a>
            </li>
            <li>
              <a className="hover:text-orange-600 hover:underline" href="#scene">
                シーン別・組み合わせの考え方
              </a>
            </li>
            <li>
              <a className="hover:text-orange-600 hover:underline" href="#faq">
                よくある質問（FAQ）
              </a>
            </li>
          </ol>
        </nav>

        {/* 1. とは */}
        <SectionH2 id="what">パイププロテクターとは？柱と車両を守る緩衝材</SectionH2>
        <p className="mt-4 text-sm leading-relaxed text-gray-700 sm:text-base">
          パイププロテクターとは、駐車場や工場・倉庫の
          <strong className="font-bold">柱・支柱・単管に取り付ける筒状の緩衝材（プロテクター）</strong>
          のことです。柱に巻き付けるように装着することで、車両が接触したときの衝撃をやわらげ、
          <strong className="font-bold">柱側の破損</strong>と
          <strong className="font-bold">車両側のキズ</strong>の両方を軽減します。
          あわせて「ここに柱がある」と一目で分かる注意喚起の役割も果たします。
        </p>

        <div className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-4">
          <p className="text-sm font-bold text-gray-900">「パイププロテクター」には2つのタイプがあります</p>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <div className="rounded-md border border-gray-200 bg-white p-3">
              <p className="text-sm font-bold text-gray-900">① 柱ガード型（構造タイプ）</p>
              <p className="mt-1 text-xs leading-relaxed text-gray-600">
                柱の外径に合わせて装着する筒状の樹脂プロテクター。本記事で紹介するタイプで、
                <strong>駐車場柱ガード</strong>として車両接触の緩衝に使います。
              </p>
            </div>
            <div className="rounded-md border border-gray-200 bg-white p-3">
              <p className="text-sm font-bold text-gray-900">② トラ模様クッション型</p>
              <p className="mt-1 text-xs leading-relaxed text-gray-600">
                黄×黒の粘着クッションを巻き付ける危険表示タイプ。細いパイプや配管の
                「ぶつかり防止・注意表示」向けで、用途が異なります。
              </p>
            </div>
          </div>
          <p className="mt-3 text-xs text-gray-500">
            駐車場の柱を守りたい場合は、外径に合わせて選べる①の柱ガード型が基本です。
          </p>
        </div>

        {/* 2. なぜ */}
        <SectionH2 id="why">なぜ駐車場に柱ガード（パイププロテクター）が必要なのか</SectionH2>
        <p className="mt-4 text-sm leading-relaxed text-gray-700 sm:text-base">
          駐車場でとくに多いのが、車庫入れ・切り返し時の
          <strong className="font-bold">柱への接触</strong>です。低速でも、コンクリート柱の角欠けや鉄骨柱の塗装剥がれ、
          車両側のバンパー・ドアのキズにつながります。管理者にとっては、
        </p>
        <ul className="mt-3 space-y-1.5 pl-5 text-sm text-gray-700">
          <li className="list-disc">
            柱・構造物の<strong>補修コスト</strong>や美観低下
          </li>
          <li className="list-disc">
            利用者とのあいだの<strong>キズ・損害トラブル</strong>や責任の所在
          </li>
          <li className="list-disc">
            「柱が見えづらい」ことによる<strong>接触事故の再発</strong>
          </li>
        </ul>
        <p className="mt-3 text-sm leading-relaxed text-gray-700 sm:text-base">
          パイププロテクターを柱に装着しておくと、接触時の衝撃をやわらげつつ、
          目立つ色で柱の存在を知らせるため、こうしたリスクをまとめて下げられます。
          後付けで手軽に導入できるのも、選ばれる理由です。
        </p>

        {/* 3. 選び方＋主役商品 */}
        <SectionH2 id="select">パイププロテクターの選び方【サイズ・材質】</SectionH2>
        <p className="mt-4 text-sm leading-relaxed text-gray-700 sm:text-base">
          選び方のポイントはシンプルで、
          <strong className="font-bold">保護したい柱の「外径（Φ）」に合わせる</strong>ことです。
          既存の鋼管・単管であれば規格の外径から、そうでない場合は柱の外周を測って
          <span className="whitespace-nowrap">「外周 ÷ 3.14」</span>で外径を割り出します。
          本シリーズは軟質ポリエチレン樹脂製で、屋内・屋外どちらにも対応。
          以下の4サイズから、柱に合うものをお選びください。
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PIPE_PROTECTORS.map((p) => (
            <ProtectorCard key={p.code} p={p} />
          ))}
        </div>
        <p className="mt-3 text-xs text-gray-500">
          ※価格は目安です。最新の販売価格・在庫・送料は各商品ページでご確認ください。
        </p>

        {/* サイズ早見表 */}
        <div className="mt-6 overflow-x-auto rounded-lg border border-gray-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-900 text-white">
              <tr>
                <th className="px-3 py-2 font-semibold">型番</th>
                <th className="px-3 py-2 font-semibold">適合外径</th>
                <th className="px-3 py-2 font-semibold">重量</th>
                <th className="px-3 py-2 font-semibold">主な用途</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white text-gray-700">
              <tr>
                <td className="px-3 py-2 font-bold">G-PP-02</td>
                <td className="px-3 py-2">Φ60.5mm</td>
                <td className="px-3 py-2">約300g</td>
                <td className="px-3 py-2">細めの支柱・単管</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-bold">G-PP-03</td>
                <td className="px-3 py-2">Φ76.3mm</td>
                <td className="px-3 py-2">約350g</td>
                <td className="px-3 py-2">駐車場・工場の柱（定番）</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-bold">G-PP-04</td>
                <td className="px-3 py-2">Φ114.3mm</td>
                <td className="px-3 py-2">約550g</td>
                <td className="px-3 py-2">立体駐車場・ビルの主要柱</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-bold">G-PP-05</td>
                <td className="px-3 py-2">Φ120mm</td>
                <td className="px-3 py-2">約560g</td>
                <td className="px-3 py-2">大型車が通る施設・倉庫</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
          <PrimaryCta label={CTA_MAIN.label} url={CTA_MAIN.url} />
          <span className="text-xs text-gray-500">
            サイズが合うか不安な場合も、まずは一覧で外径をチェック。
          </span>
        </div>

        {/* 4. 設置方法 */}
        <SectionH2 id="install">設置方法と使うときの注意点</SectionH2>
        <p className="mt-4 text-sm leading-relaxed text-gray-700 sm:text-base">
          柱ガード型のパイププロテクターは、
          <strong className="font-bold">柱に沿わせて巻き付け・装着するだけ</strong>で設置でき、
          特別な工具を必要としない手軽さが魅力です。設置・運用にあたっては、次の点を押さえておきましょう。
        </p>
        <ul className="mt-3 space-y-2 pl-5 text-sm text-gray-700">
          <li className="list-disc">
            <strong>外径を必ず確認</strong>
            ：ゆるすぎると保護効果が下がり、きつすぎると装着できません。
          </li>
          <li className="list-disc">
            <strong>設置高さ</strong>
            ：車両のバンパー〜ドアが当たりやすい高さをカバーする位置に。
          </li>
          <li className="list-disc">
            <strong>屋外使用は経年劣化を前提に</strong>
            ：色あせ・硬化が進んだら早めに交換を。
          </li>
          <li className="list-disc">
            <strong>過信しない</strong>
            ：高速度の衝突を防ぐものではなく、低速接触時の緩衝・注意喚起が目的です。
          </li>
        </ul>

        {/* 5. 安全対策アイテム総まとめ */}
        <SectionH2 id="items">駐車場の安全対策アイテム総まとめ【柱ガード＋α】</SectionH2>
        <p className="mt-4 text-sm leading-relaxed text-gray-700 sm:text-base">
          駐車場の安全は、柱ガードだけで完結するものではありません。
          <strong className="font-bold">「区画を分ける」「注意を促す」「進入を抑える」「誘導する」</strong>
          アイテムを組み合わせることで、接触事故・逆走・無断駐車・歩行者トラブルをまとめて減らせます。
          ここでは目的別に、現場で使いやすいアイテムを紹介します。
        </p>

        {/* 5-1 禁止・注意サイン */}
        <h3 className="mt-8 text-lg font-bold text-gray-900">
          ① 禁止・注意喚起サイン（無断駐車・区画表示）
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-gray-700">
          「駐車禁止」「身障者専用」などを明示する自立式サイン。水を入れて置くだけの
          サインキューブは、無断駐車の抑止と区画の明確化に定番です。
        </p>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {SIGNS.map((p) => (
            <ProductCard key={p.code} p={p} />
          ))}
        </div>
        <div className="mt-4">
          <SubCta label={CTA_SUBS[0].label} url={CTA_SUBS[0].url} />
        </div>

        {/* 5-2 車止めシール */}
        <h3 className="mt-10 text-lg font-bold text-gray-900">② 車止めシール（区画の用途を明示）</h3>
        <p className="mt-2 text-sm leading-relaxed text-gray-700">
          既存の車止めブロックに貼るだけで、「契約者専用」「お客様用」などの用途を明示。
          屋外強粘着のアルミ製で、低コストに区画整理ができます。
        </p>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {STICKERS.map((p) => (
            <ProductCard key={p.code} p={p} />
          ))}
        </div>
        <div className="mt-4">
          <SubCta label={CTA_SUBS[2].label} url={CTA_SUBS[2].url} />
        </div>

        {/* 5-3 誘導・満空・臨時 */}
        <h3 className="mt-10 text-lg font-bold text-gray-900">
          ③ 誘導・満空・臨時案内（折りたたみ看板）
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-gray-700">
          「満車／空きあり」「入口矢印」「臨時駐車場」などをその場で提示できる折りたたみ看板。
          高輝度反射で夜間の視認性も高く、繁忙期やイベント時の誘導に役立ちます。
        </p>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {GUIDES.map((p) => (
            <ProductCard key={p.code} p={p} />
          ))}
        </div>

        {/* 5-4 バリケード・進入抑制 */}
        <h3 className="mt-10 text-lg font-bold text-gray-900">
          ④ バリケード・進入抑制（逆走・立入対策）
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-gray-700">
          出入口の一時封鎖や、関係者以外の立入・逆走の抑止に。アーチスタンドやチェーンスタンド、
          進入禁止サインを組み合わせて、動線をコントロールします。
        </p>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {BARRICADES.map((p) => (
            <ProductCard key={p.code} p={p} />
          ))}
        </div>

        {/* 5-5 EV・路面 */}
        <h3 className="mt-10 text-lg font-bold text-gray-900">⑤ EV充電案内・路面表示</h3>
        <p className="mt-2 text-sm leading-relaxed text-gray-700">
          EV／PHV充電スポットの案内や、路面での区画表示に。プレート・ポール・路面シートなど、
          設置場所に合わせて選べます。EV対応は今後の駐車場整備で需要が高まる分野です。
        </p>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {EV_FLOOR.map((p) => (
            <ProductCard key={p.code} p={p} />
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <SubCta label={CTA_SUBS[1].label} url={CTA_SUBS[1].url} />
          <SubCta label={CTA_SUBS[3].label} url={CTA_SUBS[3].url} />
        </div>

        {/* 6. シーン別 */}
        <SectionH2 id="scene">シーン別・組み合わせの考え方</SectionH2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-gray-200 bg-white p-4">
            <p className="text-sm font-bold text-gray-900">月極・コインパーキング</p>
            <p className="mt-1 text-xs leading-relaxed text-gray-600">
              柱ガード＋「契約者専用」車止めシール＋駐車禁止サインで、無断駐車と柱接触を同時に対策。
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-4">
            <p className="text-sm font-bold text-gray-900">店舗・商業施設</p>
            <p className="mt-1 text-xs leading-relaxed text-gray-600">
              「お客様専用」表示＋満空・入口矢印の折りたたみ看板で来客をスムーズに誘導。
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-4">
            <p className="text-sm font-bold text-gray-900">マンション・管理組合</p>
            <p className="mt-1 text-xs leading-relaxed text-gray-600">
              景観に馴染むグレー系サイン＋柱ガードで、安全性と美観を両立。身障者専用区画も明示。
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-4">
            <p className="text-sm font-bold text-gray-900">工場・物流倉庫</p>
            <p className="mt-1 text-xs leading-relaxed text-gray-600">
              太径の柱ガード（Φ114.3〜Φ120）＋進入禁止・立入禁止で、大型車動線の安全を確保。
            </p>
          </div>
        </div>

        {/* 7. FAQ */}
        <SectionH2 id="faq">よくある質問（FAQ）</SectionH2>
        <div className="mt-4 space-y-3">
          {FAQ.map((f, i) => (
            <details key={i} className="group rounded-lg border border-gray-200 bg-white p-4">
              <summary className="cursor-pointer list-none text-sm font-bold text-gray-900 marker:hidden">
                <span className="mr-2 text-orange-600">Q.</span>
                {f.q}
              </summary>
              <p className="mt-2 text-sm leading-relaxed text-gray-700">
                <span className="mr-2 font-bold text-gray-500">A.</span>
                {f.a}
              </p>
            </details>
          ))}
        </div>

        {/* まとめ + 最終CTA */}
        <SectionH2 id="summary">まとめ</SectionH2>
        <p className="mt-4 text-sm leading-relaxed text-gray-700 sm:text-base">
          駐車場の安全対策は、まず
          <strong className="font-bold">柱と車両を守るパイププロテクター（柱ガード）</strong>から。
          柱の外径に合わせてサイズを選べば、後付けで手軽に導入できます。
          さらに、禁止・注意サイン、車止めシール、誘導看板、バリケード、EV案内を目的別に組み合わせることで、
          接触・逆走・無断駐車・歩行者トラブルをまとめて減らせます。
          必要なアイテムは、まずは一覧からチェックしてみてください。
        </p>

        <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-5">
          <p className="text-base font-bold text-gray-900">まずはサイズ豊富なパイププロテクターから</p>
          <div className="mt-4">
            <PrimaryCta label={CTA_MAIN.label} url={CTA_MAIN.url} />
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {CTA_SUBS.map((c) => (
              <SubCta key={c.url} label={c.label} url={c.url} />
            ))}
          </div>
        </div>

        {/* 構造化データ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      </article>
      <SiteFooter />
    </>
  );
}
