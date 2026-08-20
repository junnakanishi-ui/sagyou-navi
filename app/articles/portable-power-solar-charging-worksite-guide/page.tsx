import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";
import productData from "./product-data.json";

const SLUG = "portable-power-solar-charging-worksite-guide";
const SITE_URL = "https://www.sagyou-navi.com";
const CANONICAL = `${SITE_URL}/articles/${SLUG}`;
const ARTICLE_TITLE =
  "屋外現場でポータブル電源を長く使うには？充電切れ対策と200Wソーラーパネルの運用【2026年版】";
const META_TITLE =
  "ポータブル電源の充電切れ対策｜屋外現場で200Wソーラーパネルを使う方法【2026年】";
const SHORT_TITLE = "ポータブル電源の充電切れ対策";
const DESCRIPTION =
  "工事現場・屋外イベントなど、コンセントが取れない場所でポータブル電源を長く使うための考え方を解説。消費Whとソーラーで補えるWhの計算、200Wパネル、互換性、設置・安全面まで法人向けに整理します。";
const PUBLISHED = "2026-08-20";
const IMG = (file: string) => `/images/articles/${SLUG}/${file}`;
const PROD = (file: string) => `/images/articles/${SLUG}/products/${file}`;
const EXT_REL = "nofollow sponsored noopener";

const CTA = Object.fromEntries(
  productData.ctas.map((c) => [c.id, c])
) as Record<(typeof productData.ctas)[number]["id"], (typeof productData.ctas)[number]>;

const powerRows = [
  { input: "50W", restored: "200Wh", ratio: "10%" },
  { input: "100W", restored: "400Wh", ratio: "20%" },
  { input: "150W", restored: "600Wh", ratio: "30%" },
  { input: "200W", restored: "800Wh", ratio: "40%" },
] as const;

const consumptionRows = [
  { device: "LED照明", watts: "50W", hours: "4時間", wh: "200Wh" },
  { device: "ノートPC・端末", watts: "65W", hours: "3時間", wh: "195Wh" },
  { device: "充電器", watts: "100W", hours: "2時間", wh: "200Wh" },
  { device: "その他小型機器", watts: "50W", hours: "3時間", wh: "150Wh" },
] as const;

const countermeasureRows = [
  {
    method: "大容量のポータブル電源にする",
    fit: "1日の消費Whが大きい",
    note: "重量・価格も上がりやすい",
  },
  {
    method: "予備バッテリー・予備機を持つ",
    fit: "確実に電気を持ち込みたい",
    note: "台数・充電管理・運搬が増える",
  },
  {
    method: "現場で充電する",
    fit: "日中に屋外で設置できる",
    note: "日射・互換性・設置条件に左右される",
  },
] as const;

const panelClassRows = [
  {
    cls: "小型パネル",
    use: "スマホ、小型バッテリー、予備充電",
    pro: "持ち運びやすい",
    check: "大容量電源では補充量が不足しやすい",
  },
  {
    cls: "100W前後",
    use: "中小容量ポータブル電源",
    pro: "携帯性と発電量のバランス",
    check: "PV入力・充電時間",
  },
  {
    cls: "200W前後",
    use: "1000〜2000Wh級などの補助充電",
    pro: "日中の補充量を増やしやすい",
    check: "設置面積・重量・互換性",
  },
  {
    cls: "複数枚・大出力",
    use: "長期運用・大容量",
    pro: "条件が合えば補充速度を上げやすい",
    check: "電圧・電流・最大PV入力・接続方法",
  },
] as const;

const checkItems = [
  "現場で使う機器を洗い出した",
  "各機器の消費電力Wを確認した",
  "1日の使用時間から消費Whを概算した",
  "夕方・翌朝に残したいWhを決めた",
  "ソーラーで1日何Wh戻したいか決めた",
  "ポータブル電源のPV入力電圧・電流を確認した",
  "コネクタと指定パネルを確認した",
  "パネルを置くスペースを確保できる",
  "朝〜夕方の日陰の変化を確認した",
  "強風時の固定・撤収ルールを決めた",
  "ケーブル養生を決めた",
  "雨天時の使用条件をメーカーへ確認した",
  "夜間の保管・盗難対策を決めた",
  "AC・予備機・発電機などバックアップを用意した",
  "導入後は「消費Whと補充Wh」を記録する",
] as const;

const faqs = [
  {
    q: "200Wソーラーパネルなら2000Whのポータブル電源を10時間で満充電できますか？",
    a: "2000Wh÷200W＝10時間は、200Wが一定で入り続け、変換損失等がないと仮定した理論計算です。実際の入力は日射・天候・影・角度・温度・充電制御等で変わるため、10時間を保証値として現場計画に使わないでください。",
  },
  {
    q: "曇りでも充電できますか？",
    a: "発電する場合はありますが、入力は晴天時より低くなりやすくなります。必要電力をソーラーだけに依存させず、悪天候時の充電手段を準備しておきます。",
  },
  {
    q: "SFM-200は他社のポータブル電源にも使えますか？",
    a: "メーカーは蓄電丸 KPS-0202専用と案内しています。他社機へ接続する前提では選ばないでください。",
  },
  {
    q: "蓄電丸はACとソーラーを同時に充電できますか？",
    a: "メーカー・販売元の商品情報では、AC充電とソーラー充電の同時使用に対応すると案内されています。同時充電時はソーラー充電を優先する仕様です。",
  },
  {
    q: "ソーラーパネルだけで電動工具を使えますか？",
    a: "SFM-200は単体使用できません。対応する蓄電池へ接続して使います。電動工具を使う場合は、蓄電池の定格出力だけでなく工具の起動電力も確認してください。",
  },
  {
    q: "200Wと100Wなら200Wを選べばよいですか？",
    a: "必ずしもそうではありません。バッテリーのPV入力上限、入力電圧・電流、コネクタ、設置面積、重量、必要な補充Whを見て判断します。",
  },
] as const;

const relatedArticles = [
  {
    href: "/articles/construction-portable-power-selection",
    label:
      "工事現場のポータブル電源の選び方｜容量・出力・用途別の目安",
  },
  {
    href: "/articles/outdoor-worksite-portable-power",
    label: "屋外現場で使うポータブル電源の選び方｜電源方式と防水・防塵",
  },
  {
    href: "/articles/business-disaster-stockpile-checklist",
    label: "事業所の防災備蓄チェックリスト｜72時間・BCP対応",
  },
] as const;

export const metadata: Metadata = {
  title: META_TITLE,
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
        url: `${SITE_URL}${IMG("worksite-portable-power-solar-charging-hero.webp")}`,
        width: 1600,
        height: 900,
        alt: "電源のない屋外工事現場でポータブル電源をソーラーパネルで補充するイメージ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: DESCRIPTION,
    images: [
      `${SITE_URL}${IMG("worksite-portable-power-solar-charging-hero.webp")}`,
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: ARTICLE_TITLE,
  description: DESCRIPTION,
  mainEntityOfPage: CANONICAL,
  image: [
    `${SITE_URL}${IMG("worksite-portable-power-solar-charging-hero.webp")}`,
  ],
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
      className={`inline-flex min-h-12 items-center justify-center rounded-xl px-5 py-3 text-center text-[15px] font-extrabold text-white transition ${toneClass}`}
    >
      {children}
    </ExtLink>
  );
}

function KeyPoints() {
  return (
    <section
      aria-labelledby="keypoints"
      className="my-8 border-y-4 border-emerald-800 bg-emerald-50 px-5 py-6 sm:px-7"
    >
      <h2 id="keypoints" className="text-2xl font-black text-gray-900 sm:text-3xl">
        先に要点
      </h2>
      <ul className="mt-4 space-y-3 text-[17px] leading-[1.85] text-gray-900">
        <li>
          充電切れ対策は、容量を大きくするだけでなく
          <Mark>使った電気を現場で補う</Mark>方法まで決める。
        </li>
        <li>
          ソーラーは商用電源が取れない屋外の補助充電に使える。発電量は天候・日射で変わる。
        </li>
        <li>
          200Wパネルでも、平均入力100W×4時間なら単純計算で約
          <Mark>400Wh</Mark>。
        </li>
        <li>
          パネル選びはW数より先に、対応電圧・電流・端子・最大PV入力を確認する。
        </li>
        <li>
          SFM-200は
          <Mark>蓄電丸 KPS-0202専用</Mark>で、<Mark>単体使用不可</Mark>。
        </li>
        <li>
          蓄電丸はAC＋ソーラー同時充電に対応するため、現場事務所へ戻った後の充電ルートも組みやすい。
        </li>
      </ul>
    </section>
  );
}

function MainProductCard() {
  return (
    <aside
      aria-labelledby="main-product"
      className="my-10 border-2 border-amber-400 bg-amber-50 p-5 sm:p-7"
    >
      <p className="text-sm font-bold text-amber-950">
        蓄電丸を日中に補充したい現場へ
      </p>
      <div className="mt-4 grid gap-6 sm:grid-cols-[200px_1fr] sm:items-start">
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
          <Image
            src={PROD("sfm-200.webp")}
            alt="蓄電丸専用200Wソーラーパネルの商品画像"
            width={600}
            height={600}
            priority
            className="h-auto w-full object-contain p-3"
          />
        </div>
        <div>
          <h2
            id="main-product"
            className="text-2xl font-black leading-snug text-gray-900 sm:text-3xl"
          >
            蓄電丸専用200Wソーラーパネル
          </h2>
          <p className="mt-3 text-[16px] leading-8 text-gray-900">
            幅1170×奥行780×高さ35mm、重量9.5kg。商品名・説明上の出力は200W。動作電圧18V、動作電流11.11A、短絡電流12.22A。
          </p>

          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            <div className="rounded-lg border-2 border-red-600 bg-red-50 px-4 py-3">
              <p className="text-sm font-bold text-red-900">重要：互換性</p>
              <p className="mt-1 text-[15px] font-extrabold leading-7 text-red-950">
                KPS-0202専用
              </p>
              <p className="text-[14px] leading-6 text-red-900">
                他社ポータブル電源への流用は想定されていません。
              </p>
            </div>
            <div className="rounded-lg border-2 border-red-600 bg-red-50 px-4 py-3">
              <p className="text-sm font-bold text-red-900">重要：使い方</p>
              <p className="mt-1 text-[15px] font-extrabold leading-7 text-red-950">
                単体使用不可
              </p>
              <p className="text-[14px] leading-6 text-red-900">
                パネル単体では機器へ給電できません。
              </p>
            </div>
          </div>

          <dl className="mt-4 grid gap-2 text-[15px] leading-7 text-gray-900 sm:grid-cols-2">
            <div className="rounded-lg bg-white px-3 py-2">
              <dt className="font-bold">向く現場</dt>
              <dd>KPS-0202使用中／日中に屋外設置できる／数日運用／停電時の補助充電</dd>
            </div>
            <div className="rounded-lg bg-white px-3 py-2">
              <dt className="font-bold">向かない現場</dt>
              <dd>他社電源へ流用／単体給電／日照がほぼない／設置スペースがない</dd>
            </div>
          </dl>

          <p className="mt-4 rounded-lg border border-amber-300 bg-white px-4 py-3 text-[15px] leading-7 text-gray-900">
            <strong>購入前確認：</strong>
            置く場所・運搬・固定方法まで確認し、対応本体が蓄電丸 KPS-0202であることを必ず確認してください。
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <ExtButton href={CTA.sfm200.url}>商品ページを見る →</ExtButton>
            <ExtButton href={CTA.solarList.url} tone="dark">
              ソーラーパネル一覧 →
            </ExtButton>
          </div>
        </div>
      </div>
    </aside>
  );
}

function PowerBudgetVisual() {
  return (
    <div className="my-6 grid gap-3 sm:grid-cols-3">
      {[
        {
          title: "使う",
          text: "1日に消費するWh",
          cls: "border-slate-900 bg-slate-50",
        },
        {
          title: "補う",
          text: "日中に戻すWh",
          cls: "border-emerald-700 bg-emerald-50",
        },
        {
          title: "残す",
          text: "夜・翌日に残すWh",
          cls: "border-amber-600 bg-amber-50",
        },
      ].map((item) => (
        <div
          key={item.title}
          className={`border-l-4 px-4 py-4 ${item.cls}`}
        >
          <strong className="block text-xl font-black text-gray-900">
            {item.title}
          </strong>
          <span className="mt-1 block text-[15px] leading-7 text-gray-900">
            {item.text}
          </span>
        </div>
      ))}
    </div>
  );
}

function RestoreFormula() {
  return (
    <div className="my-6 border-y-2 border-slate-900 py-6 text-center">
      <p className="text-sm font-bold text-gray-800">現場用の簡単な式</p>
      <p className="mt-2 text-2xl font-black tracking-wide text-gray-900 sm:text-3xl">
        平均入力W × 充電時間h ＝ 補充Wh
      </p>
    </div>
  );
}

function ScrollTable({ children }: { children: ReactNode }) {
  return (
    <div className="my-6 overflow-x-auto">
      <table className={cls.table}>{children}</table>
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
            <div className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-sm font-bold text-emerald-950">
              現場の電源運用 / 2026年8月20日公開
            </div>
            <h1 className={cls.h1}>{ARTICLE_TITLE}</h1>
            <P>
              工事現場や屋外イベントでポータブル電源を使い始めると、次に問題になるのが「残量をどう戻すか」です。朝は満充電でも、照明、ノートPC、タブレット、計測機器、各種充電器を使っているうちに残量は減っていきます。
            </P>
            <P>
              現場にコンセントがなければ、その日の作業終了まで持たせるだけでなく、翌日分の電気をどう確保するかも考えなければなりません。そこで候補になるのがソーラーパネルです。
            </P>
            <P>
              ただし、200Wのパネルを置けば200Wが朝から夕方まで入り続けるわけではありません。現場で役立つのは「満充電まで何時間」という一つの数字より、
              <Mark>1日に使う電力量に対して、日中にどれだけ戻せるか</Mark>
              を考えることです。
            </P>
          </header>

          <Figure
            src={IMG("worksite-portable-power-solar-charging-hero.webp")}
            alt="電源のない屋外工事現場でポータブル電源をソーラーパネルで補充するイメージ"
            priority
          />

          <KeyPoints />
          <MainProductCard />

          <H2 id="budget-thinking">
            ポータブル電源は「何Whあるか」だけでなく「何Wh戻せるか」で考える
          </H2>
          <P>
            ポータブル電源を選ぶ際は、容量Whと定格出力Wを確認します。これは基本です。一方、2日以上続く現場や、同じ場所で毎日使う場合にはそれだけでは足りません。
          </P>
          <P>
            たとえば2000Whのポータブル電源を用意しても、1日で1200Wh使い、夜間にAC充電できなければ、翌朝の残量は減ったままです。
            <Mark>
              容量が大きいことと、電源を継続運用できることは別の話
            </Mark>
            です。
          </P>
          <P>長期運用では、次の3つに分けると整理しやすくなります。</P>
          <PowerBudgetVisual />

          <H3>電源がない現場では「使った分を戻せない」</H3>
          <P>
            商用電源がある事務所なら、作業後にACコンセントへつないで翌朝までに戻せます。ところが、河川工事、山間部、造成、道路、仮設ヤード、屋外イベントなどでは、近くにコンセントがないことがあります。
          </P>
          <P>
            発電機を用意できる現場もありますが、燃料、排気、騒音、運搬、保管など別の管理が必要です。ポータブル電源は電気を持ち運べるのが強みですが、使えば残量は減ります。現場が長くなるほど「どれだけ持って行くか」だけでなく「現場でどう補うか」まで考える必要があります。
          </P>

          <H3>対策は「大容量化」「予備機」「現場充電」</H3>
          <ScrollTable>
            <thead>
              <tr>
                <th className={cls.th}>方法</th>
                <th className={cls.th}>向いている状況</th>
                <th className={cls.th}>注意点</th>
              </tr>
            </thead>
            <tbody>
              {countermeasureRows.map((row) => (
                <tr key={row.method}>
                  <td className={cls.td}>
                    <strong>{row.method}</strong>
                  </td>
                  <td className={cls.td}>{row.fit}</td>
                  <td className={cls.td}>{row.note}</td>
                </tr>
              ))}
            </tbody>
          </ScrollTable>
          <P>
            実務では、どれか一つに決めるより組み合わせたほうが運用しやすくなります。晴れている時間帯はソーラーで補い、悪天候が続く場合はAC、予備バッテリー、発電機などへ切り替える。こうした複線化のほうが、ソーラーだけに頼るより安定します。
          </P>

          <H2 id="daily-budget">まず計算したい「1日の電力収支」</H2>
          <Figure
            src={IMG("daily-power-budget-worksite.webp")}
            alt="現場担当者がポータブル電源の消費量と充電量を確認するイメージ"
          />
          <P>
            ソーラーパネルを追加する前に、現場で使う電力量をざっくり計算します。基本式は、
            <Mark>消費電力W × 使用時間h ＝ 消費電力量Wh</Mark>
            です。
          </P>
          <P>
            たとえば100Wの機器を3時間なら300Wh、50Wの照明を4時間なら200Whです。複数の機器を使うなら、それぞれを足します。
          </P>

          <H3>例：1日の消費Wh</H3>
          <ScrollTable>
            <thead>
              <tr>
                <th className={cls.th}>機器</th>
                <th className={cls.th}>消費電力の例</th>
                <th className={cls.th}>使用時間</th>
                <th className={cls.th}>単純計算</th>
              </tr>
            </thead>
            <tbody>
              {consumptionRows.map((row) => (
                <tr key={row.device}>
                  <td className={cls.td}>{row.device}</td>
                  <td className={cls.td}>{row.watts}</td>
                  <td className={cls.td}>{row.hours}</td>
                  <td className={cls.td}>
                    <strong>{row.wh}</strong>
                  </td>
                </tr>
              ))}
              <tr>
                <td className={cls.td}>
                  <strong>合計</strong>
                </td>
                <td className={cls.td}>—</td>
                <td className={cls.td}>—</td>
                <td className={cls.td}>
                  <Mark>745Wh</Mark>
                </td>
              </tr>
            </tbody>
          </ScrollTable>
          <P>
            これは計算方法を示す例です。実際の消費電力は使用機器の銘板・仕様書で確認してください。モーター、コンプレッサーなどを含む機器では、定格消費電力とは別に起動時の電力も確認が必要です。
          </P>
          <P>
            ポータブル電源本体の容量・出力から選びたい場合は、
            <Link
              href="/articles/construction-portable-power-selection"
              className="font-bold underline underline-offset-4"
            >
              工事現場のポータブル電源の選び方
            </Link>
            へ役割を分けます。
          </P>

          <H2 id="restore-wh">
            200Wソーラーパネルで「何Wh戻せるか」を考える
          </H2>
          <P>
            次にソーラー側です。現場で使いやすい計算は、次の式です。
          </P>
          <RestoreFormula />
          <P>
            200Wパネルだからといって、朝から夕方まで200Wが一定で入る前提にはしません。実際の入力は天候、日射量、パネルの向き、建物・車両の影などで変わります。
          </P>

          <H3>4時間充電できた場合の早見表</H3>
          <ScrollTable>
            <thead>
              <tr>
                <th className={cls.th}>4時間の平均入力</th>
                <th className={cls.th}>単純計算で補える電力量</th>
                <th className={cls.th}>2000Whに対する割合</th>
              </tr>
            </thead>
            <tbody>
              {powerRows.map((row) => (
                <tr key={row.input}>
                  <td className={cls.td}>
                    <strong>{row.input}</strong>
                  </td>
                  <td className={cls.td}>
                    <Mark>{row.restored}</Mark>
                  </td>
                  <td className={cls.td}>{row.ratio}</td>
                </tr>
              ))}
            </tbody>
          </ScrollTable>
          <p className="mb-4 rounded-lg border border-amber-300 bg-amber-50 px-4 py-3 text-[15px] leading-7 text-gray-900">
            ※変換損失、充電制御、温度等を無視した単純計算です。実際の充電量を保証するものではありません。
          </p>
          <P>
            この表で見たいのは「200Wパネルなら何時間で満充電できるか」ではありません。
            <Mark>自分の現場では、日中に何Wh戻せれば意味があるか</Mark>
            です。
          </P>
          <P>
            1日に700Wh程度使う現場なら、晴天時に400〜600Wh戻せるだけでも翌日の残量は変わります。一方、毎日1500Wh以上を消費する現場では、200Wパネル1枚だけでは補充が追いつかない可能性があります。
          </P>

          <H3>2000Wh÷200W＝10時間は“理論計算”</H3>
          <P>
            2000Whのバッテリーを200Wで充電すると、
            <Mark>2000Wh ÷ 200W ＝ 10時間</Mark>
            という数字になります。ただしこれは、ゼロから満充電まで200Wが途切れず入力し、変換損失などもないと仮定した計算です。
          </P>
          <P>
            太陽光発電は気象条件で発電量が変動します。現場では「10時間あれば満充電」と決め打ちするより、入力表示や残量を実際に確認し、日中に何Wh戻せたかを記録するほうが運用改善につながります。
          </P>

          <H2 id="fit-sites">200Wソーラーパネルが向く現場・向かない現場</H2>
          <Figure
            src={IMG("remote-civil-worksite-no-grid-power.webp")}
            alt="商用電源が取りにくい河川工事でポータブル電源を使うイメージ"
          />

          <H3>山間部・河川・道路など、商用電源が遠い現場</H3>
          <P>
            パネルを日中設置でき、太陽を遮るものが少ない場所は、ソーラー充電を検討しやすい環境です。監視機器、通信機器、照明、端末などをポータブル電源で使い、日中に残量を補う運用が考えられます。
          </P>
          <P>
            ただし電動工具など大きな電力を使う場合は、ソーラー発電量だけでなく、ポータブル電源本体の定格出力・容量・起動電力を確認してください。
          </P>

          <H3>屋外イベント・仮設受付</H3>
          <Figure
            src={IMG("outdoor-event-portable-power-solar.webp")}
            alt="屋外イベント受付でポータブル電源とソーラー充電を使うイメージ"
          />
          <P>
            受付端末、スマートフォン、照明、小型音響などを数日使うイベントでは、日中に補助充電できる仕組みがあると夜間の残量管理がしやすくなります。イベント会場は人の動線があるため、発電量だけでなく、ケーブル養生、転倒・持ち去り対策まで必要です。
          </P>

          <H3>防災・長期停電</H3>
          <P>
            停電直後は満充電のポータブル電源があっても、停電が長引けば残量は減ります。ソーラーパネルは日中の補助充電手段になりますが、天候に左右されるため「ソーラーがあるから充電手段はこれだけでよい」とは考えないほうが安全です。
          </P>
          <P>
            事業所の備蓄全体については、
            <Link
              href="/articles/business-disaster-stockpile-checklist"
              className="font-bold underline underline-offset-4"
            >
              事業所の防災備蓄チェックリスト
            </Link>
            へ役割を分けます。
          </P>

          <H3>地下・トンネル・長時間日陰になる場所</H3>
          <P>
            太陽光がほとんど届かない場所では、ソーラーを主な充電手段にするのは向きません。予備バッテリー、AC充電、車載充電、発電機、仮設電源など、現場条件に合う別の方法を優先します。屋外での電源方式比較は
            <Link
              href="/articles/outdoor-worksite-portable-power"
              className="font-bold underline underline-offset-4"
            >
              屋外現場のポータブル電源
            </Link>
            も参照してください。
          </P>

          <H2 id="sfm-option">蓄電丸＋専用200Wソーラーパネルという選択肢</H2>
          <P>
            今回の主役商品は、ポータブル蓄電池「蓄電丸 KPS-0202」専用の200Wソーラーパネルです。
          </P>

          <H3>蓄電丸専用200Wソーラーパネル</H3>
          <ul className={cls.list}>
            <li>商品名上の出力：200W</li>
            <li>サイズ：幅1170×奥行780×高さ35mm</li>
            <li>重量：9.5kg</li>
            <li>動作電圧：18V</li>
            <li>動作電流：11.11A</li>
            <li>短絡電流：12.22A</li>
            <li>
              用途：蓄電丸 KPS-0202のソーラー充電（
              <Mark>専用</Mark>）
            </li>
            <li>
              単体使用：
              <Mark>不可</Mark>
            </li>
          </ul>
          <P>
            メーカー・販売元では、AC充電とソーラー充電を同時に行えることも案内されています。同時充電時はソーラー充電を優先する仕様です。
          </P>

          <H3>向くケース</H3>
          <ul className={cls.list}>
            <li>すでに蓄電丸を導入している</li>
            <li>蓄電丸を電源のない屋外へ持ち出す</li>
            <li>2日以上の運用で日中に残量を補いたい</li>
            <li>防災用蓄電池を停電中にも補充したい</li>
            <li>AC充電だけでは充電ルートが足りない</li>
          </ul>

          <H3>向かないケース</H3>
          <ul className={cls.list}>
            <li>蓄電丸以外のポータブル電源へ接続したい</li>
            <li>ソーラーパネル単体で機器を動かしたい</li>
            <li>パネルを広げるスペースがない</li>
            <li>日照がほぼ得られない</li>
            <li>9.5kgのパネルを運搬・設置できない</li>
          </ul>

          <div className="my-6 flex flex-wrap gap-3">
            <ExtButton href={CTA.sfm200.url}>
              蓄電丸専用200Wソーラーパネルを見る →
            </ExtButton>
            <ExtButton href={CTA.solarList.url} tone="dark">
              ほかのソーラーパネルも確認する →
            </ExtButton>
          </div>

          <H3>対応本体「蓄電丸 KPS-0202」</H3>
          <div className="my-6 grid gap-5 rounded-2xl border border-gray-300 bg-white p-5 sm:grid-cols-[180px_1fr] sm:p-6">
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
              <Image
                src={PROD("kps-0202.webp")}
                alt="ポータブル電源 蓄電丸 KPS-0202の商品画像"
                width={400}
                height={400}
                className="h-auto w-full object-contain p-3"
              />
            </div>
            <div>
              <p className="text-[16px] leading-8 text-gray-900">
                蓄電丸は2000Whのリン酸鉄リチウムイオンバッテリーを搭載したポータブル電源です。販売ページでは、2000Wh・2000W・IP65/IK09・充電時間約3時間などが案内されています。
              </p>
              <p className="mt-3 text-[16px] leading-8 text-gray-900">
                ソーラー充電を使う場合も、まず本体容量と使用機器を確認したうえで「1日どれくらい使い、どれくらい戻すか」を決めます。
              </p>
              <div className="mt-4">
                <ExtButton href={CTA.kps0202.url}>
                  蓄電丸の商品ページを見る →
                </ExtButton>
              </div>
            </div>
          </div>

          <H2 id="compatibility">
            ソーラーパネルは「W数」より先に互換性を確認する
          </H2>
          <P>
            「100Wより200Wのほうが速そうだから200W」という選び方だけでは不十分です。ポータブル電源には、ソーラー入力として受け付けられる電圧・電流・最大入力電力があります。
          </P>

          <H3>購入前に確認する項目</H3>
          <ol className="my-4 list-decimal space-y-2 pl-6 text-[17px] leading-[1.95] tracking-[0.04em] text-gray-900">
            <li>入力電圧の範囲</li>
            <li>入力電流の上限</li>
            <li>最大PV入力</li>
            <li>コネクタ形状</li>
            <li>メーカー指定パネルの有無</li>
            <li>複数枚接続の可否</li>
            <li>直列・並列の条件</li>
          </ol>
          <P>
            コネクタが物理的に接続できても、電気的に対応しているとは限りません。特に複数枚をつなぐ場合、直列接続では電圧、並列接続では電流が変わります。対応可否が明記されていない接続方法を自己判断で行わず、メーカー仕様を確認してください。
          </P>
          <P>
            SFM-200は、メーカーが「蓄電丸 KPS-0202専用」と案内しています。他社ポータブル電源へ流用する前提の商品ではありません。
          </P>

          <H2 id="loss-factors">発電量を落としやすい5つの条件</H2>
          <Figure
            src={IMG("solar-panel-sunlight-shadow-worksite.webp")}
            alt="ソーラーパネルの日当たりと車両や仮設物の影を確認するイメージ"
          />
          <H3>1. 曇天・雨</H3>
          <P>
            太陽光発電は日射に左右されます。雨天でも完全にゼロとは限りませんが、晴天時と同じ入力を期待して業務計画を組むのは避けます。
          </P>
          <H3>2. パネルの一部が影になる</H3>
          <P>
            建物、車両、仮設テント、資材、樹木などが時間帯によって影を作ります。朝は日が当たっていても、午後に重機や仮設構造物の影へ入ることがあります。
          </P>
          <H3>3. 太陽へ向けられていない</H3>
          <P>
            パネルの向きや角度でも受ける日射は変わります。補充量を確保したい場合は、日射を受けやすい位置へ調整できるスペースを確保します。
          </P>
          <H3>4. 汚れ・粉じん</H3>
          <P>
            土木・造成現場では、パネル表面に土ぼこりや泥が付着する可能性があります。清掃方法は製品の取扱説明書に従います。
          </P>
          <H3>5. ケーブル・接続条件</H3>
          <P>
            「発電していない」と感じた場合、天候だけでなく、接続、入力表示、コネクタ、ケーブル状態まで順に確認します。
          </P>

          <H2 id="site-safety">現場設置では「発電」以外も確認する</H2>
          <Figure
            src={IMG("solar-panel-cable-safety-placement.webp")}
            alt="ソーラーパネルの固定とケーブル養生を確認する現場イメージ"
          />
          <P>
            今回の200Wパネルは幅1170×奥行780mm、重量9.5kgです。小型モバイルパネルと比べれば、設置場所と運搬方法を先に考えておく必要があります。
          </P>

          <H3>強風で倒れない・飛ばない</H3>
          <P>
            日当たりのよい場所は風を受けやすい場合があります。製品の固定方法・風に関する条件が取扱説明書で確認できない場合は販売元へ確認します。強風時は撤収する運用も必要です。
          </P>

          <H3>ケーブルを人・車両の動線に出さない</H3>
          <P>
            パネルと蓄電池をつなぐケーブルが通路を横切らない配置にします。どうしても横切る場合は、現場ルールに沿ってケーブル保護・養生を行います。
          </P>

          <H3>パネルと蓄電池の防水性能を混同しない</H3>
          <div className="my-6 rounded-lg border border-red-300 bg-red-50 p-5 text-red-950">
            <p className="mb-1 font-bold">ご確認ください</p>
            <p className="text-[16px] leading-8">
              蓄電丸本体には販売ページでIP65性能が案内されています。一方、今回確認できたSFM-200の商品情報では、パネル自体のIP等級は明記されていません。「防水ポータブル電源専用だから、パネルや接続部も同じIP65」と判断しないでください。
            </p>
          </div>

          <H3>盗難・持ち去り対策</H3>
          <P>
            道路沿い、イベント、夜間無人になるヤードでは、ソーラーパネルが人目につきやすくなります。作業終了後の保管方法や担当者まで決めておきます。
          </P>

          <H2 id="operations">現場別の運用例</H2>
          <H3>日中の土木現場</H3>
          <P>
            朝、満充電のポータブル電源を持ち込み、照明、通信、計測、充電器などに使います。日照が得られる時間帯はソーラーで補充し、夕方以降に必要な残量を確保します。
          </P>
          <H3>2日以上の屋外イベント</H3>
          <P>
            日中は受付端末、スマートフォン、照明準備などに給電しながらソーラー充電。夜に消費が増えるなら、夕方時点の最低残量を事前に決めます。
          </P>
          <H3>災害拠点</H3>
          <Figure
            src={IMG("business-emergency-solar-battery-night.webp")}
            alt="停電時に日中充電したポータブル電源で照明と通信を確保するイメージ"
          />
          <P>
            停電時はスマートフォン、通信、照明などへ優先順位をつけます。ソーラーは補助充電に使えますが、AC復旧、車載、発電機、別バッテリーなど複数ルートを準備します。
          </P>
          <H3>現場事務所・仮設休憩所</H3>
          <P>
            日中はソーラー、ACが取れる時間はAC＋ソーラーなど、現場条件に合わせて充電します。
          </P>

          <H2 id="panel-classes">200W・100W・小型パネルはどう使い分ける？</H2>
          <ScrollTable>
            <thead>
              <tr>
                <th className={cls.th}>クラスの考え方</th>
                <th className={cls.th}>向く用途</th>
                <th className={cls.th}>長所</th>
                <th className={cls.th}>確認したい点</th>
              </tr>
            </thead>
            <tbody>
              {panelClassRows.map((row) => (
                <tr key={row.cls}>
                  <td className={cls.td}>
                    <strong>{row.cls}</strong>
                  </td>
                  <td className={cls.td}>{row.use}</td>
                  <td className={cls.td}>{row.pro}</td>
                  <td className={cls.td}>{row.check}</td>
                </tr>
              ))}
            </tbody>
          </ScrollTable>
          <P>
            これは一般的な運用クラスの整理で、特定機種への互換を示す表ではありません。使用するポータブル電源の仕様を基準に選んでください。
          </P>
          <div className="my-6">
            <ExtButton href={CTA.solarList.url}>ソーラーパネル一覧を見る →</ExtButton>
          </div>

          <H2 id="failures">よくある失敗</H2>
          <ul className={cls.list}>
            <li>定格200Wなら常時200W発電すると思う</li>
            <li>バッテリー容量だけ増やして戻し方を決めていない</li>
            <li>コネクタが合えば使えると思う</li>
            <li>朝だけ日当たりを確認して設置する</li>
            <li>パネルの固定・盗難対策を決めていない</li>
            <li>蓄電丸がIP65だからパネルも同じと思う</li>
            <li>ソーラーだけを非常時の充電手段にする</li>
            <li>SFM-200だけ購入してしまう（対応本体なし）</li>
          </ul>

          <H2 id="checklist">法人導入前チェックリスト</H2>
          <ul className="my-4 space-y-2">
            {checkItems.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-[15px] leading-7 text-gray-900"
              >
                <span
                  aria-hidden="true"
                  className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 border-amber-700 bg-white text-xs font-bold text-amber-800"
                >
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <P>
            最後の「記録する」が特に重要です。現場の日照条件や機器の使い方は会社ごとに違います。導入直後に入力W、充電前後の残量、使用機器を記録すると、翌週・翌月の電源計画が立てやすくなります。
          </P>

          <H2 id="faq">よくある質問</H2>
          <div className="my-6 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="rounded-xl border border-gray-300 bg-white p-5"
              >
                <summary className={`${cls.faqQ} cursor-pointer list-none`}>
                  {faq.q}
                </summary>
                <p className="mt-3 text-[16px] leading-8 text-gray-900">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>

          <H2 id="summary">
            まとめ｜ポータブル電源は「使う電気」と「戻す電気」をセットで考える
          </H2>
          <P>
            屋外現場でポータブル電源を長く使うなら、容量Whだけを見て終わらせず、
            <Mark>1日何Wh使い、日中に何Wh戻せるか</Mark>
            まで決めておくと運用しやすくなります。
          </P>
          <P>
            ソーラーパネルは、コンセントがない場所で電気を補える手段です。一方で、太陽光発電は天候や日射条件で変動します。発電機やAC充電を完全に置き換えるものとしてではなく、
            <Mark>充電ルートを一つ増やす設備</Mark>
            として考えるのが現実的です。
          </P>
          <P>
            蓄電丸を使っている現場なら、専用200Wソーラーパネルを組み合わせることで、日中の補助充電という選択肢が増えます。
          </P>

          <section className="my-10 rounded-2xl bg-slate-950 p-6 text-white md:p-8">
            <h3 className="text-2xl font-black tracking-wide md:text-3xl">
              現場に合う充電方法を確認する
            </h3>
            <p className="mt-3 text-[16px] leading-8 text-slate-100">
              蓄電丸を使っている場合は専用200Wパネルを。ほかの電源では入力仕様を確認して対応パネルを選んでください。
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <ExtButton href={CTA.sfm200.url}>
                200W専用パネルを見る →
              </ExtButton>
              <ExtButton href={CTA.solarList.url} tone="dark">
                ソーラーパネル一覧 →
              </ExtButton>
              <ExtButton href={CTA.trusco.url} tone="rose">
                TRUSCO商品一覧 →
              </ExtButton>
            </div>
          </section>

          <H2 id="related">関連記事</H2>
          <ul className="my-4 space-y-3">
            {relatedArticles.map((article) => (
              <li key={article.href}>
                <Link
                  href={article.href}
                  className="text-[16px] font-bold text-gray-900 underline underline-offset-4"
                >
                  {article.label}
                </Link>
              </li>
            ))}
          </ul>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
