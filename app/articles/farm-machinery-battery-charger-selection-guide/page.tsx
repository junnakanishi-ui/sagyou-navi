import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";
import productData from "./product-data.json";

const SLUG = "farm-machinery-battery-charger-selection-guide";
const SITE_URL = "https://www.sagyou-navi.com";
const CANONICAL = `${SITE_URL}/articles/${SLUG}`;
const SEO_TITLE =
  "農機のバッテリー充電器の選び方｜12V・24VとAhで選ぶ【2026年】";
const H1 =
  "農機のバッテリー充電器の選び方｜トラクター・コンバインの12V/24V・Ah・セルスタート【2026年版】";
const SHORT_TITLE = "農機のバッテリー充電器の選び方";
const DESCRIPTION =
  "トラクター・コンバイン・田植機など農機のバッテリー充電器をどう選ぶか解説。12V/24V、バッテリー容量Ah、急速充電、セルスタート、長期保管の違いを整理し、日動工業NB-40・NB-50・NB-60・NB-120・NB-200を農機サイズ別に紹介します。";
const PUBLISHED = "2026-09-03";
const MODIFIED = "2026-09-03";
const HERO = "farm-machine-season-start-battery-check.webp";
const IMG = (file: string) => `/images/articles/${SLUG}/${file}`;
const PROD = (file: string) => `/images/articles/${SLUG}/products/${file}`;
const EXT_REL = "nofollow sponsored noopener noreferrer";

type FeaturedModel = (typeof productData.featuredModels)[number];

const byModel = Object.fromEntries(
  productData.featuredModels.map((p) => [p.model, p])
) as Record<string, FeaturedModel>;

const mainCta = productData.cta.main;
const secondaryCtas = productData.cta.secondary;

const decisions = [
  {
    n: "01",
    title: "バッテリー状態",
    body: "変形・破損・液漏れなどがないか。異常があれば安易に充電せず、取説・販売店・整備へ。",
  },
  {
    n: "02",
    title: "12V / 24V",
    body: "農機の大きさだけで決めず、バッテリー表示・取扱説明書・メーカー仕様で確認。",
  },
  {
    n: "03",
    title: "Ah",
    body: "同じ12Vでも26Ahと80Ahでは適合充電器が違う。メーカーの適合容量へ入るか確認。",
  },
  {
    n: "04",
    title: "充電 / セルスタート",
    body: "計画的な本充電か、その日の作業開始を急ぐ始動補助か。目的を分ける。",
  },
  {
    n: "05",
    title: "急速 / 維持",
    body: "シーズン前の短時間復帰か、オフシーズンの長期維持管理か。充電器のカテゴリが違う。",
  },
] as const;

const chargeOk = [
  "長期間使っていなかった",
  "セルモーターの回りが弱い",
  "バッテリーの外観に大きな異常がない",
  "インジケータ等で要充電状態が確認できる",
  "メーカー取説上、補充電できる状態",
] as const;

const replaceFirst = [
  "ケースが大きく変形している",
  "破損がある",
  "液漏れがある",
  "充電してもすぐ放電する",
  "端子や配線に異常がある",
  "バッテリー以外の始動系トラブルが疑われる",
] as const;

const checklist = [
  "農機の取扱説明書",
  "バッテリーの外観・破損",
  "12V / 24V",
  "バッテリー容量Ah",
  "バッテリー種類",
  "急速充電が必要か",
  "セルスタートが必要か",
  "長期維持充電が目的ではないか",
] as const;

const mistakes = [
  {
    title: "農機の大きさだけで12V/24Vを決める",
    body: "必ず実機仕様を確認します。小型だから12V、大型だから24Vと決めつけない。",
  },
  {
    title: "バッテリー上がり＝急速充電で解決と思う",
    body: "寿命や車両側の不具合なら、充電だけでは解決しません。",
  },
  {
    title: "セルスタートで始動したら充電完了と思う",
    body: "始動補助と本充電は別です。エンジンがかかっても十分な回復とは限りません。",
  },
  {
    title: "一番大きいNB-200を選ぶ",
    body: "21.7kgで50～200Ah向けです。小型農機だけなら過剰な場合があります。",
  },
  {
    title: "オフシーズン中ずっとNBシリーズを接続する",
    body: "NBシリーズには過充電防止回路がありません。長期維持は別カテゴリを検討します。",
  },
] as const;

const yearlyFlow = [
  {
    phase: "シーズン直前",
    need: "バッテリーが弱い。短時間で作業復帰させたい。",
    answer: "急速充電器・セルスタート付が候補。",
  },
  {
    phase: "シーズン中",
    need: "始動性が普段より悪い。",
    answer: "バッテリーだけでなく、端子・充電系統・車両側の点検も含めて確認。",
  },
  {
    phase: "シーズン終了",
    need: "長期保管へ入る。",
    answer: "機械メーカー指定の方法で充電・保管。",
  },
  {
    phase: "オフシーズン",
    need: "定期的に補充電が必要。",
    answer: "補充電周期は機械・バッテリーメーカー指示を優先。つなぎっぱなし用途は別カテゴリ。",
  },
] as const;

const shopRoles = [
  {
    title: "12Vの小型農機が中心",
    body: "NB-40 / 50 / 60。軽さならNB-40、26～80AhまでならNB-50、タイマー・充電能力ならNB-60。",
  },
  {
    title: "12Vと24Vが混在",
    body: "NB-120以上。大型農機の入庫があるなら、12V専用機だけでは不足します。",
  },
  {
    title: "大容量バッテリー・重機まで扱う",
    body: "NB-200。ただし重量21.7kgなので、整備場内の移動方法も考えます。",
  },
  {
    title: "1台で全部を賄わない",
    body: "最も大きい充電器を1台置くより、小型12V用＋大型12/24V用のように役割分担した方が使いやすい現場もあります。",
  },
] as const;

const faqs = [
  {
    q: "農機のバッテリー充電器は12Vと24Vどちらを選べばよいですか？",
    a: "搭載バッテリーと農機の取扱説明書を確認します。今回の日動NBシリーズではNB-40 / 50 / 60が12V専用、NB-120 / 200が12V/24V兼用です。",
  },
  {
    q: "トラクターのバッテリーは何Ahならどの充電器ですか？",
    a: "機種ではなく実際のバッテリー表示を確認してください。NBシリーズなら26～60AhはNB-40、26～80AhはNB-50/60、35～120AhはNB-120、50～200AhはNB-200がメーカー適合範囲です。",
  },
  {
    q: "農機のバッテリーが上がったらセルスタートだけで大丈夫ですか？",
    a: "セルスタートは始動補助です。始動できても十分な本充電が完了したとは限りません。機械・バッテリーの取扱説明書に従って補充電や点検を行います。",
  },
  {
    q: "長期間使わないトラクターのバッテリーはどうしますか？",
    a: "農機メーカーによって方法が異なります。ヤンマーは長期保管前の充電と定期的な充電を案内しています。具体的な周期は使用機械・バッテリーメーカーの指示を優先してください。",
  },
  {
    q: "NB-40とNB-60なら農機にはどちらがよいですか？",
    a: "どちらも12Vですが、NB-40は26～60Ah・4.5kg、NB-60は26～80Ah・セルスタート60A・12時間タイマーです。実バッテリー容量と運用で選びます。",
  },
  {
    q: "大型農機で24Vならどれを選びますか？",
    a: "今回掲載するモデルではNB-120とNB-200が12V/24Vに対応します。35～120AhならNB-120、50～200Ahの大容量まで扱うならNB-200が比較候補です。",
  },
  {
    q: "NBシリーズは全自動充電器ですか？",
    a: "いいえ。日動工業はNBシリーズについて過充電防止回路を搭載していないと案内しています。長期のつなぎっぱなし維持充電を目的とするなら、別の自動充電器カテゴリを検討します。",
  },
  {
    q: "NB-40の商品ページが2つありますが別商品ですか？",
    a: "どちらもNB-40です。別モデルとしては扱いません。",
  },
] as const;

const relatedArticles = [
  {
    href: "/articles/nichido-super-booster-battery-charger-guide",
    label:
      "日動スーパーブースターの選び方｜NB-40〜NB-200の型式比較（商品シリーズ比較）",
  },
  {
    href: "/articles/barn-floor-rubber-mat",
    label: "畜舎・牛舎の床ゴムマットの選び方",
  },
  {
    href: "/articles/greenhouse-entrance-mud-control",
    label: "ビニールハウス入口の泥汚れ対策",
  },
  {
    href: "/articles/farm-forest-bear-safety",
    label: "農地・山林作業のクマ対策用品",
  },
  {
    href: "/articles/grease-lubricator-selection",
    label: "グリース潤滑器の選び方",
  },
] as const;

const safetyNotes = [
  "鉛バッテリー周辺は火気・火花を避ける",
  "屋内の乾燥した換気のよい場所で使用する",
  "端子の接続順序など危険な作業手順は、必ず製品・バッテリーの取扱説明書に従う",
  "破損・液漏れのあるバッテリーは安易に充電せず、整備・販売店へ相談する",
  "充電器・バッテリー・農機のメーカー案内を最優先する",
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
        alt: "シーズン前にトラクターのバッテリー状態を確認するイメージ",
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
  keywords: productData.secondaryKeywords.join(", "),
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
      <figcaption className="border-t border-gray-200 bg-white px-4 py-3 text-sm leading-6 text-gray-900">
        {alt}
      </figcaption>
    </figure>
  );
}

function PrimaryCta({ href, label }: { href: string; label: string }) {
  return (
    <ExtLink
      href={href}
      className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-amber-600 px-5 py-3 text-center text-[15px] font-extrabold text-white transition hover:bg-amber-700 sm:w-auto"
    >
      {label}
    </ExtLink>
  );
}

function MidCta({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <section className="my-10 rounded-2xl border-2 border-gray-900 bg-gray-950 p-6 text-white md:p-8">
      <h2 className="text-2xl font-black sm:text-3xl">{title}</h2>
      <p className="mt-3 text-[16px] leading-7 text-gray-100">{body}</p>
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
  model,
  priority = false,
}: {
  model: string;
  priority?: boolean;
}) {
  const product = byModel[model];
  if (!product) return null;

  return (
    <article className="rounded-2xl border-2 border-gray-300 bg-white p-5 shadow-sm md:p-6">
      <div className="grid gap-5 md:grid-cols-[180px_1fr] md:items-start">
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
          <Image
            src={PROD(product.image)}
            alt={`日動工業 ${product.model}（スーパーブースター）の商品画像`}
            width={360}
            height={360}
            priority={priority}
            className="h-auto w-full object-contain p-3"
          />
        </div>
        <div>
          <span className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-950">
            {product.badge}
          </span>
          <h3 className="mt-3 text-[20px] font-extrabold leading-snug text-gray-900 md:text-[22px]">
            {product.model}
          </h3>
          <p className="mt-1 text-[15px] font-bold text-gray-900">
            {product.farmRole}
          </p>
          <dl className="mt-4 grid gap-2 text-[15px] leading-7 text-gray-900 sm:grid-cols-2">
            <div>
              <dt className="inline font-bold">電圧：</dt>
              <dd className="inline">
                <Mark>{product.specs.voltage}</Mark>
              </dd>
            </div>
            <div>
              <dt className="inline font-bold">適合容量：</dt>
              <dd className="inline">
                <Mark>{product.specs.battery}</Mark>
              </dd>
            </div>
            <div>
              <dt className="inline font-bold">連続充電：</dt>
              <dd className="inline">{product.specs.continuousCharge}</dd>
            </div>
            <div>
              <dt className="inline font-bold">セルスタート：</dt>
              <dd className="inline">{product.specs.cellStart}</dd>
            </div>
            <div>
              <dt className="inline font-bold">タイマー：</dt>
              <dd className="inline">{product.specs.timer}</dd>
            </div>
            <div>
              <dt className="inline font-bold">質量：</dt>
              <dd className="inline">{product.specs.weight}</dd>
            </div>
          </dl>
          <p className="mt-3 text-[15px] leading-7 text-gray-900">{product.note}</p>
          <p className="mt-3 rounded-lg border border-amber-200 bg-amber-50 p-3 text-[14px] leading-6 text-gray-900">
            <strong>購入前確認：</strong>
            {product.check}
          </p>
          <div className="mt-5">
            <PrimaryCta href={product.url} label={`${product.model}の商品ページを見る`} />
          </div>
        </div>
      </div>
    </article>
  );
}

function FinalCtaBlock() {
  return (
    <section className="my-12 rounded-2xl border-2 border-amber-300 bg-amber-50 p-6 md:p-8">
      <h2 className="text-2xl font-black text-gray-900 sm:text-3xl">
        農機に合う急速充電器を比較する
      </h2>
      <p className="mt-3 text-[16px] leading-7 text-gray-900">
        シーズン前の復帰・始動補助なら、実機の12V/24VとAhを確認したうえでスーパーブースターを比較してください。
      </p>
      <div className="mt-5">
        <PrimaryCta href={mainCta.url} label={mainCta.label} />
      </div>
      <h3 className="mt-8 text-xl font-black text-gray-900">関連用品</h3>
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
      <p className="mt-4 text-sm leading-6 text-gray-900">
        ※鉛バッテリー作業では、火気厳禁・換気・取扱説明書遵守を優先してください。破損・液漏れがある場合は充電せず整備へ相談してください。
      </p>
    </section>
  );
}

export default function Page() {
  const nb40Alt = byModel["NB-40"]?.alternateListing;

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
            <div className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-sm font-bold text-emerald-950">
              農機整備 / バッテリー管理 / 2026年9月3日更新
            </div>
            <h1 className={cls.h1}>{H1}</h1>
            <P>
              冬の間使っていなかったトラクターを動かそうとしたら、セルの回りが弱い。田植え前に田植機を出したがエンジンがかからない。コンバインのシーズン前点検で、バッテリーが十分に充電されていないことに気づいた——農機は自動車と違い、<Mark>数か月単位で使わない期間が生まれやすい</Mark>ため、シーズン前のバッテリー管理が重要です。
            </P>
            <P>
              ヤンマーもトラクターの長期保管について、バッテリーは使用しなくても自然放電するため、保管前に充電し、定期的に補充電するよう案内しています。一方で「農機
              バッテリー充電器」を探すと、12V/24V、Ah、セルスタート、長期保管のつなぎっぱなし可否など、迷いやすいポイントが重なります。
            </P>
            <P>
              この記事では、<Mark>農機をシーズン前に復帰させる</Mark>
              という視点から充電器の選び方を整理します。商品例として、日動工業の急速充電器・セルスターター付NBシリーズ（流通名：スーパーブースター）も、農機の大きさとバッテリー条件に合わせて紹介します。
            </P>
            <Figure
              src={IMG(HERO)}
              alt="シーズン前にトラクターのバッテリー状態を確認するイメージ"
              priority
            />
          </header>

          <section className="mt-8 rounded-2xl border-y-4 border-emerald-700 bg-emerald-50 p-6 md:p-8">
            <H2 id="five-decisions">30秒で結論｜農機の充電器は「シーズン前5判断」で選ぶ</H2>
            <P>
              農機のバッテリーが弱いときは、いきなり一番大きな充電器を選ぶのではなく、次の順番で確認します。
            </P>
            <div className="my-6 space-y-3">
              {decisions.map((d) => (
                <div
                  key={d.n}
                  className="grid gap-2 rounded-xl border-2 border-emerald-300 bg-white p-4 sm:grid-cols-[56px_150px_1fr] sm:items-start"
                >
                  <strong className="text-emerald-800">{d.n}</strong>
                  <strong className="text-gray-900">{d.title}</strong>
                  <span className="text-[15px] leading-7 text-gray-900">
                    {d.body}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-5">
              <PrimaryCta href={mainCta.url} label={mainCta.label} />
            </div>
          </section>

          <H2 id="why-weak">なぜ農機のバッテリーはシーズン前に弱くなりやすい？</H2>
          <P>
            鉛バッテリーは、機械を動かしていなくても少しずつ自己放電します。田植え時期だけ使う、稲刈り時期だけ使う、冬はトラクターをほとんど動かさない——農機では自動車より「乗らない期間」が長くなりやすいのが特徴です。
          </P>
          <Figure
            src={IMG("farm-machinery-offseason-storage-battery.webp")}
            alt="農機をオフシーズンに屋内保管しバッテリーを管理するイメージ"
          />
          <H3>使っていなくても放電する</H3>
          <P>
            ヤンマーは、トラクターの長期保管でバッテリーを外して一度充電してから保管し、使用しなくても自然放電するため定期的に充電するよう案内しています。GSユアサも、鉛バッテリーは保管しているだけでも自己放電し、放電状態のまま長期保管すると性能低下や、充電しても回復しない状態につながることがあると説明しています。
          </P>
          <H3>「何か月ごとに充電すればよい？」は一律ではない</H3>
          <P>
            ヤンマーのトラクター向け案内では1か月に1度の完全充電を案内しています。一方、GSユアサの一般的な長期保管の案内では、3か月に1回程度の補充電が目安として示されています。クボタの一部取扱説明書では、夏と冬で補充電周期を変える例もあります。
          </P>
          <P>
            つまり、<Mark>「農機なら必ず○か月に1回」ではありません</Mark>
            。使用している農機・バッテリーの取扱説明書を最優先し、その条件に合わせて管理するのが正解です。
          </P>

          <H2 id="charge-or-replace">充電すれば戻る？セルスタート？それとも交換？</H2>
          <P>
            エンジンが始動しないときに、すべてを「バッテリー上がり」と考えるのは避けます。農機メーカーの点検資料でも、バッテリーは外観、液量、端子、インジケータなどを確認するよう案内されています。充電器は、寿命を迎えたバッテリーを新品へ戻す装置ではありません。
          </P>
          <div className="my-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border-2 border-emerald-300 bg-emerald-50 p-5">
              <h3 className="text-lg font-black text-gray-900">
                充電を検討しやすい状態
              </h3>
              <ul className={`${cls.list} mt-3`}>
                {chargeOk.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border-2 border-amber-300 bg-amber-50 p-5">
              <h3 className="text-lg font-black text-gray-900">
                交換・整備確認を優先したい状態
              </h3>
              <ul className={`${cls.list} mt-3`}>
                {replaceFirst.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <H2 id="voltage">STEP1｜まず12Vか24Vか確認する</H2>
          <P>
            農機用充電器選びで最初に間違えたくないのが電圧です。一般的に小型農機では12Vが多く、大型農機では24Vを使う機種があります。しかし、<Mark>機械の大きさだけで決めるのは危険</Mark>
            です。必ずバッテリーの表示、農機の取扱説明書、メーカー仕様で確認します。
          </P>
          <Figure
            src={IMG("farm-battery-12v-24v-selection-concept.webp")}
            alt="農機の12V・24Vバッテリー仕様を確認して充電器を選ぶイメージ"
          />
          <H3>日動NBシリーズなら</H3>
          <P>
            今回掲載する5モデルでは、<Mark>12V専用</Mark>がNB-40 / NB-50 /
            NB-60、<Mark>12V / 24V兼用</Mark>がNB-120 / NB-200です。24Vの大型農機を扱う可能性があるなら、NB-40 / 50 / 60だけでは対応できません。
          </P>

          <H2 id="ah">STEP2｜バッテリー容量Ahを確認する</H2>
          <P>
            電圧が合っていても、対応するバッテリー容量から外れていれば適切な選定とはいえません。今回のNBシリーズは、NB-40：26～60Ah、NB-50/60：26～80Ah、NB-120：35～120Ah、NB-200：50～200Ahです。
          </P>
          <P>
            Ahはバッテリー容量の目安となる値です。この記事では細かな電気計算へ深入りせず、<Mark>充電器メーカーが示す適合Ahの範囲へ搭載バッテリーが入っているか</Mark>
            を確認する使い方をおすすめします。
          </P>

          <H2 id="cell-start">STEP3｜「急速充電」と「セルスタート」を分ける</H2>
          <section className="my-6 rounded-2xl border-l-4 border-amber-500 bg-amber-50 p-6">
            <h3 className="text-xl font-black text-gray-900">
              セルスタート＝充電完了ではありません
            </h3>
            <p className="mt-3 text-[16px] leading-8 text-gray-900">
              始動補助でエンジンがかかっても、バッテリーが十分に回復したとは限りません。農機・バッテリーの取扱説明書に従って、必要な補充電や点検を行います。
            </p>
          </section>
          <Figure
            src={IMG("farm-engine-start-vs-full-charge.webp")}
            alt="農機の始動補助と本充電を分けて考えるイメージ"
          />
          <P>
            急速充電は弱ったバッテリーへ電気を補うこと、セルスタートはエンジン始動時に大きな電流を供給してセルモーターの始動を補助することです。日動NBシリーズでは、セルスタート電流はいずれも<Mark>10秒MAX</Mark>
            です。
          </P>
          <P>
            クボタの一部取扱説明書でも、急速充電は短時間で放電量の一部を補う応急的な充電方法として説明されており、始動後はなるべく早く正しく補充電するよう案内されています。「とりあえずエンジンがかかった」ことと「バッテリーが十分に回復した」ことは別と考えます。
          </P>

          <H2 id="small-farm">小型農機・小型トラクターならNB-40 / NB-50 / NB-60</H2>
          <P>
            12Vの小型農機では、NB-40 / NB-50 / NB-60が比較候補です。ここでは商品比較そのものを主役にせず、<Mark>農機運用の中でどの条件に合うか</Mark>
            で見ます。
          </P>
          <Figure
            src={IMG("small-tractor-battery-charger-selection.webp")}
            alt="小型トラクターや管理機向けバッテリー充電器を選ぶイメージ"
          />
          <div className="my-8 space-y-6">
            <ProductCard model="NB-40" priority />
            <ProductCard model="NB-50" />
            <ProductCard model="NB-60" />
          </div>

          <H2 id="large-farm">大型トラクター・コンバインで12V/24Vを扱うならNB-120</H2>
          <P>
            大型農機では、24Vのバッテリーシステムを使う機種があります。<Mark>複数の農機を扱い、12Vと24Vが混在する整備場</Mark>
            では、NB-40～60より使える範囲が広がります。
          </P>
          <Figure
            src={IMG("combine-harvester-battery-maintenance.webp")}
            alt="大型コンバインや大型農機のバッテリー整備イメージ"
          />
          <div className="my-8">
            <ProductCard model="NB-120" />
          </div>

          <H2 id="heavy">50～200Ahの大型農機・重機ならNB-200</H2>
          <P>
            農業法人で大型農機に加えて重機・大型作業車も管理する場合など、NB-120より大きなバッテリー容量と始動補助能力が必要なら候補になります。ただし、<Mark>21.7kg</Mark>
            あります。「一番大きいモデルを買っておけば安心」ではなく、実際の12V/24VとAhを確認して選びます。
          </P>
          <div className="my-8">
            <ProductCard model="NB-200" />
          </div>
          <Figure
            src={IMG("farm-workshop-heavy-charger-cart.webp")}
            alt="大型農機用の重い充電器と整備工具を台車で運ぶイメージ"
          />
          <MidCta
            title="スーパーブースターを農機条件から比較"
            body="12V専用か12/24V兼用か、適合Ahとセルスタート電流を確認したうえで一覧から絞り込んでください。"
          />

          <H2 id="storage">シーズン終了後｜長期保管の充電はどう考える？</H2>
          <P>
            農機では、シーズン前の復帰だけでなく、<Mark>シーズン終了時の保管設計</Mark>
            が重要です。保管前に充電し、保管中も自己放電するため、メーカーが指定する周期で補充電が必要です。
          </P>
          <section className="my-6 rounded-2xl border-l-4 border-sky-500 bg-sky-50 p-6">
            <h3 className="text-xl font-black text-gray-900">
              NBシリーズをつなぎっぱなしにしない
            </h3>
            <p className="mt-3 text-[16px] leading-8 text-gray-900">
              日動工業はNBシリーズについて、<Mark>過充電防止回路を搭載していない</Mark>
              と明記しています。急速充電＋シーズン前の始動補助には向く一方、何か月も接続したまま自動で維持管理する充電器ではありません。長期維持を目的にするなら、充電状態を監視し、過充電防止・維持充電を行う自動充電器という別カテゴリを検討します。
            </p>
          </section>

          <H2 id="rapid-vs-maintainer">
            農機の年間運用で「急速充電器」と「維持充電器」を使い分ける
          </H2>
          <Figure
            src={IMG("farm-rapid-charger-vs-maintainer.webp")}
            alt="農機の急速充電器と長期維持充電器の用途の違いを示すイメージ"
          />
          <div className="my-6 grid gap-4">
            {yearlyFlow.map((item) => (
              <div
                key={item.phase}
                className="rounded-xl border-2 border-gray-200 bg-white p-5"
              >
                <p className="text-sm font-bold text-emerald-800">{item.phase}</p>
                <p className="mt-2 text-[16px] font-extrabold text-gray-900">
                  {item.need}
                </p>
                <p className="mt-2 text-[15px] leading-7 text-gray-900">
                  → {item.answer}
                </p>
              </div>
            ))}
          </div>
          <P>
            この流れで考えると、スーパーブースターを「一年中つなぐ充電器」ではなく、<Mark>シーズン前後の整備に使う業務用急速充電器</Mark>
            として位置づけやすくなります。
          </P>

          <H2 id="workshop">農機整備店ならどのクラスを常備する？</H2>
          <P>
            農家個人と農機整備店では、充電器の選び方が変わります。扱う電圧の混在と入庫台数が判断の軸です。
          </P>
          <div className="my-6 grid gap-4 md:grid-cols-2">
            {shopRoles.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border-2 border-gray-200 p-5"
              >
                <h3 className="text-lg font-black text-gray-900">{item.title}</h3>
                <p className="mt-2 text-[15px] leading-7 text-gray-900">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <H2 id="safety">安全・信頼のための確認事項</H2>
          <ul className={cls.list}>
            {safetyNotes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <P>
            本記事では、危険を伴う端子接続の詳細手順は扱いません。実作業は必ず製品・バッテリー・農機の取扱説明書に従ってください。
          </P>

          <H2 id="checklist">使用前に確認したい8項目</H2>
          <ul className={cls.list}>
            {checklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <P>
            NBシリーズを使う場合は、製品の取扱説明書とバッテリーメーカーの充電条件も確認してください。
          </P>

          <H2 id="mistakes">よくある選定ミス</H2>
          <div className="my-6 space-y-4">
            {mistakes.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-gray-200 bg-gray-50 p-5"
              >
                <h3 className="text-lg font-black text-gray-900">{item.title}</h3>
                <p className="mt-2 text-[15px] leading-7 text-gray-900">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <H2 id="faq">よくある質問</H2>
          <div className="my-6 space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q}>
                <h3 className={cls.faqQ}>{faq.q}</h3>
                <P>{faq.a}</P>
              </div>
            ))}
          </div>
          {nb40Alt ? (
            <P>
              NB-40の別掲載ページ：
              <ExtLink
                href={nb40Alt.url}
                className="ml-1 font-bold text-amber-800 underline underline-offset-4"
              >
                こちら
              </ExtLink>
              （同一モデル）
            </P>
          ) : null}

          <H2 id="summary">まとめ｜農機用充電器は「シーズン前に何をしたいか」から選ぶ</H2>
          <P>
            農機のバッテリー充電器は、一番大きいモデルや一番セルスタート電流が高いモデルを選べばよいわけではありません。先に、バッテリーが充電可能な状態か、12V/24V、Ah、通常充電かセルスタートか、急速復帰か長期維持かを決めます。
          </P>
          <P>
            12Vの小型農機ならNB-40 / 50 / 60。12V/24Vの大型農機ならNB-120。50～200Ahの大型農機・重機まで管理するならNB-200。農機の実際のバッテリー仕様へ合わせて絞り込むのが基本です。
          </P>
          <P>
            <Mark>シーズン前の急速復帰・始動補助</Mark>と
            <Mark>オフシーズンの維持管理</Mark>
            を分けて考えることが、農機用充電器選びの最も大切なポイントです。
          </P>

          <FinalCtaBlock />

          <section className="mt-12 border-t border-gray-200 pt-10">
            <h2 className="text-2xl font-black text-gray-900">関連記事</h2>
            <ul className="mt-4 space-y-3">
              {relatedArticles.map((a) => (
                <li key={a.href}>
                  <Link
                    href={a.href}
                    className="text-[16px] font-bold text-emerald-900 underline underline-offset-4"
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
