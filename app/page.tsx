import type { Metadata } from "next";
import Compare from "./components/Compare";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MobileCTA from "./components/MobileCTA";
import Process from "./components/Process";
import RateTable from "./components/RateTable";
import ServiceGrid from "./components/ServiceGrid";
import ServiceGuide from "./components/ServiceGuide";
import TrustSignals from "./components/TrustSignals";
import { SITE_URL } from "./lib/site";

export const metadata: Metadata = {
  title: "信用卡換現金｜刷卡換現金最高參考實拿 93%｜安沛 AnBridge",
  description: "安沛 AnBridge 提供信用卡換現金、刷卡換現金、電信小額與後支付換現金諮詢。流程透明、隱私保護、全台服務，先透過 LINE 評估可行範圍與參考實拿金額。",
  keywords: ["信用卡換現金", "刷卡換現金", "電信小額換現金", "後支付換現金", "額度換現金", "安沛 AnBridge"],
  alternates: { canonical: new URL("/", SITE_URL).toString() },
  openGraph: {
    title: "信用卡換現金｜刷卡換現金最高參考實拿 93%｜安沛 AnBridge",
    description: "流程透明、隱私保護、全台服務；先透過 LINE 了解可行範圍與實拿金額。",
    url: new URL("/", SITE_URL).toString(),
    type: "website",
    locale: "zh_TW",
  },
  twitter: {
    card: "summary_large_image",
    title: "信用卡換現金｜刷卡換現金最高參考實拿 93%｜安沛 AnBridge",
    description: "先透過 LINE 了解可行範圍與實拿金額。",
  },
};

export default function Home() {
  return <div className="flex min-h-screen flex-col"><Header /><main className="flex-1"><Hero /><TrustSignals /><RateTable /><Compare /><Process /><ServiceGuide /><FAQ /><ServiceGrid /></main><Footer /><MobileCTA /></div>;
}
