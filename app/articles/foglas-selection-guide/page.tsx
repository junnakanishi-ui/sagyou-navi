// ============================================================
// 作業用品ナビ / articles/foglas-selection-guide
// 「フォグラス 選び方」すりガラス調 目隠しフィルム 徹底ガイド（自己完結page.tsx）
// ============================================================
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";

const SLUG = "foglas-selection-guide";
const SITE_URL = "https://sagyou-navi.com";
const CANONICAL = `${SITE_URL}/articles/${SLUG}`;

export const metadata: Metadata = {
  title:
    "フォグラスの選び方｜すりガラス調 目隠しフィルムの種類・見え方・貼り方・外貼りまで徹底解説【2026年】｜作業用品ナビ",
  description:
    "中川ケミカル「フォグラス」の選び方を、品番ごとの見え方（目隠し度）・用途別の選び方・外貼り(Gタイプ)・切売り/ロール・貼り方・デメリット・お手入れ・遮熱/飛散防止(セーフティコントロール)まで網羅。すりガラス調の目隠しフィルム選びの決定版ガイドです。",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title:
      "フォグラスの選び方｜すりガラス調 目隠しフィルムの種類・見え方・貼り方・外貼りまで徹底解説【2026年】",
    description:
      "フォグラスの見え方（C-16/C-718/C-714）、外貼りGタイプ、切売り/ロール、貼り方、セーフティコントロールまで切売り販売店視点で解説。",
    type: "article",
    images: ["/articles/foglas/hero.jpg"],
  },
};

// ---- URL helpers -------------------------------------------
const UTM = "utm_source=sagyou_navi";
function buildUrl(url: string, utm: string): string {
  if (!url) return url;
  const h = url.indexOf("#");
  const append = (b: string): string => `${b}${b.includes("?") ? "&" : "?"}${utm}`;
  if (h === -1) return append(url);
  return `${append(url.slice(0, h))}${url.slice(h)}`;
}
const SC_CAT = "shopping-pc-web-category-storeitm-rsltlst-img";
const YB = (id: string) =>
  buildUrl(
    `https://store.shopping.yahoo.co.jp/signcity-yshop/${id}.html?sc_i=${SC_CAT}&ea=`,
    UTM,
  );
const RAW = (u: string) => buildUrl(u, UTM);

// ---- 最終CTA（指定カテゴリ一覧） ----------------------------
const CTA_LISTS = [
  {
    label: "中川ケミカル・フォグラス一覧",
    href: RAW("https://store.shopping.yahoo.co.jp/signcity-yshop/c3e6c0eea5.html"),
  },
  {
    label: "リンタックコマース一覧",
    href: RAW("https://store.shopping.yahoo.co.jp/signcity-yshop/a5eaa5f3a5.html"),
  },
  {
    label: "3Mガラスフィルム・ファサラ一覧",
    href: RAW("https://store.shopping.yahoo.co.jp/signcity-yshop/3ma1caa5b9.html"),
  },
  {
    label: "サンゲツ・CLEAS一覧",
    href: RAW("https://store.shopping.yahoo.co.jp/signcity-yshop/a5b5a5f3a5.html"),
  },
];

// ---- YouTube（メーカー公開動画） ---------------------------
const VIDEOS = ["d7NDvafsGwI", "hrW5lI3IKQk", "QWYydRmA5v0", "QjkzH1H9g-U", "VDCPUrHVa7w"];

// ---- UI atoms ----------------------------------------------
function CategoryBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex w-fit items-center rounded bg-gray-900 px-2 py-0.5 text-xs font-bold text-white">
      {children}
    </span>
  );
}
function AnswerBox({ children }: { children: ReactNode }) {
  return (
    <div className="my-6 rounded-lg border-l-4 border-gray-900 bg-gray-50 p-5 text-[15px] leading-[1.95] tracking-[0.04em] text-gray-900">
      {children}
    </div>
  );
}
function Caution({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="my-6 rounded-lg border border-gray-300 bg-gray-50 p-5">
      <p className="mb-1 text-sm font-bold text-gray-900">⚠ {title}</p>
      <div className={cls.bodySm}>{children}</div>
    </div>
  );
}
function CardGrid({ children }: { children: ReactNode }) {
  return <div className="my-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">{children}</div>;
}
function Table({ children }: { children: ReactNode }) {
  return (
    <div className="my-6 overflow-x-auto">
      <table className={cls.table}>{children}</table>
    </div>
  );
}
function Th({ children }: { children: ReactNode }) {
  return <th className={cls.th}>{children}</th>;
}
function Td({ children }: { children: ReactNode }) {
  return <td className={cls.td}>{children}</td>;
}
function ArticleImage({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <figure className="my-6">
      <Image
        src={src}
        alt={alt}
        width={1280}
        height={720}
        priority={priority}
        className="h-auto w-full rounded-lg border border-gray-200"
        sizes="(max-width: 768px) 100vw, 768px"
      />
      <figcaption className={`mt-2 text-center ${cls.meta}`}>{alt}</figcaption>
    </figure>
  );
}

// ---- Shop links / product cards ----------------------------
function ShopButton({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow sponsored noopener"
      className="inline-flex items-center justify-center rounded-md bg-gray-900 px-3 py-2 text-xs font-bold text-white hover:bg-gray-700"
    >
      {label}
    </a>
  );
}
function ShopLinks({ links }: { links: { label: string; href: string }[] }) {
  if (!links || links.length === 0) {
    return (
      <span className="inline-flex items-center rounded-md border border-dashed border-gray-400 px-3 py-2 text-xs text-gray-800">
        掲載準備中
      </span>
    );
  }
  return (
    <div className="flex flex-wrap gap-2">
      {links.map((l) => (
        <ShopButton key={l.href} href={l.href} label={l.label} />
      ))}
    </div>
  );
}
function ProductCard({
  img,
  name,
  badge,
  look,
  use,
  links,
}: {
  img: string;
  name: string;
  badge: string;
  look: string;
  use: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="flex flex-col rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <div className="relative mb-3 aspect-square w-full overflow-hidden rounded-md bg-gray-50">
        <Image
          src={`/products/${img}`}
          alt={name}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 50vw, 300px"
        />
      </div>
      <CategoryBadge>{badge}</CategoryBadge>
      <h3 className={`mt-2 ${cls.h3}`}>{name}</h3>
      <p className={`mt-1 ${cls.bodySm}`}>
        <span className="font-bold">目隠し度・見え方：</span>
        {look}
      </p>
      <p className={`mt-1 ${cls.bodySm}`}>
        <span className="font-bold">向く用途：</span>
        {use}
      </p>
      <p className={`mt-1 ${cls.meta}`}>
        ※価格・在庫・幅・数量・適合ガラスは各商品ページで要確認（切売り＝1m単位/巻＝ロール）
      </p>
      <div className="mt-3">
        <ShopLinks links={links} />
      </div>
    </div>
  );
}

// ---- Video grid --------------------------------------------
function VideoGrid() {
  return (
    <div className="my-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
      {VIDEOS.map((id, i) => (
        <div key={id} className="overflow-hidden rounded-lg border border-gray-200 bg-black">
          <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
            <iframe
              className="absolute left-0 top-0 h-full w-full"
              src={`https://www.youtube.com/embed/${id}`}
              title={`フォグラス メーカー公開動画 ${i + 1}`}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      ))}
    </div>
  );
}

// ---- Final CTA ---------------------------------------------
function FinalCta() {
  return (
    <div className="my-8 rounded-xl border-2 border-gray-900 bg-gray-50 p-6">
      <p className="text-center text-base font-bold text-gray-900">
        ブランド別・ガラスフィルム一覧はこちら
      </p>
      <p className={`mt-1 text-center ${cls.meta}`}>
        フォグラス（中川ケミカル）だけでなく、他ブランドもまとめて比較できます。
      </p>
      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {CTA_LISTS.map((c) => (
          <a
            key={c.href}
            href={c.href}
            target="_blank"
            rel="nofollow sponsored noopener"
            className="inline-flex items-center justify-center rounded-md bg-gray-900 px-5 py-3 text-sm font-bold text-white hover:bg-gray-700"
          >
            {c.label} ›
          </a>
        ))}
      </div>
    </div>
  );
}

// ---- FAQ data ----------------------------------------------
const FAQ = [
  {
    q: "フォグラスとは何ですか？",
    a: "中川ケミカルの、貼るだけでガラスがすりガラス（フロストガラス）調になる装飾・目隠しフィルムです。塩化ビニル樹脂系フィルムで、再はく離タイプの粘着剤のため施工性がよく、後日ほとんど糊を残さずはがせます。不燃認定（NM-5102）やF☆☆☆☆に対応する品番もあり、オフィス・店舗・住宅の窓やパーティションで広く使われています。",
  },
  {
    q: "フォグラスの品番はどう違うのですか？",
    a: "エンボス（模様）や乳白色の濃さで見え方（目隠し度）が変わります。定番のC-16・C-718・C-714はエンボス柄が同じでベースの乳白度が異なり、C-16→C-718→C-714の順で濃く（目隠しが強く）なります。ほかにストライプ柄のC-100系や、色・柄違いのC-08・C-25・C-45などがあります。",
  },
  {
    q: "どのフォグラスが一番目隠しできますか？",
    a: "定番3種ではC-714が最も濃く、シルエットが分かりにくいレベルまで目隠しできます。C-718は中間、C-16は「人の気配は分かるが表情までは分からない」程度です。しっかり隠したいならC-714、圧迫感を抑えて明るさを残したいならC-16が目安です。",
  },
  {
    q: "飲食店や待合室にはどの品番が向きますか？",
    a: "圧迫感を抑えつつ視線をやわらげたい飲食店・待合室・オフィスの間仕切りにはC-16程度が人気です。通りに面した席で「目線は合わせたくないが店内の様子は伝えたい」といった用途に向きます。しっかり隠したい相談室・更衣室・浴室まわりはC-714などの濃いめが安心です。",
  },
  {
    q: "フォグラスは外貼り（屋外）できますか？",
    a: "標準のフォグラスは基本的に内貼り用です。屋外・ガラスの外面に貼る場合は、屋外耐候性を強化した「Gタイプ（C-16Gなど）」やフォグラスガード、外貼り可の特殊機能フィルムを選びます。なお、Gタイプと標準タイプの併用（同じ面での混在）は避けてください。",
  },
  {
    q: "フォグラスガードと普通のフォグラスの違いは？",
    a: "フォグラスガードは、すりガラス調の見た目に加えて表面保護性や飛散防止性を高めたシリーズです。C-1610は出力（インクジェット印刷）推奨フィルムで、印刷を組み合わせた装飾・サイン用途に向きます。屋外・耐久が求められる場所や、印刷デザインを載せたい場合に選ばれます。",
  },
  {
    q: "切売りとロール（20m巻）はどちらを選べばいい？",
    a: "必要な長さだけ買うなら切売り（1m単位など）、施工面積が広い・複数枚貼る・業務で使うならロール（20m/30m巻）が割安です。幅は920〜1300mmなどガラスサイズに合わせて選び、継ぎ目が出ないよう1枚で貼れる幅を選ぶのが基本です。",
  },
  {
    q: "フォグラスの貼り方（施工方法）は？",
    a: "水貼りが基本です。中性洗剤を数滴入れた施工液（水500mlに数滴が目安）をガラスとフィルムの糊面にたっぷり吹き、位置を合わせてスキージで中央から外へ水と空気を押し出します。最後にカッターでサイズを整え、乾くまで触らないようにします。再はく離糊なので位置調整がしやすいのが特長です。",
  },
  {
    q: "フォグラスにデメリットや注意点はありますか？",
    a: "施工直後は水分が残ってくもりや水泡が見えることがありますが、乾けば消えます（低温・高湿では日数がかかることも）。表面は傷が付きやすいため圧着時は注意します。また濃い色や遮熱系フィルムは熱を吸収するため、厚いガラス・網入り/線入りガラス・複層ガラスでは熱割れのリスクがあり、適合の確認が必要です。",
  },
  {
    q: "複層ガラス（ペアガラス）やLow-Eガラスに貼れますか？",
    a: "熱割れや保証の観点から、適合を必ず確認してください。複層・網入り・線入り・Low-Eガラスは熱割れしやすく、遮熱・濃色フィルムでは特に注意が必要です。判断に迷う場合はメーカーの適合情報を確認するか、専門の施工業者に相談するのが安全です。",
  },
  {
    q: "遮熱や飛散防止もしたい場合は？",
    a: "中川ケミカルの機能性フィルム「セーフティコントロール」が該当します。遮熱（サーモ）タイプ（SC-810H/850/860H/890）、マジックミラー調のCSミラー（SC-710H）、カラータイプ（SC-120H〜160H）などがあり、目隠しに加えて省エネ・飛散防止・UVカットを狙えます。外貼り可のSC-890もあります。",
  },
  {
    q: "虫が寄りにくいフィルムはありますか？",
    a: "外貼り可の防虫フィルム（SF-8500Gすりガラス調／SF-8000G透明）があります。屋外側に貼ることで、光に集まる虫を寄せ付けにくくする特殊機能フィルムで、飲食店や施設の窓まわりの対策に使われます。",
  },
  {
    q: "フォグラスはどのくらい長持ちしますか？",
    a: "有機材料のため寿命があり、使用環境（直射日光・屋外・高温多湿など）が過酷なほど短くなります。屋内の一般的な窓であれば長期間使えますが、屋外は耐候性の高いGタイプを選び、定期的な清掃でコンディションを保つことが長持ちのコツです。",
  },
  {
    q: "フォグラスのお手入れ方法は？",
    a: "水を含んだ柔らかい布やゴムスキージで、一方向に軽く水拭きします（往復拭き・乾拭きは避ける）。汚れがひどい場合は1〜2％の中性洗剤を使用し、アンモニア系・塩素系・有機系の洗剤は使わないでください。砂ぼこりや金属粉は先に水で洗い流してから拭きます。",
  },
  {
    q: "フォグラスと3M・サンゲツ・リンテックのフィルムは何が違う？",
    a: "いずれもすりガラス調・機能性のガラスフィルムを展開していますが、柄（エンボス）のバリエーション、見え方、遮熱・飛散防止などの機能ラインナップ、価格が異なります。フォグラスは柄・目隠し度の選択肢が豊富で切売り対応が便利です。用途・見た目・機能で比較し、記事末尾の各ブランド一覧から見比べるのがおすすめです。",
  },
  {
    q: "賃貸でもフォグラスは貼れますか？",
    a: "フォグラスは再はく離タイプの粘着剤で、後日ほとんど糊を残さずはがせるため、原状回復の面では扱いやすい部類です。ただし賃貸の条件は物件により異なるため、退去時の扱いは事前に管理会社・オーナーへ確認してください。",
  },
  {
    q: "自分で貼るのが不安な場合はどうすれば？",
    a: "大きな窓や複層ガラス、外貼りなどは、失敗すると気泡やシワ、熱割れのリスクがあります。面積が大きい・仕上がりを重視する・特殊なガラスの場合は、プロの施工業者に依頼するのも選択肢です。まずは小さな窓で切売りを試してから広げる方法もあります。",
  },
];

// ---- JSON-LD -----------------------------------------------
const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "フォグラスの選び方｜すりガラス調 目隠しフィルムの種類・見え方・貼り方・外貼りまで徹底解説【2026年】",
  description:
    "中川ケミカル「フォグラス」の選び方を、品番ごとの見え方（目隠し度）・用途別の選び方・外貼り(Gタイプ)・切売り/ロール・貼り方・デメリット・お手入れ・遮熱/飛散防止(セーフティコントロール)まで網羅。すりガラス調の目隠しフィルム選びの決定版ガイドです。",
  mainEntityOfPage: { "@type": "WebPage", "@id": CANONICAL },
  author: { "@type": "Organization", name: "作業用品ナビ編集部" },
  publisher: {
    "@type": "Organization",
    name: "作業用品ナビ",
    logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
  },
  datePublished: "2026-07-16",
  dateModified: "2026-07-30",
};
const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "記事一覧", item: `${SITE_URL}/articles` },
    { "@type": "ListItem", position: 3, name: "フォグラスの選び方", item: CANONICAL },
  ],
};
const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

// ============================================================
export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 py-10">
        <nav className={`mb-4 ${cls.meta}`} aria-label="パンくず">
          <Link href="/" className="hover:underline">
            ホーム
          </Link>{" "}
          ／{" "}
          <Link href="/articles" className="hover:underline">
            記事一覧
          </Link>{" "}
          ／ <span className="text-gray-900">フォグラスの選び方</span>
        </nav>

        <CategoryBadge>ガラスフィルム</CategoryBadge>
        <h1 className={`mt-2 ${cls.h1}`}>
          フォグラスの選び方｜すりガラス調 目隠しフィルムの種類・見え方・貼り方・外貼りまで徹底解説【2026年】
        </h1>
        <p className={cls.body}>
          「窓の目隠しにフォグラスが良さそうだけど、品番が多すぎてどれを選べばいい？」——そんな方へ。この記事では、中川ケミカルの人気すりガラス調フィルム
          <strong>「フォグラス」</strong>を、
          <strong>見え方（目隠し度）・用途別の選び方・外貼り対応・切売り/ロール・貼り方・デメリット・お手入れ</strong>
          まで、切売り対応の販売店の視点で網羅的に解説します。遮熱・飛散防止まで欲しい方向けの「セーフティコントロール」も紹介。読み終える頃には、あなたの窓に最適な一枚が選べます。
        </p>
        <p className={cls.meta}>最終更新：2026年7月30日</p>

        <ArticleImage
          src="/articles/foglas/hero.jpg"
          alt="窓に貼られたすりガラス調の目隠しフィルム（フォグラス）のイメージ"
          priority
        />

        {/* ============ H2-1 とは・結論 ============ */}
        <h2 className={cls.h2}>
          フォグラスとは？すりガラス調の目隠しフィルム【選び方の結論】
        </h2>
        <AnswerBox>
          <p>
            <strong>フォグラス</strong>は、貼るだけでガラスが
            <strong>すりガラス（フロストガラス）調</strong>
            になる、中川ケミカルの装飾・目隠しフィルムです。選び方の結論はシンプルで、
            <strong>①「どのくらい隠したいか」（見え方＝目隠し度）</strong>と
            <strong>②「どこに貼るか」（内貼り/外貼り・ガラスの種類）</strong>
            の2軸で決めます。目隠し度は定番の
            <strong>C-16 → C-718 → C-714</strong>{" "}
            の順に濃く（強く）なります。屋外・ガラスの外面に貼るなら耐候性を高めた
            <strong>Gタイプ（C-16Gなど）</strong>
            を選びます。必要な長さだけなら<strong>切売り</strong>
            、広い面や業務用は<strong>ロール（20m/30m巻）</strong>が割安です。
          </p>
        </AnswerBox>

        <p className={cls.body}>
          まずは定番の代表品番から。切売り（1m単位）とロール、幅（mm）を選べます。下のボタンから各商品ページで見え方の写真・価格・在庫を確認できます。
        </p>
        <CardGrid>
          <ProductCard
            img="005895.jpg"
            name="フォグラス C-16（サンド）"
            badge="定番・薄め"
            look="人の気配は分かるが表情までは分からない薄めの目隠し"
            use="飲食店・待合室・オフィス間仕切り"
            links={[
              { label: "920mm 切売り", href: YB("005895") },
              { label: "1010mm 切売り", href: YB("005915") },
              { label: "1200mm 切売り", href: YB("005914") },
              { label: "1300mm 切売り", href: YB("005913") },
              { label: "1010mm 20m", href: YB("011363") },
              { label: "1200mm 20m", href: YB("011362") },
              { label: "1300mm 20m", href: YB("011361") },
              { label: "920mm 20m", href: YB("011364") },
            ]}
          />
          <ProductCard
            img="005907.jpg"
            name="フォグラス C-718（サンドホワイトA）"
            badge="定番・中間"
            look="輪郭がぼやける中間の目隠し度"
            use="会議室・応接・店舗"
            links={[
              { label: "1300mm 切売り", href: YB("005907") },
              { label: "1010mm 切売り", href: YB("005909") },
              { label: "1200mm 切売り", href: YB("005908") },
              { label: "1010mm 20m", href: YB("011357") },
              { label: "1200mm 20m", href: YB("011356") },
              { label: "1300mm 20m", href: YB("011355") },
            ]}
          />
          <ProductCard
            img="011360.jpg"
            name="フォグラス C-714（サンドホワイト）"
            badge="定番・濃いめ"
            look="シルエットも分かりにくいしっかり目隠し"
            use="相談室・更衣室・浴室まわり"
            links={[
              { label: "1010mm 20m", href: YB("011360") },
              { label: "1010mm 切売り", href: YB("005912") },
              { label: "1200mm 切売り", href: YB("005911") },
              { label: "1300mm 切売り", href: YB("005910") },
              { label: "1200mm 20m", href: YB("011359") },
              { label: "1300mm 20m", href: YB("011358") },
            ]}
          />
          <ProductCard
            img="005899.jpg"
            name="フォグラス C-100（サンドストライプA）"
            badge="柄・ストライプ"
            look="ストライプ柄で抜け感を出しつつ視線をカット"
            use="オフィス・店舗のデザイン目隠し"
            links={[
              { label: "1010mm 切売り", href: YB("005899") },
              { label: "1010mm 20m", href: YB("011345") },
            ]}
          />
        </CardGrid>

        {/* ============ H2-2 見え方で選ぶ ============ */}
        <h2 className={cls.h2}>
          【見え方で選ぶ】フォグラスの目隠し度と品番の違い（比較表）
        </h2>
        <p className={cls.body}>
          フォグラス選びの最重要ポイントが<strong>見え方（目隠し度）</strong>
          です。定番のC-16・C-718・C-714はエンボス（模様）が同じで、ベースの乳白色の濃さが違います。透過度は大きく「①人の気配が分かる →
          ②輪郭が見える → ③しっかり目隠し・ゾーニング」の段階で選びます。
        </p>
        <Table>
          <thead>
            <tr>
              <Th>品番</Th>
              <Th>見え方（目隠し度）</Th>
              <Th>向く場所の例</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td>C-16（サンド）</Td>
              <Td>薄め。人の気配は分かるが表情までは分からない</Td>
              <Td>飲食店・待合室・オフィス間仕切り（圧迫感を抑えたい）</Td>
            </tr>
            <tr>
              <Td>C-718（サンドホワイトA）</Td>
              <Td>中間。輪郭がぼやける</Td>
              <Td>会議室・応接・店舗（ほどよく隠したい）</Td>
            </tr>
            <tr>
              <Td>C-714（サンドホワイト）</Td>
              <Td>濃いめ。シルエットも分かりにくい</Td>
              <Td>相談室・更衣室・浴室まわり（しっかり隠したい）</Td>
            </tr>
            <tr>
              <Td>C-08（バーク）/ C-25 / C-45</Td>
              <Td>色・柄で表情を変える（意匠性）</Td>
              <Td>デザイン重視の内装・装飾</Td>
            </tr>
            <tr>
              <Td>C-100〜C-210（サンドストライプ）</Td>
              <Td>ストライプ柄で抜け感を演出</Td>
              <Td>オフィス・店舗のデザイン目隠し</Td>
            </tr>
          </tbody>
        </Table>
        <p className={cls.meta}>
          ※見え方は貼るガラス・照明・昼夜で変わります。実際の写真は各商品ページ、より詳しくは後半の「動画で見るフォグラス」もご覧ください。
        </p>
        <ArticleImage
          src="/articles/foglas/mieakata.jpg"
          alt="フォグラスの品番による見え方（目隠し度）の違いのイメージ"
        />
        <p className={cls.body}>色・柄で選びたい方には、バーク調やストライプ柄もあります。</p>
        <CardGrid>
          <ProductCard
            img="005906.jpg"
            name="フォグラス C-08（バーク）"
            badge="柄・色"
            look="バーク調の意匠的なすりガラス表現"
            use="デザイン重視の内装・装飾"
            links={[
              { label: "1010mm 切売り", href: YB("005906") },
              { label: "1010mm 20m", href: YB("011354") },
            ]}
          />
          <ProductCard
            img="011353.jpg"
            name="フォグラス C-25"
            badge="柄"
            look="柄違いで表情を変えるすりガラス調"
            use="装飾・間仕切り"
            links={[
              { label: "1010mm 20m", href: YB("011353") },
              { label: "1010mm 切売り", href: YB("060727") },
            ]}
          />
          <ProductCard
            img="011352.jpg"
            name="フォグラス C-45"
            badge="柄"
            look="柄違いで表情を変えるすりガラス調"
            use="装飾・間仕切り"
            links={[
              { label: "1010mm 20m", href: YB("011352") },
              { label: "1010mm 切売り", href: YB("060728") },
            ]}
          />
          <ProductCard
            img="005898.jpg"
            name="フォグラス C-110（サンドストライプB）"
            badge="柄・ストライプ"
            look="ストライプ柄で抜け感を演出"
            use="オフィス・店舗のデザイン目隠し"
            links={[
              { label: "1010mm 切売り", href: YB("005898") },
              { label: "1010mm 20m", href: YB("011344") },
            ]}
          />
          <ProductCard
            img="005897.jpg"
            name="フォグラス C-200（サンドストライプC）"
            badge="柄・ストライプ"
            look="ストライプ柄で抜け感を演出"
            use="オフィス・店舗のデザイン目隠し"
            links={[
              { label: "1010mm 切売り", href: YB("005897") },
              { label: "1010mm 20m", href: YB("011343") },
            ]}
          />
          <ProductCard
            img="005896.jpg"
            name="フォグラス C-210（サンドストライプD）"
            badge="柄・ストライプ"
            look="ストライプ柄で抜け感を演出"
            use="オフィス・店舗のデザイン目隠し"
            links={[
              { label: "1010mm 切売り", href: YB("005896") },
              { label: "1010mm 20m", href: YB("011342") },
            ]}
          />
        </CardGrid>

        {/* ============ H2-3 用途別の選び方 ============ */}
        <h2 className={cls.h2}>
          【用途別】どのフォグラスを選ぶ？（オフィス・店舗・住宅）
        </h2>
        <ul className={cls.list}>
          <li>
            <strong>オフィスの会議室・応接</strong>
            ：ほどよく隠すC-718、抜け感重視ならストライプ（C-100系）
          </li>
          <li>
            <strong>飲食店・待合室・受付</strong>
            ：圧迫感を抑えつつ視線をやわらげるC-16が定番
          </li>
          <li>
            <strong>相談室・更衣室・浴室・トイレ</strong>
            ：しっかり隠すC-714など濃いめ
          </li>
          <li>
            <strong>店舗の外ウィンドウ・屋外</strong>
            ：外貼り可のGタイプ・フォグラスガード（次章）
          </li>
          <li>
            <strong>装飾・サイン</strong>
            ：印刷対応のフォグラスガードC-1610や柄違いで意匠性を出す
          </li>
        </ul>

        {/* ============ H2-4 外貼りで選ぶ ============ */}
        <h2 className={cls.h2}>
          【外貼りで選ぶ】屋外・店舗外ウィンドウ向け（Gタイプ・ガード・防虫）
        </h2>
        <p className={cls.body}>
          標準のフォグラスは基本的に<strong>内貼り用</strong>です。ガラスの
          <strong>外面に貼る（外貼り）</strong>
          場合や、屋外の耐候性・耐久が必要な場合は、品番末尾に
          <strong>「G」</strong>
          が付く外貼り可タイプ（C-16Gなど）や
          <strong>フォグラスガード</strong>
          、外貼り可の<strong>防虫フィルム</strong>を選びます。
          <strong>GタイプとGなしの同一面での併用は避けてください。</strong>
          フォグラスガードC-1610は
          <strong>出力（インクジェット印刷）推奨</strong>
          で、印刷デザインを載せたサイン・装飾にも使えます。
        </p>
        <CardGrid>
          <ProductCard
            img="060730.jpg"
            name="フォグラス C-16G（外貼り可）"
            badge="外貼り可"
            look="C-16の見え方で屋外耐候性を強化。外貼り対応"
            use="店舗の外ウィンドウ・屋外の目隠し"
            links={[
              { label: "1300mm 20m", href: YB("060730") },
              { label: "1010mm 20m", href: YB("060729") },
              { label: "1300mm 切売り", href: YB("060732") },
              { label: "1010mm 切売り", href: YB("060731") },
            ]}
          />
          <ProductCard
            img="011341.jpg"
            name="フォグラスガード C-1610（出力推奨）"
            badge="ガード・印刷対応"
            look="すりガラス調＋印刷（インクジェット出力）推奨"
            use="印刷デザインを載せたサイン・装飾"
            links={[
              { label: "1250mm 20m", href: YB("011341") },
              { label: "1250mm 切売り", href: YB("060737") },
            ]}
          />
          <ProductCard
            img="060735.jpg"
            name="フォグラスガード C-1620"
            badge="ガード"
            look="すりガラス調＋表面保護・耐久性"
            use="屋外・耐久が必要な目隠し"
            links={[
              { label: "1250mm 切売り", href: YB("060735") },
              { label: "1250mm 20m", href: YB("011340") },
            ]}
          />
          <ProductCard
            img="112297.jpg"
            name="フォグラスガード C-1685"
            badge="ガード"
            look="すりガラス調＋表面保護・耐久性"
            use="屋外・耐久が必要な目隠し"
            links={[
              { label: "1250mm 切売り", href: YB("112297") },
              { label: "1250mm 20m", href: YB("112298") },
            ]}
          />
          <ProductCard
            img="113542.jpg"
            name="防虫フィルム SF-8500G（すりガラス調・外貼り可）"
            badge="外貼り・防虫"
            look="すりガラス調の目隠し＋虫が寄りにくい特殊機能"
            use="飲食店・施設の窓の防虫＋目隠し"
            links={[
              { label: "1220mm 切売り", href: YB("113542") },
              { label: "1220mm 30m", href: YB("113541") },
            ]}
          />
          <ProductCard
            img="113540.jpg"
            name="防虫フィルム SF-8000G（透明・外貼り可）"
            badge="外貼り・防虫"
            look="透明のまま虫が寄りにくい特殊機能"
            use="見た目を変えず防虫したい窓"
            links={[
              { label: "1220mm 切売り", href: YB("113540") },
              { label: "1220mm 30m", href: YB("113539") },
            ]}
          />
        </CardGrid>

        {/* ============ H2-5 切売り/ロール・幅 ============ */}
        <h2 className={cls.h2}>切売りとロール、幅（サイズ）の選び方【買い方】</h2>
        <p className={cls.body}>
          同じ品番でも「切売り」と「ロール（20m/30m巻）」、幅（mm）が選べます。買い方の基本は次のとおりです。
        </p>
        <Table>
          <thead>
            <tr>
              <Th>選び方</Th>
              <Th>目安</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td>切売り（1m単位など）</Td>
              <Td>必要な長さだけ・小さめの窓・お試し。無駄が出にくい</Td>
            </tr>
            <tr>
              <Td>ロール（20m/30m巻）</Td>
              <Td>広い面・複数枚・業務用。単価が割安になりやすい</Td>
            </tr>
            <tr>
              <Td>幅（920〜1300mm 等）</Td>
              <Td>ガラス幅より少し広い幅を選び、できるだけ1枚（継ぎ目なし）で貼る</Td>
            </tr>
          </tbody>
        </Table>
        <p className={cls.body}>
          大きなガラスは幅の広い品番を選ぶと継ぎ目が目立たず、仕上がりがきれいになります。必要量が読みにくいときは、まず切売りで試すのもおすすめです。
        </p>

        {/* ============ H2-6 貼り方 ============ */}
        <h2 className={cls.h2}>フォグラスの貼り方（水貼りの手順）</h2>
        <p className={cls.body}>
          フォグラスは<strong>水貼り</strong>
          が基本です。再はく離タイプの粘着剤なので位置調整がしやすく、DIYでも扱いやすいフィルムです。用意するもの：中性洗剤・霧吹き・スキージ（ヘラ）・カッター・メジャー・マスキングテープ・タオル。
        </p>
        <ol className="my-4 list-decimal space-y-2 pl-6 leading-[1.95] tracking-[0.04em] text-gray-900">
          <li>
            <strong>清掃</strong>：ガラスのホコリ・油分をしっかり除去（仕上がりを左右します）
          </li>
          <li>
            <strong>施工液を作る</strong>
            ：水に中性洗剤を数滴（水500mlに数滴が目安）入れて霧吹きに
          </li>
          <li>
            <strong>採寸・仮合わせ</strong>
            ：ガラスより少し大きめにフィルムを用意し、位置決め
          </li>
          <li>
            <strong>たっぷり噴霧</strong>
            ：ガラス面とフィルムの糊面の両方に施工液をたっぷり吹く
          </li>
          <li>
            <strong>貼り付け</strong>：位置を合わせ、スキージで
            <strong>中央から外側へ</strong>水と空気を押し出す
          </li>
          <li>
            <strong>サイズ調整</strong>：端をカッターでガラスに合わせてカット
          </li>
          <li>
            <strong>乾燥</strong>
            ：乾くまで触らない（乾く前に触るとズレ・シワの原因）
          </li>
        </ol>
        <ArticleImage
          src="/articles/foglas/harikata.jpg"
          alt="スキージで水と空気を抜きながらフォグラスを貼る施工のイメージ"
        />

        {/* ============ H2-7 デメリット・注意点 ============ */}
        <h2 className={cls.h2}>フォグラスのデメリット・注意点</h2>
        <p className={cls.body}>
          メリットの多いフォグラスですが、貼る前に知っておきたい注意点もあります。
        </p>
        <Caution title="施工直後の水残り・くもりは異常ではありません">
          <p>
            施工時の水分がガラス面に残り、しばらくくもりや水泡が見えることがありますが、水分が気化すれば消えます。日陰・低温・高湿の環境では乾くまで日数がかかる場合があります。
          </p>
        </Caution>
        <Caution title="熱割れ・ガラスの種類に注意">
          <p>
            濃い色や遮熱系フィルムは熱を吸収するため、
            <strong>厚いガラス・網入り/線入りガラス・複層（ペア）ガラス・Low-Eガラス</strong>
            では<strong>熱割れ</strong>
            のリスクがあります。貼る前に必ず適合を確認し、迷う場合はメーカー情報の確認や専門業者への相談をおすすめします。
          </p>
        </Caution>
        <ul className={cls.list}>
          <li>
            <strong>表面が傷付きやすい</strong>
            ：圧着や清掃時にこすり過ぎない。乾拭き・往復拭きは避ける
          </li>
          <li>
            <strong>外貼りは専用品を</strong>
            ：標準品は内貼り用。屋外はGタイプ・ガードを選ぶ
          </li>
          <li>
            <strong>寿命がある</strong>
            ：有機材料のため、屋外・過酷環境では劣化が早まる
          </li>
          <li>
            <strong>大きな窓・特殊ガラスはプロ施工も検討</strong>
            ：気泡・シワ・熱割れの回避
          </li>
        </ul>

        {/* ============ H2-8 セーフティコントロール ============ */}
        <h2 className={cls.h2}>
          遮熱・飛散防止もほしいなら「セーフティコントロール」
        </h2>
        <p className={cls.body}>
          「目隠しだけでなく、暑さ対策（遮熱）や防災（飛散防止）もしたい」——そんなときは、中川ケミカルの機能性ガラスフィルム
          <strong>「セーフティコントロール（SC）」</strong>
          が候補です。<strong>遮熱（サーモ）</strong>
          タイプで夏の日射熱をカットし省エネに、
          <strong>飛散防止</strong>
          で地震・台風時のガラス破片によるケガを抑えます。マジックミラー調の
          <strong>CSミラー</strong>や、<strong>カラー</strong>タイプもあります。
        </p>
        <Table>
          <thead>
            <tr>
              <Th>タイプ</Th>
              <Th>主な機能・特徴</Th>
              <Th>代表品番</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td>遮熱（サーモ）</Td>
              <Td>日射熱をカットして省エネ。飛散防止・UVカットも</Td>
              <Td>SC-810H / SC-850(ZC) / SC-860H(ZH) / SC-890(ZS・外貼り可)</Td>
            </tr>
            <tr>
              <Td>ミラー / 特殊</Td>
              <Td>マジックミラー調で外からの視線を抑える 等</Td>
              <Td>SC-710H(CSミラー) / SC-720H(Mフィルム) / SC-785</Td>
            </tr>
            <tr>
              <Td>カラー</Td>
              <Td>色味を加えつつUV・飛散防止</Td>
              <Td>SC-120H〜160H（ブラウン/グレー/スモーク/ブルー）</Td>
            </tr>
          </tbody>
        </Table>
        <CardGrid>
          <ProductCard
            img="005885.jpg"
            name="セーフティコントロール SC-810H（サーモ）"
            badge="遮熱"
            look="日射熱をカットして省エネ。飛散防止・UVカット"
            use="オフィス・店舗の暑さ対策＋防災"
            links={[
              { label: "切売り", href: YB("005885") },
              { label: "20m巻", href: YB("011312") },
            ]}
          />
          <ProductCard
            img="005884.jpg"
            name="セーフティコントロール SC-850（サーモZC）"
            badge="遮熱"
            look="遮熱タイプ。省エネ・飛散防止"
            use="日射の強い窓の遮熱"
            links={[
              { label: "切売り", href: YB("005884") },
              { label: "20m巻", href: YB("011311") },
            ]}
          />
          <ProductCard
            img="005883.jpg"
            name="セーフティコントロール SC-860H（サーモZH）"
            badge="遮熱"
            look="遮熱タイプ。省エネ・飛散防止"
            use="日射の強い窓の遮熱"
            links={[
              { label: "切売り", href: YB("005883") },
              { label: "20m巻", href: YB("011310") },
            ]}
          />
          <ProductCard
            img="005882.jpg"
            name="セーフティコントロール SC-890（サーモZS・外貼り可）"
            badge="遮熱・外貼り"
            look="外貼り可の遮熱タイプ"
            use="外貼りで遮熱したい窓"
            links={[
              { label: "切売り", href: YB("005882") },
              { label: "20m巻", href: YB("011309") },
            ]}
          />
          <ProductCard
            img="011313.jpg"
            name="セーフティコントロール SC-785"
            badge="機能"
            look="機能性フィルム（詳細は商品ページ）"
            use="用途に応じて選択"
            links={[{ label: "20m巻", href: YB("011313") }]}
          />
          <ProductCard
            img="005889.jpg"
            name="セーフティコントロール SC-710H（CSミラー）"
            badge="ミラー"
            look="マジックミラー調で外からの視線を抑える"
            use="昼間の目隠し・遮熱"
            links={[{ label: "切売り", href: YB("005889") }]}
          />
          <ProductCard
            img="005888.jpg"
            name="セーフティコントロール SC-720H（Mフィルム）"
            badge="特殊"
            look="機能性フィルム（詳細は商品ページ）"
            use="用途に応じて選択"
            links={[{ label: "切売り", href: YB("005888") }]}
          />
          <ProductCard
            img="005894.jpg"
            name="セーフティコントロール SC-120H（ライトブラウン）"
            badge="カラー"
            look="色味を加えつつUV・飛散防止"
            use="意匠＋機能を両立したい窓"
            links={[
              { label: "切売り", href: YB("005894") },
              { label: "20m巻", href: YB("011324") },
            ]}
          />
          <ProductCard
            img="005893.jpg"
            name="セーフティコントロール SC-130H（ダークブラウン）"
            badge="カラー"
            look="濃いブラウンで視線と日射をカット"
            use="意匠＋機能を両立したい窓"
            links={[
              { label: "切売り", href: YB("005893") },
              { label: "20m巻", href: YB("011323") },
            ]}
          />
          <ProductCard
            img="005892.jpg"
            name="セーフティコントロール SC-140H（グレー）"
            badge="カラー"
            look="グレーで落ち着いた見た目に"
            use="意匠＋機能を両立したい窓"
            links={[
              { label: "切売り", href: YB("005892") },
              { label: "20m巻", href: YB("011322") },
            ]}
          />
          <ProductCard
            img="005891.jpg"
            name="セーフティコントロール SC-150H（スモーク）"
            badge="カラー"
            look="スモークで視線をカット"
            use="意匠＋機能を両立したい窓"
            links={[{ label: "切売り", href: YB("005891") }]}
          />
          <ProductCard
            img="005890.jpg"
            name="セーフティコントロール SC-160H（ライトブルー）"
            badge="カラー"
            look="ライトブルーの爽やかな色味"
            use="意匠＋機能を両立したい窓"
            links={[{ label: "切売り", href: YB("005890") }]}
          />
        </CardGrid>

        {/* ============ H2-9 動画 ============ */}
        <h2 className={cls.h2}>動画で見るフォグラス（メーカー公開動画）</h2>
        <p className={cls.body}>
          写真だけでは伝わりにくい「見え方」や施工の様子は、動画が分かりやすいです。メーカーが公開している見え方比較・施工の動画をまとめました。
        </p>
        <VideoGrid />

        {/* ============ H2-10 お手入れ ============ */}
        <h2 className={cls.h2}>フォグラスのお手入れ（清掃・メンテナンス）</h2>
        <p className={cls.body}>きれいな状態を長持ちさせるお手入れのポイントです。</p>
        <ul className={cls.list}>
          <li>
            水を含んだ柔らかい布・ゴムスキージで<strong>一方向に</strong>
            軽く水拭き（往復・乾拭きは避ける）
          </li>
          <li>
            汚れがひどい場合は<strong>1〜2％の中性洗剤</strong>
            。アンモニア系・塩素系・有機系洗剤は使わない
          </li>
          <li>砂ぼこり・金属粉は先に水で洗い流してから拭く（こすり傷防止）</li>
          <li>スキージの金属部がフィルムに当たらないよう注意</li>
        </ul>

        {/* ============ H2-11 他ブランド比較 ============ */}
        <h2 className={cls.h2}>3M・サンゲツ・リンテックとの違いと選び方</h2>
        <p className={cls.body}>
          すりガラス調・機能性のガラスフィルムは、フォグラス（中川ケミカル）のほかにも
          <strong>3M（ファサラ）</strong>、<strong>サンゲツ（CLEAS）</strong>、
          <strong>リンテック</strong>
          などが展開しています。柄（エンボス）のバリエーション、見え方、遮熱・飛散防止などの機能、価格が各社で異なります。
          <strong>
            フォグラスは柄・目隠し度の選択肢が豊富で、切売り対応で少量から試しやすい
          </strong>
          のが強みです。見た目・機能・予算で比較して選びましょう。下のブランド別一覧から見比べられます。
        </p>

        {/* ============ H2-12 まとめ + 最終CTA ============ */}
        <h2 className={cls.h2}>まとめ｜目的から選べば失敗しない</h2>
        <p className={cls.body}>
          フォグラス選びは、
          <strong>①どのくらい隠したいか（見え方：C-16→C-718→C-714）</strong>、
          <strong>②どこに貼るか（内貼り/外貼り＝Gタイプ・ガラスの種類）</strong>、
          <strong>③買い方（切売り/ロール・幅）</strong>
          の3点で決めれば失敗しません。遮熱・飛散防止まで欲しいなら「セーフティコントロール」、屋外や虫対策には外貼り可タイプを。まずは切売りで試し、気に入ったらロールで本施工——という進め方もおすすめです。各ブランドの一覧から、あなたの窓に最適な一枚を見つけてください。
        </p>
        <FinalCta />

        {/* ============ H2-13 FAQ ============ */}
        <h2 className={cls.h2}>よくある質問（FAQ）</h2>
        <div className="my-6 space-y-3">
          {FAQ.map((f, i) => (
            <details key={i} className="rounded-lg border border-gray-200 bg-white p-4">
              <summary className={`cursor-pointer ${cls.faqQ}`}>{f.q}</summary>
              <p className={`mt-2 ${cls.bodySm}`}>{f.a}</p>
            </details>
          ))}
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      </main>
      <SiteFooter />
    </>
  );
}
