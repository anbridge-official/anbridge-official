import { redirect } from "next/navigation";

export const metadata = {
  title: "刷卡換現金｜安沛",
  description: "刷卡換現金相關內容已整合至信用卡換現金服務頁。",
};

export default function Page() {
  redirect("/services/credit-card");
}
