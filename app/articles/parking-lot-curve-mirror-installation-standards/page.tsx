import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";

const slug = "parking-lot-curve-mirror-installation-standards";
const siteUrl = "https://www.sagyou-navi.com";
const canonicalUrl = `${siteUrl}/articles/${slug}`;
const heroImage = `/images/${slug}/parking-lot-curve-mirror-hero.webp`;
const UTM =
  "utm_source=sagyou_navi&utm_medium=article&utm_campaign=parking-lot-curve-mirror-installation-standards";

const title =
  "駐車場カーブミラーの設置基準は？位置・高さ・サイズ・一面鏡/二面鏡の選び方【2026年版】";
const description =
  "駐車場カーブミラーの設置基準を、私有地と公道の違い、位置・高さ・角度、300〜1000mmのサイズ、一面鏡・二面鏡、素材、許可、点検まで解説します。";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "駐車場カーブミラーの設置基準は？【2026年版】",
    description: "位置・高さ・サイズ・一面鏡/二面鏡の選び方を解説。",
    url: canonicalUrl,
    siteName: "作業用品ナビ",
    type: "article",
    publishedTime: "2026-08-03",
    modifiedTime: "2026-08-03",
    images: [
      {
        url: `${siteUrl}${heroImage}`,
        width: 1600,
        height: 900,
        alt: "駐車場出口でカーブミラーの位置と角度を確認する施設管理者",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "駐車場カーブミラーの設置基準は？",
    description: "私有地と公道の違い、位置・高さ・サイズを解説。",
    images: [`${siteUrl}${heroImage}`],
  },
};

type Product = {
  id: string;
  name: string;
  badge: string;
  use: string;
  feature: string;
  check: string;
  image: string;
  linkLabel: string;
  url: string;
};

type CategoryLink = {
  label: string;
  description: string;
  tone: "main" | "sub";
  url: string;
};

const images = {
  driverView: `/images/${slug}/parking-mirror-driver-view-test.webp`,
  sizeCompare: `/images/${slug}/curve-mirror-size-comparison.webp`,
  singleDouble: `/images/${slug}/single-double-curve-mirror-comparison.webp`,
  materials: `/images/${slug}/acrylic-stainless-curve-mirror.webp`,
  warehouse: `/images/${slug}/warehouse-curve-mirror-intersection.webp`,
  maintenance: `/images/${slug}/curve-mirror-maintenance-inspection.webp`,
} as const;

const products: Product[] = [
  {
    id: "p1",
    name: "カーブミラー３００",
    badge: "小型・近距離",
    use: "個人駐車場、ガレージ、狭い通路の近距離確認",
    feature: "省スペースで設置しやすい小型タイプ。近距離の車両や歩行者確認に。",
    check: "運転席から映像が小さすぎないか仮置き確認",
    image: `/images/${slug}/products/1116020302.webp`,
    linkLabel: "GC-selectで見る",
    url: `https://www.gc-select.com/products/1116020302?_pos=1&_sid=5d3c29e7a&_ss=r&${UTM}`,
  },
  {
    id: "p2",
    name: "カーブミラー６００",
    badge: "標準サイズ候補",
    use: "店舗・事業所駐車場の出口、構内交差部",
    feature: "小型より広い範囲を確認しやすく、私有地の一般的な出口で比較しやすい。",
    check: "一面鏡で左右のどちらを確認するか明確にする",
    image: `/images/${slug}/products/1116020602.webp`,
    linkLabel: "GC-selectで見る",
    url: `https://www.gc-select.com/products/1116020602?_pos=2&_sid=5d3c29e7a&_ss=r&${UTM}`,
  },
  {
    id: "p3",
    name: "アクリルミラー　丸型　φ６００",
    badge: "アクリル・丸型",
    use: "構内道路、駐車場出口、倉庫外周",
    feature: "軽量で扱いやすいアクリル製の丸型600mm。",
    check: "強風・衝撃・経年劣化を考慮した固定と点検",
    image: `/images/${slug}/products/6300032883.webp`,
    linkLabel: "GC-selectで見る",
    url: `https://www.gc-select.com/products/6300032883?_pos=13&_sid=5d3c29e7a&_ss=r&${UTM}`,
  },
  {
    id: "p4",
    name: "アクリルミラー　丸型　φ８００",
    badge: "広範囲確認",
    use: "出入口から道路まで距離がある駐車場、大型車動線",
    feature: "600mmより像を大きく確認しやすい大型タイプ。",
    check: "支柱・基礎・設置スペースを含めて選ぶ",
    image: `/images/${slug}/products/6300032884.webp`,
    linkLabel: "GC-selectで見る",
    url: `https://www.gc-select.com/products/6300032884?_pos=12&_sid=5d3c29e7a&_ss=r&${UTM}`,
  },
  {
    id: "p5",
    name: "アクリルミラー　丸型　φ１０００",
    badge: "大型・遠距離",
    use: "広い構内、物流拠点、大型車が通る見通し不良箇所",
    feature: "遠距離や広範囲の視認性を重視する大型サイズ。",
    check: "過大サイズで死角や歪みが増えないか現地確認",
    image: `/images/${slug}/products/6300032885.webp`,
    linkLabel: "GC-selectで見る",
    url: `https://www.gc-select.com/products/6300032885?_pos=11&_sid=5d3c29e7a&_ss=r&${UTM}`,
  },
  {
    id: "p6",
    name: "ステンレスミラー　丸型　φ６００",
    badge: "耐久性重視",
    use: "屋外駐車場、風雨や飛来物が気になる場所",
    feature: "割れにくさや耐久性を重視する屋外用途の候補。",
    check: "鏡面のへこみ・反射率低下を定期点検",
    image: `/images/${slug}/products/6300032888.webp`,
    linkLabel: "GC-selectで見る",
    url: `https://www.gc-select.com/products/6300032888?_pos=18&_sid=5d3c29e7a&_ss=r&${UTM}`,
  },
  {
    id: "p7",
    name: "ステンレスミラー　丸型　φ８００",
    badge: "大型・耐久性",
    use: "物流倉庫、工場構内、車路幅が広い場所",
    feature: "大型車の動線と屋外耐久性を両立したい場合の候補。",
    check: "重量に合う支柱・金具・基礎を選ぶ",
    image: `/images/${slug}/products/6300032889.webp`,
    linkLabel: "GC-selectで見る",
    url: `https://www.gc-select.com/products/6300032889?_pos=17&_sid=5d3c29e7a&_ss=r&${UTM}`,
  },
  {
    id: "p8",
    name: "アクリルミラー　角型　６００×８００",
    badge: "角型・広角候補",
    use: "壁面設置、幅方向を広く見たい出口",
    feature: "横方向の見え方を重視したい場所で比較しやすい角型。",
    check: "運転席から左右端まで見える角度を現地調整",
    image: `/images/${slug}/products/6300032887.webp`,
    linkLabel: "GC-selectで見る",
    url: `https://www.gc-select.com/products/6300032887?_pos=9&_sid=5d3c29e7a&_ss=r&${UTM}`,
  },
  {
    id: "p9",
    name: "ステンレスミラー　角型　６００×８００",
    badge: "角型・耐久性",
    use: "屋外壁面、工場・倉庫の構内交差部",
    feature: "角型の視野とステンレスの耐久性を重視する用途。",
    check: "重量・風荷重に合う壁面金具を確認",
    image: `/images/${slug}/products/6300032892.webp`,
    linkLabel: "GC-selectで見る",
    url: `https://www.gc-select.com/products/6300032892?_pos=14&_sid=5d3c29e7a&_ss=r&${UTM}`,
  },
  {
    id: "p10",
    name: "ホームミラー 丸型 φ450 ポール付",
    badge: "私有地ポールセット",
    use: "住宅・小規模事業所の駐車場出口",
    feature: "ミラーとポールを一式で揃えたい私有地向け候補。",
    check: "私有地内へ収め、道路へ越境しない位置を確認",
    image: `/images/${slug}/products/10003188.webp`,
    linkLabel: "楽天市場で見る",
    url: `https://item.rakuten.co.jp/anzenkiki/10003188/?${UTM}`,
  },
  {
    id: "p11",
    name: "ホームミラー 二面鏡 丸型 φ450 ポール付",
    badge: "二面鏡・左右確認",
    use: "左右両方向の見通しが悪いT字状の出口",
    feature: "左右を別々の鏡面で確認しやすい二面鏡。",
    check: "一面鏡2基との比較、鏡面ごとの角度調整が必要",
    image: `/images/${slug}/products/10003189.webp`,
    linkLabel: "楽天市場で見る",
    url: `https://item.rakuten.co.jp/anzenkiki/10003189/?${UTM}`,
  },
  {
    id: "p12",
    name: "ステンレス製カーブミラー 一面鏡 φ800 ポールセット",
    badge: "道路反射鏡仕様",
    use: "広い構内道路・大型事業所・認定品を求める用途",
    feature: "φ800一面鏡と76.3mm支柱のセット。",
    check: "設置工事・基礎・道路占用の要否を専門業者と確認",
    image: `/images/${slug}/products/10003466.webp`,
    linkLabel: "楽天市場で見る",
    url: `https://item.rakuten.co.jp/anzenkiki/10003466/?${UTM}`,
  },
  {
    id: "p13",
    name: "ステンレス製カーブミラー 二面鏡 φ600 ポール付",
    badge: "道路反射鏡二面鏡",
    use: "構内T字交差や左右二方向を確認する場所",
    feature: "二方向の死角を別々の鏡面で補いたい用途。",
    check: "二面鏡を選ぶ前に一面鏡1基ずつの方が見やすいか試す",
    image: `/images/${slug}/products/10003333.webp`,
    linkLabel: "楽天市場で見る",
    url: `https://item.rakuten.co.jp/anzenkiki/10003333/?variantId=10003333&${UTM}`,
  },
  {
    id: "p14",
    name: "電柱取付金具 No.5（ホームミラー用）",
    badge: "取付金具",
    use: "既設柱への取付を検討する場合",
    feature: "対応径を確認して既設柱へ取り付けるための金具。",
    check: "電柱・道路上へ無断設置せず、所有者・道路管理者の許可を取る",
    image: `/images/${slug}/products/10004197.webp`,
    linkLabel: "楽天市場で見る",
    url: `https://item.rakuten.co.jp/anzenkiki/10004197/?${UTM}`,
  },
];

const mainCategoryLinks: CategoryLink[] = [
  {
    label: "GC-selectのカーブミラー一覧",
    description: "300mm・600mm、アクリル・ステンレス、注意板などを比較",
    tone: "main",
    url: `https://www.gc-select.com/search?q=%E3%82%AB%E3%83%BC%E3%83%96%E3%83%9F%E3%83%A9%E3%83%BC&options%5Bprefix%5D=product&${UTM}`,
  },
  {
    label: "楽天市場の豊富なカーブミラー一覧",
    description: "ホームミラー、道路反射鏡、ポールセット、二面鏡、金具まで幅広く比較",
    tone: "main",
    url: `https://search.rakuten.co.jp/search/mall/%E3%82%AB%E3%83%BC%E3%83%96%E3%83%9F%E3%83%A9%E3%83%BC/?p=2&sid=204373&${UTM}`,
  },
];

const disasterCategoryLinks: CategoryLink[] = [
  {
    label: "簡易トイレ一覧",
    description: "施設備蓄の見直し用",
    tone: "sub",
    url: `https://www.gc-select.com/pages/search-results-page?q=%E7%B0%A1%E6%98%93%E3%83%88%E3%82%A4%E3%83%AC&${UTM}`,
  },
  {
    label: "災害対策品一覧",
    description: "安全機材・災害対策の総合一覧",
    tone: "sub",
    url: `https://www.gc-select.com/collections/%E5%AE%89%E5%85%A8%E6%A9%9F%E6%9D%90%E7%94%A8%E5%93%81-%E7%81%BD%E5%AE%B3%E5%AF%BE%E7%AD%96?${UTM}`,
  },
  {
    label: "防災セット一覧",
    description: "拠点備蓄セットの比較用",
    tone: "sub",
    url: `https://www.gc-select.com/pages/search-results-page?q=%E9%98%B2%E7%81%BD%E3%82%BB%E3%83%83%E3%83%88&${UTM}`,
  },
];

const sizeRows = [
  ["300mm前後", "個人車庫・狭い通路", "近距離・省スペース", "遠距離の像が小さい"],
  ["400〜450mm", "住宅・小規模事業所", "近〜中距離", "広い道路には不足する場合"],
  ["600mm", "店舗・事業所・構内交差", "標準候補として比較しやすい", "大型車・遠距離は要確認"],
  ["800mm", "工場・倉庫・広い出口", "広範囲・遠距離", "支柱・基礎が大型化"],
  ["1000mm", "物流拠点・長い視距", "大型車・遠距離", "重量・風荷重・歪み"],
];

const materialRows = [
  ["アクリル", "軽量、施工しやすい、サイズが豊富", "傷・割れ・変形・経年変化を確認", "壁面、一般的な駐車場、構内"],
  ["ステンレス", "割れにくい、屋外耐久性を重視しやすい", "重い、へこみ、支柱負荷", "工場、倉庫、屋外、飛来物がある場所"],
  ["ガラス系", "像が自然に見える小型品もある", "割れ、屋外耐久、サイズが限定", "ガレージ、壁面の小型ミラー"],
];

const toc = [
  { id: "conclusion", label: "先に結論" },
  { id: "standards", label: "全国一律の設置基準はある？" },
  { id: "steps", label: "位置・高さ・角度の6ステップ" },
  { id: "audit", label: "30分現地監査" },
  { id: "size", label: "300〜1000mmのサイズ選び" },
  { id: "single-double", label: "一面鏡・二面鏡" },
  { id: "shape-material", label: "丸型・角型／アクリル・ステンレス" },
  { id: "mounting", label: "取付方法と許可" },
  { id: "use-cases", label: "用途別のおすすめ構成" },
  { id: "maintenance", label: "点検・失敗例・チェックリスト" },
  { id: "faq", label: "FAQ" },
  { id: "summary", label: "まとめ" },
];

const faqs = [
  {
    q: "駐車場カーブミラーの高さ2.5mは必須ですか？",
    a: "私有地の駐車場に全国一律で必須という単純な基準ではありません。2.5mは公道用道路反射鏡の標準的な参考値です。私有地では運転席から見えること、車両や歩行者に接触しないこと、越境しないことを確認して調整します。",
  },
  {
    q: "300mmと600mmはどちらがよいですか？",
    a: "近距離のガレージや狭い通路は300mm、店舗・事業所の出口では600mmから比較するのが実務的です。道路まで距離がある、大型車から見る場合は800mm以上も検討します。",
  },
  {
    q: "一面鏡と二面鏡のどちらがよいですか？",
    a: "一方向の死角は一面鏡が基本です。左右を別方向に確認する必要がある場合は二面鏡が候補ですが、一面鏡2基の方が像が大きく見やすい場合もあります。",
  },
  {
    q: "公道や電柱へ設置できますか？",
    a: "無断では設置できません。道路区域へ入る場合は道路管理者、電柱は所有者への確認・許可が必要です。",
  },
  {
    q: "カーブミラーだけを見て出庫してもよいですか？",
    a: "カーブミラーは補助設備です。鏡面には死角があり、距離感・速度感も異なって見えるため、一時停止・徐行・目視確認を組み合わせます。",
  },
];

const relatedArticles = [
  {
    href: "/articles/color-cone-types-sizes",
    label:
      "カラーコーンの種類とサイズを徹底解説｜700mm・反射・伸縮式・ヘビーの違いと選び方【2026年版】",
  },
  {
    href: "/articles/pipe-protector-parking-column-guard",
    label:
      "パイププロテクターとは？駐車場の柱ガード・安全対策アイテムを徹底解説",
  },
  {
    href: "/articles/deicer-parking-howto",
    label: "凍結防止剤の駐車場での使い方｜撒くタイミング・量・種類の選び方",
  },
  {
    href: "/articles/safety-walkway-setup",
    label:
      "安全通路の作り方｜工場・倉庫・工事現場で使うカラーコーン・コーンカバー・安全用品",
  },
];

const references = [
  {
    label: "国土交通省「路外駐車場の技術的基準」",
    url: "https://www.mlit.go.jp/toshi/toshi_gairo_tk_000072.html",
  },
  {
    label: "国土交通省「駐車場関係施策に関する質問への回答等」",
    url: "https://www.mlit.go.jp/common/001068961.pdf",
  },
  {
    label: "国土交通省「道路技術分野（交通安全施設等）」",
    url: "https://www.mlit.go.jp/road/sign/kijyun/bunya06.html",
  },
  {
    label: "道路反射鏡協会「道路反射鏡の種類と設置方法」",
    url: "https://www.dhk.gr.jp/about-mirror/mirror-types/",
  },
  {
    label: "道路反射鏡協会「道路反射鏡の特性」",
    url: "https://www.dhk.gr.jp/about-mirror/mirror-characteristic/",
  },
  {
    label: "道路反射鏡協会「道路反射鏡のメンテナンス」",
    url: "https://www.dhk.gr.jp/about-mirror/mirror-maintenance/",
  },
  {
    label: "府中市「道路占用許可申請（カーブミラー等）」",
    url: "https://www.city.fuchu.tokyo.jp/kurashi/machi/dourokouen/douroshinsei/senyou_kanban.html",
  },
  {
    label: "町田市「道路反射鏡（カーブミラー）の設置について」",
    url: "https://www.city.machida.tokyo.jp/kurashi/sumai/road/jyouhoutetuduki/curvemirror.html",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  image: [`${siteUrl}${heroImage}`],
  datePublished: "2026-08-03",
  dateModified: "2026-08-03",
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
      name: "駐車場カーブミラーの設置基準",
      item: canonicalUrl,
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
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

function H3({ children }: { children: ReactNode }) {
  return <h3 className={cls.h3}>{children}</h3>;
}

function Ul({ children }: { children: ReactNode }) {
  return <ul className={cls.list}>{children}</ul>;
}

function Ol({ children }: { children: ReactNode }) {
  return (
    <ol className="my-4 list-decimal space-y-2 pl-6 leading-[1.95] tracking-[0.04em] text-gray-900">
      {children}
    </ol>
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

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="rounded-2xl border border-gray-300 bg-white p-5 shadow-sm">
      <span className="inline-flex rounded-full bg-gray-900 px-3 py-1 text-xs font-bold text-white">
        {product.badge}
      </span>
      <div className="mt-4 grid gap-5 md:grid-cols-[180px_1fr]">
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
          <Image
            src={product.image}
            alt={`${product.name}の商品画像`}
            width={720}
            height={540}
            className="h-full min-h-40 w-full object-contain p-3"
          />
        </div>
        <div>
          <h3 className="text-lg font-black text-gray-900">{product.name}</h3>
          <dl className="mt-4 space-y-3 text-[15px] leading-7 text-gray-900">
            <div>
              <dt className="font-bold">向く場所</dt>
              <dd>{product.use}</dd>
            </div>
            <div>
              <dt className="font-bold">特徴</dt>
              <dd>{product.feature}</dd>
            </div>
            <div>
              <dt className="font-bold">購入前確認</dt>
              <dd>{product.check}</dd>
            </div>
          </dl>
          <a
            href={product.url}
            target="_blank"
            rel="nofollow sponsored"
            className="mt-5 inline-flex rounded-lg bg-orange-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-700"
          >
            {product.linkLabel}
          </a>
        </div>
      </div>
    </article>
  );
}

function CategoryCard({ item }: { item: CategoryLink }) {
  const main = item.tone === "main";
  return (
    <a
      href={item.url}
      target="_blank"
      rel="nofollow sponsored"
      className={`rounded-xl border p-5 shadow-sm transition hover:-translate-y-0.5 ${
        main
          ? "border-orange-300 bg-orange-50 hover:bg-orange-100"
          : "border-gray-300 bg-white hover:border-gray-900"
      }`}
    >
      <span
        className={`text-base font-bold ${main ? "text-orange-800" : "text-gray-900"}`}
      >
        {item.label}
      </span>
      <span className="mt-2 block text-sm leading-6 text-gray-900">
        {item.description}
      </span>
    </a>
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="bg-white text-gray-900">
        <div className="mx-auto max-w-5xl px-4 py-4 sm:px-6 lg:px-8">
          <nav aria-label="パンくず" className="text-sm text-gray-800">
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
              <li>駐車場カーブミラーの設置基準</li>
            </ol>
          </nav>
        </div>

        <article>
          <header className="border-y border-gray-200 bg-gray-50">
            <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
              <p className="mb-3 text-sm font-bold text-orange-800">
                2026年8月3日 公開
              </p>
              <h1 className={cls.h1}>{title}</h1>
              <div className={`mt-5 flex flex-wrap gap-x-5 gap-y-2 ${cls.meta}`}>
                <span>作業用品ナビ編集部</span>
                <time dateTime="2026-08-03">公開・更新：2026年8月3日</time>
                <span>読了目安：約20分</span>
              </div>
              <P>
                店舗、マンション、工場、倉庫、病院、月極駐車場などでは、駐車場出口や構内交差部の死角を減らすためにカーブミラーが使われます。結論からいうと、
                <Mark>
                  私有地の駐車場カーブミラーには、全国一律の「高さ○m・鏡面○mm」という単純な設置基準はありません
                </Mark>
                。公道用の参考値と、私有地での現地確認、許可、商品選定を分けて解説します。
              </P>
              <SectionImage
                src={heroImage}
                alt="駐車場出口でカーブミラーの位置と角度を確認する施設管理者"
              />
            </div>
          </header>

          <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
            <section className="rounded-2xl border border-gray-900 bg-gray-50 p-6">
              <h2 className="text-xl font-black text-gray-900 sm:text-2xl">
                AEO回答：駐車場カーブミラーの設置基準
              </h2>
              <P>
                私有地の駐車場には、全国一律の「高さ○m・サイズ○mm」という単純な法定基準はありません。公道用では
                <Mark>鏡体下端2.5m</Mark>、<Mark>5〜15度下向き</Mark>
                が標準的な参考値ですが、駐車場では停止位置から歩道・車道が見えるかを仮置きで確認します。道路上や電柱へ設置する場合は許可が必要です。
              </P>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {mainCategoryLinks.map((item) => (
                  <CategoryCard key={item.url} item={item} />
                ))}
              </div>
            </section>

            <nav
              aria-label="目次"
              className="mt-10 rounded-2xl border border-gray-300 bg-white p-6"
            >
              <p className="text-lg font-black text-gray-900">目次</p>
              <ol className="mt-4 grid gap-2 sm:grid-cols-2">
                {toc.map((item, index) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="font-bold underline underline-offset-4"
                    >
                      {index + 1}. {item.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <H2 id="conclusion">
              先に結論：私有地は現地確認、公道は許可と管理者基準が先
            </H2>
            <P>
              駐車場のカーブミラー選びは、次の順番で考えると失敗しにくくなります。
            </P>
            <Ol>
              <li>設置場所が完全な私有地内か確認する</li>
              <li>運転席の停止位置から、何が見えないかを特定する</li>
              <li>左右一方向か、二方向かを分ける</li>
              <li>
                近距離なら
                <Mark>300〜450mm</Mark>
                、一般的な出口は
                <Mark>600mm以上</Mark>
                を候補にする
              </li>
              <li>仮置きし、運転者と誘導者の2人で角度を調整する</li>
              <li>道路・歩道・電柱へ出る場合は、道路管理者・所有者へ確認する</li>
            </Ol>
            <P>
              公道用道路反射鏡の設置方法では、鏡体下端から路面まで2.5m、平坦地で鉛直軸から5〜15度下向きが標準的な参考値として示されています。ただし、視認性確保のため1.8m程度まで下げる場合もあるため、
              <Mark>2.5mはどの駐車場にも固定的に適用する数字ではありません</Mark>
              。
            </P>
            <H3>まず商品ラインナップを確認する</H3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {mainCategoryLinks.map((item) => (
                <CategoryCard key={`early-${item.url}`} item={item} />
              ))}
            </div>

            <H2 id="standards">駐車場カーブミラーに全国一律の設置基準はある？</H2>
            <H3>小規模な私有地駐車場</H3>
            <P>
              住宅、店舗、事業所、マンションなどの私有地内に設置するカーブミラーは、公道上の道路反射鏡と同じ扱いではありません。重要なのは、ミラー・支柱・金具が敷地境界を越えないこと、歩行者や車両の通行を妨げないこと、反射光が近隣へ強く入らないこと、倒壊・落下しない固定方法を選ぶこと、運転席から必要範囲が見えることです。
            </P>
            <P>
              自治体が設置する公道用カーブミラーは、公共性や目視確認の可否で設置可否を判断します。個人宅・事業所の駐車場出口について、自治体では設置しないとしている例も多いため、私有地側で設置する場合は、敷地内へ安全に収めるのが基本です。
            </P>
            <H3>公道・歩道・道路上空へかかる場合</H3>
            <P>
              支柱やミラーが道路区域へ入る、道路上空へ張り出す、道路上の電柱へ付ける場合は、
              <Mark>無断で設置できません</Mark>
              。道路上へ継続して工作物を設ける場合は道路占用許可が必要になることがあり、電柱は道路管理者だけでなく電柱所有者の承諾も関係します。「敷地内の壁に付けたが、鏡面だけ歩道へ出ている」という状態も避け、施工前に道路管理者へ確認してください。
            </P>
            <H3>一定規模以上の路外駐車場</H3>
            <P>
              国土交通省は、駐車場法で規定される路外駐車場のうち、駐車部分が500㎡以上のものについて、駐車場法施行令の技術的基準に従う必要があると案内しています。出口の視認性については、出口から2m後退した車路中心線上の高さ1.4mから、道路を通行する者を確認できるようにする考え方が示されています。
            </P>
            <P>
              つまり、
              <Mark>
                カーブミラーを付ければ、建物や塀で直視できない出口が自動的に基準適合になるとは限りません
              </Mark>
              。対象となる規模・用途の駐車場は、設計者、自治体、所管部署へ事前確認してください。
            </P>

            <H2 id="steps">設置位置・高さ・角度を決める6ステップ</H2>
            <SectionImage
              src={images.driverView}
              alt="運転席の停止位置からカーブミラーの見え方を確認するイメージ"
            />
            <H3>1. 車両の停止位置を決める</H3>
            <P>
              まず、出口で車が安全に停止する位置を決めます。ミラーを眺めやすい位置ではなく、実際に運転者が停止し、歩行者・自転車・車両を確認する位置が基準です。大型車が入る駐車場では、普通車とトラックの運転席位置が異なるため、両方で確認する必要があります。
            </P>
            <H3>2. 確認対象を決める</H3>
            <P>
              「左右が見えない」だけでは、適切なミラーを選べません。歩道を通る歩行者・自転車、左から来る車、右から来る車、構内を横切るフォークリフト、駐車車両の陰から出る人のうち、どれを優先して映すかを決めます。
            </P>
            <H3>3. 設置候補位置を仮決めする</H3>
            <P>
              ミラーは死角の反対側に置けばよいとは限りません。運転者、ミラー、確認対象を結ぶ反射経路が成立する必要があります。壁・ポール・既設柱へ仮の印を付け、ミラーを手で持つか、同程度の大きさの板を仮置きして確認します。
            </P>
            <H3>4. 高さを調整する</H3>
            <P>
              公道用の標準的な参考値は、鏡体下端
              <Mark>2.5m</Mark>
              です。私有地では、車の屋根・トラックで隠れない、歩行者の頭部へ接触しない、植栽・看板・シャッターで隠れない、運転者が無理なく視線を向けられる、清掃・角度調整ができる高さにします。低く付けると像が大きく見える場合がありますが、接触・いたずら・駐車車両による遮蔽が増えます。高く付けすぎると見下ろす角度が強くなり、距離感が分かりにくくなるため、2人で仮確認してください。
            </P>
            <H3>5. 上下・左右角度を合わせる</H3>
            <P>
              公道用では平坦地で
              <Mark>5〜15度下向き</Mark>
              が参考になります。私有地では、鏡面中央へ「最も見たい場所」を入れ、周辺へ歩道や車道が映るように調整します。調整する人が鏡の前に立ち、もう一人が運転席から見て、左右・上下を少しずつ動かす方法が確実です。
            </P>
            <H3>6. 昼夜・雨天・車両ありで確認する</H3>
            <Ul>
              <li>夜間照明の映り込み</li>
              <li>雨・結露・曇り</li>
              <li>駐車車両がある状態</li>
              <li>トラック・ワンボックスの運転席</li>
              <li>朝夕の逆光</li>
            </Ul>

            <H2 id="audit">設置前に行う「30分現地監査」</H2>
            <P>
              商品を先に選ぶより、設置候補箇所を短時間でも現地確認したほうが、サイズ違いや角度不良を減らせます。写真だけを見て購買担当が型番を決めるのではなく、運転する人、安全担当、施設管理者のうち最低2人で確認してください。
            </P>
            <H3>監査1：停止位置から直視できる範囲を確認</H3>
            <P>
              車両を実際の停止位置へ置き、運転席に座った状態で左右を確認します。少し前へ出れば目視できる場合でも、歩道をふさいだり、車道へ車体が出たりするなら、安全な確認位置とは言いにくい状態です。普通乗用車だけでなく、ワンボックス、配送車、トラックなど、利用する中で運転席位置が高い車両でも試します。
            </P>
            <H3>監査2：死角の原因を分類</H3>
            <Ul>
              <li>建物の壁、塀、門扉：ミラー設置の検討対象</li>
              <li>植栽：剪定や移植で改善できないか確認</li>
              <li>看板、のぼり、商品陳列：移設を優先</li>
              <li>駐車車両：区画変更、駐車禁止範囲、車止め位置を検討</li>
              <li>ゴミ置場・資材：保管場所の変更を優先</li>
            </Ul>
            <P>
              自治体の公道用設置判断でも、移動可能な車両や植栽が原因の場合、まず障害物の移動・撤去が検討されます。私有地でも、ミラーを増やす前に直接見通しを改善したほうが安全な場合があります。
            </P>
            <H3>監査3〜5：歩行者動線・構造物・記録</H3>
            <P>
              車道だけを大きく映すと、歩道の自転車や小さな子どもが鏡面の端に入り、見落としやすくなることがあります。壁へ固定する場合は壁材・厚さ・下地・アンカー位置を、独立ポールなら地下埋設物・排水管・舗装厚・基礎スペースを確認します。停止位置、設置候補位置、確認対象を写真に残し、距離と高さを記録すると、施工業者や購買担当と同じ条件で比較できます。
            </P>

            <H2 id="size">サイズの選び方：300・450・600・800・1000mm</H2>
            <SectionImage
              src={images.sizeCompare}
              alt="300・600・800・1000mmのカーブミラーを比較するイメージ"
            />
            <P>
              サイズは「大きいほど絶対に安全」ではありません。設置距離、確認範囲、車両速度、取り付けスペース、像の歪みから決めます。以下は
              <Mark>私有地での実務的な目安</Mark>
              であり、法定の区分ではありません。
            </P>
            <div className="my-6 overflow-x-auto">
              <table className={cls.table}>
                <thead>
                  <tr>
                    <th className={cls.th}>サイズ</th>
                    <th className={cls.th}>向く場所</th>
                    <th className={cls.th}>特徴</th>
                    <th className={cls.th}>注意点</th>
                  </tr>
                </thead>
                <tbody>
                  {sizeRows.map((row) => (
                    <tr key={row[0]}>
                      {row.map((cell) => (
                        <td key={`${row[0]}-${cell}`} className={cls.td}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <H3>近距離なら300〜450mm</H3>
            <P>
              住宅のガレージ、狭い通路、壁のすぐ向こうを確認する場合は、300〜450mmが候補です。小型は省スペースですが、道路まで距離があると車や自転車が小さく映ります。
            </P>
            <H3>一般的な事業所出口なら600mmから比較</H3>
            <P>
              店舗、診療所、事業所などで、出口から歩道・車道を確認する用途では600mmから比較すると整理しやすいです。
            </P>
            <H3>広い構内・大型車なら800〜1000mm</H3>
            <P>
              物流倉庫や工場で、確認対象まで距離がある、大型車の運転席から見る、幅の広い構内道路を映す場合は800〜1000mmが候補です。ただし大型鏡面は重量と風荷重が増えるため、支柱・基礎もセットで選びます。
            </P>
            <div className="mt-6 grid gap-5">
              {products.slice(0, 5).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <H2 id="single-double">一面鏡と二面鏡はどちらを選ぶ？</H2>
            <SectionImage
              src={images.singleDouble}
              alt="一面鏡と二面鏡を駐車場出口で比較するイメージ"
            />
            <H3>一面鏡</H3>
            <P>
              一方向の死角を確認する基本形です。駐車場出口で左側だけが見えない、構内カーブの先を見たいという場合は、一面鏡が向きます。道路反射鏡協会は、一方向の視距が不足する区間は通常一面鏡1基で対応するのが原則としています。一面鏡は確認方向を限定でき、像を大きく見やすいのが利点です。
            </P>
            <H3>二面鏡</H3>
            <P>
              左右別々の方向を同時に確認したいT字状の出口や構内交差部で候補になります。鏡面ごとに角度を調整できるため、一枚の鏡へ無理に左右を詰め込むより見やすくなる場合があります。ただし、二面鏡は重量・支柱負荷が増え、各鏡面が小さいと像も小さくなります。
              <Mark>一面鏡2基を別位置へ設置したほうが明瞭な場合もある</Mark>
              ため、仮置きで比較してください。
            </P>
            <div className="mt-6 grid gap-5">
              {[products[9], products[10], products[11], products[12]].map(
                (product) => (
                  <ProductCard key={product.id} product={product} />
                ),
              )}
            </div>

            <H2 id="shape-material">丸型・角型、アクリル・ステンレスの違い</H2>
            <SectionImage
              src={images.materials}
              alt="アクリル製とステンレス製のカーブミラーを比較するイメージ"
            />
            <H3>丸型と角型</H3>
            <P>
              丸型は上下左右へバランスよく視野を取りやすく、一般的なカーブミラーで選ばれます。ポール設置のラインナップも豊富です。角型は横方向の確認範囲を取りたい壁面や、設置できる高さ・幅が限られる場所で候補になります。駐車場出口で歩道を横長に映したい場合など、丸型と現地比較するとよいでしょう。
            </P>
            <div className="my-6 overflow-x-auto">
              <table className={cls.table}>
                <thead>
                  <tr>
                    <th className={cls.th}>素材</th>
                    <th className={cls.th}>強み</th>
                    <th className={cls.th}>注意点</th>
                    <th className={cls.th}>向く場所</th>
                  </tr>
                </thead>
                <tbody>
                  {materialRows.map((row) => (
                    <tr key={row[0]}>
                      {row.map((cell) => (
                        <td key={`${row[0]}-${cell}`} className={cls.td}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <P>
              アクリルは軽量で、600〜1000mmまでサイズを選びやすい素材です。壁面金具や支柱への負荷を抑えたい場合に向きます。ステンレスは工場や倉庫、屋外で、割れにくさ・耐久性を重視する場合の候補です。大型品は重量があるため、金具・支柱・基礎を対応品で揃えます。
            </P>
            <div className="mt-6 grid gap-5">
              {products.slice(5, 9).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <H2 id="mounting">壁面・ポール・既設柱の取付方法と許可</H2>
            <H3>壁面取付</H3>
            <P>
              狭い駐車場や建物出口で、独立ポールを立てるスペースがない場合に向きます。壁の構造とアンカー強度を確認し、断熱材やALCへ安易に固定しないようにします。
            </P>
            <H3>独立ポール</H3>
            <P>
              ミラーを最適位置へ置きやすく、角度調整の自由度が高い方式です。大型・二面鏡は対応支柱と基礎が必要です。
            </P>
            <H3>既設柱・電柱</H3>
            <P>
              既設柱へ取り付ける金具もありますが、対応径の確認が必要です。特に電柱は所有者の設備であり、道路上にある場合は道路占用も関係するため、
              <Mark>無断設置しないでください</Mark>。
            </P>
            <div className="mt-6">
              <ProductCard product={products[13]} />
            </div>
            <H3>DIY設置と専門業者へ依頼する境界</H3>
            <P>
              小型の壁面用ホームミラーは、取扱説明書と壁構造を確認したうえで設置できる場合があります。一方で、600mmを超える大型鏡面、独立ポールとコンクリート基礎、二面鏡、大型車・フォークリフト動線、強風・積雪・沿岸部、高所作業、道路・歩道・電柱が関係する場合、ALC・タイル・外断熱壁など固定方法が難しい場合は、専門業者への相談を優先してください。本体価格だけでなく、施工、基礎、交通誘導、許可申請の有無まで確認します。
            </P>

            <H2 id="use-cases">駐車場用途別のおすすめ構成</H2>
            <SectionImage
              src={images.warehouse}
              alt="工場・倉庫の構内交差部に大型カーブミラーを設置するイメージ"
            />
            <H3>住宅・小型店舗</H3>
            <Ul>
              <li>300〜450mmホームミラー</li>
              <li>壁面または細径ポール</li>
              <li>一方向なら一面鏡</li>
              <li>左右が独立して見えない場合は二面鏡を比較</li>
            </Ul>
            <H3>マンション・中型店舗</H3>
            <Ul>
              <li>600mm以上を基本候補</li>
              <li>歩道と車道を分けて見える角度</li>
              <li>出口注意板や左右確認板を併用</li>
              <li>夜間照明の映り込みを確認</li>
            </Ul>
            <H3>工場・倉庫・物流拠点</H3>
            <Ul>
              <li>600〜1000mm</li>
              <li>耐久性重視ならステンレス</li>
              <li>大型車運転席から確認</li>
              <li>構内T字部は二面鏡または一面鏡2基</li>
              <li>点検台帳を作る</li>
            </Ul>
            <H3>立体駐車場・屋内駐車場</H3>
            <Ul>
              <li>壁面用角型・小型ミラー</li>
              <li>高さ制限・梁との干渉を確認</li>
              <li>照明・警報装置・停止線との組み合わせ</li>
              <li>建築・駐車場法の適用は設計者へ確認</li>
            </Ul>
            <H3>注意板・左右確認板・停止線との組み合わせ</H3>
            <P>
              カーブミラーは「見えるようにする設備」ですが、利用者が停止・確認しなければ十分に機能しません。店舗や事業所で利用者が頻繁に入れ替わる場合は、左右確認板、出口注意板、路面表示、停止線を組み合わせます。表示を増やしすぎると注意が分散するため、「停止位置」「左右確認」「歩行者優先」など、事故リスクに直結する情報へ絞ることが大切です。柱ガードや誘導看板との組み合わせは、
              <Link
                href="/articles/pipe-protector-parking-column-guard"
                className="font-bold underline underline-offset-4"
              >
                パイププロテクター（駐車場柱ガード）解説
              </Link>
              もあわせて確認してください。
            </P>
            <H3>雨・曇り・雪・逆光への対策</H3>
            <P>
              雨だれや粉じんで鏡面が汚れると輪郭が見えにくくなります。物流拠点や工場では月次清掃の対象に入れます。朝夕の温度差が大きい場所では曇りが起き、積雪地域では着雪・除雪車との接触・雪山による遮蔽も確認します。朝夕の太陽や照明器具が鏡面へ直接映ると確認対象が見えにくくなるため、時間帯を変えて確認し、角度調整だけで改善しない場合は設置位置を見直します。
            </P>
            <H3>カーブミラーは安全確認の補助設備</H3>
            <P>
              カーブミラーは、距離感・速度感が実際と異なって見えたり、鏡面に映らない死角が残ったりします。そのため、出口で一時停止する、ミラー確認後に徐行して直視する、歩道手前でもう一度止まる、ミラーだけで「車がいない」と判断しない、という運用が必要です。駐車場利用者が多い場合は、停止線、左右確認板、注意板、照明、警報装置、植栽剪定なども組み合わせてください。
            </P>

            <H2 id="maintenance">設置後の点検・よくある失敗・法人チェックリスト</H2>
            <SectionImage
              src={images.maintenance}
              alt="カーブミラーの汚れ・角度・金具を定期点検するイメージ"
            />
            <P>
              道路反射鏡協会は、鏡面の向き、反射率、汚れ、変形、支柱・金具・基礎、視界を遮る障害物の点検を挙げています。私有地でも同じ観点が有効です。
            </P>
            <H3>月次または定期巡回で確認</H3>
            <Ul>
              <li>鏡面の汚れ・曇り</li>
              <li>角度ずれ</li>
              <li>ひび・割れ・へこみ</li>
              <li>金具の緩み・さび</li>
              <li>支柱の傾き</li>
              <li>植栽・看板・駐車車両による遮蔽</li>
              <li>夜間の映り込み</li>
            </Ul>
            <P>
              車両接触、台風、除雪、近隣工事の後は、角度と固定状態を確認します。設置場所、商品型番、設置日、点検日を台帳へ残すと、複数拠点でも管理しやすくなります。
            </P>
            <H3>よくある失敗例</H3>
            <Ol>
              <li>2.5mを絶対条件として、運転席から見えない高さへ付ける</li>
              <li>小型ミラーを遠距離確認へ使う</li>
              <li>左右両方を一面へ無理に映す</li>
              <li>道路・歩道へ越境する</li>
              <li>電柱へ無断で取り付ける</li>
              <li>昼間だけで角度を決める</li>
              <li>設置後の清掃・増し締めをしない</li>
            </Ol>
            <H3>法人担当者向けチェックリスト</H3>
            <Ul>
              <li>設置場所は私有地内に収まる</li>
              <li>出口の停止位置を決めた</li>
              <li>歩行者・自転車・車両の優先確認対象を決めた</li>
              <li>普通車・大型車の両方で運転席確認した</li>
              <li>300〜1000mmを設置距離から比較した</li>
              <li>一面鏡・二面鏡を仮置き比較した</li>
              <li>アクリル・ステンレスを環境から選んだ</li>
              <li>壁・支柱・基礎の強度を確認した</li>
              <li>道路占用・電柱所有者許可の要否を確認した</li>
              <li>点検担当・点検頻度・台帳を決めた</li>
            </Ul>

            <H2 id="category-cta">カーブミラーをまとめて比較する</H2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {mainCategoryLinks.map((item) => (
                <CategoryCard key={`cta-${item.url}`} item={item} />
              ))}
            </div>

            <H2 id="faq">FAQ</H2>
            <div className="mt-6 space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="rounded-xl border border-gray-300 bg-white p-5"
                >
                  <summary className={`cursor-pointer ${cls.faqQ}`}>
                    {faq.q}
                  </summary>
                  <p className={`mt-3 ${cls.bodySm}`}>{faq.a}</p>
                </details>
              ))}
            </div>

            <H2 id="related">関連記事</H2>
            <Ul>
              {relatedArticles.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-bold underline underline-offset-4"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </Ul>
            <P>
              冬の駐車場対策は
              <Link
                href="/articles/deicer-parking-howto"
                className="font-bold underline underline-offset-4"
              >
                凍結防止剤の使い方
              </Link>
              、構内の歩行者動線は
              <Link
                href="/articles/safety-walkway-setup"
                className="font-bold underline underline-offset-4"
              >
                安全通路の作り方
              </Link>
              もあわせて確認すると、駐車場まわりの安全対策を一通り揃えやすくなります。
            </P>

            <H2 id="summary">まとめ</H2>
            <P>
              駐車場カーブミラーの設置基準は、私有地と公道を分けて考える必要があります。私有地には全国一律の単純な高さ・サイズ基準があるわけではなく、停止位置から必要対象が見えるかを現地で確認します。公道用の鏡体下端
              <Mark>2.5m</Mark>、下向き
              <Mark>5〜15度</Mark>
              は参考値ですが、そのまま機械的に当てはめないことが大切です。
            </P>
            <P>
              サイズは近距離の300〜450mm、一般的な出口の600mm、広い構内・大型車の800〜1000mmを候補にし、一方向は一面鏡、左右二方向は二面鏡または一面鏡2基を比較します。商品だけでなく、停止位置、直視確認、注意板、照明、定期点検まで含めて設計し、カーブミラーを過信しない駐車場運用へつなげてください。
            </P>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {mainCategoryLinks.map((item) => (
                <CategoryCard key={`end-${item.url}`} item={item} />
              ))}
            </div>

            <section className="mt-12 rounded-2xl border border-gray-300 bg-gray-50 p-6">
              <h2 className="text-xl font-black text-gray-900 sm:text-2xl">
                施設の総合安全・防災備蓄も確認
              </h2>
              <P>
                駐車場の安全対策を見直すタイミングで、施設の災害備蓄も棚卸しする場合は、以下を確認できます。検索意図の中心であるカーブミラー選定とは別枠としてご案内しています。
              </P>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {disasterCategoryLinks.map((item) => (
                  <CategoryCard key={item.url} item={item} />
                ))}
              </div>
            </section>

            <section className="mt-12 rounded-2xl border border-gray-300 p-6">
              <h2 className="text-xl font-black text-gray-900">参考情報</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-7 text-gray-900">
                {references.map((item) => (
                  <li key={item.url}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold underline underline-offset-4"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
