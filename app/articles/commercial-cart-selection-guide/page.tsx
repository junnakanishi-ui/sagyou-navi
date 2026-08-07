import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";

// ============================================================================
// 作業用品ナビ 記事コンポーネント
// 狙いキーワード: 運搬台車 業務用 選び方
// ハウスルール: max-w-4xl / gray-900 / utm_source=sagyou_navi / 自己完結(共有libなし)
// 送客先(自社): Yahoo!店 サインシティ(signcity-yshop)
// ----------------------------------------------------------------------------
// 【画像について】
//  ・商品サムネ … 保存済み {商品コード}.jpg を /products/ に配置。
//  ・アイキャッチ/イメージ画像 … /images/carts/eyecatch.webp・casters.webp
// ============================================================================

const SLUG = "commercial-cart-selection-guide";
const SITE_URL = "https://www.sagyou-navi.com";

export const metadata: Metadata = {
  title:
    "運搬台車の業務用の選び方｜用途別のおすすめタイプと失敗しないポイント",
  description:
    "業務用の運搬台車の選び方を用途別に解説。営業車への積み込みが多いなら折りたたみ、板ものなら平台車、静かに運ぶなら樹脂の静音タイプなど、運ぶ物・現場に合わせた最適な選び方と、耐荷重・キャスター・材質のチェックポイントを網羅しました。",
  alternates: { canonical: `${SITE_URL}/articles/${SLUG}` },
  openGraph: {
    title:
      "運搬台車の業務用の選び方｜用途別のおすすめタイプと失敗しないポイント",
    description:
      "業務用の運搬台車の選び方を用途別に解説。折りたたみ・平台車・樹脂静音・鋼鉄製・リフターまで、運ぶ物・現場に合わせた失敗しないポイントを網羅。",
    type: "article",
    images: ["/images/carts/eyecatch.webp"],
  },
};

const UTM = "utm_source=sagyou_navi";
const IMG_BASE = "/images/carts/";
const PRODUCT_IMG = "/products/";

function withUtm(url: string): string {
  const sep = url.includes("?") ? "&" : "?";
  return url + sep + UTM;
}
function imgUrl(code: string): string {
  return PRODUCT_IMG + code + ".jpg";
}

type Cat = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I";
type Product = { code: string; name: string; url: string; cat: Cat; tag: string };

const PRODUCTS: Product[] = [
  { code: "167468", name: "台車 カルティオ 新型 ブラック MPK-780-BK", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/167468.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=", cat: "B", tag: "樹脂・静音" },
  { code: "190475", name: "台車 カルティオ 新型 ブラック スチールストッパー付 MPK780BKSS", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/190475.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=", cat: "G", tag: "ストッパー付" },
  { code: "159749", name: "カルティオビッグ 固定ハンドルタイプ ブラック MPK-900-BK", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/159749.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=", cat: "B", tag: "樹脂・静音" },
  { code: "160037", name: "プレス製運搬車 ハイグレード運搬車 折りたたみハンドル 301EBNU", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/160037.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=", cat: "A", tag: "折りたたみ" },
  { code: "159936", name: "プレス製運搬車 ドンキカート 折畳ハンドル 101NJ", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/159936.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=", cat: "A", tag: "折りたたみ" },
  { code: "228333", name: "こまわり君（新型） 600X390 アーセナルグレー MPK-6039-DG", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/228333.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=", cat: "B", tag: "樹脂・静音" },
  { code: "159715", name: "小型 カルティオミニweego 伸縮折りたたみハンドル ピンク WP-2G-P", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/159715.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=", cat: "A", tag: "折りたたみ" },
  { code: "159755", name: "カルティオビッグ 折りたたみ回転ハンドル ブラック MPK-906F2-BK", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/159755.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=", cat: "A", tag: "折りたたみ" },
  { code: "159719", name: "小型 カルティオミニweego 伸縮折りたたみハンドル ブルー WP-2G-B-JS", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/159719.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=", cat: "A", tag: "折りたたみ" },
  { code: "159718", name: "小型 カルティオミニweego 伸縮折畳みハンドル ブラック WP-2G-BK-JS", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/159718.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=", cat: "A", tag: "折りたたみ" },
  { code: "159790", name: "折りたたみ MKP樹脂製運搬車 折りたたみハンドル ブラック MKP-151U", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/159790.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=", cat: "A", tag: "折りたたみ" },
  { code: "159789", name: "折りたたみ MKP樹脂製運搬車 折りたたみハンドル ブルー MKP-301AC-B", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/159789.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=", cat: "A", tag: "折りたたみ" },
  { code: "159784", name: "折りたたみ MKP樹脂製運搬車 折りたたみハンドル ブラック MKP-301", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/159784.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=", cat: "A", tag: "折りたたみ" },
  { code: "159799", name: "MKP樹脂製運搬車 片袖2段タイプ ブルー MKP-154P-B", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/159799.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=", cat: "C", tag: "棚付き/金網" },
  { code: "159796", name: "MKP樹脂製運搬車 片袖3段タイプ ブラック MKP-308", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/159796.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=", cat: "C", tag: "棚付き/金網" },
  { code: "159802", name: "MKP樹脂製運搬車 金網付両袖タイプ ブラック MKP-157", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/159802.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=", cat: "C", tag: "棚付き/金網" },
  { code: "159803", name: "MKP樹脂製運搬車 金網付両袖タイプ ブルー MKP-157-B", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/159803.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=", cat: "C", tag: "棚付き/金網" },
  { code: "159842", name: "ストッパー付き グランカート 4輪リング式ストッパー付 TP-704JKRS-4", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/159842.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=", cat: "G", tag: "ストッパー付" },
  { code: "159824", name: "折りたたみ グランカート 折りたたみハンドル TP-701U", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/159824.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=", cat: "A", tag: "折りたたみ" },
  { code: "159932", name: "樹脂台車 アクロキャリー 折畳収納BOX付 ピンク AC-1-P-THB", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/159932.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=", cat: "A", tag: "折りたたみ" },
  { code: "159931", name: "樹脂台車 アクロキャリー 折畳収納BOX付 ブラック AC-1-BK-THB", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/159931.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=", cat: "A", tag: "折りたたみ" },
  { code: "159945", name: "プレス製運搬車 ドンキカート 折畳ハンドル 301NKB", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/159945.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=", cat: "A", tag: "折りたたみ" },
  { code: "159946", name: "プレス製運搬車 ドンキカート 折畳ハンドル 101NJKHB4S", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/159946.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=", cat: "A", tag: "折りたたみ" },
  { code: "160039", name: "プレス製運搬車 ハイグレード運搬車 固定ハンドルストッパー付 316SEBN", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/160039.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=", cat: "G", tag: "ストッパー付" },
  { code: "160041", name: "プレス製運搬車 ハイグレード省音運搬車 折りたたみハンドル T101SGY", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/160041.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=", cat: "A", tag: "折りたたみ" },
  { code: "160117", name: "鋼鉄製運搬車 固定ハンドルタイプ OH-3", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/160117.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=", cat: "F", tag: "鋼鉄製" },
  { code: "160118", name: "鋼鉄製運搬車 固定ハンドルタイプ OH-2", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/160118.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=", cat: "F", tag: "鋼鉄製" },
  { code: "160109", name: "樹脂製運搬車 グランカート サイレント サイドハンドルタイプ TPX-710", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/160109.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=", cat: "B", tag: "樹脂・静音" },
  { code: "160110", name: "樹脂製運搬車 グランカート サイレント サイドハンドルタイプ TPX-810", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/160110.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=", cat: "B", tag: "樹脂・静音" },
  { code: "160128", name: "鋼鉄製運搬車 固定ハンドルタイプ OH-1LR", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/160128.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=", cat: "F", tag: "鋼鉄製" },
  { code: "160127", name: "鋼鉄製運搬車 固定ハンドルタイプ OH-1R", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/160127.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=", cat: "F", tag: "鋼鉄製" },
  { code: "160129", name: "鋼鉄製運搬車 固定ハンドルタイプ OH-23P", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/160129.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=", cat: "F", tag: "鋼鉄製" },
  { code: "213545", name: "伸縮式コンテナ台車 内寸400-500X600-700 スチール製 FCD-4060", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/213545.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=", cat: "D", tag: "コンテナ" },
  { code: "213533", name: "伸縮式コンテナ台車 内寸300-400X500-600 ストッパー付 FCD-3050-S", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/213533.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=", cat: "D", tag: "コンテナ" },
  { code: "160271", name: "折りたたみ 折りたたみコンテナ用ドーリー OCドーリー OCD-50AN-B", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/160271.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=", cat: "D", tag: "コンテナ" },
  { code: "160640", name: "運搬車用取り替えキャスター 自在 125JC", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/160640.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=", cat: "H", tag: "キャスター" },
  { code: "160191", name: "運搬車用取り替えキャスター 自在式 TAJ-100", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/160191.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=", cat: "H", tag: "キャスター" },
  { code: "160598", name: "ハイテナー用取り替えキャスター TYNWRJB-150LSP", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/160598.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=", cat: "H", tag: "キャスター" },
  { code: "160518", name: "平台車 樹脂製平台車 グランカート 4輪自在タイプ TP-715J", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/160518.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=", cat: "E", tag: "平台車" },
  { code: "160159", name: "ストッパー付き 平台車 鋼鉄製 ロックストッパー付 PHT-8045H-150SS", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/160159.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=", cat: "E", tag: "平台車" },
  { code: "160341", name: "平台車 樹脂製平台車 ルートバン オール自在タイプ グリーン MP-500J", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/160341.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=", cat: "E", tag: "平台車" },
  { code: "168790", name: "ハンドパレットトラック 1.5t用 L850×W520mm 軽量 THPT15-85-52S", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/168790.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=", cat: "I", tag: "重量/パレット" },
  { code: "168793", name: "ハンドパレットトラック 1t用 L850×W460mm THP-10-48N", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/168793.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=", cat: "I", tag: "重量/パレット" },
  { code: "168806", name: "ハンドパレットトラック 3t用 L1220×W680mm THP-30-612", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/168806.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=", cat: "I", tag: "重量/パレット" },
  { code: "168636", name: "コゾウリフター フォーク式 500kg H50〜1470mm BEA-H500-15-5H", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/168636.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=", cat: "I", tag: "重量/パレット" },
  { code: "168565", name: "ハンドリフター 手動 80kg 400×720 高揚程型 オレンジ HLFA-S80W", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/168565.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=", cat: "I", tag: "重量/パレット" },
  { code: "168558", name: "作業台リフター 手動 120kg 350×570 ハンドルレス オレンジ HLLA-S120", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/168558.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=", cat: "I", tag: "重量/パレット" },
  { code: "216490", name: "ドラム缶運搬車 300kg 600X328XH1550 HT-67N", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/216490.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=", cat: "I", tag: "重量/パレット" },
];
const byCat = (c: Cat) => PRODUCTS.filter((p) => p.cat === c);

const CTA = {
  main:      { label: "運搬台車の一覧を見る",           url: "https://store.shopping.yahoo.co.jp/signcity-yshop/b1bfc8c2c2.html" },
  fold:      { label: "折りたたみ台車の一覧を見る",     url: "https://store.shopping.yahoo.co.jp/signcity-yshop/c0dea4eaa4.html?view=grid&prom=1&sc_i=shopping-pc-web-category-storeitm-cat_nrw-slctc" },
  resin:     { label: "樹脂製台車の一覧を見る",         url: "https://store.shopping.yahoo.co.jp/signcity-yshop/bcf9bbe9c0.html?view=grid&prom=1&sc_i=shopping-pc-web-category-storeitm-cat_nrw-slctc" },
  mesh:      { label: "金網台車（カゴ）の一覧を見る",   url: "https://store.shopping.yahoo.co.jp/signcity-yshop/b6e2ccd6c2.html?view=grid&prom=1&sc_i=shopping-pc-web-category-storeitm-cat_nrw-slctc" },
  container: { label: "コンテナ台車の一覧を見る",       url: "https://store.shopping.yahoo.co.jp/signcity-yshop/25a53a5fa3b.html?view=grid&prom=1&sc_i=shopping-pc-web-category-storeitm-cat_nrw-slctc" },
  flat:      { label: "平台車の一覧を見る",             url: "https://store.shopping.yahoo.co.jp/signcity-yshop/cabfc2e6bc.html?view=grid&prom=1&sc_i=shopping-pc-web-category-storeitm-cat_nrw-slctc" },
  steel:     { label: "鋼鉄製台車の一覧を見る",         url: "https://store.shopping.yahoo.co.jp/signcity-yshop/b9ddc5b4c0.html?view=grid&prom=1&sc_i=shopping-pc-web-category-storeitm-cat_nrw-slctc" },
  stopper:   { label: "ストッパー付き台車の一覧を見る", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/a5b9a5c8a5.html?view=grid&prom=1&sc_i=shopping-pc-web-category-storeitm-cat_nrw-slctc" },
  caster:    { label: "キャスター・オプションの一覧を見る", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/3aa25e5a5da.html?view=grid&prom=1&sc_i=shopping-pc-web-category-storeitm-cat_nrw-slctc" },
  handpallet:{ label: "ハンドパレットの一覧を見る",     url: "https://store.shopping.yahoo.co.jp/signcity-yshop/search.html?aq=&oq=&storeid=signcity-yshop&strcid=c8c2c1f7b5&p=%E3%83%8F%E3%83%B3%E3%83%89%E3%83%91%E3%83%AC%E3%83%83%E3%83%88&sc_i=shopping-pc-web-category-storesg-h_srch-srchbtn-sgstfrom-category-storeitm-h_srch-srchbox" },
  handlifter:{ label: "ハンドリフターの一覧を見る",     url: "https://store.shopping.yahoo.co.jp/signcity-yshop/search.html?aq=&oq=&storeid=signcity-yshop&strcid=c8c2c1f7b5&p=%E3%83%8F%E3%83%B3%E3%83%89%E3%83%AA%E3%83%95%E3%82%BF%E3%83%BC&sc_i=shopping-pc-web-category-storesg-h_srch-srchbtn-sgstfrom-category-storeitm-h_srch-srchbox" },
  kozou:     { label: "コゾウリフターの一覧を見る",     url: "https://store.shopping.yahoo.co.jp/signcity-yshop/search.html?aq=&oq=&storeid=signcity-yshop&strcid=c8c2c1f7b5&p=%E3%82%B3%E3%82%BE%E3%82%A6%E3%83%AA%E3%83%95%E3%82%BF%E3%83%BC&sc_i=shopping-pc-web-category-storesg-h_srch-srchbtn-sgstfrom-category-storeitm-h_srch-srchbox" },
};

function ProductCard({ p }: { p: Product }) {
  return (
    <a href={withUtm(p.url)} target="_blank" rel="noopener noreferrer sponsored"
       className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition-all hover:border-gray-900 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-gray-900">
      <div className="relative aspect-square w-full overflow-hidden bg-gray-50">
        <img src={imgUrl(p.code)} alt={p.name} loading="lazy"
             className="h-full w-full object-contain p-2 transition-transform duration-200 group-hover:scale-105" />
        <span className="absolute left-1.5 top-1.5 rounded bg-gray-900/85 px-1.5 py-0.5 text-[10px] font-bold text-white">{p.tag}</span>
      </div>
      <div className="flex flex-1 flex-col p-3">
        <h4 className="line-clamp-3 text-[13px] font-bold leading-snug text-gray-900">{p.name}</h4>
        <span className="mt-3 inline-flex items-center justify-center gap-1 rounded-lg bg-gray-900 px-3 py-2.5 text-sm font-bold text-white transition-colors group-hover:bg-gray-700">
          価格・在庫を見る<span aria-hidden>→</span>
        </span>
      </div>
    </a>
  );
}
function CatGrid({ cat }: { cat: Cat }) {
  return (
    <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {byCat(cat).map((p) => (<ProductCard key={p.code} p={p} />))}
    </div>
  );
}
function PrimaryCta({ label, url }: { label: string; url: string }) {
  return (
    <a href={withUtm(url)} target="_blank" rel="noopener noreferrer sponsored"
       className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gray-900 px-6 py-4 text-base font-bold text-white shadow-sm transition-colors hover:bg-gray-700 sm:w-auto">
      {label}<span aria-hidden className="text-lg">→</span>
    </a>
  );
}
function SubCta({ label, url }: { label: string; url: string }) {
  return (
    <a href={withUtm(url)} target="_blank" rel="noopener noreferrer sponsored"
       className="inline-flex items-center justify-center gap-1 rounded-md border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 transition-colors hover:border-gray-900 hover:bg-gray-50">
      {label}<span aria-hidden>›</span>
    </a>
  );
}
function UseCase({ id, title, children, cat, cta }: { id: string; title: string; children: ReactNode; cat: Cat; cta: { label: string; url: string } }) {
  return (
    <div className="mt-8">
      <h3 id={id} className="scroll-mt-24 text-lg font-bold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-700 sm:text-base">{children}</p>
      <CatGrid cat={cat} />
      <div className="mt-4"><SubCta label={cta.label} url={cta.url} /></div>
    </div>
  );
}
function SectionH2({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2 id={id} className="mt-14 scroll-mt-24 border-l-4 border-gray-900 pl-3 text-xl font-bold text-gray-900 sm:text-2xl">{children}</h2>
  );
}

const FAQ = [
  { q: "運搬台車の耐荷重はどう選べばよいですか？", a: "運ぶ物の最大重量に対して余裕を持った耐荷重を選びます。常用重量の1.2〜1.5倍程度を目安にすると、段差の衝撃や偏った積載にも耐えやすく安全です。業務用は100kg・150kg・300kg・500kg〜と幅広いので、扱う荷物に合わせて選びましょう。" },
  { q: "樹脂製と鋼鉄製、どちらがいいですか？", a: "軽くて静かで錆びにくい樹脂製は、屋内・店舗・オフィス・食品や医療現場に向きます。強度・耐久を最優先する屋外作業や重量物には鋼鉄製が向きます。運ぶ物・使う場所・静音性の優先度で選び分けてください。" },
  { q: "静かに運びたい場合のポイントは？", a: "キャスターの材質が重要です。ウレタンや弾性樹脂のキャスター、静音設計(サイレント)の台車を選ぶと走行音を抑えられます。夜間作業やオフィス・病院など静音性が求められる現場では『サイレント』表記の樹脂台車が適しています。" },
  { q: "折りたたみ台車のメリットは？", a: "ハンドルを畳めるため、営業車やワゴンへの積み込み・降ろしが多い用途や、使わないときの収納に便利です。伸縮ハンドルや小型タイプなら、車載や狭い通路での取り回しも快適です。" },
  { q: "パレットや重量物を持ち上げて運ぶには？", a: "パレット荷物にはハンドパレットトラック、段差のある場所や持ち上げ作業にはハンドリフター・コゾウリフターが適します。ドラム缶専用の運搬車もあります。荷姿と重量、必要な揚程(持ち上げ高さ)で選びましょう。" },
  { q: "キャスターは後から交換できますか？", a: "多くの運搬車は取り替え用キャスターが用意されており、摩耗や用途変更に合わせて交換できます。自在・固定の組み合わせや、床材に合った材質・径を選ぶと走行性が向上します。" },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "記事一覧", item: `${SITE_URL}/articles` },
    {
      "@type": "ListItem",
      position: 3,
      name: "運搬台車の業務用の選び方",
      item: `${SITE_URL}/articles/${SLUG}`,
    },
  ],
};

export default function CartSelectionArticle() {
  return (
    <>
      <SiteHeader />
      <article className="mx-auto max-w-[850px] px-4 py-8 text-gray-900">
        <nav aria-label="パンくず" className="mb-4 text-xs text-gray-500">
          <Link href="/" className="hover:underline">
            作業用品ナビ
          </Link>
          {" ＞ "}
          <Link href="/articles" className="hover:underline">
            記事一覧
          </Link>
          {" ＞ "}
          <span>運搬台車の選び方</span>
        </nav>

        <header>
          <h1 className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl">
            運搬台車の業務用の選び方｜用途別のおすすめタイプと失敗しないポイント
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-gray-700">
            「業務用の運搬台車を買いたいけれど、種類が多くてどれを選べばいいか分からない」——そんな方へ。
            運搬台車は<strong className="font-bold">運ぶ物・使う場所・作業スタイル</strong>で最適なタイプが変わります。
            この記事では、<strong className="font-bold">用途別（ペルソナ別）の選び方</strong>を軸に、
            折りたたみ・平台車・コンテナ台車・鋼鉄製・リフターまで、失敗しない選び方を具体的に解説します。
          </p>
          <p className="mt-2 text-xs text-gray-400">最終更新：2026年8月</p>
        </header>

        <div className="mt-6 overflow-hidden rounded-xl border border-gray-200 bg-gray-100">
          <img src={IMG_BASE + "eyecatch.webp"} alt="業務用運搬台車の選び方（用途別）" className="aspect-[16/9] w-full object-cover" />
        </div>

        <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-4">
          <p className="text-sm font-semibold text-gray-900">まずは全ラインナップから探す</p>
          <div className="mt-3"><PrimaryCta label={CTA.main.label} url={CTA.main.url} /></div>
        </div>

        <nav className="mt-8 rounded-lg border border-gray-200 bg-white p-4">
          <p className="mb-2 text-sm font-bold text-gray-900">この記事でわかること</p>
          <ol className="list-decimal space-y-1 pl-5 text-sm text-gray-700">
            <li><a className="hover:underline" href="#types">運搬台車の主なタイプ（全体像）</a></li>
            <li><a className="hover:underline" href="#usecase">【用途・ペルソナ別】あなたに最適な台車の選び方</a></li>
            <li><a className="hover:underline" href="#lifter">重量物・パレットにはリフター系</a></li>
            <li><a className="hover:underline" href="#points">選び方の5つのチェックポイント</a></li>
            <li><a className="hover:underline" href="#faq">よくある質問（FAQ）</a></li>
          </ol>
        </nav>

        <SectionH2 id="types">運搬台車の主なタイプ（全体像）</SectionH2>
        <p className="mt-4 text-sm leading-relaxed text-gray-700 sm:text-base">
          業務用の運搬台車は、大きく次のタイプに分かれます。まずは全体像をつかみ、次章の用途別ガイドで自分に合うものを絞り込みましょう。
        </p>
        <div className="mt-6 overflow-x-auto rounded-lg border border-gray-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-900 text-white">
              <tr><th className="px-3 py-2 font-semibold">タイプ</th><th className="px-3 py-2 font-semibold">特徴</th><th className="px-3 py-2 font-semibold">向いている用途</th></tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white text-gray-700">
              <tr><td className="px-3 py-2 font-bold">折りたたみ台車</td><td className="px-3 py-2">ハンドルを畳めて収納・車載しやすい</td><td className="px-3 py-2">営業車で現場を回る／積み込みが多い</td></tr>
              <tr><td className="px-3 py-2 font-bold">樹脂・静音台車</td><td className="px-3 py-2">軽量・静か・錆びにくい</td><td className="px-3 py-2">店舗・オフィス・屋内・夜間</td></tr>
              <tr><td className="px-3 py-2 font-bold">棚付き・金網台車</td><td className="px-3 py-2">段・かごで小物や部品を仕分け</td><td className="px-3 py-2">部品搬送・ピッキング・落下防止</td></tr>
              <tr><td className="px-3 py-2 font-bold">コンテナ台車</td><td className="px-3 py-2">折コン・箱をのせて運ぶ土台</td><td className="px-3 py-2">箱物・折りたたみコンテナの運搬</td></tr>
              <tr><td className="px-3 py-2 font-bold">平台車</td><td className="px-3 py-2">低床・ハンドルなしで自在に押し引き</td><td className="px-3 py-2">板もの・長尺・大きな面のもの</td></tr>
              <tr><td className="px-3 py-2 font-bold">鋼鉄製台車</td><td className="px-3 py-2">高強度・高耐久</td><td className="px-3 py-2">屋外・重量物・ハードな現場</td></tr>
              <tr><td className="px-3 py-2 font-bold">リフター/パレット系</td><td className="px-3 py-2">持ち上げて運ぶ・段差対応</td><td className="px-3 py-2">パレット・重量物・段積み</td></tr>
            </tbody>
          </table>
        </div>
        <div className="mt-5"><PrimaryCta label={CTA.main.label} url={CTA.main.url} /></div>

        <SectionH2 id="usecase">【用途・ペルソナ別】あなたに最適な台車の選び方</SectionH2>
        <p className="mt-4 text-sm leading-relaxed text-gray-700 sm:text-base">
          ここからは「こんな使い方ならこれ」という具体例で選び方を紹介します。あてはまるシーンから読んでみてください。
        </p>

        <UseCase id="uc-fold" title="① 営業車への積み込みが多い・収納したい → 折りたたみ台車" cat="A" cta={CTA.fold}>
          現場を車で回る職人さんや、使わないときはコンパクトに片付けたい方には、ハンドルを畳める折りたたみ台車が最適です。
          伸縮ハンドルや小型タイプなら車載も省スペースで、狭い通路の取り回しも快適。積み降ろしの多い業務ほど効いてきます。
        </UseCase>

        <UseCase id="uc-resin" title="② 店舗・オフィス・屋内で静かに運びたい → 樹脂・静音台車" cat="B" cta={CTA.resin}>
          軽くて静かで錆びにくい樹脂製は、屋内・バックヤード・オフィス移動や、夜間・早朝の作業に向きます。
          走行音を抑えたい現場では「サイレント」設計のタイプを選ぶと、周囲に配慮しながらスムーズに運べます。
        </UseCase>

        <UseCase id="uc-shelf" title="③ 部品・小物を仕分けて運ぶ → 棚付き・金網台車" cat="C" cta={CTA.mesh}>
          袖（棚）付きや金網付きのタイプは、部品や小物を段ごとに整理でき、金網が荷崩れ・落下を防ぎます。
          ピッキングや工程間の部品搬送など、複数の物をまとめて安全に運びたい場面で活躍します。
        </UseCase>

        <UseCase id="uc-container" title="④ 箱・折りたたみコンテナを運ぶ → コンテナ台車" cat="D" cta={CTA.container}>
          折りコンや箱物の運搬には、サイズに合わせられる伸縮式コンテナ台車やドーリーが便利です。
          コンテナを載せてそのまま押せるので、倉庫・バックヤードの箱物移動を効率化できます。
        </UseCase>

        <UseCase id="uc-flat" title="⑤ 板もの・長尺・大きな面のものを運ぶ → 平台車" cat="E" cta={CTA.flat}>
          合板・パネル・建材などの板ものや長尺物には、低床でハンドルのない平台車が向きます。
          4輪自在タイプなら方向転換も自在で、大きくかさばる荷物を安定して押し引きできます。
        </UseCase>

        <UseCase id="uc-steel" title="⑥ 屋外・重量物・ハードな現場 → 鋼鉄製台車" cat="F" cta={CTA.steel}>
          強度と耐久を最優先するなら鋼鉄製。屋外作業や重量物の運搬、酷使される現場でも安心して使えます。
          固定ハンドルタイプはシンプルで頑丈。長く使い込む定番として選ばれています。
        </UseCase>

        <UseCase id="uc-stopper" title="⑦ 坂・傾斜のある場所で止めたい → ストッパー付き台車" cat="G" cta={CTA.stopper}>
          スロープや傾斜のある駐車場・搬入路では、意図せぬ動き出しを防ぐストッパー付きが安全です。
          リング式やロック式など、片手で操作しやすい機構を選ぶと、積み降ろし時の安心感が高まります。
        </UseCase>

        <SectionH2 id="lifter">重量物・パレットには「持ち上げて運ぶ」リフター系</SectionH2>
        <p className="mt-4 text-sm leading-relaxed text-gray-700 sm:text-base">
          パレット単位の荷物や重量物、段差のある場所での持ち上げ作業には、台車より一段上のリフター系が適します。
          荷姿・重量・必要な揚程（持ち上げ高さ）に合わせて選びましょう。
        </p>
        <CatGrid cat="I" />
        <div className="mt-5 flex flex-wrap gap-2">
          <SubCta label={CTA.handpallet.label} url={CTA.handpallet.url} />
          <SubCta label={CTA.handlifter.label} url={CTA.handlifter.url} />
          <SubCta label={CTA.kozou.label} url={CTA.kozou.url} />
        </div>

        <SectionH2 id="points">選び方の5つのチェックポイント</SectionH2>
        <p className="mt-4 text-sm leading-relaxed text-gray-700 sm:text-base">
          用途のイメージが固まったら、次の5点で具体的な機種を絞り込みます。ここを外すと「重い物が載らない」「うるさい」「段差で使えない」といった失敗につながります。
        </p>

        <div className="mt-6 overflow-hidden rounded-xl border border-gray-200 bg-gray-100">
          <img src={IMG_BASE + "casters.webp"} alt="台車のキャスターの種類（自在・固定・材質・径）" className="aspect-[16/9] w-full object-cover" />
        </div>

        <div className="mt-6 space-y-3">
          <div className="rounded-lg border border-gray-200 bg-white p-4"><p className="text-sm font-bold text-gray-900">1. 耐荷重</p><p className="mt-1 text-sm leading-relaxed text-gray-700">運ぶ物の最大重量に対し、余裕（目安1.2〜1.5倍）を持って選ぶ。段差の衝撃や偏り積載にも安心。</p></div>
          <div className="rounded-lg border border-gray-200 bg-white p-4"><p className="text-sm font-bold text-gray-900">2. 材質（樹脂／鋼鉄）</p><p className="mt-1 text-sm leading-relaxed text-gray-700">屋内・静音・軽量なら樹脂、屋外・重量・耐久なら鋼鉄。食品・医療は錆びにくい樹脂が無難。</p></div>
          <div className="rounded-lg border border-gray-200 bg-white p-4"><p className="text-sm font-bold text-gray-900">3. キャスター（材質・径・自在/固定・静音）</p><p className="mt-1 text-sm leading-relaxed text-gray-700">ウレタン等は静かで床を傷つけにくい。径が大きいほど段差に強い。自在＋固定の組合せで直進安定。摩耗時は交換も可能。</p></div>
          <div className="rounded-lg border border-gray-200 bg-white p-4"><p className="text-sm font-bold text-gray-900">4. ハンドル形状（固定／折りたたみ／なし）</p><p className="mt-1 text-sm leading-relaxed text-gray-700">積み込み・収納が多いなら折りたたみ、板ものはハンドルなしの平台車が使いやすい。</p></div>
          <div className="rounded-lg border border-gray-200 bg-white p-4"><p className="text-sm font-bold text-gray-900">5. サイズ・安全機構</p><p className="mt-1 text-sm leading-relaxed text-gray-700">荷台サイズは荷物＋通路幅で確認。坂や搬入路ではストッパー付きが安全。</p></div>
        </div>

        <p className="mt-6 text-sm leading-relaxed text-gray-700 sm:text-base">
          キャスターは走行性・静音性・段差対応を左右する重要パーツ。用途変更や摩耗に合わせて交換できるタイプも多く、あわせて揃えておくと安心です。
        </p>
        <CatGrid cat="H" />
        <div className="mt-4"><SubCta label={CTA.caster.label} url={CTA.caster.url} /></div>

        <SectionH2 id="faq">よくある質問（FAQ）</SectionH2>
        <div className="mt-4 space-y-3">
          {FAQ.map((f, i) => (
            <details key={i} className="group rounded-lg border border-gray-200 bg-white p-4">
              <summary className="cursor-pointer list-none text-sm font-bold text-gray-900 marker:hidden"><span className="mr-2 text-gray-500">Q.</span>{f.q}</summary>
              <p className="mt-2 text-sm leading-relaxed text-gray-700"><span className="mr-2 font-bold text-gray-500">A.</span>{f.a}</p>
            </details>
          ))}
        </div>

        <SectionH2 id="summary">まとめ</SectionH2>
        <p className="mt-4 text-sm leading-relaxed text-gray-700 sm:text-base">
          業務用の運搬台車は、<strong className="font-bold">「運ぶ物」と「使う場所」から用途を決め、耐荷重・材質・キャスター・ハンドルで絞り込む</strong>のが失敗しないコツです。
          積み込みが多いなら折りたたみ、板ものなら平台車、静かに運ぶなら樹脂の静音、重量物ならリフター系——用途に合った1台が、毎日の作業を確実にラクにします。
          気になるタイプから、まずは一覧でチェックしてみてください。
        </p>
        <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-5">
          <p className="text-base font-bold text-gray-900">用途に合う運搬台車を探す</p>
          <div className="mt-4"><PrimaryCta label={CTA.main.label} url={CTA.main.url} /></div>
          <div className="mt-4 flex flex-wrap gap-2">
            <SubCta label={CTA.fold.label} url={CTA.fold.url} />
            <SubCta label={CTA.flat.label} url={CTA.flat.url} />
            <SubCta label={CTA.container.label} url={CTA.container.url} />
            <SubCta label={CTA.steel.label} url={CTA.steel.url} />
            <SubCta label={CTA.resin.label} url={CTA.resin.url} />
            <SubCta label={CTA.caster.label} url={CTA.caster.url} />
          </div>
        </div>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      </article>
      <SiteFooter />
    </>
  );
}
