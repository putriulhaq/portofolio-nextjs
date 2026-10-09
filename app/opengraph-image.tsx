import { ImageResponse } from "next/og";
import { site } from "./site";

export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 96,
          background: "#0f1110",
          color: "#e6e6e3",
          fontFamily: "monospace",
        }}
      >
        <div style={{ fontSize: 36, color: "#8a8a85", display: "flex" }}>
          <span style={{ color: "#4ade80" }}>$</span>&nbsp;whoami
        </div>
        <div style={{ fontSize: 68, fontWeight: 700, marginTop: 24, display: "flex" }}>
          {site.name}
          <span style={{ color: "#4ade80" }}>_</span>
        </div>
        <div style={{ fontSize: 36, color: "#8a8a85", marginTop: 16 }}>{site.role}</div>
      </div>
    ),
    size
  );
}
