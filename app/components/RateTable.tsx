const rates = [
  ["30,000 以下", "91% 起"],
  ["30,000～50,000", "91.5% 起"],
  ["50,000～100,000", "92% 起"],
  ["100,000 以上", "93% 起"],
];

export default function RateTable() {
  return (
    <section className="site-section bg-[#eff6ff]">
      <div className="site-container">
        <p className="site-eyebrow">TAKE-HOME RATE</p>
        <h2 className="site-title">收費標準表</h2>
        <p className="site-copy">依照額度跳階式計算，讓您先對照實拿比例與可能成本。</p>
        <div className="mt-10 grid overflow-hidden rounded-[1.75rem] bg-slate-200 shadow-sm sm:grid-cols-2">
          {rates.map(([amount, rate]) => (
            <div key={amount} className="flex items-center justify-between bg-white px-6 py-5">
              <span className="font-bold text-slate-700">{amount}</span>
              <strong className="text-2xl font-black text-[#0f2747]">{rate}</strong>
            </div>
          ))}
        </div>
        <p className="mt-5 text-left text-sm text-slate-500">（海外刷卡手續費 1.5% 另計，將於信用卡帳單出帳時支付。）</p>
      </div>
    </section>
  );
}
