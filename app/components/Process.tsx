export default function Process() {
  return (
    <section id="process" className="mx-auto max-w-6xl px-6 py-16 text-center">
      <h2 className="mb-8 text-3xl font-bold">服務流程</h2>
      <p className="mb-12 text-center text-gray-600">
        安沛提供快速、安全、透明的換現金流程，讓您輕鬆完成。
      </p>
      <div className="grid gap-8 md:grid-cols-4">
        <div className="text-center">
          <div className="mb-2 text-4xl font-bold text-primary">1</div>
          <h3 className="mb-2 font-semibold">聯絡我們</h3>
          <p className="text-gray-600">
            透過 LINE 或電話諮詢，了解您的需求。
          </p>
        </div>

        <div className="text-center">
          <div className="mb-2 text-4xl font-bold text-primary">2</div>
          <h3 className="mb-2 font-semibold">評估額度</h3>
          <p className="text-gray-600">
            依信用卡或電信額度，提供最佳方案。
          </p>
        </div>

        <div className="text-center">
          <div className="mb-2 text-4xl font-bold text-primary">3</div>
          <h3 className="mb-2 font-semibold">確認流程</h3>
          <p className="text-gray-600">
            確認金額與流程，確保安全與透明。
          </p>
        </div>

        <div className="text-center">
          <div className="mb-2 text-4xl font-bold text-primary">4</div>
          <h3 className="mb-2 font-semibold">完成交易</h3>
          <p className="text-gray-600">快速入帳，立即取得現金。</p>
        </div>
      </div>
    </section>
  );
}
