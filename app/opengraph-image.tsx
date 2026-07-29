import { ImageResponse } from "next/og";

export const alt = "安沛 AnBridge 信用卡換現金最高參考實拿93%";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          background: "linear-gradient(135deg, #f6fbff 0%, #dff4ff 100%)",
          color: "#0f172a",
          padding: "70px",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ fontSize: 34, fontWeight: 700, color: "#2563eb", letterSpacing: 4 }}>安沛 AnBridge</div>
          <div style={{ marginTop: 24, fontSize: 58, fontWeight: 800, lineHeight: 1.2 }}>額度換現金專家</div>
          <div style={{ marginTop: 24, fontSize: 70, fontWeight: 800, color: "#0f172a" }}>信用卡換現金</div>
          <div style={{ marginTop: 12, fontSize: 52, fontWeight: 800, color: "#2563eb" }}>最高參考實拿 93%</div>
        </div>
        <div
          style={{
            width: 320,
            height: 220,
            borderRadius: 28,
            background: "#ffffff",
            border: "2px solid #bfdbfe",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: 24,
            boxShadow: "0 20px 40px rgba(15, 23, 42, 0.08)",
          }}
        >
          <div style={{ fontSize: 24, color: "#2563eb", fontWeight: 700 }}>同樣 10 萬元</div>
          <div style={{ marginTop: 10, fontSize: 44, fontWeight: 800, color: "#0f172a" }}>最高多拿</div>
          <div style={{ fontSize: 42, fontWeight: 800, color: "#2563eb" }}>8,000 元</div>
        </div>
      </div>
    ),
    size,
  );
}
