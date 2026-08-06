import type { Metadata } from "next";
import type { ReactNode } from "react";
import fs from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";
import productData from "./product-data.json";

const slug = "electrical-crimping-work-efficiency-guide";
const siteUrl = "https://www.sagyou-navi.com";
const canonicalUrl = `${siteUrl}/articles/${slug}`;
const imgBase = `/images/articles/${slug}`;
const heroImage = `${imgBase}/electrical-crimping-efficiency-hero.jpg`;
const EXT_REL = "nofollow sponsored noopener noreferrer";

const title =
  "電線の圧着作業を効率化するには？手動工具から充電式圧着器へ切り替える判断基準【2026年版】";
const shortTitle = "圧着作業の効率化ガイド";
const description =
  "電線の圧着作業で手が疲れる、太い電線の端末処理に時間がかかる方へ。手動工具から充電式圧着器へ切り替える判断基準、小型端子・14〜60・14〜250・150〜325㎟の使い分けを解説します。";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: shortTitle,
    description,
    url: canonicalUrl,
    siteName: "作業用品ナビ",
    type: "article",
    publishedTime: "2026-08-06",
    modifiedTime: "2026-08-06",
    images: [
      {
        url: `${siteUrl}${heroImage}`,
        width: 1600,
        height: 900,
        alt: "電気工事担当者が手動工具と充電式圧着器を比較するイメージ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: shortTitle,
    description,
    images: [`${siteUrl}${heroImage}`],
  },
};

type Product = {
  id: number;
  model: string;
  code: string;
  name: string;
  utmUrl: string;
  category: string;
  badge: string;
  role: string;
  range: string;
  weight: string;
  feature: string;
  check: string;
  included: boolean;
};

type CtaLink = { label: string; url: string };

const featuredIds = new Set<number>(productData.featuredProductIds as number[]);
const allProducts = (productData.products as Product[]).filter(
  (p) => featuredIds.has(p.id) && p.included
);
const byId = Object.fromEntries(allProducts.map((p) => [p.id, p])) as Record<
  number,
  Product
>;
const ctas = productData.ctaLinks as CtaLink[];

const SHORT_NAMES: Record<number, string> = {
  1: "Klauke EK50MLAL（本体のみ）",
  2: "Klauke EK50MLJ（標準セット）",
  3: "Panasonic EZ1WD1KB",
  4: "EXENA EZ1W31F10SB（フルセット）",
  5: "EXENA EZ1W31XB（本体のみ）",
  6: "Panasonic EZ46A4KB",
  8: "KLEIN J2078CR",
  11: "KLEIN K12065CR",
  12: "KLEIN D2038NCR",
  13: "TRUSCO TRD18",
  15: "TRUSCO PK-D1",
  16: "SANWA PM11",
};

const displayName = (product: Product) =>
  SHORT_NAMES[product.id] ?? product.model;

const productImageExists = (code: string) => {
  try {
    const filePath = path.join(
      process.cwd(),
      "public",
      "images",
      "articles",
      slug,
      "products",
      `${code}.webp`
    );
    return fs.existsSync(filePath) && fs.statSync(filePath).size > 500;
  } catch {
    return false;
  }
};

const badgeClass = (badge: string) => {
  if (badge.includes("標準セット") || badge.includes("フルセット")) {
    return "bg-emerald-100 text-emerald-950";
  }
  if (badge.includes("本体のみ")) {
    return "bg-sky-100 text-sky-950";
  }
  if (badge.includes("150〜325") || badge.includes("大容量")) {
    return "bg-violet-100 text-violet-950";
  }
  if (badge.includes("14〜250") || badge.includes("油圧マルチ")) {
    return "bg-indigo-100 text-indigo-950";
  }
  if (badge.includes("14〜60")) {
    return "bg-cyan-100 text-cyan-950";
  }
  if (badge.includes("小型")) {
    return "bg-teal-100 text-teal-950";
  }
  return "bg-amber-100 text-amber-950";
};

const faqs = [
  {
    q: "何回くらい圧着するなら電動化すべきですか？",
    a: "一律の回数基準はありません。同じ端子を繰り返す、手動工具で負担が大きい、14㎟以上を日常的に扱う、作業姿勢が悪い場合は充電式圧着器を比較しやすくなります。",
  },
  {
    q: "60sqまでならどのタイプが向きますか？",
    a: "14〜60㎟を中心に扱う場合はEXENA EZ1W31が候補です。小型端子やフェルール中心の場合はKlauke EK50MLを分けて使います。",
  },
  {
    q: "250sqと325sqの圧着器は兼用できますか？",
    a: "機種の対応範囲によります。EZ46A4は14〜250㎟、EZ1WD1は150〜325㎟です。一台で小型端子から325㎟まで完全に兼用できるわけではありません。",
  },
  {
    q: "本体のみと標準セットはどちらが得ですか？",
    a: "対応電池・充電器・ケースを保有している場合は本体のみ、初回導入や現場一式配備では標準セットが管理しやすくなります。ダイスの付属有無は別に確認してください。",
  },
  {
    q: "ダイスは別メーカーでも使えますか？",
    a: "適合が確認された組み合わせだけを使用してください。端子・接続材・ダイス・工具はメーカー指定のシステムで確認するのが基本です。",
  },
  {
    q: "圧着器と圧縮器は同じですか？",
    a: "接続材と工法が異なります。圧着端子、スリーブ、T形コネクタなどに応じて、工具・アタッチメント・ダイスを選びます。",
  },
  {
    q: "圧着後に何を確認すべきですか？",
    a: "圧着完了表示、圧着マーク、端子の変形、導体の挿入状態、抜け、社内検査手順を確認します。電動化だけで品質が保証されるわけではありません。",
  },
];

const checkItems = [
  "よく使う端子・スリーブを一覧化した",
  "最小・最大㎟を確認した",
  "1日あたりの圧着回数を把握した",
  "作業姿勢と工具重量を確認した",
  "必要ダイスの型番を確定した",
  "本体のみ/セットの付属品を比較した",
  "既存バッテリーとの互換性を確認した",
  "予備電池と充電器数を決めた",
  "圧着完了確認を標準化した",
  "ダイス清掃・点検ルールを決めた",
  "工具管理番号と保管場所を決めた",
  "有資格者・社内手順を確認した",
];

const sizeRows = [
  {
    target: "小型端子・フェルール",
    type: "軽量ハンディ電動型",
    model: "Klauke EK50ML",
    check: "ダイス・端子種類",
  },
  {
    target: "14〜60㎟",
    type: "小型充電油圧型",
    model: "EXENA EZ1W31",
    check: "最大60㎟、セット内容",
  },
  {
    target: "14〜250㎟",
    type: "油圧マルチ型",
    model: "Panasonic EZ46A4",
    check: "重量・アタッチメント",
  },
  {
    target: "150〜325㎟",
    type: "大容量専用型",
    model: "Panasonic EZ1WD1",
    check: "専用ダイス・電池",
  },
];

const weightRows = [
  { model: "EK50MLJ", range: "小型端子", weight: "0.96kg" },
  { model: "EZ1W31", range: "14〜60㎟", weight: "2.1kg" },
  { model: "EZ46A4", range: "14〜250㎟", weight: "5.7kg" },
  { model: "EZ1WD1", range: "150〜325㎟", weight: "仕様ページで確認" },
];

const comparisonRows: {
  id: number;
  target: string;
  weight: string;
  strength: string;
  check: string;
}[] = [
  {
    id: 2,
    target: "小型端子",
    weight: "0.96kg",
    strength: "軽量、反復圧着、ダイス交換",
    check: "ダイス別売",
  },
  {
    id: 1,
    target: "小型端子",
    weight: "本体0.76kg",
    strength: "既存周辺品を活用",
    check: "電池・充電器・ケース",
  },
  {
    id: 4,
    target: "14〜60㎟",
    weight: "2.1kg",
    strength: "軽量、スティック形状",
    check: "最大60㎟",
  },
  {
    id: 5,
    target: "14〜60㎟",
    weight: "2.1kg",
    strength: "本体のみ導入",
    check: "電池・充電器・ダイス",
  },
  {
    id: 6,
    target: "14〜250㎟",
    weight: "5.7kg",
    strength: "油圧マルチ、多用途",
    check: "重量、アタッチメント",
  },
  {
    id: 3,
    target: "150〜325㎟",
    weight: "要確認",
    strength: "大容量専用、完了確認",
    check: "専用ダイス、電池別売",
  },
];

const relatedArticles = [
  {
    href: "/articles/cable-cutter-selection",
    label: "ケーブルカッターの選び方｜充電式・油圧式・ラチェット式と圧着工具の使い分け",
  },
  {
    href: "/articles/solar-pv-tool-set-selection",
    label: "太陽光発電用工具セットの選び方｜MC4コネクタ施工・PVケーブル加工",
  },
  {
    href: "/articles/insulated-tool-set-selection",
    label: "絶縁工具セットの選び方",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  image: [`${siteUrl}${heroImage}`],
  datePublished: "2026-08-06",
  dateModified: "2026-08-06",
  author: {
    "@type": "Organization",
    name: "作業用品ナビ編集部",
    url: siteUrl,
  },
  publisher: {
    "@type": "Organization",
    name: "作業用品ナビ",
    url: siteUrl,
  },
  mainEntityOfPage: canonicalUrl,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: siteUrl },
    {
      "@type": "ListItem",
      position: 2,
      name: "記事一覧",
      item: `${siteUrl}/articles`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: shortTitle,
      item: canonicalUrl,
    },
  ],
};

const faqJsonLd = {
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

function SectionImage({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="my-8 overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
      <div className="relative aspect-video">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 820px"
        />
      </div>
    </figure>
  );
}

function CtaGrid({ heading }: { heading?: string }) {
  return (
    <section className="my-8 rounded-2xl border-2 border-amber-300 bg-amber-50 p-5 md:p-6">
      {heading ? (
        <h3 className="mb-4 text-xl font-extrabold text-gray-900">{heading}</h3>
      ) : null}
      <div className="grid gap-3 sm:grid-cols-2">
        {ctas.map((cta) => (
          <a
            key={cta.label}
            href={cta.url}
            target="_blank"
            rel={EXT_REL}
            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-amber-600 px-4 py-3 text-center text-[15px] font-extrabold text-white hover:bg-amber-700"
          >
            {cta.label} →
          </a>
        ))}
      </div>
    </section>
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
  product,
  priority = false,
}: {
  product: Product;
  priority?: boolean;
}) {
  const name = displayName(product);
  const hasImage = productImageExists(product.code);
  const imageSrc = `${imgBase}/products/${product.code}.webp`;

  return (
    <article className="rounded-2xl border border-gray-300 bg-white p-5 shadow-sm md:p-6">
      <div className="grid gap-5 md:grid-cols-[200px_1fr] md:items-start">
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
          {hasImage ? (
            <Image
              src={imageSrc}
              alt={`${name}の商品画像`}
              width={400}
              height={400}
              priority={priority}
              className="h-auto w-full object-contain p-3"
            />
          ) : (
            <ImagePending name={name} />
          )}
        </div>
        <div>
          <div className="flex flex-wrap gap-2">
            <span
              className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${badgeClass(product.badge)}`}
            >
              {product.badge}
            </span>
            <span className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-900">
              {product.range}
            </span>
          </div>
          <h3 className="mt-3 text-[20px] font-extrabold leading-snug text-gray-900 md:text-[22px]">
            {name}
          </h3>
          <dl className="mt-4 space-y-2 text-[15px] leading-7 text-gray-900 md:text-[16px]">
            <div>
              <dt className="inline font-bold">役割：</dt>
              <dd className="inline">{product.role}</dd>
            </div>
            <div>
              <dt className="inline font-bold">特徴：</dt>
              <dd className="inline">{product.feature}</dd>
            </div>
            <div>
              <dt className="inline font-bold">重量：</dt>
              <dd className="inline">{product.weight}</dd>
            </div>
          </dl>
          <p className="mt-3 rounded-lg border border-amber-300 bg-amber-50 p-3 text-[15px] font-medium leading-6 text-amber-950">
            <strong>購入前確認：</strong>
            {product.check}
          </p>
          <a
            href={product.utmUrl}
            target="_blank"
            rel={EXT_REL}
            className="mt-5 inline-flex min-h-12 items-center justify-center rounded-xl bg-amber-600 px-5 py-3 text-[16px] font-bold text-white hover:bg-amber-700"
          >
            商品ページを見る →
          </a>
        </div>
      </div>
    </article>
  );
}

function ProductStack({
  ids,
  priorityFirst = false,
}: {
  ids: number[];
  priorityFirst?: boolean;
}) {
  return (
    <div className="my-6 grid gap-5">
      {ids.map((id, index) => {
        const product = byId[id];
        if (!product) return null;
        return (
          <ProductCard
            key={id}
            product={product}
            priority={priorityFirst && index === 0}
          />
        );
      })}
    </div>
  );
}

function ProductTableCell({
  product,
  label,
}: {
  product?: Product;
  label: string;
}) {
  if (!product) {
    return <span className="font-bold">{label}</span>;
  }
  const name = displayName(product);
  const hasImage = productImageExists(product.code);
  return (
    <a
      href={product.utmUrl}
      target="_blank"
      rel={EXT_REL}
      className="group flex min-w-[16rem] items-start gap-3 text-gray-900 no-underline"
    >
      <span className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-white">
        {hasImage ? (
          <Image
            src={`${imgBase}/products/${product.code}.webp`}
            alt={`${name}の商品画像`}
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
        <span className="mt-1 block text-xs leading-5 text-gray-900">
          {name}
        </span>
      </span>
    </a>
  );
}

export default function Page() {
  return (
    <>
      <SiteHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="bg-white text-gray-900">
        <div className="mx-auto max-w-5xl px-4 py-4 sm:px-6 lg:px-8">
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
              <li>圧着作業の効率化</li>
            </ol>
          </nav>
        </div>

        <article className="mx-auto max-w-[820px] px-4 pb-16 sm:px-6 lg:px-8">
          <header>
            <div className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-sm font-bold text-emerald-900">
              電気工事・設備工事・制御盤配線 / 2026年8月6日更新
            </div>
            <h1 className={cls.h1}>{title}</h1>
            <P>
              電線の端子を一日に何十回も圧着する。太いCV線になると、手動工具では力が必要で作業に時間がかかる。狭い場所では大型の圧着器を支えながら端子位置を合わせるだけでも負担になる。
            </P>
            <P>
              こうした
              <Mark>圧着作業を効率化</Mark>
              するために検討されるのが、充電式圧着器です。ただし、「電動なら何でも速い」「最大325sqの機械を買えば小さい端子にも使える」という選び方はできません。
            </P>
            <P>
              この記事では、手動工具から充電式圧着器へ切り替える判断基準を、
              <Mark>小型端子 / 14〜60㎟ / 14〜250㎟ / 150〜325㎟</Mark>
              の4クラスに分けて解説します。本体のみと標準セット、ダイス・電池・充電器の総額比較まで含めて整理します。
            </P>
            <figure className="mt-7 overflow-hidden rounded-2xl border border-gray-200">
              <div className="relative aspect-video">
                <Image
                  src={heroImage}
                  alt="電気工事担当者が手動工具と充電式圧着器を比較するイメージ"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 820px"
                />
              </div>
            </figure>
          </header>

          <section className="mt-8 rounded-2xl border border-amber-300 bg-amber-50 p-5 md:p-6">
            <h2 className="text-lg font-extrabold text-amber-950">
              安全・資格に関する注意
            </h2>
            <p className="mt-2 text-[15px] leading-7 text-amber-950">
              電線の接続を伴う電気工事は、設備と作業内容に応じた資格・技術基準・社内手順の順守が必要です。停電・検電、端子・ダイス・工具の適合確認を前提に、有資格者・教育を受けた作業者がメーカー取扱説明書に従ってください。活線作業や無資格作業を前提にしません。
            </p>
          </section>

          <CtaGrid heading="圧着器の商品カテゴリを確認する" />

          <section className="mt-8 rounded-2xl border-2 border-emerald-300 bg-emerald-50 p-6 md:p-7">
            <p className="text-sm font-bold text-emerald-800">30秒でわかる結論</p>
            <h2 className="mt-2 text-[23px] font-extrabold text-gray-900">
              圧着作業は「回数・サイズ・姿勢」で電動化を判断する
            </h2>
            <p className="mt-3 text-[17px] leading-8 text-gray-900 md:text-[18px]">
              小型端子は軽量ハンディ型、14〜60㎟は小型油圧型、14〜250㎟は油圧マルチ、150〜325㎟は大容量専用機を比較します。本体だけでなく、
              <Mark>端子・ダイス・電池・充電器</Mark>
              まで適合確認が必要です。
            </p>
            <ul className="mt-4 space-y-3">
              <li className="rounded-xl border border-emerald-200 bg-white px-4 py-3 text-[15px] leading-7 text-gray-900">
                <strong>同じ端子を繰り返す / 手が疲れる / 14㎟以上を日常扱い</strong>
                → 充電式圧着器を比較しやすい
              </li>
              <li className="rounded-xl border border-emerald-200 bg-white px-4 py-3 text-[15px] leading-7 text-gray-900">
                <strong>年に数回・ダイス管理が難しい</strong>
                → 手動工具の方が合理的なこともある
              </li>
              <li className="rounded-xl border border-emerald-200 bg-white px-4 py-3 text-[15px] leading-7 text-gray-900">
                <strong>大容量機を買えば小さい端子をすべてカバー</strong>
                → できない。サイズ帯で機種を分ける
              </li>
            </ul>
          </section>

          <div className="my-6 overflow-x-auto rounded-2xl border border-gray-300">
            <table className={`min-w-[720px] ${cls.table}`}>
              <thead>
                <tr>
                  <th className={cls.th}>主な対象</th>
                  <th className={cls.th}>タイプ</th>
                  <th className={cls.th}>代表候補</th>
                  <th className={cls.th}>重要確認</th>
                </tr>
              </thead>
              <tbody>
                {sizeRows.map((row) => (
                  <tr key={row.target}>
                    <td className={`${cls.td} font-bold`}>{row.target}</td>
                    <td className={cls.td}>{row.type}</td>
                    <td className={cls.td}>{row.model}</td>
                    <td className={cls.td}>{row.check}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <ProductStack ids={[2, 4, 6, 3]} priorityFirst />

          <H2 id="switch-criteria">
            手動工具から充電式圧着器へ切り替える5つの判断基準
          </H2>
          <SectionImage
            src={`${imgBase}/manual-vs-battery-crimping.jpg`}
            alt="手動圧着工具と充電式圧着器の作業負担を比較するイメージ"
          />
          <P>
            ケーブルカッター記事が「切断」を扱うのに対し、本記事は
            <Mark>圧着作業の省力化と機種選定</Mark>
            に絞ります。切断能力ではなく、圧着回数・端子サイズ・姿勢・ダイス運用で判断します。
          </P>

          <H3>1. 一日あたりの圧着回数</H3>
          <P>
            小型端子を数個処理するだけなら、手動工具の準備の早さが勝つことがあります。反対に、盤内配線・機械配線・設備改修で同じ端子を繰り返す場合は、トリガー操作でサイクルを回せる小型電動機が候補になります。
          </P>

          <H3>2. 電線・端子の最大サイズ</H3>
          <P>
            「普段は22㎟だがときどき250㎟」と「150〜325㎟専用」では機種が異なります。最大値だけでなく、
            <Mark>実際によく使うサイズ帯</Mark>
            を基準にします。大容量機を買えば小さい端子をすべてカバーできるとは限りません。
          </P>
          <ul className={cls.list}>
            <li>
              <strong>14〜60㎟中心</strong>：軽量なEZ1W31
            </li>
            <li>
              <strong>14〜250㎟を幅広く</strong>：EZ46A4
            </li>
            <li>
              <strong>150〜325㎟の大容量専用</strong>：EZ1WD1
            </li>
          </ul>

          <H3>3. 作業姿勢と工具重量</H3>
          <P>
            床上の広い場所か、盤前・天井裏・狭い機械室かで必要重量が変わります。軽量機は能力が小さい代わりに位置合わせしやすく、大型油圧機は能力が高い一方で支える姿勢とスペースが必要です。
          </P>
          <div className="my-4 overflow-x-auto rounded-2xl border border-gray-300">
            <table className={`min-w-[560px] ${cls.table}`}>
              <thead>
                <tr>
                  <th className={cls.th}>機種</th>
                  <th className={cls.th}>主な範囲</th>
                  <th className={cls.th}>重量の目安</th>
                </tr>
              </thead>
              <tbody>
                {weightRows.map((row) => (
                  <tr key={row.model}>
                    <td className={`${cls.td} font-bold`}>{row.model}</td>
                    <td className={cls.td}>{row.range}</td>
                    <td className={cls.td}>{row.weight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <H3>4. ダイス交換と端子種類</H3>
          <P>
            圧着器は本体と端子だけで使えるとは限りません。端子・スリーブに適合する押ダイス・受ダイスが必要です。
            <strong>
              ダイス互換性は推測せず、メーカー指定の組み合わせだけを使います。
            </strong>
            Panasonic EZ1WD1では、従来のEZ46A4用ダイスをそのまま使用できないと案内されています。
          </P>
          <ul className={cls.list}>
            <li>裸圧着端子 / 絶縁被覆付端子 / フェルール</li>
            <li>銅線用か、使用㎟、圧着形状</li>
            <li>メーカー指定ダイス番号</li>
            <li>既存ダイスとの互換性（必ずメーカー確認）</li>
          </ul>

          <H3>5. 本体のみか標準セットか</H3>
          <SectionImage
            src={`${imgBase}/crimper-dies-battery-management.jpg`}
            alt="圧着ダイス・バッテリー・充電器をセット管理するイメージ"
          />
          <P>
            本体のみが安く見えても、電池・充電器・ダイス・ケース・予備電池を足すと総額が逆転することがあります。既存系列の電池がある会社は本体のみ、初回導入や現場一式配備は標準セットが管理しやすいです。
          </P>

          <H2 id="crimp-vs-compress">圧着と圧縮は同じではない</H2>
          <P>
            商品ページでは「圧着器」「圧縮器」「油圧マルチ」という表現が使われます。接続材・工法ごとに必要な圧着形状やダイスが異なるため、「力をかけて潰す作業」とひとまとめにしないことが重要です。
          </P>
          <P>
            Panasonic EZ46A4は、圧着ダイスを使う圧着に加え、別売アタッチメントでT形コネクタの圧縮、盤の打抜き、材料の切断などへ展開できます。多機能である一方、作業ごとのアタッチメントとダイス管理が必要です。
          </P>

          <H2 id="compact">小型端子・フェルールの反復圧着にはEK50ML</H2>
          <SectionImage
            src={`${imgBase}/compact-terminal-crimping-control-panel.jpg`}
            alt="軽量ハンディ圧着器で盤内配線用端子を加工するイメージ"
          />
          <P>
            制御盤内の端子加工、機械配線、絶縁被覆付端子やフェルールの反復作業で、手動圧着ペンチの握り込みを減らしたい場合の中心候補です。
          </P>
          <ul className={cls.list}>
            <li>公称出力15kN、圧着時間1.5秒以下（EK50MLJ）</li>
            <li>約0.96kg（バッテリー含む）</li>
            <li>標準セットは電池・充電器・ケース付属、ダイスは別売</li>
            <li>本体セットだけでは圧着を開始できない点に注意</li>
          </ul>
          <ProductStack ids={[2, 1]} />

          <H2 id="mid-60">14〜60㎟の内線・設備工事にはEZ1W31</H2>
          <SectionImage
            src={`${imgBase}/mid-size-cable-crimping.jpg`}
            alt="軽量充電圧着器で中サイズ電線を圧着するイメージ"
          />
          <P>
            EXENA EZ1W31は、14〜60㎟の圧着を対象とする10.8V機です。内線工事、設備改修、大型機では取り回しにくい場所、片手で端子位置を合わせたい作業に向きます。
          </P>
          <ul className={cls.list}>
            <li>公称圧力40kN、圧着範囲14〜60㎟</li>
            <li>2.1kg（60sqダイス・電池装着時）</li>
            <li>スティック形状、14㎟約470回 / 60㎟約160回の目安</li>
            <li>
              <Mark>60㎟を超える作業には対応しない</Mark>
            </li>
          </ul>
          <H3>F10SB（フルセット）とXB（本体のみ）</H3>
          <P>
            会社内に10.8V対応電池がない場合はセット品、既存電池・充電器がある場合は本体のみを総額で比較します。
          </P>
          <ProductStack ids={[4, 5]} />

          <H2 id="large-250-325">
            14〜250㎟・150〜325㎟の大型圧着はEZ46A4とEZ1WD1
          </H2>
          <SectionImage
            src={`${imgBase}/large-cable-hydraulic-crimping.jpg`}
            alt="大型充電圧着器で太い電力ケーブルを圧着するイメージ"
          />
          <H3>14〜250㎟を幅広く扱うならEZ46A4</H3>
          <P>
            Panasonic EZ46A4は、14〜250㎟の圧着に対応する油圧マルチ型です。幹線・設備配線、60㎟超のCV線、圧縮・打抜き・切断への展開を一台で考えたい場合の候補です。
          </P>
          <ul className={cls.list}>
            <li>出力125kN、14.4V/18Vデュアル</li>
            <li>先端360°回転、規定圧力到達を音で確認</li>
            <li>
              <Mark>5.7kg</Mark>
              のため、作業位置・保持方法・足場を確認
            </li>
          </ul>
          <H3>150〜325㎟の大容量にはEZ1WD1</H3>
          <P>
            Panasonic EZ1WD1は、150〜325㎟に特化した大容量機です。14〜60㎟の日常圧着を置き換える機械ではありません。圧着完了音だけでなく、取扱説明書に従い
            <Mark>圧着完了ライン</Mark>
            も確認します。専用ダイスを使い、従来機ダイスの流用はできません。
          </P>
          <ProductStack ids={[6, 3]} />

          <H2 id="workflow">圧着工程全体を効率化する</H2>
          <SectionImage
            src={`${imgBase}/complete-cable-terminal-workflow.jpg`}
            alt="切断・被覆むき・圧着・確認までの電線端末処理を行うイメージ"
          />
          <P>
            圧着器だけを電動化しても、被覆むき・端子保持・ダイス探し・確認・持ち出しに時間がかかれば全体工数は改善しません。前工程と確認工程をセットで整えます。
          </P>
          <H3>切断・被覆むきと小端子補助</H3>
          <P>
            導体をつぶさず、傷つけず、指定長さで被覆を除去します。KLEINのワイヤーストリッパーや圧着機能付きプライヤーは、対象線径・端子に合わせて補助します。専用圧着工具が必要な端子への代用はしません。
          </P>
          <H3>測定・記録と工具一式</H3>
          <P>
            SANWA PM11は圧着器ではありませんが、施工前後の確認工程を構成する関連工具です。TRUSCOの電設工具セットは周辺工程の標準化に向きますが、圧着器・ダイスが含まれるとは限りません。
          </P>
          <ProductStack ids={[11, 8, 12, 13, 15, 16]} />

          <H2 id="comparison">充電式圧着器の比較表</H2>
          <P>
            本体・重量・強み・購入前確認を並べると、購買と現場の双方で判断しやすくなります。価格・在庫は変動するため、必ず商品ページで最新情報を確認してください。
          </P>
          <div className="my-4 overflow-x-auto rounded-2xl border border-gray-300">
            <table className={`min-w-[920px] ${cls.table}`}>
              <thead>
                <tr>
                  <th className={cls.th}>商品</th>
                  <th className={cls.th}>主な対象</th>
                  <th className={cls.th}>重量目安</th>
                  <th className={cls.th}>強み</th>
                  <th className={cls.th}>購入前の重要確認</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.id}>
                    <td className={cls.td}>
                      <ProductTableCell
                        product={byId[row.id]}
                        label={displayName(byId[row.id])}
                      />
                    </td>
                    <td className={cls.td}>{row.target}</td>
                    <td className={cls.td}>{row.weight}</td>
                    <td className={cls.td}>{row.strength}</td>
                    <td className={cls.td}>{row.check}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <CtaGrid heading="本体・ダイス・電池・充電器を一式で比較する" />

          <H2 id="field-setups">現場別のおすすめ構成</H2>
          <H3>制御盤・機械配線</H3>
          <ul className={cls.list}>
            <li>主役：EK50MLJ</li>
            <li>前工程：K12065CR / 狭所保持：J2078CR</li>
            <li>持ち出し：TRD18またはPK-D1 / 確認：PM11</li>
          </ul>
          <H3>内線・設備改修</H3>
          <ul className={cls.list}>
            <li>主役：EZ1W31F10SB</li>
            <li>予備：手動圧着工具 / 前工程：ワイヤーストリッパー</li>
            <li>工具管理：電設工具セット</li>
          </ul>
          <H3>14〜250㎟の幹線工事</H3>
          <ul className={cls.list}>
            <li>主役：EZ46A4KB</li>
            <li>予備電池・圧着ダイス一覧・アタッチメント管理表</li>
            <li>大型工具を安定して置ける作業場所</li>
          </ul>
          <H3>150〜325㎟の大容量工事</H3>
          <ul className={cls.list}>
            <li>主役：EZ1WD1KB / 専用ダイス</li>
            <li>ケーブル支持・端子保持の補助者または治具</li>
            <li>圧着完了確認手順・予備電池・充電計画</li>
          </ul>

          <H2 id="failures">よくある失敗</H2>
          <H3>最大サイズだけ見て購入する</H3>
          <P>
            325㎟対応機が小型端子にも向くわけではありません。日常的に使うサイズ帯で機種を分けます。
          </P>
          <H3>本体のみを買えば使えると思う</H3>
          <P>
            電池、充電器、ダイス、ケースが別売の場合があります。総額と運用で比較します。
          </P>
          <H3>ダイスを流用できると思い込む</H3>
          <P>
            同一メーカーでもシリーズ間で互換性がない場合があります。推測せずメーカー指定を確認します。
          </P>
          <H3>圧着器を使えば品質確認が不要と思う</H3>
          <P>
            電動化だけで品質が保証されるわけではありません。圧着完了表示、圧着マーク、端子状態、社内検査を確認します。
          </P>
          <H3>被覆むきで導体を傷つける</H3>
          <P>
            圧着器の性能が高くても、導体に傷や欠損があれば適切な接続になりません。
          </P>
          <H3>連続使用で本体を過熱させる</H3>
          <P>
            メーカーの取扱説明書に従い、異常停止や温度表示が出た場合は作業を中断します。
          </P>

          <H2 id="checklist">法人導入チェックリスト</H2>
          <P>
            現場から「圧着器が欲しい」と言われたとき、購買・工務・設備の担当者は次の観点で確認すると手配ミスが減ります。
          </P>
          <ul className="my-6 space-y-3">
            {checkItems.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 text-[15px] leading-7 text-gray-900 shadow-sm"
              >
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded border-2 border-emerald-700 text-sm font-black text-emerald-800"
                >
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <H2 id="faq">よくある質問（FAQ）</H2>
          <div className="my-6 space-y-5">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
              >
                <h3 className={cls.faqQ}>Q. {faq.q}</h3>
                <p className={`mb-0 ${cls.bodySm}`}>A. {faq.a}</p>
              </div>
            ))}
          </div>

          <H2 id="summary">まとめ</H2>
          <P>
            圧着作業の効率化では、最も大きな機械を選ぶのではなく、日常作業を4つのサイズ帯へ分けます。
          </P>
          <ul className={cls.list}>
            <li>
              <strong>小型端子・フェルール</strong>：EK50ML
            </li>
            <li>
              <strong>14〜60㎟</strong>：EZ1W31
            </li>
            <li>
              <strong>14〜250㎟</strong>：EZ46A4
            </li>
            <li>
              <strong>150〜325㎟</strong>：EZ1WD1
            </li>
          </ul>
          <P>
            さらに、本体だけでなく、端子・ダイス・電池・充電器・ケース・被覆むき工具・確認工具まで一つの運用として揃えることが重要です。
          </P>

          <section className="my-10 rounded-xl border-2 border-gray-900 bg-gray-50 p-7 text-center">
            <p className="mb-2 text-lg font-bold tracking-wide text-gray-900 sm:text-xl">
              本体・ダイス・電池・充電器を一式で比較する
            </p>
            <p className={`mb-5 ${cls.bodySm}`}>
              本体価格だけで決めず、現場で使用開始できる付属品と管理方法まで含めて選定してください。
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              {ctas.map((cta) => (
                <a
                  key={cta.label}
                  href={cta.url}
                  target="_blank"
                  rel={EXT_REL}
                  className="inline-flex min-h-12 items-center justify-center rounded-md bg-gray-900 px-6 py-4 text-base font-bold text-white transition hover:bg-gray-700"
                >
                  {cta.label} →
                </a>
              ))}
            </div>
          </section>

          <section className="mt-12 border-t border-gray-200 pt-8">
            <h2 className="mb-4 text-xl font-black text-gray-900">関連記事</h2>
            <ul className="space-y-3">
              {relatedArticles.map((article) => (
                <li key={article.href}>
                  <Link
                    href={article.href}
                    className="font-semibold text-gray-900 underline underline-offset-4 hover:text-orange-700"
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
