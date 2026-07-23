import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";

const SLUG = "electric-wire-upper-selection-guide";
const UTM = "utm_source=sagyou_navi";
const ARTICLE_URL = `https://sagyou-navi.com/articles/${SLUG}`;

function buildUrl(url: string, utm: string): string {
  if (!url) return url;
  const hashIndex = url.indexOf("#");
  const append = (base: string) => `${base}${base.includes("?") ? "&" : "?"}${utm}`;
  if (hashIndex === -1) return append(url);
  return `${append(url.slice(0, hashIndex))}${url.slice(hashIndex)}`;
}

type ShopLink = { shop: "rakuten" | "yahoo"; url: string; label: string };
type Product = {
  code: string;
  short: string;
  formal: string;
  category: string;
  use: string;
  spec: string;
  check: string;
  img: string;
  detail_imgs: string[];
  links: ShopLink[];
};

const products: Product[] = [
  {
    "code": "290230",
    "short": "電動ワイヤーアッパー UE40CW",
    "formal": "電動ワイヤーアッパー UE40CW",
    "category": "ワイヤーアッパー",
    "use": "照明・看板・ダクト・軽量設備の高所仮保持・昇降",
    "spec": "電動昇降式 / 仕様の詳細は商品ページ・メーカー資料で確認",
    "check": "最大積載・最大揚程・収納寸法・設置安定性・アウトリガー有無・搬入経路を事前確認",
    "img": "/products/290230.jpg",
    "detail_imgs": [
      "/products/290230_00001.jpg",
      "/products/290230_00002.jpg"
    ],
    "links": [
      {
        "shop": "yahoo",
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/290230.html",
        "label": "電動ワイヤーアッパー UE40CWはこちら"
      }
    ]
  },
  {
    "code": "168636",
    "short": "コゾウリフター フォーク式 500kg H50〜1470mm BEA-H500-15-5H 115-8398",
    "formal": "コゾウリフター フォーク式 500kg H50〜1470mm BEA-H500-15-5H 115-8398",
    "category": "コゾウリフター",
    "use": "パレット・箱物・設備部材の昇降や載せ替え",
    "spec": "500kg / H50〜1470mm / BEA-H500-15-5H",
    "check": "使用場所・荷重・揚程・テーブル/フォーク寸法・電源・安全カバー有無を確認",
    "img": "/products/168636.jpg",
    "detail_imgs": [],
    "links": [
      {
        "shop": "yahoo",
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/168636.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "商品ページを見る"
      }
    ]
  },
  {
    "code": "168568",
    "short": "ハンドリフター 手動 350kg 600×900 高揚程型 オレンジ HLFA-E350W 115-7891",
    "formal": "ハンドリフター 手動 350kg 600×900 高揚程型 オレンジ HLFA-E350W 115-7891",
    "category": "手動ハンドリフター",
    "use": "比較的軽〜中荷重の高さ合わせ・段差解消",
    "spec": "350kg / 600×900 / HLFA-E350W",
    "check": "使用場所・荷重・揚程・テーブル/フォーク寸法・電源・安全カバー有無を確認",
    "img": "/products/168568.jpg",
    "detail_imgs": [],
    "links": [
      {
        "shop": "yahoo",
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/168568.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "商品ページを見る"
      }
    ]
  },
  {
    "code": "168566",
    "short": "ハンドリフター 手動 200kg 500×600 高揚程型 オレンジ HLFA-S200SW 115-7885",
    "formal": "ハンドリフター 手動 200kg 500×600 高揚程型 オレンジ HLFA-S200SW 115-7885",
    "category": "手動ハンドリフター",
    "use": "比較的軽〜中荷重の高さ合わせ・段差解消",
    "spec": "200kg / 500×600 / HLFA-S200SW",
    "check": "使用場所・荷重・揚程・テーブル/フォーク寸法・電源・安全カバー有無を確認",
    "img": "/products/168566.jpg",
    "detail_imgs": [],
    "links": [
      {
        "shop": "yahoo",
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/168566.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "商品ページを見る"
      }
    ]
  },
  {
    "code": "168565",
    "short": "ハンドリフター 手動 80kg 400×720 高揚程型 オレンジ HLFA-S80W 115-7889",
    "formal": "ハンドリフター 手動 80kg 400×720 高揚程型 オレンジ HLFA-S80W 115-7889",
    "category": "手動ハンドリフター",
    "use": "比較的軽〜中荷重の高さ合わせ・段差解消",
    "spec": "80kg / 400×720 / HLFA-S80W",
    "check": "使用場所・荷重・揚程・テーブル/フォーク寸法・電源・安全カバー有無を確認",
    "img": "/products/168565.jpg",
    "detail_imgs": [],
    "links": [
      {
        "shop": "yahoo",
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/168565.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "商品ページを見る"
      }
    ]
  },
  {
    "code": "168560",
    "short": "作業台リフター 手動 250kg 500×800 ハンドルレス オレンジ HLLA-S250 115-8029",
    "formal": "作業台リフター 手動 250kg 500×800 ハンドルレス オレンジ HLLA-S250 115-8029",
    "category": "作業台リフター",
    "use": "作業台高さの調整・仮置き",
    "spec": "250kg / 500×800 / HLLA-S250",
    "check": "使用場所・荷重・揚程・テーブル/フォーク寸法・電源・安全カバー有無を確認",
    "img": "/products/168560.jpg",
    "detail_imgs": [],
    "links": [
      {
        "shop": "yahoo",
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/168560.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "商品ページを見る"
      }
    ]
  },
  {
    "code": "168558",
    "short": "作業台リフター 手動 120kg 350×570 ハンドルレス オレンジ HLLA-S120 160-5364",
    "formal": "作業台リフター 手動 120kg 350×570 ハンドルレス オレンジ HLLA-S120 160-5364",
    "category": "作業台リフター",
    "use": "作業台高さの調整・仮置き",
    "spec": "120kg / 350×570 / HLLA-S120",
    "check": "使用場所・荷重・揚程・テーブル/フォーク寸法・電源・安全カバー有無を確認",
    "img": "/products/168558.jpg",
    "detail_imgs": [],
    "links": [
      {
        "shop": "yahoo",
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/168558.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "商品ページを見る"
      }
    ]
  },
  {
    "code": "215053",
    "short": "テーブルリフト1000kg 電動Bねじ式 DC48V 750×1350 ジャバラ付き HDL-L100713VJ-D4 562-7280",
    "formal": "テーブルリフト1000kg 電動Bねじ式 DC48V 750×1350 ジャバラ付き HDL-L100713VJ-D4 562-7280",
    "category": "テーブルリフト",
    "use": "ライン高さ合わせ・荷台昇降・工程内搬送",
    "spec": "1000kg / 750×1350 / DC48V / ジャバラ付き / HDL-L100713VJ-D4",
    "check": "使用場所・荷重・揚程・テーブル/フォーク寸法・電源・安全カバー有無を確認",
    "img": "/products/215053.jpg",
    "detail_imgs": [],
    "links": [
      {
        "shop": "yahoo",
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/215053.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "商品ページを見る"
      }
    ]
  },
  {
    "code": "215563",
    "short": "テーブルリフト750kg 電動Bねじ式 DC48V 600×900×320〜1370 HDL-W75609V-D4 572-4296",
    "formal": "テーブルリフト750kg 電動Bねじ式 DC48V 600×900×320〜1370 HDL-W75609V-D4 572-4296",
    "category": "テーブルリフト",
    "use": "ライン高さ合わせ・荷台昇降・工程内搬送",
    "spec": "750kg / 600×900×320 / DC48V / HDL-W75609V-D4",
    "check": "使用場所・荷重・揚程・テーブル/フォーク寸法・電源・安全カバー有無を確認",
    "img": "/products/215563.jpg",
    "detail_imgs": [],
    "links": [
      {
        "shop": "yahoo",
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/215563.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "商品ページを見る"
      }
    ]
  },
  {
    "code": "215562",
    "short": "テーブルリフト750kg 電動Bねじ式 DC24V 600×900×320〜1370 HDL-W75609V-D2 572-4275",
    "formal": "テーブルリフト750kg 電動Bねじ式 DC24V 600×900×320〜1370 HDL-W75609V-D2 572-4275",
    "category": "テーブルリフト",
    "use": "ライン高さ合わせ・荷台昇降・工程内搬送",
    "spec": "750kg / 600×900×320 / DC24V / HDL-W75609V-D2",
    "check": "使用場所・荷重・揚程・テーブル/フォーク寸法・電源・安全カバー有無を確認",
    "img": "/products/215562.jpg",
    "detail_imgs": [],
    "links": [
      {
        "shop": "yahoo",
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/215562.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "商品ページを見る"
      }
    ]
  },
  {
    "code": "215050",
    "short": "テーブルリフト1000kg 電動Bねじ式 DC48V 750×1200 ジャバラ付き HDL-L100712VJ-D4 562-7278",
    "formal": "テーブルリフト1000kg 電動Bねじ式 DC48V 750×1200 ジャバラ付き HDL-L100712VJ-D4 562-7278",
    "category": "テーブルリフト",
    "use": "ライン高さ合わせ・荷台昇降・工程内搬送",
    "spec": "1000kg / 750×1200 / DC48V / ジャバラ付き / HDL-L100712VJ-D4",
    "check": "使用場所・荷重・揚程・テーブル/フォーク寸法・電源・安全カバー有無を確認",
    "img": "/products/215050.jpg",
    "detail_imgs": [],
    "links": [
      {
        "shop": "yahoo",
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/215050.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "商品ページを見る"
      }
    ]
  },
  {
    "code": "168610",
    "short": "ハンドリフター 電動 350kg 600×1050 電動昇降式 蛇腹付 HLAN-350WJ 464-4409",
    "formal": "ハンドリフター 電動 350kg 600×1050 電動昇降式 蛇腹付 HLAN-350WJ 464-4409",
    "category": "電動ハンドリフター",
    "use": "荷物を載せたまま台車兼昇降補助として使用",
    "spec": "350kg / 600×1050 / 蛇腹付 / HLAN-350WJ",
    "check": "使用場所・荷重・揚程・テーブル/フォーク寸法・電源・安全カバー有無を確認",
    "img": "/products/168610.jpg",
    "detail_imgs": [],
    "links": [
      {
        "shop": "yahoo",
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/168610.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "商品ページを見る"
      }
    ]
  },
  {
    "code": "215049",
    "short": "テーブルリフト 1000kg 電動BねじDC24Vバッテリー750×1200mm蛇腹 HDL-L100712VJ-D2 263-8900",
    "formal": "テーブルリフト 1000kg 電動BねじDC24Vバッテリー750×1200mm蛇腹 HDL-L100712VJ-D2 263-8900",
    "category": "テーブルリフト",
    "use": "ライン高さ合わせ・荷台昇降・工程内搬送",
    "spec": "1000kg / 750×1200 / DC24V / HDL-L100712VJ-D2",
    "check": "使用場所・荷重・揚程・テーブル/フォーク寸法・電源・安全カバー有無を確認",
    "img": "/products/215049.jpg",
    "detail_imgs": [],
    "links": [
      {
        "shop": "yahoo",
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/215049.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "商品ページを見る"
      }
    ]
  },
  {
    "code": "168609",
    "short": "ハンドリフター 電動 250kg 600×1050 電動昇降式 蛇腹付 HLAN-250WJ 464-4387",
    "formal": "ハンドリフター 電動 250kg 600×1050 電動昇降式 蛇腹付 HLAN-250WJ 464-4387",
    "category": "電動ハンドリフター",
    "use": "荷物を載せたまま台車兼昇降補助として使用",
    "spec": "250kg / 600×1050 / 蛇腹付 / HLAN-250WJ",
    "check": "使用場所・荷重・揚程・テーブル/フォーク寸法・電源・安全カバー有無を確認",
    "img": "/products/168609.jpg",
    "detail_imgs": [],
    "links": [
      {
        "shop": "yahoo",
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/168609.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "商品ページを見る"
      }
    ]
  },
  {
    "code": "168647",
    "short": "コゾウリフター 電動 フォーク式 H78〜2800mm 電動昇降 BEN-D500W-28ST 337-3690",
    "formal": "コゾウリフター 電動 フォーク式 H78〜2800mm 電動昇降 BEN-D500W-28ST 337-3690",
    "category": "コゾウリフター",
    "use": "パレット・箱物・設備部材の昇降や載せ替え",
    "spec": "H78〜2800mm / BEN-D500W-28ST",
    "check": "使用場所・荷重・揚程・テーブル/フォーク寸法・電源・安全カバー有無を確認",
    "img": "/products/168647.jpg",
    "detail_imgs": [],
    "links": [
      {
        "shop": "yahoo",
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/168647.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "商品ページを見る"
      }
    ]
  },
  {
    "code": "168602",
    "short": "ハンドリフター 電動 350kg 600×900 電動昇降式 HLAN-350W 464-4395",
    "formal": "ハンドリフター 電動 350kg 600×900 電動昇降式 HLAN-350W 464-4395",
    "category": "電動ハンドリフター",
    "use": "荷物を載せたまま台車兼昇降補助として使用",
    "spec": "350kg / 600×900 / HLAN-350W",
    "check": "使用場所・荷重・揚程・テーブル/フォーク寸法・電源・安全カバー有無を確認",
    "img": "/products/168602.jpg",
    "detail_imgs": [],
    "links": [
      {
        "shop": "yahoo",
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/168602.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "商品ページを見る"
      }
    ]
  },
  {
    "code": "168646",
    "short": "コゾウリフター 電動 フォーク式 H78〜2200mm 電動昇降 BEN-D500W-22ST 337-3681",
    "formal": "コゾウリフター 電動 フォーク式 H78〜2200mm 電動昇降 BEN-D500W-22ST 337-3681",
    "category": "コゾウリフター",
    "use": "パレット・箱物・設備部材の昇降や載せ替え",
    "spec": "H78〜2200mm / BEN-D500W-22ST",
    "check": "使用場所・荷重・揚程・テーブル/フォーク寸法・電源・安全カバー有無を確認",
    "img": "/products/168646.jpg",
    "detail_imgs": [],
    "links": [
      {
        "shop": "yahoo",
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/168646.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "商品ページを見る"
      }
    ]
  },
  {
    "code": "ta040563-106120",
    "short": "ホイヤー リードバイス折りたたみ式回転リフト ＨＥＵＥＲ Ｃｏｌｌａｐｓｉｂｌｅ−Ｌｉｆｔ １２０ｍｍ用 106120 6144：CRECOTE 楽天市場店",
    "formal": "ホイヤー リードバイス折りたたみ式回転リフト ＨＥＵＥＲ Ｃｏｌｌａｐｓｉｂｌｅ−Ｌｉｆｔ １２０ｍｍ用 106120 6144：CRECOTE 楽天市場店",
    "category": "バイス用リフト",
    "use": "ワーク固定位置の上下・前傾調整",
    "spec": "詳細は商品ページで確認",
    "check": "使用場所・荷重・揚程・テーブル/フォーク寸法・電源・安全カバー有無を確認",
    "img": "/products/ta040563-106120.jpg",
    "detail_imgs": [],
    "links": [
      {
        "shop": "rakuten",
        "url": "https://item.rakuten.co.jp/crecote-shop/ta040563-106120/",
        "label": "商品ページを見る"
      }
    ]
  },
  {
    "code": "ta040564-106140",
    "short": "ホイヤー リードバイス折りたたみ式回転リフト ＨＥＵＥＲ Ｃｏｌｌａｐｓｉｂｌｅ−Ｌｉｆｔ １４０ｍｍ用 106140 6144：CRECOTE 楽天市場店",
    "formal": "ホイヤー リードバイス折りたたみ式回転リフト ＨＥＵＥＲ Ｃｏｌｌａｐｓｉｂｌｅ−Ｌｉｆｔ １４０ｍｍ用 106140 6144：CRECOTE 楽天市場店",
    "category": "バイス用リフト",
    "use": "ワーク固定位置の上下・前傾調整",
    "spec": "詳細は商品ページで確認",
    "check": "使用場所・荷重・揚程・テーブル/フォーク寸法・電源・安全カバー有無を確認",
    "img": "/products/ta040564-106140.jpg",
    "detail_imgs": [],
    "links": [
      {
        "shop": "rakuten",
        "url": "https://item.rakuten.co.jp/crecote-shop/ta040564-106140/",
        "label": "商品ページを見る"
      }
    ]
  },
  {
    "code": "ta040550-104200",
    "short": "ホイヤー リードバイス回転リフト ＨＥＵＥＲ Ｌｉｆｔ １００ｍｍ用 104200 6144：CRECOTE 楽天市場店",
    "formal": "ホイヤー リードバイス回転リフト ＨＥＵＥＲ Ｌｉｆｔ １００ｍｍ用 104200 6144：CRECOTE 楽天市場店",
    "category": "バイス用リフト",
    "use": "ワーク固定位置の上下・前傾調整",
    "spec": "詳細は商品ページで確認",
    "check": "使用場所・荷重・揚程・テーブル/フォーク寸法・電源・安全カバー有無を確認",
    "img": "/products/ta040550-104200.jpg",
    "detail_imgs": [],
    "links": [
      {
        "shop": "rakuten",
        "url": "https://item.rakuten.co.jp/crecote-shop/ta040550-104200/",
        "label": "商品ページを見る"
      }
    ]
  },
  {
    "code": "ta040552-104240",
    "short": "ホイヤー リードバイス回転リフト ＨＥＵＥＲ Ｌｉｆｔ １４０ｍｍ用 104240 6144：CRECOTE 楽天市場店",
    "formal": "ホイヤー リードバイス回転リフト ＨＥＵＥＲ Ｌｉｆｔ １４０ｍｍ用 104240 6144：CRECOTE 楽天市場店",
    "category": "バイス用リフト",
    "use": "ワーク固定位置の上下・前傾調整",
    "spec": "詳細は商品ページで確認",
    "check": "使用場所・荷重・揚程・テーブル/フォーク寸法・電源・安全カバー有無を確認",
    "img": "/products/ta040552-104240.jpg",
    "detail_imgs": [],
    "links": [
      {
        "shop": "rakuten",
        "url": "https://item.rakuten.co.jp/crecote-shop/ta040552-104240/",
        "label": "商品ページを見る"
      }
    ]
  }
];
const representativeCodes: string[] = ["290230", "168610", "168636", "215053", "168568"];
const faqs = [
  {
    "question": "電動ワイヤーアッパーは何に向いていますか？",
    "answer": "高所へ上げた資材をその場で仮保持しながら施工したい場面に向きます。照明、看板、ダクト、軽量設備部材など、上方向へ持ち上げて位置決めしたい用途と相性がよいです。"
  },
  {
    "question": "ハンドリフターとの違いは？",
    "answer": "ハンドリフターは床面付近の荷物を載せたまま搬送・高さ合わせする用途が中心です。ワイヤーアッパーは高所側での仮保持・位置出しを重視する点が大きく異なります。"
  },
  {
    "question": "コゾウリフターとの違いは？",
    "answer": "コゾウリフターはフォーク式で荷物の載せ替えや棚・車両への積み下ろしに向く機種です。高所施工の仮保持を主目的にするならワイヤーアッパーの方が判断しやすいです。"
  },
  {
    "question": "テーブルリフトとの違いは？",
    "answer": "テーブルリフトは定置または工程内でテーブル面を上下させる機械です。資材を頭上へ持ち上げて据え付ける用途とは役割が違います。"
  },
  {
    "question": "一人作業の補助に使えますか？",
    "answer": "一人で持ち上げにくい資材を補助する発想には合いますが、安全管理、周囲立入、荷重、転倒防止、取扱説明書に沿った作業が前提です。無理な一人作業を推奨するものではありません。"
  },
  {
    "question": "選ぶときに最初に見る項目は？",
    "answer": "最初は荷重と揚程、その次に載せたい物の寸法、使用場所、搬入経路、収納時サイズ、電源や充電条件を確認します。"
  },
  {
    "question": "看板施工にも向きますか？",
    "answer": "看板やパネルを高所で仮保持したい場面では有力候補です。ただし看板サイズ、風の影響、固定方法、作業姿勢を事前に確認してください。"
  },
  {
    "question": "照明器具の交換にも使えますか？",
    "answer": "照明器具や配線部材の仮保持補助として検討しやすいですが、器具重量、天井高さ、現場の床状態、安全帯や脚立との役割分担を確認します。"
  },
  {
    "question": "屋外でも使えますか？",
    "answer": "屋外利用は風、勾配、床の凹凸、雨天時の安全性などの条件確認が必要です。取扱説明書の使用条件を優先してください。"
  },
  {
    "question": "他のリフトを一緒に紹介する理由は？",
    "answer": "検索者の悩みは「どのリフトが自分の作業に合うか」であることが多いためです。比較軸を示すことで、UE40CWが向く条件を理解しやすくなります。"
  }
];
const failures: string[] = [
  "ワイヤーアッパーで持ち上げたい物の重量を確認せずに選ぶ",
  "揚程だけ見て収納時サイズや搬入経路を確認しない",
  "作業スペースが狭くアウトリガーや脚の張り出しを考慮しない",
  "屋外で風の影響を軽視する",
  "段差や勾配のある床でそのまま使おうとする",
  "ハンドリフターとワイヤーアッパーの違いを理解せずに発注する",
  "テーブルリフトを高所施工用と誤認する",
  "長尺物の重心位置を見誤る",
  "高所での仮保持後の固定手順を決めていない",
  "保守・点検・保管方法を決めずに導入する",
  "関連リフトを含めて電源条件を確認しない",
  "最安だけで選び、現場寸法や使い勝手を比較しない"
];
const checklist: string[][] = [
  [
    "用途",
    "高所仮保持 / 荷台高さ合わせ / 棚積み / バイス作業",
    "まず用途でリフト種別を分ける"
  ],
  [
    "荷重",
    "持ち上げたい物の実重量",
    "安全率を見込む"
  ],
  [
    "揚程",
    "必要な作業高さ",
    "天井高・取付位置を確認"
  ],
  [
    "寸法",
    "荷物寸法・重心・幅",
    "持ち方や固定方法も確認"
  ],
  [
    "現場",
    "屋内/屋外、床状態、通路幅",
    "転倒や搬入の可否に影響"
  ],
  [
    "電源",
    "電動機種の充電・電源条件",
    "DC24V / DC48Vなども関連比較"
  ],
  [
    "保管",
    "収納時サイズ、置き場所",
    "日常的に出し入れできるか"
  ],
  [
    "安全",
    "立入管理、固定手順、点検頻度",
    "誰が使うかまで決める"
  ]
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "電動ワイヤーアッパーの選び方｜UE40CWを主軸に他リフトとの違いも解説",
  description: "電動ワイヤーアッパー UE40CW を主役に、高所施工向けの使い方、ハンドリフター・コゾウリフター・テーブルリフトとの違い、関連商品まで整理した実務ガイド。",
  datePublished: "2026-07-23",
  dateModified: "2026-07-23",
  mainEntityOfPage: ARTICLE_URL,
  author: {"@type": "Organization", name: "作業用品ナビ編集部"},
  publisher: {"@type": "Organization", name: "作業用品ナビ", url: "https://sagyou-navi.com/"},
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {"@type": "ListItem", position: 1, name: "作業用品ナビ", item: "https://sagyou-navi.com/"},
    {"@type": "ListItem", position: 2, name: "記事一覧", item: "https://sagyou-navi.com/articles"},
    {"@type": "ListItem", position: 3, name: "電動ワイヤーアッパーの選び方", item: ARTICLE_URL},
  ],
};

export const metadata: Metadata = {
  title: "電動ワイヤーアッパーの選び方｜UE40CWを主軸に他リフトとの違いも解説【2026年版】",
  description: "電動ワイヤーアッパー UE40CW を主役に、用途、選び方、ハンドリフター・コゾウリフター・テーブルリフトとの違い、関連商品まで分かりやすく解説。",
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    type: "article",
    url: ARTICLE_URL,
    title: "電動ワイヤーアッパーの選び方｜UE40CWを主軸に他リフトとの違いも解説【2026年版】",
    description: "電動ワイヤーアッパー UE40CW を主役に、用途、選び方、ハンドリフター・コゾウリフター・テーブルリフトとの違い、関連商品まで分かりやすく解説。",
    images: [
      {
        url: "/products/290230.jpg",
        width: 500,
        height: 500,
        alt: "電動ワイヤーアッパー UE40CW の商品画像",
      },
    ],
  },
};

function getProduct(code: string) {
  const item = products.find((product) => product.code === code);
  if (!item) throw new Error(`Product not found: ${code}`);
  return item;
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

function TextLinkButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow sponsored"
      className="inline-flex min-h-11 items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-3 text-center text-sm font-bold text-gray-900 transition hover:border-gray-900 hover:bg-gray-50"
    >
      {children}
    </a>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-sky-200 bg-white shadow-sm">
      <div className="relative aspect-[4/3] bg-sky-50">
        <Image src={product.img} alt={`${product.short}の商品画像`} fill sizes="(max-width:768px) 100vw, 360px" className="object-contain p-4" />
      </div>
      <div className="space-y-3 p-5">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-bold text-sky-900">{product.category}</span>
        </div>
        <h3 className="text-lg font-bold leading-snug text-gray-900">{product.short}</h3>
        <dl className="grid grid-cols-[5rem_1fr] gap-x-3 gap-y-2 text-sm text-gray-700">
          <dt className="font-bold text-gray-600">用途</dt><dd>{product.use}</dd>
          <dt className="font-bold text-gray-600">仕様</dt><dd>{product.spec}</dd>
        </dl>
        <p className="rounded-xl bg-gray-50 p-3 text-xs leading-6 text-gray-700"><strong>確認：</strong>{product.check}</p>
        <div className="grid gap-2">{product.links.map((link) => <ShopButton key={`${product.code}-${link.shop}`} link={link} />)}</div>
      </div>
    </article>
  );
}

function TableWrap({ children }: { children: ReactNode }) {
  return <div className="my-5 overflow-x-auto rounded-xl border border-gray-200">{children}</div>;
}
function Th({ children }: { children: ReactNode }) {
  return <th className="whitespace-nowrap border-b border-gray-300 bg-sky-50 px-4 py-3 text-left text-sm font-bold text-gray-900">{children}</th>;
}
function Td({ children }: { children: ReactNode }) {
  return <td className="min-w-32 border-b border-gray-200 px-4 py-3 align-top text-sm leading-7 text-gray-700">{children}</td>;
}

export default function Page() {
  const reps = representativeCodes.map(getProduct);
  const main = getProduct("290230");
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

        <nav aria-label="パンくず" className="mb-5 text-sm text-gray-600">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href="/" className="underline underline-offset-4">作業用品ナビ</Link></li><li>/</li><li><Link href="/articles" className="underline underline-offset-4">記事一覧</Link></li><li>/</li><li aria-current="page">電動ワイヤーアッパーの選び方</li>
          </ol>
        </nav>

        <header>
          <p className="text-sm font-bold tracking-wide text-sky-700">高所施工・看板・照明・ダクトの仮保持に</p>
          <h1 className="mt-3 text-3xl font-black leading-tight text-gray-900 sm:text-4xl">電動ワイヤーアッパーの選び方<span className="mt-2 block text-xl font-bold sm:text-2xl">UE40CWを主軸に他リフトとの違いも解説【2026年版】</span></h1>
          <p className="mt-4 text-sm text-gray-600">公開日・最終更新日：2026年7月23日 ｜ 作業用品ナビ編集部</p>
        </header>

        <section className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
              <div className="relative aspect-[16/10] bg-sky-50"><Image src={main.img} alt="電動ワイヤーアッパー UE40CW の商品画像" fill className="object-contain p-4" /></div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {main.detail_imgs.map((src, index) => (
                <div key={src} className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
                  <div className="relative aspect-[4/3] bg-sky-50"><Image src={src} alt={`電動ワイヤーアッパー UE40CW の説明画像 ${index + 1}`} fill className="object-contain p-4" /></div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="rounded-2xl border-2 border-sky-500 bg-sky-50 p-5 shadow-sm">
              <p className="mb-2 text-sm font-bold text-sky-900">先に結論</p>
              <div className="space-y-3 leading-8 text-gray-800">
                <p><strong>高所で資材を持ち上げて仮保持したいなら、まず電動ワイヤーアッパー UE40CW を中心に検討するのが分かりやすいです。</strong></p>
                <p>一方で、荷物を載せたまま床付近で移動・高さ調整したいならハンドリフター、パレットや棚への載せ替えならコゾウリフター、工程内でテーブル面を上下させたいならテーブルリフトが向きます。</p>
                <p>つまり「何を」「どの高さへ」「どう保持したいか」で選ぶと失敗しにくくなります。</p>
              </div>
              <div className="mt-5 grid gap-3">
                <ShopButton link={main.links[0]} />
                <TextLinkButton href={buildUrl("https://store.shopping.yahoo.co.jp/signcity-yshop/search.html?aq=&oq=&p=%E3%83%8F%E3%83%B3%E3%83%89%E3%83%AA%E3%83%95%E3%82%BF%E3%83%BC&storeid=signcity-yshop&sc_i=shopping-pc-web-result-storesg-h_srch-srchbtn-sgstfrom-result-storesch-h_srch-srchbox", UTM)}>リフト一覧はこちら</TextLinkButton>
                <TextLinkButton href={buildUrl("https://store.shopping.yahoo.co.jp/signcity-yshop/search.html?aq=&oq=&p=&storeid=signcity-yshop&strcid=a5c8a5e9a5&sc_i=shopping-pc-web-result-storesg-h_srch-srchbtn-sgstfrom-result-storesch-h_srch-srchbox", UTM)}>トラスコ中山一覧はこちら</TextLinkButton>
              </div>
            </div>
          </div>
        </section>

        <nav className="my-8 rounded-xl border border-sky-200 bg-sky-50/50 p-5">
          <p className="font-bold text-gray-900">この記事で分かること</p>
          <ol className="mt-3 grid gap-2 text-sm leading-7 sm:grid-cols-2">
            <li><a href="#quick" className="underline underline-offset-4">代表商品で全体像をつかむ</a></li>
            <li><a href="#diff" className="underline underline-offset-4">ワイヤーアッパーと他リフトの違い</a></li>
            <li><a href="#keywords" className="underline underline-offset-4">狙うべきニッチキーワード</a></li>
            <li><a href="#choose" className="underline underline-offset-4">失敗しにくい選び方</a></li>
            <li><a href="#products" className="underline underline-offset-4">関連商品一覧</a></li>
            <li><a href="#mistakes" className="underline underline-offset-4">よくある失敗</a></li>
            <li><a href="#checklist" className="underline underline-offset-4">法人導入チェックリスト</a></li>
            <li><a href="#faq" className="underline underline-offset-4">FAQ</a></li>
          </ol>
        </nav>

        <section id="quick">
          <h2 className="mb-4 mt-10 border-l-4 border-sky-500 pl-3 text-xl font-bold text-gray-900">まず比較したい代表商品5点</h2>
          <p className="leading-8 text-gray-700">主役は UE40CW ですが、検索者が本当に知りたいのは「自分の作業には何が合うのか」です。そのため、役割が近いリフトを比較しながら、UE40CW が向く場面を明確にします。</p>
          <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{reps.map((product) => <ProductCard key={product.code} product={product} />)}</div>
        </section>

        <section id="diff">
          <h2 className="mb-4 mt-10 border-l-4 border-sky-500 pl-3 text-xl font-bold text-gray-900">電動ワイヤーアッパーと他リフトの違い</h2>
          <p className="leading-8 text-gray-700">高所施工で迷いやすいのが、「ワイヤーアッパーでよいのか、それともハンドリフターやコゾウリフターの方が合うのか」という点です。違いを最初に整理すると、不要な比較記事へ回遊せず、その場で判断しやすくなります。</p>
          <TableWrap>
            <table className="w-full border-collapse"><thead><tr><Th>機種</Th><Th>向く用途</Th><Th>向きにくい用途</Th><Th>こんな人におすすめ</Th></tr></thead><tbody>
              <tr><Td>電動ワイヤーアッパー</Td><Td>高所で資材を仮保持しながら取付・位置出し</Td><Td>重量物の棚積み、パレット搬送</Td><Td>照明・看板・ダクト・設備施工で高所作業を効率化したい</Td></tr>
              <tr><Td>手動 / 電動ハンドリフター</Td><Td>荷物を載せたまま搬送し、テーブル高さを合わせる</Td><Td>頭上での仮保持</Td><Td>工場・倉庫で段差や作業高さを合わせたい</Td></tr>
              <tr><Td>コゾウリフター</Td><Td>フォークで持ち上げ、棚・荷台・パレットへ載せ替える</Td><Td>高所施工の細かな位置合わせ</Td><Td>荷物の積み降ろしを安全に行いたい</Td></tr>
              <tr><Td>テーブルリフト</Td><Td>設備やラインの一部としてテーブル面を上下</Td><Td>機動的な現場施工</Td><Td>定置運用で高さを一定に保ちたい</Td></tr>
              <tr><Td>バイス用リフト</Td><Td>作業台上でワーク固定位置を上下・傾斜調整</Td><Td>資材の昇降搬送全般</Td><Td>整備・金工・板金作業の姿勢改善をしたい</Td></tr>
            </tbody></table>
          </TableWrap>
        </section>

        <section id="keywords">
          <h2 className="mb-4 mt-10 border-l-4 border-sky-500 pl-3 text-xl font-bold text-gray-900">狙うべきニッチキーワード</h2>
          <p className="leading-8 text-gray-700">ビッグワードの「リフト」「ハンドリフター」だけでは大手モールが強くなりやすいため、用途と悩みを掛け合わせた複合検索を取りにいきます。</p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-gray-200 p-5"><h3 className="font-bold text-gray-900">メイン</h3><ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-gray-700"><li>電動ワイヤーアッパー</li><li>ワイヤーアッパー 選び方</li><li>ワイヤーアッパー 使い方</li></ul></div>
            <div className="rounded-xl border border-gray-200 p-5"><h3 className="font-bold text-gray-900">用途系ロングテール</h3><ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-gray-700"><li>照明器具 取付 リフト</li><li>看板 施工 リフト</li><li>ダクト 取付 リフト</li><li>高所 資材 持ち上げ 機械</li><li>高所 仮保持 リフト</li></ul></div>
          </div>
          <div className="mt-4 rounded-xl border border-gray-200 p-5"><h3 className="font-bold text-gray-900">比較・周辺キーワード</h3><ul className="mt-3 grid list-disc gap-x-6 gap-y-1 pl-5 text-sm leading-7 text-gray-700 md:grid-cols-2"><li>ワイヤーアッパー ハンドリフター 違い</li><li>コゾウリフター ワイヤーアッパー 違い</li><li>テーブルリフト 選び方</li><li>電動ハンドリフター 高揚程 違い</li><li>TRUSCO リフト 比較</li><li>UE40CW</li></ul></div>
        </section>

        <section id="choose">
          <h2 className="mb-4 mt-10 border-l-4 border-sky-500 pl-3 text-xl font-bold text-gray-900">電動ワイヤーアッパー UE40CW を選ぶ前に確認したい5項目</h2>
          <ol className="space-y-4 text-gray-700">
            <li><strong>1. 持ち上げたい物の重量</strong>：最大積載に対して余裕を持たせ、付属金具や治具の重量も含めて見ます。</li>
            <li><strong>2. 必要な作業高さ</strong>：揚程だけでなく、取付位置、天井高、障害物の有無も確認します。</li>
            <li><strong>3. 仮保持したい物の形状</strong>：長尺物、板状、箱型では保持のしやすさが変わります。</li>
            <li><strong>4. 使用場所の床と通路</strong>：段差、勾配、通路幅、搬入経路、保管場所が合わないと現場で使いづらくなります。</li>
            <li><strong>5. 作業手順全体</strong>：持ち上げた後に誰が固定し、どの順で離すかまで決めると導入効果が出やすくなります。</li>
          </ol>
        </section>

        <section id="products">
          <h2 className="mb-4 mt-10 border-l-4 border-sky-500 pl-3 text-xl font-bold text-gray-900">電動ワイヤーアッパー周辺の関連商品一覧</h2>
          <p className="leading-8 text-gray-700">メイン訴求は UE40CW ですが、比較検討層の離脱を減らすため、関連リフトも一覧で整理しています。商品名検索にも対応できるよう、正式名称をそのまま掲載しています。</p>
          <TableWrap>
            <table className="w-full border-collapse"><thead><tr><Th>カテゴリ</Th><Th>商品名</Th><Th>用途</Th><Th>主な仕様</Th><Th>商品リンク</Th></tr></thead><tbody>
            {products.map((product) => (
              <tr key={product.code}>
                <Td>{product.category}</Td>
                <Td>{product.formal}</Td>
                <Td>{product.use}</Td>
                <Td>{product.spec}</Td>
                <Td><a href={buildUrl(product.links[0].url, UTM)} target="_blank" rel="nofollow sponsored" className="font-bold text-gray-900 underline underline-offset-4 hover:text-sky-700">{product.links[0].label}</a></Td>
              </tr>
            ))}
            </tbody></table>
          </TableWrap>
        </section>

        <section id="mistakes">
          <h2 className="mb-4 mt-10 border-l-4 border-sky-500 pl-3 text-xl font-bold text-gray-900">よくある失敗</h2>
          <ol className="grid gap-3 md:grid-cols-2">{failures.map((item, index) => <li key={item} className="grid grid-cols-[2.5rem_1fr] gap-3 rounded-xl border border-gray-200 p-4"><span className="font-black text-sky-700">{String(index + 1).padStart(2, "0")}</span><span className="leading-7 text-gray-700">{item}</span></li>)}</ol>
        </section>

        <section id="checklist">
          <h2 className="mb-4 mt-10 border-l-4 border-sky-500 pl-3 text-xl font-bold text-gray-900">法人導入チェックリスト</h2>
          <TableWrap>
            <table className="w-full border-collapse"><thead><tr><Th>項目</Th><Th>確認内容</Th><Th>見るポイント</Th></tr></thead><tbody>
              {checklist.map(([a,b,c]) => <tr key={a}><Td>{a}</Td><Td>{b}</Td><Td>{c}</Td></tr>)}
            </tbody></table>
          </TableWrap>
        </section>

        <section id="faq">
          <h2 className="mb-4 mt-10 border-l-4 border-sky-500 pl-3 text-xl font-bold text-gray-900">FAQ</h2>
          <div className="divide-y divide-gray-200 rounded-xl border border-gray-200">{faqs.map((faq) => <details key={faq.question} className="p-5"><summary className="cursor-pointer list-none font-bold leading-7 text-gray-900">{faq.question}</summary><p className="mt-3 leading-8 text-gray-700">{faq.answer}</p></details>)}</div>
        </section>

        <section className="mt-10 rounded-2xl border-2 border-sky-500 bg-sky-50 p-6">
          <h2 className="text-xl font-bold text-gray-900">まとめ</h2>
          <p className="mt-3 leading-8 text-gray-700">電動ワイヤーアッパー UE40CW は、高所での仮保持・位置出しを重視する作業で選びやすい一台です。関連リフトを比較しても、頭上側の施工補助という役割が明確なら、最初に候補へ入れやすい商品です。</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <ShopButton link={main.links[0]} />
            <TextLinkButton href={buildUrl("https://store.shopping.yahoo.co.jp/signcity-yshop/search.html?aq=&oq=&p=%E3%83%8F%E3%83%B3%E3%83%89%E3%83%AA%E3%83%95%E3%82%BF%E3%83%BC&storeid=signcity-yshop&sc_i=shopping-pc-web-result-storesg-h_srch-srchbtn-sgstfrom-result-storesch-h_srch-srchbox", UTM)}>リフト一覧はこちら</TextLinkButton>
            <TextLinkButton href={buildUrl("https://store.shopping.yahoo.co.jp/signcity-yshop/search.html?aq=&oq=&p=&storeid=signcity-yshop&strcid=a5c8a5e9a5&sc_i=shopping-pc-web-result-storesg-h_srch-srchbtn-sgstfrom-result-storesch-h_srch-srchbox", UTM)}>トラスコ中山一覧はこちら</TextLinkButton>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
