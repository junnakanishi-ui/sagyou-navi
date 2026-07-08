import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";

const SLUG = "cable-cutter-selection";
const SITE_URL = "https://sagyou-navi.com";
const ARTICLE_IMG = "/images/articles";

const IMG = {
  hero: `${ARTICLE_IMG}/electrical-cable-cutter-tools-hero.jpg`,
  types: `${ARTICLE_IMG}/cable-cutter-types-comparison.jpg`,
  thick: `${ARTICLE_IMG}/thick-cable-cutting-electrical-work.jpg`,
  raceway: `${ARTICLE_IMG}/raceway-cutter-cable-support-work.jpg`,
  crimping: `${ARTICLE_IMG}/electrical-crimping-tool-terminal-work.jpg`,
  checklist: `${ARTICLE_IMG}/electrical-tools-procurement-checklist.jpg`,
};

export const metadata: Metadata = {
  title:
    "ケーブルカッターの選び方｜充電式・油圧式・ラチェット式と圧着工具の使い分け｜作業用品ナビ",
  description:
    "ケーブルカッターの選び方を、充電式・油圧式・AC100Vコード式・ラチェット式の違いから解説。CV線・CVT線・IV線などの切断能力、レースウェイカッター、ケーブルラックカッター、圧着工具の使い分け、法人購買時のチェックリストまで紹介します。",
  alternates: { canonical: `${SITE_URL}/articles/${SLUG}` },
  openGraph: {
    title:
      "ケーブルカッターの選び方｜充電式・油圧式・ラチェット式と圧着工具の使い分け",
    description:
      "ケーブルカッターの選び方を、充電式・油圧式・AC100Vコード式・ラチェット式の違いから解説。CV線・CVT線・IV線などの切断能力、レースウェイカッター、ケーブルラックカッター、圧着工具の使い分け、法人購買時のチェックリストまで紹介します。",
    type: "article",
    images: [IMG.hero],
  },
};

/* =========================================================
   URL ヘルパー（buildUrl は両サイト共通。UTM は # の前に付与）
   ========================================================= */
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
  ez45a6: R("ta041267-ez45a6kb/"),
  ez45a7: R("ta036145-ez45a7xb/"),
  hpc85brla: R("ta041399-hpc85brla/"),
  hpc65brla: R("ta041397-hpc65brla/"),
  s7k50y: R("ta039112-s7k50y/"),
  hpc85b: R("ta041398-hpc85b/"),
  hpc65b: R("ta041396-hpc65b/"),
  m18_75: R("ta041518-m18hcc75r0cjp/"),
  m18_44: R("ta041517-m18hcc450cjp/"),
  es32l: R("ta036054-es32l/"),
  esg25l: R("ta036090-esg25l/"),
  knipex9532100: R("ta034023-9532100/"),
  evrp40d30: R("ta036132-evrp40d30/"),
  evr2dd: R("ta041264-evr2dd/"),
  rac100: R("ta041638-rac100/"),
  ridgid74685: R("ta040971-74685/"),
  ev250hi: R("ta041261-ev250hi/"),
  ev250dl: R("ta041259-ev250dl/"),
  ez46a4: R("ta041268-ez46a4kb/"),
  ev325hi: R("ta041263-ev325hi/"),
  ev325dl: R("ta041262-ev325dl/"),
  knipex002120: R("ta040487-002120/"),
  list: R("c/0000000185/"),
};

const productImage = (id: string) => `/products/${id}.jpg`;

type Prod = {
  id: string;
  imgId?: string;
  name: string;
  use: string;
  url: string;
};

const CORDLESS_CUTTERS: Prod[] = [
  {
    id: "ta041267-ez45a6kb",
    name: "Panasonic 充電ケーブルカッター EZ45A6KB",
    use: "口径φ56クラス。CV線3心200mm²・CVT200mm²・VVR3心150mm²クラスの切断能力（メーカー公表値・要確認）",
    url: URLS.ez45a6,
  },
  {
    id: "ta036145-ez45a7xb",
    name: "Panasonic デュアル 充電ケーブルカッター EZ45A7XB",
    use: "CV250mm²・CVT60mm²・IV325mm²・VVR3心38mm²クラス（メーカー公表値・要確認）",
    url: URLS.ez45a7,
  },
  {
    id: "ta041399-hpc85brla",
    name: "DAIA ケーブルカッター 充電式18V HPC85BRLA",
    use: "18V充電式。6kV-CV1000mm²単芯・φ56クラス（メーカー公表値・要確認）",
    url: URLS.hpc85brla,
  },
  {
    id: "ta041397-hpc65brla",
    name: "DAIA ケーブルカッター 充電式18V HPC65BRLA",
    use: "6kV-CV500mm²単芯・φ53クラス（メーカー公表値・要確認）",
    url: URLS.hpc65brla,
  },
  {
    id: "ta039112-s7k50y",
    name: "泉 充電式ケーブルカッター S7K50Y",
    use: "充電式ケーブルカッター。対応線種・切断能力はメーカー仕様を確認",
    url: URLS.s7k50y,
  },
];

const AC100V_CUTTERS: Prod[] = [
  {
    id: "ta041398-hpc85b",
    name: "DAIA ケーブルカッター AC100Vコード式 HPC85B",
    use: "AC100Vコード式。対応線種・切断能力はメーカー仕様を確認",
    url: URLS.hpc85b,
  },
  {
    id: "ta041396-hpc65b",
    name: "DAIA ケーブルカッター AC100Vコード式 HPC65B",
    use: "AC100Vコード式。対応線種・切断能力はメーカー仕様を確認",
    url: URLS.hpc65b,
  },
];

const HYDRAULIC_CUTTERS: Prod[] = [
  {
    id: "ta041518-m18hcc75r0cjp",
    name: "Milwaukee M18 75mm ワイヤレス油圧カッター M18HCC75R0CJP",
    use: "最大φ75mmの銅・アルミケーブル切断、ワイヤレスリモート操作（メーカー公表値・要確認）",
    url: URLS.m18_75,
  },
  {
    id: "ta041517-m18hcc450cjp",
    name: "Milwaukee M18 44mm 油圧カッター M18HCC450CJP",
    use: "ACSR/ACSSケーブルφ44mmまで（メーカー公表値・要確認）",
    url: URLS.m18_44,
  },
  {
    id: "ta036054-es32l",
    name: "Klauke 充電式油圧ケーブルカッター ES32L",
    use: "充電式油圧ケーブルカッター。切断能力・対応線種はメーカー仕様を確認",
    url: URLS.es32l,
  },
  {
    id: "ta036090-esg25l",
    name: "Klauke 充電式油圧カッター ESG25L",
    use: "最大φ25mm、銅・アルミ・ACSR・鉄線対応、約2.1kg、マキタ製18V使用（メーカー公表値・要確認）",
    url: URLS.esg25l,
  },
];

const RATCHET_CUTTERS: Prod[] = [
  {
    id: "ta034023-9532100",
    name: "KNIPEX ラチェット式ケーブルカッター 9532100",
    use: "650〜860mmの伸縮ハンドル・ラチェット構造。銅・アルミケーブル向け（スチールワイヤー・ワイヤーロープは切断不可。対応材質・sqはメーカー仕様を確認）",
    url: URLS.knipex9532100,
  },
];

const RACEWAY_TOOLS: Prod[] = [
  {
    id: "ta036132-evrp40d30",
    name: "CACTUS レースウェイカッターD30 EVRP40D30",
    use: "ダイス交換式。標準仕様としてD30ダイス＋パンチャーP11付き（メーカー公表値・要確認）",
    url: URLS.evrp40d30,
  },
  {
    id: "ta041264-evr2dd",
    name: "CACTUS レースウェイカッター ダブルダイス付 EVR2DD",
    use: "複数サイズを扱う現場向けのダブルダイス付き。対応サイズはメーカー仕様を確認",
    url: URLS.evr2dd,
  },
];

const RACK_TOOLS: Prod[] = [
  {
    id: "ta041638-rac100",
    name: "CACTUS ケーブルラックカッター RAC100",
    use: "ケーブルラック切断用の専用カッター。対応サイズ・本体工具との適合はメーカー仕様を確認",
    url: URLS.rac100,
  },
];

const PIPE_TOOLS: Prod[] = [
  {
    id: "ta040971-74685",
    name: "RIDGID 4枚刃ヒンジドパイプカッター 鋳鉄管用 466-CI（74685）",
    use: "2〜12インチの鋼管・厚肉鋼管・鋳鉄管用。4枚刃で360度回転が不要とされる管材用工具（ケーブル用ではありません／メーカー公表値・要確認）",
    url: URLS.ridgid74685,
  },
];

const CRIMPING_250: Prod[] = [
  {
    id: "ta041261-ev250hi",
    name: "CACTUS 電動油圧式圧着工具 EV250HI",
    use: "AC100V電動油圧式。圧着範囲14〜250mm²（メーカー公表値・要確認）",
    url: URLS.ev250hi,
  },
  {
    id: "ta041259-ev250dl",
    name: "CACTUS コードレス電動油圧式圧着工具 EV250DL",
    use: "18V/14.4V兼用コードレス。圧着範囲14〜250mm²（メーカー公表値・要確認）",
    url: URLS.ev250dl,
  },
  {
    id: "ta041268-ez46a4kb",
    name: "Panasonic 充電圧着器 EZ46A4KB",
    use: "14.4V/18V両用デュアル。CV線250mm²まで圧着（メーカー公表値・要確認）",
    url: URLS.ez46a4,
  },
];

const CRIMPING_325: Prod[] = [
  {
    id: "ta041263-ev325hi",
    name: "CACTUS 電動油圧式圧着工具 EV325HI",
    use: "AC100V電動油圧式。圧着範囲150〜325mm²（メーカー公表値・要確認）",
    url: URLS.ev325hi,
  },
  {
    id: "ta041262-ev325dl",
    name: "CACTUS コードレス電動油圧式圧着工具 EV325DL",
    use: "コードレス電動油圧式。圧着範囲150〜325mm²（メーカー公表値・要確認）",
    url: URLS.ev325dl,
  },
];

const TOOL_SETS: Prod[] = [
  {
    id: "ta040487-002120",
    name: "KNIPEX ツールケース 20点セット 002120",
    use: "電設工具の持ち出しに使えるツールケースセット。セット内容はメーカー仕様を確認",
    url: URLS.knipex002120,
  },
];

const FAQ_ITEMS = [
  {
    q: "ケーブルカッターは何を基準に選べばいいですか？",
    a: "切断する線種、導体断面積、外径、材質、作業場所、電源方式で選びます。特にCV線・CVT線・IV線などは工具ごとに対応能力が異なるため、sqとφの両方を確認することが重要です。",
  },
  {
    q: "充電式ケーブルカッターとAC100Vコード式はどちらが良いですか？",
    a: "現場移動が多い場合は充電式が便利です。加工場や電源を確保できる場所で連続作業する場合は、AC100Vコード式も候補になります。法人導入ではバッテリー管理や充電環境もあわせて確認しましょう。",
  },
  {
    q: "油圧式ケーブルカッターはどんな現場に向いていますか？",
    a: "太いケーブルや大径の電力線を切断する現場に向いています。切断能力、出力、重量、作業姿勢、対応線種を確認して選定します。",
  },
  {
    q: "ラチェット式ケーブルカッターは電動式の代わりになりますか？",
    a: "軽作業や持ち出し用として便利ですが、作業量が多い現場や太径ケーブルの連続切断では、電動式・油圧式のほうが作業負担を抑えやすい場合があります。対応材質にも制限があるため確認しましょう。",
  },
  {
    q: "レースウェイはケーブルカッターで切れますか？",
    a: "レースウェイやダクターは、ケーブルカッターではなく専用のレースウェイカッターを使うのが基本です。バリを抑えた切断や穴あけに対応する専用工具を確認しましょう。",
  },
  {
    q: "ケーブルラックを切る工具は何を選べばよいですか？",
    a: "ケーブルラックには専用のケーブルラックカッターを検討します。切断対象のサイズや材質、使用する本体工具との適合を確認してください。",
  },
  {
    q: "ケーブルカッターと圧着工具はセットで考えるべきですか？",
    a: "電設工事では切断後に端末処理や圧着作業が発生することがあります。切断工具だけでなく、圧着工具・ダイス・端子サイズまであわせて確認すると、現場の工具構成を整理しやすくなります。",
  },
  {
    q: "圧着工具の250クラスと325クラスはどう選びますか？",
    a: "主に扱う端子・ケーブルサイズで選びます。14〜250mm²中心なら250クラス、150〜325mm²の大型サイズを扱う場合は325クラスを検討します。必ず対応ダイスと端子仕様を確認してください。",
  },
  {
    q: "活線をケーブルカッターで切断してもよいですか？",
    a: "通電状態での切断は重大事故につながるおそれがあります。停電、検電、作業手順、有資格者による確認など、現場の安全基準に従って作業してください。",
  },
  {
    q: "法人で工具をそろえる場合、何を一緒に確認すべきですか？",
    a: "本体だけでなく、替刃、ダイス、バッテリー、充電器、収納ケース、持ち出し工具セット、保管場所、点検周期、修理対応を確認すると運用しやすくなります。",
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
      rel="noopener noreferrer"
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
      rel="noopener noreferrer"
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
      rel="noopener noreferrer"
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
          <span className="text-gray-700">ケーブルカッターの選び方</span>
        </nav>

        <span className="mb-3 inline-block rounded bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-800">
          選び方ガイド
        </span>

        <article className="leading-relaxed text-gray-900">
          <h1 className="mb-6 text-3xl font-bold leading-snug">
            ケーブルカッターの選び方｜充電式・油圧式・ラチェット式と圧着工具の使い分け
          </h1>

          <p className="mb-6 text-sm text-gray-500">公開日：2026年7月8日／約15分で読めます</p>

          <ArticleImg
            src={IMG.hero}
            alt="電設工事用のケーブルカッターや圧着工具を選ぶイメージ"
          />

          <section className="my-6 rounded-md border border-gray-300 bg-gray-50 p-5">
            <p className="mb-3 font-bold">この記事の要点（先に結論）</p>
            <p className="mb-3">
              ケーブルカッターは、<strong>切断する線種・ケーブル外径・作業場所・電源方式</strong>で選ぶのが基本です。
            </p>
            <ul className="mb-3 list-disc space-y-1 pl-6">
              <li>CV線・CVT線など太いケーブルを頻繁に切るなら、充電式や油圧式が候補になります。</li>
              <li>電源を確保できる作業場では、AC100Vコード式も検討できます。</li>
              <li>持ち運びや非常用を重視するなら、ラチェット式も選択肢になります。</li>
              <li>レースウェイ・ダクター・ケーブルラックを加工する場合は、専用カッターを確認しましょう。</li>
              <li>切断後の端末処理まで考えるなら、圧着工具もあわせて選ぶと工具構成を整理しやすくなります。</li>
            </ul>
            <p>
              購入前には、対応線種、最大切断能力、切断径、sq表記、電源方式、重量、作業姿勢、交換刃・ダイスの有無を確認しましょう。電気工事は感電・火災の危険があるため、有資格者による作業・停電・検電・社内手順・使用工具の適合確認が前提です。
            </p>
          </section>

          <CTA href={URLS.list}>
            電設工事・設備工事用の切断工具・圧着工具・工具セットを、手作業工具一覧で確認する
          </CTA>

          <h2 className="mt-12 mb-4 border-l-4 border-gray-900 pl-3 text-2xl font-bold">
            ケーブルカッターは「切るもの」と「現場条件」で選ぶ
          </h2>
          <h3 className="mt-8 mb-3 text-xl font-bold">CV線・CVT線・IV線など、まず線種を確認する</h3>
          <p className="mb-4">工具ごとに対応できる線種が異なります。CV線・CVT線・IV線・VVR線など、実際に切る線種を先に確認しましょう。</p>
          <h3 className="mt-8 mb-3 text-xl font-bold">sqとφの両方で切断能力を見る</h3>
          <p className="mb-4">sq（導体断面積）だけでなく、φ（口径・外径）も確認します。sqが合っても外径が大きく工具の口に入らない場合があります。</p>
          <h3 className="mt-8 mb-3 text-xl font-bold">太いケーブルには油圧式・電動式が使いやすい</h3>
          <p className="mb-4">大径ケーブルや電力線の切断は、手動よりも充電式・油圧式のほうが作業負担を抑えやすい場合があります。</p>
          <h3 className="mt-8 mb-3 text-xl font-bold">レースウェイやケーブルラックは専用工具を選ぶ</h3>
          <p className="mb-4">レースウェイ・ダクター・ケーブルラックは、ケーブルカッターで無理に切らず、対象部材に合う専用カッターを使うのが基本です。</p>
          <h3 className="mt-8 mb-3 text-xl font-bold">切断後の圧着作業まで考えて工具をそろえる</h3>
          <p className="mb-4">電設工事では切断後に端末処理・圧着作業が発生することがあります。切断工具と圧着工具をあわせて検討すると、現場の工具構成を整理しやすくなります。</p>

          <Caution title="⚠️ 電気工事の安全について">
            <p>
              電気工事は感電・火災などの危険があり、欠陥による災害を防ぐために電気工事士資格が定められています。
              <strong>通電状態（活線）のケーブルを切断することは重大事故につながるおそれがあります</strong>。停電・検電、有資格者による作業、社内の作業手順、使用する工具が対象・用途に適合しているかの確認を必ず行い、現場・会社の安全基準に従って作業してください。
            </p>
          </Caution>

          <h2 className="mt-12 mb-4 border-l-4 border-gray-900 pl-3 text-2xl font-bold">
            ケーブルカッターの種類と違い
          </h2>
          <ArticleImg
            src={IMG.types}
            alt="充電式・油圧式・ラチェット式ケーブルカッターの比較イメージ"
          />
          <p className="mb-4">数値はメーカー公表値です。型番の末尾（KB・XB など）でキット内容・付属電池・仕様が異なる場合があるため、最終的な能力は各商品ページでご確認ください。</p>

          <h3 className="mt-8 mb-3 text-xl font-bold">充電式ケーブルカッター｜現場移動が多い電設工事向け</h3>
          <ProductGrid items={CORDLESS_CUTTERS} />

          <h3 className="mt-8 mb-3 text-xl font-bold">AC100Vコード式ケーブルカッター｜電源が取れる作業場・加工場向け</h3>
          <ProductGrid items={AC100V_CUTTERS} />

          <h3 className="mt-8 mb-3 text-xl font-bold">ワイヤレス・油圧式ケーブルカッター｜大径ケーブル・電力系作業向け</h3>
          <ProductGrid items={HYDRAULIC_CUTTERS} />

          <h3 className="mt-8 mb-3 text-xl font-bold">ラチェット式ケーブルカッター｜手動で使える持ち出し工具</h3>
          <ProductGrid items={RATCHET_CUTTERS} />

          <div className="my-6 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <Th>タイプ</Th>
                  <Th>特徴</Th>
                  <Th>向いている現場</Th>
                  <Th>確認ポイント</Th>
                </tr>
              </thead>
              <tbody>
                <tr><Td>充電式</Td><Td>電源不要で取り回しやすい</Td><Td>現場移動が多い電設工事</Td><Td>バッテリー電圧・切断能力・重量</Td></tr>
                <tr><Td>AC100Vコード式</Td><Td>連続作業に向く</Td><Td>加工場・電源が取れる固定作業</Td><Td>電源環境・コード取り回し</Td></tr>
                <tr><Td>ワイヤレス・油圧式</Td><Td>大径ケーブルに強い</Td><Td>大径ケーブル・電力系作業</Td><Td>切断能力φ・対応線種・重量</Td></tr>
                <tr><Td>ラチェット式（手動）</Td><Td>電源不要・持ち出しやすい</Td><Td>軽作業・持ち出し・非常用</Td><Td>対応材質・作業量・sq</Td></tr>
              </tbody>
            </table>
          </div>

          <CTA href={URLS.hpc85brla}>
            太いケーブルの切断は、対応線種と切断能力を確認して選ぶ（充電式・油圧式カッター）
          </CTA>

          <h2 className="mt-12 mb-4 border-l-4 border-gray-900 pl-3 text-2xl font-bold">
            切断能力の見方｜sq・φ・線種を間違えない
          </h2>
          <h3 className="mt-8 mb-3 text-xl font-bold">sqは導体断面積、φは外径・口径の確認に使う</h3>
          <p className="mb-4">sqは導体の断面積、φは口径・外径の目安です。両方を確認しないと、断面積は合っても外径が大きく工具に入らないことがあります。</p>
          <h3 className="mt-8 mb-3 text-xl font-bold">CV線・CVT線・IV線・VVR線で対応能力が変わる</h3>
          <p className="mb-4">同じ工具でも線種によって対応できる最大サイズが変わります。切る線種ごとの能力を確認しましょう。</p>
          <h3 className="mt-8 mb-3 text-xl font-bold">銅・アルミ以外の材質は対応可否を必ず確認する</h3>
          <p className="mb-4">銅・アルミ専用の工具で鋼線などを切ろうとすると、工具の破損や事故につながるおそれがあります。対応材質を必ず確認してください。</p>
          <h3 className="mt-8 mb-3 text-xl font-bold">ACSR・鋼線・メッセンジャーワイヤーは専用対応を確認する</h3>
          <p className="mb-4">ACSRや鋼線、メッセンジャーワイヤーなどは、対応をうたった工具でのみ切断します。ラチェット式などでは切断不可の材質が明記されている場合があります。</p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr><Th>確認項目</Th><Th>見るポイント</Th><Th>失敗例</Th></tr>
              </thead>
              <tbody>
                <tr><Td>線種</Td><Td>CV、CVT、IV、VVR、ACSRなど</Td><Td>CV線は切れるがACSRは切れない工具を選ぶ</Td></tr>
                <tr><Td>sq</Td><Td>導体断面積</Td><Td>250sqまでの工具で325sqを切ろうとする</Td></tr>
                <tr><Td>φ</Td><Td>口径・外径</Td><Td>sqは合うが外径が大きく入らない</Td></tr>
                <tr><Td>材質</Td><Td>銅、アルミ、鋼線など</Td><Td>銅・アルミ専用で鋼線を切ろうとする</Td></tr>
                <tr><Td>活線可否</Td><Td>通電状態での切断は避ける</Td><Td>停電・検電せず作業する</Td></tr>
                <tr><Td>替刃</Td><Td>交換刃・メンテナンス性</Td><Td>刃が摩耗しても交換体制がない</Td></tr>
              </tbody>
            </table>
          </div>

          <Caution>
            <p>
              スペック（切断能力・対応線種・重量など）や価格は変わる場合があります。導入前に各商品ページとメーカー公式情報で最新の仕様・対応材質・使用条件を確認してください。対象・材質に適合しない工具を無理に使うと、
              <strong>工具の破損や事故につながるおそれ</strong>があります。
            </p>
          </Caution>

          <h2 className="mt-12 mb-4 border-l-4 border-gray-900 pl-3 text-2xl font-bold">
            用途別に見るケーブルカッターの選び方
          </h2>
          <ArticleImg
            src={IMG.thick}
            alt="太い電力ケーブルを専用カッターで切断するイメージ"
          />
          <div className="my-6 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr><Th>用途</Th><Th>向いているタイプ</Th><Th>おすすめ商品</Th><Th>導線</Th></tr>
              </thead>
              <tbody>
                <tr>
                  <Td>一般的な電気工事・設備工事</Td><Td>充電式（扱いやすい）</Td>
                  <Td>Panasonic EZ45A6KB／EZ45A7XB、泉 S7K50Y</Td>
                  <Td><ProductLink href={URLS.ez45a6}>EZ45A6KB</ProductLink></Td>
                </tr>
                <tr>
                  <Td>大径ケーブル・電力線</Td><Td>高出力・油圧式</Td>
                  <Td>DAIA HPC85BRLA／HPC65BRLA、Milwaukee M18HCC75R0CJP／M18HCC450CJP</Td>
                  <Td><ProductLink href={URLS.m18_75}>M18 75mm</ProductLink></Td>
                </tr>
                <tr>
                  <Td>作業場・加工場（電源あり）</Td><Td>AC100Vコード式</Td>
                  <Td>DAIA HPC85B／HPC65B</Td>
                  <Td><ProductLink href={URLS.hpc85b}>HPC85B</ProductLink></Td>
                </tr>
                <tr>
                  <Td>狭所・高所・持ち出し</Td><Td>軽量・手動</Td>
                  <Td>Klauke ESG25L、KNIPEX 9532100</Td>
                  <Td><ProductLink href={URLS.esg25l}>ESG25L</ProductLink></Td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mb-4">
            狭所・高所・持ち出し作業では軽量・コンパクトな工具が扱いやすい場合があります。Klauke ESG25Lは最大φ25mm・約2.1kgで、銅・アルミ・ACSR・鉄線に対応するとされています（メーカー公表値・要確認）。KNIPEX 9532100は手動のラチェット式ですが、スチールワイヤー・ワイヤーロープは切断できないため、対応材質の確認が必要です。
          </p>

          <h2 className="mt-12 mb-4 border-l-4 border-gray-900 pl-3 text-2xl font-bold">
            レースウェイ・ダクター・ケーブルラックを切る工具
          </h2>
          <ArticleImg
            src={IMG.raceway}
            alt="レースウェイを専用カッターで加工するイメージ"
          />
          <h3 className="mt-8 mb-3 text-xl font-bold">レースウェイは専用カッターでバリを抑えて切断する</h3>
          <p className="mb-4">レースウェイやダクターは、バリを抑えた切断や穴あけに対応する専用カッターを使うのが基本です。</p>
          <ProductGrid items={RACEWAY_TOOLS} />
          <h3 className="mt-8 mb-3 text-xl font-bold">ダブルダイス付きは複数サイズを扱う現場に便利</h3>
          <p className="mb-4">複数サイズのレースウェイ・ダクターを扱う現場では、ダブルダイス付きが段取りを減らせる場合があります。</p>
          <h3 className="mt-8 mb-3 text-xl font-bold">ケーブルラックには専用カッターを検討する</h3>
          <ProductGrid items={RACK_TOOLS} />
          <h3 className="mt-8 mb-3 text-xl font-bold">パイプ・鋳鉄管はケーブルカッターではなく専用管カッターへ</h3>
          <p className="mb-4">管材はケーブルカッターでは切断しません。鋼管・鋳鉄管には専用の管カッターを使います。</p>
          <ProductGrid items={PIPE_TOOLS} />

          <Caution>
            <p>
              レースウェイ・ダクター・ケーブルラック・管材は、それぞれ対象に合う専用工具で加工します。ケーブルカッターで無理に切ったり、管カッターをケーブルに使ったりといった
              <strong>用途外の使用は、けがや工具破損の原因</strong>になります。対象部材・サイズ・本体工具との適合をメーカー仕様で確認してください。
            </p>
          </Caution>

          <h2 className="mt-12 mb-4 border-l-4 border-gray-900 pl-3 text-2xl font-bold">
            切断後に必要になる圧着工具の選び方
          </h2>
          <ArticleImg
            src={IMG.crimping}
            alt="圧着工具で電線端末を処理するイメージ"
          />
          <h3 className="mt-8 mb-3 text-xl font-bold">圧着工具は端子サイズ・sq・ダイスで選ぶ</h3>
          <p className="mb-4">扱う端子・ケーブルサイズと、対応する圧着範囲・ダイスで選びます。</p>
          <h3 className="mt-8 mb-3 text-xl font-bold">14〜250mm²なら250クラスを確認する</h3>
          <ProductGrid items={CRIMPING_250} />
          <h3 className="mt-8 mb-3 text-xl font-bold">150〜325mm²なら325クラスを確認する</h3>
          <ProductGrid items={CRIMPING_325} />
          <h3 className="mt-8 mb-3 text-xl font-bold">コードレス式とAC100V式は現場条件で選ぶ</h3>
          <div className="my-6 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr><Th>タイプ</Th><Th>向いている現場</Th><Th>確認ポイント</Th></tr>
              </thead>
              <tbody>
                <tr><Td>コードレス式</Td><Td>現場移動が多い、電源確保が難しい</Td><Td>バッテリー電圧、作業回数、充電器</Td></tr>
                <tr><Td>AC100V式</Td><Td>加工場、電源が取れる固定作業</Td><Td>電源環境、コード取り回し</Td></tr>
                <tr><Td>250クラス</Td><Td>14〜250mm²中心</Td><Td>対応ダイス、端子サイズ</Td></tr>
                <tr><Td>325クラス</Td><Td>150〜325mm²中心</Td><Td>重量、ヘッド角度、作業姿勢</Td></tr>
              </tbody>
            </table>
          </div>

          <CTA href={URLS.ev250dl}>
            切断後の端末処理には、圧着範囲・ダイスに合う圧着工具（250/325クラス）を確認する
          </CTA>

          <h2 className="mt-12 mb-4 border-l-4 border-gray-900 pl-3 text-2xl font-bold">
            電設工事の工具を法人でそろえるときの備品リスト
          </h2>
          <ArticleImg
            src={IMG.checklist}
            alt="法人担当者が電設工具の備品リストを確認するイメージ"
          />
          <h3 className="mt-8 mb-3 text-xl font-bold">切断工具</h3>
          <p className="mb-4">現場で切る線種・サイズに合わせて、充電式・AC100V・油圧式・手動式を組み合わせます。</p>
          <h3 className="mt-8 mb-3 text-xl font-bold">圧着工具</h3>
          <p className="mb-4">扱う端子サイズに合わせて250クラス・325クラス、電源方式を選びます。</p>
          <h3 className="mt-8 mb-3 text-xl font-bold">配線支持材加工工具</h3>
          <p className="mb-4">レースウェイ・ダクター・ケーブルラック用の専用カッターを用意します。</p>
          <h3 className="mt-8 mb-3 text-xl font-bold">工具ケース・持ち出しセット</h3>
          <p className="mb-4">持ち出し作業では、工具ケースやセット品があると管理しやすくなります。</p>
          <ProductGrid items={TOOL_SETS} />
          <h3 className="mt-8 mb-3 text-xl font-bold">替刃・ダイス・バッテリー・充電器</h3>
          <p className="mb-4">本体だけでなく、替刃・ダイス・バッテリー・充電器などの消耗品・付属品も、運用に合わせて確認します。</p>

          <CTA href={URLS.list}>
            電設工事・設備工事向けの工具をまとめて、手作業工具一覧で確認する
          </CTA>

          <h2 className="mt-12 mb-4 border-l-4 border-gray-900 pl-3 text-2xl font-bold">
            ケーブルカッター・圧着工具選びでよくある失敗
          </h2>
          <div className="my-6 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr><Th>失敗</Th><Th>対策</Th></tr>
              </thead>
              <tbody>
                <tr><Td>切断能力をsqだけで判断してしまう</Td><Td>sqとφ（外径）の両方を確認</Td></tr>
                <tr><Td>外径が大きく工具の口に入らない</Td><Td>φ・口径を事前に確認</Td></tr>
                <tr><Td>銅・アルミ専用工具で鋼線やACSRを切ろうとする</Td><Td>対応材質を必ず確認</Td></tr>
                <tr><Td>レースウェイをケーブルカッターで無理に切る</Td><Td>専用カッターを使う</Td></tr>
                <tr><Td>圧着範囲とダイスを確認していない</Td><Td>圧着範囲・対応ダイス・端子を確認</Td></tr>
                <tr><Td>バッテリー・充電器・替刃の有無を見落とす</Td><Td>付属品・消耗品まで確認</Td></tr>
                <tr><Td>活線や不明な線を切ろうとする</Td><Td>停電・検電・有資格者作業・社内手順を確認</Td></tr>
                <tr><Td>重量や作業姿勢を考えず大型工具を選ぶ</Td><Td>作業場所・姿勢に合う重量を選ぶ</Td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="mt-12 mb-4 border-l-4 border-gray-900 pl-3 text-2xl font-bold">
            購入前チェックリスト
          </h2>
          <div className="my-6 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr><Th>チェック項目</Th><Th>確認内容</Th></tr>
              </thead>
              <tbody>
                <tr><Td>切る対象</Td><Td>ケーブル、レースウェイ、ラック、管材のどれか</Td></tr>
                <tr><Td>線種</Td><Td>CV、CVT、IV、VVR、ACSR、鋼線など</Td></tr>
                <tr><Td>サイズ</Td><Td>sqとφの両方を確認したか</Td></tr>
                <tr><Td>材質</Td><Td>銅、アルミ、鋼線、鋳鉄管など</Td></tr>
                <tr><Td>電源方式</Td><Td>充電式、AC100V、手動式</Td></tr>
                <tr><Td>作業場所</Td><Td>高所、狭所、屋外、加工場、電源有無</Td></tr>
                <tr><Td>重量</Td><Td>片手作業・持ち運びに無理がないか</Td></tr>
                <tr><Td>圧着作業</Td><Td>切断後に圧着工具も必要か</Td></tr>
                <tr><Td>付属品</Td><Td>バッテリー、充電器、ケース、ダイス、替刃</Td></tr>
                <tr><Td>安全確認</Td><Td>停電・検電・有資格者作業・社内手順を確認したか</Td></tr>
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
            ケーブルカッター・圧着工具を探すなら手作業工具一覧も確認
          </h2>
          <p className="mb-4">
            ケーブルカッターは「切る対象」「線種・sq・φ」「材質」「電源方式」「作業場所」から絞り込み、切断後の圧着や配線支持材の加工まで含めて工具構成を整理するのが失敗しないコツです。電気工事は安全に関わるため、有資格者による作業・停電・検電・社内手順・工具の適合確認を前提に進めましょう。切断工具・圧着工具・専用カッター・工具セットを見比べたい場合は、手作業工具一覧もあわせてご確認ください。
          </p>
          <FinalCTA href={URLS.list}>
            ケーブルカッター・圧着工具・レースウェイカッター・工具セットをまとめて、トラスコ中山・手作業工具一覧で確認する
          </FinalCTA>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
