import { ImageResponse } from "next/og";
export const alt = "安沛 AnBridge 信用卡換現金最高參考實拿 93%";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() { return new ImageResponse(<div style={{ height: "100%", width: "100%", display: "flex", background: "#0f2747", color: "white", padding: "70px", fontFamily: "sans-serif" }}><div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}><div style={{ fontSize: 32, fontWeight: 700, color: "#7dd3fc", letterSpacing: 4 }}>安沛 AnBridge</div><div style={{ marginTop: 24, fontSize: 62, fontWeight: 800 }}>信用卡換現金｜刷卡換現金</div><div style={{ marginTop: 18, fontSize: 54, fontWeight: 800, color: "#7dd3fc" }}>最高參考實拿 93%</div><div style={{ marginTop: 24, fontSize: 28 }}>全台服務｜流程透明｜LINE 快速諮詢</div></div></div>, size); }
