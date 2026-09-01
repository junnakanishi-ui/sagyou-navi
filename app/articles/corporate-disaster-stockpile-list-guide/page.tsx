import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";
import productData from "./product-data.json";

const SLUG = productData.slug;
const SITE_URL = "https://www.sagyou-navi.com";
const CANONICAL = `${SITE_URL}/articles/${SLUG}`;
const PUBLISHED = "2026-09-01";
const H1 = productData.title;
const SHORT_TITLE = "企業・施設の防災備蓄品リスト";
const DESCRIPTION =
  "企業・施設・事務所の防災備蓄品を何から揃えるべきか迷う方向けに、蓄電池、テント・間仕切り、防災マット、防災毛布、非常食、防災セット、簡易トイレ、防災グッズの選び方を総合解説。GC-select掲載商品もカテゴリ別に紹介します。";
const HERO = "/articles/bosai/hero.jpg";
const IMG_DIR = `/images/articles/${SLUG}`;
const PRODUCT_IMG = (id: string) => `${IMG_DIR}/products/${id}.jpg`;
const EXT_REL = "nofollow sponsored noopener noreferrer";

type Category = (typeof productData.categories)[number];
type Product = Category["products"][number];

export const metadata: Metadata = {
  title: H1,
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: H1,
    description: DESCRIPTION,
    type: "article",
    url: CANONICAL,
    siteName: "作業用品ナビ",
    publishedTime: PUBLISHED,
    modifiedTime: PUBLISHED,
    images: [{ url: `${SITE_URL}${HERO}`, width: 1280, height: 720, alt: "企業・施設向けの防災備蓄品を一覧でイメージできる写真" }],
  },
  twitter: {
    card: "summary_large_image",
    title: H1,
    description: DESCRIPTION,
    images: [`${SITE_URL}${HERO}`],
  },
};

const overviewRows = [
  ["蓄電池", "停電対策、通信・照明の継続", "ポータブル蓄電池、ソーラーパネル"],
  ["テント・間仕切り", "プライバシー確保、更衣・授乳・休憩", "避難用テント、簡易ブース"],
  ["防災マット", "床の冷え・硬さ対策", "アルミマット、エアマット"],
  ["防災毛布", "保温、体調維持", "圧縮毛布、不織布毛布"],
  ["非常食・保存食", "食料確保", "缶入り食品、防災おにぎり、保存水"],
  ["防災セット用品", "初動備蓄の一括整備", "個人用セット、共有セット"],
  ["簡易トイレ", "断水時の衛生確保", "簡易トイレ、凝固剤、セット品"],
  ["防災グッズ", "補助・運営・救護", "ライト、担架、ロープ、SOS幕"],
] as const;

const categoryIntros: Record<string, { lead: string; detail: string }> = {
  battery: {
    lead: "停電時に最初に困るのは、スマホの充電、照明、連絡手段の確保です。パソコンや大型機器をすべて回すのは難しくても、最低限の連絡体制と明かりを維持できるかで初動対応のしやすさが大きく変わります。",
    detail: "蓄電池は「容量」だけでなく、誰が、どこで、何に使うかを先に決めるのがコツです。",
  },
  tent: {
    lead: "見落とされやすいのが、プライバシーの確保です。避難所や一時待機スペースでは、更衣、授乳、休憩、体調不良者のスペース確保など、個室に近い空間が必要になる場面が少なくありません。",
    detail: "人数が多い拠点ほど、テントや間仕切りの有無が避難環境の質を大きく左右します。",
  },
  mat: {
    lead: "食料や水を揃えていても、床で眠る状況が続くと体力は想像以上に削られます。防災マットは地味ですが、身体への負担を減らし、睡眠の質を確保するために優先度の高い備蓄です。",
    detail: "短期避難ならアルミ系の簡易マットが回しやすく、長期化を見込むならエアマット系も検討したいところです。",
  },
  blanket: {
    lead: "毛布は寒さ対策だけでなく、避難時のストレス軽減にも直結します。とくに高齢者や体調不良者がいる環境では、毛布の有無が体調管理に大きく影響します。",
    detail: "防災マットと防災毛布は代替関係ではなく、役割が違います。マットは床対策、毛布は保温対策です。",
  },
  food: {
    lead: "保存食は量だけでなく、食べやすさ、配布しやすさ、味の単調さを避けることも重要です。企業の備蓄では、調理不要・配りやすい・長期保存しやすい食品が中心になります。",
    detail: "保存食は、主食系、軽食・補食系、飲料水の3つに分けて揃えると抜けにくくなります。",
  },
  set: {
    lead: "「何から揃えればいいか分からない」という場合、防災セットは有効です。とくに個人配布用や初動用としては、最初の抜け漏れを減らす入口になります。",
    detail: "ただし、防災セットだけで全体が完成するわけではありません。簡易トイレ、追加の保存食、毛布・マット、蓄電池、間仕切りなどを足していく発想が必要です。",
  },
  toilet: {
    lead: "水や食料と比べて後回しにされがちですが、断水時にもっとも困りやすいのがトイレです。衛生環境の悪化は体調不良や心理的ストレスにも直結するため、簡易トイレは最優先クラスで考えるべきカテゴリです。",
    detail: "企業・施設の備蓄では、「保存食はあるのにトイレがない」というケースが意外と多いです。防災セットを買う前に、トイレだけは別枠で数量設計しておくくらいでちょうどいいカテゴリです。",
  },
  goods: {
    lead: "ライト、担架、ロープ、救助要請サインなど、拠点ごとのリスクに応じて追加したい補助用品群です。ここは「あると便利」ではなく、拠点の用途によっては必須になるものも含まれます。",
    detail: "一般的な家庭向け防災記事には出てきにくいアイテムが多く、企業・施設向け記事として差別化しやすい章です。",
  },
};

const pitfalls = [
  {
    title: "防災セットだけで終わってしまう",
    body: "セット品は入口であって、カテゴリ備蓄が本体です。",
  },
  {
    title: "食料だけで満足し、トイレと寝具が抜ける",
    body: "実際の避難生活でつらいのはトイレと睡眠です。簡易トイレ、防災マット、防災毛布は早めに押さえたいところです。",
  },
  {
    title: "購入後の管理ルールがない",
    body: "保存食、保存水、電源、トイレ資材は、置いたあとにどう管理するかまで決めないと機能しません。",
  },
] as const;

const managementTips = [
  "共用品と個人配布品を分ける",
  "期限管理表を作る",
  "1拠点あたりの想定人数を先に決める",
] as const;

const checklistItems = [
  "拠点ごとの想定人数を決めているか",
  "飲料水と非常食を最低3日分、できれば1週間視点で考えているか",
  "簡易トイレを優先備蓄に入れているか",
  "就寝環境としてマットと毛布を見落としていないか",
  "停電対策として蓄電池や照明を用意しているか",
  "プライバシー確保用のテント・間仕切りが必要か",
  "共用品と個人配布品を分けているか",
  "使用期限・賞味期限の更新表があるか",
] as const;

const priorityProfiles = [
  {
    title: "事務所・営業所中心の拠点",
    body: "まずは保存食、保存水、簡易トイレ、毛布、簡易ライト、蓄電池の順で優先すると、初動対応がしやすくなります。",
  },
  {
    title: "学校・介護・公共施設などの利用者が多い拠点",
    body: "毛布、マット、テント・間仕切り、簡易トイレ、防災セットの優先度が高くなります。利用者の属性が幅広いほど、睡眠・保温・プライバシーの重要度が上がります。",
  },
  {
    title: "屋外活動や現場拠点を含む組織",
    body: "蓄電池、照明、担架、ロープ、雷警報器、浸水対策などの補助用品も重要です。とくに夜間や悪天候での活動を想定する拠点では、電源と照明の確保が安全性を左右します。",
  },
] as const;

const faqs = [
  {
    q: "防災セットだけで足りますか？",
    a: "足りません。企業・施設では、簡易トイレ、保存食、防災毛布、防災マット、蓄電池、テントなどを別途備える必要があります。",
  },
  {
    q: "会社の備蓄は何日分を目安に考えるべきですか？",
    a: "まずは最低3日分、可能であれば1週間以上を視野に入れる考え方が基本です。",
  },
  {
    q: "簡易トイレと保存食、どちらを優先すべきですか？",
    a: "どちらも重要ですが、後回しにされやすい分、簡易トイレは意識的に優先したいカテゴリです。",
  },
  {
    q: "蓄電池はソーラーパネルも一緒に必要ですか？",
    a: "必須ではありませんが、停電が長引く可能性があるなら相性は良いです。",
  },
  {
    q: "防災毛布と防災マットは両方必要ですか？",
    a: "役割が異なるため、できれば両方ある方が望ましいです。",
  },
] as const;

const tocItems = [
  { id: "summary", label: "30秒で分かる結論" },
  { id: "three-days", label: "3日分＋1週間視点" },
  { id: "overview-table", label: "防災備蓄品リスト早見表" },
  ...productData.categories.map((c) => ({
    id: c.id,
    label: c.sectionTitle.replace(/^\d+\.\s*/, ""),
  })),
  { id: "pitfalls", label: "失敗しやすい落とし穴" },
  { id: "management", label: "管理・更新のコツ" },
  { id: "checklist", label: "法人向けチェックリスト" },
  { id: "priority", label: "優先順位の決め方" },
  { id: "faq", label: "よくある質問" },
  { id: "closing", label: "まとめ" },
] as const;

const relatedArticles = [
  {
    href: "/articles/business-disaster-stockpile-checklist",
    label: "事業所の防災備蓄チェックリスト｜BCP・帰宅困難者対策",
  },
  {
    href: "/articles/simple-toilet-stock-quantity",
    label: "簡易トイレの必要数と選び方",
  },
  {
    href: "/articles/asco-chikudenmaru-kps-0202-complete-guide",
    label: "蓄電丸 KPS-0202 完全ガイド",
  },
] as const;

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: H1,
  description: DESCRIPTION,
  mainEntityOfPage: CANONICAL,
  image: [`${SITE_URL}${HERO}`],
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
    { "@type": "ListItem", position: 2, name: "記事一覧", item: `${SITE_URL}/articles` },
    { "@type": "ListItem", position: 3, name: SHORT_TITLE, item: CANONICAL },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
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
    <a href={href} target="_blank" rel={EXT_REL} data-cta={dataCta} className={className}>
      {children}
    </a>
  );
}

function CategoryCta({
  href,
  label,
  dataCta,
}: {
  href: string;
  label: string;
  dataCta: string;
}) {
  return (
    <aside className="my-8 rounded-2xl border-2 border-emerald-800 bg-emerald-50 p-6">
      <ExtLink
        href={href}
        dataCta={dataCta}
        className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-orange-600 px-5 py-3 text-center text-[15px] font-extrabold text-white transition hover:bg-orange-700 sm:w-auto"
      >
        ▶ {label}
      </ExtLink>
    </aside>
  );
}

function ProductCard({ product, categoryId }: { product: Product; categoryId: string }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-300 bg-white">
      <div className="relative aspect-square bg-gray-50">
        <Image
          src={PRODUCT_IMG(product.productId)}
          alt={`${product.name}の商品画像`}
          fill
          sizes="(max-width: 768px) 100vw, 280px"
          className="object-contain p-4"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm font-bold text-emerald-800">{productData.categories.find((c) => c.id === categoryId)?.name}</p>
        <h3 className="mt-1 text-lg font-black leading-snug text-gray-900">{product.name}</h3>
        <p className={`${cls.bodySm} mt-2 flex-1`}>{product.note}</p>
        <ExtLink
          href={product.url_with_utm}
          dataCta={`product-${product.productId}`}
          className="mt-5 inline-flex min-h-12 items-center justify-center rounded-xl bg-orange-600 px-4 py-3 text-center text-sm font-extrabold text-white transition hover:bg-orange-700"
        >
          商品ページで見る
        </ExtLink>
      </div>
    </article>
  );
}

function CategorySection({ category }: { category: Category }) {
  const intro = categoryIntros[category.id];
  return (
    <section>
      <H2 id={category.id}>{category.sectionTitle}</H2>
      <P>{intro.lead}</P>
      <H3>掲載商品の例</H3>
      <div className="my-8 grid gap-4 sm:grid-cols-2">
        {category.products.map((product) => (
          <ProductCard key={product.productId} product={product} categoryId={category.id} />
        ))}
      </div>
      <P>{intro.detail}</P>
      <CategoryCta
        href={category.cta_url_with_utm}
        label={category.cta_label}
        dataCta={`category-${category.id}`}
      />
    </section>
  );
}

export default function Page() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      <SiteHeader />
      <main className="bg-white">
        <article className="mx-auto max-w-[850px] px-4 pb-16 pt-8 sm:px-6">
          <nav aria-label="パンくず" className={`${cls.meta} mb-6`}>
            <Link href="/" className="underline-offset-2 hover:underline">
              作業用品ナビ
            </Link>
            <span className="mx-2">/</span>
            <Link href="/articles" className="underline-offset-2 hover:underline">
              記事一覧
            </Link>
            <span className="mx-2">/</span>
            <span>{SHORT_TITLE}</span>
          </nav>

          <p className="mb-3 text-sm font-bold tracking-wide text-emerald-800">
            防災用品 / 企業備蓄
          </p>
          <h1 className={cls.h1}>{H1}</h1>
          <p className={`${cls.meta} mb-8`}>
            公開日：{PUBLISHED.replace(/-/g, "/")} ｜ 読了目安：約24分
          </p>

          <Figure
            src={HERO}
            alt="企業・施設向けの防災備蓄品を一覧でイメージできる写真"
            priority
          />

          <P>
            地震、台風、豪雨などで停電や断水が起きたとき、会社や施設の備えは「防災セットを1箱置いてある」だけでは十分ではありません。実際に困りやすいのは、電気が止まる、水が使えない、床で眠る、プライバシーがない、食事が続かないという日常生活そのものです。
          </P>
          <P>
            この記事では、企業・施設・事務所・避難所運営の視点から、GC-select掲載商品をもとに
            <Mark>防災備蓄品リストの作り方</Mark>
            を整理します。蓄電池、テント・間仕切り、防災マット、防災毛布、非常食・保存食、防災セット用品、簡易トイレ、防災グッズまで、総合防災の記事として1本で把握できる構成です。
          </P>

          <nav
            aria-label="目次"
            className="my-10 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 sm:p-6"
          >
            <p className="mb-3 text-lg font-black text-emerald-900">目次</p>
            <ol className="space-y-2 text-[15px] leading-7 text-gray-900">
              {tocItems.map((item, i) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="font-bold underline-offset-2 hover:underline"
                  >
                    {i + 1}. {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <section
            id="summary"
            className="scroll-mt-24 rounded-2xl border-2 border-emerald-800 bg-emerald-50 p-6 md:p-8"
          >
            <h2 className="text-2xl font-black text-emerald-900 sm:text-3xl">
              30秒で分かる企業・施設の防災備蓄
            </h2>
            <P>
              結論から言うと、防災備蓄は次の順で考えると失敗しにくくなります。
            </P>
            <ol className="my-4 list-decimal space-y-2 pl-6 text-[17px] leading-[1.95] text-gray-900">
              <li>
                <strong>生命維持</strong>：飲料水、非常食、簡易トイレ、照明
              </li>
              <li>
                <strong>睡眠・保温</strong>：防災マット、防災毛布
              </li>
              <li>
                <strong>停電対策</strong>：蓄電池、ソーラーパネル
              </li>
              <li>
                <strong>プライバシー確保</strong>：テント、間仕切り、ブース
              </li>
              <li>
                <strong>初動対応・補助</strong>：防災セット、担架、ロープ、SOS幕、簡易ライト
              </li>
            </ol>
            <P>
              内閣府は、飲料水を
              <Mark>1人1日3リットルを目安に3日分</Mark>
              、食料を
              <Mark>最低3日分</Mark>
              、広域災害では
              <Mark>1週間以上の備蓄が望ましい</Mark>
              としています。まずはこの考え方を土台に、拠点人数に応じてカテゴリごとの備蓄を積み上げるのが基本です。
            </P>
          </section>

          <H2 id="three-days">防災備蓄品は「3日分＋1週間視点」で考える</H2>
          <P>
            防災の記事でありがちなのが、「とりあえず防災セットを買えばいい」という結論です。しかし、企業や施設の現場ではそれだけでは足りません。
          </P>
          <H3>まずは最低3日分、できれば1週間分を視野に入れる</H3>
          <P>備蓄は、次の3段階で考えると整理しやすくなります。</P>
          <ul className={cls.list}>
            <li>
              <strong>当日〜1日目</strong>をしのぐ初動備蓄
            </li>
            <li>
              <strong>2〜3日目</strong>を乗り切る生活維持備蓄
            </li>
            <li>
              <strong>4日目以降</strong>の長期化を見据えた拡張備蓄
            </li>
          </ul>
          <H3>食料はローリングストックの考え方も重要</H3>
          <P>
            食品備蓄は「非常食だけを大量に置く」よりも、農林水産省が紹介する
            <Mark>ローリングストック</Mark>
            の考え方が実務的です。普段使いできる保存性の高い食品を少し多めに持ち、古いものから消費して補充するやり方なら、期限切れのムダも減らせます。
          </P>

          <H2 id="overview-table">防災備蓄品リスト早見表</H2>
          <Table>
            <thead>
              <tr>
                <Th>カテゴリ</Th>
                <Th>目的</Th>
                <Th>まず押さえたい内容</Th>
              </tr>
            </thead>
            <tbody>
              {overviewRows.map(([category, purpose, items]) => (
                <tr key={category}>
                  <Td>
                    <strong>{category}</strong>
                  </Td>
                  <Td>{purpose}</Td>
                  <Td>{items}</Td>
                </tr>
              ))}
            </tbody>
          </Table>
          <P>
            防災セットだけでは、「床で眠る」「停電に対応する」「トイレを回す」までカバーしきれないのが実際のところです。ここから先はカテゴリ別に見ていきます。
          </P>

          {productData.categories.map((category) => (
            <CategorySection key={category.id} category={category} />
          ))}

          <H2 id="pitfalls">法人備蓄で失敗しやすい3つの落とし穴</H2>
          <div className="my-6 space-y-4">
            {pitfalls.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-emerald-200 bg-emerald-50 px-5 py-4"
              >
                <h3 className="text-lg font-black text-gray-900 sm:text-xl">
                  {item.title}
                </h3>
                <p className={`${cls.bodySm} mb-0 mt-2`}>{item.body}</p>
              </div>
            ))}
          </div>

          <H2 id="management">備蓄を続けるための管理・更新のコツ</H2>
          <ul className={cls.list}>
            {managementTips.map((tip) => (
              <li key={tip}>
                <strong>{tip}</strong>
              </li>
            ))}
          </ul>
          <P>この3つを押さえるだけでも、備蓄の精度はかなり変わります。</P>

          <H2 id="checklist">法人向けチェックリスト｜備蓄を見直すときの確認項目</H2>
          <P>
            備蓄の見直し時には、次の項目を一度チェックしておくと抜け漏れを防ぎやすくなります。
          </P>
          <ul className="my-6 space-y-3">
            {checklistItems.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-[17px] leading-[1.95] text-gray-900"
              >
                <span
                  aria-hidden
                  className="mt-1.5 inline-block h-4 w-4 shrink-0 rounded border-2 border-emerald-800 bg-white"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <P>
            このチェックリストはシンプルですが、実務ではかなり効果があります。特に、総務・施設管理・拠点責任者が別々に備蓄を見ている場合、カテゴリ単位で責任を切り分けると管理しやすくなります。
          </P>

          <H2 id="priority">カテゴリごとの優先順位の決め方</H2>
          <P>
            備蓄は、すべてを一度に完璧に揃えなくてもかまいません。重要なのは、
            <Mark>自社のリスクに合った順番</Mark>
            で整えることです。
          </P>
          {priorityProfiles.map((profile) => (
            <div key={profile.title} className="my-6">
              <H3>{profile.title}</H3>
              <P>{profile.body}</P>
            </div>
          ))}
          <P>
            このように、同じ「防災備蓄」でも、拠点特性によって優先順位は変わります。総合記事で全体像を押さえたうえで、必要なカテゴリから先に整えるのが失敗しにくい進め方です。
          </P>

          <H2 id="faq">よくある質問</H2>
          <div className="my-6 space-y-8">
            {faqs.map((item) => (
              <section key={item.q}>
                <h3 className={cls.faqQ}>{item.q}</h3>
                <P>{item.a}</P>
              </section>
            ))}
          </div>

          <H2 id="closing">まとめ｜防災備蓄は「一覧で見る → 優先順位で揃える」が正解</H2>
          <P>
            企業・施設の防災備蓄で重要なのは、思いつきで単品を買い足すことではなく、
            <Mark>カテゴリ全体を一覧で見て、優先順位をつけて揃えること</Mark>
            です。
          </P>
          <P>
            まずは自社の拠点特性に合ったカテゴリから着手し、不足している備蓄を段階的に補っていきましょう。
          </P>

          <section className="my-12 overflow-hidden rounded-2xl border-2 border-emerald-900 bg-emerald-950 p-7 text-white md:p-8">
            <h2 className="text-2xl font-black sm:text-3xl">
              カテゴリ一覧からまとめて確認する
            </h2>
            <p className="mt-3 text-[16px] leading-7 text-emerald-50">
              GC-selectの8カテゴリ一覧から、必要な備蓄品をまとめて確認できます。
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {productData.category_ctas.map((cta) => (
                <ExtLink
                  key={cta.label}
                  href={cta.url_with_utm}
                  dataCta={`footer-${cta.label}`}
                  className="inline-flex min-h-12 items-center justify-center rounded-xl bg-orange-600 px-5 py-3 text-center text-sm font-extrabold text-white transition hover:bg-orange-500"
                >
                  {cta.label}を見る
                </ExtLink>
              ))}
            </div>
          </section>

          <section className="mt-14 border-t border-gray-200 pt-10">
            <h2 className="mb-4 text-2xl font-black text-gray-900">関連記事</h2>
            <ul className="space-y-3">
              {relatedArticles.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-bold text-gray-900 underline decoration-2 underline-offset-4 hover:text-emerald-800"
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
