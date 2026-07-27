type ServiceCardProps = {
  title: string;
  subtitle: string;
  description: string;
  button: string;
};

function ServiceCard({
  title,
  subtitle,
  description,
  button,
}: ServiceCardProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition-transform hover:-translate-y-1">
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="mb-2 font-semibold text-primary">{subtitle}</p>
      <p className="mb-4 text-gray-600">{description}</p>
      <a
        href="https://line.me/R/ti/p/@anbridge"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-lg bg-primary px-4 py-2 text-white shadow transition-transform hover:scale-105"
      >
        {button}
      </a>
    </div>
  );
}

export default function ServiceGrid() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="mb-6 text-center text-3xl font-bold">
        四大服務，一站完成評估
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <ServiceCard
          title="信用卡換現金"
          subtitle="最高參考實拿92%"
          description="依信用卡額度評估"
          button="立即了解"
        />
        <ServiceCard
          title="刷卡換現金"
          subtitle="最高參考實拿92%"
          description="流程透明"
          button="立即了解"
        />
        <ServiceCard
          title="電信小額換現金"
          subtitle="三大電信 / Google Pay / Apple Pay"
          description="依額度評估收購金額"
          button="立即詢問"
        />
        <ServiceCard
          title="後支付換現金"
          subtitle="業界最高5～7折"
          description="依平台額度評估"
          button="立即詢問"
        />
      </div>
    </section>
  );
}
