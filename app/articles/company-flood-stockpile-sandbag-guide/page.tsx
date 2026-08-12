import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";
import productData from "./product-data.json";

const SLUG = "company-flood-stockpile-sandbag-guide";
const SITE_URL = "https://www.sagyou-navi.com";
const CANONICAL = `${SITE_URL}/articles/${SLUG}`;
const ARTICLE_TITLE =
  "会社・工場の水害対策で何を備蓄する？土のう・吸水土のうの選び方と配置・運用【2026年版】";
const SHORT_TITLE = "会社・工場の水害対策備蓄と土のう";
const DESCRIPTION =
  "会社・工場・倉庫の水害対策で、土のうは何を何袋備えるべきか。普通土のう・吸水土のう・耐候性土のう・大型土のうの違いを、保管場所、設置人員、初動手順まで含めて実務目線で整理します。";
const PUBLISHED = "2026-08-12";
const IMG = (file: string) => `/images/articles/${SLUG}/${file}`;
const PROD = (file: string) => `/images/articles/${SLUG}/products/${file}`;
const EXT_REL = "nofollow sponsored noopener noreferrer";
const FLOOD_BARRIER_ARTICLE =
  "/articles/factory-warehouse-flood-entry-protection-guide";

type CatalogProduct = (typeof productData.products)[number];

const byId = Object.fromEntries(
  productData.products.map((p) => [p.id, p])
) as Record<string, CatalogProduct>;

const ctas = Object.fromEntries(
  productData.categoryCtas.map((c) => [c.label, c.url])
) as Record<string, string>;

const soilbagCta = ctas["土のう一覧を見る"];
const toiletCta = ctas["簡易トイレ一覧を見る"];
const disasterCta = ctas["災害対策アイテム一覧を見る"];

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
        url: `${SITE_URL}${IMG("company-flood-preparation-sandbags-hero.jpg")}`,
        width: 1600,
        height: 900,
        alt: "大雨に備えて工場入口へ土のうを準備する法人の水害対策イメージ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: ARTICLE_TITLE,
    description: DESCRIPTION,
    images: [
      `${SITE_URL}${IMG("company-flood-preparation-sandbags-hero.jpg")}`,
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: ARTICLE_TITLE,
  description: DESCRIPTION,
  mainEntityOfPage: CANONICAL,
  image: [`${SITE_URL}${IMG("company-flood-preparation-sandbags-hero.jpg")}`],
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

const tocItems = [
  { id: "six-decisions", label: "大雨前に決めたい6つ" },
  { id: "start-from-risk", label: "何袋買うかから始めない" },
  { id: "types", label: "普通・吸水・耐候・大型の違い" },
  { id: "site-cases", label: "現場別の備蓄の考え方" },
  { id: "how-many", label: "土のうは何袋必要？" },
  { id: "storage", label: "保管・点検・入替え" },
  { id: "initial-response", label: "大雨予報時の初動" },
  { id: "production", label: "大量製作の効率化" },
  { id: "beyond-sandbags", label: "土のうだけでは重いケース" },
  { id: "large-bags", label: "大型土のうの位置づけ" },
  { id: "bcp", label: "浸水後の備え（BCP）" },
  { id: "failures", label: "よくある失敗" },
  { id: "checklist", label: "法人チェックリスト" },
  { id: "faq", label: "よくある質問" },
  { id: "summary", label: "まとめ" },
] as const;

const faqs = [
  {
    q: "会社では土のうを何袋備蓄すればよいですか？",
    a: "一律の袋数ではなく、守る開口部の幅・段数・使用する土のうの実効幅から決めます。候補品を2〜3袋実際に作って仮置きし、重なりを含む幅を測ったうえで、開口部ごとの必要数を算出する方法が実務的です。破損・追加対応分の予備数量は、自社のリスクに合わせて社内基準を設定してください。",
  },
  {
    q: "普通土のうと吸水土のうはどちらがよいですか？",
    a: "土砂を確保でき、複数人で設置できる拠点なら普通土のうが使いやすい一方、土砂保管が難しく省スペース備蓄を重視する施設では吸水式が候補になります。吸水式は商品ごとに吸水条件・吸水後重量・処理方法が異なるため、購入前確認が必要です。",
  },
  {
    q: "土のうは屋外に置きっぱなしでよいですか？",
    a: "商品によって耐候性と保管条件が異なります。「普通土のう」「1年対応」「3年対応」などを一括りにせず、品番ごとのメーカー情報に従ってください。長期備蓄は外観点検と数量確認を定期的に行います。",
  },
  {
    q: "土や砂がない会社はどうすればよいですか？",
    a: "吸水土のうや止水板など、土砂を使わない方法も比較できます。水害時だけ土砂を調達する運用は、道路状況や需要集中で計画通りにならない可能性があるため、平時に代替策を決めます。",
  },
  {
    q: "吸水土のうは繰り返し使えますか？",
    a: "製品によって異なります。乾燥・脱水方法や再使用可否を商品説明・取扱説明書で確認してください。「吸水土のうなら全部再利用できる」とは考えない方が安全です。",
  },
  {
    q: "まくら土のうは入口の浸水対策に使えますか？",
    a: "細長い形状を活かせる場面はありますが、商品ごとの主用途を確認してください。今回掲載しているまくら土のうは、商品ページで仮設排水路や重し用途が案内されています。開口部全面の水防を目的にする場合は、普通土のうや吸水式、止水板なども比較します。",
  },
  {
    q: "1年対応と3年対応の大型土のうはどう選びますか？",
    a: "計画上の設置期間と要求仕様で選びます。大型土のうは災害復旧・仮設工事の施工資材であり、小型土のうの備蓄と同じ考え方では選べません。施工計画・仕様書・メーカー情報を照合してください。",
  },
  {
    q: "土のうだけでシャッターからの浸水を防げますか？",
    a: "土のうだけで完全に止水できるとは限りません。開口幅、床の凹凸、流れ、水位、設置時間、排水能力で結果が変わります。広いシャッターや重要設備を守る場所では、止水板や設備側の対策も含めて検討してください。",
  },
  {
    q: "水害備蓄に簡易トイレも必要ですか？",
    a: "断水等で既設トイレが使えない場合に備え、災害時トイレも水害BCPの一部として確認しておく価値があります。経済産業省は1人あたり35回分（7日分）を備蓄目安として案内しています。従業員数と拠点運用に合わせて不足を確認してください。",
  },
] as const;

const quantitySteps = [
  {
    n: "1",
    title: "守る場所をA/B/Cに分ける",
    body: "まず最重要開口部Aの必要量を確定し、その後B、Cへ広げる。",
  },
  {
    n: "2",
    title: "候補商品を2〜3袋だけ実際に作る",
    body: "普通土のうは予定している土砂と充填量、吸水式はメーカー手順で実物を作る。",
  },
  {
    n: "3",
    title: "実効幅を測る",
    body: "袋そのものの横幅ではなく、重なりを含めて何cm進むかを測る。",
  },
  {
    n: "4",
    title: "必要段数を決める",
    body: "想定条件が厳しい場合は土のうだけに依存せず、施設全体の止水計画を見直す。",
  },
  {
    n: "5",
    title: "搬送・設置時間を測る",
    body: "必要数が分かっても完了まで時間がかかるなら、発動基準を前倒しする。",
  },
  {
    n: "6",
    title: "数量と予備数を社内標準化",
    body: "開口部ごとの必要数を記録し、破損・追加対応の予備は自社リスクに合わせて決める。",
  },
] as const;

const checklistItems = [
  "拠点周辺の浸水リスクを確認した",
  "水が入りやすい開口部を写真付きで一覧化した",
  "守る場所をA/B/Cに優先順位付けした",
  "場所ごとに普通土のう／吸水式／他の止水方法を決めた",
  "普通土のう用の土砂・スコップ・充填場所を確保した",
  "吸水式の使用条件を確認した",
  "候補商品を2〜3袋、実際の開口部へ仮置きした",
  "開口部ごとの必要数を確定した",
  "保管場所から設置場所までの搬送時間を測った",
  "設置開始を判断する責任者と代行者を決めた",
  "危険時の作業中止基準を社内ルールへ入れた",
  "品番ごとの保管条件・交換時期を記録した",
  "定期点検日と訓練日を決めた",
  "広い開口部で止水板等の比較が必要か確認した",
  "停電・断水・災害時トイレの備蓄も確認した",
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
  dataCta,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  dataCta?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel={EXT_REL}
      data-cta={dataCta}
      className={className}
    >
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

function Caution({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="my-6 rounded-lg border border-amber-300 bg-amber-50 p-5">
      <p className="mb-2 text-sm font-bold text-gray-900">⚠ {title}</p>
      <div className={cls.bodySm}>{children}</div>
    </div>
  );
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

function Table({ children }: { children: ReactNode }) {
  return (
    <div className="my-6 overflow-x-auto">
      <table className={cls.table}>{children}</table>
    </div>
  );
}

function Th({ children }: { children: ReactNode }) {
  return <th className={cls.th}>{children}</th>;
}

function Td({ children }: { children: ReactNode }) {
  return <td className={cls.td}>{children}</td>;
}

function ExtCta({
  href,
  children,
  dataCta,
  tone = "emerald",
}: {
  href: string;
  children: ReactNode;
  dataCta?: string;
  tone?: "emerald" | "dark";
}) {
  const toneClass =
    tone === "dark"
      ? "bg-gray-900 hover:bg-gray-700"
      : "bg-emerald-700 hover:bg-emerald-800";
  return (
    <ExtLink
      href={href}
      dataCta={dataCta}
      className={`inline-flex min-h-12 items-center justify-center rounded-xl px-5 py-3 text-center text-[15px] font-extrabold text-white transition ${toneClass}`}
    >
      {children}
    </ExtLink>
  );
}

function CtaAside({
  title,
  text,
  href,
  label,
  dataCta,
}: {
  title: string;
  text: string;
  href: string;
  label: string;
  dataCta: string;
}) {
  return (
    <aside className="my-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 sm:p-6">
      <p className={cls.ctaH3}>{title}</p>
      <p className={`mt-2 ${cls.bodySm}`}>{text}</p>
      <div className="mt-4">
        <ExtCta href={href} dataCta={dataCta}>
          {label}
        </ExtCta>
      </div>
    </aside>
  );
}

function ProductCard({ id }: { id: string }) {
  const product = byId[id];
  if (!product) return null;

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-gray-300 bg-white shadow-sm">
      <div className="relative aspect-[4/3] bg-gray-50">
        <Image
          src={PROD(`${product.id}.jpg`)}
          alt={`${product.name}の商品画像`}
          fill
          className="object-contain p-4"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="flex flex-1 flex-col space-y-3 p-5">
        <h3 className="text-lg font-extrabold leading-snug text-gray-900 sm:text-xl">
          {product.name}
        </h3>
        <p className={cls.bodySm}>
          <strong>向く現場：</strong>
          {product.fit}
        </p>
        <dl className={`space-y-3 ${cls.bodySm}`}>
          <div>
            <dt className="font-bold text-gray-900">解決したいこと</dt>
            <dd>{product.problem}</dd>
          </div>
          <div>
            <dt className="font-bold text-gray-900">違い</dt>
            <dd>{product.difference}</dd>
          </div>
          <div>
            <dt className="font-bold text-gray-900">向かないケース</dt>
            <dd>{product.notFit}</dd>
          </div>
          <div>
            <dt className="font-bold text-gray-900">購入前に確認</dt>
            <dd>{product.check}</dd>
          </div>
        </dl>
        <div className="mt-auto pt-2">
          <ExtCta href={product.url} dataCta={`product-${product.id}`}>
            商品ページを見る
          </ExtCta>
        </div>
      </div>
    </article>
  );
}

function ProductGrid({ ids }: { ids: string[] }) {
  return (
    <div className="my-8 grid grid-cols-1 gap-5 md:grid-cols-2">
      {ids.map((id) => (
        <ProductCard key={id} id={id} />
      ))}
    </div>
  );
}

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-[850px] px-4 pb-16 pt-10 sm:px-6">
        <JsonLd data={articleSchema} />
        <JsonLd data={breadcrumbSchema} />

        <nav aria-label="パンくず" className={`mb-5 ${cls.meta}`}>
          <Link href="/" className="underline underline-offset-4">
            ホーム
          </Link>
          <span className="mx-2">/</span>
          <Link href="/articles" className="underline underline-offset-4">
            選び方ガイド
          </Link>
          <span className="mx-2">/</span>
          <span>{SHORT_TITLE}</span>
        </nav>

        <p className={`${cls.meta} font-bold`}>水害・BCP対策</p>
        <h1 className={cls.h1}>{ARTICLE_TITLE}</h1>
        <div className={`mt-4 flex flex-wrap gap-x-5 gap-y-2 ${cls.meta}`}>
          <span>執筆：作業用品ナビ編集部</span>
          <time dateTime={PUBLISHED}>公開・更新：2026年8月12日</time>
        </div>

        <Figure
          src={IMG("company-flood-preparation-sandbags-hero.jpg")}
          alt="大雨に備えて工場入口へ土のうを準備する法人の水害対策イメージ"
          priority
        />

        <P>
          台風や短時間の強い雨が予想されると、「念のため土のうを買っておこう」と考える企業は少なくありません。ところが実際の水害対策では、袋を倉庫に置いておくだけでは使えないことがあります。
        </P>
        <P>
          入口まで運ぶ人がいない。袋へ詰める土砂がない。シャッターが広すぎて必要数が分からない。保管場所が浸水し、肝心なときに取り出せない。こうした問題は、雨が強くなってから気付いても対応が難しくなります。
        </P>
        <P>
          会社・工場・倉庫で土のうを備えるなら、先に決めたいのは「何袋買うか」ではなく、
          <Mark>どこを守るか、何を使うか、誰がいつ動くか</Mark>
          です。普通土のう、吸水土のう、まくら土のう、耐候性土のう、大型土のうを用途別に整理しながら、平時に決めておきたい備蓄・保管・配置・訓練までを一つの流れでまとめます。
        </P>

        <Caution title="安全のために">
          <p>
            土のうは浸水リスクを下げるための応急的な水防資材の一つです。水位、流れの強さ、建物形状、排水能力、設置状態などで効果は変わります。危険が迫っている状況で無理に屋外作業を続けず、避難情報や施設管理者の判断を優先してください。
          </p>
        </Caution>

        <section
          id="six-decisions"
          className="my-8 scroll-mt-24 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 sm:p-7"
        >
          <h2 className="text-2xl font-black leading-snug tracking-wide text-gray-900 sm:text-3xl">
            大雨前にまず決めたい6つのこと
          </h2>
          <p className={`mt-4 ${cls.bodySm}`}>
            迷ったときは、商品名より先に次の条件を確認すると選びやすくなります。
          </p>
          <Table>
            <thead>
              <tr>
                <Th>現場の条件</Th>
                <Th>最初に検討しやすい資材</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>土や砂を確保でき、複数人で運搬できる</Td>
                <Td>
                  <strong>普通土のう</strong>
                </Td>
              </tr>
              <tr>
                <Td>保管スペースが小さく、短時間で展開したい</Td>
                <Td>
                  <strong>吸水土のう</strong>
                </Td>
              </tr>
              <tr>
                <Td>細長い場所、仮排水路、重し用途</Td>
                <Td>
                  <strong>まくら土のう</strong>
                </Td>
              </tr>
              <tr>
                <Td>一定期間屋外で使う可能性がある</Td>
                <Td>
                  <strong>耐候性を明示した土のう</strong>
                </Td>
              </tr>
              <tr>
                <Td>河川・道路などの災害復旧、大規模土工</Td>
                <Td>
                  <strong>大型土のう</strong>
                </Td>
              </tr>
              <tr>
                <Td>広いシャッター、高い想定水位、少人数運用</Td>
                <Td>
                  <strong>止水板等も比較</strong>
                </Td>
              </tr>
            </tbody>
          </Table>
          <p className={cls.bodySm}>
            購入数は袋の寸法だけで決めず、
            <Mark>
              候補商品を2〜3袋用意し、守りたい場所で一度仮置きして実効幅と搬送時間を測る
            </Mark>
            のが実務的です。
          </p>
        </section>

        <H3>まず比較したい2つ</H3>
        <ProductGrid ids={["1137010104", "1137010702"]} />
        <CtaAside
          title="土のうの種類をまとめて見たい場合"
          text="普通・吸水・耐候性など、用途から候補を絞りたいときは一覧で比較すると進めやすいです。"
          href={soilbagCta}
          label="土のう一覧をまとめて見る"
          dataCta="soilbag-list-upper"
        />

        <nav
          aria-label="記事内目次"
          className="my-8 rounded-xl border border-gray-200 bg-gray-50 p-5"
        >
          <p className="font-bold text-gray-900">この記事の目次</p>
          <ul className="mt-3 grid gap-2 text-sm leading-7 sm:grid-cols-2">
            {tocItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="underline underline-offset-4"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <H2 id="start-from-risk">
          会社の水害対策は「土のうを何袋買うか」から始めない
        </H2>
        <Figure
          src={IMG("factory-flood-risk-opening-inspection.jpg")}
          alt="工場のシャッターや通用口など浸水経路を事前確認するイメージ"
        />
        <P>
          土のうの備蓄で失敗しやすいのは、商品を先に決めてしまうことです。守る場所が一つならまだしも、工場や倉庫にはシャッター、通用口、搬入口、地下への階段、機械室、排水口周辺など複数の浸水経路があります。
        </P>
        <P>
          全部へ同じように土のうを並べる前提では、必要数も作業人数も膨らみます。優先順位を決める方が現実的です。
        </P>

        <H3>まず守る開口部を5分で洗い出す</H3>
        <P>平面図がなくても、最初は写真付きの簡単な一覧で構いません。</P>
        <Table>
          <thead>
            <tr>
              <Th>優先</Th>
              <Th>例</Th>
              <Th>判断の考え方</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td>
                <strong>A</strong>
              </Td>
              <Td>受変電設備につながる入口、重要在庫の前、地下入口</Td>
              <Td>浸水すると安全・操業への影響が大きい</Td>
            </tr>
            <tr>
              <Td>
                <strong>B</strong>
              </Td>
              <Td>通用口、倉庫シャッター、事務所入口</Td>
              <Td>代替動線や高所移動で補えるか確認</Td>
            </tr>
            <tr>
              <Td>
                <strong>C</strong>
              </Td>
              <Td>被害が限定的な屋外倉庫、排水しやすい場所</Td>
              <Td>人員に余裕がある場合に対応</Td>
            </tr>
          </tbody>
        </Table>
        <P>
          この優先順位があるだけで、大雨前に「どこから置くか」で迷いにくくなります。
        </P>

        <H3>人員・土砂・保管場所まで一緒に決める</H3>
        <P>
          普通土のうは、袋を買えば完成ではありません。土や砂を詰め、口を処理し、目的の場所まで運びます。満たした土のうは相応の重量になるため、備蓄数量だけでなく搬送作業まで考える必要があります。
        </P>
        <P>
          一方、吸水土のうは未使用時の保管性に優れますが、使用時には商品ごとの吸水条件があります。「軽いから一人で全部対応できる」と決めつけず、吸水後の重量を含めて搬送計画を作ります。
        </P>

        <H2 id="types">普通土のう・吸水土のう・耐候性・大型は何が違う？</H2>
        <P>
          「土のう」と呼ばれる商品でも、役割はかなり違います。法人備蓄では、価格やサイズだけでなく
          <Mark>準備に必要なもの・展開速度・保管性・使用場所</Mark>
          で分けると判断しやすくなります。
        </P>
        <Table>
          <thead>
            <tr>
              <Th>種類</Th>
              <Th>準備に必要なもの</Th>
              <Th>展開しやすさ</Th>
              <Th>保管性</Th>
              <Th>向く場所</Th>
              <Th>注意点</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td>
                <strong>普通土のう</strong>
              </Td>
              <Td>土・砂、充填、搬送</Td>
              <Td>準備できれば汎用的</Td>
              <Td>完成品はかさばる</Td>
              <Td>工場・倉庫・工事</Td>
              <Td>重量と人員</Td>
            </tr>
            <tr>
              <Td>
                <strong>吸水土のう</strong>
              </Td>
              <Td>商品指定の水</Td>
              <Td>短時間展開しやすい商品あり</Td>
              <Td>未使用時は省スペース</Td>
              <Td>店舗・事務所・地下入口</Td>
              <Td>吸水条件・処理</Td>
            </tr>
            <tr>
              <Td>
                <strong>まくら土のう</strong>
              </Td>
              <Td>土・砂、充填</Td>
              <Td>細長い配置向き</Td>
              <Td>商品による</Td>
              <Td>仮排水・隙間・重し</Td>
              <Td>用途を限定して選ぶ</Td>
            </tr>
            <tr>
              <Td>
                <strong>耐候性</strong>
              </Td>
              <Td>商品による</Td>
              <Td>商品による</Td>
              <Td>期間を選べる商品あり</Td>
              <Td>屋外工事・長期仮設</Td>
              <Td>対応年数を個別確認</Td>
            </tr>
            <tr>
              <Td>
                <strong>大型土のう</strong>
              </Td>
              <Td>重機・吊り具・施工計画</Td>
              <Td>人力設置とは別</Td>
              <Td>施工資材として管理</Td>
              <Td>河川・道路・復旧</Td>
              <Td>安全管理が別物</Td>
            </tr>
          </tbody>
        </Table>

        <H3>普通土のう：土砂を確保できる拠点の基本候補</H3>
        <P>
          工場、建設会社、資材置場など、土砂を確保できる拠点では普通土のうが使いやすい選択肢です。数量をまとめて備えやすく、浸水対策以外にも重しや土木用途で使えるため、平時の資材と防災備蓄を兼ねられる現場もあります。
        </P>
        <P>
          ただし、袋だけを棚に積んでいても、緊急時にすぐ土のうになるとは限りません。土砂の置場、スコップ、充填場所、完成品の搬送経路まで一緒に決めておきます。
        </P>

        <H3>吸水土のう：土砂を常備しにくい施設で使いやすい</H3>
        <Figure
          src={IMG("absorbent-flood-bags-building-entrance.jpg")}
          alt="土砂を置きにくい施設入口で吸水式の水害対策資材を配置するイメージ"
        />
        <P>
          都市部の事務所や店舗では、土砂を置いておくこと自体が難しい場合があります。吸水土のうはその課題に合いやすい一方、種類によって吸水後の形状・重量・滑り止め・連結方法が異なります。比較するときは「未使用時の薄さ」だけでなく、
          <Mark>吸水後</Mark>
          を見てください。
        </P>
        <ProductGrid ids={["1137010800", "1137010803"]} />

        <H3>まくら土のう：細長い場所や仮排水に</H3>
        <P>
          まくら土のうは、一般的な土のうより細長い形状です。「入口の水を全部止めるための土のう」と決めつけるより、仮設排水路や細い箇所、重しなど、形状を活かした用途で考えると選びやすくなります。
        </P>
        <ProductGrid ids={["1137010201", "1137010202"]} />
        <CtaAside
          title="普通・吸水・耐候性土のうを比較する"
          text="入口の条件が固まってきたら、種類を横断して候補を絞り込みます。"
          href={soilbagCta}
          label="土のう一覧で比較する"
          dataCta="soilbag-list-middle"
        />

        <H2 id="site-cases">会社・工場ならどの土のうを備蓄する？現場別の考え方</H2>
        <div className="my-6 grid gap-4 sm:grid-cols-2">
          {[
            {
              h: "土砂を確保できる工場・資材置場",
              p: "普通土のうを基本にしやすい現場です。完成品を常時大量に積むか、袋と土砂を分けて備えるかを決め、搬入口までの距離と搬送手段も合わせて確認します。",
            },
            {
              h: "都市部の事務所・店舗・地下入口",
              p: "土砂保管が難しいため吸水式が候補。入口ごとに分散備蓄し、吸水後重量まで訓練で確認します。保管期限も商品ごとに管理します。",
            },
            {
              h: "シャッターが複数ある倉庫",
              p: "総延長ではなく、重要設備や在庫に近い開口部からA/B/Cで優先順位を付けます。土のうの数量より、どこまで対応するかを先に決めます。",
            },
            {
              h: "河川・道路の災害復旧",
              p: "建物入口の小型土のうとは別に、大型土のうを施工資材として選定します。重機による充填・吊り上げ・設置を前提に考えます。",
            },
          ].map((card) => (
            <div
              key={card.h}
              className="rounded-2xl border border-gray-200 bg-white p-5"
            >
              <h3 className="text-lg font-extrabold text-gray-900">{card.h}</h3>
              <p className={`mt-2 ${cls.bodySm}`}>{card.p}</p>
            </div>
          ))}
        </div>

        <H2 id="how-many">
          土のうは何袋必要？「1mあたり○袋」ではなく実地仮置きで決める
        </H2>
        <P>
          ネット上では「1mなら○袋」といった目安を探したくなります。しかし、法人の備蓄数量を固定値だけで決めるのはおすすめしません。
        </P>
        <P>
          同じ袋でも、中身の量、平らにならしたときの幅、重ね方、段数、床の段差で必要数が変わるからです。商品寸法は購入候補を絞るには便利ですが、実際の設置幅そのものではありません。
        </P>

        <div className="my-8 space-y-4 rounded-2xl border border-gray-200 bg-gray-50 p-5 sm:p-7">
          <p className="text-lg font-extrabold text-gray-900 sm:text-xl">
            必要数を決める6ステップ
          </p>
          <p className={cls.bodySm}>
            計算機で「1m＝○袋」と自動断定するのではなく、現場で測って社内基準にします。
          </p>
          {quantitySteps.map((step) => (
            <div
              key={step.n}
              className="flex gap-4 rounded-2xl border border-gray-200 bg-white p-5"
            >
              <div
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-800 text-lg font-black text-white"
                aria-hidden="true"
              >
                {step.n}
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-gray-900">
                  {step.title}
                </h3>
                <p className={`mt-1 ${cls.bodySm}`}>{step.body}</p>
              </div>
            </div>
          ))}
        </div>
        <P>
          「何袋買うか」が「何分で設置できるか」につながって初めて、備蓄が運用になります。
        </P>

        <H2 id="storage">備蓄して終わりにしない：保管・点検・入替え</H2>
        <Figure
          src={IMG("sandbag-emergency-stockpile-storage.jpg")}
          alt="工場内で土のうや水害対策用品を取り出しやすく備蓄するイメージ"
        />
        <H3>すぐ取り出せる場所に置く</H3>
        <P>
          保管場所自体が浸水しやすい地下や低所では、必要時に取り出せない可能性があります。入口から近く、かつ水が入りにくい場所を優先します。複数棟がある場合は一か所へ集中させず、Aランク開口部の近くへ分散する方法もあります。
        </P>
        <H3>商品ごとの耐候性・保管条件を確認する</H3>
        <P>
          「土のう」という名前が同じでも、対応年数や保管条件は商品で異なります。スーパー土のうは商品ページで短期使用向け、耐候性黒まくら土のうは耐候性1年と案内されています。大型土のうにも1年対応・3年対応があります。一律に「○年使える」とせず、購入した品番ごとに確認してください。
        </P>
        <H3>点検表は品番単位で作る</H3>
        <ul className={cls.list}>
          <li>商品名・品番</li>
          <li>配置場所・数量・購入日</li>
          <li>メーカーが示す保管条件</li>
          <li>外袋の破れ・汚損、吸水式なら包装状態</li>
          <li>次回点検日・使用した場合の補充担当</li>
        </ul>

        <H2 id="initial-response">大雨予報が出たときの初動手順を決めておく</H2>
        <P>
          国土交通省の企業向け水害BCP資料では、緊急時対応業務の例として、浸水防止のための土のう積みや、機材・商品・データを浸水しない場所へ移す対応が挙げられています。重要なのは、雨が降ってからその場で相談するのではなく、発動基準と役割を平時に決めておくことです。
        </P>
        <H3>例：社内の簡易フロー</H3>
        <ol className="my-4 list-decimal space-y-2 pl-6 text-[17px] leading-[1.95] tracking-[0.04em] text-gray-900">
          <li>気象・河川・自治体情報を担当者が確認</li>
          <li>社内で定めた発動基準に達したら責任者へ連絡</li>
          <li>Aランク開口部から資材を搬送</li>
          <li>同時に重要在庫・電気機器周辺を確認</li>
          <li>設置完了時刻を記録</li>
          <li>危険が高まる前に屋外作業を終了</li>
          <li>災害後に使用数・不足・設置時間を振り返る</li>
        </ol>
        <P>
          発動基準は地域や施設で変わるため、このページの時刻や雨量をそのまま基準にするのではなく、自社のハザードと自治体情報を踏まえて決めます。
        </P>

        <H2 id="production">
          土のうを大量に作る現場は「製作方法」も備蓄計画に入れる
        </H2>
        <Figure
          src={IMG("workplace-sandbag-filling-training.jpg")}
          alt="法人の水害訓練で普通土のうを複数人で製作するイメージ"
        />
        <P>
          普通土のうを50袋、100袋と作る場合、袋の数量だけでなく製作工程がボトルネックになります。平時に製作補助具を含めて訓練し、何人で何分かかるかを測ります。
        </P>
        <ProductGrid ids={["6300049036", "1137019021"]} />
        <P>
          より大量にまとめて作る拠点では、16袋／回タイプのビービーワーカー16型も比較候補になります。導入可否は、1回の水害で何袋使うかだけでなく、複数拠点への供給、平時の工事利用、作業者数まで含めて判断します。
        </P>
        <div className="my-6 max-w-xl">
          <ProductCard id="1137019022" />
        </div>

        <H2 id="beyond-sandbags">土のうだけでは運用が重いケースもある</H2>
        <P>
          土のうは導入しやすい一方、万能ではありません。次のような場所では、止水板など別の対策も比較する価値があります。
        </P>
        <ul className={cls.list}>
          <li>間口の広い物流倉庫シャッター</li>
          <li>毎年何度も設置・撤去する施設</li>
          <li>夜間や休日に少人数しかいない拠点</li>
          <li>土砂の保管場所がない</li>
          <li>大量の土のうを遠距離搬送しなければならない</li>
          <li>想定する浸水条件が土のうだけでは対応しにくい</li>
        </ul>
        <P>
          土のうと止水板を優劣で決めるのではなく、
          <Mark>初期費用、設置時間、人員、保管、開口幅、使用頻度</Mark>
          で比較してください。
        </P>
        <aside className="my-8 rounded-2xl border border-gray-300 bg-gray-50 p-5 sm:p-6">
          <p className="text-xl font-extrabold text-gray-900">
            土のう以外の止水方法も比較する
          </p>
          <p className={`mt-2 ${cls.bodySm}`}>
            工場・倉庫のシャッターや搬入口を守る止水板・簡易パネルの選び方は、別記事で開口幅・床条件・設置人数から整理しています。
          </p>
          <div className="mt-4">
            <Link
              href={FLOOD_BARRIER_ARTICLE}
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-gray-900 px-5 py-3 text-center text-[15px] font-extrabold text-white transition hover:bg-gray-700"
            >
              工場・倉庫の浸水対策（止水板）を見る
            </Link>
          </div>
        </aside>

        <H2 id="large-bags">大型土のうは建物入口用とは別物として考える</H2>
        <Figure
          src={IMG("large-sandbags-river-recovery-worksite.jpg")}
          alt="河川や道路の災害復旧で大型土のうを重機施工するイメージ"
        />
        <P>
          大型土のうは河川・道路などの仮設・災害復旧で使う施工資材です。重機による充填・吊り上げ・設置を前提とするため、建物入口に人力で並べる小型土のうとは分けて選びます。
        </P>
        <H3>1年対応と3年対応は設置期間で選ぶ</H3>
        <P>
          「耐候性大型土のう
          ツートンバッグ」には1年対応・3年対応があります。商品ページでは直径1100×高さ1100mm、容量1m3、最大充填質量2t（20kN）として案内され、仮設道路、仮締切、仮護岸、河川決壊などの災害復旧用途が想定されています。短期間の復旧工事と、より長期間の仮設では必要な対応年数が異なります。
        </P>
        <ProductGrid ids={["6300050950", "6300050951"]} />
        <H3>大型土のうスタンドは製作工程を短くするための道具</H3>
        <P>
          大型土のうを継続的に製作する現場では、袋そのものだけでなく「袋を保持して充填する工程」が作業性を左右します。
        </P>
        <div className="my-6 max-w-xl">
          <ProductCard id="1137019003" />
        </div>
        <Caution title="大型土のうの安全管理">
          <p>
            大型土のうの吊り上げは製品注意事項、吊り具、施工計画、安全管理に従い、吊り荷の下へ人が入らないようにしてください。建物入口の小型土のうと同じ感覚で扱わないでください。
          </p>
        </Caution>

        <H2 id="bcp">水害BCPでは土のうと一緒に「浸水後」も備える</H2>
        <Figure
          src={IMG("corporate-flood-bcp-emergency-supplies.jpg")}
          alt="土のうだけでなく簡易トイレや照明などを確認する法人の災害備蓄イメージ"
        />
        <P>
          土のうは水が入る前の対策です。一方、実際に災害が起きると、停電、断水、トイレ使用不能、通信不良など別の問題が続く可能性があります。
        </P>
        <H3>災害時トイレは後回しにしない</H3>
        <P>
          経済産業省は、災害時トイレの備蓄について
          <Mark>1人あたり35回分、7日分</Mark>
          を目安として案内しています。事業所では「従業員数×出勤想定人数×備蓄日数」を確認し、既存備蓄と不足分を把握しておくとよいでしょう。
        </P>
        <div className="my-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
            <h3 className="text-xl font-extrabold text-gray-900">
              断水時のトイレ備蓄
            </h3>
            <p className={`mt-2 ${cls.bodySm}`}>
              従業員数と想定滞在人数から不足を確認します。
            </p>
            <div className="mt-4">
              <ExtCta href={toiletCta} dataCta="toilet-list-bcp">
                簡易トイレ一覧を見る
              </ExtCta>
            </div>
          </div>
          <div className="rounded-2xl border border-gray-300 bg-gray-50 p-5">
            <h3 className="text-xl font-extrabold text-gray-900">
              水害以外の備蓄も確認
            </h3>
            <p className={`mt-2 ${cls.bodySm}`}>
              照明、電源、衛生、作業用品などを同時に見直します。
            </p>
            <div className="mt-4">
              <ExtCta
                href={disasterCta}
                dataCta="disaster-list-bcp"
                tone="dark"
              >
                災害対策アイテム一覧を見る
              </ExtCta>
            </div>
          </div>
        </div>
        <P>
          水害備蓄を見直すタイミングで、災害時トイレ、懐中電灯・作業灯、予備電源、衛生用品、手袋・長靴、養生材、清掃・排水用品、連絡手段なども一覧化しておくと、BCP全体がつながりやすくなります。事業所全体の備蓄は
          <Link
            href="/articles/business-disaster-stockpile-checklist"
            className="font-bold underline underline-offset-4"
          >
            防災備蓄チェックリスト
          </Link>
          もあわせて参照してください。
        </P>

        <H2 id="failures">会社の土のう備蓄でよくある失敗</H2>
        <div className="my-6 space-y-4">
          {[
            {
              h: "袋だけ買い、詰める土砂を決めていない",
              p: "普通土のうを採用するなら、土砂の場所・スコップ・充填スペースまで備蓄計画です。",
            },
            {
              h: "倉庫の奥に入れてしまう",
              p: "緊急用品は通常在庫とは別のアクセス動線を確保します。",
            },
            {
              h: "袋の横幅だけで必要数を計算する",
              p: "充填すると形が変わり、重ねると実効幅も変わります。実地仮置きで決めます。",
            },
            {
              h: "設置開始の判断者がいない",
              p: "一次判断者と代行者を決め、発動基準を共有します。",
            },
            {
              h: "吸水土のうの使用条件を確認していない",
              p: "吸水方法、吸水後重量、処理方法は商品ごとに確認します。",
            },
            {
              h: "土のうだけで完全に水を止められると思う",
              p: "重要設備を守る拠点では、移設・嵩上げ・止水板・排水設備などと組み合わせて考えます。",
            },
          ].map((item) => (
            <div
              key={item.h}
              className="rounded-xl border border-gray-200 bg-white p-5"
            >
              <h3 className="text-lg font-extrabold text-gray-900">{item.h}</h3>
              <p className={`mt-1 ${cls.bodySm}`}>{item.p}</p>
            </div>
          ))}
        </div>

        <H2 id="checklist">法人向け：水害備蓄チェックリスト</H2>
        <ul className="my-6 space-y-3 text-[17px] leading-[1.95] tracking-[0.04em] text-gray-900">
          {checklistItems.map((item) => (
            <li key={item} className="flex gap-3">
              <span aria-hidden="true" className="mt-1 font-bold">
                □
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <P>
          このチェックリストは一度埋めて終わりではなく、レイアウト変更、在庫移動、人員変更、新商品の導入があったときに更新します。
        </P>

        <H2 id="faq">よくある質問</H2>
        <div className="my-6 divide-y divide-gray-200 rounded-2xl border border-gray-200">
          {faqs.map((faq) => (
            <details key={faq.q} className="group p-5">
              <summary className={`${cls.faqQ} cursor-pointer list-none`}>
                <span className="mr-2 text-gray-900">Q.</span>
                {faq.q}
              </summary>
              <p className={`mt-3 pl-7 ${cls.bodySm}`}>{faq.a}</p>
            </details>
          ))}
        </div>

        <H2 id="summary">まとめ：土のうは「買う」より先に「使える状態」を作る</H2>
        <P>
          会社の水害対策で大切なのは、土のうの種類をたくさん知ることではありません。
        </P>
        <ol className="my-4 list-decimal space-y-2 pl-6 text-[17px] leading-[1.95] tracking-[0.04em] text-gray-900">
          <li>どこから水が入りそうか確認する</li>
          <li>守る場所に優先順位を付ける</li>
          <li>普通土のう・吸水式・耐候性・大型を用途で分ける</li>
          <li>実物を仮置きして必要数を決める</li>
          <li>搬送時間と担当者を決める</li>
          <li>保管・点検・訓練まで標準化する</li>
        </ol>
        <P>
          ここまでできれば、棚に置いてあるだけの防災用品が、実際に動かせる水害対策へ変わります。
        </P>

        <section className="mt-10 grid gap-4 rounded-2xl bg-gray-950 p-5 sm:p-7 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-extrabold text-white">土のうを比較する</h3>
            <p className="mt-2 text-sm leading-6 text-gray-100">
              普通・吸水・耐候性などを用途から確認。
            </p>
            <div className="mt-4">
              <ExtCta href={soilbagCta} dataCta="soilbag-list-final">
                土のう一覧
              </ExtCta>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-extrabold text-white">断水時の備え</h3>
            <p className="mt-2 text-sm leading-6 text-gray-100">
              事業所の人数に合わせてトイレ備蓄を確認。
            </p>
            <div className="mt-4">
              <ExtCta href={toiletCta} dataCta="toilet-list-final">
                簡易トイレ一覧
              </ExtCta>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-extrabold text-white">災害対策をまとめて</h3>
            <p className="mt-2 text-sm leading-6 text-gray-100">
              照明・衛生・防災用品も一緒に見直す。
            </p>
            <div className="mt-4">
              <ExtCta href={disasterCta} dataCta="disaster-list-final">
                災害対策一覧
              </ExtCta>
            </div>
          </div>
        </section>

        <H2>参考にした主な公的・メーカー情報</H2>
        <ul className={`${cls.list} list-none pl-0`}>
          <li>国土交通省 九州地方整備局「水害版BCP」</li>
          <li>経済産業省「トイレ備蓄 忘れていませんか」</li>
          <li>
            GREEN CROSS-select 各商品ページ（2026年8月12日確認）
          </li>
        </ul>

        <H2>関連記事</H2>
        <ul className={cls.list}>
          <li>
            <Link
              href={FLOOD_BARRIER_ARTICLE}
              className="font-bold underline underline-offset-4"
            >
              工場・倉庫の浸水対策｜シャッター・搬入口を守る止水板と土のう代替品の選び方【2026年版】
            </Link>
          </li>
          <li>
            <Link
              href="/articles/business-disaster-stockpile-checklist"
              className="font-bold underline underline-offset-4"
            >
              事業所の防災備蓄チェックリスト｜72時間・帰宅困難者対策・BCP対応の完全ガイド【2026年】
            </Link>
          </li>
          <li>
            <Link
              href="/articles/simple-toilet-stock-quantity"
              className="font-bold underline underline-offset-4"
            >
              簡易トイレの備蓄量の目安
            </Link>
          </li>
        </ul>

        <p className={cls.meta}>
          ※商品仕様、在庫、セット内容、使用条件は変更される場合があります。購入時はリンク先の商品ページ・メーカーの最新情報をご確認ください。
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
