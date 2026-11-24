import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { BellRing, BrainCircuit, Cctv, ClipboardCheck, ShoppingCart, ThermometerSun } from "lucide-react";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { DxCtaCard, DxCtaPair, type DxCta } from "@/components/article/dx-cta";
import { safetyGuideUrl } from "@/lib/safety-guides";
import "@/app/articles/safety-supplies-rental-guide/rental-guide.css";
import "./netis-dx.css";

const SLUG = "netis-safety-dx-rental";
const SITE = "https://www.sagyou-navi.com";
const PAGE_URL = `${SITE}/articles/${SLUG}`;
const DATE = "2026-11-24";
const TITLE = "重機接触防止・AI危険予知のNETIS登録機材まとめ｜高額な安全DXをレンタルで導入する方法";
const SHORT_TITLE = "安全DX機材のNETIS登録とレンタル導入";
const DESCRIPTION = "重機接触防止センサー、AI危険予知（KY支援）、遠隔監視カメラなどの安全DX機材を工事期間中だけレンタル導入する方法を解説。令和6年改定後の最新NETIS加点ルールや熱中症対策のワンストップ手配まで網羅します。";
const IMG = `/images/articles/${SLUG}/`;
const HERO = `${IMG}hero-netis-safety-dx.webp`;

export const metadata: Metadata = {
  title: { absolute: `${TITLE}｜作業用品ナビ` },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: TITLE, description: DESCRIPTION, url: PAGE_URL, type: "article", locale: "ja_JP", siteName: "作業用品ナビ",
    publishedTime: `${DATE}T09:00:00+09:00`, modifiedTime: `${DATE}T09:00:00+09:00`,
    images: [{ url: `${SITE}${HERO}`, width: 1024, height: 571, alt: "重機の周囲に検知範囲を表示したタブレットを確認する現場監督" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [`${SITE}${HERO}`] },
};

const gc = (path: string, placement: string) => safetyGuideUrl(`https://gc-anzen.com${path}`, SLUG, placement);

const CTA = {
  netis: { id: "gc-netis", badge: "NETIS登録商品", icon: <ClipboardCheck />, title: "登録番号から、今回の工事に使える機材を探す", body: "グリーンクロスのNETIS登録商品一覧では、センサー・監視カメラ・保安機材を登録番号つきで確認できます。販売・レンタルの組み合わせもそのまま相談できます。", label: "NETIS登録商品一覧を見る", href: gc("/netis", "cta_netis") },
  sensor: { id: "gc-sensor", badge: "重機接触防止", icon: <BellRing />, title: "重機・出入口のセンサーを、工期分だけ借りる", body: "重機に取り付けるハッとセンサーと、コーンに被せる入退場センサー「おくだけガードマン」。検知したい場面と重機の台数から構成を相談できます。", label: "センサーのレンタルを相談する", href: gc("/products/laser-sensor", "cta_sensor") },
  camera: { id: "gc-camera", badge: "遠隔監視カメラ", icon: <Cctv />, title: "電源のない現場にも、監視カメラを置く", body: "コンセント電源で使うクラウド型と、ソーラー一体型。電源・通信の条件と見たい範囲から、機種と貸出構成を提案してもらえます。", label: "監視カメラのレンタルを見る", href: gc("/products/surveillance-camera", "cta_camera") },
  ai: { id: "gc-ddsafe", badge: "AI危険予知", icon: <BrainCircuit />, title: "D.D safe Aiを、1現場から試してみる", body: "写真と音声でKY・パトロールを記録し、報告書をPDF・Excelで出力。デモと1現場からのトライアルを、安全用品と同じ窓口で相談できます。", label: "デモ・トライアルを相談する", href: gc("/dd-safe-ai", "cta_ddsafe") },
} satisfies Record<string, DxCta>;

const BOTTOM_CTAS: [DxCta, DxCta] = [
  { id: "gc-heatstroke", badge: "熱中症対策ワンストップ相談", icon: <ThermometerSun />, title: "現場の暑さ対策を、安全DX機材とまとめて相談", body: "ミストファン、スポットクーラー、休憩所テント、WBGT計、見守り機器まで。販売とレンタルを組み合わせ、現場の人数と作業内容から一式で提案してもらえます。", points: ["品目・数量が未定でも相談できる", "大型機材はレンタル、配る用品は購入と使い分け", "全国の拠点から納品・回収を相談"], label: "熱中症対策の相談窓口へ", href: gc("/heatstroke", "cta_heatstroke") },
  { id: "gc-select-heat", badge: "ECショップ", icon: <ShoppingCart />, title: "決まった用品は、GCセレクトですぐ購入", body: "空調服、冷却グッズ、飲料・補給品など、仕様と数量が決まっている熱中症対策用品は、ECの商品ページで価格と在庫を確認して購入できます。", points: ["型式・サイズを決めて注文できる", "現場ごとの補充・追加購入に", "価格・送料・納期は商品ページで確認"], label: "GCセレクトの熱中症対策を見る", href: safetyGuideUrl("https://www.gc-select.com/collections/%E5%AE%89%E5%85%A8%E6%A9%9F%E6%9D%90%E7%94%A8%E5%93%81-%E7%86%B1%E4%B8%AD%E7%97%87%E5%AF%BE%E7%AD%96", SLUG, "cta_gc_select_heat") },
];

const FAQ = [
  { q: "重機接触防止センサーや監視カメラは、1ヶ月などの短期工事でもレンタルできますか？", a: "はい、多くの機材が工期に合わせた短期〜中長期のレンタルに対応しています。まずは1現場・数ヶ月だけ試用して、作業員やオペレーターの反応を確認してから他現場へ展開する導入方法が一般的です。" },
  { q: "NETIS登録機材をレンタルした場合でも、工事成績評定の加点対象になりますか？", a: "はい、購入かレンタルかを問わず、NETIS登録技術を受注者提案として適切に活用し、発注者の承諾と必要書類（活用効果調査表など）の提出を行えば加点対象となります。令和6年4月以降の最新基準では主任技術評価官で最大2点（実加点最大0.8点）となっています。" },
  { q: "現場に電源がないのですが、レーザーセンサーや監視カメラは設置できますか？", a: "設置可能です。ソーラーパネル搭載の監視カメラや、乾電池・充電バッテリーで稼働し三角コーンに被せるだけで使えるレーザーセンサーなど、電源工事不要のモデルをレンタルで手配できます。" },
  { q: "AI危険予知アプリ「D.D safe Ai」は、ITに不慣れな現場担当者でも使いこなせますか？", a: "スマートフォンやタブレットで現場の写真を撮影し、音声や簡単な操作で記録する設計になっているため、複雑なPC操作は不要です。報告書PDFやExcel形式での出力にも対応しており、事務作業の負担を軽減できます。" },
  { q: "安全DX機材とあわせて、熱中症対策用品や工事看板もまとめて見積りできますか？", a: "はい、可能です。NETIS登録の保安用品・安全DX機材から、現場・工場の熱中症対策設備までワンストップで対応しているため、窓口を一本化して手配・管理できます。" },
];

const SECTIONS = [
  ["equipment", "安全DX機材の種類とNETIS登録"],
  ["netis-points", "令和6年改定後のNETIS加点ルール"],
  ["sensor", "重機接触防止・入退場センサー"],
  ["camera", "電源のない現場の遠隔監視カメラ"],
  ["ai-ky", "AI危険予知（KY支援）アプリ"],
  ["rental", "レンタルで導入する進め方"],
  ["heatstroke", "熱中症対策もワンストップで"],
  ["faq", "よくある質問"],
] as const;

const SOURCES = [
  { title: "国土交通省 NETIS（新技術情報提供システム）", url: "https://www.netis.mlit.go.jp/" },
  { title: "国土交通省 考査項目別運用表（主任技術評価官）令和6年4月以降公告の工事に適用", url: "https://www.mlit.go.jp/tec/content/001733406.pdf" },
  { title: "近畿地方整備局 NETISについて（工事成績評定への加点：実加点最大0.8点）", url: "https://www.kkr.mlit.go.jp/kingi/tech/netis/glo6r90000000gb2-att/241003_about_NETIS.pdf" },
  { title: "グリーンクロス：NETIS登録商品一覧", url: "https://gc-anzen.com/netis" },
  { title: "グリーンクロス：レーザーセンサー・重機接触防止装置のレンタル", url: "https://gc-anzen.com/products/laser-sensor" },
  { title: "グリーンクロス：現場監視カメラのレンタル", url: "https://gc-anzen.com/products/surveillance-camera" },
  { title: "グリーンクロス：危険発見アプリ D.D safe Ai", url: "https://gc-anzen.com/dd-safe-ai" },
  { title: "グリーンクロス：熱中症対策用品の販売・レンタル", url: "https://gc-anzen.com/heatstroke" },
];

function DxFigure({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure className="dx-figure">
      <div><Image src={src} alt={alt} fill sizes="(max-width: 767px) 100vw, (max-width: 1200px) 90vw, 1152px" /></div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

function DxTable({ caption, headers, rows }: { caption: string; headers: string[]; rows: ReactNode[][] }) {
  return (
    <>
      <div className="rental-table-scroll overflow-x-auto" role="region" aria-label={`${caption}（横にスクロールできます）`} tabIndex={0}>
        <table>
          <caption>{caption}</caption>
          <thead><tr>{headers.map((h) => <th scope="col" key={h}>{h}</th>)}</tr></thead>
          <tbody>{rows.map((row, i) => <tr key={i}>{row.map((cell, j) => j === 0 ? <th scope="row" key={j}>{cell}</th> : <td key={j}>{cell}</td>)}</tr>)}</tbody>
        </table>
      </div>
      <p className="dx-table-hint">表は左右にスクロールできます →</p>
    </>
  );
}

function Section({ id, number, title, children }: { id: string; number: string; title: string; children: ReactNode }) {
  return <section id={id} className="rental-section"><p className="rental-eyebrow">{number}</p><h2>{title}</h2>{children}</section>;
}

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: TITLE,
        description: DESCRIPTION,
        image: [`${SITE}${HERO}`],
        datePublished: `${DATE}T09:00:00+09:00`,
        dateModified: `${DATE}T09:00:00+09:00`,
        author: { "@type": "Organization", name: "作業用品ナビ編集部", url: `${SITE}/` },
        publisher: { "@type": "Organization", name: "作業用品ナビ", url: `${SITE}/` },
        mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "ホーム", item: SITE },
          { "@type": "ListItem", position: 2, name: "記事一覧", item: `${SITE}/articles` },
          { "@type": "ListItem", position: 3, name: SHORT_TITLE, item: PAGE_URL },
        ],
      },
    ],
  };

  return <>
    <SiteHeader />
    <main className="rental-guide netis-dx">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <nav className="rental-breadcrumb" aria-label="パンくず"><Link href="/">ホーム</Link><span>/</span><Link href="/articles">記事一覧</Link><span>/</span><span>{SHORT_TITLE}</span></nav>
      <article>
        <header className="rental-hero">
          <div className="rental-hero-copy">
            <p className="rental-eyebrow">安全DX・NETIS活用ガイド</p>
            <h1>重機接触防止・AI危険予知のNETIS登録機材まとめ<span>高額な安全DXを、レンタルで導入する方法</span></h1>
            <p className="rental-hero-lead">センサー、遠隔監視カメラ、AIによる危険予知。必要な工期だけ借りて試し、令和6年改定後の加点ルールに沿って活用するための判断材料をまとめました。</p>
            <a href="#equipment" className="rental-button rental-button-dark">機材の一覧から確認する <span aria-hidden="true">↓</span></a>
            <p className="rental-meta"><time dateTime={DATE}>2026年11月24日</time> 公開・情報確認 / 約12分で読めます<br /><Link href="/about">作業用品ナビ編集部・運営者情報</Link></p>
          </div>
          <figure className="rental-hero-photo">
            <Image src={HERO} alt="重機の周囲に検知範囲を表示したタブレットを確認する現場監督と、ソーラー式の監視カメラ" fill preload sizes="(max-width: 767px) 100vw, 580px" />
            <figcaption>重機周辺の検知範囲と監視カメラの映像をタブレットで確認するイメージ</figcaption>
          </figure>
        </header>

        <p className="rental-disclosure">運営：株式会社トレード（グリーンクロスグループ）。本記事は運営・関連会社のサービスと商品を紹介しています。対応範囲・在庫・納期・費用は各窓口で確認してください。</p>

        <div className="rental-intro">
          <p>重機との接触事故を防ぐセンサー、無人の時間帯も見守れる監視カメラ、写真から危険を洗い出すAIアプリ。こうした安全DX機材は、1台・1ライセンスあたりの費用が大きく、「効果があるか分からないまま購入するのは難しい」という声が多く聞かれます。</p>
          <p>公共工事では、NETIS（新技術情報提供システム）に登録された技術を受注者から提案して活用すると、工事成績評定で加点される仕組みもあります。この記事では、代表的な機材と登録番号、令和6年4月以降の加点ルール、工期中だけ借りて導入する進め方を順に整理します。</p>
        </div>

        <div className="rental-answer">
          <p className="rental-eyebrow">先に押さえたい4つのこと</p>
          <ol>
            <li><strong>機材は「検知する」「見守る」「気づく」の3種類。</strong>重機接触防止センサー、遠隔監視カメラ、AI危険予知アプリで役割が違う。</li>
            <li><strong>加点は受注者提案が条件。</strong>令和6年4月以降に公告の工事は、主任技術評価官で最大2点、工事成績への実加点は最大0.8点。</li>
            <li><strong>購入でもレンタルでも、加点の条件は同じ。</strong>登録番号と対象型式を照合し、活用計画書などの書類をそろえる。</li>
            <li><strong>まず1現場で試す。</strong>工期分だけ借りて、警報の出方や記録の手間を確認してから展開を判断する。</li>
          </ol>
        </div>

        <nav className="rental-toc" aria-label="この記事の目次"><p>この記事で分かること</p><ol>{SECTIONS.map(([id, title], i) => <li key={id}><a href={`#${id}`}><span>{String(i + 1).padStart(2, "0")}</span>{title}<span aria-hidden="true">↓</span></a></li>)}</ol></nav>

        <Section id="equipment" number="01 / 機材の種類" title="安全DX機材は、検知する・見守る・気づくの3種類">
          <p>安全DX機材と一口にいっても、役割は大きく3つに分かれます。<strong>重機や出入口で人を「検知する」センサー</strong>、<strong>離れた場所から現場を「見守る」監視カメラ</strong>、<strong>写真から危険に「気づく」ためのAIアプリ</strong>です。導入の目的が違うため、まずどの場面の対策を強化したいのかを決めます。</p>
          <p>次の表は、グリーンクロスが販売・レンタルしている代表的な機材です。NETISの登録番号は、末尾の記号まで含めて発注者へ提出する書類に記載します。</p>
          <DxTable caption="代表的な安全DX機材とNETIS登録" headers={["機材の種類", "代表機種と特徴", "NETIS登録番号", "電源", "向いている場面"]} rows={[
            ["重機接触防止装置", "ハッとセンサー：超音波で人や障害物を検知（最長5m、標準3m）", "KK-210002-VE", "重機から給電。ワイヤレス仕様・バッテリー駆動も相談可", "バックホウの後退・旋回、フォークリフト周り"],
            ["入退場レーザーセンサー", "おくだけガードマン：三角コーンに被せて置き、人や車両を検知（最長9m）", "KK-210001-VE", "充電池（単三／単一）またはソーラーパネル", "工事車両の出入口、資機材の通路"],
            ["クラウド型監視カメラ", "Safie GO 180／Safie GO PTZ：LTE通信とクラウド録画込み", "KT-180113-VE", "コンセント電源が必要", "常設の広域監視、防犯、事務所からの確認"],
            ["ソーラー監視カメラ", "さくっとSP24（GK-SP241）：ソーラー一体型、約10日分を録画", "—（NETIS登録の表記なし）", "ソーラーバッテリー一体で電源工事不要", "仮設電源の引込前、無人の資材置き場"],
            ["AI危険予知アプリ", "D.D safe Ai：写真と音声から危険の候補を示し、報告書を作成", "登録状況は契約前に確認", "スマートフォン・タブレット・PC", "朝礼のKY、安全パトロール、報告書作成"],
          ]} />
          <p className="rental-note">機種・登録番号はグリーンクロスの掲載情報（2026年11月24日確認）。同じシリーズ名でも、型式によってNETISの対象かどうかが変わります。採用前に<a href="https://www.netis.mlit.go.jp/" target="_blank" rel="noopener noreferrer">NETIS公式</a>で現行の掲載状況と対象型式を確認してください。</p>
        </Section>

        <Section id="netis-points" number="02 / 加点ルール" title="令和6年改定後のNETIS加点は、最大2点・実加点0.8点">
          <p>国土交通省の直轄工事では、令和6年4月1日以降に入札公告を行う工事から、工事成績評定の「新技術活用」の加点が改定されました。改定前は主任技術評価官で最大3点でしたが、<strong>現在は最大2点</strong>です。主任技術評価官の評定は40％が工事成績に反映されるため、<strong>実際の加点は最大0.8点</strong>になります。</p>
          <div className="dx-points">
            <div><strong>最大2点</strong><span>主任技術評価官による「新技術活用」の加点上限</span></div>
            <div><strong>40％</strong><span>主任技術評価官の評定が工事成績に反映される割合</span></div>
            <div><strong>最大0.8点</strong><span>工事成績評定点への実際の加点（2点×40％）</span></div>
          </div>
          <DxTable caption="新技術活用の配点（令和6年4月以降に公告の工事）" headers={["活用した技術", "効果が相当程度", "効果が一定程度"]} rows={[
            ["事後評価前の技術（末尾 -A）、または「有用とされる技術」", "2点", "1点"],
            ["事後評価済みの技術（末尾 -VR／-VE、「有用とされる技術」を除く）", "1点", "加点なし"],
          ]} />
          <p>「有用とされる技術」は、推奨技術・準推奨技術・活用促進技術・評価促進技術を指します。複数の技術を活用した場合は点数を合算できますが、上限は2点です。前の表の機材は登録番号の末尾が -VE のため、有用とされる技術に指定されていなければ、<strong>効果が相当程度と認められた場合に1技術あたり1点</strong>が目安です。センサーと監視カメラのように複数を組み合わせると、上限の2点に届く場合があります。</p>
          <h3>加点を受けるための条件</h3>
          <ul className="rental-list">
            <li><strong>受注者からの提案であること。</strong>発注者が指定して活用した技術（発注者指定型）は加点の対象外です。</li>
            <li><strong>書類をそろえること。</strong>原則として新技術活用計画書と活用効果調査表を提出します。末尾が -VE の技術は、活用効果調査表の提出が不要とされています。</li>
            <li><strong>購入かレンタルかは問われない。</strong>評価されるのは技術の活用と効果で、機材の調達方法ではありません。</li>
          </ul>
          <p>地方自治体の工事では、独自の評定要領で運用されている場合があります。対象工事の公告・特記仕様書と、発注者の評定要領を必ず確認してください。</p>
          <DxCtaCard cta={CTA.netis} article={SLUG} />
        </Section>

        <Section id="sensor" number="03 / 検知する" title="重機接触防止センサーと入退場センサーの選び方">
          <DxFigure src={`${IMG}heavy-machinery-sensor.webp`} alt="バックホウの周囲に二重の検知範囲を示し、出入口のコーンにセンサーを置いた工事現場の図" caption="重機周辺の検知範囲と、出入口に置く入退場センサーの配置イメージ。特定製品の検知形状や安全距離を示す図ではありません。" />
          <p>重機と作業員の接触を防ぎたいのか、出入口を通る人や車両を知らせたいのかで、選ぶ機材が分かれます。<strong>重機に取り付けるのが重機接触防止装置</strong>、<strong>地面に置いて通過を検知するのが入退場センサー</strong>です。</p>
          <h3>重機接触防止装置「ハッとセンサー」</h3>
          <p>重機の後方や側方に取り付け、超音波で人や障害物を検知して運転席のブザーと外部スピーカーで知らせます。検知エリアは1m単位で設定でき、油圧ショベルなどに向くスタンダード、フォークリフトなど小型重機向けのオールインワン、クレーンなど大型重機向けのワイヤレスの3タイプがあります。</p>
          <h3>入退場レーザーセンサー「おくだけガードマン」</h3>
          <p>三角コーンに被せて置くだけで設置でき、最長9mの範囲で人や車両の出入りを検知して音と光で警報します。反射板が不要で、充電池式とソーラーパネル式があるため、電源工事のできない出入口でも使えます。リモコンで離れた場所から警報のオン・オフも可能です。</p>
          <div className="rental-note-box">
            <h3>センサーを付けても、立入禁止の措置は必要</h3>
            <p>労働安全衛生規則第158条は、車両系建設機械と接触するおそれのある箇所への立入りを禁止する措置を定めています（誘導者を配置して誘導させる場合を除く）。センサーは作業計画・立入管理・誘導を補う機材として使い、警報が鳴ったときに誰が停止・確認するかまで決めておきましょう。</p>
          </div>
          <DxCtaCard cta={CTA.sensor} article={SLUG} />
        </Section>

        <Section id="camera" number="04 / 見守る" title="電源のない現場でも使える遠隔監視カメラ">
          <DxFigure src={`${IMG}ai-ky-remote-camera.webp`} alt="足場にソーラー式の監視カメラを取り付け、タブレットで現場の危険箇所を確認する現場監督" caption="足場に取り付けた監視カメラの映像と、AIが示した危険箇所をタブレットで確認するイメージ。" />
          <p>監視カメラは、<strong>電源が取れるかどうか</strong>で候補が変わります。仮設電源の引込前や無人の資材置き場では、ソーラーバッテリー一体型が向きます。常設で電源が確保できる場所なら、LTE通信とクラウド録画を備えたタイプが扱いやすくなります。</p>
          <ul className="rental-list">
            <li><strong>ソーラー一体型（さくっとSP24）：</strong>電源工事が不要で、24時間録画に対応。録画はSDカードに約10日分、スマートフォンやタブレットでライブ映像を確認できます。</li>
            <li><strong>クラウド型（Safie GO 180／PTZ）：</strong>ネット環境がなくても電源をさすだけで設置でき、通信料とクラウド録画費を含む定額サービス。NETIS登録技術（KT-180113-VE）です。</li>
          </ul>
          <p>レンタルの際は、見たい範囲、録画を残す期間、映像を閲覧する人の権限を先に決めておくと、機種と台数を絞りやすくなります。グリーンクロスの監視カメラのレンタルは、最低保証期間が原則7日間と案内されています。</p>
          <DxCtaCard cta={CTA.camera} article={SLUG} />
        </Section>

        <Section id="ai-ky" number="05 / 気づく" title="AI危険予知（KY支援）アプリで記録と報告書を効率化">
          <p>AI危険予知アプリは、現場の写真や作業内容から起こりうる危険の候補を示し、KY活動や安全パトロールの記録を支援するツールです。グリーンクロスが販売代理店として提供する<strong>「D.D safe Ai」</strong>は、SOLIZE Ureka Technologyの「SpectA KY-Tool」を基盤にしたアプリで、2026年5月に提供が始まりました。</p>
          <ul className="rental-list">
            <li><strong>写真から危険を洗い出す：</strong>激突され、飛来落下、転倒、はさまれなど、災害の型ごとに危険と対策の候補を示します。</li>
            <li><strong>写真と音声で記録する：</strong>現場で撮った写真と音声をその場で記録でき、音声は文字起こしされます。</li>
            <li><strong>報告書を作成する：</strong>記録からパトロール報告書を作成し、PDF・Excelで出力できます。</li>
          </ul>
          <p>D.D safe Aiは、2026年11月24日時点でNETIS登録の情報を確認できませんでした。工事成績の加点を目的にするのではなく、<strong>KY活動のばらつきを抑え、記録と報告書づくりの負担を減らす目的</strong>で検討するのが現実的です。AIの提示は判断材料のひとつで、最終的な安全指示は現場の責任者が行います。</p>
          <DxCtaCard cta={CTA.ai} article={SLUG} />
        </Section>

        <Section id="rental" number="06 / 導入の進め方" title="高額な安全DX機材を、レンタルで導入する進め方">
          <p>センサーや監視カメラは、現場ごとに必要な台数や設置場所が変わります。最初から購入するより、<strong>1現場の工期分だけ借りて効果を確かめる</strong>ほうが、費用と判断のリスクを抑えられます。</p>
          <DxTable caption="安全DX機材のレンタルと購入の比較" headers={["比較項目", "レンタル", "購入"]} rows={[
            ["初期費用", "工期分の料金で始められる", "本体代がまとまってかかる"],
            ["工期との相性", "数週間〜1年程度の工事に合わせやすい", "複数現場で長く使い続ける場合に向く"],
            ["保管・点検", "返却後の保管や点検は貸出元が行う", "保管場所、点検、バッテリー管理が自社負担"],
            ["機種の入れ替え", "現場の条件に合わせて機種を選び直せる", "新しい機種への切り替えに追加費用がかかる"],
            ["NETIS加点", "条件を満たせば対象（調達方法は問われない）", "条件を満たせば対象"],
          ]} />
          <ol className="rental-steps">
            <li><strong>強化したい場面を決める</strong><span>重機の後退、出入口の通過、夜間の資材置き場、朝礼のKYなど、課題になっている場面を1つに絞ります。</span></li>
            <li><strong>現場の条件を伝えて見積もる</strong><span>所在地、工期、重機の種類と台数、電源・通信の有無、NETIS活用の予定を伝えます。</span></li>
            <li><strong>1現場で試す</strong><span>警報の頻度、オペレーターの反応、記録にかかる時間を、導入前と比べて確認します。</span></li>
            <li><strong>結果をもとに展開を判断する</strong><span>効果があった機材を他の現場へ広げるか、長期で使うなら購入も含めて比較します。</span></li>
          </ol>
        </Section>

        <Section id="heatstroke" number="07 / 暑さ対策" title="熱中症対策も、安全DX機材とワンストップで手配">
          <DxFigure src={`${IMG}heatstroke-onestop.webp`} alt="テントの休憩所でWBGT計、スポットクーラー、ミストファンを使いながら作業員が水分補給をしている様子" caption="WBGT計、スポットクーラー、ミストファン、給水設備をそろえた休憩所のイメージ。" />
          <p>2025年6月1日から、労働安全衛生規則第612条の2により、暑熱環境での作業について、異変を報告する体制と対応手順の整備・周知が事業者に義務付けられています。WBGT計で暑さを把握し、休憩所の冷房や送風、身体を冷やす用品、飲料をそろえる準備が必要です。</p>
          <p>センサーはA社、監視カメラはB社、熱中症対策はC社と発注先が分かれると、納品日の調整や請求処理、問い合わせ先の管理が増えます。グリーンクロスでは、安全DX機材と熱中症対策用品を同じ窓口で相談できます。大型機材はレンタル、作業員に配る用品はECで購入と、品目ごとに使い分けられます。</p>
          <DxCtaPair items={BOTTOM_CTAS} article={SLUG} />
        </Section>

        <section className="rental-section rental-faq" id="faq"><p className="rental-eyebrow">08 / よくある質問</p><h2>安全DX機材のレンタルとNETIS加点の疑問</h2>{FAQ.map((item) => <details key={item.q}><summary>{item.q}<span aria-hidden="true">＋</span></summary><p>{item.a}</p></details>)}</section>

        <nav className="rental-related" aria-label="関連記事"><h2>あわせて確認したい記事</h2>
          <Link href="/articles/safety-supplies-rental-guide">安全用品レンタルの料金・購入比較と見積もりの準備 <span aria-hidden="true">→</span></Link>
          <Link href="/articles/safety-equipment-planning">工事・イベントの安全保安用品を手配する <span aria-hidden="true">→</span></Link>
          <Link href="/articles/safety-walkway-setup">安全通路・作業区画の作り方 <span aria-hidden="true">→</span></Link>
          <Link href="/articles/outdoor-work-heatstroke-measures">外仕事の熱中症対策と実務チェックリスト <span aria-hidden="true">→</span></Link>
        </nav>

        <section className="rental-sources"><h2>参照資料・情報の確認について</h2><p>2026年11月24日に公式情報を確認して作成しました。NETISの登録状況、発注者の評定要領、機材の仕様・在庫・料金は変わることがあります。手配前に各公式情報と担当窓口で確認してください。</p><ul>{SOURCES.map((s) => <li key={s.url}><a href={s.url} target="_blank" rel="noopener noreferrer">{s.title}</a></li>)}</ul></section>
      </article>
    </main>
    <SiteFooter />
  </>;
}
