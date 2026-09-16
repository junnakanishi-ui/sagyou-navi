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

const SLUG = "clamping-kit-t-slot-selection-guide";
const SITE_URL = "https://www.sagyou-navi.com";
const CANONICAL = `${SITE_URL}/articles/${SLUG}`;
const SEO_TITLE =
  "クランピングキットの選び方｜T溝サイズ・ねじ径・適合比較【2026年版】";
const H1 =
  "クランピングキットの選び方｜T溝サイズ・ねじ径・フライス盤への適合を失敗しない比較ガイド【2026年版】";
const SHORT_TITLE = "クランピングキットの選び方｜T溝サイズ比較";
const DESCRIPTION =
  "クランピングキットの選び方を、T溝サイズ・ねじ径・フライス盤への適合で解説。TRUSCOのCK-8、CK-10、CK-12A、CK-14、CK-16を比較し、どのサイズを選べばよいか分かりやすく整理します。";
const PUBLISHED = "2026-09-16";
const MODIFIED = "2026-09-16";
const HERO = "clamping-kit-hero.webp";
const IMG = (file: string) => `/images/articles/${SLUG}/${file}`;
const PROD = (file: string) => `/images/articles/${SLUG}/products/${file}`;
const EXT_REL = "nofollow sponsored noopener noreferrer";

type FeaturedProduct = (typeof productData.featuredProducts)[number];

const products = productData.featuredProducts;
const byModel = Object.fromEntries(
  products.map((p) => [p.model, p])
) as Record<string, FeaturedProduct>;

const mainCta = productData.cta.main;
const secondaryCtas = productData.cta.secondary;

const checklist = [
  {
    n: "01",
    title: "まず工作機械のT溝幅を確認する",
    body: "テーブルのT溝幅が合わないと、Tスロットナットもスタッドも正しく使えません。機械名の記憶だけで決めないことが最重要です。",
  },
  {
    n: "02",
    title: "次に適合するMサイズ（ねじ径）を確認する",
    body: "M8 / M10 / M12 / M14 / M16は、T溝幅とセットで決まります。「大きいほど安心」ではなく、設備に合う径を選びます。",
  },
  {
    n: "03",
    title: "固定したいワーク形状と使い方を整理する",
    body: "プレート材、長尺物、異形物、治具ベースなど、万力では固定しにくい対象ほどクランピングキットの強みが生きます。",
  },
  {
    n: "04",
    title: "比較表で最終候補を絞る",
    body: "CK-8〜CK-16をT溝幅×ねじ径で並べ、自社設備に合うモデルから商品ページへ進みます。",
  },
] as const;

const components = [
  {
    title: "スタッドボルト",
    body: "Tスロットナットとクランプをつなぐ軸。複数長さが入っていると、ワーク高さや治具条件に合わせやすくなります。",
  },
  {
    title: "Tスロットナット",
    body: "工作機械テーブルのT溝にはめて使う基礎部品。ここが機械寸法に合っていることが大前提です。",
  },
  {
    title: "ステップクランプ",
    body: "ワークを押さえる部材。形状の自由度が高く、プレートや治具ベースの固定に向きます。",
  },
  {
    title: "ステップブロック",
    body: "クランプ高さを調整するための支持部材。段差を利用して、無理のないクランプ姿勢を作りやすくなります。",
  },
  {
    title: "ナット類",
    body: "フランジナットやカップリングナットは、締結と高さ調整を補助します。樹脂トレー付きセットは保管・段取り替えにも便利です。",
  },
] as const;

const useCases = [
  {
    title: "小型のフライス盤・小さめテーブルなら",
    model: "CK-8",
    mark: "T溝10mm / M8",
    body: "小型設備の標準セットとして導入しやすい入り口サイズです。",
  },
  {
    title: "一般的な汎用フライス盤なら",
    model: "CK-10",
    mark: "T溝12mm / M10",
    body: "最も基準にしやすいモデル。比較記事の中心にも置きやすい汎用サイズ帯です。",
  },
  {
    title: "中型機・標準的な設備更新なら",
    model: "CK-12A",
    mark: "T溝14mm / M12",
    body: "汎用〜中型帯の橋渡しに向く、検索されやすいM12帯の定番候補です。",
  },
  {
    title: "やや大型の工作機械なら",
    model: "CK-14",
    mark: "T溝16mm / M14",
    body: "テーブル寸法や固定対象が大きくなる現場向け。設備条件に合わせて比較します。",
  },
  {
    title: "大型フライス・マシニングなら",
    model: "CK-16",
    mark: "T溝18mm / M16",
    body: "大型テーブル向け。能力感だけで選ばず、必ずT溝幅から照合してください。",
  },
] as const;

const failures = [
  {
    title: "T溝を測らずに買う",
    body: "もっとも多い失敗です。機械名の記憶だけで判断せず、現物確認が安全です。",
  },
  {
    title: "Mサイズだけで選ぶ",
    body: "「M12が良さそう」ではなく、T溝幅とセットで見ましょう。ねじ径は強度の代理指標ではなく、適合サイズです。",
  },
  {
    title: "万力の代わりなら何でもよいと考える",
    body: "クランピングキットは自由度が高い反面、ワーク形状や段取りとの相性も見ます。",
  },
  {
    title: "セット内容を見ない",
    body: "現場によっては、ボルト長さやステップブロック数も使い勝手に影響します。",
  },
  {
    title: "旧設備と現行設備を同じだと決める",
    body: "同メーカーでも溝寸法が違うことがあります。機台ごとに測り直すのが確実です。",
  },
] as const;

const faqs = [
  {
    q: "クランピングキットとは何ですか？",
    a: "フライス盤やマシニングセンタのT溝テーブルに、ワークや治具を固定するための部品セットです。スタッドボルト、Tスロットナット、ステップクランプ、ステップブロック、ナット類などで構成されます。",
  },
  {
    q: "クランピングキットはどうやって選べばよいですか？",
    a: "まず工作機械のT溝幅を確認し、その次に適合するねじ径（M8〜M16）を見ます。そのうえで、固定したいワーク形状や段取りの使い方に合うかを判断します。価格や点数より先に、設備適合が最優先です。",
  },
  {
    q: "T溝サイズとねじ径の関係は？",
    a: "今回のTRUSCOシリーズでは、CK-8がT溝10mm/M8、CK-10が12mm/M10、CK-12Aが14mm/M12、CK-14が16mm/M14、CK-16が18mm/M16です。ねじ径だけで決めるのではなく、T溝幅から逆算するのが失敗しにくい方法です。",
  },
  {
    q: "クランピングキットと万力の違いは何ですか？",
    a: "万力は繰り返し固定に強く、定形ワークの量産・反復作業に向きます。クランピングキットは異形物や大きめワーク、治具ベース固定など、固定位置や高さを柔軟に変えたい場面に強いのが特長です。",
  },
  {
    q: "M10のクランピングキットはどんな人向けですか？",
    a: "T溝12mmの汎用フライス盤・標準的な工作機械を使う現場で、基準サイズとして比較しやすい層に向いています。迷ったらまず自社のT溝が12mmかを確認し、合えばCK-10が候補になります。",
  },
  {
    q: "M12のクランピングキットはどれですか？",
    a: "今回の比較ではCK-12AがM12 / T溝14mmです。中型フライス盤や標準的な設備更新で検討されやすいサイズ帯で、「クランピングキット M12」の検索意図にも近いモデルです。",
  },
  {
    q: "フライス盤用のクランピングキットはどう確認すればいいですか？",
    a: "フライス盤・マシニングセンタともに、まずテーブルのT溝幅を測ります。次に適合するMサイズを照合し、プレート固定・治具ベース固定など実際の使い方を確認します。機種名だけでサイズを決めないことが大切です。",
  },
  {
    q: "クランピングキットは保全部門でも使えますか？",
    a: "はい。加工現場だけでなく、治具段取り、補修、簡易固定、試作でも使いやすいケースがあります。標準セットを常備しておくと、現場ごとの部品探しを減らせます。",
  },
  {
    q: "大きいサイズを買っておけば安心ですか？",
    a: "いいえ。T溝幅やねじ径が設備に合わなければ使えません。大きいほど万能ではなく、合うサイズを選ぶことが最優先です。",
  },
  {
    q: "購買担当が現場から「クランピングキットが欲しい」とだけ言われた場合は？",
    a: "現場に機械テーブルのT溝幅（mm）を確認してもらうのが最短です。T溝幅が分かれば、対応するMサイズと型番（CK-8〜CK-16）までほぼ絞れます。",
  },
] as const;

const relatedArticles = [
  {
    href: "/articles/pipe-welding-alignment-clamp-guide",
    label: "パイプ溶接の芯出し方法｜配管クランプ・固定治具の選び方",
  },
  {
    href: "/articles/manual-press-fit-work-efficiency-guide",
    label: "手動圧入作業の効率化ガイド",
  },
  {
    href: "/articles/roller-cabinet-tool-storage-workflow-guide",
    label: "ローラーキャビネットの工具収納と動線",
  },
  {
    href: "/articles/air-riveter-how-to-choose-guide",
    label: "エアリベッターの選び方",
  },
  {
    href: "/articles/hydraulic-jack-tonnage-selection-guide",
    label: "油圧ジャッキの選び方｜何トンを選ぶ？",
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
        alt: "フライス盤用クランピングキットの選定イメージ",
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
    name: "クランピングキット",
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
        T溝幅が分かれば、サイズ選定は一気に進む
      </h2>
      <p className="mt-3 text-[16px] leading-7 text-gray-100">
        CK-8〜CK-16を並べて、自社のフライス盤・工作機械に合うモデルへ進みやすくなります。
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
            {product.focus}
          </p>
          <dl className="mt-4 space-y-2 text-[15px] leading-7 text-gray-900 md:text-[16px]">
            <div>
              <dt className="inline font-bold">ねじ径：</dt>
              <dd className="inline">
                <Mark>{product.thread}</Mark>
              </dd>
            </div>
            <div>
              <dt className="inline font-bold">適合T溝幅：</dt>
              <dd className="inline">
                <Mark>{product.tSlot}</Mark>
              </dd>
            </div>
            <div>
              <dt className="inline font-bold">向く現場：</dt>
              <dd className="inline">{product.bestFor}</dd>
            </div>
            <div>
              <dt className="inline font-bold">価格目安：</dt>
              <dd className="inline">{product.price}</dd>
            </div>
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
          {product.thread} / T溝{product.tSlot}
        </span>
      </span>
    </ExtLink>
  );
}

function FinalCtaBlock() {
  return (
    <section className="my-12 rounded-2xl border-2 border-amber-300 bg-amber-50 p-6 md:p-8">
      <h2 className="text-2xl font-black text-gray-900 sm:text-3xl">
        クランピングキットをT溝サイズで比較する
      </h2>
      <p className="mt-3 text-[16px] leading-7 text-gray-900">
        「クランピングキット」と広く探すより、
        <Mark>まずT溝幅 → 次にねじ径</Mark>
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
              工作機械・固定具 / 比較・選定ガイド / {PUBLISHED}更新
            </div>
            <h1 className={cls.h1}>{H1}</h1>
            <P>
              クランピングキットを探している人の多くは、
              <Mark>「今の工作機械に合うサイズを、買い間違えずに選びたい」</Mark>
              と考えています。
            </P>
            <P>
              実際、クランピングキットは
              <Mark>T溝サイズとねじ径が合わないと使えません</Mark>
              。安いもの・点数が多いものだけで決める前に、まず自社設備への適合を確認する必要があります。
            </P>
            <P>
              この記事では、<Mark>「クランピングキット 選び方」</Mark>
              を軸に、T溝幅・ねじ径・フライス盤への適合でTRUSCOのCK-8〜CK-16を比較します。
            </P>
            <Figure
              src={IMG(HERO)}
              alt="フライス盤用クランピングキットの選定イメージ"
              priority
            />
          </header>

          <section className="mt-8 rounded-2xl border-2 border-amber-400 bg-slate-950 p-6 text-white md:p-8">
            <p className="text-sm font-bold text-amber-300">
              30秒で結論｜クランピングキット選びは「T溝幅 → ねじ径 → 使い方」
            </p>
            <h2 className="mt-2 text-[23px] font-extrabold leading-tight md:text-[28px]">
              失敗しない順番はこの4つ
            </h2>
            <ol className="mt-4 list-decimal space-y-3 pl-5 text-[16px] leading-8 text-white md:text-[17px]">
              {checklist.map((item) => (
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

          <H2 id="what-is">クランピングキットとは？どんな現場で使うのか</H2>
          <Figure
            src={IMG("milling-workholding-scene.webp")}
            alt="フライス盤で段取り作業をするイメージ"
          />
          <P>
            クランピングキットは、フライス盤やマシニングセンタのテーブルに、ワークや治具を固定するための部品一式です。万力では固定しにくいプレート材、長尺物、異形物、治具ベースなどを柔軟に固定できます。
          </P>
          <H3>クランピングキットが向く現場</H3>
          <ul className={cls.list}>
            <li>汎用フライス盤で段取り替えが多い現場</li>
            <li>マシニングセンタで多品種少量生産を行う現場</li>
            <li>治具ベースやプレートワークを固定したい現場</li>
            <li>保全・試作・社内加工のために標準セットを常備したい現場</li>
          </ul>

          <H2 id="t-slot">まず確認すべきT溝サイズ</H2>
          <Figure
            src={IMG("clamping-kit-tslot-check.webp")}
            alt="T溝サイズを確認するイメージ"
          />
          <P>
            クランピングキット選びで最初に見るべきなのが、工作機械テーブルの
            <Mark>T溝サイズ</Mark>
            です。ここが合わないと、Tスロットナットやスタッドボルトを正しく使えません。
          </P>
          <P>今回のTRUSCOクランピングキットでは、次の対応関係になっています。</P>
          <ul className={cls.list}>
            {products.map((p) => (
              <li key={p.model}>
                <Mark>{p.model}</Mark>：T溝{p.tSlot}（ねじ径 {p.thread}）
              </li>
            ))}
          </ul>
          <P>
            たとえばテーブルのT溝が12mmなら、まず候補になるのは
            <Mark>CK-10</Mark>
            です。現場では「M12のキットが欲しい」と依頼されることがありますが、実際には
            <Mark>先にT溝幅を見ないと適合判断ができません</Mark>。
          </P>
          <H3>T溝サイズ確認でよくある失敗</H3>
          <ul className={cls.list}>
            <li>工作機械名だけで判断してしまう</li>
            <li>旧設備と現行設備で溝寸法が違うのに同じだと思い込む</li>
            <li>Mサイズだけを見て、T溝幅を確認しない</li>
          </ul>

          <MidCta />

          <H2 id="thread">ねじ径（M8〜M16）と適合関係</H2>
          <Figure
            src={IMG("machine-shop-purchasing.webp")}
            alt="クランピングキットを比較検討するイメージ"
          />
          <P>
            T溝サイズを確認したら、次に見るのがスタッドボルトのねじ径です。大切なのは、
            <Mark>ねじ径だけで強度を判断しないこと</Mark>
            。設備側のT溝と合わなければ意味がありません。
          </P>
          <div className="my-6 overflow-x-auto">
            <table className={`${cls.table} min-w-[720px]`}>
              <thead>
                <tr>
                  <th className={cls.th}>モデル</th>
                  <th className={cls.th}>ねじ径</th>
                  <th className={cls.th}>適合T溝幅</th>
                  <th className={cls.th}>向く現場</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.model}>
                    <td className={cls.td}>
                      <ProductTableCell product={product} />
                    </td>
                    <td className={`${cls.td} font-bold`}>
                      <Mark>{product.thread}</Mark>
                    </td>
                    <td className={`${cls.td} font-bold`}>
                      <Mark>{product.tSlot}</Mark>
                    </td>
                    <td className={cls.td}>{product.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <H2 id="components">クランピングキットの構成部品と役割</H2>
          <Figure
            src={IMG("clamping-kit-components.webp")}
            alt="クランピングキットの構成部品イメージ"
          />
          <P>
            クランピングキットは、単なるボルトセットではありません。ワークを安定して固定するために、複数部品が役割分担しています。
          </P>
          <div className="my-6 grid gap-4">
            {components.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border-2 border-gray-300 bg-white p-5"
              >
                <h3 className="text-xl font-black text-gray-900 sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-[16px] leading-7 text-gray-900">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
          <P>
            TRUSCOのCKシリーズでは、これらが樹脂トレー付きでまとまっており、保管しやすい点もメリットです。
          </P>
          <Figure
            src={IMG("clamping-kit-storage.webp")}
            alt="クランピングキットを整理して保管しているイメージ"
          />

          <H2 id="compare">TRUSCO クランピングキット5商品比較</H2>
          <Figure
            src={IMG("clamping-kit-in-use.webp")}
            alt="プレート材をクランピングキットで固定しているイメージ"
          />
          <P>
            SEOと送客の観点では、記事全体の中心商品は
            <Mark>CK-10</Mark>と<Mark>CK-12A</Mark>
            が最適です。汎用機・中型機で需要が広く、M10 / M12は検索されやすいサイズ帯だからです。ただし5商品を並べることで、購買担当が「自社はどこか」を判断しやすくなります。
          </P>
          <div className="my-6 overflow-x-auto">
            <table className={`${cls.table} min-w-[860px]`}>
              <thead>
                <tr>
                  <th className={cls.th}>商品</th>
                  <th className={cls.th}>ねじ径</th>
                  <th className={cls.th}>T溝幅</th>
                  <th className={cls.th}>向く現場</th>
                  <th className={cls.th}>価格目安</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.model}>
                    <td className={cls.td}>
                      <ProductTableCell product={product} />
                    </td>
                    <td className={`${cls.td} font-bold`}>
                      <Mark>{product.thread}</Mark>
                    </td>
                    <td className={`${cls.td} font-bold`}>
                      <Mark>{product.tSlot}</Mark>
                    </td>
                    <td className={cls.td}>{product.bestFor}</td>
                    <td className={cls.td}>{product.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-5 grid gap-5">
            <ProductCard
              product={byModel["CK-10"]}
              priority
              note="汎用フライス盤の基準サイズ。迷ったらまずT溝12mmかを確認。"
            />
            <ProductCard
              product={byModel["CK-12A"]}
              note="M12帯の定番候補。中型機・設備更新で比較されやすい。"
            />
          </div>
          <div className="mt-6">
            <PrimaryCta href={mainCta.url} label="5サイズを一覧で比較する" />
          </div>

          <H2 id="use-cases">用途別おすすめの選び方</H2>
          <Figure
            src={IMG("jig-setup-clamping.webp")}
            alt="治具ベースを固定するイメージ"
          />
          {useCases.map((item) => (
            <section key={item.model} className="mb-10">
              <H3>{item.title}</H3>
              <P>
                <Mark>{item.model}</Mark>（{item.mark}）が候補です。{item.body}
              </P>
              <div className="mt-5">
                <ProductCard product={byModel[item.model]} />
              </div>
            </section>
          ))}

          <H2 id="failures">よくある失敗と注意点</H2>
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
            まとめ｜クランピングキットは「T溝幅が合うか」でほぼ決まる
          </H2>
          <P>
            クランピングキット選びで重要なのは、価格や点数の前に、
            <Mark>自社設備に合うか</Mark>
            を確認することです。選定の順番は、
            <Mark>T溝幅 → ねじ径 → 使い方・固定対象</Mark>
            の3ステップが基本です。
          </P>
          <ul className={cls.list}>
            {products.map((p) => (
              <li key={p.model}>
                <Mark>{p.model}</Mark>：T溝{p.tSlot} / {p.thread}
              </li>
            ))}
          </ul>
          <P>
            もし迷うなら、まずは自社設備のT溝幅を確認し、そのサイズに合うモデルから比較していくのが失敗しにくい方法です。
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
