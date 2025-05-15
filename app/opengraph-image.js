import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "DreamHouse Design Studio";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 128,
          background: "linear-gradient(to right, #3A0CA3, #4361EE, #4CC9F0)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontWeight: "bold",
          fontFamily: "Inter",
          position: "relative",
        }}
      >
        <div
          style={{
            fontSize: "72px",
            background: "rgba(255,255,255,0.1)",
            padding: "20px 40px",
            borderRadius: "16px",
            boxShadow: "0 4px 30px rgba(0,0,0,0.1)",
            backdropFilter: "blur(5px)",
            border: "1px solid rgba(255,255,255,0.3)",
          }}
        >
          Dream<span style={{ color: "#4CC9F0" }}>House</span>
        </div>
        <div
          style={{
            fontSize: "36px",
            marginTop: "20px",
            color: "#E4FF1A",
          }}
        >
          DESIGN STUDIO ✨
        </div>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse width and height.
      ...size,
      fonts: [
        {
          name: "Inter",
          data: await interSemiBold,
          style: "normal",
          weight: 600,
        },
      ],
    }
  );
}
