import { LINE_URL } from "../lib/site";

type CTAProps = { compact?: boolean; label?: string };

export default function CTA({ compact = false, label = "馬上了解實拿金額" }: CTAProps) {
  return (
    <a
      href={LINE_URL}
      target="_blank"
      rel="noopener noreferrer"
      data-cta-location="site"
      className={`inline-flex w-full max-w-[18rem] items-center justify-start gap-2 rounded-full bg-[#06c755] font-bold text-white shadow-[0_14px_32px_rgba(6,199,85,.24)] transition hover:-translate-y-0.5 sm:w-auto ${compact ? "px-5 py-2.5 text-sm" : "px-7 py-3.5 text-base"}`}
    >
      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white text-[8px] font-black tracking-[-.08em] text-[#06c755]">LINE</span>
      {label}
    </a>
  );
}
