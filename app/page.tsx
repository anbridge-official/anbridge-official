import type { Metadata } from "next";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MobileCTA from "./components/MobileCTA";
import Process from "./components/Process";
import RateTable from "./components/RateTable";
import ServiceGrid from "./components/ServiceGrid";
import TrustSignals from "./components/TrustSignals";

export const metadata: Metadata = {
  title: "信用卡換現金｜刷卡換現金最高參考實拿93%｜安沛",
  description: "信用卡換現金、刷卡換現金服務。安沛最高參考實拿93%，先確認預估金額與流程，透明說明銀行海外交易服務費。",
  keywords: ["信用卡換現金", "刷卡換現金", "信用卡額度換現金", "信用卡變現", "信用卡現金周轉", "信用卡額度使用"],
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustSignals />
        <RateTable />
        <Process />
        <FAQ />
        <ServiceGrid />
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
}
