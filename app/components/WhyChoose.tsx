const steps = [
  ["聯繫諮詢", "先說明需求與預估額度，確認是否適合進一步評估。"],
  ["資料審核", "依案件需求確認資料與必要流程，讓雙方先了解要求。"],
  ["確認折數", "先看實拿比例與可行範圍，再判斷是否值得辦理。"],
  ["購買商品", "依確認內容完成交易安排，確保流程與金額清楚。"],
  ["完成撥款", "交易完成後依約確認撥款與後續事宜。"],
];

export default function WhyChoose() {
  return (
    <section className="bg-white px-6 py-24 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0F2747]">流程說明</p>
          <h2 className="mt-3 text-[1.62rem] font-bold leading-tight text-slate-900 sm:text-3xl">完整辦理流程，讓您先看清楚每一步</h2>
        </div>
        <div className="mt-12 divide-y divide-slate-200 rounded-[28px] border border-slate-200 bg-[#F8FBFF]">
          {steps.map(([title, description], index) => (
            <article key={title} className="flex flex-col gap-3 px-6 py-6 sm:flex-row sm:items-start sm:gap-6 sm:px-8">
              <span className="text-2xl font-bold text-[#0F2747]">0{index + 1}</span>
              <div>
                <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 leading-7 text-slate-600">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
