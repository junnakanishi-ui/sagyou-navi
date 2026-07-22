import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://sagyou-navi.com"),
  title: "防爆工具の選び方｜材質・種類・用途とHAMACO製品を現場別に比較",
  description:
    "防爆工具を材質、使用場所、作業内容から選ぶ方法を解説。スパナ、メガネレンチ、モンキー、パイプレンチ、ハンマー、タガネ、ショベルなどを比較し、誤使用を防ぐ点検・管理までまとめます。",
  alternates: {
    canonical: "https://sagyou-navi.com/articles/explosion-proof-tools-selection",
  },
  openGraph: {
    type: "article",
    title: "防爆工具の選び方｜材質・種類・用途とHAMACO製品を現場別に比較",
    description:
      "火花を抑える工具を、危険物・作業内容・サイズ・材質から選ぶ法人向けガイド。",
    url: "https://sagyou-navi.com/articles/explosion-proof-tools-selection",
    images: ["/images/explosion-proof-tools-selection/explosion-proof-tools-selection-hero.jpg"],
  },
};

const UTM = "utm_source=sagyou_navi";
function buildUrl(url: string, utm: string): string {
  if (!url) return url;
  const hashIndex = url.indexOf("#");
  const append = (base: string) =>
    `${base}${base.includes("?") ? "&" : "?"}${utm}`;
  if (hashIndex === -1) return append(url);
  return `${append(url.slice(0, hashIndex))}${url.slice(hashIndex)}`;
}
const R = (slug: string) =>
  buildUrl(`https://item.rakuten.co.jp/crecote-shop/${slug}`, UTM);
const IMG = (file: string) => `/products/${file}`;
const HERO = (file: string) =>
  `/images/explosion-proof-tools-selection/${file}`;

const PAGE_URL =
  "https://sagyou-navi.com/articles/explosion-proof-tools-selection";
const HOME_URL = "https://sagyou-navi.com/";

type Product = {
  id: string;
  code: string;
  short: string;
  name: string;
  image: string;
  url: string;
  group: string;
  spec: string;
  use: string;
  solves: string;
  check: string;
  cta: string;
};

const products: Product[] = [
  {
    id: "amcbst",
    code: "AMCBST",
    short: "AMPCO 防爆工具37点セット",
    name: "Ampco アンプコ防爆工具セット AMCBST",
    image: "ta041048-amcbst.jpg",
    url: R("ta041048-amcbst/"),
    group: "セット・常備工具",
    spec: "標準的なメンテナンス用37点セット",
    use: "危険場所で使う基本工具を一括で配備したい工場・プラント",
    solves: "工具の抜け漏れを減らし、専用工具箱として管理しやすい",
    check: "後継品の有無、セット内容、各工具の材質・サイズ、ケース寸法、単品補充の可否を購入前に確認。",
    cta: "37点セットの内容を確認する"
  },
  {
    id: "cbhx9s",
    code: "CBHX9S",
    short: "HAMACO 六角棒レンチセット",
    name: "HAMACO 防爆工具 六角棒レンチセット CBHX9S",
    image: "ta035212-cbhx9s.jpg",
    url: R("ta035212-cbhx9s/"),
    group: "六角穴付きボルト",
    spec: "六角棒レンチのセット品",
    use: "六角穴付きボルトの締結・取り外しを複数サイズで行う現場",
    solves: "必要サイズをセットで揃え、持ち出し漏れを減らす",
    check: "セット内の二面幅、ホルダー・ケース、使用する六角穴サイズとの適合を確認。",
    cta: "六角棒レンチセットを見る"
  },
  {
    id: "cbpk40b",
    code: "CBPK40B",
    short: "HAMACO パテナイフ B",
    name: "HAMACO 防爆工具 パテナイフ B CBPK40B",
    image: "ta035330-cbpk40b.jpg",
    url: R("ta035330-cbpk40b/"),
    group: "剥離・清掃",
    spec: "パテナイフ Bタイプ",
    use: "塗装ブースやタンク周辺で付着物・残渣を剥がす作業",
    solves: "鋼製スクレーパーによる機械火花のリスクを抑えたい",
    check: "刃幅・刃厚・全長、対象物への傷、付着物の化学的危険性、交換基準を確認。",
    cta: "パテナイフBの仕様を見る"
  },
  {
    id: "cbks17",
    code: "CBKS17",
    short: "HAMACO 片口スパナ 17mm",
    name: "HAMACO 防爆工具 片口スパナ 二面幅17mm 全長160mm CBKS17",
    image: "ta035262-cbks17.jpg",
    url: R("ta035262-cbks17/"),
    group: "ボルト・ナット",
    spec: "二面幅17mm・全長160mm",
    use: "17mmのボルト・ナットを狭い場所で回す作業",
    solves: "対象サイズ専用のスパナでナット角を傷めにくくする",
    check: "ボルト・ナットの二面幅、必要トルク、作業スペースを確認。延長管を使わない。",
    cta: "17mm片口スパナを見る"
  },
  {
    id: "cbmm1214",
    code: "CBMM1214",
    short: "HAMACO 両口メガネレンチ 12×14mm",
    name: "HAMACO 防爆工具 両口メガネレンチ（60度）12×14mm CBMM1214",
    image: "ta035289-cbmm1214.jpg",
    url: R("ta035289-cbmm1214/"),
    group: "ボルト・ナット",
    spec: "二面幅12×14mm・口部60度",
    use: "障害物がある場所で12mm・14mmの締結部を回す作業",
    solves: "メガネ部でボルト・ナットを保持しやすくしたい",
    check: "60度オフセットが周辺設備へ干渉しないか、二面幅と必要トルクを確認。",
    cta: "12×14mm両口メガネを見る"
  },
  {
    id: "cbsh150",
    code: "CBSH150",
    short: "HAMACO スケーリングハンマー",
    name: "HAMACO 防爆工具 スケーリングハンマー CBSH150",
    image: "ta035360-cbsh150.jpg",
    url: R("ta035360-cbsh150/"),
    group: "打撃・はつり",
    spec: "スケーリング作業用",
    use: "錆・スケール・付着物を打撃で除去する作業",
    solves: "鋼製ハンマーによる機械火花のリスクを抑えながら剥離したい",
    check: "打撃対象、周囲のガス・粉じん、飛散防止、保護眼鏡、頭部の変形・バリを確認。",
    cta: "スケーリングハンマーを見る"
  },
  {
    id: "cbss1921",
    code: "CBSS1921",
    short: "HAMACO 両口スパナ 19×21mm",
    name: "HAMACO 防爆工具 両口スパナ 19×21mm 全長182mm CBSS1921",
    image: "ta035367-cbss1921.jpg",
    url: R("ta035367-cbss1921/"),
    group: "ボルト・ナット",
    spec: "二面幅19×21mm・全長182mm",
    use: "19mm・21mmの締結部を1本で整備する作業",
    solves: "使用頻度の高い2サイズをまとめて携行したい",
    check: "二面幅、必要トルク、口部の摩耗・開き、作業スペースを確認。",
    cta: "19×21mm両口スパナを見る"
  },
  {
    id: "cbdr30",
    code: "CBDR30",
    short: "HAMACO 打撃メガネレンチ 30mm",
    name: "HAMACO 防爆工具 打撃メガネレンチ 30mm CBDR30",
    image: "ta035187-cbdr30.jpg",
    url: R("ta035187-cbdr30/"),
    group: "ボルト・ナット",
    spec: "二面幅30mm・打撃用",
    use: "固着した30mmのナットを打撃して緩める作業",
    solves: "通常のレンチでは動かない固着締結部へ打撃力を加える",
    check: "必ず適合する防爆ハンマーと組み合わせ、打撃面・メガネ部の変形、飛散範囲を確認。",
    cta: "30mm打撃メガネを見る"
  },
  {
    id: "cbkp17",
    code: "CBKP17",
    short: "HAMACO シノ付片口メガネ 17mm",
    name: "HAMACO 防爆工具 シノ付片口メガネレンチ 17mm CBKP17",
    image: "ta035234-cbkp17.jpg",
    url: R("ta035234-cbkp17/"),
    group: "ボルト・ナット",
    spec: "二面幅17mm・シノ付き",
    use: "ボルト穴合わせと17mm締結を1本で行う組立・配管架台作業",
    solves: "工具の持ち替えを減らしたい",
    check: "シノをこじり棒のように過大使用しない。穴径、二面幅、周辺設備との干渉を確認。",
    cta: "17mmシノ付メガネを見る"
  },
  {
    id: "cbcn160",
    code: "CBCN160",
    short: "HAMACO 斜めニッパー",
    name: "HAMACO 防爆工具 斜めニッパー CBCN160",
    image: "ta035180-cbcn160.jpg",
    url: R("ta035180-cbcn160/"),
    group: "切断",
    spec: "斜めニッパー",
    use: "危険場所で対応材を切断する補修・保全作業",
    solves: "鋼製切断工具の使用を避けたい",
    check: "切断可能な材質・径を必ず確認。電線用でも絶縁工具とは限らず、活線には使用しない。",
    cta: "斜めニッパーの切断能力を見る"
  },
  {
    id: "cbm450",
    code: "CBM450",
    short: "HAMACO モンキーレンチ",
    name: "HAMACO 防爆工具 モンキーレンチ CBM450",
    image: "ta035287-cbm450.jpg",
    url: R("ta035287-cbm450/"),
    group: "ボルト・ナット",
    spec: "大形モンキーレンチ",
    use: "複数サイズのボルト・ナットへ1本で対応したい保全作業",
    solves: "サイズが不明・複数の締結部へ対応する",
    check: "最大口開き、全長、重量、必要トルクを確認。遊びをなくし、可動あごの向きを守る。",
    cta: "モンキーレンチの口開きを確認する"
  },
  {
    id: "cbko19",
    code: "CBKO19",
    short: "HAMACO 片口メガネ 19mm",
    name: "HAMACO 防爆工具 片口メガネレンチ（60度）19mm CBKO19",
    image: "ta035220-cbko19.jpg",
    url: R("ta035220-cbko19/"),
    group: "ボルト・ナット",
    spec: "二面幅19mm・口部60度",
    use: "障害物がある場所で19mm締結部を確実に保持したい作業",
    solves: "スパナより外れにくいメガネ部を使いたい",
    check: "ボルト頭へ最後まで差し込み、60度オフセットの干渉、必要トルクを確認。",
    cta: "19mm片口メガネを見る"
  },
  {
    id: "cbtg18",
    code: "CBTG18",
    short: "HAMACO タガネ",
    name: "HAMACO 防爆工具 タガネ CBTG18",
    image: "ta035383-cbtg18.jpg",
    url: R("ta035383-cbtg18/"),
    group: "打撃・はつり",
    spec: "タガネ",
    use: "付着物・固着部を打撃で剥離する作業",
    solves: "狭い箇所へ打撃力を集中させたい",
    check: "刃先幅・全長・打撃端、対象材、飛散防止を確認。防爆ハンマーを使用し、手持ち部を確保。",
    cta: "タガネの寸法を見る"
  },
  {
    id: "cbs150f",
    code: "CBS150F",
    short: "HAMACO フラットショベル 150mm",
    name: "HAMACO 防爆工具 フラットショベル 刃先幅150mm CBS150F",
    image: "ta035354-cbs150f.jpg",
    url: R("ta035354-cbs150f/"),
    group: "掘削・回収",
    spec: "刃先幅150mm・フラット型",
    use: "粉体・残渣・堆積物をすくい取る狭所清掃",
    solves: "床面へ沿わせて残渣を回収したい",
    check: "対象物のSDS、粉じん爆発性、刃先幅、柄長、帯電・接地ルール、廃棄方法を確認。",
    cta: "150mmフラットショベルを見る"
  },
  {
    id: "cbpw250",
    code: "CBPW-250",
    short: "HAMACO パイプレンチ 250",
    name: "HAMACO 防爆工具 パイプレンチ CBPW-250",
    image: "ta005904-cbpw250.jpg",
    url: R("ta005904-cbpw250/"),
    group: "配管・バルブ",
    spec: "250クラス",
    use: "比較的小径の丸管・継手をつかむ配管保全",
    solves: "丸い配管を確実につかんで回したい",
    check: "くわえられる管径、全長、歯部の摩耗、対象配管の傷許容、必要トルクを確認。",
    cta: "250クラスのパイプレンチを見る"
  },
  {
    id: "cbcp200",
    code: "CBCP200",
    short: "HAMACO プライヤー",
    name: "HAMACO 防爆工具 プライヤー CBCP200",
    image: "ta035182-cbcp200.jpg",
    url: R("ta035182-cbcp200/"),
    group: "つかむ・曲げる",
    spec: "200クラス",
    use: "部品の保持・曲げ・引き抜きなど汎用作業",
    solves: "危険場所の軽作業へ汎用把持工具を配備する",
    check: "全長、つかみ幅、切断機能の有無、対象材、支点のがたつきを確認。",
    cta: "プライヤーの仕様を見る"
  },
  {
    id: "cbbh300",
    code: "CBBH300",
    short: "HAMACO 角型バルブハンドル",
    name: "HAMACO 防爆工具 バルブハンドル（角） CBBH300",
    image: "ta035175-cbbh300.jpg",
    url: R("ta035175-cbbh300/"),
    group: "配管・バルブ",
    spec: "角型・300クラス",
    use: "バルブ開閉を補助するプラント・配管設備の保全",
    solves: "固いハンドルを手だけで回す負担を減らす",
    check: "適合するハンドル寸法・形状、許容トルク、バルブ状態、急開閉禁止、流体の危険性を確認。",
    cta: "角型バルブハンドルを見る"
  },
  {
    id: "cbkh05",
    code: "CBKH05",
    short: "HAMACO 片手ハンマー",
    name: "HAMACO 防爆工具 片手ハンマー CBKH05",
    image: "ta035213-cbkh05.jpg",
    url: R("ta035213-cbkh05/"),
    group: "打撃・はつり",
    spec: "片手ハンマー",
    use: "タガネ・打撃レンチ・組立部品へ打撃する作業",
    solves: "危険場所で使う基本の打撃工具を配備する",
    check: "頭部重量・全長、柄の緩み、打撃面の変形、組み合わせる工具の打撃可否を確認。",
    cta: "片手ハンマーの仕様を見る"
  },
  {
    id: "cbwp250",
    code: "CBWP250",
    short: "HAMACO ウォーターポンププライヤー 250",
    name: "HAMACO 防爆工具 ウォーターポンププライヤー CBWP250",
    image: "ta035396-cbwp250.jpg",
    url: R("ta035396-cbwp250/"),
    group: "配管・バルブ",
    spec: "250クラス",
    use: "配管継手・ナット・不定形部品をつかむ保全作業",
    solves: "口開きを段階調整して複数サイズへ対応する",
    check: "最大口開き、溝数、対象物の傷、支点のがたつき、手の挟まれを確認。",
    cta: "250クラスのポンププライヤーを見る"
  },
  {
    id: "cbwp360",
    code: "CBWP-360",
    short: "HAMACO ウォーターポンププライヤー 360",
    name: "HAMACO 防爆工具 ウォーターポンププライヤー CBWP-360",
    image: "ta005917-cbwp360.jpg",
    url: R("ta005917-cbwp360/"),
    group: "配管・バルブ",
    spec: "360クラス",
    use: "250クラスより大きい対象をつかむ配管保全",
    solves: "大きめの口開きと長い柄が必要",
    check: "最大口開き、全長、重量、必要トルク、対象物の傷、片手操作の可否を確認。",
    cta: "360クラスのポンププライヤーを見る"
  },
  {
    id: "cbpk50",
    code: "CBPK50",
    short: "HAMACO パテナイフ",
    name: "HAMACO 防爆工具 パテナイフ CBPK50",
    image: "ta035331-cbpk50.jpg",
    url: R("ta035331-cbpk50/"),
    group: "剥離・清掃",
    spec: "パテナイフ",
    use: "塗料・パテ・ガスケット残渣などを剥がす清掃作業",
    solves: "鋼製スクレーパーを避けて付着物を除去したい",
    check: "刃幅・刃厚、対象面の傷、付着物の有害性、廃棄・清掃方法を確認。",
    cta: "パテナイフの刃幅を見る"
  },
  {
    id: "cbpw600",
    code: "CBPW600",
    short: "HAMACO パイプレンチ 600",
    name: "HAMACO 防爆工具 パイプレンチ CBPW600",
    image: "ta035341-cbpw600.jpg",
    url: R("ta035341-cbpw600/"),
    group: "配管・バルブ",
    spec: "600クラス",
    use: "大径配管・大きな継手を扱う設備保全",
    solves: "長い柄と大きな口開きが必要",
    check: "管径、全長、重量、作業姿勢、反力、対象配管の肉厚・傷許容、二人作業の要否を確認。",
    cta: "600クラスのパイプレンチを見る"
  },
  {
    id: "cbs240r",
    code: "CBS240R",
    short: "HAMACO 丸型ショベル 240mm",
    name: "HAMACO 防爆工具 ショベル 丸型 CBS240R",
    image: "ta035357-cbs240r.jpg",
    url: R("ta035357-cbs240r/"),
    group: "掘削・回収",
    spec: "丸型・240クラス",
    use: "粉体・原料・残渣の回収や掘り起こし",
    solves: "まとまった量をすくう防爆用ショベルが必要",
    check: "刃先寸法、柄長、対象粉体の爆発特性、静電気対策、投入先・廃棄先を確認。",
    cta: "丸型ショベルを見る"
  },
  {
    id: "cbhx4",
    code: "CBHX4",
    short: "HAMACO 六角棒レンチ 4mm",
    name: "HAMACO 防爆工具 六角棒レンチ 二面幅4mm CBHX4",
    image: "ta035208-cbhx4.jpg",
    url: R("ta035208-cbhx4/"),
    group: "六角穴付きボルト",
    spec: "二面幅4mm",
    use: "4mm六角穴付きボルトを締結・取り外しする作業",
    solves: "必要な単品サイズだけを補充したい",
    check: "二面幅4mmであること、ボルト穴の摩耗、必要トルク、差し込み深さを確認。",
    cta: "4mm六角棒レンチを見る"
  }
];
const byId = Object.fromEntries(products.map((product) => [product.id, product]));

const categoryLinks = [
  {title: "防爆工具一覧へ", url: buildUrl("https://search.rakuten.co.jp/search/mall/%E9%98%B2%E7%88%86%E5%B7%A5%E5%85%B7/?sid=426972", UTM), note: "全カテゴリ"},
  {title: "防爆工具・モンキーレンチ一覧へ", url: buildUrl("https://search.rakuten.co.jp/search/mall/%E9%98%B2%E7%88%86%E5%B7%A5%E5%85%B7+%E3%83%A2%E3%83%B3%E3%82%AD%E3%83%BC/?sid=426972", UTM), note: "複数サイズの締結"},
  {title: "防爆工具・スパナ一覧へ", url: buildUrl("https://search.rakuten.co.jp/search/mall/%E9%98%B2%E7%88%86%E5%B7%A5%E5%85%B7+%E3%82%B9%E3%83%91%E3%83%8A/?sid=426972", UTM), note: "片口・両口スパナ"},
  {title: "防爆工具・両口メガネレンチ一覧へ", url: buildUrl("https://search.rakuten.co.jp/search/mall/%E9%98%B2%E7%88%86%E5%B7%A5%E5%85%B7+%E4%B8%A1%E5%8F%A3%E3%83%A1%E3%82%AC%E3%83%8D%E3%83%AC%E3%83%B3%E3%83%81/?sid=426972", UTM), note: "2サイズのメガネレンチ"},
  {title: "防爆工具・片口メガネレンチ一覧へ", url: buildUrl("https://search.rakuten.co.jp/search/mall/%E9%98%B2%E7%88%86%E5%B7%A5%E5%85%B7+%E7%89%87%E5%8F%A3%E3%83%A1%E3%82%AC%E3%83%8D%E3%83%AC%E3%83%B3%E3%83%81/?sid=426972", UTM), note: "保持しやすいメガネ部"},
  {title: "防爆工具・パテナイフ一覧へ", url: buildUrl("https://search.rakuten.co.jp/search/mall/%E9%98%B2%E7%88%86%E5%B7%A5%E5%85%B7+%E3%83%91%E3%83%86%E3%83%8A%E3%82%A4%E3%83%95/?sid=426972", UTM), note: "塗膜・残渣の剥離"},
  {title: "防爆工具・ラチェットレンチ一覧へ", url: buildUrl("https://search.rakuten.co.jp/search/mall/%E9%98%B2%E7%88%86%E5%B7%A5%E5%85%B7+%E3%83%A9%E3%83%81%E3%82%A7%E3%83%83%E3%83%88%E3%83%AC%E3%83%B3%E3%83%81/?sid=426972", UTM), note: "繰り返し締結"},
  {title: "防爆工具・ニッパー一覧へ", url: buildUrl("https://search.rakuten.co.jp/search/mall/%E9%98%B2%E7%88%86%E5%B7%A5%E5%85%B7+%E3%83%8B%E3%83%83%E3%83%91%E3%83%BC/?sid=426972", UTM), note: "対応材の切断"},
  {title: "防爆工具・ショベル一覧へ", url: buildUrl("https://search.rakuten.co.jp/search/mall/%E9%98%B2%E7%88%86%E5%B7%A5%E5%85%B7+%E3%82%B7%E3%83%A7%E3%83%99%E3%83%AB/?sid=426972", UTM), note: "粉体・残渣の回収"},
  {title: "防爆工具・タガネ一覧へ", url: buildUrl("https://search.rakuten.co.jp/search/mall/%E9%98%B2%E7%88%86%E5%B7%A5%E5%85%B7+%E3%82%BF%E3%82%AC%E3%83%8D/?sid=426972", UTM), note: "固着物のはつり"},
  {title: "防爆工具・ハンマー一覧へ", url: buildUrl("https://search.rakuten.co.jp/search/mall/%E9%98%B2%E7%88%86%E5%B7%A5%E5%85%B7+%E3%83%8F%E3%83%B3%E3%83%9E%E3%83%BC/?sid=426972", UTM), note: "打撃作業"},
  {title: "防爆工具・プライヤー一覧へ", url: buildUrl("https://search.rakuten.co.jp/search/mall/%E9%98%B2%E7%88%86%E5%B7%A5%E5%85%B7+%E3%83%97%E3%83%A9%E3%82%A4%E3%83%A4%E3%83%BC/?sid=426972", UTM), note: "保持・曲げ・配管"}
];

const faqs = [
  {q: "防爆工具とは何ですか？", a: "可燃性ガス・蒸気・粉じんなどが存在し得る場所で、鋼製工具の衝撃や摩擦による機械火花が着火源になるリスクを低減するための手工具です。防爆工具だけで爆発を防げるわけではなく、換気、濃度管理、静電気対策、適切な電気機器、作業許可と併用します。"},
  {q: "防爆工具は本当に火花が出ないのですか？", a: "メーカーは無発火性・非着火性などの特長や試験結果を示していますが、使用条件、異物の付着、工具の損傷、相手材によって状況は変わります。「絶対に火花が出ない」「爆発しない」とは考えず、メーカーの試験・使用条件を確認します。"},
  {q: "防爆工具とノンスパーキング工具は同じですか？", a: "一般には同じ目的の工具を指す場面が多い言葉です。ただし製品ごとに材質、試験、認証、用途表示が異なるため、呼び方だけで適合を判断しません。"},
  {q: "防爆工具と防爆電気機器の違いは何ですか？", a: "防爆工具は主に手作業で生じる機械火花を抑えるための工具です。防爆電気機器は電気火花や高温表面などによる点火を防ぐ構造・適合を持つ機器です。防爆工具を使っても、一般仕様の照明や電動工具を危険場所で使えることにはなりません。"},
  {q: "防爆工具を使えば危険場所で作業できますか？", a: "工具だけでは判断できません。SDS、作業場所の危険性評価、ガス・蒸気・粉じんの有無、換気、濃度測定、静電気、電気機器、立入管理、保護具、緊急時対応を含む作業手順に基づいて決めます。"},
  {q: "防爆工具が必要になりやすい業種はどこですか？", a: "石油・ガス、化学、塗料・印刷、溶剤を扱う工場、タンク・船舶、可燃性粉体を扱う設備、危険物倉庫などが候補です。ただし業種名だけで決めず、実際の物質と作業条件を評価します。"},
  {q: "ベリリウム銅合金の防爆工具の特徴は何ですか？", a: "防爆・非磁性・耐食性を特長とする製品があり、HAMACOはX-sparkシリーズをベリリウム銅合金製として案内しています。硬さや耐久性などはメーカー仕様を確認し、鋼工具と同じ感覚で過大な力をかけないことが重要です。"},
  {q: "アルミニウム青銅とベリリウム銅はどう選びますか？", a: "対象ガス、要求される非磁性、硬度、耐久性、重量、価格、メーカーの試験・認証情報から選びます。一律にどちらが上とはいえないため、現場の危険物と社内基準をメーカーへ伝えて確認します。"},
  {q: "防爆工具は完全に非磁性ですか？", a: "非磁性を特長とする製品はありますが、厳密な磁場管理が必要な場所では、製品ごとの透磁率や証明書、施設基準を確認します。「防爆」と「MRI等で要求される完全な非磁性」は同義ではありません。"},
  {q: "防爆工具は絶縁工具として使えますか？", a: "使えません。防爆工具は機械火花のリスク低減を目的とする工具で、電気絶縁性能を示すものではありません。絶縁表示や規格が確認できない工具を活線作業へ使用しないでください。"},
  {q: "一般の鋼製ハンマーで防爆タガネを叩けますか？", a: "避けてください。打撃工具は、メーカーが指定する防爆ハンマーとの組み合わせを確認します。片方だけを防爆材にしても、鋼製工具同士・鋼製部材との衝突が残れば点火源対策として不十分です。"},
  {q: "防爆モンキーレンチはどのように使いますか？", a: "対象サイズにあごを密着させ、遊びをなくし、可動あごへ過大な力がかからない向きで使います。最大口開きと必要トルクを確認し、延長管を使わないでください。"},
  {q: "片口スパナとメガネレンチはどう使い分けますか？", a: "差し込みやすさを優先するならスパナ、ボルト・ナットを囲んで外れにくくしたいならメガネレンチが候補です。周辺設備、二面幅、締結トルク、作業角度を確認します。"},
  {q: "打撃メガネレンチはいつ使いますか？", a: "固着したナットなどへ打撃力を与える用途です。適合する防爆ハンマーを使い、打撃面の変形、飛散、反力、周囲の危険物を確認します。通常のメガネレンチを叩かないでください。"},
  {q: "パイプレンチとウォーターポンププライヤーの違いは何ですか？", a: "パイプレンチは丸管へ歯を食い込ませて大きな力で回す用途、ウォーターポンププライヤーは口開きを段階調整して部品をつかむ用途が中心です。管径、傷の許容、必要トルクで選びます。"},
  {q: "防爆ショベルは可燃性粉じんへ使えますか？", a: "候補にはなりますが、粉じん爆発対策は工具材質だけでは不十分です。粉じんの爆発特性、堆積量、飛散防止、集じん・換気、静電気対策、清掃方法、投入先を作業計画で確認します。"},
  {q: "防爆ニッパーで電線を切れますか？", a: "商品ごとの切断可能材と径を確認してください。防爆ニッパーは絶縁工具とは限らないため、活線を切断しないでください。硬線やピアノ線など、メーカーが認めていない材料へ使わないでください。"},
  {q: "防爆工具のサイズは大きいものを選べば兼用できますか？", a: "できません。スパナやメガネレンチは二面幅に合うサイズを選びます。サイズ違いは滑り、角の損傷、工具変形、作業者の転倒につながります。"},
  {q: "防爆工具の点検項目は何ですか？", a: "ひび、欠け、曲がり、口部の開き、打撃面のつぶれ・バリ、柄の緩み、可動部のがたつき、異物・鋼粉の付着、識別表示、持出履歴を確認します。異常品は隔離し、現場判断で削って修正しません。"},
  {q: "ベリリウム銅工具を研磨してもよいですか？", a: "現場での無断研磨・切削・溶接・加熱は避け、メーカーへ確認してください。加工で粉じんやヒュームが発生すると別の化学物質リスクが生じる可能性があります。通常使用と加工は分けて管理します。"},
  {q: "防爆工具はどのように保管しますか？", a: "一般鋼工具と混在させず、専用ケースや影絵管理で種類・サイズ・本数を識別します。水分、薬品、鋼粉、砂粒などを除去し、乾燥した場所で保管し、持出前後の点検記録を残します。"},
  {q: "防爆工具セットと単品購入はどちらがよいですか？", a: "定修・緊急保全で基本工具をまとめて持ち出すならセット、使用作業とサイズが固定されているなら単品が候補です。セットでも現場に必要な工具が全て入るとは限らないため、作業分解表と照合します。"},
  {q: "HAMACOとAMPCOはどう選びますか？", a: "製品種類、材質、試験・認証情報、必要サイズ、セット内容、補充性、納期、社内採用品から選びます。ブランド名だけではなく、個別型番の仕様をメーカー資料で照合します。"},
  {q: "防爆工具を購入する前にメーカーへ何を伝えればよいですか？", a: "使用物質とSDS、作業場所、危険場所の区分、作業内容、相手材、必要サイズ・トルク、打撃の有無、非磁性要件、使用頻度、点検・証明書要件を伝えると、適合確認がしやすくなります。"}
];

const references = [
  {label: "ハマコS.S 防爆工具 製品情報", url: "https://www.hamacoss.co.jp/product/"},
  {label: "HAMACO X-spark 防爆・非磁性ベリリウム銅合金安全工具カタログ", url: "https://www.hamacoss.co.jp/product/pdf/product_03.pdf"},
  {label: "厚生労働省 化学物質による爆発・火災等のリスクアセスメント入門", url: "https://anzeninfo.mhlw.go.jp/user/anzen/kag/pdf/M2_risk-assessment-guidebook.pdf"},
  {label: "厚生労働省 職場のあんぜんサイト メタノールSDS", url: "https://anzeninfo.mhlw.go.jp/anzen/gmsds/67-56-1.html"},
  {label: "e-Gov 労働安全衛生規則", url: "https://elaws.e-gov.go.jp/document?lawid=347M50002000032"},
  {label: "Google Search Central AI features and your website", url: "https://developers.google.com/search/docs/appearance/ai-features"},
  {label: "Google Search Central Helpful, reliable, people-first content", url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content"}
];

const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "防爆工具はどう選ぶ？材質・種類・用途と現場別の使い分け",
  description:
    "防爆工具を使用物質、作業内容、工具種類、サイズ、材質から選び、点検・管理する方法を解説します。",
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  author: { "@type": "Organization", name: "作業用品ナビ編集部" },
  publisher: {
    "@type": "Organization",
    name: "グリーンクロスホールディングス",
  },
  mainEntityOfPage: PAGE_URL,
  image: [`${HOME_URL}images/explosion-proof-tools-selection/explosion-proof-tools-selection-hero.jpg`],
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: HOME_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "記事一覧",
      item: `${HOME_URL}articles`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "防爆工具の選び方",
      item: PAGE_URL,
    },
  ],
};

function H2({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2
      id={id}
      className="mb-5 mt-12 scroll-mt-24 border-l-4 border-gray-900 pl-3 text-2xl font-bold text-gray-900"
    >
      {children}
    </h2>
  );
}
function H3({ children }: { children: ReactNode }) {
  return <h3 className="mb-3 mt-8 text-xl font-bold text-gray-900">{children}</h3>;
}
function AnswerBox({ children }: { children: ReactNode }) {
  return (
    <section className="my-7 rounded-xl border-2 border-gray-900 bg-gray-50 p-5 shadow-sm">
      <p className="mb-2 text-sm font-bold text-gray-700">結論</p>
      <div className="space-y-3 leading-8 text-gray-800">{children}</div>
    </section>
  );
}
function Caution({ title, children }: { title: string; children: ReactNode }) {
  return (
    <aside className="my-7 rounded-xl border border-red-300 bg-red-50 p-5">
      <p className="mb-2 font-bold text-red-900">{title}</p>
      <div className="space-y-2 leading-7 text-red-950">{children}</div>
    </aside>
  );
}
function Note({ title, children }: { title: string; children: ReactNode }) {
  return (
    <aside className="my-7 rounded-xl border border-slate-300 bg-slate-50 p-5">
      <p className="mb-2 font-bold text-slate-900">{title}</p>
      <div className="space-y-2 leading-7 text-slate-800">{children}</div>
    </aside>
  );
}
function Figure({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) {
  return (
    <figure className="my-7 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <Image src={src} alt={alt} width={1600} height={900} priority={priority} className="h-auto w-full" />
      <figcaption className="px-4 py-3 text-sm leading-6 text-gray-600">{alt}</figcaption>
    </figure>
  );
}
function Th({ children }: { children: ReactNode }) {
  return <th className="border border-gray-300 bg-gray-900 px-3 py-3 text-left text-sm font-bold text-white">{children}</th>;
}
function Td({ children }: { children: ReactNode }) {
  return <td className="border border-gray-300 px-3 py-3 align-top text-sm leading-6 text-gray-800">{children}</td>;
}
function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="relative aspect-[4/3] bg-white p-3">
        <Image src={IMG(product.image)} alt={`${product.short}の商品画像`} fill sizes="(max-width: 768px) 100vw, 360px" priority={priority} className="object-contain p-3" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="mb-2 inline-flex w-fit rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-700">{product.group}</p>
        <h3 className="text-lg font-bold leading-7 text-gray-900">{product.short}</h3>
        <p className="mt-1 text-sm text-gray-500">型番：{product.code}</p>
        <dl className="mt-4 space-y-3 text-sm leading-6">
          <div><dt className="font-bold text-gray-900">主な仕様</dt><dd className="text-gray-700">{product.spec}</dd></div>
          <div><dt className="font-bold text-gray-900">向く作業</dt><dd className="text-gray-700">{product.use}</dd></div>
          <div><dt className="font-bold text-gray-900">解決したい課題</dt><dd className="text-gray-700">{product.solves}</dd></div>
          <div className="rounded-lg bg-amber-50 p-3"><dt className="font-bold text-gray-900">購入前確認</dt><dd className="text-gray-700">{product.check}</dd></div>
        </dl>
        <a href={product.url} target="_blank" rel="nofollow sponsored" className="mt-5 inline-flex min-h-12 items-center justify-center rounded-lg bg-gray-900 px-4 py-3 text-center font-bold text-white transition hover:bg-gray-700">
          {product.cta} →
        </a>
      </div>
    </article>
  );
}
function ProductGrid({ ids, priorityFirst = false }: { ids: string[]; priorityFirst?: boolean }) {
  return (
    <div className="my-7 grid gap-5 md:grid-cols-2">
      {ids.map((id, index) => <ProductCard key={id} product={byId[id]} priority={priorityFirst && index < 2} />)}
    </div>
  );
}
function CategoryGrid() {
  return (
    <div className="my-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {categoryLinks.map((link) => (
        <a key={link.title} href={link.url} target="_blank" rel="nofollow sponsored" className="rounded-xl border border-gray-300 bg-white p-4 shadow-sm transition hover:border-gray-900 hover:shadow-md">
          <span className="block font-bold text-gray-900">{link.title}</span>
          <span className="mt-1 block text-sm text-gray-600">{link.note}</span>
        </a>
      ))}
    </div>
  );
}
function CTA({ children, href }: { children: ReactNode; href: string }) {
  return <a href={href} className="inline-flex min-h-12 items-center justify-center rounded-lg bg-gray-900 px-5 py-3 font-bold text-white transition hover:bg-gray-700">{children}</a>;
}

export default function Page() {
  const mistakes = [
    "危険場所の評価をせず、商品名に防爆とあるだけで使用を決める",
    "防爆工具を使えば換気やガス濃度測定が不要だと考える",
    "防爆工具と防爆電気機器を同じものとして扱う",
    "防爆工具を絶縁工具として活線作業へ使う",
    "対象物質のSDSにある着火源・静電気・保護具の注意を確認しない",
    "鋼製工具と防爆工具を同じ工具箱へ混在させる",
    "工具表面へ鋼粉・砂粒・異物が付着したまま使う",
    "必要な二面幅を測らず、大きめのスパナで代用する",
    "モンキーレンチのあごに遊びを残す",
    "パイプレンチを六角ボルトへ使う",
    "防爆タガネを一般の鋼製ハンマーで叩く",
    "打撃不可のレンチをハンマーで叩く",
    "延長管を差して想定以上のトルクをかける",
    "ニッパーの切断能力を確認せず硬線を切る",
    "ショベルを選ぶだけで粉じん爆発対策が完了すると考える",
    "バルブの状態や流体を確認せず、ハンドルへ大きな力をかける",
    "ひび、曲がり、口部の開き、打撃面のつぶれを点検しない",
    "変形した工具を現場で研磨・切削して再使用する",
    "ベリリウム銅工具の加工時に粉じん・ヒューム管理を検討しない",
    "非磁性という表示だけでMRIなど厳密な磁場管理へ持ち込む",
    "工具セットに必要工具がすべて入っていると思い込む",
    "単品補充時に材質・メーカー・型番を照合しない",
    "持出者、使用場所、返却日、点検結果を記録しない",
    "価格や納期だけで選び、証明書・試験情報・保守を確認しない",
    "防爆工具を導入したこと自体を法令対応完了と表現する",
  ];

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 py-10">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

        <p className="text-sm font-medium text-gray-600">作業用品ナビ編集部｜公開日・更新日：2026年7月22日</p>
        <h1 className="mt-3 text-3xl font-extrabold leading-tight text-gray-900 md:text-4xl">防爆工具はどう選ぶ？材質・種類・用途と現場別の使い分け</h1>
        <p className="mt-5 leading-8 text-gray-700">化学工場、塗料・溶剤を扱う設備、石油・ガス関連施設、タンクや危険物倉庫などでは、一般の鋼製工具が着火源の一つになり得ます。本記事では「防爆工具なら何でもよい」とせず、使用物質、作業内容、工具種類、サイズ、材質、打撃の有無から選ぶ順序を整理します。</p>

        <Figure src={HERO("explosion-proof-tools-selection-hero.jpg")} alt="化学プラントの保全担当者が防爆工具を作業内容別に選ぶイメージ" priority />

        <AnswerBox>
          <p><strong>防爆工具は、爆発性雰囲気で着火源となり得る機械火花を抑えるために使う手工具です。</strong>最初にSDS、作業手順、危険場所の評価で使用要否を確認し、次に「締結・配管・打撃・剥離・切断・掘削」の作業、対象サイズ、材質、打撃可否、非磁性要件から選びます。</p>
          <p>工具だけで防爆対策が完了するわけではありません。換気、ガス・蒸気・粉じん濃度の管理、静電気対策、防爆仕様の電気機器、立入管理、保護具、緊急時手順と組み合わせて運用してください。</p>
        </AnswerBox>

        <div className="flex flex-wrap gap-3">
          <CTA href="#tool-types">作業別に工具を選ぶ</CTA>
          <CTA href="#category-links">楽天の種類別一覧を見る</CTA>
          <CTA href="#checklist">法人導入チェックへ進む</CTA>
        </div>

        <ProductGrid ids={["amcbst", "cbhx9s", "cbm450", "cbpw250", "cbkh05", "cbs240r"]} priorityFirst />

        <Caution title="防爆工具は、爆発を保証して防ぐ工具ではありません">
          <p>防爆工具は機械火花による着火リスクを低減するための一要素です。可燃物、酸素、着火源がそろう条件をつくらないことが基本で、漏えい防止、換気、濃度測定、接地・ボンディング、静電気対策、電気機器の適合、火気管理などを別途行います。</p>
        </Caution>

        <nav className="my-9 rounded-xl border border-gray-200 bg-white p-5 shadow-sm" aria-label="目次">
          <p className="mb-3 font-bold text-gray-900">この記事の目次</p>
          <ol className="grid gap-2 text-sm leading-6 text-gray-700 sm:grid-cols-2">
            {[
              ["meaning", "防爆工具とは"], ["locations", "必要になりやすい現場"], ["differences", "一般工具・防爆電気機器との違い"],
              ["materials", "材質の違い"], ["selection", "7つの選定条件"], ["tool-types", "作業別の工具種類"],
              ["fastening", "スパナ・レンチ"], ["piping", "配管・バルブ工具"], ["impact", "打撃・剥離工具"],
              ["cut-dig", "切断・ショベル"], ["hex-set", "六角棒・セット"], ["category-links", "楽天の種類別一覧"],
              ["workflow", "安全な使用手順"], ["inspection", "点検・保管"], ["mistakes", "よくある失敗"],
              ["checklist", "法人チェックリスト"], ["faq", "FAQ"], ["summary", "まとめ"],
            ].map(([id, label]) => <li key={id}><a className="underline decoration-gray-400 underline-offset-4 hover:text-black" href={`#${id}`}>{label}</a></li>)}
          </ol>
        </nav>

        <H2 id="meaning">防爆工具とは｜機械火花の着火リスクを低減する手工具</H2>
        <p className="leading-8 text-gray-700">防爆工具は、衝撃や摩擦によって着火源となり得る火花を生じにくい銅合金などで作られた手工具です。HAMACOはX-sparkシリーズを防爆・非磁性ベリリウム銅合金安全工具として案内し、火花による爆発が予想される現場で使う工具としています。</p>
        <p className="mt-4 leading-8 text-gray-700">ただし、「防爆」という名称は作業場所全体が安全になることを意味しません。可燃性物質の漏えい、酸素、電気火花、静電気、高温面、裸火、機械火花など、複数の点火源と爆発性雰囲気を総合的に管理する必要があります。</p>
        <H3>「火花が出ない」を絶対表現にしない</H3>
        <p className="leading-8 text-gray-700">メーカーの無発火性試験や材質特性は重要な選定材料ですが、工具へ鋼粉が付着している、工具が損傷している、相手材や使用方法が想定外である、といった条件では安全性を一律に断定できません。記事や社内手順では「機械火花の発生・着火リスクを低減する」と表現し、適合条件を添えます。</p>

        <H2 id="locations">防爆工具が必要になりやすい現場</H2>
        <div className="overflow-x-auto"><table className="w-full border-collapse"><thead><tr><Th>現場・作業</Th><Th>想定される危険</Th><Th>工具選定の例</Th><Th>工具以外の確認</Th></tr></thead><tbody>
          <tr><Td>石油・ガス設備</Td><Td>可燃性ガス・蒸気</Td><Td>配管レンチ、バルブハンドル、締結工具</Td><Td>漏えい、ガス濃度、接地、電気機器</Td></tr>
          <tr><Td>化学工場・溶剤設備</Td><Td>引火性液体・蒸気、反応性物質</Td><Td>スパナ、メガネ、パテナイフ、プライヤー</Td><Td>SDS、換気、混触、保護具</Td></tr>
          <tr><Td>塗装・印刷・インキ</Td><Td>溶剤蒸気、可燃性残渣</Td><Td>パテナイフ、スクレーパー系、ニッパー</Td><Td>局所排気、清掃、廃棄容器、静電気</Td></tr>
          <tr><Td>タンク・船舶・ピット</Td><Td>低所への蒸気滞留、酸欠</Td><Td>工具セット、配管工具、ショベル</Td><Td>入槽手順、測定、監視、換気、救出計画</Td></tr>
          <tr><Td>可燃性粉体設備</Td><Td>粉じん雲・堆積粉じん</Td><Td>ショベル、清掃工具、締結工具</Td><Td>粉じん特性、集じん、接地、清掃方法</Td></tr>
        </tbody></table></div>
        <Note title="業種名ではなく、物質と作業で判断する"><p>同じ工場内でも、通常区域と危険物を開放する工程では条件が異なります。使用物質のSDS、設備の危険場所区分、作業許可書、濃度測定結果を確認し、工具を選ぶ担当者だけで決めないことが重要です。</p></Note>

        <H2 id="differences">一般工具・防爆工具・防爆電気機器の違い</H2>
        <div className="overflow-x-auto"><table className="w-full border-collapse"><thead><tr><Th>区分</Th><Th>主な目的</Th><Th>確認する表示・仕様</Th><Th>混同しやすい点</Th></tr></thead><tbody>
          <tr><Td>一般鋼工具</Td><Td>通常環境での締結・切断・打撃</Td><Td>サイズ、強度、用途</Td><Td>危険場所で機械火花の着火源になり得る</Td></tr>
          <tr><Td>防爆工具</Td><Td>機械火花による着火リスクの低減</Td><Td>材質、メーカー試験、用途、サイズ</Td><Td>絶縁工具や防爆電気機器ではない</Td></tr>
          <tr><Td>防爆電気機器</Td><Td>電気火花・高温部などによる点火防止</Td><Td>防爆構造、対象ガス・粉じん、温度等級、区域</Td><Td>防爆手工具で代替できない</Td></tr>
          <tr><Td>絶縁工具</Td><Td>規定電圧下の電気作業で感電リスクを低減</Td><Td>絶縁規格、定格電圧、外観点検</Td><Td>防爆性能を自動的に持つわけではない</Td></tr>
        </tbody></table></div>

        <H2 id="materials">防爆工具の材質｜ベリリウム銅とアルミニウム青銅</H2>
        <p className="leading-8 text-gray-700">防爆工具ではベリリウム銅合金やアルミニウム青銅などが使われます。今回のExcel商品はHAMACO製品が中心で、メーカーはX-sparkをベリリウム銅合金製として案内しています。AMPCOセットは購入時に個別の材質・セット内容を確認してください。</p>
        <div className="mt-6 overflow-x-auto"><table className="w-full border-collapse"><thead><tr><Th>比較項目</Th><Th>ベリリウム銅合金</Th><Th>アルミニウム青銅</Th><Th>確認方法</Th></tr></thead><tbody>
          <tr><Td>主な判断軸</Td><Td>非磁性、高強度・耐久性を求める製品で採用例</Td><Td>防爆工具で広く採用される銅合金</Td><Td>メーカー材質証明・カタログ</Td></tr>
          <tr><Td>対象雰囲気</Td><Td>ガスの種類や試験条件を確認</Td><Td>ガスの種類や試験条件を確認</Td><Td>SDSとメーカー照会</Td></tr>
          <tr><Td>加工・補修</Td><Td>無断研磨・切削・加熱を避ける</Td><Td>無断研磨・切削・加熱を避ける</Td><Td>メーカーの補修基準</Td></tr>
          <tr><Td>価格・配備</Td><Td>高性能要件と費用を比較</Td><Td>必要性能と費用を比較</Td><Td>ライフサイクルと補充性</Td></tr>
        </tbody></table></div>
        <Figure src={HERO("explosion-proof-tool-material-comparison.jpg")} alt="ベリリウム銅合金とアルミニウム青銅の防爆工具を比較するイメージ" />
        <Caution title="ベリリウム銅工具を現場で削って直さない"><p>完成工具を通常使用することと、研磨・切削・溶接などで粉じんやヒュームを発生させることは別のリスクです。変形やバリを現場で削り取らず、隔離してメーカーへ修理・廃棄方法を確認してください。</p></Caution>

        <H2 id="selection">防爆工具を選ぶ7つの条件</H2>
        <ol className="space-y-4 pl-6 leading-8 text-gray-700">
          <li><strong>使用物質を確認：</strong>SDSで引火性、爆発性、静電気、混触、必要保護具を確認する。</li>
          <li><strong>作業場所を確認：</strong>通常区域か危険場所か、密閉空間・低所・粉じん堆積があるかを確認する。</li>
          <li><strong>作業を分解：</strong>締結、配管、打撃、剥離、切断、掘削・回収に分ける。</li>
          <li><strong>寸法を実測：</strong>二面幅、六角穴、管径、口開き、刃幅、対象材径を測る。</li>
          <li><strong>材質・試験を確認：</strong>ベリリウム銅、アルミニウム青銅などの材質とメーカーの試験・適合情報を確認する。</li>
          <li><strong>組み合わせを確認：</strong>打撃レンチとハンマー、タガネとハンマーなど、接触する工具を一式で管理する。</li>
          <li><strong>運用を確認：</strong>点検、持出、保管、交換、証明書、教育まで含めて購入する。</li>
        </ol>

        <Figure src={HERO("non-sparking-tool-selection-flow.jpg")} alt="防爆工具を使用物質・作業・サイズ・材質から選ぶ判断フローのイメージ" />

        <H2 id="tool-types">作業別｜防爆工具の種類と使い分け</H2>
        <div className="overflow-x-auto"><table className="w-full border-collapse"><thead><tr><Th>作業</Th><Th>工具候補</Th><Th>選定寸法</Th><Th>主な注意</Th></tr></thead><tbody>
          <tr><Td>六角ボルト・ナット</Td><Td>片口・両口スパナ、メガネ、モンキー、打撃メガネ</Td><Td>二面幅、全長、オフセット</Td><Td>サイズ違い、延長管、打撃可否</Td></tr>
          <tr><Td>六角穴付きボルト</Td><Td>六角棒レンチ、セット</Td><Td>二面幅、差込深さ</Td><Td>穴の摩耗、斜め差し</Td></tr>
          <tr><Td>丸管・継手</Td><Td>パイプレンチ、ポンププライヤー</Td><Td>管径、最大口開き</Td><Td>管の傷、反力、滑り</Td></tr>
          <tr><Td>バルブ開閉</Td><Td>バルブハンドル</Td><Td>ハンドル形状・寸法</Td><Td>固着原因、急開閉、流体</Td></tr>
          <tr><Td>打撃・はつり</Td><Td>防爆ハンマー、タガネ、打撃レンチ</Td><Td>頭部・刃先・二面幅</Td><Td>工具同士の材質、飛散</Td></tr>
          <tr><Td>塗膜・残渣剥離</Td><Td>パテナイフ、スケーリングハンマー</Td><Td>刃幅、刃厚、全長</Td><Td>対象面、残渣の有害性</Td></tr>
          <tr><Td>切断</Td><Td>ニッパー</Td><Td>対象材・径</Td><Td>活線禁止、硬線禁止</Td></tr>
          <tr><Td>粉体・残渣回収</Td><Td>フラット・丸型ショベル</Td><Td>刃先幅、柄長</Td><Td>粉じん・静電気・投入先</Td></tr>
        </tbody></table></div>

        <H2 id="fastening">ボルト・ナット用｜スパナ・メガネ・モンキー</H2>
        <p className="leading-8 text-gray-700">締結工具は「大は小を兼ねる」ではなく、二面幅と作業角度で選びます。差し込みやすいスパナ、外れにくいメガネ、複数サイズへ対応するモンキー、固着部へ使う打撃メガネを分けてください。</p>
        <ProductGrid ids={["cbks17", "cbss1921", "cbmm1214", "cbko19", "cbkp17", "cbdr30", "cbm450"]} />

        <H2 id="piping">配管・バルブ用｜パイプレンチ・プライヤー・バルブハンドル</H2>
        <p className="leading-8 text-gray-700">丸管へ食い込ませて大きな力をかけるパイプレンチと、口開きを調整して部品をつかむウォーターポンププライヤーは用途が異なります。バルブハンドルは固着の原因や流体状態を確認し、無理な増し締めで弁棒や設備を破損させないようにします。</p>
        <ProductGrid ids={["cbpw250", "cbpw600", "cbcp200", "cbwp250", "cbwp360", "cbbh300"]} />

        <Figure src={HERO("explosion-proof-wrench-pipe-tool-comparison.jpg")} alt="防爆スパナ・メガネレンチ・パイプレンチ・プライヤーを作業別に比較するイメージ" />

        <H2 id="impact">打撃・剥離用｜ハンマー・タガネ・パテナイフ</H2>
        <p className="leading-8 text-gray-700">打撃作業では、叩かれる側だけでなく叩く側も適合する防爆工具にします。一般鋼製ハンマーとの組み合わせ、変形した打撃面、飛散する錆・スケール、周辺の蒸気や粉じんを確認してください。</p>
        <ProductGrid ids={["cbkh05", "cbsh150", "cbtg18", "cbpk40b", "cbpk50"]} />
        <Figure src={HERO("explosion-proof-impact-scraping-tools.jpg")} alt="防爆ハンマー・タガネ・パテナイフを点検するイメージ" />

        <H2 id="cut-dig">切断・掘削・回収用｜ニッパー・ショベル</H2>
        <p className="leading-8 text-gray-700">ニッパーは切断可能材と径、ショベルは対象物の粉じん爆発性・帯電・飛散を確認します。防爆材のショベルへ替えるだけで粉じん爆発対策が完了するわけではありません。</p>
        <ProductGrid ids={["cbcn160", "cbs150f", "cbs240r"]} />

        <H2 id="hex-set">六角穴付きボルト・定修用｜六角棒レンチと工具セット</H2>
        <p className="leading-8 text-gray-700">六角棒レンチは二面幅を合わせ、奥まで差し込んで使います。複数サイズを使う設備ではセット、補充・専用設備では単品が向きます。定修用セットは作業分解表と照合し、必要な配管工具や打撃工具が不足していないか確認してください。</p>
        <ProductGrid ids={["cbhx9s", "cbhx4", "amcbst"]} />

        <H2 id="category-links">防爆工具を種類別に探す</H2>
        <p className="leading-8 text-gray-700">必要な作業とサイズが決まったら、種類別一覧から比較します。商品名だけで決めず、材質、寸法、用途、打撃可否、メーカー資料を各商品ページで確認してください。</p>
        <CategoryGrid />

        <H2 id="workflow">防爆工具を使う前から返却までの手順</H2>
        <ol className="space-y-4 pl-6 leading-8 text-gray-700">
          <li><strong>作業許可とSDSを確認：</strong>物質、濃度、換気、静電気、火気、保護具を確認する。</li>
          <li><strong>作業場所を測定・隔離：</strong>必要なガス測定、換気、立入管理、監視者を設定する。</li>
          <li><strong>工具表を作成：</strong>作業工程ごとに種類、サイズ、数量、打撃組み合わせを決める。</li>
          <li><strong>持出前点検：</strong>ひび、曲がり、バリ、口部、柄、可動部、異物付着を確認する。</li>
          <li><strong>一般工具を持ち込まない：</strong>工具箱、台車、付属品まで区分し、混在を防ぐ。</li>
          <li><strong>適正な力で使用：</strong>延長管、無理な打撃、斜め掛け、用途外使用をしない。</li>
          <li><strong>作業中も雰囲気を監視：</strong>漏えい、換気停止、濃度変化、異臭、粉じん飛散時は中止する。</li>
          <li><strong>清掃・点検して返却：</strong>化学物質・鋼粉を除去し、異常品は隔離して記録する。</li>
        </ol>
        <Figure src={HERO("explosion-proof-tool-prework-risk-assessment.jpg")} alt="SDS・ガス測定・静電気対策を確認して防爆工具を持ち出すイメージ" />

        <H2 id="inspection">防爆工具の点検・清掃・保管</H2>
        <div className="overflow-x-auto"><table className="w-full border-collapse"><thead><tr><Th>時点</Th><Th>確認項目</Th><Th>異常時</Th><Th>記録</Th></tr></thead><tbody>
          <tr><Td>購入・受入</Td><Td>型番、材質、サイズ、数量、証明書、外観</Td><Td>発注内容と照合し隔離</Td><Td>受入台帳・写真</Td></tr>
          <tr><Td>持出前</Td><Td>ひび、曲がり、バリ、柄、口部、可動部、異物</Td><Td>使用禁止札を付ける</Td><Td>点検者・日付</Td></tr>
          <tr><Td>使用中</Td><Td>滑り、変形、緩み、異音、雰囲気変化</Td><Td>作業中止・退避</Td><Td>作業日報</Td></tr>
          <tr><Td>返却時</Td><Td>薬品・油・鋼粉の除去、数量、損傷</Td><Td>隔離してメーカー確認</Td><Td>持出返却履歴</Td></tr>
          <tr><Td>定期</Td><Td>全数、識別表示、保管環境、交換基準</Td><Td>廃棄・更新計画</Td><Td>工具管理台帳</Td></tr>
        </tbody></table></div>
        <Note title="影絵管理と色分けだけに頼らない"><p>外観の色は材質証明になりません。工具番号、型番、材質、サイズ、保管位置を台帳とケースへ対応させ、一般工具との混入を受入・返却時に照合してください。</p></Note>

        <H2 id="mistakes">よくある選び方・使い方の失敗</H2>
        <ol className="grid gap-3 pl-6 leading-7 text-gray-700 md:grid-cols-2">{mistakes.map((item, index) => <li key={item}><span className="font-bold text-gray-900">{index + 1}.</span> {item}</li>)}</ol>

        <H2 id="checklist">法人購買・現場配備チェックリスト</H2>
        <div className="space-y-7">
          {[
            ["危険性の確認", ["使用物質とSDS", "ガス・蒸気・粉じんの発生条件", "危険場所区分と作業許可", "換気・濃度測定・静電気対策", "緊急停止・退避・通報手順"]],
            ["工具の選定", ["作業工程と工具種類", "二面幅・管径・口開き・刃幅", "材質とメーカー試験情報", "打撃工具の組み合わせ", "非磁性・耐食性の要求", "単品かセットか"]],
            ["購買・受入", ["正式型番・JAN・商品URL", "現行品・後継品・納期", "セット内容と単品補充", "証明書・取扱説明書", "修理・廃棄・問い合わせ先"]],
            ["運用・点検", ["工具番号と保管位置", "持出者・使用場所・返却日", "持出前後点検", "異常品の隔離", "教育・再教育", "交換・廃棄基準"]],
          ].map(([title, items]) => <section key={title as string} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"><h3 className="font-bold text-gray-900">{title as string}</h3><ul className="mt-3 grid gap-2 sm:grid-cols-2">{(items as string[]).map(item => <li key={item} className="flex gap-2 text-sm leading-6 text-gray-700"><span aria-hidden="true">□</span>{item}</li>)}</ul></section>)}
        </div>
        <Figure src={HERO("explosion-proof-tool-inspection-management.jpg")} alt="法人担当者が防爆工具の型番・損傷・持出履歴を点検するイメージ" />

        <H2 id="faq">防爆工具についてよくある質問</H2>
        <div className="space-y-4">{faqs.map((faq) => <details key={faq.q} className="rounded-xl border border-gray-200 bg-white p-5"><summary className="cursor-pointer font-bold text-gray-900">{faq.q}</summary><p className="mt-3 leading-8 text-gray-700">{faq.a}</p></details>)}</div>

        <H2 id="references">参考にした一次情報・公式情報</H2>
        <ul className="space-y-3 text-sm leading-6 text-gray-700">{references.map((ref) => <li key={ref.url}><a href={ref.url} target="_blank" rel="noopener noreferrer" className="font-medium underline underline-offset-4">{ref.label}</a></li>)}</ul>

        <H2 id="summary">まとめ｜防爆工具は「作業」と「サイズ」まで決めてから購入する</H2>
        <p className="leading-8 text-gray-700">防爆工具は、一般工具を銅色の工具へ置き換えるだけの対策ではありません。使用物質と作業場所を評価し、締結、配管、打撃、剥離、切断、掘削の作業へ分解して、サイズ・材質・組み合わせを選びます。さらに換気、濃度管理、静電気対策、防爆電気機器、点検・教育と一体で運用してください。</p>
        <div className="mt-7 rounded-xl bg-gray-900 p-6 text-white"><p className="text-lg font-bold">作業内容が決まったら、種類別一覧から比較</p><p className="mt-2 leading-7 text-gray-200">スパナ、メガネレンチ、ハンマー、ショベルなど、必要なカテゴリへ直接進めます。</p><div className="mt-5"><CategoryGrid /></div></div>
      </main>
      <SiteFooter />
    </>
  );
}
