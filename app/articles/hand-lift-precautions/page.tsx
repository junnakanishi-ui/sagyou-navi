import Link from 'next/link';
import {
  ArticleLayout,
  ArticleContent,
  Breadcrumb,
  ArticleHeader,
  HeroImage,
  type FaqItem,
} from '@/components/article';

export const metadata = {
  title:
    'ハンドリフトの注意点｜事故を防ぐ使い方とハンドパレット・ハンドリフターの選び分け',
  description:
    'ハンドリフト使用時の注意点を、荷崩れ・過積載・足元事故・坂道・段差・急操作など現場目線で解説。ハンドパレットとハンドリフターの違い、台車との使い分け、法人導入時のチェックリストまで整理します。',
};

// ── UTMヘルパー：baseに ? が含まれていれば & で、なければ ? で連結。
//    baseは絶対に再エンコードしない（%25混入防止）。utmContentはASCIIのみ。
const buildUrl = (base: string, utmContent: string) => {
  const sep = base.includes('?') ? '&' : '?';
  return `${base}${sep}utm_source=sagyou_navi&utm_medium=article&utm_campaign=hand_lift_precautions&utm_content=${utmContent}`;
};

// ── Yahoo! signcity-yshop 商品ページ（.htmlまで。?sc_i= やアンカーは付けない）
const yahooItem = (id: string) =>
  `https://store.shopping.yahoo.co.jp/signcity-yshop/${id}.html`;

// ── 日本語クエリ／カテゴリ一覧URL（エンコード済み定数・再エンコード禁止・#アンカーと sc_i は除去済み）
const LIST = {
  // ハンドリフター（p=ハンドリフター）
  handlifter:
    'https://store.shopping.yahoo.co.jp/signcity-yshop/search.html?p=%E3%83%8F%E3%83%B3%E3%83%89%E3%83%AA%E3%83%95%E3%82%BF%E3%83%BC',
  // ハンドパレット（p=ハンドパレット）
  handpallet:
    'https://store.shopping.yahoo.co.jp/signcity-yshop/search.html?p=%E3%83%8F%E3%83%B3%E3%83%89%E3%83%91%E3%83%AC%E3%83%83%E3%83%88&view=grid',
  // 安全靴（カテゴリページ）
  safetyShoes:
    'https://store.shopping.yahoo.co.jp/signcity-yshop/b0c2c1b4b7.html?b=91&view=grid',
  // 運搬台車（カテゴリページ）
  cart: 'https://store.shopping.yahoo.co.jp/signcity-yshop/b1bfc8c2c2.html',
  // トラスコ中山（カテゴリページ）
  trusco: 'https://store.shopping.yahoo.co.jp/signcity-yshop/a5c8a5e9a5.html',
};

// ── 商品データ（全てstore=yahoo。IDは記事内で各1回のみ）
type Product = { id: string; name: string; note: string };

const lifters: Product[] = [
  { id: '168565', name: 'TRUSCO ハンドリフター 手動 80kg 400×720 高揚程型 HLFA-S80W', note: '軽量物中心で、作業台への高さ合わせが多い場合' },
  { id: '168566', name: 'TRUSCO ハンドリフター 手動 200kg 500×600 高揚程型 HLFA-S200SW', note: '200kgクラスまでの荷物を高めに上げたい場合' },
  { id: '168568', name: 'TRUSCO ハンドリフター 手動 350kg 600×900 高揚程型 HLFA-E350W', note: 'テーブル寸法・耐荷重に余裕を持たせたい場合' },
  { id: '168575', name: 'TRUSCO ハンドリフター 手動 400kg 900×600 低床式 HLF-S400-85L', note: '網パレットや低いすき間への差し込みが必要な場合' },
];

const pallets: Product[] = [
  { id: '168791', name: 'TRUSCO ハンドパレットトラック 1.5t用 L1050×W550mm', note: '標準的なパレット荷役' },
  { id: '168792', name: 'TRUSCO ハンドパレットトラック 1.5t用 L1220×W685mm', note: '大きめパレット・余裕ある通路' },
  { id: '168793', name: 'TRUSCO ハンドパレットトラック 1t用 L850×W460mm', note: '小回り重視・狭い現場' },
  { id: '168790', name: 'TRUSCO ハンドパレットトラック 1.5t用 L850×W520mm', note: '短めフォークで使いたい現場' },
  { id: '168819', name: 'TRUSCO ハンドパレットトラック 1t用 L1050×W550mm', note: '標準サイズで1tまで' },
  { id: '168806', name: 'TRUSCO ハンドパレットトラック 3t用 L1220×W680mm', note: '重量物対応' },
  { id: '168809', name: 'TRUSCO ハンドパレットトラック PK付 2t L1150×W540mm', note: 'ブレーキ・補助機能を重視' },
  { id: '213521', name: 'TRUSCO 電動ハンドパレットトラック E-TRA 1.2t用 1150×540', note: '多頻度・省力化したい場合' },
  { id: '213524', name: 'TRUSCO 電動ハンドパレットトラック E-TRA 2t用 1220×685', note: '重量物・多頻度の現場' },
];

const shoes: Product[] = [
  { id: '155406', name: 'ニューバランス 安全靴', note: '倉庫・物流・軽作業で動きやすさも重視' },
  { id: '155335', name: 'ニューバランス 安全靴', note: '現場支給・まとめ買い候補' },
  { id: '155361', name: 'ニューバランス 安全靴', note: '男女・サイズ展開を確認したい場合' },
  { id: '155329', name: 'ニューバランス 安全靴', note: '長時間歩行が多い現場向け' },
];

const carts: Product[] = [
  { id: '167468', name: 'TRUSCO カルティオ 新型 ブラック MPK-780-BK', note: '倉庫・店舗バックヤードの小口運搬' },
  { id: '190475', name: 'TRUSCO カルティオ 新型 ブラック ストッパー付 MPK780BKSS', note: '停止時の安定性を重視' },
  { id: '216713', name: 'TRUSCO カルティオビッグ 折畳 900×600 ストッパー付 オリーブ MPK-906-OG-S', note: '大きめ荷物・屋外寄りの運搬' },
  { id: '159750', name: 'TRUSCO カルティオビッグ 固定ハンドル ブルー MPK-900-B', note: '頻繁な運搬・大きめ荷物' },
];

function ProductCard({ p }: { p: Product }) {
  return (
    <a
      href={buildUrl(yahooItem(p.id), `product_${p.id}`)}
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
      <span className="mt-3 inline-block text-sm font-medium text-blue-700">
        商品ページを見る →
      </span>
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

const FAQ: FaqItem[] = [
  { q: 'ハンドリフトは押すのと引くの、どちらが安全ですか？', a: '現場状況によります。一般には進行方向の視界を確保しやすい向きで動かすこととされていますが、通路幅・荷重・床面・周囲の作業者によって最適な向きは変わります。急な力で動かさず、社内ルールと取扱説明書に従ってください。' },
  { q: 'ハンドリフトで坂道を移動してもよいですか？', a: '重量物は傾斜で止めにくく、逸走や転倒の危険があるとされています。坂道・スロープ・濡れた床・段差では使用可否を現場ルールや取扱説明書で確認し、必要に応じて別の搬送方法を検討してください。' },
  { q: 'ハンドパレットとハンドリフターの違いは何ですか？', a: 'ハンドパレットトラックはパレット荷物を水平移動する用品、ハンドリフターはテーブルを昇降させて作業台や棚の高さに荷物を合わせる用品です。「横移動したいのか」「高さを合わせたいのか」で選ぶ機器が変わります。' },
  { q: 'ハンドリフターは荷物を上げたまま移動できますか？', a: '基本的におすすめされません。荷物を上げた状態は重心が高くなり不安定になりやすいためです。製品情報でも、荷物を載せたテーブルを上昇したまま移動しないよう注意されている製品があります。' },
  { q: 'ハンドリフト使用時に安全靴は必要ですか？', a: '現場ルールによりますが、ハンドリフトや台車作業では足元の接触・挟まれリスクがあります。足の挟まれや乗り上げによる労働災害事例も報告されているため、安全靴やプロテクティブスニーカーの着用を検討する価値があります。ただし完全に事故を防ぐものではありません。' },
  { q: '手動と電動ハンドパレットはどう選べばよいですか？', a: '使用頻度が少なく移動距離も短い場合は手動で足りることがあります。重量物の移動回数が多い、長距離移動が多い、作業者の負担を下げたい場合は電動タイプも選択肢になります。' },
];

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://sagyou-navi.com/' },
    { '@type': 'ListItem', position: 2, name: '倉庫・物流', item: 'https://sagyou-navi.com/' },
    { '@type': 'ListItem', position: 3, name: 'ハンドリフトの注意点' },
  ],
};

export default function Page() {
  return (
    <ArticleLayout faq={FAQ}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb current="ハンドリフトの注意点" />
      <ArticleHeader
        category="guide"
        readingTime={12}
        title="ハンドリフトの注意点"
        subtitle="事故を防ぐ使い方とハンドパレット・ハンドリフターの選び分け"
      />
      <HeroImage
        src="/記事画像/hand-lift-safety-hero.jpg"
        alt="倉庫でハンドリフトの注意点を確認する現場責任者"
      />

      <ArticleContent>
      <p className="mb-4 leading-relaxed">
        倉庫や工場、店舗バックヤードで重量物を動かすときに便利なハンドリフト。手作業での持ち上げを減らせる一方で、使い方を誤ると荷崩れ、足元の接触、パレット破損、腰への負担、周囲との衝突につながることがあります。
      </p>
      <p className="mb-4 leading-relaxed">
        また、現場で「ハンドリフト」と呼ばれるものには、パレットを動かすハンドパレットトラック、荷物を昇降するハンドリフター、段ボールや備品を運ぶ台車などが混在しているケースもあります。この呼び方の曖昧さが、選定ミスや事故の遠因になることもあります。
      </p>
      <p className="mb-6 leading-relaxed">
        この記事では、ハンドリフト使用時の注意点を、現場の安全管理・新人教育・法人購買の視点から整理します。ハンドパレットとハンドリフターの違い、用途別の選び方、導入時のチェックリストまでまとめていますので、社内の安全教育や購入前の比較にお役立てください。
      </p>

      <div className="mb-6 rounded-xl border border-amber-200 bg-amber-50 p-5">
        <p className="mb-2 text-sm font-bold text-amber-800">★ この記事の即答</p>
        <p className="text-sm leading-relaxed text-amber-900">
          <strong>ハンドリフトの注意点は「載せ方・動かし方・止め方・選び方」の4つ。</strong>
          過積載・偏荷重・高積みを避け、急発進や急停止をせず、坂道・段差・濡れた床に注意し、足元保護（安全靴）も合わせて考えます。
          さらに「ハンドリフト」は<strong>パレット横移動＝ハンドパレット／高さ合わせ＝ハンドリフター／小口荷物＝運搬台車</strong>と用途で道具が分かれます。用途に合った機器選びが、操作の注意点と同じくらい重要です。
        </p>
      </div>

      <div className="mb-6 border-l-4 border-blue-600 bg-blue-50 p-5">
        <p className="mb-2 font-bold text-blue-900">結論：安全に使うためのチェックポイント</p>
        <ul className="list-disc space-y-1 pl-5 text-sm text-blue-900">
          <li>過積載しない（耐荷重を超えない・重心を偏らせない）</li>
          <li>荷物を高く積みすぎない（前方視界を確保し荷崩れを防ぐ）</li>
          <li>急発進・急停止・急旋回を避ける</li>
          <li>坂道・段差・濡れた床に注意する</li>
          <li>パレットにはフォークを奥まで（差し込みすぎにも注意）</li>
          <li>ハンドリフターは荷物を上げたまま移動しない</li>
          <li>足元保護（安全靴・プロテクティブスニーカー）も合わせて検討</li>
          <li>用途に合う機器を選ぶ（横移動・高さ合わせ・小口で道具が違う）</li>
        </ul>
      </div>

      <div className="mb-8 border-l-4 border-amber-500 bg-amber-50 p-5">
        <p className="mb-2 font-bold text-amber-800">使用前の安全に関する注意</p>
        <p className="text-sm leading-relaxed text-amber-900">
          本記事は一般的な情報提供であり、法的助言や特定機器の保証ではありません。耐荷重・使用条件・適合パレット・点検方法は製品ごとに異なるため、<strong>必ず取扱説明書・商品ページ・現場の安全ルール・関係法令</strong>を確認してください。安全靴などの保護具は事故を完全に防ぐものではありません。重量物の移動でバランスを崩した、足を挟んだなどの異常があれば作業を中止し、けがをした場合は速やかに応急対応・医療機関の受診を行い、必要に応じて社内の労災手続きに沿って報告してください。
        </p>
      </div>

      <h2 className="mt-10 mb-3 text-xl font-bold text-gray-900">
        ハンドリフトとは？ハンドパレット・ハンドリフター・台車の違い
      </h2>
      <p className="mb-4 rounded-md bg-gray-100 p-3 text-sm text-gray-600">
        「ハンドリフト」は現場で曖昧に使われる呼び方で、実際にはパレット用・昇降用・小口用で別の機器を指していることがあります。まず混同を解消します。
      </p>

      <figure className="mb-4">
        <img
          src="/記事画像/hand-pallet-lifter-cart-difference.jpg"
          alt="ハンドパレット・ハンドリフター・運搬台車の違いを比較するイメージ"
          className="w-full rounded-xl object-cover"
        />
      </figure>

      <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">現場で「ハンドリフト」と呼ばれるものは1種類ではない</h3>
      <div className="my-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 p-2">呼び方</th>
              <th className="border border-gray-200 p-2">主な用途</th>
              <th className="border border-gray-200 p-2">向いている荷物</th>
              <th className="border border-gray-200 p-2">注意点</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-200 p-2">ハンドパレットトラック</td>
              <td className="border border-gray-200 p-2">パレット荷物の水平移動</td>
              <td className="border border-gray-200 p-2">パレット積みされた荷物</td>
              <td className="border border-gray-200 p-2">フォーク長・能力・床面・適合パレットの確認</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 p-2">ハンドリフター</td>
              <td className="border border-gray-200 p-2">荷物の昇降・高さ合わせ</td>
              <td className="border border-gray-200 p-2">箱・部品・資材・網パレットなど</td>
              <td className="border border-gray-200 p-2">上昇したまま移動しない・挟まれ注意</td>
            </tr>
            <tr>
              <td className="border border-gray-200 p-2">運搬台車</td>
              <td className="border border-gray-200 p-2">段ボール・備品の移動</td>
              <td className="border border-gray-200 p-2">小口荷物・工具・機材</td>
              <td className="border border-gray-200 p-2">過積載・高積み・段差に注意</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 p-2">フォークリフト</td>
              <td className="border border-gray-200 p-2">重量物の昇降・積み下ろし</td>
              <td className="border border-gray-200 p-2">大量・高所・重量物</td>
              <td className="border border-gray-200 p-2">資格・作業計画・現場ルールが必要</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">「パレットを動かす」のか「高さを合わせる」のかで選び方が変わる</h3>
      <ul className="mb-4 list-disc space-y-1 pl-5 text-sm">
        <li>パレットの下に爪を差し込んで横移動するなら<strong>ハンドパレット</strong></li>
        <li>作業台・棚・機械に高さを合わせるなら<strong>ハンドリフター</strong></li>
        <li>段ボールや機材を平置きで運ぶなら<strong>運搬台車</strong></li>
      </ul>
      <p className="mb-4 text-sm leading-relaxed">
        なお、ハンドパレットの選び方（フォーク長・能力・低床式の違い）は
        <Link href="/articles/trusco-hand-pallet-erabikata" className="text-blue-700 underline">ハンドパレットの選び方の記事</Link>
        で詳しく解説しています。本記事では「どれを選ぶか」と「事故を防ぐ注意点」に絞ります。
      </p>

      <h2 className="mt-10 mb-3 text-xl font-bold text-gray-900">ハンドリフトでやってはいけない注意点は？</h2>
      <p className="mb-4 rounded-md bg-gray-100 p-3 text-sm text-gray-600">
        多くの事故は「過積載・偏荷重・高積み・急操作・床面の見落とし・足元の接触」に集約されます。順に確認します。
      </p>

      <figure className="mb-4">
        <img
          src="/記事画像/hand-lift-floor-slope-risk.jpg"
          alt="ハンドリフト使用前に床面や段差を確認する作業者"
          className="w-full rounded-xl object-cover"
        />
      </figure>

      <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">過積載しない</h3>
      <ul className="mb-4 list-disc space-y-1 pl-5 text-sm">
        <li>耐荷重（均等荷重）は仕様で決まっている。表示の重量を超えない</li>
        <li>能力ギリギリでの常用は避ける</li>
        <li>耐荷重を超えて無理に動かすと、爪の破損や荷物落下につながるとされています</li>
      </ul>

      <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">荷物を偏らせない・高く積みすぎない</h3>
      <ul className="mb-4 list-disc space-y-1 pl-5 text-sm">
        <li>重いものを片側に寄せない（偏荷重はバランスを崩す原因）</li>
        <li>高く積みすぎると前方の視界が遮られ、荷崩れも起きやすい</li>
        <li>崩れやすい荷物は固定・結束を検討</li>
      </ul>

      <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">急発進・急停止・急旋回をしない</h3>
      <ul className="mb-4 list-disc space-y-1 pl-5 text-sm">
        <li>曲がるときや急停止時に荷崩れが起きやすい</li>
        <li>重量物は慣性が大きく、すぐには止まらない</li>
        <li>周囲の作業者との接触リスクが上がるため、進行方向の安全確認を徹底</li>
      </ul>

      <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">坂道・スロープで安易に使わない</h3>
      <ul className="mb-4 list-disc space-y-1 pl-5 text-sm">
        <li>重量物は傾斜で止めにくく、逸走・転倒の危険があるとされています</li>
        <li>濡れた床や屋外の傾斜では滑りやすい</li>
        <li>必要に応じて複数人作業・別機器・現場ルールの確認を</li>
      </ul>

      <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">人を乗せない・踏み台代わりにしない</h3>
      <ul className="mb-4 list-disc space-y-1 pl-5 text-sm">
        <li>荷役機器は人を乗せる道具ではない</li>
        <li>フォークやテーブルに足をかけて踏み台代わりに使うのは危険</li>
        <li>高所作業には脚立・踏台・足場台など適切な用品を使う（→ <Link href="/articles/construction-work-platform" className="text-blue-700 underline">作業台の選び方の記事</Link>）</li>
      </ul>

      <h2 className="mt-10 mb-3 text-xl font-bold text-gray-900">ハンドパレットトラック使用時の注意点は？</h2>
      <p className="mb-4 rounded-md bg-gray-100 p-3 text-sm text-gray-600">
        パレット荷物の水平移動では、フォークの差し込み・走行高さ・通路・床面の4点が事故と破損を分けます。
      </p>

      <figure className="mb-4">
        <img
          src="/記事画像/hand-pallet-safe-operation.jpg"
          alt="ハンドパレットを安全に操作する倉庫作業者"
          className="w-full rounded-xl object-cover"
        />
      </figure>

      <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">フォークをパレットの奥まで差し込む（差し込みすぎにも注意）</h3>
      <ul className="mb-4 list-disc space-y-1 pl-5 text-sm">
        <li>先端だけで持ち上げると荷崩れやパレット破損につながる</li>
        <li>一方で奥に差し込みすぎると抜けにくくなる・別のパレットまで差すことがある</li>
        <li>パレットサイズとフォーク長が合っているかを確認（木製パレット非対応の製品もある）</li>
      </ul>

      <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">フォークを上げすぎたまま走行しない</h3>
      <ul className="mb-4 list-disc space-y-1 pl-5 text-sm">
        <li>高く上げるほど重心が上がり不安定になる</li>
        <li>低すぎると床や段差に干渉する</li>
        <li>「走行に必要な最低限の高さ」が基本</li>
      </ul>

      <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">通路幅と曲がり角を確認する</h3>
      <ul className="mb-4 list-disc space-y-1 pl-5 text-sm">
        <li>パレット幅＋作業者の逃げ場を確保</li>
        <li>曲がり角・出入口・搬入口は接触リスクが高い</li>
        <li>死角がある場所は声掛けやミラーも検討</li>
      </ul>

      <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">床面・段差・傾斜を確認する</h3>
      <ul className="mb-4 list-disc space-y-1 pl-5 text-sm">
        <li>凹凸床・溝・スロープ・濡れた床に注意</li>
        <li>重量物ほど一度動くと止めにくい</li>
        <li>床面が悪い場合は台車や別の搬送方法を検討</li>
      </ul>

      <h2 className="mt-10 mb-3 text-xl font-bold text-gray-900">ハンドリフター使用時の注意点は？</h2>
      <p className="mb-4 rounded-md bg-gray-100 p-3 text-sm text-gray-600">
        テーブルを昇降させて高さを合わせる機器です。「上げたまま移動しない」「挟まれない」「点検する」が要点です。
      </p>

      <figure className="mb-4">
        <img
          src="/記事画像/manual-lift-table-height-adjustment.jpg"
          alt="ハンドリフターで作業台の高さに荷物を合わせる工場作業のイメージ"
          className="w-full rounded-xl object-cover"
        />
      </figure>

      <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">荷物を載せたテーブルを上げたまま移動しない</h3>
      <p className="mb-4 text-sm leading-relaxed">
        高く上げた状態は重心が高くなり不安定になりやすいためです。製品情報でも、荷物を載せたテーブルを上昇したまま移動しないよう注意されている製品があります。移動は基本的にテーブルを下げてから行ってください。
      </p>

      <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">昇降時に手や足を挟まないようにする</h3>
      <ul className="mb-4 list-disc space-y-1 pl-5 text-sm">
        <li>テーブル下・キャスター周辺・荷物との隙間に注意</li>
        <li>複数人作業時は声掛けを徹底</li>
        <li>ジャバラ（蛇腹カバー）の後付け可否など、必要なら購入前に仕様確認</li>
      </ul>

      <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">作業台・棚・機械の高さに合うか確認する</h3>
      <ul className="mb-4 list-disc space-y-1 pl-5 text-sm">
        <li>最高高さだけでなく最低高さも確認する</li>
        <li>低床式が必要な現場もある（網パレット・狭いすき間）</li>
        <li>テーブル寸法と荷物サイズの相性を確認</li>
      </ul>

      <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">定期点検・取扱説明書の確認を前提にする</h3>
      <p className="mb-4 text-sm leading-relaxed">
        ハンドリフターは定期点検が必要な製品として案内されている商品もあります。導入後の点検・管理ルールまで決めておくと安心です。
      </p>

      <p className="mb-2 text-sm font-semibold text-gray-700">高さ合わせ・昇降作業に向くハンドリフター</p>
      <ProductGrid items={lifters} />
      <div className="mb-8">
        <ListCta href={LIST.handlifter} label="ハンドリフター一覧はこちら" content="cta_handlifter" />
      </div>

      <h2 className="mt-10 mb-3 text-xl font-bold text-gray-900">現場別｜ハンドリフトの注意点と選び方</h2>
      <p className="mb-4 rounded-md bg-gray-100 p-3 text-sm text-gray-600">
        現場ごとに「よくある作業・注意点・向いている用品」を早見表で整理します。
      </p>
      <div className="my-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 p-2">現場</th>
              <th className="border border-gray-200 p-2">よくある作業</th>
              <th className="border border-gray-200 p-2">注意点</th>
              <th className="border border-gray-200 p-2">向いている用品</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-gray-200 p-2">倉庫・物流センター</td><td className="border border-gray-200 p-2">パレット荷物の移動</td><td className="border border-gray-200 p-2">通路幅・荷崩れ・足元接触</td><td className="border border-gray-200 p-2">ハンドパレット、安全靴</td></tr>
            <tr className="bg-gray-50"><td className="border border-gray-200 p-2">工場・製造現場</td><td className="border border-gray-200 p-2">部品・資材の高さ合わせ</td><td className="border border-gray-200 p-2">昇降時の挟まれ・上昇移動</td><td className="border border-gray-200 p-2">ハンドリフター</td></tr>
            <tr><td className="border border-gray-200 p-2">店舗バックヤード</td><td className="border border-gray-200 p-2">段ボール・備品移動</td><td className="border border-gray-200 p-2">高積み・狭い通路・段差</td><td className="border border-gray-200 p-2">運搬台車</td></tr>
            <tr className="bg-gray-50"><td className="border border-gray-200 p-2">イベント設営</td><td className="border border-gray-200 p-2">機材・備品の移動</td><td className="border border-gray-200 p-2">屋外床面・傾斜・雨天</td><td className="border border-gray-200 p-2">台車、必要に応じてハンドパレット</td></tr>
            <tr><td className="border border-gray-200 p-2">出荷・搬入口</td><td className="border border-gray-200 p-2">トラック付近の荷役</td><td className="border border-gray-200 p-2">スロープ・渡し板・周囲確認</td><td className="border border-gray-200 p-2">現場ルールに合う荷役機器</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="mt-10 mb-3 text-xl font-bold text-gray-900">購入前に確認したいハンドリフト選定チェックリスト</h2>
      <p className="mb-4 rounded-md bg-gray-100 p-3 text-sm text-gray-600">
        社内稟議や現場ヒアリングにそのまま使えるチェック項目です。コピーして共有してください。
      </p>

      <figure className="mb-4">
        <img
          src="/記事画像/hand-lift-purchasing-checklist.jpg"
          alt="ハンドリフト導入前のチェックリストを確認する購買担当者"
          className="w-full rounded-xl object-cover"
        />
      </figure>

      <div className="mb-6 rounded-xl border border-gray-200 bg-white p-5">
        <ul className="space-y-2 text-sm">
          {[
            '運ぶ荷物はパレット積みか、箱・部品・機材か',
            '荷物の最大重量は何kgか（均等荷重か、偏りやすいか）',
            '通路幅・曲がり角・出入口の寸法は十分か',
            '床面に段差・傾斜・溝・濡れやすい場所がないか',
            '作業台・棚・機械に高さを合わせる必要があるか',
            'フォーク長・フォーク幅・適合パレットは合っているか',
            '手動で十分か、電動が必要な頻度か',
            '保管場所は確保できるか',
            '使用者への安全教育・点検ルールを用意できるか',
            '安全靴など足元保護も合わせて用意するか',
          ].map((t) => (
            <li key={t} className="flex items-start gap-2">
              <span className="mt-0.5 text-blue-600">☐</span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>

      <h2 className="mt-10 mb-3 text-xl font-bold text-gray-900">用途別に選ぶおすすめ商品</h2>
      <p className="mb-4 rounded-md bg-gray-100 p-3 text-sm text-gray-600">
        押し売りではなく、現場課題の解決策として用途別に整理します。価格・在庫・仕様は変動するため、最新情報は商品ページでご確認ください。
      </p>

      <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">パレット荷物の水平移動にはハンドパレットトラック</h3>
      <p className="mb-2 text-sm leading-relaxed">
        能力・フォーク長・フォーク幅に違いがあります。<strong>フォーク長とパレット寸法の確認</strong>が選定の要です。ハンドリフター（昇降用）と間違えないよう、まず「横移動なのか」を確認してください。
      </p>
      <ProductGrid items={pallets} />
      <div className="mb-8">
        <ListCta href={LIST.handpallet} label="ハンドパレット一覧はこちら" content="cta_handpallet" />
      </div>

      <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">足元事故対策に安全靴・プロテクティブスニーカー</h3>
      <figure className="mb-4">
        <img
          src="/記事画像/hand-lift-safety-shoes-foot-protection.jpg"
          alt="ハンドリフト作業時に安全靴で足元を保護するイメージ"
          className="w-full rounded-xl object-cover"
        />
      </figure>
      <p className="mb-2 text-sm leading-relaxed">
        ハンドリフトや台車作業では、キャスター・フォーク・荷物が足元に近づきやすく、足の挟まれや乗り上げによる労働災害事例も報告されています。足元保護もセットで考えると安心です（ただし保護具は事故を完全に防ぐものではありません）。
      </p>
      <ProductGrid items={shoes} />
      <div className="mb-8">
        <ListCta href={LIST.safetyShoes} label="ニューバランス安全靴一覧へ" content="cta_safetyshoes" />
      </div>

      <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">小口荷物・段ボール中心なら運搬台車</h3>
      <p className="mb-2 text-sm leading-relaxed">
        すべての荷物にハンドパレットやハンドリフターが必要なわけではありません。段ボール・備品・工具・イベント資材などは、運搬台車の方が使いやすいケースもあります。
      </p>
      <ProductGrid items={carts} />
      <div className="mb-8">
        <ListCta href={LIST.cart} label="運搬台車一覧へ" content="cta_cart" />
      </div>

      <h2 className="mt-10 mb-3 text-xl font-bold text-gray-900">ハンドパレット・ハンドリフター・台車の使い分け早見表</h2>
      <p className="mb-4 rounded-md bg-gray-100 p-3 text-sm text-gray-600">
        「やりたい作業」から逆引きで道具を選べる早見表です。
      </p>
      <div className="my-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 p-2">やりたい作業</th>
              <th className="border border-gray-200 p-2">選ぶ用品</th>
              <th className="border border-gray-200 p-2">理由</th>
              <th className="border border-gray-200 p-2">注意点</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-gray-200 p-2">パレット荷物を横に動かす</td><td className="border border-gray-200 p-2">ハンドパレット</td><td className="border border-gray-200 p-2">パレットごと水平移動できる</td><td className="border border-gray-200 p-2">フォーク長・能力・床面確認</td></tr>
            <tr className="bg-gray-50"><td className="border border-gray-200 p-2">作業台や棚に高さを合わせる</td><td className="border border-gray-200 p-2">ハンドリフター</td><td className="border border-gray-200 p-2">テーブルを昇降できる</td><td className="border border-gray-200 p-2">上げたまま移動しない</td></tr>
            <tr><td className="border border-gray-200 p-2">段ボールや備品を運ぶ</td><td className="border border-gray-200 p-2">運搬台車</td><td className="border border-gray-200 p-2">小口荷物に使いやすい</td><td className="border border-gray-200 p-2">高積み・段差・過積載に注意</td></tr>
            <tr className="bg-gray-50"><td className="border border-gray-200 p-2">重量物を高所へ上げる</td><td className="border border-gray-200 p-2">フォークリフト等</td><td className="border border-gray-200 p-2">高所荷役に対応</td><td className="border border-gray-200 p-2">資格・作業計画・現場ルール確認</td></tr>
            <tr><td className="border border-gray-200 p-2">足元事故を減らす</td><td className="border border-gray-200 p-2">安全靴</td><td className="border border-gray-200 p-2">接触・落下物から足元を守る</td><td className="border border-gray-200 p-2">現場に合う規格を確認</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="mt-10 mb-3 text-xl font-bold text-gray-900">ハンドリフト使用時のFAQ</h2>
      <div className="mb-8 space-y-2">
        {FAQ.map((item) => (
          <details key={item.q} className="rounded-lg border border-gray-200 bg-white p-4">
            <summary className="cursor-pointer font-semibold text-gray-900">{item.q}</summary>
            <p className="mt-2 text-sm leading-relaxed text-gray-700">{item.a}</p>
          </details>
        ))}
      </div>

      <h2 className="mt-10 mb-3 text-xl font-bold text-gray-900">まとめ</h2>
      <p className="mb-4 leading-relaxed">
        ハンドリフトを安全に使うには、「正しい使い方」だけでなく「用途に合った道具選び」が同じくらい重要です。過積載・偏荷重・高積み・急操作・坂道・段差・足元接触に注意しつつ、パレットの横移動はハンドパレット、高さ合わせはハンドリフター、小口荷物は運搬台車、という基本の使い分けを押さえれば、事故と選定ミスの両方を減らせます。耐荷重・適合パレット・点検方法は製品ごとに異なるため、必ず取扱説明書・商品ページ・現場ルールをご確認ください。
      </p>

      <div className="my-8 rounded-xl border border-gray-200 bg-gray-50 p-6">
        <p className="mb-4 font-bold text-gray-900">用途から探す</p>
        <div className="flex flex-wrap gap-3">
          <ListCta href={LIST.handlifter} label="ハンドリフター一覧" content="cta_handlifter_footer" />
          <ListCta href={LIST.handpallet} label="ハンドパレット一覧" content="cta_handpallet_footer" />
          <ListCta href={LIST.cart} label="運搬台車一覧" content="cta_cart_footer" />
          <ListCta href={LIST.trusco} label="トラスコ中山一覧" content="cta_trusco_footer" />
        </div>
      </div>

      <h2 className="mt-10 mb-3 text-xl font-bold text-gray-900">関連記事</h2>
      <ul className="mb-8 space-y-2 text-sm">
        <li>
          <Link href="/articles/trusco-hand-pallet-erabikata" className="text-blue-700 underline">
            トラスコのハンドパレット（ハンドリフト）の選び方｜フォーク長・能力・低床の違い
          </Link>
        </li>
        <li>
          <Link href="/articles/safety-shoes-replacement" className="text-blue-700 underline">
            安全靴の交換時期はいつ？靴底・先芯・破れの見分け方と買い替え目安
          </Link>
        </li>
        <li>
          <Link href="/articles/construction-work-platform" className="text-blue-700 underline">
            建築現場の作業台はどう選ぶ？足場台・踏台・ペケ台・工具置き台の使い分け
          </Link>
        </li>
      </ul>

      <div className="mb-8">
        <Link href="/" className="text-sm text-blue-700 underline">← 記事一覧に戻る</Link>
      </div>

      <p className="border-t border-gray-200 pt-4 text-xs text-gray-500">
        運営：株式会社トレード／
        <a href="https://trade-sign.jp/" target="_blank" rel="noopener noreferrer" className="underline">
          https://trade-sign.jp/
        </a>
      </p>
      </ArticleContent>
    </ArticleLayout>
  );
}
