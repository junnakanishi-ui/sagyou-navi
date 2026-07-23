import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";

const SLUG = "magnetic-kitchen-panel-size-selection";
const UTM = "utm_source=sagyou_navi";
const ARTICLE_URL = `https://sagyou-navi.com/articles/${SLUG}`;

function buildUrl(url: string, utm: string): string {
  if (!url) return url;
  const h = url.indexOf("#");
  const append = (base: string) =>
    `${base}${base.includes("?") ? "&" : "?"}${utm}`;
  if (h === -1) return append(url);
  return `${append(url.slice(0, h))}${url.slice(h)}`;
}

type ShopLink = {
  shop: "rakuten" | "yahoo" | "gc-select";
  url: string;
  label: string;
};

type Product = {
  code: string;
  family: "jfe" | "magpita" | "kit" | "blavo" | "magschale" | "other";
  formalName: string;
  short: string;
  img: string;
  sourceImageUrl: string;
  size: string;
  color: string;
  pack: string;
  badge: string;
  use: string;
  check: string;
  currentNote: string;
  links: ShopLink[];
};

type FAQ = { question: string; answer: string };

const products: Product[] = [
  {
    "code": "156229",
    "family": "jfe",
    "formalName": "ホーロー キッチンパネル JFE 0.5mm厚 3X6 (890X1800mm) ピュアホワイト W-970-SM バラ 内装 キッチン 厨房 （個人宅配送不可）",
    "short": "JFE W-970-SM 3×6 バラ",
    "img": "/images/magnetic-kitchen-panel-size-selection/156229.jpg",
    "sourceImageUrl": "https://item-shopping.c.yimg.jp/i/n/signcity-yshop_156229_i_20230705110238",
    "size": "3×6（890×1800mm）",
    "color": "ピュアホワイト W-970-SM",
    "pack": "バラ（1枚）",
    "badge": "薄型ホーローパネル",
    "use": "キッチン・厨房・洗面など、薄い仕上げ材でマグネットが使える壁面を作りたい場所",
    "check": "個人宅配送不可。搬入経路、下地、接着剤・施工方法を購入前に確認",
    "currentNote": "",
    "links": [
      {
        "shop": "yahoo",
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/156229.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "Yahoo!ショッピングで仕様を確認"
      }
    ]
  },
  {
    "code": "156231",
    "family": "jfe",
    "formalName": "ホーロー キッチンパネル JFE 0.5mm厚 3X8 (890X2400mm) ピュアホワイト W-970-SM バラ 内装 キッチン 厨房 （個人宅配送不可）",
    "short": "JFE W-970-SM 3×8 バラ",
    "img": "/images/magnetic-kitchen-panel-size-selection/156231.jpg",
    "sourceImageUrl": "https://item-shopping.c.yimg.jp/i/n/signcity-yshop_156231_i_20230705110242",
    "size": "3×8（890×2400mm）",
    "color": "ピュアホワイト W-970-SM",
    "pack": "バラ（1枚）",
    "badge": "薄型ホーローパネル",
    "use": "キッチン・厨房・洗面など、薄い仕上げ材でマグネットが使える壁面を作りたい場所",
    "check": "個人宅配送不可。搬入経路、下地、接着剤・施工方法を購入前に確認",
    "currentNote": "",
    "links": [
      {
        "shop": "yahoo",
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/156231.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "Yahoo!ショッピングで仕様を確認"
      }
    ]
  },
  {
    "code": "156237",
    "family": "jfe",
    "formalName": "ホーロー キッチンパネル JFE 0.5mm厚 3X6 (890X1800mm) クールホワイト W-931-SM バラ 内装 キッチン 厨房 （個人宅配送不可）",
    "short": "JFE W-931-SM 3×6 バラ",
    "img": "/images/magnetic-kitchen-panel-size-selection/156237.jpg",
    "sourceImageUrl": "https://item-shopping.c.yimg.jp/i/n/signcity-yshop_156237_i_20230705110256",
    "size": "3×6（890×1800mm）",
    "color": "クールホワイト W-931-SM",
    "pack": "バラ（1枚）",
    "badge": "薄型ホーローパネル",
    "use": "キッチン・厨房・洗面など、薄い仕上げ材でマグネットが使える壁面を作りたい場所",
    "check": "個人宅配送不可。搬入経路、下地、接着剤・施工方法を購入前に確認。W-931-SMはメーカー現行色掲載との差異があるため在庫・後継色を確認",
    "currentNote": "現行色・後継色を確認",
    "links": [
      {
        "shop": "yahoo",
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/156237.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "Yahoo!ショッピングで仕様を確認"
      }
    ]
  },
  {
    "code": "156245",
    "family": "jfe",
    "formalName": "ホーロー キッチンパネル JFE 0.5mm厚 3X6 (890X1800mm) クリーミーホワイト W-455-SM バラ 内装 キッチン 厨房 （個人宅配送不可）",
    "short": "JFE W-455-SM 3×6 バラ",
    "img": "/images/magnetic-kitchen-panel-size-selection/156245.jpg",
    "sourceImageUrl": "https://item-shopping.c.yimg.jp/i/n/signcity-yshop_156245_i_20230705105927",
    "size": "3×6（890×1800mm）",
    "color": "クリーミーホワイト W-455-SM",
    "pack": "バラ（1枚）",
    "badge": "薄型ホーローパネル",
    "use": "キッチン・厨房・洗面など、薄い仕上げ材でマグネットが使える壁面を作りたい場所",
    "check": "個人宅配送不可。搬入経路、下地、接着剤・施工方法を購入前に確認",
    "currentNote": "",
    "links": [
      {
        "shop": "yahoo",
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/156245.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "Yahoo!ショッピングで仕様を確認"
      }
    ]
  },
  {
    "code": "156230",
    "family": "jfe",
    "formalName": "ホーロー キッチンパネル JFE 0.5mm厚 3X6 (890X1800mm) ピュアホワイト W-970-SM 2枚 内装 キッチン 厨房 （個人宅配送不可）",
    "short": "JFE W-970-SM 3×6 2枚",
    "img": "/images/magnetic-kitchen-panel-size-selection/156230.jpg",
    "sourceImageUrl": "https://item-shopping.c.yimg.jp/i/n/signcity-yshop_156230_i_20230705110240",
    "size": "3×6（890×1800mm）",
    "color": "ピュアホワイト W-970-SM",
    "pack": "2枚",
    "badge": "薄型ホーローパネル",
    "use": "キッチン・厨房・洗面など、薄い仕上げ材でマグネットが使える壁面を作りたい場所",
    "check": "個人宅配送不可。搬入経路、下地、接着剤・施工方法を購入前に確認",
    "currentNote": "",
    "links": [
      {
        "shop": "yahoo",
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/156230.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "Yahoo!ショッピングで仕様を確認"
      }
    ]
  },
  {
    "code": "156233",
    "family": "jfe",
    "formalName": "ホーロー キッチンパネル JFE 0.5mm厚 4X6 (1219X1800mm) ピュアホワイト W-970-SM バラ 内装 キッチン 厨房 （個人宅配送不可）",
    "short": "JFE W-970-SM 4×6 バラ",
    "img": "/images/magnetic-kitchen-panel-size-selection/156233.jpg",
    "sourceImageUrl": "https://item-shopping.c.yimg.jp/i/n/signcity-yshop_156233_i_20230705110247",
    "size": "4×6（1219×1800mm）",
    "color": "ピュアホワイト W-970-SM",
    "pack": "バラ（1枚）",
    "badge": "薄型ホーローパネル",
    "use": "キッチン・厨房・洗面など、薄い仕上げ材でマグネットが使える壁面を作りたい場所",
    "check": "個人宅配送不可。搬入経路、下地、接着剤・施工方法を購入前に確認。4×6はメーカー現行標準掲載との差異があるため現行可否を確認",
    "currentNote": "メーカー現行標準サイズとの差異を確認",
    "links": [
      {
        "shop": "yahoo",
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/156233.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "Yahoo!ショッピングで仕様を確認"
      }
    ]
  },
  {
    "code": "156234",
    "family": "jfe",
    "formalName": "ホーロー キッチンパネル JFE 0.5mm厚 4X6 (1219X1800mm) ピュアホワイト W-970-SM 2枚 内装 キッチン 厨房 （個人宅配送不可）",
    "short": "JFE W-970-SM 4×6 2枚",
    "img": "/images/magnetic-kitchen-panel-size-selection/156234.jpg",
    "sourceImageUrl": "https://item-shopping.c.yimg.jp/i/n/signcity-yshop_156234_i_20230705110249",
    "size": "4×6（1219×1800mm）",
    "color": "ピュアホワイト W-970-SM",
    "pack": "2枚",
    "badge": "薄型ホーローパネル",
    "use": "キッチン・厨房・洗面など、薄い仕上げ材でマグネットが使える壁面を作りたい場所",
    "check": "個人宅配送不可。搬入経路、下地、接着剤・施工方法を購入前に確認。4×6はメーカー現行標準掲載との差異があるため現行可否を確認",
    "currentNote": "メーカー現行標準サイズとの差異を確認",
    "links": [
      {
        "shop": "yahoo",
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/156234.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "Yahoo!ショッピングで仕様を確認"
      }
    ]
  },
  {
    "code": "156235",
    "family": "jfe",
    "formalName": "ホーロー キッチンパネル JFE 0.5mm厚 4X8 (1219X2400mm) ピュアホワイト W-970-SM バラ 内装 キッチン 厨房 （個人宅配送不可）",
    "short": "JFE W-970-SM 4×8 バラ",
    "img": "/images/magnetic-kitchen-panel-size-selection/156235.jpg",
    "sourceImageUrl": "https://item-shopping.c.yimg.jp/i/n/signcity-yshop_156235_i_20230705110251",
    "size": "4×8（1219×2400mm）",
    "color": "ピュアホワイト W-970-SM",
    "pack": "バラ（1枚）",
    "badge": "薄型ホーローパネル",
    "use": "キッチン・厨房・洗面など、薄い仕上げ材でマグネットが使える壁面を作りたい場所",
    "check": "個人宅配送不可。搬入経路、下地、接着剤・施工方法を購入前に確認",
    "currentNote": "",
    "links": [
      {
        "shop": "yahoo",
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/156235.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "Yahoo!ショッピングで仕様を確認"
      }
    ]
  },
  {
    "code": "156236",
    "family": "jfe",
    "formalName": "ホーロー キッチンパネル JFE 0.5mm厚 4X8 (1219X2400mm) ピュアホワイト W-970-SM 2枚 内装 キッチン 厨房 （個人宅配送不可）",
    "short": "JFE W-970-SM 4×8 2枚",
    "img": "/images/magnetic-kitchen-panel-size-selection/156236.jpg",
    "sourceImageUrl": "https://item-shopping.c.yimg.jp/i/n/signcity-yshop_156236_i_20230705110254",
    "size": "4×8（1219×2400mm）",
    "color": "ピュアホワイト W-970-SM",
    "pack": "2枚",
    "badge": "薄型ホーローパネル",
    "use": "キッチン・厨房・洗面など、薄い仕上げ材でマグネットが使える壁面を作りたい場所",
    "check": "個人宅配送不可。搬入経路、下地、接着剤・施工方法を購入前に確認",
    "currentNote": "",
    "links": [
      {
        "shop": "yahoo",
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/156236.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "Yahoo!ショッピングで仕様を確認"
      }
    ]
  },
  {
    "code": "156244",
    "family": "jfe",
    "formalName": "ホーロー キッチンパネル JFE 0.5mm厚 4X8 (1219X2400mm) クールホワイト W-931-SM 2枚 内装 キッチン 厨房 （個人宅配送不可）",
    "short": "JFE W-931-SM 4×8 2枚",
    "img": "/images/magnetic-kitchen-panel-size-selection/156244.jpg",
    "sourceImageUrl": "https://item-shopping.c.yimg.jp/i/n/signcity-yshop_156244_i_20230705105925",
    "size": "4×8（1219×2400mm）",
    "color": "クールホワイト W-931-SM",
    "pack": "2枚",
    "badge": "薄型ホーローパネル",
    "use": "キッチン・厨房・洗面など、薄い仕上げ材でマグネットが使える壁面を作りたい場所",
    "check": "個人宅配送不可。搬入経路、下地、接着剤・施工方法を購入前に確認。W-931-SMはメーカー現行色掲載との差異があるため在庫・後継色を確認",
    "currentNote": "現行色・後継色を確認",
    "links": [
      {
        "shop": "yahoo",
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/156244.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "Yahoo!ショッピングで仕様を確認"
      }
    ]
  },
  {
    "code": "156247",
    "family": "jfe",
    "formalName": "ホーロー キッチンパネル JFE 0.5mm厚 3X8 (890X2400mm) クリーミーホワイト W-455-SM バラ 内装 キッチン 厨房 （個人宅配送不可）",
    "short": "JFE W-455-SM 3×8 バラ",
    "img": "/images/magnetic-kitchen-panel-size-selection/156247.jpg",
    "sourceImageUrl": "https://item-shopping.c.yimg.jp/i/n/signcity-yshop_156247_i_20230705105931",
    "size": "3×8（890×2400mm）",
    "color": "クリーミーホワイト W-455-SM",
    "pack": "バラ（1枚）",
    "badge": "薄型ホーローパネル",
    "use": "キッチン・厨房・洗面など、薄い仕上げ材でマグネットが使える壁面を作りたい場所",
    "check": "個人宅配送不可。搬入経路、下地、接着剤・施工方法を購入前に確認",
    "currentNote": "",
    "links": [
      {
        "shop": "yahoo",
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/156247.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "Yahoo!ショッピングで仕様を確認"
      }
    ]
  },
  {
    "code": "156232",
    "family": "jfe",
    "formalName": "ホーロー キッチンパネル JFE 0.5mm厚 3X8 (890X2400mm) ピュアホワイト W-970-SM 2枚 内装 キッチン 厨房 （個人宅配送不可）",
    "short": "JFE W-970-SM 3×8 2枚",
    "img": "/images/magnetic-kitchen-panel-size-selection/156232.jpg",
    "sourceImageUrl": "https://item-shopping.c.yimg.jp/i/n/signcity-yshop_156232_i_20230705110244",
    "size": "3×8（890×2400mm）",
    "color": "ピュアホワイト W-970-SM",
    "pack": "2枚",
    "badge": "薄型ホーローパネル",
    "use": "キッチン・厨房・洗面など、薄い仕上げ材でマグネットが使える壁面を作りたい場所",
    "check": "個人宅配送不可。搬入経路、下地、接着剤・施工方法を購入前に確認",
    "currentNote": "",
    "links": [
      {
        "shop": "yahoo",
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/156232.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "Yahoo!ショッピングで仕様を確認"
      }
    ]
  },
  {
    "code": "156238",
    "family": "jfe",
    "formalName": "ホーロー キッチンパネル JFE 0.5mm厚 3X6 (890X1800mm) クールホワイト W-931-SM 2枚 内装 キッチン 厨房 （個人宅配送不可）",
    "short": "JFE W-931-SM 3×6 2枚",
    "img": "/images/magnetic-kitchen-panel-size-selection/156238.jpg",
    "sourceImageUrl": "https://item-shopping.c.yimg.jp/i/n/signcity-yshop_156238_i_20230705110259",
    "size": "3×6（890×1800mm）",
    "color": "クールホワイト W-931-SM",
    "pack": "2枚",
    "badge": "薄型ホーローパネル",
    "use": "キッチン・厨房・洗面など、薄い仕上げ材でマグネットが使える壁面を作りたい場所",
    "check": "個人宅配送不可。搬入経路、下地、接着剤・施工方法を購入前に確認。W-931-SMはメーカー現行色掲載との差異があるため在庫・後継色を確認",
    "currentNote": "現行色・後継色を確認",
    "links": [
      {
        "shop": "yahoo",
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/156238.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "Yahoo!ショッピングで仕様を確認"
      }
    ]
  },
  {
    "code": "156239",
    "family": "jfe",
    "formalName": "ホーロー キッチンパネル JFE 0.5mm厚 3X8 (890X2400mm) クールホワイト W-931-SM バラ 内装 キッチン 厨房 （個人宅配送不可）",
    "short": "JFE W-931-SM 3×8 バラ",
    "img": "/images/magnetic-kitchen-panel-size-selection/156239.jpg",
    "sourceImageUrl": "https://item-shopping.c.yimg.jp/i/n/signcity-yshop_156239_i_20230705110301",
    "size": "3×8（890×2400mm）",
    "color": "クールホワイト W-931-SM",
    "pack": "バラ（1枚）",
    "badge": "薄型ホーローパネル",
    "use": "キッチン・厨房・洗面など、薄い仕上げ材でマグネットが使える壁面を作りたい場所",
    "check": "個人宅配送不可。搬入経路、下地、接着剤・施工方法を購入前に確認。W-931-SMはメーカー現行色掲載との差異があるため在庫・後継色を確認",
    "currentNote": "現行色・後継色を確認",
    "links": [
      {
        "shop": "yahoo",
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/156239.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "Yahoo!ショッピングで仕様を確認"
      }
    ]
  },
  {
    "code": "156240",
    "family": "jfe",
    "formalName": "ホーロー キッチンパネル JFE 0.5mm厚 3X8 (890X2400mm) クールホワイト W-931-SM 2枚 内装 キッチン 厨房 （個人宅配送不可）",
    "short": "JFE W-931-SM 3×8 2枚",
    "img": "/images/magnetic-kitchen-panel-size-selection/156240.jpg",
    "sourceImageUrl": "https://item-shopping.c.yimg.jp/i/n/signcity-yshop_156240_i_20230705110303",
    "size": "3×8（890×2400mm）",
    "color": "クールホワイト W-931-SM",
    "pack": "2枚",
    "badge": "薄型ホーローパネル",
    "use": "キッチン・厨房・洗面など、薄い仕上げ材でマグネットが使える壁面を作りたい場所",
    "check": "個人宅配送不可。搬入経路、下地、接着剤・施工方法を購入前に確認。W-931-SMはメーカー現行色掲載との差異があるため在庫・後継色を確認",
    "currentNote": "現行色・後継色を確認",
    "links": [
      {
        "shop": "yahoo",
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/156240.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "Yahoo!ショッピングで仕様を確認"
      }
    ]
  },
  {
    "code": "156241",
    "family": "jfe",
    "formalName": "ホーロー キッチンパネル JFE 0.5mm厚 4X6 (1219X1800mm) クールホワイト W-931-SM バラ 内装 キッチン 厨房 （個人宅配送不可）",
    "short": "JFE W-931-SM 4×6 バラ",
    "img": "/images/magnetic-kitchen-panel-size-selection/156241.jpg",
    "sourceImageUrl": "https://item-shopping.c.yimg.jp/i/n/signcity-yshop_156241_i_20230705110306",
    "size": "4×6（1219×1800mm）",
    "color": "クールホワイト W-931-SM",
    "pack": "バラ（1枚）",
    "badge": "薄型ホーローパネル",
    "use": "キッチン・厨房・洗面など、薄い仕上げ材でマグネットが使える壁面を作りたい場所",
    "check": "個人宅配送不可。搬入経路、下地、接着剤・施工方法を購入前に確認。4×6はメーカー現行標準掲載との差異があるため現行可否を確認。W-931-SMはメーカー現行色掲載との差異があるため在庫・後継色を確認",
    "currentNote": "メーカー現行標準サイズとの差異を確認／現行色・後継色を確認",
    "links": [
      {
        "shop": "yahoo",
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/156241.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "Yahoo!ショッピングで仕様を確認"
      }
    ]
  },
  {
    "code": "156242",
    "family": "jfe",
    "formalName": "ホーロー キッチンパネル JFE 0.5mm厚 4X6 (1219X1800mm) クールホワイト W-931-SM 2枚 内装 キッチン 厨房 （個人宅配送不可）",
    "short": "JFE W-931-SM 4×6 2枚",
    "img": "/images/magnetic-kitchen-panel-size-selection/156242.jpg",
    "sourceImageUrl": "https://item-shopping.c.yimg.jp/i/n/signcity-yshop_156242_i_20230705105920",
    "size": "4×6（1219×1800mm）",
    "color": "クールホワイト W-931-SM",
    "pack": "2枚",
    "badge": "薄型ホーローパネル",
    "use": "キッチン・厨房・洗面など、薄い仕上げ材でマグネットが使える壁面を作りたい場所",
    "check": "個人宅配送不可。搬入経路、下地、接着剤・施工方法を購入前に確認。4×6はメーカー現行標準掲載との差異があるため現行可否を確認。W-931-SMはメーカー現行色掲載との差異があるため在庫・後継色を確認",
    "currentNote": "メーカー現行標準サイズとの差異を確認／現行色・後継色を確認",
    "links": [
      {
        "shop": "yahoo",
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/156242.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "Yahoo!ショッピングで仕様を確認"
      }
    ]
  },
  {
    "code": "156243",
    "family": "jfe",
    "formalName": "ホーロー キッチンパネル JFE 0.5mm厚 4X8 (1219X2400mm) クールホワイト W-931-SM バラ 内装 キッチン 厨房 （個人宅配送不可）",
    "short": "JFE W-931-SM 4×8 バラ",
    "img": "/images/magnetic-kitchen-panel-size-selection/156243.jpg",
    "sourceImageUrl": "https://item-shopping.c.yimg.jp/i/n/signcity-yshop_156243_i_20230705105923",
    "size": "4×8（1219×2400mm）",
    "color": "クールホワイト W-931-SM",
    "pack": "バラ（1枚）",
    "badge": "薄型ホーローパネル",
    "use": "キッチン・厨房・洗面など、薄い仕上げ材でマグネットが使える壁面を作りたい場所",
    "check": "個人宅配送不可。搬入経路、下地、接着剤・施工方法を購入前に確認。W-931-SMはメーカー現行色掲載との差異があるため在庫・後継色を確認",
    "currentNote": "現行色・後継色を確認",
    "links": [
      {
        "shop": "yahoo",
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/156243.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "Yahoo!ショッピングで仕様を確認"
      }
    ]
  },
  {
    "code": "156246",
    "family": "jfe",
    "formalName": "ホーロー キッチンパネル JFE 0.5mm厚 3X6 (890X1800mm) クリーミーホワイト W-455-SM 2枚 内装 キッチン 厨房 （個人宅配送不可）",
    "short": "JFE W-455-SM 3×6 2枚",
    "img": "/images/magnetic-kitchen-panel-size-selection/156246.jpg",
    "sourceImageUrl": "https://item-shopping.c.yimg.jp/i/n/signcity-yshop_156246_i_20230705105929",
    "size": "3×6（890×1800mm）",
    "color": "クリーミーホワイト W-455-SM",
    "pack": "2枚",
    "badge": "薄型ホーローパネル",
    "use": "キッチン・厨房・洗面など、薄い仕上げ材でマグネットが使える壁面を作りたい場所",
    "check": "個人宅配送不可。搬入経路、下地、接着剤・施工方法を購入前に確認",
    "currentNote": "",
    "links": [
      {
        "shop": "yahoo",
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/156246.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "Yahoo!ショッピングで仕様を確認"
      }
    ]
  },
  {
    "code": "156248",
    "family": "jfe",
    "formalName": "ホーロー キッチンパネル JFE 0.5mm厚 3X8 (890X2400mm) クリーミーホワイト W-455-SM 2枚 内装 キッチン 厨房 （個人宅配送不可）",
    "short": "JFE W-455-SM 3×8 2枚",
    "img": "/images/magnetic-kitchen-panel-size-selection/156248.jpg",
    "sourceImageUrl": "https://item-shopping.c.yimg.jp/i/n/signcity-yshop_156248_i_20230705105933",
    "size": "3×8（890×2400mm）",
    "color": "クリーミーホワイト W-455-SM",
    "pack": "2枚",
    "badge": "薄型ホーローパネル",
    "use": "キッチン・厨房・洗面など、薄い仕上げ材でマグネットが使える壁面を作りたい場所",
    "check": "個人宅配送不可。搬入経路、下地、接着剤・施工方法を購入前に確認",
    "currentNote": "",
    "links": [
      {
        "shop": "yahoo",
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/156248.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "Yahoo!ショッピングで仕様を確認"
      }
    ]
  },
  {
    "code": "156249",
    "family": "jfe",
    "formalName": "ホーロー キッチンパネル JFE 0.5mm厚 4X6 (1219X1800mm) クリーミーホワイト W-455-SM バラ 内装 キッチン 厨房 （個人宅配送不可）",
    "short": "JFE W-455-SM 4×6 バラ",
    "img": "/images/magnetic-kitchen-panel-size-selection/156249.jpg",
    "sourceImageUrl": "https://item-shopping.c.yimg.jp/i/n/signcity-yshop_156249_i_20230705105935",
    "size": "4×6（1219×1800mm）",
    "color": "クリーミーホワイト W-455-SM",
    "pack": "バラ（1枚）",
    "badge": "薄型ホーローパネル",
    "use": "キッチン・厨房・洗面など、薄い仕上げ材でマグネットが使える壁面を作りたい場所",
    "check": "個人宅配送不可。搬入経路、下地、接着剤・施工方法を購入前に確認。4×6はメーカー現行標準掲載との差異があるため現行可否を確認",
    "currentNote": "メーカー現行標準サイズとの差異を確認",
    "links": [
      {
        "shop": "yahoo",
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/156249.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "Yahoo!ショッピングで仕様を確認"
      }
    ]
  },
  {
    "code": "156250",
    "family": "jfe",
    "formalName": "ホーロー キッチンパネル JFE 0.5mm厚 4X6 (1219X1800mm) クリーミーホワイト W-455-SM 2枚 内装 キッチン 厨房 （個人宅配送不可）",
    "short": "JFE W-455-SM 4×6 2枚",
    "img": "/images/magnetic-kitchen-panel-size-selection/156250.jpg",
    "sourceImageUrl": "https://item-shopping.c.yimg.jp/i/n/signcity-yshop_156250_i_20230705105938",
    "size": "4×6（1219×1800mm）",
    "color": "クリーミーホワイト W-455-SM",
    "pack": "2枚",
    "badge": "薄型ホーローパネル",
    "use": "キッチン・厨房・洗面など、薄い仕上げ材でマグネットが使える壁面を作りたい場所",
    "check": "個人宅配送不可。搬入経路、下地、接着剤・施工方法を購入前に確認。4×6はメーカー現行標準掲載との差異があるため現行可否を確認",
    "currentNote": "メーカー現行標準サイズとの差異を確認",
    "links": [
      {
        "shop": "yahoo",
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/156250.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "Yahoo!ショッピングで仕様を確認"
      }
    ]
  },
  {
    "code": "156251",
    "family": "jfe",
    "formalName": "ホーロー キッチンパネル JFE 0.5mm厚 4X8 (1219X2400mm) クリーミーホワイト W-455-SM バラ 内装 キッチン 厨房 （個人宅配送不可）",
    "short": "JFE W-455-SM 4×8 バラ",
    "img": "/images/magnetic-kitchen-panel-size-selection/156251.jpg",
    "sourceImageUrl": "https://item-shopping.c.yimg.jp/i/n/signcity-yshop_156251_i_20230705105940",
    "size": "4×8（1219×2400mm）",
    "color": "クリーミーホワイト W-455-SM",
    "pack": "バラ（1枚）",
    "badge": "薄型ホーローパネル",
    "use": "キッチン・厨房・洗面など、薄い仕上げ材でマグネットが使える壁面を作りたい場所",
    "check": "個人宅配送不可。搬入経路、下地、接着剤・施工方法を購入前に確認",
    "currentNote": "",
    "links": [
      {
        "shop": "yahoo",
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/156251.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "Yahoo!ショッピングで仕様を確認"
      }
    ]
  },
  {
    "code": "156252",
    "family": "jfe",
    "formalName": "ホーロー キッチンパネル JFE 0.5mm厚 4X8 (1219X2400mm) クリーミーホワイト W-455-SM 2枚 内装 キッチン 厨房 （個人宅配送不可）",
    "short": "JFE W-455-SM 4×8 2枚",
    "img": "/images/magnetic-kitchen-panel-size-selection/156252.jpg",
    "sourceImageUrl": "https://item-shopping.c.yimg.jp/i/n/signcity-yshop_156252_i_20230705105942",
    "size": "4×8（1219×2400mm）",
    "color": "クリーミーホワイト W-455-SM",
    "pack": "2枚",
    "badge": "薄型ホーローパネル",
    "use": "キッチン・厨房・洗面など、薄い仕上げ材でマグネットが使える壁面を作りたい場所",
    "check": "個人宅配送不可。搬入経路、下地、接着剤・施工方法を購入前に確認",
    "currentNote": "",
    "links": [
      {
        "shop": "yahoo",
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/156252.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "Yahoo!ショッピングで仕様を確認"
      }
    ]
  },
  {
    "code": "037653",
    "family": "magpita",
    "formalName": "ニチレイマグネット マグピタボード マットホワイト 3.4mm厚×910mm×2420mm 鉄 スチール マグネット ベース 壁 リフォーム DIY 不燃ボード キッチン",
    "short": "マグピタボード マットホワイト 910×2420mm バラ（1枚）",
    "img": "/images/magnetic-kitchen-panel-size-selection/037653.jpg",
    "sourceImageUrl": "https://item-shopping.c.yimg.jp/i/n/signcity-yshop_037653_i_20221221110753",
    "size": "3.4mm厚・910×2420mm",
    "color": "マットホワイト",
    "pack": "バラ（1枚）",
    "badge": "3.4mmマグネット対応ボード",
    "use": "既存壁のリフォーム、キッチン・洗面・トイレのマグネット収納化",
    "check": "下地の平滑性、接着剤、見切り・目地、搬入経路、不燃認定の適用条件を確認",
    "currentNote": "",
    "links": [
      {
        "shop": "yahoo",
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/037653.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "Yahoo!ショッピングで仕様を確認"
      }
    ]
  },
  {
    "code": "037655",
    "family": "magpita",
    "formalName": "ニチレイマグネット マグピタボード パールホワイト 3.4mm厚×910mm×2420mm 鉄 スチール マグネット ベース 壁 リフォーム DIY 不燃ボード キッチン",
    "short": "マグピタボード パールホワイト 910×2420mm バラ（1枚）",
    "img": "/images/magnetic-kitchen-panel-size-selection/037655.jpg",
    "sourceImageUrl": "https://item-shopping.c.yimg.jp/i/n/signcity-yshop_037655_i_20221221110911",
    "size": "3.4mm厚・910×2420mm",
    "color": "パールホワイト",
    "pack": "バラ（1枚）",
    "badge": "3.4mmマグネット対応ボード",
    "use": "既存壁のリフォーム、キッチン・洗面・トイレのマグネット収納化",
    "check": "下地の平滑性、接着剤、見切り・目地、搬入経路、不燃認定の適用条件を確認",
    "currentNote": "",
    "links": [
      {
        "shop": "yahoo",
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/037655.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "Yahoo!ショッピングで仕様を確認"
      }
    ]
  },
  {
    "code": "037654",
    "family": "magpita",
    "formalName": "ニチレイマグネット マグピタボード パールベージュ 3.4mm厚×910mm×2420mm 鉄 スチール マグネット ベース 壁 リフォーム DIY 不燃ボード キッチン",
    "short": "マグピタボード パールベージュ 910×2420mm バラ（1枚）",
    "img": "/images/magnetic-kitchen-panel-size-selection/037654.jpg",
    "sourceImageUrl": "https://item-shopping.c.yimg.jp/i/n/signcity-yshop_037654_i_20221221110754",
    "size": "3.4mm厚・910×2420mm",
    "color": "パールベージュ",
    "pack": "バラ（1枚）",
    "badge": "3.4mmマグネット対応ボード",
    "use": "既存壁のリフォーム、キッチン・洗面・トイレのマグネット収納化",
    "check": "下地の平滑性、接着剤、見切り・目地、搬入経路、不燃認定の適用条件を確認",
    "currentNote": "",
    "links": [
      {
        "shop": "yahoo",
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/037654.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "Yahoo!ショッピングで仕様を確認"
      }
    ]
  },
  {
    "code": "073115",
    "family": "magpita",
    "formalName": "ニチレイマグネット マグピタボード カームシルバー 910×1820 2枚梱包 鉄 スチール マグネット ベース 壁 リフォーム DIY 不燃ボード キッチン 建材",
    "short": "マグピタボード カームシルバー 910×1820mm 2枚",
    "img": "/images/magnetic-kitchen-panel-size-selection/073115.jpg",
    "sourceImageUrl": "https://item-shopping.c.yimg.jp/i/n/signcity-yshop_073115_i_20221221110918",
    "size": "3.4mm厚・910×1820mm",
    "color": "カームシルバー",
    "pack": "2枚",
    "badge": "3.4mmマグネット対応ボード",
    "use": "既存壁のリフォーム、キッチン・洗面・トイレのマグネット収納化",
    "check": "下地の平滑性、接着剤、見切り・目地、搬入経路、不燃認定の適用条件を確認",
    "currentNote": "",
    "links": [
      {
        "shop": "yahoo",
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/073115.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "Yahoo!ショッピングで仕様を確認"
      }
    ]
  },
  {
    "code": "037656",
    "family": "magpita",
    "formalName": "ニチレイマグネット マグピタボード パールホワイト 3.4mm厚×910×1820mm 2枚入 スチール マグネット ベース 壁 リフォーム DIY 不燃ボード キッチン",
    "short": "マグピタボード パールホワイト 910×1820mm 2枚",
    "img": "/images/magnetic-kitchen-panel-size-selection/037656.jpg",
    "sourceImageUrl": "https://item-shopping.c.yimg.jp/i/n/signcity-yshop_037656_i_20221221110912",
    "size": "3.4mm厚・910×1820mm",
    "color": "パールホワイト",
    "pack": "2枚",
    "badge": "3.4mmマグネット対応ボード",
    "use": "既存壁のリフォーム、キッチン・洗面・トイレのマグネット収納化",
    "check": "下地の平滑性、接着剤、見切り・目地、搬入経路、不燃認定の適用条件を確認",
    "currentNote": "",
    "links": [
      {
        "shop": "yahoo",
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/037656.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "Yahoo!ショッピングで仕様を確認"
      }
    ]
  },
  {
    "code": "073114",
    "family": "magpita",
    "formalName": "ニチレイマグネット マグピタボード カームゴールド 910×1820 2枚梱包 鉄 スチール マグネット ベース 壁 リフォーム DIY 不燃ボード キッチン 建材",
    "short": "マグピタボード カームゴールド 910×1820mm 2枚",
    "img": "/images/magnetic-kitchen-panel-size-selection/073114.jpg",
    "sourceImageUrl": "https://item-shopping.c.yimg.jp/i/n/signcity-yshop_073114_i_20221221110917",
    "size": "3.4mm厚・910×1820mm",
    "color": "カームゴールド",
    "pack": "2枚",
    "badge": "3.4mmマグネット対応ボード",
    "use": "既存壁のリフォーム、キッチン・洗面・トイレのマグネット収納化",
    "check": "下地の平滑性、接着剤、見切り・目地、搬入経路、不燃認定の適用条件を確認",
    "currentNote": "",
    "links": [
      {
        "shop": "yahoo",
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/073114.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "Yahoo!ショッピングで仕様を確認"
      }
    ]
  },
  {
    "code": "037652",
    "family": "kit",
    "formalName": "ニチレイマグネット マグピタ・アイパネル専用施工キット マグネットシート 鉄 スチールシート マグネット ベース 壁 リフォーム DIY",
    "short": "マグピタ・アイパネル専用施工キット",
    "img": "/images/magnetic-kitchen-panel-size-selection/037652.jpg",
    "sourceImageUrl": "https://item-shopping.c.yimg.jp/i/n/signcity-yshop_037652_i_20221221110752",
    "size": "セット内容は商品ページで確認",
    "color": "—",
    "pack": "1セット",
    "badge": "専用施工部材",
    "use": "マグピタボード／アイパネル施工時の部材準備",
    "check": "施工面積に対する必要セット数と、対象製品・下地への適合を確認",
    "currentNote": "",
    "links": [
      {
        "shop": "yahoo",
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/037652.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "Yahoo!ショッピングで仕様を確認"
      }
    ]
  },
  {
    "code": "108868",
    "family": "blavo",
    "formalName": "ニチレイマグネット キッチン 壁 収納 おしゃれ マグネット マグスチール BLAVO. ふきんかけセット シルバー",
    "short": "BLAVO. ふきんかけセット シルバー",
    "img": "/images/magnetic-kitchen-panel-size-selection/108868.jpg",
    "sourceImageUrl": "https://item-shopping.c.yimg.jp/i/n/signcity-yshop_108868_i_20221221111234",
    "size": "寸法・耐荷重は商品ページで確認",
    "color": "シルバー",
    "pack": "1セット",
    "badge": "マグネット収納",
    "use": "キッチン・洗面・トイレの浮かせる収納",
    "check": "取付面との相性、耐荷重、収納物の重量、火気・水はねとの距離を確認",
    "currentNote": "",
    "links": [
      {
        "shop": "yahoo",
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/108868.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "Yahoo!ショッピングで仕様を確認"
      }
    ]
  },
  {
    "code": "108869",
    "family": "blavo",
    "formalName": "ニチレイマグネット キッチン 壁 収納 おしゃれ マグネット マグスチール BLAVO. ふきんかけセット ホワイト",
    "short": "BLAVO. ふきんかけセット ホワイト",
    "img": "/images/magnetic-kitchen-panel-size-selection/108869.jpg",
    "sourceImageUrl": "https://item-shopping.c.yimg.jp/i/n/signcity-yshop_108869_i_20221221111235",
    "size": "寸法・耐荷重は商品ページで確認",
    "color": "ホワイト",
    "pack": "1セット",
    "badge": "マグネット収納",
    "use": "キッチン・洗面・トイレの浮かせる収納",
    "check": "取付面との相性、耐荷重、収納物の重量、火気・水はねとの距離を確認",
    "currentNote": "",
    "links": [
      {
        "shop": "yahoo",
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/108869.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "Yahoo!ショッピングで仕様を確認"
      }
    ]
  },
  {
    "code": "108873",
    "family": "blavo",
    "formalName": "ニチレイマグネット キッチン 壁 収納 おしゃれ マグネット マグスチール BLAVO. ブラボーセット ホワイト",
    "short": "BLAVO. ブラボーセット ホワイト",
    "img": "/images/magnetic-kitchen-panel-size-selection/108873.jpg",
    "sourceImageUrl": "https://item-shopping.c.yimg.jp/i/n/signcity-yshop_108873_i_20221221111239",
    "size": "寸法・耐荷重は商品ページで確認",
    "color": "ホワイト",
    "pack": "1セット",
    "badge": "マグネット収納",
    "use": "キッチン・洗面・トイレの浮かせる収納",
    "check": "取付面との相性、耐荷重、収納物の重量、火気・水はねとの距離を確認",
    "currentNote": "",
    "links": [
      {
        "shop": "yahoo",
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/108873.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "Yahoo!ショッピングで仕様を確認"
      }
    ]
  },
  {
    "code": "108872",
    "family": "blavo",
    "formalName": "ニチレイマグネット キッチン 壁 収納 おしゃれ マグネット マグスチール BLAVO. ブラボーセット シルバー",
    "short": "BLAVO. ブラボーセット シルバー",
    "img": "/images/magnetic-kitchen-panel-size-selection/108872.jpg",
    "sourceImageUrl": "https://item-shopping.c.yimg.jp/i/n/signcity-yshop_108872_i_20221221111238",
    "size": "寸法・耐荷重は商品ページで確認",
    "color": "シルバー",
    "pack": "1セット",
    "badge": "マグネット収納",
    "use": "キッチン・洗面・トイレの浮かせる収納",
    "check": "取付面との相性、耐荷重、収納物の重量、火気・水はねとの距離を確認",
    "currentNote": "",
    "links": [
      {
        "shop": "yahoo",
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/108872.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "Yahoo!ショッピングで仕様を確認"
      }
    ]
  },
  {
    "code": "108867",
    "family": "blavo",
    "formalName": "ニチレイマグネット キッチン 壁 収納 おしゃれ マグネット マグスチール BLAVO. フックセット ホワイト",
    "short": "BLAVO. フックセット ホワイト",
    "img": "/images/magnetic-kitchen-panel-size-selection/108867.jpg",
    "sourceImageUrl": "https://item-shopping.c.yimg.jp/i/n/signcity-yshop_108867_i_20221221111233",
    "size": "寸法・耐荷重は商品ページで確認",
    "color": "ホワイト",
    "pack": "1セット",
    "badge": "マグネット収納",
    "use": "キッチン・洗面・トイレの浮かせる収納",
    "check": "取付面との相性、耐荷重、収納物の重量、火気・水はねとの距離を確認",
    "currentNote": "",
    "links": [
      {
        "shop": "yahoo",
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/108867.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "Yahoo!ショッピングで仕様を確認"
      }
    ]
  },
  {
    "code": "108879",
    "family": "blavo",
    "formalName": "ニチレイマグネット キッチン 洗面所 トイレ 壁 収納 おしゃれ マグネット マグスチール BLAVO. タオルハンガーW ブラック",
    "short": "BLAVO. タオルハンガーW ブラック",
    "img": "/images/magnetic-kitchen-panel-size-selection/108879.jpg",
    "sourceImageUrl": "https://item-shopping.c.yimg.jp/i/n/signcity-yshop_108879_i_20221221111241",
    "size": "寸法・耐荷重は商品ページで確認",
    "color": "ブラック",
    "pack": "1セット",
    "badge": "マグネット収納",
    "use": "キッチン・洗面・トイレの浮かせる収納",
    "check": "取付面との相性、耐荷重、収納物の重量、火気・水はねとの距離を確認",
    "currentNote": "",
    "links": [
      {
        "shop": "yahoo",
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/108879.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "Yahoo!ショッピングで仕様を確認"
      }
    ]
  },
  {
    "code": "108878",
    "family": "blavo",
    "formalName": "ニチレイマグネット キッチン 洗面所 トイレ 壁 収納 おしゃれ マグネット マグスチール BLAVO. タオルハンガーW ホワイト",
    "short": "BLAVO. タオルハンガーW ホワイト",
    "img": "/images/magnetic-kitchen-panel-size-selection/108878.jpg",
    "sourceImageUrl": "https://item-shopping.c.yimg.jp/i/n/signcity-yshop_108878_i_20221221111241",
    "size": "寸法・耐荷重は商品ページで確認",
    "color": "ホワイト",
    "pack": "1セット",
    "badge": "マグネット収納",
    "use": "キッチン・洗面・トイレの浮かせる収納",
    "check": "取付面との相性、耐荷重、収納物の重量、火気・水はねとの距離を確認",
    "currentNote": "",
    "links": [
      {
        "shop": "yahoo",
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/108878.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "Yahoo!ショッピングで仕様を確認"
      }
    ]
  },
  {
    "code": "108877",
    "family": "blavo",
    "formalName": "ニチレイマグネット キッチン 洗面所 トイレ 壁 収納 おしゃれ マグネット マグスチール BLAVO. タオルハンガーW シルバー",
    "short": "BLAVO. タオルハンガーW シルバー",
    "img": "/images/magnetic-kitchen-panel-size-selection/108877.jpg",
    "sourceImageUrl": "https://item-shopping.c.yimg.jp/i/n/signcity-yshop_108877_i_20221221111240",
    "size": "寸法・耐荷重は商品ページで確認",
    "color": "シルバー",
    "pack": "1セット",
    "badge": "マグネット収納",
    "use": "キッチン・洗面・トイレの浮かせる収納",
    "check": "取付面との相性、耐荷重、収納物の重量、火気・水はねとの距離を確認",
    "currentNote": "",
    "links": [
      {
        "shop": "yahoo",
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/108877.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "Yahoo!ショッピングで仕様を確認"
      }
    ]
  },
  {
    "code": "108888",
    "family": "magschale",
    "formalName": "ニチレイマグネット キッチン 洗面所 トイレ 壁 収納 おしゃれ マグネット マグシャーレ 小物置き シルバー",
    "short": "MAG schale 小物置き シルバー",
    "img": "/images/magnetic-kitchen-panel-size-selection/108888.jpg",
    "sourceImageUrl": "https://item-shopping.c.yimg.jp/i/n/signcity-yshop_108888_i_20221221111228",
    "size": "寸法・耐荷重は商品ページで確認",
    "color": "シルバー",
    "pack": "1個",
    "badge": "マグネット収納",
    "use": "キッチン・洗面・トイレの小物収納やタオル・ペーパー類の定位置化",
    "check": "取付面との相性、耐荷重、収納物の重量、落下時の危険がない位置を確認",
    "currentNote": "",
    "links": [
      {
        "shop": "yahoo",
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/108888.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "Yahoo!ショッピングで仕様を確認"
      }
    ]
  },
  {
    "code": "108875",
    "family": "blavo",
    "formalName": "ニチレイマグネット キッチン 洗面所 トイレ 壁 収納 おしゃれ マグネット マグスチール BLAVO. タオルハンガーS ホワイト",
    "short": "BLAVO. タオルハンガーS ホワイト",
    "img": "/images/magnetic-kitchen-panel-size-selection/108875.jpg",
    "sourceImageUrl": "https://item-shopping.c.yimg.jp/i/n/signcity-yshop_108875_i_20250624185804",
    "size": "寸法・耐荷重は商品ページで確認",
    "color": "ホワイト",
    "pack": "1セット",
    "badge": "マグネット収納",
    "use": "キッチン・洗面・トイレの浮かせる収納",
    "check": "取付面との相性、耐荷重、収納物の重量、火気・水はねとの距離を確認",
    "currentNote": "",
    "links": [
      {
        "shop": "yahoo",
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/108875.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "Yahoo!ショッピングで仕様を確認"
      }
    ]
  },
  {
    "code": "108885",
    "family": "magschale",
    "formalName": "ニチレイマグネット キッチン 洗面所 トイレ 壁 収納 おしゃれ マグネット マグシャーレ ペーパーホルダー シルバー",
    "short": "MAG schale ペーパーホルダー シルバー",
    "img": "/images/magnetic-kitchen-panel-size-selection/108885.jpg",
    "sourceImageUrl": "https://item-shopping.c.yimg.jp/i/n/signcity-yshop_108885_i_20221221111227",
    "size": "寸法・耐荷重は商品ページで確認",
    "color": "シルバー",
    "pack": "1個",
    "badge": "マグネット収納",
    "use": "キッチン・洗面・トイレの小物収納やタオル・ペーパー類の定位置化",
    "check": "取付面との相性、耐荷重、収納物の重量、落下時の危険がない位置を確認",
    "currentNote": "",
    "links": [
      {
        "shop": "yahoo",
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/108885.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "Yahoo!ショッピングで仕様を確認"
      }
    ]
  },
  {
    "code": "108887",
    "family": "magschale",
    "formalName": "ニチレイマグネット キッチン 洗面所 トイレ 壁 収納 おしゃれ マグネット マグシャーレ 小物置き ブラウン",
    "short": "MAG schale 小物置き ブラウン",
    "img": "/images/magnetic-kitchen-panel-size-selection/108887.jpg",
    "sourceImageUrl": "https://item-shopping.c.yimg.jp/i/n/signcity-yshop_108887_i_20221221111228",
    "size": "寸法・耐荷重は商品ページで確認",
    "color": "ブラウン",
    "pack": "1個",
    "badge": "マグネット収納",
    "use": "キッチン・洗面・トイレの小物収納やタオル・ペーパー類の定位置化",
    "check": "取付面との相性、耐荷重、収納物の重量、落下時の危険がない位置を確認",
    "currentNote": "",
    "links": [
      {
        "shop": "yahoo",
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/108887.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "Yahoo!ショッピングで仕様を確認"
      }
    ]
  },
  {
    "code": "108882",
    "family": "magschale",
    "formalName": "ニチレイマグネット キッチン 洗面所 トイレ 壁 収納 おしゃれ マグネット マグシャーレ タオルかけ シルバー",
    "short": "MAG schale タオルかけ シルバー",
    "img": "/images/magnetic-kitchen-panel-size-selection/108882.jpg",
    "sourceImageUrl": "https://item-shopping.c.yimg.jp/i/n/signcity-yshop_108882_i_20221221111226",
    "size": "寸法・耐荷重は商品ページで確認",
    "color": "シルバー",
    "pack": "1個",
    "badge": "マグネット収納",
    "use": "キッチン・洗面・トイレの小物収納やタオル・ペーパー類の定位置化",
    "check": "取付面との相性、耐荷重、収納物の重量、落下時の危険がない位置を確認",
    "currentNote": "",
    "links": [
      {
        "shop": "yahoo",
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/108882.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "Yahoo!ショッピングで仕様を確認"
      }
    ]
  },
  {
    "code": "108884",
    "family": "magschale",
    "formalName": "ニチレイマグネット キッチン 洗面所 トイレ 壁 収納 おしゃれ マグネット マグシャーレ ペーパーホルダー ブラウン",
    "short": "MAG schale ペーパーホルダー ブラウン",
    "img": "/images/magnetic-kitchen-panel-size-selection/108884.jpg",
    "sourceImageUrl": "https://item-shopping.c.yimg.jp/i/n/signcity-yshop_108884_i_20221221111227",
    "size": "寸法・耐荷重は商品ページで確認",
    "color": "ブラウン",
    "pack": "1個",
    "badge": "マグネット収納",
    "use": "キッチン・洗面・トイレの小物収納やタオル・ペーパー類の定位置化",
    "check": "取付面との相性、耐荷重、収納物の重量、落下時の危険がない位置を確認",
    "currentNote": "",
    "links": [
      {
        "shop": "yahoo",
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/108884.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "Yahoo!ショッピングで仕様を確認"
      }
    ]
  },
  {
    "code": "108891",
    "family": "magschale",
    "formalName": "ニチレイマグネット キッチン 洗面所 トイレ 壁 収納 おしゃれ マグネット マグシャーレ フック シルバー",
    "short": "MAG schale フック シルバー",
    "img": "/images/magnetic-kitchen-panel-size-selection/108891.jpg",
    "sourceImageUrl": "https://item-shopping.c.yimg.jp/i/n/signcity-yshop_108891_i_20221221111230",
    "size": "寸法・耐荷重は商品ページで確認",
    "color": "シルバー",
    "pack": "1個",
    "badge": "マグネット収納",
    "use": "キッチン・洗面・トイレの小物収納やタオル・ペーパー類の定位置化",
    "check": "取付面との相性、耐荷重、収納物の重量、落下時の危険がない位置を確認",
    "currentNote": "",
    "links": [
      {
        "shop": "yahoo",
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/108891.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "Yahoo!ショッピングで仕様を確認"
      }
    ]
  },
  {
    "code": "108890",
    "family": "magschale",
    "formalName": "ニチレイマグネット キッチン 洗面所 トイレ 壁 収納 おしゃれ マグネット マグシャーレ フック ブラウン",
    "short": "MAG schale フック ブラウン",
    "img": "/images/magnetic-kitchen-panel-size-selection/108890.jpg",
    "sourceImageUrl": "https://item-shopping.c.yimg.jp/i/n/signcity-yshop_108890_i_20221221111229",
    "size": "寸法・耐荷重は商品ページで確認",
    "color": "ブラウン",
    "pack": "1個",
    "badge": "マグネット収納",
    "use": "キッチン・洗面・トイレの小物収納やタオル・ペーパー類の定位置化",
    "check": "取付面との相性、耐荷重、収納物の重量、落下時の危険がない位置を確認",
    "currentNote": "",
    "links": [
      {
        "shop": "yahoo",
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/108890.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "Yahoo!ショッピングで仕様を確認"
      }
    ]
  },
  {
    "code": "108870",
    "family": "blavo",
    "formalName": "ニチレイマグネット トイレ 壁 収納 おしゃれ マグネット マグスチール BLAVO. ポケット+トレイセット シルバー",
    "short": "BLAVO. ポケット+トレイセット シルバー",
    "img": "/images/magnetic-kitchen-panel-size-selection/108870.jpg",
    "sourceImageUrl": "https://item-shopping.c.yimg.jp/i/n/signcity-yshop_108870_i_20221221111236",
    "size": "寸法・耐荷重は商品ページで確認",
    "color": "シルバー",
    "pack": "1セット",
    "badge": "マグネット収納",
    "use": "キッチン・洗面・トイレの浮かせる収納",
    "check": "取付面との相性、耐荷重、収納物の重量、火気・水はねとの距離を確認",
    "currentNote": "",
    "links": [
      {
        "shop": "yahoo",
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/108870.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "Yahoo!ショッピングで仕様を確認"
      }
    ]
  },
  {
    "code": "108871",
    "family": "blavo",
    "formalName": "ニチレイマグネット トイレ 壁 収納 おしゃれ マグネット マグスチール BLAVO. ポケット+トレイセット ホワイト",
    "short": "BLAVO. ポケット+トレイセット ホワイト",
    "img": "/images/magnetic-kitchen-panel-size-selection/108871.jpg",
    "sourceImageUrl": "https://item-shopping.c.yimg.jp/i/n/signcity-yshop_108871_i_20221221111237",
    "size": "寸法・耐荷重は商品ページで確認",
    "color": "ホワイト",
    "pack": "1セット",
    "badge": "マグネット収納",
    "use": "キッチン・洗面・トイレの浮かせる収納",
    "check": "取付面との相性、耐荷重、収納物の重量、火気・水はねとの距離を確認",
    "currentNote": "",
    "links": [
      {
        "shop": "yahoo",
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/108871.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "Yahoo!ショッピングで仕様を確認"
      }
    ]
  }
];
const faqs: FAQ[] = [
  {
    "question": "マグネットがつくキッチンパネルとは何ですか？",
    "answer": "鋼板やスチール層を含み、表面に磁石を付けられる内装用パネルです。収納用品やメモを穴あけせず移動できますが、保持力は磁石・取付面・荷重条件で変わります。"
  },
  {
    "question": "JFEホーローキッチンパネルとマグピタボードの違いは？",
    "answer": "この記事で扱うJFE品は0.5mm厚の薄いホーロー仕上げ材、マグピタボードは3.4mm厚のボード材です。納まり、切断、施工、目地、搬入が異なります。"
  },
  {
    "question": "3×6、3×8、4×6、4×8は何mmですか？",
    "answer": "Excel掲載品では3×6が890×1800mm、3×8が890×2400mm、4×6が1219×1800mm、4×8が1219×2400mmです。発注時は呼称ではなく実寸で照合します。"
  },
  {
    "question": "壁面積だけで必要枚数を決めてもよいですか？",
    "answer": "面積だけでは不十分です。壁の幅・高さ、開口、継ぎ目、切りしろ、端部処理、搬入可能寸法を含む割付図で決めます。"
  },
  {
    "question": "3×6と4×6はどう選びますか？",
    "answer": "高さ1800mmを基準に、壁幅と継ぎ目数で選びます。4×6は継ぎ目を減らしやすい一方、搬入・施工負担が増え、現行取扱いの確認も必要です。"
  },
  {
    "question": "3×8と4×8はどう選びますか？",
    "answer": "高さ2400mm前後を一枚で取りたい場合の候補です。3×8は比較的取り回しやすく、4×8は継ぎ目を減らしやすい反面、大判搬入の確認が重要です。"
  },
  {
    "question": "バラと2枚セットはどう選びますか？",
    "answer": "補修・小面積ではバラ、複数面や同一ロットを確保したい場合は2枚が候補です。必要枚数、予備率、梱包単位、配送条件を合わせて判断します。"
  },
  {
    "question": "JFE W-970-SMはホワイトボードのように使えますか？",
    "answer": "メーカー公式ではW-970-SMはホワイトボード用マーカーの書き消しに対応すると案内されています。筆記具や放置時間を確認し、目立たない場所で試してください。"
  },
  {
    "question": "JFE W-455-SMもマーカーを消せますか？",
    "answer": "メーカー公式ではW-455-SMはW-970-SMなどより消去性が多少劣るとされています。筆記利用を重視する場合は色と消去性を一緒に比較します。"
  },
  {
    "question": "W-931-SMは現在もメーカー標準色ですか？",
    "answer": "Excelには掲載がありますが、2026年7月時点で確認したメーカー公式の現行掲載色とは差異があります。在庫限り・継続品・後継色の別を確認してください。"
  },
  {
    "question": "4×6サイズは現在もメーカー標準品ですか？",
    "answer": "Excelと販売ページには4×6がありますが、2026年7月時点のメーカー公式標準サイズ掲載とは差異があります。現行可否、納期、代替割付を確認してください。"
  },
  {
    "question": "マグピタボード910×2420は何枚入りですか？",
    "answer": "Excel掲載のマットホワイト、パールホワイト、パールベージュはバラ商品です。販売単位は商品ページで最終確認してください。"
  },
  {
    "question": "マグピタボード910×1820は何枚入りですか？",
    "answer": "Excel掲載のパールホワイト、カームシルバー、カームゴールドは2枚梱包・2枚入りとして登録されています。"
  },
  {
    "question": "既存のキッチン壁へ後付けできますか？",
    "answer": "下地が平滑で健全か、既存仕上げと接着剤が適合するか、熱源周辺の条件を満たすかで判断します。メーカー施工要領と施工者の確認が必要です。"
  },
  {
    "question": "DIYで施工できますか？",
    "answer": "大型板材は切断、接着剤塗布、位置合わせ、圧着、目地処理、搬入に技術と人数が必要です。安易な一人施工は避けてください。"
  },
  {
    "question": "曲げて搬入できますか？",
    "answer": "ホーロー材は表面がガラス質のため、無理に折り曲げると割れや欠けにつながります。搬入経路を実寸で確認し、製品を適切に支持してください。"
  },
  {
    "question": "どのマグネット収納でも使えますか？",
    "answer": "磁石が付いても必要な保持力が得られるとは限りません。磁石面積、荷重、重心、取付面の汚れや水分、振動を確認し、軽い物から試します。"
  },
  {
    "question": "耐荷重は壁材側と収納用品側のどちらを見ますか？",
    "answer": "両方を確認します。収納用品の表示耐荷重は指定取付面での試験値であることが多く、実際の条件で低下する可能性があります。"
  },
  {
    "question": "コンロのすぐ横に収納を付けてもよいですか？",
    "answer": "熱、炎、油はね、鍋の動線、落下時の危険を確認します。壁材が不燃認定品でも、収納物や設置全体の安全が保証されるわけではありません。"
  },
  {
    "question": "洗面所やトイレでも使えますか？",
    "answer": "対象用途を想定した商品がありますが、水掛かり、湿気、端部処理、清掃薬品、下地条件を確認して使います。"
  },
  {
    "question": "専用施工キットは必ず必要ですか？",
    "answer": "対象製品、下地、施工面積、指定工法で異なります。商品ページと施工要領を照合し、必要量を計算してください。"
  },
  {
    "question": "商品画像だけで色を決めてもよいですか？",
    "answer": "画面表示や撮影条件で色味が変わるため、色見本・サンプル、照明、既存扉や天板との組合せで確認します。"
  },
  {
    "question": "個人宅へ配送できますか？",
    "answer": "Excel掲載のJFE商品名には個人宅配送不可と明記されています。法人名、荷受け場所、車両進入、荷下ろし人員などを確認してください。"
  },
  {
    "question": "発注前に最低限確認することは？",
    "answer": "製品、色、実寸、枚数、梱包単位、現行品、納期、配送、搬入、下地、接着剤、目地、見切り、施工者、収納荷重を割付図と一緒に確認します。"
  }
];
const failureItems: string[] = [
  "呼称だけで発注し、実寸を確認していない",
  "壁面積÷板面積だけで枚数を出し、継ぎ目と切りしろを考えていない",
  "開口部を単純に面積控除し、使えない端材を過大評価する",
  "コンセント、換気扇、窓、吊戸棚を割付図へ入れていない",
  "大判を選んだ後で、エレベーターや曲がり廊下を通らないと気付く",
  "荷受け・仮置き・施工人数を確保していない",
  "ホーロー材を強く曲げ、表面の欠け・割れ・変形を招く",
  "下地の不陸、油、粉、浮き、湿気を処理せず接着する",
  "既存壁材と接着剤の適合を確認していない",
  "目地幅、見切り、端部シールを見積りへ入れていない",
  "熱源周辺で壁材の不燃性だけを見て収納物の危険を無視する",
  "色名だけで決め、サンプルと照明環境を確認していない",
  "同じ白系ならマーカー消去性も同じだと思い込む",
  "W-931-SMや4×6の現行取扱い・後継品を確認しない",
  "バラと2枚梱包を混同し、発注数量がずれる",
  "予備板をゼロにし、破損時に同ロットを確保できない",
  "商品画像を外部直読みし、表示切れや速度低下を招く",
  "磁石が付くことと重い収納を保持できることを同一視する",
  "別の取付面でも収納用品の耐荷重が同じとみなす",
  "収納用品を作業動線へ張り出させ、接触・落下リスクを作る",
  "清掃薬品や研磨材の適否を確認せず表面を傷める",
  "配送先に法人名を入れず出荷条件を満たせない",
  "荷下ろし条件や車両進入を確認せず工程遅延を招く",
  "施工後の品番、ロット、写真、端材、補修方法を台帳へ残していない"
];
const corporateChecklist: string[][] = [
  [
    "使用場所",
    "キッチン／厨房／洗面／トイレ／バックヤード",
    "熱・水・油・清掃頻度を記録"
  ],
  [
    "完成目的",
    "防汚／マグネット収納／掲示・筆記",
    "主目的を決める"
  ],
  [
    "壁の実測",
    "幅・高さ・開口・出隅・入隅",
    "現場実測"
  ],
  [
    "製品方式",
    "0.5mmホーロー／3.4mmボード",
    "下地と納まりで選ぶ"
  ],
  [
    "色・型番",
    "W-970-SM等／マグピタ各色",
    "サンプル・現行品確認"
  ],
  [
    "サイズ",
    "3×6等／910×1820等",
    "呼称と実寸を併記"
  ],
  [
    "割付・枚数",
    "継ぎ目、切り欠き、予備率",
    "割付図を添付"
  ],
  [
    "梱包単位",
    "バラ／2枚／セット",
    "発注数とのズレ防止"
  ],
  [
    "搬入",
    "車両、荷下ろし、通路、EV、仮置き",
    "大判寸法を実測"
  ],
  [
    "配送条件",
    "法人名、個人宅不可、地域条件",
    "販売ページで確認"
  ],
  [
    "下地",
    "平滑性、強度、既存仕上げ、汚れ",
    "施工者が判定"
  ],
  [
    "施工部材",
    "接着剤、テープ、目地、見切り、シール",
    "メーカー要領に合わせる"
  ],
  [
    "施工体制",
    "施工会社、人数、養生、廃材処理",
    "一人施工前提にしない"
  ],
  [
    "収納用品",
    "種類、数量、耐荷重、設置位置",
    "軽い物から試験"
  ],
  [
    "安全",
    "熱源、水、落下、動線",
    "壁材と付属品を別評価"
  ],
  [
    "記録",
    "品番、色、ロット、施工日、写真、予備材",
    "補修・増設用に保管"
  ]
];

const sizeRows = [
  ["3×6", "890×1800mm", "約1.60㎡", "高さ1800mm。幅を細かく割り付けやすい"],
  ["3×8", "890×2400mm", "約2.14㎡", "高さ2400mm前後を縦一枚で納めやすい"],
  ["4×6", "1219×1800mm", "約2.19㎡", "継ぎ目を減らしやすいが現行可否・搬入を確認"],
  ["4×8", "1219×2400mm", "約2.93㎡", "大面積向け。搬入・施工負担が大きい"],
  ["マグピタ 3×6相当", "910×1820mm", "約1.66㎡", "Excel掲載品は2枚梱包"],
  ["マグピタ 3×8相当", "910×2420mm", "約2.20㎡", "Excel掲載品はバラ"],
];

const layoutRows = [
  ["幅2400×高さ1800mm", "4×6を横に2枚（総幅2438mm）", "継ぎ目1本にしやすい", "約38mm切断、4×6の現行可否、搬入"],
  ["幅1800×高さ1800mm", "3×6を横に2枚（総幅1780mm）", "取り回しやすい", "20mm不足するため別割付・見切りが必要"],
  ["幅2700×高さ2400mm", "3×8を横に3枚（総幅2670mm）", "高さ方向の継ぎ目を避けやすい", "30mm不足。端部納まりを検討"],
  ["幅1820×高さ1820mm", "マグピタ910×1820を横に2枚", "2枚梱包と整合", "目地・端部・実測誤差を見込む"],
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "マグネットがつくキッチンパネルの選び方｜ホーロー・マグピタボードの違いとサイズ表",
  description: "JFEホーローキッチンパネルとマグピタボードを材質・厚さ・サイズ・梱包単位・施工で比較。49商品をリンク付きサイズ表で確認できます。",
  image: [`https://sagyou-navi.com/images/${SLUG}/magnetic-kitchen-panel-hero.jpg`],
  datePublished: "2026-07-23",
  dateModified: "2026-07-23",
  mainEntityOfPage: ARTICLE_URL,
  author: { "@type": "Organization", name: "作業用品ナビ編集部" },
  publisher: { "@type": "Organization", name: "作業用品ナビ", url: "https://sagyou-navi.com/" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "作業用品ナビ", item: "https://sagyou-navi.com/" },
    { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://sagyou-navi.com/articles" },
    { "@type": "ListItem", position: 3, name: "マグネットがつくキッチンパネルの選び方", item: ARTICLE_URL },
  ],
};

export const metadata: Metadata = {
  title: "マグネットがつくキッチンパネルの選び方｜ホーロー・マグピタボードの違いとサイズ表",
  description: "マグネットがつくキッチン壁材をJFEホーローキッチンパネルとマグピタボードで比較。3×6・3×8・4×6・4×8の寸法、色、1枚・2枚の違い、必要枚数、施工・搬入の注意点を解説します。",
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    type: "article",
    url: ARTICLE_URL,
    title: "マグネットがつくキッチンパネルの選び方｜サイズ表付き",
    description: "ホーローとマグピタボードを厚さ・実寸・施工・収納用途で比較。49商品をサイズ表から確認できます。",
    images: [{ url: `/images/${SLUG}/magnetic-kitchen-panel-hero.jpg`, width: 1200, height: 675, alt: "マグネットがつくキッチンパネルを施工するイメージ" }],
  },
};

function getProduct(code: string): Product {
  const product = products.find((item) => item.code === code);
  if (!product) throw new Error(`Product not found: ${code}`);
  return product;
}

function H2({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2 id={id} className="mb-4 mt-10 border-l-4 border-gray-900 pl-3 text-xl font-bold text-gray-900">
      {children}
    </h2>
  );
}

function TableWrap({ children }: { children: ReactNode }) {
  return <div className="my-5 overflow-x-auto rounded-xl border border-gray-200">{children}</div>;
}
function Th({ children }: { children: ReactNode }) {
  return <th className="whitespace-nowrap border-b border-gray-300 bg-gray-100 px-4 py-3 text-left text-sm font-bold text-gray-900">{children}</th>;
}
function Td({ children }: { children: ReactNode }) {
  return <td className="min-w-32 border-b border-gray-200 px-4 py-3 align-top text-sm leading-relaxed text-gray-700">{children}</td>;
}

function ProductLink({ product, label }: { product: Product; label?: string }) {
  const link = product.links[0];
  return (
    <a href={buildUrl(link.url, UTM)} target="_blank" rel="nofollow sponsored" className="font-bold text-gray-900 underline decoration-2 underline-offset-4 hover:text-gray-600">
      {label ?? product.short}
    </a>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="relative aspect-[4/3] bg-gray-50">
        <Image src={product.img} alt={`${product.short}の商品画像`} fill sizes="(max-width: 768px) 100vw, 380px" className="object-contain p-4" />
      </div>
      <div className="space-y-3 p-5">
        <span className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-700">{product.badge}</span>
        <h3 className="text-lg font-bold leading-snug text-gray-900">{product.short}</h3>
        <dl className="grid grid-cols-[5rem_1fr] gap-x-3 gap-y-2 text-sm">
          <dt className="font-bold text-gray-600">サイズ</dt><dd>{product.size}</dd>
          <dt className="font-bold text-gray-600">色</dt><dd>{product.color}</dd>
          <dt className="font-bold text-gray-600">販売単位</dt><dd>{product.pack}</dd>
          <dt className="font-bold text-gray-600">向く用途</dt><dd>{product.use}</dd>
        </dl>
        <p className="rounded-lg bg-gray-50 p-3 text-xs leading-relaxed text-gray-700"><strong>購入前確認：</strong>{product.check}</p>
        {product.links.map((link) => (
          <a key={`${product.code}-${link.shop}`} href={buildUrl(link.url, UTM)} target="_blank" rel="nofollow sponsored" className="inline-flex min-h-11 w-full items-center justify-center rounded-md bg-gray-900 px-4 py-3 text-center text-sm font-bold text-white hover:bg-gray-700">
            {link.label}
          </a>
        ))}
        <details className="text-xs text-gray-600"><summary className="cursor-pointer font-bold">正式商品名を確認</summary><p className="mt-2 leading-relaxed">{product.formalName}</p></details>
      </div>
    </article>
  );
}

function Note({ title, children }: { title: string; children: ReactNode }) {
  return <aside className="my-6 rounded-xl border border-gray-300 bg-gray-50 p-5"><p className="font-bold text-gray-900">{title}</p><div className="mt-2 text-sm leading-7 text-gray-700">{children}</div></aside>;
}

export default function Page() {
  const representativeProducts = ["156229", "156231", "037655", "037656", "037652"].map(getProduct);
  const jfeProducts = products.filter((p) => p.family === "jfe");
  const magpitaProducts = products.filter((p) => p.family === "magpita");
  const accessoryProducts = products.filter((p) => ["kit", "blavo", "magschale"].includes(p.family));

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

        <nav aria-label="パンくず" className="mb-5 text-sm text-gray-600">
          <ol className="flex flex-wrap gap-2"><li><Link href="/">作業用品ナビ</Link></li><li>/</li><li><Link href="/articles">記事一覧</Link></li><li>/</li><li>マグネットがつくキッチンパネル</li></ol>
        </nav>

        <header>
          <p className="text-sm font-bold text-gray-600">商品リンク付きサイズ早見表／キッチン・厨房・洗面の壁材選定</p>
          <h1 className="mt-3 text-3xl font-black leading-tight text-gray-900 sm:text-4xl">
            マグネットがつくキッチンパネルの選び方
            <span className="mt-2 block text-xl font-bold sm:text-2xl">ホーロー・マグピタボードの違いとサイズ表</span>
          </h1>
          <p className="mt-4 text-sm text-gray-600">公開日・最終更新日：2026年7月23日｜執筆：作業用品ナビ編集部</p>
        </header>

        <figure className="my-7 overflow-hidden rounded-2xl border border-gray-200">
          <Image src={`/images/${SLUG}/magnetic-kitchen-panel-hero.jpg`} alt="マグネットがつくキッチンパネルを施工し収納用品を配置するイメージ" width={1200} height={675} priority className="h-auto w-full" />
        </figure>

        <p className="text-lg leading-9 text-gray-800">
          キッチンの壁にフックや棚を後付けしたいものの、「磁石が付く壁材は何を選ぶのか」「3×6と4×8の違いは何か」「何枚注文すればよいか」で迷うことがあります。本記事では、JFEホーローキッチンパネル24商品、マグピタボード6商品、施工キット・収納用品19商品を、材質、厚さ、実寸、梱包単位、施工、使い道から整理します。
        </p>

        <section className="my-6 rounded-xl border-2 border-gray-900 p-5 shadow-sm">
          <p className="mb-2 text-sm font-bold text-gray-600">先に結論</p>
          <div className="space-y-3 leading-8 text-gray-800">
            <p><strong>薄い仕上げ材で清掃性とマグネット利用を両立したいならJFEホーロー、既存壁の改修で3.4mm厚のボードとして納めたいならマグピタボードが比較の起点です。</strong></p>
            <p>選定は材質名だけでなく、壁の実寸、継ぎ目、搬入、下地、施工方法、配送条件まで含む割付で決めます。「3×6」の呼称だけでなく890×1800mmなどの実寸で照合してください。</p>
            <p>Excel掲載のW-931-SMと4×6には、2026年7月時点のメーカー公式現行掲載との差異があります。販売ページで在庫、継続可否、後継品、納期を確認してください。</p>
          </div>
        </section>

        <nav aria-label="記事内目次" className="my-8 rounded-xl border border-gray-200 bg-gray-50 p-5">
          <p className="font-bold">判断順</p>
          <ol className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
            {[
              ["代表商品", "#quick-products"], ["材質の違い", "#difference"], ["サイズと必要枚数", "#size"],
              ["JFE全24商品", "#jfe-list"], ["マグピタ全6商品", "#magpita-list"], ["施工・収納用品", "#accessories"],
              ["搬入・施工", "#installation"], ["失敗24項目", "#mistakes"], ["法人チェック", "#corporate-checklist"], ["FAQ", "#faq"],
            ].map(([label, href]) => <li key={href}><a href={href} className="underline underline-offset-4">{label}</a></li>)}
          </ol>
        </nav>

        <H2 id="quick-products">前半で確認できる代表商品5点</H2>
        <p className="leading-8 text-gray-700">代表的な実寸・販売単位・工法をつかみやすい商品だけを先に掲載します。候補が決まらない場合は後段の全商品表から絞り込めます。</p>
        <div className="mt-5 grid gap-5 md:grid-cols-2">{representativeProducts.map((p) => <ProductCard key={p.code} product={p} />)}</div>

        <H2 id="difference">JFEホーローとマグピタボードの違い</H2>
        <p className="leading-8 text-gray-700">どちらも磁石を使える壁面づくりに向きますが、厚さと納まりが異なります。色だけでなく、下地、仕上がり厚、切断、目地、搬入から選んでください。</p>
        <TableWrap><table className="w-full border-collapse"><thead><tr><Th>比較</Th><Th>JFEホーロー</Th><Th>マグピタボード</Th></tr></thead><tbody>
          <tr><Td>掲載数</Td><Td>24商品</Td><Td>6商品</Td></tr>
          <tr><Td>厚さ</Td><Td>0.5mm</Td><Td>3.4mm</Td></tr>
          <tr><Td>実寸</Td><Td>890×1800、890×2400、1219×1800、1219×2400mm</Td><Td>910×1820、910×2420mm</Td></tr>
          <tr><Td>選定軸</Td><Td>薄型仕上げ、清掃、色、マーカー利用</Td><Td>既存壁改修、ボード納まり、色、梱包</Td></tr>
          <tr><Td>注意</Td><Td>折り曲げ、端部、搬入、現行品</Td><Td>下地平滑性、接着、見切り、目地</Td></tr>
        </tbody></table></TableWrap>
        <Note title="「磁石が付く」と「収納を安全に保持できる」は別です">保持力は磁石の種類、接触面積、荷重、重心、水分・油分、振動で変わります。施工後は軽い物から試し、熱源や作業動線から離してください。</Note>

        <H2 id="size">サイズは面積ではなく割付・継ぎ目・搬入で選ぶ</H2>
        <p className="leading-8 text-gray-700">壁の幅と高さを実測し、コンセント、窓、換気扇、吊戸棚、出隅・入隅を書き込んだ割付図を作ります。面積計算は仮枚数にすぎず、実発注数は切り欠き、目地、端材、予備板、梱包単位で決めます。</p>
        <TableWrap><table className="w-full border-collapse"><thead><tr><Th>呼称</Th><Th>実寸</Th><Th>面積</Th><Th>考え方</Th></tr></thead><tbody>
          {sizeRows.map(([a,b,c,d]) => <tr key={a}><Td>{a}</Td><Td>{b}</Td><Td>{c}</Td><Td>{d}</Td></tr>)}
        </tbody></table></TableWrap>
        <div className="rounded-xl bg-gray-100 p-5"><p className="font-bold">仮枚数 ＝ 施工対象面積 ÷ 1枚の面積</p><p className="mt-2 text-sm leading-7">最終枚数は割付図で決めます。開口部を面積控除しても、切り欠き後の端材を再利用できない場合があります。</p></div>
        <TableWrap><table className="w-full border-collapse"><thead><tr><Th>壁面</Th><Th>割付例</Th><Th>利点</Th><Th>確認</Th></tr></thead><tbody>
          {layoutRows.map(([a,b,c,d]) => <tr key={a}><Td>{a}</Td><Td>{b}</Td><Td>{c}</Td><Td>{d}</Td></tr>)}
        </tbody></table></TableWrap>
        <p className="text-sm leading-7 text-gray-600">※割付例は判断方法を示す編集部例です。施工要領、目地、見切り、現場実測に基づき施工者が最終決定してください。</p>
        <figure className="my-7 overflow-hidden rounded-2xl border"><Image src={`/images/${SLUG}/kitchen-panel-size-layout-comparison.jpg`} alt="3×6・3×8・4×6・4×8の割付を比較するイメージ" width={1200} height={675} className="h-auto w-full" /></figure>

        <H2 id="jfe-list">JFEホーローキッチンパネル24商品のサイズ・色・枚数表</H2>
        <p className="leading-8 text-gray-700">型番、実寸、色、販売単位を一行ずつ掲載し、商品名から販売ページへ直接移動できます。商品名検索にも対応するため正式名称は商品マスター内に保持しています。</p>
        <Note title="W-931-SMと4×6は発注前に現行確認">Excel掲載商品としてリンクを残していますが、2026年7月時点のJFE建材公式の現行色・標準サイズ掲載とは差異があります。廃番、在庫限り、受注可否、後継色・代替サイズ、納期を確認してください。</Note>
        <TableWrap><table className="w-full border-collapse"><thead><tr><Th>商品・型番</Th><Th>サイズ</Th><Th>色</Th><Th>販売単位</Th><Th>確認</Th></tr></thead><tbody>
          {jfeProducts.map((p) => <tr key={p.code}><Td><ProductLink product={p} /><span className="block text-xs text-gray-500">ID {p.code}</span></Td><Td>{p.size}</Td><Td>{p.color}</Td><Td>{p.pack}</Td><Td>{p.currentNote || "在庫・納期・配送条件"}</Td></tr>)}
        </tbody></table></TableWrap>
        <p className="leading-8 text-gray-700">メーカー公式ではW-970-SMはホワイトボード用マーカーの書き消しに対応し、W-455-SMは消去性が多少劣ると案内されています。筆記運用を行う場合は色見本だけでなく書き消しも試してください。</p>

        <H2 id="magpita-list">マグピタボード6商品のサイズ・色・梱包比較</H2>
        <p className="leading-8 text-gray-700">910×2420mmのバラと910×1820mmの2枚梱包を、施工面、割付、目地、見切り、施工部材まで合わせて比較します。</p>
        <TableWrap><table className="w-full border-collapse"><thead><tr><Th>商品</Th><Th>サイズ</Th><Th>色</Th><Th>販売単位</Th><Th>用途</Th></tr></thead><tbody>
          {magpitaProducts.map((p) => <tr key={p.code}><Td><ProductLink product={p} /><span className="block text-xs text-gray-500">ID {p.code}</span></Td><Td>{p.size}</Td><Td>{p.color}</Td><Td>{p.pack}</Td><Td>{p.use}</Td></tr>)}
        </tbody></table></TableWrap>
        <figure className="my-7 overflow-hidden rounded-2xl border"><Image src={`/images/${SLUG}/enamel-vs-magpita-board-comparison.jpg`} alt="薄型ホーローと3.4mmマグピタボードを比較するイメージ" width={1200} height={675} className="h-auto w-full" /></figure>
        <div className="grid gap-5 md:grid-cols-2">{magpitaProducts.map((p) => <ProductCard key={p.code} product={p} />)}</div>

        <H2 id="accessories">施工キットとマグネット収納19商品の使い分け</H2>
        <p className="leading-8 text-gray-700">壁材を選んだ後に、ふきん、タオル、ペーパー、小物、フックの定位置を決めると、床や天板へ物を置かない清掃しやすい運用へつながります。</p>
        <TableWrap><table className="w-full border-collapse"><thead><tr><Th>商品</Th><Th>分類</Th><Th>色</Th><Th>用途</Th><Th>確認</Th></tr></thead><tbody>
          {accessoryProducts.map((p) => <tr key={p.code}><Td><ProductLink product={p} /><span className="block text-xs text-gray-500">ID {p.code}</span></Td><Td>{p.badge}</Td><Td>{p.color}</Td><Td>{p.use}</Td><Td>{p.check}</Td></tr>)}
        </tbody></table></TableWrap>
        <figure className="my-7 overflow-hidden rounded-2xl border"><Image src={`/images/${SLUG}/magnetic-kitchen-storage-zoning.jpg`} alt="キッチン壁面のマグネット収納を用途別に配置するイメージ" width={1200} height={675} className="h-auto w-full" /></figure>

        <H2 id="installation">搬入・施工・運用は7段階で確認</H2>
        <ol className="space-y-3">
          {[
            ["現場実測","幅、高さ、開口、出隅、入隅、コンセント、熱源を記録"],
            ["方式選定","0.5mmホーローか3.4mmボードかを下地と仕上がり厚で決定"],
            ["割付図","継ぎ目、切断、目地、見切り、端材、予備板を図面化"],
            ["搬入","車両、荷下ろし、通路、EV、階段、仮置き場所を実寸確認"],
            ["施工要領","下地処理、接着剤、圧着、養生、端部をメーカー情報と照合"],
            ["収納試験","軽い物から載せ、ずれ、回転、落下、清掃性を確認"],
            ["台帳","品番、色、ロット、施工日、写真、予備板、清掃方法を保存"],
          ].map(([t,x],i) => <li key={t} className="grid grid-cols-[2.5rem_1fr] gap-3 rounded-lg border p-4"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 font-bold text-white">{i+1}</span><div><h3 className="font-bold">{t}</h3><p className="mt-1 leading-7 text-gray-700">{x}</p></div></li>)}
        </ol>
        <figure className="my-7 overflow-hidden rounded-2xl border"><Image src={`/images/${SLUG}/large-panel-delivery-installation-check.jpg`} alt="大判パネルの搬入経路と施工前チェックを行うイメージ" width={1200} height={675} className="h-auto w-full" /></figure>
        <Note title="配送条件を商品名の末尾まで確認">Excel掲載のJFE商品名には「個人宅配送不可」とあります。法人名、荷受け人員、車両進入、荷下ろし方法、地域条件を発注前に確認してください。</Note>

        <H2 id="mistakes">よくある失敗24項目</H2>
        <ol className="grid gap-3">{failureItems.map((item,i) => <li key={item} className="grid grid-cols-[2.5rem_1fr] gap-3 rounded-lg border p-4"><span className="font-black text-gray-500">{String(i+1).padStart(2,"0")}</span><span className="leading-7 text-gray-700">{item}</span></li>)}</ol>
        <figure className="my-7 overflow-hidden rounded-2xl border"><Image src={`/images/${SLUG}/kitchen-panel-cutting-edge-protection.jpg`} alt="ホーローキッチンパネルの端部保護と養生を確認するイメージ" width={1200} height={675} className="h-auto w-full" /></figure>

        <H2 id="corporate-checklist">法人購買・施工店向け発注チェックリスト</H2>
        <TableWrap><table className="w-full border-collapse"><thead><tr><Th>確認項目</Th><Th>記入内容</Th><Th>判定</Th></tr></thead><tbody>
          {corporateChecklist.map(([a,b,c]) => <tr key={a}><Td>{a}</Td><Td>{b}</Td><Td>{c}</Td></tr>)}
        </tbody></table></TableWrap>
        <p className="leading-8 text-gray-700">発注書には、メーカー＋シリーズ＋型番＋実寸＋色＋枚数＋商品IDを残し、販売ページURLも添付します。「白・3×6・2枚」のような短縮は誤発注の原因になります。</p>
        <figure className="my-7 overflow-hidden rounded-2xl border"><Image src={`/images/${SLUG}/magnetic-panel-corporate-procurement-checklist.jpg`} alt="法人担当者がパネルのサイズ・色・枚数・施工部材を確認するイメージ" width={1200} height={675} className="h-auto w-full" /></figure>

        <H2 id="related">関連する壁面づくりの選択肢</H2>
        <div className="grid gap-4 sm:grid-cols-3">
          <Link href="/articles/magnetic-wall-diy" className="rounded-xl border p-4 font-bold hover:bg-gray-50">マグネットがつく壁を後付けする方法</Link>
          <Link href="/articles/magnet-sheet-selection" className="rounded-xl border p-4 font-bold hover:bg-gray-50">マグネットシートの選び方</Link>
          <Link href="/articles/steel-composite-board-whiteboard" className="rounded-xl border p-4 font-bold hover:bg-gray-50">スチール複合板・ホワイトボード用途</Link>
        </div>

        <H2 id="faq">マグネットがつくキッチンパネルのFAQ</H2>
        <div className="divide-y rounded-xl border">{faqs.map((faq) => <details key={faq.question} className="p-5"><summary className="cursor-pointer font-bold leading-7">{faq.question}</summary><p className="mt-3 leading-8 text-gray-700">{faq.answer}</p></details>)}</div>
        <p className="mt-4 text-xs leading-6 text-gray-500">FAQは可視本文として掲載しています。2026年7月時点のGoogle公式変更を踏まえ、FAQPage構造化データは実装していません。</p>

        <H2 id="references">一次情報・公式情報</H2>
        <ul className="space-y-3">
          <li className="rounded-lg border p-4"><a href="https://jfe-kenzai.co.jp/products/interior-enameled-kitchen-panel/" target="_blank" rel="noopener noreferrer" className="font-bold underline">JFE建材「内装ホーロー」</a><p className="mt-1 text-sm">特長、サイズ、厚さ、不燃認定、マーカー使用可否を確認。</p></li>
          <li className="rounded-lg border p-4"><a href="https://www.trade-sign.com/magnet-base/037655.html" target="_blank" rel="noopener noreferrer" className="font-bold underline">マグピタボード商品情報</a><p className="mt-1 text-sm">厚さ、寸法、施工・関連情報を確認。</p></li>
          <li className="rounded-lg border p-4"><a href="https://developers.google.com/search/docs/appearance/ai-features" target="_blank" rel="noopener noreferrer" className="font-bold underline">Google Search Central AI Features</a><p className="mt-1 text-sm">通常のSEO基盤、クロール可能な本文、画像、内部リンクを重視。</p></li>
        </ul>

        <H2 id="summary">まとめ：実寸と割付を決めてから商品リンクを選ぶ</H2>
        <p className="leading-8 text-gray-700">まず0.5mmホーローか3.4mmボードかを選び、壁の実寸、割付、搬入、下地、色、枚数、梱包単位を決めます。その後にリンク付きサイズ表から商品ページへ進む順番が誤発注を抑えやすい方法です。</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <a href="#jfe-list" className="inline-flex min-h-12 items-center justify-center rounded-md bg-gray-900 px-5 py-3 text-center font-bold text-white hover:bg-gray-700">JFE 24商品を確認</a>
          <a href="#magpita-list" className="inline-flex min-h-12 items-center justify-center rounded-md border-2 border-gray-900 px-5 py-3 text-center font-bold hover:bg-gray-50">マグピタ6商品を確認</a>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
