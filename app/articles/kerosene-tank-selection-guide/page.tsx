import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";
import productData from "./product-data.json";

const slug = "kerosene-tank-selection-guide";
const siteUrl = "https://www.sagyou-navi.com";
const canonicalUrl = `${siteUrl}/articles/${slug}`;
const imgBase = `/images/articles/${slug}`;
const heroImage = `${imgBase}/kerosene-tank-selection-hero.webp`;
const EXT_REL = "nofollow sponsored noopener noreferrer";
const published = "2026-09-18";

const title =
  "灯油タンクの選び方｜室内用・屋外用の違い、25L・50L・90Lの目安とホームタンクの選定ポイント【2026年版】";
const h1 = title;
const shortTitle = "灯油タンクの選び方｜室内用・屋外用と容量目安";
const description =
  "灯油タンクの選び方を、室内用・屋外用の違い、25L・50L・90Lの容量目安、壁ピタ・レギュラー・ホームタンクの違いまで分かりやすく解説。設置場所から順に決めると失敗しにくいです。";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title,
    description,
    url: canonicalUrl,
    siteName: "作業用品ナビ",
    type: "article",
    publishedTime: published,
    modifiedTime: published,
    images: [
      {
        url: `${siteUrl}${heroImage}`,
        width: 1600,
        height: 900,
        alt: "室内用角型灯油タンクと屋外用ホームタンクの設置イメージ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${siteUrl}${heroImage}`],
  },
};

type Product = {
  id: string;
  name: string;
  short: string;
  type: string;
  capacity: string;
  place: string;
  shape: string;
  feature: string;
  bestFor: string;
  url: string;
  image: string;
  group: string;
  relatedModels?: string;
};

type CtaLink = { label: string; url: string };

const products = productData.products as Product[];
const byId = Object.fromEntries(products.map((p) => [p.id, p])) as Record<
  string,
  Product
>;
const mainCta = productData.main_cta as CtaLink;
const subCtas = productData.sub_ctas as CtaLink[];

const selectAxes = [
  {
    no: "1",
    title: "設置場所（室内 / 屋外）",
    body: "容量より先に、室内に置くか屋外に置くかを決める。",
  },
  {
    no: "2",
    title: "容量（25L / 50L / 90L前後）",
    body: "使用量と給油回数のバランスで選ぶ。迷ったら90L前後が比較しやすい。",
  },
  {
    no: "3",
    title: "形状（壁ピタ / レギュラー / 角型）",
    body: "設置スペースと動線に合わせて形を絞る。",
  },
  {
    no: "4",
    title: "供給方法（バルブ / 小出し）",
    body: "どう取り出して使うかまで確認すると失敗しにくい。",
  },
];

const indoorOutdoorRows = [
  ["向く場所", "事務所・休憩室・バックヤード", "倉庫・工場・作業場・施設外壁"],
  ["容量の目安", "25L / 50L / 90L", "88L〜95型など90L前後が多い"],
  ["選び方の要点", "省スペース・室内動線", "壁ピタ／レギュラー・バルブ仕様"],
  ["向くニーズ", "少量〜中量、給油動線を短くしたい", "使用量が多い、屋内スペースを空けたい"],
];

const capacityRows = [
  ["25L前後", "使用量が少ない／省スペース優先", "DK25S"],
  ["50L前後", "給油回数を減らしつつ大きすぎない", "DK50ST"],
  ["90L前後", "使用量が多い／屋外設置を前提にしやすい", "DK90ST / OT95S系 / OT95SW系 / HT95系"],
];

const failItems = [
  {
    fail: "容量だけ見て設置場所を見ない",
    fix: "大きいほど良いとは限らない。幅・奥行き・動線とセットで考える。",
  },
  {
    fail: "室内用・屋外用を混同する",
    fix: "設置場所が先、容量はその次。置き場所の前提が違う。",
  },
  {
    fail: "給油・小出し方法を見落とす",
    fix: "バルブ仕様やホース付きの有無まで確認する。",
  },
  {
    fail: "壁際や動線を考えずに選ぶ",
    fix: "壁ピタ向きの現場もあれば、標準形状の方が扱いやすい現場もある。",
  },
];

const faqs = [
  {
    q: "灯油タンクは室内用と屋外用で何が違いますか？",
    a: "室内用は室内設置を前提にした比較的コンパクトなモデルが中心です。屋外用はホームタンクとして容量が大きく、壁ピタ／レギュラーやバルブ仕様など、設置形状・供給仕様まで選びやすい傾向があります。",
  },
  {
    q: "25L・50L・90Lはどう選べばいいですか？",
    a: "少量運用・省スペースなら25L、扱いやすさと容量のバランスなら50L、使用量が多い・給油回数を減らしたいなら90L前後が目安です。",
  },
  {
    q: "壁ピタタイプとは何ですか？",
    a: "建物の壁際などにすっきり納めやすい考え方の屋外用灯油タンクです。設置スペースを抑えたい倉庫横や事務所外壁沿いで検討しやすいタイプです。",
  },
  {
    q: "屋外ホームタンクは容量だけ見れば十分ですか？",
    a: "十分ではありません。設置場所、形状（壁ピタ／レギュラー）、バルブ仕様、ホース付きかどうかなど、使い方まで含めて確認するのが大切です。",
  },
  {
    q: "灯油タンクと一緒に見るべき関連カテゴリはありますか？",
    a: "暖房用途ならストーブ、灯油の別用途なら草焼バーナーなど、関連カテゴリも合わせて見ると比較しやすいです。",
  },
];

const relatedArticles = [
  {
    href: "/articles/factory-heating-not-effective-heater-guide",
    label:
      "工場・倉庫で暖房が効かない原因は？熱風・遠赤外線・ヒーターベストの寒さ対策",
  },
  {
    href: "/articles/factory-spot-heating-far-infrared-electric-heater-guide",
    label: "工場のスポット暖房｜遠赤外線電気ヒーターの選び方",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: h1,
  description,
  image: [`${siteUrl}${heroImage}`],
  datePublished: published,
  dateModified: published,
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
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
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

function H3({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <h3 id={id} className={cls.h3}>
      {children}
    </h3>
  );
}

function Ul({ children }: { children: ReactNode }) {
  return <ul className={cls.list}>{children}</ul>;
}

function Ol({ children }: { children: ReactNode }) {
  return (
    <ol className="my-4 list-decimal space-y-2 pl-6 text-[17px] leading-[1.95] tracking-[0.04em] text-gray-900">
      {children}
    </ol>
  );
}

function SectionImage({
  src,
  alt,
  brighten = false,
}: {
  src: string;
  alt: string;
  brighten?: boolean;
}) {
  return (
    <figure className="my-8 overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
      <div className="relative aspect-video">
        <Image
          src={src}
          alt={alt}
          fill
          className={`object-cover${brighten ? " brightness-[1.05]" : ""}`}
          sizes="(max-width: 1024px) 100vw, 850px"
        />
      </div>
    </figure>
  );
}

function PrimaryCta({ label }: { label?: string }) {
  return (
    <a
      href={mainCta.url}
      target="_blank"
      rel={EXT_REL}
      className="my-6 block min-h-12 w-full rounded-xl bg-orange-600 px-6 py-4 text-center text-base font-bold text-white transition hover:bg-orange-700 md:text-lg"
    >
      {label ?? mainCta.label}
    </a>
  );
}

function ProductCard({
  product,
  priority = false,
}: {
  product: Product;
  priority?: boolean;
}) {
  return (
    <article className="rounded-2xl border border-gray-300 bg-white p-5 shadow-sm md:p-6">
      <div className="grid gap-5 md:grid-cols-[180px_1fr] md:items-start">
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
          <Image
            src={product.image}
            alt={`${product.short}の商品画像`}
            width={360}
            height={360}
            priority={priority}
            className="h-auto w-full object-contain p-3"
          />
        </div>
        <div>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-950">
              {product.type}
            </span>
            <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-900">
              {product.capacity}
            </span>
          </div>
          <h3 className="mt-3 text-[20px] font-extrabold leading-snug text-gray-900 md:text-[22px]">
            {product.short}
          </h3>
          <p className="mt-2 text-[15px] leading-7 text-gray-900 md:text-[16px]">
            {product.name}
          </p>
          <dl className="mt-4 space-y-2 text-[15px] leading-7 text-gray-900 md:text-[16px]">
            <div>
              <dt className="inline font-bold">特徴：</dt>
              <dd className="inline">{product.feature}</dd>
            </div>
            <div>
              <dt className="inline font-bold">向く現場：</dt>
              <dd className="inline">{product.bestFor}</dd>
            </div>
            {product.relatedModels ? (
              <div>
                <dt className="inline font-bold">同系モデル：</dt>
                <dd className="inline">{product.relatedModels}</dd>
              </div>
            ) : null}
          </dl>
          <a
            href={product.url}
            target="_blank"
            rel={EXT_REL}
            className="mt-5 inline-flex min-h-12 items-center justify-center rounded-xl bg-orange-600 px-5 py-3 text-[16px] font-bold text-white hover:bg-orange-700"
          >
            商品ページを見る →
          </a>
        </div>
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
      className="group flex min-w-[16rem] items-start gap-3 text-gray-900 no-underline"
    >
      <span className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-white">
        <Image
          src={product.image}
          alt={`${product.short}の商品画像`}
          fill
          sizes="80px"
          className="object-contain p-1.5"
        />
      </span>
      <span className="min-w-0">
        <span className="block font-black leading-6 group-hover:underline">
          {product.short}
        </span>
        <span className="mt-1 block text-xs leading-5 text-gray-900">
          {product.type} / {product.capacity}
        </span>
      </span>
    </a>
  );
}

export default function Page() {
  const indoor = products.filter((p) => p.group === "indoor");
  const wallPita = byId.ot95s12b;
  const regular = byId.ot95sw14b;
  const ht95 = byId.ht95ns;

  return (
    <>
      <SiteHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
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
              <li>灯油タンクの選び方</li>
            </ol>
          </nav>
        </div>

        <article className="mx-auto max-w-[850px] px-4 pb-16 sm:px-6">
          <header>
            <div className="inline-flex rounded-full bg-orange-100 px-3 py-1 text-sm font-bold text-orange-950">
              作業用品ナビ編集部 / 2026年9月18日更新
            </div>
            <h1 className={cls.h1}>{h1}</h1>
            <P>
              冬場の事務所や倉庫、作業場、店舗で石油ストーブや石油ファンヒーターを使っていると、灯油の補充が意外と手間になります。ポリタンクでその都度給油していると、運搬の回数が増えたり、保管スペースが散らかったり、給油のタイミング管理が面倒になったりしがちです。
            </P>
            <P>
              そこで検討したいのが、据え置き型の
              <Mark>灯油タンク</Mark>
              です。ただし「何でも同じ」ではありません。室内向きの角型タンクもあれば、屋外に設置するホームタンクもあり、容量も
              <Mark>25L・50L・90L前後</Mark>
              で大きく変わります。
            </P>
            <P>
              この記事では、まず
              <strong>室内用か屋外用か</strong>
              を決め、次に容量、そのうえで壁ピタ・レギュラー・バルブ仕様まで順番に整理します。灯油タンク一覧へ進む前に、「自分に合う選び方」をここで固めていきましょう。
            </P>
            <SectionImage
              src={heroImage}
              alt="室内用角型灯油タンクと屋外用ホームタンクの設置イメージ"
            />
          </header>

          {/* 要点ボックス */}
          <section className="rounded-2xl border-2 border-amber-300 bg-amber-50 p-6">
            <H2 id="key-points">まず結論｜灯油タンクは「室内用か屋外用か」を先に決める</H2>
            <P>
              灯油タンク選びで最初に見るべきなのは、容量ではなく
              <Mark>設置場所</Mark>
              です。
            </P>
            <Ul>
              <li>
                室内に置くなら、<strong>室内用角型灯油タンク</strong>
                （25L / 50L / 90L）
              </li>
              <li>
                屋外に置くなら、<strong>ホームタンク</strong>
                （88L〜95型など90L前後）
              </li>
              <li>
                迷ったら<strong>90L前後</strong>が比較しやすい基準になる
              </li>
              <li>
                屋外用は<strong>壁ピタかレギュラーか</strong>
                、バルブ仕様・小出し方法まで確認する
              </li>
            </Ul>
            <PrimaryCta />
          </section>

          {/* 選定4チェック */}
          <section className="mt-10">
            <H2 id="four-checks">灯油タンク選定の4チェック</H2>
            <P>
              商品を並べて見る前に、次の4点で絞り込むと判断が速くなります。
            </P>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {selectAxes.map((axis) => (
                <div
                  key={axis.no}
                  className="rounded-2xl border border-gray-300 bg-white p-5 shadow-sm"
                >
                  <p className="text-sm font-bold text-orange-700">
                    CHECK {axis.no}
                  </p>
                  <h3 className="mt-1 text-xl font-extrabold text-gray-900">
                    {axis.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-7 text-gray-900">
                    {axis.body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 灯油タンクとは */}
          <section className="mt-4">
            <H2 id="what-is">灯油タンクとは？ポリタンクとの違い</H2>
            <P>
              灯油タンクというと広くは灯油を入れる容器全般を指すことがありますが、この記事で扱うのは主に
              <Mark>据え置き型で継続使用を前提にしたタイプ</Mark>
              です。
            </P>
            <P>
              ポリタンクは持ち運びやすく、少量運用には便利です。一方で、毎回の給油作業が発生しやすい、保管スペースが散らかりやすい、複数台の暖房機器だと管理しにくい、といった悩みも出やすくなります。
            </P>
            <P>
              据え置き型の灯油タンクは、「日々の補充や管理の手間」を減らしたい場合に向きます。暖房を毎日使う事務所・店舗・倉庫・農業施設・作業場では、ポリタンク運用より効率的になるケースがあります。
            </P>
          </section>

          {/* 室内用と屋外用 */}
          <section>
            <H2 id="indoor-outdoor">室内用と屋外用の違い</H2>
            <P>
              「室内用 灯油タンク」と「屋外用ホームタンク」では、想定する置き場所と容量帯が違います。まずここで振り分けましょう。
            </P>

            <SectionImage
              src={`${imgBase}/kerosene-tank-indoor.webp`}
              alt="事務所バックヤードに置かれた室内用角型灯油タンクのイメージ"
            />

            <H3 id="indoor-fit">室内用が向く現場</H3>
            <Ul>
              <li>小規模事務所で石油ファンヒーターを使う</li>
              <li>バックヤードや休憩室で暖房用の灯油を管理したい</li>
              <li>そこまで大量の灯油は使わない</li>
              <li>屋外に設置場所を確保しにくい</li>
              <li>給油動線を短くしたい</li>
            </Ul>

            <SectionImage
              src={`${imgBase}/kerosene-tank-outdoor.webp`}
              alt="倉庫外壁沿いに設置された屋外用ホームタンクのイメージ"
            />

            <H3 id="outdoor-fit">屋外用が向く現場</H3>
            <Ul>
              <li>倉庫・工場・作業場などで使用量が多い</li>
              <li>屋内スペースを圧迫したくない</li>
              <li>暖房シーズン中の給油回数を減らしたい</li>
              <li>複数の機器・用途で灯油を使う</li>
              <li>施設管理上、屋外の方が運用しやすい</li>
            </Ul>

            <div className="my-8 overflow-x-auto rounded-2xl border border-gray-300">
              <table className={cls.table}>
                <thead>
                  <tr>
                    <th className={cls.th}>比較軸</th>
                    <th className={cls.th}>室内用</th>
                    <th className={cls.th}>屋外用</th>
                  </tr>
                </thead>
                <tbody>
                  {indoorOutdoorRows.map((row) => (
                    <tr key={row[0]}>
                      <td className={`${cls.td} font-bold`}>{row[0]}</td>
                      <td className={cls.td}>{row[1]}</td>
                      <td className={cls.td}>{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <H3 id="place-check">置き場所で失敗しないための確認点</H3>
            <P>
              室内用・屋外用のどちらでも、次の点は事前に確認しておくと失敗しにくくなります。法令や施設ルールは現場ごとに異なるため、
              <strong>
                実際の使用環境・取扱説明書・施設内ルールの確認
              </strong>
              を優先してください。
            </P>
            <Ul>
              <li>置きたい場所の幅・奥行き・高さ</li>
              <li>人の通行や作業動線をふさがないか</li>
              <li>給油や小出し作業がしやすいか</li>
              <li>既存の暖房機器や供給方法に合うか</li>
              <li>運用ルールや施設内ルールに適合するか</li>
            </Ul>
          </section>

          {/* 容量 */}
          <section>
            <H2 id="capacity">容量はどう選ぶ？25L・50L・90Lの目安</H2>
            <P>
              設置場所が決まったら、次は容量です。ここでは大まかな目安を整理します。
            </P>
            <SectionImage
              src={`${imgBase}/kerosene-tank-capacity.webp`}
              alt="25L・50L・90L前後の灯油タンク容量比較イメージ"
            />

            <H3 id="cap-25">25Lが向くケース</H3>
            <Ul>
              <li>使用量が少ない</li>
              <li>小型暖房機器が中心</li>
              <li>とにかく省スペースで置きたい</li>
              <li>まずは最小限から始めたい</li>
            </Ul>

            <H3 id="cap-50">50Lが向くケース</H3>
            <Ul>
              <li>25Lでは少し心許ない</li>
              <li>給油回数を減らしたい</li>
              <li>ただし90Lほど大きくなくてよい</li>
              <li>室内に置きつつ運用効率も上げたい</li>
            </Ul>

            <H3 id="cap-90">90L前後が向くケース</H3>
            <Ul>
              <li>屋外設置を前提にしたい</li>
              <li>暖房シーズンにしっかり使う</li>
              <li>倉庫・工場・農業施設・作業場で運用したい</li>
              <li>給油回数をできるだけ減らしたい</li>
            </Ul>

            <div className="my-8 overflow-x-auto rounded-2xl border border-gray-300">
              <table className={cls.table}>
                <thead>
                  <tr>
                    <th className={cls.th}>容量帯</th>
                    <th className={cls.th}>向く考え方</th>
                    <th className={cls.th}>参考モデル</th>
                  </tr>
                </thead>
                <tbody>
                  {capacityRows.map((row) => (
                    <tr key={row[0]}>
                      <td className={`${cls.td} font-bold`}>
                        <Mark>{row[0]}</Mark>
                      </td>
                      <td className={cls.td}>{row[1]}</td>
                      <td className={cls.td}>{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 壁ピタ / レギュラー */}
          <section>
            <H2 id="wall-pita">
              屋外ホームタンクでよく見る「壁ピタ」「レギュラー」の違い
            </H2>
            <P>
              屋外用ホームタンクを比較していると、「壁ピタタイプ」「レギュラータイプ」という表現が出てきます。容量が近くても、設置の仕方のイメージが変わります。
            </P>
            <SectionImage
              src={`${imgBase}/kerosene-tank-wall-pita.webp`}
              alt="外壁沿いに省スペース設置された壁ピタタイプのホームタンク"
            />

            <H3 id="wall-pita-merit">壁ピタタイプのメリット</H3>
            <Ul>
              <li>設置スペースを効率よく使いやすい</li>
              <li>建物沿いにすっきりまとめたい人に向く</li>
              <li>作業動線を確保しやすい</li>
            </Ul>
            <P>
              設置場所が限られる倉庫横や事務所外壁沿いなどでは、まず候補に入れやすいタイプです。
            </P>

            <H3 id="regular-merit">レギュラータイプのメリット</H3>
            <Ul>
              <li>特殊な置き方を前提にしない</li>
              <li>まず基本形から比較したい人に向く</li>
              <li>壁ピタに限定せず選びたい人に向く</li>
            </Ul>

            <SectionImage
              src={`${imgBase}/kerosene-tank-hose.webp`}
              alt="小出しガンとホース付きホームタンクの運用イメージ"
            />

            <H3 id="valve-hose">バルブ仕様・ホース付きモデルの見方</H3>
            <P>
              同じ容量帯でも、商品名にボールバルブ仕様、ストレーナバルブ仕様、フレアバルブ仕様、小出しガン・ホース付きといった違いがあります。この部分は単純な容量差ではなく、
              <Mark>接続や供給方法、運用のしやすさ</Mark>
              に関わるポイントです。
            </P>
            <P>
              灯油をどう取り出すか、どのように接続したいかは現場ごとに異なります。設置後の使い勝手まで考えるなら、容量だけで選ばないことが重要です。接続・配管・設置条件は、
              <strong>取扱説明書と現場条件の確認</strong>
              を優先してください。
            </P>
          </section>

          {/* 商品紹介 CTA2 */}
          <section>
            <H2 id="products">おすすめ灯油タンクをタイプ別に紹介</H2>
            <P>
              ここからは、掲載対象の商品を検索意図に合わせて整理します。型番で比較したい方は、カードと表の両方を見てください。
            </P>

            <H3 id="products-indoor">室内用：DK25S / DK50ST / DK90ST</H3>
            <P>
              室内用角型灯油タンクは、「室内用 灯油タンク
              選び方」の軸で最も説明しやすいラインです。容量比較もしやすく、小規模事務所からしっかり容量が欲しい現場まで段階的に選べます。
            </P>
            <div className="mt-6 grid gap-5">
              {indoor.map((p, i) => (
                <ProductCard key={p.id} product={p} priority={i === 0} />
              ))}
            </div>

            <H3 id="products-wall">屋外・省スペース：OT95S系（壁ピタ 89L）</H3>
            <P>
              オーティ・マットー OT95S12B / OT95SVB / OT95S14B
              は、いずれも壁ピタタイプ
              89Lです。設置場所をコンパクトにまとめたい人に向きます。違いはボールバルブ・ストレーナバルブ・フレアバルブといった付属・接続まわりです。
            </P>
            {wallPita ? <ProductCard product={wallPita} /> : null}

            <H3 id="products-regular">屋外・標準形状：OT95SW系（レギュラー 88L）</H3>
            <P>
              OT95SW14B / OT95SWVB
              は、レギュラータイプ88Lの比較候補です。壁ピタにこだわらず、標準的な形状で検討したい人に向きます。
            </P>
            {regular ? <ProductCard product={regular} /> : null}

            <H3 id="products-ht95">屋外・95型ホームタンク：HT95NS / HT95NV / HT95NVG</H3>
            <P>
              DAIKEN の屋外用ホームタンク95型は、容量だけでなく設置後の使い勝手で選び分けやすいラインです。
            </P>
            <Ul>
              <li>
                <strong>HT95NS</strong>：2ウェイストレーナー付き
              </li>
              <li>
                <strong>HT95NV</strong>：水抜きジョイント・ボールバルブセット付き
              </li>
              <li>
                <strong>HT95NVG</strong>：小出しガン・ホース付き
              </li>
            </Ul>
            {ht95 ? <ProductCard product={ht95} /> : null}

            <div className="my-10 overflow-x-auto rounded-2xl border border-gray-300">
              <table className={cls.table}>
                <thead>
                  <tr>
                    <th className={cls.th}>商品</th>
                    <th className={cls.th}>設置</th>
                    <th className={cls.th}>容量</th>
                    <th className={cls.th}>形状</th>
                    <th className={cls.th}>向く現場</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((p) => (
                    <tr key={p.id}>
                      <td className={cls.td}>
                        <ProductTableCell product={p} />
                      </td>
                      <td className={cls.td}>{p.place}</td>
                      <td className={cls.td}>{p.capacity}</td>
                      <td className={cls.td}>{p.shape}</td>
                      <td className={cls.td}>{p.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* CTA 2 */}
            <div className="rounded-2xl border-2 border-slate-800 bg-slate-950 p-6 text-white md:p-8">
              <p className="text-sm font-bold text-orange-300">
                型番の比較軸が固まったら
              </p>
              <h3 className="mt-2 text-2xl font-extrabold leading-tight md:text-3xl">
                灯油タンク一覧で在庫・仕様を見比べる
              </h3>
              <p className="mt-4 text-[16px] leading-8 text-slate-100 md:text-[17px]">
                室内用・壁ピタ・レギュラー・95型ホームタンクを、一覧ページでまとめて比較できます。
              </p>
              <a
                href={mainCta.url}
                target="_blank"
                rel={EXT_REL}
                className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-orange-600 px-6 py-4 text-center text-base font-bold text-white hover:bg-orange-700 md:text-lg"
              >
                {mainCta.label}
              </a>
            </div>
          </section>

          {/* 失敗例 */}
          <section>
            <H2 id="failures">灯油タンク選びでよくある失敗</H2>
            <P>
              失敗しやすいポイントを先に潰しておくと、一覧ページでの比較がスムーズになります。
            </P>
            <div className="mt-6 grid gap-4">
              {failItems.map((item) => (
                <div
                  key={item.fail}
                  className="rounded-2xl border border-gray-300 bg-white p-5"
                >
                  <p className="text-sm font-bold text-red-700">よくある失敗</p>
                  <h3 className="mt-1 text-xl font-extrabold text-gray-900">
                    {item.fail}
                  </h3>
                  <p className="mt-2 text-[16px] leading-7 text-gray-900">
                    <strong>対策：</strong>
                    {item.fix}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 関連カテゴリ（サブCTA） */}
          <section>
            <H2 id="related-categories">
              ストーブ・草焼バーナーと一緒に見直したい関連カテゴリ
            </H2>
            <P>
              灯油タンクを検討するタイミングは、暖房機器や灯油関連用品をまとめて見直すタイミングでもあります。押し付けではなく、必要な人だけ見てください。
            </P>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="overflow-hidden rounded-2xl border border-gray-300 bg-white shadow-sm">
                <div className="relative aspect-video">
                  <Image
                    src={`${imgBase}/kerosene-tank-stove-cta.webp`}
                    alt="ストーブと灯油関連用品の管理イメージ"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 425px"
                  />
                </div>
                <div className="p-5">
                  <h3 className={cls.ctaH3}>ストーブも一緒に見たい人へ</h3>
                  <p className={cls.bodySm}>
                    暖房設備の見直しも合わせて行いたい場合は、ストーブカテゴリも確認しておくと効率的です。
                  </p>
                  <a
                    href={subCtas[0].url}
                    target="_blank"
                    rel={EXT_REL}
                    className="mt-4 inline-flex min-h-11 items-center justify-center rounded-xl border-2 border-orange-600 px-5 py-2.5 text-[15px] font-bold text-orange-700 hover:bg-orange-50"
                  >
                    {subCtas[0].label} →
                  </a>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-gray-300 bg-white shadow-sm">
                <div className="relative aspect-video">
                  <Image
                    src={`${imgBase}/kerosene-tank-burner-cta.webp`}
                    alt="草焼バーナー関連用品の屋外作業イメージ"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 425px"
                  />
                </div>
                <div className="p-5">
                  <h3 className={cls.ctaH3}>草焼バーナーを探している人へ</h3>
                  <p className={cls.bodySm}>
                    灯油関連の別用途として草焼バーナーを探している人は、関連カテゴリも見ておくと便利です。
                  </p>
                  <a
                    href={subCtas[1].url}
                    target="_blank"
                    rel={EXT_REL}
                    className="mt-4 inline-flex min-h-11 items-center justify-center rounded-xl border-2 border-orange-600 px-5 py-2.5 text-[15px] font-bold text-orange-700 hover:bg-orange-50"
                  >
                    {subCtas[1].label} →
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <H2 id="faq">よくある質問</H2>
            <div className="mt-6 space-y-6">
              {faqs.map((f) => (
                <div
                  key={f.q}
                  className="rounded-2xl border border-gray-300 bg-gray-50 p-5 md:p-6"
                >
                  <h3 className={cls.faqQ}>{f.q}</h3>
                  <p className="text-[17px] leading-[1.9] tracking-[0.04em] text-gray-900">
                    {f.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* まとめ + CTA3 */}
          <section>
            <H2 id="summary">まとめ</H2>
            <P>
              灯油タンク選びで最も大切なのは、最初に
              <Mark>室内用か屋外用か</Mark>
              を決めることです。そのうえで、
            </P>
            <Ol>
              <li>設置場所</li>
              <li>容量（25L / 50L / 90L前後）</li>
              <li>形状（壁ピタ / レギュラー / 角型）</li>
              <li>給油・小出しのしやすさ</li>
            </Ol>
            <P>の順で見ていくと、必要以上に迷いにくくなります。</P>
            <Ul>
              <li>
                室内で使いたいなら <strong>DK25S / DK50ST / DK90ST</strong>
              </li>
              <li>
                省スペースな屋外用なら <strong>OT95S系の壁ピタタイプ</strong>
              </li>
              <li>
                標準的な屋外用なら <strong>OT95SW系</strong>
              </li>
              <li>
                95型ホームタンクなら{" "}
                <strong>HT95NS / HT95NV / HT95NVG</strong>
              </li>
            </Ul>
            <P>
              比較の軸が整理できたら、最後は一覧ページで在庫や価格帯、希望仕様を見比べるのがおすすめです。設置条件や安全管理については断定せず、現場条件・説明書・施設ルールの確認を優先してください。
            </P>

            <div className="mt-8 rounded-2xl border-2 border-orange-500 bg-orange-50 p-6 md:p-8">
              <h3 className={cls.ctaH3}>灯油タンク一覧を見たい方はこちら</h3>
              <p className="mb-4 text-[16px] leading-7 text-gray-900">
                室内用・屋外用・壁ピタ・ホームタンクをまとめて比較できます。
              </p>
              <PrimaryCta />
            </div>
          </section>

          {/* 関連記事 */}
          <section className="mt-14 border-t border-gray-200 pt-10">
            <h2 className="text-2xl font-black text-gray-900">関連記事</h2>
            <ul className="mt-4 space-y-3">
              {relatedArticles.map((a) => (
                <li key={a.href}>
                  <Link
                    href={a.href}
                    className="text-[16px] font-bold text-orange-700 underline underline-offset-4 hover:text-orange-800"
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
