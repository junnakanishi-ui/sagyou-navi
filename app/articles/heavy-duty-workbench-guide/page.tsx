import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArticleLayout,
  ArticleContent,
  Breadcrumb,
  ArticleHeader,
  HeroImage,
  ProductGrid,
  RelatedArticles,
  Disclaimer,
  FaqSection,
  type ArticleProduct,
  type FaqItem,
  type RelatedArticle,
} from '@/components/article';
import { buildUrl } from '@/lib/product-links';

const SLUG = 'heavy-duty-workbench-guide';

export const metadata: Metadata = {
  title: '頑丈な作業台の選び方｜業務用で失敗しない耐荷重・天板・用途別の比較ガイド',
  description:
    '頑丈な作業台を選ぶなら、耐荷重だけでなく軽量・中量・重量の違い、天板材質、バイス作業への対応、固定式・移動式、搬入や運搬動線まで確認することが大切です。工場・倉庫・整備場向けに業務用作業台の選び方と、TRUSCO作業台・ハンドパレット・台車の活用を解説します。',
  alternates: {
    canonical: `https://sagyou-navi.com/articles/${SLUG}`,
  },
  openGraph: {
    title: '頑丈な作業台の選び方｜業務用で失敗しない耐荷重・天板・用途別の比較ガイド',
    description:
      '工場・倉庫・整備場向けに業務用作業台の選び方と、TRUSCO作業台・ハンドパレット・台車の活用を解説します。',
    type: 'article',
    images: ['/記事画像/heavy-duty-workbench-hero.jpg'],
  },
};

const LIST = {
  workbench: 'https://store.shopping.yahoo.co.jp/signcity-yshop/e2ea8bb6c2c.html',
  handpallet: 'https://store.shopping.yahoo.co.jp/signcity-yshop/c8c2c1f7b5.html',
  cart: 'https://store.shopping.yahoo.co.jp/signcity-yshop/b1bfc8c2c2.html',
  trusco: 'https://store.shopping.yahoo.co.jp/signcity-yshop/a5c8a5e9a5.html',
};

const yahooProduct = (id: string, name: string, note: string): ArticleProduct => ({
  id,
  name,
  note,
  links: { yahoo: `https://store.shopping.yahoo.co.jp/signcity-yshop/${id}.html` },
});

const workbenches: ArticleProduct[] = [
  yahooProduct('161681', 'TRUSCO 中量作業台 回転台付アンビルバイス付 RHW-0960VRS', '均等荷重1200kg・900×600×740mm・バイス固定の整備/組立/加工補助に'),
  yahooProduct('161973', 'TRUSCO 軽量作業台 TFAE型 TFAEL-1260', '均等荷重300kg・1200×600×740mm・梱包/検品/軽い組立に'),
  yahooProduct('161782', 'TRUSCO 移動式重量作業台 STWC-1200', 'レイアウト変更が多い現場・作業台ごと動かしたい現場に'),
  yahooProduct('220888', 'TRUSCO 中荷重作業台 800kg GW型 GWR-0945', '均等荷重800kg・900×450×740mm・省スペースで中荷重作業に'),
];

const pallets: ArticleProduct[] = [
  yahooProduct('168791', 'TRUSCO ハンドパレットトラック 1.5t用 L1050×W550mm 軽量型', '標準的なパレット荷役'),
  yahooProduct('168790', 'TRUSCO ハンドパレットトラック 1.5t用 L850×W520mm 軽量', '短めフォークで使いたい現場'),
  yahooProduct('168809', 'TRUSCO ハンドパレットトラック PK付 2t L1150×W540mm', 'ブレーキ・補助機能を重視'),
  yahooProduct('168827', 'TRUSCO 電動ハンドパレットトラック E-TRA 1.2t用', '多頻度・省力化したい場合'),
];

const carts: ArticleProduct[] = [
  yahooProduct('167468', 'TRUSCO カルティオ 新型 ブラック MPK-780-BK', '工具・部品の小回り運搬'),
  yahooProduct('190475', 'TRUSCO カルティオ 新型 ブラック ストッパー付 MPK780BKSS', '停止時の安定性を重視'),
  yahooProduct('216713', 'TRUSCO 樹脂台車 カルティオビッグ 折畳 900×600 ストッパー付', '大きめ荷物・折りたたみ収納'),
  yahooProduct('159750', 'TRUSCO カルティオビッグ 固定ハンドル MPK-900-B', '頻繁な運搬・大きめ荷物'),
];

const LIST_CTA_CLASS =
  'inline-flex items-center gap-2 rounded-xl bg-store-yahoo px-6 py-3 text-sm font-bold text-white transition hover:bg-store-yahoo-hover';

const RELATED: RelatedArticle[] = [
  {
    href: '/articles/trusco-hand-pallet-erabikata',
    label: 'トラスコのハンドパレット（ハンドリフト）の選び方｜フォーク長・能力・低床の違い',
  },
  {
    href: '/articles/hand-lift-precautions',
    label: 'ハンドリフトの注意点｜事故を防ぐ使い方とハンドパレット・ハンドリフターの選び分け',
  },
  {
    href: '/articles/safety-shoes-replacement',
    label: '安全靴の交換時期はいつ？靴底・先芯・破れの見分け方と買い替え目安',
  },
];

const FAQ: FaqItem[] = [
  { q: '頑丈な作業台は耐荷重だけで選べばよいですか？', a: '耐荷重は重要ですが、それだけでは不十分です。荷重が均等にかかるのか一部に集中するのか、打撃やバイス固定があるのか、天板材質や脚部構造、設置環境まで確認しましょう。' },
  { q: '軽量作業台と中量作業台、重量作業台の違いは何ですか？', a: '一般的には、軽量作業台は梱包・検品・軽作業向け、中量作業台は工具や治具を使う組立・整備向け、重量作業台は重い部材や高荷重作業向けです。均等荷重の目安で区分されることが多いです。' },
  { q: '耐荷重300kgの作業台でも業務用に使えますか？', a: '使えます。検品、梱包、軽い組立、部品整理などであれば、300kgクラスの軽量作業台が適している場合があります。' },
  { q: 'バイス付き作業台はどんな作業に向いていますか？', a: 'ワークを固定して締める、削る、簡単な整備を行う、部品を保持して加工補助をするような作業に向いています。一般作業台に後付けする場合は天板対応を確認してください。' },
  { q: '移動式重量作業台はどんな現場に向いていますか？', a: '工程変更やレイアウト変更が多い現場、作業台を必要な場所へ移動させたい現場に向いています。ただし移動時・作業時の固定、キャスター許容荷重、床面状態の確認が必要です。' },
  { q: '作業台の高さはどう選べばよいですか？', a: '座り作業・立ち作業・精密作業・力仕事で適した高さは変わります。厚生労働省の腰痛予防対策指針では、作業台の高さは肘の曲げ角度がおよそ90度になる高さが目安とされ、緻密な作業では高め、力を要する作業では低めが適切とされています。' },
  { q: '作業台と一緒にハンドパレットや台車も必要ですか？', a: '重い部品・工具・パレット品を扱う現場では、作業台だけでなく搬入・移動の導線も重要です。重量物はハンドパレット、小物や工具は運搬台車を組み合わせると効率的です。厚労省も重量物取扱いは台車等の補助機器で人力負担を軽減することを原則としています。' },
  { q: '作業台一覧から選ぶとき、最初に見るべき項目は？', a: 'まずは耐荷重、サイズ、天板材質、高さ、固定式か移動式か、オプション対応、搬入条件を確認しましょう。' },
];

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
    <ArticleLayout faq={FAQ}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb current="頑丈な作業台の選び方" />
      <ArticleHeader
        category="guide"
        readingTime={13}
        title="頑丈な作業台の選び方"
        subtitle="業務用で失敗しない耐荷重・天板・用途別の比較ガイド"
      />
      <HeroImage
        src="/記事画像/heavy-duty-workbench-hero.jpg"
        alt="工場で頑丈な作業台を使って部品組立を行う作業者"
      />

      <ArticleContent>
        <p className="mb-4 leading-relaxed">
          工場や倉庫、整備場で使う作業台は、「とにかく頑丈そうだから」「耐荷重が大きいから」という理由だけで選ぶと、現場に合わないことがあります。たとえば梱包や検品が中心なら軽量作業台で十分な場合もあります。一方で、重い工具や治具を置く、バイスでワークを固定する、金属部品を扱う、作業台ごと移動させたいといった現場では、中量・重量タイプや移動式タイプを検討したほうが安心です。
        </p>
        <p className="mb-4 leading-relaxed">
          また、厚生労働省の腰痛予防対策でも、作業台の高さや作業姿勢の見直しが重要とされています。頑丈な作業台を選ぶことは、単に壊れにくい台を選ぶことではなく、作業効率・安全性・腰への負担・材料の搬入動線まで含めて現場環境を整えることにつながります。
        </p>
        <p className="mb-6 leading-relaxed">
          この記事では、法人・現場向けに、頑丈な作業台の選び方を「耐荷重」「天板」「用途」「固定式・移動式」「搬入・運搬」まで含めてわかりやすく解説します。
        </p>

        <div className="mb-6 rounded-xl border border-amber-200 bg-amber-50 p-5">
          <p className="mb-2 text-sm font-bold text-amber-800">★ この記事の即答</p>
          <p className="text-sm leading-relaxed text-amber-900">
            <strong>頑丈な作業台は「耐荷重＋作業内容＋運搬動線」で選ぶ。</strong>
            梱包・検品なら300kg前後の軽量作業台、工具・治具・部品組立なら800kg前後、バイス作業・整備なら1200kg前後、重量物なら3000kgクラスや移動式が目安です。
            ただし<strong>耐荷重は均等に載せた場合の目安</strong>で、集中荷重・衝撃・打撃作業では注意が必要。天板材質・脚部構造・作業台の高さ・搬入動線まで確認し、重量物を運ぶ現場ではハンドパレットや運搬台車もセットで検討します。
          </p>
        </div>

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

        <div className="mb-8 border-l-4 border-amber-500 bg-amber-50 p-5">
          <p className="mb-2 font-bold text-amber-800">選定・安全に関する注意</p>
          <p className="text-sm leading-relaxed text-amber-900">
            本記事は一般的な選定の考え方を示すものであり、特定用途での適合や安全を保証するものではありません。記載の耐荷重は<strong>均等に載せた場合の目安</strong>です。荷重が一部に集中する、打撃や衝撃が加わる、無理な姿勢で力をかけるといった使い方では、表示値より余裕を持った選定が必要になります。設置にあたっては<strong>床の耐荷重・水平・搬入経路・キャスター許容荷重</strong>を確認し、必ずメーカー仕様・取扱説明書・現場の安全ルールに従ってください。重量物の人力取扱いは腰痛のリスクがあるため、台車・補助機器の活用や複数人作業を検討してください。
          </p>
        </div>

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

        <h2 className="mt-10 mb-3 text-xl font-bold text-gray-900">作業用品ナビおすすめの関連商品</h2>
        <p className="mb-4 rounded-md bg-gray-100 p-3 text-sm text-gray-600">
          用途別に作業台と運搬用品を紹介します。価格・在庫・仕様は変動するため、最新情報・正確な寸法や耐荷重は各商品ページでご確認ください。
        </p>

        <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">頑丈な作業台を探す</h3>
        <ProductGrid items={workbenches} cols={2} slug={SLUG} />
        <div className="mb-8 mt-6">
          <a
            href={buildUrl(LIST.workbench, `${SLUG}_cta_workbench_list`)}
            target="_blank"
            rel="noopener noreferrer"
            className={LIST_CTA_CLASS}
          >
            作業台一覧を見る
          </a>
        </div>

        <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">重量物の搬入・移動にはハンドパレット</h3>
        <ProductGrid items={pallets} cols={2} slug={SLUG} />
        <div className="mb-8 mt-6">
          <a
            href={buildUrl(LIST.handpallet, `${SLUG}_cta_handpallet_list`)}
            target="_blank"
            rel="noopener noreferrer"
            className={LIST_CTA_CLASS}
          >
            ハンドパレット・ハンドリフター一覧を見る
          </a>
        </div>

        <figure className="mb-4">
          <img
            src="/記事画像/workbench-platform-cart-workflow.jpg"
            alt="運搬台車で工具や部品を作業台へ運ぶ作業動線"
            className="w-full rounded-xl object-cover"
          />
        </figure>

        <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">工具・部材の小回り移動には運搬台車</h3>
        <ProductGrid items={carts} cols={2} slug={SLUG} />
        <div className="mb-8 mt-6">
          <a
            href={buildUrl(LIST.cart, `${SLUG}_cta_cart_list`)}
            target="_blank"
            rel="noopener noreferrer"
            className={LIST_CTA_CLASS}
          >
            運搬台車一覧を見る
          </a>
        </div>

        <FaqSection faq={FAQ} />

        <h2 className="mt-10 mb-3 text-xl font-bold text-gray-900">まとめ｜作業台は「耐荷重・作業内容・作業姿勢・運搬動線」で選ぶ</h2>
        <p className="mb-4 leading-relaxed">
          頑丈な作業台は、耐荷重の数字だけでなく、荷重のかかり方・天板材質・脚部構造・作業姿勢・搬入や運搬動線をセットで考えて選ぶことが大切です。梱包・検品なら軽量、組立・整備なら中量、重量物や移動なら重量・移動式というように、作業内容から逆算しましょう。耐荷重は均等荷重の目安であること、床耐荷重・搬入条件・メーカー仕様の確認が必要であることも忘れずに。重量物を扱う現場では、ハンドパレットや運搬台車もあわせて整えると、安全性と作業効率の両方を高められます。
        </p>

        <section className="mt-12 rounded-2xl bg-secondary p-8 text-secondary-foreground md:p-10">
          <h2 className="text-2xl font-black text-white">まとめて探す</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={buildUrl(LIST.workbench, `${SLUG}_footer_workbench`)}
              target="_blank"
              rel="noopener noreferrer"
              className={LIST_CTA_CLASS}
            >
              作業台一覧
            </a>
            <a
              href={buildUrl(LIST.handpallet, `${SLUG}_footer_handpallet`)}
              target="_blank"
              rel="noopener noreferrer"
              className={LIST_CTA_CLASS}
            >
              ハンドパレット・ハンドリフター一覧
            </a>
            <a
              href={buildUrl(LIST.cart, `${SLUG}_footer_cart`)}
              target="_blank"
              rel="noopener noreferrer"
              className={LIST_CTA_CLASS}
            >
              運搬台車一覧
            </a>
            <a
              href={buildUrl(LIST.trusco, `${SLUG}_footer_trusco`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
            >
              トラスコ中山商品一覧
            </a>
          </div>
        </section>

        <RelatedArticles items={RELATED} />

        <Disclaimer extra="記載の耐荷重は均等に載せた場合の目安です。荷重の集中・衝撃・打撃作業では表示値より余裕を持った選定が必要です。設置にあたっては床耐荷重・水平・搬入経路・キャスター許容荷重を確認し、必ずメーカー仕様・取扱説明書・現場の安全ルールに従ってください。" />
      </ArticleContent>
    </ArticleLayout>
  );
}
