export type FAQItem = { question: string; answer: React.ReactNode };

export const creditCardFAQs: FAQItem[] = [
  {
    question: "為什麼需要身分審核（KYC）？",
    answer: <>
      <p>✓ KYC 用於確認申請人、信用卡持卡人與收款帳戶為同一人，降低冒用與交易風險。</p>
      <p>✓ 只會依流程核對必要資料；不會要求提供信用卡密碼、完整卡號或簡訊驗證碼。</p>
    </>,
  },
  {
    question: "刷卡換現金申請條件？",
    answer: <>
      <p>換現金申請人、信用卡持卡人、撥款帳號須同一人</p>
      <p>該信用卡當期間有額度，借款金額不得超過信用卡餘額</p>
      <p>目前不接受銀聯卡線上刷卡</p>
      <p>年滿 18 歲以上且正卡持有人申請</p>
    </>,
  },
  {
    question: "刷卡換現金是什麼？",
    answer: <>
      <p>廣為大眾認知的刷卡就是刷信用卡，簽帳金融卡不屬於刷卡換現金的範圍。交易概念是先使用信用卡額度購買商品品出售，出售款項即為可取得的金額。</p>
      <p>中間維護環節由服務業主或服務主體進行；持卡人會參與的係卡、核對資料、簽資資合的及後取款，後續轉售商品由服務業主進行。</p>
    </>,
  },
  {
    question: "不方便出門怎麼辦？還能刷卡換現金嗎？",
    answer: <>
      <p>可選擇網路線上交易，使用 LINE 聯繫專員進上購所需資料，於指定連結線上刷卡購物。</p>
      <p>實際撥款時間與流程依當下確認為準；無論位在何處，均可可以透過其他聯繫點或線上申請方式評估。</p>
    </>,
  },
  {
    question: "信用卡換現金介紹",
    answer: <>
      <p>信用卡換現金以信用卡額度為基礎，先確認可行方案與費率參考圖，再依需求安排流程。</p>
      <p>適合想先了解可金額與費用的使用者；安沛會把額度、比例、流程與相關成本本說清楚是。</p>
    </>,
  },
  {
    question: "刷卡換現金介紹與預借現金比較",
    answer: <>
      <p>刷卡換現金與信用卡換現金搜尋意圖高度相近，重點在流程、費用與實拿參考比例。</p>
      <p>信用卡換現金重視額度、費用與流程；預借現金通常涉及信銀利息與債務安排，適用情境不同。</p>
    </>,
  },
  {
    question: "信用卡交易相關費用與實拿比例",
    answer: <>
      <p>海外交易服務費通常約 1.5%，由發卡銀行依規定收取，非安沛額外收費，實際以銀行帳單為準。</p>
      <p>一般市場常見實拿約 85%～90%，安沛參考可達最高約 93%，實際比例仍依當下條件確認。</p>
    </>,
  },
];

export const telecomFAQs: FAQItem[] = [
  {
    question: "為什麼需要身分審核（KYC）？",
    answer: "KYC 用於確認電信門號、申請人與收款資訊的一致性，協助降低門號冒用與詐騙風險。只會在評估方案可行後，依交易需要核對必要資料。",
  },
  {
    question: "電信小額換現金是什麼？",
    answer: "電信小額服務是依可使用的電信帳單代收、遊戲點數或指定數位商品條件進行評估。中華電信、遠傳、台灣大哥大與各項支援方式，仍須以當下門號資格與平台規範為準。",
  },
  {
    question: "哪些項目可以先詢問評估？",
    answer: "可先告知您的電信業者、門號使用狀況，以及 MyCard、Gash、Google Pay、Apple Pay、LINE 貼圖或遊戲點數等需求；專員會先說明可行範圍與注意事項。",
  },
  {
    question: "多久能知道是否可辦理？",
    answer: "LINE 諮詢後會依門號與項目進行評估；資料完整時可較快確認。實際作業時間仍視電信商、平台驗證與交易狀況而定。",
  },
];

export const postpayFAQs: FAQItem[] = [
  {
    question: "為什麼需要身分審核（KYC）？",
    answer: "KYC 是確認後支付帳戶使用人、申請人與收款資料一致的安全程序，可降低帳戶冒用與交易爭議。安沛僅依流程核對必要資料，不會索取信用卡密碼或簡訊驗證碼。",
  },
  {
    question: "什麼是無卡／後支付換現金？需要信用卡嗎？",
    answer: "後支付是先使用平台額度、再依平台規定付款的方式。是否可評估不以實體信用卡為前提，但須有可用的後支付額度，並依平台規則、商品與本人資格確認。",
  },
  {
    question: "可先詢問哪些後支付平台？",
    answer: "可先提供 AFTEE、銀角零卡 Zingala、大哥付、慢點付或遠信月付大人等平台的可用狀況。各平台的額度、期數與適用通路不同，仍以平台最新核准結果為準。",
  },
  {
    question: "申請流程需要準備什麼？",
    answer: "先透過 LINE 說明需求與平台狀況，再依可行方案核對本人資料、確認交易方式與商品，完成確認後依流程撥款。請勿向任何人提供密碼或簡訊驗證碼。",
  },
  {
    question: "會影響信用紀錄或聯徵嗎？",
    answer: "是否影響信用紀錄取決於後支付平台的規則、使用情況與後續繳款。請按各平台帳單規定準時付款；有疑問時請直接向平台客服確認。",
  },
];

export default function FAQ({
  eyebrow = "FAQ",
  title = "信用卡換現金完整說明",
  items = creditCardFAQs,
}: {
  eyebrow?: string;
  title?: string;
  items?: FAQItem[];
}) {
  return (
    <section className="site-section bg-[#f8fbff]">
      <div className="site-container">
        <p className="site-eyebrow">{eyebrow}</p>
        <h2 className="site-title">{title}</h2>
        <p className="site-copy">依照申請條件、KYC、安全與實際可行性整理，讓您在諮詢前就能先建立基本認識。</p>
        <div className="site-card mt-8 divide-y divide-slate-200 overflow-hidden">
          {items.map((item) => (
            <details key={item.question} className="group px-6 py-1">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-lg font-black text-slate-900 marker:content-none">
                {item.question}
                <span aria-hidden className="text-2xl font-normal text-[#1f5eff] transition-transform group-open:rotate-45">+</span>
              </summary>
              <div className="pb-5 pr-8 leading-8 text-slate-600">{item.answer}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
