import type { Metadata } from "next";
import Process from "../components/Process";
import Header from "../components/Header";
import Footer from "../components/Footer";
export const metadata: Metadata = { title: "申請流程", description: "了解 AnBridge 諮詢服務的五個步驟。" };
export default function Page() { return <><Header /><main className="pt-16"><Process /></main><Footer /></>; }
