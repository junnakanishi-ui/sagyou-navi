import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";

const SLUG = "magnet-sheet-selection";
const SITE_URL = "https://sagyou-navi.com";

const IMAGES = {
  hero: "/images/articles/magnet-sheet-selection-hero.jpg",
  factoryShelf: "/images/articles/warehouse-magnet-label-management.jpg",
  vehicle: "/images/articles/vehicle-magnet-sheet-business-car.jpg",
  inkjet: "/images/articles/inkjet-printable-magnet-pop.jpg",
  adhesive: "/images/articles/adhesive-magnet-sheet-pop-panel.jpg",
  steelPaper: "/images/articles/steel-paper-magnetic-wall-board.jpg",
  whiteboardBlackboard: "/images/articles/magnet-whiteboard-blackboard-shop-factory.jpg",
} as const;

export const metadata: Metadata = {
  title:
    "マグネットシートの選び方｜強力・車両用・印刷用・粘着付き・掲示板用の用途別比較｜作業用品ナビ",
  description:
    "マグネットシートは、車両表示、店舗POP、工場・倉庫の棚表示、掲示板、ホワイトボード、黒板、反射表示など用途によって選ぶ種類が変わります。強力タイプ、等方性・異方性、印刷用、粘着付き、スチールペーパーの違いと選び方をわかりやすく解説します。",
  alternates: { canonical: `${SITE_URL}/articles/${SLUG}` },
  openGraph: {
    title:
      "マグネットシートの選び方｜強力・車両用・印刷用・粘着付き・掲示板用の用途別比較",
    description:
      "マグネットシートは、車両表示、店舗POP、工場・倉庫の棚表示、掲示板、ホワイトボード、黒板、反射表示など用途によって選ぶ種類が変わります。強力タイプ、等方性・異方性、印刷用、粘着付き、スチールペーパーの違いと選び方をわかりやすく解説します。",
    type: "article",
    images: [IMAGES.hero],
  },
};

/* ===== リンク生成（UTM付与・%25二重エンコード回避） ===== */
const YAHOO_BASE = "https://store.shopping.yahoo.co.jp/signcity-yshop/";
const UTM = {
  source: "sagyou_navi",
  medium: "referral",
  campaign: "magnet_sheet",
};

function buildUrl(base: string, utmContent: string) {
  const [path, fragment] = base.split("#");
  const sep = path.includes("?") ? "&" : "?";
  const query =
    `utm_source=${UTM.source}` +
    `&utm_medium=${UTM.medium}` +
    `&utm_campaign=${UTM.campaign}` +
    `&utm_content=${utmContent}`;
  return `${path}${sep}${query}${fragment ? "#" + fragment : ""}`;
}

type Store = "yahoo" | "gc" | "rakuten";
function storeUrl(store: Store, id: string) {
  switch (store) {
    case "gc":
      return `https://www.gc-select.com/products/${id}`;
    case "rakuten":
      return `https://item.rakuten.co.jp/signcity2024/${id}/`;
    default:
      return `${YAHOO_BASE}${id}.html`;
  }
}

/* ===== 商品データ（IDは指定どおり・名称は仮置き＝公開前に要確認） ===== */
type Product = { id: string; name: string; store?: Store };

const VEHICLE_STRONG: Product[] = [
  { id: "029371", name: "車両用マグネットシート 白 異方性ツヤなし 0.8mm厚×500mm幅×5m※名称仮" },
  { id: "040937", name: "強力マグネットシート 白 切売り 異方性ツヤなし 0.8mm厚 1020mm幅※名称仮" },
  { id: "040910", name: "強力マグネットシート 磁石色 切売り 異方性 0.8mm厚×1020mm幅※名称仮" },
];

const PRINT_IJ: Product[] = [
  { id: "155280", name: "インクジェットぴたえもん 強力 インクジェットプリンタ用 A4 MSPZ-03-A4 5枚入り（屋内向け）※名称仮" },
];

const ADHESIVE: Product[] = [
  { id: "153647", name: "マグネット粘着付シート 強力 異方性 1.2mm厚×200×300mm※名称仮" },
  { id: "008732", name: "強力マグネットシート 粘着付き マグネタッキー 1mm厚×500mm幅×10m※名称仮" },
  { id: "008731", name: "強力マグネットシート 粘着付き マグネタッキー 1.2mm厚×500mm幅×10m※名称仮" },
  { id: "095477", name: "強力マグネットテープ 磁石色 異方性 のり付き 1mm厚×50mm幅×5m※名称仮" },
];

const STEEL_PAPER: Product[] = [
  { id: "008725", name: "スチールペーパー SP-PT 糊付 0.2mm厚×900mm幅×切売り※名称仮" },
  { id: "054288", name: "掲示板シート クロス ブルテンスティーリー 1mm厚 930mm×切売 ウイロウ※名称仮" },
  { id: "054290", name: "掲示板シート クロス ブルテンスティーリー 1mm厚 930mm×切売 アイボリー※名称仮" },
];

const ISOTROPIC: Product[] = [
  { id: "014185", name: "国産マグネットシート 白 等方性ツヤなし 0.8mm厚×100mm幅×10m※名称仮" },
  { id: "014183", name: "国産マグネットシート 白 等方性ツヤなし 0.8mm厚×300mm幅×10m※名称仮" },
  { id: "040947", name: "国産マグネットシート 白 等方性ツヤなし 0.8mm厚×1020mm幅×切売※名称仮" },
  { id: "040943", name: "国産マグネットシート 白 等方性ツヤあり 0.8mm厚×1020mm幅×切売※名称仮" },
  { id: "054996", name: "国産カラーマグネットシート 黄 等方性 0.8mm厚×1020mm幅×切売※名称仮" },
];

/* ===== 一覧/外部URL（エンコード済み・再エンコード禁止でそのまま定数化） ===== */
const LIST_URLS = {
  magnetYahoo: `${YAHOO_BASE}a5dea5b0a5.html`,
  anisotropic: "https://www.trade-sign.com/magnet/04/",
  isotropic: "https://www.trade-sign.com/magnet/10/",
  adhesive: "https://www.trade-sign.com/magnet/07/",
  whiteboard: "https://www.trade-sign.com/magnet/09/",
  blackboard: "https://www.trade-sign.com/magnet/08/",
  reflective: "https://www.trade-sign.com/magnet/06/",
  allMagnet: "https://www.trade-sign.com/magnet/",
};

/* ===== 共通パーツ ===== */
function ArticleFigure({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) {
  return (
    <figure className="relative my-6 aspect-[16/9] overflow-hidden rounded-lg bg-gray-50">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 1152px"
        priority={priority}
      />
    </figure>
  );
}

function ProductCard({ id, name, store = "yahoo" }: Product) {
  const s = (store ?? "yahoo") as Store;
  const href = buildUrl(storeUrl(s, id), `${SLUG}_${id}`);
  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow sponsored noopener"
      className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white transition hover:border-gray-400 hover:shadow-md"
    >
      <div className="relative aspect-square w-full overflow-hidden bg-gray-50">
        <Image
          src={`/products/${id}.jpg`}
          alt={name}
          fill
          className="object-contain p-2 transition group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 50vw, 250px"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <p className="text-sm font-bold leading-snug text-gray-900">{name}</p>
        <span className="mt-auto inline-flex w-fit items-center rounded bg-gray-900 px-3 py-1 text-xs font-bold text-white">
          Yahoo!ショッピングで見る →
        </span>
      </div>
    </a>
  );
}

function ProductGrid({ items }: { items: Product[] }) {
  return (
    <div className="my-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {items.map((p) => (
        <ProductCard key={p.id} {...p} />
      ))}
    </div>
  );
}

function ListCTA({
  href,
  utm,
  heading,
  text,
  label,
  strong = false,
}: {
  href: string;
  utm: string;
  heading: string;
  text: string;
  label: string;
  strong?: boolean;
}) {
  return (
    <div
      className={
        "my-6 rounded-lg border p-5 " +
        (strong ? "border-gray-900 bg-gray-50" : "border-gray-200 bg-gray-50")
      }
    >
      <h3 className="mb-2 text-lg font-bold text-gray-900">{heading}</h3>
      <p className="mb-4 text-sm leading-relaxed text-gray-700">{text}</p>
      <a
        href={buildUrl(href, utm)}
        target="_blank"
        rel="nofollow sponsored noopener"
        className={
          strong
            ? "inline-flex items-center gap-2 rounded-lg bg-gray-900 px-6 py-3 text-base font-bold text-white transition hover:bg-gray-700"
            : "inline-flex items-center gap-2 rounded-lg border border-gray-900 px-5 py-3 text-sm font-bold text-gray-900 transition hover:bg-gray-900 hover:text-white"
        }
      >
        {label} →
      </a>
    </div>
  );
}

/* ===== JSON-LD ===== */
const faqs = [
  {
    q: "マグネットシートはどこに貼れますか？",
    a: "鉄やスチールなど、磁石が付く面に貼れます。木材・石膏ボード・樹脂・ガラス・アルミなどには基本的にそのままでは付きません。壁をマグネット対応にしたい場合は、スチールペーパーや掲示板シートを下地として使う方法があります。",
  },
  {
    q: "車に貼るならどのマグネットシートが向いていますか？",
    a: "車両用には、屋外使用を想定した強力タイプや異方性タイプが候補になります。厚み・磁力・屋外対応・貼付面の状態・走行時の注意事項を確認して選ぶことが大切です。",
  },
  {
    q: "インクジェットプリンタで印刷できるマグネットシートは屋外で使えますか？",
    a: "商品によって異なります。屋外使用不可の商品もあるため、商品仕様を確認してください。たとえばインクジェット用ぴたえもんは屋外使用不可・車への使用不可です。屋外で使う場合は、屋外対応仕様や車両用マグネットを確認しましょう。",
  },
  {
    q: "異方性と等方性は何が違いますか？",
    a: "異方性は磁力が強いタイプ、等方性は汎用的に使いやすいタイプと考えるとわかりやすいです。車両用や落下を避けたい表示には異方性、店内POPや軽量掲示には等方性が候補になります。",
  },
  {
    q: "POPやパネルをマグネットで貼れるようにできますか？",
    a: "粘着付きマグネットシートやマグネットテープを裏面に貼ることで、スチール面に貼り替えできる表示物として使えます。貼る素材の重さやサイズに合わせて、磁力と厚みを選びましょう。",
  },
  {
    q: "ホワイトボードとして使えるマグネットシートはありますか？",
    a: "ホワイトボードマグネットシートがあります。スチール面に貼って簡易ホワイトボードとして使えるタイプで、工程管理・予定表・厨房・工場・倉庫など、限られたスペースで書き消ししたい場合に向いています。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "比較", item: `${SITE_URL}/category/compare` },
    {
      "@type": "ListItem",
      position: 3,
      name: "マグネットシートの選び方",
      item: `${SITE_URL}/articles/${SLUG}`,
    },
  ],
};

/* ===== ページ本体 ===== */
export default function Page() {
  return (
    <>
      <SiteHeader />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <main className="mx-auto max-w-6xl px-4 py-8 md:px-6 text-gray-900">
        <nav className="mb-4 text-xs text-gray-500" aria-label="パンくず">
          <Link href="/" className="hover:underline">
            ホーム
          </Link>
          <span className="mx-1">/</span>
          <Link href="/articles" className="hover:underline">
            記事一覧
          </Link>
          <span className="mx-1">/</span>
          <span className="text-gray-700">マグネットシートの選び方</span>
        </nav>

        <span className="mb-3 inline-block rounded bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-800">
          比較
        </span>

        <h1 className="mb-4 text-2xl font-bold leading-snug text-gray-900 sm:text-3xl">
          マグネットシートの選び方｜強力・車両用・印刷用・粘着付き・掲示板用の用途別比較
        </h1>

        <p className="mb-6 text-sm text-gray-500">公開日：2026年6月27日／約13分で読めます</p>

        <figure className="relative mb-6 aspect-[16/9] overflow-hidden rounded-lg bg-gray-50">
          <Image
            src={IMAGES.hero}
            alt="マグネットシートの用途別サンプルを比較するイメージ"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 1152px"
          />
        </figure>

        <p className="mb-4 leading-relaxed text-gray-800">
          マグネットシートは、ただの「磁石のシート」ではありません。社用車のロゴ、店内POPやメニュー、工場・倉庫の棚表示や工程管理、掲示板、夜間の反射表示など、用途によって選ぶべき種類が変わります。選び方を間違えると、表示が落ちる、壁に貼れない、屋外で使えない、印刷できない、書き消しできない——といった失敗につながります。この記事では、車両・店舗・工場・掲示・ホワイトボード・黒板・反射といった現場用途ごとに、どのマグネットシートを選べばよいかを整理します。
        </p>

        <div className="my-6 rounded-lg border-l-4 border-blue-500 bg-blue-50 p-5">
          <p className="leading-relaxed text-gray-800">
            マグネットシートを選ぶときは、まず「貼る場所」「屋内・屋外」「必要な磁力」「印刷するか」「貼って剥がすか」「壁をマグネット対応にしたいか」を確認します。車両や屋外表示には強力タイプ、店内POPやメニューには印刷用、紙・パネル・小物を磁石化したい場合は粘着付き、壁面を掲示板化したい場合はスチールペーパーや掲示板シートが候補になります。
          </p>
        </div>

        <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-4 text-xl font-bold text-gray-900">
          マグネットシートは用途から選ぶのが基本
        </h2>
        <p className="mb-4 leading-relaxed text-gray-800">
          まずは用途別の早見表で、自分の現場に近いものを探してみましょう。詳しい選び方は、各章で解説します。
        </p>
        <div className="my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border border-gray-200 px-3 py-2">用途</th>
                <th className="border border-gray-200 px-3 py-2">向いているタイプ</th>
                <th className="border border-gray-200 px-3 py-2">主な使用場所</th>
                <th className="border border-gray-200 px-3 py-2">注意点</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-3 py-2">車両・社用車・営業車</td>
                <td className="border border-gray-200 px-3 py-2">強力・異方性（屋外対応・車両用）</td>
                <td className="border border-gray-200 px-3 py-2">ドア・ボディ</td>
                <td className="border border-gray-200 px-3 py-2">屋外対応・貼付面・走行時の注意を確認</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-3 py-2">店内POP・メニュー</td>
                <td className="border border-gray-200 px-3 py-2">印刷用（インクジェット）</td>
                <td className="border border-gray-200 px-3 py-2">店内・屋内掲示</td>
                <td className="border border-gray-200 px-3 py-2">屋外不可の商品あり／耐水性を確認</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2">小物・POPのマグネット化</td>
                <td className="border border-gray-200 px-3 py-2">粘着付き・マグネットテープ</td>
                <td className="border border-gray-200 px-3 py-2">パネル・案内板の裏面</td>
                <td className="border border-gray-200 px-3 py-2">貼付面の素材・重さを確認</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-3 py-2">壁面掲示・掲示板化</td>
                <td className="border border-gray-200 px-3 py-2">スチールペーパー・掲示板シート</td>
                <td className="border border-gray-200 px-3 py-2">木壁・石膏ボード壁</td>
                <td className="border border-gray-200 px-3 py-2">下地として施工。貼付面の確認</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2">工程管理・予定表</td>
                <td className="border border-gray-200 px-3 py-2">ホワイトボードマグネットシート</td>
                <td className="border border-gray-200 px-3 py-2">工場・倉庫・事務所</td>
                <td className="border border-gray-200 px-3 py-2">書き消し仕様か確認</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-3 py-2">黒板メニュー</td>
                <td className="border border-gray-200 px-3 py-2">黒板マグネットシート</td>
                <td className="border border-gray-200 px-3 py-2">飲食店・店舗</td>
                <td className="border border-gray-200 px-3 py-2">チョーク対応か確認</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2">夜間・工事・車両の反射表示</td>
                <td className="border border-gray-200 px-3 py-2">反射マグネットシート</td>
                <td className="border border-gray-200 px-3 py-2">工事現場・フェンス・標識</td>
                <td className="border border-gray-200 px-3 py-2">視認性・貼付面・屋外条件を確認</td>
              </tr>
            </tbody>
          </table>
        </div>

        <ArticleFigure
          src={IMAGES.factoryShelf}
          alt="工場・倉庫の棚にマグネットラベルで表示管理するイメージ"
        />

        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">
          車両・社用車・営業車に使うなら強力タイプを選ぶ
        </h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          社用車・営業車・配送車・イベント車両などにロゴや表示を貼る場合は、屋外使用を想定した強力タイプ・異方性タイプが候補です。磁力・厚み・屋外対応・貼付面の状態（凹凸や塗装）を確認し、定期的に取り外して汚れや水分をチェックすることが大切です。走行時の脱落防止のため、走行前の固定確認や、メーカーの注意事項の確認も行いましょう。
        </p>
        <ArticleFigure
          src={IMAGES.vehicle}
          alt="社用車に白無地マグネットシートを貼るイメージ"
        />
        <ProductGrid items={VEHICLE_STRONG} />
        <ListCTA
          href={LIST_URLS.anisotropic}
          utm={`${SLUG}_tradesign_anisotropic`}
          heading="社用車・営業車に使える強力マグネットシートを確認する"
          text="屋外・車両用途には磁力の強い異方性タイプが候補です。屋外対応・貼付面・走行時の注意を確認して選びましょう。"
          label="強力マグネットシート（異方性）一覧へ"
          strong
        />

        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">
          自分で印刷してPOPやメニューを作るならインクジェット対応タイプ
        </h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          店舗POP、メニュー、社内掲示、イベント案内など、少量・短期の掲示物を自作したい場合は、インクジェットプリンタで直接印刷できるマグネットシートが便利です。対応プリンタ・用紙サイズ・屋内外の可否を確認して選びましょう。
        </p>
        <div className="my-4 rounded-lg border-l-4 border-amber-500 bg-amber-50 p-5">
          <p className="text-sm leading-relaxed text-gray-800">
            <strong className="text-amber-700">屋外利用の注意：</strong>
            インクジェット用「ぴたえもん」は耐水ではなく、屋外使用不可・車への使用不可です。店内POPや屋内掲示、名札、工場の5S/QC表示など屋内用途に向きます。屋外や車に印刷物を使いたい場合は、屋外対応（レーザー屋外用など）や車両用マグネットを確認してください。
          </p>
        </div>
        <ArticleFigure
          src={IMAGES.inkjet}
          alt="インクジェットプリンタでマグネットPOPを印刷するイメージ"
        />
        <ProductGrid items={PRINT_IJ} />
        <ListCTA
          href={LIST_URLS.magnetYahoo}
          utm={`${SLUG}_yahoo_print`}
          heading="店内POPやメニューを自作できる印刷用マグネットシートを確認する"
          text="対応プリンタ・サイズ・屋内外の可否を確認して選びましょう。屋外で使う場合は屋外対応仕様を確認してください。"
          label="マグネットシート一覧へ"
        />

        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">
          POP・パネル・小物をマグネット化するなら粘着付きタイプ
        </h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          紙・スチレンボード・アクリル・POP・案内板・小物などの裏に貼り、スチール面に付け替えられるようにしたい場合は、粘着付きマグネットシートやマグネットテープが向きます。大判シート、ロール、テープ状、ピース状など形状の違いがあるので、貼る素材の重さ・サイズに合わせて磁力と厚みを選びましょう。貼付面の素材によっては粘着が効きにくい場合があるため、商品仕様を確認してください。
        </p>
        <ArticleFigure
          src={IMAGES.adhesive}
          alt="POPパネル裏面に粘着付きマグネットシートを貼るイメージ"
        />
        <ProductGrid items={ADHESIVE} />
        <ListCTA
          href={LIST_URLS.adhesive}
          utm={`${SLUG}_tradesign_adhesive`}
          heading="POP・パネル・小物をマグネット仕様にする"
          text="粘着付きシートやマグネットテープを裏面に貼り、スチール面に貼り替えできる表示物にできます。"
          label="のり付マグネットシート一覧へ"
        />

        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">
          壁やパネルをマグネット対応にしたいならスチールペーパー・掲示板シート
        </h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          「マグネットが壁に付かない」という悩みは、マグネットが鉄・スチール面にしか吸着しないために起こります。木壁・石膏ボード・樹脂などにはそのままでは付きません。壁面をマグネット対応にしたい場合は、磁石が付く下地となるスチールペーパーや掲示板シートを施工する方法があります。糊付タイプなら壁やパネルに貼って、上からマグネットを使えるようにできます。貼付面の状態や施工条件は商品仕様を確認しましょう。
        </p>
        <ArticleFigure
          src={IMAGES.steelPaper}
          alt="スチールペーパーで壁面をマグネット掲示板化するイメージ"
        />
        <ProductGrid items={STEEL_PAPER} />
        <ListCTA
          href={LIST_URLS.magnetYahoo}
          utm={`${SLUG}_yahoo_steelpaper`}
          heading="壁や掲示板をマグネット対応にする下地材を確認する"
          text="スチールペーパーや掲示板シートを下地に使うと、木壁や石膏ボードの壁面もマグネット掲示に活用しやすくなります。"
          label="マグネットシート一覧へ"
        />

        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">
          工程管理・予定表にはホワイトボードマグネットシート
        </h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          工場・倉庫・事務所・厨房・店舗バックヤードでの工程管理、シフト表、予定表、チェックリストには、ホワイトボードマグネットシートが向きます。スチール面に貼って簡易ホワイトボードとして使えるタイプで、ホワイトボードマーカーで書き消しできる仕様かどうかを確認して選びましょう。
        </p>
        <ListCTA
          href={LIST_URLS.whiteboard}
          utm={`${SLUG}_tradesign_whiteboard`}
          heading="工程管理・予定表に使うホワイトボードマグネットシートを確認する"
          text="書き消し仕様か、貼るスチール面のサイズはどれくらいかを確認して選びましょう。"
          label="ホワイトボードマグネットシート一覧へ"
        />

        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">
          飲食店・店舗演出には黒板マグネットシート
        </h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          カフェ・飲食店・雑貨店・スクールなどで、手書きメニューや案内を黒板風に見せたい場合は、チョークで書き消しできる黒板マグネットシートが候補です。スチール面に貼って使うタイプで、演出と貼り替えのしやすさを両立できます。
        </p>
        <ArticleFigure
          src={IMAGES.whiteboardBlackboard}
          alt="工場の工程管理ボードと店舗の黒板メニューにマグネットシートを使うイメージ"
        />
        <ListCTA
          href={LIST_URLS.blackboard}
          utm={`${SLUG}_tradesign_blackboard`}
          heading="店舗メニュー・演出に使う黒板マグネットシートを確認する"
          text="チョーク対応か、貼るスチール面はあるかを確認して選びましょう。"
          label="黒板マグネットシート一覧へ"
        />

        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">
          夜間の視認性を高めたいなら反射マグネットシート
        </h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          工事現場・フェンス・標識・トラック・駐車場などで、夜間や暗所の視認性を高めたい場合は、反射マグネットシートが候補です。安全表示・工事看板の用途で使われます。貼付面・屋外条件・視認性の要件を確認して選びましょう。
        </p>
        <ListCTA
          href={LIST_URLS.reflective}
          utm={`${SLUG}_tradesign_reflective`}
          heading="夜間表示・安全用途に使う反射マグネットシートを確認する"
          text="貼付面・屋外条件・必要な視認性を確認して選びましょう。"
          label="反射マグネットシート一覧へ"
        />

        <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-4 text-xl font-bold text-gray-900">
          異方性と等方性の違い｜強力タイプが必要な場面とは
        </h2>
        <p className="mb-4 leading-relaxed text-gray-800">
          マグネットシートには、磁力の強い「異方性」と、汎用的に使いやすい「等方性」があります。異方性は磁力が強く、車両・屋外・落下を避けたい表示に向きます。等方性は加工性やコスト面で扱いやすく、店内POPや軽量な掲示に向きます。用途の磁力要件に合わせて選びましょう。
        </p>
        <div className="my-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <ListCTA
            href={LIST_URLS.anisotropic}
            utm={`${SLUG}_tradesign_aniso2`}
            heading="磁力重視・車両/屋外なら異方性"
            text="磁力が強く、落下を避けたい表示や車両・屋外用途に向きます。"
            label="強力マグネットシート（異方性）一覧へ"
          />
          <ListCTA
            href={LIST_URLS.isotropic}
            utm={`${SLUG}_tradesign_iso`}
            heading="汎用・軽量掲示なら等方性"
            text="加工性・コスト面で扱いやすく、店内POPや軽量掲示に向きます。"
            label="マグネットシート（等方性）一覧へ"
          />
        </div>

        <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-4 text-xl font-bold text-gray-900">
          厚み・幅・ロール・切売りの選び方
        </h2>
        <p className="mb-4 leading-relaxed text-gray-800">
          厚みは磁力・扱いやすさ・コストに関わります。厚いほど磁力やコシが出やすい一方、重く・割高になりやすい傾向があります。幅や長さは、A4・100mm幅・300mm幅・500mm幅・1020mm幅・10mロール・切売りなどから、作るものの大きさと必要数量に合わせて選びます。少量なら小幅やロール、看板や大判表示なら広幅や切売りが扱いやすい場合があります。
        </p>
        <ProductGrid items={ISOTROPIC} />
        <ListCTA
          href={LIST_URLS.magnetYahoo}
          utm={`${SLUG}_yahoo_size`}
          heading="強力・等方性・のり付き・ホワイトボード用までまとめて探す"
          text="幅・厚み・ロール/切売り・色など、用途に合わせて一覧から選べます。Yahoo!店と自社ECの両方を確認するのがおすすめです。"
          label="マグネットシート一覧へ"
          strong
        />

        <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-4 text-xl font-bold text-gray-900">
          マグネットシート選びでよくある失敗
        </h2>
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">屋外で使えない印刷用マグネットを外で使ってしまう</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          インクジェット用の印刷マグネットは耐水でない商品が多く、屋外では劣化・剥がれの原因になります。屋外や車に使うなら、屋外対応仕様や車両用マグネットを選びましょう。
        </p>
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">壁にそのまま貼れると思って購入してしまう</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          マグネットは鉄・スチール面にしか付きません。木壁や石膏ボードにはそのままでは付かないため、スチールペーパーや掲示板シートを下地に使う必要があります。
        </p>
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">磁力が足りずPOPや表示が落ちる</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          貼るものの重さに対して磁力が足りないと、表示が落ちます。重い・大きい表示や落下を避けたい場面では、異方性や厚めのタイプを検討しましょう。
        </p>
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">車両に貼りっぱなしにして汚れや跡が出る</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          車両に長期間貼りっぱなしにすると、汚れや水分がたまり、塗装面に影響が出る場合があります。定期的に外して、貼付面と裏面を確認しましょう。
        </p>
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">通常の白マグネットとホワイトボード用を間違える</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          見た目が似ていても、書き消しできる仕様かどうかは商品によって異なります。工程管理や予定表に使うなら、ホワイトボード仕様（書き消し可）かを確認しましょう。
        </p>
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">粘着付きマグネットの貼付面を確認しない</h3>
        <div className="my-4 rounded-lg border-l-4 border-amber-500 bg-amber-50 p-5">
          <p className="text-sm leading-relaxed text-gray-800">
            粘着付きマグネットは、貼る素材によって粘着が効きにくい場合があります。屋外使用・車両使用・印刷可否・粘着面の適合は、必ず商品仕様と注意事項を確認してから選んでください。
          </p>
        </div>

        <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-4 text-xl font-bold text-gray-900">
          法人・現場で購入前に確認したいチェックリスト
        </h2>
        <ul className="my-4 list-disc space-y-2 pl-6 text-gray-800">
          <li>貼る場所はスチール面か</li>
          <li>屋内用か屋外用か</li>
          <li>貼るものの重さはどれくらいか</li>
          <li>貼って剥がす頻度はどれくらいか</li>
          <li>印刷するか、手書きするか</li>
          <li>ホワイトボードマーカーで書き消しするか</li>
          <li>車両に貼るか</li>
          <li>夜間の視認性が必要か</li>
          <li>必要な幅・長さ・数量はどれくらいか</li>
          <li>Yahoo!店と自社ECの価格を確認したか</li>
        </ul>

        <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-4 text-xl font-bold text-gray-900">
          用途が決まっているならカテゴリから選ぶと探しやすい
        </h2>
        <p className="mb-4 leading-relaxed text-gray-800">
          用途がはっきりしている場合は、カテゴリから探すと早く見つかります。価格はYahoo!店と自社EC（サインシティ）で異なる場合があるため、両方を確認するのがおすすめです。
        </p>
        <div className="my-6 flex flex-wrap gap-3">
          <a href={buildUrl(LIST_URLS.magnetYahoo, `${SLUG}_cat_yahoo`)} target="_blank" rel="nofollow sponsored noopener" className="inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-sm font-bold text-white transition hover:bg-gray-700">マグネットシート一覧（Yahoo!店）→</a>
          <a href={buildUrl(LIST_URLS.allMagnet, `${SLUG}_tradesign_all`)} target="_blank" rel="nofollow sponsored noopener" className="inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-sm font-bold text-white transition hover:bg-gray-700">マグネットシート一覧（サインシティ）→</a>
          <a href={buildUrl(LIST_URLS.anisotropic, `${SLUG}_cat_aniso`)} target="_blank" rel="nofollow sponsored noopener" className="inline-flex items-center rounded-md border border-gray-900 bg-white px-4 py-2 text-sm font-bold text-gray-900 transition hover:bg-gray-100">強力（異方性）→</a>
          <a href={buildUrl(LIST_URLS.isotropic, `${SLUG}_cat_iso`)} target="_blank" rel="nofollow sponsored noopener" className="inline-flex items-center rounded-md border border-gray-900 bg-white px-4 py-2 text-sm font-bold text-gray-900 transition hover:bg-gray-100">等方性 →</a>
          <a href={buildUrl(LIST_URLS.adhesive, `${SLUG}_cat_adhesive`)} target="_blank" rel="nofollow sponsored noopener" className="inline-flex items-center rounded-md border border-gray-900 bg-white px-4 py-2 text-sm font-bold text-gray-900 transition hover:bg-gray-100">のり付き →</a>
          <a href={buildUrl(LIST_URLS.whiteboard, `${SLUG}_cat_wb`)} target="_blank" rel="nofollow sponsored noopener" className="inline-flex items-center rounded-md border border-gray-900 bg-white px-4 py-2 text-sm font-bold text-gray-900 transition hover:bg-gray-100">ホワイトボード用 →</a>
          <a href={buildUrl(LIST_URLS.blackboard, `${SLUG}_cat_bb`)} target="_blank" rel="nofollow sponsored noopener" className="inline-flex items-center rounded-md border border-gray-900 bg-white px-4 py-2 text-sm font-bold text-gray-900 transition hover:bg-gray-100">黒板用 →</a>
          <a href={buildUrl(LIST_URLS.reflective, `${SLUG}_cat_reflective`)} target="_blank" rel="nofollow sponsored noopener" className="inline-flex items-center rounded-md border border-gray-900 bg-white px-4 py-2 text-sm font-bold text-gray-900 transition hover:bg-gray-100">反射 →</a>
        </div>

        <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-4 text-xl font-bold text-gray-900">
          まとめ｜マグネットシートは用途・貼る場所・磁力で選ぶ
        </h2>
        <p className="mb-4 leading-relaxed text-gray-800">
          マグネットシートは、用途・貼る場所・必要な磁力で選ぶのが基本です。車両・屋外・看板用途は強力な異方性、店内POPやメニューの自作は印刷用、小物やPOPの裏面には粘着付き、壁をマグネット対応にするならスチールペーパーや掲示板シート、工程管理にはホワイトボードマグネット、店舗演出には黒板マグネット、夜間表示には反射マグネット——と整理できます。屋外使用・車両使用・印刷可否・粘着面は、購入前に必ず商品仕様と注意事項を確認しましょう。価格はYahoo!店と自社EC（サインシティ）で異なる場合があるため、両方の確認がおすすめです。
        </p>

        <div className="my-8 rounded-lg border border-gray-300 bg-gray-50 p-6">
          <h3 className="mb-3 text-lg font-bold text-gray-900">用途に合うマグネットシートをカテゴリ別に確認する</h3>
          <div className="flex flex-wrap gap-3">
            <a href={buildUrl(LIST_URLS.magnetYahoo, `${SLUG}_final_yahoo`)} target="_blank" rel="nofollow sponsored noopener" className="inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-sm font-bold text-white transition hover:bg-gray-700">マグネットシート一覧（Yahoo!店）→</a>
            <a href={buildUrl(LIST_URLS.allMagnet, `${SLUG}_final_tradesign`)} target="_blank" rel="nofollow sponsored noopener" className="inline-flex items-center rounded-md border border-gray-900 bg-white px-4 py-2 text-sm font-bold text-gray-900 transition hover:bg-gray-100">マグネットシート一覧（サインシティ）→</a>
          </div>
        </div>

        <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-4 text-xl font-bold text-gray-900">
          よくある質問（FAQ）
        </h2>
        <div className="my-4 space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="rounded-lg border border-gray-200 p-4">
              <p className="mb-2 font-bold text-gray-900">Q{i + 1}. {f.q}</p>
              <p className="text-sm leading-relaxed text-gray-700">{f.a}</p>
            </div>
          ))}
        </div>

        <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-4 text-xl font-bold text-gray-900">
          関連記事
        </h2>
        <ul className="my-4 list-disc space-y-2 pl-6 text-gray-800">
          <li>
            <Link href="/articles/steel-composite-board-whiteboard" className="text-gray-900 underline hover:no-underline">
              ホワイトボードに使える板材の選び方｜スチール複合板とアルミ複合板の違い
            </Link>
          </li>
          <li>
            <Link href="/articles/sign-lighting-retrofit" className="text-gray-900 underline hover:no-underline">
              看板照明の後付け・選び方
            </Link>
          </li>
        </ul>
      </main>
      <SiteFooter />
    </>
  );
}
