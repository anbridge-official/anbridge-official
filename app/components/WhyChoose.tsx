export default function WhyChoose() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 text-center">
      <h2 className="mb-6 text-3xl font-bold">為什麼選安沛</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="rounded-xl bg-white p-6 shadow">
          <h3 className="mb-2 text-xl font-bold">比例高</h3>
          <p className="text-gray-600">重視最後真正拿到的金額。</p>
        </div>
        <div className="rounded-xl bg-white p-6 shadow">
          <h3 className="mb-2 text-xl font-bold">費用固定</h3>
          <p className="text-gray-600">流程透明，不會加收。</p>
        </div>
        <div className="rounded-xl bg-white p-6 shadow">
          <h3 className="mb-2 text-xl font-bold">真實聯繫</h3>
          <p className="text-gray-600">提供真實電話與服務據點。</p>
        </div>
        <div className="rounded-xl bg-white p-6 shadow">
          <h3 className="mb-2 text-xl font-bold">安全提醒</h3>
          <p className="text-gray-600">不要求購買點數卡，不要求簡訊認證。</p>
        </div>
      </div>
    </section>
  );
}
