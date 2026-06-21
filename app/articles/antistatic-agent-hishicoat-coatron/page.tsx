import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
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
  type ArticleProduct,
  type FaqItem,
  type RelatedArticle,
} from "@/components/article";

const SLUG = "antistatic-agent-hishicoat-coatron";

const buildUrl = (base: string, utmContent: string) => {
  const sep = base.includes("?") ? "&" : "?";
  return `${base}${sep}utm_source=sagyou_navi&utm_medium=article&utm_campaign=antistatic_agent&utm_content=${utmContent}`;
};

const LIST = {
  antistaticAgent:
    "https://store.shopping.yahoo.co.jp/signcity-yshop/c0c5c5c5cb.html",
  staticControl:
    "https://store.shopping.yahoo.co.jp/signcity-yshop/20cbc55c55c.html?b=61&view=grid",
};

const LIST_CTA_CLASS =
  "inline-flex items-center gap-2 rounded-xl bg-store-yahoo px-6 py-3 text-sm font-bold text-white transition hover:bg-store-yahoo-hover";

const yahooProduct = (
  id: string,
  name: string,
  note?: string
): ArticleProduct => ({
  id,
  name,
  note,
  links: {
    yahoo: `https://store.shopping.yahoo.co.jp/signcity-yshop/${id}.html`,
  },
});

const mainAgents: ArticleProduct[] = [
  yahooProduct(
    "009345",
    "ヒシコートA 塗布式静電防止剤 1L（三菱ケミカルインフラテック）",
    "まず1本試したい看板製作・樹脂板加工の現場に"
  ),
  yahooProduct(
    "073884",
    "コートロン COATRON 帯電防止剤 1L（タキロンシーアイ）",
    "PVC・PET・PP・PE・ABSなど樹脂板の仕上げ前処理に"
  ),
  yahooProduct(
    "009344",
    "ヒシコートA 塗布式静電防止剤 1L 10本入",
    "複数作業台・複数人作業・常備在庫の看板製作会社に"
  ),
  yahooProduct(
    "073885",
    "コートロン COATRON 帯電防止剤 1L 6本入",
    "樹脂板加工で継続使用・まとめ買いに"
  ),
];

const groupBarrier: ArticleProduct[] = [
  yahooProduct(
    "163321",
    "静電気除去シート 抗菌スパークガードマグネット",
    "触れる場所の静電気対策"
  ),
  yahooProduct(
    "163337",
    "帯電防止防炎フィルムシート 防炎UVカット防虫タイプ",
    "間仕切り・カバー用途"
  ),
  yahooProduct(
    "163333",
    "帯電防止防炎フィルムシート 防炎薄手タイプ",
    "作業エリアのシート対策"
  ),
  yahooProduct(
    "163343",
    "静電気除去シート SD50100",
    "作業台・設備まわりの除電"
  ),
];

const groupFloor: ArticleProduct[] = [
  yahooProduct(
    "163349",
    "導電マット CDM2333",
    "作業台・床面の静電気対策"
  ),
  yahooProduct(
    "163364",
    "導電性作業チェア DC-10BK",
    "座り作業時の静電気対策"
  ),
  yahooProduct(
    "163303",
    "導電マット接続アース線 GW0.1",
    "導電マットのアース接続"
  ),
  yahooProduct("163301", "グラウンドコード ASP30", "アース接続まわり"),
];

const groupWorker: ArticleProduct[] = [
  yahooProduct(
    "163373",
    "エレブレイク フード付つなぎ服",
    "作業者の帯電対策"
  ),
  yahooProduct(
    "163368",
    "静電気除去アームカバー SDA",
    "腕まわりの除電対策"
  ),
  yahooProduct(
    "163288",
    "リストストラップバンド SEWS-A",
    "手元作業の静電気対策"
  ),
  yahooProduct(
    "163289",
    "リストストラップ 金属アレルギー対応 WS-A-MS",
    "金属アレルギー配慮タイプ"
  ),
  yahooProduct("163291", "リストストラップ WS-A", "標準的な手首の静電気対策"),
  yahooProduct("163293", "アースターミナル WS-ET", "リストストラップ接続用"),
];

const groupClean: ArticleProduct[] = [
  yahooProduct(
    "163276",
    "静電ブラシ BAS180",
    "表面のホコリ除去・除電"
  ),
  yahooProduct(
    "163281",
    "除電ブラシ ソフト 木柄 Mサイズ TJB-SM",
    "傷を抑えたい清掃作業"
  ),
  yahooProduct(
    "163284",
    "導電性ダスター刷毛 TDPB-56",
    "細部のホコリ除去"
  ),
];

const groupPack: ArticleProduct[] = [
  yahooProduct(
    "163306",
    "帯電防止バッグ TAD-2030",
    "部品・製品の保管、梱包"
  ),
  yahooProduct(
    "163311",
    "クリーンルーム用ESDテープ CET5050",
    "クリーン環境の固定・表示"
  ),
  yahooProduct("163313", "銅箔テープ TCD3520N", "アース・導電補助"),
];

const CHECKLIST = [
  "使う素材は何か（アクリル板ではないか、クラックの恐れはないか）",
  "目的は看板製作・樹脂板加工・電子部品対策のどれか",
  "単品で試すか、まとめ買いか（10本入／6本入）",
  "火気を避けられる作業環境か・換気できるか",
  "保護手袋・保護眼鏡を用意できるか",
  "SDSを取得・確認したか",
  "塗布の効果は一時的（数週間程度）と理解し、再処理を前提にできるか",
  "導電マットやリストストラップなど、併用が必要な範囲はどこか",
];

const FAQ: FaqItem[] = [
  {
    q: "ヒシコートとコートロンは何に使うものですか？",
    a: "どちらも静電気によるホコリ付着を抑えるための塗布式静電防止剤・帯電防止剤です。看板製作、樹脂板加工、フィルム貼り前の前処理などで使われます。",
  },
  {
    q: "ヒシコートとコートロンはどちらを選べばよいですか？",
    a: "普段使っている材料、メーカー指定、社内の作業手順、まとめ買い単位で選ぶのが現実的です。ヒシコートAは三菱ケミカルインフラテック、コートロンはタキロンシーアイの商品で、コートロンはPVC・PET・PP・PE・ABSなどに利用できるとされています。",
  },
  {
    q: "アクリル板に使えますか？",
    a: "注意が必要です。商品ページでは、アクリル板に使用するとクラック（ひび割れ）等の不具合が発生する可能性があると記載されています。使用前に必ず素材適合と目立たない箇所での試し塗りを確認してください。",
  },
  {
    q: "コートロンの効果はどれくらい持続しますか？",
    a: "メーカー公式Q&Aでは、塩化ビニルタキロンプレートに塗布した場合の帯電防止機能持続時間は2〜3週間程度とされています。ただし使用条件・環境によって異なります。",
  },
  {
    q: "油脂汚れ除去にも使えますか？",
    a: "商品名や販売ページでは「油脂汚れ除去」の文脈で探されることがありますが、強力な脱脂剤としてではなく、静電防止と前処理清掃の一環として捉えるのが安全です。素材への影響があるため、必ず目立たない箇所で確認してください。",
  },
  {
    q: "静電気対策はヒシコート・コートロンだけで十分ですか？",
    a: "看板・樹脂板の表面処理では有効な選択肢ですが、電子部品・作業者・作業台・床・保管袋まで含めたESD対策では、導電マット、リストストラップ、アース線、除電ブラシ、帯電防止バッグなどの併用を検討する必要があります。",
  },
  {
    q: "火気や換気で注意することはありますか？",
    a: "ヒシコートA・コートロンは火気厳禁のアルコール類です。着火源から遠ざけ、換気の良い場所で使用し、保護手袋・保護眼鏡などの保護具を着用してください。詳細は各製品のSDS・商品ページ・現場ルールを確認してください。",
  },
];

const RELATED: RelatedArticle[] = [
  {
    href: "/articles/aluminum-composite-panel-cut",
    label:
      "アルミ複合板のカット販売とは？指定寸法・角R・穴あけ加工を依頼する前のチェックポイント",
  },
  {
    href: "/articles/safety-shoes-replacement",
    label:
      "安全靴の交換時期はいつ？靴底・先芯・破れの見分け方と買い替え目安",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "ヒシコート・コートロンとは？静電防止剤でホコリ付着・油脂汚れを抑える使い方と選び方",
  description:
    "ヒシコートA・コートロンなどの静電防止剤の用途・使い方・注意点を看板製作・樹脂板加工の現場向けに解説。ホコリ付着や油脂汚れによる仕上がり不良を防ぐ前処理、まとめ買い、導電マット・リストストラップなど関連する静電気対策用品も紹介します。",
  image:
    "https://sagyou-navi.com/images/articles/antistatic-agent-hishicoat-coatron-hero.jpg",
  datePublished: "2026-06-21",
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

export const metadata: Metadata = {
  title:
    "ヒシコート・コートロンとは？静電防止剤でホコリ付着・油脂汚れを抑える使い方と選び方｜作業用品ナビ",
  description:
    "ヒシコートA・コートロンなどの静電防止剤の用途・使い方・注意点を看板製作・樹脂板加工の現場向けに解説。ホコリ付着や油脂汚れによる仕上がり不良を防ぐ前処理、まとめ買い、導電マット・リストストラップなど関連する静電気対策用品も紹介します。",
  alternates: {
    canonical: `https://sagyou-navi.com/articles/${SLUG}`,
  },
  openGraph: {
    title:
      "ヒシコート・コートロンとは？静電防止剤でホコリ付着・油脂汚れを抑える使い方と選び方",
    description:
      "ヒシコートA・コートロンなどの静電防止剤の用途・使い方・注意点を看板製作・樹脂板加工の現場向けに解説。ホコリ付着や油脂汚れによる仕上がり不良を防ぐ前処理、まとめ買い、導電マット・リストストラップなど関連する静電気対策用品も紹介します。",
    type: "article",
    images: ["/images/articles/antistatic-agent-hishicoat-coatron-hero.jpg"],
  },
};

export default function AntistaticAgentPage() {
  return (
    <ArticleLayout faq={FAQ} articleJsonLd={articleJsonLd}>
      <Breadcrumb current="ヒシコート・コートロンと静電防止剤" />
      <ArticleHeader
        category="compare"
        readingTime={13}
        title="ヒシコート・コートロンとは？"
        subtitle="静電防止剤でホコリ付着・油脂汚れを抑える使い方と選び方"
      />
      <HeroImage
        src="/images/articles/antistatic-agent-hishicoat-coatron-hero.jpg"
        alt="看板製作現場で静電防止剤を使って樹脂板を拭き上げる作業者"
      />

      <ArticleContent>
        <Lead>
          看板製作や樹脂板加工、フィルム貼りの前処理で悩まされやすいのが、静電気によるホコリ付着や手あか・油分などの汚れです。見た目には小さなホコリでも、シート貼りやプレート看板の仕上げでは気泡・ゴミ噛み・仕上がり不良の原因になります。
        </Lead>
        <LeadMuted>
          この記事では、塗布式の静電防止剤として使われるヒシコートA・コートロンの特徴、使い方、選び方、注意点を法人現場向けに整理します。あわせて、導電マット、リストストラップ、除電ブラシなど関連する静電気対策用品も紹介しますので、社内の購買判断や前処理の標準化にお役立てください。
        </LeadMuted>

        <div className="my-8 rounded-lg border-2 border-primary/40 bg-primary-light px-5 py-4 text-base leading-relaxed">
          <p className="font-bold text-foreground">★ この記事の即答</p>
          <p className="mt-2 text-foreground">
            <strong>ヒシコートA・コートロンは、静電気によるホコリ付着を抑える塗布式の静電防止剤。</strong>
            看板製作・樹脂板加工・フィルム貼り前の前処理に使われます。ヒシコートAは三菱ケミカルインフラテック、コートロンはタキロンシーアイの商品で、コートロンはPVC・PET・PP・PE・ABSなどに利用できるとされています。
            どちらも<strong>布等に染み込ませて薄く均一に塗布</strong>。<strong>火気厳禁のアルコール類で換気・保護具・SDS確認が必要</strong>、<strong>アクリル板はクラックの恐れ</strong>があるため要注意です。電子部品や作業者のESD対策では導電マットやリストストラップ等の併用も検討します。
          </p>
        </div>

        <div className="my-8 rounded-lg border-l-4 border-blue-500 bg-blue-50 px-5 py-4 text-base leading-relaxed text-foreground">
          <strong>結論：選ぶ前に押さえるポイント</strong>
          <ul className="mt-3 space-y-1 text-muted-foreground">
            <li>・ホコリ付着を抑える塗布式静電防止剤（看板・樹脂板・フィルム貼り前処理向け）</li>
            <li>・ヒシコートA＝三菱ケミカルインフラテック／コートロン＝タキロンシーアイ</li>
            <li>・コートロンはPVC・PET・PP・PE・ABSなどに利用可（公式）</li>
            <li>・布等に染み込ませて薄く均一に塗布</li>
            <li>・「油脂汚れ除去」は強力脱脂剤ではなく前処理清掃の一環として捉える</li>
            <li>・火気厳禁・換気・保護具・SDS確認が必要</li>
            <li>・アクリル板はクラックの恐れ → 必ず素材適合・試し塗り</li>
            <li>・電子部品・作業者のESD対策は導電マット・リストストラップ等と併用</li>
          </ul>
        </div>

        <div className="my-8 rounded-lg border-l-4 border-amber-500 bg-amber-50 px-5 py-4 text-sm leading-relaxed text-muted-foreground">
          本記事は一般的な情報提供であり、特定用途での適合や効果を保証するものではありません。ヒシコートA・コートロンは<strong className="text-foreground">火気厳禁の第四類アルコール類</strong>です。着火源から遠ざけ、<strong className="text-foreground">換気の良い場所で使用し、保護手袋・保護眼鏡などを着用</strong>してください。<strong className="text-foreground">アクリル板に使用するとクラック等の不具合が発生する可能性</strong>があるため、必ず目立たない箇所で試し塗りを行い、素材適合を確認します。成分・取扱い・保管は製品ごとに異なるため、<strong className="text-foreground">必ずSDS・商品ページ・メーカー情報・現場ルール・関係法令</strong>を確認してください。電子部品・防爆環境などでは専門基準・社内ルールに従ってください。
        </div>

        <ArticleSection>
          <H2>ヒシコート・コートロンを探す人は何に困っている？</H2>
          <ConclusionBox>
            多くは「ホコリ付着で仕上がりが悪い」「フィルム貼り前にきれいにしたい」「どちらを買うか迷う」という現場課題です。
          </ConclusionBox>
          <H3>看板・樹脂板の表面にホコリが付いて仕上がりが悪くなる</H3>
          <Lead>
            プラスチックは一般に電気を逃がしにくく、摩擦などで帯電すると静電気引力でホコリや汚れを吸着しやすくなるとされています。拭き取ろうとして逆にホコリが付くこともあり、シート貼りやプレート看板の仕上げでは白濁・異物混入・気泡の原因になります。
          </Lead>
          <H3>フィルム貼り・シート貼り前の油脂汚れを落としたい</H3>
          <ul className="mt-4 list-disc space-y-1 pl-5 text-lg leading-relaxed text-muted-foreground">
            <li>手あか・油分の付着</li>
            <li>保護フィルムを剥がした直後の静電気</li>
            <li>拭き取り後の再付着・貼り込み時のゴミ噛み</li>
          </ul>
          <H3>ヒシコートとコートロンのどちらを買えばよいか迷っている</H3>
          <Lead>
            「どちらが絶対に優れている」ではなく、<strong className="text-foreground">普段使う材料・メーカー指定・社内手順・まとめ買い単位</strong>で選ぶのが現実的です。詳しい比較は後半の表で整理します。
          </Lead>
        </ArticleSection>

        <ArticleSection>
          <H2>静電防止剤・帯電防止剤とは？何を防ぐためのもの？</H2>
          <ConclusionBox>
            静電気対策は「パチッと痛い」だけでなく、品質不良・仕上がり不良を防ぐ工程管理の一部です。
          </ConclusionBox>
          <ArticleFigure
            src="/images/articles/static-dust-on-plastic-board.jpg"
            alt="静電気で樹脂板にホコリが付着するイメージ"
          />
          <H3>静電気があるとホコリが寄りやすくなる</H3>
          <Lead>
            透明樹脂は絶縁性が高く、一度帯電すると電気を逃がしにくいため、空気中のホコリや微粒子を引き寄せやすくなります。特に出荷直前・展示直前の最終工程での帯電は、仕上げを台無しにしやすいポイントです。
          </Lead>
          <H3>看板製作・樹脂板加工ではなぜ前処理が重要？</H3>
          <ul className="mt-4 list-disc space-y-1 pl-5 text-lg leading-relaxed text-muted-foreground">
            <li>アルミ複合板へのシート貼り</li>
            <li>塩ビ板・PET板・PP板などの仕上げ</li>
            <li>店舗サイン・プレート看板、ディスプレイ什器</li>
            <li>工場内の透明パネル・保護カバー</li>
          </ul>
          <H3>「静電防止」と「帯電防止」はどう違う？</H3>
          <Lead>
            現場では似た意味で使われることが多いですが、<strong className="text-foreground">帯電防止</strong>は「物体に電気がたまるのを抑える対策」、<strong className="text-foreground">静電気対策</strong>は「帯電・放電・ホコリ付着・電子部品障害などを防ぐ広い対策」と整理すると分かりやすいです。
          </Lead>
        </ArticleSection>

        <ArticleSection>
          <H2>ヒシコートAとは？特徴と向いている用途</H2>
          <ConclusionBox>
            三菱ケミカルインフラテックの塗布式静電防止剤で、看板・プレート・樹脂板の仕上げ前処理に向きます。
          </ConclusionBox>
          <H3>三菱ケミカルインフラテックの塗布式静電防止剤</H3>
          <Lead>
            ヒシコートAは1L規格で、商品ページ上では成分がエタノール（80〜90%）・メタノール（10〜20%）・2-プロパノール（1〜5%）、第四類アルコール類・火気厳禁、布等に染み込ませて使用、と記載されています。
          </Lead>
          <H3>看板・プレート・樹脂板の仕上げ前処理に向く</H3>
          <Lead>
            アルミ複合板や樹脂板へのシート貼り、表示板・プレート看板の仕上げ前に、静電気によるホコリ付着を抑えたい現場で検討しやすい商品です（アクリル板は要注意）。
          </Lead>
          <H3>1L単品と10本入の使い分け</H3>
          <ul className="mt-4 list-disc space-y-1 pl-5 text-lg leading-relaxed text-muted-foreground">
            <li>まず試したい：1L単品</li>
            <li>日常的に使う看板製作・加工現場：10本入</li>
            <li>複数作業台・複数拠点で使う：ケース導入</li>
          </ul>
        </ArticleSection>

        <ArticleSection>
          <H2>コートロンとは？特徴と向いている用途</H2>
          <ConclusionBox>
            タキロンシーアイの無色透明帯電防止剤。樹脂板加工・仕上げ前処理と相性が良く、公式情報の数値も明確です。
          </ConclusionBox>
          <H3>タキロンシーアイの無色透明帯電防止剤</H3>
          <Lead>
            コートロンは公式サイトで「無色透明帯電防止剤」として掲載され、RoHS対応・REACH対応、1Lポリ容器（6本/箱）と案内されています。
          </Lead>
          <H3>PVC・PET・PP・PE・ABSなどに使いやすい</H3>
          <Lead>
            公式サイトでは、PVC・PET・PP・PE・ABSなどに利用できる旨が記載されています。塗布量の目安は1㎡あたり5mL（約3g）で、1本（1L）あたり約20㎡が目安とされています。
          </Lead>
          <H3>1L単品と6本入の使い分け</H3>
          <ul className="mt-4 list-disc space-y-1 pl-5 text-lg leading-relaxed text-muted-foreground">
            <li>まず試したい：1L単品</li>
            <li>樹脂板加工・ディスプレイ製作で継続使用：6本入</li>
            <li>タキロン系プレートと合わせて管理したい場合に</li>
          </ul>
          <H3>効果持続は使用条件・環境に左右される</H3>
          <Lead>
            公式Q&Aでは、塩化ビニルタキロンプレートに塗布した場合の帯電防止機能持続時間は2〜3週間程度とされています。ただし使用条件・環境によって異なるため、定期的な再処理を前提に運用すると安心です。
          </Lead>
        </ArticleSection>

        <ArticleSection>
          <H2>ヒシコートAとコートロンの違いは？</H2>
          <ConclusionBox>
            「どちらが上位互換」ではなく、現場の材料・メーカー・まとめ買い単位で選ぶための比較表です。
          </ConclusionBox>
          <ArticleFigure
            src="/images/articles/hishicoat-coatron-comparison-workbench.jpg"
            alt="静電防止剤の単品とまとめ買いを比較する作業台"
          />
          <ArticleTable
            head={["比較項目", "ヒシコートA", "コートロン"]}
            rows={[
              ["メーカー", "三菱ケミカルインフラテック", "タキロンシーアイ"],
              [
                "分類",
                "塗布式静電防止剤",
                "無色透明帯電防止剤（RoHS/REACH対応）",
              ],
              ["容量", "1L", "1L（1000mL）"],
              ["まとめ買い", "10本入あり", "6本入あり"],
              [
                "使い方",
                "布等に染み込ませて使用",
                "布等に染み込ませて使用（目安1㎡=5mL）",
              ],
              [
                "向く現場",
                "看板製作・樹脂板・プレート加工・フィルム貼り前処理",
                "PVC・PET・PP・PE・ABSなどの樹脂板加工・仕上げ前処理",
              ],
              [
                "注意点",
                "火気厳禁・アクリル板使用注意",
                "火気厳禁・アクリル板使用注意",
              ],
              [
                "向く購買担当",
                "看板製作現場の定番として導入したい",
                "タキロン系樹脂板と合わせて管理したい",
              ],
            ]}
          />
        </ArticleSection>

        <ArticleSection>
          <H2>静電防止剤の基本的な使い方</H2>
          <ConclusionBox>
            「素材確認 → 大きな汚れ除去 → 布に染み込ませる → 薄く均一に塗布 → 火気・換気・保護具」が基本の流れです。
          </ConclusionBox>
          <ArticleFigure
            src="/images/articles/antistatic-preparation-before-film-application.jpg"
            alt="フィルム貼り前に静電防止剤で表面を整える作業"
          />
          <H3>1. 使用する素材に適合するか確認する</H3>
          <Lead>
            最初に小さな目立たない部分で試します。特にアクリル板は、ヒシコートA・コートロンの商品ページのどちらにもクラック等の不具合の可能性が記載されているため要注意です。
          </Lead>
          <H3>2. 表面の大きな汚れ・ホコリを先に除去する</H3>
          <Lead>
            いきなり塗らず、まず表面のゴミ・粉じんを除電ブラシなどで除きます。
          </Lead>
          <H3>3. きれいな布・ネル・ガーゼなどに染み込ませる</H3>
          <Lead>
            ヒシコートA・コートロンともに、布等に染み込ませて使用する旨が記載されています。汚れた布は再付着の原因になるため、清潔な布を使います。
          </Lead>
          <H3>4. 拭きムラが出ないよう薄く均一に塗布する</H3>
          <Lead>
            コートロンの公式Q&Aでは塗布量の目安として1㎡あたり5mLが示されています。ヒシコートAについては商品ページ・メーカー資料・現場ルールを確認してください。
          </Lead>
          <H3>5. 火気・換気・保護具に注意する</H3>
          <Lead>
            火気厳禁のアルコール類のため、着火源から遠ざけ、換気の良い場所で使用し、保護手袋・保護眼鏡などを着用します。引火性・眼刺激などの危険有害性があるため、SDSの記載に従ってください。
          </Lead>
          <H3>6. SDS・商品ページ・現場ルールを確認する</H3>
          <Lead>
            成分・取扱い・保管・廃棄は製品ごとに異なります。導入前にSDSを取得し、社内の安全ルールに沿って運用してください。
          </Lead>
        </ArticleSection>

        <ArticleSection>
          <H2>用途別｜どの商品を選ぶべき？</H2>
          <ConclusionBox>目的から逆引きできる早見表です。</ConclusionBox>
          <ArticleTable
            head={["目的・現場", "おすすめ"]}
            rows={[
              ["看板製作でまず試したい", "ヒシコートA 1L"],
              ["看板製作で継続使用する", "ヒシコートA 10本入"],
              ["PVC/PET/PP/PE/ABS等の樹脂板", "コートロン 1L"],
              ["樹脂板加工で継続使用する", "コートロン 6本入"],
              [
                "作業者・作業台・電子部品の対策",
                "静電気対策用品（導電マット・リストストラップ等）",
              ],
            ]}
          />
        </ArticleSection>

        <ArticleSection>
          <H2>おすすめ商品紹介</H2>
          <ConclusionBox>
            押し売りではなく用途別の解決策として紹介します。価格・在庫・仕様は変動するため、最新情報は商品ページでご確認ください。
          </ConclusionBox>
          <GroupLabel>メイン：ヒシコート・コートロン</GroupLabel>
          <ProductGrid items={mainAgents} cols={2} slug={SLUG} />
          <div className="mt-6">
            <a
              href={buildUrl(LIST.antistaticAgent, "cta_antistatic_agent")}
              target="_blank"
              rel="noopener noreferrer"
              className={LIST_CTA_CLASS}
            >
              静電防止剤一覧へ
              <ExternalLink className="h-4 w-4" aria-hidden />
            </a>
          </div>

          <ArticleFigure
            src="/images/articles/static-control-supplies-overview.jpg"
            alt="導電マットやリストストラップなど静電気対策用品を並べたイメージ"
          />
          <GroupLabel>関連：静電気対策用品をジャンル別に</GroupLabel>
          <Lead>
            塗布剤だけで完結する場合もありますが、電子部品・作業者・作業台・床・保管・クリーンルームまで含めたESD対策では、次の用品の併用が検討されます。
          </Lead>

          <p className="mt-6 text-base font-bold text-foreground">
            ① 入口・設備・区画の対策
          </p>
          <ProductGrid items={groupBarrier} cols={2} slug={SLUG} />

          <p className="mt-6 text-base font-bold text-foreground">
            ② 床・作業台・椅子まわりの対策
          </p>
          <ProductGrid items={groupFloor} cols={2} slug={SLUG} />

          <p className="mt-6 text-base font-bold text-foreground">
            ③ 作業者の対策
          </p>
          <ProductGrid items={groupWorker} cols={2} slug={SLUG} />

          <p className="mt-6 text-base font-bold text-foreground">
            ④ 仕上げ・清掃・除電
          </p>
          <ProductGrid items={groupClean} cols={2} slug={SLUG} />

          <p className="mt-6 text-base font-bold text-foreground">
            ⑤ 梱包・保管・クリーンルーム関連
          </p>
          <ProductGrid items={groupPack} cols={2} slug={SLUG} />

          <div className="mt-6">
            <a
              href={buildUrl(LIST.staticControl, "cta_static_control")}
              target="_blank"
              rel="noopener noreferrer"
              className={LIST_CTA_CLASS}
            >
              静電気対策用品一覧へ
              <ExternalLink className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </ArticleSection>

        <ArticleSection>
          <H2>購入前チェックリスト</H2>
          <ConclusionBox>
            社内稟議・現場ヒアリングにそのまま使えます。
          </ConclusionBox>
          <ArticleFigure
            src="/images/articles/antistatic-agent-purchasing-checklist.jpg"
            alt="静電防止剤と静電気対策用品の購入チェックリストを確認する購買担当者"
          />
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
          <Lead>
            ヒシコートA・コートロンは、看板製作・樹脂板加工・フィルム貼り前の「静電気によるホコリ付着」を抑える塗布式静電防止剤です。選ぶ際は普段使う材料・メーカー・まとめ買い単位で判断し、火気厳禁・換気・保護具・SDS確認、アクリル板への注意を守ってください。効果は一時的なため再処理を前提にし、電子部品や作業者まで含めたESD対策では導電マット・リストストラップ・除電ブラシ・帯電防止バッグなどの併用も検討しましょう。価格・在庫・仕様は変動するため、最新情報は商品ページでご確認ください。
          </Lead>
        </ArticleSection>

        <section className="mt-12 rounded-2xl bg-secondary p-8 text-secondary-foreground md:p-10">
          <h2 className="text-2xl font-black text-white">用途から探す</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={buildUrl(LIST.antistaticAgent, "cta_antistatic_agent_footer")}
              target="_blank"
              rel="noopener noreferrer"
              className={LIST_CTA_CLASS}
            >
              静電防止剤一覧
              <ExternalLink className="h-4 w-4" aria-hidden />
            </a>
            <a
              href={buildUrl(LIST.staticControl, "cta_static_control_footer")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
            >
              静電気対策用品一覧
            </a>
          </div>
        </section>

        <RelatedArticles items={RELATED} />

        <Disclaimer extra="火気・換気・保護具・SDS確認、アクリル板への素材適合は必ず各製品の商品ページ・メーカー情報・現場ルールでご確認ください。電子部品・防爆環境では専門基準・社内ルールに従ってください。" />
      </ArticleContent>
    </ArticleLayout>
  );
}
