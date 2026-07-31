import Link from "next/link";

const services = [
  ["信用卡換現金", "實拿金額最高參考 93%", "/"],
  ["刷卡換現金", "實拿金額最高參考 93%", "/"],
  ["電信小額換現金", "依額度與項目評估實拿金額", "/services/telecom"],
  ["後支付換現金", "業界參考實拿 5～7 折", "/services/postpay"],
];

export default function ServiceGrid() {
  return (
    <section className="site-section bg-[#f8fbff]">
      <div className="site-container">
        <p className="site-eyebrow">SERVICES</p>
        <h2 className="site-title">服務項目</h2>
        <div className="mt-8 divide-y divide-slate-200 rounded-[1.75rem] border border-slate-200 bg-white">
          {services.map(([title, description, href]) => (
            <Link href={href} key={title} className="group flex flex-col gap-2 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-2xl font-black text-slate-900">{title}</h3>
                <p className="mt-1 text-slate-600">{description}</p>
              </div>
              <span className="font-bold text-[#1f5eff]">馬上了解 →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
