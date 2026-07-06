import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";

const SLUG = "safety-walkway-setup";
const SITE_URL = "https://sagyou-navi.com";
const ARTICLE_IMG = "/images/articles";

export const metadata: Metadata = {
  title:
    "安全通路の作り方｜工場・倉庫・工事現場で使うカラーコーン・コーンカバー・安全用品｜作業用品ナビ",
  description:
    "安全通路の作り方を、工場・倉庫・工事現場・駐車場向けに解説。カラーコーン、コーンカバー、安全フェンス、コーンベッド、ゴムポール、合図灯を使い、歩行者通路・立入禁止・車両出入口をわかりやすく区画する方法を紹介します。",
  alternates: { canonical: `${SITE_URL}/articles/${SLUG}` },
  openGraph: {
    title:
      "安全通路の作り方｜工場・倉庫・工事現場で使うカラーコーン・コーンカバー・安全用品",
    description:
      "安全通路の作り方を、工場・倉庫・工事現場・駐車場向けに解説。カラーコーン、コーンカバー、安全フェンス、コーンベッド、ゴムポール、合図灯を使い、歩行者通路・立入禁止・車両出入口をわかりやすく区画する方法を紹介します。",
    type: "article",
    images: [`${ARTICLE_IMG}/worksite-safety-walkway-cone-cover-hero.jpg`],
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

const Y = (id: string) =>
  `https://store.shopping.yahoo.co.jp/signcity-yshop/${id}.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=`;
const YB = (id: string) =>
  `https://store.shopping.yahoo.co.jp/signcity-yshop/${id}.html`;

const URL_SAFETY_LIST =
  "https://store.shopping.yahoo.co.jp/signcity-yshop/b0c2c1b4cd.html?b=61&view=grid";
const URL_NB_SHOES_LIST =
  "https://store.shopping.yahoo.co.jp/signcity-yshop/b0c2c1b4b7.html?b=91&view=grid";
const URL_SHOES_LIST =
  "https://store.shopping.yahoo.co.jp/signcity-yshop/search.html?p=%E5%AE%89%E5%85%A8%E9%9D%B4&b=151&view=grid";
const URL_HEATSTROKE_ITEMS =
  "https://www.gc-select.com/pages/2026_prevent-heatstroke";

type Prod = {
  id: string;
  imgId?: string;
  name: string;
  use: string;
  url: string;
  store: "yahoo" | "rakuten" | "gc";
};

const STORE_LABEL = {
  yahoo: "Yahoo!ショッピングで見る",
  rakuten: "楽天市場で見る",
  gc: "GREEN CROSS-selectで見る",
} as const;

const COVERS: Prod[] = [
  { id: "162910", name: "コーン用カバー「安全通路」T385-56A", use: "作業者の通路を示したい場所", url: Y("162910"), store: "yahoo" },
  { id: "162912", name: "コーン用カバー「歩行者通路」T385-58A", use: "来訪者・外部業者にも伝えたい通路", url: Y("162912"), store: "yahoo" },
  { id: "162909", name: "コーン用カバー「立入禁止」T385-53B", use: "危険箇所・作業中エリア", url: Y("162909"), store: "yahoo" },
  { id: "162911", name: "コーン用カバー「足もとにご注意」T385-57A", use: "段差・配線・仮設床付近", url: Y("162911"), store: "yahoo" },
  { id: "162913", name: "コーン用カバー「作業中」T385-701A", use: "メンテナンス・清掃・搬入作業", url: Y("162913"), store: "yahoo" },
  { id: "162908", name: "コーン用カバー「駐車禁止」T385-50A", use: "駐車場・搬入口", url: Y("162908"), store: "yahoo" },
  { id: "162917", name: "コーン透明表示カバー「車輛出入口」TCC-20", use: "車両出入口・搬入口・資材置き場", url: Y("162917"), store: "yahoo" },
  { id: "162918", name: "両面マルチサインボード TDSB-A3", use: "表示内容を差し替えて使いたい場所", url: Y("162918"), store: "yahoo" },
];

const CONES: Prod[] = [
  { id: "162891", name: "安全コーン レッド TCC-R（標準・屋内外の簡易区画）", use: "基本の区画。色違いでグリーン/ブルー/ホワイト/ブラック/トラコーン等あり（安全用品一覧参照）", url: Y("162891"), store: "yahoo" },
  { id: "162899", name: "反射テープ付安全コーン レッド/ホワイト TCC-R-HT", use: "薄暗い場所・屋外・夜間の視認性重視（適合ベッド T-COBE）", url: Y("162899"), store: "yahoo" },
  { id: "162904", name: "カットコーン 反射テープ付き レッド/ホワイト TSC-4C-R", use: "注意喚起を強めたい場所（グリーン/ホワイト TSC-4C-GN もあり）", url: Y("162904"), store: "yahoo" },
  { id: "162905", name: "パタパタコーン（折りたたみ）レッド TCCP-450-R", use: "車両・現場備品として省スペース保管（700mm TCCP-700-R もあり）", url: Y("162905"), store: "yahoo" },
  { id: "162907", name: "パタパタコーン用点滅LED灯 TCCP-LED", use: "折りたたみコーンの注意喚起強化", url: Y("162907"), store: "yahoo" },
  { id: "162921", name: "コーンベッド T-COBE", use: "風・接触・屋外設置時の転倒/移動対策", url: Y("162921"), store: "yahoo" },
  { id: "162922", name: "もうちょっと重たいコーンベッド T-MO-COBE", use: "より安定させたい屋外・風の強い場所", url: Y("162922"), store: "yahoo" },
  { id: "234825", name: "ちびっコーン 270×300mm レッド CBCN270-R", use: "小規模な注意喚起（ブルー CBCN270-BL もあり）", url: Y("234825"), store: "yahoo" },
];

const SAFETY_ITEMS: Prod[] = [
  { id: "163033", name: "工事用プラスチックフェンス グリーン CF1000-GN-TOKU（5枚セット）", use: "広い範囲を囲う区画", url: Y("163033"), store: "yahoo" },
  { id: "163030", name: "やわらかゴムポール アンカー穴付 イエロー/ブラック TGP-13A", use: "車両・駐車場の区画", url: Y("163030"), store: "yahoo" },
  { id: "163038", name: "プラバー イエロー/ブラック TPB-15-YB", use: "一時的な簡易バリケード", url: Y("163038"), store: "yahoo" },
  { id: "234764", name: "アルミ安全フェンス 間口1000×高さ1000 ピッチ30 イエロー AF1010-Y", use: "しっかり区画したい場所", url: Y("234764"), store: "yahoo" },
  { id: "235367", name: "単管用安全カバー（反射式）緑/白 1m PCGW-1", use: "単管・仮設部材の保護と視認", url: Y("235367"), store: "yahoo" },
  { id: "235452", name: "ソーラー工事灯カバー 赤・赤色 SKLED-R", use: "夜間の注意喚起", url: Y("235452"), store: "yahoo" },
  { id: "235477", name: "電子警笛付LED合図灯 LED6灯 SSW-6", use: "誘導・合図が必要な場所", url: Y("235477"), store: "yahoo" },
  { id: "235507", name: "安心クッションL字型 大 黒・黄 10本入り T10AC-99", use: "角・柱・設備周りの保護（緑・白 T10AC-101 もあり）", url: Y("235507"), store: "yahoo" },
  { id: "163083", name: "特定小電力トランシーバー 黒 TR-20X（2台セット）", use: "誘導・連絡", url: Y("163083"), store: "yahoo" },
];

const RAKUTEN_WEAR: Prod[] = [
  { id: "rk171780", imgId: "171780", name: "空調服・冷却ベスト（楽天）A ※商品名確認", use: "夏場の屋外・倉庫作業の暑さ対策（要確認）", url: "https://item.rakuten.co.jp/signcity2024/171780/", store: "rakuten" },
  { id: "rk171782", imgId: "171782", name: "空調服・冷却ベスト（楽天）B ※商品名確認", use: "夏場の屋外・倉庫作業の暑さ対策（要確認）", url: "https://item.rakuten.co.jp/signcity2024/171782/", store: "rakuten" },
  { id: "rk171708", imgId: "171708", name: "空調服・冷却ベスト（楽天）C ※商品名確認", use: "夏場の屋外・倉庫作業の暑さ対策（要確認）", url: "https://item.rakuten.co.jp/signcity2024/171708/", store: "rakuten" },
  { id: "rk171698", imgId: "171698", name: "空調服・冷却ベスト（楽天）D ※商品名確認", use: "夏場の屋外・倉庫作業の暑さ対策（要確認）", url: "https://item.rakuten.co.jp/signcity2024/171698/", store: "rakuten" },
];

const HELMET_RELATED: Prod[] = [
  { id: "gc1121810414", imgId: "1121810414", name: "ヘルメット関連アイテムA ※商品名確認", use: "頭部保護・熱中症対策の補助（要確認）", url: "https://www.gc-select.com/products/1121810414", store: "gc" },
  { id: "gc1121810108", imgId: "1121810108", name: "ヘルメット関連アイテムB ※商品名確認", use: "頭部保護・熱中症対策の補助（要確認）", url: "https://www.gc-select.com/products/1121810108", store: "gc" },
  { id: "gc1121983004", imgId: "1121983004", name: "ヘルメット関連アイテムC ※商品名確認", use: "頭部保護・熱中症対策の補助（要確認）", url: "https://www.gc-select.com/products/1121983004", store: "gc" },
  { id: "gc1121910324", imgId: "1121910324", name: "ヘルメット関連アイテムD ※商品名確認", use: "頭部保護・熱中症対策の補助（要確認）", url: "https://www.gc-select.com/products/1121910324", store: "gc" },
  { id: "gc1121910323", imgId: "1121910323", name: "ヘルメット関連アイテムE ※商品名確認", use: "頭部保護・熱中症対策の補助（要確認）", url: "https://www.gc-select.com/products/1121910323", store: "gc" },
  { id: "gc1121983007", imgId: "1121983007", name: "ヘルメット関連アイテムF ※商品名確認", use: "頭部保護・熱中症対策の補助（要確認）", url: "https://www.gc-select.com/products/1121983007", store: "gc" },
];

const NB_SHOES: Prod[] = [
  { id: "155406", name: "ニューバランス安全靴A ※商品名確認", use: "現場作業の足元対策（要確認）", url: YB("155406"), store: "yahoo" },
  { id: "155335", name: "ニューバランス安全靴B ※商品名確認", use: "現場作業の足元対策（要確認）", url: YB("155335"), store: "yahoo" },
  { id: "155361", name: "ニューバランス安全靴C ※商品名確認", use: "現場作業の足元対策（要確認）", url: YB("155361"), store: "yahoo" },
  { id: "155329", name: "ニューバランス安全靴D ※商品名確認", use: "現場作業の足元対策（要確認）", url: YB("155329"), store: "yahoo" },
  { id: "155391", name: "ニューバランス安全靴E ※商品名確認", use: "現場作業の足元対策（要確認）", url: YB("155391"), store: "yahoo" },
  { id: "155376", name: "ニューバランス安全靴F ※商品名確認", use: "現場作業の足元対策（要確認）", url: YB("155376"), store: "yahoo" },
  { id: "155420", name: "ニューバランス安全靴G ※商品名確認", use: "現場作業の足元対策（要確認）", url: YB("155420"), store: "yahoo" },
];

const PURPOSE_TABLE = [
  { goal: "歩行者の通路を示す", disp: "安全通路・歩行者通路", items: "カラーコーン＋コーンカバー", link: "T385-56A、T385-58A" },
  { goal: "立入禁止を示す", disp: "立入禁止", items: "コーンカバー、安全フェンス", link: "T385-53B、プラスチックフェンス" },
  { goal: "作業中を知らせる", disp: "作業中・足もとにご注意", items: "コーンカバー、マルチサインボード", link: "T385-701A、T385-57A、TDSB-A3" },
  { goal: "車両動線を示す", disp: "車輛出入口・駐車禁止", items: "透明表示カバー、コーン用カバー", link: "TCC-20、T385-50A" },
  { goal: "夜間・薄暗い場所で目立たせる", disp: "反射・点滅", items: "反射コーン、LED灯、工事灯", link: "TCC-R-HT、TCCP-LED、SKLED-R" },
  { goal: "常設・強めの区画", disp: "柵・ポール", items: "安全フェンス、ゴムポール、プラバー", link: "AF1010-Y、TGP-13A、TPB-15-YB" },
];

const COVER_TABLE = [
  { disp: "安全通路", place: "工場・倉庫の作業者通路", scene: "作業者向けの通路表示", item: "T385-56A" },
  { disp: "歩行者通路", place: "来訪者動線・倉庫内通路", scene: "外部業者・一般歩行者にも伝える", item: "T385-58A" },
  { disp: "立入禁止", place: "作業中エリア・危険箇所", scene: "立ち入りを防ぎたい場所", item: "T385-53B" },
  { disp: "足もとにご注意", place: "段差・配線・仮設通路", scene: "つまずき・転倒の注意喚起", item: "T385-57A" },
  { disp: "作業中", place: "メンテナンス・清掃・搬入作業", scene: "一時的な作業区画", item: "T385-701A" },
  { disp: "駐車禁止", place: "駐車場・搬入口", scene: "駐車を防ぎたい場所", item: "T385-50A" },
  { disp: "車輛出入口", place: "車両出入口・搬入口", scene: "車両動線の明示", item: "TCC-20" },
];

const SITE_TABLE = [
  { site: "工場", issue: "作業者・台車・フォークリフト動線が重なる", items: "安全通路カバー、歩行者通路カバー、コーンベッド", ops: "歩車分離と交差箇所の削減" },
  { site: "倉庫", issue: "荷捌き場・搬入口で人と車両が交差する", items: "車輛出入口カバー、反射コーン、ゴムポール", ops: "搬入時間帯の動線ルール化" },
  { site: "工事現場", issue: "立入禁止・作業中エリアを示したい", items: "立入禁止カバー、作業中カバー、安全フェンス", ops: "区画表示と巡回の徹底" },
  { site: "駐車場", issue: "駐車禁止・車両誘導・歩行者動線", items: "駐車禁止カバー、トラコーン、合図灯", ops: "誘導者・表示の併用" },
  { site: "店舗バックヤード", issue: "納品・清掃・一時通行止め", items: "パタパタコーン、足もと注意カバー、プラバー", ops: "短時間の区画をすばやく" },
  { site: "屋外イベント", issue: "一時的な列整理・安全通路", items: "反射コーン、プラスチックフェンス、トランシーバー", ops: "誘導・連絡体制の整備" },
];

const FAIL_TABLE = [
  { fail: "コーンを置くだけで通路にしたつもりになる", problem: "何の区画かわからない", fix: "コーンカバーで表示を加える" },
  { fail: "歩行者通路と車両通路が交差しすぎる", problem: "接触リスクが残る", fix: "交差箇所を減らし、注意表示を置く" },
  { fail: "コーンが軽くて動いてしまう", problem: "風や接触で区画が崩れる", fix: "コーンベッドを併用する" },
  { fail: "夜間・薄暗い場所で通常コーンだけを使う", problem: "視認性が不足する", fix: "反射コーン・LED灯を検討" },
  { fail: "立入禁止エリアの表示が弱い", problem: "外部業者や来訪者が入る", fix: "立入禁止カバー・安全フェンスを使う" },
  { fail: "通路幅を確認しない", problem: "台車や人が通りにくい", fix: "実際の通行量・荷物サイズを確認" },
  { fail: "安全用品だけで運用ルールを決めない", problem: "現場で守られない", fix: "朝礼・掲示・巡回で周知する" },
];

const CHECKLIST = [
  { item: "区画の目的", detail: "安全通路、歩行者通路、立入禁止、車輛出入口のどれか" },
  { item: "使用場所", detail: "工場、倉庫、工事現場、駐車場、屋外イベントなど" },
  { item: "通行者", detail: "作業者、来訪者、外部業者、車両のどれが通るか" },
  { item: "表示内容", detail: "コーンカバーで文字表示が必要か" },
  { item: "視認性", detail: "夜間・薄暗い場所で反射やLEDが必要か" },
  { item: "安定性", detail: "コーンベッドが必要か" },
  { item: "区画範囲", detail: "コーンだけで足りるか、フェンスが必要か" },
  { item: "誘導方法", detail: "合図灯・トランシーバーが必要か" },
  { item: "足元対策", detail: "安全靴や安心クッションも必要か" },
  { item: "暑さ対策", detail: "夏場は熱中症対策用品も必要か" },
];

const FAQ_ITEMS = [
  {
    q: "安全通路はカラーコーンだけで作れますか？",
    a: "一時的な通路ならカラーコーンで区画できますが、何の通路かが伝わりにくい場合があります。「安全通路」「歩行者通路」などのコーンカバーを組み合わせると、作業者や来訪者にも伝わりやすくなります。",
  },
  {
    q: "「安全通路」と「歩行者通路」はどう使い分けますか？",
    a: "安全通路は作業者向けの通路表示、歩行者通路は来訪者・外部業者・一般歩行者にも伝えたい場所で使いやすい表示です。現場の運用ルールに合わせて選びます。",
  },
  {
    q: "コーンベッドは必要ですか？",
    a: "屋外、風がある場所、人や台車が接触しやすい場所では、コーンが動いたり倒れたりしやすくなります。区画を安定させたい場合は、コーンベッドや重たいコーンベッドを検討します。",
  },
  {
    q: "立入禁止エリアはカラーコーンだけで十分ですか？",
    a: "一時的な区画ならカラーコーンと立入禁止カバーで対応できる場合があります。ただし、危険度が高い場所や長期間の区画では、安全フェンスやプラバーなど、より明確に区画できる用品も検討しましょう。",
  },
  {
    q: "夜間や薄暗い場所ではどんな用品が向いていますか？",
    a: "反射テープ付き安全コーン、点滅LED灯、ソーラー工事灯カバー、電子警笛付LED合図灯などが候補になります。電源や設置場所、雨天時の扱いも確認してください。",
  },
  {
    q: "安全通路づくりと一緒にそろえたい用品はありますか？",
    a: "安全靴、ヘルメット、安心クッション、合図灯、トランシーバー、熱中症対策用品なども現場に応じて確認すると、通路だけでなく作業環境全体を見直しやすくなります。",
  },
];

const RELATED = [
  {
    href: "/articles/color-cone-selection",
    label:
      "カラーコーンの選び方｜駐車場・工事現場・イベントで使うコーン・バー・チェーンの使い分け",
  },
  {
    href: "/articles/plastic-chain-vs-cone-bar",
    label:
      "プラチェーンとコーンバーの違い｜駐車場・通路・立入禁止エリアの区画用品はどっちが良い？",
  },
  {
    href: "/articles/outdoor-work-heatstroke-measures",
    label:
      "外仕事の熱中症対策｜現場・イベント・屋外倉庫で使える暑さ対策グッズと実務チェックリスト",
  },
];

function CTA({ href, children }: { href: string; children: ReactNode }) {
  return (
    <div className="my-6">
      <a
        href={href}
        target="_blank"
        rel="nofollow noopener noreferrer"
        className="block w-full rounded-md bg-gray-900 px-6 py-4 text-center text-base font-bold text-white transition-colors hover:bg-gray-700"
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
          {STORE_LABEL[item.store]}
        </span>
      </div>
    </a>
  );
}

function ProductGrid({ items }: { items: Prod[] }) {
  return (
    <div className="my-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
      {items.map((item) => (
        <ProductCard key={item.id} item={item} />
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
          <span className="text-gray-700">安全通路の作り方</span>
        </nav>

        <span className="mb-3 inline-block rounded bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-800">
          選び方ガイド
        </span>

        <h1 className={cls.h1}>
          安全通路の作り方｜工場・倉庫・工事現場で使うカラーコーン・コーンカバー・安全用品
        </h1>

        <p className="mb-6 text-sm text-gray-500">
          公開日：2026年7月6日／約15分で読めます
        </p>

        <div className="my-6 rounded-lg border border-gray-300 bg-gray-50 p-5 leading-relaxed">
          <p className={cls.body}>
            安全通路を作るときは、まず「人が歩く場所」「車両・フォークリフトが通る場所」「立ち入ってはいけない場所」を分けて考えることが重要です。工場・倉庫・工事現場では、カラーコーンだけを置くのではなく、コーンカバーで「安全通路」「歩行者通路」「立入禁止」「車輛出入口」などを表示し、必要に応じてコーンベッド・安全フェンス・ゴムポール・合図灯を組み合わせると、現場で伝わりやすくなります。一時的な区画ならカラーコーンと表示カバー、風で倒れやすい場所ならコーンベッド、広く囲いたい場所ならプラスチックフェンス、車両動線では反射材や合図灯も候補になります。ただし、用品を置くだけで安全を保証できるわけではありません。現場の通路幅、視認性、車両動線、作業手順、社内ルールに合わせて運用することが大切です。
          </p>
        </div>

        <ArticleImg
          src={`${ARTICLE_IMG}/worksite-safety-walkway-cone-cover-hero.jpg`}
          alt="工場や倉庫でカラーコーンとコーンカバーを使い安全通路を作るイメージ"
        />

        <CTA href={u(URL_SAFETY_LIST)}>
          安全通路・歩行者通路を作るなら、カラーコーンとコーンカバーを確認する
        </CTA>

        <H2>安全通路とは？工場・倉庫・現場で区画が必要な理由</H2>
        <H3>人と車両・フォークリフトの動線を分けるため</H3>
        <p className={cls.body}>
          安全通路の基本は、人と車両・フォークリフトの動線を分けることです。厚生労働省の資料でも、フォークリフト作業では運行経路と歩道の分離、危険箇所への立入禁止、誘導者の配置、標識の設置などが接触防止措置として示されています（詳細は公的情報をご確認ください）。
        </p>
        <H3>立入禁止エリアや作業中エリアを見える化するため</H3>
        <p className={cls.body}>
          危険箇所や作業中のエリアを見える化することで、誤って立ち入るリスクを下げやすくなります。
        </p>
        <H3>来訪者・協力会社にも通路をわかりやすくするため</H3>
        <p className={cls.body}>
          現場を知らない来訪者や協力会社にも、通路や禁止エリアが伝わるように表示することが重要です。
        </p>
        <H3>一時的な作業区画をすばやく作るため</H3>
        <p className={cls.body}>
          メンテナンスや搬入など、一時的な区画をすばやく作れる点も、カラーコーンとコーンカバーの利点です。
        </p>
        <p className={cls.body}>
          なお、カラーコーン自体の色・種類・サイズの選び方は
          <Link href="/articles/color-cone-selection" className="text-gray-900 underline">
            「カラーコーンの選び方」
          </Link>
          、区画用品の違いは
          <Link href="/articles/plastic-chain-vs-cone-bar" className="text-gray-900 underline">
            「プラチェーンとコーンバーの違い」
          </Link>
          の記事もあわせてご確認ください。
        </p>

        <H2>安全通路づくりは「通路・禁止・注意・車両動線」に分けて考える</H2>

        <ArticleImg
          src={`${ARTICLE_IMG}/pedestrian-walkway-cone-sign-cover.jpg`}
          alt="歩行者通路や安全通路をコーンカバーで表示するイメージ"
        />

        <div className="my-4 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border border-gray-200 px-3 py-2">区画の目的</th>
                <th className="border border-gray-200 px-3 py-2">表示例</th>
                <th className="border border-gray-200 px-3 py-2">向いている用品</th>
                <th className="border border-gray-200 px-3 py-2">商品導線</th>
              </tr>
            </thead>
            <tbody>
              {PURPOSE_TABLE.map((row) => (
                <tr key={row.goal} className="even:bg-gray-50">
                  <td className="border border-gray-200 px-3 py-2 font-semibold">{row.goal}</td>
                  <td className="border border-gray-200 px-3 py-2">{row.disp}</td>
                  <td className="border border-gray-200 px-3 py-2">{row.items}</td>
                  <td className="border border-gray-200 px-3 py-2">{row.link}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Caution>
          <p className={cls.bodySm}>
            カラーコーンや安全用品は、区画をわかりやすくするための用品であり、置くだけで安全を保証できるわけではありません。通路幅、視認性、車両動線、作業手順、社内ルールに合わせて運用し、朝礼・掲示・巡回・教育とあわせて周知してください。危険度の高い箇所は、安全衛生担当者や現場責任者と確認のうえで区画方法を決めましょう。
          </p>
        </Caution>

        <H2>カラーコーンとコーンカバーで安全通路を作る基本手順</H2>
        <H3>1. 人が通るルートを先に決める</H3>
        <p className={cls.body}>最初に、人が安全に通れるルートを決めます。作業動線や出入口との関係を確認します。</p>
        <H3>2. 車両・台車・フォークリフト動線と交差する場所を確認する</H3>
        <p className={cls.body}>車両・台車・フォークリフトの動線と交差する場所を洗い出し、交差箇所を減らす工夫をします。</p>
        <H3>3. コーンを置く間隔と視認性を確認する</H3>
        <p className={cls.body}>コーンの間隔が空きすぎると区画が伝わりにくくなります。視認性も確認します。</p>
        <H3>4. 「安全通路」「歩行者通路」など表示カバーを使う</H3>
        <p className={cls.body}>
          コーン用カバーは、カラーコーンにかぶせるだけで表示を追加できるため、同じコーンでも用途に合わせて表示を変えやすいのが特徴です。一時的な通路や区画を伝えたいときに使いやすい用品です。
        </p>
        <H3>5. 必要に応じてコーンベッドで転倒・移動を抑える</H3>
        <p className={cls.body}>屋外や風のある場所、接触が多い場所では、コーンベッドで転倒・移動を抑えると区画を保ちやすくなります。</p>

        <H2>コーンカバーの表示別おすすめ用途</H2>

        <ArticleImg
          src={`${ARTICLE_IMG}/restricted-work-area-cone-fence.jpg`}
          alt="立入禁止や作業中エリアをコーンと安全フェンスで区画するイメージ"
        />

        <H3>「安全通路」は作業者の通路を示したい場所に</H3>
        <p className={cls.body}>「安全通路」は、工場・倉庫の作業者通路を示したい場所に向いています。</p>
        <H3>「歩行者通路」は来訪者・外部業者にも伝えたい場所に</H3>
        <p className={cls.body}>「歩行者通路」は、来訪者や外部業者にも伝えたい動線で使いやすい表示です。</p>
        <H3>「立入禁止」は危険箇所・作業中エリアに</H3>
        <p className={cls.body}>「立入禁止」は、危険箇所や作業中エリアの区画に使います。</p>
        <H3>「足もとにご注意」は段差・配線・仮設床付近に</H3>
        <p className={cls.body}>「足もとにご注意」は、段差・配線・仮設床など、つまずきやすい場所の注意喚起に向いています。</p>
        <H3>「車輛出入口」は駐車場・搬入口・資材置き場に</H3>
        <p className={cls.body}>「車輛出入口」は、駐車場・搬入口・資材置き場など、車両動線を示したい場所に使います。</p>

        <div className="my-4 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border border-gray-200 px-3 py-2">表示内容</th>
                <th className="border border-gray-200 px-3 py-2">向いている場所</th>
                <th className="border border-gray-200 px-3 py-2">使用シーン</th>
                <th className="border border-gray-200 px-3 py-2">商品</th>
              </tr>
            </thead>
            <tbody>
              {COVER_TABLE.map((row) => (
                <tr key={row.disp} className="even:bg-gray-50">
                  <td className="border border-gray-200 px-3 py-2 font-semibold">{row.disp}</td>
                  <td className="border border-gray-200 px-3 py-2">{row.place}</td>
                  <td className="border border-gray-200 px-3 py-2">{row.scene}</td>
                  <td className="border border-gray-200 px-3 py-2">{row.item}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <ProductGrid items={COVERS} />
        <CTA href={u(URL_SAFETY_LIST)}>
          安全通路・歩行者通路・立入禁止・作業中など、表示内容に合うコーンカバーを選ぶ
        </CTA>

        <H2>安全通路で使いやすいカラーコーンの種類</H2>

        <ArticleImg
          src={`${ARTICLE_IMG}/eflective-cone-led-warning-night-site.jpg`}
          alt="反射コーンやLED灯で夜間の注意喚起を行うイメージ"
        />

        <H3>標準の安全コーンは屋内外の簡易区画に使いやすい</H3>
        <p className={cls.body}>標準の安全コーンは、屋内外の簡易区画に使いやすく、色分けで用途を区別できます。</p>
        <H3>反射テープ付きは薄暗い場所・屋外・夜間に向く</H3>
        <p className={cls.body}>反射テープ付きは、薄暗い場所・屋外・夜間の視認性を意識した区画に向いています。</p>
        <H3>折りたたみパタパタコーンは車両・現場備品として保管しやすい</H3>
        <p className={cls.body}>折りたたみのパタパタコーンは、車両や現場備品として省スペースで保管しやすいタイプです。</p>
        <H3>カットコーン・LED灯付きは注意喚起を強めたい場所に</H3>
        <p className={cls.body}>カットコーンや点滅LED灯付きは、注意喚起を強めたい場所で候補になります。</p>
        <H3>コーンベッドは風・接触・屋外設置時の安定補助に使う</H3>
        <p className={cls.body}>コーンベッドは、風・接触・屋外設置時の転倒や移動を抑える安定補助として使います。</p>

        <ProductGrid items={CONES} />
        <p className={cls.body}>
          色違い（グリーン・ブルー・ホワイト・ブラック・トラコーン・チッコウコーン等）や他サイズは、
          <a href={u(URL_SAFETY_LIST)} target="_blank" rel="nofollow noopener noreferrer" className="text-gray-900 underline">
            安全用品一覧
          </a>
          からまとめて確認できます。
        </p>
        <CTA href={u(URL_SAFETY_LIST)}>
          反射コーン・折りたたみコーン・コーンベッドまで、現場に合うカラーコーン関連用品を確認する
        </CTA>

        <H2>カラーコーンだけでは足りない場所に使いたい安全用品</H2>

        <ArticleImg
          src={`${ARTICLE_IMG}/safety-equipment-cone-fence-rubber-pole.jpg`}
          alt="カラーコーン・安全フェンス・ゴムポールなど安全用品を比較するイメージ"
        />

        <H3>広い範囲を囲うならプラスチックフェンス</H3>
        <p className={cls.body}>広い範囲を囲いたい場合は、工事用プラスチックフェンスが候補になります。</p>
        <H3>車両や駐車場の区画にはやわらかゴムポール</H3>
        <p className={cls.body}>車両や駐車場の区画には、やわらかゴムポールが使いやすい用品です。</p>
        <H3>一時的な仕切りにはプラバー・アルミ安全フェンス</H3>
        <p className={cls.body}>一時的な仕切りには、プラバーやアルミ安全フェンスを検討できます。</p>
        <H3>単管・角部・設備周りには安全カバー・安心クッション</H3>
        <p className={cls.body}>単管や角部、設備周りの保護には、単管用安全カバーや安心クッションが役立ちます。</p>
        <H3>誘導・合図が必要な場所には合図灯・トランシーバー</H3>
        <p className={cls.body}>誘導や合図が必要な場所では、電子警笛付LED合図灯やトランシーバーもあわせて検討できます。</p>

        <ProductGrid items={SAFETY_ITEMS} />
        <CTA href={u(URL_SAFETY_LIST)}>
          広い範囲の区画には、安全フェンス・ゴムポール・プラバーも確認する
        </CTA>

        <H2>現場別・安全通路の作り方</H2>
        <div className="my-4 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border border-gray-200 px-3 py-2">現場</th>
                <th className="border border-gray-200 px-3 py-2">課題</th>
                <th className="border border-gray-200 px-3 py-2">優先したい用品</th>
                <th className="border border-gray-200 px-3 py-2">運用ポイント</th>
              </tr>
            </thead>
            <tbody>
              {SITE_TABLE.map((row) => (
                <tr key={row.site} className="even:bg-gray-50">
                  <td className="border border-gray-200 px-3 py-2 font-semibold">{row.site}</td>
                  <td className="border border-gray-200 px-3 py-2">{row.issue}</td>
                  <td className="border border-gray-200 px-3 py-2">{row.items}</td>
                  <td className="border border-gray-200 px-3 py-2">{row.ops}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Caution>
          <p className={cls.bodySm}>
            歩車分離・立入禁止・標識設置などの安全管理は、現場の危険度や作業内容によって異なります。厚生労働省の安全衛生情報や社内ルールを確認し、誘導者の配置や教育もあわせて検討してください。区画用品はあくまで注意喚起の補助であり、これだけで十分な安全対策になるとは限りません。
          </p>
        </Caution>

        <H2>安全通路とあわせて確認したい安全靴・熱中症対策用品</H2>

        <ArticleImg
          src={`${ARTICLE_IMG}/worksite-safety-shoes-heat-protection-supplies.jpg`}
          alt="安全靴や熱中症対策用品を確認するイメージ"
        />

        <H3>通路を作っても、足元リスクへの備えは別途必要</H3>
        <p className={cls.body}>
          安全通路を作っても、足元の危険（落下物・すべり・踏み抜きなど）への備えは別途必要です。安全靴は現場ルールや作業内容に合わせて選びましょう。
        </p>
        <ProductGrid items={NB_SHOES} />
        <p className={cls.body}>
          ニューバランス安全靴は
          <a href={u(URL_NB_SHOES_LIST)} target="_blank" rel="nofollow noopener noreferrer" className="text-gray-900 underline">
            ニューバランス安全靴一覧
          </a>
          から、その他の安全靴（安価で高品質なトラスコ中山製品を含む）は
          <a href={u(URL_SHOES_LIST)} target="_blank" rel="nofollow noopener noreferrer" className="text-gray-900 underline">
            安全靴一覧
          </a>
          からまとめて確認できます。
        </p>

        <H3>夏場の屋外・倉庫作業では熱中症対策用品も確認する</H3>
        <p className={cls.body}>
          夏場の屋外・倉庫作業では、熱中症対策用品もあわせて確認しておくと安心です。空調服・冷却ベストやヘルメット関連もあります。
        </p>
        <ProductGrid items={RAKUTEN_WEAR} />
        <ProductGrid items={HELMET_RELATED} />
        <CTA href={u(URL_HEATSTROKE_ITEMS)}>
          足元対策には安全靴、夏場の屋外作業には熱中症対策用品もあわせて確認する
        </CTA>

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

        <H2>購入前チェックリスト</H2>
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
            区画・誘導・安全通路づくりの用品を、まとめて確認しましょう
          </h2>
          <p className={cls.body}>
            カラーコーン・コーンカバー・安全用品は、区画をわかりやすくするための用品の一つです。通路幅・視認性・車両動線・作業手順・社内ルールとあわせて、現場に合わせて選んでください。
          </p>
          <FinalCTA href={u(URL_SAFETY_LIST)}>
            現場の区画・誘導・安全通路づくりに必要な用品をまとめて確認するなら、安全用品一覧へ
          </FinalCTA>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
