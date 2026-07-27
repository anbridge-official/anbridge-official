import type { Metadata } from "next";
import CTA from "../../components/CTA";

export const metadata: Metadata = { title: "刷卡換現金｜安沛 AnBridge", description: "刷卡換現金服務，先確認預估實拿與所有費用，再安排後續辦理。" };

export default function SwipeCashPage() {
  return <section className="mx-auto max-w-4xl px-6 py-28"><p className="text-sm font-semibold tracking-[0.18em] text-blue-700">ANBRIDGE SERVICE</p><h1 className="mt-3 text-4xl font-bold text-slate-950">刷卡換現金</h1><p className="mt-6 text-lg leading-relaxed text-slate-600">最高參考實拿 92%。加入 LINE 免費估價，先確認本次預估實拿與所有費用，再決定是否安排辦理。</p><div className="mt-8"><CTA /></div></section>;
}
