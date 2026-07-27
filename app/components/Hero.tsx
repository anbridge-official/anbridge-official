import CTA from "./CTA";
import Compare from "./Compare";

export default function Hero() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-16 px-6 py-24 lg:flex-row">
      <div className="flex-1 text-left">
        <h1 className="mb-6 text-5xl font-bold leading-tight">
          信用卡換現金｜刷卡換現金
        </h1>
        <p className="mb-4 text-2xl font-bold text-primary">
          最高參考實拿 <span className="text-6xl">92%</span>
        </p>
        <p className="mb-6 text-lg text-gray-700">
          市場常見約85%～90% <br />
          安沛最高參考實拿92% <br />
          同樣10萬元，最高可多拿約7000元
        </p>
        <CTA />
        <ul className="mt-6 space-y-2 text-gray-600">
          <li>LINE免費評估</li>
          <li>專人協助</li>
          <li>流程透明</li>
          <li>快速了解預估實拿金額</li>
        </ul>
      </div>
      <div className="flex-1">
        <Compare />
      </div>
    </section>
  );
}
