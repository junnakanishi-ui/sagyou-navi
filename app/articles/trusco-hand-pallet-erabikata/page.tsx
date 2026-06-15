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
import { ARTICLES } from "@/lib/articles";
import { STORE_LINKS } from "@/lib/product-links";

const SLUG = "trusco-hand-pallet-erabikata";
const YQ = STORE_LINKS.yahoo;

export const metadata: Metadata = {
  title:
    "トラスコのハンドパレット（ハンドリフト）の選び方｜フォーク長・能力・低床の違い｜作業用品ナビ",
  description:
    "ハンドパレットの選び方を、パレット寸法→フォーク長→能力(1t/1.5t/2t/3t)→低床式→手動/電動→ハンドリフターとの違いの順で実務解説。現場別早見表・選定ミス防止・導入前チェックリスト付き。",
  alternates: {
    canonical: `https://sagyou-navi.com/articles/${SLUG}`,
  },
  openGraph: {
    title:
      "トラスコのハンドパレット（ハンドリフト）の選び方｜フォーク長・能力・低床の違い",
    description:
      "ハンドパレットの選び方を、パレット寸法→フォーク長→能力→低床式→手動/電動→ハンドリフターとの違いの順で実務解説。",
    type: "article",
  },
};

const FORK_SIZE = [
  {
    id: "168790",
    name: "ハンドパレット 1.5t用 L850×W520mm",
    note: "小型パレット・狭所向けのコンパクトサイズ。",
  },
  {
    id: "168791",
    name: "ハンドパレット 1.5t用 L1050×W550mm",
    note: "国内で多い標準パレットに合わせやすい汎用サイズ。",
  },
  {
    id: "168792",
    name: "ハンドパレット 1.5t用 L1220×W685mm",
    note: "大判パレット向けのワイド＆ロングサイズ。",
  },
  {
    id: "168793",
    name: "ハンドパレット 1t用 L850×W460mm",
    note: "軽めの荷・小型パレット中心の現場に。",
  },
];

const CAPACITY = [
  {
    id: "168806",
    name: "ハンドパレット 3t用 L1220×W680mm",
    note: "重量物を扱う現場に。大型パレット対応。",
  },
  {
    id: "168809",
    name: "ハンドパレット 2t用 PK付 L1150×W540mm",
    note: "重めの荷を回転よく運ぶ現場に。PK付で扱いやすさを補助。",
  },
];

const LOW_PROFILE = [
  {
    id: "168819",
    name: "ハンドパレット 1t用 L1050×W550mm 低床",
    note: "標準機が入らない低床パレット・両面パレットを運ぶ現場に。",
  },
];

const ELECTRIC = [
  {
    id: "213521",
    name: "電動ハンドパレット E-TRA 1.2t用 1150×540",
    note: "中規模倉庫の高頻度運搬に。標準的なパレット向け。",
  },
  {
    id: "213524",
    name: "電動ハンドパレット E-TRA 2t用 1220×685",
    note: "重めの荷・大型パレットを連続運搬する現場に。",
  },
];

const LIFTER = [
  {
    id: "168565",
    name: "ハンドリフター 手動 80kg 400×720 高揚程型",
    note: "軽量物を高い位置まで上げたい作業に。",
  },
  {
    id: "168566",
    name: "ハンドリフター 手動 200kg 500×600 高揚程型",
    note: "中量物の昇降・高さ合わせに。",
  },
  {
    id: "168568",
    name: "ハンドリフター 手動 350kg 600×900 高揚程型",
    note: "やや重い荷の昇降に。テーブル広め。",
  },
  {
    id: "168575",
    name: "ハンドリフター 手動 400kg 900×600 低床式",
    note: "低い位置の荷をすくい上げたい作業に。",
  },
];

const SAFETY_SHOES = [
  {
    id: "155406",
    name: "安全スニーカー 紐タイプ",
    note: "見た目・フィット感重視。",
  },
  {
    id: "155335",
    name: "安全スニーカー BOAタイプ",
    note: "素早い着脱・フィット調整。",
  },
  {
    id: "155361",
    name: "安全スニーカー 面ファスナータイプ",
    note: "手袋着用・着脱頻度が多い現場に。",
  },
  {
    id: "155329",
    name: "安全スニーカー BOAタイプ（色/サイズ違い）",
    note: "BOAタイプの候補。",
  },
];

const CATEGORY_LINKS = [
  {
    label: "ハンドパレット 一覧",
    url: `${YQ}search.html?p=%E3%83%8F%E3%83%B3%E3%83%89%E3%83%91%E3%83%AC%E3%83%83%E3%83%88&view=grid`,
    uc: "cat_handpallet",
  },
  {
    label: "ハンドリフター 一覧",
    url: `${YQ}search.html?p=%E3%83%8F%E3%83%B3%E3%83%89%E3%83%AA%E3%83%95%E3%82%BF%E3%83%BC`,
    uc: "cat_handlifter",
  },
  {
    label: "トラスコ中山 一覧",
    url: `${YQ}a5c8a5e9a5.html`,
    uc: "cat_trusco",
  },
];

const FAQ = [
  {
    q: "ハンドパレットは何から選べばいいですか？",
    a: "能力よりも先に、運ぶパレットの寸法から選びます。フォークが合うか・安定して持ち上がるかを確認し、次に能力、必要なら低床式、の順で決めると失敗しにくいです。",
  },
  {
    q: "フォーク長はどう決めればいいですか？",
    a: "運ぶパレットの長さに合わせます。一般的な目安として、Toyota L&Fの資料ではパレット長はフォーク長のおおむね120％以内が安定性の観点から推奨されています。具体的な適合は商品仕様でご確認ください。",
  },
  {
    q: "低床式はどんなときに必要ですか？",
    a: "両面パレットやフォークポケットが低いパレットなど、標準機では差し込めないパレットを運ぶときに使います。まず手持ちパレットの差込口の高さを測って判断してください。",
  },
  {
    q: "1tと1.5t、2tはどう違いますか？",
    a: "積載できる定格荷重の違いです。載せる荷物とパレット自体の重さの合計で考え、常用する最大荷重に余裕を持たせて選びます。迷ったら一段上の能力が無難です。",
  },
  {
    q: "ハンドパレットとハンドリフターの違いは？",
    a: "ハンドパレットは主にパレットを水平に運ぶ道具、ハンドリフターは主に荷物を昇降させて高さを合わせる道具です。目的が「運搬」か「昇降」かで選び分けます。",
  },
  {
    q: "手動と電動はどちらがいいですか？",
    a: "短距離・中頻度なら手動で十分です。長距離・高頻度・重量物で作業者の負担が大きい現場では、電動が作業時間と負担を大きく減らします。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "トラスコのハンドパレット（ハンドリフト）の選び方｜フォーク長・能力・低床の違い",
  description:
    "ハンドパレットの選び方を、パレット寸法→フォーク長→能力→低床式→手動/電動→ハンドリフターとの違いの順で実務解説。",
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

const relatedArticles = ARTICLES.filter(
  (a) => a.slug !== SLUG && a.available
).slice(0, 3);

const RELATED: RelatedArticle[] = relatedArticles.map((a) => ({
  href: a.path,
  label: a.shortTitle,
}));

export default function TruscoHandPalletErabikataPage() {
  return (
    <ArticleLayout faq={FAQ} articleJsonLd={articleJsonLd}>
      <Breadcrumb current="ハンドパレットの選び方" />
      <ArticleHeader
        category="guide"
        readingTime={11}
        title="トラスコのハンドパレット（ハンドリフト）の選び方"
        subtitle="フォーク長・能力・低床の違い"
      />
      <HeroImage
        src="/images/articles/trusco-hand-pallet-hero.jpg"
        alt="倉庫でハンドパレットを選定する法人担当者のイメージ"
      />
      <ArticleContent>
          <p className="text-lg leading-relaxed text-muted-foreground">
            「ハンドリフトを買いたい」と検索すると商品が山ほど出てきて、1t・1.5t・2tの違いやフォーク長、低床式といった言葉に迷う方が多いはずです。さらに似た名前の「ハンドリフター」が混ざり、どれが自社の現場に合うのか分かりにくくなります。本記事ではパレット寸法→能力→低床→手動/電動→ハンドリフターとの違いの順で、選ぶための判断軸を一気通貫で整理します。
          </p>

          <ConclusionBox>
            <strong>結論：</strong>
            ハンドパレットは「能力（何トン）」より先に、運ぶパレットの寸法から選びます。フォーク長はパレットに合うか、能力は荷物の重さに足りるか、標準機が入らないパレットなら低床式か——この順で決めれば失敗しません。なお「ハンドパレット＝パレット搬送」「ハンドリフター＝昇降・高さ合わせ」と役割が違う点も先に押さえておきましょう。
          </ConclusionBox>

          <section className="mt-12">
            <h2 className="text-3xl font-black text-foreground">
              ハンドパレットは何を基準に選ぶ？
            </h2>
            <ConclusionBox>
              選定の出発点は「能力」ではなく「パレット寸法」です。まずフォークが入るか・パレットが安定するかを確認し、次に能力、必要なら低床、という順番が基本です。
            </ConclusionBox>
            <p className="text-lg leading-relaxed text-muted-foreground">
              よくある失敗が、いきなり「2tあれば安心」と能力から決めること。実際は、フォークが運ぶパレットに合っていなければ能力が大きくても使えません。選定はこの3ステップで進めると整理できます。
            </p>
            <h3 className="mt-8 text-xl font-bold text-foreground">
              選び方3ステップ表
            </h3>
            <ArticleTable
              head={["ステップ", "確認すること", "ポイント"]}
              rows={[
                [
                  "① パレット寸法",
                  "運ぶパレットの長さ・幅・フォーク差込口",
                  "フォーク長が合うか、安定して持ち上がるか",
                ],
                [
                  "② 能力",
                  "荷物＋パレットの最大重量",
                  "余裕を持った能力を選ぶ",
                ],
                [
                  "③ 特殊条件",
                  "低床パレット・狭所・段差の有無",
                  "必要なら低床式・小型機を検討",
                ],
              ]}
            />
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              最も見落とされやすいのが①です。次章からフォーク長・能力・低床の順に見ていきます。
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-black text-foreground">
              フォーク長はどう選ぶ？短い・標準・長いの違い
            </h2>
            <ConclusionBox>
              フォーク長はパレットの長さに合わせます。一般的な目安として、Toyota
              L&Fの資料ではパレット長はフォーク長のおおむね120％以内が安定性の観点から推奨されています。短すぎても長すぎても扱いにくくなります。
            </ConclusionBox>
            <figure className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl bg-primary-light">
              <Image
                src="/images/articles/hand-pallet-fork-length-comparison.jpg"
                alt="異なるフォーク長のハンドパレットを比較するイメージ"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1152px"
              />
            </figure>
            <ul className="mt-6 space-y-2 text-lg leading-relaxed text-muted-foreground">
              <li>
                <strong className="text-foreground">短すぎる</strong>
                ：パレットの先までフォークが届かず、持ち上げたとき不安定・荷崩れしやすい。
              </li>
              <li>
                <strong className="text-foreground">長すぎる</strong>
                ：フォークがはみ出し、狭い通路や対面のパレットにぶつかる・取り回しが悪い。
              </li>
            </ul>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              安定の目安として、
              <strong className="text-foreground">
                パレット長はフォーク長のおおむね120％以内
              </strong>
              が望ましいとされています（Toyota
              L&F資料）。フォーク長1000mmなら、パレット長は1200mm程度までが扱いやすい範囲、という考え方です。
            </p>
            <h3 className="mt-8 text-xl font-bold text-foreground">
              フォーク長早見表（考え方の目安）
            </h3>
            <ArticleTable
              head={["フォーク長のタイプ", "向くパレット", "主な現場"]}
              rows={[
                [
                  "短め（〜900mm前後）",
                  "小型・短いパレット",
                  "狭い通路、小ロット、店舗バックヤード",
                ],
                [
                  "標準（1000〜1150mm前後）",
                  "一般的な国内標準パレット",
                  "多くの倉庫・工場の汎用運搬",
                ],
                [
                  "長め（1200mm前後〜）",
                  "大型・長尺パレット",
                  "大判パレット、長尺物の搬送",
                ],
              ]}
              note="数値はあくまで考え方の目安です。実際のフォーク長・適合パレットは各商品の仕様でご確認ください。"
            />
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              トラスコは同じ能力でもフォークサイズの異なるモデルがあります。
            </p>
            <h3 className="mt-8 text-xl font-bold text-foreground">
              フォークサイズ違いで選ぶ（1.5t用の例）
            </h3>
            <ProductGrid items={FORK_SIZE} cols={2} slug={SLUG} />
            <p className="mt-4 text-sm text-muted-foreground">
              ※フォークサイズと運ぶパレットの相性を必ず確認してください。
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-black text-foreground">
              能力（1t・1.5t・2t・3t）はどう決める？
            </h2>
            <ConclusionBox>
              能力は「荷物＋パレット自体の重さ」の合計に対して余裕を持って選びます。常用する最大荷重を基準にし、ギリギリではなく一段上を見ておくと安心です。
            </ConclusionBox>
            <p className="text-lg leading-relaxed text-muted-foreground">
              能力（積載荷重）は、載せる荷物だけでなく
              <strong className="text-foreground">
                パレット自体の重さも含めた合計
              </strong>
              で考えます。木製パレット1枚でも数kg〜十数kgあり、積み荷と合わせると想像より重くなります。
            </p>
            <h3 className="mt-8 text-xl font-bold text-foreground">
              能力早見表（目安）
            </h3>
            <ArticleTable
              head={["能力", "想定する荷物の目安", "主な用途"]}
              rows={[
                ["1t", "軽め〜中程度の荷", "小ロット運搬、店舗・小規模倉庫"],
                ["1.5t", "一般的な倉庫の荷", "最も汎用的。多くの現場の標準"],
                ["2t", "重めの荷・回転の多い現場", "製造・物流の主力運搬"],
                ["3t", "重量物", "重量物を扱う工場・資材倉庫"],
              ]}
              note="能力は定格です。常用荷重に余裕を持たせ、実際の積載は商品仕様の範囲内でご使用ください。"
            />
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              迷ったら、現場で最も重いパレットを基準に
              <strong className="text-foreground">一段上の能力</strong>
              が無難です。高頻度の現場ほど余裕が機械の寿命にもつながります。
            </p>
            <h3 className="mt-8 text-xl font-bold text-foreground">
              能力で選ぶ
            </h3>
            <ProductGrid items={CAPACITY} cols={2} slug={SLUG} />
            <p className="mt-4 text-sm text-muted-foreground">
              ※適合・付属仕様は商品ページでご確認ください。
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-black text-foreground">
              低床式はどんなときに必要？
            </h2>
            <ConclusionBox>
              低床式は「標準機のフォークが入らないパレット」を運ぶための機種です。両面使用パレットや、フォークポケットが低いパレットなど、標準機では差し込めないものに使います。特殊機種ではなく“入らない問題を解決する機種”と考えましょう。
            </ConclusionBox>
            <figure className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl bg-primary-light">
              <Image
                src="/images/articles/hand-pallet-low-profile-usecase.jpg"
                alt="低床式ハンドパレットが必要なパレットを確認するイメージ"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1152px"
              />
            </figure>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              低床式は、
              <strong className="text-foreground">
                地上からフォーク上面までの高さが低いタイプ
              </strong>
              です。AMHA（日本産業車両協会）の説明では、両面パレットやフォークポケット部が低いパレットなど、標準機では差し込めないものに対して使用されるとされています。つまり「特殊な機械」ではなく、
              <strong className="text-foreground">
                標準機が物理的に入らないパレットがある現場のための解決策
              </strong>
              です。
            </p>
            <ul className="mt-4 space-y-2 text-lg leading-relaxed text-muted-foreground">
              <li>両面使用パレット（裏表どちらも使うタイプ）を運んでいる</li>
              <li>フォークの差込口（フォークポケット）が低いパレットがある</li>
              <li>
                標準機を差し込もうとすると、つっかえて入らない・浮かせられない
              </li>
            </ul>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              一般的な片面パレットや差込口が標準的な高さなら低床式は不要です。
              <strong className="text-foreground">
                まず差込口の高さを実測
              </strong>
              してから判断するのが確実です。
            </p>
            <h3 className="mt-8 text-xl font-bold text-foreground">
              低床式で選ぶ
            </h3>
            <ProductGrid items={LOW_PROFILE} cols={2} slug={SLUG} />
            <p className="mt-4 text-sm text-muted-foreground">
              ※お使いのパレットの差込口高さと適合するか、必ず仕様で確認してください。
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-black text-foreground">
              手動ハンドパレットと電動ハンドパレットはどう使い分ける？
            </h2>
            <ConclusionBox>
              運搬距離が短く頻度も中程度なら手動、長距離・高頻度・重量物で作業者の負担が大きいなら電動が向きます。人手不足や身体負担の軽減を重視するなら電動が選択肢になります。
            </ConclusionBox>
            <ArticleTable
              head={["観点", "手動ハンドパレット", "電動ハンドパレット"]}
              rows={[
                ["運搬距離", "短〜中距離向き", "長距離でも負担が少ない"],
                ["使用頻度", "中程度まで", "高頻度・連続作業向き"],
                ["作業者の負担", "重い荷・長距離で大きい", "大幅に軽減"],
                ["導入コスト", "抑えめ", "高め（充電等の運用も必要）"],
                [
                  "向く現場",
                  "小〜中規模、たまの運搬",
                  "大規模倉庫、毎日大量に運ぶ現場",
                ],
              ]}
            />
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              判断の目安は
              <strong className="text-foreground">
                「距離 × 頻度 × 重さ」
              </strong>
              。長い通路を1日に何往復もする、重いパレットを連続で運ぶ現場では、電動が負担と作業時間を大きく減らします。人手不足が深刻な現場ほど費用対効果は高くなります。
            </p>
            <h3 className="mt-8 text-xl font-bold text-foreground">
              電動で選ぶ（TRUSCO E-TRA）
            </h3>
            <ProductGrid items={ELECTRIC} cols={2} slug={SLUG} />
            <p className="mt-4 text-sm text-muted-foreground">
              ※充電・運用条件や対応パレットは商品仕様でご確認ください。
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-black text-foreground">
              ハンドパレットとハンドリフターの違いは？
            </h2>
            <ConclusionBox>
              役割が違います。ハンドパレットは「パレットを水平に運ぶ」道具、ハンドリフターは「荷物を昇降させて高さを合わせる」道具です。検索時に混同されやすいので、目的で選び分けましょう。
            </ConclusionBox>
            <figure className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl bg-primary-light">
              <Image
                src="/images/articles/hand-pallet-vs-hand-lifter.jpg"
                alt="ハンドパレットとハンドリフターの用途の違いを示すイメージ"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1152px"
              />
            </figure>
            <h3 className="mt-8 text-xl font-bold text-foreground">
              ハンドパレット vs ハンドリフター比較表
            </h3>
            <ArticleTable
              head={["項目", "ハンドパレット", "ハンドリフター"]}
              rows={[
                [
                  "主な用途",
                  "パレットを水平に運搬する",
                  "荷物を昇降させ高さを合わせる",
                ],
                ["動きの中心", "前後の移動（搬送）", "上下の昇降（リフト）"],
                [
                  "持ち上げ高さ",
                  "わずかに浮かせて運ぶ程度",
                  "作業しやすい高さまで上げる",
                ],
                [
                  "向く作業",
                  "倉庫内のパレット移動",
                  "荷の積み降ろし、組立・梱包の高さ合わせ",
                ],
                [
                  "能力の目安",
                  "1t〜3t など大きめ",
                  "数十kg〜数百kg が中心",
                ],
              ]}
            />
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              使い分けの基本は「運びたい」のか「上げ下げしたい」のか。運ぶならハンドパレット、高さを合わせたいならハンドリフターです。
            </p>
            <h3 className="mt-8 text-xl font-bold text-foreground">
              ハンドリフター（昇降・高さ合わせ用）
            </h3>
            <ProductGrid items={LIFTER} cols={2} slug={SLUG} />
            <p className="mt-4 text-sm text-muted-foreground">
              ※昇降高さ・テーブル寸法・能力は商品仕様でご確認ください。
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-black text-foreground">
              現場別に見る｜トラスコのハンドパレット選び方
            </h2>
            <ConclusionBox>
              現場のタイプごとに「優先する仕様」が変わります。下の早見表を選定のたたき台にしてください。
            </ConclusionBox>
            <h3 className="mt-8 text-xl font-bold text-foreground">
              現場別早見表
            </h3>
            <ArticleTable
              head={["現場・状況", "向きやすいタイプ", "重視する仕様"]}
              rows={[
                [
                  "店舗バックヤード・小規模倉庫",
                  "1t・コンパクトフォーク",
                  "取り回し・小回り",
                ],
                [
                  "一般的な倉庫の汎用運搬",
                  "1.5t・標準フォーク",
                  "汎用性・パレット適合",
                ],
                ["重量物を扱う工場", "2t〜3t", "能力・耐久性"],
                [
                  "大判・長尺パレット",
                  "ワイド/ロングフォーク",
                  "フォークサイズ適合",
                ],
                ["両面・低床パレットがある", "低床式", "差込口の高さ適合"],
                [
                  "長距離・高頻度の運搬",
                  "電動ハンドパレット",
                  "負担軽減・作業時間短縮",
                ],
                [
                  "高さ合わせ・積み降ろし",
                  "ハンドリフター",
                  "昇降高さ・テーブル寸法",
                ],
              ]}
              note="一般的な目安です。実際の選定は運ぶパレット・荷物・現場環境・商品仕様に基づいて行ってください。"
            />
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              複数タイプの現場を持つ会社では、
              <strong className="text-foreground">
                現場ごとに最適機を分ける
              </strong>
              のが結局いちばん効率的です。
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-black text-foreground">
              法人導入でよくある失敗例
            </h2>
            <ConclusionBox>
              「能力先行」「パレット未計測」「低床の見落とし」「全現場1台統一」が典型的な失敗。パレット起点で選べば多くは防げます。
            </ConclusionBox>
            <ul className="mt-4 space-y-2 text-lg leading-relaxed text-muted-foreground">
              <li>
                <strong className="text-foreground">能力から先に決める</strong>
                ：2t機を買ったがフォークがパレットに合わず不安定。
              </li>
              <li>
                <strong className="text-foreground">
                  パレット寸法・差込口を測っていない
                </strong>
                ：標準機が入らず低床式を買い直し。
              </li>
              <li>
                <strong className="text-foreground">
                  フォーク長が長すぎ／短すぎ
                </strong>
                ：はみ出して取り回しが悪い、または短くて不安定。
              </li>
              <li>
                <strong className="text-foreground">全現場を1台で統一</strong>
                ：小規模には大きすぎ、重量物には能力不足で両方不満。
              </li>
              <li>
                <strong className="text-foreground">手動で押し切る</strong>
                ：長距離・高頻度で負担が大きく、結局電動を追加導入。
              </li>
            </ul>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              防ぐコツは{" "}
              <strong className="text-foreground">
                ①パレットを実測 → ②荷物＋パレットの最大重量 →
                ③差込口高さ・現場環境 → ④合う機種
              </strong>{" "}
              の順。商品起点ではなくパレット起点で選ぶのが鉄則です。
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-black text-foreground">
              おすすめ候補の見方｜TRUSCO商品導線
            </h2>
            <ConclusionBox>
              「どれがおすすめか」より「自社のパレットと荷物に合うか」で選びます。汎用なら1.5t標準、重量物なら2〜3t、入らないパレットなら低床、負担軽減なら電動、が基本の当てはめです。
            </ConclusionBox>
            <ul className="mt-4 space-y-2 text-lg leading-relaxed text-muted-foreground">
              <li>
                <strong className="text-foreground">まず試したい汎用機</strong>
                ：1.5t用 L1050×W550mm（168791）
              </li>
              <li>
                <strong className="text-foreground">小型・狭所中心</strong>
                ：1.5t L850×W520mm（168790）／1t L850×W460mm（168793）
              </li>
              <li>
                <strong className="text-foreground">大判パレット</strong>
                ：1.5t L1220×W685mm（168792）
              </li>
              <li>
                <strong className="text-foreground">重量物</strong>
                ：3t用（168806）／2t PK付（168809）
              </li>
              <li>
                <strong className="text-foreground">入らないパレット</strong>
                ：1t 低床（168819）
              </li>
              <li>
                <strong className="text-foreground">負担軽減・高頻度</strong>
                ：電動 E-TRA（213521 / 213524）
              </li>
            </ul>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              最終的な適合は、パレット寸法・差込口高さ・荷物重量の組み合わせで決まります。ラインナップ全体は一覧から見比べられます。
            </p>
            <CategoryLinks links={CATEGORY_LINKS} slug={SLUG} />
            <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
              運搬作業では足元の安全も大切です。重いパレットを扱う現場では、つま先を守る安全靴・プロスニーカーもあわせて見直しておくと安心です。
            </p>
            <h3 className="mt-8 text-xl font-bold text-foreground">
              あわせて検討したい安全靴・プロスニーカー
            </h3>
            <ProductGrid items={SAFETY_SHOES} cols={2} slug={SLUG} />
            <p className="mt-4 text-sm text-muted-foreground">
              ※規格区分（JIS/JSAA）や適合は商品ページでご確認ください。
              <Link
                href="/articles/safety-shoes-jis-jsaa"
                className="ml-1 font-bold text-primary hover:underline"
              >
                安全靴の選び方はこちら
              </Link>
              。
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-black text-foreground">
              導入前チェックリスト
            </h2>
            <ul className="mt-6 space-y-2 text-lg leading-relaxed text-muted-foreground">
              {[
                "運ぶパレットの長さ・幅を実測したか？",
                "フォーク長はパレット長の120％以内の目安に収まるか？",
                "荷物＋パレットの最大重量を確認し、余裕ある能力を選んだか？",
                "パレットの差込口（フォークポケット）の高さを測ったか？（低床要否の判断）",
                "両面パレット・低床パレットを使っていないか？",
                "運搬の距離・頻度・重さから手動／電動を判断したか？",
                "「運ぶ」のか「昇降」なのか目的を整理したか？（ハンドパレット／ハンドリフター）",
                "通路幅・段差など現場環境に機体が合うか？",
                "必要台数・納期・予算を確認したか？（在庫は変動するため早めに）",
              ].map((t) => (
                <li key={t} className="flex gap-2">
                  <span aria-hidden="true">☑️</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </section>

        <FaqSection faq={FAQ} />

          <section className="mt-12">
            <h2 className="text-3xl font-black text-foreground">まとめ</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              トラスコのハンドパレット選びは、順番がすべてです。
            </p>
            <ul className="mt-4 space-y-2 text-lg leading-relaxed text-muted-foreground">
              <li>
                ・<strong className="text-foreground">能力より先にパレット寸法</strong>
                。フォークが合わなければ能力は活きない
              </li>
              <li>
                ・<strong className="text-foreground">フォーク長はパレット長の120％以内</strong>
                が安定の目安（Toyota L&F資料）
              </li>
              <li>
                ・<strong className="text-foreground">能力は荷物＋パレットの合計</strong>
                で考え、一段上を選ぶと安心
              </li>
              <li>
                ・<strong className="text-foreground">低床式は“標準機が入らないパレット”の解決策</strong>
                。差込口の高さを実測して判断
              </li>
              <li>
                ・<strong className="text-foreground">手動／電動は距離×頻度×重さ</strong>
                で。<strong className="text-foreground">ハンドパレット＝運搬、ハンドリフター＝昇降</strong>
                と役割が違う
              </li>
            </ul>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              仕様・適合・在庫は変動するため、最終的な選定は各商品ページの仕様と手持ちパレットを照らし合わせ、使用条件・現場ルールを確認のうえご判断ください。
            </p>
          </section>

        <ArticleCTA
          title="ハンドパレットを見比べる"
          description="仕様・在庫・価格は商品ページでご確認ください。"
          buttonLabel="ハンドパレット一覧で仕様・在庫を確認する"
          url={`${YQ}search.html?p=%E3%83%8F%E3%83%B3%E3%83%89%E3%83%91%E3%83%AC%E3%83%83%E3%83%88&view=grid`}
          slug={SLUG}
        />

        <RelatedArticles items={RELATED} />

        <Disclaimer extra="価格・在庫・仕様・適合は変動・個体差がある場合があり、最新情報は各商品ページでご確認ください。安全な使用方法や使用条件、現場で求められる仕様については、メーカー仕様・使用条件・現場ルールに従ってください。" />
      </ArticleContent>
    </ArticleLayout>
  );
}
