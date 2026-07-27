const reasons = [
  ["實際拿手金額比例高", "每筆先確認預估實拿，讓您有比較基準。"],
  ["流程透明、費用固定", "辦理前確認費用，不會在流程中臨時加收。"],
  ["真實聯絡電話、實體店面", "提供可聯繫的服務管道與交易說明。"],
  ["不要求購買點數卡或交出簡訊認證", "避免要求您交付帳戶與簡訊驗證資訊。"],
];

export default function WhyChoose() {
  return (
    <section className="bg-white px-6 py-16 sm:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-sm font-semibold tracking-[0.18em] text-blue-700">WHY ANBRIDGE</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">為什麼選安沛</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {reasons.map(([title, description], index) => (
            <article key={title} className="flex gap-5 rounded-2xl border border-slate-200 p-6 sm:p-7">
              <span className="text-3xl font-bold text-sky-500">0{index + 1}</span>
              <div>
                <h3 className="text-xl font-bold text-slate-950">{title}</h3>
                <p className="mt-2 leading-relaxed text-slate-600">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
