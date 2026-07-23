import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";

const SLUG = "factory-breakroom-locker-room-odor-control";
const UTM = "utm_source=sagyou_navi";
const ARTICLE_URL = `https://sagyou-navi.com/articles/${SLUG}`;

function buildUrl(url: string, utm: string): string {
  if (!url) return url;
  const hashIndex = url.indexOf("#");
  const append = (base: string) =>
    `${base}${base.includes("?") ? "&" : "?"}${utm}`;

  if (hashIndex === -1) return append(url);
  return `${append(url.slice(0, hashIndex))}${url.slice(hashIndex)}`;
}

type ShopLink = {
  shop: "rakuten" | "yahoo" | "gc-select";
  url: string;
  label: string;
};

type Product = {
  code: string;
  formalName: string;
  short: string;
  category: string;
  model: string;
  status: string;
  use: string;
  check: string;
  zone: string;
  pack: string;
  size: string;
  img: string;
  links: ShopLink[];
};

type FAQ = {
  question: string;
  answer: string;
};

const products: Product[] = [
  {
    "code": "ta053869-cf200ioz",
    "formalName": "オレンジブック トラスコ中山 ＮＩＣＨＩＤＯ　気化式送風機　［冷風・加湿］　“オゾーン” CF200IOZ                      5026",
    "short": "NICHIDO 気化式送風機 ［冷風・加湿］ “オゾーン” CF200IOZ 5026",
    "category": "大型空間の送風・消臭補助",
    "model": "CF200IOZ",
    "status": "在庫限り販売終了予定。後継CF-200IT-OZを比較（公式在庫13台、2026年6月6日時点）",
    "use": "比較的大きな休憩所・倉庫・作業者待機場所の暑さ、空気のこもり、臭気対策の補助",
    "check": "オゾン・UV-C・給水・清掃・換気・使用環境・樹脂羽根への油分や薬品の影響をメーカー要領で確認",
    "zone": "大型休憩所・倉庫・屋内作業場",
    "pack": "1点",
    "size": "30L・610×410×1012mm（旧型）",
    "img": "/images/factory-breakroom-locker-room-odor-control/ta053869-cf200ioz.jpg",
    "links": [
      {
        "shop": "rakuten",
        "url": "https://item.rakuten.co.jp/crecote-shop/ta053869-cf200ioz/",
        "label": "楽天市場で仕様を確認"
      }
    ]
  },
  {
    "code": "ta053349-sp102w",
    "formalName": "オレンジブック トラスコ中山 ＨｏｔａｌｕＸ　光触媒除菌脱臭機　ＨｏｔａｌｕＸ　ＡＩＲ　ホワイト SP102W                        8633",
    "short": "HｏｔａｌｕX 光触媒除菌脱臭機 HｏｔａｌｕX AIR ホワイト SP102W 8633",
    "category": "空間脱臭・空気ケア",
    "model": "SP-102(W)",
    "status": "メーカー生産終了（2023年12月26日）。販売在庫・保証・後継品を確認",
    "use": "換気と清掃後に残る空間臭の低減や空気ケアを補助",
    "check": "対象空間の広さ、設置位置、フィルター・ランプ等の保守、換気、メーカーが示す対象臭・使用条件を確認",
    "zone": "休憩室・更衣室・トイレ・小部屋",
    "pack": "1点",
    "size": "パーソナルスペース向け小型機",
    "img": "/images/factory-breakroom-locker-room-odor-control/ta053349-sp102w.jpg",
    "links": [
      {
        "shop": "rakuten",
        "url": "https://item.rakuten.co.jp/crecote-shop/ta053349-sp102w/",
        "label": "楽天市場で仕様を確認"
      }
    ]
  },
  {
    "code": "ta052796-klb01",
    "formalName": "オレンジブック トラスコ中山 Ｋａｌｔｅｃｈ　脱臭ＬＥＤ電球ターンドケイ（電球色） KLB01                         2378",
    "short": "Kａｌｔｅｃｈ 脱臭LED電球ターンドケイ（電球色） KLB01 2378",
    "category": "空間脱臭・空気ケア",
    "model": "KL-B01",
    "status": "メーカー現行掲載あり。取付器具・人感センサー・約3か月ごとのフィルター洗浄を確認",
    "use": "換気と清掃後に残る空間臭の低減や空気ケアを補助",
    "check": "対象空間の広さ、設置位置、フィルター・ランプ等の保守、換気、メーカーが示す対象臭・使用条件を確認",
    "zone": "休憩室・更衣室・トイレ・小部屋",
    "pack": "1点",
    "size": "LED電球型／トイレ・玄関等の小スペース向け",
    "img": "/images/factory-breakroom-locker-room-odor-control/ta052796-klb01.jpg",
    "links": [
      {
        "shop": "rakuten",
        "url": "https://item.rakuten.co.jp/crecote-shop/ta052796-klb01/",
        "label": "楽天市場で仕様を確認"
      }
    ]
  },
  {
    "code": "ta017366-tpc3l40",
    "formalName": "オレンジブック トラスコ中山 ＴＲＵＳＣＯ　まとめ買い　不織布使い捨て保護服３Ｌ　（４０着入） TPC-3L-40",
    "short": "まとめ買い 不織布使い捨て保護服3L （40着入） TPC-3L-40",
    "category": "使い捨て保護服",
    "model": "TPC-3L-40",
    "status": "現行状況・在庫・納期を商品ページで確認",
    "use": "清掃や汚れ作業で衣類への付着を抑える一般作業用の使い捨て保護服",
    "check": "化学防護性能を有するとは限らない。対象物質、薬品、火花・高温、破れ、サイズ、廃棄ルールを確認",
    "zone": "臭気源清掃・汚れ作業・設備メンテナンス",
    "pack": "40着",
    "size": "3L",
    "img": "/images/factory-breakroom-locker-room-odor-control/ta017366-tpc3l40.jpg",
    "links": [
      {
        "shop": "rakuten",
        "url": "https://item.rakuten.co.jp/crecote-shop/ta017366-tpc3l40/",
        "label": "楽天市場で仕様を確認"
      }
    ]
  },
  {
    "code": "ta017401-tpcz3l80",
    "formalName": "オレンジブック トラスコ中山 ＴＲＵＳＣＯ　まとめ買い　不織布使い捨て保護服ズボン　３Ｌ　（８０着入） TPC-Z-3L-80",
    "short": "まとめ買い 不織布使い捨て保護服ズボン 3L （80着入） TPC-Z-3L-80",
    "category": "使い捨て保護服",
    "model": "TPC-Z-3L-80",
    "status": "現行状況・在庫・納期を商品ページで確認",
    "use": "臭気源清掃・汚れ作業で下半身の汚れ付着を抑える一般作業用ズボン",
    "check": "化学防護性能を有するとは限らない。対象物質、薬品、火花・高温、破れ、サイズ、廃棄ルールを確認",
    "zone": "臭気源清掃・汚れ作業・設備メンテナンス",
    "pack": "80着",
    "size": "3L",
    "img": "/images/factory-breakroom-locker-room-odor-control/ta017401-tpcz3l80.jpg",
    "links": [
      {
        "shop": "rakuten",
        "url": "https://item.rakuten.co.jp/crecote-shop/ta017401-tpcz3l80/",
        "label": "楽天市場で仕様を確認"
      }
    ]
  },
  {
    "code": "ta017395-tpcll40",
    "formalName": "オレンジブック トラスコ中山 ＴＲＵＳＣＯ　まとめ買い　不織布使い捨て保護服ＬＬ　（４０着入） TPC-LL-40",
    "short": "まとめ買い 不織布使い捨て保護服LL （40着入） TPC-LL-40",
    "category": "使い捨て保護服",
    "model": "TPC-LL-40",
    "status": "現行状況・在庫・納期を商品ページで確認",
    "use": "清掃や汚れ作業で衣類への付着を抑える一般作業用の使い捨て保護服",
    "check": "化学防護性能を有するとは限らない。対象物質、薬品、火花・高温、破れ、サイズ、廃棄ルールを確認",
    "zone": "臭気源清掃・汚れ作業・設備メンテナンス",
    "pack": "40着",
    "size": "LL",
    "img": "/images/factory-breakroom-locker-room-odor-control/ta017395-tpcll40.jpg",
    "links": [
      {
        "shop": "rakuten",
        "url": "https://item.rakuten.co.jp/crecote-shop/ta017395-tpcll40/",
        "label": "楽天市場で仕様を確認"
      }
    ]
  },
  {
    "code": "ta017384-tpcf3l60",
    "formalName": "オレンジブック トラスコ中山 ＴＲＵＳＣＯ　まとめ買い　不織布使い捨て保護服フード付ジャンバー　３Ｌ　６０着入 TPC-F-3L-60",
    "short": "まとめ買い 不織布使い捨て保護服フード付ジャンバー 3L 60着入 TPC-F-3L-60",
    "category": "使い捨て保護服",
    "model": "TPC-F-3L-60",
    "status": "現行状況・在庫・納期を商品ページで確認",
    "use": "臭気源清掃・汚れ作業で上半身・頭部周辺の汚れ付着を抑えるフード付きジャンバー",
    "check": "化学防護性能を有するとは限らない。対象物質、薬品、火花・高温、破れ、サイズ、廃棄ルールを確認",
    "zone": "臭気源清掃・汚れ作業・設備メンテナンス",
    "pack": "60着",
    "size": "3L",
    "img": "/images/factory-breakroom-locker-room-odor-control/ta017384-tpcf3l60.jpg",
    "links": [
      {
        "shop": "rakuten",
        "url": "https://item.rakuten.co.jp/crecote-shop/ta017384-tpcf3l60/",
        "label": "楽天市場で仕様を確認"
      }
    ]
  },
  {
    "code": "ta017405-tpczll80",
    "formalName": "オレンジブック トラスコ中山 ＴＲＵＳＣＯ　まとめ買い　不織布使い捨て保護服ズボン　ＬＬ　（８０着入） TPC-Z-LL-80",
    "short": "まとめ買い 不織布使い捨て保護服ズボン LL （80着入） TPC-Z-LL-80",
    "category": "使い捨て保護服",
    "model": "TPC-Z-LL-80",
    "status": "現行状況・在庫・納期を商品ページで確認",
    "use": "臭気源清掃・汚れ作業で下半身の汚れ付着を抑える一般作業用ズボン",
    "check": "化学防護性能を有するとは限らない。対象物質、薬品、火花・高温、破れ、サイズ、廃棄ルールを確認",
    "zone": "臭気源清掃・汚れ作業・設備メンテナンス",
    "pack": "80着",
    "size": "LL",
    "img": "/images/factory-breakroom-locker-room-odor-control/ta017405-tpczll80.jpg",
    "links": [
      {
        "shop": "rakuten",
        "url": "https://item.rakuten.co.jp/crecote-shop/ta017405-tpczll80/",
        "label": "楽天市場で仕様を確認"
      }
    ]
  },
  {
    "code": "ta017397-tpcm40",
    "formalName": "オレンジブック トラスコ中山 ＴＲＵＳＣＯ　まとめ買い　不織布使い捨て保護服Ｍ　（４０着入） TPC-M-40",
    "short": "まとめ買い 不織布使い捨て保護服M （40着入） TPC-M-40",
    "category": "使い捨て保護服",
    "model": "TPC-M-40",
    "status": "現行状況・在庫・納期を商品ページで確認",
    "use": "清掃や汚れ作業で衣類への付着を抑える一般作業用の使い捨て保護服",
    "check": "化学防護性能を有するとは限らない。対象物質、薬品、火花・高温、破れ、サイズ、廃棄ルールを確認",
    "zone": "臭気源清掃・汚れ作業・設備メンテナンス",
    "pack": "40着",
    "size": "M",
    "img": "/images/factory-breakroom-locker-room-odor-control/ta017397-tpcm40.jpg",
    "links": [
      {
        "shop": "rakuten",
        "url": "https://item.rakuten.co.jp/crecote-shop/ta017397-tpcm40/",
        "label": "楽天市場で仕様を確認"
      }
    ]
  },
  {
    "code": "ta017407-tpczm80",
    "formalName": "オレンジブック トラスコ中山 ＴＲＵＳＣＯ　まとめ買い　不織布使い捨て保護服ズボン　Ｍ　（８０着入） TPC-Z-M-80",
    "short": "まとめ買い 不織布使い捨て保護服ズボン M （80着入） TPC-Z-M-80",
    "category": "使い捨て保護服",
    "model": "TPC-Z-M-80",
    "status": "現行状況・在庫・納期を商品ページで確認",
    "use": "臭気源清掃・汚れ作業で下半身の汚れ付着を抑える一般作業用ズボン",
    "check": "化学防護性能を有するとは限らない。対象物質、薬品、火花・高温、破れ、サイズ、廃棄ルールを確認",
    "zone": "臭気源清掃・汚れ作業・設備メンテナンス",
    "pack": "80着",
    "size": "M",
    "img": "/images/factory-breakroom-locker-room-odor-control/ta017407-tpczm80.jpg",
    "links": [
      {
        "shop": "rakuten",
        "url": "https://item.rakuten.co.jp/crecote-shop/ta017407-tpczm80/",
        "label": "楽天市場で仕様を確認"
      }
    ]
  },
  {
    "code": "ta054017-fzst15202gl1516",
    "formalName": "オレンジブック トラスコ中山 岩崎　エアーリアコンパクト FZST15202GL1516               1331",
    "short": "岩崎 エアーリアコンパクト FZST15202GL1516 1331",
    "category": "空間脱臭・空気ケア",
    "model": "FZST15202GL1516",
    "status": "メーカー現行サポート掲載あり。ランプ交換・設置条件を確認",
    "use": "換気と清掃後に残る空間臭の低減や空気ケアを補助",
    "check": "対象空間の広さ、設置位置、フィルター・ランプ等の保守、換気、メーカーが示す対象臭・使用条件を確認",
    "zone": "休憩室・更衣室・トイレ・小部屋",
    "pack": "1点",
    "size": "100V／GL15×2灯／運転音47.1dB（メーカー公表）",
    "img": "/images/factory-breakroom-locker-room-odor-control/ta054017-fzst15202gl1516.jpg",
    "links": [
      {
        "shop": "rakuten",
        "url": "https://item.rakuten.co.jp/crecote-shop/ta054017-fzst15202gl1516/",
        "label": "楽天市場で仕様を確認"
      }
    ]
  },
  {
    "code": "172506",
    "formalName": "TRUSCO中山 熱中症対策 熱中症対策グッズ 工事現場 現場 トラスコ TRUSCO 靴用除菌消臭スプレー 420ML TSP-SHS420 383-1124",
    "short": "靴用除菌消臭スプレー 420ML TSP-SHS420",
    "category": "靴・ロッカー",
    "model": "TSP-SHS420",
    "status": "現行状況・在庫・納期を商品ページで確認",
    "use": "長時間履く安全靴・作業靴の臭い対策を補助",
    "check": "靴の乾燥、ローテーション、ロッカー換気を先に行い、素材への適合と噴霧後の乾燥を確認",
    "zone": "更衣室・シューズロッカー・安全靴保管場所",
    "pack": "1点",
    "size": "420mL",
    "img": "/images/factory-breakroom-locker-room-odor-control/172506.jpg",
    "links": [
      {
        "shop": "yahoo",
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/172506.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "Yahoo!ショッピングで仕様を確認"
      }
    ]
  },
  {
    "code": "232963",
    "formalName": "TRUSCO中山 トラスコ TRUSCO 除菌薬液たっぷりウェットワイパー大判 30枚 TJYTW-30 251-4669",
    "short": "除菌薬液たっぷりウェットワイパー大判 30枚 TJYTW-30",
    "category": "拭き取り清掃",
    "model": "TJYTW-30",
    "status": "現行状況・在庫・納期を商品ページで確認",
    "use": "手すり・テーブル・ロッカー取手など共用部の拭き取り清掃",
    "check": "対象素材、食品接触面への使用可否、電気機器、薬液成分、使い捨て後の廃棄ルールを確認",
    "zone": "休憩室・更衣室・共用設備",
    "pack": "1点",
    "size": "250×300mm・30枚（メーカー公表）",
    "img": "/images/factory-breakroom-locker-room-odor-control/232963.jpg",
    "links": [
      {
        "shop": "yahoo",
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/232963.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "Yahoo!ショッピングで仕様を確認"
      }
    ]
  },
  {
    "code": "289852",
    "formalName": "TRUSCO中山 熱中症対策 熱中症対策グッズ 工事現場 NICHIDO 気化式送風機 ［冷風・加湿］ オゾーン CF-100I-OZ 522-5505",
    "short": "NICHIDO 気化式送風機 ［冷風・加湿］ オゾーン CF-100I-OZ",
    "category": "大型空間の送風・消臭補助",
    "model": "CF-100I-OZ",
    "status": "現行状況・在庫・納期を商品ページで確認",
    "use": "比較的大きな休憩所・倉庫・作業者待機場所の暑さ、空気のこもり、臭気対策の補助",
    "check": "オゾン・UV-C・給水・清掃・換気・使用環境・樹脂羽根への油分や薬品の影響をメーカー要領で確認",
    "zone": "大型休憩所・倉庫・屋内作業場",
    "pack": "1点",
    "size": "20Lタンク／冷却範囲・風量は商品ページ確認",
    "img": "/images/factory-breakroom-locker-room-odor-control/289852.jpg",
    "links": [
      {
        "shop": "yahoo",
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/289852.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "Yahoo!ショッピングで仕様を確認"
      }
    ]
  },
  {
    "code": "232793",
    "formalName": "TRUSCO中山 トラスコ中山 TRUSCO オレンジブック 衛生 清掃用品 除菌・消臭剤シュアフォレッシュ スプレータイプ 950ML TDDE-1 482-1297",
    "short": "除菌・消臭剤シュアフォレッシュ スプレータイプ 950ML TDDE-1",
    "category": "布・空間用消臭剤",
    "model": "TDDE-1",
    "status": "現行状況・在庫・納期を商品ページで確認",
    "use": "作業着・布製品・空間の気になる臭いの消臭補助",
    "check": "香りによるマスキングだけに頼らず、対象素材、換気、乾燥、従業員の香料配慮、SDS・リスクアセスメントを確認",
    "zone": "休憩室・更衣室・布製品・空間",
    "pack": "1点",
    "size": "950mL",
    "img": "/images/factory-breakroom-locker-room-odor-control/232793.jpg",
    "links": [
      {
        "shop": "yahoo",
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/232793.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "Yahoo!ショッピングで仕様を確認"
      }
    ]
  },
  {
    "code": "171990",
    "formalName": "熱中症対策 熱中症対策グッズ 工事現場 現場 日動 気化式送風機［冷風・加湿］オゾーン CF-290N-OZ 338-4352",
    "short": "日動 気化式送風機［冷風・加湿］オゾーン CF-290N-OZ",
    "category": "大型空間の送風・消臭補助",
    "model": "CF-290N-OZ",
    "status": "現行状況・在庫・納期を商品ページで確認",
    "use": "比較的大きな休憩所・倉庫・作業者待機場所の暑さ、空気のこもり、臭気対策の補助",
    "check": "オゾン・UV-C・給水・清掃・換気・使用環境・樹脂羽根への油分や薬品の影響をメーカー要領で確認",
    "zone": "大型休憩所・倉庫・屋内作業場",
    "pack": "1点",
    "size": "65Lタンク／冷却範囲50～60㎡（メーカー公表）",
    "img": "/images/factory-breakroom-locker-room-odor-control/171990.jpg",
    "links": [
      {
        "shop": "yahoo",
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/171990.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "Yahoo!ショッピングで仕様を確認"
      }
    ]
  },
  {
    "code": "289854",
    "formalName": "TRUSCO中山 熱中症対策 工事現場 NICHIDO 気化式冷風・加湿機 オゾーン300 720×510×1435mm 65L CF-300IT-OZ",
    "short": "NICHIDO 気化式冷風・加湿機 オゾーン300 720×510×1435mm 65L CF-300IT-OZ",
    "category": "大型空間の送風・消臭補助",
    "model": "CF-300IT-OZ",
    "status": "現行状況・在庫・納期を商品ページで確認",
    "use": "比較的大きな休憩所・倉庫・作業者待機場所の暑さ、空気のこもり、臭気対策の補助",
    "check": "オゾン・UV-C・給水・清掃・換気・使用環境・樹脂羽根への油分や薬品の影響をメーカー要領で確認",
    "zone": "大型休憩所・倉庫・屋内作業場",
    "pack": "1点",
    "size": "65L・720×510×1435mm",
    "img": "/images/factory-breakroom-locker-room-odor-control/289854.jpg",
    "links": [
      {
        "shop": "yahoo",
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/289854.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "Yahoo!ショッピングで仕様を確認"
      }
    ]
  },
  {
    "code": "289853",
    "formalName": "TRUSCO中山 熱中症対策 工事現場 NICHIDO 気化式冷風・加湿機 オゾーン200 610×410×1080mm 38L CF-200IT-OZ",
    "short": "NICHIDO 気化式冷風・加湿機 オゾーン200 610×410×1080mm 38L CF-200IT-OZ",
    "category": "大型空間の送風・消臭補助",
    "model": "CF-200IT-OZ",
    "status": "現行状況・在庫・納期を商品ページで確認",
    "use": "比較的大きな休憩所・倉庫・作業者待機場所の暑さ、空気のこもり、臭気対策の補助",
    "check": "オゾン・UV-C・給水・清掃・換気・使用環境・樹脂羽根への油分や薬品の影響をメーカー要領で確認",
    "zone": "大型休憩所・倉庫・屋内作業場",
    "pack": "1点",
    "size": "38L・610×410×1080mm",
    "img": "/images/factory-breakroom-locker-room-odor-control/289853.jpg",
    "links": [
      {
        "shop": "yahoo",
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/289853.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "Yahoo!ショッピングで仕様を確認"
      }
    ]
  },
  {
    "code": "289699",
    "formalName": "TRUSCO中山 熱中症対策 熱中症対策グッズ 工事現場 現場 KYK 仮設トイレ用消臭剤デオブルー1L 41-001 337-3299",
    "short": "KYK 仮設トイレ用消臭剤デオブルー1L 41-001",
    "category": "トイレ・便槽",
    "model": "41-001",
    "status": "現行状況・在庫・納期を商品ページで確認",
    "use": "便槽からの臭気低減を補助",
    "check": "投入量、使用可能な便槽・浄化設備、薬剤混合、換気、保護具、廃棄・くみ取り業者との運用を確認",
    "zone": "仮設トイレ・屋外トイレ",
    "pack": "1点",
    "size": "1L",
    "img": "/images/factory-breakroom-locker-room-odor-control/289699.jpg",
    "links": [
      {
        "shop": "yahoo",
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/289699.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "Yahoo!ショッピングで仕様を確認"
      }
    ]
  }
];
const faqs: FAQ[] = [
  {
    "question": "工場の休憩室や更衣室が臭う原因は何ですか？",
    "answer": "汗を含んだ作業着、安全靴や長靴の湿気、ロッカー内の乾燥不足、飲食物やごみ、排水口、トイレ、喫煙臭、外部から持ち込まれる油・薬品・製造臭などが重なります。最初に発生源、時間帯、場所、換気状態を記録してください。"
  },
  {
    "question": "消臭剤を置くだけで工場の臭いは改善しますか？",
    "answer": "発生源が残っている場合、消臭剤だけでは十分でないことがあります。ごみ・汚れ・濡れた衣類を除去し、洗浄・乾燥・換気を行ったうえで、空間脱臭機や消臭剤を補助的に使います。"
  },
  {
    "question": "工場の製造工程から出る臭いもこの記事の商品で対策できますか？",
    "answer": "本記事は主に休憩室、更衣室、ロッカー、トイレなど従業員スペースを対象にしています。排気口、製造工程、排水から外部へ出る臭気や近隣苦情は、臭気測定、局所排気、脱臭装置、法令確認が必要です。"
  },
  {
    "question": "悪臭防止法は工場内の休憩室にも直接適用されますか？",
    "answer": "悪臭防止法は、規制地域内の工場・事業場から発生し生活環境へ影響する悪臭を対象とし、敷地境界、気体排出口、排出水に基準が設けられます。従業員スペースの快適性とは目的が異なるため、外部臭気と室内臭を分けて管理します。"
  },
  {
    "question": "更衣室の安全靴の臭いはどう減らしますか？",
    "answer": "同じ靴を連日履かず乾燥時間を確保し、中敷き・靴下を交換し、ロッカーを清掃・換気します。靴用除菌消臭スプレーは、靴が乾いた状態で素材への適合を確認して補助的に使います。"
  },
  {
    "question": "濡れた作業着をロッカーに入れてもよいですか？",
    "answer": "湿ったまま密閉すると臭いと微生物増殖の原因になります。汚染区域と清潔区域を分け、持ち帰り・洗濯・乾燥・交換のルールを決めてください。"
  },
  {
    "question": "休憩室で香りの強い消臭剤を使ってもよいですか？",
    "answer": "香りが苦手な従業員や、製造品への移り香が問題になる職場があります。無香・微香を含めて検討し、換気と発生源除去を優先します。"
  },
  {
    "question": "光触媒脱臭機は換気の代わりになりますか？",
    "answer": "換気の代替とは考えないでください。室内の空気を循環して臭い成分を処理する機器でも、二酸化炭素、湿気、熱、化学物質などを屋外へ排出する換気の役割とは異なります。"
  },
  {
    "question": "UV-Cを使う空気循環機器は人がいる場所で使えますか？",
    "answer": "機器内部で紫外線を使用し外部へ漏れない構造など、製品ごとの安全設計と設置条件を確認します。カバーを開けた状態で運転したり、指定外ランプを使ったりしないでください。"
  },
  {
    "question": "オゾン機能付き気化式送風機はどこに置けばよいですか？",
    "answer": "メーカーが指定する屋内条件、換気、周囲温度、給水、油分・薬品の有無、作業者との距離を確認します。小さな密閉室へ自己判断で置かず、広さと運転条件をメーカー資料に合わせてください。"
  },
  {
    "question": "気化式送風機は湿度の高い場所でも有効ですか？",
    "answer": "気化式は水の蒸発を利用するため、高湿度では冷却効果が下がる場合があります。休憩室や倉庫の温湿度を測り、換気や排湿と合わせて効果を確認してください。"
  },
  {
    "question": "旧型CF-200I-OZを購入してもよいですか？",
    "answer": "メーカーは在庫限り販売終了予定とし、後継機CF-200IT-OZを案内しています。2026年6月6日時点の公式在庫表示もあるため、在庫、保証、補修部品、後継品との差を確認してください。"
  },
  {
    "question": "HotaluX AIR SP-102(W)は現行品ですか？",
    "answer": "メーカー公式では2023年12月26日生産終了と案内されています。販売ページに在庫があっても、保証、交換部品、後継品、納期を確認してください。"
  },
  {
    "question": "脱臭LED電球はどの場所に向きますか？",
    "answer": "電球ソケットがあり、トイレや玄関など比較的小さな空間で設置しやすい方式です。器具の形状、口金、周囲温度、密閉器具への対応、人感センサー、清掃方法を確認してください。"
  },
  {
    "question": "トイレの臭いは芳香剤と便槽用消臭剤のどちらで対策しますか？",
    "answer": "室内の表面・換気の問題と、便槽から上がる臭いを分けます。便槽用薬剤は対象設備と投入量を確認し、室内は清掃、換気、排水トラップ、漏れを点検します。"
  },
  {
    "question": "ウェットワイパーで何でも拭いてよいですか？",
    "answer": "素材、電気機器、塗装面、食品接触面、薬液成分を確認します。目立たない場所で試し、汚れを広げないよう清潔面を使い分けます。"
  },
  {
    "question": "布用消臭スプレーを作業着へ使う際の注意点は？",
    "answer": "洗濯の代わりにはなりません。汚れと汗を洗浄・乾燥したうえで、素材適合、香り、肌への接触、SDS、噴霧後の乾燥を確認します。"
  },
  {
    "question": "使い捨て保護服は臭いを防ぐために使えますか？",
    "answer": "清掃・汚れ作業で作業着への付着を抑える補助にはなりますが、すべての臭気物質や薬品から保護する化学防護服ではありません。対象物質と製品仕様を照合してください。"
  },
  {
    "question": "つなぎ、フード付きジャンバー、ズボンはどう選びますか？",
    "answer": "全身の汚れ対策はつなぎ、上半身・頭部周辺はフード付きジャンバー、床・排水・便槽周辺で下半身を重点保護する場合はズボンが候補です。手袋、長靴、保護メガネも作業内容で選びます。"
  },
  {
    "question": "使い捨て保護服のM・LL・3Lは大きめを選べばよいですか？",
    "answer": "大きすぎると裾や袖が機械へ引っ掛かり、小さすぎると屈伸時に破れやすくなります。作業着の上から試着し、身長だけでなく胸囲、股下、動作、手袋・長靴との接続を確認してください。"
  },
  {
    "question": "臭い対策の効果はどう測定しますか？",
    "answer": "発生場所、時間帯、清掃前後、換気運転、機器運転を記録し、複数人で臭気強度を段階評価します。外部への悪臭や苦情がある場合は、専門業者の臭気指数測定を検討してください。"
  },
  {
    "question": "空気清浄機を置く位置はどこがよいですか？",
    "answer": "発生源と人の間、空気が滞留する場所、吸込口・吹出口が塞がれない位置を検討します。換気扇との気流が短絡しないよう、煙などを使わず安全な方法で気流を確認します。"
  },
  {
    "question": "臭いが急に強くなった場合は何を確認しますか？",
    "answer": "排水トラップの封水切れ、漏れ、ごみ、腐敗、空調停止、換気扇故障、濡れた衣類、薬品こぼれ、便槽、設備異常を確認します。刺激臭や体調不良がある場合は退避し、専門部署へ連絡してください。"
  },
  {
    "question": "法人で最低限残す記録は何ですか？",
    "answer": "場所、臭いの種類・強さ、発生時刻、推定発生源、清掃・換気・機器運転、薬剤使用量、苦情、担当者、対策前後の結果、機器のフィルター・ランプ・消耗品交換を残します。"
  }
];
const failureItems: string[] = [
  "臭いの発生源を確認せず、香りの強い芳香剤で覆い隠す",
  "製造工程の排気臭と、休憩室・更衣室の生活臭を同じ対策で処理する",
  "近隣苦情があるのに小型脱臭機だけで対応しようとする",
  "濡れた作業着やタオルを密閉ロッカーへ入れる",
  "安全靴を毎日同じ一足だけ使用し、乾燥時間を確保しない",
  "靴用スプレーを噴霧直後の湿った状態で履く",
  "ロッカーの底、棚板、換気口を清掃しない",
  "トイレ臭の原因が便槽か排水トラップかを分けずに薬剤を入れる",
  "便槽用消臭剤を対象外設備や別薬剤と混ぜる",
  "ウェットワイパーを電気機器や対象外素材へ使用する",
  "布用消臭剤を洗濯の代わりに使う",
  "香料への配慮や製品への移り香を確認しない",
  "空間脱臭機を換気設備の代替と考える",
  "吸込口・吹出口を壁や荷物で塞ぐ",
  "フィルター、光触媒、ランプ、UV装置などの保守時期を管理しない",
  "生産終了品・在庫限り品の保証や補修部品を確認しない",
  "気化式送風機を高湿度環境へ置き、効果検証をしない",
  "オゾン機能付き機器を狭い密閉室で自己判断運転する",
  "油分・薬品が浮遊する場所で樹脂羽根の適合を確認しない",
  "給水タンクや冷却エレメントを清掃せず、臭い源にしてしまう",
  "使い捨て保護服を化学防護服と誤認する",
  "保護服を大きめなら安全と考え、裾や袖の巻き込みを確認しない",
  "使用済み保護服を臭気のある状態で共用ごみ箱に放置する",
  "対策前後の臭い、清掃、換気、苦情を記録しない",
  "従業員の体調不良を『臭いに敏感なだけ』として放置する"
];
const corporateChecklist: string[][] = [
  [
    "対象場所",
    "休憩室／更衣室／ロッカー／トイレ／倉庫",
    "場所ごとに管理責任者を決める"
  ],
  [
    "臭いの種類",
    "汗／靴／衣類／飲食／ごみ／便槽／排水／製造臭",
    "複数の臭いを混同しない"
  ],
  [
    "発生時刻",
    "始業前／休憩後／終業時／夏季／雨天",
    "再現条件を記録"
  ],
  [
    "発生源",
    "濡れ物／靴／ごみ／排水／設備／外気",
    "発生源除去を最優先"
  ],
  [
    "換気",
    "換気扇、給気口、運転時間、フィルター",
    "空気の入口と出口を確認"
  ],
  [
    "清掃",
    "床、ロッカー、テーブル、排水、便器",
    "頻度・薬剤・担当者を明確化"
  ],
  [
    "乾燥",
    "作業着、靴、タオル、清掃用具",
    "密閉保管しない"
  ],
  [
    "小空間機器",
    "LED電球型／小型光触媒／空気循環式",
    "広さ・保守・設置条件"
  ],
  [
    "大型空間機器",
    "気化式送風機／オゾン機能",
    "湿度・換気・給水・使用環境"
  ],
  [
    "薬剤",
    "靴用／布用／便槽用／拭き取り",
    "用途・SDS・混合禁止"
  ],
  [
    "保護具",
    "つなぎ／ジャンバー／ズボン／手袋／長靴",
    "対象作業とサイズ"
  ],
  [
    "電源",
    "100V、コード、アース、漏電、設置位置",
    "水回りは特に確認"
  ],
  [
    "保守",
    "フィルター、ランプ、UV、オゾン装置、冷却材",
    "交換日を台帳化"
  ],
  [
    "現行品",
    "生産終了／在庫限り／後継品",
    "保証・部品・納期を確認"
  ],
  [
    "評価",
    "臭気強度、苦情、清掃時間、使用率",
    "導入前後で比較"
  ],
  [
    "外部臭気",
    "敷地境界、排気口、排水、近隣苦情",
    "専門測定・法令確認へ切り替える"
  ]
];
const referenceSources = [
  {
    "label": "環境省：悪臭防止法の概要",
    "url": "https://www.env.go.jp/air/akushu/low-gaiyo.html",
    "note": "工場・事業場の悪臭、特定悪臭物質、臭気指数、敷地境界・排出口・排出水の規制"
  },
  {
    "label": "厚生労働省：快適な職場環境形成のための指針",
    "url": "https://www.mhlw.go.jp/web/t_doc?dataId=00tb2144&dataType=1&pageNo=1",
    "note": "作業環境管理、作業方法、疲労回復施設等を含む快適職場づくり"
  },
  {
    "label": "厚生労働省：事務所衛生基準規則等の改正通達",
    "url": "https://www.mhlw.go.jp/web/t_doc?dataId=00tc6313&dataType=1&pageNo=1",
    "note": "更衣室、休憩設備、救急対応要領等の運用"
  },
  {
    "label": "日動工業：気化式送風機［冷風・加湿］",
    "url": "https://www.nichido-ind.co.jp/service/spec/cf/",
    "note": "オゾーンシリーズの現行ラインアップと仕様比較"
  },
  {
    "label": "日動工業：CF-200I-OZ公式ページ",
    "url": "https://www.nichido-ind.co.jp/products/sku/2087/",
    "note": "在庫限り販売終了予定、後継CF-200IT-OZ、使用条件・保守品"
  },
  {
    "label": "HotaluX：SP-102(W)公式ページ",
    "url": "https://www.hotalux.com/products/_1833.html?p_encd=06998506",
    "note": "2023年12月26日生産終了を確認"
  },
  {
    "label": "カルテック：KL-B01公式ページ",
    "url": "https://kaltec.co.jp/products/kl-b01/",
    "note": "LED電球型光触媒脱臭機の用途と保守"
  },
  {
    "label": "岩崎電気：エアーリアコンパクト公式ページ",
    "url": "https://www.iwasaki.co.jp/lighting/support/products/detail.php?ItemNo=FZST15202GL15%2F16",
    "note": "100V、GL15×2灯、運転音等の仕様"
  },
  {
    "label": "TRUSCO：シュアフォレッシュ TDDE-1",
    "url": "https://www.orange-book.com/ja/c/products/index.html?itemCd=TDDE1+++++++++++++++++++++++++4050",
    "note": "950mL、布・空間用、用途とリスクアセスメント情報"
  },
  {
    "label": "Google Search Central：AI検索とウェブサイト",
    "url": "https://developers.google.com/search/docs/appearance/ai-features",
    "note": "AI検索でも通常のSEO、クロール可能な本文・リンク、品質を重視"
  },
  {
    "label": "Google Search documentation updates",
    "url": "https://developers.google.com/search/updates",
    "note": "2026年のFAQリッチリザルト廃止を確認"
  }
];
const representativeCodes: string[] = ["ta052796-klb01", "ta054017-fzst15202gl1516", "289852", "289853", "172506", "232793"];

const categoryOrder = [
  "空間脱臭・空気ケア",
  "大型空間の送風・消臭補助",
  "靴・ロッカー",
  "布・空間用消臭剤",
  "拭き取り清掃",
  "トイレ・便槽",
  "使い捨て保護服",
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "工場の休憩室・更衣室・トイレの臭い対策｜原因別の消臭・換気・清掃用品",
  description:
    "工場の休憩室、更衣室、ロッカー、トイレの臭いを、汗・靴・衣類・便槽・空気のこもり別に改善。脱臭機、消臭剤、清掃用品、送風機、使い捨て保護服19商品を比較します。",
  image: [
    `https://sagyou-navi.com/images/${SLUG}/factory-staff-space-odor-control-hero.jpg`,
  ],
  datePublished: "2026-07-23",
  dateModified: "2026-07-23",
  mainEntityOfPage: ARTICLE_URL,
  author: {
    "@type": "Organization",
    name: "作業用品ナビ編集部",
  },
  publisher: {
    "@type": "Organization",
    name: "作業用品ナビ",
    url: "https://sagyou-navi.com/",
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
      item: "https://sagyou-navi.com/",
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
      name: "工場の休憩室・更衣室・トイレの臭い対策",
      item: ARTICLE_URL,
    },
  ],
};

export const metadata: Metadata = {
  title:
    "工場の休憩室・更衣室・トイレの臭い対策｜汗・靴・衣類・便槽を原因別に改善",
  description:
    "工場の休憩室・更衣室・ロッカー・トイレの臭い対策を、汗、作業着、安全靴、飲食物、便槽、排水、空気のこもり別に解説。換気・乾燥・清掃の手順、脱臭機・消臭剤・気化式送風機・使い捨て保護服19商品を比較します。",
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    type: "article",
    url: ARTICLE_URL,
    title:
      "工場の休憩室・更衣室・トイレの臭い対策｜原因別の改善手順",
    description:
      "従業員スペースの臭いを発生源除去、乾燥、清掃、換気、脱臭機器の順で改善する実務ガイド。",
    images: [
      {
        url: `/images/${SLUG}/factory-staff-space-odor-control-hero.jpg`,
        width: 1200,
        height: 675,
        alt: "工場の休憩室・更衣室・トイレの臭いと衛生状態を改善するイメージ",
      },
    ],
  },
};

function getProduct(code: string): Product {
  const product = products.find((item) => item.code === code);
  if (!product) throw new Error(`Product not found: ${code}`);
  return product;
}

function ShopButton({ link }: { link: ShopLink }) {
  return (
    <a
      href={buildUrl(link.url, UTM)}
      target="_blank"
      rel="nofollow sponsored"
      className="inline-flex min-h-11 items-center justify-center rounded-md bg-gray-900 px-4 py-3 text-center text-sm font-bold text-white transition hover:bg-gray-700"
    >
      {link.label}
    </a>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="relative aspect-[4/3] bg-gray-50">
        <Image
          src={product.img}
          alt={`${product.short}の商品画像`}
          fill
          sizes="(max-width: 768px) 100vw, 360px"
          className="object-contain p-4"
        />
      </div>
      <div className="space-y-3 p-5">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-700">
            {product.category}
          </span>
          <span className="rounded-full border border-gray-300 px-3 py-1 text-xs font-bold text-gray-700">
            {product.zone}
          </span>
        </div>
        <h3 className="text-lg font-bold leading-snug text-gray-900">
          {product.short}
        </h3>
        <dl className="grid grid-cols-[5rem_1fr] gap-x-3 gap-y-2 text-sm">
          <dt className="font-bold text-gray-600">型番</dt>
          <dd>{product.model || "商品名参照"}</dd>
          <dt className="font-bold text-gray-600">仕様</dt>
          <dd>{product.size}</dd>
          <dt className="font-bold text-gray-600">販売単位</dt>
          <dd>{product.pack}</dd>
          <dt className="font-bold text-gray-600">用途</dt>
          <dd>{product.use}</dd>
        </dl>
        <p className="rounded-lg bg-gray-50 p-3 text-xs leading-6 text-gray-700">
          <strong>現行状況：</strong>{product.status}
        </p>
        <p className="rounded-lg border border-gray-200 p-3 text-xs leading-6 text-gray-700">
          <strong>購入前確認：</strong>{product.check}
        </p>
        <div className="grid gap-2">
          {product.links.map((link) => (
            <ShopButton key={`${product.code}-${link.shop}`} link={link} />
          ))}
        </div>
        <details className="text-xs text-gray-600">
          <summary className="cursor-pointer font-bold">正式商品名を確認</summary>
          <p className="mt-2 leading-6">{product.formalName}</p>
        </details>
      </div>
    </article>
  );
}

function ProductTableCell({
  product,
  showFormalName = true,
}: {
  product: Product;
  showFormalName?: boolean;
}) {
  const link = product.links[0];
  return (
    <a
      href={buildUrl(link.url, UTM)}
      target="_blank"
      rel="nofollow sponsored"
      className="group flex min-w-[16rem] items-start gap-3 rounded-lg p-1 transition hover:bg-gray-50"
    >
      <span className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-white">
        <Image
          src={product.img}
          alt={`${product.short}の商品画像`}
          fill
          sizes="80px"
          className="object-contain p-1.5 transition group-hover:scale-105"
        />
      </span>
      <span className="min-w-0 space-y-1">
        <span className="block text-sm font-bold leading-snug text-gray-900 underline decoration-2 underline-offset-4 group-hover:text-gray-600">
          {product.short}
        </span>
        <span className="block text-xs font-bold text-gray-500">
          型番：{product.model || "商品名参照"}
        </span>
        {showFormalName ? (
          <span className="block text-xs leading-5 text-gray-500">
            {product.formalName}
          </span>
        ) : null}
      </span>
    </a>
  );
}

function TableWrap({ children }: { children: ReactNode }) {
  return (
    <div className="my-5 overflow-x-auto rounded-xl border border-gray-200">
      {children}
    </div>
  );
}

function Th({ children }: { children: ReactNode }) {
  return (
    <th className="whitespace-nowrap border-b border-gray-300 bg-gray-100 px-4 py-3 text-left text-sm font-bold text-gray-900">
      {children}
    </th>
  );
}

function Td({ children }: { children: ReactNode }) {
  return (
    <td className="min-w-32 border-b border-gray-200 px-4 py-3 align-top text-sm leading-7 text-gray-700">
      {children}
    </td>
  );
}

function AnswerBox({ children }: { children: ReactNode }) {
  return (
    <section className="my-6 rounded-xl border-2 border-gray-900 bg-white p-5 shadow-sm">
      <p className="mb-2 text-sm font-bold text-gray-600">先に結論</p>
      <div className="space-y-3 leading-8 text-gray-800">{children}</div>
    </section>
  );
}

function Caution({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <aside className="my-6 rounded-xl border border-gray-300 bg-gray-50 p-5">
      <p className="font-bold text-gray-900">{title}</p>
      <div className="mt-2 space-y-2 text-sm leading-7 text-gray-700">
        {children}
      </div>
    </aside>
  );
}

function ArticleImage({ file, alt }: { file: string; alt: string }) {
  return (
    <figure className="my-7 overflow-hidden rounded-2xl border border-gray-200">
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

function CategoryTable({ category }: { category: string }) {
  const items = products.filter((product) => product.category === category);
  if (items.length === 0) return null;

  return (
    <section className="mt-8">
      <h3 className="text-lg font-bold text-gray-900">
        {category}（{items.length}商品）
      </h3>
      <TableWrap>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <Th>商品</Th>
              <Th>使用候補</Th>
              <Th>仕様・販売単位</Th>
              <Th>現行状況</Th>
              <Th>購入前確認</Th>
            </tr>
          </thead>
          <tbody>
            {items.map((product) => (
              <tr key={product.code}>
                <Td>
                  <ProductTableCell product={product} />
                </Td>
                <Td>{product.use}</Td>
                <Td>{product.size}／{product.pack}</Td>
                <Td>{product.status}</Td>
                <Td>{product.check}</Td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableWrap>
    </section>
  );
}

export default function Page() {
  const representativeProducts = representativeCodes.map(getProduct);
  const protectiveWear = products.filter(
    (product) => product.category === "使い捨て保護服",
  );

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />

        <nav aria-label="パンくず" className="mb-5 text-sm text-gray-600">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href="/" className="underline underline-offset-4">作業用品ナビ</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/articles" className="underline underline-offset-4">記事一覧</Link></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page">工場の従業員スペースの臭い対策</li>
          </ol>
        </nav>

        <header>
          <p className="text-sm font-bold tracking-wide text-gray-600">
            休憩室・更衣室・ロッカー・トイレ／発生源別の改善手順
          </p>
          <h1 className="mt-3 text-3xl font-black leading-tight text-gray-900 sm:text-4xl">
            工場の休憩室・更衣室・トイレの臭い対策
            <span className="mt-2 block text-xl font-bold sm:text-2xl">
              汗・靴・衣類・便槽を原因別に改善
            </span>
          </h1>
          <p className="mt-4 text-sm text-gray-600">
            公開日・最終更新日：2026年7月23日　｜　執筆：作業用品ナビ編集部
          </p>
        </header>

        <ArticleImage
          file="factory-staff-space-odor-control-hero.jpg"
          alt="工場の休憩室・更衣室・トイレの臭いと衛生状態を改善するイメージ"
        />

        <p className="text-lg leading-9 text-gray-800">
          工場の「臭い対策」といっても、製造工程や排気口から出る臭気と、休憩室・更衣室・ロッカー・トイレにこもる汗、靴、衣類、飲食物、便槽の臭いでは対策が異なります。従業員スペースの臭いは、芳香剤で隠すのではなく、発生源の除去、洗浄、乾燥、換気、空間脱臭の順で改善することが重要です。
        </p>
        <p className="mt-4 text-lg leading-9 text-gray-800">
          本記事では、添付Excelの20行を確認し、完全重複1行を除いた19商品を、空間脱臭、大型送風、靴、布製品、拭き取り、便槽、清掃用保護服に分けました。商品名・型番検索にも対応しながら、判断が完了した位置で商品ページへ移動できる構成です。
        </p>

        <AnswerBox>
          <p>
            <strong>
              工場の休憩室・更衣室・トイレの臭いは、①発生源を分ける、②汚れと濡れ物を除去する、③靴・作業着・清掃用具を乾燥させる、④給気と排気を確保する、⑤残った臭いへ脱臭機・消臭剤を使う、の順で対策します。
            </strong>
          </p>
          <p>
            安全靴には靴用スプレー、布製品には対象素材へ使える消臭剤、共用部には拭き取り用品、便槽臭には専用薬剤、小部屋には光触媒・空気循環機器、大きな休憩所や倉庫には使用条件を満たす送風機を比較します。
          </p>
          <p>
            排気口・製造工程・排水から外部へ出る臭い、近隣苦情、刺激臭や体調不良がある場合は、本記事の商品だけで対応せず、臭気測定、局所排気、脱臭設備、法令確認へ切り替えてください。
          </p>
        </AnswerBox>

        <Caution title="本記事が対象にする臭いと、専門対応が必要な臭いを分けてください">
          <p>
            本記事の主対象は従業員用スペースの生活臭・湿気臭・便槽臭です。環境省の悪臭防止法は、規制地域内の工場・事業場から生活環境へ影響する臭気を対象とし、敷地境界、気体排出口、排出水に基準があります。外部への臭いは専門測定・設備対策が必要です。
          </p>
        </Caution>

        <nav aria-label="記事内目次" className="my-8 rounded-xl border border-gray-200 bg-gray-50 p-5">
          <p className="font-bold text-gray-900">この記事の判断順</p>
          <ol className="mt-3 grid gap-2 text-sm leading-7 sm:grid-cols-2">
            <li><a href="#quick-products" className="underline underline-offset-4">1. 代表商品を先に確認</a></li>
            <li><a href="#diagnosis" className="underline underline-offset-4">2. 臭いの発生源を診断</a></li>
            <li><a href="#steps" className="underline underline-offset-4">3. 改善の優先順位</a></li>
            <li><a href="#space" className="underline underline-offset-4">4. 場所別の対策</a></li>
            <li><a href="#mechanisms" className="underline underline-offset-4">5. 脱臭方式の違い</a></li>
            <li><a href="#products" className="underline underline-offset-4">6. 全19商品の用途別表</a></li>
            <li><a href="#protective-wear" className="underline underline-offset-4">7. 使い捨て保護服サイズ表</a></li>
            <li><a href="#mistakes" className="underline underline-offset-4">8. よくある失敗</a></li>
            <li><a href="#checklist" className="underline underline-offset-4">9. 法人導入チェックリスト</a></li>
            <li><a href="#faq" className="underline underline-offset-4">10. FAQ</a></li>
          </ol>
        </nav>

        <section id="quick-products">
          <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-3 text-xl font-bold text-gray-900">
            前半で確認できる代表商品6点
          </h2>
          <p className="leading-8 text-gray-700">
            小部屋、大型空間、安全靴、布製品の代表商品を前半に配置しています。商品カードの「現行状況」と「購入前確認」を読み、使用場所に合う場合だけ販売ページへ進んでください。
          </p>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {representativeProducts.map((product) => (
              <ProductCard key={product.code} product={product} />
            ))}
          </div>
        </section>

        <section id="diagnosis">
          <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-3 text-xl font-bold text-gray-900">
            まず「どこから・いつ・何の臭いが出るか」を分ける
          </h2>
          <TableWrap>
            <table className="w-full border-collapse">
              <thead>
                <tr><Th>臭いの場所・原因</Th><Th>先に行うこと</Th><Th>補助商品</Th><Th>専門対応への切替</Th></tr>
              </thead>
              <tbody>
                <tr><Td>安全靴・長靴・ロッカー</Td><Td>乾燥、ローテーション、中敷き・靴下交換、ロッカー清掃</Td><Td>靴用除菌消臭スプレー、空間脱臭機</Td><Td>カビ、皮膚症状、薬品付着がある</Td></tr>
                <tr><Td>汗を含んだ作業着・布製品</Td><Td>洗濯、完全乾燥、汚染区域と清潔区域の分離</Td><Td>布・空間用消臭剤</Td><Td>刺激臭、化学物質の付着がある</Td></tr>
                <tr><Td>休憩室の飲食物・ごみ</Td><Td>密閉廃棄、回収頻度、テーブル・床清掃、換気</Td><Td>ウェットワイパー、小型脱臭機</Td><Td>害虫、腐敗、排水逆流がある</Td></tr>
                <tr><Td>トイレ・便槽</Td><Td>便器・床・壁・排水・換気扇を点検</Td><Td>LED電球型脱臭機、便槽用消臭剤</Td><Td>配管漏れ、封水切れ、浄化設備異常</Td></tr>
                <tr><Td>大きな休憩所・倉庫のこもり臭</Td><Td>給気・排気、温湿度、発生源、気流を確認</Td><Td>気化式送風機、空気循環機器</Td><Td>製造臭、VOC、外部苦情、体調不良</Td></tr>
              </tbody>
            </table>
          </TableWrap>

          <ArticleImage
            file="factory-odor-source-diagnosis.jpg"
            alt="工場の休憩室・更衣室・ロッカー・トイレで臭いの発生源を確認するイメージ"
          />
        </section>

        <section id="steps">
          <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-3 text-xl font-bold text-gray-900">
            臭い対策は「除去・乾燥・換気・脱臭」の順で進める
          </h2>
          <ol className="space-y-4">
            {[
              ["発生源を取り除く", "ごみ、汚れた布、濡れた靴、排水の汚れ、薬品こぼれを除去します。"],
              ["洗浄・拭き取りを行う", "床、壁、ロッカー、取手、テーブル、便器、排水口を対象素材に合う方法で清掃します。"],
              ["完全に乾燥させる", "靴、作業着、清掃用具、ロッカー内部へ湿気を残さない運用を作ります。"],
              ["給気と排気を確保する", "換気扇だけでなく空気の入口を確認し、ショートサーキットや滞留を防ぎます。"],
              ["残留臭へ脱臭機・消臭剤を使う", "対象空間、臭い、広さ、保守、香り、使用条件を比較します。"],
              ["効果を記録する", "時間帯別の臭気強度、苦情、清掃時間、消耗品交換を記録します。"],
            ].map(([title, text], index) => (
              <li key={title} className="grid grid-cols-[2.5rem_1fr] gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 font-bold text-white">{index + 1}</span>
                <div><h3 className="font-bold text-gray-900">{title}</h3><p className="mt-1 leading-7 text-gray-700">{text}</p></div>
              </li>
            ))}
          </ol>
        </section>

        <section id="space">
          <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-3 text-xl font-bold text-gray-900">
            休憩室・更衣室・トイレ・倉庫の場所別対策
          </h2>
          <TableWrap>
            <table className="w-full border-collapse">
              <thead><tr><Th>場所</Th><Th>起こりやすい問題</Th><Th>運用</Th><Th>商品選定</Th></tr></thead>
              <tbody>
                <tr><Td>更衣室・ロッカー</Td><Td>汗、濡れた衣類、靴、湿気、密閉</Td><Td>汚れ物分離、乾燥、ローテーション、ロッカー清掃</Td><Td>靴用スプレー、小型空間脱臭</Td></tr>
                <tr><Td>休憩室</Td><Td>飲食、ごみ、体臭、喫煙臭、空調のこもり</Td><Td>ごみ回収、拭き取り、換気、座席・布製品清掃</Td><Td>ウェットワイパー、布・空間用消臭剤、空気ケア機器</Td></tr>
                <tr><Td>トイレ</Td><Td>便器・床・壁、排水、便槽、換気不足</Td><Td>原因別清掃、排水・換気点検、便槽管理</Td><Td>LED電球型脱臭機、便槽用消臭剤</Td></tr>
                <tr><Td>大型休憩所・倉庫</Td><Td>空気滞留、高温、湿気、広い空間</Td><Td>給排気、気流、温湿度、発生源の配置を改善</Td><Td>気化式送風機・空気循環機器</Td></tr>
                <tr><Td>臭気源清掃・設備保全</Td><Td>汚れ・液体・臭気の衣類付着</Td><Td>作業手順、隔離、廃棄、手洗い、保護具</Td><Td>用途に合う使い捨て保護服</Td></tr>
              </tbody>
            </table>
          </TableWrap>

          <ArticleImage
            file="factory-locker-room-shoe-clothing-drying.jpg"
            alt="工場の更衣室で安全靴と作業着を分けて乾燥・保管するイメージ"
          />
        </section>

        <section id="mechanisms">
          <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-3 text-xl font-bold text-gray-900">
            換気・消臭剤・光触媒・UV-C・オゾンの違い
          </h2>
          <TableWrap>
            <table className="w-full border-collapse">
              <thead><tr><Th>方式</Th><Th>役割</Th><Th>向く場面</Th><Th>注意点</Th></tr></thead>
              <tbody>
                <tr><Td>換気</Td><Td>室内の空気・湿気・熱・一部汚染物質を外へ排出</Td><Td>すべての従業員スペースの基本</Td><Td>給気口がない、排気が短絡する、外部臭を取り込む場合がある</Td></tr>
                <tr><Td>洗浄・拭き取り</Td><Td>臭いの元となる汚れを表面から除去</Td><Td>テーブル、床、ロッカー、取手</Td><Td>対象素材、薬液、電気機器、食品接触面を確認</Td></tr>
                <tr><Td>消臭剤</Td><Td>対象臭の低減を補助</Td><Td>靴、布、空間、便槽</Td><Td>用途外使用、香り、薬剤混合、SDSを確認</Td></tr>
                <tr><Td>光触媒</Td><Td>機器内の触媒で臭い成分を処理する方式</Td><Td>小部屋、トイレ、休憩室</Td><Td>空間の広さ、保守、換気の代替ではない</Td></tr>
                <tr><Td>UV-C空気循環</Td><Td>機器内部で空気を循環し処理</Td><Td>休憩室・更衣室等の空気ケア</Td><Td>ランプ交換、カバー、安全機構、設置条件</Td></tr>
                <tr><Td>オゾン機能付き送風</Td><Td>送風・気化冷却に消臭・除菌機能を付加</Td><Td>メーカー条件に合う比較的大きな屋内空間</Td><Td>換気、濃度、密閉空間、油分・薬品、給水・保守を確認</Td></tr>
              </tbody>
            </table>
          </TableWrap>

          <Caution title="『除菌』『脱臭』の表示だけで、すべての臭い・菌・ウイルスへの効果を断定しない">
            <p>試験条件、対象、空間の広さ、使用時間、実使用環境は製品ごとに異なります。可視本文ではメーカーが確認できる範囲を超えて効果を拡大解釈せず、換気・清掃の代替とも書きません。</p>
          </Caution>

          <ArticleImage
            file="factory-small-room-deodorizer-comparison.jpg"
            alt="LED電球型・小型光触媒・空気循環式脱臭機を比較するイメージ"
          />
        </section>

        <section id="products">
          <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-3 text-xl font-bold text-gray-900">
            添付Excel全19商品を用途別に確認
          </h2>
          <p className="leading-8 text-gray-700">
            完全重複だったHotaluX AIRの1行は統合し、同じ商品を二重掲載していません。生産終了品、在庫限り品は削除せず、現行状況を明示して販売ページへ送客します。
          </p>
          {categoryOrder.map((category) => (
            <CategoryTable key={category} category={category} />
          ))}

          <ArticleImage
            file="factory-large-rest-area-evaporative-airflow.jpg"
            alt="工場の大型休憩所や倉庫で気化式送風機の給水・換気・配置を確認するイメージ"
          />
        </section>

        <section id="protective-wear">
          <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-3 text-xl font-bold text-gray-900">
            臭気源の清掃・汚れ作業に使う使い捨て保護服のサイズ・形状表
          </h2>
          <p className="leading-8 text-gray-700">
            不織布使い捨て保護服は、作業着への汚れ付着を抑える一般作業用の補助です。毒性の高い化学物質、蒸気・ガス、火花、高温などに対する化学防護性能を商品名だけで判断しないでください。
          </p>
          <TableWrap>
            <table className="w-full border-collapse">
              <thead><tr><Th>商品</Th><Th>形状</Th><Th>サイズ</Th><Th>箱入数</Th><Th>選び方</Th></tr></thead>
              <tbody>
                {protectiveWear.map((product) => (
                  <tr key={product.code}>
                    <Td>
                      <ProductTableCell product={product} showFormalName={false} />
                    </Td>
                    <Td>{product.formalName.includes("ズボン") ? "ズボン" : product.formalName.includes("フード付ジャンバー") ? "フード付きジャンバー" : "つなぎ型"}</Td>
                    <Td>{product.size}</Td>
                    <Td>{product.pack}</Td>
                    <Td>{product.check}</Td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableWrap>

          <ArticleImage
            file="factory-odor-cleaning-disposable-protective-wear.jpg"
            alt="工場の臭気源清掃で使い捨て保護服・手袋・長靴を確認するイメージ"
          />
        </section>

        <section id="mistakes">
          <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-3 text-xl font-bold text-gray-900">
            工場の臭い・衛生対策でよくある失敗25項目
          </h2>
          <ol className="mt-5 grid gap-3">
            {failureItems.map((item, index) => (
              <li key={item} className="grid grid-cols-[2.5rem_1fr] gap-3 rounded-lg border border-gray-200 p-4">
                <span className="font-black text-gray-500">{String(index + 1).padStart(2, "0")}</span>
                <span className="leading-7 text-gray-700">{item}</span>
              </li>
            ))}
          </ol>

          <ArticleImage
            file="factory-deodorizer-maintenance-check.jpg"
            alt="工場の脱臭機・換気扇・給水タンク・フィルターの清掃と交換を確認するイメージ"
          />
        </section>

        <section id="checklist">
          <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-3 text-xl font-bold text-gray-900">
            総務・安全衛生・設備・購買で共有する導入チェックリスト
          </h2>
          <TableWrap>
            <table className="w-full border-collapse">
              <thead><tr><Th>確認項目</Th><Th>記入内容</Th><Th>判定ポイント</Th></tr></thead>
              <tbody>
                {corporateChecklist.map(([item, value, point]) => (
                  <tr key={item}><Td>{item}</Td><Td>{value}</Td><Td>{point}</Td></tr>
                ))}
              </tbody>
            </table>
          </TableWrap>

          <ArticleImage
            file="factory-odor-control-procurement-checklist.jpg"
            alt="工場の総務・安全衛生・設備・購買担当が臭い対策用品を選定するイメージ"
          />
        </section>

        <section id="related">
          <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-3 text-xl font-bold text-gray-900">
            関連記事
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/articles/commercial-hand-soap-bulk-selection" className="rounded-xl border border-gray-200 p-4 font-bold text-gray-900 hover:bg-gray-50">
              業務用ハンドソープの箱買い・大容量選び
            </Link>
            <Link href="/articles" className="rounded-xl border border-gray-200 p-4 font-bold text-gray-900 hover:bg-gray-50">
              作業用品ナビの記事一覧を見る
            </Link>
          </div>
        </section>

        <section id="faq">
          <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-3 text-xl font-bold text-gray-900">
            工場の休憩室・更衣室・トイレの臭い対策FAQ
          </h2>
          <div className="divide-y divide-gray-200 rounded-xl border border-gray-200">
            {faqs.map((faq) => (
              <details key={faq.question} className="group p-5">
                <summary className="cursor-pointer list-none pr-8 font-bold leading-7 text-gray-900">{faq.question}</summary>
                <p className="mt-3 leading-8 text-gray-700">{faq.answer}</p>
              </details>
            ))}
          </div>
          <p className="mt-4 text-xs leading-6 text-gray-500">
            FAQは検索者とAI検索が内容を理解しやすい可視本文として掲載しています。Googleは2026年5月にFAQリッチリザルトを廃止したため、FAQPage構造化データは実装していません。
          </p>
        </section>

        <section id="references">
          <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-3 text-xl font-bold text-gray-900">
            一次情報・公式情報
          </h2>
          <ul className="space-y-3">
            {referenceSources.map((source) => (
              <li key={source.url} className="rounded-lg border border-gray-200 p-4">
                <a href={source.url} target="_blank" rel="noopener noreferrer" className="font-bold text-gray-900 underline underline-offset-4">{source.label}</a>
                <p className="mt-1 text-sm leading-7 text-gray-600">{source.note}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="summary">
          <h2 className="mb-4 mt-10 border-l-4 border-gray-900 pl-3 text-xl font-bold text-gray-900">
            まとめ：臭いの元を取り除いた後に、場所に合う商品を選ぶ
          </h2>
          <p className="leading-8 text-gray-700">
            工場の休憩室・更衣室・トイレの臭いは、汗、靴、衣類、飲食物、排水、便槽、湿気、空気の滞留を分けることで対策しやすくなります。発生源除去、洗浄、乾燥、換気を先に行い、残留臭へ空間脱臭機、消臭剤、送風機を使います。
          </p>
          <p className="mt-3 leading-8 text-gray-700">
            生産終了のHotaluX AIR、在庫限り予定のCF-200I-OZなど、商品ページが残っていても現行状況の確認が必要な商品があります。本記事の状態表示と購入前確認を読み、保証、補修部品、後継品まで確認して発注してください。
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <a href="#quick-products" className="inline-flex min-h-12 items-center justify-center rounded-md bg-gray-900 px-5 py-3 text-center font-bold text-white hover:bg-gray-700">代表商品6点を見直す</a>
            <a href="#products" className="inline-flex min-h-12 items-center justify-center rounded-md border-2 border-gray-900 bg-white px-5 py-3 text-center font-bold text-gray-900 hover:bg-gray-50">全19商品の用途別表を見る</a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
