import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { SafetyBannerLink } from "@/components/article/safety-banner-link";
import { SAFETY_BANNER_PATH } from "@/lib/safety-banner-links";
import "../safety-supplies-rental-guide/rental-guide.css";
import "./banner-guide.css";

const TITLE = "工事現場の横幕・たれ幕の選び方｜安全標語・サイズ・取付方法";
const DESCRIPTION = "工事現場の横幕・たれ幕を、掲示場所・安全標語・サイズ・素材・取付方法から選ぶガイド。安全第一の横幕、縦長のたれ幕、単管標識などGCセレクトの6商品を、寸法とひもの付属有無まで比較します。";
const URL = `https://sagyou-navi.com${SAFETY_BANNER_PATH}`;
const IMG = "/images/articles/construction-safety-banner-guide/";
const DATE = "2026-11-14";
const MLIT = "https://www.ktr.mlit.go.jp/edogawa/edogawa01252.html";

export const metadata: Metadata = {
  title: { absolute: `${TITLE}｜作業用品ナビ` },
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    type: "article", title: TITLE, description: DESCRIPTION, url: URL,
    siteName: "作業用品ナビ", locale: "ja_JP",
    publishedTime: `${DATE}T22:00:00+09:00`, modifiedTime: `${DATE}T22:00:00+09:00`,
    images: [{ url: `${IMG}1148010208.jpg`, alt: "安全第一の横幕の商品例" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [`${IMG}1148010208.jpg`] },
};

const TOC = [
  ["types", "横幕・たれ幕・単管幕の違い"],
  ["messages", "掲示場所に合う安全標語"],
  ["size", "サイズ・素材・付属品の確認"],
  ["products", "用途で比較する6つの商品例"],
  ["installation", "取り付け前後に確認すること"],
  ["order", "購入前のチェックリスト"],
] as const;

const PRODUCTS = [
  { id: "1148010208", shape: "wide", tag: "横1.8mの安全標語", name: "バイオマス横断幕（小）安全第一", size: "横1,800 × 縦450mm", material: "ターポリン", fixing: "ハトメ上下各4個／ひも別売", description: "横長のスペースに「安全第一」を掲示したいときの候補。幅1.8mなので、取り付け場所と周囲の余裕を実測して確認します。", note: "防炎認定を受けた素材ですが、製品に防炎マークは付いていません。" },
  { id: "1148010308", shape: "wide", tag: "横5.4mの大型横幕", name: "バイオマス横断幕（大）安全第一", size: "横5,400 × 縦860mm", material: "ターポリン", fixing: "ハトメ上下各10個／ひも別売", description: "広い横幅を使って安全方針を掲示する商品例。小サイズと同じ文言でも、必要な設置スペースや固定箇所が大きく変わります。", note: "防炎認定を受けた素材ですが、製品に防炎マークは付いていません。" },
  { id: "1148010106", shape: "wide", tag: "作業に応じた注意喚起", name: "大型よこ幕 BC-6 吊り荷の下に入るな", size: "横5,400 × 縦900mm", material: "カツラギ", fixing: "ハトメ10か所／ひも付き", description: "吊り荷に関する注意を明確に伝える横幕です。掲示するだけでなく、作業計画に沿った立入管理と合わせて使う表示として検討します。", note: "同じ横5.4mでも、上の商品とは縦寸法・素材・付属品が異なります。" },
  { id: "1148030111", shape: "standing", tag: "縦長の安全標語", name: "たれ幕 CS-11 みんなで築こうゼロ災害", size: "横450 × 縦1,800mm", material: "ポンジ", fixing: "ひもで取り付け／ひも付き", description: "縦に長い掲示場所で、安全活動の目標を伝える商品例。文字を読む向きと、下端が通路や作業に干渉しないかを確かめます。", note: "屋外での使用条件や固定方法は、設置場所に合わせて確認してください。" },
  { id: "1146820021", shape: "standing", tag: "単管まわりの立入表示", name: "タンカン標識 NT-21 関係者以外立入禁止", size: "横450 × 縦550mm", material: "ターポリン", fixing: "面ファスナー／ハトメ2か所／ひも付き", description: "単管まわりで、入ってはいけない場所を知らせる表示です。誰がどちらから近づく場所なのかを確認して、表示面を決めます。", note: "面ファスナーの取付仕様と、使用する単管への適合を購入前に確認します。" },
  { id: "1179040300", shape: "standing", tag: "暑い時期の注意喚起", name: "熱中症たれ幕 大", size: "横700 × 縦2,200mm", material: "ポンジ", fixing: "四方ハトメ補強あり／ひも付き", description: "「ストップ！熱中症」を掲示する縦長のたれ幕です。休憩場所など、現場で決めた対策を周知する場面の表示候補になります。", note: "掲示に加え、休憩・給水・体調不良時の連絡などの運用が必要です。" },
] as const;

const FAQ = [
  { q: "横幕とたれ幕は、何が違いますか？", a: "横幕は横長、たれ幕（垂れ幕）は縦長の掲示に使われることが多い呼び方です。ただし、名称だけでは取り付け方は分かりません。横・縦の寸法、ハトメ、面ファスナー、ひもの有無まで商品ページで確かめてください。" },
  { q: "安全第一の横幕は、どのサイズを選べばよいですか？", a: "設置する横幅と縦の空き、見る位置からの読みやすさで選びます。この記事で紹介した商品には横1,800×縦450mmと横5,400×縦860mmがありますが、すべての現場に共通する推奨サイズではありません。固定用の余裕も含め、取り付け場所を実測して決めましょう。" },
  { q: "取り付け用のひもは付いていますか？", a: "商品によります。掲載したバイオマス横断幕の大小は、商品説明で取り付け用のひも等が付属しないと案内されています。一方、CS-11のたれ幕やNT-21のタンカン標識などは、ひも付きです。注文時は最新のセット内容を確認してください。" },
  { q: "屋外用なら、防炎仕様ですか？", a: "屋外で使えることと、防炎に関する仕様は別に確認する項目です。素材名だけで防炎性能は判断できません。紹介したバイオマス横断幕は、防炎認定を受けた素材を使っていますが、製品には防炎マークが付かない旨の注意書きがあります。現場で必要とされる表示や証明を確認してください。" },
  { q: "安全標語が決まっていない場合は、どこから選べばよいですか？", a: "まず、誰に何を伝える場所かを決めます。現場全体の方針なら「安全第一」「ゼロ災害」、危険箇所なら「関係者以外立入禁止」など、目的を分けて考えると候補を絞れます。商品一覧で文言を探し、寸法と取付仕様を照合してください。" },
];

function Cta({ placement, title, children }: { placement: string; title: string; children: ReactNode }) {
  return <aside className="rental-cta"><div><span className="rental-eyebrow">GCセレクトの横幕・たれ幕</span><h2>{title}</h2><p>{children}</p></div><SafetyBannerLink placement={placement} className="rental-button">横幕・たれ幕の商品一覧を見る <span aria-hidden="true">↗</span></SafetyBannerLink></aside>;
}

function ProductCard({ product }: { product: typeof PRODUCTS[number] }) {
  return <div className={`banner-product banner-product-${product.shape}`}>
    <SafetyBannerLink placement={`image_${product.id}`} productId={product.id} className={`banner-photo${product.shape === "wide" ? " banner-photo-horizontal" : ""}`}>
      <Image src={`${IMG}${product.id}.jpg`} alt={product.name} fill sizes={product.shape === "wide" ? "(max-width: 767px) 90vw, 560px" : "(max-width: 1023px) 80vw, 330px"} />
    </SafetyBannerLink>
    <div className="banner-product-copy"><span className="rental-product-tag">{product.tag}</span><h3>{product.name}</h3><p>{product.description}</p>
      <dl><div><dt>サイズ</dt><dd>{product.size}</dd></div><div><dt>素材</dt><dd>{product.material}</dd></div><div><dt>取り付け</dt><dd>{product.fixing}</dd></div></dl>
      <p>{product.note}</p><small>GCセレクト品番：{product.id}</small>
      <SafetyBannerLink placement={`product_${product.id}`} productId={product.id} className="rental-product-link">商品の仕様・価格を確認する <span aria-hidden="true">↗</span></SafetyBannerLink>
    </div>
  </div>;
}

export default function ConstructionSafetyBannerGuide() {
  const jsonLd = [
    { "@context": "https://schema.org", "@type": "Article", headline: TITLE, description: DESCRIPTION,
      image: [`https://sagyou-navi.com${IMG}1148010208.jpg`], datePublished: `${DATE}T22:00:00+09:00`, dateModified: `${DATE}T22:00:00+09:00`, mainEntityOfPage: URL,
      author: { "@type": "Organization", name: "作業用品ナビ編集部", url: "https://sagyou-navi.com/about" },
      publisher: { "@type": "Organization", name: "株式会社トレード", url: "https://trade-sign.jp/" } },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://sagyou-navi.com" },
      { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://sagyou-navi.com/articles" },
      { "@type": "ListItem", position: 3, name: "工事現場の横幕・たれ幕", item: URL },
    ] },
  ];
  return <>
    <SiteHeader />
    <main className="rental-guide banner-guide">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <nav className="rental-breadcrumb" aria-label="パンくず"><Link href="/">ホーム</Link><span>/</span><Link href="/articles">記事一覧</Link><span>/</span><span>工事現場の横幕・たれ幕</span></nav>
      <article>
        <header className="rental-hero">
          <div className="rental-hero-copy"><p className="rental-eyebrow">現場の掲示を、分かりやすく。</p>
            <h1>工事現場の<br />横幕・たれ幕の選び方<span>安全標語・サイズ・取付方法</span></h1>
            <p className="rental-hero-lead">伝えたい言葉を、必要な場所に。<br />商品を比べる前に確かめたいポイントを整理しました。</p>
            <div className="rental-hero-actions banner-hero-actions"><SafetyBannerLink placement="hero" className="rental-button rental-button-dark">横幕・たれ幕を探す ↗</SafetyBannerLink><a href="#products">6つの商品例を比較する ↓</a></div>
            <p className="rental-meta"><time dateTime={DATE}>2026年11月14日</time> 公開・商品情報確認<br /><Link href="/about">作業用品ナビ編集部</Link> ・ 約9分</p>
          </div>
          <div className="banner-hero-products">
            <div className="banner-hero-horizontal"><p>横に伝える、横幕</p><div className="banner-photo banner-photo-horizontal"><Image src={`${IMG}1148010208.jpg`} alt="横長の安全第一の横幕" fill preload sizes="(max-width: 767px) 65vw, 340px" /></div></div>
            <div className="banner-hero-vertical"><p>縦に伝える</p><div className="banner-photo"><Image src={`${IMG}1148030111.jpg`} alt="縦長のみんなで築こうゼロ災害のたれ幕" fill sizes="360px" /></div></div>
            <p className="banner-hero-caption">GCセレクトの商品画像。形の違いを示すもので、同じ縮尺ではありません。</p>
          </div>
        </header>
        <p className="rental-disclosure">運営：株式会社トレード（グリーンクロスグループ）。本記事では、グループのECサイト「GCセレクト」の商品をご紹介しています。</p>
        <div className="rental-intro">
          <p>「安全第一の横幕を用意してほしい」と頼まれて調べると、横幅1.8mのものも5.4mのものもあります。縦長のたれ幕や単管に取り付ける表示も並び、どれが現場に合うのか迷うことがあります。</p>
          <p>選ぶ順番は、<strong>掲示する場所、伝える内容、寸法、取り付け方</strong>です。言葉が合っていても、幕が収まらなかったり、ひもが付属していなかったりすると、届いたその日に取り付けられません。</p>
          <p>この記事では、工事現場・工場・倉庫で使う安全標語や注意喚起の横幕・たれ幕を扱います。GCセレクトの実際の商品仕様をもとに、購入前に見比べたい点を説明します。</p>
        </div>
        <div className="rental-answer"><p className="rental-eyebrow">最初に決める3つのこと</p><ol><li><strong>場所：</strong>横に広い面か、縦に長い面か、単管まわりか。</li><li><strong>文言：</strong>安全方針を伝えるのか、具体的な禁止・注意を知らせるのか。</li><li><strong>仕様：</strong>横・縦の寸法、素材、固定方法、ひもの付属有無。</li></ol></div>
        <nav className="rental-toc" aria-label="この記事の目次"><p>この記事で分かること</p><ol>{TOC.map(([id, title], i) => <li key={id}><a href={`#${id}`}><span>0{i + 1}</span>{title}<span aria-hidden="true">↓</span></a></li>)}</ol></nav>

        <section id="types" className="rental-section"><p className="rental-eyebrow">01 / 形と取り付け場所</p><h2>横幕・たれ幕・単管幕は、掲示できる場所から選ぶ</h2>
          <p>一般に、横長に掲示する幕を「横幕・横断幕」、縦長に掲示する幕を「たれ幕・垂れ幕」と呼びます。「懸垂幕」という名称で扱われるものもあります。ただし、販売店や商品によって呼び方は異なるため、<strong>名前だけで判断せず、寸法と取付仕様を確認</strong>しましょう。</p>
          <div className="rental-table-scroll" role="region" aria-label="横幕とたれ幕の違い" tabIndex={0}><table><caption>掲示場所から考える、形の使い分け</caption><thead><tr><th scope="col">種類</th><th scope="col">掲示を検討する場所</th><th scope="col">先に確かめたいこと</th></tr></thead><tbody>
            <tr><th scope="row">横幕・横断幕</th><td>横方向にまとまった面を確保できる仮囲い・フェンス・朝礼場所など</td><td>固定できる横幅、開口や扉との干渉、文字の見え方</td></tr>
            <tr><th scope="row">たれ幕・垂れ幕</th><td>縦方向の掲示スペースがある場所</td><td>縦の空き、下端の位置、周辺の通路や作業との干渉</td></tr>
            <tr><th scope="row">単管幕・タンカン標識</th><td>単管を使った区画や通路の入口付近など</td><td>単管への適合、面ファスナーなどの固定方式、片面・両面</td></tr>
          </tbody></table></div>
          <p>例えば、入口の横幅が限られているなら、大きな横幕を折って取り付けるより、別のサイズや縦長の掲示を検討したほうが、文言を隠さずに済みます。逆に、広い面を使える場所なら、横幕でまとまった標語を見せる方法があります。</p>
          <p className="rental-note">ここでいう横幕は安全標語などを表示する幕です。テントの側面を囲う「横幕」や、飛散防止用の養生シートとは用途が異なります。</p>
        </section>

        <section id="messages" className="rental-section"><p className="rental-eyebrow">02 / 言葉の選び方</p><h2>安全標語は「誰に、何を伝えるか」で分ける</h2>
          <p>現場全体の方針を伝える言葉と、その場所で取ってほしい行動を伝える言葉は、役割が違います。「安全第一」の掲示に加えて、立ち入ってはいけない場所には「関係者以外立入禁止」のような具体的な表示を検討します。</p>
          <div className="banner-purpose-links"><a href="#horizontal-products"><strong>現場の安全方針を伝えたい</strong><span>「安全第一」などの横幕を比較する ↓</span></a><a href="#standing-products"><strong>立入禁止を伝えたい</strong><span>単管まわりに付ける表示を確認する ↓</span></a><a href="#standing-products"><strong>安全活動・季節の注意を伝えたい</strong><span>ゼロ災害・熱中症のたれ幕を見る ↓</span></a></div>
          <div className="rental-table-scroll" role="region" aria-label="場所と安全標語の選び方" tabIndex={0}><table><caption>掲載商品の文言と、掲示を考える場面</caption><thead><tr><th scope="col">伝える目的</th><th scope="col">文言の例</th><th scope="col">掲示と一緒に考えること</th></tr></thead><tbody>
            <tr><th scope="row">安全方針・活動目標</th><td>安全第一／みんなで築こうゼロ災害</td><td>朝礼などで共有している目標と、掲示内容をそろえる</td></tr>
            <tr><th scope="row">立ち入りの制限</th><td>関係者以外立入禁止</td><td>入ってほしくない範囲を明確にし、近づく方向から見える位置にする</td></tr>
            <tr><th scope="row">作業に伴う注意</th><td>吊り荷の下に入るな</td><td>作業計画・立入管理と表示の内容を一致させる</td></tr>
            <tr><th scope="row">暑い時期の注意喚起</th><td>ストップ！熱中症</td><td>休憩や給水、体調不良時の連絡など、現場で決めた行動につなげる</td></tr>
          </tbody></table></div>
          <p>安全標語を現場に掲示する取り組みの例として、<a href={MLIT}>国土交通省・江戸川河川事務所の「安全標語表彰」</a>では、選ばれた作品を工事現場などに掲示し、安全意識の向上につなげる目的を示しています。幕は方針や注意点を共有する手段であり、掲示だけで事故を防げるものではありません。</p>
          <p>文言が未定なら、<SafetyBannerLink placement="message_selection">GCセレクトの横幕・たれ幕一覧</SafetyBannerLink>で候補を見て、現場で使っている言葉と照合すると選びやすくなります。短く目立つかだけでなく、読む人が意味を理解できるかも確認しましょう。</p>
        </section>

        <section id="size" className="rental-section"><p className="rental-eyebrow">03 / 購入前の仕様確認</p><h2>サイズは「横×縦」でそろえて比較する</h2>
          <p>商品ページには「縦450×横1800mm」「H900×W5400mm」など、異なる書き方があります。比較するメモでは、<strong>横幅と縦の長さを同じ順番にそろえる</strong>と、向きの取り違えを減らせます。この記事の寸法表記はすべて「横×縦」です。</p>
          <p>横1,800×縦450mmは、横1.8m・縦45cmです。横5,400×縦860mmなら、横5.4m・縦86cmになります。取り付ける面を測るときは、幕の寸法だけでなく、ひもを掛ける位置や、周囲の扉・通路・既存の表示も一緒に見ておきましょう。</p>
          <h3>大きい幕でも、文字が隠れていれば伝わらない</h3>
          <p>実際に読む人が立つ位置から、車両・資材・柱などで文字が隠れないかを確認します。斜めから見る場所や、逆光になる場所、薄暗い時間に使う場所も同じです。幕の大きさだけで、読める距離を一律に決めることはできません。</p>
          <h3>素材名だけで耐候性や防炎性能を決めつけない</h3>
          <p>今回の商品例には、ターポリン、ポンジ、カツラギが使われています。同じ文言でも素材が異なるので、屋内・屋外の使用条件、掲示期間、必要な性能を商品ごとに確認します。使用できる年数や耐風性能を、素材名だけから判断しないようにしましょう。</p>
          <div className="rental-note-box"><h3>「防炎の素材」と「製品の表示」まで確認する</h3><p>掲載したバイオマス横断幕は、商品ページに防炎認定を受けたターポリンを使っていると記載されています。一方で、製品には防炎マークが付いていないという注意書きもあります。現場から防炎ラベルや証明を求められている場合は、必要なものがそろうかを購入前に確認してください。</p><p className="rental-note">確認元：<SafetyBannerLink placement="fire_spec" productId="1148010208">バイオマス横断幕（小）安全第一の商品仕様</SafetyBannerLink></p></div>
          <h3>ハトメと、取り付け用のひもは別に確認</h3>
          <p>ハトメは、ひもなどを通すための穴を補強する金具です。ハトメが付いているからといって、ひもも付属するとは限りません。掲載したバイオマス横断幕の大小はひもが別売、ほかの掲載商品はひも付きです。固定に使う部材は、幕と取り付け先に合うものを確認して手配します。</p>
        </section>

        <section id="products" className="rental-section"><p className="rental-eyebrow">04 / 実際の商品を比較</p><h2>GCセレクトで選べる横幕・たれ幕の6商品</h2>
          <p>次の6点は、形・文言・寸法・取り付け仕様の違いを比べるための商品例です。人気順や安全性能の順位ではありません。使いたい場所に合わせて、候補を絞ってください。</p>
          <h3 id="horizontal-products">横長のスペースに掲示する横幕</h3>
          <div className="banner-wide-products">{PRODUCTS.filter(p => p.shape === "wide").map(product => <ProductCard key={product.id} product={product} />)}</div>
          <h3 id="standing-products">縦長のたれ幕と、単管まわりの表示</h3>
          <div className="banner-standing-products">{PRODUCTS.filter(p => p.shape === "standing").map(product => <ProductCard key={product.id} product={product} />)}</div>
          <p className="rental-note">寸法・素材・付属品は2026年11月14日にGCセレクトの商品ページを確認した情報です。画像の表示サイズは同じ縮尺ではありません。価格・在庫・納期・仕様はリンク先で最新の内容をご確認ください。</p>
          <Cta placement="after_products" title="別の標語やサイズも見比べたい方へ">紹介した6点以外にも、掲示する内容や形から候補を探せます。一覧で気になる商品を開き、文言・寸法・取り付け方法を確認してください。</Cta>
        </section>

        <section id="installation" className="rental-section"><p className="rental-eyebrow">05 / 取り付けと点検</p><h2>取り付ける前に、固定先と周囲への影響を確認する</h2>
          <p>幕は軽い製品でも、風を受けます。フェンスや足場などに取り付ける場合は、幕そのものの仕様に加え、取り付け先がその使い方に対応できるかを管理者・施工担当者に確認します。「ひもが付属するから、どこにでも付けられる」というわけではありません。</p>
          <ol className="rental-steps"><li><strong>設置場所と作業方法を決める</strong><span>固定できる場所、設置高さ、通路や開口との関係を確認します。高い場所の取り付け・撤去は、現場の作業計画に従います。</span></li><li><strong>商品の固定方式を確認する</strong><span>ハトメ・ひも・面ファスナーなど、商品ごとの仕様に合わせます。必要な固定箇所や使用部材は、商品説明と現場条件を照合します。</span></li><li><strong>読む位置から確認する</strong><span>表示の向き、文字の隠れ、たるみ、周囲の案内との混同がないかを確かめます。</span></li><li><strong>掲示後の点検を決める</strong><span>ひもの緩み、ハトメ周辺の破れ、面ファスナーの外れ、文字の汚れを確認する担当を決めます。天候の変化に備えた取り外しの判断も共有します。</span></li></ol>
          <p>強風時の扱いや点検方法は、商品・設置場所・管理条件によって異なります。共通の風速や結び方を自己判断で当てはめず、現場の基準と商品ごとの指示に従ってください。</p>
          <div className="rental-note-box"><h3>「立入禁止」の幕は、区画そのものではない</h3><p>幕は、禁止事項を知らせるための表示です。危険な場所への侵入を物理的に止める柵の代わりにはなりません。通路の分離や立入管理も必要なら、<Link href="/articles/safety-walkway-setup">安全通路・作業区画の作り方</Link>と合わせて考えましょう。</p></div>
        </section>

        <section id="order" className="rental-section"><p className="rental-eyebrow">06 / 注文前の最終確認</p><h2>文言・寸法・付属品を確認してから注文する</h2>
          <p>注文する商品が決まったら、現場の担当者に次の項目を確認してもらうと、取り違えや手配漏れを防ぎやすくなります。同じ標語でも、サイズ違い・素材違いの商品がある点に注意してください。</p>
          <ul className="banner-checklist"><li><strong>表示内容：</strong>現場で使う言葉と一致しているか。実際の作業内容に合っているか。</li><li><strong>横幅・縦の長さ：</strong>取り付け場所を測ったか。周囲の空きや固定箇所も確保できるか。</li><li><strong>素材・必要な性能：</strong>使用場所と掲示期間に合うか。必要な表示・証明は確認できたか。</li><li><strong>固定方法・付属品：</strong>ハトメ、面ファスナー、ひもの有無と、別に用意する部材は確認したか。</li><li><strong>数量・受け取り：</strong>掲示箇所ごとの枚数、必要日、届け先、受取担当は決まっているか。</li><li><strong>設置後の管理：</strong>取り付け・点検・撤去を誰が行うか、共有できているか。</li></ul>
          <p>社名入りや独自の文言を使いたい場合は、既製品で対応できるか、別途製作が必要かを販売店に確認します。この記事で紹介した商品が、そのまま名入れや文言変更に対応しているとは限りません。</p>
          <Cta placement="order" title="現場に合う文言とサイズを、商品一覧から探す">横幕・たれ幕・単管幕を見比べ、使いたい場所に合う商品を選べます。購入前に、各商品ページで価格・在庫・納期とセット内容を確認しましょう。</Cta>
        </section>

        <section id="faq" className="rental-section"><h2>横幕・たれ幕のよくある質問</h2><div className="rental-faq">{FAQ.map(({q,a}) => <details key={q}><summary>{q}<span aria-hidden="true">＋</span></summary><p>{a}</p></details>)}</div></section>
        <section className="rental-section rental-summary"><h2>まずは、掲示する場所と伝える言葉を決める</h2><p>横幕・たれ幕は、見た目や価格だけで選ぶより、現場のどこで何を伝えるかを先に決めると選びやすくなります。場所と文言が決まったら、横・縦の寸法、素材、取り付け方法、ひもの有無を順に確認してください。</p><SafetyBannerLink placement="summary" className="rental-button rental-button-dark">GCセレクトで横幕・たれ幕を見る ↗</SafetyBannerLink></section>
        <aside className="rental-related" aria-label="関連記事"><h2>現場の表示・区画も合わせて確認する</h2><Link href="/articles/safety-walkway-setup">安全通路・作業区画に必要な用品を選ぶ →</Link><Link href="/articles/sl-standing-sign-board-selection-guide">SL立看板の種類・サイズを確認する →</Link><Link href="/articles/color-cone-selection">カラーコーン・バー・チェーンを使い分ける →</Link></aside>
        <footer className="rental-sources"><h2>出典・商品情報について</h2><ul className="banner-sources-list"><li><SafetyBannerLink placement="source">GCセレクト「横幕・たれ幕」</SafetyBannerLink>および本文中の6商品ページ：寸法、素材、取付仕様、付属品、注意事項の確認元。商品画像も同サイト掲載のものです。</li><li><a href={MLIT}>国土交通省 関東地方整備局 江戸川河川事務所「安全標語表彰」</a>：安全標語を現場に掲示する取り組みの参照元。特定商品の効果や推奨を示すものではありません。</li></ul><p>確認日：2026年11月14日。選び方の順序・比較・チェックリストは、掲載仕様をもとに編集部が整理しました。施工実績や実物試験のレポートではありません。設置は商品ごとの説明と現場の管理条件に従ってください。</p><p>GCセレクトは、安全用品・看板・標識から災害対策用品まで扱うECサイトです。本記事の購入案内は、横幕・たれ幕のカテゴリと掲載商品にリンクしています。</p><Link href="/about">運営者情報 →</Link></footer>
      </article>
    </main>
    <SiteFooter />
  </>;
}
