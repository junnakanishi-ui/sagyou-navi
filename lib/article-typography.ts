/** 自己完結型記事の共通タイポグラフィ（幅は articles/reading-layout.css で管理） */
export const articleCls = {
  h1: "mb-6 text-[32px] font-black leading-[1.45] tracking-tight text-gray-900 sm:text-[44px]",
  h2: "mb-6 mt-14 border-l-[6px] border-gray-900 pl-4 text-[26px] font-black leading-[1.55] tracking-tight text-gray-900 sm:text-[32px]",
  h3: "mb-4 mt-8 text-[22px] font-bold leading-[1.6] tracking-normal text-gray-900 sm:text-[26px]",
  body: "mb-4 text-[17px] md:text-[18px] leading-[1.95] tracking-[0.02em] text-gray-900",
  bodySm: "text-[16px] leading-[1.95] tracking-[0.04em] text-gray-900",
  list: "my-4 list-disc space-y-2 pl-6 text-[17px] md:text-[18px] leading-[1.95] tracking-[0.02em] text-gray-900",
  table: "w-full border-collapse text-[15px] leading-7 tracking-wide text-gray-900",
  th: "whitespace-nowrap border-b border-gray-400 bg-gray-100 px-4 py-3.5 text-left text-base font-bold text-gray-900",
  td: "min-w-32 border-b border-gray-200 px-4 py-3.5 align-top text-[15px] leading-7 text-gray-900",
  mark: "rounded-sm bg-amber-200 px-0.5 font-bold text-gray-900",
  faqQ: "mb-2 text-xl font-black tracking-wide text-gray-900 sm:text-2xl",
  ctaH3: "mb-2 text-2xl font-black tracking-wide text-gray-900 sm:text-3xl",
  meta: "text-sm font-medium text-gray-800",
} as const;
