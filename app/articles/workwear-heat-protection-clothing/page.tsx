import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";

const SLUG = "workwear-heat-protection-clothing";
const SITE_URL = "https://sagyou-navi.com";

export const metadata: Metadata = {
  title: "現場の暑さ対策は服装から｜冷感インナー・空調服・冷却ベストの選び方",
  description:
    "現場の暑さ対策は、空調服や冷却ベストだけでなく、作業着の下に着る冷感インナー、アームカバー、ロングタイツ、クールインソールまで組み合わせて考えることが大切です。工事現場・工場・倉庫・屋外作業向けに、熱中症対策衣服の選び方を解説します。",
  alternates: { canonical: `${SITE_URL}/articles/${SLUG}` },
};

/* ===== リンク生成（UTM付与・%25二重エンコード回避） ===== */
const YAHOO_BASE = "https://store.shopping.yahoo.co.jp/signcity-yshop/";
const UTM = { source: "sagyou_navi", medium: "referral", campaign: "heat_workwear" };

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

const INNER: Product[] = [
  { id: "171706", name: "バートル 長袖エアーフィット 4070-68-M※名称仮" },
  { id: "171722", name: "バートル 半袖エアーフィット 4071-68-S※名称仮" },
  { id: "172122", name: "おたふく BTパワーストレッチEVO ロングスリーブ※名称仮" },
  { id: "171713", name: "バートル 半袖エアーフィット 4071-29-XL※名称仮" },
  { id: "172052", name: "リベルタ LD_FTW L/Sクルーネック ホワイト※名称仮" },
  { id: "172056", name: "リベルタ LD_FTW L/Sクルーネック ブラック※名称仮" },
  { id: "172130", name: "おたふく BTパワーストレッチEVO ショートスリーブ※名称仮" },
];

const ARM: Product[] = [
  { id: "172228", name: "ミエローブ 竹糸くんアームカバー20 ブラック※名称仮" },
  { id: "172238", name: "ミエローブ 竹糸くんアームカバー40 グレー迷彩※名称仮" },
  { id: "172236", name: "ミエローブ 竹糸くんアームカバー10 ホワイト※名称仮" },
  { id: "172230", name: "ミエローブ 竹糸くんアームカバー20 紺※名称仮" },
];

const TIGHTS: Product[] = [
  { id: "171764", name: "アタックベース 接触冷感ロングタイツ ブラック LL※名称仮" },
  { id: "171768", name: "アタックベース 接触冷感ロングタイツ ブラック 4L※名称仮" },
  { id: "171770", name: "アタックベース 接触冷感ロングタイツ ブラック 5L※名称仮" },
];

const PROTECTION: Product[] = [
  { id: "171836", name: "カジメイク 冷感エルボープロテクション※名称仮" },
  { id: "171837", name: "カジメイク 冷感ニープロテクション※名称仮" },
];

const INSOLE: Product[] = [
  { id: "171999", name: "TRUSCO シリカクリン 踏み抜き防止クールインソール L※名称仮" },
  { id: "172000", name: "TRUSCO シリカクリン 踏み抜き防止クールインソール LL※名称仮" },
  { id: "172001", name: "TRUSCO シリカクリン 踏み抜き防止クールインソール M※名称仮" },
];

const VEST: Product[] = [
  { id: "171779", name: "空調風神 クールベスト The tough※名称仮" },
  { id: "172464", name: "サンコー 冷蔵服3※名称仮" },
  { id: "203171", name: "BURTLE 冷却ベスト アイスクラフト IC101S※名称仮" },
  { id: "171898", name: "バートル ACタクティカルベスト AC1154 ブラック※名称仮" },
  { id: "171906", name: "バートル ACタクティカルベスト AC1154 アッシュグレー※名称仮" },
  { id: "172296", name: "サンコー ハーネス対応冷蔵ベスト※名称仮" },
  { id: "203375", name: "スリーライク 注水式冷却ベスト SMART-X※名称仮" },
  { id: "172034", name: "タジマ 清涼ファン 風雅パッド※名称仮" },
];

const JACKET: Product[] = [
  { id: "171880", name: "バートル ACタクティカルブルゾン AC1151※名称仮" },
  { id: "172154", name: "リンクサス COOLING BLAST ハーネス対応服地 ブルー※名称仮" },
  { id: "172157", name: "リンクサス COOLING BLAST ハーネス対応服地 シルバーグレー※名称仮" },
  { id: "203152", name: "BURTLE ACブルゾン AC2061※名称仮" },
];

/* ===== 一覧URL（エンコード済み・再エンコード禁止でそのまま定数化） ===== */
const LIST_URLS = {
  inner: `${YAHOO_BASE}search.html?aq=&oq=&p=%E7%86%B1%E4%B8%AD%E7%97%87+%E3%82%A4%E3%83%B3%E3%83%8A%E3%83%BC&storeid=signcity-yshop`,
  insole: `${YAHOO_BASE}search.html?aq=&oq=&p=%E3%82%A4%E3%83%B3%E3%82%BD%E3%83%BC%E3%83%AB&storeid=signcity-yshop`,
  coolVest: `${YAHOO_BASE}search.html?p=%E5%86%B7%E5%8D%B4%E3%83%99%E3%82%B9%E3%83%88#CentSrchFilter1`,
  airCon: `${YAHOO_BASE}search.html?aq=&oq=&p=%E7%A9%BA%E8%AA%BF%E6%9C%8D&storeid=signcity-yshop`,
  heatClothes: `${YAHOO_BASE}search.html?p=%E7%86%B1%E4%B8%AD%E7%97%87+%E6%9C%8D&b=31&view=grid`,
  heatItems: `${YAHOO_BASE}eab32ec7ce6.html`,
  trusco: `${YAHOO_BASE}a5c8a5e9a5.html#sideNaviItems`,
};

/* ===== 共通パーツ（作業用品ナビ＝黒系ボタン） ===== */
function ProductCard({ id, name, store = "yahoo" }: Product) {
  const s = (store ?? "yahoo") as Store;
  const href = buildUrl(storeUrl(s, id), `${SLUG}_${id}`);
  return (
    <a href={href} target="_blank" rel="nofollow noopener" className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white transition hover:shadow-md">
      <div className="aspect-square w-full overflow-hidden bg-gray-50">
        <img src={`/products/${id}.jpg`} alt={name} loading="lazy" className="h-full w-full object-contain transition group-hover:scale-105" />
      </div>
      <div className="flex flex-1 flex-col p-3">
        <p className="flex-1 text-sm leading-snug text-gray-800">{name}</p>
        <span className="mt-2 inline-block rounded bg-gray-900 px-3 py-1 text-center text-sm font-semibold text-white">商品を見る</span>
      </div>
    </a>
  );
}

function ProductGrid({ items }: { items: Product[] }) {
  return (
    <div className="my-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
      {items.map((p) => (<ProductCard key={p.id} {...p} />))}
    </div>
  );
}

function ListCTA({ href, utm, heading, text, label, strong = false }: { href: string; utm: string; heading: string; text: string; label: string; strong?: boolean }) {
  return (
    <div className={"my-6 rounded-lg border p-5 " + (strong ? "border-gray-900 bg-gray-50" : "border-gray-200 bg-gray-50")}>
      <h3 className="mb-2 text-lg font-bold text-gray-900">{heading}</h3>
      <p className="mb-4 text-sm leading-relaxed text-gray-700">{text}</p>
      <a href={buildUrl(href, utm)} target="_blank" rel="nofollow noopener" className="inline-block rounded-md bg-gray-900 px-5 py-2.5 font-semibold text-white transition hover:bg-gray-700">{label} →</a>
    </div>
  );
}

/* ===== JSON-LD ===== */
const faqs = [
  {
    q: "現場の暑さ対策では、まず何を着ればよいですか？",
    a: "作業着の下に着るインナーから見直すのがおすすめです。吸汗速乾・接触冷感・ストレッチ性のあるインナーを選ぶと、汗のベタつきや作業着の張り付き対策に役立ちます。",
  },
  {
    q: "空調服の下には何を着るとよいですか？",
    a: "汗を吸って乾きやすい冷感インナーやコンプレッションインナーが候補です。綿のTシャツは汗を含むと乾きにくく、涼しさを感じにくい場合があります。",
  },
  {
    q: "冷却ベストと空調服はどちらを選べばよいですか？",
    a: "風で衣服内を換気したい場合は空調服、上半身を集中的に冷やしたい場合は冷却ベストが候補です。高所作業ではハーネス対応、屋外作業では稼働時間や重量も確認しましょう。",
  },
  {
    q: "長袖インナーは夏の現場でも暑くありませんか？",
    a: "素材によります。接触冷感や吸汗速乾タイプの長袖インナーは、日差しや腕の保護、汗処理を目的に使われることがあります。作業環境によって感じ方は変わるため、通気性やサイズ感も確認してください。",
  },
  {
    q: "安全靴の暑さ対策には何ができますか？",
    a: "クールインソールや、吸湿・通気性を意識した中敷きが候補です。安全靴は蒸れやすいため、足元の不快感対策としてインソールを見直す方法があります。",
  },
  {
    q: "冷却用品を着れば熱中症を防げますか？",
    a: "冷却用品は熱中症対策の補助であり、着用していれば熱中症にならないという意味ではありません。休憩、水分・塩分補給、WBGT確認、作業時間管理、体調確認とあわせて使うことが大切です。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "比較", item: `${SITE_URL}/category/compare` },
    { "@type": "ListItem", position: 3, name: "現場の暑さ対策は服装から", item: `${SITE_URL}/articles/${SLUG}` },
  ],
};

/* ===== ページ本体 ===== */
export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 py-8">
        <nav className="mb-4 text-sm text-gray-500">
          <Link href="/" className="hover:underline">ホーム</Link>
          <span className="mx-1">/</span><span>比較</span><span className="mx-1">/</span>
          <span className="text-gray-700">現場の暑さ対策は服装から</span>
        </nav>

        <span className="mb-3 inline-block rounded bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-800">比較</span>

        <h1 className="mb-4 text-2xl font-bold leading-snug text-gray-900 sm:text-3xl">
          現場の暑さ対策は服装から｜冷感インナー・空調服・冷却ベストの選び方
        </h1>

        <p className="mb-6 text-sm text-gray-500">公開日：2026年6月27日／約14分で読めます</p>

        <img src="/images/articles/workwear-heat-protection-clothing-hero.jpg" alt="現場の暑さ対策衣服を確認する作業者と管理者のイメージ" className="mb-6 w-full rounded-lg object-cover" />

        <p className="mb-4 leading-relaxed text-gray-800">
          夏の現場では、休憩や水分補給だけでなく、服装選びも暑さ対策の重要な要素です。「作業着が汗で張り付く」「空調服がいまひとつ涼しく感じない」「安全靴の中が蒸れる」「腕の日差しがつらい」——こうした悩みは、服装をインナー・腕・脚・足元・上半身のレイヤー（層）で考えると整理しやすくなります。この記事では、現場責任者・購買担当者・作業者に向けて、現場に合う暑さ対策衣服の選び方を解説します。
        </p>

        {/* AEO回答ブロック（結論＝青） */}
        <div className="my-6 rounded-lg border-l-4 border-blue-500 bg-blue-50 p-5">
          <p className="leading-relaxed text-gray-800">
            現場の暑さ対策で服装を選ぶときは、まず「作業環境」「屋外・屋内」「汗の量」「日差し」「安全靴の蒸れ」「ハーネス使用の有無」を確認します。作業着の下には吸汗速乾・接触冷感インナー、腕にはアームカバー、足元にはクールインソール、上半身の冷却には空調服や冷却ベストを組み合わせると、現場に合わせた暑さ対策を考えやすくなります。
          </p>
        </div>

        {/* 健康注意（amber・YMYL） */}
        <div className="my-6 rounded-lg border-l-4 border-amber-500 bg-amber-50 p-5">
          <p className="text-sm leading-relaxed text-gray-800">
            <strong className="text-amber-700">ご注意：</strong>
            冷却ベスト・空調服・冷感インナーなどの冷却用品は熱中症対策の<strong>補助</strong>であり、着用していれば熱中症にならないという意味ではありません。WBGT（暑さ指数）の確認・こまめな休憩・水分塩分補給・作業時間管理・体調確認と必ず併用してください。めまい・頭痛・吐き気・大量の発汗・けいれんなどの症状が出たら、すぐに涼しい場所へ移動し身体を冷やし、水分・塩分を補給します。自力で水分が摂れない、意識がおかしい場合は迷わず119番、判断に迷うときは#7119へ。持病・服薬中・水分塩分制限がある方は主治医・産業医の指示を優先してください。ハーネスや安全靴などの安全装備は暑くても外さず、ハーネス対応タイプなどで両立を図りましょう。職場の暑さ対策は、厚生労働省・環境省などの公的情報もあわせて確認してください。
          </p>
        </div>

        {/* ===== H2：服装の組み合わせ ===== */}
        <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-4 text-xl font-bold text-gray-900">
          現場の暑さ対策は「服装の組み合わせ」で考える
        </h2>
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">空調服や冷却ベストだけでなく、インナー・足元まで見る</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          暑さ対策というと空調服や冷却ベストに目が向きがちですが、その効果は下に着るインナーや、足元・腕・脚の状態にも左右されます。作業着の下の冷感インナー、腕のアームカバー、脚のロングタイツ、足元のクールインソール、上半身の冷却ベスト・空調服——これらをレイヤーで組み合わせると、現場の悩みに合わせて対策を選びやすくなります。
        </p>
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">冷却用品は休憩・水分補給・作業管理と併用する</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          服装の工夫は大切ですが、それだけで熱中症を防げるわけではありません。WBGTの確認、こまめな休憩、水分・塩分補給、作業時間の管理、体調確認とあわせて運用することが前提です。職場の熱中症対策については、厚生労働省や環境省などの公的情報もあわせて確認しましょう。
        </p>

        {/* ===== H2：早見表 ===== */}
        <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-4 text-xl font-bold text-gray-900">
          まず確認したい暑さ対策衣服の早見表
        </h2>
        <div className="my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border border-gray-200 px-3 py-2">悩み</th>
                <th className="border border-gray-200 px-3 py-2">向いているアイテム</th>
                <th className="border border-gray-200 px-3 py-2">主な導線</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-200 px-3 py-2">作業着の下が汗でベタつく</td><td className="border border-gray-200 px-3 py-2">冷感・吸汗速乾インナー</td><td className="border border-gray-200 px-3 py-2">熱中症対策インナー</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 px-3 py-2">空調服をより快適に使いたい</td><td className="border border-gray-200 px-3 py-2">コンプレッション系インナー</td><td className="border border-gray-200 px-3 py-2">インナー＋空調服</td></tr>
              <tr><td className="border border-gray-200 px-3 py-2">腕の日差し・汗が気になる</td><td className="border border-gray-200 px-3 py-2">アームカバー</td><td className="border border-gray-200 px-3 py-2">アームカバー</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 px-3 py-2">脚の汗・ズボン内の不快感</td><td className="border border-gray-200 px-3 py-2">接触冷感ロングタイツ</td><td className="border border-gray-200 px-3 py-2">ロングタイツ</td></tr>
              <tr><td className="border border-gray-200 px-3 py-2">安全靴の中が蒸れる</td><td className="border border-gray-200 px-3 py-2">クールインソール</td><td className="border border-gray-200 px-3 py-2">インソール一覧</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 px-3 py-2">上半身を集中的に冷やしたい</td><td className="border border-gray-200 px-3 py-2">冷却ベスト・空調服</td><td className="border border-gray-200 px-3 py-2">冷却ベスト一覧</td></tr>
              <tr><td className="border border-gray-200 px-3 py-2">高所作業で使いたい</td><td className="border border-gray-200 px-3 py-2">ハーネス対応タイプ</td><td className="border border-gray-200 px-3 py-2">空調服一覧</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 px-3 py-2">法人でまとめてそろえたい</td><td className="border border-gray-200 px-3 py-2">レイヤー一式</td><td className="border border-gray-200 px-3 py-2">熱中症対策衣服一覧</td></tr>
            </tbody>
          </table>
        </div>

        {/* ===== H2：インナー ===== */}
        <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-4 text-xl font-bold text-gray-900">
          作業着の下には冷感インナー・吸汗速乾インナーを選ぶ
        </h2>
        <img src="/images/articles/cooling-innerwear-workwear-summer.jpg" alt="作業着の下に着る冷感インナーを選ぶイメージ" className="my-6 w-full rounded-lg object-cover" />
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">夏の現場では「普通のTシャツ」より専用インナーが向く場合がある</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          綿のTシャツは汗を含むと乾きにくく、肌に張り付いて不快になりがちです。吸汗速乾・接触冷感・ストレッチ性のある専用インナーは、汗処理や肌離れ、作業着・空調服との相性の面で向くことがあります。とくに空調服は、汗を素早く乾かすインナーと組み合わせると衣服内の換気を活かしやすくなります。
        </p>
        <ProductGrid items={INNER} />
        <ListCTA href={LIST_URLS.inner} utm={`${SLUG}_innerlist`} heading="作業着の下に着る熱中症対策インナーを確認する" text="吸汗速乾・接触冷感・ストレッチ性など、汗の量や作業に合わせて選びましょう。" label="熱中症対策インナー一覧へ" strong />

        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">長袖インナーと半袖インナーの使い分け</h3>
        <div className="my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border border-gray-200 px-3 py-2">タイプ</th>
                <th className="border border-gray-200 px-3 py-2">向いている場面</th>
                <th className="border border-gray-200 px-3 py-2">ポイント</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-200 px-3 py-2">長袖</td><td className="border border-gray-200 px-3 py-2">日差し・腕の保護を重視する屋外作業</td><td className="border border-gray-200 px-3 py-2">接触冷感・通気性を確認</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 px-3 py-2">半袖</td><td className="border border-gray-200 px-3 py-2">屋内・通気重視、重ね着を軽くしたい</td><td className="border border-gray-200 px-3 py-2">アームカバー併用も可</td></tr>
              <tr><td className="border border-gray-200 px-3 py-2">コンプレッション系</td><td className="border border-gray-200 px-3 py-2">フィット感・動きやすさ重視</td><td className="border border-gray-200 px-3 py-2">サイズ感を確認</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 px-3 py-2">接触冷感系</td><td className="border border-gray-200 px-3 py-2">着用時のひんやり感を求める</td><td className="border border-gray-200 px-3 py-2">感じ方は環境で変わる</td></tr>
            </tbody>
          </table>
        </div>

        {/* ===== H2：アームカバー ===== */}
        <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-4 text-xl font-bold text-gray-900">
          腕の暑さ・日差し対策にはアームカバーを使う
        </h2>
        <img src="/images/articles/arm-cover-long-tights-summer-work.jpg" alt="屋外作業でアームカバーとロングタイツを使うイメージ" className="my-6 w-full rounded-lg object-cover" />
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">半袖作業服でも腕を守りたい現場に向く</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          半袖作業服で動きやすさを確保しつつ、腕の日差しや汗が気になる現場では、アームカバーが役立ちます。屋外作業、倉庫、工場、農作業、イベント設営など、着脱しやすく腕を保護したい場面で使いやすいアイテムです。
        </p>
        <ProductGrid items={ARM} />

        {/* ===== H2：脚 ===== */}
        <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-4 text-xl font-bold text-gray-900">
          脚まわりの不快感にはロングタイツ・冷感プロテクションを検討する
        </h2>
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">ロングタイツはズボン内の汗・肌当たり対策に使える</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          作業ズボンの中が汗でまとわりつく、膝を曲げる作業が多い、脚の日差しが気になる——こうした現場では、接触冷感のロングタイツがズボン内の汗や肌当たりの対策に使えます。サイズ展開を確認し、作業の動きに合うものを選びましょう。
        </p>
        <ProductGrid items={TIGHTS} />
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">肘・膝をつく作業には冷感プロテクションも選択肢</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          設備工事、床作業、配管、整備、物流、内装、現場点検など、肘や膝をつく作業が多い現場では、冷感プロテクションも選択肢です。保護とひんやり感を両立したい場面で検討できます。
        </p>
        <ProductGrid items={PROTECTION} />

        {/* ===== H2：足元 ===== */}
        <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-4 text-xl font-bold text-gray-900">
          安全靴の蒸れ・足裏の不快感にはクールインソール
        </h2>
        <img src="/images/articles/cool-insole-safety-shoes-heat.jpg" alt="安全靴にクールインソールを入れるイメージ" className="my-6 w-full rounded-lg object-cover" />
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">足元の暑さ対策は見落とされやすい</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          安全靴は構造上蒸れやすく、足裏の不快感が作業ストレスにつながることがあります。インソール（中敷き）を見直すと、靴内環境の改善に役立ちます。踏み抜き防止タイプは、現場条件に合えば足裏の安全対策にもつながります。サイズを合わせて選びましょう。
        </p>
        <ProductGrid items={INSOLE} />
        <ListCTA href={LIST_URLS.insole} utm={`${SLUG}_insolelist`} heading="安全靴の蒸れ対策に使えるインソールを確認する" text="サイズや踏み抜き防止の要否を確認して、足元の不快感対策に役立てましょう。" label="インソール一覧へ" />

        {/* ===== H2：上半身 ===== */}
        <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-4 text-xl font-bold text-gray-900">
          上半身を冷やしたい場合は冷却ベスト・冷蔵服・空調服を選ぶ
        </h2>
        <img src="/images/articles/cooling-vest-worksite-heat-prevention.jpg" alt="現場で冷却ベストを着用する作業者のイメージ" className="my-6 w-full rounded-lg object-cover" />
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">冷却ベストは上半身を集中的に冷やしたい現場に向く</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          冷却ベストは、屋外作業・倉庫・工場・警備・イベント・設備点検など、上半身を集中的に冷やしたい場面で使われます。仕組みにはファンタイプ、冷却ユニットタイプ、注水式、保冷材タイプなどがあり、それぞれ連続使用時間・重量・充電・保冷材交換・ハーネス対応の有無が異なります。現場の作業時間や装備に合わせて確認しましょう。
        </p>
        <ProductGrid items={VEST} />
        <ListCTA href={LIST_URLS.coolVest} utm={`${SLUG}_vestlist`} heading="上半身を冷やす冷却ベストを確認する" text="ファン式・保冷材式・注水式など仕組みの違いと、稼働時間・重量・ハーネス対応を確認して選びましょう。" label="冷却ベスト一覧へ" strong />

        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">空調服は風を通す服装設計とインナー選びが重要</h3>
        <img src="/images/articles/fan-workwear-blouson-vest-summer-site.jpg" alt="空調服ベストとブルゾンを比較するイメージ" className="my-6 w-full rounded-lg object-cover" />
        <p className="mb-4 leading-relaxed text-gray-800">
          空調服は、ファンで衣服内に風を通す作業服です（温度を下げる冷房ではありません）。効果を活かすには、汗を乾かしやすいインナー選びが重要です。ベストタイプは腕まわりが動かしやすく、ブルゾンタイプは腕まで覆いたい現場に向きます。高所作業で使う場合は、ハーネス対応タイプかどうかを確認しましょう。
        </p>
        <ProductGrid items={JACKET} />
        <ListCTA href={LIST_URLS.airCon} utm={`${SLUG}_airconlist`} heading="現場別に空調服を確認する" text="ベスト/ブルゾン、ハーネス対応の有無、インナーとの組み合わせを確認して選びましょう。" label="空調服一覧へ" strong />

        {/* ===== H2：ベストvsブルゾン ===== */}
        <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-4 text-xl font-bold text-gray-900">
          ベストタイプとブルゾンタイプの違い
        </h2>
        <div className="my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border border-gray-200 px-3 py-2">種類</th>
                <th className="border border-gray-200 px-3 py-2">向いている現場</th>
                <th className="border border-gray-200 px-3 py-2">メリット</th>
                <th className="border border-gray-200 px-3 py-2">注意点</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-200 px-3 py-2">空調服ベスト</td><td className="border border-gray-200 px-3 py-2">腕を動かす作業・屋内外</td><td className="border border-gray-200 px-3 py-2">腕まわりが動かしやすい</td><td className="border border-gray-200 px-3 py-2">腕の日差し対策は別途</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 px-3 py-2">空調服ブルゾン</td><td className="border border-gray-200 px-3 py-2">腕まで覆いたい屋外作業</td><td className="border border-gray-200 px-3 py-2">腕・肩までカバー</td><td className="border border-gray-200 px-3 py-2">取り回し・重量を確認</td></tr>
              <tr><td className="border border-gray-200 px-3 py-2">ハーネス対応</td><td className="border border-gray-200 px-3 py-2">高所作業</td><td className="border border-gray-200 px-3 py-2">安全帯と両立しやすい</td><td className="border border-gray-200 px-3 py-2">対応仕様を必ず確認</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 px-3 py-2">冷却ベスト</td><td className="border border-gray-200 px-3 py-2">上半身を集中的に冷やす</td><td className="border border-gray-200 px-3 py-2">ファン不要のタイプもある</td><td className="border border-gray-200 px-3 py-2">稼働時間・保冷材交換</td></tr>
            </tbody>
          </table>
        </div>

        {/* ===== H2：現場別 ===== */}
        <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-4 text-xl font-bold text-gray-900">
          現場別に選ぶ暑さ対策衣服
        </h2>
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">建設・土木現場</h3>
        <p className="mb-4 leading-relaxed text-gray-800">長袖冷感インナー＋アームカバー、上半身は空調服または冷却ベスト、足元はクールインソール。高所作業がある場合はハーネス対応タイプを確認します。</p>
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">工場・倉庫</h3>
        <p className="mb-4 leading-relaxed text-gray-800">半袖または長袖インナー、クールインソール、空調服ベストや冷却ベスト、必要に応じてロングタイツ。屋内でも通気と汗処理を意識します。</p>
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">屋外イベント・警備・誘導</h3>
        <p className="mb-4 leading-relaxed text-gray-800">冷感インナー＋アームカバー、上半身は冷却ベストや空調服ベスト、足元はクールインソール。長時間の立哨・誘導を想定して選びます。</p>
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">整備・設備点検</h3>
        <p className="mb-4 leading-relaxed text-gray-800">ストレッチインナー、冷感エルボー/ニープロテクション、クールインソール、上半身は空調服または冷却ベスト。屈む・膝をつく作業に合わせます。</p>

        {/* ===== H2：法人チェックリスト ===== */}
        <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-4 text-xl font-bold text-gray-900">
          法人で支給する前に確認したいチェックリスト
        </h2>
        <img src="/images/articles/corporate-heat-workwear-supply-checklist.jpg" alt="法人担当者が熱中症対策衣服の支給品を確認するイメージ" className="my-6 w-full rounded-lg object-cover" />
        <ul className="my-4 list-disc space-y-2 pl-6 text-gray-800">
          <li>屋外作業か屋内作業か</li>
          <li>日差しの強さ</li>
          <li>汗の量</li>
          <li>安全靴の蒸れ</li>
          <li>ハーネス使用の有無</li>
          <li>腕や膝をつく作業の有無</li>
          <li>作業服の形状（ベスト/ブルゾン）</li>
          <li>サイズ展開</li>
          <li>洗い替え枚数</li>
          <li>バッテリーや保冷材の管理体制</li>
          <li>休憩・水分補給・WBGT確認との併用</li>
        </ul>

        {/* ===== H2：まとめて確認 ===== */}
        <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-4 text-xl font-bold text-gray-900">
          現場の暑さ対策衣服をまとめて確認する
        </h2>
        <div className="my-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <a href={buildUrl(LIST_URLS.airCon, `${SLUG}_cta_aircon`)} target="_blank" rel="nofollow noopener" className="block rounded-lg border border-gray-900 bg-gray-50 p-5 text-center font-semibold text-gray-900 transition hover:bg-gray-100">空調服一覧へ →</a>
          <a href={buildUrl(LIST_URLS.heatClothes, `${SLUG}_cta_clothes`)} target="_blank" rel="nofollow noopener" className="block rounded-lg border border-gray-900 bg-gray-50 p-5 text-center font-semibold text-gray-900 transition hover:bg-gray-100">熱中症対策衣服一覧へ →</a>
          <a href={buildUrl(LIST_URLS.heatItems, `${SLUG}_cta_items`)} target="_blank" rel="nofollow noopener" className="block rounded-lg bg-gray-900 p-5 text-center font-semibold text-white transition hover:bg-gray-700">熱中症対策アイテム一覧へ →</a>
        </div>
        <p className="mb-4 text-sm leading-relaxed text-gray-600">
          そのほか、現場や倉庫で必要な作業用品は<a href={buildUrl(LIST_URLS.trusco, `${SLUG}_cta_trusco`)} target="_blank" rel="nofollow noopener" className="text-gray-900 underline hover:no-underline">トラスコ中山一覧</a>からまとめて確認できます。
        </p>

        {/* ===== H2：まとめ ===== */}
        <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-4 text-xl font-bold text-gray-900">
          まとめ｜現場の暑さ対策は服装をレイヤーで整える
        </h2>
        <p className="mb-4 leading-relaxed text-gray-800">
          現場の暑さ対策は、服装をレイヤーで整えると考えやすくなります。作業着の下は冷感インナー、腕はアームカバー、脚はロングタイツや冷感プロテクション、足元はクールインソール、上半身は冷却ベストや空調服。高所作業ではハーネス対応を確認します。そして、これらの冷却用品はあくまで補助です。WBGT確認・休憩・水分塩分補給・作業時間管理・体調確認と必ず併用し、現場環境に合わせて選びましょう。
        </p>

        {/* ===== FAQ ===== */}
        <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-4 text-xl font-bold text-gray-900">よくある質問（FAQ）</h2>
        <div className="my-4 space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="rounded-lg border border-gray-200 p-4">
              <p className="mb-2 font-bold text-gray-900">Q{i + 1}. {f.q}</p>
              <p className="text-sm leading-relaxed text-gray-700">{f.a}</p>
            </div>
          ))}
        </div>

        {/* ===== 関連記事 ===== */}
        <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-4 text-xl font-bold text-gray-900">関連記事</h2>
        <ul className="my-4 list-disc space-y-2 pl-6 text-gray-800">
          <li><Link href="/articles/office-disaster-prevention-supplies" className="text-gray-900 underline hover:no-underline">会社の防災用品リスト｜オフィス・店舗・現場で備えたい備蓄品と選び方</Link></li>
          <li><Link href="/articles/flexible-container-bag-selection" className="text-gray-900 underline hover:no-underline">フレコンバッグの選び方｜排出口あり・なし、耐候性、用途別の使い分け</Link></li>
        </ul>

        {/* 構造化データ */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      </main>
      <SiteFooter />
    </>
  );
}
