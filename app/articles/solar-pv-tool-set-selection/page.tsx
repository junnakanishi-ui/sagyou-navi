import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";

const SLUG = "solar-pv-tool-set-selection";
const SITE_URL = "https://sagyou-navi.com";
const ARTICLE_IMG = "/images/articles";

const IMG = {
  hero: `${ARTICLE_IMG}/solar-pv-tool-set-hero.jpg`,
  mc4: `${ARTICLE_IMG}/mc4-connector-crimping-tools.jpg`,
  comparison: `${ARTICLE_IMG}/knipex-solar-tool-set-comparison.jpg`,
  electrical: `${ARTICLE_IMG}/knipex-electrical-insulated-tools.jpg`,
  toolCase: `${ARTICLE_IMG}/knipex-tool-case-carry.jpg`,
  checklist: `${ARTICLE_IMG}/solar-tool-procurement-checklist.jpg`,
};

export const metadata: Metadata = {
  title:
    "太陽光発電用工具セットの選び方｜MC4コネクタ施工・PVケーブル加工に必要なKNIPEX工具｜作業用品ナビ",
  description:
    "太陽光発電用工具セットの選び方を、MC4コネクタ施工とPVケーブル加工の工程から解説。KNIPEX 979101・979104V01・979101LEの違い、圧着ダイス・ロケーター・絶縁工具・ツールケース、法人での工具準備チェックリストまで紹介します。",
  alternates: { canonical: `${SITE_URL}/articles/${SLUG}` },
  openGraph: {
    title:
      "太陽光発電用工具セットの選び方｜MC4コネクタ施工・PVケーブル加工に必要なKNIPEX工具",
    description:
      "太陽光発電用工具セットの選び方を、MC4コネクタ施工とPVケーブル加工の工程から解説。KNIPEX 979101・979104V01・979101LEの違い、圧着ダイス・ロケーター・絶縁工具・ツールケース、法人での工具準備チェックリストまで紹介します。",
    type: "article",
    images: [IMG.hero],
  },
};

const UTM = "utm_source=sagyou_navi";

function buildUrl(url: string, utm: string): string {
  if (!url) return url;
  const hashIndex = url.indexOf("#");
  const append = (base: string) => `${base}${base.includes("?") ? "&" : "?"}${utm}`;
  if (hashIndex === -1) return append(url);
  return `${append(url.slice(0, hashIndex))}${url.slice(hashIndex)}`;
}

function R(path: string): string {
  return buildUrl(`https://item.rakuten.co.jp/crecote-shop/${path}`, UTM);
}

const URLS = {
  s979101le: R("ta034127-979101le/"),
  s979104v01: R("ta034128-979104v01/"),
  s979101: R("ta034126-979101/"),
  robust26: R("ta040488-002133le/"),
  cobra: R("ta000044-002072v06/"),
  nextrip: R("ta030627-1272190/"),
  twingrip: R("ta029733-001961v01/"),
  insulPliers: R("ta030157-0307200/"),
  insulSet3: R("ta029791-003130bkv03/"),
  modularX18: R("ta029782-002150le/"),
  bigTwinMove: R("ta040491-002141le/"),
  snapRing: R("ta029756-002004sb/"),
  knipexList: buildUrl(
    "https://search.rakuten.co.jp/search/mall/%EF%BC%AB%EF%BC%AE%EF%BC%A9%EF%BC%B0%EF%BC%A5%EF%BC%B8/?p=2&sid=426972",
    UTM
  ),
  toolList: buildUrl(
    "https://item.rakuten.co.jp/crecote-shop/c/0000000185/?l-id=shoptop_shopmenu_categorypage_16_2ndlevel_3",
    UTM
  ),
};

const productImage = (id: string) => `/products/${id}.jpg`;

type Prod = {
  id: string;
  imgId?: string;
  name: string;
  use: string;
  url: string;
};

const SOLAR_SETS: Prod[] = [
  {
    id: "ta034126-979101",
    name: "KNIPEX 9791-01 太陽光発電用工具セット 3点 979101",
    use: "太陽光発電用の工具セット（3点）。※MC4用の圧着ダイスが付属するとは限りません。対応ダイス・ロケーター・付属品は必ず商品ページで確認してください",
    url: URLS.s979101,
  },
  {
    id: "ta034128-979104v01",
    name: "KNIPEX 太陽光用工具セット MC4 V01 979104V01",
    use: "MC4用に一式そろえたい施工会社向けのセット。セット内容・対応コネクタ・ダイスは商品ページで確認",
    url: URLS.s979104v01,
  },
  {
    id: "ta034127-979101le",
    name: "KNIPEX ツールケース 太陽光用工具セット MC4用 979101LE",
    use: "太陽光用の工具ケース。工具・ダイス・ロケーターの整理・持ち出し・施工班管理に。構成（ケース/工具の付属）は商品ページで確認",
    url: URLS.s979101le,
  },
];

const RELATED_ELECTRICAL: Prod[] = [
  {
    id: "ta030627-1272190",
    name: "KNIPEX 電工用マルチツール ネクストリップ 1272190",
    use: "被覆むき・切断・フェルール圧着などに使える電工用マルチツール（対応範囲はメーカー仕様を確認）",
    url: URLS.nextrip,
  },
  {
    id: "ta030157-0307200",
    name: "KNIPEX 絶縁ペンチ 1000V絶縁 0307200",
    use: "1000V絶縁のペンチ。使用条件・適合はメーカー仕様を確認",
    url: URLS.insulPliers,
  },
  {
    id: "ta029791-003130bkv03",
    name: "KNIPEX 絶縁工具3点セット 003130BKV03",
    use: "絶縁工具の3点セット。セット内容・絶縁仕様はメーカー仕様を確認",
    url: URLS.insulSet3,
  },
  {
    id: "ta000044-002072v06",
    name: "KNIPEX コブラセット 002072V06",
    use: "ウォーターポンププライヤー「コブラ」のセット。サイズ構成はメーカー仕様を確認",
    url: URLS.cobra,
  },
  {
    id: "ta029733-001961v01",
    name: "KNIPEX ツイングリップ3点セット 001961V01",
    use: "掴む・回す・外す作業に使えるツイングリップの3点セット（メーカー仕様を確認）",
    url: URLS.twingrip,
  },
  {
    id: "ta029756-002004sb",
    name: "KNIPEX 8本組 精密スナップリングプライヤーセット 002004SB",
    use: "精密作業・保守点検向けのスナップリングプライヤー8本組（メーカー仕様を確認）",
    url: URLS.snapRing,
  },
];

const TOOL_CASES: Prod[] = [
  {
    id: "ta040488-002133le",
    name: "KNIPEX ツールケース Robust26 Move 002133LE",
    use: "工具を保護しながら持ち出せるツールケース（容量・仕切りはメーカー仕様を確認）",
    url: URLS.robust26,
  },
  {
    id: "ta029782-002150le",
    name: "KNIPEX モジュラーX18 ツールバックパック 002150LE",
    use: "両手を空けて移動したい保守点検向けのツールバックパック（収納・仕様はメーカー仕様を確認）",
    url: URLS.modularX18,
  },
  {
    id: "ta040491-002141le",
    name: "KNIPEX ツールケース ビッグツインムーヴ 002141LE",
    use: "工具をまとめて管理したい法人向けの大型ツールケース（容量・仕様はメーカー仕様を確認）",
    url: URLS.bigTwinMove,
  },
];

const FAQ_ITEMS = [
  {
    q: "太陽光発電用工具セットは何に使いますか？",
    a: "PVケーブルの切断・被覆むき、MC4コネクタの端子圧着・組立/解除など、太陽光発電設備の施工・改修・保守点検の作業に使います。",
  },
  {
    q: "MC4コネクタの圧着には専用工具が必要ですか？",
    a: "コネクタ仕様に適合する圧着プライヤーと圧着ダイスが必要です。一般ペンチでの代用は圧着不良につながるため避け、使用するコネクタに適合する工具を確認しましょう。",
  },
  {
    q: "KNIPEX 979101と979104V01の違いは何ですか？",
    a: "979101は太陽光発電用の工具セット（3点）、979104V01はMC4用に一式そろえたい施工会社向けのセットという位置づけです。セット内容・付属ダイスは型番ごとに異なるため、必ず商品ページで確認してください。",
  },
  {
    q: "979101LEは工具セットですか？",
    a: "979101LEは太陽光用のツールケースで、工具・ダイス・ロケーターの整理や現場持ち出し、施工班ごとの工具管理に向きます。ケース中心か工具付きかは商品ページでご確認ください。",
  },
  {
    q: "太陽光工事では絶縁工具も必要ですか？",
    a: "電気工事・保守点検では、絶縁ペンチや絶縁工具などの基本工具もあわせて確認します。使用条件・絶縁仕様はメーカー仕様を確認し、有資格者による作業を前提にしてください。",
  },
  {
    q: "電工用マルチツールは太陽光施工で使えますか？",
    a: "被覆むき・切断・フェルール圧着などに使える電工用マルチツールは、太陽光施工の周辺作業でも役立つ場合があります。対応範囲はメーカー仕様を確認しましょう。",
  },
  {
    q: "法人で工具をそろえる場合、何を確認すべきですか？",
    a: "使用するMC4コネクタのメーカー・型式、ケーブルサイズ、適合する圧着ダイス・ロケーター、取付/解除工具、絶縁工具、収納ケース、安全確認（有資格者作業・停電検電・施工手順）を確認すると準備しやすくなります。",
  },
  {
    q: "太陽光発電設備の施工は誰でもできますか？",
    a: "太陽光発電設備の電気工事は、安全・法令・資格に関わります。工具がそろっていても、有資格者による作業、停電・検電、技術基準・施工手順、メーカー指定工具の確認が前提です。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

function CTA({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow noopener noreferrer"
      className="my-4 block w-full rounded-md bg-gray-900 px-6 py-4 text-center font-bold text-white transition hover:bg-gray-700"
    >
      {children}
    </a>
  );
}

function FinalCTA({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow noopener noreferrer"
      className="my-6 block w-full rounded-lg bg-gray-900 px-8 py-5 text-center text-lg font-bold text-white transition hover:bg-gray-700"
    >
      {children}
    </a>
  );
}

function ProductLink({ href, children }: { href: string; children?: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow noopener noreferrer"
      className="inline-block rounded-md bg-gray-900 px-4 py-2 text-sm font-bold text-white transition hover:bg-gray-700"
    >
      {children ?? "商品ページを見る"}
    </a>
  );
}

function ProductCard({ item }: { item: Prod }) {
  const imgId = item.imgId ?? item.id;
  return (
    <a
      href={item.url}
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
        <ProductCard key={`${item.id}-${item.name}`} item={item} />
      ))}
    </div>
  );
}

function Caution({
  title = "⚠️ ご確認ください",
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <aside className="my-6 rounded-md border border-red-300 bg-red-50 p-4">
      <p className="mb-2 font-bold text-red-800">{title}</p>
      <div className="space-y-2 text-sm leading-relaxed text-gray-800">{children}</div>
    </aside>
  );
}

function Th({ children }: { children: ReactNode }) {
  return (
    <th className="border border-gray-300 bg-gray-100 px-3 py-2 text-left text-sm font-bold">
      {children}
    </th>
  );
}

function Td({ children }: { children: ReactNode }) {
  return <td className="border border-gray-300 px-3 py-2 text-sm align-top">{children}</td>;
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
          <span className="text-gray-700">太陽光発電用工具セットの選び方</span>
        </nav>

        <span className="mb-3 inline-block rounded bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-800">
          選び方ガイド
        </span>

        <article className="leading-relaxed text-gray-900">
          <h1 className="mb-6 text-3xl font-bold leading-snug">
            太陽光発電用工具セットの選び方｜MC4コネクタ施工・PVケーブル加工に必要なKNIPEX工具
          </h1>

          <p className="mb-6 text-sm text-gray-500">公開日：2026年7月9日／約15分で読めます</p>

          <ArticleImg
            src={IMG.hero}
            alt="太陽光発電用工具セット・MC4工具を選ぶイメージ"
          />

          <section className="my-6 rounded-md border border-gray-300 bg-gray-50 p-5">
            <p className="mb-3 font-bold">この記事の要点（先に結論）</p>
            <p className="mb-3">
              太陽光発電用工具セットは、<strong>PVケーブルの切断・被覆むき・MC4コネクタの圧着・組立/解除</strong>を正確に行うために選びます。
            </p>
            <ul className="mb-3 list-disc space-y-1 pl-6">
              <li>MC4コネクタ施工を行う場合は、対応する圧着ダイス・ロケーター・取付工具の有無を確認します。</li>
              <li>PVケーブル加工では、ケーブルカッター、ストリッパー、圧着プライヤーを工程ごとに使い分けます。</li>
              <li>施工・改修・保守点検では、一般工具だけでなくコネクタ仕様に合う専用工具を確認することが重要です。</li>
              <li>現場持ち出しが多い場合は、工具ケースやバックパックもあわせて検討すると、紛失や忘れ物を防ぎやすくなります。</li>
            </ul>
            <p>
              なお、太陽光発電設備の電気工事は安全・法令・資格に関わります。有資格者による作業、停電・検電の確認、技術基準・施工手順、メーカー指定工具・適合する圧着ダイス/ロケーターの確認を前提に進めてください。
            </p>
          </section>

          <CTA href={URLS.knipexList}>
            太陽光発電工事・MC4コネクタ施工用のKNIPEX工具を、KNIPEX一覧で確認する
          </CTA>

          <h2 className="mt-12 mb-4 border-l-4 border-gray-900 pl-3 text-2xl font-bold">
            太陽光発電用工具セットは「MC4コネクタ施工」と「PVケーブル加工」で選ぶ
          </h2>
          <h3 className="mt-8 mb-3 text-xl font-bold">PVケーブルの切断に必要な工具</h3>
          <p className="mb-4">PVケーブル（ソーラーケーブル）を、芯線をつぶさずきれいに切断できるケーブルカッターが基本です。切断面が乱れると、その後の被覆むきや圧着の精度に影響します。</p>
          <h3 className="mt-8 mb-3 text-xl font-bold">被覆むきに必要なストリッパー</h3>
          <p className="mb-4">被覆を適切な長さで、芯線を傷つけずにむけるストリッパーが必要です。ケーブルサイズ（sq）に対応しているかを確認します。</p>
          <h3 className="mt-8 mb-3 text-xl font-bold">MC4コネクタの圧着に必要な圧着工具・ダイス</h3>
          <p className="mb-4">MC4コネクタの端子圧着には、コネクタ仕様に適合する圧着プライヤーと圧着ダイスが必要です。ダイスが適合しないと、正しい圧着ができません。</p>
          <h3 className="mt-8 mb-3 text-xl font-bold">コネクタ組立/解除に使う取付工具</h3>
          <p className="mb-4">MC4コネクタの締付け・解除には、対応する取付工具（レンチ・スパナ類）を使います。保守点検での解除にも必要になります。</p>
          <h3 className="mt-8 mb-3 text-xl font-bold">現場持ち出しには専用ケースが便利</h3>
          <p className="mb-4">工具・ダイス・ロケーターをまとめて管理できるケースがあると、現場持ち出し時の紛失や忘れ物を防ぎやすくなります。</p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr><Th>工程</Th><Th>必要な工具</Th><Th>確認ポイント</Th></tr>
              </thead>
              <tbody>
                <tr><Td>切断</Td><Td>PVケーブルカッター</Td><Td>芯線をつぶさず切れるか</Td></tr>
                <tr><Td>被覆むき</Td><Td>ストリッパー</Td><Td>ケーブルサイズ（sq）に対応</Td></tr>
                <tr><Td>圧着</Td><Td>圧着プライヤー＋圧着ダイス</Td><Td>コネクタ仕様に適合するダイスか</Td></tr>
                <tr><Td>位置決め</Td><Td>ロケーター</Td><Td>端子・コネクタに適合するか</Td></tr>
                <tr><Td>組立/解除</Td><Td>MC4取付工具</Td><Td>締付け・解除の両方に対応</Td></tr>
                <tr><Td>保護・持ち出し</Td><Td>ツールケース</Td><Td>工具・ダイスの整理・管理</Td></tr>
              </tbody>
            </table>
          </div>

          <Caution title="⚠️ 電気工事の安全・資格について">
            <p>
              太陽光発電設備の電気工事は、感電・火災などの危険があり、安全・法令・資格に関わります。
              <strong>通電状態（活線）での作業は重大事故につながるおそれがあります</strong>。有資格者による作業、停電・検電の確認、技術基準・施工手順の順守、メーカー指定工具・適合する圧着ダイス/ロケーターの確認を前提に、現場・会社の安全ルールに従って作業してください。
            </p>
          </Caution>

          <h2 className="mt-12 mb-4 border-l-4 border-gray-900 pl-3 text-2xl font-bold">
            MC4コネクタ施工に必要な工具とは？
          </h2>
          <ArticleImg
            src={IMG.mc4}
            alt="MC4コネクタ施工の工程と工具のイメージ"
          />
          <h3 className="mt-8 mb-3 text-xl font-bold">ケーブルカッター｜PVケーブルをきれいに切断する</h3>
          <p className="mb-4">PVケーブルを芯線をつぶさず切断します。切断面が整うと、被覆むき・圧着の品質が安定しやすくなります。</p>
          <h3 className="mt-8 mb-3 text-xl font-bold">ストリッパー｜被覆を適切な長さでむく</h3>
          <p className="mb-4">被覆を規定の長さで、芯線を傷つけずにむきます。芯線を傷つけると、圧着不良や発熱の原因になることがあります。</p>
          <h3 className="mt-8 mb-3 text-xl font-bold">圧着プライヤー｜端子を安定して圧着する</h3>
          <p className="mb-4">安定した力で圧着できるプライヤーを使います。一般ペンチでの代用は、圧着不良につながるため避けます。</p>
          <h3 className="mt-8 mb-3 text-xl font-bold">圧着ダイス・ロケーター｜コネクタ仕様に合わせる</h3>
          <p className="mb-4">MC4コネクタの端子・ケーブルサイズに適合する圧着ダイスとロケーターを使います。適合しないと正しい圧着ができません。</p>
          <h3 className="mt-8 mb-3 text-xl font-bold">取付工具｜MC4コネクタの締付け・解除に使う</h3>
          <p className="mb-4">コネクタの締付け・解除には対応する取付工具を使います。保守点検での解除作業にも必要です。</p>

          <Caution>
            <p>
              圧着工具・圧着ダイス・ロケーターは、使用するMC4コネクタのメーカー・型式・ケーブルサイズに適合するものを選んでください。すべてのMC4コネクタに同じ工具が使えるわけではありません。圧着後は、
              <strong>メーカーの手順に従って引張確認・導通確認などの品質確認</strong>を行い、確認を省略しないようにしましょう。スペックや付属品は変わる場合があるため、各商品ページ・メーカー公式情報で最新の適合を確認してください。
            </p>
          </Caution>

          <h2 className="mt-12 mb-4 border-l-4 border-gray-900 pl-3 text-2xl font-bold">
            KNIPEX太陽光用工具セットの違い
          </h2>
          <ArticleImg
            src={IMG.comparison}
            alt="979101/979104V01/979101LEの比較イメージ"
          />
          <p className="mb-4">セット内容・付属品・対応ダイス・ロケーターは商品ページで必ずご確認ください。ここでは役割・用途の違いを整理します。</p>

          <h3 className="mt-8 mb-3 text-xl font-bold">979101｜太陽光発電用工具セット 3点</h3>
          <p className="mb-4">太陽光発電用の工具セット（3点）です。MC4施工に必要な工具を検討する際の候補になります。</p>
          <ProductGrid items={[SOLAR_SETS[0]]} />

          <h3 className="mt-8 mb-3 text-xl font-bold">979104V01｜MC4用工具セット</h3>
          <p className="mb-4">MC4用に工具を一式そろえたい施工会社向けの候補です。付属内容・対応コネクタは商品ページで確認しましょう。</p>
          <ProductGrid items={[SOLAR_SETS[1]]} />

          <h3 className="mt-8 mb-3 text-xl font-bold">979101LE｜太陽光用工具ケース</h3>
          <p className="mb-4">工具・ダイス・ロケーターの整理、現場持ち出し、施工班ごとの工具管理に向くツールケースです。ケース中心か工具付きかは商品ページで確認しましょう。</p>
          <ProductGrid items={[SOLAR_SETS[2]]} />

          <div className="my-6 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr><Th>型番</Th><Th>位置づけ</Th><Th>向いているケース</Th><Th>要確認</Th></tr>
              </thead>
              <tbody>
                <tr><Td>979101</Td><Td>太陽光発電用工具セット 3点</Td><Td>必要工具をコンパクトに検討</Td><Td>圧着ダイスの付属有無</Td></tr>
                <tr><Td>979104V01</Td><Td>MC4用工具セット</Td><Td>MC4施工を一式そろえたい</Td><Td>セット内容・対応コネクタ</Td></tr>
                <tr><Td>979101LE</Td><Td>太陽光用工具ケース</Td><Td>整理・持ち出し・施工班管理</Td><Td>ケース中心か工具付きか</Td></tr>
              </tbody>
            </table>
          </div>

          <CTA href={URLS.s979104v01}>
            MC4用に一式そろえたい施工会社向けの工具セットを確認する
          </CTA>

          <h2 className="mt-12 mb-4 border-l-4 border-gray-900 pl-3 text-2xl font-bold">
            3点セット・MC4用セット・ケース単体はどう選ぶ？
          </h2>
          <div className="my-6 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr><Th>選び方</Th><Th>向いているケース</Th><Th>商品導線</Th></tr>
              </thead>
              <tbody>
                <tr><Td>必要工具をまず検討したい</Td><Td>3点セットで工程を押さえたい</Td><Td>979101（付属ダイス要確認）</Td></tr>
                <tr><Td>MC4施工を一式そろえたい</Td><Td>施工会社・複数現場</Td><Td>979104V01</Td></tr>
                <tr><Td>整理・持ち出し・班管理をしたい</Td><Td>保守点検・現場移動が多い</Td><Td>979101LE</Td></tr>
              </tbody>
            </table>
          </div>
          <div className="my-4 flex flex-wrap gap-2">
            <ProductLink href={URLS.s979101}>979101 を見る</ProductLink>
            <ProductLink href={URLS.s979104v01}>979104V01 を見る</ProductLink>
            <ProductLink href={URLS.s979101le}>979101LE を見る</ProductLink>
          </div>

          <h2 className="mt-12 mb-4 border-l-4 border-gray-900 pl-3 text-2xl font-bold">
            太陽光施工で一緒に確認したいKNIPEX電工工具
          </h2>
          <ArticleImg
            src={IMG.electrical}
            alt="絶縁工具・電工工具のイメージ"
          />
          <h3 className="mt-8 mb-3 text-xl font-bold">電工用マルチツール｜被覆むき・切断・フェルール圧着に</h3>
          <ProductGrid items={[RELATED_ELECTRICAL[0]]} />
          <h3 className="mt-8 mb-3 text-xl font-bold">絶縁工具｜電気工事・保守点検の基本工具に</h3>
          <ProductGrid items={RELATED_ELECTRICAL.slice(1, 3)} />
          <h3 className="mt-8 mb-3 text-xl font-bold">掴む・回す・外す工具｜コブラ・ツイングリップ</h3>
          <ProductGrid items={RELATED_ELECTRICAL.slice(3, 5)} />
          <h3 className="mt-8 mb-3 text-xl font-bold">精密作業・保守点検向け工具</h3>
          <ProductGrid items={[RELATED_ELECTRICAL[5]]} />

          <div className="my-6 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr><Th>用途</Th><Th>工具</Th><Th>役割</Th></tr>
              </thead>
              <tbody>
                <tr><Td>被覆むき・切断・圧着</Td><Td>ネクストリップ 1272190</Td><Td>電工用マルチツール</Td></tr>
                <tr><Td>電気工事・保守点検</Td><Td>絶縁ペンチ 0307200／絶縁工具3点 003130BKV03</Td><Td>絶縁工具</Td></tr>
                <tr><Td>掴む・回す・外す</Td><Td>コブラ 002072V06／ツイングリップ 001961V01</Td><Td>プライヤー類</Td></tr>
                <tr><Td>精密・保守点検</Td><Td>精密スナップリング 002004SB</Td><Td>精密プライヤー</Td></tr>
              </tbody>
            </table>
          </div>

          <p className="mb-4 text-sm text-gray-600">
            電設一般のケーブル切断・圧着工具については、
            <Link href="/articles/cable-cutter-selection" className="text-gray-900 underline hover:no-underline">
              ケーブルカッターの選び方
            </Link>
            もあわせてご確認ください。本記事は太陽光MC4/PV専用、同記事は電設一般の切断・圧着を扱います。
          </p>

          <h2 className="mt-12 mb-4 border-l-4 border-gray-900 pl-3 text-2xl font-bold">
            現場持ち出し・車載に便利な工具ケース
          </h2>
          <ArticleImg
            src={IMG.toolCase}
            alt="現場持ち出し・車載用ツールケースのイメージ"
          />
          <h3 className="mt-8 mb-3 text-xl font-bold">Robust26 Move｜工具を保護しながら持ち出す</h3>
          <ProductGrid items={[TOOL_CASES[0]]} />
          <h3 className="mt-8 mb-3 text-xl font-bold">モジュラーX18｜両手を空けて移動したい保守点検向け</h3>
          <ProductGrid items={[TOOL_CASES[1]]} />
          <h3 className="mt-8 mb-3 text-xl font-bold">ビッグツインムーヴ｜工具をまとめて管理したい法人向け</h3>
          <ProductGrid items={[TOOL_CASES[2]]} />

          <CTA href={URLS.toolList}>
            太陽光施工・保守点検の工具をまとめて、工具一覧で確認する
          </CTA>

          <h2 className="mt-12 mb-4 border-l-4 border-gray-900 pl-3 text-2xl font-bold">
            太陽光発電用工具セットを法人でそろえるときのチェックリスト
          </h2>
          <ArticleImg
            src={IMG.checklist}
            alt="法人担当者が太陽光工具の備品リストを確認するイメージ"
          />
          <div className="my-6 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr><Th>チェック項目</Th><Th>確認内容</Th></tr>
              </thead>
              <tbody>
                <tr><Td>対応コネクタ</Td><Td>使用するMC4コネクタのメーカー・型式</Td></tr>
                <tr><Td>ケーブルサイズ</Td><Td>PVケーブルのsq（導体断面積）</Td></tr>
                <tr><Td>圧着ダイス</Td><Td>コネクタ・ケーブルに適合するダイスがあるか</Td></tr>
                <tr><Td>ロケーター</Td><Td>端子・コネクタに適合するか</Td></tr>
                <tr><Td>取付工具</Td><Td>締付け・解除に対応しているか</Td></tr>
                <tr><Td>切断工具</Td><Td>PVケーブルをきれいに切れるか</Td></tr>
                <tr><Td>被覆むき工具</Td><Td>ケーブルサイズに対応しているか</Td></tr>
                <tr><Td>絶縁工具</Td><Td>電気工事・保守点検の基本工具がそろっているか</Td></tr>
                <tr><Td>収納ケース</Td><Td>工具・ダイス・ロケーターを整理・持ち出しできるか</Td></tr>
                <tr><Td>安全確認</Td><Td>有資格者作業・停電/検電・施工手順・メーカー指定工具を確認したか</Td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="mt-12 mb-4 border-l-4 border-gray-900 pl-3 text-2xl font-bold">
            太陽光発電用工具セット選びでよくある失敗
          </h2>
          <div className="my-6 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr><Th>失敗</Th><Th>対策</Th></tr>
              </thead>
              <tbody>
                <tr><Td>MC4用の圧着ダイスが付属していると思い込んで購入する</Td><Td>付属品・対応ダイスを商品ページで確認</Td></tr>
                <tr><Td>コネクタメーカー・型式に合わない圧着工具を使う</Td><Td>使用コネクタに適合する工具・ダイスを選ぶ</Td></tr>
                <tr><Td>ケーブルサイズとダイスサイズを確認しない</Td><Td>sqと適合ダイスを確認</Td></tr>
                <tr><Td>被覆むきで芯線を傷つける</Td><Td>対応ストリッパーで規定長さにむく</Td></tr>
                <tr><Td>圧着後の確認・引張確認・導通確認を省略する</Td><Td>メーカー手順に沿って品質確認</Td></tr>
                <tr><Td>一般ペンチで無理に圧着しようとする</Td><Td>専用の圧着プライヤーを使う</Td></tr>
                <tr><Td>コネクタ解除工具を持っておらず保守時に困る</Td><Td>取付/解除工具を用意</Td></tr>
                <tr><Td>工具・ダイス・ロケーターを別々に管理して紛失する</Td><Td>ケースでまとめて管理</Td></tr>
                <tr><Td>絶縁工具・周辺電工工具を準備していない</Td><Td>絶縁工具・電工工具もあわせて準備</Td></tr>
                <tr><Td>無資格者や不慣れな作業者が電気工事を行う</Td><Td>有資格者による作業・施工手順を順守</Td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="mt-12 mb-4 border-l-4 border-gray-900 pl-3 text-2xl font-bold">
            よくある質問
          </h2>
          <div className="space-y-6">
            {FAQ_ITEMS.map((item) => (
              <div key={item.q}>
                <h3 className="mb-2 text-lg font-bold">Q. {item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </div>

          <h2 className="mt-12 mb-4 border-l-4 border-gray-900 pl-3 text-2xl font-bold">
            KNIPEX工具・手作業工具をまとめて確認
          </h2>
          <p className="mb-4">
            太陽光発電用工具セットは、「使用するMC4コネクタ」「PVケーブルサイズ」「適合する圧着ダイス・ロケーター」「切断・被覆むき・圧着・組立/解除の工程」「絶縁工具・収納ケース」から選ぶのがポイントです。KNIPEXの太陽光用工具セット・電工工具・絶縁工具・ツールケースを見比べたい場合は、KNIPEX一覧・工具一覧もあわせてご確認ください。電気工事は安全・法令・資格に関わるため、有資格者による作業・停電/検電・施工手順・メーカー指定工具の確認を前提に進めましょう。
          </p>
          <FinalCTA href={URLS.knipexList}>
            KNIPEX一覧はこちら（太陽光用工具セット・電工工具・絶縁工具・ケース）
          </FinalCTA>
          <FinalCTA href={URLS.toolList}>
            工具一覧はこちら（手作業工具をまとめて確認）
          </FinalCTA>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
