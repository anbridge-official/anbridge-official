import Image from "next/image";
import CTA from "./CTA";

const costs = [
  ["信用卡交易成本", "約 1%～2%"],
  ["政府發票稅金", "約 5%"],
  ["風險與營運成本", "約 1%～2%"],
  ["商品折舊成本", "約 3%～6%"],
  ["總成本", "約 10%～15%"],
];

const trustPoints = ["SSL 保護", "隱私保護", "全台服務", "快速回覆", "最高參考實拿 93%"];

export default function Hero() {
  return (
    <>
      <section className="bg-[#0f2747] px-6 pb-16 pt-24 text-white sm:px-8 lg:pt-28">
        <div className="site-container grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-bold tracking-[.24em] text-sky-300">CREDIT CARD CASH</p>
            <h1 className="mt-5 text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              <span className="block">信用卡換現金｜刷卡換現金</span>
              <span className="mt-3 block text-sky-300">3 秒知道是否值得諮詢</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-slate-100">
              先由 LINE 評估可行範圍，最高參考實拿 93%，流程透明、隱私安心，讓您先確認是否適合。
            </p>
            <ul className="hero-trust-list" aria-label="安心交易承諾">
              {trustPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p className="mt-6 border-l-2 border-sky-300 pl-4 text-sm font-semibold tracking-wide text-sky-100">
              誠信經營｜真實據點｜全台服務｜LINE 立即諮詢
            </p>
            <div className="mt-8">
              <CTA label="馬上了解實拿金額" />
            </div>
          </div>
          <Image
            src="/images/credit-card.png"
            alt="信用卡換現金與刷卡換現金服務示意圖"
            width={1536}
            height={1024}
            priority
            loading="eager"
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="aspect-[3/2] h-auto w-full rounded-[1.75rem] object-cover"
          />
        </div>
      </section>

      <section className="site-section bg-[#f8fbff]">
        <div className="site-container">
          <p className="site-eyebrow">COST BREAKDOWN</p>
          <h2 className="site-title">為什麼市場多數只有 85%～90%？</h2>
          <p className="site-copy">信用卡換現金並非單純扣比例，中間包含多項成本，安沛會先把實際機制說清楚。</p>
          <div className="site-card mt-8 overflow-hidden">
            {costs.map(([name, value]) => {
              const total = name === "總成本";
              return (
                <div key={name} className={`flex items-center justify-between border-b border-slate-100 px-6 py-5 last:border-0 ${total ? "bg-[#fff6f0]" : "bg-white"}`}>
                  <span className={total ? "font-black text-[#b42318]" : "font-bold text-slate-800"}>{name}</span>
                  <strong className={total ? "text-xl text-[#b42318]" : "text-lg text-[#0f2747]"}>{value}</strong>
                </div>
              );
            })}
          </div>
          <p className="mt-4 text-sm text-slate-500">海外刷卡手續費 1.5% 另計；此費用由發卡銀行收取，將於信用卡帳單出帳時支付，並非 AnBridge 收取。</p>
          <p className="mt-6 text-lg font-semibold leading-8 text-[#0f2747]">
            而安沛優化流程與成本控管，讓客戶取得更好的實拿金額 <strong className="text-3xl text-[#1f5eff]">最高 93%</strong>
          </p>
        </div>
      </section>
    </>
  );
}
