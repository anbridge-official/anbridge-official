import React from 'react';

// 定義型別
interface FAQProps {
  sections?: [string, string[]][]; // 加上問號，代表這項資料變成「選填」
}

// 預設的 FAQ 內容（如果主頁面沒傳資料，就用這份）
const defaultSections: [string, string[]][] = [
  [
    "常見問題標題 1", 
    ["這是第一個回答的第一段話。", "這是第一個回答的第二段話（如果有的話）。"]
  ],
  [
    "常見問題標題 2", 
    ["這是第二個回答的內容。"]
  ]
];

export default function FAQ({ sections = defaultSections }: FAQProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mt-10 grid gap-5">
          {sections.map(([title, paragraphs], index) => (
            <article 
              key={index} 
              className="p-6 border border-gray-200 rounded-lg bg-gray-50"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {title}
              </h3>
              <div className="space-y-2 text-gray-600">
                {paragraphs.map((text, pIndex) => (
                  <p key={pIndex}>{text}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
