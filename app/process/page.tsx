import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "信用卡換現金｜最高參考實拿92%｜安沛",
  description: "安沛提供信用卡換現金服務，最高參考比例可達92%，流程透明，專人協助。",
  keywords: ["信用卡換現金", "安沛", "刷卡換現金"],
};

export default function ProcessPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="mb-6 text-4xl font-bold">辦理流程</h1>
      <ol className="space-y-4 text-lg text-gray-700">
        <li>加入LINE</li>
        <li>確認平台額度</li>
        <li>KYC確認</li>
        <li>完成指定商品下訂或約定交易地點</li>
        <li>現金撥款</li>
      </ol>
    </section>
  );
}
