import Image from "next/image";
import Link from "next/link";
import { SafetyGuide, GuideSection, GuideTable, GuideCta, safetyGuideMetadata } from "@/components/article/safety-guide";
import { ConsultationBrief } from "@/components/article/consultation-brief";
import { SafetyGuideLink } from "@/components/article/safety-guide-link";
import { SAFETY_GUIDES } from "@/lib/safety-guides";

export const metadata = safetyGuideMetadata("fence");
const guide = SAFETY_GUIDES.fence;
const images = "/images/articles/safety-equipment-planning/";
const sections = [["purpose", "使う目的を整理"], ["types", "4種類を写真で比較"], ["count", "枚数と付属品の数え方"], ["estimate", "料金と搬入条件"], ["brief", "相談メモ"], ["faq", "よくある質問"]] as const;
const products = [
  { name: "アルミスタジアムフェンス", image: "fence.webp", label: "見通しを残す区画", size: "幅1,800 × 高さ1,120mm", body: "観覧エリアや沿道などで境界を示す候補。格子越しの見通しと、脚が通路へ張り出す範囲を確認します。", check: "公式掲載例の脚幅は500mm。本体の線だけで通路幅を判断しないようにします。" },
  { name: "メッキオールネットフェンス", image: "mesh-fence.jpg", label: "高さのある境界", size: "幅1,800 × 高さ1,800mm", body: "機材置場やバックヤードなどの区分に。高さに加えて、設置面と支持方法を伝えて選びます。", check: "本体、ベース、控えなどの構成を確認。目隠しを付けたい場合は追加条件として伝えます。" },
  { name: "プラフェンス S-1", image: "plastic-fence.jpg", label: "受付・待機場所の区分", size: "幅1,000 × 高さ1,180mm", body: "受付や休憩場所など、通る場所と待つ場所を分ける候補。会場の床面や脚部の位置も選定条件です。", check: "対応するベースと連結部材を確認。屋内使用では床の保護条件も共有します。" },
  { name: "扉付メッキオールネットフェンス", image: "gate-fence.jpg", label: "囲いの途中の出入口", size: "幅1,800 × 高さ1,800mm／開口幅850mm", body: "区画を続けたまま、スタッフが出入りする場所を設ける候補。扉を開く方向や管理方法も決めます。", check: "開口幅850mmの掲載例です。台車・車両・緊急時の通路に足りるかは用途別に確認します。" },
];

export default function Page() {
  return <SafetyGuide guideKey="fence" sections={sections}
    summary={["外周・観覧エリア・待機列・バックヤードを分け、区画の役割から種類を選ぶ。", "枚数は区間ごとに整理し、出入口・曲がり角・脚・ベース・連結部材まで確認する。", "人の圧力や車両衝突への対策が必要な場所は、一般的な区画フェンスで代用しない。"]}
    sources={[
      { title: "グリーンクロス：イベントフェンスのレンタル・商品仕様", url: guide.destination },
      { title: "グリーンクロス：安全用品レンタル", url: "https://gc-anzen.com/rental" },
      { title: "警察庁：令和8年警察白書 第6章・警備実施（雑踏警備）", url: "https://www.npa.go.jp/hakusyo/r08/honbun/html/cc6613000.html" },
    ]}
    faq={[
      { q: "会場の外周の長さだけ分かれば、枚数を出せますか？", a: "長さは出発点になりますが、それだけでは確定できません。出入口、曲がり角、連結時の有効幅、支持部材、設置できない場所を確認する必要があります。区間ごとの寸法が入った略図で相談しましょう。" },
      { q: "フェンスに横幕や目隠しを付けてもよいですか？", a: "あらかじめ貸出元へ確認してください。風を受ける面積や重さが変わるため、何をどの範囲に付けるか、設置面と固定方法を合わせて伝えます。会場判断だけで追加しないことが大切です。" },
      { q: "1日だけのイベントでもレンタルできますか？", a: "短期利用は相談できますが、機種・数量・地域・日程によって可否が変わります。当日だけでなく、前日の納品や翌日の回収を含めた貸出期間と料金の数え方を確認してください。" },
    ]}
    related={[
      { title: "待機列の入口・最後尾・受付後の案内を整理する", href: "/articles/event-queue-guidance-equipment" },
      { title: "臨時駐車場の車両・歩行者の案内を準備する", href: "/articles/temporary-parking-guidance-signs" },
      { title: "マラソン大会の用品を場所別に確認する", href: "/articles/marathon-event-safety-equipment" },
      { title: "安全用品レンタルの料金・購入比較", href: "/articles/safety-supplies-rental-guide" },
    ]}>
    <GuideSection id="purpose" number="01 / 使う目的" title="同じ会場でも、囲う理由は場所ごとに違う">
      <p>「イベント用のフェンス」と伝えるだけでは、必要な高さや形は決まりません。来場者に境界を見せるのか、関係者用の場所を区別するのか、入退場の列を整理するのか。まず会場図に、フェンスで区切りたい区間と理由を書き込みましょう。</p>
      <GuideTable caption="会場図に書き込む区画の役割" headers={["使う場所", "整理したいこと", "手配前に決める条件"]} rows={[
        ["会場の外周", "来場者が出入りする範囲", "入退場口、一般通路、設置面、管理する担当"],
        ["観覧エリア・沿道", "観る場所と通る場所の区分", "見通し、通路、混雑時の運用、求める設備性能"],
        ["受付・物販の列", "待機列と通り抜けの区分", "列の伸びる先、途中退出、最後尾表示"],
        ["バックヤード", "来場者と機材・関係者の区分", "必要な高さ、搬入口、目隠しの有無"],
      ]} />
      <div className="rental-note-box"><h3>区画用品に、人を押し止める性能を見込まない</h3><p>一般的な区画フェンスやコーン・バーは、群衆の圧力や車両の衝突に耐える設備として選べません。ステージ前や人が集中する場所などは、主催者・警備担当・会場管理者で必要な性能と運用を検討し、適合する設備を確認してください。</p><p><a href="https://www.npa.go.jp/hakusyo/r08/honbun/html/cc6613000.html">警察庁の雑踏警備の説明</a>でも、主催者や施設管理者の安全対策、関係機関との連携が扱われています。用品の準備は、その計画に沿って進めます。</p></div>
    </GuideSection>
    <GuideSection id="types" number="02 / 種類の比較" title="商品写真で、形と確認点を比べる">
      <p>以下はグリーンクロスのイベント向けページに掲載されている例です。「この種類ならどの会場でも使える」という選定表ではありません。現場条件を伝え、採用品と必要部材を確認するための比較としてお使いください。</p>
      <div className="rental-product-grid">{products.map((product, i) => <div className="rental-product" key={product.name}>
        <div className="rental-product-image"><SafetyGuideLink destination={guide.destination} article={guide.slug} placement={`product-image-${i + 1}`}><Image src={`${images}${product.image}`} alt={product.name} fill sizes="(max-width: 639px) 90vw, (max-width: 1023px) 45vw, 360px" /></SafetyGuideLink></div>
        <div className="rental-product-copy"><span className="rental-product-tag">{product.label}</span><h3>{product.name}</h3><p><strong>{product.size}</strong></p><p>{product.body}</p><p className="rental-product-check">{product.check}</p><SafetyGuideLink destination={guide.destination} article={guide.slug} placement={`product-${i + 1}`} className="rental-product-link">公式の仕様・相談先を見る <span>↗</span></SafetyGuideLink></div>
      </div>)}</div>
      <p className="rental-note">寸法は公式掲載値を2026年11月22日に確認。本体の外形幅と、連結後の有効幅は区別します。写真は付属品一式や貸出可能な在庫を示すものではありません。</p>
    </GuideSection>
    <GuideSection id="count" number="03 / 数量整理" title="外周をまとめて割らず、区間と開口を分ける">
      <p>枚数を相談するときは、直線ごとに「A区間」「B区間」と番号を付けます。通行口を設ける場所、扉が必要な場所、設置できない段差や植栽も記入しましょう。フェンスの形状が変わる角や、両端の支持方法も数量に影響します。</p>
      <div className="safety-guide-example"><h3>数量を整理するための計算例</h3><p>仮に、区切る直線が18mで、確認済みの連結後の有効幅が1.8mなら、単純な割り算では10枚です。ただし、その区間に通行口や扉を設ける場合や、端部の納まりがある場合は構成が変わります。</p><p>この例は計算方法の説明です。掲載商品の有効幅や、実際の会場で必要な枚数を保証するものではありません。最終数量は採用品と区画図を合わせて確認します。</p></div>
      <ul className="rental-list"><li><strong>本体：</strong>区間ごとの種類・枚数・向き。</li><li><strong>足元：</strong>ベース、ウエイト、控えなど、採用品で必要な構成。</li><li><strong>つなぎ目：</strong>直線・曲がり・端部に対応する連結部材。</li><li><strong>出入口：</strong>開口の寸法、扉の開閉範囲、鍵や開放の管理。</li><li><strong>追加表示：</strong>看板・幕を付ける位置、固定方法、風への影響。</li></ul>
      <p>杭などで固定できるか、床や舗装面に傷を付けられないかも重要な条件です。固定方法や重しの量は一般論で決めず、貸出元・会場管理者と確認してください。通路は本体の位置だけでなく、脚や支持材が出る範囲を差し引いて計画します。</p>
      <GuideCta guideKey="fence" placement="count" title="会場図から、フェンスと部材を確認する">区切る場所の長さと、出入口・設置面が分かる資料を用意すると、種類や数量から相談しやすくなります。</GuideCta>
    </GuideSection>
    <GuideSection id="estimate" number="04 / 見積もり" title="1枚の単価より、会場で使える状態までを比べる">
      <p>フェンスの見積もりでは、本体と部材の組み合わせに加え、往復の運搬と作業範囲をそろえることが大切です。「会場の入口で受け渡す」と「各設置区間まで運ぶ」では、必要な作業が異なります。</p>
      <GuideTable caption="レンタル見積もりで確認する5項目" headers={["項目", "確認すること", "見落としやすい点"]} rows={[
        ["貸出期間", "納品日、使用日、回収日、延長条件", "イベント開催日だけの計算かどうか"],
        ["付属部材", "ベース、連結、支持・固定に必要な品", "本体単価に含む範囲"],
        ["配送・回収", "車両、時間帯、荷下ろし、回収場所", "早朝・夜間や待機時間の条件"],
        ["設置・撤去", "会場内運搬、組立、撤去、集約の担当", "納品だけか設営までか"],
        ["予定変更", "雨天中止、日程変更、破損・紛失", "連絡期限と追加費用の扱い"],
      ]} />
      <p>設置後の見回りや、開口を開閉する担当も主催者側で決めます。搬入車が通る時間帯にフェンスを動かすなら、誰が戻し、誰が再確認するかまで共有しましょう。受付まわりの運用は、<Link href="/articles/event-queue-guidance-equipment">待機列と案内用品の準備</Link>で確認できます。</p>
    </GuideSection>
    <GuideSection id="brief" number="05 / 相談メモ" title="枚数が未定でも伝えられる、会場の条件">
      <p>最初の相談では、完成した施工図がなくても、会場図と区切りたい場所、日程、設置面の情報が役立ちます。未定の部分は「相談」として残してお使いください。</p>
      <ConsultationBrief template={`イベント用フェンスのレンタルを相談したいです。
・イベント名／開催地：
・納品希望日時／開催日時／回収希望日時：
・用途（外周・観覧・待機列・バックヤードなど）：
・区間ごとの長さ／出入口の位置と幅：
・希望する高さ／見通し・目隠しの要否：
・設置面（舗装・土・屋内床など）／固定の制約：
・看板や幕の取付予定：
・数量／種類から相談したい範囲：
・搬入車両や荷下ろし時間の制限：
・設置・撤去・会場内運搬の希望：
・会場図、写真の有無：
本体・付属部材・配送回収・作業費を分けて確認したいです。`} />
    </GuideSection>
  </SafetyGuide>;
}
