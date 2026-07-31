import type { Metadata } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Process from "../components/Process";
import { SITE_URL } from "../lib/site";
export const metadata: Metadata = { title: "辦理流程", description: "安沛額度換現金服務的 LINE 諮詢、KYC、額度與商品確認流程。", alternates: { canonical: new URL("/process", SITE_URL).toString() }, openGraph: { title: "辦理流程｜安沛 AnBridge", description: "了解信用卡換現金與刷卡換現金的諮詢、KYC 與交易流程。", url: new URL("/process", SITE_URL).toString(), type: "website" }, twitter: { card: "summary_large_image", title: "辦理流程｜安沛 AnBridge", description: "了解信用卡換現金與刷卡換現金的諮詢、KYC 與交易流程。" } };
export default function ProcessPage() { return <><Header /><main className="pt-[76px]"><Process /></main><Footer /></>; }
