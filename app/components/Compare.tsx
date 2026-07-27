export default function Compare() {
  return (
    <section className="bg-white px-6 py-16 sm:px-8 lg:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="text-sm font-semibold tracking-[0.18em] text-blue-700">
            SAME CREDIT LIMIT, DIFFERENT TAKE-HOME AMOUNT
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
            同樣 100,000 元，實拿差多少？
          </h2>
        </div>

        <div className="mt-10 grid overflow-hidden rounded-3xl border border-slate-200 shadow-xl md:grid-cols-2">
          <div className="bg-slate-100 p-8 sm:p-10">
            <p className="text-sm font-semibold text-slate-500">一般市場</p>
            <p className="mt-5 text-4xl font-bold text-slate-700">85,000～90,000</p>
            <p className="mt-2 text-slate-500">以額度 100,000 元試算</p>
          </div>
          <div className="bg-gradient-to-br from-blue-700 to-sky-500 p-8 text-white sm:p-10">
            <p className="text-sm font-semibold text-blue-100">安沛最高參考實拿</p>
            <p className="mt-5 text-5xl font-bold">92,000</p>
            <p className="mt-4 text-xl font-bold text-amber-200">最高可多拿約 7,000 元</p>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-6 sm:p-8">
          <h3 className="text-center text-xl font-bold text-slate-900">透明成本公式</h3>
          <div className="mt-6 grid gap-3 text-center text-slate-700 sm:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] sm:items-center">
            <p>刷卡銀行端扣除<br /><strong>2%～3%</strong></p>
            <span className="text-2xl text-blue-600">+</span>
            <p>政府稅金（發票）<br /><strong>5%</strong></p>
            <span className="text-2xl text-blue-600">+</span>
            <p>風險與利潤成本<br /><strong>2%</strong></p>
            <span className="text-2xl text-blue-600">=</span>
            <p className="font-bold text-blue-800">總成本約<br />9%～10%</p>
          </div>
        </div>
      </div>
    </section>
  );
}
