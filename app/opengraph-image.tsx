import { ImageResponse } from "next/og";
import { pages, site } from "@/content/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#F7F4EE",
          color: "#2B2B2B",
          padding: 80,
        }}
      >
        <div style={{ fontSize: 28, color: "#5C5C5C" }}>{site.name}</div>
        <div style={{ fontSize: 64, fontWeight: 700, marginTop: 16, maxWidth: 900 }}>
          {pages.home.h1}
        </div>
        <div style={{ fontSize: 28, marginTop: 24 }}>{site.address.line}</div>
      </div>
    ),
    size,
  );
}
