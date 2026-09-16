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

const SLUG = "hydraulic-jack-tonnage-selection-guide";
const SITE_URL = "https://www.sagyou-navi.com";
const CANONICAL = `${SITE_URL}/articles/${SLUG}`;
const SEO_TITLE =
  "油圧ジャッキの選び方｜何トンを選ぶ？2t・5t・10t・20t・30tの違いを解説【2026年】";
const H1 =
  "油圧ジャッキの選び方｜何トンを選ぶ？2t・5t・10t・20t・30tの違いと用途を解説【2026年版】";
const SHORT_TITLE = "油圧ジャッキの選び方｜何トンを選ぶ？";
const DESCRIPTION =
  "油圧ジャッキは何トンを選べばいい？作業用品ナビが、2t・5t・10t・20t・30tの違い、最低高さ、ストローク、ボトルジャッキ・油圧シザースジャッキ・ポンプ式油圧ジャッキセットの選び方を解説します。";
const PUBLISHED = "2026-09-16";
const MODIFIED = "2026-09-16";
const HERO = "hydraulic-jack-selection-hero.webp";
const IMG = (file: string) => `/images/articles/${SLUG}/${file}`;
const PROD = (file: string) => `/images/articles/${SLUG}/products/${file}`;
const EXT_REL = "nofollow sponsored noopener noreferrer";

type FeaturedProduct = (typeof productData.featuredProducts)[number];

const byModel = Object.fromEntries(
  productData.featuredProducts.map((p) => [p.model, p])
) as Record<string, FeaturedProduct>;

const tojModels = productData.featuredProducts.filter((p) => p.series === "TOJ");
const tsjModels = productData.featuredProducts.filter((p) => p.series === "TSJ");
const tmyjModels = productData.featuredProducts.filter(
  (p) => p.series === "TMYJ"
);

const mainCta = productData.cta.main;
const secondaryCtas = productData.cta.secondary;

const checks = [
  {
    n: "01",
    title: "何トン必要か（揚力）",
    body: "軽作業は2t〜5t、設備保全は7t〜10t、据付・建築土木は15t〜30tを出発点に。ギリギリ選定は避け、余裕を持たせる。",
  },
  {
    n: "02",
    title: "最低高さが合うか",
    body: "能力が足りても、対象物の下へ入らなければ使えません。TOJ-2とTOJ-30では最低高さが100mm近く違います。",
  },
  {
    n: "03",
    title: "ストローク・最高位が足りるか",
    body: "どこまで持ち上がるかを確認。少し浮かせたいだけか、しっかり高さを取りたいかで判断が変わります。",
  },
  {
    n: "04",
    title: "形状が用途に合うか",
    body: "汎用はボトル型（TOJ）、車両はシザース型（TSJ）、狭所・据付はポンプ式セット（TMYJ）。",
  },
] as const;

const typeRows = [
  [
    "ボトルジャッキ（TOJ）",
    "設備保全・建築土木・汎用の持ち上げ",
    "何トン選ぶかの比較軸が作りやすい",
  ],
  [
    "油圧シザースジャッキ（TSJ）",
    "タイヤ交換・チェーン脱着など車両用途",
    "車載・保管との相性が良い",
  ],
  [
    "ポンプ式セット（TMYJ）",
    "狭所・据付・補修",
    "シリンダとポンプを分けて操作できる",
  ],
] as const;

const tonnageBands = [
  {
    title: "2t〜5tが向く現場",
    mark: "2t〜5t",
    cases: [
      "軽車両・小型車両メンテナンス",
      "小型農機や小型設備の持ち上げ",
      "工場内の軽補修",
      "「初めて買う1台」を検討している",
    ],
    models: ["TOJ-2", "TOJ-5"] as const,
    note: "TOJ-2は入り口として分かりやすく、2tでは不安ならTOJ-5が現実的な中間帯です。",
  },
  {
    title: "7t〜10tが向く現場",
    mark: "7t〜10t",
    cases: [
      "中型機械の補修",
      "中型設備のレベル調整",
      "重量がある構造物の一時持ち上げ",
    ],
    models: ["TOJ-10"] as const,
    note: "TOJ-10は工場保全担当が比較表でまず見たい数字になりやすい主力帯です。",
  },
  {
    title: "15t〜30tが向く現場",
    mark: "15t〜30t",
    cases: [
      "重量設備の据付",
      "大型構造物の持ち上げ",
      "建設・土木現場",
      "20t以上の能力が必要な作業",
    ],
    models: ["TOJ-20", "TOJ-30"] as const,
    note: "用途がはっきりしている重量現場向け。本体重量・最低高さも必ず確認してください。",
  },
] as const;

const failures = [
  {
    title: "何トンかだけで決める",
    body: "能力だけで選ぶと、最低高さが合わず差し込めないことがあります。",
  },
  {
    title: "最高位だけ見てストロークを見ない",
    body: "どれくらい伸びるかを見ないと、必要な作業高さに足りない場合があります。",
  },
  {
    title: "ジャッキだけで支持したまま作業する",
    body: "ジャッキは持ち上げる工具です。下にもぐる作業ではジャッキスタンド等の補助支持具を併用してください。",
  },
  {
    title: "傾斜地や軟弱地で使う",
    body: "ジャッキが傾き、重量物の落下につながるおそれがあります。平坦で硬い場所で使います。",
  },
  {
    title: "横向き使用の条件を確認しない",
    body: "TOJは条件付きで横方向使用が可能ですが、指定方向があり、横方向の揚程は約50%です。",
  },
] as const;

const safetyItems = [
  "ジャッキだけで支持したまま下にもぐらない",
  "平坦で硬い場所で使う",
  "対象物の荷重とジャッキポイントを確認する",
  "補助支持具を併用する",
  "横向き使用は製品条件を確認する（無条件ではない）",
  "傾斜地・軟弱地では使わない",
  "使う前に油漏れ・変形・損傷がないか確認する",
] as const;

const faqs = [
  {
    q: "油圧ジャッキは何トンを選べばいいですか？",
    a: "まずは持ち上げたい対象と用途で判断します。軽作業や小型設備なら2t〜5t帯、設備保全や中型重量物なら7t〜10t帯、建築土木や大型設備なら15t〜30t帯が比較の出発点です。実務では余裕を持たせる選び方が基本です。",
  },
  {
    q: "油圧ジャッキとボトルジャッキは同じですか？",
    a: "ボトルジャッキは油圧ジャッキの一種です。今回のTOJシリーズがこれに当たります。油圧ジャッキには、ほかにシザースジャッキやポンプ式セットなどもあります。",
  },
  {
    q: "最低高さと最高位はどちらが大事ですか？",
    a: "両方大事です。最低高さが合わないと対象物の下へ入らず、最高位やストロークが足りないと必要な高さまで上がりません。",
  },
  {
    q: "横向きで使えますか？",
    a: "TOJシリーズは条件付きで横方向使用が可能ですが、指定方向や揚程制限（約50%）があります。無条件に使えるわけではありません。",
  },
  {
    q: "車のタイヤ交換にはどれが向いていますか？",
    a: "車両用途なら、TSJ-850やTSJ-1000のような油圧シザースジャッキが候補になります。用途・車両条件に合わせて確認してください。",
  },
  {
    q: "ジャッキだけで支えたまま作業していいですか？",
    a: "おすすめできません。ジャッキは持ち上げる工具であり、支持し続けるための安全確保は別です。必要に応じて補助支持具を併用してください。",
  },
] as const;

const relatedArticles = [
  {
    href: "/articles/hand-lifter-vs-hand-pallet",
    label: "ハンドリフターとハンドパレットの違い",
  },
  {
    href: "/articles/trusco-hand-pallet-erabikata",
    label: "TRUSCOハンドパレットの選び方",
  },
  {
    href: "/articles/trusco-kozou-stacker-lifter-selection-guide",
    label: "TRUSCO小象スタッカーリフターの選び方",
  },
  {
    href: "/articles/cable-rack-cutting-hydraulic-tool-guide",
    label: "ケーブルラック切断の油圧工具ガイド",
  },
  {
    href: "/articles/roller-cabinet-tool-storage-workflow-guide",
    label: "ローラーキャビネットの工具収納と動線",
  },
  {
    href: "/articles/manual-press-fit-work-efficiency-guide",
    label: "手動圧入作業の効率化ガイド",
  },
] as const;

export const metadata: Metadata = {
  title: SEO_TITLE,
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: H1,
    description: DESCRIPTION,
    type: "article",
    url: CANONICAL,
    siteName: "作業用品ナビ",
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
    images: [
      {
        url: `${SITE_URL}${IMG(HERO)}`,
        width: 1600,
        height: 900,
        alt: "工場保全担当が油圧ジャッキを比較しながら選定するイメージ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}${IMG(HERO)}`],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: H1,
  description: DESCRIPTION,
  mainEntityOfPage: CANONICAL,
  image: [`${SITE_URL}${IMG(HERO)}`],
  datePublished: PUBLISHED,
  dateModified: MODIFIED,
  about: {
    "@type": "Thing",
    name: "油圧ジャッキ",
  },
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
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
        油圧ジャッキを用途・トン数で比較する
      </h2>
      <p className="mt-3 text-[16px] leading-7 text-gray-100">
        TOJ / TSJ / TMYJを分けて、自社の作業に合う型番へ進みやすくなります。
      </p>
      <div className="mt-5">
        <ExtLink
          href={mainCta.url}
          className="inline-flex min-h-12 items-center justify-center rounded-xl bg-amber-500 px-5 py-3 text-[16px] font-extrabold text-gray-950 hover:bg-amber-400"
        >
          {mainCta.label} →
        </ExtLink>
      </div>
    </section>
  );
}

function ProductCard({
  product,
  priority = false,
  note,
}: {
  product: FeaturedProduct;
  priority?: boolean;
  note?: string;
}) {
  const hasImage = productImageExists(product.image);
  const specs = [
    { label: "揚力", value: product.capacity },
    product.stroke ? { label: "ストローク", value: product.stroke } : null,
    product.heightRange
      ? { label: "高さ", value: product.heightRange }
      : null,
    product.weight ? { label: "質量", value: product.weight } : null,
  ].filter((row): row is { label: string; value: string } => Boolean(row));

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

function ProductTableCell({ product }: { product: FeaturedProduct }) {
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
          {product.capacity}
        </span>
      </span>
    </ExtLink>
  );
}

function FinalCtaBlock() {
  return (
    <section className="my-12 rounded-2xl border-2 border-amber-300 bg-amber-50 p-6 md:p-8">
      <h2 className="text-2xl font-black text-gray-900 sm:text-3xl">
        油圧ジャッキをまとめて比較
      </h2>
      <p className="mt-3 text-[16px] leading-7 text-gray-900">
        「油圧ジャッキ」と広く探すより、<Mark>何トン・最低高さ・ストローク・形状</Mark>
        で絞ると、必要な型番へたどり着きやすくなります。
      </p>
      <div className="mt-5">
        <PrimaryCta href={mainCta.url} label={mainCta.label} />
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
      <JsonLd data={faqSchema} />

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
              作業工具 / 比較・選定ガイド / {PUBLISHED}更新
            </div>
            <h1 className={cls.h1}>{H1}</h1>
            <P>
              油圧ジャッキを探し始めると、まず迷いやすいのが
              <Mark>「結局、何トンを選べばいいのか」</Mark>
              という点です。
            </P>
            <P>
              2トン、5トン、10トン、20トン、30トンと能力が分かれていても、現場で本当に必要なのは揚力だけではありません。
              <Mark>最低高さ、ストローク、最高位、使う場所、形状</Mark>
              まで見ないと、「持っているのに使いにくい」状態になりやすいからです。
            </P>
            <P>
              この記事では、<Mark>「油圧ジャッキ 選び方」「油圧ジャッキ 何トン」</Mark>
              の検索意図に合わせて、TRUSCOのTOJ / TSJ / TMYJをもとに、選定4チェックで整理します。
            </P>
            <Figure
              src={IMG(HERO)}
              alt="工場保全担当が油圧ジャッキを比較しながら選定するイメージ"
              priority
            />
          </header>

          <section className="mt-8 rounded-2xl border-2 border-amber-400 bg-slate-950 p-6 text-white md:p-8">
            <p className="text-sm font-bold text-amber-300">
              30秒で結論｜油圧ジャッキは「何トン・どの高さ・どの形」で選ぶ
            </p>
            <h2 className="mt-2 text-[23px] font-extrabold leading-tight md:text-[28px]">
              失敗しない順番はこの4つ
            </h2>
            <ol className="mt-4 list-decimal space-y-3 pl-5 text-[16px] leading-8 text-white md:text-[17px]">
              {checks.map((item) => (
                <li key={item.n}>
                  <span className="font-extrabold">{item.title}</span>
                  <span className="block text-[15px] leading-7 text-gray-100 md:text-[16px]">
                    {item.body}
                  </span>
                </li>
              ))}
            </ol>
            <div className="mt-6">
              <PrimaryCta href={mainCta.url} label={mainCta.label} />
            </div>
          </section>

          <H2 id="three-types">油圧ジャッキとは？まず押さえたい3タイプ</H2>
          <P>
            油圧ジャッキは、油圧の力を使って少ない操作力で重量物を持ち上げる工具です。機械・建築・土木・自動車など幅広い用途がありますが、現場で迷いやすいのは
            <Mark>種類の違い</Mark>です。
          </P>
          <div className="my-6 overflow-x-auto">
            <table className={`${cls.table} min-w-[720px]`}>
              <thead>
                <tr>
                  <th className={cls.th}>タイプ</th>
                  <th className={cls.th}>向く用途</th>
                  <th className={cls.th}>選ぶときの視点</th>
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

          <H3>1. ボトルジャッキ（TOJシリーズ）</H3>
          <Figure
            src={IMG("bottle-jack-capacity-comparison.webp")}
            alt="2トンから30トンまでのボトルジャッキを比較するイメージ"
          />
          <P>
            円筒形に近い形状で、いわゆる「油圧ジャッキ」として最も想像しやすいタイプです。今回の主役になる
            <Mark>TOJシリーズ</Mark>
            がここに当たります。2t〜30tまで能力差を作りやすく、工場・建築・土木・自動車と用途が広い一方、対象物の下に入るかどうかは
            <Mark>最低高さ</Mark>で必ず確認してください。
          </P>

          <H3>2. 油圧シザースジャッキ（TSJシリーズ）</H3>
          <P>
            車両のタイヤ交換やチェーン脱着のような場面で使いやすいタイプです。
            <Mark>TSJ-850 / TSJ-1000</Mark>
            が該当します。ボトルジャッキよりも「車両で使う」場面をイメージしやすく、保管や携行性との相性も良いのが特長です。
          </P>

          <H3>3. ポンプ式油圧ジャッキセット（TMYJシリーズ）</H3>
          <P>
            シリンダ、手動ポンプ、油圧ホースがセットになったタイプです。
            <Mark>TMYJ-100SET / TMYJ-150SET</Mark>
            が該当します。普通のボトルジャッキでは届きにくい場所、狭所、設備据付、補修作業などで検討しやすい法人向け選択肢です。
          </P>

          <H2 id="four-checks">失敗しない油圧ジャッキ選定4チェック</H2>
          <div className="my-6 grid gap-4">
            {checks.map((item) => (
              <div
                key={item.n}
                className="rounded-2xl border-2 border-gray-300 bg-white p-5"
              >
                <p className="text-sm font-bold text-amber-800">Check {item.n}</p>
                <h3 className="mt-1 text-xl font-black text-gray-900 sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-[16px] leading-7 text-gray-900">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <H3>Check 1｜何トン必要か</H3>
          <P>
            最も気になるのはここです。ただし、油圧ジャッキの“何トン”は
            <Mark>余裕のないギリギリ選定を勧める指標ではありません</Mark>
            。実務では、安全性・作業性を考えて余裕を持たせる考え方が重要です。
          </P>
          <ul className={cls.list}>
            <li>
              <Mark>2t〜5t</Mark>：軽車両、小型農機、小型設備、一般補修
            </li>
            <li>
              <Mark>7t〜10t</Mark>：中型設備、やや重い構造物、設備保全
            </li>
            <li>
              <Mark>15t〜30t</Mark>：重量物据付、建築土木、重量設備メンテナンス
            </li>
          </ul>
          <P>
            現場に対して大きすぎるモデルは、本体重量や最低高さの面で扱いにくくなることがあります。「重いほど上位」だけで決めないのがポイントです。
          </P>

          <H3>Check 2｜最低高さが入るか</H3>
          <Figure
            src={IMG("minimum-height-check-under-machine.webp")}
            alt="設備の下にジャッキが入るか最低高さを確認するイメージ"
          />
          <P>
            TOJシリーズの代表例を見ると、同じ油圧ジャッキでも寸法はかなり違います。
            <Mark>TOJ-2</Mark>は高さ180〜345mm、<Mark>TOJ-30</Mark>
            は高さ280〜440mm。つまり30tモデルは能力が高い反面、対象物の下へ差し込みにくい場面もあります。「能力は十分なのに入らない」は非常に多い失敗です。
          </P>

          <H3>Check 3｜ストローク・最高位が足りるか</H3>
          <Figure
            src={IMG("stroke-and-lift-height-concept.webp")}
            alt="ジャッキのストロークと持ち上げ高さを確認するイメージ"
          />
          <P>
            必要なのは「持ち上げられるか」だけではなく、「どこまで持ち上がるか」です。例えば
            <Mark>TOJ-2はストローク115mm</Mark>、<Mark>TOJ-30は160mm</Mark>
            。ポンプ式では
            <Mark>TMYJ-100SETが100mm</Mark>、<Mark>TMYJ-150SETが150mm</Mark>
            と差が明確です。対象物を少し浮かせたいだけなのか、しっかり高さを取りたいのかで判断が変わります。
          </P>

          <H3>Check 4｜形状が用途に合うか</H3>
          <ul className={cls.list}>
            <li>
              設備保全・建築土木・汎用用途 → <Mark>TOJシリーズ</Mark>
            </li>
            <li>
              車両のタイヤ交換・チェーン脱着 → <Mark>TSJシリーズ</Mark>
            </li>
            <li>
              狭所・据付・補修 → <Mark>TMYJシリーズ</Mark>
            </li>
          </ul>

          <MidCta />

          <H2 id="tonnage">何トンを選ぶ？用途別の目安</H2>
          {tonnageBands.map((band) => (
            <section key={band.title} className="mb-10">
              <H3>{band.title}</H3>
              <P>
                目安帯は <Mark>{band.mark}</Mark>。向くケースは次のとおりです。
              </P>
              <ul className={cls.list}>
                {band.cases.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <P>{band.note}</P>
              <div className="mt-5 grid gap-5">
                {band.models.map((model, index) => (
                  <ProductCard
                    key={model}
                    product={byModel[model]}
                    priority={band === tonnageBands[0] && index === 0}
                  />
                ))}
              </div>
            </section>
          ))}

          <H2 id="toj-compare">TOJシリーズの違いを比較</H2>
          <P>
            以下は、記事内で最も検索意図に合う比較ポイントです。TOJシリーズ全体の強みは、小型・軽量（大型側は重量タイプ）、操作力が軽い、用途が広い、条件付きで横方向使用も可能な点です。
          </P>
          <div className="my-6 overflow-x-auto">
            <table className={`${cls.table} min-w-[860px]`}>
              <thead>
                <tr>
                  <th className={cls.th}>商品</th>
                  <th className={cls.th}>揚力</th>
                  <th className={cls.th}>ストローク</th>
                  <th className={cls.th}>高さ</th>
                  <th className={cls.th}>質量</th>
                  <th className={cls.th}>向く人</th>
                </tr>
              </thead>
              <tbody>
                {tojModels.map((product) => (
                  <tr key={product.model}>
                    <td className={cls.td}>
                      <ProductTableCell product={product} />
                    </td>
                    <td className={`${cls.td} font-bold`}>
                      <Mark>{product.capacity}</Mark>
                    </td>
                    <td className={cls.td}>{product.stroke || "—"}</td>
                    <td className={cls.td}>{product.heightRange || "—"}</td>
                    <td className={cls.td}>{product.weight || "—"}</td>
                    <td className={cls.td}>{product.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <P>
            ただし、横方向使用については無条件ではありません。指定方向や揚程低下の注意があるため、
            <Mark>「横向き使用できるらしい」だけで使うのは危険</Mark>です。
          </P>

          <H2 id="tsj">TSJシリーズが向くケース｜車両用途を拾いたい人へ</H2>
          <Figure
            src={IMG("hydraulic-scissor-jack-vehicle-use.webp")}
            alt="車両用途で油圧シザースジャッキを使うイメージ"
          />
          <P>
            「油圧ジャッキ」で検索する人の中には、車両用途の人も少なくありません。その場合、ボトルジャッキだけではなく
            <Mark>油圧シザースジャッキ</Mark>
            を候補に入れた方が意図に合います。
          </P>
          <div className="mt-5 grid gap-5">
            {tsjModels.map((product) => (
              <ProductCard
                key={product.model}
                product={product}
                note={
                  product.model === "TSJ-850"
                    ? "少ない力でスピーディーに車輌を持ち上げられる用途訴求。タイヤ交換・チェーン脱着向け。"
                    : "ベース寸法が広く安定しやすく、スチールケースで長期保存向き。受金交換にも対応。"
                }
              />
            ))}
          </div>
          <P>
            整理すると、<Mark>工場・建築・土木寄り → TOJ</Mark>、
            <Mark>車両の整備・タイヤ交換寄り → TSJ</Mark>
            です。
          </P>

          <H2 id="tmyj">TMYJシリーズが向くケース｜狭所・据付・補修向け</H2>
          <Figure
            src={IMG("hydraulic-jack-pump-set-use.webp")}
            alt="ポンプ式油圧ジャッキセットを設備補修で使うイメージ"
          />
          <P>
            ボトルジャッキやシザースジャッキではなく、
            <Mark>狭い場所でシリンダを使い、ポンプで操作したい</Mark>
            場面ではポンプ式油圧ジャッキセットが候補です。シリンダ・手動ポンプ・油圧ホースがセットになった単動式です。
          </P>
          <div className="mt-5 grid gap-5">
            {tmyjModels.map((product) => (
              <ProductCard
                key={product.model}
                product={product}
                note={
                  product.model === "TMYJ-100SET"
                    ? "ストローク100mm。よりコンパクトな上げ幅でよい場面向け。"
                    : "ストローク150mm。より大きい上げ幅が必要な場面向け。"
                }
              />
            ))}
          </div>

          <H2 id="failures">油圧ジャッキ選びでよくある失敗</H2>
          <div className="my-6 grid gap-4">
            {failures.map((item, index) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-300 bg-white p-5"
              >
                <h3 className="text-xl font-black text-gray-900 sm:text-2xl">
                  {index + 1}. {item.title}
                </h3>
                <p className="mt-2 text-[16px] leading-7 text-gray-900">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <H2 id="safety">安全に使うための基本</H2>
          <Figure
            src={IMG("safe-jack-use-flat-ground.webp")}
            alt="平坦で硬い場所で安全にジャッキを使用するイメージ"
          />
          <P>
            SEOよりも先に、ここは明確にしておきたいポイントです。どれだけ高能力の油圧ジャッキでも、基本を外すと危険です。
          </P>
          <ul className={cls.list}>
            {safetyItems.map((item) => (
              <li key={item}>
                <Mark>{item}</Mark>
              </li>
            ))}
          </ul>

          <H2 id="order">油圧ジャッキを選ぶなら、まずこの順番で比べる</H2>
          <Figure
            src={IMG("industrial-tool-storage-hydraulic-jacks.webp")}
            alt="工具棚で油圧ジャッキを保管・管理するイメージ"
          />
          <ol className="my-4 list-decimal space-y-3 pl-6 text-[17px] leading-[1.95] tracking-[0.04em] text-gray-900">
            <li>
              <Mark>用途を決める</Mark>
              （設備・建築・土木 → TOJ / 車両 → TSJ / 狭所・据付 → TMYJ）
            </li>
            <li>
              <Mark>必要トン数を決める</Mark>（2t〜5t / 7t〜10t / 15t〜30t）
            </li>
            <li>
              <Mark>最低高さを確認する</Mark>
            </li>
            <li>
              <Mark>ストローク・最高位を確認する</Mark>
            </li>
          </ol>
          <div className="mt-6">
            <PrimaryCta href={mainCta.url} label="油圧ジャッキ一覧を確認する" />
          </div>

          <H2 id="faq">よくある質問</H2>
          <div className="space-y-8">
            {faqs.map((faq) => (
              <section key={faq.q}>
                <h3 className={cls.faqQ}>{faq.q}</h3>
                <P>{faq.a}</P>
              </section>
            ))}
          </div>

          <H2 id="summary">
            まとめ｜「油圧ジャッキ 何トン」で迷ったら、トン数だけで決めない
          </H2>
          <P>
            油圧ジャッキ選びで最も多い悩みは、「結局、何トンを買えばいいのか」です。ただし実務では、
            <Mark>何トンかだけで決めると失敗します</Mark>。
          </P>
          <ul className={cls.list}>
            <li>
              <Mark>汎用比較の中心</Mark> → TOJシリーズ
            </li>
            <li>
              <Mark>車両用途</Mark> → TSJシリーズ
            </li>
            <li>
              <Mark>狭所・据付補修</Mark> → TMYJシリーズ
            </li>
          </ul>
          <P>
            「油圧ジャッキ」で広く探すよりも、
            <Mark>「油圧ジャッキ 選び方」「油圧ジャッキ 何トン」</Mark>
            の軸で比較すると、必要な商品へたどり着きやすくなります。
          </P>

          <FinalCtaBlock />

          <section className="mt-12 border-t border-gray-300 pt-10">
            <h2 className="text-2xl font-black text-gray-900 sm:text-3xl">
              関連記事
            </h2>
            <ul className="mt-5 space-y-3">
              {relatedArticles.map((article) => (
                <li key={article.href}>
                  <Link
                    href={article.href}
                    className="text-[16px] font-bold text-gray-900 underline decoration-2 underline-offset-4"
                  >
                    {article.label}
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
