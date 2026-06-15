import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArticleLayout,
  ArticleContent,
  Breadcrumb,
  ArticleHeader,
  HeroImage,
  ConclusionBox,
  ArticleTable,
  ProductGrid,
  ArticleCTA,
  CategoryLinks,
  RelatedArticles,
  Disclaimer,
  FaqSection,
  type RelatedArticle,
} from "@/components/article";
import { STORE_LINKS } from "@/lib/product-links";

const SLUG = "warehouse-heatstroke-taisaku";
const YQ = STORE_LINKS.yahoo;
const HEAT_LIST_URL = `${YQ}eab32ec7ce6.html`;

export const metadata: Metadata = {
  title:
    "倉庫作業の熱中症対策｜工場扇・スポットクーラー・冷却ベストで現場を守る方法｜作業用品ナビ",
  description:
    "倉庫作業の熱中症対策を、WBGT測定・工場扇・スポットクーラー・冷却ベスト・休憩所整備・2025年義務化対応の観点で解説。エリア別に法人が準備すべき暑さ対策用品と運用チェックリストを整理します。",
  alternates: {
    canonical: `https://sagyou-navi.com/articles/${SLUG}`,
  },
  openGraph: {
    title:
      "倉庫作業の熱中症対策｜工場扇・スポットクーラー・冷却ベストで現場を守る方法",
    description:
      "倉庫作業の熱中症対策を、WBGT測定・工場扇・スポットクーラー・冷却ベスト・休憩所整備・2025年義務化対応の観点で解説。",
    type: "article",
  },
};

const WBGT = [
  {
    id: "171834",
    name: "佐藤 黒球型携帯熱中症計 SK-181GT",
    note: "輻射熱を含めて測れる黒球型。各エリアを持ち運んで測定。",
  },
  {
    id: "171833",
    name: "佐藤 熱中症暑さ指数計 SK-161GT",
    note: "定点で暑さ指数を把握したい場所に。",
  },
];

const FANS = [
  {
    id: "203283",
    name: "TRUSCO 全閉式工場扇 ジェネラルファン 据置き AF-45A",
    note: "荷下ろし場・出荷場でまず空気を動かしたいときに。",
  },
  {
    id: "172434",
    name: "TRUSCO 全閉式工場扇 ジェネラルファン 壁掛け TFBA-45W-BK",
    note: "床に置けない通路・固定作業場に。",
  },
  {
    id: "171597",
    name: "TRUSCO ゼフィール ハンガータイプ",
    note: "梱包・検品エリアで上部から送風したいときに。",
  },
  {
    id: "171601",
    name: "TRUSCO ゼフィール 壁掛けタイプ",
    note: "通路まわりの送風に。",
  },
  {
    id: "171964",
    name: "アクアシステム 無給油エアモーター式 大型 AFG-24NL",
    note: "広い空間の大風量送風に。",
  },
  {
    id: "203354",
    name: "スーパー工業 100Vミスト発生機 SFC-114",
    note: "開放部・屋外寄りの体感温度対策に。",
  },
];

const SPOT_COOLER = [
  {
    id: "172108",
    name: "IRIS スポットクーラー 2.5kw ブラック",
    note: "作業者が滞在する作業点の局所冷却に。",
  },
  {
    id: "172009",
    name: "ナカトミ 除湿機 DM-10",
    note: "湿度が高い場所の体感改善に。",
  },
  {
    id: "172012",
    name: "ナカトミ 除湿機 DM-22",
    note: "より広めの空間の除湿に。",
  },
];

const COOLING_WEAR = [
  {
    id: "172296",
    name: "サンコー ハーネス対応冷蔵ベスト",
    note: "安全帯併用の作業で体を冷やしたいときに。",
  },
  {
    id: "172467",
    name: "スリーライク 注水式ベスト BODYCOOL SMART-X",
    note: "水で繰り返し冷却したい現場に。",
  },
  {
    id: "171778",
    name: "空調服風神 クールベスト",
    note: "風を取り込める環境での体温対策に。",
  },
  {
    id: "172464",
    name: "サンコー 冷蔵服3",
    note: "しっかり体を冷やしたい高温作業に。",
  },
  {
    id: "172122",
    name: "おたふく BT パワーストレッチEVO ロングスリーブ",
    note: "支給しやすい冷感インナー。重ね着にも。",
  },
  {
    id: "171713",
    name: "バートル 半袖エアーフィット",
    note: "通気性重視のインナーに。",
  },
];

const REST_AREA = [
  {
    id: "203270",
    name: "Suiden クーラーテント 2.4m×2.4m",
    note: "暑い場所の近くに臨時の涼しい休憩所を作りたいときに。",
  },
];

const CATEGORY_LINKS = [
  {
    label: "熱中症対策アイテム 一覧",
    url: HEAT_LIST_URL,
    uc: "cat_heat",
  },
];

const RELATED_ARTICLES = [
  {
    slug: "safety-shoes-jis-jsaa",
    title:
      "安全靴・プロテクティブスニーカーの違い｜JIS T8101とJSAA規格の見方",
  },
  {
    slug: "trusco-hand-pallet-erabikata",
    title:
      "トラスコのハンドパレットの選び方｜フォーク長・能力・低床の違い",
  },
  {
    slug: "kartio-load-capacity",
    title:
      "カルティオは何kgまで載せられる？均等荷重200kgの正しい意味",
  },
];

const FAQ = [
  {
    q: "倉庫作業でも熱中症対策は必要ですか？",
    a: "必要です。倉庫は屋内でも熱がこもりやすく、荷下ろし・ピッキング・梱包など身体負荷が高い作業があります。WBGT測定、休憩、水分補給、工場扇やスポットクーラーなどを組み合わせて対策します。",
  },
  {
    q: "倉庫では工場扇とスポットクーラーのどちらがよいですか？",
    a: "空気を動かしたい広い場所には工場扇、作業者や作業点を局所的に冷やしたい場所にはスポットクーラーが向きます。ローディングドックや梱包場など、場所ごとに使い分けるのがおすすめです。",
  },
  {
    q: "倉庫のWBGTはどこで測ればよいですか？",
    a: "ローディングドック、高所、ピッキングエリア、梱包場、休憩所など、暑さが異なる場所で測るのが理想です。厚労省関連の事例でも、倉庫高所で温度を測定し作業短縮や休憩につなげた取り組みが紹介されています。",
  },
  {
    q: "冷却ベストや空調服だけで十分ですか？",
    a: "個人装備は有効な選択肢ですが、それだけに頼るのは避けたいところです。工場扇、スポットクーラー、休憩所、WBGT測定、休憩ルールなどと組み合わせて対策することが重要です。",
  },
  {
    q: "倉庫作業の熱中症対策で会社が準備すべきものは？",
    a: "WBGT計、工場扇、スポットクーラー、冷却ベスト、冷感インナー、休憩所、飲料・塩分補給、緊急連絡体制、対応手順、周知用の掲示やチェックシートなどを整理するとよいです。2025年6月からの義務化への対応も確認しましょう。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "倉庫作業の熱中症対策｜工場扇・スポットクーラー・冷却ベストで現場を守る方法",
  description:
    "倉庫作業の熱中症対策を、WBGT測定・工場扇・スポットクーラー・冷却ベスト・休憩所整備・2025年義務化対応の観点で解説。",
  datePublished: "2026-06-12",
  author: {
    "@type": "Organization",
    name: "株式会社トレード",
    url: "https://trade-sign.jp/",
  },
  publisher: {
    "@type": "Organization",
    name: "株式会社トレード",
    url: "https://trade-sign.jp/",
  },
};

const RELATED: RelatedArticle[] = RELATED_ARTICLES.map((a) => ({
  href: `/articles/${a.slug}`,
  label: a.title,
}));

export default function WarehouseHeatstrokeTaisakuPage() {
  return (
    <ArticleLayout faq={FAQ} articleJsonLd={articleJsonLd}>
      <Breadcrumb current="倉庫作業の熱中症対策" />
      <ArticleHeader
        category="guide"
        readingTime={13}
        title="倉庫作業の熱中症対策"
        subtitle="工場扇・スポットクーラー・冷却ベストで現場を守る方法"
      />
      <HeroImage
        src="/images/articles/warehouse-heatstroke-prevention-hero.jpg"
        alt="倉庫作業の熱中症対策として工場扇やWBGT計を確認する現場担当者"
      />
      <ArticleContent>
          <p className="text-lg leading-relaxed text-muted-foreground">
            倉庫作業は屋外作業に比べて見落とされがちですが、夏場は熱中症リスクが高い現場のひとつです。大型シャッターから外気が入り、天井付近に熱がこもり、荷下ろし・ピッキング・梱包・出荷で身体を動かし続けるため、気温以上に作業者へ負担がかかることがあります。本記事では倉庫作業の熱中症対策を、WBGT測定・工場扇・スポットクーラー・冷却ベスト・休憩所整備・報告体制まで、法人担当者がそのまま社内共有しやすい形で整理しました。「この場所にはこの対策、この作業にはこの備品」という形で、現場課題から逆算してまとめています。
          </p>

          <ConclusionBox>
            <strong>結論：</strong>
            倉庫作業の熱中症対策は、まずWBGT（暑さ指数）の測定から始めます。気温だけでなく湿度・輻射熱・風を含めて現場を把握するためです。対策は「環境対策（工場扇・スポットクーラー・ミスト・クーラーテント）」「個人対策（冷却ベスト・空調服・冷感インナー）」「運用対策（休憩・水分補給・報告体制）」の3層で考えると失敗しにくくなります。さらに倉庫はローディングドック・ピッキング・梱包・出荷待機・休憩所で暑さの原因が違うため、場所ごとに対策を変えるのがポイントです。なお2025年6月1日から、一定条件の暑熱作業では報告体制・対応手順・周知が義務化されています。
          </ConclusionBox>

          <section className="mt-12">
            <h2 className="text-3xl font-black text-foreground">
              倉庫作業で熱中症対策が必要な理由は？
            </h2>
            <ConclusionBox>
              倉庫は「屋内だから安全」ではありません。外気・輻射熱・湿度・作業強度が重なり、屋外に近い負荷がかかる場所があります。
            </ConclusionBox>
            <h3 className="mt-8 text-xl font-bold text-foreground">
              倉庫は屋内でも熱がこもりやすい
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              空調が効きにくい広い空間では、天井付近に熱が上昇してこもります。厚労省関連の事例でも、倉庫高所で熱気が上昇する状況を温度の「見える化」で把握し、作業時間の短縮や休憩につなげた取り組みが紹介されています。
            </p>
            <h3 className="mt-8 text-xl font-bold text-foreground">
              荷下ろし・ピッキング・梱包は身体負荷が高い
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              重い荷物の上げ下ろし、広いフロアを歩き回るピッキング、立ちっぱなしの梱包・検品など、体内で熱が生まれやすい作業が連続します。気温が同じでも、安静時より体温が上がりやすくなります。
            </p>
            <h3 className="mt-8 text-xl font-bold text-foreground">
              シャッター開放部や高所作業は暑さが偏りやすい
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              大型シャッターを開けると外気・日射が入り、車両の排熱も加わります。一方で奥まった場所は風が通らず熱がこもります。同じ倉庫内でも場所によって暑さが大きく違うのが、倉庫対策の難しさです。
            </p>
            <h3 className="mt-8 text-xl font-bold text-foreground">
              派遣・短期スタッフは暑熱順化が不十分な場合がある
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              繁忙期に増える短期・派遣スタッフは、暑さに体が慣れる「暑熱順化」が進んでいないことがあります。同じ環境でも体調を崩しやすいため、新しく入った人ほど注意が必要です。
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-black text-foreground">
              まず何から始める？倉庫作業の熱中症対策はWBGT測定が基本
            </h2>
            <ConclusionBox>
              気温だけで判断せず、WBGT（暑さ指数）を測ることから始めます。場所ごとに測り、値に応じて作業・休憩・巡回のルールを変えるのが基本です。
            </ConclusionBox>
            <figure className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl bg-primary-light">
              <Image
                src="/images/articles/warehouse-wbgt-monitoring-check.jpg"
                alt="倉庫内でWBGT計を確認して熱中症リスクを見える化するイメージ"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1152px"
              />
            </figure>
            <h3 className="mt-8 text-xl font-bold text-foreground">
              気温だけで判断しない
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              WBGTは気温・湿度・輻射熱・風を総合的に評価する指標です。厚労省も職場の熱中症予防対策としてWBGT値の把握・低減を挙げています。同じ30℃でも湿度が高く風がなければ危険度は上がります。
            </p>
            <h3 className="mt-8 text-xl font-bold text-foreground">
              ローディングドック・高所・休憩所で測る
            </h3>
            <ArticleTable
              head={["測定場所", "理由", "対策の考え方"]}
              rows={[
                [
                  "ローディングドック",
                  "外気・日射・排熱が入りやすい",
                  "工場扇、スポットクーラー、休憩強化",
                ],
                [
                  "ピッキングエリア",
                  "歩行量が多い",
                  "冷却ベスト、休憩、水分補給",
                ],
                [
                  "梱包・出荷エリア",
                  "作業が集中しやすい",
                  "局所冷却、ファン配置",
                ],
                ["高所・中二階", "熱が上昇しやすい", "別途測定、作業時間短縮"],
                [
                  "休憩所",
                  "冷却できる環境か確認",
                  "クーラーテント、冷却用品",
                ],
              ]}
            />
            <h3 className="mt-8 text-xl font-bold text-foreground">
              WBGT値に応じて作業・休憩・巡回ルールを変える
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              測った値は休憩の取り方や作業時間に反映してこそ意味があります。値が高い時間帯は休憩を増やす、巡回頻度を上げる等のルールにつなげます。基準値の運用は厚労省の公表資料や社内ルールに沿って設定してください。
            </p>
            <h3 className="mt-8 text-xl font-bold text-foreground">
              測定結果を見える化して現場に共有する
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              数値を掲示・朝礼で共有すると、作業者自身が危険を意識できます。前述の倉庫事例でも見える化が作業改善のきっかけになっています。
            </p>
            <h3 className="mt-8 text-xl font-bold text-foreground">
              WBGT測定・見える化（まず現場を知る）
            </h3>
            <ProductGrid items={WBGT} cols={2} slug={SLUG} />
            <p className="mt-4 text-sm text-muted-foreground">
              ※測定方法・基準値の運用は公的資料・社内ルールをご確認ください。
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-black text-foreground">
              倉庫作業の熱中症対策は3層で考える
            </h2>
            <ConclusionBox>
              「環境対策」「個人対策」「運用対策」の3層で整理すると、抜け漏れなく対策を組めます。どれか1つに偏らないことが大切です。
            </ConclusionBox>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              対策をバラバラに考えると偏りが生まれます。次の3層で整理すると全体像がつかめます。
            </p>
            <ArticleTable
              head={["対策の層", "目的", "主な用品・施策"]}
              rows={[
                [
                  "環境対策",
                  "作業場所の暑さを下げる",
                  "工場扇、スポットクーラー、ミスト、クーラーテント",
                ],
                [
                  "個人対策",
                  "作業者の体温上昇を抑える",
                  "冷却ベスト、空調服、冷感インナー",
                ],
                [
                  "運用対策",
                  "重症化を防ぐ",
                  "WBGT測定、休憩、水分補給、報告体制",
                ],
              ]}
            />
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              環境対策で暑さそのものを下げ、個人対策で体を守り、運用対策で万一に備える——この役割分担がポイント。3層を組み合わせて初めて現場全体を守れます。
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-black text-foreground">
              場所別に見る｜倉庫作業の暑さ対策
            </h2>
            <ConclusionBox>
              倉庫内でも場所ごとに暑さの原因が違います。原因に合った対策を選ぶことで、無駄なく効かせられます。
            </ConclusionBox>
            <figure className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl bg-primary-light">
              <Image
                src="/images/articles/warehouse-loading-dock-heat-measures.jpg"
                alt="倉庫のローディングドックで工場扇を使う熱中症対策イメージ"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1152px"
              />
            </figure>
            <ArticleTable
              head={["場所", "起きやすい課題", "優先したい対策"]}
              rows={[
                [
                  "ローディングドック",
                  "外気・日射・車両排熱",
                  "工場扇、スポットクーラー、WBGT測定",
                ],
                [
                  "ピッキング",
                  "歩行量が多い",
                  "冷却ベスト、冷感インナー、水分補給",
                ],
                [
                  "梱包・検品",
                  "作業集中・滞留",
                  "ファン、局所冷却、休憩ルール",
                ],
                ["出荷待機", "風が通りにくい", "工場扇、空気循環"],
                [
                  "休憩所",
                  "体を冷やしきれない",
                  "クーラーテント、冷却用品、飲料",
                ],
              ]}
            />
            <h3 className="mt-8 text-xl font-bold text-foreground">
              ローディングドック・荷下ろし場
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              外気・日射・車両排熱が入りやすく、荷下ろしの重作業も重なる高リスクエリア。まず工場扇で空気を動かし、必要に応じてスポットクーラーで作業点を冷やします。WBGT測定の優先度も高い場所です。
            </p>
            <h3 className="mt-8 text-xl font-bold text-foreground">
              ピッキングエリア
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              歩行量が多く体内で熱が生まれやすいエリア。広いため空間冷却が難しく、作業者の体を冷やす個人対策（冷却ベスト・冷感インナー）が効きやすいのが特徴です。水分補給のしやすさも重要。
            </p>
            <h3 className="mt-8 text-xl font-bold text-foreground">
              梱包・検品エリア
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              作業者が滞留しやすく人の密度が上がります。上部から送風できるハンガータイプや局所冷却を組み合わせ、休憩ルールも整えます。
            </p>
            <h3 className="mt-8 text-xl font-bold text-foreground">
              出荷待機・一時保管エリア
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              荷物が積まれて風が通りにくくなりやすい場所。工場扇で空気を循環させ、こもった熱を逃がします。
            </p>
            <h3 className="mt-8 text-xl font-bold text-foreground">
              休憩所・クールダウンスペース
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              ここが暑いと体を回復できず対策全体が崩れます。冷房やクーラーテント、冷却用品、飲料を用意して確実に体を冷やせる環境にします（後述）。
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-black text-foreground">
              工場扇・スポットクーラー・ミストはどう使い分ける？
            </h2>
            <ConclusionBox>
              空気を動かして熱気を逃がすなら工場扇、作業点を局所的に冷やすならスポットクーラー、開放空間ならミスト。倉庫では「設置場所」と「風の流れ」が効果を左右します。
            </ConclusionBox>
            <ArticleTable
              head={["設備", "向く場所", "強み", "注意点"]}
              rows={[
                [
                  "工場扇 据置き",
                  "荷下ろし場、出荷場",
                  "設置しやすく空気を動かせる",
                  "通路をふさがない配置が必要",
                ],
                [
                  "工場扇 壁掛け",
                  "通路・固定作業場",
                  "床面を使わない",
                  "取付位置の検討が必要",
                ],
                [
                  "ハンガータイプ",
                  "梱包・検品エリア",
                  "高所から送風しやすい",
                  "吊り下げ場所の確認が必要",
                ],
                [
                  "スポットクーラー",
                  "作業者が滞在する場所",
                  "局所冷却しやすい",
                  "排熱処理・電源確認が必要",
                ],
                [
                  "ミスト発生機",
                  "開放部・屋外寄り",
                  "体感温度を下げやすい",
                  "湿度・床濡れに注意",
                ],
              ]}
            />
            <h3 className="mt-8 text-xl font-bold text-foreground">
              工場扇は空気を動かして熱気を逃がす
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              倉庫対策の基本はまず空気を動かすこと。据置きタイプは荷下ろし場や出荷場など、まず風がほしい場所に向きます。
            </p>
            <h3 className="mt-8 text-xl font-bold text-foreground">
              壁掛け・ハンガータイプは床面を邪魔しにくい
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              通路や作業エリアでは床に機器を置くと動線の妨げに。壁掛け・ハンガータイプなら床面を使わず安全に送風でき、梱包・検品では上部から送れるハンガータイプが便利です。
            </p>
            <h3 className="mt-8 text-xl font-bold text-foreground">
              スポットクーラーは作業者や作業点を局所的に冷やす
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              広い倉庫全体を冷やすのは現実的でないため、人が滞在する作業点をピンポイントで冷やします。排熱処理と電源容量の確認が必要です。
            </p>
            <h3 className="mt-8 text-xl font-bold text-foreground">
              ミストは屋外寄り・開放空間で検討しやすい
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              シャッター開放部など外気とつながる場所では、ミストで体感温度を下げる方法も。閉じた空間では湿度が上がり逆効果になることもあるため場所を選びます。
            </p>
            <h3 className="mt-8 text-xl font-bold text-foreground">
              倉庫では「設置場所」と「風の流れ」が重要
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              同じ機器でも置く場所と風の向きで効果が変わります。「熱がこもる場所から開口部へ抜ける流れ」を意識して配置すると効きやすくなります。
            </p>
            <h3 className="mt-8 text-xl font-bold text-foreground">
              工場扇・ミスト（環境対策｜空気を動かす）
            </h3>
            <ProductGrid items={FANS} cols={3} slug={SLUG} />
            <h3 className="mt-8 text-xl font-bold text-foreground">
              スポットクーラー・除湿（環境対策｜局所冷却）
            </h3>
            <ProductGrid items={SPOT_COOLER} cols={3} slug={SLUG} />
            <p className="mt-4 text-sm text-muted-foreground">
              ※設置場所・電源・排熱・床濡れなどは商品仕様と現場環境をご確認ください。
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-black text-foreground">
              冷却ベスト・空調服・インナーはどんな倉庫作業に向く？
            </h2>
            <ConclusionBox>
              歩行や移動が多く空間冷却が難しいピッキング・棚入れには、体を直接冷やす着用型が有効。ただし個人装備だけに頼らず、環境対策と組み合わせます。
            </ConclusionBox>
            <figure className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl bg-primary-light">
              <Image
                src="/images/articles/warehouse-picking-cooling-vest.jpg"
                alt="倉庫のピッキング作業で冷却ベストを着用する作業者"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1152px"
              />
            </figure>
            <h3 className="mt-8 text-xl font-bold text-foreground">
              ピッキング・棚入れには着用型対策が有効
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              歩き回る作業では、その人がどこにいても冷やせる着用型が向きます。固定の送風より体に密着した冷却が効きます。
            </p>
            <h3 className="mt-8 text-xl font-bold text-foreground">
              冷却ベストは高温環境で体を冷やしやすい
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              保冷剤や注水で体を直接冷やすタイプは高温環境で効果を発揮。ハーネス対応なら安全帯作業とも併用しやすくなります。
            </p>
            <h3 className="mt-8 text-xl font-bold text-foreground">
              空調服・空調ベストは風を取り込みやすい環境で使いやすい
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              ファンで外気を取り込むタイプは、ある程度風や外気がある環境で効きます。汗の気化を促して体を冷やします。
            </p>
            <h3 className="mt-8 text-xl font-bold text-foreground">
              冷感インナーはまとめ買い・支給品として導入しやすい
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              比較的安価でサイズ展開もしやすく、支給品に向きます。ベストや空調服の下に着る組み合わせも有効です。
            </p>
            <h3 className="mt-8 text-xl font-bold text-foreground">
              個人装備だけに頼らず、環境対策と組み合わせる
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              着用型は便利ですが万全ではありません。工場扇・スポットクーラー・休憩・WBGT測定と組み合わせて初めて十分な対策になります。
            </p>
            <h3 className="mt-8 text-xl font-bold text-foreground">
              冷却ベスト・空調服・インナー（個人対策｜体を冷やす）
            </h3>
            <ProductGrid items={COOLING_WEAR} cols={3} slug={SLUG} />
            <p className="mt-4 text-sm text-muted-foreground">
              ※サイズ・適合・使用方法は商品ページでご確認ください。
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-black text-foreground">
              休憩所・クールダウンスペースはどう作る？
            </h2>
            <ConclusionBox>
              作業場所の近くに、確実に体を冷やせる休憩所を設けます。冷房・日陰・身体を冷やす用品・水分塩分補給をそろえるのが基本です。
            </ConclusionBox>
            <figure className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl bg-primary-light">
              <Image
                src="/images/articles/warehouse-cooldown-rest-area.jpg"
                alt="倉庫作業者向けの熱中症対策休憩所"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1152px"
              />
            </figure>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              厚労省は、高温多湿作業場所の近くに冷房を備えた休憩場所や日陰などの涼しい休憩場所を設けること、氷・冷たいおしぼり・シャワーなど身体を冷やす設備や物品を設けること、水分・塩分補給を容易に行えるようにすることを示しています。
            </p>
            <h3 className="mt-8 text-xl font-bold text-foreground">
              作業場所の近くに休憩所を設ける
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              遠い休憩所では体調が悪くなってもたどり着くのが負担に。近くに設けることでこまめに体を冷やせます。
            </p>
            <h3 className="mt-8 text-xl font-bold text-foreground">
              冷房・日陰・身体を冷やす用品を用意する
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              冷房付きの休憩室が理想ですが、難しい場合はクーラーテントなどで臨時の涼しい場所を作ります。冷たいおしぼりや保冷剤も用意します。
            </p>
            <h3 className="mt-8 text-xl font-bold text-foreground">
              クーラーテントは臨時休憩所として使いやすい
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              常設の休憩室を増やせない倉庫でも、クーラーテントなら必要な場所に臨時のクールダウンスペースを作れます。
            </p>
            <h3 className="mt-8 text-xl font-bold text-foreground">
              水分・塩分補給を取りやすくする
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              飲料や塩分タブレットを作業場所の近くに置き、こまめに補給できるように。動線を工夫して補給が滞らないようにします。
            </p>
            <h3 className="mt-8 text-xl font-bold text-foreground">
              休憩所・クールダウン（運用＋環境対策）
            </h3>
            <ProductGrid items={REST_AREA} cols={2} slug={SLUG} />
            <p className="mt-4 text-sm text-muted-foreground">
              ※設置スペース・電源など使用条件をご確認ください。
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-black text-foreground">
              倉庫作業で必要な報告体制・緊急対応フロー
            </h2>
            <ConclusionBox>
              2025年6月1日施行の改正で、一定条件の暑熱作業では「報告体制の整備」「重篤化を防ぐ手順の作成」「関係者への周知」が義務になりました。早期発見と迅速な対応の仕組みづくりが求められます。
            </ConclusionBox>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              熱中症は初期症状の放置や対応の遅れが重症化につながります。「見つけて・判断して・対処する」仕組みが重要です。
            </p>
            <h3 className="mt-8 text-xl font-bold text-foreground">
              2025年6月からの義務化の概要
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              2025年6月1日に改正労働安全衛生規則が施行され、企業規模を問わず職場の熱中症対策が義務化されました。対象は
              <strong className="text-foreground">
                WBGT28度以上または気温31度以上の環境下で、連続1時間以上または1日4時間を超えて行われることが見込まれる作業
              </strong>
              とされ、倉庫作業も条件次第で対象になり得ます。
            </p>
            <ArticleTable
              head={["義務の柱", "内容"]}
              rows={[
                [
                  "報告体制の整備",
                  "熱中症のおそれがある作業者を早期に見つけ、社内で報告できる体制をつくる",
                ],
                [
                  "重篤化防止手順の作成",
                  "作業からの離脱・身体の冷却・医療機関への連絡など、悪化を防ぐ手順を定める",
                ],
                [
                  "関係者への周知",
                  "これらの体制・手順を、関係する作業者に知らせる",
                ],
              ]}
            />
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              対応を怠った場合、労働安全衛生法に基づく是正指導や罰則（6ヶ月以下の懲役または50万円以下の罰金）の可能性も指摘されています。自社の作業が対象に当たるかは、厚労省の公表資料や所轄の労働基準監督署の情報をご確認ください。
            </p>
            <h3 className="mt-8 text-xl font-bold text-foreground">
              体調不良を自己申告しやすくする
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              「迷惑をかけたくない」と無理をすると発見が遅れます。気軽に申告できる雰囲気づくりが早期発見の土台です。
            </p>
            <h3 className="mt-8 text-xl font-bold text-foreground">
              異変を見つけた人が報告できる体制にする
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              本人が気づけないこともあるため、周囲が異変に気づいたらすぐ報告できるルートを決めておきます。
            </p>
            <h3 className="mt-8 text-xl font-bold text-foreground">
              作業離脱・身体冷却・医療機関連絡の手順を決める
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              「誰が・何を・どの順で」を事前に決めておくと迷いません。離脱→冷却→意識確認→必要に応じた救急要請・搬送までを手順化します。
            </p>
            <h3 className="mt-8 text-xl font-bold text-foreground">
              朝礼・掲示・チェックシートで周知する
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              決めた手順は繰り返し周知して初めて機能します。新しく入ったスタッフにも確実に伝えます。
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-black text-foreground">
              倉庫作業の熱中症対策チェックリスト
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              社内共有用に、設備・備品・運用・緊急対応の4区分でまとめました。そのまま点検にお使いください。
            </p>
            <h3 className="mt-8 text-xl font-bold text-foreground">
              設備チェック
            </h3>
            <ul className="mt-6 space-y-2 text-lg leading-relaxed text-muted-foreground">
              {[
                "暑い場所（ローディングドック・出荷場など）に工場扇を配置したか？",
                "作業点を冷やすスポットクーラーを検討・配置したか？",
                "通路をふさがない配置（壁掛け・ハンガー）を検討したか？",
                "開放部に応じてミストの要否を検討したか？",
              ].map((t) => (
                <li key={t} className="flex gap-2">
                  <span aria-hidden="true">☑️</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <h3 className="mt-8 text-xl font-bold text-foreground">
              備品チェック
            </h3>
            <ul className="mt-6 space-y-2 text-lg leading-relaxed text-muted-foreground">
              {[
                "WBGT計を用意し、各エリアで測れるようにしたか？",
                "ピッキング等向けに冷却ベスト・冷感インナーを用意したか？",
                "飲料・塩分補給を作業場所の近くに置いたか？",
                "冷たいおしぼり・保冷剤など身体を冷やす用品を用意したか？",
              ].map((t) => (
                <li key={t} className="flex gap-2">
                  <span aria-hidden="true">☑️</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <h3 className="mt-8 text-xl font-bold text-foreground">
              運用チェック
            </h3>
            <ul className="mt-6 space-y-2 text-lg leading-relaxed text-muted-foreground">
              {[
                "WBGT値に応じた休憩・作業時間のルールを決めたか？",
                "休憩所（涼しい場所）を作業場所の近くに設けたか？",
                "暑熱順化が不十分な新規・短期スタッフへの配慮があるか？",
                "測定結果を見える化・共有しているか？",
              ].map((t) => (
                <li key={t} className="flex gap-2">
                  <span aria-hidden="true">☑️</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <h3 className="mt-8 text-xl font-bold text-foreground">
              緊急対応チェック
            </h3>
            <ul className="mt-6 space-y-2 text-lg leading-relaxed text-muted-foreground">
              {[
                "体調不良を自己申告・報告できる体制があるか？",
                "作業離脱→身体冷却→医療機関連絡の手順を定めたか？",
                "手順を朝礼・掲示・チェックシートで周知しているか？",
                "自社の作業が義務化の対象か確認したか？",
              ].map((t) => (
                <li key={t} className="flex gap-2">
                  <span aria-hidden="true">☑️</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-black text-foreground">
              課題別に見るおすすめ商品導線
            </h2>
            <ConclusionBox>
              「測る」「空気を動かす」「局所冷却」「体を冷やす」「休む」の課題ごとに、必要な用品を当てはめれば過不足なくそろえられます。
            </ConclusionBox>
            <ul className="mt-4 space-y-2 text-lg leading-relaxed text-muted-foreground">
              <li>
                <strong className="text-foreground">
                  まず現場を知りたい（測る）
                </strong>
                ：WBGT計（171834 / 171833）
              </li>
              <li>
                <strong className="text-foreground">
                  暑い場所の空気を動かす
                </strong>
                ：工場扇 各種（203283 / 172434 / 171597 / 171601 / 171964）、開放部はミスト（203354）
              </li>
              <li>
                <strong className="text-foreground">
                  作業点を局所的に冷やす
                </strong>
                ：スポットクーラー・除湿（172108 / 172009 / 172012）
              </li>
              <li>
                <strong className="text-foreground">
                  歩く作業者の体を冷やす
                </strong>
                ：冷却ベスト・空調服・インナー（172296 / 172467 / 171778 / 172464 / 172122 / 171713）
              </li>
              <li>
                <strong className="text-foreground">
                  確実に体を休ませる
                </strong>
                ：クーラーテント（203270）
              </li>
            </ul>
          </section>

          <CategoryLinks links={CATEGORY_LINKS} slug={SLUG} />

          <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
            足元の安全もあわせて見直すなら、
            <Link
              href="/articles/safety-shoes-jis-jsaa"
              className="font-bold text-primary hover:underline"
            >
              安全靴・プロスニーカーの選び方
            </Link>
            も参考にしてください。
          </p>

        <FaqSection faq={FAQ} />

          <section className="mt-12">
            <h2 className="text-3xl font-black text-foreground">まとめ</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              倉庫作業の熱中症対策は、思いつきで備品を買うのではなく、順序立てて進めるのが成功のコツです。
            </p>
            <ul className="mt-4 space-y-2 text-lg leading-relaxed text-muted-foreground">
              <li>
                ・まず
                <strong className="text-foreground">WBGT測定</strong>
                で現場を把握する（気温だけで判断しない）
              </li>
              <li>
                ・
                <strong className="text-foreground">
                  環境対策・個人対策・運用対策の3層
                </strong>
                で偏りなく組み立てる
              </li>
              <li>
                ・工場扇・スポットクーラー・ミスト・クーラーテントは
                <strong className="text-foreground">環境対策</strong>
              </li>
              <li>
                ・冷却ベスト・空調服・冷感インナーは
                <strong className="text-foreground">個人対策</strong>
              </li>
              <li>
                ・休憩・水分補給・報告体制・緊急対応は
                <strong className="text-foreground">運用対策</strong>
              </li>
              <li>
                ・ローディングドック・ピッキング・梱包・出荷・休憩所で
                <strong className="text-foreground">
                  場所ごとに対策を変える
                </strong>
              </li>
              <li>
                ・2025年6月からの
                <strong className="text-foreground">
                  義務化（報告体制・手順・周知）
                </strong>
                への対応も確認する
              </li>
            </ul>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              倉庫は場所によって暑さの原因が違うからこそ「測って・分けて・組み合わせる」が効きます。法令・基準値や対象範囲は厚労省の公表資料や所轄の労働基準監督署の情報、社内の安全衛生ルールをご確認ください。商品の仕様・価格・在庫は変動するため、最新情報は各商品ページでご確認ください。
            </p>
          </section>

        <ArticleCTA
          title="倉庫作業の熱中症対策用品をまとめて確認する"
          description="仕様・在庫・価格は商品ページでご確認ください。"
          buttonLabel="熱中症対策アイテム一覧を見る"
          url={HEAT_LIST_URL}
          slug={SLUG}
        />

        <RelatedArticles items={RELATED} />

        <Disclaimer extra="法令・基準値・対象範囲は改正や運用により変わる場合があり、厚生労働省の公表資料・所轄の労働基準監督署の情報・社内の安全衛生ルールをご確認ください。商品の価格・在庫・仕様は変動する場合があり、最新情報は各商品ページでご確認ください。本記事は法的助言を目的とするものではありません。" />
      </ArticleContent>
    </ArticleLayout>
  );
}
