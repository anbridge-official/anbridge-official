import Link from "next/link";
import CTA from "./CTA";

const links = [
  ["信用卡換現金", "/"],
  ["刷卡換現金", "/"],
  ["電信小額換現金", "/services/telecom"],
  ["後支付換現金", "/services/bnpl"],
];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0f2747]/95 text-white shadow-[0_8px_32px_rgba(15,39,71,0.16)] backdrop-blur">
      <div className="mx-auto flex min-h-[76px] max-w-7xl items-center gap-4 px-5 py-3 sm:px-8">
        <Link href="/" className="shrink-0" aria-label="安沛 AnBridge 首頁">
          <p className="text-[2rem] font-black leading-none tracking-[0.02em] sm:text-[2.45rem]">安沛 AnBridge</p>
          <p className="mt-0.5 text-center text-[7px] font-medium leading-none tracking-[0.12em] text-sky-100">額度換現金專家</p>
        </Link>
        <nav className="hidden flex-1 items-center justify-center gap-3 lg:flex" aria-label="主要導覽">
          {links.map(([label, href]) => <Link key={label} href={href} className="text-sm font-semibold text-slate-200 transition hover:text-sky-300">{label}</Link>)}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <a href="tel:0900018000" className="hidden items-center gap-2 whitespace-nowrap text-sm font-semibold text-sky-50 md:flex" aria-label="聯絡電話 0900-018-000"><span aria-hidden="true" className="grid h-9 w-9 place-items-center rounded-full bg-white text-base text-[#0f2747]">☎</span>0900-018-000</a>
          <CTA compact />
        </div>
      </div>
    </header>
  );
}
