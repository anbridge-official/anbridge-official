import CTA from "./CTA";

export default function Compare() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-md">
      <h2 className="mb-4 text-2xl font-bold">
        同樣10萬元，為什麼有人最後拿比較少？
      </h2>
      <table className="mb-6 w-full text-lg">
        <thead>
          <tr>
            <th className="text-left">比較項目</th>
            <th>一般市場</th>
            <th>安沛</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-left">原始金額</td>
            <td>100000</td>
            <td>100000</td>
          </tr>
          <tr>
            <td className="text-left">實拿金額</td>
            <td>85000～90000</td>
            <td className="font-bold text-primary">92000</td>
          </tr>
          <tr>
            <td className="text-left">差額</td>
            <td>-</td>
            <td className="font-bold text-green-600">最高約7000元</td>
          </tr>
        </tbody>
      </table>
      <p className="mb-4 text-2xl font-bold text-green-600">
        最高可多拿約7000元
      </p>
      <CTA />
      <p className="mt-4 text-xs text-gray-500">
        ※ 信用卡交易可能依發卡銀行規定產生海外交易服務費（約1.5%），實際依銀行帳單為準。
      </p>
    </div>
  );
}
