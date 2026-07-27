const steps = [
  ["加入 LINE", "先由專人快速了解您的需求。"],
  ["確認平台額度", "確認可使用的平台、額度與預估實拿。"],
  ["KYC", "依流程完成必要身分確認。"],
  ["完成指定商品下訂或約定交易地點", "確認內容後，再安排後續辦理方式。"],
  ["現金撥款", "依確認完成的交易流程安排撥款。"],
];

export default function Process() {
  return (
    <section id="process" className="bg-slate-50 px-6 py-16 sm:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-sm font-semibold tracking-[0.18em] text-blue-700">HOW IT WORKS</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">安沛辦理流程</h2>
          <p className="mt-4 text-slate-600">每一步先確認，再安排下一步。</p>
        </div>
        <ol className="mt-10 grid gap-4 md:grid-cols-5">
          {steps.map(([title, description], index) => (
            <li key={title} className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-700 font-bold text-white">{index + 1}</span>
              <h3 className="mt-5 text-lg font-bold text-slate-950">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
