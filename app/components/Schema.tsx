export default function Schema() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "安沛 AnBridge",
    url: "https://anbridge.vercel.app",
    description: "安沛提供額度換現金相關服務，透過透明流程確認交易方式、預估實拿與相關費用。",
    telephone: "0900018000",
    address: {
      "@type": "PostalAddress",
      addressLocality: "桃園市蘆竹區",
      streetAddress: "奉化路15號",
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "安沛 AnBridge",
    description: "信用卡換現金、刷卡換現金、電信小額換現金、後支付換現金服務",
    telephone: "0900018000",
    address: {
      "@type": "PostalAddress",
      addressLocality: "桃園市蘆竹區",
      streetAddress: "奉化路15號",
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "信用卡換現金、刷卡換現金、額度換現金",
    provider: {
      "@type": "Organization",
      name: "安沛 AnBridge",
    },
    areaServed: "TW",
    description: "安沛提供額度換現金相關服務，透過透明流程確認交易方式、預估實拿與相關費用。",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "信用卡換現金可以拿多少？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "安沛依交易額度提供不同實拿比例，最高參考實拿 93%，實際金額需依當下條件確認。",
        },
      },
      {
        "@type": "Question",
        name: "信用卡換現金會有其他費用嗎？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "部分交易可能產生銀行海外交易服務費，通常約 1.5%，由發卡銀行依帳單收取，不是安沛額外收費。",
        },
      },
      {
        "@type": "Question",
        name: "什麼是身分審核 KYC？需要提供什麼？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "首次交易者需配合安沛進行 KYC 實名認證，確認交易本人身分，保障雙方交易安全。",
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
