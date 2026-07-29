import CTA from "./CTA";

type FAQItem = { question: string; answer: string };
type ComparisonItem = { label: string; market: string; reference: string; difference: string };
type TrustPoint = { title: string; body: string };

type ExtraSection = {
  title: string;
  intro?: string;
  bullets?: string[];
};

type ServiceConversionPageProps = {
  h1: string;
  hero: string;
  intentTitle: string;
  intentAnswer: string;
  intentBullets: string[];
  comparisonTitle: string;
  comparisonItems: ComparisonItem[];
  processTitle: string;
  processSteps: string[];
  trustTitle: string;
  trustPoints: TrustPoint[];
  faqs: FAQItem[];
  serviceName: string;
  serviceDescription: string;
  serviceUrl: string;
  extraSections?: ExtraSection[];
};

export default function ServiceConversionPage({
  h1,
  hero,
  intentTitle,
  intentAnswer,
  intentBullets,
  comparisonTitle,
  comparisonItems,
  processTitle,
  processSteps,
  trustTitle,
  trustPoints,
  faqs,
  serviceName,
  serviceDescription,
  serviceUrl,
  extraSections,
}: ServiceConversionPageProps) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "安沛 AnBridge",
    url: "https://anbridge.vercel.app",
    description: "安沛提供額度換現金相關服務，透過透明流程確認實拿金額與辦理方式。",
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    serviceType: serviceName,
    provider: {
      "@type": "Organization",
      name: "安沛 AnBridge",
    },
    areaServed: "TW",
    description: serviceDescription,
    url: `https://anbridge.vercel.app${serviceUrl}`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <main className="bg-[#F8FBFF] px-5 pb-20 pt-24 sm:px-8 lg:px-10">
        <article className="mx-auto max-w-6xl space-y-5">
          <header className="rounded-[28px] border border-slate-200 bg-[#0F2747] p-7 text-white shadow-[0_28px_80px_rgba(15,39,71,0.16)] sm:p-10 lg:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">SEARCH → TRUST → COMPARE → LINE</p>
            <h1 className="mt-4 text-[1.8rem] font-extrabold leading-tight sm:text-[2.5rem]">{h1}</h1>
            <p className="mt-5 max-w-3xl text-[1rem] leading-8 text-slate-200 sm:text-lg">{hero}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTA label="馬上了解實拿金額" />
            </div>
            <p className="mt-4 text-sm text-slate-300">先確認實際可取得金額，再決定是否適合辦理。</p>
          </header>

          <section className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm sm:p-7 lg:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0F2747]">服務介紹</p>
            <h2 className="mt-2 text-[1.3rem] font-bold text-slate-900 sm:text-[1.7rem]">先了解服務內容，再判斷是否適合</h2>
            <p className="mt-4 text-[1rem] leading-8 text-slate-700">{serviceDescription}</p>
            <div className="mt-6 rounded-[18px] border border-slate-200 bg-[#F8FBFF] p-4 text-slate-700 sm:p-5">
              安沛以透明流程與真人 LINE 協助為原則，會先把實際可取得金額、可能費用與適合的下一步說清楚。
            </div>
          </section>

          <section className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm sm:p-7 lg:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0F2747]">搜尋者問題回答</p>
              <h2 className="mt-2 text-[1.3rem] font-bold text-slate-900 sm:text-[1.7rem]">{intentTitle}</h2>
              <p className="mt-4 text-[1rem] leading-8 text-slate-700">{intentAnswer}</p>
              <ul className="mt-6 space-y-2.5">
                {intentBullets.map((item) => (
                  <li key={item} className="rounded-[16px] border border-slate-200 bg-[#F8FBFF] px-4 py-3 text-slate-700">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[24px] border border-slate-200 bg-[#EFF6FF] p-6 shadow-sm sm:p-7 lg:p-8">
              <h2 className="text-[1.3rem] font-bold text-slate-900 sm:text-[1.7rem]">{comparisonTitle}</h2>
              <p className="mt-2 text-[0.95rem] leading-7 text-slate-700">以下為參考範例，實際金額仍會依條件確認。</p>
              <div className="mt-5 space-y-3">
                {comparisonItems.map((item) => (
                  <div key={item.label} className="rounded-[18px] bg-white p-4 shadow-sm">
                    <p className="text-sm font-semibold text-slate-800">{item.label}</p>
                    <div className="mt-3 grid gap-2 sm:grid-cols-3">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">市場常見</p>
                        <p className="mt-1 font-semibold text-slate-800">{item.market}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">安沛參考</p>
                        <p className="mt-1 font-semibold text-slate-800">{item.reference}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">差異</p>
                        <p className="mt-1 font-semibold text-slate-800">{item.difference}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm sm:p-7 lg:p-8">
            <h2 className="text-[1.3rem] font-bold text-slate-900 sm:text-[1.7rem]">{processTitle}</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-4">
              {processSteps.map((step, index) => (
                <div key={step} className="rounded-[18px] border border-slate-200 bg-[#F8FBFF] p-4">
                  <p className="text-sm font-semibold text-[#0F2747]">0{index + 1}</p>
                  <p className="mt-2 font-semibold text-slate-800">{step}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm sm:p-7 lg:p-8">
            <h2 className="text-[1.3rem] font-bold text-slate-900 sm:text-[1.7rem]">{trustTitle}</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {trustPoints.map((point) => (
                <div key={point.title} className="rounded-[18px] border border-slate-200 bg-[#F8FBFF] p-4 sm:p-5">
                  <h3 className="text-lg font-semibold text-slate-900">{point.title}</h3>
                  <p className="mt-2 leading-7 text-slate-700">{point.body}</p>
                </div>
              ))}
            </div>
          </section>

          {extraSections && extraSections.length > 0 ? (
            <section className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm sm:p-7 lg:p-8">
              <h2 className="text-[1.3rem] font-bold text-slate-900 sm:text-[1.7rem]">專業內容</h2>
              <div className="mt-6 space-y-4">
                {extraSections.map((section) => (
                  <div key={section.title} className="rounded-[18px] border border-slate-200 bg-[#F8FBFF] p-4 sm:p-5">
                    <h3 className="text-lg font-semibold text-slate-900">{section.title}</h3>
                    {section.intro ? <p className="mt-3 leading-8 text-slate-700">{section.intro}</p> : null}
                    {section.bullets && section.bullets.length > 0 ? (
                      <ul className="mt-4 space-y-2">
                        {section.bullets.map((bullet) => (
                          <li key={bullet} className="leading-8 text-slate-700">• {bullet}</li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          <section className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm sm:p-7 lg:p-8">
            <h2 className="text-[1.3rem] font-bold text-slate-900 sm:text-[1.7rem]">常見問題</h2>
            <div className="mt-6 space-y-3">
              {faqs.map((faq) => (
                <details key={faq.question} className="rounded-[18px] border border-slate-200 bg-[#F8FBFF] p-4">
                  <summary className="cursor-pointer text-base font-semibold text-slate-900">{faq.question}</summary>
                  <p className="mt-3 whitespace-pre-line leading-7 text-slate-700">{faq.answer}</p>
                </details>
              ))}
            </div>
            <div className="mt-8">
              <CTA label="馬上了解實拿金額" />
            </div>
          </section>
        </article>
      </main>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
