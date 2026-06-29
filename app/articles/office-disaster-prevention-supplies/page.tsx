import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";

const SLUG = "office-disaster-prevention-supplies";
const SITE_URL = "https://sagyou-navi.com";

const IMAGES = {
  hero: "/images/articles/office-disaster-prevention-supplies-hero.jpg",
  stockpileBox: "/images/articles/emergency-stockpile-box-office-storage.jpg",
  blackoutLights: "/images/articles/office-blackout-rechargeable-lights.jpg",
  portablePower: "/images/articles/portable-power-disaster-office-site.jpg",
  carryCart: "/images/articles/waterproof-backpack-emergency-carry-cart.jpg",
  warningLight: "/images/articles/night-guidance-led-warning-light.jpg",
  fireproofBag: "/images/articles/fireproof-bag-security-disaster-office.jpg",
} as const;

export const metadata: Metadata = {
  title:
    "会社の防災用品リスト｜オフィス・店舗・現場で備えたい備蓄品と選び方｜作業用品ナビ",
  description:
    "会社や店舗、現場で備える防災用品は、水・食料だけでなく、停電対策、照明、非常用電源、災害用トイレ、持ち出しリュック、備蓄品箱、工具、誘導灯、防犯用品まで用途別に整理することが大切です。総務・購買担当者向けに、職場で必要な防災用品リストと選び方を解説します。",
  alternates: { canonical: `${SITE_URL}/articles/${SLUG}` },
  openGraph: {
    title: "会社の防災用品リスト｜オフィス・店舗・現場で備えたい備蓄品と選び方",
    description:
      "会社や店舗、現場で備える防災用品は、水・食料だけでなく、停電対策、照明、非常用電源、災害用トイレ、持ち出しリュック、備蓄品箱、工具、誘導灯、防犯用品まで用途別に整理することが大切です。",
    type: "article",
    images: [IMAGES.hero],
  },
};

/* ===== リンク生成（UTM付与・%25二重エンコード回避） ===== */
const YAHOO_BASE = "https://store.shopping.yahoo.co.jp/signcity-yshop/";
const UTM = {
  source: "sagyou_navi",
  medium: "referral",
  campaign: "disaster_supplies",
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

type Product = { id: string; name: string; base?: string };

function productHref(p: Product) {
  const base = p.base ?? `${YAHOO_BASE}${p.id}.html`;
  return buildUrl(base, `${SLUG}_${p.id}`);
}

function crecote(code: string) {
  return `https://item.rakuten.co.jp/crecote-shop/${code}/`;
}

// Yahoo（signcity-yshop・数値ID）
const STOCKBOX: Product[] = [
  { id: "232317", name: "TRUSCO 非常災害用備蓄品箱 W900×D420×H370 FB-9000（中身別売・防水ではない）※名称仮" },
];
const TOILET: Product[] = [
  { id: "232609", name: "TRUSCO 多人数用災害用トイレ 200回分入 SWC200※名称仮" },
];
const TOOLSET: Product[] = [
  { id: "233155", name: "TRUSCO 災害工具セット TRC-C-SET※名称仮" },
  { id: "233154", name: "TRUSCO 災害工具セット用ツールボックスのみ TRC-C※名称仮" },
];
const TENT: Product[] = [
  { id: "232836", name: "TRUSCO 災害用テント 1.5間×2間 フレーム付き※名称仮" },
];
const BIKES: Product[] = [
  { id: "218215", name: "災害時用ノーパンク自転車 ハザードランナー 26インチ※名称仮" },
  { id: "218224", name: "災害時用ノーパンク自転車 ハザードランナー シティタイプ※名称仮" },
  { id: "218180", name: "災害時用ノーパンク三輪自転車 ハザードランナートライ※名称仮" },
];

// 楽天 crecote-shop（商品コード・フルURL）
const LIGHTS: Product[] = [
  { id: "c1000443", name: "充電式懐中電灯 W5173／W5174※名称仮", base: crecote("c1000443") },
  { id: "c1000445", name: "充電式懐中電灯 ハンディライト※名称仮", base: crecote("c1000445") },
  { id: "c1000449", name: "ソーラー充電式懐中電灯※名称仮", base: crecote("c1000449") },
  { id: "x16b", name: "強力懐中電灯 X16B※名称仮", base: crecote("x16b") },
  { id: "hl23", name: "充電式LEDヘッドライト HL23※名称仮", base: crecote("hl23") },
  { id: "c22001", name: "COBカラビナライト※名称仮", base: crecote("c22001") },
];
const POWER: Product[] = [
  { id: "kps-0202", name: "ポータブル電源 蓄電丸※名称仮", base: crecote("kps-0202") },
  { id: "sfm-200", name: "200Wソーラーパネル※名称仮", base: crecote("sfm-200") },
];
const BACKPACKS: Product[] = [
  { id: "519", name: "折り畳み防水リュック 519※名称仮", base: crecote("519") },
  { id: "628", name: "コンパクト防水リュック20L 628※名称仮", base: crecote("628") },
  { id: "sr01", name: "シリコンリュック SR-01※名称仮", base: crecote("sr01") },
];
const CART: Product[] = [
  { id: "9001-1", name: "折り畳みキャリーカート 80L 9001※名称仮", base: crecote("9001-1") },
];
const WARNING: Product[] = [
  {
    id: "wwl01",
    name: "クリップ ウェアラブル警告灯 ホイッスル/サウンド LED充電式ショルダーライト※名称仮",
    base: crecote("wwl01"),
  },
];
const FIREBAG: Product[] = [
  { id: "c1000423", name: "耐火バッグ シルバー 四層※名称仮", base: crecote("c1000423") },
];
const LOCK: Product[] = [
  { id: "mmzxcs", name: "ウシデザイン 盗難防止ロック（ワイヤーロック）※名称仮", base: crecote("mmzxcs") },
];

const LIST_URLS = {
  yahooSaigai: `${YAHOO_BASE}search.html?p=%E7%81%BD%E5%AE%B3&view=grid`,
  rakutenBousai:
    "https://item.rakuten.co.jp/crecote-shop/c/0000000017/?l-id=shoptop_shopmenu_categorypage_13",
};

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

function ProductCard({ id, name, base }: Product) {
  const href = productHref({ id, name, base });
  const label = base ? "楽天市場で見る →" : "Yahoo!ショッピングで見る →";
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
          {label}
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

function NoteAmber({ children }: { children: ReactNode }) {
  return (
    <div className="my-4 rounded-lg border-l-4 border-amber-500 bg-amber-50 p-5">
      <p className="text-sm leading-relaxed text-gray-800">{children}</p>
    </div>
  );
}

const faqs = [
  {
    q: "会社の防災用品は何日分を用意すればよいですか？",
    a: "一般的には、災害発生後すぐに帰宅できない状況を想定し、従業員が社内で一定期間待機できる備えを検討します。東京都の資料では、3日分の水・食料等の備蓄や、1人あたり水9リットル・主食9食・毛布1枚などの目安が示されています。必要量やルールは地域・自治体の防災情報や会社の防災計画によって異なるため、あわせて確認しましょう。",
  },
  {
    q: "防災用品はどこに保管すればよいですか？",
    a: "誰でも取り出しやすく、浸水や落下物の影響を受けにくい場所にまとめて保管するのが基本です。備蓄品箱や収納庫を使い、設置場所・担当者・点検日を決めておくと管理しやすくなります。",
  },
  {
    q: "会社の停電対策では何を用意すべきですか？",
    a: "懐中電灯、ヘッドライト、充電式ライト、予備電源、ポータブル電源などを用途別に用意します。共用で使うライト、設備確認用のヘッドライト、スマホや小型機器を充電するポータブル電源を分けて考えると選びやすくなります。",
  },
  {
    q: "防水リュックは会社の防災用品として必要ですか？",
    a: "必須ではありませんが、非常時の持ち出し袋として役立ちます。雨天や屋外移動を想定する店舗、現場、車両、イベント用途では、防水リュックやコンパクトリュックを部署単位で用意する方法があります。",
  },
  {
    q: "防災用品と防犯用品は一緒に考えるべきですか？",
    a: "一緒に検討すると管理しやすくなります。災害時は停電や混乱により、貴重品・工具・車両・備品の管理が難しくなる場合があります。耐火バッグ、ワイヤーロック、警告灯などは、防災だけでなく防犯対策の一つとしても検討できます。",
  },
  {
    q: "ポータブル電源は会社の防災備蓄に向いていますか？",
    a: "スマートフォン、照明、小型機器などの充電対策として役立つ場合があります。ただし、使用できる機器は容量や出力によって異なります。重要設備や医療機器に使用する場合は、必ず製品仕様と安全条件を確認してください。",
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
      name: "会社の防災用品リスト",
      item: `${SITE_URL}/articles/${SLUG}`,
    },
  ],
};

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
          <span className="text-gray-700">会社の防災用品リスト</span>
        </nav>

        <span className="mb-3 inline-block rounded bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-800">
          比較
        </span>

        <h1 className="mb-4 text-2xl font-bold leading-snug text-gray-900 sm:text-3xl">
          会社の防災用品リスト｜オフィス・店舗・現場で備えたい備蓄品と選び方
        </h1>

        <p className="mb-6 text-sm text-gray-500">公開日：2026年6月27日／約14分で読めます</p>

        <figure className="relative mb-6 aspect-[16/9] overflow-hidden rounded-lg bg-gray-50">
          <Image
            src={IMAGES.hero}
            alt="会社の防災用品リストを確認する総務担当者のイメージ"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 1152px"
          />
        </figure>

        <p className="mb-4 leading-relaxed text-gray-800">
          防災用品というと家庭用の防災セットを思い浮かべがちですが、会社・店舗・現場で必要なものは少し異なります。職場では、従業員や来訪者の安全確保、帰宅困難、停電、断水、情報収集、夜間誘導、貴重品の保護まで考える必要があります。つまり、水・食料だけでなく、照明・電源・トイレ・収納・運搬・工具・防犯用品まで、用途別に整理して備えることが大切です。この記事では、総務・購買担当者、店舗オーナー、工場・倉庫・イベントの現場責任者に向けて、会社の防災用品を何からそろえればよいかを用途別に整理します。
        </p>

        <div className="my-6 rounded-lg border-l-4 border-blue-500 bg-blue-50 p-5">
          <p className="leading-relaxed text-gray-800">
            会社の防災用品は、まず「3日程度の社内待機」「停電」「断水」「夜間避難」「情報収集」「貴重品保護」「備蓄品の保管」を想定してそろえます。水・食料だけでなく、懐中電灯、ヘッドライト、ポータブル電源、災害用トイレ、防水リュック、備蓄品箱、工具、警告灯、耐火バッグなどを用途別に整理すると、社内で必要な備えを確認しやすくなります。
          </p>
        </div>

        <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-4 text-xl font-bold text-gray-900">
          会社の防災用品は「水・食料だけ」で考えない
        </h2>
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">発災直後は帰宅困難・停電・断水を想定する</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          災害時は、すぐに帰宅できるとは限りません。公共交通機関の停止、道路の混雑、停電、断水、通信障害が同時に起こると、オフィス・店舗・工場では従業員や来訪者が一時的に施設内に留まる可能性があります。東京都の帰宅困難者対策では、災害発生から72時間はむやみに移動せず安全な場所に留まる考え方や、従業員が施設内に留まれるよう3日分の水・食料等を備蓄する考え方が示されています。そのため、水・食料だけでなく、照明・電源・トイレ・誘導・収納まで含めて備えることが大切です。
        </p>
        <NoteAmber>
          備蓄の必要量や運用ルールは、地域・自治体の防災情報や会社の防災計画によって異なります。本記事は一般的な整理であり、実際の備えは自社の防災計画・自治体の条例や案内に合わせて確認してください。
        </NoteAmber>

        <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-4 text-xl font-bold text-gray-900">
          まず確認したい会社の防災用品リスト
        </h2>
        <div className="my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border border-gray-200 px-3 py-2">用途</th>
                <th className="border border-gray-200 px-3 py-2">必要な備え</th>
                <th className="border border-gray-200 px-3 py-2">該当商品カテゴリ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-3 py-2">備蓄品の保管</td>
                <td className="border border-gray-200 px-3 py-2">防災用品をまとめて収納</td>
                <td className="border border-gray-200 px-3 py-2">非常災害用備蓄品箱</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-3 py-2">停電対策</td>
                <td className="border border-gray-200 px-3 py-2">明かり・電源の確保</td>
                <td className="border border-gray-200 px-3 py-2">充電式ライト、ヘッドライト、ポータブル電源</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2">断水・トイレ対策</td>
                <td className="border border-gray-200 px-3 py-2">トイレの確保</td>
                <td className="border border-gray-200 px-3 py-2">多人数用災害用トイレ</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-3 py-2">持ち出し</td>
                <td className="border border-gray-200 px-3 py-2">必要品を運ぶ</td>
                <td className="border border-gray-200 px-3 py-2">防水リュック</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2">荷物運搬</td>
                <td className="border border-gray-200 px-3 py-2">水・備蓄品・工具の運搬</td>
                <td className="border border-gray-200 px-3 py-2">折り畳みキャリーカート</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-3 py-2">応急対応</td>
                <td className="border border-gray-200 px-3 py-2">工具・補修・復旧</td>
                <td className="border border-gray-200 px-3 py-2">災害工具セット</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2">夜間誘導</td>
                <td className="border border-gray-200 px-3 py-2">光と音で知らせる</td>
                <td className="border border-gray-200 px-3 py-2">警告灯、ヘッドライト、COBライト</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-3 py-2">電源確保</td>
                <td className="border border-gray-200 px-3 py-2">スマホ・機器・照明の電源</td>
                <td className="border border-gray-200 px-3 py-2">ポータブル電源、ソーラーパネル</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2">貴重品保護</td>
                <td className="border border-gray-200 px-3 py-2">書類・データ・金品保護</td>
                <td className="border border-gray-200 px-3 py-2">耐火バッグ、ワイヤーロック</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-3 py-2">拠点設営</td>
                <td className="border border-gray-200 px-3 py-2">屋外待機・仮設拠点</td>
                <td className="border border-gray-200 px-3 py-2">災害用テント</td>
              </tr>
            </tbody>
          </table>
        </div>
        <ListCTA
          href={LIST_URLS.rakutenBousai}
          utm={`${SLUG}_top_rakuten`}
          heading="会社・店舗・現場で使える防犯・防災用品をまとめて確認する"
          text="ライト・ポータブル電源・防水リュック・耐火バッグなど、用途別の防犯・防災用品をまとめて確認できます。"
          label="防犯・防災用品一覧（楽天）へ"
          strong
        />

        <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-4 text-xl font-bold text-gray-900">
          備蓄品をまとめて管理するなら「非常災害用備蓄品箱」
        </h2>
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">防災用品は分散しすぎると、いざという時に使いにくい</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          防災用品が倉庫・事務所・車両・休憩所にバラバラに置かれていると、災害時に探しにくくなります。会社では「誰が見てもわかる場所」にまとめて保管することが大切です。専用の備蓄品箱を使えば、水・食料以外のライト・工具・衛生用品・簡易トイレ・毛布などを管理しやすく、定期点検・棚卸し・賞味期限管理にもつながります。TRUSCOのFB-9000は防災用機器を保管する専用収納庫で、外形W900×D420×H370mm・有効内寸W850×D385×H340mmのスチール製です。
        </p>
        <ArticleFigure
          src={IMAGES.stockpileBox}
          alt="オフィスで非常災害用備蓄品箱に防災用品をまとめて保管するイメージ"
        />
        <ProductGrid items={STOCKBOX} />
        <NoteAmber>
          FB-9000は<strong>中身別売</strong>のため、必要な備蓄品は別途そろえる必要があります。また<strong>本製品は防水ではありません</strong>。浸水のおそれが少なく、落下物の影響を受けにくい場所への設置を検討してください。
        </NoteAmber>
        <ListCTA
          href={LIST_URLS.yahooSaigai}
          utm={`${SLUG}_box_yahoo`}
          heading="社内の防災用品を一箇所にまとめて保管する"
          text="備蓄品箱のほか、災害用トイレ・工具セット・テントなど、トラスコ中山の災害アイテムを一覧で確認できます。"
          label="トラスコ中山の災害アイテム一覧へ"
        />

        <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-4 text-xl font-bold text-gray-900">
          停電対策にはライトと非常用電源を分けて備える
        </h2>
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">全員が使える懐中電灯・ヘッドライトを用意する</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          停電時、スマートフォンのライトだけに頼るのは不安です。懐中電灯は共用向け、ヘッドライトは両手を使う作業・避難誘導・設備確認に向きます。COBカラビナライトは携帯性が高く、手元作業や一時照明に便利です。充電式は電池交換の手間を減らせますが、日頃からの充電管理が必要です。
        </p>
        <ArticleFigure
          src={IMAGES.blackoutLights}
          alt="停電時にオフィスで使う充電式懐中電灯とヘッドライトのイメージ"
        />
        <ProductGrid items={LIGHTS} />
        <ListCTA
          href={LIST_URLS.rakutenBousai}
          utm={`${SLUG}_light_rakuten`}
          heading="停電時に使える充電式ライト・ヘッドライトを確認する"
          text="共用の懐中電灯、設備確認用のヘッドライト、携帯用のCOBライトなど、用途に合わせて選びましょう。"
          label="防犯・防災用品一覧（楽天）へ"
        />

        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">停電が長引く場合はポータブル電源も検討する</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          スマホ・無線機・照明・タブレット・簡易事務機器などの充電ニーズには、ポータブル電源が役立ちます。容量・出力・防水/防塵・バッテリー方式・充電方法を確認して選びましょう。ソーラーパネルは、長期停電や屋外拠点での補助電源として検討できます。
        </p>
        <ArticleFigure
          src={IMAGES.portablePower}
          alt="会社や現場でポータブル電源とソーラーパネルを使うイメージ"
        />
        <ProductGrid items={POWER} />
        <NoteAmber>
          使用する機器の消費電力を必ず確認してください。容量・出力によって使える機器は異なります。
          <strong>重要設備や医療機器への使用は、必ず製品仕様と安全条件を確認</strong>
          し、メーカーが想定する範囲でご利用ください。防水・防塵タイプでも、水没や高温保管は避けてください。
        </NoteAmber>
        <ListCTA
          href={LIST_URLS.rakutenBousai}
          utm={`${SLUG}_power_rakuten`}
          heading="スマホ・照明・機器の電源確保に備える"
          text="ポータブル電源とソーラーパネルを、使う機器の消費電力に合わせて確認しましょう。"
          label="ポータブル電源を確認する（楽天）"
        />

        <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-4 text-xl font-bold text-gray-900">
          断水・トイレ対策は人数分で考える
        </h2>
        <p className="mb-4 leading-relaxed text-gray-800">
          断水・停電・排水トラブルが起きると、トイレが使えなくなる場合があります。会社では、従業員数・来訪者数・滞在時間を踏まえて必要数を考えます。簡易トイレは、衛生用品・消臭袋・使用済み汚物袋の保管場所までセットで準備しておくと運用しやすくなります。
        </p>
        <ProductGrid items={TOILET} />
        <NoteAmber>
          ライフライン停止時にトイレが使用できなくなるおそれがあります。必要回数・数量は従業員数や滞在想定に応じて見積もり、保管場所と廃棄ルールもあわせて確認してください。
        </NoteAmber>

        <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-4 text-xl font-bold text-gray-900">
          持ち出し・避難には防水リュックとキャリーカートを用意する
        </h2>
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">防水リュックは個人用・部署用の持ち出し袋に向く</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          非常時の持ち出し袋は、水濡れ・雨天・屋外避難を想定して選びます。防水リュックは軽量・コンパクトで、サブバッグ用途にも向きます。20Lクラスは個人備品・部署備品として検討しやすいサイズです。
        </p>
        <ArticleFigure
          src={IMAGES.carryCart}
          alt="防水リュックと折り畳みキャリーカートで備蓄品を運ぶイメージ"
        />
        <ProductGrid items={BACKPACKS} />
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">水・備蓄品・工具の移動にはキャリーカートが便利</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          水や備蓄品は重く、手持ちでの移動が大変です。階段・段差・屋外移動を想定し、倉庫から避難場所、店舗から一時待機場所、イベント本部から現場などの移動に使えるキャリーカートがあると便利です。蓋付き・座れるタイプは、待機時の簡易スペースづくりにも役立ちます。
        </p>
        <ProductGrid items={CART} />
        <ListCTA
          href={LIST_URLS.rakutenBousai}
          utm={`${SLUG}_carry_rakuten`}
          heading="避難・持ち出し用の防水リュックやキャリーを確認する"
          text="雨天・屋外移動を想定した防水リュックと、重い備蓄品の運搬に使えるキャリーカートを確認できます。"
          label="防水リュック・キャリーを見る（楽天）"
        />

        <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-4 text-xl font-bold text-gray-900">
          災害時の初動対応には工具・テント・移動手段も確認する
        </h2>
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">設備確認や応急復旧には災害工具セットを備える</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          発災後は、棚・扉・設備・車両・什器の確認や応急対応で工具が必要になる場合があります。工具が普段の作業場にしかないと、災害時に取り出せない可能性があります。防災用としてまとめておくと、担当者以外でも使いやすくなります。
        </p>
        <ProductGrid items={TOOLSET} />
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">屋外待機や仮設拠点には災害用テントを検討する</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          屋外での一時待機、物資配布、受付、仮設拠点づくりには、災害用テントが役立ちます。設置スペースや組立に必要な人数も確認しておきましょう。
        </p>
        <ProductGrid items={TENT} />
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">災害時の移動・巡回にはノーパンク自転車も選択肢になる</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          車が使えない、道路が混雑する、近距離の巡回が必要——といった場面では、空気管理の手間を減らしやすいノーパンク自転車も選択肢です。工場敷地・倉庫・施設・事業所の災害対応や巡回に向きます。
        </p>
        <ProductGrid items={BIKES} />

        <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-4 text-xl font-bold text-gray-900">
          夜間・屋外対応には警告灯やカラビナライトを備える
        </h2>
        <p className="mb-4 leading-relaxed text-gray-800">
          ライトには役割の違いがあります。懐中電灯は「照らす」ため、警告灯は周囲に存在や危険を「知らせる」ためのものです。前章で紹介したヘッドライト（HL23）やCOBカラビナライトとあわせて、知らせる用途の警告灯を備えておくと、夜間の誘導や巡回、駐車場対応、防犯にも役立ちます。
        </p>
        <ArticleFigure
          src={IMAGES.warningLight}
          alt="夜間の屋外でLED警告灯を使って誘導するイメージ"
        />
        <ProductGrid items={WARNING} />
        <ListCTA
          href={LIST_URLS.rakutenBousai}
          utm={`${SLUG}_warning_rakuten`}
          heading="夜間誘導・防犯に使える警告灯・携行ライトを確認する"
          text="知らせる用途の警告灯と、照らす用途のライトを組み合わせて備えましょう。"
          label="防犯・防災用品一覧（楽天）へ"
        />

        <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-4 text-xl font-bold text-gray-900">
          防災とあわせて考えたい防犯・貴重品保護
        </h2>
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">重要書類や貴重品には耐火バッグを検討する</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          災害時は、通帳・契約書・印鑑・USB・社内の重要書類などの保護も課題になります。金庫を置くスペースがない店舗や小規模事業所では、耐火バッグも選択肢の一つです。
        </p>
        <ArticleFigure
          src={IMAGES.fireproofBag}
          alt="耐火バッグで重要書類を保護し、ワイヤーロックで備品を固定するイメージ"
        />
        <ProductGrid items={FIREBAG} />
        <NoteAmber>
          耐火・防火・耐熱の性能は製品仕様によって異なり、内容物の完全な保護を保証するものではありません。保管する書類やデータの重要度に応じて、保管場所の分散やデータの控えなど、複数の対策とあわせて検討してください。
        </NoteAmber>
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">災害時・屋外保管時の盗難防止にはワイヤーロックも使える</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          自転車・ヘルメット・工具箱・スーツケース・屋外備品などの簡易ロックとして、ワイヤーロックが使えます。災害時やイベント時は荷物の一時保管が発生しやすいため、防犯対策の一つとして用意しておくと安心です。
        </p>
        <ProductGrid items={LOCK} />

        <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-4 text-xl font-bold text-gray-900">
          会社・店舗・現場別の防災用品チェックリスト
        </h2>
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">オフィス向けチェックリスト</h3>
        <ul className="my-4 list-disc space-y-1 pl-6 text-gray-800">
          <li>備蓄品箱／水・食料／簡易トイレ</li>
          <li>懐中電灯／ヘッドライト／ポータブル電源</li>
          <li>耐火バッグ／防水リュック／災害工具セット</li>
        </ul>
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">店舗向けチェックリスト</h3>
        <ul className="my-4 list-disc space-y-1 pl-6 text-gray-800">
          <li>停電時の照明／キャリーカート／簡易トイレ</li>
          <li>耐火バッグ／防水リュック／防犯ロック／警告灯</li>
        </ul>
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">工場・倉庫向けチェックリスト</h3>
        <ul className="my-4 list-disc space-y-1 pl-6 text-gray-800">
          <li>ヘッドライト／警告灯／災害工具セット／備蓄品箱</li>
          <li>ポータブル電源／ソーラーパネル／災害用トイレ／ノーパンク自転車</li>
        </ul>
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">イベント・屋外現場向けチェックリスト</h3>
        <ul className="my-4 list-disc space-y-1 pl-6 text-gray-800">
          <li>警告灯／ヘッドライト／カラビナライト</li>
          <li>防水リュック／キャリーカート／ポータブル電源／災害用テント／ソーラーパネル</li>
        </ul>

        <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-4 text-xl font-bold text-gray-900">
          防犯・防災用品をカテゴリ別に確認する
        </h2>
        <p className="mb-4 leading-relaxed text-gray-800">
          用途がはっきりしている場合は、カテゴリ一覧から探すと早く見つかります。ライトやポータブル電源、リュックなどは楽天の防犯・防災用品一覧、備蓄品箱・トイレ・工具・テントなどはトラスコ中山の災害アイテム一覧から確認できます。
        </p>
        <div className="my-6 flex flex-wrap gap-3">
          <a
            href={buildUrl(LIST_URLS.rakutenBousai, `${SLUG}_cat_rakuten`)}
            target="_blank"
            rel="nofollow sponsored noopener"
            className="inline-flex items-center rounded-lg bg-gray-900 px-4 py-2 text-sm font-bold text-white transition hover:bg-gray-700"
          >
            防犯・防災用品一覧（楽天）→
          </a>
          <a
            href={buildUrl(LIST_URLS.yahooSaigai, `${SLUG}_cat_yahoo`)}
            target="_blank"
            rel="nofollow sponsored noopener"
            className="inline-flex items-center rounded-lg border border-gray-900 px-4 py-2 text-sm font-bold text-gray-900 transition hover:bg-gray-900 hover:text-white"
          >
            トラスコ中山の災害アイテム一覧 →
          </a>
        </div>

        <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-4 text-xl font-bold text-gray-900">
          まとめ｜会社の防災用品は用途別にそろえると管理しやすい
        </h2>
        <p className="mb-4 leading-relaxed text-gray-800">
          会社の防災用品は、用途別に整理すると過不足を確認しやすくなります。備蓄品箱でまとめて管理し、停電にはライトとポータブル電源、断水には災害用トイレ、持ち出しには防水リュック、運搬にはキャリーカート、初動対応には工具セット、夜間誘導には警告灯、防犯には耐火バッグやワイヤーロック——と対応づけて備えましょう。性能や必要量は商品仕様・地域の防災情報・会社の防災計画に合わせて確認することが大切です。
        </p>

        <div className="my-8 rounded-lg border border-gray-300 bg-gray-50 p-6">
          <h3 className="mb-3 text-lg font-bold text-gray-900">会社の防災用品をカテゴリ別にそろえる</h3>
          <div className="flex flex-wrap gap-3">
            <a
              href={buildUrl(LIST_URLS.rakutenBousai, `${SLUG}_final_rakuten`)}
              target="_blank"
              rel="nofollow sponsored noopener"
              className="inline-flex items-center rounded-lg bg-gray-900 px-4 py-2 text-sm font-bold text-white transition hover:bg-gray-700"
            >
              防犯・防災用品一覧（楽天）→
            </a>
            <a
              href={buildUrl(LIST_URLS.yahooSaigai, `${SLUG}_final_yahoo`)}
              target="_blank"
              rel="nofollow sponsored noopener"
              className="inline-flex items-center rounded-lg border border-gray-900 px-4 py-2 text-sm font-bold text-gray-900 transition hover:bg-gray-900 hover:text-white"
            >
              トラスコ中山の災害アイテム一覧 →
            </a>
          </div>
        </div>

        <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-4 text-xl font-bold text-gray-900">
          よくある質問（FAQ）
        </h2>
        <div className="my-4 space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="rounded-lg border border-gray-200 p-4">
              <p className="mb-2 font-bold text-gray-900">
                Q{i + 1}. {f.q}
              </p>
              <p className="text-sm leading-relaxed text-gray-700">{f.a}</p>
            </div>
          ))}
        </div>

        <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-4 text-xl font-bold text-gray-900">
          関連記事
        </h2>
        <ul className="my-4 list-disc space-y-2 pl-6 text-gray-800">
          <li>
            <Link href="/articles/led-floodlight-selection" className="text-gray-900 underline hover:no-underline">
              LED投光器の選び方｜設置タイプ別・明るさの目安
            </Link>
          </li>
          <li>
            <Link
              href="/articles/flexible-container-bag-selection"
              className="text-gray-900 underline hover:no-underline"
            >
              フレコンバッグの選び方｜排出口あり・なし、耐候性、用途別の使い分け
            </Link>
          </li>
        </ul>
      </main>
      <SiteFooter />
    </>
  );
}
