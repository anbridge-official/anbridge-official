const tiers = [
  ["3 萬以下", "90%"],
  ["3 萬～5 萬", "91%"],
  ["5 萬～10 萬", "91.5%"],
  ["10 萬～20 萬", "92%"],
  ["20 萬以上", "93%"],
];

export default function TakeHomeTiers() {
  return (
    <section className="bg-sky-50 px-5 py-16 sm:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-sm font-bold tracking-[.18em] text-sky-700">TAKE-HOME TIERS</p>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-950 sm:text-4xl">實拿階梯</h2>
          <p className="mt-4 text-slate-600">金額越高，最高參考實拿比例越高。</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {tiers.map(([amount, rate]) => <article key={amount} className="rounded-2xl border border-sky-100 bg-white p-6 text-center shadow-sm"><p className="font-bold text-slate-600">{amount}</p><p className="mt-3 text-4xl font-extrabold text-sky-700">{rate}</p><p className="mt-2 text-sm text-slate-500">最高參考實拿</p></article>)}
        </div>
        <p className="mt-6 text-center text-sm text-slate-500">實際實拿比例依交易條件及最終確認內容為準。</p>
      </div>
    </section>
  );
}
