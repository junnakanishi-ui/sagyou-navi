import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";

const SLUG = "grinder-polishing-dust-control-mask-guide";
const SITE_URL = "https://www.sagyou-navi.com";
const CANONICAL = `${SITE_URL}/articles/${SLUG}`;
const ARTICLE_TITLE =
  "グラインダー・研磨作業の粉じん対策｜防じんマスクと集じんの選び方【2026年版】";
const DESCRIPTION =
  "グラインダー・サンダー・研磨・バリ取りで舞う粉じんをどう減らすかを、集じん・局所排気・防じんマスクの順に整理。DS2・RL3、使い捨て式と取替え式、排気弁、フィットテスト、交換管理まで2026年の厚労省情報をもとに解説します。";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: ARTICLE_TITLE,
    description: DESCRIPTION,
    type: "article",
    url: CANONICAL,
    siteName: "作業用品ナビ",
    publishedTime: "2026-08-07",
    modifiedTime: "2026-08-07",
    images: [
      {
        url: `${SITE_URL}/images/articles/${SLUG}/grinder-dust-control-hero.jpg`,
        width: 1600,
        height: 900,
        alt: "グラインダー研磨で発生する粉じんを集じんしながら作業する工場のイメージ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: ARTICLE_TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}/images/articles/${SLUG}/grinder-dust-control-hero.jpg`],
  },
};

const campaign =
  "utm_source=sagyou_navi&utm_medium=article&utm_campaign=grinder_polishing_dust_control";

const ctas = {
  yahooMask: `https://store.shopping.yahoo.co.jp/signcity-yshop/search.html?p=%E9%98%B2%E3%81%98%E3%82%93%E3%83%9E%E3%82%B9%E3%82%AF&${campaign}#CentSrchFilter1`,
  rakutenMask: `https://search.rakuten.co.jp/search/mall/%E9%98%B2%E3%81%98%E3%82%93%E3%83%9E%E3%82%B9%E3%82%AF/?sid=426972&${campaign}`,
  rakutenCollector: `https://search.rakuten.co.jp/search/mall/%E9%9B%86%E5%A1%B5/?sid=426972&${campaign}`,
};

type Product = {
  id: string;
  maker: string;
  name: string;
  model: string;
  format: string;
  respiratorClass: string;
  efficiency: string;
  valve: string;
  size: string;
  role: string;
  feature: string;
  check: string;
  image: string;
  url: string;
  variants?: { label: string; url: string }[];
};

// product-data.json と同期すること。公開前に元Excelと再突合する。
const products: Product[] = [
  {
    id: "3m-8205-ds2",
    maker: "3M",
    name: "3M 使い捨て式防じんマスク 8205-DS2",
    model: "8205-DS2",
    format: "使い捨て式",
    respiratorClass: "DS2",
    efficiency: "95%以上",
    valve: "なし",
    size: "標準",
    role: "使い捨て式DS2の標準候補として比較したい現場",
    feature:
      "カップ型のDS2。商品情報では溶接・研磨・一般粉じん作業などが用途として示され、粒子捕集効率95%以上、使用限度時間9時間、指定防護係数10です。",
    check:
      "排気弁なし。粉じんの種類・濃度、要求防護係数、法令に合うかを先に確認してください。",
    image: `/images/articles/${SLUG}/products/3m-8205-ds2.jpg`,
    url: `https://item.rakuten.co.jp/crecote-shop/ta004102-8205ds210/?${campaign}`,
  },
  {
    id: "3m-8805-ds2",
    maker: "3M",
    name: "3M 使い捨て式防じんマスク 8805-DS2",
    model: "8805-DS2",
    format: "使い捨て式",
    respiratorClass: "DS2",
    efficiency: "95%以上",
    valve: "あり",
    size: "標準",
    role: "DS2を前提に、排気弁付きも比較したい現場",
    feature:
      "排気弁付きのカップ型DS2。呼気の熱や湿気を排出しやすくし、溶接ヒューム・研磨・切削・粉じん作業などが用途として示されています。粒子捕集効率95%以上、使用限度時間11時間、指定防護係数10です。",
    check:
      "排気弁は捕集効率を高める機能ではありません。必要性能を決めたうえで着用性を比較します。",
    image: `/images/articles/${SLUG}/products/3m-8805-ds2.jpg`,
    url: `https://item.rakuten.co.jp/crecote-shop/ta004325-8805ds2/?${campaign}`,
  },
  {
    id: "trusco-td02v-s2",
    maker: "TRUSCO",
    name: "TRUSCO 使い捨て式防じんマスク TD02V-S2",
    model: "TD02V-S2",
    format: "使い捨て式・二つ折り",
    respiratorClass: "DS2",
    efficiency: "95%以上",
    valve: "あり",
    size: "フリー",
    role: "折りたたみ・持ち出しやすさも含めてDS2を比較したい現場",
    feature:
      "二つ折り・排気弁付きのDS2。商品情報ではサンダー・グラインダー作業、オイルミストを含まない溶接作業が用途に挙げられ、粒子捕集効率95%以上、使用限度時間18時間とされています。",
    check:
      "表示された使用限度時間だけで交換判断を固定せず、息苦しさや著しい型くずれ等も確認します。",
    image: `/images/articles/${SLUG}/products/trusco-td02v-s2.jpg`,
    url: `https://item.rakuten.co.jp/crecote-shop/ta015912-td02vs2/?${campaign}`,
  },
  {
    id: "trusco-tmk-01rt",
    maker: "TRUSCO",
    name: "TRUSCO 取替え式防じんマスク TMK-01RT",
    model: "TMK-01RT",
    format: "取替え式",
    respiratorClass: "RL1",
    efficiency: "82%以上",
    valve: "あり",
    size: "M",
    role: "小型・軽量な取替え式を候補にしたい現場",
    feature:
      "ろ過材交換式のRL1。商品情報ではサンダー・グラインダー作業、土木工事、粉剤・水和剤の農薬散布などが用途に挙げられ、使い捨て式と取替え式の運用差を比較しやすいモデルです。",
    check:
      "RL1は区分1です。DS2・RL2・RL3の代替として一律に扱わず、必要性能区分を先に確認します。",
    image: `/images/articles/${SLUG}/products/trusco-tmk-01rt.jpg`,
    url: `https://item.rakuten.co.jp/crecote-shop/ta016990-tmk01rt/?${campaign}`,
  },
  {
    id: "shigematsu-dr28su2w",
    maker: "シゲマツ",
    name: "シゲマツ 取替え式防じんマスク DR28SU2W",
    model: "DR28SU2W",
    format: "取替え式",
    respiratorClass: "RL2",
    efficiency: "96%以上",
    valve: "あり",
    size: "M",
    role: "RL2の取替え式と臭気軽減仕様を比較したい現場",
    feature:
      "取替え式RL2。商品情報では溶接作業などが用途として示され、粒子捕集効率96.0%以上、指定防護係数10です。活性炭素繊維による不快臭軽減仕様も記載されています。",
    check:
      "臭気軽減機能と防毒性能は同じではありません。有毒ガス・蒸気がある環境では適切な防毒機能を選定します。",
    image: `/images/articles/${SLUG}/products/shigematsu-dr28su2w.jpg`,
    url: `https://item.rakuten.co.jp/crecote-shop/ta006600-dr28su2wm/?${campaign}`,
  },
  {
    id: "3m-6000-2091-rl3",
    maker: "3M",
    name: "3M 取替え式防じんマスク 6000/2091-RL3",
    model: "6000/2091-RL3",
    format: "取替え式",
    respiratorClass: "RL3",
    efficiency: "99.9%以上",
    valve: "あり",
    size: "S / M / L",
    role: "RL3と複数サイズを比較し、個人ごとのフィットを重視したい現場",
    feature:
      "RL3の取替え式でS・M・Lを選択可能。粒子捕集効率99.9%以上、商品情報上の指定防護係数は10です。フィルター性能だけでなく面体サイズを選べる点も比較軸になります。",
    check:
      "区分3でも、顔との密着や面体形式、要求防護係数を無視して選ぶことはできません。",
    image: `/images/articles/${SLUG}/products/3m-6000-2091-rl3.jpg`,
    url: `https://item.rakuten.co.jp/crecote-shop/ta003265-60002091rl3m/?${campaign}`,
    variants: [
      {
        label: "Sサイズ",
        url: `https://item.rakuten.co.jp/crecote-shop/ta003266-60002091rl3s/?${campaign}`,
      },
      {
        label: "Mサイズ",
        url: `https://item.rakuten.co.jp/crecote-shop/ta003265-60002091rl3m/?${campaign}`,
      },
      {
        label: "Lサイズ",
        url: `https://item.rakuten.co.jp/crecote-shop/ta003264-60002091rl3l/?${campaign}`,
      },
    ],
  },
];


const EXT_REL = "nofollow sponsored noopener noreferrer";

const faqs = [
  {
    question: "グラインダー作業ならDS2を選べばよいですか？",
    answer: "DS2製品にはグラインダー・研磨用途として販売されているものがありますが、すべてのグラインダー作業にDS2で十分とは限りません。削る物質、粉じん濃度、オイルミストの有無、法令、要求防護係数などを確認して選定します。",
  },
  {
    question: "DS2とRL3の違いは何ですか？",
    answer: "DS2は使い捨て式・Sタイプ・区分2で、粒子捕集効率は95%以上です。RL3は取替え式・Lタイプ・区分3で、99.9%以上です。ただし、フィルターの捕集効率だけで実際の防護性能は決まらないため、面体の形式、密着、指定防護係数も確認します。",
  },
  {
    question: "使い捨て式と取替え式はどちらがよいですか？",
    answer: "短時間・配布のしやすさを重視するなら使い捨て式、繰り返し使用やサイズ選択、ろ過材管理を前提にするなら取替え式が比較候補になります。必要な性能区分を満たす範囲で、作業時間、着用負担、在庫・洗浄・交換管理まで含めて選びます。",
  },
  {
    question: "排気弁付きなら防じん性能も高くなりますか？",
    answer: "排気弁は主に呼気を外へ出しやすくし、熱気や湿気による不快感を軽減するための機構です。排気弁があるだけで粒子捕集効率の区分が上がるわけではありません。DS2同士でも排気弁あり・なしがあります。",
  },
  {
    question: "家庭用の不織布マスクで研磨粉じんを防げますか？",
    answer: "粉じん作業で法令やリスクアセスメント上、呼吸用保護具が必要な場合は、一般的な家庭用不織布マスクではなく、作業内容に対応する国家検定合格品などを使用します。",
  },
  {
    question: "集塵機を使えば防じんマスクは不要ですか？",
    answer: "集じんや局所排気は優先して検討すべき対策ですが、それだけで呼吸用保護具が不要になるとは限りません。設備対策後のばく露状況やリスクアセスメント結果、該当法令をもとに判断します。",
  },
  {
    question: "防じんマスクは有機溶剤の蒸気にも使えますか？",
    answer: "防じんマスクは粒子状物質への対策であり、有毒ガス・蒸気用ではありません。有機溶剤などの蒸気がある場合は、対象物質に適した防毒機能を持つ呼吸用保護具を選定します。",
  },
  {
    question: "防じんマスクのサイズはどう選べばよいですか？",
    answer: "顔に密着する形状・寸法を選びます。サイズ展開がある面体では、フィットテストで本人に合う型式・サイズを確認し、日常の装着時は取扱説明書に従ってシールチェックを行います。",
  },
  {
    question: "ひげがあっても防じんマスクは使えますか？",
    answer: "ひげ・もみあげなどが面体の接顔部と顔の間に入り込むと密着を妨げます。厚生労働省通達でも、そのような状態で使用させないよう示されています。",
  },
  {
    question: "ろ過材や使い捨てマスクはいつ交換しますか？",
    answer: "メーカーの使用限度・交換基準に加え、粉じんの種類、濃度、発散状況、息苦しさ、型くずれなどを確認します。使い捨て式は表示された使用限度時間前でも、息苦しさや著しい型くずれがあれば交換します。",
  },
] as const;

const PUBLISHED = "2026-08-07";
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: ARTICLE_TITLE,
  description: DESCRIPTION,
  mainEntityOfPage: CANONICAL,
  image: [`${SITE_URL}/images/articles/${SLUG}/grinder-dust-control-hero.jpg`],
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: { "@type": "Organization", name: "作業用品ナビ編集部", url: SITE_URL },
  publisher: { "@type": "Organization", name: "作業用品ナビ", url: SITE_URL },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "選び方ガイド",
      item: `${SITE_URL}/articles`,
    },
    { "@type": "ListItem", position: 3, name: ARTICLE_TITLE, item: CANONICAL },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

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

function SectionImage({
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
          sizes="(max-width: 1024px) 100vw, 820px"
        />
      </div>
    </figure>
  );
}

function CtaPair({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`grid gap-3 sm:grid-cols-2 ${compact ? "my-5" : "my-8"}`}>
      <ExtLink
        href={ctas.yahooMask}
        className="flex min-h-12 items-center justify-center rounded-xl border-2 border-amber-700 bg-white px-5 py-3 text-center text-[15px] font-extrabold text-amber-950 transition hover:bg-amber-50"
      >
        Yahoo!ショッピングで防じんマスクを比較する
      </ExtLink>
      <ExtLink
        href={ctas.rakutenMask}
        className="flex min-h-12 items-center justify-center rounded-xl bg-rose-700 px-5 py-3 text-center text-[15px] font-extrabold text-white transition hover:bg-rose-800"
      >
        楽天市場で防じんマスクを比較する
      </ExtLink>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-gray-300 bg-white shadow-sm">
      <div className="relative aspect-[4/3] bg-gray-50">
        <Image
          src={product.image}
          alt={`${product.name}の商品画像`}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-contain p-4"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex flex-wrap gap-2 text-xs font-bold">
          <span className="rounded-full bg-gray-900 px-3 py-1 text-white">
            {product.respiratorClass}
          </span>
          <span className="rounded-full bg-gray-100 px-3 py-1 text-gray-900">
            {product.format}
          </span>
          <span className="rounded-full bg-amber-100 px-3 py-1 text-amber-950">
            排気弁：{product.valve}
          </span>
        </div>
        <p className="mb-1 text-sm font-bold text-gray-800">{product.maker}</p>
        <h3 className="text-lg font-extrabold leading-snug text-gray-900 md:text-xl">
          {product.name}
        </h3>
        <dl className="mt-4 grid grid-cols-2 gap-2 text-sm">
          <div className="rounded-lg bg-gray-50 p-3">
            <dt className="font-bold text-gray-900">粒子捕集効率</dt>
            <dd className="mt-1 font-extrabold text-gray-900">
              <Mark>{product.efficiency}</Mark>
            </dd>
          </div>
          <div className="rounded-lg bg-gray-50 p-3">
            <dt className="font-bold text-gray-900">サイズ</dt>
            <dd className="mt-1 font-extrabold text-gray-900">{product.size}</dd>
          </div>
        </dl>
        <div className="mt-4 flex-1 space-y-3 text-[15px] leading-7 text-gray-900">
          <p>
            <strong>向きやすい比較場面：</strong>
            {product.role}
          </p>
          <p>{product.feature}</p>
          <p className="rounded-lg border border-amber-300 bg-amber-50 p-3">
            <strong>購入前に確認：</strong>
            {product.check}
          </p>
        </div>
        {product.variants ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {product.variants.map((variant) => (
              <ExtLink
                key={variant.label}
                href={variant.url}
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-gray-300 px-4 py-3 font-bold text-gray-900 hover:bg-gray-50"
              >
                {variant.label}を見る
              </ExtLink>
            ))}
          </div>
        ) : (
          <ExtLink
            href={product.url}
            className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-amber-600 px-5 py-3 text-center font-bold text-white hover:bg-amber-700"
          >
            商品ページで詳細を確認する
          </ExtLink>
        )}
      </div>
    </article>
  );
}

function ProductTableCell({ product }: { product: Product }) {
  return (
    <a
      href={product.url}
      target="_blank"
      rel={EXT_REL}
      className="group flex min-w-[14rem] items-start gap-3 text-gray-900 no-underline"
    >
      <span className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-white">
        <Image
          src={product.image}
          alt={`${product.name}の商品画像`}
          fill
          sizes="80px"
          className="object-contain p-1.5"
        />
      </span>
      <span className="min-w-0">
        <span className="block font-black leading-6 group-hover:underline">
          {product.model}
        </span>
        <span className="mt-1 block text-xs leading-5 text-gray-900">
          {product.name}
        </span>
      </span>
    </a>
  );
}

export default function Page() {
  const img = (name: string) => `/images/articles/${SLUG}/${name}`;

  return (
    <>
      <SiteHeader />
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

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
              <li>グラインダー粉じん対策</li>
            </ol>
          </nav>
        </div>

        <article className="mx-auto max-w-[820px] px-4 pb-16 sm:px-6 lg:px-8">
          <header>
            <div className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-sm font-bold text-amber-950">
              粉じん対策・呼吸用保護具 / 2026年8月7日更新
            </div>
            <h1 className={cls.h1}>{ARTICLE_TITLE}</h1>
            <P>
              グラインダーやサンダーで金属を削ったあと、作業台や床だけでなく、作業服や保護メガネの表面まで細かな粉で白っぽくなることがあります。コンクリートやモルタルの研削では、目に見える粉じんが周囲へ広がり、清掃してもすぐに舞い上がることもあります。
            </P>
            <P>
              こうした作業で「とりあえずマスクを着ければよい」と考えるのは十分ではありません。粉じん対策は、まず発生量を減らし、発生した粉じんをできるだけ発生源の近くで捕集し、そのうえで作業内容に合った呼吸用保護具を使用する、という順番で考える必要があります。
            </P>
            <P>
              厚生労働省の2023年5月25日付け通達でも、危険性・有害性の低い物質への代替、工学的対策、管理的対策、有効な保護具の使用という優先順位でリスク低減措置を検討する考え方が示されています。防じんマスクは大切な最後の防護ですが、
              <Mark>集じんや換気の代わりではありません</Mark>。
            </P>
            <P>
              本記事では、グラインダー・サンダー・研磨・研削・バリ取りなど、粉じんが発生しやすい作業を想定し、現場で何から見直せばよいか、防じんマスクのDS・RLなどの表示をどう読むか、使い捨て式と取替え式をどう使い分けるかまで整理します。
            </P>
            <SectionImage
              src={img("grinder-dust-control-hero.jpg")}
              alt="グラインダー研磨で発生する粉じんを集じんしながら作業する工場のイメージ"
              priority
            />
          </header>

          <aside className="my-8 rounded-2xl border-2 border-amber-400 bg-amber-50 p-5 md:p-6">
            <p className="text-lg font-extrabold text-gray-900">安全上の注意</p>
            <p className="mt-2 text-[16px] leading-7 text-gray-900">
              必要な呼吸用保護具は、粉じんの種類、濃度、作業内容、法令、リスクアセスメント結果などで変わります。本記事は一般的な選定の考え方を整理したもので、個別現場の保護具指定を代替するものではありません。石綿、溶接ヒューム、鉛、インジウム化合物、有害化学物質などを扱う作業では、該当法令・厚生労働省通達・作業主任者や保護具着用管理責任者の指示・メーカー仕様を必ず確認してください。
            </p>
          </aside>

          <section
            id="quick-answer"
            className="my-8 rounded-2xl bg-gray-950 p-5 text-white md:p-7"
          >
            <h2 className="text-2xl font-extrabold leading-snug">
              先に確認したいこと｜粉じん対策は「マスクだけ」で完結しない
            </h2>
            <ol className="mt-5 grid gap-3 sm:grid-cols-2 md:grid-cols-5">
              {[
                "発生を減らす",
                "発生源で捕る",
                "広げない",
                "適切な保護具",
                "フィット・交換管理",
              ].map((label, i) => (
                <li key={label} className="rounded-xl bg-white/10 p-4">
                  <span className="block text-sm font-bold text-amber-300">
                    STEP {i + 1}
                  </span>
                  <span className="mt-1 block font-bold">{label}</span>
                </li>
              ))}
            </ol>
            <p className="mt-5 text-[16px] leading-7 text-gray-100">
              厚生労働省の研削・研磨作業向け資料でも、粉じんやミストへのばく露防止には局所排気装置が有効で、全体換気は補助的な対策とされています。手持ち工具のように作業位置が変わる場合は、移動式フードを使う考え方も示されています。高性能なマスクを買うことだけが粉じん対策ではありません。
            </p>
          </section>

          <CtaPair />

          <section
            id="toc"
            className="my-8 rounded-2xl border border-gray-200 bg-gray-50 p-5 md:p-6"
          >
            <h2 className="text-lg font-extrabold text-gray-900">この記事の内容</h2>
            <ol className="mt-4 grid gap-x-6 gap-y-2 text-[15px] font-semibold leading-7 text-gray-900 md:grid-cols-2">
              {[
                ["#why", "1. 粉じん対策を作業全体で考える理由"],
                ["#material", "2. まず何を削っているか確認"],
                ["#classes", "3. DS2・RL3の表示"],
                ["#format", "4. 使い捨て式と取替え式"],
                ["#products", "5. 防じんマスク6タイプ比較"],
                ["#collector", "6. 集じん・局所排気"],
                ["#fit", "7. フィットとシールチェック"],
                ["#management", "8. 交換・法人管理"],
                ["#mistakes", "9. よくある失敗"],
                ["#workflow", "10. 実務フローとFAQ"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="underline underline-offset-4">
                    {label}
                  </a>
                </li>
              ))}
            </ol>
          </section>

          <section id="why" className="mt-4">
            <H2>なぜグラインダー・研磨作業では粉じん対策を作業全体で考えるのか</H2>
            <H3>研磨・研削は粉じんが作業者の呼吸域へ届きやすい</H3>
            <P>
              ディスクグラインダー、サンダー、研磨機、バリ取り工具などは、材料表面を削るため、作業点のすぐ近くで細かな粒子が発生します。工具の回転で粉じんが飛ばされると、作業者の顔周辺や周囲の設備まで広がりやすくなります。
            </P>
            <P>
              金属研磨について日本溶接協会は、粉じんによる健康障害を防ぐ基本として「粉じんにさらされない職場づくり」と「粉じんにさらされても吸入しない」対策を挙げ、作業の自動化、局所排気、プッシュプル型換気装置、呼吸用保護具などを示しています。
            </P>
            <SectionImage
              src={img("grinder-source-capture-dust-shroud.jpg")}
              alt="グラインダーの集じんカバーとホースで粉じんを発生源から捕集するイメージ"
            />
            <H3>防じんマスクは集じん設備の代替ではない</H3>
            <P>
              防じんマスクを高性能なものへ替えても、粉じんが大量に発生し続けている環境そのものは変わりません。工具に集じんカバーを付ける、集塵機へ接続する、局所排気で捕集するなど、作業点から粉じんを広げない対策を優先します。
            </P>
            <P>
              これは「マスクが不要」という意味ではありません。工学的対策を行ってもなお残るばく露リスクに対して、適切な呼吸用保護具を組み合わせる、という考え方です。
            </P>
            <H3>一般的な不織布マスクと産業用の防じんマスクは目的が違う</H3>
            <P>
              粉じん作業で呼吸用保護具が必要な場合は、一般的な家庭用不織布マスクではなく、作業内容に対応する国家検定合格品などを選定します。防じんマスクには、使い捨て式と取替え式があり、さらに性能区分が設けられています。
            </P>
          </section>

          <section id="material">
            <H2>まず「何を削っているか」を確認する</H2>
            <P>
              同じグラインダー作業でも、削っている材料や作業工程が違えば、発生する粉じんや必要な対策も変わります。「グラインダーだからこのマスク」と工具名だけで決めないことが出発点です。
            </P>
            <div className="my-6 overflow-x-auto rounded-xl border border-gray-300">
              <table className={cls.table}>
                <thead>
                  <tr>
                    <th className={cls.th}>作業例</th>
                    <th className={cls.th}>起こりやすいこと</th>
                    <th className={cls.th}>先に確認したい対策</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [
                      "鉄・ステンレス等の研磨、バリ取り",
                      "金属粉じんが飛散",
                      "集じんカバー、局所排気、保護メガネ、適切な防じんマスク",
                    ],
                    [
                      "コンクリート・モルタルの研削",
                      "細かな鉱物性粉じんが多量に発生することがある",
                      "工法、集じん、湿式化の可否、該当法令、呼吸用保護具",
                    ],
                    [
                      "木材のサンディング",
                      "木粉が広い範囲へ付着しやすい",
                      "工具集じん、集塵機、清掃、適切な呼吸用保護具",
                    ],
                    [
                      "粉体原料の投入・袋開け",
                      "粉体が舞い上がる",
                      "密閉・囲い、局所排気、投入方法、呼吸用保護具",
                    ],
                    [
                      "溶接後の研磨",
                      "研磨粉じんに加え、工程によって溶接ヒューム管理も必要",
                      "溶接工程と研磨工程を分けて評価し、必要な設備・保護具を選定",
                    ],
                  ].map(([a, b, c]) => (
                    <tr key={a}>
                      <td className={`${cls.td} font-bold`}>{a}</td>
                      <td className={cls.td}>{b}</td>
                      <td className={cls.td}>{c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <H3>材料名が同じでも、表面処理や付着物まで確認する</H3>
            <P>
              塗膜、めっき、油、付着物などがある材料を削ると、母材だけを研磨する場合とは異なる物質が発生する可能性があります。「鉄だからこのマスク」と一律に決めず、SDS、作業方法、既存塗膜、使用薬品などを確認します。
            </P>
            <aside className="my-6 rounded-xl border-l-4 border-red-700 bg-red-50 p-5 text-[16px] leading-7 text-gray-900">
              <strong>有毒ガス・蒸気、酸素欠乏、濃度不明の環境に注意：</strong>
              防じんマスクは粒子状物質への対策です。厚生労働省の2023年通達では、防じんマスクや防じん機能を持つ電動ファン付き呼吸用保護具を、有毒ガス・蒸気が存在する場所で使用しないよう示されています。また、酸素欠乏またはそのおそれがある場所や、有害物質濃度が不明な場所で、ろ過式呼吸用保護具を使用してはいけません。「活性炭入り」「臭気対策」と書かれた防じんマスクであっても、それだけで防毒マスクの代用になると判断しないでください。
            </aside>
          </section>

          <section id="classes">
            <H2>DS2・RL3とは？防じんマスクの表示を読めるようにする</H2>
            <P>
              防じんマスクを比較すると、「DS2」「RL2」「RL3」などの記号が並びます。ここを理解すると商品比較がかなりしやすくなります。
            </P>
            <H3>DとRは使い捨て式か取替え式か</H3>
            <ul className={cls.list}>
              <li>
                <strong>D</strong>：使い捨て式防じんマスク
              </li>
              <li>
                <strong>R</strong>：取替え式防じんマスク
              </li>
            </ul>
            <P>
              使い捨て式は面体そのものを交換します。取替え式は面体を繰り返し使用し、適合するろ過材を交換して使います。
            </P>
            <H3>SとLは試験粒子の区分</H3>
            <ul className={cls.list}>
              <li>
                <strong>S</strong>：固体粒子を用いた試験の区分
              </li>
              <li>
                <strong>L</strong>：液体粒子を用いた試験の区分
              </li>
            </ul>
            <P>
              厚生労働省の2023年通達では、粉じんとオイルミストが混在する場合、Lタイプ（RL・DL）を選ぶことが示されています。
            </P>
            <H3>数字の1・2・3は粒子捕集効率の区分</H3>
            <P>国家規格では、粒子捕集効率は次の基準です。</P>
            <div className="my-6 overflow-x-auto rounded-xl border border-gray-300">
              <table className={cls.table}>
                <thead>
                  <tr>
                    <th className={cls.th}>区分</th>
                    <th className={cls.th}>国家規格上の粒子捕集効率</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["1", "80.0%以上"],
                    ["2", "95.0%以上"],
                    ["3", "99.9%以上"],
                  ].map(([k, v]) => (
                    <tr key={k}>
                      <td className={`${cls.td} font-bold`}>{k}</td>
                      <td className={cls.td}>
                        <Mark>{v}</Mark>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <P>
              つまりDS2は「使い捨て式・Sタイプ・区分2」、RL3は「取替え式・Lタイプ・区分3」です。
            </P>
            <H3>区分3なら常に区分2より「安全」とは限らない</H3>
            <P>
              たしかに、ろ過材の粒子捕集効率だけを見れば区分3の方が高い基準です。しかし、実際の呼吸用保護具の性能は、顔と面体の密着、面体の形式、指定防護係数、作業環境の濃度などにも左右されます。
            </P>
            <P>
              たとえば、今回比較する3M 8205-DS2と3M 6000/2091-RL3は、商品情報上はいずれも指定防護係数10とされています。一方で、フィルターの粒子捕集効率は8205-DS2が95%以上、6000/2091-RL3が99.9%以上です。この違いは、「フィルター効率の数字だけを見て選ばない」理由をよく表しています。必要な防護性能は、現場のリスクアセスメントと要求防護係数などから決めます。
            </P>
          </section>

          <section id="format">
            <H2>使い捨て式と取替え式はどう使い分ける？</H2>
            <SectionImage
              src={img("disposable-vs-reusable-respirator-selection.jpg")}
              alt="使い捨て式と取替え式の防じんマスクを作業条件に合わせて比較するイメージ"
            />
            <H3>使い捨て式は配布・交換ルールを作りやすい</H3>
            <P>
              使い捨て式は、面体とフィルターが一体になっています。個人へ配布しやすく、交換単位も明確です。複数拠点へ定期的に備品を補充する法人では、箱単位の在庫管理がしやすい利点があります。
            </P>
            <P>
              ただし、同じDS2でも形状や排気弁、吸気抵抗、使用限度時間などは製品によって異なります。価格だけでなく、着用時間や作業強度まで比較した方が選びやすくなります。
            </P>
            <H3>取替え式は面体・ろ過材・サイズを分けて管理できる</H3>
            <P>
              取替え式は面体を繰り返し使い、ろ過材を交換します。S・M・Lなど複数サイズがある製品では、作業者の顔に合う面体を選びやすくなります。
            </P>
            <P>
              一方、適合するろ過材の品番を間違えないこと、交換時期を管理すること、面体を清潔に保つことが必要です。購入時の本体価格だけでなく、「どのろ過材を何個在庫するか」まで運用設計に入れます。
            </P>
            <H3>長時間作業は呼吸抵抗や着用負担も比較する</H3>
            <P>
              厚生労働省の通達では、作業内容や作業強度に応じて重量、吸気抵抗、排気抵抗を考慮し、作業強度が高い場合は電動ファン付き呼吸用保護具（P-PAPR）や送気マスクなども検討する考え方が示されています。「捕集効率が高いものを選べば終わり」ではなく、実際に正しく着用し続けられるかまで含めて考えます。
            </P>
          </section>

          <section id="products">
            <H2>粉じん作業で比較しやすい防じんマスク6タイプ</H2>
            <P>
              以下は、作業用品ナビからアクセスできる商品群の中から、違いを理解しやすい代表例を抜き出したものです。用途は商品仕様に記載された内容をもとに整理していますが、実際の使用可否は現場条件と法令・取扱説明書を確認してください。
            </P>
            <div className="my-7 grid grid-cols-1 gap-5 md:grid-cols-2">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <CtaPair />

            <H3>一覧表で違いを確認</H3>
            <P>
              規格だけでなく、使い方と管理まで含めて比較します。数値・用途は各商品ページ・メーカー情報に基づく比較用の抜粋です。仕様変更、適合条件、法令上の使用区分は購入・使用前に最新情報を確認してください。
            </P>
            <div className="my-6 overflow-x-auto rounded-xl border border-gray-300">
              <table className={cls.table}>
                <thead>
                  <tr>
                    <th className={cls.th}>商品</th>
                    <th className={cls.th}>方式</th>
                    <th className={cls.th}>区分</th>
                    <th className={cls.th}>粒子捕集効率</th>
                    <th className={cls.th}>排気弁</th>
                    <th className={cls.th}>サイズ</th>
                    <th className={cls.th}>比較ポイント</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id}>
                      <td className={cls.td}>
                        <ProductTableCell product={product} />
                      </td>
                      <td className={cls.td}>{product.format}</td>
                      <td className={`${cls.td} font-bold`}>
                        {product.respiratorClass}
                      </td>
                      <td className={cls.td}>{product.efficiency}</td>
                      <td className={cls.td}>{product.valve}</td>
                      <td className={cls.td}>{product.size}</td>
                      <td className={cls.td}>{product.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="collector">
            <H2>グラインダーの粉じんを「発生源で捕る」ために見直したい設備</H2>
            <H3>工具に対応する集じんカバーを確認する</H3>
            <P>
              ディスクグラインダーや研削工具には、集じんカバーや集じんアダプターを取り付け、集塵機へ接続できるものがあります。粉じんが飛散してから作業場全体で吸うより、発生する位置の近くで捕らえる方が効率的です。
            </P>
            <P>
              工具径、カバーの対応機種、ホース径、接続アダプター、研削材の形状などを確認します。汎用品を無理に取り付けるのではなく、工具メーカーや集じんカバーの適合情報を優先してください。
            </P>
            <SectionImage
              src={img("mobile-dust-extractor-grinding-workstation.jpg")}
              alt="移動式の集塵機とフードを研磨作業に合わせて配置するイメージ"
            />
            <H3>局所排気・移動式フードを検討する</H3>
            <P>
              作業台が固定されている研磨工程なら、局所排気装置や集塵装置付き作業台なども候補になります。手持ち工具で位置が変わる作業では、移動式フードや可搬式集塵機の方が運用しやすい場合があります。
            </P>
            <H3>集塵機は「粉じんなら何でも同じ」ではない</H3>
            <P>
              集塵機も、粉じんの種類、必要風量、フィルター、連続運転、電源、移動性、回収容器、火災・爆発リスクなどで選定が変わります。金属粉や可燃性粉じんを扱う場合は、一般的な集塵機を自己判断で使用せず、粉じんの性質と設備要件を確認してください。
            </P>
            <P>
              フードは「あるか」より、位置と気流まで確認します。吸い込み口が発生源から離れすぎていたり、スポットクーラーや扇風機の風で吸引気流が乱れていたりすると、十分に捕集できない場合があります。
            </P>
            <div className="my-6 rounded-2xl border border-emerald-300 bg-emerald-50 p-5 md:p-6">
              <p className={`${cls.ctaH3} text-gray-900`}>
                集じん設備もあわせて比較したい場合
              </p>
              <p className="mt-2 text-[16px] leading-7 text-gray-900">
                必要風量、対象粉じん、工具接続、フィルター方式、設置場所などを確認して候補を絞ります。集塵機一覧は、防じんマスク選定とは別の目的（発生源捕集）の比較導線です。
              </p>
              <ExtLink
                href={ctas.rakutenCollector}
                className="mt-4 inline-flex min-h-12 items-center justify-center rounded-xl bg-emerald-800 px-5 py-3 text-center font-bold text-white hover:bg-emerald-900"
              >
                楽天市場で集塵機を比較する
              </ExtLink>
            </div>
          </section>

          <section id="fit">
            <H2>防じんマスクの性能を落としやすい「密着」の見落とし</H2>
            <SectionImage
              src={img("respirator-fit-seal-check-worksite.jpg")}
              alt="作業前に防じんマスクの密着状態を確認する作業者のイメージ"
            />
            <H3>高い捕集効率でも、顔との隙間があれば漏れ込む</H3>
            <P>
              防じんマスクは、空気が必ずろ過材を通るよう、顔と面体が適切に密着して初めて本来の性能を発揮します。厚生労働省の通達でも、面体が適切に密着していないと、接顔部から粉じんが面体内へ漏れ込むとされています。
            </P>
            <H3>フィットテストと毎回のシールチェックは別物</H3>
            <P>
              フィットテストは、その人の顔にその型式・サイズの面体が適合するかを評価するものです。厚生労働省の2023年通達では、金属アーク溶接等や第三管理区分場所に加え、リスクアセスメントに基づくリスク低減措置として面体を有する呼吸用保護具を使わせる事業場でも、1年以内ごとに1回のフィットテストを行う考え方が示されています。
            </P>
            <P>
              一方、シールチェックは着用直後に本人が密着状態を確認するものです。取扱説明書に従って、毎回の装着時に確認します。同じ型式を全員へ配るだけでは足りません。
            </P>
            <H3>タオル・ひげ・ヘルメットの上からのしめひもは避ける</H3>
            <P>
              厚生労働省通達では、面体と顔の間にタオルを挟む、ひげ・もみあげ・前髪が接顔部へ入り込む、ヘルメットの上からしめひもを使う、といった着用を行わせないよう示されています。
            </P>
            <P>
              「苦しいから少し隙間を作る」は、防じんマスク本来の防護性能を失う原因になります。苦しさが続く場合は、作業を中止して安全な場所へ移動し、ろ過材の交換、サイズ・型式、作業強度、P-PAPR等の選択肢を見直します。
            </P>
          </section>

          <section id="management">
            <H2>使用限度時間・ろ過材交換を「時間だけ」で決めない</H2>
            <P>
              使い捨て式には製品ごとの使用限度時間がありますが、限度時間まで必ず使えるという意味ではありません。息苦しさ、著しい型くずれ、汚れ等の状態も見て、メーカー基準に従って交換します。
            </P>
            <H3>使い捨て式は表示時間前でも交換が必要になる</H3>
            <P>
              厚生労働省の通達では、使い捨て式防じんマスクについて、表示された使用限度時間に達する前でも、息苦しさを感じた場合や著しい型くずれが生じた場合は廃棄して新しいものへ交換するよう示されています。
            </P>
            <H3>取替え式はろ過材の交換基準を現場で決める</H3>
            <P>
              ろ過材の寿命は、粉じんの種類、粒径、濃度、発散状況などの影響を受けます。メーカー情報と作業環境をもとに交換ルールを作り、品番・交換日・使用者などを管理すると運用しやすくなります。
            </P>
            <H3>オイルミストは「息苦しくないから大丈夫」と判断しない</H3>
            <P>
              オイルミストを捕集した場合、固体粒子のように吸気抵抗が大きく上がらない場合があります。厚生労働省通達でも、製造者情報に基づいて交換時期を設定するよう示されています。
            </P>
            <SectionImage
              src={img("respirator-filter-storage-inventory-management.jpg")}
              alt="防じんマスクと交換用ろ過材を衛生的に保管・在庫管理するイメージ"
            />
            <H3>法人で防じんマスクを支給するときのチェックリスト</H3>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {[
                [
                  "選定前",
                  [
                    "どの作業で粉じんが発生するか洗い出した",
                    "材料、塗膜、薬品、付着物、SDSを確認した",
                    "粉じん濃度やばく露リスクを評価した",
                    "法令で必要な呼吸用保護具や性能区分を確認した",
                    "集じん・局所排気・湿式化など、保護具より前にできる対策を検討した",
                    "有毒ガス・蒸気、酸素欠乏のおそれがないか確認した",
                  ],
                ],
                [
                  "商品選定",
                  [
                    "国家検定合格品か確認した",
                    "D/R、S/L、区分1〜3の意味を確認した",
                    "必要な要求防護係数に対応できるか確認した",
                    "作業強度に対して吸気抵抗・排気抵抗・重量を確認した",
                    "排気弁の有無を確認した",
                    "顔に合う型式・サイズを複数用意できるか確認した",
                    "取替え式では面体とろ過材の正しい組み合わせを確認した",
                  ],
                ],
                [
                  "運用",
                  [
                    "保護具着用管理責任者など管理者を明確にした",
                    "フィットテストが必要な作業・対象者を整理した",
                    "着用直後にシールチェックを行う教育をした",
                    "ひげ・タオル・前髪など密着を妨げる要因を周知した",
                    "使い捨て式の交換・廃棄基準を決めた",
                    "取替え式のろ過材交換日を記録する",
                    "面体の洗浄・乾燥・保管場所を決めた",
                    "各拠点の最低在庫・発注点を決めた",
                  ],
                ],
              ].map(([title, items]) => (
                <div
                  key={title as string}
                  className="rounded-xl border border-gray-300 p-5"
                >
                  <p className="font-extrabold text-gray-900">{title as string}</p>
                  <ul className="mt-3 space-y-2 text-[14px] leading-6 text-gray-900">
                    {(items as string[]).map((item) => (
                      <li key={item} className="flex gap-2">
                        <span aria-hidden>✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section id="mistakes">
            <H2>よくある失敗</H2>
            <div className="mt-6 space-y-4">
              {[
                [
                  "「防じんマスク」と書いてあれば何でもよいと思う",
                  "粉じんの種類、オイルミストの有無、要求防護係数、法令上の指定などで必要な保護具は変わります。商品名だけで決めず、規格表示と使用条件を確認します。",
                ],
                [
                  "DS2とRL3を捕集効率だけで順位付けする",
                  "フィルター効率は重要ですが、面体の密着や指定防護係数を無視すると選定を誤ります。高性能フィルターを使っても、顔との隙間から漏れ込めば期待した性能は得られません。",
                ],
                [
                  "集塵機があるからマスクは不要と決める",
                  "局所排気や集じんは優先すべき対策ですが、設備を設ければ自動的に呼吸用保護具が不要になるとは限りません。実際のばく露とリスクアセスメント結果で判断します。",
                ],
                [
                  "活性炭入りなら有毒ガスにも使えると思う",
                  "防じんマスクの活性炭入り仕様は、不快臭の軽減などを目的とする製品がありますが、防毒マスクの代用と考えないでください。有毒ガス・蒸気がある環境では、対象物質に適した防毒機能を持つ呼吸用保護具が必要です。",
                ],
                [
                  "全員へ同じサイズを配る",
                  "顔の形や大きさは人によって違います。サイズ展開のある面体を使い、フィットテストで適合する型式・サイズを確認します。",
                ],
                [
                  "使用限度時間だけで交換する",
                  "粉じん濃度や作業負荷によっては、表示時間より前に息苦しくなったり、型くずれが起きたりします。表示時間は交換判断の一要素として扱います。",
                ],
                [
                  "マスクの上にタオルを挟む",
                  "汗や痛みを避けるためでも、接顔部に異物を挟むと密着を妨げます。着用性に問題がある場合は、別型式・別サイズ・作業方法そのものを見直します。",
                ],
              ].map(([title, body]) => (
                <div
                  key={title}
                  className="rounded-xl border-l-4 border-gray-900 bg-gray-50 p-5"
                >
                  <h3 className="font-extrabold text-gray-900">{title}</h3>
                  <p className="mt-2 text-[16px] leading-7 text-gray-900">{body}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="workflow">
            <H2>防じんマスクと集塵機を一緒に選ぶときの実務的な進め方</H2>
            <SectionImage
              src={img("dust-control-procurement-risk-assessment.jpg")}
              alt="安全衛生担当者と現場責任者が研磨作業の粉じん対策用品を選定するイメージ"
            />
            <P>
              法人購買では、マスクと集塵機を別々に購入するより、「どの作業工程で何を減らしたいか」からセットで考えると整理しやすくなります。
            </P>
            <H3>例：金属部品のバリ取り・研磨</H3>
            <ol className="my-4 list-decimal space-y-2 pl-6 text-[16px] leading-7 text-gray-900">
              <li>工具側で集じんカバーを付けられるか確認</li>
              <li>既設または可搬式集塵機へ接続できるか確認</li>
              <li>作業台周辺へ粉じんが残らない清掃方法を決める</li>
              <li>粉じんの種類・濃度・法令を確認し、必要な呼吸用保護具を選定</li>
              <li>作業者ごとにフィット確認</li>
              <li>使い捨て式なら交換基準、取替え式ならろ過材交換基準を決める</li>
            </ol>
            <H3>例：複数拠点へ防じんマスクを標準配備</H3>
            <ol className="my-4 list-decimal space-y-2 pl-6 text-[16px] leading-7 text-gray-900">
              <li>全拠点共通で使える「標準品」を決める前に作業を分類</li>
              <li>一般研磨用、長時間作業用、特定作業用など必要なら複数SKUに分ける</li>
              <li>S/M/Lなどサイズが必要な面体は個人台帳とひも付ける</li>
              <li>箱単位の最低在庫と発注点を決める</li>
              <li>予備在庫を現場へ置く</li>
              <li>廃番・仕様変更があったときの代替選定ルールを決める</li>
            </ol>
            <ol className="mt-8 space-y-4">
              {[
                [
                  "作業と材料を洗い出す",
                  "工具、母材、表面処理、使用薬品、作業時間、周辺作業者を整理します。",
                ],
                [
                  "発生源対策を決める",
                  "湿式化・自動化の可否、工具集じん、局所排気、移動式フード、区画を検討します。",
                ],
                [
                  "残るリスクを評価する",
                  "粉じん濃度、法令、要求防護係数、オイルミストやガス・蒸気の有無を確認します。",
                ],
                [
                  "呼吸用保護具を絞る",
                  "国家検定区分、D/R、S/L、面体形式、サイズ、作業負荷を照合します。",
                ],
                [
                  "個人へフィットさせる",
                  "必要なフィットテスト、毎回のシールチェック、ひげ等の密着阻害を管理します。",
                ],
                [
                  "交換・保管・在庫へ落とす",
                  "交換基準、洗浄、衛生保管、ろ過材品番、サイズ別最低在庫まで標準化します。",
                ],
              ].map(([title, body], i) => (
                <li
                  key={title}
                  className="grid grid-cols-[44px_1fr] gap-4 rounded-xl border border-gray-300 p-5"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-950 font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-extrabold text-gray-900">{title}</p>
                    <p className="mt-1 text-[16px] leading-7 text-gray-900">
                      {body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section id="faq">
            <H2>よくある質問</H2>
            <div className="mt-6 divide-y divide-gray-200 rounded-2xl border border-gray-300 px-5 md:px-6">
              {faqs.map((faq) => (
                <details key={faq.question} className="group py-5">
                  <summary
                    className={`${cls.faqQ} cursor-pointer list-none pr-7 marker:hidden`}
                  >
                    {faq.question}
                  </summary>
                  <p className="mt-3 text-[16px] leading-7 text-gray-900">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>

          <section className="mt-12 rounded-2xl bg-gray-950 p-6 text-white md:p-8">
            <h2 className="text-2xl font-extrabold md:text-3xl">
              まとめ｜「高性能なマスクを買う」より先に、粉じんがどこから来るかを見る
            </h2>
            <p className="mt-4 text-[17px] leading-[1.85] text-gray-100">
              グラインダー・研磨作業の粉じん対策は、マスク選びから始めるより、何を削っているか、発生源でどこまで捕れるか、残るばく露リスクは何かを順に確認した方が整理しやすくなります。そのうえで国家検定区分、使い捨て／取替え、S/L、サイズ、密着、交換管理まで選定します。
            </p>
            <p className="mt-4 text-[17px] leading-[1.85] text-gray-100">
              法人で導入するなら「全員同じものを箱で買う」だけでなく、作業別・サイズ別の標準品、交換ろ過材、集じん設備、教育まで一つの運用として決めておくと管理しやすくなります。
            </p>
            <div className="mt-6 grid gap-3 md:grid-cols-3">
              <ExtLink
                href={ctas.yahooMask}
                className="flex min-h-12 items-center justify-center rounded-xl bg-white px-4 py-3 text-center font-bold text-gray-950"
              >
                Yahoo!で防じんマスクを比較
              </ExtLink>
              <ExtLink
                href={ctas.rakutenMask}
                className="flex min-h-12 items-center justify-center rounded-xl bg-rose-700 px-4 py-3 text-center font-bold text-white"
              >
                楽天で防じんマスクを比較
              </ExtLink>
              <ExtLink
                href={ctas.rakutenCollector}
                className="flex min-h-12 items-center justify-center rounded-xl bg-emerald-700 px-4 py-3 text-center font-bold text-white"
              >
                楽天で集塵機を比較
              </ExtLink>
            </div>
          </section>

          <section className="mt-12 border-t border-gray-200 pt-8">
            <H2>主な参考資料</H2>
            <ul className="mt-4 space-y-3 text-[15px] leading-6 text-gray-900">
              <li>
                <a
                  href="https://www.mhlw.go.jp/web/t_doc?dataId=74041000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4"
                >
                  厚生労働省「防じんマスクの規格」
                </a>
              </li>
              <li>
                <a
                  href="https://www.jaish.gr.jp/anzen/hor/hombun/hor1-64/hor1-64-36-1-0.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4"
                >
                  安全衛生情報センター「防じんマスク、防毒マスク及び電動ファン付き呼吸用保護具の選択、使用等について」（基発0525第3号）
                </a>
              </li>
              <li>
                <a
                  href="https://anzeninfo.mhlw.go.jp/user/anzen/kag/pdf/taisaku/GrindingPolishing201903.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4"
                >
                  厚生労働省「研削、研磨の作業」対策シート
                </a>
              </li>
              <li>
                <a
                  href="https://elaws.e-gov.go.jp/document?lawid=354M50002000018"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4"
                >
                  e-Gov法令検索「粉じん障害防止規則」
                </a>
              </li>
            </ul>
          </section>

          <section className="mt-12 border-t border-gray-200 pt-8">
            <H2>関連記事</H2>
            <ul className="mt-4 space-y-3 text-[16px] font-semibold text-gray-900">
              <li>
                <Link
                  href="/articles/shujinki-bojin-mask-heiyou"
                  className="underline underline-offset-4"
                >
                  集塵機があれば防じんマスクはいらない？工場の粉じん対策と併用方法
                </Link>
              </li>
              <li>
                <Link
                  href="/articles/welding-shade-glass-number-selection"
                  className="underline underline-offset-4"
                >
                  溶接遮光ガラスの番号の選び方
                </Link>
              </li>
              <li>
                <Link
                  href="/articles/welding-spark-protection-sheet-selection"
                  className="underline underline-offset-4"
                >
                  溶接火花養生シートの選び方
                </Link>
              </li>
            </ul>
          </section>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
