import type { Metadata } from 'next';
import Link from 'next/link';

const SLUG = 'warehouse-safety-shoes';

export const metadata: Metadata = {
  title:
    '倉庫作業に向く安全靴の選び方｜疲れにくい・滑りにくい・台車作業で安心な靴を解説',
  description:
    '倉庫作業に安全靴は必要？ピッキング・検品・梱包・入出荷・台車作業など作業内容別に、安全靴・プロテクティブスニーカーの選び方を解説。疲れにくさ・滑りにくさ・先芯・軽量性・法人導入のポイントと、ニューバランス安全靴・TRUSCO製品も紹介します。',
  alternates: {
    canonical: `https://sagyou-navi.com/articles/${SLUG}`,
  },
  openGraph: {
    title:
      '倉庫作業に向く安全靴の選び方｜疲れにくい・滑りにくい・台車作業で安心な靴を解説',
    description:
      'ピッキング・検品・梱包・入出荷・台車作業など作業内容別に、安全靴・プロテクティブスニーカーの選び方を解説します。',
    type: 'article',
    images: ['/記事画像/warehouse-safety-shoes-hero.jpg'],
  },
};

// ── UTMヘルパー：baseに ? があれば & で、なければ ? で連結。baseは絶対に再エンコードしない。
const buildUrl = (base: string, utmContent: string) => {
  const sep = base.includes('?') ? '&' : '?';
  return `${base}${sep}utm_source=sagyou_navi&utm_medium=article&utm_campaign=warehouse_safety_shoes&utm_content=${utmContent}`;
};

// ── store別 商品URL生成（取り違え防止。今回は yahoo と gc の2種）
const itemUrl = (store: 'yahoo' | 'gc', id: string) =>
  store === 'yahoo'
    ? `https://store.shopping.yahoo.co.jp/signcity-yshop/${id}.html`
    : `https://www.gc-select.com/products/${id}`;

// ── 一覧URL（日本語クエリはエンコード済み・再エンコード禁止／sc_i等は除去）
const LIST = {
  // ニューバランス安全靴一覧（Yahoo!・カテゴリページ）
  newbalance: 'https://store.shopping.yahoo.co.jp/signcity-yshop/b0c2c1b4b7.html?b=91&view=grid',
  // 安全靴一覧（Yahoo!・p=安全靴）
  safetyShoes: 'https://store.shopping.yahoo.co.jp/signcity-yshop/search.html?p=%E5%AE%89%E5%85%A8%E9%9D%B4&b=151&view=grid',
  // 運搬台車一覧（Yahoo!・カテゴリページ／sc_i除去）
  cart: 'https://store.shopping.yahoo.co.jp/signcity-yshop/b1bfc8c2c2.html',
  // プロアクティブ系（gc・日本語クエリ）
  proactiveBlack: 'https://www.gc-select.com/pages/search-results-page?q=%E3%83%97%E3%83%AD%E3%82%A2%E3%82%AF%E3%83%86%E3%82%A3%E3%83%96',
  protectiveWhite: 'https://www.gc-select.com/pages/search-results-page?q=%E3%83%97%E3%83%AD%E3%83%86%E3%82%AF%E3%83%86%E3%82%A3%E3%83%96%E3%82%B9%E3%83%8B%E3%83%BC%E3%82%AB%E3%83%BC',
};

type Product = { id: string; store: 'yahoo' | 'gc'; name: string; note: string };

// ニューバランス安全靴（Yahoo!）
const newbalance: Product[] = [
  { id: '155406', store: 'yahoo', name: 'ニューバランス 安全靴', note: 'ピッキング・長時間歩行向け' },
  { id: '155335', store: 'yahoo', name: 'ニューバランス 安全靴', note: '現場支給・まとめ買い候補' },
  { id: '155361', store: 'yahoo', name: 'ニューバランス 安全靴', note: '男女・サイズ展開を確認' },
  { id: '155329', store: 'yahoo', name: 'ニューバランス 安全靴', note: '検品・軽作業中心の現場に' },
  { id: '155391', store: 'yahoo', name: 'ニューバランス 安全靴', note: '履き心地重視・定着しやすい' },
  { id: '155376', store: 'yahoo', name: 'ニューバランス 安全靴', note: 'クッション性を重視したい現場に' },
  { id: '155420', store: 'yahoo', name: 'ニューバランス 安全靴', note: 'スニーカー感覚で履けるタイプ' },
];

// TRUSCO系安全靴（Yahoo!）
const truscoShoes: Product[] = [
  { id: '235217', store: 'yahoo', name: 'TRUSCO 安全靴', note: '法人まとめ買い・実用タイプ' },
  { id: '235355', store: 'yahoo', name: 'TRUSCO 安全靴', note: '入出荷・台車作業に' },
  { id: '234829', store: 'yahoo', name: 'TRUSCO 安全靴', note: '価格と保護性能のバランス' },
  { id: '235356', store: 'yahoo', name: 'TRUSCO 安全靴', note: '予備用・新人用にも' },
  { id: '236857', store: 'yahoo', name: 'TRUSCO 安全靴', note: '倉庫内作業全般に' },
  { id: '236874', store: 'yahoo', name: 'TRUSCO 安全靴', note: '現場兼用で使いやすい' },
  { id: '236881', store: 'yahoo', name: 'TRUSCO 安全靴', note: '短期スタッフ用にも検討しやすい' },
  { id: '237205', store: 'yahoo', name: 'TRUSCO 安全靴', note: 'コストを抑えたい現場に' },
];

// プロアクティブスニーカー（gc）
const proactive: Product[] = [
  { id: '1123038220', store: 'gc', name: 'プロアクティブスニーカー SL12RE', note: '軽作業・普通作業向けスニーカータイプ' },
  { id: '1123061240', store: 'gc', name: 'プロアクティブスニーカー NS911 黒/赤', note: '現場に合わせやすいカラー' },
  { id: '1123063240', store: 'gc', name: 'プロアクティブスニーカー NS922 黒', note: '黒系で汚れが目立ちにくい' },
  { id: '1123062240', store: 'gc', name: 'プロアクティブスニーカー NS918 黒/赤', note: 'スニーカー感覚で履ける' },
];

// 運搬台車（Yahoo!）
const carts: Product[] = [
  { id: '167468', store: 'yahoo', name: 'TRUSCO カルティオ 新型 ブラック MPK-780-BK', note: '倉庫内の小回り運搬' },
  { id: '190475', store: 'yahoo', name: 'TRUSCO カルティオ 新型 ブラック ストッパー付 MPK780BKSS', note: '停止時の安定性を重視' },
  { id: '216713', store: 'yahoo', name: 'TRUSCO 樹脂台車 カルティオビッグ 折畳 900×600 ストッパー付', note: '大きめ荷物・折りたたみ収納' },
  { id: '159750', store: 'yahoo', name: 'TRUSCO カルティオビッグ 固定ハンドル MPK-900-B', note: '頻繁な運搬・大きめ荷物' },
];

function ProductCard({ p }: { p: Product }) {
  return (
    <a
      href={buildUrl(itemUrl(p.store, p.id), `product_${p.id}`)}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="group flex flex-col rounded-xl border border-gray-200 bg-white p-4 transition hover:shadow-md"
    >
      <div className="mb-3 aspect-square overflow-hidden rounded-lg bg-gray-50">
        <img
          src={`/products/${p.id}.jpg`}
          alt={p.name}
          loading="lazy"
          className="h-full w-full object-contain"
        />
      </div>
      <div className="text-sm font-semibold leading-snug text-gray-900 group-hover:text-blue-700">
        {p.name}
      </div>
      <div className="mt-1 text-xs text-gray-500">{p.note}</div>
      <span className="mt-3 inline-block text-sm font-medium text-blue-700">商品ページを見る →</span>
    </a>
  );
}

function ProductGrid({ items }: { items: Product[] }) {
  return (
    <div className="my-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((p) => (
        <ProductCard key={p.id} p={p} />
      ))}
    </div>
  );
}

function ListCta({ href, label, content }: { href: string; label: string; content: string }) {
  return (
    <a
      href={buildUrl(href, content)}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
    >
      {label} →
    </a>
  );
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: '倉庫作業に安全靴は必要ですか？', acceptedAnswer: { '@type': 'Answer', text: '荷物の落下、台車との接触、パレット周辺作業、床面での滑りなどがある場合は、安全靴やプロテクティブスニーカーの着用を検討する価値があります。現場ルールや作業内容に合わせて選びましょう。' } },
    { '@type': 'Question', name: '倉庫作業では安全靴とプロスニーカーのどちらがよいですか？', acceptedAnswer: { '@type': 'Answer', text: 'ピッキング・検品・梱包などの普通作業〜軽作業では、履きやすいプロテクティブスニーカーが向く場合があります。重量物や危険作業が多い場合は、現場ルールと保護性能を優先してください。' } },
    { '@type': 'Question', name: '倉庫作業で疲れにくい安全靴の条件は？', acceptedAnswer: { '@type': 'Answer', text: '軽量性、クッション性、屈曲性、フィット感が重要です。長距離を歩くピッキング作業では、重すぎる靴よりもスニーカータイプが選びやすい場合があります。厚生労働省の資料では短靴は900g／足以下が目安とされています。' } },
    { '@type': 'Question', name: '滑りにくい安全靴を選べば転倒は防げますか？', acceptedAnswer: { '@type': 'Answer', text: '滑りにくさは重要ですが、それだけで十分ではありません。厚生労働省も、滑りにくさがかえってつまずきの原因になる場合があるため、作業現場に合う靴をメーカーや販売店と相談することをすすめています。' } },
    { '@type': 'Question', name: '台車作業ではどんな安全靴が向いていますか？', acceptedAnswer: { '@type': 'Answer', text: '台車やカゴ車の車輪、荷物の落下から足先を守るため、先芯入りでつま先保護のあるタイプが向いています。あわせて、つまずきにくい靴底形状や屈曲性も確認しましょう。' } },
    { '@type': 'Question', name: 'ニューバランス安全靴は倉庫作業に向いていますか？', acceptedAnswer: { '@type': 'Answer', text: '長時間歩くピッキングや検品など、履き心地や歩きやすさを重視する倉庫作業では候補になります。法人で導入する場合は、作業内容、サイズ展開、在庫、現場ルールを確認しましょう。' } },
    { '@type': 'Question', name: 'TRUSCO系安全靴はどんな倉庫に向いていますか？', acceptedAnswer: { '@type': 'Answer', text: '価格と実用性のバランスを重視する倉庫、複数人へまとめて支給したい現場、予備用・新人用を用意したい法人に向いています。' } },
    { '@type': 'Question', name: '安全靴だけで倉庫作業の負担は減らせますか？', acceptedAnswer: { '@type': 'Answer', text: '安全靴だけでは不十分です。重量物の手運びが多い現場では、運搬台車や補助機器を使って作業者の負担を減らすことも大切です。' } },
  ],
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://sagyou-navi.com/' },
    { '@type': 'ListItem', position: 2, name: '保護具・安全衛生', item: 'https://sagyou-navi.com/' },
    { '@type': 'ListItem', position: 3, name: '倉庫作業の安全靴の選び方' },
  ],
};

export default function Page() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-8 text-gray-800">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* パンくず */}
      <nav className="mb-4 text-xs text-gray-500" aria-label="パンくず">
        <Link href="/" className="hover:underline">ホーム</Link>
        <span className="mx-1">/</span>
        <span>保護具・安全衛生</span>
        <span className="mx-1">/</span>
        <span className="text-gray-700">倉庫作業の安全靴の選び方</span>
      </nav>

      {/* カテゴリバッジ＋読了時間 */}
      <div className="mb-3 flex items-center gap-3">
        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">保護具・安全衛生</span>
        <span className="text-xs text-gray-500">読了時間：約13分</span>
      </div>

      {/* H1 */}
      <h1 className="mb-4 text-2xl font-bold leading-tight text-gray-900 sm:text-3xl">
        倉庫作業に向く安全靴の選び方｜疲れにくい・滑りにくい・台車作業で安心な靴を解説
      </h1>

      {/* ヒーロー画像 */}
      <figure className="mb-6">
        <img
          src="/記事画像/warehouse-safety-shoes-hero.jpg"
          alt="倉庫作業で安全靴を履いてピッキングを行う作業員"
          className="w-full rounded-xl object-cover"
        />
      </figure>

      {/* 導入 */}
      <p className="mb-4 leading-relaxed">
        倉庫作業では、ピッキングや検品、梱包、入出荷、台車での運搬など、1日の中で歩く・立つ・運ぶ作業が多く発生します。そのため安全靴を選ぶときは、単に「先芯が入っているか」だけでなく、<strong>疲れにくさ、滑りにくさ、つまずきにくさ、台車や荷物から足先を守れるか</strong>まで確認することが大切です。
      </p>
      <p className="mb-4 leading-relaxed">
        特に物流倉庫やEC倉庫では、スニーカーのように履きやすいプロテクティブスニーカーを採用するケースも増えています。一方で、重い荷物やパレット、台車を扱う現場では、つま先保護や靴底の滑りにくさも軽視できません。
      </p>
      <p className="mb-6 leading-relaxed">
        この記事では、倉庫作業に向く安全靴の選び方を、ピッキング・検品・梱包・入出荷・台車作業といった実務目線で解説します。ニューバランス安全靴、TRUSCO系の実用品、プロアクティブスニーカー、運搬台車との組み合わせまで、法人担当者が選びやすいように整理します。
      </p>

      {/* ★即答ボックス（AEO） */}
      <div className="mb-6 rounded-xl border border-amber-200 bg-amber-50 p-5">
        <p className="mb-2 text-sm font-bold text-amber-800">★ この記事の即答</p>
        <p className="text-sm leading-relaxed text-amber-900">
          <strong>倉庫作業の安全靴は「軽さ・滑りにくさ・先芯・疲れにくさ」を作業内容別に選ぶ。</strong>
          ピッキング中心なら軽量・クッション性、検品梱包なら立ち作業の疲れにくさ、入出荷なら先芯・耐久、台車作業ならつま先保護・つまずきにくさを重視します。
          重すぎる靴は擦り足を招きやすく（短靴は900g／足以下が目安）、<strong>滑りにくさがかえってつまずきの原因になる場合もある</strong>ため、現場の床に合う靴を選ぶことが大切です。法人導入では履き心地重視のニューバランスと実用的なTRUSCO系を作業別に使い分け、運搬台車も整えると足腰の負担を下げられます。
        </p>
      </div>

      {/* 結論ボックス（青・border-l-4） */}
      <div className="mb-6 border-l-4 border-blue-600 bg-blue-50 p-5">
        <p className="mb-2 font-bold text-blue-900">まず結論：倉庫作業の安全靴は「軽さ・滑りにくさ・先芯・疲れにくさ」で選ぶ</p>
        <ul className="list-disc space-y-1 pl-5 text-sm text-blue-900">
          <li>重すぎる安全靴より、歩きやすく疲れにくいスニーカータイプが向く場面が多い</li>
          <li>台車・荷物・パレットを扱う現場では、つま先保護の有無を必ず確認</li>
          <li>滑り・つまずきリスクに備え、靴底の滑りにくさ・屈曲性・重量も重要</li>
          <li>ピッキングは軽量性、入出荷はつま先保護、検品梱包は立ち作業の疲れにくさ</li>
          <li>法人導入はニューバランス（履き心地）とTRUSCO系（実用・まとめ買い）を作業別に使い分け</li>
          <li>運搬台車も整え、重い荷物の手運びを減らして足腰の負担を軽減</li>
        </ul>
      </div>

      {/* 注意ボックス（amber） */}
      <div className="mb-8 border-l-4 border-amber-500 bg-amber-50 p-5">
        <p className="mb-2 font-bold text-amber-800">安全・選定に関する注意</p>
        <p className="text-sm leading-relaxed text-amber-900">
          本記事は一般的な選び方の情報提供であり、特定環境での安全を保証するものではありません。安全靴は事故やケガを完全に防ぐものではなく、現場ルール・作業内容・床面の状態に合った選定が前提です。厚生労働省も、<strong>滑りにくさがかえってつまずきの原因になる場合がある</strong>など作業現場によって有効な靴は異なるため、メーカーや販売店とよく相談することをすすめています。また、<strong>靴底の凹凸が摩滅すると耐滑性が急激に低下する</strong>ため、定期的な点検・交換も重要です。サイズ・規格・適合は商品ページやメーカー仕様、現場の安全基準でご確認ください。
        </p>
      </div>

      {/* H2-1 必要？リスク */}
      <h2 className="mt-10 mb-3 text-xl font-bold text-gray-900">倉庫作業に安全靴は必要？まず考えるべきリスク</h2>
      <p className="mb-4 rounded-md bg-gray-100 p-3 text-sm text-gray-600">
        倉庫には足先・歩行・立ち作業・床面のリスクが揃います。だからこそ「重い安全靴」より「作業に合う安全靴」が重要です。
      </p>
      <ul className="mb-4 list-disc space-y-1 pl-5 text-sm">
        <li><strong>荷物の落下・台車接触</strong>：足先をぶつけ・踏まれるリスク → 先芯/つま先保護</li>
        <li><strong>ピッキング・入出荷</strong>：長距離歩行 → 軽量性・クッション性</li>
        <li><strong>検品・梱包</strong>：長時間立ち作業 → 疲れにくさ・屈曲性</li>
        <li><strong>床面での滑り・つまずき</strong>：濡れ・段差・粉じん → 耐滑性・つま先の高さ</li>
      </ul>
      <p className="mb-4 text-sm leading-relaxed">疲労が蓄積すると足が上がらず擦り足になり、わずかな段差でもつまずきやすくなるとされています。だからこそ「軽さ・屈曲性・つま先の高さ」が倉庫作業では効いてきます。</p>

      {/* H2-2 5ポイント */}
      <h2 className="mt-10 mb-3 text-xl font-bold text-gray-900">倉庫作業向け安全靴で見るべき5つのポイント</h2>
      <p className="mb-4 rounded-md bg-gray-100 p-3 text-sm text-gray-600">
        厚生労働省が整理する「転倒に有効な安全靴の5要素」に沿って確認します。
      </p>

      <figure className="mb-4">
        <img
          src="/記事画像/warehouse-safety-shoes-selection.jpg"
          alt="倉庫作業向け安全靴の先芯や靴底を確認する担当者"
          className="w-full rounded-xl object-cover"
        />
      </figure>

      <ol className="mb-4 list-decimal space-y-2 pl-5 text-sm">
        <li><strong>先芯</strong>：荷物や台車から足先を守る（必要な作業区分か確認）</li>
        <li><strong>軽量性</strong>：長時間歩く作業の負担を減らす（短靴は900g／足以下が目安）</li>
        <li><strong>屈曲性</strong>：硬すぎると擦り足・つまずきの原因に。足指の付け根で曲がる靴底が目安</li>
        <li><strong>靴底の滑りにくさ</strong>：床材・水濡れ・粉じんに応じて。耐滑JIS安全靴には「F」記号</li>
        <li><strong>クッション性・フィット感</strong>：疲れにくさ・定着率を左右する</li>
      </ol>
      <p className="mb-4 text-sm leading-relaxed">
        厚生労働省は、転倒防止に有効な安全靴の性能として滑りにくさ・屈曲性・重量・重量バランス・つま先部の高さを挙げています。一方で、滑りにくい床に滑りにくい靴底だと摩擦が強すぎてつまずく場合があるなど、有効な靴は現場により異なるとされています。
      </p>

      {/* H2-3 安全靴とプロスニーカー */}
      <h2 className="mt-10 mb-3 text-xl font-bold text-gray-900">安全靴とプロテクティブスニーカーはどう違う？</h2>
      <p className="mb-4 rounded-md bg-gray-100 p-3 text-sm text-gray-600">
        規格の目安が違います。安全靴はJIS、プロスニーカーはJSAA。倉庫の普通作業〜軽作業ではプロスニーカーが向く場面も多いです。
      </p>
      <ul className="mb-4 list-disc space-y-1 pl-5 text-sm">
        <li><strong>安全靴＝JIS T 8101</strong>が目安、<strong>プロスニーカー＝JSAA</strong>が目安</li>
        <li>JSAAプロスニーカーは、つま先保護はS種・L種と同等の一方、<strong>普通作業〜軽作業向け</strong>として整理される</li>
        <li>重量物・危険作業では現場ルールと保護性能を優先</li>
        <li>法人導入では作業区分ごとに使い分ける</li>
      </ul>

      {/* H2-4 作業別 */}
      <h2 className="mt-10 mb-3 text-xl font-bold text-gray-900">作業別に見る倉庫作業向け安全靴の選び方</h2>
      <p className="mb-4 rounded-md bg-gray-100 p-3 text-sm text-gray-600">
        同じ倉庫でも工程によって重視する性能が変わります。工程起点で選ぶのが失敗しないコツです。
      </p>

      <figure className="mb-4">
        <img
          src="/記事画像/warehouse-work-types-safety-shoes.jpg"
          alt="ピッキングや検品など倉庫作業別に安全靴を使い分けるイメージ"
          className="w-full rounded-xl object-cover"
        />
      </figure>

      <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">ピッキング作業：軽量性・クッション性・歩きやすさ</h3>
      <p className="mb-4 text-sm leading-relaxed">一日中歩き、棚間移動や階段もあります。重すぎる靴は疲労につながるため、軽量でクッション性のあるタイプが向きます。</p>

      <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">検品・梱包作業：立ち作業の疲れにくさ</h3>
      <p className="mb-4 text-sm leading-relaxed">同じ場所での立ち作業が中心。クッション性・フィット感・屈曲性で足の疲れを軽減します。</p>

      <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">入出荷作業：先芯・滑りにくさ・耐久性</h3>
      <p className="mb-4 text-sm leading-relaxed">荷物落下・台車接触・パレット周辺作業が多く、先芯とつま先保護、耐滑性、耐久性が重要です。</p>

      <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">台車・カゴ車作業：つま先保護とつまずきにくさ</h3>
      <figure className="mb-4">
        <img
          src="/記事画像/cart-work-safety-shoes-toe-protection.jpg"
          alt="台車作業で足先を守る安全靴の重要性を示すイメージ"
          className="w-full rounded-xl object-cover"
        />
      </figure>
      <p className="mb-4 text-sm leading-relaxed">台車の車輪や荷台周辺で足先をぶつけやすいため、先芯入りでつま先保護のあるタイプを。つまずき防止には靴底の屈曲性とつま先の高さも確認します。</p>

      <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">冷蔵・冷凍・水濡れがある倉庫：床との相性を確認</h3>
      <p className="mb-4 text-sm leading-relaxed">床面の滑り・防寒性・水濡れや結露に注意。床の滑りやすさに応じた耐滑性の靴を選び、必要に応じてメーカー・販売店に相談します。</p>

      {/* H2-5 ニューバランス */}
      <h2 className="mt-10 mb-3 text-xl font-bold text-gray-900">ニューバランス安全靴は倉庫作業に向いている？</h2>
      <p className="mb-4 rounded-md bg-gray-100 p-3 text-sm text-gray-600">
        長時間歩く倉庫作業では「履きやすさ」が定着率を左右します。ピッキング・検品・軽作業中心の現場に提案しやすいタイプです。
      </p>
      <ul className="mb-4 list-disc space-y-1 pl-5 text-sm">
        <li>スニーカー感覚で履きやすく、着用が定着しやすい</li>
        <li>ピッキング・検品・軽作業中心の現場に向く</li>
        <li>法人支給ではサイズ展開・在庫・現場ルールの確認を</li>
      </ul>
      <ProductGrid items={newbalance} />
      <div className="mb-8">
        <ListCta href={LIST.newbalance} label="ニューバランス安全靴一覧を見る" content="cta_newbalance_list" />
      </div>

      {/* H2-6 TRUSCO */}
      <h2 className="mt-10 mb-3 text-xl font-bold text-gray-900">TRUSCO系の安全靴はどんな倉庫に向いている？</h2>
      <p className="mb-4 rounded-md bg-gray-100 p-3 text-sm text-gray-600">
        価格と実用性のバランスを重視し、まとめて導入しやすいのが強み。入出荷・台車作業・予備用・新人用にも使いやすいタイプです。
      </p>
      <ul className="mb-4 list-disc space-y-1 pl-5 text-sm">
        <li>まとめて導入しやすい実用タイプ</li>
        <li>価格と保護性能のバランスを重視したい現場に</li>
        <li>入出荷・台車作業・現場兼用にも使いやすい</li>
        <li>予備・新人用・短期スタッフ用にも検討しやすい</li>
      </ul>
      <ProductGrid items={truscoShoes} />
      <div className="mb-8">
        <ListCta href={LIST.safetyShoes} label="安全靴一覧を見る" content="cta_safetyshoes_list" />
      </div>

      {/* プロアクティブ */}
      <h2 className="mt-10 mb-3 text-xl font-bold text-gray-900">プロアクティブスニーカーも倉庫作業の選択肢に</h2>
      <p className="mb-4 rounded-md bg-gray-100 p-3 text-sm text-gray-600">
        普通作業〜軽作業向けのスニーカータイプ。黒・白など現場に合わせやすいカラー展開で、履きやすさを求める現場の選択肢になります。
      </p>
      <ProductGrid items={proactive} />
      <div className="mb-8 flex flex-wrap gap-3">
        <ListCta href={LIST.proactiveBlack} label="プロアクティブ ブラック一覧" content="cta_proactive_black" />
        <ListCta href={LIST.protectiveWhite} label="プロテクティブスニーカー ホワイト一覧" content="cta_protective_white" />
      </div>

      {/* H2-7 運搬動線 */}
      <h2 className="mt-10 mb-3 text-xl font-bold text-gray-900">倉庫作業の安全靴は“靴だけ”でなく運搬動線も見直す</h2>
      <p className="mb-4 rounded-md bg-gray-100 p-3 text-sm text-gray-600">
        重い荷物の手運びが多いと足腰の負担が増えます。台車を活用すると、足腰への負担も安全靴への負担も減らせます。
      </p>

      <figure className="mb-4">
        <img
          src="/記事画像/warehouse-safety-shoes-platform-cart.jpg"
          alt="安全靴と運搬台車を組み合わせて倉庫作業の負担を減らすイメージ"
          className="w-full rounded-xl object-cover"
        />
      </figure>

      <p className="mb-4 text-sm leading-relaxed">
        厚生労働省の腰痛予防対策では、重量物の取扱いや不自然な姿勢を伴う作業では自動化・省力化を検討し、困難な場合は台車などの補助機器で作業者の負担を減らすことが示されています。カルティオのような軽量台車は倉庫内の小回り運搬に向き、ストッパー付きや大型タイプは作業に合わせて選びます。
      </p>
      <ProductGrid items={carts} />
      <div className="mb-8">
        <ListCta href={LIST.cart} label="運搬台車一覧を見る" content="cta_cart_list" />
      </div>

      {/* H2-8 比較表 */}
      <h2 className="mt-10 mb-3 text-xl font-bold text-gray-900">倉庫作業向け安全靴の比較表</h2>
      <p className="mb-4 rounded-md bg-gray-100 p-3 text-sm text-gray-600">
        作業内容ごとに重視ポイントと向いている靴を整理します。
      </p>
      <div className="my-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 p-2">作業内容</th>
              <th className="border border-gray-200 p-2">重視するポイント</th>
              <th className="border border-gray-200 p-2">向いている靴</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-gray-200 p-2">ピッキング</td><td className="border border-gray-200 p-2">軽量性・クッション性・屈曲性</td><td className="border border-gray-200 p-2">ニューバランス安全靴、プロスニーカー</td></tr>
            <tr className="bg-gray-50"><td className="border border-gray-200 p-2">検品・梱包</td><td className="border border-gray-200 p-2">立ち作業の疲れにくさ・フィット感</td><td className="border border-gray-200 p-2">スニーカータイプ、軽量タイプ</td></tr>
            <tr><td className="border border-gray-200 p-2">入出荷</td><td className="border border-gray-200 p-2">先芯・耐久性・滑りにくさ</td><td className="border border-gray-200 p-2">TRUSCO系安全靴、プロスニーカー</td></tr>
            <tr className="bg-gray-50"><td className="border border-gray-200 p-2">台車作業</td><td className="border border-gray-200 p-2">つま先保護・つまずきにくさ</td><td className="border border-gray-200 p-2">先芯入り安全靴、屈曲性のある靴</td></tr>
            <tr><td className="border border-gray-200 p-2">冷蔵・水濡れ倉庫</td><td className="border border-gray-200 p-2">靴底の滑りにくさ・床材との相性</td><td className="border border-gray-200 p-2">耐滑性を確認した安全靴</td></tr>
          </tbody>
        </table>
      </div>

      {/* H2-9 チェックリスト */}
      <h2 className="mt-10 mb-3 text-xl font-bold text-gray-900">法人導入前のチェックリスト</h2>
      <p className="mb-4 rounded-md bg-gray-100 p-3 text-sm text-gray-600">
        作業内容・靴の性能・運用の3軸で確認すると、選定の抜けを防げます。
      </p>
      <figure className="mb-4">
        <img
          src="/記事画像/safety-shoes-bulk-purchasing-check.jpg"
          alt="法人向け安全靴のまとめ買い・導入前チェックのイメージ"
          className="w-full rounded-xl object-cover"
        />
      </figure>
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <p className="mb-2 font-bold text-gray-800">作業内容</p>
          <ul className="space-y-1 text-sm">
            <li>☐ ピッキング中心か</li>
            <li>☐ 検品・梱包中心か</li>
            <li>☐ 入出荷・荷受け中心か</li>
            <li>☐ 台車・カゴ車を使うか</li>
            <li>☐ 重量物を扱うか</li>
          </ul>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <p className="mb-2 font-bold text-gray-800">靴の性能</p>
          <ul className="space-y-1 text-sm">
            <li>☐ 先芯は必要か</li>
            <li>☐ 軽量性を重視するか</li>
            <li>☐ 滑りにくさを確認したか</li>
            <li>☐ 屈曲性は十分か</li>
            <li>☐ クッション性・フィット感はよいか</li>
            <li>☐ サイズ展開は足りているか</li>
          </ul>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <p className="mb-2 font-bold text-gray-800">運用</p>
          <ul className="space-y-1 text-sm">
            <li>☐ 全員同じ靴か、作業別に分けるか</li>
            <li>☐ 新人・短期スタッフ用の予備を用意するか</li>
            <li>☐ 交換時期の目安を決めるか</li>
            <li>☐ 台車や運搬用品も整備するか</li>
          </ul>
        </div>
      </div>
      <p className="mb-4 text-sm leading-relaxed">
        交換時期の目安や点検のサインは
        <Link href="/articles/safety-shoes-replacement" className="text-blue-700 underline">安全靴の交換時期の記事</Link>
        で詳しく解説しています。靴底の凹凸が摩滅すると耐滑性が急激に低下するため、定期点検とあわせてご確認ください。
      </p>

      {/* FAQ */}
      <h2 className="mt-10 mb-3 text-xl font-bold text-gray-900">よくある質問（FAQ）</h2>
      <div className="mb-8 space-y-2">
        {[
          { q: '倉庫作業に安全靴は必要ですか？', a: '荷物の落下、台車との接触、パレット周辺作業、床面での滑りなどがある場合は、安全靴やプロテクティブスニーカーの着用を検討する価値があります。現場ルールや作業内容に合わせて選びましょう。' },
          { q: '倉庫作業では安全靴とプロスニーカーのどちらがよいですか？', a: 'ピッキング・検品・梱包などの普通作業〜軽作業では、履きやすいプロテクティブスニーカーが向く場合があります。重量物や危険作業が多い場合は、現場ルールと保護性能を優先してください。' },
          { q: '倉庫作業で疲れにくい安全靴の条件は？', a: '軽量性、クッション性、屈曲性、フィット感が重要です。長距離を歩くピッキング作業では、重すぎる靴よりもスニーカータイプが選びやすい場合があります。厚生労働省の資料では短靴は900g／足以下が目安とされています。' },
          { q: '滑りにくい安全靴を選べば転倒は防げますか？', a: '滑りにくさは重要ですが、それだけで十分ではありません。厚生労働省も、滑りにくさがかえってつまずきの原因になる場合があるため、作業現場に合う靴をメーカーや販売店と相談することをすすめています。' },
          { q: '台車作業ではどんな安全靴が向いていますか？', a: '台車やカゴ車の車輪、荷物の落下から足先を守るため、先芯入りでつま先保護のあるタイプが向いています。あわせて、つまずきにくい靴底形状や屈曲性も確認しましょう。' },
          { q: 'ニューバランス安全靴は倉庫作業に向いていますか？', a: '長時間歩くピッキングや検品など、履き心地や歩きやすさを重視する倉庫作業では候補になります。法人で導入する場合は、作業内容、サイズ展開、在庫、現場ルールを確認しましょう。' },
          { q: 'TRUSCO系安全靴はどんな倉庫に向いていますか？', a: '価格と実用性のバランスを重視する倉庫、複数人へまとめて支給したい現場、予備用・新人用を用意したい法人に向いています。' },
          { q: '安全靴だけで倉庫作業の負担は減らせますか？', a: '安全靴だけでは不十分です。重量物の手運びが多い現場では、運搬台車や補助機器を使って作業者の負担を減らすことも大切です。' },
        ].map((item) => (
          <details key={item.q} className="rounded-lg border border-gray-200 bg-white p-4">
            <summary className="cursor-pointer font-semibold text-gray-900">{item.q}</summary>
            <p className="mt-2 text-sm leading-relaxed text-gray-700">{item.a}</p>
          </details>
        ))}
      </div>

      {/* まとめ */}
      <h2 className="mt-10 mb-3 text-xl font-bold text-gray-900">まとめ｜倉庫作業の安全靴は工程別に「軽さ・滑りにくさ・先芯・疲れにくさ」で選ぶ</h2>
      <p className="mb-4 leading-relaxed">
        倉庫作業の安全靴は、おすすめランキングで選ぶより、ピッキング・検品梱包・入出荷・台車作業といった工程ごとに必要な性能を考えるのが失敗しないコツです。長時間歩く現場は軽量・履き心地重視のニューバランス、まとめ買いや入出荷・台車作業はTRUSCO系、普通〜軽作業はプロアクティブスニーカー、と作業内容別に使い分けましょう。滑りにくさは重要ですが、現場の床との相性でつまずきにつながることもあるため、メーカー・販売店への相談や定期点検・交換も忘れずに。あわせて運搬台車を整えると、足腰の負担と安全靴への負担を同時に減らせます。
      </p>

      {/* 記事末CTA */}
      <div className="my-8 rounded-xl border border-gray-200 bg-gray-50 p-6">
        <p className="mb-4 font-bold text-gray-900">作業内容から探す</p>
        <div className="flex flex-wrap gap-3">
          <ListCta href={LIST.newbalance} label="ニューバランス安全靴一覧" content="cta_newbalance_footer" />
          <ListCta href={LIST.safetyShoes} label="安全靴一覧" content="cta_safetyshoes_footer" />
          <ListCta href={LIST.cart} label="運搬台車一覧" content="cta_cart_footer" />
        </div>
      </div>

      {/* 関連記事（作業用品ナビ実在slugのみ） */}
      <h2 className="mt-10 mb-3 text-xl font-bold text-gray-900">関連記事</h2>
      <ul className="mb-8 space-y-2 text-sm">
        <li><Link href="/articles/safety-shoes-replacement" className="text-blue-700 underline">安全靴の交換時期｜7つのサインと法人向け管理ルール</Link></li>
        <li><Link href="/articles/trusco-hand-pallet-erabikata" className="text-blue-700 underline">トラスコのハンドパレット（ハンドリフト）の選び方｜フォーク長・能力・低床の違い</Link></li>
        <li><Link href="/articles/hand-lift-precautions" className="text-blue-700 underline">ハンドリフトの注意点｜事故を防ぐ使い方とハンドパレット・ハンドリフターの選び分け</Link></li>
      </ul>

      {/* 戻るリンク */}
      <div className="mb-8">
        <Link href="/" className="text-sm text-blue-700 underline">← 記事一覧に戻る</Link>
      </div>

      {/* 運営表記 */}
      <p className="border-t border-gray-200 pt-4 text-xs text-gray-500">
        運営：株式会社トレード／
        <a href="https://trade-sign.jp/" target="_blank" rel="noopener noreferrer" className="underline">
          https://trade-sign.jp/
        </a>
      </p>
    </article>
  );
}
