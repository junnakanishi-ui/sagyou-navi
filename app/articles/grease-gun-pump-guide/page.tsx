/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";

/* =========================================================
   作業用品ナビ｜グリースガン・グリースポンプの選び方
   slug: grease-gun-pump-guide
   自己完結 page.tsx（中央レジストリなし・共通コンポーネント不使用）
   ========================================================= */

const SLUG = "grease-gun-pump-guide";
const SITE = "https://www.sagyou-navi.com";
const PAGE_URL = `${SITE}/articles/${SLUG}`;
const PUBLISHED = "2026-10-09";
const UPDATED = "2026-10-09";
const TITLE = "グリースガンとグリースポンプの違いと選び方｜詰め方・エア抜きも解説【2026年版】";
const DESCRIPTION =
  "グリースガンとグリースポンプの違いから、手動・エア式・電動の選び方、ペール缶・ドラム缶用ポンプ、充填ポンプによる詰め替え、ニップルとノズルの合わせ方、グリースが出ないときのエア抜きまでを整備・保全の現場目線で解説。メーカー公表値をもとにした比較表つきです。";
const UTM = `utm_source=sagyou_navi&utm_medium=article&utm_campaign=${SLUG}`;
const IMG_BASE = "/products/";

/* ---------- URL helpers（文字列連結のみ・URL APIで再加工しない） ---------- */
function buildUrl(base: string, query: string): string {
  const i = base.indexOf("#");
  const head = i === -1 ? base : base.slice(0, i);
  const hash = i === -1 ? "" : base.slice(i);
  return `${head}${head.includes("?") ? "&" : "?"}${query}${hash}`;
}
/** 楽天の検索結果ページ（既存クエリ sid= を保持して UTM を追加） */
function RQ(url: string): string {
  return buildUrl(url, UTM);
}
/** 楽天 crecote-shop（? の前の末尾スラッシュを維持） */
function C(url: string): string {
  const i = url.indexOf("#");
  const head = i === -1 ? url : url.slice(0, i);
  const hash = i === -1 ? "" : url.slice(i);
  const q = head.indexOf("?");
  let path = q === -1 ? head : head.slice(0, q);
  const query = q === -1 ? "" : head.slice(q + 1);
  if (!path.endsWith("/")) path += "/";
  return `${path}?${query ? `${query}&` : ""}${UTM}${hash}`;
}

/* ---------- 型 ---------- */
type Store = "gc" | "rakuten";
type Product = {
  name: string;
  short: string;
  href: string;
  img: string;
  store: Store;
  tags: string[];
  point: string;
  spec: string;
};

const STORE_LABEL: Record<Store, string> = { gc: "GC-select", rakuten: "楽天市場" };
const EXT = { target: "_blank", rel: "noopener noreferrer sponsored" } as const;
const REF = { target: "_blank", rel: "noopener noreferrer" } as const;

/* ---------- 商品データマスター（build.py で生成） ---------- */
const P = {
  g500: { name: "KTC グリースガン（手詰め専用）G500", short: "KTC グリースガン G500", href: C("https://item.rakuten.co.jp/crecote-shop/ta036414-g500/"), img: "ta036414-g500.jpg", store: "rakuten", tags: ["手詰め専用", "ノズル190mm"], point: "手詰め専用のレバー式。1回0.7ccと控えめな吐出量で、少量ずつ確実に入れたい箇所に。", spec: "手詰め専用／1回0.7cc／油槽径63mm" },
  kh500s: { name: "ヤマダ ハンドグリースガン KH-500S", short: "ヤマダ KH-500S", href: C("https://item.rakuten.co.jp/crecote-shop/ta009288-kh500s/"), img: "ta009288-kh500s.jpg", store: "rakuten", tags: ["兼用", "最大50MPa"], point: "手詰めとカートリッジの両方に使える定番機。迷ったらまずこのクラスから。", spec: "手詰550mL／カートリッジ420mL／最大50MPa" },
  ch650ll: { name: "ヤマダ カートリッジグリースガン CH-650LL", short: "ヤマダ CH-650LL", href: C("https://item.rakuten.co.jp/crecote-shop/ta035423-ch650ll/"), img: "ta035423-ch650ll.jpg", store: "rakuten", tags: ["最大80MPa", "ロングレバー"], point: "レバーを延長して操作力を高めた高圧タイプ（販売店表記で当社比15%向上）。固着ぎみのニップルに。", spec: "手詰550mL／カートリッジ420mL／最大80MPa" },
  a488: { name: "Zahren ダブルアクショングリースガン A488", short: "Zahren ダブルアクション A488", href: C("https://item.rakuten.co.jp/crecote-shop/ta034174-a488/"), img: "ta034174-a488.jpg", store: "rakuten", tags: ["ダブルアクション"], point: "ザーレンのダブルアクション機構付き手動ガン。吐出の仕組みと仕様は商品ページで確認を。", spec: "" },
  hpgg: { name: "ヤマダ 高圧グリースガン HPGG", short: "ヤマダ 高圧グリースガン HPGG", href: C("https://item.rakuten.co.jp/crecote-shop/ta036683-hpgg/"), img: "ta036683-hpgg.jpg", store: "rakuten", tags: ["高圧仕様"], point: "高い圧力が必要な給脂点向けのヤマダ製高圧ガン。最大圧力などは商品ページで確認を。", spec: "" },
  amg400n: { name: "ヤマダ オートグリースマシンガン AMG-400N", short: "ヤマダ AMG-400N（エア駆動）", href: C("https://item.rakuten.co.jp/crecote-shop/ta004828-amg400n/"), img: "ta004828-amg400n.jpg", store: "rakuten", tags: ["エア駆動", "連続吐出"], point: "コンプレッサーのエアで連続吐出。レバーを何度も握らずに済み、生産ラインや車両整備の大量給脂に。", spec: "蛇腹カートリッジ420mL／28MPa／310mL/分／2.1kg" },
  tag508nab: { name: "TRUSCO スマートエア抜きエア式グリースガン カートリッジ専用 TAG508NAB", short: "TRUSCO TAG508NAB（エア式・カートリッジ専用）", href: C("https://item.rakuten.co.jp/crecote-shop/ta039650-tag508nab/"), img: "ta039650-tag508nab.jpg", store: "rakuten", tags: ["エア式", "エア抜き機能"], point: "エア抜きのしやすさを打ち出したエア式。カートリッジ専用でグリース交換が手早い。", spec: "" },
  tag508nabtm: { name: "TRUSCO スマートエア抜きエア式グリースガン カートリッジ・手詰め兼用 TAG508NABTM", short: "TRUSCO TAG508NABTM（エア式・兼用）", href: C("https://item.rakuten.co.jp/crecote-shop/ta039651-tag508nabtm/"), img: "ta039651-tag508nabtm.jpg", store: "rakuten", tags: ["エア式", "手詰め兼用"], point: "同シリーズの手詰め兼用モデル。ペール缶のグリースを詰めて使いたい現場に。", spec: "" },
  eg400a2: { name: "ヤマダ 電動式グリースガン EG-400AⅡ", short: "ヤマダ EG-400AⅡ（電動）", href: C("https://item.rakuten.co.jp/crecote-shop/ta036004-eg400a2/"), img: "ta036004-eg400a2.jpg", store: "rakuten", tags: ["電動", "AC100V"], point: "スイッチ操作で連続給脂できる電動式。コンセントが取れる工場内で、エアの配管がない場所に。", spec: "AC100V／40MPa／72g/分／約4kg" },
  gmn500: { name: "ヤマダ デジタルグリースガン GMN-500", short: "ヤマダ GMN-500（デジタル）", href: C("https://item.rakuten.co.jp/crecote-shop/ta036488-gmn500/"), img: "ta036488-gmn500.jpg", store: "rakuten", tags: ["デジタル表示", "給脂量管理"], point: "給脂量をデジタルで確認できるグリースガン。入れすぎ・入れ忘れを減らしたい保全現場に。", spec: "" },
  sg5012: { name: "SAMOA グリースガン（流量計付）SG5012", short: "SAMOA SG5012（流量計付）", href: C("https://item.rakuten.co.jp/crecote-shop/ta039209-sg5012/"), img: "ta039209-sg5012.jpg", store: "rakuten", tags: ["流量計付", "ポンプ用"], point: "流量計を備えたSAMOAのグリースガン。ポンプからのホース先端で、吐出した量を確かめながら給脂する用途。", spec: "" },
  sg1110: { name: "SAMOA グリース用流量計 SG1110", short: "SAMOA グリース用流量計 SG1110", href: C("https://item.rakuten.co.jp/crecote-shop/ta039197-sg1110/"), img: "ta039197-sg1110.jpg", store: "rakuten", tags: ["流量計"], point: "グリースの流量を計る計量器。接続方法・対応機器は商品ページで確認を。", spec: "" },
  s35p: { name: "SAMOA ペール缶用グリースポンプ S35P", short: "SAMOA S35P（ペール缶用・エア式）", href: C("https://item.rakuten.co.jp/crecote-shop/ta041666-s35p/"), img: "ta041666-s35p.jpg", store: "rakuten", tags: ["ペール缶", "エア式"], point: "最大2,000g/分という吐出量をうたうペール缶用エア式ポンプ（輸入元の説明）。給脂点の多い工場に。", spec: "最大吐出量2,000g/分" },
  s35d: { name: "SAMOA ドラム用グリースポンプ S35D", short: "SAMOA S35D（ドラム缶用・エア式）", href: C("https://item.rakuten.co.jp/crecote-shop/ta041665-s35d/"), img: "ta041665-s35d.jpg", store: "rakuten", tags: ["180kg缶専用", "エア式"], point: "市販の180kgドラム缶に直接セットするエア式。製鉄・自動車・ベアリング工場などの大量給脂向け。", spec: "最高吐出圧60MPa／24.0kg" },
  k5: { name: "macnaught グリスポンプ ビックリューブ（専用缶付）K5", short: "macnaught K5 ビックリューブ", href: C("https://item.rakuten.co.jp/crecote-shop/ta037251-k5/"), img: "ta037251-k5.jpg", store: "rakuten", tags: ["手動", "専用缶付"], point: "電気もエアも使わない手動式。専用缶付きで、持ち運んで使う現場に。", spec: "専用缶付" },
  k6: { name: "macnaught グリスポンプ ミニリューブ（缶別売）K6", short: "macnaught K6 ミニリューブ", href: C("https://item.rakuten.co.jp/crecote-shop/ta037256-k6/"), img: "ta037256-k6.jpg", store: "rakuten", tags: ["手動", "小型"], point: "小型ながら高出力をうたう手動ポンプ（輸入元の説明）。階段のある工場内を持ち歩く用途に。缶は別売。", spec: "缶別売" },
  sg3007: { name: "SAMOA グリースガン SG3007", short: "SAMOA グリースガン SG3007", href: C("https://item.rakuten.co.jp/crecote-shop/ta039202-sg3007/"), img: "ta039202-sg3007.jpg", store: "rakuten", tags: ["ポンプ用ガン", "スイベル付"], point: "エア式グリースポンプのホース先端に付けて使うガン（同社ポンプの付属品にも採用）。", spec: "" },
  sg4000: { name: "SAMOA ペール缶用グリースポンプ用キャリー SG4000", short: "SAMOA ポンプ用キャリー SG4000", href: C("https://item.rakuten.co.jp/crecote-shop/ta039205-sg4000/"), img: "ta039205-sg4000.jpg", store: "rakuten", tags: ["キャリー", "移動用"], point: "ペール缶とポンプを載せて移動するためのキャリー。適合ポンプは商品ページで確認を。", spec: "" },
  j2: { name: "macnaught グリスポンプ ボリュームポンプ 充填専用 J2", short: "macnaught J2 ボリュームポンプ", href: C("https://item.rakuten.co.jp/crecote-shop/ta036942-j2/"), img: "ta036942-j2.jpg", store: "rakuten", tags: ["充填専用", "ペール缶直付け"], point: "ペール缶からグリースガンやK5・K6の専用缶へ詰め替えるための充填ポンプ。手を汚さずに大量に詰められる。", spec: "16〜20kg金属缶／60cc/st／最大4.9MPa" },
  j3: { name: "macnaught グリスポンプ フィラーポンプ 充填専用 J3", short: "macnaught J3 フィラーポンプ", href: C("https://item.rakuten.co.jp/crecote-shop/ta036966-j3/"), img: "ta036966-j3.jpg", store: "rakuten", tags: ["充填専用", "リザーブタンク用"], point: "リザーブタンクへの充填専用ポンプ（輸入元の説明）。集中給脂装置のタンク補充などに。", spec: "" },
  kmps221: { name: "KWK シングルライン用手動グリースポンプ KMPS221", short: "KWK KMPS221（シングルライン用）", href: C("https://item.rakuten.co.jp/crecote-shop/ta041493-kmps221/"), img: "ta041493-kmps221.jpg", store: "rakuten", tags: ["集中給脂", "シングルライン"], point: "1台のポンプから配管で複数の給脂点へ送る集中給脂用の手動ポンプ。同社KMPシリーズは小規模で給脂頻度の少ない設備向け（販売店説明）。", spec: "" },
  ksp105: { name: "KWK 手動グリースポンプ KSP-105", short: "KWK 手動グリースポンプ KSP-105", href: C("https://item.rakuten.co.jp/crecote-shop/ta009551-ksp105/"), img: "ta009551-ksp105.jpg", store: "rakuten", tags: ["手動ポンプ"], point: "給脂装置メーカーKWK（広和）の手動グリースポンプ。容量や吐出量は商品ページで確認を。", spec: "" },
  ksp105tg1: { name: "KWK 手動グリースポンプ KSP-105-TG1", short: "KWK 手動グリースポンプ KSP-105-TG1", href: C("https://item.rakuten.co.jp/crecote-shop/ta009553-ksp105tg1/"), img: "ta009553-ksp105tg1.jpg", store: "rakuten", tags: ["手動ポンプ"], point: "KSP-105の仕様違いモデル。違いは商品ページで比較を。", spec: "" },
  jae5k: { name: "KTC ロックカプラ用アタッチメントセット JAE5K", short: "KTC ロックカプラ用アタッチメント JAE5K", href: C("https://item.rakuten.co.jp/crecote-shop/ta036975-jae5k/"), img: "ta036975-jae5k.jpg", store: "rakuten", tags: ["ロックカプラ", "アタッチメント"], point: "ロックカプラ用のアタッチメントセット。給脂口に合わせて付け替えたいときに。セット内容は商品ページで確認を。", spec: "" },
} satisfies Record<string, Product>;

/* ---------- CTA（依頼文の実URLのみ） ---------- */
const CTA = {
  pump: {
    href: RQ("https://search.rakuten.co.jp/search/mall/%E3%82%B0%E3%83%AA%E3%82%B9%E3%83%9D%E3%83%B3%E3%83%97/?sid=426972"),
    label: "グリースポンプの一覧",
  },
  gun: {
    href: RQ("https://search.rakuten.co.jp/search/mall/%E3%82%B0%E3%83%AA%E3%83%BC%E3%82%B9%E3%82%AC%E3%83%B3/?sid=426972"),
    label: "グリースガンの一覧",
  },
} as const;

/* ---------- 内部リンク・姉妹サイト ---------- */
const RELATED: { title: string; href: string; site: "sagyou" | "heat" }[] = [
  { title: "KHKウォームホイールの選び方｜型番の見方・AG/BG/CGの違い", href: "/articles/khk-worm-wheel-guide", site: "sagyou" },
  { title: "TRUSCOローラーキャビネットの選び方｜TFRC・TRC型番の違い", href: "/articles/roller-cabinet-trusco", site: "sagyou" },
  { title: "スチール保管庫の選び方", href: "", site: "sagyou" },
];

/* ---------- 参考資料（本文の数値の出典） ---------- */
const REFERENCES: { title: string; href: string }[] = [
  { title: "ヤマダコーポレーション グリースガンシリーズ カタログ（2026年2月版）", href: "https://product.yamadacorp.co.jp/download/docs/greasgun_2025.pdf" },
  { title: "ヤマダコーポレーション デジタルグリースガン GMN-500 取扱説明書", href: "https://product.yamadacorp.co.jp/products/docs/AUT008U.pdf" },
  { title: "ザーレン・コーポレーション（SAMOA・macnaught輸入元）グリース注入器の製品一覧", href: "https://pr.mono.ipros.com/en/zahren/product/category/56264" },
  { title: "ザーレン・コーポレーション「サモア製」ドラム缶用エアー式グリースポンプ S35D", href: "https://pr.mono.ipros.com/zahren/product/detail/2000661842/" },
  { title: "ザーレン・コーポレーション【マクノート】手動式グリースポンプ ボリュームポンプJ2", href: "https://pr.mono.ipros.com/zahren/product/detail/2000076133/" },
  { title: "MISUMI マクノート グリス ボリュームポンプ J2（仕様）", href: "https://jp.misumi-ec.com/vona2/detail/223005068163/" },
  { title: "モノタロウ 広和 手動グリースポンプ KMPシリーズ（仕様）", href: "https://www.monotaro.com/g/06128924/" },
];

/* =========================================================
   表示コンポーネント（page.tsx 内で定義）
   ========================================================= */
function H2({ id, num, children }: { id: string; num: string; children: ReactNode }) {
  return (
    <h2
      id={id}
      className="mb-6 mt-14 flex scroll-mt-24 items-start gap-3 border-l-[6px] border-gray-900 pl-4 text-3xl font-black leading-snug tracking-wide text-gray-900 sm:text-4xl"
    >
      <span className="mt-1 inline-flex h-9 min-w-9 shrink-0 items-center justify-center rounded-full bg-gray-900 px-2 text-sm font-bold text-white">
        {num}
      </span>
      <span>{children}</span>
    </h2>
  );
}

function H3({ children }: { children: ReactNode }) {
  return (
    <h3 className="mb-4 mt-8 flex items-center gap-2 text-2xl font-black leading-snug tracking-wide text-gray-900 sm:text-3xl">
      <span aria-hidden="true" className="inline-block h-5 w-1.5 rounded bg-gray-900" />
      {children}
    </h3>
  );
}

function Mk({ children }: { children: ReactNode }) {
  return <mark className={cls.mark}>{children}</mark>;
}

function PointBox({ title = "ポイント", children }: { title?: string; children: ReactNode }) {
  return (
    <div className="my-6 rounded-xl border border-gray-300 bg-gray-50 p-5">
      <p className="mb-2 flex items-center gap-2 text-sm font-bold text-gray-900">
        <span className="rounded bg-gray-900 px-2 py-0.5 text-xs text-white">POINT</span>
        {title}
      </p>
      <div className="space-y-2 text-[16px] leading-relaxed text-gray-900">{children}</div>
    </div>
  );
}

function CautionBox({ title = "注意", children }: { title?: string; children: ReactNode }) {
  return (
    <div className="my-6 rounded-xl border-2 border-gray-900 bg-white p-5">
      <p className="mb-2 flex items-center gap-2 text-sm font-bold text-gray-900">
        <span aria-hidden="true" className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-900 text-xs text-white">
          !
        </span>
        {title}
      </p>
      <div className="space-y-2 text-[16px] leading-relaxed text-gray-900">{children}</div>
    </div>
  );
}

function StoreBadge({ store }: { store: Store }) {
  return (
    <span className="rounded bg-gray-900 px-2 py-0.5 text-[11px] font-bold tracking-wide text-white">
      {STORE_LABEL[store]}
    </span>
  );
}

/** 商品カード：カード全体が <a>（作業用品ナビ仕様） */
function ProductCard({ p }: { p: Product }) {
  return (
    <a
      href={p.href}
      {...EXT}
      aria-label={`${p.name}の価格・在庫を${STORE_LABEL[p.store]}で見る（新しいタブ）`}
      className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-gray-900 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-gray-400"
    >
      <div className="relative aspect-square bg-gray-50">
        <img
          src={`${IMG_BASE}${p.img}`}
          alt={p.name}
          loading="lazy"
          width={480}
          height={480}
          className="h-full w-full object-contain p-3"
        />
        <span className="absolute left-2 top-2">
          <StoreBadge store={p.store} />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-3 sm:p-4">
        <div className="mb-2 flex flex-wrap gap-1">
          {p.tags.map((t) => (
            <span key={t} className="rounded-full bg-gray-100 px-2 py-0.5 text-[11px] font-medium text-gray-700">
              {t}
            </span>
          ))}
        </div>
        <p className="text-sm font-bold leading-snug text-gray-900 group-hover:underline">{p.name}</p>
        {p.spec ? <p className="mt-1 text-xs text-gray-500">{p.spec}</p> : null}
        <p className="mt-2 flex-1 text-[13px] leading-relaxed text-gray-700">{p.point}</p>
        <span className="mt-3 inline-flex min-h-[48px] items-center justify-center rounded-lg bg-gray-900 px-3 text-sm font-bold text-white transition group-hover:bg-gray-700">
          価格・在庫を見る →
        </span>
      </div>
    </a>
  );
}

/** 大きめの横長カード（その章の主役商品） */
function FeaturedCard({ p, lead }: { p: Product; lead: string }) {
  return (
    <a
      href={p.href}
      {...EXT}
      aria-label={`${p.name}の価格・在庫を${STORE_LABEL[p.store]}で見る（新しいタブ）`}
      className="group my-6 flex flex-col overflow-hidden rounded-2xl border-2 border-gray-900 bg-white shadow-sm transition hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-gray-400 sm:flex-row"
    >
      <div className="relative bg-gray-50 sm:w-2/5">
        <img
          src={`${IMG_BASE}${p.img}`}
          alt={p.name}
          loading="lazy"
          width={560}
          height={560}
          className="aspect-square h-full w-full object-contain p-4"
        />
        <span className="absolute left-3 top-3">
          <StoreBadge store={p.store} />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-bold tracking-widest text-gray-500">{lead}</p>
        <p className="mt-1 text-lg font-bold leading-snug text-gray-900 group-hover:underline">{p.name}</p>
        {p.spec ? <p className="mt-1 text-sm text-gray-500">{p.spec}</p> : null}
        <div className="mt-3 flex flex-wrap gap-1">
          {p.tags.map((t) => (
            <span key={t} className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-700">
              {t}
            </span>
          ))}
        </div>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-700">{p.point}</p>
        <span className="mt-4 inline-flex min-h-[52px] items-center justify-center rounded-xl bg-gray-900 px-5 text-base font-bold text-white transition group-hover:bg-gray-700">
          {STORE_LABEL[p.store]}で価格・在庫を見る →
        </span>
      </div>
    </a>
  );
}

/** 横一列のミニカード（組み合わせパーツ・サブ商品） */
function MiniRow({ p }: { p: Product }) {
  return (
    <a
      href={p.href}
      {...EXT}
      aria-label={`${p.name}の価格・在庫を${STORE_LABEL[p.store]}で見る（新しいタブ）`}
      className="group flex min-h-[72px] items-center gap-3 rounded-xl border border-gray-200 bg-white p-3 transition hover:border-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-400"
    >
      <img
        src={`${IMG_BASE}${p.img}`}
        alt=""
        loading="lazy"
        width={64}
        height={64}
        className="h-16 w-16 shrink-0 rounded-lg border border-gray-100 bg-gray-50 object-contain p-1"
      />
      <span className="min-w-0 flex-1">
        <span className="flex flex-wrap items-center gap-1.5">
          <StoreBadge store={p.store} />
          <span className="text-sm font-bold leading-snug text-gray-900 group-hover:underline">{p.short}</span>
        </span>
        {p.point ? <span className="mt-1 block text-xs leading-relaxed text-gray-600">{p.point}</span> : null}
      </span>
      <span aria-hidden="true" className="shrink-0 rounded-lg bg-gray-900 px-3 py-2 text-xs font-bold text-white">
        見る →
      </span>
    </a>
  );
}

/** 表・リスト内の商品リンク（サムネ付き） */
function PLink({ p, label }: { p: Product; label?: string }) {
  return (
    <a
      href={p.href}
      {...EXT}
      className="inline-flex items-center gap-1.5 rounded py-0.5 font-semibold text-gray-900 underline decoration-gray-400 underline-offset-2 hover:decoration-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400"
    >
      <img
        src={`${IMG_BASE}${p.img}`}
        alt=""
        loading="lazy"
        width={36}
        height={36}
        className="h-9 w-9 shrink-0 rounded border border-gray-200 bg-white object-contain"
      />
      <span>{label ?? p.short}</span>
    </a>
  );
}

/** メインCTA（グリースガン・グリースポンプの2本立て） */
function MainCta({ eyebrow, title, body, first = "gun" }: { eyebrow: string; title: string; body: string; first?: "gun" | "pump" }) {
  const order = first === "gun" ? [CTA.gun, CTA.pump] : [CTA.pump, CTA.gun];
  return (
    <aside aria-label="商品一覧への案内" className="my-10 overflow-hidden rounded-2xl border-2 border-gray-900 bg-white">
      <div className="bg-gray-900 px-5 py-2 text-xs font-bold tracking-widest text-white">{eyebrow}</div>
      <div className="p-5 sm:p-6">
        <p className="text-lg font-bold leading-snug text-gray-900 sm:text-xl">{title}</p>
        <p className="mt-2 text-sm leading-relaxed text-gray-700">{body}</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {order.map((c, i) => (
            <a
              key={c.href}
              href={c.href}
              {...EXT}
              className={`inline-flex min-h-[56px] items-center justify-center rounded-xl px-5 text-base font-bold transition focus:outline-none focus:ring-4 focus:ring-gray-400 ${
                i === 0 ? "bg-gray-900 text-white hover:bg-gray-700" : "border-2 border-gray-900 bg-white text-gray-900 hover:bg-gray-100"
              }`}
            >
              {c.label}を見る（楽天市場）→
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}

/** サブCTA（一覧ページ） */
function SubCta({ href, label, note }: { href: string; label: string; note: string }) {
  return (
    <a
      href={href}
      {...EXT}
      className="group my-4 flex min-h-[64px] items-center justify-between gap-3 rounded-xl border border-gray-300 bg-gray-50 px-5 py-3 transition hover:border-gray-900 hover:bg-white focus:outline-none focus:ring-4 focus:ring-gray-400"
    >
      <span>
        <span className="block text-base font-bold text-gray-900 group-hover:underline">{label}を見る</span>
        <span className="block text-xs text-gray-600">{note}</span>
      </span>
      <span aria-hidden="true" className="shrink-0 rounded-lg bg-gray-900 px-3 py-2 text-sm font-bold text-white">
        →
      </span>
    </a>
  );
}


function TableWrap({ caption, children }: { caption: string; children: ReactNode }) {
  return (
    <div className="my-6 overflow-x-auto rounded-xl border border-gray-200">
      <table className="w-full min-w-[640px] border-collapse text-left text-sm">
        <caption className="bg-gray-900 px-4 py-2 text-left text-sm font-bold text-white">{caption}</caption>
        {children}
      </table>
    </div>
  );
}

const TH = "border-b border-gray-400 bg-gray-100 px-3 py-2.5 text-sm font-bold text-gray-900";
const TD = "border-b border-gray-200 px-3 py-3 align-top text-[15px] leading-7 text-gray-900";

/* =========================================================
   メタデータ・構造化データ
   ========================================================= */
export const metadata: Metadata = {
  title: `${TITLE} | 作業用品ナビ`,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "作業用品ナビ",
    locale: "ja_JP",
    type: "article",
    publishedTime: PUBLISHED,
    modifiedTime: UPDATED,
    images: [{ url: `${SITE}${IMG_BASE}ta009288-kh500s.jpg`, width: 1200, height: 1200, alt: "ヤマダ ハンドグリースガン KH-500S" }],
  },
};

const FAQS: { q: string; a: string }[] = [
  {
    q: "グリースガンとグリースポンプの違いは何ですか？",
    a: "グリースガンは、手に持ってグリースニップルへグリースを押し込む工具です。グリースポンプは、ペール缶やドラム缶のグリースを直接くみ上げて送り出す装置を指します。ただし通販では、手動のグリースガンを「グリスポンプ」と呼んで売っている例もあるため、商品名だけでなく容量や缶への取り付け方で見分けてください。",
  },
  {
    q: "手詰めとカートリッジ、どちらのグリースガンを選べばいいですか？",
    a: "手を汚さず素早く交換したいならカートリッジ式、ペール缶のグリースを安く使いたいなら手詰め式が向きます。両方に使える兼用タイプを選んでおくと、現場の状況に合わせて使い分けられます。",
  },
  {
    q: "グリースガンからグリースが出ないときは、どうすればいいですか？",
    a: "多いのはグリースを詰めたときに空気が入る「エア噛み」です。エア抜き弁をゆるめてレバーを数回動かし、グリースが出てきたら弁を締めます。直らない場合はノズルやニップルの詰まり、カートリッジのセット不良も確認してください。",
  },
  {
    q: "ペール缶のグリースをグリースガンに詰め替える方法は？",
    a: "ヘラで直接詰める、ガンの筒をグリースに差し込んで吸い込ませる、充填ポンプで送り込む、の3通りがあります。詰め替えの回数が多い現場では、ペール缶に直接セットする充填ポンプを使うと手が汚れず、空気も入りにくくなります。",
  },
  {
    q: "グリースの番手（ちょう度）はどれを選べばいいですか？",
    a: "まずは機械メーカーが指定する番手に合わせるのが基本です。番手は数字が大きいほど硬いグリースです。グリースポンプやグリースガンには使えるちょう度の範囲が決まっているので、たとえば「#0〜#2」「#00〜#1」といった適合範囲に収まるかも確かめてください。",
  },
  {
    q: "エア式と電動式のグリースガンはどちらがいいですか？",
    a: "工場にコンプレッサーのエア配管があるならエア式が手軽で、本体も比較的軽量です。エアがない場所ではコンセント式や充電式の電動タイプが向きます。屋外や高所で使うなら、コードもホースもいらない充電式が便利です。",
  },
];

const JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: TITLE,
    description: DESCRIPTION,
    datePublished: PUBLISHED,
    dateModified: UPDATED,
    inLanguage: "ja",
    mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
    image: [`${SITE}${IMG_BASE}ta009288-kh500s.jpg`],
    author: { "@type": "Organization", name: "作業用品ナビ編集部", url: SITE },
    publisher: { "@type": "Organization", name: "作業用品ナビ", url: SITE },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: SITE },
      { "@type": "ListItem", position: 2, name: "記事一覧", item: `${SITE}/articles` },
      { "@type": "ListItem", position: 3, name: "グリースガンとグリースポンプの選び方", item: PAGE_URL },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];

const TOC = [
  { id: "sec1", label: "グリースガンとグリースポンプの違い" },
  { id: "sec2", label: "現場別の選び方早見表" },
  { id: "sec3", label: "手動グリースガンの選び方" },
  { id: "sec4", label: "エア式・電動グリースガン" },
  { id: "sec5", label: "グリースポンプの選び方" },
  { id: "sec6", label: "充填ポンプと集中給脂用ポンプ" },
  { id: "sec7", label: "給脂量を見える化する道具" },
  { id: "sec8", label: "グリースニップルとノズルの合わせ方" },
  { id: "sec9", label: "グリースが出ない時のエア抜きと安全" },
  { id: "faq", label: "よくある質問" },
  { id: "summary", label: "まとめ" },
];

/* =========================================================
   ページ本体
   ========================================================= */
export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-[850px] px-4 pb-20 pt-6 text-gray-900 sm:px-6">
      {JSON_LD.map((d, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />
      ))}

      <nav aria-label="パンくずリスト" className="mb-5 text-xs text-gray-500">
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link href="/" className="underline-offset-2 hover:underline">
              ホーム
            </Link>
          </li>
          <li aria-hidden="true">›</li>
          <li>
            <Link href="/articles" className="underline-offset-2 hover:underline">
              記事一覧
            </Link>
          </li>
          <li aria-hidden="true">›</li>
          <li className="text-gray-700">グリースガンとグリースポンプの選び方</li>
        </ol>
      </nav>

      <header className="overflow-hidden rounded-2xl bg-gray-900 text-white">
        <div className="p-6 sm:p-8">
          <p className="inline-block rounded bg-white px-2 py-0.5 text-xs font-bold text-gray-900">給脂・潤滑機器</p>
          <h1 className="mt-3 text-2xl font-bold leading-snug sm:text-3xl">{TITLE}</h1>
          <div className="mt-4 flex flex-wrap gap-2">
            {["整備・設備保全向け", "手動／エア／電動を比較", "ペール缶・ドラム缶ポンプ", "エア抜きの手順"].map((c) => (
              <span key={c} className="rounded-full border border-gray-500 px-3 py-1 text-xs font-medium text-gray-100">
                {c}
              </span>
            ))}
          </div>
          <p className="mt-4 text-xs text-gray-300">
            公開日：<time dateTime={PUBLISHED}>2026年10月9日</time>　最終更新日：
            <time dateTime={UPDATED}>2026年10月9日</time>　文：作業用品ナビ編集部
          </p>
        </div>
      </header>

      <section className="mt-8 space-y-4 text-[16px] leading-[1.95]">
        <p>
          「グリースガンを買い替えたい」「ペール缶のグリースをもっと楽に使いたい」。そう思って調べ始めると、グリースガン、グリスポンプ、ルブリケーター、充填ポンプと似た名前の道具が並び、どれが自分の現場に合うのか分かりにくくなります。
        </p>
        <p>
          この記事では、<Mk>グリースガンとグリースポンプの違い</Mk>
          を整理したうえで、給脂箇所の数と現場の動力（電気・エア）から選ぶ方法、詰め替えの手順、グリースが出ないときのエア抜きまでをまとめました。仕様はメーカー・輸入元の公表値をもとにしています。
        </p>
      </section>

      <div className="mt-6 rounded-xl border border-gray-200 bg-white p-5">
        <p className="mb-2 text-sm font-bold text-gray-900">この記事が役に立つ人</p>
        <ul className="space-y-1.5 text-sm leading-relaxed text-gray-700">
          <li>・工場の設備保全や、建設機械・トラック・農機の整備でグリースアップを担当している</li>
          <li>・給脂箇所が多く、手動のグリースガンでは時間と手間がかかりすぎている</li>
          <li>・ペール缶やドラム缶のグリースを、手を汚さずに効率よく使いたい</li>
        </ul>
      </div>

      <section aria-labelledby="conclusion" className="mt-8 rounded-2xl border-2 border-gray-900 bg-gray-50 p-5 sm:p-6">
        <h2 id="conclusion" className="flex items-center gap-2 text-lg font-bold text-gray-900">
          <span className="rounded bg-gray-900 px-2 py-0.5 text-xs text-white">結論</span>
          給脂の「量」と現場の「動力」で選ぶ
        </h2>
        <ol className="mt-4 space-y-3 text-[15px] leading-relaxed">
          {[
            "グリースガンはニップルへ注入する手持ち工具、グリースポンプは缶から直接くみ上げて送る装置。通販では手動ガンを「グリスポンプ」と呼ぶ例もあるので、容量と取り付け方で見分ける。",
            "給脂箇所が少ないなら手動ガン、多いならエア式・電動式、工場で大量に使うならペール缶・ドラム缶用のグリースポンプが基本の選び方。",
            "手動ガンは「詰め方（手詰め・カートリッジ・兼用）」「最大圧力」「1回の吐出量」で比べる。迷ったら兼用タイプが無難。",
            "詰め替えが多い現場は、ペール缶に直付けする充填ポンプで手の汚れとエア噛みを減らせる。",
            "グリースが出ない原因の多くはエア噛み。エア抜きの手順を覚え、保護メガネと手袋で作業する。",
          ].map((t, i) => (
            <li key={i} className="flex gap-3">
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-900 text-xs font-bold text-white">
                {i + 1}
              </span>
              <span>{t}</span>
            </li>
          ))}
        </ol>
      </section>

      <MainCta
        eyebrow="楽天市場 CRECOTE｜給脂機器"
        title="グリースガンとグリースポンプを一覧で見比べる"
        body="手動・エア式・電動のグリースガンから、ペール缶用ポンプ、充填ポンプまで。型番が決まっている方は一覧からそのまま探せます。"
      />

      <nav aria-label="目次" className="my-10 rounded-xl border border-gray-200 bg-white p-5">
        <p className="mb-3 text-sm font-bold text-gray-900">目次</p>
        <ol className="space-y-2 text-sm">
          {TOC.map((t, i) => (
            <li key={t.id} className="flex gap-2">
              <span className="w-6 shrink-0 font-bold text-gray-400">{String(i + 1).padStart(2, "0")}</span>
              <a href={`#${t.id}`} className="text-gray-800 underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900">
                {t.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <article className="text-[16px] leading-[1.95]">
        {/* ================= 01 ================= */}
        <H2 id="sec1" num="01">
          グリースガンとグリースポンプの違い
        </H2>
        <p>
          どちらもグリースを給脂点へ送る道具ですが、扱うグリースの量と、グリースをどこから取り出すかが違います。グリースガンは数百mL程度のグリースを本体に入れて持ち歩く工具。グリースポンプは、16〜20kgのペール缶や180kgのドラム缶に直接取り付けて、缶のグリースをそのままくみ上げる装置です。
        </p>
        <TableWrap caption="グリースガンとグリースポンプの比較">
          <thead>
            <tr>
              <th className={TH}>項目</th>
              <th className={TH}>グリースガン</th>
              <th className={TH}>グリースポンプ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={`${TD} whitespace-nowrap font-bold`}>グリースの入れ方</td>
              <td className={TD}>本体に手詰め、またはカートリッジをセット</td>
              <td className={TD}>ペール缶・ドラム缶に直接取り付け</td>
            </tr>
            <tr>
              <td className={`${TD} whitespace-nowrap font-bold`}>一度に使える量</td>
              <td className={TD}>数百mL程度（ヤマダ製の手詰め容量は140〜550mL）</td>
              <td className={TD}>缶1本分（16kg〜180kg）</td>
            </tr>
            <tr>
              <td className={`${TD} whitespace-nowrap font-bold`}>動力</td>
              <td className={TD}>手動／エア／電動</td>
              <td className={TD}>手動／エアが中心（電動式もある）</td>
            </tr>
            <tr>
              <td className={`${TD} whitespace-nowrap font-bold`}>向く現場</td>
              <td className={TD}>点検の合間の給脂、車両や機械1台ずつの整備</td>
              <td className={TD}>工場の生産ライン、整備拠点での大量給脂、詰め替え</td>
            </tr>
            <tr>
              <td className={`${TD} whitespace-nowrap font-bold`}>代表例</td>
              <td className={TD}>
                <div className="flex flex-col gap-1">
                  <PLink p={P.kh500s} />
                  <PLink p={P.amg400n} />
                </div>
              </td>
              <td className={TD}>
                <div className="flex flex-col gap-1">
                  <PLink p={P.s35p} />
                  <PLink p={P.j2} />
                </div>
              </td>
            </tr>
          </tbody>
        </TableWrap>
        <PointBox title="「グリスポンプ」と書かれた手動ガンに注意">
          <p>
            通販サイトでは、レバー式の手動グリースガンが「グリスポンプ」という名前で売られていることがあります。缶に取り付けるポンプを探しているのか、手持ちのガンを探しているのか。商品名だけで判断せず、<Mk>容量（mLかkgか）と取り付け方</Mk>
            を確かめると選び間違いを防げます。
          </p>
        </PointBox>
        <p>
          グリースポンプにも種類があり、給脂点へ直接送る「給脂用」、グリースガンや専用缶へ詰め替える「充填用」、配管で複数の給脂点へ送る「集中給脂用」に分かれます。選び方は5章と6章で詳しく。
        </p>

        {/* ================= 02 ================= */}
        <H2 id="sec2" num="02">
          現場別の選び方早見表：給脂の量×動力で決める
        </H2>
        <p>
          最初に決めたいのは、1回の作業で何か所に給脂するかと、現場で使える動力です。この2つが決まれば、候補はかなり絞り込めます。
        </p>
        <TableWrap caption="現場別・グリース給脂機器の選び方">
          <thead>
            <tr>
              <th className={TH}>こんな現場</th>
              <th className={TH}>おすすめの方式</th>
              <th className={TH}>候補の商品</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={TD}>給脂箇所が少ない。車両や機械を1台ずつ整備する</td>
              <td className={`${TD} font-bold`}>手動グリースガン</td>
              <td className={TD}>
                <div className="flex flex-col gap-1">
                  <PLink p={P.kh500s} />
                  <PLink p={P.g500} />
                </div>
              </td>
            </tr>
            <tr>
              <td className={TD}>固着ぎみのニップル、高い圧力が必要な箇所がある</td>
              <td className={`${TD} font-bold`}>高圧タイプの手動ガン</td>
              <td className={TD}>
                <div className="flex flex-col gap-1">
                  <PLink p={P.ch650ll} />
                  <PLink p={P.hpgg} />
                </div>
              </td>
            </tr>
            <tr>
              <td className={TD}>給脂箇所が多く、コンプレッサーのエアがある</td>
              <td className={`${TD} font-bold`}>エア式グリースガン</td>
              <td className={TD}>
                <div className="flex flex-col gap-1">
                  <PLink p={P.amg400n} />
                  <PLink p={P.tag508nab} />
                </div>
              </td>
            </tr>
            <tr>
              <td className={TD}>給脂箇所が多いが、エア配管がない</td>
              <td className={`${TD} font-bold`}>電動グリースガン</td>
              <td className={TD}>
                <PLink p={P.eg400a2} />
              </td>
            </tr>
            <tr>
              <td className={TD}>工場や整備拠点で、ペール缶・ドラム缶から大量に給脂する</td>
              <td className={`${TD} font-bold`}>エア式グリースポンプ</td>
              <td className={TD}>
                <div className="flex flex-col gap-1">
                  <PLink p={P.s35p} />
                  <PLink p={P.s35d} />
                </div>
              </td>
            </tr>
            <tr>
              <td className={TD}>電気もエアもない場所で、まとまった量を給脂する</td>
              <td className={`${TD} font-bold`}>手動グリースポンプ</td>
              <td className={TD}>
                <div className="flex flex-col gap-1">
                  <PLink p={P.k5} />
                  <PLink p={P.k6} />
                </div>
              </td>
            </tr>
            <tr>
              <td className={TD}>グリースガンへの詰め替えが毎日のようにある</td>
              <td className={`${TD} font-bold`}>充填ポンプ</td>
              <td className={TD}>
                <PLink p={P.j2} />
              </td>
            </tr>
            <tr>
              <td className={TD}>設備に集中給脂の配管がある、またはこれから組みたい</td>
              <td className={`${TD} font-bold`}>集中給脂用の手動ポンプ</td>
              <td className={TD}>
                <PLink p={P.kmps221} />
              </td>
            </tr>
          </tbody>
        </TableWrap>
        <p>
          どの方式でも、給脂点の<Mk>ニップルの形状に合ったノズル</Mk>
          が欠かせません。ガンやポンプを選んだら、8章でノズルとの組み合わせも確かめておきましょう。
        </p>

        {/* ================= 03 ================= */}
        <H2 id="sec3" num="03">
          手動グリースガンの選び方：詰め方・最大圧力・吐出量
        </H2>
        <p>
          レバーを握ってグリースを押し出す手動グリースガンは、電源もエアもいらない最も基本的な給脂工具です。選ぶときは次の3点を比べます。
        </p>
        <div className="my-6 grid gap-3 sm:grid-cols-3">
          {[
            { t: "① 詰め方", d: "手詰め専用、カートリッジ専用、兼用の3種類。カートリッジは手が汚れにくく、手詰めはペール缶のグリースを使えて経済的。" },
            { t: "② 最大圧力", d: "ヤマダ製の手動ガンでも10MPaから80MPaまで幅がある。古いニップルや詰まりぎみの箇所には高圧タイプが有利。" },
            { t: "③ 1回の吐出量", d: "レバー1回で出る量。多いほど早く入るが、少量ずつ入れたい軸受には控えめな吐出量が扱いやすい。" },
          ].map((c) => (
            <div key={c.t} className="rounded-xl border border-gray-200 bg-white p-4">
              <p className="font-bold text-gray-900">{c.t}</p>
              <p className="mt-1 text-sm leading-relaxed text-gray-700">{c.d}</p>
            </div>
          ))}
        </div>
        <TableWrap caption="手動グリースガンの比較（数値はメーカー・販売店の公表値）">
          <thead>
            <tr>
              <th className={TH}>製品</th>
              <th className={TH}>詰め方</th>
              <th className={TH}>容量</th>
              <th className={TH}>最大圧力</th>
              <th className={TH}>1回の吐出量</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={TD}><PLink p={P.kh500s} /></td>
              <td className={TD}>手詰め・カートリッジ兼用</td>
              <td className={TD}>手詰550mL／カートリッジ420mL</td>
              <td className={TD}>50MPa</td>
              <td className={TD}>1.0mL</td>
            </tr>
            <tr>
              <td className={TD}><PLink p={P.ch650ll} /></td>
              <td className={TD}>手詰め・カートリッジ兼用</td>
              <td className={TD}>手詰550mL／カートリッジ420mL</td>
              <td className={TD}>80MPa</td>
              <td className={TD}>1.0mL</td>
            </tr>
            <tr>
              <td className={TD}><PLink p={P.g500} /></td>
              <td className={TD}>手詰め専用</td>
              <td className={TD}>油槽径63mm</td>
              <td className={TD}>商品ページで確認</td>
              <td className={TD}>0.7cc</td>
            </tr>
            <tr>
              <td className={TD}><PLink p={P.a488} /></td>
              <td className={TD}>商品ページで確認</td>
              <td className={TD}>商品ページで確認</td>
              <td className={TD}>商品ページで確認</td>
              <td className={TD}>ダブルアクション</td>
            </tr>
            <tr>
              <td className={TD}><PLink p={P.hpgg} /></td>
              <td className={TD}>商品ページで確認</td>
              <td className={TD}>商品ページで確認</td>
              <td className={TD}>高圧仕様</td>
              <td className={TD}>商品ページで確認</td>
            </tr>
          </tbody>
        </TableWrap>
        <p className="text-xs text-gray-500">
          ヤマダ製の最大圧力は、同社カタログでチャックノズル使用時の値（CH-650LLはCNP-1使用時）。KTC G500の数値は商品名の表記によります。
        </p>
        <FeaturedCard p={P.kh500s} lead="手詰め・カートリッジ兼用の定番" />
        <div className="my-6 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          <ProductCard p={P.ch650ll} />
          <ProductCard p={P.g500} />
          <ProductCard p={P.a488} />
        </div>
        <div className="my-3 grid gap-3 sm:grid-cols-2">
          <MiniRow p={P.hpgg} />
        </div>
        <PointBox title="カートリッジは「油槽径」で適合を確認">
          <p>
            カートリッジ式で使うときは、本体の油槽径とカートリッジの径が合っている必要があります。ヤマダのKH-500SやCH-650LLは油槽径59.6mmで、420mLの蛇腹式カートリッジに対応しています。別のメーカーのカートリッジを使うときは、径と長さが収まるかを先に確かめてください。
          </p>
        </PointBox>
        <H3>カートリッジは「蛇腹式」と「筒型」の2種類</H3>
        <p>
          カートリッジグリースには、使うほど縮んでいく蛇腹式と、紙やプラスチックの筒に入った筒型があります。ヤマダのカタログによれば、蛇腹式は詰め替えのときに手を汚さず、グリースの無駄も出ないのが利点。同社のエア駆動式AMG-400Nや電動式EG-400AⅡは蛇腹式カートリッジ専用で、筒型に対応するのは一部の兼用モデルに限られます。ガンを買う前に、現場でふだん使っているカートリッジの形式を確かめておくと安心です。
        </p>
        <SubCta href={CTA.gun.href} label={CTA.gun.label} note="手動・エア式・電動のグリースガンを楽天市場でまとめて比較" />

        {/* ================= 04 ================= */}
        <H2 id="sec4" num="04">
          エア式・電動グリースガン：大量給脂の手間を減らす
        </H2>
        <p>
          給脂箇所が数十か所を超えると、手動ガンではレバーを握る回数が増え、作業者の手首にも負担がかかります。動力式のグリースガンなら、スイッチやトリガーを引くだけでグリースが連続して出ます。選び方の軸は「現場にエアがあるか、電気があるか」です。
        </p>
        <TableWrap caption="エア式・電動グリースガンの比較">
          <thead>
            <tr>
              <th className={TH}>製品</th>
              <th className={TH}>動力</th>
              <th className={TH}>最大圧力</th>
              <th className={TH}>吐出量</th>
              <th className={TH}>本体質量</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={TD}><PLink p={P.amg400n} /></td>
              <td className={TD}>エア（使用圧0.3〜0.7MPa）</td>
              <td className={TD}>28MPa</td>
              <td className={TD}>310mL/分</td>
              <td className={TD}>2.1kg</td>
            </tr>
            <tr>
              <td className={TD}><PLink p={P.eg400a2} /></td>
              <td className={TD}>電気（AC100V・定格420W）</td>
              <td className={TD}>40MPa</td>
              <td className={TD}>72g/分</td>
              <td className={TD}>約4kg</td>
            </tr>
            <tr>
              <td className={TD}><PLink p={P.tag508nab} /></td>
              <td className={TD}>エア（カートリッジ専用）</td>
              <td className={TD} colSpan={3}>仕様は商品ページで確認</td>
            </tr>
            <tr>
              <td className={TD}><PLink p={P.tag508nabtm} /></td>
              <td className={TD}>エア（カートリッジ・手詰め兼用）</td>
              <td className={TD} colSpan={3}>仕様は商品ページで確認</td>
            </tr>
          </tbody>
        </TableWrap>
        <p className="text-xs text-gray-500">ヤマダ製の数値は同社カタログ（2026年2月版）より。AMG-400Nはチャックノズルとレギュレーターが標準付属です。</p>
        <p>
          エア式のAMG-400Nは毎分310mLと吐出が速く、本体も2.1kgと軽めです。一方の電動式EG-400AⅡはエア配管がない場所でも使え、最大圧力は40MPa。ヤマダの電動シリーズには充電式のEG-400BⅡもあり、屋外や高所での給脂にはこちらが向きます。どちらも420mLの蛇腹式カートリッジ専用で、手詰めには使えない点に注意しましょう。
        </p>
        <div className="my-6 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          <ProductCard p={P.amg400n} />
          <ProductCard p={P.eg400a2} />
          <ProductCard p={P.tag508nabtm} />
        </div>
        <div className="my-3 grid gap-3 sm:grid-cols-2">
          <MiniRow p={P.tag508nab} />
        </div>

        <MainCta
          eyebrow="楽天市場 CRECOTE｜給脂機器"
          title="ガンの方式が決まったら、在庫と価格を確認"
          body="手動・エア式・電動のどれにするかが決まれば、一覧からの絞り込みはすぐです。替えのカートリッジやノズルもあわせて探せます。"
        />

        {/* ================= 05 ================= */}
        <H2 id="sec5" num="05">
          グリースポンプの選び方：缶のサイズ・動力・ちょう度
        </H2>
        <p>
          ペール缶やドラム缶に直接取り付けるグリースポンプは、詰め替えの手間がなく、缶の底までグリースを使い切れるのが利点です。缶の中ではフォロワープレート（押さえ板）がグリースの表面を押し下げ、ポンプが空気を吸い込むのを防ぎます。選ぶときに確かめたいのは次の3点です。
        </p>
        <div className="my-6 grid gap-3 sm:grid-cols-3">
          {[
            { t: "缶のサイズと材質", d: "16〜20kgのペール缶用か、180kgのドラム缶用か。金属缶専用で樹脂缶に対応しない製品もある。" },
            { t: "動力", d: "エア式は吐出量が多く連続作業向き。手動式は電気もエアもない場所で使える。" },
            { t: "適応ちょう度", d: "ポンプごとに使えるグリースの硬さが決まっている。例：#0〜#2、#00〜#1など。" },
          ].map((c) => (
            <div key={c.t} className="rounded-xl border border-gray-200 bg-white p-4">
              <p className="font-bold text-gray-900">{c.t}</p>
              <p className="mt-1 text-sm leading-relaxed text-gray-700">{c.d}</p>
            </div>
          ))}
        </div>
        <TableWrap caption="グリースポンプと周辺機器の比較（数値は輸入元・販売店の公表値）">
          <thead>
            <tr>
              <th className={TH}>製品</th>
              <th className={TH}>対応する缶</th>
              <th className={TH}>動力</th>
              <th className={TH}>主な仕様</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={TD}><PLink p={P.s35p} /></td>
              <td className={TD}>ペール缶</td>
              <td className={TD}>エア</td>
              <td className={TD}>最大吐出量2,000g/分</td>
            </tr>
            <tr>
              <td className={TD}><PLink p={P.s35d} /></td>
              <td className={TD}>180kgドラム缶専用</td>
              <td className={TD}>エア（作動圧0.2〜1.0MPa）</td>
              <td className={TD}>最高吐出圧60MPa、エア消費量450NL/分、24.0kg、ちょう度#0〜#2</td>
            </tr>
            <tr>
              <td className={TD}><PLink p={P.k5} /></td>
              <td className={TD}>専用缶付き</td>
              <td className={TD}>手動</td>
              <td className={TD}>電気・エア不要</td>
            </tr>
            <tr>
              <td className={TD}><PLink p={P.k6} /></td>
              <td className={TD}>缶別売</td>
              <td className={TD}>手動</td>
              <td className={TD}>小型で持ち運び向き</td>
            </tr>
            <tr>
              <td className={TD}><PLink p={P.sg3007} /></td>
              <td className={TD} colSpan={2}>ポンプのホース先端に付けるガン</td>
              <td className={TD}>スイベル付き</td>
            </tr>
            <tr>
              <td className={TD}><PLink p={P.sg4000} /></td>
              <td className={TD} colSpan={2}>ペール缶用ポンプのキャリー</td>
              <td className={TD}>缶とポンプをまとめて移動</td>
            </tr>
          </tbody>
        </TableWrap>
        <FeaturedCard p={P.s35p} lead="ペール缶から大量に給脂する工場に" />
        <div className="my-6 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          <ProductCard p={P.s35d} />
          <ProductCard p={P.k5} />
          <ProductCard p={P.k6} />
        </div>
        <div className="my-3 grid gap-3 sm:grid-cols-2">
          <MiniRow p={P.sg3007} />
          <MiniRow p={P.sg4000} />
        </div>
        <PointBox title="エア式ポンプは「エアの量」も確認する">
          <p>
            エア式のグリースポンプは、コンプレッサーの能力が足りないと本来の吐出量が出ません。S35Dは毎分450NLのエア消費量が公表されています。導入前に、工場のコンプレッサーの吐出空気量と、ほかの機器との同時使用に余裕があるかを確かめておきましょう。
          </p>
        </PointBox>
        <H3>グリースの番手（ちょう度）の見方</H3>
        <p>
          グリースの硬さは「番手」で表し、数字が大きいほど硬くなります。硬さを測った値が「ちょう度」で、こちらは数字が大きいほど柔らかいという逆の関係です。ポンプやガンは使える番手の範囲が決まっているため、手持ちのグリースが収まるかを先に確かめておきましょう。
        </p>
        <TableWrap caption="カートリッジグリースの番手とちょう度の例（ヤマダ マイクロマルチグリース）">
          <thead>
            <tr>
              <th className={TH}>種類</th>
              <th className={TH}>番手</th>
              <th className={TH}>ちょう度</th>
              <th className={TH}>使用温度範囲</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["シャーシグリース", "No.1", "310〜340", "−10℃〜80℃"],
              ["リチウムグリース", "No.2", "265〜295", "−15℃〜130℃"],
              ["モリブデングリース", "No.2", "265〜295", "−15℃〜150℃"],
            ].map(([a, b, c, d]) => (
              <tr key={a}>
                <td className={`${TD} font-bold`}>{a}</td>
                <td className={TD}>{b}</td>
                <td className={TD}>{c}</td>
                <td className={TD}>{d}</td>
              </tr>
            ))}
          </tbody>
        </TableWrap>
        <p className="text-xs text-gray-500">出典：ヤマダコーポレーション グリースガンシリーズ カタログ（2026年2月版）。</p>
        <p>
          適応範囲の例を挙げると、SAMOAのS35Dは#0〜#2、マクノートのJ2は#00〜#1です。ヤマダのCH-650LLはカートリッジでNo.0〜No.2、手詰めではNo.1が適用とされています（販売店の掲載値）。範囲より硬いグリースを使うと、吸い上げや吐出がうまくいかない原因になるので要注意。
        </p>
        <SubCta href={CTA.pump.href} label={CTA.pump.label} note="ペール缶用・ドラム缶用・手動式のグリースポンプを楽天市場で比較" />

        {/* ================= 06 ================= */}
        <H2 id="sec6" num="06">
          充填ポンプと集中給脂用ポンプ：詰め替えと配管給脂を楽にする
        </H2>
        <H3>グリースガンへの詰め替えは3通り</H3>
        <p>
          手詰め式のグリースガンにペール缶のグリースを入れる方法は、大きく分けて3つあります。毎日のように詰め替える現場ほど、③の充填ポンプの効果が大きくなります。
        </p>
        <ol className="my-6 space-y-3">
          {[
            { t: "ヘラで直接詰める", d: "道具がいらない反面、手が汚れやすく、グリースの中に空気やゴミが入りやすい方法です。" },
            { t: "缶から吸い込ませる", d: "グリースガンの筒を缶のグリースに差し込み、ロッドを引いて吸い込ませます。ヘラより空気は入りにくいものの、筒の外側の拭き取りが必要。" },
            { t: "充填ポンプで送り込む", d: "ペール缶に取り付けた充填ポンプから、ガンの充填口へグリースを押し込みます。手を汚さず、空気も入りにくい方法です。" },
          ].map((s, i) => (
            <li key={s.t} className="flex gap-4 rounded-xl border border-gray-200 bg-white p-4">
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-900 text-sm font-bold text-white">
                {i + 1}
              </span>
              <span>
                <span className="block font-bold text-gray-900">{s.t}</span>
                <span className="mt-1 block text-[15px] leading-relaxed text-gray-700">{s.d}</span>
              </span>
            </li>
          ))}
        </ol>
        <p>
          マクノートのJ2は、市販の16〜20kgの金属缶に直接取り付けて、グリースガンやK5・K6の専用缶へ詰め替えるための充填専用ポンプです。1ストロークで60cc、最大吐出圧力は4.9MPa、適応ちょう度は#00〜#1（販売店の掲載値）。樹脂缶には対応しない点に注意してください。同じマクノートのJ3は、リザーブタンクへの充填専用とされています。
        </p>
        <FeaturedCard p={P.j2} lead="ペール缶からの詰め替えを速く・汚さず" />
        <div className="my-3 grid gap-3 sm:grid-cols-2">
          <MiniRow p={P.j3} />
        </div>

        <H3>集中給脂用の手動ポンプ</H3>
        <p>
          クレーンやコンベヤのように給脂点が高い場所や奥まった場所に散らばる設備では、1台のポンプから配管で各給脂点へグリースを送る「集中給脂」が使われます。手の届きにくい場所へ毎回上がる必要がなくなり、給脂の漏れも減らせる方式です。配管と分配弁の組み方には、1本の主管で送るシングルライン式と、2本の主管を交互に加圧するデュアルライン式があります。
        </p>
        <p>
          KWK（広和）の手動グリースポンプKMPシリーズは、集中給脂を低コストで実現できる手動式で、小規模の給脂範囲で給脂頻度が少ない場所に向くとされています（販売店の説明）。用途の例はクレーン、工作機械、コンベヤ、空調機用のファンなど。KMPS221はシングルライン用です。既存の配管方式に合うかは、設備の図面や銘板で確かめてから選んでください。
        </p>
        <div className="my-6 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          <ProductCard p={P.kmps221} />
          <ProductCard p={P.ksp105} />
          <ProductCard p={P.ksp105tg1} />
        </div>

        {/* ================= 07 ================= */}
        <H2 id="sec7" num="07">
          給脂量を「見える化」する：デジタルグリースガンと流量計
        </H2>
        <p>
          グリースは多ければよいわけではありません。軸受に必要以上に詰め込むと、発熱やシールの損傷につながることがあると一般に言われています。逆に少なすぎれば、潤滑不足で摩耗が進むおそれも。担当者によって給脂量がばらつく現場では、量を数字で確かめられる道具が役立ちます。
        </p>
        <TableWrap caption="給脂量を管理する道具">
          <thead>
            <tr>
              <th className={TH}>製品</th>
              <th className={TH}>使い方</th>
              <th className={TH}>向く現場</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={TD}><PLink p={P.gmn500} /></td>
              <td className={TD}>ガン単体で給脂量をデジタル表示</td>
              <td className={TD}>手動給脂の量を記録・統一したい保全現場</td>
            </tr>
            <tr>
              <td className={TD}><PLink p={P.sg5012} /></td>
              <td className={TD}>ポンプのホース先端で、流量計を見ながら給脂</td>
              <td className={TD}>グリースポンプで大量に給脂する工場</td>
            </tr>
            <tr>
              <td className={TD}><PLink p={P.sg1110} /></td>
              <td className={TD}>流量を計る計量器</td>
              <td className={TD}>給脂量の管理を後付けしたいライン</td>
            </tr>
          </tbody>
        </TableWrap>
        <div className="my-6 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          <ProductCard p={P.gmn500} />
          <ProductCard p={P.sg5012} />
          <ProductCard p={P.sg1110} />
        </div>
        <PointBox title="給脂量は「機械の取扱説明書」が基準">
          <p>
            適切な給脂量と間隔は、軸受の大きさや回転数、使用環境で変わります。まず機械メーカーの取扱説明書や保全基準に従い、その量を道具で正確に再現する、という順番で考えると無理がありません。
          </p>
        </PointBox>

        {/* ================= 08 ================= */}
        <H2 id="sec8" num="08">
          グリースニップルとノズルの合わせ方：合わないと漏れる
        </H2>
        <p>
          グリースが給脂点に入らず横から漏れる原因の多くは、ニップルとノズルの組み合わせです。ヤマダのカタログでは、給脂口の形状を次の3種類に分けて説明しています。
        </p>
        <TableWrap caption="グリースフィッティング（ニップル）の主な種類">
          <thead>
            <tr>
              <th className={TH}>種類</th>
              <th className={TH}>主な使われ方</th>
              <th className={TH}>特徴</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={`${TD} whitespace-nowrap font-bold`}>ハイドロリックニップル</td>
              <td className={TD}>ベアリングや軸受など、最も一般的</td>
              <td className={TD}>ストレートとアングルがあり、取付場所で選ぶ（JIS B 1575）</td>
            </tr>
            <tr>
              <td className={`${TD} whitespace-nowrap font-bold`}>ピンタイプ</td>
              <td className={TD}>農機・鉄道車両など</td>
              <td className={TD}>凹形状の内部に付いており、上部にふたがある場合も</td>
            </tr>
            <tr>
              <td className={`${TD} whitespace-nowrap font-bold`}>ボタンヘッド</td>
              <td className={TD}>土木・建設機械など</td>
              <td className={TD}>ボタン径に大小があり、スライドさせて接続。口金の選択が必要</td>
            </tr>
          </tbody>
        </TableWrap>
        <p className="text-xs text-gray-500">出典：ヤマダコーポレーション グリースガンシリーズ カタログ。頭部の寸法はJIS・SAE・DINで共通とされる一方、規格に合わない寸法の製品もあると注意書きがあります。</p>
        <p>
          ハイドロリックニップルには、口金でつかむチャックノズルが一般的です。ノズルが外れやすい、斜めになって漏れるといった悩みには、ニップルにしっかり固定できるロックカプラ（ロック式の口金）が有効。狭い場所や向きの悪い給脂口には、ホースタイプのノズルに付け替えます。
        </p>
        <FeaturedCard p={P.jae5k} lead="ロックカプラを給脂口に合わせて付け替え" />
        <CautionBox title="ホースやノズルにも「使える圧力」がある">
          <p>
            ヤマダのマイクロホースは常用圧力21MPaと定められており、最大圧力が50MPaや80MPaのガンに付けても、その圧力まで使えるわけではありません。ホースやアタッチメントを付け替えたときは、いちばん低い部品の圧力に合わせて使ってください。
          </p>
        </CautionBox>

        {/* ================= 09 ================= */}
        <H2 id="sec9" num="09">
          グリースが出ないときのエア抜きと、安全な使い方
        </H2>
        <p>
          「レバーを握っても手応えがない」「グリースがプスプスと途切れる」。この症状の多くは、グリースを詰めたときに空気が入るエア噛みです。手詰めのときや、カートリッジを交換した直後に起こりやすくなります。
        </p>
        <ol className="my-6 space-y-3">
          {[
            { t: "エア抜き弁をゆるめる", d: "本体のヘッド付近にあるエア抜き弁（ブリーダー）を、少しだけゆるめてください。" },
            { t: "レバーを数回操作する", d: "空気が抜ける音がし、弁の周りからグリースがにじむまでレバーを動かします。" },
            { t: "弁を締めて試し出し", d: "弁を締めたら、ノズルの先からグリースが途切れずに出るかをウエスの上で確認。" },
            { t: "それでも出ないとき", d: "ノズルやニップルの詰まり、カートリッジのセット不良、ロッド（プランジャー）のロック解除忘れを順に疑ってみましょう。" },
          ].map((s, i) => (
            <li key={s.t} className="flex gap-4 rounded-xl border border-gray-200 bg-white p-4">
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-900 text-sm font-bold text-white">
                {i + 1}
              </span>
              <span>
                <span className="block font-bold text-gray-900">{s.t}</span>
                <span className="mt-1 block text-[15px] leading-relaxed text-gray-700">{s.d}</span>
              </span>
            </li>
          ))}
        </ol>
        <p className="text-xs text-gray-500">エア抜き弁の位置や操作は製品で異なります。必ず各製品の取扱説明書に従ってください。</p>
        <p>
          エア抜きの手間を減らしたい場合は、エア抜きのしやすさを打ち出したTRUSCOのスマートエア抜きシリーズのような製品も選択肢になります。カートリッジ専用と、手詰め兼用の2タイプがあります。
        </p>
        <div className="my-6 grid grid-cols-2 gap-3 sm:gap-4">
          <ProductCard p={P.tag508nab} />
          <ProductCard p={P.tag508nabtm} />
        </div>
        <CautionBox title="高圧のグリースは人に向けない">
          <p>
            グリースガンは数十MPaという高い圧力でグリースを押し出します。ヤマダの取扱説明書は、給脂の際に保護メガネと厚手の手袋（革手袋など）を着用すること、グリースが人体に入り込んだり目に入ったりした場合はただちに専門医の診察を受けることを求めています。ノズルを自分や人に向けない、漏れているときは無理に注入しない、の2点も徹底してください。
          </p>
        </CautionBox>

        {/* ================= FAQ ================= */}
        <H2 id="faq" num="Q&A">
          よくある質問
        </H2>
        <div className="space-y-4">
          {FAQS.map((f, i) => (
            <div key={f.q} className="rounded-xl border border-gray-200 bg-white p-5">
              <p className="flex gap-3 font-bold text-gray-900">
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gray-900 text-xs text-white">
                  Q{i + 1}
                </span>
                <span>{f.q}</span>
              </p>
              <p className="mt-3 flex gap-3 text-[15px] leading-relaxed text-gray-700">
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-gray-900 text-xs font-bold text-gray-900">
                  A
                </span>
                <span>{f.a}</span>
              </p>
            </div>
          ))}
        </div>

        {/* ================= まとめ ================= */}
        <H2 id="summary" num="✓">
          まとめ：給脂の量と動力から逆算する
        </H2>
        <p>
          グリースガンとグリースポンプは、どちらが上というものではありません。扱うグリースの量と現場の動力で使い分ける道具、と考えると選びやすくなります。選ぶ順番を整理すると、次の5ステップです。
        </p>
        <ol className="my-6 space-y-3">
          {[
            "1回の作業で何か所に給脂するか、電気とエアのどちらが使えるかを確かめる",
            "少量なら手動ガン、多いならエア式・電動ガン、缶単位ならグリースポンプを選ぶ",
            "詰め替えが多ければ充填ポンプ、配管で送る設備なら集中給脂用ポンプを加える",
            "ニップルの種類に合うノズルを選び、ホースの使用圧力も確かめる",
            "エア抜きの手順と保護具の着用を、作業者全員で共有する",
          ].map((t, i) => (
            <li key={t} className="flex gap-3 rounded-xl border border-gray-200 bg-white p-4 text-[15px] leading-relaxed">
              <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gray-900 text-sm font-bold text-white">
                {i + 1}
              </span>
              <span>{t}</span>
            </li>
          ))}
        </ol>

        <MainCta
          eyebrow="楽天市場 CRECOTE｜給脂機器"
          title="現場に合う1台を、一覧から選ぶ"
          body="グリースポンプとグリースガンの一覧ページでは、この記事で紹介しきれなかった型番やサイズ違いも確認できます。"
          first="pump"
        />

        <div className="my-8 rounded-xl border border-gray-200 bg-white p-5 text-xs leading-relaxed text-gray-600">
          <p className="font-bold text-gray-800">ご利用にあたって</p>
          <p className="mt-2">
            本記事の仕様は、メーカー・輸入元・販売店の公表値（2026年10月時点）をもとにしています。価格・在庫・最新の仕様は各商品ページで確認してください。給脂量や給脂間隔は、機械メーカーの取扱説明書や保全基準に従ってください。
          </p>
        </div>

        <section aria-label="参考にした資料" className="my-8 rounded-xl border border-gray-200 bg-white p-5">
          <p className="mb-3 text-sm font-bold text-gray-900">参考にしたメーカー・輸入元の資料</p>
          <ul className="space-y-1.5 text-xs leading-relaxed text-gray-600">
            {REFERENCES.map((r) => (
              <li key={r.href}>
                ・
                <a href={r.href} {...REF} className="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-700">
                  {r.title}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section aria-label="関連記事" className="my-8">
          <p className="mb-3 text-base font-bold text-gray-900">関連記事</p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {RELATED.filter((r) => r.href !== "").map((r) => (
              <li key={r.href}>
                {r.site === "sagyou" ? (
                  <Link
                    href={r.href}
                    className="flex min-h-[56px] items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-bold text-gray-900 transition hover:border-gray-900"
                  >
                    <span className="rounded bg-gray-900 px-2 py-0.5 text-[11px] text-white">作業用品ナビ</span>
                    {r.title}
                  </Link>
                ) : (
                  <a
                    href={r.href}
                    target="_blank"
                    rel="noopener"
                    className="flex min-h-[56px] items-center gap-2 rounded-xl border border-dashed border-gray-400 bg-white px-4 py-3 text-sm font-bold text-gray-900 transition hover:border-gray-900"
                  >
                    <span className="rounded bg-gray-200 px-2 py-0.5 text-[11px] text-gray-700">熱中症対策ナビ</span>
                    {r.title}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </section>
      </article>
    </main>
      <SiteFooter />
    </>
  );
}
