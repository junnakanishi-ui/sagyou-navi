import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";
import {
  ImageLightboxGallery,
  ZoomableFigure,
} from "./image-lightbox";
import productData from "./product-data.json";

const SLUG = "cart-handle-hand-pinch-prevention-guide";
const SITE_URL = "https://www.sagyou-navi.com";
const CANONICAL = `${SITE_URL}/articles/${SLUG}`;
const ARTICLE_TITLE = productData.title;
const SHORT_TITLE = "台車で手を挟む事故を防ぐには？";
const DESCRIPTION = productData.description;
const PUBLISHED = productData.published;
const IMG = (file: string) => `/images/articles/${SLUG}/${file}`;
const PROD = (file: string) => `/images/articles/${SLUG}/products/${file}`;
const EXT_REL = "nofollow sponsored noopener noreferrer";
const UTM = "utm_source=sagyou_navi";

function buildUrl(url: string, utm: string = UTM): string {
  if (!url) return url;
  const hashIndex = url.indexOf("#");
  const append = (base: string) =>
    `${base}${base.includes("?") ? "&" : "?"}${utm}`;
  if (hashIndex === -1) return append(url);
  return `${append(url.slice(0, hashIndex))}${url.slice(hashIndex)}`;
}

const mainProduct = {
  ...productData.mainProduct,
  href: buildUrl(productData.mainProduct.url),
  img: PROD(productData.mainProduct.imageFile),
};

const categoryCtas = productData.categoryCtas.map((cta) => ({
  ...cta,
  href: buildUrl(cta.url),
}));

const ctaByName = Object.fromEntries(
  categoryCtas.map((cta) => [cta.name, cta])
) as Record<string, (typeof categoryCtas)[number]>;

type RepProduct = (typeof productData.representativeProducts)[number] & {
  href: string;
  img: string;
};

const representativeProducts: RepProduct[] =
  productData.representativeProducts.map((product) => ({
    ...product,
    href: buildUrl(product.url),
    img: PROD(`${product.code}.jpg`),
  }));

const productsByType = (type: string) =>
  representativeProducts.filter((product) => product.type === type);

const installImages = [
  {
    src: IMG("otetemamorukun-product.jpg"),
    alt: "台車用緩衝材おててまもるくんの商品写真（トラ柄のロール状緩衝材）",
    caption: "STEP0｜商品単体。トラ柄で視認しやすく、危険箇所の目印にもなる",
  },
  {
    src: IMG("otetemamorukun-install-01.jpg"),
    alt: "台車ハンドルへおててまもるくんを挟み込んで取り付ける様子",
    caption: "STEP1｜ハンドル部に挟み込む",
  },
  {
    src: IMG("otetemamorukun-install-02.jpg"),
    alt: "台車ハンドルへ装着後に剥離シールをはがして固定する様子",
    caption: "STEP2｜剥離シールをはがして固定する",
  },
  {
    src: IMG("otetemamorukun-installed-closeup.jpg"),
    alt: "台車ハンドル角部に装着したおててまもるくんのアップ写真",
    caption: "STEP3｜装着後の位置を確認する（角部が特に重要）",
  },
  {
    src: IMG("otetemamorukun-cart-corners.jpg"),
    alt: "カゴ台車の四隅におててまもるくんを装着した使用例",
    caption: "活用例｜接触しやすい四隅・角部に先回りして保護を入れる",
  },
  {
    src: IMG("otetemamorukun-wall-protection.jpg"),
    alt: "柱や壁に近づいたときに緩衝材が先に当たって手を保護しているイメージ",
    caption: "効果イメージ｜壁・柱との間に空間ができ、手が直接挟まれにくくなる",
  },
] as const;

const safetyIssueRows = [
  {
    issue: "手を挟みそうになる",
    scene: "柱際・壁際・出入口・エレベーター前",
    action: "ハンドル部の緩衝材、持ち位置ルール",
    product: mainProduct,
    productLabel: "おててまもるくん",
  },
  {
    issue: "台車が勝手に動く",
    scene: "斜路・一時停止・積み込み待ち",
    action: "ストッパー付き台車へ見直し",
    product: representativeProducts.find((p) => p.code === "190475")!,
    productLabel: "ストッパー付き台車",
  },
  {
    issue: "荷物が大きく視界が悪い",
    scene: "段ボール・資材大量搬送",
    action: "大型台車・金網台車・導線見直し",
    product: representativeProducts.find((p) => p.code === "159749")!,
    productLabel: "カルティオビッグ",
  },
  {
    issue: "小回りが利かない",
    scene: "狭い通路・施設内",
    action: "小型台車・平台車へ分ける",
    product: representativeProducts.find((p) => p.code === "228337")!,
    productLabel: "こまわり君",
  },
] as const;

const cartTypeRows = [
  {
    type: "樹脂製台車",
    load: "日用品、箱物、一般資材",
    site: "倉庫、店舗、施設",
    feature: "軽く扱いやすい",
    cta: "樹脂製台車一覧",
  },
  {
    type: "折りたたみ台車",
    load: "日常搬送",
    site: "保管スペースが限られる現場",
    feature: "収納しやすい",
    cta: "折りたたみ台車一覧",
  },
  {
    type: "平台車",
    load: "コンテナ、ケース",
    site: "低床搬送",
    feature: "荷物の自由度が高い",
    cta: "平台車一覧",
  },
  {
    type: "鋼鉄製台車",
    load: "重量物",
    site: "工場、重荷重現場",
    feature: "剛性が高い",
    cta: "鋼鉄製台車一覧",
  },
  {
    type: "金網台車",
    load: "荷崩れしやすい荷物",
    site: "倉庫、物流",
    feature: "囲い付きで安定",
    cta: "金網台車一覧",
  },
  {
    type: "ストッパー付き台車",
    load: "仮置きが多い荷物",
    site: "出入口、傾斜部",
    feature: "停止時の安全性向上",
    cta: "ストッパー付き台車一覧",
  },
  {
    type: "コンテナ台車",
    load: "通い箱、オリコン",
    site: "物流、工場",
    feature: "ケース運用に便利",
    cta: "コンテナ台車一覧",
  },
] as const;

const useCaseGroups = [
  {
    title: "樹脂製台車｜屋内搬送の基本形",
    lead: "倉庫内の日常搬送、店舗バックヤード、施設内搬送の定番。まずここを基準に、必要ならストッパー付きや大型へ広げると考えやすいです。",
    types: ["樹脂製台車"],
    cta: "樹脂製台車一覧",
  },
  {
    title: "ストッパー付き台車｜一時停止や傾斜に配慮したい現場",
    lead: "出入口付近の仮置き、傾斜、作業途中の停止が多い現場では、停止保持ができる台車のほうが事故を減らしやすいです。",
    types: ["ストッパー付き台車", "小型台車"],
    cta: "ストッパー付き台車一覧",
  },
  {
    title: "大型樹脂製台車｜荷量が多い現場",
    lead: "大箱の搬送やまとめ運びでは大型が向きます。ただし視界と通路幅の管理を前提に選ぶことが重要です。",
    types: ["大型樹脂製台車"],
    cta: "樹脂製台車一覧",
  },
  {
    title: "折りたたみ台車｜省スペース保管を重視",
    lead: "使用頻度は高いが保管スペースが限られる現場、多拠点で共有したい現場に向きます。",
    types: ["折りたたみ台車"],
    cta: "折りたたみ台車一覧",
  },
  {
    title: "金網台車・多段台車｜荷崩れ対策・仕分け",
    lead: "段ボールの多段積み、荷崩れ抑制、ピッキングや仕分け作業では囲い付き・段付きが有効です。",
    types: ["金網台車", "多段台車"],
    cta: "金網台車一覧",
  },
] as const;

const checkItems = [
  "狭い通路・柱・壁際を通る搬送ルートがある",
  "台車のハンドル角部でヒヤリハットが出ている",
  "カゴ台車や樹脂台車の使用台数が多い",
  "壁や設備への接触傷も減らしたい",
  "安全対策品だけでなく、台車本体も見直したい",
  "現場ごとに台車種類が混在し、選定基準が曖昧",
  "ハンドル径と装着位置を確認できる",
  "停止が多い場所でストッパーの要否を判断した",
] as const;

const faqs = [
  {
    q: "おててまもるくんはどんな事故対策に向いていますか？",
    a: "台車やカゴ台車のハンドル部で起こる、手の挟まれ・接触時の衝撃・壁や柱への接触対策に向いています。狭い通路や柱際を通る現場ほど効果を実感しやすい商品です。",
  },
  {
    q: "工具なしで取り付けできますか？",
    a: "提供画像を見る限り、ハンドルへの挟み込みとシール固定の流れで比較的簡単に装着しやすい商品です。導入時は装着対象の形状、清掃状態、ハンドル径を確認してください。",
  },
  {
    q: "どんな台車にも使えますか？",
    a: "ハンドル形状や径によって相性が分かれるため、事前確認が必要です。特に内径・外径・装着位置の確認をおすすめします。パイプ形状のハンドルを持つ台車・カゴ台車との相性がわかりやすいです。",
  },
  {
    q: "台車は何を基準に選べばいいですか？",
    a: "荷物の重さ、通路幅、段差の有無、停止頻度、荷崩れしやすさで選ぶのが基本です。記事内の比較表を目安に、まず用途を決めてから型を絞ると失敗しにくいです。",
  },
  {
    q: "ストッパー付き台車は必要ですか？",
    a: "傾斜がある場所、出入口付近、作業途中で停止する場面が多い現場では、ストッパー付きのメリットが大きいです。手挟み対策とは別に、停止時の安全を底上げできます。",
  },
] as const;

const relatedArticles = [
  {
    href: "/articles/commercial-cart-selection-guide",
    label: "運搬台車の業務用の選び方｜用途別のおすすめタイプ",
  },
  {
    href: "/articles/kartio-folding-fixed-selection",
    label: "カルティオは折りたたみ・固定どっちを選ぶ？",
  },
  {
    href: "/articles/side-handle-cart-guide",
    label: "サイドハンドル台車とは？長尺物・箱物の運び方",
  },
  {
    href: "/articles/grand-cart-box-trolley-selection",
    label: "グランカート・ボックストロリーの選び方",
  },
] as const;

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
        url: `${SITE_URL}${IMG("cart-handle-safety-hero.jpg")}`,
        width: 1536,
        height: 1024,
        alt: "台車ハンドルの安全対策と緩衝材導入をイメージする写真",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: ARTICLE_TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}${IMG("cart-handle-safety-hero.jpg")}`],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: ARTICLE_TITLE,
  description: DESCRIPTION,
  mainEntityOfPage: CANONICAL,
  image: [`${SITE_URL}${IMG("cart-handle-safety-hero.jpg")}`],
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

function ExtButton({
  href,
  children,
  tone = "amber",
}: {
  href: string;
  children: ReactNode;
  tone?: "amber" | "dark" | "slate";
}) {
  const toneClass =
    tone === "dark"
      ? "bg-slate-900 hover:bg-slate-800"
      : tone === "slate"
        ? "bg-slate-700 hover:bg-slate-600"
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

function MainProductCta({
  heading = "すぐ見たい方向け｜メイン商品はこちら",
}: {
  heading?: string;
}) {
  return (
    <aside className="my-10 overflow-hidden rounded-3xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 via-white to-slate-50 shadow-sm">
      <div className="grid gap-0 md:grid-cols-[220px_1fr]">
        <div className="relative min-h-[220px] bg-white md:min-h-full">
          <Image
            src={mainProduct.img}
            alt={`${mainProduct.name}の商品画像`}
            fill
            sizes="220px"
            className="object-contain p-5"
            priority
          />
        </div>
        <div className="p-5 md:p-7">
          <p className="text-sm font-bold text-amber-800">{heading}</p>
          <h3 className={cls.ctaH3}>{mainProduct.name}</h3>
          <p className={`${cls.bodySm} mt-2`}>
            ハンドルと壁・柱の間に空間をつくり、
            <Mark>手の挟まれ・接触時の衝撃・設備の傷</Mark>
            をまとめて対策しやすい台車用緩衝材です。
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {["外径φ63mm", "内径φ23mm", "長さ95mm", "10個セット"].map(
              (feature) => (
                <li
                  key={feature}
                  className="rounded-full bg-white px-3 py-1 text-sm font-bold text-gray-900 ring-1 ring-amber-200"
                >
                  {feature}
                </li>
              )
            )}
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <ExtButton href={mainProduct.href}>商品ページを見る →</ExtButton>
            <ExtButton href={ctaByName["台車用緩衝材一覧"].href} tone="dark">
              台車用緩衝材一覧を見る →
            </ExtButton>
          </div>
        </div>
      </div>
    </aside>
  );
}

function ProductCard({ product }: { product: RepProduct }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-300 bg-white shadow-sm">
      <div className="relative aspect-[4/3] bg-gray-50">
        <Image
          src={product.img}
          alt={`${product.name}の商品画像`}
          fill
          sizes="(max-width: 768px) 100vw, 360px"
          className="object-contain p-4"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-bold text-amber-800">{product.type}</p>
        <h3 className="mt-2 text-lg font-black leading-snug tracking-wide text-gray-900">
          {product.name}
        </h3>
        <dl className="mt-3 space-y-2 text-[15px] leading-7 text-gray-900">
          <div>
            <dt className="font-bold">向く用途</dt>
            <dd>{product.useCase}</dd>
          </div>
          <div>
            <dt className="font-bold">こんな人向け</dt>
            <dd>{product.forWhom}</dd>
          </div>
        </dl>
        <div className="mt-auto pt-5">
          <ExtButton href={product.href}>商品を見る →</ExtButton>
        </div>
      </div>
    </article>
  );
}

function ProductTableCell({
  product,
  label,
}: {
  product: { href: string; img: string; name: string };
  label?: string;
}) {
  return (
    <ExtLink
      href={product.href}
      className="group flex min-w-[16rem] items-start gap-3 rounded-lg p-1 transition hover:bg-amber-50"
    >
      <span className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-white">
        <Image
          src={product.img}
          alt={`${label ?? product.name}の商品画像`}
          fill
          sizes="80px"
          className="object-contain p-1.5 transition group-hover:scale-105"
        />
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-bold leading-snug text-gray-900 underline decoration-2 underline-offset-4">
          {label ?? product.name}
        </span>
      </span>
    </ExtLink>
  );
}

function TableWrap({ children }: { children: ReactNode }) {
  return (
    <div className="my-5 overflow-x-auto rounded-xl border border-gray-300">
      {children}
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
              台車・安全対策 / 2026年8月12日更新
            </div>
            <h1 className={cls.h1}>{ARTICLE_TITLE}</h1>
            <P>
              台車やカゴ台車を使う現場では、荷物の落下や腰痛だけでなく、
              <Mark>ハンドルと壁・柱・設備の間に手を挟む</Mark>
              ヒヤリハットも少なくありません。狭い通路を曲がるとき、エレベーターや出入口を通るとき、荷物で前が見えにくいときは、ハンドル角部が壁や柱に近づきやすくなります。
            </P>
            <P>
              この記事では、台車の手挟み事故を減らす考え方を整理したうえで、主力商品の
              <strong>「台車用緩衝材 おててまもるくん 20t トラ柄10個セット」</strong>
              を中心に、用途別の台車選びまでまとめて解説します。
            </P>
            <ZoomableFigure
              src={IMG("cart-handle-safety-hero.jpg")}
              alt="台車ハンドルの安全対策と緩衝材導入をイメージする写真"
              priority
            />
          </header>

          <section className="mt-8 rounded-2xl border-2 border-amber-400 bg-slate-950 p-6 text-white md:p-8">
            <p className="text-sm font-bold text-amber-300">
              Q. 台車で手を挟む事故はどう防ぐ？
            </p>
            <p className="mt-3 text-[17px] leading-8">
              A. まずは
              <strong className="text-amber-300">
                「危険な持ち方を減らす」「ハンドルと壁・柱の間に空間をつくる」「現場に合った台車を選ぶ」
              </strong>
              の3点が基本です。とくに狭い通路や柱際を通る現場では、ハンドルに緩衝材を付けると、手挟み・接触・設備の傷防止をまとめて対策しやすくなります。
            </p>
            <ul className="mt-5 space-y-3 text-[16px] leading-8 md:text-[17px]">
              <li>
                狭い通路・柱際・エレベーター前では、台車ハンドル部の手挟み事故が起きやすい
              </li>
              <li>
                「おててまもるくん」はハンドルと壁の間に空間をつくる安全対策品
              </li>
              <li>
                台車本体も用途別に見直すと、事故防止と作業効率の両立がしやすい
              </li>
            </ul>
          </section>

          <H2 id="priority-check">まずチェック｜こんな現場は手挟み対策を優先したい</H2>
          <ul className={cls.list}>
            <li>倉庫内の通路幅が狭い</li>
            <li>カゴ台車や樹脂台車の使用頻度が高い</li>
            <li>柱・壁・棚の間を頻繁に通る</li>
            <li>台車で設備や壁をこすってしまうことがある</li>
            <li>台車のハンドル角部を持つ癖がある</li>
            <li>「ヒヤッとした」経験はあるが、まだ事故にはなっていない</li>
          </ul>
          <P>
            1つでも当てはまるなら、作業ルールの見直しに加えて、
            <Mark>物理的な安全対策品</Mark>
            の検討がおすすめです。
          </P>

          <MainProductCta />

          <H2 id="why-accidents">台車で手を挟む事故はなぜ起きるのか</H2>
          <ZoomableFigure
            src={IMG("cart-aisle-risk-scene.jpg")}
            alt="狭い通路で台車と壁の距離に注意するイメージ"
          />

          <section className="my-8 grid gap-4">
            {[
              {
                title: "壁・柱・棚とハンドル角部の距離が近い",
                body: (
                  <>
                    台車事故というと「荷崩れ」や「足をひく」イメージが強いかもしれませんが、実際の現場では
                    <Mark>ハンドルと障害物の間に手を挟みそうになる</Mark>
                    ケースもよくあります。持ち方だけでなく、持ち手の位置と障害物の関係が重要です。
                  </>
                ),
              },
              {
                title: "荷物で前方が見えにくい",
                body: (
                  <>
                    段ボールや資材を高く積むと、壁や柱との距離感がつかみにくくなります。とくにカゴ台車や大型台車は曲がるときに外側が膨らみやすいため、ハンドル角部が先に接触しやすくなります。
                  </>
                ),
              },
              {
                title: "台車サイズが搬送導線に合っていない",
                body: (
                  <>
                    台車が大きすぎると切り返しが増え、狭い場所での接触が増えます。反対に、荷物に対して小さすぎる台車は荷崩れや視界不良を招きます。安全対策品だけでなく、
                    <Mark>台車本体の選び方</Mark>
                    も事故防止に直結します。
                  </>
                ),
              },
              {
                title: "ルールだけでは防ぎ切れない",
                body: (
                  <>
                    「ハンドルの中央を持つ」「柱際で無理に曲がらない」といったルールは重要です。ただ、忙しい現場では注意だけでゼロ災害を目指すのは難しいのが現実です。そのため、
                    <Mark>危険行動をしにくくする物理対策</Mark>
                    として、ハンドル部に緩衝材を付ける考え方が有効です。
                  </>
                ),
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-300 bg-slate-50 p-5 md:p-6"
              >
                <p className="text-sm font-bold text-amber-800">
                  危険要因 {index + 1}
                </p>
                <h3 className="mt-2 text-xl font-black tracking-wide text-gray-900 sm:text-2xl">
                  {item.title}
                </h3>
                <p className={`${cls.bodySm} mt-3`}>{item.body}</p>
              </div>
            ))}
          </section>

          <H2 id="main-product">まず導入したい安全対策｜おててまもるくんとは</H2>
          <P>
            <strong>おててまもるくん</strong>
            は、台車やカゴ台車のハンドル部に取り付ける緩衝材です。台車運搬時の安全対策品として設計されており、握り手と柱や壁との空間を確保しやすくなります。
          </P>

          <section className="my-8 rounded-3xl border-2 border-slate-900 bg-white p-5 md:p-7">
            <p className="text-sm font-bold text-amber-800">
              主力商品のメリット
            </p>
            <h3 className="mt-2 text-2xl font-black tracking-wide text-gray-900 sm:text-3xl">
              手挟み・接触・設備保護をまとめて見直しやすい
            </h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "手挟み対策に直結",
                  body: "ハンドル外周に装着すると、壁や柱に近づいたときに先に緩衝材が当たりやすくなり、手が直接挟まれにくくなります。",
                },
                {
                  title: "壁・柱・設備の保護",
                  body: "人のケガ防止だけでなく、接触による傷の軽減にも役立ちます。建物側の保護としても相性がよい商品です。",
                },
                {
                  title: "素材がやわらかい",
                  body: "発泡ポリエチレン＋PVC表皮の柔らかい発泡体で、接触時のショック軽減を考えやすい仕様です。",
                },
                {
                  title: "トラ柄で視認しやすい",
                  body: "黄色×黒のトラ柄は現場で目立ち、「ここは接触しやすい場所」という注意喚起にもつながります。",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-amber-200 bg-amber-50/70 p-4"
                >
                  <h4 className="text-lg font-black text-gray-900">
                    {item.title}
                  </h4>
                  <p className={`${cls.bodySm} mt-2`}>{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          <H3>仕様</H3>
          <TableWrap>
            <table className={cls.table}>
              <tbody>
                {[
                  ["商品名", mainProduct.name],
                  ["品番", "6300065108"],
                  ["材質", "発泡ポリエチレン、PVC（表皮）"],
                  ["外径", "φ63mm"],
                  ["内径", "φ23mm"],
                  ["長さ", "95mm"],
                  ["入数", "10個"],
                  ["用途", "台車運搬時の安全対策品"],
                ].map(([label, value]) => (
                  <tr key={label}>
                    <th className={cls.th}>{label}</th>
                    <td className={cls.td}>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableWrap>

          <H3>どんな台車に向く？</H3>
          <ul className={cls.list}>
            <li>カゴ台車</li>
            <li>樹脂製台車</li>
            <li>折りたたみ台車</li>
            <li>台車ハンドル部がパイプ形状の運搬台車</li>
          </ul>
          <P>
            ※導入前には、必ずハンドル径と装着位置を確認してください。
          </P>

          <H2 id="install">取り付けは簡単？画像でわかる装着手順</H2>
          <P>
            流れは大きく3ステップです。特別な大型治具を必要としにくいため、現場でも比較的導入しやすい点が実務向きです。
          </P>
          <ol className="my-4 list-decimal space-y-2 pl-6 text-[17px] leading-[1.95] tracking-[0.04em] text-gray-900">
            <li>ハンドル部に挟み込む</li>
            <li>剥離シールをはがして固定する</li>
            <li>装着後の位置を確認する</li>
          </ol>
          <div className="my-8">
            <ImageLightboxGallery
              images={[...installImages]}
              className="grid gap-4 sm:grid-cols-2"
              aspectClassName="aspect-square"
              objectFit="contain"
            />
          </div>
          <P>
            カゴ台車では、四隅や接触しやすい角部に先回りして保護を入れる考え方が実務的です。柱に近づけたときに緩衝材が先に当たるイメージが分かると、「空間確保」の意味も直感的に理解できます。
          </P>

          <MainProductCta heading="装着手順を確認したら、商品仕様もチェック" />

          <aside className="my-8 rounded-2xl border-2 border-amber-300 bg-amber-50 p-5 md:p-6">
            <p className="mb-4 text-xl font-extrabold text-gray-900">
              併せて用途別の台車も見る
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              <ExtButton href={ctaByName["樹脂製台車一覧"].href}>
                樹脂製台車一覧 →
              </ExtButton>
              <ExtButton href={ctaByName["折りたたみ台車一覧"].href} tone="dark">
                折りたたみ台車一覧 →
              </ExtButton>
              <ExtButton href={ctaByName["平台車一覧"].href} tone="slate">
                平台車一覧 →
              </ExtButton>
            </div>
          </aside>

          <H2 id="safety-table">安全課題別に見る｜どんな対策が向いている？</H2>
          <TableWrap>
            <table className={cls.table}>
              <thead>
                <tr>
                  <th className={cls.th}>安全課題</th>
                  <th className={cls.th}>起きやすい場面</th>
                  <th className={cls.th}>有効な対策</th>
                  <th className={cls.th}>関連商品</th>
                </tr>
              </thead>
              <tbody>
                {safetyIssueRows.map((row) => (
                  <tr key={row.issue}>
                    <td className={cls.td}>
                      <Mark>{row.issue}</Mark>
                    </td>
                    <td className={cls.td}>{row.scene}</td>
                    <td className={cls.td}>{row.action}</td>
                    <td className={cls.td}>
                      <ProductTableCell
                        product={row.product}
                        label={row.productLabel}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableWrap>

          <H2 id="best-sites">こんな現場で特に相性がよい</H2>
          <div className="my-6 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "倉庫・物流センター",
                body: "棚間通路や出荷ヤードでは、台車が柱やラックに近づく場面が多くあります。カゴ台車や樹脂製台車を多用する現場では、ハンドル角部の保護を早めに入れる価値があります。",
              },
              {
                title: "工場内搬送",
                body: "材料・仕掛品・治具を運ぶ場面では、壁だけでなく設備や機械への接触も問題になります。ケガ防止だけでなく、設備保護としても導入しやすい商品です。",
              },
              {
                title: "店舗・施設内搬送",
                body: "病院、介護施設、オフィス、商業施設などでは見た目の傷防止も重要です。建物を傷つけたくない現場では、緩衝材付きの運用が有効です。",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-300 bg-white p-5 shadow-sm"
              >
                <h3 className="text-xl font-black tracking-wide text-gray-900">
                  {item.title}
                </h3>
                <p className={`${cls.bodySm} mt-3`}>{item.body}</p>
              </div>
            ))}
          </div>

          <H2 id="cart-selection">関連商品｜用途別に台車を選ぶ</H2>
          <ZoomableFigure
            src={IMG("cart-types-comparison-scene.jpg")}
            alt="樹脂製台車や折りたたみ台車などを比較するイメージ"
          />
          <P>
            おててまもるくんは安全対策品ですが、台車本体が現場に合っていないと事故リスクは残ります。ここでは用途別に代表的な台車を整理します。
          </P>

          {useCaseGroups.map((group) => {
            const cards = group.types.flatMap((type) => productsByType(type));
            return (
              <section key={group.title} className="mt-10">
                <H3>{group.title}</H3>
                <P>{group.lead}</P>
                <div className="my-6 grid gap-4 md:grid-cols-2">
                  {cards.map((product) => (
                    <ProductCard key={product.code} product={product} />
                  ))}
                </div>
                <ExtButton href={ctaByName[group.cta].href}>
                  {group.cta}を見る →
                </ExtButton>
              </section>
            );
          })}

          <H3>平台車・コンテナ台車｜低床・下置き搬送</H3>
          <P>
            コンテナやケース物を複数まとめて運ぶ、低い位置での搬送が中心の現場では、平台車やコンテナ台車が候補になります。
          </P>
          <div className="my-6 flex flex-wrap gap-3">
            <ExtButton href={ctaByName["平台車一覧"].href}>
              平台車一覧 →
            </ExtButton>
            <ExtButton href={ctaByName["コンテナ台車一覧"].href} tone="dark">
              コンテナ台車一覧 →
            </ExtButton>
            <ExtButton
              href={ctaByName["キャスター・オプション一覧"].href}
              tone="slate"
            >
              キャスター・オプション一覧 →
            </ExtButton>
          </div>

          <H2 id="compare">台車タイプ比較表</H2>
          <TableWrap>
            <table className={cls.table}>
              <thead>
                <tr>
                  <th className={cls.th}>タイプ</th>
                  <th className={cls.th}>向く荷物</th>
                  <th className={cls.th}>向く現場</th>
                  <th className={cls.th}>特徴</th>
                  <th className={cls.th}>CTA</th>
                </tr>
              </thead>
              <tbody>
                {cartTypeRows.map((row) => (
                  <tr key={row.type}>
                    <td className={cls.td}>
                      <strong>{row.type}</strong>
                    </td>
                    <td className={cls.td}>{row.load}</td>
                    <td className={cls.td}>{row.site}</td>
                    <td className={cls.td}>{row.feature}</td>
                    <td className={cls.td}>
                      <ExtLink
                        href={ctaByName[row.cta].href}
                        className="font-bold underline underline-offset-4"
                      >
                        {row.cta}
                      </ExtLink>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableWrap>

          <H2 id="product-compare">代表商品比較表</H2>
          <TableWrap>
            <table className={cls.table}>
              <thead>
                <tr>
                  <th className={cls.th}>商品</th>
                  <th className={cls.th}>タイプ</th>
                  <th className={cls.th}>向く用途</th>
                  <th className={cls.th}>こんな人向け</th>
                </tr>
              </thead>
              <tbody>
                {representativeProducts.map((product) => (
                  <tr key={product.code}>
                    <td className={cls.td}>
                      <ProductTableCell product={product} />
                    </td>
                    <td className={cls.td}>{product.type}</td>
                    <td className={cls.td}>{product.useCase}</td>
                    <td className={cls.td}>{product.forWhom}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableWrap>

          <H2 id="checklist">導入前に確認したいチェックポイント</H2>
          <ZoomableFigure
            src={IMG("cart-safety-checklist-scene.jpg")}
            alt="台車搬送ルートと安全対策を確認するイメージ"
          />
          <div className="my-6 rounded-2xl border-2 border-slate-900 bg-white p-5 md:p-6">
            <p className="text-sm font-bold text-amber-800">
              法人向けチェックリスト
            </p>
            <ul className="mt-4 space-y-3">
              {checkItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[17px] leading-8 text-gray-900">
                  <span
                    aria-hidden="true"
                    className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 border-slate-900"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                title: "1. ハンドル径は合うか",
                body: "おててまもるくんは内径・外径の仕様があるため、まずは対象台車のハンドル径を確認しましょう。",
              },
              {
                title: "2. どこで接触しているか",
                body: "柱の角か、壁の面か、エレベーター前か、設備の角かを特定すると、装着位置や必要数量を決めやすくなります。",
              },
              {
                title: "3. 台車そのものが現場に合っているか",
                body: "狭い通路に大型台車を使っているなら、小型台車へ分けるほうが事故を減らしやすいケースもあります。",
              },
              {
                title: "4. ストッパーが必要か",
                body: "停止が多い現場、傾斜がある場所、一時置きが多い現場では、ストッパー付き台車のほうが安心です。",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-300 bg-slate-50 p-5"
              >
                <h3 className="text-lg font-black text-gray-900">{item.title}</h3>
                <p className={`${cls.bodySm} mt-2`}>{item.body}</p>
              </div>
            ))}
          </div>

          <H2 id="faq">よくある質問</H2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-2xl border border-gray-300 bg-white p-5 shadow-sm"
              >
                <h3 className={cls.faqQ}>Q. {faq.q}</h3>
                <p className={cls.bodySm}>A. {faq.a}</p>
              </div>
            ))}
          </div>

          <H2 id="summary">まとめ</H2>
          <P>
            台車の手挟み事故は、作業者の注意不足だけで起こるわけではありません。
            <Mark>狭い通路、柱や壁、荷物で見えにくい視界、台車サイズのミスマッチ</Mark>
            といった現場要因が重なることで起きやすくなります。
          </P>
          <P>改善の基本は次の3つです。</P>
          <ol className="my-4 list-decimal space-y-2 pl-6 text-[17px] leading-[1.95] tracking-[0.04em] text-gray-900">
            <li>危険な持ち方を減らす</li>
            <li>ハンドルまわりに物理対策を入れる</li>
            <li>現場に合った台車を選ぶ</li>
          </ol>
          <P>
            その中でも、おててまもるくんは台車ハンドル部に装着するだけで、手挟み・接触・設備保護をまとめて見直しやすい実務的な商品です。まずは主力商品でハンドルまわりの安全対策を始め、必要に応じて樹脂製台車、折りたたみ台車、平台車、金網台車、ストッパー付き台車などへ見直しを広げていくと、現場全体の安全性と作業性を両立しやすくなります。
          </P>

          <MainProductCta heading="まとめ｜まずはハンドルまわりの安全対策から" />

          <aside className="my-10 rounded-2xl border-2 border-slate-900 bg-slate-50 p-5 md:p-6">
            <p className="mb-4 text-xl font-extrabold text-gray-900">
              カテゴリからまとめて探す
            </p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {categoryCtas.map((cta) => (
                <ExtButton
                  key={cta.name}
                  href={cta.href}
                  tone={
                    cta.name === "台車用緩衝材一覧"
                      ? "amber"
                      : cta.name.includes("ストッパー")
                        ? "dark"
                        : "slate"
                  }
                >
                  {cta.name} →
                </ExtButton>
              ))}
            </div>
          </aside>

          <section className="mt-12 border-t border-gray-300 pt-8">
            <H3>関連記事</H3>
            <ul className="space-y-3">
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
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
