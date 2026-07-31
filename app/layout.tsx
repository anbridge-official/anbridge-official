import type { Metadata } from "next";
import { Inter, Noto_Sans_TC } from "next/font/google";
import "./globals.css";
import Schema from "./components/Schema";
import { SITE_URL } from "./lib/site";

const notoSansTc = Noto_Sans_TC({ variable: "--font-noto-sans-tc", subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

const rootUrl = new URL(SITE_URL);

export const metadata: Metadata = {
  metadataBase: rootUrl,
  title: {
    default: "信用卡換現金｜刷卡換現金｜安沛 AnBridge",
    template: "%s｜安沛 AnBridge",
  },
  description: "安沛 AnBridge 提供信用卡換現金、刷卡換現金、電信小額與後支付換現金諮詢。流程透明、隱私保護、全台服務，先透過 LINE 評估可行範圍與參考實拿金額。",
  keywords: ["信用卡換現金", "刷卡換現金", "電信小額換現金", "後支付換現金", "額度換現金", "安沛 AnBridge"],
  alternates: { canonical: new URL("/", SITE_URL).toString() },
  openGraph: {
    title: "信用卡換現金｜刷卡換現金最高參考實拿 93%｜安沛 AnBridge",
    description: "流程透明、隱私保護、全台服務；先透過 LINE 了解可行範圍與實拿金額。",
    url: new URL("/", SITE_URL).toString(),
    siteName: "安沛 AnBridge",
    locale: "zh_TW",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "安沛 AnBridge 信用卡換現金服務介紹" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "信用卡換現金｜刷卡換現金最高參考實拿 93%｜安沛 AnBridge",
    description: "先透過 LINE 了解可行範圍與實拿金額。",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-Hant" className={`${notoSansTc.variable} ${inter.variable}`}>
      <body>
        {children}
        <Schema />
      </body>
    </html>
  );
}
