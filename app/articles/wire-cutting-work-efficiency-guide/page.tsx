import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";
import productData from "./product-data.json";

const SLUG = "wire-cutting-work-efficiency-guide";
const SITE_URL = "https://www.sagyou-navi.com";
const CANONICAL = `${SITE_URL}/articles/${SLUG}`;
const ARTICLE_TITLE =
  "電線の切断作業を効率化するには？太いケーブルで手が疲れる原因と工具の見直し方【2026年版】";
const SHORT_TITLE = "電線の切断作業を効率化するには？";
const DESCRIPTION =
  "太い電線やケーブルの切断で手が疲れる、時間がかかる、工具の持ち替えが多い現場向けに、手動・長柄・ラチェット・充電式・コード式をどう使い分けるかを解説。切断回数、線種・サイズ、作業姿勢、電源・バッテリ管理から省力化の判断基準を整理します。";
const PUBLISHED = "2026-08-17";
const HERO = "wire-cutting-efficiency-hero.jpg";
const IMG = (file: string) => `/images/articles/${SLUG}/${file}`;
const PROD = (file: string) => `/images/articles/${SLUG}/products/${file}`;
const EXT_REL = "nofollow sponsored noopener noreferrer";

const cta = {
  handTools: productData.cta.hand_tools.tracked_url,
  trusco: productData.cta.trusco.tracked_url,
  workbench: productData.cta.workbench.tracked_url,
  toolbox: productData.cta.toolbox.tracked_url,
  cart: productData.cta.cart.tracked_url,
  handPress: productData.cta.hand_press.tracked_url,
};

type CatalogProduct = (typeof productData.products)[number];

const featuredMeta: Record<
  string,
  { method: string; displayName: string; imageFile: string }
> = {
  "9512165": {
    method: "コンパクト手動",
    displayName: "KNIPEX ケーブルカッター 9512165",
    imageFile: "ta034000-9512165.jpg",
  },
  "600500": {
    method: "長柄手動",
    displayName: "フジ矢 アルミケーブルカッター 600-500",
    imageFile: "ta032767-600500.jpg",
  },
  frc32a: {
    method: "ラチェット",
    displayName: "フジ矢 ケーブルカッター ラチェットタイプ FRC-32A",
    imageFile: "ta036313-frc32a.jpg",
  },
  s7k50m: {
    method: "充電式",
    displayName: "マクセルイズミ 充電式ケーブルカッター S7-K50M",
    imageFile: "ta039111-s7k50m.jpg",
  },
  ez45a7xb: {
    method: "充電式",
    displayName: "Panasonic デュアル 充電ケーブルカッター EZ45A7XB",
    imageFile: "ta036145-ez45a7xb.jpg",
  },
  hpc65b: {
    method: "コード式（AC100V）",
    displayName: "DAIA ケーブルカッター AC100Vコード式 HPC65B",
    imageFile: "ta041396-hpc65b.jpg",
  },
};

function findProduct(key: string): CatalogProduct | undefined {
  const needle = key.toLowerCase();
  return productData.products.find(
    (p) =>
      p.image_file.toLowerCase().includes(needle) ||
      p.product_url.toLowerCase().includes(needle) ||
      p.name_raw.toLowerCase().replace(/[-\s]/g, "").includes(needle)
  );
}

const featuredKeys = productData.featured_product_keys as string[];

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
        url: `${SITE_URL}${IMG(HERO)}`,
        width: 1600,
        height: 900,
        alt: "電気工事の作業台で手動・ラチェット・充電式の切断方法を比較するイメージ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SHORT_TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}${IMG(HERO)}`],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: ARTICLE_TITLE,
  description: DESCRIPTION,
  mainEntityOfPage: CANONICAL,
  image: [`${SITE_URL}${IMG(HERO)}`],
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
    { "@type": "ListItem", position: 3, name: SHORT_TITLE, item: CANONICAL },
  ],
};

const methodRows = [
  {
    method: "コンパクト手動",
    fit: "小径・少量・携帯作業",
    strength: "軽い、すぐ使える、充電不要",
    check: "太物の反復には負担が増えやすい",
  },
  {
    method: "長柄手動",
    fit: "電源なしで太めを切る",
    strength: "てこを使える",
    check: "全長、振り幅、狭所",
  },
  {
    method: "ラチェット",
    fit: "太物・長柄を振りづらい場所",
    strength: "段階的に切り進めやすい",
    check: "切断回数、工具全長、解除操作",
  },
  {
    method: "充電式",
    fit: "太物の反復切断",
    strength: "握力負担と反復動作を減らしやすい",
    check: "バッテリ、重量、本体/セット、戻り機構",
  },
  {
    method: "AC100V等",
    fit: "定置作業・電源確保可能",
    strength: "バッテリ残量管理が不要",
    check: "コード取り回し、設置環境、能力",
  },
] as const;

const reviseSigns = [
  {
    title: "両手で強く握る作業が常態化している",
    body: "「切れる」のと「無理なく繰り返せる」のは別です。対象線がいつも工具能力の上限付近にあり、毎回大きな力をかけているなら、ひとつ上の方式を比較するタイミングです。",
  },
  {
    title: "1日の切断本数が増えた",
    body: "以前は数本だった作業が、案件や生産量の変化で数十本へ増えているなら、過去の工具選定が現在の工程に合わなくなっている可能性があります。工具の更新は「壊れたとき」だけでなく、仕事量が変わったときにも検討できます。",
  },
  {
    title: "一度で切れず、何度も握り直している",
    body: "ラチェット式なら、ハンドルを繰り返し操作して段階的に刃を進めるものがあります。充電式ならモーターで刃を動かします。単純に「手動か電動か」ではなく、現在どの動作に時間と負担がかかっているかを見ます。",
  },
  {
    title: "長柄工具のために場所を移動している",
    body: "広い床面では長柄の利点が出ても、狭い機械室や盤前では取り回しが課題になります。工具全長と必要なハンドル開閉スペースを、実際の作業場所で確認します。",
  },
  {
    title: "何本もの工具を持ち替えている",
    body: "小径用、太径用、狭所用などを持ち替えること自体は悪くありません。ただし、持ち替えの頻度が高く、毎回探す状態なら、工具構成と定位置を見直す価値があります。",
  },
  {
    title: "作業者ごとに工具選定がバラバラ",
    body: "Aさんは長柄、Bさんはラチェット、Cさんはニッパーで無理に切る、といった状態は、品質と安全だけでなく作業時間のばらつきにもつながります。法人であれば「この線種・サイズ・作業条件ならこの工具」という標準を作ると、新人への教育もしやすくなります。",
  },
] as const;

const checkItems = [
  "現場で扱う主な線種を洗い出した",
  "sqと外径を確認した",
  "1日あたりのおおよその切断本数を把握した",
  "現行工具で大きな力や握り直しが発生していないか確認した",
  "狭所・高所・床・作業台など作業姿勢を分類した",
  "最大切断能力に余裕がある機種を候補にした",
  "対象外材質を作業者へ共有した",
  "充電式はバッテリ共通化を確認した",
  "本体のみ／セットを確認した",
  "替刃・点検・保守方法を決めた",
  "工具の定位置を決めた",
  "切断前の停電・検電・作業手順を確認した",
] as const;

const faqs = [
  {
    q: "ニッパーとケーブルカッターはどう使い分けますか？",
    a: "まずメーカーが示す対象材質・切断能力で判断します。太い電力ケーブルを、能力外のニッパーで無理に切る選び方は避けてください。ケーブルカッターでも線種ごとに能力が異なるため、型番の仕様確認が必要です。",
  },
  {
    q: "ラチェット式はどんなときに向いていますか？",
    a: "太物を手動で切りたい一方、長柄の大きな開閉スペースを取りにくい場面で比較しやすい方式です。ただし、切断本数が非常に多い場合は、ラチェット操作の反復と充電式を比べます。",
  },
  {
    q: "充電式へ替える目安はありますか？",
    a: "「太いから」だけでなく、1日の切断本数と作業者の負担を見ます。同じ工程を繰り返し、握り直しや刃戻しに時間がかかっているなら比較価値があります。逆に小径を数本だけなら、手動の軽さが有利です。",
  },
  {
    q: "最大切断能力と同じサイズなら問題なく使えますか？",
    a: "最大能力はメーカーが示す使用範囲を確認するためのものです。実際には線種、構造、作業頻度、工具の状態も確認します。常用する線が上限付近なら、作業負担まで含めて余裕のある候補と比較してください。",
  },
  {
    q: "1000V絶縁ケーブルカッターなら活線を切断できますか？",
    a: "「1000V絶縁」という工具仕様だけを根拠に、活線切断してよいと判断しないでください。厚生労働省の災害防止事例では、電気工事は停電状態で行うことが原則とされ、作業前の検電による確認も示されています。現場の安全手順、資格、法令、取扱説明書を優先します。",
  },
  {
    q: "工具を替えても作業時間が縮まらないときは？",
    a: "材料の置き場、測定・マーキング、工具の定位置、作業台、運搬まで確認してください。切断そのものが数秒短くなっても、前後で工具を探したり材料を運んだりしていれば工程全体は変わりにくくなります。",
  },
] as const;

const relatedArticles = [
  {
    href: "/articles/cable-cutter-selection",
    label: "ケーブルカッターの選び方｜充電式・油圧式・ラチェット式と圧着工具の使い分け",
  },
  {
    href: "/articles/cable-cutter-cutting-capacity",
    label: "ケーブルカッターの切断能力の見方｜sq・φ・銅線専用・CVT対応を確認",
  },
  {
    href: "/articles/electrical-crimping-work-efficiency-guide",
    label: "電線の圧着作業を効率化するには？",
  },
  {
    href: "/articles/manual-press-fit-work-efficiency-guide",
    label: "圧入の手作業を効率化するには？ハンドプレスの選び方",
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
    <figure className="my-8 overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
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
  tone?: "amber" | "dark" | "rose";
}) {
  const toneClass =
    tone === "dark"
      ? "bg-slate-900 hover:bg-slate-800"
      : tone === "rose"
        ? "bg-rose-700 hover:bg-rose-800"
        : "bg-amber-600 hover:bg-amber-700";
  return (
    <ExtLink
      href={href}
      className={`inline-flex min-h-12 w-full items-center justify-center rounded-lg px-5 py-3 text-center text-[15px] font-extrabold text-white transition sm:w-auto ${toneClass}`}
    >
      {children}
    </ExtLink>
  );
}

function IntroCta() {
  return (
    <aside className="my-8 rounded-xl border-2 border-gray-900 bg-gray-50 p-5 md:p-6">
      <p className={`${cls.body} mb-4`}>
        切断工具だけでなく、手作業工具・TRUSCO中山掲載商品から現場に合う候補を比較できます。
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <ExtButton href={cta.handTools}>手作業工具一覧を見る →</ExtButton>
        <ExtButton href={cta.trusco} tone="rose">
          TRUSCO掲載商品を見る →
        </ExtButton>
      </div>
    </aside>
  );
}

function ProductCard({ productKey }: { productKey: string }) {
  const product = findProduct(productKey);
  const meta = featuredMeta[productKey];
  if (!product || !product.verified || !meta) return null;

  const verified = product.verified;

  return (
    <article className="border border-gray-300 bg-white p-5 md:p-6">
      <div className="grid gap-5 md:grid-cols-[200px_1fr] md:items-start">
        <div className="overflow-hidden border border-gray-200 bg-gray-50">
          <Image
            src={PROD(meta.imageFile)}
            alt={`${meta.displayName}の商品画像`}
            width={400}
            height={400}
            className="h-auto w-full object-contain p-4"
          />
        </div>
        <div>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex bg-amber-100 px-3 py-1 text-xs font-bold text-amber-950">
              {meta.method}
            </span>
            <span className="inline-flex bg-gray-100 px-3 py-1 text-xs font-bold text-gray-900">
              {verified.role}
            </span>
          </div>
          <h3 className="mt-3 text-[20px] font-extrabold leading-snug text-gray-900 md:text-[22px]">
            {meta.displayName}
          </h3>
          <p className="mt-3 text-[16px] leading-7 text-gray-900">
            <strong>向く現場：</strong>
            {verified.fit}
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-[15px] leading-7 text-gray-900">
            {verified.verified_specs.map((spec) => (
              <li key={spec}>{spec}</li>
            ))}
          </ul>
          <p className="mt-3 border border-amber-300 bg-amber-50 p-3 text-[15px] font-medium leading-6 text-amber-950">
            <strong>向かない／注意：</strong>
            {verified.avoid}
          </p>
          <div className="mt-5">
            <ExtButton href={product.tracked_url}>商品ページを見る →</ExtButton>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Page() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <SiteHeader />
      <main className="bg-white">
        <article className="mx-auto max-w-[850px] px-4 pb-16 pt-8 sm:px-6">
          <nav className={`${cls.meta} mb-6`} aria-label="パンくずリスト">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="underline-offset-2 hover:underline">
                  ホーム
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href="/articles"
                  className="underline-offset-2 hover:underline"
                >
                  記事一覧
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="font-bold text-gray-900">{SHORT_TITLE}</li>
            </ol>
          </nav>

          <p className="mb-3 text-sm font-bold tracking-wide text-amber-800">
            電気工事・設備保全の作業改善
          </p>
          <h1 className={cls.h1}>{ARTICLE_TITLE}</h1>
          <p className={cls.meta}>
            公開日：{PUBLISHED.replace(/-/g, "/")} ／ 読了目安：約22分
          </p>

          <Figure
            src={IMG(HERO)}
            alt="電気工事の作業台で手動・ラチェット・充電式の切断方法を比較するイメージ"
            priority
          />

          <P>
            電線やケーブルを切る作業は、1回だけなら大きな負担に見えないことがあります。ところが、盤の組立や設備工事、電気工事で同じ作業を何度も繰り返すと、「切れる工具を持っている」だけでは足りなくなります。
          </P>
          <P>
            太いケーブルを切るたびに両手へ力を入れる。何度も握り直す。長いハンドルを振れる場所まで移動する。工具を取りに戻る。切断後に刃を戻す。こうした数秒〜数十秒の積み重ねが、1日の作業時間と疲労に効いてきます。
          </P>
          <P>
            切断工具を見直すときは、最大切断能力だけで決めるのではなく、
            <Mark>1日の切断回数、普段扱う線の太さ、作業姿勢、工具を運用する環境</Mark>
            まで一緒に見るのが実務的です。
          </P>

          <aside className="my-8 border-l-4 border-amber-500 bg-amber-50 p-5">
            <p className="mb-3 text-lg font-black text-gray-900">安全上の注意</p>
            <p className={`${cls.bodySm} mb-4`}>
              ケーブル切断は、工具の選定だけで安全が確保できる作業ではありません。厚生労働省の労働災害事例でも、電気工事は停電状態で行うことを原則とし、作業前に検電して停電状態を確認する手順が示されています。絶縁ハンドルの工具であっても、「活線を切断してよい」という意味ではありません。現場の作業手順、資格、法令、メーカーの取扱説明書に従ってください。
            </p>
            <div className="relative aspect-video overflow-hidden border border-amber-200 bg-white">
              <Image
                src={IMG("electrical-cable-deenergized-safety-check.jpg")}
                alt="ケーブル切断前に停電状態を確認する安全作業イメージ"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 850px"
              />
            </div>
          </aside>

          <section className="my-8 rounded-xl border-2 border-gray-900 bg-gray-50 p-5 md:p-6">
            <h2 className="mb-4 text-2xl font-black tracking-wide text-gray-900 sm:text-3xl">
              先に確認したい4つのこと
            </h2>
            <ol className="space-y-4 text-[17px] leading-[1.95] text-gray-900">
              <li>
                <strong>1. 1日に何回切るか</strong>
                <br />
                小径を数回切るだけなら、軽くてすぐ使える手動工具のほうが合理的です。反対に、太物を何十回も繰り返す工程では、1回ごとの差が大きくなります。
              </li>
              <li>
                <strong>2. 普段扱う線が工具能力の上限にどれくらい近いか</strong>
                <br />
                最大切断能力は「その工具で扱える範囲」を判断するための重要な仕様です。ただし、毎回ほぼ上限の線を切る運用は、余裕のある工具を使う場合と作業感が同じとは限りません。
              </li>
              <li>
                <strong>3. どんな姿勢・場所で切るか</strong>
                <br />
                地上の広い場所、盤の前、狭いピット、高所、作業台上では、使いやすい全長や方式が変わります。長柄はてこの力を使いやすい一方、振り幅が必要です。
              </li>
              <li>
                <strong>4. 電源・バッテリ・替刃・保管を運用できるか</strong>
                <br />
                充電式は握力負担の軽減に有力ですが、充電・予備バッテリ・本体のみかセットか・替刃なども含めて考える必要があります。
              </li>
            </ol>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <ExtButton href={cta.handTools}>手作業工具一覧を見る →</ExtButton>
              <ExtButton href={cta.trusco} tone="rose">
                TRUSCO掲載商品を見る →
              </ExtButton>
            </div>
          </section>

          <H2 id="why-slow">
            電線切断が遅くなるのは「切れる・切れない」だけではない
          </H2>
          <Figure
            src={IMG("manual-cable-cutting-repetition-fatigue.jpg")}
            alt="太いケーブルを手動工具で繰り返し切断する作業イメージ"
          />
          <H3>両手に力を入れる時間が増えている</H3>
          <P>
            工具の能力範囲内でも、毎回大きな力を必要とするなら、切断本数が増えたときの負担は無視できません。
          </P>
          <P>
            特に、現場で「切断できているから問題ない」とされている作業は見落とされやすいところです。作業者が腕や肩の負担を感じ、少し休んでから次を切る。途中で握り位置を変える。こうした動きは、不良や停止のように目立たなくても工程を長くします。
          </P>

          <H3>長柄を使える場所まで移動している</H3>
          <P>
            長柄のケーブルカッターは、てこの原理を使いやすく、電源も不要です。一方で、工具そのものが長くなるため、狭い盤前や設備の間では十分にハンドルを開閉できないことがあります。
          </P>
          <P>
            「工具の能力は十分なのに、使う場所を選ぶ」という状態なら、ラチェット式や別方式を検討する余地があります。
          </P>

          <H3>工具を探す・持ち替える時間が多い</H3>
          <P>
            切断工具を省力化しても、毎回工具箱を探したり、ケーブルを床から持ち上げたり、切断後の材料を別の場所へ運んだりしていれば、工程全体は思ったほど短くなりません。
          </P>
          <P>
            切断工程は、工具だけでなく「材料を置く→測る→切る→次工程へ渡す」という一連の流れで見る必要があります。
          </P>

          <H3>1回の小さな差が反復で大きくなる</H3>
          <P>
            工具投資を考えるときは、「1回何秒短くなるか」だけでなく、
            <Mark>その作業を1日・1か月に何回繰り返すか</Mark>
            を見ると判断しやすくなります。
          </P>
          <P>
            たとえば、たまに太物を切るだけならラチェット式を常備するほうが扱いやすいかもしれません。一方、同じケーブルを連続で切る工程なら、トリガー操作、刃の戻り、次の線をセットするまでを含めたサイクルで比べる価値があります。
          </P>

          <H2 id="capacity-check">
            まず線種・sq・φ・メーカーの切断能力を照合する
          </H2>
          <P>
            省力化の前に外せないのが、対象線と工具仕様の照合です。「太そうだから大きなカッター」「銅線だから切れるだろう」といった選び方は避けます。メーカーによって、IV、CV、CVT、VVR、VCTなど対応線種の表記が異なり、同じ外径でも構造や材質が違います。
          </P>
          <ul className={cls.list}>
            <li>対象となる線種</li>
            <li>公称断面積（sq / mm²）</li>
            <li>外径（φ / mm）</li>
            <li>単芯・多芯の違い</li>
            <li>銅・アルミなど対象材質</li>
            <li>鉄線・ワイヤロープなどを切断してよいか</li>
            <li>メーカーが示す最大能力</li>
            <li>刃の交換条件</li>
          </ul>
          <P>
            切断能力そのものの読み方は、既存記事
            <Link
              href="/articles/cable-cutter-cutting-capacity"
              className="mx-1 font-bold underline underline-offset-2"
            >
              「ケーブルカッターの切断能力の見方｜sq・φ・銅線専用・CVT対応を確認」
            </Link>
            で詳しく整理しています。工具方式の基礎から選びたい場合は
            <Link
              href="/articles/cable-cutter-selection"
              className="mx-1 font-bold underline underline-offset-2"
            >
              「ケーブルカッターの選び方｜充電式・油圧式・ラチェット式と圧着工具の使い分け」
            </Link>
            を参照してください。このページでは、その仕様を確認した先にある
            <Mark>作業効率の改善</Mark>
            へ進みます。
          </P>

          <H2 id="six-signs">手動工具を見直したい6つのサイン</H2>
          {reviseSigns.map((item, index) => (
            <div key={item.title}>
              <H3>
                {index + 1}. {item.title}
              </H3>
              <P>{item.body}</P>
            </div>
          ))}

          <H2 id="method-compare">
            手動・長柄・ラチェット・充電式・コード式をどう使い分けるか
          </H2>
          <Figure
            src={IMG("cable-cutter-method-comparison.jpg")}
            alt="手動・長柄・ラチェット・充電式の作業方式を比較するイメージ"
          />
          <P>
            この表で重要なのは、優劣ではなく
            <Mark>作業量と環境で方式を変える</Mark>
            ことです。
          </P>
          <div className="my-6 -mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
            <table className={`${cls.table} min-w-[720px]`}>
              <thead>
                <tr>
                  <th className={cls.th}>方式</th>
                  <th className={cls.th}>向きやすい場面</th>
                  <th className={cls.th}>強み</th>
                  <th className={cls.th}>確認したい点</th>
                </tr>
              </thead>
              <tbody>
                {methodRows.map((row) => (
                  <tr key={row.method}>
                    <td className={`${cls.td} font-bold`}>{row.method}</td>
                    <td className={cls.td}>{row.fit}</td>
                    <td className={cls.td}>{row.strength}</td>
                    <td className={cls.td}>{row.check}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <P>
            小径を1日に数本しか切らない人が、重い充電工具を常に携帯する必要はありません。逆に、太物を大量に切る人が「手動で切れるから」という理由だけで同じ工具を使い続けると、省力化余地を見逃します。
          </P>

          <H2 id="manual-vs-power">
            手動のままでよい現場／電動化を検討したい現場
          </H2>
          <Figure
            src={IMG("cable-cutting-tight-space-clearance.jpg")}
            alt="狭い盤前で工具の取り回しスペースを確認するイメージ"
          />
          <H3>手動のままでよい可能性が高い</H3>
          <ul className={cls.list}>
            <li>主に小径</li>
            <li>1日の切断本数が少ない</li>
            <li>持ち歩く時間が長い</li>
            <li>電源や充電管理を増やしたくない</li>
            <li>現行工具で無理な姿勢や大きな力を必要としない</li>
          </ul>
          <H3>長柄・ラチェットを比較したい</H3>
          <ul className={cls.list}>
            <li>太い線が増えた</li>
            <li>コンパクト手動では力が必要</li>
            <li>電動工具を導入するほど本数は多くない</li>
            <li>電源なしで使いたい</li>
            <li>長柄を振れるかどうかが現場ごとに違う</li>
          </ul>
          <H3>充電式を検討したい</H3>
          <Figure
            src={IMG("cordless-cable-cutting-repetitive-work.jpg")}
            alt="充電式工具で太いケーブルの連続切断を行うイメージ"
          />
          <ul className={cls.list}>
            <li>太物を何度も切る</li>
            <li>握力負担を減らしたい</li>
            <li>同じ工程を繰り返している</li>
            <li>切断後の刃戻しも含めサイクル短縮したい</li>
            <li>既存のバッテリ資産を活かせる機種がある</li>
          </ul>
          <H3>コード式・定置設備まで検討したい</H3>
          <ul className={cls.list}>
            <li>一定場所で連続して切る</li>
            <li>電源を確保できる</li>
            <li>バッテリ交換・充電を減らしたい</li>
            <li>携帯性より定置作業の安定を優先する</li>
          </ul>
          <P>
            なお、工場で同じ長さの電線を大量に切断・加工する場合、手持ちケーブルカッターの比較だけでは改善幅に限界があります。数量や工程によっては、自動送線・計尺・切断設備など別カテゴリの設備投資を検討したほうがよいケースもあります。
          </P>

          <H2 id="featured-products">省力化の段階で見る代表6商品</H2>
          <P>
            ここでは「おすすめ順位」ではなく、
            <Mark>どの段階の作業改善に向くか</Mark>
            で代表商品を見ます。数値はメーカー公式等で確認できた範囲に限定し、購入前には必ず実際の線種・サイズと現行仕様を照合してください。
          </P>
          <div className="my-8 space-y-5">
            {featuredKeys.map((key) => (
              <ProductCard key={key} productKey={key} />
            ))}
          </div>
          <IntroCta />

          <H2 id="beyond-capacity">
            連続作業では「最大切断能力以外」の仕様が効く
          </H2>
          <H3>刃の戻り方</H3>
          <P>
            1回だけ使うと気にならない機構でも、何十回も繰り返すと差が出ます。充電式では、切断完了後に自動で戻るか、戻り位置を調整できるかなどを確認します。次に切るケーブルが細いのに毎回フルストロークで戻る必要があるのか、という視点もあります。
          </P>
          <H3>工具の全長と取り回し</H3>
          <P>
            小さい工具ほど良い、長い工具ほど力が出る、という単純な話ではありません。作業場所でハンドルを開けるか。工具をケーブルへ差し込めるか。床置きか、盤前か。こうした実際の姿勢を再現して選びます。
          </P>
          <H3>バッテリを共通化できるか</H3>
          <P>
            充電工具は本体価格だけで比較しないほうが運用しやすくなります。既に現場で使用しているバッテリシリーズと共通化できるか、予備を何個持つか、誰が充電するか。法人ではこの運用が決まっていると、工具を増やしたときの混乱を抑えられます。
          </P>
          <H3>本体のみか、バッテリ・充電器込みか</H3>
          <P>
            同じシリーズでも、本体のみとセット品では購入後すぐ使える条件が違います。価格比較の際には同じ条件で比べます。
          </P>
          <H3>替刃と保守</H3>
          <P>
            切断能力が十分でも、刃の傷みで切断感は変わります。交換刃の有無、交換方法、点検周期、異物を噛み込んでいないかなど、保守まで標準化すると「工具を買った直後だけ速い」という状態を防ぎやすくなります。
          </P>

          <H2 id="setup">切断工具だけ替えても速くならない：段取りを整える</H2>
          <Figure
            src={IMG("cable-cutting-workstation-organization.jpg")}
            alt="ケーブル切断工程で作業台・工具箱・運搬台車を整理したイメージ"
          />
          <P>
            工具更新の効果を出すには、前後の動作も見ます。材料を探す、床から拾う、工具を取りに戻る時間が残れば、高性能工具の効果は工程全体へ出にくくなります。
          </P>
          <H3>ケーブルを床にばらばらに置かない</H3>
          <P>
            材料が遠い、絡んでいる、必要な線を探している。これでは高性能なカッターを導入しても待ち時間が残ります。切断予定のケーブルを順番に置き、加工済みと未加工を分けるだけでも作業の迷いを減らせます。
          </P>
          <H3>作業台の高さと配置を合わせる</H3>
          <P>
            床で何度もしゃがみ、測って、切って、立ち上がる工程なら、作業台の利用を検討します。切断だけでなく測定、マーキング、端末処理まで同じ場所で進めるなら、必要な工具を手の届く範囲へ配置します。
          </P>
          <div className="my-5">
            <ExtButton href={cta.workbench} tone="dark">
              作業台一覧を見る →
            </ExtButton>
          </div>
          <H3>工具箱は「収納量」だけでなく定位置管理に使う</H3>
          <P>
            工具箱へ全部入れるだけでは、探す時間はなくなりません。使用頻度が高いものを同じ場所へ戻せるか、替刃やバッテリを分けられるか、現場へそのまま持ち出せるかを考えます。
          </P>
          <div className="my-5">
            <ExtButton href={cta.toolbox} tone="dark">
              工具箱一覧を見る →
            </ExtButton>
          </div>
          <H3>運搬台車で材料と工具をまとめて動かす</H3>
          <P>
            切断場所が固定できない現場では、工具だけでなく材料・測定具・保護具をまとめて移動できると往復を減らせます。ただし台車へ積みすぎて取り出しにくくしないこと。工程ごとに必要なものを絞ります。
          </P>
          <div className="my-5">
            <ExtButton href={cta.cart} tone="dark">
              運搬台車一覧を見る →
            </ExtButton>
          </div>

          <H2 id="failures">こんな選び方は失敗しやすい</H2>
          <ul className={cls.list}>
            <li>
              <strong>最大切断能力が大きいほど良い</strong>
              <br />
              最大能力は重要ですが、日常的に切る線と工具の重さ・全長・取り回しのバランスがあります。普段は小径なのに大型工具だけを持つと、携帯性を落とすことがあります。
            </li>
            <li>
              <strong>1000V絶縁なら活線を切れると思う</strong>
              <br />
              絶縁工具の表記と、活線で切断作業を行ってよいかは別問題です。停電・検電・作業手順を優先してください。
            </li>
            <li>
              <strong>電動化すれば自動的に速くなる</strong>
              <br />
              バッテリ切れ、工具を取りに行く、材料が整列されていない、作業台がない、といった段取りが残っていれば期待した改善になりません。
            </li>
            <li>
              <strong>本体価格だけで比較する</strong>
              <br />
              バッテリ、充電器、ケース、替刃、保守まで含めて比較します。既存バッテリと共通化できるかも法人では重要です。
            </li>
            <li>
              <strong>1本の工具で全部切ろうとする</strong>
              <br />
              小径・少量と、太物・反復では最適な工具が同じとは限りません。役割を2段階程度に分けたほうが現場では扱いやすいケースがあります。
            </li>
          </ul>

          <H2 id="checklist">法人で切断工具を標準化するときのチェックリスト</H2>
          <ul className="my-4 space-y-2">
            {checkItems.map((item) => (
              <li
                key={item}
                className="border border-gray-200 bg-gray-50 px-4 py-3 text-[16px] leading-7 text-gray-900"
              >
                □ {item}
              </li>
            ))}
          </ul>
          <P>
            このチェックを現場ごとに一度行うと、「前からこれを使っているから」という理由だけで工具を固定するのを避けられます。
          </P>

          <H2 id="faq">よくある質問</H2>
          <div className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.q}>
                <h3 className={cls.faqQ}>{faq.q}</h3>
                <P>{faq.a}</P>
              </div>
            ))}
          </div>

          <H2 id="summary">まとめ：工具の能力ではなく、切断工程全体で選ぶ</H2>
          <P>
            ケーブルカッターを選ぶとき、最大切断能力は必ず確認すべき仕様です。ただし、作業効率を上げる目的なら、それだけでは足りません。
          </P>
          <P>
            小径・少量ならコンパクト手動。太物でも電源を使わず処理するなら長柄やラチェット。反復回数が増えて握力や戻し操作が負担になっているなら充電式。定置で電源が取れるならコード式も候補になります。
          </P>
          <P>
            さらに、ケーブルの置き方、作業台、工具箱、運搬まで整えると、切断工具の性能を工程全体の改善につなげやすくなります。
          </P>
          <P>
            まずは現在の現場について、
            <Mark>「何を」「何本」「どこで」「誰が」切っているか</Mark>
            を記録してみてください。その4点が分かれば、必要以上に高機能な工具を買うことも、負担の大きい工具を使い続けることも避けやすくなります。
          </P>

          <aside className="my-10 border-2 border-gray-900 bg-slate-950 p-6 text-white md:p-8">
            <h3 className="mb-3 text-2xl font-black tracking-wide sm:text-3xl">
              切断工程に合う工具を比較する
            </h3>
            <p className="mb-5 text-[17px] leading-[1.85] text-slate-100">
              手作業工具とTRUSCO中山掲載商品から、現場条件に合う候補を確認できます。
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ExtButton href={cta.handTools}>手作業工具一覧を見る →</ExtButton>
              <ExtButton href={cta.trusco} tone="rose">
                TRUSCO掲載商品を見る →
              </ExtButton>
            </div>
          </aside>

          <aside className="my-8 border border-gray-300 bg-white p-5 md:p-6">
            <h3 className="mb-2 text-xl font-black text-gray-900 sm:text-2xl">
              切断以外の手作業も省力化するなら
            </h3>
            <P>
              圧入・かしめなど別工程ではハンドプレスも選択肢です。ケーブルカッターとは用途が異なるため、切断工具としては扱いません。
            </P>
            <div className="mt-4">
              <ExtButton href={cta.handPress} tone="dark">
                ハンドプレス一覧を見る →
              </ExtButton>
            </div>
          </aside>

          <section className="my-12 border-t border-gray-200 pt-10">
            <h2 className="mb-4 text-2xl font-black text-gray-900">関連記事</h2>
            <ul className="space-y-3">
              {relatedArticles.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-bold text-gray-900 underline underline-offset-2"
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
