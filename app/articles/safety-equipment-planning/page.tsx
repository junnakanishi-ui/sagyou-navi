import Image from "next/image";
import Link from "next/link";
import { SafetyGuide, GuideSection, GuideTable, GuideCta, safetyGuideMetadata } from "@/components/article/safety-guide";
import { SafetyGuideLink } from "@/components/article/safety-guide-link";
import { SAFETY_GUIDES, type SafetyGuideKey } from "@/lib/safety-guides";

export const metadata = safetyGuideMetadata("hub");
const sections = [["choose", "相談と購入の使い分け"], ["guides", "工事・イベントの準備ガイド"], ["prepare", "相談前にそろえる情報"], ["buy", "仕様が決まった用品を購入"], ["faq", "よくある質問"]] as const;
const guideKeys: SafetyGuideKey[] = ["construction", "fence", "queue", "parking", "signs"];
const products = [
  { id: "1124850038", name: "BURTLE 防水防寒ブルゾン 7610-47", tag: "防寒作業着", image: "/images/articles/safety-equipment-planning/1124850038.jpg", description: "着用する人のサイズと作業環境から選ぶ防寒ブルゾン。色・サイズの選択肢と納期を商品ページで確認できます。", note: "雨への備え、重ね着、動きやすさも合わせて検討します。", href: "/articles/genba-boukan-taisaku", related: "現場の防寒対策を読む" },
  { id: "6300046023", name: "シェアする防災セット ベーシック30人分", tag: "事業所の防災用品", image: "/images/articles/safety-equipment-planning/6300046023.jpg", description: "1人分ずつ配りやすい個包装の防災セット。携帯トイレやアルミポンチョなど、公式掲載のセット内容を確認して選べます。", note: "これだけで30人分の必要な備蓄がすべてそろうわけではありません。水・食料・トイレ等の必要量は別途確認します。", href: "/articles/corporate-disaster-stockpile-list-guide", related: "企業・施設の備蓄品リストを読む" },
  { id: "1148010208", name: "バイオマス横断幕（小） 安全第一", tag: "定型の安全標語", image: "/images/articles/construction-safety-banner-guide/1148010208.jpg", description: "横1,800×縦450mmの既製横幕。表示文言とサイズが合う場合は、商品仕様を確認して購入できます。", note: "取付用のひも等は付属しません。取付先と必要な部材も確認してください。", href: "/articles/construction-safety-banner-guide", related: "横幕・たれ幕の選び方を読む" },
];

export default function Page() {
  return <SafetyGuide guideKey="hub" sections={sections}
    summary={["工事や会場全体の品目・数量・納品条件を整理したいときは、一括相談から進める。", "定型品の仕様と数量が決まっているなら、ECの商品ページで購入条件を確認する。", "同じ現場でも、常備品は購入、期間限定の機材はレンタル、固有の表示は製作と使い分けられる。"]}
    sources={[
      { title: "グリーンクロス：安全用品の販売・レンタル・特注看板", url: "https://gc-anzen.com/" },
      { title: "グリーンクロス：用品の購入・一括見積り", url: "https://gc-anzen.com/quote" },
      { title: "グリーンクロス：イベント向け用品・一括手配", url: "https://gc-anzen.com/events" },
      ...products.map(p => ({ title: `GCセレクト：${p.name}`, url: `https://www.gc-select.com/products/${p.id}` })),
    ]}
    faq={[
      { q: "安全用品と保安用品は、どちらの名前で相談すればよいですか？", a: "呼び方だけにこだわらず、使う場所と目的を伝えると確認しやすくなります。このガイドでは、工事やイベントで使う区画・誘導・表示などの用品を中心に扱っています。保護具や季節用品なども必要なら、別項目として相談に含めてください。" },
      { q: "何が必要か分からない段階でも相談できますか？", a: "グリーンクロスは、品名・数量が未定の段階からの相談を案内しています。工事やイベントの内容、場所、日程、図面や写真の有無を伝え、用品の選定で相談したいことを整理しましょう。" },
      { q: "購入とレンタルを混ぜて手配してもよいですか？", a: "同じ現場でも品目ごとに使い分けられます。保管や繰り返し使用を考えて購入する品と、一定期間だけ必要な品を分けて相談してください。実際の取扱い・貸出可否・在庫・配送条件は品目ごとに確認します。" },
    ]}
    related={[
      { href: "/articles/office-emergency-blanket-selection", title: "購入する備蓄毛布・アルミシートを写真と収納寸法で選ぶ" },
      { title: "短期レンタルの料金と購入との比較", href: "/articles/safety-supplies-rental-guide" },
      { title: "マラソン大会の運営備品チェックリスト", href: "/articles/marathon-event-safety-equipment" },
      { title: "カラーコーンの種類・サイズを調べる", href: "/articles/color-cone-types-sizes" },
    ]}>
    <GuideSection id="choose" number="01 / 手配方法" title="現場の組み合わせから相談するか、決まった品を買うか">
      <p>用品を手配する場面には、大きく分けて2つあります。必要な品目や数量を含めて検討する場面と、仕様が決まった商品を補充する場面です。予算だけでなく、誰が選定・設置・管理をするかを基準にすると、進め方を決めやすくなります。</p>
      <GuideTable caption="今の準備状況から手配方法を選ぶ" headers={["準備の状況", "進め方", "用意すると役立つ情報"]} rows={[
        ["工事の保安用品を一式そろえたい", "グリーンクロスで一括見積もり", "工種、図面、手持ち品、搬入日、納品条件"],
        ["イベント会場を区切り、案内も作りたい", "区画用品・サイン・納品回収をまとめて相談", "会場図、日程、入退場と搬入の動き"],
        ["短期間だけ機材を増やしたい", "対象品と条件を確認してレンタルを検討", "使用期間、必要数量、配送・回収の希望"],
        ["現場名入りの看板が必要", "原稿・設置条件から製作を相談", "文言、寸法、写真、原稿確認担当、使用日"],
        ["防寒着や備蓄品を指定数購入したい", "GCセレクトで商品仕様と購入条件を確認", "型式・サイズ、数量、納期、配送先"],
      ]} />
      <p>例えばコーンは自社の保有品を使い、足りないフェンスを借り、現場名入りの看板を製作することもあります。全部を同じ方法にそろえる必要はありません。自社でできる部分と、選定や作業を相談したい部分を分けて伝えましょう。</p>
    </GuideSection>
    <GuideSection id="guides" number="02 / 用途から探す" title="いま準備している場所に合うガイドへ">
      <p>各ガイドには、必要な条件を整理する比較表と相談メモを掲載しています。商品名がまだ決まっていない場合は、使う場面から選んでください。</p>
      <div className="safety-guide-grid">{guideKeys.map((key, i) => { const g = SAFETY_GUIDES[key]; return <div className="safety-guide-card" key={key}><span>準備ガイド {String(i + 1).padStart(2, "0")}</span><h3>{g.shortTitle}</h3><p>{g.description}</p><Link href={`/articles/${g.slug}`}>準備の進め方を読む →</Link></div>; })}
        <div className="safety-guide-card"><span>大会の運営</span><h3>マラソン大会の備品チェックリスト</h3><p>受付、コース、交差する場所、ゴール後の案内まで。大会運営で手配する用品と、コーン・フェンス・看板の確認点を整理します。</p><Link href="/articles/marathon-event-safety-equipment">大会の準備を読む →</Link></div>
      </div>
      <p>借りるか買うかを費用から検討したい場合は、<Link href="/articles/safety-supplies-rental-guide">安全用品レンタルの料金・短期利用ガイド</Link>をご覧ください。本体代だけでなく、付属品、運搬、保管や回収まで含めて比較できます。</p>
    </GuideSection>
    <GuideSection id="prepare" number="03 / 相談の準備" title="最初の相談は、場所・日程・依頼する範囲から">
      <p>数量が未定でも、場所と日程が分かれば確認できることがあります。まずは所在地、使う期間、何のための用品かを整理しましょう。そのうえで、品目の選定だけか、納品や設置・撤去も含めて相談したいかを伝えます。</p>
      <ol className="rental-steps"><li><strong>使う場所を共有する</strong><span>現場図、会場図、写真、設置面、来場者や作業車両の経路など。</span></li><li><strong>使う日と受け取る日を分ける</strong><span>搬入できる時間帯、受入担当、回収予定、工程や天候による変更の可能性。</span></li><li><strong>手持ち品と相談したい部分を分ける</strong><span>既存品の仕様・状態、足りない品、数量や材質から検討したい品。</span></li><li><strong>見積もりの内訳を確認する</strong><span>本体、部材、製作、配送回収、設置撤去、予定変更時の条件。</span></li></ol>
      <p>グリーンクロスでは購入・レンタル・製作の相談と、納品・回収の条件確認を案内しています。すべての品や地域で同じ対応になるわけではないため、必要な作業を具体的に伝えて確認してください。現場の安全計画や会場の運営計画は、責任者・管理者・警備担当などと並行して進めます。</p>
      <GuideCta guideKey="hub" placement="consultation" title="工事・会場の用品を、一つの窓口で相談する">必要な品が決まっている方も、何をそろえるかから相談したい方も、用途と日程から進められます。</GuideCta>
    </GuideSection>
    <GuideSection id="buy" number="04 / 仕様から購入" title="必要な商品が決まっているなら、GCセレクトへ">
      <p>サイズが決まった作業着、内容を確認した防災用品、定型の安全標語などは、商品ページで購入条件を比較できます。次の3点は購入向けの一例です。現場全体の手配で仕様や数量に迷う場合は、前の章の相談から進めてください。</p>
      <div className="rental-product-grid">{products.map(p => <div className="rental-product" key={p.id}>
        <div className="rental-product-image"><SafetyGuideLink destination={`https://www.gc-select.com/products/${p.id}`} article={SAFETY_GUIDES.hub.slug} placement={`shop-image-${p.id}`}><Image src={p.image} alt={p.name} fill sizes="(max-width: 639px) 90vw, (max-width: 1023px) 45vw, 360px" /></SafetyGuideLink></div>
        <div className="rental-product-copy"><span className="rental-product-tag">{p.tag}</span><h3>{p.name}</h3><p>{p.description}</p><p className="rental-product-check">{p.note}</p><SafetyGuideLink destination={`https://www.gc-select.com/products/${p.id}`} article={SAFETY_GUIDES.hub.slug} placement={`shop-${p.id}`} className="rental-product-link">GCセレクトで仕様・在庫を見る ↗</SafetyGuideLink><Link className="rental-product-link" href={p.href}>{p.related} →</Link></div>
      </div>)}</div>
      <p className="rental-note">商品写真・仕様はGCセレクト掲載情報を参照。価格・在庫・選択できるサイズ・送料・納期はリンク先で確認してください。</p>
    </GuideSection>
  </SafetyGuide>;
}
