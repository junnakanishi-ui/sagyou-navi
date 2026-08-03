import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";

// ============================================================================
// 作業用品ナビ 記事コンポーネント
// 狙いキーワード: 凍結防止剤 駐車場 使い方
// ハウスルール: max-w-4xl / gray-900 / utm_source=sagyou_navi / 自己完結(共有libなし)
// 送客先(自社): GREEN CROSS-select(gc-select) / 楽天 crecote-shop / サインシティ(trade-sign)
// ----------------------------------------------------------------------------
// ※商品画像は保存済みの {商品コード}.jpg を自社ホスティングする想定。
//   IMG_BASE を設置先に合わせて変更してください（例: /images/winter/）。
// ============================================================================

const SLUG = "deicer-parking-howto";
const SITE_URL = "https://www.sagyou-navi.com";
const HERO = `/images/articles/${SLUG}/hero.jpg`;

export const metadata: Metadata = {
  title:
    "凍結防止剤の駐車場での使い方｜撒くタイミング・量・種類の選び方と注意点",
  description:
    "駐車場の凍結防止剤の正しい使い方を解説。最も効果的な事前散布のタイミング、1㎡あたりの散布量の目安、塩化カルシウム・非塩素系など種類の選び方、コンクリートや車への影響と注意点まで、冬の駐車場管理に必要な情報を網羅しました。",
  alternates: { canonical: `${SITE_URL}/articles/${SLUG}` },
  openGraph: {
    title: "凍結防止剤の駐車場での使い方｜撒くタイミング・量・種類の選び方",
    description:
      "駐車場の凍結防止剤の正しい使い方を解説。事前散布のタイミング、散布量の目安、種類の選び方、注意点まで網羅。",
    type: "article",
    images: [HERO],
  },
};

const UTM = "utm_source=sagyou_navi";
const IMG_BASE = "/images/winter/"; // 保存済み {code}.jpg の設置先に変更してください

function withUtm(url: string): string {
  const sep = url.includes("?") ? "&" : "?";
  return url + sep + UTM;
}
function imgUrl(code: string): string {
  return IMG_BASE + code + ".jpg";
}

type Store = "gcselect" | "rakuten";
type Product = { code: string; name: string; url: string; store: Store; tag?: string; note?: string };

const DEICER: Product[] = [
  { code: "1137100100", name: "凍結防止剤　塩化カルシウム　２５ｋｇ　粒状", url: "https://www.gc-select.com/products/1137100100", store: "gcselect", tag: "塩化カルシウム", note: "粒状・即効。低温でも素早く溶かしたい凍結時に。25kg。" },
  { code: "1137100101", name: "粒状塩化カルシウム", url: "https://www.gc-select.com/products/1137100101", store: "gcselect", tag: "塩化カルシウム", note: "扱いやすい粒状タイプ。ピンポイントの融氷に。" },
  { code: "1137100103", name: "凍結防止剤　塩化物系混合物（輸入）", url: "https://www.gc-select.com/products/1137100103", store: "gcselect", tag: "塩化物系混合物", note: "コスパ重視の混合タイプ。広範囲の予防散布に。" },
  { code: "1137100202", name: "凍結防止剤　メタブルー　２０Ｌ", url: "https://www.gc-select.com/products/1137100202", store: "gcselect", tag: "液体・メタブルー", note: "液体20L。降雪前にムラなく事前散布しやすい。" },
  { code: "1137100201", name: "環境配慮型　住宅用凍結防止剤　凍ランブルー　２０Ｌ", url: "https://www.gc-select.com/products/1137100201", store: "gcselect", tag: "環境配慮・液体", note: "凍ランブルー20L。住宅・駐車場向けの環境配慮型。" },
  { code: "6300004455", name: "融氷・凍結防止　メルト・スノー　Ｔ－１０２　１０Ｌ", url: "https://www.gc-select.com/products/6300004455", store: "gcselect", tag: "非塩素系・液体", note: "メルト・スノー10L。金属・構造物に配慮したい場所に。" },
  { code: "6300004456", name: "融氷・凍結防止　メルト・スノー　Ｔ－１０３　２０Ｌ", url: "https://www.gc-select.com/products/6300004456", store: "gcselect", tag: "非塩素系・液体", note: "メルト・スノー20L。広めの駐車場の事前散布に。" },
];
const WARMWEAR: Product[] = [
  { code: "ta052028-22210l", name: "ＸＥＢＥＣ　２２２　現場服　防寒ブルゾン　Ｌ　紺", url: "https://item.rakuten.co.jp/crecote-shop/ta052028-22210l/", store: "rakuten" },
  { code: "ta052170-503064xxl", name: "ＢＵＲＴＬＥ　防寒フーディジャケット　５０３０−６４−ＸＸＬ　アーバンブラック", url: "https://item.rakuten.co.jp/crecote-shop/ta052170-503064xxl/", store: "rakuten" },
  { code: "ta052175-503464m", name: "ＢＵＲＴＬＥ　防寒フーディベスト（ユニセックス）　５０３４−６４−Ｍ　アーバンブラック", url: "https://item.rakuten.co.jp/crecote-shop/ta052175-503464m/", store: "rakuten" },
  { code: "ta052173-503461xl", name: "ＢＵＲＴＬＥ　防寒フーディベスト　５０３４−６１−ＸＬ　アーミカーキ", url: "https://item.rakuten.co.jp/crecote-shop/ta052173-503461xl/", store: "rakuten" },
  { code: "ta052040-22290m", name: "ＸＥＢＥＣ　２２２　現場服　防寒ブルゾン　Ｍ　黒", url: "https://item.rakuten.co.jp/crecote-shop/ta052040-22290m/", store: "rakuten" },
  { code: "ta052455-az8476010ll", name: "アイトス　防風防寒ブルゾン　ＴＵＬＴＥＸ　ブラック　ＬＬ", url: "https://item.rakuten.co.jp/crecote-shop/ta052455-az8476010ll/", store: "rakuten" },
  { code: "ta052459-az8476108l", name: "アイトス　防風防寒ブルゾン　ＴＵＬＴＥＸ　ネイビー　Ｌ", url: "https://item.rakuten.co.jp/crecote-shop/ta052459-az8476108l/", store: "rakuten" },
  { code: "ta052166-503061m", name: "ＢＵＲＴＬＥ　防寒フーディジャケット（ユニセックス）　５０３０−６１−Ｍ　アーミカーキ", url: "https://item.rakuten.co.jp/crecote-shop/ta052166-503061m/", store: "rakuten" },
  { code: "ta053517-ve2007sitas", name: "ミドリ安全　ＶＥＲＤＥＸＣＥＬ　ストレッチ防寒スラックス　ＶＥ２００７　下　ネイビー　Ｓ", url: "https://item.rakuten.co.jp/crecote-shop/ta053517-ve2007sitas/", store: "rakuten" },
  { code: "ta053518-ve2007ue3l", name: "ミドリ安全　ＶＥＲＤＥＸＣＥＬ　ストレッチ防寒ジャンパー　ＶＥ２００７　上　ネイビー　３Ｌ", url: "https://item.rakuten.co.jp/crecote-shop/ta053518-ve2007ue3l/", store: "rakuten" },
  { code: "ta052316-742014ll", name: "ＢＵＲＴＬＥ　軽防寒ジャケット　７４２０−１４−ＬＬ　ミルスグリーン", url: "https://item.rakuten.co.jp/crecote-shop/ta052316-742014ll/", store: "rakuten" },
  { code: "ta052317-742014m", name: "ＢＵＲＴＬＥ　軽防寒ジャケット（ユニセックス）　７４２０−１４−Ｍ　ミルスグリーン", url: "https://item.rakuten.co.jp/crecote-shop/ta052317-742014m/", store: "rakuten" },
];

// 自社ストアへのCTA
const CTA_GC_DEICER = {
  label: "凍結防止剤の一覧・価格を見る（GC-select）",
  url: "https://www.gc-select.com/search?q=%E5%87%8D%E7%B5%90%E9%98%B2%E6%AD%A2%E5%89%A4",
};
const CTA_POLE = {
  label: "スノーポール（視線誘導）を見る",
  url: "https://www.trade-sign.com/koujiyouhin/22/",
};
const CTA_SIGN = {
  label: "凍結・スリップ注意の看板を見る",
  url: "https://www.trade-sign.com/search/?q=%E5%87%8D%E7%B5%90",
};
const CTA_WARM = {
  label: "防寒着を見る（楽天 crecote-shop）",
  url: "https://www.rakuten.co.jp/crecote-shop/",
};

// ---- 部品（自己完結・gray-900） -------------------------------------------
function StoreBadge({ store }: { store: Store }) {
  const gc = store === "gcselect";
  return (
    <span className={"inline-block rounded px-1.5 py-0.5 text-[10px] font-bold " + (gc ? "bg-emerald-100 text-emerald-800" : "bg-red-100 text-red-700")}>
      {gc ? "GC-select" : "楽天"}
    </span>
  );
}

// クリックしやすさ重視: カード全体リンク＋大きめボタン
function ProductCard({ p }: { p: Product }) {
  return (
    <a
      href={withUtm(p.url)}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition-all hover:border-gray-900 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-gray-900"
    >
      <div className="relative aspect-square w-full overflow-hidden bg-gray-50">
        <img src={imgUrl(p.code)} alt={p.name} loading="lazy"
             className="h-full w-full object-contain p-2 transition-transform duration-200 group-hover:scale-105" />
        <span className="absolute left-1.5 top-1.5"><StoreBadge store={p.store} /></span>
        {p.tag ? (
          <span className="absolute right-1.5 top-1.5 rounded bg-gray-900/85 px-1.5 py-0.5 text-[10px] font-bold text-white">{p.tag}</span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-3">
        <h4 className="line-clamp-3 text-[13px] font-bold leading-snug text-gray-900">{p.name}</h4>
        {p.note ? <p className="mt-1 flex-1 text-xs leading-relaxed text-gray-600">{p.note}</p> : <span className="flex-1" />}
        <span className="mt-3 inline-flex items-center justify-center gap-1 rounded-lg bg-gray-900 px-3 py-2.5 text-sm font-bold text-white transition-colors group-hover:bg-gray-700">
          価格・在庫を見る<span aria-hidden>→</span>
        </span>
      </div>
    </a>
  );
}

function PrimaryCta({ label, url }: { label: string; url: string }) {
  return (
    <a href={withUtm(url)} target="_blank" rel="noopener noreferrer sponsored"
       className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gray-900 px-6 py-4 text-base font-bold text-white shadow-sm transition-colors hover:bg-gray-700 sm:w-auto">
      {label}<span aria-hidden className="text-lg">→</span>
    </a>
  );
}
function SubCta({ label, url }: { label: string; url: string }) {
  return (
    <a href={withUtm(url)} target="_blank" rel="noopener noreferrer sponsored"
       className="inline-flex items-center justify-center gap-1 rounded-md border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 transition-colors hover:border-gray-900 hover:bg-gray-50">
      {label}<span aria-hidden>›</span>
    </a>
  );
}

function SectionH2({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2 id={id} className="mt-14 scroll-mt-24 border-l-4 border-gray-900 pl-3 text-xl font-bold text-gray-900 sm:text-2xl">
      {children}
    </h2>
  );
}

const FAQ = [
  { q: "融雪剤と凍結防止剤は何が違いますか？", a: "凍結防止剤は路面が凍る前に散布して凍結そのものを防ぐもの、融雪剤は積もった雪や氷を溶かすものを指します。ただし主成分は共通することが多く、実際には両方の役割を兼ねる製品も多くあります。駐車場では『凍る前の予防散布』を中心に、必要に応じて融雪にも使える製品を選ぶと便利です。" },
  { q: "凍結防止剤はいつ撒くのが効果的ですか？", a: "最も効果的なのは、雪が降る前・路面が凍る前の『事前散布』です。寒冷地の研究でも、降雪後より降雪前の散布のほうが効果的と報告されています。天気予報で冷え込みや降雪が見込まれる前夜〜早朝に、凍結しやすい場所へ撒いておきましょう。" },
  { q: "どれくらいの量を撒けばよいですか？", a: "薄い雪や氷なら1㎡あたり約50〜80g、5cmほどの積雪には約100〜150gが目安です。塩化カルシウムを防塵・融氷目的で使う場合は1㎡あたり約0.5〜1kg、25kgで約180㎡が一つの目安になります。気温・積雪量・製品によって調整してください。撒きすぎは塩害やコスト増につながります。" },
  { q: "コンクリートやアスファルトの駐車場に使っても大丈夫ですか？", a: "塩化物系の凍結防止剤は、コンクリートの剥離やひび割れ、鉄筋・金属の腐食の一因になることがあります。縁石・側溝・周辺構造物への散布は控えめにし、心配な場所は環境配慮型（非塩素系）を選ぶ、散布量を守る、融けた水を放置しないといった対策が有効です。" },
  { q: "車や植栽への影響は？", a: "塩分を含むタイプは車体のサビ（塩害）や植物の枯れの原因になり得ます。車に付着したら早めに洗浄し、植栽やペットが触れる場所では非塩素系・環境配慮型の使用を検討してください。" },
  { q: "保管方法の注意点はありますか？", a: "塩化カルシウムなどは吸湿性が高いため、湿気の少ない場所で保管し、開封後は密封して保管します。高温になる場所は避けてください。取り扱い時は皮膚炎を防ぐためゴム手袋を着用しましょう。" },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "記事一覧", item: `${SITE_URL}/articles` },
    {
      "@type": "ListItem",
      position: 3,
      name: "凍結防止剤の駐車場での使い方",
      item: `${SITE_URL}/articles/${SLUG}`,
    },
  ],
};

export default function DeicerParkingArticle() {
  return (
    <>
      <SiteHeader />
      <article className="mx-auto max-w-4xl px-4 py-8 text-gray-900">
        <nav aria-label="パンくず" className="mb-4 text-xs text-gray-500">
          <Link href="/" className="hover:underline">
            作業用品ナビ
          </Link>
          {" ＞ "}
          <Link href="/articles" className="hover:underline">
            記事一覧
          </Link>
          {" ＞ "}
          <span>凍結防止剤</span>
        </nav>

        <header>
          <h1 className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl">
            凍結防止剤の駐車場での使い方｜撒くタイミング・量・種類の選び方と注意点
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-gray-700">
            冬の駐車場は、車のスリップや歩行者の転倒事故が起きやすい場所です。これを防ぐのが
            <strong className="font-bold">凍結防止剤</strong>ですが、
            「いつ・どこに・どれくらい撒くか」で効果が大きく変わります。この記事では、
            駐車場での正しい使い方（事前散布のタイミング・散布量の目安・撒き方）と、
            種類の選び方、コンクリートや車への影響といった注意点まで、実務目線でまとめました。
          </p>
          <p className="mt-2 text-xs text-gray-400">最終更新：2026年8月</p>
        </header>

        <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-4">
          <p className="text-sm font-semibold text-gray-900">駐車場向けの凍結防止剤をお探しの方へ</p>
          <div className="mt-3"><PrimaryCta label={CTA_GC_DEICER.label} url={CTA_GC_DEICER.url} /></div>
        </div>

        <nav className="mt-8 rounded-lg border border-gray-200 bg-white p-4">
          <p className="mb-2 text-sm font-bold text-gray-900">この記事でわかること</p>
          <ol className="list-decimal space-y-1 pl-5 text-sm text-gray-700">
            <li><a className="hover:underline" href="#what">凍結防止剤とは？融雪剤との違い</a></li>
            <li><a className="hover:underline" href="#type">種類と選び方（駐車場向け）＜商品一覧＞</a></li>
            <li><a className="hover:underline" href="#howto">駐車場での正しい使い方（タイミング・量・撒き方）</a></li>
            <li><a className="hover:underline" href="#caution">使うときの注意点（コンクリート・車・保管・安全）</a></li>
            <li><a className="hover:underline" href="#winter">凍結防止剤だけじゃない｜冬の駐車場対策アイテム</a></li>
            <li><a className="hover:underline" href="#wear">散布作業を快適に｜冬の防寒装備</a></li>
            <li><a className="hover:underline" href="#faq">よくある質問（FAQ）</a></li>
          </ol>
        </nav>

        {/* 1. とは */}
        <SectionH2 id="what">凍結防止剤とは？融雪剤との違い</SectionH2>
        <p className="mt-4 text-sm leading-relaxed text-gray-700 sm:text-base">
          <strong className="font-bold">凍結防止剤</strong>は、路面が凍る前に撒いて凍結そのものを防ぐための薬剤です。
          一方で<strong className="font-bold">融雪剤</strong>は、すでに積もった雪や氷を溶かすためのもの。
          ただし主成分は共通することが多く、実際には両方の役割を兼ねる製品も少なくありません。
          駐車場では、<strong className="font-bold">「凍る前の予防散布」</strong>を基本に、
          必要に応じて融雪にも使えるタイプを選ぶのが効率的です。
        </p>

        {/* 2. 種類・選び方 + 商品 */}
        <SectionH2 id="type">凍結防止剤の種類と選び方（駐車場向け）</SectionH2>
        <p className="mt-4 text-sm leading-relaxed text-gray-700 sm:text-base">
          凍結防止剤は主成分によって、効き方・価格・構造物への影響が変わります。駐車場では、
          「早く溶かしたいか」「予防的に広く撒きたいか」「コンクリートや車への影響を抑えたいか」で選び分けましょう。
        </p>

        <div className="mt-6 overflow-x-auto rounded-lg border border-gray-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-900 text-white">
              <tr>
                <th className="px-3 py-2 font-semibold">タイプ</th>
                <th className="px-3 py-2 font-semibold">特徴</th>
                <th className="px-3 py-2 font-semibold">構造物・車への影響</th>
                <th className="px-3 py-2 font-semibold">向く使い方</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white text-gray-700">
              <tr><td className="px-3 py-2 font-bold">塩化カルシウム</td><td className="px-3 py-2">即効・低温にも強い。発熱しながら溶かす</td><td className="px-3 py-2">影響あり（控えめに）</td><td className="px-3 py-2">凍結時に素早く溶かす</td></tr>
              <tr><td className="px-3 py-2 font-bold">塩化ナトリウム</td><td className="px-3 py-2">安価・効き方は穏やか</td><td className="px-3 py-2">影響あり</td><td className="px-3 py-2">広範囲の予防散布</td></tr>
              <tr><td className="px-3 py-2 font-bold">環境配慮・非塩素系</td><td className="px-3 py-2">金属腐食・コンクリ侵食を抑制。車にやさしい</td><td className="px-3 py-2">影響が少ない</td><td className="px-3 py-2">車・構造物・植栽に配慮</td></tr>
              <tr><td className="px-3 py-2 font-bold">液体タイプ</td><td className="px-3 py-2">ムラなく事前散布・浸透しやすい</td><td className="px-3 py-2">製品による</td><td className="px-3 py-2">降雪前の予防散布</td></tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {DEICER.map((p) => (<ProductCard key={p.code} p={p} />))}
        </div>
        <p className="mt-3 text-xs text-gray-500">※価格・在庫・送料は各商品ページでご確認ください。大量・粒状25kgは送料が別途必要な場合があります。</p>
        <div className="mt-5"><PrimaryCta label={CTA_GC_DEICER.label} url={CTA_GC_DEICER.url} /></div>

        {/* 3. 使い方 */}
        <SectionH2 id="howto">駐車場での正しい使い方（タイミング・量・撒き方）</SectionH2>

        <h3 className="mt-6 text-lg font-bold text-gray-900">① 撒くタイミング：凍る前の「事前散布」が最も効果的</h3>
        <p className="mt-2 text-sm leading-relaxed text-gray-700 sm:text-base">
          凍結防止剤は、<strong className="font-bold">路面が凍る前・雪が積もる前</strong>に撒くのが最も効果的です。
          寒冷地の研究でも、降雪後より降雪前の事前散布のほうが効果的と報告されています。
          天気予報で冷え込みや降雪が見込まれる<strong className="font-bold">前夜〜早朝</strong>に、先回りして散布しておきましょう。
        </p>

        <h3 className="mt-6 text-lg font-bold text-gray-900">② 撒く場所：凍結しやすいポイントに重点</h3>
        <ul className="mt-2 space-y-1.5 pl-5 text-sm text-gray-700">
          <li className="list-disc">出入口・スロープ（傾斜部はスリップ事故が起きやすい）</li>
          <li className="list-disc">日陰になり凍結が残りやすい区画・北面</li>
          <li className="list-disc">車路・歩行者動線・車室の乗降スペース</li>
          <li className="list-disc">水がたまりやすい低い場所・排水口まわり</li>
        </ul>

        <h3 className="mt-6 text-lg font-bold text-gray-900">③ 撒く量の目安</h3>
        <div className="mt-2 rounded-lg border border-gray-200 bg-gray-50 p-4">
          <ul className="space-y-1.5 text-sm text-gray-700">
            <li>・薄い雪・氷：<strong className="font-bold">1㎡あたり約50〜80g</strong></li>
            <li>・5cm程度の積雪：<strong className="font-bold">1㎡あたり約100〜150g</strong></li>
            <li>・塩化カルシウム（防塵・融氷）：<strong className="font-bold">1㎡あたり約0.5〜1kg</strong>（25kgで約180㎡が目安）</li>
          </ul>
          <p className="mt-2 text-xs text-gray-500">※気温・積雪量・製品で調整。撒きすぎは塩害・コスト増につながるため注意。</p>
        </div>

        <h3 className="mt-6 text-lg font-bold text-gray-900">④ 撒き方のコツ</h3>
        <p className="mt-2 text-sm leading-relaxed text-gray-700 sm:text-base">
          粒状は<strong className="font-bold">薄く均一に</strong>散布するのがポイント。広い駐車場では散布機やスコップを使うとムラを抑えられます。
          液体タイプは降雪前の事前散布に向き、浸透してムラなく効かせやすいのが利点です。
          溶けてシャーベット状になった雪は、放置せず<strong className="font-bold">除雪</strong>して再凍結を防ぎましょう。
        </p>

        {/* 4. 注意点 */}
        <SectionH2 id="caution">使うときの注意点（コンクリート・車・保管・安全）</SectionH2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-gray-200 bg-white p-4">
            <p className="text-sm font-bold text-gray-900">構造物・車・環境への配慮</p>
            <ul className="mt-2 space-y-1.5 pl-5 text-xs leading-relaxed text-gray-600">
              <li className="list-disc">塩化物系はコンクリの剥離・ひび割れ、金属腐食の一因に。縁石・側溝・構造物まわりは控えめに</li>
              <li className="list-disc">車体はサビ（塩害）に注意。付着したら早めに洗浄</li>
              <li className="list-disc">植栽・ペットが触れる場所は非塩素系・環境配慮型を検討</li>
              <li className="list-disc">溶けた水を放置せず除去し、再凍結を防ぐ</li>
            </ul>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-4">
            <p className="text-sm font-bold text-gray-900">取り扱い・保管の安全</p>
            <ul className="mt-2 space-y-1.5 pl-5 text-xs leading-relaxed text-gray-600">
              <li className="list-disc">塩化カルシウムは皮膚炎の原因に。<strong>ゴム手袋</strong>を着用（濡れた手は特に注意）</li>
              <li className="list-disc">粉じん・目に入らないよう注意し、風向きにも配慮</li>
              <li className="list-disc">吸湿性が高いため湿気の少ない場所で保管、開封後は密封</li>
              <li className="list-disc">高温になる場所を避けて保管する</li>
            </ul>
          </div>
        </div>

        {/* 5. 冬の対策アイテム */}
        <SectionH2 id="winter">凍結防止剤だけじゃない｜冬の駐車場対策アイテム</SectionH2>
        <p className="mt-4 text-sm leading-relaxed text-gray-700 sm:text-base">
          安全な冬の駐車場運営は、凍結防止剤に加えて「滑りへの備え」「除雪の目印」「注意喚起」を組み合わせると万全です。
          必要なアイテムは自社ストアからまとめて用意できます。
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-gray-200 bg-white p-4">
            <p className="text-sm font-bold text-gray-900">滑り止め・視線誘導</p>
            <p className="mt-1 text-xs leading-relaxed text-gray-600">凍結路面には滑り止め砂を併用。除雪時の目印や車路の誘導にはスノーポールが役立ちます。</p>
            <div className="mt-3"><SubCta label={CTA_POLE.label} url={CTA_POLE.url} /></div>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-4">
            <p className="text-sm font-bold text-gray-900">注意喚起の看板</p>
            <p className="mt-1 text-xs leading-relaxed text-gray-600">「凍結スリップ注意」などの看板で、ドライバー・歩行者へ事前に注意を促しましょう。</p>
            <div className="mt-3"><SubCta label={CTA_SIGN.label} url={CTA_SIGN.url} /></div>
          </div>
        </div>

        {/* 6. 防寒着 */}
        <SectionH2 id="wear">散布作業を快適に｜冬の防寒装備</SectionH2>
        <p className="mt-4 text-sm leading-relaxed text-gray-700 sm:text-base">
          早朝の散布や除雪は冷え込みの厳しい時間帯の作業になりがちです。動きやすい防寒着で、
          作業者の負担と体調リスクを軽減しましょう。
        </p>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {WARMWEAR.map((p) => (<ProductCard key={p.code} p={p} />))}
        </div>
        <div className="mt-5"><PrimaryCta label={CTA_WARM.label} url={CTA_WARM.url} /></div>

        {/* 7. FAQ */}
        <SectionH2 id="faq">よくある質問（FAQ）</SectionH2>
        <div className="mt-4 space-y-3">
          {FAQ.map((f, i) => (
            <details key={i} className="group rounded-lg border border-gray-200 bg-white p-4">
              <summary className="cursor-pointer list-none text-sm font-bold text-gray-900 marker:hidden">
                <span className="mr-2 text-gray-500">Q.</span>{f.q}
              </summary>
              <p className="mt-2 text-sm leading-relaxed text-gray-700"><span className="mr-2 font-bold text-gray-500">A.</span>{f.a}</p>
            </details>
          ))}
        </div>

        {/* まとめ */}
        <SectionH2 id="summary">まとめ</SectionH2>
        <p className="mt-4 text-sm leading-relaxed text-gray-700 sm:text-base">
          駐車場の凍結対策は、<strong className="font-bold">凍る前の事前散布</strong>が基本です。
          凍結しやすい出入口・日陰・傾斜に重点を置き、目安の量をムラなく撒くことで、
          少ない薬剤で効果的に事故を防げます。コンクリートや車への影響が気になる場所は
          環境配慮型を選び、取り扱い・保管の安全にも配慮しましょう。必要な製品は、まずは一覧からチェックしてみてください。
        </p>
        <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-5">
          <p className="text-base font-bold text-gray-900">冬の駐車場対策をまとめて準備</p>
          <div className="mt-4"><PrimaryCta label={CTA_GC_DEICER.label} url={CTA_GC_DEICER.url} /></div>
          <div className="mt-4 flex flex-wrap gap-2">
            <SubCta label={CTA_POLE.label} url={CTA_POLE.url} />
            <SubCta label={CTA_SIGN.label} url={CTA_SIGN.url} />
            <SubCta label={CTA_WARM.label} url={CTA_WARM.url} />
          </div>
        </div>

        <p className="mt-6 text-xs leading-relaxed text-gray-400">
          ※散布量・使用方法・注意事項は製品によって異なります。実際のご使用時は各製品の表示・注意書きに従ってください。
        </p>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      </article>
      <SiteFooter />
    </>
  );
}
