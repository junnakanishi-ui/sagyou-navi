import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";

const SLUG = "side-handle-cart-guide";
const SITE_URL = "https://sagyou-navi.com";
const ARTICLE_IMG = "/images/articles/side-handle-cart-guide";

export const metadata: Metadata = {
  title:
    "サイドハンドル台車とは？長尺物・箱物を運びやすいグランカート・板物搬送台車の選び方｜作業用品ナビ",
  description:
    "サイドハンドル台車とは、台車の横側にハンドルが付いた長尺物・箱物の運搬に便利な台車です。グランカートのサイレントタイプ・通常タイプ、板物搬送台車イタチ、カルティオやバーディワゴンとの使い分けを現場別に解説します。",
  alternates: { canonical: `${SITE_URL}/articles/${SLUG}` },
  openGraph: {
    title:
      "サイドハンドル台車とは？長尺物・箱物を運びやすいグランカート・板物搬送台車の選び方",
    description:
      "サイドハンドル台車とは、台車の横側にハンドルが付いた長尺物・箱物の運搬に便利な台車です。グランカートのサイレントタイプ・通常タイプ、板物搬送台車イタチ、カルティオやバーディワゴンとの使い分けを現場別に解説します。",
    type: "article",
    images: [`${ARTICLE_IMG}/hero.jpg`],
  },
};

const UTM = "utm_source=sagyou_navi";
const YQ = "?sc_i=shopping-pc-web-result-storesch-rsltlst-title&ea=";
const productImage = (id: string) => `/products/${id}.jpg`;

function buildUrl(url: string, utm: string): string {
  if (!url) return url;
  const hashIndex = url.indexOf("#");
  const append = (base: string) =>
    `${base}${base.includes("?") ? "&" : "?"}${utm}`;
  if (hashIndex === -1) return append(url);
  return `${append(url.slice(0, hashIndex))}${url.slice(hashIndex)}`;
}

const u = (url: string) => buildUrl(url, UTM);

const URL_GRANCART_LIST =
  "https://store.shopping.yahoo.co.jp/signcity-yshop/search.html?p=%E3%82%B0%E3%83%A9%E3%83%B3%E3%82%AB%E3%83%BC%E3%83%88&view=grid";
const URL_CART_LIST =
  "https://store.shopping.yahoo.co.jp/signcity-yshop/b1bfc8c2c2.html";
const URL_MAT_LIST =
  "https://store.shopping.yahoo.co.jp/signcity-yshop/search.html?p=%E8%B6%B3%E8%85%B0%E3%83%9E%E3%83%83%E3%83%88#CentSrchFilter1";
const URL_TRUSCO_LIST =
  "https://store.shopping.yahoo.co.jp/signcity-yshop/a5c8a5e9a5.html#sideNaviItems";
const URL_ITACHI =
  "https://store.shopping.yahoo.co.jp/signcity-yshop/160115.html";

type Item = {
  id: string;
  imgId?: string;
  name: string;
  col1: string;
  col2: string;
  col3: string;
  url: string;
};

const GRANCART_ITEMS: Item[] = [
  {
    id: "160109",
    name: "グランカート サイレント サイドハンドルタイプ TPX-710",
    col1: "サイレント・サイドハンドル",
    col2: "718×468mm／均等荷重200kg／騒音値32dB",
    col3: "店舗・施設・小規模倉庫の静音搬送",
    url: `https://store.shopping.yahoo.co.jp/signcity-yshop/160109.html${YQ}`,
  },
  {
    id: "160110",
    name: "グランカート サイレント サイドハンドルタイプ TPX-810",
    col1: "サイレント・サイドハンドル",
    col2: "800×535mm／均等荷重300kg／騒音値32dB",
    col3: "倉庫・館内搬送・長尺箱に",
    url: `https://store.shopping.yahoo.co.jp/signcity-yshop/160110.html${YQ}`,
  },
  {
    id: "160111",
    name: "グランカート サイレント サイドハンドルタイプ TPX-910",
    col1: "サイレント・サイドハンドル",
    col2: "900×605mm／均等荷重400kg／低騒音（値は商品ページで確認）",
    col3: "大きめの箱・資材搬送に",
    url: `https://store.shopping.yahoo.co.jp/signcity-yshop/160111.html${YQ}`,
  },
  {
    id: "160105",
    name: "グランカート サイドハンドルタイプ TP-810",
    col1: "通常・サイドハンドル",
    col2: "800×535mm／均等荷重300kg／騒音値55.3dB",
    col3: "倉庫・工場の一般運搬に",
    url: `https://store.shopping.yahoo.co.jp/signcity-yshop/160105.html${YQ}`,
  },
  {
    id: "160106",
    name: "グランカート サイドハンドルタイプ TP-910",
    col1: "通常・サイドハンドル",
    col2: "900×605mm／均等荷重400kg／騒音値59.3dB",
    col3: "大型荷物・資材搬送に",
    url: `https://store.shopping.yahoo.co.jp/signcity-yshop/160106.html${YQ}`,
  },
  {
    id: "218373",
    name: "グランカートサイレント サイドハンドル 800×535 ストッパー付 TPX-810S",
    col1: "サイレント・ストッパー付",
    col2: "800×535mm／均等荷重300kg目安",
    col3: "積み下ろし・仮置きが多い現場に",
    url: `https://store.shopping.yahoo.co.jp/signcity-yshop/218373.html${YQ}`,
  },
];

const GRANCART_COMPARE = [
  { id: "160109", name: "TPX-710", type: "サイレント・サイドハンドル", size: "718×468mm", load: "200kg", silent: "◎（32dB）", stopper: "なし", use: "店舗・施設・小規模倉庫", url: `https://store.shopping.yahoo.co.jp/signcity-yshop/160109.html${YQ}` },
  { id: "160110", name: "TPX-810", type: "サイレント・サイドハンドル", size: "800×535mm", load: "300kg", silent: "◎（32dB）", stopper: "なし", use: "倉庫・館内搬送・長尺箱", url: `https://store.shopping.yahoo.co.jp/signcity-yshop/160110.html${YQ}` },
  { id: "160111", name: "TPX-910", type: "サイレント・サイドハンドル", size: "900×605mm", load: "400kg", silent: "◎（値は商品ページで確認）", stopper: "なし", use: "大きめの箱・資材搬送", url: `https://store.shopping.yahoo.co.jp/signcity-yshop/160111.html${YQ}` },
  { id: "160105", name: "TP-810", type: "通常・サイドハンドル", size: "800×535mm", load: "300kg", silent: "（55.3dB）", stopper: "なし", use: "倉庫・工場の一般運搬", url: `https://store.shopping.yahoo.co.jp/signcity-yshop/160105.html${YQ}` },
  { id: "160106", name: "TP-910", type: "通常・サイドハンドル", size: "900×605mm", load: "400kg", silent: "（59.3dB）", stopper: "なし", use: "大型荷物・資材搬送", url: `https://store.shopping.yahoo.co.jp/signcity-yshop/160106.html${YQ}` },
  { id: "218373", name: "TPX-810S", type: "サイレント・ストッパー付", size: "800×535mm", load: "300kg目安", silent: "◎", stopper: "あり", use: "積み下ろし・仮置きが多い現場", url: `https://store.shopping.yahoo.co.jp/signcity-yshop/218373.html${YQ}` },
  { id: "159891", name: "TP702CHBA", type: "固定ハンドル＋ボックス付", size: "718×468mm系", load: "200kg系", silent: "（商品ページで確認）", stopper: "なし", use: "小物・部品・工具の運搬", url: `https://store.shopping.yahoo.co.jp/signcity-yshop/159891.html${YQ}` },
];

const CARTS: Item[] = [
  {
    id: "167468",
    name: "カルティオ 新型 ブラック MPK-780-BK",
    col1: "通常台車",
    col2: "小口・軽量物の水平運搬",
    col3: "標準的な運搬。軽量・静音",
    url: "https://store.shopping.yahoo.co.jp/signcity-yshop/167468.html",
  },
  {
    id: "190479",
    name: "カルティオ 新型 ブルー MPK-780-B",
    col1: "通常台車",
    col2: "小口・軽量物の水平運搬",
    col3: "色分け運用に",
    url: "https://store.shopping.yahoo.co.jp/signcity-yshop/190479.html",
  },
  {
    id: "190475",
    name: "カルティオ 新型 ブラック スチールストッパー付 MPK780BKSS",
    col1: "通常台車（ストッパー付）",
    col2: "積み下ろし時に停止保持",
    col3: "停車作業が多い現場に",
    url: "https://store.shopping.yahoo.co.jp/signcity-yshop/190475.html",
  },
];

const WAGONS: Item[] = [
  {
    id: "bdw672",
    imgId: "bdw672yg",
    name: "TRUSCO バーディワゴン 750×500×H600 2段 ホワイト BDW-672-W",
    col1: "ツールワゴン（2段）",
    col2: "工具・部品の整理移動",
    col3: "標準サイズの2段ワゴン",
    url: "https://item.rakuten.co.jp/crecote-shop/ta005289-bdw672w/",
  },
  {
    id: "bdw763",
    imgId: "bdw763yg",
    name: "TRUSCO バーディワゴン 600×400×H740 3段 ホワイト BDW-763-W",
    col1: "ツールワゴン（3段）",
    col2: "細かな部品・工具を段で分けたい",
    col3: "コンパクトな3段ワゴン",
    url: "https://item.rakuten.co.jp/crecote-shop/ta005293-bdw763w/",
  },
  {
    id: "bdw692",
    imgId: "bdw773w",
    name: "TRUSCO バーディワゴン 900×600×H600 2段 ホワイト BDW-692-W",
    col1: "ツールワゴン（2段・大型）",
    col2: "大きめの工具・作業用品の整理移動",
    col3: "広い天板の2段ワゴン",
    url: "https://item.rakuten.co.jp/crecote-shop/ta005291-bdw692w/",
  },
];

const MATS: Item[] = [
  {
    id: "158664",
    name: "TRUSCO 足腰マット（厚さ17mm）黒 450×600mm TAM-4560-17",
    col1: "足腰マット（小）",
    col2: "450×600mm／厚17mm",
    col3: "作業位置に合わせて置きやすい小サイズ",
    url: `https://store.shopping.yahoo.co.jp/signcity-yshop/158664.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=`,
  },
  {
    id: "158666",
    name: "TRUSCO 足腰マット（厚さ17mm）黒 450×1200mm TAM-4512-17",
    col1: "足腰マット（中）",
    col2: "450×1200mm／厚17mm",
    col3: "作業台前などの中サイズ",
    url: `https://store.shopping.yahoo.co.jp/signcity-yshop/158666.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=`,
  },
  {
    id: "158667",
    name: "TRUSCO 足腰マット（厚さ17mm）黒 450×1500mm TAM-4515-17",
    col1: "足腰マット（長）",
    col2: "450×1500mm／厚17mm",
    col3: "長めの立ち作業ラインに",
    url: `https://store.shopping.yahoo.co.jp/signcity-yshop/158667.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=`,
  },
];

const TYPE_TABLE = [
  { kind: "サイドハンドル台車", feat: "横側から押せる", goods: "長尺物、大きめの箱、資材", cart: "グランカート" },
  { kind: "板物搬送台車", feat: "板物・長物板を立てかけて運びやすい", goods: "アルミ複合板、板材、パネル", cart: "イタチ" },
  { kind: "通常の平台車・固定ハンドル台車", feat: "一般的な段ボールや備品移動に使いやすい", goods: "箱物、備品、小口荷物", cart: "カルティオ、グランカート" },
  { kind: "ツールワゴン", feat: "工具や部品を整理して移動できる", goods: "工具、部品、作業用品", cart: "バーディワゴン" },
];

const SITE_TABLE = [
  { site: "倉庫・物流", goods: "長尺商品、箱物、梱包資材", cart: "グランカート サイドハンドル", related: "足腰マット" },
  { site: "店舗・施設", goods: "納品箱、備品、什器", cart: "グランカートサイレント", related: "カルティオ" },
  { site: "工場", goods: "部材、工具箱、資材", cart: "グランカート、バーディワゴン", related: "足腰マット" },
  { site: "看板製作", goods: "板材、パネル、長尺材", cart: "イタチ、グランカート", related: "既存の板物運搬記事へ" },
  { site: "イベント", goods: "パネル、什器、備品", cart: "グランカート、カルティオ", related: "運搬台車一覧" },
];

const SILENT_TABLE = [
  { kind: "グランカート サイレント サイドハンドル", feat: "走行音を抑えやすい", site: "店舗、施設、夜間作業、地下搬送", check: "騒音値・キャスター径", model: "TPX-710／TPX-810／TPX-910" },
  { kind: "グランカート サイドハンドル 通常タイプ", feat: "堅牢な樹脂台車", site: "倉庫、工場、物流", check: "均等荷重・荷台サイズ", model: "TP-810／TP-910" },
  { kind: "グランカート ストッパー付き", feat: "停止作業に便利", site: "積み下ろし、仕分け、仮置き", check: "ストッパーの操作性・床面", model: "TPX-810S" },
  { kind: "グランカート 固定ハンドル付", feat: "小物や箱物の運搬", site: "工場、倉庫、作業場", check: "ボックス容量・荷台", model: "TP702CHBA" },
];

const ITACHI_TABLE = [
  { axis: "主な用途", itachi: "板物・長物板の搬送", grancart: "長尺物・箱物・資材の搬送" },
  { axis: "荷物の載せ方", itachi: "立てかけ・すくい板で支える", grancart: "荷台に平積み" },
  { axis: "向いている現場", itachi: "看板製作、板材加工、資材置き場", grancart: "倉庫、店舗、工場、施設" },
  { axis: "商品選定の軸", itachi: "板材の形状・安定性", grancart: "荷台サイズ・静音性・ストッパー" },
];

const FAIL_TABLE = [
  { fail: "長尺物なら何でもサイドハンドル台車でよいと思う", problem: "板物は安定しにくい場合がある", fix: "板物中心ならイタチも検討" },
  { fail: "荷台サイズを確認しない", problem: "荷物が大きくはみ出す", fix: "荷物の長さ・幅を確認" },
  { fail: "静音性を見落とす", problem: "店舗・施設・夜間作業で音が気になる", fix: "サイレントタイプを検討" },
  { fail: "ストッパーを見落とす", problem: "積み下ろし時に台車が動きやすい", fix: "停止作業が多ければストッパー付き" },
  { fail: "通路幅を確認しない", problem: "曲がり角やエレベーターで通れない", fix: "使用場所の寸法を確認" },
  { fail: "板物搬送と箱物搬送を混同する", problem: "用途に合わない台車を選ぶ", fix: "イタチとグランカートを使い分ける" },
  { fail: "作業環境を見直さない", problem: "足腰への負担が残る", fix: "足腰マットやワゴンも併用検討" },
];

const CHECKLIST = [
  { item: "荷物の種類", detail: "板物、長尺物、箱物、工具、部品のどれか" },
  { item: "荷物のサイズ", detail: "長さ・幅・高さを確認したか" },
  { item: "荷物の重さ", detail: "台車の均等荷重に余裕があるか" },
  { item: "荷物の載せ方", detail: "立てかけるか、平積みするか" },
  { item: "使用場所", detail: "倉庫、店舗、工場、屋内施設、看板製作現場など" },
  { item: "通路幅", detail: "台車が曲がれる幅があるか" },
  { item: "床面", detail: "平滑か、段差や凹凸があるか" },
  { item: "静音性", detail: "騒音を抑えたい現場か" },
  { item: "停止作業", detail: "ストッパー付きが必要か" },
  { item: "関連備品", detail: "カルティオ、バーディワゴン、足腰マットも必要か" },
];

const FAQ_ITEMS = [
  {
    q: "サイドハンドル台車とは何ですか？",
    a: "サイドハンドル台車とは、荷台の横側にハンドルが付いた台車です。長尺物や大きめの箱を載せたときに、荷物の向きに合わせて押しやすい点が特徴です。",
  },
  {
    q: "グランカートのサイドハンドルタイプはどんな荷物に向いていますか？",
    a: "長尺商品、箱物、梱包資材、施設内の納品物、工場や倉庫の資材移動に向いています。サイレントタイプは、走行音を抑えたい店舗・施設・夜間作業でも検討しやすいです。",
  },
  {
    q: "板物搬送台車イタチとグランカートはどう違いますか？",
    a: "イタチは板材や長物板を立てかけて運びたい場合に向きます。グランカートは、箱物や長尺商品を荷台に載せて運ぶ用途に向いています。板物やアルミ複合板の詳しい運搬方法は、板物運搬の記事もあわせてご確認ください。",
  },
  {
    q: "サイレントタイプは必要ですか？",
    a: "店舗、施設、オフィス、夜間作業、地下搬送など、走行音が気になりやすい現場ではサイレントタイプが候補になります。TPX-710やTPX-810は騒音値32dBの仕様として紹介されています。",
  },
  {
    q: "ストッパー付きは選んだ方がよいですか？",
    a: "積み下ろし中に台車を止めたい現場ではストッパー付きが便利です。ただし、ストッパーがあればどこでも安全というわけではないため、床面やメーカーの注意事項、社内ルールに沿って使用してください。",
  },
  {
    q: "サイドハンドル台車と一緒にそろえたい用品はありますか？",
    a: "小口荷物にはカルティオ、工具や部品管理にはバーディワゴン、立ち作業や梱包作業が多い場所には足腰マットも検討できます。現場の運搬作業全体を見直すと、台車だけでは解決できない作業負担にも対応しやすくなります。",
  },
];

function CTA({ href, children }: { href: string; children: ReactNode }) {
  return (
    <div className="my-6">
      <a
        href={href}
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
        href={href}
        target="_blank"
        rel="nofollow noopener noreferrer"
        className="block w-full rounded-lg bg-gray-900 px-6 py-6 text-center text-lg font-bold text-white shadow-lg transition-colors hover:bg-gray-700"
      >
        {children}
      </a>
    </div>
  );
}

function ProductCard({ item }: { item: Item }) {
  const imgId = item.imgId ?? item.id;
  return (
    <a
      href={u(item.url)}
      target="_blank"
      rel="nofollow noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white transition hover:shadow-md"
    >
      <div className="aspect-square w-full overflow-hidden bg-gray-50">
        <img
          src={productImage(imgId)}
          alt={item.name}
          loading="lazy"
          className="h-full w-full object-contain p-2 transition group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-3">
        <p className="text-sm font-medium leading-snug text-gray-900">
          {item.name}
        </p>
        <p className="mt-1 text-xs text-gray-600">
          {item.col1}／{item.col2}
        </p>
        <p className="mt-1 flex-1 text-xs leading-relaxed text-gray-600">
          {item.col3}
        </p>
        <span className="mt-2 inline-block rounded bg-gray-900 px-3 py-1 text-center text-sm font-semibold text-white">
          商品ページを見る
        </span>
      </div>
    </a>
  );
}

function ProductGrid({ items }: { items: Item[] }) {
  return (
    <div className="my-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
      {items.map((item) => (
        <ProductCard key={`${item.id}-${item.name}`} item={item} />
      ))}
    </div>
  );
}

function ProductThumbLink({ id, href }: { id: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white p-1.5 transition hover:shadow-sm"
    >
      <img
        src={productImage(id)}
        alt=""
        loading="lazy"
        className="h-12 w-12 shrink-0 object-contain"
      />
      <span className="rounded bg-gray-900 px-2 py-1 text-xs font-semibold text-white">
        商品ページ
      </span>
    </a>
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
      <main className="mx-auto max-w-4xl px-4 py-10">
        <nav className="mb-4 text-sm text-gray-500">
          <Link href="/" className="hover:underline">
            ホーム
          </Link>
          <span className="mx-1">/</span>
          <span>倉庫・物流</span>
          <span className="mx-1">/</span>
          <span className="text-gray-700">サイドハンドル台車の選び方</span>
        </nav>

        <span className="mb-3 inline-block rounded bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-800">
          選び方ガイド
        </span>

        <h1 className={cls.h1}>
          サイドハンドル台車とは？長尺物・箱物を運びやすいグランカート・板物搬送台車の選び方
        </h1>

        <p className="mb-6 text-sm text-gray-500">
          公開日：2026年7月4日／約13分で読めます
        </p>

        <div className="my-8 rounded-lg border border-gray-300 bg-gray-100 p-5 leading-relaxed">
          <p className="mb-2 font-bold">サイドハンドル台車とは（要点）</p>
          <p className={cls.body.replace("mb-4 ", "")}>
            サイドハンドル台車とは、荷台の短辺側ではなく横側にハンドルが付いた台車です。長尺物や大きめの箱を載せたときに、荷物の向きに合わせて押しやすく、倉庫・店舗・施設・工場などでの運搬に使いやすいタイプです。長尺商品や箱物を運ぶならグランカートのサイドハンドルタイプ、静音性を重視するならグランカートサイレント、板材や長物板を立てかけて運びたい場合は板物搬送台車イタチも候補になります。選ぶ際は、荷物の長さ・重さ・幅、通路幅、床面、騒音への配慮、ストッパーの有無、保管場所を確認しましょう。
          </p>
        </div>

        <ArticleImg
          src={`${ARTICLE_IMG}/hero.jpg`}
          alt="サイドハンドル台車で長尺の箱物を運搬するイメージ"
        />

        <CTA href={u(GRANCART_ITEMS[1].url)}>
          長尺物・箱物の運搬に便利なグランカート サイドハンドルタイプを確認する
        </CTA>

        <H2>サイドハンドル台車とは？普通の台車との違い</H2>

        <ArticleImg
          src={`${ARTICLE_IMG}/standard-vs-side.jpg`}
          alt="普通の台車とサイドハンドル台車を比較するイメージ"
        />

        <H3>荷台の横側にハンドルがある運搬台車</H3>
        <p className={cls.body}>
          一般的な台車はハンドルが荷台の短辺側に付いていますが、サイドハンドル台車は荷台の横（長辺側）にハンドルが付いています。荷物を長い向きに載せたまま、横から押して進めるのが特徴です。
        </p>
        <H3>長尺物や大きめの箱を載せたときに押しやすい</H3>
        <p className={cls.body}>
          長尺物や大きめの箱を載せると、短辺側のハンドルでは荷物が前後にはみ出して押しにくくなります。サイドハンドルなら、荷物の向きに合わせて押せるため、長い荷物の取り回しがしやすくなります。
        </p>
        <H3>普通の固定ハンドル台車より荷物の向きに合わせやすい</H3>
        <p className={cls.body}>
          固定ハンドルの台車と比べて、荷物の長さや向きに合わせた押し方ができるため、通路や作業動線に合わせて運びやすくなります。
        </p>
        <H3>板物専用台車とは用途が少し違う</H3>
        <p className={cls.body}>
          板物を立てかけて運ぶ板物搬送台車とは用途が異なります。サイドハンドル台車は荷台に平積みして運ぶのが基本で、板材を立てて運びたい場合は板物搬送台車が向いています。
        </p>

        <div className="my-4 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border px-3 py-2">種類</th>
                <th className="border px-3 py-2">特徴</th>
                <th className="border px-3 py-2">向いている荷物</th>
                <th className="border px-3 py-2">主な商品導線</th>
              </tr>
            </thead>
            <tbody>
              {TYPE_TABLE.map((row) => (
                <tr key={row.kind}>
                  <td className="border px-3 py-2 font-semibold">{row.kind}</td>
                  <td className="border px-3 py-2">{row.feat}</td>
                  <td className="border px-3 py-2">{row.goods}</td>
                  <td className="border px-3 py-2">{row.cart}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <H2>サイドハンドル台車が向いている現場</H2>
        <H3>倉庫・物流現場｜長尺商品や大きな箱のピッキングに</H3>
        <p className={cls.body}>
          長尺商品や大きな箱をピッキングして運ぶ倉庫・物流現場では、横から押せるサイドハンドル台車が取り回しやすくなります。
        </p>
        <H3>店舗・施設｜館内搬送や納品作業に</H3>
        <p className={cls.body}>
          店舗や施設の館内搬送・納品作業では、走行音を抑えられるサイレントタイプが検討しやすくなります。
        </p>
        <H3>工場｜部材・資材・梱包箱の移動に</H3>
        <p className={cls.body}>
          工場での部材・資材・梱包箱の移動にも、荷物の向きに合わせて押せるサイドハンドル台車が便利です。
        </p>
        <H3>看板製作・資材加工｜長尺材や資材の移動に</H3>
        <p className={cls.body}>
          看板製作・資材加工では、長尺材や資材の移動に使えます。板材を立てて運びたい場合は板物搬送台車も候補になります。詳しくは
          <Link
            href="/articles/board-material-transport-cart"
            className="text-gray-900 underline hover:no-underline"
          >
            「板物の運搬に便利な台車とは？」
          </Link>
          の記事もご確認ください。
        </p>
        <H3>イベント・展示会｜什器・資材の搬入に</H3>
        <p className={cls.body}>
          イベントや展示会の什器・資材の搬入にも、長尺物や箱物をまとめて運べるサイドハンドル台車が役立ちます。
        </p>

        <div className="my-4 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border px-3 py-2">現場</th>
                <th className="border px-3 py-2">よく運ぶもの</th>
                <th className="border px-3 py-2">向いている台車</th>
                <th className="border px-3 py-2">関連商品</th>
              </tr>
            </thead>
            <tbody>
              {SITE_TABLE.map((row) => (
                <tr key={row.site}>
                  <td className="border px-3 py-2 font-semibold">{row.site}</td>
                  <td className="border px-3 py-2">{row.goods}</td>
                  <td className="border px-3 py-2">{row.cart}</td>
                  <td className="border px-3 py-2">{row.related}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <H2>グランカート サイドハンドルタイプの選び方</H2>
        <H3>荷物の大きさで700・800・900mmクラスを選ぶ</H3>
        <p className={cls.body}>
          グランカートは荷台サイズで700・800・900mmクラスがあります。運ぶ荷物の大きさに合わせて選ぶと、はみ出しを抑えて安定して運びやすくなります。
        </p>
        <H3>静音性を重視するならサイレントタイプ</H3>
        <p className={cls.body}>
          グランカートサイレントは、樹脂製の省音キャスターにより走行音を抑えた台車として案内されており、地下など音が共鳴しやすい場所での集配作業にも便利とされています。店舗・施設・夜間作業では、こうした静音タイプが検討しやすくなります。
        </p>
        <H3>重量物・大きな箱が多いなら大型サイズを検討する</H3>
        <p className={cls.body}>
          重量物や大きな箱が多い現場では、均等荷重400kgクラスの900mmサイズも候補になります。
        </p>
        <H3>停止作業が多いならストッパー付きを確認する</H3>
        <p className={cls.body}>
          積み下ろしや仮置きが多い現場では、ストッパー付きのタイプも確認しておくと便利です。
        </p>

        <ProductGrid items={GRANCART_ITEMS} />
        <CTA href={u(URL_GRANCART_LIST)}>
          グランカート販売一覧から、サイドハンドル・サイレント・ストッパー付きタイプを確認する
        </CTA>

        <H2>グランカート サイレントと通常タイプの違い</H2>

        <ArticleImg
          src={`${ARTICLE_IMG}/silent-indoor.jpg`}
          alt="静音タイプのサイドハンドル台車で館内搬送するイメージ"
        />

        <H3>サイレントタイプは走行音を抑えたい現場向き</H3>
        <p className={cls.body}>
          サイレントタイプは走行音を抑えやすく、店舗・施設・オフィス・夜間作業・地下搬送など、音への配慮が必要な現場に向いています。
        </p>
        <H3>通常タイプは堅牢性・汎用性を重視したい現場向き</H3>
        <p className={cls.body}>
          通常タイプは堅牢な樹脂台車で、倉庫・工場・物流など汎用的な運搬に向いています。
        </p>
        <H3>住宅地・店舗・オフィス・夜間作業では静音性も重要</H3>
        <p className={cls.body}>
          住宅地に近い現場や、店舗・オフィス・夜間作業では、周囲への配慮として静音性も選定の重要なポイントになります。
        </p>
        <H3>騒音値・キャスター径・荷台サイズを確認する</H3>
        <p className={cls.body}>
          通常タイプのTP-810は均等荷重300kg・騒音値55.3dB、TP-910は均等荷重400kg・騒音値59.3dBとして案内されています。一方、サイレントのTPX-710は均等荷重200kg・騒音値32dB、TPX-810は均等荷重300kg・騒音値32dBとして紹介されています。騒音値・キャスター径・荷台サイズを見比べて選んでください。
        </p>

        <div className="my-4 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border px-3 py-2">種類</th>
                <th className="border px-3 py-2">特徴</th>
                <th className="border px-3 py-2">向いている現場</th>
                <th className="border px-3 py-2">確認ポイント</th>
                <th className="border px-3 py-2">商品導線</th>
              </tr>
            </thead>
            <tbody>
              {SILENT_TABLE.map((row) => (
                <tr key={row.kind}>
                  <td className="border px-3 py-2 font-semibold">{row.kind}</td>
                  <td className="border px-3 py-2">{row.feat}</td>
                  <td className="border px-3 py-2">{row.site}</td>
                  <td className="border px-3 py-2">{row.check}</td>
                  <td className="border px-3 py-2">{row.model}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <H2>TRUSCOグランカート サイドハンドル比較表</H2>
        <div className="my-4 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border px-3 py-2">商品</th>
                <th className="border px-3 py-2">タイプ</th>
                <th className="border px-3 py-2">荷台サイズ目安</th>
                <th className="border px-3 py-2">均等荷重目安</th>
                <th className="border px-3 py-2">静音性</th>
                <th className="border px-3 py-2">ストッパー</th>
                <th className="border px-3 py-2">向いている用途</th>
                <th className="border px-3 py-2">商品ページ</th>
              </tr>
            </thead>
            <tbody>
              {GRANCART_COMPARE.map((row) => (
                <tr key={row.id}>
                  <td className="border px-3 py-2 font-semibold">{row.name}</td>
                  <td className="border px-3 py-2">{row.type}</td>
                  <td className="border px-3 py-2">{row.size}</td>
                  <td className="border px-3 py-2">{row.load}</td>
                  <td className="border px-3 py-2">{row.silent}</td>
                  <td className="border px-3 py-2">{row.stopper}</td>
                  <td className="border px-3 py-2">{row.use}</td>
                  <td className="border px-3 py-2">
                    <ProductThumbLink id={row.id} href={u(row.url)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <CTA href={u(URL_GRANCART_LIST)}>
          グランカート販売一覧から、サイレント・通常タイプ・ストッパー付きモデルを比較する
        </CTA>

        <H2>板物搬送台車「イタチ」とグランカートの違い</H2>

        <ArticleImg
          src={`${ARTICLE_IMG}/itachi.jpg`}
          alt="板物搬送台車で板材を立てかけて運ぶイメージ"
        />

        <H3>イタチは板物・長物板を立てかけて運びたい場合に向く</H3>
        <p className={cls.body}>
          板物搬送台車イタチ（ITA-1）は、板材や長物板を立てかけて運ぶための台車です。すくい板で板物を支え、φ200の固定車輪とφ75の補助車輪により、さまざまな形状の長物板を運べる製品として案内されています（均等荷重200kg、長さ900mm・幅580mm・高さ1300mm、すくい板470×125mm）。
        </p>
        <H3>グランカートは箱物・長尺商品・資材の平積み運搬に向く</H3>
        <p className={cls.body}>
          グランカートは、箱物や長尺商品、資材を荷台に平積みして運ぶ用途に向いています。
        </p>
        <H3>板材中心ならイタチ、箱物中心ならグランカートを検討</H3>
        <p className={cls.body}>
          運ぶものが板材中心ならイタチ、箱物や長尺商品中心ならグランカートというように、荷物の載せ方で選び分けると迷いにくくなります。
        </p>
        <H3>アルミ複合板や板材運搬の詳しい選び方は既存記事へ</H3>
        <p className={cls.body}>
          アルミ複合板や板材を安全に運ぶ台車選びの詳細は
          <Link
            href="/articles/board-material-transport-cart"
            className="text-gray-900 underline hover:no-underline"
          >
            「板物の運搬に便利な台車とは？」
          </Link>
          の記事で解説しています。
        </p>

        <div className="my-4 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border px-3 py-2">比較項目</th>
                <th className="border px-3 py-2">イタチ ITA-1</th>
                <th className="border px-3 py-2">グランカート サイドハンドル</th>
              </tr>
            </thead>
            <tbody>
              {ITACHI_TABLE.map((row) => (
                <tr key={row.axis}>
                  <td className="border px-3 py-2 font-semibold">{row.axis}</td>
                  <td className="border px-3 py-2">{row.itachi}</td>
                  <td className="border px-3 py-2">{row.grancart}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <CTA href={u(URL_ITACHI)}>
          板材や長物板を立てかけて運ぶなら、板物搬送台車イタチを確認する
        </CTA>

        <H2>サイドハンドル台車を選ぶときのチェックポイント</H2>
        <H3>荷物の長さ・幅・重さを確認する</H3>
        <p className={cls.body}>
          まず運ぶ荷物の長さ・幅・重さを確認し、荷台サイズと均等荷重に余裕があるかを見ます。
        </p>
        <H3>通路幅・曲がり角・エレベーター幅を確認する</H3>
        <p className={cls.body}>
          使用する通路幅・曲がり角・エレベーター幅を確認し、台車と荷物が通れるかを事前に把握しておきます。
        </p>
        <H3>床面が平滑か、段差や凹凸がないか確認する</H3>
        <p className={cls.body}>
          床面が平滑か、段差や凹凸がないかも確認しておくと、走行のしやすさや安全性の判断に役立ちます。
        </p>
        <H3>走行音を抑えたい現場ではサイレントタイプを検討する</H3>
        <p className={cls.body}>
          音への配慮が必要な現場では、サイレントタイプを検討します。
        </p>
        <H3>積み下ろし中に止めたい場合はストッパー付きも確認する</H3>
        <p className={cls.body}>
          積み下ろし中に台車を止めたい場合はストッパー付きも候補です。ただし床面やメーカーの注意事項、社内ルールに沿って使用してください。
        </p>
        <H3>作業者の足腰負担もあわせて見直す</H3>
        <p className={cls.body}>
          重量物の取扱いでは、台車の使用によって人力の負担を軽減することが基本とされています。台車だけでなく、立ち作業の足腰負担もあわせて見直すと、作業環境全体の改善につながります。
        </p>

        <H2>カルティオ・バーディワゴン・足腰マットとの使い分け</H2>

        <ArticleImg
          src={`${ARTICLE_IMG}/cart-wagon.jpg`}
          alt="運搬台車とツールワゴンを現場で使い分けるイメージ"
        />

        <H3>小口荷物や標準的な台車作業ならカルティオ</H3>
        <p className={cls.body}>
          小口荷物や標準的な運搬には、軽量・静音のカルティオが扱いやすい選択肢です。
        </p>
        <ProductGrid items={CARTS} />
        <CTA href={u(URL_CART_LIST)}>
          小口荷物や標準的な運搬には、カルティオをはじめとした運搬台車一覧を確認する
        </CTA>

        <H3>工具や部品を整理して運ぶならバーディワゴン</H3>
        <p className={cls.body}>
          工具や部品を段ごとに整理して運びたい場合は、ツールワゴンのバーディワゴンが便利です。
        </p>
        <ProductGrid items={WAGONS} />
        <CTA href={u(WAGONS[0].url)}>
          工具・部品・作業用品の整理移動には、TRUSCOバーディワゴンも確認する
        </CTA>

        <H3>立ち作業・梱包作業が多い場所には足腰マット</H3>
        <p className={cls.body}>
          立ち作業や梱包作業が多い場所では、足腰マットで足元の負担をやわらげることも検討できます。
        </p>

        <ArticleImg
          src={`${ARTICLE_IMG}/anti-fatigue-mat.jpg`}
          alt="台車作業と足腰マットを組み合わせた作業場のイメージ"
        />

        <ProductGrid items={MATS} />
        <CTA href={u(URL_MAT_LIST)}>
          立ち作業や梱包作業が多い場所には、足腰マットも確認する
        </CTA>

        <H3>運搬台車だけでなく作業環境全体で見直す</H3>
        <p className={cls.body}>
          台車だけでなく、ワゴンや足腰マットも含めて作業環境全体を見直すことで、運搬・仕分け・立ち作業の負担をまとめて軽減しやすくなります。
        </p>

        <H2>サイドハンドル台車選びでよくある失敗</H2>
        <div className="my-4 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border px-3 py-2">失敗</th>
                <th className="border px-3 py-2">起こりやすい問題</th>
                <th className="border px-3 py-2">対策</th>
              </tr>
            </thead>
            <tbody>
              {FAIL_TABLE.map((row) => (
                <tr key={row.fail}>
                  <td className="border px-3 py-2 font-semibold">{row.fail}</td>
                  <td className="border px-3 py-2">{row.problem}</td>
                  <td className="border px-3 py-2">{row.fix}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <H2>購入前チェックリスト</H2>
        <div className="my-4 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border px-3 py-2">チェック項目</th>
                <th className="border px-3 py-2">確認内容</th>
              </tr>
            </thead>
            <tbody>
              {CHECKLIST.map((row) => (
                <tr key={row.item}>
                  <td className="border px-3 py-2 font-semibold">{row.item}</td>
                  <td className="border px-3 py-2">{row.detail}</td>
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

        <div className="mt-12 rounded-lg border border-gray-300 bg-gray-50 p-6">
          <h2 className={cls.ctaH3}>
            現場や倉庫などで必須な作業用品が全て揃います！
          </h2>
          <p className={cls.body}>
            サイドハンドル台車・グランカート・イタチ・カルティオ・バーディワゴン・足腰マットまで、現場の状況に合わせてまとめて確認できます。用途に応じて選ぶことが重要です。
          </p>
          <FinalCTA href={u(URL_TRUSCO_LIST)}>
            トラスコ中山一覧から、運搬台車・ツールワゴン・足腰マットをまとめて確認する
          </FinalCTA>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </main>
      <SiteFooter />
    </>
  );
}
