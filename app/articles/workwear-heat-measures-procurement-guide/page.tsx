import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";
import productData from "./product-data.json";

const slug = "workwear-heat-measures-procurement-guide";
const siteUrl = "https://www.sagyou-navi.com";
const canonicalUrl = `${siteUrl}/articles/${slug}`;
const imgBase = `/images/articles/${slug}`;
const heroImage = `${imgBase}/workwear-procurement-hero.jpg`;

const title =
  "暑さ対策の作業服は“服だけ”で選ばない。法人が失敗しない支給設計と現場別の組み合わせ【2026年版】";
const shortTitle = "暑さ対策の作業服は“服だけ”で選ばない";
const description =
  "暑さ対策の作業服を検討している法人向けに、水冷服・冷却ビブス・保冷剤・補給用品・休憩所設備・WBGT計まで含めた支給設計の考え方を解説します。現場別の組み合わせ例や、作業用品ナビならではの調達視点で、失敗しにくい選び方を紹介します。";

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
    publishedTime: "2026-08-04",
    modifiedTime: "2026-08-04",
    images: [
      {
        url: `${siteUrl}${heroImage}`,
        width: 1600,
        height: 900,
        alt: "暑さ対策の作業服と周辺備品を法人が比較検討するイメージ",
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
  name: string;
  utmUrl: string;
  shortName?: string;
  badge?: string;
  useCase?: string;
  feature?: string;
  check?: string;
  category: string;
  featured?: boolean;
};

type CtaLink = { label: string; url: string };

const featuredIds = new Set<number>(productData.featuredProductIds as number[]);
const allProducts = productData.products as Product[];
const byId = Object.fromEntries(
  allProducts.filter((p) => featuredIds.has(p.id)).map((p) => [p.id, p])
) as Record<number, Product>;

const primaryCtas = productData.primaryCtaLinks as CtaLink[];
const relatedCtas = productData.relatedCtaLinks as CtaLink[];

const REST_IDS = [9, 10, 33, 34, 43, 45];
const HYDRATION_IDS = [19, 30, 25, 24, 15];
const MANAGEMENT_IDS = [66, 72, 17, 18];

const faqs = [
  {
    q: "暑さ対策の作業服は何から揃えるべきですか？",
    a: "まずは現場を「服だけで足りる現場」と「服だけでは足りない現場」に分けることが先です。その上で、作業服系の主役候補を選び、必要なら補給や休憩設備を追加します。",
  },
  {
    q: "空調服や冷却ベストだけで十分ですか？",
    a: "短時間作業や休憩所が整った現場なら十分な場合もありますが、長時間・重作業・高温環境では、補給や休憩設備まで含めて考えた方が失敗しにくいです。",
  },
  {
    q: "作業服と一緒に何を支給すると効果的ですか？",
    a: "予備保冷剤、飲料、塩分補給、アイススラリー、WBGT計、応急セットなどが組み合わせやすい候補です。",
  },
  {
    q: "水分塩分補給はどこまで備えるべきですか？",
    a: "日常補給用と、体調不良時も含めた備蓄用を分けて考えると運用しやすくなります。",
  },
  {
    q: "WBGT計や応急セットも必要ですか？",
    a: "法人の暑さ対策としては、作業服の支給だけでなく、判断と初動対応まで整えておく方が実務的です。",
  },
];

const checkItems = [
  "現場が「服だけで足りるか」「休憩所設備まで必要か」を分類している",
  "冷却ウェアのサイズ・配布方法・洗い替えを決めている",
  "予備保冷剤の個数と保管場所を決めている",
  "飲料・塩分補給・アイススラリーの補充運用を決めている",
  "WBGT計の設置場所、確認者、記録ルールを決めている",
  "体調不良時の応急セット配置と対応フローを決めている",
];

const relatedArticles = [
  {
    href: "/articles/workwear-heat-protection-clothing",
    label: "現場の暑さ対策は服装から｜冷感インナー・空調服・冷却ベストの選び方",
  },
  {
    href: "/articles/spot-cooler-rest-area",
    label: "スポットクーラーで休憩所を涼しくするには？クーラーテント・工場扇・空調服の使い分け",
  },
  {
    href: "/articles/wbgt-work-rest-time-guideline",
    label: "WBGTと作業時間の目安｜暑さ指数別の休憩時間早見表と現場の熱中症対策",
  },
  {
    href: "/articles/outdoor-work-heatstroke-measures",
    label: "外仕事の熱中症対策｜現場・イベント・屋外倉庫で使える暑さ対策グッズと実務チェックリスト",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  image: [`${siteUrl}${heroImage}`],
  datePublished: "2026-08-04",
  dateModified: "2026-08-04",
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
          sizes="(max-width: 1024px) 100vw, 900px"
        />
      </div>
    </figure>
  );
}

function CtaGrid({
  items,
  heading,
}: {
  items: CtaLink[];
  heading?: string;
}) {
  return (
    <section className="my-8 rounded-2xl border-2 border-orange-300 bg-orange-50 p-5 md:p-6">
      {heading ? (
        <h3 className="mb-4 text-xl font-extrabold text-gray-900">{heading}</h3>
      ) : null}
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {items.map((cta) => (
          <a
            key={cta.label}
            href={cta.url}
            target="_blank"
            rel="nofollow sponsored"
            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-orange-600 px-4 py-3 text-center text-[15px] font-extrabold text-white hover:bg-orange-700"
          >
            {cta.label} →
          </a>
        ))}
      </div>
    </section>
  );
}

function ProductCard({
  product,
  priority = false,
}: {
  product: Product;
  priority?: boolean;
}) {
  const name = product.shortName || product.name;
  const imageSrc = `${imgBase}/products/${product.id}.webp`;

  return (
    <article className="rounded-2xl border border-gray-300 bg-white p-5 shadow-sm md:p-6">
      <div className="grid gap-5 md:grid-cols-[200px_1fr] md:items-start">
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
          <Image
            src={imageSrc}
            alt={`${name}の商品画像`}
            width={400}
            height={400}
            priority={priority}
            className="h-auto w-full object-contain p-3"
          />
        </div>
        <div>
          <span className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-bold text-sky-900">
            {product.badge || product.category}
          </span>
          <h3 className="mt-3 text-[20px] font-extrabold leading-snug text-gray-900 md:text-[22px]">
            {name}
          </h3>
          <dl className="mt-4 space-y-2 text-[15px] leading-7 text-gray-900 md:text-[16px]">
            <div>
              <dt className="inline font-bold">向く現場：</dt>
              <dd className="inline">
                {product.useCase || "暑さ対策の作業現場"}
              </dd>
            </div>
            <div>
              <dt className="inline font-bold">特徴：</dt>
              <dd className="inline">
                {product.feature || "詳細は商品ページをご確認ください。"}
              </dd>
            </div>
          </dl>
          <p className="mt-3 rounded-lg border border-amber-300 bg-amber-50 p-3 text-[15px] font-medium leading-6 text-amber-950">
            <strong>運用上の確認点：</strong>
            {product.check || "仕様・運用方法をご確認ください。"}
          </p>
          <a
            href={product.utmUrl}
            target="_blank"
            rel="nofollow sponsored"
            className="mt-5 inline-flex min-h-12 items-center justify-center rounded-xl bg-orange-600 px-5 py-3 text-[16px] font-bold text-white hover:bg-orange-700"
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
  const name = product.shortName || product.name;
  return (
    <a
      href={product.utmUrl}
      target="_blank"
      rel="nofollow sponsored"
      className="group flex min-w-[16rem] items-start gap-3 text-gray-900 no-underline"
    >
      <span className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-white">
        <Image
          src={`${imgBase}/products/${product.id}.webp`}
          alt={`${name}の商品画像`}
          fill
          sizes="80px"
          className="object-contain p-1.5"
        />
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
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
              <li>暑さ対策 作業服</li>
            </ol>
          </nav>
        </div>

        <article className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
          <header>
            <div className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-sm font-bold text-sky-900">
              作業用品ナビ編集部 / 2026年8月4日更新
            </div>
            <h1 className={cls.h1}>{title}</h1>
            <P>
              「暑さ対策
              作業服」で検索すると、空調服や冷却ベスト、冷感インナーなど多くの選択肢が出てきます。ただ、法人購買や現場責任者の立場で考えると、本当に知りたいのは「一番涼しい服は何か」だけではありません。この記事では、作業服そのものの選び方に加え、休憩環境・補給・管理備品まで含めた
              <Mark>支給設計</Mark>
              で、失敗しにくい組み合わせを整理します。
            </P>
            <figure className="mt-7 overflow-hidden rounded-2xl border border-gray-200">
              <div className="relative aspect-video">
                <Image
                  src={heroImage}
                  alt="暑さ対策の作業服と周辺備品を法人が比較検討するイメージ"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 900px"
                />
              </div>
            </figure>
          </header>

          <CtaGrid
            items={primaryCtas}
            heading="まず確認したい主要カテゴリ"
          />

          <section className="mt-8 rounded-2xl border-2 border-sky-300 bg-sky-50 p-6 md:p-7">
            <h2 className="text-[23px] font-extrabold text-gray-900">
              先に結論｜暑さ対策の作業服はどう選ぶ？
            </h2>
            <p className="mt-3 text-[17px] leading-8 text-gray-900 md:text-[18px]">
              暑さ対策の作業服は、服単体で選ぶよりも、
              <Mark>「着る冷却」＋「休憩」＋「補給」＋「管理」</Mark>
              の4点セットで考える方が失敗しにくいです。とくに法人では、作業服だけを支給して終わると、運用で不足が出やすくなります。
            </p>
            <ul className={`${cls.list} mt-4`}>
              <li>
                <strong>屋外で短時間〜中時間作業</strong>
                → 作業服中心で考えやすい
              </li>
              <li>
                <strong>重作業・高温環境・長時間作業</strong>
                → 作業服だけでは足りず、保冷剤や休憩所設備も必要になりやすい
              </li>
              <li>
                <strong>複数人現場</strong>
                → 飲料、塩分補給、WBGT計、応急セットまで備えたい
              </li>
              <li>
                <strong>待機時間が長い現場</strong>
                → テントや冷風扇など、休憩環境の比重が上がる
              </li>
            </ul>
          </section>

          <H2 id="procurement-design">
            作業用品ナビ版の結論：作業服は「支給設計」で選ぶ
          </H2>
          <P>
            熱中症対策ナビのような一般向け・安全対策寄りの記事では、「空調服と冷却ベストの違い」「現場別に何が向くか」といった整理が主軸になります。一方、作業用品ナビでは、
            <strong>購買・調達・現場運用</strong>
            まで踏み込んだ考え方が求められます。主役はあくまで作業服ですが、服だけでは足りない現場も多いため、着る冷却・休憩環境・水分塩分補給・管理備品まで含めて設計します。
          </P>

          <H3>服だけで足りる現場</H3>
          <ul className={cls.list}>
            <li>短時間作業が多い</li>
            <li>屋外でも移動中心で、強い熱源が少ない</li>
            <li>休憩環境がすでに整っている</li>
            <li>少人数で柔軟に運用できる</li>
          </ul>
          <P>
            この場合は、作業服や冷却ウェアを中心に選んでも比較的運用しやすいです。
          </P>

          <H3>服だけでは足りない現場</H3>
          <ul className={cls.list}>
            <li>真夏の屋外で長時間作業する</li>
            <li>重作業で身体発熱が大きい</li>
            <li>休憩所が未整備</li>
            <li>多人数で一律支給する</li>
            <li>体調不良時の初動対応も考えたい</li>
          </ul>
          <P>
            この場合、作業服だけでは対策が薄くなりやすく、
            <strong>補給・休憩所・管理機器</strong>
            まで組み合わせる必要があります。
          </P>

          <H2 id="wearable-cooling">主役になる“着る冷却”の選び方</H2>
          <SectionImage
            src={`${imgBase}/wearable-cooling-options.jpg`}
            alt="水冷服や冷却ビブスなど着る冷却を比較するイメージ"
          />
          <P>
            暑さ対策の作業服を選ぶときは、まず「作業服そのものを見直すのか」「今ある作業服に冷却を足すのか」「休憩・待機時の補助なのか」を分けると迷いにくくなります。
          </P>

          <H3>1. 水冷服：作業服そのものを見直したい時の主役候補</H3>
          <P>
            ＯＰ水冷服
            標準セットは、「まず着る対策を主役にしたい」「空調服だけでは不安」という現場で比較しやすい候補です。
          </P>
          <ProductStack ids={[36]} priorityFirst />

          <H3>2. 冷却ビブス：今ある作業服の上から足したい時に使いやすい</H3>
          <P>
            ICE
            ARMOR専用ビブスは、「作業服を全部入れ替えるのは難しいが、冷却は足したい」という現場で考えやすい商品です。予備保冷剤まで含めて設計すると、初日だけでなく運用が続きやすくなります。
          </P>
          <SectionImage
            src={`${imgBase}/cooling-pack-operation.jpg`}
            alt="予備保冷剤や交換運用を確認するイメージ"
          />
          <ProductStack ids={[12, 13, 14]} />

          <H3>3. 簡易冷感ウェア：休憩中や待機時の補助に向く</H3>
          <P>
            ひえひえ冷感ポンチョ君は、本格的な作業服の代替ではなく、
            <strong>休憩中のクールダウン</strong>
            や、待機時間が長い場面の補助として活かしやすいです。
          </P>
          <ProductStack ids={[40]} />

          <CtaGrid
            items={primaryCtas}
            heading="空調服・冷却ベスト・バートル製品もあわせて比較"
          />

          <H2 id="beyond-workwear">
            作業服だけでは足りない時に足すべきもの
          </H2>
          <SectionImage
            src={`${imgBase}/rest-area-cooling-equipment.jpg`}
            alt="冷風扇やテントで休憩所を整えるイメージ"
          />
          <P>
            暑さ対策の作業服を探している人でも、実務上は「服だけでは限界がある」と感じる場面が少なくありません。特に、屋外の休憩所や仮設事務所、待機スペースが暑いと、作業服の効果も感じにくくなります。
          </P>

          <H3>1. 休憩環境：冷風扇・スポットクーラー・テント</H3>
          <ProductStack ids={REST_IDS} />

          <H3>2. 水分・塩分・アイススラリー</H3>
          <SectionImage
            src={`${imgBase}/hydration-salt-cooling-supplies.jpg`}
            alt="水分塩分補給やアイススラリーを現場で準備するイメージ"
          />
          <P>
            作業服の選定だけに目が行くと見落としやすいのが、
            <strong>補給の運用</strong>
            です。法人では、誰がどこで何を飲むか、何を配るかまで決めておく方が実務では回りやすくなります。
          </P>
          <ProductStack ids={HYDRATION_IDS} />

          <H3>3. 管理・初動対応</H3>
          <SectionImage
            src={`${imgBase}/wbgt-management-scene.jpg`}
            alt="現場責任者がWBGT計や指数計を確認するイメージ"
          />
          <P>
            現場の暑さ対策は、作業服や休憩所だけでは不十分です。実際には、
            <strong>数値で判断する仕組み</strong>
            と、
            <strong>万一の時の初動対応備品</strong>
            を整えてこそ、法人としての対策が一段階進みます。
          </P>
          <ProductStack ids={MANAGEMENT_IDS} />

          <CtaGrid
            items={relatedCtas}
            heading="関連して一緒に見たいカテゴリ"
          />

          <H2 id="site-patterns">現場別の支給パターン</H2>

          <H3>建設・土木現場</H3>
          <ul className={cls.list}>
            <li>
              <strong>主役：</strong>OP水冷服、ICE ARMORビブス
            </li>
            <li>
              <strong>補完：</strong>予備保冷剤、OS-1、熱中タブレット、WBGT計
            </li>
            <li>
              <strong>休憩環境：</strong>シェード、クーラーテント、冷風扇
            </li>
          </ul>

          <H3>倉庫・物流</H3>
          <ul className={cls.list}>
            <li>
              <strong>主役：</strong>ICE ARMORビブス 500gセット、簡易冷感ウェア
            </li>
            <li>
              <strong>補完：</strong>DAKARA PRO、熱中タブレット
            </li>
            <li>
              <strong>休憩環境：</strong>ミニスポットクーラー、冷風扇
            </li>
          </ul>

          <H3>イベント・屋外警備</H3>
          <ul className={cls.list}>
            <li>
              <strong>主役：</strong>軽量側の冷却ウェア
            </li>
            <li>
              <strong>補完：</strong>冷感ポンチョ、アイススラリー、OS-1
            </li>
            <li>
              <strong>休憩環境：</strong>シェード、テント、クーラーテント
            </li>
          </ul>

          <H3>少人数現場と多人数現場</H3>
          <ul className={cls.list}>
            <li>
              <strong>少人数現場：</strong>
              作業服中心 + 飲料 + 簡易測定器でも回しやすい
            </li>
            <li>
              <strong>多人数現場：</strong>
              予備保冷剤、補給在庫、WBGT計、応急セット、休憩所設備まで整えたほうが失敗しにくい
            </li>
          </ul>

          <H2 id="comparison">比較表</H2>
          <H3>“着る対策” の比較</H3>
          <div className="my-4 overflow-x-auto rounded-2xl border border-gray-300">
            <table className={`min-w-[760px] ${cls.table}`}>
              <thead>
                <tr>
                  <th className={cls.th}>タイプ</th>
                  <th className={cls.th}>代表候補</th>
                  <th className={cls.th}>向く場面</th>
                  <th className={cls.th}>強み</th>
                  <th className={cls.th}>注意点</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={cls.td}>水冷服</td>
                  <td className={cls.td}>
                    <ProductTableCell
                      product={byId[36]}
                      label="OP水冷服 標準セット"
                    />
                  </td>
                  <td className={cls.td}>重作業・高温環境</td>
                  <td className={cls.td}>作業服を主役として見直しやすい</td>
                  <td className={cls.td}>使用時間や着用条件を確認したい</td>
                </tr>
                <tr>
                  <td className={cls.td}>冷却ビブス</td>
                  <td className={cls.td}>
                    <ProductTableCell
                      product={byId[12]}
                      label="ICE ARMOR 1kg / 500g"
                    />
                  </td>
                  <td className={cls.td}>今ある作業服に追加</td>
                  <td className={cls.td}>導入しやすく、支給設計しやすい</td>
                  <td className={cls.td}>保冷剤交換の運用が必要</td>
                </tr>
                <tr>
                  <td className={cls.td}>簡易冷感ウェア</td>
                  <td className={cls.td}>
                    <ProductTableCell
                      product={byId[40]}
                      label="ひえひえ冷感ポンチョ君"
                    />
                  </td>
                  <td className={cls.td}>休憩中・待機時</td>
                  <td className={cls.td}>手軽に取り入れやすい</td>
                  <td className={cls.td}>主役というより補助向け</td>
                </tr>
              </tbody>
            </table>
          </div>

          <H3>作業服と一緒に揃えたい周辺対策</H3>
          <div className="my-4 overflow-x-auto rounded-2xl border border-gray-300">
            <table className={`min-w-[640px] ${cls.table}`}>
              <thead>
                <tr>
                  <th className={cls.th}>分類</th>
                  <th className={cls.th}>代表候補</th>
                  <th className={cls.th}>役割</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={cls.td}>休憩環境</td>
                  <td className={cls.td}>
                    冷風扇、スポットクーラー、クーラーテント、シェード
                  </td>
                  <td className={cls.td}>服だけで足りない熱環境を補う</td>
                </tr>
                <tr>
                  <td className={cls.td}>補給</td>
                  <td className={cls.td}>
                    熱中タブレット、OS-1、DAKARA PRO、アイススラリー
                  </td>
                  <td className={cls.td}>水分・塩分・クールダウンの運用</td>
                </tr>
                <tr>
                  <td className={cls.td}>管理</td>
                  <td className={cls.td}>WBGT計、指数計</td>
                  <td className={cls.td}>作業判断の見える化</td>
                </tr>
                <tr>
                  <td className={cls.td}>応急対応</td>
                  <td className={cls.td}>熱中症対策キット、応急セット</td>
                  <td className={cls.td}>体調不良時の初動対応</td>
                </tr>
              </tbody>
            </table>
          </div>

          <H2 id="failures">よくある失敗</H2>
          <ol className="my-4 list-decimal space-y-3 pl-6 leading-[1.95] tracking-[0.04em] text-gray-900">
            <li>
              <strong>作業服だけ支給して終わる</strong>
              <br />
              実際には、休憩所が暑い、補給が足りない、判断基準がない、といった問題が残りやすくなります。
            </li>
            <li>
              <strong>予備保冷剤や運用備品を買わない</strong>
              <br />
              初日は良くても、交換が回らず使われなくなるケースがあります。
            </li>
            <li>
              <strong>現場を分けず一律支給する</strong>
              <br />
              同じ暑さ対策作業服でも、建設現場と倉庫、警備では適した組み合わせが異なります。
            </li>
            <li>
              <strong>数値管理をしない</strong>
              <br />
              感覚だけで判断すると、対策の見直し基準が曖昧になります。
            </li>
            <li>
              <strong>緊急備品まで整えていない</strong>
              <br />
              体調不良時の初動で差が出やすいため、キットやセット品も備えたいです。
            </li>
          </ol>

          <SectionImage
            src={`${imgBase}/heat-illness-response-kit.jpg`}
            alt="応急対応キットや備品を整理するイメージ"
          />

          <H2 id="checklist">法人向け導入チェックリスト</H2>
          <ul className="my-4 space-y-3">
            {checkItems.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-[15px] leading-7 text-gray-900"
              >
                <span
                  aria-hidden="true"
                  className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded border border-gray-400 bg-white text-xs font-bold"
                >
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <H2 id="faq">よくある質問</H2>
          <div className="my-6 space-y-5">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
              >
                <h3 className={cls.faqQ}>Q. {faq.q}</h3>
                <p className={`${cls.bodySm} mb-0`}>A. {faq.a}</p>
              </div>
            ))}
          </div>

          <H2 id="summary">まとめ</H2>
          <P>
            暑さ対策の作業服は、単に「涼しい作業服」を選ぶだけでは、現場で成果が出にくいことがあります。法人で失敗しにくいのは、
            <Mark>作業服を“支給設計”で考えること</Mark>
            です。
          </P>
          <ul className={cls.list}>
            <li>主役になる着る冷却を選ぶ</li>
            <li>予備保冷剤や補助ウェアで運用性を高める</li>
            <li>休憩所の冷却環境を整える</li>
            <li>水分・塩分・アイススラリーを回せる体制にする</li>
            <li>WBGT計や応急セットで判断と初動を補う</li>
          </ul>
          <P>
            この視点で選ぶと、単なる商品紹介で終わらず、法人購買や現場責任者にとって実務で使いやすい情報になります。
          </P>

          <CtaGrid
            items={[...primaryCtas, ...relatedCtas.slice(0, 2)]}
            heading="最終チェック｜関連カテゴリをまとめて確認"
          />

          <section className="mt-12 rounded-2xl border border-gray-200 bg-gray-50 p-6">
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

          <p className={`${cls.meta} mt-10`}>
            ※商品仕様・在庫・価格は変動します。導入前に各商品ページで最新情報をご確認ください。本記事は法人の調達・支給設計の参考情報であり、作業服だけで熱中症対策が完結することを保証するものではありません。
          </p>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
