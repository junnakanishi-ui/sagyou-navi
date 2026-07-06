import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";

const SLUG = "farm-forest-bear-safety";
const SITE_URL = "https://sagyou-navi.com";
const ARTICLE_IMG = "/images/articles";

export const metadata: Metadata = {
  title:
    "農作業・山林作業の熊対策用品｜鈴・ホイッスル・スプレー・電気柵の備え｜作業用品ナビ",
  description:
    "農作業・山林作業・現場巡回で備えたい熊対策用品を解説。熊よけ鈴、電子ホイッスル、強力ライト、熊よけスプレー、忌避剤、電気柵、防獣機器まで、遭遇リスクを下げる備品と現場ルールを法人向けに整理します。",
  alternates: { canonical: `${SITE_URL}/articles/${SLUG}` },
  openGraph: {
    title:
      "農作業・山林作業の熊対策用品｜鈴・ホイッスル・スプレー・電気柵の備え",
    description:
      "農作業・山林作業・現場巡回で備えたい熊対策用品を解説。熊よけ鈴、電子ホイッスル、強力ライト、熊よけスプレー、忌避剤、電気柵、防獣機器まで紹介します。",
    type: "article",
    images: [`${ARTICLE_IMG}/farm-forest-work-bear-safety-supplies-hero.jpg`],
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

const URL_BEAR_LIST = "https://www.gc-select.com/pages/bear-repellent-spray";
const URL_PEST_LIST = "https://www.gc-select.com/collections/gaijyu-machine";

type Prod = { id: string; name: string; use: string; url: string };

const SOUND: Prod[] = [
  { id: "6300058373", name: "GC熊よけの鈴", use: "歩行・巡回・草刈り作業で携行しやすい", url: "https://www.gc-select.com/products/6300058373" },
  { id: "1179060608", name: "クマ対策 ピットナル3 電子ホイッスル", use: "必要な場面で強く音を出したいとき・作業者の合図", url: "https://www.gc-select.com/products/1179060608" },
  { id: "6300077014", name: "熊よけわんわん ホーンカラビナ付き+電池ボックス Light", use: "音で存在を知らせたい農作業・山林作業・巡回", url: "https://www.gc-select.com/products/6300077014" },
];

const SPRAY: Prod[] = [
  { id: "1179060612", name: "GC熊よけスプレー", use: "山林作業・巡回時の万が一の備え", url: "https://www.gc-select.com/products/1179060612" },
];

const LIGHT: Prod[] = [
  { id: "6300059572", name: "強力懐中電灯 X16B", use: "早朝・夕方・暗所巡回、足元・設備点検", url: "https://www.gc-select.com/products/6300059572" },
];

const FENCE: Prod[] = [
  { id: "6300046275", name: "ウルフピー 原液タイプ 1ガロン", use: "農地・施設周辺の忌避対策の一つ", url: "https://www.gc-select.com/products/6300046275" },
  { id: "6300088657", name: "電気柵 熊対策用 外周50m分セット 単一乾電池タイプ", use: "農地・施設外周への侵入防止対策", url: "https://www.gc-select.com/products/6300088657" },
];

const PEST: Prod[] = [
  { id: "6300054807", name: "ネズミ撃退器", use: "倉庫・食品保管場所のネズミ対策", url: "https://www.gc-select.com/products/6300054807" },
  { id: "6300046280", name: "逃げまんねん 固形タイプ", use: "小動物の忌避対策", url: "https://www.gc-select.com/products/6300046280" },
  { id: "6300046056", name: "鼠さん避けテク ジェルストロング 500ml", use: "ネズミのジェル忌避対策", url: "https://www.gc-select.com/products/6300046056" },
  { id: "6300056268", name: "天敵ニラミ トリサッタ 猛禽類仕様 AC電源付き", use: "農地・施設周辺の鳥対策", url: "https://www.gc-select.com/products/6300056268" },
];

const AXIS_TABLE = [
  { axis: "音で知らせる", goal: "突発的な遭遇を避ける", items: "熊よけ鈴、電子ホイッスル、熊よけわんわん", link: "鈴・ホイッスル・音対策用品" },
  { axis: "光で周囲を確認する", goal: "早朝・夕方・暗所の確認", items: "強力懐中電灯", link: "強力懐中電灯 X16B" },
  { axis: "万が一に備える", goal: "緊急時の備え", items: "熊よけスプレー", link: "GC熊よけスプレー" },
  { axis: "寄せ付けにくくする", goal: "施設・農地周辺の対策", items: "ウルフピー（忌避剤）", link: "ウルフピー原液タイプ" },
  { axis: "侵入を防ぐ", goal: "農地・施設周辺の防除", items: "電気柵", link: "熊対策用電気柵セット" },
  { axis: "小動物・鳥対策", goal: "倉庫・施設の防獣", items: "ネズミ撃退器、忌避剤、鳥よけ機器", link: "防獣機器一覧" },
];

const COMPARE_TABLE = [
  { name: "GC熊よけスプレー", type: "スプレー", scene: "山林作業・巡回時の万が一の備え", note: "使用方法・保管・携行ルールを確認" },
  { name: "熊よけわんわん ホーンカラビナ付き+電池ボックス Light", type: "音対策", scene: "農作業・山林作業・巡回", note: "音だけに頼らず周囲確認も必要" },
  { name: "GC熊よけの鈴", type: "鈴", scene: "歩行・巡回・草刈り", note: "音が届きにくい場所では過信しない" },
  { name: "強力懐中電灯 X16B", type: "ライト", scene: "早朝・夕方・暗所巡回", note: "熊対策専用ではなく周囲確認用" },
  { name: "ウルフピー 原液タイプ 1ガロン", type: "忌避剤", scene: "農地・施設周辺の対策", note: "設置場所・補充・雨天の影響を確認" },
  { name: "クマ対策 ピットナル3 電子ホイッスル", type: "音対策", scene: "作業者の存在アピール・連絡補助", note: "電池・音量・携行方法を確認" },
  { name: "電気柵 熊対策用 外周50mセット 単一乾電池タイプ", type: "侵入防止", scene: "農地・施設外周", note: "危険表示・電源装置・点検・草刈りが必要" },
];

const SITE_TABLE = [
  { site: "農地・果樹園", risk: "収穫物・残さに寄る可能性", items: "鈴、ホイッスル、電気柵、忌避剤", ops: "誘引物の管理と外周対策" },
  { site: "山林作業", risk: "見通しが悪く突発遭遇しやすい", items: "鈴、電子ホイッスル、スプレー、ライト", ops: "複数行動・声出し・出没情報確認" },
  { site: "草刈り・測量", risk: "音で接近に気づかれにくい場合がある", items: "鈴、ホイッスル、複数行動", ops: "作業音でも過信せず周囲確認" },
  { site: "資材置き場・倉庫", risk: "夜間・早朝巡回がある", items: "強力ライト、音対策、連絡体制", ops: "巡回時間・連絡先を共有" },
  { site: "太陽光発電所・山沿い施設", risk: "巡回頻度が低く出没情報を見落としやすい", items: "ライト、鈴、スプレー、電気柵", ops: "出没情報の定期確認" },
  { site: "学校・自治体施設", risk: "周辺出没時の注意喚起が必要", items: "音対策、ライト、防獣機器、連絡体制", ops: "注意喚起と避難導線の共有" },
];

const FAIL_TABLE = [
  { fail: "鈴だけで十分と思う", problem: "音が届かない場所で突発遭遇の可能性が残る", fix: "周囲確認・複数行動・出没情報確認を併用" },
  { fail: "熊よけスプレーだけを頼る", problem: "使えない状況や携行忘れがある", fix: "遭遇しない対策を優先" },
  { fail: "単独作業を続ける", problem: "不測時の連絡・退避が遅れる", fix: "複数作業・巡回連絡を決める" },
  { fail: "早朝・夕方の作業を軽視する", problem: "熊と遭遇しやすい時間帯のリスクが高まる", fix: "作業時間を見直す" },
  { fail: "食品・収穫残さを放置する", problem: "誘引物になる可能性がある", fix: "保管・処分ルールを決める" },
  { fail: "電気柵の表示・点検を忘れる", problem: "安全上のトラブルにつながる", fix: "危険表示・電源・草刈りを確認" },
  { fail: "害獣対策を一括りにする", problem: "対象動物に合わない用品を選ぶ", fix: "熊・ネズミ・鳥など対象別に選ぶ" },
];

const CHECKLIST = [
  { item: "作業場所", detail: "農地、山林、施設、倉庫、巡回路のどこか" },
  { item: "出没情報", detail: "自治体・管理者の最新情報を確認したか" },
  { item: "作業時間", detail: "早朝・夕方・夜間作業があるか" },
  { item: "作業人数", detail: "単独作業を避けられるか" },
  { item: "音対策", detail: "鈴・ホイッスルなどを携行するか" },
  { item: "万が一の備え", detail: "熊よけスプレーの携行・保管ルールを決めたか" },
  { item: "誘引物管理", detail: "食品・収穫残さ・燃料の管理方法を決めたか" },
  { item: "侵入防止", detail: "電気柵・忌避剤が必要な場所か" },
  { item: "連絡体制", detail: "緊急時の連絡先・退避場所を共有したか" },
  { item: "関連害獣", detail: "ネズミ・鳥などの対策も必要か" },
];

const FAQ_ITEMS = [
  {
    q: "農作業中の熊対策で最初に行うことは何ですか？",
    a: "まずは自治体や管理者の出没情報を確認し、単独作業を避け、鈴・ホイッスル・ラジオなどで人の存在を知らせることが基本です。あわせて、早朝・夕方の作業や見通しの悪い場所では特に注意しましょう。",
  },
  {
    q: "熊よけ鈴と電子ホイッスルはどう使い分けますか？",
    a: "熊よけ鈴は歩行や巡回中に継続して音を出しやすい用品です。電子ホイッスルは、必要な場面で強く音を出したいときや、作業者同士の合図としても検討できます。ただし、どちらも過信せず、周囲確認と組み合わせることが重要です。",
  },
  {
    q: "熊よけスプレーは持っていた方がよいですか？",
    a: "山林作業や出没地域での巡回では、万が一の備えとして検討できます。ただし、遭遇しないための対策が優先です。携行方法、保管、使用期限、メーカーの注意事項、現場ルールを事前に確認してください。",
  },
  {
    q: "農地の熊対策に電気柵は使えますか？",
    a: "農地や施設周辺への侵入防止対策として電気柵が使われる場合があります。設置時は、電源装置、危険表示、草刈り、点検体制などを確認し、関係法令や自治体・メーカーの案内に従ってください。",
  },
  {
    q: "熊対策と害獣対策は同じ用品でできますか？",
    a: "対象動物によって有効な対策は異なります。熊対策では音で存在を知らせる、誘引物を管理する、電気柵を設置するなどが中心です。ネズミ・鳥・小動物対策では、撃退器、忌避剤、鳥よけ機器など別の用品を検討します。",
  },
  {
    q: "熊対策用品をそろえれば安全ですか？",
    a: "用品だけで安全を保証することはできません。出没情報の確認、複数人での作業、作業時間の見直し、誘引物管理、緊急時の連絡体制、退避判断と組み合わせて運用することが重要です。",
  },
];

const RELATED = [
  {
    href: "/articles/barn-floor-rubber-mat",
    label: "牛舎の床の底冷え・滑り対策に使うゴムマットの選び方｜酪農用マットの厚みを比較",
  },
  {
    href: "/articles/greenhouse-entrance-mud-control",
    label: "農業用ハウスの出入口の泥対策に使うゴムマットの選び方",
  },
  {
    href: "/articles/outdoor-work-heatstroke-measures",
    label: "外仕事の熱中症対策｜現場・イベント・屋外倉庫で使える暑さ対策グッズと実務チェックリスト",
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
  return (
    <a
      href={u(item.url)}
      target="_blank"
      rel="nofollow noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-xl border-2 border-gray-200 bg-white shadow-sm transition hover:border-gray-400 hover:shadow-lg"
    >
      <div className="aspect-square w-full overflow-hidden bg-gray-50">
        <img
          src={productImage(item.id)}
          alt={item.name}
          loading="lazy"
          className="h-full w-full object-contain p-3 transition group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <p className="text-sm font-bold leading-snug text-gray-900">{item.name}</p>
        <p className="mt-2 flex-1 text-xs leading-relaxed text-gray-600">{item.use}</p>
        <span className="mt-3 inline-block rounded-lg bg-gray-900 px-4 py-2 text-center text-sm font-bold text-white">
          商品ページを見る
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
          <span className="text-gray-700">農作業・山林作業の熊対策用品</span>
        </nav>

        <span className="mb-3 inline-block rounded bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-800">
          選び方ガイド
        </span>

        <h1 className={cls.h1}>
          農作業・山林作業の熊対策用品｜鈴・ホイッスル・スプレー・電気柵の備え
        </h1>

        <p className="mb-6 text-sm text-gray-500">
          公開日：2026年7月6日／約15分で読めます
        </p>

        <div className="my-6 rounded-lg border border-gray-300 bg-gray-50 p-5 leading-relaxed">
          <p className={cls.body}>
            農作業・山林作業・現場巡回での熊対策は、まず「熊と遭遇しにくくする」ことが基本です。単独作業を避ける、鈴やホイッスルなど音の出る用品で人の存在を知らせる、早朝・夕方の作業を慎重に行う、食品や収穫残さなど誘引物を管理することが重要です。備品としては、熊よけ鈴、電子ホイッスル、強力ライト、熊よけスプレー、忌避剤、電気柵などが候補になります。農地・施設・資材置き場では、熊対策だけでなくネズミ・鳥などの害獣対策機器もあわせて検討できます。ただし、熊対策用品だけで安全を保証できるわけではありません。自治体の出没情報を確認し、出没が多い地域では作業計画を見直し、現場ルール・連絡体制・避難判断と組み合わせて運用しましょう。
          </p>
        </div>

        <ArticleImg
          src={`${ARTICLE_IMG}/farm-forest-work-bear-safety-supplies-hero.jpg`}
          alt="農作業や山林作業で熊対策用品を準備するイメージ"
        />

        <CTA href={u(URL_BEAR_LIST)}>
          農作業・山林作業・現場巡回の備えに、熊対策アイテム一覧を確認する
        </CTA>

        <H2>農作業・山林作業で熊対策が必要になる場面</H2>
        <H3>畑・果樹園・牧場・農業施設での作業</H3>
        <p className={cls.body}>
          畑・果樹園・牧場・農業施設では、収穫物や残さが熊を引き寄せる可能性があり、作業中の遭遇リスクに配慮が必要です。
        </p>
        <H3>山林作業・草刈り・測量・点検作業</H3>
        <p className={cls.body}>
          山林での作業や草刈り、測量、点検は、見通しの悪い場所が多く、突発的な遭遇に注意が必要です。
        </p>
        <H3>山沿いの工事現場・資材置き場・太陽光発電所</H3>
        <p className={cls.body}>
          山沿いの工事現場、資材置き場、太陽光発電所などは、巡回頻度が低いと出没情報を見落としやすい場所です。
        </p>
        <H3>早朝・夕方・見通しの悪い場所での作業</H3>
        <p className={cls.body}>
          早朝・夕方や見通しの悪い場所は、人と熊がお互いに気づきにくく、遭遇しやすい時間帯・環境とされています。
        </p>
        <H3>収穫残さ・食品・燃料などの誘引物がある場所</H3>
        <p className={cls.body}>
          弁当などの食品や収穫残さは誘引物になり得ます。混合油などの燃料も誘引物とされることがあるため、給油・保管場所では周囲に注意を払うことが示されています。誘引物の管理は、公的機関の案内もあわせてご確認ください。
        </p>

        <H2>熊対策の基本は「遭遇しない」ための現場ルールづくり</H2>
        <H3>単独作業を避け、複数人で行動する</H3>
        <p className={cls.body}>
          出没地域では、できるだけ単独作業を避け、複数人で行動することが基本です。
        </p>
        <H3>鈴・ホイッスル・ラジオなどで人の存在を知らせる</H3>
        <p className={cls.body}>
          熊は基本的に人との遭遇を避けるとされ、鈴・ラジオ・ホイッスルなどで人の存在を知らせることが有効と説明されています。
        </p>
        <H3>早朝・夕方・濃霧・雨天時は特に注意する</H3>
        <p className={cls.body}>
          早朝・夕方・濃霧・雨天時は特に注意が必要です。沢筋など音が届きにくい場所では過信しないことも示されています。
        </p>
        <H3>見通しの悪い場所では声を出す・立ち止まって確認する</H3>
        <p className={cls.body}>
          見通しの悪い場所では、声を出したり立ち止まって周囲を確認したりすることが重要です。
        </p>
        <H3>出没情報を確認し、多発地域では作業計画を見直す</H3>
        <p className={cls.body}>
          自治体や管理者の出没情報を確認し、出没が多発している地域では、作業そのものや作業計画を見直す判断も必要です。
        </p>

        <Caution>
          <p className={cls.bodySm}>
            熊対策用品は、遭遇リスクを下げるための備えの一つであり、用品だけで安全を保証できるわけではありません。自治体の出没情報を確認し、単独作業を避け、複数人での作業、誘引物管理、緊急時の連絡体制、退避判断とあわせて運用してください。メーカーの注意事項や自治体の案内に従い、出没が多い地域では作業そのものを見直す判断も重要です。
          </p>
        </Caution>

        <H2>熊対策用品リスト｜音・光・スプレー・忌避・電気柵で考える</H2>
        <div className="my-4 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border border-gray-200 px-3 py-2">対策軸</th>
                <th className="border border-gray-200 px-3 py-2">目的</th>
                <th className="border border-gray-200 px-3 py-2">主な用品</th>
                <th className="border border-gray-200 px-3 py-2">商品導線</th>
              </tr>
            </thead>
            <tbody>
              {AXIS_TABLE.map((row) => (
                <tr key={row.axis} className="even:bg-gray-50">
                  <td className="border border-gray-200 px-3 py-2 font-semibold">{row.axis}</td>
                  <td className="border border-gray-200 px-3 py-2">{row.goal}</td>
                  <td className="border border-gray-200 px-3 py-2">{row.items}</td>
                  <td className="border border-gray-200 px-3 py-2">{row.link}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <H2>音で知らせる熊対策｜鈴・ホイッスル・熊よけわんわんの使い分け</H2>

        <ArticleImg
          src={`${ARTICLE_IMG}/bear-bell-whistle-fieldwork-supplies.jpg`}
          alt="熊よけ鈴や電子ホイッスルを農作業前に確認するイメージ"
        />

        <H3>熊よけ鈴は歩行・巡回・草刈り作業で携行しやすい</H3>
        <p className={cls.body}>
          熊よけ鈴は、歩行・巡回・草刈りなど、動きながら継続して音を出したい作業で携行しやすい用品です。
        </p>
        <H3>電子ホイッスルは必要な場面で強く音を出したいときに候補</H3>
        <p className={cls.body}>
          電子ホイッスルは、必要な場面で強く音を出したいときや、作業者同士の合図としても検討できます。
        </p>
        <H3>熊よけわんわんは音で存在を知らせたい現場の選択肢</H3>
        <p className={cls.body}>
          熊よけわんわんは、音で人の存在を知らせたい農作業・山林作業・巡回の選択肢になります。
        </p>
        <H3>音が届きにくい地形・天候では過信しない</H3>
        <p className={cls.body}>
          沢筋や濃霧・降雨時など、音が届きにくい状況では過信せず、周囲確認や複数行動と組み合わせることが重要です。
        </p>

        <ProductGrid items={SOUND} />
        <CTA href={u(URL_BEAR_LIST)}>
          人の存在を知らせる備えとして、熊よけ鈴・電子ホイッスル・熊よけわんわんを確認する
        </CTA>

        <H2>熊よけスプレーはどんな位置づけで備える？</H2>

        <ArticleImg
          src={`${ARTICLE_IMG}/bear-spray-emergency-carry-kit.jpg`}
          alt="熊よけスプレーなど山林作業の携行品を確認するイメージ"
        />

        <H3>遭遇しない対策を行ったうえで、万が一の備えとして検討する</H3>
        <p className={cls.body}>
          熊よけスプレーは、遭遇しないための対策を行ったうえで、万が一の備えとして検討する用品です。まずは音対策や出没情報の確認が優先です。
        </p>
        <H3>保管場所・携行方法・使用期限を確認する</H3>
        <p className={cls.body}>
          保管場所、携行方法、使用期限を確認し、いざというときに使える状態にしておきます。
        </p>
        <H3>作業者に使い方・注意事項を事前共有する</H3>
        <p className={cls.body}>
          作業者へ使い方や注意事項を事前に共有しておきます。使用手順はメーカーの説明や自治体の情報、現場ルールに従ってください。
        </p>
        <H3>風向きや周囲の人への影響も考慮する</H3>
        <p className={cls.body}>
          使用時は風向きや周囲の人への影響も考慮する必要があります。取り扱いには十分注意してください。
        </p>

        <ProductGrid items={SPRAY} />

        <Caution>
          <p className={cls.bodySm}>
            熊よけスプレーは万が一の備えの一つであり、使えば必ず安全になるわけではありません。携行忘れや使用できない状況もあり得るため、遭遇しないための対策を優先してください。使用方法・保管・携行・使用期限は、メーカーの説明、自治体の情報、現場ルールに従ってください。
          </p>
        </Caution>

        <CTA href={u("https://www.gc-select.com/products/1179060612")}>
          万が一の備えとして、GC熊よけスプレーを確認する
        </CTA>

        <H2>早朝・夕方・夜間巡回では強力ライトも確認する</H2>
        <H3>薄暗い時間帯は人と熊がお互いに気づきにくい</H3>
        <p className={cls.body}>
          薄暗い時間帯は、人と熊がお互いに気づきにくくなります。周囲を確認できる明かりがあると安心です。
        </p>
        <H3>資材置き場・倉庫・山沿い施設の巡回で周囲確認に使いやすい</H3>
        <p className={cls.body}>
          資材置き場・倉庫・山沿い施設の巡回で、周囲確認に使いやすい用品です。
        </p>
        <H3>熊対策だけでなく、足元・設備点検にも役立つ</H3>
        <p className={cls.body}>
          強力ライトは熊対策専用ではありませんが、足元や設備の点検にも役立ちます。
        </p>
        <H3>予備電池・充電・保管場所も決める</H3>
        <p className={cls.body}>
          予備電池・充電・保管場所も決めておくと、必要なときに確実に使えます。
        </p>

        <ProductGrid items={LIGHT} />
        <CTA href={u("https://www.gc-select.com/products/6300059572")}>
          早朝・夕方・夜間巡回には、強力懐中電灯も確認する
        </CTA>

        <H2>農地・施設周辺では忌避剤・電気柵も検討する</H2>

        <ArticleImg
          src={`${ARTICLE_IMG}/bear-prevention-electric-fence-farmland.jpg`}
          alt="農地周辺に熊対策用の電気柵を設置するイメージ"
        />

        <H3>ウルフピーは忌避対策の一つとして検討できる</H3>
        <p className={cls.body}>
          ウルフピーは、農地・施設周辺の忌避対策の一つとして検討できます。設置場所・補充・雨天の影響を確認して使いましょう。
        </p>
        <H3>電気柵は農地・施設周辺への侵入防止対策として使われる</H3>
        <p className={cls.body}>
          電気柵は、農地・施設周辺への侵入防止対策として使われます。外周の距離に合わせてセットを選びます。
        </p>
        <H3>設置場所・電源・草刈り・点検体制を確認する</H3>
        <p className={cls.body}>
          設置場所、電源、草刈り、点検体制を確認し、継続して機能する状態を保ちます。
        </p>
        <H3>電気柵は安全表示・電源装置などのルールを確認する</H3>
        <p className={cls.body}>
          電気柵の設置場所には、人が見やすいように適当な間隔で危険である旨を表示することや、電源装置などの安全確保に関する要件が示されています。関係法令や自治体・メーカーの案内に従って設置・運用してください。
        </p>

        <ProductGrid items={FENCE} />
        <CTA href={u(URL_BEAR_LIST)}>
          農地・施設周辺の侵入対策に、ウルフピー・熊対策用電気柵を確認する
        </CTA>

        <H2>熊対策アイテムの比較表</H2>
        <div className="my-4 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border border-gray-200 px-3 py-2">商品</th>
                <th className="border border-gray-200 px-3 py-2">タイプ</th>
                <th className="border border-gray-200 px-3 py-2">向いている場面</th>
                <th className="border border-gray-200 px-3 py-2">注意点</th>
              </tr>
            </thead>
            <tbody>
              {COMPARE_TABLE.map((row) => (
                <tr key={row.name} className="even:bg-gray-50">
                  <td className="border border-gray-200 px-3 py-2 font-medium">{row.name}</td>
                  <td className="border border-gray-200 px-3 py-2">{row.type}</td>
                  <td className="border border-gray-200 px-3 py-2">{row.scene}</td>
                  <td className="border border-gray-200 px-3 py-2">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <CTA href={u(URL_BEAR_LIST)}>
          農作業・山林作業・施設巡回の備えに、熊対策アイテム一覧を確認する
        </CTA>

        <H2>現場別・熊対策用品の組み合わせ例</H2>

        <ArticleImg
          src={`${ARTICLE_IMG}/bear-safety-supplies-worksite-checklist.jpg`}
          alt="熊対策用品を現場別にチェックする法人担当者のイメージ"
        />

        <div className="my-4 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border border-gray-200 px-3 py-2">現場</th>
                <th className="border border-gray-200 px-3 py-2">リスク</th>
                <th className="border border-gray-200 px-3 py-2">優先したい用品</th>
                <th className="border border-gray-200 px-3 py-2">運用ポイント</th>
              </tr>
            </thead>
            <tbody>
              {SITE_TABLE.map((row) => (
                <tr key={row.site} className="even:bg-gray-50">
                  <td className="border border-gray-200 px-3 py-2 font-semibold">{row.site}</td>
                  <td className="border border-gray-200 px-3 py-2">{row.risk}</td>
                  <td className="border border-gray-200 px-3 py-2">{row.items}</td>
                  <td className="border border-gray-200 px-3 py-2">{row.ops}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <H2>熊以外の害獣対策も一緒に確認したいケース</H2>

        <ArticleImg
          src={`${ARTICLE_IMG}/wildlife-pest-control-devices-warehouse.jpg`}
          alt="倉庫や施設向けの害獣対策機器を確認するイメージ"
        />

        <H3>倉庫・食品保管場所ではネズミ対策も重要</H3>
        <p className={cls.body}>
          倉庫や食品保管場所では、ネズミ対策も重要です。撃退器や忌避剤を検討できます。
        </p>
        <H3>農地・施設周辺では小動物・鳥対策も検討する</H3>
        <p className={cls.body}>
          農地・施設周辺では、小動物や鳥への対策もあわせて検討できます。
        </p>
        <H3>音・におい・視覚刺激など、対象に合わせて使い分ける</H3>
        <p className={cls.body}>
          害獣対策は、音・におい・視覚刺激など、対象動物に合わせて使い分けることが重要です。
        </p>
        <H3>熊対策と害獣対策は目的を分けて選ぶ</H3>
        <p className={cls.body}>
          熊対策と害獣対策は目的が異なります。対象動物ごとに用品を分けて選びましょう。
        </p>

        <ProductGrid items={PEST} />
        <CTA href={u(URL_PEST_LIST)}>
          ネズミ・鳥・小動物対策には、防獣機器一覧も確認する
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
            熊対策・害獣対策用品を、まとめて確認しましょう
          </h2>
          <p className={cls.body}>
            熊対策用品は、遭遇リスクを下げるための備えの一つです。出没情報の確認、複数人での作業、作業時間の見直し、誘引物管理、連絡体制、退避判断とあわせて、現場に合わせて備えを進めてください。
          </p>
          <FinalCTA href={u(URL_BEAR_LIST)}>
            熊対策用品をまとめて確認するなら、熊対策アイテム一覧へ
          </FinalCTA>
          <p className="mt-2 text-sm">
            ネズミ・鳥・小動物などの
            <a
              href={u(URL_PEST_LIST)}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="text-gray-900 underline"
            >
              防獣機器一覧
            </a>
            もあわせてご確認いただけます。
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
