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

const SLUG = "pipe-welding-alignment-clamp-guide";
const SITE_URL = "https://www.sagyou-navi.com";
const CANONICAL = `${SITE_URL}/articles/${SLUG}`;
const SEO_TITLE =
  "パイプ溶接の芯出し方法｜配管クランプ・固定治具の選び方【2026年】";
const H1 =
  "パイプ溶接の芯出し方法｜配管の固定・開先・仮付けを安定させる治具の選び方【2026年版】";
const SHORT_TITLE = "パイプ溶接の芯出し方法";
const DESCRIPTION =
  "パイプ溶接の芯出しは、溶接前の支持・固定・開先間隔・仮付けまでセットで考えることが重要です。国土交通省の管溶接仕様を踏まえ、WOC6/12、ISK-PC170E、WV6B、CPA60/120など芯出し治具の違いを適応径・作業性で比較。開先加工機やフランジ直角確認まで実務向けに整理します。";
const PUBLISHED = "2026-08-31";
const IMG = (file: string) => `/images/articles/${SLUG}/${file}`;
const PROD = (file: string) => `/images/articles/${SLUG}/products/${file}`;
const EXT_REL = "nofollow sponsored noopener";

type HeroProduct = (typeof productData.heroProducts)[number];
type CompareProduct = (typeof productData.comparisonProducts)[number];
type UpstreamProduct = (typeof productData.upstreamProducts)[number];
type InspectionProduct = (typeof productData.inspectionProducts)[number];
type AnyProduct =
  | HeroProduct
  | CompareProduct
  | UpstreamProduct
  | InspectionProduct;

const [woc6, woc12] = productData.heroProducts as HeroProduct[];
const [isk, wv6b, cpa60, cpa120] =
  productData.comparisonProducts as CompareProduct[];
const [fbm80, fbm300] = productData.upstreamProducts as UpstreamProduct[];
const ufsList = productData.inspectionProducts as InspectionProduct[];
const pipeWeldingCta = productData.ctas.pipe_welding;
const secondaryCtas = productData.ctas.secondary;
const manufacturerUrl = productData.manufacturerPrimary;

export const metadata: Metadata = {
  title: SEO_TITLE,
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: SEO_TITLE,
    description: DESCRIPTION,
    type: "article",
    url: CANONICAL,
    siteName: "作業用品ナビ",
    publishedTime: PUBLISHED,
    modifiedTime: PUBLISHED,
    images: [
      {
        url: `${SITE_URL}${IMG("pipe-welding-alignment-clamp-hero.webp")}`,
        width: 1600,
        height: 900,
        alt: "配管溶接前にパイプを支持して芯出しを確認する作業イメージ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SHORT_TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}${IMG("pipe-welding-alignment-clamp-hero.webp")}`],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: H1,
  description: DESCRIPTION,
  mainEntityOfPage: CANONICAL,
  image: [`${SITE_URL}${IMG("pipe-welding-alignment-clamp-hero.webp")}`],
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

const keyPoints = [
  "パイプをクランプする前に、まず受台等で安定して支持する。",
  "端面・開先の状態を確認してから、配管同士の軸を合わせる。",
  "芯出しクランプは、パイプ外径・開先間隔管理・着脱速度・持ち運びで選ぶ。",
  "WOC6はφ34～170mm、WOC12はφ110～320mmの固定・芯出しに対応する。",
  "開先間隔まで管理したい場合は、2mm / 4mmの隙間ゲージが付くISK-PC170Eのような製品も比較しやすい。",
  "仮付け後は、芯ずれ・位置・必要な直角等を再確認してから本溶接へ進む。",
];

const fourSteps = [
  {
    title: "端面・開先",
    body: "切断面と開先状態を先に確認。変形・不均一・仕様不一致のまま締めない。",
  },
  {
    title: "支持・固定",
    body: "受台等でパイプを安定して支持し、大まかな位置を作る。",
  },
  {
    title: "芯出し・開先間隔",
    body: "適応径に合う治具で軸合わせと必要な間隔を保持する。",
  },
  {
    title: "仮付け・再確認",
    body: "仮付け後に芯ずれ・方向・直角等を再確認してから本溶接へ。",
  },
];

const fiveQuestions = [
  {
    no: "1",
    question: "パイプの外径・呼び径は？",
    answer:
      "最優先。WOC6は1～6B・φ34～170mm、WOC12は4～12B・φ110～320mm。ISKは32～150A、WV6Bは25～150A。",
    hint: "呼び径と実外径は別物。現物を測って照合します。",
  },
  {
    no: "2",
    question: "鉄だけか、ステンレス配管も扱うか？",
    answer:
      "WOC6 / WOC12は、メーカー案内では鉄・ステンレス配管の両方に使用可能です。",
    hint: "母材と治具接触部の仕様は購入前に確認します。",
  },
  {
    no: "3",
    question: "開先間隔まで管理したいか？",
    answer:
      "隙間確認のしやすさが重要なら、2mm / 4mm隙間ゲージ付きのISK-PC170Eが比較候補。",
    hint: "必要な隙間寸法は付属ゲージではなく、図面・WPS・施工要領を優先。",
  },
  {
    no: "4",
    question: "現場持ち込み・出張修理が多いか？",
    answer: "携行性を見るならWV6B（2.3kg）が比較しやすい。",
    hint: "軽さだけでなく対応管径・支持方法・仮付けしやすさも確認。",
  },
  {
    no: "5",
    question: "仮付け後の着脱速度を重視するか？",
    answer:
      "繰り返し作業で外しやすさが効くなら、上下スライドのCPA60 / CPA120が候補。",
    hint: "「合わせる時間」だけでなく「外す時間」も段取りに含まれます。",
  },
];

const wocCompareRows = [
  { label: "適応呼び径", woc6: "1～6B", woc12: "4～12B" },
  { label: "適応外径", woc6: "34～170mm", woc12: "110～320mm" },
  {
    label: "用途",
    woc6: "小～中径の固定・芯出し",
    woc12: "中～大径の固定・芯出し",
  },
  { label: "鉄配管", woc6: "○", woc12: "○" },
  { label: "ステンレス配管", woc6: "○", woc12: "○" },
  { label: "早送り機構", woc6: "○", woc12: "○" },
];

const purposeRows: {
  product: AnyProduct;
  range: string;
  feature: string;
  fit: string;
}[] = [
  {
    product: woc6,
    range: "1～6B / φ34～170mm",
    feature: "早送り、鉄・SUS、ピース仮付け低減",
    fit: "小～中径の段取り効率化",
  },
  {
    product: woc12,
    range: "4～12B / φ110～320mm",
    feature: "WOC6の大径側",
    fit: "中～大径配管",
  },
  {
    product: isk,
    range: "32～150A",
    feature: "微調整、2/4mm隙間ゲージ",
    fit: "開先間隔も確認したい",
  },
  {
    product: wv6b,
    range: "25～150A / φ34～165mm",
    feature: "2.3kg、持ち運び",
    fit: "出張修理・現地仮付け",
  },
  {
    product: cpa60,
    range: "φ50～150mm",
    feature: "上下スライド",
    fit: "小～中径、着脱性",
  },
  {
    product: cpa120,
    range: "φ115～305mm",
    feature: "上下スライド、大径側",
    fit: "中～大径、着脱性",
  },
];

const failures = [
  {
    title: "クランプだけで重い管を引き寄せる",
    body: "先に受台等で支持し、大まかな位置を作ります。",
  },
  {
    title: "商品名だけでクランプを選ぶ",
    body: "外径・呼び径を必ず確認します。",
  },
  {
    title: "開先間隔をクランプ付属品だけで決める",
    body: "施工条件（図面・WPS・施工要領）が優先です。",
  },
  {
    title: "開先が不揃いなのに芯出しだけ合わせる",
    body: "端面・開先から確認します。",
  },
  {
    title: "仮付けした後に確認しない",
    body: "仮付け後にも位置を再確認します。",
  },
  {
    title: "WOC6とWOC12を「大きい方が万能」と考える",
    body: "適応範囲と作業性で選びます。",
  },
  {
    title: "持ち運ぶのに重量を見ない",
    body: "出張作業は携行性も重要です。",
  },
  {
    title: "溶接後の治具取り外しを考えない",
    body: "繰り返し作業では着脱性が段取り時間へ影響します。",
  },
  {
    title: "フランジの直角確認を省く",
    body: "芯出しと完成精度確認を分けます。",
  },
];

const checkGroups = [
  {
    title: "加工前",
    items: [
      "パイプ外径・呼び径",
      "母材",
      "図面・施工要領・WPS",
      "端面状態",
      "開先状態",
    ],
  },
  {
    title: "支持・芯出し",
    items: [
      "受台等で安定して支持",
      "クランプ適応径",
      "芯ずれ",
      "指定された開先間隔",
      "仮付け位置へアクセスできる",
    ],
  },
  {
    title: "仮付け後",
    items: [
      "芯ずれ再確認",
      "間隔再確認",
      "管の方向",
      "フランジ直角",
      "治具取り外し性",
    ],
  },
  {
    title: "安全",
    items: [
      "適切な溶接保護具（PPE）",
      "換気・ヒューム対策",
      "火気管理",
      "周辺作業者の保護・遮光",
      "資格・現場ルール確認",
    ],
  },
];

const faqs = [
  {
    q: "パイプ溶接の芯出しはどう行いますか？",
    a: "まず管を受台等で安定して支持し、端面・開先を確認したうえで、芯出し治具やクランプで管同士の軸と必要な間隔を保持します。仮付け後にもう一度位置を確認してから、本溶接へ進むのが基本的な考え方です。",
  },
  {
    q: "芯出しクランプを使うメリットは？",
    a: "位置を保持しやすくなり、仮付け中のずれを抑えやすくなります。製品によっては早送り、隙間ゲージ、着脱機構などがあり、段取り時間の短縮にもつながります。",
  },
  {
    q: "WOC6とWOC12はどう違いますか？",
    a: "WOC6は1～6B・φ34～170mm、WOC12は4～12B・φ110～320mmです。パイプ径で選びます。",
  },
  {
    q: "ステンレス配管でもWOCを使えますか？",
    a: "スーパーツールは、配管接触部にステンレス材を使用し、鉄・ステンレス配管の両方に使用可能と案内しています。",
  },
  {
    q: "ISK-PC170Eはどんな時に比較しやすいですか？",
    a: "芯出し・微調整に加えて、付属の2mm / 4mm隙間ゲージを使った確認を行いたい場合に比較しやすい製品です。必要な隙間寸法自体は施工条件を優先します。",
  },
  {
    q: "出張修理で持ち運びやすいものは？",
    a: "WV6Bは2.3kgで、メーカーも出張修理に向くコンパクトな保持具として案内しています。対応径を確認してください。",
  },
  {
    q: "クランプを使えば仮付け溶接は不要ですか？",
    a: "製品によって「ピースを使った仮付け溶接を減らせる」ものはありますが、管の溶接工程として必要な仮付けそのものが常に不要になるという意味ではありません。施工要領を優先してください。",
  },
  {
    q: "開先加工機はどんな時に検討しますか？",
    a: "切断後の端面・開先加工が繰り返し発生し、手加工の時間やばらつきが課題になっている場合に比較します。加工径・母材・必要形状を確認して選定します。",
  },
];

function productImageExists(file: string) {
  try {
    const filePath = path.join(
      process.cwd(),
      "public",
      "images",
      "articles",
      SLUG,
      "products",
      file
    );
    return fs.existsSync(filePath) && fs.statSync(filePath).size > 500;
  } catch {
    return false;
  }
}

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
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

function Figure({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="my-8 overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
      <div className="relative aspect-video">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 850px"
        />
      </div>
    </figure>
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

function PrimaryCta({ href, label }: { href: string; label: string }) {
  return (
    <ExtLink
      href={href}
      className="inline-flex min-h-12 items-center justify-center rounded-xl bg-amber-600 px-5 py-3 text-center text-[16px] font-extrabold text-white hover:bg-amber-700"
    >
      {label} →
    </ExtLink>
  );
}

function PrimaryCtaBlock({ heading, body }: { heading: string; body: string }) {
  return (
    <section className="my-10 rounded-2xl border-2 border-gray-900 bg-gray-950 p-6 text-white md:p-8">
      <h2 className="text-2xl font-black sm:text-3xl">{heading}</h2>
      <p className="mt-3 text-[16px] leading-7 text-gray-100">{body}</p>
      <div className="mt-5">
        <ExtLink
          href={pipeWeldingCta.url}
          className="inline-flex min-h-12 items-center justify-center rounded-xl bg-amber-500 px-5 py-3 text-[16px] font-extrabold text-gray-950 hover:bg-amber-400"
        >
          {pipeWeldingCta.label} →
        </ExtLink>
      </div>
    </section>
  );
}

function ProductCard({
  product,
  priority = false,
  specs,
}: {
  product: AnyProduct;
  priority?: boolean;
  specs: { label: string; value: string }[];
}) {
  const hasImage = productImageExists(product.image);
  return (
    <article className="rounded-2xl border-2 border-gray-300 bg-white p-5 shadow-sm md:p-6">
      <div className="grid gap-5 md:grid-cols-[180px_1fr] md:items-start">
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
          {hasImage ? (
            <Image
              src={PROD(product.image)}
              alt={`${product.name}の商品画像`}
              width={360}
              height={360}
              priority={priority}
              className="h-auto w-full object-contain p-3"
            />
          ) : (
            <div className="flex aspect-square items-center justify-center text-sm font-medium text-gray-800">
              画像準備中
            </div>
          )}
        </div>
        <div>
          <span className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-950">
            {product.badge}
          </span>
          <h3 className="mt-3 text-[20px] font-extrabold leading-snug text-gray-900 md:text-[22px]">
            {product.name}
          </h3>
          <p className="mt-2 text-[15px] leading-7 text-gray-900">
            {product.role}
          </p>
          <dl className="mt-4 space-y-2 text-[15px] leading-7 text-gray-900 md:text-[16px]">
            {specs.map((row) => (
              <div key={row.label}>
                <dt className="inline font-bold">{row.label}：</dt>
                <dd className="inline">
                  <Mark>{row.value}</Mark>
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-5">
            <PrimaryCta href={product.url} label={`${product.short}を見る`} />
          </div>
        </div>
      </div>
    </article>
  );
}

function ProductTableCell({ product }: { product: AnyProduct }) {
  const hasImage = productImageExists(product.image);
  return (
    <ExtLink
      href={product.url}
      className="group flex min-w-[16rem] items-start gap-3 rounded-lg p-1 no-underline transition hover:bg-gray-50"
    >
      <span className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-white">
        {hasImage ? (
          <Image
            src={PROD(product.image)}
            alt={`${product.short}の商品画像`}
            fill
            sizes="80px"
            className="object-contain p-1.5 transition group-hover:scale-105"
          />
        ) : (
          <span className="flex h-full w-full items-center justify-center text-[10px] text-gray-800">
            準備中
          </span>
        )}
      </span>
      <span className="min-w-0 space-y-1">
        <span className="block text-sm font-bold leading-snug text-gray-900 underline decoration-2 underline-offset-4">
          {product.short}
        </span>
        <span className="block text-xs font-bold text-gray-800">
          {product.name}
        </span>
      </span>
    </ExtLink>
  );
}

function FinalCtaBlock() {
  return (
    <section className="my-12 rounded-2xl border-2 border-amber-300 bg-amber-50 p-6 md:p-8">
      <h2 className="text-2xl font-black text-gray-900 sm:text-3xl">
        パイプ溶接の工具をまとめて確認
      </h2>
      <p className="mt-3 text-[16px] leading-7 text-gray-900">
        芯出しクランプ、開先加工機、測定工具まで、現場の前段取り一式を比較するならここから。
      </p>
      <div className="mt-5">
        <PrimaryCta
          href={pipeWeldingCta.url}
          label={pipeWeldingCta.label}
        />
      </div>
      <h3 className="mt-8 text-xl font-black text-gray-900">関連カテゴリ</h3>
      <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {secondaryCtas.map((cta) => (
          <div key={cta.label}>
            <ExtLink
              href={cta.url}
              className="inline-flex min-h-12 w-full items-center justify-center rounded-xl border-2 border-gray-900 bg-white px-4 py-3 text-center text-[15px] font-extrabold text-gray-900 hover:bg-gray-100"
            >
              {cta.label} →
            </ExtLink>
            {"note" in cta && cta.note ? (
              <p className="mt-2 text-[13px] leading-5 text-gray-900">
                ※ {cta.note}
              </p>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <>
      <SiteHeader />
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />

      <main className="bg-white text-gray-900">
        <div className="mx-auto max-w-5xl px-4 py-4 sm:px-6">
          <nav aria-label="パンくず" className={cls.meta}>
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="underline underline-offset-4">
                  ホーム
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/articles" className="underline underline-offset-4">
                  記事一覧
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>{SHORT_TITLE}</li>
            </ol>
          </nav>
        </div>

        <article className="mx-auto max-w-[850px] px-4 pb-16 sm:px-6">
          <header>
            <div className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-sm font-bold text-amber-950">
              配管・溶接前段取り / {PUBLISHED}更新
            </div>
            <h1 className={cls.h1}>{H1}</h1>
            <P>
              パイプの突合せ溶接で時間がかかるのは、アークを出している時間だけではありません。
            </P>
            <P>
              「管同士の芯がなかなか合わない」「仮付けしたら少しずれた」「開先の隙間を合わせ直している」「仮付け用のピースを付けて、最後にまたグラインダーで仕上げている」——こうした
              <Mark>溶接前の段取り</Mark>
              に時間を取られている現場は少なくありません。
            </P>
            <P>
              国土交通省の管溶接に関する仕様でも、突合せ溶接では受台や吊りボルト等を利用して芯合わせを行い、治具等で開先間隔を保持し、管相互に芯ずれがないよう仮付けする考え方が示されています。
            </P>
            <P>
              つまり、
              <Mark>パイプ溶接の芯出し</Mark>
              は「溶接工の感覚だけで合わせる工程」ではなく、
              <strong>
                支持する → 固定する → 芯を合わせる → 開先間隔を保つ →
                仮付け後に確認する
              </strong>
              という一連の前段取りとして考える方が分かりやすいのです。
            </P>
            <P>
              この記事では、パイプ溶接の芯出しを
              <Mark>4つの工程</Mark>
              に分け、WOC6 / WOC12、ISK-PC170E、WV6B、CPA60 /
              CPA120など、現場で比較しやすい治具の使い分けまで整理します。
            </P>
            <p className={`${cls.bodySm} mb-4 rounded-xl border border-amber-200 bg-amber-50 p-4`}>
              ※実際の開先形状、ルート間隔、仮付け方法、溶接条件は、
              <strong>図面・施工要領・WPS・現場規定・資格者の判断</strong>
              を優先してください。本記事では個別現場の溶接条件を指定しません。
            </p>
            <Figure
              src={IMG("pipe-welding-alignment-clamp-hero.webp")}
              alt="配管溶接前にパイプを支持して芯出しを確認する作業イメージ"
            />
          </header>

          <section
            id="key-points"
            className="my-10 rounded-2xl border-y-4 border-emerald-700 bg-emerald-50 p-6 md:p-8"
          >
            <h2 className="text-2xl font-black text-gray-900 sm:text-3xl">
              30秒で分かる｜パイプ溶接の芯出し
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-[17px] leading-8 text-gray-900">
              {keyPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <div className="mt-6">
              <PrimaryCta
                href={pipeWeldingCta.url}
                label={pipeWeldingCta.label}
              />
            </div>
          </section>

          <H2 id="why">パイプ溶接で「芯出し」が重要な理由</H2>
          <P>
            パイプ溶接は、2本の管を近づけてそのまま溶接すればよいわけではありません。溶接前の状態で、管の軸・端面・開先・隙間・固定状態が適切でなければ、後から溶接だけで帳尻を合わせるのは難しくなります。
          </P>
          <H3>芯出しは「中心を合わせる」だけではない</H3>
          <P>
            現場で「芯を出す」というと、管同士の中心線を合わせる意味で使われることが多いですが、実際の段取りではそれだけではありません。
          </P>
          <ul className={cls.list}>
            <li>高さが合っているか</li>
            <li>左右へずれていないか</li>
            <li>管端が傾いていないか</li>
            <li>開先間隔が必要な状態で保たれているか</li>
            <li>仮付け時に動かないか</li>
          </ul>
          <P>まで確認する必要があります。</P>
          <H3>国交省の管溶接仕様でも芯合わせと治具を明記</H3>
          <P>
            国土交通省の仕様では、管を突合せ溶接する場合、受台や吊りボルトを利用して芯合わせを行い、アダプタ等の治具や仮付けピース等で開先間隔を保持し、管相互に芯ずれがないよう仮付けする考え方が示されています。
          </P>
          <P>
            ここから分かるのは、
            <Mark>
              クランプは“溶接の代わり”ではなく、適切な位置を保つための段取り治具
            </Mark>
            だということです。
          </P>
          <ul className={cls.list}>
            {productData.officialSources.map((src) => (
              <li key={src.url}>
                <a
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline underline-offset-4"
                >
                  {src.label}
                </a>
              </li>
            ))}
          </ul>

          <H2 id="four-steps">芯出しは「溶接前4工程」で考える</H2>
          <Figure
            src={IMG("pipe-welding-preparation-alignment-workflow.webp")}
            alt="開先確認・支持・芯出し・仮付け確認を行うパイプ溶接前段取りイメージ"
          />
          <div className="my-8 border-y border-gray-300">
            {fourSteps.map((step, index) => (
              <div
                key={step.title}
                className="grid gap-3 border-b border-gray-200 py-5 last:border-b-0 sm:grid-cols-[56px_160px_1fr] sm:items-start"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-700 text-xl font-black text-white">
                  {index + 1}
                </div>
                <h3 className="text-xl font-black text-gray-900">
                  {step.title}
                </h3>
                <p className="text-[17px] leading-8 text-gray-900">
                  {step.body}
                </p>
              </div>
            ))}
          </div>

          <H3>STEP 1｜端面・開先を確認する</H3>
          <Figure
            src={IMG("pipe-bevel-preparation-before-welding.webp")}
            alt="パイプ溶接前に開先と端面状態を確認するイメージ"
          />
          <P>
            芯を合わせる前に、接合部そのものを確認します。端面に大きな変形がある、切断面が不均一、開先が施工条件と合っていない——この状態でクランプだけ締めても、芯出し作業が安定しません。
          </P>
          <P>
            日本溶接協会の資料でも、パイプ溶接では切断・開先加工が周辺技術として重要であり、切り管などでは切断後の開先加工が必要になることが説明されています。
          </P>
          <P>
            <Mark>
              開先形状は、母材、板厚、溶接方法、溶接姿勢等で変わります。
            </Mark>
            「何度にすればよい」「何mm空ければよい」と本記事だけで判断せず、図面やWPS等の指定を確認してください。
          </P>

          <H3>STEP 2｜パイプを支持して安定させる</H3>
          <P>
            次に重要なのが支持です。重いパイプをクランプだけで無理に引き寄せようとすると、クランプへ過大な力がかかる・位置が戻る・仮付け時に動く、といった問題につながります。
          </P>
          <P>
            国交省の仕様でも、受台等を使って芯合わせを行う考え方が示されています。つまり、
            <Mark>支持で大まかな位置を作り、クランプで細かく合わせる</Mark>
            と考えると分かりやすくなります。
          </P>

          <H3>STEP 3｜クランプで芯出し・開先間隔を保持する</H3>
          <Figure
            src={IMG("pipe-alignment-gap-check-before-tack.webp")}
            alt="配管の芯出しと開先間隔を仮付け前に確認するイメージ"
          />
          <P>
            ここで芯出しクランプの出番です。治具を選ぶ際に「パイプを挟めるか」だけを見るのではなく、適応外径・呼び径・微調整のしやすさ・開先間隔を確認できるか・仮付け部分へアクセスできるか・着脱速度を確認します。
          </P>

          <H3>STEP 4｜仮付け後にもう一度確認する</H3>
          <Figure
            src={IMG("pipe-tack-weld-alignment-recheck.webp")}
            alt="パイプ仮付け後に芯ずれと位置を再確認するイメージ"
          />
          <P>
            クランプを合わせた時点で完了ではありません。仮付けで熱が入れば、位置がわずかに動くことがあります。芯ずれ・開先間隔・方向・フランジの場合は直角などを必要に応じて再確認します。本溶接を始めてから気づくより、仮付け段階で確認する方が修正しやすくなります。
          </P>

          <section
            id="five-questions"
            className="my-14 scroll-mt-24 rounded-2xl border-4 border-emerald-700 bg-gradient-to-b from-emerald-50 to-white p-6 md:p-8"
          >
            <p className="text-sm font-bold uppercase tracking-wider text-emerald-800">
              この記事の最重要コンテンツ
            </p>
            <h2 className="mt-2 text-3xl font-black leading-snug text-gray-900 sm:text-4xl">
              芯出しクランプを選ぶ前の5つの質問
            </h2>
            <P>
              商品名だけを見ると、どれも「パイプ溶接用クランプ」に見えます。実際には向く作業が異なります。次の5問で整理してください。
            </P>
            <div className="mt-6 space-y-0 divide-y-2 divide-emerald-200 border-y-2 border-emerald-200">
              {fiveQuestions.map((item) => (
                <article
                  key={item.no}
                  className="grid gap-4 py-6 sm:grid-cols-[56px_1fr]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-700 text-xl font-black text-white sm:h-14 sm:w-14 sm:text-2xl">
                    {item.no}
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-gray-900 sm:text-2xl">
                      Q{item.no}. {item.question}
                    </h3>
                    <p className="mt-2 text-[17px] font-bold leading-8 text-gray-900">
                      → {item.answer}
                    </p>
                    <p className="mt-2 text-[15px] leading-7 text-gray-900">
                      {item.hint}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <H2 id="woc">
            主役｜WOC6 / WOC12は「固定・芯出しを素早くしたい」現場向け
          </H2>
          <P>
            今回の比較で、記事の主役として最も相性が良いのがスーパーツールの
            <Mark>パイプ溶接用外面クランプ “ブリッジ” WOC6 / WOC12</Mark>
            です。
          </P>
          <P>
            メーカー公式では、配管の固定・芯出し、早送り機構、鉄・ステンレス配管に対応、ピース使用の仮付け溶接不要、グラインダー仕上げ不要と案内されています。
          </P>
          <p className={`${cls.bodySm} mb-4`}>
            メーカー一次情報：
            <a
              href={manufacturerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 font-bold underline underline-offset-4"
            >
              スーパーツール WOCシリーズ
            </a>
          </p>

          <div className="my-8 grid gap-6">
            <ProductCard
              product={woc6}
              priority
              specs={[
                { label: "適応呼び径", value: woc6.pipeNominal },
                { label: "適応外径", value: woc6.pipeOd },
              ]}
            />
            <ProductCard
              product={woc12}
              specs={[
                { label: "適応呼び径", value: woc12.pipeNominal },
                { label: "適応外径", value: woc12.pipeOd },
              ]}
            />
          </div>

          <H3>WOC6とWOC12の比較</H3>
          <div className="my-6 overflow-x-auto rounded-2xl border border-gray-300">
            <table className={cls.table}>
              <thead>
                <tr>
                  <th className={cls.th}>項目</th>
                  <th className={cls.th}>WOC6</th>
                  <th className={cls.th}>WOC12</th>
                </tr>
              </thead>
              <tbody>
                {wocCompareRows.map((row) => (
                  <tr key={row.label}>
                    <td className={`${cls.td} font-bold`}>{row.label}</td>
                    <td className={cls.td}>{row.woc6}</td>
                    <td className={cls.td}>{row.woc12}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <H3>「仮付けピース不要」の意味</H3>
          <P>
            メーカーは、ピースを使った仮付け溶接と、その後のグラインダー仕上げが不要になる点を特徴として挙げています。毎回ピースを溶接して、終わったら除去し、仕上げる工程を繰り返している現場では、段取り時間を見直すきっかけになります。
          </P>
          <P>
            <Mark>
              もちろん、「配管同士の仮付け工程が全部不要」という意味ではありません。
            </Mark>
            現場の施工要領や管種、作業条件によって使用可否は異なるため、製品仕様と施工基準を確認してください。
          </P>

          <PrimaryCtaBlock
            heading="WOC6 / WOC12以外も含めて比較する"
            body="芯出しクランプ・開先加工機などをまとめて確認できます。"
          />

          <H2 id="isk">開先間隔まで管理したいならISK-PC170E</H2>
          <ProductCard
            product={isk}
            specs={[
              { label: "適合", value: isk.range },
              { label: "付属", value: isk.extra },
            ]}
          />
          <div className="mt-6">
            <P>
              育良 溶接用パイプクランプ
              ISK-PC170Eは、簡単操作で固定、芯出し・微調整、早送り機構、隙間ゲージ付きという特徴があります。
            </P>
          </div>
          <H3>WOCとの違いは「隙間管理を商品選びの軸にしやすい」こと</H3>
          <P>
            WOC6 / WOC12は幅広い外径を素早く固定・芯出ししたい時に比較しやすい製品です。ISK-PC170Eは、開先の隙間を確認しながら微調整したい作業で比較候補になります。
          </P>
          <P>
            ただし、実際に必要な開先間隔は製品付属ゲージの数値で決めるのではなく、
            <Mark>図面・施工要領等を優先</Mark>
            します。
          </P>

          <H2 id="wv6b">出張修理・持ち運びならWV6B</H2>
          <Figure
            src={IMG("field-pipe-repair-portable-alignment-tool.webp")}
            alt="設備保全の現場で持ち運び可能な芯出し治具を使うイメージ"
          />
          <ProductCard
            product={wv6b}
            specs={[
              { label: "適合", value: wv6b.range },
              { label: "質量", value: wv6b.extra },
            ]}
          />
          <div className="mt-6">
            <P>
              工場内だけでなく、現地修理・プラント保全・設備補修などで治具を持ち運ぶなら、重量とサイズも重要です。HIT
              パイプウェルディングバイス
              WV6Bは、芯出し・仮付け溶接用の保持具として、メーカー情報でもコンパクトで持ち運びがしやすく、出張修理に向くとされています。
            </P>
          </div>
          <H3>選ぶ時は「最軽量」だけを見ない</H3>
          <P>
            現場持ち込みでは軽さは重要ですが、対応管径・固定方法・パイプの支持方法・仮付けしやすさを合わせて確認します。
          </P>

          <H2 id="cpa">CPA60 / CPA120｜溶接後の抜き差しを重視</H2>
          <P>
            Strong Hand ToolsのCPAシリーズは、スムーズに上下へスライドし、溶接後の抜き差しを素早く行えることが特徴です。
          </P>
          <div className="my-8 grid gap-6">
            <ProductCard
              product={cpa60}
              specs={[
                { label: "適合外径", value: cpa60.range },
                { label: "最大口開き", value: cpa60.extra },
              ]}
            />
            <ProductCard
              product={cpa120}
              specs={[
                { label: "適合外径", value: cpa120.range },
                { label: "最大口開き", value: cpa120.extra },
              ]}
            />
          </div>
          <P>
            繰り返し固定・仮付けを行い、
            <Mark>
              「合わせる時間」だけでなく「外す時間」も短縮したい
            </Mark>
            場合に比較しやすいシリーズです。
          </P>

          <H2 id="compare">目的別｜パイプ溶接芯出し治具の比較</H2>
          <div className="my-6 overflow-x-auto rounded-2xl border border-gray-300">
            <table className={cls.table}>
              <thead>
                <tr>
                  <th className={cls.th}>製品</th>
                  <th className={cls.th}>主な適応範囲</th>
                  <th className={cls.th}>特徴</th>
                  <th className={cls.th}>向く場面</th>
                </tr>
              </thead>
              <tbody>
                {purposeRows.map((row) => (
                  <tr key={row.product.id}>
                    <td className={cls.td}>
                      <ProductTableCell product={row.product} />
                    </td>
                    <td className={cls.td}>
                      <Mark>{row.range}</Mark>
                    </td>
                    <td className={cls.td}>{row.feature}</td>
                    <td className={cls.td}>{row.fit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <P>
            「どれが一番良いか」ではなく、
            <Mark>管径と作業内容に合うものを選ぶ</Mark>
            ことが重要です。
          </P>

          <H2 id="bevel">芯出し前に見直したい「開先加工」</H2>
          <P>
            芯出し治具を高性能にしても、接合端面が施工条件に合っていなければ段取りは安定しません。国交省の仕様でも、開先加工は機械加工またはガス溶断加工等とし、必要な仕上げを行う考え方が示されています。
          </P>
          <H3>グラインダー手加工だけで時間がかかっているなら</H3>
          <P>
            加工本数が少ない現場では手加工が適する場合もあります。一方、同じ管径を繰り返す・開先品質のばらつきを減らしたい・大径管・加工時間が長い場合には、開先加工機の導入を比較する余地があります。
          </P>
          <div className="my-8 grid gap-6">
            <ProductCard
              product={fbm80}
              specs={[{ label: "内径", value: fbm80.range }]}
            />
            <ProductCard
              product={fbm300}
              specs={[{ label: "内径", value: fbm300.range }]}
            />
          </div>
          <P>
            不二空機はFBM-300-4について、内径チャッキング機構と反力受を備え、パイプの平面・外面・内面の開先用途に使う製品として案内しています。
          </P>
          <div className="my-6">
            <PrimaryCta
              href={
                secondaryCtas.find((c) => c.label === "切削工具")?.url ??
                pipeWeldingCta.url
              }
              label="切削工具一覧を見る"
            />
          </div>

          <H2 id="flange">フランジ溶接は「芯出し」と「直角確認」を分ける</H2>
          <Figure
            src={IMG("flange-welding-square-inspection.webp")}
            alt="フランジ溶接後に専用スコヤーで直角精度を確認するイメージ"
          />
          <P>
            フランジをパイプへ溶接する場合、芯を合わせる工程と、完成後の直角精度確認は同じではありません。ユニセイキのフランジスコヤーは、フランジのパイプ溶接後の直角精度確認に使う測定工具です。
          </P>
          <div className="my-8 grid gap-6">
            {ufsList.map((ufs) => (
              <ProductCard
                key={ufs.id}
                product={ufs}
                specs={[{ label: "サイズ・精度", value: ufs.range }]}
              />
            ))}
          </div>
          <P>
            <Mark>
              「芯が合っているから直角も合っている」と考えず、必要な完成精度を別工程で確認します。
            </Mark>
          </P>

          <H2 id="failures">パイプ溶接でよくある段取りの失敗</H2>
          <ol className="mt-5 grid gap-3">
            {failures.map((item, index) => (
              <li
                key={item.title}
                className="grid grid-cols-[2.5rem_1fr] gap-3 rounded-xl border border-gray-200 p-4"
              >
                <span className="font-black text-gray-800">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>
                  <span className="block font-black text-gray-900">
                    {item.title}
                  </span>
                  <span className="mt-1 block text-[15px] leading-7 text-gray-900">
                    {item.body}
                  </span>
                </span>
              </li>
            ))}
          </ol>

          <H2 id="checklist">現場で使えるチェックリスト</H2>
          <Figure
            src={IMG("pipe-welding-tools-organized-workstation.webp")}
            alt="パイプ溶接の開先・芯出し・測定工具を整理して準備する現場イメージ"
          />
          <div className="my-8 grid gap-6 md:grid-cols-2">
            {checkGroups.map((group) => (
              <section
                key={group.title}
                className="rounded-2xl border border-gray-300 bg-white p-5"
              >
                <h3 className="text-xl font-black text-gray-900">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-[15px] leading-7 text-gray-900"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-1 inline-block h-4 w-4 shrink-0 rounded border-2 border-gray-900"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <H2 id="faq">よくある質問</H2>
          <div className="my-6 space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q}>
                <h3 className={cls.faqQ}>{faq.q}</h3>
                <P>{faq.a}</P>
              </div>
            ))}
          </div>

          <H2 id="summary">
            まとめ｜パイプ溶接の芯出しは「クランプを買う」より前段取り全体で考える
          </H2>
          <P>
            パイプ溶接の芯出しで重要なのは、クランプを強く締めることではありません。
          </P>
          <ol className="my-4 list-decimal space-y-2 pl-6 text-[17px] leading-[1.95] tracking-[0.04em] text-gray-900">
            <li>
              <Mark>端面・開先を確認する</Mark>
            </li>
            <li>
              <Mark>パイプを安定して支持する</Mark>
            </li>
            <li>
              <Mark>管径に合う治具で芯と間隔を保持する</Mark>
            </li>
            <li>
              <Mark>仮付け後にもう一度確認する</Mark>
            </li>
          </ol>
          <P>
            この4工程で考えると、治具の選び方も明確になります。小～中径の素早い固定ならWOC6。中～大径ならWOC12。隙間確認まで行うならISK-PC170E。現場持ち込みならWV6B。着脱性ならCPAシリーズ。
          </P>
          <P>
            さらに、前工程の開先加工、後工程のフランジ直角確認まで含めて道具を揃えると、溶接前後の段取りを一貫して見直せます。
          </P>

          <FinalCtaBlock />
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
