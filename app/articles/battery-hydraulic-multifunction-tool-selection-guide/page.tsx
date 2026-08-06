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

const slug = "battery-hydraulic-multifunction-tool-selection-guide";
const siteUrl = "https://www.sagyou-navi.com";
const canonicalUrl = `${siteUrl}/articles/${slug}`;
const imgBase = `/images/articles/${slug}`;
const heroImage = `${imgBase}/battery-hydraulic-multitool-hero.jpg`;
const EXT_REL = "nofollow sponsored noopener noreferrer";

const title =
  "充電油圧式多機能工具はどう選ぶ？圧着・切断・打ち抜きを1台にまとめる導入判断【2026年版】";
const shortTitle = "充電油圧式多機能工具の選び方";
const description =
  "泉 S7GM200R・S7GM250R・RECLI1460MS1・Panasonic EZ46A4XBを例に、充電油圧式多機能工具の選び方を解説。圧着・切断・打ち抜きを1台にまとめる考え方や、本体のみと周辺資産の比較ポイントを整理します。";

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
        alt: "充電油圧式多機能工具で圧着・切断・盤加工の工程を比較するイメージ",
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
  feature: string;
  check: string;
  use: string;
};

type CtaLink = { label: string; url: string };

const products = productData.products as Product[];
const byId = Object.fromEntries(products.map((p) => [p.id, p])) as Record<
  number,
  Product
>;
const ctas = productData.ctaLinks as CtaLink[];

const SHORT_NAMES: Record<number, string> = {
  1: "泉 S7GM200R（200タイプR）",
  2: "泉 S7GM250R（250タイプR）",
  3: "泉 RECLI1460MS1",
  4: "Panasonic EZ46A4XB（本体のみ）",
};

const displayName = (product: Product) =>
  SHORT_NAMES[product.id] ?? product.model;

const isBodyOnly = (product: Product) =>
  product.name.includes("本体のみ") || product.check.includes("本体のみ");

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
  if (badge.includes("200タイプ")) return "bg-cyan-100 text-cyan-950";
  if (badge.includes("250タイプ")) return "bg-indigo-100 text-indigo-950";
  if (badge.includes("小型")) return "bg-teal-100 text-teal-950";
  if (badge.includes("Panasonic")) return "bg-violet-100 text-violet-950";
  return "bg-amber-100 text-amber-950";
};

const faqs = [
  {
    q: "充電油圧式多機能工具は圧着機と何が違いますか？",
    a: "圧着に特化した単機能工具ではなく、切断や打ち抜きなど別工程も視野に入れて、一台へ集約しやすい点が違いです。",
  },
  {
    q: "200タイプRと250タイプRはどう選べばいいですか？",
    a: "価格だけでなく、必要な余裕、現場の性格、標準機として置きたいか、幹線寄りまで見たいかで判断します。",
  },
  {
    q: "本体のみを選んでも大丈夫ですか？",
    a: "既存の電池や充電器、必要周辺品を持っているなら合理的です。初回導入なら総額比較が必要です。",
  },
  {
    q: "1台で本当に効率化できますか？",
    a: "工程がまたがる現場、工具持ち出しが多い現場、標準化したい会社では効果が出やすいです。一方、使う工程が限定的なら専用機の方が合う場合もあります。",
  },
  {
    q: "どんな会社に向いていますか？",
    a: "幹線工事、盤加工、改修工事、保守のように、現場ごとに必要工程が変わる会社に向いています。",
  },
];

const checkItems = [
  "よく使う工程は何か",
  "1台でまとめたい工程は何か",
  "200タイプRか250タイプRか",
  "小型候補も必要か",
  "本体のみか周辺資産込みか",
  "必要なアタッチメントは何か",
  "予備電池・充電器は必要か",
  "工具車や倉庫での保管方法はどうするか",
  "現場ごとの持ち出し表を作れるか",
  "貸出・返却・点検のルールを決められるか",
];

const comparisonRows: {
  id: number;
  position: string;
  fit: string;
  point: string;
}[] = [
  {
    id: 1,
    position: "標準主力候補",
    fit: "標準化を進めたい",
    point: "まず導入軸にしやすい",
  },
  {
    id: 2,
    position: "上位主力候補",
    fit: "余裕のある能力帯を見たい",
    point: "200タイプとの差",
  },
  {
    id: 3,
    position: "小回り比較候補",
    fit: "取り回しを重視したい",
    point: "大型機との役割差",
  },
  {
    id: 4,
    position: "比較・既存資産活用",
    fit: "既存資産を活かしたい",
    point: "本体のみ・周辺費用",
  },
];

const relatedArticles = [
  {
    href: "/articles/electrical-crimping-work-efficiency-guide",
    label:
      "電線の圧着作業を効率化するには？手動工具から充電式圧着器へ切り替える判断基準",
  },
  {
    href: "/articles/cable-cutter-selection",
    label:
      "ケーブルカッターの選び方｜充電式・油圧式・ラチェット式と圧着工具の使い分け",
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
  extraImages = [],
}: {
  product: Product;
  priority?: boolean;
  extraImages?: { src: string; alt: string }[];
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
            {isBodyOnly(product) ? (
              <span className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-bold text-sky-950">
                本体のみ
              </span>
            ) : null}
            <span className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-900">
              {product.use}
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
      {extraImages.length > 0 ? (
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {extraImages.map((img) => (
            <figure
              key={img.src}
              className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50"
            >
              <div className="relative aspect-square">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 640px) 100vw, 220px"
                />
              </div>
            </figure>
          ))}
        </div>
      ) : null}
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
        const extraImages =
          id === 2
            ? [
                {
                  src: `${imgBase}/products/s7gm250r-extra-1.webp`,
                  alt: "泉 S7GM250R の外観画像1",
                },
                {
                  src: `${imgBase}/products/s7gm250r-extra-2.webp`,
                  alt: "泉 S7GM250R の外観画像2",
                },
                {
                  src: `${imgBase}/products/s7gm250r-extra-3.webp`,
                  alt: "泉 S7GM250R の外観画像3",
                },
              ]
            : [];
        return (
          <ProductCard
            key={id}
            product={product}
            priority={priorityFirst && index === 0}
            extraImages={extraImages}
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
        {isBodyOnly(product) ? (
          <span className="mt-1 inline-flex rounded-full bg-sky-100 px-2 py-0.5 text-[10px] font-bold text-sky-950">
            本体のみ
          </span>
        ) : null}
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
              <li>充電油圧式多機能工具の選び方</li>
            </ol>
          </nav>
        </div>

        <article className="mx-auto max-w-[820px] px-4 pb-16 sm:px-6 lg:px-8">
          <header>
            <div className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-sm font-bold text-emerald-900">
              電気工事・盤加工・幹線工事 / 2026年8月6日更新
            </div>
            <h1 className={cls.h1}>{title}</h1>
            <P>
              電気工事や設備改修の現場では、圧着器、ケーブルカッター、パンチャー系の工具を別々に持ち込む場面が少なくありません。工具車の中がかさばる。現場へ持って上がるケースが増える。誰がどの工具を持っているか把握しにくい。さらに、現場によって必要な工程が変わるため、持ち出しミスも起こりやすくなります。
            </P>
            <P>
              こうした悩みに対して検討しやすいのが、
              <Mark>充電油圧式多機能工具</Mark>
              です。ただし、「多機能だから何でもできる」「1台買えばすべての工具を減らせる」と考えるのは危険です。使いたい工程、能力帯、アタッチメント、本体のみか周辺資産込みか、共用ルールまで含めて選ぶ必要があります。
            </P>
            <P>
              この記事では、泉の
              <Mark>S7GM200R・S7GM250R</Mark>
              、RECLI1460MS1、Panasonic EZ46A4XBを軸に、
              <Mark>圧着・切断・打ち抜きを1台にまとめる</Mark>
              判断基準を、商品選びと現場運用の両面から整理します。
            </P>
            <figure className="mt-7 overflow-hidden rounded-2xl border border-gray-200">
              <div className="relative aspect-video">
                <Image
                  src={heroImage}
                  alt="充電油圧式多機能工具で圧着・切断・盤加工の工程を比較するイメージ"
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
              電線の接続や盤加工を伴う電気工事は、設備と作業内容に応じた資格・技術基準・社内手順の順守が必要です。停電・検電、端子・アタッチメント・工具の適合確認を前提に、有資格者・教育を受けた作業者がメーカー取扱説明書に従ってください。活線作業や無資格作業を前提にしません。
            </p>
          </section>

          <CtaGrid heading="充電油圧式多機能工具の商品カテゴリを確認する" />

          <section className="mt-8 rounded-2xl border-2 border-emerald-300 bg-emerald-50 p-6 md:p-7">
            <p className="text-sm font-bold text-emerald-800">30秒でわかる結論</p>
            <h2 className="mt-2 text-[23px] font-extrabold text-gray-900">
              多機能工具は「能力」だけでなく「工程集約」で選ぶ
            </h2>
            <p className="mt-3 text-[17px] leading-8 text-gray-900 md:text-[18px]">
              充電油圧式多機能工具は、圧着だけでなく切断や打ち抜きまで工程をまたぐ現場、工具車や持ち出しケースを減らしたい会社、
              <Mark>標準化</Mark>
              を進めたい会社で導入効果が出やすいです。
            </p>
            <ul className="mt-4 space-y-3">
              <li className="rounded-xl border border-emerald-200 bg-white px-4 py-3 text-[15px] leading-7 text-gray-900">
                <strong>幹線・盤加工・改修で工程がまたがる</strong>
                → 1台集約の候補として検討しやすい
              </li>
              <li className="rounded-xl border border-emerald-200 bg-white px-4 py-3 text-[15px] leading-7 text-gray-900">
                <strong>使う工程がほぼ圧着だけ</strong>
                → 多機能化のメリットは小さく、専用機比較の方が合うこともある
              </li>
              <li className="rounded-xl border border-emerald-200 bg-white px-4 py-3 text-[15px] leading-7 text-gray-900">
                <strong>本体のみと周辺資産込みを混同しない</strong>
                → 電池・充電器・アタッチメント・ケースまで総額で見る
              </li>
            </ul>
          </section>

          <H2 id="main-products">まず比較したい主役の2機種</H2>
          <P>
            今回の比較軸は、まず
            <Mark>S7GM200R（標準主力）</Mark>
            と
            <Mark>S7GM250R（上位主力）</Mark>
            です。この2機種を基準に、必要に応じてRECLI1460MS1やPanasonic
            EZ46A4XBを比較対象として加えるとわかりやすくなります。
          </P>
          <ProductStack ids={[1, 2]} priorityFirst />
          <SectionImage
            src={`${imgBase}/standard-multitool-electrical-work.jpg`}
            alt="標準主力クラスの多機能工具を電気工事で使うイメージ"
          />

          <H2 id="what-is">充電油圧式多機能工具とは何か</H2>
          <P>
            充電油圧式多機能工具は、名前の通り
            <Mark>充電式で、油圧を使い、複数の作業へ展開しやすい工具</Mark>
            です。ここで重要なのは、「多機能」と言っても、最初からすべての工程が自動的に付いてくるわけではない点です。
          </P>
          <ul className={cls.list}>
            <li>本体</li>
            <li>電池</li>
            <li>充電器</li>
            <li>ケース</li>
            <li>各種アタッチメント</li>
            <li>ダイスや関連部材</li>
          </ul>
          <P>
            こうした構成をどう組むかで、実際の使い勝手は変わります。つまり、
            <Mark>本体比較だけでは不十分で、何の工程を1台にまとめたいかが最重要</Mark>
            です。
          </P>

          <H2 id="difference">圧着機や単機能工具と何が違うのか</H2>
          <P>
            通常の圧着機は、圧着工程に特化して選びやすい反面、切断や盤加工が別工具になることがあります。一方、多機能工具は次の利点があります。
          </P>
          <ul className={cls.list}>
            <li>圧着だけでなく、切断や打ち抜きまで視野に入れやすい</li>
            <li>工程ごとの持ち替えを減らせる可能性がある</li>
            <li>工具車や持ち出しケースの整理につながりやすい</li>
          </ul>
          <P>
            ただし、専用機の方が単工程では使いやすい場合もあります。そのため、
            <Mark>
              「専用機を置き換える」のではなく、「工程横断でどこまで集約したいか」
            </Mark>
            という視点で比較するのが重要です。圧着そのものの効率化は
            <Link
              href="/articles/electrical-crimping-work-efficiency-guide"
              className="font-bold underline underline-offset-4"
            >
              圧着作業の効率化ガイド
            </Link>
            、切断は
            <Link
              href="/articles/cable-cutter-selection"
              className="font-bold underline underline-offset-4"
            >
              ケーブルカッターの選び方
            </Link>
            もあわせて参照してください。
          </P>

          <H2 id="benefits">1台にまとめるメリット</H2>
          <SectionImage
            src={`${imgBase}/multitool-workflow-reduction.jpg`}
            alt="複数工具を一台へ集約して持ち出しを減らすイメージ"
          />
          <H3>1. 持ち出し工具を減らしやすい</H3>
          <P>
            現場に持って行くケースが多いほど、忘れ物や積み忘れのリスクが増えます。多機能工具は、工程をまとめることで持ち出し構成をシンプルにしやすくなります。
          </P>
          <H3>2. 工具標準化を進めやすい</H3>
          <P>
            営業所や班ごとに別々の工具構成になっている会社では、標準機を決めるだけでも運用が楽になります。
          </P>
          <H3>3. 購買判断を一本化しやすい</H3>
          <P>
            圧着機、切断工具、打ち抜き工具を個別に検討するより、「このクラスの多機能機を中心に揃える」と決めた方が判断しやすいケースがあります。
          </P>
          <H3>4. 工具車や倉庫の管理が楽になる</H3>
          <P>
            保管場所、貸出管理、点検対象の整理でもメリットが出やすくなります。
          </P>

          <H2 id="pitfalls">注意点｜多機能だからこその落とし穴</H2>
          <SectionImage
            src={`${imgBase}/multitool-attachment-management.jpg`}
            alt="アタッチメントや周辺品をケース管理するイメージ"
          />
          <H3>1. 本体だけでは完結しない</H3>
          <P>
            本体のみの商品を選んだ場合、電池・充電器・ケース・アタッチメントを個別に確認する必要があります。価格比較では、
            <Mark>本体価格と総額を分けて見る</Mark>
            ことが重要です。
          </P>
          <H3>2. アタッチメント管理が必要</H3>
          <P>
            「いざ現場へ持って行ったら必要なアタッチメントがなかった」という失敗は、多機能工具で起きやすいです。
          </P>
          <H3>3. 何でも万能ではない</H3>
          <P>
            使いたい工程や能力帯が違えば、200タイプR、250タイプR、小型候補など、選ぶべき軸も変わります。「多機能＝万能」ではありません。
          </P>

          <H2 id="criteria">導入判断で外せない5つの比較軸</H2>
          <H3>1. 使いたい工程は何か</H3>
          <P>
            最初に確認すべきは、「何の工程を1台にまとめたいのか」です。圧着だけなのか、切断も含めたいのか、打ち抜きや盤加工まで含めたいのか。これが曖昧だと、本体選定もアタッチメント選定もぶれてしまいます。
          </P>

          <H3>2. 能力帯をどう考えるか</H3>
          <P>
            今回は商品名ベースで比較すると、S7GM200RとS7GM250Rがわかりやすい軸になります。仕様の数値差は商品ページ・メーカー資料で必ず確認してください。
          </P>
          <ul className={cls.list}>
            <li>
              <strong>S7GM200R</strong>
              ：まずは標準機を置きたい、多機能化の入口を作りたい
            </li>
            <li>
              <strong>S7GM250R</strong>
              ：一段余裕を持たせたい、幹線寄りや重めの施工にも備えたい
            </li>
            <li>
              <strong>RECLI1460MS1</strong>
              ：小回りや取り回しを重視したい
            </li>
            <li>
              <strong>EZ46A4XB</strong>
              ：Panasonic系の既存資産がある、本体のみで周辺資産を活用したい
            </li>
          </ul>
          <SectionImage
            src={`${imgBase}/high-capacity-multitool-work.jpg`}
            alt="上位クラスの多機能工具を幹線寄りの施工で使うイメージ"
          />

          <H3>3. 本体のみか、周辺資産込みか</H3>
          <P>
            本体価格だけを見ると判断を誤りやすくなります。特にEZ46A4XBのように
            <Mark>「本体のみ」</Mark>
            と明記されている商品は、次の追加要素を必ず整理します。
          </P>
          <ul className={cls.list}>
            <li>電池</li>
            <li>充電器</li>
            <li>ケース</li>
            <li>必要アタッチメント</li>
            <li>予備部材</li>
          </ul>
          <P>
            逆に、すでに同シリーズの周辺資産がある会社では、本体のみの方が合理的になることがあります。
          </P>

          <H3>4. 持ち出し・標準化・共用しやすいか</H3>
          <P>
            多機能工具の導入効果は、現場での作業性だけでなく、
            <Mark>社内運用</Mark>
            でも出ます。工具車の組み方、班ごとの持ち出し、貸出ルール、アタッチメント保管、点検・充電・返却の流れが整うほど、価値は高くなります。
          </P>

          <H3>5. アタッチメント管理を回せるか</H3>
          <P>
            1台で工程を増やすほど、持ち出す付属品も増えます。現場ごとの必要アタッチメント表、ケース内の定位置管理、返却チェックリスト、班ごとの共通ルールを作っておくと、導入後に運用しやすくなります。
          </P>

          <H2 id="comparison-products">比較候補として見ておきたいモデル</H2>
          <ProductStack ids={[3, 4]} />

          <H2 id="product-compare">商品比較｜どれを軸に考えるべきか</H2>
          <H3>泉 充電油圧式多機能工具 S7GM200R</H3>
          <P>
            S7GM200Rは、今回の記事で最も“標準軸”として置きやすい商品です。多機能工具を導入したいが、いきなり最上位クラス一本で決めるより、まずは現場標準機として考えたい会社に向いています。
          </P>
          <ul className={cls.list}>
            <li>標準機を決めたい</li>
            <li>多機能化の導入効果を見たい</li>
            <li>班ごとの工具構成を近づけたい</li>
          </ul>

          <H3>泉 充電油圧式多機能工具 S7GM250R</H3>
          <P>
            S7GM250Rは、200タイプRとの比較で語りやすい主役です。200タイプでは少し不安がある、より余裕を持たせたい、幹線寄りの施工も意識したいという会社に向きます。外観イメージは商品カード上の補助画像も参照してください。
          </P>
          <ul className={cls.list}>
            <li>余裕のある能力帯を取りたい</li>
            <li>工具の上位クラスを検討したい</li>
            <li>幹線寄りの施工も見据えたい</li>
          </ul>

          <H3>泉 充電油圧式多機能工具 RECLI1460MS1</H3>
          <P>
            RECLI1460MS1は、大型クラス一辺倒ではなく、小回りや取り回しも比較したい場合の候補です。対応サイズ帯と使用可能アタッチメントは商品ページで確認し、大型幹線向け機の代替になるとは限らない点に注意してください。
          </P>

          <H3>Panasonic 充電油圧マルチ本体のみ EZ46A4XB</H3>
          <P>
            EZ46A4XBは、泉の多機能工具を検討する際の比較対象として有効です。特にPanasonic系の工具・電池資産が社内にある場合は、単純な本体比較だけでなく、
            <Mark>既存資産を活用できるか</Mark>
            という観点で判断しやすくなります。一方で
            <Mark>本体のみ</Mark>
            のため、周辺品の不足を見落とさないことが重要です。
          </P>

          <H2 id="comparison-table">4機種比較表</H2>
          <div className="my-6 overflow-x-auto rounded-2xl border border-gray-300">
            <table className={`min-w-[820px] ${cls.table}`}>
              <thead>
                <tr>
                  <th className={cls.th}>商品</th>
                  <th className={cls.th}>位置づけ</th>
                  <th className={cls.th}>こんな会社に向く</th>
                  <th className={cls.th}>比較のポイント</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => {
                  const product = byId[row.id];
                  return (
                    <tr key={row.id}>
                      <td className={cls.td}>
                        <ProductTableCell
                          product={product}
                          label={product?.model ?? ""}
                        />
                      </td>
                      <td className={`${cls.td} font-bold`}>{row.position}</td>
                      <td className={cls.td}>{row.fit}</td>
                      <td className={cls.td}>{row.point}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <H2 id="by-site">現場別のおすすめの考え方</H2>
          <SectionImage
            src={`${imgBase}/panel-modification-multitool.jpg`}
            alt="盤加工や改修で多機能工具を活用するイメージ"
          />
          <H3>幹線工事中心の会社</H3>
          <P>
            幹線工事や設備更新で、現場ごとに複数工程が発生しやすい場合は、S7GM200RまたはS7GM250Rを軸に考えやすくなります。「どこまで余裕を見たいか」で200か250かを分け、必要アタッチメントを先に洗い出すのがコツです。
          </P>
          <H3>盤加工・改修中心の会社</H3>
          <P>
            盤加工や改修は、現場ごとに必要工程が変わりやすく、持ち出し工具の整理が導入効果につながりやすい分野です。この場合は、アタッチメントの持ち出し表とセットで導入を考えると失敗しにくくなります。
          </P>
          <H3>保守・多現場対応の会社</H3>
          <P>
            複数現場を回る保守系では、「何を持って行けば大体対応できるか」が重要です。多機能工具はその点で相性がよく、標準ケース化・貸出表・返却チェックを組むと効果が出やすくなります。
          </P>

          <H2 id="failures">導入で失敗しやすいポイント</H2>
          <ul className={cls.list}>
            <li>
              <strong>“多機能”だけで決める</strong>
              ：何を一台にまとめたいかが決まっていなければ、導入効果は薄くなります。
            </li>
            <li>
              <strong>本体価格だけで比べる</strong>
              ：本体のみの商品は、後から周辺品の追加費用が膨らむことがあります。
            </li>
            <li>
              <strong>200タイプと250タイプの差を価格だけで判断する</strong>
              ：必要能力、余裕、作業現場の性格で見分けるべきです。
            </li>
            <li>
              <strong>アタッチメント管理を軽視する</strong>
              ：多機能工具は、アタッチメント管理が運用の肝です。
            </li>
            <li>
              <strong>標準化ルールを決めない</strong>
              ：誰が、どの現場に、何を持ち出すかを決めてこそ導入効果が出ます。
            </li>
          </ul>

          <H2 id="checklist">法人導入チェックリスト</H2>
          <div className="my-6 grid gap-3 sm:grid-cols-2">
            {checkItems.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-gray-300 bg-white px-4 py-3 text-[15px] font-semibold leading-7 text-gray-900"
              >
                □ {item}
              </div>
            ))}
          </div>

          <H2 id="faq">よくある質問</H2>
          <div className="my-6 space-y-4">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="rounded-xl border border-gray-300 bg-white p-5"
              >
                <summary className={`${cls.faqQ} cursor-pointer`}>
                  {item.q}
                </summary>
                <p className="mt-3 text-[16px] leading-8 text-gray-900">
                  {item.a}
                </p>
              </details>
            ))}
          </div>

          <H2 id="summary">まとめ</H2>
          <SectionImage
            src={`${imgBase}/electrical-tool-standardization.jpg`}
            alt="法人が多機能工具を標準化して選定するイメージ"
          />
          <P>
            充電油圧式多機能工具は、単に「高機能な圧着機」ではありません。
            <Mark>
              圧着・切断・打ち抜きなどを、どこまで1台へまとめるかを考えるための工具
            </Mark>
            です。
          </P>
          <ul className={cls.list}>
            <li>
              標準主力候補として <strong>S7GM200R</strong>
            </li>
            <li>
              余裕のある上位候補として <strong>S7GM250R</strong>
            </li>
            <li>
              小回り比較候補として <strong>RECLI1460MS1</strong>
            </li>
            <li>
              既存資産活用の比較候補として{" "}
              <strong>EZ46A4XB（本体のみ）</strong>
            </li>
          </ul>
          <P>
            最終的には、本体価格よりも、使いたい工程、アタッチメント、周辺資産、現場標準化のしやすさで選ぶことが、導入後の満足度につながります。
          </P>

          <CtaGrid heading="関連商品を確認する" />

          <section className="mt-10 rounded-2xl border border-gray-300 bg-gray-50 p-5 md:p-6">
            <h2 className="text-xl font-extrabold text-gray-900">関連記事</h2>
            <ul className="mt-4 space-y-3">
              {relatedArticles.map((article) => (
                <li key={article.href}>
                  <Link
                    href={article.href}
                    className="font-bold text-gray-900 underline underline-offset-4"
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
