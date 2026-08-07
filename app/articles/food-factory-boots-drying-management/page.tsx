import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";

const slug = "food-factory-boots-drying-management";
const siteUrl = "https://www.sagyou-navi.com";
const canonicalUrl = `${siteUrl}/articles/${slug}`;
const heroImage = `/images/${slug}/food-factory-boots-drying-hero.webp`;
const UTM =
  "utm_source=sagyou_navi&utm_medium=article&utm_campaign=food-factory-boots-drying-management";

const title =
  "食品工場の長靴乾燥を効率化｜乾かない・臭う問題と業務用長靴ドライヤー30・40・50足の選び方【2026年版】";
const shortTitle = "食品工場の長靴乾燥を効率化";
const description =
  "食品工場で洗った長靴が乾かない、生乾き臭や共用長靴の管理に困る担当者へ。TRUSCO業務用長靴ドライヤー30・40・50足用の違い、三相200V、寸法、容量の選び方を解説します。";

export const metadata: Metadata = {
  title:
    "食品工場の長靴乾燥を効率化｜業務用ドライヤー30・40・50足の選び方【2026年版】",
  description,
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "食品工場の長靴乾燥を効率化【2026年版】",
    description: "乾かない・臭う問題と、業務用長靴ドライヤー30・40・50足の選び方。",
    url: canonicalUrl,
    siteName: "作業用品ナビ",
    type: "article",
    publishedTime: "2026-08-04",
    modifiedTime: "2026-08-04",
    images: [
      {
        url: `${siteUrl}${heroImage}`,
        width: 1600,
        height: 900,
        alt: "食品工場で複数の長靴を業務用ドライヤーで乾燥するイメージ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "食品工場の長靴乾燥を効率化【2026年版】",
    description: "業務用長靴ドライヤー30・40・50足用の違いを解説。",
    images: [`${siteUrl}${heroImage}`],
  },
};

type MainProduct = {
  id: string;
  name: string;
  model: string;
  trusco_no: string;
  capacity: string;
  size: string;
  power: string;
  badge: string;
  fit: string;
  feature: string;
  check: string;
  image: string;
  links: { label: string; url: string }[];
};

type RelatedProduct = {
  id: string;
  name: string;
  badge: string;
  use: string;
  feature: string;
  check: string;
  image: string;
  url: string;
};

type Cta = { name: string; url: string; desc: string };

const img = (file: string) => `/images/${slug}/${file}`;
const productImg = (code: string) => `/images/${slug}/products/${code}.webp`;

const mainProducts: MainProduct[] = [
  {
    id: "dryer-30",
    name: "TRUSCO ステンレス製長靴ドライヤー 30足用",
    model: "SUBD-30-32V",
    trusco_no: "206-5320",
    capacity: "30足（5段×6足）",
    size: "幅1,020×奥行800×高さ1,913mm",
    power: "三相200V・5,200W",
    badge: "省スペース30足用",
    fit: "同時乾燥が概ね25足前後までの小～中規模拠点",
    feature:
      "3モデルで最も幅が小さく、限られたサニタリー室や更衣エリアに置きやすい。",
    check: "搬入経路、三相200V電源、ピーク時の同時乾燥足数を確認。",
    image: productImg("235478"),
    links: [
      {
        label: "30足用の商品ページを見る",
        url: `https://store.shopping.yahoo.co.jp/signcity-yshop/235478.html?${UTM}`,
      },
    ],
  },
  {
    id: "dryer-40",
    name: "TRUSCO ステンレス製長靴ドライヤー 40足用",
    model: "SUBD-40-32V",
    trusco_no: "206-5321",
    capacity: "40足（5段×8足）",
    size: "幅1,350×奥行800×高さ1,913mm",
    power: "三相200V・5,300W",
    badge: "バランス型40足用",
    fit: "同時乾燥が30～35足程度の中規模工場・給食施設",
    feature:
      "容量と設置幅のバランスを取りやすく、人数増や来客用長靴にも余裕を持たせやすい。",
    check: "現在人数だけでなく最大シフト人数と予備長靴を含めて判断。",
    image: productImg("235479"),
    links: [
      {
        label: "40足用の商品ページを見る",
        url: `https://store.shopping.yahoo.co.jp/signcity-yshop/235479.html?${UTM}`,
      },
    ],
  },
  {
    id: "dryer-50",
    name: "TRUSCO ステンレス製長靴ドライヤー 50足用",
    model: "SUBD-50-32V",
    trusco_no: "206-5322",
    capacity: "50足（5段×10足）",
    size: "幅1,680×奥行800×高さ1,913mm",
    power: "三相200V・5,400W",
    badge: "大人数50足用",
    fit: "40足前後以上を同時に扱う食品・薬品・水産加工などの大規模拠点",
    feature:
      "3モデル中最大容量。シフト集中時、予備・来客用、複数ゾーンの長靴をまとめて管理しやすい。",
    check: "幅1,680mmの設置面積と大型機器の搬入・荷降ろし条件を事前確認。",
    image: productImg("235480"),
    links: [
      {
        label: "50足用の商品ページを見る",
        url: `https://store.shopping.yahoo.co.jp/signcity-yshop/235480.html?${UTM}`,
      },
    ],
  },
];

const relatedProducts: RelatedProduct[] = [
  {
    id: "boot-oil-white",
    name: "鉄先芯入PVC耐油長靴 26.5cm ホワイト",
    badge: "食品・水まわり候補",
    use: "白色で汚れを確認しやすくしたい水・油を扱う作業場",
    feature: "長靴ドライヤーと合わせて、長靴自体の更新も検討したい場合の候補。",
    check: "サイズ・耐油性・先芯の必要性を現場条件で確認。",
    image: productImg("235362"),
    url: `https://store.shopping.yahoo.co.jp/signcity-yshop/235362.html?${UTM}`,
  },
  {
    id: "boot-oil-black",
    name: "鉄先芯入PVC耐油長靴 26.5cm ブラック",
    badge: "耐油・先芯",
    use: "油や水を扱い、つま先保護も必要な作業場",
    feature: "乾燥設備だけでなく作業条件に合う長靴を選び直したい場合に。",
    check: "食品ゾーンの色分けルールと適合するか確認。",
    image: productImg("235361"),
    url: `https://store.shopping.yahoo.co.jp/signcity-yshop/235361.html?${UTM}`,
  },
  {
    id: "boot-mesh",
    name: "メッシュカラーブーツDX 26.5cm",
    badge: "蒸れ対策候補",
    use: "長時間着用時の靴内環境も見直したい作業場",
    feature:
      "乾燥工程の改善と併せて、日中の履き心地を見直したい場合に比較しやすい。",
    check: "防水性・安全性・現場規定を優先して選定。",
    image: productImg("236862"),
    url: `https://store.shopping.yahoo.co.jp/signcity-yshop/236862.html?${UTM}`,
  },
  {
    id: "boot-wader",
    name: "ナイロン胴付長靴 L 26.0cm",
    badge: "水作業向け",
    use: "水深のある清掃・水産・農業・施設保全作業",
    feature: "水作業が多く、通常の長靴より胴付タイプが必要な用途の関連商品。",
    check: "乾燥機に掛けられる形状・寸法かは設備側と事前確認。",
    image: productImg("237004"),
    url: `https://store.shopping.yahoo.co.jp/signcity-yshop/237004.html?${UTM}`,
  },
  {
    id: "insole-deodor",
    name: "茶がら入り 抗菌消臭インソール CHAINS",
    badge: "臭い・快適性補助",
    use: "靴内の臭い・蒸れ対策も同時に見直したい場合",
    feature: "乾燥設備の代替ではなく、日中の靴内環境を補助する関連商品。",
    check: "定期交換と長靴内部の洗浄・乾燥を併用。",
    image: productImg("234829"),
    url: `https://store.shopping.yahoo.co.jp/signcity-yshop/234829.html?${UTM}`,
  },
  {
    id: "insole-cool",
    name: "シリカクリン クールインソール30cm対応",
    badge: "吸湿・夏向け",
    use: "高温多湿の作業場で足元の不快感を補助したい場合",
    feature:
      "作業中の吸湿・快適性を補助し、終業後は長靴をしっかり乾燥する運用へつなげやすい。",
    check: "靴のサイズに合わせて調整し、衛生管理ルールに沿って交換。",
    image: productImg("235459"),
    url: `https://store.shopping.yahoo.co.jp/signcity-yshop/235459.html?${UTM}`,
  },
  {
    id: "insole-puncture",
    name: "踏み抜き防止板入 インソール M",
    badge: "足裏保護",
    use: "建設・施設保全など踏み抜きリスクもある現場",
    feature: "長靴の衛生管理と同時に、現場固有の安全リスクも見直す際の候補。",
    check: "長靴本体の安全性能と重複・適合を確認。",
    image: productImg("236634"),
    url: `https://store.shopping.yahoo.co.jp/signcity-yshop/236634.html?${UTM}`,
  },
];

const ctas: Cta[] = [
  {
    name: "安全靴・作業靴一覧",
    url: `https://store.shopping.yahoo.co.jp/signcity-yshop/search.html?p=%E5%AE%89%E5%85%A8%E9%9D%B4&${UTM}`,
    desc: "長靴・安全靴・作業靴を用途やサイズから探す。",
  },
  {
    name: "安全用品一覧",
    url: `https://store.shopping.yahoo.co.jp/signcity-yshop/b0c2c1b4cd.html?sc_i=shopping-pc-web-category-storeitm-cat_nrw-slctc_md&${UTM}`,
    desc: "現場の安全対策用品をまとめて比較する。",
  },
  {
    name: "道具箱・収納用品一覧",
    url: `https://store.shopping.yahoo.co.jp/signcity-yshop/c6bbb6f1c8.html?sc_i=shopping-pc-web-category-storeitm-cat_nrw-slctc_md&${UTM}`,
    desc: "更衣・保管・現場整理に使う収納用品を探す。",
  },
  {
    name: "防寒対策用品一覧",
    url: `https://store.shopping.yahoo.co.jp/signcity-yshop/4cbcca298b2.html?sc_i=shopping-pc-web-category-storeitm-cat_nrw-slctc_md&${UTM}`,
    desc: "低温環境や冬季の足元・作業環境対策を確認する。",
  },
  {
    name: "工事・照明用品一覧",
    url: `https://store.shopping.yahoo.co.jp/signcity-yshop/b9a9bbf6a1.html?sc_i=shopping-pc-web-category-storeitm-cat_nrw-slctc_md&${UTM}`,
    desc: "設備周辺の工事・照明関連用品を比較する。",
  },
];

const checkItems = [
  "最大シフト人数と来客・予備長靴を把握した",
  "シフト重複時の同時乾燥足数を計算した",
  "本体幅・奥行・高さを図面に落とした",
  "三相200Vと電気容量を設備担当へ確認した",
  "搬入口・扉・廊下・エレベーターを実測した",
  "洗浄→水切り→乾燥→保管の一方向動線を決めた",
  "日常清掃・点検・記録担当を決めた",
];

const faqs = [
  {
    q: "業務用長靴ドライヤーはどのような現場に向きますか？",
    a: "食品、食肉、水産、給食、薬品、清掃、農業など、長靴を高頻度で洗い、多数を次の勤務までに乾かす現場に向きます。",
  },
  {
    q: "30・40・50足用は何人規模に向きますか？",
    a: "従業員総数ではなく、ピーク時の同時乾燥足数で判断します。予備や来客分として10～20%の余裕を加えると選びやすくなります。これは記事独自の購買目安であり、公式メーカー基準ではありません。",
  },
  {
    q: "長靴を洗わずに乾燥できますか？",
    a: "乾燥機は汚れを除去する機械ではありません。施設の衛生管理手順に従って洗浄し、余分な水を切ってから乾燥してください。",
  },
  {
    q: "消毒や除菌もできますか？",
    a: "今回紹介するTRUSCO SUBDシリーズの公開用途は長靴の乾燥です。消毒・殺菌機能を前提にせず、洗浄・消毒工程は別途維持してください。",
  },
  {
    q: "三相200Vは必須ですか？",
    a: "SUBD-30-32V、40-32V、50-32Vはいずれも三相200V仕様です。分電盤と電気容量を事前確認してください。",
  },
];

const relatedArticles = [
  {
    href: "/articles/factory-breakroom-locker-room-odor-control",
    label: "工場の休憩室・更衣室・トイレの臭い対策｜汗・靴・衣類・便槽を原因別に改善",
  },
  {
    href: "/articles/workshop-odor-control-deodorizer",
    label: "作業場の臭い対策｜塗料・接着剤・薬品臭に業務用脱臭機を選ぶ方法",
  },
  {
    href: "/articles/safety-shoes-jis-jsaa",
    label: "安全靴のJIS・JSAA規格の違いと選び方",
  },
  {
    href: "/articles/warehouse-safety-shoes",
    label: "倉庫向け安全靴の選び方",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  image: [`${siteUrl}${heroImage}`],
  datePublished: "2026-08-04",
  dateModified: "2026-08-04",
  author: {
    "@type": "Organization",
    name: "作業用品ナビ編集部",
    url: siteUrl,
  },
  publisher: {
    "@type": "Organization",
    name: "作業用品ナビ",
    url: siteUrl,
  },
  mainEntityOfPage: canonicalUrl,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: siteUrl },
    {
      "@type": "ListItem",
      position: 2,
      name: "記事一覧",
      item: `${siteUrl}/articles`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: shortTitle,
      item: canonicalUrl,
    },
  ],
};

function Mark({ children }: { children: ReactNode }) {
  return <mark className={cls.mark}>{children}</mark>;
}

function P({ children }: { children: ReactNode }) {
  return <p className={cls.body}>{children}</p>;
}

function H2({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <h2 id={id} className={`${cls.h2} scroll-mt-24`}>
      {children}
    </h2>
  );
}

function SectionImage({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="my-8 overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
      <div className="relative aspect-video">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 900px"
        />
      </div>
    </figure>
  );
}

function MainProductCard({ product }: { product: MainProduct }) {
  return (
    <article className="rounded-2xl border border-gray-300 bg-white p-5 shadow-sm md:p-6">
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-bold text-emerald-900">
          {product.badge}
        </span>
        <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-900">
          {product.model}
        </span>
      </div>
      <div className="grid gap-5 md:grid-cols-[190px_1fr]">
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
          <Image
            src={product.image}
            alt={`${product.name}の商品画像`}
            width={500}
            height={500}
            className="h-auto w-full object-contain p-2"
          />
        </div>
        <div>
          <h3 className="text-[22px] font-extrabold leading-snug text-gray-900">
            {product.name}
          </h3>
          <dl className="mt-4 grid gap-2 text-[16px] leading-7 text-gray-900">
            <div>
              <dt className="inline font-bold">収納：</dt>
              <dd className="inline">{product.capacity}</dd>
            </div>
            <div>
              <dt className="inline font-bold">寸法：</dt>
              <dd className="inline">{product.size}</dd>
            </div>
            <div>
              <dt className="inline font-bold">電源：</dt>
              <dd className="inline">
                <Mark>{product.power}</Mark>
              </dd>
            </div>
            <div>
              <dt className="inline font-bold">向く現場：</dt>
              <dd className="inline">{product.fit}</dd>
            </div>
            <div>
              <dt className="inline font-bold">トラスコ番号：</dt>
              <dd className="inline">{product.trusco_no}</dd>
            </div>
          </dl>
          <p className="mt-3 text-[16px] leading-7 text-gray-900">
            {product.feature}
          </p>
          <p className="mt-3 rounded-lg border border-amber-300 bg-amber-50 p-3 text-[15px] font-medium leading-6 text-amber-950">
            <strong>購入前確認：</strong>
            {product.check}
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {product.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="nofollow sponsored"
                className="inline-flex min-h-12 items-center justify-center rounded-xl bg-orange-600 px-5 py-3 text-[16px] font-bold text-white hover:bg-orange-700"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

function RelatedProductCard({ product }: { product: RelatedProduct }) {
  return (
    <article className="rounded-xl border border-gray-300 bg-white p-4 shadow-sm">
      <div className="grid gap-4 sm:grid-cols-[130px_1fr]">
        <div className="overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
          <Image
            src={product.image}
            alt={`${product.name}の商品画像`}
            width={360}
            height={300}
            className="h-auto w-full object-contain p-2"
          />
        </div>
        <div>
          <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-bold text-sky-900">
            {product.badge}
          </span>
          <h3 className="mt-3 text-lg font-extrabold leading-snug text-gray-900">
            {product.name}
          </h3>
          <p className="mt-2 text-[15px] leading-6 text-gray-900">
            <strong>向く用途：</strong>
            {product.use}
          </p>
          <p className="mt-2 text-[15px] leading-6 text-gray-900">
            {product.feature}
          </p>
          <p className="mt-2 text-[14px] leading-6 text-gray-900">
            <strong>確認：</strong>
            {product.check}
          </p>
          <a
            href={product.url}
            target="_blank"
            rel="nofollow sponsored"
            className="mt-4 inline-flex min-h-11 items-center rounded-lg bg-orange-600 px-4 py-2 text-sm font-bold text-white hover:bg-orange-700"
          >
            商品ページを見る
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Page() {
  return (
    <>
      <SiteHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <main className="bg-white text-gray-900">
        <div className="mx-auto max-w-5xl px-4 py-4 sm:px-6 lg:px-8">
          <nav aria-label="パンくず" className={`${cls.meta}`}>
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="underline underline-offset-4">
                  ホーム
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/articles" className="underline underline-offset-4">
                  記事一覧
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>食品工場の長靴乾燥</li>
            </ol>
          </nav>
        </div>

        <article className="mx-auto max-w-[850px] px-4 pb-16 sm:px-6">
          <header>
            <div className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-sm font-bold text-emerald-900">
              作業用品ナビ / 2026年8月4日更新
            </div>
            <h1 className={cls.h1}>{title}</h1>
            <P>
              洗った長靴が翌シフトまでに乾かない、共用長靴の生乾きが気になる担当者へ。洗浄から保管までの標準手順と、TRUSCOステンレス製長靴ドライヤー3サイズの選び方を解説します。
            </P>
            <figure className="mt-7 overflow-hidden rounded-2xl border border-gray-200">
              <div className="relative aspect-video">
                <Image
                  src={heroImage}
                  alt="食品工場で複数の長靴を業務用ドライヤーで乾燥するイメージ"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 900px"
                />
              </div>
            </figure>
          </header>

          <section className="mt-8 rounded-2xl border-2 border-emerald-300 bg-emerald-50 p-6 md:p-7">
            <h2 className="text-[23px] font-extrabold text-gray-900">先に結論</h2>
            <p className="mt-3 text-[17px] leading-8 text-gray-900 md:text-[18px]">
              長靴管理は、
              <strong>洗浄 → 水切り → 乾燥 → 乾いた状態で保管</strong>
              の順に標準化します。機種は従業員総数ではなく、ピーク時に同時乾燥する長靴数へ予備
              <Mark>10～20%</Mark>
              を加えて選ぶと失敗しにくくなります（記事独自の購買目安）。
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {mainProducts.map((product) => (
                <a
                  key={product.id}
                  href={product.links[0].url}
                  target="_blank"
                  rel="nofollow sponsored"
                  className="rounded-xl bg-orange-600 px-4 py-3 text-center text-[15px] font-extrabold text-white hover:bg-orange-700"
                >
                  {product.capacity}を見る
                </a>
              ))}
            </div>
          </section>

          <section className="mt-6 rounded-2xl border-2 border-amber-300 bg-amber-50 p-6">
            <h2 className="text-xl font-extrabold text-amber-950">
              乾燥機は、洗浄・消毒の代替ではありません
            </h2>
            <p className="mt-3 text-[16px] leading-7 text-amber-950">
              今回紹介するSUBDシリーズの公開用途は長靴の
              <strong>乾燥</strong>
              です。汚れの除去や施設の消毒手順を省略せず、洗浄後の乾燥工程として使用してください。殺菌機・消毒機としては扱いません。
            </p>
          </section>

          <H2 id="compare">30・40・50足用を比較</H2>
          <SectionImage
            src={img("commercial-boot-dryer-capacity-comparison.webp")}
            alt="30足・40足・50足用の業務用長靴ドライヤーを比較するイメージ"
          />
          <div className="mt-2 overflow-x-auto rounded-2xl border border-gray-300">
            <table className={`min-w-[920px] ${cls.table}`}>
              <thead>
                <tr>
                  <th className={cls.th}>商品</th>
                  <th className={cls.th}>収納</th>
                  <th className={cls.th}>寸法</th>
                  <th className={cls.th}>電源・消費電力</th>
                  <th className={cls.th}>主な判断</th>
                </tr>
              </thead>
              <tbody>
                {mainProducts.map((p) => (
                  <tr key={p.id}>
                    <td className={cls.td}>
                      <a
                        href={p.links[0].url}
                        target="_blank"
                        rel="nofollow sponsored"
                        className="group flex min-w-[16rem] items-start gap-3 no-underline"
                      >
                        <span className="relative h-20 w-20 shrink-0 overflow-hidden rounded-md border border-gray-200 bg-white">
                          <Image
                            src={p.image}
                            alt={`${p.name}の商品画像`}
                            fill
                            sizes="80px"
                            className="object-contain p-1.5"
                          />
                        </span>
                        <span className="pt-1">
                          <span className="block font-bold text-gray-900 group-hover:underline">
                            {p.model}
                          </span>
                          <span className="mt-1 block text-sm text-gray-900">
                            {p.name}
                          </span>
                        </span>
                      </a>
                    </td>
                    <td className={cls.td}>
                      <Mark>{p.capacity}</Mark>
                    </td>
                    <td className={cls.td}>{p.size}</td>
                    <td className={cls.td}>
                      <Mark>{p.power}</Mark>
                    </td>
                    <td className={cls.td}>{p.fit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm font-medium text-gray-800">
            ※表は横にスクロールできます。3モデル共通：内外装SUS304
            HL、温風約30～35℃、漏電ブレーカー・サーモスタット・タイマー付き。
          </p>

          <div className="mt-7 grid gap-6">
            {mainProducts.map((product) => (
              <MainProductCard key={product.id} product={product} />
            ))}
          </div>

          <H2 id="causes">食品工場で長靴が乾かない原因</H2>
          <SectionImage
            src={img("wet-work-boots-drying-problem.webp")}
            alt="洗浄後の長靴内部に水分が残り乾きにくいイメージ"
          />
          <div className="mt-2 grid gap-4 md:grid-cols-2">
            {[
              [
                "内部へ空気が入りにくい",
                "履き口が狭く、つま先や底部に水分が残りやすい形状です。",
              ],
              [
                "水切り不足",
                "洗浄直後の大量の水を減らさず保管すると、乾燥時間が長くなります。",
              ],
              [
                "人数に対してラックが小さい",
                "長靴同士の間隔が詰まり、自然乾燥の風が通りません。",
              ],
              [
                "次回使用までが短い",
                "二交代・三交代では自然乾燥時間を確保しにくくなります。",
              ],
              [
                "インソールが水分を保持",
                "取り外し可能なインソールは、現場ルールに沿って別管理を検討します。",
              ],
            ].map(([heading, text]) => (
              <section
                key={heading}
                className="rounded-xl border border-gray-200 bg-gray-50 p-5"
              >
                <h3 className="text-xl font-extrabold text-gray-900">{heading}</h3>
                <p className="mt-2 text-[16px] leading-7 text-gray-900">{text}</p>
              </section>
            ))}
          </div>

          <H2 id="workflow">洗浄・水切り・乾燥・保管の流れ</H2>
          <SectionImage
            src={img("boots-wash-drain-dry-store-workflow.webp")}
            alt="長靴を洗浄・水切り・乾燥・保管する作業フロー"
          />
          <ol className="mt-2 space-y-4">
            {[
              [
                "長靴を洗浄する",
                "靴底の溝、外側、側面を施設の衛生管理手順に従って洗います。",
              ],
              [
                "余分な水を切る",
                "大量の水を減らし、乾燥機周辺へ水を持ち込みすぎないようにします。",
              ],
              [
                "温風で内部を乾燥する",
                "指定位置へ掛け、使用する段とタイマーを設定します。",
              ],
              [
                "乾燥状態を確認する",
                "つま先、底部、インソール周辺に湿りが残っていないか確認します。",
              ],
              [
                "乾いた状態で保管する",
                "清潔区域・汚染区域、個人・来客用が混ざらないよう管理します。",
              ],
            ].map(([heading, text], index) => (
              <li
                key={heading}
                className="flex gap-4 rounded-xl border border-gray-200 p-5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-lg font-black text-white">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-xl font-extrabold text-gray-900">
                    {heading}
                  </h3>
                  <p className="mt-1 text-[16px] leading-7 text-gray-900">
                    {text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <P>
            更衣室や休憩室の生乾き臭・空間臭まであわせて見直す場合は、
            <Link
              href="/articles/factory-breakroom-locker-room-odor-control"
              className="font-bold underline underline-offset-4"
            >
              工場の休憩室・更衣室・トイレの臭い対策
            </Link>
            もあわせてご覧ください。
          </P>

          <H2 id="capacity">容量は同時乾燥足数で決める</H2>
          <section className="mt-6 rounded-2xl bg-gray-900 p-6 text-white">
            <p className="text-lg font-bold">購買時の目安</p>
            <p className="mt-3 text-[24px] font-black leading-tight">
              必要収納足数 ＝ ピーク時の同時乾燥足数 × 1.1～1.2
            </p>
            <p className="mt-3 text-[15px] leading-7 text-gray-100">
              予備・来客・繁忙期への運用上の余裕です。
              <strong>公式メーカー基準ではありません。</strong>
            </p>
          </section>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-gray-300 p-5">
              <h3 className="text-xl font-extrabold text-gray-900">
                22人＋来客3足
              </h3>
              <p className="mt-2 text-[16px] leading-7 text-gray-900">
                25足に余裕を加え、<Mark>30足用</Mark>を候補に。
              </p>
            </div>
            <div className="rounded-xl border border-gray-300 p-5">
              <h3 className="text-xl font-extrabold text-gray-900">
                30人＋予備5足
              </h3>
              <p className="mt-2 text-[16px] leading-7 text-gray-900">
                約39足となり、<Mark>40足用</Mark>が比較候補。
              </p>
            </div>
            <div className="rounded-xl border border-gray-300 p-5">
              <h3 className="text-xl font-extrabold text-gray-900">
                38人＋予備7足
              </h3>
              <p className="mt-2 text-[16px] leading-7 text-gray-900">
                余裕を含め約50足、<Mark>50足用</Mark>が候補。
              </p>
            </div>
          </div>

          <H2 id="install">設置前の確認事項</H2>
          <SectionImage
            src={img("boot-dryer-installation-planning.webp")}
            alt="大型長靴ドライヤーの設置スペースと電源を確認するイメージ"
          />
          <div className="mt-2 rounded-2xl border-2 border-amber-300 bg-amber-50 p-5">
            <p className="text-[16px] font-bold leading-7 text-amber-950">
              大型・三相200V設備です。電源・寸法・搬入・設置は見積・発注前に必ず確認してください。
            </p>
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              [
                "三相200V",
                "分電盤、ブレーカー、配線、容量を有資格者・設備担当へ確認。",
              ],
              [
                "搬入経路",
                "搬入口、扉、廊下、曲がり角、エレベーター、段差を実測。",
              ],
              [
                "前面スペース",
                "長靴の掛け外し、清掃、通行に必要な余裕を確保。",
              ],
              [
                "洗浄動線",
                "洗浄前と乾燥後の長靴が交差しない一方向動線を設計。",
              ],
              ["識別ルール", "ゾーン、個人、来客用の段・位置を固定。"],
              [
                "日常点検",
                "清掃、異音、風量差、タイマー、ブレーカーの確認担当を決定。",
              ],
            ].map(([heading, text]) => (
              <section
                key={heading}
                className="rounded-xl border border-gray-200 bg-white p-5"
              >
                <h3 className="text-xl font-extrabold text-gray-900">{heading}</h3>
                <p className="mt-2 text-[16px] leading-7 text-gray-900">{text}</p>
              </section>
            ))}
          </div>

          <H2 id="related-products">長靴・インソールもあわせて確認</H2>
          <SectionImage
            src={img("work-boots-insoles-hygiene-management.webp")}
            alt="作業用長靴とインソールを衛生的に点検・管理するイメージ"
          />
          <P>
            乾燥工程を整えても、ひび割れた長靴や用途に合わない靴を使い続けると管理品質は上がりません。関連商品は主力設備の選定後に、現場条件に合わせて確認します。
          </P>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {relatedProducts.map((product) => (
              <RelatedProductCard key={product.id} product={product} />
            ))}
          </div>

          <H2 id="checklist">法人購買チェックリスト</H2>
          <SectionImage
            src={img("boot-dryer-procurement-checklist.webp")}
            alt="衛生管理担当者が長靴ドライヤー導入条件を確認するイメージ"
          />
          <ul className="mt-2 grid gap-3 sm:grid-cols-2">
            {checkItems.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-gray-200 bg-gray-50 p-4 text-[16px] font-semibold leading-7 text-gray-900"
              >
                □ {item}
              </li>
            ))}
          </ul>

          <H2 id="faq">FAQ</H2>
          <div className="mt-6 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="rounded-xl border border-gray-200 bg-white p-5"
              >
                <summary className={`cursor-pointer ${cls.faqQ}`}>
                  {faq.q}
                </summary>
                <p className="mt-3 text-[16px] leading-7 text-gray-900">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>

          <H2 id="categories">関連カテゴリ</H2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {ctas.map((cta) => (
              <a
                key={cta.name}
                href={cta.url}
                target="_blank"
                rel="nofollow sponsored"
                className="rounded-xl border border-gray-300 bg-gray-50 p-5 hover:border-orange-400 hover:bg-orange-50"
              >
                <span className={`block ${cls.ctaH3}`}>{cta.name}</span>
                <span className="mt-2 block text-[15px] leading-6 text-gray-900">
                  {cta.desc}
                </span>
              </a>
            ))}
          </div>

          <H2 id="related">関連記事</H2>
          <ul className="mt-4 space-y-3">
            {relatedArticles.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-bold text-gray-900 underline underline-offset-4 hover:text-orange-700"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <H2 id="summary">まとめ</H2>
          <P>
            食品工場で長靴が乾かない場合は、自然乾燥時間だけでなく、洗浄・水切り・乾燥・保管の工程全体を見直します。30・40・50足用は、ピーク時の同時乾燥足数、予備・来客分、シフト重複で選定し、
            <Mark>三相200V</Mark>、搬入経路、設置幅を見積前に確認してください。
          </P>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {mainProducts.map((p) => (
              <a
                key={p.id}
                href={p.links[0].url}
                target="_blank"
                rel="nofollow sponsored"
                className="rounded-xl bg-orange-600 px-4 py-3 text-center text-[16px] font-extrabold text-white hover:bg-orange-700"
              >
                {p.capacity}の商品を見る
              </a>
            ))}
          </div>

          <section className="mt-12 border-t border-gray-200 pt-6">
            <h2 className="text-xl font-extrabold text-gray-900">参考情報</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-[14px] leading-6 text-gray-900">
              <li>
                <a
                  href="https://www.mhlw.go.jp/content/12401000/000792974.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4"
                >
                  厚生労働省 HACCP衛生管理の手引書
                </a>
              </li>
              <li>
                <a
                  href="https://developers.google.com/search/docs/fundamentals/ai-optimization-guide"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4"
                >
                  Google Search Central 生成AI検索向け最適化ガイド
                </a>
              </li>
            </ul>
          </section>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
