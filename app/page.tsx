import type { Metadata } from "next";

import CTA from "./components/CTA";
import Compare from "./components/Compare";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Process from "./components/Process";
import ServiceGrid from "./components/ServiceGrid";
import WhyChoose from "./components/WhyChoose";

export const metadata: Metadata = {
  title: "安沛 AnBridge｜信用卡換現金・刷卡換現金｜最高參考實拿 92%",
  description:
    "信用卡換現金、刷卡換現金、電信小額與後支付換現金。辦理前確認預估實拿與所有費用，同樣 10 萬元最高可多拿約 7,000 元。",
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      <Header />
      <main className="flex-1 pt-16">
        <Hero />
        <Compare />
        <ServiceGrid />
        <WhyChoose />
        <Process />
        <FAQ />
        <section className="bg-slate-950 px-6 py-16 text-center text-white sm:px-8">
          <div className="mx-auto max-w-2xl">
            <p className="text-sm font-semibold tracking-[0.2em] text-sky-300">
              ANBRIDGE
            </p>
            <h2 className="mt-3 text-3xl font-bold">LINE 免費估價</h2>
            <p className="mt-4 text-slate-300">
              先確認預估實拿與所有費用，再決定是否安排辦理。
            </p>
            <div className="mt-7">
              <CTA />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
