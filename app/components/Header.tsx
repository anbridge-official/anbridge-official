import Link from "next/link";
import CTA from "./CTA";

const links = [["信用卡換現金", "/"], ["刷卡換現金", "/"], ["電信小額換現金", "/services/telecom"], ["後支付換現金", "/services/postpay"]];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0f2747]/95 text-white shadow-[0_8px_32px_rgba(15,39,71,0.16)] backdrop-blur">
      <div className="site-container flex min-h-[76px] items-center gap-4 px-5 py-3 sm:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-3" aria-label="安沛 AnBridge 首頁">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-sky-400/20 text-base font-black text-sky-100 ring-1 ring-sky-200">AB</span>
          <span className="min-w-0 text-left">
            <span className="block text-[1.2rem] font-black leading-none tracking-[0.02em] sm:text-[1.45rem]">安沛 AnBridge</span>
            <span className="mt-1 block text-[0.65rem] font-semibold leading-none tracking-[0.16em] text-sky-100">額度換現金專家</span>
          </span>
        </Link>
        <nav className="hidden flex-1 items-center justify-center gap-3 lg:flex" aria-label="主要導覽">
          {links.map(([label, href]) => (
            <Link key={label} href={href} className="text-sm font-semibold text-slate-200 transition hover:text-sky-300">
              {label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <a href="tel:0900018000" className="hidden items-center gap-2 whitespace-nowrap text-sm font-semibold text-sky-50 md:flex" aria-label="聯絡電話 0900-018-000">
            <span aria-hidden className="grid h-9 w-9 place-items-center rounded-full bg-white text-base text-[#0f2747]">☎</span>
            0900-018-000
          </a>
          <CTA compact />
        </div>
      </div>
    </header>
  );
}
