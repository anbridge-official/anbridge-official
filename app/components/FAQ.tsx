import CTA from "./CTA";

const faqs = [
  {
    question: "信用卡換現金 vs 預借現金，有什麼差別？",
    answer: "預借現金是信用卡發卡銀行提供的功能，通常會有預借現金手續費與循環利息等成本。不同方式、額度與費用條件不同，建議先向發卡銀行及服務人員確認後再評估。",
  },
  {
    question: "信用卡換現金安全嗎？",
    answer: "請只在您了解流程、預估實拿與所有費用後再決定。安沛不要求您交付簡訊驗證碼或帳戶控制權；若有人要求提供敏感驗證資訊，請停止並提高警覺。",
  },
  {
    question: "為什麼有人只能拿 85%？",
    answer: "實拿比例會受到交易類型、銀行端成本、稅金、服務費與風險成本影響。不同條件的預估結果不同，務必在辦理前確認本次可實拿金額。",
  },
  {
    question: "除了實拿比例，還有其他費用嗎？",
    answer: "費用應在辦理前逐項確認。安沛以先確認預估實拿與所有費用為原則，確認後才安排後續辦理。",
  },
  {
    question: "信用卡海外交易服務費約 1.5% 是什麼？",
    answer: "部分海外或外幣交易可能依發卡機構規則產生約 1.5% 的海外交易服務費，實際金額與規則以您的發卡銀行公告及帳單為準。",
  },
  {
    question: "電信小額支援哪些電信？",
    answer: "可先在 LINE 提供您使用的電信與可用方式，由專人協助確認。常見方式包含三大電信相關服務，實際仍以當下可用條件為準。",
  },
  {
    question: "後支付支援哪些平台？",
    answer: "支援範圍會依平台規則與帳戶條件變動。加入 LINE 後告知您使用的平台，先確認是否適用與預估實拿，再決定是否進行。",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-white px-6 py-16 sm:px-8 lg:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-sm font-semibold tracking-[0.18em] text-blue-700">FAQ</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">常見問題</h2>
        </div>
        <div className="mt-10 space-y-3">
          {faqs.map((faq) => (
            <details key={faq.question} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <summary className="pr-8 text-lg font-bold text-slate-900">{faq.question}</summary>
              <p className="mt-4 leading-relaxed text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
        <div className="mt-10 text-center">
          <CTA />
        </div>
      </div>
    </section>
  );
}
