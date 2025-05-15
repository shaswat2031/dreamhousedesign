import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DreamHouse Design - Interior & Architectural Design Studio",
  description:
    "Transform your space with DreamHouse Design Studio. We offer premium residential, commercial, and interior design services in Surat, Gujarat.",
  icons: {
    icon: { url: "/logo.jpg", type: "image/jpeg" },
    shortcut: { url: "/logo.jpg", type: "image/jpeg" },
    apple: { url: "/logo.jpg", type: "image/jpeg" },
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/logo.jpg",
    },
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "DreamHouse Design - Premium Architectural & Interior Design Studio",
    description:
      "Transform your living spaces with our expert architectural and interior design services. From concept to completion, we bring your dream home to life with innovative solutions, quality craftsmanship, and personalized attention.",
    url: "https://dreamhousedesign-steel.vercel.app/",
    siteName: "DreamHouse Design",
    images: [
      {
        url: "/logo.jpg",
        width: 500,
        height: 500,
        alt: "DreamHouse Design Logo",
      },
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DreamHouse Design Projects Showcase",
      },
    ],
    locale: "en_US",
    type: "website",
    countryName: "India",
    emails: ["Dreamhousedesign.2017@gmail.com"],
    phoneNumbers: ["+91 9727638760"],
  },
  twitter: {
    card: "summary_large_image",
    title: "DreamHouse Design - Where Dreams Become Reality",
    description:
      "Award-winning architectural & interior design services in Surat. Transform your space with our expert team. Residential, commercial & renovation projects.",
    images: [
      {
        url: "/twitter-card.jpg",
        alt: "DreamHouse Design Portfolio",
        width: 1200,
        height: 628,
      },
    ],
    creator: "@dreamhousedesign",
    site: "@dreamhousedesign",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.jpg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
