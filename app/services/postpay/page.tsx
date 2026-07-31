import type { Metadata } from "next";
import Image from "next/image";
import CTA from "../../components/CTA";
import FAQ, { postpayFAQs } from "../../components/FAQ";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Process from "../../components/Process";
import TrustSignals from "../../components/TrustSignals";
import { SITE_URL } from "../../lib/site";

export const metadata: Metadata = {
  title: "後支付換現金｜業界參考實拿 5～7 折｜安沛 AnBridge",
  description: "安沛提供後支付換現金諮詢，協助評估 AFTEE、銀角零卡 Zingala、大哥付、慢點付與遠信月付大人等平台的可行範圍與安全流程。",
  alternates: { canonical: new URL("/services/postpay", SITE_URL).toString() },
  openGraph: { title: "後支付換現金｜業界參考實拿 5～7 折｜安沛 AnBridge", description: "先由 LINE 評估後支付平台可行性與實拿範圍。", url: new URL("/services/postpay", SITE_URL).toString(), type: "website" },
  twitter: { card: "summary_large_image", title: "後支付換現金｜業界參考實拿 5～7 折｜安沛 AnBridge", description: "先由 LINE 評估後支付平台可行性與實拿範圍。" },
};

const platforms = ["AFTEE 先享後付", "銀角零卡 Zingala", "大哥付", "慢點付", "遠信月付大人"];

export default function PostpayPage() {
  return <><Header /><main className="pt-[76px]"><section className="bg-[#0f2747] px-6 py-16 text-white sm:px-8 lg:py-20"><div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2"><div><p className="text-sm font-bold tracking-[.2em] text-sky-300">POSTPAY CASH</p><h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">後支付換現金</h1><p className="mt-5 text-4xl font-black text-sky-300 sm:text-5xl">業界參考實拿 5～7 折</p><p className="mt-3 text-lg text-slate-200">支援各大後支付平台，先確認平台額度、適用通路與交易條件。</p><p className="mt-5 text-sm font-semibold text-sky-100">誠信經營｜真實據點｜全台服務｜線上辦理</p><div className="mt-8"><CTA /></div></div><div className="relative"><Image src="/images/bnpl.png" alt="後支付換現金服務示意圖" width={1536} height={1024} priority sizes="(min-width: 1024px) 50vw, 100vw" className="h-auto w-full rounded-3xl" /><span className="absolute left-1/2 top-[6%] -translate-x-1/2 rounded-full bg-[#06152d]/95 px-8 py-2 text-2xl font-black text-sky-300">AFTEE</span></div></div></section><section className="px-6 py-16 sm:px-8 lg:py-20"><div className="mx-auto max-w-6xl"><p className="text-sm font-bold tracking-[.22em] text-[#0f2747]">SUPPORTED PLATFORMS</p><h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">可先詢問的平台</h2><div className="mt-8 grid gap-3 md:grid-cols-2">{platforms.map((name) => <p key={name} className="border-b border-slate-200 py-5 text-xl font-black text-slate-800">{name}</p>)}</div></div></section><TrustSignals /><Process /><FAQ title="後支付換現金完整說明" items={postpayFAQs} /></main><Footer /></>;
}
