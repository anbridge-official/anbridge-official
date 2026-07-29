import type { Metadata } from "next";
import { Inter, Noto_Sans_TC } from "next/font/google";
import "./globals.css";
import Schema from "./components/Schema";

const notoSansTc = Noto_Sans_TC({ variable: "--font-noto-sans-tc", subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://anbridge.vercel.app"),
  title: { default: "信用卡換現金｜刷卡換現金最高參考實拿93%｜安沛", template: "%s｜安沛" },
  description: "信用卡換現金、刷卡換現金服務。安沛最高參考實拿93%，先確認預估金額與流程，透明說明銀行海外交易服務費。",
  keywords: ["信用卡換現金", "刷卡換現金", "信用卡額度換現金", "信用卡變現", "信用卡現金周轉", "信用卡額度使用"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "信用卡換現金｜刷卡換現金最高參考實拿93%｜安沛",
    description: "額度換現金專家，先確認預估實拿金額，再決定是否辦理。",
    url: "/",
    siteName: "安沛 AnBridge",
    locale: "zh_TW",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "安沛 AnBridge 信用卡換現金最高實拿93%" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "信用卡換現金｜刷卡換現金最高參考實拿93%｜安沛",
    description: "額度換現金專家，先確認預估實拿金額，再決定是否辦理。",
  },
  robots: { index: true, follow: true },
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
