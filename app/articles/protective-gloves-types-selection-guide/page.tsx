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

const SLUG = "protective-gloves-types-selection-guide";
const SITE_URL = "https://www.sagyou-navi.com";
const CANONICAL = `${SITE_URL}/articles/${SLUG}`;
const PUBLISHED = "2026-09-01";
const IMG = (file: string) => `/images/articles/${SLUG}/${file}`;
const PROD = (file: string) => `/images/articles/${SLUG}/products/${file}`;
const EXT_REL = "nofollow sponsored noopener noreferrer";

const ARTICLE_TITLE =
  "保護手袋の種類を用途別に解説｜耐切創・耐熱・防振・使い捨ての違いと選び方【2026年版】";
const META_TITLE =
  "保護手袋の種類を用途別に解説｜耐切創・耐熱・防振・使い捨ての選び方【2026年】";
const SHORT_TITLE = "保護手袋の種類と選び方";
const DESCRIPTION =
  "保護手袋の種類を危険源から逆引きで解説。一般作業用、耐切創、耐熱・溶接、防振、化学防護、使い捨て、電気絶縁用の違いと選び方を整理し、GC-select掲載商品も比較。ボール盤など手袋を着用してはいけない作業も紹介します。";

const ctas = productData.categoryCtas;

type Product = {
  name: string;
  code: string;
  image: string;
  url: string;
  role: string;
  badge: string;
  use: string;
};

const hazardRows = [
  ["汚れ・摩擦・軽作業", "一般作業用手袋", "運搬、梱包、軽作業"],
  ["刃物・金属バリ・ガラス", "耐切創手袋", "金属加工、板金、ガラス取扱"],
  ["熱・火花・溶接", "耐熱手袋・溶接用革手袋", "溶接、炉周辺、高温物取扱"],
  ["チェーンソー・グラインダー等の振動", "防振手袋", "林業、研削、振動工具"],
  ["化学物質", "化学防護手袋", "洗浄剤、溶剤、薬品取扱"],
  ["衛生・汚染防止・短時間作業", "使い捨て手袋", "点検、清掃、衛生作業"],
  ["電気", "電気絶縁用手袋", "電気作業"],
] as const;

const faqs = [
  {
    q: "保護手袋にはどんな種類がありますか？",
    a: "一般作業用、耐切創、耐熱・溶接用、防振、化学防護、電気絶縁などがあります。衛生・汚染防止では使い捨て手袋も使われます。危険源に応じて種類を選ぶことが基本です。",
  },
  {
    q: "作業用手袋と保護手袋は同じですか？",
    a: "日常的には重なる表現ですが、作業用手袋は軽作業用まで含む広い呼び方です。防護手袋は切創、振動、電気、化学物質など特定の危険から保護する性能を持つ手袋を指す文脈で使われます。",
  },
  {
    q: "耐切創手袋は絶対に切れませんか？",
    a: "いいえ。切創抵抗が高い手袋であって、切断や突き刺しを完全に防ぐ保証ではありません。作業に必要なレベルと他の性能を確認してください。",
  },
  {
    q: "耐熱手袋と溶接手袋は同じですか？",
    a: "完全に同じではありません。溶接用手袋は火花・スパッタ・摩耗など溶接特有の作業を想定します。高温物の接触には、対象温度や接触条件に合う耐熱手袋を確認します。",
  },
  {
    q: "防振手袋はチェーンソーに使えますか？",
    a: "チェーンソー作業向けの防振手袋があります。ただし防振性能と切創等の性能は別に確認し、工具の取扱説明書や作業ルールに従ってください。",
  },
  {
    q: "ニトリル手袋なら薬品に使えますか？",
    a: "材質名だけでは判断できません。対象化学物質、濃度、手袋の厚み、作業時間、耐透過性能等を確認してください。",
  },
  {
    q: "使い捨て手袋は化学防護手袋ですか？",
    a: "必ずしもそうではありません。使い捨ては使用形態の分類であり、化学防護性能は製品ごと・物質ごとに確認する必要があります。",
  },
  {
    q: "ボール盤では手袋を着けてもいいですか？",
    a: "回転する刃物に手が巻き込まれるおそれがある場合、労働安全衛生規則第111条で手袋の使用が禁止されています。作業手順と設備側の安全対策を確認してください。",
  },
  {
    q: "耐切創レベルCとDはどう違いますか？",
    a: "ISO 13997系の切創試験で示される区分で、DはCより高い切創力への抵抗を示します。ただし使用する工具や素材によって必要レベルは変わるため、レベルだけで決めないことが重要です。",
  },
];

const checkItems = [
  "作業中の危険源を特定した",
  "一般作業 / 耐切創 / 耐熱 / 防振 / 化学防護のどれが必要か決めた",
  "必要なJIS・EN等の性能表示を確認した",
  "耐切創は突き刺し性能と別だと理解した",
  "耐熱は使用温度・用途を確認した",
  "防振手袋は使用する工具との適合を確認した",
  "化学物質はSDSと耐透過性能を確認した",
  "使い捨て手袋を化学防護と同一視していない",
  "S/M/Lなど適切なサイズを用意した",
  "交換基準を決めた",
  "手袋着用禁止工程を確認した",
];

const failureItems = [
  {
    title: "素材だけで選ぶ",
    body: "「ニトリルだから油も薬品もOK」「革だから熱に強い」と単純化しないでください。",
  },
  {
    title: "耐切創レベルだけで決める",
    body: "高レベルほど厚さや操作性に影響する場合があります。実作業に必要な性能とのバランスを見ます。",
  },
  {
    title: "耐熱の数値・条件を確認しない",
    body: "接触熱、火炎、溶接スパッタなど、熱リスクは一つではありません。",
  },
  {
    title: "防振手袋なら振動がゼロになると思う",
    body: "防振手袋は振動を軽減する保護具です。工具の整備、作業時間管理など他の対策と合わせます。",
  },
  {
    title: "使い捨てニトリルを万能の化学防護として使う",
    body: "対象物質の耐透過性を確認してください。",
  },
  {
    title: "回転工具でも手袋を着ける",
    body: "巻き込みリスクがある回転刃作業では、手袋が危険源になることがあります。",
  },
];

const relatedArticles = [
  {
    href: "/articles/cut-resistant-glove-level-selection-guide",
    label: "耐切創手袋のレベル・選び方",
  },
  {
    href: "/articles/chemical-protective-clothing-selection",
    label: "化学防護服の選び方",
  },
  {
    href: "/articles/welding-shade-glass-number-selection",
    label: "溶接遮光ガラスの番号の選び方",
  },
  {
    href: "/articles/grinder-polishing-dust-control-mask-guide",
    label: "グラインダー・研磨作業の粉じん対策",
  },
];

export const metadata: Metadata = {
  title: META_TITLE,
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: META_TITLE,
    description: DESCRIPTION,
    type: "article",
    url: CANONICAL,
    siteName: "作業用品ナビ",
    publishedTime: PUBLISHED,
    modifiedTime: PUBLISHED,
    images: [
      {
        url: `${SITE_URL}${IMG("protective-gloves-types-hero.webp")}`,
        width: 1600,
        height: 900,
        alt: "耐切創・耐熱・防振など複数種類の保護手袋を用途別に比較するイメージ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}${IMG("protective-gloves-types-hero.webp")}`],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: ARTICLE_TITLE,
  description: DESCRIPTION,
  mainEntityOfPage: CANONICAL,
  image: [`${SITE_URL}${IMG("protective-gloves-types-hero.webp")}`],
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
    {
      "@type": "ListItem",
      position: 3,
      name: SHORT_TITLE,
      item: CANONICAL,
    },
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
        <h3 className={`${cls.ctaH3} mb-4`}>{heading}</h3>
      ) : null}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {ctas.map((cta) => (
          <ExtLink
            key={cta.label}
            href={cta.url}
            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-amber-600 px-4 py-3 text-center text-[15px] font-extrabold text-white hover:bg-amber-700"
          >
            {cta.label} →
          </ExtLink>
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
  const hasImage = productImageExists(product.image);

  return (
    <article className="rounded-2xl border border-gray-300 bg-white p-5 shadow-sm md:p-6">
      <div className="grid gap-5 md:grid-cols-[200px_1fr] md:items-start">
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
          {hasImage ? (
            <Image
              src={PROD(product.image)}
              alt={`${product.name}の商品画像`}
              width={400}
              height={400}
              priority={priority}
              className="h-auto w-full object-contain p-3"
            />
          ) : (
            <ImagePending name={product.name} />
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
            {product.name}
          </h3>
          <p className="mt-4 text-[15px] leading-7 text-gray-900 md:text-[16px]">
            <strong>役割：</strong>
            {product.role}
          </p>
          <ExtLink
            href={product.url}
            className="mt-5 inline-flex min-h-12 items-center justify-center rounded-xl bg-amber-600 px-5 py-3 text-[16px] font-bold text-white hover:bg-amber-700"
          >
            商品ページを見る →
          </ExtLink>
        </div>
      </div>
    </article>
  );
}

function ProductStack({
  products,
  priorityFirst = false,
}: {
  products: Product[];
  priorityFirst?: boolean;
}) {
  return (
    <div className="my-6 grid gap-5">
      {products.map((product, index) => (
        <ProductCard
          key={product.code}
          product={product}
          priority={priorityFirst && index === 0}
        />
      ))}
    </div>
  );
}

function CategoryCtaLink({ label }: { label: string }) {
  const cta = ctas.find((c) => c.label === label);
  if (!cta) return null;
  return (
    <ExtLink
      href={cta.url}
      className="inline-flex min-h-11 items-center justify-center rounded-xl border-2 border-amber-600 bg-white px-5 py-2.5 text-[15px] font-extrabold text-amber-800 hover:bg-amber-50"
    >
      {label}から比較する →
    </ExtLink>
  );
}

export default function Page() {
  const general = productData.products.general as Product[];
  const cut = productData.products.cut as Product[];
  const heat = productData.products.heat as Product[];
  const vibration = productData.products.vibration as Product[];
  const supplement = productData.products.supplement as Product[];

  return (
    <>
      <SiteHeader />
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />

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
              <li>{SHORT_TITLE}</li>
            </ol>
          </nav>
        </div>

        <article className="mx-auto max-w-[850px] px-4 pb-16 sm:px-6">
          <header>
            <div className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-sm font-bold text-amber-950">
              作業用手袋・保護具 / 2026年9月1日更新
            </div>
            <h1 className={cls.h1}>{ARTICLE_TITLE}</h1>
            <P>
              作業用の手袋を選ぼうとすると、軍手、ニトリル、革手袋、耐切創、耐熱、防振、使い捨てなど、名前が多すぎて「結局どれを選べばよいのか」が分かりにくくなります。
            </P>
            <P>
              保護手袋選びで最も大切なのは、
              <Mark>素材から選び始めないこと</Mark>
              です。
            </P>
            <P>
              先に確認するのは、作業中に手が何にさらされるかです。鋭利な金属なら耐切創、火花や高温物なら耐熱・溶接用、振動工具なら防振、化学物質なら化学防護というように、
              <Mark>危険源を特定してから必要な性能を決める</Mark>
              と選びやすくなります。
            </P>
            <P>
              この記事では、保護手袋の種類を危険源から逆引きできるよう整理し、GC-selectに掲載されている耐切創手袋、溶接・耐熱手袋、防振手袋なども用途別に紹介します。
            </P>
            <figure className="mt-7 overflow-hidden rounded-2xl border border-gray-200">
              <div className="relative aspect-video">
                <Image
                  src={IMG("protective-gloves-types-hero.webp")}
                  alt="耐切創・耐熱・防振など複数種類の保護手袋を用途別に比較するイメージ"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 850px"
                />
              </div>
            </figure>
          </header>

          <section className="mt-8 rounded-2xl border-2 border-amber-400 bg-slate-950 p-6 text-white md:p-8">
            <p className="text-sm font-bold text-amber-300">
              30秒で分かる｜保護手袋の種類と選び方
            </p>
            <h2 className="mt-2 text-[23px] font-extrabold leading-tight md:text-[28px]">
              危険源から逆引きして選ぶ
            </h2>
            <p className="mt-4 text-[16px] leading-8 text-white md:text-[17px]">
              作業現場で使う保護手袋は、まず「何から手を守るか」を決めてから種類を選びます。
            </p>
            <div className="mt-6 overflow-x-auto">
              <table className={`${cls.table} min-w-[640px] bg-white text-gray-900`}>
                <thead>
                  <tr>
                    <th className={cls.th}>危険・作業</th>
                    <th className={cls.th}>選ぶ手袋の種類</th>
                    <th className={cls.th}>代表的な用途</th>
                  </tr>
                </thead>
                <tbody>
                  {hazardRows.map(([hazard, type, use]) => (
                    <tr key={hazard}>
                      <td className={cls.td}>
                        <strong>{hazard}</strong>
                      </td>
                      <td className={cls.td}>{type}</td>
                      <td className={cls.td}>{use}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-5 text-[15px] leading-7 text-amber-100 md:text-[16px]">
              ただし、
              <strong className="text-white">
                手袋を着ければ常に安全というわけではありません。
              </strong>
              ボール盤や面取り盤など、回転する刃物に手が巻き込まれるおそれがある作業では、労働安全衛生規則により手袋の使用が禁止される場合があります。
            </p>
            <div className="mt-5">
              <ExtLink
                href={ctas[0].url}
                className="inline-flex min-h-11 items-center justify-center rounded-xl bg-amber-500 px-5 py-2.5 text-[15px] font-extrabold text-gray-950 hover:bg-amber-400"
              >
                作業用手袋一覧を見る →
              </ExtLink>
            </div>
          </section>

          <SectionImage
            src={IMG("glove-selection-by-hazard.webp")}
            alt="切創・熱・振動・化学物質など危険源から保護手袋を選ぶイメージ"
          />

          <H2 id="terminology">保護手袋・防護手袋・作業用手袋は何が違う？</H2>
          <P>
            日常の通販や現場では「作業用手袋」「保護手袋」「防護手袋」という言葉が混在しています。
          </P>
          <P>
            大きく見ると、作業用手袋は軽作業用の軍手から高機能な特殊手袋まで広い意味で使われます。一方、日本保安用品協会では、防護手袋を熱、振動、切創、電気、化学物質などの危険有害因子から手を保護する目的の手袋として整理しています。
          </P>
          <P>関連する主なJISには、</P>
          <ul className={cls.list}>
            <li>JIS T8008:2022：防護手袋の一般要求事項及び試験方法</li>
            <li>JIS T8112：電気絶縁用手袋</li>
            <li>JIS T8113：溶接用かわ製保護手袋</li>
            <li>JIS T8114：防振手袋</li>
            <li>JIS T8116：化学防護手袋</li>
          </ul>
          <P>
            つまり、「ゴム手袋」「革手袋」という素材名だけで考えるより、
            <Mark>何の危険に対応する保護具なのか</Mark>
            を見る方が安全上は重要です。
          </P>

          <H2 id="general">1. 一般作業用手袋｜軽作業・運搬・汚れ防止</H2>
          <P>
            一般作業用手袋は、梱包、荷扱い、資材運搬、清掃、軽い組立など、特殊な高リスクがない作業で使われます。
          </P>
          <P>
            代表的なのは軍手、背抜き手袋、ニトリルコート手袋、革手袋などです。
          </P>
          <H3>軍手は安価で使いやすいが万能ではない</H3>
          <P>
            綿の軍手は吸汗性があり、資材運搬や軽作業には使いやすい一方、鋭利なバリや高温物、薬品に対する専用防護性能を持つわけではありません。
          </P>
          <P>
            Excel掲載商品の中では、
            <strong>純綿カフス軍手 120双入り 800g</strong>
            のような商品が一般作業用の代表例です。
          </P>
          <H3>ニトリル系はグリップや油汚れに使いやすい</H3>
          <P>
            ニトリルゴムを使った作業手袋は耐油性や耐摩耗性を活かしやすく、機械周辺の一般作業でも使われます。
          </P>
          <P>
            例えば
            <strong>ニトリル手袋 綿植毛付</strong>
            のような厚手タイプは、薄い使い捨てニトリルとは別カテゴリとして考えます。
          </P>
          <H3>一般作業用の代表商品</H3>
          <ProductStack products={general} priorityFirst />
          <div className="my-6">
            <CategoryCtaLink label="作業用手袋一覧" />
          </div>

          <H2 id="cut-resistant">2. 耐切創手袋｜金属・ガラス・刃物・バリから手を守る</H2>
          <SectionImage
            src={IMG("cut-resistant-gloves-sheet-metal.webp")}
            alt="金属板を扱う作業者が耐切創手袋を着用するイメージ"
          />
          <P>
            金属板、ガラス、刃物、鋭利な樹脂部品などを扱う場合は、一般軍手ではなく耐切創手袋を検討します。
          </P>
          <P>
            耐切創手袋では、HPPE、ガラス繊維、アラミドなどの高強度繊維や、ニトリル・PUコーティングなどが組み合わせられます。
          </P>
          <H3>「耐切創」は「絶対に切れない」という意味ではない</H3>
          <P>
            耐切創レベルが高い手袋でも、刃物の種類、力のかかり方、突き刺しなどによっては損傷します。
          </P>
          <P>
            例えばGC-selectのGM787商品ページでも、耐切創素材を使っているものの「絶対に切れない、破れない保証ではない」ことや、突き刺し防止の効果とは別であることが明記されています。
          </P>
          <H3>レベルCとDの違いを実商品で見る</H3>
          <P>
            <strong>川西工業 GM640</strong>
            はEN388 4X42C、
            <strong>GM787</strong>
            は4X42Dです。どちらも手のひらにニトリルゴムを使い、耐油・耐摩耗性も意識したタイプですが、耐切創性能の区分が異なります。
          </P>
          <P>
            さらに高い切創リスクを想定する場合、
            <strong>HexArmor Helix 2062</strong>
            のような高耐切創モデルも候補になります。メーカー公式ではEN388 4X42F、ANSI/ISEA A9の性能表示があります。
          </P>
          <H3>耐切創手袋の代表商品</H3>
          <ProductStack products={cut} />
          <P>
            耐切創レベルのA～Fや選び分けを詳しく知りたい場合は、既存記事
            <Link
              href="/articles/cut-resistant-glove-level-selection-guide"
              className="font-bold text-amber-800 underline underline-offset-2"
            >
              「耐切創手袋のレベル・選び方」
            </Link>
            を参照してください。本記事では保護手袋全体の種類を主題にするため、耐切創だけを深掘りしすぎない設計にします。
          </P>
          <div className="my-6">
            <CategoryCtaLink label="耐切創手袋一覧" />
          </div>
          <H3>切創リスクが前腕まであるならアームカバーも検討</H3>
          <P>
            薄板やガラス、大型部材では、手のひらだけでなく手首や前腕が接触することもあります。その場合は手袋だけで完結させず、耐切創アームカバーを組み合わせる方法があります。
          </P>
          <ProductStack products={supplement} />

          <H2 id="heat-welding">3. 耐熱・溶接用手袋｜「熱に強い」を一括りにしない</H2>
          <SectionImage
            src={IMG("heat-welding-gloves-workshop.webp")}
            alt="溶接作業でロングタイプの革手袋を使用するイメージ"
          />
          <P>
            耐熱手袋は、熱い物を扱う作業や高温設備周辺で使用します。一方、溶接作業では熱だけでなく、火花、スパッタ、摩耗なども考える必要があるため、革製の溶接用手袋が多く使われます。
          </P>
          <H3>溶接用革手袋</H3>
          <P>
            日本保安用品協会が挙げるJIS T8113は「溶接用かわ製保護手袋」の規格です。
          </P>
          <P>
            Excel掲載の
            <strong>床溶接5本指 50T</strong>
            は、牛床革を使ったロングタイプで、溶接、重機操作、ワイヤー作業などを想定する商品です。内縫いで縫い目が外に出にくい構造になっています。
          </P>
          <H3>耐熱糸仕様の革手袋</H3>
          <P>
            <strong>背縫い革手 103YK</strong>
            は耐熱糸仕様の革手袋で、溶接、建築、土木、造船などの作業候補です。
          </P>
          <P>
            ただし「耐熱」という名前だけで、何℃の物に何秒触れられるかを決めつけてはいけません。接触熱、火炎、放射熱など、製品によって評価項目と用途が異なるため、
            <Mark>メーカーが示す耐熱条件を確認して選ぶ</Mark>
            必要があります。
          </P>
          <H3>耐熱・溶接用の代表商品</H3>
          <ProductStack products={heat} />
          <div className="my-6">
            <CategoryCtaLink label="耐熱手袋一覧" />
          </div>

          <H2 id="vibration">4. 防振手袋｜振動工具を長時間使う作業に</H2>
          <SectionImage
            src={IMG("anti-vibration-gloves-tools.webp")}
            alt="振動工具作業で防振手袋を使用するイメージ"
          />
          <P>
            チェーンソー、グラインダー、振動工具などでは、振動による手腕への負担を考える必要があります。
          </P>
          <P>
            防振手袋は手のひら等に振動吸収材を配置し、振動を軽減するための手袋です。日本の関連規格にはJIS T8114があります。
          </P>
          <H3>V-1000</H3>
          <P>
            大中産業のV-1000は、表側に牛床革＋表革、内側にウレタンスポンジを使用し、手のひらのクッションで振動を軽減する製品です。農林、溶接、建築、土木、造船などが用途として示されています。
          </P>
          <H3>ブルックラー211</H3>
          <P>
            ブルックラー211は牛表革を使い、手のひらのクッション素材で振動を軽減するタイプです。GC-selectではグラインダー、チェーンソー、土木、溶接等の作業向けとして掲載されています。
          </P>
          <H3>チェーンソー作業用の複合型</H3>
          <P>
            Excelにはチェーンソー作業用の防振手袋もあり、振動吸収に加えて耐切創要素を持つ製品があります。
          </P>
          <P>
            ここで重要なのは、
            <Mark>「耐切創」と「防振」は別性能</Mark>
            だということです。複数リスクがある作業では、必要性能を一つずつ確認します。
          </P>
          <H3>防振手袋の代表商品</H3>
          <ProductStack products={vibration} />
          <div className="my-6">
            <CategoryCtaLink label="防振手袋一覧" />
          </div>

          <H2 id="chemical">5. 化学防護手袋｜「ニトリルだから大丈夫」では選ばない</H2>
          <SectionImage
            src={IMG("chemical-protective-glove-selection.webp")}
            alt="SDSと作業内容を確認しながら化学防護手袋を選ぶイメージ"
          />
          <P>
            薬品、洗浄剤、溶剤などを扱う作業では、化学防護手袋を選びます。
          </P>
          <P>
            ここは一般的な作業手袋の選び方とは特に注意点が違います。
          </P>
          <P>
            厚生労働省は2026年3月に
            <strong>「皮膚障害等防止用保護具の選定マニュアル 第3版」</strong>
            を公開しており、化学防護手袋を、対象物質、作業内容、作業時間、耐透過性能などを踏まえて選ぶ考え方を示しています。
          </P>
          <H3>ニトリルという材質名だけでは判断できない</H3>
          <P>ニトリルゴムは幅広い作業手袋に使われていますが、化学防護性能は、</P>
          <ul className={cls.list}>
            <li>対象化学物質</li>
            <li>濃度</li>
            <li>手袋の材質</li>
            <li>厚み</li>
            <li>接触時間</li>
            <li>作業方法</li>
          </ul>
          <P>
            などで変わります。
          </P>
          <P>
            そのため、一般作業用のニトリルコート手袋や薄い使い捨てニトリルを、
            <Mark>確認せず化学防護手袋として使わない</Mark>
            ことが重要です。
          </P>
          <P>
            化学物質を扱う場合は、SDS、メーカーの耐透過性能、厚生労働省の選定マニュアル等を確認してください。関連記事
            <Link
              href="/articles/chemical-protective-clothing-selection"
              className="font-bold text-amber-800 underline underline-offset-2"
            >
              「化学防護服の選び方」
            </Link>
            もあわせて参照してください。
          </P>

          <H2 id="disposable">6. 使い捨て手袋｜衛生・汚染防止には便利だが万能ではない</H2>
          <SectionImage
            src={IMG("disposable-gloves-inspection-cleaning.webp")}
            alt="点検や清掃作業で使い捨て手袋を交換しながら使うイメージ"
          />
          <P>
            使い捨て手袋は、衛生管理、清掃、点検、汚染防止、頻繁な交換が必要な作業で便利です。
          </P>
          <P>代表的な素材にはニトリル、天然ゴム、PVCなどがあります。</P>
          <H3>使い捨て = 化学防護ではない</H3>
          <P>最も大切な注意点です。</P>
          <P>
            使い捨てニトリル手袋を使っていても、対象の化学物質に必要な耐透過性能があるとは限りません。化学物質を扱う場合は、単に「ニトリル製」と書いてあるかではなく、対象物質への適合を確認します。
          </P>
          <P>
            今回のExcelには使い捨て専用の代表商品が明確に含まれていないため、SEO目的で別商品を無理に使い捨て扱いせず、カテゴリ一覧への導線に絞ります。
          </P>
          <div className="my-6">
            <CategoryCtaLink label="使い捨て手袋一覧" />
          </div>

          <H2 id="electrical">7. 電気絶縁用手袋｜電気作業は専用品を使う</H2>
          <P>
            感電リスクがある作業では、一般的なゴム手袋や耐切創手袋ではなく、電気絶縁用の保護具が必要です。
          </P>
          <P>日本保安用品協会が挙げる関連規格はJIS T8112です。</P>
          <P>
            「ゴムだから電気を通しにくそう」という理由で一般ゴム手袋を代用しないでください。
          </P>
          <P>
            今回のExcelには電気絶縁用手袋の代表商品がないため、商品の掲載は行わず、保護手袋の種類を網羅するための安全情報として説明します。
          </P>

          <section
            id="no-gloves"
            className="my-12 rounded-2xl border-4 border-red-600 bg-red-50 p-6 md:p-8"
          >
            <H2>重要｜手袋を着けてはいけない作業もある</H2>
            <SectionImage
              src={IMG("rotating-machine-no-gloves-safety.webp")}
              alt="ボール盤など回転工具では手袋の巻き込みに注意する安全教育イメージ"
            />
            <P>
              保護手袋の記事で最も見落としてはいけないポイントです。
            </P>
            <p className="mb-4 text-[20px] font-black leading-snug text-red-950 md:text-2xl">
              手袋を着けること自体が危険になる作業があります。
            </p>
            <P>
              労働安全衛生規則第111条では、ボール盤、面取り盤など、回転する刃物に作業中の手が巻き込まれるおそれがある場合、事業者は労働者に手袋を使用させてはならないと定めています。
            </P>
            <P>
              厚生労働省の職場のあんぜんサイトにも、ボール盤の穴あけ作業で手袋が回転中のドリルに巻き込まれそうになった事例が掲載されています。
            </P>
            <H3>「鋭い材料を扱うから耐切創手袋」は常に正解ではない</H3>
            <P>
              例えば、鋭利な金属板を扱う工程では耐切創手袋が必要でも、その金属板をボール盤へ持ち込み回転刃の近くで作業する工程では、巻き込みリスクとの兼ね合いが発生します。
            </P>
            <P>
              つまり手袋は、
              <Mark>材料だけでなく作業工程まで見て選ぶ</Mark>
              必要があります。
            </P>
            <P>
              法人で手袋を標準化する場合は、「着用する手袋」だけでなく「手袋着用禁止工程」も作業標準に入れてください。
            </P>
          </section>

          <H2 id="materials">素材別の特徴は「危険源を決めた後」に見る</H2>
          <P>危険源を決めたら、次に素材や構造を比較します。</P>
          <H3>綿</H3>
          <P>
            吸汗性があり、一般軽作業に使いやすい。切創・薬品・高温などの専用防護性能は別途確認が必要。
          </P>
          <H3>革</H3>
          <P>
            摩耗や火花を伴う作業で使われることが多く、溶接用手袋にも採用されます。床革・表革、縫い方、袖長などで用途が変わります。
          </P>
          <H3>ニトリル</H3>
          <P>
            耐油性・耐摩耗性を活かしたコーティング手袋や使い捨て手袋で広く使用されます。ただし、薬品への適合は物質別に確認します。
          </P>
          <H3>ポリウレタン（PU）</H3>
          <P>
            薄くフィットしやすいコーティングで、細かい作業性を重視する耐切創手袋などで使われます。
          </P>
          <H3>アラミド・HPPE・高強度繊維</H3>
          <P>
            耐切創や耐熱を目的として使われる高機能繊維です。ただし素材名だけでは最終性能は決まらないため、製品の規格・性能表示を確認します。
          </P>

          <H2 id="standardization">法人で保護手袋を標準化する5ステップ</H2>
          <P>
            工場・現場で手袋を会社指定にする場合は、商品名から決めるより次の順番がおすすめです。
          </P>
          <H3>STEP1 作業工程を書き出す</H3>
          <P>例：材料搬入、板金加工、溶接、研削、洗浄、梱包</P>
          <H3>STEP2 各工程の危険源を決める</H3>
          <P>
            切創、熱、振動、化学物質、汚れ、感電、巻き込みなどを洗い出します。
          </P>
          <H3>STEP3 必要性能を決める</H3>
          <P>
            耐切創レベル、溶接用、防振規格、化学防護の耐透過性など、必要な性能を決めます。
          </P>
          <H3>STEP4 サイズと作業性を確認する</H3>
          <P>
            大きすぎる手袋は指先の操作性を落とします。小さすぎる手袋は疲労や破損につながることがあります。S/M/Lなど複数サイズを用意し、実作業で確認します。
          </P>
          <H3>STEP5 交換基準・禁止工程まで決める</H3>
          <P>
            摩耗、破れ、コーティング剥離、油汚れ、化学物質との接触後など、交換条件を決めます。
          </P>
          <P>
            さらにボール盤など「手袋をしてはいけない工程」を明示すれば、保護具ルールとして完成度が上がります。
          </P>

          <H2 id="failures">保護手袋選びでよくある失敗</H2>
          <div className="my-6 grid gap-4">
            {failureItems.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-gray-300 bg-gray-50 p-5"
              >
                <h3 className="text-lg font-black text-gray-900 md:text-xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-[15px] leading-7 text-gray-900 md:text-[16px]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <H2 id="checklist">購入前チェックリスト</H2>
          <ul className="my-6 space-y-3">
            {checkItems.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-lg border border-gray-200 bg-white px-4 py-3 text-[15px] leading-7 text-gray-900 md:text-[16px]"
              >
                <span
                  aria-hidden="true"
                  className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 border-gray-400"
                />
                {item}
              </li>
            ))}
          </ul>

          <H2 id="faq">よくある質問</H2>
          <div className="my-6 space-y-8">
            {faqs.map((faq) => (
              <div key={faq.q}>
                <h3 className={cls.faqQ}>{faq.q}</h3>
                <p className={cls.bodySm}>{faq.a}</p>
              </div>
            ))}
          </div>

          <H2 id="summary">まとめ｜保護手袋は「素材」ではなく「何から守るか」で選ぶ</H2>
          <P>
            保護手袋の種類を覚えるときは、軍手、ニトリル、革という素材名を並べるより、
            <Mark>危険源から逆引きする</Mark>
            方が実務で使いやすくなります。
          </P>
          <ul className={cls.list}>
            <li>軽作業・汚れ → 一般作業用</li>
            <li>刃物・金属・ガラス → 耐切創</li>
            <li>熱・火花・溶接 → 耐熱 / 溶接用</li>
            <li>振動工具 → 防振</li>
            <li>化学物質 → 化学防護</li>
            <li>衛生・短時間汚染 → 使い捨て</li>
            <li>電気 → 電気絶縁用</li>
          </ul>
          <P>
            そして、回転工具など
            <Mark>手袋を着けること自体が危険になる作業</Mark>
            も忘れないでください。
          </P>
          <P>
            必要な種類が決まったら、各カテゴリの一覧から用途・サイズ・性能を比較してください。
          </P>

          <CtaGrid heading="手袋カテゴリ一覧" />

          <section className="mt-12 rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <h2 className="text-xl font-black text-gray-900 md:text-2xl">
              関連記事
            </h2>
            <ul className="mt-4 space-y-2">
              {relatedArticles.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-bold text-amber-800 underline underline-offset-2"
                  >
                    {item.label}
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
