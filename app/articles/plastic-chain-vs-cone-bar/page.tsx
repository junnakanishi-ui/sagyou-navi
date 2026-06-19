import type { Metadata } from "next";
import Link from "next/link";
import {
  ArticleLayout,
  ArticleContent,
  Breadcrumb,
  ArticleHeader,
  HeroImage,
  ArticleSection,
  ConclusionBox,
  H2,
  H3,
  Lead,
  LeadMuted,
  GroupLabel,
  ArticleTable,
  ArticleFigure,
  ProductGrid,
  RelatedArticles,
  Disclaimer,
  FaqSection,
  type RelatedArticle,
} from "@/components/article";

const SLUG = "plastic-chain-vs-cone-bar";

const buildUrl = (base: string, utmContent: string) => {
  const sep = base.includes("?") ? "&" : "?";
  return `${base}${sep}utm_source=sagyou_navi&utm_medium=referral&utm_campaign=2026_chain_bar&utm_content=${utmContent}`;
};

const buildHeatstrokeUrl = (base: string, utmContent: string) => {
  const sep = base.includes("?") ? "&" : "?";
  return `${base}${sep}utm_source=sagyou_navi&utm_medium=referral&utm_campaign=2026_heatstroke&utm_content=${utmContent}`;
};

// 日本語クエリを含む一覧URLはエンコード済み文字列をそのまま定数化（再エンコード禁止）
const PLACHAIN_LIST =
  "https://store.shopping.yahoo.co.jp/signcity-yshop/search.html?p=%E3%83%97%E3%83%A9%E3%83%81%E3%82%A7%E3%83%BC%E3%83%B3&storeid=signcity-yshop";
const CONEBAR_LIST =
  "https://store.shopping.yahoo.co.jp/signcity-yshop/search.html?p=%E3%82%B3%E3%83%BC%E3%83%B3%E3%83%90%E3%83%BC&storeid=signcity-yshop";
const TRUSCO_LIST_URL =
  "https://store.shopping.yahoo.co.jp/signcity-yshop/a5c8a5e9a5.html";
const HEATSTROKE_LIST_URL =
  "https://www.gc-select.com/pages/2026_prevent-heatstroke";

export const metadata: Metadata = {
  title:
    "プラチェーンとコーンバーの違い｜駐車場・通路・立入禁止エリアの区画用品はどっちが良い？｜作業用品ナビ",
  description:
    "プラチェーンとコーンバーの違いを、駐車場・通路・工事現場・イベント・立入禁止エリアの用途別に解説。直線区画に向くコーンバー、長距離や曲線導線に向くプラチェーンの選び方、色・長さ・ジョイント・コーンリングの注意点まで法人向けに整理します。",
  alternates: {
    canonical: `https://sagyou-navi.com/articles/${SLUG}`,
  },
  openGraph: {
    title:
      "プラチェーンとコーンバーの違い｜駐車場・通路・立入禁止エリアの区画用品はどっちが良い？",
    description:
      "プラチェーンとコーンバーの違いを、駐車場・通路・工事現場・イベント・立入禁止エリアの用途別に解説。直線区画に向くコーンバー、長距離や曲線導線に向くプラチェーンの選び方を整理します。",
    type: "article",
    images: ["/images/articles/plastic-chain-cone-bar-selection-hero.jpg"],
  },
};

const plachainProductsWarning = [
  {
    id: "162955",
    name: "トラスコ プラチェーン レッド 6mm×30m TPC-6R（立入禁止・強い注意喚起）",
  },
  {
    id: "162953",
    name: "トラスコ プラチェーン イエロー/ブラック 6mm×30m TPC-6YB（工事現場・危険箇所）",
  },
];

const plachainProductsAttachment = [
  {
    id: "162972",
    name: "トラスコ プラチェーン コーンリング付 イエロー TPCC6-2Y（コーンにすぐ取付）",
  },
  {
    id: "236000",
    name: "トラスコ プラチェーンジョイント 白 8mm（2個入）TCJ8W（チェーン接続）",
  },
];

const plachainProductsStandard = [
  {
    id: "162957",
    name: "トラスコ プラチェーン イエロー 6mm×50m TPC-6Y-50（長い区画）",
  },
  {
    id: "162951",
    name: "トラスコ プラチェーン イエロー 6mm×30m TPC-6Y（標準）",
  },
  {
    id: "162964",
    name: "トラスコ 脱着式プラチェーン 黄+赤ジョイント 6mm×50m TPC6KJ-50（長さを測らず脱着）",
  },
  {
    id: "162961",
    name: "トラスコ プラチェーン インターナショナルオレンジ 6mm×50m TPC-6IOR-50（屋外視認性）",
  },
];

const conebarProductsLonelyTiger = [
  {
    id: "162936",
    name: "トラスコ ガードバー収納設置用袋 ロンリータイガー ブラック TLTG-15BG",
  },
  {
    id: "236790",
    name: "トラスコ ロンリータイガー ガードバー1.5m×25本入セット TLTG-1525S",
  },
  {
    id: "162938",
    name: "トラスコ ガードバー ロンリータイガー対応 イエローブラック TTB-YB-15",
  },
];

const conebarProductsTelescopic = [
  {
    id: "162946",
    name: "トラスコ 伸縮ガードバー イエロー/ブラック TGBS-YB-20（1.2〜2m）",
  },
  {
    id: "162947",
    name: "トラスコ 伸縮ガードバー レッド/ホワイト TGBS-RW-20（規制感）",
  },
  {
    id: "162948",
    name: "トラスコ 伸縮ガードバー グリーン/ホワイト TGBS-GW-20（施設・歩行者導線）",
  },
];

const conebarProductsPlaBar = [
  {
    id: "163038",
    name: "トラスコ プラバー イエロー/ブラック TPB-15-YB（自立型）",
  },
  {
    id: "163037",
    name: "トラスコ プラバー グリーン/ホワイト TPB-15-GW（景観配慮）",
  },
];

const HEATSTROKE_RAKUTEN = [
  { id: "171780", label: "空調服・冷却ベスト（楽天）" },
  { id: "171782", label: "空調服・冷却ベスト（楽天）" },
  { id: "171708", label: "空調服・冷却ベスト（楽天）" },
  { id: "171698", label: "空調服・冷却ベスト（楽天）" },
];

const HEATSTROKE_GC_HELMET = [
  { id: "1121810414", label: "ヘルメット関連（GCセレクト）" },
  { id: "1121810108", label: "ヘルメット関連（GCセレクト）" },
  { id: "1121983004", label: "ヘルメット関連（GCセレクト）" },
  { id: "1121910324", label: "ヘルメット関連（GCセレクト）" },
  { id: "1121910323", label: "ヘルメット関連（GCセレクト）" },
  { id: "1121983007", label: "ヘルメット関連（GCセレクト）" },
];

const PROCUREMENT_CHECKLIST = [
  "区画したい場所は駐車場・通路・工事現場・イベントのどれか",
  "直線で区切るのか、曲線で誘導するのか",
  "区画距離は何mか",
  "コーンの本数は足りているか",
  "コーンリングやジョイントは必要か",
  "夜間や屋外で視認性が必要か",
  "風対策や重石が必要か",
  "通行者の足元に引っかからないか",
  "設置撤去を誰が行うか",
  "保管場所は確保できるか",
  "夏場の屋外設置では熱中症対策も準備できているか",
];

const RELATED: RelatedArticle[] = [
  {
    href: "/articles/color-cone-selection",
    label:
      "カラーコーンの選び方｜駐車場・工事現場・イベントで使うコーン・バー・チェーンの使い分け",
  },
  {
    href: "/articles/outdoor-work-heatstroke-measures",
    label:
      "外仕事の熱中症対策｜現場・イベント・屋外倉庫で使える暑さ対策グッズと実務チェックリスト",
  },
  {
    href: "/articles/workbench-tool-organization",
    label:
      "作業台まわりの工具整理術｜工具を探す時間を減らすツールワゴン・収納用品の選び方",
  },
  {
    href: "/articles/construction-work-platform",
    label:
      "建築現場の作業台はどう選ぶ？足場台・踏台・ペケ台・工具置き台の使い分け",
  },
];

const FAQ = [
  {
    q: "プラチェーンとコーンバーはどちらが良いですか？",
    a: "短い距離をまっすぐ区切るならコーンバー、長い距離や曲線の導線を作るならプラチェーンが向いています。駐車場の1〜2区画封鎖や搬入口にはコーンバー、イベント会場や施設通路の誘導にはプラチェーンが使いやすいです。",
  },
  {
    q: "駐車場ではプラチェーンとコーンバーのどちらが向いていますか？",
    a: "一時的に車両を止めたい、進入禁止をはっきり見せたい場合はコーンバーが向いています。複数区画や長い境界を区切りたい場合は、長さを調整しやすいプラチェーンが便利です。",
  },
  {
    q: "プラチェーンは必要な長さに切って使えますか？",
    a: "使用場所に応じて必要な長さにカットできるタイプがあります。ただし、吊り下げ用には使用できないなどの注意点もあるため、メーカー情報をご確認ください。",
  },
  {
    q: "コーンバーは長さ調整できますか？",
    a: "伸縮ガードバーであれば、設置場所に合わせて長さを調整できるタイプがあります（例：1.2〜2mまで伸縮）。",
  },
  {
    q: "プラチェーンを使うときに必要な部品はありますか？",
    a: "コーンに取り付ける場合はコーンリング、チェーン同士をつなぐ場合はジョイントがあると便利です。",
  },
  {
    q: "工事現場では黄黒と赤白のどちらが良いですか？",
    a: "黄黒は注意喚起・危険箇所・工事現場らしい視認性を出しやすく、赤白は立入禁止や規制感を出したい場所で使いやすい色です。現場ルールや既存の表示ルールがある場合は、それに合わせて選びます。",
  },
  {
    q: "屋外イベントで使うならどちらが便利ですか？",
    a: "来場者の列整理や曲線導線を作りたい場合はプラチェーンが便利です。一方、車両搬入口や関係者以外立入禁止エリアをはっきり区切る場合はコーンバーが向いています。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "プラチェーンとコーンバーの違い｜駐車場・通路・立入禁止エリアの区画用品はどっちが良い？",
  description:
    "プラチェーンとコーンバーの違いを、駐車場・通路・工事現場・イベント・立入禁止エリアの用途別に解説。直線区画に向くコーンバー、長距離や曲線導線に向くプラチェーンの選び方を整理します。",
  image:
    "https://sagyou-navi.com/images/articles/plastic-chain-cone-bar-selection-hero.jpg",
  datePublished: "2026-06-18",
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

export default function PlasticChainVsConeBarPage() {
  return (
    <ArticleLayout faq={FAQ} articleJsonLd={articleJsonLd}>
      <Breadcrumb current="プラチェーンとコーンバーの違い" />
      <ArticleHeader
        category="compare"
        readingTime={13}
        title="プラチェーンとコーンバーの違い"
        subtitle="駐車場・通路・立入禁止エリアの区画用品はどっちが良い？"
      />
      <HeroImage
        src="/images/articles/plastic-chain-cone-bar-selection-hero.jpg"
        alt="駐車場でプラチェーンとコーンバーを比較する安全用品担当者"
      />

      <ArticleContent>
        <Lead>
          駐車場や工事現場、イベント会場、倉庫の通路などで一時的にエリアを区切るとき、よく使われるのがプラチェーンとコーンバーです。
        </Lead>
        <LeadMuted>
          どちらもカラーコーンと組み合わせて使える区画用品ですが、向いている場所は少し違います。コーンバーは、コーンとコーンの間をまっすぐ・はっきり区切りたいときに便利です。一方、プラチェーンは、長い距離や曲線の導線、人の流れをやわらかく誘導したい場所に向いています。
        </LeadMuted>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          この記事では、プラチェーンとコーンバーの違いを、駐車場・通路・工事現場・イベント・立入禁止エリアの用途別に整理します。法人の購買担当者や現場責任者が必要な用品を選びやすいよう、色・長さ・ジョイント・保管方法・熱中症対策まで含めて解説します。
        </p>

        <div className="my-8 rounded-lg border-2 border-primary/40 bg-primary-light px-5 py-4 text-base leading-relaxed">
          <p className="font-bold text-foreground">
            Q. プラチェーンとコーンバー、どっちを買えばいい？
          </p>
          <p className="mt-2 text-foreground">
            <strong>A.</strong>{" "}
            短く直線で区切るならコーンバー、長く柔軟に区切るならプラチェーンです。駐車場の1〜2区画封鎖や搬入口にはコーンバー、イベント会場や施設通路の長い・曲線の導線にはプラチェーンが向きます。迷ったら「短く直線＝バー」「長く自由＝チェーン」で判断します。
          </p>
        </div>

        <div className="my-8 rounded-lg border-l-4 border-blue-500 bg-blue-50 px-5 py-4 text-base leading-relaxed text-foreground">
          <strong>
            結論：短く直線で区切るならコーンバー、長く柔軟に区切るならプラチェーン。
          </strong>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-[640px] w-full border-collapse text-left text-base">
              <thead>
                <tr className="bg-foreground text-brand">
                  <th className="px-4 py-3 font-bold">判断ポイント</th>
                  <th className="px-4 py-3 font-bold">コーンバーが向く</th>
                  <th className="px-4 py-3 font-bold">プラチェーンが向く</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                {[
                  ["区画の形", "直線的", "曲線・長距離・変則的"],
                  ["距離", "短〜中距離", "中〜長距離"],
                  ["見た目", "はっきり境界を見せやすい", "やわらかく誘導しやすい"],
                  ["設置撤去", "1本単位で簡単", "必要な長さに調整しやすい"],
                  ["保管", "本数が多いと場所を取る", "巻いて保管しやすい"],
                  [
                    "向く場所",
                    "駐車場、搬入口、工事現場",
                    "イベント、施設通路、受付列、広い区画",
                  ],
                  [
                    "注意点",
                    "長さが合わないと使いにくい",
                    "たるみ・引っかかりに注意",
                  ],
                ].map((row) => (
                  <tr key={row[0]} className="border-b border-border bg-card">
                    <td className="px-4 py-3 font-bold text-foreground">
                      {row[0]}
                    </td>
                    <td className="px-4 py-3">{row[1]}</td>
                    <td className="px-4 py-3">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="my-8 rounded-lg border-l-4 border-amber-500 bg-amber-50 px-5 py-4 text-sm leading-relaxed text-muted-foreground">
          区画用品は注意喚起・区画整理のための用品であり、進入や立入を物理的に完全に防ぐものではありません。プラチェーンはたるみや足元の引っかかりに、屋外では風・視認性・設置撤去のしやすさにご注意ください。色や表示の使い方は現場ルール・施設ルールに従ってください。商品の仕様・価格・在庫・長さ・色・適合は各商品ページで最新情報をご確認ください。
        </div>

        <ArticleSection>
          <H2>プラチェーンとコーンバーの違いとは？</H2>
          <ConclusionBox>
            コーンバーは直線ではっきり、プラチェーンは長く柔軟に区切る用品で、どちらもコーンと組み合わせます。
          </ConclusionBox>
          <ArticleFigure
            src="/images/articles/plastic-chain-vs-cone-bar-difference.jpg"
            alt="プラチェーンとコーンバーの違いを比較する区画用品のイメージ"
          />
          <H3>コーンバーは「まっすぐ・はっきり区切る」用品</H3>
          <Lead>
            コーン間を直線でつなげ、境界がわかりやすいのが特徴です。駐車場・搬入口・工事現場に向き、伸縮タイプ（1.2〜2mなど）ならリング部をコーンに通すだけで設置幅に合わせられます。長い曲線区画には不向きで、本数が多いと持ち運び・保管が課題になります。
          </Lead>
          <H3>プラチェーンは「長く・柔軟に区切る」用品</H3>
          <Lead>
            プラスチック製で軽量、使用場所に応じて必要な長さにカットでき、人の誘導や進入禁止用の間仕切りに使えます。長距離・曲線・複雑な導線を作りやすく、イベント・施設・受付列・通路に向きます。コーンリングやジョイントと組み合わせて使い、たるみ・足元の引っかかりに注意します（吊り下げ用途には使用できない点に注意）。
          </Lead>
          <H3>
            どちらもカラーコーン・コーンリング・ジョイントとの組み合わせが重要
          </H3>
          <Lead>
            プラチェーンはコーンに取り付けるコーンリング、チェーン同士をつなぐジョイントがあると便利です。コーンバーもコーンの本数・間隔とセットで考えます。手持ちのコーンの数・色・間隔を踏まえて選ぶと失敗しにくくなります。
          </Lead>
        </ArticleSection>

        <ArticleSection>
          <H2>どっちを選ぶ？用途別のおすすめ早見表</H2>
          <ConclusionBox>
            区画の距離と形、視認性の必要度で、バーとチェーンの最適解が決まります。
          </ConclusionBox>
          <ArticleTable
            head={["用途", "おすすめ", "理由"]}
            rows={[
              ["駐車場の1〜2区画を封鎖", "コーンバー", "短い直線区画で見えやすい"],
              [
                "駐車場の長い列を区切る",
                "プラチェーン",
                "長さ調整しやすい",
              ],
              [
                "搬入口・車両動線を止める",
                "コーンバー",
                "境界を明確に見せやすい",
              ],
              [
                "イベント会場の来場者導線",
                "プラチェーン",
                "曲線や列整理に使いやすい",
              ],
              [
                "工事現場の立入禁止",
                "コーンバー＋表示用品",
                "視認性と意味の伝達が重要",
              ],
              [
                "倉庫内の一時作業エリア",
                "プラチェーン",
                "作業範囲に合わせやすい",
              ],
              [
                "店舗前の一時規制",
                "プラチェーン",
                "やわらかく区切りやすい",
              ],
              [
                "夜間・注意喚起重視",
                "黄黒系バー・黄黒チェーン",
                "視認性を高めやすい",
              ],
              [
                "多数本をまとめて運用",
                "ロンリータイガー系",
                "設置・撤去・保管の負担を減らしやすい",
              ],
            ]}
          />
        </ArticleSection>

        <ArticleSection>
          <H2>
            駐車場で使うなら、コーンバーとプラチェーンはどう使い分ける？
          </H2>
          <ConclusionBox>
            一時的な封鎖はコーンバー、長い境界はプラチェーン、加えて見えること・倒れにくさも大事です。
          </ConclusionBox>
          <ArticleFigure
            src="/images/articles/parking-lot-cone-bar-plastic-chain-use.jpg"
            alt="駐車場でコーンバーとプラチェーンを用途別に使い分ける様子"
          />
          <H3>一時的な駐車禁止・進入禁止ならコーンバー</H3>
          <Lead>
            利用者が遠くから見て「ここは入れない」と直感的にわかることが大切です。1〜2区画の封鎖、車両進入の一時停止、搬入口の前を区切る場面ではコーンバーが向きます。
          </Lead>
          <H3>複数区画・長い境界線ならプラチェーン</H3>
          <Lead>
            複数台分や長い境界をコーンバーだけでつなぐと本数が増え、持ち運び・保管が大変になります。こうした場合はプラチェーンを必要な長さで使うと柔軟に区画できます。
          </Lead>
          <H3>駐車場では「見えること」と「倒れにくいこと」も大事</H3>
          <Lead>
            屋外駐車場では、夜間の視認性や風での転倒対策も重要です。詳しくは
            <Link
              href="/articles/color-cone-selection"
              className="font-bold text-primary hover:underline"
            >
              カラーコーンの選び方
            </Link>
            の記事も参考に、反射タイプや重石（コーンベッド）も合わせて検討します（本記事では深掘りせず関連記事へ誘導）。
          </Lead>
        </ArticleSection>

        <ArticleSection>
          <H2>通路・倉庫・施設内で使うなら、歩行者の引っかかりに注意</H2>
          <ConclusionBox>
            人をやわらかく誘導するならチェーン、完全にふさぐならバー。チェーンはたるませすぎないこと。
          </ConclusionBox>
          <ArticleFigure
            src="/images/articles/event-facility-plastic-chain-guidance.jpg"
            alt="イベント会場や施設通路でプラチェーンを使い導線を作るイメージ"
          />
          <H3>人の導線をやわらかく作るならプラチェーン</H3>
          <Lead>
            イベント会場、施設内通路、受付列、倉庫内の一時区画では、直線で強く遮断するより、人の流れを自然に誘導したい場面があります。この場合はプラチェーンが向きます。
          </Lead>
          <H3>通路を完全にふさぎたいならコーンバー</H3>
          <Lead>
            「この先は通行禁止」「ここから先は作業中」という意図を明確に伝えたい場合は、コーンバーの方が境界がはっきりします。
          </Lead>
          <H3>足元に近いチェーンは、たるませすぎない</H3>
          <Lead>
            プラチェーンはたるみすぎると足元に引っかかるおそれがあります。通行量の多い場所では、高さ・張り具合・コーン間隔・視認性を確認します。
          </Lead>
        </ArticleSection>

        <ArticleSection>
          <H2>工事現場・屋外作業で使うなら、設置撤去と暑さ対策も考える</H2>
          <ConclusionBox>
            朝夕に設置撤去する現場は運びやすさ・収納が重要で、夏場は設置担当者の熱中症対策もセットで考えます。
          </ConclusionBox>
          <ArticleFigure
            src="/images/articles/construction-site-cone-bar-safety-zone.jpg"
            alt="工事現場でコーンバーを使い立入禁止エリアを区切るイメージ"
          />
          <H3>朝夕に設置撤去する現場では、運びやすさが重要</H3>
          <Lead>
            朝に区画を作り夕方に片付ける運用では、用品の選び方だけでなく「何本運ぶのか、誰が設置するのか、保管場所はあるか」まで考えると実務的です。
          </Lead>
          <H3>多数のコーンバーを使うなら収納・運搬方法も確認する</H3>
          <Lead>
            多量のガードバーをまとめて収納・運搬できるセット（ロンリータイガー系）を使うと、運搬や安全コーンへの設置作業の負担を軽減できます。
          </Lead>
          <H3>夏場の屋外区画作業では、熱中症対策もセットで考える</H3>
          <Lead>
            屋外駐車場や工事現場、イベント会場では、カラーコーン・コーンバー・プラチェーンの設置撤去そのものが暑熱環境下の作業になることがあります。夏場は、区画用品だけでなく、空調服・冷却ベスト・ヘルメット関連用品なども合わせて準備しておくと、設置担当者の負担を減らしやすくなります。暑さ指数（WBGT）が高い場合は休息などの判断が必要になるため、現場の暑さ対策とあわせて確認しましょう。
          </Lead>
        </ArticleSection>

        <ArticleSection>
          <H2>色はどう選ぶ？赤・黄・黄黒・オレンジの使い分け</H2>
          <ConclusionBox>
            注意喚起の強さと景観配慮で色を選び、現場の既存ルールがあればそれに合わせます。
          </ConclusionBox>
          <ArticleTable
            head={["色", "向いている使い方"]}
            rows={[
              ["イエロー", "注意喚起、区画整理、施設通路"],
              ["レッド", "立入禁止、進入禁止を強く見せたい場所"],
              ["イエロー/ブラック", "工事現場、危険箇所、注意喚起"],
              [
                "インターナショナルオレンジ",
                "屋外・工事現場・保安用品らしい視認性",
              ],
              ["グリーン/ホワイト", "施設・店舗・景観に配慮した場所"],
              ["レッド/ホワイト", "一時規制・立入禁止・車両規制"],
            ]}
          />
          <p className="mt-4 text-sm text-muted-foreground">
            黄黒プラチェーンは黒と黄が交互に入れ替わる仕様で視認性が高く、工事現場・危険箇所に向きます。現場や施設の既存表示ルールがある場合はそれに合わせて選びます。
          </p>
        </ArticleSection>

        <ArticleSection>
          <H2>プラチェーンを選ぶときのチェックポイント</H2>
          <ConclusionBox>
            長さ（30m/50m）・チェーン径・カットか脱着式か・ジョイント/リング・色の5点を確認します。
          </ConclusionBox>
          <Lead>
            長さは区画距離に合わせて30mか50mか、チェーン径は使用場所に合っているか、必要な長さにカットするか脱着式（約1mごとにジョイントで脱着でき長さを測らずに使える）を選ぶか、コーンリング・ジョイントも一緒に用意するか、色は注意喚起か景観配慮か——を確認します。
          </Lead>

          <GroupLabel>立入禁止・注意喚起</GroupLabel>
          <ProductGrid
            items={plachainProductsWarning}
            cols={2}
            slug={SLUG}
          />

          <GroupLabel>コーン取付・接続</GroupLabel>
          <ProductGrid
            items={plachainProductsAttachment}
            cols={2}
            slug={SLUG}
          />

          <GroupLabel>長尺・標準・脱着・屋外</GroupLabel>
          <ProductGrid
            items={plachainProductsStandard}
            cols={2}
            slug={SLUG}
          />

          <p className="mt-4 text-sm text-muted-foreground">
            商品名は仮置きです。正式名称・在庫・仕様は各商品ページでご確認ください。
          </p>
          <p className="mt-6">
            <a
              href={buildUrl(PLACHAIN_LIST, "list_plachain")}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-primary hover:underline"
            >
              プラチェーン一覧はこちら
            </a>
          </p>
        </ArticleSection>

        <ArticleSection>
          <H2>コーンバーを選ぶときのチェックポイント</H2>
          <ConclusionBox>
            固定長か伸縮式か・設置幅・色・多数本の収納運搬・プラバー/ロンリータイガーも検討します。
          </ConclusionBox>
          <Lead>
            固定長か伸縮式（1.2〜2mで調整）か、設置幅に合う長さか、色は黄黒・赤白・緑白のどれが合うか、多数本を使うなら収納・運搬も考えるか、自立型のプラバータイプやまとめ運用のロンリータイガータイプも検討するか——を確認します。
          </Lead>

          <GroupLabel>まとめ運用（ロンリータイガー）</GroupLabel>
          <ProductGrid
            items={conebarProductsLonelyTiger}
            cols={2}
            slug={SLUG}
          />

          <GroupLabel>伸縮ガードバー</GroupLabel>
          <ProductGrid
            items={conebarProductsTelescopic}
            cols={2}
            slug={SLUG}
          />

          <GroupLabel>自立型プラバー</GroupLabel>
          <ProductGrid items={conebarProductsPlaBar} cols={2} slug={SLUG} />

          <p className="mt-4 text-sm text-muted-foreground">
            商品名は仮置きです。正式名称・在庫・仕様は各商品ページでご確認ください。
          </p>
          <p className="mt-6">
            <a
              href={buildUrl(CONEBAR_LIST, "list_conebar")}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-primary hover:underline"
            >
              コーンバー一覧はこちら
            </a>
          </p>
        </ArticleSection>

        <ArticleSection>
          <H2>夏場の屋外設置では熱中症対策も忘れずに</H2>
          <ConclusionBox>
            区画用品の設置撤去は屋外作業になるため、設置担当者の暑さ対策も準備すると安心です。
          </ConclusionBox>
          <ArticleFigure
            src="/images/articles/outdoor-safety-setup-heatstroke-prevention.jpg"
            alt="夏場の屋外現場で区画用品を設置するスタッフの熱中症対策"
          />
          <Lead>
            夏場の駐車場・工事現場・イベント会場では、区画用品の設置撤去自体が暑熱環境下の作業になります。空調服・冷却ベスト・ヘルメット関連用品を一緒に準備すると、設置担当者の負担軽減につながります。
          </Lead>
          <H3>空調服・冷却ベスト（楽天市場）</H3>
          <ul className="mt-4 space-y-2 text-base leading-relaxed text-muted-foreground">
            {HEATSTROKE_RAKUTEN.map((item) => (
              <li key={item.id}>
                <a
                  href={buildHeatstrokeUrl(
                    `https://item.rakuten.co.jp/signcity2024/${item.id}/`,
                    `heatstroke_rakuten_${item.id}`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-primary hover:underline"
                >
                  {item.label}（商品ID: {item.id}）
                </a>
              </li>
            ))}
          </ul>
          <H3>ヘルメット関連（GCセレクト）</H3>
          <ul className="mt-4 space-y-2 text-base leading-relaxed text-muted-foreground">
            {HEATSTROKE_GC_HELMET.map((item) => (
              <li key={item.id}>
                <a
                  href={buildHeatstrokeUrl(
                    `https://www.gc-select.com/products/${item.id}`,
                    `heatstroke_gc_${item.id}`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-primary hover:underline"
                >
                  {item.label}（商品ID: {item.id}）
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6">
            <a
              href={buildHeatstrokeUrl(HEATSTROKE_LIST_URL, "heatstroke_list")}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-primary hover:underline"
            >
              熱中症対策一覧へ（GCセレクト）
            </a>
          </p>
        </ArticleSection>

        <ArticleSection>
          <H2>区画用品の導入前チェックリスト</H2>
          <ConclusionBox>
            場所・形・距離・コーン本数・部品・視認性・風・引っかかり・設置者・保管・暑さ対策を確認します。
          </ConclusionBox>
          <ul className="mt-6 space-y-2 text-lg leading-relaxed text-muted-foreground">
            {PROCUREMENT_CHECKLIST.map((item) => (
              <li key={item} className="flex gap-2">
                <span aria-hidden="true">[ ]</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </ArticleSection>

        <FaqSection faq={FAQ} />

        <ArticleSection>
          <H2>まとめ</H2>
          <ul className="mt-4 space-y-2 text-lg leading-relaxed text-muted-foreground">
            <li>
              ・短く直線で区切るならコーンバー、長く柔軟に区切るならプラチェーン
            </li>
            <li>
              ・駐車場の1〜2区画封鎖や搬入口はコーンバー、長い境界や曲線導線はプラチェーン
            </li>
            <li>
              ・工事現場・危険箇所は黄黒系、施設・景観配慮は緑白系が選びやすい
            </li>
            <li>
              ・プラチェーンはたるみ・足元の引っかかりに注意し、コーンリング・ジョイントも合わせて用意する
            </li>
            <li>
              ・屋外は風・視認性・設置撤去のしやすさ、多数本運用は収納・運搬も確認する
            </li>
            <li>
              ・夏場の屋外設置では設置担当者の熱中症対策もセットで準備する
            </li>
            <li>・仕様・色・長さ・適合は各商品ページで最新情報を確認する</li>
          </ul>
        </ArticleSection>

        <section className="mt-12 rounded-2xl bg-secondary p-8 text-secondary-foreground md:p-10">
          <h2 className="text-2xl font-black text-white">
            プラチェーン・コーンバーを選ぶ前に整理すること
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/90">
            短く直線で区切るのか、長く柔軟に区切るのか——この一点を先に決めると、コーンバーかプラチェーンかが決まりやすくなります。用途が決まったら、色・長さ・ジョイント・収納方法もあわせて確認しましょう。
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={buildUrl(PLACHAIN_LIST, "footer_plachain")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-store-yahoo px-6 py-3 text-sm font-bold text-white transition hover:bg-store-yahoo-hover"
            >
              プラチェーン一覧
            </a>
            <a
              href={buildUrl(CONEBAR_LIST, "footer_conebar")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-store-yahoo px-6 py-3 text-sm font-bold text-white transition hover:bg-store-yahoo-hover"
            >
              コーンバー一覧
            </a>
            <a
              href={buildUrl(TRUSCO_LIST_URL, "footer_trusco")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
            >
              トラスコ中山一覧
            </a>
          </div>
        </section>

        <RelatedArticles items={RELATED} />

        <Disclaimer extra="区画用品は注意喚起・区画整理のための用品であり、進入や立入を物理的に完全に防ぐものではありません。プラチェーンはたるみや足元の引っかかりに、屋外では風・視認性・設置撤去のしやすさにご注意ください。色や表示の使い方は現場ルール・施設ルールに従ってください。" />
      </ArticleContent>
    </ArticleLayout>
  );
}
