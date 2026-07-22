import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";

export const metadata: Metadata = {
  title: "業務用ハンドソープを箱買いする前に｜18L・20L・油汚れ用の選び方",
  description:
    "業務用ハンドソープを工場・法人で箱買いする際の選び方を解説。18L・20L・17kg BIB、泡・液体・スクラブ・固形、油・インキ・塗料汚れの違い、本体と詰替、使用量計算まで比較します。",
  alternates: { canonical: "https://sagyou-navi.com/articles/commercial-hand-soap-bulk-selection" },
  openGraph: {
    title: "業務用ハンドソープを箱買いする前に｜18L・20L・油汚れ用の選び方",
    description:
      "工場・整備・印刷・塗装・多拠点法人向けに、大容量ハンドソープの選定と発注を実務目線で整理します。",
    url: "https://sagyou-navi.com/articles/commercial-hand-soap-bulk-selection",
    type: "article",
    images: [{ url: "/images/commercial-hand-soap-bulk-selection/commercial-hand-soap-bulk-hero.jpg" }],
  },
};

const UTM = "utm_source=sagyou_navi";
function buildUrl(url: string, utm = UTM): string {
  if (!url) return url;
  const h = url.indexOf("#");
  const append = (base: string) => `${base}${base.includes("?") ? "&" : "?"}${utm}`;
  return h === -1 ? append(url) : `${append(url.slice(0, h))}${url.slice(h)}`;
}

const PAGE_URL = "https://sagyou-navi.com/articles/commercial-hand-soap-bulk-selection";
const HOME_URL = "https://sagyou-navi.com/";
const IMG_BASE = "/products/";
const HERO_BASE = "/images/commercial-hand-soap-bulk-selection/";

type Product = {
  id: string;
  code: string;
  name: string;
  short: string;
  img: string;
  badge: string;
  volume: string;
  form: string;
  dirt: string;
  use: string;
  check: string;
  rakuten: string | null;
  yahoo: string | null;
};

const products: Product[] = [
  {
    "id": "233076",
    "code": "TOS-ECO-180S",
    "name": "TRUSCO フレッシュハンドソープECO 18L 詰替 バッグインボックス",
    "short": "フレッシュハンドソープECO 18L",
    "img": "233076.jpg",
    "badge": "油汚れ／18L BIB",
    "volume": "18L",
    "form": "スクラブ入り・詰替BIB",
    "dirt": "機械油などのガンコな油汚れ",
    "use": "使用量の多い機械工場・整備工場の集中補充",
    "check": "コックの有無、小分け容器、約18kgを安全に扱える設置場所を確認。",
    "rakuten": "https://item.rakuten.co.jp/signcity2024/233076/",
    "yahoo": "https://store.shopping.yahoo.co.jp/signcity-yshop/233076.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea="
  },
  {
    "id": "232502",
    "code": "PHS-20-A",
    "name": "TRUSCO 薬用パワーハンドソープ 20L",
    "short": "薬用パワーハンドソープ 20L",
    "img": "232502.jpg",
    "badge": "油・カーボン・インキ／20L",
    "volume": "20L",
    "form": "天然スクラブ入り・大容量",
    "dirt": "機械油、カーボン、インキなど",
    "use": "自動車・機械・印刷・化学工場の大人数運用",
    "check": "20L容器の補充方法、ポンプ・小分け容器、保管と持ち上げ手順を確認。",
    "rakuten": "https://item.rakuten.co.jp/signcity2024/232502/",
    "yahoo": "https://store.shopping.yahoo.co.jp/signcity-yshop/232502.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea="
  },
  {
    "id": "233224",
    "code": "TSK-170-A",
    "name": "TRUSCO ハンドソープ 新・洗手観音 17.0kg バッグインボックス",
    "short": "新・洗手観音 17kg BIB",
    "img": "233224.jpg",
    "badge": "素早いすすぎ／17kg BIB",
    "volume": "17kg",
    "form": "植物性スクラブ・詰替BIB",
    "dirt": "作業現場の油汚れ・一般的な頑固汚れ",
    "use": "手洗い回数が多く、すすぎ時間も重視する多人数現場",
    "check": "専用容器・コック、香り、補充動線、在庫ローテーションを確認。",
    "rakuten": "https://item.rakuten.co.jp/signcity2024/233224/",
    "yahoo": "https://store.shopping.yahoo.co.jp/signcity-yshop/233224.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea="
  },
  {
    "id": "233458",
    "code": "TYS-3P-A",
    "name": "TRUSCO 薬用石けん 油汚れ用 3個入",
    "short": "薬用石けん 油汚れ用 3個",
    "img": "233458.jpg",
    "badge": "固形石けん／3個",
    "volume": "3個入",
    "form": "固形石けん",
    "dirt": "油汚れ",
    "use": "少人数の作業場や試験導入",
    "check": "石けん置き、水切り、共用方法、交換・清掃ルールを確認。",
    "rakuten": "https://item.rakuten.co.jp/signcity2024/233458/",
    "yahoo": null
  },
  {
    "id": "233482",
    "code": "YHS-CP1L",
    "name": "TRUSCO 薬用ハンドソープ ムース状 袋入詰替キャップ式 1.0L",
    "short": "薬用ムースハンドソープ 詰替1L",
    "img": "233482.jpg",
    "badge": "薬用泡／詰替1L",
    "volume": "1.0L",
    "form": "泡タイプ・キャップ式詰替",
    "dirt": "一般的な手洗い・衛生管理",
    "use": "飲食店、病院、学校、オフィス等の補充用",
    "check": "対応する泡用ボトル、本体との組み合わせ、開封後の管理を確認。",
    "rakuten": "https://item.rakuten.co.jp/signcity2024/233482/",
    "yahoo": "https://store.shopping.yahoo.co.jp/signcity-yshop/233482.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea="
  },
  {
    "id": "233460",
    "code": "TYS-9P-A",
    "name": "TRUSCO 薬用石けん 油汚れ用 9個入",
    "short": "薬用石けん 油汚れ用 9個",
    "img": "233460.jpg",
    "badge": "固形石けん／9個",
    "volume": "9個入",
    "form": "固形石けん",
    "dirt": "油汚れ",
    "use": "複数の手洗い場へ少量ずつ配備",
    "check": "現行品・後継品、使用場所ごとの衛生管理と補充担当を確認。",
    "rakuten": "https://item.rakuten.co.jp/signcity2024/233460/",
    "yahoo": null
  },
  {
    "id": "233237",
    "code": "TSSP-B",
    "name": "TRUSCO 石鹸入れ付き手洗いスポンジブラシ ブルー",
    "short": "石けん入れ付き手洗いブラシ",
    "img": "233237.jpg",
    "badge": "手洗い補助／ブラシ",
    "volume": "1個",
    "form": "スポンジブラシ",
    "dirt": "手の凹凸部に残りやすい汚れの洗浄補助",
    "use": "ブラシ使用を衛生手順に組み込む作業場",
    "check": "共用ブラシは二次汚染を避けるため、洗浄・乾燥・交換方法を決める。",
    "rakuten": "https://item.rakuten.co.jp/signcity2024/233237/",
    "yahoo": null
  },
  {
    "id": "233222",
    "code": "TSK-10C-A",
    "name": "TRUSCO ハンドソープ 新・洗手観音 詰替パック 1.0L",
    "short": "新・洗手観音 詰替1L",
    "img": "233222.jpg",
    "badge": "現場用／詰替1L",
    "volume": "1.0L",
    "form": "詰替パック",
    "dirt": "作業現場の油汚れ・一般的な頑固汚れ",
    "use": "1.1L本体を各手洗い場に配備する運用",
    "check": "TSK-11-A本体との組み合わせ、異なる製品を継ぎ足さない運用を確認。",
    "rakuten": "https://item.rakuten.co.jp/signcity2024/233222/",
    "yahoo": "https://store.shopping.yahoo.co.jp/signcity-yshop/233222.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea="
  },
  {
    "id": "233223",
    "code": "TSK-11-A",
    "name": "TRUSCO ハンドソープ 新・洗手観音 ポンプ本体 1.1L",
    "short": "新・洗手観音 ポンプ本体1.1L",
    "img": "233223.jpg",
    "badge": "現場用／本体1.1L",
    "volume": "1.1L",
    "form": "ポンプ本体",
    "dirt": "作業現場の油汚れ・一般的な頑固汚れ",
    "use": "作業場ごとの常設ボトル",
    "check": "詰替品TSK-10C-A・TSK-170-Aとの運用、吐出量、設置数を確認。",
    "rakuten": "https://item.rakuten.co.jp/signcity2024/233223/",
    "yahoo": "https://store.shopping.yahoo.co.jp/signcity-yshop/233223.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea="
  },
  {
    "id": "233481",
    "code": "YHS-500-A",
    "name": "TRUSCO 薬用ハンドソープ ムース状 500mL",
    "short": "薬用ムースハンドソープ 500mL",
    "img": "233481.jpg",
    "badge": "薬用泡／本体500mL",
    "volume": "0.5L",
    "form": "泡ポンプ本体",
    "dirt": "一般的な手洗い・衛生管理",
    "use": "飲食店、病院、学校、オフィス等の手洗い場",
    "check": "工業油・塗料用ではないため、汚れの種類を分けて選ぶ。",
    "rakuten": "https://item.rakuten.co.jp/signcity2024/233481/",
    "yahoo": "https://store.shopping.yahoo.co.jp/signcity-yshop/233481.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea="
  },
  {
    "id": "233173",
    "code": "TRH-380",
    "name": "TRUSCO リキッドハンドソープ 380mL",
    "short": "リキッドハンドソープ 380mL",
    "img": "233173.jpg",
    "badge": "小容量／液体",
    "volume": "380mL",
    "form": "リキッドタイプ",
    "dirt": "一般的な汚れ",
    "use": "小規模な手洗い場、事務所、予備品",
    "check": "用途・成分・薬用区分を商品ページと現品ラベルで確認。",
    "rakuten": "https://item.rakuten.co.jp/signcity2024/233173/",
    "yahoo": "https://store.shopping.yahoo.co.jp/signcity-yshop/233173.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea="
  },
  {
    "id": "233077",
    "code": "TOS-ECO-20S",
    "name": "TRUSCO フレッシュハンドソープECO 2.0L詰替",
    "short": "フレッシュハンドソープECO 詰替2L",
    "img": "233077.jpg",
    "badge": "油汚れ／詰替2L",
    "volume": "2.0L",
    "form": "スクラブ入り・詰替",
    "dirt": "機械油などのガンコな油汚れ",
    "use": "2.5L本体を複数配置する工場",
    "check": "TOS-ECO-25本体との対応、補充時の異物混入防止を確認。",
    "rakuten": "https://item.rakuten.co.jp/signcity2024/233077/",
    "yahoo": "https://store.shopping.yahoo.co.jp/signcity-yshop/233077.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea="
  },
  {
    "id": "233078",
    "code": "TOS-ECO-25",
    "name": "TRUSCO フレッシュハンドソープECO 2.5L本体",
    "short": "フレッシュハンドソープECO 本体2.5L",
    "img": "233078.jpg",
    "badge": "油汚れ／本体2.5L",
    "volume": "2.5L",
    "form": "スクラブ入り・ポンプ本体",
    "dirt": "機械油などのガンコな油汚れ",
    "use": "自動車整備、機械加工、保全作業場の常設用",
    "check": "設置スペース、ポンプ吐出量、詰替TOS-ECO-20Sとの組み合わせを確認。",
    "rakuten": "https://item.rakuten.co.jp/signcity2024/233078/",
    "yahoo": "https://store.shopping.yahoo.co.jp/signcity-yshop/233078.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea="
  },
  {
    "id": "233479",
    "code": "WUHS-05",
    "name": "TRUSCO 殺菌薬用ハンドソープ 泡タイプ ボトル0.5L",
    "short": "殺菌薬用泡ハンドソープ 本体0.5L",
    "img": "233479.jpg",
    "badge": "殺菌薬用泡／本体0.5L",
    "volume": "0.5L",
    "form": "泡ポンプ本体",
    "dirt": "一般的な手洗い・衛生管理",
    "use": "従業員・来訪者が使う共用手洗い場",
    "check": "製品表示の効能・用法に従い、感染症対策を本品だけに依存しない。",
    "rakuten": "https://item.rakuten.co.jp/signcity2024/233479/",
    "yahoo": "https://store.shopping.yahoo.co.jp/signcity-yshop/233479.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea="
  },
  {
    "id": "233480",
    "code": "WUHS-10C",
    "name": "TRUSCO 殺菌薬用ハンドソープ 泡タイプ 詰替用1.0L",
    "short": "殺菌薬用泡ハンドソープ 詰替1L",
    "img": "233480.jpg",
    "badge": "殺菌薬用泡／詰替1L",
    "volume": "1.0L",
    "form": "泡タイプ・キャップ付詰替",
    "dirt": "一般的な手洗い・衛生管理",
    "use": "WUHS-05本体を複数置く施設の補充用",
    "check": "泡用ボトルへの適合、詰替時のボトル洗浄・乾燥ルールを確認。",
    "rakuten": "https://item.rakuten.co.jp/signcity2024/233480/",
    "yahoo": "https://store.shopping.yahoo.co.jp/signcity-yshop/233480.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea="
  },
  {
    "id": "233459",
    "code": "TYS-50P-A",
    "name": "TRUSCO まとめ買い 薬用石けん 油汚れ用 50個入",
    "short": "薬用石けん 油汚れ用 50個",
    "img": "233459.jpg",
    "badge": "箱買い／固形50個",
    "volume": "50個入",
    "form": "固形石けん・箱",
    "dirt": "油汚れ",
    "use": "工場・整備拠点への一括配備、災害備蓄の検討",
    "check": "使用期限・後継品・保管環境、共用時の衛生管理を確認。",
    "rakuten": "https://item.rakuten.co.jp/signcity2024/233459/",
    "yahoo": null
  },
  {
    "id": "232700",
    "code": "TAC-ECO-180S",
    "name": "TRUSCO マイルドハンドソープ ECO 18L 詰替 バッグインボックス",
    "short": "マイルドハンドソープECO 18L",
    "img": "232700.jpg",
    "badge": "油汚れ／18L BIB",
    "volume": "18L",
    "form": "天然スクラブ入り・詰替BIB",
    "dirt": "機械油などのガンコな油汚れ",
    "use": "アロエエキス配合タイプを大容量で運用したい工場",
    "check": "コック付属、保管場所、補充容器、約18kgの取り扱いを確認。",
    "rakuten": null,
    "yahoo": "https://store.shopping.yahoo.co.jp/signcity-yshop/232700.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea="
  },
  {
    "id": "232504",
    "code": "PHS-C-A",
    "name": "TRUSCO 薬用パワーハンドソープ 詰替パック 2.0L",
    "short": "薬用パワーハンドソープ 詰替2L",
    "img": "232504.jpg",
    "badge": "油・カーボン・インキ／詰替2L",
    "volume": "2.0L",
    "form": "天然スクラブ入り・詰替",
    "dirt": "機械油、カーボン、インキなど",
    "use": "PHS本体を複数配置する製造・整備現場",
    "check": "PHSシリーズ本体との組み合わせ、詰替時の衛生管理を確認。",
    "rakuten": null,
    "yahoo": "https://store.shopping.yahoo.co.jp/signcity-yshop/232504.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea="
  },
  {
    "id": "232403",
    "code": "KHS-20-A",
    "name": "TRUSCO 薬用超強力ハンドソープ 20L",
    "short": "薬用超強力ハンドソープ 20L",
    "img": "232403.jpg",
    "badge": "塗料・インク／20L",
    "volume": "20L",
    "form": "スクラブ入り・大容量",
    "dirt": "ペンキ、インク、付着直後の2液型塗料など",
    "use": "塗装、印刷、自動車修理、化学工場の大人数運用",
    "check": "対象汚れと使用条件、20L容器の移送・小分け方法を確認。",
    "rakuten": null,
    "yahoo": "https://store.shopping.yahoo.co.jp/signcity-yshop/232403.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea="
  },
  {
    "id": "232503",
    "code": "PHS-25-A",
    "name": "TRUSCO 薬用パワーハンドソープ ポンプボトル 2.5L",
    "short": "薬用パワーハンドソープ 本体2.5L",
    "img": "232503.jpg",
    "badge": "油・カーボン・インキ／本体2.5L",
    "volume": "2.5L",
    "form": "天然スクラブ入り・ポンプ本体",
    "dirt": "機械油、カーボン、インキなど",
    "use": "自動車・機械・印刷工場の常設ボトル",
    "check": "設置スペース、ポンプ、PHS-C-A・PHS-20-Aからの補充運用を確認。",
    "rakuten": null,
    "yahoo": "https://store.shopping.yahoo.co.jp/signcity-yshop/232503.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea="
  },
  {
    "id": "232500",
    "code": "PHS-08C-A",
    "name": "TRUSCO 薬用パワーハンドソープ 袋入詰替 0.8L",
    "short": "薬用パワーハンドソープ 詰替0.8L",
    "img": "232500.jpg",
    "badge": "油・カーボン・インキ／詰替0.8L",
    "volume": "0.8L",
    "form": "天然スクラブ入り・袋詰替",
    "dirt": "機械油、カーボン、インキなど",
    "use": "1L本体を少量ずつ補充したい現場",
    "check": "PHS-10-A本体との適合、発注単位と必要在庫数を確認。",
    "rakuten": null,
    "yahoo": "https://store.shopping.yahoo.co.jp/signcity-yshop/232500.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea="
  },
  {
    "id": "232404",
    "code": "KHS-25-A",
    "name": "TRUSCO 薬用超強力ハンドソープ 2.5L",
    "short": "薬用超強力ハンドソープ 本体2.5L",
    "img": "232404.jpg",
    "badge": "塗料・インク／本体2.5L",
    "volume": "2.5L",
    "form": "スクラブ入り・ポンプ本体",
    "dirt": "ペンキ、インク、付着直後の2液型塗料など",
    "use": "塗装・印刷・整備作業場の常設用",
    "check": "対象汚れ、使用後のすすぎ、KHS-C-Aとの組み合わせを確認。",
    "rakuten": null,
    "yahoo": "https://store.shopping.yahoo.co.jp/signcity-yshop/232404.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea="
  },
  {
    "id": "232405",
    "code": "KHS-C-A",
    "name": "TRUSCO 薬用超強力パワーハンドソープ 詰替パック 2.0L",
    "short": "薬用超強力ハンドソープ 詰替2L",
    "img": "232405.jpg",
    "badge": "塗料・インク／詰替2L",
    "volume": "2.0L",
    "form": "スクラブ入り・詰替",
    "dirt": "ペンキ、インク、付着直後の2液型塗料など",
    "use": "KHS-25-A本体を複数配置する現場",
    "check": "本体適合、補充前の容器管理、異なる製品との混合防止を確認。",
    "rakuten": null,
    "yahoo": "https://store.shopping.yahoo.co.jp/signcity-yshop/232405.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea="
  },
  {
    "id": "232501",
    "code": "PHS-10-A",
    "name": "TRUSCO 薬用パワーハンドソープ ポンプボトル 1.0L",
    "short": "薬用パワーハンドソープ 本体1L",
    "img": "232501.jpg",
    "badge": "油・カーボン・インキ／本体1L",
    "volume": "1.0L",
    "form": "天然スクラブ入り・ポンプ本体",
    "dirt": "機械油、カーボン、インキなど",
    "use": "小規模手洗い場、作業車、分散配置",
    "check": "PHS-08C-A詰替との組み合わせ、転倒しにくい設置場所を確認。",
    "rakuten": null,
    "yahoo": "https://store.shopping.yahoo.co.jp/signcity-yshop/232501.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea="
  },
  {
    "id": "232702",
    "code": "TAC-ECO-25",
    "name": "TRUSCO マイルドハンドソープ ECO 2.5L 本体",
    "short": "マイルドハンドソープECO 本体2.5L",
    "img": "232702.jpg",
    "badge": "油汚れ／本体2.5L",
    "volume": "2.5L",
    "form": "天然スクラブ入り・ポンプ本体",
    "dirt": "機械油などのガンコな油汚れ",
    "use": "機械工場・整備工場の常設用",
    "check": "TAC-ECO-20S詰替との組み合わせ、設置スペースを確認。",
    "rakuten": null,
    "yahoo": "https://store.shopping.yahoo.co.jp/signcity-yshop/232702.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea="
  },
  {
    "id": "232701",
    "code": "TAC-ECO-20S",
    "name": "TRUSCO マイルドハンドソープ ECO 2.0L詰替",
    "short": "マイルドハンドソープECO 詰替2L",
    "img": "232701.jpg",
    "badge": "油汚れ／詰替2L",
    "volume": "2.0L",
    "form": "天然スクラブ入り・詰替",
    "dirt": "機械油などのガンコな油汚れ",
    "use": "TAC-ECO-25本体を複数置く工場",
    "check": "本体適合、補充容器の清掃・乾燥、在庫数を確認。",
    "rakuten": null,
    "yahoo": "https://store.shopping.yahoo.co.jp/signcity-yshop/232701.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea="
  }
];

const faqs: { q: string; a: string }[] = [
  {
    "q": "業務用ハンドソープは何を基準に選べばよいですか？",
    "a": "最初に汚れの種類を分けます。機械油・カーボン・インキ、ペンキ・塗料、一般的な手洗いでは候補が異なります。そのうえで泡・液体・スクラブ・固形、容量、本体と詰替の適合、月間使用量、保管方法を確認します。"
  },
  {
    "q": "18Lと20Lはどちらが得ですか？",
    "a": "容量だけでは判断できません。1回吐出量、使用人数、稼働日数、補充ロス、コックや小分け容器、保管・持ち上げ作業まで含めて比較します。"
  },
  {
    "q": "バッグインボックスとは何ですか？",
    "a": "内袋を段ボール箱に収めた大容量詰替容器です。省スペースで補充しやすい一方、重量、設置台、コック、液漏れ、開封後の管理を確認する必要があります。"
  },
  {
    "q": "工場の機械油にはどのシリーズが候補ですか？",
    "a": "TOS-ECO、TAC-ECO、PHSなどの油汚れ・工業系汚れ向けシリーズが候補です。対象汚れと製品用途はメーカー表示で照合してください。"
  },
  {
    "q": "カーボンやインキ汚れには何を選びますか？",
    "a": "天然石微粒子のスクラブを用いたPHSシリーズが候補です。印刷インキの種類や付着時間によって落ち方が変わるため、現場テストも行います。"
  },
  {
    "q": "ペンキや塗料汚れには何を選びますか？",
    "a": "KHSシリーズが候補です。メーカーはペンキ・インク等の頑固な汚れや、付着直後の一部2液型塗料への用途を示していますが、乾燥・硬化後まで落とせるとは限りません。"
  },
  {
    "q": "TOS-ECOとTAC-ECOの違いは何ですか？",
    "a": "どちらも工業系の油汚れ向けスクラブタイプですが、TOS-ECOはオレンジエキス、TAC-ECOはアロエエキスを特徴とします。現場の使用感とメーカー仕様で選びます。"
  },
  {
    "q": "新・洗手観音はどんな現場に向きますか？",
    "a": "優れた洗浄力と素早いすすぎを重視する、多人数の作業現場が候補です。17kg BIBと1.1L本体・1L詰替を組み合わせられます。"
  },
  {
    "q": "泡タイプと液体タイプはどちらがよいですか？",
    "a": "泡は広げやすく一般手洗いに使いやすい一方、工業系の頑固な油汚れにはスクラブ入り製品が適する場合があります。汚れとディスペンサーの適合を優先します。"
  },
  {
    "q": "薬用ハンドソープなら感染症を防げますか？",
    "a": "薬用は医薬部外品で、医薬品とは異なります。製品表示の範囲で使用し、手洗い手順、乾燥、環境清掃、体調管理などの衛生対策を組み合わせてください。"
  },
  {
    "q": "YHSとWUHSの違いは何ですか？",
    "a": "どちらも泡タイプの薬用ハンドソープですが、配合成分や保湿成分、香り、容量、本体・詰替の組み合わせが異なります。現品表示とメーカー仕様で選びます。"
  },
  {
    "q": "スクラブ入りを毎回使ってもよいですか？",
    "a": "使用頻度や肌状態には個人差があります。製品表示に従い、刺激や手荒れを感じた場合は使用を中止し、社内の衛生担当者や医療専門職へ相談してください。"
  },
  {
    "q": "固形石けんの箱買いはどんな現場に向きますか？",
    "a": "多数の手洗い場に分散配備したい現場や、小規模拠点へ配布したい場合に候補です。共用方法、水切り、保管、交換ルールを決めます。"
  },
  {
    "q": "3個・9個・50個はどう選びますか？",
    "a": "3個は試験導入、9個は複数拠点への小規模配備、50個は一括配備や備蓄の候補です。消費期限・後継品・保管条件を確認します。"
  },
  {
    "q": "本体と詰替は同じシリーズでそろえるべきですか？",
    "a": "原則として製品表示で指定された本体・詰替の組み合わせを選びます。泡用と液体用、異なる粘度や成分を混ぜると、吐出不良や衛生管理上の問題につながります。"
  },
  {
    "q": "違うハンドソープを継ぎ足してもよいですか？",
    "a": "推奨しません。異なる製品を混ぜず、メーカーの詰替手順に従い、必要に応じて容器を洗浄・乾燥してから補充します。"
  },
  {
    "q": "18Lや20Lは何か月使えますか？",
    "a": "使用人数、1日あたり手洗い回数、1回吐出量、稼働日数で変わります。月間使用量を実測し、安全在庫を含めて発注点を決めます。"
  },
  {
    "q": "月間使用量はどう計算しますか？",
    "a": "使用人数×1日あたり手洗い回数×1回吐出量mL×稼働日数÷1000で概算できます。実際の吐出量と廃棄・補充ロスを加味してください。"
  },
  {
    "q": "大容量品はどこに保管すればよいですか？",
    "a": "直射日光や高温・凍結を避け、製品表示に従います。床へ直置きせず、液漏れ時の受け皿、先入れ先出し、管理番号、開封日表示も検討します。"
  },
  {
    "q": "18Lや20Lを一人で持ち上げてもよいですか？",
    "a": "重量物として扱い、無理な持ち上げを避けます。台車、リフター、二人作業、小分け設備など、社内の重量物取扱基準に合わせてください。"
  },
  {
    "q": "コックやポンプは付属しますか？",
    "a": "商品により異なります。BIBでコック付と明記される製品もありますが、購入ページの付属品欄とメーカー情報を必ず確認してください。"
  },
  {
    "q": "楽天市場とYahoo!ショッピングのどちらで買うべきですか？",
    "a": "社内アカウント、ポイント、請求・決済方法、配送条件、キャンペーン、在庫を比較して選びます。この記事では両方ある商品は2つのボタンを並べています。"
  },
  {
    "q": "食品工場でも使えますか？",
    "a": "施設の衛生管理計画、製品の用途表示、香り・成分、異物混入防止、手洗い手順に適合するかを確認します。食品工場向けと一律に断定せず、品質・衛生部門で承認してください。"
  },
  {
    "q": "手洗いブラシを共用してもよいですか？",
    "a": "不適切な管理では二次汚染の原因になり得ます。使用する場合は十分な数をそろえ、洗浄・消毒・乾燥・交換の手順を決めてください。"
  }
];

const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "業務用ハンドソープを箱買いする前に｜18L・20L・薬用・油汚れ用の選び方",
  description:
    "業務用ハンドソープを工場・法人で箱買いするときの汚れ別・容量別・容器別の選び方を解説します。",
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  author: { "@type": "Organization", name: "作業用品ナビ編集部" },
  publisher: { "@type": "Organization", name: "グリーンクロスホールディングス" },
  mainEntityOfPage: PAGE_URL,
  image: `${HERO_BASE}commercial-hand-soap-bulk-hero.jpg`,
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: HOME_URL },
    { "@type": "ListItem", position: 2, name: "記事一覧", item: `${HOME_URL}articles` },
    { "@type": "ListItem", position: 3, name: "業務用ハンドソープの選び方", item: PAGE_URL },
  ],
};

function H2({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2 id={id} className="mb-4 mt-12 scroll-mt-24 border-l-4 border-gray-900 pl-3 text-xl font-bold text-gray-900">
      {children}
    </h2>
  );
}

function AnswerBox({ children }: { children: ReactNode }) {
  return (
    <section className="my-7 rounded-xl border border-gray-300 bg-gray-50 p-5" aria-label="この記事の結論">
      <p className="mb-2 text-sm font-bold text-gray-600">この記事の結論</p>
      <div className="space-y-3 leading-7 text-gray-800">{children}</div>
    </section>
  );
}

function Caution({ title, children }: { title: string; children: ReactNode }) {
  return (
    <aside className="my-6 rounded-xl border border-red-300 bg-red-50 p-5">
      <p className="mb-2 font-bold text-red-900">{title}</p>
      <div className="space-y-2 text-sm leading-7 text-red-950">{children}</div>
    </aside>
  );
}

function Figure({ file, alt, priority = false }: { file: string; alt: string; priority?: boolean }) {
  return (
    <figure className="my-7 overflow-hidden rounded-xl border border-gray-200 bg-white">
      <Image src={`${HERO_BASE}${file}`} alt={alt} width={1200} height={675} priority={priority} className="h-auto w-full" />
    </figure>
  );
}

function StoreButtons({ product }: { product: Product }) {
  const links = [
    product.rakuten ? { label: "楽天市場で見る", url: buildUrl(product.rakuten), className: "bg-[#b60000] hover:bg-[#950000]" } : null,
    product.yahoo ? { label: "Yahoo!ショッピングで見る", url: buildUrl(product.yahoo), className: "bg-[#5b21b6] hover:bg-[#4c1d95]" } : null,
  ].filter(Boolean) as { label: string; url: string; className: string }[];

  return (
    <div className={`mt-4 grid gap-2 ${links.length === 2 ? "sm:grid-cols-2" : "grid-cols-1"}`}>
      {links.map((link) => (
        <a key={link.label} href={link.url} target="_blank" rel="nofollow sponsored" className={`rounded-lg px-3 py-3 text-center text-sm font-bold text-white transition ${link.className}`} aria-label={`${product.short}を${link.label}`}>
          {link.label}
        </a>
      ))}
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="relative aspect-[4/3] bg-gray-50">
        <Image src={`${IMG_BASE}${product.img}`} alt={`${product.short}（${product.code}）の商品画像`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain p-4" />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <span className="mb-2 w-fit rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-700">{product.badge}</span>
        <h3 className="text-base font-bold leading-6 text-gray-900">{product.short}</h3>
        <p className="mt-1 text-xs text-gray-500">型番：{product.code}</p>
        <dl className="mt-4 space-y-2 text-sm leading-6">
          <div><dt className="font-bold text-gray-700">容量・形状</dt><dd className="text-gray-700">{product.volume}／{product.form}</dd></div>
          <div><dt className="font-bold text-gray-700">向く汚れ</dt><dd className="text-gray-700">{product.dirt}</dd></div>
          <div><dt className="font-bold text-gray-700">向く運用</dt><dd className="text-gray-700">{product.use}</dd></div>
          <div><dt className="font-bold text-gray-700">購入前確認</dt><dd className="text-gray-700">{product.check}</dd></div>
        </dl>
        <div className="mt-auto"><StoreButtons product={product} /></div>
      </div>
    </article>
  );
}

function ProductGrid({ ids }: { ids: string[] }) {
  const list = ids.map((id) => products.find((p) => p.id === id)).filter(Boolean) as Product[];
  return <div className="my-6 grid gap-5 md:grid-cols-2">{list.map((p) => <ProductCard key={p.id} product={p} />)}</div>;
}

function TableWrap({ children, label }: { children: ReactNode; label: string }) {
  return <div className="my-6 overflow-x-auto rounded-xl border border-gray-200" role="region" aria-label={label} tabIndex={0}>{children}</div>;
}

function CTA({ title, text, href, label }: { title: string; text: string; href: string; label: string }) {
  return (
    <aside className="my-8 rounded-xl bg-gray-900 p-6 text-white">
      <p className="text-lg font-bold">{title}</p>
      <p className="mt-2 text-sm leading-7 text-gray-200">{text}</p>
      <a href={href} className="mt-4 inline-flex rounded-lg bg-white px-4 py-3 text-sm font-bold text-gray-900 hover:bg-gray-100">{label}</a>
    </aside>
  );
}

const failureItems = [
  "容量が大きいほど得だと考え、半年以上使い切れない量を買う",
  "機械油・カーボン・インキ・塗料・一般汚れを同じ洗浄剤で済ませる",
  "泡用ボトルへスクラブ入り液を補充する",
  "本体と詰替のシリーズ・型番を確認しない",
  "異なる製品を継ぎ足して混ぜる",
  "18L・20Lを床に直置きする",
  "BIBのコックや小分け容器を用意していない",
  "約18〜20kgの容器を一人で無理に持ち上げる",
  "開封日・ロット・補充日を記録しない",
  "使用量を測らず、感覚で毎月発注する",
  "繁忙期・新入社員・季節変動を安全在庫へ反映しない",
  "全拠点へ同じ製品を配り、汚れの違いを無視する",
  "塗料が硬化してからでも必ず落ちると思う",
  "スクラブ入りを一般来客用にも無条件で置く",
  "薬用なら手洗い時間や洗い残しを考えなくてよいと思う",
  "薬用を医薬品と同じ意味だと思う",
  "手荒れ・刺激の報告ルートを決めていない",
  "容器の吐出口・ポンプを清掃しない",
  "共用ブラシを濡れたまま放置する",
  "食品工場で品質・衛生部門の承認を取らない",
  "価格だけで選び、すすぎ時間や水使用量を考慮しない",
  "商品名だけで香り・成分・対象汚れを判断する",
  "楽天とYahoo!の在庫・配送・社内決済条件を比較しない",
  "廃番・後継品・パッケージ変更を確認しない",
  "価格や在庫を記事内へ固定し、更新しない",
];

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 py-10 text-gray-800">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

        <p className="text-sm text-gray-500">公開日：2026年7月22日／作業用品ナビ編集部</p>
        <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900">業務用ハンドソープを箱買いする前に｜18L・20L・薬用・油汚れ用の選び方</h1>
        <p className="mt-5 leading-8">工場や整備現場で業務用ハンドソープを箱買いするとき、「18Lと20Lのどちらがよいか」「油汚れ用と薬用泡タイプをどう分けるか」「本体と詰替の型番を間違えないか」と迷う担当者は少なくありません。大容量品は単価だけで選ぶと、補充できない、保管場所が足りない、汚れに合わない、手洗い場ごとに容器がばらばらになるといった問題が起きます。</p>
        <Figure file="commercial-hand-soap-bulk-hero.jpg" alt="工場の購買担当者が18L・20Lの業務用ハンドソープとポンプ容器を比較するイメージ" priority />

        <AnswerBox>
          <p>業務用ハンドソープの箱買いは、容量より先に<strong>汚れの種類・洗浄方式・本体と詰替の適合・月間使用量・保管方法</strong>を確認します。機械油中心ならTOS-ECO・TAC-ECO・PHS、ペンキやインクなどの頑固汚れはKHS、すすぎ時間を重視する多人数現場は新・洗手観音、一般的な手洗いと衛生管理はYHS・WUHS、固形石けんを分散配備するならTYSが候補です。</p>
          <p>17〜20Lのバッグインボックスは使用量の多い拠点に向きますが、コック、小分け容器、保管台、重量物の取り扱いまで準備してから導入してください。</p>
        </AnswerBox>

        <p className="mb-3 font-bold text-gray-900">まず比較したい代表商品</p>
        <ProductGrid ids={["233076", "232502", "233224", "232403", "233479", "233459"]} />

        <CTA title="汚れと容量から商品を絞り込む" text="先に『何を落とすか』を決めると、18L・20L・2.5L・泡タイプの候補を整理しやすくなります。" href="#dirt-type" label="汚れ別の選び方へ進む" />

        <nav className="my-8 rounded-xl border border-gray-200 p-5" aria-label="記事の目次">
          <p className="mb-3 font-bold text-gray-900">目次</p>
          <ol className="grid gap-2 text-sm md:grid-cols-2">
            {[
              ["selection", "結論｜6つの条件で選ぶ"], ["persona", "箱買いする担当者の課題"], ["dirt-type", "汚れ別の選び方"], ["oil", "油・カーボン・インキ用"], ["paint", "塗料・インク用"], ["quick-rinse", "すすぎ時間を重視"], ["foam", "薬用泡タイプ"], ["solid", "固形石けんの箱買い"], ["capacity", "容量の選び方"], ["bib", "BIBの導入"], ["usage", "使用量と発注点"], ["marketplaces", "楽天・Yahoo!を選ぶ"], ["workplace", "現場別の選定"], ["hand-care", "手荒れ・衛生管理"], ["failures", "よくある失敗"], ["checklist", "法人チェックリスト"], ["faq", "よくある質問"], ["summary", "まとめ"],
            ].map(([id, label]) => <li key={id}><a href={`#${id}`} className="text-blue-700 underline-offset-4 hover:underline">{label}</a></li>)}
          </ol>
        </nav>

        <H2 id="selection">結論｜業務用ハンドソープは6つの条件で選ぶ</H2>
        <TableWrap label="業務用ハンドソープの選定フロー">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-gray-100 text-gray-900"><tr>{["確認項目", "判断内容", "候補"].map((h) => <th key={h} className="border-b px-4 py-3 font-bold">{h}</th>)}</tr></thead>
            <tbody>{[
              ["汚れ", "機械油・カーボン・インキ", "TOS-ECO／TAC-ECO／PHS"],
              ["頑固汚れ", "ペンキ・インク・付着直後の一部塗料", "KHS"],
              ["手洗い回数", "多人数・素早いすすぎを重視", "新・洗手観音"],
              ["一般衛生", "泡での一般手洗い・衛生管理", "YHS／WUHS"],
              ["配備方法", "多数拠点へ固形石けんを配る", "TYS"],
              ["容量", "小規模・分散・集中補充", "0.5〜2.5L／17〜20L BIB"],
            ].map((r) => <tr key={r[0]} className="border-b last:border-b-0">{r.map((c) => <td key={c} className="px-4 py-3 align-top">{c}</td>)}</tr>)}</tbody>
          </table>
        </TableWrap>
        <p className="leading-8">選定の主語は「どの商品が一番強いか」ではなく、現場で付着する汚れと補充運用です。一般手洗い用の泡タイプを、機械油の付いた手に無理に使う必要はありません。逆に、来客や事務所の一般手洗い場へ工業系スクラブ製品を一律配置する必要もありません。</p>

        <H2 id="persona">業務用ハンドソープを箱買いする担当者が抱えやすい課題</H2>
        <p className="leading-8">主な検索者は、工場の購買・総務・安全衛生担当、整備工場長、印刷・塗装部門の責任者、多拠点企業の備品担当です。家庭用と違い、数十〜数百人、複数の手洗い場、月次発注、倉庫在庫、社内の指定モールまで同時に管理します。</p>
        <ul className="mt-4 grid gap-3 md:grid-cols-2">{[
          "従業員数と手洗い回数に合う容量を決めたい",
          "油・カーボン・インキ・塗料に合う製品を分けたい",
          "本体と詰替の型番違いを防ぎたい",
          "18L・20Lを安全に補充できる仕組みを作りたい",
          "楽天市場かYahoo!ショッピングの社内指定に合わせたい",
          "多拠点の標準品と安全在庫を統一したい",
        ].map((x) => <li key={x} className="rounded-lg bg-gray-50 p-4 text-sm leading-6">{x}</li>)}</ul>

        <H2 id="dirt-type">最初に確認するのは容量ではなく「何の汚れか」</H2>
        <Figure file="commercial-hand-soap-dirt-type-comparison.jpg" alt="機械油・カーボン・印刷インキ・塗料・一般汚れに合わせて業務用ハンドソープを選ぶイメージ" />
        <TableWrap label="汚れ別の業務用ハンドソープ比較">
          <table className="min-w-full text-left text-sm"><thead className="bg-gray-100"><tr>{["主な汚れ", "選定方向", "商品候補", "確認事項"].map((h) => <th key={h} className="border-b px-4 py-3 font-bold">{h}</th>)}</tr></thead><tbody>{[
            ["機械油・グリース", "工業系スクラブ入り", "TOS-ECO／TAC-ECO／PHS", "油の種類、使用頻度、肌状態"],
            ["カーボン・印刷インキ", "天然石微粒子スクラブ", "PHS", "インキの種類、付着時間"],
            ["ペンキ・塗料", "超強力タイプ", "KHS", "硬化前後、メーカー用途"],
            ["一般的な手洗い", "薬用泡・ムース", "YHS／WUHS", "本体と詰替、香り、用途"],
            ["多数拠点の油汚れ", "固形石けんを分散", "TYS", "共用・水切り・交換"],
          ].map((r) => <tr key={r[0]} className="border-b last:border-0">{r.map((c) => <td key={c} className="px-4 py-3 align-top">{c}</td>)}</tr>)}</tbody></table>
        </TableWrap>

        <H2 id="oil">機械油・カーボン・インキにはTOS・TAC・PHSを比較する</H2>
        <p className="leading-8">TOS-ECOは天然スクラブとオレンジエキス、TAC-ECOは天然スクラブとアロエエキス、PHSは天然石微粒子のスクラブを特徴とします。機械加工、設備保全、自動車整備、印刷などで、指紋や手のしわへ入り込む工業系汚れを想定する場合の候補です。</p>
        <ProductGrid ids={["233078", "233077", "233076", "232702", "232701", "232700", "232501", "232500", "232503", "232504", "232502"]} />
        <Caution title="スクラブ入り＝すべての現場で最適、ではありません"><p>一般的な手洗い、頻繁な手洗い、肌が敏感な作業者では、使用感や刺激も確認します。メーカー表示に従い、必要に応じて一般手洗い用と工業汚れ用を手洗い場で分けてください。</p></Caution>

        <H2 id="paint">ペンキ・インクなどの頑固汚れにはKHSを検討する</H2>
        <p className="leading-8">KHSシリーズは塗装工事、印刷、自動車修理、化学工場などの手洗い用として案内され、ペンキ・インク等の頑固な汚れが主な対象です。メーカーは一部の2液型ウレタン・エポキシ塗料も手に付いてすぐなら落としやすいとしていますが、硬化後まで除去できると断定しないでください。</p>
        <ProductGrid ids={["232404", "232405", "232403"]} />

        <H2 id="quick-rinse">手洗い回数が多い現場は「洗浄力＋すすぎ時間」を見る</H2>
        <p className="leading-8">従業員数が多い工場では、1回あたり数秒の差が手洗い場の混雑や水使用量へ影響します。新・洗手観音は、優れた洗浄力と素早いすすぎを特徴とするシリーズです。17kg BIBを集中在庫にし、1.1L本体と1L詰替を各手洗い場へ配備する運用を組みやすい点も確認します。</p>
        <ProductGrid ids={["233223", "233222", "233224"]} />

        <H2 id="foam">一般手洗い・共用手洗い場は薬用泡タイプを確認する</H2>
        <p className="leading-8">YHSとWUHSは、工業系の油汚れを落とすスクラブ製品ではなく、飲食店、病院、学校、オフィスなどの一般的な手洗い・衛生管理を想定する泡タイプです。泡ポンプ本体と詰替の組み合わせを確認し、別製品を混ぜない運用にします。</p>
        <Figure file="foam-liquid-scrub-bar-soap-comparison.jpg" alt="泡・液体・スクラブ入り・固形石けんの形状を比較する業務用手洗い場のイメージ" />
        <ProductGrid ids={["233481", "233482", "233479", "233480", "233173"]} />
        <Caution title="薬用ハンドソープだけで衛生管理が完了するわけではありません"><p>薬用は医薬品とは異なります。適切な手洗い時間、指の間や指先まで洗う手順、十分なすすぎと乾燥、環境清掃、体調管理などを組み合わせてください。</p></Caution>

        <H2 id="solid">固形石けんを箱買いするなら3個・9個・50個を使い分ける</H2>
        <p className="leading-8">固形石けんは、各作業場へ少量ずつ配る、災害備蓄を検討する、ポンプ容器を置きにくい場所へ配備するといった運用の候補です。TYSシリーズはオレイン酸Na配合で油汚れ用として案内されています。3個で試し、9個で複数拠点へ配り、標準品として確定後に50個箱を検討する流れが現実的です。</p>
        <ProductGrid ids={["233458", "233460", "233459", "233237"]} />

        <H2 id="capacity">500mL・1L・2L・2.5L・17〜20Lの選び方</H2>
        <Figure file="commercial-hand-soap-capacity-comparison.jpg" alt="500mL・1L・2L・2.5L・17L・18L・20Lの業務用ハンドソープ容量を比較するイメージ" />
        <TableWrap label="業務用ハンドソープの容量比較"><table className="min-w-full text-left text-sm"><thead className="bg-gray-100"><tr>{["容量", "向く運用", "メリット", "注意点"].map((h) => <th key={h} className="border-b px-4 py-3 font-bold">{h}</th>)}</tr></thead><tbody>{[
          ["380〜500mL", "小規模・来客用・試験導入", "置き場所を選びにくい", "補充回数が増える"],
          ["0.8〜1.1L", "各手洗い場への分散配置", "本体と詰替を管理しやすい", "型番違いに注意"],
          ["2〜2.5L", "工場の常設ボトル", "補充頻度を抑えやすい", "設置面積と重量"],
          ["17〜20L", "多数の手洗い場へ集中補充", "発注回数・包装を減らしやすい", "保管・コック・重量物対応"],
          ["固形3〜50個", "拠点配布・備蓄", "小分けしやすい", "共用衛生・水切り"],
        ].map((r) => <tr key={r[0]} className="border-b last:border-0">{r.map((c) => <td key={c} className="px-4 py-3 align-top">{c}</td>)}</tr>)}</tbody></table></TableWrap>

        <H2 id="bib">17〜20Lバッグインボックス導入前の確認事項</H2>
        <Figure file="hand-soap-bag-in-box-refill-operation.jpg" alt="18Lバッグインボックスから業務用ハンドソープを安全に小分け補充する工場のイメージ" />
        <ul className="grid gap-3 md:grid-cols-2">{[
          "コック付属か、別売かを確認する",
          "安定した専用台や棚へ設置する",
          "液漏れ時の受け皿を用意する",
          "小分け容器に製品名と補充日を表示する",
          "古い液へ継ぎ足さず、メーカー手順に従う",
          "重量物として台車・二人作業を検討する",
          "先入れ先出しと開封日管理を行う",
          "複数シリーズのコック・容器を混同しない",
        ].map((x) => <li key={x} className="rounded-lg border border-gray-200 p-4 text-sm leading-6">□ {x}</li>)}</ul>

        <H2 id="usage">月間使用量と発注点を計算する</H2>
        <p className="leading-8">箱買いの数量は、従業員数ではなく実際の吐出量と手洗い回数から決めます。新規導入時は1〜2か月実測し、繁忙期・来訪者・補充ロスを加えます。</p>
        <div className="my-5 rounded-xl bg-gray-100 p-5"><p className="font-bold text-gray-900">月間使用量（L）の概算</p><p className="mt-2 font-mono text-sm">使用人数 × 1日あたり手洗い回数 × 1回吐出量（mL） × 稼働日数 ÷ 1,000</p><p className="mt-3 text-sm leading-7">1回吐出量は製品仕様または実測値を使います。安全在庫は納期、拠点数、季節変動、災害備蓄を考慮して別途設定してください。</p></div>
        <TableWrap label="業務用ハンドソープの発注管理"><table className="min-w-full text-left text-sm"><thead className="bg-gray-100"><tr>{["管理項目", "記録する内容", "判断"].map((h) => <th key={h} className="border-b px-4 py-3 font-bold">{h}</th>)}</tr></thead><tbody>{[
          ["月初在庫", "未開封・開封済みを分ける", "使用可能量を把握"],
          ["月間払出量", "拠点・シリーズ別に記録", "標準使用量を設定"],
          ["納期", "楽天・Yahoo・メーカー取寄を確認", "発注点を決定"],
          ["安全在庫", "繁忙期・災害・欠品を考慮", "最低在庫を決定"],
          ["廃棄・漏れ", "補充ロスと期限切れ", "実質単価を改善"],
        ].map((r) => <tr key={r[0]} className="border-b last:border-0">{r.map((c) => <td key={c} className="px-4 py-3 align-top">{c}</td>)}</tr>)}</tbody></table></TableWrap>

        <H2 id="marketplaces">楽天市場とYahoo!ショッピングの2つの購入ボタンを使い分ける</H2>
        <p className="leading-8">同じ商品を楽天市場とYahoo!ショッピングの両方で販売している場合、カード内に2つのボタンを並べています。会社の購買アカウント、ポイント、決済・請求方法、配送条件、在庫状況に合わせて選択してください。価格・ポイント・在庫は変動するため、記事本文には固定表示しません。</p>
        <div className="my-5 grid gap-4 sm:grid-cols-2"><div className="rounded-xl border border-red-200 p-5"><p className="font-bold text-red-800">楽天市場</p><p className="mt-2 text-sm leading-7">楽天の法人・個人アカウント、ポイント利用、楽天側キャンペーンを重視する場合に選択。</p></div><div className="rounded-xl border border-violet-200 p-5"><p className="font-bold text-violet-800">Yahoo!ショッピング</p><p className="mt-2 text-sm leading-7">Yahoo!側のアカウント、決済、キャンペーン、購買履歴を使う場合に選択。</p></div></div>

        <H2 id="workplace">現場別｜業務用ハンドソープの選び方</H2>
        <TableWrap label="現場別の業務用ハンドソープ候補"><table className="min-w-full text-left text-sm"><thead className="bg-gray-100"><tr>{["現場", "主な汚れ・課題", "候補", "運用の注意"].map((h) => <th key={h} className="border-b px-4 py-3 font-bold">{h}</th>)}</tr></thead><tbody>{[
          ["自動車整備", "エンジン油・グリース", "TOS／TAC／PHS", "一般手洗い用と分ける"],
          ["機械加工・設備保全", "切削油・カーボン", "PHS／TOS／TAC", "作業区画ごとの使用量を計測"],
          ["印刷工場", "インキ", "PHS／KHS", "インキの種類と付着時間を確認"],
          ["塗装・板金", "ペンキ・塗料", "KHS", "硬化前の手洗い手順を標準化"],
          ["多人数工場", "混雑・補充回数", "TSK 17kg／18〜20L", "BIBの補充設備を準備"],
          ["事務所・来客用", "一般手洗い", "YHS／WUHS／TRH", "泡用本体と詰替を統一"],
          ["多拠点配備", "小分け・備蓄", "TYS 9個／50個", "交換・水切りルール"],
        ].map((r) => <tr key={r[0]} className="border-b last:border-0">{r.map((c) => <td key={c} className="px-4 py-3 align-top">{c}</td>)}</tr>)}</tbody></table></TableWrap>

        <H2 id="hand-care">洗浄力だけでなく手荒れ・正しい手洗い・乾燥まで管理する</H2>
        <Figure file="factory-handwashing-station-hygiene.jpg" alt="工場の手洗い場でハンドソープ・ペーパータオル・ブラシの衛生管理を確認するイメージ" />
        <p className="leading-8">強い汚れを落とす製品ほど、すべての作業者へ同じ頻度で使わせればよいとは限りません。製品ラベル、使用頻度、手肌の状態、保湿成分、すすぎを確認し、刺激や異常があれば使用を中止します。正しい手洗いでは手のひらだけでなく、手の甲、指の間、親指、指先、手首まで洗い、十分にすすいで乾燥させます。</p>
        <p className="mt-4 leading-8">ブラシを使う場合は、濡れた共用ブラシを放置しないことが重要です。日本食品衛生協会の手洗い資料でも、爪ブラシは不衛生な取り扱いによって二次汚染の原因になる場合があるため、十分な数を用意し、適宜消毒するなどの管理が必要とされています。</p>

        <H2 id="failures">業務用ハンドソープの箱買いでよくある25の失敗</H2>
        <ol className="grid gap-2 md:grid-cols-2">{failureItems.map((item, index) => <li key={item} className="rounded-lg bg-gray-50 p-4 text-sm leading-6"><span className="mr-2 font-bold text-gray-500">{index + 1}.</span>{item}</li>)}</ol>

        <H2 id="checklist">法人購買・現場配備チェックリスト</H2>
        <Figure file="commercial-hand-soap-procurement-checklist.jpg" alt="法人購買担当者が業務用ハンドソープの在庫・容量・型番をチェックするイメージ" />
        <TableWrap label="業務用ハンドソープの法人購買チェックリスト"><table className="min-w-full text-left text-sm"><thead className="bg-gray-100"><tr>{["区分", "チェック項目", "確認内容"].map((h) => <th key={h} className="border-b px-4 py-3 font-bold">{h}</th>)}</tr></thead><tbody>{[
          ["汚れ", "対象汚れ", "油・カーボン・インキ・塗料・一般汚れ"],
          ["製品", "形状", "泡・液体・スクラブ・固形"],
          ["製品", "本体と詰替", "シリーズ・型番・吐出方式が一致"],
          ["容量", "月間使用量", "人数・回数・吐出量・稼働日数"],
          ["容量", "安全在庫", "納期・繁忙期・災害備蓄"],
          ["設備", "BIB補充", "コック・台・受け皿・小分け容器"],
          ["安全", "重量物", "台車・二人作業・持ち上げ手順"],
          ["衛生", "詰替手順", "混合禁止・容器管理・補充日記録"],
          ["衛生", "ブラシ・乾燥", "洗浄・消毒・乾燥・交換"],
          ["購買", "販売先", "楽天・Yahoo・在庫・決済・配送"],
          ["管理", "現行品", "廃番・後継品・仕様変更"],
          ["記録", "使用実績", "拠点・シリーズ別払出量"],
        ].map((r) => <tr key={r.join("-")} className="border-b last:border-0">{r.map((c) => <td key={c} className="px-4 py-3 align-top">{c}</td>)}</tr>)}</tbody></table></TableWrap>

        <H2 id="faq">よくある質問</H2>
        <div className="space-y-3">{faqs.map((faq) => <details key={faq.q} className="rounded-xl border border-gray-200 bg-white p-4"><summary className="cursor-pointer font-bold text-gray-900">{faq.q}</summary><p className="mt-3 leading-7 text-gray-700">{faq.a}</p></details>)}</div>

        <H2 id="summary">まとめ｜箱買いは「汚れ・本体・使用量」を決めてから</H2>
        <p className="leading-8">業務用ハンドソープは、18Lや20Lという容量だけで選ぶものではありません。機械油・カーボン・インキ、ペンキ・塗料、一般手洗いを分け、本体と詰替の型番、月間使用量、BIBの補充設備、重量物の取り扱いを確認してください。楽天市場とYahoo!ショッピングの両方がある商品は、社内で使いやすい購入先を選べます。</p>
        <CTA title="用途別に商品をもう一度確認する" text="油汚れ用・塗料用・薬用泡・固形石けんを、商品サムネイルと購入先から比較できます。" href="#oil" label="油汚れ用から見直す" />

        <section className="mt-12 border-t border-gray-200 pt-6 text-sm leading-7 text-gray-600">
          <p className="font-bold text-gray-800">参考にした一次情報・公的情報</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li><a className="text-blue-700 underline" href="https://www.orange-book.com/ja/c/series/index.html?seriesCd=7008817" target="_blank" rel="noopener noreferrer">TRUSCO フレッシュハンドソープECO シリーズ</a></li>
            <li><a className="text-blue-700 underline" href="https://www.orange-book.com/ja/c/series/index.html?seriesCd=7008809" target="_blank" rel="noopener noreferrer">TRUSCO 薬用パワーハンドソープ シリーズ</a></li>
            <li><a className="text-blue-700 underline" href="https://www.orange-book.com/ja/c/products/index.html?itemCd=KHS20A++++++++++++++++++++++++4050" target="_blank" rel="noopener noreferrer">TRUSCO 薬用超強力ハンドソープ KHS-20-A</a></li>
            <li><a className="text-blue-700 underline" href="https://www.orange-book.com/ja/c/products/index.html?itemCd=TSK170A+++++++++++++++++++++++4050" target="_blank" rel="noopener noreferrer">TRUSCO 新・洗手観音 TSK-170-A</a></li>
            <li><a className="text-blue-700 underline" href="https://www.orange-book.com/ja/c/products/index.html?itemCd=WUHS05++++++++++++++++++++++++4050" target="_blank" rel="noopener noreferrer">TRUSCO 殺菌薬用ハンドソープ WUHS-05</a></li>
            <li><a className="text-blue-700 underline" href="https://www.orange-book.com/ja/c/products/index.html?itemCd=YHS500A+++++++++++++++++++++++4050" target="_blank" rel="noopener noreferrer">TRUSCO 薬用ハンドソープ YHS-500-A</a></li>
            <li><a className="text-blue-700 underline" href="https://www.n-shokuei.jp/eisei/sfs_tearai.html" target="_blank" rel="noopener noreferrer">公益社団法人日本食品衛生協会 手洗いマニュアル</a></li>
          </ul>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
