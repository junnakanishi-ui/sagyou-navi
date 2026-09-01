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

const SLUG = "air-riveter-how-to-choose-guide";
const SITE_URL = "https://www.sagyou-navi.com";
const CANONICAL = `${SITE_URL}/articles/${SLUG}`;
const SEO_TITLE =
  "エアリベッターとは？使い方・仕組み・おすすめの選び方【2026年】";
const H1 =
  "エアリベッターとは？使い方・仕組み・選び方｜ロブスターR2A1/R2A2など用途別に比較【2026年版】";
const SHORT_TITLE = "エアリベッターとは？使い方・仕組み・選び方";
const DESCRIPTION =
  "エアリベッターとは何か、ブラインドリベットが締結される仕組み、基本の使い方、コンプレッサー条件、リベット径・材質による選び方を解説。ロブテックスR2A1/R2A2、TRUSCO TAR-270、アストロプロダクツを比較し、「切れない」「マンドレルが詰まる」ときの確認点、コードレスとの違いまで整理します。";
const PUBLISHED = "2026-09-01";
const IMG = (file: string) => `/images/articles/${SLUG}/${file}`;
const PROD = (file: string) => `/images/articles/${SLUG}/products/${file}`;
const EXT_REL = "nofollow sponsored noopener";

type MainProduct = (typeof productData.mainProducts)[number];
type CordlessProduct = (typeof productData.cordlessComparison)[number];
type AnyProduct = MainProduct | CordlessProduct;

const [r2a1, r2a2, tar270, astro] = productData.mainProducts as MainProduct[];
const [r2b1, r2b2] = productData.cordlessComparison as CordlessProduct[];
const primaryCta = productData.ctas.primary;
const secondaryCtas = productData.ctas.secondary;

export const metadata: Metadata = {
  title: SEO_TITLE,
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: SEO_TITLE,
    description: DESCRIPTION,
    type: "article",
    url: CANONICAL,
    siteName: "作業用品ナビ",
    publishedTime: PUBLISHED,
    modifiedTime: PUBLISHED,
    images: [
      {
        url: `${SITE_URL}${IMG("air-riveter-blind-rivet-workshop-hero.webp")}`,
        width: 1600,
        height: 900,
        alt: "金属板のブラインドリベット締結にエアリベッターを使う作業イメージ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SHORT_TITLE,
    description: DESCRIPTION,
    images: [
      `${SITE_URL}${IMG("air-riveter-blind-rivet-workshop-hero.webp")}`,
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: H1,
  description: DESCRIPTION,
  mainEntityOfPage: CANONICAL,
  image: [`${SITE_URL}${IMG("air-riveter-blind-rivet-workshop-hero.webp")}`],
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  about: {
    "@type": "Thing",
    name: "エアリベッター",
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

const keyPoints = [
  "エアリベッターは、圧縮空気でブラインドリベットのマンドレルを引き抜いて片側から締結する工具。",
  "同じ「エアリベッター」表記でも、ブラインド引き抜き式とソリッド打撃式は別工具。",
  "購入前は径・材質・本数・エア設備・重量の5項目で絞り込む。",
  "φ2.4～4.8mm中心ならR2A1、6.4mmまでならR2A2が基本の選び分け。",
  "「切れない」と「詰まり」は別症状。圧力・適合・ノーズ・ジョー／タンク・排出経路を分けて確認。",
];

const selectionItems = [
  {
    title: "リベット径",
    body: "2.4 / 3.2 / 4.0 / 4.8 / 6.4mmのどこまで必要か。最大径だけで選ばない。",
  },
  {
    title: "リベット材質",
    body: "アルミ・鉄・ステンレス・高強度リベットで必要な引張力が変わる。",
  },
  {
    title: "締結本数",
    body: "単発作業か、数十～数百本の連続作業か。ライン作業かどうか。",
  },
  {
    title: "エア設備",
    body: "指定空気圧に加え、コンプレッサーの実吐出量・ホース内径まで確認。",
  },
  {
    title: "重量・取り回し",
    body: "長時間片手保持か、ホース取り回し・作業姿勢・現場移動の有無。",
  },
];

const mechanismSteps = [
  {
    title: "下穴へ差し込む",
    body: "接合する母材に、リベット径・仕様に合った下穴を加工してリベットを挿入する。",
  },
  {
    title: "ノーズピースへ入れる",
    body: "先端のノーズピースへマンドレルを挿入。吸引機構付きなら保持しやすい。",
  },
  {
    title: "トリガーで引く",
    body: "ジョーがマンドレルをつかみ、空圧・油圧機構の引張力で後方へ引く。",
  },
  {
    title: "ボディが変形する",
    body: "裏側のリベットボディが変形し、母材を挟み込んで締結する。",
  },
  {
    title: "マンドレル破断",
    body: "規定の状態になるとマンドレルが破断する。",
  },
  {
    title: "切断軸を排出",
    body: "吸引排出機構付きなら、切断されたマンドレルをタンクやホースへ回収する。",
  },
];

const useSteps = [
  {
    title: "使用するブラインドリベットを決める",
    body: "リベット径・材質・母材の総厚・必要な締結仕様を確認する。工具側の対応径だけでなく、リベット自体が母材厚に適合している必要がある。",
  },
  {
    title: "リベットに合う下穴を加工する",
    body: "小さすぎれば入らず、大きすぎれば適切な締結にならない。リベットメーカー指定の穴径を優先する。",
  },
  {
    title: "径に合ったノーズピースを取り付ける",
    body: "2.4mmリベットに4.8mm用ノーズを使うなど、不一致では正常な保持・締結ができない。R2A1取説でも径に合わせて交換が指定されている。",
  },
  {
    title: "エア設備を確認する",
    body: "使用空気圧・ホース・カプラー・コンプレッサーを確認。「高いほどよく切れる」と考えて規定値を超えない。R2A1/R2A2は0.5～0.6MPa。",
  },
  {
    title: "リベットを下穴へ入れる",
    body: "工具を大きく傾けず、フランジが母材へ適切に接している状態にする。",
  },
  {
    title: "トリガーを引いて締結する",
    body: "マンドレルが引かれ、リベット本体がかしめられる。",
  },
  {
    title: "マンドレル排出を確認する",
    body: "吸引排出タイプでは、次へ進む前に切断軸が正常に回収・排出されたか確認する。詰まりは使用不能の原因になる。",
  },
];

const safetyItems = [
  "保護メガネを着用する",
  "メーカー指定の空気圧範囲で使う",
  "メンテナンス前はエア供給を外す",
  "排出口・飛散方向を人へ向けない",
  "切断されたマンドレルは鋭利なので注意する",
  "作業・整備は各機種の取扱説明書を優先する",
];

const cutChecks = [
  {
    title: "使用空気圧",
    body: "規定より低いと十分な引張力が出ない可能性がある。ただし上限を超えて上げない。",
  },
  {
    title: "対応径・リベット材質",
    body: "工具の使用範囲外（例：R2A1で6.4mm）を締結しようとしていないか。",
  },
  {
    title: "ノーズピース",
    body: "リベット径に合うノーズピースか確認する。",
  },
  {
    title: "ジョー",
    body: "摩耗・汚れでマンドレルを正しくつかめなくなっていないか。",
  },
  {
    title: "ストローク / 油圧",
    body: "空油圧式では油圧オイル減少などがストローク不足の原因例になる。分解・給油は取説に従う。",
  },
];

const jamChecks = [
  {
    title: "タンクケースユニットの装着",
    body: "R2A1では未装着だと切断軸が排出されず、排出管路内で詰まる恐れがある。",
  },
  {
    title: "タンクの装着深さ",
    body: "装着不足だとシャッターが十分開かず、バキュームが弱くなる可能性がある。",
  },
  {
    title: "スポンジ・フィルター",
    body: "目詰まりしていないか。R2A1ではタンク内スポンジの定期エアブローが案内されている。",
  },
  {
    title: "排出経路",
    body: "ガイドパイプ内の詰まり、シュートホース末端の閉塞などを確認する。",
  },
  {
    title: "排出前に次を打っていないか",
    body: "切断軸が正常に排出されたことを確認してから次へ進む。",
  },
];

const failExamples = [
  {
    title: "リベット径だけで工具を選ぶ",
    body: "材質・高強度リベットも確認する。",
  },
  {
    title: "大きい機種なら小径も全部使えると思う",
    body: "R2A2は2.4 / 3.2mm用ではない。",
  },
  {
    title: "空気圧を高くすれば解決すると思う",
    body: "指定上限を超える使用は危険。",
  },
  {
    title: "コンプレッサーのタンク容量だけを見る",
    body: "実吐出量・同時使用を確認する。",
  },
  {
    title: "細いエアホースを長く引き回す",
    body: "圧力低下の原因になる。",
  },
  {
    title: "工具を斜めに当てる",
    body: "リベット・母材へ無理な力がかかる。",
  },
  {
    title: "排出確認せず次のリベットを打つ",
    body: "マンドレル詰まりにつながる可能性がある。",
  },
  {
    title: "メンテナンスを「壊れてから」行う",
    body: "ジョー・排出経路・フィルターは定期点検する。",
  },
];

const checklist = [
  "ブラインドリベット用を探している",
  "使用する最小リベット径",
  "使用する最大リベット径",
  "アルミ / スチール / ステンレス",
  "高強度リベットの有無",
  "1日何本締結するか",
  "コンプレッサーがある",
  "必要空気圧を満たす",
  "実吐出量に余裕がある",
  "ホース内径が適切",
  "本体重量が許容範囲",
  "マンドレル吸引・回収機能が必要",
  "交換用ジョー・ノーズピースを入手できる",
  "現場移動中心ならコードレスも比較した",
];

const faqs = [
  {
    q: "エアリベッターとは何ですか？",
    a: "圧縮空気を利用し、ブラインドリベットのマンドレルを引き抜いて片側から母材を締結する空圧工具です。大量・連続締結で手動より負担を減らしやすいのが特徴です。",
  },
  {
    q: "エアリベッターの仕組みは？",
    a: "ノーズピースから入ったマンドレルをジョーがつかみ、空油圧機構で引きます。リベットボディが裏側で変形して母材を挟み、最後にマンドレルが破断します。",
  },
  {
    q: "コンプレッサーは何MPa必要ですか？",
    a: "機種ごとに異なります。R2A1 / R2A2は0.5～0.6MPa、TAR-270は0.54～0.59MPa、Astroは0.5～0.7MPaです。圧力に加えて空気使用量とコンプレッサーの実吐出量も確認してください。",
  },
  {
    q: "R2A1とR2A2の違いは？",
    a: "R2A1はφ2.4～4.8mm、1.25kg、9.0kN。R2A2はφ4.8・6.4mm、2.0kg、18.5kNです。小～中径中心ならR2A1、6.4mmを使うならR2A2が基本です。",
  },
  {
    q: "R2A1で6.4mmリベットは使用できますか？",
    a: "メーカーの標準使用範囲はφ2.4～4.8mmです。6.4mmはR2A2等の対応工具を選んでください。",
  },
  {
    q: "エアリベッターでリベットが切れない原因は？",
    a: "空気圧不足、リベットと工具の適合、ノーズピース、ジョーの汚れ・摩耗、ストロークや油圧系の問題などが考えられます。機種の取扱説明書に従って確認してください。",
  },
  {
    q: "マンドレルが詰まる原因は？",
    a: "吸引排出タイプでは、タンクの未装着・装着不足、フィルターやスポンジの目詰まり、ガイドパイプ・排出ホース内の詰まりなどが原因になる場合があります。",
  },
  {
    q: "電動リベッターとエアリベッターはどちらがおすすめですか？",
    a: "固定場所で大量作業するならエア式、移動作業・高所・屋外などでホースを使いたくないならコードレスが選びやすいです。",
  },
  {
    q: "ATIやIngersoll Randの「エアリベッター」も同じですか？",
    a: "Excel掲載のATI ATC3X / ATC4XやIR AVCシリーズは、航空機などでソリッドリベットを打撃するリベットハンマー系です。ブラインドリベットを引き抜くR2A1等とは機構・用途が異なります。",
  },
] as const;

const relatedArticles = [
  {
    href: "/articles/manual-press-fit-work-efficiency-guide",
    label: "プレスフィット作業の効率化ガイド",
  },
  {
    href: "/articles/electrical-crimping-work-efficiency-guide",
    label: "電気工事の圧着作業効率化ガイド",
  },
  {
    href: "/articles/air-blow-automation-chip-mist-control",
    label: "エアブロー自動化と切粉・ミスト対策",
  },
] as const;

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
        エアリベッターを用途別に比較する
      </h2>
      <p className="mt-3 text-[16px] leading-7 text-gray-100">
        R2A1 / R2A2 / TAR-270 / Astroなど、ブラインドリベット用をまとめて確認できます。
      </p>
      <div className="mt-5">
        <ExtLink
          href={primaryCta.url}
          className="inline-flex min-h-12 items-center justify-center rounded-xl bg-amber-500 px-5 py-3 text-[16px] font-extrabold text-gray-950 hover:bg-amber-400"
        >
          {primaryCta.label} →
        </ExtLink>
      </div>
    </section>
  );
}

function specRows(
  rows: { label: string; value: string | undefined }[]
): { label: string; value: string }[] {
  return rows
    .filter((row): row is { label: string; value: string } => Boolean(row.value))
    .map((row) => ({ label: row.label, value: row.value }));
}

function ProductCard({
  product,
  priority = false,
  specs,
  note,
}: {
  product: AnyProduct;
  priority?: boolean;
  specs: { label: string; value: string }[];
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
            {product.role}
          </p>
          <dl className="mt-4 space-y-2 text-[15px] leading-7 text-gray-900 md:text-[16px]">
            {specs.map((row) => (
              <div key={row.label}>
                <dt className="inline font-bold">{row.label}：</dt>
                <dd className="inline">
                  <Mark>{row.value}</Mark>
                </dd>
              </div>
            ))}
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

function ProductTableCell({ product }: { product: MainProduct }) {
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
          {product.name}
        </span>
      </span>
    </ExtLink>
  );
}

function FinalCtaBlock() {
  return (
    <section className="my-12 rounded-2xl border-2 border-amber-300 bg-amber-50 p-6 md:p-8">
      <h2 className="text-2xl font-black text-gray-900 sm:text-3xl">
        エアリベッターをまとめて比較
      </h2>
      <p className="mt-3 text-[16px] leading-7 text-gray-900">
        価格だけでなく、対応径・エア条件・取り回しまで含めて自社の作業に合うかを確認してください。
      </p>
      <div className="mt-5">
        <PrimaryCta href={primaryCta.url} label={primaryCta.label} />
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
              ファスニング・空圧工具 / {PUBLISHED}更新
            </div>
            <h1 className={cls.h1}>{H1}</h1>
            <P>
              板金や看板製作、設備保全、車両整備などで、ブラインドリベットを何十本、何百本と締結するなら、手動リベッターでは腕や握力への負担が大きくなります。
            </P>
            <P>
              そこで使われるのが
              <Mark>エアリベッター（エアーリベッター）</Mark>
              です。圧縮空気を使ってマンドレルを引き、ブラインドリベットを短時間で締結できるため、連続作業を効率化しやすい工具です。
            </P>
            <P>
              ただ、実際に製品を選ぼうとすると、2.4mm・4.8mm・6.4mmのどれまで必要か、ステンレスは使えるか、R2A1とR2A2の違い、コンプレッサー条件、電動との比較、「切れない」「詰まり」まで、商品一覧だけでは分かりにくい点が多くあります。
            </P>
            <P>
              この記事では、2026年9月時点のメーカー公式情報・取扱説明書を確認しながら、
              <Mark>
                エアリベッターの仕組み → 使い方 → 選び方 → 商品比較 →
                切れない・詰まりの確認点
              </Mark>
              まで一つにまとめます。
            </P>
            <Figure
              src={IMG("air-riveter-blind-rivet-workshop-hero.webp")}
              alt="金属板のブラインドリベット締結にエアリベッターを使う作業イメージ"
              priority
            />
          </header>

          <section
            id="key-points"
            className="my-10 rounded-2xl border-y-4 border-emerald-700 bg-emerald-50 p-6 md:p-8"
          >
            <h2 className="text-2xl font-black text-gray-900 sm:text-3xl">
              30秒で分かる｜エアリベッターとは？
            </h2>
            <P>
              エアリベッターとは、
              <Mark>
                コンプレッサーの圧縮空気を使ってブラインドリベットのマンドレルを引き抜き、片側から板材を締結する工具
              </Mark>
              です。
            </P>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-[17px] leading-8 text-gray-900">
              {keyPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <div className="mt-6">
              <PrimaryCta href={primaryCta.url} label={primaryCta.label} />
            </div>
          </section>

          <H2 id="two-types">
            注意｜「エアリベッター」と呼ばれる工具には2種類ある
          </H2>
          <P>
            流通上の商品一覧には、見た目も用途も違う工具が同じ「エアリベッター」表記で並ぶことがあります。すべてを同じ比較表へ入れるのは正しくありません。
          </P>
          <div className="my-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border-2 border-emerald-700 bg-emerald-50 p-5">
              <p className="text-sm font-bold text-emerald-900">今回の対象</p>
              <h3 className="mt-2 text-xl font-black text-gray-900">
                ブラインドリベット引き抜き式
              </h3>
              <p className="mt-3 text-[16px] leading-7 text-gray-900">
                ジョーでマンドレルをつかみ、引張力でリベットボディを変形させて締結。板金・製缶・整備で一般的にイメージされやすいタイプ。
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-[15px] leading-7 text-gray-900">
                <li>ロブテックス R2A1 / R2A2</li>
                <li>TRUSCO TAR-270</li>
                <li>アストロプロダクツ</li>
              </ul>
            </div>
            <div className="rounded-2xl border-2 border-gray-400 bg-gray-50 p-5">
              <p className="text-sm font-bold text-gray-800">本比較から除外</p>
              <h3 className="mt-2 text-xl font-black text-gray-900">
                ソリッドリベット打撃式
              </h3>
              <p className="mt-3 text-[16px] leading-7 text-gray-900">
                BPM（1分あたりの打撃数）を持つリベットハンマー系。航空機MROなどのソリッドリベット作業が中心。
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-[15px] leading-7 text-gray-900">
                <li>ATI ATC3X / ATC4X</li>
                <li>Ingersoll Rand AVCシリーズ</li>
              </ul>
            </div>
          </div>
          <P>
            つまり、
            <Mark>
              「エア工具でリベットを施工する」という大分類は同じでも、締結原理も選び方も違う
            </Mark>
            ということです。この記事では検索者の多い
            <strong>ブラインドリベット用エアリベッター</strong>
            に集中します。
          </P>

          <H2 id="mechanism">
            エアリベッターの仕組み｜ブラインドリベットはどう締結される？
          </H2>
          <Figure
            src={IMG("blind-rivet-pulling-mechanism-diagram.webp")}
            alt="エアリベッターがマンドレルを引いてブラインドリベットを締結する仕組みのイメージ"
          />
          <P>
            ブラインドリベットは、大きく
            <Mark>ボディ（フランジ）</Mark>と
            <Mark>マンドレル（シャフト）</Mark>
            からできています。マンドレルを引き抜くことでボディを変形させ、2枚の板を固定します。
          </P>
          <div className="my-8 border-y border-gray-300">
            {mechanismSteps.map((step, index) => (
              <div
                key={step.title}
                className="grid gap-3 border-b border-gray-200 py-5 last:border-b-0 sm:grid-cols-[56px_180px_1fr] sm:items-start"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-700 text-xl font-black text-white">
                  {index + 1}
                </div>
                <h3 className="text-xl font-black text-gray-900">
                  {step.title}
                </h3>
                <p className="text-[17px] leading-8 text-gray-900">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
          <P>
            この
            <Mark>「リベット保持 → 引張り → 破断 → 排出」</Mark>
            が安定して連続するかどうかが、エアリベッターの作業性を大きく左右します。
          </P>

          <H2 id="howto">エアリベッターの使い方｜基本7ステップ</H2>
          <Figure
            src={IMG("air-riveter-correct-angle-operation.webp")}
            alt="エアリベッターを母材へまっすぐ当てて締結するイメージ"
          />
          <P>
            実際の作業はメーカー・モデルごとの取扱説明書を優先してください。ここではブラインドリベット用エアリベッターの共通的な流れを整理します。
          </P>
          <div className="my-8 space-y-5">
            {useSteps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-2xl border border-gray-300 bg-white p-5"
              >
                <h3 className="text-xl font-black text-gray-900">
                  {index + 1}. {step.title}
                </h3>
                <p className="mt-2 text-[16px] leading-7 text-gray-900">
                  {step.body}
                </p>
                {index === 1 ? (
                  <div className="mt-4">
                    <PrimaryCta
                      href={secondaryCtas[0].url}
                      label={secondaryCtas[0].label}
                    />
                  </div>
                ) : null}
              </div>
            ))}
          </div>

          <H2 id="selection">エアリベッターの選び方｜購入前に見る5項目</H2>
          <Figure
            src={IMG("blind-rivet-diameter-tool-selection.webp")}
            alt="複数サイズのブラインドリベットとノーズピースを確認して工具を選ぶイメージ"
          />
          <P>
            商品ページを開くと、重量や全長など多くの数字が並んでいます。まず見るべきものを5つに絞ります。
          </P>
          <div className="my-8 border-y border-gray-300">
            {selectionItems.map((item, index) => (
              <div
                key={item.title}
                className="grid gap-3 border-b border-gray-200 py-5 last:border-b-0 sm:grid-cols-[56px_140px_1fr] sm:items-start"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 text-xl font-black text-white">
                  {index + 1}
                </div>
                <h3 className="text-xl font-black text-gray-900">
                  {item.title}
                </h3>
                <p className="text-[17px] leading-8 text-gray-900">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <H3>1. リベット径</H3>
          <P>最優先です。今回の主要製品なら次のとおりです。</P>
          <div className="my-6 overflow-x-auto">
            <table className={cls.table}>
              <thead>
                <tr>
                  <th className={cls.th}>製品</th>
                  <th className={cls.th}>主な対応径</th>
                </tr>
              </thead>
              <tbody>
                {productData.mainProducts.map((p) => (
                  <tr key={p.id}>
                    <td className={cls.td}>
                      <ProductTableCell product={p} />
                    </td>
                    <td className={cls.td}>
                      <Mark>{p.specs.rivetDiameter}</Mark>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <P>
            6.4mmを使うなら、R2A1やTAR-270ではなく
            <Mark>R2A2</Mark>
            等の対応モデルを検討する必要があります。
          </P>

          <H3>2. リベット材質</H3>
          <P>
            同じφ4.8mmでも、アルミ・スチール・ステンレス・高強度リベットでは工具へ必要な引張力が変わります。径だけで決めず、メーカーがそのリベット材質・シリーズに対応しているか確認します。
          </P>

          <H3>3. 1日の締結本数</H3>
          <Figure
            src={IMG("air-riveter-repetitive-fastening-production.webp")}
            alt="組立工程でエアリベッターを使い複数のブラインドリベットを連続締結するイメージ"
          />
          <P>
            数本だけならハンドリベッターでも十分な場合があります。一方、数十本・数百本・組立ライン・同一作業の反復なら、エア式のメリットが出やすくなります。
          </P>

          <H3>4. コンプレッサーとエア消費量</H3>
          <P>
            R2A1は1分あたり
            <Mark>82L/min以下</Mark>、R2A2は
            <Mark>105L/min以下</Mark>
            とメーカーが公表しています。工具の必要空気量より、コンプレッサーの
            <strong>実吐出量</strong>
            が十分か確認します。タンク容量や最高圧力だけで判断しないことが重要です。
          </P>

          <H3>5. 重量と取り回し</H3>
          <ul className={cls.list}>
            <li>
              R2A1：約<Mark>1.25kg</Mark>
            </li>
            <li>
              R2A2：約<Mark>2.0kg</Mark>
            </li>
            <li>
              TAR-270：約<Mark>1.7kg</Mark>
            </li>
            <li>
              Astro：約<Mark>1.3kg</Mark>
            </li>
          </ul>
          <P>
            太径対応になるほど本体が大型・重量化する傾向があります。一部流通データにR2A1を12.5kgと記す転記誤りがありますが、メーカー公式は
            <Mark>1.25kg</Mark>
            です。
          </P>

          <H2 id="compare">用途別に比較｜エアリベッター4機種</H2>

          <ProductCard
            product={r2a1}
            priority
            specs={specRows([
              { label: "対応径", value: r2a1.specs.rivetDiameter },
              { label: "重量", value: r2a1.specs.weight },
              { label: "ストローク", value: r2a1.specs.stroke },
              { label: "空気圧", value: r2a1.specs.airPressure },
              { label: "引張力", value: r2a1.specs.traction },
              { label: "空気使用量", value: r2a1.specs.airConsumption },
            ])}
          />
          <H3>R2A1が向く人</H3>
          <ul className={cls.list}>
            <li>φ2.4～4.8mmを幅広く使う</li>
            <li>4.8mm以下が作業の中心</li>
            <li>長時間使うため重量を抑えたい</li>
            <li>ロブスター / ロブテックスの現行機を探している</li>
            <li>メンテナンス性も重視したい</li>
          </ul>
          {"manufacturerUrl" in r2a1 && r2a1.manufacturerUrl ? (
            <P>
              メーカー一次情報：
              <a
                href={r2a1.manufacturerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold underline underline-offset-4"
              >
                ロブテックス R2A1 公式ページ
              </a>
            </P>
          ) : null}

          <div className="my-8">
            <ProductCard
              product={r2a2}
              specs={specRows([
                { label: "対応径", value: r2a2.specs.rivetDiameter },
                { label: "重量", value: r2a2.specs.weight },
                { label: "ストローク", value: r2a2.specs.stroke },
                { label: "空気圧", value: r2a2.specs.airPressure },
                { label: "引張力", value: r2a2.specs.traction },
                { label: "空気使用量", value: r2a2.specs.airConsumption },
              ])}
            />
          </div>
          <H3>R2A2が向く人</H3>
          <ul className={cls.list}>
            <li>6.4mmリベットを使う</li>
            <li>4.8mmでも高負荷・高強度側の作業が多い</li>
            <li>引張力を重視</li>
            <li>大径リベットを継続的に締結する</li>
          </ul>
          <H3>R2A1とR2A2の選び分け</H3>
          <P>
            「大きいR2A2を買えば全部できる」ではありません。R2A2の使用範囲はφ4.8・6.4mmであり、φ2.4・3.2mmを使うならR2A1です。
            <Mark>普段使う径の割合で決める</Mark>
            のが基本です。
          </P>

          <div className="my-8">
            <ProductCard
              product={tar270}
              note="2026年9月時点のOrange Bookには「後継品があります」表示あり。現行主力と断定せず、在庫と後継案内を確認してください。"
              specs={specRows([
                { label: "対応径", value: tar270.specs.rivetDiameter },
                { label: "重量", value: tar270.specs.weight },
                { label: "空気圧", value: tar270.specs.airPressure },
                { label: "ホース", value: tar270.specs.hose },
                { label: "材質対応", value: tar270.specs.materials },
              ])}
            />
          </div>
          <P>
            TAR-270は、バキューム圧でリベットを吸い込んで保持し、片手で作業しやすいことを特徴とするエアリベッターです。
          </P>

          <div className="my-8">
            <ProductCard
              product={astro}
              note="材質対応は流通コピーに差異があるため、ステンレス用途では購入時点のメーカー公式・同梱取説を確認してください。"
              specs={specRows([
                { label: "対応径", value: astro.specs.rivetDiameter },
                { label: "重量", value: astro.specs.weight },
                { label: "ストローク", value: astro.specs.stroke },
                { label: "空気圧", value: astro.specs.airPressure },
                { label: "空気消費", value: astro.specs.airConsumption },
                { label: "推奨ホース", value: astro.specs.recommendedHose },
              ])}
            />
          </div>

          <H3>4機種比較表</H3>
          <div className="my-6 overflow-x-auto">
            <table className={cls.table}>
              <thead>
                <tr>
                  <th className={cls.th}>製品</th>
                  <th className={cls.th}>対応径</th>
                  <th className={cls.th}>重量</th>
                  <th className={cls.th}>空気圧</th>
                  <th className={cls.th}>特徴</th>
                </tr>
              </thead>
              <tbody>
                {productData.mainProducts.map((p) => (
                  <tr key={p.id}>
                    <td className={cls.td}>
                      <ProductTableCell product={p} />
                    </td>
                    <td className={cls.td}>{p.specs.rivetDiameter}</td>
                    <td className={cls.td}>
                      <Mark>{p.specs.weight}</Mark>
                    </td>
                    <td className={cls.td}>{p.specs.airPressure}</td>
                    <td className={cls.td}>{p.feature}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <MidCta />

          <H2 id="lobster">
            「エアーリベッター ロブスター」で探すならR2A1 / R2A2
          </H2>
          <P>
            Googleの関連検索でも「エアーリベッター ロブスター」「ロブスター
            取扱説明書」は強い派生意図です。現行R2Aシリーズは2機種です。
          </P>
          <div className="my-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border-2 border-gray-300 p-5">
              <h3 className="text-xl font-black text-gray-900">
                小～中径中心 → R2A1
              </h3>
              <p className="mt-2 text-[16px] leading-7 text-gray-900">
                2.4 / 3.2 / 4.0 / 4.8mm。重量1.25kg。
              </p>
            </div>
            <div className="rounded-2xl border-2 border-gray-300 p-5">
              <h3 className="text-xl font-black text-gray-900">
                太径中心 → R2A2
              </h3>
              <p className="mt-2 text-[16px] leading-7 text-gray-900">
                4.8 / 6.4mm。引張力18.5kN。
              </p>
            </div>
          </div>
          <P>
            両方に4.8mmがありますが、
            <Mark>4.8mmを使うから自動的にR2A2</Mark>
            ではありません。3.2mm・4.0mmも頻繁に使うならR2A1。6.4mmや高出力が必要ならR2A2。
            <strong>作業の中心径</strong>で選ぶ方が合理的です。
          </P>
          <P>
            取扱説明書・故障診断・メンテナンス手順は、必ず機種ごとのメーカー取説を優先してください。この記事は確認順の整理であり、分解修理手順の代替ではありません。
          </P>

          <H2 id="compressor">コンプレッサーは何を確認すればいい？</H2>
          <Figure
            src={IMG("air-riveter-compressor-hose-setup.webp")}
            alt="エアリベッターとコンプレッサー・エアホースを安全に接続したイメージ"
          />
          <ol className="my-4 list-decimal space-y-3 pl-6 text-[17px] leading-[1.95] tracking-[0.04em] text-gray-900">
            <li>
              <strong>使用空気圧</strong>：R2Aシリーズは0.5～0.6MPa、TAR-270は0.54～0.59MPa、Astroは0.5～0.7MPa。指定範囲で使用する。
            </li>
            <li>
              <strong>実吐出量</strong>
              ：最高圧力だけでは足りない。R2A1は82L/min以下、R2A2は105L/min以下の空気使用量が公表されている。
            </li>
            <li>
              <strong>ホース内径</strong>
              ：細いと圧力損失が増える。TAR-270は内径6mm、Astroは推奨φ6.5mm。
            </li>
            <li>
              <strong>ホースの長さ</strong>
              ：長いホースや継手が多いと工具入口で圧力不足になりやすい。
            </li>
            <li>
              <strong>同時使用</strong>
              ：インパクトやブローガンも同じコンプレッサーから使うならピーク需要で判断する。
            </li>
          </ol>

          <H2 id="cordless">
            エアリベッターと電動・コードレスはどっちがいい？
          </H2>
          <Figure
            src={IMG("air-vs-cordless-riveter-worksite.webp")}
            alt="エアリベッターとコードレスリベッターの使用環境の違いを示すイメージ"
          />
          <P>
            検索サジェストには「リベッター
            電動」も出ています。結論は作業環境で変わります。この章は比較用であり、コードレス専用記事ではありません。
          </P>
          <div className="my-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border-2 border-emerald-700 bg-emerald-50 p-5">
              <h3 className="text-xl font-black text-gray-900">
                エアリベッターが向く
              </h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-[16px] leading-7 text-gray-900">
                <li>工場にコンプレッサー設備がある</li>
                <li>同じ場所で大量締結</li>
                <li>バッテリー充電待ちを避けたい</li>
                <li>長時間連続作業</li>
                <li>本体重量を抑えたい</li>
              </ul>
            </div>
            <div className="rounded-2xl border-2 border-gray-400 bg-gray-50 p-5">
              <h3 className="text-xl font-black text-gray-900">
                コードレスが向く
              </h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-[16px] leading-7 text-gray-900">
                <li>現場を移動する</li>
                <li>高所・屋外</li>
                <li>エアホースが邪魔</li>
                <li>コンプレッサーを持ち込みたくない</li>
                <li>数十本程度を場所を変えながら施工</li>
              </ul>
            </div>
          </div>

          <H3>R2A1 vs R2B1</H3>
          <ProductCard
            product={r2b1}
            specs={specRows([
              { label: "対応径", value: r2b1.specs.rivetDiameter },
              { label: "重量", value: r2b1.specs.weight },
              { label: "引張力", value: r2b1.specs.traction },
              { label: "電圧", value: r2b1.specs.voltage },
            ])}
          />
          <P>
            メーカーは、締結サイクル0.8秒で従来の高速エアリベッター相当を狙った製品として説明しています。
          </P>

          <H3>R2A2 vs R2B2</H3>
          <div className="my-8">
            <ProductCard
              product={r2b2}
              specs={specRows([
                { label: "対応径", value: r2b2.specs.rivetDiameter },
                { label: "重量", value: r2b2.specs.weight },
                { label: "引張力", value: r2b2.specs.traction },
                { label: "電圧", value: r2b2.specs.voltage },
              ])}
            />
          </div>
          <P>
            <Mark>固定ラインならエア。現場移動ならコードレス。</Mark>
            という考え方から入り、その上で締結本数や重量を比較すると選びやすくなります。
          </P>

          <H2 id="trouble">トラブル分岐｜入らない / 切れない / 詰まる</H2>
          <div className="my-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border-2 border-sky-600 bg-sky-50 p-5">
              <h3 className="text-xl font-black text-gray-900">入らない</h3>
              <p className="mt-3 text-[15px] leading-7 text-gray-900">
                径・ノーズピース・ガイドパイプ・緩み・ジョー周りを確認。無理に押し込まない。
              </p>
            </div>
            <div className="rounded-2xl border-2 border-rose-600 bg-rose-50 p-5">
              <h3 className="text-xl font-black text-gray-900">切れない</h3>
              <p className="mt-3 text-[15px] leading-7 text-gray-900">
                破断しない／何度も引く。圧力・適合・ノーズ・ジョー・ストローク／油圧を確認。
              </p>
            </div>
            <div className="rounded-2xl border-2 border-amber-600 bg-amber-50 p-5">
              <h3 className="text-xl font-black text-gray-900">詰まる</h3>
              <p className="mt-3 text-[15px] leading-7 text-gray-900">
                破断後に排出されない。タンク・バキューム・フィルター・排出経路を確認。
              </p>
            </div>
          </div>

          <H2 id="wont-cut">
            エアリベッターで「リベットが切れない」ときに確認すること
          </H2>
          <P>
            「切れない」という検索は、実際には複数の状態を含みます。まず症状を分けてください。原因を一つに断定せず、確認順で絞ります。
          </P>
          <H3>1. マンドレルを引いているが破断しない</H3>
          <div className="my-6 space-y-4">
            {cutChecks.map((item, index) => (
              <div
                key={item.title}
                className="rounded-xl border border-gray-300 bg-white p-4"
              >
                <h4 className="text-lg font-black text-gray-900">
                  {index + 1}. {item.title}
                </h4>
                <p className="mt-2 text-[16px] leading-7 text-gray-900">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
          <H3>2. 一度で切れず何度もトリガーを引く</H3>
          <P>
            リベット仕様と工具ストロークが合っているか確認します。R2A1は
            <Mark>19mm</Mark>、R2A2は
            <Mark>25mm</Mark>
            のロングストロークです。「何回引いても締結できるから問題ない」とせず、正常な締結状態か取説を確認してください。
          </P>

          <H2 id="jam">エアリベッターで「マンドレルが詰まる」とき</H2>
          <Figure
            src={IMG("air-riveter-mandrel-collection-maintenance.webp")}
            alt="エアリベッターのマンドレル回収タンクと先端部を点検するイメージ"
          />
          <P>
            破断そのものと、破断後の排出は別問題です。ロブテックスR2A1の取扱説明書では、マンドレル詰まりにつながる具体例が示されています。
          </P>
          <div className="my-6 space-y-4">
            {jamChecks.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-amber-300 bg-amber-50 p-4"
              >
                <h3 className="text-lg font-black text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-[16px] leading-7 text-gray-900">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
          <p className="mb-4 rounded-xl border border-rose-200 bg-rose-50 p-4 text-[16px] leading-7 text-gray-900">
            勝手な分解修理は行わず、詳細手順・修理はメーカー取説または修理依頼へつなげてください。
          </p>

          <H2 id="wont-insert">リベットがノーズピースに入らない場合</H2>
          <P>
            「切れない」以前に、工具先端へリベットが入らない場合は、リベット径・ノーズピース径・ガイドパイプ・ノーズピースの緩み・ジョー周りを確認します。工具本体を無理に叩いたり、マンドレルを強制的に押し込んだりしないでください。
          </P>

          <H2 id="maintenance">メンテナンスで見る5か所</H2>
          <ol className="my-4 list-decimal space-y-2 pl-6 text-[17px] leading-[1.95] tracking-[0.04em] text-gray-900">
            <li>
              <strong>ジョー</strong>
              ：マンドレルを直接つかむ消耗部品。金属粉や摩耗を確認。
            </li>
            <li>
              <strong>ノーズピース</strong>
              ：使用径ごとに交換。締まりや摩耗を確認。
            </li>
            <li>
              <strong>ジョーケース周辺</strong>
              ：粉じん・摩耗粉がたまりやすい。取説の手順で清掃。
            </li>
            <li>
              <strong>油圧オイル</strong>
              ：空油圧式ではストローク低下と関係する場合がある。指定オイル・手順以外で自己流整備しない。
            </li>
            <li>
              <strong>タンク・排出経路</strong>
              ：回収タンクを一杯にしたまま使わない。
            </li>
          </ol>

          <H2 id="safety">安全上の注意</H2>
          <ul className={cls.list}>
            {safetyItems.map((item) => (
              <li key={item}>
                <Mark>{item}</Mark>
              </li>
            ))}
          </ul>

          <H2 id="mistakes">エアリベッターで失敗しやすい8例</H2>
          <div className="my-6 grid gap-4 sm:grid-cols-2">
            {failExamples.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-gray-300 p-4"
              >
                <h3 className="text-lg font-black text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-[15px] leading-7 text-gray-900">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <H2 id="checklist">購入前チェックリスト</H2>
          <ul className="my-6 space-y-2">
            {checklist.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-[16px] leading-7 text-gray-900"
              >
                <span
                  aria-hidden="true"
                  className="mt-1 inline-block h-4 w-4 shrink-0 rounded border-2 border-gray-900"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <H2 id="faq">よくある質問</H2>
          <div className="my-6 space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q}>
                <h3 className={cls.faqQ}>{faq.q}</h3>
                <P>{faq.a}</P>
              </div>
            ))}
          </div>

          <H2 id="summary">
            まとめ｜エアリベッターは「一番強い機種」ではなく作業条件で選ぶ
          </H2>
          <P>
            エアリベッター選びでは、最大径が大きいほど良い、空気圧が高いほど良い、高価な機種ほど全部できる、という選び方はしません。
          </P>
          <ol className="my-4 list-decimal space-y-2 pl-6 text-[17px] leading-[1.95] tracking-[0.04em] text-gray-900">
            <li>
              <Mark>リベット径</Mark>
            </li>
            <li>
              <Mark>リベット材質</Mark>
            </li>
            <li>
              <Mark>締結本数</Mark>
            </li>
            <li>
              <Mark>コンプレッサー性能</Mark>
            </li>
            <li>
              <Mark>重量・取り回し</Mark>
            </li>
          </ol>
          <P>
            φ2.4～4.8mmを幅広く連続締結するならR2A1。6.4mmまで必要ならR2A2。バキューム片手作業を重視するならTAR-270。導入コストを抑えてエア式を始めるならAstroも比較候補です。コンプレッサーがない・現場移動が多いなら、R2B1 / R2B2のようなコードレスも比較します。
          </P>
          <P>
            「エアリベッター」で検索した時に商品価格だけを比べるのではなく、
            <strong>自社のリベットと作業環境に適合するか</strong>
            まで確認して選んでください。
          </P>

          <FinalCtaBlock />

          <section className="my-10">
            <h2 className="text-2xl font-black text-gray-900 sm:text-3xl">
              関連記事
            </h2>
            <ul className="mt-4 space-y-3">
              {relatedArticles.map((a) => (
                <li key={a.href}>
                  <Link
                    href={a.href}
                    className="text-[16px] font-bold text-gray-900 underline underline-offset-4"
                  >
                    {a.label}
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
