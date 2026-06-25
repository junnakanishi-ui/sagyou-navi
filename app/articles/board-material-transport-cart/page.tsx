import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";

// =====================================================================
// 定数・ヘルパー（自己完結）
// =====================================================================
const STORE = "signcity-yshop";
const SLUG = "board-material-transport-cart";

// 商品画像は必ずローカルパス（外部URL禁止）
const productImage = (id: string) => `/products/${id}.jpg`;

// Yahoo!（signcity-yshop）商品ページURL
const yahooUrl = (id: string) =>
  `https://store.shopping.yahoo.co.jp/${STORE}/${id}.html`;

// UTM付与（# フラグメントの前にクエリを差し込む／既存クエリは再エンコードしない）
function buildUrl(base: string, utmContent: string): string {
  const [path, hash] = base.split("#");
  const sep = path.includes("?") ? "&" : "?";
  const utm =
    `utm_source=sagyou_navi&utm_medium=referral` +
    `&utm_campaign=2026_sagyou_navi&utm_content=${utmContent}`;
  return `${path}${sep}${utm}${hash ? `#${hash}` : ""}`;
}

const productHref = (id: string) =>
  buildUrl(yahooUrl(id), `${SLUG}_yahoo`);
const categoryHref = (url: string) =>
  buildUrl(url, `${SLUG}_yahoo`);

// 一覧（カテゴリ）URL：日本語/EUCエンコード済み文字列はそのまま定数化（再エンコード禁止）
const CATEGORY = {
  grancart:
    "https://store.shopping.yahoo.co.jp/signcity-yshop/search.html?p=%E3%82%B0%E3%83%A9%E3%83%B3%E3%82%AB%E3%83%BC%E3%83%88&view=grid",
  alumiPanel:
    "https://store.shopping.yahoo.co.jp/signcity-yshop/a5a2a5eba5.html?view=grid",
  alumiMaterial:
    "https://store.shopping.yahoo.co.jp/signcity-yshop/a4cea4eaa5.html#sideNaviItems",
  nbShoes:
    "https://store.shopping.yahoo.co.jp/signcity-yshop/b0c2c1b4b7.html?b=91&view=grid",
  safetyShoes:
    "https://store.shopping.yahoo.co.jp/signcity-yshop/search.html?p=%E5%AE%89%E5%85%A8%E9%9D%B4&b=151&view=grid",
  trusco:
    "https://store.shopping.yahoo.co.jp/signcity-yshop/a5c8a5e9a5.html#sideNaviItems",
} as const;

// =====================================================================
// 商品データ（商品名は仮置き：公開前に各ストアで正式名称を目視確認）
// =====================================================================
type Product = { id: string; name: string; note?: string };

const CART_ITA: Product[] = [
  {
    id: "160115",
    name: "TRUSCO 板物搬送台車 イタチ ITA-1",
    note: "均等荷重200kg／すくい板付き／ハンドル着脱可。大型固定キャスター＋補助輪で安定。板材・パネル向け",
  },
];

const CART_TPX: Product[] = [
  {
    id: "160110",
    name: "TRUSCO グランカートサイレント サイドハンドル TPX-810",
    note: "800×535mm／均等荷重300kg／樹脂製省音キャスターの省音仕様",
  },
  {
    id: "160111",
    name: "TRUSCO グランカートサイレント サイドハンドル TPX-910",
    note: "900×605mm／均等荷重400kg／量が多い資材の搬送に",
  },
  {
    id: "160109",
    name: "TRUSCO グランカートサイレント サイドハンドル TPX-710",
    note: "718×468mm／均等荷重200kg／小回り重視の現場に",
  },
  {
    id: "218373",
    name: "TRUSCO グランカートサイレント サイドハンドル 800×535 ストッパー付 TPX-810S",
    note: "800×535mm／ストッパー付きで停車時も安心",
  },
];

const CART_TP: Product[] = [
  {
    id: "160105",
    name: "TRUSCO グランカート サイドハンドル TP-810",
    note: "800×535mm／均等荷重300kg／再生PP・リブ構造・グレーゴム",
  },
  {
    id: "160106",
    name: "TRUSCO グランカート サイドハンドル TP-910",
    note: "900×605mm／均等荷重400kg／長尺・重量資材に",
  },
  {
    id: "159891",
    name: "TRUSCO グランカート 固定ハンドル付 ボックス付 TP702CHBA",
    note: "固定ハンドル＋荷台ボックスのセット。小口資材のまとめ運搬に",
  },
];

const PANELS: Product[] = [
  { id: "059182", name: "アルミ複合板 白 3mm 3×6（910×1820mm）10枚 カラーエース SC001GS", note: "看板製作の定番サイズをまとめ買い" },
  { id: "059181", name: "アルミ複合板 白 3mm 3×6（910×1820mm）バラ売り カラーエース SC001GS", note: "必要枚数だけ。試作・小ロットに" },
  { id: "059188", name: "アルミ複合板 白 3mm 4×8（1220×2440mm）5枚 カラーエース SC001GS", note: "大判パネル。台車運搬の効果が大きいサイズ" },
  { id: "059187", name: "アルミ複合板 白 3mm 4×8（1220×2440mm）バラ売り カラーエース SC001GS", note: "大判をバラで。板物搬送台車との相性◎" },
];

const ALUMI: Product[] = [
  { id: "085758", name: "アルミ丸パイプ アルマイト付 シルバー t1×15φ×4m", note: "4m長尺。サイドハンドル台車で運びやすい" },
  { id: "085381", name: "アルミ角パイプ アルマイト付 シルバー 1.5×30×30×4m", note: "看板枠・什器の定番角材" },
  { id: "085480", name: "アルミ不等辺角パイプ アルマイト付 シルバー 1.2×12×18×4m", note: "コーナー材・見切り材に" },
  { id: "085330", name: "アルミチャンネル アルマイト付 シルバー t2×40×20×4m コ型", note: "コ型チャンネル。長尺搬送の代表例" },
];

const NB_SHOES: Product[] = [
  { id: "155406", name: "ニューバランス 安全靴（タイプA）" },
  { id: "155335", name: "ニューバランス 安全靴（タイプB）" },
  { id: "155361", name: "ニューバランス 安全靴（タイプC）" },
  { id: "155329", name: "ニューバランス 安全靴（タイプD）" },
  { id: "155391", name: "ニューバランス 安全靴（タイプE）" },
  { id: "155376", name: "ニューバランス 安全靴（タイプF）" },
  { id: "155420", name: "ニューバランス 安全靴（タイプG）" },
];

const TRUSCO_SHOES: Product[] = [
  { id: "235217", name: "TRUSCO 安全靴（タイプ1）" },
  { id: "235355", name: "TRUSCO 安全靴（タイプ2）" },
  { id: "234829", name: "TRUSCO 安全靴（タイプ3）" },
  { id: "235356", name: "TRUSCO 安全靴（タイプ4）" },
  { id: "236857", name: "TRUSCO 安全靴（タイプ5）" },
  { id: "236874", name: "TRUSCO 安全靴（タイプ6）" },
  { id: "236881", name: "TRUSCO 安全靴（タイプ7）" },
  { id: "237205", name: "TRUSCO 安全靴（タイプ8）" },
];

// =====================================================================
// 小コンポーネント
// =====================================================================
function ProductCard({ id, name, note }: Product) {
  return (
    <a
      href={productHref(id)}
      target="_blank"
      rel="nofollow sponsored noopener"
      className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white transition hover:border-[#FACC15] hover:shadow-md"
    >
      <div className="aspect-square w-full overflow-hidden bg-gray-50">
        <img
          src={productImage(id)}
          alt={name}
          className="h-full w-full object-contain transition group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <p className="text-sm font-bold leading-snug text-gray-900">{name}</p>
        {note ? <p className="text-xs leading-relaxed text-gray-600">{note}</p> : null}
        <span className="mt-auto inline-flex w-fit items-center rounded bg-[#FACC15] px-3 py-1 text-xs font-bold text-black">
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

function CategoryCTA({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={categoryHref(href)}
      target="_blank"
      rel="nofollow sponsored noopener"
      className="my-4 inline-flex items-center gap-2 rounded-lg border-2 border-black bg-[#FACC15] px-5 py-3 text-sm font-bold text-black transition hover:bg-black hover:text-[#FACC15]"
    >
      {label} →
    </a>
  );
}

function H2Summary({ children }: { children: React.ReactNode }) {
  return (
    <p className="my-3 rounded-md bg-gray-100 px-4 py-3 text-sm leading-relaxed text-gray-700">
      {children}
    </p>
  );
}

// =====================================================================
// メタデータ
// =====================================================================
export const metadata: Metadata = {
  title: "板物の運搬に便利な台車とは？アルミ複合板・長尺材を安全に運ぶ選び方｜作業用品ナビ",
  description:
    "アルミ複合板・看板板材・合板・パネル・アルミパイプなどの板物・長尺材を安全に運ぶ方法を解説。板物搬送台車イタチとグランカート サイドハンドルの使い分け、選び方、傷・転倒・腰痛対策、関連するアルミ建材・安全靴まで紹介します。",
  alternates: { canonical: "https://sagyou-navi.com/articles/board-material-transport-cart" },
};

// =====================================================================
// 構造化データ
// =====================================================================
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "アルミ複合板の運搬にはどんな台車が向いていますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "3×6や4×8のアルミ複合板を運ぶ場合は、板材を立て掛け気味にして運びやすい板物搬送台車（イタチ ITA-1など）が向いています。資材の量が多い場合や、箱物・工具も一緒に運ぶ場合は、サイドハンドルタイプのグランカートも候補になります。",
      },
    },
    {
      "@type": "Question",
      name: "板物搬送台車と普通の台車は何が違いますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "板物搬送台車は、板材や長物板を立て掛け気味に運べるよう設計された台車です。普通の平台車は箱物の運搬に便利ですが、大きな板材ははみ出したり倒れやすかったりする場合があります。",
      },
    },
    {
      "@type": "Question",
      name: "グランカートのサイドハンドルタイプは何に向いていますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "アルミパイプ・角パイプ・チャンネルなどの長尺材、梱包済み資材、工具箱、箱物をまとめて運ぶ用途に向いています。サイレントタイプ（TPXシリーズ）は走行音を抑えやすく、屋内・店舗・住宅地周辺での使用にも便利です。",
      },
    },
    {
      "@type": "Question",
      name: "板材を手で運ぶのは危険ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "サイズや重量によっては、腰痛・転倒・材料破損のリスクがあります。厚生労働省の職場における腰痛予防対策指針でも、重量物の取扱いでは台車や補助機器の使用により人力の負担を軽減することが原則とされています。",
      },
    },
    {
      "@type": "Question",
      name: "台車運搬に安全靴は必要ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "必須かどうかは現場ルールによりますが、板材や長尺材を扱う現場では、材料の落下・台車の車輪・つまずきなどのリスクがあります。台車とあわせて安全靴も見直すことで、足元の安全対策を強化しやすくなります。",
      },
    },
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://sagyou-navi.com/" },
    { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://sagyou-navi.com/articles" },
    {
      "@type": "ListItem",
      position: 3,
      name: "板物の運搬に便利な台車とは？",
      item: "https://sagyou-navi.com/articles/board-material-transport-cart",
    },
  ],
};

// =====================================================================
// ページ本体
// =====================================================================
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
          <Link href="/" className="hover:underline">ホーム</Link>
          <span className="mx-1">/</span>
          <Link href="/articles" className="hover:underline">記事一覧</Link>
          <span className="mx-1">/</span>
          <span className="text-gray-700">板物の運搬に便利な台車とは？</span>
        </nav>

        <div className="mb-3 flex items-center gap-3">
          <span className="rounded bg-[#FACC15] px-2 py-0.5 text-xs font-bold text-black">比較</span>
          <span className="text-xs text-gray-500">読了 約9分</span>
        </div>

        <h1 className="mb-2 text-2xl font-bold leading-tight md:text-3xl">
          板物の運搬に便利な台車とは？アルミ複合板・長尺材を安全に運ぶ選び方
        </h1>
        <p className="mb-6 text-sm text-gray-600">
          看板板材・パネル・合板・アルミ建材を、傷つけず・腰を痛めず・安全に運ぶための台車選び。
        </p>

        <figure className="mb-8 overflow-hidden rounded-xl border border-gray-200">
          <img
            src="/images/articles/board-material-transport-cart-hero.jpg"
            alt="アルミ複合板などの板物を台車で運ぶ作業現場のイメージ"
            className="h-auto w-full object-cover"
          />
        </figure>

        <p className="mb-4 leading-relaxed">
          アルミ複合板、看板用パネル、合板、アクリル板、アルミパイプなどの板物・長尺材は、見た目以上に運搬しにくい資材です。サイズが大きく、持ちにくく、角をぶつけると傷や欠けが出やすいため、手運びだけで対応すると作業効率が落ちるだけでなく、腰痛・転倒・材料破損のリスクも高まります。
        </p>
        <p className="mb-6 leading-relaxed">
          特に、3×6（910×1820mm）や4×8（1220×2440mm）のアルミ複合板、4mのアルミ建材などを扱う現場では、通常の平台車だけでは安定しにくい場合があります。そこで役立つのが、<strong>板物搬送台車</strong>や<strong>サイドハンドルタイプの運搬台車</strong>です。この記事では、板物・長尺材の運搬に適した台車の選び方、板物搬送台車とグランカートの使い分け、あわせて用意したい安全靴や関連資材までわかりやすく解説します。
        </p>

        <div className="mb-6 rounded-md border-l-4 border-blue-500 bg-blue-50 p-4">
          <p className="mb-1 text-sm font-bold text-blue-900">結論</p>
          <p className="text-sm leading-relaxed text-blue-900">
            板物・長尺材は「形状・サイズ・重量・搬送距離」で台車を選ぶのが基本です。板材・パネル中心なら<strong>板物搬送台車イタチ ITA-1</strong>、長尺材や箱物もまとめて運ぶなら<strong>グランカート サイドハンドル（TPX／TPシリーズ）</strong>。さらに足元の安全靴まで整えると、効率と安全を同時に高められます。
          </p>
        </div>

        <div className="mb-8 rounded-md border-l-4 border-amber-500 bg-amber-50 p-4">
          <p className="text-xs leading-relaxed text-amber-900">
            本記事は一般的な情報提供であり、個別の作業安全・労務管理に関する助言ではありません。重量物取扱いの作業基準は、各社の安全衛生規程や産業医・労働基準監督署・社会保険労務士などの指示を優先してください。商品の仕様・価格・在庫・適合・保証は、必ず各商品ページで最新情報をご確認ください。
          </p>
        </div>

        <h2 className="mb-2 mt-10 border-b-2 border-[#FACC15] pb-1 text-xl font-bold">
          板物・長尺材の運搬が難しい理由
        </h2>
        <H2Summary>
          板物・長尺材は「大きい・傷つきやすい・はみ出す・腰に負担」の4つが重なるため、手運びだけだと効率も安全も落ちやすいのが実情です。
        </H2Summary>

        <h3 className="mb-2 mt-6 text-lg font-bold">サイズが大きく、手で持つとバランスを崩しやすい</h3>
        <p className="mb-4 leading-relaxed">
          アルミ複合板の3×6サイズは910×1820mm、4×8サイズは1220×2440mmが一般的です。軽量な板材でも面積が大きいと風を受けやすく、狭い通路や倉庫内で方向転換しにくくなります。
        </p>

        <h3 className="mb-2 mt-6 text-lg font-bold">角や表面を傷つけやすい</h3>
        <p className="mb-4 leading-relaxed">
          看板用の板材は表面品質が重要です。床に擦ったり、壁・棚・機械にぶつけたりすると、角欠け・へこみ・表面キズにつながり、そのまま商品価値の低下につながります。
        </p>

        <h3 className="mb-2 mt-6 text-lg font-bold">長尺材は普通の平台車でははみ出しやすい</h3>
        <p className="mb-4 leading-relaxed">
          アルミパイプ・角パイプ・チャンネルなどの4m材は、平台車に載せるとはみ出しやすく、曲がり角や出入口で扱いにくくなります。
        </p>

        <h3 className="mb-2 mt-6 text-lg font-bold">人力運搬は腰痛・疲労につながりやすい</h3>
        <p className="mb-4 leading-relaxed">
          厚生労働省の「職場における腰痛予防対策指針」では、重量物取扱い作業について、台車や補助機器を使って人力の負担を軽減することが原則とされています。人力のみで取り扱う場合の目安は、満18歳以上の男性で体重のおおむね40%以下、女性は男性が取り扱う重量の60%程度（体重の約24%）とされています。
        </p>

        <h2 className="mb-2 mt-10 border-b-2 border-[#FACC15] pb-1 text-xl font-bold">
          板物運搬に使う台車は大きく2種類ある
        </h2>
        <H2Summary>
          板材・パネル中心なら「板物搬送台車」、長尺材・箱物もまとめて運ぶなら「サイドハンドル台車」。用途で役割が分かれます。
        </H2Summary>

        <h3 className="mb-2 mt-6 text-lg font-bold">1）板物専用に近い「板物搬送台車」</h3>
        <p className="mb-3 leading-relaxed">
          板材・パネル・長物板を立て掛け気味にして運ぶ用途に向いた台車です。代表は<strong>TRUSCO 板物搬送台車 イタチ ITA-1</strong>。ハンドルが取り外し可能で、さまざまな形状の長物板を運べます。固定の大型キャスターに補助輪（自在）も付いており、安定して使用できます。均等荷重は200kg、すくい板付きで板材を載せやすいのが特長です。
        </p>
        <p className="mb-3 text-sm leading-relaxed text-gray-700">
          向いているもの：アルミ複合板／アクリル板／合板／看板用パネル／大判板材／長物板
        </p>
        <figure className="my-6 overflow-hidden rounded-xl border border-gray-200">
          <img
            src="/images/articles/board-transport-cart-panel-use.jpg"
            alt="板物搬送台車で看板用パネルを運ぶイメージ"
            className="h-auto w-full object-cover"
            loading="lazy"
          />
        </figure>
        <ProductGrid items={CART_ITA} />

        <h3 className="mb-2 mt-8 text-lg font-bold">2）長尺材・箱物にも使いやすい「サイドハンドル台車」</h3>
        <p className="mb-3 leading-relaxed">
          サイドハンドルタイプのグランカートは、両サイドにハンドルがあるため長尺物を載せやすい構造です。<strong>グランカート サイドハンドル（TPシリーズ）</strong>と、樹脂製省音キャスターで走行音を抑えた<strong>グランカートサイレント（TPXシリーズ）</strong>があります。長尺材だけでなく、箱物・工具・梱包資材もまとめて運べる汎用性の高さが魅力です。
        </p>
        <p className="mb-3 text-sm leading-relaxed text-gray-700">
          向いているもの：アルミパイプ／角パイプ／チャンネル／長尺の箱物／梱包済み資材／工具・材料のまとめ運搬／店舗・倉庫内搬送
        </p>
        <CategoryCTA href={CATEGORY.grancart} label="グランカート販売一覧へ" />

        <h2 className="mb-2 mt-10 border-b-2 border-[#FACC15] pb-1 text-xl font-bold">
          板物搬送台車とグランカートの使い分け
        </h2>
        <H2Summary>
          「板を立て掛けて運ぶ」のがITA-1、「荷台に載せて横に運ぶ」のがグランカート。対象物と現場で選びましょう。
        </H2Summary>
        <div className="my-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="border border-gray-300 px-3 py-2 text-left">比較項目</th>
                <th className="border border-gray-300 px-3 py-2 text-left">板物搬送台車 イタチ ITA-1</th>
                <th className="border border-gray-300 px-3 py-2 text-left">グランカート サイドハンドル</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-300 px-3 py-2 font-bold">得意な荷物</td><td className="border border-gray-300 px-3 py-2">板材・パネル・長物板</td><td className="border border-gray-300 px-3 py-2">長尺材・箱物・工具・資材</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-300 px-3 py-2 font-bold">使い方</td><td className="border border-gray-300 px-3 py-2">板を立て掛け気味に運ぶ</td><td className="border border-gray-300 px-3 py-2">荷台に載せて横方向に運ぶ</td></tr>
              <tr><td className="border border-gray-300 px-3 py-2 font-bold">向いている現場</td><td className="border border-gray-300 px-3 py-2">看板製作・板材加工・パネル運搬</td><td className="border border-gray-300 px-3 py-2">倉庫・店舗・工場・資材搬送</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-300 px-3 py-2 font-bold">代表的な対象物</td><td className="border border-gray-300 px-3 py-2">アルミ複合板・合板・アクリル板</td><td className="border border-gray-300 px-3 py-2">アルミ形材・梱包資材・工具箱</td></tr>
              <tr><td className="border border-gray-300 px-3 py-2 font-bold">強み</td><td className="border border-gray-300 px-3 py-2">板物を安定して運びやすい</td><td className="border border-gray-300 px-3 py-2">汎用性が高く長尺物も運べる</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-300 px-3 py-2 font-bold">注意点</td><td className="border border-gray-300 px-3 py-2">板物中心の用途に向く</td><td className="border border-gray-300 px-3 py-2">板を立て掛ける専用台車ではない</td></tr>
              <tr><td className="border border-gray-300 px-3 py-2 font-bold">おすすめ導線</td><td className="border border-gray-300 px-3 py-2">ITA-1 商品ページへ</td><td className="border border-gray-300 px-3 py-2">グランカート一覧へ</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="mb-2 mt-10 border-b-2 border-[#FACC15] pb-1 text-xl font-bold">
          運ぶもの別・おすすめの台車選び
        </h2>
        <H2Summary>
          アルミ複合板＝板物搬送台車、長尺アルミ建材＝サイドハンドル、静音重視＝サイレント、量が多い＝900サイズ。運ぶものから逆算します。
        </H2Summary>

        <h3 className="mb-2 mt-6 text-lg font-bold">アルミ複合板を運ぶなら</h3>
        <figure className="my-4 overflow-hidden rounded-xl border border-gray-200">
          <img
            src="/images/articles/aluminum-composite-panel-storage-transport.jpg"
            alt="アルミ複合板を倉庫で保管し台車で運ぶイメージ"
            className="h-auto w-full object-cover"
            loading="lazy"
          />
        </figure>
        <p className="mb-3 leading-relaxed">
          アルミ複合板は軽量でもサイズが大きく、3×6や4×8になると手運びでは扱いにくくなります。看板製作現場では、資材置き場から加工機・出荷場・車両積み込み場所まで移動する場面が多いため、板物搬送台車があると角を傷つけずに効率よく運べます。板を立てて運べる<strong>ITA-1</strong>と組み合わせると、1人作業でも安定しやすくなります。
        </p>
        <ProductGrid items={PANELS} />
        <CategoryCTA href={CATEGORY.alumiPanel} label="アルミ複合板一覧はこちら" />

        <h3 className="mb-2 mt-8 text-lg font-bold">アルミパイプ・角パイプ・チャンネルを運ぶなら</h3>
        <figure className="my-4 overflow-hidden rounded-xl border border-gray-200">
          <img
            src="/images/articles/side-handle-cart-long-material.jpg"
            alt="サイドハンドル台車でアルミパイプや長尺材を運ぶイメージ"
            className="h-auto w-full object-cover"
            loading="lazy"
          />
        </figure>
        <p className="mb-3 leading-relaxed">
          4mのアルミ建材は、手で抱えると長さが邪魔になり、曲がり角や出入口で扱いにくくなります。両サイドにハンドルがあるグランカート サイドハンドルなら、長尺材を載せやすく、資材のまとめ運搬にも使いやすいです。複数本を一度に運べるため、往復回数とスタッフの疲労を減らせます。
        </p>
        <ProductGrid items={ALUMI} />
        <CategoryCTA href={CATEGORY.alumiMaterial} label="アルミ建材一覧はこちら" />

        <h3 className="mb-2 mt-8 text-lg font-bold">倉庫・店舗で静かに運びたいなら</h3>
        <p className="mb-3 leading-relaxed">
          早朝・夜間、住宅地、店舗、事務所、地下スペースでは台車の走行音が気になることがあります。グランカートサイレント（TPXシリーズ）は樹脂製省音キャスターで走行音を抑えた仕様で、音が響きやすい場所での集配に便利です。なお騒音値は荷台サイズにより異なるため、具体値は各商品ページでご確認ください。
        </p>

        <h3 className="mb-2 mt-8 text-lg font-bold">重量や量が多い資材をまとめて運ぶなら</h3>
        <p className="mb-3 leading-relaxed">
          資材の量が多い場合は、耐荷重と荷台サイズを確認します。800×535mmサイズ（TPX-810／TP-810）は均等荷重300kg、900×605mmサイズ（TPX-910／TP-910）は均等荷重400kgが目安です。量が多い現場では900サイズが扱いやすくなります。
        </p>

        <h2 className="mb-2 mt-10 border-b-2 border-[#FACC15] pb-1 text-xl font-bold">
          商品別のおすすめ訴求
        </h2>
        <H2Summary>
          「板物中心」ならITA-1、「静かに・長尺も」ならTPXシリーズ、「コストを抑えて長尺対応」ならTPシリーズ、が基本の選び方です。
        </H2Summary>

        <h3 className="mb-2 mt-6 text-lg font-bold">板物搬送台車 イタチ ITA-1</h3>
        <p className="mb-2 text-sm leading-relaxed text-gray-700">
          こんな現場におすすめ：アルミ複合板をよく扱う／看板用パネルを運ぶ／3×6・4×8板を手で運んでいる／板材の角や表面を傷つけたくない／加工場・倉庫・出荷場間の移動が多い
        </p>
        <p className="mb-3 text-sm leading-relaxed text-gray-700">
          訴求ポイント：板物・長物板の搬送に特化／ハンドル取り外し可能／大型キャスター＋補助輪で安定／均等荷重200kg／看板製作現場との相性が高い
        </p>
        <a
          href={productHref("160115")}
          target="_blank"
          rel="nofollow sponsored noopener"
          className="my-2 inline-flex items-center gap-2 rounded-lg border-2 border-black bg-[#FACC15] px-5 py-3 text-sm font-bold text-black transition hover:bg-black hover:text-[#FACC15]"
        >
          板物搬送台車 イタチ ITA-1を見る →
        </a>

        <h3 className="mb-2 mt-8 text-lg font-bold">グランカートサイレント サイドハンドル TPXシリーズ</h3>
        <p className="mb-2 text-sm leading-relaxed text-gray-700">
          こんな現場におすすめ：静かに運びたい／店舗・事務所・住宅地周辺で使う／地下や屋内で音が響く／長尺材も箱物も運びたい
        </p>
        <p className="mb-3 text-sm leading-relaxed text-gray-700">
          訴求ポイント：樹脂製省音キャスターで走行音を抑える/サイドハンドルで長尺商品の運搬に便利／TPX-810は800×535mm・均等荷重300kg／TPX-910は900×605mm・均等荷重400kg／ストッパー付（TPX-810S）も選べる
        </p>
        <ProductGrid items={CART_TPX} />
        <CategoryCTA href={CATEGORY.grancart} label="グランカート販売一覧へ" />

        <h3 className="mb-2 mt-8 text-lg font-bold">グランカート サイドハンドル TPシリーズ</h3>
        <p className="mb-2 text-sm leading-relaxed text-gray-700">
          こんな現場におすすめ：コストを抑えながら長尺材対応の台車を導入したい／アルミ建材や梱包資材をまとめて運びたい／倉庫・工場・店舗バックヤードで使いたい
        </p>
        <p className="mb-3 text-sm leading-relaxed text-gray-700">
          訴求ポイント：両サイドのハンドルで長尺物を運びやすい／堅牢なリブ構造／再生ポリプロピレン樹脂を使用／タイヤ痕の付きにくいグレーゴムを採用
        </p>
        <ProductGrid items={CART_TP} />
        <CategoryCTA href={CATEGORY.grancart} label="グランカート販売一覧へ" />

        <h2 className="mb-2 mt-10 border-b-2 border-[#FACC15] pb-1 text-xl font-bold">
          板物・長尺材を安全に運ぶための注意点
        </h2>
        <H2Summary>
          「動線確認・重心・角の保護・無理な1人作業を避ける・足元の安全」。台車を使う前提でも、この5点で事故と破損を防げます。
        </H2Summary>
        <ol className="mb-4 list-decimal space-y-3 pl-5 leading-relaxed">
          <li><strong>材料サイズと通路幅を確認する</strong>：4×8板や4m材は、通路幅・出入口の高さ・段差・床の凹凸・曲がり角・積み込み場所までの距離を事前にチェックします。</li>
          <li><strong>重心を低く、偏らせない</strong>：板材・長尺材は重心が偏ると倒れやすくなります。片側に重さが集中しないように積みます。</li>
          <li><strong>角を保護する</strong>：アルミ複合板や看板パネルは角の傷が商品価値に直結します。当て材・養生材・毛布・段ボールで保護します。</li>
          <li><strong>無理な1人運搬を避ける</strong>：重量物は台車・補助機器で負担軽減が原則。重量やサイズが大きい場合は複数人作業と動線確保を行います。</li>
          <li><strong>足元の安全も確保する</strong>：台車使用中でも、足を挟む・つまずく・滑る・材料落下のリスクは残ります。安全靴の着用もセットで検討します。</li>
        </ol>

        <h2 className="mb-2 mt-10 border-b-2 border-[#FACC15] pb-1 text-xl font-bold">
          板物搬送とあわせて見直したい安全靴
        </h2>
        <H2Summary>
          台車で運んでも、落下・巻き込み・つまずきの足元リスクは残ります。安全靴まで整えると現場の安全対策として説得力が高まります。
        </H2Summary>

        <figure className="my-4 overflow-hidden rounded-xl border border-gray-200">
          <img
            src="/images/articles/safety-shoes-cart-transport.jpg"
            alt="台車運搬作業で安全靴を着用する作業者の足元イメージ"
            className="h-auto w-full object-cover"
            loading="lazy"
          />
        </figure>

        <h3 className="mb-2 mt-6 text-lg font-bold">ニューバランス安全靴</h3>
        <p className="mb-3 text-sm leading-relaxed text-gray-700">
          歩行が多い現場や、履き心地・デザイン性を重視したい現場に。倉庫・現場・配送作業の足元対策に使いやすいラインです。
        </p>
        <ProductGrid items={NB_SHOES} />
        <CategoryCTA href={CATEGORY.nbShoes} label="ニューバランス安全靴一覧へ" />

        <h3 className="mb-2 mt-8 text-lg font-bold">安価で高品質なTRUSCO安全靴</h3>
        <p className="mb-3 text-sm leading-relaxed text-gray-700">
          法人でまとめて導入しやすく、現場・倉庫・工場向けに提案しやすい価格帯。台車運搬作業の足元保護に役立ちます。
        </p>
        <ProductGrid items={TRUSCO_SHOES} />
        <CategoryCTA href={CATEGORY.safetyShoes} label="安全靴一覧へ" />

        <h2 className="mb-2 mt-10 border-b-2 border-[#FACC15] pb-1 text-xl font-bold">
          この記事内の商品導線設計
        </h2>
        <H2Summary>
          台車→板材→建材→安全靴→作業用品全般、の順で回遊させる設計です。
        </H2Summary>
        <div className="my-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="border border-gray-300 px-3 py-2 text-left">記事内の位置</th>
                <th className="border border-gray-300 px-3 py-2 text-left">目的</th>
                <th className="border border-gray-300 px-3 py-2 text-left">導線</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-300 px-3 py-2">台車の2種類</td><td className="border border-gray-300 px-3 py-2">まず商品を見たい人向け</td><td className="border border-gray-300 px-3 py-2">ITA-1／グランカート一覧</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-300 px-3 py-2">アルミ複合板の説明後</td><td className="border border-gray-300 px-3 py-2">板材の需要喚起</td><td className="border border-gray-300 px-3 py-2">アルミ複合板一覧</td></tr>
              <tr><td className="border border-gray-300 px-3 py-2">長尺材の説明後</td><td className="border border-gray-300 px-3 py-2">アルミ建材の需要喚起</td><td className="border border-gray-300 px-3 py-2">アルミ建材一覧</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-300 px-3 py-2">商品別訴求</td><td className="border border-gray-300 px-3 py-2">台車の購買導線</td><td className="border border-gray-300 px-3 py-2">ITA-1／TPX・TP／グランカート一覧</td></tr>
              <tr><td className="border border-gray-300 px-3 py-2">安全対策章</td><td className="border border-gray-300 px-3 py-2">関連商材導線</td><td className="border border-gray-300 px-3 py-2">ニューバランス安全靴／安全靴一覧</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-300 px-3 py-2">記事末</td><td className="border border-gray-300 px-3 py-2">総合導線</td><td className="border border-gray-300 px-3 py-2">トラスコ中山一覧</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="mb-2 mt-10 border-b-2 border-[#FACC15] pb-1 text-xl font-bold">まとめ</h2>
        <p className="mb-4 leading-relaxed">
          板物・長尺材の運搬では、普通の平台車だけでなく、板物搬送台車やサイドハンドル台車を「材料の形状・サイズ・重量・搬送距離」に合わせて選ぶことが重要です。板材・パネル中心ならITA-1、長尺材や箱物もまとめて運ぶならグランカート（静音重視はTPX、コスト重視はTP）。さらにアルミ複合板・アルミ建材・安全靴もあわせて見直すことで、作業効率と安全性を同時に高めやすくなります。
        </p>

        <div className="my-10 rounded-xl border-2 border-black bg-[#FACC15] p-6 text-black">
          <p className="mb-2 text-lg font-bold">
            板物・長尺材の運搬から安全靴まで、現場に必要な作業用品をまとめてそろえませんか？
          </p>
          <p className="mb-4 text-sm leading-relaxed">
            アルミ複合板や看板板材、アルミパイプなどの長尺材を安全に運ぶには、手運びだけに頼らず、板物搬送台車やサイドハンドル台車を活用することが大切です。さらに、台車運搬時の足元保護として安全靴を整えることで、倉庫・工場・現場での作業効率と安全性を高めやすくなります。サインシティYahoo!店では、TRUSCOをはじめとした台車・運搬用品・安全靴・現場用品をまとめて確認できます。
          </p>
          <a
            href={categoryHref(CATEGORY.trusco)}
            target="_blank"
            rel="nofollow sponsored noopener"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-black bg-black px-6 py-3 text-base font-bold text-[#FACC15] transition hover:bg-white hover:text-black"
          >
            現場や倉庫などで必須な作業用品が全て揃います！トラスコ中山一覧へ →
          </a>
        </div>

        <h2 className="mb-2 mt-10 border-b-2 border-[#FACC15] pb-1 text-xl font-bold">よくある質問（FAQ）</h2>
        <div className="my-4 space-y-3">
          <details className="rounded-md border border-gray-200 p-4">
            <summary className="cursor-pointer font-bold">アルミ複合板の運搬にはどんな台車が向いていますか？</summary>
            <p className="mt-2 text-sm leading-relaxed text-gray-700">3×6や4×8のアルミ複合板を運ぶ場合は、板材を立て掛け気味にして運びやすい板物搬送台車（イタチ ITA-1など）が向いています。資材の量が多い場合や、箱物・工具も一緒に運ぶ場合は、サイドハンドルタイプのグランカートも候補になります。</p>
          </details>
          <details className="rounded-md border border-gray-200 p-4">
            <summary className="cursor-pointer font-bold">板物搬送台車と普通の台車は何が違いますか？</summary>
            <p className="mt-2 text-sm leading-relaxed text-gray-700">板物搬送台車は、板材や長物板を立て掛け気味に運べるよう設計された台車です。普通の平台車は箱物の運搬に便利ですが、大きな板材ははみ出したり倒れやすかったりする場合があります。</p>
          </details>
          <details className="rounded-md border border-gray-200 p-4">
            <summary className="cursor-pointer font-bold">グランカートのサイドハンドルタイプは何に向いていますか？</summary>
            <p className="mt-2 text-sm leading-relaxed text-gray-700">アルミパイプ・角パイプ・チャンネルなどの長尺材、梱包済み資材、工具箱、箱物をまとめて運ぶ用途に向いています。サイレントタイプ（TPXシリーズ）は走行音を抑えやすく、屋内・店舗・住宅地周辺での使用にも便利です。</p>
          </details>
          <details className="rounded-md border border-gray-200 p-4">
            <summary className="cursor-pointer font-bold">板材を手で運ぶのは危険ですか？</summary>
            <p className="mt-2 text-sm leading-relaxed text-gray-700">サイズや重量によっては、腰痛・転倒・材料破損のリスクがあります。厚生労働省の職場における腰痛予防対策指針でも、重量物の取扱いでは台車や補助機器の使用により人力の負担を軽減することが原則とされています。</p>
          </details>
          <details className="rounded-md border border-gray-200 p-4">
            <summary className="cursor-pointer font-bold">台車運搬に安全靴は必要ですか？</summary>
            <p className="mt-2 text-sm leading-relaxed text-gray-700">必須かどうかは現場ルールによりますが、板材や長尺材を扱う現場では、材料の落下・台車の車輪・つまずきなどのリスクがあります。台車とあわせて安全靴も見直すことで、足元の安全対策を強化しやすくなります。</p>
          </details>
        </div>

        <h2 className="mb-2 mt-10 border-b-2 border-[#FACC15] pb-1 text-xl font-bold">関連記事</h2>
        <div className="my-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Link href="/articles/kartio-big-offroad" className="rounded-md border border-gray-200 p-3 text-sm font-bold hover:border-[#FACC15]">カルティオビッグ・オフロードとは？悪路・段差に強い大型樹脂台車の使いどころ</Link>
          <Link href="/articles/carutio-cart-guide" className="rounded-md border border-gray-200 p-3 text-sm font-bold hover:border-[#FACC15]">軽量樹脂台車カルティオの選び方｜サイズ・耐荷重・静音・ストッパーの違い</Link>
          <Link href="/articles/warehouse-safety-shoes" className="rounded-md border border-gray-200 p-3 text-sm font-bold hover:border-[#FACC15]">倉庫作業に向く安全靴の選び方｜疲れにくい・滑りにくい・台車作業で安心な靴を解説</Link>
          <Link href="/articles/aluminum-composite-panel-cut" className="rounded-md border border-gray-200 p-3 text-sm font-bold hover:border-[#FACC15]">アルミ複合板のカット販売とは？指定寸法・角R・穴あけ加工を依頼する前のチェックポイント</Link>
        </div>

        <div className="mt-10">
          <Link href="/articles" className="text-sm text-gray-600 hover:underline">← 記事一覧に戻る</Link>
        </div>

        <p className="mt-8 border-t border-gray-200 pt-4 text-xs leading-relaxed text-gray-400">
          本記事は一般的な情報提供を目的としています。商品の仕様・価格・在庫・適合・保証は各商品ページの最新情報をご確認ください。
          運営：株式会社トレード（<a href="https://trade-sign.jp/" target="_blank" rel="noopener" className="underline">https://trade-sign.jp/</a>）
        </p>
      </main>

      <SiteFooter />
    </>
  );
}
