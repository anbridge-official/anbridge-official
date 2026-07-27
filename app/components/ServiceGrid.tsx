import CTA from "./CTA";

const services = [
  { title: "信用卡換現金", detail: "最高參考實拿 92%" },
  { title: "刷卡換現金", detail: "最高參考實拿 92%" },
  { title: "電信小額換現金", detail: "三大電信・Google Pay・Apple Pay" },
  { title: "後支付換現金", detail: "先確認您使用的平台與可用額度", platforms: ["AFTEE", "街口", "分期服務", "其他平台"] },
];

export default function ServiceGrid() {
  return (
    <section id="services" className="bg-slate-50 px-6 py-16 sm:px-8 lg:py-20"><div className="mx-auto max-w-6xl">
      <div className="max-w-2xl"><p className="text-sm font-semibold tracking-[0.18em] text-blue-700">SERVICES</p><h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">安沛四大服務</h2><p className="mt-4 text-slate-600">先在 LINE 確認適用方式、預估實拿與所有費用。</p></div>
      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">{services.map((service, index) => <article key={service.title} className="flex min-h-72 flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><span className="text-sm font-bold text-blue-700">0{index + 1}</span><h3 className="mt-6 text-xl font-bold text-slate-950">{service.title}</h3><p className="mt-3 leading-relaxed text-slate-600">{service.detail}</p>{service.platforms && <div className="mt-5 flex flex-wrap gap-2">{service.platforms.map((platform) => <span key={platform} className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-800">{platform}</span>)}</div>}<div className="mt-auto pt-6"><CTA /></div></article>)}</div>
    </div></section>
  );
}
