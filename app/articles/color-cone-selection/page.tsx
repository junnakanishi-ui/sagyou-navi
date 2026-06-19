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

const SLUG = "color-cone-selection";

const buildUrl = (base: string, utmContent: string) => {
  const sep = base.includes("?") ? "&" : "?";
  return `${base}${sep}utm_source=sagyou_navi&utm_medium=referral&utm_campaign=2026_color_cone&utm_content=${utmContent}`;
};

const buildHeatstrokeUrl = (base: string, utmContent: string) => {
  const sep = base.includes("?") ? "&" : "?";
  return `${base}${sep}utm_source=sagyou_navi&utm_medium=referral&utm_campaign=2026_heatstroke&utm_content=${utmContent}`;
};

const SAFETY_LIST_URL =
  "https://store.shopping.yahoo.co.jp/signcity-yshop/b0c2c1b4cd.html?b=61&view=grid";
const TRUSCO_LIST_URL =
  "https://store.shopping.yahoo.co.jp/signcity-yshop/a5c8a5e9a5.html";
const HEATSTROKE_LIST_URL =
  "https://www.gc-select.com/pages/2026_prevent-heatstroke";

export const metadata: Metadata = {
  title:
    "カラーコーンの選び方｜駐車場・工事現場・イベントで使うコーン・バー・チェーンの使い分け｜作業用品ナビ",
  description:
    "カラーコーンの選び方を駐車場・工事現場・イベント会場別に解説。カラーコーン単体でよいケース、コーンバーが必要なケース、プラチェーンが向くケース、表示カバー・重石・反射テープ付きコーンの使い分けを、法人担当者向けにわかりやすく紹介します。",
  alternates: {
    canonical: `https://sagyou-navi.com/articles/${SLUG}`,
  },
  openGraph: {
    title:
      "カラーコーンの選び方｜駐車場・工事現場・イベントで使うコーン・バー・チェーンの使い分け",
    description:
      "カラーコーンの選び方を駐車場・工事現場・イベント会場別に解説。コーン単体・コーンバー・プラチェーン・表示カバー・重石・反射テープ付きの使い分けを整理します。",
    type: "article",
    images: ["/images/articles/color-cone-selection-hero.jpg"],
  },
};

const basicConeProducts = [
  { id: "162891", name: "トラスコ 安全コーン レッド TCC-R" },
  { id: "162892", name: "トラスコ 安全コーン グリーン TCC-GN" },
  { id: "162894", name: "トラスコ 安全コーン ブルー TCC-B" },
  { id: "162895", name: "トラスコ 安全コーン ホワイト TCC-W" },
  { id: "162896", name: "トラスコ 安全コーン ブラック TCC-BK" },
  { id: "162898", name: "トラスコ トラコーン ブラック/イエロー TCC-YB" },
];

const reflectiveConeProducts = [
  {
    id: "162899",
    name: "トラスコ 反射テープ付安全コーン レッド/ホワイト TCC-R-HT",
  },
  { id: "162900", name: "トラスコ チッコウコーン レッド/ホワイト TCC-CK" },
  {
    id: "162903",
    name: "トラスコ カットコーン 反射テープ付き グリーン/ホワイト TSC-4C-GN",
  },
  {
    id: "162904",
    name: "トラスコ カットコーン 反射テープ付き レッド/ホワイト TSC-4C-R",
  },
];

const foldingConeProducts = [
  { id: "162905", name: "トラスコ 折畳みパタパタ レッド TCCP-450-R" },
  { id: "162906", name: "トラスコ 折畳みパタパタ レッド TCCP-700-R" },
  { id: "162907", name: "トラスコ パタパタコーン用点滅LED灯 TCCP-LED" },
];

const signCoverProducts = [
  {
    id: "162917",
    name: "トラスコ コーン透明表示カバー「車輛出入口」TCC-20",
  },
  { id: "162908", name: "トラスコ コーン用カバー「駐車禁止」T385-50A" },
  { id: "162909", name: "トラスコ コーン用カバー「立入禁止」T385-53B" },
  { id: "162910", name: "トラスコ コーン用カバー「安全通路」T385-56A" },
  { id: "162911", name: "トラスコ コーン用カバー「足もとにご注意」T385-57A" },
  { id: "162912", name: "トラスコ コーン用カバー「歩行者通路」T385-58A" },
  { id: "162913", name: "トラスコ コーン用カバー「作業中」T385-701A" },
  { id: "162918", name: "トラスコ 両面マルチサインボード TDSB-A3" },
];

const weightProducts = [
  { id: "162921", name: "トラスコ コーンベッド T-COBE" },
  { id: "162922", name: "トラスコ もうちょっと重たいコーンベッド T-MO-COBE" },
];

const wideAreaFenceProducts = [
  {
    id: "163033",
    name: "トラスコ 工事用プラスチックフェンス グリーン CF1000-GN-TOKU 5枚セット",
  },
  {
    id: "163030",
    name: "トラスコ やわらかゴムポール アンカー穴付 イエロー/ブラック TGP-13A",
  },
  { id: "163038", name: "トラスコ プラバー イエロー/ブラック TPB-15-YB" },
  {
    id: "234764",
    name: "トラスコ アルミ安全フェンス 1000×1000 ピッチ30 イエロー AF1010-Y",
  },
];

const smallRelatedProducts = [
  { id: "234825", name: "トラスコ ちびっコーン 270×300mm レッド CBCN270-R" },
  { id: "234824", name: "トラスコ ちびっコーン 270×300mm ブルー CBCN270-BL" },
  {
    id: "235367",
    name: "トラスコ 単管用安全カバー（反射式）緑/白 1m PCGW-1",
  },
  { id: "235452", name: "トラスコ ソーラー工事灯カバー赤・赤色 SKLED-R" },
  { id: "235477", name: "トラスコ 電子警笛付LED合図灯 LED6灯 SSW-6" },
  {
    id: "235507",
    name: "トラスコ 安心クッションL字型大 黒・黄 10本入り T10AC-99",
  },
  {
    id: "235490",
    name: "トラスコ 安心クッションL字型大 緑・白 10本入り T10AC-101",
  },
];

const RELATED: RelatedArticle[] = [
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
    href: "/articles/parts-case-selection",
    label:
      "パーツケースの選び方｜小物・ネジの整理に効く仕切り・引き出し・連結タイプの使い分け",
  },
  {
    href: "/articles/ladder-stepladder-difference",
    label:
      "はしごと脚立の違いとは？JIS・SG規格と「天板に乗ってはいけない」理由",
  },
];

const FAQ = [
  {
    q: "カラーコーンは何色を選べばよいですか？",
    a: "注意喚起や立入制限には赤、イベントや施設導線には青・緑・白、危険表示を強めたい場合は黒黄系が使いやすいです。ただし、現場や施設ごとの運用ルールがある場合は、そのルールに合わせて選びましょう。",
  },
  {
    q: "カラーコーン単体とコーンバーの違いは何ですか？",
    a: "カラーコーン単体は目印や注意喚起に向いています。コーンバーを組み合わせると、線として区切れるため、車両や歩行者に「ここから先は入らない」と伝えやすくなります。",
  },
  {
    q: "コーンバーとプラチェーンはどう使い分けますか？",
    a: "コーンバーは直線的にしっかり区切りたい駐車場や工事現場に向いています。プラチェーンはイベント会場や施設入口など、やわらかく導線を作りたい場所に向いています。",
  },
  {
    q: "駐車場では反射テープ付きカラーコーンが必要ですか？",
    a: "夜間や薄暗い時間帯に使う駐車場では、反射テープ付きカラーコーンが候補になります。周囲の照明、車両動線、設置場所もあわせて確認しましょう。",
  },
  {
    q: "カラーコーンが風で倒れる場合はどうすればよいですか？",
    a: "コーンベッドなどの重石を併用すると倒れにくくなります。屋外、風の通り道、長時間設置する場所では、重石の使用を検討しましょう。",
  },
  {
    q: "「立入禁止」や「駐車禁止」を伝えるにはどうすればよいですか？",
    a: "カラーコーンだけでは意味が曖昧な場合があります。表示カバーやサインボードを組み合わせると、来訪者や外部業者にも伝わりやすくなります。",
  },
  {
    q: "イベント会場ではどの組み合わせが向いていますか？",
    a: "来場者の導線整理には、カラーコーン＋プラチェーンが使いやすいです。受付列や関係者エリアを作る場合は、表示カバーやサインボードも組み合わせるとわかりやすくなります。",
  },
  {
    q: "カラーコーンだけで安全対策は十分ですか？",
    a: "カラーコーンはあくまで注意喚起や区画整理の用品です。危険箇所や作業内容によっては、フェンス、バリケード、標識、誘導員、照明などが必要になる場合があります。現場ルールや安全管理基準に従って判断してください。",
  },
];

const PROCUREMENT_CHECKLIST = [
  "置く場所は屋内か屋外か",
  "車両が近くを通るか",
  "夜間・薄暗い時間にも使うか",
  "風で倒れやすい場所か",
  "単体で目印にするだけか",
  "進入禁止ラインを作る必要があるか",
  "表示内容を文字で伝える必要があるか",
  "来場者や外部業者にも伝わるか",
  "保管場所は十分にあるか",
  "持ち運び・撤去の頻度は高いか",
  "現場ルール・安全管理ルールに合っているか",
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

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "カラーコーンの選び方｜駐車場・工事現場・イベントで使うコーン・バー・チェーンの使い分け",
  description:
    "カラーコーンの選び方を駐車場・工事現場・イベント会場別に解説。コーン単体・コーンバー・プラチェーン・表示カバー・重石・反射テープ付きの使い分けを整理します。",
  image: "https://sagyou-navi.com/images/articles/color-cone-selection-hero.jpg",
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

function SafetyListLink({
  utmContent,
  className = "font-bold text-primary hover:underline",
}: {
  utmContent: string;
  className?: string;
}) {
  return (
    <a
      href={buildUrl(SAFETY_LIST_URL, utmContent)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      安全用品一覧へ
    </a>
  );
}

export default function ColorConeSelectionPage() {
  return (
    <ArticleLayout faq={FAQ} articleJsonLd={articleJsonLd}>
      <Breadcrumb current="カラーコーンの選び方" />
      <ArticleHeader
        category="compare"
        readingTime={14}
        title="カラーコーンの選び方"
        subtitle="駐車場・工事現場・イベントで使うコーン・バー・チェーンの使い分け"
      />
      <HeroImage
        src="/images/articles/color-cone-selection-hero.jpg"
        alt="駐車場や工事現場で使うカラーコーン・コーンバー・チェーンを確認する担当者"
      />

      <ArticleContent>
        <Lead>
          カラーコーンは、駐車場、工事現場、イベント会場、店舗前、倉庫、学校、施設入口など、さまざまな場所で使われる安全用品です。置くだけで注意を促せるため、仮設の区画整理や立入制限、車両誘導、歩行者通路の確保などに使いやすいのが特徴です。
        </Lead>
        <LeadMuted>
          一方で、実際に選ぼうとすると、「カラーコーンだけでよいのか」「コーンバーとプラチェーンはどう使い分けるのか」「立入禁止や駐車禁止の表示はどう出せばよいのか」「風で倒れないようにするには何が必要か」「夜間や駐車場では反射タイプを選ぶべきか」と迷うこともあります。
        </LeadMuted>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          この記事では、カラーコーンの基本的な選び方から、コーンバー・プラチェーン・表示カバー・重石・反射テープ付きコーンの使い分けまで、駐車場・工事現場・イベント会場で使いやすい形に整理して解説します。
        </p>

        <div className="my-8 rounded-lg border-2 border-primary/40 bg-primary-light px-5 py-4 text-base leading-relaxed">
          <p className="font-bold text-foreground">
            Q. カラーコーンは単体でいい？何を足せばいい？
          </p>
          <p className="mt-2 text-foreground">
            <strong>A.</strong>{" "}
            目印だけなら単体でOK。区切るならコーンバー、やわらかく導線を作るならプラチェーン、文字で伝えるなら表示カバー、風対策ならコーンベッド（重石）、夜間・駐車場なら反射テープ付きを組み合わせます。
            「区切る・伝える・倒れにくくする・夜でも見せる」のどれが必要かで決めます。
          </p>
        </div>

        <div className="my-8 rounded-lg border-l-4 border-blue-500 bg-blue-50 px-5 py-4 text-base leading-relaxed text-foreground">
          <strong>
            結論：カラーコーンは「何を伝えたいか」で組み合わせを選ぶ。
          </strong>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-[640px] w-full border-collapse text-left text-base">
              <thead>
                <tr className="bg-foreground text-brand">
                  <th className="px-4 py-3 font-bold">やりたいこと</th>
                  <th className="px-4 py-3 font-bold">向いている組み合わせ</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                {[
                  ["目印として置きたい", "カラーコーン単体"],
                  [
                    "車や人の進入をわかりやすく止めたい",
                    "カラーコーン＋コーンバー",
                  ],
                  [
                    "イベントや施設でやわらかく導線を作りたい",
                    "カラーコーン＋プラチェーン",
                  ],
                  [
                    "「立入禁止」「駐車禁止」などを伝えたい",
                    "カラーコーン＋表示カバー",
                  ],
                  ["風で倒れにくくしたい", "カラーコーン＋コーンベッド"],
                  [
                    "夜間・駐車場・薄暗い場所で使いたい",
                    "反射テープ付きカラーコーン",
                  ],
                  ["持ち運び・保管性を重視したい", "折りたたみコーン"],
                  [
                    "入口や危険箇所を大きく区切りたい",
                    "プラバー、安全フェンス、ゴムポール",
                  ],
                ].map((row) => (
                  <tr key={row[0]} className="border-b border-border bg-card">
                    <td className="px-4 py-3 font-bold text-foreground">
                      {row[0]}
                    </td>
                    <td className="px-4 py-3">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-muted-foreground">
            カラーコーンは単体でも使えますが、「区切る」「伝える」「倒れにくくする」「夜でも見えるようにする」という目的に応じて周辺用品を組み合わせると、現場で使いやすくなります。
          </p>
        </div>

        <div className="my-8 rounded-lg border-l-4 border-amber-500 bg-amber-50 px-5 py-4 text-sm leading-relaxed text-muted-foreground">
          カラーコーンは注意喚起・区画整理の用品であり、危険箇所の安全を完全に保証するものではありません。工事現場・車両動線・歩行者通路・夜間作業では、現場ルール・安全管理基準・必要な標識や誘導体制に従ってください。商品の仕様・価格・在庫・寸法・適合品は変わる場合があるため、各商品ページで最新情報をご確認ください。
        </div>

        <ArticleSection>
          <H2>カラーコーンはどんな場面で使う安全用品？</H2>
          <ConclusionBox>
            駐車場の区画整理、工事現場の立入制限、イベント・施設の導線づくりが主な用途です。
          </ConclusionBox>
          <H3>駐車場の区画整理・駐車禁止表示</H3>
          <Lead>
            空きスペースへの侵入防止、車輛出入口の確保、来客用・業者用スペースの区分、駐車禁止表示など。
          </Lead>
          <H3>工事現場・作業エリアの立入制限</H3>
          <Lead>
            作業中エリアの明示、歩行者通路の確保、車両動線の注意喚起、危険箇所の一時的な囲いなど。
          </Lead>
          <H3>イベント・店舗・施設の導線づくり</H3>
          <Lead>
            受付列の整理、立入禁止エリアの明示、搬入口・関係者エリアの区分、来場者を圧迫しにくい導線づくりなど。
          </Lead>
        </ArticleSection>

        <ArticleSection>
          <H2>カラーコーン単体でよいケース・足したほうがよいケース</H2>
          <ConclusionBox>
            目印だけなら単体、進入を止めるならバー、導線づくりはチェーン、意味を伝えるなら表示カバーを足します。
          </ConclusionBox>
          <H3>カラーコーン単体でよいケース</H3>
          <Lead>
            一時的な目印、短時間の注意喚起、視認性だけ確保したい場合、人が少ない場所での簡易表示。
          </Lead>
          <H3>コーンバーを足したほうがよいケース</H3>
          <Lead>
            車両や歩行者に「ここから先は入らない」と明確に伝えたい、駐車場の区画を直線的に区切りたい、工事現場や搬入口でラインを作りたい場合。コーンバーには34φ（一般的・軽量で着脱が簡単）と54φ（強度重視）があり、長さは1.5m・2mが一般的、狭い場所や曲がり角にはスライド式（1〜2m調整可）も使えます。
          </Lead>
          <H3>プラチェーンを足したほうがよいケース</H3>
          <Lead>
            イベント会場や商業施設で導線を作りたい、圧迫感を抑えたい、長さ調整しながらやわらかく区切りたい、入口まわりや受付列を整理したい場合。たるみや引っかかりには注意します。
          </Lead>
          <H3>表示カバーを足したほうがよいケース</H3>
          <Lead>
            「立入禁止」「駐車禁止」「車輛出入口」など明確なメッセージを出したい、コーンだけでは意図が伝わりにくい、複数拠点で表示内容を統一したい場合。コーンにかぶせるだけで標識として使えます。
          </Lead>
        </ArticleSection>

        <ArticleSection>
          <H2>カラーコーン・コーンバー・プラチェーンの違い</H2>
          <ConclusionBox>
            目印はコーン、直線で区切るならバー、やわらかい導線はチェーン、意味を伝えるなら表示カバー、と役割が分かれます。
          </ConclusionBox>
          <ArticleTable
            head={["用品", "得意なこと", "向いている場所", "注意点"]}
            rows={[
              [
                "カラーコーン",
                "目印・注意喚起",
                "駐車場、現場、店舗前",
                "単体では意図が伝わりにくい場合がある",
              ],
              [
                "コーンバー",
                "直線的に区切る",
                "駐車場、工事現場、搬入口",
                "長さ・設置幅・太さ(34φ/54φ)を確認",
              ],
              [
                "プラチェーン",
                "やわらかく導線を作る",
                "イベント、施設、受付列",
                "たるみや引っかかりに注意",
              ],
              [
                "表示カバー",
                "文字で伝える",
                "駐車禁止、立入禁止、車輛出入口",
                "表示内容を現場用途に合わせる",
              ],
              [
                "コーンベッド",
                "倒れにくくする",
                "屋外、風のある場所",
                "重量・持ち運び性を確認",
              ],
              [
                "反射テープ付きコーン",
                "夜間視認性を高める",
                "駐車場、夜間作業",
                "周囲照明や車両動線も確認",
              ],
            ]}
          />
        </ArticleSection>

        <ArticleSection>
          <H2>駐車場でカラーコーンを使う場合の選び方</H2>
          <ConclusionBox>
            夜間は反射テープ付き、意味は表示カバー、風対策はコーンベッド、と駐車場特有の条件で選びます。
          </ConclusionBox>
          <ArticleFigure
            src="/images/articles/color-cones-parking-lot-use.jpg"
            alt="駐車場でカラーコーンと表示カバーを使って区画整理する様子"
          />
          <H3>夜間や薄暗い場所は反射テープ付きが候補</H3>
          <Lead>
            車のヘッドライトで見つけやすくしたい、夜間も駐車場を使う、入口・出口・車両通路に置く——こうした場合は赤白や反射付きで注意喚起しやすくします。
          </Lead>
          <H3>「駐車禁止」「車輛出入口」は表示カバーで伝える</H3>
          <Lead>
            カラーコーンだけだと意味が曖昧なため、表示カバーをかぶせると意図が伝わりやすくなります。駐車場管理・店舗前・搬入口に向きます。
          </Lead>
          <H3>風対策にはコーンベッドを併用する</H3>
          <Lead>
            屋外駐車場、風の通り道、車両の近く、長時間設置する場所では重石（コーンベッド）を併用すると倒れにくくなります。
          </Lead>
        </ArticleSection>

        <ArticleSection>
          <H2>工事現場・作業エリアでカラーコーンを使う場合の選び方</H2>
          <ConclusionBox>
            作業エリアはコーンバーで区切り、意味は表示カバーで補い、広い範囲はプラバー・フェンスも検討します。
          </ConclusionBox>
          <ArticleFigure
            src="/images/articles/cone-bar-worksite-boundary.jpg"
            alt="工事現場でカラーコーンとコーンバーを使って作業エリアを区切るイメージ"
          />
          <H3>作業エリアを区切るならコーンバー</H3>
          <Lead>
            立入制限ラインを作る、歩行者通路と作業エリアを分ける、搬入口・資材置き場を明確にする場合に。
          </Lead>
          <H3>「立入禁止」「作業中」は表示カバーやサインボードで補足</H3>
          <Lead>
            作業内容を伝え、注意喚起の意図を明確にし、来訪者や外部業者にも伝わりやすくします。コーンにかぶせる表示カバーは工場・事務所・物流倉庫・商業施設・工事現場などで使えます。
          </Lead>
          <H3>広い範囲を区切るならプラバー・安全フェンスも検討</H3>
          <Lead>
            コーンだけでは弱い場所、車両接近がある場所、長い区間を区切りたい場所、一時的なバリケードが必要な場所では、プラバー（脚がワンタッチで開き設置・撤去が短時間）や安全フェンスも候補です。
          </Lead>
        </ArticleSection>

        <ArticleSection>
          <H2>イベント・施設でカラーコーンを使う場合の選び方</H2>
          <ConclusionBox>
            来場者導線はプラチェーン、景観配慮なら色選び、持ち運び重視なら折りたたみコーンが向きます。
          </ConclusionBox>
          <ArticleFigure
            src="/images/articles/plastic-chain-event-flow-control.jpg"
            alt="イベント会場でカラーコーンとプラチェーンを使って来場者導線を作る様子"
          />
          <H3>来場者導線にはプラチェーンが使いやすい</H3>
          <Lead>
            受付列、入退場導線、関係者エリア、待機列、一時的な通路変更などに。
          </Lead>
          <H3>景観を気にするなら色も選ぶ</H3>
          <Lead>
            赤＝注意喚起・禁止感が強い、青・緑＝イベントや施設で使いやすい、白＝清潔感・店舗前・施設向け、黒・黄＝危険・注意喚起を強く出したい場合。
          </Lead>
          <H3>保管・持ち運び重視なら折りたたみコーン</H3>
          <Lead>
            折りたたみ（パタパタ）コーンは収納時の高さが小さく、反射ライン付きのものもあり、イベントや持ち運びの多い現場で保管性に優れます。点滅LED灯と組み合わせると夜間の視認性も高められます。
          </Lead>
        </ArticleSection>

        <ArticleSection>
          <H2>カラーコーンの色はどう選ぶ？</H2>
          <ConclusionBox>
            色は「注意喚起の強さ」と「景観・運用ルール」で選び、社内で意味を統一すると共有しやすくなります。
          </ConclusionBox>
          <Lead>
            レッド＝注意喚起・立入制限・駐車場・工事現場、グリーン＝安全通路・誘導・施設内、ブルー＝イベント・施設・区分表示、ホワイト＝店舗前・施設・景観配慮、ブラック＝景観配慮・店舗前、ブラック/イエロー＝注意喚起を強めたい場所、反射テープ付き＝夜間・駐車場・薄暗い場所。現場や施設ごとの運用ルールがある場合はそれに合わせます。
          </Lead>
          <ProductGrid items={basicConeProducts} cols={2} slug={SLUG} />
          <p className="mt-4 text-sm text-muted-foreground">
            商品名は仮置きです。正式名称・在庫・仕様は各商品ページでご確認ください。
          </p>
        </ArticleSection>

        <ArticleSection>
          <H2>用途別おすすめ構成</H2>
          <ConclusionBox>
            使用場所と目的が決まれば、コーン＋αの最適な組み合わせが決まります。
          </ConclusionBox>
          <ArticleTable
            head={["使用場所", "よくある目的", "おすすめ構成"]}
            rows={[
              [
                "駐車場",
                "駐車禁止・車輛出入口確保",
                "カラーコーン＋表示カバー＋コーンベッド",
              ],
              [
                "夜間駐車場",
                "車から見えやすくしたい",
                "反射テープ付きコーン＋重石",
              ],
              [
                "工事現場",
                "作業エリアを区切る",
                "カラーコーン＋コーンバー",
              ],
              [
                "搬入口",
                "車両と歩行者の動線を分ける",
                "コーン＋バー＋表示カバー",
              ],
              [
                "イベント会場",
                "来場者導線を作る",
                "コーン＋プラチェーン",
              ],
              [
                "店舗前",
                "一時的に進入を制限",
                "白・黒・青系コーン＋表示カバー",
              ],
              [
                "倉庫・工場",
                "安全通路や注意箇所を示す",
                "コーン＋安全通路カバー",
              ],
              [
                "広い区画",
                "明確に囲いたい",
                "プラバー・安全フェンス",
              ],
            ]}
          />

          <GroupLabel>反射テープ付き（夜間・駐車場向け）</GroupLabel>
          <Lead>
            夜間や薄暗い駐車場、車両通路ではヘッドライトで見つけやすい反射タイプが候補になります。
          </Lead>
          <ProductGrid items={reflectiveConeProducts} cols={2} slug={SLUG} />

          <GroupLabel>折りたたみコーン（保管・持ち運び向け）</GroupLabel>
          <Lead>
            イベントや持ち運びの多い現場では、収納時の高さが小さい折りたたみタイプが使いやすいです。
          </Lead>
          <ProductGrid items={foldingConeProducts} cols={2} slug={SLUG} />

          <GroupLabel>表示カバー・サインボード（意味を伝える）</GroupLabel>
          <Lead>
            「立入禁止」「駐車禁止」「車輛出入口」など、コーンだけでは伝わりにくい意図を文字で補います。
          </Lead>
          <ArticleFigure
            src="/images/articles/traffic-cone-sign-cover-usage.jpg"
            alt="カラーコーン用表示カバーで立入禁止や駐車禁止を伝えるイメージ"
          />
          <ProductGrid items={signCoverProducts} cols={2} slug={SLUG} />

          <GroupLabel>重石・風対策（コーンベッド）</GroupLabel>
          <Lead>
            屋外や風の通り道では、コーンベッドを併用すると倒れにくくなります。
          </Lead>
          <ArticleFigure
            src="/images/articles/reflective-cone-weight-night-parking.jpg"
            alt="夜間や屋外駐車場で反射テープ付きカラーコーンと重石を使うイメージ"
          />
          <ProductGrid items={weightProducts} cols={2} slug={SLUG} />

          <GroupLabel>広い範囲・車両動線（フェンス・ポール・バー）</GroupLabel>
          <Lead>
            コーンだけでは弱い場所や長い区間の区切りには、プラバー・安全フェンス・ゴムポールも候補です。
          </Lead>
          <ProductGrid items={wideAreaFenceProducts} cols={2} slug={SLUG} />

          <GroupLabel>小型コーン・合図灯・クッション材</GroupLabel>
          <Lead>
            狭い場所の目印、夜間の合図、柱まわりの保護など、コーンと併用しやすい関連安全用品です。
          </Lead>
          <ProductGrid items={smallRelatedProducts} cols={2} slug={SLUG} />

          <p className="mt-8">
            <SafetyListLink utmContent="list_safety" />
            {" →"}
          </p>
        </ArticleSection>

        <ArticleSection>
          <H2>カラーコーン・安全用品の導入前チェックリスト</H2>
          <ConclusionBox>
            屋内外・車両・夜間・風・目的・表示・保管・撤去頻度・現場ルールを確認すると選定ミスを防げます。
          </ConclusionBox>
          <ArticleFigure
            src="/images/articles/color-cone-safety-supplies-checklist.jpg"
            alt="カラーコーンや安全用品の導入チェックリストを確認する購買担当者"
          />
          <ul className="mt-6 space-y-2 text-lg leading-relaxed text-muted-foreground">
            {PROCUREMENT_CHECKLIST.map((item) => (
              <li key={item} className="flex gap-2">
                <span aria-hidden="true">[ ]</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </ArticleSection>

        <ArticleSection>
          <H2>屋外作業・イベントでは熱中症対策もあわせて確認</H2>
          <ConclusionBox>
            夏場の屋外現場・イベントでは、区画整理に加えてスタッフの暑さ対策も確認しておくと安心です。
          </ConclusionBox>
          <Lead>
            夏場の工事現場や屋外イベントでは、カラーコーンやバーで区画を整理するだけでなく、作業者・スタッフの熱中症対策も重要です。空調服・冷却ベスト、ヘルメット関連用品なども、現場条件に合わせて確認しておくと安心です。詳しくは
            <Link
              href="/articles/outdoor-work-heatstroke-measures"
              className="font-bold text-primary hover:underline"
            >
              外仕事の熱中症対策
            </Link>
            も参考にしてください。
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
              href={buildHeatstrokeUrl(
                HEATSTROKE_LIST_URL,
                "heatstroke_list",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-primary hover:underline"
            >
              熱中症対策一覧へ（GCセレクト）
            </a>
          </p>
        </ArticleSection>

        <FaqSection faq={FAQ} />

        <ArticleSection>
          <H2>まとめ</H2>
          <ul className="mt-4 space-y-2 text-lg leading-relaxed text-muted-foreground">
            <li>
              ・カラーコーンは、駐車場・工事現場・イベント・施設で使いやすい安全用品
            </li>
            <li>・単体では目印や注意喚起に向いている</li>
            <li>
              ・進入制限を明確にするならコーンバー、イベント・施設導線にはプラチェーン
            </li>
            <li>
              ・「立入禁止」「駐車禁止」「車輛出入口」などは表示カバーで伝える
            </li>
            <li>
              ・屋外や風のある場所ではコーンベッドを検討、夜間や薄暗い駐車場では反射テープ付きが候補
            </li>
            <li>
              ・広い範囲や車両動線にはプラバー・フェンス・ゴムポールも検討する
            </li>
            <li>・商品仕様や適合品は必ず最新の商品ページで確認する</li>
          </ul>
        </ArticleSection>

        <section className="mt-12 rounded-2xl bg-secondary p-8 text-secondary-foreground md:p-10">
          <h2 className="text-2xl font-black text-white">
            カラーコーン・安全用品を選ぶ前に整理すること
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/90">
            目印にしたいのか、区切りたいのか、文字で伝えたいのか、夜間でも見せたいのか、風対策が必要か——この5点を先に整理すると、コーン単体か、バー・チェーン・表示カバー・重石・反射タイプのどれを足すかが決まりやすくなります。
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={buildUrl(SAFETY_LIST_URL, "footer_safety")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-store-yahoo px-6 py-3 text-sm font-bold text-white transition hover:bg-store-yahoo-hover"
            >
              安全用品一覧
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

        <Disclaimer extra="カラーコーンは注意喚起・区画整理の用品であり、危険箇所の安全を完全に保証するものではありません。工事現場・車両動線・歩行者通路・夜間作業では、現場ルール・安全管理基準・必要な標識や誘導体制に従ってください。" />
      </ArticleContent>
    </ArticleLayout>
  );
}
