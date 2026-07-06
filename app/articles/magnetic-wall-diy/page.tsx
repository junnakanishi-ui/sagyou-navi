import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";

const SLUG = "magnetic-wall-diy";
const SITE_URL = "https://sagyou-navi.com";

const IMAGES = {
  hero: "/images/articles/magnetic-wall-steel-paper-installation-hero.jpg",
  magnetVsSteel: "/images/articles/magnet-sheet-steel-paper-difference.jpg",
  factoryBulletin: "/images/articles/factory-magnetic-bulletin-board-sheet.jpg",
  adhesivePop: "/images/articles/adhesive-magnet-sheet-pop-panel.jpg",
  vehicle: "/images/articles/vehicle-magnet-sheet-application.jpg",
  categoryCompare: "/images/articles/magnet-sheet-category-comparison-procurement.jpg",
} as const;

export const metadata: Metadata = {
  title:
    "マグネットがつく壁を作るには？スチールペーパー・粘着付きマグネットシート・掲示板シートの使い分け｜作業用品ナビ",
  description:
    "壁にマグネットを付けたいときは、スチールペーパーや掲示板シートを使ってマグネット対応面を作る方法があります。スチールペーパー、粘着付きマグネットシート、強力マグネットシート、車両用・ホワイトボード用・掲示板用の使い分けを法人向けに解説します。",
  alternates: { canonical: `${SITE_URL}/articles/${SLUG}` },
  openGraph: {
    title:
      "マグネットがつく壁を作るには？スチールペーパー・粘着付きマグネットシート・掲示板シートの使い分け",
    description:
      "壁にマグネットを付けたいときは、スチールペーパーや掲示板シートを使ってマグネット対応面を作る方法があります。スチールペーパー、粘着付きマグネットシート、強力マグネットシート、車両用・ホワイトボード用・掲示板用の使い分けを法人向けに解説します。",
    type: "article",
    images: [IMAGES.hero],
  },
};

/* ===== UTM付与（# の前のみ・再エンコードなし） ===== */
const UTM = "utm_source=sagyou_navi";

function buildUrl(url: string, utm: string = UTM): string {
  if (!url) return url;
  const hashIndex = url.indexOf("#");
  const append = (base: string) =>
    `${base}${base.includes("?") ? "&" : "?"}${utm}`;
  if (hashIndex === -1) return append(url);
  return `${append(url.slice(0, hashIndex))}${url.slice(hashIndex)}`;
}

const u = (url: string) => buildUrl(url);

const YAHOO_BASE = "https://store.shopping.yahoo.co.jp/signcity-yshop/";
const P = (id: string) =>
  `${YAHOO_BASE}${id}.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=`;

const URL_YAHOO_MAGNET_LIST = `${YAHOO_BASE}a5dea5b0a5.html`;

const EC_ANISOTROPIC = "https://www.trade-sign.com/magnet/04/";
const EC_ISOTROPIC = "https://www.trade-sign.com/magnet/10/";
const EC_ADHESIVE = "https://www.trade-sign.com/magnet/07/";
const EC_WHITEBOARD = "https://www.trade-sign.com/magnet/09/";
const EC_BLACKBOARD = "https://www.trade-sign.com/magnet/08/";
const EC_REFLECTIVE = "https://www.trade-sign.com/magnet/06/";
const EC_MAGNET_LIST = "https://www.trade-sign.com/magnet/";

/* ===== 商品データ ===== */
type Product = { id: string; name: string };

const BASE_ITEMS: Product[] = [
  { id: "008725", name: "スチールペーパー SP-PT 糊付 0.2mm厚×900mm幅×切売り" },
  { id: "054288", name: "掲示板シート クロス ブルテンスティーリー 1mm厚 930mm幅 ウイロウ" },
  { id: "054290", name: "掲示板シート クロス ブルテンスティーリー 1mm厚 930mm幅 アイボリー" },
];

const ADHESIVE_ITEMS: Product[] = [
  { id: "153647", name: "マグネット粘着付シート 強力 異方性 1.2mm厚×200×300mm MSWFP-2030（マグエックス）" },
  { id: "008732", name: "強力マグネットシート 粘着付き マグネタッキー 磁石色 異方性 1mm厚×500mm幅×10mロール" },
  { id: "008731", name: "強力マグネットシート 粘着付き マグネタッキー 磁石色 異方性 1.2mm厚×500mm幅×10mロール" },
  { id: "095477", name: "強力マグネットテープ 磁石色 異方性 のり付き 1mm厚×50mm幅×5m" },
];

const ISO_ANISO_ITEMS: Product[] = [
  { id: "014185", name: "国産マグネットシート 白 等方性ツヤなし 0.8mm厚×100mm幅×10m" },
  { id: "014183", name: "国産マグネットシート 白 等方性ツヤなし 0.8mm厚×300mm幅×10m" },
  { id: "040947", name: "国産マグネットシート 白 等方性ツヤなし 0.8mm厚×1020mm幅×切売" },
  { id: "040943", name: "国産マグネットシート 白 等方性ツヤあり 0.8mm厚×1020mm幅×切売" },
  { id: "040937", name: "強力マグネットシート 白 切売り 異方性ツヤなし 0.8mm厚×1020mm幅" },
  { id: "040910", name: "強力マグネットシート 磁石色 切売り 異方性 0.8mm厚×1020mm幅" },
  { id: "054996", name: "国産カラーマグネットシート 黄 等方性 0.8mm厚×1020mm幅×切売" },
];

const VEHICLE_ITEMS: Product[] = [
  { id: "029371", name: "車両用マグネットシート 白 異方性ツヤなし 0.8mm厚×500mm幅×5m" },
  { id: "040937", name: "強力マグネットシート 白 切売り 異方性ツヤなし 0.8mm厚×1020mm幅" },
  { id: "040910", name: "強力マグネットシート 磁石色 切売り 異方性 0.8mm厚×1020mm幅" },
];

const MAIN_ITEMS: Product[] = [
  { id: "153647", name: "マグネット粘着付シート 強力 異方性 1.2mm厚×200×300mm" },
  { id: "008725", name: "スチールペーパー SP-PT 糊付" },
  { id: "014185", name: "国産マグネットシート 白 等方性 0.8mm厚×100mm幅×10m" },
  { id: "040937", name: "強力マグネットシート 白 切売り 異方性 0.8mm厚 1020mm幅" },
  { id: "040947", name: "国産マグネットシート 白 等方性 0.8mm厚×1020mm幅×切売" },
  { id: "054288", name: "掲示板シート ブルテンスティーリー ウイロウ" },
  { id: "054290", name: "掲示板シート ブルテンスティーリー アイボリー" },
  { id: "029371", name: "車両用マグネットシート 白 異方性 0.8mm厚×500mm幅×5m" },
  { id: "054996", name: "国産カラーマグネットシート 黄 等方性 0.8mm厚×1020mm幅×切売" },
  { id: "008732", name: "強力マグネットシート 粘着付き マグネタッキー 1mm厚×500mm幅×10mロール" },
  { id: "008731", name: "強力マグネットシート 粘着付き マグネタッキー 1.2mm厚×500mm幅×10mロール" },
  { id: "095477", name: "強力マグネットテープ 磁石色 異方性 のり付き 1mm厚×50mm幅×5m" },
];

const SIDE_TABLE = [
  { mat: "スチールペーパー", role: "マグネットが付く受け面を作る", use: "壁、掲示板、什器、DIY下地", cart: "SP-PT 糊付" },
  { mat: "掲示板用スチールシート", role: "掲示板・壁面をマグネット対応にする", use: "施設掲示板、学校、工場掲示", cart: "ブルテンスティーリー" },
  { mat: "マグネットシート", role: "磁石側として鉄面に貼る", use: "車両サイン、POP、表示板", cart: "等方性・異方性" },
  { mat: "粘着付きマグネットシート", role: "非磁性物をマグネット化する", use: "POP、パネル、名札、備品表示", cart: "マグネタッキー" },
  { mat: "マグネットテープ", role: "細長い部材や軽量表示に使う", use: "棚表示、ラベル、軽量POP", cart: "強力マグネットテープ" },
];

const ISO_TABLE = [
  { kind: "等方性マグネットシート", feat: "一般用途向け", use: "屋内掲示、POP、ラベル", note: "吸着力は控えめ。軽量物向き" },
  { kind: "異方性マグネットシート", feat: "吸着力重視", use: "車両用、強力掲示、屋外POP", note: "貼付面・サイズ・厚み・環境を確認" },
  { kind: "粘着付き異方性", feat: "裏面のり付きで加工しやすい", use: "パネル裏貼り、POP加工", note: "貼付面の汚れ・凹凸を確認" },
  { kind: "マグネットテープ", feat: "細幅で使いやすい", use: "棚表示、軽量パーツ", note: "重量物には不向き" },
];

const PURPOSE_TABLE = [
  { want: "壁にマグネットを付けたい", mat: "スチールペーパー", rec: "SP-PT 糊付", note: "下地の平滑性・汚れを確認" },
  { want: "掲示板を作りたい", mat: "掲示板用スチールシート", rec: "ブルテンスティーリー", note: "施工範囲・色味を確認" },
  { want: "POPを磁石で貼りたい", mat: "粘着付きマグネット", rec: "マグネタッキー", note: "貼付面の素材を確認" },
  { want: "車両サインを作りたい", mat: "車両用・強力異方性", rec: "車両用マグネットシート、異方性カテゴリ", note: "曲面・凹凸・樹脂部は不可の場合あり" },
  { want: "屋内掲示ラベルを作りたい", mat: "等方性マグネット", rec: "国産白等方性", note: "軽量物向き" },
  { want: "書いて消せる面にしたい", mat: "ホワイトボード系", rec: "ホワイトボードマグネットシート（自社EC）", note: "受け面が必要な場合あり" },
  { want: "黒板面にしたい", mat: "黒板系", rec: "黒板マグネットシート（自社EC）", note: "用途・設置場所を確認" },
  { want: "夜間・屋外注意表示にしたい", mat: "反射タイプ", rec: "反射マグネットシート（自社EC）", note: "屋外耐候性を確認" },
];

const FAIL_TABLE = [
  { fail: "マグネットシートを壁に貼ればマグネットが付くと思う", problem: "磁石側同士になり、思ったように掲示できない", fix: "壁側にはスチールペーパーを検討" },
  { fail: "スチールペーパーとマグネットシートを混同する", problem: "受け側と磁石側を間違える", fix: "役割を分けて選ぶ" },
  { fail: "弱い等方性で車両用を作る", problem: "走行時の浮きやズレが心配", fix: "車両用・強力異方性を検討" },
  { fail: "粘着付きなら何でも貼れると思う", problem: "下地不良で剥がれる", fix: "貼付面の汚れ・凹凸・素材を確認" },
  { fail: "屋外用途で屋内向けを選ぶ", problem: "雨・紫外線・熱の影響を受けやすい", fix: "使用環境を確認" },
  { fail: "掲示板用途なのに磁石側だけ買う", problem: "マグネットを受ける面が作れない", fix: "スチールシート・掲示板シートを確認" },
  { fail: "価格比較をせずに購入する", problem: "大判・切売りでコスト差が出る", fix: "自社ECカテゴリも確認" },
];

const CHECKLIST = [
  { item: "目的", detail: "壁をマグネット化したいのか、物をマグネット化したいのか" },
  { item: "貼る場所", detail: "壁、鉄面、車両、掲示板、什器、パネルのどれか" },
  { item: "受け側の有無", detail: "スチール面があるか" },
  { item: "屋内外", detail: "屋内掲示か、屋外・車両用途か" },
  { item: "サイズ", detail: "必要な幅・長さ・厚みを確認したか" },
  { item: "吸着力", detail: "等方性で足りるか、異方性が必要か" },
  { item: "粘着の有無", detail: "裏面のり付きが必要か" },
  { item: "表面仕様", detail: "白、磁石色、ツヤあり、ツヤなし、カラー、反射など" },
  { item: "加工方法", detail: "カット、印刷、ラミネート、貼り合わせが必要か" },
  { item: "購入先", detail: "Yahoo!ショッピングと自社ECを比較したか" },
];

const FAQ_ITEMS: Array<{ q: string; a: string; linkSuffix?: string }> = [
  {
    q: "マグネットがつく壁を作るには何を使えばよいですか？",
    a: "壁にマグネットを付けたい場合は、スチールペーパーやスチールシートなど、マグネットが吸着する下地材を貼る方法が候補になります。マグネットシートは磁石側の材料なので、壁側には受け材が必要です。",
  },
  {
    q: "スチールペーパーとマグネットシートは何が違いますか？",
    a: "スチールペーパーはマグネットが付く受け面を作る材料です。マグネットシートは磁石として鉄面に付く材料です。壁や掲示板をマグネット対応にしたい場合はスチールペーパー、POPやプレートを磁石化したい場合はマグネットシートを使います。",
  },
  {
    q: "粘着付きマグネットシートはどんな用途に向いていますか？",
    a: "POP、パネル、プレート、名札、棚表示などの裏面に貼って、マグネット掲示できるようにする用途に向いています。貼る面の汚れ、凹凸、素材、屋内外条件を確認して使いましょう。",
  },
  {
    q: "異方性と等方性はどちらを選べばよいですか？",
    a: "一般的な屋内掲示や軽量POPなら等方性、車両用や吸着力を重視したい用途では異方性が候補になります。ただし、必要な吸着力はサイズ、厚み、貼り付け面、使用環境によって変わります。詳しい選び方は",
    linkSuffix: "もご確認ください。",
  },
  {
    q: "車両用マグネットシートは普通のマグネットシートでも作れますか？",
    a: "車両に貼る場合は、車両用や強力異方性タイプを検討するのが基本です。走行前には車体側とシート側の汚れ・水分・浮きがないか確認し、長期間貼りっぱなしにしない運用も重要です。曲面・凹凸面・樹脂部分には貼れない場合があります。",
  },
  {
    q: "自社ECとYahoo!ショッピングはどちらで買うのがよいですか？",
    a: "少量購入やポイント利用ならYahoo!ショッピングも便利です。一方、大判・切売り・業務用サイズ・価格重視で比較したい場合は、自社ECのマグネットシートカテゴリもあわせて確認すると選びやすいです。",
  },
];

/* ===== 共通パーツ ===== */
function ArticleFigure({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) {
  return (
    <figure className="relative my-6 aspect-[16/9] overflow-hidden rounded-lg bg-gray-50">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 1152px"
        priority={priority}
      />
    </figure>
  );
}

function ProductCard({ id, name }: Product) {
  const href = u(P(id));
  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow sponsored noopener"
      className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white transition hover:border-gray-400 hover:shadow-md"
    >
      <div className="relative aspect-square w-full overflow-hidden bg-gray-50">
        <Image
          src={`/products/${id}.jpg`}
          alt={name}
          fill
          className="object-contain p-2 transition group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 50vw, 250px"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <p className="text-sm font-bold leading-snug text-gray-900">{name}</p>
        <span className="mt-auto inline-flex w-fit items-center rounded bg-gray-900 px-3 py-1 text-xs font-bold text-white">
          Yahoo!ショッピングで見る →
        </span>
      </div>
    </a>
  );
}

function ProductGrid({ items }: { items: Product[] }) {
  return (
    <div className="my-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {items.map((p) => (
        <ProductCard key={p.id} {...p} />
      ))}
    </div>
  );
}

function CTA({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <div className="my-6">
      <a
        href={href}
        target="_blank"
        rel="nofollow sponsored noopener"
        className="block w-full rounded-md bg-gray-900 px-6 py-4 text-center text-base font-bold text-white transition hover:bg-gray-700"
      >
        {children}
      </a>
    </div>
  );
}

function FinalCTA({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <div className="my-6">
      <a
        href={href}
        target="_blank"
        rel="nofollow sponsored noopener"
        className="block w-full rounded-lg bg-gray-900 px-6 py-6 text-center text-lg font-bold text-white shadow-lg transition hover:bg-gray-700"
      >
        {children}
      </a>
    </div>
  );
}

function ECLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow sponsored noopener"
      className="text-gray-900 underline"
    >
      {children}
    </a>
  );
}

function ECCategoryLinks() {
  return (
    <ul className="my-4 list-disc space-y-1 pl-6 text-gray-800">
      <li><ECLink href={u(EC_ANISOTROPIC)}>強力マグネットシート（異方性）一覧</ECLink></li>
      <li><ECLink href={u(EC_ISOTROPIC)}>マグネットシート（等方性）</ECLink></li>
      <li><ECLink href={u(EC_ADHESIVE)}>のり付マグネットシート</ECLink></li>
      <li><ECLink href={u(EC_WHITEBOARD)}>ホワイトボードマグネットシート</ECLink></li>
      <li><ECLink href={u(EC_BLACKBOARD)}>黒板マグネットシート</ECLink></li>
      <li><ECLink href={u(EC_REFLECTIVE)}>反射マグネットシート</ECLink></li>
      <li><ECLink href={u(EC_MAGNET_LIST)}>マグネットシート一覧</ECLink></li>
    </ul>
  );
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.linkSuffix
        ? `${item.a}マグネットシートの選び方${item.linkSuffix}`
        : item.a,
    },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "比較", item: `${SITE_URL}/category/compare` },
    {
      "@type": "ListItem",
      position: 3,
      name: "マグネットがつく壁を作るには？",
      item: `${SITE_URL}/articles/${SLUG}`,
    },
  ],
};

/* ===== ページ本体 ===== */
export default function Page() {
  return (
    <>
      <SiteHeader />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <main className="mx-auto max-w-6xl px-4 py-8 md:px-6 text-gray-900">
        <nav className="mb-4 text-xs text-gray-500" aria-label="パンくず">
          <Link href="/" className="hover:underline">
            ホーム
          </Link>
          <span className="mx-1">/</span>
          <Link href="/articles" className="hover:underline">
            記事一覧
          </Link>
          <span className="mx-1">/</span>
          <span className="text-gray-700">マグネットがつく壁を作るには？</span>
        </nav>

        <span className="mb-3 inline-block rounded bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-800">
          比較
        </span>

        <h1 className="mb-4 text-2xl font-bold leading-snug text-gray-900 sm:text-3xl">
          マグネットがつく壁を作るには？スチールペーパー・粘着付きマグネットシート・掲示板シートの使い分け
        </h1>

        <p className="mb-6 text-sm text-gray-500">公開日：2026年7月6日／約14分で読めます</p>

        <ArticleFigure
          src={IMAGES.hero}
          alt="スチールペーパーでマグネットがつく壁を作るイメージ"
          priority
        />

        <div className="my-6 rounded-lg border border-gray-300 bg-gray-50 p-5 leading-relaxed">
          <p className="text-gray-800">
            マグネットがつく壁を作りたい場合は、壁そのものにマグネットシートを貼るのではなく、スチールペーパーやスチールシートなどの「マグネットが吸着する下地材」を壁に貼る方法が基本です。マグネットシートは磁石側の材料で、スチールペーパーはマグネットを受ける鉄系の下地材です。そのため、石こうボード・木材・樹脂・ガラスなど、マグネットが付かない面をマグネット対応にしたい場合は、スチールペーパーや掲示板用スチールシートを検討します。一方、車両サインやPOP、工具・部材への貼り付けには、強力マグネットシートや粘着付きマグネットシートが向いています。用途に応じて、下地材として使うのか、磁石として使うのかを分けて選ぶことが重要です。
          </p>
        </div>

        <CTA href={u(P("008725"))}>
          壁や掲示板をマグネット対応にしたい方は、スチールペーパー・掲示板用スチールシートを確認する
        </CTA>

        {/* H2-1 磁石側と受け側 */}
        <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-4 text-xl font-bold text-gray-900">
          マグネットがつく壁を作るには？まずは「磁石側」と「受け側」を分けて考える
        </h2>

        <ArticleFigure
          src={IMAGES.magnetVsSteel}
          alt="マグネットシートとスチールペーパーの違いを比較するイメージ"
        />

        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">マグネットシートは磁石側の材料</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          マグネットシートは、それ自体が磁石になっている材料です。鉄などの磁性材料の面に貼り付けて使うもので、「マグネットを受ける面」ではありません。
        </p>
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">スチールペーパーはマグネットを受ける下地材</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          一方、スチールペーパーは鉄系の薄い下地材で、マグネットを吸着させる「受け面」を作るための材料です。壁や什器に貼ることで、その面にマグネットが付くようになります。
        </p>
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">石こうボード・木・ガラスにはそのままマグネットは付かない</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          マグネットは鉄などの磁性材料に吸着する性質があります。石こうボード・木材・樹脂・ガラスなどの面には、そのままではマグネットが付きません。これらをマグネット対応にしたい場合は、受け側の下地材が必要です。
        </p>
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">壁をマグネット化したいなら下地材選びが重要</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          つまり、「マグネットがつく壁」を作りたいなら、磁石側のマグネットシートではなく、受け側のスチールペーパーや掲示板用スチールシートを選ぶことが重要です。マグネットシート全体の詳しい選び方は
          <Link href="/articles/magnet-sheet-selection" className="text-gray-900 underline hover:no-underline">
            「マグネットシートの選び方」
          </Link>
          の記事もご確認ください。
        </p>

        <div className="my-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border border-gray-200 px-3 py-2">材料</th>
                <th className="border border-gray-200 px-3 py-2">役割</th>
                <th className="border border-gray-200 px-3 py-2">向いている用途</th>
                <th className="border border-gray-200 px-3 py-2">主な商品導線</th>
              </tr>
            </thead>
            <tbody>
              {SIDE_TABLE.map((row) => (
                <tr key={row.mat} className="even:bg-gray-50">
                  <td className="border border-gray-200 px-3 py-2 font-semibold">{row.mat}</td>
                  <td className="border border-gray-200 px-3 py-2">{row.role}</td>
                  <td className="border border-gray-200 px-3 py-2">{row.use}</td>
                  <td className="border border-gray-200 px-3 py-2">{row.cart}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* H2-2 スチールペーパー */}
        <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-4 text-xl font-bold text-gray-900">
          スチールペーパー・スチールシートでマグネット対応面を作る方法
        </h2>

        <ArticleFigure
          src={IMAGES.factoryBulletin}
          alt="工場の壁をマグネット掲示板として使うイメージ"
        />

        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">壁や什器に貼るとマグネットが付く面を作れる</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          スチールペーパーやスチールシートを壁や什器に貼ることで、マグネットが付く面を作れます。糊付タイプなら、DIY感覚で手軽に施工しやすいのが特長です。
        </p>
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">掲示物をピンやテープで傷つけにくくなる</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          マグネットで貼り替えられるようになると、掲示物をピンやテープで固定する必要が減り、壁や掲示物を傷つけにくくなります。
        </p>
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">工場・倉庫・店舗・オフィスの掲示スペースに使いやすい</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          注意喚起、点検表、作業指示、シフト表、お知らせなど、貼り替えの多い掲示スペースに向いています。工場・倉庫・店舗・オフィスなど幅広い現場で活用できます。
        </p>
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">貼る前に下地の平滑性・汚れ・施工範囲を確認する</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          貼り付け前に、下地の平滑性や汚れ、施工範囲を確認しておくと、きれいに仕上げやすくなります。必要に応じてサンプル確認や施工テストを行うと安心です。
        </p>

        <ProductGrid items={BASE_ITEMS} />
        <CTA href={u(P("008725"))}>
          マグネットがつく壁を作るなら、スチールペーパー SP-PT・ブルテンスティーリーを確認する
        </CTA>

        {/* H2-3 誤解防止 */}
        <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-4 text-xl font-bold text-gray-900">
          マグネットシートを壁に貼る場合に注意したいこと
        </h2>
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">
          マグネットシートを貼っても、その上にマグネットが付くとは限らない
        </h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          「壁にマグネットシートを貼れば、その上にマグネットが付く」と思われがちですが、これは誤解です。マグネットシートは磁石側の材料のため、その上に別のマグネットを近づけても、磁石同士になり思ったように貼り付かないことがあります。
        </p>
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">磁石同士を重ねる用途では極性や吸着力に注意する</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          磁石同士を重ねて使う場合は、極性（N極・S極）や吸着力の向きによって、反発したり十分に付かなかったりすることがあります。
        </p>
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">掲示面を作りたいならスチールペーパーの方が向く場合がある</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          壁をマグネット掲示面にしたいなら、磁石側のマグネットシートではなく、受け側のスチールペーパーや掲示板用スチールシートの方が向いています。
        </p>
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">粘着付きマグネットは「物をマグネット化する」用途に向く</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          粘着付きマグネットシートは、POPやパネルなどの「物」の裏に貼って、それ自体をマグネットで貼れるようにする用途に向いています。「壁を受け面にする」用途とは目的が異なります。
        </p>

        {/* H2-4 粘着付き */}
        <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-4 text-xl font-bold text-gray-900">
          粘着付きマグネットシートの使い方
        </h2>

        <ArticleFigure
          src={IMAGES.adhesivePop}
          alt="粘着付きマグネットシートをPOPやパネル裏に貼るイメージ"
        />

        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">POPやパネルの裏に貼ってマグネット掲示にする</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          粘着付きマグネットシートは、POPやパネルの裏に貼ることで、鉄面やスチールペーパー面にマグネットで掲示できるようにします。
        </p>
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">工具・備品・棚表示・名札の裏面に使いやすい</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          工具・備品・棚表示・名札などの裏面に貼れば、貼り替えや位置替えがしやすくなります。
        </p>
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">軽量物はマグネットテープでも対応しやすい</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          細長い部材や軽量な表示なら、シートよりもマグネットテープの方が扱いやすい場合があります。
        </p>
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">屋外・重量物・曲面では剥がれや落下に注意</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          屋外や重量物、曲面では、粘着やマグネットの保持力が不足して剥がれ・落下につながることがあります。使用環境に合わせて検討し、必要に応じてサンプルで確認してください。
        </p>

        <ProductGrid items={ADHESIVE_ITEMS} />
        <p className="mb-4 leading-relaxed text-gray-800">
          のり付タイプは、
          <ECLink href={u(EC_ADHESIVE)}>自社ECの「のり付マグネットシート」カテゴリ</ECLink>
          でもサイズ展開を確認できます。
        </p>
        <CTA href={u(P("008732"))}>
          POPやパネルをマグネット化するなら、粘着付きマグネットシート・マグネタッキーを確認する
        </CTA>

        {/* H2-5 等方性/異方性 */}
        <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-4 text-xl font-bold text-gray-900">
          等方性と異方性の違い｜強力タイプはどんなときに必要？
        </h2>
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">等方性は一般的な掲示・POP・軽量用途に使いやすい</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          等方性タイプは、屋内掲示やPOP、ラベルなど、一般的で軽量な用途に使いやすいタイプです。
        </p>
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">異方性は吸着力を重視したい用途に向く</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          異方性タイプは吸着力を重視したい用途に向いており、車両用や強力掲示、屋外POPなどで検討されます。
        </p>
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">車両用・屋外POP・大判表示では強力タイプを検討</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          車両用、屋外POP、大判表示など、しっかり貼り付けたい用途では強力（異方性）タイプを検討します。
        </p>
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">強力タイプでも貼る面・サイズ・厚み・環境を確認する</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          強力タイプでも、必要な吸着力は貼り付ける面、サイズ、厚み、使用環境によって変わります。用途に応じて選ぶことが重要です。
        </p>

        <div className="my-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border border-gray-200 px-3 py-2">種類</th>
                <th className="border border-gray-200 px-3 py-2">特徴</th>
                <th className="border border-gray-200 px-3 py-2">向いている用途</th>
                <th className="border border-gray-200 px-3 py-2">注意点</th>
              </tr>
            </thead>
            <tbody>
              {ISO_TABLE.map((row) => (
                <tr key={row.kind} className="even:bg-gray-50">
                  <td className="border border-gray-200 px-3 py-2 font-semibold">{row.kind}</td>
                  <td className="border border-gray-200 px-3 py-2">{row.feat}</td>
                  <td className="border border-gray-200 px-3 py-2">{row.use}</td>
                  <td className="border border-gray-200 px-3 py-2">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <ProductGrid items={ISO_ANISO_ITEMS} />
        <CTA href={u(P("040937"))}>
          吸着力を重視する用途には、強力マグネットシート・異方性タイプを確認する
        </CTA>

        {/* H2-6 用途別 */}
        <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-4 text-xl font-bold text-gray-900">
          用途別｜どの商品を選べばよい？
        </h2>
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">壁をマグネット対応にしたい</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          壁をマグネット対応にしたいなら、受け側のスチールペーパーが基本です。
        </p>
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">掲示板をマグネット化したい</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          掲示板をマグネット化したいなら、掲示板用スチールシート（ブルテンスティーリー）が候補です。
        </p>
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">POPやパネルをマグネットで貼りたい</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          POPやパネルを磁石で貼りたいなら、粘着付きマグネット（マグネタッキー）が向いています。
        </p>
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">車両用マグネットサインを作りたい</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          車両用マグネットサインには、車両用・強力異方性タイプを検討します。
        </p>
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">ホワイトボード・黒板・反射タイプも検討したい</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          書いて消せる面にしたいならホワイトボード系、黒板面にしたいなら黒板系、夜間・屋外の注意表示には反射タイプも検討できます。これらは自社ECのカテゴリで確認できます。
        </p>

        <div className="my-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border border-gray-200 px-3 py-2">やりたいこと</th>
                <th className="border border-gray-200 px-3 py-2">選ぶ材料</th>
                <th className="border border-gray-200 px-3 py-2">おすすめ商品・カテゴリ</th>
                <th className="border border-gray-200 px-3 py-2">注意点</th>
              </tr>
            </thead>
            <tbody>
              {PURPOSE_TABLE.map((row) => (
                <tr key={row.want} className="even:bg-gray-50">
                  <td className="border border-gray-200 px-3 py-2 font-semibold">{row.want}</td>
                  <td className="border border-gray-200 px-3 py-2">{row.mat}</td>
                  <td className="border border-gray-200 px-3 py-2">{row.rec}</td>
                  <td className="border border-gray-200 px-3 py-2">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mb-4 leading-relaxed text-gray-800">
          ホワイトボード・黒板・反射タイプなどは、自社ECのカテゴリからも確認できます。
        </p>
        <ECCategoryLinks />

        {/* H2-7 車両用 */}
        <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-4 text-xl font-bold text-gray-900">
          車両用マグネットシートを作るときの注意点
        </h2>

        <ArticleFigure
          src={IMAGES.vehicle}
          alt="車両用マグネットシートを営業車に貼るイメージ"
        />

        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">車体に貼るなら車両用・強力タイプを検討する</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          車体に貼るなら、車両用や強力（異方性）タイプを検討します。走行時の風圧や振動にも配慮したい用途です。
        </p>
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">走行前に汚れ・水分・浮きがないか確認する</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          走行前には、車体側とシート側の汚れ・水分・浮きがないか確認してください。
        </p>
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">長期間貼りっぱなしにせず、定期的に外して確認する</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          長期間貼りっぱなしにせず、定期的に外して、車体・シートの状態を確認する運用が安心です。
        </p>
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">曲面・凹凸面・樹脂部分には貼れない場合がある</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          強い曲面、凹凸面、樹脂部分などには貼れない場合があります。貼り付け位置の素材や形状を確認してください。
        </p>

        <ProductGrid items={VEHICLE_ITEMS} />
        <p className="mb-4 leading-relaxed text-gray-800">
          車両用・強力タイプは、
          <ECLink href={u(EC_ANISOTROPIC)}>自社ECの「強力マグネットシート（異方性）一覧」</ECLink>
          や
          <ECLink href={u(EC_REFLECTIVE)}>反射マグネットシート</ECLink>
          でも確認できます。
        </p>
        <CTA href={u(P("029371"))}>
          車両サインを作るなら、車両用マグネットシート・強力異方性タイプを確認する
        </CTA>

        {/* H2-8 Yahoo/自社EC */}
        <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-4 text-xl font-bold text-gray-900">
          Yahoo!ショッピングと自社ECの使い分け
        </h2>

        <ArticleFigure
          src={IMAGES.categoryCompare}
          alt="購買担当者がマグネットシートを比較するイメージ"
        />

        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">少量・ポイント利用ならYahoo!ショッピングも便利</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          少量の購入やポイント利用を重視するなら、Yahoo!ショッピングの商品ページも便利です。
        </p>
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">価格重視・大判・切売りなら自社ECも確認したい</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          価格やサイズ展開を重視する場合は、Yahoo!ショッピングの商品ページだけでなく、自社ECのマグネットシートカテゴリもあわせて確認するのがおすすめです。
        </p>
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">法人用途ではカテゴリ一覧からまとめて比較しやすい</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          法人用途では、カテゴリ一覧からまとめて比較すると、必要なタイプ・サイズを見つけやすくなります。
        </p>
        <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">強力・等方性・のり付き・ホワイトボード・黒板・反射を一覧で見比べる</h3>
        <p className="mb-4 leading-relaxed text-gray-800">
          強力タイプ、等方性、のり付き、ホワイトボード、黒板、反射タイプなどをカテゴリ別に比較できます。
        </p>
        <ECCategoryLinks />
        <CTA href={u(EC_MAGNET_LIST)}>
          価格やサイズ展開を比較したい方は、自社ECのマグネットシートカテゴリも確認する
        </CTA>

        {/* H2-9 メイン商品比較 */}
        <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-4 text-xl font-bold text-gray-900">
          メイン商品比較
        </h2>
        <p className="mb-4 leading-relaxed text-gray-800">
          用途別に代表的な商品をまとめました。詳細仕様は各商品ページでご確認ください。
        </p>
        <ProductGrid items={MAIN_ITEMS} />

        {/* H2-10 失敗 */}
        <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-4 text-xl font-bold text-gray-900">
          よくある失敗
        </h2>
        <div className="my-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border border-gray-200 px-3 py-2">失敗</th>
                <th className="border border-gray-200 px-3 py-2">起こりやすい問題</th>
                <th className="border border-gray-200 px-3 py-2">対策</th>
              </tr>
            </thead>
            <tbody>
              {FAIL_TABLE.map((row) => (
                <tr key={row.fail} className="even:bg-gray-50">
                  <td className="border border-gray-200 px-3 py-2 font-semibold">{row.fail}</td>
                  <td className="border border-gray-200 px-3 py-2">{row.problem}</td>
                  <td className="border border-gray-200 px-3 py-2">{row.fix}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* H2-11 チェックリスト */}
        <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-4 text-xl font-bold text-gray-900">
          購入前チェックリスト
        </h2>
        <div className="my-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border border-gray-200 px-3 py-2">チェック項目</th>
                <th className="border border-gray-200 px-3 py-2">確認内容</th>
              </tr>
            </thead>
            <tbody>
              {CHECKLIST.map((row) => (
                <tr key={row.item} className="even:bg-gray-50">
                  <td className="border border-gray-200 px-3 py-2 font-semibold">{row.item}</td>
                  <td className="border border-gray-200 px-3 py-2">{row.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* H2-12 FAQ */}
        <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-4 text-xl font-bold text-gray-900">
          よくある質問
        </h2>
        <div className="my-4 space-y-4">
          {FAQ_ITEMS.map((item, i) => (
            <div key={item.q} className="rounded-lg border border-gray-200 p-4">
              <p className="mb-2 font-bold text-gray-900">Q{i + 1}. {item.q}</p>
              <p className="text-sm leading-relaxed text-gray-700">
                A. {item.a}
                {item.linkSuffix ? (
                  <>
                    {" "}
                    <Link href="/articles/magnet-sheet-selection" className="text-gray-900 underline hover:no-underline">
                      マグネットシートの選び方
                    </Link>
                    {item.linkSuffix}
                  </>
                ) : null}
              </p>
            </div>
          ))}
        </div>

        {/* 末尾CTA */}
        <div className="mt-12 rounded-lg border border-gray-300 bg-gray-50 p-6">
          <h2 className="mb-3 text-xl font-bold text-gray-900">
            マグネットシートを用途で選び分けて確認する
          </h2>
          <p className="mb-4 leading-relaxed text-gray-800">
            「壁をマグネット対応にしたい（受け側）」のか、「物を磁石で貼りたい（磁石側）」のかで、選ぶ材料が変わります。用途・貼付面・サイズ・環境を確認しながら検討してください。価格やサイズ展開を比較したい場合は、自社ECのカテゴリもあわせて確認できます。
          </p>
          <FinalCTA href={u(EC_MAGNET_LIST)}>
            マグネットシート一覧から、強力・等方性・のり付き・ホワイトボード・黒板・反射タイプまでまとめて確認する
          </FinalCTA>
          <p className="mt-2 text-sm text-gray-600">
            Yahoo!ショッピングの
            <a href={u(URL_YAHOO_MAGNET_LIST)} target="_blank" rel="nofollow sponsored noopener" className="text-gray-900 underline">
              マグネットシート一覧
            </a>
            もあわせてご確認いただけます。
          </p>
        </div>

        <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-4 text-xl font-bold text-gray-900">
          関連記事
        </h2>
        <ul className="my-4 list-disc space-y-2 pl-6 text-gray-800">
          <li>
            <Link href="/articles/magnet-sheet-selection" className="text-gray-900 underline hover:no-underline">
              マグネットシートの選び方｜強力・車両用・印刷用・粘着付き・掲示板用の用途別比較
            </Link>
          </li>
          <li>
            <Link href="/articles/steel-composite-board-whiteboard" className="text-gray-900 underline hover:no-underline">
              ホワイトボードに使える板材の選び方｜スチール複合板とアルミ複合板の違い
            </Link>
          </li>
        </ul>
      </main>

      <SiteFooter />
    </>
  );
}
