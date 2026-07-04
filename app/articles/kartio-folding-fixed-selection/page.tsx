import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";

const SLUG = "kartio-folding-fixed-selection";
const SITE_URL = "https://sagyou-navi.com";
const ARTICLE_IMG = "/images/articles/kartio-folding-fixed-selection";

export const metadata: Metadata = {
  title:
    "カルティオは折りたたみ・固定どっちを選ぶ？ストッパー付き・ビッグ・ミニの使い分け｜作業用品ナビ",
  description:
    "カルティオの折りたたみハンドル・固定ハンドル・ストッパー付きの違いを解説。通常カルティオ、カルティオビッグ、カルティオミニweego、オフロード仕様の使い分けを、倉庫・工場・店舗バックヤード・施設管理など現場別にわかりやすく紹介します。",
  alternates: { canonical: `${SITE_URL}/articles/${SLUG}` },
  openGraph: {
    title:
      "カルティオは折りたたみ・固定どっちを選ぶ？ストッパー付き・ビッグ・ミニの使い分け",
    description:
      "カルティオの折りたたみハンドル・固定ハンドル・ストッパー付きの違いを解説。通常カルティオ、カルティオビッグ、カルティオミニweego、オフロード仕様の使い分けを現場別に紹介します。",
    type: "article",
    images: [`${ARTICLE_IMG}/hero.jpg`],
  },
};

const UTM = "utm_source=sagyou_navi";
const YQ = "?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=";
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

const URL_CART_LIST =
  "https://store.shopping.yahoo.co.jp/signcity-yshop/b1bfc8c2c2.html";
const URL_SAFETYSHOES_LIST =
  "https://store.shopping.yahoo.co.jp/signcity-yshop/b0c2c1b4b7.html?b=91&view=grid";
const URL_TRUSCO_LIST =
  "https://store.shopping.yahoo.co.jp/signcity-yshop/a5c8a5e9a5.html#sideNaviItems";

type Item = {
  id: string;
  name: string;
  col1: string;
  col2: string;
  col3: string;
  url: string;
};

const FOLDING_ITEMS: Item[] = [
  {
    id: "167468",
    name: "カルティオ 新型 ブラック MPK-780-BK",
    col1: "通常サイズ（折りたたみ）",
    col2: "均等荷重200kg／質量6.8kg／騒音値35.5dB",
    col3: "標準的な運搬。使わない時は省スペース保管",
    url: "https://store.shopping.yahoo.co.jp/signcity-yshop/167468.html",
  },
  {
    id: "190479",
    name: "カルティオ 新型 ブルー MPK-780-B",
    col1: "通常サイズ（折りたたみ）",
    col2: "均等荷重200kg／質量6.8kg",
    col3: "色分け運用や複数拠点への配備に",
    url: "https://store.shopping.yahoo.co.jp/signcity-yshop/190479.html",
  },
  {
    id: "159757",
    name: "カルティオビッグ 折りたたみハンドル ブラック MPK-906-BK",
    col1: "大型（折りたたみ）",
    col2: "均等荷重400kg／荷台900×620mm／質量約13.5kg",
    col3: "大型荷物を運び、保管時は省スペースにしたい",
    url: `https://store.shopping.yahoo.co.jp/signcity-yshop/159757.html${YQ}`,
  },
  {
    id: "216708",
    name: "カルティオビッグ 折畳 900×600 ストッパー付 黒 MPK-906-BK-S",
    col1: "大型（折りたたみ・ストッパー付）",
    col2: "均等荷重400kg／荷台900×620mm",
    col3: "大型荷物の積み下ろし時に台車を止めたい",
    url: `https://store.shopping.yahoo.co.jp/signcity-yshop/216708.html${YQ}`,
  },
  {
    id: "216713",
    name: "カルティオビッグ 折畳 900×600 ストッパー付 オリーブ MPK-906-OG-S",
    col1: "大型（折りたたみ・ストッパー付）",
    col2: "均等荷重400kg／荷台900×620mm",
    col3: "色分け管理・屋内外の備品管理に",
    url: `https://store.shopping.yahoo.co.jp/signcity-yshop/216713.html${YQ}`,
  },
];

const FIXED_ITEMS: Item[] = [
  {
    id: "159749",
    name: "カルティオビッグ 固定ハンドルタイプ ブラック MPK-900-BK",
    col1: "大型（固定ハンドル）",
    col2: "均等荷重400kg／荷台900×620mm",
    col3: "工場・倉庫・出荷場で常時使う定位置運用に",
    url: `https://store.shopping.yahoo.co.jp/signcity-yshop/159749.html${YQ}`,
  },
  {
    id: "159750",
    name: "カルティオビッグ 固定ハンドルタイプ ブルー MPK-900-B",
    col1: "大型（固定ハンドル）",
    col2: "均等荷重400kg／荷台900×620mm",
    col3: "色分けや現場ごとの使い分けに",
    url: `https://store.shopping.yahoo.co.jp/signcity-yshop/159750.html${YQ}`,
  },
  {
    id: "216706",
    name: "カルティオビッグ 固定 900×600 ストッパー付 青 MPK-900-B-S",
    col1: "大型（固定・ストッパー付）",
    col2: "均等荷重400kg／荷台900×620mm",
    col3: "定位置で積み下ろしが多い現場に",
    url: `https://store.shopping.yahoo.co.jp/signcity-yshop/216706.html${YQ}`,
  },
];

const STOPPER_ITEMS: Item[] = [
  {
    id: "190475",
    name: "カルティオ 新型 ブラック スチールストッパー付 MPK780BKSS",
    col1: "通常サイズ（ストッパー付）",
    col2: "均等荷重200kg",
    col3: "通常サイズで積み下ろし時に止めたい現場に",
    url: "https://store.shopping.yahoo.co.jp/signcity-yshop/190475.html",
  },
  {
    id: "190476",
    name: "カルティオ 新型 オリーブ スチールストッパー付 MPK780ODSS",
    col1: "通常サイズ（ストッパー付）",
    col2: "均等荷重200kg",
    col3: "色分け運用＋停止保持したい現場に",
    url: "https://store.shopping.yahoo.co.jp/signcity-yshop/190476.html",
  },
  {
    id: "216708",
    name: "カルティオビッグ 折畳 ストッパー付 黒 MPK-906-BK-S",
    col1: "大型（折りたたみ・ストッパー付）",
    col2: "均等荷重400kg",
    col3: "大型荷物の積み下ろし時に止めたい",
    url: `https://store.shopping.yahoo.co.jp/signcity-yshop/216708.html${YQ}`,
  },
  {
    id: "216713",
    name: "カルティオビッグ 折畳 ストッパー付 オリーブ MPK-906-OG-S",
    col1: "大型（折りたたみ・ストッパー付）",
    col2: "均等荷重400kg",
    col3: "屋内外の備品管理・色分けに",
    url: `https://store.shopping.yahoo.co.jp/signcity-yshop/216713.html${YQ}`,
  },
  {
    id: "216706",
    name: "カルティオビッグ 固定 ストッパー付 青 MPK-900-B-S",
    col1: "大型（固定・ストッパー付）",
    col2: "均等荷重400kg",
    col3: "定位置で積み下ろしが多い現場に",
    url: `https://store.shopping.yahoo.co.jp/signcity-yshop/216706.html${YQ}`,
  },
];

const BIG_ITEMS: Item[] = [
  {
    id: "159757",
    name: "MPK-906-BK",
    col1: "折りたたみハンドル",
    col2: "ストッパーなし",
    col3: "大型荷物を運び、保管時は省スペースにしたい",
    url: `https://store.shopping.yahoo.co.jp/signcity-yshop/159757.html${YQ}`,
  },
  {
    id: "216708",
    name: "MPK-906-BK-S",
    col1: "折りたたみハンドル",
    col2: "ストッパーあり",
    col3: "大型荷物の積み下ろし時に台車を止めたい",
    url: `https://store.shopping.yahoo.co.jp/signcity-yshop/216708.html${YQ}`,
  },
  {
    id: "216713",
    name: "MPK-906-OG-S",
    col1: "折りたたみハンドル",
    col2: "ストッパーあり",
    col3: "色分け管理・屋内外の備品管理に使いたい",
    url: `https://store.shopping.yahoo.co.jp/signcity-yshop/216713.html${YQ}`,
  },
  {
    id: "159749",
    name: "MPK-900-BK",
    col1: "固定ハンドル",
    col2: "ストッパーなし",
    col3: "工場・倉庫で常時使う定位置運用",
    url: `https://store.shopping.yahoo.co.jp/signcity-yshop/159749.html${YQ}`,
  },
  {
    id: "159750",
    name: "MPK-900-B",
    col1: "固定ハンドル",
    col2: "ストッパーなし",
    col3: "色分けや現場ごとの使い分けに",
    url: `https://store.shopping.yahoo.co.jp/signcity-yshop/159750.html${YQ}`,
  },
  {
    id: "216706",
    name: "MPK-900-B-S",
    col1: "固定ハンドル",
    col2: "ストッパーあり",
    col3: "定位置で積み下ろしが多い現場に",
    url: `https://store.shopping.yahoo.co.jp/signcity-yshop/216706.html${YQ}`,
  },
  {
    id: "159780",
    name: "MPK-906N-OR-BK",
    col1: "オフロード",
    col2: "商品仕様確認",
    col3: "屋外・凹凸路面向け（詳細は既存記事へ）",
    url: `https://store.shopping.yahoo.co.jp/signcity-yshop/159780.html${YQ}`,
  },
  {
    id: "159781",
    name: "MPK-906N-OR-OG",
    col1: "オフロード",
    col2: "商品仕様確認",
    col3: "屋外・凹凸路面向け（オリーブ／詳細は既存記事へ）",
    url: `https://store.shopping.yahoo.co.jp/signcity-yshop/159781.html${YQ}`,
  },
  {
    id: "216710",
    name: "MPK-906F2J-B",
    col1: "フラット・4輪自在",
    col2: "商品仕様確認",
    col3: "方向転換や狭い通路での取り回し",
    url: `https://store.shopping.yahoo.co.jp/signcity-yshop/216710.html${YQ}`,
  },
  {
    id: "216714",
    name: "MPK-SA906-BK",
    col1: "電動センシングアシスト",
    col2: "商品仕様確認",
    col3: "重量物運搬の負担軽減を検討する現場",
    url: `https://store.shopping.yahoo.co.jp/signcity-yshop/216714.html${YQ}`,
  },
];

const STANDARD_ITEMS: Item[] = [
  {
    id: "167468",
    name: "カルティオ 新型 ブラック MPK-780-BK",
    col1: "通常サイズ",
    col2: "均等荷重200kg／質量6.8kg／35.5dB",
    col3: "軽さと静音性を重視した標準運搬",
    url: "https://store.shopping.yahoo.co.jp/signcity-yshop/167468.html",
  },
  {
    id: "190479",
    name: "カルティオ 新型 ブルー MPK-780-B",
    col1: "通常サイズ",
    col2: "均等荷重200kg／質量6.8kg",
    col3: "色分け運用に",
    url: "https://store.shopping.yahoo.co.jp/signcity-yshop/190479.html",
  },
  {
    id: "190475",
    name: "カルティオ 新型 ブラック スチールストッパー付 MPK780BKSS",
    col1: "通常サイズ（ストッパー付）",
    col2: "均等荷重200kg",
    col3: "積み下ろし時に止めたい現場に",
    url: "https://store.shopping.yahoo.co.jp/signcity-yshop/190475.html",
  },
  {
    id: "190476",
    name: "カルティオ 新型 オリーブ スチールストッパー付 MPK780ODSS",
    col1: "通常サイズ（ストッパー付）",
    col2: "均等荷重200kg",
    col3: "色分け＋停止保持したい現場に",
    url: "https://store.shopping.yahoo.co.jp/signcity-yshop/190476.html",
  },
];

const MINI_ITEMS: Item[] = [
  {
    id: "159715",
    name: "カルティオミニweego 伸縮折りたたみハンドル ピンク WP-2G-P",
    col1: "小型（伸縮折りたたみ）",
    col2: "均等荷重100kg／465×390mm／質量2.92kg",
    col3: "店舗・オフィス・狭いバックヤードの小口運搬",
    url: "https://store.shopping.yahoo.co.jp/signcity-yshop/159715.html",
  },
  {
    id: "159718",
    name: "カルティオミニweego 伸縮折畳みハンドル ブラック WP-2G-BK-JS",
    col1: "小型（伸縮折りたたみ）",
    col2: "均等荷重100kg／465×390mm／質量2.92kg",
    col3: "複数部署での共用・軽量小型運搬に",
    url: "https://store.shopping.yahoo.co.jp/signcity-yshop/159718.html",
  },
];

const SHOE_ITEMS: Item[] = [
  {
    id: "155406",
    name: "ニューバランス 安全スニーカー 紐タイプ",
    col1: "安全靴",
    col2: "台車作業の足元保護",
    col3: "サイズ・規格は商品ページで確認",
    url: "https://store.shopping.yahoo.co.jp/signcity-yshop/155406.html",
  },
  {
    id: "155335",
    name: "ニューバランス 安全スニーカー BOAタイプ",
    col1: "安全靴",
    col2: "台車作業の足元保護",
    col3: "サイズ・規格は商品ページで確認",
    url: "https://store.shopping.yahoo.co.jp/signcity-yshop/155335.html",
  },
  {
    id: "155361",
    name: "ニューバランス 安全スニーカー 面ファスナータイプ",
    col1: "安全靴",
    col2: "台車作業の足元保護",
    col3: "サイズ・規格は商品ページで確認",
    url: "https://store.shopping.yahoo.co.jp/signcity-yshop/155361.html",
  },
  {
    id: "155329",
    name: "ニューバランス 安全スニーカー BOAタイプ（色/サイズ違い）",
    col1: "安全靴",
    col2: "台車作業の足元保護",
    col3: "サイズ・規格は商品ページで確認",
    url: "https://store.shopping.yahoo.co.jp/signcity-yshop/155329.html",
  },
];

const STOPPER_TABLE = [
  { scene: "倉庫のピッキング", rec: "おすすめ", reason: "荷物の積み下ろし中に台車を止めやすい" },
  { scene: "店舗バックヤード", rec: "おすすめ", reason: "狭い場所で台車が動くのを抑えやすい" },
  { scene: "イベント搬入", rec: "場所による", reason: "平坦な屋内なら便利、屋外凹凸路面では注意" },
  { scene: "工場の定位置運用", rec: "おすすめ", reason: "作業台横での仮置きに使いやすい" },
  { scene: "完全に平坦な短距離移動", rec: "必須ではない", reason: "コスト・重量とのバランスで判断" },
];

const SIZE_TABLE = [
  {
    kind: "カルティオ",
    size: "約780×490mm",
    load: "均等荷重200kg目安",
    site: "倉庫・店舗・施設・工場の標準運搬",
    storage: "折りたたみで省スペース",
  },
  {
    kind: "カルティオビッグ",
    size: "約900×620mm",
    load: "均等荷重400kg目安",
    site: "大型段ボール・資材・工場・物流倉庫",
    storage: "折りたたみ／固定を選べる",
  },
  {
    kind: "カルティオミニweego",
    size: "約465×390mm",
    load: "均等荷重100kg目安",
    site: "店舗・オフィス・狭いバックヤード",
    storage: "伸縮ハンドルで最もコンパクト",
  },
  {
    kind: "カルティオビッグ オフロード",
    size: "約900×600mm系",
    load: "商品仕様による",
    site: "屋外・凹凸のある搬入路",
    storage: "詳細は既存オフロード記事へ",
  },
];

const FAIL_TABLE = [
  { fail: "耐荷重だけで選ぶ", problem: "荷物のサイズが荷台に合わない", fix: "荷台寸法も確認する" },
  { fail: "折りたたみだけで選ぶ", problem: "毎回ハンドルを出すのが手間になる", fix: "使用頻度が高い現場は固定も検討" },
  { fail: "固定ハンドルを選ぶ", problem: "保管場所を取りすぎる", fix: "保管スペースを事前確認" },
  { fail: "ストッパーなしを選ぶ", problem: "積み下ろし時に台車が動きやすい", fix: "停車作業が多いならストッパー付き" },
  { fail: "ビッグを選びすぎる", problem: "通路で取り回しにくい", fix: "通路幅・エレベーター幅を確認" },
  { fail: "ミニを選びすぎる", problem: "大型荷物が載らない", fix: "荷物サイズと重量を確認" },
  { fail: "オフロードを通常用途で選ぶ", problem: "過剰仕様になる場合がある", fix: "路面状況で判断する" },
  { fail: "安全靴を見落とす", problem: "足元リスクへの備えが不足する", fix: "運搬作業の備品として検討" },
];

const CHECKLIST = [
  { item: "荷物の重さ", detail: "通常カルティオで足りるか、ビッグが必要か" },
  { item: "荷物のサイズ", detail: "荷台寸法に収まるか" },
  { item: "使用頻度", detail: "毎日使うなら固定、たまに使うなら折りたたみも候補" },
  { item: "保管場所", detail: "折りたたみ収納が必要か" },
  { item: "通路幅", detail: "ビッグでも通れるか" },
  { item: "エレベーター・扉幅", detail: "搬入・移動経路に問題がないか" },
  { item: "床面", detail: "屋内平滑路面か、屋外・凹凸路面か" },
  { item: "停車作業", detail: "積み下ろし時にストッパーが必要か" },
  { item: "作業者", detail: "小型・軽量タイプが使いやすいか" },
  { item: "関連備品", detail: "安全靴や手袋も必要か" },
];

const FAQ_ITEMS = [
  {
    q: "カルティオは折りたたみと固定、どちらが良いですか？",
    a: "使わないときに省スペースで保管したい場合は折りたたみハンドル、工場や倉庫で常時使う場合は固定ハンドルが候補になります。使用頻度、保管場所、通路幅を確認して選ぶのがおすすめです。",
  },
  {
    q: "ストッパー付きカルティオは必要ですか？",
    a: "荷物の積み下ろし中に台車を止めたい現場ではストッパー付きが便利です。ただし、ストッパーがあっても斜面や凸凹のある不安定な路面では使用しないなど、メーカーの注意事項や社内ルールに沿って使うことが重要です。",
  },
  {
    q: "カルティオとカルティオビッグはどう使い分けますか？",
    a: "標準的な段ボールや備品運搬なら通常カルティオ、大きな荷物や重量物が多い工場・倉庫ではカルティオビッグが候補になります。カルティオビッグは900×620mmの荷台寸法と均等荷重400kgの仕様例があります。耐荷重の詳しい説明は別記事で解説しています。",
  },
  {
    q: "カルティオミニweegoはどんな現場に向いていますか？",
    a: "店舗バックヤード、オフィス、狭い倉庫、小口荷物の運搬に向いています。伸縮ハンドルでコンパクトに収納でき、仕様例では均等荷重100kg、長さ465mm、幅390mm、質量2.92kgです。",
  },
  {
    q: "屋外でもカルティオは使えますか？",
    a: "屋外利用では路面状況の確認が重要です。通常キャスターでは動かしにくい凹凸路面や仮設現場では、カルティオビッグ・オフロードなど専用仕様の検討が必要です。詳しくはオフロードの記事をご確認ください。",
  },
  {
    q: "台車作業で安全靴も必要ですか？",
    a: "重量物や段ボールを運ぶ現場では、台車のキャスターや荷物が足元に近づく場面があります。社内ルールや作業内容に応じて、安全靴・作業手袋などもあわせて確認するとよいです。",
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

function ProductCard({ item }: { item: Item }) {
  return (
    <a
      href={u(item.url)}
      target="_blank"
      rel="nofollow noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white transition hover:shadow-md"
    >
      <div className="aspect-square w-full overflow-hidden bg-gray-50">
        <img
          src={productImage(item.id)}
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
          <span className="text-gray-700">
            カルティオ 折りたたみ・固定の選び方
          </span>
        </nav>

        <span className="mb-3 inline-block rounded bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-800">
          選び方ガイド
        </span>

        <h1 className={cls.h1}>
          カルティオは折りたたみ・固定どっちを選ぶ？ストッパー付き・ビッグ・ミニの使い分け
        </h1>

        <p className="mb-6 text-sm text-gray-500">
          公開日：2026年7月4日／約14分で読めます
        </p>

        <div className="my-8 rounded-lg border border-gray-300 bg-gray-100 p-5 leading-relaxed">
          <p className="mb-2 font-bold">カルティオの折りたたみ・固定の選び方（要点）</p>
          <p className={cls.body.replace("mb-4 ", "")}>
            カルティオを選ぶときは、まず「収納性を重視するか」「常時使いやすい操作性を重視するか」で、折りたたみハンドルと固定ハンドルを選び分けるのが基本です。使わない時間が長く、倉庫や車両に省スペースで保管したい場合は折りたたみハンドルタイプ、現場で頻繁に使い、すぐ押し出せる状態にしておきたい場合は固定ハンドルタイプが候補になります。荷物の仮置きや積み下ろしが多い場合はストッパー付き、段ボールや資材を多く載せる場合はカルティオビッグ、狭いバックヤードや店舗内ではカルティオミニweegoも検討できます。
          </p>
        </div>

        <ArticleImg
          src={`${ARTICLE_IMG}/hero.jpg`}
          alt="倉庫でカルティオの折りたたみタイプと固定タイプを比較するイメージ"
        />

        <CTA href={u(URL_CART_LIST)}>
          カルティオの折りたたみ・固定・ストッパー付きモデルを一覧で確認する
        </CTA>

        <H2>カルティオは折りたたみ・固定どっちを選ぶ？まずは使う場所で考える</H2>
        <p className={cls.body}>
          カルティオ選びは、耐荷重だけで決めるものではありません。保管場所、使用頻度、荷物のサイズ、通路幅、ストッパーの有無まで含めて考えると、現場に合ったモデルを選びやすくなります。まずは「どこで・どのくらいの頻度で使うか」から整理しましょう。
        </p>

        <H3>保管スペースを重視するなら折りたたみハンドルタイプ</H3>
        <p className={cls.body}>
          使わない時間が長く、倉庫や車両に省スペースで保管したい場合は、ハンドルを畳める折りたたみタイプが便利です。予備台車やイベント用など、常時使わない用途にも向いています。
        </p>

        <H3>毎日使う現場なら固定ハンドルタイプ</H3>
        <p className={cls.body}>
          毎日頻繁に使い、すぐ押し出せる状態にしておきたい現場では、折りたたむ手間のない固定ハンドルタイプが向いています。倉庫・工場・出荷場など定位置での運用に適しています。
        </p>

        <H3>狭いバックヤードならミニweegoも候補</H3>
        <p className={cls.body}>
          店舗バックヤードやオフィスなど、置き場所が限られる現場では、小型・軽量のカルティオミニweegoも候補です。小口荷物や備品の運搬に使いやすいサイズです。
        </p>

        <H3>大きな荷物・重量物ならカルティオビッグを検討する</H3>
        <p className={cls.body}>
          大型の段ボールや資材、重量物が多い現場では、荷台が広く均等荷重400kgクラスのカルティオビッグが候補になります。荷物の重さだけでなく、荷台寸法や通路幅も確認して選びましょう。
        </p>

        <H2>折りたたみハンドルタイプのメリット・向いている現場</H2>

        <ArticleImg
          src={`${ARTICLE_IMG}/folding-storage.jpg`}
          alt="折りたたみハンドル台車を省スペースで保管するイメージ"
        />

        <H3>使わないときに省スペースで保管しやすい</H3>
        <p className={cls.body}>
          ハンドルを畳めるため、使わないときは壁際や棚のすき間に立てて保管でき、限られたスペースを有効に使えます。
        </p>

        <H3>車両に積み込む用途や複数拠点への備品配備に向く</H3>
        <p className={cls.body}>
          コンパクトに畳めることで車両への積み込みがしやすく、複数拠点へ台車をまとめて配備したい購買・総務の用途にも向いています。
        </p>

        <H3>イベント・店舗・倉庫の予備台車にも使いやすい</H3>
        <p className={cls.body}>
          常時は使わないがいざというときに用意しておきたい予備台車としても、収納しやすい折りたたみタイプは扱いやすい選択肢です。
        </p>

        <H3>ただし頻繁に出し入れする現場では手間になることもある</H3>
        <p className={cls.body}>
          一方で、1日に何度もハンドルを出し入れする現場では、毎回畳む・広げる操作が手間に感じられることもあります。使用頻度が高い場合は固定ハンドルタイプもあわせて検討してください。
        </p>

        <ProductGrid items={FOLDING_ITEMS} />
        <CTA href={u(URL_CART_LIST)}>
          保管しやすい折りたたみタイプのカルティオ・カルティオビッグを見る
        </CTA>

        <H2>固定ハンドルタイプのメリット・向いている現場</H2>

        <ArticleImg
          src={`${ARTICLE_IMG}/fixed-daily-use.jpg`}
          alt="固定ハンドル台車を倉庫で日常的に使うイメージ"
        />

        <H3>すぐに押し出せるため、使用頻度が高い現場に向く</H3>
        <p className={cls.body}>
          ハンドルが常に立った状態のため、荷物を載せてすぐ押し出せます。1日に何度も使う現場では、作業の流れを止めにくいのが利点です。
        </p>

        <H3>倉庫・工場・出荷場など定位置運用に向く</H3>
        <p className={cls.body}>
          置き場所が決まっていて、常にそこから使う定位置運用に向いています。パッキングステーション横などに置いておく使い方に適しています。
        </p>

        <H3>折りたたむ必要がないため、作業の流れを止めにくい</H3>
        <p className={cls.body}>
          ハンドルの開閉操作が不要なので、連続した運搬作業でもテンポを崩しにくくなります。
        </p>

        <H3>保管スペースには余裕が必要</H3>
        <p className={cls.body}>
          畳めないぶん保管時に場所を取るため、置き場所に余裕があるかを事前に確認しておきましょう。
        </p>

        <ProductGrid items={FIXED_ITEMS} />
        <CTA href={u(URL_CART_LIST)}>
          毎日使う現場には固定ハンドルタイプのカルティオビッグを確認する
        </CTA>

        <H2>ストッパー付きは必要？選ぶべき現場と不要な現場</H2>

        <ArticleImg
          src={`${ARTICLE_IMG}/stopper-loading.jpg`}
          alt="ストッパー付き台車で荷物を積み下ろしするイメージ"
        />

        <H3>荷物の積み下ろし中に台車を止めたいならストッパー付き</H3>
        <p className={cls.body}>
          荷物を載せ下ろしする間に台車が動くと危険です。足踏み式のストッパー付きなら、レバーを踏んでロック、跳ね上げて解除という操作で停止保持しやすくなります。
        </p>

        <H3>バックヤード・倉庫・出荷場ではストッパー付きが便利</H3>
        <p className={cls.body}>
          狭いバックヤードや、積み下ろし作業が多い倉庫・出荷場では、停止保持できるストッパー付きが作業のしやすさにつながります。
        </p>

        <H3>傾斜や不安定な路面での過信は禁物</H3>
        <p className={cls.body}>
          ストッパーは便利ですが、付いていればどこでも安全というわけではありません。メーカーの取扱説明でも、ストッパー使用時は安定した路面で使い、斜面・坂道・凸凹のある不安定な路面では使用しないよう案内されています。メーカーの注意事項や社内ルールに沿って使用してください。
        </p>

        <H3>ストッパーなしを選ぶなら保管場所と運用ルールを決める</H3>
        <p className={cls.body}>
          完全に平坦な短距離移動が中心なら、ストッパーなしでコスト・重量を抑える選択もあります。その場合は、停車時の置き方や輪止めの運用ルールをあらかじめ決めておくと安心です。
        </p>

        <div className="my-4 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border px-3 py-2">現場・用途</th>
                <th className="border px-3 py-2">ストッパー付きがおすすめか</th>
                <th className="border px-3 py-2">理由</th>
              </tr>
            </thead>
            <tbody>
              {STOPPER_TABLE.map((row) => (
                <tr key={row.scene}>
                  <td className="border px-3 py-2 font-semibold">{row.scene}</td>
                  <td className="border px-3 py-2">{row.rec}</td>
                  <td className="border px-3 py-2">{row.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <ProductGrid items={STOPPER_ITEMS} />
        <CTA href={u(URL_CART_LIST)}>
          荷物の積み下ろしが多い現場にはストッパー付きモデルを確認する
        </CTA>

        <H2>カルティオ・カルティオビッグ・カルティオミニweegoの違い</H2>

        <ArticleImg
          src={`${ARTICLE_IMG}/mini-standard-big.jpg`}
          alt="カルティオミニ・通常カルティオ・カルティオビッグを比較するイメージ"
        />

        <H3>カルティオは標準的な業務用台車として使いやすい</H3>
        <p className={cls.body}>
          通常のカルティオは、均等荷重200kgクラスで軽量・静音性に優れ、倉庫・店舗・施設・工場の標準的な運搬に幅広く使えます。
        </p>

        <H3>カルティオビッグは大きな荷物・重量物の運搬に向く</H3>
        <p className={cls.body}>
          カルティオビッグは荷台が広く均等荷重400kgクラスで、大型段ボールや資材、重量物の多い工場・物流倉庫での運搬に向いています。
        </p>

        <H3>カルティオミニweegoは店舗・オフィス・狭いバックヤード向け</H3>
        <p className={cls.body}>
          カルティオミニweegoは小型・軽量で、伸縮ハンドルでコンパクトに収納できます。店舗・オフィス・狭いバックヤードでの小口運搬に向いています。
        </p>

        <H3>屋外や凹凸路面ならオフロード仕様も候補</H3>
        <p className={cls.body}>
          屋外や凹凸のある搬入路では、通常キャスターでは動かしにくいことがあります。その場合はオフロード仕様も候補です。詳しくは
          <Link href="/articles/kartio-big-offroad" className="text-gray-900 underline">
            「カルティオビッグ・オフロードとは？」
          </Link>
          の記事をご確認ください。
        </p>

        <div className="my-4 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border px-3 py-2">種類</th>
                <th className="border px-3 py-2">主なサイズ感</th>
                <th className="border px-3 py-2">均等荷重の目安</th>
                <th className="border px-3 py-2">向いている現場</th>
                <th className="border px-3 py-2">保管性</th>
              </tr>
            </thead>
            <tbody>
              {SIZE_TABLE.map((row) => (
                <tr key={row.kind}>
                  <td className="border px-3 py-2 font-semibold">{row.kind}</td>
                  <td className="border px-3 py-2">{row.size}</td>
                  <td className="border px-3 py-2">{row.load}</td>
                  <td className="border px-3 py-2">{row.site}</td>
                  <td className="border px-3 py-2">{row.storage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <H2>カルティオビッグの折りたたみ・固定・ストッパー付き比較</H2>

        <H3>折りたたみハンドルは保管性重視</H3>
        <p className={cls.body}>
          大型でも畳んで保管したい現場には、折りたたみハンドルのビッグが向いています。
        </p>

        <H3>固定ハンドルは常時使用・定位置運用向き</H3>
        <p className={cls.body}>
          毎日使う定位置運用には、折りたたむ手間のない固定ハンドルのビッグが便利です。
        </p>

        <H3>ストッパー付きは積み下ろし時の停止に便利</H3>
        <p className={cls.body}>
          重量物の積み下ろしが多い現場では、停止保持できるストッパー付きが候補になります。
        </p>

        <H3>フラット・4輪自在・電動アシストは特殊用途として紹介</H3>
        <p className={cls.body}>
          方向転換や狭い通路での取り回しにはフラット・4輪自在タイプ、重量物運搬の負担軽減には電動センシングアシスト付など、特殊用途向けのモデルもあります。詳しい仕様は商品ページで確認してください。
        </p>

        <div className="my-4 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border px-3 py-2">商品</th>
                <th className="border px-3 py-2">タイプ</th>
                <th className="border px-3 py-2">ストッパー</th>
                <th className="border px-3 py-2">向いている用途</th>
              </tr>
            </thead>
            <tbody>
              {BIG_ITEMS.map((item) => (
                <tr key={item.id}>
                  <td className="border px-3 py-2 font-semibold">{item.name}</td>
                  <td className="border px-3 py-2">{item.col1}</td>
                  <td className="border px-3 py-2">{item.col2}</td>
                  <td className="border px-3 py-2">{item.col3}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <ProductGrid items={BIG_ITEMS} />

        <H2>通常カルティオを選ぶべき現場</H2>

        <H3>200kgクラスで十分な荷物が多い</H3>
        <p className={cls.body}>
          扱う荷物が均等荷重200kgクラスで足りる現場では、通常カルティオが扱いやすい選択肢です。荷物の重さの詳細は
          <Link href="/articles/kartio-load-capacity" className="text-gray-900 underline">
            「カルティオは何kgまで載せられる？」
          </Link>
          の記事で解説しています。
        </p>

        <H3>軽さと静音性を重視したい</H3>
        <p className={cls.body}>
          新型カルティオMPK-780は、質量6.8kgと軽量で騒音値35.5dBの静音性が案内されており、静かさ・軽さを重視したい現場に向いています。旧型との違いは
          <Link href="/articles/caritio-720-780-compare" className="text-gray-900 underline">
            「カルティオ MPK-720とMPK-780の違いは？」
          </Link>
          の記事もあわせてご確認ください。
        </p>

        <H3>店舗・施設・倉庫内で使いやすい台車を探している</H3>
        <p className={cls.body}>
          標準的なサイズ感で、店舗・施設・倉庫内など幅広い現場で扱いやすいのが通常カルティオの特長です。
        </p>

        <H3>ストッパー付きやカラー違いで現場別に選べる</H3>
        <p className={cls.body}>
          スチールストッパー付きやカラー違いもあり、現場ごとの用途や色分け管理に合わせて選べます。
        </p>

        <ProductGrid items={STANDARD_ITEMS} />

        <H2>カルティオミニweegoを選ぶべき現場</H2>

        <H3>店舗バックヤードやオフィスで小回りを重視したい</H3>
        <p className={cls.body}>
          小型で小回りが利くため、店舗バックヤードやオフィスなど、限られたスペースでの運搬に向いています。
        </p>

        <H3>軽量・小型で収納しやすい台車が欲しい</H3>
        <p className={cls.body}>
          質量2.92kgと軽量で、伸縮ハンドルによりコンパクトに収納できます。持ち運びや保管のしやすさを重視する場面に適しています。
        </p>

        <H3>大きな荷物ではなく、小口荷物・備品運搬が中心</H3>
        <p className={cls.body}>
          均等荷重100kgクラスのため、大型荷物より小口荷物や備品の運搬が中心の現場に向いています。
        </p>

        <H3>女性スタッフや複数部署で共用しやすい小型台車を探している</H3>
        <p className={cls.body}>
          軽量で扱いやすいため、幅広いスタッフや複数部署での共用にも向いています。
        </p>

        <ProductGrid items={MINI_ITEMS} />
        <CTA href={u(URL_CART_LIST)}>
          狭いバックヤードにはカルティオミニweegoを確認する
        </CTA>

        <H2>屋外・凹凸路面ならオフロード仕様も確認する</H2>

        <H3>通常キャスターでは動かしにくい路面がある</H3>
        <p className={cls.body}>
          砂利・段差・凹凸のある路面では、通常のキャスターでは動かしにくいことがあります。
        </p>

        <H3>屋外搬入・仮設現場・イベント会場では路面状況を確認する</H3>
        <p className={cls.body}>
          屋外搬入や仮設現場、イベント会場では、あらかじめ路面状況を確認し、必要に応じてオフロード仕様を検討してください。
        </p>

        <H3>オフロード仕様の詳しい選び方は既存記事へ</H3>
        <p className={cls.body}>
          オフロード仕様の詳しい選び方は
          <Link href="/articles/kartio-big-offroad" className="text-gray-900 underline">
            「カルティオビッグ・オフロードとは？」
          </Link>
          の記事で解説しています。用途に合うか確認したうえで検討してください。
        </p>

        <H2>安全靴もあわせて確認したい理由</H2>

        <ArticleImg
          src={`${ARTICLE_IMG}/safety-shoes.jpg`}
          alt="台車作業に使う安全靴や作業備品を確認するイメージ"
        />

        <H3>台車作業では足元に荷物や台車が近づきやすい</H3>
        <p className={cls.body}>
          台車のキャスターや積み荷が足元に近づく場面があるため、足元の安全対策も確認しておきたいポイントです。
        </p>

        <H3>倉庫・工場・搬入作業では安全靴の着用ルールを確認する</H3>
        <p className={cls.body}>
          現場によっては安全靴の着用ルールが定められています。作業内容や社内ルールに応じて確認してください。
        </p>

        <H3>カルティオや台車とあわせて備品としてそろえやすい</H3>
        <p className={cls.body}>
          台車の導入とあわせて、安全靴などの足元対策の備品もまとめて検討しておくと準備がスムーズです。
        </p>

        <ProductGrid items={SHOE_ITEMS} />
        <CTA href={u(URL_SAFETYSHOES_LIST)}>
          台車作業の足元対策にニューバランス安全靴も確認する
        </CTA>

        <H2>カルティオ選びでよくある失敗</H2>
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

        <H2>カルティオ購入前チェックリスト</H2>
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
            現場に合うカルティオを用途で選び分けて確認する
          </h2>
          <p className={cls.body}>
            折りたたみ・固定・ストッパー付き・サイズ（ミニ／通常／ビッグ）を、保管場所・使用頻度・荷物・通路幅・路面状況から選び分けるのが失敗しないポイントです。用途に応じて検討してください。
          </p>
          <CTA href={u(URL_TRUSCO_LIST)}>
            カルティオをはじめ、TRUSCOの運搬台車・現場用品をまとめて確認する
          </CTA>
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
