import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";

export const metadata: Metadata = {
  title: "パイプ溶接の回転治具の選び方｜ウェルドローラーとポジショナーの違い",
  description:
    "パイプの円周溶接で使う回転治具を、ウェルドローラー・ポジショナー・ターニングロールに分けて解説。管径・重量・周速・アース・長尺支持の確認手順と、育良ISK-WR125Eが向く現場、誤発注を防ぐチェック項目を紹介します。",
  alternates: {
    canonical:
      "https://sagyou-navi.com/articles/pipe-welding-rotator-weld-roller-selection",
  },
  openGraph: {
    type: "article",
    title: "パイプ溶接の回転治具の選び方｜ウェルドローラーとポジショナーの違い",
    description:
      "管径・総重量・長さ・重心・周速・アースから、パイプ溶接用の回転治具を選ぶ方法を解説します。",
    url: "https://sagyou-navi.com/articles/pipe-welding-rotator-weld-roller-selection",
    images: [
      {
        url: "/images/pipe-welding-rotator-weld-roller-selection/pipe-welding-rotator-selection-hero.jpg",
        width: 1600,
        height: 900,
        alt: "パイプ溶接用のウェルドローラーで円周溶接を行う日本の鉄工所",
      },
    ],
  },
};

const UTM = "utm_source=sagyou_navi";
function buildUrl(url: string, utm: string): string {
  if (!url) return url;
  const hashIndex = url.indexOf("#");
  const append = (base: string) =>
    `${base}${base.includes("?") ? "&" : "?"}${utm}`;
  if (hashIndex === -1) return append(url);
  return `${append(url.slice(0, hashIndex))}${url.slice(hashIndex)}`;
}

const R = (slug: string) =>
  buildUrl(`https://item.rakuten.co.jp/crecote-shop/${slug}`, UTM);
const IMG_BASE = "/products/";
const IMG = (file: string) => `${IMG_BASE}${file}`;
const HERO_BASE = "/images/pipe-welding-rotator-weld-roller-selection/";
const HERO = (file: string) => `${HERO_BASE}${file}`;

const PAGE_URL =
  "https://sagyou-navi.com/articles/pipe-welding-rotator-weld-roller-selection";
const HOME_URL = "https://sagyou-navi.com/";

const product = {
  name: "育良精機 ウェルドローラー ISK-WR125E（40510）",
  short: "育良 ウェルドローラー ISK-WR125E",
  code: "ISK-WR125E",
  image: "ta041464-iskwr125e.jpg",
  url: R("ta041464-iskwr125e/"),
  badge: "20A～125A／最大50kgf",
  use: "小～中径の直管をAC100Vで回転させ、円周溶接時の持ち替えや姿勢変化を減らしたい現場",
  solves:
    "パイプを一定条件で回しやすくし、作業姿勢、段取り、アースケーブルの取り回しを改善する候補です。",
  check:
    "管の実外径、継手等を含む総重量、長さ・重心、支持具、溶接条件とウェルドアース定格、電源、付属品を照合してください。オレンジブックには後継品ありと表示されるため、現行品・在庫・保守も購入前に確認が必要です。",
};

const faqs: { q: string; a: string }[] = [
  {
    q: "ウェルドローラーとは何ですか？",
    a: "円筒状のパイプをローラーで支持し、電動または手動で回転させながら円周溶接を行いやすくする補助設備です。溶接機そのものではなく、ワークの回転と支持を担います。",
  },
  {
    q: "ウェルドローラーと溶接ポジショナーの違いは何ですか？",
    a: "ウェルドローラーは主に円筒物をローラー上で回します。ポジショナーはテーブルやチャックへワークを固定し、回転や傾斜で溶接姿勢を変える設備です。直管か、フランジ・架台などの固定ワークかで判断します。",
  },
  {
    q: "ターニングロールとは何が違いますか？",
    a: "ターニングロールは大型タンクや大径円筒物を複数のローラーで下から支持して回す設備です。ISK-WR125Eのような小～中径向けウェルドローラーとは、能力、設置規模、対象重量が異なります。",
  },
  {
    q: "ISK-WR125Eはどのメーカーの商品ですか？",
    a: "育良精機株式会社の製品です。型式のISKを切削工具メーカーのイスカルと混同しないよう、見積・発注時はメーカー名、型式、商品コードを合わせて確認してください。",
  },
  {
    q: "20A～125Aとは何を表しますか？",
    a: "配管の呼び径Aによる適合範囲です。育良精機の公式情報では実外径の目安としてφ27～140mmも併記されています。呼び径と実外径は同じ数値ではないため、現物を測って照合します。",
  },
  {
    q: "125Aのパイプ外径は125mmですか？",
    a: "一律に125mmではありません。呼び径Aは配管サイズを表す呼称です。規格や管種によって実外径を確認し、装置のφ27～140mmという搭載可能径へ収まるか確認してください。",
  },
  {
    q: "φ27～140mmならどのパイプでも使えますか？",
    a: "直径だけでは判断できません。総重量、長さ、重心、形状、表面状態、支持方法、回転時の振れや横移動も確認します。エルボやフランジなど偏心しやすいワークは別設備が適する場合があります。",
  },
  {
    q: "最大搭載荷重50kgfには何を含めますか？",
    a: "管本体だけでなく、継手、フランジ、仮付け部材など回転させるワーク全体を含めて確認します。長尺管では支持点ごとの荷重やたわみも関係するため、総重量だけで適合を断定しないでください。",
  },
  {
    q: "長尺パイプにも使えますか？",
    a: "適切なパイプスタンド等で同じ高さに支持し、たわみ、振れ、横移動、ローラーからの外れを防げる場合に候補になります。長さや支持方法はメーカー・現場責任者と確認してください。",
  },
  {
    q: "フランジ付きパイプを回せますか？",
    a: "フランジの重量と偏心、干渉、重心位置によります。適合径と荷重内でも回転が不安定になる可能性があるため、低速試運転を行い、必要ならテーブル型ポジショナーを検討します。",
  },
  {
    q: "エルボやT字管に使えますか？",
    a: "直管より重心が偏りやすく、ローラー上で安定しない場合があります。形状だけから使用可能とは判断せず、メーカーへ適合を確認し、ポジショナーや専用治具も比較してください。",
  },
  {
    q: "ステンレス管に使えますか？",
    a: "メーカー公式のパイプ関連ページには鋼管・ステンレス管兼用の支持部品も掲載されていますが、ISK-WR125Eの対象材を材質名だけで断定しないでください。ローラー接触、表面傷、清浄管理、溶接条件を確認します。",
  },
  {
    q: "TIG溶接に使えますか？",
    a: "装置はパイプを回転させるため、TIG溶接で一定姿勢を保つ用途の候補になります。ただし回転速度、電流、入熱、シールドガス、トーチ角度は材質と板厚に合わせて別途決定します。",
  },
  {
    q: "半自動・アーク溶接に使えますか？",
    a: "回転装置としては溶接法に応じた検討が可能ですが、ウェルドアースの定格電流・使用率、ヒューム、スパッタ、ケーブル取り回しを含めて適合を確認してください。",
  },
  {
    q: "回転速度はどのように決めますか？",
    a: "材質、板厚、継手、溶接法、電流、入熱、狙うビード形状により異なります。低速で空運転と試験溶接を行い、承認された施工要領やWPSがある場合はそれに従います。",
  },
  {
    q: "4段変速とダイヤルは何に使いますか？",
    a: "育良精機の公式仕様では、4段変速スイッチとダイヤル式操作で回転条件を調整します。具体的な設定順序や各段の範囲は取扱説明書で確認してください。",
  },
  {
    q: "フットスイッチは付属しますか？",
    a: "オレンジブックでは標準付属品にフットスイッチが記載されています。見積時には現行セット内容、コード長、交換部品の供給を販売店へ再確認してください。",
  },
  {
    q: "ウェルドアースは付属しますか？",
    a: "ISK-WE300が標準付属と案内されています。アースケーブルの巻き付きを抑える目的がありますが、定格電流・使用率・適合線サイズを実際の溶接条件へ照合する必要があります。",
  },
  {
    q: "AC100Vで使えますか？",
    a: "公式仕様はAC100V・50/60Hz、定格入力電流1.7Aです。延長コード、分岐、電圧降下、漏電保護、接地、作業場所の電源ルールまで確認してください。",
  },
  {
    q: "ISK-WR125Eだけで自動溶接できますか？",
    a: "できません。ISK-WR125Eはパイプの支持・回転を補助する装置です。溶接機、トーチ操作、溶接条件、監視、安全管理は別に必要です。回転するだけで品質が保証されるものでもありません。",
  },
  {
    q: "屋外や雨天で使えますか？",
    a: "公開仕様だけでは防水・防雨性能を確認できません。濡れた場所、雨天、粉じん環境、屋外常設での使用可否は、取扱説明書とメーカーへ確認してください。",
  },
  {
    q: "後継品がある旧機種を購入してよいですか？",
    a: "在庫、保証、修理、部品、付属品、後継機との違いを確認できれば候補になり得ます。法人の標準設備にする場合は、長期保守と追加導入時の統一性を重視してください。",
  },
  {
    q: "購入とレンタルのどちらがよいですか？",
    a: "同径・同工程を継続して行うなら購入が候補です。単発工事、対象径や重量が毎回変わる場合、導入前検証ではレンタルやデモ、外注と総コストを比較します。",
  },
  {
    q: "使用前に何を点検しますか？",
    a: "本体・ローラー・クランプ・フットスイッチ・電源コード・アース・支持具の損傷、固定、異物を確認し、停止状態でワークを設置します。その後、低速で振れ、横移動、干渉、ケーブル経路を確認します。",
  },
];

const failures = [
  "型式のISKをイスカル製品と誤認し、メーカーや保守窓口を取り違える",
  "125Aを実外径125mmだと思い、現物の外径を測らない",
  "管本体の重量だけを見て、継手・フランジ・仮付け部材を含めない",
  "最大50kgf以内なら、どの長さ・重心でも安定して回せると思う",
  "長尺管のたわみ、支持点、高さ合わせを決めずに本体だけ購入する",
  "偏心ワークやエルボ、T字管を直管と同じ条件で載せる",
  "駆動側と受動側、パイプスタンドの高さが合っていない",
  "床の水平、耐荷重、周囲動線を確認しない",
  "ローラーへの載せ方やクランプ状態を確認せず始動する",
  "低速の空運転を行わず、いきなり溶接速度で回す",
  "回転中に手でパイプ位置や支持具を直す",
  "袖口、手袋、タオル、毛髪をローラーや回転管へ近づける",
  "フットスイッチを通行者が踏める位置へ置く",
  "清掃・給油・調整を運転中に行う",
  "一般的な固定アースのまま回し、ケーブルを巻き付かせる",
  "付属ウェルドアースの定格電流・使用率を確認しない",
  "トーチケーブル、ガスホース、電源コードを回転部へ接触させる",
  "ローラー周速をそのままパイプ表面の溶接速度だと断定する",
  "材質・板厚・溶接法を変えても同じ設定を使う",
  "回転装置を導入すれば溶接品質が自動的に保証されると考える",
  "ヒューム、火花、感電、火災、遮光の対策を省略する",
  "屋外、防水、防爆対応と根拠なく判断する",
  "本体寸法、合計質量23.5kg、搬入経路、保管場所を確認しない",
  "後継品、修理、部品供給、付属品の継続性を確認しない",
  "教育、異常停止、点検記録を決めず設備だけ現場へ渡す",
];

const procurementChecks = [
  "ワークが直管か、フランジ・エルボ・偏心部品を含むか",
  "呼び径Aと実外径φの両方を確認したか",
  "管・継手・フランジ等を含む総重量を測ったか",
  "長さ、重心、たわみ、支持点、横移動を確認したか",
  "周速90～2240mm/minの範囲で工程を検証できるか",
  "AC100V、漏電保護、コード動線を確保できるか",
  "ウェルドアースの定格電流・使用率を溶接条件と照合したか",
  "駆動側・受動側・パイプスタンドを同じ高さに設置できるか",
  "回転部・挟まれ部への立入と服装のルールを決めたか",
  "低速試運転、異常時停止、電源遮断の手順を作ったか",
  "溶接ヒューム、換気、火花、消火、遮光、感電対策を確認したか",
  "正式型式、JAN、付属品、後継品、在庫、納期を照合したか",
  "修理窓口、部品供給、保証、点検周期、保管方法を確認したか",
  "本体だけでなく支持具、搬入、教育まで含めて予算化したか",
];

const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "パイプ溶接の回転治具はどう選ぶ？ウェルドローラーとポジショナーの違い",
  description: metadata.description,
  image: [
    `${HOME_URL}images/pipe-welding-rotator-weld-roller-selection/pipe-welding-rotator-selection-hero.jpg`,
  ],
  datePublished: "2026-07-22T09:00:00+09:00",
  dateModified: "2026-07-22T09:00:00+09:00",
  author: {
    "@type": "Organization",
    name: "作業用品ナビ編集部",
    url: `${HOME_URL}about`,
  },
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
      item: `${HOME_URL}articles`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "パイプ溶接の回転治具の選び方",
      item: PAGE_URL,
    },
  ],
};

function H2({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2
      id={id}
      className="mb-5 mt-12 scroll-mt-24 border-l-4 border-gray-900 pl-3 text-xl font-bold text-gray-900 sm:text-2xl"
    >
      {children}
    </h2>
  );
}

function H3({ children }: { children: ReactNode }) {
  return (
    <h3 className="mb-3 mt-8 text-lg font-bold text-gray-900">{children}</h3>
  );
}

function AnswerBox({ children }: { children: ReactNode }) {
  return (
    <section className="my-7 rounded-xl border-2 border-gray-900 bg-gray-50 p-5 sm:p-6">
      <p className="mb-2 text-sm font-bold tracking-wide text-gray-600">
        結論を先に確認
      </p>
      <div className="leading-8 text-gray-900">{children}</div>
    </section>
  );
}

function Caution({ title, children }: { title: string; children: ReactNode }) {
  return (
    <aside className="my-7 rounded-lg border-2 border-red-700 bg-red-50 p-5">
      <p className="mb-2 font-bold text-red-900">{title}</p>
      <div className="leading-7 text-red-950">{children}</div>
    </aside>
  );
}

function Note({ title, children }: { title: string; children: ReactNode }) {
  return (
    <aside className="my-7 rounded-lg border border-gray-300 bg-gray-50 p-5">
      <p className="mb-2 font-bold text-gray-900">{title}</p>
      <div className="leading-7 text-gray-800">{children}</div>
    </aside>
  );
}

function CTA({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "nofollow sponsored" : undefined}
      className="inline-flex min-h-12 items-center justify-center rounded-lg bg-gray-900 px-5 py-3 text-center font-bold text-white transition hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
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
    <figure className="my-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="relative aspect-video w-full">
        <Image
          src={HERO(src)}
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

function ProductCard() {
  return (
    <article className="my-8 overflow-hidden rounded-2xl border-2 border-gray-900 bg-white shadow-lg">
      <div className="grid gap-0 md:grid-cols-[280px_1fr]">
        <div className="relative min-h-[260px] bg-gray-50">
          <Image
            src={IMG(product.image)}
            alt={`${product.name}の商品サムネイル`}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 280px"
            className="object-contain p-5"
          />
        </div>
        <div className="p-5 sm:p-7">
          <span className="inline-flex rounded-full bg-gray-900 px-3 py-1 text-xs font-bold text-white">
            {product.badge}
          </span>
          <h3 className="mt-3 text-xl font-bold text-gray-900">{product.short}</h3>
          <p className="mt-1 text-sm text-gray-600">型式：{product.code}</p>
          <dl className="mt-5 space-y-3 text-sm leading-7">
            <div>
              <dt className="font-bold text-gray-900">向く用途</dt>
              <dd className="text-gray-700">{product.use}</dd>
            </div>
            <div>
              <dt className="font-bold text-gray-900">解決したい課題</dt>
              <dd className="text-gray-700">{product.solves}</dd>
            </div>
            <div className="rounded-lg bg-amber-50 p-3">
              <dt className="font-bold text-gray-900">購入前に確認</dt>
              <dd className="text-gray-700">{product.check}</dd>
            </div>
          </dl>
          <div className="mt-5">
            <CTA href={product.url}>ISK-WR125Eの商品ページで仕様を確認する →</CTA>
          </div>
        </div>
      </div>
    </article>
  );
}

function Th({ children }: { children: ReactNode }) {
  return (
    <th className="border border-gray-300 bg-gray-900 px-3 py-3 text-left text-sm font-bold text-white">
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

function Checklist({ items }: { items: string[] }) {
  return (
    <ul className="my-5 grid gap-3">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-3 rounded-lg border border-gray-200 bg-white p-4 leading-7 text-gray-800"
        >
          <span aria-hidden="true" className="mt-1 font-bold text-gray-900">
            □
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />

        <nav aria-label="パンくず" className="mb-5 text-sm text-gray-600">
          <Link href="/" className="underline underline-offset-4">
            ホーム
          </Link>
          <span className="mx-2">/</span>
          <Link href="/articles" className="underline underline-offset-4">
            選び方ガイド
          </Link>
          <span className="mx-2">/</span>
          <span>パイプ溶接の回転治具</span>
        </nav>

        <p className="text-sm font-bold text-gray-600">溶接設備・法人購買ガイド</p>
        <h1 className="mt-3 text-3xl font-black leading-tight tracking-tight text-gray-900 sm:text-4xl">
          パイプ溶接の回転治具はどう選ぶ？
          <span className="block">ウェルドローラーとポジショナーの違い</span>
        </h1>
        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-600">
          <span>執筆：作業用品ナビ編集部</span>
          <time dateTime="2026-07-22">公開・更新：2026年7月22日</time>
        </div>
        <p className="mt-3 text-sm leading-6 text-gray-600">
          調査方法：育良精機の公式製品情報、オレンジブック、厚生労働省の安全資料を照合し、
          商品仕様だけでなく、現場での選定・支持・安全運用まで整理しました。
        </p>

        <Figure
          src="pipe-welding-rotator-selection-hero.jpg"
          alt="パイプ溶接用のウェルドローラーで円周溶接を行う日本の鉄工所"
          caption="回転治具は、管径だけでなく、ワーク全体の重量・長さ・重心・支持方法まで確認して選びます。"
          priority
        />

        <AnswerBox>
          <p>
            パイプ溶接用の回転治具は、ワーク形状、管径、総重量、長さと重心、必要な回転速度、支持方法、アース、電源で選びます。
            20A～125A・総重量50kgf以下の直管をAC100Vで回転させ、一定の姿勢で円周溶接したい場合は育良精機ISK-WR125Eが候補です。
            一方、フランジや偏心荷重、傾斜姿勢、大径・重量物ではポジショナーやターニングロールを検討します。
            管径だけで決めず、ワーク全体の重量・長さ・重心と支持点を先に確認してください。
          </p>
        </AnswerBox>

        <ProductCard />

        <Caution title="重要｜ISK-WR125Eには後継品表示があります">
          <p>
            オレンジブックの商品ページには「この商品には後継品があります」と表示されています。
            この記事では指定されたISK-WR125Eを紹介しますが、購入前には現行品・後継機の型式、仕様差、在庫、保証、修理、部品供給を販売店またはメーカーへ確認してください。
          </p>
        </Caution>

        <nav
          aria-label="記事内目次"
          className="my-8 rounded-xl border border-gray-300 bg-gray-50 p-5"
        >
          <p className="font-bold text-gray-900">この記事で分かること</p>
          <ul className="mt-3 grid gap-2 text-sm leading-7 sm:grid-cols-2">
            <li><a className="underline" href="#selection-conditions">7条件の選び方</a></li>
            <li><a className="underline" href="#device-comparison">装置の違い</a></li>
            <li><a className="underline" href="#isk-wr125e">ISK-WR125Eの仕様</a></li>
            <li><a className="underline" href="#pipe-size">20A～125Aの見方</a></li>
            <li><a className="underline" href="#load">最大50kgfの見方</a></li>
            <li><a className="underline" href="#speed">回転速度の決め方</a></li>
            <li><a className="underline" href="#support">長尺管の支持</a></li>
            <li><a className="underline" href="#safety">安全な使用手順</a></li>
            <li><a className="underline" href="#procurement">法人チェックリスト</a></li>
            <li><a className="underline" href="#faq">よくある質問</a></li>
          </ul>
        </nav>

        <H2 id="selection-conditions">結論｜パイプ溶接の回転治具は7条件で選ぶ</H2>
        <p className="leading-8 text-gray-800">
          「適合パイプ20A～125A」だけを見て購入すると、重量、長さ、偏心、支持方法が合わず使えないことがあります。
          次の順番なら、設備の種類を先に決めてからワークを無理に合わせるのではなく、実際の作業条件から候補を絞れます。
        </p>
        <div className="my-6 overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse">
            <thead>
              <tr><Th>確認順</Th><Th>確認項目</Th><Th>判断のポイント</Th><Th>選択への影響</Th></tr>
            </thead>
            <tbody>
              <tr><Td>1</Td><Td>ワーク形状</Td><Td>直管、フランジ、エルボ、T字、タンク</Td><Td>ローラー式かテーブル固定式か</Td></tr>
              <tr><Td>2</Td><Td>管径</Td><Td>呼び径Aと現物外径φを照合</Td><Td>ローラーへ正しく載るか</Td></tr>
              <tr><Td>3</Td><Td>総重量</Td><Td>継手・フランジ等を含む</Td><Td>最大搭載荷重へ収まるか</Td></tr>
              <tr><Td>4</Td><Td>長さ・重心</Td><Td>たわみ、偏心、支持点、横移動</Td><Td>パイプスタンドや別設備の要否</Td></tr>
              <tr><Td>5</Td><Td>速度</Td><Td>材質、板厚、溶接法、WPS</Td><Td>調整範囲と再現性</Td></tr>
              <tr><Td>6</Td><Td>アース・配線</Td><Td>定格電流、使用率、巻き付き防止</Td><Td>ローリングアース等の適合</Td></tr>
              <tr><Td>7</Td><Td>電源・保守</Td><Td>AC100V、搬入、後継品、修理</Td><Td>導入後に継続運用できるか</Td></tr>
            </tbody>
          </table>
        </div>

        <H3>直管・継手・フランジなどワーク形状を確認する</H3>
        <p className="leading-8 text-gray-800">
          ウェルドローラーが得意なのは、ローラー上で安定して回せる円筒状の直管です。
          フランジやエルボを付けると重心が中心軸からずれ、回転のたびに荷重が変化します。
          形状が複雑な場合は、チャックや治具で固定できるポジショナーを比較します。
        </p>
        <H3>呼び径Aと実外径φを確認する</H3>
        <p className="leading-8 text-gray-800">
          125Aは外径125mmという意味ではありません。呼び径Aと管種の実外径を仕様書で確認し、
          継手や溶接ビードを含む最大外径がφ27～140mmの範囲へ収まるか現物でも測ります。
        </p>
        <H3>ワーク全体の重量を確認する</H3>
        <p className="leading-8 text-gray-800">
          最大搭載荷重0.49kN（50kgf）は、回転させるワーク全体を基準に判断します。
          管本体だけでなく、フランジ、ソケット、仮付けされた部品、治具なども含めます。
        </p>
        <H3>長さ・重心・支持点を確認する</H3>
        <p className="leading-8 text-gray-800">
          長尺管では、全重量が装置だけへ掛からなくても、たわみや支持高さのずれでローラーから外れたり横移動したりします。
          支持スタンドをどこへ何台置くか、回転を妨げないかまで図面化します。
        </p>

        <H2 id="what-is-weld-roller">ウェルドローラーとは｜パイプを回して円周溶接を補助する装置</H2>
        <p className="leading-8 text-gray-800">
          ウェルドローラーは、パイプを横向きに支持し、ローラーで回転させる設備です。
          作業者がパイプの周囲を移動したり、手で少しずつ回して仮固定したりする回数を減らし、トーチ位置や姿勢を保ちやすくします。
          育良精機はISK-WR125Eについて、パイプを回転させて溶接することで溶接部の安定した仕上げが可能と案内しています。
        </p>
        <Note title="回転治具は溶接条件の代わりではありません">
          <p>
            回転速度を一定にしやすくても、材質、板厚、開先、電流、電圧、入熱、シールドガス、トーチ角度などが不適切なら、狙う品質にはなりません。
            設備は工程を再現しやすくする補助手段として評価してください。
          </p>
        </Note>

        <H2 id="device-comparison">ウェルドローラー・ポジショナー・ターニングロールの違い</H2>
        <div className="my-6 overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse">
            <thead><tr><Th>種類</Th><Th>ワークの支え方</Th><Th>向くワーク</Th><Th>主な判断点</Th></tr></thead>
            <tbody>
              <tr><Td>ウェルドローラー</Td><Td>円筒をローラー上へ載せる</Td><Td>小～中径の直管、円筒</Td><Td>管径、重量、長さ、偏心、支持</Td></tr>
              <tr><Td>回転テーブル型ポジショナー</Td><Td>テーブル・チャックへ固定</Td><Td>フランジ、小型タンク、部品</Td><Td>チャック、重心、回転トルク</Td></tr>
              <tr><Td>傾斜型ポジショナー</Td><Td>固定したワークを回転・傾斜</Td><Td>複数面、姿勢変更が必要なワーク</Td><Td>傾斜荷重、偏心、転倒</Td></tr>
              <tr><Td>ターニングロール</Td><Td>大型円筒を複数ローラーで下支え</Td><Td>タンク、大径・重量円筒物</Td><Td>能力、径、同期、設置基礎</Td></tr>
              <tr><Td>手動ローラー・自作治具</Td><Td>人力または簡易治具で回す</Td><Td>単発、小型、低頻度</Td><Td>速度再現性、脱落、巻き込まれ</Td></tr>
            </tbody>
          </table>
        </div>
        <Figure
          src="weld-roller-positioner-turning-roll-comparison.jpg"
          alt="ウェルドローラー・溶接ポジショナー・ターニングロールの違いを示すイメージ"
          caption="装置名ではなく、ワークの形状と支え方から選び分けます。"
        />

        <H2 id="isk-wr125e">育良精機ISK-WR125Eの仕様と向く現場</H2>
        <p className="leading-8 text-gray-800">
          ISK-WR125Eは、小～中径パイプを対象にした電動ウェルドローラーです。
          駆動側と受動側を分けて配置でき、トグルクランプでパイプを取り付け、フットスイッチで回転を操作する構成です。
          アースケーブルが絡まりにくいウェルドアースが標準付属します。
        </p>
        <div className="my-6 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse">
            <thead><tr><Th>仕様</Th><Th>確認値</Th><Th>購入前の見方</Th></tr></thead>
            <tbody>
              <tr><Td>最大搭載荷重</Td><Td>0.49kN（50kgf）</Td><Td>ワーク全体、偏心、支持状態を含めて判断</Td></tr>
              <tr><Td>搭載可能径</Td><Td>20～125A（φ27～140mm）</Td><Td>呼び径と現物外径を両方確認</Td></tr>
              <tr><Td>駆動ローラー周速</Td><Td>90～2240mm/min</Td><Td>溶接条件に合うか試験して設定</Td></tr>
              <tr><Td>駆動電動機</Td><Td>60Wスピードコントローラーモーター</Td><Td>4段変速とダイヤルの操作方法を取説で確認</Td></tr>
              <tr><Td>電源</Td><Td>AC100V 50/60Hz、1.7A</Td><Td>電源容量、延長コード、漏電保護を確認</Td></tr>
              <tr><Td>寸法</Td><Td>駆動側407×354×281mm、受動側407×106×281mm</Td><Td>搬入、設置、支持具、作業動線を確認</Td></tr>
              <tr><Td>質量</Td><Td>駆動側16.5kg、受動側7.0kg</Td><Td>運搬方法と保管場所を決める</Td></tr>
              <tr><Td>標準付属</Td><Td>フットスイッチ、ISK-WE300</Td><Td>現行セット内容と交換品を再確認</Td></tr>
              <tr><Td>製品状態</Td><Td>後継品表示あり</Td><Td>在庫、後継機、保証、部品、修理を確認</Td></tr>
            </tbody>
          </table>
        </div>
        <div className="my-7 rounded-xl bg-gray-900 p-6 text-white">
          <p className="text-lg font-bold">この条件へ近い現場で商品仕様を確認</p>
          <p className="mt-2 leading-7 text-gray-200">
            直管、20A～125A、総重量50kgf以下、AC100V、長尺時は別途支持可能という条件が判断の入口です。
          </p>
          <div className="mt-4">
            <a
              href={product.url}
              target="_blank"
              rel="nofollow sponsored"
              className="inline-flex min-h-12 items-center rounded-lg bg-white px-5 py-3 font-bold text-gray-900 hover:bg-gray-100"
            >
              ISK-WR125Eの商品ページを見る →
            </a>
          </div>
        </div>

        <H2 id="pipe-size">20A～125Aとφ27～140mmはどう読むか</H2>
        <p className="leading-8 text-gray-800">
          Aは配管の呼び径で、実外径の数値そのものではありません。
          同じ呼び径でも管種や規格の確認が必要です。育良精機がφ27～140mmも併記しているため、
          発注前は図面の呼び径だけでなく、実際にローラーへ接する部分の外径を測定してください。
        </p>
        <div className="my-6 overflow-x-auto">
          <table className="w-full min-w-[620px] border-collapse">
            <thead><tr><Th>確認対象</Th><Th>見る数値</Th><Th>見落としやすい点</Th></tr></thead>
            <tbody>
              <tr><Td>直管</Td><Td>管種、呼び径A、実外径φ</Td><Td>表面被覆や突起</Td></tr>
              <tr><Td>継手付き</Td><Td>継手部の最大外径</Td><Td>ローラーとの干渉</Td></tr>
              <tr><Td>溶接後</Td><Td>ビード・仮付け部を含む外径</Td><Td>回転時の引っ掛かり</Td></tr>
              <tr><Td>偏心部品付き</Td><Td>最大回転半径</Td><Td>周囲設備との衝突</Td></tr>
            </tbody>
          </table>
        </div>

        <H2 id="load">最大搭載荷重50kgfの確認方法</H2>
        <p className="leading-8 text-gray-800">
          50kgfは「50kgの管だけを載せられる」と単純化せず、回転ワーク全体と支持条件で評価します。
          継手やフランジを仮付けした状態で回すなら、その重量も合算します。
          長尺管はパイプスタンドが荷重を分担しますが、支持高さの差やたわみが新たな横荷重を生むことがあります。
        </p>
        <Caution title="最大能力いっぱいを常用条件にしない">
          <p>
            能力内でも、偏心、衝撃、横ずれ、支持不良があれば安全とは限りません。
            余裕の取り方はメーカー、設備責任者、リスクアセスメントに基づいて決め、最大数値を作業標準の目標値にしないでください。
          </p>
        </Caution>
        <Figure
          src="pipe-diameter-weight-center-of-gravity-check.jpg"
          alt="パイプの外径・総重量・重心を確認して回転治具を選ぶイメージ"
          caption="呼び径、実外径、総重量、重心、支持点を1枚のワーク票にまとめると、誤発注を減らせます。"
        />

        <H2 id="speed">回転速度はどう決める？周速90～2240mm/minの見方</H2>
        <p className="leading-8 text-gray-800">
          公式仕様の90～2240mm/minは駆動ローラーの周速です。
          パイプ径、滑り、接触状態により、パイプ表面の移動速度や回転数との関係が変わるため、数値をそのまま溶接速度と同一視しません。
        </p>
        <H3>材質・板厚・溶接法で条件を作る</H3>
        <p className="leading-8 text-gray-800">
          TIG、半自動、被覆アークでは、適切な電流、電圧、入熱、トーチ角度、シールド条件が異なります。
          承認済みの施工要領やWPSがある場合はそれを優先し、ない場合も試験片で条件を確認してから本番へ移ります。
        </p>
        <H3>低速で空運転し、段階的に試す</H3>
        <p className="leading-8 text-gray-800">
          最初に溶接せず低速で回し、振れ、横移動、支持具との干渉、ケーブル経路を確認します。
          その後、試験溶接でビード形状と溶け込みを確認し、再現できる設定を作業票へ記録します。
        </p>

        <H2 id="support">長尺パイプを安定して支持する方法</H2>
        <p className="leading-8 text-gray-800">
          長尺パイプでは、駆動側・受動側だけでなく、途中にパイプスタンドを追加することがあります。
          支持具の高さがわずかに違うだけでも管が斜めになり、ローラーの片側へ寄ったり、回転抵抗が増えたりします。
        </p>
        <ol className="my-5 list-decimal space-y-3 pl-6 leading-8 text-gray-800">
          <li>床面の水平、耐荷重、通路との干渉を確認する</li>
          <li>駆動側・受動側・支持スタンドの中心高さを合わせる</li>
          <li>たわみが大きい位置へ支持点を追加する</li>
          <li>支持ローラーが自由に回り、パイプを拘束しすぎないか確認する</li>
          <li>低速で1周以上回し、横移動、振れ、脱落兆候を確認する</li>
          <li>溶接熱による変形や治具の緩みも途中点検する</li>
        </ol>
        <Figure
          src="long-pipe-welding-support-stand-alignment.jpg"
          alt="長尺パイプをウェルドローラーとパイプスタンドで水平支持するイメージ"
          caption="長尺管では本体だけでなく、支持スタンドの台数・高さ・配置が設備選定の一部です。"
        />
        <div className="my-6 text-center">
          <CTA href={product.url}>長尺支持条件とあわせてISK-WR125Eを確認する →</CTA>
        </div>

        <H2 id="earth">ウェルドアースとケーブルの巻き付き対策</H2>
        <p className="leading-8 text-gray-800">
          パイプが回転すると、一般的なアースクランプを固定したままではケーブルが管へ巻き付くおそれがあります。
          ISK-WR125Eには、アースケーブルが絡まりにくいウェルドアースISK-WE300が標準付属と案内されています。
        </p>
        <p className="mt-4 leading-8 text-gray-800">
          育良精機の公式仕様ではISK-WE300の定格電流・使用率が300A/10%、200A/20%、100A/40%と示されています。
          溶接機の最大電流だけではなく、実際の使用電流とアーク時間、休止時間を照合し、許容範囲を超えないよう確認します。
        </p>
        <Figure
          src="rotating-pipe-welding-earth-cable-management.jpg"
          alt="回転するパイプの溶接アースとケーブルを安全に管理するイメージ"
          caption="アース、トーチ、ガスホース、電源、フットスイッチを回転部・挟まれ部から離して配線します。"
        />

        <H2 id="safety">ISK-WR125Eを使う基本手順と安全管理</H2>
        <p className="leading-8 text-gray-800">
          具体的な操作は必ず製品の取扱説明書を優先します。以下は、回転設備と溶接作業を組み合わせる際の一般的な確認順です。
        </p>
        <ol className="my-5 list-decimal space-y-4 pl-6 leading-8 text-gray-800">
          <li><strong>作業計画を確認：</strong>ワーク、溶接条件、設備能力、支持、アース、安全担当を決める。</li>
          <li><strong>停止状態で点検：</strong>ローラー、クランプ、電源、フットスイッチ、アース、支持具の損傷と異物を確認する。</li>
          <li><strong>水平・安定設置：</strong>床、駆動側、受動側、スタンドの高さと固定を確認する。</li>
          <li><strong>ワークを載せる：</strong>電源を切った状態で載せ、手指を挟まれ部へ入れず、クランプと支持を確認する。</li>
          <li><strong>配線する：</strong>アース、トーチ、ガス、電源、ペダルのコードを回転経路から離す。</li>
          <li><strong>低速試運転：</strong>溶接せず、振れ、横移動、異音、干渉、停止操作を確認する。</li>
          <li><strong>溶接する：</strong>回転部へ身体や衣服を近づけず、ヒューム・火花・遮光・感電対策を行う。</li>
          <li><strong>終了後点検：</strong>停止・電源遮断後にワークを外し、熱、損傷、緩み、付着物を確認する。</li>
        </ol>
        <Caution title="回転体・ローラーの巻き込まれに注意">
          <p>
            厚生労働省の安全資料では、回転部への頭髪・衣服の巻き込まれ、ローラーへの毛髪の絡まり、運転中の清掃・点検などが危険例として示されています。
            回転中に手を出さない、袖やタオルを垂らさない、長い髪をまとめる、調整・清掃は停止・電源遮断後に行うことを作業標準へ入れてください。
          </p>
        </Caution>
        <Caution title="溶接ヒューム・火花・感電対策も別に必要です">
          <p>
            回転治具は、局所排気、全体換気、呼吸用保護具、遮光面、保護具、可燃物除去、消火設備、感電防止などを代替しません。
            金属アーク溶接等の作業は、厚生労働省の最新資料と自社のリスクアセスメントに基づいて管理してください。
            遮光ガラスの番号選定は
            <Link
              href="/articles/welding-shade-glass-number-selection"
              className="mx-1 font-bold underline underline-offset-4"
            >
              溶接の遮光ガラスは何番？の選び方ガイド
            </Link>
            もあわせて確認してください。
          </p>
        </Caution>
        <Figure
          src="weld-roller-low-speed-test-safety.jpg"
          alt="ウェルドローラーを低速で試運転し振れや干渉を確認するイメージ"
          caption="本番前の低速試運転で、振れ・横移動・支持・ケーブル干渉・停止操作を確認します。"
        />

        <H2 id="site-fit">現場別に見るウェルドローラーの適性</H2>
        <div className="my-6 overflow-x-auto">
          <table className="w-full min-w-[740px] border-collapse">
            <thead><tr><Th>現場・ワーク</Th><Th>適性</Th><Th>理由</Th><Th>追加確認</Th></tr></thead>
            <tbody>
              <tr><Td>同径の直管を反復製作</Td><Td>候補になりやすい</Td><Td>支持と速度条件を標準化しやすい</Td><Td>総重量、長さ、段取り時間</Td></tr>
              <tr><Td>設備配管の小～中径直管</Td><Td>条件が合えば候補</Td><Td>20A～125Aの適合範囲</Td><Td>管種外径、継手、支持</Td></tr>
              <tr><Td>TIGで円周溶接</Td><Td>候補</Td><Td>トーチ姿勢を保ちやすい</Td><Td>入熱、ガス、速度、WPS</Td></tr>
              <tr><Td>ステンレス管</Td><Td>要確認</Td><Td>回転用途は考えられる</Td><Td>表面傷、異材汚染、ローラー接触</Td></tr>
              <tr><Td>フランジ・偏心部品付き</Td><Td>慎重に判断</Td><Td>重心が偏り回転が不安定</Td><Td>ポジショナー、専用治具</Td></tr>
              <tr><Td>大径タンク・重量円筒</Td><Td>別設備</Td><Td>能力・径・支持方式が異なる</Td><Td>ターニングロール</Td></tr>
              <tr><Td>屋外・雨天・防爆区域</Td><Td>公開情報だけで判断不可</Td><Td>環境仕様が未確認</Td><Td>メーカー確認、専用設備</Td></tr>
            </tbody>
          </table>
        </div>

        <H2 id="effect">導入効果を見積もる方法</H2>
        <p className="leading-8 text-gray-800">
          「仕上がりが良くなるはず」という感覚だけでは稟議の効果を説明しにくいため、導入前に現行工程を計測します。
          1本当たりの持ち替え回数、仮固定回数、作業者が管の周囲を移動する時間、アースの付け直し、溶接中断、手直し時間を記録してください。
        </p>
        <div className="my-6 overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse">
            <thead><tr><Th>方法</Th><Th>向く状況</Th><Th>メリット</Th><Th>確認事項</Th></tr></thead>
            <tbody>
              <tr><Td>購入</Td><Td>反復作業、標準設備化</Td><Td>常時使え、条件を蓄積できる</Td><Td>保守、後継、保管、教育</Td></tr>
              <tr><Td>レンタル・デモ</Td><Td>導入前検証、短期案件</Td><Td>適合と効果を現物確認</Td><Td>対象機種、付属品、日程</Td></tr>
              <tr><Td>外注</Td><Td>頻度が低い、特殊ワーク</Td><Td>設備・教育を持たず対応</Td><Td>品質、納期、運搬、機密</Td></tr>
              <tr><Td>自作治具</Td><Td>限定条件、社内設計力あり</Td><Td>ワークへ最適化できる</Td><Td>安全設計、速度、脱落、責任</Td></tr>
            </tbody>
          </table>
        </div>
        <Note title="評価は品質保証ではなく工程の再現性で行う">
          <p>
            回転治具の導入だけで品質が保証されるとは表現せず、姿勢、速度設定、持ち替え、停止回数など、管理しやすくなった工程要素を測ります。
            溶接品質は検査基準と施工要領に基づいて別途確認してください。
          </p>
        </Note>

        <H2 id="failures">よくある選び方・設置・使用の失敗</H2>
        <ol className="my-5 grid gap-3 sm:grid-cols-2">
          {failures.map((failure, index) => (
            <li key={failure} className="rounded-lg border border-gray-200 bg-white p-4 leading-7 text-gray-800">
              <span className="mr-2 font-bold text-gray-900">{index + 1}.</span>
              {failure}
            </li>
          ))}
        </ol>

        <H2 id="procurement">法人購買・設備導入チェックリスト</H2>
        <p className="leading-8 text-gray-800">
          稟議書、見積依頼、受入検査、作業標準の4段階で同じチェック項目を使うと、購入時の確認が現場へ引き継がれます。
        </p>
        <Checklist items={procurementChecks} />
        <Figure
          src="weld-roller-procurement-maintenance-checklist.jpg"
          alt="法人担当者がウェルドローラーの導入条件と点検項目を確認するイメージ"
          caption="本体、支持具、アース、電源、教育、保守をひとつの設備導入案件として確認します。"
        />
        <div className="my-7 rounded-xl border-2 border-gray-900 p-6">
          <p className="text-lg font-bold text-gray-900">稟議前に商品ページで最終照合</p>
          <p className="mt-2 leading-7 text-gray-700">
            型式、付属品、配送条件、在庫、後継品を確認し、メーカー仕様と見積内容を一致させてください。
          </p>
          <div className="mt-4"><CTA href={product.url}>ISK-WR125Eの販売ページを確認する →</CTA></div>
        </div>

        <H2 id="maintenance">日常点検・保管・メンテナンス</H2>
        <p className="leading-8 text-gray-800">
          点検・清掃・調整は運転を停止し、電源を遮断してから行います。日常点検では、ローラー摩耗、異物、クランプ、ボルト、電源コード、フットスイッチ、ウェルドアース、異音、振動を確認します。
        </p>
        <div className="my-6 overflow-x-auto">
          <table className="w-full min-w-[680px] border-collapse">
            <thead><tr><Th>時点</Th><Th>点検項目</Th><Th>異常時</Th></tr></thead>
            <tbody>
              <tr><Td>使用前</Td><Td>外観、ローラー、クランプ、コード、アース、支持具</Td><Td>使用せず責任者へ報告</Td></tr>
              <tr><Td>試運転</Td><Td>振れ、横移動、異音、振動、停止操作</Td><Td>直ちに停止し原因確認</Td></tr>
              <tr><Td>使用後</Td><Td>熱、スパッタ、緩み、損傷、汚れ</Td><Td>冷却後に清掃・点検</Td></tr>
              <tr><Td>定期</Td><Td>摩耗、電装、絶縁、付属品、修理履歴</Td><Td>メーカー点検・修理を検討</Td></tr>
              <tr><Td>保管</Td><Td>乾燥、転倒防止、コード保護、管理番号</Td><Td>濡れ・損傷品を隔離</Td></tr>
            </tbody>
          </table>
        </div>

        <H2 id="faq">よくある質問</H2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details key={faq.q} className="group rounded-lg border border-gray-300 bg-white p-4">
              <summary className="cursor-pointer list-none font-bold leading-7 text-gray-900">
                <span className="mr-2">Q.</span>{faq.q}
              </summary>
              <p className="mt-3 border-t border-gray-200 pt-3 leading-8 text-gray-800">
                <span className="mr-2 font-bold">A.</span>{faq.a}
              </p>
            </details>
          ))}
        </div>

        <H2 id="sources">一次情報・参考資料</H2>
        <p className="leading-8 text-gray-800">
          仕様や安全情報は変更される可能性があります。公開時・購入時には、以下の一次情報と製品に付属する取扱説明書を再確認してください。
        </p>
        <ul className="my-5 space-y-3 leading-7 text-gray-800">
          <li>
            <a className="font-bold underline" href="https://www.ikuratools.com/m_pipe.html" target="_blank" rel="noopener noreferrer">
              育良精機｜パイプ関連商品
            </a>
            <span>：搭載径、荷重、周速、電源、寸法、ウェルドアース仕様</span>
          </li>
          <li>
            <a className="font-bold underline" href="https://www.orange-book.com/ja/c/products/index.html?itemCd=ISKWR125E+++++++++++++++++++++1030" target="_blank" rel="noopener noreferrer">
              オレンジブック｜ISK-WR125E
            </a>
            <span>：用途、付属品、型式、後継品表示</span>
          </li>
          <li>
            <a className="font-bold underline" href="https://www.mhlw.go.jp/content/11300000/001411590.pdf" target="_blank" rel="noopener noreferrer">
              厚生労働省｜溶接作業におけるリスクアセスメントのすすめ方
            </a>
          </li>
          <li>
            <a className="font-bold underline" href="https://www.mhlw.go.jp/content/11909000/001416077.pdf" target="_blank" rel="noopener noreferrer">
              厚生労働省｜災害防止対策ガイドブック
            </a>
            <span>：回転部・ローラーへの巻き込まれ、停止後の点検等</span>
          </li>
        </ul>

        <H2 id="summary">まとめ｜管径だけでなく総重量・長さ・重心・支持方法を確認する</H2>
        <p className="leading-8 text-gray-800">
          育良精機ISK-WR125Eは、20A～125A（φ27～140mm）、最大50kgfの範囲で、小～中径の直管を回転させる円周溶接の候補です。
          ただし、適合径へ入るだけでは選べません。ワーク全体の重量、長さ、重心、偏心、支持点、速度、アース、電源、作業場所を順に確認してください。
        </p>
        <p className="mt-4 leading-8 text-gray-800">
          フランジや複雑形状を固定して傾けたい場合はポジショナー、大型円筒物はターニングロールを比較します。
          設備導入後も、低速試運転、巻き込まれ防止、ヒューム・火花・感電対策、点検・教育まで一体で運用することが重要です。
        </p>
        <div className="my-8 rounded-2xl bg-gray-900 p-6 text-white sm:p-8">
          <p className="text-xl font-bold">ISK-WR125Eの適合・後継品・付属品を最終確認</p>
          <p className="mt-3 leading-7 text-gray-200">
            商品ページを確認したうえで、現物ワークの外径・総重量・長さ・重心をメーカーまたは販売店へ伝えると、適合確認を進めやすくなります。
          </p>
          <div className="mt-5">
            <a
              href={product.url}
              target="_blank"
              rel="nofollow sponsored"
              className="inline-flex min-h-12 items-center rounded-lg bg-white px-5 py-3 font-bold text-gray-900 hover:bg-gray-100"
            >
              育良ウェルドローラーの商品ページを見る →
            </a>
          </div>
        </div>

        <p className="mt-10 border-t border-gray-200 pt-6 text-sm leading-6 text-gray-600">
          ※本記事は設備選定の一般的な確認事項を整理したものです。個別ワークへの適合、操作方法、法令対応、安全措置は、製品の取扱説明書、メーカー、施工要領、事業場のリスクアセスメントを優先してください。
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
