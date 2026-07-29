import type { Metadata } from "next";
import FAQ from "../components/FAQ";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "常見問題與 KYC 說明",
  description: "AnBridge 的服務、流程、KYC 與個資安全常見問題說明。",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
