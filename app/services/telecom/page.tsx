import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "信用卡換現金｜最高參考實拿92%｜安沛",
  description: "安沛提供信用卡換現金服務，最高參考比例可達92%，流程透明，專人協助。",
  keywords: ["信用卡換現金", "安沛", "刷卡換現金"],
};


export default function TelecomCashPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="mb-6 text-4xl font-bold">電信小額換現金</h1>
      <p className="mb-4 text-lg text-gray-700">
        支援三大電信、Google Pay、Apple Pay，依額度評估收購金額。
      </p>
      <p className="mb-6 text-gray-600">流程簡單，專人協助，快速完成。</p>
      <a
        href="https://line.me/R/ti/p/@anbridge"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-lg bg-primary px-6 py-3 text-white shadow transition-transform hover:scale-105"
      >
        立即詢問
      </a>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "電信小額換現金",
            provider: {
              "@type": "Organization",
              name: "AnBridge 安沛",
              url: "https://anbridge.vercel.app/services/telecom",
            },
            areaServed: { "@type": "Place", name: "台灣" },
            description:
              "安沛提供電信小額換現金服務，支援三大電信、Google Pay、Apple Pay，依額度評估收購金額。",
          }),
        }}
      />
    </section>
  );
}
