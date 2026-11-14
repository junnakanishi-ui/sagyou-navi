import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { MarathonLink } from "@/components/article/marathon-link";
import { MarathonChecklist } from "@/components/article/marathon-checklist";
import { MARATHON_PATH } from "@/lib/marathon-links";
import "../safety-supplies-rental-guide/rental-guide.css";
import "./marathon.css";

const TITLE = "マラソン大会の運営備品チェックリスト｜コーン・フェンス・案内看板の準備";
const DESCRIPTION = "マラソン大会の主催者・運営担当者向けに、安全保安用品を使う場所別に整理。コーンとフェンスの使い分け、案内看板の原稿、必要数の確認、レンタル・納品・撤去の打ち合わせまで、準備の順番に沿って解説します。";
const URL = `https://sagyou-navi.com${MARATHON_PATH}`;
const IMG = "/images/articles/marathon-event-safety-equipment/";
const DATE = "2026-11-14";
const POLICE = "https://www.keishicho.metro.tokyo.lg.jp/tetsuzuki/kotsu/road_permission.html";
const HIMEJI = "https://himeji-marathon.jp/wp-content/uploads/2025/04/03-1_Article-reference.pdf";

export const metadata: Metadata = {
  title: { absolute: `${TITLE}｜作業用品ナビ` },
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE, description: DESCRIPTION, type: "article", url: URL,
    siteName: "作業用品ナビ", locale: "ja_JP",
    publishedTime: `${DATE}T09:00:00+09:00`, modifiedTime: `${DATE}T09:00:00+09:00`,
    images: [{ url: `${IMG}course-crossing.webp`, alt: "マラソン大会の沿道区画と横断場所の使用イメージ" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [`${IMG}course-crossing.webp`] },
};

const TOC = [
  ["start", "用品を選ぶ前に整理すること"],
  ["locations", "場所別の備品チェックリスト"],
  ["boundary", "コーン・フェンスの使い分けと数量"],
  ["signs", "案内看板で伝えること"],
  ["rental", "レンタル・納品・撤去の確認"],
  ["checklist", "発注前の最終確認と相談先"],
] as const;

const AREAS = [
  ["受付・スタート整列", "コーン、バー、区画フェンス、受付・ブロック案内", "入口、列の最後尾、受付後の進路、一般来場者の通路"],
  ["沿道・コース分岐", "区画用品、進行方向の案内、距離表示、規制の予告看板", "横断場所、沿道施設の出入口、警備員の位置、設置・解除時刻"],
  ["給水所", "テーブル、給水所の表示、ごみ回収用の容器・案内", "走り続ける人の進路、受け取る人の動き、補給品を運ぶ経路"],
  ["フィニッシュ・手荷物返却", "フェンス、コーン、給水・手荷物・出口の案内", "立ち止まる場所、列が延びる方向、応援者との合流場所"],
  ["本部・救護所", "本部・救護の表示、必要に応じたテント、照明、配線保護用品", "救護への通路、連絡方法、電源、夜明け前・撤収時の明るさ"],
  ["臨時駐車場・送迎場所", "コーン、バー、駐車場・歩行者入口の案内", "車両と歩行者の経路、降車場所、満車時の案内、帰りの動き"],
];

const FAQ = [
  { q: "マラソン大会のフェンスは、レンタルできますか？", a: "グリーンクロスでは、マラソン大会の沿道フェンスや区画用品のレンタルを相談できます。区間の長さ、設置面、開口、開催地・日程を伝え、必要な種類と数量を確認してください。在庫や設置・撤去の対応範囲は個別の確認が必要です。" },
  { q: "参加人数からコーンやフェンスの数を決められますか？", a: "人数だけでは決められません。同じ人数でも、会場の広さ、コースの形、列のつくり方、開口の数によって必要数は変わります。区間ごとに配置する用品を整理し、採用品の寸法と設置条件を照合して数量を確認します。" },
  { q: "早朝の設置や大会当日の撤去も頼めますか？", a: "グリーンクロスの大会向けページでは、早朝設置・当日撤去の相談を受け付けています。可否や費用は所在地、交通規制、搬入経路、数量、作業体制などで変わります。レンタル料金に自動で含まれる作業ではないため、希望する時間と範囲を伝えましょう。" },
  { q: "コース図や必要数がまだ決まっていなくても相談できますか？", a: "相談できます。開催地と日程、会場の使い方、困っている場所を伝え、分かる範囲の図面や写真を用意してください。未確定の区間はその旨を伝えると、確定している手配と今後の確認事項を分けて相談できます。" },
];

function Cta({ placement, title, children }: { placement: string; title: string; children: ReactNode }) {
  return (
    <aside className="rental-cta">
      <div><span className="rental-eyebrow">グリーンクロスの大会向けサービス</span><h2>{title}</h2><p>{children}</p></div>
      <MarathonLink placement={placement} className="rental-button">大会用品の対応内容を見る <span aria-hidden="true">↗</span></MarathonLink>
    </aside>
  );
}

export default function MarathonEventSafetyEquipment() {
  const jsonLd = [
    { "@context": "https://schema.org", "@type": "Article", headline: TITLE, description: DESCRIPTION,
      image: [`https://sagyou-navi.com${IMG}course-crossing.webp`], datePublished: `${DATE}T09:00:00+09:00`, dateModified: `${DATE}T09:00:00+09:00`, mainEntityOfPage: URL,
      author: { "@type": "Organization", name: "作業用品ナビ編集部", url: "https://sagyou-navi.com/about" },
      publisher: { "@type": "Organization", name: "株式会社トレード", url: "https://trade-sign.jp/" } },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://sagyou-navi.com" },
      { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://sagyou-navi.com/articles" },
      { "@type": "ListItem", position: 3, name: "マラソン大会の運営備品", item: URL },
    ] },
  ];
  return <>
    <SiteHeader />
    <main className="rental-guide marathon-guide">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <nav className="rental-breadcrumb" aria-label="パンくず"><Link href="/">ホーム</Link><span>/</span><Link href="/articles">記事一覧</Link><span>/</span><span>マラソン大会の運営備品</span></nav>
      <article>
        <header className="rental-hero">
          <div className="rental-hero-copy">
            <p className="rental-eyebrow">主催者・運営担当者のための準備ガイド</p>
            <h1>マラソン大会の<br />運営備品チェックリスト<span>コーン・フェンス・<br />案内看板の準備</span></h1>
            <p className="rental-hero-lead">何を、どこに、いつまでに。<br />会場図を見ながら進める、安全保安用品の手配。</p>
            <a href="#locations" className="rental-button rental-button-dark">場所別の必要備品を見る ↓</a>
            <p className="rental-meta"><time dateTime={DATE}>2026年11月14日</time> 公開・情報確認<br /><Link href="/about">作業用品ナビ編集部</Link> ・ 約10分</p>
          </div>
          <figure className="rental-hero-photo marathon-hero-image">
            <Image src={`${IMG}course-crossing.webp`} alt="沿道をコーンとバーで区切り、横断場所に開口を残した使用イメージイラスト" fill preload sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 600px" />
            <figcaption>使用イメージ。実際の大会写真・配置設計図ではありません。</figcaption>
          </figure>
        </header>
        <p className="rental-disclosure">運営：株式会社トレード（グリーンクロスグループ）。本記事では、グループの大会用品レンタル・サイン製作サービスをご紹介しています。</p>

        <div className="rental-intro">
          <p>マラソン大会の準備で、コーンやフェンスの見積もりを頼もうとしても、「何本必要か」「どこまで設置を頼めるか」が決まらず、手が止まることがあります。</p>
          <p>最初から用品名と数量をすべて決める必要はありません。まず会場図に、選手が走る場所、応援する人が待つ場所、横断する場所を書き込みます。そのうえで、<strong>境界を示す用品、行き先を伝える看板、運営を支える備品</strong>を場所ごとに整理すると、相談する内容がはっきりしてきます。</p>
          <p>この記事は、大会主催者・実行委員会・運営会社の担当者に向けた、安全保安用品の準備ガイドです。計測システムや参加賞などを含む大会運営全般ではなく、区画・誘導・案内と、その手配を中心に扱います。</p>
        </div>
        <div className="rental-answer">
          <p className="rental-eyebrow">準備は、この順番で進めます</p>
          <ol><li><strong>場所を分ける：</strong>受付、沿道、給水所、フィニッシュ、駐車場。</li><li><strong>人の動きを確認する：</strong>走る、並ぶ、横断する、退場する。</li><li><strong>用品と担当を決める：</strong>本体・付属品・看板に加え、納品から回収まで。</li></ol>
        </div>
        <p className="rental-note">すでに手配先を探している方は、<MarathonLink placement="intro">グリーンクロスのマラソン大会向けサービス</MarathonLink>で、用品レンタル・特注サイン・納品回収の相談内容を確認できます。</p>
        <nav className="rental-toc" aria-label="この記事の目次"><p>この記事で分かること</p><ol>{TOC.map(([id, title], i) => <li key={id}><a href={`#${id}`}><span>0{i + 1}</span>{title}<span aria-hidden="true">↓</span></a></li>)}</ol></nav>

        <section id="start" className="rental-section">
          <p className="rental-eyebrow">01 / 準備の出発点</p>
          <h2>用品を選ぶ前に、会場図に「通る場所」を残す</h2>
          <p>コースを区切るときは、閉じる場所だけでなく、通れるようにしておく場所も先に確認します。地域の方が通る横断場所、沿道施設の出入口、スタッフが補給品を運ぶ経路、救護に使う通路などです。</p>
          <p>例えば、手荷物返却の列をフェンスで整理しても、列の最後尾が出口を塞いでしまうと、別の場所で人が滞留します。「ここに柵を置く」で終わらせず、<strong>その先に人がどちらへ進むか</strong>まで会場図で確かめましょう。</p>
          <ul className="rental-list"><li>選手、応援者、スタッフ、一般通行者が使う経路</li><li>横断・出入りの場所と、そこを案内する担当者</li><li>救護や緊急車両のために確保する経路</li><li>搬入車両が入れる時間と、競技中に立ち入れない区間</li></ul>
          <div className="rental-note-box"><h3>公道を使う大会は、用品発注より前に関係先と相談</h3>
            <p>道路の使い方や交通への影響によって、道路使用許可などの手続き・協議が必要になります。警視庁は東京都内の路上競技会を対象行為の例に挙げ、交通への影響が大きいイベントは申請前に管轄警察署へ相談するよう案内しています。</p>
            <p>開催地の警察署、道路・会場の管理者、警備担当と条件を確認し、その内容に合わせて資材を選びます。必要な書類や期限を、他地域の例だけで判断しないようにしてください。</p>
            <p className="rental-note">出典：<a href={POLICE}>警視庁「道路使用許可申請手続きについて」</a>（東京都の案内）。</p>
          </div>
        </section>

        <section id="locations" className="rental-section">
          <p className="rental-eyebrow">02 / 場所別に洗い出す</p>
          <h2>マラソン大会の運営備品チェックリスト</h2>
          <p>下の表は、会場図と照らし合わせて候補を洗い出すためのものです。すべての大会に同じ備品が必要なわけではありません。必要な箇所だけを拾い、会場や警備・救護の計画に合わせて追加してください。</p>
          <div className="rental-table-scroll" role="region" aria-label="場所別の運営備品一覧" tabIndex={0}>
            <table><caption>安全保安用品を中心とした、場所別の準備例</caption><thead><tr><th scope="col">使う場所</th><th scope="col">備品の候補</th><th scope="col">用品と一緒に確認すること</th></tr></thead>
              <tbody>{AREAS.map(([area, items, check]) => <tr key={area}><th scope="row">{area}</th><td>{items}</td><td>{check}</td></tr>)}</tbody>
            </table>
          </div>
          <p>実際の整理方法として、<a href={HIMEJI}>世界遺産姫路城マラソン2025の資機材・備品等一覧（PDF）</a>では、本部・スタート会場などのエリアと、備品・サインなどの区分を分けて掲載しています。参考になるのはこの分け方です。掲載数量はその大会の条件に基づくため、自分たちの大会の基準数としては使いません。</p>
          <h3>フィニッシュ後の案内も、備品リストに入れる</h3>
          <p>走り終えた選手は、給水、手荷物返却、出口へと移動します。応援者との待ち合わせ場所も近い場合は、行き先が異なる人が同じ場所に集まりやすくなります。配布テーブルや柵だけでなく、分岐の手前で見える案内も用意しましょう。</p>
          <figure className="marathon-figure">
            <Image src={`${IMG}finish-exit.webp`} alt="フィニッシュ後の給水・手荷物返却・出口への動きをフェンスやコーンで整理したイラスト" width={1200} height={800} sizes="(max-width: 1200px) 100vw, 1152px" />
            <figcaption>グリーンクロス掲載の使用イメージ。配置・寸法・必要数を示す図ではありません。実際の通路と区画は運営計画に合わせて検討します。</figcaption>
          </figure>
          <h3>給水所・救護所は、運営する人と一緒に確認する</h3>
          <p>給水所では、走り続ける人の進路と、飲み物を受け取る人の動き、スタッフが補充する経路を確認します。使い終えたカップの回収場所も、通路と合わせて検討したい項目です。</p>
          <p>救護所では、担当者と表示・電源・連絡方法・搬送経路を確認します。医療体制やAEDの配置・運用は救護計画で別途決める事項です。テントや看板の手配だけで、救護の準備が整うわけではありません。</p>
        </section>

        <section id="boundary" className="rental-section">
          <p className="rental-eyebrow">03 / 区画用品の選び方</p>
          <h2>カラーコーンとフェンスは、何を区切るかで選ぶ</h2>
          <p>「参加人数が少ないからコーンで十分」「フェンスなら何でも安全」とは判断できません。境界を知らせたいのか、人の進路を分けたいのか、人が集中する場所への対策が必要なのかで、選ぶ用品と設置方法が変わります。</p>
          <div className="rental-product-grid">
            <div className="rental-product">
              <div className="rental-product-image"><Image src="/images/articles/safety-supplies-rental-guide/cone.jpg" alt="反射帯付きのヘビーコーンの商品例" fill sizes="(max-width: 639px) 90vw, (max-width: 1023px) 45vw, 368px" /></div>
              <div className="rental-product-copy"><span className="rental-product-tag">境界・入口の目印</span><h3>カラーコーン</h3><p>区画の位置や列の入口を知らせる候補。高さ、色、反射仕様、重さ、路面との相性を確認します。</p><p className="rental-product-check"><strong>手配時に確認</strong>重しが必要か、付属するか。薄暗い時間に設置・撤収する場合は、その時間帯の見え方も確認します。</p></div>
            </div>
            <div className="rental-product">
              <div className="rental-product-image"><Image src={`${IMG}cone-bar.jpg`} alt="両端にリングが付いたアルミグリーンバーの商品例" fill sizes="(max-width: 639px) 90vw, (max-width: 1023px) 45vw, 368px" /></div>
              <div className="rental-product-copy"><span className="rental-product-tag">境界を連続して示す</span><h3>コーンバー</h3><p>コーンの間をつないで境界を見せる用品。横断場所など、開けておく区間を先に整理します。</p><p className="rental-product-check"><strong>手配時に確認</strong>長さ、リングとコーンの適合、必要本数。バーを着脱する担当やタイミングも決めます。</p></div>
            </div>
            <div className="rental-product">
              <div className="rental-product-image"><Image src={`${IMG}plastic-fence.jpg`} alt="プラスチック製区画フェンスS-1の商品例" fill sizes="(max-width: 639px) 90vw, (max-width: 1023px) 45vw, 368px" /></div>
              <div className="rental-product-copy"><span className="rental-product-tag">列・エリアを区別する</span><h3>区画フェンス</h3><p>手荷物返却の列や関係者エリアなどを分ける候補。高さや幅だけでなく、支持・連結方法まで確認します。</p><p className="rental-product-check"><strong>手配時に確認</strong>脚やベースが通路に出る範囲、連結部材、設置面、風を受ける条件。</p></div>
            </div>
          </div>
          <p className="rental-note">写真はグリーンクロス掲載の商品例です。貸出対象・仕様・在庫は開催地と日程を伝えて確認してください。</p>
          <div className="rental-note-box"><h3>区画用の柵と、防護設備は分けて考える</h3><p>一般的なコーン・バー・区画フェンスを、車両の突入や群衆の圧力を止める設備として扱うことはできません。人が集中する場所や車両の進入リスクがある場所では、警備担当と必要な性能を整理し、適合する設備を確認してください。</p></div>
          <h3>必要数は「参加人数」ではなく「設置区間」から確認</h3>
          <p>コース全体の距離を、コーンの設置間隔で単純に割ると、交差点・開口・折り返し・二重に区切る部分などを見落とします。区間ごとに、どちら側を何で区切るかを図面に記入してから数えましょう。</p>
          <p>例えば、一直線に置いた11本のコーンを隣同士すべてバーでつなぐなら、つなぐ区間は10か所なのでバーは10本です。途中に横断口を残す場合は構成が変わります。これは数え方の例で、推奨する設置間隔を示すものではありません。</p>
          <p>フェンスも、区間の長さだけでなく、製品の有効幅、曲がり角、開口、支持部材を含めて確認します。必要数が未確定なら、図面と区間の長さを貸出元に渡して相談する方法があります。</p>
          <Cta placement="equipment" title="コース図から、必要な用品を相談する">
            グリーンクロスでは、沿道フェンス・コーンなどの用品と、会場案内の製作を相談できます。数量が決まっていない区間も、そのまま相談内容として伝えられます。
          </Cta>
        </section>

        <section id="signs" className="rental-section">
          <p className="rental-eyebrow">04 / 案内看板の準備</p>
          <h2>看板は「見る人」と「次の行動」を一組で考える</h2>
          <p>受付、手荷物、給水、救護、出口。大会では似た案内を何枚も使いますが、必要な情報は場所によって違います。看板を注文するときは、文言の一覧だけでなく、誰がどちらから見る看板なのかも整理しましょう。</p>
          <ul className="rental-list">
            <li><strong>会場へ向かう人：</strong>駐車場・受付・参加種目の整列場所を案内する。</li>
            <li><strong>コースを走る選手：</strong>分岐、距離、給水所など、競技運営で決めた情報を伝える。</li>
            <li><strong>走り終えた選手：</strong>給水・手荷物返却・出口を順に案内する。</li>
            <li><strong>沿道の一般通行者：</strong>規制時間や迂回先など、関係先と確認した内容を伝える。</li>
          </ul>
          <h3>看板の原稿は、設置場所ごとに番号を付けて管理する</h3>
          <p>例えば「F-01：フィニッシュ後の分岐／選手向け／手荷物返却→」のように、図面の位置と看板番号を結び付けます。同じ「手荷物返却」でも、置く場所によって矢印が変わるためです。</p>
          <p>片面か両面か、見る距離、屋外での使用、枠・脚・重し、原稿の支給方法、校正の担当と期限を確認します。距離表示や交通規制の文言は、コース・規制計画の確定内容と照合してください。</p>
          <div className="rental-note-box"><h3>「大きく印刷すればよい」とは限らない</h3><p>文字が読めても、分岐を過ぎた場所にあれば案内として間に合いません。列やテントで隠れないか、反対側から来る人にはどう見えるかも現地で確認します。看板の大きさと固定方法は一緒に検討し、フェンスに取り付ける場合も風の影響を含めて適合を確認しましょう。</p></div>
          <p>グリーンクロスでは、<MarathonLink placement="signs">距離表示・キロポスト、スタート・フィニッシュ案内、協賛看板などの製作</MarathonLink>も相談できます。レンタル用品と製作物を分けて伝えると、費用と納期を確認しやすくなります。</p>
        </section>

        <section id="rental" className="rental-section">
          <p className="rental-eyebrow">05 / 手配の段取り</p>
          <h2>レンタルは、納品先と撤去の時間まで決めて比較する</h2>
          <p>年に一度の大会や、一時的に大量の区画用品が必要な場合は、レンタルが選択肢になります。一方で、毎回使う小物や大会名入りの製作物などは購入と組み合わせて検討できます。どちらが安いかは、本体料金だけでなく、運搬・保管・管理を含む条件次第です。</p>
          <h3>「大会会場に一式納品」で済ませない</h3>
          <p>長いコースでは、本部に届いても、沿道の必要な場所へ運び直す時間と人手がかかります。複数地点へ納品を希望する場合は、地点ごとの住所・地図、車両が入れる時間、荷下ろし場所、受取担当を伝えます。</p>
          <p>撤去も同じです。規制解除や来場者の退場に合わせ、誰の判断で、どの区間から片付けるのかを主催者・警備担当と決めます。回収車が入れる時間と、返却品を集める場所まで打ち合わせておきましょう。</p>
          <div className="rental-table-scroll" role="region" aria-label="見積もり比較の確認項目" tabIndex={0}>
            <table><caption>見積もりを比べるときにそろえる条件</caption><thead><tr><th scope="col">項目</th><th scope="col">確認する内容</th></tr></thead><tbody>
              <tr><th scope="row">本体・付属品</th><td>品名、仕様、数量、バー・重し・ベース・金具などの範囲</td></tr>
              <tr><th scope="row">利用日程</th><td>大会当日だけでなく、前日納品・翌日回収を含む課金対象期間</td></tr>
              <tr><th scope="row">運搬・作業</th><td>納品・回収の地点数、時間指定、荷下ろし、設置・撤去の担当と費用</td></tr>
              <tr><th scope="row">看板製作</th><td>原稿作成・校正・印刷・枠や脚・納期・修正の扱い</td></tr>
              <tr><th scope="row">予定変更</th><td>中止、日程変更、追加・減数、破損・紛失の連絡期限と費用</td></tr>
            </tbody></table>
          </div>
          <p>暑さ対策のテントや送風・ミスト機器も借りる場合は、固定方法、電源・給水、天候時の運用まで確認します。機材の設置とは別に、休憩や体調不良時の連絡など、主催者側の運用も決めておく必要があります。</p>
          <p>費用比較の基本は、<Link href="/articles/safety-supplies-rental-guide">安全用品レンタルの料金・購入比較ガイド</Link>でも詳しく整理しています。</p>
        </section>

        <section id="checklist" className="rental-section">
          <p className="rental-eyebrow">06 / 発注前の確認</p>
          <h2>用品と、当日の担当が決まっているかを確かめる</h2>
          <p>品名と数が決まったら、設置・点検・撤去を誰が行うかも確認します。以下の項目を打ち合わせのメモとして使い、未確認の内容を次の相談につなげてください。</p>
          <MarathonChecklist />
          <h3>相談するときは、この5点があると伝わりやすい</h3>
          <ol className="rental-steps">
            <li><strong>開催地・日程</strong><span>大会名、開催場所、設置希望日、使用日、撤去・回収希望日。</span></li>
            <li><strong>会場図・コース図</strong><span>区切りたい区間、出入口、横断場所、納品地点。未確定の部分も分かるようにします。</span></li>
            <li><strong>用品の候補と数量</strong><span>分かる範囲で構いません。「沿道のこの区間を区切りたい」という用途でも相談の材料になります。</span></li>
            <li><strong>看板の内容</strong><span>文言、矢印、寸法、枚数、ロゴや原稿データの有無、希望納期。</span></li>
            <li><strong>依頼したい作業</strong><span>レンタルのみか、配送・設置・撤去までか。時間帯と現地の受渡し担当も共有します。</span></li>
          </ol>
          <Cta placement="planning" title="用品・看板・納品回収を、まとめて相談したい方へ">
            グリーンクロスのマラソン大会向けページで、沿道の区画用品、会場サインの製作、納品・回収・設営相談の対応内容を確認できます。開催地と日程、分かる範囲の会場条件からご相談ください。
          </Cta>
          <p className="rental-note">料金、貸出対象、在庫、対応時間帯、設置・撤去の範囲は、用品と会場条件によって異なります。掲載ページの案内を確認のうえ、個別にお見積もりください。</p>
        </section>

        <section id="faq" className="rental-section"><h2>よくある質問</h2><div className="rental-faq">{FAQ.map(({ q, a }) => <details key={q}><summary>{q}<span aria-hidden="true">＋</span></summary><p>{a}</p></details>)}</div></section>
        <section className="rental-section rental-summary"><h2>まずは会場図に、必要な場所を書き込むところから</h2><p>安全保安用品の手配は、商品名を並べるだけでは進めにくいものです。会場を場所ごとに分け、人が通る・並ぶ・立ち止まる位置を整理すると、必要な用品と相談したいことが見えてきます。数量や機種が未定でも、図面と用途から相談を始められます。</p><MarathonLink placement="summary" className="rental-button rental-button-dark">マラソン大会の用品・手配を相談する ↗</MarathonLink></section>
        <aside className="rental-related" aria-label="関連記事"><h2>用品選びを詳しく調べる</h2><Link href="/articles/safety-supplies-rental-guide">安全用品レンタルの料金・短期利用の確認点 →</Link><Link href="/articles/color-cone-types-sizes">カラーコーンの種類・サイズの違い →</Link><Link href="/articles/plastic-chain-vs-cone-bar">プラチェーンとコーンバーの違い →</Link></aside>
        <footer className="rental-sources"><h2>出典・編集方針</h2>
          <ul className="marathon-source-list">
            <li><MarathonLink placement="source">グリーンクロス「マラソン・スポーツ大会の用品レンタル・サイン製作」</MarathonLink>：取扱用品、商品写真・使用イメージ、看板製作、納品回収・設営相談の範囲を確認。</li>
            <li><a href={POLICE}>警視庁「道路使用許可申請手続きについて」</a>：公道利用に関する記述の参照元。東京都の案内であり、開催地の条件は管轄窓口へ確認してください。</li>
            <li><a href={HIMEJI}>世界遺産姫路城マラソン2025 資機材・備品等一覧（PDF）</a>：エリア別に備品を整理する方法の参考資料。数量を他大会の基準として転用していません。</li>
          </ul>
          <p>いずれも2026年11月14日確認。本文の確認リスト・数え方の例は編集部による整理です。掲載のイラストは用途を示すもので、実在する大会の施工実績や安全性を保証する設計図ではありません。</p>
          <p>本記事は用品手配の参考情報です。交通規制・警備・救護の計画や、個々の用品の取扱説明書に代わるものではありません。</p><Link href="/about">運営者情報 →</Link>
        </footer>
      </article>
    </main>
    <SiteFooter />
  </>;
}
