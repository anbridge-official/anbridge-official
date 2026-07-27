import type { Metadata } from "next";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Process from "./components/Process";
import ServiceGrid from "./components/ServiceGrid";
import WhyChoose from "./components/WhyChoose";

export const metadata: Metadata = {
  title: "安沛 AnBridge｜信用卡換現金・刷卡換現金・電信小額・後支付",
  description:
    "安沛提供信用卡換現金、刷卡換現金、電信小額換現金、後支付換現金服務。流程透明，專人協助，最高參考比例可達92%。",
  keywords: [
    "安沛",
    "AnBridge",
    "信用卡換現金",
    "刷卡換現金",
    "電信小額換現金",
    "後支付換現金",
  ],
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black">
      <Header />
      <main className="flex flex-1 w-full flex-col bg-white px-4 py-24 pt-24 dark:bg-black sm:px-8 lg:px-16">
        <Hero />
        <ServiceGrid />
        <WhyChoose />
        <Process />
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "安沛 AnBridge",
              url: "https://anbridge.vercel.app",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://anbridge.vercel.app/?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "AnBridge 安沛",
              url: "https://anbridge.vercel.app",
              sameAs: ["https://line.me/R/ti/p/@anbridge"],
            },
          ]),
        }}
      />
    </div>
  );
}
