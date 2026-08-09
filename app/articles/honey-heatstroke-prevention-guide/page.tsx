import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";
import productData from "./product-data.json";

const SLUG = "honey-heatstroke-prevention-guide";
const SITE_URL = "https://www.sagyou-navi.com";
const CANONICAL = `${SITE_URL}/articles/${SLUG}`;
const ARTICLE_TITLE =
  "はちみつは熱中症対策になる？はちみつ水・塩・レモンの考え方【2026年版】";
const SHORT_TITLE = "はちみつは熱中症対策になる？";
const DESCRIPTION =
  "はちみつは熱中症対策に使える？文部科学省の食品成分表をもとに、はちみつの糖質・ナトリウム量、はちみつ水や塩・レモンとの組み合わせ、市販の水分・塩分補給品との使い分けを解説。暑い現場でのプレクーリングや身体冷却も紹介します。";
const PUBLISHED = "2026-08-09";
const IMG = (file: string) => `/images/articles/${SLUG}/${file}`;
const PROD = (file: string) => `/images/articles/${SLUG}/products/${file}`;
const EXT_REL = "nofollow sponsored noopener noreferrer";

const ctas = productData.ctas;

type CatalogProduct = (typeof productData.products)[number];

const byId = Object.fromEntries(
  productData.products.map((p) => [p.id, p])
) as Record<string, CatalogProduct>;

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
    publishedTime: PUBLISHED,
    modifiedTime: PUBLISHED,
    images: [
      {
        url: `${SITE_URL}${IMG("honey-heatstroke-worksite-hero.jpg")}`,
        width: 1600,
        height: 900,
        alt: "暑い作業現場の休憩所ではちみつ入り飲料と水分塩分補給品を確認するイメージ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: ARTICLE_TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}${IMG("honey-heatstroke-worksite-hero.jpg")}`],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: ARTICLE_TITLE,
  description: DESCRIPTION,
  mainEntityOfPage: CANONICAL,
  image: [`${SITE_URL}${IMG("honey-heatstroke-worksite-hero.jpg")}`],
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  inLanguage: "ja-JP",
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

const nutrientCards = [
  ["329kcal", "100g当たりエネルギー"],
  ["81.9g", "100g当たり炭水化物"],
  ["2mg", "100g当たりナトリウム"],
  ["65mg", "100g当たりカリウム"],
] as const;

const drinkCompare = [
  ["水", "◎", "―", "―", "普段のこまめな水分補給"],
  ["はちみつ水", "◎", "○", "△", "飲みやすさや糖質も欲しいとき"],
  ["塩を加えた自作はちみつ水", "◎", "○", "△", "配合を理解して個人で作る場合"],
  [
    "成分表示のある補給飲料・補給品",
    "◎",
    "商品による",
    "◎",
    "大量発汗、職場での標準支給",
  ],
] as const;

const portableCompare = [
  ["タブレット", "携帯しやすい", "個人配布・休憩所の常備"],
  ["塩飴", "なじみがあり選びやすい", "複数人が使う休憩所"],
  ["塩ジェル", "個包装で量を管理しやすい", "大量発汗が想定される作業"],
  ["干し梅・カリカリ梅", "食品として取り入れやすい", "甘いタブレットが苦手な人の選択肢"],
] as const;

const stockpileCompare = [
  ["水分・塩分", "飲料、電解質、タブレット、ジェル", "O.R.S、塩ジェル、熱中タブレット"],
  ["食べる補給", "塩飴、干し梅、塩レモン", "匠の塩飴、種抜き干し梅"],
  ["プレクーリング", "アイススラリー、冷たい食品", "アイススラリー、飲むかき氷"],
  ["身体冷却", "冷却ベスト、保冷剤", "PCMクールベスト、ICE ARMOR"],
  ["着用対策", "空調ウェア等", "バートル、Nクールウェア"],
  ["環境管理", "日陰・冷房", "テント、スポットクーラー"],
  ["状態把握", "ウェアラブル等", "ハートウォッチPLUS、aiwa band"],
] as const;

const checkItems = [
  "WBGTを確認できる",
  "のどが渇く前に水分を摂るルールがある",
  "大量発汗時に使える塩分補給品がある",
  "甘いものが苦手な人向けの選択肢もある",
  "プレクーリング用品を用意できる",
  "冷却ベスト等を必要人数分用意できる",
  "日陰・テント・冷房休憩所を確保できる",
  "体調異常時に本人を一人にしない",
  "作業離脱・報告・搬送判断の手順が共有されている",
] as const;

const faqs = [
  {
    q: "はちみつを舐めるだけでも熱中症対策になりますか？",
    a: "はちみつは糖質を多く含む食品ですが、水分補給にはなりません。また、ナトリウムも100g当たり2mgと少ないため、大量発汗時の水分・塩分補給をはちみつだけで代替することはできません。",
  },
  {
    q: "はちみつ水に塩は必要ですか？",
    a: "普段の飲み物としては、必ず塩を加えなければならないわけではありません。一方、大量に汗をかく状況では塩分補給も必要になります。職場で標準化するなら、成分や使用方法を確認できる補給品も検討しやすいでしょう。",
  },
  {
    q: "はちみつレモンはスポーツドリンクの代わりになりますか？",
    a: "味や糖質は似た部分があっても、ナトリウム濃度などが同じとは限りません。大量発汗時の補給を目的にするなら、成分表示を確認して選ぶ方が確実です。",
  },
  {
    q: "はちみつ水は経口補水液ですか？",
    a: "いいえ。自作のはちみつ水を「経口補水液」と同一視しないでください。経口補水液は脱水症のための食事療法に用いる病者用の飲み物で、製品表示にも制度があります。",
  },
  {
    q: "暑い現場では、何を最優先でそろえればよいですか？",
    a: "水分・塩分補給だけでなく、WBGT把握、休憩、プレクーリング、身体冷却、日陰・冷房環境、体調異常時の対応手順まで含めて整えます。",
  },
  {
    q: "1歳未満の子どもにはちみつ水を飲ませてもよいですか？",
    a: "与えないでください。厚生労働省は、1歳未満の乳児にははちみつやはちみつ入り飲料・食品を与えないよう注意喚起しています。",
  },
] as const;

const relatedArticles = [
  {
    href: "/articles/wbgt-work-rest-time-guideline",
    label: "WBGTと作業時間の目安｜暑さ指数別の休憩時間早見表と現場の熱中症対策",
  },
  {
    href: "/articles/wet-towel-heatstroke-worksite",
    label: "熱中症対策に濡れタオルは使える？冷却タオル・瞬間冷却グッズの選び方",
  },
  {
    href: "/articles/worksite-rest-area-heat",
    label: "現場休憩所の暑さ対策｜屋外作業でそろえたい日よけ・工場扇・冷却用品",
  },
  {
    href: "/articles/outdoor-work-heatstroke-measures",
    label: "外仕事の熱中症対策｜現場・イベント・屋外倉庫で使える暑さ対策グッズ",
  },
] as const;

const refs = [
  {
    label: "文部科学省「食品成分データベース はちみつ」",
    href: "https://fooddb.mext.go.jp/details/details.pl?ITEM_NO=3_03022_7",
  },
  {
    label: "厚生労働省「令和8年 STOP！熱中症 クールワークキャンペーン」",
    href: "https://www.mhlw.go.jp/stf/coolwork_2026.html",
  },
  {
    label: "全国清涼飲料連合会「熱中症対策 表示ガイドライン」",
    href: "https://j-sda.or.jp/guideline/regulations_and_guidelines/heatstroke-guideline.php",
  },
  {
    label: "環境省「暑さ指数（WBGT）について」",
    href: "https://www.wbgt.env.go.jp/wbgt.php",
  },
  {
    label: "厚生労働省「ハチミツを与えるのは1歳を過ぎてから」",
    href: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000161461.html",
  },
] as const;

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

function ExtButton({
  href,
  children,
  tone = "amber",
}: {
  href: string;
  children: ReactNode;
  tone?: "amber" | "dark";
}) {
  const toneClass =
    tone === "dark"
      ? "bg-slate-900 hover:bg-slate-800"
      : "bg-amber-600 hover:bg-amber-700";
  return (
    <ExtLink
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-xl px-5 py-3 text-center text-[15px] font-extrabold text-white transition ${toneClass}`}
    >
      {children}
    </ExtLink>
  );
}

function CtaBox({
  heading,
  children,
}: {
  heading?: string;
  children: ReactNode;
}) {
  return (
    <aside className="my-8 rounded-2xl border-2 border-amber-300 bg-amber-50 p-5 md:p-6">
      {heading ? (
        <p className="mb-4 text-xl font-extrabold text-gray-900">{heading}</p>
      ) : null}
      <div className="flex flex-wrap gap-3">{children}</div>
    </aside>
  );
}

function ProductCard({
  id,
  priority = false,
}: {
  id: string;
  priority?: boolean;
}) {
  const product = byId[id];
  if (!product) return null;

  return (
    <article className="my-6 rounded-2xl border border-gray-300 bg-white p-5 shadow-sm md:p-6">
      <div className="grid gap-5 md:grid-cols-[200px_1fr] md:items-start">
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
          <Image
            src={PROD(product.imageFile)}
            alt={`${product.name}の商品画像`}
            width={400}
            height={400}
            priority={priority}
            className="h-auto w-full object-contain p-3"
          />
        </div>
        <div>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-950">
              {product.badge}
            </span>
            <span className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-900">
              {product.id}
            </span>
          </div>
          <h3 className="mt-3 text-[20px] font-extrabold leading-snug text-gray-900 md:text-[22px]">
            {product.name}
          </h3>
          <dl className="mt-4 space-y-2 text-[15px] leading-7 text-gray-900 md:text-[16px]">
            <div>
              <dt className="inline font-bold">この記事内で補う役割：</dt>
              <dd className="inline">{product.role}</dd>
            </div>
            <div>
              <dt className="inline font-bold">向く場面：</dt>
              <dd className="inline">{product.fit}</dd>
            </div>
          </dl>
          <p className="mt-3 rounded-lg border border-amber-300 bg-amber-50 p-3 text-[15px] font-medium leading-6 text-amber-950">
            <strong>購入前に商品ページで確認：</strong>
            {product.check}
          </p>
          <div className="mt-5">
            <ExtButton href={product.url}>商品ページで詳細を確認する →</ExtButton>
          </div>
        </div>
      </div>
    </article>
  );
}

function ProductTableCell({ id }: { id: string }) {
  const product = byId[id];
  if (!product) return <span>—</span>;
  return (
    <ExtLink
      href={product.url}
      className="group flex min-w-[16rem] items-start gap-3 no-underline"
    >
      <span className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
        <Image
          src={PROD(product.imageFile)}
          alt={`${product.name}の商品画像`}
          fill
          sizes="80px"
          className="object-contain p-1.5"
        />
      </span>
      <span className="min-w-0">
        <span className="block font-bold text-gray-900 group-hover:underline">
          {product.name}
        </span>
        <span className="mt-1 block text-[13px] leading-5 text-gray-900">
          {product.badge}
        </span>
      </span>
    </ExtLink>
  );
}

function SceneCard({
  step,
  title,
  children,
}: {
  step: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-gray-300 bg-white p-5 shadow-sm">
      <p className="text-sm font-extrabold text-amber-800">{step}</p>
      <h3 className="mt-1 text-xl font-extrabold text-gray-900">{title}</h3>
      <div className="mt-3 space-y-3 text-[16px] leading-[1.9] text-gray-900">
        {children}
      </div>
    </div>
  );
}

export default function Page() {
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
              水分・塩分補給 / はちみつ水 / 2026年8月9日更新
            </div>
            <h1 className={cls.h1}>{ARTICLE_TITLE}</h1>
            <P>
              暑い日に「はちみつ水を飲むといい」「はちみつレモンは熱中症対策になる」と聞いたことがある方もいるでしょう。甘くて飲みやすく、家庭でも簡単に用意できるため、スポーツドリンクの代わりを探しているときにも候補に挙がりやすい飲み物です。
            </P>
            <P>
              ただ、熱中症対策として考えるなら、
              <Mark>はちみつに何が入っているか</Mark>と、
              <Mark>暑い環境で身体から何が失われるか</Mark>
              を分けて考える必要があります。
            </P>
            <P>
              文部科学省の食品成分データベースでは、はちみつ100gに炭水化物
              <Mark>81.9g</Mark>
              が含まれる一方、ナトリウムは
              <Mark>2mg</Mark>
              です。つまり、はちみつは糖質を多く含む食品ですが、大量に汗をかいたときの塩分補給を単独で担う食品とは考えにくい組成です。
            </P>
            <Figure
              src={IMG("honey-heatstroke-worksite-hero.jpg")}
              alt="暑い作業現場の休憩所ではちみつ入り飲料と水分塩分補給品を確認するイメージ"
              priority
            />
          </header>

          <section className="my-8 rounded-2xl border-2 border-gray-900 bg-amber-50 p-5 md:p-6">
            <h2 className="text-2xl font-black text-gray-900 sm:text-3xl">
              先に結論
            </h2>
            <ul className={cls.list}>
              <li>
                はちみつは糖質を多く含むが、ナトリウムは100g当たり
                <Mark>2mg</Mark>と少ない
              </li>
              <li>
                はちみつ水は「飲みやすくする」「糖質を含む飲み物にする」方法の一つだが、大量発汗時の塩分補給は別に考える
              </li>
              <li>
                塩を加えればナトリウムは補えるが、自己流の自作飲料と市販の熱中症対策向け飲料・経口補水液は同じではない
              </li>
              <li>
                暑い現場では、飲む対策だけでなく、プレクーリング・身体冷却・環境管理も必要
              </li>
            </ul>
            <div className="mt-5">
              <ExtButton href={ctas.hydration.url}>
                {ctas.hydration.label}
              </ExtButton>
            </div>
          </section>

          <H2 id="answer">はちみつは熱中症対策になる？</H2>
          <P>
            答えを一言でまとめるなら、
            <Mark>
              はちみつは熱中症対策の一部に取り入れることはできますが、はちみつだけで熱中症対策が完結するわけではありません。
            </Mark>
          </P>
          <P>
            暑い時期は汗をかき、水分だけでなく塩分も失います。厚生労働省は2026年の職場向け熱中症対策でも、WBGTの把握や重篤化防止体制とあわせ、熱中症を体内の水分・塩分バランスが崩れることなどによって生じる障害として説明しています。
          </P>
          <P>
            一方、はちみつは糖質を多く含む食品です。食欲が落ちているときや、暑い日の飲み物に少し甘みを付けたいときには取り入れやすいでしょう。
          </P>
          <P>
            問題は、「はちみつにはミネラルも含まれる」という説明だけを見て、
            <Mark>汗で失う塩分まで十分に補えると思ってしまうこと</Mark>
            です。
          </P>

          <H3>数字で見るとはっきりする</H3>
          <P>
            文部科学省の日本食品標準成分表では、はちみつ100g当たりの主な成分は次のようになっています。
          </P>
          <div className="my-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {nutrientCards.map(([value, label]) => (
              <div
                key={label}
                className="rounded-2xl border border-gray-300 bg-white p-5 shadow-sm"
              >
                <p className="text-3xl font-black text-amber-800">{value}</p>
                <p className="mt-2 text-sm font-bold leading-6 text-gray-900">
                  {label}
                </p>
              </div>
            ))}
          </div>
          <P>
            対して、全国清涼飲料連合会の「熱中症対策」表示ガイドラインでは、熱中症対策に適した清涼飲料水のナトリウム濃度の目安として
            <Mark>100ml当たり40～80mg</Mark>
            が示されています。
          </P>
          <P>
            食品100gと飲料100mlなので単純な同量比較はできませんが、少なくとも「はちみつ自体がナトリウムを多く含む食品ではない」ことは分かります。
          </P>

          <H2 id="can-cannot">はちみつでできること、できないこと</H2>
          <Figure
            src={IMG("honey-water-salt-role-comparison.jpg")}
            alt="はちみつ水と塩分補給を別の役割として考えるイメージ"
          />

          <H3>できること：糖質を含む食品として取り入れる</H3>
          <P>
            はちみつは炭水化物を多く含みます。朝食や休憩時の食品、飲み物の甘味として取り入れること自体は不自然ではありません。
          </P>
          <P>
            暑い時期に食欲が落ちて固形物を食べにくいとき、はちみつをヨーグルトや飲み物に少量使うという方法もあります。
          </P>
          <P>
            ただし、これは
            <Mark>栄養や嗜好の話</Mark>
            です。「はちみつを摂れば熱中症を予防できる」という意味ではありません。
          </P>

          <H3>できないこと：大量発汗時の塩分補給を単独で担う</H3>
          <P>
            はちみつ100gのナトリウムは
            <Mark>2mg</Mark>
            です。
          </P>
          <P>
            そのため、炎天下の工事、屋外警備、倉庫の荷役、工場内の高温作業など、長時間にわたって汗をかく環境では、はちみつだけを塩分補給源として考えるのは適切ではありません。
          </P>
          <P>
            こうした場面では、水分に加えて塩分を補える飲料や食品を準備しておいた方が管理しやすくなります。
          </P>

          <ProductCard id="1179030665" priority />

          <H2 id="drink-types">はちみつ水・はちみつレモン・塩入りはどう違う？</H2>
          <P>
            検索している方が最も迷いやすいのがここです。「はちみつ水」という同じ名前でも、はちみつだけを水に溶かしたものと、塩やレモンを加えたものでは役割が異なります。
          </P>

          <H3>はちみつ水</H3>
          <P>水＋はちみつの組み合わせです。</P>
          <P>
            水分と糖質を一緒に摂れる一方、はちみつ自体のナトリウム量は少ないため、
            <Mark>
              大量発汗時の塩分補給までこれ一つで済ませるものではありません。
            </Mark>
          </P>
          <P>
            普段の水が飲みにくい人が、味を付けて飲みやすくする程度の位置づけで考えると理解しやすいでしょう。
          </P>

          <H3>はちみつレモン</H3>
          <P>
            レモンを加えると酸味が加わり、暑い時期でも飲みやすく感じる人がいます。
          </P>
          <P>
            ただし、レモンを入れたからといって、汗で失ったナトリウムを十分に補える飲み物になるわけではありません。「さっぱりして飲みやすい」と「熱中症対策に必要な成分が足りている」は別の話です。
          </P>

          <H3>塩を加えたはちみつ水</H3>
          <P>
            塩を加えれば、はちみつ水だけの場合よりナトリウムを補うことができます。
          </P>
          <P>
            ただし、ここで注意したいのが濃度です。家庭で自作する飲み物は、はちみつや塩の量、使用するスプーン、作る水量によって濃度が変わります。
          </P>
          <P>
            仕事で複数人に配る場合は特に、毎回配合が変わる自作飲料より、
            <Mark>
              栄養成分や使用方法を確認できる市販品の方が標準化しやすい
            </Mark>
            という利点があります。
          </P>

          <H3>市販の熱中症対策向け飲料・補給品</H3>
          <P>
            全国清涼飲料連合会では、「熱中症対策」の表示に用いる飲料の目安として100ml当たりナトリウム40～80mgを示しています。汗の量が多い作業や、法人での一括支給では、表示を見て選べる飲料や補給品の方が管理しやすいでしょう。
          </P>

          <H2 id="four-compare">4種類を比較すると、はちみつの位置づけが分かる</H2>
          <div className="my-6 overflow-x-auto rounded-2xl border border-gray-300">
            <table className={`min-w-[760px] ${cls.table}`}>
              <thead>
                <tr>
                  <th className={cls.th}>選択肢</th>
                  <th className={cls.th}>水分</th>
                  <th className={cls.th}>糖質</th>
                  <th className={cls.th}>塩分を管理しやすい</th>
                  <th className={cls.th}>向きやすい場面</th>
                </tr>
              </thead>
              <tbody>
                {drinkCompare.map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell) => (
                      <td key={`${row[0]}-${cell}`} className={cls.td}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Figure
            src={IMG("heat-hydration-drink-options.jpg")}
            alt="水・はちみつ水・塩入り飲料・市販補給飲料を比較するイメージ"
          />
          <P>
            この表で大切なのは、どれか一つを「最強」に決めることではありません。日常的な水分補給と、炎天下で何時間も作業したときでは必要な対策が違います。
          </P>

          <H2 id="three-scenes">3つの場面で判断する：はちみつでよいとき、切り替えるとき</H2>
          <div className="my-6 grid gap-4">
            <SceneCard step="場面1" title="作業前や普段の休憩">
              <p>
                体調に問題がなく、まだ大量に汗をかいていない段階なら、はちみつを食品や飲み物の甘味として取り入れる余地があります。
              </p>
              <p>
                ただし、のどが渇くまで待つのではなく、水分はこまめに摂ることが基本です。
              </p>
            </SceneCard>
            <SceneCard step="場面2" title="大量に汗をかいている作業中">
              <p>
                ここからは、はちみつより
                <Mark>水分・塩分をどう確実に補うか</Mark>
                を優先します。
              </p>
              <p>
                塩タブレット、塩ジェル、梅干しなどを水分と組み合わせる方法や、成分が確認できる飲料を用意する方が現場運用には向きます。
              </p>
            </SceneCard>
            <SceneCard step="場面3" title="めまい・吐き気・頭痛・異常な倦怠感などがある">
              <p>
                ここは「はちみつを飲んで様子を見る」場面ではありません。
              </p>
              <p>
                作業を続けず、涼しい場所へ移動し、身体を冷やし、職場で定めた連絡・対応手順に従います。自力で水分が飲めない、意識がおかしいなどの場合には緊急対応が必要です。
              </p>
            </SceneCard>
          </div>

          <ProductCard id="1179030522" />

          <H3>携帯しやすい塩分補給品も使い分ける</H3>
          <Figure
            src={IMG("worksite-hydration-salt-supplies.jpg")}
            alt="休憩所に水分塩分補給用品を分散配置したイメージ"
          />
          <div className="my-6 overflow-x-auto rounded-2xl border border-gray-300">
            <table className={`min-w-[640px] ${cls.table}`}>
              <thead>
                <tr>
                  <th className={cls.th}>タイプ</th>
                  <th className={cls.th}>特徴</th>
                  <th className={cls.th}>法人支給での使い方</th>
                </tr>
              </thead>
              <tbody>
                {portableCompare.map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell) => (
                      <td key={`${row[0]}-${cell}`} className={cls.td}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <ProductCard id="1179030519" />
          <ProductCard id="1179030588" />

          <CtaBox heading="水分・塩分補給をまとめて確認したい方へ">
            <ExtButton href={ctas.hydration.url}>{ctas.hydration.label}</ExtButton>
          </CtaBox>

          <aside className="my-8 rounded-2xl border border-red-300 bg-red-50 p-5 text-red-950">
            <p className="mb-2 text-lg font-extrabold">
              体調異常時は、飲み物の種類より作業離脱と冷却を優先
            </p>
            <p className={cls.bodySm}>
              熱中症対策で一番避けたいのは、飲み物の種類にこだわるあまり、作業離脱や冷却が遅れることです。
            </p>
          </aside>
          <Figure
            src={IMG("heat-illness-stop-work-cooling-response.jpg")}
            alt="体調不良者を作業から離脱させ日陰で冷却する訓練イメージ"
          />

          <H2 id="standardize">はちみつを用意するより先に、現場で標準化したいもの</H2>
          <P>
            個人の朝食や普段の飲み物なら、はちみつをどう使うかは好みで決められます。一方、企業が熱中症対策を行うときは、「人によって違う自作レシピ」に頼らない方が運用しやすくなります。
          </P>
          <H3>水分・塩分補給品を定位置化する</H3>
          <P>
            休憩所や車両に、飲料だけでなくタブレット・ジェル・梅系食品など複数の選択肢を用意すると、好みが違う作業者にも対応しやすくなります。
          </P>
          <ul className={cls.list}>
            <li>
              <strong>各自：</strong>個包装タブレット・塩ジェル
            </li>
            <li>
              <strong>車両：</strong>水＋補給品
            </li>
            <li>
              <strong>休憩所：</strong>飲料・塩飴・梅系食品
            </li>
            <li>
              <strong>冷蔵設備：</strong>プレクーリング用品
            </li>
          </ul>

          <H2 id="precooling">「飲んでから冷やす」ではなく、作業前から体を冷やす</H2>
          <P>
            暑熱環境が厳しい日は、水分・塩分補給だけで身体への熱負荷を下げることはできません。そこで組み合わせたいのが、作業前や休憩時の
            <Mark>プレクーリング</Mark>
            です。
          </P>
          <Figure
            src={IMG("worksite-precooling-ice-slurry.jpg")}
            alt="作業前にアイススラリーや冷たい食品でプレクーリングするイメージ"
          />
          <P>
            はちみつ水とは役割が異なり、こちらは
            <Mark>
              冷たいものを摂る・用意することで暑熱対策を補助する
            </Mark>
            商品群です。
          </P>
          <ProductCard id="1179040216" />
          <ProductCard id="1179031013" />
          <CtaBox>
            <ExtButton href={ctas.precooling.url}>{ctas.precooling.label}</ExtButton>
          </CtaBox>

          <H2 id="body-cooling">身体を直接冷やす用品も組み合わせる</H2>
          <P>
            炎天下や高温環境では、「何を飲むか」だけを細かく考えても、身体への熱負荷が高いままでは十分ではありません。
          </P>
          <Figure
            src={IMG("cooling-vest-shaded-rest-area.jpg")}
            alt="冷却ベストと日陰の休憩所を組み合わせた暑熱対策のイメージ"
          />
          <ProductCard id="1124801023" />
          <ProductCard id="1179038027" />
          <P>
            「水分・塩分補給」「身体冷却」を同じ一つの対策だと思わず、別々に準備することで、現場の対策を組み立てやすくなります。
          </P>
          <CtaBox>
            <ExtButton href={ctas.heatGear.url}>{ctas.heatGear.label}</ExtButton>
          </CtaBox>

          <H2 id="environment">休憩場所そのものが暑ければ、飲み物だけでは追いつかない</H2>
          <P>
            休憩に入っても、日なたや高温の場所にいるままでは身体が冷えにくくなります。現場では次のような環境面も確認します。
          </P>
          <ul className={cls.list}>
            <li>日陰を確保できるか</li>
            <li>テントや休憩所があるか</li>
            <li>スポットクーラーを置けるか</li>
            <li>冷却用品を冷やす設備があるか</li>
            <li>WBGTや現場ルールに応じて作業を止められるか</li>
          </ul>
          <ProductCard id="1153010301" />
          <CtaBox heading="環境面の対策もあわせて確認">
            <ExtButton href={ctas.environment.url}>
              {ctas.environment.label}
            </ExtButton>
            <ExtButton href={ctas.spotCooler.url} tone="dark">
              {ctas.spotCooler.label}
            </ExtButton>
          </CtaBox>

          <H2 id="stockpile">法人で「はちみつ以外」も含めて備蓄するときの考え方</H2>
          <P>
            熱中症対策用品は、一種類を大量購入するより、役割ごとに分けた方が運用しやすくなります。
          </P>
          <div className="my-6 overflow-x-auto rounded-2xl border border-gray-300">
            <table className={`min-w-[720px] ${cls.table}`}>
              <thead>
                <tr>
                  <th className={cls.th}>役割</th>
                  <th className={cls.th}>備えるものの例</th>
                  <th className={cls.th}>商品例</th>
                </tr>
              </thead>
              <tbody>
                {stockpileCompare.map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell) => (
                      <td key={`${row[0]}-${cell}`} className={cls.td}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="my-6 overflow-x-auto rounded-2xl border border-gray-300">
            <table className={`min-w-[640px] ${cls.table}`}>
              <thead>
                <tr>
                  <th className={cls.th}>優先して確認したい商品</th>
                  <th className={cls.th}>役割</th>
                </tr>
              </thead>
              <tbody>
                {(
                  [
                    "1179030665",
                    "1179030522",
                    "1179040216",
                    "1124801023",
                    "1153010301",
                  ] as const
                ).map((id) => {
                  const product = byId[id];
                  return (
                    <tr key={id}>
                      <td className={cls.td}>
                        <ProductTableCell id={id} />
                      </td>
                      <td className={cls.td}>{product?.badge}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <P>
            この表を基準に、「飲み物を買ったから対策完了」ではなく、抜けている役割を確認してください。
          </P>

          <H2 id="myths">よくある勘違い</H2>
          <H3>「はちみつはミネラルが豊富だから塩分補給になる」</H3>
          <P>
            はちみつにはカリウムなども含まれますが、文部科学省の成分表ではナトリウムは100g当たり2mgです。「ミネラルが含まれる」という言葉だけで、汗で失うナトリウムの補給源と判断しない方が安全です。
          </P>
          <H3>「はちみつレモンならスポーツドリンクと同じ」</H3>
          <P>
            レモンを加えても、飲料中のナトリウム量が自動的に適切になるわけではありません。味が似ていることと、成分が同じことは別です。
          </P>
          <H3>「塩を多めに入れれば安心」</H3>
          <P>
            塩分管理が必要な人もいます。高血圧や腎臓病などがある場合、熱中症対策だからと自己判断で塩分を増やすのは避け、医師等の指示を優先してください。
          </P>
          <H3>「体調が悪くても、甘いものを飲めば作業を続けられる」</H3>
          <P>
            めまい、吐き気、頭痛、意識の異常などが出ている場合、飲み物だけで作業を継続する判断は危険です。
          </P>

          <H2 id="safety">はちみつを使うときの安全上の注意</H2>
          <P>
            厚生労働省は、
            <Mark>
              1歳未満の乳児にははちみつや、はちみつ入り飲料・食品を与えない
            </Mark>
            よう注意喚起しています。乳児ボツリヌス症のリスクがあるためです。
          </P>
          <P>
            大人の作業者向けの記事では直接関係しないことが多いものの、家庭用にはちみつ水を作る場合には覚えておきたい点です。
          </P>

          <H2 id="checklist">法人の熱中症対策チェックリスト</H2>
          <ul className="my-6 space-y-3">
            {checkItems.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-gray-300 bg-white px-4 py-3 text-[16px] leading-7 text-gray-900"
              >
                <span
                  className="mt-1 inline-block h-5 w-5 shrink-0 rounded border-2 border-gray-900"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <H2 id="faq">FAQ</H2>
          <div className="my-6 space-y-4">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="rounded-2xl border border-gray-300 bg-white p-5 open:shadow-sm"
              >
                <summary className="cursor-pointer list-none text-xl font-extrabold text-gray-900">
                  {item.q}
                </summary>
                <p className="mt-3 text-[16px] leading-[1.9] text-gray-900">
                  {item.a}
                </p>
              </details>
            ))}
          </div>

          <H2 id="summary">
            まとめ：はちみつは「熱中症対策の主役」ではなく、役割を理解して使う
          </H2>
          <P>
            はちみつは糖質を多く含み、飲み物に甘みを付けたり、暑い時期の食品として取り入れたりすることはできます。
          </P>
          <P>
            一方で、はちみつ100g当たりのナトリウムは
            <Mark>2mg</Mark>
            です。そのため、汗で水分・塩分を失う暑い現場では、
            <Mark>はちみつを摂る＝熱中症対策は十分</Mark>
            とは考えないことが大切です。
          </P>
          <P>
            水分・塩分補給を必要な形で準備し、暑熱環境が厳しい場合にはプレクーリング、冷却ベスト、空調ウェア、日陰、スポットクーラーなどを組み合わせます。はちみつの役割を過大評価しないことが、結果としてより実用的な熱中症対策につながります。
          </P>

          <CtaBox heading="現場の対策をまとめて見直す">
            <ExtButton href={ctas.hydration.url}>{ctas.hydration.label}</ExtButton>
            <ExtButton href={ctas.precooling.url}>{ctas.precooling.label}</ExtButton>
            <ExtButton href={ctas.heatGear.url}>{ctas.heatGear.label}</ExtButton>
            <ExtButton href={ctas.environment.url}>
              {ctas.environment.label}
            </ExtButton>
            <ExtButton href={ctas.spotCooler.url} tone="dark">
              {ctas.spotCooler.label}
            </ExtButton>
          </CtaBox>

          <H2 id="related">関連記事</H2>
          <ul className="my-6 space-y-3">
            {relatedArticles.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[17px] font-bold text-gray-900 underline underline-offset-4"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <H2 id="references">参考情報</H2>
          <ul className={cls.list}>
            {refs.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline underline-offset-4"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
