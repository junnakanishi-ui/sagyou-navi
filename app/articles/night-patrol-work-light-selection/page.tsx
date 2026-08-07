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

const slug = "night-patrol-work-light-selection";
const siteUrl = "https://www.sagyou-navi.com";
const canonicalUrl = `${siteUrl}/articles/${slug}`;
const imgBase = `/images/articles/${slug}`;
const heroImage = `${imgBase}/night-patrol-work-light-hero.jpg`;
const EXT_REL = "nofollow sponsored noopener noreferrer";

const title =
  "夜間巡回のライトはどう選ぶ？警備・設備点検・停電対応で使い分ける懐中電灯・ヘッドライト【2026年版】";
const shortTitle = "夜間巡回のライトの選び方";
const description =
  "夜間巡回や暗所点検に使うライトを、懐中電灯・ヘッドライト・マグネット作業灯・警告灯・防爆ライトに分けて解説。明るさ、照射距離、点灯時間、充電方式も比較します。";

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
        alt: "夜間巡回で懐中電灯とヘッドライトを使い分けるイメージ",
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
  code: string;
  model: string;
  name: string;
  utmUrl: string;
  category: string;
  badge: string;
  role: string;
  feature: string;
  check: string;
};

type CtaLink = { label: string; url: string };

const featuredIds = new Set<number>(productData.featuredProductIds as number[]);
const allProducts = (productData.products as Product[]).filter((p) =>
  featuredIds.has(p.id)
);
const byId = Object.fromEntries(allProducts.map((p) => [p.id, p])) as Record<
  number,
  Product
>;
const byModel = Object.fromEntries(
  allProducts.map((p) => [p.model, p])
) as Record<string, Product>;
const ctas = productData.ctaLinks as CtaLink[];

const SHORT_NAMES: Record<string, string> = {
  "w5188-2": "充電式ハンディライト W5188-2",
  w5173: "三脚付き警備用ライト W5173",
  "w5187-2": "充電式ハンディライト W5187-2",
  w5190: "ソーラー充電式ライト W5190",
  w5192: "ソーラー充電式ライト W5192",
  w5130: "COBカラビナライトII W5130",
  zf6667: "マグネット作業灯 ZF6667",
  hl23: "充電式LEDヘッドライト HL23",
  c22002: "2WAYミニライト C22002",
  zf6620: "マグネット作業灯 ZF6620",
  "ta020836-tlr6gl40": "TRUSCO アルカリ乾電池 単3 TLR6GL-40",
  "ta020832-tlr03gl40": "TRUSCO アルカリ乾電池 単4 TLR03GL-40",
  "ta053863-bs242": "IRIS 防災セット 2人用 BS242",
  "ta007073-exl182r": "島田 防爆型LED携帯電灯 EXL182R",
  "ta008670-hm65r": "FENIX LEDヘッドライト HM65R",
  "ta008316-gzbh10": "GENTOS 防爆LEDヘッドライト GZ-BH10",
  "ta020689-zxr730": "ZEXUS LEDヘッドライト ZX-R730",
};

const displayName = (product: Product) =>
  SHORT_NAMES[product.code] ?? product.model;

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

const faqs = [
  {
    q: "夜間巡回は何ルーメン必要ですか？",
    a: "一律の必要値は決められません。屋内の近距離点検と広い屋外では条件が異なります。最大ルーメンだけでなく、照射距離、スポット・ワイド配光、弱モード、点灯時間で選びます。",
  },
  {
    q: "懐中電灯とヘッドライトはどちらがよいですか？",
    a: "遠方を狙って照らすなら懐中電灯、記録・鍵操作・工具作業など両手を使うならヘッドライトが向きます。夜間巡回では併用が実務的です。",
  },
  {
    q: "1500lmは明るすぎますか？",
    a: "広い屋外や遠方確認には便利ですが、盤内や白い壁の近距離ではまぶしい場合があります。弱モードへ切り替えられる製品を選びます。",
  },
  {
    q: "ソーラー充電式は停電備蓄に向きますか？",
    a: "充電手段を増やす補助として向きます。ただし、日照条件で充電状況が変わるため、通常はUSBなどで満充電にしておきます。",
  },
  {
    q: "赤青点滅はどんな時に使いますか？",
    a: "異常箇所や作業位置を周囲へ知らせる機能として使えます。使用場所・色・目的は社内ルールや現場責任者の指示を確認します。",
  },
  {
    q: "防爆ライトは何が違いますか？",
    a: "可燃性ガス・蒸気・粉じんが存在する可能性のある場所で使用するため、認証された構造を持つライトです。一般の防水・高耐久ライトとは異なります。",
  },
  {
    q: "携帯ライトは非常用照明の代わりになりますか？",
    a: "なりません。建物の誘導灯・非常用照明器具は法令に基づき維持・点検し、携帯ライトは巡回・確認・補助照明として追加配備します。",
  },
];

const checkItems = [
  "巡回経路を屋内・屋外で分けた",
  "遠方確認と手元作業を分けた",
  "主灯と予備灯を決めた",
  "両手作業者へヘッドライトを配備した",
  "固定式作業灯を班または車両へ配備した",
  "赤青点滅・SOSの使用ルールを決めた",
  "防爆区域と対応製品を照合した",
  "充電担当・充電場所を決めた",
  "乾電池の期限と数量を記録した",
  "月次・四半期の点灯確認を決めた",
  "法定の誘導灯・非常用照明とは別管理にした",
];

const comparisonRows: {
  use: string;
  type: string;
  focus: string;
  models: string[];
}[] = [
  {
    use: "遠方確認",
    type: "ハンディライト",
    focus: "照射距離、配光、弱モード",
    models: ["W5188-2", "W5187-2", "W5190"],
  },
  {
    use: "異常時の注意喚起",
    type: "警告機能付き",
    focus: "SOS、赤青点滅、三脚",
    models: ["W5173"],
  },
  {
    use: "両手点検",
    type: "ヘッドライト",
    focus: "重量、配光、固定、点灯時間",
    models: ["HL23", "HM65R", "ZX-R730"],
  },
  {
    use: "盤内・車両下",
    type: "ワークライト",
    focus: "マグネット、角度、面照明",
    models: ["ZF6667", "ZF6620"],
  },
  {
    use: "小型予備灯",
    type: "カラビナ・2WAY",
    focus: "携帯性、磁石、充電",
    models: ["W5130", "C22002"],
  },
  {
    use: "危険場所",
    type: "防爆ライト",
    focus: "防爆認証、区分、点灯時間",
    models: ["EXL182R", "GZ-BH10"],
  },
  {
    use: "停電備蓄",
    type: "ソーラー・乾電池",
    focus: "充電冗長化、保存期限",
    models: ["W5190", "TLR6GL-40", "TLR03GL-40"],
  },
];

const relatedArticles = [
  {
    href: "/articles/work-light-selection",
    label: "作業用ライトの選び方｜ヘッドライト・懐中電灯・ワークランタン・防爆ライト",
  },
  {
    href: "/articles/explosion-proof-tools-selection",
    label: "防爆工具の選び方",
  },
  {
    href: "/articles/business-disaster-stockpile-checklist",
    label: "事業所の防災備蓄チェックリスト",
  },
  {
    href: "/articles/office-disaster-prevention-supplies",
    label: "オフィスの防災用品の備え方",
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
    <section className="my-8 rounded-2xl border-2 border-amber-300 bg-amber-50 p-5 md:p-6">
      {heading ? (
        <h3 className="mb-4 text-xl font-extrabold text-gray-900">{heading}</h3>
      ) : null}
      <div className="grid gap-3 sm:grid-cols-3">
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
          <span className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-950">
            {product.badge}
          </span>
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
      className="group flex min-w-[14rem] items-start gap-3 text-gray-900 no-underline"
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
              <li>夜間巡回のライト選び</li>
            </ol>
          </nav>
        </div>

        <article className="mx-auto max-w-[850px] px-4 pb-16 sm:px-6">
          <header>
            <div className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-sm font-bold text-amber-950">
              警備・設備点検・停電対応 / 2026年8月5日更新
            </div>
            <h1 className={cls.h1}>{title}</h1>
            <P>
              夜間の施設巡回、工場・倉庫の設備点検、駐車場の確認、停電後の館内確認では、どのライトを持たせればよいのでしょうか。
            </P>
            <P>
              「明るい懐中電灯を一本買えばよい」と考えがちですが、実際の夜間巡回では、遠くを見る場面、両手で作業する場面、同じ場所を長く照らす場面、異常を周囲へ知らせる場面が混在します。
            </P>
            <P>
              そのため、ライトは最大ルーメンだけではなく、
              <Mark>ハンディライト・ヘッドライト・固定式作業灯・警告灯</Mark>
              の役割で分けると選びやすくなります。この記事では、警備会社、施設管理、工場・倉庫の設備保全、法人の防災・購買担当者向けに、夜間巡回用ライトの使い分けと商品選定を解説します。
            </P>
            <figure className="mt-7 overflow-hidden rounded-2xl border border-gray-200">
              <div className="relative aspect-video">
                <Image
                  src={heroImage}
                  alt="夜間巡回で懐中電灯とヘッドライトを使い分けるイメージ"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 850px"
                />
              </div>
            </figure>
          </header>

          <section className="mt-8 rounded-2xl border-2 border-red-300 bg-red-50 p-5 md:p-6">
            <h2 className="text-lg font-extrabold text-red-950 md:text-xl">
              携帯ライトは法定非常用照明の代用品ではありません
            </h2>
            <p className="mt-2 text-[15px] leading-7 text-red-950 md:text-[16px]">
              誘導灯・非常用照明は関連法令に基づいて維持・点検し、懐中電灯やヘッドライトは巡回・確認・補助照明として追加配備してください。常設照明が必要な作業場所を、携帯ライトだけで恒常的に運用しないでください。
            </p>
          </section>

          <CtaGrid heading="まず一覧から確認する" />

          <section className="mt-8 rounded-2xl border-2 border-amber-400 bg-slate-950 p-6 text-white md:p-8">
            <p className="text-sm font-bold text-amber-300">30秒でわかる結論</p>
            <h2 className="mt-2 text-[23px] font-extrabold leading-tight md:text-[28px]">
              夜間巡回は、主灯・ヘッドライト・固定灯・警告灯の4層で考える
            </h2>
            <p className="mt-4 text-[16px] leading-8 text-white md:text-[17px]">
              ハンディライトで遠方を確認し、両手作業にはヘッドライト、同じ場所の点検にはマグネット・三脚式作業灯を使います。異常時はSOSや警告表示、防爆区域では認証済み防爆ライトを選びます。
            </p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                ["探す", "ハンディライトで遠方・敷地を確認"],
                ["作業する", "ヘッドライトで両手を空ける"],
                ["留まる", "固定式作業灯で盤内・車両下を照らす"],
                ["知らせる", "警告灯・SOSで位置と異常を示す"],
              ].map(([label, text]) => (
                <li
                  key={label}
                  className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-[15px] leading-7"
                >
                  <strong className="text-amber-300">{label}：</strong>
                  {text}
                </li>
              ))}
            </ul>
            <p className="mt-4 mb-0 text-[15px] leading-7 text-slate-100">
              さらに、防爆区域がある場合は一般ライトと分け、充電切れへ備えて予備電源を設計します。
            </p>
          </section>

          <SectionImage
            src={`${imgBase}/four-layer-patrol-lighting.jpg`}
            alt="ハンディ・ヘッド・固定・警告ライトを使い分けるイメージ"
          />

          <H2 id="aeo-picks">まず押さえたい巡回ライト3選</H2>
          <P>
            結論のあとですぐ比較したい方向けに、主灯・警告兼用・両手作業の3点を先に置きます。詳細な選び方は続く章で解説します。
          </P>
          <ProductStack ids={[1, 3, 14]} priorityFirst />

          <H2 id="not-lumen-only">夜間巡回用ライトはルーメンだけで選ばない</H2>
          <P>
            ルーメンは、光源から出る光の総量を示す数値です。数値が大きいほど明るい傾向はありますが、
            <Mark>夜間巡回の使いやすさはルーメンだけでは決まりません</Mark>。
          </P>
          <H3>照射距離</H3>
          <P>
            遠いフェンスや建物外周を見る場合は、光がどこまで届くかが重要です。
          </P>
          <H3>配光</H3>
          <ul className={cls.list}>
            <li>
              <strong>スポット光</strong>：遠方・狭い対象
            </li>
            <li>
              <strong>ワイド光</strong>：足元、盤内、機械裏
            </li>
            <li>
              <strong>スポット＋フラッド</strong>
              ：巡回と作業を切り替えやすい
            </li>
          </ul>
          <H3>弱モード</H3>
          <P>
            近距離で1500lmを使うと、反射やまぶしさで見づらくなる場合があります。弱モードがあると、点灯時間を延ばしながら手元を見やすくできます。
          </P>
          <H3>連続点灯時間</H3>
          <P>
            巡回が1時間でも、充電忘れ・応援・停電対応を考えると余裕が必要です。最大光量時と弱モード時を分けて確認します。
          </P>
          <H3>防水・防塵・落下耐久</H3>
          <P>
            屋外巡回、雨天、工場、倉庫では、保護等級や落下耐久を確認します。
          </P>
          <H3>電源方式</H3>
          <P>
            充電式、乾電池式、ソーラー対応を用途と備蓄方針に合わせて選びます。ソーラーは主電源ではなく、充電手段の冗長化として考えます。
          </P>

          <H2 id="flashlight">遠方確認にはハンディライト</H2>
          <SectionImage
            src={`${imgBase}/security-perimeter-flashlight.jpg`}
            alt="警備員が高輝度懐中電灯で建物外周を確認するイメージ"
          />
          <P>
            敷地、フェンス、車両、建物外周、天井、高所など、離れた対象を確認するならハンディライトが主灯になります。
          </P>
          <H3>W5188-2：主灯にしやすい1300lm・6000mAh</H3>
          <P>
            W5188-2は、1300lm、6000mAh、SOS・バーストモードを商品名に持つ充電式ハンディライトです。警備員の外周巡回、工場・倉庫の敷地確認、停電後の館内探索、車両への常備に向きます。購入前には、最大光量時の連続点灯、弱モード、重量、充電時間を確認します。
          </P>
          <H3>W5187-2・W5190・W5192</H3>
          <P>
            W5187-2は1500lm・6000mAhで強い主灯とSOSを組み合わせたい場合の候補です。W5190は強1640lm・弱640lmでUSBに加えてソーラー充電へ対応します。ソーラー対応は充電方法を増やせる点が利点ですが、日照・角度・天候で充電状況が変わるため、
            <Mark>ソーラーだけに依存せず、平時はUSBで満充電</Mark>
            にしておきます。
          </P>
          <ProductStack ids={[4, 5, 6]} />

          <H2 id="warning">警告・注意喚起も行う多機能ライト</H2>
          <SectionImage
            src={`${imgBase}/tripod-warning-light-night.jpg`}
            alt="三脚付きライトと警告点滅で異常箇所を示すイメージ"
          />
          <P>
            W5173は、強1500lm・弱900lm、4500mAh、三脚付きの充電式ライトです。メインライトの白色強・弱・点滅と、サイドライトの白色・赤青点滅を切り替え、巡回から現場表示へ運用を変えられます。
          </P>
          <P>
            ただし、
            <strong>
              赤青点滅の使用場所・目的は社内ルールや現場管理者の指示を確認
            </strong>
            してください。点滅モードは遠くから見つけやすい一方、通常の足元確認や設備点検には向きません。通常巡回は白色連続点灯、異常通知はSOS・点滅、固定照明は三脚やマグネット、と運用を分けます。
          </P>

          <H2 id="headlamp">両手作業にはヘッドライト</H2>
          <SectionImage
            src={`${imgBase}/headlamp-equipment-inspection.jpg`}
            alt="ヘッドライトとマグネット作業灯で設備を点検するイメージ"
          />
          <P>
            鍵の操作、メーター記録、盤内点検、写真撮影、工具使用など、両手が必要な場面ではヘッドライトが向きます。
          </P>
          <H3>HL23：軽量・センサー式で短時間点検に使いやすい</H3>
          <P>
            HL23は、53g、9種類の点灯モード、照射範囲120m、IP44、約3時間の仕様が掲載されています。手をかざしてON/OFFできるセンサー式で、手袋をした点検や短時間の設備確認に使いやすい候補です。ヘルメット固定、センサー誤作動、約3時間で巡回時間をカバーできるか、雨天条件を確認します。
          </P>
          <H3>FENIX HM65R・ZEXUS ZX-R730</H3>
          <P>
            HM65Rは最大1400lm、163m、IP68で、スポット最大1000lmとフラッド最大400lmを別々に操作できます。外周や遠方はスポット、盤内や足元はフラッド、という使い分けがしやすいモデルです。ZX-R730は明るさ、配光、充電方式、ヘルメット装着性を商品ページで確認する高性能候補です。
          </P>
          <ProductStack ids={[27, 29]} />

          <H2 id="work-light">マグネット・三脚・カラビナ式作業灯</H2>
          <P>
            設備点検では、ライトを持ったままでは記録・撮影・工具作業ができません。ヘッドライトに加え、固定できる作業灯を一本用意すると便利です。
          </P>
          <H3>ZF6667・ZF6620</H3>
          <P>
            磁石付き、折りたたみ式、充電式のワークライトです。制御盤の扉、車両・機械の金属面、機械裏・棚下の修理に向きます。磁石はすべての金属へ付くわけではないため、ステンレス・アルミ・塗装面・樹脂カバーでは固定場所を確認します。
          </P>
          <H3>W5130・C22002</H3>
          <P>
            カラビナ、磁石、三脚などを持つ小型ライトは、主灯ではなく予備灯・手元の面照明・ベルト携帯・停電時の簡易ランタンに向きます。C22002は懐中電灯とミニランタンを切り替えられる2WAYタイプで、待機場所・受付・車内・盤内の補助照明に向きます。
          </P>
          <ProductStack ids={[13, 17, 11, 16]} />

          <H2 id="power">充電式・乾電池式・ソーラーをどう使い分けるか</H2>
          <SectionImage
            src={`${imgBase}/workplace-blackout-light-stockpile.jpg`}
            alt="事業所で懐中電灯・乾電池・防災セットを点検するイメージ"
          />
          <div className="my-4 overflow-x-auto rounded-2xl border border-gray-300">
            <table className={`min-w-[640px] ${cls.table}`}>
              <thead>
                <tr>
                  <th className={cls.th}>方式</th>
                  <th className={cls.th}>向く場面</th>
                  <th className={cls.th}>注意点</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={cls.td}>
                    <strong>充電式</strong>
                  </td>
                  <td className={cls.td}>日常巡回、高出力モデル</td>
                  <td className={cls.td}>
                    充電担当が曖昧だと空になる。停電が長引くと再充電できない
                  </td>
                </tr>
                <tr>
                  <td className={cls.td}>
                    <strong>乾電池式</strong>
                  </td>
                  <td className={cls.td}>長期備蓄、複数拠点配備</td>
                  <td className={cls.td}>
                    液漏れ、使用期限、単3・単4の取り違え、新旧混用
                  </td>
                </tr>
                <tr>
                  <td className={cls.td}>
                    <strong>ソーラー充電式</strong>
                  </td>
                  <td className={cls.td}>屋外拠点、停電時の充電冗長化</td>
                  <td className={cls.td}>
                    日照条件に左右される。USB充電を基本にし、ソーラーは補助
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <P>
            TRUSCOの10年保存をうたう単3・単4の40本パックは、乾電池式ライトとセットで数量管理しやすい商品です。防災セットは、ライト単品では不足する備品を人数単位でまとめて配備したい場合に検討します。
          </P>
          <ProductStack ids={[21, 22, 23]} />

          <H2 id="explosion-proof">防爆場所では一般ライトを使わない</H2>
          <SectionImage
            src={`${imgBase}/explosion-proof-light-inspection.jpg`}
            alt="防爆区域で認証済み携帯灯とヘッドライトを使うイメージ"
          />
          <P>
            可燃性ガス、蒸気、粉じんなどが存在する可能性のある場所では、一般の懐中電灯やヘッドライトではなく、現場の防爆区分に適合した製品を選びます。
            <Mark>防水等級や頑丈さと、防爆認証は別</Mark>
            です。「防爆風」表記や防水ライトでは代用できません。
          </P>
          <H3>島田 EXL182R</H3>
          <P>
            防爆型充電式携帯灯で、180/90lm、High 8時間・Low 16時間、IP68、専用充電池内蔵の一次情報が確認できます。一般場所では高ルーメン品が便利でも、防爆場所では明るさより認証適合が優先です。
          </P>
          <H3>GENTOS GZ-BH10</H3>
          <P>
            国内防爆認証取得、200lm、2.5時間、照射角110°、IP65準拠、1m落下耐久のヘッドライトです。両手作業が必要な防爆区域で比較します。
          </P>
          <ProductStack ids={[26, 28]} />
          <CtaGrid heading="防爆・巡回ライトを一覧で見直す" />

          <H2 id="by-site">現場別のおすすめ構成</H2>
          <H3>施設警備・駐車場巡回</H3>
          <ul className={cls.list}>
            <li>主灯：W5188-2またはW5187-2</li>
            <li>作業灯：HL23</li>
            <li>注意喚起：W5173</li>
            <li>予備：小型カラビナライト</li>
          </ul>
          <H3>工場・倉庫の設備点検</H3>
          <ul className={cls.list}>
            <li>主灯：高輝度ハンディライト</li>
            <li>両手：HM65RまたはHL23</li>
            <li>固定灯：ZF6667・ZF6620</li>
            <li>危険区域：EXL182RまたはGZ-BH10</li>
            <li>予備電源：対応乾電池または予備充電灯</li>
          </ul>
          <H3>車両・サービスカー</H3>
          <ul className={cls.list}>
            <li>ソーラー対応ハンディライト</li>
            <li>マグネット式ワークライト</li>
            <li>小型カラビナライト</li>
            <li>予備乾電池・防災セット</li>
          </ul>
          <H3>事業所の停電対応</H3>
          <ul className={cls.list}>
            <li>各階：ハンディライト</li>
            <li>班長・誘導担当：ヘッドライト</li>
            <li>受付・階段前：固定式作業灯</li>
            <li>守衛室：高輝度・警告機能付きライト</li>
            <li>倉庫：予備乾電池・充電管理表</li>
          </ul>

          <H2 id="comparison">用途別比較表</H2>
          <P>
            用途・種類・重点項目・代表候補を並べると、巡回者一人分・車両一台分・施設一拠点分のセットとして比較しやすくなります。
          </P>
          <div className="my-4 overflow-x-auto rounded-2xl border border-gray-300">
            <table className={`min-w-[920px] ${cls.table}`}>
              <thead>
                <tr>
                  <th className={cls.th}>用途</th>
                  <th className={cls.th}>種類</th>
                  <th className={cls.th}>重点項目</th>
                  <th className={cls.th}>代表候補</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.use}>
                    <td className={cls.td}>
                      <strong>{row.use}</strong>
                    </td>
                    <td className={cls.td}>{row.type}</td>
                    <td className={cls.td}>{row.focus}</td>
                    <td className={cls.td}>
                      <div className="flex flex-col gap-3">
                        {row.models.map((model) => (
                          <ProductTableCell
                            key={model}
                            product={byModel[model]}
                            label={model}
                          />
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <H2 id="failures">商品を選ぶときの失敗</H2>
          <H3>最大ルーメンだけで選ぶ</H3>
          <P>
            近距離では反射が強く、まぶしくなる場合があります。弱モード、配光、照射距離を確認します。
          </P>
          <H3>ハンディライトだけ配る</H3>
          <P>
            鍵、記録、撮影、工具作業で片手が塞がります。ヘッドライトか固定灯を併用します。
          </P>
          <H3>充電式だけで備蓄する</H3>
          <P>
            停電が長引くと充電できません。ソーラー、乾電池式、複数台のローテーションを検討します。
          </P>
          <H3>ソーラーなら点検不要と思う</H3>
          <P>
            保管場所に日光が当たらなければ充電されません。通常充電と定期点灯確認が必要です。
          </P>
          <H3>防爆場所で一般ライトを使う</H3>
          <P>
            防水・耐衝撃でも、防爆認証がなければ防爆ライトではありません。
          </P>
          <H3>携帯ライトを非常用照明の代わりにする</H3>
          <P>
            法定の誘導灯・非常用照明は別に維持・点検が必要です。
          </P>

          <H2 id="checklist">法人向け点検・配備チェックリスト</H2>
          <P>
            巡回者・車両・施設単位で必要数を決めるとき、次の観点で確認すると手配ミスが減ります。
          </P>
          <ul className="my-4 space-y-2">
            {checkItems.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-[15px] leading-7 text-gray-900"
              >
                <span
                  aria-hidden="true"
                  className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 border-amber-700 bg-white text-xs font-bold text-amber-800"
                >
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <H2 id="faq">よくある質問</H2>
          <div className="my-6 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="rounded-xl border border-gray-300 bg-white p-5"
              >
                <summary className={`${cls.faqQ} cursor-pointer list-none`}>
                  {faq.q}
                </summary>
                <p className="mt-3 text-[16px] leading-8 text-gray-900">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>

          <H2 id="summary">まとめ</H2>
          <P>
            夜間巡回用ライトは、一番明るい懐中電灯を一台選ぶのではなく、業務を分けてそろえると失敗しにくくなります。
          </P>
          <ul className={cls.list}>
            <li>
              <strong>遠方を探す</strong>：ハンディライト
            </li>
            <li>
              <strong>両手で作業する</strong>：ヘッドライト
            </li>
            <li>
              <strong>同じ場所を照らす</strong>：マグネット・三脚式作業灯
            </li>
            <li>
              <strong>異常を知らせる</strong>：警告・SOS機能
            </li>
            <li>
              <strong>停電へ備える</strong>：ソーラー・乾電池・防災セット
            </li>
            <li>
              <strong>危険場所で使う</strong>：認証済み防爆ライト
            </li>
          </ul>
          <P>
            商品ページへの導線では、単品の明るさだけでなく、巡回者一人分・車両一台分・施設一拠点分のセットとして比較してください。
          </P>

          <CtaGrid heading="巡回者・車両・施設単位で必要数を決める" />
          <P>
            商品単品ではなく、主灯・予備灯・両手照明・固定灯・予備電源を一つのセットとして配備してください。
          </P>

          <H2 id="related">関連記事</H2>
          <ul className="my-4 space-y-3">
            {relatedArticles.map((article) => (
              <li key={article.href}>
                <Link
                  href={article.href}
                  className="text-[16px] font-bold text-gray-900 underline underline-offset-4"
                >
                  {article.label}
                </Link>
              </li>
            ))}
          </ul>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
