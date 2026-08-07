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

const slug = "foam-gap-filling-urethane-spray-guide";
const siteUrl = "https://www.sagyou-navi.com";
const canonicalUrl = `${siteUrl}/articles/${slug}`;
const imgBase = `/images/articles/${slug}`;
const heroImage = `${imgBase}/urethane-foam-gap-filling-hero.jpg`;
const EXT_REL = "nofollow sponsored noopener noreferrer";

const title =
  "発泡ウレタンで隙間埋めする方法｜配管・窓枠・貫通部の使い分けと失敗しない選び方【2026年版】";
const shortTitle = "発泡ウレタンで隙間埋めする方法";
const description =
  "発泡ウレタンで隙間埋めしたい方向けに、340ml・750ml・ハイスペック・ガンタイプの違い、配管・窓枠・貫通部での使い分け、専用ガンや洗浄剤の必要性までわかりやすく解説。作業用品ナビならではの施工・購買視点で、失敗しにくい選び方を紹介します。";

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
    publishedTime: "2026-08-05",
    modifiedTime: "2026-08-05",
    images: [
      {
        url: `${siteUrl}${heroImage}`,
        width: 1600,
        height: 900,
        alt: "発泡ウレタンで配管や窓枠の隙間を埋めるイメージ",
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
  productId: string;
  name: string;
  utmUrl: string;
  shortName: string;
  badge: string;
  useCase: string;
  feature: string;
  check: string;
};

type CtaLink = { label: string; url: string };

const featuredIds = new Set<number>(productData.featuredProductIds as number[]);
const products = (productData.products as Product[]).filter((p) =>
  featuredIds.has(p.id)
);
const byId = Object.fromEntries(products.map((p) => [p.id, p])) as Record<
  number,
  Product
>;
const ctas = productData.primaryCtas as CtaLink[];

const productImageExists = (id: number) => {
  try {
    const filePath = path.join(
      process.cwd(),
      "public",
      "images",
      "articles",
      slug,
      "products",
      `${id}.webp`
    );
    return fs.existsSync(filePath) && fs.statSync(filePath).size > 500;
  } catch {
    return false;
  }
};

const faqs = [
  {
    q: "発泡ウレタンはどこに使えますか？",
    a: "配管まわり、窓枠・サッシまわり、壁の貫通部、すき間補修などで使いやすいです。",
  },
  {
    q: "340mlと750mlはどう違いますか？",
    a: "340mlは少量補修向け、750mlは一般的な隙間埋め向けとして考えるとわかりやすいです。",
  },
  {
    q: "ガンタイプのメリットは何ですか？",
    a: "連続施工しやすく、作業精度や操作性を重視したい現場で向いています。",
  },
  {
    q: "洗浄用クリーナーは必要ですか？",
    a: "ガンタイプを継続運用するなら、作業後の洗浄やメンテナンスのために一緒に考える方が実務的です。",
  },
  {
    q: "ハイスペックタイプは何が違いますか？",
    a: "標準タイプに対し、性能面を重視して選びたい時の比較候補として考えやすい商品です。",
  },
];

const checkItems = [
  "使う部位（配管・窓枠・貫通部など）が明確か",
  "少量補修か、連続施工か整理できているか",
  "標準スプレーで足りるか、ガンタイプが必要か判断できているか",
  "ガンタイプなら専用ガンと洗浄剤を含めて手配するか",
  "養生や後処理も含めて現場へ案内できるか",
];

const comparisonRows: {
  id: number;
  use: string;
  type: string;
  strength: string;
  extra: string;
}[] = [
  {
    id: 4,
    use: "小さな隙間、少量補修",
    type: "340ml / スプレー",
    strength: "少量向けで扱いやすい",
    extra: "基本不要",
  },
  {
    id: 5,
    use: "一般的な隙間埋め",
    type: "750ml / スプレー",
    strength: "標準容量で汎用性が高い",
    extra: "基本不要",
  },
  {
    id: 6,
    use: "性能重視の隙間埋め",
    type: "515ml / スプレー",
    strength: "高機能タイプとして比較しやすい",
    extra: "基本不要",
  },
  {
    id: 2,
    use: "連続施工、施工量が多い現場",
    type: "750ml / ガンタイプ",
    strength: "吐出量調整や連続作業に向く",
    extra: "専用ガン、洗浄剤",
  },
  {
    id: 3,
    use: "ガンタイプ施工",
    type: "専用工具",
    strength: "作業性向上",
    extra: "ガンタイプ本体",
  },
  {
    id: 1,
    use: "ガンの洗浄・保守",
    type: "550ml / 洗浄剤",
    strength: "継続運用に必要",
    extra: "専用ガン",
  },
];

const relatedArticles = [
  {
    href: "/articles/drainage-pipe-leak-test-method",
    label: "排水管の漏れ試験とは？満水試験・空圧試験の違いと記録方法",
  },
  {
    href: "/articles/construction-site-safety-checklist",
    label: "建設現場の安全チェックリスト",
  },
  {
    href: "/articles/aluminum-composite-panel-cut",
    label: "アルミ複合板のカット方法と加工のポイント",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  image: [`${siteUrl}${heroImage}`],
  datePublished: "2026-08-05",
  dateModified: "2026-08-05",
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
          sizes="(max-width: 1024px) 100vw, 850px"
        />
      </div>
    </figure>
  );
}

function CtaGrid({ heading }: { heading?: string }) {
  return (
    <section className="my-8 rounded-2xl border-2 border-orange-300 bg-orange-50 p-5 md:p-6">
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
            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-orange-600 px-4 py-3 text-center text-[15px] font-extrabold text-white hover:bg-orange-700"
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
  const name = product.shortName || product.name;
  const hasImage = productImageExists(product.id);
  const imageSrc = `${imgBase}/products/${product.id}.webp`;

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
          <span className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-900">
            {product.badge}
          </span>
          <h3 className="mt-3 text-[20px] font-extrabold leading-snug text-gray-900 md:text-[22px]">
            {name}
          </h3>
          <dl className="mt-4 space-y-2 text-[15px] leading-7 text-gray-900 md:text-[16px]">
            <div>
              <dt className="inline font-bold">向く用途：</dt>
              <dd className="inline">{product.useCase}</dd>
            </div>
            <div>
              <dt className="inline font-bold">特徴：</dt>
              <dd className="inline">{product.feature}</dd>
            </div>
          </dl>
          <p className="mt-3 rounded-lg border border-amber-300 bg-amber-50 p-3 text-[15px] font-medium leading-6 text-amber-950">
            <strong>確認点：</strong>
            {product.check}
          </p>
          <a
            href={product.utmUrl}
            target="_blank"
            rel={EXT_REL}
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
  const hasImage = productImageExists(product.id);
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
            src={`${imgBase}/products/${product.id}.webp`}
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
              <li>発泡ウレタンで隙間埋め</li>
            </ol>
          </nav>
        </div>

        <article className="mx-auto max-w-[850px] px-4 pb-16 sm:px-6">
          <header>
            <div className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-sm font-bold text-emerald-900">
              隙間埋め・補修材 / 2026年8月5日更新
            </div>
            <h1 className={cls.h1}>{title}</h1>
            <P>
              「発泡ウレタンスプレー」と聞くと、“隙間を埋める泡”というイメージはあっても、実際には
              <Mark>どこに使えるのか</Mark>、
              <Mark>340mlと750mlはどう違うのか</Mark>、
              <Mark>ガンタイプは何が良いのか</Mark>
              がわかりにくい方も多いと思います。
            </P>
            <P>
              特に法人購買や現場担当の視点では、商品名だけで選ぶより、施工量・隙間の大きさ・単発か連続施工か、専用ガンや洗浄剤まで必要か、といった観点で考える方が失敗しにくくなります。
            </P>
            <P>
              この記事では、発泡ウレタンを
              <strong>配管まわり・窓枠・貫通部の隙間埋め</strong>
              に使いたい方向けに、スプレータイプとガンタイプの違い、容量別の選び方、専用ガンや洗浄剤の必要性まで、現場視点と購買視点の両方で整理します。
            </P>
            <figure className="mt-7 overflow-hidden rounded-2xl border border-gray-200">
              <div className="relative aspect-video">
                <Image
                  src={heroImage}
                  alt="発泡ウレタンで配管や窓枠の隙間を埋めるイメージ"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 850px"
                />
              </div>
            </figure>
          </header>

          <CtaGrid heading="まず商品群を確認する" />

          <section className="mt-8 rounded-2xl border-2 border-emerald-300 bg-emerald-50 p-6 md:p-7">
            <h2 className="text-[23px] font-extrabold text-gray-900">
              まず結論：発泡ウレタンは「施工量」と「精度」で選ぶ
            </h2>
            <p className="mt-3 text-[17px] leading-8 text-gray-900 md:text-[18px]">
              発泡ウレタンで隙間埋めする時は、単に「安いもの」「容量が大きいもの」より、
              <Mark>施工量と精度</Mark>
              で選ぶと失敗しにくいです。
            </p>
            <ul className="mt-4 space-y-3">
              <li className="rounded-xl border border-emerald-200 bg-white px-4 py-3 text-[15px] leading-7 text-gray-900">
                <strong>少量補修・使い切り重視</strong> → 発泡ウレタンスプレー
                340ml
              </li>
              <li className="rounded-xl border border-emerald-200 bg-white px-4 py-3 text-[15px] leading-7 text-gray-900">
                <strong>標準的な隙間埋め</strong> → 発泡ウレタンスプレー 750ml
              </li>
              <li className="rounded-xl border border-emerald-200 bg-white px-4 py-3 text-[15px] leading-7 text-gray-900">
                <strong>性能も重視したい</strong> →
                ハイスペック発泡ウレタンスプレー 515ml
              </li>
              <li className="rounded-xl border border-emerald-200 bg-white px-4 py-3 text-[15px] leading-7 text-gray-900">
                <strong>連続施工・吐出量調整・作業精度重視</strong> → ガンタイプ
                BD発泡ウレタン + 専用ガン + 洗浄用クリーナー
              </li>
            </ul>
            <p className="mt-4 mb-0 text-[16px] leading-8 text-gray-900">
              今回の掲載商品は単なる容量違いではなく、
              <Mark>現場の運用に応じて役割が分かれている</Mark>
              ことがポイントです。
            </p>
          </section>

          <H2 id="where-to-use">発泡ウレタンで隙間埋めできる場所</H2>
          <H3>配管まわり</H3>
          <SectionImage
            src={`${imgBase}/pipe-gap-filling-foam.jpg`}
            alt="配管貫通部の隙間を発泡ウレタンで処理するイメージ"
          />
          <P>
            配管の貫通部や設備周辺の隙間埋めは、発泡ウレタンを使う代表的な場面です。細かなすき間に入り込みやすく、手早く充填しやすいため、現場での補修や処理に向いています。
          </P>
          <H3>窓枠・サッシまわり</H3>
          <SectionImage
            src={`${imgBase}/window-frame-foam-insulation.jpg`}
            alt="窓枠やサッシまわりの隙間を発泡ウレタンで補修するイメージ"
          />
          <P>
            窓枠やサッシのまわりで、断熱・気密の補助として隙間を埋めたい場面でも使いやすいです。特に、広めのすき間や、フォームが入り込みやすい部分で有効です。
          </P>
          <H3>壁の貫通部・すき間補修</H3>
          <P>
            配線・配管の通し穴まわり、壁のすき間補修などでも使いやすく、補修材としての需要があります。
          </P>

          <H2 id="spray-products">まず押さえたいスプレータイプ3選</H2>
          <P>
            手軽さ重視ならスプレータイプが基本です。少量補修から一般的な隙間埋めまで対応しやすく、まずはここから候補を絞ると迷いが減ります。
          </P>
          <ProductStack ids={[4, 5, 6]} priorityFirst />
          <CtaGrid heading="用途が固まったら一覧で見直す" />

          <H2 id="spray-vs-gun">スプレータイプとガンタイプの違い</H2>
          <H3>手軽さ重視ならスプレータイプ</H3>
          <P>
            スプレータイプは、比較的手軽に使いやすく、少量補修から一般的な隙間埋めまで対応しやすいのが強みです。単発作業や、現場ごとに使い切りたい場面にも向きます。
          </P>
          <ul className={cls.list}>
            <li>
              <strong>340ml</strong>
              ：小さな隙間、補修、余らせたくない少量施工
            </li>
            <li>
              <strong>750ml</strong>
              ：配管・窓枠・貫通部など、一般的な隙間埋めの中心候補
            </li>
            <li>
              <strong>ハイスペック515ml</strong>
              ：性能面も重視して比較したい場合の候補
            </li>
          </ul>
          <H3>連続施工・精度重視ならガンタイプ</H3>
          <SectionImage
            src={`${imgBase}/foam-gun-application.jpg`}
            alt="ガンタイプ発泡ウレタンを使って連続施工するイメージ"
          />
          <P>
            広範囲の作業や、よりコントロールしながら施工したい場面では、ガンタイプが向いています。吐出量を意識した作業、同じ現場で何度も使う連続施工で差が出やすい選択です。
          </P>
          <ProductStack ids={[2, 3, 1]} />

          <H2 id="by-use-case">用途別にどれを選ぶべきか</H2>
          <H3>少量補修・小さな隙間</H3>
          <P>
            まず候補になるのは
            <Mark>340mlタイプ</Mark>
            です。必要量が少ない場合は、大容量を買うより扱いやすく、無駄も出にくくなります。
          </P>
          <H3>一般的な配管・窓枠・貫通部</H3>
          <P>
            迷ったら
            <Mark>750mlの標準スプレータイプ</Mark>
            が中心候補になります。掲載商品の中でも最も汎用的で、現場支給の標準品としても選びやすい商材です。
          </P>
          <H3>性能重視で選びたい</H3>
          <P>
            標準タイプではなく、もう少し性能軸で差別化したい場合は、
            <strong>ハイスペック発泡ウレタンスプレー 515ml</strong>
            を比較に入れるとわかりやすくなります。
          </P>
          <H3>施工量が多い・連続施工したい</H3>
          <P>
            同じ現場で何度も使う、広めの施工範囲がある、吐出量をコントロールしたい場合は、
            <Mark>ガンタイプ + 専用ガン + 洗浄剤</Mark>
            を一式で考える方が運用しやすいです。
          </P>

          <H2 id="gun-and-cleaner">専用ガンと洗浄剤は必要か</H2>
          <SectionImage
            src={`${imgBase}/foam-gun-cleaner-maintenance.jpg`}
            alt="専用ガンと洗浄用クリーナーをメンテナンスするイメージ"
          />
          <P>
            スプレータイプだけをイメージしていると、専用ガンや洗浄剤は「なくてもいい補助品」に見えるかもしれません。しかし、ガンタイプを選ぶなら、
            <strong>専用ガンと洗浄剤まで含めて一式</strong>
            と考える方が自然です。
          </P>
          <ul className={cls.list}>
            <li>専用ガンがないとガンタイプは使えない</li>
            <li>洗浄剤がないと、作業後のメンテナンスが不十分になりやすい</li>
            <li>継続運用を考えるなら、周辺用品まで揃えるのが実務的</li>
          </ul>
          <P>
            作業用品ナビとしては、この
            <Mark>一式提案</Mark>
            が差別化しやすいポイントです。本体だけ買って現場で止まる、という失敗を避けられます。
          </P>

          <H2 id="comparison">比較表で選ぶポイントを整理する</H2>
          <SectionImage
            src={`${imgBase}/foam-product-selection.jpg`}
            alt="複数の発泡ウレタン製品を比較して選定するイメージ"
          />
          <P>
            用途・容量・タイプ・追加で必要なものを並べると、現場支給と法人購買の双方で判断しやすくなります。
          </P>
          <div className="my-4 overflow-x-auto rounded-2xl border border-gray-300">
            <table className={`min-w-[920px] ${cls.table}`}>
              <thead>
                <tr>
                  <th className={cls.th}>商品</th>
                  <th className={cls.th}>向く用途</th>
                  <th className={cls.th}>容量/タイプ</th>
                  <th className={cls.th}>強み</th>
                  <th className={cls.th}>追加で必要なもの</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.id}>
                    <td className={cls.td}>
                      <ProductTableCell
                        product={byId[row.id]}
                        label={byId[row.id]?.shortName ?? ""}
                      />
                    </td>
                    <td className={cls.td}>{row.use}</td>
                    <td className={cls.td}>{row.type}</td>
                    <td className={cls.td}>{row.strength}</td>
                    <td className={cls.td}>{row.extra}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <H2 id="combos">用途別おすすめの組み合わせ</H2>
          <H3>1. とりあえず小規模補修をしたい</H3>
          <ul className={cls.list}>
            <li>発泡ウレタンスプレー 340ml</li>
          </ul>
          <H3>2. 現場で幅広く使いたい</H3>
          <ul className={cls.list}>
            <li>発泡ウレタンスプレー 750ml</li>
            <li>必要に応じてハイスペック発泡ウレタンスプレー 515ml</li>
          </ul>
          <H3>3. しっかり施工・連続施工したい</H3>
          <ul className={cls.list}>
            <li>ガンタイプ BD発泡ウレタン 750ml</li>
            <li>BD発泡ウレタン専用ガン HT-GUN</li>
            <li>発泡ウレタン専用ガン 洗浄用クリーナー 550ml</li>
          </ul>
          <CtaGrid heading="組み合わせが決まったら商品を確認する" />

          <H2 id="failures">よくある失敗</H2>
          <H3>1. 少量作業なのに大容量を選ぶ</H3>
          <P>
            少しだけ埋めたいのに大容量を買うと、使い切れず無駄が出やすくなります。
          </P>
          <H3>2. 施工量が多いのに小容量で済ませようとする</H3>
          <P>
            逆に、施工量が多い現場では、小容量を何本も使うより、標準容量やガンタイプの方が効率的です。
          </P>
          <H3>3. ガンタイプなのに周辺用品を揃えない</H3>
          <P>
            専用ガンや洗浄剤がないと、せっかくのガンタイプの良さを活かしきれません。
          </P>
          <H3>4. 発泡後の膨張を見越さない</H3>
          <P>
            フォーム系の商材は、施工後のふくらみを見越して作業することが重要です。
          </P>
          <H3>5. 養生や後処理を軽視する</H3>
          <P>
            はみ出し処理や周辺養生も、仕上がりを左右するポイントです。
          </P>

          <H2 id="checklist">法人向け導入チェックリスト</H2>
          <SectionImage
            src={`${imgBase}/foam-procurement-checklist.jpg`}
            alt="法人担当者が発泡ウレタンの導入を検討するイメージ"
          />
          <P>
            現場から「発泡ウレタンが欲しい」と言われたとき、購買・総務・設備保全の担当者は次の観点で確認すると手配ミスが減ります。
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
            発泡ウレタンの隙間埋めは、商品名だけで選ぶより、
            <Mark>どの部位に・どのくらい使うか</Mark>
            で選ぶと失敗しにくくなります。
          </P>
          <ul className={cls.list}>
            <li>小規模補修なら340ml</li>
            <li>標準的な隙間埋めなら750ml</li>
            <li>性能重視ならハイスペック515ml</li>
            <li>連続施工や精度重視ならガンタイプ + 専用ガン + 洗浄剤</li>
          </ul>
          <P>
            この切り口で見ると、単なる商品紹介ではなく、検索ユーザーが知りたい情報を整理しながら、自然に商品ページへ進めます。
          </P>

          <section className="my-10 rounded-xl border-2 border-gray-900 bg-gray-50 p-7 text-center">
            <p className="mb-2 text-lg font-bold tracking-wide text-gray-900 sm:text-xl">
              発泡ウレタンの隙間埋め商品を確認する
            </p>
            <p className={`mb-5 ${cls.bodySm}`}>
              標準スプレーからガンタイプ・専用ガン・洗浄剤まで、用途に合わせて比較できます。
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              {ctas.map((cta) => (
                <a
                  key={cta.label}
                  href={cta.url}
                  target="_blank"
                  rel={EXT_REL}
                  className="inline-block rounded-md bg-gray-900 px-6 py-4 text-base font-bold text-white transition hover:bg-gray-700"
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
