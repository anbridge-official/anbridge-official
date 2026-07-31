const rows = [
  ["資金來源", "信用卡可用額度與交易條件", "銀行借款", "銀行借款", "典當品價值"],
  ["確認重點", "實拿比例、流程與還款能力", "利率與繳款日", "利率、核貸與負債比", "物品估價與贖回條件"],
  ["適用情境", "先確認額度、流程與可行範圍", "短期借款需求", "較長期資金規劃", "有可典當物品者"],
];

export default function Compare() {
  return (
    <section className="site-section bg-white">
      <div className="site-container">
        <p className="site-eyebrow">COMPARE OPTIONS</p>
        <h2 className="site-title">信用卡換現金與其他資金方式比較</h2>
        <p className="site-copy">先了解差異，再選擇符合自己還款能力與需求的方式。</p>
        <div className="mt-8 overflow-x-auto rounded-[1.75rem] border border-slate-200">
          <table className="min-w-[760px] w-full border-collapse text-left text-sm">
            <thead className="bg-[#0f2747] text-white"><tr><th className="px-5 py-4">比較項目</th><th className="px-5 py-4">信用卡換現金</th><th className="px-5 py-4">預借現金</th><th className="px-5 py-4">信用貸款</th><th className="px-5 py-4">當舖</th></tr></thead>
            <tbody>{rows.map((row) => <tr key={row[0]} className="border-t border-slate-200 even:bg-slate-50">{row.map((cell, index) => <td key={cell} className={index === 0 ? "px-5 py-4 font-black text-slate-900" : "px-5 py-4 leading-6 text-slate-600"}>{cell}</td>)}</tr>)}</tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
