import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";

export const metadata: Metadata = {
  title: "アンカー引張試験機の選び方｜簡易型・非破壊型・付着力試験機の違い",
  description:
    "アンカー引張試験機を、簡易型KT-6、非破壊型AT-10DⅡ、付着力用RTシリーズ、吊りボルト向けAPC-10Bに分けて比較。最大荷重、対象、治具、校正、誤発注防止まで解説します。",
};

const UTM = "utm_source=sagyou_navi";
function buildUrl(url: string, utm: string): string {
  if (!url) return url;
  const h = url.indexOf("#");
  const append = (base: string) =>
    `${base}${base.includes("?") ? "&" : "?"}${utm}`;
  if (h === -1) return append(url);
  return `${append(url.slice(0, h))}${url.slice(h)}`;
}

const R = (slug: string) =>
  buildUrl(`https://item.rakuten.co.jp/crecote-shop/${slug}`, UTM);
const IMG_BASE = "/products/";
const IMG = (file: string) => `${IMG_BASE}${file}`;
const HERO_BASE = "/images/anchor-tensile-tester-selection/";
const HERO = (file: string) => `${HERO_BASE}${file}`;

const PAGE_URL =
  "https://sagyou-navi.com/articles/anchor-tensile-tester-selection";
const HOME_URL = "https://sagyou-navi.com/";

type Product = {
  code: string;
  officialCode: string;
  name: string;
  short: string;
  image: string;
  url: string;
  category: string;
  maxLoad: string;
  target: string;
  display: string;
  use: string;
  solves: string;
  check: string;
  cta: string;
};

const products: Record<string, Product> = {
  kt6: {
    code: "KT6",
    officialCode: "KT-6",
    name: "サンコーテクノ 非破壊簡易型引張試験器 テクノテスター KT-6",
    short: "テクノテスター KT-6",
    image: "ta062806-kt6.jpg",
    url: R("ta062806-kt6/"),
    category: "小径アンカー向け簡易型",
    maxLoad: "6kN",
    target: "M6〜M12、W1/4〜W1/2の目安",
    display: "アナログ式・置針式最大値ホールド",
    use: "建築設備現場で小径アンカーを簡易に確認したい場合",
    solves: "持ち運びやすさと操作の分かりやすさを優先したい",
    check:
      "確認荷重、対象径、突出長、必要なカップリングを確認。標準付属カップリングの範囲だけで全対象径へ対応できるとは限りません。",
    cta: "KT-6の仕様と付属品を確認する",
  },
  at10d2: {
    code: "AT10D2",
    officialCode: "AT-10DⅡ",
    name: "サンコーテクノ アンカー非破壊引張試験機 テクノテスター AT-10DⅡ",
    short: "テクノテスター AT-10DⅡ",
    image: "ta064924-at10d2.jpg",
    url: R("ta064924-at10d2/"),
    category: "デジタル非破壊型",
    maxLoad: "100kN",
    target: "M6〜M24、W1/4〜W1の目安",
    display: "荷重・変位をデジタル表示／保存",
    use: "金属系アンカーの荷重と変位を記録しながら確認したい場合",
    solves: "幅広い径、データ保存、荷重と変位の同時確認が必要",
    check:
      "設置必要幅、突出長、カップリング、異形鉄筋用別売治具、校正、後継機AT-100/D3への切替状況を公開前・購入前に確認。",
    cta: "AT-10DⅡの測定範囲を確認する",
  },
  rt1000: {
    code: "RT1000LD2",
    officialCode: "RT-1000LDⅡ",
    name: "サンコーテクノ 接着・付着力引張試験器 テクノテスター RT-1000LDⅡ",
    short: "RT-1000LDⅡ",
    image: "ta063535-rt1000ld2.jpg",
    url: R("ta063535-rt1000ld2/"),
    category: "接着・付着力型",
    maxLoad: "10kN",
    target: "外装材・塗膜・下地などの付着力試験",
    display: "荷重・変位をデジタル表示／保存",
    use: "比較的低い荷重域で、付着面を剥離・破壊まで載荷する試験",
    solves: "外壁仕上げ材や防水層下地などの付着力を確認したい",
    check:
      "試験面積、治具・アタッチメント、想定破断荷重、設置幅、対象を破壊する試験であること、後継・在庫状況を確認。",
    cta: "RT-1000LDⅡを確認する",
  },
  rt2000: {
    code: "RT2000LD2",
    officialCode: "RT-2000LDⅡ",
    name: "サンコーテクノ 接着・付着力引張試験器 テクノテスター RT-2000LDⅡ",
    short: "RT-2000LDⅡ",
    image: "ta063536-rt2000ld2.jpg",
    url: R("ta063536-rt2000ld2/"),
    category: "接着・付着力型",
    maxLoad: "20kN",
    target: "外装材・塗膜・下地などの付着力試験",
    display: "荷重・変位をデジタル表示／保存",
    use: "10kN機より高い荷重域が必要な付着力試験",
    solves: "試験対象と面積から20kNクラスが必要",
    check:
      "最大荷重だけで選ばず、試験面積、要求される付着強度、治具、最大変位量、設置幅、後継・在庫状況を確認。",
    cta: "RT-2000LDⅡを確認する",
  },
  rt3000: {
    code: "RT3000LD2",
    officialCode: "RT-3000LDⅡ",
    name: "サンコーテクノ 接着・付着力引張試験器 テクノテスター RT-3000LDⅡ",
    short: "RT-3000LDⅡ",
    image: "ta065253-rt3000ld2.jpg",
    url: R("ta065253-rt3000ld2/"),
    category: "接着・付着力型",
    maxLoad: "30kN",
    target: "外装材・塗膜・下地などの付着力試験",
    display: "荷重・変位をデジタル表示／保存",
    use: "RTシリーズでより高い荷重域を測定したい場合",
    solves: "20kNを超える想定荷重に対応する候補が必要",
    check:
      "最大変位量は機種で異なります。試験面積、治具、設置幅、対象材、破断時の飛散対策、後継・在庫状況を確認。",
    cta: "RT-3000LDⅡを確認する",
  },
  apc10b: {
    code: "APC10B",
    officialCode: "APC-10B",
    name: "TRUST アンカー引張試験用 荷重確認試験機 アンカープロチェッカー APC-10B",
    short: "アンカープロチェッカー APC-10B",
    image: "ta062078-apc10b.jpg",
    url: R("ta062078-apc10b/"),
    category: "吊天井ボルト向け多数点確認型",
    maxLoad: "10kN",
    target: "吊天井ボルト強度確認に特化",
    display: "デジタル記録・設定荷重到達を色／音／振動で通知",
    use: "吊天井ボルトを多数点、一定条件で効率よく確認したい場合",
    solves: "設備が付いた状態や多数点検査での作業負担を減らしたい",
    check:
      "一般的な100kNアンカー試験機の代替ではありません。対象ボルト、専用治具、試験方向、設定荷重、校正、後継機の有無を確認。",
    cta: "APC-10Bの対象用途を確認する",
  },
};

const faqs: { q: string; a: string }[] = [
  {
    q: "アンカー引張試験機は、最大荷重だけで選べますか？",
    a: "選べません。最初に、アンカーを破壊しない範囲で確認するのか、接着・付着面を剥離まで載荷するのか、吊天井ボルトを多数点確認するのかを分けます。そのうえで確認荷重、対象径、治具、設置幅、記録方法を確認します。",
  },
  {
    q: "KT-6とAT-10DⅡの大きな違いは何ですか？",
    a: "KT-6は最大6kNの軽量なアナログ簡易型、AT-10DⅡは最大100kNで荷重と変位をデジタル表示・保存する非破壊型です。測定範囲、記録要件、現場スペース、必要な精度から選びます。",
  },
  {
    q: "KT-6はどのような現場に向きますか？",
    a: "建築設備現場などで、小径アンカーを比較的簡易に確認したい場合の候補です。対象アンカーの径、突出長、必要カップリング、現場で指定された確認荷重が6kNの範囲に収まるかを確認してください。",
  },
  {
    q: "AT-10DⅡは100kNまで必ず荷重をかける機械ですか？",
    a: "違います。100kNは試験機の最大荷重です。実際の確認荷重は設計図書、施工要領、試験計画、現場責任者の指示などに基づいて決め、最大荷重をそのまま確認荷重にしないでください。",
  },
  {
    q: "非破壊引張試験とは何ですか？",
    a: "アンカーや母材が破壊する荷重より小さい範囲で、定めた確認荷重を加える試験です。名称に非破壊とあっても、設定や施工状態を誤れば損傷の可能性はあるため、適切な試験計画と安全管理が必要です。",
  },
  {
    q: "付着力引張試験は非破壊試験ですか？",
    a: "一般に、接着・付着面が剥離・破壊するまで載荷し、その荷重から付着力を算出する試験です。アンカーの確認荷重試験とは目的が異なるため、RTシリーズを一般アンカーの非破壊確認用として選ばないでください。",
  },
  {
    q: "RT-1000LDⅡ・RT-2000LDⅡ・RT-3000LDⅡはどう選びますか？",
    a: "最大荷重はそれぞれ10kN、20kN、30kNです。ただし最大荷重だけでなく、試験面積、想定付着強度、必要な変位量、治具、設置幅、対象材の破壊形態を確認して選びます。",
  },
  {
    q: "RTシリーズでアンカーボルトを試験できますか？",
    a: "RTシリーズは接着・付着力試験を主目的とする機種です。一般的なアンカー非破壊引張試験はAT・KTシリーズなど、メーカーが用途を示す機種から選びます。特殊な試験はメーカーへ適合を確認してください。",
  },
  {
    q: "APC-10Bはどのような用途に向きますか？",
    a: "吊天井ボルトの強度確認に特化し、多数点を効率よく点検したい場合の候補です。対象ボルトや専用治具、設定荷重、試験方向を確認し、一般用途のアンカー試験機と混同しないでください。",
  },
  {
    q: "APC-10Bは屋外で使えますか？",
    a: "商品情報には防滴仕様とありますが、防水を意味するとは限りません。雨中使用、保管環境、濡れた場合の対応は取扱説明書とメーカー条件を確認してください。",
  },
  {
    q: "アンカー径が合えば、どのカップリングでも使えますか？",
    a: "径だけでなく、ねじ規格、ピッチ、突出長、センターシャフト、治具の組み合わせを確認します。標準付属品に含まれないサイズは別売品が必要な場合があります。",
  },
  {
    q: "ボルトの突出長はなぜ確認が必要ですか？",
    a: "カップリングを確実に接続し、試験機を正しく設置するためです。短すぎても長すぎても取付けできない場合があるため、機種ごとの許容範囲を実測して確認します。",
  },
  {
    q: "試験機を置くスペースはどの程度必要ですか？",
    a: "機種ごとに設置必要幅や本体形状が異なります。アンカー周囲の障害物、壁際、隅部、配管や設備との干渉を現場写真と実測寸法で確認してください。",
  },
  {
    q: "荷重だけでなく変位も記録する必要がありますか？",
    a: "試験計画や提出書類によります。荷重値だけでよい場合もありますが、荷重変位曲線や最大荷重時の変位を求められる場合は、デジタル記録機能を持つ機種が候補になります。",
  },
  {
    q: "アンカー引張試験機は毎年校正が必要ですか？",
    a: "校正周期はメーカー推奨、社内品質規程、発注者仕様、使用頻度、保管環境などで決めます。一律に年1回と断定せず、校正証明書の有効性や次回期限を含めて運用ルールを確認してください。",
  },
  {
    q: "校正証明書があれば試験方法は問われませんか？",
    a: "いいえ。校正は測定器の状態確認に関係しますが、適切な対象、治具、設置、載荷速度、確認荷重、安全措置、記録方法を代替するものではありません。",
  },
  {
    q: "アンカー引張試験機は購入とレンタルのどちらがよいですか？",
    a: "試験頻度、機種固定の可否、校正・保管体制、緊急対応、現場数で判断します。継続的に同条件で使う法人は購入が候補になり、単発や機種が毎回変わる場合はレンタルも比較対象です。",
  },
  {
    q: "最大荷重に余裕が大きい機種ほど安全ですか？",
    a: "必ずしもそうではありません。過大な機種は重量、設置スペース、操作性、費用が増え、誤って過大荷重を設定するリスクもあります。必要な確認荷重を安全に測れる範囲で選びます。",
  },
  {
    q: "試験中にアンカーや母材が破損する可能性はありますか？",
    a: "あります。確認荷重の設定、施工不良、母材状態、治具の偏心、誤操作などで損傷する可能性があります。立入範囲、飛散・落下対策、保護具、試験方向を含む安全計画が必要です。",
  },
  {
    q: "商品ページの型番D2とメーカー表記DⅡは同じですか？",
    a: "ECの商品管理上D2と表記され、メーカー公式ではDⅡと表記される例があります。発注時は商品コード、正式型式、JAN、付属品、後継機の有無を照合し、表記だけで判断しないでください。",
  },
  {
    q: "後継機がある旧機種を購入してもよいですか？",
    a: "在庫、修理、校正、消耗品、ソフトウェア、付属治具の供給を確認できる場合は候補になり得ます。ただし社内標準機にする場合は、後継機との互換性と長期保守を優先して判断してください。",
  },
  {
    q: "法人購買では何を見積条件に入れるべきですか？",
    a: "本体だけでなく、対象径ごとのカップリング、アダプター、ケース、記録ソフト、接続ケーブル、予備電池、校正証明書、点検・修理窓口、納期、後継機、教育費まで確認すると誤発注を減らせます。",
  },
];

const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "アンカー引張試験機はどれを選ぶ？簡易型・非破壊型・付着力試験機の違い",
  description: metadata.description,
  datePublished: "2026-07-20",
  dateModified: "2026-07-20",
  author: { "@type": "Organization", name: "作業用品ナビ編集部" },
  publisher: {
    "@type": "Organization",
    name: "グリーンクロスホールディングス",
  },
  mainEntityOfPage: PAGE_URL,
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: HOME_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "選び方ガイド",
      item: `${HOME_URL}category/guide`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "アンカー引張試験機の選び方",
      item: PAGE_URL,
    },
  ],
};

function AnswerBox({ children }: { children: ReactNode }) {
  return (
    <section className="my-6 rounded-xl border border-gray-300 bg-gray-50 p-5">
      <p className="mb-2 text-sm font-bold text-gray-700">この記事の結論</p>
      <div className="space-y-3 leading-8 text-gray-800">{children}</div>
    </section>
  );
}

function Caution({ title, children }: { title: string; children: ReactNode }) {
  return (
    <aside className="my-6 rounded-xl border-2 border-red-700 bg-red-50 p-5">
      <p className="mb-2 font-bold text-red-800">{title}</p>
      <div className="space-y-2 leading-7 text-red-950">{children}</div>
    </aside>
  );
}

function CTA({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-5 py-3 font-bold text-white transition hover:bg-gray-700"
    >
      {children}
    </a>
  );
}

function Figure({
  src,
  alt,
  caption,
  priority = false,
}: {
  src: string;
  alt: string;
  caption: string;
  priority?: boolean;
}) {
  return (
    <figure className="my-8 overflow-hidden rounded-xl border border-gray-200 bg-white">
      <div className="relative aspect-video w-full">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 896px) 100vw, 896px"
          className="object-cover"
        />
      </div>
      <figcaption className="px-4 py-3 text-sm leading-6 text-gray-600">
        {caption}
      </figcaption>
    </figure>
  );
}

function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="relative aspect-[4/3] w-full bg-white">
        <Image
          src={IMG(product.image)}
          alt={`${product.short}のサムネイル画像`}
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, 420px"
          className="object-contain p-4"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <span className="mb-2 inline-flex w-fit rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-700">
          {product.category}
        </span>
        <h3 className="text-lg font-bold text-gray-900">{product.short}</h3>
        <p className="mt-1 text-xs text-gray-500">
          型式：{product.officialCode}／EC管理コード：{product.code}
        </p>
        <dl className="mt-4 space-y-3 text-sm leading-6">
          <div>
            <dt className="font-bold text-gray-800">最大荷重</dt>
            <dd className="text-gray-700">{product.maxLoad}</dd>
          </div>
          <div>
            <dt className="font-bold text-gray-800">対象・用途</dt>
            <dd className="text-gray-700">{product.target}</dd>
          </div>
          <div>
            <dt className="font-bold text-gray-800">向く現場</dt>
            <dd className="text-gray-700">{product.use}</dd>
          </div>
          <div>
            <dt className="font-bold text-gray-800">解決できる課題</dt>
            <dd className="text-gray-700">{product.solves}</dd>
          </div>
          <div className="rounded-lg bg-amber-50 p-3">
            <dt className="font-bold text-gray-900">購入前確認</dt>
            <dd className="mt-1 text-gray-800">{product.check}</dd>
          </div>
        </dl>
        <a
          href={product.url}
          target="_blank"
          rel="nofollow sponsored"
          className="mt-5 inline-flex items-center justify-center rounded-lg bg-gray-900 px-4 py-3 text-center font-bold text-white transition hover:bg-gray-700"
        >
          {product.cta} →
        </a>
      </div>
    </article>
  );
}

function CardGrid({ children }: { children: ReactNode }) {
  return <div className="my-6 grid gap-5 sm:grid-cols-2">{children}</div>;
}

function Th({ children }: { children: ReactNode }) {
  return (
    <th className="border border-gray-300 bg-gray-100 px-3 py-3 text-left text-sm font-bold text-gray-900">
      {children}
    </th>
  );
}

function Td({ children }: { children: ReactNode }) {
  return (
    <td className="border border-gray-300 px-3 py-3 align-top text-sm leading-6 text-gray-800">
      {children}
    </td>
  );
}

const h2Class =
  "mb-4 mt-12 border-l-4 border-gray-900 pl-3 text-xl font-bold text-gray-900";
const h3Class = "mb-3 mt-8 text-lg font-bold text-gray-900";

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 py-10">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />

        <div className="mb-4 flex flex-wrap gap-2 text-sm text-gray-600">
          <span>作業用品ナビ編集部</span>
          <span aria-hidden="true">・</span>
          <time dateTime="2026-07-20">公開日：2026年7月20日</time>
          <span aria-hidden="true">・</span>
          <span>メーカー一次情報を確認して編集</span>
        </div>

        <h1 className="text-3xl font-bold leading-tight text-gray-950 sm:text-4xl">
          アンカー引張試験機はどれを選ぶ？簡易型・非破壊型・付着力試験機の違い
        </h1>

        <Figure
          src={HERO("anchor-tensile-tester-selection-hero.jpg")}
          alt="アンカー引張試験機を用途や最大荷重から比較する建設現場のイメージ"
          caption="アンカー引張試験機は、最大荷重より先に「何を、どの方法で確認するか」を分けることが重要です。"
          priority
        />

        <AnswerBox>
          <p>
            アンカー引張試験機は、最大荷重の大きさだけでなく、最初に「何を測るか」で選びます。建築設備の小径アンカーを簡易確認するならKT-6、荷重と変位を記録しながら金属系アンカーを非破壊確認するならAT-10DⅡ、外壁材・塗膜などの接着・付着力を剥離まで測るならRTシリーズ、吊天井ボルトを多数点確認するならAPC-10Bが候補です。
          </p>
          <p>
            試験機の最大荷重は確認荷重ではありません。設計・施工要領や現場責任者の指示を基準に、対象径、突出長、治具、設置幅、記録方法、校正、現行・後継品を確認してください。
          </p>
        </AnswerBox>

        <Caution title="最重要｜最大荷重を、そのまま確認荷重にしない">
          <p>
            カタログの最大荷重は「試験機が測定できる上限」であり、現場でアンカーへ加えるべき荷重ではありません。確認荷重は、設計図書、施工要領、発注者仕様、試験計画、現場責任者の指示に基づいて設定してください。
          </p>
        </Caution>

        <p className="leading-8 text-gray-800">
          まずは用途が異なる代表4機種を見比べてください。商品を後半へまとめず、判断に必要な章の直後へ分散して掲載しています。
        </p>

        <CardGrid>
          <ProductCard product={products.kt6} priority />
          <ProductCard product={products.at10d2} priority />
          <ProductCard product={products.rt1000} />
          <ProductCard product={products.apc10b} />
        </CardGrid>

        <nav className="my-8 rounded-xl border border-gray-200 bg-white p-5" aria-label="目次">
          <p className="mb-3 font-bold text-gray-900">目的から読む</p>
          <div className="grid gap-2 text-sm sm:grid-cols-2">
            <a className="underline underline-offset-4" href="#purpose">
              何を測るかで4タイプに分ける
            </a>
            <a className="underline underline-offset-4" href="#load-range">
              6・10・20・30・100kNの見方
            </a>
            <a className="underline underline-offset-4" href="#kt-vs-at">
              KT-6とAT-10DⅡを比較
            </a>
            <a className="underline underline-offset-4" href="#rt-series">
              RTシリーズ3機種を比較
            </a>
            <a className="underline underline-offset-4" href="#selection-flow">
              誤発注を防ぐ選定手順
            </a>
            <a className="underline underline-offset-4" href="#checklist">
              法人購買チェックリスト
            </a>
          </div>
        </nav>

        <section>
          <h2 id="purpose" className={h2Class}>
            結論｜最初に「何を測るか」で4タイプに分ける
          </h2>
          <p className="leading-8 text-gray-800">
            Excelの商品群には、同じ「引張試験機」という言葉で検索されても、試験の目的が異なる機種が含まれています。アンカーを所定荷重まで確認する機種と、接着面を剥がれるまで載荷する機種を混同すると、測定できないだけでなく、試験対象を意図せず破壊するおそれがあります。
          </p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse">
              <thead>
                <tr>
                  <Th>試験目的</Th>
                  <Th>候補</Th>
                  <Th>判断の軸</Th>
                  <Th>注意点</Th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <Td>小径アンカーを簡易に確認</Td>
                  <Td>KT-6</Td>
                  <Td>6kN範囲、対象径、突出長、携帯性</Td>
                  <Td>アナログ式。必要なカップリングを確認</Td>
                </tr>
                <tr>
                  <Td>金属系アンカーを非破壊で確認・記録</Td>
                  <Td>AT-10DⅡ</Td>
                  <Td>100kN範囲、荷重・変位、データ保存、設置幅</Td>
                  <Td>後継機AT-100/D3への切替状況を確認</Td>
                </tr>
                <tr>
                  <Td>外装材・塗膜・下地の接着／付着力を測定</Td>
                  <Td>RT-1000／2000／3000LDⅡ</Td>
                  <Td>試験面積、想定付着強度、10・20・30kN</Td>
                  <Td>剥離・破壊まで載荷する試験</Td>
                </tr>
                <tr>
                  <Td>吊天井ボルトを多数点確認</Td>
                  <Td>APC-10B</Td>
                  <Td>専用治具、10kN、記録件数、作業姿勢</Td>
                  <Td>一般アンカー試験機の代替ではない</Td>
                </tr>
              </tbody>
            </table>
          </div>

          <Figure
            src={HERO("anchor-test-purpose-comparison.jpg")}
            alt="アンカー非破壊試験と付着力試験と吊りボルト確認を比較するイメージ"
            caption="同じ引張方向の試験でも、アンカーの確認、付着面の破断、吊りボルトの多数点確認では、機種と試験計画が異なります。"
          />
        </section>

        <section>
          <h2 id="difference" className={h2Class}>
            アンカーの非破壊確認と付着力の破壊試験を混同しない
          </h2>
          <h3 className={h3Class}>非破壊確認は、破壊荷重より小さい範囲で載荷する</h3>
          <p className="leading-8 text-gray-800">
            アンカーの非破壊引張試験は、アンカーと母材の破壊荷重を超えない範囲で、確認したい荷重を加える考え方です。確認荷重に達したこと、必要に応じて変位、異常の有無などを記録します。「非破壊」という名称だけで損傷が起きないと断定せず、偏心、施工状態、母材のひび割れ、過大荷重に注意します。
          </p>

          <h3 className={h3Class}>付着力試験は、接着面が剥離・破壊するまで載荷する</h3>
          <p className="leading-8 text-gray-800">
            RTシリーズが対象とする接着・付着力試験は、試験対象の接着面や付着面が剥離・破壊するまで荷重を加え、荷重と試験面積から評価する試験です。試験片や下地に損傷が残る前提で、補修方法、飛散防止、周辺の立入り管理まで計画します。
          </p>

          <Caution title="名称が似ていても、RTシリーズを一般アンカー試験へ流用しない">
            <p>
              特殊条件での適合を記事や商品名だけから判断せず、メーカーが示す用途、試験規格、治具の適合を確認してください。不明な場合は試験計画を示してメーカーへ照会します。
            </p>
          </Caution>
        </section>

        <section>
          <h2 id="load-range" className={h2Class}>
            最大荷重6kN・10kN・20kN・30kN・100kNの選び方
          </h2>
          <p className="leading-8 text-gray-800">
            「大きい機種を買えば兼用できる」と考えると、重量、設置スペース、費用、操作性が合わないことがあります。最初に必要な確認荷重または想定破断荷重を決め、その値を無理なく測定できる範囲から候補を絞ります。
          </p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full min-w-[800px] border-collapse">
              <thead>
                <tr>
                  <Th>最大荷重</Th>
                  <Th>商品候補</Th>
                  <Th>主な用途</Th>
                  <Th>購入前に確認すること</Th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <Td>6kN</Td>
                  <Td>KT-6</Td>
                  <Td>小径アンカーの簡易確認</Td>
                  <Td>現場指定の確認荷重が範囲内か</Td>
                </tr>
                <tr>
                  <Td>10kN</Td>
                  <Td>RT-1000LDⅡ／APC-10B</Td>
                  <Td>低荷重域の付着力試験／吊天井ボルト確認</Td>
                  <Td>同じ10kNでも試験目的は別</Td>
                </tr>
                <tr>
                  <Td>20kN</Td>
                  <Td>RT-2000LDⅡ</Td>
                  <Td>中荷重域の付着力試験</Td>
                  <Td>試験面積と想定付着強度</Td>
                </tr>
                <tr>
                  <Td>30kN</Td>
                  <Td>RT-3000LDⅡ</Td>
                  <Td>高めの荷重域を想定する付着力試験</Td>
                  <Td>最大変位量と破断時の安全対策</Td>
                </tr>
                <tr>
                  <Td>100kN</Td>
                  <Td>AT-10DⅡ</Td>
                  <Td>金属系アンカーの非破壊確認</Td>
                  <Td>確認荷重、対象径、設置幅、後継機</Td>
                </tr>
              </tbody>
            </table>
          </div>

          <Figure
            src={HERO("anchor-tester-load-range-comparison.jpg")}
            alt="6kNから100kNまでのアンカー引張試験機の荷重範囲を比較するイメージ"
            caption="最大荷重は能力上限です。現場で設定する確認荷重とは分けて考えます。"
          />
        </section>

        <section>
          <h2 id="kt-vs-at" className={h2Class}>
            KT-6とAT-10DⅡの違い｜簡易型かデジタル記録型か
          </h2>
          <p className="leading-8 text-gray-800">
            どちらもアンカー確認の候補ですが、荷重範囲と記録方法が大きく異なります。小径アンカーを簡易に確認する用途へ100kN機を持ち込む必要があるとは限りません。一方、荷重変位曲線や試験データの提出が必要な現場では、KT-6では要件を満たせない可能性があります。
          </p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse">
              <thead>
                <tr>
                  <Th>比較項目</Th>
                  <Th>KT-6</Th>
                  <Th>AT-10DⅡ</Th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <Td>最大荷重</Td>
                  <Td>6kN</Td>
                  <Td>100kN</Td>
                </tr>
                <tr>
                  <Td>対象アンカーの目安</Td>
                  <Td>M6〜M12、W1/4〜W1/2</Td>
                  <Td>M6〜M24、W1/4〜W1</Td>
                </tr>
                <tr>
                  <Td>表示・記録</Td>
                  <Td>アナログ圧力計、置針式最大値ホールド</Td>
                  <Td>荷重・変位のデジタル表示、グラフ／ポイント保存</Td>
                </tr>
                <tr>
                  <Td>本体質量</Td>
                  <Td>1.7kg</Td>
                  <Td>6.1kg</Td>
                </tr>
                <tr>
                  <Td>向く運用</Td>
                  <Td>携帯性と簡易確認を優先</Td>
                  <Td>広い測定範囲と記録性を優先</Td>
                </tr>
                <tr>
                  <Td>特に確認</Td>
                  <Td>カップリング、突出長、6kN範囲</Td>
                  <Td>設置幅118mm、治具、後継機切替</Td>
                </tr>
              </tbody>
            </table>
          </div>

          <Figure
            src={HERO("kt6-vs-at10d2-worksite.jpg")}
            alt="簡易型KT-6とデジタル型AT-10DⅡを現場条件から比較するイメージ"
            caption="軽量な簡易型と、荷重・変位を保存できるデジタル型は、提出書類と現場条件で使い分けます。"
          />
        </section>

        <section>
          <h2 id="rt-series" className={h2Class}>
            RT-1000LDⅡ・RT-2000LDⅡ・RT-3000LDⅡの違い
          </h2>
          <p className="leading-8 text-gray-800">
            RTシリーズは、外装材施工の研究・開発から現場管理までを想定した接着・付着力引張試験器です。最大荷重が10・20・30kNと上がる一方、最大変位量は18・14・10mmと異なります。試験面積と想定付着強度から必要荷重を計算し、余裕だけでなく変位量と設置幅も確認します。
          </p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full min-w-[820px] border-collapse">
              <thead>
                <tr>
                  <Th>型式</Th>
                  <Th>最大荷重</Th>
                  <Th>最大変位量</Th>
                  <Th>本体質量</Th>
                  <Th>設置必要幅</Th>
                  <Th>選定の考え方</Th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <Td>RT-1000LDⅡ</Td>
                  <Td>10kN</Td>
                  <Td>18mm</Td>
                  <Td>3.3kg</Td>
                  <Td>110mm</Td>
                  <Td>比較的低い荷重域と大きめの変位量</Td>
                </tr>
                <tr>
                  <Td>RT-2000LDⅡ</Td>
                  <Td>20kN</Td>
                  <Td>14mm</Td>
                  <Td>4.5kg</Td>
                  <Td>111mm</Td>
                  <Td>中間の荷重域で選ぶ標準候補</Td>
                </tr>
                <tr>
                  <Td>RT-3000LDⅡ</Td>
                  <Td>30kN</Td>
                  <Td>10mm</Td>
                  <Td>5.1kg</Td>
                  <Td>121mm</Td>
                  <Td>高い想定荷重と設置条件を確認</Td>
                </tr>
              </tbody>
            </table>
          </div>

          <CardGrid>
            <ProductCard product={products.rt2000} />
            <ProductCard product={products.rt3000} />
          </CardGrid>

          <Figure
            src={HERO("rt-series-adhesion-pull-off-test.jpg")}
            alt="RTシリーズで外壁材や塗膜の付着力引張試験を行うイメージ"
            caption="付着力試験では、試験面積、治具、切込み、破断位置、補修までを試験計画に含めます。"
          />
        </section>

        <section>
          <h2 id="apc" className={h2Class}>
            APC-10Bが向く吊天井・多数点確認
          </h2>
          <p className="leading-8 text-gray-800">
            APC-10Bは、吊天井ボルトの強度確認に特化した荷重確認試験機です。最大10kN、設定荷重値のロック、CSVデータ保存、防滴仕様などが示されており、多数点を一定条件で確認する運用に向きます。ボルトの側面から専用治具を取り付ける方式は、設備がすでに設置されている場所の点検負担を減らす候補です。
          </p>
          <p className="mt-4 leading-8 text-gray-800">
            ただし、APC-10Bは一般的な金属系アンカーを100kNまで測定するAT-10DⅡの代替ではありません。「最大荷重が10kNだからRT-1000LDⅡと同じ」とも判断できません。対象、治具、試験方向、判定方法が異なります。
          </p>

          <Figure
            src={HERO("ceiling-bolt-apc10b-test.jpg")}
            alt="吊天井ボルトをAPC-10Bで多数点確認する現場のイメージ"
            caption="吊天井の点検は、高所作業、落下物、周囲の立入り、試験結果の記録方法まで含めて計画します。"
          />
        </section>

        <section>
          <h2 id="selection-flow" className={h2Class}>
            アンカー引張試験機の選定手順
          </h2>
          <ol className="my-5 space-y-4 pl-6 text-gray-800">
            <li className="list-decimal leading-8">
              <strong>試験目的を確定：</strong>アンカーの非破壊確認、付着面の破壊試験、吊天井ボルトの多数点確認を分ける。
            </li>
            <li className="list-decimal leading-8">
              <strong>確認荷重・想定破断荷重を確定：</strong>試験機の最大荷重から逆算せず、試験計画を先に決める。
            </li>
            <li className="list-decimal leading-8">
              <strong>対象の寸法を実測：</strong>アンカー径、ねじ規格、ピッチ、突出長、試験面積、周囲スペースを測る。
            </li>
            <li className="list-decimal leading-8">
              <strong>治具を照合：</strong>カップリング、アダプター、D筋チャック、付着試験用治具、吊りボルト専用治具を確認する。
            </li>
            <li className="list-decimal leading-8">
              <strong>記録要件を確認：</strong>最大荷重だけか、変位、曲線、日時、CSV、提出帳票まで必要かを分ける。
            </li>
            <li className="list-decimal leading-8">
              <strong>現場適合を確認：</strong>設置幅、壁際、隅部、足場、高所、電源、雨水、飛散・落下の危険を確認する。
            </li>
            <li className="list-decimal leading-8">
              <strong>校正・保守を決める：</strong>校正周期、証明書、修理窓口、予備機、消耗品、ソフト対応を確認する。
            </li>
            <li className="list-decimal leading-8">
              <strong>現行品を再確認：</strong>AT-10DⅡ、RTシリーズ、APC-10Bは後継機情報を確認し、長期運用まで比較する。
            </li>
          </ol>

          <div className="my-6 overflow-x-auto">
            <table className="w-full min-w-[820px] border-collapse">
              <thead>
                <tr>
                  <Th>確認項目</Th>
                  <Th>現場で集める情報</Th>
                  <Th>候補が変わる条件</Th>
                  <Th>確認先</Th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <Td>試験目的</Td>
                  <Td>確認試験か、破断までの付着力試験か</Td>
                  <Td>AT／KT、RT、APCで分岐</Td>
                  <Td>試験計画、仕様書、メーカー</Td>
                </tr>
                <tr>
                  <Td>荷重</Td>
                  <Td>確認荷重、想定付着強度、試験面積</Td>
                  <Td>6・10・20・30・100kN</Td>
                  <Td>設計者、現場責任者</Td>
                </tr>
                <tr>
                  <Td>対象寸法</Td>
                  <Td>径、ねじ、突出長、周囲幅</Td>
                  <Td>カップリングと設置可否</Td>
                  <Td>現場実測、取扱説明書</Td>
                </tr>
                <tr>
                  <Td>記録</Td>
                  <Td>荷重のみ、変位、CSV、曲線、帳票</Td>
                  <Td>アナログ／デジタル</Td>
                  <Td>発注者仕様、品質規程</Td>
                </tr>
                <tr>
                  <Td>保守</Td>
                  <Td>校正期限、修理、後継機、予備機</Td>
                  <Td>購入／レンタル、標準機選定</Td>
                  <Td>メーカー、販売店、校正機関</Td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 id="site-check" className={h2Class}>
            試験前に確認する設置条件・治具・記録
          </h2>
          <h3 className={h3Class}>アンカー周囲の必要幅と偏心を確認する</h3>
          <p className="leading-8 text-gray-800">
            試験機の脚や反力部が、配管、架台、壁、段差へ干渉すると正しく設置できません。治具の中心とアンカー軸がずれた偏心載荷は、測定誤差や思わぬ破損につながります。現場写真だけで判断せず、アンカー中心から障害物までの寸法を測ります。
          </p>

          <h3 className={h3Class}>カップリングと突出長を発注前に照合する</h3>
          <p className="leading-8 text-gray-800">
            「M10対応」と書かれていても、ねじ規格や取付状態によって必要な治具は変わります。標準付属品、別売品、消耗品、紛失時の単品供給を一覧にして見積へ含めます。
          </p>

          <h3 className={h3Class}>試験番号と結果をひも付ける</h3>
          <p className="leading-8 text-gray-800">
            データ保存機能があっても、試験位置やアンカー番号との対応が曖昧では品質記録として使いにくくなります。平面図、写真、試験番号、日時、担当者、設定荷重、最大荷重、変位、判定、異常を同じルールで記録します。
          </p>
        </section>

        <section>
          <h2 id="result-record" className={h2Class}>
            荷重・変位・試験結果をどう記録するか
          </h2>
          <p className="leading-8 text-gray-800">
            試験機を選ぶ段階で、現場が必要とする記録の粒度を決めておくと、アナログ簡易型で足りるのか、荷重・変位を保存できるデジタル型が必要なのかを判断しやすくなります。単に最大荷重の数字を書き写すだけでは、どの位置を、どの条件で、誰が試験したかを後から追跡できません。
          </p>

          <h3 className={h3Class}>最低限、試験位置と設定条件をひも付ける</h3>
          <p className="leading-8 text-gray-800">
            試験番号、建物・階・通り芯、アンカーまたは試験片の位置、対象型式、施工日、試験日、担当者、使用試験機、校正期限、使用治具、設定荷重を同じ様式へ記録します。写真を残す場合は、全景、試験前、試験機設置、最大荷重到達、試験後の状態を試験番号と一致させます。
          </p>

          <h3 className={h3Class}>荷重と変位は、試験目的に合わせて読む</h3>
          <p className="leading-8 text-gray-800">
            アンカーの確認試験では、所定の確認荷重へ到達したか、載荷中に異常な変位や母材のひび割れがないかを確認します。付着力試験では、最大荷重だけでなく、試験面積、破断位置、下地・接着層・仕上げ層のどこで剥離したかを記録します。同じ数値でも試験面積や破断位置が異なれば、評価の意味は変わります。
          </p>

          <h3 className={h3Class}>デジタル保存機能があっても、現場番号は自動では付かない</h3>
          <p className="leading-8 text-gray-800">
            AT-10DⅡやRTシリーズの保存データ、APC-10BのCSVは、記録作業を助ける機能です。しかし、保存順と現場の試験位置を対応させる運用がなければ、後から結果を特定できません。試験前に番号を発行し、機器データ、写真、平面図、紙または電子帳票で同じ番号を使います。
          </p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full min-w-[880px] border-collapse">
              <thead>
                <tr>
                  <Th>記録項目</Th>
                  <Th>アンカー確認試験</Th>
                  <Th>付着力試験</Th>
                  <Th>購買時に必要な機能</Th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <Td>試験位置</Td>
                  <Td>アンカー番号、階、通り芯、設備名</Td>
                  <Td>試験面番号、部位、下地、仕上げ材</Td>
                  <Td>データ番号を現場番号と対応できること</Td>
                </tr>
                <tr>
                  <Td>荷重</Td>
                  <Td>設定荷重、到達値、保持条件</Td>
                  <Td>最大荷重、試験面積、算出値</Td>
                  <Td>必要範囲と最小表示値を確認</Td>
                </tr>
                <tr>
                  <Td>変位</Td>
                  <Td>要求される場合に最大荷重時変位を記録</Td>
                  <Td>最大荷重時変位と破断までの挙動</Td>
                  <Td>変位センサと保存機能の要否</Td>
                </tr>
                <tr>
                  <Td>判定・所見</Td>
                  <Td>到達可否、ひび割れ、抜け、異音</Td>
                  <Td>破断位置、界面、下地状態、補修</Td>
                  <Td>自由記載と写真を統合できる運用</Td>
                </tr>
                <tr>
                  <Td>トレーサビリティ</Td>
                  <Td>試験機番号、校正期限、治具</Td>
                  <Td>試験機番号、治具、接着材、養生条件</Td>
                  <Td>機器台帳と校正台帳を関連付ける</Td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 id="buy-or-rent" className={h2Class}>
            アンカー引張試験機は購入とレンタルのどちらがよいか
          </h2>
          <p className="leading-8 text-gray-800">
            高額な試験機は、購入価格だけで判断せず、試験頻度、緊急対応、機種の固定度、校正・保管・修理の体制まで含めて比較します。今回の商品ページへ送客する記事であっても、単発現場に購入を無理に勧めるのではなく、継続利用する法人が購入によって得られる利点を具体的に示す方が、信頼と成約の両方につながります。
          </p>

          <h3 className={h3Class}>購入が候補になる法人</h3>
          <p className="leading-8 text-gray-800">
            同じ試験目的・荷重範囲を年間を通して繰り返し使う、急な検査に即応したい、社内の操作教育と校正台帳を整備できる、現場ごとに借りる手配時間や送料を減らしたい場合は購入が候補です。特にKT-6のような常備しやすい簡易型や、APC-10Bのように多数点を反復確認する専用機は、利用回数を具体的に見積もります。
          </p>

          <h3 className={h3Class}>レンタルも比較した方がよいケース</h3>
          <p className="leading-8 text-gray-800">
            年に数回しか使わない、案件ごとに必要荷重や治具が変わる、旧型から後継機への移行期、校正・修理・保管を自社で管理しにくい場合はレンタルも比較対象です。レンタルでは、希望日に必要な機種と治具を確保できるか、校正書類、破損時の負担、延長料金、返却期限まで確認します。
          </p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full min-w-[820px] border-collapse">
              <thead>
                <tr>
                  <Th>比較項目</Th>
                  <Th>購入</Th>
                  <Th>レンタル</Th>
                  <Th>判断材料</Th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <Td>利用頻度</Td>
                  <Td>反復・常時利用に向く</Td>
                  <Td>単発・低頻度に向く</Td>
                  <Td>年間試験日数と試験点数</Td>
                </tr>
                <tr>
                  <Td>緊急対応</Td>
                  <Td>社内在庫なら即応しやすい</Td>
                  <Td>在庫・配送日程に左右される</Td>
                  <Td>急な追加試験の発生頻度</Td>
                </tr>
                <tr>
                  <Td>校正・保守</Td>
                  <Td>自社で期限・費用を管理</Td>
                  <Td>契約条件に含まれる範囲を確認</Td>
                  <Td>品質管理体制と担当者</Td>
                </tr>
                <tr>
                  <Td>機種変更</Td>
                  <Td>標準化しやすいが陳腐化リスク</Td>
                  <Td>案件ごとに選びやすい</Td>
                  <Td>対象径・荷重・治具の変動</Td>
                </tr>
                <tr>
                  <Td>総費用</Td>
                  <Td>本体、治具、校正、修理、保管</Td>
                  <Td>基本料、日数、送料、延長、補償</Td>
                  <Td>3〜5年の総保有・利用コスト</Td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="leading-8 text-gray-800">
            購入を選ぶ場合は、本体価格だけでなく、対象径ごとの治具、校正、修理、予備電池、記録ソフト、教育、後継機への移行まで見積条件へ入れます。商品ページでは価格や在庫が変動するため、最新条件を確認してください。
          </p>
        </section>

        <section>
          <h2 id="mistakes" className={h2Class}>
            よくある選び方・使い方の失敗
          </h2>
          <div className="my-6 overflow-x-auto">
            <table className="w-full min-w-[860px] border-collapse">
              <thead>
                <tr>
                  <Th>失敗</Th>
                  <Th>起こり得る問題</Th>
                  <Th>防止策</Th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["最大荷重だけで機種を選ぶ", "試験目的が合わない", "対象と試験方法を先に分ける"],
                  ["100kNを確認荷重だと思う", "アンカーや母材を損傷する", "試験計画の確認荷重を使う"],
                  ["RTをアンカー非破壊試験へ使う", "用途不適合", "メーカー用途を確認する"],
                  ["APCを一般アンカー機として選ぶ", "治具・方向・荷重が合わない", "吊天井特化を理解する"],
                  ["アンカー径だけを確認する", "ねじやカップリングが合わない", "規格・ピッチ・突出長も実測"],
                  ["標準付属品で全径に対応できると思う", "現場で接続できない", "付属・別売治具を一覧化"],
                  ["突出長を測らない", "カップリングが装着できない", "機種別の範囲と実寸を照合"],
                  ["設置必要幅を確認しない", "壁際や隅部へ置けない", "アンカー周囲を実測"],
                  ["傾斜補正範囲を超える", "偏心・誤差・破損", "水平・軸心・反力面を整える"],
                  ["確認荷重の根拠がない", "判定できない", "設計・仕様・担当者指示を記録"],
                  ["荷重だけで変位を記録しない", "提出要件不足", "必要帳票を先に確認"],
                  ["データと試験位置をひも付けない", "結果の追跡ができない", "番号・写真・図面を統一"],
                  ["校正期限を確認しない", "測定結果の信頼性を説明できない", "台帳と期限管理"],
                  ["校正証明書だけで十分と思う", "試験方法の不備を見落とす", "設置・治具・手順も確認"],
                  ["後継機を確認しない", "保守や治具供給で困る", "現行品・後継品・互換性を照合"],
                  ["旧型ソフトの動作環境を確認しない", "データ出力できない", "PC・ケーブル・OSを確認"],
                  ["予備電池を用意しない", "現場で試験が止まる", "電池種と交換手順を標準化"],
                  ["雨や粉じん環境を過信する", "故障や測定不良", "保護等級と取説条件を確認"],
                  ["高所の落下対策をしない", "人身・物損事故", "工具落下防止と立入管理"],
                  ["破断時の飛散範囲を見ない", "破片によるけが", "遮へい・保護具・退避範囲"],
                  ["一人で無理な姿勢で試験する", "転倒・偏心・誤操作", "足場と補助者を確保"],
                  ["購入価格だけで比較する", "治具・校正・保守費が不足", "総保有コストで比較"],
                  ["商品画像だけで寸法を判断する", "現場へ設置できない", "仕様表と実測で確認"],
                  ["D2とDⅡの表記差を別機種と思う", "誤発注・照合漏れ", "正式型式・JAN・コードを確認"],
                  ["試験後の補修を計画しない", "付着力試験跡が残る", "補修材・工程・責任者を決める"],
                ].map(([mistake, risk, prevention]) => (
                  <tr key={mistake}>
                    <Td>{mistake}</Td>
                    <Td>{risk}</Td>
                    <Td>{prevention}</Td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 id="checklist" className={h2Class}>
            法人購買・校正・現場配備チェックリスト
          </h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                title: "試験条件",
                items: [
                  "試験目的と対象を確定した",
                  "確認荷重または想定破断荷重の根拠がある",
                  "アンカー径・ねじ・突出長を実測した",
                  "付着試験では試験面積と補修方法を決めた",
                  "試験位置・数量・判定方法を決めた",
                ],
              },
              {
                title: "機種・治具",
                items: [
                  "最大荷重に適切な余裕がある",
                  "必要なカップリング・アダプターが揃う",
                  "設置必要幅と障害物を確認した",
                  "記録・CSV・変位の要否を確認した",
                  "現行品・後継品・互換性を確認した",
                ],
              },
              {
                title: "安全・作業",
                items: [
                  "偏心を避けて軸方向へ載荷できる",
                  "飛散・落下・転倒の対策がある",
                  "立入範囲と補助者を決めた",
                  "高所作業と工具落下対策を確認した",
                  "異常時の中止基準を共有した",
                ],
              },
              {
                title: "品質・保守",
                items: [
                  "校正証明書と期限を確認した",
                  "試験番号と位置をひも付ける",
                  "電池・ケーブル・ソフト環境を確認した",
                  "修理・校正・代替機の窓口がある",
                  "保管、貸出、使用履歴を台帳化する",
                ],
              },
            ].map((group) => (
              <section key={group.title} className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                <h3 className="font-bold text-gray-900">{group.title}</h3>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-gray-800">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span aria-hidden="true">□</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <Figure
            src={HERO("anchor-tester-calibration-checklist.jpg")}
            alt="法人担当者がアンカー引張試験機の校正期限と治具を点検するイメージ"
            caption="本体、治具、校正、ソフト、記録様式を一つの管理台帳で追えるようにします。"
          />
        </section>

        <section>
          <h2 id="all-products" className={h2Class}>
            6商品の仕様・用途比較
          </h2>
          <p className="leading-8 text-gray-800">
            Excelに掲載された7行は、AT-10DⅡが重複していたため、実商品は6点です。URLと画像は重複行を除いて各1件を使用しています。下表は選定の入口であり、最終発注前には商品ページとメーカー一次情報を照合してください。
          </p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full min-w-[980px] border-collapse">
              <thead>
                <tr>
                  <Th>商品</Th>
                  <Th>試験目的</Th>
                  <Th>最大荷重</Th>
                  <Th>表示・記録</Th>
                  <Th>向く現場</Th>
                  <Th>公開・購入前確認</Th>
                </tr>
              </thead>
              <tbody>
                {Object.values(products).map((product) => (
                  <tr key={product.code}>
                    <Td>{product.short}</Td>
                    <Td>{product.category}</Td>
                    <Td>{product.maxLoad}</Td>
                    <Td>{product.display}</Td>
                    <Td>{product.use}</Td>
                    <Td>{product.check}</Td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="my-6 flex flex-wrap gap-3">
            <CTA href="#purpose">試験目的から選び直す</CTA>
            <CTA href="#selection-flow">選定手順を確認する</CTA>
            <CTA href="#checklist">購買チェックリストを見る</CTA>
          </div>
        </section>

        <section>
          <h2 id="sources" className={h2Class}>
            仕様確認に使用した一次情報
          </h2>
          <p className="leading-8 text-gray-800">
            記事公開時は、商品名だけで仕様を推測せず、メーカー公式の製品ページ、取扱説明書、最新カタログ、商品ページの順で照合します。特に後継機への切替、付属治具、校正、ソフトウェア対応は更新される可能性があります。
          </p>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-gray-800">
            <li>
              <a className="underline underline-offset-4" href="https://sanko-techno.co.jp/products/fastening/tester/" target="_blank" rel="noopener noreferrer">
                サンコーテクノ「試験機」製品分類
              </a>
            </li>
            <li>
              <a className="underline underline-offset-4" href="https://sanko-techno.co.jp/products/tester/kt-6_20/" target="_blank" rel="noopener noreferrer">
                サンコーテクノ「テクノテスター KT-6／KT-20」
              </a>
            </li>
            <li>
              <a className="underline underline-offset-4" href="https://sanko-techno.co.jp/products/tester/at-10d2/" target="_blank" rel="noopener noreferrer">
                サンコーテクノ「テクノテスター AT-10DⅡ」
              </a>
            </li>
            <li>
              <a className="underline underline-offset-4" href="https://sanko-techno.co.jp/products/tester/rt/" target="_blank" rel="noopener noreferrer">
                サンコーテクノ「テクノテスター RTシリーズ」
              </a>
            </li>
            <li>
              <a className="underline underline-offset-4" href="https://sanko-techno.co.jp/products/qa/" target="_blank" rel="noopener noreferrer">
                サンコーテクノ「製品Q&amp;A」
              </a>
            </li>
            <li>
              <a className="underline underline-offset-4" href="https://www.trust-gr.com/product/original/apc/" target="_blank" rel="noopener noreferrer">
                トラスト「アンカープロチェッカー APCシリーズ」
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h2 id="faq" className={h2Class}>
            よくある質問
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="rounded-xl border border-gray-200 bg-white p-5">
                <summary className="cursor-pointer font-bold text-gray-900">{faq.q}</summary>
                <p className="mt-3 leading-8 text-gray-800">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section>
          <h2 id="summary" className={h2Class}>
            まとめ｜最大荷重より先に、測定対象と試験目的を決める
          </h2>
          <p className="leading-8 text-gray-800">
            小径アンカーの簡易確認はKT-6、幅広い径を荷重・変位とともに記録する非破壊確認はAT-10DⅡ、外装材や塗膜の付着力試験はRTシリーズ、吊天井ボルトの多数点確認はAPC-10Bが候補です。同じ10kNでもRT-1000LDⅡとAPC-10Bは目的が違い、同じアンカー用でもKT-6とAT-10DⅡは荷重範囲と記録性が違います。
          </p>
          <p className="mt-4 leading-8 text-gray-800">
            発注前に、確認荷重、アンカー径、ねじ規格、突出長、治具、設置幅、記録要件、校正、現行・後継品を一つずつ確認してください。商品ページは候補の仕様確認に使い、最終的な試験方法と判定条件は設計・施工要領と現場責任者の指示に従います。
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <CTA href="#all-products">6商品を比較する</CTA>
            <CTA href="#purpose">用途から選び直す</CTA>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
