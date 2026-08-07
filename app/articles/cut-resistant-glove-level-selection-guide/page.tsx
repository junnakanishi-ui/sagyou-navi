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

const slug = "cut-resistant-glove-level-selection-guide";
const siteUrl = "https://www.sagyou-navi.com";
const canonicalUrl = `${siteUrl}/articles/${slug}`;
const imgBase = `/images/articles/${slug}`;
const heroImage = `${imgBase}/cut-resistant-glove-selection-hero.jpg`;
const EXT_REL = "nofollow sponsored noopener noreferrer";

const title =
  "耐切創手袋はどう選ぶ？レベルC・D・手袋・腕カバー・下履きの使い分け【2026年版】";
const shortTitle = "耐切創手袋のレベルと選び方";
const description =
  "耐切創手袋の選び方を、レベルC・D、PU・ニトリル・アラミド、下履き、腕カバー、前掛けまで含めて解説。板金・ガラス・金属バリ・開梱作業の切創対策に役立つ記事です。";

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
    publishedTime: "2026-08-07",
    modifiedTime: "2026-08-07",
    images: [
      {
        url: `${siteUrl}${heroImage}`,
        width: 1600,
        height: 900,
        alt: "板金やガラス作業で耐切創手袋を選ぶイメージ",
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
  name: string;
  utmUrl: string;
  category: string;
  badge: string;
  role: string;
  feature: string;
  check: string;
  use: string;
  included: boolean;
};

type CtaLink = { label: string; url: string };

const featuredIds = new Set<number>(productData.featuredProductIds as number[]);
const allProducts = (productData.products as Product[]).filter(
  (p) => p.included && featuredIds.has(p.id)
);
const byId = Object.fromEntries(allProducts.map((p) => [p.id, p])) as Record<
  number,
  Product
>;
const ctas = productData.ctaLinks as CtaLink[];

const SHORT_NAMES: Record<string, string> = {
  "6300095402": "川西工業 耐切創手袋(レベルD) GM787",
  "6300095399": "川西工業 耐切創手袋(レベルC) GM640",
  "6300065894": "耐切創PU手袋 5双入り M",
  "6300055795": "高耐切創性手袋ニトリルナックル L",
  "6300055801": "高耐切創性下履き手袋 M",
  "ta000905-145m": "トワロン カットレジストインナー M",
  "6300072207": "薄手アラミドワイヤー手甲 15cm",
  "6300044213": "防刃ロング手袋 ポリカ入り",
  "ta016310-tgmb420": "TRUSCO 耐切創腕カバー 420mm",
  "ta004907-armk": "TRUSCO アラミド耐切創保護具 胸付前掛",
  "6300055791": "厚手アラミドワイヤー手袋 L",
  "ta006548-dpm901lk": "TRUSCO アラミド手袋 薄手ロング L",
  "ta007933-glovecut3bl": "3M 耐切創手袋 L レベル3B",
  "ta003317-6063668": "UVEX ユーケミ3200 カットD M",
  "ta011259-mt850dxl": "MAX 森の定番 防振・耐切創手袋 L",
};

const displayName = (product: Product) =>
  SHORT_NAMES[product.code] ?? product.name;

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
    q: "耐切創手袋は普通の作業手袋と何が違いますか？",
    a: "切れ傷のリスクを下げるために、耐切創性を意識した素材や構造になっている点が違います。ただし「切れない手袋」ではなく、切れにくくする保護具として考えます。",
  },
  {
    q: "レベルCとDはどう違いますか？",
    a: "どちらも耐切創性の目安です。実際の選定では、レベルの高さだけでなく、作業性・グリップ・保護範囲も一緒に見ます。高いほど無条件に最適ではありません。",
  },
  {
    q: "板金作業にはどのタイプが向きますか？",
    a: "まずはコーティング付きの主力手袋（GM640 / GM787、PU、ニトリルナックルなど）を比較し、必要に応じてアラミド系や腕カバーを追加するのが基本です。",
  },
  {
    q: "腕カバーは必要ですか？",
    a: "前腕に擦れや切創の危険があるなら必要です。長尺部材や鋭利部材を扱う現場では、手袋だけでは守りきれないことが多いです。",
  },
  {
    q: "下履き手袋はどんな時に便利ですか？",
    a: "既存の手袋運用を残しながら、切創対策だけを足したい時に便利です。軍手やニトリル手袋の下に着けて底上げできます。",
  },
];

const checkItems = [
  "何で手を切りやすいか（バリ・ガラス・刃物など）を整理した",
  "手のどこを守りたいかを決めた",
  "前腕や胸元も守る必要があるかを確認した",
  "グリップ性（油・水・滑り）がどの程度必要かを決めた",
  "下履き運用で改善できるかを検討した",
  "サイズ展開（M/L/LLなど）を揃えられるかを確認した",
  "洗い替え・まとめ買い・共有在庫の単位を決めた",
  "切創以外の危険（針・衝撃・薬品・振動）も確認した",
];

const relatedArticles = [
  {
    href: "/articles/chemical-protective-clothing-selection",
    label: "化学防護服の選び方",
  },
  {
    href: "/articles/welding-shade-glass-number-selection",
    label: "溶接遮光ガラスの番号の選び方",
  },
  {
    href: "/articles/welding-spark-protection-sheet-selection",
    label: "溶接火花養生シートの選び方",
  },
  {
    href: "/articles/safety-shoes-jis-jsaa",
    label: "安全靴のJIS・JSAA規格の見方",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  image: [`${siteUrl}${heroImage}`],
  datePublished: "2026-08-07",
  dateModified: "2026-08-07",
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
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-950">
              {product.badge}
            </span>
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
              <li>耐切創手袋の選び方</li>
            </ol>
          </nav>
        </div>

        <article className="mx-auto max-w-[850px] px-4 pb-16 sm:px-6">
          <header>
            <div className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-sm font-bold text-amber-950">
              安全保護具・板金・ガラス・設備保全 / 2026年8月7日更新
            </div>
            <h1 className={cls.h1}>{title}</h1>
            <P>
              板金、ガラス、設備保全、開梱、金属部材の取り扱いなどの現場では、「刃物を持っていないのに手を切る」事故が起こりやすくなります。
            </P>
            <P>
              原因は、金属のバリ、鋭利な角、割れたガラス、薄い樹脂板、結束バンドの切り口、梱包材の端などさまざまです。しかも実際には、手のひらだけでなく、
              <Mark>手首・前腕・胸元まで傷つくケース</Mark>
              も少なくありません。
            </P>
            <P>
              そこで重要なのが、耐切創手袋を「手袋だけ」で考えず、
              <Mark>作業内容と保護範囲で選ぶこと</Mark>
              です。この記事では、耐切創レベルの見方を押さえながら、PU・ニトリル・アラミド・下履き・腕カバー・前掛けまで含めて整理します。
            </P>
            <figure className="mt-7 overflow-hidden rounded-2xl border border-gray-200">
              <div className="relative aspect-video">
                <Image
                  src={heroImage}
                  alt="板金やガラス作業で耐切創手袋を選ぶイメージ"
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
              「切れない手袋」ではありません
            </h2>
            <p className="mt-2 text-[15px] leading-7 text-red-950 md:text-[16px]">
              耐切創手袋は切創リスクを下げる保護具です。強い押し当てや突き刺し、想定外の鋭利形状では限界があります。レベル表記だけで選ばず、保護範囲と作業性もあわせて判断してください。
            </p>
          </section>

          <CtaGrid heading="まず一覧から確認する" />

          <section className="mt-8 rounded-2xl border-2 border-amber-400 bg-slate-950 p-6 text-white md:p-8">
            <p className="text-sm font-bold text-amber-300">30秒でわかる結論</p>
            <h2 className="mt-2 text-[23px] font-extrabold leading-tight md:text-[28px]">
              切創対策は「どこを切りやすいか」から選ぶ。手袋だけでは足りない現場もある
            </h2>
            <p className="mt-4 text-[16px] leading-8 text-white md:text-[17px]">
              耐切創レベルが高い手袋を買えば終わりではありません。何で切るのか、どこまで守るか、滑りやすさや作業性まで含めて選びます。前腕や胸元も危ない現場では、腕カバーや前掛けの併用が有効です。
            </p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                ["何で切る", "バリ・ガラス・刃物・梱包材を整理する"],
                ["どこを守る", "手だけか、前腕・胸元まで必要か"],
                ["どう握る", "PU・ニトリルなど作業性に合うコーティング"],
                ["どう広げる", "下履き・腕カバー・前掛けを足す"],
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
          </section>

          <H2 id="main-gloves">まず見ておきたい主力の耐切創手袋</H2>
          <P>
            結論のあとですぐ比較したい方向けに、レベルD・レベルC・PU・ニトリルナックルの4点を先に置きます。サイズ違いのSKUは本文では代表品を示し、詳細は一覧CTAへ進んでください。
          </P>
          <ProductStack ids={[29, 33, 34, 39]} priorityFirst />
          <CtaGrid heading="サイズ違い・まとめ買いを一覧で比較する" />

          <H2 id="what-is">耐切創手袋とは何か</H2>
          <P>
            耐切創手袋は、刃物や鋭利部材による切れ傷のリスクを下げるための保護手袋です。ここで大事なのは、
            <Mark>「切れない手袋」ではなく、「切れにくくする保護具」</Mark>
            だということです。
          </P>
          <H3>どんな事故を減らすための保護具か</H3>
          <P>
            板金のバリ、ガラス端、鋭利な樹脂板、開梱時のカッターや結束バンドなど、日常作業の切創ヒヤリハットを減らすことが目的です。手袋選びでは次の3つを同時に見ます。
          </P>
          <ul className={cls.list}>
            <li>
              <strong>切創リスクの強さ</strong>
            </li>
            <li>
              <strong>作業性</strong>（握りやすさ、滑りにくさ）
            </li>
            <li>
              <strong>保護したい範囲</strong>（手・前腕・胸元）
            </li>
          </ul>

          <H3>耐切創レベルを見る意味</H3>
          <P>
            今回の商品群には、レベルC、レベルD、レベル3Bなどの表記が見られます。読者にとって重要なのは、
            <Mark>数字やアルファベットが大きければ無条件に良いわけではない</Mark>
            ことです。
          </P>
          <P>
            高いレベルを求めすぎると、厚くなって細かな作業がしにくくなったり、蒸れやすくなったりする場合があります。逆に、作業性だけで選ぶと切創対策が不十分になることもあります。レベル表記は作業内容に合っているかを判断する目安として使い、素材・コーティング・フィット感とあわせて選びます。
          </P>

          <H2 id="by-work">作業別の選び方</H2>
          <H3>板金・金属バリ作業</H3>
          <SectionImage
            src={`${imgBase}/metal-edge-cut-resistant-gloves.jpg`}
            alt="金属バリのある部材を耐切創手袋で扱うイメージ"
          />
          <P>
            板金、ダクト、鋼板、切断後の金属部材などでは、バリや角で手のひらや指先を切ることが多くなります。コーティングで滑りにくく、適度にフィットし、必要なレベルがあることが大切です。
          </P>
          <P>
            おすすめの起点は、GM787やGM640のようなレベル比較しやすい手袋、耐切創PU手袋、高耐切創性手袋ニトリルナックルです。
          </P>

          <H3>ガラス・鋭利部材</H3>
          <SectionImage
            src={`${imgBase}/glass-handling-arm-protection.jpg`}
            alt="ガラスや鋭利部材を腕カバーと手袋で扱うイメージ"
          />
          <P>
            ガラス、アクリル板、鋭利な樹脂板、割れやすい部材では、切創の鋭さが強くなりやすく、手だけでなく手首や前腕を傷つけることがあります。手袋本体に加えて、防刃ロング手袋、TRUSCO耐切創腕カバー、アラミドワイヤー手甲など、保護範囲を広げる製品が有効です。
          </P>
          <ProductStack ids={[4, 52, 1]} />

          <H3>開梱・物流・設備保全</H3>
          <P>
            開梱作業、設備保全、廃材仕分けなどでは、そこまで重い保護具でなくても、日常的なヒヤリハットを減らしたいケースがあります。このような場面では、PU系や薄手タイプ、あるいは既存手袋の下に着ける下履き手袋が運用しやすくなります。
          </P>

          <H2 id="by-type">タイプ別の選び方</H2>
          <H3>1. PU・ニトリル・フォーム系</H3>
          <P>
            作業性と耐切創性のバランスを取りやすい主力カテゴリです。日常的な板金・金属加工、開梱・物流、すべりにくさを求める作業に向きます。
          </P>
          <ul className={cls.list}>
            <li>耐切創PU手袋</li>
            <li>高耐切創性手袋ニトリルナックル</li>
            <li>3M耐切創手袋</li>
            <li>川西工業 GM640 / GM787</li>
          </ul>
          <ProductStack ids={[44]} />

          <H3>2. アラミド・ワイヤー系</H3>
          <P>
            より鋭利な部材や、高リスク寄りの現場で比較しやすいカテゴリです。厚手・薄手・ロングなどの違いがあるため、作業に応じて選び分けます。
          </P>
          <ProductStack ids={[10, 57]} />

          <H3>3. 下履き手袋</H3>
          <SectionImage
            src={`${imgBase}/inner-cut-resistant-glove-layering.jpg`}
            alt="下履きの耐切創手袋を別の手袋の下に着けるイメージ"
          />
          <P>
            現場によっては、今使っている手袋やニトリル手袋をすぐ全て切り替えるのが難しいことがあります。その場合に便利なのが下履き手袋です。既存運用を大きく変えずに耐切創性を足せます。
          </P>
          <ProductStack ids={[37, 53]} />

          <H3>4. 腕カバー・手甲・前掛け</H3>
          <SectionImage
            src={`${imgBase}/forearm-chest-cut-protection.jpg`}
            alt="腕カバーや前掛けで保護範囲を広げるイメージ"
          />
          <P>
            切創事故は、手だけでなく前腕・肘下・胸元でも起こります。長尺物を抱える、前腕がこすれる、部材の端が体に当たる作業では、このカテゴリが重要です。
          </P>
          <ProductStack ids={[64]} />

          <H3>5. 複合リスク向け高機能品</H3>
          <SectionImage
            src={`${imgBase}/high-function-cut-impact-needle-gloves.jpg`}
            alt="耐切創に加えて耐衝撃や耐針にも対応する手袋のイメージ"
          />
          <P>
            切創だけでなく、耐針、耐衝撃、耐薬品、防振など別の危険もある現場では、高機能タイプを検討します。切創以外に必要な性能を明確にしてから選びます。
          </P>
          <ProductStack ids={[50, 55]} />
          <CtaGrid heading="高機能タイプも含めて一覧で見直す" />

          <H2 id="comparison">商品比較｜どう選ぶと失敗しにくいか</H2>
          <P>
            用途ごとに代表候補を並べると、現場への導入単位で比較しやすくなります。サイズ違いや入数は一覧ページで確認してください。
          </P>
          <div className="my-4 overflow-x-auto rounded-2xl border border-gray-300">
            <table className={`min-w-[920px] ${cls.table}`}>
              <thead>
                <tr>
                  <th className={cls.th}>用途</th>
                  <th className={cls.th}>考え方</th>
                  <th className={cls.th}>代表候補</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={cls.td}>
                    <strong>日常の主力</strong>
                  </td>
                  <td className={cls.td}>
                    レベルと作業性のバランスを見る
                  </td>
                  <td className={cls.td}>
                    <div className="flex flex-col gap-3">
                      <ProductTableCell
                        product={byId[29]}
                        label="GM787 レベルD"
                      />
                      <ProductTableCell
                        product={byId[33]}
                        label="GM640 レベルC"
                      />
                      <ProductTableCell
                        product={byId[34]}
                        label="耐切創PU手袋"
                      />
                      <ProductTableCell
                        product={byId[39]}
                        label="ニトリルナックル"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className={cls.td}>
                    <strong>既存運用に追加</strong>
                  </td>
                  <td className={cls.td}>下履きで切創対策を底上げする</td>
                  <td className={cls.td}>
                    <div className="flex flex-col gap-3">
                      <ProductTableCell
                        product={byId[37]}
                        label="高耐切創性下履き"
                      />
                      <ProductTableCell
                        product={byId[53]}
                        label="カットレジストインナー"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className={cls.td}>
                    <strong>保護範囲を広げる</strong>
                  </td>
                  <td className={cls.td}>前腕・胸元まで守る</td>
                  <td className={cls.td}>
                    <div className="flex flex-col gap-3">
                      <ProductTableCell
                        product={byId[52]}
                        label="耐切創腕カバー"
                      />
                      <ProductTableCell
                        product={byId[1]}
                        label="アラミドワイヤー手甲"
                      />
                      <ProductTableCell
                        product={byId[64]}
                        label="胸付前掛"
                      />
                      <ProductTableCell
                        product={byId[4]}
                        label="防刃ロング手袋"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className={cls.td}>
                    <strong>複合リスク</strong>
                  </td>
                  <td className={cls.td}>耐針・耐衝撃・耐薬品・防振も見る</td>
                  <td className={cls.td}>
                    <div className="flex flex-col gap-3">
                      <ProductTableCell
                        product={byId[50]}
                        label="UVEX ユーケミ3200"
                      />
                      <ProductTableCell
                        product={byId[55]}
                        label="MAX 防振・耐切創"
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <H2 id="failures">導入で失敗しやすいポイント</H2>
          <H3>1. レベルだけ見て選ぶ</H3>
          <P>
            高いレベルが悪いわけではありませんが、作業性が落ちると現場で使われなくなる可能性があります。レベルは目安として、グリップとフィット感も確認します。
          </P>
          <H3>2. 手袋だけで十分だと思う</H3>
          <P>
            前腕や胸元に傷が出ている現場では、腕カバーや前掛けを併用する方が合理的です。
          </P>
          <H3>3. サイズを絞りすぎる</H3>
          <P>
            M/L/LLなどのサイズが合わないと、ズレやすくなったり握りにくくなったりします。代表SKUで方向性を決めたら、一覧でサイズ展開を確認してください。
          </P>
          <H3>4. 既存運用を全部変えようとする</H3>
          <P>
            まずは下履き手袋や特定工程だけの切り替えから始める方が定着しやすいです。
          </P>
          <H3>5. 切創以外の危険を見落とす</H3>
          <P>
            針、衝撃、薬品、振動など別の危険があるなら、高機能タイプを検討する必要があります。
          </P>

          <SectionImage
            src={`${imgBase}/cut-resistant-glove-procurement-comparison.jpg`}
            alt="法人担当者が耐切創手袋や腕カバーを比較するイメージ"
          />

          <H2 id="checklist">法人向けチェックリスト</H2>
          <P>
            現場導入・買い替えの前に、次の観点で確認すると手配ミスが減ります。
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
            耐切創手袋を選ぶ時は、単に「丈夫そうな手袋」を選ぶのではなく、次の順番で整理することが重要です。
          </P>
          <ul className={cls.list}>
            <li>
              <strong>何で切るのか</strong>
            </li>
            <li>
              <strong>どこまで守るか</strong>
            </li>
            <li>
              <strong>どのくらいの作業性が必要か</strong>
            </li>
          </ul>
          <P>
            今回のラインナップでは、主力の手袋に加え、下履き、腕カバー、手甲、前掛け、高機能タイプまでそろっているため、現場ごとに段階的な導入がしやすくなっています。まずは主力手袋を比較し、そのうえで前腕保護や下履き運用が必要かを整理すると、商品選定が進めやすくなります。
          </P>

          <CtaGrid heading="関連カテゴリへ移動する" />
          <P>
            サイズ違い・まとめ買い・腕カバーや周辺保護具も含めて比較してください。
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
