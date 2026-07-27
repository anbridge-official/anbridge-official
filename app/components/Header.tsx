import Link from "next/link";

export default function Header() {
  return <header className="fixed top-0 left-0 z-50 flex h-16 w-full items-center justify-between border-b border-slate-800 bg-slate-950 px-6 text-white shadow-sm"><Link href="/" className="flex items-center gap-2"><span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-sky-300 to-blue-600"><span className="h-3 w-3 rotate-45 rounded-sm border border-white" /></span><span className="text-xl font-bold">AnBridge</span></Link><nav className="hidden space-x-6 text-sm text-slate-200 md:flex"><a href="#services" className="hover:text-sky-300">服務項目</a><a href="#process" className="hover:text-sky-300">辦理流程</a><a href="#faq" className="hover:text-sky-300">FAQ</a></nav><a href="https://line.me/R/ti/p/@anbridge" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-[#06C755] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#05b64d]">LINE 免費估價</a></header>;
}
