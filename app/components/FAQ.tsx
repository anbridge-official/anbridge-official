const sections = [
  ["為什麼需要身分審核（KYC）？", ["KYC 用於確認申請人、信用卡持卡人與撥款帳號為同一人，降低冒用與交易風險。", "只會依流程核對必要資料；不會要求提供信用卡密碼、完整卡號或簡訊驗證碼。"]],
  ["刷卡換現金申請條件？", ["換現金申請人、信用卡持卡人、撥款帳號為同一人", "該信用卡當期尚有額度，借款金額不得超過信用卡餘額", "目前不接受銀聯卡線上刷卡", "年滿18歲以上且限正卡持有人申請"]],
  ["刷卡換現金是什麼？", ["廣為大眾認知的刷卡就是刷信用卡，簽帳金融卡並不屬於刷卡換現金的範疇。交易概念是先使用信用卡額度購買商品消費，再將購買物品出售，出售款項即為可取得的金額。", "中間繁雜環節由服務業主處理；持卡人會參與刷卡、核對資料、簽買賣合約及最後取款，後續轉售商品由業主進行。"]],
  ["不方便出門怎麼辦？還能刷卡換現金嗎？", ["可透過網路線上交易，使用 LINE 聯繫專員並上傳所需資料，於指定連結線上刷卡購物。", "實際撥款時間與流程依當下確認為準；無論身在何處，均可先透過其他縣市實體據點或線上申請方式評估。"]],
  ["信用卡換現金介紹", ["信用卡換現金以信用卡額度為基礎，先確認可行方案與實拿範圍，再依需求安排後續流程。", "適合想先了解可拿金額與費用的使用者；安沛會把額度、比例、流程與相關成本說清楚。"]],
  ["刷卡換現金介紹與預借現金比較", ["刷卡換現金與信用卡換現金搜尋意圖高度相近，重點在流程、費用與實拿比例。", "信用卡換現金重視額度、費用與流程；預借現金通常涉及借款利息與還款安排，適用情境不同。"]],
  ["信用卡交易相關費用與實拿比例", ["海外交易服務費通常約 1.5%，由發卡銀行依規定收取，非安沛額外收費，實際以銀行帳單為準。", "一般市場常見實拿約 85%～90%，安沛參考可達最高約 93%，實際比例仍依當下條件確認。"]],
];
import React from 'react';

// 1. 定義 FAQ 組件接收的資料型別（防止 TypeScript 報錯）
interface FAQProps {
  sections: [string, string[]][];
}

export default function FAQ({ sections }: FAQProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* FAQ 列表的外層容器 */}
        <div className="mt-10 grid gap-5">
          {sections.map(([title, paragraphs], index) => (
            <article 
              key={index} 
              className="p-6 border border-gray-200 rounded-lg bg-gray-50"
            >
              {/* 問題標題 */}
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {title}
              </h3>
              
              {/* 回答內容 */}
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

