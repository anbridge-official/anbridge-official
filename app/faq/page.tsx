import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "信用卡換現金｜最高參考實拿92%｜安沛",
  description: "安沛提供信用卡換現金服務，最高參考比例可達92%，流程透明，專人協助。",
  keywords: ["信用卡換現金", "安沛", "刷卡換現金"],
};


export default function FAQPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="mb-6 text-4xl font-bold">常見問題 FAQ</h1>
      <div className="space-y-6">
        <details className="rounded-lg bg-white p-4 shadow">
          <summary className="cursor-pointer font-semibold">
            信用卡換現金安全嗎？
          </summary>
          <p className="mt-2 text-gray-600">
            安沛流程透明，專人協助，避免隱藏費用，安全性高。
          </p>
        </details>
        <details className="rounded-lg bg-white p-4 shadow">
          <summary className="cursor-pointer font-semibold">
            信用卡換現金 vs 預借現金？
          </summary>
          <p className="mt-2 text-gray-600">
            信用卡換現金通常比例更高，流程更彈性；預借現金則依銀行規定，費用較高。
          </p>
        </details>
        <details className="rounded-lg bg-white p-4 shadow">
          <summary className="cursor-pointer font-semibold">
            為什麼有人只能拿85%？
          </summary>
          <p className="mt-2 text-gray-600">
            因為不同平台、額度與合作條件，實際比例會有所差異。
          </p>
        </details>
        <details className="rounded-lg bg-white p-4 shadow">
          <summary className="cursor-pointer font-semibold">
            後支付支援哪些平台？
          </summary>
          <p className="mt-2 text-gray-600">
            依平台額度評估，業界最高可達5～7折。
          </p>
        </details>
        <details className="rounded-lg bg-white p-4 shadow">
          <summary className="cursor-pointer font-semibold">
            電信支援哪些？
          </summary>
          <p className="mt-2 text-gray-600">三大電信、Google Pay、Apple Pay。</p>
        </details>
        <details className="rounded-lg bg-white p-4 shadow">
          <summary className="cursor-pointer font-semibold">
            除了比例還有其他費用嗎？
          </summary>
          <p className="mt-2 text-gray-600">
            可能依銀行規定產生海外交易服務費，約1.5%。
          </p>
        </details>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "信用卡換現金安全嗎？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "安沛流程透明，專人協助，避免隱藏費用，安全性高。",
                },
              },
              {
                "@type": "Question",
                name: "信用卡換現金 vs 預借現金？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "信用卡換現金通常比例更高，流程更彈性；預借現金則依銀行規定，費用較高。",
                },
              },
            ],
          }),
        }}
      />
    </section>
  );
}
