export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 py-8 text-center text-sm text-gray-600">
      <div className="mb-4 space-x-4">
        <a href="#services" className="hover:text-primary">
          信用卡換現金
        </a>
        <a href="#services" className="hover:text-primary">
          刷卡換現金
        </a>
        <a href="#services" className="hover:text-primary">
          電信小額換現金
        </a>
        <a href="#services" className="hover:text-primary">
          後支付換現金
        </a>
        <a href="#faq" className="hover:text-primary">
          FAQ
        </a>
        <a href="#process" className="hover:text-primary">
          流程
        </a>
        <a
          href="https://line.me/R/ti/p/@anbridge"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary"
        >
          LINE
        </a>
      </div>
      <p>聯絡電話：0900-000-000</p>
      <p className="mt-2">
        © {new Date().getFullYear()} AnBridge（安沛）. All rights reserved.
      </p>
    </footer>
  );
}
