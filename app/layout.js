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
    icon: { url: '/icon.png', type: 'image/png' },
    shortcut: { url: '/icon.png', type: 'image/png' },
    apple: { url: '/apple-icon.png', type: 'image/png' },
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-icon.png',
    },
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'DreamHouse Design - Interior & Architectural Design Studio',
    description: 'Transform your space with premium design services',
    url: 'https://dreamhousedesign.com',
    siteName: 'DreamHouse Design',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DreamHouse Design - Interior & Architectural Design Studio',
    description: 'Transform your space with premium design services',
    images: ['/opengraph-image.png'],
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
