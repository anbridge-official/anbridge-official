import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "信用卡換現金｜刷卡換現金｜最高參考實拿92%｜安沛",
  description:
    "安沛提供信用卡換現金、刷卡換現金、電信小額換現金、後支付換現金服務，最高參考實拿92%，立即加入LINE了解預估實拿金額。",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AnBridge 安沛",
    description:
      "Google搜尋 → 建立信任 → 加入LINE → 成交。安沛提供信用卡換現金、刷卡換現金、電信小額換現金、後支付換現金服務。",
    url: "https://anbridge.vercel.app",
    siteName: "AnBridge",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AnBridge 安沛",
      },
    ],
    locale: "zh_TW",
    type: "website",
  },
  keywords: ["信用卡換現金", "刷卡換現金"],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AnBridge 安沛",
  url: "https://anbridge.vercel.app",
  sameAs: ["https://line.me/R/ti/p/@anbridge"],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: "https://anbridge.vercel.app",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://anbridge.vercel.app/?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "信用卡換現金安全嗎？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "安沛流程透明，專人協助，避免隱藏費用，安全性高。",
      },
    },
    {
      "@type": "Question",
      name: "信用卡換現金 vs 預借現金？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "信用卡換現金通常比例更高，流程更彈性；預借現金則依銀行規定，費用較高。",
      },
    },
    {
      "@type": "Question",
      name: "為什麼有人只能拿85%？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "因為不同平台、額度與合作條件，實際比例會有所差異。",
      },
    },
    {
      "@type": "Question",
      name: "後支付支援哪些平台？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "依平台額度評估，業界最高可達5～7折。",
      },
    },
    {
      "@type": "Question",
      name: "電信支援哪些？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "三大電信、Google Pay、Apple Pay。",
      },
    },
    {
      "@type": "Question",
      name: "除了比例還有其他費用嗎？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "可能依銀行規定產生海外交易服務費，約1.5%。",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-Hant"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-gray-900">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      </body>
    </html>
  );
}
