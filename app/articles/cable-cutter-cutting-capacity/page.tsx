import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";

export const metadata: Metadata = {
  title: "ケーブルカッターの切断能力の見方｜sq・φ・銅線専用・CVT対応を確認",
  description:
    "ケーブルカッターの切断能力を、sq・仕上外径φ・線種・導体材質・単芯／多芯から読み解きます。銅線専用、ラチェット式、充電式、1000V絶縁、通信ケーブル用の違いと誤発注防止を解説。",
  alternates: {
    canonical:
      "https://sagyou-navi.com/articles/cable-cutter-cutting-capacity",
  },
  openGraph: {
    type: "article",
    title: "ケーブルカッターの切断能力の見方｜sq・φ・銅線専用・CVT対応を確認",
    description:
      "sq・φ・線種・導体材質・心数から、ケーブルカッターの切断能力を正しく読み解きます。",
    url: "https://sagyou-navi.com/articles/cable-cutter-cutting-capacity",
    images: [
      "https://sagyou-navi.com/images/cable-cutter-cutting-capacity/cable-cutter-capacity-guide-hero.jpg",
    ],
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

const IMG = (file: string) => `/products/${file}`;
const HERO = (file: string) =>
  `/images/cable-cutter-cutting-capacity/${file}`;

const PAGE_URL =
  "https://sagyou-navi.com/articles/cable-cutter-cutting-capacity";
const HOME_URL = "https://sagyou-navi.com/";

type ProductGroup =
  | "standard"
  | "large"
  | "electric"
  | "insulated"
  | "special"
  | "accessory"
  | "related";

type Product = {
  id: string;
  name: string;
  short: string;
  image: string;
  url: string;
  group: ProductGroup;
  badge: string;
  use: string;
  check: string;
  cta: string;
};

const products: Product[] = [
  {
    id: "ta033838_9002660000",
    name: "ワイドミュラー ケーブルカッター KT 12 9002660000",
    short: "ワイドミュラー ケーブルカッター KT 12 9002660000",
    image: "ta033838-9002660000.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta033838-9002660000/", UTM),
    group: "standard",
    badge: "手動・標準",
    use: "盤内配線や設備工事で、比較的小〜中径の銅・アルミケーブルを切断する候補",
    check: "対応線種、導体材質、最大sq、仕上外径φ、単芯・多芯の別を商品ページとメーカー資料で確認。 鋼線・硬銅線・ピアノ線・ACSR等への使用可否を必ず確認。",
    cta: "商品ページで仕様を確認する",
  },
  {
    id: "ta032767_600500",
    name: "フジ矢 アルミケーブルカッター 600500",
    short: "フジ矢 アルミケーブルカッター 600500",
    image: "ta032767-600500.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta032767-600500/", UTM),
    group: "standard",
    badge: "手動・標準",
    use: "盤内配線や設備工事で、比較的小〜中径の銅・アルミケーブルを切断する候補",
    check: "対応線種、導体材質、最大sq、仕上外径φ、単芯・多芯の別を商品ページとメーカー資料で確認。 鋼線・硬銅線・ピアノ線・ACSR等への使用可否を必ず確認。",
    cta: "商品ページで仕様を確認する",
  },
  {
    id: "ta039152_sc250sh",
    name: "HIT ケーブルカッターショートハンドル SC250SH",
    short: "HIT ケーブルカッターショートハンドル SC250SH",
    image: "ta039152-sc250sh.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta039152-sc250sh/", UTM),
    group: "standard",
    badge: "手動・標準",
    use: "盤内配線や設備工事で、比較的小〜中径の銅・アルミケーブルを切断する候補",
    check: "対応線種、導体材質、最大sq、仕上外径φ、単芯・多芯の別を商品ページとメーカー資料で確認。 鋼線・硬銅線・ピアノ線・ACSR等への使用可否を必ず確認。",
    cta: "商品ページで仕様を確認する",
  },
  {
    id: "ta033998_9511225",
    name: "KNIPEX ステップカットXL ケーブルカッター 225mm プラスチックハンドル 9511225",
    short: "KNIPEX ステップカットXL ケーブルカッター 225mm 9511225",
    image: "ta033998-9511225.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta033998-9511225/", UTM),
    group: "standard",
    badge: "段階切断",
    use: "盤内配線や設備工事で、比較的小〜中径の銅・アルミケーブルを切断する候補",
    check: "対応線種、導体材質、最大sq、仕上外径φ、単芯・多芯の別を商品ページとメーカー資料で確認。 鋼線・硬銅線・ピアノ線・ACSR等への使用可否を必ず確認。",
    cta: "商品ページで仕様を確認する",
  },
  {
    id: "ta035404_cc325",
    name: "CACTUS 手動式ケーブルカッター CC325",
    short: "CACTUS 手動式ケーブルカッター CC325",
    image: "ta035404-cc325.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta035404-cc325/", UTM),
    group: "large",
    badge: "ラチェット・手動",
    use: "太いIV・CV・CVT・VVR等を手動で切断する候補",
    check: "対応線種、導体材質、最大sq、仕上外径φ、単芯・多芯の別を商品ページとメーカー資料で確認。 長柄の取り回し、必要な開き幅、途中解除機構、刃の交換可否を確認。",
    cta: "商品ページで仕様を確認する",
  },
  {
    id: "ta039110_s7k50",
    name: "泉 充電式ケーブルカッター S7K50",
    short: "泉 充電式ケーブルカッター S7K50",
    image: "ta039110-s7k50.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta039110-s7k50/", UTM),
    group: "electric",
    badge: "充電式",
    use: "大径ケーブルを繰り返し切断し、手作業の負担を抑えたい現場",
    check: "対応線種、導体材質、最大sq、仕上外径φ、単芯・多芯の別を商品ページとメーカー資料で確認。 電池・充電器・本体のみの別、重量、口開き、替刃、後継品、活線不可も確認。",
    cta: "商品ページで仕様を確認する",
  },
  {
    id: "ta035739_dc60k",
    name: "DENSAN スマートケーブルカッター DC60K",
    short: "DENSAN スマートケーブルカッター DC60K",
    image: "ta035739-dc60k.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta035739-dc60k/", UTM),
    group: "standard",
    badge: "手動・標準",
    use: "盤内配線や設備工事で、比較的小〜中径の銅・アルミケーブルを切断する候補",
    check: "対応線種、導体材質、最大sq、仕上外径φ、単芯・多芯の別を商品ページとメーカー資料で確認。 鋼線・硬銅線・ピアノ線・ACSR等への使用可否を必ず確認。",
    cta: "商品ページで仕様を確認する",
  },
  {
    id: "ta034000_9512165",
    name: "KNIPEX ケーブルカッター コンフォートハンドル 165mm 9512165",
    short: "KNIPEX ケーブルカッター 165mm 9512165",
    image: "ta034000-9512165.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta034000-9512165/", UTM),
    group: "standard",
    badge: "手動・標準",
    use: "盤内配線や設備工事で、比較的小〜中径の銅・アルミケーブルを切断する候補",
    check: "対応線種、導体材質、最大sq、仕上外径φ、単芯・多芯の別を商品ページとメーカー資料で確認。 鋼線・硬銅線・ピアノ線・ACSR等への使用可否を必ず確認。",
    cta: "商品ページで仕様を確認する",
  },
  {
    id: "ta035429_ck150",
    name: "エビ ケーブルカッター CK150",
    short: "エビ ケーブルカッター CK150",
    image: "ta035429-ck150.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta035429-ck150/", UTM),
    group: "standard",
    badge: "手動・標準",
    use: "盤内配線や設備工事で、比較的小〜中径の銅・アルミケーブルを切断する候補",
    check: "対応線種、導体材質、最大sq、仕上外径φ、単芯・多芯の別を商品ページとメーカー資料で確認。 鋼線・硬銅線・ピアノ線・ACSR等への使用可否を必ず確認。",
    cta: "商品ページで仕様を確認する",
  },
  {
    id: "ta033908_9202060000",
    name: "ワイドミュラー ケーブルカッター KT 55 9202060000",
    short: "ワイドミュラー ケーブルカッター KT 55 9202060000",
    image: "ta033908-9202060000.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta033908-9202060000/", UTM),
    group: "standard",
    badge: "手動・標準",
    use: "盤内配線や設備工事で、比較的小〜中径の銅・アルミケーブルを切断する候補",
    check: "対応線種、導体材質、最大sq、仕上外径φ、単芯・多芯の別を商品ページとメーカー資料で確認。 鋼線・硬銅線・ピアノ線・ACSR等への使用可否を必ず確認。",
    cta: "商品ページで仕様を確認する",
  },
  {
    id: "ta040250_upb41",
    name: "IDEAL ケーブルカッター UPB41",
    short: "IDEAL ケーブルカッター UPB41",
    image: "ta040250-upb41.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta040250-upb41/", UTM),
    group: "standard",
    badge: "手動・標準",
    use: "盤内配線や設備工事で、比較的小〜中径の銅・アルミケーブルを切断する候補",
    check: "対応線種、導体材質、最大sq、仕上外径φ、単芯・多芯の別を商品ページとメーカー資料で確認。 鋼線・硬銅線・ピアノ線・ACSR等への使用可否を必ず確認。",
    cta: "商品ページで仕様を確認する",
  },
  {
    id: "ta031339_206118pk",
    name: "WAGO ワゴ 206−118 ケーブルカッター 206118PK",
    short: "WAGO ワゴ 206−118 ケーブルカッター 206118PK",
    image: "ta031339-206118pk.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta031339-206118pk/", UTM),
    group: "standard",
    badge: "手動・標準",
    use: "盤内配線や設備工事で、比較的小〜中径の銅・アルミケーブルを切断する候補",
    check: "対応線種、導体材質、最大sq、仕上外径φ、単芯・多芯の別を商品ページとメーカー資料で確認。 鋼線・硬銅線・ピアノ線・ACSR等への使用可否を必ず確認。",
    cta: "商品ページで仕様を確認する",
  },
  {
    id: "ta032999_63050",
    name: "KLEIN ケーブルカッター 250mm 63050",
    short: "KLEIN ケーブルカッター 250mm 63050",
    image: "ta032999-63050.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta032999-63050/", UTM),
    group: "standard",
    badge: "手動・標準",
    use: "盤内配線や設備工事で、比較的小〜中径の銅・アルミケーブルを切断する候補",
    check: "対応線種、導体材質、最大sq、仕上外径φ、単芯・多芯の別を商品ページとメーカー資料で確認。 鋼線・硬銅線・ピアノ線・ACSR等への使用可否を必ず確認。",
    cta: "商品ページで仕様を確認する",
  },
  {
    id: "ta033837_9002650000",
    name: "ワイドミュラー ケーブルカッター KT 8 9002650000",
    short: "ワイドミュラー ケーブルカッター KT 8 9002650000",
    image: "ta033837-9002650000.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta033837-9002650000/", UTM),
    group: "standard",
    badge: "手動・標準",
    use: "盤内配線や設備工事で、比較的小〜中径の銅・アルミケーブルを切断する候補",
    check: "対応線種、導体材質、最大sq、仕上外径φ、単芯・多芯の別を商品ページとメーカー資料で確認。 鋼線・硬銅線・ピアノ線・ACSR等への使用可否を必ず確認。",
    cta: "商品ページで仕様を確認する",
  },
  {
    id: "ta040251_upb76",
    name: "IDEAL ケーブルカッター UPB76",
    short: "IDEAL ケーブルカッター UPB76",
    image: "ta040251-upb76.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta040251-upb76/", UTM),
    group: "standard",
    badge: "手動・標準",
    use: "盤内配線や設備工事で、比較的小〜中径の銅・アルミケーブルを切断する候補",
    check: "対応線種、導体材質、最大sq、仕上外径φ、単芯・多芯の別を商品ページとメーカー資料で確認。 鋼線・硬銅線・ピアノ線・ACSR等への使用可否を必ず確認。",
    cta: "商品ページで仕様を確認する",
  },
  {
    id: "ta031338_2061125pk",
    name: "WAGO ケーブルカッター及びストリッパ 2061125PK",
    short: "WAGO ケーブルカッター及びストリッパ 2061125PK",
    image: "ta031338-2061125pk.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta031338-2061125pk/", UTM),
    group: "special",
    badge: "切断・被覆むき",
    use: "切断と被覆むきを一つの工具で行いたい細線・配線作業",
    check: "対象ケーブルの幅・構造・材質を確認。一般電力ケーブルや鋼線へ流用しない。",
    cta: "商品ページで仕様を確認する",
  },
  {
    id: "ta037317_kc450",
    name: "ARM ケーブルカッター450mm KC450",
    short: "ARM ケーブルカッター450mm KC450",
    image: "ta037317-kc450.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta037317-kc450/", UTM),
    group: "large",
    badge: "大径・長柄",
    use: "太いIV・CV・CVT・VVR等を手動で切断する候補",
    check: "対応線種、導体材質、最大sq、仕上外径φ、単芯・多芯の別を商品ページとメーカー資料で確認。 長柄の取り回し、必要な開き幅、途中解除機構、刃の交換可否を確認。",
    cta: "商品ページで仕様を確認する",
  },
  {
    id: "ta039111_s7k50m",
    name: "泉 充電式ケーブルカッター S7K50M",
    short: "泉 充電式ケーブルカッター S7K50M",
    image: "ta039111-s7k50m.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta039111-s7k50m/", UTM),
    group: "electric",
    badge: "充電式",
    use: "大径ケーブルを繰り返し切断し、手作業の負担を抑えたい現場",
    check: "対応線種、導体材質、最大sq、仕上外径φ、単芯・多芯の別を商品ページとメーカー資料で確認。 電池・充電器・本体のみの別、重量、口開き、替刃、後継品、活線不可も確認。",
    cta: "商品ページで仕様を確認する",
  },
  {
    id: "ta034032_9541165",
    name: "KNIPEX ケーブルカッター ストリッパー付き 165mm 9541165",
    short: "KNIPEX ケーブルカッター ストリッパー付き 165mm 9541165",
    image: "ta034032-9541165.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta034032-9541165/", UTM),
    group: "special",
    badge: "切断・被覆むき",
    use: "切断と被覆むきを一つの工具で行いたい細線・配線作業",
    check: "対象ケーブルの幅・構造・材質を確認。一般電力ケーブルや鋼線へ流用しない。",
    cta: "商品ページで仕様を確認する",
  },
  {
    id: "ta034002_9512200",
    name: "KNIPEX ケーブルカッター コンフォートハンドル 200mm 9512200",
    short: "KNIPEX ケーブルカッター 200mm 9512200",
    image: "ta034002-9512200.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta034002-9512200/", UTM),
    group: "standard",
    badge: "手動・標準",
    use: "盤内配線や設備工事で、比較的小〜中径の銅・アルミケーブルを切断する候補",
    check: "対応線種、導体材質、最大sq、仕上外径φ、単芯・多芯の別を商品ページとメーカー資料で確認。 鋼線・硬銅線・ピアノ線・ACSR等への使用可否を必ず確認。",
    cta: "商品ページで仕様を確認する",
  },
  {
    id: "ta033999_9512160",
    name: "KNIPEX ステップカット ケーブルカッター 160mm コンフォートハンドル 9512160",
    short: "KNIPEX ステップカット ケーブルカッター 160mm 9512160",
    image: "ta033999-9512160.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta033999-9512160/", UTM),
    group: "standard",
    badge: "段階切断",
    use: "盤内配線や設備工事で、比較的小〜中径の銅・アルミケーブルを切断する候補",
    check: "対応線種、導体材質、最大sq、仕上外径φ、単芯・多芯の別を商品ページとメーカー資料で確認。 鋼線・硬銅線・ピアノ線・ACSR等への使用可否を必ず確認。",
    cta: "商品ページで仕様を確認する",
  },
  {
    id: "ta036313_frc32a",
    name: "フジ矢 ケーブルカッターラチェットタイプ FRC32A",
    short: "フジ矢 ケーブルカッターラチェットタイプ FRC32A",
    image: "ta036313-frc32a.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta036313-frc32a/", UTM),
    group: "large",
    badge: "ラチェット・手動",
    use: "太いIV・CV・CVT・VVR等を手動で切断する候補",
    check: "対応線種、導体材質、最大sq、仕上外径φ、単芯・多芯の別を商品ページとメーカー資料で確認。 長柄の取り回し、必要な開き幅、途中解除機構、刃の交換可否を確認。",
    cta: "商品ページで仕様を確認する",
  },
  {
    id: "ta034027_9536250",
    name: "KNIPEX 絶縁ケーブルカッター 1000V(ラチェット式) 250mm 9536250",
    short: "KNIPEX 絶縁ケーブルカッター 1000V(ラチェット式) 250mm 9536250",
    image: "ta034027-9536250.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta034027-9536250/", UTM),
    group: "insulated",
    badge: "絶縁タイプ",
    use: "絶縁仕様が求められる電気作業。停電・検電等の手順を前提に使用",
    check: "対応線種、導体材質、最大sq、仕上外径φ、単芯・多芯の別を商品ページとメーカー資料で確認。 1000V絶縁表記は活線切断を自動的に許可する意味ではありません。停電・検電・社内手順を確認。",
    cta: "商品ページで仕様を確認する",
  },
  {
    id: "ta040249_upb240",
    name: "IDEAL ケーブルカッター UPB240",
    short: "IDEAL ケーブルカッター UPB240",
    image: "ta040249-upb240.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta040249-upb240/", UTM),
    group: "standard",
    badge: "手動・標準",
    use: "盤内配線や設備工事で、比較的小〜中径の銅・アルミケーブルを切断する候補",
    check: "対応線種、導体材質、最大sq、仕上外径φ、単芯・多芯の別を商品ページとメーカー資料で確認。 鋼線・硬銅線・ピアノ線・ACSR等への使用可否を必ず確認。",
    cta: "商品ページで仕様を確認する",
  },
  {
    id: "ta036261_felcoc7",
    name: "FELCO ケーブルカッター C7 190MM 切断能力7mm FELCOC7",
    short: "FELCO ケーブルカッター C7 190MM 切断能力7mm FELCOC7",
    image: "ta036261-felcoc7.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta036261-felcoc7/", UTM),
    group: "standard",
    badge: "手動・標準",
    use: "盤内配線や設備工事で、比較的小〜中径の銅・アルミケーブルを切断する候補",
    check: "対応線種、導体材質、最大sq、仕上外径φ、単芯・多芯の別を商品ページとメーカー資料で確認。 鋼線・硬銅線・ピアノ線・ACSR等への使用可否を必ず確認。",
    cta: "商品ページで仕様を確認する",
  },
  {
    id: "ta032200_41214avse",
    name: "FACOM 絶縁工具 マニュアルケーブルカッター 230mm 412.14AVSE",
    short: "FACOM 絶縁工具 マニュアルケーブルカッター 230mm 412.14AVSE",
    image: "ta032200-41214avse.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta032200-41214avse/", UTM),
    group: "insulated",
    badge: "絶縁タイプ",
    use: "絶縁仕様が求められる電気作業。停電・検電等の手順を前提に使用",
    check: "対応線種、導体材質、最大sq、仕上外径φ、単芯・多芯の別を商品ページとメーカー資料で確認。 1000V絶縁表記は活線切断を自動的に許可する意味ではありません。停電・検電・社内手順を確認。",
    cta: "商品ページで仕様を確認する",
  },
  {
    id: "ta036259_felcoc16",
    name: "FELCO ケーブルカッター C16 590MM FELCOC16",
    short: "FELCO ケーブルカッター C16 590MM FELCOC16",
    image: "ta036259-felcoc16.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta036259-felcoc16/", UTM),
    group: "large",
    badge: "大径・長柄",
    use: "太いIV・CV・CVT・VVR等を手動で切断する候補",
    check: "対応線種、導体材質、最大sq、仕上外径φ、単芯・多芯の別を商品ページとメーカー資料で確認。 長柄の取り回し、必要な開き幅、途中解除機構、刃の交換可否を確認。",
    cta: "商品ページで仕様を確認する",
  },
  {
    id: "ta035168_ca450al",
    name: "TTC KingTTC 大型ケーブルカッター CA450AL",
    short: "TTC KingTTC 大型ケーブルカッター CA450AL",
    image: "ta035168-ca450al.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta035168-ca450al/", UTM),
    group: "large",
    badge: "大径・長柄",
    use: "太いIV・CV・CVT・VVR等を手動で切断する候補",
    check: "対応線種、導体材質、最大sq、仕上外径φ、単芯・多芯の別を商品ページとメーカー資料で確認。 長柄の取り回し、必要な開き幅、途中解除機構、刃の交換可否を確認。",
    cta: "商品ページで仕様を確認する",
  },
  {
    id: "ta035409_cch460a",
    name: "CACTUS ケーブルカッターアタッチメント CCH460A",
    short: "CACTUS ケーブルカッターアタッチメント CCH460A",
    image: "ta035409-cch460a.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta035409-cch460a/", UTM),
    group: "accessory",
    badge: "専用アタッチメント",
    use: "対応する本体・ヘッドを運用している法人の交換・拡張用途",
    check: "適合する本体型式、世代、刃・ヘッドの組合せ、必要な油圧工具・電源を確認。単体では使用できない場合があります。",
    cta: "商品ページで仕様を確認する",
  },
  {
    id: "ta037648_me250",
    name: "MARVEL ケーブルカッター(銅線専用) 全長600mm ME250",
    short: "MARVEL ケーブルカッター(銅線専用) ME250",
    image: "ta037648-me250.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta037648-me250/", UTM),
    group: "large",
    badge: "銅線専用",
    use: "銅導体のケーブルを対象に、対応線種と切断能力を確認して選ぶ候補",
    check: "対応線種、導体材質、最大sq、仕上外径φ、単芯・多芯の別を商品ページとメーカー資料で確認。 長柄の取り回し、必要な開き幅、途中解除機構、刃の交換可否を確認。",
    cta: "商品ページで仕様を確認する",
  },
  {
    id: "ta034007_9516200",
    name: "KNIPEX 絶縁ケーブルカッター 1000V絶縁ハンドル 200mm 9516200",
    short: "KNIPEX 絶縁ケーブルカッター 1000V絶縁ハンドル 200mm 9516200",
    image: "ta034007-9516200.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta034007-9516200/", UTM),
    group: "insulated",
    badge: "絶縁タイプ",
    use: "絶縁仕様が求められる電気作業。停電・検電等の手順を前提に使用",
    check: "対応線種、導体材質、最大sq、仕上外径φ、単芯・多芯の別を商品ページとメーカー資料で確認。 1000V絶縁表記は活線切断を自動的に許可する意味ではありません。停電・検電・社内手順を確認。",
    cta: "商品ページで仕様を確認する",
  },
  {
    id: "ta034004_9512500",
    name: "KNIPEX ケーブルカッター 500mm 9512500",
    short: "KNIPEX ケーブルカッター 500mm 9512500",
    image: "ta034004-9512500.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta034004-9512500/", UTM),
    group: "large",
    badge: "大径・長柄",
    use: "太いIV・CV・CVT・VVR等を手動で切断する候補",
    check: "対応線種、導体材質、最大sq、仕上外径φ、単芯・多芯の別を商品ページとメーカー資料で確認。 長柄の取り回し、必要な開き幅、途中解除機構、刃の交換可否を確認。",
    cta: "商品ページで仕様を確認する",
  },
  {
    id: "ta041396_hpc65b",
    name: "DAIA ケーブルカッター AC100Vコード式 HPC65B",
    short: "DAIA ケーブルカッター AC100Vコード式 HPC65B",
    image: "ta041396-hpc65b.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta041396-hpc65b/", UTM),
    group: "electric",
    badge: "AC100Vコード式",
    use: "大径ケーブルを繰り返し切断し、手作業の負担を抑えたい現場",
    check: "対応線種、導体材質、最大sq、仕上外径φ、単芯・多芯の別を商品ページとメーカー資料で確認。 電池・充電器・本体のみの別、重量、口開き、替刃、後継品、活線不可も確認。",
    cta: "商品ページで仕様を確認する",
  },
  {
    id: "ta037652_me60s",
    name: "MARVEL ケーブルカッター(銅線専用) ME60S",
    short: "MARVEL ケーブルカッター(銅線専用) ME60S",
    image: "ta037652-me60s.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta037652-me60s/", UTM),
    group: "standard",
    badge: "銅線専用",
    use: "銅導体のケーブルを対象に、対応線種と切断能力を確認して選ぶ候補",
    check: "対応線種、導体材質、最大sq、仕上外径φ、単芯・多芯の別を商品ページとメーカー資料で確認。 鋼線・硬銅線・ピアノ線・ACSR等への使用可否を必ず確認。",
    cta: "商品ページで仕様を確認する",
  },
  {
    id: "ta037649_me250s",
    name: "MARVEL 絶縁ケーブルカッター(銅線専用) ME250S",
    short: "MARVEL 絶縁ケーブルカッター(銅線専用) ME250S",
    image: "ta037649-me250s.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta037649-me250s/", UTM),
    group: "insulated",
    badge: "銅線専用",
    use: "銅導体のケーブルを対象に、対応線種と切断能力を確認して選ぶ候補",
    check: "対応線種、導体材質、最大sq、仕上外径φ、単芯・多芯の別を商品ページとメーカー資料で確認。 1000V絶縁表記は活線切断を自動的に許可する意味ではありません。停電・検電・社内手順を確認。",
    cta: "商品ページで仕様を確認する",
  },
  {
    id: "ta034005_9516160",
    name: "KNIPEX ステップカット 絶縁1000Vケーブルカッター 160mm 9516160",
    short: "KNIPEX ステップカット 絶縁1000Vケーブルカッター 160mm 9516160",
    image: "ta034005-9516160.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta034005-9516160/", UTM),
    group: "insulated",
    badge: "絶縁タイプ",
    use: "絶縁仕様が求められる電気作業。停電・検電等の手順を前提に使用",
    check: "対応線種、導体材質、最大sq、仕上外径φ、単芯・多芯の別を商品ページとメーカー資料で確認。 1000V絶縁表記は活線切断を自動的に許可する意味ではありません。停電・検電・社内手順を確認。",
    cta: "商品ページで仕様を確認する",
  },
  {
    id: "ta039155_scc250r",
    name: "HIT ケーブルカッター替刃 SCC250R",
    short: "HIT ケーブルカッター替刃 SCC250R",
    image: "ta039155-scc250r.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta039155-scc250r/", UTM),
    group: "accessory",
    badge: "交換部品",
    use: "対応する本体・ヘッドを運用している法人の交換・拡張用途",
    check: "適合する本体型式、世代、刃・ヘッドの組合せ、必要な油圧工具・電源を確認。単体では使用できない場合があります。",
    cta: "商品ページで仕様を確認する",
  },
  {
    id: "ta039153_sc500r",
    name: "HIT ケーブルカッター SC500R",
    short: "HIT ケーブルカッター SC500R",
    image: "ta039153-sc500r.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta039153-sc500r/", UTM),
    group: "large",
    badge: "大径・長柄",
    use: "太いIV・CV・CVT・VVR等を手動で切断する候補",
    check: "対応線種、導体材質、最大sq、仕上外径φ、単芯・多芯の別を商品ページとメーカー資料で確認。 長柄の取り回し、必要な開き幅、途中解除機構、刃の交換可否を確認。",
    cta: "商品ページで仕様を確認する",
  },
  {
    id: "ta035170_ca800al",
    name: "TTC KingTTC 大型ケーブルカッター CA800AL",
    short: "TTC KingTTC 大型ケーブルカッター CA800AL",
    image: "ta035170-ca800al.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta035170-ca800al/", UTM),
    group: "large",
    badge: "大径・長柄",
    use: "太いIV・CV・CVT・VVR等を手動で切断する候補",
    check: "対応線種、導体材質、最大sq、仕上外径φ、単芯・多芯の別を商品ページとメーカー資料で確認。 長柄の取り回し、必要な開き幅、途中解除機構、刃の交換可否を確認。",
    cta: "商品ページで仕様を確認する",
  },
  {
    id: "ta036974_j63050",
    name: "KLEIN ケーブルカッター コンフォートハンドル 250mm J63050",
    short: "KLEIN ケーブルカッター 250mm J63050",
    image: "ta036974-j63050.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta036974-j63050/", UTM),
    group: "standard",
    badge: "手動・標準",
    use: "盤内配線や設備工事で、比較的小〜中径の銅・アルミケーブルを切断する候補",
    check: "対応線種、導体材質、最大sq、仕上外径φ、単芯・多芯の別を商品ページとメーカー資料で確認。 鋼線・硬銅線・ピアノ線・ACSR等への使用可否を必ず確認。",
    cta: "商品ページで仕様を確認する",
  },
  {
    id: "ta036260_felcoc3",
    name: "FELCO ケーブルカッター C3 190MM FELCOC3",
    short: "FELCO ケーブルカッター C3 190MM FELCOC3",
    image: "ta036260-felcoc3.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta036260-felcoc3/", UTM),
    group: "standard",
    badge: "手動・標準",
    use: "盤内配線や設備工事で、比較的小〜中径の銅・アルミケーブルを切断する候補",
    check: "対応線種、導体材質、最大sq、仕上外径φ、単芯・多芯の別を商品ページとメーカー資料で確認。 鋼線・硬銅線・ピアノ線・ACSR等への使用可否を必ず確認。",
    cta: "商品ページで仕様を確認する",
  },
  {
    id: "ta034003_9512225",
    name: "KNIPEX ステップカットXL ケーブルカッター 225mm コンフォートハンドル 9512225",
    short: "KNIPEX ステップカットXL ケーブルカッター 225mm 9512225",
    image: "ta034003-9512225.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta034003-9512225/?variantId=TA034003", UTM),
    group: "standard",
    badge: "段階切断",
    use: "盤内配線や設備工事で、比較的小〜中径の銅・アルミケーブルを切断する候補",
    check: "対応線種、導体材質、最大sq、仕上外径φ、単芯・多芯の別を商品ページとメーカー資料で確認。 鋼線・硬銅線・ピアノ線・ACSR等への使用可否を必ず確認。",
    cta: "商品ページで仕様を確認する",
  },
  {
    id: "ta037650_me325",
    name: "MARVEL ケーブルカッター(銅線専用) ME325",
    short: "MARVEL ケーブルカッター(銅線専用) ME325",
    image: "ta037650-me325.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta037650-me325/?variantId=TA037650", UTM),
    group: "large",
    badge: "銅線専用",
    use: "銅導体のケーブルを対象に、対応線種と切断能力を確認して選ぶ候補",
    check: "対応線種、導体材質、最大sq、仕上外径φ、単芯・多芯の別を商品ページとメーカー資料で確認。 長柄の取り回し、必要な開き幅、途中解除機構、刃の交換可否を確認。",
    cta: "商品ページで仕様を確認する",
  },
  {
    id: "ta034001_9512165t",
    name: "KNIPEX ケーブルカッター 落下防止 165mm 9512165T",
    short: "KNIPEX ケーブルカッター 落下防止 165mm 9512165T",
    image: "ta034001-9512165t.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta034001-9512165t/?variantId=TA034001", UTM),
    group: "standard",
    badge: "手動・標準",
    use: "盤内配線や設備工事で、比較的小〜中径の銅・アルミケーブルを切断する候補",
    check: "対応線種、導体材質、最大sq、仕上外径φ、単芯・多芯の別を商品ページとメーカー資料で確認。 鋼線・硬銅線・ピアノ線・ACSR等への使用可否を必ず確認。",
    cta: "商品ページで仕様を確認する",
  },
  {
    id: "ta035411_cch680a",
    name: "CACTUS ケーブルカッターアタッチメント CCH680A",
    short: "CACTUS ケーブルカッターアタッチメント CCH680A",
    image: "ta035411-cch680a.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta035411-cch680a/?variantId=TA035411", UTM),
    group: "accessory",
    badge: "専用アタッチメント",
    use: "対応する本体・ヘッドを運用している法人の交換・拡張用途",
    check: "適合する本体型式、世代、刃・ヘッドの組合せ、必要な油圧工具・電源を確認。単体では使用できない場合があります。",
    cta: "商品ページで仕様を確認する",
  },
  {
    id: "ta041397_hpc65brla",
    name: "DAIA ケーブルカッター 充電式(18V) HPC65BRLA",
    short: "DAIA ケーブルカッター 充電式(18V) HPC65BRLA",
    image: "ta041397-hpc65brla.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta041397-hpc65brla/?variantId=TA041397", UTM),
    group: "electric",
    badge: "充電式",
    use: "大径ケーブルを繰り返し切断し、手作業の負担を抑えたい現場",
    check: "対応線種、導体材質、最大sq、仕上外径φ、単芯・多芯の別を商品ページとメーカー資料で確認。 電池・充電器・本体のみの別、重量、口開き、替刃、後継品、活線不可も確認。",
    cta: "商品ページで仕様を確認する",
  },
  {
    id: "ta031530_2520s",
    name: "BAHCO 1000V絶縁ケーブルカッター 2520S",
    short: "BAHCO 1000V絶縁ケーブルカッター 2520S",
    image: "ta031530-2520s.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta031530-2520s/?variantId=TA031530", UTM),
    group: "insulated",
    badge: "絶縁タイプ",
    use: "絶縁仕様が求められる電気作業。停電・検電等の手順を前提に使用",
    check: "対応線種、導体材質、最大sq、仕上外径φ、単芯・多芯の別を商品ページとメーカー資料で確認。 1000V絶縁表記は活線切断を自動的に許可する意味ではありません。停電・検電・社内手順を確認。",
    cta: "商品ページで仕様を確認する",
  },
  {
    id: "ta041398_hpc85b",
    name: "DAIA ケーブルカッター AC100Vコード式 HPC85B",
    short: "DAIA ケーブルカッター AC100Vコード式 HPC85B",
    image: "ta041398-hpc85b.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta041398-hpc85b/?variantId=TA041398", UTM),
    group: "electric",
    badge: "AC100Vコード式",
    use: "大径ケーブルを繰り返し切断し、手作業の負担を抑えたい現場",
    check: "対応線種、導体材質、最大sq、仕上外径φ、単芯・多芯の別を商品ページとメーカー資料で確認。 電池・充電器・本体のみの別、重量、口開き、替刃、後継品、活線不可も確認。",
    cta: "商品ページで仕様を確認する",
  },
  {
    id: "ta033978_9415215",
    name: "KNIPEX リボンケーブルカッター 9415215",
    short: "KNIPEX リボンケーブルカッター 9415215",
    image: "ta033978-9415215.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta033978-9415215/?variantId=TA033978", UTM),
    group: "special",
    badge: "リボンケーブル用",
    use: "平形・リボンケーブルをつぶさず直角に切断したい作業",
    check: "対象ケーブルの幅・構造・材質を確認。一般電力ケーブルや鋼線へ流用しない。",
    cta: "商品ページで仕様を確認する",
  },
  {
    id: "ta030815_150at50yc",
    name: "泉 アタッチメントケーブルカッター 150AT50YC",
    short: "泉 アタッチメントケーブルカッター 150AT50YC",
    image: "ta030815-150at50yc.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta030815-150at50yc/?variantId=TA030815", UTM),
    group: "accessory",
    badge: "専用アタッチメント",
    use: "対応する本体・ヘッドを運用している法人の交換・拡張用途",
    check: "適合する本体型式、世代、刃・ヘッドの組合せ、必要な油圧工具・電源を確認。単体では使用できない場合があります。",
    cta: "商品ページで仕様を確認する",
  },
  {
    id: "ta037883_mxe200",
    name: "MARVEL ケーブルカッター(銅線専用) 軽量タイプ 全長500mm MXE200",
    short: "MARVEL ケーブルカッター(銅線専用) 軽量タイプ MXE200",
    image: "ta037883-mxe200.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta037883-mxe200/?variantId=TA037883", UTM),
    group: "large",
    badge: "銅線専用",
    use: "銅導体のケーブルを対象に、対応線種と切断能力を確認して選ぶ候補",
    check: "対応線種、導体材質、最大sq、仕上外径φ、単芯・多芯の別を商品ページとメーカー資料で確認。 長柄の取り回し、必要な開き幅、途中解除機構、刃の交換可否を確認。",
    cta: "商品ページで仕様を確認する",
  },
  {
    id: "ta039112_s7k50y",
    name: "泉 充電式ケーブルカッター S7K50Y",
    short: "泉 充電式ケーブルカッター S7K50Y",
    image: "ta039112-s7k50y.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta039112-s7k50y/?variantId=TA039112", UTM),
    group: "electric",
    badge: "充電式",
    use: "大径ケーブルを繰り返し切断し、手作業の負担を抑えたい現場",
    check: "対応線種、導体材質、最大sq、仕上外径φ、単芯・多芯の別を商品ページとメーカー資料で確認。 電池・充電器・本体のみの別、重量、口開き、替刃、後継品、活線不可も確認。",
    cta: "商品ページで仕様を確認する",
  },
  {
    id: "ta041399_hpc85brla",
    name: "DAIA ケーブルカッター 充電式(18V) HPC85BRLA",
    short: "DAIA ケーブルカッター 充電式(18V) HPC85BRLA",
    image: "ta041399-hpc85brla.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta041399-hpc85brla/?variantId=TA041399", UTM),
    group: "electric",
    badge: "充電式",
    use: "大径ケーブルを繰り返し切断し、手作業の負担を抑えたい現場",
    check: "対応線種、導体材質、最大sq、仕上外径φ、単芯・多芯の別を商品ページとメーカー資料で確認。 電池・充電器・本体のみの別、重量、口開き、替刃、後継品、活線不可も確認。",
    cta: "商品ページで仕様を確認する",
  },
  {
    id: "ta032996_63041",
    name: "KLEIN 通信ケーブルカッター 650mm 63041",
    short: "KLEIN 通信ケーブルカッター 650mm 63041",
    image: "ta032996-63041.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta032996-63041/?variantId=TA032996", UTM),
    group: "special",
    badge: "通信ケーブル用",
    use: "通信工事で対象ケーブルに合う専用カッターが必要な作業",
    check: "対象ケーブルの幅・構造・材質を確認。一般電力ケーブルや鋼線へ流用しない。",
    cta: "商品ページで仕様を確認する",
  },
  {
    id: "ta029735_001972v01",
    name: "KNIPEX プライヤーレンチ+ケーブルカッターセット 航空機仕様 001972V01",
    short: "KNIPEX プライヤーレンチ+ケーブルカッターセット 航空機仕様 001972V01",
    image: "ta029735-001972v01.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta029735-001972v01/?variantId=TA029735", UTM),
    group: "related",
    badge: "手動・標準",
    use: "切断後の被覆むき・圧着・太陽光コネクタ施工まで工具を揃える用途",
    check: "対象端子・ケーブル・ダイス・コネクタ規格への適合を確認。ケーブルカッターの代替品として扱わない。",
    cta: "商品ページで仕様を確認する",
  },
  {
    id: "ta034022_9532060",
    name: "KNIPEX 9532−060 ラチェット式ケーブルカッター ハンドル伸縮幅600−810mm 9532060",
    short: "KNIPEX 9532−060 ラチェット式ケーブルカッター ハンドル伸縮幅600−810mm 9532060",
    image: "ta034022-9532060.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta034022-9532060/?variantId=TA034022", UTM),
    group: "large",
    badge: "ラチェット・手動",
    use: "太いIV・CV・CVT・VVR等を手動で切断する候補",
    check: "対応線種、導体材質、最大sq、仕上外径φ、単芯・多芯の別を商品ページとメーカー資料で確認。 長柄の取り回し、必要な開き幅、途中解除機構、刃の交換可否を確認。",
    cta: "商品ページで仕様を確認する",
  },
  {
    id: "ta037547_m12cc0apj",
    name: "milwaukee (本体のみ) M12 32mm ケーブルカッター(本体のみ) M12CC0APJ",
    short: "milwaukee (本体のみ) M12 32mm ケーブルカッター(本体のみ) M12CC0APJ",
    image: "ta037547-m12cc0apj.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta037547-m12cc0apj/?variantId=TA037547", UTM),
    group: "electric",
    badge: "充電式",
    use: "大径ケーブルを繰り返し切断し、手作業の負担を抑えたい現場",
    check: "対応線種、導体材質、最大sq、仕上外径φ、単芯・多芯の別を商品ページとメーカー資料で確認。 電池・充電器・本体のみの別、重量、口開き、替刃、後継品、活線不可も確認。",
    cta: "商品ページで仕様を確認する",
  },
  {
    id: "ta036257_felcoc112",
    name: "FELCO ケーブルカッター C112 730MM FELCOC112",
    short: "FELCO ケーブルカッター C112 730MM FELCOC112",
    image: "ta036257-felcoc112.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta036257-felcoc112/?variantId=TA036257", UTM),
    group: "large",
    badge: "大径・長柄",
    use: "太いIV・CV・CVT・VVR等を手動で切断する候補",
    check: "対応線種、導体材質、最大sq、仕上外径φ、単芯・多芯の別を商品ページとメーカー資料で確認。 長柄の取り回し、必要な開き幅、途中解除機構、刃の交換可否を確認。",
    cta: "商品ページで仕様を確認する",
  },
  {
    id: "ta029790_003130bkv02",
    name: "KNIPEX 絶縁工具3点セット(ニッパー2種類、ケーブルカッター) 003130BKV02",
    short: "KNIPEX 絶縁工具3点セット(ニッパー2種類、ケーブルカッター) 003130BKV02",
    image: "ta029790-003130bkv02.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta029790-003130bkv02/?variantId=TA029790", UTM),
    group: "related",
    badge: "絶縁タイプ",
    use: "切断後の被覆むき・圧着・太陽光コネクタ施工まで工具を揃える用途",
    check: "対象端子・ケーブル・ダイス・コネクタ規格への適合を確認。ケーブルカッターの代替品として扱わない。",
    cta: "商品ページで仕様を確認する",
  },
  {
    id: "ta036054_es32l",
    name: "Klauke 充電式油圧ケーブルカッター ES32L",
    short: "Klauke 充電式油圧ケーブルカッター ES32L",
    image: "ta036054-es32l.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta036054-es32l/?variantId=TA036054", UTM),
    group: "electric",
    badge: "充電式",
    use: "大径ケーブルを繰り返し切断し、手作業の負担を抑えたい現場",
    check: "対応線種、導体材質、最大sq、仕上外径φ、単芯・多芯の別を商品ページとメーカー資料で確認。 電池・充電器・本体のみの別、重量、口開き、替刃、後継品、活線不可も確認。",
    cta: "商品ページで仕様を確認する",
  },
  {
    id: "ta040487_002120",
    name: "KNIPEX 002120 ツールケース 20点セット 002120",
    short: "KNIPEX 002120 ツールケース 20点セット 002120",
    image: "ta040487-002120.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta040487-002120/?variantId=TA040487", UTM),
    group: "related",
    badge: "手動・標準",
    use: "切断後の被覆むき・圧着・太陽光コネクタ施工まで工具を揃える用途",
    check: "対象端子・ケーブル・ダイス・コネクタ規格への適合を確認。ケーブルカッターの代替品として扱わない。",
    cta: "商品ページで仕様を確認する",
  },
  {
    id: "ta041259_ev250dl",
    name: "CACTUS コードレス電動油圧式圧着工具 EV250DL",
    short: "CACTUS コードレス電動油圧式圧着工具 EV250DL",
    image: "ta041259-ev250dl.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta041259-ev250dl/?variantId=TA041259", UTM),
    group: "related",
    badge: "充電式",
    use: "切断後の被覆むき・圧着・太陽光コネクタ施工まで工具を揃える用途",
    check: "対象端子・ケーブル・ダイス・コネクタ規格への適合を確認。ケーブルカッターの代替品として扱わない。",
    cta: "商品ページで仕様を確認する",
  },
  {
    id: "ta041261_ev250hi",
    name: "CACTUS 電動油圧式圧着工具 EV250HI",
    short: "CACTUS 電動油圧式圧着工具 EV250HI",
    image: "ta041261-ev250hi.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta041261-ev250hi/?variantId=TA041261", UTM),
    group: "related",
    badge: "圧着工程",
    use: "切断後の被覆むき・圧着・太陽光コネクタ施工まで工具を揃える用途",
    check: "対象端子・ケーブル・ダイス・コネクタ規格への適合を確認。ケーブルカッターの代替品として扱わない。",
    cta: "商品ページで仕様を確認する",
  },
  {
    id: "ta041263_ev325hi",
    name: "CACTUS 電動油圧式圧着工具 EV325HI",
    short: "CACTUS 電動油圧式圧着工具 EV325HI",
    image: "ta041263-ev325hi.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta041263-ev325hi/?variantId=TA041263", UTM),
    group: "related",
    badge: "圧着工程",
    use: "切断後の被覆むき・圧着・太陽光コネクタ施工まで工具を揃える用途",
    check: "対象端子・ケーブル・ダイス・コネクタ規格への適合を確認。ケーブルカッターの代替品として扱わない。",
    cta: "商品ページで仕様を確認する",
  },
  {
    id: "ta041268_ez46a4kb",
    name: "Panasonic 充電圧着器 EZ46A4KB",
    short: "Panasonic 充電圧着器 EZ46A4KB",
    image: "ta041268-ez46a4kb.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta041268-ez46a4kb/?variantId=TA041268", UTM),
    group: "related",
    badge: "圧着工程",
    use: "切断後の被覆むき・圧着・太陽光コネクタ施工まで工具を揃える用途",
    check: "対象端子・ケーブル・ダイス・コネクタ規格への適合を確認。ケーブルカッターの代替品として扱わない。",
    cta: "商品ページで仕様を確認する",
  },
  {
    id: "ta030787_1468880000",
    name: "ワイドミュラー ワイヤーストリッパー STRIPAX ULTIMATE 1468880000",
    short: "ワイドミュラー ワイヤーストリッパー STRIPAX ULTIMATE 1468880000",
    image: "ta030787-1468880000.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta030787-1468880000/?variantId=TA030787", UTM),
    group: "related",
    badge: "切断・被覆むき",
    use: "切断後の被覆むき・圧着・太陽光コネクタ施工まで工具を揃える用途",
    check: "対象端子・ケーブル・ダイス・コネクタ規格への適合を確認。ケーブルカッターの代替品として扱わない。",
    cta: "商品ページで仕様を確認する",
  },
  {
    id: "ta034129_979104v02",
    name: "KNIPEX 太陽光用工具セットМC4 V02 979104V02",
    short: "KNIPEX 太陽光用工具セットМC4 V02 979104V02",
    image: "ta034129-979104v02.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta034129-979104v02/?variantId=TA034129", UTM),
    group: "related",
    badge: "MC4施工工具",
    use: "切断後の被覆むき・圧着・太陽光コネクタ施工まで工具を揃える用途",
    check: "対象端子・ケーブル・ダイス・コネクタ規格への適合を確認。ケーブルカッターの代替品として扱わない。",
    cta: "商品ページで仕様を確認する",
  },
  {
    id: "ta034128_979104v01",
    name: "KNIPEX 太陽光用工具セット МC4 V01 979104V01",
    short: "KNIPEX 太陽光用工具セット МC4 V01 979104V01",
    image: "ta034128-979104v01.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta034128-979104v01/?variantId=TA034128", UTM),
    group: "related",
    badge: "MC4施工工具",
    use: "切断後の被覆むき・圧着・太陽光コネクタ施工まで工具を揃える用途",
    check: "対象端子・ケーブル・ダイス・コネクタ規格への適合を確認。ケーブルカッターの代替品として扱わない。",
    cta: "商品ページで仕様を確認する",
  }
];

const featuredIds = new Set(["ta035404_cc325", "ta035739_dc60k", "ta039111_s7k50m", "ta033999_9512160", "ta034027_9536250", "ta037648_me250"]);
const featuredProducts = products.filter((product) =>
  featuredIds.has(product.id),
);
const groupProducts = (group: ProductGroup) =>
  products.filter((product) => product.group === group);

const faqs: { q: string; a: string }[] = [
  { q: "ケーブルカッターの切断能力は何を見ればよいですか？", a: "線種、導体材質、最大公称断面積sq、仕上外径φ、単芯・多芯、切断方式をまとめて確認します。最大sqだけが合っていても、外径が口に入らない、対象材質が違うといった不適合が起こります。" },
  { q: "sqとφは何が違いますか？", a: "sqは主に導体の公称断面積を示し、φはケーブルや導体の直径・仕上外径の目安です。切断工具では、能力表の線種ごとのsqと、実際の仕上外径が工具の口開きに収まるかを両方確認します。" },
  { q: "同じ325sqでもどのケーブルでも切れますか？", a: "一律には言えません。IV、CV、CVT、VVRなどは構造や心数、仕上外径が異なり、工具ごとの能力表も線種別に設定されています。対象線種の欄で確認してください。" },
  { q: "銅線専用ケーブルカッターでアルミ線は切れますか？", a: "商品ごとに異なります。銅線専用と明記された製品は、アルミ線や鋼線へ自己判断で流用せず、メーカーの対応材質を確認してください。" },
  { q: "ケーブルカッターで鋼線やピアノ線は切れますか？", a: "多くの銅・アルミケーブル用工具は鋼線、ピアノ線、硬銅線、ACSR等に対応しません。誤使用は刃こぼれや破損の原因になるため、専用のワイヤロープカッターやボルトカッター等を選びます。" },
  { q: "CV線とCVT線では切断能力が変わりますか？", a: "変わることがあります。CVTは3本の単心ケーブルをより合わせた構造で、同じ公称断面積でも仕上外径や切断時の負荷が異なります。製品の能力表でCV・CVTを分けて確認します。" },
  { q: "IV線とVVR線の能力表はそのまま換算できますか？", a: "単純換算はできません。導体構成、心数、被覆・シースの厚さが異なるため、メーカーが示す線種別の公称断面積と仕上外径を使って判断します。" },
  { q: "手動式とラチェット式はどう使い分けますか？", a: "比較的小径で切断回数が少ない場合は標準手動式、太径を携帯性を保ちながら切る場合はラチェット式が候補です。作業本数が多い、大径、姿勢が厳しい場合は充電式・油圧式も検討します。" },
  { q: "充電式ケーブルカッターはどの現場に向きますか？", a: "大径ケーブルを繰り返し切断する現場や、手作業の負担を抑えたい現場に向きます。対応線種、口開き、重量、電池・充電器の有無、切断時間、替刃、後継機を確認してください。" },
  { q: "AC100Vコード式と充電式の違いは何ですか？", a: "AC100Vは電源を確保できる作業場所で連続運用しやすく、充電式は移動現場や電源を取りにくい場所で使いやすい傾向があります。延長コード、電池互換、連続作業量、重量も比較します。" },
  { q: "1000V絶縁ケーブルカッターなら活線を切れますか？", a: "いいえ。1000V絶縁表記だけで活線切断が許可されるわけではありません。原則として電源を遮断し、検電で停電を確認し、作業計画・資格・保護具・社内手順に従います。" },
  { q: "絶縁ハンドルと一般ハンドルの違いは何ですか？", a: "絶縁工具は定められた試験や仕様に適合するハンドルを備えますが、製品全体の用途、使用電圧、規格、点検状態を確認する必要があります。一般の樹脂グリップを絶縁工具と同一視しないでください。" },
  { q: "ステップカットとは何ですか？", a: "刃の段差で素線を順に切断し、握る力やケーブルのつぶれを抑える設計です。ただし、対応する導体材質・外径を超えて使えるわけではありません。" },
  { q: "通信ケーブルは一般のケーブルカッターで切れますか？", a: "対象ケーブルによります。太い通信ケーブル、同軸、リボン・フラットケーブルなどは構造が異なるため、専用品を選ぶと切断面や内部導体への負担を抑えやすくなります。" },
  { q: "リボンケーブルカッターは電力ケーブルにも使えますか？", a: "通常は用途が異なります。リボン・フラットケーブル用は幅広で薄い材料を直角に切るための工具で、太い電力ケーブルへ流用しません。" },
  { q: "ケーブルカッターとニッパーはどう違いますか？", a: "ケーブルカッターはケーブルを包み込む刃形状で、太いより線をつぶしにくく切る製品が多い一方、ニッパーは細線や端末処理向けです。対象径と材質に合う専用品を使います。" },
  { q: "替刃だけ購入するときの注意点は何ですか？", a: "本体型式、製造世代、固定刃・可動刃の別、取付部品、交換方法を確認します。似た型式でも互換性がない場合があるため、本体の銘板とメーカー資料を照合してください。" },
  { q: "ケーブルカッターアタッチメントは単体で使えますか？", a: "製品によっては対応する油圧工具や駆動本体が必要です。適合本体、必要圧力、ヘッドの接続方式、対象線種を確認し、単体工具として誤発注しないでください。" },
  { q: "本体のみの商品は何を追加購入しますか？", a: "対応バッテリー、充電器、ケース、替刃などが別売の場合があります。手持ちの電池プラットフォームとの互換性を確認し、セット内容を商品ページで確認します。" },
  { q: "切断後の断面がつぶれる原因は何ですか？", a: "刃の摩耗、対象径超過、材質不適合、刃の当て方、ケーブルの保持不足などが考えられます。使用を中止して刃と工具を点検し、対象に合う工具へ変更します。" },
  { q: "法人では何種類を常備するとよいですか？", a: "日常の小径用、太径のラチェット用、頻繁な大径作業用の充電式、絶縁仕様、専用線種用を、実際の工事台帳と使用頻度から決めます。予備刃・電池・点検履歴も含めて標準化します。" },
  { q: "商品ページを開く前に何をメモすればよいですか？", a: "切るケーブルの正式名称、導体材質、公称断面積sq、心数、仕上外径、1日の切断本数、作業場所、電源、停電・検電手順をメモすると比較しやすくなります。" }
];

const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "ケーブルカッターの切断能力の見方｜sq・φ・銅線専用・CVT対応を確認",
  description:
    "ケーブルカッターの切断能力を、sq・仕上外径φ・線種・導体材質・単芯／多芯から読み解きます。",
  image: `${HOME_URL}images/cable-cutter-cutting-capacity/cable-cutter-capacity-guide-hero.jpg`,
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  author: {
    "@type": "Organization",
    name: "作業用品ナビ編集部",
  },
  publisher: {
    "@type": "Organization",
    name: "グリーンクロスホールディングス",
  },
  mainEntityOfPage: PAGE_URL,
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "ホーム",
      item: HOME_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "選び方ガイド",
      item: `${HOME_URL}category/guide`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "ケーブルカッターの切断能力の見方",
      item: PAGE_URL,
    },
  ],
};

function H2({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2
      id={id}
      className="mb-5 mt-12 scroll-mt-24 border-l-4 border-gray-900 pl-3 text-xl font-bold text-gray-900"
    >
      {children}
    </h2>
  );
}

function H3({ children }: { children: ReactNode }) {
  return <h3 className="mb-3 mt-8 text-lg font-bold text-gray-900">{children}</h3>;
}

function AnswerBox({ children }: { children: ReactNode }) {
  return (
    <section className="my-6 rounded-xl border border-gray-300 bg-gray-50 p-5">
      <p className="mb-2 font-bold text-gray-900">この記事の結論</p>
      <div className="space-y-3 leading-8 text-gray-800">{children}</div>
    </section>
  );
}

function Caution({ title, children }: { title: string; children: ReactNode }) {
  return (
    <aside className="my-6 rounded-xl border-2 border-red-700 bg-red-50 p-5">
      <p className="mb-2 font-bold text-red-800">{title}</p>
      <div className="space-y-2 leading-7 text-red-950">{children}</div>
    </aside>
  );
}

function CTA({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex min-h-11 items-center justify-center rounded-lg bg-gray-900 px-5 py-3 text-center font-bold text-white transition hover:bg-gray-700"
    >
      {children}
    </a>
  );
}

function ProductCard({
  product,
  priority = false,
}: {
  product: Product;
  priority?: boolean;
}) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="relative aspect-[4/3] bg-white">
        <Image
          src={IMG(product.image)}
          alt={`${product.name}の商品サムネイル`}
          fill
          sizes="(max-width: 768px) 100vw, 380px"
          className="object-contain p-4"
          priority={priority}
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <p className="mb-2 w-fit rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-700">
          {product.badge}
        </p>
        <h3 className="text-base font-bold leading-7 text-gray-900">
          {product.short}
        </h3>
        <p className="mt-2 text-sm leading-6 text-gray-700">
          <span className="font-bold">向く用途：</span>{product.use}
        </p>
        <p className="mt-2 text-sm leading-6 text-gray-700">
          <span className="font-bold">購入前確認：</span>{product.check}
        </p>
        <a
          href={product.url}
          target="_blank"
          rel="nofollow sponsored"
          className="mt-4 inline-flex min-h-11 items-center justify-center rounded-lg bg-gray-900 px-4 py-3 text-center text-sm font-bold text-white transition hover:bg-gray-700"
        >
          {product.cta}
        </a>
      </div>
    </article>
  );
}

function ProductGrid({
  items,
  priority = false,
}: {
  items: Product[];
  priority?: boolean;
}) {
  return (
    <div className="my-6 grid gap-5 md:grid-cols-2">
      {items.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          priority={priority && index < 2}
        />
      ))}
    </div>
  );
}

function Figure({
  src,
  alt,
  caption,
  priority = false,
}: {
  src: string;
  alt: string;
  caption: string;
  priority?: boolean;
}) {
  return (
    <figure className="my-7">
      <div className="relative aspect-video overflow-hidden rounded-xl bg-gray-100">
        <Image
          src={HERO(src)}
          alt={alt}
          fill
          sizes="(max-width: 896px) 100vw, 896px"
          className="object-cover"
          priority={priority}
        />
      </div>
      <figcaption className="mt-2 text-sm leading-6 text-gray-600">
        {caption}
      </figcaption>
    </figure>
  );
}

function Th({ children }: { children: ReactNode }) {
  return (
    <th className="border border-gray-300 bg-gray-900 px-3 py-3 text-left text-sm font-bold text-white">
      {children}
    </th>
  );
}

function Td({ children }: { children: ReactNode }) {
  return (
    <td className="border border-gray-300 px-3 py-3 align-top text-sm leading-6 text-gray-800">
      {children}
    </td>
  );
}

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 py-10">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />

        <p className="text-sm text-gray-600">
          公開日：2026年7月22日／監修・編集：作業用品ナビ編集部
        </p>
        <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-950">
          ケーブルカッターの切断能力の見方｜sq・φ・銅線専用・CVT対応を確認
        </h1>

        <Figure
          src="cable-cutter-capacity-guide-hero.jpg"
          alt="電気工事担当者が複数のケーブルカッターと電線仕様を比較するイメージ"
          caption="最大sqだけでなく、線種・導体材質・仕上外径・切断方式を順に確認します。"
          priority
        />

        <AnswerBox>
          <p>
            ケーブルカッターは、最大公称断面積の<strong>sqだけでは選べません</strong>。
            最初に、①IV・CV・CVT・VVR・通信線などの線種、②銅・アルミ・鋼線などの導体材質、
            ③仕上外径φ、④単芯・多芯、⑤1日に切る本数と作業姿勢を確認します。
          </p>
          <p>
            小〜中径の銅線なら標準手動式、太径を携帯工具で切るならラチェット式、
            大径を繰り返し切るなら充電式・油圧式が候補です。1000V絶縁表記は
            活線切断を許可する意味ではなく、停電・検電・有資格者による手順が前提です。
          </p>
        </AnswerBox>

        <p className="leading-8 text-gray-800">
          まず比較しやすい代表機種を掲載します。商品ページでは、記事中の説明だけでなく、
          メーカーが示す線種別の切断能力、仕上外径、セット内容、現行品・後継品を確認してください。
        </p>
        <ProductGrid items={featuredProducts} priority />

        <div className="my-8 flex flex-wrap gap-3">
          <CTA href="#capacity-basics">切断能力の読み方から確認する</CTA>
          <CTA href="#product-groups">用途別の商品を見る</CTA>
        </div>

        <nav
          aria-label="記事内目次"
          className="my-8 rounded-xl border border-gray-200 bg-white p-5"
        >
          <p className="mb-3 font-bold text-gray-900">この記事の主な確認項目</p>
          <ul className="grid gap-2 text-sm leading-6 md:grid-cols-2">
            <li><a className="underline" href="#capacity-basics">切断能力の読み方</a></li>
            <li><a className="underline" href="#sq-and-diameter">sqとφの違い</a></li>
            <li><a className="underline" href="#material-compatibility">銅・アルミ・鋼線の区別</a></li>
            <li><a className="underline" href="#mechanism-comparison">手動・ラチェット・電動の違い</a></li>
            <li><a className="underline" href="#product-groups">68商品の用途別比較</a></li>
            <li><a className="underline" href="#safe-cutting">安全な切断手順</a></li>
            <li><a className="underline" href="#corporate-checklist">法人購買チェックリスト</a></li>
            <li><a className="underline" href="#faq">よくある質問</a></li>
          </ul>
        </nav>

        <H2 id="capacity-basics">
          結論｜切断能力は「線種・材質・sq・φ・心数」の順で確認する
        </H2>
        <p className="leading-8 text-gray-800">
          切断工具の能力表は、工具の強さを一つの数字で示したものではありません。
          「IV 325mm²」「CV 250mm²」「CVT 60mm²×3心」「最大外径φ32mm」のように、
          対象ケーブルごとに条件が分かれます。現場のケーブル名称を確認せず、
          最大値だけで注文すると、口に入らない、刃が材質に対応しない、切断面がつぶれるといった
          誤発注につながります。
        </p>

        <div className="my-6 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr><Th>確認項目</Th><Th>意味</Th><Th>購入前に照合する情報</Th></tr>
            </thead>
            <tbody>
              <tr><Td>線種</Td><Td>IV、CV、CVT、VVR、VCT、通信線など</Td><Td>ケーブルの印字・仕様書とメーカー能力表</Td></tr>
              <tr><Td>導体材質</Td><Td>軟銅、アルミ、硬銅、鋼線、ACSRなど</Td><Td>「銅線専用」「銅・アルミ対応」「使用不可材」</Td></tr>
              <tr><Td>sq</Td><Td>主に導体の公称断面積</Td><Td>線種別・単芯／多芯別の最大値</Td></tr>
              <tr><Td>φ</Td><Td>ケーブルの仕上外径または工具の口開き</Td><Td>実測・メーカーケーブル表・工具の最大口径</Td></tr>
              <tr><Td>作業量</Td><Td>1日当たりの切断本数と姿勢</Td><Td>手動、ラチェット、充電式、AC100Vの使い分け</Td></tr>
            </tbody>
          </table>
        </div>

        <Figure
          src="cable-size-sq-diameter-comparison.jpg"
          alt="ケーブルの公称断面積sqと仕上外径φを比較するイメージ"
          caption="sqは導体断面積、φは外径・口径の確認に使います。両方が適合することが必要です。"
        />

        <H2 id="sq-and-diameter">sqとφの違い｜断面積が合っても口に入るとは限らない</H2>
        <H3>sqは主に導体の太さを示す</H3>
        <p className="leading-8 text-gray-800">
          sq（スケア、mm²）は導体の公称断面積です。ただし、同じsqでも絶縁体・シース・心数によって
          ケーブル全体の外径は変わります。能力表に「単芯」「3芯」「4芯」が分けて書かれている場合は、
          現場の心数と一致する欄を使います。
        </p>
        <H3>φは仕上外径と工具の口開きを照合する</H3>
        <p className="leading-8 text-gray-800">
          φは直径の表記です。工具の最大口径より小さくても、線種・材質の能力を超えていれば切断できません。
          逆にsqが能力内でも、厚いシースや多芯構造で仕上外径が大きいと刃の内側へ収まりません。
          公称値だけでなく、使用するケーブルメーカーの仕上外径も確認します。
        </p>

        <H2 id="cable-types">IV・CV・CVT・VVR・通信線で能力が変わる理由</H2>
        <div className="my-6 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead><tr><Th>線種</Th><Th>確認ポイント</Th><Th>選定時の注意</Th></tr></thead>
            <tbody>
              <tr><Td>IV・HIV</Td><Td>単芯の公称断面積と仕上外径</Td><Td>能力表のIV欄を確認し、硬銅線等と混同しない</Td></tr>
              <tr><Td>CV</Td><Td>単芯・多芯、電圧区分、外径</Td><Td>「CV単芯500sq」と「CV3芯150sq×3」等を分ける</Td></tr>
              <tr><Td>CVT</Td><Td>3本より合わせの外径と各心のsq</Td><Td>CVの数値をそのまま流用しない</Td></tr>
              <tr><Td>VVR・VCT</Td><Td>心数とシース込み外径</Td><Td>メーカーが対象線種として明記しているか確認</Td></tr>
              <tr><Td>通信・リボン</Td><Td>ケーブル構造、幅、内部導体</Td><Td>電力ケーブル用ではなく専用カッターを検討</Td></tr>
            </tbody>
          </table>
        </div>

        <H2 id="material-compatibility">銅線専用・アルミ対応・鋼線用を混同しない</H2>
        <p className="leading-8 text-gray-800">
          一般的なケーブルカッターは軟銅線やアルミ線のより線を対象とし、鋼線・ピアノ線・硬銅線・
          ACSRには使えない製品が多くあります。たとえばKNIPEXのStepCut公式情報は、
          銅・アルミケーブルに対応する一方、鋼線と硬銅導体には不適合と明記しています。
          CACTUS CC-325のメーカー資料も、活線、硬銅線、ピアノ線、ACSR、鉄線等を使用不可としています。
        </p>
        <Caution title="「ケーブル」という名称だけで材質を判断しない">
          <p>
            ワイヤロープ、支持線入り通信ケーブル、鋼心アルミより線などは、一般の銅・アルミ用
            ケーブルカッターの対象外になり得ます。切断前に構造と材質を確認し、専用工具を選んでください。
          </p>
        </Caution>
        <Figure
          src="copper-aluminum-steel-cable-material.jpg"
          alt="銅線・アルミ線・鋼線のケーブル素材を見分けるイメージ"
          caption="外観だけで判断せず、ケーブル仕様書と工具メーカーの対応材質を照合します。"
        />

        <H2 id="mechanism-comparison">手動・ステップカット・ラチェット・電動の違い</H2>
        <p className="leading-8 text-gray-800">
          この章では切断能力の読み方に必要な範囲で方式差を整理します。充電式・油圧式・
          ラチェット式の全体的な選び方や圧着工具との使い分けは、既存の
          <a href="/articles/cable-cutter-selection" className="mx-1 font-bold underline">
            ケーブルカッターの選び方
          </a>
          で詳しく解説しています。新記事では内容を重複させず、能力表の読み違い防止に重点を置きます。
        </p>
        <div className="my-6 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead><tr><Th>方式</Th><Th>向く条件</Th><Th>利点</Th><Th>購入前確認</Th></tr></thead>
            <tbody>
              <tr><Td>標準手動</Td><Td>小〜中径、少量、携帯性重視</Td><Td>軽量で取り回しやすい</Td><Td>握力、全長、対象線種</Td></tr>
              <tr><Td>ステップカット</Td><Td>銅・アルミより線をつぶしにくく切りたい</Td><Td>素線を段階的に切断</Td><Td>鋼線不可、最大外径</Td></tr>
              <tr><Td>ラチェット</Td><Td>太径を手動で切る</Td><Td>繰り返し握って大きな切断力</Td><Td>途中解除、口開き、作業空間</Td></tr>
              <tr><Td>充電・油圧</Td><Td>大径・多数回・負担軽減</Td><Td>作業時間と身体負担を抑えやすい</Td><Td>電池、重量、替刃、後継品</Td></tr>
              <tr><Td>AC100V</Td><Td>電源を確保できる工場・作業場</Td><Td>電池残量を気にせず運用</Td><Td>電源、コード動線、現場移動</Td></tr>
            </tbody>
          </table>
        </div>
        <Figure
          src="manual-ratchet-electric-cutter-comparison.jpg"
          alt="手動・ラチェット式・充電式ケーブルカッターを比較するイメージ"
          caption="線種と外径が適合したうえで、作業本数・姿勢・電源条件から方式を選びます。"
        />

        <H2 id="product-groups">用途別に商品を比較｜Excel掲載68商品を7グループで整理</H2>
        <p className="leading-8 text-gray-800">
          添付Excelの71行を検算し、同一商品3行を除いた68商品を掲載しています。
          30件の画像名が「?variantId=…jpg」になっていたため、商品URLのslugから
          `/products/taXXXXXX-model.jpg`形式へ補正しています。商品URLのvariantIdは保持します。
        </p>
        <div className="my-6 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead><tr><Th>商品群</Th><Th>掲載数</Th><Th>向く用途</Th><Th>最重要の確認</Th></tr></thead>
            <tbody>
              <tr><Td>小型・標準手動</Td><Td>22</Td><Td>盤内配線、小〜中径、携帯用</Td><Td>銅／アルミ、sq、φ、鋼線不可</Td></tr>
              <tr><Td>大径・ラチェット・長柄</Td><Td>13</Td><Td>IV・CV・CVT・VVRの太径切断</Td><Td>線種別能力、口開き、作業空間</Td></tr>
              <tr><Td>充電式・電動式</Td><Td>9</Td><Td>大径、多数回、身体負担軽減</Td><Td>本体／セット、電池、重量、後継品</Td></tr>
              <tr><Td>1000V絶縁</Td><Td>6</Td><Td>停電・検電を前提とした電気作業</Td><Td>規格、点検、作業手順、活線可否</Td></tr>
              <tr><Td>通信・リボン・複合型</Td><Td>4</Td><Td>専用構造の通信線・平型線</Td><Td>ケーブル幅・構造・内部導体</Td></tr>
              <tr><Td>替刃・アタッチメント</Td><Td>4</Td><Td>既存本体の保守・機能追加</Td><Td>本体型式、世代、接続方式</Td></tr>
              <tr><Td>圧着・被覆むき等の関連工具</Td><Td>10</Td><Td>切断後の端末処理・MC4施工</Td><Td>端子・ダイス・コネクタ適合</Td></tr>
            </tbody>
          </table>
        </div>

        <H2 id="standard-cutters">小型・標準手動｜盤内配線や小〜中径ケーブル向け</H2>
        <p className="leading-8 text-gray-800">
          手元での取り回し、刃形状、握りやすさ、銅線専用か銅・アルミ対応かを比較します。
          KNIPEX StepCut 9512160は公式情報で、より線の銅・アルミケーブルに対応し、
          鋼線・硬銅導体には不適合とされています。DENSAN DC-60Kは銅線専用で、
          IV・CVの能力と仕上外径を確認する製品です。
        </p>
        <ProductGrid items={groupProducts("standard")} />

        <H2 id="large-ratchet-cutters">大径・ラチェット・長柄｜太いIV・CV・CVT・VVRを手動で切る</H2>
        <p className="leading-8 text-gray-800">
          ラチェット式は太径を少ない握力で切り進めやすい一方、口開き、途中解除、長柄を開閉する空間が必要です。
          CC-325は口径32mmの小型ラチェット式で、メーカー資料ではIV・VVRの能力と使用不可材が具体的に示されています。
          FRC-32AはCV・IV・VVR等の太いケーブル向けです。現場の線種に一致する能力欄を使ってください。
        </p>
        <ProductGrid items={groupProducts("large")} />

        <H2 id="electric-cutters">充電式・油圧式・AC100V｜大径を繰り返し切断する現場</H2>
        <p className="leading-8 text-gray-800">
          充電式は電源のない現場で移動しやすく、AC100Vは電源を確保できる場所で連続運用しやすい方式です。
          泉S7K50Mは口開き50mmで、CV線の単芯・3芯ごとに能力が示されています。
          DAIA HPC-65BRLAは65B仕様の充電式ですが、オレンジブックには後継品表示があるため、
          公開時と購入時に現行型式を確認してください。
        </p>
        <ProductGrid items={groupProducts("electric")} />

        <H2 id="insulated-cutters">1000V絶縁タイプ｜絶縁表記と作業手順を分けて考える</H2>
        <Caution title="絶縁工具でも、原則は停電・検電を前提にする">
          <p>
            厚生労働省の災害事例では、電路の切断前に電源を遮断し、検電器等で停電を確認すること、
            絶縁工具・保護具・作業計画・教育を組み合わせることが再発防止策として示されています。
            工具の絶縁性能だけで感電防止が完了するとは考えないでください。
          </p>
        </Caution>
        <Figure
          src="insulated-cable-cutter-safety-check.jpg"
          alt="絶縁ケーブルカッターと検電器・保護具を確認する電気工事現場のイメージ"
          caption="停電、検電、誤通電防止、保護具、作業手順を確認したうえで工具を選びます。"
        />
        <ProductGrid items={groupProducts("insulated")} />

        <H2 id="special-cutters">通信・リボン・切断／ストリップ複合型｜専用ケーブルを正しく切る</H2>
        <p className="leading-8 text-gray-800">
          通信ケーブル、リボン・フラットケーブル、切断とストリップを兼用する工具は、
          一般の電力ケーブル用とは刃形状・対象構造が異なります。幅広で薄い材料を直角に切る工具を
          大径電力ケーブルへ流用せず、対象のケーブル種類・幅・内部導体を確認します。
        </p>
        <ProductGrid items={groupProducts("special")} />

        <H2 id="accessories">替刃・アタッチメント｜本体型式と世代を照合する</H2>
        <p className="leading-8 text-gray-800">
          替刃やケーブルカッターアタッチメントは、単体で使えない場合があります。
          本体銘板、型式、製造世代、接続方式、必要な油圧工具、固定刃・可動刃の別を照合します。
          法人標準品にする場合は、本体と消耗品を同じ管理台帳へ登録してください。
        </p>
        <ProductGrid items={groupProducts("accessory")} />

        <H2 id="related-tools">切断後の被覆むき・圧着・MC4施工に使う関連工具</H2>
        <p className="leading-8 text-gray-800">
          ケーブル切断後は、被覆むき、端子圧着、コネクタ組立まで工程が続きます。
          圧着工具は端子・ダイス・公称断面積への適合が必要で、ケーブルカッターの代わりにはなりません。
          太陽光用MC4工具セットは、既存の
          <a href="/articles/solar-pv-tool-set-selection" className="font-bold underline">
            太陽光発電用工具セットの選び方
          </a>
          も参照してください。
        </p>
        <ProductGrid items={groupProducts("related")} />

        <H2 id="selection-examples">現場別の選定例｜切るケーブルを先に書き出す</H2>
        <div className="my-6 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead><tr><Th>現場</Th><Th>最初に確認</Th><Th>候補方式</Th><Th>注意</Th></tr></thead>
            <tbody>
              <tr><Td>盤内・機器配線</Td><Td>銅／アルミ、外径、小〜中径</Td><Td>標準手動、StepCut</Td><Td>鋼線入り・硬銅線を混ぜない</Td></tr>
              <tr><Td>幹線更新</Td><Td>CV・CVT、sq、心数、切断本数</Td><Td>ラチェット、充電式</Td><Td>作業空間・重量・支持方法</Td></tr>
              <tr><Td>工場の定尺切断</Td><Td>電源、連続本数、線種</Td><Td>AC100V、充電・油圧</Td><Td>コード動線・替刃・保守</Td></tr>
              <tr><Td>高所・移動作業</Td><Td>工具重量、落下防止、電池</Td><Td>軽量手動、落下防止型、充電式</Td><Td>ケーブル落下と工具落下を管理</Td></tr>
              <tr><Td>通信・機器内部</Td><Td>通信線、リボン幅、内部導体</Td><Td>通信・リボン専用</Td><Td>一般電力用へ流用しない</Td></tr>
            </tbody>
          </table>
        </div>

        <H2 id="safe-cutting">安全に切断する手順｜停電・検電・支持・切断端処理</H2>
        <ol className="ml-6 list-decimal space-y-3 leading-8 text-gray-800">
          <li>図面・ケーブル印字・回路表示で対象を特定する。</li>
          <li>電源を遮断し、誤通電防止の施錠・表示・関係者周知を行う。</li>
          <li>適切な検電器で停電状態を確認する。</li>
          <li>必要な絶縁用保護具、保護眼鏡、手袋等を使用する。</li>
          <li>切断するケーブルの両側を支持し、跳ね・落下・巻き込みを防ぐ。</li>
          <li>工具の刃、ボルト、ラチェット、電池、油漏れを点検する。</li>
          <li>能力表に適合する位置へケーブルを入れ、こじらず切断する。</li>
          <li>切断面、導体のつぶれ、刃こぼれを確認する。</li>
          <li>切断端を絶縁処理し、回路・端末処理の手順へ引き継ぐ。</li>
        </ol>
        <Figure
          src="cable-cutter-cut-surface-inspection.jpg"
          alt="ケーブル切断後に断面とケーブルカッターの刃を点検するイメージ"
          caption="切断面のつぶれ、素線のばらけ、刃こぼれ、ボルトの緩みを確認します。"
        />

        <H2 id="common-mistakes">よくある選び方・使い方の失敗25例</H2>
        <ol className="ml-6 list-decimal space-y-2 leading-7 text-gray-800">
              <li>ケーブルの外観だけで線種を判断する</li>
              <li>最大sqだけを見て仕上外径φを確認しない</li>
              <li>単芯の能力を多芯ケーブルへそのまま当てはめる</li>
              <li>CV線の数値をCVT線へ流用する</li>
              <li>銅線専用工具でアルミ線や鋼線を切る</li>
              <li>鋼線・ピアノ線・ACSRを一般ケーブルカッターで切る</li>
              <li>被覆込み外径と導体径を混同する</li>
              <li>ケーブルが工具の口に入れば切れると考える</li>
              <li>小型工具で大径ケーブルを何度もこじって切る</li>
              <li>ラチェットの途中解除方法を確認しない</li>
              <li>長柄工具の開閉スペースを現場で確保できない</li>
              <li>充電式の本体のみ・セット品を取り違える</li>
              <li>電池プラットフォームと充電器の互換性を確認しない</li>
              <li>AC100V機で電源・延長コード・作業動線を確認しない</li>
              <li>絶縁ハンドルを活線切断の許可と誤解する</li>
              <li>一般の樹脂グリップを1000V絶縁工具と同じだと思う</li>
              <li>通信・リボンケーブル用を電力ケーブルへ流用する</li>
              <li>ケーブルカッターアタッチメントを単体で注文する</li>
              <li>替刃の本体型式・世代・固定刃／可動刃を確認しない</li>
              <li>摩耗・刃こぼれ・ボルトの緩みを点検しない</li>
              <li>切断中のケーブルの跳ねや落下を管理しない</li>
              <li>切断端を養生せず、導体を露出したままにする</li>
              <li>停電操作だけで安心し、検電を省略する</li>
              <li>誤通電防止、作業表示、関係者への周知を行わない</li>
              <li>価格やランキングだけで法人標準工具を決める</li>
        </ol>

        <H2 id="corporate-checklist">法人購買・現場配備チェックリスト</H2>
        <div className="my-6 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead><tr><Th>区分</Th><Th>確認項目</Th><Th>記録する内容</Th></tr></thead>
            <tbody>
              <tr><Td>対象</Td><Td>線種、材質、sq、心数、仕上外径</Td><Td>使用頻度の高いケーブル一覧</Td></tr>
              <tr><Td>方式</Td><Td>手動、ラチェット、充電、AC100V、絶縁</Td><Td>現場・担当班ごとの標準工具</Td></tr>
              <tr><Td>セット</Td><Td>本体、電池、充電器、ケース、替刃</Td><Td>付属品と管理番号</Td></tr>
              <tr><Td>安全</Td><Td>停電、検電、誤通電防止、保護具</Td><Td>作業手順書と教育履歴</Td></tr>
              <tr><Td>点検</Td><Td>刃こぼれ、摩耗、緩み、油漏れ、絶縁部</Td><Td>使用前点検・定期点検・修理履歴</Td></tr>
              <tr><Td>更新</Td><Td>後継品、替刃供給、電池互換</Td><Td>更新時期と廃番対応</Td></tr>
            </tbody>
          </table>
        </div>
        <Figure
          src="corporate-cable-cutter-inventory-checklist.jpg"
          alt="法人担当者がケーブルカッターとバッテリー・替刃の管理表を確認するイメージ"
          caption="工具本体だけでなく、電池・替刃・点検・使用履歴をまとめて管理します。"
        />

        <H2 id="faq">ケーブルカッターの切断能力に関するよくある質問</H2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details key={faq.q} className="rounded-lg border border-gray-200 p-4">
              <summary className="cursor-pointer font-bold text-gray-900">
                {faq.q}
              </summary>
              <p className="mt-3 leading-7 text-gray-800">{faq.a}</p>
            </details>
          ))}
        </div>

        <H2 id="sources">参考にした一次情報・公式情報</H2>
        <ul className="space-y-3 break-all text-sm leading-6 text-gray-700">
          <li><a className="underline" href="https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" target="_blank" rel="nofollow">Google Search Central：生成AI機能向け最適化ガイド</a></li>
          <li><a className="underline" href="https://developers.google.com/search/docs/appearance/ai-features" target="_blank" rel="nofollow">Google Search Central：AI features and your website</a></li>
          <li><a className="underline" href="https://www.knipex.com/en-uk/products/cable-and-wire-rope-shears/knipex-stepcut-cable-shears-with-step-cut/knipex-stepcut-cable-shears-step-cut/9512160" target="_blank" rel="nofollow">KNIPEX：StepCut 95 12 160公式仕様</a></li>
          <li><a className="underline" href="https://www.jefcom.co.jp/lineup/third_category031/item_DC-60K" target="_blank" rel="nofollow">JEFCOM：DC-60K公式情報</a></li>
          <li><a className="underline" href="https://www.fujiya-kk.com/products_fujiya/frc/" target="_blank" rel="nofollow">フジ矢：ラチェット式ケーブルカッター公式情報</a></li>
          <li><a className="underline" href="https://www.ccts.co.jp/products/cutter/cc-325/" target="_blank" rel="nofollow">CACTUS：CC-325公式情報</a></li>
          <li><a className="underline" href="https://anzeninfo.mhlw.go.jp/anzen_pg/sai_det.aspx?joho_no=101076" target="_blank" rel="nofollow">厚生労働省 職場のあんぜんサイト：活線切断による感電災害事例</a></li>
        </ul>

        <H2 id="summary">まとめ｜商品ページを開く前に線種と外径を確認する</H2>
        <p className="leading-8 text-gray-800">
          ケーブルカッターの切断能力は、最大sqの大きさを競う数字ではありません。
          線種、導体材質、単芯・多芯、仕上外径、作業本数を順番に確認し、
          その条件に合う手動・ラチェット・充電式・絶縁・専用型を選びます。
          鋼線等の使用不可材、活線不可、本体のみ・アタッチメント・替刃の誤発注にも注意してください。
        </p>
        <div className="my-7 flex flex-wrap gap-3">
          <CTA href="#standard-cutters">小〜中径用を比較する</CTA>
          <CTA href="#large-ratchet-cutters">太径・ラチェット式を見る</CTA>
          <CTA href="#electric-cutters">充電式・電動式を見る</CTA>
        </div>
        <p className="mt-8 text-sm leading-6 text-gray-600">
          本記事は商品選定の一般的な考え方を整理したものです。実際の電気工事は、
          資格、法令、設備管理者の指示、メーカー取扱説明書、社内手順に従ってください。
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
