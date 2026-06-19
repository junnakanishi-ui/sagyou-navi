import type { Metadata } from "next";
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

const SLUG = "construction-work-platform";

const gcImageUrl = (id: string) => `/products/${id}.jpg`; // 外部URL禁止

const buildUrl = (base: string, utmContent: string) => {
  const sep = base.includes("?") ? "&" : "?";
  return `${base}${sep}utm_source=sagyou_navi&utm_medium=referral&utm_campaign=2026_construction_platform&utm_content=${utmContent}`;
};

const PLATFORM_LIST_URL =
  "https://store.shopping.yahoo.co.jp/signcity-yshop/a44aac2fb47.html?view=grid";
const TOOLBOX_LIST_URL =
  "https://store.shopping.yahoo.co.jp/signcity-yshop/9129bf6abc8.html?view=grid";
const CART_LIST_URL =
  "https://store.shopping.yahoo.co.jp/signcity-yshop/b1bfc8c2c2.html";
const WORKBENCH_LIST_URL =
  "https://store.shopping.yahoo.co.jp/signcity-yshop/e2ea8bb6c2c.html";
const TRUSCO_LIST_URL =
  "https://store.shopping.yahoo.co.jp/signcity-yshop/a5c8a5e9a5.html";

export const metadata: Metadata = {
  title:
    "建築現場の作業台はどう選ぶ？足場台・踏台・ペケ台・工具置き台の使い分け｜作業用品ナビ",
  description:
    "建築現場で使う作業台の選び方を、足場台・作業用踏台・ペケ台・工具置き台・台車まで整理。人が乗る作業台と材料を置く作業台の違い、高さ・天板寸法・段差対応・収納性のチェックポイントを法人・現場向けに解説します。",
  alternates: {
    canonical: `https://sagyou-navi.com/articles/${SLUG}`,
  },
  openGraph: {
    title:
      "建築現場の作業台はどう選ぶ？足場台・踏台・ペケ台・工具置き台の使い分け",
    description:
      "建築現場で使う作業台の選び方を、足場台・作業用踏台・ペケ台・工具置き台・台車まで整理。人が乗る作業台と材料を置く作業台の違い、高さ・天板寸法・段差対応・収納性のチェックポイントを法人・現場向けに解説します。",
    type: "article",
    images: ["/images/articles/construction-site-work-platform-hero.jpg"],
  },
};

const platformScaffold = [
  {
    id: "157601",
    name: "トラスコ 足場台 1000×400×H850 TDWT-910（Aマーク・最大150kg）",
  },
  {
    id: "157602",
    name: "トラスコ 足場台 脚部伸縮式 0.6m〜0.91m TDWG-610（Aマーク・段差対応）",
  },
  {
    id: "157599",
    name: "トラスコ 足場台 600×400×H560 TDWT-606",
  },
];

const platformGrating = [
  {
    id: "157533",
    name: "トラスコ アルミ製グレーチング作業用踏台 1段 H0.5m TSFGR-165（水まわり）",
  },
  {
    id: "157553",
    name: "トラスコ 折りたたみ式作業用踏台 H0.9m TDAD-090",
  },
];

const platformStep = [
  {
    id: "224589",
    name: "トラスコ 作業用踏台 アルミ製・高強度タイプ 1段 TSF-163",
  },
  {
    id: "224590",
    name: "トラスコ 作業用踏台 アルミ製・高強度タイプ 1段 TSF-165",
  },
  {
    id: "224591",
    name: "トラスコ 作業用踏台 1段 高さ0.25m 天板600×600 TSF-16625",
  },
  {
    id: "224608",
    name: "トラスコ 作業用踏台 2段 高さ0.60m 天板1000×400 TSF-2106",
  },
];

const toolboxProducts = [
  { id: "157957", name: "トラスコ ウォーターガードボックス TWG-108（防滴）" },
  { id: "158095", name: "トラスコ アルミケース TACB-50（軽量）" },
  { id: "157971", name: "トラスコ スーパーハードボックス TSHB-620" },
  { id: "158008", name: "トラスコ ツールボックス（パーツケース系）TPC-O53L" },
];

const cartProducts = [
  { id: "167468", name: "トラスコ カルティオ 新型 ブラック MPK-780-BK" },
  {
    id: "190475",
    name: "トラスコ カルティオ 新型 ブラック ストッパー付 MPK780BKSS",
  },
  {
    id: "216713",
    name: "トラスコ カルティオビッグ 折畳 900×600 ストッパー付 オリーブ MPK-906-OG-S",
  },
  {
    id: "159750",
    name: "トラスコ カルティオビッグ 固定ハンドルタイプ ブルー MPK-900-B",
  },
];

const workbenchProducts = [
  {
    id: "161681",
    name: "トラスコ 中量作業台 回転台付アンビルバイス付 RHW-0960VRS",
  },
  { id: "161973", name: "トラスコ 軽量作業台 TFAE型 TFAEL-1260" },
  { id: "161782", name: "トラスコ 移動式重量作業台 STWC-1200" },
  { id: "220888", name: "トラスコ 中荷重作業台 GW型 GWR-0945" },
];

const CHECKLIST = [
  "人が乗る用途か、材料を置く用途か",
  "必要な作業高さは何mか",
  "天板寸法は十分か",
  "最大使用質量は足りるか（体重＋工具・装備）",
  "工具や部材を一緒に置く必要があるか",
  "設置面に段差・傾斜・不陸・水濡れがないか",
  "屋外・水まわり・洗浄場所で使うか",
  "折りたたみ・車載・保管が必要か",
  "手すりや別売りオプションが必要か",
  "現場ルール・元請ルール・メーカー取扱説明書に合っているか",
];

const RELATED: RelatedArticle[] = [
  {
    href: "/articles/ladder-stepladder-difference",
    label:
      "はしごと脚立の違いとは？JIS・SG規格と「天板に乗ってはいけない」理由",
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
    href: "/articles/toolbag-backpack-selection",
    label:
      "ツールバッグとバックパックどっちが良い？工具の持ち運びを軽くする選び方",
  },
];

const FAQ = [
  {
    q: "建築現場で使う作業台は、足場台のことですか？",
    a: "建築現場では、作業台という言葉が複数の意味で使われます。高い場所で作業するための足場台・踏台を指す場合もあれば、材料を置いたり切ったりするペケ台・ワークベンチを指す場合もあります。「人が乗る台」と「材料や工具を置く台」に分けて選ぶとわかりやすいです。",
  },
  {
    q: "脚立ではなく足場台を選ぶべきなのはどんな作業ですか？",
    a: "横方向に少し移動しながら作業する場合、工具や部材を手元に置きたい場合、壁面や天井付近で安定した作業スペースを確保したい場合は、足場台や作業用踏台を検討しやすいです。はしご・脚立の使用前に、より安全な作業台・可搬式作業台に変更できないか検討することも重要です。",
  },
  {
    q: "ペケ台と足場台は同じですか？",
    a: "同じではありません。ペケ台は主に材料を置く・切る・仮置きするための簡易作業台で、人が乗るための作業床とは分けて考えます。人が乗る用途では、用途に合った足場台・作業用踏台・可搬式作業台を検討してください。",
  },
  {
    q: "建築現場の作業台は高さだけで選んでもよいですか？",
    a: "高さだけでは不十分です。天板寸法、最大使用質量、設置面の状態、段差対応、折りたたみ可否、手すりの必要性、工具や部材を置くかどうかまで確認する必要があります。",
  },
  {
    q: "足場台の上に工具を置いて作業してもよいですか？",
    a: "必要最小限の工具を安全に扱うことはありますが、置きすぎると足元や作業スペースを圧迫する可能性があります。工具は工具箱や台車で整理し、作業台の上はできるだけ安全に動ける状態を保つことが大切です。",
  },
  {
    q: "建築現場で常設作業台を使うのはどんな場面ですか？",
    a: "現場内を毎日持ち運ぶ作業ではなく、現場事務所・加工場・倉庫・資材置き場などに据え置いて、材料の加工・組立・検品を行う場面に向いています。移動性より耐荷重・天板材・固定性を重視して選びます。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "建築現場の作業台はどう選ぶ？足場台・踏台・ペケ台・工具置き台の使い分け",
  description:
    "建築現場で使う作業台の選び方を、足場台・作業用踏台・ペケ台・工具置き台・台車まで整理。人が乗る作業台と材料を置く作業台の違い、高さ・天板寸法・段差対応・収納性のチェックポイントを法人・現場向けに解説します。",
  image:
    "https://sagyou-navi.com/images/articles/construction-site-work-platform-hero.jpg",
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

export default function ConstructionWorkPlatformPage() {
  return (
    <ArticleLayout faq={FAQ} articleJsonLd={articleJsonLd}>
      <Breadcrumb current="建築現場の作業台の選び方" />
      <ArticleHeader
        category="compare"
        readingTime={13}
        title="建築現場の作業台はどう選ぶ？"
        subtitle="足場台・踏台・ペケ台・工具置き台の使い分け"
      />
      <HeroImage
        src="/images/articles/construction-site-work-platform-hero.jpg"
        alt="建築現場で足場台と工具を確認する現場責任者"
      />

      <ArticleContent>
        <Lead>
          建築現場で「作業台」といっても、実際にはいくつかの意味があります。内装工事や設備工事で少し高い場所に乗るための足場台・作業用踏台を指す場合もあれば、材料を切ったり仮置きしたりするペケ台・ワークベンチを指す場合もあります。
        </Lead>
        <LeadMuted>
          さらに現場では、工具を床に置く、必要な部品を探す、材料を何度も取りに戻るといった小さなムダが積み重なります。そのため、建築現場の作業台選びでは、単に「台を買う」のではなく、乗る・置く・切る・運ぶ・整理するを分けて考えることが大切です。
        </LeadMuted>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          この記事では、建築現場で使う作業台の種類と、足場台・踏台・ペケ台・工具箱・台車・常設作業台の使い分けを、法人担当者や現場責任者向けに整理します。
        </p>

        <div className="my-8 rounded-lg border-2 border-primary/40 bg-primary-light px-5 py-4 text-base leading-relaxed">
          <p className="font-bold text-foreground">
            Q. 建築現場の「作業台」はどう選べばいい？
          </p>
          <p className="mt-2 text-foreground">
            <strong>A.</strong>{" "}
            まず「人が乗る台」と「材料や工具を置く台」に分けて選ぶのが基本です。高い場所で作業するなら足場台・作業用踏台、材料加工ならペケ台や常設作業台、工具整理なら工具箱、運搬なら台車を組み合わせると、移動・探す時間・不安定な作業を減らせます。
          </p>
        </div>

        <div className="my-8 rounded-lg border-l-4 border-blue-500 bg-blue-50 px-5 py-4 text-base leading-relaxed text-foreground">
          <strong>
            結論：建築現場の作業台は「乗る台」と「置く台」を分けて選ぶ。
          </strong>
          <ul className="mt-3 space-y-1 text-muted-foreground">
            <li>
              ・高い場所で作業するなら、脚立だけでなく
              <strong className="text-foreground">足場台・作業用踏台</strong>
              を検討する
            </li>
            <li>
              ・段差や不陸がある場所では、
              <strong className="text-foreground">脚部伸縮式の足場台</strong>
              が候補になる
            </li>
            <li>
              ・水まわり・屋外・洗浄が必要な場所では、
              <strong className="text-foreground">
                グレーチング仕様の踏台
              </strong>
              も選択肢
            </li>
            <li>
              ・材料を切る・置く用途なら、
              <strong className="text-foreground">
                ペケ台・作業馬・常設作業台
              </strong>
              を別で考える
            </li>
            <li>
              ・工具や部品の整理には、
              <strong className="text-foreground">工具箱・ツールボックス・台車</strong>
              を組み合わせる
            </li>
            <li>
              ・高所作業や足場に関わる作業では、必ず現場ルール・法令・メーカー取扱説明書を確認する
            </li>
          </ul>
        </div>

        <div className="my-8 rounded-lg border-l-4 border-amber-500 bg-amber-50 px-5 py-4 text-sm leading-relaxed text-muted-foreground">
          本記事は、建築現場で使う作業台・足場台・踏台の選び方を一般的に整理したものです。高所作業、足場の組立て、墜落防止措置、作業床の設置などは、労働安全衛生法令、現場ルール、元請・発注者の基準、メーカーの取扱説明書を必ずご確認ください。作業内容や高さ、設置場所によって必要な安全対策は異なります。商品の仕様・価格・在庫・寸法・最大使用質量は各商品ページで最新情報をご確認ください。
        </div>

        <ArticleSection>
          <H2>
            建築現場でいう「作業台」とは？まず4種類に分けて考える
          </H2>
          <ConclusionBox>
            人が乗る台・材料を置く/切る台・工具を整理する用品・運ぶ用品の4つに分けると選びやすくなります。
          </ConclusionBox>
          <ArticleFigure
            src="/images/articles/work-platform-step-ladder-peke-table-difference.jpg"
            alt="足場台・作業用踏台・ペケ台の違いを比較するイメージ"
          />
          <H3>1. 人が乗る作業台｜足場台・踏台・可搬式作業台</H3>
          <Lead>
            足場台、脚部伸縮式足場台、作業用踏台、グレーチング仕様踏台、折りたたみ式作業用踏台など。脚立より天板が広く、複数歩分の作業スペースを確保しやすいのが特徴です。
          </Lead>
          <H3>2. 材料を置く・切る作業台｜ペケ台・作業馬・ワークベンチ</H3>
          <Lead>
            ペケ台や作業馬は、材料を仮置きしたり切断したりするための簡易作業台です。人が乗るための作業床とは分けて考えます。常設で使うなら軽量・中量・重量作業台も候補になります。
          </Lead>
          <H3>3. 工具を置く・整理する作業台まわり用品</H3>
          <Lead>
            工具箱・ツールボックス・パーツケースなど。作業台の上が工具で埋まる、床置きで探す時間が増える、という現場課題に対応します。
          </Lead>
          <H3>4. 材料や工具を運ぶ台｜台車・平台車</H3>
          <Lead>
            台車・カルティオなど。作業台の近くまで工具・材料を運び、現場内の持ち戻りを減らします。
          </Lead>
        </ArticleSection>

        <ArticleSection>
          <H2>
            脚立と足場台は何が違う？建築現場では作業床の広さが重要
          </H2>
          <ConclusionBox>
            脚立は昇降・軽作業、足場台は天板が広く横移動を伴う作業に向き、高所では法令・取説確認が必須です。
          </ConclusionBox>
          <H3>脚立は短時間の昇降・軽作業向き</H3>
          <Lead>
            脚立はA字型に開いて自立でき、両手作業もできる便利な道具です。短時間の昇降や軽作業に向きますが、天板が狭いため横移動を伴う作業には不向きな場合があります（脚立を否定するものではありません）。
          </Lead>
          <H3>足場台は天板が広く、横移動を伴う作業に向きやすい</H3>
          <Lead>
            足場台は天板が広く、複数歩分の作業スペースを確保しやすいため、脚立に比べて水平で長い作業面を使えます。塗装、外壁補修、内装工事、軒下作業などにも使われ、手すりやエリアガードを取り付けできるタイプもあります。
          </Lead>
          <H3>高所作業では現場ルール・法令・取扱説明書の確認が必須</H3>
          <Lead>
            労働安全衛生規則では、高さ2m以上の箇所で墜落のおそれがある作業を行う場合、足場を組み立てるなどして作業床を設けることが定められています。また、はしごや脚立の使用前には、より床面の広い作業台・可搬式作業台などに変更できないかを検討することも大切です。作業内容や高さに応じて、必要な安全対策は必ず現場ルール・法令・取扱説明書で確認してください。
          </Lead>
        </ArticleSection>

        <ArticleSection>
          <H2>建築現場の作業台を選ぶときの5つのチェックポイント</H2>
          <ConclusionBox>
            用途・天板の広さ・高さ・最大使用質量・収納性の5点を確認します。
          </ConclusionBox>
          <H3>1. 何に使うか｜乗る・置く・切る・運ぶを分ける</H3>
          <ArticleTable
            head={["用途", "向いている用品"]}
            rows={[
              ["高い場所で作業する", "足場台、作業用踏台"],
              ["段差のある場所で作業する", "脚部伸縮式足場台"],
              ["水まわり・洗浄場所", "グレーチング仕様踏台"],
              ["材料を切る・仮置きする", "ペケ台、作業馬、常設作業台"],
              ["工具をまとめて持ち運ぶ", "工具箱、ツールボックス"],
              ["材料・工具を移動する", "台車、カルティオ"],
            ]}
          />
          <H3>2. 天板の広さ｜600×400か、1000×400か</H3>
          <Lead>
            短時間の点検や一人作業なら600×400程度、横方向に少し動く作業や工具を置く作業なら1000×400程度を検討します。
          </Lead>
          <H3>3. 高さ｜0.25m・0.5m・0.6m・0.85m・0.9mの違い</H3>
          <ArticleTable
            head={["高さ", "向いている作業"]}
            rows={[
              ["約0.25m", "段差解消、低い設備へのアクセス"],
              ["約0.3〜0.5m", "工場・倉庫・現場の軽作業"],
              ["約0.56〜0.6m", "内装・設備・配線などの低〜中段作業"],
              ["約0.85〜0.9m", "天井付近、壁面上部、設備点検"],
              ["0.6〜0.91m伸縮", "段差や不陸がある場所"],
            ]}
          />
          <H3>4. 最大使用質量｜作業者の体重＋工具・装備も考える</H3>
          <Lead>
            作業者の体重だけでなく、身につける工具・装備の重さも含めて余裕を見ます。例として、足場台TDWT-910は最大使用質量150kg・天板高さ0.85m・天板1000×400mm・Aマーク認定品、TDWG-610は最大使用質量150kg・天板高さ0.60〜0.91m・天板1000×400mm・脚部伸縮ピッチ6mm・Aマーク認定品です（仕様は商品ページで最新をご確認ください）。
          </Lead>
          <H3>5. 収納・持ち運び｜折りたたみ・重量・車載性を見る</H3>
          <Lead>
            建築現場では「使うとき」だけでなく「持っていけるか」「片付けられるか」も重要です。折りたたみ式や完成品があり、現場間移動や保管場所も確認します。
          </Lead>
        </ArticleSection>

        <ArticleSection>
          <H2>用途別｜建築現場で使う足場台・作業用踏台の選び方</H2>
          <ConclusionBox>
            内装/設備、段差、低位置、水まわり、材料加工、工具整理、運搬で、向いている用品が変わります。
          </ConclusionBox>
          <ArticleFigure
            src="/images/articles/adjustable-leg-work-platform-construction.jpg"
            alt="段差のある建築現場で脚部伸縮式足場台を確認する作業者"
          />
          <Lead>
            内装・設備・電気工事なら天板の広い足場台、段差や不陸がある場所なら脚部伸縮式足場台、低い設備や床付近なら低めの踏台、水まわり・屋外・洗浄場所ならグレーチング仕様踏台、材料の切断・仮置きならペケ台・常設作業台、工具整理なら工具箱、運搬なら台車——と用途で使い分けます。
          </Lead>

          <GroupLabel>足場台</GroupLabel>
          <ProductGrid items={platformScaffold} cols={3} slug={SLUG} />

          <GroupLabel>グレーチング/折りたたみ踏台</GroupLabel>
          <ProductGrid items={platformGrating} cols={2} slug={SLUG} />

          <GroupLabel>高強度踏台</GroupLabel>
          <ProductGrid items={platformStep} cols={2} slug={SLUG} />

          <p className="mt-8">
            <a
              href={buildUrl(PLATFORM_LIST_URL, "list_platform")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-bold text-primary hover:underline"
            >
              はしご・脚立（建設現場作業台）一覧へ →
            </a>
          </p>
        </ArticleSection>

        <ArticleSection>
          <H2>建築現場の作業台 使い分け早見表</H2>
          <ConclusionBox>
            種類ごとの用途・向いている作業・注意点を一覧で確認できます。
          </ConclusionBox>
          <ArticleTable
            head={["種類", "主な用途", "向いている作業", "注意点"]}
            rows={[
              [
                "足場台",
                "人が乗って作業する",
                "内装、壁面、設備、電気工事",
                "設置面・最大使用質量・天板高さを確認",
              ],
              [
                "脚部伸縮式足場台",
                "段差のある場所で作業する",
                "屋外、床の高さが違う現場",
                "伸縮脚のロック確認が必要",
              ],
              [
                "作業用踏台",
                "低〜中段の作業",
                "倉庫、工場、施設管理",
                "手すり有無、段数、設置寸法を確認",
              ],
              [
                "グレーチング踏台",
                "水を使う場所",
                "洗浄、屋外、水まわり",
                "使用環境と滑り対策を確認",
              ],
              [
                "ペケ台",
                "材料の仮置き・切断",
                "大工、内装、造作",
                "人が乗る用途と混同しない",
              ],
              [
                "常設作業台",
                "加工・組立・検品",
                "現場事務所、倉庫、加工場",
                "移動性より耐荷重・天板材を確認",
              ],
              [
                "工具箱",
                "工具の保管・持ち運び",
                "設備、電気、内装",
                "作業台上に工具を広げすぎない",
              ],
              [
                "台車",
                "材料・工具の運搬",
                "現場内移動、搬入、片付け",
                "床面・段差・荷重を確認",
              ],
            ]}
          />
        </ArticleSection>

        <ArticleSection>
          <H2>
            作業台の上を散らかさないために、工具箱・ツールボックスも一緒に考える
          </H2>
          <ConclusionBox>
            工具は工具箱、部品はパーツケースに分け、作業台や足場台の上をできるだけ広く保ちます。
          </ConclusionBox>
          <ArticleFigure
            src="/images/articles/construction-work-platform-toolbox-organization.jpg"
            alt="建築現場の作業台まわりで工具箱とツールボックスを整理する様子"
          />
          <Lead>
            作業台の上に工具を広げすぎると作業スペースが狭くなり、足場台の上に不要な工具を置くと足元を圧迫します。工具は工具箱、部品はパーツケース、頻繁に使うものは台車で近くへ運ぶ、と役割を分けます。防水性・耐久性・軽量性・収納量で選びます。
          </Lead>

          <ProductGrid items={toolboxProducts} cols={2} slug={SLUG} />

          <p className="mt-8">
            <a
              href={buildUrl(TOOLBOX_LIST_URL, "list_toolbox")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-bold text-primary hover:underline"
            >
              工具箱・ツールボックス一覧はこちら →
            </a>
          </p>
        </ArticleSection>

        <ArticleSection>
          <H2>
            材料や工具を作業場所まで運ぶなら、台車もセットで考える
          </H2>
          <ConclusionBox>
            作業台を置いても材料を取りに戻ると非効率なので、台車で持ち戻りを減らします。
          </ConclusionBox>
          <ArticleFigure
            src="/images/articles/construction-site-cart-material-transport.jpg"
            alt="建築現場で台車を使い材料と工具を作業場所まで運ぶイメージ"
          />
          <Lead>
            作業台を置いても、材料を何度も取りに戻ると効率が落ちます。工具箱・部材・養生材などをまとめて運ぶなら台車が便利です。建築現場では段差・床面・荷物量に合わせて、カルティオ、カルティオビッグを使い分けます。
          </Lead>

          <ProductGrid items={cartProducts} cols={2} slug={SLUG} />

          <p className="mt-8">
            <a
              href={buildUrl(CART_LIST_URL, "list_cart")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-bold text-primary hover:underline"
            >
              運搬台車一覧へ →
            </a>
          </p>
        </ArticleSection>

        <ArticleSection>
          <H2>
            現場事務所・加工場・倉庫には、常設の作業台も選択肢
          </H2>
          <ConclusionBox>
            毎日持ち運ぶ作業には足場台、据え置く加工・組立・検品には常設作業台が向きます。
          </ConclusionBox>
          <ArticleFigure
            src="/images/articles/construction-site-workbench-material-preparation.jpg"
            alt="建築現場の加工スペースで常設作業台を使うイメージ"
          />
          <Lead>
            現場内で毎日移動する作業には足場台や折りたたみ式の台が向いています。一方で、現場事務所、資材置き場、倉庫、加工スペースなどに常設するなら、軽量作業台・中量作業台・重量作業台も候補です。移動性より、耐荷重・天板材・固定性を確認して選びます。
          </Lead>

          <ProductGrid items={workbenchProducts} cols={2} slug={SLUG} />

          <p className="mt-8">
            <a
              href={buildUrl(WORKBENCH_LIST_URL, "list_workbench")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-bold text-primary hover:underline"
            >
              作業台一覧へ →
            </a>
          </p>
        </ArticleSection>

        <ArticleSection>
          <H2>建築現場の作業台を導入する前のチェックリスト</H2>
          <ConclusionBox>
            用途・高さ・天板・質量・設置面・収納・法令適合まで確認すると選定ミスを防げます。
          </ConclusionBox>
          <ul className="mt-6 space-y-2 text-lg leading-relaxed text-muted-foreground">
            {CHECKLIST.map((item) => (
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
              ・建築現場の作業台は「人が乗る台」と「材料・工具を置く台」に分けて選ぶ
            </li>
            <li>
              ・高い場所では脚立だけでなく足場台・作業用踏台を検討する
            </li>
            <li>・段差は脚部伸縮式、水まわりはグレーチング踏台が候補</li>
            <li>
              ・ペケ台は材料を置く・切る台で、人が乗る用途とは分ける
            </li>
            <li>
              ・工具は工具箱・パーツケース、運搬は台車で作業台まわりを整える
            </li>
            <li>
              ・常設の加工・組立には軽量・中量・重量作業台も選択肢
            </li>
            <li>
              ・高所作業は法令・現場ルール・メーカー取扱説明書を必ず確認する
            </li>
          </ul>
        </ArticleSection>

        <section className="mt-12 rounded-2xl bg-secondary p-8 text-secondary-foreground md:p-10">
          <h2 className="text-2xl font-black text-white">
            建築現場の作業台・関連用品をまとめて確認する
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={buildUrl(PLATFORM_LIST_URL, "footer_platform")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-store-yahoo px-6 py-3 text-sm font-bold text-white transition hover:bg-store-yahoo-hover"
            >
              はしご・脚立（建設現場作業台）一覧
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

        <Disclaimer extra="高所作業・足場・作業床に関する判断は、法令・現場ルール・メーカー取扱説明書を必ずご確認ください。" />
      </ArticleContent>
    </ArticleLayout>
  );
}
