import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";

const SLUG = "construction-site-safety-checklist";
const ARTICLE_URL = `https://sagyou-navi.com/articles/${SLUG}`;
const UTM = "utm_source=sagyou_navi";
const TITLE =
  "建設現場の安全対策チェックリスト｜朝礼前・作業中・片付けまで確認すべき項目【2026年版】";
const DESCRIPTION =
  "建設現場の安全対策チェックリストを、朝礼前・作業前・作業中・片付けまでの流れで整理。保護具、暑熱対策、荷役・搬送、仮置き、計量まで実務で確認したい項目と関連用品の比較を掲載しています。";
const HERO = `/images/${SLUG}/construction-safety-checklist-hero.jpg`;

function appendUtm(url: string): string {
  if (!url) return url;
  if (url.includes(UTM)) return url;
  const hashIndex = url.indexOf("#");
  const append = (base: string) =>
    `${base}${base.includes("?") ? "&" : "?"}${UTM}`;
  if (hashIndex === -1) return append(url);
  return `${append(url.slice(0, hashIndex))}${url.slice(hashIndex)}`;
}

const Y = (path: string) =>
  appendUtm(
    `https://store.shopping.yahoo.co.jp/signcity-yshop/${path}${
      path.includes("?") ? "" : "?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea="
    }`
  );
const R = (path: string) =>
  appendUtm(`https://item.rakuten.co.jp/crecote-shop/${path}`);

const CTA = {
  helmet: appendUtm(
    "https://store.shopping.yahoo.co.jp/signcity-yshop/d2ab585eaa5.html?sc_i=shopping-pc-web-category-storeitm-cat_nrw-slctc"
  ),
  heat: appendUtm(
    "https://store.shopping.yahoo.co.jp/signcity-yshop/eab32ec7ce6.html"
  ),
  tent: appendUtm(
    "https://store.shopping.yahoo.co.jp/signcity-yshop/search.html?aq=&oq=&p=%E3%83%86%E3%83%B3%E3%83%88&storeid=signcity-yshop&sc_i=shopping-pc-web-result-storesg-h_srch-srchbtn-sgstfrom-result-storesch-h_srch-srchbox"
  ),
  backpack: appendUtm(
    "https://search.rakuten.co.jp/search/mall/%E3%83%90%E3%83%83%E3%82%AF%E3%83%91%E3%83%83%E3%82%AF/?sid=426972"
  ),
  lighting: R("c/0000000465/"),
  hardware: R("c/0000007133/"),
  cargo: R("c/0000000610/"),
  logistics: R("c/0000000574/"),
  transport: R("c/0000000676/"),
};

type Product = {
  key: string;
  short: string;
  name: string;
  badge: string;
  fit: string;
  point: string;
  note: string;
  imageCode: string;
  url: string;
};

const products: Product[] = [
  {
    key: "windy-clear",
    short: "WindyHelmt クリア",
    name: "トーヨーセーフティ 送風機内蔵ヘルメット WindyHelmt クリア NO.395F-C",
    badge: "ヘルメット",
    fit: "夏場の保護具見直し",
    point: "保護具と暑熱対策を同時に見直したい現場向け。",
    note: "ヘルメット更新タイミングにも合わせやすい。",
    imageCode: "289994",
    url: Y("289994.html"),
  },
  {
    key: "windy-green",
    short: "WindyHelmt グリーン",
    name: "トーヨーセーフティ 送風機内蔵ヘルメット WindyHelmt グリーン NO.395F-G",
    badge: "ヘルメット",
    fit: "色分け運用",
    point: "現場ルールに応じて色分けしたい場合にも対応。",
    note: "用途別配備にも向く。",
    imageCode: "289995",
    url: Y("289995.html"),
  },
  {
    key: "sk181",
    short: "黒球型携帯熱中症計",
    name: "佐藤 黒球型携帯熱中症計 SK-181GT（8313-50）",
    badge: "計測器",
    fit: "暑熱環境の確認",
    point: "感覚ではなく数値で暑熱リスクを把握したいときに。",
    note: "夏場のチェックリストに組み込みやすい。",
    imageCode: "171834",
    url: Y("171834.html"),
  },
  {
    key: "a3blbk",
    short: "A3BLBK 軽量ボックス型リュック",
    name: "TRUSCO プロ用軽量ボックス型リュック A3BLBK",
    badge: "持ち運び",
    fit: "工具・備品の整理持ち運び",
    point: "工具や備品を床置きせず整理しやすい。",
    note: "通路の散乱防止にもつながる。",
    imageCode: "ta034172-a3blbk",
    url: R("ta034172-a3blbk/"),
  },
  {
    key: "stack-block",
    short: "STACK BLOCK 2段タイプ",
    name: "TRUSCO プロ用段積みバッグ STACK BLOCK 2段タイプ SB2SET",
    badge: "持ち運び",
    fit: "工具・消耗品の仕分け",
    point: "段積み・仕分けしやすく、現場内整理に向く。",
    note: "小物や備品の仮置きを明確化しやすい。",
    imageCode: "ta041685-sb2set",
    url: R("ta041685-sb2set/"),
  },
  {
    key: "dhe-box",
    short: "ど冷えもんBOX",
    name: "TRUSCO パーソナルクーリングボックス ど冷えもんBOX DHE-BOX",
    badge: "休憩環境",
    fit: "暑熱対策拠点の整備",
    point: "休憩所の冷却・保冷拠点を作りたい現場向け。",
    note: "給水・冷却導線と合わせて考えたい。",
    imageCode: "289882",
    url: Y("289882.html"),
  },
  {
    key: "dhe-jackery",
    short: "ど冷えもんBOX＋Jackeryセット",
    name: "TRUSCO ど冷えもんBOX＋ジャクリポータブル電源セット DHEBOXJE3000BSET",
    badge: "休憩環境",
    fit: "電源込みで整備したい現場",
    point: "冷却設備と電源確保を同時に考えたいときの候補。",
    note: "休憩所整備をまとめて検討しやすい。",
    imageCode: "289883",
    url: Y("289883.html"),
  },
  {
    key: "ss-16maw",
    short: "Suiden スポットエアコン",
    name: "Suiden スポットエアコン 1口 ポータブルタイプ 100V ホワイト SS-16MAW-1",
    badge: "冷却設備",
    fit: "局所冷却・休憩所",
    point: "休憩所や局所冷却が必要な現場向け。",
    note: "電源・排熱条件の確認が必要。",
    imageCode: "290096",
    url: Y("290096.html"),
  },
  {
    key: "ts23ecn",
    short: "TRUSCO スポットエアコン",
    name: "TRUSCO スポットエアコン 単相100V首振り機能無 ドレンレスタイプ TS23ECN-1DL",
    badge: "冷却設備",
    fit: "現場冷却の比較候補",
    point: "スポットエアコンの比較候補として見やすい。",
    note: "現場条件に合わせた冷却能力を確認。",
    imageCode: "290171",
    url: Y("290171.html"),
  },
  {
    key: "sf45ms",
    short: "スイデン 工場扇 スタンドタイプ",
    name: "スイデン 工場扇 スタンドタイプMS SF-45MS-1VP",
    badge: "送風",
    fit: "送風補助",
    point: "比較的導入しやすい送風補助。",
    note: "無風時の暑熱対策に使いやすい。",
    imageCode: "172314",
    url: Y("172314.html"),
  },
  {
    key: "sf45rot",
    short: "スイデン 工場扇 ロータリータイプ",
    name: "スイデン 工場扇 ロータリータイプ",
    badge: "送風",
    fit: "広い範囲への送風",
    point: "首振りや回転で風を届けたい休憩所向け。",
    note: "設置スペースと電源位置を確認。",
    imageCode: "172311",
    url: Y("172311.html"),
  },
  {
    key: "shinwa-heat",
    short: "シンワ 熱中症計",
    name: "シンワ 温湿度計 熱中症計 70505",
    badge: "計測器",
    fit: "暑熱確認",
    point: "暑さの見える化をしやすい。",
    note: "朝礼前の確認に組み込みやすい。",
    imageCode: "289722",
    url: Y("289722.html"),
  },
  {
    key: "tcb1e",
    short: "コンテナバッグ 1型",
    name: "TRUSCO コンテナバック 1型 排出口なし エコノミータイプ TCB-1E",
    badge: "回収・仮置き",
    fit: "小〜中規模の回収",
    point: "シンプルな回収・仮置きに使いやすい。",
    note: "廃材や資材の一時管理向け。",
    imageCode: "ta015719-tcb1e",
    url: R("ta015719-tcb1e/"),
  },
  {
    key: "tcb2e",
    short: "コンテナバッグ 2型",
    name: "TRUSCO コンテナバック 2型 排出口あり エコノミータイプ TCB-2E",
    badge: "回収・仮置き",
    fit: "排出作業を想定する現場",
    point: "排出口付きで中身の排出を考えやすい。",
    note: "回収・排出作業の効率化に。",
    imageCode: "ta015723-tcb2e",
    url: R("ta015723-tcb2e/"),
  },
  {
    key: "tfg005",
    short: "フレコンバッグ TFG-005",
    name: "TRUSCO フレコンバッグ 排出口有り 10枚入り TFG-005",
    badge: "フレコン",
    fit: "まとまった量の仮置き・搬送",
    point: "資材や廃材をまとめて扱いやすい。",
    note: "容量と置き場の確認が必要。",
    imageCode: "ta016157-tfg005",
    url: R("ta016157-tfg005/"),
  },
  {
    key: "hscd10",
    short: "ホイストスケール HSCD10",
    name: "クボタ 防水・防塵直示式ホイストスケール1000kg用 HSCD10",
    badge: "重量確認",
    fit: "吊り荷・重量管理",
    point: "感覚に頼らない重量確認に。",
    note: "荷役時の安全確認に役立つ。",
    imageCode: "ta029370-hscd10",
    url: R("ta029370-hscd10/"),
  },
  {
    key: "hscd30",
    short: "ホイストスケール HSCD30",
    name: "クボタ 防水・防塵直示式ホイストスケール3000kg用 HSCD30",
    badge: "重量確認",
    fit: "より大きな重量管理",
    point: "重量物の確認精度を高めたい現場向け。",
    note: "取り扱い重量に応じて選定。",
    imageCode: "ta029372-hscd30",
    url: appendUtm(
      "https://item.rakuten.co.jp/crecote-shop/ta029372-hscd30/?variantId=TA029372"
    ),
  },
];

const featuredKeys = ["windy-clear", "sk181", "a3blbk", "stack-block"] as const;
const heatKeys = [
  "dhe-box",
  "dhe-jackery",
  "ss-16maw",
  "ts23ecn",
  "sf45ms",
  "shinwa-heat",
] as const;
const gearKeys = [
  "windy-clear",
  "windy-green",
  "a3blbk",
  "stack-block",
] as const;
const cargoKeys = [
  "tcb1e",
  "tcb2e",
  "tfg005",
  "hscd10",
  "hscd30",
] as const;
const compareKeys = [
  "windy-clear",
  "sk181",
  "a3blbk",
  "stack-block",
  "dhe-box",
  "ss-16maw",
  "tcb1e",
  "tcb2e",
  "tfg005",
  "hscd10",
] as const;

const faqs = [
  {
    question: "建設現場の安全対策チェックリストには何を入れるべきですか？",
    answer:
      "保護具、通路・足元、仮置き、荷役、暑熱対策、持ち運び、片付け、連絡共有など、毎日の現場で事故につながりやすい項目を入れるのが基本です。",
  },
  {
    question: "朝礼前に最低限確認したい項目は？",
    answer:
      "服装・保護具、当日の作業内容、危険箇所、暑熱状況、休憩所、持ち運び用品、通路・仮置きの状態を確認したいところです。",
  },
  {
    question: "暑熱対策は安全対策チェックリストに入れるべきですか？",
    answer:
      "はい。夏場の建設現場では、暑熱対策は安全対策の一部として扱うべきです。WBGTや熱中症計、送風・冷却・給水体制の確認も重要です。",
  },
  {
    question: "コンテナバッグとフレコンバッグはどう使い分けますか？",
    answer:
      "コンテナバッグは回収や小〜中規模の仮置きに、フレコンバッグはまとまった量の資材・廃材の仮置きや搬送に向きます。排出口の有無でも使い分けしやすくなります。",
  },
  {
    question: "工具の持ち運びや整理整頓も安全対策に含まれますか？",
    answer:
      "含まれます。現場の散乱は転倒・接触・紛失・作業効率低下を招くため、バッグや収納用品の整備も安全対策の一部です。",
  },
];

const relatedArticles = [
  {
    href: "/articles/helmet-heatstroke-risk",
    label: "ヘルメットと熱中症リスクの関係",
  },
  {
    href: "/articles/outdoor-work-heat-clothing",
    label: "屋外作業の暑さ対策ウェアの選び方",
  },
  {
    href: "/articles/worksite-rest-area-heat",
    label: "現場休憩所の暑熱対策",
  },
  {
    href: "/articles/jobsite-cooler-box-comparison",
    label: "現場用クーラーボックス比較",
  },
  {
    href: "/articles/container-bag-selection",
    label: "コンテナバッグの選び方",
  },
  {
    href: "/articles/flexible-container-bag-selection",
    label: "フレコンバッグの選び方",
  },
  {
    href: "/articles/toolbag-backpack-selection",
    label: "工具バッグ・リュックの選び方",
  },
  {
    href: "/articles/spot-cooler-rest-area",
    label: "スポットクーラーと休憩所づくり",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESCRIPTION,
  datePublished: "2026-07-27",
  dateModified: "2026-07-27",
  mainEntityOfPage: ARTICLE_URL,
  image: [`https://sagyou-navi.com${HERO}`],
  author: { "@type": "Organization", name: "作業用品ナビ編集部" },
  publisher: {
    "@type": "Organization",
    name: "作業用品ナビ",
    url: "https://sagyou-navi.com",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "作業用品ナビ",
      item: "https://sagyou-navi.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "記事一覧",
      item: "https://sagyou-navi.com/articles",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: TITLE,
      item: ARTICLE_URL,
    },
  ],
};

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    type: "article",
    url: ARTICLE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: "作業用品ナビ",
    images: [
      {
        url: HERO,
        width: 1200,
        height: 675,
        alt: "建設現場で安全対策チェックリストを確認するイメージ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [HERO],
  },
};

function getProduct(key: string): Product {
  const found = products.find((product) => product.key === key);
  if (!found) throw new Error(`Product not found: ${key}`);
  return found;
}

function Mark({ children }: { children: ReactNode }) {
  return <mark className={cls.mark}>{children}</mark>;
}

function SectionTitle({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2 id={id} className={cls.h2}>
      {children}
    </h2>
  );
}

function SubTitle({ children }: { children: ReactNode }) {
  return <h3 className={cls.h3}>{children}</h3>;
}

function TableWrap({ children }: { children: ReactNode }) {
  return (
    <div className="my-5 overflow-x-auto rounded-xl border border-gray-300">
      {children}
    </div>
  );
}

function Th({ children }: { children: ReactNode }) {
  return <th className={cls.th}>{children}</th>;
}

function Td({ children }: { children: ReactNode }) {
  return <td className={cls.td}>{children}</td>;
}

function AnswerBox({ children }: { children: ReactNode }) {
  return (
    <section className="my-6 rounded-2xl border-2 border-gray-900 bg-amber-50 p-5">
      {children}
    </section>
  );
}

function NoteBox({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <aside className="my-6 rounded-2xl border border-gray-900 bg-white p-5">
      <p className="text-lg font-black text-gray-900">{title}</p>
      <div className="mt-2 space-y-2 text-[15px] leading-7 text-gray-900">
        {children}
      </div>
    </aside>
  );
}

function Figure({ file, alt }: { file: string; alt: string }) {
  return (
    <figure className="my-7 overflow-hidden rounded-2xl border border-gray-300">
      <Image
        src={`/images/${SLUG}/${file}`}
        alt={alt}
        width={1200}
        height={675}
        className="h-auto w-full"
      />
    </figure>
  );
}

function ExternalButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}) {
  const className =
    variant === "primary"
      ? "inline-flex min-h-11 items-center justify-center rounded-md bg-gray-900 px-4 py-3 text-center text-sm font-bold text-white transition hover:bg-gray-700"
      : "inline-flex min-h-11 items-center justify-center rounded-md border border-gray-900 bg-white px-4 py-3 text-center text-sm font-bold text-gray-900 transition hover:bg-amber-50";
  return (
    <a href={href} target="_blank" rel="nofollow sponsored" className={className}>
      {children}
    </a>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-gray-300 bg-white shadow-sm">
      <div className="relative aspect-[4/3] bg-gray-50">
        <Image
          src={`/products/${product.imageCode}.jpg`}
          alt={`${product.name}の商品画像`}
          fill
          sizes="(max-width: 768px) 100vw, 360px"
          className="object-contain p-4"
        />
      </div>
      <div className="space-y-3 p-5">
        <span className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-gray-900">
          {product.badge}
        </span>
        <h3 className="text-xl font-black leading-snug text-gray-900">
          {product.short}
        </h3>
        <p className={cls.bodySm}>{product.name}</p>
        <ul className="space-y-1 text-[15px] leading-7 text-gray-900">
          <li>
            <strong>向く場面：</strong>
            {product.fit}
          </li>
          <li>
            <strong>選び方：</strong>
            {product.point}
          </li>
          <li>
            <strong>確認点：</strong>
            {product.note}
          </li>
        </ul>
        <ExternalButton href={product.url}>商品を見る</ExternalButton>
      </div>
    </article>
  );
}

function ProductTableCell({ product }: { product: Product }) {
  return (
    <a
      href={product.url}
      target="_blank"
      rel="nofollow sponsored"
      className="group flex min-w-[16rem] items-start gap-3 text-gray-900 no-underline"
    >
      <span className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
        <Image
          src={`/products/${product.imageCode}.jpg`}
          alt={`${product.short}の商品画像`}
          fill
          sizes="80px"
          className="object-contain p-1.5"
        />
      </span>
      <span>
        <span className="mb-1 block text-xs font-bold text-gray-900">
          {product.badge}
        </span>
        <span className="block font-black leading-6 group-hover:underline">
          {product.short}
        </span>
        <span className="mt-1 block text-xs leading-5 text-gray-900">
          {product.name}
        </span>
      </span>
    </a>
  );
}

function ProductGrid({ keys }: { keys: readonly string[] }) {
  return (
    <div className="my-6 grid gap-5 sm:grid-cols-2">
      {keys.map((key) => (
        <ProductCard key={key} product={getProduct(key)} />
      ))}
    </div>
  );
}

function CtaRow({
  items,
}: {
  items: { href: string; label: string; variant?: "primary" | "secondary" }[];
}) {
  return (
    <div className="my-5 flex flex-wrap gap-3">
      {items.map((item) => (
        <ExternalButton
          key={item.label}
          href={item.href}
          variant={item.variant ?? "secondary"}
        >
          {item.label}
        </ExternalButton>
      ))}
    </div>
  );
}

export default function Page() {
  const compareProducts = compareKeys.map(getProduct);

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-[850px] px-4 py-8 text-gray-900 sm:px-6">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />

        <nav aria-label="パンくず" className="mb-5 text-sm text-gray-800">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="font-bold underline underline-offset-4">
                作業用品ナビ
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link
                href="/articles"
                className="font-bold underline underline-offset-4"
              >
                記事一覧
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="font-bold">
              建設現場の安全対策チェックリスト
            </li>
          </ol>
        </nav>

        <header>
          <p className="text-sm font-bold tracking-wide text-gray-900">
            安全管理・点検｜朝礼前・作業中・片付けまで
          </p>
          <h1 className={cls.h1}>
            建設現場の安全対策チェックリスト
            <span className="mt-3 block text-2xl font-black sm:text-3xl">
              朝礼前・作業中・片付けまで確認すべき項目【2026年版】
            </span>
          </h1>
          <p className={cls.meta}>
            公開日・最終更新日：2026年7月27日 ｜ 作業用品ナビ編集部
          </p>
        </header>

        <Figure
          file="construction-safety-checklist-hero.jpg"
          alt="建設現場で安全対策チェックリストを確認するイメージ"
        />

        <p className={cls.body}>
          建設現場の安全対策というと、ヘルメットや安全帯などの保護具を思い浮かべる方が多いかもしれません。しかし、実際の現場ではそれだけでは不十分です。
          <strong>
            作業前の通路確認、工具や資材の持ち運び、荷役や仮置き、片付け、暑熱対策、休憩所づくり
          </strong>
          まで含めて点検してはじめて、現場全体の安全レベルが安定しやすくなります。
        </p>
        <p className={cls.body}>
          とくに「建設現場
          安全対策チェックリスト」では、一般論ではなく、
          <Mark>毎日どの項目を、どの順番で確認すればよいか</Mark>
          を知りたいニーズが強い傾向があります。現場責任者や安全衛生担当は、確認項目だけでなく、そろえるべき備品や用品も同時に知りたいはずです。
        </p>
        <p className={cls.body}>
          この記事では、建設現場の安全対策チェックリストを、
          <strong>朝礼前・作業開始前</strong>、<strong>作業中</strong>、
          <strong>片付け・荷役・搬送時</strong>
          の3つの時間軸で整理しながら、関連用品まで実務的に落とし込んで解説します。
        </p>

        <AnswerBox>
          <p className="text-base font-black text-gray-900">
            まず結論｜安全対策チェックリストは「作業前・作業中・片付け後」で分けると漏れにくい
          </p>
          <div className="mt-3 space-y-3 leading-8 text-gray-900">
            <p>
              建設現場の安全対策チェックリストは、
              <Mark>1回で全部確認しようとせず、タイミング別に分ける</Mark>
              のが実務では有効です。
            </p>
            <div>
              <p className="font-black">最低限おさえたい確認軸</p>
              <ol className="mt-2 list-decimal space-y-1 pl-6">
                <li>
                  <strong>服装・保護具</strong>に問題がないか
                </li>
                <li>
                  <strong>通路・足元・仮置き</strong>に危険がないか
                </li>
                <li>
                  <strong>荷役・吊り荷・重量確認</strong>が曖昧になっていないか
                </li>
                <li>
                  <strong>暑熱・休憩・給水・冷却体制</strong>が整っているか
                </li>
                <li>
                  <strong>工具・資材・廃材の持ち運びや保管</strong>
                  が安全に行えるか
                </li>
              </ol>
            </div>
            <div>
              <p className="font-black">実務上のポイント</p>
              <ul className="mt-2 list-disc space-y-1 pl-6">
                <li>朝礼前は「人・装備・環境」を確認する</li>
                <li>
                  作業中は「変化した危険」「整理整頓」「暑熱」「荷役」を見直す
                </li>
                <li>
                  片付け時は「廃材処理」「搬送」「残置物」「翌日に危険を残さないこと」を確認する
                </li>
              </ul>
            </div>
          </div>
          <CtaRow
            items={[
              { href: CTA.helmet, label: "ヘルメット一覧はこちら", variant: "primary" },
              { href: CTA.lighting, label: "工事・照明用品一覧はこちら" },
              { href: CTA.heat, label: "熱中症対策用品一覧はこちら" },
            ]}
          />
        </AnswerBox>

        <nav
          aria-label="目次"
          className="my-8 rounded-xl border border-gray-300 bg-white p-5"
        >
          <p className="text-lg font-black text-gray-900">目次</p>
          <ol className="mt-3 grid gap-2 text-[15px] font-medium leading-7 text-gray-900 sm:grid-cols-2">
            <li>
              <a href="#featured" className="underline underline-offset-4">
                1. まず整えたい4つの安全対策用品
              </a>
            </li>
            <li>
              <a href="#why" className="underline underline-offset-4">
                2. チェックリストが必要な理由
              </a>
            </li>
            <li>
              <a href="#prework" className="underline underline-offset-4">
                3. 朝礼前・作業開始前
              </a>
            </li>
            <li>
              <a href="#during" className="underline underline-offset-4">
                4. 作業中の確認項目
              </a>
            </li>
            <li>
              <a href="#cleanup" className="underline underline-offset-4">
                5. 片付け・搬送・廃材処理
              </a>
            </li>
            <li>
              <a href="#compare" className="underline underline-offset-4">
                6. 用途別比較表
              </a>
            </li>
            <li>
              <a href="#groups" className="underline underline-offset-4">
                7. カテゴリ別おすすめ用品
              </a>
            </li>
            <li>
              <a href="#mistakes" className="underline underline-offset-4">
                8. よくある失敗例
              </a>
            </li>
            <li>
              <a href="#corp" className="underline underline-offset-4">
                9. 法人担当者向けチェックリスト
              </a>
            </li>
            <li>
              <a href="#faq" className="underline underline-offset-4">
                10. FAQ
              </a>
            </li>
          </ol>
        </nav>

        <SectionTitle id="featured">まず整えたい4つの安全対策用品</SectionTitle>
        <p className={cls.body}>
          安全対策チェックリストは、紙やデータだけ整えても現場に必要な用品が足りなければ機能しません。まずは、チェックリストと相性のよい代表用品を押さえておくと、運用に落とし込みやすくなります。
        </p>
        <ProductGrid keys={featuredKeys} />
        <CtaRow
          items={[
            { href: CTA.helmet, label: "ヘルメット一覧はこちら", variant: "primary" },
            { href: CTA.backpack, label: "バックパック一覧はこちら" },
            { href: CTA.heat, label: "熱中症対策用品一覧はこちら" },
          ]}
        />

        <SectionTitle id="why">
          建設現場で安全対策チェックリストが必要な理由
        </SectionTitle>
        <SubTitle>朝礼や巡視だけでは見落としが起きやすい</SubTitle>
        <p className={cls.body}>
          建設現場では、朝礼、KY活動、現場巡視など、もともと安全確認の機会があります。ただし、確認が習慣になりすぎると、内容が抽象的になったり、毎日同じことを言うだけになったりしやすいのも事実です。
        </p>
        <p className={cls.body}>チェックリストの形で、次を具体化すると形式的な確認で終わりにくくなります。</p>
        <ul className={cls.list}>
          <li>今日の現場で本当に確認すべきこと</li>
          <li>気温や人数によって追加で見ること</li>
          <li>搬送や片付けで見落としやすいこと</li>
        </ul>

        <SubTitle>
          ヒヤリハットは「小さな見落とし」の積み重ねで起こる
        </SubTitle>
        <p className={cls.body}>
          転倒や接触、荷崩れ、資材の置き忘れ、熱中症の兆候見落としなど、多くのヒヤリハットは、大きな違反よりも小さな見落としの連続から起こります。
        </p>
        <ul className={cls.list}>
          <li>通路にバッグや工具が出ていた</li>
          <li>フレコンやコンテナバッグの置き場が曖昧だった</li>
          <li>吊り荷重量の確認が曖昧だった</li>
          <li>休憩所はあるが送風設備や飲料管理が弱かった</li>
        </ul>
        <p className={cls.body}>
          こうした状態は、単体では軽く見えても、積み重なると事故につながります。
        </p>

        <SubTitle>用品とチェック項目を結び付けると定着しやすい</SubTitle>
        <p className={cls.body}>
          チェックリストは、確認項目だけ並べるより、「この項目は何でカバーするか」をセットにした方が現場へ定着しやすくなります。
        </p>
        <ul className={cls.list}>
          <li>
            <strong>暑熱確認</strong> → 熱中症計、スポットエアコン、送風機、クーラーボックス
          </li>
          <li>
            <strong>保護具確認</strong> → ヘルメット、空調服・冷却服
          </li>
          <li>
            <strong>工具持ち運び確認</strong> → リュック、段積みバッグ
          </li>
          <li>
            <strong>廃材処理確認</strong> → コンテナバッグ、フレコンバッグ
          </li>
          <li>
            <strong>吊り荷確認</strong> → ホイストスケール
          </li>
        </ul>

        <SectionTitle id="prework">
          朝礼前・作業開始前の安全対策チェックリスト
        </SectionTitle>
        <Figure
          file="construction-prework-safety-check.jpg"
          alt="作業前に保護具や工具を点検するイメージ"
        />

        <SubTitle>1. 服装・保護具の確認</SubTitle>
        <p className={cls.body}>
          作業前に最初に確認したいのが、作業者の服装と保護具です。ヘルメット、手袋、安全靴などの基本装備はもちろん、夏場は暑熱対策として空調服や冷却服を使うかも判断ポイントになります。
        </p>
        <ul className={cls.list}>
          <li>ヘルメットは正しく着用されているか</li>
          <li>破損や劣化がないか</li>
          <li>服装が今日の作業内容に合っているか</li>
          <li>暑熱対策が必要な気温・作業負荷か</li>
        </ul>
        <NoteBox title="関連商品の目安">
          <p>
            送風機内蔵ヘルメット WindyHelmt（クリア / グリーン）、空調服・冷却服など。保護具更新と暑熱対策を同時に検討すると導入判断がしやすいです。
          </p>
        </NoteBox>

        <SubTitle>2. 工具・持ち運び用品の確認</SubTitle>
        <p className={cls.body}>
          工具や備品の置き場が曖昧だと、作業開始前から現場が散らかりやすくなり、つまずきや探し物の増加につながります。必要な工具・備品を安全に持ち運べるかも、チェックリストに入れておきたい項目です。
        </p>
        <ul className={cls.list}>
          <li>今日必要な工具・備品がそろっているか</li>
          <li>持ち運び用バッグやボックスがあるか</li>
          <li>通路や作業床へ無造作に置かれていないか</li>
        </ul>
        <ProductGrid keys={["a3blbk", "stack-block"]} />

        <SubTitle>3. 気温・休憩所・暑熱対策の確認</SubTitle>
        <Figure
          file="construction-heat-safety-rest-area.jpg"
          alt="建設現場の休憩所と暑熱対策用品を確認するイメージ"
        />
        <p className={cls.body}>
          建設現場では、暑熱対策を安全対策の一部として考える必要があります。作業開始前に、休憩所、送風、冷却設備、飲料、氷、WBGT確認ができる状態かを点検しておくと、後から慌てにくくなります。
        </p>
        <ul className={cls.list}>
          <li>その日の暑熱環境を把握しているか</li>
          <li>休憩所や日陰が確保されているか</li>
          <li>給水・保冷・冷却用品があるか</li>
          <li>送風やスポット冷却の設備が動くか</li>
        </ul>
        <CtaRow
          items={[
            { href: CTA.heat, label: "熱中症対策用品一覧はこちら", variant: "primary" },
            { href: CTA.tent, label: "現場ひよけテント一覧" },
          ]}
        />

        <SubTitle>4. 通路・仮置き・搬送動線の確認</SubTitle>
        <p className={cls.body}>
          朝礼前や作業開始前に、通路と仮置きスペースを確認しておくと、作業中の散乱や接触リスクを減らしやすくなります。資材搬入や廃材搬出のルートが曖昧な現場ほど、この確認が重要です。
        </p>
        <ul className={cls.list}>
          <li>通路に荷物や工具がはみ出していないか</li>
          <li>資材の仮置き位置は明確か</li>
          <li>廃材置き場や回収バッグの置き場があるか</li>
          <li>荷役ルートに危険箇所がないか</li>
        </ul>

        <SectionTitle id="during">作業中の安全対策チェックリスト</SectionTitle>

        <SubTitle>1. 足元・整理整頓</SubTitle>
        <Figure
          file="construction-site-organization-bags.jpg"
          alt="工具バッグやコンテナバッグで現場を整理整頓するイメージ"
        />
        <p className={cls.body}>
          作業中に最も崩れやすいのが整理整頓です。資材や工具が増えると、作業前はきれいでも昼前には通路が狭くなっていることがあります。整理整頓は「片付けの問題」ではなく、
          <Mark>転倒・接触・作業効率低下を防ぐ安全対策</Mark>
          です。
        </p>
        <ul className={cls.list}>
          <li>足元に不要物がないか</li>
          <li>工具や部材の置き場が固定されているか</li>
          <li>持ち運びバッグが通路をふさいでいないか</li>
          <li>廃材が無造作に積まれていないか</li>
        </ul>

        <SubTitle>2. 荷役・吊り荷・重量確認</SubTitle>
        <Figure
          file="construction-material-handling-check.jpg"
          alt="建設現場で荷役や吊り荷の安全確認をするイメージ"
        />
        <p className={cls.body}>
          荷役や吊り作業では、重量確認や吊り荷管理の曖昧さが大きなリスクになります。重量物を取り扱う現場では、計量・表示・共有が重要です。
        </p>
        <ul className={cls.list}>
          <li>取り扱う荷の重量を把握しているか</li>
          <li>荷の吊り方や保持状態に問題はないか</li>
          <li>搬送中の接触リスクがないか</li>
          <li>フレコンやコンテナバッグに過積載がないか</li>
        </ul>
        <ProductGrid keys={["hscd10", "hscd30"]} />

        <SubTitle>3. 送風・冷却・給水</SubTitle>
        <p className={cls.body}>
          作業が始まると、朝の時点では足りていた暑熱対策が不十分になることがあります。休憩所が遠い、冷たい飲料が足りない、風が届かないなど、現場の変化に合わせて見直しが必要です。
        </p>
        <ul className={cls.list}>
          <li>給水・塩分補給がしやすいか</li>
          <li>送風が現場や休憩所へ届いているか</li>
          <li>冷却設備が稼働しているか</li>
          <li>体調不良者が出た場合に休ませる場所があるか</li>
        </ul>

        <SubTitle>4. 情報共有と異常時対応</SubTitle>
        <p className={cls.body}>
          安全対策チェックリストは、確認した内容を共有できてはじめて意味があります。体調不良や危険箇所を見つけたときに、誰へ、どう共有するかが曖昧だと、対応が遅れやすくなります。
        </p>
        <ul className={cls.list}>
          <li>危険箇所の共有がされているか</li>
          <li>体調不良者の離脱判断ができるか</li>
          <li>冷却・見守り・搬送の流れが共有されているか</li>
          <li>その場しのぎでなく、次回の見直しに反映できるか</li>
        </ul>

        <SectionTitle id="cleanup">
          片付け・搬送・廃材処理のチェックリスト
        </SectionTitle>
        <Figure
          file="construction-waste-handling-bulk-bag.jpg"
          alt="フレコンバッグで廃材や資材を整理するイメージ"
        />

        <SubTitle>コンテナバッグ・フレコンバッグの使い分け</SubTitle>
        <p className={cls.body}>
          片付けや廃材処理の工程は、作業終盤で気が緩みやすく、事故や散乱が起きやすいタイミングです。そこで、回収や仮置きに使うバッグの選定が重要になります。
        </p>
        <ul className={cls.list}>
          <li>
            <strong>1型（排出口なし）</strong>
            ：細かな廃材や混載しやすいものの一時回収に向く。シンプルで導入しやすい
          </li>
          <li>
            <strong>2型（排出口あり）</strong>
            ：内容物の排出を考えたいときに向く。回収・排出作業を想定する現場向け
          </li>
          <li>
            <strong>フレコンバッグ</strong>
            ：ある程度まとまった資材や廃材の仮置き・搬送に向く。数量・容量管理がしやすい
          </li>
        </ul>
        <ProductGrid keys={["tcb1e", "tcb2e", "tfg005"]} />
        <CtaRow
          items={[
            { href: CTA.cargo, label: "荷役用品一覧はこちら", variant: "primary" },
            { href: CTA.logistics, label: "物流・保管用品一覧はこちら" },
            { href: CTA.transport, label: "搬送機器一覧はこちら" },
          ]}
        />

        <SubTitle>搬送・仮置きの確認</SubTitle>
        <p className={cls.body}>
          片付け時には、どこに置くか、誰が運ぶか、通路をふさがないか、翌日の作業へ支障を残さないかを確認する必要があります。
        </p>
        <ul className={cls.list}>
          <li>廃材や資材の仮置き場所が明確か</li>
          <li>搬送ルートに障害物がないか</li>
          <li>バッグや容器が破損していないか</li>
          <li>翌日の作業に危険物を残していないか</li>
        </ul>

        <SubTitle>計量・吊り荷の確認</SubTitle>
        <p className={cls.body}>
          吊り荷や重量管理が必要な現場では、回収物や資材の重量把握も安全対策につながります。ホイストスケールを活用すると、感覚だけに頼らない管理がしやすくなります。
        </p>

        <SectionTitle id="compare">
          商品サムネ付き比較｜安全対策用品を用途別に比較
        </SectionTitle>
        <p className={cls.body}>
          チェックリストと一緒に見ておきたい用品を、用途別にサムネ付きで整理しました。スマホでは表を横スクロールできます。
        </p>
        <TableWrap>
          <table className={cls.table}>
            <thead>
              <tr>
                <Th>商品</Th>
                <Th>分類</Th>
                <Th>向く場面</Th>
                <Th>選び方の要点</Th>
                <Th>導線</Th>
              </tr>
            </thead>
            <tbody>
              {compareProducts.map((product) => (
                <tr key={product.key}>
                  <Td>
                    <ProductTableCell product={product} />
                  </Td>
                  <Td>{product.badge}</Td>
                  <Td>{product.fit}</Td>
                  <Td>
                    {product.point}
                    <br />
                    <span className="text-sm">{product.note}</span>
                  </Td>
                  <Td>
                    <ExternalButton href={product.url}>商品を見る</ExternalButton>
                  </Td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableWrap>

        <SectionTitle id="groups">カテゴリ別おすすめ用品</SectionTitle>

        <SubTitle>暑熱・休憩環境まわり</SubTitle>
        <p className={cls.body}>
          夏場の建設現場では、暑熱対策も安全対策の一部です。計測、送風、冷却、休憩環境をあわせて整えると、チェックリストを実務へ落とし込みやすくなります。
        </p>
        <ProductGrid keys={heatKeys} />
        <CtaRow
          items={[
            { href: CTA.heat, label: "熱中症対策用品一覧はこちら", variant: "primary" },
            { href: CTA.tent, label: "現場ひよけテント一覧" },
          ]}
        />

        <SubTitle>保護具・持ち運び用品</SubTitle>
        <p className={cls.body}>
          ヘルメットや持ち運び用品は、保護具だけでなく、現場の散乱防止や整理整頓にも関係します。安全対策を「物の置き方」まで広げるのがポイントです。
        </p>
        <ProductGrid keys={gearKeys} />
        <CtaRow
          items={[
            { href: CTA.helmet, label: "ヘルメット一覧はこちら", variant: "primary" },
            { href: CTA.backpack, label: "バックパック一覧はこちら" },
          ]}
        />

        <SubTitle>荷役・搬送・保管用品</SubTitle>
        <p className={cls.body}>
          荷役や廃材処理は作業終盤ほど気が緩みやすく、事故の火種になりやすい領域です。仮置き・回収・重量確認まで含めて見直すと、チェックリストが現場実務へつながります。
        </p>
        <ProductGrid keys={cargoKeys} />
        <CtaRow
          items={[
            { href: CTA.cargo, label: "荷役用品一覧はこちら", variant: "primary" },
            { href: CTA.logistics, label: "物流・保管用品一覧はこちら" },
            { href: CTA.transport, label: "搬送機器一覧はこちら" },
            { href: CTA.hardware, label: "金物・建築資材一覧はこちら" },
          ]}
        />

        <SectionTitle id="mistakes">よくある失敗例</SectionTitle>
        <ul className="my-4 grid gap-3">
          {[
            {
              title: "チェックリストが紙だけで終わっている",
              body: "項目だけ並んでいても、実際に使う用品や保管場所が整っていないと、現場では機能しません。",
            },
            {
              title: "作業前しか見ていない",
              body: "安全確認は朝だけで完了ではありません。作業中に散らかる、午後に暑熱リスクが上がる、片付け時に荷役事故が起こるなど、時間帯でリスクは変化します。",
            },
            {
              title: "暑熱対策を別問題にしている",
              body: "夏場の建設現場では、暑熱対策は安全対策の一部です。送風・給水・休憩・見守り・冷却の確認を、チェックリストに含めておくべきです。",
            },
            {
              title: "廃材処理や仮置きを軽視している",
              body: "事故は「作業本番」だけでなく、片付けや搬送でも起きます。コンテナバッグやフレコンバッグを含めた整理ルールが重要です。",
            },
            {
              title: "工具の持ち運びを軽く見ている",
              body: "持ち運び手段がなく、工具や小物が床置きになると、転倒や紛失、探し物の増加につながります。収納と安全は切り離せません。",
            },
          ].map((item) => (
            <li
              key={item.title}
              className="rounded-2xl border border-rose-300 bg-rose-50 px-5 py-4"
            >
              <p className="font-black text-gray-900">{item.title}</p>
              <p className="mt-2 text-[15px] leading-7 text-gray-900">
                {item.body}
              </p>
            </li>
          ))}
        </ul>

        <SectionTitle id="corp">法人担当者向けチェックリスト</SectionTitle>
        <Figure
          file="construction-safety-procurement-meeting.jpg"
          alt="安全対策用品を選定する会議イメージ"
        />
        <ul className="my-4 grid gap-3">
          {[
            "朝礼前・作業前・作業中・片付けの4段階で確認項目が整理されている",
            "ヘルメット、保護具、暑熱対策用品が不足していない",
            "通路、仮置き、荷役ルート、廃材回収のルールがある",
            "工具や備品の持ち運び用品が整っている",
            "フレコンバッグやコンテナバッグの用途が現場で共有されている",
            "重量確認や吊り荷管理のルールがある",
            "教育用に使えるチェックリストとして標準化できる",
          ].map((item) => (
            <li
              key={item}
              className="rounded-2xl border border-gray-300 bg-white px-5 py-4 text-[15px] leading-7 text-gray-900"
            >
              □ {item}
            </li>
          ))}
        </ul>

        <SectionTitle id="faq">FAQ</SectionTitle>
        <div className="my-5 space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-gray-300 bg-white p-5"
            >
              <h3 className={cls.faqQ}>Q. {faq.question}</h3>
              <p className="leading-8 text-gray-900">A. {faq.answer}</p>
            </div>
          ))}
        </div>

        <SectionTitle id="summary">
          まとめ｜安全対策チェックリストは「用品と運用」をセットで整える
        </SectionTitle>
        <p className={cls.body}>
          建設現場の安全対策チェックリストは、単に確認項目を並べるだけでは十分ではありません。大切なのは、
          <Mark>いつ確認するか</Mark>、<Mark>誰が見るか</Mark>、
          <Mark>何で対策するか</Mark>
          をセットで考えることです。
        </p>
        <p className={cls.body}>
          保護具、暑熱対策、工具持ち運び、荷役・仮置き、廃材処理、重量確認まで、現場全体を一つの流れとして見ると、抜け漏れは減らしやすくなります。現場に合わせてチェック項目を整理し、必要な用品を前半から導入できるよう、この記事の比較表や商品導線も活用してみてください。
        </p>
        <CtaRow
          items={[
            { href: CTA.lighting, label: "工事・照明用品一覧はこちら", variant: "primary" },
            { href: CTA.cargo, label: "荷役用品一覧はこちら" },
            { href: CTA.logistics, label: "物流・保管用品一覧はこちら" },
            { href: CTA.transport, label: "搬送機器一覧はこちら" },
            { href: CTA.helmet, label: "ヘルメット一覧はこちら" },
            { href: CTA.heat, label: "熱中症対策用品一覧はこちら" },
          ]}
        />

        <section className="my-10 rounded-2xl border border-gray-300 bg-white p-5">
          <h2 className={cls.ctaH3}>関連記事</h2>
          <ul className="mt-3 grid gap-2 text-[15px] leading-7 text-gray-900 sm:grid-cols-2">
            {relatedArticles.map((article) => (
              <li key={article.href}>
                <Link
                  href={article.href}
                  className="font-bold underline underline-offset-4"
                >
                  {article.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <p className="mt-8 text-sm leading-7 text-gray-800">
          ※商品の仕様・在庫・価格は販売ページの表示が優先されます。導入前に現場条件（電源、設置スペース、取り扱い重量、運用ルール）を確認してください。
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
