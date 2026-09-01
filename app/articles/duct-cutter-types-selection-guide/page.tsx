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

const SLUG = "duct-cutter-types-selection-guide";
const SITE_URL = "https://www.sagyou-navi.com";
const CANONICAL = `${SITE_URL}/articles/${SLUG}`;
const SEO_TITLE =
  "ダクトカッターとは？エアコン・配線ダクトの違いと選び方【2026年】";
const H1 =
  "ダクトカッターとは？エアコン・配線ダクトの種類と選び方｜おすすめ8機種を用途別比較【2026年版】";
const SHORT_TITLE = "ダクトカッターの種類と選び方";
const DESCRIPTION =
  "ダクトカッターは、エアコン配管化粧カバー用、配線ダクト・モール用、電線引出口加工用で選ぶ工具が異なります。TOP DC-100M/DC-120PJ、MCC ADC-101、Victor VD2100/2200、Merry LDC110/SX25、篠原電機DCF-80を用途・対応ダクト・切断能力で比較。使い方、冬の割れ対策、替刃の選び方まで解説します。";
const PUBLISHED = "2026-09-01";
const IMG = (file: string) => `/images/articles/${SLUG}/${file}`;
const PROD = (file: string) => `/images/articles/${SLUG}/products/${file}`;
const EXT_REL = "nofollow sponsored noopener noreferrer";

type MainProduct = (typeof productData.mainProducts)[number];

const [
  dc100m,
  dc120pj,
  adc101,
  vd2100,
  vd2200,
  ldc110,
  sx25,
  dcf80,
] = productData.mainProducts as MainProduct[];
const x25 = productData.replacementBlade.x25;
const primaryCta = productData.ctas.primary;
const secondaryCtas = productData.ctas.secondary;

const typeRows = [
  [
    "エアコン用",
    "樹脂製配管化粧カバーを横断切断",
    "DC-100M / DC-120PJ / ADC-101 / VD2100・2200",
  ],
  [
    "配線ダクト用",
    "配線ダクト・床モールを長さ/角度切断",
    "LDC110 / SX25",
  ],
  [
    "引出口加工用",
    "配線ダクトの電線引出口を加工",
    "DCF-80",
  ],
] as const;

const faqs = [
  {
    q: "ダクトカッターとは何ですか？",
    a: "エアコンの樹脂製配管化粧カバーや、電気工事の配線ダクト・モールなどを切断する専用手工具です。対象ダクトによって工具の種類が異なります。",
  },
  {
    q: "エアコン用と配線ダクト用は兼用できますか？",
    a: "原則、用途・対応ダクトを確認して選びます。受け形状や刃の設計が異なるため、商品名だけで兼用判断しないでください。",
  },
  {
    q: "DC-100MとDC-120PJの違いは？",
    a: "DC-100MはINABAのMD/LD/SDなど幅広い定番ダクト向け。DC-120PJはPD-90/120とJD-13/20/25向けです。",
  },
  {
    q: "ADC-101のメリットは？",
    a: "INABA、Panasonic、INOAC、オーケー器材など多数のダクト型番へ対応し、ラチェット・ワンタッチオープン・割れ防止刃を備える点です。",
  },
  {
    q: "配線ダクトを切るならLDC110とDCF-80どちら？",
    a: "長さを切るならLDC110、電線引出口を作るならDCF-80です。用途が違います。",
  },
  {
    q: "冬にダクトが割れます。どうすればよいですか？",
    a: "TOP工業は、低温時は試し切りし、割れる場合はさらにゆっくり切るか切断部を温めるよう案内しています。切り始め・切り終わりは特にゆっくり操作してください。",
  },
  {
    q: "替刃は研いで再利用できますか？",
    a: "製品によります。TOP工業は再研磨しないよう明記しています。指定替刃を使用してください。",
  },
  {
    q: "ダクトカッターで金属ダクトも切れますか？",
    a: "今回紹介する製品は主に樹脂製ダクト・モール向けです。金属ダクトや鉄線へ自己判断で使用しないでください。",
  },
] as const;

const checkItems = [
  "エアコンダクトか配線ダクトか",
  "ダクト全体を切るか、引出口を作るか",
  "メーカー名",
  "ダクト型番",
  "ダクト幅",
  "ベース・カバー同時切断が必要か",
  "45°切りが必要か",
  "替刃が入手できるか",
  "本体重量",
  "冬季施工が多いか",
  "保護メガネ・手袋を準備できるか",
] as const;

const failureItems = [
  {
    title: "エアコン用と配線用を同じだと思う",
    body: "最も多い誤解です。受け形状と刃が異なります。",
  },
  {
    title: "対応ダクト型番を確認しない",
    body: "同じような幅でも受け形状が合わない場合があります。",
  },
  {
    title: "2枚重ねできないダクトを無理に重ねる",
    body: "MCC ADC-101でも一部型番は1枚ずつの指定があります。",
  },
  {
    title: "冬に一気に強く握る",
    body: "樹脂ダクトの割れの原因になります。",
  },
  {
    title: "DCF-80をダクト全体の横断切断用だと思う",
    body: "引出口加工専用です。LDC110やSX25とは用途が違います。",
  },
  {
    title: "切れ味が悪いのに使い続ける",
    body: "材料割れや仕上がり悪化につながります。",
  },
  {
    title: "金属ダクト・鉄線まで切る",
    body: "LDC110も鉄線・鋼線は切断不可とされています。",
  },
] as const;

const relatedArticles = [
  {
    href: "/articles/digital-manifold-selection",
    label: "デジタルマニホールドの選び方",
  },
  {
    href: "/articles/electrical-crimping-work-efficiency-guide",
    label: "電気工事の圧着作業効率化ガイド",
  },
  {
    href: "/articles/cable-cutter-selection",
    label: "ケーブルカッターの選び方",
  },
  {
    href: "/articles/safety-glasses-single-vs-double-lens-selection-guide",
    label: "保護メガネは一眼型・二眼型どっち？",
  },
] as const;

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
        url: `${SITE_URL}${IMG("duct-cutter-guide-hero.webp")}`,
        width: 1600,
        height: 900,
        alt: "エアコンダクトと配線ダクトの切断作業に使うダクトカッターのイメージ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}${IMG("duct-cutter-guide-hero.webp")}`],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: H1,
  description: DESCRIPTION,
  mainEntityOfPage: CANONICAL,
  image: [`${SITE_URL}${IMG("duct-cutter-guide-hero.webp")}`],
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

function MidCta() {
  return (
    <section className="my-10 rounded-2xl border-2 border-gray-900 bg-gray-950 p-6 text-white md:p-8">
      <h2 className="text-2xl font-black sm:text-3xl">
        ダクトカッターを用途別に比較する
      </h2>
      <p className="mt-3 text-[16px] leading-7 text-gray-100">
        エアコン用・配線ダクト用・引出口加工用を分けて、自社で使うダクト型番に合う工具を確認できます。
      </p>
      <div className="mt-5">
        <ExtLink
          href={primaryCta.url}
          className="inline-flex min-h-12 items-center justify-center rounded-xl bg-amber-500 px-5 py-3 text-[16px] font-extrabold text-gray-950 hover:bg-amber-400"
        >
          {primaryCta.label} →
        </ExtLink>
      </div>
    </section>
  );
}

function specRows(
  rows: { label: string; value: string | undefined }[]
): { label: string; value: string }[] {
  return rows
    .filter((row): row is { label: string; value: string } => Boolean(row.value))
    .map((row) => ({ label: row.label, value: row.value }));
}

function ProductCard({
  product,
  priority = false,
  specs,
  note,
}: {
  product: MainProduct;
  priority?: boolean;
  specs: { label: string; value: string }[];
  note?: string;
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
          {note ? (
            <p className="mt-3 rounded-lg border border-amber-200 bg-amber-50 p-3 text-[14px] leading-6 text-gray-900">
              {note}
            </p>
          ) : null}
          <div className="mt-5">
            <PrimaryCta href={product.url} label={`${product.short}を見る`} />
          </div>
        </div>
      </div>
    </article>
  );
}

function ProductTableCell({ product }: { product: MainProduct }) {
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
        ダクトカッターをまとめて比較
      </h2>
      <p className="mt-3 text-[16px] leading-7 text-gray-900">
        「ダクトカッター」という名前ではなく、切るダクトのメーカー・型番から工具を選んでください。
      </p>
      <div className="mt-5">
        <PrimaryCta href={primaryCta.url} label={primaryCta.label} />
      </div>
      <h3 className="mt-8 text-xl font-black text-gray-900">関連カテゴリ</h3>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        {secondaryCtas.map((cta) => (
          <ExtLink
            key={cta.label}
            href={cta.url}
            className="inline-flex min-h-12 w-full items-center justify-center rounded-xl border-2 border-gray-900 bg-white px-4 py-3 text-center text-[15px] font-extrabold text-gray-900 hover:bg-gray-100"
          >
            {cta.label} →
          </ExtLink>
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
              電設・空調工具 / {PUBLISHED}更新
            </div>
            <h1 className={cls.h1}>{H1}</h1>
            <P>
              「ダクトカッターを探したら、エアコン用、配線ダクト用、モール用など種類が多く、どれを買えばいいか分からない」——そう感じる方は多いはずです。
            </P>
            <P>
              ダクトカッターで最も失敗しやすいのは、
              <Mark>“ダクト”という名前だけで工具を選んでしまうこと</Mark>
              です。エアコン工事の樹脂製配管化粧カバーと、制御盤・電気工事の配線ダクトは別物です。
            </P>
            <P>
              さらに配線ダクトでも、「ダクト全体を横断切断する工具」と「電線引出口だけを作る工具」は用途が違います。この記事では、
              <Mark>
                ダクトカッターを3種類に分け、TOP、MCC、Victor、Merry、SHINOHARAの主要製品8機種を用途・対応ダクト・切断能力で比較
              </Mark>
              します。
            </P>
            <Figure
              src={IMG("duct-cutter-guide-hero.webp")}
              alt="エアコンダクトと配線ダクトの切断作業に使うダクトカッターのイメージ"
              priority
            />
          </header>

          <section className="mt-8 rounded-2xl border-2 border-amber-400 bg-slate-950 p-6 text-white md:p-8">
            <p className="text-sm font-bold text-amber-300">
              30秒で分かる｜ダクトカッターの選び方
            </p>
            <h2 className="mt-2 text-[23px] font-extrabold leading-tight md:text-[28px]">
              切るダクトから逆引きして選ぶ
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-[16px] leading-8 text-white md:text-[17px]">
              <li>
                エアコンの樹脂製配管化粧カバー →{" "}
                <Mark>DC-100M / DC-120PJ / ADC-101 / VD2100・2200</Mark>
              </li>
              <li>
                配線ダクト・床モールの横断切断 → <Mark>LDC110 / SX25</Mark>
              </li>
              <li>
                配線ダクトの電線引出口 → <Mark>DCF-80</Mark>
              </li>
              <li>
                商品名だけで選ばず、
                <Mark>ダクトメーカー・型番・幅を先に確認</Mark>
              </li>
              <li>
                冬・低温時は樹脂ダクトが割れやすい。メーカー指示に従いゆっくり切断
              </li>
              <li>
                切れ味が落ちたら、再研磨ではなく指定替刃へ交換するモデルがある
              </li>
            </ul>
            <div className="mt-6">
              <PrimaryCta href={primaryCta.url} label={primaryCta.label} />
            </div>
          </section>

          <H2 id="three-types">重要｜ダクトカッターは3種類に分けて考える</H2>
          <P>
            検索結果に「ダクトカッター」と出てきても、中身はエアコン用・配線用・引出口加工用でまったく異なります。まずこの3系統で整理してください。
          </P>
          <div className="my-6 overflow-x-auto">
            <table className={`${cls.table} min-w-[680px]`}>
              <thead>
                <tr>
                  <th className={cls.th}>種類</th>
                  <th className={cls.th}>用途</th>
                  <th className={cls.th}>代表機種</th>
                </tr>
              </thead>
              <tbody>
                {typeRows.map((row) => (
                  <tr key={row[0]}>
                    <td className={`${cls.td} font-black`}>{row[0]}</td>
                    <td className={cls.td}>{row[1]}</td>
                    <td className={cls.td}>{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <H3>1. エアコン用樹脂ダクトを切るタイプ</H3>
          <Figure
            src={IMG("aircon-duct-cover-cutting.webp")}
            alt="エアコン用樹脂製配管化粧カバーを専用カッターで切るイメージ"
          />
          <P>
            家庭用・業務用エアコンの冷媒配管を隠す
            <Mark>樹脂製配管化粧カバー</Mark>
            を切る工具です。代表例はTOP DC-100M、DC-120PJ、MCC ADC-101、Victor
            VD2100 / VD2200。モデルによっては
            <Mark>ベースとカバーを2枚重ねて切断</Mark>
            できます。
          </P>

          <H3>2. 配線ダクト・床配線モールを横断切断するタイプ</H3>
          <Figure
            src={IMG("wiring-duct-cutter-work.webp")}
            alt="配線ダクトを必要な長さに切断するイメージ"
          />
          <P>
            制御盤の配線ダクトや床配線モール・ケーブルプロテクターを必要な長さへ切る用途です。代表例はMerry
            LDC110とSX25。LDC110は直角・45°切り、SX25は幅広で薄い樹脂製品向けのロングブレード型です。
          </P>

          <H3>3. 配線ダクトの「引出口」を作る専用タイプ</H3>
          <Figure
            src={IMG("wiring-duct-wire-exit-notch.webp")}
            alt="配線ダクトに電線引出口を加工するイメージ"
          />
          <P>
            SHINOHARA DCF-80は配線ダクトを横断切断する工具ではありません。
            <Mark>塩ビ配線ダクトの電線引出口をワンパンチで加工する専用工具</Mark>
            です。「配線ダクトカッター」と書かれているからLDC110と同じ用途だと思うと誤購入につながります。
          </P>

          <H2 id="five-questions">ダクトカッターを選ぶ前の5つの質問</H2>

          <H3>Q1. 切るのはエアコンダクトですか、配線ダクトですか？</H3>
          <P>
            最初にここを分けます。エアコン用のスリムダクト・スッキリダクト等なら
            <Mark>エアコンダクトカッター</Mark>
            。配線ダクト・モールならMerry系やDCF-80を比較します。
          </P>

          <H3>Q2. ダクト全体を横断しますか、引出口だけを作りますか？</H3>
          <P>
            配線ダクトの場合、長さを切る作業と電線引出口を作る作業は別工具です。横断切断→LDC110
            / SX25、引出口→DCF-80。
          </P>

          <H3>Q3. 使うダクトのメーカー・型番は？</H3>
          <P>
            エアコンダクトカッターは「幅が近いから使えるだろう」と判断しない方が安全です。INABA、Panasonic、INOAC、オーケー器材など、
            <Mark>使うダクト型番を先に確認してから工具を選ぶ</Mark>
            のが基本です。
          </P>

          <H3>Q4. ベースとカバーを重ねて切りたいですか？</H3>
          <Figure
            src={IMG("duct-base-cover-simultaneous-cut.webp")}
            alt="エアコンダクトのベースとカバーを重ねて切るイメージ"
          />
          <P>
            TOP DC-100Mは対応ダクトでベースとフタを2枚重ねて切断できます。MCC
            ADC-101も多くの型番でベース・カバー同時切断が可能ですが、一部型番は1枚ずつ切る指定があります。
          </P>

          <H3>Q5. 45°切り・替刃交換が必要ですか？</H3>
          <Figure
            src={IMG("wiring-molding-45-degree-cut.webp")}
            alt="配線モールを45度に切断してコーナー加工するイメージ"
          />
          <P>
            床配線モールや配線ダクトの角度加工ならLDC110、SX25が比較候補です。長く使うなら替刃を入手できるかも確認します。
          </P>

          <H2 id="aircon">エアコンダクトカッターの選び方</H2>
          <P>
            エアコン配管化粧カバー用のダクトカッターは、対応ダクト型番表を必ず確認してください。以下4メーカー5機種を比較します。
          </P>

          <ProductCard
            product={dc100m}
            priority
            specs={specRows([
              { label: "全長", value: dc100m.specs.length },
              { label: "重量", value: dc100m.specs.weight },
              { label: "替刃", value: dc100m.specs.blade },
              { label: "特徴", value: dc100m.specs.feature },
            ])}
            note="DC-100Mはエアコン用樹脂製配管化粧カバー専用。INABA DENKO推奨品。主な対象はINABAスリムダクトMD/LD/SD、PanasonicスッキリダクトDAS、INOACクリーンダクトDDなど。"
          />
          <H3>DC-100Mが向く人</H3>
          <ul className={cls.list}>
            <li>INABA系スリムダクトの使用頻度が高い</li>
            <li>ベースとカバーをまとめて切って段取りを減らしたい</li>
            <li>バリ処理の手間を減らしたい</li>
          </ul>

          <div className="my-8">
            <ProductCard
              product={dc120pj}
              specs={specRows([
                { label: "全長", value: dc120pj.specs.length },
                { label: "重量", value: dc120pj.specs.weight },
                { label: "特徴", value: dc120pj.specs.feature },
              ])}
              note="DC-120PJはPD/JD専用。DC-100Mと「どちらが上位」ではなく、使うダクトシリーズで選ぶ製品です。"
            />
          </div>

          <div className="my-8">
            <ProductCard
              product={adc101}
              specs={specRows([
                { label: "全長", value: adc101.specs.length },
                { label: "重量", value: adc101.specs.weight },
                { label: "特徴", value: adc101.specs.feature },
              ])}
              note="INABA MD-751/851や一部オーケー器材品番はベース・カバーを1枚ずつ切断する指定があります。型番表で確認してください。"
            />
          </div>

          <div className="my-8">
            <ProductCard
              product={vd2100}
              specs={specRows([
                { label: "全長", value: vd2100.specs.length },
                { label: "重量", value: vd2100.specs.weight },
                { label: "替刃", value: vd2100.specs.replacement },
                { label: "特徴", value: vd2100.specs.feature },
              ])}
            />
          </div>

          <div className="my-8">
            <ProductCard
              product={vd2200}
              specs={specRows([
                { label: "全長", value: vd2200.specs.length },
                { label: "重量", value: vd2200.specs.weight },
                { label: "替刃", value: vd2200.specs.replacement },
                { label: "特徴", value: vd2200.specs.feature },
              ])}
              note="VD2100とVD2200は外形スペックが近いため、自分が使うダクト型番が公式ワーク適応図のどちらに入っているかを見て選ぶのが確実です。"
            />
          </div>

          <H2 id="wiring">配線ダクト・モールならLDC110 / SX25</H2>
          <P>
            <Mark>配線ダクトカッター</Mark>
            として検索される工具の多くは、このカテゴリに入ります。鉄線・鋼線は切断不可のモデルがあるため、用途を確認してください。
          </P>

          <div className="my-8">
            <ProductCard
              product={ldc110}
              specs={specRows([
                { label: "全長", value: ldc110.specs.length },
                { label: "重量", value: ldc110.specs.weight },
                { label: "替刃", value: ldc110.specs.replacement },
                { label: "特徴", value: ldc110.specs.feature },
              ])}
              note="LDC110は鉄線・鋼線不可。刃がR形状で材料へ食い込みやすく、ラチェットで段階的に切断します。"
            />
          </div>

          <div className="my-8">
            <ProductCard
              product={sx25}
              specs={specRows([
                { label: "全長", value: sx25.specs.length },
                { label: "重量", value: sx25.specs.weight },
                { label: "刃長", value: sx25.specs.bladeLength },
                { label: "刃開き", value: sx25.specs.opening },
                { label: "替刃", value: sx25.specs.replacement },
                { label: "特徴", value: sx25.specs.feature },
              ])}
            />
          </div>

          <H2 id="dcf80">DCF-80は「配線ダクトを横断する工具」ではない</H2>
          <P>
            SHINOHARA DCF-80は、塩ビ配線ダクトの
            <Mark>電線引出口切断専用</Mark>
            です。ニッパーで何度も横から刃を入れ、最後にヤスリ仕上げしていた部分をワンパンチで加工することを目的としています。
          </P>

          <ProductCard
            product={dcf80}
            specs={specRows([
              { label: "全長", value: dcf80.specs.length },
              { label: "重量", value: dcf80.specs.weight },
              { label: "刃幅", value: dcf80.specs.bladeWidth },
              { label: "特徴", value: dcf80.specs.feature },
            ])}
            note="LDC110やSX25とは用途が違うため、「配線ダクトカッター」という言葉だけで同列比較しないことが重要です。"
          />

          <H2 id="howto">ダクトカッターの基本的な使い方</H2>
          <P>
            製品ごとに操作方法は異なるため、必ずメーカー取扱説明書を優先してください。共通の流れは次のとおりです。
          </P>
          <ol className="my-4 list-decimal space-y-3 pl-6 text-[17px] leading-[1.95] tracking-[0.04em] text-gray-900">
            <li>
              <strong>ダクト型番を確認する</strong>
              — 工具の対応表と使用ダクトを照合します。
            </li>
            <li>
              <strong>切断位置をマーキングする</strong>
              — 直角切りか45°切りかを確認し、必要な長さを測ります。
            </li>
            <li>
              <strong>保護メガネを着用する</strong>
              — TOPやMerryは、切断片が飛ぶ可能性があるため保護メガネの着用を案内しています。
            </li>
            <li>
              <strong>ダクトを受け部へ正しくセットする</strong>
              — ベースとカバーを重ねる場合と1枚ずつ切る場合があります。
            </li>
            <li>
              <strong>急に握り込まず、ゆっくり力をかける</strong>
              — 樹脂ダクトの割れ防止のため、切り始め・切り終わりは丁寧に操作します。
            </li>
            <li>
              <strong>切断面を確認する</strong>
              — バリ、割れ、欠けがないか確認します。
            </li>
          </ol>

          <H2 id="winter">冬にダクトが割れるのはなぜ？低温時の切断注意</H2>
          <Figure
            src={IMG("cold-weather-resin-duct-cutting.webp")}
            alt="冬の低温環境で樹脂ダクトを割れに注意しながら切るイメージ"
          />
          <P>
            TOP工業は、冬期間や低温時は樹脂ダクトが割れやすいと明記しています。メーカーは、
            <Mark>まず試し切りする</Mark>
            、割れる場合はさらにゆっくり切る、必要に応じて切断部を温める、切り始めと切り終わりは特にゆっくり力をかけるよう案内しています。
          </P>
          <P>
            「新品の刃なのに冬だけ割れる」という場合、工具故障とは限りません。切れ味が落ちている場合は替刃を確認しますが、気温が低い場合は材料側が脆くなっている可能性もあります。
          </P>

          <H2 id="vs-other">ダクトカッターとノコギリ・エンビカッターの違い</H2>
          <ul className={cls.list}>
            <li>
              <strong>ダクトカッター</strong>
              — ダクト形状を受ける専用形状を持ち、樹脂カバー・配線ダクトをきれいに切りやすい。
            </li>
            <li>
              <strong>ノコギリ</strong>
              — 幅広い材料へ使えますが、切粉・バリ・仕上げの手間が増える場合があります。
            </li>
            <li>
              <strong>エンビカッター</strong>
              — 主に塩ビ管など丸い管材向け。
            </li>
          </ul>
          <P>
            <Mark>
              エアコンダクトは「樹脂だからエンビカッターでよい」とは限りません。
            </Mark>
            専用品は受け形状や刃をダクトへ合わせているため、施工頻度が高いほど段取り短縮や仕上がり安定のメリットが出やすくなります。
          </P>

          <H2 id="compare">ダクトカッター8機種比較</H2>
          <div className="my-6 overflow-x-auto">
            <table className={cls.table}>
              <thead>
                <tr>
                  <th className={cls.th}>製品</th>
                  <th className={cls.th}>主用途</th>
                  <th className={cls.th}>サイズ/重量</th>
                  <th className={cls.th}>選び方のポイント</th>
                </tr>
              </thead>
              <tbody>
                {productData.mainProducts.map((p) => (
                  <tr key={p.id}>
                    <td className={cls.td}>
                      <ProductTableCell product={p} />
                    </td>
                    <td className={cls.td}>{p.type}</td>
                    <td className={cls.td}>
                      <Mark>
                        {p.specs.length} / {p.specs.weight}
                      </Mark>
                    </td>
                    <td className={cls.td}>{p.feature}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <MidCta />

          <H2 id="blade">替刃はいつ交換する？再研磨してよい？</H2>
          <Figure
            src={IMG("duct-cutter-blade-maintenance.webp")}
            alt="ダクトカッターの替刃を安全に点検するイメージ"
          />
          <P>
            ダクトカッターは刃物なので、長く使えば切れ味が落ちます。切断に以前より力が必要、切断面が荒れる、樹脂がつぶれる、刃に欠け・損傷がある——といった症状が出たら交換を検討します。
          </P>
          <P>
            TOP工業は、刃に損傷が生じたり切れ味が悪くなった場合は指定替刃へ交換し、
            <Mark>再研磨しない</Mark>
            よう注意しています。Merry SX25にはX25の交換刃があります。
          </P>
          {productImageExists(x25.image) ? (
            <div className="my-6 flex flex-col gap-4 rounded-2xl border-2 border-gray-300 p-5 sm:flex-row sm:items-center">
              <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-xl border border-gray-200 bg-white">
                <Image
                  src={PROD(x25.image)}
                  alt={`${x25.name}の商品画像`}
                  fill
                  className="object-contain p-2"
                  sizes="128px"
                />
              </div>
              <div>
                <h3 className="text-lg font-black text-gray-900">{x25.name}</h3>
                <p className="mt-2 text-[15px] leading-7 text-gray-900">
                  {x25.feature}
                </p>
                <div className="mt-3">
                  <PrimaryCta href={x25.url} label={`${x25.short}を見る`} />
                </div>
              </div>
            </div>
          ) : null}
          <P>
            替刃交換時は刃が鋭利なため、メーカー手順に従い、必要な保護具を使用してください。
          </P>
          <div className="mt-4">
            <ExtLink
              href={
                secondaryCtas.find((c) => c.label === "作業用手袋一覧")?.url ??
                "#"
              }
              className="inline-flex min-h-11 items-center justify-center rounded-xl border-2 border-amber-600 bg-white px-5 py-2.5 text-[15px] font-extrabold text-amber-800 hover:bg-amber-50"
            >
              作業用手袋一覧から比較する →
            </ExtLink>
          </div>

          <H2 id="failures">ダクトカッターでよくある失敗</H2>
          <div className="space-y-4">
            {failureItems.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border-l-4 border-rose-600 bg-rose-50 p-4"
              >
                <h3 className="text-lg font-black text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-[16px] leading-7 text-gray-900">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <H2 id="checklist">購入前チェックリスト</H2>
          <ul className="grid gap-2 sm:grid-cols-2">
            {checkItems.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-[15px] font-bold text-gray-900"
              >
                <span aria-hidden="true">☐</span>
                {item}
              </li>
            ))}
          </ul>

          <H2 id="faq">よくある質問</H2>
          <div className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.q}>
                <h3 className={cls.faqQ}>{faq.q}</h3>
                <P>{faq.a}</P>
              </div>
            ))}
          </div>

          <H2 id="summary">まとめ｜「ダクトカッター」という名前ではなく、切るダクトから選ぶ</H2>
          <P>
            ダクトカッター選びで重要なのは、メーカーや価格より先に
            <Mark>切る対象を特定すること</Mark>
            です。
          </P>
          <ul className={cls.list}>
            <li>
              エアコン配管化粧カバー → DC-100M / DC-120PJ / ADC-101 /
              VD2100・2200
            </li>
            <li>配線ダクト・床モールの横断切断 → LDC110 / SX25</li>
            <li>配線ダクトの引出口加工 → DCF-80</li>
          </ul>
          <P>
            この3つを分けるだけで、誤購入はかなり減らせます。そのうえで、ダクトメーカー・型番、2枚重ね切断、45°切り、替刃、冬季施工の有無まで確認してください。
          </P>

          <FinalCtaBlock />

          <section className="mt-12 border-t border-gray-200 pt-8">
            <h2 className="text-xl font-black text-gray-900">関連記事</h2>
            <ul className="mt-4 space-y-2">
              {relatedArticles.map((a) => (
                <li key={a.href}>
                  <Link
                    href={a.href}
                    className="font-bold text-gray-900 underline decoration-2 underline-offset-4"
                  >
                    {a.label}
                  </Link>
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
