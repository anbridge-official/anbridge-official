import type { Metadata } from "next";
import CTA from "../../components/CTA";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Process from "../../components/Process";
import TrustSignals from "../../components/TrustSignals";
export const metadata: Metadata = { title: "BNPL 後支付換現金", description: "Buy Now, Pay Later（BNPL）後支付平台與額度方案說明。" };
const platforms = ["AFTEE 先享後付", "銀角零卡 zingala", "大哥付", "慢點付", "遠信月付大人"];
export default function Page() { return <><Header /><main className="pt-[76px]"><section className="bg-[#0f2747] px-6 py-16 text-white sm:px-8"><div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2"><div><p className="font-bold tracking-[.2em] text-sky-300">BNPL / BUY NOW, PAY LATER</p><h1 className="mt-4 text-4xl font-black sm:text-6xl">BNPL 後支付換現金</h1><p className="mt-5 text-4xl font-black text-sky-300 sm:text-5xl">業界參考實拿 5～7 折</p><p className="mt-2 text-lg text-slate-200">支援各大後支付平台</p><p className="mt-5 text-sm font-semibold text-sky-100">誠信經營｜真實據點｜當面交易｜線上辦理</p><div className="mt-8"><CTA /></div></div><div className="relative"><img src="/images/bnpl.png" alt="BNPL 後支付服務示意" className="w-full rounded-3xl" /><span className="absolute left-1/2 top-[6%] -translate-x-1/2 rounded-full bg-[#06152d]/95 px-8 py-2 text-2xl font-black text-sky-300">AFTEE</span></div></div></section><section className="px-6 py-16 sm:px-8"><div className="mx-auto max-w-6xl"><h2 className="text-3xl font-black">支援平台</h2><div className="mt-8 grid gap-3 md:grid-cols-2">{platforms.map((name) => <p key={name} className="rounded-2xl bg-[#f8fbff] p-5 font-bold">{name}</p>)}</div></div></section><TrustSignals /><Process /></main><Footer /></>; }
