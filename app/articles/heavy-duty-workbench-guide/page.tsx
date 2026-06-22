import Link from 'next/link';

export const metadata = {
  title: '頑丈な作業台の選び方｜業務用で失敗しない耐荷重・天板・用途別の比較ガイド',
  description:
    '頑丈な作業台を選ぶなら、耐荷重だけでなく軽量・中量・重量の違い、天板材質、バイス作業への対応、固定式・移動式、搬入や運搬動線まで確認することが大切です。工場・倉庫・整備場向けに業務用作業台の選び方と、TRUSCO作業台・ハンドパレット・台車の活用を解説します。',
};

// ── UTMヘルパー：baseに ? があれば & で、なければ ? で連結。baseは絶対に再エンコードしない。
const buildUrl = (base: string, utmContent: string) => {
  const sep = base.includes('?') ? '&' : '?';
  return `${base}${sep}utm_source=sagyou_navi&utm_medium=article&utm_campaign=heavy_duty_workbench&utm_content=${utmContent}`;
};

// ── Yahoo! signcity-yshop 商品ページ（.htmlまで。?sc_i= 等は付けない）
const yahooItem = (id: string) =>
  `https://store.shopping.yahoo.co.jp/signcity-yshop/${id}.html`;

// ── カテゴリ一覧URL（Yahoo!・パス型）
const LIST = {
  workbench: 'https://store.shopping.yahoo.co.jp/signcity-yshop/e2ea8bb6c2c.html',  // 作業台一覧
  handpallet: 'https://store.shopping.yahoo.co.jp/signcity-yshop/c8c2c1f7b5.html',  // ハンドパレット・ハンドリフター一覧
  cart: 'https://store.shopping.yahoo.co.jp/signcity-yshop/b1bfc8c2c2.html',        // 運搬台車一覧
  trusco: 'https://store.shopping.yahoo.co.jp/signcity-yshop/a5c8a5e9a5.html',      // トラスコ中山一覧
};

type Product = { id: string; name: string; note: string };

// 作業台メイン（Yahoo!）
const workbenches: Product[] = [
  { id: '161681', name: 'TRUSCO 中量作業台 回転台付アンビルバイス付 RHW-0960VRS', note: '均等荷重1200kg・900×600×740mm・バイス固定の整備/組立/加工補助に' },
  { id: '161973', name: 'TRUSCO 軽量作業台 TFAE型 TFAEL-1260', note: '均等荷重300kg・1200×600×740mm・梱包/検品/軽い組立に' },
  { id: '161782', name: 'TRUSCO 移動式重量作業台 STWC-1200', note: 'レイアウト変更が多い現場・作業台ごと動かしたい現場に' },
  { id: '220888', name: 'TRUSCO 中荷重作業台 800kg GW型 GWR-0945', note: '均等荷重800kg・900×450×740mm・省スペースで中荷重作業に' },
];

// ハンドパレット（Yahoo!）
const pallets: Product[] = [
  { id: '168791', name: 'TRUSCO ハンドパレットトラック 1.5t用 L1050×W550mm 軽量型', note: '標準的なパレット荷役' },
  { id: '168790', name: 'TRUSCO ハンドパレットトラック 1.5t用 L850×W520mm 軽量', note: '短めフォークで使いたい現場' },
  { id: '168809', name: 'TRUSCO ハンドパレットトラック PK付 2t L1150×W540mm', note: 'ブレーキ・補助機能を重視' },
  { id: '168827', name: 'TRUSCO 電動ハンドパレットトラック E-TRA 1.2t用', note: '多頻度・省力化したい場合' },
];

// 運搬台車（Yahoo!）
const carts: Product[] = [
  { id: '167468', name: 'TRUSCO カルティオ 新型 ブラック MPK-780-BK', note: '工具・部品の小回り運搬' },
  { id: '190475', name: 'TRUSCO カルティオ 新型 ブラック ストッパー付 MPK780BKSS', note: '停止時の安定性を重視' },
  { id: '216713', name: 'TRUSCO 樹脂台車 カルティオビッグ 折畳 900×600 ストッパー付', note: '大きめ荷物・折りたたみ収納' },
  { id: '159750', name: 'TRUSCO カルティオビッグ 固定ハンドル MPK-900-B', note: '頻繁な運搬・大きめ荷物' },
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
    { '@type': 'Question', name: '頑丈な作業台は耐荷重だけで選べばよいですか？', acceptedAnswer: { '@type': 'Answer', text: '耐荷重は重要ですが、それだけでは不十分です。荷重が均等にかかるのか一部に集中するのか、打撃やバイス固定があるのか、天板材質や脚部構造、設置環境まで確認しましょう。' } },
    { '@type': 'Question', name: '軽量作業台と中量作業台、重量作業台の違いは何ですか？', acceptedAnswer: { '@type': 'Answer', text: '一般的には、軽量作業台は梱包・検品・軽作業向け、中量作業台は工具や治具を使う組立・整備向け、重量作業台は重い部材や高荷重作業向けです。均等荷重の目安で区分されることが多いです。' } },
    { '@type': 'Question', name: '耐荷重300kgの作業台でも業務用に使えますか？', acceptedAnswer: { '@type': 'Answer', text: '使えます。検品、梱包、軽い組立、部品整理などであれば、300kgクラスの軽量作業台が適している場合があります。' } },
    { '@type': 'Question', name: 'バイス付き作業台はどんな作業に向いていますか？', acceptedAnswer: { '@type': 'Answer', text: 'ワークを固定して締める、削る、簡単な整備を行う、部品を保持して加工補助をするような作業に向いています。一般作業台に後付けする場合は天板対応を確認してください。' } },
    { '@type': 'Question', name: '移動式重量作業台はどんな現場に向いていますか？', acceptedAnswer: { '@type': 'Answer', text: '工程変更やレイアウト変更が多い現場、作業台を必要な場所へ移動させたい現場に向いています。ただし移動時・作業時の固定、キャスター許容荷重、床面状態の確認が必要です。' } },
    { '@type': 'Question', name: '作業台の高さはどう選べばよいですか？', acceptedAnswer: { '@type': 'Answer', text: '座り作業・立ち作業・精密作業・力仕事で適した高さは変わります。厚生労働省の腰痛予防対策指針では、作業台の高さは肘の曲げ角度がおよそ90度になる高さが目安とされ、緻密な作業では高め、力を要する作業では低めが適切とされています。' } },
    { '@type': 'Question', name: '作業台と一緒にハンドパレットや台車も必要ですか？', acceptedAnswer: { '@type': 'Answer', text: '重い部品・工具・パレット品を扱う現場では、作業台だけでなく搬入・移動の導線も重要です。重量物はハンドパレット、小物や工具は運搬台車を組み合わせると効率的です。厚労省も重量物取扱いは台車等の補助機器で人力負担を軽減することを原則としています。' } },
    { '@type': 'Question', name: '作業台一覧から選ぶとき、最初に見るべき項目は？', acceptedAnswer: { '@type': 'Answer', text: 'まずは耐荷重、サイズ、天板材質、高さ、固定式か移動式か、オプション対応、搬入条件を確認しましょう。' } },
  ],
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://sagyou-navi.com/' },
    { '@type': 'ListItem', position: 2, name: '作業台・什器', item: 'https://sagyou-navi.com/' },
    { '@type': 'ListItem', position: 3, name: '頑丈な作業台の選び方' },
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
        <span>作業台・什器</span>
        <span className="mx-1">/</span>
        <span className="text-gray-700">頑丈な作業台の選び方</span>
      </nav>

      {/* カテゴリバッジ＋読了時間 */}
      <div className="mb-3 flex items-center gap-3">
        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">作業台・什器</span>
        <span className="text-xs text-gray-500">読了時間：約13分</span>
      </div>

      {/* H1 */}
      <h1 className="mb-4 text-2xl font-bold leading-tight text-gray-900 sm:text-3xl">
        頑丈な作業台の選び方｜業務用で失敗しない耐荷重・天板・用途別の比較ガイド
      </h1>

      {/* ヒーロー画像 */}
      <figure className="mb-6">
        <img
          src="/記事画像/heavy-duty-workbench-hero.jpg"
          alt="工場で頑丈な作業台を使って部品組立を行う作業者"
          className="w-full rounded-xl object-cover"
        />
      </figure>

      {/* 導入 */}
      <p className="mb-4 leading-relaxed">
        工場や倉庫、整備場で使う作業台は、「とにかく頑丈そうだから」「耐荷重が大きいから」という理由だけで選ぶと、現場に合わないことがあります。たとえば梱包や検品が中心なら軽量作業台で十分な場合もあります。一方で、重い工具や治具を置く、バイスでワークを固定する、金属部品を扱う、作業台ごと移動させたいといった現場では、中量・重量タイプや移動式タイプを検討したほうが安心です。
      </p>
      <p className="mb-4 leading-relaxed">
        また、厚生労働省の腰痛予防対策でも、作業台の高さや作業姿勢の見直しが重要とされています。頑丈な作業台を選ぶことは、単に壊れにくい台を選ぶことではなく、作業効率・安全性・腰への負担・材料の搬入動線まで含めて現場環境を整えることにつながります。
      </p>
      <p className="mb-6 leading-relaxed">
        この記事では、法人・現場向けに、頑丈な作業台の選び方を「耐荷重」「天板」「用途」「固定式・移動式」「搬入・運搬」まで含めてわかりやすく解説します。
      </p>

      {/* ★即答ボックス（AEO） */}
      <div className="mb-6 rounded-xl border border-amber-200 bg-amber-50 p-5">
        <p className="mb-2 text-sm font-bold text-amber-800">★ この記事の即答</p>
        <p className="text-sm leading-relaxed text-amber-900">
          <strong>頑丈な作業台は「耐荷重＋作業内容＋運搬動線」で選ぶ。</strong>
          梱包・検品なら300kg前後の軽量作業台、工具・治具・部品組立なら800kg前後、バイス作業・整備なら1200kg前後、重量物なら3000kgクラスや移動式が目安です。
          ただし<strong>耐荷重は均等に載せた場合の目安</strong>で、集中荷重・衝撃・打撃作業では注意が必要。天板材質・脚部構造・作業台の高さ・搬入動線まで確認し、重量物を運ぶ現場ではハンドパレットや運搬台車もセットで検討します。
        </p>
      </div>

      {/* 結論ボックス（青・border-l-4） */}
      <div className="mb-6 border-l-4 border-blue-600 bg-blue-50 p-5">
        <p className="mb-2 font-bold text-blue-900">まず結論：頑丈な作業台は「耐荷重＋作業内容＋運搬動線」で選ぶ</p>
        <ul className="list-disc space-y-1 pl-5 text-sm text-blue-900">
          <li>耐荷重の数字だけで判断しない</li>
          <li>軽作業・梱包・検品なら耐荷重300kg前後の軽量作業台でも十分な場合がある</li>
          <li>重い工具・治具・部品なら800kg／1200kgクラスが候補</li>
          <li>バイス作業ならバイス付き作業台や天板材質を確認</li>
          <li>重量物を頻繁に動かす現場はハンドパレット・運搬台車もセットで検討</li>
          <li>作業台の高さ・配置は腰への負担と作業効率に関わる</li>
        </ul>
      </div>

      {/* 注意ボックス（amber） */}
      <div className="mb-8 border-l-4 border-amber-500 bg-amber-50 p-5">
        <p className="mb-2 font-bold text-amber-800">選定・安全に関する注意</p>
        <p className="text-sm leading-relaxed text-amber-900">
          本記事は一般的な選定の考え方を示すものであり、特定用途での適合や安全を保証するものではありません。記載の耐荷重は<strong>均等に載せた場合の目安</strong>です。荷重が一部に集中する、打撃や衝撃が加わる、無理な姿勢で力をかけるといった使い方では、表示値より余裕を持った選定が必要になります。設置にあたっては<strong>床の耐荷重・水平・搬入経路・キャスター許容荷重</strong>を確認し、必ずメーカー仕様・取扱説明書・現場の安全ルールに従ってください。重量物の人力取扱いは腰痛のリスクがあるため、台車・補助機器の活用や複数人作業を検討してください。
        </p>
      </div>

      {/* H2-1 頑丈とは */}
      <h2 className="mt-10 mb-3 text-xl font-bold text-gray-900">頑丈な作業台とは？業務用で見るべきポイント</h2>
      <p className="mb-4 rounded-md bg-gray-100 p-3 text-sm text-gray-600">
        「頑丈」は耐荷重だけで決まりません。荷重のかかり方・天板材質・脚部構造・作業内容まで見て初めて、現場に合う頑丈さがわかります。
      </p>

      <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">「頑丈」は耐荷重だけで決まらない</h3>
      <p className="mb-4 text-sm leading-relaxed">同じ耐荷重でも、天板のたわみにくさ、脚部の溶接構造、ぐらつきを抑えるアジャスターの有無で実際の使い勝手は変わります。</p>

      <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">均等荷重と集中荷重・衝撃荷重の違い</h3>
      <p className="mb-4 text-sm leading-relaxed">カタログの耐荷重は天板全体に均等に載せた場合の目安です。重い物を一点に置く（集中荷重）、ハンマーで叩く（衝撃荷重）といった使い方では、表示値より余裕を持った選定が安心です。</p>

      <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">天板の材質・脚部構造・アジャスターも重要</h3>
      <p className="mb-4 text-sm leading-relaxed">油や薬品を扱うならリノリュームやポリ化粧板、打撃や溶接ならスチール天板など、作業内容で天板を選びます。脚部の溶接構造やアジャスターは、ぐらつき・たわみの抑制に関わります。</p>

      <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">作業内容によって必要な頑丈さは変わる</h3>
      <p className="mb-4 text-sm leading-relaxed">梱包・検品と、バイス固定の整備作業では必要な頑丈さがまったく違います。「何を・どう載せ・どう力をかけるか」から逆算して選びます。</p>

      {/* H2-2 軽量/中量/重量 */}
      <h2 className="mt-10 mb-3 text-xl font-bold text-gray-900">軽量・中量・重量作業台の違いは？</h2>
      <p className="mb-4 rounded-md bg-gray-100 p-3 text-sm text-gray-600">
        おおまかには均等荷重の目安で区分されます。軽量＝軽作業、中量＝組立/整備、重量＝高荷重作業。「大は小を兼ねる」とは限りません。
      </p>
      <ul className="mb-4 list-disc space-y-1 pl-5 text-sm">
        <li><strong>軽量作業台</strong>：梱包・検品・軽作業に向く（均等荷重100〜400kg程度が目安）</li>
        <li><strong>中量作業台</strong>：工具・治具・部品組立に向く（機械製造・鉄工所などでも使われる高荷重域）</li>
        <li><strong>重量作業台</strong>：重い部材・大型工具・高荷重作業に向く</li>
      </ul>
      <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">「大は小を兼ねる」とは限らない理由</h3>
      <p className="mb-4 text-sm leading-relaxed">重量タイプは頑丈な反面、重く大型で搬入や移動が大変、価格も上がります。軽作業中心の現場に過大なスペックは、設置性・コスト面でかえって不利になることがあります。</p>

      {/* H2-3 耐荷重クラス */}
      <h2 className="mt-10 mb-3 text-xl font-bold text-gray-900">耐荷重300kg・800kg・1200kg・3000kgはどう使い分ける？</h2>
      <p className="mb-4 rounded-md bg-gray-100 p-3 text-sm text-gray-600">
        作業内容と「何kgをどう載せるか」で目安が決まります。耐荷重は均等に載せた場合の値として見ます。
      </p>

      <figure className="mb-4">
        <img
          src="/記事画像/workbench-load-capacity-comparison.jpg"
          alt="軽量・中量・重量作業台の耐荷重比較イメージ"
          className="w-full rounded-xl object-cover"
        />
      </figure>

      <ul className="mb-4 list-disc space-y-1 pl-5 text-sm">
        <li><strong>300kgクラス</strong>：検品・梱包・軽い組立（例：TFAEL-1260＝1200×600×740mm・均等荷重300kg）</li>
        <li><strong>800kgクラス</strong>：中量部品・工具・治具（例：GWR-0945＝900×450×740mm・均等荷重800kg）</li>
        <li><strong>1200kgクラス</strong>：バイス作業・固定作業・整備（例：RHW-0960VRS＝900×600×740mm・均等荷重1200kg）</li>
        <li><strong>3000kgクラス</strong>：重量物・重作業（移動式重量タイプも候補）</li>
      </ul>
      <p className="mb-4 text-sm leading-relaxed">いずれも均等荷重の目安です。一点に重い物を載せる、打撃を加えるといった場合は、ワンランク上の耐荷重を選ぶと安心です。</p>

      {/* H2-4 用途別 */}
      <h2 className="mt-10 mb-3 text-xl font-bold text-gray-900">用途別に見る頑丈な作業台の選び方</h2>
      <p className="mb-4 rounded-md bg-gray-100 p-3 text-sm text-gray-600">
        作業の種類ごとに、優先する要素（天板・耐荷重・脚部・移動性）が変わります。
      </p>
      <ul className="mb-4 list-disc space-y-1 pl-5 text-sm">
        <li><strong>梱包・検品・軽作業</strong>：軽量作業台、汚れにくい天板、広い作業スペース</li>
        <li><strong>部品組立・メンテナンス</strong>：中量作業台、オプション対応、工具・治具を置ける耐荷重</li>
        <li><strong>バイス固定・整備作業</strong>：バイス付き作業台、天板材質、固定作業に耐える脚部構造</li>
        <li><strong>重量物の一時置き・加工補助</strong>：中荷重・重量作業台、床面の水平、荷重の偏りに注意</li>
        <li><strong>レイアウト変更が多い現場</strong>：移動式重量作業台、キャスター許容荷重、移動時と作業時の安全確認</li>
      </ul>

      {/* H2-5 バイス付き */}
      <h2 className="mt-10 mb-3 text-xl font-bold text-gray-900">バイス付き作業台はどんな現場に向いている？</h2>
      <p className="mb-4 rounded-md bg-gray-100 p-3 text-sm text-gray-600">
        ワークを固定して削る・締める・叩く作業に向きます。後付け前には天板の対応可否を確認します。
      </p>

      <figure className="mb-4">
        <img
          src="/記事画像/workbench-with-vise-industrial-use.jpg"
          alt="バイス付きの頑丈な作業台で部材を固定する作業イメージ"
          className="w-full rounded-xl object-cover"
        />
      </figure>

      <ul className="mb-4 list-disc space-y-1 pl-5 text-sm">
        <li>ワークを固定して削る・締める・叩く作業に向く</li>
        <li>一般作業台に後付けする前に天板対応・取付方法を確認する</li>
        <li>回転台付き・アンビルバイス付きは作業の向きを変えやすい</li>
        <li>購入前に「どんな作業をどれくらいの力で行うか」を整理する</li>
      </ul>
      <p className="mb-4 text-sm leading-relaxed">RHW型のようにバイスでワークを固定でき、主要部が溶接構造で耐久性に優れるタイプは、整備・組立・加工補助に向くとされています。</p>

      {/* H2-6 高さ・腰 */}
      <h2 className="mt-10 mb-3 text-xl font-bold text-gray-900">作業台の高さ・配置は作業効率と腰の負担に関係する</h2>
      <p className="mb-4 rounded-md bg-gray-100 p-3 text-sm text-gray-600">
        作業台は「物を置く台」ではなく、作業姿勢・腰の負担・効率に関わる設備です。高さと配置を作業内容に合わせます。
      </p>

      <figure className="mb-4">
        <img
          src="/記事画像/workbench-height-ergonomics.jpg"
          alt="作業台の高さと姿勢を確認する工場担当者"
          className="w-full rounded-xl object-cover"
        />
      </figure>

      <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">高さ740mmは座り作業・軽作業で使われやすい標準的な高さ</h3>
      <p className="mb-4 text-sm leading-relaxed">多くの作業台が高さ740mm前後を標準としています。厚生労働省の腰痛予防対策指針では、作業台の高さは肘の曲げ角度がおよそ90度になる高さが目安とされています。</p>

      <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">立ち作業・精密作業・力仕事で適した高さは変わる</h3>
      <p className="mb-4 text-sm leading-relaxed">指針では、緻密な作業では高め、力を要する作業では低めが適切とされ、作業内容により適宜調節することが示されています。</p>

      <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">作業対象に近づける配置にする</h3>
      <p className="mb-4 text-sm leading-relaxed">前屈・ひねりを減らすため、作業対象を体の正面・手の届く範囲に置けるレイアウトにします。</p>

      <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">腰への負担を減らすには台車やハンドパレットも活用する</h3>
      <p className="mb-4 text-sm leading-relaxed">厚労省は、重量物の取扱いは自動化を原則とし、困難な場合は台車・補助機器で人力の負担を軽減することを示しています。作業台までの運搬にも補助機器を活用しましょう。</p>

      {/* H2-7 運搬用品（導線・深掘りはしない） */}
      <h2 className="mt-10 mb-3 text-xl font-bold text-gray-900">頑丈な作業台と一緒に検討したい運搬用品</h2>
      <p className="mb-4 rounded-md bg-gray-100 p-3 text-sm text-gray-600">
        頑丈な作業台が必要な現場ほど、重い材料や部品を作業台の近くまで運ぶ導線が重要です。搬入・荷降ろし・保管まで含めて考えます。
      </p>

      <figure className="mb-4">
        <img
          src="/記事画像/workbench-hand-pallet-material-flow.jpg"
          alt="作業台とハンドパレットを組み合わせた重量物搬入のイメージ"
          className="w-full rounded-xl object-cover"
        />
      </figure>

      <ul className="mb-4 list-disc space-y-1 pl-5 text-sm">
        <li><strong>ハンドパレット</strong>：パレット品・重量物を作業エリアまで水平移動</li>
        <li><strong>運搬台車</strong>：工具・部品・資材の小回り移動</li>
      </ul>
      <p className="mb-4 text-sm leading-relaxed">
        ハンドパレットの選び方や使い分けは
        <Link href="/articles/trusco-hand-pallet-erabikata" className="text-blue-700 underline">ハンドパレットの選び方</Link>
        ・
        <Link href="/articles/hand-lift-precautions" className="text-blue-700 underline">ハンドリフトの注意点</Link>
        で詳しく解説しています。本記事では作業台の選定を主軸に、運搬は導線として整理します。
      </p>

      {/* H2-8 比較表 */}
      <h2 className="mt-10 mb-3 text-xl font-bold text-gray-900">頑丈な作業台の比較表</h2>
      <p className="mb-4 rounded-md bg-gray-100 p-3 text-sm text-gray-600">
        種類ごとの耐荷重目安・向いている作業・注意点を一覧で整理します。
      </p>
      <div className="my-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 p-2">種類</th>
              <th className="border border-gray-200 p-2">耐荷重目安</th>
              <th className="border border-gray-200 p-2">向いている作業</th>
              <th className="border border-gray-200 p-2">注意点</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-gray-200 p-2">軽量作業台</td><td className="border border-gray-200 p-2">〜300kg前後</td><td className="border border-gray-200 p-2">梱包・検品・軽い組立</td><td className="border border-gray-200 p-2">重量物・打撃作業には不向き</td></tr>
            <tr className="bg-gray-50"><td className="border border-gray-200 p-2">中荷重作業台</td><td className="border border-gray-200 p-2">800kg前後</td><td className="border border-gray-200 p-2">工具・治具・部品組立</td><td className="border border-gray-200 p-2">サイズと天板材質を確認</td></tr>
            <tr><td className="border border-gray-200 p-2">中量作業台</td><td className="border border-gray-200 p-2">1200kg前後</td><td className="border border-gray-200 p-2">バイス作業・固定作業・整備</td><td className="border border-gray-200 p-2">搬入・床面・設置場所を確認</td></tr>
            <tr className="bg-gray-50"><td className="border border-gray-200 p-2">重量作業台</td><td className="border border-gray-200 p-2">3000kg前後</td><td className="border border-gray-200 p-2">重量物・重作業</td><td className="border border-gray-200 p-2">移動時・床耐荷重・安全確認が必要</td></tr>
            <tr><td className="border border-gray-200 p-2">移動式作業台</td><td className="border border-gray-200 p-2">商品により異なる</td><td className="border border-gray-200 p-2">レイアウト変更・工程間移動</td><td className="border border-gray-200 p-2">キャスター許容荷重と固定方法を確認</td></tr>
          </tbody>
        </table>
      </div>

      {/* H2-9 チェックリスト */}
      <h2 className="mt-10 mb-3 text-xl font-bold text-gray-900">導入前チェックリスト</h2>
      <p className="mb-4 rounded-md bg-gray-100 p-3 text-sm text-gray-600">
        作業内容・荷重・設置環境・作業者の4軸で確認すると、選定の抜けを防げます。社内稟議にもそのまま使えます。
      </p>
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <p className="mb-2 font-bold text-gray-800">作業内容</p>
          <ul className="space-y-1 text-sm">
            <li>☐ 梱包・検品か</li>
            <li>☐ 部品組立か</li>
            <li>☐ バイス作業か</li>
            <li>☐ 重量物の一時置きか</li>
            <li>☐ レイアウト変更が多いか</li>
          </ul>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <p className="mb-2 font-bold text-gray-800">荷重</p>
          <ul className="space-y-1 text-sm">
            <li>☐ 最大何kgを載せるか</li>
            <li>☐ 荷重は均等にかかるか</li>
            <li>☐ 一部に集中するか</li>
            <li>☐ 衝撃や打撃があるか</li>
          </ul>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <p className="mb-2 font-bold text-gray-800">設置環境</p>
          <ul className="space-y-1 text-sm">
            <li>☐ 床は水平か・床耐荷重は十分か</li>
            <li>☐ 作業スペースは足りるか</li>
            <li>☐ 搬入経路は確保できるか</li>
            <li>☐ ハンドパレットや台車が通れるか</li>
          </ul>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <p className="mb-2 font-bold text-gray-800">作業者</p>
          <ul className="space-y-1 text-sm">
            <li>☐ 座り作業か立ち作業か</li>
            <li>☐ 作業姿勢に無理がないか</li>
            <li>☐ 工具や部品に手が届きやすいか</li>
            <li>☐ 作業者が複数人で使うか</li>
          </ul>
        </div>
      </div>

      {/* H2-10 商品導線 */}
      <h2 className="mt-10 mb-3 text-xl font-bold text-gray-900">作業用品ナビおすすめの関連商品</h2>
      <p className="mb-4 rounded-md bg-gray-100 p-3 text-sm text-gray-600">
        用途別に作業台と運搬用品を紹介します。価格・在庫・仕様は変動するため、最新情報・正確な寸法や耐荷重は各商品ページでご確認ください。
      </p>

      <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">頑丈な作業台を探す</h3>
      <ProductGrid items={workbenches} />
      <div className="mb-8">
        <ListCta href={LIST.workbench} label="作業台一覧を見る" content="cta_workbench_list" />
      </div>

      <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">重量物の搬入・移動にはハンドパレット</h3>
      <ProductGrid items={pallets} />
      <div className="mb-8">
        <ListCta href={LIST.handpallet} label="ハンドパレット・ハンドリフター一覧を見る" content="cta_handpallet_list" />
      </div>

      <figure className="mb-4">
        <img
          src="/記事画像/workbench-platform-cart-workflow.jpg"
          alt="運搬台車で工具や部品を作業台へ運ぶ作業動線"
          className="w-full rounded-xl object-cover"
        />
      </figure>
      <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">工具・部材の小回り移動には運搬台車</h3>
      <ProductGrid items={carts} />
      <div className="mb-8">
        <ListCta href={LIST.cart} label="運搬台車一覧を見る" content="cta_cart_list" />
      </div>

      {/* FAQ */}
      <h2 className="mt-10 mb-3 text-xl font-bold text-gray-900">よくある質問（FAQ）</h2>
      <div className="mb-8 space-y-2">
        {[
          { q: '頑丈な作業台は耐荷重だけで選べばよいですか？', a: '耐荷重は重要ですが、それだけでは不十分です。荷重が均等にかかるのか一部に集中するのか、打撃やバイス固定があるのか、天板材質や脚部構造、設置環境まで確認しましょう。' },
          { q: '軽量作業台と中量作業台、重量作業台の違いは何ですか？', a: '一般的には、軽量作業台は梱包・検品・軽作業向け、中量作業台は工具や治具を使う組立・整備向け、重量作業台は重い部材や高荷重作業向けです。均等荷重の目安で区分されることが多いです。' },
          { q: '耐荷重300kgの作業台でも業務用に使えますか？', a: '使えます。検品、梱包、軽い組立、部品整理などであれば、300kgクラスの軽量作業台が適している場合があります。' },
          { q: 'バイス付き作業台はどんな作業に向いていますか？', a: 'ワークを固定して締める、削る、簡単な整備を行う、部品を保持して加工補助をするような作業に向いています。一般作業台に後付けする場合は天板対応を確認してください。' },
          { q: '移動式重量作業台はどんな現場に向いていますか？', a: '工程変更やレイアウト変更が多い現場、作業台を必要な場所へ移動させたい現場に向いています。ただし移動時・作業時の固定、キャスター許容荷重、床面状態の確認が必要です。' },
          { q: '作業台の高さはどう選べばよいですか？', a: '座り作業・立ち作業・精密作業・力仕事で適した高さは変わります。厚生労働省の腰痛予防対策指針では、作業台の高さは肘の曲げ角度がおよそ90度になる高さが目安とされ、緻密な作業では高め、力を要する作業では低めが適切とされています。' },
          { q: '作業台と一緒にハンドパレットや台車も必要ですか？', a: '重い部品・工具・パレット品を扱う現場では、作業台だけでなく搬入・移動の導線も重要です。重量物はハンドパレット、小物や工具は運搬台車を組み合わせると効率的です。厚労省も重量物取扱いは台車等の補助機器で人力負担を軽減することを原則としています。' },
          { q: '作業台一覧から選ぶとき、最初に見るべき項目は？', a: 'まずは耐荷重、サイズ、天板材質、高さ、固定式か移動式か、オプション対応、搬入条件を確認しましょう。' },
        ].map((item) => (
          <details key={item.q} className="rounded-lg border border-gray-200 bg-white p-4">
            <summary className="cursor-pointer font-semibold text-gray-900">{item.q}</summary>
            <p className="mt-2 text-sm leading-relaxed text-gray-700">{item.a}</p>
          </details>
        ))}
      </div>

      {/* まとめ */}
      <h2 className="mt-10 mb-3 text-xl font-bold text-gray-900">まとめ｜作業台は「耐荷重・作業内容・作業姿勢・運搬動線」で選ぶ</h2>
      <p className="mb-4 leading-relaxed">
        頑丈な作業台は、耐荷重の数字だけでなく、荷重のかかり方・天板材質・脚部構造・作業姿勢・搬入や運搬動線をセットで考えて選ぶことが大切です。梱包・検品なら軽量、組立・整備なら中量、重量物や移動なら重量・移動式というように、作業内容から逆算しましょう。耐荷重は均等荷重の目安であること、床耐荷重・搬入条件・メーカー仕様の確認が必要であることも忘れずに。重量物を扱う現場では、ハンドパレットや運搬台車もあわせて整えると、安全性と作業効率の両方を高められます。
      </p>

      {/* 記事末CTA */}
      <div className="my-8 rounded-xl border border-gray-200 bg-gray-50 p-6">
        <p className="mb-4 font-bold text-gray-900">まとめて探す</p>
        <div className="flex flex-wrap gap-3">
          <ListCta href={LIST.workbench} label="作業台一覧" content="cta_workbench_footer" />
          <ListCta href={LIST.handpallet} label="ハンドパレット・ハンドリフター一覧" content="cta_handpallet_footer" />
          <ListCta href={LIST.cart} label="運搬台車一覧" content="cta_cart_footer" />
          <ListCta href={LIST.trusco} label="トラスコ中山商品一覧" content="cta_trusco_footer" />
        </div>
      </div>

      {/* 関連記事 */}
      <h2 className="mt-10 mb-3 text-xl font-bold text-gray-900">関連記事</h2>
      <ul className="mb-8 space-y-2 text-sm">
        <li><Link href="/articles/trusco-hand-pallet-erabikata" className="text-blue-700 underline">トラスコのハンドパレット（ハンドリフト）の選び方｜フォーク長・能力・低床の違い</Link></li>
        <li><Link href="/articles/hand-lift-precautions" className="text-blue-700 underline">ハンドリフトの注意点｜事故を防ぐ使い方とハンドパレット・ハンドリフターの選び分け</Link></li>
        <li><Link href="/articles/safety-shoes-replacement" className="text-blue-700 underline">安全靴の交換時期はいつ？靴底・先芯・破れの見分け方と買い替え目安</Link></li>
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
