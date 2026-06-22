import Link from 'next/link';

export const metadata = {
  title:
    'ヘルメットの熱中症リスクとは？屋外作業・工事現場で外せない保護具の暑さ対策と選び方',
  description:
    'ヘルメットは屋外作業や工事現場で欠かせない保護具ですが、夏場は頭部のムレや熱こもりによる熱中症リスクに注意が必要です。通気孔付き・遮熱・軽量ヘルメットの選び方、防暑タレやインナー、保護メガネ、手袋、冷却ベスト、工場扇との組み合わせまで現場目線で解説します。',
};

// ── UTMヘルパー：baseに ? があれば & で、なければ ? で連結。baseは絶対に再エンコードしない。
const buildUrl = (base: string, utmContent: string) => {
  const sep = base.includes('?') ? '&' : '?';
  return `${base}${sep}utm_source=sagyou_navi&utm_medium=article&utm_campaign=helmet_heatstroke_risk&utm_content=${utmContent}`;
};

// ── store別 商品URL生成（取り違え防止）
const itemUrl = (store: 'yahoo' | 'rakuten' | 'gc', id: string) => {
  if (store === 'yahoo') return `https://store.shopping.yahoo.co.jp/signcity-yshop/${id}.html`;
  if (store === 'rakuten') return `https://item.rakuten.co.jp/signcity2024/${id}/`; // 末尾スラッシュ必須
  return `https://www.gc-select.com/products/${id}`; // gc
};

// ── カテゴリ一覧URL（Yahoo!・パス型・sc_i等は付けない）
const LIST = {
  ppe: 'https://store.shopping.yahoo.co.jp/signcity-yshop/caddb8eeb6.html',       // 保護具一覧
  heatstroke: 'https://store.shopping.yahoo.co.jp/signcity-yshop/eab32ec7ce6.html', // 熱中症対策商品一覧
  trusco: 'https://store.shopping.yahoo.co.jp/signcity-yshop/a5c8a5e9a5.html',     // トラスコ中山一覧
};

type Product = { id: string; store: 'yahoo' | 'rakuten' | 'gc'; name: string; note: string };

// ヘルメット本体（Yahoo!）
const helmets: Product[] = [
  { id: '158773', store: 'yahoo', name: 'TRUSCO ヘルメット 高通気タイプ ブルー DPM-1820B', note: 'ムレ対策・通気性重視の屋外作業向け' },
  { id: '158791', store: 'yahoo', name: 'TRUSCO 遮熱 涼帽 通気孔付 ホワイト TD-HB-FV-KP-W', note: '直射日光下の屋外作業・道路工事・屋上作業向け' },
  { id: '158777', store: 'yahoo', name: 'TRUSCO 超軽量 軽帽 通気孔付 フレッシュグリーン TD-AA17V-GN', note: '長時間着用・巡回作業・首肩の負担軽減' },
  { id: '158783', store: 'yahoo', name: 'TRUSCO ヘルメット アメリカンタイプ ホワイト DPM-0169W', note: '汎用・予備・基本保護具として' },
];

// ヘルメット関連暑さ対策用品（gc）
const helmetCooling: Product[] = [
  { id: '1121810414', store: 'gc', name: '涼かちゃん ヘルメットバイザーⅡ', note: '遮熱（ダイオミラー採用）・UVカット率98％以上' },
  { id: '1121810108', store: 'gc', name: 'ヘルメット取付式 アクア防暑タレ', note: '水で濡らして気化熱・3分割で風通しを確保' },
  { id: '1121983004', store: 'gc', name: 'ヘルメット取付式送風機 WindyⅢプラス', note: '防暑タレと組み合わせ首元へ送風' },
  { id: '1121910324', store: 'gc', name: 'アイスジェルインナーハット「鈴風」', note: 'PCM繊維＋冷感ジェルで頭部・首裏を冷却' },
  { id: '1121910323', store: 'gc', name: 'アイスジェルヘルメットインナー「あたまんぞく」', note: '頭部の冷却補助インナー' },
  { id: '1121983007', store: 'gc', name: '送風機内蔵ヘルメット Windy Helmet', note: '外気吸入と熱気排出の切替・稼働約8時間' },
];

// 保護メガネ（Yahoo!）
const glasses: Product[] = [
  { id: '162723', store: 'yahoo', name: '一眼型セーフティグラス 超軽量フィットタイプ', note: '軽量・フィット感重視' },
  { id: '162834', store: 'yahoo', name: '一眼型オーバーセーフティグラス ゴーグルタイプ', note: 'メガネの上から着用' },
  { id: '162699', store: 'yahoo', name: '一眼型アジア人向けフィットグラス', note: '鼻あて・フィット形状' },
];

// 手袋（Yahoo!）
const gloves: Product[] = [
  { id: '237012', store: 'yahoo', name: '耐切創・耐突手袋 L', note: '切創・突き刺し対策' },
  { id: '236630', store: 'yahoo', name: '手甲ガード付き耐切創手袋 XL', note: '手甲まで保護' },
  { id: '234787', store: 'yahoo', name: 'アラミド手袋 7ゲージ Lサイズ', note: '耐切創の定番素材' },
  { id: '234828', store: 'yahoo', name: '耐切創手袋 M/L兼用 ブラック', note: '汎用・着用負担少なめ' },
];

// インナー・冷却ベスト（gc＋楽天 混在）
const innerVest: Product[] = [
  { id: '1124300805', store: 'gc', name: 'ICE EDGE 冷感コンプレッションシャツ', note: '作業中の体感負荷を下げる' },
  { id: '1124813035', store: 'gc', name: 'インナー・冷却ウェア', note: '冷却・空調系インナー' },
  { id: '171708', store: 'rakuten', name: '冷却ベスト（空調・保冷系）', note: '体に近い位置を冷やす' },
  { id: '171698', store: 'rakuten', name: '冷却ベスト（空調・保冷系）', note: '高温作業の体感緩和' },
];

// 工場扇・冷風機（楽天）
const fans: Product[] = [
  { id: '171563', store: 'rakuten', name: '工場扇・送風機', note: '作業場・休憩所の空気循環' },
  { id: '171963', store: 'rakuten', name: '工場扇・送風機', note: '広い範囲に送風' },
  { id: '171990', store: 'rakuten', name: '工場扇・冷風機', note: '休憩所まわりに' },
  { id: '172076', store: 'rakuten', name: '工場扇・冷風機', note: 'スポット送風に' },
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
    { '@type': 'Question', name: 'ヘルメットをかぶると熱中症リスクは上がりますか？', acceptedAnswer: { '@type': 'Answer', text: 'ヘルメット自体が直接熱中症を起こすわけではありませんが、夏場は頭部に熱や湿気がこもりやすく、直射日光や高温多湿環境、作業強度が重なると負担が増えます。通気性・遮熱性のあるヘルメットや防暑用品を組み合わせて対策することが大切です。' } },
    { '@type': 'Question', name: '暑いときはヘルメットを外してもよいですか？', acceptedAnswer: { '@type': 'Answer', text: '飛来・落下物や墜落時の危険がある現場では、自己判断でヘルメットを外すのは危険です。暑さを感じた場合は職長や責任者へ報告し、決められた休憩場所で体を冷やす運用にしてください。' } },
    { '@type': 'Question', name: '通気孔付きヘルメットはどんな現場に向いていますか？', acceptedAnswer: { '@type': 'Answer', text: '屋外作業や高温多湿の現場など、ヘルメット内のムレを抑えたい現場に向いています。ただし、電気作業や絶縁性能が求められる作業では、通気孔なしかつ電気対応モデルが必要なため、使用可否の確認が必要です。' } },
    { '@type': 'Question', name: '遮熱ヘルメットはどんな現場に向いていますか？', acceptedAnswer: { '@type': 'Answer', text: '道路工事、屋上作業、土木作業、イベント設営など、直射日光を受けやすい現場に向いています。通気孔付きや軽量タイプとあわせて検討すると選びやすくなります。' } },
    { '@type': 'Question', name: 'ヘルメットインナーや防暑タレは必要ですか？', acceptedAnswer: { '@type': 'Answer', text: '直射日光や汗、首元の暑さが気になる現場では有効な選択肢です。ただし、ヘルメットのフィット感やあごひも、視界、安全規格に影響しないか確認して使う必要があります。' } },
    { '@type': 'Question', name: '保護メガネや手袋も熱中症対策に関係しますか？', acceptedAnswer: { '@type': 'Answer', text: '関係します。保護メガネや手袋、長袖作業着を着用すると体感的な暑さやムレが増える場合があります。安全性を確保しながら、通気性・軽量性・フィット感を確認することが重要です。' } },
    { '@type': 'Question', name: '工場や倉庫でもヘルメット熱中症対策は必要ですか？', acceptedAnswer: { '@type': 'Answer', text: '必要です。屋内でも熱源・湿度・風通しの悪さがあると熱中症リスクは高まります。WBGT確認、工場扇・冷風機、冷却インナー、休憩ルールとあわせて対策しましょう。' } },
    { '@type': 'Question', name: 'ヘルメット選びだけで熱中症対策は十分ですか？', acceptedAnswer: { '@type': 'Answer', text: '十分ではありません。ヘルメットの見直しは重要ですが、WBGT測定、休憩、水分・塩分補給、冷却ベスト、工場扇、体調不良時の報告体制まで含めて運用することが大切です。' } },
  ],
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://sagyou-navi.com/' },
    { '@type': 'ListItem', position: 2, name: '保護具・安全衛生', item: 'https://sagyou-navi.com/' },
    { '@type': 'ListItem', position: 3, name: 'ヘルメットの熱中症リスク' },
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
        <span className="text-gray-700">ヘルメットの熱中症リスク</span>
      </nav>

      {/* カテゴリバッジ＋読了時間 */}
      <div className="mb-3 flex items-center gap-3">
        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">保護具・安全衛生</span>
        <span className="text-xs text-gray-500">読了時間：約13分</span>
      </div>

      {/* H1 */}
      <h1 className="mb-4 text-2xl font-bold leading-tight text-gray-900 sm:text-3xl">
        ヘルメットの熱中症リスクとは？屋外作業・工事現場で外せない保護具の暑さ対策と選び方
      </h1>

      {/* ヒーロー画像 */}
      <figure className="mb-6">
        <img
          src="/記事画像/helmet-heatstroke-risk-hero.jpg"
          alt="屋外工事現場でヘルメット着用時の暑さ対策を確認する作業員"
          className="w-full rounded-xl object-cover"
        />
      </figure>

      {/* 導入 */}
      <p className="mb-4 leading-relaxed">
        夏場の建設現場や屋外作業では、「ヘルメットの中が蒸れる」「頭が暑い」「休憩しても熱が抜けにくい」と感じる場面が増えます。一方で、飛来・落下物や墜落時の危険がある現場では、暑いからといってヘルメットを外すわけにはいきません。
      </p>
      <p className="mb-4 leading-relaxed">
        大切なのは、ヘルメットを外すことではなく、<strong>現場に合った通気性・遮熱性・軽量性のあるヘルメットを選び、インナーや防暑タレ、冷却ベスト、工場扇などと組み合わせて熱中症リスクを下げること</strong>です。
      </p>
      <p className="mb-6 leading-relaxed">
        この記事では、屋外作業・工事現場・工場・倉庫などの安全衛生担当者や購買担当者向けに、ヘルメット着用時の熱中症リスク、現場別の対策、ヘルメットや保護具の選び方をわかりやすく解説します。
      </p>

      {/* ★即答ボックス（AEO） */}
      <div className="mb-6 rounded-xl border border-amber-200 bg-amber-50 p-5">
        <p className="mb-2 text-sm font-bold text-amber-800">★ この記事の即答</p>
        <p className="text-sm leading-relaxed text-amber-900">
          <strong>ヘルメットの熱中症リスクは「外す」のではなく「選び方と組み合わせ」で下げるのが基本。</strong>
          通気孔付き・遮熱・軽量タイプから現場に合うヘルメットを選び、防暑タレ・インナー・送風機・冷却ベスト・工場扇で補助します。
          <strong>電気作業や絶縁性能が必要な現場では、通気孔なしかつ電気対応モデル</strong>を選ぶ必要があります。さらにWBGT測定・休憩・水分塩分補給・体調不良時の報告体制までセットで運用することが重要です。
        </p>
      </div>

      {/* 結論ボックス（青・border-l-4） */}
      <div className="mb-6 border-l-4 border-blue-600 bg-blue-50 p-5">
        <p className="mb-2 font-bold text-blue-900">結論：ヘルメットの熱中症リスクは“外す”ではなく“選び方と組み合わせ”で下げる</p>
        <ul className="list-disc space-y-1 pl-5 text-sm text-blue-900">
          <li>安全に欠かせない保護具なので、暑さを理由に安易に外す対策は危険</li>
          <li>夏場は頭部のムレ・直射日光・汗・作業強度が重なりリスクが高まる</li>
          <li>対策は通気孔付き・遮熱・軽量タイプのヘルメット選定が基本</li>
          <li>防暑タレ・インナー・送風機・冷却ベスト・工場扇を組み合わせる</li>
          <li>電気工事や粉じん・飛散物がある現場では通気孔・保護メガネ・手袋の相性も確認</li>
          <li>WBGT測定・休憩・水分塩分補給・報告体制もセットで運用する</li>
        </ul>
      </div>

      {/* 注意ボックス（amber：YMYL） */}
      <div className="mb-8 border-l-4 border-amber-500 bg-amber-50 p-5">
        <p className="mb-2 font-bold text-amber-800">安全・熱中症に関する注意</p>
        <p className="text-sm leading-relaxed text-amber-900">
          本記事は暑さ対策・熱中症予防の一般的な情報提供であり、医療的な診断ではありません。紹介する用品は予防やクールダウンを助けるものであり、熱中症を確実に防ぐものではありません。<strong>意識がもうろうとしている、自力で水分が取れない、呼びかけへの反応がおかしい、休んでも改善しない</strong>場合は重症のおそれがあるため、ためらわず救急要請（119）や医療機関の受診を行ってください。判断に迷うときは#7119も活用できます。ヘルメットは飛来・落下物や墜落から頭部を守る保護具のため、<strong>暑さを理由に自己判断で外さない</strong>でください。電気作業・絶縁性能・保護帽規格に関わる選定は、必ず現場ルール・メーカー仕様・取扱説明書・専門家の確認を優先してください。最新の基準・運用は厚生労働省・環境省・各自治体の情報もご確認ください。
        </p>
      </div>

      {/* H2-1 リスクになる理由 */}
      <h2 className="mt-10 mb-3 text-xl font-bold text-gray-900">ヘルメットは熱中症リスクになる？屋外作業で注意すべき理由</h2>
      <p className="mb-4 rounded-md bg-gray-100 p-3 text-sm text-gray-600">
        ヘルメットそのものが熱中症の原因ではありませんが、夏場は頭部に熱と湿気がこもりやすく、他の保護具と重なって放熱しにくくなります。
      </p>

      <figure className="mb-4">
        <img
          src="/記事画像/helmet-heat-buildup-countermeasure.jpg"
          alt="ヘルメット内部のムレを抑える通気と冷却用品のイメージ"
          className="w-full rounded-xl object-cover"
        />
      </figure>

      <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">ヘルメット内部に熱と湿気がこもりやすい</h3>
      <p className="mb-4 text-sm leading-relaxed">密閉性の高い帽体や発泡スチロール内装は、汗の湿気や体熱がこもりやすく、頭部の不快感につながります。暑さは集中力や判断力の低下、ひいては仕上がり品質に影響することもあるとされています。</p>

      <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">直射日光・照り返し・無風状態で頭部の負担が増える</h3>
      <p className="mb-4 text-sm leading-relaxed">直射日光下では帽体内の温度が上がりやすく、照り返しや無風が重なると放熱しにくくなります。屋上・道路・舗装作業などは特に注意が必要です。</p>

      <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">保護メガネ・手袋・長袖作業着との組み合わせで全身の放熱が難しくなる</h3>
      <p className="mb-4 text-sm leading-relaxed">頭・目・手・全身と保護具を重ねるほど、体感的な暑さやムレは増えます。ヘルメット単体ではなく、保護具全体で暑さ対策を考えることが重要です。</p>

      <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">ただし、暑いからといってヘルメットを外すのは危険</h3>
      <p className="mb-4 text-sm leading-relaxed">飛来・落下物や墜落のリスクがある現場では、ヘルメットは外せません。対策は「外す」ではなく「暑さに強い仕様へ見直す・補助する」が基本です。</p>

      {/* H2-2 基本対策 */}
      <h2 className="mt-10 mb-3 text-xl font-bold text-gray-900">ヘルメット着用時の熱中症リスクを下げる基本対策は？</h2>
      <p className="mb-4 rounded-md bg-gray-100 p-3 text-sm text-gray-600">
        通気・遮熱・軽量の選定を基本に、防暑タレやインナーで補助し、WBGTと休憩・水分補給をルール化します。
      </p>
      <ol className="mb-4 list-decimal space-y-2 pl-5 text-sm">
        <li><strong>通気性のよいヘルメットを選ぶ</strong>：ムレを逃がしやすい通気孔付き・通気性の高いライナーが基本</li>
        <li><strong>直射日光が強い現場では遮熱タイプを検討</strong>：帽体内の温度上昇を抑える</li>
        <li><strong>長時間作業では軽量タイプ</strong>：首・肩の負担を減らす</li>
        <li><strong>防暑タレやインナーで頭部・首元を補助</strong>：気化熱・冷感ジェル・日射カット</li>
        <li><strong>WBGTを確認し、休憩と水分補給をルール化</strong>：感覚論ではなく数値で判断</li>
      </ol>
      <p className="mb-4 text-sm leading-relaxed">
        厚生労働省系の資料でも、熱を吸収・保熱しやすい服装を避け、透湿性・通気性の良い服装を準備すること、直射日光下では通気性の良い帽子・ヘルメット等を準備することが示されています。
      </p>

      {/* H2-3 通気/遮熱/軽量/標準 */}
      <h2 className="mt-10 mb-3 text-xl font-bold text-gray-900">通気孔付き・遮熱・軽量ヘルメットはどう選ぶ？</h2>
      <p className="mb-4 rounded-md bg-gray-100 p-3 text-sm text-gray-600">
        現場の条件（直射日光・通気・作業時間・電気作業の有無）でタイプを選び分けます。
      </p>

      <figure className="mb-4">
        <img
          src="/記事画像/helmet-type-comparison.jpg"
          alt="通気孔付きヘルメット、遮熱ヘルメット、軽量ヘルメットの比較イメージ"
          className="w-full rounded-xl object-cover"
        />
      </figure>

      <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">通気孔付きヘルメットが向く現場</h3>
      <p className="mb-4 text-sm leading-relaxed">屋外作業・土木工事・一般建設作業・蒸れやすい高温環境など。ムレを逃がしやすいのが利点です。</p>

      <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">遮熱ヘルメットが向く現場</h3>
      <p className="mb-4 text-sm leading-relaxed">直射日光を受けやすい道路工事・屋上作業・夏場の屋外イベント設営・日陰を作りにくい現場など。遮熱樹脂の練り込みタイプは傷がついても性能が落ちにくいとされています。</p>

      <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">超軽量ヘルメットが向く現場</h3>
      <p className="mb-4 text-sm leading-relaxed">長時間着用・巡回作業・工場や倉庫の点検など。首・肩への負担を下げたい現場に向きます。</p>

      <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">標準タイプが向く現場</h3>
      <p className="mb-4 text-sm leading-relaxed">暑熱リスクより基本保護性能・価格・汎用性を優先する現場、短時間作業、予備用など。</p>

      <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">電気作業・絶縁性能が必要な現場は仕様確認を優先する</h3>
      <p className="mb-4 text-sm leading-relaxed">電気工事では、通気孔付きが使えない場合があります。電気用に使う場合は<strong>通気孔なしかつ電気対応モデル</strong>を選ぶ必要があるとされています。暑さ対策仕様だけで選ばず、必ず現場ルール・規格・メーカー仕様を確認してください。</p>

      {/* ヘルメット商品（Yahoo!） */}
      <ProductGrid items={helmets} />

      {/* H2-4 現場別 */}
      <h2 className="mt-10 mb-3 text-xl font-bold text-gray-900">現場別に見るヘルメット暑さ対策</h2>
      <p className="mb-4 rounded-md bg-gray-100 p-3 text-sm text-gray-600">
        現場ごとに優先する対策が変わります。建設・道路屋上・工場倉庫・電気工事・イベントで整理します。
      </p>

      <figure className="mb-4">
        <img
          src="/記事画像/helmet-neck-shade-summer-work.jpg"
          alt="ヘルメット用防暑タレで首元の日差しを防ぐ屋外作業員"
          className="w-full rounded-xl object-cover"
        />
      </figure>

      <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">建設現場・土木工事</h3>
      <p className="mb-4 text-sm leading-relaxed">通気孔付きまたは遮熱タイプを優先。防暑タレで首元の日射を軽減し、朝礼時にWBGT・休憩間隔を共有します。</p>

      <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">屋上・道路・舗装作業</h3>
      <p className="mb-4 text-sm leading-relaxed">照り返しが強いため遮熱ヘルメットを強く検討。工場扇や休憩所、冷却ベスト・冷感インナーとの併用も有効です。</p>

      <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">工場・倉庫</h3>
      <p className="mb-4 text-sm leading-relaxed">直射日光より熱源・無風・湿度に注意。軽量ヘルメット＋送風機・工場扇の組み合わせが有効。保護メガネが曇る場合は通気性・フィット性も確認します。</p>

      <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">電気工事・設備工事</h3>
      <p className="mb-4 text-sm leading-relaxed">通気孔付きが使えるか確認し、絶縁性能や現場ルールを優先。暑さ対策仕様だけで選ばないことが重要です。電気作業・絶縁性能が関わる場合は必ず規格・メーカー仕様・現場ルールを確認してください。</p>

      <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">屋外イベント設営</h3>
      <p className="mb-4 text-sm leading-relaxed">日陰を作りにくく直射日光を受けやすいため、遮熱・通気を優先。交代休憩と送風・水分補給をセットで準備します。</p>

      {/* H2-5 保護具全体＋関連暑さ対策用品（gc） */}
      <h2 className="mt-10 mb-3 text-xl font-bold text-gray-900">ヘルメットだけでなく保護具全体で熱中症対策を考える</h2>
      <p className="mb-4 rounded-md bg-gray-100 p-3 text-sm text-gray-600">
        頭部・目・手・全身、そして作業環境まで含めて、保護具全体で暑さ対策を組み立てます。
      </p>

      <figure className="mb-4">
        <img
          src="/記事画像/ppe-heatstroke-countermeasure.jpg"
          alt="ヘルメット、保護メガネ、手袋、冷却ベストを組み合わせた熱中症対策"
          className="w-full rounded-xl object-cover"
        />
      </figure>

      <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">ヘルメット関連の暑さ対策用品（取付式・インナー）</h3>
      <p className="mb-2 text-sm leading-relaxed">今のヘルメットを活かしつつ、首元・頭部を補助できる用品です。ただしフィット感・あごひも・視界・安全規格に影響しないか確認して使ってください。</p>
      <ProductGrid items={helmetCooling} />

      <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">保護メガネ：曇り・フィット感・視界確保を確認</h3>
      <ProductGrid items={glasses} />

      <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">手袋：耐切創性と着用負担のバランスを確認</h3>
      <ProductGrid items={gloves} />
      <div className="mb-8">
        <ListCta href={LIST.ppe} label="保護具一覧を見る" content="cta_ppe_list" />
      </div>

      <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">インナー・冷却ベスト：作業中の体感負荷を下げる</h3>
      <ProductGrid items={innerVest} />

      <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">工場扇・冷風機：作業場所と休憩所の空気を動かす</h3>
      <ProductGrid items={fans} />

      {/* H2-6 比較表 */}
      <h2 className="mt-10 mb-3 text-xl font-bold text-gray-900">ヘルメット熱中症対策の比較表</h2>
      <p className="mb-4 rounded-md bg-gray-100 p-3 text-sm text-gray-600">
        タイプ別に「向いている現場・メリット・注意点」を整理します。
      </p>
      <div className="my-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 p-2">タイプ</th>
              <th className="border border-gray-200 p-2">向いている現場</th>
              <th className="border border-gray-200 p-2">メリット</th>
              <th className="border border-gray-200 p-2">注意点</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-gray-200 p-2">通気孔付き</td><td className="border border-gray-200 p-2">屋外作業・一般建設・倉庫</td><td className="border border-gray-200 p-2">ムレを逃がしやすい</td><td className="border border-gray-200 p-2">電気作業では使用可否確認</td></tr>
            <tr className="bg-gray-50"><td className="border border-gray-200 p-2">遮熱</td><td className="border border-gray-200 p-2">直射日光・道路工事・屋上作業</td><td className="border border-gray-200 p-2">日射による熱こもり対策に向く</td><td className="border border-gray-200 p-2">通気性や規格も確認</td></tr>
            <tr><td className="border border-gray-200 p-2">超軽量</td><td className="border border-gray-200 p-2">長時間着用・巡回・点検</td><td className="border border-gray-200 p-2">首・肩の負担軽減</td><td className="border border-gray-200 p-2">用途区分を確認</td></tr>
            <tr className="bg-gray-50"><td className="border border-gray-200 p-2">標準</td><td className="border border-gray-200 p-2">短時間作業・予備用</td><td className="border border-gray-200 p-2">汎用性・導入しやすさ</td><td className="border border-gray-200 p-2">暑熱対策は別途必要</td></tr>
            <tr><td className="border border-gray-200 p-2">送風機付き・冷却補助</td><td className="border border-gray-200 p-2">高温作業・休憩が取りにくい現場</td><td className="border border-gray-200 p-2">頭部・首元の快適性向上</td><td className="border border-gray-200 p-2">電源・重量・使用ルール確認</td></tr>
          </tbody>
        </table>
      </div>

      {/* H2-7 チェックリスト */}
      <h2 className="mt-10 mb-3 text-xl font-bold text-gray-900">ヘルメット熱中症対策の現場チェックリスト</h2>
      <p className="mb-4 rounded-md bg-gray-100 p-3 text-sm text-gray-600">
        購買前と朝礼・現場運用の2軸で確認すると、選定と運用の抜けを防げます。
      </p>
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <p className="mb-2 font-bold text-gray-800">購買前チェック</p>
          <ul className="space-y-1 text-sm">
            <li>☐ 現場は直射日光下か</li>
            <li>☐ 通気孔付きが使える作業か</li>
            <li>☐ 墜落時保護用が必要か</li>
            <li>☐ 電気作業・絶縁性能の確認が必要か</li>
            <li>☐ 作業時間は長いか</li>
            <li>☐ 保護メガネ・手袋・冷却ベストと併用するか</li>
            <li>☐ 洗いやすさ・衛生管理は必要か</li>
            <li>☐ 予備品や来客用も必要か</li>
          </ul>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <p className="mb-2 font-bold text-gray-800">朝礼・現場運用チェック</p>
          <ul className="space-y-1 text-sm">
            <li>☐ WBGTを確認したか</li>
            <li>☐ ヘルメット・あごひも・保護具の着用状態を確認したか</li>
            <li>☐ 防暑タレやインナーの着用ルールを共有したか</li>
            <li>☐ 水分・塩分補給のタイミングを決めたか</li>
            <li>☐ 休憩場所・工場扇・冷風機の位置を共有したか</li>
            <li>☐ 体調不良時の報告先を共有したか</li>
          </ul>
        </div>
      </div>

      {/* H2-8 朝礼一言文例 */}
      <h2 className="mt-10 mb-3 text-xl font-bold text-gray-900">朝礼で使える一言文例</h2>
      <p className="mb-4 rounded-md bg-gray-100 p-3 text-sm text-gray-600">
        そのまま読み上げられる文例です。現場に合わせて調整してください。
      </p>
      <div className="mb-4 rounded-lg border-l-4 border-blue-300 bg-blue-50 p-4 text-sm text-blue-900">
        <p className="mb-1 font-semibold">建設現場向け</p>
        <p>「本日は気温・暑さ指数が高くなる見込みです。ヘルメット内が蒸れやすくなりますが、安全上、作業中に勝手に外さないでください。暑さを感じた場合は、早めに職長へ報告し、日陰や休憩所で体を冷やしてください。水分・塩分補給も時間を決めて行いましょう。」</p>
      </div>
      <div className="mb-6 rounded-lg border-l-4 border-blue-300 bg-blue-50 p-4 text-sm text-blue-900">
        <p className="mb-1 font-semibold">工場・倉庫向け</p>
        <p>「今日は屋内でも熱がこもりやすい環境です。ヘルメット、保護メガネ、手袋を着用する作業では体感以上に暑くなることがあります。無理をせず、汗の量・めまい・気分不良があればすぐ報告してください。」</p>
      </div>

      {/* 休憩所イメージ */}
      <figure className="mb-4">
        <img
          src="/記事画像/worksite-rest-area-fan-helmet-heat.jpg"
          alt="工場扇のある現場休憩所でヘルメット暑さ対策を行う様子"
          className="w-full rounded-xl object-cover"
        />
      </figure>

      {/* FAQ */}
      <h2 className="mt-10 mb-3 text-xl font-bold text-gray-900">よくある質問（FAQ）</h2>
      <div className="mb-8 space-y-2">
        {[
          { q: 'ヘルメットをかぶると熱中症リスクは上がりますか？', a: 'ヘルメット自体が直接熱中症を起こすわけではありませんが、夏場は頭部に熱や湿気がこもりやすく、直射日光や高温多湿環境、作業強度が重なると負担が増えます。通気性・遮熱性のあるヘルメットや防暑用品を組み合わせて対策することが大切です。' },
          { q: '暑いときはヘルメットを外してもよいですか？', a: '飛来・落下物や墜落時の危険がある現場では、自己判断でヘルメットを外すのは危険です。暑さを感じた場合は職長や責任者へ報告し、決められた休憩場所で体を冷やす運用にしてください。' },
          { q: '通気孔付きヘルメットはどんな現場に向いていますか？', a: '屋外作業や高温多湿の現場など、ヘルメット内のムレを抑えたい現場に向いています。ただし、電気作業や絶縁性能が求められる作業では、通気孔なしかつ電気対応モデルが必要なため、使用可否の確認が必要です。' },
          { q: '遮熱ヘルメットはどんな現場に向いていますか？', a: '道路工事、屋上作業、土木作業、イベント設営など、直射日光を受けやすい現場に向いています。通気孔付きや軽量タイプとあわせて検討すると選びやすくなります。' },
          { q: 'ヘルメットインナーや防暑タレは必要ですか？', a: '直射日光や汗、首元の暑さが気になる現場では有効な選択肢です。ただし、ヘルメットのフィット感やあごひも、視界、安全規格に影響しないか確認して使う必要があります。' },
          { q: '保護メガネや手袋も熱中症対策に関係しますか？', a: '関係します。保護メガネや手袋、長袖作業着を着用すると体感的な暑さやムレが増える場合があります。安全性を確保しながら、通気性・軽量性・フィット感を確認することが重要です。' },
          { q: '工場や倉庫でもヘルメット熱中症対策は必要ですか？', a: '必要です。屋内でも熱源・湿度・風通しの悪さがあると熱中症リスクは高まります。WBGT確認、工場扇・冷風機、冷却インナー、休憩ルールとあわせて対策しましょう。' },
          { q: 'ヘルメット選びだけで熱中症対策は十分ですか？', a: '十分ではありません。ヘルメットの見直しは重要ですが、WBGT測定、休憩、水分・塩分補給、冷却ベスト、工場扇、体調不良時の報告体制まで含めて運用することが大切です。' },
        ].map((item) => (
          <details key={item.q} className="rounded-lg border border-gray-200 bg-white p-4">
            <summary className="cursor-pointer font-semibold text-gray-900">{item.q}</summary>
            <p className="mt-2 text-sm leading-relaxed text-gray-700">{item.a}</p>
          </details>
        ))}
      </div>

      {/* まとめ */}
      <h2 className="mt-10 mb-3 text-xl font-bold text-gray-900">まとめ｜ヘルメットは外さず、暑さに強い保護具選びと現場運用で対策する</h2>
      <p className="mb-4 leading-relaxed">
        ヘルメットの熱中症リスクは「外す」のではなく、「現場に合う保護具へ見直し、補助用品と運用で下げる」のが基本です。通気孔付き・遮熱・軽量タイプから現場条件に合うものを選び、防暑タレ・インナー・送風機・冷却ベスト・工場扇を組み合わせます。電気作業や絶縁性能が関わる場合は規格・メーカー仕様・現場ルールを優先し、暑さ対策仕様だけで選ばないことが大切です。さらにWBGT測定・休憩・水分塩分補給・体調不良時の報告体制までセットで運用し、ヘルメット以外の保護具も含めて全体で暑さ対策を整えましょう。
      </p>

      {/* 記事末CTA（全てYahoo!カテゴリ一覧） */}
      <div className="my-8 rounded-xl border border-gray-200 bg-gray-50 p-6">
        <p className="mb-4 font-bold text-gray-900">まとめて探す</p>
        <div className="flex flex-wrap gap-3">
          <ListCta href={LIST.heatstroke} label="熱中症対策商品一覧" content="cta_heatstroke_footer" />
          <ListCta href={LIST.ppe} label="保護具一覧" content="cta_ppe_footer" />
          <ListCta href={LIST.trusco} label="トラスコ中山商品一覧" content="cta_trusco_footer" />
        </div>
      </div>

      {/* 関連記事（作業用品ナビ実在slugのみ） */}
      <h2 className="mt-10 mb-3 text-xl font-bold text-gray-900">関連記事</h2>
      <ul className="mb-8 space-y-2 text-sm">
        <li><Link href="/articles/outdoor-work-heat-countermeasure-goods" className="text-blue-700 underline">建設現場の暑さ対策グッズとは？空調服だけでは足りない酷暑現場の冷却設備と休憩所づくり</Link></li>
        <li><Link href="/articles/safety-shoes-replacement" className="text-blue-700 underline">安全靴の交換時期はいつ？靴底・先芯・破れの見分け方と買い替え目安</Link></li>
        <li><Link href="/articles/trusco-hand-pallet-erabikata" className="text-blue-700 underline">トラスコのハンドパレット（ハンドリフト）の選び方｜フォーク長・能力・低床の違い</Link></li>
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
