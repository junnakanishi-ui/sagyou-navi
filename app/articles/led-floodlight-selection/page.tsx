import type { Metadata } from "next";
import type { ReactNode } from "react";
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
  ArticleTable,
  ProductGrid,
  FaqSection,
  RelatedArticles,
  Disclaimer,
  type RelatedArticle,
} from "@/components/article";

const SLUG = "led-floodlight-selection";

// UTM付与（# フラグメントの前にクエリを差し込む）
function buildUrlWithHash(base: string, utmContent: string): string {
  const [path, hash] = base.split("#");
  const sep = path.includes("?") ? "&" : "?";
  const utm =
    `utm_source=sagyou_navi&utm_medium=referral` +
    `&utm_campaign=2026_sagyou&utm_content=${utmContent}`;
  return `${path}${sep}${utm}${hash ? `#${hash}` : ""}`;
}

const CATEGORY = {
  signLight:
    "https://store.shopping.yahoo.co.jp/signcity-yshop/search.html?p=%E7%9C%8B%E6%9D%BF%E7%85%A7%E6%98%8E#CentSrchFilter1",
  trusco:
    "https://store.shopping.yahoo.co.jp/signcity-yshop/a5c8a5e9a5.html#sideNaviItems",
} as const;

const SELF_EC = [
  {
    url: "https://www.trade-sign.com/main/adview/index.html",
    file: "bnr061.jpg",
    label: "LED電装ユニット アドビュー一覧へ",
  },
  {
    url: "https://www.trade-sign.com/main/pollux/index.html",
    file: "bnr131.jpg",
    label: "LED外照灯 ポラックス一覧へ",
  },
  {
    url: "https://www.trade-sign.com/main/viewtron/index.html",
    file: "bnr_viewtron.png",
    label: "屋外サイン用アームスポット ビュートロン一覧へ",
  },
  {
    url: "https://www.trade-sign.com/main/facade-sign/index.html",
    file: "bnr-facade-sign.png",
    label: "LEDファサード看板一覧へ",
  },
] as const;

const categoryHref = (url: string, suffix: string) =>
  buildUrlWithHash(url, `${SLUG}_${suffix}`);
const selfEcHref = (url: string) =>
  buildUrlWithHash(url, `${SLUG}_tradesign`);

export const metadata: Metadata = {
  title:
    "LED投光器の選び方｜現場・倉庫の作業灯から看板照明まで｜作業用品ナビ",
  description:
    "現場・倉庫・夜間作業のLED投光器（作業灯）の選び方を、明るさ（W・ルーメン）・配光角・設置タイプ（スタンド/三脚/バイス）・防水IP・電源で解説。TRUSCO DELKUROから外照式看板照明ビューフラッドまで、用途別に紹介します。",
  alternates: {
    canonical: `https://sagyou-navi.com/articles/${SLUG}`,
  },
  openGraph: {
    title:
      "LED投光器の選び方｜現場・倉庫の作業灯から看板照明まで",
    description:
      "明るさ・配光角・設置タイプ・防水で選ぶ。作業灯から外照式看板照明まで用途別に解説します。",
    type: "article",
  },
};

const STAND = [
  {
    id: "222542",
    name: "TRUSCO LED投光器 DELKURO スタンドタイプ 50W 5m RTLE-505-S",
    note: "床置きスタンドで自立。約6500lm／50W",
  },
  {
    id: "222538",
    name: "TRUSCO LED投光器 DELKURO スタンドタイプ 50W 5m アース付 RTLE-505EP-S",
    note: "アース付ポッキンプラグで屋外でも安心",
  },
  {
    id: "222522",
    name: "TRUSCO LED投光器 DELKURO スタンドタイプ 20W 5m RTLE-205-S",
    note: "軽量20W。手元・小スペースの作業に",
  },
];

const TRIPOD = [
  {
    id: "222553",
    name: "TRUSCO LED投光器 DELKURO 三脚タイプ 1灯 50W 10m RTLE-510-SK",
    note: "高さ調節可。広い現場を上から照らす",
  },
  {
    id: "222550",
    name: "TRUSCO LED投光器 DELKURO 三脚タイプ 2灯 50W 10m アース付 RTLE-510EP-SK2",
    note: "2灯で広範囲。夜間工事の主役",
  },
  {
    id: "222519",
    name: "TRUSCO LED投光器 DELKURO 三脚タイプ 1灯 20W 5m アース付 RTLE-205EP-SK",
    note: "コンパクト三脚。小規模現場に",
  },
];

const VICE = [
  {
    id: "222521",
    name: "TRUSCO LED投光器 DELKURO バイスタイプ 20W 5m アース付 RTLE-205EP-V",
    note: "単管・足場・棚に挟んで固定",
  },
  {
    id: "222525",
    name: "TRUSCO LED投光器 DELKURO バイスタイプ 20W 5m RTLE-205-V",
    note: "挟むだけで角度自在。手すりや柱に",
  },
];

const BODY = [
  {
    id: "222546",
    name: "TRUSCO LED投光器 DELKURO 50W 10m RTLE-510",
    note: "本体（要スタンド/バイス）。約6500lm",
  },
  {
    id: "222515",
    name: "TRUSCO LED投光器 50W 10m ポッキン付 RTL-510EP",
    note: "ポッキンプラグ付。コンセント直挿しで使える",
  },
  {
    id: "222526",
    name: "TRUSCO LED投光器 DELKURO 20W 10m RTLE-210",
    note: "コード10mで取り回し良好／約2500lm",
  },
  {
    id: "222517",
    name: "TRUSCO LED投光器 DELKURO 20W 5m アース付 RTLE-205EP",
    note: "アース付。屋外の常用に",
  },
  {
    id: "222509",
    name: "TRUSCO LED投光器 20W 10m RTL-210",
    note: "シンプルな20W。倉庫の常設補助灯に",
  },
];

const HIGH_POWER = [
  {
    id: "222493",
    name: "TRUSCO 投光器 200W RT-205",
    note: "高出力。広い屋外スペースを一気に照らす",
  },
  {
    id: "222495",
    name: "TRUSCO リフレター投光器 300W 防雨プラグ付コード30cm RT-300",
    note: "300Wの大光量。仮設の広範囲照明に",
  },
  {
    id: "222502",
    name: "TRUSCO 調光器付投光器 500W RT-505A",
    note: "500W＋調光。明るさを現場に合わせて調整",
  },
];

const PARTS = [
  {
    id: "222508",
    name: "TRUSCO LED投光器用 20W LED球 RTL-20W",
    note: "対応機種の交換球",
  },
  {
    id: "222513",
    name: "TRUSCO LED投光器用 50W LED球 RTL-50W",
    note: "対応機種の交換球",
  },
  {
    id: "223608",
    name: "TRUSCO LED投光器用バイス 大 TLV-L",
    note: "太い柱・単管に対応する大型バイス",
  },
  {
    id: "225579",
    name: "TRUSCO 投光器用バイス 大 TTV-L",
    note: "従来型投光器向けの大型バイス",
  },
  {
    id: "223609",
    name: "TRUSCO LED投光器用バイス 小 TLV-S",
    note: "細径パイプ・手すり向けの小型バイス",
  },
  {
    id: "225580",
    name: "TRUSCO 投光器用バイス 小 TTV-S",
    note: "従来型投光器向けの小型バイス",
  },
];

const SIGN_LIGHT = [
  {
    id: "051109",
    name: "看板照明 外照式 ビューフラッド VF80 広角 ホワイト 5000K VF80-W",
    note: "中型看板（H約3〜4.5m）向け・広角105°",
  },
  {
    id: "051108",
    name: "看板照明 外照式 ビューフラッド VF80 広角 ブラック 5000K VF80-B",
    note: "中型看板向け・本体ブラック",
  },
  {
    id: "066740",
    name: "看板照明 外照式 ビューフラッド VF40 狭角 ホワイト 5000K VF40NR-W",
    note: "小型看板（H約2〜3.5m）向け・狭角30°",
  },
  {
    id: "066741",
    name: "看板照明 外照式 ビューフラッド VF40 狭角 ブラック 5000K VF40NR-B",
    note: "小型看板向け・本体ブラック",
  },
  {
    id: "066744",
    name: "看板照明 外照式 ビューフラッド VF120 広角 ホワイト 5000K VF120-W",
    note: "大型看板（H約4〜5.5m）向け・広角105°",
  },
  {
    id: "066747",
    name: "看板照明 外照式 ビューフラッド VF120 狭角 ブラック 5000K VF120NR-B",
    note: "大型看板向け・狭角でしっかり飛ばす",
  },
];

const FAQ = [
  {
    q: "LED投光器はハロゲンや水銀灯の投光器と何が違いますか？",
    a: "一般にLED投光器は、同じ明るさでも消費電力が小さく、寿命が長い（製品により定格寿命40000時間など）、発熱が比較的少なく点灯が速いといった特長があります。具体的な数値や屋外可否は商品ごとに異なるため、各商品ページでご確認ください。",
  },
  {
    q: "何ワットのLED投光器を選べばよいですか？",
    a: "目安として、手元や小スペースは20Wクラス（約2500lm前後）、一般的な現場作業は50Wクラス（約6500lm前後）、広い屋外や仮設の大光量には200〜500Wクラスが選ばれます。設置高さや照らす範囲、近隣への光漏れも考慮して選びます。",
  },
  {
    q: "スタンド・三脚・バイス・クランプはどう選びますか？",
    a: "床に置いて手元を照らすならスタンド、広い範囲を高い位置から照らすなら三脚（1灯/2灯）、単管・足場・棚などに挟んで固定したいならバイス（クランプ）タイプが向いています。設置場所と照らしたい方向から逆算して選びます。",
  },
  {
    q: "屋外で使えますか？防水や電源で気をつけることは？",
    a: "屋外可否は製品により異なります。防水・防塵はIP等級（例：IP65）、屋外電源にはアース付プラグや防雨型ポッキンプラグが目安です。なお、コンセントに差して使うのは資格不要ですが、電源を直接配線する固定設置工事は電気工事士法に基づき有資格者（電気工事士）が行う必要があります。",
  },
  {
    q: "看板を外から照らすにはどの照明が向いていますか？",
    a: "屋外の看板を外から照らす外照式には、サイン専用設計のLED投光器（例：ビューフラッド）が向いています。看板の高さに応じて40W/80W/120Wクラス、配光は広角・狭角、本体色は白/黒から選びます。固定設置の電源工事は専門業者・電気工事士へご依頼ください。",
  },
];

const RELATED_ARTICLES = [
  {
    slug: "board-material-transport-cart",
    title:
      "板物の運搬に便利な台車とは？アルミ複合板・長尺材を安全に運ぶ選び方",
  },
  {
    slug: "kartio-big-offroad",
    title:
      "カルティオビッグ・オフロードとは？悪路・段差に強い大型樹脂台車の使いどころ",
  },
  {
    slug: "warehouse-safety-shoes",
    title:
      "倉庫作業に向く安全靴の選び方｜疲れにくい・滑りにくい・台車作業で安心な靴を解説",
  },
  {
    slug: "heavy-duty-workbench-guide",
    title:
      "頑丈な作業台の選び方｜業務用で失敗しない耐荷重・天板・用途別の比較ガイド",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "LED投光器の選び方｜現場・倉庫の作業灯から看板照明まで",
  description:
    "現場・倉庫・夜間作業のLED投光器（作業灯）の選び方を、明るさ・配光角・設置タイプ・防水IP・電源で解説。TRUSCO DELKUROから外照式看板照明ビューフラッドまで、用途別に紹介します。",
  datePublished: "2026-06-25",
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

function SelfEcBanners() {
  return (
    <div className="my-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
      {SELF_EC.map((b) => (
        <a
          key={b.file}
          href={selfEcHref(b.url)}
          target="_blank"
          rel="nofollow sponsored noopener"
          className="block overflow-hidden rounded-2xl border border-border bg-card transition hover:shadow-md"
        >
          <img
            src={`/products/${b.file}`}
            alt={b.label}
            className="h-auto w-full object-cover"
            loading="lazy"
          />
          <p className="px-4 py-3 text-sm font-bold text-foreground">
            {b.label} →
          </p>
        </a>
      ))}
    </div>
  );
}

function WarningBox({ children }: { children: ReactNode }) {
  return (
    <div className="my-6 border-2 border-amber-500 bg-amber-50 px-5 py-4 text-sm leading-relaxed text-amber-900">
      {children}
    </div>
  );
}

const LIST_CTA_CLASS =
  "inline-flex items-center gap-2 rounded-xl bg-store-yahoo px-6 py-3 text-sm font-bold text-white transition hover:bg-store-yahoo-hover";

export default function LedFloodlightSelectionPage() {
  return (
    <ArticleLayout faq={FAQ} articleJsonLd={articleJsonLd}>
      <Breadcrumb current="LED投光器の選び方" />
      <ArticleHeader
        category="compare"
        readingTime={10}
        title="LED投光器の選び方"
        subtitle="現場・倉庫の作業灯から看板照明まで"
      />
      <HeroImage
        src="/images/articles/night-work-lighting-hero.jpg"
        alt="夜間の現場をLED投光器で照らす作業イメージ"
      />
      <ArticleContent>
        <Lead>
          夜間工事、倉庫・工場の薄暗い作業エリア、屋外の点検・メンテナンス、看板のライトアップ。「手元が見えにくい」「広い範囲を均一に照らしたい」「電気代と球切れの手間を減らしたい」——こうした現場の悩みに応えるのがLED投光器です。
        </Lead>
        <LeadMuted>
          ただし、ひと口にLED投光器といっても、明るさ（ワット数・ルーメン）、光の広がり（配光角）、置き方（スタンド・三脚・バイス）、屋外で使える防水性能（IP等級）、電源のとり方まで、選ぶポイントは多岐にわたります。この記事では、現場・倉庫向けの作業用LED投光器の選び方を整理したうえで、屋外の看板を照らす
          <strong className="text-foreground">外照式の看板照明</strong>
          まで、用途別にわかりやすく解説します。
        </LeadMuted>

        <ConclusionBox>
          <strong>結論：</strong>
          まず「
          <strong>どこを・どのくらいの広さ・どんな置き方で照らすか</strong>
          」を決め、そこから①明るさ（20W〜500W）②配光角③設置タイプ（スタンド/三脚/バイス）④防水IP⑤電源（アース付・ポッキン）の順で絞り込むのが失敗しないコツです。看板を外から照らすなら、サイン専用設計の外照式LED（ビューフラッド）が適しています。
        </ConclusionBox>

        <WarningBox>
          本記事は一般的な情報提供であり、施工・電気工事に関する助言ではありません。
          <strong>
            電源を直接配線する固定設置工事は、電気工事士法に基づき電気工事士などの有資格者・専門業者が行う必要があります
          </strong>
          （コンセントにプラグを差して使う範囲は対象外）。屋外可否・防水等級・適合・保証・使用条件は、必ず各商品ページで最新情報をご確認ください。投光器は点灯中・消灯直後に高温になる場合があり、発光面の直視は避けてください。
        </WarningBox>

        <ArticleSection>
          <H2>LED投光器とは？ハロゲン・水銀灯との違い</H2>
          <ConclusionBox>
            一般にLEDは「省エネ・長寿命・低発熱・すぐ点灯」。ランニングコストとメンテ頻度を抑えたい現場で選ばれています。
          </ConclusionBox>
          <Lead>
            投光器は、広い範囲を強く照らすための照明器具です。かつてはハロゲンや水銀灯が主流でしたが、現在はLEDが標準になりつつあります。一般にLED投光器は、同じ明るさでも消費電力が小さく、定格寿命が長く（製品により40000時間など）、発熱が比較的少なく、スイッチを入れてすぐ最大の明るさで点灯するといった特長があります。電気代と球交換の手間を抑えられるため、長時間・連日使う現場ほど効果が出やすい器具です。
          </Lead>
          <ArticleTable
            head={["観点", "LED投光器", "従来型（ハロゲン・水銀灯など）"]}
            rows={[
              ["消費電力", "小さい傾向", "大きい傾向"],
              ["寿命", "長い（例：40000時間）", "短め・球交換が必要"],
              ["点灯", "すぐ最大光量", "安定まで時間がかかる場合あり"],
              ["発熱", "比較的少ない", "高温になりやすい"],
            ]}
            note="※傾向の一般論です。実際の数値は製品により異なります。"
          />
        </ArticleSection>

        <ArticleSection>
          <H2>失敗しないLED投光器の選び方・5つの軸</H2>
          <ConclusionBox>
            ①明るさ ②配光角 ③設置タイプ ④防水IP
            ⑤電源。この順に決めると、用途に合った1台に絞り込めます。
          </ConclusionBox>
          <ArticleTable
            head={["選ぶ軸", "見るポイント", "目安"]}
            rows={[
              ["①明るさ", "W数・ルーメン(lm)", "手元20W／現場50W／広範囲200〜500W"],
              [
                "②配光角",
                "広角＝広く柔らかい／狭角＝遠くへ強く",
                "作業面は広角、遠距離は狭角",
              ],
              [
                "③設置タイプ",
                "スタンド/三脚/バイス/据置",
                "置き方・固定先で選ぶ",
              ],
              ["④防水IP", "屋外可否・IP等級", "屋外はIP65などが目安"],
              [
                "⑤電源",
                "コード長・アース付・ポッキン",
                "屋外はアース付・防雨型が安心",
              ],
            ]}
          />
        </ArticleSection>

        <ArticleSection>
          <H2>設置タイプ別の選び方（スタンド・三脚・バイス）</H2>
          <ConclusionBox>
            「床に置く」スタンド、「高く広く」三脚、「挟んで固定」バイス。置き方から選ぶのが近道です。
          </ConclusionBox>

          <H3>床に置いて手元を照らす：スタンドタイプ</H3>
          <LeadMuted>
            単体では自立しないLED投光器本体に、自立用スタンドを組み合わせたタイプです。床に置いてすぐ使え、屋内の作業スペースや点検作業に向きます。アース付モデルは屋外の常用にも安心です。
          </LeadMuted>
          <ProductGrid items={STAND} cols={3} slug={SLUG} />

          <H3>広い範囲を高い位置から：三脚タイプ（1灯・2灯）</H3>
          <LeadMuted>
            高さを出して広範囲を照らせるのが三脚タイプ。夜間工事や広い屋外作業では、2灯タイプにすると影が出にくく、作業面を均一に照らせます。高さ調節ができるため、まぶしさ（グレア）の調整もしやすいのが利点です。
          </LeadMuted>
          <ProductGrid items={TRIPOD} cols={3} slug={SLUG} />

          <H3>単管・足場・棚に固定：バイス（クランプ）タイプ</H3>
          <LeadMuted>
            単管・足場・手すり・棚などに挟んで固定するタイプ。設置面が確保しにくい現場や、照らす方向を空中で固定したいときに便利です。専用バイスは太さに合わせて大・小から選べます。
          </LeadMuted>
          <ProductGrid items={VICE} cols={2} slug={SLUG} />

          <H3>本体・据置・ポッキン付（組み合わせて使う）</H3>
          <LeadMuted>
            スタンドやバイスと組み合わせて使う本体や、コンセントに差してすぐ使えるポッキンプラグ付きモデルです。倉庫の常設補助灯や、現場での汎用照明として使いやすいラインです。
          </LeadMuted>
          <ProductGrid items={BODY} cols={3} slug={SLUG} />
        </ArticleSection>

        <ArticleSection>
          <H2>明るさ（ワット数）の目安と高出力タイプ</H2>
          <ConclusionBox>
            手元20W／現場50W／広い屋外は200〜500W。広範囲を一気に照らすなら高出力・調光付きが効きます。
          </ConclusionBox>
          <LeadMuted>
            目安として、手元や小スペースは20Wクラス（約2500lm前後）、一般的な現場作業は50Wクラス（約6500lm前後）が扱いやすい明るさです。屋外の広いヤードや仮設で広範囲を一気に照らしたい場合は、200〜500Wクラスの高出力タイプが選ばれます。明るさを現場に合わせて変えたいときは、調光器付きが便利です。
          </LeadMuted>
          <ProductGrid items={HIGH_POWER} cols={3} slug={SLUG} />
        </ArticleSection>

        <ArticleSection>
          <H2>替球・バイスなどの周辺パーツ</H2>
          <ConclusionBox>
            交換球や追加のバイスをそろえておくと、現場での停止時間を減らし、1灯を多用途に使い回せます。
          </ConclusionBox>
          <LeadMuted>
            一部のLED投光器は本体のLED球を交換できないモデルもあるため、購入前に対応可否を商品ページで確認してください。交換球が使えるタイプは、予備球を持っておくと安心です。バイスは固定先の太さに合わせて大・小をそろえると、1台の投光器をさまざまな場所に固定できます。
          </LeadMuted>
          <ProductGrid items={PARTS} cols={3} slug={SLUG} />
        </ArticleSection>

        <ArticleSection>
          <H2>屋外・常設で使うときの注意点</H2>
          <ConclusionBox>
            屋外は防水IPとアース付・防雨プラグを確認。固定設置の電源工事は電気工事士へ、が大原則です。
          </ConclusionBox>
          <ol className="mt-4 list-decimal space-y-3 pl-5 text-lg leading-relaxed text-muted-foreground">
            <li>
              <strong className="text-foreground">
                防水・防塵等級（IP）を確認する
              </strong>
              ：屋外や水気のある場所では、IP65などの防水・防塵性能があるかを商品ページで確認します。
            </li>
            <li>
              <strong className="text-foreground">
                電源は屋外仕様を選ぶ
              </strong>
              ：屋外コンセントにはアース付プラグ、防雨型（ポッキン）プラグが安心です。コード長も設置距離に合わせて選びます。
            </li>
            <li>
              <strong className="text-foreground">
                固定設置の配線工事は有資格者へ
              </strong>
              ：コンセントに差して使う範囲は資格不要ですが、電源を直接つなぐ固定設置工事は電気工事士法に基づき電気工事士などの有資格者・専門業者が行う必要があります。
            </li>
            <li>
              <strong className="text-foreground">
                発熱・転倒・つまずきに注意
              </strong>
              ：点灯中・消灯直後は高温になる場合があります。三脚・スタンドはコードの引っ掛けや転倒に注意して配置します。
            </li>
          </ol>
        </ArticleSection>

        <ArticleSection>
          <H2>看板を外から照らす「外照式看板照明」という選択肢</H2>
          <ConclusionBox>
            屋外看板のライトアップには、サイン専用設計の外照式LED（ビューフラッド）。看板の高さで40/80/120Wクラス、配光は広角・狭角で選びます。
          </ConclusionBox>
          <LeadMuted>
            店舗や施設の屋外看板を夜間に見せるには、看板を外側から照らす「外照式」のLED投光器が向いています。サイン専用設計のビューフラッドは、看板の高さに合わせて消費電力の異なる3クラス（小型向け約40W／中型向け約75W＝80Wクラス／大型向け約125W＝120Wクラス）を用意。光の広がりは、柔らかくムラを抑える広角（約105°）と、遠くまでしっかり飛ばす狭角（約30°）から選べ、本体カラーは白・黒、光色は白色5000Kです。高所・屋外で使うため、防水・防塵（IP65）や電気用品安全法（PSE）などに適合しています。
          </LeadMuted>
          <ProductGrid items={SIGN_LIGHT} cols={3} slug={SLUG} />
          <LeadMuted>
            看板の電装・外照・ファサードまで含めて検討するなら、自社の専門サイトもあわせてご覧ください。LED電装ユニット・外照灯・アームスポット・ファサード看板の専用ラインアップから選べます。
          </LeadMuted>
          <SelfEcBanners />
          <div className="mt-6">
            <a
              href={categoryHref(CATEGORY.signLight, "yahoo")}
              target="_blank"
              rel="nofollow sponsored noopener"
              className={LIST_CTA_CLASS}
            >
              看板照明一覧へ
            </a>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-amber-700">
            ※外照式看板照明の取り付け・電源工事は、電気工事士などの有資格者・専門業者へご依頼ください。
          </p>
        </ArticleSection>

        <ArticleSection>
          <H2>この記事内の商品導線設計</H2>
          <ConclusionBox>
            設置タイプ→ワット数→周辺パーツ→屋外注意→看板照明→自社サイン商材、の順で回遊させる設計です。
          </ConclusionBox>
          <ArticleTable
            head={["記事内の位置", "目的", "導線"]}
            rows={[
              [
                "設置タイプ別",
                "置き方で選ぶ人向け",
                "スタンド/三脚/バイス各商品",
              ],
              [
                "ワット数の目安",
                "明るさで選ぶ人向け",
                "200/300/500W 高出力",
              ],
              ["周辺パーツ", "追加購入・運用", "替球・バイス大小"],
              [
                "看板照明章",
                "サイン需要の取り込み",
                "ビューフラッド／自社EC／看板照明一覧",
              ],
              [
                "記事末",
                "総合導線",
                "看板照明一覧／トラスコ中山一覧",
              ],
            ]}
          />
        </ArticleSection>

        <FaqSection faq={FAQ} />

        <ArticleSection>
          <H2>まとめ</H2>
          <LeadMuted>
            LED投光器は「どこを・どのくらいの広さ・どんな置き方で照らすか」から、明るさ・配光角・設置タイプ・防水IP・電源の順に絞り込むと選びやすくなります。手元は20W、現場は50W、広い屋外は200〜500Wが目安。屋外・常設では防水とアース付・防雨プラグを確認し、固定設置の電源工事は必ず電気工事士などの有資格者へ。屋外看板を照らすなら、サイン専用設計の外照式LED（ビューフラッド）と、自社サイン照明商材もあわせて検討すると、現場の照明から看板演出まで一気にそろえられます。
          </LeadMuted>
        </ArticleSection>

        <section className="mt-12 rounded-2xl bg-secondary p-8 text-secondary-foreground md:p-10">
          <h2 className="text-2xl font-black text-white">
            現場の作業灯から看板照明まで、必要な照明をまとめてそろえませんか？
          </h2>
          <p className="mt-3 text-footer-muted">
            夜間作業・倉庫・点検の作業灯はもちろん、屋外看板を照らす外照式LEDまで、用途に合わせて選べます。サインシティYahoo!店では、TRUSCOの投光器・看板照明・現場用品をまとめて確認できます。
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={categoryHref(CATEGORY.signLight, "yahoo")}
              target="_blank"
              rel="nofollow sponsored noopener"
              className={LIST_CTA_CLASS}
            >
              看板照明一覧へ
            </a>
            <a
              href={categoryHref(CATEGORY.trusco, "yahoo")}
              target="_blank"
              rel="nofollow sponsored noopener"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
            >
              トラスコ中山一覧へ
            </a>
          </div>
        </section>

        <RelatedArticles items={RELATED} />

        <Disclaimer extra="商品の仕様・価格・在庫・適合・保証は各商品ページの最新情報をご確認ください。電源工事を伴う設置は電気工事士などの有資格者・専門業者へご依頼ください。" />
      </ArticleContent>
    </ArticleLayout>
  );
}
