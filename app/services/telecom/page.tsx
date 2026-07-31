import type { Metadata } from "next";
import Image from "next/image";
import CTA from "../../components/CTA";
import FAQ, { telecomFAQs } from "../../components/FAQ";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Process from "../../components/Process";
import TrustSignals from "../../components/TrustSignals";
import { SITE_URL } from "../../lib/site";

export const metadata: Metadata = {
  title: "電信小額換現金｜全台線上諮詢｜安沛 AnBridge",
  description: "安沛提供電信小額換現金諮詢，支援中華電信、遠傳、台灣大哥大與指定數位商品項目；先由 LINE 確認可行範圍與交易安全。",
  alternates: { canonical: new URL("/services/telecom", SITE_URL).toString() },
  openGraph: { title: "電信小額換現金｜全台線上諮詢｜安沛 AnBridge", description: "先由 LINE 評估電信小額換現金的可行範圍與流程。", url: new URL("/services/telecom", SITE_URL).toString(), type: "website" },
  twitter: { card: "summary_large_image", title: "電信小額換現金｜全台線上諮詢｜安沛 AnBridge", description: "先由 LINE 評估電信小額換現金的可行範圍與流程。" },
};

export default function TelecomPage() {
  return <><Header /><main className="pt-[76px]"><section className="bg-[#0f2747] px-6 py-16 text-white sm:px-8 lg:py-20"><div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2"><div><p className="text-sm font-bold tracking-[.2em] text-sky-300">TELECOM MICRO-PAYMENT</p><h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">電信小額換現金</h1><p className="mt-5 max-w-xl text-lg leading-8 text-slate-200">依門號、代收與數位商品條件評估可行範圍；由專員先說明流程與注意事項，再決定是否進一步辦理。</p><p className="mt-5 text-sm font-semibold text-sky-100">誠信經營｜真實據點｜全台服務｜線上辦理</p><div className="mt-8"><CTA /></div></div><Image src="/images/telecom.png" alt="電信小額換現金服務示意圖" width={1536} height={1024} priority sizes="(min-width: 1024px) 50vw, 100vw" className="h-auto w-full rounded-3xl" /></div></section><section className="px-6 py-16 sm:px-8 lg:py-20"><div className="mx-auto max-w-6xl"><p className="text-sm font-bold tracking-[.22em] text-[#0f2747]">SUPPORTED OPTIONS</p><h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">可先詢問的電信與數位項目</h2><p className="mt-4 leading-8 text-slate-600">中華電信、遠傳、台灣大哥大，以及 MyCard、Gash、Google Pay、Apple Pay、LINE 貼圖與遊戲點數等項目，均須以當下資格與平台規範確認。</p></div></section><TrustSignals /><Process /><FAQ title="電信小額換現金完整說明" items={telecomFAQs} /></main><Footer /></>;
}
