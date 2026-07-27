import type { Metadata } from "next";
import CTA from "../../components/CTA";

export const metadata: Metadata = { title: "電信小額換現金｜安沛 AnBridge", description: "電信小額換現金服務，支援方式以當下可用條件確認為準。" };

export default function TelecomCashPage() {
  return <section className="mx-auto max-w-4xl px-6 py-28"><p className="text-sm font-semibold tracking-[0.18em] text-blue-700">ANBRIDGE SERVICE</p><h1 className="mt-3 text-4xl font-bold text-slate-950">電信小額換現金</h1><p className="mt-6 text-lg leading-relaxed text-slate-600">可先在 LINE 確認您使用的電信、可用方式、預估實拿與所有費用。</p><div className="mt-8"><CTA /></div></section>;
}
