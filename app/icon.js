import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
  width: 192,
  height: 192,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          background: "linear-gradient(to bottom right, #3A0CA3, #4361EE)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "12%",
          fontSize: 120,
          color: "white",
          fontWeight: "bold",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "120%",
            height: "50%",
            background: "rgba(255,255,255,0.1)",
            top: "-20%",
            right: "-20%",
            transform: "rotate(45deg)",
          }}
        ></div>
        D
        <div
          style={{
            position: "absolute",
            width: "20px",
            height: "20px",
            background: "#E4FF1A",
            borderRadius: "50%",
            top: "15%",
            right: "15%",
            border: "2px solid #3A0CA3",
          }}
        ></div>
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  );
}
