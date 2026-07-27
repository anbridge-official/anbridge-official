import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "信用卡換現金｜最高參考實拿92%｜安沛",
  description: "安沛提供信用卡換現金服務，最高參考比例可達92%，流程透明，專人協助。",
  keywords: ["信用卡換現金", "安沛", "刷卡換現金"],
};


export default function SwipeCashPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="mb-6 text-4xl font-bold">刷卡換現金</h1>
      <p className="mb-4 text-lg text-gray-700">
        提供刷卡換現金服務，最高參考實拿比例{" "}
        <span className="font-bold text-primary">92%</span>。
      </p>
      <p className="mb-6 text-gray-600">
        流程透明，費用固定，不會加收。
      </p>
      <a
        href="https://line.me/R/ti/p/@anbridge"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-lg bg-primary px-6 py-3 text-white shadow transition-transform hover:scale-105"
      >
        立即了解
      </a>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "刷卡換現金",
            provider: {
              "@type": "Organization",
              name: "AnBridge 安沛",
              url: "https://anbridge.vercel.app/services/swipe",
            },
            areaServed: { "@type": "Place", name: "台灣" },
            description:
              "安沛提供刷卡換現金服務，最高參考實拿比例92%，流程透明，費用固定，不會加收。",
          }),
        }}
      />
    </section>
  );
}
