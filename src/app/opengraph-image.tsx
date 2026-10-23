import { ImageResponse } from "next/og";
import { profile } from "@/content/site";

export const alt = `${profile.name}: ${profile.role}`;
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
          background: "#f2f5f1",
          color: "#0f211d",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 80px",
          }}
        >
          <div
            style={{
              fontSize: 148,
              fontWeight: 800,
              letterSpacing: -4,
              lineHeight: 1,
            }}
          >
            {profile.name}
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 44,
              fontWeight: 500,
              lineHeight: 1.2,
              maxWidth: 940,
            }}
          >
            {profile.positioning}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            background: "#f4c20d",
            padding: "26px 80px",
            fontSize: 32,
            fontWeight: 700,
          }}
        >
          {profile.years} years · {profile.location} · akhil-p.dev
        </div>
      </div>
    ),
    size,
  );
}
