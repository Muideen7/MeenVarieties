import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FDF6EC",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: 180,
          height: 180,
          borderRadius: 40,
          backgroundColor: "#E53E3E",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontSize: 120,
            fontWeight: "bold",
            color: "white",
          }}
        >
          M
        </span>
      </div>
      <div
        style={{
          fontSize: 56,
          fontWeight: "bold",
          color: "#1A1A1A",
          marginTop: 24,
        }}
      >
        MeensVarieties
      </div>
      <div
        style={{
          fontSize: 28,
          color: "#666",
          marginTop: 12,
        }}
      >
        Your One-Stop Variety Shop
      </div>
    </div>,
    { ...size }
  );
}