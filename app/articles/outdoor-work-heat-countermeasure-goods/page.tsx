import type { Metadata } from "next";
import Image from "next/image";
import {
  ArticleLayout,
  ArticleContent,
  Breadcrumb,
  ArticleHeader,
  HeroImage,
  RelatedArticles,
  Disclaimer,
  FaqSection,
  type FaqItem,
  type RelatedArticle,
} from "@/components/article";

const SLUG = "outdoor-work-heat-countermeasure-goods";

export const metadata: Metadata = {
  title:
    "建設現場の暑さ対策グッズとは？空調服だけでは足りない酷暑現場の冷却設備と休憩所づくり",
  description:
    "建設現場や屋外イベントの暑さ対策では、空調服や工場扇だけでなく休憩所を涼しくする設備づくりも重要です。作業中・休憩中・万が一の備えに分けて、空調ウェア・冷却ベスト・工場扇・スポットクーラー・1人用クールダウン設備・応急セットの選び方を解説します。",
  alternates: {
    canonical: `https://sagyou-navi.com/articles/${SLUG}`,
  },
  openGraph: {
    title:
      "建設現場の暑さ対策グッズとは？空調服だけでは足りない酷暑現場の冷却設備と休憩所づくり",
    description:
      "作業中・作業場所・休憩所・万が一の4層で整理。空調ウェア・工場扇・スポットクーラー・1人用クールダウン設備の選び方を解説。",
    type: "article",
    images: ["/記事画像/dohiemon-box-hero.jpg"],
  },
};

const buildUrl = (base: string, utmContent: string) => {
  const sep = base.includes("?") ? "&" : "?";
  return `${base}${sep}utm_source=sagyou_navi&utm_medium=article&utm_campaign=outdoor_heat_goods&utm_content=${utmContent}`;
};

const gcItem = (id: string) => `https://www.gc-select.com/products/${id}`;

const URLS = {
  dohiemon: "https://www.gc-select.com/products/1130071046",
  feature: "https://www.gc-select.com/pages/2026_prevent-heatstroke",
  fanList:
    "https://www.gc-select.com/pages/search-results-page?q=%E5%B7%A5%E5%A0%B4%E6%89%87",
};

type Product = { id: string; name: string; note: string };

const wearItems: Product[] = [
  {
    id: "1124300805",
    name: "ICE EDGE アイスエッジ 冷感コンプレッションシャツ",
    note: "作業中の体感負荷を下げる",
  },
  {
    id: "1179038026",
    name: "ICE ARMOR専用ビブス 特殊保冷剤1kgセット",
    note: "保冷剤で体に近い位置を冷やす",
  },
  {
    id: "1124810039",
    name: "WZチタンコーティング・フードベスト",
    note: "日射対策・遮熱",
  },
  {
    id: "1124804561",
    name: "バートル AC1156 ACタクティカル半袖ブルゾン",
    note: "ファン付きで送風",
  },
  {
    id: "1124806061",
    name: "ハイブリットクールベスト",
    note: "送風＋保冷の組み合わせ",
  },
];

const envItems: Product[] = [
  { id: "1130070133", name: "工場扇 GCFF", note: "休憩所まわりの空気循環" },
  {
    id: "6300069940",
    name: "新光工場扇 折畳み脚式 45cm",
    note: "持ち運びやすい送風",
  },
  {
    id: "6300069941",
    name: "新光 床置き型工場扇 4枚羽根式 45cm",
    note: "床置きで面の送風",
  },
  { id: "6300020707", name: "18Vコードレス工場扇", note: "電源が取りにくい場所に" },
  {
    id: "1130071013",
    name: "スポットクーラー 自動首振りタイプ KES251AAB",
    note: "一定エリアに冷風を届ける",
  },
  {
    id: "1130071022",
    name: "ミニスポットクーラー KES161DBA",
    note: "小エリア向けのコンパクト型",
  },
];

const emergencyItems: Product[] = [
  {
    id: "1179038030",
    name: "エマージェンシープール EGP-17555",
    note: "全身急速冷却の備え",
  },
  {
    id: "1179070000",
    name: "熱中症対策キット（6点セット）",
    note: "基本の応急備品をまとめて",
  },
  {
    id: "1179071000",
    name: "熱中症応急セット（10点セット）",
    note: "応急対応を手厚く",
  },
];

function ProductCard({ p }: { p: Product }) {
  return (
    <a
      href={buildUrl(gcItem(p.id), `product_${p.id}`)}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="group flex flex-col rounded-xl border border-gray-200 bg-white p-4 transition hover:shadow-md"
    >
      <div className="relative mb-3 aspect-square overflow-hidden rounded-lg bg-gray-50">
        <Image
          src={`/products/${p.id}.jpg`}
          alt={p.name}
          fill
          className="object-contain p-2"
          sizes="(max-width: 768px) 100vw, 300px"
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

function YoutubeEmbed({ src, title }: { src: string; title: string }) {
  return (
    <div className="my-6 aspect-video w-full overflow-hidden rounded-xl">
      <iframe
        className="h-full w-full"
        src={src}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}

const FAQ: FaqItem[] = [
  {
    q: "屋外作業の暑さ対策は空調服だけで十分ですか？",
    a: "空調服は作業中の体感負荷を下げる対策として有効ですが、休憩所や待機場所を涼しくする設備とは役割が違います。酷暑現場では空調服に加えて、工場扇・スポットクーラー・休憩所の冷却設備を組み合わせるのがおすすめです。",
  },
  {
    q: "建設現場の休憩所にはどんな暑さ対策用品が向いていますか？",
    a: "工場扇、スポットクーラー、クーラーボックス、冷却タオル、飲料・塩分補給品、応急セットなどが基本です。さらに短時間で個人を冷やしたい場合は、1人用のクールダウン設備も選択肢になります。",
  },
  {
    q: "1人用クールダウン設備はどんな現場に向いていますか？",
    a: "高温環境で作業する人が多く、交代で休憩を取れる現場に向いています。建設現場、屋外イベント、工場、倉庫、学校行事、スポーツ施設などで、一時的にしっかり体を冷やしたい場面に適しています。",
  },
  {
    q: "工場扇とスポットクーラーは何が違いますか？",
    a: "工場扇は空気を動かして風を送る用品で広い範囲の送風に向きます。スポットクーラーは冷風を特定の場所に届ける設備で、休憩所や作業ポイントの局所冷却に向きます。工場扇は冷房ではない点に注意が必要です。",
  },
  {
    q: "休憩所の暑さ対策で最初に確認すべきことは？",
    a: "設置場所、電源、日陰、排熱スペース、動線、利用人数、搬入経路を確認することが大切です。大型設備を導入する場合は保管場所や移動方法も事前に確認しましょう。",
  },
  {
    q: "イベントスタッフの暑さ対策にも使えますか？",
    a: "はい。屋外イベントでは設営・撤収・警備・案内・物販などでスタッフが長時間暑熱環境に置かれます。交代休憩の場所を決め、送風・冷却・水分補給・応急対応をセットで準備することが重要です。環境省のガイドラインでも空調の効いた休憩場所の設置や短時間での交代休憩が示されています。",
  },
  {
    q: "熱中症応急セットは必要ですか？",
    a: "暑さ対策用品は予防だけでなく、体調不良が起きた場合の初動対応も考えて準備する必要があります。応急セットは現場・イベント・学校などで万が一に備える用品として検討しやすいです。",
  },
  {
    q: "ど冷えもんBOXはどのような位置づけの商品ですか？",
    a: "作業中に着るウェアではなく、休憩時や交代時に1人を短時間で冷やすためのパーソナルクーリングボックスです。現場全体を冷やす設備ではなく、休憩所の質を高める冷却設備として考えると導入イメージがしやすくなります。",
  },
];

const RELATED: RelatedArticle[] = [
  {
    href: "/articles/outdoor-work-heatstroke-measures",
    label:
      "外仕事の熱中症対策｜現場・イベント・屋外倉庫で使える暑さ対策グッズと実務チェックリスト",
  },
  {
    href: "/articles/safety-shoes-replacement",
    label: "安全靴の交換時期はいつ？靴底・先芯・破れの見分け方と買い替え目安",
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "ホーム",
      item: "https://sagyou-navi.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "熱中症・暑さ対策",
      item: "https://sagyou-navi.com/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "建設現場の暑さ対策グッズ",
    },
  ],
};

export default function Page() {
  return (
    <ArticleLayout faq={FAQ}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Breadcrumb current="建設現場の暑さ対策グッズ" />
      <ArticleHeader
        category="guide"
        readingTime={13}
        title="建設現場の暑さ対策グッズ"
        subtitle="空調服だけでは足りない酷暑現場の冷却設備と休憩所づくり"
      />
      <HeroImage
        src="/記事画像/dohiemon-box-hero.jpg"
        alt="建設現場の休憩所で暑さ対策設備を確認する作業員"
      />

      <ArticleContent>
        <p className="mb-4 leading-relaxed">
          夏場の建設現場や屋外イベントでは、空調服や冷感インナーを用意していても、「休憩所に戻っても暑い」「体にこもった熱が抜けにくい」と感じる場面があります。作業中の対策だけでは、酷暑の現場をカバーしきれないことがあるのです。
        </p>
        <p className="mb-4 leading-relaxed">
          屋外作業の暑さ対策は、作業中に着用するグッズだけでなく、作業場所の空気を動かす設備、休憩所を冷やす設備、万が一に備える応急用品まで含めて考えることが大切です。
        </p>
        <p className="mb-6 leading-relaxed">
          この記事では、建設現場・工事現場・屋外イベントの担当者向けに、暑さ対策用品を
          <strong>作業中・作業場所・休憩所・応急対応の4つ</strong>
          に分けて整理します。近年注目される「1人用のクールダウン設備」も含め、酷暑現場でどのように休憩環境を整えるべきかをわかりやすく解説します。
        </p>

        <div className="mb-6 rounded-xl border border-amber-200 bg-amber-50 p-5">
          <p className="mb-2 text-sm font-bold text-amber-800">★ この記事の即答</p>
          <p className="text-sm leading-relaxed text-amber-900">
            <strong>
              屋外作業の暑さ対策は「作業中・作業場所・休憩所・万が一」の4層で考えるのが基本。
            </strong>
            作業中は空調ウェア・冷感インナー・冷却ベスト、作業場所は工場扇、休憩所はスポットクーラーや1人用クールダウン設備、万が一は応急セット。
            空調服は作業中の負担軽減に役立ちますが、
            <strong>休憩時にしっかり体を冷やす設備とは役割が違います</strong>
            。酷暑の現場では、涼しい休憩所・一時退避スペースを用意する考え方が重要です。
          </p>
        </div>

        <div className="mb-6 border-l-4 border-blue-600 bg-blue-50 p-5">
          <p className="mb-3 font-bold text-blue-900">
            まず結論：屋外作業の暑さ対策は“4層”で考える
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="text-left text-blue-900">
                  <th className="border border-blue-200 p-2">対策の層</th>
                  <th className="border border-blue-200 p-2">主な役割</th>
                  <th className="border border-blue-200 p-2">代表的な用品</th>
                </tr>
              </thead>
              <tbody className="text-blue-900">
                <tr>
                  <td className="border border-blue-200 p-2">作業中の対策</td>
                  <td className="border border-blue-200 p-2">体感負荷を下げる</td>
                  <td className="border border-blue-200 p-2">
                    空調ウェア、冷感インナー、冷却ベスト
                  </td>
                </tr>
                <tr>
                  <td className="border border-blue-200 p-2">作業場所の対策</td>
                  <td className="border border-blue-200 p-2">空気を動かす・熱気を逃がす</td>
                  <td className="border border-blue-200 p-2">工場扇、コードレス工場扇</td>
                </tr>
                <tr>
                  <td className="border border-blue-200 p-2">休憩所の対策</td>
                  <td className="border border-blue-200 p-2">休憩時に体を冷やす</td>
                  <td className="border border-blue-200 p-2">
                    スポットクーラー、1人用クールダウン設備
                  </td>
                </tr>
                <tr>
                  <td className="border border-blue-200 p-2">応急対応の備え</td>
                  <td className="border border-blue-200 p-2">体調不良時にすぐ対応</td>
                  <td className="border border-blue-200 p-2">
                    熱中症応急セット、エマージェンシープール
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-8 border-l-4 border-amber-500 bg-amber-50 p-5">
          <p className="mb-2 font-bold text-amber-800">熱中症対策に関する注意</p>
          <p className="text-sm leading-relaxed text-amber-900">
            本記事は暑さ対策・熱中症予防の一般的な情報提供であり、医療的な診断ではありません。紹介する用品は予防やクールダウンを助けるものであり、熱中症を確実に防ぐものではありません。
            <strong>
              意識がもうろうとしている、自力で水分が取れない、呼びかけへの反応がおかしい、休んでも改善しない
            </strong>
            場合は重症のおそれがあるため、ためらわず救急要請（119）や医療機関の受診を行ってください。判断に迷うときは#7119も活用できます。高齢者・持病のある方・暑さに慣れていない方は特に注意してください。最新の基準・運用は厚生労働省・環境省・各自治体の情報や社内ルール・製品の取扱説明書をご確認ください。
          </p>
        </div>

        <h2 className="mt-10 mb-3 text-xl font-bold text-gray-900">
          屋外作業の暑さ対策グッズは何を選べばよい？
        </h2>
        <p className="mb-4 rounded-md bg-gray-100 p-3 text-sm text-gray-600">
          まず「作業中」と「休憩中」を分けて考えるのがコツ。空調服だけでなく、休憩所を冷やす設備まで含めて選ぶと、酷暑現場でも抜けが出にくくなります。
        </p>

        <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">
          まずは「作業中」と「休憩中」を分けて考える
        </h3>
        <p className="mb-4 text-sm leading-relaxed">
          作業中に体感を下げる用品と、休憩中に体を冷やす設備は役割が異なります。両方を用意して初めて、現場の暑さ対策が一巡します。
        </p>

        <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">
          空調服だけでなく、休憩所の冷却も必要
        </h3>
        <p className="mb-4 text-sm leading-relaxed">
          空調服は動きながら使える便利な用品ですが、休憩所が暑いままだと、休んでも体に熱が残りやすくなります。休憩所側の冷却も合わせて検討しましょう。
        </p>

        <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">
          建設現場・イベントでは“交代で冷やせる場所”が重要
        </h3>
        <p className="mb-4 text-sm leading-relaxed">
          環境省のイベント向けガイドラインでも、屋外スタッフには空調の効いた休憩場所を設け、暑熱な作業はなるべく短時間で交代させて涼しい場所で休ませることが示されています。交代でしっかり冷やせる場所づくりが鍵です。
        </p>

        <h2 className="mt-10 mb-3 text-xl font-bold text-gray-900">
          建設現場・イベントの暑さ対策は4層で考える
        </h2>
        <p className="mb-4 rounded-md bg-gray-100 p-3 text-sm text-gray-600">
          作業中・作業場所・休憩所・万が一の4層で用品を割り当てると、過不足なく整理できます。
        </p>

        <figure className="mb-4">
          <img
            src="/記事画像/dohiemon-box-event-scene.jpg"
            alt="屋外イベントのスタッフ休憩所で暑さ対策設備を活用する様子"
            className="w-full rounded-xl object-cover"
          />
        </figure>

        <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">
          1. 作業中に体感負荷を下げる用品
        </h3>
        <p className="mb-4 text-sm leading-relaxed">
          空調ウェア・冷感インナー・冷却ベストなど。動きながら使え、作業中の体感を下げます。ただし休憩所の冷却の代わりにはなりません。
        </p>

        <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">
          2. 作業場所の空気を動かす用品
        </h3>
        <p className="mb-4 text-sm leading-relaxed">
          工場扇・床置き工場扇・コードレス工場扇など。広い範囲に送風し、熱気のこもりを和らげます。冷房ではない点に注意。
        </p>

        <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">
          3. 休憩所・待機所を冷やす用品
        </h3>
        <p className="mb-4 text-sm leading-relaxed">
          スポットクーラー・ミニスポットクーラー、そして1人用クールダウン設備など。休憩時に体を冷やすための設備です。
        </p>

        <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">
          4. 万が一に備える用品
        </h3>
        <p className="mb-4 text-sm leading-relaxed">
          熱中症対策キット・応急セット・エマージェンシープールなど。体調不良時の初動対応のために、予防と合わせて準備します。
        </p>

        <h2 className="mt-10 mb-3 text-xl font-bold text-gray-900">
          空調服だけでは足りない？休憩所の冷却が重要な理由
        </h2>
        <p className="mb-4 rounded-md bg-gray-100 p-3 text-sm text-gray-600">
          作業中の対策と休憩中の対策は役割が違います。休憩所が涼しくないと、休んでも熱が抜けにくく、回復が不十分になりがちです。
        </p>
        <ul className="mb-4 list-disc space-y-1 pl-5 text-sm">
          <li>
            <strong>役割が違う</strong>
            ：空調服は作業中の体感負荷軽減、休憩所の冷却は回復のための環境づくり
          </li>
          <li>
            <strong>熱が残りやすい</strong>
            ：休憩しても涼しくなければ、体にこもった熱が抜けにくい
          </li>
          <li>
            <strong>一時退避スペース</strong>
            ：高温現場では、短時間でも体を冷やせる場所を用意する考え方が有効
          </li>
        </ul>
        <p className="mb-4 text-sm leading-relaxed">
          2025年6月施行の改正労働安全衛生規則でも、一定条件の作業について「作業からの離脱」「身体の冷却」などの重篤化防止措置の手順整備が事業者に義務付けられました。涼しい休憩場所・身体を冷やす手段の用意は、いまや現場運営の実務課題です。
        </p>

        <h2 className="mt-10 mb-3 text-xl font-bold text-gray-900">
          休憩所の暑さ対策に使える設備は？
        </h2>
        <p className="mb-4 rounded-md bg-gray-100 p-3 text-sm text-gray-600">
          送風（工場扇）→局所冷却（スポットクーラー）→個人冷却（1人用クールダウン設備）と、冷やす強さと範囲で選び分けます。
        </p>
        <ul className="mb-4 list-disc space-y-1 pl-5 text-sm">
          <li>
            <strong>工場扇</strong>：広い空間の空気を動かす（冷房ではない）
          </li>
          <li>
            <strong>スポットクーラー</strong>：一部エリアへ冷風を届ける（排熱・設置に注意）
          </li>
          <li>
            <strong>1人用クールダウン設備</strong>：短時間で個人をしっかり冷やす
          </li>
        </ul>
        <p className="mb-4 text-sm leading-relaxed">
          最近は、1人が中に入って短時間でクールダウンできる
          <strong>パーソナルクーリングボックス</strong>
          という選択肢もあります。次の章で詳しく見ていきます。
        </p>

        <h2 className="mt-10 mb-3 text-xl font-bold text-gray-900">
          1人用クールダウン設備とは？酷暑現場で注目される理由
        </h2>
        <p className="mb-4 rounded-md bg-gray-100 p-3 text-sm text-gray-600">
          1人ずつ交代で使う「冷却休憩スペース」です。スポットクーラーや工場扇とは違い、「個人を短時間でしっかり冷やす」という発想の設備です。
        </p>

        <figure className="mb-4">
          <img
            src="/記事画像/heat-countermeasure-comparison-scene.jpg"
            alt="工場扇やスポットクーラーなど暑さ対策用品の役割分担イメージ"
            className="w-full rounded-xl object-cover"
          />
        </figure>

        <p className="mb-4 text-sm leading-relaxed">
          その代表例が、TRUSCOの
          <strong>ど冷えもんBOX（パーソナルクーリングボックス）</strong>
          です。約5℃の冷風で体を直接冷やせる1人用の設備で、単相100V電源で使え、設置工事不要、キャスター付き、IPX3相当で屋内外の使用が想定されています。20分自動停止で冷え過ぎにも配慮されています。
        </p>
        <ul className="mb-4 list-disc space-y-1 pl-5 text-sm">
          <li>1人ずつ交代で使う“冷却休憩スペース”という考え方</li>
          <li>建設現場・イベント・工場・倉庫の休憩導線に合いやすい</li>
          <li>スポットクーラーや工場扇とは違う「個人を冷やす」アプローチ</li>
        </ul>

        <div className="my-6 rounded-xl border border-blue-200 bg-blue-50 p-5 text-center">
          <p className="mb-3 text-sm text-blue-900">
            1人用クールダウン設備の仕様・サイズ・価格は商品ページでご確認ください。
          </p>
          <a
            href={buildUrl(URLS.dohiemon, "product_dohiemon_intro")}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
          >
            ど冷えもんBOXの詳細を見る →
          </a>
        </div>

        <YoutubeEmbed
          src="https://www.youtube.com/embed/KwGkGnNZyUQ?si=x3mWAU9V-oDn1VmP"
          title="1人用クールダウン設備の紹介"
        />

        <h2 className="mt-10 mb-3 text-xl font-bold text-gray-900">
          どんな現場なら1人用クールダウン設備が向いている？
        </h2>
        <p className="mb-4 rounded-md bg-gray-100 p-3 text-sm text-gray-600">
          高温環境で作業する人が多く、交代で休憩を取れる現場に向きます。
        </p>
        <ul className="mb-4 list-disc space-y-1 pl-5 text-sm">
          <li>
            <strong>建設現場</strong>：昼休憩・午前午後の小休止・作業後のクールダウン
          </li>
          <li>
            <strong>イベント会場</strong>：設営・撤収・警備・案内スタッフの交代休憩
          </li>
          <li>
            <strong>工場・倉庫</strong>：高温エリア作業後の一時冷却
          </li>
          <li>
            <strong>学校・スポーツ施設</strong>：屋外行事や大会運営時の待機・救護補助
          </li>
        </ul>

        <h2 className="mt-10 mb-3 text-xl font-bold text-gray-900">
          暑さ対策用品の使い分け比較表
        </h2>
        <p className="mb-4 rounded-md bg-gray-100 p-3 text-sm text-gray-600">
          用品ごとの「向いている場面・強み・注意点」を一覧で整理します。社内共有にそのまま使えます。
        </p>
        <div className="my-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border border-gray-200 p-2">用品</th>
                <th className="border border-gray-200 p-2">向いている場面</th>
                <th className="border border-gray-200 p-2">強み</th>
                <th className="border border-gray-200 p-2">注意点</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 p-2">空調ウェア</td>
                <td className="border border-gray-200 p-2">作業中</td>
                <td className="border border-gray-200 p-2">動きながら使える</td>
                <td className="border border-gray-200 p-2">休憩所の冷却にはならない</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 p-2">冷感インナー</td>
                <td className="border border-gray-200 p-2">作業中</td>
                <td className="border border-gray-200 p-2">取り入れやすい</td>
                <td className="border border-gray-200 p-2">単体では強い冷却設備ではない</td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-2">冷却ベスト</td>
                <td className="border border-gray-200 p-2">高温作業中</td>
                <td className="border border-gray-200 p-2">体に近い位置を冷やせる</td>
                <td className="border border-gray-200 p-2">保冷剤管理が必要</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 p-2">工場扇</td>
                <td className="border border-gray-200 p-2">作業場・休憩所</td>
                <td className="border border-gray-200 p-2">広い範囲に送風できる</td>
                <td className="border border-gray-200 p-2">冷房ではない</td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-2">スポットクーラー</td>
                <td className="border border-gray-200 p-2">休憩所・局所冷却</td>
                <td className="border border-gray-200 p-2">冷風を届けやすい</td>
                <td className="border border-gray-200 p-2">排熱・設置場所に注意</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 p-2">1人用クールダウン設備</td>
                <td className="border border-gray-200 p-2">交代休憩・一時退避</td>
                <td className="border border-gray-200 p-2">個人を短時間で冷やしやすい</td>
                <td className="border border-gray-200 p-2">1名用・設置条件確認が必要</td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-2">応急セット</td>
                <td className="border border-gray-200 p-2">万が一の備え</td>
                <td className="border border-gray-200 p-2">初動対応に役立つ</td>
                <td className="border border-gray-200 p-2">使用ルールの共有が必要</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="mt-10 mb-3 text-xl font-bold text-gray-900">
          導入前に確認したいチェックリスト
        </h2>
        <p className="mb-4 rounded-md bg-gray-100 p-3 text-sm text-gray-600">
          設置・運用・搬入の観点で確認しておくと、導入後のトラブルを防げます。
        </p>

        <figure className="mb-4">
          <img
            src="/記事画像/dohiemon-box-installation-check.jpg"
            alt="暑さ対策設備の設置スペースを確認する担当者"
            className="w-full rounded-xl object-cover"
          />
        </figure>

        <div className="mb-6 rounded-xl border border-gray-200 bg-white p-5">
          <p className="mb-2 text-sm font-semibold text-gray-700">設置場所</p>
          <ul className="mb-3 space-y-1 pl-1 text-sm">
            <li>☐ 日陰や休憩所近くに置けるか</li>
            <li>☐ 動線をふさがないか</li>
            <li>☐ 電源（大型設備は100V）が取れるか</li>
            <li>☐ 排熱スペースを確保できるか（1人用設備は後面・左右20cm以上）</li>
          </ul>
          <p className="mb-2 text-sm font-semibold text-gray-700">運用ルール</p>
          <ul className="mb-3 space-y-1 pl-1 text-sm">
            <li>☐ 誰が使うか／何分利用するか</li>
            <li>☐ 使用後の確認は誰が行うか</li>
            <li>☐ 体調不良者対応と通常休憩を分けるか</li>
          </ul>
          <p className="mb-2 text-sm font-semibold text-gray-700">搬入・保管</p>
          <ul className="space-y-1 pl-1 text-sm">
            <li>☐ 搬入経路は確保できるか／フォークリフトを使えるか</li>
            <li>☐ 使用しない時期の保管場所はあるか</li>
            <li>☐ 納期を都度確認したか</li>
          </ul>
        </div>
        <p className="mb-4 text-sm leading-relaxed">
          なお、ど冷えもんBOXのような大型設備（重量約293kg）は、トラック積み込みや荷降ろしにフォークリフトが推奨され、納期は都度確認が必要と案内されています。導入時は搬入計画も合わせて立てましょう。
        </p>

        <YoutubeEmbed
          src="https://www.youtube.com/embed/3LKtExKtBj8?si=2_fZ2rnXxB915Z9_"
          title="暑さ対策設備の使用イメージ"
        />

        <h2 className="mt-10 mb-3 text-xl font-bold text-gray-900">
          展示会・SNSでも注目される暑さ対策設備
        </h2>
        <p className="mb-4 rounded-md bg-gray-100 p-3 text-sm text-gray-600">
          「冷やす休憩スペース」という考え方は展示会でも注目されています。実際の様子はSNSの投稿も参考になります。
        </p>
        <div className="my-6 flex justify-center">
          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/reel/DZwMMAtBT9p/"
            data-instgrm-version="14"
            style={{ maxWidth: "540px", width: "100%" }}
          />
        </div>

        <h2 className="mt-10 mb-3 text-xl font-bold text-gray-900">
          作業用品ナビとしておすすめしたい暑さ対策用品
        </h2>
        <p className="mb-4 rounded-md bg-gray-100 p-3 text-sm text-gray-600">
          押し売りではなく、現場課題を解決する選択肢としてカテゴリ別に紹介します。価格・在庫・納期・仕様は変動するため、最新情報は各商品ページでご確認ください。
        </p>

        <figure className="mb-4">
          <img
            src="/記事画像/layered-heatstroke-measures-scene.jpg"
            alt="空調ウェアや工場扇を組み合わせた作業現場の多層的な暑さ対策"
            className="w-full rounded-xl object-cover"
          />
        </figure>

        <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">作業中の暑さ対策に</h3>
        <ProductGrid items={wearItems} />

        <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">
          作業場所・休憩所向けに
        </h3>
        <ProductGrid items={envItems} />
        <div className="mb-4">
          <a
            href={buildUrl(URLS.fanList, "cta_fan_list")}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex items-center justify-center rounded-lg border border-blue-700 bg-white px-5 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
          >
            工場扇一覧を見る →
          </a>
        </div>
        <p className="mb-2 text-sm leading-relaxed">
          休憩所をさらに強く冷やしたい場合は、1人用クールダウン設備も選択肢です。
        </p>
        <ProductGrid
          items={[
            {
              id: "1130071046",
              name: "TRUSCO ど冷えもんBOX パーソナルクーリングボックス",
              note: "休憩時に1人を短時間でしっかり冷やす",
            },
          ]}
        />

        <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">万が一の備えに</h3>
        <figure className="mb-4">
          <img
            src="/記事画像/heatstroke-emergency-preparedness.jpg"
            alt="熱中症応急セットや冷却用品を準備するイメージ"
            className="w-full rounded-xl object-cover"
          />
        </figure>
        <ProductGrid items={emergencyItems} />

        <h2 className="mt-10 mb-3 text-xl font-bold text-gray-900">
          まとめ｜酷暑現場では“作業中”だけでなく“休憩中に冷やす”対策を
        </h2>
        <p className="mb-4 leading-relaxed">
          屋外作業の暑さ対策は、作業中のウェア・作業場の送風・休憩所の冷却・応急対応の4層で考えると、過不足なく整理できます。空調服は作業中の負担軽減に有効ですが、休憩所が暑いままでは体に熱が残りやすいため、休憩時に体を冷やす設備までセットで考えることが大切です。スポットクーラーや工場扇に加え、1人を短時間でしっかり冷やす1人用クールダウン設備という選択肢も、酷暑現場の休憩所の質を高めます。導入時は設置場所・電源・排熱・搬入・納期・運用ルールを確認し、自社の現場に合う組み合わせを選んでください。
        </p>

        <div className="my-8 rounded-xl border border-blue-200 bg-blue-50 p-6">
          <p className="mb-4 font-bold text-blue-900">現場の暑さ対策をまとめて検討する</p>
          <div className="flex flex-wrap gap-3">
            <a
              href={buildUrl(URLS.feature, "cta_feature_footer")}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
            >
              熱中症対策特集ページを見る →
            </a>
            <a
              href={buildUrl(URLS.dohiemon, "cta_dohiemon_footer")}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center justify-center rounded-lg border border-blue-700 bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
            >
              ど冷えもんBOXの商品ページへ →
            </a>
          </div>
        </div>

        <FaqSection faq={FAQ} />
        <RelatedArticles items={RELATED} />
        <Disclaimer extra="納期・仕様は変動する場合があり、最新情報は各商品ページでご確認ください。" />
      </ArticleContent>
    </ArticleLayout>
  );
}
