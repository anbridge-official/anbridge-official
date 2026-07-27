export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 flex h-16 w-full items-center justify-between bg-white px-6 shadow-sm">
      <h1 className="text-xl font-bold text-primary">AnBridge</h1>
      <nav className="hidden space-x-6 md:flex">
        <a href="/" className="hover:text-primary">
          首頁
        </a>
        <a href="#services" className="hover:text-primary">
          信用卡換現金
        </a>
        <a href="#services" className="hover:text-primary">
          刷卡換現金
        </a>
        <a href="#faq" className="hover:text-primary">
          FAQ
        </a>
      </nav>
      <a
        href="https://line.me/R/ti/p/@anbridge"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-lg bg-primary px-4 py-2 text-white shadow transition-transform hover:scale-105"
      >
        立即了解實拿金額
      </a>
    </header>
  );
}
