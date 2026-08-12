import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import fs from "fs";
import path from "path";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";
import productData from "./product-data.json";

const SLUG = "manual-press-fit-work-efficiency-guide";
const SITE_URL = "https://www.sagyou-navi.com";
const CANONICAL = `${SITE_URL}/articles/${SLUG}`;
const ARTICLE_TITLE =
  "圧入の手作業を効率化するには？ハンドプレスの選び方とラックピニオン・トグルの違い【2026年版】";
const SHORT_TITLE = "圧入の手作業を効率化するには？ハンドプレスの選び方";
const DESCRIPTION =
  "ベアリング・シャフト・ピンなどの圧入や、カシメ・打抜きの手作業を効率化したい方向けに、ハンドプレスの選び方を解説。ラックピニオン式とトグル式の違い、推力・ストローク・ワークハイトの見方、仲精機の代表モデル、治具と作業台の考え方まで整理します。";
const PUBLISHED = "2026-08-12";
const HERO = "manual-press-fit-work-efficiency-hero.jpg";
const IMG = (file: string) => `/images/articles/${SLUG}/${file}`;
const PROD = (file: string) => `/images/articles/${SLUG}/products/${file}`;
const EXT_REL = "nofollow sponsored noopener noreferrer";

const ctas = productData.cta_links;

type CatalogProduct = (typeof productData.products)[number];

const byModel = Object.fromEntries(
  productData.products.map((p) => [p.model, p])
) as Record<string, CatalogProduct>;

function productImageExists(imageFile: string) {
  try {
    const filePath = path.join(
      process.cwd(),
      "public",
      "images",
      "articles",
      SLUG,
      "products",
      imageFile
    );
    return fs.existsSync(filePath) && fs.statSync(filePath).size > 500;
  } catch {
    return false;
  }
}

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: ARTICLE_TITLE,
    description: DESCRIPTION,
    type: "article",
    url: CANONICAL,
    siteName: "作業用品ナビ",
    publishedTime: PUBLISHED,
    modifiedTime: PUBLISHED,
    images: [
      {
        url: `${SITE_URL}${IMG(HERO)}`,
        width: 1600,
        height: 900,
        alt: "小型部品の圧入作業をハンドプレスで行う製造現場のイメージ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SHORT_TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}${IMG(HERO)}`],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: ARTICLE_TITLE,
  description: DESCRIPTION,
  mainEntityOfPage: CANONICAL,
  image: [`${SITE_URL}${IMG(HERO)}`],
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: {
    "@type": "Organization",
    name: "作業用品ナビ編集部",
    url: SITE_URL,
  },
  publisher: {
    "@type": "Organization",
    name: "作業用品ナビ",
    url: SITE_URL,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "記事一覧",
      item: `${SITE_URL}/articles`,
    },
    { "@type": "ListItem", position: 3, name: SHORT_TITLE, item: CANONICAL },
  ],
};

const workMapRows = [
  {
    work: "ベアリング・ピン・シャフトの圧入",
    first: "ラックピニオン式",
    reason: "ストローク全域で安定した推力を得やすい",
  },
  {
    work: "部品の挿入・一定深さまでの押し込み",
    first: "ラックピニオン式",
    reason: "途中位置を含めて押し込み工程を設計しやすい",
  },
  {
    work: "カシメ・薄板の打抜き",
    first: "トグル式",
    reason: "下死点付近で大きな推力を得やすい",
  },
  {
    work: "強い曲げ・局所的に大きな力が必要",
    first: "トグル式",
    reason: "高推力モデルを選びやすい",
  },
  {
    work: "両面ハトメを繰り返し施工",
    first: "ハトメ専用ハンドプレス",
    reason: "専用コマと組み合わせて工程を固定しやすい",
  },
] as const;

const selectionPoints = [
  {
    title: "必要推力",
    body: "対象ワークを押し込むのに必要な力を、実測・試験・設計条件から確認します。「たぶんこのくらい」での選定は避けます。",
  },
  {
    title: "ストローク",
    body: "加工距離だけでなく、ワークを入れて出せる動作量が必要です。押し込み量20mmでも、セット用の開口がそれ以上必要なことがあります。",
  },
  {
    title: "ワークハイト",
    body: "完成品の高さではなく、下治具＋ワーク＋上治具＋逃げを足した高さで考えます。治具を付けたら高さが足りない失敗が起きやすいです。",
  },
  {
    title: "テーブルとオーバーハング",
    body: "押したい箇所がワーク奥にある場合、主軸中心までの懐が必要です。大型ワークや張り出し形状では、推力より先に物理的に入るかを確認します。",
  },
  {
    title: "治具と下死点管理",
    body: "位置決め治具、押し治具、受け治具、ストッパー、下死点微調整まで含めて工程化します。本体選定だけで品質は安定しません。",
  },
] as const;

const rackCompare = [
  {
    model: "HZP4",
    guide: "小物・省スペースを重視",
  },
  {
    model: "HZP5",
    guide: "HZP-4よりワーク高さ・台面に余裕",
  },
  {
    model: "HZP6",
    guide: "長いストローク・高いワークに対応",
  },
  {
    model: "NH202",
    guide: "中間サイズで圧入工程を組みたい",
  },
] as const;

const toggleCompare = [
  {
    model: "RT501",
    guide: "小型・比較的短いストロークのカシメ等",
  },
  {
    model: "HZP13",
    guide: "5kNクラスをコンパクトに使いたい",
  },
  {
    model: "HZP14",
    guide: "高推力＋ストロークを両立したい",
  },
  {
    model: "HZP15",
    guide: "高いワークを扱いたい",
  },
  {
    model: "HZP17",
    guide: "短ストロークで強い力が必要",
  },
] as const;

const hatomeDies = [
  { model: "THPHK10", use: "10mm 両面ハトメ用" },
  { model: "THPHK12", use: "12mm 両面ハトメ用" },
  { model: "THPHK15", use: "15mm 両面ハトメ用" },
  { model: "THPHKD3", use: "3mm 電気ハトメ用" },
] as const;

const stageCompare = [
  {
    item: "初期導入",
    hand: "小さい",
    press: "中",
    auto: "大きい",
  },
  {
    item: "小ロット対応",
    hand: "◎",
    press: "◎",
    auto: "△",
  },
  {
    item: "力の方向を揃える",
    hand: "△",
    press: "○",
    auto: "◎",
  },
  {
    item: "深さ・位置の再現性",
    hand: "△",
    press: "○〜◎ ※治具次第",
    auto: "◎",
  },
  {
    item: "作業者の操作",
    hand: "多い",
    press: "レバー操作あり",
    auto: "少ない",
  },
  {
    item: "段取り変更",
    hand: "◎",
    press: "○",
    auto: "設備次第",
  },
  {
    item: "大量生産",
    hand: "△",
    press: "○",
    auto: "◎",
  },
  {
    item: "向く状態",
    hand: "数量が少ない",
    press: "反復作業を改善したい",
    auto: "高数量・高品質管理",
  },
] as const;

const failures = [
  "最大推力だけで買う",
  "圧入なのに方式を見ない（トグルの数字が大きいから、と選ぶ）",
  "治具を後回しにする",
  "作業台へ固定しない",
  "ハトメ本体とコマを別々に選び、適合を確認しない",
] as const;

const checkItems = [
  "加工は圧入・カシメ・打抜き・曲げのどれか",
  "必要荷重を確認した",
  "必要ストロークを確認した",
  "ワーク＋上下治具の高さを確認した",
  "ワークの奥行きと主軸位置を確認した",
  "位置決め治具を検討した",
  "一日の加工数量を把握した",
  "作業者の動作範囲を確認した",
  "作業台へ安定固定できる",
  "品質確認方法を決めた",
  "将来自動化する数量の目安を決めた",
] as const;

const faqs = [
  {
    q: "圧入にはラックピニオン式とトグル式のどちらが向きますか？",
    a: "一般には、ストローク全域で安定した推力を得やすいラックピニオン式が圧入・挿入に比較しやすい方式です。トグル式は下死点付近で大きな力を出せるため、カシメ・打抜きなどに向きます。最終的には必要荷重と加工位置を確認してください。",
  },
  {
    q: "最大推力が大きい機種を選べば間違いありませんか？",
    a: "いいえ。必要ストローク、ワークハイト、テーブル寸法、治具スペースなどが合わないと使えません。必要以上に大型化すると、操作性や設置性も悪くなることがあります。",
  },
  {
    q: "HZP-4・HZP-5・HZP-6の違いは？",
    a: "メーカー公式値では、HZP-4とHZP-5は最大推力1.6kN・ストローク40mm。HZP-5はワークハイトとテーブルが大きめです。HZP-6は最大推力2.4kN、ストローク70mm、ワークハイト100〜355mmで、より大きなワークや長い動作に対応しやすい仕様です。",
  },
  {
    q: "ハンドプレスでベアリングを圧入できますか？",
    a: "仲精機はハンドプレスの用途例としてベアリングの軽圧入を挙げています。ただし、必要荷重、部品精度、治具、押す面などを確認し、対象ワークに合う機種を選定する必要があります。",
  },
  {
    q: "ハトメ用ハンドプレスで一般的な部品圧入もできますか？",
    a: "ハトメ専用機は専用コマとハトメ作業を前提に選ぶ方が安全です。一般部品の圧入を主目的にするなら、圧入用途を前提にしたラックピニオン式等を比較してください。",
  },
  {
    q: "手動ハンドプレスから自動化へ変える目安は？",
    a: "加工数量が増え、レバー操作がタクトのボトルネックになる、荷重・深さを全数管理したい、作業者負担が大きい、といった状態が目安です。単純な数量だけでなく、品質要求と工程全体で判断します。",
  },
] as const;

const relatedArticles = [
  {
    href: "/articles/electrical-crimping-work-efficiency-guide",
    label: "電線の圧着作業を効率化するには？手動工具から充電式圧着器へ",
  },
  {
    href: "/articles/battery-hydraulic-multifunction-tool-selection-guide",
    label: "充電油圧式多機能工具の選び方",
  },
  {
    href: "/articles/line-work-tool-wagon-selection",
    label: "ライン作業の工具ワゴン選定",
  },
  {
    href: "/articles/worktable-antistatic-measures",
    label: "作業台の帯電防止対策",
  },
] as const;

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function ExtLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a href={href} target="_blank" rel={EXT_REL} className={className}>
      {children}
    </a>
  );
}

function Mark({ children }: { children: ReactNode }) {
  return <mark className={cls.mark}>{children}</mark>;
}

function P({ children }: { children: ReactNode }) {
  return <p className={cls.body}>{children}</p>;
}

function H2({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <h2 id={id} className={`${cls.h2} scroll-mt-24`}>
      {children}
    </h2>
  );
}

function H3({ children }: { children: ReactNode }) {
  return <h3 className={cls.h3}>{children}</h3>;
}

function Figure({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <figure className="my-8 overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
      <div className="relative aspect-video">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 850px"
        />
      </div>
    </figure>
  );
}

function ExtButton({
  href,
  children,
  tone = "amber",
}: {
  href: string;
  children: ReactNode;
  tone?: "amber" | "dark" | "rose";
}) {
  const toneClass =
    tone === "dark"
      ? "bg-slate-900 hover:bg-slate-800"
      : tone === "rose"
        ? "bg-rose-700 hover:bg-rose-800"
        : "bg-amber-600 hover:bg-amber-700";
  return (
    <ExtLink
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-xl px-5 py-3 text-center text-[15px] font-extrabold text-white transition ${toneClass}`}
    >
      {children}
    </ExtLink>
  );
}

function ImagePending({ name }: { name: string }) {
  return (
    <div
      className="flex aspect-square items-center justify-center rounded-xl border border-dashed border-gray-300 bg-gray-50 p-4 text-center text-sm font-medium text-gray-800"
      role="img"
      aria-label={`${name}の画像準備中`}
    >
      画像準備中
    </div>
  );
}

function ProductCard({
  model,
  priority = false,
}: {
  model: string;
  priority?: boolean;
}) {
  const product = byModel[model];
  if (!product) return null;
  const hasImage = productImageExists(product.imageFile);
  const force = "maxForce" in product ? product.maxForce : undefined;
  const stroke = "stroke" in product ? product.stroke : undefined;
  const workHeight = "workHeight" in product ? product.workHeight : undefined;

  return (
    <article className="rounded-2xl border border-gray-300 bg-white p-5 shadow-sm md:p-6">
      <div className="grid gap-5 md:grid-cols-[180px_1fr] md:items-start">
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
          {hasImage ? (
            <Image
              src={PROD(product.imageFile)}
              alt={`${product.name}の商品画像`}
              width={400}
              height={400}
              priority={priority}
              className="h-auto w-full object-contain p-3"
            />
          ) : (
            <ImagePending name={product.name} />
          )}
        </div>
        <div>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-950">
              {product.badge}
            </span>
            <span className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-900">
              {product.displayModel}
            </span>
          </div>
          <h3 className="mt-3 text-[20px] font-extrabold leading-snug text-gray-900 md:text-[22px]">
            {product.name}
          </h3>
          <dl className="mt-4 space-y-2 text-[15px] leading-7 text-gray-900 md:text-[16px]">
            <div>
              <dt className="inline font-bold">方式：</dt>
              <dd className="inline">{product.subtype}</dd>
            </div>
            {force && force !== "—" ? (
              <div>
                <dt className="inline font-bold">最大推力／ストローク／ワークハイト：</dt>
                <dd className="inline">
                  {force} / {stroke} / {workHeight}
                </dd>
              </div>
            ) : null}
            <div>
              <dt className="inline font-bold">向く工程：</dt>
              <dd className="inline">{product.use}</dd>
            </div>
          </dl>
          <p className="mt-3 rounded-lg border border-amber-300 bg-amber-50 p-3 text-[15px] font-medium leading-6 text-amber-950">
            <strong>購入前確認：</strong>
            {product.check}
          </p>
          <div className="mt-5">
            <ExtButton href={product.url}>商品ページを見る →</ExtButton>
          </div>
        </div>
      </div>
    </article>
  );
}

function ProductTableCell({
  model,
  label,
}: {
  model: string;
  label: string;
}) {
  const product = byModel[model];
  if (!product) {
    return <span className="font-bold">{label}</span>;
  }
  const hasImage = productImageExists(product.imageFile);
  return (
    <a
      href={product.url}
      target="_blank"
      rel={EXT_REL}
      className="group flex min-w-[16rem] items-start gap-3 text-gray-900 no-underline"
    >
      <span className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-white">
        {hasImage ? (
          <Image
            src={PROD(product.imageFile)}
            alt={`${product.short}の商品画像`}
            fill
            sizes="80px"
            className="object-contain p-1.5"
          />
        ) : (
          <span className="flex h-full w-full items-center justify-center text-[10px] text-gray-800">
            準備中
          </span>
        )}
      </span>
      <span className="min-w-0">
        <span className="block font-black leading-6 group-hover:underline">
          {label}
        </span>
        <span className="mt-1 block text-[13px] leading-5 text-gray-900">
          {product.subtype}
        </span>
      </span>
    </a>
  );
}

function TopCta() {
  return (
    <aside className="my-8 rounded-2xl border-2 border-amber-300 bg-amber-50 p-5 md:p-6">
      <p className="mb-4 text-xl font-extrabold text-gray-900">
        まず商品を比較したい方へ
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        <ExtButton href={ctas.handPress.url}>{ctas.handPress.label} →</ExtButton>
        <ExtButton href={ctas.workbench.url} tone="dark">
          {ctas.workbench.label} →
        </ExtButton>
      </div>
    </aside>
  );
}

function FinalCta() {
  return (
    <aside className="my-10 rounded-2xl border-2 border-amber-400 bg-amber-50 p-6 md:p-8">
      <h3 className={cls.ctaH3}>商品をまとめて比較する</h3>
      <p className={`${cls.body} mb-5`}>
        圧入・挿入ならラックピニオン式、カシメ・打抜きならトグル式を入口にし、推力・ストローク・ワークハイト・治具まで確認して選定してください。
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        <ExtButton href={ctas.handPress.url}>{ctas.handPress.label} →</ExtButton>
        <ExtButton href={ctas.handTools.url}>{ctas.handTools.label} →</ExtButton>
        <ExtButton href={ctas.toolbox.url} tone="dark">
          {ctas.toolbox.label} →
        </ExtButton>
        <ExtButton href={ctas.cart.url} tone="dark">
          {ctas.cart.label} →
        </ExtButton>
        <ExtButton href={ctas.workbench.url} tone="dark">
          {ctas.workbench.label} →
        </ExtButton>
        <ExtButton href={ctas.trusco.url} tone="rose">
          {ctas.trusco.label} →
        </ExtButton>
      </div>
    </aside>
  );
}

export default function Page() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <SiteHeader />
      <main className="bg-white">
        <article className="mx-auto max-w-[850px] px-4 pb-16 pt-8 sm:px-6">
          <nav className={`${cls.meta} mb-6`} aria-label="パンくずリスト">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="underline-offset-2 hover:underline">
                  ホーム
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href="/articles"
                  className="underline-offset-2 hover:underline"
                >
                  記事一覧
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="font-bold text-gray-900">{SHORT_TITLE}</li>
            </ol>
          </nav>

          <p className="mb-3 text-sm font-bold tracking-wide text-amber-800">
            組立工程・圧入・生産改善
          </p>
          <h1 className={cls.h1}>{ARTICLE_TITLE}</h1>
          <p className={cls.meta}>公開日：{PUBLISHED.replace(/-/g, "/")} ／ 読了目安：約24分</p>

          <Figure
            src={IMG(HERO)}
            alt="小型部品の圧入作業をハンドプレスで行う製造現場のイメージ"
            priority
          />

          <P>
            小型部品の組立では、「手で押し込む」「ハンマーで叩く」「簡単な治具に当てて力をかける」といった作業が残っていることがあります。数個だけなら問題なくても、数量が増えると、押し込み深さのばらつき、部品の傾き、作業者の疲労、やり直しの増加が目立ってきます。
          </P>
          <P>
            その中間にある選択肢が<Mark>ハンドプレス</Mark>です。電源やエア源を必要としない手動式でも、ワークを治具に置き、レバー操作で垂直方向に力をかける形へ変えるだけで、手やハンマーだけの作業より工程を標準化しやすくなります。ただし、「大きな推力の機種を選べばよい」というほど単純ではありません。
          </P>
          <P>
            この記事では、仲精機のハンドプレスを中心に、<strong>どんな手作業をハンドプレスへ置き換えやすいか、ラックピニオン式とトグル式をどう使い分けるか、推力以外に何を確認するか</strong>を現場目線で整理します。
          </P>

          <section className="my-8 rounded-2xl border-2 border-gray-900 bg-gray-50 p-5 md:p-6">
            <h2 className="mb-4 text-2xl font-black tracking-wide text-gray-900 sm:text-3xl">
              先に結論：圧入ならラックピニオン、強いカシメ・打抜きならトグルをまず比較する
            </h2>
            <ul className={cls.list}>
              <li>
                <Mark>圧入・挿入</Mark>
                のようにストローク中の押し方を安定させたいなら、ラックピニオン式が第一候補です。
              </li>
              <li>
                <Mark>カシメ・打抜き・強い曲げ</Mark>
                のように下死点付近で大きな力が必要なら、トグル式が候補です。
              </li>
              <li>
                型式は最大推力だけではなく、
                <strong>ワーク高さ・必要ストローク・テーブル寸法・治具</strong>
                を含めて決めます。
              </li>
              <li>
                少量なら手作業のままでもよいですが、反復回数・ばらつき・身体負担が増えたらハンドプレス導入を検討します。
              </li>
            </ul>
          </section>

          <div className="my-6 overflow-x-auto rounded-xl border border-gray-300">
            <table className={cls.table}>
              <thead>
                <tr>
                  <th className={cls.th}>作業</th>
                  <th className={cls.th}>第一候補</th>
                  <th className={cls.th}>理由</th>
                </tr>
              </thead>
              <tbody>
                {workMapRows.map((row) => (
                  <tr key={row.work}>
                    <td className={cls.td}>{row.work}</td>
                    <td className={cls.td}>
                      <strong>{row.first}</strong>
                    </td>
                    <td className={cls.td}>{row.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <P>
            仲精機の公式情報でも、ラック＆ピニオン式はストローク全域で安定した推力を発揮し、トグル式はリンクが伸びきる位置で大きな力を発生する構造として説明されています。最終的には、<Mark>必要推力・ストローク・ワークハイト・テーブル寸法・治具</Mark>まで確認します。
          </P>

          <TopCta />

          <H2 id="signs">圧入の手作業がつらくなる4つのサイン</H2>
          <Figure
            src={IMG("manual-press-fit-before-improvement.jpg")}
            alt="手で押し込む部品の圧入で位置ずれや作業負担が生じるイメージ"
          />
          <P>
            ハンドプレスを検討すべきタイミングは、「作業者が大変そうだから」だけではありません。次のような変化が出たときは、工程そのものを見直すサインです。
          </P>
          <H3>1. 押し込み深さが人によって変わる</H3>
          <P>
            手で押し込む工程では、力のかけ方が作業者ごとに変わります。途中まで入りやすい部品でも、最後の数mmで力が必要になると、止め位置にばらつきが出やすくなります。圧入後の高さを検査して選別しているなら、加工前に工程を安定させる方が効率的です。
          </P>
          <H3>2. 部品が斜めに入る</H3>
          <P>
            圧入は力だけの問題ではありません。ワークと相手部品が傾いたまま力をかければ、噛み込みや傷につながります。ハンドプレスへ変える場合も、<strong>垂直に押す本体＋正しく置く治具</strong>をセットで考える必要があります。
          </P>
          <H3>3. ハンマー作業の音・打撃・ミスが気になる</H3>
          <P>
            カシメや挿入でハンマーを使っていると、打撃回数が作業者によって変わりやすく、周囲への騒音も発生します。レバー式のハンドプレスへ変えると、「何回叩いたか」ではなく、決めた位置まで一定の動作で押す工程へ変えやすくなります。
          </P>
          <H3>4. 数量が増えて腕や肩の負担が大きい</H3>
          <P>
            数十回、数百回と同じ作業を繰り返すと、力だけでなくハンドルの可動域も負担になります。改善では、本体の推力だけでなく、ハンドル操作、ワークの置き方、完成品の取り出し位置まで含めて見る必要があります。
          </P>

          <H2 id="what-changes">ハンドプレスを入れると何が変わる？</H2>
          <P>
            ハンドプレスは自動機ではありません。レバー操作は人が行います。それでも、手作業を「機械の直線運動」に置き換えることで、工程設計がしやすくなります。
          </P>
          <ul className={cls.list}>
            <li>
              <strong>力の方向を揃えやすい</strong>
              ：主軸が一定方向へ動くため、力を垂直にかけやすくなります。
            </li>
            <li>
              <strong>治具を固定しやすい</strong>
              ：ワーク受け、位置決めピン、当て治具などをテーブル側に設け、置く位置を固定できます。
            </li>
            <li>
              <strong>ストローク・下死点を管理しやすい</strong>
              ：機種やオプションによっては、微調整やリターンストロークロック、荷重管理を組み合わせられます。
            </li>
            <li>
              <strong>自動化より小さく始められる</strong>
              ：一日数十〜数百回程度で専用自動機まで要らない場合の中間改善策になります。
            </li>
          </ul>

          <H2 id="rack-vs-toggle">ラックピニオン式とトグル式の違い</H2>
          <div className="my-6 overflow-x-auto rounded-xl border border-gray-300">
            <table className={cls.table}>
              <thead>
                <tr>
                  <th className={cls.th}>方式</th>
                  <th className={cls.th}>力の出方</th>
                  <th className={cls.th}>向く工程</th>
                  <th className={cls.th}>注意点</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={cls.td}>
                    <strong>ラックピニオン</strong>
                  </td>
                  <td className={cls.td}>ストローク全域で安定</td>
                  <td className={cls.td}>圧入・挿入</td>
                  <td className={cls.td}>高推力モデルはトグルより選択肢が少ない場合がある</td>
                </tr>
                <tr>
                  <td className={cls.td}>
                    <strong>トグル</strong>
                  </td>
                  <td className={cls.td}>下死点付近で大きな力</td>
                  <td className={cls.td}>カシメ・打抜き・強い曲げ</td>
                  <td className={cls.td}>圧入の途中押し込みには向かないことがある</td>
                </tr>
              </tbody>
            </table>
          </div>
          <H3>ラックピニオン式：圧入・挿入のように「途中も押したい」作業向け</H3>
          <Figure
            src={IMG("rack-pinion-hand-press-press-fit.jpg")}
            alt="ラックピニオン式ハンドプレスでピンを一定深さまで圧入するイメージ"
          />
          <P>
            ラックピニオン式は、主軸側のラックギアとハンドル軸側のピニオンギアで主軸を動かします。仲精機では、<Mark>ストローク全域で安定した推力を発揮する</Mark>方式として案内しています。ベアリングの軽圧入、ピン・シャフトの圧入、部品の挿入、一定距離の押し込みなどと相性がよい方式です。
          </P>
          <H3>トグル式：下死点付近で強い力が欲しい作業向け</H3>
          <Figure
            src={IMG("toggle-hand-press-crimping.jpg")}
            alt="トグル式ハンドプレスでカシメ加工を行うイメージ"
          />
          <P>
            トグル式はリンク機構を使い、リンクが伸びきる位置で大きな力を発生させます。カシメ、薄板の打抜き、強い曲げ、最後の位置で大きな力をかける加工などで検討しやすくなります。
          </P>
          <H3>「トグルの方が推力が大きい＝圧入にも上位互換」ではない</H3>
          <P>
            トグル式は高推力モデルが多い一方、強い力が出る位置に特徴があります。圧入では、ストローク途中でも押し込み力が必要になることがあります。<strong>加工のどこで力が必要なのか</strong>まで見て方式を決めることが大切です。
          </P>

          <H2 id="five-points">圧入用ハンドプレスは「推力」だけで選ばない。5つの確認項目</H2>
          <ol className="my-4 list-decimal space-y-4 pl-6 text-[17px] leading-[1.95] tracking-[0.04em] text-gray-900">
            {selectionPoints.map((point, index) => (
              <li key={point.title}>
                <strong>
                  {index + 1}. {point.title}
                </strong>
                <br />
                {point.body}
              </li>
            ))}
          </ol>

          <H2 id="rack-models">ラックピニオン式を比較｜圧入で使いやすい代表モデル</H2>
          <P>
            メーカー公式値をもとに、代表モデルを比較すると次のようになります。NH202Sや精密ハンドプレスなど、今回一次情報で比較値を確定していない機種は、商品タイトルから仕様を推測せず一覧側で確認してください。
          </P>
          <div className="my-6 overflow-x-auto rounded-xl border border-gray-300">
            <table className={cls.table}>
              <thead>
                <tr>
                  <th className={cls.th}>型式</th>
                  <th className={cls.th}>最大推力</th>
                  <th className={cls.th}>ストローク</th>
                  <th className={cls.th}>ワークハイト</th>
                  <th className={cls.th}>テーブル</th>
                  <th className={cls.th}>重量</th>
                  <th className={cls.th}>選び方の目安</th>
                </tr>
              </thead>
              <tbody>
                {rackCompare.map((row) => {
                  const p = byModel[row.model];
                  return (
                    <tr key={row.model}>
                      <td className={cls.td}>
                        <ProductTableCell
                          model={row.model}
                          label={p?.displayModel ?? row.model}
                        />
                      </td>
                      <td className={cls.td}>
                        <Mark>{p?.maxForce}</Mark>
                      </td>
                      <td className={cls.td}>{p?.stroke}</td>
                      <td className={cls.td}>{p?.workHeight}</td>
                      <td className={cls.td}>{p?.table}</td>
                      <td className={cls.td}>{p?.weight}</td>
                      <td className={cls.td}>{row.guide}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="my-8 grid gap-5">
            <ProductCard model="HZP4" priority />
            <ProductCard model="HZP5" />
            <ProductCard model="HZP6" />
            <ProductCard model="NH202" />
          </div>
          <aside className="my-8 rounded-2xl border-2 border-amber-300 bg-amber-50 p-5">
            <p className="mb-4 text-lg font-extrabold text-gray-900">
              ラックピニオン式をまとめて比較する
            </p>
            <ExtButton href={ctas.handPress.url}>
              {ctas.handPress.label} →
            </ExtButton>
          </aside>

          <H2 id="toggle-models">トグル式を比較｜カシメ・打抜き・強い押し込み向け</H2>
          <P>
            トグル式は、高推力モデルの選択肢が多いのが特徴です。推力の数字だけで選ばず、ストロークの短さやワークハイトも合わせて見ます。
          </P>
          <div className="my-6 overflow-x-auto rounded-xl border border-gray-300">
            <table className={cls.table}>
              <thead>
                <tr>
                  <th className={cls.th}>型式</th>
                  <th className={cls.th}>最大推力</th>
                  <th className={cls.th}>ストローク</th>
                  <th className={cls.th}>ワークハイト</th>
                  <th className={cls.th}>重量</th>
                  <th className={cls.th}>向く検討例</th>
                </tr>
              </thead>
              <tbody>
                {toggleCompare.map((row) => {
                  const p = byModel[row.model];
                  return (
                    <tr key={row.model}>
                      <td className={cls.td}>
                        <ProductTableCell
                          model={row.model}
                          label={p?.displayModel ?? row.model}
                        />
                      </td>
                      <td className={cls.td}>
                        <Mark>{p?.maxForce}</Mark>
                      </td>
                      <td className={cls.td}>{p?.stroke}</td>
                      <td className={cls.td}>{p?.workHeight}</td>
                      <td className={cls.td}>{p?.weight}</td>
                      <td className={cls.td}>{row.guide}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="my-8 grid gap-5">
            <ProductCard model="RT501" />
            <ProductCard model="HZP13" />
            <ProductCard model="HZP14" />
            <ProductCard model="HZP17" />
          </div>
          <P>
            HZP-17は最大推力15kNと高い一方、ストロークは20mmです。「高推力だから万能」ではなく、<Mark>短い動作の中で大きな力を出したい工程か</Mark>を確認して選びます。
          </P>

          <H2 id="hatome">ハトメを大量に打つなら、汎用ハンドプレスとは別に専用機を考える</H2>
          <Figure
            src={IMG("hand-press-eyelet-production.jpg")}
            alt="専用ハンドプレスでシートへハトメを連続施工するイメージ"
          />
          <P>
            ハンドプレスと一口に言っても、圧入・曲げ・カシメ用の汎用型だけではありません。TRUSCOの<Mark>両面ハトメハンドプレス THP-HP</Mark>は大量のハトメ打ち向けとして案内され、専用コマを別途組み合わせる構成です。
          </P>
          <ProductCard model="THPHP" />
          <H3>本体＋コマの適合を先に確認する</H3>
          <P>
            ここでは、<strong>本体を買えばすべてのハトメが打てるわけではない</strong>点が重要です。実際に使うハトメの種類・サイズに対応した専用コマまで一緒に確認します。
          </P>
          <div className="my-6 overflow-x-auto rounded-xl border border-gray-300">
            <table className={cls.table}>
              <thead>
                <tr>
                  <th className={cls.th}>コマ</th>
                  <th className={cls.th}>用途</th>
                </tr>
              </thead>
              <tbody>
                {hatomeDies.map((row) => (
                  <tr key={row.model}>
                    <td className={cls.td}>
                      <ProductTableCell
                        model={row.model}
                        label={byModel[row.model]?.displayModel ?? row.model}
                      />
                    </td>
                    <td className={cls.td}>{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <H2 id="jig">治具・位置決め・下死点管理で品質が変わる</H2>
          <Figure
            src={IMG("hand-press-positioning-jig.jpg")}
            alt="ハンドプレス用治具でワークの位置を固定するイメージ"
          />
          <P>
            ハンドプレスを買っても、ワークを毎回手で目測位置に置いていたら、ばらつきは残ります。
          </P>
          <ul className={cls.list}>
            <li>
              <strong>位置決め治具</strong>
              ：ワークの基準面を決め、押す位置を毎回同じにします。特に小径ピン、端子、樹脂部品では斜め入り防止に重要です。
            </li>
            <li>
              <strong>受け治具</strong>
              ：下側の部品が変形しないよう荷重を受ける形状を作り、外観面を傷つけない材質も選定します。
            </li>
            <li>
              <strong>押し治具</strong>
              ：プレス主軸が部品に直接当たればよいとは限らず、押してよい面を確認して当たり面を作ります。
            </li>
            <li>
              <strong>下死点・ストローク管理</strong>
              ：リターンストロークロックや微調整機構、荷重測定用オプションの有無も、本体価格と同じくらい重要です。
            </li>
          </ul>

          <H2 id="workbench">作業台・配置まで含めて圧入工程を設計する</H2>
          <Figure
            src={IMG("hand-press-workstation-layout.jpg")}
            alt="ハンドプレスと作業台、部品トレーを効率よく配置した組立作業イメージ"
          />
          <P>
            ハンドプレスは、机に置けば終わりではありません。レバーへ力をかける機械なので、ぐらつく台では作業しにくくなります。機種重量やマウント寸法を確認し、必要に応じて固定します。
          </P>
          <H3>ワークの流れを一方向にする</H3>
          <ol className="my-4 list-decimal space-y-2 pl-6 text-[17px] leading-[1.95] tracking-[0.04em] text-gray-900">
            <li>左側から未加工品を取る</li>
            <li>治具へセット</li>
            <li>ハンドル操作</li>
            <li>右側へ完成品を置く</li>
          </ol>
          <P>
            本体を選ぶときは、機械スペックだけでなく、<Mark>人＋プレス＋作業台</Mark>で高さを決める方が実務的です。
          </P>
          <aside className="my-8 rounded-2xl border-2 border-amber-300 bg-amber-50 p-5">
            <p className="mb-4 text-lg font-extrabold text-gray-900">
              設置環境もあわせて確認
            </p>
            <ExtButton href={ctas.workbench.url}>
              {ctas.workbench.label} →
            </ExtButton>
          </aside>

          <H2 id="automation">ハンドプレスで足りないケース｜自動化へ移る基準</H2>
          <ul className={cls.list}>
            <li>
              <strong>一日の数量が多すぎる</strong>
              ：レバー操作自体がボトルネックになります。
            </li>
            <li>
              <strong>荷重波形・圧入深さを全数管理したい</strong>
              ：荷重管理付きプレス、電動・エア・サーボプレスなどが候補になります。
            </li>
            <li>
              <strong>強い荷重が必要</strong>
              ：ハンドプレスの範囲を超えるなら、無理にレバー力を上げず設備方式を変更します。
            </li>
            <li>
              <strong>タクトタイムをさらに短くしたい</strong>
              ：部品供給・位置決め・排出が手作業なら、次のボトルネックになります。
            </li>
          </ul>
          <P>
            <Mark>手作業→ハンドプレス→半自動・自動化</Mark>
            は一気に飛ぶのではなく、生産量と品質要求に合わせて段階的に考えるのが現実的です。
          </P>

          <H2 id="stage-compare">手作業・ハンドプレス・自動化を比較</H2>
          <div className="my-6 overflow-x-auto rounded-xl border border-gray-300">
            <table className={cls.table}>
              <thead>
                <tr>
                  <th className={cls.th}>項目</th>
                  <th className={cls.th}>手作業</th>
                  <th className={cls.th}>ハンドプレス</th>
                  <th className={cls.th}>自動化設備</th>
                </tr>
              </thead>
              <tbody>
                {stageCompare.map((row) => (
                  <tr key={row.item}>
                    <td className={cls.td}>
                      <strong>{row.item}</strong>
                    </td>
                    <td className={cls.td}>{row.hand}</td>
                    <td className={cls.td}>{row.press}</td>
                    <td className={cls.td}>{row.auto}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <H2 id="failures">よくある失敗</H2>
          <ul className={cls.list}>
            {failures.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <H2 id="checklist">法人で導入する前のチェックリスト</H2>
          <ul className="my-4 space-y-3">
            {checkItems.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 text-[16px] leading-7 text-gray-900"
              >
                <span
                  className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded border-2 border-gray-400 text-xs font-bold"
                  aria-hidden="true"
                >
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <H2 id="faq">FAQ</H2>
          <div className="my-6 space-y-6">
            {faqs.map((faq) => (
              <section key={faq.q}>
                <h3 className={cls.faqQ}>{faq.q}</h3>
                <P>{faq.a}</P>
              </section>
            ))}
          </div>

          <H2 id="summary">
            まとめ｜ハンドプレスは「大きな力を出す機械」ではなく、手作業を工程化する道具
          </H2>
          <P>
            圧入の手作業を改善するとき、ハンドプレスの価値は単に腕力を補うことではありません。
          </P>
          <ul className={cls.list}>
            <li>押す方向を揃える</li>
            <li>ワーク位置を治具で揃える</li>
            <li>押し込み量を管理する</li>
            <li>作業者の動きを揃える</li>
            <li>数量が増えたときの次の自動化につなげる</li>
          </ul>
          <P>
            という形で、<strong>人の感覚に依存した作業を、管理できる工程へ変えていくこと</strong>にあります。圧入・挿入ならラックピニオン式、カシメ・打抜きなどで大きな力が必要ならトグル式を入口にし、そのうえで推力・ストローク・ワークハイト・治具まで確認してください。
          </P>

          <FinalCta />

          <section className="mt-12 border-t border-gray-200 pt-8">
            <h2 className="mb-4 text-2xl font-black text-gray-900">関連記事</h2>
            <ul className="space-y-3">
              {relatedArticles.map((article) => (
                <li key={article.href}>
                  <Link
                    href={article.href}
                    className="font-bold text-gray-900 underline-offset-2 hover:underline"
                  >
                    {article.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10 rounded-2xl border border-gray-200 bg-gray-50 p-5">
            <h2 className="mb-3 text-xl font-black text-gray-900">
              参考にした一次情報
            </h2>
            <ul className={`${cls.list} mb-0`}>
              <li>仲精機「HAND PRESS 製品特徴」</li>
              <li>仲精機「ラックピニオンタイプ NH/HZP」</li>
              <li>仲精機「トグルタイプ RT/HZP」</li>
              <li>仲精機「HZPシリーズオプション」</li>
              <li>オレンジブック「TRUSCO 両面ハトメハンドプレス THP-HP」</li>
            </ul>
          </section>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
