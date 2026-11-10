import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { RentalLink } from "@/components/article/rental-link";
import { RentalInquiryTemplate } from "@/components/article/rental-inquiry-template";
import { RENTAL_PATH } from "@/lib/rental-links";
import "./rental-guide.css";

const TITLE = "安全用品レンタルは短期でも使える？料金・購入比較と見積もりの準備";
const DESCRIPTION = "工事・イベントの安全用品レンタルを検討する方へ。カラーコーン・バリケード・工事看板などの選び方、短期利用の確認点、配送回収を含む料金の比較、購入との使い分けを解説。見積もり依頼文のテンプレート付き。";
const URL = `https://sagyou-navi.com${RENTAL_PATH}`;
const IMG = "/images/articles/safety-supplies-rental-guide/";
const DATE = "2026-11-10";

export const metadata: Metadata = {
  title: { absolute: `${TITLE}｜作業用品ナビ` },
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL, type: "article", locale: "ja_JP", siteName: "作業用品ナビ", publishedTime: `${DATE}T09:00:00+09:00`, modifiedTime: `${DATE}T09:00:00+09:00`, images: [{ url: `${IMG}rental-yard.webp`, alt: "電光表示板や信号機などのレンタル機材が並ぶ保管場所" }] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [`${IMG}rental-yard.webp`] },
};

const sections = [
  ["short-term", "短期レンタルの確認点"], ["equipment", "借りられる用品と付属品"],
  ["cost", "料金・見積もりの比べ方"], ["rent-or-buy", "レンタルと購入の使い分け"],
  ["scenes", "工事・イベント別の準備"], ["checklist", "見積もり依頼テンプレート"], ["faq", "よくある質問"],
] as const;

const products = [
  { name: "カラーコーン・コーンバー", image: "cone.jpg", alt: "赤白の反射帯があるヘビーコーン", use: "仮設通路や駐車区画の目印に。短期間だけ区画を増やしたいときの候補です。", check: "高さ・色・反射仕様、本体とバーの本数、重しの要否。", code: "cone", fit: "通路・駐車場" },
  { name: "ガードフェンス・バリケード", image: "fence.jpg", alt: "金属ネットとトラ板を備えたガードフェンス", use: "作業区画と歩行者の動線を分けたいときに。開口や曲がり角も含めて考えます。", check: "本体の寸法と枚数、ベース・連結金具、支持・固定方法。", code: "fence", fit: "区画・立入制限" },
  { name: "工事看板・規制看板", image: "signs.webp", alt: "蛍光色の高輝度反射工事看板が並ぶ様子", use: "通行止め・迂回・工事の予告などを知らせます。表示する文言ごとに数量を分けましょう。", check: "表示文言、板面の寸法・反射仕様、枠付きか、重しの有無。", code: "signs", fit: "予告・案内" },
  { name: "LED矢印板・方向指示板", image: "arrow.jpg", alt: "進行方向を示す2WAYアロー", use: "進む方向を知らせるための機材。昼夜の使用条件に合わせて表示方式を選びます。", check: "表示方向、電源方式、連続点灯時間、充電・運搬の担当。", code: "arrow", fit: "道路規制・誘導" },
  { name: "保安灯・工事灯・警告灯", image: "warning-light.jpg", alt: "ソーラー式警告灯ソーラープリズムアイGC-200RG", use: "夜間に工事区画の存在を知らせる用品。照明とは役割を分けて準備します。", check: "取付先と金具、日照・充電条件、必要な稼働時間と予備。", code: "warning-light", fit: "夜間の注意喚起" },
  { name: "投光器・LED仮設照明", image: "floodlight.jpg", alt: "LED4灯式スポットライトLS304-GC", use: "作業場所や会場の通路を照らす機材。光量だけでなく、照らす範囲から検討します。", check: "電源、設置位置、連続点灯・充電、支持・固定と眩しさへの配慮。", code: "floodlight", fit: "作業場所・会場照明" },
];

const faq = [
  { q: "安全用品は1日だけ、または少量でもレンタルできますか？", a: "短期・少量での対応可否は、用品・数量・納品先・希望日程によって異なります。グリーンクロスのレンタル案内では短い期間や1品の相談を受け付けていますが、1日単位の料金や全品の貸出しを保証するものではありません。実際の使用日と納品・回収希望日を伝えて確認してください。" },
  { q: "安全用品レンタルの料金相場はいくらですか？", a: "用品・機種・数量・期間・運搬条件が違うため、一律の相場だけでは総額を判断できません。グリーンクロスの対象ページは個別見積もり方式です。本体料金に加え、付属品、配送・回収、設置・撤去、延長時の費用をそろえて比較しましょう。" },
  { q: "品名や必要数量が分からなくても相談できますか？", a: "グリーンクロスのレンタル案内では、品名・機種・数量が未定の段階でも相談できます。現場の場所、用途、おおよその期間を伝え、区画したい範囲の寸法や写真・図面があれば合わせて用意すると、条件を共有しやすくなります。" },
  { q: "購入品とレンタル品をまとめて相談できますか？", a: "グリーンクロスの案内では、販売とレンタルを同じ窓口で相談できます。繰り返し使う用品は購入、期間限定の追加分や機器類はレンタルという組み合わせも検討できます。品目ごとに希望を分けて伝えてください。" },
  { q: "レンタル品を壊した場合や工期が延びた場合は？", a: "使用前に破損・紛失時の費用、延長の連絡期限と料金、代替品の手配条件を確認します。発生時は貸出元へ連絡し、損傷した用品を自己判断で使い続けないようにしてください。延長や交換の可否は在庫や契約内容によります。" },
];

function Cta({ placement, title, children }: { placement: string; title: string; children: React.ReactNode }) {
  return <aside className="rental-cta"><div><span className="rental-eyebrow">グリーンクロスのレンタル案内</span><h2>{title}</h2><p>{children}</p></div><RentalLink placement={placement} className="rental-button">取扱用品・相談方法を見る <span aria-hidden="true">↗</span></RentalLink></aside>;
}

export default function SafetySuppliesRentalGuide() {
  const jsonLd = [
    { "@context": "https://schema.org", "@type": "Article", headline: TITLE, description: DESCRIPTION, image: [`https://sagyou-navi.com${IMG}rental-yard.webp`], datePublished: `${DATE}T09:00:00+09:00`, dateModified: `${DATE}T09:00:00+09:00`, mainEntityOfPage: URL, author: { "@type": "Organization", name: "作業用品ナビ編集部", url: "https://sagyou-navi.com/about" }, publisher: { "@type": "Organization", name: "株式会社トレード", url: "https://trade-sign.jp/" } },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: "https://sagyou-navi.com" }, { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://sagyou-navi.com/articles" }, { "@type": "ListItem", position: 3, name: "安全用品レンタルガイド", item: URL }] },
  ];
  return <>
    <SiteHeader />
    <main className="rental-guide">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <nav className="rental-breadcrumb" aria-label="パンくず"><Link href="/">ホーム</Link><span>/</span><Link href="/articles">記事一覧</Link><span>/</span><span>安全用品レンタル</span></nav>
      <article>
        <header className="rental-hero">
          <div className="rental-hero-copy">
            <p className="rental-eyebrow">工事・イベントの手配ガイド</p>
            <h1>安全用品レンタルは<br />短期でも使える？<span>料金・購入比較と<br className="rental-desktop-break" />見積もりの準備</span></h1>
            <p className="rental-hero-lead">必要な用品を、必要な期間だけ。<br />本体だけでなく、付属品・運搬・返却まで<br className="rental-desktop-break" />ひとまとめに考えるためのガイドです。</p>
            <a href="#equipment" className="rental-button rental-button-dark">借りたい用品から確認する <span aria-hidden="true">↓</span></a>
            <p className="rental-meta"><time dateTime={DATE}>2026年11月10日</time> 公開・情報確認<br /><Link href="/about">作業用品ナビ編集部</Link> ・ 約10分で読めます</p>
          </div>
          <figure className="rental-hero-photo"><Image src={`${IMG}rental-yard.webp`} alt="電光表示板や信号機などのレンタル機材が並ぶグリーンクロスの屋外保管場所" fill preload sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 600px" /><figcaption>写真提供元：グリーンクロスのレンタル案内</figcaption></figure>
        </header>

        <p className="rental-disclosure">本記事は、株式会社トレード（グリーンクロスグループ）が運営するメディアから、グループのレンタルサービスをご紹介しています。</p>
        <div className="rental-intro">
          <p>「数日間の工事のためにカラーコーンを買うべきか」「イベントで使うフェンスを、置き場所を持たずに手配したい」。そんなときに検討したいのが、<strong>安全用品・保安用品のレンタル</strong>です。</p>
          <p>短期・単発の現場や、一時的に数量が増える場面ではレンタルが候補になります。ただし、日額だけを比べると、配送・回収や付属品を含めた総額を見誤ることがあります。この記事では、用品選びから見積もり前の準備までを整理します。</p>
        </div>
        <div className="rental-answer"><p className="rental-eyebrow">先に押さえたい3つのこと</p><ol><li><strong>短期でもまず相談。</strong> 最短期間・少量対応・在庫は品目と現場条件で確認する。</li><li><strong>料金は総額で比較。</strong> 本体に加え、付属品・配送回収・設置撤去をそろえる。</li><li><strong>買うもの・借りるものを分ける。</strong> 常備品は購入、期間限定の追加分はレンタルも候補。</li></ol></div>
        <Cta placement="intro" title="品名や数量が、まだ決まっていなくても。">現場の場所・用途・おおよその期間から相談できます。グリーンクロスの取扱用品と、見積もりに必要な条件を確認しましょう。</Cta>

        <nav className="rental-toc" aria-label="この記事の目次"><p>この記事で分かること</p><ol>{sections.map(([id, title], i) => <li key={id}><a href={`#${id}`}><span>0{i + 1}</span>{title}<span aria-hidden="true">↓</span></a></li>)}</ol></nav>

        <section id="short-term" className="rental-section">
          <p className="rental-eyebrow">01 / 短期の手配</p><h2>安全用品レンタルは短期でも使える？<br />使用日と、借りる期間を分けて確認</h2>
          <p>短い期間や少量での利用は、まず貸出元に対応可否を確認します。グリーンクロスのレンタルページでも短期・1品の相談が案内されていますが、<strong>「すべての用品が1日から借りられる」「使った日だけの料金になる」という意味ではありません。</strong></p>
          <p>例えば土日のイベントで使う場合でも、搬入が金曜日、回収が月曜日になることがあります。実際に使う日、納品希望日、返却・回収希望日を分けて伝え、どの日からどの日までが課金対象になるかを確認しましょう。</p>
          <ul className="rental-list"><li><strong>最短利用期間・最低料金：</strong>1日、週、月などの単位や、最低料金の有無。</li><li><strong>配送と回収の日程：</strong>休日の対応、時間指定、前日搬入・翌日回収の扱い。</li><li><strong>変更への対応：</strong>雨天中止、工期延長、数量変更の連絡期限と費用。</li><li><strong>在庫と納期：</strong>必要な仕様・数量を希望日にそろえられるか。</li></ul>
          <p>急ぎの場合は、現場住所・必要日・用途・数量を最初にまとめると相談が進めやすくなります。即日納品を前提にせず、代替機種や分納の可否も確認してください。</p>
        </section>

        <section id="equipment" className="rental-section">
          <p className="rental-eyebrow">02 / 用品から選ぶ</p><h2>レンタルできる安全用品・保安用品<br />まず確認したい6つの分類</h2>
          <p>グリーンクロスのレンタル案内に掲載されている代表的な分類です。写真は用品の例で、実際に借りられる機種・色・仕様・在庫は見積もり時に確認します。</p>
          <div className="rental-product-grid">{products.map((p) => <div className="rental-product" key={p.code}>
            <RentalLink placement={`product_image_${p.code}`} anchor="lineup" className="rental-product-image"><Image src={`${IMG}${p.image}`} alt={p.alt} fill sizes="(max-width: 639px) calc(100vw - 40px), (max-width: 1023px) 45vw, 365px" /></RentalLink>
            <div className="rental-product-copy"><span className="rental-product-tag">{p.fit}</span><h3>{p.name}</h3><p>{p.use}</p><p className="rental-product-check"><strong>一緒に確認</strong>{p.check}</p><RentalLink placement={`product_${p.code}`} anchor="lineup" className="rental-product-link">取扱い・相談先を確認 <span aria-hidden="true">↗</span></RentalLink></div>
          </div>)}</div>
          <div className="rental-note-box"><h3>本体だけを数えて、付属品を忘れない</h3><p>コーンならバー・重し、フェンスならベース・連結部材、看板なら枠・重しを確認します。付属品が本体料金に含まれるか、別手配になるかまで見積書にそろえると、納品後の不足を防ぎやすくなります。</p></div>
          <p>このほか、工事用信号機、電光表示板、現場監視カメラ、仮囲い・ゲート、騒音・振動などの計測機器も相談対象です。安全靴や手袋などの個人用保護具まで一律に借りられるわけではないため、用途を伝えて取扱いを確認してください。</p>
          <p className="rental-note">用品・写真の出典：<RentalLink placement="equipment_source" anchor="lineup">グリーンクロス「安全用品・保安用品レンタル」</RentalLink>（2026年11月10日確認）。</p>
        </section>

        <section id="cost" className="rental-section">
          <p className="rental-eyebrow">03 / 料金を比較する</p><h2>安全用品レンタルの料金は、<br />「本体価格」より「現場にそろう総額」で</h2>
          <p>同じカラーコーンでも、仕様・数量・期間・納品先が変われば見積もり条件は変わります。グリーンクロスのレンタルページは<strong>一律の料金表を載せず、条件を確認して見積もる方式</strong>です。他社や別の販売窓口に掲載された料金を、そのまま当てはめないようにしましょう。</p>
          <div className="rental-formula"><span>比較するときの考え方</span><p>本体・付属品のレンタル料<br /><b>＋</b> 配送・回収費 <b>＋</b> 設置・撤去費<br /><b>＋</b> 条件に応じた追加費用</p><small>各費用の有無・内訳・税込／税別を、同じ条件にそろえて確認します。</small></div>
          <div className="rental-table-scroll" role="region" aria-label="レンタル見積もりの確認項目" tabIndex={0}><table><caption>見積書で比較したい6つの項目</caption><thead><tr><th scope="col">項目</th><th scope="col">そろえる条件</th><th scope="col">見落としやすい点</th></tr></thead><tbody>
            <tr><th scope="row">本体・機種</th><td>寸法、反射・電源などの仕様、数量</td><td>同じ商品名でも性能・構成が違う</td></tr>
            <tr><th scope="row">付属品</th><td>バー、重し、ベース、金具、充電器など</td><td>本体料金に含まれるとは限らない</td></tr>
            <tr><th scope="row">利用期間</th><td>納品日・使用日・回収日、課金の起算と終了</td><td>使用日数と課金日数が異なる場合がある</td></tr>
            <tr><th scope="row">配送・回収</th><td>住所、車両条件、時間帯、往復の手配</td><td>少量でも運搬費の影響が大きくなり得る</td></tr>
            <tr><th scope="row">設置・撤去</th><td>誰が、どこまで行うか</td><td>納品と設置は同じ作業ではない</td></tr>
            <tr><th scope="row">変更・事故</th><td>延長、中止、破損、紛失の条件</td><td>当初の見積額に含まれない追加費用</td></tr>
          </tbody></table></div>
          <h3>少量・短期ほど、往復の運搬条件を先に</h3><p>本体料金が小さくても、配送・回収の負担は残ります。引取りが可能なら自社車両で運べる寸法・重量か、必要な人手と移動時間も含めて比較しましょう。安さだけで車載や荷下ろしの無理をしないことが大切です。</p>
          <h3>「1か月なら買う方が得」と一律には決められない</h3><p>分岐点は購入単価とレンタル条件だけでなく、今後の使用回数、倉庫、運搬、清掃・点検の負担でも変わります。まず予定する工期で見積もりを取り、延長した場合の費用も確認すると判断しやすくなります。</p>
          <Cta placement="cost" title="現場の条件で、レンタル費用を確認する">品目・数量・期間・納品先が分かる範囲で相談できます。付属品と配送・回収も含めて、必要な条件をそろえましょう。</Cta>
        </section>

        <section id="rent-or-buy" className="rental-section">
          <p className="rental-eyebrow">04 / 買うか、借りるか</p><h2>購入とレンタルは、<br />品目ごとに使い分けてもよい</h2>
          <p>すべてを借りる、すべてを買う、と決める必要はありません。いつも使うコーンは保有し、繁忙期の追加分だけ借りる。看板は現場ごとの表示に合わせて相談し、期間限定の機器を借りる。こうした組み合わせも候補になります。</p>
          <div className="rental-compare"><div><span>レンタルを検討</span><h3>期間・数量が限られる</h3><ul><li>短期工事、単発のイベントで使う</li><li>現場によって必要数量が変わる</li><li>使用後の保管場所を持ちたくない</li><li>特定の期間だけ機器が必要</li></ul></div><div><span>購入を検討</span><h3>何度も使う常備品</h3><ul><li>年間を通して一定数を使う</li><li>保管・点検・運搬の体制がある</li><li>仕様を統一して繰り返し使いたい</li><li>使用頻度を踏まえた総費用を抑えたい</li></ul></div></div>
          <p>レンタルでも現場での使用前点検や適切な管理は必要です。また、購入では破損時の補充や廃棄も自社側の負担になります。<strong>使用期間・数量・保管場所・管理する人手</strong>の4点をそろえて検討しましょう。</p>
          <p>購入するコーンの仕様を先に整理したい方は、<Link href="/articles/color-cone-types-sizes">カラーコーンの種類とサイズの選び方</Link>も参考にしてください。</p>
        </section>

        <section id="scenes" className="rental-section">
          <p className="rental-eyebrow">05 / 現場別に整理</p><h2>工事・イベントで、<br />相談前に整理しておきたいこと</h2>
          <div className="rental-scenes">
            <div><span>CASE 01</span><h3>道路工事・夜間工事</h3><p>規制計画をもとに、予告看板・区画用品・方向指示・夜間の注意喚起を分けて整理。信号機や電光表示板は電源・運用条件も伝えます。</p><p><strong>伝える情報：</strong>区間、昼夜の使用時間、表示文言、電源、運搬・設置担当。</p></div>
            <div><span>CASE 02</span><h3>イベント・仮設駐車場</h3><p>歩行者と車両の動線、待機列、開口、搬入・撤収の時間を整理。コーンやフェンスをどこに使うかが共有できる簡単な図があると便利です。</p><p><strong>伝える情報：</strong>会場図、区画の長さ、入退場口、来場時間帯、夜間利用、雨天時の予定。</p></div>
            <div><span>CASE 03</span><h3>工場・倉庫の一時的な作業区画</h3><p>設備の入替え・補修の期間だけ区画をつくる場合。作業車両、歩行者、搬入経路を整理し、通路を塞がない構成を検討します。</p><p><strong>伝える情報：</strong>作業範囲、出入口、路面、通行対象、稼働時間、撤去予定。</p></div>
          </div>
          <div className="rental-note-box"><h3>数量整理の例：コーンとバーは同じ本数とは限らない</h3><p>仮に、一直線に並べた11本のコーンを、隣り合う区間ごとにバーでつなぐなら、区間は10か所なのでバーは10本です。途中に出入口を設ける、角を曲がる、区画を分ける場合は数が変わります。</p><p>これは数え方の例で、設置間隔や安全基準を示すものではありません。実際には区画図・採用品の寸法・現場の計画に合わせて必要数を確認します。</p></div>
          <p className="rental-note">用品をそろえるだけで、交通規制や会場の安全計画が完成するわけではありません。設置・運用は現場責任者の計画、関係者との調整、各用品の取扱説明書に沿って進めてください。</p>
        </section>

        <section id="checklist" className="rental-section">
          <p className="rental-eyebrow">06 / そのまま使える準備リスト</p><h2>安全用品レンタルの<br />見積もり依頼テンプレート</h2>
          <p>品名や数量が未定でも、<strong>「どこで・何に・いつ使うか」</strong>は相談の手掛かりになります。以下を分かる範囲で埋め、相談先のフォームやメールに貼り付けて使ってください。不明な項目は「相談」として残して構いません。</p>
          <RentalInquiryTemplate />
          <h3>依頼から返却までの流れ</h3><ol className="rental-steps"><li><strong>現場条件を伝える</strong><span>用途、場所、日程、候補用品・数量を共有します。</span></li><li><strong>仕様と費用を確認する</strong><span>付属品、配送回収、設置撤去、変更時の条件を含めて確認します。</span></li><li><strong>納品時に内容を照合する</strong><span>品目・数量・付属品・状態を確認し、不足や不具合は貸出元へ連絡します。</span></li><li><strong>変更は早めに連絡し、返却する</strong><span>延長や回収日の変更は事前に相談。返却時の集約場所・清掃の範囲も確認します。</span></li></ol>
          <Cta placement="checklist" title="整理できた条件から、相談を始める">グリーンクロスでは購入・レンタルを同じ窓口で相談できます。取扱用品を確認し、現場に合う構成と見積もりを相談してください。</Cta>
        </section>

        <section id="faq" className="rental-section"><p className="rental-eyebrow">07 / よくある質問</p><h2>安全用品レンタルの疑問</h2><div className="rental-faq">{faq.map((f) => <details key={f.q}><summary>{f.q}<span aria-hidden="true">＋</span></summary><p>{f.a}</p></details>)}</div></section>
        <section className="rental-section rental-summary"><h2>必要なものを、無理なく手配するために</h2><p>短期の安全用品レンタルは、用品の単価だけでなく、付属品・運搬・設置・返却までをまとめて考えると比較しやすくなります。買うか借りるか迷う場合も、現場条件をそろえて相談することから始めましょう。</p><RentalLink placement="summary" className="rental-button rental-button-dark">グリーンクロスのレンタル案内を見る ↗</RentalLink></section>
        <aside className="rental-related" aria-label="関連記事"><h2>用品選びを、もう少し詳しく</h2><Link href="/articles/color-cone-types-sizes">カラーコーンの種類とサイズを比較する <span>→</span></Link><Link href="/articles/safety-walkway-setup">安全通路・作業区画の作り方を確認する <span>→</span></Link><Link href="/articles/color-cone-selection">駐車場・イベント向けのコーンを選ぶ <span>→</span></Link></aside>
        <footer className="rental-sources"><h2>出典・掲載情報について</h2><p>取扱品目、個別見積もり、短期・少量相談、購入との併用に関する記述は、<RentalLink placement="source">グリーンクロス「安全用品・保安用品レンタル」</RentalLink>を2026年11月10日に確認して作成しました。写真も同ページ掲載の画像を使用しています。構成例・数量の数え方・依頼テンプレートは編集部による整理です。</p><p>価格・在庫・貸出期間・配送回収・設置対応は、用品と現場条件によって異なります。最新の条件は相談先でご確認ください。</p><Link href="/about">運営者情報・メディアについて →</Link></footer>
      </article>
    </main>
    <SiteFooter />
  </>;
}
