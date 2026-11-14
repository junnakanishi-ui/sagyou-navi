"use client";

import { useState } from "react";

const ITEMS = [
  "コース図・会場図に、受付・整列・横断場所・出口を書き込んだ",
  "警備・救護担当と、通路・開口・緊急時の動きを確認した",
  "区間ごとに用品の種類・寸法・数量・付属品を整理した",
  "案内看板の文言・矢印・設置場所と、原稿の確認担当を決めた",
  "納品地点ごとの受取担当・車両進入時間・荷下ろし場所を確認した",
  "設置・点検・撤去・回収の担当と作業範囲を確認した",
  "雨天・強風・中止・数量変更時の連絡先と費用条件を確認した",
];

export function MarathonChecklist() {
  const [checked, setChecked] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  return (
    <div className="marathon-checklist">
      <p className="font-bold" aria-live="polite">確認済み：{checked.length} / {ITEMS.length}項目</p>
      <p className="rental-note">用品の手配に関する確認用です。大会全体の安全点検を代替するものではありません。チェックはページを離れるとリセットされます。</p>
      <ul>{ITEMS.map((item) => (
        <li key={item}><label><input type="checkbox" checked={checked.includes(item)} onChange={(event) => {
          setChecked((values) => event.target.checked ? [...values, item] : values.filter((value) => value !== item));
          setMessage("");
        }} /><span>{item}</span></label></li>
      ))}</ul>
      <button type="button" className="rental-button rental-button-dark" onClick={async () => {
        const text = ITEMS.map((item) => `${checked.includes(item) ? "確認済" : "未確認"}：${item}`).join("\n");
        try {
          await navigator.clipboard.writeText(text);
          setMessage("確認状況をコピーしました。打ち合わせ用のメモなどに貼り付けて使えます。");
        } catch {
          setMessage("自動コピーできませんでした。必要な項目を選択してコピーしてください。");
        }
      }}>確認状況をコピーする</button>
      <p role="status" className="rental-note">{message}</p>
    </div>
  );
}
