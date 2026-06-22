import type { Metadata } from 'next';
import {
  ArticleLayout,
  ArticleContent,
  Breadcrumb,
  ArticleHeader,
  HeroImage,
  ArticleFigure,
  ProductGrid,
  RelatedArticles,
  Disclaimer,
  FaqSection,
  type ArticleProduct,
  type FaqItem,
  type RelatedArticle,
} from '@/components/article';
import { buildUrl } from '@/lib/product-links';

const SLUG = 'helmet-heatstroke-risk';

export const metadata: Metadata = {
  title:
    'ヘルメットの熱中症リスクとは？屋外作業・工事現場で外せない保護具の暑さ対策と選び方',
  description:
    'ヘルメットは屋外作業や工事現場で欠かせない保護具ですが、夏場は頭部のムレや熱こもりによる熱中症リスクに注意が必要です。通気孔付き・遮熱・軽量ヘルメットの選び方、防暑タレやインナー、保護メガネ、手袋、冷却ベスト、工場扇との組み合わせまで現場目線で解説します。',
  alternates: {
    canonical: `https://sagyou-navi.com/articles/${SLUG}`,
  },
  openGraph: {
    title:
      'ヘルメットの熱中症リスクとは？屋外作業・工事現場で外せない保護具の暑さ対策と選び方',
    description:
      '通気孔付き・遮熱・軽量ヘルメットの選び方、防暑タレやインナー、保護メガネ、手袋、冷却ベスト、工場扇との組み合わせまで現場目線で解説。',
    type: 'article',
    images: ['/記事画像/helmet-heatstroke-risk-hero.jpg'],
  },
};

const LIST = {
  ppe: 'https://store.shopping.yahoo.co.jp/signcity-yshop/caddb8eeb6.html',
  heatstroke: 'https://store.shopping.yahoo.co.jp/signcity-yshop/eab32ec7ce6.html',
  trusco: 'https://store.shopping.yahoo.co.jp/signcity-yshop/a5c8a5e9a5.html',
};

const yahooProduct = (id: string, name: string, note: string): ArticleProduct => ({
  id,
  name,
  note,
  links: { yahoo: `https://store.shopping.yahoo.co.jp/signcity-yshop/${id}.html` },
});

const rakutenProduct = (id: string, name: string, note: string): ArticleProduct => ({
  id,
  name,
  note,
  links: { rakuten: `https://item.rakuten.co.jp/signcity2024/${id}/` },
});

const gcProduct = (id: string, name: string, note: string): ArticleProduct => ({
  id,
  name,
  note,
  links: { gcSelect: `https://www.gc-select.com/products/${id}` },
});

const helmets: ArticleProduct[] = [
  yahooProduct('158773', 'TRUSCO ヘルメット 高通気タイプ ブルー DPM-1820B', 'ムレ対策・通気性重視の屋外作業向け'),
  yahooProduct('158791', 'TRUSCO 遮熱 涼帽 通気孔付 ホワイト TD-HB-FV-KP-W', '直射日光下の屋外作業・道路工事・屋上作業向け'),
  yahooProduct('158777', 'TRUSCO 超軽量 軽帽 通気孔付 フレッシュグリーン TD-AA17V-GN', '長時間着用・巡回作業・首肩の負担軽減'),
  yahooProduct('158783', 'TRUSCO ヘルメット アメリカンタイプ ホワイト DPM-0169W', '汎用・予備・基本保護具として'),
];

const helmetCooling: ArticleProduct[] = [
  gcProduct('1121810414', '涼かちゃん ヘルメットバイザーⅡ', '遮熱（ダイオミラー採用）・UVカット率98％以上'),
  gcProduct('1121810108', 'ヘルメット取付式 アクア防暑タレ', '水で濡らして気化熱・3分割で風通しを確保'),
  gcProduct('1121983004', 'ヘルメット取付式送風機 WindyⅢプラス', '防暑タレと組み合わせ首元へ送風'),
  gcProduct('1121910324', 'アイスジェルインナーハット「鈴風」', 'PCM繊維＋冷感ジェルで頭部・首裏を冷却'),
  gcProduct('1121910323', 'アイスジェルヘルメットインナー「あたまんぞく」', '頭部の冷却補助インナー'),
  gcProduct('1121983007', '送風機内蔵ヘルメット Windy Helmet', '外気吸入と熱気排出の切替・稼働約8時間'),
];

const glasses: ArticleProduct[] = [
  yahooProduct('162723', '一眼型セーフティグラス 超軽量フィットタイプ', '軽量・フィット感重視'),
  yahooProduct('162834', '一眼型オーバーセーフティグラス ゴーグルタイプ', 'メガネの上から着用'),
  yahooProduct('162699', '一眼型アジア人向けフィットグラス', '鼻あて・フィット形状'),
];

const gloves: ArticleProduct[] = [
  yahooProduct('237012', '耐切創・耐突手袋 L', '切創・突き刺し対策'),
  yahooProduct('236630', '手甲ガード付き耐切創手袋 XL', '手甲まで保護'),
  yahooProduct('234787', 'アラミド手袋 7ゲージ Lサイズ', '耐切創の定番素材'),
  yahooProduct('234828', '耐切創手袋 M/L兼用 ブラック', '汎用・着用負担少なめ'),
];

const innerVest: ArticleProduct[] = [
  gcProduct('1124300805', 'ICE EDGE 冷感コンプレッションシャツ', '作業中の体感負荷を下げる'),
  gcProduct('1124813035', 'インナー・冷却ウェア', '冷却・空調系インナー'),
  rakutenProduct('171708', '冷却ベスト（空調・保冷系）', '体に近い位置を冷やす'),
  rakutenProduct('171698', '冷却ベスト（空調・保冷系）', '高温作業の体感緩和'),
];

const fans: ArticleProduct[] = [
  rakutenProduct('171563', '工場扇・送風機', '作業場・休憩所の空気循環'),
  rakutenProduct('171963', '工場扇・送風機', '広い範囲に送風'),
  rakutenProduct('171990', '工場扇・冷風機', '休憩所まわりに'),
  rakutenProduct('172076', '工場扇・冷風機', 'スポット送風に'),
];

const LIST_CTA_CLASS =
  'inline-flex items-center gap-2 rounded-xl bg-store-yahoo px-6 py-3 text-sm font-bold text-white transition hover:bg-store-yahoo-hover';

const RELATED: RelatedArticle[] = [
  {
    href: '/articles/outdoor-work-heat-countermeasure-goods',
    label:
      '建設現場の暑さ対策グッズとは？空調服だけでは足りない酷暑現場の冷却設備と休憩所づくり',
  },
  {
    href: '/articles/safety-shoes-replacement',
    label: '安全靴の交換時期はいつ？靴底・先芯・破れの見分け方と買い替え目安',
  },
  {
    href: '/articles/trusco-hand-pallet-erabikata',
    label: 'トラスコのハンドパレット（ハンドリフト）の選び方｜フォーク長・能力・低床の違い',
  },
];

const FAQ: FaqItem[] = [
  { q: 'ヘルメットをかぶると熱中症リスクは上がりますか？', a: 'ヘルメット自体が直接熱中症を起こすわけではありませんが、夏場は頭部に熱や湿気がこもりやすく、直射日光や高温多湿環境、作業強度が重なると負担が増えます。通気性・遮熱性のあるヘルメットや防暑用品を組み合わせて対策することが大切です。' },
  { q: '暑いときはヘルメットを外してもよいですか？', a: '飛来・落下物や墜落時の危険がある現場では、自己判断でヘルメットを外すのは危険です。暑さを感じた場合は職長や責任者へ報告し、決められた休憩場所で体を冷やす運用にしてください。' },
  { q: '通気孔付きヘルメットはどんな現場に向いていますか？', a: '屋外作業や高温多湿の現場など、ヘルメット内のムレを抑えたい現場に向いています。ただし、電気作業や絶縁性能が求められる作業では、通気孔なしかつ電気対応モデルが必要なため、使用可否の確認が必要です。' },
  { q: '遮熱ヘルメットはどんな現場に向いていますか？', a: '道路工事、屋上作業、土木作業、イベント設営など、直射日光を受けやすい現場に向いています。通気孔付きや軽量タイプとあわせて検討すると選びやすくなります。' },
  { q: 'ヘルメットインナーや防暑タレは必要ですか？', a: '直射日光や汗、首元の暑さが気になる現場では有効な選択肢です。ただし、ヘルメットのフィット感やあごひも、視界、安全規格に影響しないか確認して使う必要があります。' },
  { q: '保護メガネや手袋も熱中症対策に関係しますか？', a: '関係します。保護メガネや手袋、長袖作業着を着用すると体感的な暑さやムレが増える場合があります。安全性を確保しながら、通気性・軽量性・フィット感を確認することが重要です。' },
  { q: '工場や倉庫でもヘルメット熱中症対策は必要ですか？', a: '必要です。屋内でも熱源・湿度・風通しの悪さがあると熱中症リスクは高まります。WBGT確認、工場扇・冷風機、冷却インナー、休憩ルールとあわせて対策しましょう。' },
  { q: 'ヘルメット選びだけで熱中症対策は十分ですか？', a: '十分ではありません。ヘルメットの見直しは重要ですが、WBGT測定、休憩、水分・塩分補給、冷却ベスト、工場扇、体調不良時の報告体制まで含めて運用することが大切です。' },
];

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
    <ArticleLayout faq={FAQ}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb current="ヘルメットの熱中症リスク" />
      <ArticleHeader
        category="guide"
        readingTime={13}
        title="ヘルメットの熱中症リスク"
        subtitle="屋外作業・工事現場で外せない保護具の暑さ対策と選び方"
      />
      <HeroImage
        src="/記事画像/helmet-heatstroke-risk-hero.jpg"
        alt="屋外工事現場でヘルメット着用時の暑さ対策を確認する作業員"
      />

      <ArticleContent>
        <p className="mb-4 leading-relaxed">
          夏場の建設現場や屋外作業では、「ヘルメットの中が蒸れる」「頭が暑い」「休憩しても熱が抜けにくい」と感じる場面が増えます。一方で、飛来・落下物や墜落時の危険がある現場では、暑いからといってヘルメットを外すわけにはいきません。
        </p>
        <p className="mb-4 leading-relaxed">
          大切なのは、ヘルメットを外すことではなく、<strong>現場に合った通気性・遮熱性・軽量性のあるヘルメットを選び、インナーや防暑タレ、冷却ベスト、工場扇などと組み合わせて熱中症リスクを下げること</strong>です。
        </p>
        <p className="mb-6 leading-relaxed">
          この記事では、屋外作業・工事現場・工場・倉庫などの安全衛生担当者や購買担当者向けに、ヘルメット着用時の熱中症リスク、現場別の対策、ヘルメットや保護具の選び方をわかりやすく解説します。
        </p>

        <div className="mb-6 rounded-xl border border-amber-200 bg-amber-50 p-5">
          <p className="mb-2 text-sm font-bold text-amber-800">★ この記事の即答</p>
          <p className="text-sm leading-relaxed text-amber-900">
            <strong>ヘルメットの熱中症リスクは「外す」のではなく「選び方と組み合わせ」で下げるのが基本。</strong>
            通気孔付き・遮熱・軽量タイプから現場に合うヘルメットを選び、防暑タレ・インナー・送風機・冷却ベスト・工場扇で補助します。
            <strong>電気作業や絶縁性能が必要な現場では、通気孔なしかつ電気対応モデル</strong>を選ぶ必要があります。さらにWBGT測定・休憩・水分塩分補給・体調不良時の報告体制までセットで運用することが重要です。
          </p>
        </div>

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

        <div className="mb-8 border-l-4 border-amber-500 bg-amber-50 p-5">
          <p className="mb-2 font-bold text-amber-800">安全・熱中症に関する注意</p>
          <p className="text-sm leading-relaxed text-amber-900">
            本記事は暑さ対策・熱中症予防の一般的な情報提供であり、医療的な診断ではありません。紹介する用品は予防やクールダウンを助けるものであり、熱中症を確実に防ぐものではありません。<strong>意識がもうろうとしている、自力で水分が取れない、呼びかけへの反応がおかしい、休んでも改善しない</strong>場合は重症のおそれがあるため、ためらわず救急要請（119）や医療機関の受診を行ってください。判断に迷うときは#7119も活用できます。ヘルメットは飛来・落下物や墜落から頭部を守る保護具のため、<strong>暑さを理由に自己判断で外さない</strong>でください。電気作業・絶縁性能・保護帽規格に関わる選定は、必ず現場ルール・メーカー仕様・取扱説明書・専門家の確認を優先してください。最新の基準・運用は厚生労働省・環境省・各自治体の情報もご確認ください。
          </p>
        </div>

        <h2 className="mt-10 mb-3 text-xl font-bold text-gray-900">ヘルメットは熱中症リスクになる？屋外作業で注意すべき理由</h2>
        <p className="mb-4 rounded-md bg-gray-100 p-3 text-sm text-gray-600">
          ヘルメットそのものが熱中症の原因ではありませんが、夏場は頭部に熱と湿気がこもりやすく、他の保護具と重なって放熱しにくくなります。
        </p>

        <ArticleFigure
          src="/記事画像/helmet-heat-buildup-countermeasure.jpg"
          alt="ヘルメット内部のムレを抑える通気と冷却用品のイメージ"
        />

        <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">ヘルメット内部に熱と湿気がこもりやすい</h3>
        <p className="mb-4 text-sm leading-relaxed">密閉性の高い帽体や発泡スチロール内装は、汗の湿気や体熱がこもりやすく、頭部の不快感につながります。暑さは集中力や判断力の低下、ひいては仕上がり品質に影響することもあるとされています。</p>

        <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">直射日光・照り返し・無風状態で頭部の負担が増える</h3>
        <p className="mb-4 text-sm leading-relaxed">直射日光下では帽体内の温度が上がりやすく、照り返しや無風が重なると放熱しにくくなります。屋上・道路・舗装作業などは特に注意が必要です。</p>

        <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">保護メガネ・手袋・長袖作業着との組み合わせで全身の放熱が難しくなる</h3>
        <p className="mb-4 text-sm leading-relaxed">頭・目・手・全身と保護具を重ねるほど、体感的な暑さやムレは増えます。ヘルメット単体ではなく、保護具全体で暑さ対策を考えることが重要です。</p>

        <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">ただし、暑いからといってヘルメットを外すのは危険</h3>
        <p className="mb-4 text-sm leading-relaxed">飛来・落下物や墜落のリスクがある現場では、ヘルメットは外せません。対策は「外す」ではなく「暑さに強い仕様へ見直す・補助する」が基本です。</p>

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

        <h2 className="mt-10 mb-3 text-xl font-bold text-gray-900">通気孔付き・遮熱・軽量ヘルメットはどう選ぶ？</h2>
        <p className="mb-4 rounded-md bg-gray-100 p-3 text-sm text-gray-600">
          現場の条件（直射日光・通気・作業時間・電気作業の有無）でタイプを選び分けます。
        </p>

        <ArticleFigure
          src="/記事画像/helmet-type-comparison.jpg"
          alt="通気孔付きヘルメット、遮熱ヘルメット、軽量ヘルメットの比較イメージ"
        />

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

        <ProductGrid items={helmets} cols={3} slug={SLUG} />

        <h2 className="mt-10 mb-3 text-xl font-bold text-gray-900">現場別に見るヘルメット暑さ対策</h2>
        <p className="mb-4 rounded-md bg-gray-100 p-3 text-sm text-gray-600">
          現場ごとに優先する対策が変わります。建設・道路屋上・工場倉庫・電気工事・イベントで整理します。
        </p>

        <ArticleFigure
          src="/記事画像/helmet-neck-shade-summer-work.jpg"
          alt="ヘルメット用防暑タレで首元の日差しを防ぐ屋外作業員"
        />

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

        <h2 className="mt-10 mb-3 text-xl font-bold text-gray-900">ヘルメットだけでなく保護具全体で熱中症対策を考える</h2>
        <p className="mb-4 rounded-md bg-gray-100 p-3 text-sm text-gray-600">
          頭部・目・手・全身、そして作業環境まで含めて、保護具全体で暑さ対策を組み立てます。
        </p>

        <ArticleFigure
          src="/記事画像/ppe-heatstroke-countermeasure.jpg"
          alt="ヘルメット、保護メガネ、手袋、冷却ベストを組み合わせた熱中症対策"
        />

        <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">ヘルメット関連の暑さ対策用品（取付式・インナー）</h3>
        <p className="mb-2 text-sm leading-relaxed">今のヘルメットを活かしつつ、首元・頭部を補助できる用品です。ただしフィット感・あごひも・視界・安全規格に影響しないか確認して使ってください。</p>
        <ProductGrid items={helmetCooling} cols={3} slug={SLUG} />

        <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">保護メガネ：曇り・フィット感・視界確保を確認</h3>
        <ProductGrid items={glasses} cols={3} slug={SLUG} />

        <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">手袋：耐切創性と着用負担のバランスを確認</h3>
        <ProductGrid items={gloves} cols={3} slug={SLUG} />
        <div className="mb-8 mt-4">
          <a
            href={buildUrl(LIST.ppe, `${SLUG}_cta_ppe_list`)}
            target="_blank"
            rel="noopener noreferrer"
            className={LIST_CTA_CLASS}
          >
            保護具一覧を見る
          </a>
        </div>

        <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">インナー・冷却ベスト：作業中の体感負荷を下げる</h3>
        <ProductGrid items={innerVest} cols={3} slug={SLUG} />

        <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">工場扇・冷風機：作業場所と休憩所の空気を動かす</h3>
        <ProductGrid items={fans} cols={3} slug={SLUG} />

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

        <ArticleFigure
          src="/記事画像/worksite-rest-area-fan-helmet-heat.jpg"
          alt="工場扇のある現場休憩所でヘルメット暑さ対策を行う様子"
        />

        <FaqSection faq={FAQ} />

        <h2 className="mt-10 mb-3 text-xl font-bold text-gray-900">まとめ｜ヘルメットは外さず、暑さに強い保護具選びと現場運用で対策する</h2>
        <p className="mb-4 leading-relaxed">
          ヘルメットの熱中症リスクは「外す」のではなく、「現場に合う保護具へ見直し、補助用品と運用で下げる」のが基本です。通気孔付き・遮熱・軽量タイプから現場条件に合うものを選び、防暑タレ・インナー・送風機・冷却ベスト・工場扇を組み合わせます。電気作業や絶縁性能が関わる場合は規格・メーカー仕様・現場ルールを優先し、暑さ対策仕様だけで選ばないことが大切です。さらにWBGT測定・休憩・水分塩分補給・体調不良時の報告体制までセットで運用し、ヘルメット以外の保護具も含めて全体で暑さ対策を整えましょう。
        </p>

        <section className="mt-12 rounded-2xl bg-secondary p-8 text-secondary-foreground md:p-10">
          <h2 className="text-2xl font-black text-white">まとめて探す</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={buildUrl(LIST.heatstroke, `${SLUG}_cta_heatstroke_footer`)}
              target="_blank"
              rel="noopener noreferrer"
              className={LIST_CTA_CLASS}
            >
              熱中症対策商品一覧
            </a>
            <a
              href={buildUrl(LIST.ppe, `${SLUG}_cta_ppe_footer`)}
              target="_blank"
              rel="noopener noreferrer"
              className={LIST_CTA_CLASS}
            >
              保護具一覧
            </a>
            <a
              href={buildUrl(LIST.trusco, `${SLUG}_cta_trusco_footer`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
            >
              トラスコ中山商品一覧
            </a>
          </div>
        </section>

        <RelatedArticles items={RELATED} />

        <Disclaimer extra="本記事は医療的な診断ではありません。ヘルメットは暑さを理由に自己判断で外さないでください。電気作業・絶縁性能・保護帽規格に関わる選定は、必ず現場ルール・メーカー仕様・取扱説明書・専門家の確認を優先してください。価格・在庫・仕様は変動するため、最新情報は各商品ページでご確認ください。" />
      </ArticleContent>
    </ArticleLayout>
  );
}
