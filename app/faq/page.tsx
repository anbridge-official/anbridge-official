import type { Metadata } from "next";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { SITE_URL } from "../lib/site";
export const metadata: Metadata = { title: "常見問題｜信用卡換現金與 KYC 說明", description: "了解信用卡換現金、刷卡換現金的申請條件、KYC 身分審核、流程與安全注意事項。", alternates: { canonical: new URL("/faq", SITE_URL).toString() }, openGraph: { title: "常見問題｜信用卡換現金與 KYC 說明", description: "了解信用卡換現金、刷卡換現金的申請條件與流程。", url: new URL("/faq", SITE_URL).toString(), type: "website" }, twitter: { card: "summary_large_image", title: "常見問題｜信用卡換現金與 KYC 說明", description: "了解信用卡換現金、刷卡換現金的申請條件與流程。" } };
export default function FAQPage() { return <><Header /><main className="pt-[76px]"><FAQ /></main><Footer /></>; }
