import CTA from "./CTA";

const services = ["信用卡換現金", "刷卡換現金", "電信小額換現金", "後支付換現金"];
const promises = ["辦理前確認預估實拿", "辦理前確認所有費用", "不會面交才臨時加價", "確認後才安排辦理"];

export default function Hero() {
  return (
    <section className="overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 px-6 py-16 text-white sm:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-3">
          <span aria-hidden="true" className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-sky-300 to-blue-600 shadow-lg shadow-blue-950/60">
            <span className="h-5 w-5 rotate-45 rounded-sm border-2 border-white" />
          </span>
          <div>
            <p className="text-xl font-bold tracking-tight">AnBridge</p>
            <p className="text-sm tracking-[0.22em] text-sky-300">安沛 FINTECH</p>
          </div>
        </div>
        <nav aria-label="服務導覽" className="mt-10 flex flex-wrap gap-2">
          {services.map((service) => <a key={service} href="#services" className="rounded-full border border-blue-300/30 bg-white/10 px-4 py-2 text-sm font-medium text-blue-100 transition hover:bg-white/20">{service}</a>)}
        </nav>
        <div className="mt-12 grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-sky-300">CLEAR TERMS. FIRST.</p>
            <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">信用卡換現金｜刷卡換現金<span className="mt-2 block text-sky-300">最高參考實拿 92%</span></h1>
            <div className="mt-7 space-y-2 text-lg leading-relaxed text-slate-200 sm:text-xl"><p>市場常見約 85%～90%</p><p>安沛最高參考實拿 92%</p><p>同樣 10 萬元，最高可多拿約<span className="ml-2 font-bold text-amber-300">7,000 元</span></p></div>
            <div className="mt-9"><CTA /></div>
          </div>
          <aside className="rounded-3xl border border-blue-300/25 bg-white/10 p-7 shadow-2xl backdrop-blur-sm sm:p-8">
            <p className="text-sm font-semibold tracking-[0.16em] text-sky-300">BEFORE YOU DECIDE</p><h2 className="mt-3 text-2xl font-bold">安沛四大承諾</h2>
            <ol className="mt-6 space-y-4">{promises.map((promise, index) => <li key={promise} className="flex gap-4"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-400 font-bold text-slate-950">{index + 1}</span><span className="pt-0.5 text-slate-100">{promise}</span></li>)}</ol>
          </aside>
        </div>
      </div>
    </section>
  );
}
